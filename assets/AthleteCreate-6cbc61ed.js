import{r,d as o,j as t,l as J,b as _e}from"./index-3e8e2c94.js";import{g as ee,a as Oe,u as Pe,b as He,D as Ae,S as Ve,C as U}from"./CustomDatePicker-965308dd.js";import{p as Ue}from"./PlaceholderProfile-3c1b0d36.js";import{P as Ye}from"./PlaceholderTeam-4fc9ba85.js";const he=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6 9L12 15L18 9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),qe=o.div`
  
  margin: 20px 0;
  border: 1.7px solid ${({theme:e})=>e.greenMain};
  border-radius: 8px;

  background-color: ${({theme:e})=>e.ContainerBGColor}; 
  transition: background-color 0.3s ease;
  ${({isOpen:e})=>!e&&`
    border-radius: 8px 8px 0 0;
  `}


`,Ke=o(he)`
  stroke: ${e=>e.theme.white};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
`,Xe=o.button.attrs({type:"button"})`
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
`,Ze=o.div`
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
`,Je=o.h3`
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
`,Qe=o.div`
  display: flex;
  align-items: center;
`,et=o.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,tt=e=>r.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2}),r.createElement("path",{d:"M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M12 16H12.01",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),xe=o(tt)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({theme:e})=>e.white};
  transition: stroke 0.3s ease;
`,ot=o.button.attrs({type:"button"})`
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

    ${xe} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,rt=o.div`
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
`,nt=o.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
`,it=o.div`
  font-size: 14px; 
  font-weight: 600; 
  margin-bottom: 5px; 
`,at=({title:e,text:i})=>{const[p,a]=r.useState(!1),[w,h]=r.useState("top"),[c,g]=r.useState(null),b=r.useRef(null),j=r.useRef(null),u=()=>{if(!j.current||!b.current||!p)return;const s=j.current.getBoundingClientRect(),G=b.current.getBoundingClientRect(),n=window.innerWidth,l=G.height,m=G.width,C=s.top,$=s.bottom,d=s.left;s.right;const f=s.width;s.height;const I=d+f/2,z=C>l+15?"top":"bottom";h(z);let E,S;z==="top"?E=C-l-12:E=$+12,S=I-m*.8,S<10&&(S=10),S+m>n-10&&(S=n-m-10),g({top:E,left:S})};return r.useEffect(()=>{p&&setTimeout(u,0)},[p]),r.useEffect(()=>{if(p)return window.addEventListener("scroll",u),window.addEventListener("resize",u),()=>{window.removeEventListener("scroll",u),window.removeEventListener("resize",u)}},[p]),t.jsxs(ot,{ref:j,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:()=>a(!p),children:[t.jsx(xe,{}),t.jsx(rt,{ref:b,visible:p,placement:w,tooltipPosition:c,children:t.jsxs(nt,{children:[e&&t.jsx(it,{children:e}),i]})})]})},L=({children:e,helpTooltiptitle:i,helpTooltip:p,title:a,top:w,left:h})=>{const[c,g]=r.useState(!1),[b,j]=r.useState(!1),u=r.useRef(null),s=r.useRef(null),G=r.useRef(!1),n=()=>{g(l=>(b||j(!0),!l))};return r.useEffect(()=>{const l=new IntersectionObserver(([m])=>{!b&&m.isIntersecting&&!G.current&&m.intersectionRatio>=1&&(setTimeout(()=>{g(!0)},200),G.current=!0)},{threshold:1,rootMargin:"0px 0px -100px 0px"});return u.current&&l.observe(u.current),()=>{u.current&&l.unobserve(u.current)}},[b]),r.useEffect(()=>{s.current&&(c?s.current.removeAttribute("inert"):s.current.setAttribute("inert",""))},[c]),t.jsxs(qe,{ref:u,isOpen:c,children:[t.jsxs(Xe,{onClick:n,role:"button",tabIndex:0,children:[a&&t.jsx(Je,{children:a}),t.jsxs(Qe,{children:[p&&t.jsx(et,{onClick:l=>l.stopPropagation(),children:t.jsx(at,{title:i,text:p,top:w,left:h})}),t.jsx(Ke,{isOpen:c})]})]}),t.jsx(Ze,{ref:s,isOpen:c,children:e})]})},st=o.div`
  position: relative;
  width: 100%;
`,dt=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,lt=o.span`
  color: ${({selectedValue:e,theme:i})=>e===""?i.textBlack:e==="Чоловік"||e==="Жінка"?i.greenMain:i.textGray}; 
  font-family: 'Inter Tight', sans-serif;
`,ct=o.button.attrs({type:"button"})`
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
`,pt=o.div`
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
`,Y=o.button.attrs({type:"button"})`
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
`,ht=o(he)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) ${e=>e.open?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
  width: 22px;
  height: auto;
`,xt=({label:e,value:i,onChange:p})=>{const[a,w]=r.useState(!1),[h,c]=r.useState(i||""),g=r.useRef(null),b=()=>{w(!a)},j=s=>{c(s),p(s),w(!1)},u=s=>{g.current&&!g.current.contains(s.target)&&w(!1)};return r.useEffect(()=>(document.addEventListener("click",u),()=>{document.removeEventListener("click",u)}),[]),t.jsxs(st,{ref:g,children:[e&&t.jsx(dt,{onClick:b,children:e}),t.jsxs(ct,{onClick:b,children:[t.jsx(lt,{selectedValue:h,children:h||"Не вибрано"}),t.jsx(ht,{open:a})]}),a&&t.jsxs(pt,{children:[t.jsx(Y,{className:h==="Чоловік"?"selected":"",onClick:()=>j("Чоловік"),children:"Чоловік"}),t.jsx(Y,{className:h==="Жінка"?"selected":"",onClick:()=>j("Жінка"),children:"Жінка"}),t.jsx(Y,{className:h===""?"selected":"",onClick:()=>j(""),children:"Не вибрано"})]})]})},ut=o.div`
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
`,mt=o.div`
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
`,gt=o.button`
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
`,bt=o.div`
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
`,ft=o.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,wt=o.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,$t=o.div`
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
`,jt=o.div`
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
`,kt=o.div`
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  flex: 1; 
  overflow: hidden; 
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`,vt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,yt=o.div`
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
`,Ct=o.img`
  border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,It=()=>{const[e,i]=r.useState(null),p=r.useRef(null),a=r.useRef({}),w=[{id:1,name:"Динамо"},{id:2,name:"Шахтар"},{id:3,name:"Зоря"},{id:4,name:"Металіст"},{id:5,name:"Верес"},{id:6,name:"Олександрія"},{id:7,name:"Чорноморець"},{id:8,name:"Карпати"},{id:9,name:"Дніпро"},{id:10,name:"Десна"}],h=r.useCallback(c=>{e&&e.id===c.id?(console.log("Team deselected:",c),i(null),a.current[c.id]&&a.current[c.id].blur()):(console.log("Team selected:",c),i(c))},[e]);return r.useEffect(()=>{if(!p.current)return;const c={root:p.current,rootMargin:"0px",threshold:.1},g=u=>{u.forEach(s=>{s.target.classList&&(s.isIntersecting?(s.target.classList.add("visible"),s.target.classList.remove("hidden")):(s.target.classList.add("hidden"),s.target.classList.remove("visible")))})},b=new IntersectionObserver(g,c);return document.querySelectorAll('[id^="team-"]').forEach(u=>{b.observe(u),u.classList.add("hidden")}),()=>b.disconnect()},[]),t.jsx(kt,{children:t.jsxs($t,{children:[t.jsx(yt,{children:t.jsx(vt,{children:t.jsx("h2",{children:"Команда спортсмена"})})}),t.jsx(jt,{ref:p,children:w.length>0?w.map(c=>t.jsx(ut,{className:"team-item",id:`team-${c.id}`,children:t.jsxs(gt,{ref:g=>a.current[c.id]=g,isSelected:e&&e.id===c.id,onClick:()=>h(c),type:"button",children:[t.jsx(bt,{children:t.jsx(Ct,{loading:"lazy",src:Ye})}),t.jsx(ft,{children:t.jsx(wt,{children:c.name})})]})},c.id)):t.jsx(mt,{children:"Команд не знайдено"})})]})})},Gt=o(Ae)`
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
`,Dt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 8px 4px;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 12px;
`,St=o.select`
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


`,Bt=o.select`
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

`,Mt=o.div`
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
`,Et=(e,i,p=1)=>{let a=[];for(let w=e;w<=i;w+=p)a.push(w);return a},Z=({value:e,onChange:i,placeholder:p="Оберіть дату",hasError:a=!1,minDate:w,maxDate:h})=>{const c=l=>{if(!l)return null;try{const m=new Date(l);return isNaN(m.getTime())?null:m}catch{return null}},[g,b]=r.useState(()=>c(e));r.useEffect(()=>{b(c(e))},[e]);const u=Et(1900,ee(new Date)),s=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],G=l=>{if(b(l),l){const m=l.getFullYear(),C=String(l.getMonth()+1).padStart(2,"0"),$=String(l.getDate()).padStart(2,"0");i(`${m}-${C}-${$}`)}else i("")};let n=c(w);return n&&(n=Oe(n,0)),t.jsx(Mt,{children:t.jsx(Gt,{selected:g,onChange:G,dateFormat:"dd.MM.yyyy",placeholderText:p,locale:Pe,$error:a,minDate:n,maxDate:h?c(h):void 0,renderCustomHeader:({date:l,changeYear:m,changeMonth:C})=>t.jsxs(Dt,{children:[t.jsx(St,{value:ee(l),onChange:$=>{m(parseInt($.target.value))},children:u.map($=>t.jsx("option",{value:$,children:$},$))}),t.jsx(Bt,{value:s[He(l)],onChange:$=>{C(s.indexOf($.target.value))},children:s.map(($,d)=>t.jsx("option",{value:$,children:$},d))})]})})})},ue=e=>r.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M10 12V17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M14 12V17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M4 7H20",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),zt=o(ue)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,Lt=o.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,Tt=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,te=o.div`
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
`,Rt=o.span`
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
`,Nt=o.button`
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

`,Ft=o.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,Wt=o.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,oe=o(A)`
  flex: 1;
`,_t=o.div`
margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray} ;
  border: 1px dashed ${({theme:e})=>e.textGray} ;
  border-radius: 8px;
`,Ot=o.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid  ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,Pt=o.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom:4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,Ht=o.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  
  min-width:  max-content;
  
  ${e=>!e.$hasInstitutions&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,At=o.p`
 color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,Vt=o.div`
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
`,Ut=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,Yt=o.div`
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
`,qt=o.button`

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

`,Kt=e=>r.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 ",stroke:"none",fillRule:"evenodd"})),me=o(Kt)`
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: ${({theme:e})=>e.red};
  transition: stroke 0.3s ease;
`,Xt=o.button.attrs({type:"button"})`
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

    ${me} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,Zt=o.div`
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
`,Jt=o.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
  /* color: ${({theme:e})=>e.red}; */
`,Qt=o.div`
  font-size: 14px; 
  font-weight: 700; 
  margin-bottom: 5px; 
  color:  ${({theme:e})=>e.red};
`,eo=({title:e,text:i})=>{const[p,a]=r.useState(!1),[w,h]=r.useState("top"),[c,g]=r.useState(null),b=r.useRef(null),j=r.useRef(null),u=()=>{if(!j.current||!b.current||!p)return;const s=j.current.getBoundingClientRect(),G=b.current.getBoundingClientRect(),n=window.innerWidth,l=G.height,m=G.width,C=s.top,$=s.bottom,d=s.left;s.right;const f=s.width;s.height;const I=d+f/2,z=C>l+15?"top":"bottom";h(z);let E,S;z==="top"?E=C-l-12:E=$+12,S=I-m*.8,S<10&&(S=10),S+m>n-10&&(S=n-m-10),g({top:E,left:S})};return r.useEffect(()=>{p&&setTimeout(u,0)},[p]),r.useEffect(()=>{if(p)return window.addEventListener("scroll",u),window.addEventListener("resize",u),()=>{window.removeEventListener("scroll",u),window.removeEventListener("resize",u)}},[p]),t.jsxs(Xt,{ref:j,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:()=>a(!p),children:[t.jsx(me,{}),t.jsx(Zt,{ref:b,visible:p,placement:w,tooltipPosition:c,children:t.jsxs(Jt,{children:[e&&t.jsx(Qt,{children:e}),i]})})]})},to=({onDataUpdate:e})=>{const[i,p]=r.useState([]),[a,w]=r.useState({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),[h,c]=r.useState({}),g=100;r.useEffect(()=>{const n=i.map(l=>({previousCoach:l.coachName,previousInstitution:l.institution||"",coachContacts:l.coachContacts||"",entryDate:l.entryDate||"",exitDate:l.exitDate||""}));e(n)},[i,e]);const b=()=>{const n={};if(a.coachName.trim()||(n.coachName="Ім'я тренера є обов'язковим"),a.entryDate&&a.exitDate){const l=new Date(a.entryDate),C=new Date(a.exitDate).getTime()-l.getTime();Math.ceil(C/(1e3*3600*24))<0&&(n.exitDate="Дата виходу має бути не раніше дати вступу")}return c(n),Object.keys(n).length===0},j=()=>{if(b()){const n={...a,coachName:a.coachName.trim(),institution:a.institution.trim(),coachContacts:a.coachContacts.trim(),id:Date.now()};p(l=>[...l,n]),w({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),c({})}},u=n=>{p(l=>l.filter(m=>m.id!==n))},s=(n,l)=>{if(w(m=>({...m,[n]:l})),h[n]&&c(m=>{const C={...m};return delete C[n],C}),n==="entryDate"&&a.exitDate){const m=new Date(l),$=new Date(a.exitDate).getTime()-m.getTime();Math.ceil($/(1e3*3600*24))<0?c(f=>({...f,exitDate:"Дата виходу з закладу має бути не раніше дати вступу"})):h.exitDate&&c(f=>{const I={...f};return delete I.exitDate,I})}},G=n=>{if(!n)return"";try{const l=new Date(n);return isNaN(l.getTime())?n:l.toLocaleDateString("uk-UA")}catch{return n}};return t.jsxs(Lt,{children:[i.length===0?t.jsx(_t,{children:"Додайте інформацію"}):t.jsx(Ot,{children:t.jsx(Pt,{children:t.jsx(Ht,{$hasInstitutions:i.length>0,children:i.map(n=>t.jsxs(Vt,{children:[t.jsxs(Ut,{children:[t.jsx(At,{children:"Вказана інформація"}),t.jsx(qt,{onClick:()=>u(n.id),"aria-label":"Видалити заклад",children:t.jsx(zt,{})})]}),t.jsxs(Yt,{children:[t.jsx(F,{children:t.jsxs(_,{children:[t.jsx(W,{children:"Тренер: "})," ",n.coachName]})}),t.jsx(F,{children:t.jsxs(_,{children:[t.jsx(W,{children:"Заклад: "}),n.institution.trim()?n.institution:"Не вказано"]})}),t.jsx(F,{children:t.jsxs(_,{children:[t.jsx(W,{children:"Контакти: "})," ",n.coachContacts.trim()?n.coachContacts:"Не вказано"]})}),t.jsxs(F,{children:[t.jsx(W,{children:"Період:"}),t.jsxs(_,{children:[G(n.entryDate)||"Не вказано"," ",t.jsx("span",{children:" - "}),G(n.exitDate)||"Не вказано"]})]})]})]},n.id))})})}),t.jsxs(Tt,{children:[t.jsxs(te,{children:[t.jsxs(A,{children:[t.jsxs(R,{children:["Минулий Тренер *",h.coachName&&t.jsx(Rt,{children:h.coachName})]}),t.jsx(q,{type:"text",value:a.coachName,onChange:n=>s("coachName",n.target.value),placeholder:"Введіть ім'я тренера",maxLength:g,$error:h.coachName})]}),t.jsxs(A,{children:[t.jsx(R,{children:"Минулий спортивний заклад"}),t.jsx(q,{type:"text",value:a.institution,onChange:n=>s("institution",n.target.value),placeholder:"Введіть назву закладу",maxLength:g})]})]}),t.jsxs(te,{children:[t.jsxs(A,{children:[t.jsx(R,{children:"Контакти тренера"}),t.jsx(q,{type:"text",value:a.coachContacts,onChange:n=>s("coachContacts",n.target.value),placeholder:"Введіть контакти тренера",maxLength:g})]}),t.jsxs(Wt,{children:[t.jsxs(oe,{children:[t.jsx(R,{children:"Дата вступу"}),t.jsx(Z,{value:a.entryDate,onChange:n=>s("entryDate",n),placeholder:"Оберіть дату вступу"})]}),t.jsxs(oe,{children:[t.jsxs(R,{children:["Дата виходу",h.exitDate&&t.jsx(eo,{title:"Неправильно введені дані",text:h.exitDate})]}),t.jsx(Z,{value:a.exitDate,onChange:n=>s("exitDate",n),placeholder:"Оберіть дату виходу",minDate:a.entryDate,hasError:!!h.exitDate})]})]})]})]}),t.jsx(Ft,{children:t.jsx(Nt,{type:"button",onClick:j,children:"Додати"})})]})},oo=o(ue)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,ro=o.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,no=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,re=o.div`
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
`,ne=o.span`
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
`,io=o.button`
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
`,ao=o.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,so=o.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,lo=o(V)`
  flex: 1;
`,co=o.div`
  margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray};
  border: 1px dashed ${({theme:e})=>e.textGray};
  border-radius: 8px;
`,po=o.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,ho=o.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom: 4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,xo=o.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  min-width: max-content;
  
  ${e=>!e.$hasMedicalRecords&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,uo=o.p`
  color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,mo=o.div`
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
`,go=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,bo=o.div`
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
`,O=o.div`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.disabledBG};
  margin-right: 10px;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,P=o.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({theme:e})=>e.textGray};
  margin-bottom: 2px;
`,H=o.p`
  font-size: 13px;
  color: ${({theme:e})=>e.textBlack};
  word-wrap: break-word;
  word-break: break-word;
`,fo=o.button`
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
`,wo=o.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid  ${e=>e.theme.greenMain};
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,ie=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,$o=({onDataUpdate:e,medicalData:i,setMedicalData:p})=>{const[a,w]=r.useState([]);console.log(i);const[h,c]=r.useState({doctorName:"",healthStatus:"",medicalInstitution:"",examinationDate:""}),[g,b]=r.useState({}),j=d=>{const{name:f,value:I}=d.target;p(B=>({...B,[f]:I.trimStart()}))},u=d=>{const{name:f,value:I}=d.target;p(B=>({...B,[f]:I.trim()}))},s=100;r.useEffect(()=>{const d=a.map(f=>({doctorName:f.doctorName,healthStatus:f.healthStatus||"",medicalInstitution:f.medicalInstitution||"",examinationDate:f.examinationDate||""}));e(d)},[a,e]);const G=()=>{const d={};return h.doctorName.trim()||(d.doctorName="Ім'я лікаря є обов'язковим"),h.healthStatus.trim()||(d.healthStatus="Статус здоров'я є обов'язковим"),b(d),Object.keys(d).length===0},n=()=>{if(G()){const d={...h,doctorName:h.doctorName.trim(),healthStatus:h.healthStatus.trim(),medicalInstitution:h.medicalInstitution.trim(),id:Date.now()};w(f=>[...f,d]),c({doctorName:"",healthStatus:"",medicalInstitution:"",examinationDate:""}),b({})}},l=d=>{w(f=>f.filter(I=>I.id!==d))},m=(d,f)=>{c(I=>({...I,[d]:f})),g[d]&&b(I=>{const B={...I};return delete B[d],B})},C=d=>{m("examinationDate",d)},$=d=>{if(!d)return"";try{const f=new Date(d);return isNaN(f.getTime())?d:f.toLocaleDateString("uk-UA")}catch{return d}};return t.jsxs(ro,{children:[t.jsxs(wo,{children:[t.jsxs(ie,{children:[t.jsx(T,{htmlFor:"input1",children:"Алергії"}),t.jsx(N,{type:"text",name:"allergies",value:i.allergies,onChange:j,onBlur:u,placeholder:"Введіть алергії спортсмена",maxLength:s})]}),t.jsxs(ie,{children:[t.jsx(T,{htmlFor:"input2",children:"Захворювання"}),t.jsx(N,{type:"text",name:"diseases",value:i.diseases,onChange:j,onBlur:u,placeholder:"Введіть захворювання спортсмена",maxLength:s})]})]}),a.length===0?t.jsx(co,{children:"Додайте інформацію про медкомісії"}):t.jsx(po,{children:t.jsx(ho,{children:t.jsx(xo,{$hasMedicalRecords:a.length>0,children:a.map(d=>t.jsxs(mo,{children:[t.jsxs(go,{children:[t.jsx(uo,{children:"Медкомісія"}),t.jsx(fo,{onClick:()=>l(d.id),"aria-label":"Видалити запис",children:t.jsx(oo,{})})]}),t.jsxs(bo,{children:[t.jsx(O,{children:t.jsxs(H,{children:[t.jsx(P,{children:"Лікар: "})," ",d.doctorName]})}),t.jsx(O,{children:t.jsxs(H,{children:[t.jsx(P,{children:"Статус здоров'я: "})," ",d.healthStatus]})}),t.jsx(O,{children:t.jsxs(H,{children:[t.jsx(P,{children:"Медичний заклад: "})," ",d.medicalInstitution.trim()?d.medicalInstitution:"Не вказано"]})}),t.jsx(O,{children:t.jsxs(H,{children:[t.jsx(P,{children:"Дата обстеження: "})," ",$(d.examinationDate)||"Не вказано"]})})]})]},d.id))})})}),t.jsxs(no,{children:[t.jsxs(re,{children:[t.jsxs(V,{children:[t.jsxs(T,{children:["Лікар *",g.doctorName&&t.jsx(ne,{children:g.doctorName})]}),t.jsx(N,{type:"text",value:h.doctorName,onChange:d=>m("doctorName",d.target.value),placeholder:"Введіть ім'я лікаря",maxLength:s,$error:g.doctorName})]}),t.jsxs(V,{children:[t.jsxs(T,{children:["Статус здоров'я *",g.healthStatus&&t.jsx(ne,{children:g.healthStatus})]}),t.jsx(N,{type:"text",value:h.healthStatus,onChange:d=>m("healthStatus",d.target.value),placeholder:"Введіть статус здоров'я",maxLength:s,$error:g.healthStatus})]})]}),t.jsxs(re,{children:[t.jsxs(V,{children:[t.jsx(T,{children:"Медичний заклад"}),t.jsx(N,{type:"text",value:h.medicalInstitution,onChange:d=>m("medicalInstitution",d.target.value),placeholder:"Введіть назву медичного закладу",maxLength:s})]}),t.jsx(so,{children:t.jsxs(lo,{children:[t.jsx(T,{children:"Дата обстеження"}),t.jsx(Z,{value:h.examinationDate,onChange:C})]})})]})]}),t.jsx(ao,{children:t.jsx(io,{type:"button",onClick:n,children:"Додати"})})]})},y={mobile:"320px",tablet:"768px",desktop:"1024px"},jo=o.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  @media (min-width: ${y.tablet}) {
    align-items: flex-start;
    height: 100%;
  }
`,ae=o.div`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${y.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${y.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }

  ${({$isSportsFacility:e})=>e&&J`
      @media (min-width: ${y.tablet}) {
       padding: 14px 0;
      }
  
      @media (min-width: ${y.desktop}) {
        padding: 14px 0;
      }
  `}
`,ko=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${y.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`,vo=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  
  @media (min-width: ${y.tablet}) {
    width: auto;
    margin-right: 3.8rem;
    margin-bottom: 0;
    justify-content: flex-start;
    align-self: center; 
  }

   @media (min-width: ${y.desktop}) {
    margin-right: 2rem;
  }
`,yo=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${y.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,Co=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,Io=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Go=o.label`
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

  @media (min-width: ${y.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,Do=o.input`
  display: none;
`,So=o.div`
  flex: 1;
  
  @media (min-width: ${y.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center; 
  }
`,ge=o.h2`
  color: ${({theme:e})=>e.greenMain};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`,se=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: ${e=>e.hasphysique?"20px":"0"};
  padding-bottom: ${e=>e.hasphysique?"20px":"0"};
  @media (min-width: ${y.tablet}) {
    flex-direction: column;
  }
  
  @media (min-width: ${y.desktop}) {
    flex-direction: row;
    gap: 1.5rem;
  }
`,k=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;

${({$isUniversity:e})=>e&&J`
      @media (max-width: 1024px) {
        margin-top: 10px; 
      }

      @media (min-width: 1024px) {
        margin-top: 0;
      }
    `}
`,v=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,D=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:i,name:p})=>i&&p==="username"?e.red:e.borderColor};
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
`,Bo=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,Mo=o.button`
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
`,Eo=o(Ve)`
  fill: ${e=>e.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${y.tablet}) {
    width: 18px;
    height: 18px;
  }
`,K=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,de=o.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
   margin-top: ${e=>e.$hasSportInfo?"20px":"0"};
  @media (min-width: ${y.desktop}) {
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }
`,le=o.div`
  flex: 1;
  
  @media (min-width: ${y.desktop}) {
     margin-top: ${e=>e.$hasSportInfo?"0":"3.1rem"}
  }

  
`,ce=o.div`
  flex: 1;
  @media (max-width: ${y.desktop}) {
    margin-top: ${e=>e.$hasSportInfo?"20px":"0"}
  }
`,X=o.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,M=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: ${y.desktop}) {
    flex-direction: row;
    gap: 20px;
    
    & > ${k} {
      flex: 1;
    }
  }
`,zo=o(ge)`
  margin-bottom: 1rem;
  padding-top: 10px;

  @media (min-width: ${y.desktop}) {
    padding-top: 0;
  }
`,Lo=o.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:i,name:p})=>i&&p==="notes"?e.red:e.borderColor};
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
`,To=o.div`
  margin: 20px 0;
`,Ro=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${y.desktop}) {
    flex-direction: row;
    gap: 40px;
  }

`,pe=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  ${({$isSportsFacility:e})=>e&&J`
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
`;const Ho=()=>{const{setTitle:e}=_e(),[i,p]=r.useState(""),[a,w]=r.useState(""),[h,c]=r.useState(""),[g,b]=r.useState(""),[j,u]=r.useState(""),[s,G]=r.useState(""),[n,l]=r.useState(""),[m,C]=r.useState(""),[$,d]=r.useState(""),[f,I]=r.useState(""),[B,z]=r.useState(""),[E,S]=r.useState(""),[be,fe]=r.useState(""),[we,$e]=r.useState(""),[je,ke]=r.useState("");r.useState(null);const[ve,ye]=r.useState(""),[Ce,Ie]=r.useState(""),[Ge,De]=r.useState(""),[Se,Be]=r.useState(""),[Me,Ee]=r.useState(""),[ze,Le]=r.useState(null),[No,Te]=r.useState({}),[Re,Ne]=r.useState({allergies:"",diseases:""}),[Fo,Fe]=r.useState({});r.useEffect(()=>{e("Створення нового спортсмена")},[e]);const We=x=>{if(x.key==="Enter"||x.key===" "){const Q=document.getElementById("photo-upload");Q&&Q.click()}};return t.jsx(t.Fragment,{children:t.jsx(jo,{children:t.jsxs(ae,{children:[t.jsxs(ko,{children:[t.jsx(vo,{children:t.jsxs(yo,{children:[t.jsx(Co,{children:t.jsx(Io,{src:Ue,alt:"Фото спортсмена"})}),t.jsx(Go,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:We,children:t.jsx(Eo,{})}),t.jsx(Do,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp"})]})}),t.jsxs(So,{children:[t.jsx(ge,{children:"Особиста інформація"}),t.jsxs(se,{children:[t.jsxs(k,{children:[t.jsx(v,{htmlFor:"firstName",children:"Ім'я *"}),t.jsx(D,{id:"firstName",type:"text",placeholder:"Введіть ім'я",value:i,onChange:x=>p(x.target.value)})]}),t.jsxs(k,{children:[t.jsx(v,{htmlFor:"lastName",children:"Прізвище *"}),t.jsx(D,{id:"lastName",type:"text",placeholder:"Введіть прізвище",value:a,onChange:x=>w(x.target.value)})]}),t.jsxs(k,{children:[t.jsx(v,{htmlFor:"patronymic",children:"По батькові"}),t.jsx(D,{id:"patronymic",type:"text",placeholder:"Введіть по батькові",value:h,onChange:x=>c(x.target.value)})]})]})]})]}),t.jsxs(de,{children:[t.jsx(le,{children:t.jsxs(X,{children:[t.jsx(M,{children:t.jsxs(k,{children:[t.jsx(v,{htmlFor:"birthdate",children:"Дата народження *"}),t.jsx(K,{children:t.jsx(U,{selectedDate:g,onDateChange:b})})]})}),t.jsx(M,{children:t.jsxs(k,{children:[t.jsx(v,{htmlFor:"address",children:"Адреса"}),t.jsx(D,{id:"address",type:"text",value:j,onChange:x=>u(x.target.value),placeholder:"Введіть адресу"})]})}),t.jsx(M,{children:t.jsx(xt,{label:"Виберіть стать",value:s,onChange:G})})]})}),t.jsxs(ce,{children:[t.jsx(zo,{children:"Контакти"}),t.jsxs(X,{children:[t.jsx(M,{children:t.jsxs(k,{children:[t.jsx(v,{htmlFor:"phone",children:"Телефон"}),t.jsx(D,{id:"phone",type:"tel",value:n,onChange:x=>l(x.target.value),placeholder:"Введіть номер телефону"})]})}),t.jsx(M,{children:t.jsxs(k,{children:[t.jsx(v,{htmlFor:"email",children:"Email"}),t.jsx(D,{id:"email",type:"email",value:m,onChange:x=>C(x.target.value),placeholder:"Введіть email"})]})}),t.jsx(M,{children:t.jsxs(k,{children:[t.jsx(v,{htmlFor:"socialMedia",children:"Соцмережі"}),t.jsx(D,{id:"socialMedia",type:"text",value:$,onChange:x=>d(x.target.value),placeholder:"Введіть посилання на соцмережі"})]})})]})]})]}),t.jsx(L,{helpTooltiptitle:"Ці параметри не є обов'язковими, але вони допомагають отримати детальнішу статистику 📊",helpTooltip:"Додайте перший замір щоб відстежувати зміни спортсмена. Після створення профілю спортсмена ви зможете додавати нові заміри та повністю керувати ними 😊",title:"Фізичні дані",children:t.jsxs(se,{hasphysique:!0,children:[t.jsxs(k,{children:[t.jsx(v,{htmlFor:"height",children:"Зріст у м."}),t.jsx(D,{id:"height",type:"number",min:"0",max:"4",placeholder:"Введіть зріст у м.",step:"0.1",value:f,onChange:x=>I(x.target.value)})]}),t.jsxs(k,{children:[t.jsx(v,{htmlFor:"weight",children:"Вага у кг."}),t.jsx(D,{id:"weight",min:"0",max:"400",step:"0.1",placeholder:"Введіть вагу у кг.",type:"number",value:B,onChange:x=>z(x.target.value)})]}),t.jsxs(k,{children:[t.jsx(v,{htmlFor:"dateOfMeasurement",children:"Дата вимірювання"}),t.jsx(K,{children:t.jsx(U,{selectedDate:E,onDateChange:S})})]})]})}),t.jsx(L,{title:"Спортивна інформація",children:t.jsxs(de,{$hasSportInfo:!0,children:[t.jsx(le,{$hasSportInfo:!0,children:t.jsxs(X,{children:[t.jsx(M,{children:t.jsxs(k,{children:[t.jsx(v,{htmlFor:"role",children:"Роль у команді"}),t.jsx(D,{id:"role",type:"text",value:be,onChange:x=>fe(x.target.value),placeholder:"Введіть роль у команді"})]})}),t.jsx(M,{children:t.jsxs(k,{children:[t.jsx(v,{htmlFor:"sportCategory",children:"Спортивний розряд"}),t.jsx(D,{id:"sportCategory",type:"text",value:we,onChange:x=>$e(x.target.value),placeholder:"Введіть спортивний розряд"})]})}),t.jsx(M,{children:t.jsxs(k,{children:[t.jsx(v,{htmlFor:"notes",children:"Примітки про спортсмена"}),t.jsx(Lo,{id:"notes",value:je,onChange:x=>ke(x.target.value),placeholder:"Додайте примітки про спортсмена"})]})})]})}),t.jsx(ce,{$hasSportInfo:!0,children:t.jsx(It,{})})]})}),t.jsx(L,{title:"Навчальні заклади",children:t.jsx(To,{children:t.jsxs(M,{children:[t.jsxs(k,{children:[t.jsx(v,{htmlFor:"school",children:"Школа"}),t.jsx(D,{id:"school",type:"text",placeholder:"Введіть назву школи",value:Ce,onChange:x=>Ie(x.target.value)})]}),t.jsxs(k,{$isUniversity:!0,children:[t.jsx(v,{htmlFor:"university",children:"Університет"}),t.jsx(D,{id:"university",type:"text",placeholder:"Введіть назву університету",value:ve,onChange:x=>ye(x.target.value)})]})]})})}),t.jsx(L,{title:"Спортивний заклад",children:t.jsx(ae,{$isSportsFacility:!0,children:t.jsxs(Ro,{children:[t.jsxs(pe,{$isSportsFacility:!0,children:[t.jsxs(k,{children:[t.jsx(v,{children:"Поточний спортивний заклад"}),t.jsx(D,{type:"text",value:Ge,onChange:x=>De(x.target.value),placeholder:"Введіть назву закладу"})]}),t.jsxs(k,{children:[t.jsx(v,{children:"Тренер"}),t.jsx(D,{type:"text",value:Se,onChange:x=>Be(x.target.value),placeholder:"Введіть ім'я тренера"})]})]}),t.jsxs(pe,{$isSportsFacility:!0,children:[t.jsxs(k,{children:[t.jsx(v,{children:"Контакти тренера"}),t.jsx(D,{type:"text",value:Me,onChange:x=>Ee(x.target.value),placeholder:"Введіть контакти"})]}),t.jsxs(k,{children:[t.jsx(v,{children:"Дата вступу"}),t.jsx(K,{children:t.jsx(U,{selectedDate:ze,onDateChange:Le})})]})]})]})})}),t.jsx(L,{title:"Минулі спортивні заклади",children:t.jsx(to,{onDataUpdate:Te})}),t.jsx(L,{title:"Медична інформація",children:t.jsx($o,{onDataUpdate:Fe,medicalData:Re,setMedicalData:Ne})}),t.jsx(L,{title:"TESR",children:t.jsx("p",{children:"asdf"})}),t.jsx(Bo,{children:t.jsx(Mo,{type:"submit",children:"Створити"})})]})})})};export{Ho as default};
