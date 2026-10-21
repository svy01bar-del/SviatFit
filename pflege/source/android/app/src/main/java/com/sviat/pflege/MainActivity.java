package com.sviat.pflege;

import android.app.Activity;
import android.content.Intent;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.Insets;
import android.graphics.pdf.PdfRenderer;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.ParcelFileDescriptor;
import android.provider.OpenableColumns;
import android.speech.tts.TextToSpeech;
import android.speech.tts.Voice;
import android.view.View;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.webkit.JavascriptInterface;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebChromeClient;
import android.widget.FrameLayout;

import com.google.android.gms.tasks.Tasks;
import com.google.mlkit.common.model.RemoteModelManager;
import com.google.mlkit.common.model.DownloadConditions;
import com.google.mlkit.nl.translate.TranslateLanguage;
import com.google.mlkit.nl.translate.TranslateRemoteModel;
import com.google.mlkit.nl.translate.Translation;
import com.google.mlkit.nl.translate.Translator;
import com.google.mlkit.nl.translate.TranslatorOptions;
import com.google.mlkit.vision.common.InputImage;
import com.google.mlkit.vision.text.TextRecognition;
import com.google.mlkit.vision.text.TextRecognizer;
import com.google.mlkit.vision.text.latin.TextRecognizerOptions;

import org.json.JSONArray;
import org.json.JSONObject;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.Locale;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;

public final class MainActivity extends Activity {
    private static final int PICK_PDF=41, PICK_BACKUP=42, SAVE_BACKUP=43;
    private WebView web;
    private FrameLayout root;
    private TextToSpeech tts;
    private Translator translator;
    private volatile boolean ttsReady=false, modelsReady=false;
    private final ExecutorService io=Executors.newSingleThreadExecutor();
    private final AtomicBoolean ocrBusy=new AtomicBoolean(false), cancelled=new AtomicBoolean(false);
    private String pendingBackup;

    @Override public void onCreate(Bundle saved) {
        super.onCreate(saved);
        root=new FrameLayout(this);
        root.setBackgroundColor(Color.parseColor("#0d1222"));
        if(Build.VERSION.SDK_INT>=30)getWindow().setDecorFitsSystemWindows(false);
        root.setOnApplyWindowInsetsListener((v,insets)->{
            if(Build.VERSION.SDK_INT>=30){
                Insets pad=insets.getInsets(WindowInsets.Type.systemBars()|WindowInsets.Type.displayCutout()|WindowInsets.Type.ime());
                v.setPadding(pad.left,pad.top,pad.right,pad.bottom);
            }else{
                v.setPadding(insets.getSystemWindowInsetLeft(),insets.getSystemWindowInsetTop(),insets.getSystemWindowInsetRight(),insets.getSystemWindowInsetBottom());
            }
            return insets;
        });
        web=new WebView(this);
        web.setBackgroundColor(Color.parseColor("#0d1222"));
        root.addView(web,new FrameLayout.LayoutParams(-1,-1));
        setContentView(root);
        root.requestApplyInsets();
        WebSettings settings=web.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(false);
        settings.setAllowFileAccessFromFileURLs(false);
        settings.setAllowUniversalAccessFromFileURLs(false);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        settings.setSafeBrowsingEnabled(true);
        settings.setTextZoom(100);
        settings.setMediaPlaybackRequiresUserGesture(false);
        web.addJavascriptInterface(new Bridge(),"Native");
        web.setWebChromeClient(new WebChromeClient());
        web.setWebViewClient(new WebViewClient(){
            private boolean block(String url){return url==null||!url.startsWith("file:///android_asset/index.html");}
            @Override public boolean shouldOverrideUrlLoading(WebView view,WebResourceRequest request){return block(request.getUrl().toString());}
            @Override public boolean shouldOverrideUrlLoading(WebView view,String url){return block(url);}
        });
        translator=Translation.getClient(new TranslatorOptions.Builder().setSourceLanguage(TranslateLanguage.GERMAN).setTargetLanguage(TranslateLanguage.UKRAINIAN).build());
        tts=new TextToSpeech(this,status->{
            if(status!=TextToSpeech.SUCCESS)return;
            Set<Voice> voices=tts.getVoices();
            if(voices!=null)for(Voice voice:voices){
                if("de".equals(voice.getLocale().getLanguage())&&!voice.isNetworkConnectionRequired()){
                    tts.setVoice(voice);ttsReady=true;break;
                }
            }
        });
        web.loadUrl("file:///android_asset/index.html");
    }

    private void call(String function,Object... args){
        JSONArray array=new JSONArray();
        for(Object arg:args)array.put(arg==null?JSONObject.NULL:arg);
        runOnUiThread(()->{
            if(isFinishing()||isDestroyed()||web==null)return;
            web.evaluateJavascript("(function(){if(window.PflegeApp&&window.PflegeApp."+function+")window.PflegeApp."+function+".apply(null,"+array+");})();",null);
        });
    }
    private void message(String s){call("nativeMessage",s);}
    private JSONObject json(Object... pairs){
        JSONObject o=new JSONObject();
        try{for(int i=0;i<pairs.length;i+=2)o.put(String.valueOf(pairs[i]),pairs[i+1]);}catch(Exception ignored){}
        return o;
    }
    private void checkModels(){
        RemoteModelManager.getInstance().getDownloadedModels(TranslateRemoteModel.class).addOnSuccessListener(models->{
            boolean de=false,uk=false;
            for(TranslateRemoteModel m:models){
                if(TranslateLanguage.GERMAN.equals(m.getLanguage()))de=true;
                if(TranslateLanguage.UKRAINIAN.equals(m.getLanguage()))uk=true;
            }
            modelsReady=de&&uk;
            call("modelStatus",modelsReady?"Моделі DE → UA встановлені. Довільний переклад працює офлайн.":"Довільний переклад потребує одноразового завантаження моделей. Словник курсу вже працює офлайн.");
        }).addOnFailureListener(e->call("modelStatus","Не вдалося перевірити моделі. Словник курсу працює без них."));
    }
    private final class Bridge {
        @JavascriptInterface public void speak(String text,double rate){
            if(text==null)return;
            runOnUiThread(()->{
                if(!ttsReady){message("Установи локальний німецький голос у налаштуваннях синтезу мовлення.");return;}
                tts.setSpeechRate((float)Math.max(.6,Math.min(1.2,rate)));
                tts.speak(text.substring(0,Math.min(text.length(),3900)),TextToSpeech.QUEUE_FLUSH,null,"pflege-"+System.nanoTime());
            });
        }
        @JavascriptInterface public void stopSpeech(){runOnUiThread(()->{if(tts!=null)tts.stop();});}
        @JavascriptInterface public void setTheme(String theme){
            runOnUiThread(()->{
                boolean light="light".equals(theme);
                int background=Color.parseColor(light?"#f4f6fc":"#0d1222");
                root.setBackgroundColor(background);web.setBackgroundColor(background);
                getWindow().setStatusBarColor(background);getWindow().setNavigationBarColor(background);
                if(Build.VERSION.SDK_INT>=30){
                    WindowInsetsController controller=getWindow().getInsetsController();
                    if(controller!=null){
                        int flags=WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS|WindowInsetsController.APPEARANCE_LIGHT_NAVIGATION_BARS;
                        controller.setSystemBarsAppearance(light?flags:0,flags);
                    }
                }else{
                    getWindow().getDecorView().setSystemUiVisibility(light?View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR|View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR:0);
                }
            });
        }
        @JavascriptInterface public void checkModels(){runOnUiThread(MainActivity.this::checkModels);}
        @JavascriptInterface public void translate(String word){
            if(word==null||word.isEmpty()||word.length()>1000)return;
            runOnUiThread(()->{
                if(!modelsReady){call("translation",word,"","Спочатку завантаж мовні моделі в Опціях. Вбудований словник уже працює офлайн.");return;}
                translator.translate(word).addOnSuccessListener(result->call("translation",word,result,null)).addOnFailureListener(e->call("translation",word,"","Не вдалося перекласти. Перевір наявність моделей у налаштуваннях."));
            });
        }
        @JavascriptInterface public void downloadModels(boolean mobile){
            runOnUiThread(()->{
                DownloadConditions.Builder builder=new DownloadConditions.Builder();
                if(!mobile)builder.requireWifi();
                call("modelStatus","Завантаження моделей…"+(mobile?"":" Очікування Wi-Fi, якщо його немає."));
                translator.downloadModelIfNeeded(builder.build()).addOnSuccessListener(v->{
                    modelsReady=true;call("modelStatus","Моделі встановлені. Довільний переклад працює офлайн.");message("Мовні моделі готові.");
                }).addOnFailureListener(e->call("modelStatus","Моделі не завантажено. Перевір з’єднання й спробуй ще раз."));
            });
        }
        @JavascriptInterface public void openTtsSettings(){runOnUiThread(()->{
            try{startActivity(new Intent("com.android.settings.TTS_SETTINGS"));}catch(Exception e){try{startActivity(new Intent(android.provider.Settings.ACTION_SETTINGS));}catch(Exception ignored){message("Відкрий системні налаштування синтезу мовлення.");}}
        });}
        @JavascriptInterface public void importPdf(){runOnUiThread(()->{
            if(ocrBusy.get()){message("Інший PDF ще розпізнається.");return;}
            try{Intent pick=new Intent(Intent.ACTION_OPEN_DOCUMENT).setType("application/pdf").addCategory(Intent.CATEGORY_OPENABLE);startActivityForResult(pick,PICK_PDF);}catch(Exception e){message("Не вдалося відкрити вибір PDF.");}
        });}
        @JavascriptInterface public void cancelOcr(){cancelled.set(true);message("Зупиню після поточної сторінки. Уже розпізнаний текст збережеться.");}
        @JavascriptInterface public void openExternal(String url){
            if(url==null)return;
            Uri uri=Uri.parse(url);
            String host=uri.getHost();
            if(!"https".equals(uri.getScheme())||host==null)return;
            if(!host.equals("www.bibb.de")&&!host.equals("www.recht.bund.de")&&!host.equals("www.telc.net")&&!host.equals("www.deutsch-am-arbeitsplatz.de"))return;
            runOnUiThread(()->{try{startActivity(new Intent(Intent.ACTION_VIEW,uri));}catch(Exception e){message("Не вдалося відкрити браузер.");}});
        }
        @JavascriptInterface public void exportBackup(String text){if(text==null||text.length()>20000000){message("Резервна копія завелика.");return;}runOnUiThread(()->{
            pendingBackup=text;
            try{Intent save=new Intent(Intent.ACTION_CREATE_DOCUMENT).setType("application/json").addCategory(Intent.CATEGORY_OPENABLE).putExtra(Intent.EXTRA_TITLE,"Sviat_Pflege_Backup.json");startActivityForResult(save,SAVE_BACKUP);}catch(Exception e){pendingBackup=null;message("Не вдалося відкрити збереження файлу.");}
        });}
        @JavascriptInterface public void importBackup(){runOnUiThread(()->{
            try{Intent pick=new Intent(Intent.ACTION_OPEN_DOCUMENT).setType("*/*").addCategory(Intent.CATEGORY_OPENABLE).putExtra(Intent.EXTRA_MIME_TYPES,new String[]{"application/json","text/plain","application/octet-stream"});startActivityForResult(pick,PICK_BACKUP);}catch(Exception e){message("Не вдалося відкрити вибір резервної копії.");}
        });}
        @JavascriptInterface public void closeApp(){runOnUiThread(()->finish());}
    }

    @Override protected void onActivityResult(int request,int result,Intent data){
        super.onActivityResult(request,result,data);
        if(result!=RESULT_OK||data==null||data.getData()==null){if(request==SAVE_BACKUP)pendingBackup=null;return;}
        Uri uri=data.getData();
        if(request==SAVE_BACKUP){
            final String text=pendingBackup;pendingBackup=null;if(text==null)return;
            io.execute(()->{try(OutputStream out=getContentResolver().openOutputStream(uri)){if(out==null)throw new Exception();out.write(text.getBytes(StandardCharsets.UTF_8));message("Резервну копію збережено.");}catch(Exception e){message("Не вдалося зберегти резервну копію.");}});
        }else if(request==PICK_BACKUP){
            io.execute(()->{try(InputStream in=getContentResolver().openInputStream(uri)){if(in==null)throw new Exception();ByteArrayOutputStream bytes=new ByteArrayOutputStream();byte[] buf=new byte[16384];int n,total=0;while((n=in.read(buf))!=-1){total+=n;if(total>20000000)throw new Exception("size");bytes.write(buf,0,n);}call("importProgress",bytes.toString(StandardCharsets.UTF_8.name()));}catch(Exception e){message("Не вдалося прочитати резервну копію (максимум 20 МБ).");}});
        }else if(request==PICK_PDF){
            if(!ocrBusy.compareAndSet(false,true)){message("Інший PDF ще розпізнається.");return;}
            cancelled.set(false);message("Готую PDF до розпізнавання…");io.execute(()->processPdf(uri));
        }
    }
    private String displayName(Uri uri){
        try(Cursor cursor=getContentResolver().query(uri,new String[]{OpenableColumns.DISPLAY_NAME},null,null,null)){
            if(cursor!=null&&cursor.moveToFirst())return cursor.getString(0);
        }catch(Exception ignored){}
        return "Імпортований PDF";
    }
    private void processPdf(Uri uri){
        String id="pdf-"+UUID.randomUUID(),name=displayName(uri);
        File file=null;TextRecognizer recognizer=null;int processed=0,total=0;boolean started=false;String error=null;
        try{
            file=File.createTempFile("pflege-",".pdf",getCacheDir());
            try(InputStream in=getContentResolver().openInputStream(uri);OutputStream out=new FileOutputStream(file)){
                if(in==null)throw new Exception("PDF недоступний.");
                byte[] buf=new byte[65536];int n;long count=0;
                while((n=in.read(buf))!=-1){count+=n;if(count>100000000)throw new Exception("PDF завеликий: максимум 100 МБ.");out.write(buf,0,n);}
            }
            recognizer=TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS);
            try(ParcelFileDescriptor fd=ParcelFileDescriptor.open(file,ParcelFileDescriptor.MODE_READ_ONLY);PdfRenderer renderer=new PdfRenderer(fd)){
                total=renderer.getPageCount();if(total>2500)throw new Exception("PDF містить понад 2500 сторінок.");
                call("ocrStart",json("id",id,"name",name,"total",total));started=true;
                for(int pageIndex=0;pageIndex<total&&!cancelled.get()&&!Thread.currentThread().isInterrupted();pageIndex++){
                    Bitmap bitmap=null;
                    try(PdfRenderer.Page page=renderer.openPage(pageIndex)){
                        float scale=Math.min(1800f/Math.max(1,page.getWidth()),2600f/Math.max(1,page.getHeight()));
                        int width=Math.max(1,Math.round(page.getWidth()*scale)),height=Math.max(1,Math.round(page.getHeight()*scale));
                        bitmap=Bitmap.createBitmap(width,height,Bitmap.Config.ARGB_8888);bitmap.eraseColor(Color.WHITE);
                        page.render(bitmap,null,null,PdfRenderer.Page.RENDER_MODE_FOR_DISPLAY);
                        String text=Tasks.await(recognizer.process(InputImage.fromBitmap(bitmap,0)),45,TimeUnit.SECONDS).getText();
                        processed++;
                        call("ocrPage",json("id",id,"page",processed,"total",total,"text",text));
                    }finally{if(bitmap!=null)bitmap.recycle();}
                }
            }
        }catch(Exception e){error="PDF оброблено частково або не відкрито: "+(e.getMessage()==null?"перевір файл":e.getMessage());}
        finally{
            if(recognizer!=null)recognizer.close();if(file!=null)file.delete();ocrBusy.set(false);
            if(started)call("ocrDone",json("id",id,"partial",processed<total,"error",error==null?(cancelled.get()?"Розпізнавання зупинено. Частковий текст збережено.":JSONObject.NULL):error));
            else message(error==null?"PDF не відкрито.":error);
        }
    }
    @Override public void onBackPressed(){if(web!=null)web.evaluateJavascript("if(window.PflegeApp&&window.PflegeApp.back)window.PflegeApp.back();",null);else super.onBackPressed();}
    @Override protected void onDestroy(){cancelled.set(true);io.shutdownNow();if(tts!=null){tts.stop();tts.shutdown();}if(translator!=null)translator.close();if(web!=null){web.removeJavascriptInterface("Native");web.destroy();web=null;}super.onDestroy();}
}
