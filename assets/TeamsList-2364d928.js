import{d as i,g as u,j as t,b as $,r as n}from"./index-be423714.js";import{S as y,a as j}from"./CreateIcon-f9b72b9a.js";import{P as k}from"./PlaceholderTeam-c43eba2f.js";const C=i(y)`
  width: 24px;
  height: 24px;
  fill: ${e=>e.theme.iconColor};
`,z=i(j)`
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
`,I=i.div`
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
`,S=i(u)`
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
`,G=i.div`
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
`,B=i.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,R=i.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,E=i.div`
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
`,M=i.div`
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
`,L=i.div`
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
`,P=i.div`
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
`,W=i.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  position: relative;
`,A=i(u)`
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
`,N=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,H=i.div`
  position: relative;
  width: 35%;
  max-width: 400px;
  min-width: 150px;
  
  @media (max-width: 768px) {
    width: 45%;
    min-width: 120px;
  }
  
  @media (max-width: 480px) {
    width: 50%;
    min-width: 100px;
  }
`,O=i.input`
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
`,Q=i.div`
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
  }
  
  @media (max-width: 768px) {
    padding: 10px 15px;
    margin: -15px -15px 15px -15px;
    
    h2 {
      font-size: 16px;
    }
  }
`,V=i.img`
  border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,q=i(S)`
  background-color: ${({theme:e,isVisible:r})=>r?`${e.lightGreen}80`:`${e.lightGreen}40`};
  transition: background-color 0.3s ease-out;
`,Y=({team:e,isVisible:r})=>t.jsx(T,{isVisible:r,id:`team-${e.id}`,children:t.jsxs(q,{to:`/teams/${e.id}`,isVisible:r,children:[t.jsx(G,{children:t.jsx(V,{loading:"lazy",src:k})}),t.jsx(B,{children:t.jsx(R,{children:e.name})}),t.jsx(E,{children:t.jsx(C,{})})]})}),U=()=>{const{setTitle:e}=$(),[r,f]=n.useState(""),[b,w]=n.useState({}),s=n.useRef(null),d=n.useRef(null);n.useRef({}),n.useEffect(()=>{e("Команди")},[e]);const p=[{id:1,name:"Динамо"},{id:2,name:"Шахтар"},{id:3,name:"Зоря"},{id:4,name:"Металіст"},{id:5,name:"Верес"},{id:6,name:"Олександрія"},{id:7,name:"Чорноморець"},{id:8,name:"Карпати"},{id:9,name:"Дніпро"},{id:10,name:"Десна"}].filter(o=>o.name.toLowerCase().includes(r.toLowerCase()));n.useEffect(()=>{if(!s.current)return;const o={root:s.current,rootMargin:"0px",threshold:.5},a=x=>{w(h=>{const c={...h};let m=!1;return x.forEach(l=>{const g=l.target.id;c[g]!==l.isIntersecting&&(c[g]=l.isIntersecting,m=!0)}),m?c:h})};return d.current=new IntersectionObserver(a,o),()=>{var x;return(x=d.current)==null?void 0:x.disconnect()}},[]),n.useEffect(()=>{if(!d.current)return;d.current.disconnect(),document.querySelectorAll('[id^="team-"]').forEach(a=>{d.current.observe(a)})},[p]);const v=o=>{var a;f(o.target.value),(a=s.current)==null||a.scrollTo({top:0,behavior:"smooth"})};return t.jsx(P,{children:t.jsxs(M,{children:[t.jsx(Q,{children:t.jsxs(N,{children:[t.jsx("h2",{children:"Мої команди"}),t.jsx(H,{children:t.jsx(O,{type:"text",placeholder:"Пошук команд...",value:r,onChange:v})})]})}),t.jsx(L,{ref:s,children:p.length>0?p.map(o=>t.jsx(Y,{team:o,isVisible:b[`team-${o.id}`]},o.id)):t.jsx(I,{children:"Команд не знайдено"})}),t.jsx(W,{children:t.jsxs(A,{to:"/teams/create",children:["Додати нову команду",t.jsx(z,{})]})})]})})};export{U as default};
