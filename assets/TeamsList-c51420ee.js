import{d as i,g as l,j as t,b as u,r as n}from"./index-c8db3a22.js";import{S as f,a as b}from"./CreateIcon-8fd29813.js";import{P as w}from"./PlaceholderTeam-4fc9ba85.js";const v=i(f)`
  width: 24px;
  height: 24px;
  fill: ${e=>e.theme.iconColor};
`,y=i(b)`
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
`,j=i.div`
  width: 100%;
  opacity: 0.6;
  transform: scale(0.9);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;

  @media (max-width: 768px) {
    opacity: 0.5;
    transform: scale(0.85);
  }
`,$=i.div`
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
`,k=i(l)`
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
`,T=i.div`
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
`,z=i.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,C=i.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,I=i.div`
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
`,S=i.div`
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
`,B=i.div`
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
  scroll-behavior: smooth;
  
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
`,G=i.div`
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
`,R=i.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  position: relative;
`,M=i(l)`
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
`,E=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,L=i.div`
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
`,P=i.input`
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
`,W=i.div`
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
`,A=i.img`
  border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,N=i(k)`
  background-color: ${({theme:e})=>`${e.lightGreen}80`};
  transition: background-color 0.3s ease-out;
  
  &:hover {
    background-color: ${({theme:e})=>e.greenMain};
  }
`,H=({team:e})=>t.jsx(j,{"data-team-item":!0,children:t.jsxs(N,{to:`/teams/${e.id}`,children:[t.jsx(T,{children:t.jsx(A,{loading:"lazy",src:w})}),t.jsx(z,{children:t.jsx(C,{children:e.name})}),t.jsx(I,{children:t.jsx(v,{})})]})}),D=()=>{const{setTitle:e}=u(),[p,h]=n.useState(""),a=n.useRef(null),r=n.useRef(null);n.useEffect(()=>{e("Команди")},[e]),n.useEffect(()=>{if(!a.current)return;const o={root:a.current,rootMargin:"0px",threshold:.5},x=g=>{g.forEach(c=>{const d=c.target;c.isIntersecting?(d.style.opacity="1",d.style.transform="scale(1)"):(d.style.opacity="0.6",d.style.transform="scale(0.9)")})};return r.current=new IntersectionObserver(x,o),()=>{r.current&&r.current.disconnect()}},[]);const s=[{id:1,name:"Динамо"},{id:2,name:"Шахтар"},{id:3,name:"Зоря"},{id:4,name:"Металіст"},{id:5,name:"Верес"},{id:6,name:"Олександрія"},{id:7,name:"Чорноморець"},{id:8,name:"Карпати"},{id:9,name:"Дніпро"},{id:10,name:"Десна"}].filter(o=>o.name.toLowerCase().includes(p.toLowerCase()));n.useEffect(()=>{r.current&&(r.current.disconnect(),setTimeout(()=>{document.querySelectorAll("[data-team-item]").forEach(x=>{r.current.observe(x)})},0))},[s]);const m=o=>{h(o.target.value),a.current&&a.current.scrollTo({top:0,behavior:"smooth"})};return t.jsx(G,{children:t.jsxs(S,{children:[t.jsx(W,{children:t.jsxs(E,{children:[t.jsx("h2",{children:"Мої команди"}),t.jsx(L,{children:t.jsx(P,{type:"text",placeholder:"Пошук команд...",value:p,onChange:m})})]})}),t.jsx(B,{ref:a,children:s.length>0?s.map(o=>t.jsx(H,{team:o},o.id)):t.jsx($,{children:"Команд не знайдено"})}),t.jsx(R,{children:t.jsxs(M,{to:"/teams/create",children:["Додати нову команду",t.jsx(y,{})]})})]})})};export{D as default};
