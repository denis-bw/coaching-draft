import{r,d as o,j as t,l as V,b as De}from"./index-318ba080.js";import{g as q,a as Se,u as Be,b as Ee,D as Me,S as Te,C as F}from"./CustomDatePicker-f8fff6c0.js";import{p as Le}from"./PlaceholderProfile-3c1b0d36.js";import{P as ze}from"./PlaceholderTeam-4fc9ba85.js";const re=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6 9L12 15L18 9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Re=o.div`
  
  margin: 20px 0;
  border: 1.7px solid ${({theme:e})=>e.greenMain};
  border-radius: 8px;

  background-color: ${({theme:e})=>e.ContainerBGColor}; 
  transition: background-color 0.3s ease;
  ${({isOpen:e})=>!e&&`
    border-radius: 8px 8px 0 0;
  `}


`,We=o(re)`
  stroke: ${e=>e.theme.white};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
`,_e=o.button.attrs({type:"button"})`
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
`,Ne=o.div`
  padding: 0 20px;
  max-height: ${({isOpen:e})=>e?"1000px":"0"};
  opacity: ${({isOpen:e})=>e?"1":"0"};
  overflow-y: auto;
  overflow-x: hidden;
  transition: 
    max-height ${({isOpen:e})=>e?"0.8s":"0.4s"} ease-in-out,
    opacity ${({isOpen:e})=>e?"0.8s":"0.4s"} ease-in-out;
  @media (max-width: 768px) {
     padding: 0 10px;
  }
`,Fe=o.h3`
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
`,Oe=o.div`
  display: flex;
  align-items: center;
`,Pe=o.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,He=e=>r.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2}),r.createElement("path",{d:"M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M12 16H12.01",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ne=o(He)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({theme:e})=>e.white};
  transition: stroke 0.3s ease;
`,Ae=o.button.attrs({type:"button"})`
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

    ${ne} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,Ve=o.div`
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
`,Ke=o.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
`,qe=o.div`
  font-size: 14px; 
  font-weight: 600; 
  margin-bottom: 5px; 
`,Ue=({title:e,text:i})=>{const[l,a]=r.useState(!1),[m,x]=r.useState("top"),[s,g]=r.useState(null),u=r.useRef(null),k=r.useRef(null),h=()=>{if(!k.current||!u.current||!l)return;const d=k.current.getBoundingClientRect(),j=u.current.getBoundingClientRect(),C=window.innerWidth,n=j.height,p=j.width,v=d.top,b=d.bottom,I=d.left;d.right;const M=d.width;d.height;const S=I+M/2,E=v>n+15?"top":"bottom";x(E);let B,G;E==="top"?B=v-n-12:B=b+12,G=S-p*.8,G<10&&(G=10),G+p>C-10&&(G=C-p-10),g({top:B,left:G})};return r.useEffect(()=>{l&&setTimeout(h,0)},[l]),r.useEffect(()=>{if(l)return window.addEventListener("scroll",h),window.addEventListener("resize",h),()=>{window.removeEventListener("scroll",h),window.removeEventListener("resize",h)}},[l]),t.jsxs(Ae,{ref:k,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:()=>a(!l),children:[t.jsx(ne,{}),t.jsx(Ve,{ref:u,visible:l,placement:m,tooltipPosition:s,children:t.jsxs(Ke,{children:[e&&t.jsx(qe,{children:e}),i]})})]})},L=({children:e,helpTooltiptitle:i,helpTooltip:l,title:a,top:m,left:x})=>{const[s,g]=r.useState(!1),[u,k]=r.useState(!1),h=r.useRef(null),d=r.useRef(null),j=r.useRef(!1),C=()=>{g(n=>(u||k(!0),!n))};return r.useEffect(()=>{const n=new IntersectionObserver(([p])=>{!u&&p.isIntersecting&&!j.current&&p.intersectionRatio>=1&&(setTimeout(()=>{g(!0)},200),j.current=!0)},{threshold:1,rootMargin:"0px 0px -100px 0px"});return h.current&&n.observe(h.current),()=>{h.current&&n.unobserve(h.current)}},[u]),r.useEffect(()=>{d.current&&(s?d.current.removeAttribute("inert"):d.current.setAttribute("inert",""))},[s]),t.jsxs(Re,{ref:h,isOpen:s,children:[t.jsxs(_e,{onClick:C,role:"button",tabIndex:0,children:[a&&t.jsx(Fe,{children:a}),t.jsxs(Oe,{children:[l&&t.jsx(Pe,{onClick:n=>n.stopPropagation(),children:t.jsx(Ue,{title:i,text:l,top:m,left:x})}),t.jsx(We,{isOpen:s})]})]}),t.jsx(Ne,{ref:d,isOpen:s,children:e})]})},Ye=o.div`
  position: relative;
  width: 100%;
`,Xe=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,Ze=o.span`
  color: ${({theme:e})=>e.textGray};
  font-family: 'Inter Tight', sans-serif;
`,Je=o.button.attrs({type:"button"})`
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
`,Qe=o.div`
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
`,O=o.button.attrs({type:"button"})`
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
`,et=o(re)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) ${e=>e.open?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
  width: 22px;
  height: auto;
`,tt=({label:e,value:i,onChange:l})=>{const[a,m]=r.useState(!1),[x,s]=r.useState(i),g=r.useRef(null),u=()=>{m(!a)},k=d=>{s(d),l(d),m(!1)},h=d=>{g.current&&!g.current.contains(d.target)&&m(!1)};return r.useEffect(()=>(document.addEventListener("click",h),()=>{document.removeEventListener("click",h)}),[]),t.jsxs(Ye,{ref:g,children:[e&&t.jsx(Xe,{onClick:u,children:e}),t.jsxs(Je,{onClick:u,children:[t.jsx(Ze,{children:x||"Не вибрано"}),t.jsx(et,{open:a})]}),a&&t.jsxs(Qe,{children:[t.jsx(O,{className:x==="Чоловік"?"selected":"",onClick:()=>k("Чоловік"),children:"Чоловік"}),t.jsx(O,{className:x==="Жінка"?"selected":"",onClick:()=>k("Жінка"),children:"Жінка"}),t.jsx(O,{className:x===""?"selected":"",onClick:()=>k(""),children:"Не вибрано"})]})]})},ot=o.div`
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
`,rt=o.div`
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
`,nt=o.button`
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
`,it=o.div`
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
`,at=o.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,st=o.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,dt=o.div`
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
`,lt=o.div`
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
`,ct=o.div`
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  flex: 1; 
  overflow: hidden; 
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`,pt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,ht=o.div`
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
`,xt=o.img`
  border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,ut=()=>{const[e,i]=r.useState(null),l=r.useRef(null),a=r.useRef({}),m=[{id:1,name:"Динамо"},{id:2,name:"Шахтар"},{id:3,name:"Зоря"},{id:4,name:"Металіст"},{id:5,name:"Верес"},{id:6,name:"Олександрія"},{id:7,name:"Чорноморець"},{id:8,name:"Карпати"},{id:9,name:"Дніпро"},{id:10,name:"Десна"}],x=r.useCallback(s=>{e&&e.id===s.id?(console.log("Team deselected:",s),i(null),a.current[s.id]&&a.current[s.id].blur()):(console.log("Team selected:",s),i(s))},[e]);return r.useEffect(()=>{if(!l.current)return;const s={root:l.current,rootMargin:"0px",threshold:.1},g=h=>{h.forEach(d=>{d.target.classList&&(d.isIntersecting?(d.target.classList.add("visible"),d.target.classList.remove("hidden")):(d.target.classList.add("hidden"),d.target.classList.remove("visible")))})},u=new IntersectionObserver(g,s);return document.querySelectorAll('[id^="team-"]').forEach(h=>{u.observe(h),h.classList.add("hidden")}),()=>u.disconnect()},[]),t.jsx(ct,{children:t.jsxs(dt,{children:[t.jsx(ht,{children:t.jsx(pt,{children:t.jsx("h2",{children:"Команда спортсмена"})})}),t.jsx(lt,{ref:l,children:m.length>0?m.map(s=>t.jsx(ot,{className:"team-item",id:`team-${s.id}`,children:t.jsxs(nt,{ref:g=>a.current[s.id]=g,isSelected:e&&e.id===s.id,onClick:()=>x(s),type:"button",children:[t.jsx(it,{children:t.jsx(xt,{loading:"lazy",src:ze})}),t.jsx(at,{children:t.jsx(st,{children:s.name})})]})},s.id)):t.jsx(rt,{children:"Команд не знайдено"})})]})})},mt=o(Me)`
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
`,gt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 8px 4px;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 12px;
`,bt=o.select`
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


`,ft=o.select`
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

`,wt=o.div`
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
`,$t=(e,i,l=1)=>{let a=[];for(let m=e;m<=i;m+=l)a.push(m);return a},U=({value:e,onChange:i,placeholder:l="Оберіть дату",hasError:a=!1,minDate:m,maxDate:x})=>{const s=n=>{if(!n)return null;try{const p=new Date(n);return isNaN(p.getTime())?null:p}catch{return null}},[g,u]=r.useState(()=>s(e));r.useEffect(()=>{u(s(e))},[e]);const h=$t(1900,q(new Date)),d=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],j=n=>{u(n),i(n?n.toISOString().split("T")[0]:"")};let C=s(m);return C&&(C=Se(C,1)),t.jsx(wt,{children:t.jsx(mt,{selected:g,onChange:j,dateFormat:"dd.MM.yyyy",placeholderText:l,locale:Be,$error:a,minDate:C,maxDate:x?s(x):void 0,renderCustomHeader:({date:n,changeYear:p,changeMonth:v})=>t.jsxs(gt,{children:[t.jsx(bt,{value:q(n),onChange:b=>{p(parseInt(b.target.value))},children:h.map(b=>t.jsx("option",{value:b,children:b},b))}),t.jsx(ft,{value:d[Ee(n)],onChange:b=>{v(d.indexOf(b.target.value))},children:d.map((b,I)=>t.jsx("option",{value:b,children:b},I))})]})})})},kt=e=>r.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M10 12V17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M14 12V17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M4 7H20",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),jt=o(kt)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,vt=o.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,Ct=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Y=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`,N=o.div`
  display: flex;
  flex-direction: column;
`,z=o.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,P=o.input`
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
`,yt=o.span`
  color: ${({theme:e})=>e.red};
  font-size: 0.75rem;
  margin-left: 0.5rem;
    @media (max-width: 400px) {
      width: 72px;
    font-size: 0.65rem;  
    white-space: normal; 
    word-wrap: break-word; 
  }
`,Gt=o.button`
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

`,It=o.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,Dt=o.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,X=o(N)`
  flex: 1;
`,St=o.div`
margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray} ;
  border: 1px dashed ${({theme:e})=>e.textGray} ;
  border-radius: 8px;
`,Bt=o.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid  ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,Et=o.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom:4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,Mt=o.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  
  min-width:  max-content;
  
  ${e=>!e.$hasInstitutions&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,Tt=o.p`
 color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,Lt=o.div`
  flex: 0 0 auto;
  width: 230px;
  height: 200px;
  margin-right: 16px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.mainBGColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:last-child {
    margin-right: 0px;
  }
  
  @media (max-width: 768px) {
    min-width: 230px;
    max-width: 230px;
    width: 230px;
  }
`,zt=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,Rt=o.div`
  flex: 1;
  width: 210px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background:  ${({theme:e})=>e.disabledBG};
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.disabledBG};;
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.disabledBG};
  }
`,R=o.div`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.disabledBG};
  margin-right: 10px;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,W=o.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({theme:e})=>e.textGray};
  margin-bottom: 2px;
`,_=o.p`
  font-size: 13px;
  color: ${({theme:e})=>e.textBlack};
  word-wrap: break-word;
  word-break: break-word;
`,Wt=o.button`

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.mainBGColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 10px;
  transition: all 0.2s;
  z-index: 2;
  

`,_t=e=>r.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 ",stroke:"none",fillRule:"evenodd"})),ie=o(_t)`
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: ${({theme:e})=>e.red};
  transition: stroke 0.3s ease;
`,Nt=o.button.attrs({type:"button"})`
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

    ${ie} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,Ft=o.div`
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
`,Ot=o.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
  /* color: ${({theme:e})=>e.red}; */
`,Pt=o.div`
  font-size: 14px; 
  font-weight: 700; 
  margin-bottom: 5px; 
  color:  ${({theme:e})=>e.red};
`,Ht=({title:e,text:i})=>{const[l,a]=r.useState(!1),[m,x]=r.useState("top"),[s,g]=r.useState(null),u=r.useRef(null),k=r.useRef(null),h=()=>{if(!k.current||!u.current||!l)return;const d=k.current.getBoundingClientRect(),j=u.current.getBoundingClientRect(),C=window.innerWidth,n=j.height,p=j.width,v=d.top,b=d.bottom,I=d.left;d.right;const M=d.width;d.height;const S=I+M/2,E=v>n+15?"top":"bottom";x(E);let B,G;E==="top"?B=v-n-12:B=b+12,G=S-p*.8,G<10&&(G=10),G+p>C-10&&(G=C-p-10),g({top:B,left:G})};return r.useEffect(()=>{l&&setTimeout(h,0)},[l]),r.useEffect(()=>{if(l)return window.addEventListener("scroll",h),window.addEventListener("resize",h),()=>{window.removeEventListener("scroll",h),window.removeEventListener("resize",h)}},[l]),t.jsxs(Nt,{ref:k,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:()=>a(!l),children:[t.jsx(ie,{}),t.jsx(Ft,{ref:u,visible:l,placement:m,tooltipPosition:s,children:t.jsxs(Ot,{children:[e&&t.jsx(Pt,{children:e}),i]})})]})},At=({onDataUpdate:e})=>{const[i,l]=r.useState([]),[a,m]=r.useState({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),[x,s]=r.useState({}),g=100;r.useEffect(()=>{const n=i.map(p=>({previousCoach:p.coachName,previousInstitution:p.institution||"",coachContacts:p.coachContacts||"",entryDate:p.entryDate||"",exitDate:p.exitDate||""}));e(n)},[i,e]);const u=n=>{n.key==="Enter"&&n.preventDefault()},k=()=>{const n={};if(a.coachName.trim()||(n.coachName="Ім'я тренера є обов'язковим"),a.entryDate&&a.exitDate){const p=new Date(a.entryDate),b=new Date(a.exitDate).getTime()-p.getTime();Math.ceil(b/(1e3*3600*24))<=0&&(n.exitDate="Дата виходу має бути пізніше дати вступу")}return s(n),Object.keys(n).length===0},h=()=>{if(k()){const n={...a,id:Date.now()};l(p=>[...p,n]),m({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),s({})}},d=n=>{l(p=>p.filter(v=>v.id!==n))},j=(n,p)=>{if(m(v=>({...v,[n]:p})),x[n]&&s(v=>{const b={...v};return delete b[n],b}),n==="entryDate"&&a.exitDate){const v=new Date(p),I=new Date(a.exitDate).getTime()-v.getTime();Math.ceil(I/(1e3*3600*24))<=0?s(S=>({...S,exitDate:"Дата виходу з закладу має бути пізніше дати вступу"})):x.exitDate&&s(S=>{const T={...S};return delete T.exitDate,T})}},C=n=>{if(!n)return"";try{const p=new Date(n);return isNaN(p.getTime())?n:p.toLocaleDateString("uk-UA")}catch{return n}};return t.jsxs(vt,{children:[i.length===0?t.jsx(St,{children:"Додайте інформацію"}):t.jsx(Bt,{children:t.jsx(Et,{children:t.jsx(Mt,{$hasInstitutions:i.length>0,children:i.map(n=>t.jsxs(Lt,{children:[t.jsxs(zt,{children:[t.jsx(Tt,{children:"Вказана інформація"}),t.jsx(Wt,{onClick:()=>d(n.id),"aria-label":"Видалити заклад",children:t.jsx(jt,{})})]}),t.jsxs(Rt,{children:[t.jsx(R,{children:t.jsxs(_,{children:[t.jsx(W,{children:"Тренер: "})," ",n.coachName]})}),t.jsx(R,{children:t.jsxs(_,{children:[t.jsx(W,{children:"Заклад: "}),n.institution.trim()?n.institution:"Не вказано"]})}),t.jsx(R,{children:t.jsxs(_,{children:[t.jsx(W,{children:"Контакти: "})," ",n.coachContacts.trim()?n.coachContacts:"Не вказано"]})}),t.jsxs(R,{children:[t.jsx(W,{children:"Період:"}),t.jsxs(_,{children:[C(n.entryDate)||"Не вказано"," ",t.jsx("span",{children:" - "}),C(n.exitDate)||"Не вказано"]})]})]})]},n.id))})})}),t.jsxs(Ct,{children:[t.jsxs(Y,{children:[t.jsxs(N,{children:[t.jsxs(z,{children:["Минулий Тренер *",x.coachName&&t.jsx(yt,{children:x.coachName})]}),t.jsx(P,{type:"text",onKeyDown:u,value:a.coachName,onChange:n=>j("coachName",n.target.value),placeholder:"Введіть ім'я тренера",maxLength:g,$error:x.coachName})]}),t.jsxs(N,{children:[t.jsx(z,{children:"Минулий спортивний заклад"}),t.jsx(P,{type:"text",onKeyDown:u,value:a.institution,onChange:n=>j("institution",n.target.value),placeholder:"Введіть назву закладу",maxLength:g})]})]}),t.jsxs(Y,{children:[t.jsxs(N,{children:[t.jsx(z,{children:"Контакти тренера"}),t.jsx(P,{type:"text",onKeyDown:u,value:a.coachContacts,onChange:n=>j("coachContacts",n.target.value),placeholder:"Введіть контакти тренера",maxLength:g})]}),t.jsxs(Dt,{children:[t.jsxs(X,{children:[t.jsx(z,{children:"Дата вступу"}),t.jsx(U,{value:a.entryDate,onChange:n=>j("entryDate",n),placeholder:"Оберіть дату вступу"})]}),t.jsxs(X,{children:[t.jsxs(z,{children:["Дата виходу",x.exitDate&&t.jsx(Ht,{title:"Неправильно введені дані",text:x.exitDate})]}),t.jsx(U,{value:a.exitDate,onChange:n=>j("exitDate",n),placeholder:"Оберіть дату вихлду",minDate:a.entryDate,hasError:!!x.exitDate})]})]})]})]}),t.jsx(It,{children:t.jsx(Gt,{type:"button",onClick:h,children:"Додати"})})]})},$={mobile:"320px",tablet:"768px",desktop:"1024px"},Vt=o.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  @media (min-width: ${$.tablet}) {
    align-items: flex-start;
    height: 100%;
  }
`,Z=o.form`
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

  ${({$isSportsFacility:e})=>e&&V`
      @media (min-width: ${$.tablet}) {
       padding: 14px 0;
      }
  
      @media (min-width: ${$.desktop}) {
        padding: 14px 0;
      }
  `}
`,Kt=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${$.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`,qt=o.div`
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
`,Ut=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${$.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,Yt=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,Xt=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Zt=o.label`
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
`,Jt=o.input`
  display: none;
`,Qt=o.div`
  flex: 1;
  
  @media (min-width: ${$.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center; 
  }
`,ae=o.h2`
  color: ${({theme:e})=>e.greenMain};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`,J=o.div`
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

${({$isUniversity:e})=>e&&V`
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
`,eo=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,to=o.button`
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
`,oo=o(Te)`
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
`,H=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Q=o.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
   margin-top: ${e=>e.$hasSportInfo?"20px":"0"};
  @media (min-width: ${$.desktop}) {
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }
`,ee=o.div`
  flex: 1;
  
  @media (min-width: ${$.desktop}) {
     margin-top: ${e=>e.$hasSportInfo?"0":"3.1rem"}
  }

  
`,te=o.div`
  flex: 1;
  @media (max-width: ${$.desktop}) {
    margin-top: ${e=>e.$hasSportInfo?"20px":"0"}
  }
`,A=o.div`
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
`,ro=o(ae)`
  margin-bottom: 1rem;
  padding-top: 10px;

  @media (min-width: ${$.desktop}) {
    padding-top: 0;
  }
`,no=o.textarea`
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
`,io=o.div`
  margin: 20px 0;
`,ao=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${$.desktop}) {
    flex-direction: row;
    gap: 40px;
  }

`,oe=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  ${({$isSportsFacility:e})=>e&&V`
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
`;const ho=()=>{const{setTitle:e}=De();r.useState(!1);const[i,l]=r.useState(""),[a,m]=r.useState(""),[x,s]=r.useState(""),[g,u]=r.useState(""),[k,h]=r.useState(""),[d,j]=r.useState(""),[C,n]=r.useState(""),[p,v]=r.useState(""),[b,I]=r.useState(""),[M,S]=r.useState(""),[T,E]=r.useState(""),[B,G]=r.useState(""),[se,de]=r.useState(""),[le,ce]=r.useState(""),[pe,he]=r.useState("");r.useState(null);const[xe,ue]=r.useState(""),[me,ge]=r.useState(""),[be,fe]=r.useState(""),[we,$e]=r.useState(""),[ke,je]=r.useState(""),[ve,Ce]=r.useState(null),[ye,Ge]=r.useState({});console.log(ye),r.useEffect(()=>{e("Створення нового спортсмена")},[e]);const Ie=c=>{if(c.key==="Enter"||c.key===" "){const K=document.getElementById("photo-upload");K&&K.click()}};return t.jsx(t.Fragment,{children:t.jsx(Vt,{children:t.jsxs(Z,{children:[t.jsxs(Kt,{children:[t.jsx(qt,{children:t.jsxs(Ut,{children:[t.jsx(Yt,{children:t.jsx(Xt,{src:Le,alt:"Фото спортсмена"})}),t.jsx(Zt,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:Ie,children:t.jsx(oo,{})}),t.jsx(Jt,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp"})]})}),t.jsxs(Qt,{children:[t.jsx(ae,{children:"Особиста інформація"}),t.jsxs(J,{children:[t.jsxs(f,{children:[t.jsx(w,{htmlFor:"firstName",children:"Ім'я"}),t.jsx(y,{id:"firstName",type:"text",placeholder:"Введіть ім'я",value:i,onChange:c=>l(c.target.value)})]}),t.jsxs(f,{children:[t.jsx(w,{htmlFor:"lastName",children:"Прізвище"}),t.jsx(y,{id:"lastName",type:"text",placeholder:"Введіть прізвище",value:a,onChange:c=>m(c.target.value)})]}),t.jsxs(f,{children:[t.jsx(w,{htmlFor:"patronymic",children:"По батькові"}),t.jsx(y,{id:"patronymic",type:"text",placeholder:"Введіть по батькові",value:x,onChange:c=>s(c.target.value)})]})]})]})]}),t.jsxs(Q,{children:[t.jsx(ee,{children:t.jsxs(A,{children:[t.jsx(D,{children:t.jsxs(f,{children:[t.jsx(w,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(H,{children:t.jsx(F,{selectedDate:g,onDateChange:u})})]})}),t.jsx(D,{children:t.jsxs(f,{children:[t.jsx(w,{htmlFor:"address",children:"Адреса"}),t.jsx(y,{id:"address",type:"text",value:k,onChange:c=>h(c.target.value),placeholder:"Введіть адресу"})]})}),t.jsx(D,{children:t.jsx(tt,{label:"Виберіть стать",value:d,onChange:j})})]})}),t.jsxs(te,{children:[t.jsx(ro,{children:"Контакти"}),t.jsxs(A,{children:[t.jsx(D,{children:t.jsxs(f,{children:[t.jsx(w,{htmlFor:"phone",children:"Телефон"}),t.jsx(y,{id:"phone",type:"tel",value:C,onChange:c=>n(c.target.value),placeholder:"Введіть номер телефону"})]})}),t.jsx(D,{children:t.jsxs(f,{children:[t.jsx(w,{htmlFor:"email",children:"Email"}),t.jsx(y,{id:"email",type:"email",value:p,onChange:c=>v(c.target.value),placeholder:"Введіть email"})]})}),t.jsx(D,{children:t.jsxs(f,{children:[t.jsx(w,{htmlFor:"socialMedia",children:"Соцмережі"}),t.jsx(y,{id:"socialMedia",type:"text",value:b,onChange:c=>I(c.target.value),placeholder:"Введіть посилання на соцмережі"})]})})]})]})]}),t.jsx(L,{helpTooltiptitle:"Ці параметри не є обов'язковими, але вони допомагають отримати детальнішу статистику 📊",helpTooltip:"Додайте перший замір щоб відстежувати зміни спортсмена. Після створення профілю спортсмена ви зможете додавати нові заміри та повністю керувати ними 😊",title:"Фізичні дані",children:t.jsxs(J,{hasphysique:!0,children:[t.jsxs(f,{children:[t.jsx(w,{htmlFor:"height",children:"Зріст у м."}),t.jsx(y,{id:"height",type:"number",min:"0",max:"4",placeholder:"Введіть зріст у м.",step:"0.1",value:M,onChange:c=>S(c.target.value)})]}),t.jsxs(f,{children:[t.jsx(w,{htmlFor:"weight",children:"Вага у кг."}),t.jsx(y,{id:"weight",min:"0",max:"400",step:"0.1",placeholder:"Введіть вагу у кг.",type:"number",value:T,onChange:c=>E(c.target.value)})]}),t.jsxs(f,{children:[t.jsx(w,{htmlFor:"dateOfMeasurement",children:"Дата вимірювання"}),t.jsx(H,{children:t.jsx(F,{selectedDate:B,onDateChange:G})})]})]})}),t.jsx(L,{title:"Спортивна інформація",children:t.jsxs(Q,{$hasSportInfo:!0,children:[t.jsx(ee,{$hasSportInfo:!0,children:t.jsxs(A,{children:[t.jsx(D,{children:t.jsxs(f,{children:[t.jsx(w,{htmlFor:"role",children:"Роль у команді"}),t.jsx(y,{id:"role",type:"text",value:se,onChange:c=>de(c.target.value),placeholder:"Введіть роль у команді"})]})}),t.jsx(D,{children:t.jsxs(f,{children:[t.jsx(w,{htmlFor:"sportCategory",children:"Спортивний розряд"}),t.jsx(y,{id:"sportCategory",type:"text",value:le,onChange:c=>ce(c.target.value),placeholder:"Введіть спортивний розряд"})]})}),t.jsx(D,{children:t.jsxs(f,{children:[t.jsx(w,{htmlFor:"notes",children:"Примітки про спортсмена"}),t.jsx(no,{id:"notes",value:pe,onChange:c=>he(c.target.value),placeholder:"Додайте примітки про спортсмена"})]})})]})}),t.jsx(te,{$hasSportInfo:!0,children:t.jsx(ut,{})})]})}),t.jsx(L,{title:"Навчальні заклади",children:t.jsx(io,{children:t.jsxs(D,{children:[t.jsxs(f,{children:[t.jsx(w,{htmlFor:"school",children:"Школа"}),t.jsx(y,{id:"school",type:"text",placeholder:"Введіть назву школи",value:me,onChange:c=>ge(c.target.value)})]}),t.jsxs(f,{$isUniversity:!0,children:[t.jsx(w,{htmlFor:"university",children:"Університет"}),t.jsx(y,{id:"university",type:"text",placeholder:"Введіть назву університету",value:xe,onChange:c=>ue(c.target.value)})]})]})})}),t.jsx(L,{title:"Спортивний заклад",children:t.jsx(Z,{$isSportsFacility:!0,children:t.jsxs(ao,{children:[t.jsxs(oe,{$isSportsFacility:!0,children:[t.jsxs(f,{children:[t.jsx(w,{children:"Поточний спортивний заклад"}),t.jsx(y,{type:"text",value:be,onChange:c=>fe(c.target.value),placeholder:"Введіть назву закладу"})]}),t.jsxs(f,{children:[t.jsx(w,{children:"Тренер"}),t.jsx(y,{type:"text",value:we,onChange:c=>$e(c.target.value),placeholder:"Введіть ім'я тренера"})]})]}),t.jsxs(oe,{$isSportsFacility:!0,children:[t.jsxs(f,{children:[t.jsx(w,{children:"Контакти тренера"}),t.jsx(y,{type:"text",value:ke,onChange:c=>je(c.target.value),placeholder:"Введіть контакти"})]}),t.jsxs(f,{children:[t.jsx(w,{children:"Дата вступу"}),t.jsx(H,{children:t.jsx(F,{selectedDate:ve,onDateChange:Ce})})]})]})]})})}),t.jsx(L,{title:"Минулі спортивні заклади",children:t.jsx(At,{onDataUpdate:Ge})}),t.jsx(L,{title:"TESR",children:t.jsx("p",{children:"asdf"})}),t.jsx(eo,{children:t.jsx(to,{type:"submit",children:"Створити"})})]})})})};export{ho as default};
