import{r as o,d as r,j as t,l as ue,e as pt,b as ht,y as V,i as xt}from"./index-a9c2b682.js";import{g as ve,a as ut,u as mt,b as gt,D as bt,S as ft,C as re}from"./CustomDatePicker-efd9f74d.js";import{p as wt}from"./PlaceholderProfile-3c1b0d36.js";import{P as $t}from"./PlaceholderTeam-4fc9ba85.js";const ze=e=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M6 9L12 15L18 9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),kt=r.div`
  
  margin: 20px 0;
  border: 1.7px solid ${({theme:e})=>e.greenMain};
  border-radius: 8px;

  background-color: ${({theme:e})=>e.ContainerBGColor}; 
  transition: background-color 0.3s ease;
  ${({isOpen:e})=>!e&&`
    border-radius: 8px 8px 0 0;
  `}


`,vt=r(ze)`
  stroke: ${e=>e.theme.white};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
`,jt=r.button.attrs({type:"button"})`
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
`,yt=r.div`
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
`,Ct=r.h3`
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
`,It=r.div`
  display: flex;
  align-items: center;
`,Gt=r.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,St=e=>o.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2}),o.createElement("path",{d:"M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M12 16H12.01",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Re=r(St)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({theme:e})=>e.white};
  transition: stroke 0.3s ease;
`,Dt=r.button.attrs({type:"button"})`
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

    ${Re} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,Bt=r.div`
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
`,Mt=r.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
`,Et=r.div`
  font-size: 14px; 
  font-weight: 600; 
  margin-bottom: 5px; 
`,Lt=({title:e,text:i})=>{const[m,a]=o.useState(!1),[w,x]=o.useState("top"),[h,g]=o.useState(null),f=o.useRef(null),k=o.useRef(null),b=()=>{if(!k.current||!f.current||!m)return;const s=k.current.getBoundingClientRect(),p=f.current.getBoundingClientRect(),n=window.innerWidth,d=p.height,u=p.width,y=s.top,C=s.bottom,c=s.left;s.right;const $=s.width;s.height;const D=c+$/2,R=y>d+15?"top":"bottom";x(R);let z,B;R==="top"?z=y-d-12:z=C+12,B=D-u*.8,B<10&&(B=10),B+u>n-10&&(B=n-u-10),g({top:z,left:B})};return o.useEffect(()=>{m&&setTimeout(b,0)},[m]),o.useEffect(()=>{if(m)return window.addEventListener("scroll",b),window.addEventListener("resize",b),()=>{window.removeEventListener("scroll",b),window.removeEventListener("resize",b)}},[m]),t.jsxs(Dt,{ref:k,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:()=>a(!m),children:[t.jsx(Re,{}),t.jsx(Bt,{ref:f,visible:m,placement:w,tooltipPosition:h,children:t.jsxs(Mt,{children:[e&&t.jsx(Et,{children:e}),i]})})]})},F=o.forwardRef(({children:e,helpTooltiptitle:i,helpTooltip:m,title:a,top:w,left:x},h)=>{const[g,f]=o.useState(!1),[k,b]=o.useState(!1),s=o.useRef(null),p=o.useRef(null),n=o.useRef(!1);o.useImperativeHandle(h,()=>({open:()=>{f(!0),b(!0)},close:()=>{f(!1)},scrollIntoView:u=>{s.current&&s.current.scrollIntoView(u)},isOpen:()=>g}));const d=()=>{f(u=>!u),b(!0)};return o.useEffect(()=>{const u=new IntersectionObserver(([y])=>{!k&&y.isIntersecting&&!n.current&&y.intersectionRatio>=1&&(setTimeout(()=>{f(!0)},200),n.current=!0)},{threshold:1,rootMargin:"0px 0px -100px 0px"});return s.current&&u.observe(s.current),()=>{s.current&&u.unobserve(s.current)}},[k]),o.useEffect(()=>{p.current&&(g?p.current.removeAttribute("inert"):p.current.setAttribute("inert",""))},[g]),t.jsxs(kt,{ref:s,isOpen:g,children:[t.jsxs(jt,{onClick:d,role:"button",tabIndex:0,children:[a&&t.jsx(Ct,{children:a}),t.jsxs(It,{children:[m&&t.jsx(Gt,{onClick:u=>u.stopPropagation(),children:t.jsx(Lt,{title:i,text:m,top:w,left:x})}),t.jsx(vt,{isOpen:g})]})]}),t.jsx(yt,{ref:p,isOpen:g,role:"region",children:e})]})}),zt=r.div`
  position: relative;
  width: 100%;
`,Rt=r.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,Tt=r.span`
  color: ${({selectedValue:e,theme:i})=>e===""?i.textBlack:e==="Чоловік"||e==="Жінка"?i.greenMain:i.textGray}; 
  font-family: 'Inter Tight', sans-serif;
`,Nt=r.button.attrs({type:"button"})`
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
`,Ft=r.div`
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
`,oe=r.button.attrs({type:"button"})`
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  color: ${({theme:e})=>e.textBlack};
  transition: background-color 0.3s ease;
  font-size: 1rem;

  &:hover, &:focus {
    background-color: ${({theme:e})=>e.lightGreen};
    outline: none;
  }

  &.selected {
    background-color: ${({theme:e})=>e.darkGreen};
    color: ${({theme:e})=>e.white};
  }
`,Pt=r(ze)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) ${e=>e.open?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
  width: 22px;
  height: auto;
`,Ot=({label:e,value:i,onChange:m})=>{const[a,w]=o.useState(!1),[x,h]=o.useState(i||""),g=o.useRef(null),f=()=>{w(!a)},k=s=>{h(s),m(s),w(!1)},b=s=>{g.current&&!g.current.contains(s.target)&&w(!1)};return o.useEffect(()=>(document.addEventListener("click",b),()=>{document.removeEventListener("click",b)}),[]),t.jsxs(zt,{ref:g,children:[e&&t.jsx(Rt,{onClick:f,children:e}),t.jsxs(Nt,{onClick:f,children:[t.jsx(Tt,{selectedValue:x,children:x||"Не вибрано"}),t.jsx(Pt,{open:a})]}),a&&t.jsxs(Ft,{children:[t.jsx(oe,{className:x==="Чоловік"?"selected":"",onClick:()=>k("Чоловік"),children:"Чоловік"}),t.jsx(oe,{className:x==="Жінка"?"selected":"",onClick:()=>k("Жінка"),children:"Жінка"}),t.jsx(oe,{className:x===""?"selected":"",onClick:()=>k(""),children:"Не вибрано"})]})]})},Wt=r.div`
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
`,_t=r.div`
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
`,Ht=r.button`
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
    background-color: ${({theme:e,isSelected:i})=>i?e.greenMain:`${e.lightGreen}`};
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
`,Vt=r.div`
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
`,At=r.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,Ut=r.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Yt=r.div`
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
`,qt=r.div`
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
`,Jt=r.div`
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  flex: 1; 
  overflow: hidden; 
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`,Kt=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,Xt=r.div`
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
`,Zt=r.img`
  border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,Qt=()=>{const[e,i]=o.useState(null),m=o.useRef(null),a=o.useRef({}),w=[{id:1,name:"Динамо"},{id:2,name:"Шахтар"},{id:3,name:"Зоря"},{id:4,name:"Металіст"},{id:5,name:"Верес"},{id:6,name:"Олександрія"},{id:7,name:"Чорноморець"},{id:8,name:"Карпати"},{id:9,name:"Дніпро"},{id:10,name:"Десна"}],x=o.useCallback(h=>{e&&e.id===h.id?(console.log("Team deselected:",h),i(null),a.current[h.id]&&a.current[h.id].blur()):(console.log("Team selected:",h),i(h))},[e]);return o.useEffect(()=>{if(!m.current)return;const h={root:m.current,rootMargin:"0px",threshold:.1},g=b=>{b.forEach(s=>{s.target.classList&&(s.isIntersecting?(s.target.classList.add("visible"),s.target.classList.remove("hidden")):(s.target.classList.add("hidden"),s.target.classList.remove("visible")))})},f=new IntersectionObserver(g,h);return document.querySelectorAll('[id^="team-"]').forEach(b=>{f.observe(b),b.classList.add("hidden")}),()=>f.disconnect()},[]),t.jsx(Jt,{children:t.jsxs(Yt,{children:[t.jsx(Xt,{children:t.jsx(Kt,{children:t.jsx("h2",{children:"Команда спортсмена"})})}),t.jsx(qt,{ref:m,children:w.length>0?w.map(h=>t.jsx(Wt,{className:"team-item",id:`team-${h.id}`,children:t.jsxs(Ht,{ref:g=>a.current[h.id]=g,isSelected:e&&e.id===h.id,onClick:()=>x(h),type:"button",children:[t.jsx(Vt,{children:t.jsx(Zt,{loading:"lazy",src:$t})}),t.jsx(At,{children:t.jsx(Ut,{children:h.name})})]})},h.id)):t.jsx(_t,{children:"Команд не знайдено"})})]})})},er=r(bt)`
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
`,tr=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 8px 4px;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 12px;
`,rr=r.select`
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


`,or=r.select`
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

`,nr=r.div`
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
`,ir=(e,i,m=1)=>{let a=[];for(let w=e;w<=i;w+=m)a.push(w);return a},xe=({value:e,onChange:i,placeholder:m="Оберіть дату",hasError:a=!1,minDate:w,maxDate:x})=>{const h=d=>{if(!d)return null;try{const u=new Date(d);return isNaN(u.getTime())?null:u}catch{return null}},[g,f]=o.useState(()=>h(e));o.useEffect(()=>{f(h(e))},[e]);const b=ir(1900,ve(new Date)),s=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],p=d=>{if(f(d),d){const u=d.getFullYear(),y=String(d.getMonth()+1).padStart(2,"0"),C=String(d.getDate()).padStart(2,"0");i(`${u}-${y}-${C}`)}else i("")};let n=h(w);return n&&(n=ut(n,0)),t.jsx(nr,{children:t.jsx(er,{selected:g,onChange:p,dateFormat:"dd.MM.yyyy",placeholderText:m,locale:mt,$error:a,minDate:n,maxDate:x?h(x):void 0,renderCustomHeader:({date:d,changeYear:u,changeMonth:y})=>t.jsxs(tr,{children:[t.jsx(rr,{value:ve(d),onChange:C=>{u(parseInt(C.target.value))},children:b.map(C=>t.jsx("option",{value:C,children:C},C))}),t.jsx(or,{value:s[gt(d)],onChange:C=>{y(s.indexOf(C.target.value))},children:s.map((C,c)=>t.jsx("option",{value:C,children:C},c))})]})})})},me=e=>o.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M10 12V17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M14 12V17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M4 7H20",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ar=r(me)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,sr=r.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,lr=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,je=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`,X=r.div`
  display: flex;
  flex-direction: column;
`,W=r.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,ne=r.input`
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
`,dr=r.span`
  color: ${({theme:e})=>e.red};
  font-size: 0.75rem;
  margin-left: 0.5rem;
  text-align: right;
    @media (max-width: 400px) {
    width: 92px;
    font-size: 0.65rem;  
    white-space: normal; 
    word-wrap: break-word; 
  }
`,cr=r.button`
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

`,pr=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,hr=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,ye=r(X)`
  flex: 1;
`,xr=r.div`
margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray} ;
  border: 1px dashed ${({theme:e})=>e.textGray} ;
  border-radius: 8px;
`,ur=r.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid  ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,mr=r.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom:4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,gr=r.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  
  min-width:  max-content;
  
  ${e=>!e.$hasInstitutions&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,br=r.p`
 color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,fr=r.div`
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
`,wr=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,$r=r.div`
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
`,A=r.div`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.disabledBG};
  margin-right: 10px;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,U=r.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({theme:e})=>e.textGray};
  margin-bottom: 2px;
`,Y=r.p`
  font-size: 13px;
  color: ${({theme:e})=>e.textBlack};
  word-wrap: break-word;
  word-break: break-word;
`,kr=r.button`

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

  &:focus {
    outline: none;
  }

  &:focus-within svg {
    stroke: ${e=>e.theme.redDark};
  }

`,vr=e=>o.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 ",stroke:"none",fillRule:"evenodd"})),Te=r(vr)`
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: ${({theme:e})=>e.red};
  transition: stroke 0.3s ease;
`,jr=r.button.attrs({type:"button"})`
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

    ${Te} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,yr=r.div`
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
`,Cr=r.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
  /* color: ${({theme:e})=>e.red}; */
`,Ir=r.div`
  font-size: 14px; 
  font-weight: 700; 
  margin-bottom: 5px; 
  color:  ${({theme:e})=>e.red};
`,Gr=({title:e,text:i})=>{const[m,a]=o.useState(!1),[w,x]=o.useState("top"),[h,g]=o.useState(null),f=o.useRef(null),k=o.useRef(null),b=()=>{if(!k.current||!f.current||!m)return;const s=k.current.getBoundingClientRect(),p=f.current.getBoundingClientRect(),n=window.innerWidth,d=p.height,u=p.width,y=s.top,C=s.bottom,c=s.left;s.right;const $=s.width;s.height;const D=c+$/2,R=y>d+15?"top":"bottom";x(R);let z,B;R==="top"?z=y-d-12:z=C+12,B=D-u*.8,B<10&&(B=10),B+u>n-10&&(B=n-u-10),g({top:z,left:B})};return o.useEffect(()=>{m&&setTimeout(b,0)},[m]),o.useEffect(()=>{if(m)return window.addEventListener("scroll",b),window.addEventListener("resize",b),()=>{window.removeEventListener("scroll",b),window.removeEventListener("resize",b)}},[m]),t.jsxs(jr,{ref:k,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:()=>a(!m),children:[t.jsx(Te,{}),t.jsx(yr,{ref:f,visible:m,placement:w,tooltipPosition:h,children:t.jsxs(Cr,{children:[e&&t.jsx(Ir,{children:e}),i]})})]})},Sr=({onDataUpdate:e})=>{const[i,m]=o.useState([]),[a,w]=o.useState({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),[x,h]=o.useState({}),g=100;o.useEffect(()=>{const n=i.map(d=>({previousCoach:d.coachName,previousInstitution:d.institution||"",coachContacts:d.coachContacts||"",entryDate:d.entryDate||"",exitDate:d.exitDate||""}));e(n)},[i,e]);const f=()=>{const n={};if(a.coachName.trim()||(n.coachName="Ім'я тренера є обов'язковим"),a.entryDate&&a.exitDate){const d=new Date(a.entryDate),y=new Date(a.exitDate).getTime()-d.getTime();Math.ceil(y/(1e3*3600*24))<0&&(n.exitDate="Дата виходу має бути не раніше дати вступу")}return h(n),Object.keys(n).length===0},k=()=>{if(f()){const n={...a,coachName:a.coachName.trim(),institution:a.institution.trim(),coachContacts:a.coachContacts.trim(),id:Date.now()};m(d=>[...d,n]),w({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),h({})}},b=n=>{m(d=>d.filter(u=>u.id!==n))},s=(n,d)=>{if(w(u=>({...u,[n]:d})),x[n]&&h(u=>{const y={...u};return delete y[n],y}),n==="entryDate"&&a.exitDate){const u=new Date(d),C=new Date(a.exitDate).getTime()-u.getTime();Math.ceil(C/(1e3*3600*24))<0?h($=>({...$,exitDate:"Дата виходу з закладу має бути не раніше дати вступу"})):x.exitDate&&h($=>{const D={...$};return delete D.exitDate,D})}},p=n=>{if(!n)return"";try{const d=new Date(n);return isNaN(d.getTime())?n:d.toLocaleDateString("uk-UA")}catch{return n}};return t.jsxs(sr,{children:[i.length===0?t.jsx(xr,{children:"Додайте інформацію"}):t.jsx(ur,{children:t.jsx(mr,{children:t.jsx(gr,{$hasInstitutions:i.length>0,children:i.map(n=>t.jsxs(fr,{children:[t.jsxs(wr,{children:[t.jsx(br,{children:"Вказана інформація"}),t.jsx(kr,{onClick:()=>b(n.id),"aria-label":"Видалити заклад",children:t.jsx(ar,{})})]}),t.jsxs($r,{children:[t.jsx(A,{children:t.jsxs(Y,{children:[t.jsx(U,{children:"Тренер: "})," ",n.coachName]})}),t.jsx(A,{children:t.jsxs(Y,{children:[t.jsx(U,{children:"Заклад: "}),n.institution.trim()?n.institution:"Не вказано"]})}),t.jsx(A,{children:t.jsxs(Y,{children:[t.jsx(U,{children:"Контакти: "})," ",n.coachContacts.trim()?n.coachContacts:"Не вказано"]})}),t.jsxs(A,{children:[t.jsx(U,{children:"Період:"}),t.jsxs(Y,{children:[p(n.entryDate)||"Не вказано"," ",t.jsx("span",{children:" - "}),p(n.exitDate)||"Не вказано"]})]})]})]},n.id))})})}),t.jsxs(lr,{children:[t.jsxs(je,{children:[t.jsxs(X,{children:[t.jsxs(W,{children:["Минулий Тренер *",x.coachName&&t.jsx(dr,{children:x.coachName})]}),t.jsx(ne,{type:"text",value:a.coachName,onChange:n=>s("coachName",n.target.value),placeholder:"Введіть ім'я тренера",maxLength:g,$error:x.coachName})]}),t.jsxs(X,{children:[t.jsx(W,{children:"Минулий спортивний заклад"}),t.jsx(ne,{type:"text",value:a.institution,onChange:n=>s("institution",n.target.value),placeholder:"Введіть назву закладу",maxLength:g})]})]}),t.jsxs(je,{children:[t.jsxs(X,{children:[t.jsx(W,{children:"Контакти тренера"}),t.jsx(ne,{type:"text",value:a.coachContacts,onChange:n=>s("coachContacts",n.target.value),placeholder:"Введіть контакти тренера",maxLength:g})]}),t.jsxs(hr,{children:[t.jsxs(ye,{children:[t.jsx(W,{children:"Дата вступу"}),t.jsx(xe,{value:a.entryDate,onChange:n=>s("entryDate",n),placeholder:"Оберіть дату вступу"})]}),t.jsxs(ye,{children:[t.jsxs(W,{children:["Дата виходу",x.exitDate&&t.jsx(Gr,{title:"Неправильно введені дані",text:x.exitDate})]}),t.jsx(xe,{value:a.exitDate,onChange:n=>s("exitDate",n),placeholder:"Оберіть дату виходу",minDate:a.entryDate,hasError:!!x.exitDate})]})]})]})]}),t.jsx(pr,{children:t.jsx(cr,{type:"button",onClick:k,children:"Додати"})})]})},Dr=r(me)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,Br=r.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,Mr=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Ce=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`,Z=r.div`
  display: flex;
  flex-direction: column;
`,O=r.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,_=r.input`
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
`,Ie=r.span`
  color: ${({theme:e})=>e.red};
  font-size: 0.75rem;
  margin-left: 0.5rem;
  text-align: right;
    @media (max-width: 400px) {
    width: 102px;
    font-size: 0.65rem;  
    white-space: normal; 
    word-wrap: break-word; 
  }
`,Er=r.button`
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
`,Lr=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,zr=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,Rr=r(Z)`
  flex: 1;
`,Tr=r.div`
  margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray};
  border: 1px dashed ${({theme:e})=>e.textGray};
  border-radius: 8px;
`,Nr=r.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,Fr=r.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom: 4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,Pr=r.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  min-width: max-content;
  
  ${e=>!e.$hasMedicalRecords&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,Or=r.p`
  color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,Wr=r.div`
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
`,_r=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,Hr=r.div`
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
    background: ${({theme:e})=>e.disabledBG};
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.disabledBG};
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.disabledBG};
  }
`,q=r.div`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.disabledBG};
  margin-right: 10px;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,J=r.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({theme:e})=>e.textGray};
  margin-bottom: 2px;
`,K=r.p`
  font-size: 13px;
  color: ${({theme:e})=>e.textBlack};
  word-wrap: break-word;
  word-break: break-word;
`,Vr=r.button`
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
  
  &:focus {
    outline: none;
  }

  &:focus-within svg {
    stroke: ${e=>e.theme.redDark};
  }
`,Ar=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid  ${e=>e.theme.greenMain};
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Ge=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,Ur=({onDataUpdate:e,medicalData:i,setMedicalData:m})=>{const[a,w]=o.useState([]),[x,h]=o.useState({doctorName:"",healthStatus:"",medicalInstitution:"",examinationDate:""}),[g,f]=o.useState({}),k=c=>{const{name:$,value:D}=c.target;m(E=>({...E,[$]:D.trimStart()}))},b=c=>{const{name:$,value:D}=c.target;m(E=>({...E,[$]:D.trim()}))},s=100;o.useEffect(()=>{const c=a.map($=>({doctorName:$.doctorName,healthStatus:$.healthStatus||"",medicalInstitution:$.medicalInstitution||"",examinationDate:$.examinationDate||""}));e(c)},[a,e]);const p=()=>{const c={};return x.doctorName.trim()||(c.doctorName="Ім'я лікаря є обов'язковим"),x.healthStatus.trim()||(c.healthStatus="Статус здоров'я є обов'язковим"),f(c),Object.keys(c).length===0},n=()=>{if(p()){const c={...x,doctorName:x.doctorName.trim(),healthStatus:x.healthStatus.trim(),medicalInstitution:x.medicalInstitution.trim(),id:Date.now()};w($=>[...$,c]),h({doctorName:"",healthStatus:"",medicalInstitution:"",examinationDate:""}),f({})}},d=c=>{w($=>$.filter(D=>D.id!==c))},u=(c,$)=>{h(D=>({...D,[c]:$})),g[c]&&f(D=>{const E={...D};return delete E[c],E})},y=c=>{u("examinationDate",c)},C=c=>{if(!c)return"";try{const $=new Date(c);return isNaN($.getTime())?c:$.toLocaleDateString("uk-UA")}catch{return c}};return t.jsxs(Br,{children:[t.jsxs(Ar,{children:[t.jsxs(Ge,{children:[t.jsx(O,{htmlFor:"input1",children:"Алергії"}),t.jsx(_,{type:"text",name:"allergies",value:i.allergies,onChange:k,onBlur:b,placeholder:"Введіть алергії спортсмена",maxLength:s})]}),t.jsxs(Ge,{children:[t.jsx(O,{htmlFor:"input2",children:"Захворювання"}),t.jsx(_,{type:"text",name:"diseases",value:i.diseases,onChange:k,onBlur:b,placeholder:"Введіть захворювання спортсмена",maxLength:s})]})]}),a.length===0?t.jsx(Tr,{children:"Додайте інформацію про медкомісії"}):t.jsx(Nr,{children:t.jsx(Fr,{children:t.jsx(Pr,{$hasMedicalRecords:a.length>0,children:a.map(c=>t.jsxs(Wr,{children:[t.jsxs(_r,{children:[t.jsx(Or,{children:"Медкомісія"}),t.jsx(Vr,{onClick:()=>d(c.id),"aria-label":"Видалити запис",children:t.jsx(Dr,{})})]}),t.jsxs(Hr,{children:[t.jsx(q,{children:t.jsxs(K,{children:[t.jsx(J,{children:"Лікар: "})," ",c.doctorName]})}),t.jsx(q,{children:t.jsxs(K,{children:[t.jsx(J,{children:"Статус здоров'я: "})," ",c.healthStatus]})}),t.jsx(q,{children:t.jsxs(K,{children:[t.jsx(J,{children:"Медичний заклад: "})," ",c.medicalInstitution.trim()?c.medicalInstitution:"Не вказано"]})}),t.jsx(q,{children:t.jsxs(K,{children:[t.jsx(J,{children:"Дата обстеження: "})," ",C(c.examinationDate)||"Не вказано"]})})]})]},c.id))})})}),t.jsxs(Mr,{children:[t.jsxs(Ce,{children:[t.jsxs(Z,{children:[t.jsxs(O,{children:["Лікар *",g.doctorName&&t.jsx(Ie,{children:g.doctorName})]}),t.jsx(_,{type:"text",value:x.doctorName,onChange:c=>u("doctorName",c.target.value),placeholder:"Введіть ім'я лікаря",maxLength:s,$error:g.doctorName})]}),t.jsxs(Z,{children:[t.jsxs(O,{children:["Статус здоров'я *",g.healthStatus&&t.jsx(Ie,{children:g.healthStatus})]}),t.jsx(_,{type:"text",value:x.healthStatus,onChange:c=>u("healthStatus",c.target.value),placeholder:"Введіть статус здоров'я",maxLength:s,$error:g.healthStatus})]})]}),t.jsxs(Ce,{children:[t.jsxs(Z,{children:[t.jsx(O,{children:"Медичний заклад"}),t.jsx(_,{type:"text",value:x.medicalInstitution,onChange:c=>u("medicalInstitution",c.target.value),placeholder:"Введіть назву медичного закладу",maxLength:s})]}),t.jsx(zr,{children:t.jsxs(Rr,{children:[t.jsx(O,{children:"Дата обстеження"}),t.jsx(xe,{value:x.examinationDate,onChange:y})]})})]})]}),t.jsx(Lr,{children:t.jsx(Er,{type:"button",onClick:n,children:"Додати"})})]})},Yr=r(me)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,qr=r.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,Jr=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  /* Stack inputs in one column on mobile and tablet */
  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
  
  /* Display inputs in one row on desktop */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,ie=r.div`
  display: flex;
  flex-direction: column;
`,ae=r.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,se=r.input`
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
`,Kr=r.span`
  color: ${({theme:e})=>e.red};
  font-size: 0.75rem;
  margin-left: 0.5rem;
  text-align: right;
    @media (max-width: 400px) {
    width: 92px;
    font-size: 0.65rem;  
    white-space: normal; 
    word-wrap: break-word; 
  }
`,Xr=r.button`
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
`,Zr=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,Qr=r.div`
  margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray};
  border: 1px dashed ${({theme:e})=>e.textGray};
  border-radius: 8px;
`,eo=r.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,to=r.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom: 4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,ro=r.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  min-width: max-content;
  
  ${e=>!e.$hasInstitutions&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,oo=r.p`
  color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,no=r.div`
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
`,io=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,ao=r.div`
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
    background: ${({theme:e})=>e.disabledBG};
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.disabledBG};
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.disabledBG};
  }
`,le=r.div`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.disabledBG};
  margin-right: 10px;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,de=r.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({theme:e})=>e.textGray};
  margin-bottom: 2px;
`,ce=r.p`
  font-size: 13px;
  color: ${({theme:e})=>e.textBlack};
  word-wrap: break-word;
  word-break: break-word;
`,so=r.button`
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

  &:focus {
    outline: none;
  }

  &:focus-within svg {
    stroke: ${e=>e.theme.redDark};
  }
`,lo=({onDataUpdate:e})=>{const[i,m]=o.useState([]),[a,w]=o.useState({name:"",contacts:"",relationship:""}),[x,h]=o.useState({}),g=100;o.useEffect(()=>{const p=i.map(n=>({name:n.name,contacts:n.contacts||"",relationship:n.relationship||""}));e(p)},[i,e]);const f=()=>{const p={};return a.name.trim()||(p.name="Обов'язкове поле"),h(p),Object.keys(p).length===0},k=()=>{if(f()){const p={...a,name:a.name.trim(),contacts:a.contacts.trim(),relationship:a.relationship.trim(),id:Date.now()};m(n=>[...n,p]),w({name:"",contacts:"",relationship:""}),h({})}},b=p=>{m(n=>n.filter(d=>d.id!==p))},s=(p,n)=>{w(d=>({...d,[p]:n})),x[p]&&h(d=>{const u={...d};return delete u[p],u})};return t.jsxs(qr,{children:[i.length===0?t.jsx(Qr,{children:"Додайте інформацію"}):t.jsx(eo,{children:t.jsx(to,{children:t.jsx(ro,{$hasInstitutions:i.length>0,children:i.map(p=>t.jsxs(no,{children:[t.jsxs(io,{children:[t.jsx(oo,{children:"Вказана інформація"}),t.jsx(so,{onClick:()=>b(p.id),"aria-label":"Видалити запис",children:t.jsx(Yr,{})})]}),t.jsxs(ao,{children:[t.jsx(le,{children:t.jsxs(ce,{children:[t.jsx(de,{children:"Ім'я: "})," ",p.name]})}),t.jsx(le,{children:t.jsxs(ce,{children:[t.jsx(de,{children:"Контакти: "})," ",p.contacts.trim()?p.contacts:"Не вказано"]})}),t.jsx(le,{children:t.jsxs(ce,{children:[t.jsx(de,{children:"Ступінь спорідненості: "})," ",p.relationship.trim()?p.relationship:"Не вказано"]})})]})]},p.id))})})}),t.jsxs(Jr,{children:[t.jsxs(ie,{children:[t.jsxs(ae,{children:["Ім'я родича*",x.name&&t.jsx(Kr,{children:x.name})]}),t.jsx(se,{type:"text",value:a.name,onChange:p=>s("name",p.target.value),placeholder:"Введіть ім'я",maxLength:g,$error:x.name})]}),t.jsxs(ie,{children:[t.jsx(ae,{children:"Контакти родича *ф"}),t.jsx(se,{type:"text",value:a.contacts,onChange:p=>s("contacts",p.target.value),placeholder:"Введіть контактні дані",maxLength:g})]}),t.jsxs(ie,{children:[t.jsx(ae,{children:"Ступінь спорідненості"}),t.jsx(se,{type:"text",value:a.relationship,onChange:p=>s("relationship",p.target.value),placeholder:"Введіть ступінь спорідненості",maxLength:g})]})]}),t.jsx(Zr,{children:t.jsx(Xr,{type:"button",onClick:k,children:"Додати"})})]})},S={mobile:"320px",tablet:"768px",desktop:"1024px"},co=r.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  @media (min-width: ${S.tablet}) {
    align-items: flex-start;
    height: 100%;
  }
`,Se=r.div`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${S.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${S.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }

  ${({$isSportsFacility:e})=>e&&ue`
      @media (min-width: ${S.tablet}) {
       padding: 14px 0;
      }
  
      @media (min-width: ${S.desktop}) {
        padding: 14px 0;
      }
  `}
`,po=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${S.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`,ho=r.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  
  @media (min-width: ${S.tablet}) {
    width: auto;
    margin-right: 3.8rem;
    margin-bottom: 0;
    justify-content: flex-start;
    align-self: center; 
  }

   @media (min-width: ${S.desktop}) {
    margin-right: 2rem;
  }
`,xo=r.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${S.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,uo=r.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,mo=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,go=r.label`
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

  @media (min-width: ${S.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,bo=r.input`
  display: none;
`,fo=r.div`
  flex: 1;
  
  @media (min-width: ${S.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center; 
  }
`,Ne=r.h2`
  color: ${({theme:e})=>e.greenMain};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`,De=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: ${e=>e.hasphysique?"20px":"0"};
  padding-bottom: ${e=>e.hasphysique?"20px":"0"};
  @media (min-width: ${S.tablet}) {
    flex-direction: column;
  }
  
  @media (min-width: ${S.desktop}) {
    flex-direction: row;
    gap: 1.5rem;
  }
`,I=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;

${({$isUniversity:e})=>e&&ue`
      @media (max-width: 1024px) {
        margin-top: 10px; 
      }

      @media (min-width: 1024px) {
        margin-top: 0;
      }
    `}
`,G=r.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,M=r.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,isError:i})=>i?e.red:e.borderColor};
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
`,wo=r.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,$o=r.button`
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
`,ko=r(ft)`
  fill: ${e=>e.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${S.tablet}) {
    width: 18px;
    height: 18px;
  }
`,pe=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Be=r.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
   margin-top: ${e=>e.$hasSportInfo?"20px":"0"};
  @media (min-width: ${S.desktop}) {
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }
`,Me=r.div`
  flex: 1;
  
  @media (min-width: ${S.desktop}) {
     margin-top: ${e=>e.$hasSportInfo?"0":"3.1rem"}
  }

  
`,Ee=r.div`
  flex: 1;
  @media (max-width: ${S.desktop}) {
    margin-top: ${e=>e.$hasSportInfo?"20px":"0"}
  }
`,he=r.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,L=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: ${S.desktop}) {
    flex-direction: row;
    gap: 20px;
    
    & > ${I} {
      flex: 1;
    }
  }
`,vo=r(Ne)`
  margin-bottom: 1rem;
  padding-top: 10px;

  @media (min-width: ${S.desktop}) {
    padding-top: 0;
  }
`,jo=r.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:i,name:m})=>i&&m==="notes"?e.red:e.borderColor};
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
`,yo=r.div`
  margin: 20px 0;
`,Co=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${S.desktop}) {
    flex-direction: row;
    gap: 40px;
  }

`,Le=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  ${({$isSportsFacility:e})=>e&&ue`
      gap: 10px;
  `}
`;r.div`
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
`;const Bo=()=>{const e=o.useRef(null),i=o.useRef(null),m=pt(),{setTitle:a}=ht(),[w,x]=o.useState(null),[h,g]=o.useState(null),[f,k]=o.useState(""),[b,s]=o.useState(""),[p,n]=o.useState(""),[d,u]=o.useState(""),[y,C]=o.useState(""),[c,$]=o.useState(""),[D,E]=o.useState(""),[R,z]=o.useState(""),[B,Fe]=o.useState(""),[Pe,Oe]=o.useState(""),[We,_e]=o.useState(""),[He,Ve]=o.useState(""),[ge,Ae]=o.useState(""),[be,Ue]=o.useState(""),[fe,Ye]=o.useState("");o.useState(null);const[we,qe]=o.useState(""),[$e,Je]=o.useState(""),[Q,Ke]=o.useState(""),[ee,Xe]=o.useState(""),[ke,Ze]=o.useState(""),[te,Qe]=o.useState(""),[et,tt]=o.useState({}),[rt,ot]=o.useState({allergies:"",diseases:""}),[nt,it]=o.useState({}),[at,st]=o.useState({}),[P,N]=o.useState({firstName:!1,lastName:!1,birthdate:!1,currentSportInstitution:!1,trainer:!1,entryDate:!1}),lt=l=>{const v=l.target.files[0];if(v){x(v);const H=URL.createObjectURL(v);return g(H),()=>URL.revokeObjectURL(H)}};o.useEffect(()=>(a("Створення нового спортсмена"),()=>{h&&URL.revokeObjectURL(h)}),[a]);const dt=l=>{if(l.key==="Enter"||l.key===" "){const v=document.getElementById("photo-upload");v&&v.click()}},ct=l=>{l.preventDefault();const v={firstName:!f.trim(),lastName:!b.trim(),birthdate:!d,currentSportInstitution:!Q.trim(),trainer:!ee.trim(),entryDate:!te},H=!Object.values(v).some(T=>T);if(N(v),!H){v.currentSportInstitution||v.trainer||v.entryDate?(console.log("Has sports facility errors, scrolling to that section"),e.current&&(e.current.open(),setTimeout(()=>{V.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),e.current.scrollIntoView({behavior:"smooth",block:"center"})},300))):(console.log("No sports facility errors, scrolling to top"),setTimeout(()=>{V.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),i.current.scrollIntoView({behavior:"smooth",block:"center"})},100));return}const j=new FormData;w&&j.append("athlete-avatar",w),j.append("firstName",f),j.append("lastName",b),j.append("patronymic",p),j.append("birthdate",d),j.append("gender",c||""),j.append("address",y||""),j.append("phone",D||""),j.append("email",R||""),j.append("socialMedia",B||""),j.append("role",ge||""),j.append("sportCategory",be||""),j.append("notes",fe||""),j.append("school",$e||""),j.append("university",we||""),j.append("currentSportInstitution",Q||""),j.append("trainer",ee||""),j.append("trainerContacts",ke||""),j.append("entryDate",te||""),j.append("previousEstablishments",JSON.stringify(et||{})),j.append("medicalInformation",JSON.stringify(nt||{})),j.append("parentsInformation",JSON.stringify(at||{}));for(let T of j.entries())console.log(T[0]+": "+T[1]);m(xt(j)).unwrap().then(T=>{V.success("Спортсмена успішно створено!")}).catch(T=>{V.error(`Помилка: ${T}`)})};return t.jsx(t.Fragment,{children:t.jsx(co,{children:t.jsxs(Se,{children:[t.jsxs(po,{children:[t.jsx(ho,{children:t.jsxs(xo,{children:[t.jsx(uo,{children:t.jsx(mo,{src:h||wt,alt:"Фото спортсмена"})}),t.jsx(go,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:dt,children:t.jsx(ko,{})}),t.jsx(bo,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:lt})]})}),t.jsxs(fo,{ref:i,children:[t.jsx(Ne,{children:"Особиста інформація"}),t.jsxs(De,{children:[t.jsxs(I,{children:[t.jsx(G,{htmlFor:"firstName",children:"Ім'я *"}),t.jsx(M,{id:"firstName",type:"text",placeholder:"Введіть ім'я",value:f,onChange:l=>{k(l.target.value),l.target.value.trim()&&N(v=>({...v,firstName:!1}))},isError:P.firstName})]}),t.jsxs(I,{children:[t.jsx(G,{htmlFor:"lastName",children:"Прізвище *"}),t.jsx(M,{id:"lastName",type:"text",placeholder:"Введіть прізвище",value:b,onChange:l=>{s(l.target.value),l.target.value.trim()&&N(v=>({...v,lastName:!1}))},isError:P.lastName})]}),t.jsxs(I,{children:[t.jsx(G,{htmlFor:"patronymic",children:"По батькові"}),t.jsx(M,{id:"patronymic",type:"text",placeholder:"Введіть по батькові",value:p,onChange:l=>n(l.target.value)})]})]})]})]}),t.jsxs(Be,{children:[t.jsx(Me,{children:t.jsxs(he,{children:[t.jsx(L,{children:t.jsxs(I,{children:[t.jsx(G,{htmlFor:"birthdate",children:"Дата народження *"}),t.jsx(pe,{children:t.jsx(re,{selectedDate:d,onDateChange:l=>{u(l),l&&N(v=>({...v,birthdate:!1}))},isError:P.birthdate})})]})}),t.jsx(L,{children:t.jsxs(I,{children:[t.jsx(G,{htmlFor:"address",children:"Адреса"}),t.jsx(M,{id:"address",type:"text",value:y,onChange:l=>C(l.target.value),placeholder:"Введіть адресу"})]})}),t.jsx(L,{children:t.jsx(Ot,{label:"Виберіть стать",value:c,onChange:$})})]})}),t.jsxs(Ee,{children:[t.jsx(vo,{children:"Контакти"}),t.jsxs(he,{children:[t.jsx(L,{children:t.jsxs(I,{children:[t.jsx(G,{htmlFor:"phone",children:"Телефон"}),t.jsx(M,{id:"phone",type:"tel",value:D,onChange:l=>E(l.target.value),placeholder:"Введіть номер телефону"})]})}),t.jsx(L,{children:t.jsxs(I,{children:[t.jsx(G,{htmlFor:"email",children:"Email"}),t.jsx(M,{id:"email",type:"email",value:R,onChange:l=>z(l.target.value),placeholder:"Введіть email"})]})}),t.jsx(L,{children:t.jsxs(I,{children:[t.jsx(G,{htmlFor:"socialMedia",children:"Соцмережі"}),t.jsx(M,{id:"socialMedia",type:"text",value:B,onChange:l=>Fe(l.target.value),placeholder:"Введіть посилання на соцмережі"})]})})]})]})]}),t.jsx(F,{helpTooltiptitle:"Ці параметри не є обов'язковими, але вони допомагають отримати детальнішу статистику 📊",helpTooltip:"Додайте перший замір щоб відстежувати зміни спортсмена. Після створення профілю спортсмена ви зможете додавати нові заміри та повністю керувати ними 😊",title:"Фізичні дані",children:t.jsxs(De,{hasphysique:!0,children:[t.jsxs(I,{children:[t.jsx(G,{htmlFor:"height",children:"Зріст у м."}),t.jsx(M,{id:"height",type:"number",min:"0",max:"4",placeholder:"Введіть зріст у м.",step:"0.1",value:Pe,onChange:l=>Oe(l.target.value)})]}),t.jsxs(I,{children:[t.jsx(G,{htmlFor:"weight",children:"Вага у кг."}),t.jsx(M,{id:"weight",min:"0",max:"400",step:"0.1",placeholder:"Введіть вагу у кг.",type:"number",value:We,onChange:l=>_e(l.target.value)})]}),t.jsxs(I,{children:[t.jsx(G,{htmlFor:"dateOfMeasurement",children:"Дата вимірювання"}),t.jsx(pe,{children:t.jsx(re,{selectedDate:He,onDateChange:Ve})})]})]})}),t.jsx(F,{title:"Спортивна інформація",children:t.jsxs(Be,{$hasSportInfo:!0,children:[t.jsx(Me,{$hasSportInfo:!0,children:t.jsxs(he,{children:[t.jsx(L,{children:t.jsxs(I,{children:[t.jsx(G,{htmlFor:"role",children:"Роль у команді"}),t.jsx(M,{id:"role",type:"text",value:ge,onChange:l=>Ae(l.target.value),placeholder:"Введіть роль у команді"})]})}),t.jsx(L,{children:t.jsxs(I,{children:[t.jsx(G,{htmlFor:"sportCategory",children:"Спортивний розряд"}),t.jsx(M,{id:"sportCategory",type:"text",value:be,onChange:l=>Ue(l.target.value),placeholder:"Введіть спортивний розряд"})]})}),t.jsx(L,{children:t.jsxs(I,{children:[t.jsx(G,{htmlFor:"notes",children:"Примітки про спортсмена"}),t.jsx(jo,{id:"notes",value:fe,onChange:l=>Ye(l.target.value),placeholder:"Додайте примітки про спортсмена"})]})})]})}),t.jsx(Ee,{$hasSportInfo:!0,children:t.jsx(Qt,{})})]})}),t.jsx(F,{title:"Навчальні заклади",children:t.jsx(yo,{children:t.jsxs(L,{children:[t.jsxs(I,{children:[t.jsx(G,{htmlFor:"school",children:"Школа"}),t.jsx(M,{id:"school",type:"text",placeholder:"Введіть назву школи",value:$e,onChange:l=>Je(l.target.value)})]}),t.jsxs(I,{$isUniversity:!0,children:[t.jsx(G,{htmlFor:"university",children:"Університет"}),t.jsx(M,{id:"university",type:"text",placeholder:"Введіть назву університету",value:we,onChange:l=>qe(l.target.value)})]})]})})}),t.jsx(F,{title:"Спортивний заклад",ref:e,children:t.jsx(Se,{$isSportsFacility:!0,children:t.jsxs(Co,{children:[t.jsxs(Le,{$isSportsFacility:!0,children:[t.jsxs(I,{children:[t.jsx(G,{children:"Поточний спортивний заклад *"}),t.jsx(M,{type:"text",value:Q,onChange:l=>{Ke(l.target.value),l.target.value.trim()&&N(v=>({...v,currentSportInstitution:!1}))},placeholder:"Введіть назву закладу",isError:P.currentSportInstitution})]}),t.jsxs(I,{children:[t.jsx(G,{children:"Тренер *"}),t.jsx(M,{type:"text",value:ee,onChange:l=>{Xe(l.target.value),l.target.value.trim()&&N(v=>({...v,trainer:!1}))},placeholder:"Введіть ім'я тренера",isError:P.trainer})]})]}),t.jsxs(Le,{$isSportsFacility:!0,children:[t.jsxs(I,{children:[t.jsx(G,{children:"Контакти тренера"}),t.jsx(M,{type:"text",value:ke,onChange:l=>Ze(l.target.value),placeholder:"Введіть контакти"})]}),t.jsxs(I,{children:[t.jsx(G,{children:"Дата вступу *"}),t.jsx(pe,{children:t.jsx(re,{selectedDate:te,onDateChange:l=>{Qe(l),l&&N(v=>({...v,entryDate:!1}))},isError:P.entryDate})})]})]})]})})}),t.jsx(F,{title:"Минулі спортивні заклади",children:t.jsx(Sr,{onDataUpdate:tt})}),t.jsx(F,{title:"Медична інформація",children:t.jsx(Ur,{onDataUpdate:it,medicalData:rt,setMedicalData:ot})}),t.jsx(F,{title:"Родичи спортсмена",children:t.jsx(lo,{onDataUpdate:st})}),t.jsx(wo,{children:t.jsx($o,{type:"button",onClick:ct,children:"Створити"})})]})})})};export{Bo as default};
