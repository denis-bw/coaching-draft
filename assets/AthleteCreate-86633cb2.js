import{r,d as o,j as t,l as A,b as Ge}from"./index-52249103.js";import{g as K,a as Ie,u as De,b as Se,D as Be,S as Ee,C as N}from"./CustomDatePicker-f323b241.js";import{p as Te}from"./PlaceholderProfile-3c1b0d36.js";import{P as Me}from"./PlaceholderTeam-4fc9ba85.js";const te=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6 9L12 15L18 9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ze=o.div`
  
  margin: 20px 0;
  border: 1.7px solid ${({theme:e})=>e.greenMain};
  border-radius: 8px;

  background-color: ${({theme:e})=>e.ContainerBGColor}; 
  transition: background-color 0.3s ease;
  ${({isOpen:e})=>!e&&`
    border-radius: 8px 8px 0 0;
  `}


`,Le=o(te)`
  stroke: ${e=>e.theme.white};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
`,Re=o.button.attrs({type:"button"})`
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
`,_e=o.div`
  padding: 0 20px;
  max-height: ${({isOpen:e})=>e?"1000px":"0"};
  opacity: ${({isOpen:e})=>e?"1":"0"};
  overflow: hidden;
  transition: 
    max-height ${({isOpen:e})=>e?"0.8s":"0.4s"} ease-in-out,
    opacity ${({isOpen:e})=>e?"0.8s":"0.4s"} ease-in-out;
`,Ne=o.h3`
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
`,Fe=o.div`
  display: flex;
  align-items: center;
`,We=o.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,Oe=e=>r.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2}),r.createElement("path",{d:"M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M12 16H12.01",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),oe=o(Oe)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({theme:e})=>e.white};
  transition: stroke 0.3s ease;
`,Pe=o.button.attrs({type:"button"})`
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

    ${oe} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,Ae=o.div`
  position: fixed;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  padding: 12px;
  border-radius: 10px;
  border: 2px solid ${({theme:e})=>e.black};
  font-size: 14px;
  line-height: 1.5;
  max-width: 300px;
  min-width: 80px;
  max-height: 170px;
  width: max-content;
  z-index: 100;
  cursor: pointer;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  opacity: ${({visible:e})=>e?1:0};
  transition: opacity 0.2s ease-in-out;
  white-space: pre-line;
  margin-top: ${({placement:e})=>e==="top"?"6px":"-6px"};
  top: ${({tooltipPosition:e})=>(e==null?void 0:e.top)||"0"}px;
  left: ${({tooltipPosition:e})=>(e==null?void 0:e.left)||"0"}px;
  
  &::before {
    content: '';
    position: absolute;
    display: block;
    border-style: solid;
    width: 0;
    height: 0;
    z-index: 1;
    
    ${({placement:e,theme:i})=>e==="top"?`
          bottom: -9px; /* Трохи вище, ніж зовнішня стрілка */
          left: 79.4%;
          margin-left: -6px;
          border-width: 9px 9px 0;
          border-color: ${i.black} transparent transparent;
        `:`
          top: -9px; /* Трохи нижче, ніж зовнішня стрілка */
          left: 79.4%;
          margin-left: -6px;
          border-width: 0 9px 9px;
          border-color: transparent transparent ${i.black};
        `}
  }

  @media (max-width: 768px) {
    max-width: 260px;

  }
`,He=o.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
`,Ke=o.div`
  font-size: 14px; 
  font-weight: 600; 
  margin-bottom: 5px; 
`,Ve=({title:e,text:i})=>{const[l,a]=r.useState(!1),[g,h]=r.useState("top"),[s,m]=r.useState(null),u=r.useRef(null),j=r.useRef(null),x=()=>{if(!j.current||!u.current||!l)return;const d=j.current.getBoundingClientRect(),k=u.current.getBoundingClientRect(),C=window.innerWidth,n=k.height,p=k.width,v=d.top,b=d.bottom,I=d.left;d.right;const T=d.width;d.height;const S=I+T/2,E=v>n+15?"top":"bottom";h(E);let B,G;E==="top"?B=v-n-12:B=b+12,G=S-p*.8,G<10&&(G=10),G+p>C-10&&(G=C-p-10),m({top:B,left:G})};return r.useEffect(()=>{l&&setTimeout(x,0)},[l]),r.useEffect(()=>{if(l)return window.addEventListener("scroll",x),window.addEventListener("resize",x),()=>{window.removeEventListener("scroll",x),window.removeEventListener("resize",x)}},[l]),t.jsxs(Pe,{ref:j,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:()=>a(!l),children:[t.jsx(oe,{}),t.jsx(Ae,{ref:u,visible:l,placement:g,tooltipPosition:s,children:t.jsxs(He,{children:[e&&t.jsx(Ke,{children:e}),i]})})]})},z=({children:e,helpTooltiptitle:i,helpTooltip:l,title:a,top:g,left:h})=>{const[s,m]=r.useState(!1),[u,j]=r.useState(!1),x=r.useRef(null),d=r.useRef(null),k=r.useRef(!1),C=()=>{m(n=>(u||j(!0),!n))};return r.useEffect(()=>{const n=new IntersectionObserver(([p])=>{!u&&p.isIntersecting&&!k.current&&p.intersectionRatio>=1&&(setTimeout(()=>{m(!0)},200),k.current=!0)},{threshold:1,rootMargin:"0px 0px -100px 0px"});return x.current&&n.observe(x.current),()=>{x.current&&n.unobserve(x.current)}},[u]),r.useEffect(()=>{d.current&&(s?d.current.removeAttribute("inert"):d.current.setAttribute("inert",""))},[s]),t.jsxs(ze,{ref:x,isOpen:s,children:[t.jsxs(Re,{onClick:C,role:"button",tabIndex:0,children:[a&&t.jsx(Ne,{children:a}),t.jsxs(Fe,{children:[l&&t.jsx(We,{onClick:n=>n.stopPropagation(),children:t.jsx(Ve,{title:i,text:l,top:g,left:h})}),t.jsx(Le,{isOpen:s})]})]}),t.jsx(_e,{ref:d,isOpen:s,children:e})]})},qe=o.div`
  position: relative;
  width: 100%;
`,Ue=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,Ye=o.span`
  color: ${({theme:e})=>e.textGray};
  font-family: 'Inter Tight', sans-serif;
`,Xe=o.button.attrs({type:"button"})`
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
`,Ze=o.div`
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
`,F=o.button.attrs({type:"button"})`
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
`,Je=o(te)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) ${e=>e.open?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
  width: 22px;
  height: auto;
`,Qe=({label:e,value:i,onChange:l})=>{const[a,g]=r.useState(!1),[h,s]=r.useState(i),m=r.useRef(null),u=()=>{g(!a)},j=d=>{s(d),l(d),g(!1)},x=d=>{m.current&&!m.current.contains(d.target)&&g(!1)};return r.useEffect(()=>(document.addEventListener("click",x),()=>{document.removeEventListener("click",x)}),[]),t.jsxs(qe,{ref:m,children:[e&&t.jsx(Ue,{onClick:u,children:e}),t.jsxs(Xe,{onClick:u,children:[t.jsx(Ye,{children:h||"Не вибрано"}),t.jsx(Je,{open:a})]}),a&&t.jsxs(Ze,{children:[t.jsx(F,{className:h==="Чоловік"?"selected":"",onClick:()=>j("Чоловік"),children:"Чоловік"}),t.jsx(F,{className:h==="Жінка"?"selected":"",onClick:()=>j("Жінка"),children:"Жінка"}),t.jsx(F,{className:h===""?"selected":"",onClick:()=>j(""),children:"Не вибрано"})]})]})},et=o.div`
  width: 100%;
  &:first-child {
    padding-top: 2px;
  }

  &:not(:first-child) {
    padding-top: 10px;
  }

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
`,tt=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: ${({theme:e})=>e.textGray};
  font-size: 14px;
  text-align: center;
  padding: 100px 20px;
  
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 30px 15px;
  }
`,ot=o.button`
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) 14px;
  grid-gap: 12px;
  align-items: center;
  padding: 10px 15px;
  background-color: ${({theme:e,isSelected:i})=>i?e.greenMain:e.disabledBG};
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
    background-color: ${({theme:e,isSelected:i})=>i?e.greenMain:`${e.lightGreen}`};
  }

  &:focus {
    outline: none;
    background-color: ${({theme:e,isSelected:i})=>i?e.greenMain:`${e.greenMain}80`};
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
`,rt=o.div`
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
`,nt=o.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,it=o.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,at=o.div`
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
    border-radius: 8px;
    min-height: 224px;
    max-height: 224px;
  }
   @media (max-width: 1024px) {
     min-height: 140px;
  }
`,st=o.div`
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
`,lt=o.div`
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  flex: 1; 
  overflow: hidden; 
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`,dt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,ct=o.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  margin-bottom: 15px;
  position: relative;

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
`,pt=o.img`
  border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,xt=()=>{const[e,i]=r.useState(null),l=r.useRef(null),a=r.useRef({}),g=[{id:1,name:"Динамо"},{id:2,name:"Шахтар"},{id:3,name:"Зоря"},{id:4,name:"Металіст"},{id:5,name:"Верес"},{id:6,name:"Олександрія"},{id:7,name:"Чорноморець"},{id:8,name:"Карпати"},{id:9,name:"Дніпро"},{id:10,name:"Десна"}],h=r.useCallback(s=>{e&&e.id===s.id?(console.log("Team deselected:",s),i(null),a.current[s.id]&&a.current[s.id].blur()):(console.log("Team selected:",s),i(s))},[e]);return r.useEffect(()=>{if(!l.current)return;const s={root:l.current,rootMargin:"0px",threshold:.1},m=x=>{x.forEach(d=>{d.target.classList&&(d.isIntersecting?(d.target.classList.add("visible"),d.target.classList.remove("hidden")):(d.target.classList.add("hidden"),d.target.classList.remove("visible")))})},u=new IntersectionObserver(m,s);return document.querySelectorAll('[id^="team-"]').forEach(x=>{u.observe(x),x.classList.add("hidden")}),()=>u.disconnect()},[]),t.jsx(lt,{children:t.jsxs(at,{children:[t.jsx(ct,{children:t.jsx(dt,{children:t.jsx("h2",{children:"Команда спортсмена"})})}),t.jsx(st,{ref:l,children:g.length>0?g.map(s=>t.jsx(et,{className:"team-item",id:`team-${s.id}`,children:t.jsxs(ot,{ref:m=>a.current[s.id]=m,isSelected:e&&e.id===s.id,onClick:()=>h(s),type:"button",children:[t.jsx(rt,{children:t.jsx(pt,{loading:"lazy",src:Me})}),t.jsx(nt,{children:t.jsx(it,{children:s.name})})]})},s.id)):t.jsx(tt,{children:"Команд не знайдено"})})]})})},ht=o(Be)`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({$error:e,theme:i})=>e?i.red:i.borderColor};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.lightGreen};
    box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.lightGreen.slice(1,3),16)}, ${parseInt(e.lightGreen.slice(3,5),16)}, ${parseInt(e.lightGreen.slice(5,7),16)}, 0.5)`};
  }

  &::placeholder {
    color: ${({theme:e})=>e.textGray};
  }
`,ut=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 8px 4px;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 12px;
`,gt=o.select`
  padding: 6px 12px;
  width: 80px;
  border: 1.6px solid ${({theme:e})=>e.greenMain};
  border-radius: 6px;
  background: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.lightGreen};
    box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.lightGreen.slice(1,3),16)}, ${parseInt(e.lightGreen.slice(3,5),16)}, ${parseInt(e.lightGreen.slice(5,7),16)}, 0.2)`};
  }


`,mt=o.select`
  padding: 6px 12px;
  width: 120px;
  border: 1.6px solid ${({theme:e})=>e.greenMain};
  border-radius: 6px;
  background: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.lightGreen};
    box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.lightGreen.slice(1,3),16)}, ${parseInt(e.lightGreen.slice(3,5),16)}, ${parseInt(e.lightGreen.slice(5,7),16)}, 0.2)`};
  }

`,bt=o.div`
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__month-container {
    border-radius: 14px;
  }
  .react-datepicker-popper {
    border-radius: 14px;
  }
  .react-datepicker {
    border-radius: 14px;
    border: 3px solid ${({theme:e})=>e.greenMain};
    background-color: ${({theme:e})=>e.ContainerBGColor};
  }

  .react-datepicker__header {
    background-color: ${({theme:e})=>e.ContainerBGColor};
    border-radius: 14px 14px 0 0;
    border-bottom: 1px solid ${({theme:e})=>e.greenMain};
    padding-top: 0;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-radius: 14px 14px 0 0;
  }
  .react-datepicker__day-name {
    color: ${({theme:e})=>e.textBlack};
    font-size: 0.9rem;
  }

  .react-datepicker__day:not([aria-disabled=true]):hover, 
  .react-datepicker__month-text:not([aria-disabled=true]):hover, 
  .react-datepicker__quarter-text:not([aria-disabled=true]):hover, 
  .react-datepicker__year-text:not([aria-disabled=true]):hover {
    border-radius: 50%;
    background-color: ${({theme:e})=>e.darkGreen} !important;
    color: ${({theme:e})=>e.white};
  }
  .react-datepicker__day {
    color: ${({theme:e})=>e.textBlack};
    border-radius: 50%;
    &:hover {
      background-color: ${({theme:e})=>e.darkGreen} !important;
      border-radius: 50%;
    }
  }

  .react-datepicker__day--selected {
    background-color: ${({theme:e})=>e.greenMain};
    color: ${({theme:e})=>e.white};
    border-radius: 50%;

    &:hover {
      background-color: ${({theme:e})=>e.darkGreen} !important;
    }
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${({theme:e})=>e.lightGreen};
    color: ${({theme:e})=>e.textBlack};
  }

  .react-datepicker__day--outside-month {
    color: ${({theme:e})=>e.textGray};
  }
  
  .react-datepicker__day--disabled {
    color: ${({theme:e})=>e.textGray};
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      background-color: transparent !important;
      color: ${({theme:e})=>e.textGray} !important;
    }
  }

  .react-datepicker__triangle {
    display: none;
  }
`,ft=(e,i,l=1)=>{let a=[];for(let g=e;g<=i;g+=l)a.push(g);return a},V=({value:e,onChange:i,placeholder:l="Оберіть дату",hasError:a=!1,minDate:g,maxDate:h})=>{const s=n=>{if(!n)return null;try{const p=new Date(n);return isNaN(p.getTime())?null:p}catch{return null}},[m,u]=r.useState(()=>s(e));r.useEffect(()=>{u(s(e))},[e]);const x=ft(1900,K(new Date)),d=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],k=n=>{u(n),i(n?n.toISOString().split("T")[0]:"")};let C=s(g);return C&&(C=Ie(C,1)),t.jsx(bt,{children:t.jsx(ht,{selected:m,onChange:k,dateFormat:"dd.MM.yyyy",placeholderText:l,locale:De,$error:a,minDate:C,maxDate:h?s(h):void 0,renderCustomHeader:({date:n,changeYear:p,changeMonth:v})=>t.jsxs(ut,{children:[t.jsx(gt,{value:K(n),onChange:b=>{p(parseInt(b.target.value))},children:x.map(b=>t.jsx("option",{value:b,children:b},b))}),t.jsx(mt,{value:d[Se(n)],onChange:b=>{v(d.indexOf(b.target.value))},children:d.map((b,I)=>t.jsx("option",{value:b,children:b},I))})]})})})},wt=o.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,$t=o.div`
    padding: 10px 0;
    border: 1.6px solid ${({theme:e})=>e.gray};
    border-radius: 0.5rem;
   margin-bottom: 1rem;
`,jt=o.div`
  flex-grow: 1;
  max-height: 300px;
  overflow-y: auto;
  display: ${({$hasInstitutions:e})=>e?"block":"none"};
  background-color: ${({theme:e})=>e.ContainerBGColor};
  
`,kt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({theme:e})=>e.gray};
  background-color: ${({theme:e})=>e.ContainerBGColor};
  transition: background-color 0.3s ease;
  
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({theme:e})=>e.mainBGColor};
  }

  // Обмеження для тексту в картках
  & > div > div > span {
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,vt=o.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,R=o.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: ${({theme:e})=>e.textBlack};
`,Ct=o.button`
  background: none;
  border: none;
  color: ${({theme:e})=>e.red};
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 0.5rem;

  &:hover {
    color: ${({theme:e})=>e.redDark};
  }
`,yt=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,q=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`,_=o.div`
  display: flex;
  flex-direction: column;
`,L=o.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,W=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({$error:e,theme:i})=>e?i.red:i.borderColor};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};

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
`,Gt=o.span`
  color: ${({theme:e})=>e.red};
  font-size: 0.75rem;
  margin-left: 0.5rem;
    @media (max-width: 400px) {
      width: 72px;
    font-size: 0.65rem;  
    white-space: normal; 
    word-wrap: break-word; 
  }
`,It=o.button`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  border: none;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({theme:e})=>e.lightGreen};
  }
  &:focus {
    outline: none;
    background-color: ${({theme:e})=>e.lightGreen};
  }
`,Dt=o.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,St=o.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,U=o(_)`
  flex: 1;
`,Bt=o.div`
  text-align: center;
  color: ${({theme:e})=>e.textGray};
  padding: 1rem;
  padding-top: 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,Et=e=>r.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 ",stroke:"none",fillRule:"evenodd"})),re=o(Et)`
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: ${({theme:e})=>e.red};
  transition: stroke 0.3s ease;
`,Tt=o.button.attrs({type:"button"})`
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

    ${re} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,Mt=o.div`
  position: fixed;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  padding: 12px;
  border-radius: 10px;
  border: 2px solid ${({theme:e})=>e.red};
  font-size: 14px;
  line-height: 1.5;
  max-width: 300px;
  min-width: 80px;
  max-height: 170px;
  width: max-content;
  z-index: 100;
  cursor: pointer;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  opacity: ${({visible:e})=>e?1:0};
  transition: opacity 0.2s ease-in-out;
  white-space: pre-line;
  margin-top: ${({placement:e})=>e==="top"?"6px":"-6px"};
  top: ${({tooltipPosition:e})=>(e==null?void 0:e.top)||"0"}px;
  left: ${({tooltipPosition:e})=>(e==null?void 0:e.left)||"0"}px;
  
  &::before {
    content: '';
    position: absolute;
    display: block;
    border-style: solid;
    width: 0;
    height: 0;
    z-index: 1;
    
    ${({placement:e,theme:i})=>e==="top"?`
          bottom: -9px; /* Трохи вище, ніж зовнішня стрілка */
          left: 79.4%;
          margin-left: -6px;
          border-width: 9px 9px 0;
          border-color: ${i.red} transparent transparent;
        `:`
          top: -9px; /* Трохи нижче, ніж зовнішня стрілка */
          left: 79.4%;
          margin-left: -6px;
          border-width: 0 9px 9px;
          border-color: transparent transparent ${i.red};
        `}
  }

  @media (max-width: 768px) {
    max-width: 260px;

  }
`,zt=o.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
  /* color: ${({theme:e})=>e.red}; */
`,Lt=o.div`
  font-size: 14px; 
  font-weight: 700; 
  margin-bottom: 5px; 
  color:  ${({theme:e})=>e.red};
`,Rt=({title:e,text:i})=>{const[l,a]=r.useState(!1),[g,h]=r.useState("top"),[s,m]=r.useState(null),u=r.useRef(null),j=r.useRef(null),x=()=>{if(!j.current||!u.current||!l)return;const d=j.current.getBoundingClientRect(),k=u.current.getBoundingClientRect(),C=window.innerWidth,n=k.height,p=k.width,v=d.top,b=d.bottom,I=d.left;d.right;const T=d.width;d.height;const S=I+T/2,E=v>n+15?"top":"bottom";h(E);let B,G;E==="top"?B=v-n-12:B=b+12,G=S-p*.8,G<10&&(G=10),G+p>C-10&&(G=C-p-10),m({top:B,left:G})};return r.useEffect(()=>{l&&setTimeout(x,0)},[l]),r.useEffect(()=>{if(l)return window.addEventListener("scroll",x),window.addEventListener("resize",x),()=>{window.removeEventListener("scroll",x),window.removeEventListener("resize",x)}},[l]),t.jsxs(Tt,{ref:j,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:()=>a(!l),children:[t.jsx(re,{}),t.jsx(Mt,{ref:u,visible:l,placement:g,tooltipPosition:s,children:t.jsxs(zt,{children:[e&&t.jsx(Lt,{children:e}),i]})})]})},_t=({onDataUpdate:e})=>{const[i,l]=r.useState([]),[a,g]=r.useState({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),[h,s]=r.useState({}),m=100;r.useEffect(()=>{const n=i.map(p=>({previousCoach:p.coachName,previousInstitution:p.institution||"",coachContacts:p.coachContacts||"",entryDate:p.entryDate||"",exitDate:p.exitDate||""}));e(n)},[i,e]);const u=n=>{n.key==="Enter"&&n.preventDefault()},j=()=>{const n={};if(a.coachName.trim()||(n.coachName="Ім'я тренера є обов'язковим"),a.entryDate&&a.exitDate){const p=new Date(a.entryDate),b=new Date(a.exitDate).getTime()-p.getTime();Math.ceil(b/(1e3*3600*24))<=0&&(n.exitDate="Дата виходу має бути пізніше дати вступу")}return s(n),Object.keys(n).length===0},x=()=>{if(j()){const n={...a,id:Date.now()};l(p=>[...p,n]),g({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),s({})}},d=n=>{l(p=>p.filter(v=>v.id!==n))},k=(n,p)=>{if(g(v=>({...v,[n]:p})),h[n]&&s(v=>{const b={...v};return delete b[n],b}),n==="entryDate"&&a.exitDate){const v=new Date(p),I=new Date(a.exitDate).getTime()-v.getTime();Math.ceil(I/(1e3*3600*24))<=0?s(S=>({...S,exitDate:"Дата виходу з закладу має бути пізніше дати вступу"})):h.exitDate&&s(S=>{const M={...S};return delete M.exitDate,M})}},C=n=>{if(!n)return"";try{const p=new Date(n);return isNaN(p.getTime())?n:p.toLocaleDateString("uk-UA")}catch{return n}};return t.jsxs(wt,{children:[i.length===0?t.jsx(Bt,{children:"Додайте інформацію"}):t.jsx($t,{children:t.jsx(jt,{$hasInstitutions:i.length>0,children:i.map(n=>t.jsxs(kt,{children:[t.jsxs(vt,{children:[t.jsxs(R,{children:[t.jsx("strong",{children:"Тренер:"}),t.jsx("span",{children:n.coachName})]}),t.jsxs(R,{children:[t.jsx("strong",{children:"Заклад:"}),t.jsx("span",{children:n.institution||"Без назви"})]}),t.jsxs(R,{children:[t.jsx("strong",{children:"Контакти:"}),t.jsx("span",{children:n.coachContacts||"Не вказано"})]}),t.jsxs(R,{children:[t.jsx("strong",{children:"Період:"}),t.jsxs("span",{children:[C(n.entryDate)||"Не вказано"," - ",C(n.exitDate)||"Не вказано"]})]})]}),t.jsx(Ct,{onClick:()=>d(n.id),children:"✕"})]},n.id))})}),t.jsxs(yt,{children:[t.jsxs(q,{children:[t.jsxs(_,{children:[t.jsxs(L,{children:["Минулий Тренер *",h.coachName&&t.jsx(Gt,{children:h.coachName})]}),t.jsx(W,{type:"text",onKeyDown:u,value:a.coachName,onChange:n=>k("coachName",n.target.value),placeholder:"Введіть ім'я тренера",maxLength:m,$error:h.coachName})]}),t.jsxs(_,{children:[t.jsx(L,{children:"Минулий спортивний заклад"}),t.jsx(W,{type:"text",onKeyDown:u,value:a.institution,onChange:n=>k("institution",n.target.value),placeholder:"Введіть назву закладу",maxLength:m})]})]}),t.jsxs(q,{children:[t.jsxs(_,{children:[t.jsx(L,{children:"Контакти тренера"}),t.jsx(W,{type:"text",onKeyDown:u,value:a.coachContacts,onChange:n=>k("coachContacts",n.target.value),placeholder:"Введіть контакти тренера",maxLength:m})]}),t.jsxs(St,{children:[t.jsxs(U,{children:[t.jsx(L,{children:"Дата вступу"}),t.jsx(V,{value:a.entryDate,onChange:n=>k("entryDate",n),placeholder:"Оберіть дату вступу"})]}),t.jsxs(U,{children:[t.jsxs(L,{children:["Дата виходу",h.exitDate&&t.jsx(Rt,{title:"Неправильно введені дані",text:h.exitDate})]}),t.jsx(V,{value:a.exitDate,onChange:n=>k("exitDate",n),placeholder:"Оберіть дату вихлду",minDate:a.entryDate,hasError:!!h.exitDate})]})]})]})]}),t.jsx(Dt,{children:t.jsx(It,{type:"button",onClick:x,children:"Додати"})})]})};o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`;o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:i,name:l})=>i&&l==="username"?e.red:e.borderColor};
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
`;const $={mobile:"320px",tablet:"768px",desktop:"1024px"},Nt=o.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  @media (min-width: ${$.tablet}) {
    align-items: flex-start;
    height: 100%;
  }
`,Y=o.form`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${$.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${$.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }

  ${({$isSportsFacility:e})=>e&&A`
      @media (min-width: ${$.tablet}) {
       padding: 14px 0;
      }
  
      @media (min-width: ${$.desktop}) {
        padding: 14px 0;
      }
  `}
`,Ft=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${$.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`,Wt=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  
  @media (min-width: ${$.tablet}) {
    width: auto;
    margin-right: 3.8rem;
    margin-bottom: 0;
    justify-content: flex-start;
    align-self: center; 
  }

   @media (min-width: ${$.desktop}) {
    margin-right: 2rem;
  }
`,Ot=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${$.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,Pt=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,At=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Ht=o.label`
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

  @media (min-width: ${$.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,Kt=o.input`
  display: none;
`,Vt=o.div`
  flex: 1;
  
  @media (min-width: ${$.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center; 
  }
`,ne=o.h2`
  color: ${({theme:e})=>e.greenMain};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`,X=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: ${e=>e.hasphysique?"20px":"0"};
  padding-bottom: ${e=>e.hasphysique?"20px":"0"};
  @media (min-width: ${$.tablet}) {
    flex-direction: column;
  }
  
  @media (min-width: ${$.desktop}) {
    flex-direction: row;
    gap: 1.5rem;
  }
`,f=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;

${({$isUniversity:e})=>e&&A`
      @media (max-width: 1024px) {
        margin-top: 10px; 
      }

      @media (min-width: 1024px) {
        margin-top: 0;
      }
    `}
`,w=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,y=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:i,name:l})=>i&&l==="username"?e.red:e.borderColor};
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
`,qt=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,Ut=o.button`
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
  }

  &:focus {
    outline: none;
    background-color: ${({theme:e})=>e.darkGreen};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    cursor: not-allowed;
  }
`,Yt=o(Ee)`
  fill: ${e=>e.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${$.tablet}) {
    width: 18px;
    height: 18px;
  }
`,O=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Z=o.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
   margin-top: ${e=>e.$hasSportInfo?"20px":"0"};
  @media (min-width: ${$.desktop}) {
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }
`,J=o.div`
  flex: 1;
  
  @media (min-width: ${$.desktop}) {
     margin-top: ${e=>e.$hasSportInfo?"0":"3.1rem"}
  }

  
`,Q=o.div`
  flex: 1;
  @media (max-width: ${$.desktop}) {
    margin-top: ${e=>e.$hasSportInfo?"20px":"0"}
  }
`,P=o.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,D=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: ${$.desktop}) {
    flex-direction: row;
    gap: 20px;
    
    & > ${f} {
      flex: 1;
    }
  }
`,Xt=o(ne)`
  margin-bottom: 1rem;
  padding-top: 10px;

  @media (min-width: ${$.desktop}) {
    padding-top: 0;
  }
`,Zt=o.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:i,name:l})=>i&&l==="notes"?e.red:e.borderColor};
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
`,Jt=o.div`
  margin: 20px 0;
`,Qt=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${$.desktop}) {
    flex-direction: row;
    gap: 40px;
  }

`,ee=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  ${({$isSportsFacility:e})=>e&&A`
      gap: 10px;
  `}
`;o.div`
  width: 100%;
  
  .react-datepicker-wrapper {
    width: 100%;
  }
  
  .react-datepicker__input-container {
    width: 100%;
  }
  
  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1.6px solid ${({theme:e})=>e.borderColor};
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: ${({theme:e})=>e.ContainerBGColor};
    color: ${({theme:e})=>e.textBlack};
  }
`;const no=()=>{const{setTitle:e}=Ge();r.useState(!1);const[i,l]=r.useState(""),[a,g]=r.useState(""),[h,s]=r.useState(""),[m,u]=r.useState(""),[j,x]=r.useState(""),[d,k]=r.useState(""),[C,n]=r.useState(""),[p,v]=r.useState(""),[b,I]=r.useState(""),[T,S]=r.useState(""),[M,E]=r.useState(""),[B,G]=r.useState(""),[ie,ae]=r.useState(""),[se,le]=r.useState(""),[de,ce]=r.useState("");r.useState(null);const[pe,xe]=r.useState(""),[he,ue]=r.useState(""),[ge,me]=r.useState(""),[be,fe]=r.useState(""),[we,$e]=r.useState(""),[je,ke]=r.useState(null),[ve,Ce]=r.useState({});console.log(ve),r.useEffect(()=>{e("Створення нового спортсмена")},[e]);const ye=c=>{if(c.key==="Enter"||c.key===" "){const H=document.getElementById("photo-upload");H&&H.click()}};return t.jsx(t.Fragment,{children:t.jsx(Nt,{children:t.jsxs(Y,{children:[t.jsxs(Ft,{children:[t.jsx(Wt,{children:t.jsxs(Ot,{children:[t.jsx(Pt,{children:t.jsx(At,{src:Te,alt:"Фото спортсмена"})}),t.jsx(Ht,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:ye,children:t.jsx(Yt,{})}),t.jsx(Kt,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp"})]})}),t.jsxs(Vt,{children:[t.jsx(ne,{children:"Особиста інформація"}),t.jsxs(X,{children:[t.jsxs(f,{children:[t.jsx(w,{htmlFor:"firstName",children:"Ім'я"}),t.jsx(y,{id:"firstName",type:"text",placeholder:"Введіть ім'я",value:i,onChange:c=>l(c.target.value)})]}),t.jsxs(f,{children:[t.jsx(w,{htmlFor:"lastName",children:"Прізвище"}),t.jsx(y,{id:"lastName",type:"text",placeholder:"Введіть прізвище",value:a,onChange:c=>g(c.target.value)})]}),t.jsxs(f,{children:[t.jsx(w,{htmlFor:"patronymic",children:"По батькові"}),t.jsx(y,{id:"patronymic",type:"text",placeholder:"Введіть по батькові",value:h,onChange:c=>s(c.target.value)})]})]})]})]}),t.jsxs(Z,{children:[t.jsx(J,{children:t.jsxs(P,{children:[t.jsx(D,{children:t.jsxs(f,{children:[t.jsx(w,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(O,{children:t.jsx(N,{selectedDate:m,onDateChange:u})})]})}),t.jsx(D,{children:t.jsxs(f,{children:[t.jsx(w,{htmlFor:"address",children:"Адреса"}),t.jsx(y,{id:"address",type:"text",value:j,onChange:c=>x(c.target.value),placeholder:"Введіть адресу"})]})}),t.jsx(D,{children:t.jsx(Qe,{label:"Виберіть стать",value:d,onChange:k})})]})}),t.jsxs(Q,{children:[t.jsx(Xt,{children:"Контакти"}),t.jsxs(P,{children:[t.jsx(D,{children:t.jsxs(f,{children:[t.jsx(w,{htmlFor:"phone",children:"Телефон"}),t.jsx(y,{id:"phone",type:"tel",value:C,onChange:c=>n(c.target.value),placeholder:"Введіть номер телефону"})]})}),t.jsx(D,{children:t.jsxs(f,{children:[t.jsx(w,{htmlFor:"email",children:"Email"}),t.jsx(y,{id:"email",type:"email",value:p,onChange:c=>v(c.target.value),placeholder:"Введіть email"})]})}),t.jsx(D,{children:t.jsxs(f,{children:[t.jsx(w,{htmlFor:"socialMedia",children:"Соцмережі"}),t.jsx(y,{id:"socialMedia",type:"text",value:b,onChange:c=>I(c.target.value),placeholder:"Введіть посилання на соцмережі"})]})})]})]})]}),t.jsx(z,{helpTooltiptitle:"Ці параметри не є обов'язковими, але вони допомагають отримати детальнішу статистику 📊",helpTooltip:"Додайте перший замір щоб відстежувати зміни спортсмена. Після створення профілю спортсмена ви зможете додавати нові заміри та повністю керувати ними 😊",title:"Фізичні дані",children:t.jsxs(X,{hasphysique:!0,children:[t.jsxs(f,{children:[t.jsx(w,{htmlFor:"height",children:"Зріст у м."}),t.jsx(y,{id:"height",type:"number",min:"0",max:"4",placeholder:"Введіть зріст у м.",step:"0.1",value:T,onChange:c=>S(c.target.value)})]}),t.jsxs(f,{children:[t.jsx(w,{htmlFor:"weight",children:"Вага у кг."}),t.jsx(y,{id:"weight",min:"0",max:"400",step:"0.1",placeholder:"Введіть вагу у кг.",type:"number",value:M,onChange:c=>E(c.target.value)})]}),t.jsxs(f,{children:[t.jsx(w,{htmlFor:"dateOfMeasurement",children:"Дата вимірювання"}),t.jsx(O,{children:t.jsx(N,{selectedDate:B,onDateChange:G})})]})]})}),t.jsx(z,{title:"Спортивна інформація",children:t.jsxs(Z,{$hasSportInfo:!0,children:[t.jsx(J,{$hasSportInfo:!0,children:t.jsxs(P,{children:[t.jsx(D,{children:t.jsxs(f,{children:[t.jsx(w,{htmlFor:"role",children:"Роль у команді"}),t.jsx(y,{id:"role",type:"text",value:ie,onChange:c=>ae(c.target.value),placeholder:"Введіть роль у команді"})]})}),t.jsx(D,{children:t.jsxs(f,{children:[t.jsx(w,{htmlFor:"sportCategory",children:"Спортивний розряд"}),t.jsx(y,{id:"sportCategory",type:"text",value:se,onChange:c=>le(c.target.value),placeholder:"Введіть спортивний розряд"})]})}),t.jsx(D,{children:t.jsxs(f,{children:[t.jsx(w,{htmlFor:"notes",children:"Примітки про спортсмена"}),t.jsx(Zt,{id:"notes",value:de,onChange:c=>ce(c.target.value),placeholder:"Додайте примітки про спортсмена"})]})})]})}),t.jsx(Q,{$hasSportInfo:!0,children:t.jsx(xt,{})})]})}),t.jsx(z,{title:"Навчальні заклади",children:t.jsx(Jt,{children:t.jsxs(D,{children:[t.jsxs(f,{children:[t.jsx(w,{htmlFor:"school",children:"Школа"}),t.jsx(y,{id:"school",type:"text",placeholder:"Введіть назву школи",value:he,onChange:c=>ue(c.target.value)})]}),t.jsxs(f,{$isUniversity:!0,children:[t.jsx(w,{htmlFor:"university",children:"Університет"}),t.jsx(y,{id:"university",type:"text",placeholder:"Введіть назву університету",value:pe,onChange:c=>xe(c.target.value)})]})]})})}),t.jsx(z,{title:"Спортивний заклад",children:t.jsx(Y,{$isSportsFacility:!0,children:t.jsxs(Qt,{children:[t.jsxs(ee,{$isSportsFacility:!0,children:[t.jsxs(f,{children:[t.jsx(w,{children:"Поточний спортивний заклад"}),t.jsx(y,{type:"text",value:ge,onChange:c=>me(c.target.value),placeholder:"Введіть назву закладу"})]}),t.jsxs(f,{children:[t.jsx(w,{children:"Тренер"}),t.jsx(y,{type:"text",value:be,onChange:c=>fe(c.target.value),placeholder:"Введіть ім'я тренера"})]})]}),t.jsxs(ee,{$isSportsFacility:!0,children:[t.jsxs(f,{children:[t.jsx(w,{children:"Контакти тренера"}),t.jsx(y,{type:"text",value:we,onChange:c=>$e(c.target.value),placeholder:"Введіть контакти"})]}),t.jsxs(f,{children:[t.jsx(w,{children:"Дата вступу"}),t.jsx(O,{children:t.jsx(N,{selectedDate:je,onDateChange:ke})})]})]})]})})}),t.jsx(z,{title:"Минулі спортивні заклади",children:t.jsx(_t,{onDataUpdate:Ce})}),t.jsx(z,{title:"TESR",children:t.jsx("p",{children:"asdf"})}),t.jsx(qt,{children:t.jsx(Ut,{type:"submit",children:"Створити"})})]})})})};export{no as default};
