import{r as o,d as r,j as t,l as he,e as ct,b as pt,y as Q,i as ht}from"./index-fb682d94.js";import{g as $e,a as xt,u as ut,b as mt,D as gt,S as bt,C as ee}from"./CustomDatePicker-026dd509.js";import{p as ft}from"./PlaceholderProfile-3c1b0d36.js";import{P as wt}from"./PlaceholderTeam-4fc9ba85.js";const Ee=e=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M6 9L12 15L18 9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),$t=r.div`
  
  margin: 20px 0;
  border: 1.7px solid ${({theme:e})=>e.greenMain};
  border-radius: 8px;

  background-color: ${({theme:e})=>e.ContainerBGColor}; 
  transition: background-color 0.3s ease;
  ${({isOpen:e})=>!e&&`
    border-radius: 8px 8px 0 0;
  `}


`,kt=r(Ee)`
  stroke: ${e=>e.theme.white};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
`,vt=r.button.attrs({type:"button"})`
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
`,jt=r.div`
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
`,yt=r.h3`
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
`,Ct=r.div`
  display: flex;
  align-items: center;
`,It=r.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,Gt=e=>o.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2}),o.createElement("path",{d:"M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M12 16H12.01",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Le=r(Gt)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({theme:e})=>e.white};
  transition: stroke 0.3s ease;
`,St=r.button.attrs({type:"button"})`
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

    ${Le} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,Dt=r.div`
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
`,Bt=r.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
`,Mt=r.div`
  font-size: 14px; 
  font-weight: 600; 
  margin-bottom: 5px; 
`,Et=({title:e,text:i})=>{const[g,a]=o.useState(!1),[$,u]=o.useState("top"),[h,b]=o.useState(null),w=o.useRef(null),v=o.useRef(null),f=()=>{if(!v.current||!w.current||!g)return;const s=v.current.getBoundingClientRect(),p=w.current.getBoundingClientRect(),n=window.innerWidth,d=p.height,m=p.width,j=s.top,y=s.bottom,c=s.left;s.right;const k=s.width;s.height;const S=c+k/2,T=j>d+15?"top":"bottom";u(T);let L,D;T==="top"?L=j-d-12:L=y+12,D=S-m*.8,D<10&&(D=10),D+m>n-10&&(D=n-m-10),b({top:L,left:D})};return o.useEffect(()=>{g&&setTimeout(f,0)},[g]),o.useEffect(()=>{if(g)return window.addEventListener("scroll",f),window.addEventListener("resize",f),()=>{window.removeEventListener("scroll",f),window.removeEventListener("resize",f)}},[g]),t.jsxs(St,{ref:v,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:()=>a(!g),children:[t.jsx(Le,{}),t.jsx(Dt,{ref:w,visible:g,placement:$,tooltipPosition:h,children:t.jsxs(Bt,{children:[e&&t.jsx(Mt,{children:e}),i]})})]})},F=o.forwardRef(({children:e,helpTooltiptitle:i,helpTooltip:g,title:a,top:$,left:u},h)=>{const[b,w]=o.useState(!1),[v,f]=o.useState(!1),s=o.useRef(null),p=o.useRef(null),n=o.useRef(!1);o.useImperativeHandle(h,()=>({open:()=>{w(!0),f(!0)},close:()=>{w(!1)},scrollIntoView:m=>{s.current&&s.current.scrollIntoView(m)},isOpen:()=>b}));const d=()=>{w(m=>!m),f(!0)};return o.useEffect(()=>{const m=new IntersectionObserver(([j])=>{!v&&j.isIntersecting&&!n.current&&j.intersectionRatio>=1&&(setTimeout(()=>{w(!0)},200),n.current=!0)},{threshold:1,rootMargin:"0px 0px -100px 0px"});return s.current&&m.observe(s.current),()=>{s.current&&m.unobserve(s.current)}},[v]),o.useEffect(()=>{p.current&&(b?p.current.removeAttribute("inert"):p.current.setAttribute("inert",""))},[b]),t.jsxs($t,{ref:s,isOpen:b,children:[t.jsxs(vt,{onClick:d,role:"button",tabIndex:0,children:[a&&t.jsx(yt,{children:a}),t.jsxs(Ct,{children:[g&&t.jsx(It,{onClick:m=>m.stopPropagation(),children:t.jsx(Et,{title:i,text:g,top:$,left:u})}),t.jsx(kt,{isOpen:b})]})]}),t.jsx(jt,{ref:p,isOpen:b,role:"region",children:e})]})}),Lt=r.div`
  position: relative;
  width: 100%;
`,zt=r.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,Rt=r.span`
  color: ${({selectedValue:e,theme:i})=>e===""?i.textBlack:e==="Чоловік"||e==="Жінка"?i.greenMain:i.textGray}; 
  font-family: 'Inter Tight', sans-serif;
`,Tt=r.button.attrs({type:"button"})`
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
`,Nt=r.div`
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
`,te=r.button.attrs({type:"button"})`
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
`,Ft=r(Ee)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) ${e=>e.open?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
  width: 22px;
  height: auto;
`,Pt=({label:e,value:i,onChange:g})=>{const[a,$]=o.useState(!1),[u,h]=o.useState(i||""),b=o.useRef(null),w=()=>{$(!a)},v=s=>{h(s),g(s),$(!1)},f=s=>{b.current&&!b.current.contains(s.target)&&$(!1)};return o.useEffect(()=>(document.addEventListener("click",f),()=>{document.removeEventListener("click",f)}),[]),t.jsxs(Lt,{ref:b,children:[e&&t.jsx(zt,{onClick:w,children:e}),t.jsxs(Tt,{onClick:w,children:[t.jsx(Rt,{selectedValue:u,children:u||"Не вибрано"}),t.jsx(Ft,{open:a})]}),a&&t.jsxs(Nt,{children:[t.jsx(te,{className:u==="Чоловік"?"selected":"",onClick:()=>v("Чоловік"),children:"Чоловік"}),t.jsx(te,{className:u==="Жінка"?"selected":"",onClick:()=>v("Жінка"),children:"Жінка"}),t.jsx(te,{className:u===""?"selected":"",onClick:()=>v(""),children:"Не вибрано"})]})]})},Wt=r.div`
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
`,Ot=r.div`
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
`,_t=r.button`
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
`,Ht=r.div`
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
`,Vt=r.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Ut=r.div`
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
`,Yt=r.div`
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
`,qt=r.div`
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  flex: 1; 
  overflow: hidden; 
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`,Jt=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,Kt=r.div`
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
`,Xt=r.img`
  border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,Zt=()=>{const[e,i]=o.useState(null),g=o.useRef(null),a=o.useRef({}),$=[{id:1,name:"Динамо"},{id:2,name:"Шахтар"},{id:3,name:"Зоря"},{id:4,name:"Металіст"},{id:5,name:"Верес"},{id:6,name:"Олександрія"},{id:7,name:"Чорноморець"},{id:8,name:"Карпати"},{id:9,name:"Дніпро"},{id:10,name:"Десна"}],u=o.useCallback(h=>{e&&e.id===h.id?(console.log("Team deselected:",h),i(null),a.current[h.id]&&a.current[h.id].blur()):(console.log("Team selected:",h),i(h))},[e]);return o.useEffect(()=>{if(!g.current)return;const h={root:g.current,rootMargin:"0px",threshold:.1},b=f=>{f.forEach(s=>{s.target.classList&&(s.isIntersecting?(s.target.classList.add("visible"),s.target.classList.remove("hidden")):(s.target.classList.add("hidden"),s.target.classList.remove("visible")))})},w=new IntersectionObserver(b,h);return document.querySelectorAll('[id^="team-"]').forEach(f=>{w.observe(f),f.classList.add("hidden")}),()=>w.disconnect()},[]),t.jsx(qt,{children:t.jsxs(Ut,{children:[t.jsx(Kt,{children:t.jsx(Jt,{children:t.jsx("h2",{children:"Команда спортсмена"})})}),t.jsx(Yt,{ref:g,children:$.length>0?$.map(h=>t.jsx(Wt,{className:"team-item",id:`team-${h.id}`,children:t.jsxs(_t,{ref:b=>a.current[h.id]=b,isSelected:e&&e.id===h.id,onClick:()=>u(h),type:"button",children:[t.jsx(Ht,{children:t.jsx(Xt,{loading:"lazy",src:wt})}),t.jsx(At,{children:t.jsx(Vt,{children:h.name})})]})},h.id)):t.jsx(Ot,{children:"Команд не знайдено"})})]})})},Qt=r(gt)`
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
`,er=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 8px 4px;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 12px;
`,tr=r.select`
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


`,rr=r.select`
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

`,or=r.div`
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
`,nr=(e,i,g=1)=>{let a=[];for(let $=e;$<=i;$+=g)a.push($);return a},pe=({value:e,onChange:i,placeholder:g="Оберіть дату",hasError:a=!1,minDate:$,maxDate:u})=>{const h=d=>{if(!d)return null;try{const m=new Date(d);return isNaN(m.getTime())?null:m}catch{return null}},[b,w]=o.useState(()=>h(e));o.useEffect(()=>{w(h(e))},[e]);const f=nr(1900,$e(new Date)),s=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],p=d=>{if(w(d),d){const m=d.getFullYear(),j=String(d.getMonth()+1).padStart(2,"0"),y=String(d.getDate()).padStart(2,"0");i(`${m}-${j}-${y}`)}else i("")};let n=h($);return n&&(n=xt(n,0)),t.jsx(or,{children:t.jsx(Qt,{selected:b,onChange:p,dateFormat:"dd.MM.yyyy",placeholderText:g,locale:ut,$error:a,minDate:n,maxDate:u?h(u):void 0,renderCustomHeader:({date:d,changeYear:m,changeMonth:j})=>t.jsxs(er,{children:[t.jsx(tr,{value:$e(d),onChange:y=>{m(parseInt(y.target.value))},children:f.map(y=>t.jsx("option",{value:y,children:y},y))}),t.jsx(rr,{value:s[mt(d)],onChange:y=>{j(s.indexOf(y.target.value))},children:s.map((y,c)=>t.jsx("option",{value:y,children:y},c))})]})})})},xe=e=>o.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M10 12V17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M14 12V17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M4 7H20",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ir=r(xe)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,ar=r.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,sr=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,ke=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`,q=r.div`
  display: flex;
  flex-direction: column;
`,W=r.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,re=r.input`
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
`,lr=r.span`
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
`,dr=r.button`
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

`,cr=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,pr=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,ve=r(q)`
  flex: 1;
`,hr=r.div`
margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray} ;
  border: 1px dashed ${({theme:e})=>e.textGray} ;
  border-radius: 8px;
`,xr=r.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid  ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,ur=r.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom:4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,mr=r.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  
  min-width:  max-content;
  
  ${e=>!e.$hasInstitutions&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,gr=r.p`
 color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,br=r.div`
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
`,fr=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,wr=r.div`
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
`,_=r.div`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.disabledBG};
  margin-right: 10px;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,H=r.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({theme:e})=>e.textGray};
  margin-bottom: 2px;
`,A=r.p`
  font-size: 13px;
  color: ${({theme:e})=>e.textBlack};
  word-wrap: break-word;
  word-break: break-word;
`,$r=r.button`

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

`,kr=e=>o.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 ",stroke:"none",fillRule:"evenodd"})),ze=r(kr)`
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: ${({theme:e})=>e.red};
  transition: stroke 0.3s ease;
`,vr=r.button.attrs({type:"button"})`
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

    ${ze} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,jr=r.div`
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
`,yr=r.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
  /* color: ${({theme:e})=>e.red}; */
`,Cr=r.div`
  font-size: 14px; 
  font-weight: 700; 
  margin-bottom: 5px; 
  color:  ${({theme:e})=>e.red};
`,Ir=({title:e,text:i})=>{const[g,a]=o.useState(!1),[$,u]=o.useState("top"),[h,b]=o.useState(null),w=o.useRef(null),v=o.useRef(null),f=()=>{if(!v.current||!w.current||!g)return;const s=v.current.getBoundingClientRect(),p=w.current.getBoundingClientRect(),n=window.innerWidth,d=p.height,m=p.width,j=s.top,y=s.bottom,c=s.left;s.right;const k=s.width;s.height;const S=c+k/2,T=j>d+15?"top":"bottom";u(T);let L,D;T==="top"?L=j-d-12:L=y+12,D=S-m*.8,D<10&&(D=10),D+m>n-10&&(D=n-m-10),b({top:L,left:D})};return o.useEffect(()=>{g&&setTimeout(f,0)},[g]),o.useEffect(()=>{if(g)return window.addEventListener("scroll",f),window.addEventListener("resize",f),()=>{window.removeEventListener("scroll",f),window.removeEventListener("resize",f)}},[g]),t.jsxs(vr,{ref:v,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:()=>a(!g),children:[t.jsx(ze,{}),t.jsx(jr,{ref:w,visible:g,placement:$,tooltipPosition:h,children:t.jsxs(yr,{children:[e&&t.jsx(Cr,{children:e}),i]})})]})},Gr=({onDataUpdate:e})=>{const[i,g]=o.useState([]),[a,$]=o.useState({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),[u,h]=o.useState({}),b=100;o.useEffect(()=>{const n=i.map(d=>({previousCoach:d.coachName,previousInstitution:d.institution||"",coachContacts:d.coachContacts||"",entryDate:d.entryDate||"",exitDate:d.exitDate||""}));e(n)},[i,e]);const w=()=>{const n={};if(a.coachName.trim()||(n.coachName="Ім'я тренера є обов'язковим"),a.entryDate&&a.exitDate){const d=new Date(a.entryDate),j=new Date(a.exitDate).getTime()-d.getTime();Math.ceil(j/(1e3*3600*24))<0&&(n.exitDate="Дата виходу має бути не раніше дати вступу")}return h(n),Object.keys(n).length===0},v=()=>{if(w()){const n={...a,coachName:a.coachName.trim(),institution:a.institution.trim(),coachContacts:a.coachContacts.trim(),id:Date.now()};g(d=>[...d,n]),$({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),h({})}},f=n=>{g(d=>d.filter(m=>m.id!==n))},s=(n,d)=>{if($(m=>({...m,[n]:d})),u[n]&&h(m=>{const j={...m};return delete j[n],j}),n==="entryDate"&&a.exitDate){const m=new Date(d),y=new Date(a.exitDate).getTime()-m.getTime();Math.ceil(y/(1e3*3600*24))<0?h(k=>({...k,exitDate:"Дата виходу з закладу має бути не раніше дати вступу"})):u.exitDate&&h(k=>{const S={...k};return delete S.exitDate,S})}},p=n=>{if(!n)return"";try{const d=new Date(n);return isNaN(d.getTime())?n:d.toLocaleDateString("uk-UA")}catch{return n}};return t.jsxs(ar,{children:[i.length===0?t.jsx(hr,{children:"Додайте інформацію"}):t.jsx(xr,{children:t.jsx(ur,{children:t.jsx(mr,{$hasInstitutions:i.length>0,children:i.map(n=>t.jsxs(br,{children:[t.jsxs(fr,{children:[t.jsx(gr,{children:"Вказана інформація"}),t.jsx($r,{onClick:()=>f(n.id),"aria-label":"Видалити заклад",children:t.jsx(ir,{})})]}),t.jsxs(wr,{children:[t.jsx(_,{children:t.jsxs(A,{children:[t.jsx(H,{children:"Тренер: "})," ",n.coachName]})}),t.jsx(_,{children:t.jsxs(A,{children:[t.jsx(H,{children:"Заклад: "}),n.institution.trim()?n.institution:"Не вказано"]})}),t.jsx(_,{children:t.jsxs(A,{children:[t.jsx(H,{children:"Контакти: "})," ",n.coachContacts.trim()?n.coachContacts:"Не вказано"]})}),t.jsxs(_,{children:[t.jsx(H,{children:"Період:"}),t.jsxs(A,{children:[p(n.entryDate)||"Не вказано"," ",t.jsx("span",{children:" - "}),p(n.exitDate)||"Не вказано"]})]})]})]},n.id))})})}),t.jsxs(sr,{children:[t.jsxs(ke,{children:[t.jsxs(q,{children:[t.jsxs(W,{children:["Минулий Тренер *",u.coachName&&t.jsx(lr,{children:u.coachName})]}),t.jsx(re,{type:"text",value:a.coachName,onChange:n=>s("coachName",n.target.value),placeholder:"Введіть ім'я тренера",maxLength:b,$error:u.coachName})]}),t.jsxs(q,{children:[t.jsx(W,{children:"Минулий спортивний заклад"}),t.jsx(re,{type:"text",value:a.institution,onChange:n=>s("institution",n.target.value),placeholder:"Введіть назву закладу",maxLength:b})]})]}),t.jsxs(ke,{children:[t.jsxs(q,{children:[t.jsx(W,{children:"Контакти тренера"}),t.jsx(re,{type:"text",value:a.coachContacts,onChange:n=>s("coachContacts",n.target.value),placeholder:"Введіть контакти тренера",maxLength:b})]}),t.jsxs(pr,{children:[t.jsxs(ve,{children:[t.jsx(W,{children:"Дата вступу"}),t.jsx(pe,{value:a.entryDate,onChange:n=>s("entryDate",n),placeholder:"Оберіть дату вступу"})]}),t.jsxs(ve,{children:[t.jsxs(W,{children:["Дата виходу",u.exitDate&&t.jsx(Ir,{title:"Неправильно введені дані",text:u.exitDate})]}),t.jsx(pe,{value:a.exitDate,onChange:n=>s("exitDate",n),placeholder:"Оберіть дату виходу",minDate:a.entryDate,hasError:!!u.exitDate})]})]})]})]}),t.jsx(cr,{children:t.jsx(dr,{type:"button",onClick:v,children:"Додати"})})]})},Sr=r(xe)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,Dr=r.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,Br=r.div`
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
`,J=r.div`
  display: flex;
  flex-direction: column;
`,P=r.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,O=r.input`
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
`,ye=r.span`
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
`,Mr=r.button`
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
`,Er=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,Lr=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,zr=r(J)`
  flex: 1;
`,Rr=r.div`
  margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray};
  border: 1px dashed ${({theme:e})=>e.textGray};
  border-radius: 8px;
`,Tr=r.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,Nr=r.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom: 4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,Fr=r.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  min-width: max-content;
  
  ${e=>!e.$hasMedicalRecords&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,Pr=r.p`
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
`,Or=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,_r=r.div`
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
`,V=r.div`
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
`,Hr=r.button`
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
`,Ce=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,Vr=({onDataUpdate:e,medicalData:i,setMedicalData:g})=>{const[a,$]=o.useState([]),[u,h]=o.useState({doctorName:"",healthStatus:"",medicalInstitution:"",examinationDate:""}),[b,w]=o.useState({}),v=c=>{const{name:k,value:S}=c.target;g(M=>({...M,[k]:S.trimStart()}))},f=c=>{const{name:k,value:S}=c.target;g(M=>({...M,[k]:S.trim()}))},s=100;o.useEffect(()=>{const c=a.map(k=>({doctorName:k.doctorName,healthStatus:k.healthStatus||"",medicalInstitution:k.medicalInstitution||"",examinationDate:k.examinationDate||""}));e(c)},[a,e]);const p=()=>{const c={};return u.doctorName.trim()||(c.doctorName="Ім'я лікаря є обов'язковим"),u.healthStatus.trim()||(c.healthStatus="Статус здоров'я є обов'язковим"),w(c),Object.keys(c).length===0},n=()=>{if(p()){const c={...u,doctorName:u.doctorName.trim(),healthStatus:u.healthStatus.trim(),medicalInstitution:u.medicalInstitution.trim(),id:Date.now()};$(k=>[...k,c]),h({doctorName:"",healthStatus:"",medicalInstitution:"",examinationDate:""}),w({})}},d=c=>{$(k=>k.filter(S=>S.id!==c))},m=(c,k)=>{h(S=>({...S,[c]:k})),b[c]&&w(S=>{const M={...S};return delete M[c],M})},j=c=>{m("examinationDate",c)},y=c=>{if(!c)return"";try{const k=new Date(c);return isNaN(k.getTime())?c:k.toLocaleDateString("uk-UA")}catch{return c}};return t.jsxs(Dr,{children:[t.jsxs(Ar,{children:[t.jsxs(Ce,{children:[t.jsx(P,{htmlFor:"input1",children:"Алергії"}),t.jsx(O,{type:"text",name:"allergies",value:i.allergies,onChange:v,onBlur:f,placeholder:"Введіть алергії спортсмена",maxLength:s})]}),t.jsxs(Ce,{children:[t.jsx(P,{htmlFor:"input2",children:"Захворювання"}),t.jsx(O,{type:"text",name:"diseases",value:i.diseases,onChange:v,onBlur:f,placeholder:"Введіть захворювання спортсмена",maxLength:s})]})]}),a.length===0?t.jsx(Rr,{children:"Додайте інформацію про медкомісії"}):t.jsx(Tr,{children:t.jsx(Nr,{children:t.jsx(Fr,{$hasMedicalRecords:a.length>0,children:a.map(c=>t.jsxs(Wr,{children:[t.jsxs(Or,{children:[t.jsx(Pr,{children:"Медкомісія"}),t.jsx(Hr,{onClick:()=>d(c.id),"aria-label":"Видалити запис",children:t.jsx(Sr,{})})]}),t.jsxs(_r,{children:[t.jsx(V,{children:t.jsxs(Y,{children:[t.jsx(U,{children:"Лікар: "})," ",c.doctorName]})}),t.jsx(V,{children:t.jsxs(Y,{children:[t.jsx(U,{children:"Статус здоров'я: "})," ",c.healthStatus]})}),t.jsx(V,{children:t.jsxs(Y,{children:[t.jsx(U,{children:"Медичний заклад: "})," ",c.medicalInstitution.trim()?c.medicalInstitution:"Не вказано"]})}),t.jsx(V,{children:t.jsxs(Y,{children:[t.jsx(U,{children:"Дата обстеження: "})," ",y(c.examinationDate)||"Не вказано"]})})]})]},c.id))})})}),t.jsxs(Br,{children:[t.jsxs(je,{children:[t.jsxs(J,{children:[t.jsxs(P,{children:["Лікар *",b.doctorName&&t.jsx(ye,{children:b.doctorName})]}),t.jsx(O,{type:"text",value:u.doctorName,onChange:c=>m("doctorName",c.target.value),placeholder:"Введіть ім'я лікаря",maxLength:s,$error:b.doctorName})]}),t.jsxs(J,{children:[t.jsxs(P,{children:["Статус здоров'я *",b.healthStatus&&t.jsx(ye,{children:b.healthStatus})]}),t.jsx(O,{type:"text",value:u.healthStatus,onChange:c=>m("healthStatus",c.target.value),placeholder:"Введіть статус здоров'я",maxLength:s,$error:b.healthStatus})]})]}),t.jsxs(je,{children:[t.jsxs(J,{children:[t.jsx(P,{children:"Медичний заклад"}),t.jsx(O,{type:"text",value:u.medicalInstitution,onChange:c=>m("medicalInstitution",c.target.value),placeholder:"Введіть назву медичного закладу",maxLength:s})]}),t.jsx(Lr,{children:t.jsxs(zr,{children:[t.jsx(P,{children:"Дата обстеження"}),t.jsx(pe,{value:u.examinationDate,onChange:j})]})})]})]}),t.jsx(Er,{children:t.jsx(Mr,{type:"button",onClick:n,children:"Додати"})})]})},Ur=r(xe)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,Yr=r.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,qr=r.div`
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
`,oe=r.div`
  display: flex;
  flex-direction: column;
`,ne=r.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,ie=r.input`
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
`,Jr=r.span`
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
`,Kr=r.button`
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
`,Xr=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,Zr=r.div`
  margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray};
  border: 1px dashed ${({theme:e})=>e.textGray};
  border-radius: 8px;
`,Qr=r.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,eo=r.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom: 4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,to=r.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  min-width: max-content;
  
  ${e=>!e.$hasInstitutions&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,ro=r.p`
  color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,oo=r.div`
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
`,no=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,io=r.div`
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
`,ae=r.div`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.disabledBG};
  margin-right: 10px;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,se=r.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({theme:e})=>e.textGray};
  margin-bottom: 2px;
`,le=r.p`
  font-size: 13px;
  color: ${({theme:e})=>e.textBlack};
  word-wrap: break-word;
  word-break: break-word;
`,ao=r.button`
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
`,so=({onDataUpdate:e})=>{const[i,g]=o.useState([]),[a,$]=o.useState({name:"",contacts:"",relationship:""}),[u,h]=o.useState({}),b=100;o.useEffect(()=>{const p=i.map(n=>({name:n.name,contacts:n.contacts||"",relationship:n.relationship||""}));e(p)},[i,e]);const w=()=>{const p={};return a.name.trim()||(p.name="Обов'язкове поле"),h(p),Object.keys(p).length===0},v=()=>{if(w()){const p={...a,name:a.name.trim(),contacts:a.contacts.trim(),relationship:a.relationship.trim(),id:Date.now()};g(n=>[...n,p]),$({name:"",contacts:"",relationship:""}),h({})}},f=p=>{g(n=>n.filter(d=>d.id!==p))},s=(p,n)=>{$(d=>({...d,[p]:n})),u[p]&&h(d=>{const m={...d};return delete m[p],m})};return t.jsxs(Yr,{children:[i.length===0?t.jsx(Zr,{children:"Додайте інформацію"}):t.jsx(Qr,{children:t.jsx(eo,{children:t.jsx(to,{$hasInstitutions:i.length>0,children:i.map(p=>t.jsxs(oo,{children:[t.jsxs(no,{children:[t.jsx(ro,{children:"Вказана інформація"}),t.jsx(ao,{onClick:()=>f(p.id),"aria-label":"Видалити запис",children:t.jsx(Ur,{})})]}),t.jsxs(io,{children:[t.jsx(ae,{children:t.jsxs(le,{children:[t.jsx(se,{children:"Ім'я: "})," ",p.name]})}),t.jsx(ae,{children:t.jsxs(le,{children:[t.jsx(se,{children:"Контакти: "})," ",p.contacts.trim()?p.contacts:"Не вказано"]})}),t.jsx(ae,{children:t.jsxs(le,{children:[t.jsx(se,{children:"Ступінь спорідненості: "})," ",p.relationship.trim()?p.relationship:"Не вказано"]})})]})]},p.id))})})}),t.jsxs(qr,{children:[t.jsxs(oe,{children:[t.jsxs(ne,{children:["Ім'я родича*",u.name&&t.jsx(Jr,{children:u.name})]}),t.jsx(ie,{type:"text",value:a.name,onChange:p=>s("name",p.target.value),placeholder:"Введіть ім'я",maxLength:b,$error:u.name})]}),t.jsxs(oe,{children:[t.jsx(ne,{children:"Контакти родича *ф"}),t.jsx(ie,{type:"text",value:a.contacts,onChange:p=>s("contacts",p.target.value),placeholder:"Введіть контактні дані",maxLength:b})]}),t.jsxs(oe,{children:[t.jsx(ne,{children:"Ступінь спорідненості"}),t.jsx(ie,{type:"text",value:a.relationship,onChange:p=>s("relationship",p.target.value),placeholder:"Введіть ступінь спорідненості",maxLength:b})]})]}),t.jsx(Xr,{children:t.jsx(Kr,{type:"button",onClick:v,children:"Додати"})})]})},G={mobile:"320px",tablet:"768px",desktop:"1024px"},lo=r.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  @media (min-width: ${G.tablet}) {
    align-items: flex-start;
    height: 100%;
  }
`,Ie=r.div`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${G.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${G.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }

  ${({$isSportsFacility:e})=>e&&he`
      @media (min-width: ${G.tablet}) {
       padding: 14px 0;
      }
  
      @media (min-width: ${G.desktop}) {
        padding: 14px 0;
      }
  `}
`,co=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${G.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`,po=r.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  
  @media (min-width: ${G.tablet}) {
    width: auto;
    margin-right: 3.8rem;
    margin-bottom: 0;
    justify-content: flex-start;
    align-self: center; 
  }

   @media (min-width: ${G.desktop}) {
    margin-right: 2rem;
  }
`,ho=r.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${G.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,xo=r.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,uo=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,mo=r.label`
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

  @media (min-width: ${G.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,go=r.input`
  display: none;
`,bo=r.div`
  flex: 1;
  
  @media (min-width: ${G.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center; 
  }
`,Re=r.h2`
  color: ${({theme:e})=>e.greenMain};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`,Ge=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: ${e=>e.hasphysique?"20px":"0"};
  padding-bottom: ${e=>e.hasphysique?"20px":"0"};
  @media (min-width: ${G.tablet}) {
    flex-direction: column;
  }
  
  @media (min-width: ${G.desktop}) {
    flex-direction: row;
    gap: 1.5rem;
  }
`,C=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;

${({$isUniversity:e})=>e&&he`
      @media (max-width: 1024px) {
        margin-top: 10px; 
      }

      @media (min-width: 1024px) {
        margin-top: 0;
      }
    `}
`,I=r.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,B=r.input`
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
`,fo=r.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,wo=r.button`
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
`,$o=r(bt)`
  fill: ${e=>e.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${G.tablet}) {
    width: 18px;
    height: 18px;
  }
`,de=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Se=r.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
   margin-top: ${e=>e.$hasSportInfo?"20px":"0"};
  @media (min-width: ${G.desktop}) {
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }
`,De=r.div`
  flex: 1;
  
  @media (min-width: ${G.desktop}) {
     margin-top: ${e=>e.$hasSportInfo?"0":"3.1rem"}
  }

  
`,Be=r.div`
  flex: 1;
  @media (max-width: ${G.desktop}) {
    margin-top: ${e=>e.$hasSportInfo?"20px":"0"}
  }
`,ce=r.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,E=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: ${G.desktop}) {
    flex-direction: row;
    gap: 20px;
    
    & > ${C} {
      flex: 1;
    }
  }
`,ko=r(Re)`
  margin-bottom: 1rem;
  padding-top: 10px;

  @media (min-width: ${G.desktop}) {
    padding-top: 0;
  }
`,vo=r.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:i,name:g})=>i&&g==="notes"?e.red:e.borderColor};
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
`,jo=r.div`
  margin: 20px 0;
`,yo=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${G.desktop}) {
    flex-direction: row;
    gap: 40px;
  }

`,Me=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  ${({$isSportsFacility:e})=>e&&he`
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
`;const Do=()=>{const e=o.useRef(null),i=o.useRef(null),g=ct(),{setTitle:a}=pt(),[$,u]=o.useState(null),[h,b]=o.useState(null),[w,v]=o.useState(""),[f,s]=o.useState(""),[p,n]=o.useState(""),[d,m]=o.useState(""),[j,y]=o.useState(""),[c,k]=o.useState(""),[S,M]=o.useState(""),[T,L]=o.useState(""),[D,Te]=o.useState(""),[Ne,Fe]=o.useState(""),[Pe,We]=o.useState(""),[Oe,_e]=o.useState(""),[ue,He]=o.useState(""),[me,Ae]=o.useState(""),[ge,Ve]=o.useState("");o.useState(null);const[be,Ue]=o.useState(""),[fe,Ye]=o.useState(""),[K,qe]=o.useState(""),[X,Je]=o.useState(""),[we,Ke]=o.useState(""),[Z,Xe]=o.useState(""),[Ze,Qe]=o.useState({}),[et,tt]=o.useState({allergies:"",diseases:""}),[rt,ot]=o.useState({}),[nt,it]=o.useState({}),[z,N]=o.useState({firstName:!1,lastName:!1,birthdate:!1,currentSportInstitution:!1,trainer:!1,entryDate:!1}),at=l=>{const x=l.target.files[0];if(x){u(x);const R=URL.createObjectURL(x);return b(R),()=>URL.revokeObjectURL(R)}};o.useEffect(()=>(a("Створення нового спортсмена"),()=>{h&&URL.revokeObjectURL(h)}),[a]);const st=l=>{if(l.key==="Enter"||l.key===" "){const x=document.getElementById("photo-upload");x&&x.click()}},lt=()=>{const l={firstName:!w.trim(),lastName:!f.trim(),birthdate:!d,currentSportInstitution:!K.trim(),trainer:!X.trim(),entryDate:!Z};return N(l),!Object.values(l).some(x=>x)},dt=l=>{if(l.preventDefault(),!lt()){z.currentSportInstitution||z.trainer||z.entryDate?e.current&&(e.current.open(),setTimeout(()=>{e.current.scrollIntoView({behavior:"smooth",block:"center"})},100)):setTimeout(()=>{i.current.scrollIntoView({behavior:"smooth",block:"center"})},100),Q.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});return}const x=new FormData;$&&x.append("athlete-avatar",$),x.append("firstName",w),x.append("lastName",f),x.append("patronymic",p),x.append("birthdate",d),x.append("gender",c||""),x.append("address",j||""),x.append("phone",S||""),x.append("email",T||""),x.append("socialMedia",D||""),x.append("role",ue||""),x.append("sportCategory",me||""),x.append("notes",ge||""),x.append("school",fe||""),x.append("university",be||""),x.append("currentSportInstitution",K||""),x.append("trainer",X||""),x.append("trainerContacts",we||""),x.append("entryDate",Z||""),x.append("previousEstablishments",JSON.stringify(Ze||{})),x.append("medicalInformation",JSON.stringify(rt||{})),x.append("parentsInformation",JSON.stringify(nt||{}));for(let R of x.entries())console.log(R[0]+": "+R[1]);g(ht(x)).unwrap().then(R=>{Q.success("Спортсмена успішно створено!")}).catch(R=>{Q.error(`Помилка: ${R}`)})};return t.jsx(t.Fragment,{children:t.jsx(lo,{children:t.jsxs(Ie,{children:[t.jsxs(co,{children:[t.jsx(po,{children:t.jsxs(ho,{children:[t.jsx(xo,{children:t.jsx(uo,{src:h||ft,alt:"Фото спортсмена"})}),t.jsx(mo,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:st,children:t.jsx($o,{})}),t.jsx(go,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:at})]})}),t.jsxs(bo,{ref:i,children:[t.jsx(Re,{children:"Особиста інформація"}),t.jsxs(Ge,{children:[t.jsxs(C,{children:[t.jsx(I,{htmlFor:"firstName",children:"Ім'я *"}),t.jsx(B,{id:"firstName",type:"text",placeholder:"Введіть ім'я",value:w,onChange:l=>{v(l.target.value),l.target.value.trim()&&N(x=>({...x,firstName:!1}))},isError:z.firstName})]}),t.jsxs(C,{children:[t.jsx(I,{htmlFor:"lastName",children:"Прізвище *"}),t.jsx(B,{id:"lastName",type:"text",placeholder:"Введіть прізвище",value:f,onChange:l=>{s(l.target.value),l.target.value.trim()&&N(x=>({...x,lastName:!1}))},isError:z.lastName})]}),t.jsxs(C,{children:[t.jsx(I,{htmlFor:"patronymic",children:"По батькові"}),t.jsx(B,{id:"patronymic",type:"text",placeholder:"Введіть по батькові",value:p,onChange:l=>n(l.target.value)})]})]})]})]}),t.jsxs(Se,{children:[t.jsx(De,{children:t.jsxs(ce,{children:[t.jsx(E,{children:t.jsxs(C,{children:[t.jsx(I,{htmlFor:"birthdate",children:"Дата народження *"}),t.jsx(de,{children:t.jsx(ee,{selectedDate:d,onDateChange:l=>{m(l),l&&N(x=>({...x,birthdate:!1}))},isError:z.birthdate})})]})}),t.jsx(E,{children:t.jsxs(C,{children:[t.jsx(I,{htmlFor:"address",children:"Адреса"}),t.jsx(B,{id:"address",type:"text",value:j,onChange:l=>y(l.target.value),placeholder:"Введіть адресу"})]})}),t.jsx(E,{children:t.jsx(Pt,{label:"Виберіть стать",value:c,onChange:k})})]})}),t.jsxs(Be,{children:[t.jsx(ko,{children:"Контакти"}),t.jsxs(ce,{children:[t.jsx(E,{children:t.jsxs(C,{children:[t.jsx(I,{htmlFor:"phone",children:"Телефон"}),t.jsx(B,{id:"phone",type:"tel",value:S,onChange:l=>M(l.target.value),placeholder:"Введіть номер телефону"})]})}),t.jsx(E,{children:t.jsxs(C,{children:[t.jsx(I,{htmlFor:"email",children:"Email"}),t.jsx(B,{id:"email",type:"email",value:T,onChange:l=>L(l.target.value),placeholder:"Введіть email"})]})}),t.jsx(E,{children:t.jsxs(C,{children:[t.jsx(I,{htmlFor:"socialMedia",children:"Соцмережі"}),t.jsx(B,{id:"socialMedia",type:"text",value:D,onChange:l=>Te(l.target.value),placeholder:"Введіть посилання на соцмережі"})]})})]})]})]}),t.jsx(F,{helpTooltiptitle:"Ці параметри не є обов'язковими, але вони допомагають отримати детальнішу статистику 📊",helpTooltip:"Додайте перший замір щоб відстежувати зміни спортсмена. Після створення профілю спортсмена ви зможете додавати нові заміри та повністю керувати ними 😊",title:"Фізичні дані",children:t.jsxs(Ge,{hasphysique:!0,children:[t.jsxs(C,{children:[t.jsx(I,{htmlFor:"height",children:"Зріст у м."}),t.jsx(B,{id:"height",type:"number",min:"0",max:"4",placeholder:"Введіть зріст у м.",step:"0.1",value:Ne,onChange:l=>Fe(l.target.value)})]}),t.jsxs(C,{children:[t.jsx(I,{htmlFor:"weight",children:"Вага у кг."}),t.jsx(B,{id:"weight",min:"0",max:"400",step:"0.1",placeholder:"Введіть вагу у кг.",type:"number",value:Pe,onChange:l=>We(l.target.value)})]}),t.jsxs(C,{children:[t.jsx(I,{htmlFor:"dateOfMeasurement",children:"Дата вимірювання"}),t.jsx(de,{children:t.jsx(ee,{selectedDate:Oe,onDateChange:_e})})]})]})}),t.jsx(F,{title:"Спортивна інформація",children:t.jsxs(Se,{$hasSportInfo:!0,children:[t.jsx(De,{$hasSportInfo:!0,children:t.jsxs(ce,{children:[t.jsx(E,{children:t.jsxs(C,{children:[t.jsx(I,{htmlFor:"role",children:"Роль у команді"}),t.jsx(B,{id:"role",type:"text",value:ue,onChange:l=>He(l.target.value),placeholder:"Введіть роль у команді"})]})}),t.jsx(E,{children:t.jsxs(C,{children:[t.jsx(I,{htmlFor:"sportCategory",children:"Спортивний розряд"}),t.jsx(B,{id:"sportCategory",type:"text",value:me,onChange:l=>Ae(l.target.value),placeholder:"Введіть спортивний розряд"})]})}),t.jsx(E,{children:t.jsxs(C,{children:[t.jsx(I,{htmlFor:"notes",children:"Примітки про спортсмена"}),t.jsx(vo,{id:"notes",value:ge,onChange:l=>Ve(l.target.value),placeholder:"Додайте примітки про спортсмена"})]})})]})}),t.jsx(Be,{$hasSportInfo:!0,children:t.jsx(Zt,{})})]})}),t.jsx(F,{title:"Навчальні заклади",children:t.jsx(jo,{children:t.jsxs(E,{children:[t.jsxs(C,{children:[t.jsx(I,{htmlFor:"school",children:"Школа"}),t.jsx(B,{id:"school",type:"text",placeholder:"Введіть назву школи",value:fe,onChange:l=>Ye(l.target.value)})]}),t.jsxs(C,{$isUniversity:!0,children:[t.jsx(I,{htmlFor:"university",children:"Університет"}),t.jsx(B,{id:"university",type:"text",placeholder:"Введіть назву університету",value:be,onChange:l=>Ue(l.target.value)})]})]})})}),t.jsx(F,{title:"Спортивний заклад",ref:e,children:t.jsx(Ie,{$isSportsFacility:!0,children:t.jsxs(yo,{children:[t.jsxs(Me,{$isSportsFacility:!0,children:[t.jsxs(C,{children:[t.jsx(I,{children:"Поточний спортивний заклад *"}),t.jsx(B,{type:"text",value:K,onChange:l=>{qe(l.target.value),l.target.value.trim()&&N(x=>({...x,currentSportInstitution:!1}))},placeholder:"Введіть назву закладу",isError:z.currentSportInstitution})]}),t.jsxs(C,{children:[t.jsx(I,{children:"Тренер *"}),t.jsx(B,{type:"text",value:X,onChange:l=>{Je(l.target.value),l.target.value.trim()&&N(x=>({...x,trainer:!1}))},placeholder:"Введіть ім'я тренера",isError:z.trainer})]})]}),t.jsxs(Me,{$isSportsFacility:!0,children:[t.jsxs(C,{children:[t.jsx(I,{children:"Контакти тренера"}),t.jsx(B,{type:"text",value:we,onChange:l=>Ke(l.target.value),placeholder:"Введіть контакти"})]}),t.jsxs(C,{children:[t.jsx(I,{children:"Дата вступу *"}),t.jsx(de,{children:t.jsx(ee,{selectedDate:Z,onDateChange:l=>{Xe(l),l&&N(x=>({...x,entryDate:!1}))},isError:z.entryDate})})]})]})]})})}),t.jsx(F,{title:"Минулі спортивні заклади",children:t.jsx(Gr,{onDataUpdate:Qe})}),t.jsx(F,{title:"Медична інформація",children:t.jsx(Vr,{onDataUpdate:ot,medicalData:et,setMedicalData:tt})}),t.jsx(F,{title:"Родичи спортсмена",children:t.jsx(so,{onDataUpdate:it})}),t.jsx(fo,{children:t.jsx(wo,{type:"button",onClick:dt,children:"Створити"})})]})})})};export{Do as default};
