(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const d=document.querySelector(".form__description"),v=document.querySelector(".form__date"),f=document.querySelector(".form__date-input"),g=document.querySelector(".form__priority"),S=document.querySelector(".form__title"),E=()=>{d.style.display="block",v.style.display="flex",g.style.display="flex"},k=()=>{d.style.display="none",v.style.display="none",g.style.display="none"},T=document.querySelector(".nav__list"),m=document.querySelector(".nav__input-wrapper"),L=document.querySelector(".nav__input");let a=JSON.parse(localStorage.getItem("listArray")),w=0;class N{constructor(t,n){this.index=t,this.project=n}}const O=()=>{m.style.display="flex"},A=()=>{m.style.display="none"},I=()=>{const e=new N(w++,L.value);a.push(e),localStorage.setItem("listArray",JSON.stringify(a)),console.log(a),h(e)},h=e=>{const t=document.createElement("div"),n=document.createElement("button"),s=document.createElement("span");t.classList.add("nav__button-wrapper"),s.classList.add("nav__delete"),n.classList.add("nav__button"),n.textContent=e.project,t.append(n),t.append(s),T.append(t),s.innerHTML="&times;",L.value="",m.style.display="none",console.log(r),n.addEventListener("click",o=>{b(),o.target.classList.add("nav__button--active"),l()}),t.addEventListener("click",o=>{o.target.classList.contains("nav__delete")&&(W(e),o.target.parentNode.remove(),localStorage.setItem("listArray",JSON.stringify(a)))})},M=()=>{a===null?a=[]:a.forEach(e=>h(e)),console.log(a)},l=()=>{q.innerHTML="";const e=r.filter(t=>t.project===document.querySelector(".nav__button--active").innerHTML);console.log("currentarray is"),console.log(e),e.forEach(t=>x(t))},b=()=>{document.querySelectorAll("button").forEach(t=>t.classList.remove("nav__button--active"))},W=e=>{a.splice(e.index,1)},q=document.querySelector(".todo__wrapper");let r=JSON.parse(localStorage.getItem("todoArray")),D=r&&!r.length==0?r[r.length-1].index+1:0;class H{constructor(t,n,s,o,i,c,u){this.date=t,this.title=n,this.description=s,this.priority=o,this.project=i,this.index=c,this.done=u}}const J=()=>{r===null?r=[]:l()},P=()=>{const e=new H(f.value,S.value,d.value,document.querySelector("input[name=radio]:checked").value,document.querySelector(".nav__button--active").textContent,D++,!1);r.push(e),$(),console.log("main todolist"),console.log(r),x(e),localStorage.setItem("todoArray",JSON.stringify(r))},x=e=>{const t=document.createElement("div");t.classList.add("todo");const n=document.createElement("div");n.classList.add("todo__item"),n.innerHTML=`
    <input type="checkbox" class="todo__checkbox" ${e.done?"checked":""}/>
            <div class="todo__wrapper">
              <div class="todo__item-name">
                <p class="todo__date">${e.date}</p>
                <h3 class="todo__title">${e.title}</h3>
              </div>
              <div class="todo__item-extra">
                <p class="todo__description">${e.description}</p>
                <span class="todo__priority">${e.priority}</span>
              </div>
              <div class="todo__buttons">
              <button class="todo__remove" data-index="${e.index}">Remove</button>
                <button class="todo__edit" data-index="${e.index}">Edit</button>
              </div>
            </div>
    `,n.addEventListener("click",s=>{s.target.classList.contains("todo__remove")?(y(e),s.target.parentNode.parentNode.parentNode.remove(),localStorage.setItem("todoArray",JSON.stringify(r))):r.length==1&&s.target.classList.contains("todo__remove")?(s.target.parentNode.remove(),y(e)):s.target.classList.contains("todo__edit")&&B(n,e)}),t.append(n),q.append(t),n.addEventListener("change",s=>{s.target.classList.contains("todo__checkbox")&&C(e)})},$=()=>{f.value="",S.value="",d.value="",document.querySelector("input[name=radio]").value=""},C=e=>{const t=r.find(n=>n.index==e.index);t&&t.done==!0?(console.log(t),t.done=!1,localStorage.setItem("todoArray",JSON.stringify(r))):t&&t.done==!1&&(console.log(t),t.done=!0,localStorage.setItem("todoArray",JSON.stringify(r)))},y=e=>{r.length==1&&(localStorage.clear(),r.splice(0,1)),r.splice(e.index,1)},B=(e,t)=>{e.innerHTML="",e.innerHTML=`
               <div class="form">
        <input type="text" placeholder="Title" class="form__title todo-form__title" />
        <input type="text" placeholder="Description" class="form__description todo-form__description" />
        <div class="form__date todo__day">
          <label for="date">Date</label>
          <input type="date" name="date" id="date" class="form__date-input todo__date-input" />
        </div>

        <div class="form__priority todo__rank">
          <p>Priority</p>
          <div class="form__radio">
            <div class="form__radio-item">
              <label for="low">Low</label>
              <input type="radio" id="Low" value="Low" name="todo_radio" class="todo__radio"/>
            </div>
            <div class="form__radio-item">
              <label for="medium">Medium</label>
              <input type="radio" id="Medium" value="Medium" name="todo_radio" />
            </div>
            <div class="form__radio-item">
              <label for="high">High</label>
              <input type="radio" id="High" value="High" name="todo_radio" /></input>
            </div>
          </div>
          <button class="form__button-add todo__button-save">Save</button>
        </div>
      </div>
      `;const n=document.querySelector(".todo__description"),s=document.querySelector(".todo__title"),o=document.querySelector(".todo__rank"),i=document.querySelector(".todo__day"),c=document.querySelector(".todo__button-save");n.style.display="flex",i.style.display="flex",o.style.display="flex",c.addEventListener("click",()=>{let u=r.map(p=>p.index===t.index?{...p,date:document.querySelector(".todo__date-input").value,title:document.querySelector(".todo-form__title").value,description:document.querySelector(".todo-form__description").value,priority:document.querySelector("input[name=todo_radio]:checked").value}:p);console.log(i.value),console.log(s.value),r=u,localStorage.setItem("todoArray",JSON.stringify(r)),l()}),console.log(n),console.log(i),console.log(s)},_=document.querySelector(".form"),j=document.querySelector(".form__button-add"),F=document.querySelector(".nav__list-add"),K=document.querySelector(".nav__list-close"),R=document.querySelector(".nav__create"),z=document.querySelector(".nav__button");document.addEventListener("DOMContentLoaded",J);z.addEventListener("click",e=>{b(),e.target.classList.add("nav__button--active"),l()});_.addEventListener("click",e=>{e.target.classList.contains("form__title")&&E()});document.addEventListener("click",e=>{_!==e.target&&!_.contains(e.target)&&k()});document.addEventListener("DOMContentLoaded",M);j.addEventListener("click",P);F.addEventListener("click",I);R.addEventListener("click",O);K.addEventListener("click",A);
