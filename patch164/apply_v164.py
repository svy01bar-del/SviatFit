from pathlib import Path

p = Path("app/src/main/assets/index.html")
s = p.read_text(encoding="utf-8")

s = s.replace("SviatFit 1.6.3", "SviatFit 1.6.4")
s = s.replace('>1.6.2</span>', '>1.6.4</span>')
s = s.replace('>1.6.3</span>', '>1.6.4</span>')

css = r"""
/* SviatFit 1.6.4 — vitamins and supplements */
.navin{grid-template-columns:repeat(6,1fr)!important}
.nav button{font-size:10px;padding:7px 2px}
.nav .ico{font-size:18px}
.vit-head{display:flex;align-items:flex-end;justify-content:space-between;gap:10px;margin-bottom:8px}
.vit-head h2{margin:0}
.vit-card{padding:14px;border-radius:18px;background:#151c27;border:1px solid #2a3648}
.vit-product{display:grid;grid-template-columns:60px minmax(0,1fr);gap:12px;align-items:center}
.vit-icon{width:60px;height:60px;border-radius:16px;display:grid;place-items:center;font-size:30px;background:#1d2b3a;border:1px solid #33475f}
.vit-title{font-size:20px;font-weight:900;line-height:1.1}
.vit-brand{font-size:12px;color:var(--muted);margin-top:3px}
.vit-dose{margin-top:10px;padding:10px 12px;border-radius:14px;background:#101720;border:1px solid #29384b}
.vit-dose strong{font-size:15px}
.vit-table{display:grid;grid-template-columns:1.2fr .8fr .8fr;margin-top:11px;border:1px solid #29384b;border-radius:14px;overflow:hidden}
.vit-table>div{padding:9px 8px;border-bottom:1px solid #29384b;background:#111821;font-size:12px}
.vit-table>div:nth-last-child(-n+3){border-bottom:0}
.vit-table .head{font-size:10px;color:var(--muted);font-weight:800;background:#0f151e}
.vit-table .n{text-align:right}
.vit-take{width:100%;min-height:56px;margin-top:12px;border-radius:15px;border:1px solid #35614e;background:#17382b;color:#a7f3ca;font-weight:900;font-size:16px}
.vit-take.taken{background:#10271f;color:#79d7a6;border-color:#2c5543}
.vit-reminder{margin-top:12px;padding-top:12px;border-top:1px solid var(--line)}
.vit-reminder-row{display:grid;grid-template-columns:minmax(0,1fr) 118px;gap:9px;align-items:center}
.vit-reminder input[type=time]{min-height:46px}
.vit-week{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;margin-top:12px}
.vit-day{min-width:0;text-align:center;padding:8px 2px;border:1px solid #283446;border-radius:11px;background:#101720}
.vit-day b{display:block;font-size:11px}
.vit-day span{font-size:16px;display:block;margin-top:3px}
.vit-day.ok{background:#10271f;border-color:#2c5543;color:#7fe0ae}
.vit-note{font-size:11px;color:var(--muted);line-height:1.45;margin-top:10px}
@media(max-width:380px){
 .nav button{font-size:9px}
 .nav .ico{font-size:17px}
 .vit-reminder-row{grid-template-columns:1fr}
}
"""
if "/* SviatFit 1.6.4 — vitamins and supplements */" not in s:
    s = s.replace("</style>", css + "\n</style>", 1)

old_nav = """    <button data-tab="history"><span class="ico">🗂️</span>Історія</button>
    <button data-tab="settings"><span class="ico">⚙️</span>Налашт.</button>"""
new_nav = """    <button data-tab="history"><span class="ico">🗂️</span>Історія</button>
    <button data-tab="vitamins"><span class="ico">💊</span>Віт.</button>
    <button data-tab="settings"><span class="ico">⚙️</span>Налашт.</button>"""
if old_nav not in s:
    raise SystemExit("bottom nav insertion point not found")
s = s.replace(old_nav, new_nav, 1)

old_render = """ if(tab==='history')renderHistory();
 if(tab==='settings')renderSettings();"""
new_render = """ if(tab==='history')renderHistory();
 if(tab==='vitamins')renderVitamins();
 if(tab==='settings')renderSettings();"""
if old_render not in s:
    raise SystemExit("render routing insertion point not found")
s = s.replace(old_render, new_render, 1)

state_marker = "if(!Array.isArray(state.exerciseLibrary)) state.exerciseLibrary=[];"
state_insert = r"""
if(!Array.isArray(state.supplements)||!state.supplements.length){
 state.supplements=[{
  id:'zma-vplab',
  name:'ZMA',
  brand:'VPLab',
  capsulesPerDay:3,
  reminderTime:'22:30',
  reminderEnabled:false,
  labelNote:'3 капсули щодня з водою, бажано перед сном.',
  nutrients:[
   {name:'Вітамін B6',perCapsule:'3,3 мг',daily:'10 мг'},
   {name:'Магній',perCapsule:'112 мг',daily:'336 мг'},
   {name:'Цинк',perCapsule:'10 мг',daily:'30 мг'}
  ]
 }];
}
if(!state.supplementLog||typeof state.supplementLog!=='object')state.supplementLog={};
"""
if state_marker not in s:
    raise SystemExit("state supplement insertion point not found")
s = s.replace(state_marker, state_marker + state_insert, 1)

marker = "function renderSettings(){"
vitamins = r"""
function supplementTaken(dateKey,id){
 return !!(state.supplementLog?.[dateKey]?.[id]?.taken);
}
function renderVitamins(){
 const sup=state.supplements[0];
 const today=localDateKey();
 const todayTaken=supplementTaken(today,sup.id);
 const log=state.supplementLog[today]?.[sup.id];
 const days=[];
 for(let i=6;i>=0;i--){
  const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()-i);
  const k=localDateKey(d);
  days.push({k,label:new Intl.DateTimeFormat('uk-UA',{weekday:'short'}).format(d).replace('.',''),taken:supplementTaken(k,sup.id)});
 }
 $('#screen').innerHTML=`
  <div class="vit-head"><div><div class="muted small">ЩОДЕННИЙ ЧЕК-ЛИСТ</div><h2>Вітаміни</h2></div><span class="pill">${todayTaken?'✓ сьогодні':'ще не прийнято'}</span></div>
  <div class="vit-card">
   <div class="vit-product">
    <div class="vit-icon">💊</div>
    <div><div class="vit-title">${esc(sup.name)}</div><div class="vit-brand">${esc(sup.brand)} · ${sup.capsulesPerDay} капсули / день</div></div>
   </div>
   <div class="vit-dose"><strong>За етикеткою: ${sup.capsulesPerDay} капсули</strong><div class="muted small" style="margin-top:4px">${esc(sup.labelNote)}</div></div>
   <div class="vit-table">
    <div class="head">Речовина</div><div class="head n">1 капс.</div><div class="head n">3 капс.</div>
    ${sup.nutrients.map(n=>`<div>${esc(n.name)}</div><div class="n">${esc(n.perCapsule)}</div><div class="n">${esc(n.daily)}</div>`).join('')}
   </div>
   <button class="vit-take ${todayTaken?'taken':''}" id="takeSupplement">${todayTaken?'✓ Прийнято сьогодні':'○ Позначити як прийнято'}</button>
   ${todayTaken&&log?.ts?`<div class="muted small" style="text-align:center;margin-top:6px">Позначено о ${new Date(log.ts).toLocaleTimeString('uk-UA',{hour:'2-digit',minute:'2-digit'})}</div>`:''}
   <div class="vit-reminder">
    <div class="vit-reminder-row">
     <div><b>Нагадування</b><div class="muted small">Щодня у вибраний час</div></div>
     <input id="suppTime" type="time" value="${esc(sup.reminderTime||'22:30')}">
    </div>
    <button class="btn ${sup.reminderEnabled?'':'secondary'}" style="width:100%;margin-top:9px" id="suppReminder">${sup.reminderEnabled?'🔔 Нагадування увімкнено':'Увімкнути нагадування'}</button>
   </div>
   <div class="vit-week">${days.map(d=>`<div class="vit-day ${d.taken?'ok':''}"><b>${esc(d.label)}</b><span>${d.taken?'✓':'·'}</span></div>`).join('')}</div>
   <div class="vit-note">Дозування та склад внесені з етикетки пляшки. Запис у SviatFit — це чек-лист, а не медична рекомендація.</div>
  </div>`;
 $('#takeSupplement').onclick=()=>{
  if(!state.supplementLog[today])state.supplementLog[today]={};
  const next=!supplementTaken(today,sup.id);
  if(next)state.supplementLog[today][sup.id]={taken:true,ts:Date.now()};
  else delete state.supplementLog[today][sup.id];
  save();renderVitamins();toast(next?'ZMA позначено ✓':'Позначку знято');
 };
 $('#suppTime').onchange=e=>{
  sup.reminderTime=e.target.value||'22:30';save();
  if(sup.reminderEnabled){
   const [h,m]=sup.reminderTime.split(':').map(Number);
   nativeCall('scheduleSupplementReminder',sup.name,h,m);
   toast('Час нагадування оновлено');
  }
 };
 $('#suppReminder').onclick=()=>{
  sup.reminderEnabled=!sup.reminderEnabled;save();
  if(sup.reminderEnabled){
   const [h,m]=(sup.reminderTime||'22:30').split(':').map(Number);
   nativeCall('scheduleSupplementReminder',sup.name,h,m);
  }else nativeCall('cancelSupplementReminder');
  renderVitamins();
  toast(sup.reminderEnabled?'Нагадування увімкнено':'Нагадування вимкнено');
 };
}

window.sviatQaVitamins=()=>{
 state.current=null;save();tab='vitamins';document.body.classList.remove('workout-mode');nav(true);renderVitamins();
 const take=document.getElementById('takeSupplement');
 const reminder=document.getElementById('suppReminder');
 const time=document.getElementById('suppTime');
 if(!take||!reminder||!time)return 'MISSING';
 const r=take.getBoundingClientRect();
 take.click();
 return `take_w=${Math.round(r.width)},take_h=${Math.round(r.height)},time=${time.value}`;
};
"""
if marker not in s:
    raise SystemExit("renderSettings marker not found")
s = s.replace(marker, vitamins + "\n" + marker, 1)

p.write_text(s, encoding="utf-8")
print("Applied SviatFit 1.6.4 vitamins screen")
