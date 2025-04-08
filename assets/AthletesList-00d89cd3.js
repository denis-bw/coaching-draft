import{d as i,g as w,j as t,b as k,r as n}from"./index-a9c2b682.js";import{S as j,a as y}from"./CreateIcon-f2011759.js";import{p as z}from"./PlaceholderProfile-3c1b0d36.js";const C=i(j)`
  width: 24px;
  height: 24px;
  fill: ${e=>e.theme.iconColor};
`,G=i(y)`
  width: 20px;
  height: 20px;
  fill: white;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 360px) {
    width: 16px; 
    height: 16px;
    right: 12px;
  }
`,A=i.div`
  width: 100%;
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  
  &.visible {
    opacity: 1;
    transform: scale(1);
  }
  
  &.hidden {
    opacity: 0.6;
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    &.visible {
      opacity: 1;
      transform: scale(1);
    }
    
    &.hidden {
      opacity: 0.5;
      transform: scale(0.85);
    }
  }
`,B=i.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 5px;
  background-color: ${({theme:e})=>e.mainBGColor}; 
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  min-width: 120px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0.2, 0.2);
  z-index: 10;

  @media (max-width: 768px) {
    min-width: 100px;
    font-size: 11px;
  }
`,u=i.button`
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${({active:e,theme:o})=>e?o.lightGreen:"transparent"};
  color: ${({active:e,theme:o})=>e?o.textBlack:o.textGray}; 
  font-weight: ${({active:e})=>e?"500":"400"};
  border: none;
  text-align: left;
  width: 100%;

  &:hover {
    background-color: ${({theme:e,active:o})=>o?e.lightGreen:e.disabledBG};
    color: ${({theme:e})=>e.textBlack}; 
  }

  &:focus {
    background-color: ${({theme:e,active:o})=>o?e.lightGreen:e.disabledBG};
    color: ${({theme:e})=>e.textBlack}; 
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`,L=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: ${({theme:e})=>e.textGray};
  font-size: 14px;
  text-align: center;
  padding: 40px 20px;
  
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 30px 15px;
  }
`,S=i(w)`
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) 14px;
  grid-gap: 12px;
  align-items: center;
  padding: 10px 15px;
  background-color: ${({theme:e})=>e.lightGreen};
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  color: ${({theme:e})=>e.textBlack};
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: ${({theme:e})=>e.greenMain};
  }

  &:focus {
    background-color: ${({theme:e})=>e.greenMain};
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    grid-template-columns: 28px minmax(0, 1fr) 12px; 
    grid-gap: 10px;
  }
`,I=i.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`,T=i.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,E=i.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,M=i.span`
  font-size: 12px;
  color: ${({theme:e})=>e.textGray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
`,R=i.div`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.textGray};
  
  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`,O=i.div`
  width: calc(100% - 60px); 
  padding: 20px; 
  padding-bottom: 14px;
  background-color: ${({theme:e})=>e.ContainerBGColor}; 
  border-radius: 10px; 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
  display: flex; 
  flex-direction: column; 
  height: 100%;
  min-height: 240px;
  box-sizing: border-box;
  
  @media (max-width: 768px) { 
    width: calc(100% - 30px); 
    padding: 15px; 
    border-radius: 8px; 
  } 
`,F=i.div`
  display: flex; 
  flex-direction: column; 
  gap: 8px; 
  flex: 1; 
  overflow-y: auto;
  overflow-x: hidden; 
  padding-right: 20px; 
  padding-left: 20px;
  position: relative; 
  padding-bottom: 20px; 
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) { 
    padding-left: 6px;
    padding-right: 10px;
  } 
 
  &::-webkit-scrollbar { 
    width: 6px; 
  } 
 
  &::-webkit-scrollbar-track { 
    background: ${({theme:e})=>e.disabledBG}; 
    border-radius: 10px; 
  } 
 
  &::-webkit-scrollbar-thumb { 
    background: ${({theme:e})=>e.greenMain}; 
    border-radius: 10px; 
  } 
`,N=i.div`
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  flex: 1; 
  padding-top: 20px; 
  padding-bottom: 20px; 
  overflow: hidden; 
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`,Q=i.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  position: relative;
`,W=i(w)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 500px;
  padding: 12px 16px;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 16px;
  padding-right: 40px; 

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
  }

  &:focus {
    background-color: ${({theme:e})=>e.darkGreen};
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
    padding-right: 36px;
  }

  @media (max-width: 360px) {
    font-size: 13px;
    padding-right: 32px; 
  }
`,D=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,P=i.div`
  position: relative;
  width: 100%;
  
  @media (min-width: 850px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 35%; 
    max-width: 400px; 
    min-width: 70px; 
    z-index: 1; 
  }
  
  @media (max-width: 850px) {
    margin-top: 10px;
  }
`,H=i.input`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border: 2px solid ${({theme:e})=>e.ContainerBGColor};
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 14px;
  width: 100%;
  color: ${({theme:e})=>e.textBlack};
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({theme:e})=>e.textGray};
  }
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.textBlack};
  }
  
  &:hover {
    outline: none;
    border-color: ${({theme:e})=>e.textBlack};
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
  }
`,q=i.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  border-radius: 6px 6px 0 0;
  margin: -20px -20px 20px -20px;
  position: relative;

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    z-index: 2; 
  }
  
  @media (max-width: 768px) {
    padding: 10px 15px;
    margin: -15px -15px 15px -15px;
    
    h2 {
      font-size: 16px;
    }
  }
`,Y=i.button`  
  background-color: ${({theme:e})=>e.greenMain};
  border: 1.7px solid ${({theme:e})=>e.white};
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.white};
  cursor: pointer;
  min-width: 120px;
  transition: all 0.3s ease;
  z-index: 2;
  outline: none;
  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
    border-color: ${({theme:e})=>e.greenMain};
  }

  &:focus {
    background-color: ${({theme:e})=>e.darkGreen};
    border-color: ${({theme:e})=>e.greenMain};
  }

  @media (max-width: 768px) {
    min-width: 100px;
    padding: 6px 10px;
    font-size: 11px;
  }
`,J=i.img`
border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,K=i(S)`
  background-color: ${({theme:e})=>`${e.lightGreen}80`};
  transition: background-color 0.3s ease-out;
  
  .hidden & {
    background-color: ${({theme:e})=>`${e.lightGreen}40`};
  }
`,U=({athlete:e})=>t.jsx(A,{className:"athlete-item",id:`athlete-${e.id}`,children:t.jsxs(K,{to:`/athletes/${e.id}`,children:[t.jsx(I,{children:t.jsx(J,{loading:"lazy",src:z})}),t.jsxs(T,{children:[t.jsx(E,{children:e.name}),t.jsx(M,{children:e.team||"-"})]}),t.jsx(R,{children:t.jsx(C,{})})]})}),te=()=>{const{setTitle:e}=k(),[o,b]=n.useState("all"),[f,x]=n.useState(!1),[l,v]=n.useState(""),h=n.useRef(null),a=n.useRef(null);console.log("QQQ"),n.useEffect(()=>{e("Спортсмени")},[e]);const m=[{id:1,name:"Олександр ІвановАААААААААААААААААААААААААААААААААffffffffffffААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААА",team:"ДинамоФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФ"},{id:2,name:"Марія Петренко",team:"Шахтар"},{id:3,name:"Ігор Коваленко",team:"-"},{id:4,name:"Анна Сидоренко",team:"Зоря"},{id:5,name:"Володимир Бондаренко",team:"-"},{id:6,name:"Олександр Іванов",team:"Динамо"},{id:7,name:"Марія Петренко",team:"Шахтар"},{id:8,name:"Ігор Коваленко",team:"-"},{id:9,name:"Анна Сидоренко",team:"Зоря"},{id:10,name:"Володимир Бондаренко",team:"-"},{id:17,name:"Марія Петренко",team:"Шахтар"},{id:18,name:"Ігор Коваленко",team:"-"},{id:19,name:"Анна Сидоренко",team:"Зоря"},{id:20,name:"Володимир Бондаренко",team:"-"}].filter(r=>{const s=o==="all"?!0:o==="withTeam"?r.team&&r.team!=="-":o==="withoutTeam"?!r.team||r.team==="-":!0,c=l?r.name.toLowerCase().includes(l.toLowerCase())||r.team.toLowerCase().includes(l.toLowerCase()):!0;return s&&c});n.useEffect(()=>{const r=s=>{h.current&&!h.current.contains(s.target)&&x(!1)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[]),n.useEffect(()=>{if(!a.current)return;const r={root:a.current,rootMargin:"0px",threshold:.5},s=p=>{p.forEach(d=>{d.target.classList&&(d.isIntersecting?(d.target.classList.add("visible"),d.target.classList.remove("hidden")):(d.target.classList.add("hidden"),d.target.classList.remove("visible")))})},c=new IntersectionObserver(s,r);return document.querySelectorAll('[id^="athlete-"]').forEach(p=>{c.observe(p),p.classList.add("hidden")}),()=>c.disconnect()},[m]);const g=r=>{b(r),x(!1),a.current&&a.current.scrollTo({top:0,behavior:"smooth"})},$=r=>{v(r.target.value),a.current&&a.current.scrollTo({top:0,behavior:"smooth"})};return t.jsx(N,{children:t.jsxs(O,{children:[t.jsxs(q,{children:[t.jsxs(D,{children:[t.jsx("h2",{children:"Мої спортсмени"}),t.jsxs("div",{ref:h,style:{position:"relative"},children:[t.jsxs(Y,{onClick:()=>x(!f),children:[o==="all"&&"Усі",o==="withTeam"&&"З командами",o==="withoutTeam"&&"Без команди"]}),f&&t.jsxs(B,{children:[t.jsx(u,{active:o==="all",onClick:()=>g("all"),children:"Усі"}),t.jsx(u,{active:o==="withTeam",onClick:()=>g("withTeam"),children:"З командами"}),t.jsx(u,{active:o==="withoutTeam",onClick:()=>g("withoutTeam"),children:"Без команди"})]})]})]}),t.jsx(P,{children:t.jsx(H,{type:"text",placeholder:"Пошук спортсменів...",value:l,onChange:$})})]}),t.jsx(F,{ref:a,children:m.length>0?m.map(r=>t.jsx(U,{athlete:r},r.id)):t.jsx(L,{children:"Спортсменів не знайдено"})}),t.jsx(Q,{children:t.jsxs(W,{to:"/athletes/create",children:["Додати нового спортсмена",t.jsx(G,{})]})})]})})};export{te as default};
