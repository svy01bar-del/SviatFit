package com.sviat.pflege;

import android.content.Intent;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.pdf.PdfDocument;
import android.net.Uri;
import android.webkit.WebView;
import androidx.test.platform.app.InstrumentationRegistry;
import androidx.test.ext.junit.runners.AndroidJUnit4;
import org.junit.Test;
import org.junit.runner.RunWith;
import java.io.File;
import java.io.FileOutputStream;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;
import static org.junit.Assert.*;

@RunWith(AndroidJUnit4.class)
public class PflegeSmokeTest {
    private MainActivity activity;
    private WebView web;
    private String js(String code)throws Exception{
        CountDownLatch latch=new CountDownLatch(1);
        AtomicReference<String> answer=new AtomicReference<>();
        InstrumentationRegistry.getInstrumentation().runOnMainSync(()->web.evaluateJavascript(code,value->{answer.set(value);latch.countDown();}));
        assertTrue("JavaScript callback timed out",latch.await(15,TimeUnit.SECONDS));
        return answer.get();
    }
    private void ready()throws Exception{
        Intent launch=new Intent(InstrumentationRegistry.getInstrumentation().getTargetContext(),MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        activity=(MainActivity)InstrumentationRegistry.getInstrumentation().startActivitySync(launch);
        Field field=MainActivity.class.getDeclaredField("web");field.setAccessible(true);web=(WebView)field.get(activity);
        long deadline=System.currentTimeMillis()+30000;
        while(System.currentTimeMillis()<deadline){if("true".equals(js("!!window.PflegeApp && document.readyState==='complete'")))return;Thread.sleep(300);}
        fail("App did not load");
    }
    @Test public void offlineCourseThemeDictionaryAndPdfOcr()throws Exception{
        ready();
        assertEquals("18",js("window.PflegeApp.data.modules.length"));
        assertEquals("1092",js("Object.keys(window.PflegeApp.data.dictionary).length"));
        js("window.PflegeApp.go('course');");
        js("document.querySelector('[data-action=\"unit\"]').click();");
        assertTrue(js("document.body.textContent").contains("Знайомство"));
        js("document.querySelector('[data-action=\"speak-reading\"]').click();");
        long audioDeadline=System.currentTimeMillis()+10000;
        while(System.currentTimeMillis()<audioDeadline){if("true".equals(js("!!window.PflegeApp.getAudioState()&&!window.PflegeApp.getAudioState().paused&&!window.PflegeApp.getAudioState().error")))break;Thread.sleep(200);}
        assertEquals("true",js("!!window.PflegeApp.getAudioState()&&!window.PflegeApp.getAudioState().paused&&!window.PflegeApp.getAudioState().error"));
        js("document.querySelector('[data-word=\"Pflegeheim\"]').click();");
        assertTrue(js("document.getElementById('word-result').textContent").contains("догляду"));
        js("document.getElementById('modal').close();window.PflegeApp.go('settings');");
        js("var s=document.getElementById('theme-setting');s.value='light';s.dispatchEvent(new Event('change',{bubbles:true}));");
        assertEquals("\"light\"",js("document.documentElement.dataset.theme"));
        js("window.PflegeApp.go('ausbildung');");
        assertTrue(js("document.body.textContent").contains("2 × 120"));
        js("window.PflegeApp.go('exam-case','trinken');");
        js("document.querySelector('[data-action=\"exam-answer\"][data-index=\"0\"][data-option=\"1\"]').click();");
        assertTrue(js("document.querySelector('.feedback.good').textContent").contains("конкретний факт"));
        js("document.querySelector('[data-action=\"exam-speak\"][data-type=\"model\"]').click();");
        long newAudioDeadline=System.currentTimeMillis()+10000;
        while(System.currentTimeMillis()<newAudioDeadline){if("true".equals(js("!!window.PflegeApp.getAudioState()&&!window.PflegeApp.getAudioState().paused&&!window.PflegeApp.getAudioState().error")))break;Thread.sleep(200);}
        assertEquals("true",js("!!window.PflegeApp.getAudioState()&&!window.PflegeApp.getAudioState().paused&&!window.PflegeApp.getAudioState().error"));
        js("window.PflegeApp.go('lesson','palliativ','reading');document.querySelector('[data-word=\"Würde\"]').click();");
        assertTrue(js("document.getElementById('word-result').textContent").contains("гідність"));
        js("document.getElementById('modal').close();");
        int[] location=new int[2];
        InstrumentationRegistry.getInstrumentation().runOnMainSync(()->web.getLocationOnScreen(location));
        assertTrue("Status bar overlaps app",location[1]>0);
        File pdf=new File(activity.getCacheDir(),"pflege-smoke.pdf");
        PdfDocument document=new PdfDocument();
        PdfDocument.Page page=document.startPage(new PdfDocument.PageInfo.Builder(595,842,1).create());
        Canvas canvas=page.getCanvas();Paint paint=new Paint();paint.setTextSize(24);paint.setAntiAlias(true);
        canvas.drawText("Frau Berg trinkt Tee.",50,120,paint);
        canvas.drawText("Guten Morgen. Ich bin Sviat.",50,170,paint);
        document.finishPage(page);
        try(FileOutputStream out=new FileOutputStream(pdf)){document.writeTo(out);}document.close();
        Method process=MainActivity.class.getDeclaredMethod("processPdf",Uri.class);process.setAccessible(true);
        AtomicReference<Throwable> error=new AtomicReference<>();
        Thread worker=new Thread(()->{try{process.invoke(activity,Uri.fromFile(pdf));}catch(Throwable e){error.set(e);}});
        worker.start();worker.join(90000);
        assertFalse("PDF OCR timed out",worker.isAlive());assertNull(error.get());
        long deadline=System.currentTimeMillis()+15000;String extracted="";
        while(System.currentTimeMillis()<deadline){extracted=js("window.PflegeApp.getBooks().map(b=>b.pages.join(' ')).join(' ')");if(extracted.contains("Berg")&&extracted.contains("Tee"))break;Thread.sleep(250);}
        assertTrue("Bundled offline OCR did not read German PDF: "+extracted,extracted.contains("Berg")&&extracted.contains("Tee"));
        assertTrue(js("window.PflegeApp.getBooks().some(b=>!b.partial)").contains("true"));
        pdf.delete();
        InstrumentationRegistry.getInstrumentation().runOnMainSync(()->activity.finish());
    }
}
