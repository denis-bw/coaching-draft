import{d as n,g as h,r,j as t,l as m}from"./index-9cb2d85f.js";const g=n.div` 
  display: flex; 
  justify-content: center; 
  flex: 1; 
  padding-top: 20px; 
  padding-bottom: 20px; 
  overflow: hidden; 
  height: 100%; 
`,u=n.div` 
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
  @media (max-width: 768px) { 
    width: calc(100% - 30px); 
    padding: 15px; 
    border-radius: 8px; 
  } 
`,f=n.div` 
  display: flex; 
  flex-direction: column; 
  gap: 8px; 
  flex: 1; 
  overflow-y: auto; 
  padding-right: 20px; 
  padding-left: 20px;
  position: relative; 
  padding-bottom: 20px; 
  
  @media (max-width: 768px) { 
    padding-left: 10px;
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
`,w=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`,b=n.button`  
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

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
    border-color: ${({theme:e})=>e.greenMain};
  }

  @media (max-width: 768px) {
    min-width: 100px;
    padding: 6px 10px;
    font-size: 11px;
  }
`,k=n.div`
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
`,a=n.button`
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${({active:e,theme:i})=>e?i.lightGreen:"transparent"};
  color: ${({active:e,theme:i})=>e?i.textBlack:i.textGray}; 
  font-weight: ${({active:e})=>e?"500":"400"};
  border: none;
  text-align: left;
  width: 100%;

  &:hover {
    background-color: ${({theme:e,active:i})=>i?e.lightGreen:e.disabledBG};
    color: ${({theme:e})=>e.textBlack}; 
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`,j=n.div`
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
`,y=n.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: ${({theme:e})=>e.lightGreen+"40"};
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  color: ${({theme:e})=>e.textBlack};

  &:hover {
    background-color: ${({theme:e})=>e.lightGreen+"80"};
  }
  
  @media (max-width: 768px) {
    padding: 8px 12px;
  }
`,$=n.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    margin-right: 10px;
  }
`,v=n.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,z=n.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,G=n.span`
  font-size: 12px;
  color: ${({theme:e})=>e.textGray};
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
`,A=n.div`
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
`,C=n.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  padding: 12px;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`,T=n.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
`,D=()=>{const{setTitle:e}=h(),[i,l]=r.useState("all"),[x,p]=r.useState(!1),c=r.useRef(null);r.useEffect(()=>{e("Спортсмени")},[e]);const s=[{id:1,name:"Олександр Іванов",team:"Динамо"},{id:2,name:"Марія Петренко",team:"Шахтар"},{id:3,name:"Ігор Коваленко",team:"-"},{id:4,name:"Анна Сидоренко",team:"Зоря"},{id:5,name:"Володимир Бондаренко",team:"-"},{id:1,name:"Олександр Іванов",team:"Динамо"},{id:2,name:"Марія Петренко",team:"Шахтар"},{id:3,name:"Ігор Коваленко",team:"-"},{id:4,name:"Анна Сидоренко",team:"Зоря"},{id:5,name:"Володимир Бондаренко",team:"-"}].filter(o=>i==="all"?!0:i==="withTeam"?o.team&&o.team!=="-":i==="withoutTeam"?!o.team||o.team==="-":!0),d=o=>{l(o),p(!1)};return t.jsx(g,{children:t.jsxs(u,{children:[t.jsxs(w,{children:[t.jsx("h2",{children:"Спортсмени"}),t.jsxs("div",{ref:c,style:{position:"relative"},children:[t.jsxs(b,{onClick:()=>p(!x),children:[i==="all"&&"Усі",i==="withTeam"&&"З командами",i==="withoutTeam"&&"Без команди"]}),x&&t.jsxs(k,{children:[t.jsx(a,{active:i==="all",onClick:()=>d("all"),children:"Усі"}),t.jsx(a,{active:i==="withTeam",onClick:()=>d("withTeam"),children:"З командами"}),t.jsx(a,{active:i==="withoutTeam",onClick:()=>d("withoutTeam"),children:"Без команди"})]})]})]}),t.jsx(f,{children:s.length>0?s.map(o=>t.jsxs(y,{as:m,to:`/athletes/${o.id}`,children:[t.jsx($,{}),t.jsxs(v,{children:[t.jsx(z,{children:o.name}),t.jsx(G,{children:o.team||"-"})]}),t.jsx(A,{})]},o.id)):t.jsx(j,{children:"Спортсменів не знайдено"})}),t.jsx(T,{children:t.jsx(C,{children:"Додати нового спортсмена"})})]})})};export{D as default};
