import{r,d as o,j as t,l as ne,b as Ue}from"./index-2caf5cd4.js";import{g as se,a as qe,u as Ke,b as Xe,D as Ze,S as Je,C as Y}from"./CustomDatePicker-f657dfbb.js";import{p as Qe}from"./PlaceholderProfile-3c1b0d36.js";import{P as et}from"./PlaceholderTeam-4fc9ba85.js";const we=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6 9L12 15L18 9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),tt=o.div`
  
  margin: 20px 0;
  border: 1.7px solid ${({theme:e})=>e.greenMain};
  border-radius: 8px;

  background-color: ${({theme:e})=>e.ContainerBGColor}; 
  transition: background-color 0.3s ease;
  ${({isOpen:e})=>!e&&`
    border-radius: 8px 8px 0 0;
  `}


`,ot=o(we)`
  stroke: ${e=>e.theme.white};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
`,rt=o.button.attrs({type:"button"})`
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
`,nt=o.div`
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
`,it=o.h3`
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
`,at=o.div`
  display: flex;
  align-items: center;
`,st=o.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,dt=e=>r.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2}),r.createElement("path",{d:"M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M12 16H12.01",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),$e=o(dt)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({theme:e})=>e.white};
  transition: stroke 0.3s ease;
`,lt=o.button.attrs({type:"button"})`
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

    ${$e} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,ct=o.div`
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
`,pt=o.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
`,xt=o.div`
  font-size: 14px; 
  font-weight: 600; 
  margin-bottom: 5px; 
`,ht=({title:e,text:i})=>{const[x,a]=r.useState(!1),[w,h]=r.useState("top"),[c,b]=r.useState(null),f=r.useRef(null),k=r.useRef(null),u=()=>{if(!k.current||!f.current||!x)return;const s=k.current.getBoundingClientRect(),p=f.current.getBoundingClientRect(),n=window.innerWidth,d=p.height,m=p.width,G=s.top,j=s.bottom,l=s.left;s.right;const $=s.width;s.height;const I=l+$/2,z=G>d+15?"top":"bottom";h(z);let E,D;z==="top"?E=G-d-12:E=j+12,D=I-m*.8,D<10&&(D=10),D+m>n-10&&(D=n-m-10),b({top:E,left:D})};return r.useEffect(()=>{x&&setTimeout(u,0)},[x]),r.useEffect(()=>{if(x)return window.addEventListener("scroll",u),window.addEventListener("resize",u),()=>{window.removeEventListener("scroll",u),window.removeEventListener("resize",u)}},[x]),t.jsxs(lt,{ref:k,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:()=>a(!x),children:[t.jsx($e,{}),t.jsx(ct,{ref:f,visible:x,placement:w,tooltipPosition:c,children:t.jsxs(pt,{children:[e&&t.jsx(xt,{children:e}),i]})})]})},L=({children:e,helpTooltiptitle:i,helpTooltip:x,title:a,top:w,left:h})=>{const[c,b]=r.useState(!1),[f,k]=r.useState(!1),u=r.useRef(null),s=r.useRef(null),p=r.useRef(!1),n=()=>{b(d=>(f||k(!0),!d))};return r.useEffect(()=>{const d=new IntersectionObserver(([m])=>{!f&&m.isIntersecting&&!p.current&&m.intersectionRatio>=1&&(setTimeout(()=>{b(!0)},200),p.current=!0)},{threshold:1,rootMargin:"0px 0px -100px 0px"});return u.current&&d.observe(u.current),()=>{u.current&&d.unobserve(u.current)}},[f]),r.useEffect(()=>{s.current&&(c?s.current.removeAttribute("inert"):s.current.setAttribute("inert",""))},[c]),t.jsxs(tt,{ref:u,isOpen:c,children:[t.jsxs(rt,{onClick:n,role:"button",tabIndex:0,children:[a&&t.jsx(it,{children:a}),t.jsxs(at,{children:[x&&t.jsx(st,{onClick:d=>d.stopPropagation(),children:t.jsx(ht,{title:i,text:x,top:w,left:h})}),t.jsx(ot,{isOpen:c})]})]}),t.jsx(nt,{ref:s,isOpen:c,children:e})]})},ut=o.div`
  position: relative;
  width: 100%;
`,mt=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,gt=o.span`
  color: ${({selectedValue:e,theme:i})=>e===""?i.textBlack:e==="Чоловік"||e==="Жінка"?i.greenMain:i.textGray}; 
  font-family: 'Inter Tight', sans-serif;
`,bt=o.button.attrs({type:"button"})`
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
`,ft=o.div`
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
`,U=o.button.attrs({type:"button"})`
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
`,wt=o(we)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) ${e=>e.open?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
  width: 22px;
  height: auto;
`,$t=({label:e,value:i,onChange:x})=>{const[a,w]=r.useState(!1),[h,c]=r.useState(i||""),b=r.useRef(null),f=()=>{w(!a)},k=s=>{c(s),x(s),w(!1)},u=s=>{b.current&&!b.current.contains(s.target)&&w(!1)};return r.useEffect(()=>(document.addEventListener("click",u),()=>{document.removeEventListener("click",u)}),[]),t.jsxs(ut,{ref:b,children:[e&&t.jsx(mt,{onClick:f,children:e}),t.jsxs(bt,{onClick:f,children:[t.jsx(gt,{selectedValue:h,children:h||"Не вибрано"}),t.jsx(wt,{open:a})]}),a&&t.jsxs(ft,{children:[t.jsx(U,{className:h==="Чоловік"?"selected":"",onClick:()=>k("Чоловік"),children:"Чоловік"}),t.jsx(U,{className:h==="Жінка"?"selected":"",onClick:()=>k("Жінка"),children:"Жінка"}),t.jsx(U,{className:h===""?"selected":"",onClick:()=>k(""),children:"Не вибрано"})]})]})},kt=o.div`
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
`,jt=o.div`
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
`,vt=o.button`
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
`,yt=o.div`
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
`,Ct=o.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,Gt=o.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,It=o.div`
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
`,Bt=o.div`
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
`,Dt=o.div`
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  flex: 1; 
  overflow: hidden; 
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`,St=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,Mt=o.div`
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
`,Et=o.img`
  border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,zt=()=>{const[e,i]=r.useState(null),x=r.useRef(null),a=r.useRef({}),w=[{id:1,name:"Динамо"},{id:2,name:"Шахтар"},{id:3,name:"Зоря"},{id:4,name:"Металіст"},{id:5,name:"Верес"},{id:6,name:"Олександрія"},{id:7,name:"Чорноморець"},{id:8,name:"Карпати"},{id:9,name:"Дніпро"},{id:10,name:"Десна"}],h=r.useCallback(c=>{e&&e.id===c.id?(console.log("Team deselected:",c),i(null),a.current[c.id]&&a.current[c.id].blur()):(console.log("Team selected:",c),i(c))},[e]);return r.useEffect(()=>{if(!x.current)return;const c={root:x.current,rootMargin:"0px",threshold:.1},b=u=>{u.forEach(s=>{s.target.classList&&(s.isIntersecting?(s.target.classList.add("visible"),s.target.classList.remove("hidden")):(s.target.classList.add("hidden"),s.target.classList.remove("visible")))})},f=new IntersectionObserver(b,c);return document.querySelectorAll('[id^="team-"]').forEach(u=>{f.observe(u),u.classList.add("hidden")}),()=>f.disconnect()},[]),t.jsx(Dt,{children:t.jsxs(It,{children:[t.jsx(Mt,{children:t.jsx(St,{children:t.jsx("h2",{children:"Команда спортсмена"})})}),t.jsx(Bt,{ref:x,children:w.length>0?w.map(c=>t.jsx(kt,{className:"team-item",id:`team-${c.id}`,children:t.jsxs(vt,{ref:b=>a.current[c.id]=b,isSelected:e&&e.id===c.id,onClick:()=>h(c),type:"button",children:[t.jsx(yt,{children:t.jsx(Et,{loading:"lazy",src:et})}),t.jsx(Ct,{children:t.jsx(Gt,{children:c.name})})]})},c.id)):t.jsx(jt,{children:"Команд не знайдено"})})]})})},Lt=o(Ze)`
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
`,Tt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 8px 4px;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 12px;
`,Rt=o.select`
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


`,Nt=o.select`
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

`,Ft=o.div`
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
`,Wt=(e,i,x=1)=>{let a=[];for(let w=e;w<=i;w+=x)a.push(w);return a},re=({value:e,onChange:i,placeholder:x="Оберіть дату",hasError:a=!1,minDate:w,maxDate:h})=>{const c=d=>{if(!d)return null;try{const m=new Date(d);return isNaN(m.getTime())?null:m}catch{return null}},[b,f]=r.useState(()=>c(e));r.useEffect(()=>{f(c(e))},[e]);const u=Wt(1900,se(new Date)),s=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],p=d=>{if(f(d),d){const m=d.getFullYear(),G=String(d.getMonth()+1).padStart(2,"0"),j=String(d.getDate()).padStart(2,"0");i(`${m}-${G}-${j}`)}else i("")};let n=c(w);return n&&(n=qe(n,0)),t.jsx(Ft,{children:t.jsx(Lt,{selected:b,onChange:p,dateFormat:"dd.MM.yyyy",placeholderText:x,locale:Ke,$error:a,minDate:n,maxDate:h?c(h):void 0,renderCustomHeader:({date:d,changeYear:m,changeMonth:G})=>t.jsxs(Tt,{children:[t.jsx(Rt,{value:se(d),onChange:j=>{m(parseInt(j.target.value))},children:u.map(j=>t.jsx("option",{value:j,children:j},j))}),t.jsx(Nt,{value:s[Xe(d)],onChange:j=>{G(s.indexOf(j.target.value))},children:s.map((j,l)=>t.jsx("option",{value:j,children:j},l))})]})})})},ie=e=>r.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M10 12V17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M14 12V17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M4 7H20",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),_t=o(ie)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,Pt=o.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,Ot=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,de=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`,A=o.div`
  display: flex;
  flex-direction: column;
`,R=o.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,q=o.input`
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
`,Ht=o.span`
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
`,At=o.button`
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

`,Vt=o.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,Yt=o.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,le=o(A)`
  flex: 1;
`,Ut=o.div`
margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray} ;
  border: 1px dashed ${({theme:e})=>e.textGray} ;
  border-radius: 8px;
`,qt=o.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid  ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,Kt=o.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom:4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,Xt=o.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  
  min-width:  max-content;
  
  ${e=>!e.$hasInstitutions&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,Zt=o.p`
 color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,Jt=o.div`
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
`,Qt=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,eo=o.div`
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
`,F=o.div`
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
`,to=o.button`

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

`,oo=e=>r.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 ",stroke:"none",fillRule:"evenodd"})),ke=o(oo)`
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: ${({theme:e})=>e.red};
  transition: stroke 0.3s ease;
`,ro=o.button.attrs({type:"button"})`
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

    ${ke} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,no=o.div`
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
`,io=o.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
  /* color: ${({theme:e})=>e.red}; */
`,ao=o.div`
  font-size: 14px; 
  font-weight: 700; 
  margin-bottom: 5px; 
  color:  ${({theme:e})=>e.red};
`,so=({title:e,text:i})=>{const[x,a]=r.useState(!1),[w,h]=r.useState("top"),[c,b]=r.useState(null),f=r.useRef(null),k=r.useRef(null),u=()=>{if(!k.current||!f.current||!x)return;const s=k.current.getBoundingClientRect(),p=f.current.getBoundingClientRect(),n=window.innerWidth,d=p.height,m=p.width,G=s.top,j=s.bottom,l=s.left;s.right;const $=s.width;s.height;const I=l+$/2,z=G>d+15?"top":"bottom";h(z);let E,D;z==="top"?E=G-d-12:E=j+12,D=I-m*.8,D<10&&(D=10),D+m>n-10&&(D=n-m-10),b({top:E,left:D})};return r.useEffect(()=>{x&&setTimeout(u,0)},[x]),r.useEffect(()=>{if(x)return window.addEventListener("scroll",u),window.addEventListener("resize",u),()=>{window.removeEventListener("scroll",u),window.removeEventListener("resize",u)}},[x]),t.jsxs(ro,{ref:k,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:()=>a(!x),children:[t.jsx(ke,{}),t.jsx(no,{ref:f,visible:x,placement:w,tooltipPosition:c,children:t.jsxs(io,{children:[e&&t.jsx(ao,{children:e}),i]})})]})},lo=({onDataUpdate:e})=>{const[i,x]=r.useState([]),[a,w]=r.useState({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),[h,c]=r.useState({}),b=100;r.useEffect(()=>{const n=i.map(d=>({previousCoach:d.coachName,previousInstitution:d.institution||"",coachContacts:d.coachContacts||"",entryDate:d.entryDate||"",exitDate:d.exitDate||""}));e(n)},[i,e]);const f=()=>{const n={};if(a.coachName.trim()||(n.coachName="Ім'я тренера є обов'язковим"),a.entryDate&&a.exitDate){const d=new Date(a.entryDate),G=new Date(a.exitDate).getTime()-d.getTime();Math.ceil(G/(1e3*3600*24))<0&&(n.exitDate="Дата виходу має бути не раніше дати вступу")}return c(n),Object.keys(n).length===0},k=()=>{if(f()){const n={...a,coachName:a.coachName.trim(),institution:a.institution.trim(),coachContacts:a.coachContacts.trim(),id:Date.now()};x(d=>[...d,n]),w({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),c({})}},u=n=>{x(d=>d.filter(m=>m.id!==n))},s=(n,d)=>{if(w(m=>({...m,[n]:d})),h[n]&&c(m=>{const G={...m};return delete G[n],G}),n==="entryDate"&&a.exitDate){const m=new Date(d),j=new Date(a.exitDate).getTime()-m.getTime();Math.ceil(j/(1e3*3600*24))<0?c($=>({...$,exitDate:"Дата виходу з закладу має бути не раніше дати вступу"})):h.exitDate&&c($=>{const I={...$};return delete I.exitDate,I})}},p=n=>{if(!n)return"";try{const d=new Date(n);return isNaN(d.getTime())?n:d.toLocaleDateString("uk-UA")}catch{return n}};return t.jsxs(Pt,{children:[i.length===0?t.jsx(Ut,{children:"Додайте інформацію"}):t.jsx(qt,{children:t.jsx(Kt,{children:t.jsx(Xt,{$hasInstitutions:i.length>0,children:i.map(n=>t.jsxs(Jt,{children:[t.jsxs(Qt,{children:[t.jsx(Zt,{children:"Вказана інформація"}),t.jsx(to,{onClick:()=>u(n.id),"aria-label":"Видалити заклад",children:t.jsx(_t,{})})]}),t.jsxs(eo,{children:[t.jsx(F,{children:t.jsxs(_,{children:[t.jsx(W,{children:"Тренер: "})," ",n.coachName]})}),t.jsx(F,{children:t.jsxs(_,{children:[t.jsx(W,{children:"Заклад: "}),n.institution.trim()?n.institution:"Не вказано"]})}),t.jsx(F,{children:t.jsxs(_,{children:[t.jsx(W,{children:"Контакти: "})," ",n.coachContacts.trim()?n.coachContacts:"Не вказано"]})}),t.jsxs(F,{children:[t.jsx(W,{children:"Період:"}),t.jsxs(_,{children:[p(n.entryDate)||"Не вказано"," ",t.jsx("span",{children:" - "}),p(n.exitDate)||"Не вказано"]})]})]})]},n.id))})})}),t.jsxs(Ot,{children:[t.jsxs(de,{children:[t.jsxs(A,{children:[t.jsxs(R,{children:["Минулий Тренер *",h.coachName&&t.jsx(Ht,{children:h.coachName})]}),t.jsx(q,{type:"text",value:a.coachName,onChange:n=>s("coachName",n.target.value),placeholder:"Введіть ім'я тренера",maxLength:b,$error:h.coachName})]}),t.jsxs(A,{children:[t.jsx(R,{children:"Минулий спортивний заклад"}),t.jsx(q,{type:"text",value:a.institution,onChange:n=>s("institution",n.target.value),placeholder:"Введіть назву закладу",maxLength:b})]})]}),t.jsxs(de,{children:[t.jsxs(A,{children:[t.jsx(R,{children:"Контакти тренера"}),t.jsx(q,{type:"text",value:a.coachContacts,onChange:n=>s("coachContacts",n.target.value),placeholder:"Введіть контакти тренера",maxLength:b})]}),t.jsxs(Yt,{children:[t.jsxs(le,{children:[t.jsx(R,{children:"Дата вступу"}),t.jsx(re,{value:a.entryDate,onChange:n=>s("entryDate",n),placeholder:"Оберіть дату вступу"})]}),t.jsxs(le,{children:[t.jsxs(R,{children:["Дата виходу",h.exitDate&&t.jsx(so,{title:"Неправильно введені дані",text:h.exitDate})]}),t.jsx(re,{value:a.exitDate,onChange:n=>s("exitDate",n),placeholder:"Оберіть дату виходу",minDate:a.entryDate,hasError:!!h.exitDate})]})]})]})]}),t.jsx(Vt,{children:t.jsx(At,{type:"button",onClick:k,children:"Додати"})})]})},co=o(ie)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,po=o.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,xo=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,ce=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`,V=o.div`
  display: flex;
  flex-direction: column;
`,T=o.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,N=o.input`
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
`,pe=o.span`
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
`,ho=o.button`
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
`,uo=o.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,mo=o.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,go=o(V)`
  flex: 1;
`,bo=o.div`
  margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray};
  border: 1px dashed ${({theme:e})=>e.textGray};
  border-radius: 8px;
`,fo=o.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,wo=o.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom: 4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,$o=o.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  min-width: max-content;
  
  ${e=>!e.$hasMedicalRecords&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,ko=o.p`
  color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,jo=o.div`
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
`,vo=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,yo=o.div`
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
`,P=o.div`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.disabledBG};
  margin-right: 10px;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,O=o.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({theme:e})=>e.textGray};
  margin-bottom: 2px;
`,H=o.p`
  font-size: 13px;
  color: ${({theme:e})=>e.textBlack};
  word-wrap: break-word;
  word-break: break-word;
`,Co=o.button`
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
`,Go=o.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid  ${e=>e.theme.greenMain};
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,xe=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,Io=({onDataUpdate:e,medicalData:i,setMedicalData:x})=>{const[a,w]=r.useState([]),[h,c]=r.useState({doctorName:"",healthStatus:"",medicalInstitution:"",examinationDate:""}),[b,f]=r.useState({}),k=l=>{const{name:$,value:I}=l.target;x(S=>({...S,[$]:I.trimStart()}))},u=l=>{const{name:$,value:I}=l.target;x(S=>({...S,[$]:I.trim()}))},s=100;r.useEffect(()=>{const l=a.map($=>({doctorName:$.doctorName,healthStatus:$.healthStatus||"",medicalInstitution:$.medicalInstitution||"",examinationDate:$.examinationDate||""}));e(l)},[a,e]);const p=()=>{const l={};return h.doctorName.trim()||(l.doctorName="Ім'я лікаря є обов'язковим"),h.healthStatus.trim()||(l.healthStatus="Статус здоров'я є обов'язковим"),f(l),Object.keys(l).length===0},n=()=>{if(p()){const l={...h,doctorName:h.doctorName.trim(),healthStatus:h.healthStatus.trim(),medicalInstitution:h.medicalInstitution.trim(),id:Date.now()};w($=>[...$,l]),c({doctorName:"",healthStatus:"",medicalInstitution:"",examinationDate:""}),f({})}},d=l=>{w($=>$.filter(I=>I.id!==l))},m=(l,$)=>{c(I=>({...I,[l]:$})),b[l]&&f(I=>{const S={...I};return delete S[l],S})},G=l=>{m("examinationDate",l)},j=l=>{if(!l)return"";try{const $=new Date(l);return isNaN($.getTime())?l:$.toLocaleDateString("uk-UA")}catch{return l}};return t.jsxs(po,{children:[t.jsxs(Go,{children:[t.jsxs(xe,{children:[t.jsx(T,{htmlFor:"input1",children:"Алергії"}),t.jsx(N,{type:"text",name:"allergies",value:i.allergies,onChange:k,onBlur:u,placeholder:"Введіть алергії спортсмена",maxLength:s})]}),t.jsxs(xe,{children:[t.jsx(T,{htmlFor:"input2",children:"Захворювання"}),t.jsx(N,{type:"text",name:"diseases",value:i.diseases,onChange:k,onBlur:u,placeholder:"Введіть захворювання спортсмена",maxLength:s})]})]}),a.length===0?t.jsx(bo,{children:"Додайте інформацію про медкомісії"}):t.jsx(fo,{children:t.jsx(wo,{children:t.jsx($o,{$hasMedicalRecords:a.length>0,children:a.map(l=>t.jsxs(jo,{children:[t.jsxs(vo,{children:[t.jsx(ko,{children:"Медкомісія"}),t.jsx(Co,{onClick:()=>d(l.id),"aria-label":"Видалити запис",children:t.jsx(co,{})})]}),t.jsxs(yo,{children:[t.jsx(P,{children:t.jsxs(H,{children:[t.jsx(O,{children:"Лікар: "})," ",l.doctorName]})}),t.jsx(P,{children:t.jsxs(H,{children:[t.jsx(O,{children:"Статус здоров'я: "})," ",l.healthStatus]})}),t.jsx(P,{children:t.jsxs(H,{children:[t.jsx(O,{children:"Медичний заклад: "})," ",l.medicalInstitution.trim()?l.medicalInstitution:"Не вказано"]})}),t.jsx(P,{children:t.jsxs(H,{children:[t.jsx(O,{children:"Дата обстеження: "})," ",j(l.examinationDate)||"Не вказано"]})})]})]},l.id))})})}),t.jsxs(xo,{children:[t.jsxs(ce,{children:[t.jsxs(V,{children:[t.jsxs(T,{children:["Лікар *",b.doctorName&&t.jsx(pe,{children:b.doctorName})]}),t.jsx(N,{type:"text",value:h.doctorName,onChange:l=>m("doctorName",l.target.value),placeholder:"Введіть ім'я лікаря",maxLength:s,$error:b.doctorName})]}),t.jsxs(V,{children:[t.jsxs(T,{children:["Статус здоров'я *",b.healthStatus&&t.jsx(pe,{children:b.healthStatus})]}),t.jsx(N,{type:"text",value:h.healthStatus,onChange:l=>m("healthStatus",l.target.value),placeholder:"Введіть статус здоров'я",maxLength:s,$error:b.healthStatus})]})]}),t.jsxs(ce,{children:[t.jsxs(V,{children:[t.jsx(T,{children:"Медичний заклад"}),t.jsx(N,{type:"text",value:h.medicalInstitution,onChange:l=>m("medicalInstitution",l.target.value),placeholder:"Введіть назву медичного закладу",maxLength:s})]}),t.jsx(mo,{children:t.jsxs(go,{children:[t.jsx(T,{children:"Дата обстеження"}),t.jsx(re,{value:h.examinationDate,onChange:G})]})})]})]}),t.jsx(uo,{children:t.jsx(ho,{type:"button",onClick:n,children:"Додати"})})]})},Bo=o(ie)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,Do=o.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,So=o.div`
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
`,K=o.div`
  display: flex;
  flex-direction: column;
`,X=o.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,Z=o.input`
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
`,Mo=o.span`
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
`,Eo=o.button`
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
`,zo=o.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,Lo=o.div`
  margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray};
  border: 1px dashed ${({theme:e})=>e.textGray};
  border-radius: 8px;
`,To=o.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,Ro=o.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom: 4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,No=o.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  min-width: max-content;
  
  ${e=>!e.$hasInstitutions&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,Fo=o.p`
  color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,Wo=o.div`
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
`,_o=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,Po=o.div`
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
`,J=o.div`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.disabledBG};
  margin-right: 10px;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,Q=o.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({theme:e})=>e.textGray};
  margin-bottom: 2px;
`,ee=o.p`
  font-size: 13px;
  color: ${({theme:e})=>e.textBlack};
  word-wrap: break-word;
  word-break: break-word;
`,Oo=o.button`
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
`,Ho=({onDataUpdate:e})=>{const[i,x]=r.useState([]),[a,w]=r.useState({name:"",contacts:"",relationship:""}),[h,c]=r.useState({}),b=100;r.useEffect(()=>{const p=i.map(n=>({name:n.name,contacts:n.contacts||"",relationship:n.relationship||""}));e(p)},[i,e]);const f=()=>{const p={};return a.name.trim()||(p.name="Обов'язкове поле"),c(p),Object.keys(p).length===0},k=()=>{if(f()){const p={...a,name:a.name.trim(),contacts:a.contacts.trim(),relationship:a.relationship.trim(),id:Date.now()};x(n=>[...n,p]),w({name:"",contacts:"",relationship:""}),c({})}},u=p=>{x(n=>n.filter(d=>d.id!==p))},s=(p,n)=>{w(d=>({...d,[p]:n})),h[p]&&c(d=>{const m={...d};return delete m[p],m})};return t.jsxs(Do,{children:[i.length===0?t.jsx(Lo,{children:"Додайте інформацію"}):t.jsx(To,{children:t.jsx(Ro,{children:t.jsx(No,{$hasInstitutions:i.length>0,children:i.map(p=>t.jsxs(Wo,{children:[t.jsxs(_o,{children:[t.jsx(Fo,{children:"Вказана інформація"}),t.jsx(Oo,{onClick:()=>u(p.id),"aria-label":"Видалити запис",children:t.jsx(Bo,{})})]}),t.jsxs(Po,{children:[t.jsx(J,{children:t.jsxs(ee,{children:[t.jsx(Q,{children:"Ім'я: "})," ",p.name]})}),t.jsx(J,{children:t.jsxs(ee,{children:[t.jsx(Q,{children:"Контакти: "})," ",p.contacts.trim()?p.contacts:"Не вказано"]})}),t.jsx(J,{children:t.jsxs(ee,{children:[t.jsx(Q,{children:"Ступінь спорідненості: "})," ",p.relationship.trim()?p.relationship:"Не вказано"]})})]})]},p.id))})})}),t.jsxs(So,{children:[t.jsxs(K,{children:[t.jsxs(X,{children:["Ім'я родича*",h.name&&t.jsx(Mo,{children:h.name})]}),t.jsx(Z,{type:"text",value:a.name,onChange:p=>s("name",p.target.value),placeholder:"Введіть ім'я",maxLength:b,$error:h.name})]}),t.jsxs(K,{children:[t.jsx(X,{children:"Контакти родича"}),t.jsx(Z,{type:"text",value:a.contacts,onChange:p=>s("contacts",p.target.value),placeholder:"Введіть контактні дані",maxLength:b})]}),t.jsxs(K,{children:[t.jsx(X,{children:"Ступінь спорідненості"}),t.jsx(Z,{type:"text",value:a.relationship,onChange:p=>s("relationship",p.target.value),placeholder:"Введіть ступінь спорідненості",maxLength:b})]})]}),t.jsx(zo,{children:t.jsx(Eo,{type:"button",onClick:k,children:"Додати"})})]})},C={mobile:"320px",tablet:"768px",desktop:"1024px"},Ao=o.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  @media (min-width: ${C.tablet}) {
    align-items: flex-start;
    height: 100%;
  }
`,he=o.div`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${C.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${C.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }

  ${({$isSportsFacility:e})=>e&&ne`
      @media (min-width: ${C.tablet}) {
       padding: 14px 0;
      }
  
      @media (min-width: ${C.desktop}) {
        padding: 14px 0;
      }
  `}
`,Vo=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${C.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`,Yo=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  
  @media (min-width: ${C.tablet}) {
    width: auto;
    margin-right: 3.8rem;
    margin-bottom: 0;
    justify-content: flex-start;
    align-self: center; 
  }

   @media (min-width: ${C.desktop}) {
    margin-right: 2rem;
  }
`,Uo=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${C.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,qo=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,Ko=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Xo=o.label`
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

  @media (min-width: ${C.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,Zo=o.input`
  display: none;
`,Jo=o.div`
  flex: 1;
  
  @media (min-width: ${C.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center; 
  }
`,je=o.h2`
  color: ${({theme:e})=>e.greenMain};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`,ue=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: ${e=>e.hasphysique?"20px":"0"};
  padding-bottom: ${e=>e.hasphysique?"20px":"0"};
  @media (min-width: ${C.tablet}) {
    flex-direction: column;
  }
  
  @media (min-width: ${C.desktop}) {
    flex-direction: row;
    gap: 1.5rem;
  }
`,v=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;

${({$isUniversity:e})=>e&&ne`
      @media (max-width: 1024px) {
        margin-top: 10px; 
      }

      @media (min-width: 1024px) {
        margin-top: 0;
      }
    `}
`,y=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,B=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:i,name:x})=>i&&x==="username"?e.red:e.borderColor};
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
`,Qo=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,er=o.button`
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
`,tr=o(Je)`
  fill: ${e=>e.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${C.tablet}) {
    width: 18px;
    height: 18px;
  }
`,te=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,me=o.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
   margin-top: ${e=>e.$hasSportInfo?"20px":"0"};
  @media (min-width: ${C.desktop}) {
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }
`,ge=o.div`
  flex: 1;
  
  @media (min-width: ${C.desktop}) {
     margin-top: ${e=>e.$hasSportInfo?"0":"3.1rem"}
  }

  
`,be=o.div`
  flex: 1;
  @media (max-width: ${C.desktop}) {
    margin-top: ${e=>e.$hasSportInfo?"20px":"0"}
  }
`,oe=o.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,M=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: ${C.desktop}) {
    flex-direction: row;
    gap: 20px;
    
    & > ${v} {
      flex: 1;
    }
  }
`,or=o(je)`
  margin-bottom: 1rem;
  padding-top: 10px;

  @media (min-width: ${C.desktop}) {
    padding-top: 0;
  }
`,rr=o.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:i,name:x})=>i&&x==="notes"?e.red:e.borderColor};
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
`,nr=o.div`
  margin: 20px 0;
`,ir=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${C.desktop}) {
    flex-direction: row;
    gap: 40px;
  }

`,fe=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  ${({$isSportsFacility:e})=>e&&ne`
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
`;const hr=()=>{const{setTitle:e}=Ue(),[i,x]=r.useState(""),[a,w]=r.useState(""),[h,c]=r.useState(""),[b,f]=r.useState(""),[k,u]=r.useState(""),[s,p]=r.useState(""),[n,d]=r.useState(""),[m,G]=r.useState(""),[j,l]=r.useState(""),[$,I]=r.useState(""),[S,z]=r.useState(""),[E,D]=r.useState(""),[ve,ye]=r.useState(""),[Ce,Ge]=r.useState(""),[Ie,Be]=r.useState("");r.useState(null);const[De,Se]=r.useState(""),[Me,Ee]=r.useState(""),[ze,Le]=r.useState(""),[Te,Re]=r.useState(""),[Ne,Fe]=r.useState(""),[We,_e]=r.useState(null),[ar,Pe]=r.useState({}),[Oe,He]=r.useState({allergies:"",diseases:""}),[sr,Ae]=r.useState({}),[dr,Ve]=r.useState({});r.useEffect(()=>{e("Створення нового спортсмена")},[e]);const Ye=g=>{if(g.key==="Enter"||g.key===" "){const ae=document.getElementById("photo-upload");ae&&ae.click()}};return t.jsx(t.Fragment,{children:t.jsx(Ao,{children:t.jsxs(he,{children:[t.jsxs(Vo,{children:[t.jsx(Yo,{children:t.jsxs(Uo,{children:[t.jsx(qo,{children:t.jsx(Ko,{src:Qe,alt:"Фото спортсмена"})}),t.jsx(Xo,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:Ye,children:t.jsx(tr,{})}),t.jsx(Zo,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp"})]})}),t.jsxs(Jo,{children:[t.jsx(je,{children:"Особиста інформація"}),t.jsxs(ue,{children:[t.jsxs(v,{children:[t.jsx(y,{htmlFor:"firstName",children:"Ім'я *"}),t.jsx(B,{id:"firstName",type:"text",placeholder:"Введіть ім'я",value:i,onChange:g=>x(g.target.value)})]}),t.jsxs(v,{children:[t.jsx(y,{htmlFor:"lastName",children:"Прізвище *"}),t.jsx(B,{id:"lastName",type:"text",placeholder:"Введіть прізвище",value:a,onChange:g=>w(g.target.value)})]}),t.jsxs(v,{children:[t.jsx(y,{htmlFor:"patronymic",children:"По батькові"}),t.jsx(B,{id:"patronymic",type:"text",placeholder:"Введіть по батькові",value:h,onChange:g=>c(g.target.value)})]})]})]})]}),t.jsxs(me,{children:[t.jsx(ge,{children:t.jsxs(oe,{children:[t.jsx(M,{children:t.jsxs(v,{children:[t.jsx(y,{htmlFor:"birthdate",children:"Дата народження *"}),t.jsx(te,{children:t.jsx(Y,{selectedDate:b,onDateChange:f})})]})}),t.jsx(M,{children:t.jsxs(v,{children:[t.jsx(y,{htmlFor:"address",children:"Адреса"}),t.jsx(B,{id:"address",type:"text",value:k,onChange:g=>u(g.target.value),placeholder:"Введіть адресу"})]})}),t.jsx(M,{children:t.jsx($t,{label:"Виберіть стать",value:s,onChange:p})})]})}),t.jsxs(be,{children:[t.jsx(or,{children:"Контакти"}),t.jsxs(oe,{children:[t.jsx(M,{children:t.jsxs(v,{children:[t.jsx(y,{htmlFor:"phone",children:"Телефон"}),t.jsx(B,{id:"phone",type:"tel",value:n,onChange:g=>d(g.target.value),placeholder:"Введіть номер телефону"})]})}),t.jsx(M,{children:t.jsxs(v,{children:[t.jsx(y,{htmlFor:"email",children:"Email"}),t.jsx(B,{id:"email",type:"email",value:m,onChange:g=>G(g.target.value),placeholder:"Введіть email"})]})}),t.jsx(M,{children:t.jsxs(v,{children:[t.jsx(y,{htmlFor:"socialMedia",children:"Соцмережі"}),t.jsx(B,{id:"socialMedia",type:"text",value:j,onChange:g=>l(g.target.value),placeholder:"Введіть посилання на соцмережі"})]})})]})]})]}),t.jsx(L,{helpTooltiptitle:"Ці параметри не є обов'язковими, але вони допомагають отримати детальнішу статистику 📊",helpTooltip:"Додайте перший замір щоб відстежувати зміни спортсмена. Після створення профілю спортсмена ви зможете додавати нові заміри та повністю керувати ними 😊",title:"Фізичні дані",children:t.jsxs(ue,{hasphysique:!0,children:[t.jsxs(v,{children:[t.jsx(y,{htmlFor:"height",children:"Зріст у м."}),t.jsx(B,{id:"height",type:"number",min:"0",max:"4",placeholder:"Введіть зріст у м.",step:"0.1",value:$,onChange:g=>I(g.target.value)})]}),t.jsxs(v,{children:[t.jsx(y,{htmlFor:"weight",children:"Вага у кг."}),t.jsx(B,{id:"weight",min:"0",max:"400",step:"0.1",placeholder:"Введіть вагу у кг.",type:"number",value:S,onChange:g=>z(g.target.value)})]}),t.jsxs(v,{children:[t.jsx(y,{htmlFor:"dateOfMeasurement",children:"Дата вимірювання"}),t.jsx(te,{children:t.jsx(Y,{selectedDate:E,onDateChange:D})})]})]})}),t.jsx(L,{title:"Спортивна інформація",children:t.jsxs(me,{$hasSportInfo:!0,children:[t.jsx(ge,{$hasSportInfo:!0,children:t.jsxs(oe,{children:[t.jsx(M,{children:t.jsxs(v,{children:[t.jsx(y,{htmlFor:"role",children:"Роль у команді"}),t.jsx(B,{id:"role",type:"text",value:ve,onChange:g=>ye(g.target.value),placeholder:"Введіть роль у команді"})]})}),t.jsx(M,{children:t.jsxs(v,{children:[t.jsx(y,{htmlFor:"sportCategory",children:"Спортивний розряд"}),t.jsx(B,{id:"sportCategory",type:"text",value:Ce,onChange:g=>Ge(g.target.value),placeholder:"Введіть спортивний розряд"})]})}),t.jsx(M,{children:t.jsxs(v,{children:[t.jsx(y,{htmlFor:"notes",children:"Примітки про спортсмена"}),t.jsx(rr,{id:"notes",value:Ie,onChange:g=>Be(g.target.value),placeholder:"Додайте примітки про спортсмена"})]})})]})}),t.jsx(be,{$hasSportInfo:!0,children:t.jsx(zt,{})})]})}),t.jsx(L,{title:"Навчальні заклади",children:t.jsx(nr,{children:t.jsxs(M,{children:[t.jsxs(v,{children:[t.jsx(y,{htmlFor:"school",children:"Школа"}),t.jsx(B,{id:"school",type:"text",placeholder:"Введіть назву школи",value:Me,onChange:g=>Ee(g.target.value)})]}),t.jsxs(v,{$isUniversity:!0,children:[t.jsx(y,{htmlFor:"university",children:"Університет"}),t.jsx(B,{id:"university",type:"text",placeholder:"Введіть назву університету",value:De,onChange:g=>Se(g.target.value)})]})]})})}),t.jsx(L,{title:"Спортивний заклад",children:t.jsx(he,{$isSportsFacility:!0,children:t.jsxs(ir,{children:[t.jsxs(fe,{$isSportsFacility:!0,children:[t.jsxs(v,{children:[t.jsx(y,{children:"Поточний спортивний заклад"}),t.jsx(B,{type:"text",value:ze,onChange:g=>Le(g.target.value),placeholder:"Введіть назву закладу"})]}),t.jsxs(v,{children:[t.jsx(y,{children:"Тренер"}),t.jsx(B,{type:"text",value:Te,onChange:g=>Re(g.target.value),placeholder:"Введіть ім'я тренера"})]})]}),t.jsxs(fe,{$isSportsFacility:!0,children:[t.jsxs(v,{children:[t.jsx(y,{children:"Контакти тренера"}),t.jsx(B,{type:"text",value:Ne,onChange:g=>Fe(g.target.value),placeholder:"Введіть контакти"})]}),t.jsxs(v,{children:[t.jsx(y,{children:"Дата вступу"}),t.jsx(te,{children:t.jsx(Y,{selectedDate:We,onDateChange:_e})})]})]})]})})}),t.jsx(L,{title:"Минулі спортивні заклади",children:t.jsx(lo,{onDataUpdate:Pe})}),t.jsx(L,{title:"Медична інформація",children:t.jsx(Io,{onDataUpdate:Ae,medicalData:Oe,setMedicalData:He})}),t.jsx(L,{title:"Родичи спортсмена",children:t.jsx(Ho,{onDataUpdate:Ve})}),t.jsx(Qo,{children:t.jsx(er,{type:"submit",children:"Створити"})})]})})})};export{hr as default};
