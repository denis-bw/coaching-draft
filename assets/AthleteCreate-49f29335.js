import{r as i,d as o,j as t,b as ee}from"./index-f42f01ef.js";import{S as te,C as T}from"./CustomDatePicker-96158a0f.js";import{p as oe}from"./PlaceholderProfile-3c1b0d36.js";import{P as ie}from"./PlaceholderTeam-c43eba2f.js";const O=e=>i.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("path",{d:"M6 9L12 15L18 9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),re=o.div`
  
  margin: 20px 0;
  border: 1.7px solid ${({theme:e})=>e.greenMain};
  border-radius: 8px;

  background-color: ${({theme:e})=>e.ContainerBGColor}; 
  transition: background-color 0.3s ease;
  ${({isOpen:e})=>!e&&`
    border-radius: 8px 8px 0 0;
  `}


`,ne=o(O)`
  stroke: ${e=>e.theme.white};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
`,se=o.button.attrs({type:"button"})`
  background-color: ${({theme:e})=>e.greenMain};
  padding: 8px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  transition: background-color 0.3s ease;
  position: relative;
  cursor: row-resize;
  border-top-left-radius: 6px; 
  border-top-right-radius: 6px;
  border: 1.7px solid ${({theme:e})=>e.greenMain};
  width: 100%;
  text-align: left; 
  border: none;  
  
  &:hover {
    background-color: ${({theme:e})=>e.lightGreen};
  }

  &:focus {
    background-color: ${({theme:e})=>e.lightGreen};
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
  }
`,ae=o.div`
  padding: 0 20px;
  max-height: ${({isOpen:e})=>e?"1000px":"0"};
  opacity: ${({isOpen:e})=>e?"1":"0"};
  overflow: hidden;
  transition: 
    max-height ${({isOpen:e})=>e?"0.8s":"0.4s"} ease-in-out,
    opacity ${({isOpen:e})=>e?"0.8s":"0.4s"} ease-in-out;
`,le=o.h3`
  color: ${({theme:e})=>e.white};
  font-size: 22px; 
  font-weight: 600;
  margin: 0;
  line-height: 1.2; 
  max-height: 27px;  
  overflow: hidden; 
  @media (max-width: 768px) {
    font-size: 18px; 
    font-weight: 600;
    max-height: 24px; 
  }
`,de=o.div`
  display: flex;
  align-items: center;
`,ce=o.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,pe=e=>i.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2}),i.createElement("path",{d:"M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M12 16H12.01",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),P=o(pe)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({theme:e})=>e.white};
  transition: stroke 0.3s ease;
`,he=o.button.attrs({type:"button"})`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;

  &:focus,
  &:hover {
    outline: none;

    ${P} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,xe=o.div`
  position: absolute;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  padding: 12px;
  border-radius: 10px;
  border: 2px solid ${({theme:e})=>e.black};
  font-size: 14px;
  line-height: 1.5;
  width: 300px;
  max-height: 170px;
  z-index: 100;
  cursor: pointer;
  top: ${({top:e})=>e||"-190%"};
  left: ${({left:e})=>e||"-310%"};
  transform: translateX(-50%);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  opacity: ${({visible:e})=>e?1:0};
  transition: opacity 0.2s ease-in-out;
  white-space: pre-line;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 79%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${({theme:e})=>e.black};
  }

  @media (max-width: 768px) {
    width: 260px;
    &::after {
         left: 84%;
    }
  }
`,ue=o.div`

  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300; 


`,ge=o.div`
  font-size: 14px; 
  font-weight: 600; 
  margin-bottom: 5px; 
`,me=({title:e,text:s,top:a,left:u})=>{const[h,d]=i.useState(!1);return t.jsxs(he,{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onClick:()=>d(!h),children:[t.jsx(P,{}),t.jsx(xe,{visible:h,top:a,left:u,children:t.jsxs(ue,{children:[" ",e&&t.jsx(ge,{children:e}),s]})})]})},G=({children:e,helpTooltiptitle:s,helpTooltip:a,title:u,top:h,left:d})=>{const[g,m]=i.useState(!1),[j,r]=i.useState(!1),c=i.useRef(null),b=i.useRef(null),w=i.useRef(!1),y=()=>{m(f=>(j||r(!0),!f))};return i.useEffect(()=>{const f=new IntersectionObserver(([v])=>{!j&&v.isIntersecting&&!w.current&&v.intersectionRatio>=1&&(setTimeout(()=>{m(!0)},200),w.current=!0)},{threshold:1,rootMargin:"0px 0px -100px 0px"});return c.current&&f.observe(c.current),()=>{c.current&&f.unobserve(c.current)}},[j]),i.useEffect(()=>{b.current&&(g?b.current.removeAttribute("inert"):b.current.setAttribute("inert",""))},[g]),t.jsxs(re,{ref:c,isOpen:g,children:[t.jsxs(se,{onClick:y,role:"button",tabIndex:0,children:[u&&t.jsx(le,{children:u}),t.jsxs(de,{children:[a&&t.jsx(ce,{onClick:f=>f.stopPropagation(),children:t.jsx(me,{title:s,text:a,top:h,left:d})}),t.jsx(ne,{isOpen:g})]})]}),t.jsx(ae,{ref:b,isOpen:g,children:e})]})},be=o.div`
  position: relative;
  width: 100%;
`,fe=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,we=o.span`
  color: ${({theme:e})=>e.textGray};
  font-family: 'Inter Tight', sans-serif;
`,$e=o.button.attrs({type:"button"})`
  padding: 0.75rem 1rem;
  width: 100%;
  padding-right: 2.5rem;
  border: 1.6px solid ${({theme:e})=>e.borderColor};
  border-radius: 0.5rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: relative;
  cursor: text;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.lightGreen};
    box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.lightGreen.slice(1,3),16)}, ${parseInt(e.lightGreen.slice(3,5),16)}, ${parseInt(e.lightGreen.slice(5,7),16)}, 0.5)`};
  }
`,je=o.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border: 1px solid ${({theme:e})=>e.darkGreen};
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  max-height: 200px;
  overflow-y: auto;
`,S=o.button.attrs({type:"button"})`
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  color: ${({theme:e})=>e.textBlack};
  transition: background-color 0.3s ease;
  font-size: 1rem;

  &:hover {
    background-color: ${({theme:e})=>e.lightGreen};
  }

  &:focus {
    outline: none;
    background-color: ${({theme:e})=>e.lightGreen};
  }

  &.selected {
    background-color: ${({theme:e})=>e.darkGreen};
    color: ${({theme:e})=>e.white};
    &:hover {
    background-color: ${({theme:e})=>e.lightGreen};
  }

  &:focus {
    outline: none;
    background-color: ${({theme:e})=>e.lightGreen};
  }
  }
`,ke=o(O)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) ${e=>e.open?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
  width: 22px;
  height: auto;
`,ve=({label:e,value:s,onChange:a})=>{const[u,h]=i.useState(!1),[d,g]=i.useState(s),m=i.useRef(null),j=()=>{h(!u)},r=b=>{g(b),a(b),h(!1)},c=b=>{m.current&&!m.current.contains(b.target)&&h(!1)};return i.useEffect(()=>(document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}),[]),t.jsxs(be,{ref:m,children:[e&&t.jsx(fe,{onClick:j,children:e}),t.jsxs($e,{onClick:j,children:[t.jsx(we,{children:d||"Не вибрано"}),t.jsx(ke,{open:u})]}),u&&t.jsxs(je,{children:[t.jsx(S,{className:d==="Чоловік"?"selected":"",onClick:()=>r("Чоловік"),children:"Чоловік"}),t.jsx(S,{className:d==="Жінка"?"selected":"",onClick:()=>r("Жінка"),children:"Жінка"}),t.jsx(S,{className:d===""?"selected":"",onClick:()=>r(""),children:"Не вибрано"})]})]})},ye=o.div`
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  opacity: ${({isVisible:e})=>e?1:.6};
  transform: ${({isVisible:e})=>e?"scale(1)":"scale(0.9)"};
  width: 100%;
  &:not(:first-child) {
    padding-top: 10px;
  }
  @media (max-width: 768px) {
    transform: ${({isVisible:e})=>e?"scale(1)":"scale(0.85)"};
    opacity: ${({isVisible:e})=>e?1:.5};
  }
`,Ce=o.div`
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
`,Ie=o.button`
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) 14px;
  grid-gap: 12px;
  align-items: center;
  padding: 10px 15px;
  background-color: ${({theme:e,isSelected:s})=>s?e.greenMain:e.disabledBG};
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  color: ${({theme:e})=>e.textBlack};
  width: 100%;
  box-sizing: border-box;
  border: none;
  text-align: left;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({theme:e,isSelected:s})=>s?e.greenMain:`${e.greenMain}80`};
  }

  &:focus {
    outline: none;
    background-color: ${({theme:e,isSelected:s})=>s?e.greenMain:`${e.greenMain}80`};
  }

  &:focus:not(:focus-visible) {
    outline: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.greenMain};
    outline-offset: 1px;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    grid-template-columns: 28px minmax(0, 1fr) 12px; 
    grid-gap: 10px;
  }
`,Ge=o.div`
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
`,Se=o.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,Be=o.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Me=o.div`
  width: 100%;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 324px;
  max-height: 324px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.greenMain};
  border-radius: 10px;
  @media (max-width: 768px) {
    width: calc(100% - 30px);
    border-radius: 8px;
  }
   @media (max-width: 1024px) {
     min-height: 140px;
  }
`,Te=o.div`

  gap: 8px;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 20px 0px;
  position: relative;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  max-height: calc(100% - 60px); 
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 0 15px 15px;
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
`,ze=o.div`
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  flex: 1; 
  overflow: hidden; 
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`,Ee=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,Re=o.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  border-radius: 10px 10px 0 0;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    padding: 10px 15px;
    
    h2 {
      font-size: 16px;
    }
  }
`,Fe=o.img`
  border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,Le=()=>{const[e,s]=i.useState({}),[a,u]=i.useState(null),h=i.useRef(null),d=i.useRef(null),g=i.useRef({}),m=[{id:1,name:"Динамо"},{id:2,name:"Шахтар"},{id:3,name:"Зоря"},{id:4,name:"Металіст"},{id:5,name:"Верес"},{id:6,name:"Олександрія"},{id:7,name:"Чорноморець"},{id:8,name:"Карпати"},{id:9,name:"Дніпро"},{id:10,name:"Десна"}];i.useEffect(()=>{const r={};m.forEach(c=>{r[`team-${c.id}`]=!0}),s(r)},[]),i.useEffect(()=>{if(!h.current)return;const r={root:h.current,rootMargin:"0px",threshold:.1},c=w=>{s(y=>{const f={...y};let v=!1;return w.forEach(C=>{const I=C.target.id;f[I]!==C.isIntersecting&&(f[I]=C.isIntersecting,v=!0)}),v?f:y})};return d.current=new IntersectionObserver(c,r),document.querySelectorAll('[id^="team-"]').forEach(w=>{d.current.observe(w)}),()=>{var w;return(w=d.current)==null?void 0:w.disconnect()}},[]);const j=r=>{a&&a.id===r.id?(console.log("Team deselected:",r),u(null),g.current[r.id]&&g.current[r.id].blur()):(console.log("Team selected:",r),u(r))};return t.jsx(ze,{children:t.jsxs(Me,{children:[t.jsx(Re,{children:t.jsx(Ee,{children:t.jsx("h2",{children:"Команда спортсмена"})})}),t.jsx(Te,{ref:h,children:m.length>0?m.map(r=>t.jsx(ye,{isVisible:e[`team-${r.id}`]!==!1,id:`team-${r.id}`,children:t.jsxs(Ie,{ref:c=>g.current[r.id]=c,isVisible:e[`team-${r.id}`]!==!1,isSelected:a&&a.id===r.id,onClick:()=>j(r),type:"button",children:[t.jsx(Ge,{children:t.jsx(Fe,{loading:"lazy",src:ie})}),t.jsx(Se,{children:t.jsx(Be,{children:r.name})})]})},r.id)):t.jsx(Ce,{children:"Команд не знайдено"})})]})})};o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`;o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:s,name:a})=>s&&a==="username"?e.red:e.borderColor};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  transition: all 0.2s ease-in-out;

  &:focus {
      outline: none;
      border-color: ${({theme:e})=>e.lightGreen};
      box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.lightGreen.slice(1,3),16)}, ${parseInt(e.lightGreen.slice(3,5),16)}, ${parseInt(e.lightGreen.slice(5,7),16)}, 0.5)`};
  }

  &::placeholder {
    color: ${({theme:e})=>e.textGray};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 30px ${({theme:e})=>e.ContainerBGColor} inset;
    -webkit-text-fill-color: ${({theme:e})=>e.textBlack};
    transition: background-color 5000s ease-in-out 0s;
    border-color: ${({theme:e})=>e.lightGreen};
  }

  &:not(:placeholder-shown):not(:-webkit-autofill):invalid {
      border-color: ${({theme:e})=>e.red};
  }

  &:focus:not(:placeholder-shown):not(:-webkit-autofill):invalid {
      box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.red.slice(1,3),16)}, ${parseInt(e.red.slice(3,5),16)}, ${parseInt(e.red.slice(5,7),16)}, 0.5)`};
  }
  
  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    cursor: not-allowed;
  }

  &:focus {
    border-color: ${({theme:e})=>e.lightGreen};
  }
`;o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;const l={mobile:"320px",tablet:"768px",desktop:"1024px"},Oe=o.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  @media (min-width: ${l.tablet}) {
    align-items: flex-start;
    height: 100%;
  }
`,Pe=o.form`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${l.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${l.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }
`,We=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${l.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`,Ne=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  
  @media (min-width: ${l.tablet}) {
    width: auto;
    margin-right: 3.8rem;
    margin-bottom: 0;
    justify-content: flex-start;
    align-self: center; 
  }

   @media (min-width: ${l.desktop}) {
    margin-right: 2rem;
  }
`,De=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${l.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,Ae=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,Ve=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,He=o.label`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 2px solid ${({theme:e})=>e.white};
  outline: none;

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
     box-shadow: 0 0 0 4px ${({theme:e})=>e.greenMain}, 0 0 0 6px ${({theme:e})=>e.white};
  }

  &:focus-visible {
    background-color: ${({theme:e})=>e.darkGreen};
    box-shadow: 0 0 0 4px ${({theme:e})=>e.greenMain}, 0 0 0 6px ${({theme:e})=>e.white};
  }

  @media (min-width: ${l.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,qe=o.input`
  display: none;
`,Ke=o.div`
  flex: 1;
  
  @media (min-width: ${l.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center; 
  }
`,W=o.h2`
  color: ${({theme:e})=>e.greenMain};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`,z=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: ${e=>e.hasphysique?"20px":"0"};
  padding-bottom: ${e=>e.hasphysique?"20px":"0"};
  @media (min-width: ${l.tablet}) {
    flex-direction: column;
  }
  
  @media (min-width: ${l.desktop}) {
    flex-direction: row;
    gap: 1.5rem;
  }
`,p=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,x=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,$=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:s,name:a})=>s&&a==="username"?e.red:e.borderColor};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  transition: all 0.2s ease-in-out;

  &:focus {
      outline: none;
      border-color: ${({theme:e})=>e.lightGreen};
      box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.lightGreen.slice(1,3),16)}, ${parseInt(e.lightGreen.slice(3,5),16)}, ${parseInt(e.lightGreen.slice(5,7),16)}, 0.5)`};
  }

  &::placeholder {
    color: ${({theme:e})=>e.textGray};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 30px ${({theme:e})=>e.ContainerBGColor} inset;
    -webkit-text-fill-color: ${({theme:e})=>e.textBlack};
    transition: background-color 5000s ease-in-out 0s;
    border-color: ${({theme:e})=>e.lightGreen};
  }

  &:not(:placeholder-shown):not(:-webkit-autofill):invalid {
      border-color: ${({theme:e})=>e.red};
  }

  &:focus:not(:placeholder-shown):not(:-webkit-autofill):invalid {
      box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.red.slice(1,3),16)}, ${parseInt(e.red.slice(3,5),16)}, ${parseInt(e.red.slice(5,7),16)}, 0.5)`};
  }
  
  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    cursor: not-allowed;
  }
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,Ue=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,Xe=o.button`
  max-width: 500px;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.lightGreenAlpha};
  }

  &:focus {
    outline: none;
     background-color: ${({theme:e})=>e.darkGreen};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.lightGreenAlpha};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    cursor: not-allowed;
  }
`,Ye=o(te)`
  fill: ${e=>e.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${l.tablet}) {
    width: 18px;
    height: 18px;
  }
`,E=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,R=o.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
   margin-top: ${e=>e.$hasSportInfo?"20px":"0"};
  @media (min-width: ${l.desktop}) {
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }
`,F=o.div`
  flex: 1;
  
  @media (min-width: ${l.desktop}) {
     margin-top: ${e=>e.$hasSportInfo?"0":"3.1rem"}
  }

  
`,L=o.div`
  flex: 1;
  @media (max-width: ${l.desktop}) {
    margin-top: ${e=>e.$hasSportInfo?"20px":"0"}
  }
`,B=o.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,k=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: ${l.desktop}) {
    flex-direction: row;
    gap: 20px;
    
    & > ${p} {
      flex: 1;
    }
  }
`,Ze=o(W)`
  margin-bottom: 1rem;
  padding-top: 10px;

  @media (min-width: ${l.desktop}) {
    padding-top: 0;
  }
`,Je=o.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:s,name:a})=>s&&a==="notes"?e.red:e.borderColor};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  transition: all 0.2s ease-in-out;
  resize: vertical;
  min-height: 120px;
  max-height: 300px;
   transition: none;

  &:focus {
      outline: none;
      border-color: ${({theme:e})=>e.lightGreen};
      box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.lightGreen.slice(1,3),16)}, ${parseInt(e.lightGreen.slice(3,5),16)}, ${parseInt(e.lightGreen.slice(5,7),16)}, 0.5)`};
  }

  &::placeholder {
    color: ${({theme:e})=>e.textGray};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    cursor: not-allowed;
  }

  &:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    border-color: ${({theme:e})=>e.red};
  }

  &:focus:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.red.slice(1,3),16)}, ${parseInt(e.red.slice(3,5),16)}, ${parseInt(e.red.slice(5,7),16)}, 0.5)`};
  }
`,ot=()=>{const{setTitle:e}=ee();i.useState(!1);const[s,a]=i.useState(""),[u,h]=i.useState(""),[d,g]=i.useState(""),[m,j]=i.useState(""),[r,c]=i.useState(""),[b,w]=i.useState(""),[y,f]=i.useState(""),[v,C]=i.useState(""),[I,N]=i.useState(""),[D,A]=i.useState(""),[V,H]=i.useState(""),[q,K]=i.useState(""),[U,X]=i.useState(""),[Y,Z]=i.useState(""),[J,Q]=i.useState("");i.useState(null),i.useEffect(()=>{e("Створення нового спортсмена")},[e]);const _=n=>{if(n.key==="Enter"||n.key===" "){const M=document.getElementById("photo-upload");M&&M.click()}};return t.jsx(t.Fragment,{children:t.jsx(Oe,{children:t.jsxs(Pe,{children:[t.jsxs(We,{children:[t.jsx(Ne,{children:t.jsxs(De,{children:[t.jsx(Ae,{children:t.jsx(Ve,{src:oe,alt:"Фото спортсмена"})}),t.jsx(He,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:_,children:t.jsx(Ye,{})}),t.jsx(qe,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp"})]})}),t.jsxs(Ke,{children:[t.jsx(W,{children:"Особиста інформація"}),t.jsxs(z,{children:[t.jsxs(p,{children:[t.jsx(x,{htmlFor:"firstName",children:"Ім'я"}),t.jsx($,{id:"firstName",type:"text",placeholder:"Введіть ім'я",value:s,onChange:n=>a(n.target.value)})]}),t.jsxs(p,{children:[t.jsx(x,{htmlFor:"lastName",children:"Прізвище"}),t.jsx($,{id:"lastName",type:"text",placeholder:"Введіть прізвище",value:u,onChange:n=>h(n.target.value)})]}),t.jsxs(p,{children:[t.jsx(x,{htmlFor:"patronymic",children:"По батькові"}),t.jsx($,{id:"patronymic",type:"text",placeholder:"Введіть по батькові",value:d,onChange:n=>g(n.target.value)})]})]})]})]}),t.jsxs(R,{children:[t.jsx(F,{children:t.jsxs(B,{children:[t.jsx(k,{children:t.jsxs(p,{children:[t.jsx(x,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(E,{children:t.jsx(T,{selectedDate:m,onDateChange:j})})]})}),t.jsx(k,{children:t.jsxs(p,{children:[t.jsx(x,{htmlFor:"address",children:"Адреса"}),t.jsx($,{id:"address",type:"text",value:r,onChange:n=>c(n.target.value),placeholder:"Введіть адресу"})]})}),t.jsx(k,{children:t.jsx(ve,{label:"Виберіть стать",value:b,onChange:w})})]})}),t.jsxs(L,{children:[t.jsx(Ze,{children:"Контакти"}),t.jsxs(B,{children:[t.jsx(k,{children:t.jsxs(p,{children:[t.jsx(x,{htmlFor:"phone",children:"Телефон"}),t.jsx($,{id:"phone",type:"tel",value:y,onChange:n=>f(n.target.value),placeholder:"Введіть номер телефону"})]})}),t.jsx(k,{children:t.jsxs(p,{children:[t.jsx(x,{htmlFor:"email",children:"Email"}),t.jsx($,{id:"email",type:"email",value:v,onChange:n=>C(n.target.value),placeholder:"Введіть email"})]})}),t.jsx(k,{children:t.jsxs(p,{children:[t.jsx(x,{htmlFor:"socialMedia",children:"Соцмережі"}),t.jsx($,{id:"socialMedia",type:"text",value:I,onChange:n=>N(n.target.value),placeholder:"Введіть посилання на соцмережі"})]})})]})]})]}),t.jsx(G,{helpTooltiptitle:"Ці параметри не є обов'язковими, але вони допомагають отримати детальнішу статистику 📊",helpTooltip:"Додайте перший замір щоб відстежувати зміни спортсмена. Після створення профілю спортсмена ви зможете додавати нові заміри та повністю керувати ними 😊",top:"-700%",left:"-310%",title:"Фізичні дані",children:t.jsxs(z,{hasphysique:!0,children:[t.jsxs(p,{children:[t.jsx(x,{htmlFor:"height",children:"Зріст у м."}),t.jsx($,{id:"height",type:"number",min:"0",max:"4",placeholder:"Введіть зріст у м.",step:"0.1",value:D,onChange:n=>A(n.target.value)})]}),t.jsxs(p,{children:[t.jsx(x,{htmlFor:"weight",children:"Вага у кг."}),t.jsx($,{id:"weight",min:"0",max:"400",step:"0.1",placeholder:"Введіть вагу у кг.",type:"number",value:V,onChange:n=>H(n.target.value)})]}),t.jsxs(p,{children:[t.jsx(x,{htmlFor:"dateOfMeasurement",children:"Дата вимірювання"}),t.jsx(E,{children:t.jsx(T,{selectedDate:q,onDateChange:K})})]})]})}),t.jsx(G,{title:"Спортивна інформація",children:t.jsxs(R,{$hasSportInfo:!0,children:[t.jsx(F,{$hasSportInfo:!0,children:t.jsxs(B,{children:[t.jsx(k,{children:t.jsxs(p,{children:[t.jsx(x,{htmlFor:"role",children:"Роль у команді"}),t.jsx($,{id:"role",type:"text",value:U,onChange:n=>X(n.target.value),placeholder:"Введіть роль у команді"})]})}),t.jsx(k,{children:t.jsxs(p,{children:[t.jsx(x,{htmlFor:"sportCategory",children:"Спортивний розряд"}),t.jsx($,{id:"sportCategory",type:"text",value:Y,onChange:n=>Z(n.target.value),placeholder:"Введіть спортивний розряд"})]})}),t.jsx(k,{children:t.jsxs(p,{children:[t.jsx(x,{htmlFor:"notes",children:"Примітки про спортсмена"}),t.jsx(Je,{id:"notes",value:J,onChange:n=>Q(n.target.value),placeholder:"Додайте примітки про спортсмена"})]})})]})}),t.jsx(L,{$hasSportInfo:!0,children:t.jsx(Le,{})})]})}),t.jsx(G,{title:"Спортивна інформація",children:"Будь-який контент"}),t.jsx(Ue,{children:t.jsx(Xe,{type:"submit",children:"Створити"})})]})})})};export{ot as default};
