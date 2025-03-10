import{r,d as i,l as c,g as f,j as t,p as b}from"./index-5d7bbea8.js";const v=e=>r.createElement("svg",{fill:"#000000",height:"800px",width:"800px",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512",xmlSpace:"preserve",...e},r.createElement("g",null,r.createElement("g",null,r.createElement("path",{d:"M503.467,110.933l-85.333-64c-3.691-2.773-8.171-4.267-12.8-4.267h-128V21.333C277.333,9.557,267.797,0,256,0 c-11.776,0-21.333,9.557-21.333,21.333v21.333H21.333C9.557,42.667,0,52.224,0,64v128c0,11.776,9.557,21.333,21.333,21.333 h213.333v277.333c0,11.776,9.557,21.333,21.333,21.333c11.797,0,21.333-9.557,21.333-21.333V213.333h128 c4.629,0,9.109-1.515,12.8-4.267l85.333-64C508.843,141.035,512,134.72,512,128C512,121.28,508.843,114.944,503.467,110.933z"})))),j=e=>r.createElement("svg",{fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 200 200","data-name":"Layer 1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("title",null),r.createElement("path",{d:"M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm30-72.5H110v-20a10,10,0,0,0-20,0v20H70a10,10,0,0,0,0,20H90v20a10,10,0,0,0,20,0v-20h20a10,10,0,0,0,0-20Z"})),y=i(v)`
  width: 24px;
  height: 24px;
  fill: ${e=>e.theme.iconColor};
`,k=i(j)`
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
`,$=i.div`
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
`,x=i.button`
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

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`,C=i.div`
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
`,z=i(c)`
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) 14px;
  grid-gap: 12px;
  align-items: center;
  padding: 10px 15px;
  background-color: ${({theme:e})=>e.lightGreen+"40"};
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  color: ${({theme:e})=>e.textBlack};
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: ${({theme:e})=>e.lightGreen+"80"};
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
`,S=i.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,T=i.span`
  font-size: 12px;
  color: ${({theme:e})=>e.textGray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 11px;
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
`,L=i.div`
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
`,I=i.div`
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
`,M=i.div`
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
  position: relative; /* Додаємо контекст для абсолютного позиціонування */
`,H=i(c)`
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

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
    padding-right: 36px;
  }

  @media (max-width: 360px) {
    font-size: 13px;
    padding-right: 32px; 
  }
`,F=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,D=i.div`
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
`,N=i.input`
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
    border-color: ${({theme:e})=>e.mainBGColor};
  }
  
  &:hover {
    outline: none;
    border-color: ${({theme:e})=>e.mainBGColor};
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
  }
`,O=i.div`
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
`,P=i.button`  
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

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
    border-color: ${({theme:e})=>e.greenMain};
  }

  @media (max-width: 768px) {
    min-width: 100px;
    padding: 6px 10px;
    font-size: 11px;
  }
`,W=i.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,V=()=>{const{setTitle:e}=f(),[o,A]=r.useState("all"),[p,l]=r.useState(!1),[a,h]=r.useState(""),m=r.useRef(null);r.useEffect(()=>{e("Спортсмени")},[e]);const s=[{id:1,name:"Олександр ІвановAAAAAAAAAAAAAAAAAAAAAAAAAФАААААААААААААААААААААААААААААААААААААААААААААААААААААААAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",team:"ДинамоAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},{id:2,name:"Марія Петренко",team:"Шахтар"},{id:3,name:"Ігор Коваленко",team:"-"},{id:4,name:"Анна Сидоренко",team:"Зоря"},{id:5,name:"Володимир Бондаренко",team:"-"},{id:6,name:"Олександр Іванов",team:"Динамо"},{id:7,name:"Марія Петренко",team:"Шахтар"},{id:8,name:"Ігор Коваленко",team:"-"},{id:9,name:"Анна Сидоренко",team:"Зоря"},{id:10,name:"Володимир Бондаренко",team:"-"}].filter(n=>{const w=o==="all"?!0:o==="withTeam"?n.team&&n.team!=="-":o==="withoutTeam"?!n.team||n.team==="-":!0,u=n.name.toLowerCase().includes(a.toLowerCase())||n.team.toLowerCase().includes(a.toLowerCase());return w&&u}),d=n=>{A(n),l(!1)},g=n=>{h(n.target.value)};return t.jsx(M,{children:t.jsxs(L,{children:[t.jsxs(O,{children:[t.jsxs(F,{children:[t.jsx("h2",{children:"Мої спортсмени"}),t.jsxs("div",{ref:m,style:{position:"relative"},children:[t.jsxs(P,{onClick:()=>l(!p),children:[o==="all"&&"Усі",o==="withTeam"&&"З командами",o==="withoutTeam"&&"Без команди"]}),p&&t.jsxs($,{children:[t.jsx(x,{active:o==="all",onClick:()=>d("all"),children:"Усі"}),t.jsx(x,{active:o==="withTeam",onClick:()=>d("withTeam"),children:"З командами"}),t.jsx(x,{active:o==="withoutTeam",onClick:()=>d("withoutTeam"),children:"Без команди"})]})]})]}),t.jsx(D,{children:t.jsx(N,{type:"text",placeholder:"Пошук спортсменів...",value:a,onChange:g})})]}),t.jsx(I,{children:s.length>0?s.map(n=>t.jsxs(z,{to:`/athletes/${n.id}`,children:[t.jsx(G,{children:t.jsx(W,{src:b})}),t.jsxs(B,{children:[t.jsx(S,{children:n.name}),t.jsx(T,{children:n.team||"-"})]}),t.jsx(E,{children:t.jsx(y,{})})]},n.id)):t.jsx(C,{children:"Спортсменів не знайдено"})}),t.jsx(R,{children:t.jsxs(H,{to:"/create-athletes",children:["Додати нового спортсмена",t.jsx(k,{})]})})]})})};export{V as default};
