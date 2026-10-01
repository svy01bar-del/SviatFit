from pathlib import Path

p = Path("app/src/main/assets/index.html")
s = p.read_text(encoding="utf-8")

s = s.replace("SviatFit 1.6.2", "SviatFit 1.6.3")

css = r"""
/* SviatFit 1.6.3 — always-visible exercise completion action */
.workout-actionbar{
 grid-template-columns:52px 52px minmax(0,1fr);
 grid-template-areas:"prev add next" "finish finish finish";
 row-gap:8px;
}
#prevExerciseAction{grid-area:prev}
#addExerciseNow{grid-area:add}
#nextExerciseAction{grid-area:next}
.finish-exercise-action{
 grid-area:finish;min-height:52px!important;border:1px solid #397257!important;
 background:#17382b!important;color:#a7f3ca!important;font-size:15px!important
}
.finish-exercise-action.done{
 border-color:#2e5947!important;background:#12271f!important;color:#78cfa2!important
}
body.workout-mode{padding-bottom:164px}
body.workout-mode.rest-active{padding-bottom:246px}
.timer{bottom:calc(148px + env(safe-area-inset-bottom))}
@media(max-width:390px){
 .workout-actionbar{grid-template-columns:48px 48px minmax(0,1fr)}
 .finish-exercise-action{font-size:14px!important}
}
"""
if "/* SviatFit 1.6.3 — always-visible exercise completion action */" not in s:
    s = s.replace("</style>", css + "\n</style>", 1)

old = """function exerciseIsDone(ex){
 if(ex.type==='cardio')return !!ex.completed;
 const sets=ex.sets||[];
 return sets.length>0 && sets.every(st=>st.done);
}"""
new = """function exerciseIsDone(ex){
 if(ex.completed)return true;
 if(ex.type==='cardio')return !!ex.completed;
 const sets=ex.sets||[];
 return sets.length>0 && sets.every(st=>st.done);
}"""
if old not in s:
    raise SystemExit("exerciseIsDone block not found")
s = s.replace(old,new,1)

marker = "function workoutExerciseListHtml(s){"
insert = r"""function finishCurrentExercise(){
 const s=state.current;if(!s)return;
 const ex=s.exercises[s.index];if(!ex)return;
 saveExerciseInputs(ex);
 ex.completed=true;
 save();
 renderWorkout();
 toast(`✓ ${ex.name} завершено`);
}
"""
if marker not in s:
    raise SystemExit("workoutExerciseListHtml marker not found")
s = s.replace(marker, insert + marker, 1)

oldbar = """  <div class="workout-actionbar" role="navigation" aria-label="Навігація по вправах">
   <button class="action-icon" id="prevExerciseAction" ${s.index===0?'disabled':''} aria-label="Попередня вправа">←</button>
   <button class="action-add" id="addExerciseNow" aria-label="Додати вправу">＋</button>
   <button class="action-next" id="nextExerciseAction" ${s.index===s.exercises.length-1?'disabled':''}>Далі <span>→</span></button>
  </div>`;"""
newbar = """  <div class="workout-actionbar" role="navigation" aria-label="Навігація по вправах">
   <button class="action-icon" id="prevExerciseAction" ${s.index===0?'disabled':''} aria-label="Попередня вправа">←</button>
   <button class="action-add" id="addExerciseNow" aria-label="Додати вправу">＋</button>
   <button class="action-next" id="nextExerciseAction" ${s.index===s.exercises.length-1?'disabled':''}>Далі <span>→</span></button>
   <button class="finish-exercise-action ${exerciseIsDone(s.exercises[s.index])?'done':''}" id="finishExerciseAction">${exerciseIsDone(s.exercises[s.index])?'✓ Вправа завершена':'✓ Завершити вправу'}</button>
  </div>`;"""
if oldbar not in s:
    raise SystemExit("workout actionbar block not found")
s = s.replace(oldbar,newbar,1)

bind = """ $('#prevExerciseAction').onclick=()=>goExercise(s.index-1);
 $('#nextExerciseAction').onclick=()=>goExercise(s.index+1);
 $('#addExerciseNow').onclick=()=>addExerciseToCurrent();"""
bindnew = """ $('#prevExerciseAction').onclick=()=>goExercise(s.index-1);
 $('#nextExerciseAction').onclick=()=>goExercise(s.index+1);
 $('#addExerciseNow').onclick=()=>addExerciseToCurrent();
 $('#finishExerciseAction').onclick=()=>finishCurrentExercise();"""
if bind not in s:
    raise SystemExit("action bind block not found")
s = s.replace(bind,bindnew,1)

s = s.replace(
    "s.weight=Math.max(0,round((+s.weight||0)+(+b.dataset.d),2));save();renderWorkout()",
    "s.weight=Math.max(0,round((+s.weight||0)+(+b.dataset.d),2));ex.completed=false;save();renderWorkout()"
)
s = s.replace(
    "s.reps=clamp((+s.reps||0)+(+b.dataset.d),0,200);save();renderWorkout()",
    "s.reps=clamp((+s.reps||0)+(+b.dataset.d),0,200);ex.completed=false;save();renderWorkout()"
)
s = s.replace("st.done=!st.done;if(st.done)", "st.done=!st.done;ex.completed=false;if(st.done)")

p.write_text(s, encoding="utf-8")
print("Applied SviatFit 1.6.3 workout completion UI")
