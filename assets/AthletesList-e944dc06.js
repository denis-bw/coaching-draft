import{d as i,g as v,j as t,b as C,r}from"./index-f42f01ef.js";import{S as G,a as A}from"./CreateIcon-adeb1836.js";import{p as B}from"./PlaceholderProfile-3c1b0d36.js";const I=i(G)`
  width: 24px;
  height: 24px;
  fill: ${e=>e.theme.iconColor};
`,S=i(A)`
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
`,T=i.div`
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  opacity: ${({isVisible:e})=>e?1:.6};
  transform: ${({isVisible:e})=>e?"scale(1)":"scale(0.9)"};
  width: 100%;

  @media (max-width: 768px) {
    transform: ${({isVisible:e})=>e?"scale(1)":"scale(0.85)"};
    opacity: ${({isVisible:e})=>e?1:.5};
  }
`,E=i.div`
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
`,g=i.button`
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
`,R=i.div`
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
`,L=i(v)`
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
`,M=i.div`
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
`,O=i.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,F=i.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,W=i.span`
  font-size: 12px;
  color: ${({theme:e})=>e.textGray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
`,D=i.div`
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
`,N=i.div`
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
`,P=i.div`
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
`,H=i.div`
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
`,V=i(v)`
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
`,q=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,Y=i.div`
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
`,J=i.input`
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
`,K=i.div`
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
`,U=i.button`  
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
`,X=i.img`
border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,Z=i(L)`
  background-color: ${({theme:e,isVisible:o})=>o?`${e.lightGreen}80`:`${e.lightGreen}40`};
  transition: background-color 0.3s ease-out;
`,_=({athlete:e,isVisible:o})=>t.jsx(T,{isVisible:o,id:`athlete-${e.id}`,children:t.jsxs(Z,{to:`/athletes/${e.id}`,isVisible:o,children:[t.jsx(M,{children:t.jsx(X,{loading:"lazy",src:B})}),t.jsxs(O,{children:[t.jsx(F,{children:e.name}),t.jsx(W,{children:e.team||"-"})]}),t.jsx(D,{children:t.jsx(I,{})})]})}),ne=()=>{const{setTitle:e}=C(),[o,$]=r.useState("all"),[u,p]=r.useState(!1),[l,k]=r.useState(""),[f,y]=r.useState({}),x=r.useRef(null),a=r.useRef(null),s=r.useRef(null);r.useEffect(()=>{e("Спортсмени")},[e]);const w=[{id:1,name:"Олександр ІвановАААААААААААААААААААААААААААААААААffffffffffffААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААА",team:"ДинамоФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФ"},{id:2,name:"Марія Петренко",team:"Шахтар"},{id:3,name:"Ігор Коваленко",team:"-"},{id:4,name:"Анна Сидоренко",team:"Зоря"},{id:5,name:"Володимир Бондаренко",team:"-"},{id:6,name:"Олександр Іванов",team:"Динамо"},{id:7,name:"Марія Петренко",team:"Шахтар"},{id:8,name:"Ігор Коваленко",team:"-"},{id:9,name:"Анна Сидоренко",team:"Зоря"},{id:10,name:"Володимир Бондаренко",team:"-"},{id:17,name:"Марія Петренко",team:"Шахтар"},{id:18,name:"Ігор Коваленко",team:"-"},{id:19,name:"Анна Сидоренко",team:"Зоря"},{id:20,name:"Володимир Бондаренко",team:"-"}].filter(n=>{const d=o==="all"?!0:o==="withTeam"?n.team&&n.team!=="-":o==="withoutTeam"?!n.team||n.team==="-":!0,m=l?n.name.toLowerCase().includes(l.toLowerCase())||n.team.toLowerCase().includes(l.toLowerCase()):!0;return d&&m});r.useEffect(()=>{const n=d=>{x.current&&!x.current.contains(d.target)&&p(!1)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[]),r.useEffect(()=>{if(!a.current)return;const n={root:a.current,rootMargin:"0px",threshold:.5},d=m=>{const b={...f};m.forEach(c=>{const z=c.target.id;b[z]=c.isIntersecting}),y(c=>({...c,...b}))};return s.current=new IntersectionObserver(d,n),()=>{s.current&&s.current.disconnect()}},[]),r.useEffect(()=>{if(!s.current)return;s.current.disconnect(),document.querySelectorAll('[id^="athlete-"]').forEach(d=>{s.current.observe(d)})},[l]);const h=n=>{$(n),p(!1),a.current&&a.current.scrollTo({top:0,behavior:"smooth"})},j=n=>{k(n.target.value),a.current&&a.current.scrollTo({top:0,behavior:"smooth"})};return t.jsx(H,{children:t.jsxs(N,{children:[t.jsxs(K,{children:[t.jsxs(q,{children:[t.jsx("h2",{children:"Мої спортсмени"}),t.jsxs("div",{ref:x,style:{position:"relative"},children:[t.jsxs(U,{onClick:()=>p(!u),children:[o==="all"&&"Усі",o==="withTeam"&&"З командами",o==="withoutTeam"&&"Без команди"]}),u&&t.jsxs(E,{children:[t.jsx(g,{active:o==="all",onClick:()=>h("all"),children:"Усі"}),t.jsx(g,{active:o==="withTeam",onClick:()=>h("withTeam"),children:"З командами"}),t.jsx(g,{active:o==="withoutTeam",onClick:()=>h("withoutTeam"),children:"Без команди"})]})]})]}),t.jsx(Y,{children:t.jsx(J,{type:"text",placeholder:"Пошук спортсменів...",value:l,onChange:j})})]}),t.jsx(P,{ref:a,children:w.length>0?w.map(n=>t.jsx(_,{athlete:n,isVisible:f[`athlete-${n.id}`]},n.id)):t.jsx(R,{children:"Спортсменів не знайдено"})}),t.jsx(Q,{children:t.jsxs(V,{to:"/athletes/create",children:["Додати нового спортсмена",t.jsx(S,{})]})})]})})};export{ne as default};
