import{d as r,r as o,j as t,b as gt,a as bt,f as ot,L as ft,i as St,R as Re,m as Dt,u as Bt,y as te,T as Et}from"./index-bd79a0ad.js";import{g as nt,a as Mt,u as Nt,b as Rt,D as zt,C as ke}from"./CustomDatePicker-94cd2757.js";import{p as ve}from"./PlaceholderProfile-3c1b0d36.js";import{S as wt,H as Lt}from"./HelpTooltip-65279380.js";import{P as Tt}from"./PlaceholderTeam-7b26a08e.js";import{S as ze}from"./DeleteIcon-da9772cf.js";import{a as Pt,S as Ft,u as Ot,N as _t}from"./minus-fc95e5d3.js";const Wt=r.div`
  
  margin: 20px 0;
  border: 1.7px solid ${({theme:e})=>e.greenMain};
  border-radius: 8px;

  background-color: ${({theme:e})=>e.ContainerBGColor}; 
  transition: background-color 0.3s ease;
  ${({isOpen:e})=>!e&&`
    border-radius: 8px 8px 0 0;
  `}


`,Ht=r(wt)`
  stroke: ${e=>e.theme.white};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
`,At=r.button.attrs({type:"button"})`
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
`,Ut=r.div`
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
`,Vt=r.h3`
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
`,Yt=r.div`
  display: flex;
  align-items: center;
`,qt=r.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,T=o.forwardRef(({children:e,helpTooltiptitle:a,helpTooltip:f,title:d,top:k,left:h},w)=>{const[m,g]=o.useState(!1),[v,$]=o.useState(!1),x=o.useRef(null),c=o.useRef(null),i=o.useRef(!1);o.useImperativeHandle(w,()=>({open:()=>{g(!0),$(!0)},close:()=>{g(!1)},scrollIntoView:u=>{x.current&&x.current.scrollIntoView(u)},isOpen:()=>m}));const p=()=>{g(u=>!u),$(!0)};return o.useEffect(()=>{const u=new IntersectionObserver(([j])=>{!v&&j.isIntersecting&&!i.current&&j.intersectionRatio>=1&&(setTimeout(()=>{g(!0)},200),i.current=!0)},{threshold:1,rootMargin:"0px 0px -100px 0px"});return x.current&&u.observe(x.current),()=>{x.current&&u.unobserve(x.current)}},[v]),o.useEffect(()=>{c.current&&(m?c.current.removeAttribute("inert"):c.current.setAttribute("inert",""))},[m]),t.jsxs(Wt,{ref:x,isOpen:m,children:[t.jsxs(At,{onClick:p,role:"button",tabIndex:0,children:[d&&t.jsx(Vt,{children:d}),t.jsxs(Yt,{children:[f&&t.jsx(qt,{onClick:u=>u.stopPropagation(),children:t.jsx(Lt,{title:a,text:f,top:k,left:h})}),t.jsx(Ht,{isOpen:m})]})]}),t.jsx(Ut,{ref:c,isOpen:m,role:"region",children:e})]})}),Kt=r.div`
  position: relative;
  width: 100%;
`,Jt=r.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,Xt=r.span`
  color: ${({selectedValue:e,theme:a})=>e===""?a.textBlack:e==="Чоловік"||e==="Жінка"?a.greenMain:a.textGray}; 
  font-family: 'Inter Tight', sans-serif;
`,Qt=r.button.attrs({type:"button"})`
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
`,Zt=r.div`
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
`,je=r.button.attrs({type:"button"})`
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
`,er=r(wt)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) ${e=>e.open?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
  width: 22px;
  height: auto;
`,tr=({label:e,value:a,onChange:f})=>{const[d,k]=o.useState(!1),[h,w]=o.useState(a||""),m=o.useRef(null),g=()=>{k(!d)},v=x=>{w(x),f(x),k(!1)},$=x=>{m.current&&!m.current.contains(x.target)&&k(!1)};return o.useEffect(()=>(document.addEventListener("click",$),()=>{document.removeEventListener("click",$)}),[]),t.jsxs(Kt,{ref:m,children:[e&&t.jsx(Jt,{onClick:g,children:e}),t.jsxs(Qt,{onClick:g,children:[t.jsx(Xt,{selectedValue:h,children:h||"Не вибрано"}),t.jsx(er,{open:d})]}),d&&t.jsxs(Zt,{children:[t.jsx(je,{className:h==="Чоловік"?"selected":"",onClick:()=>v("Чоловік"),children:"Чоловік"}),t.jsx(je,{className:h==="Жінка"?"selected":"",onClick:()=>v("Жінка"),children:"Жінка"}),t.jsx(je,{className:h===""?"selected":"",onClick:()=>v(""),children:"Не вибрано"})]})]})},rr=r.div`
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
`,or=r.div`
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
`,nr=r.button`
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) 14px;
  grid-gap: 12px;
  align-items: center;
  padding: 10px 15px;
  background-color: ${({theme:e,isSelected:a})=>a?e.greenMain:e.disabledBG};
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
    background-color: ${({theme:e,isSelected:a})=>a?e.greenMain:`${e.lightGreen}`};
  }

  &:focus {
    outline: none;
    background-color: ${({theme:e,isSelected:a})=>a?e.greenMain:`${e.lightGreen}`};
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
`,ir=r.div`
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
`,ar=r.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,sr=r.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,lr=r.div`
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
`,dr=r.div`
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
`,cr=r.div`
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  flex: 1; 
  overflow: hidden; 
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`,pr=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,hr=r.div`
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
`,xr=r.img`
  border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,ur=r.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,mr=({onTeamSelect:e})=>{const[a,f]=o.useState(null),[d,k]=o.useState({}),h=o.useRef(null),w=o.useRef({}),m=o.useRef(!1),g=gt(),{teams:v,isLoading:$,hasMore:x,currentPage:c}=bt(s=>s.teams);o.useEffect(()=>{g(ot(1))},[g]),o.useEffect(()=>{if(v.length>0){const s={...d};v.forEach(n=>{if(n.logo&&!s[n.id]){const b=new Image;b.src=n.logo,b.onload=()=>{k(y=>({...y,[n.id]:{loaded:!0,error:!1}}))},b.onerror=()=>{k(y=>({...y,[n.id]:{loaded:!0,error:!0}})),console.log(`Зображення для команди ${n.id} не знайдено.`)},s[n.id]={loaded:!1,error:!1}}}),Object.keys(s).length>0&&k(n=>({...n,...s}))}},[v]);const i=o.useCallback(s=>{a&&a.id===s.id?(f(null),e&&e(null),w.current[s.id]&&w.current[s.id].blur()):(f(s),e&&e(s.id))},[a,e]),p=s=>{k(n=>({...n,[s]:{loaded:!0,error:!0}}))},u=s=>{if(!s.logo)return Tt;const n=d[s.id];return n&&n.error?St:s.logo},j=o.useCallback(()=>{if(!(m.current||!x)&&h.current){const{scrollTop:s,scrollHeight:n,clientHeight:b}=h.current;s+b>=n-20&&x&&!$&&(m.current=!0,g(ot(c)).finally(()=>{m.current=!1}))}},[g,x,$,c]);return o.useEffect(()=>{const s=h.current;if(s)return s.addEventListener("scroll",j),()=>s.removeEventListener("scroll",j)},[j]),o.useEffect(()=>{if(!h.current)return;const s={root:h.current,rootMargin:"0px",threshold:.1},n=E=>{E.forEach(M=>{M.target.classList&&(M.isIntersecting?(M.target.classList.add("visible"),M.target.classList.remove("hidden")):(M.target.classList.add("hidden"),M.target.classList.remove("visible")))})},b=new IntersectionObserver(n,s);return document.querySelectorAll('[id^="team-"]').forEach(E=>{b.observe(E),E.classList.add("hidden")}),()=>b.disconnect()},[v]),t.jsx(cr,{children:t.jsxs(lr,{children:[t.jsx(hr,{children:t.jsx(pr,{children:t.jsx("h2",{children:"Команда спортсмена"})})}),t.jsxs(dr,{ref:h,children:[v.length>0?v.map(s=>t.jsx(rr,{className:"team-item",id:`team-${s.id}`,children:t.jsxs(nr,{ref:n=>w.current[s.id]=n,isSelected:a&&a.id===s.id,onClick:()=>i(s),type:"button",children:[t.jsx(ir,{children:t.jsx(xr,{loading:"lazy",src:u(s),alt:`Логотип команди ${s.name}`,onError:()=>p(s.id)})}),t.jsx(ar,{children:t.jsx(sr,{children:s.name})})]})},s.id)):$?null:t.jsx(or,{children:"Команд не знайдено"}),$&&t.jsx(ur,{children:t.jsx(ft,{})})]})]})})},gr=r(zt)`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({$error:e,theme:a})=>e?a.red:a.borderColor};
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
`,br=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 8px 4px;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 12px;
`,fr=r.select`
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


`,wr=r.select`
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

`,$r=r.div`
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
`,kr=(e,a,f=1)=>{let d=[];for(let k=e;k<=a;k+=f)d.push(k);return d},Ne=({value:e,onChange:a,placeholder:f="Оберіть дату",hasError:d=!1,minDate:k,maxDate:h})=>{const w=p=>{if(!p)return null;try{const u=new Date(p);return isNaN(u.getTime())?null:u}catch{return null}},[m,g]=o.useState(()=>w(e));o.useEffect(()=>{g(w(e))},[e]);const $=kr(1900,nt(new Date)),x=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],c=p=>{if(g(p),p){const u=p.getFullYear(),j=String(p.getMonth()+1).padStart(2,"0"),s=String(p.getDate()).padStart(2,"0");a(`${u}-${j}-${s}`)}else a("")};let i=w(k);return i&&(i=Mt(i,0)),t.jsx($r,{children:t.jsx(gr,{selected:m,onChange:c,dateFormat:"dd.MM.yyyy",placeholderText:f,locale:Nt,$error:d,minDate:i,maxDate:h?w(h):void 0,renderCustomHeader:({date:p,changeYear:u,changeMonth:j})=>t.jsxs(br,{children:[t.jsx(fr,{value:nt(p),onChange:s=>{u(parseInt(s.target.value))},children:$.map(s=>t.jsx("option",{value:s,children:s},s))}),t.jsx(wr,{value:x[Rt(p)],onChange:s=>{j(x.indexOf(s.target.value))},children:x.map((s,n)=>t.jsx("option",{value:s,children:s},n))})]})})})},vr=r(ze)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,jr=r.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,yr=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,it=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`,le=r.div`
  display: flex;
  flex-direction: column;
`,A=r.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,ye=r.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({$error:e,theme:a})=>e?a.red:a.borderColor};
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
`,Cr=r.span`
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
`,Ir=r.button`
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

`,Gr=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,Sr=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,at=r(le)`
  flex: 1;
`,Dr=r.div`
margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray} ;
  border: 1px dashed ${({theme:e})=>e.textGray} ;
  border-radius: 8px;
`,Br=r.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid  ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,Er=r.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom:4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,Mr=r.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  
  min-width:  max-content;
  
  ${e=>!e.$hasInstitutions&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,Nr=r.p`
 color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,Rr=r.div`
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
`,zr=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,Lr=r.div`
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
`,re=r.div`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.disabledBG};
  margin-right: 10px;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,oe=r.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({theme:e})=>e.textGray};
  margin-bottom: 2px;
`,ne=r.p`
  font-size: 13px;
  color: ${({theme:e})=>e.textBlack};
  word-wrap: break-word;
  word-break: break-word;
`,Tr=r.button`
  background: none;
  border-radius: 50%;
  border: 2px solid  ${({theme:e})=>e.red};
  padding: 2px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  svg {
    stroke: ${({theme:e})=>e.red};
    fill: none; /* важливо */
    width: 1.2rem;  /* залишаємо розмір як у тебе */
    height: 1.2rem;
    transition: stroke 0.2s;
  }

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.red};

    svg {
      stroke: ${({theme:e})=>e.white};
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    svg {
      stroke: ${({theme:e})=>e.red};
    }
  }

  &:focus {
    outline: none;
  }

  &:focus-within svg {
    stroke: ${({theme:e})=>e.redDark};
  }
`,Pr=e=>o.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 ",stroke:"none",fillRule:"evenodd"})),$t=r(Pr)`
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: ${({theme:e})=>e.red};
  transition: stroke 0.3s ease;
`,Fr=r.button.attrs({type:"button"})`
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

    ${$t} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,Or=r.div`
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
    
    ${({placement:e,theme:a})=>e==="top"?`
          bottom: -9px; /* Трохи вище, ніж зовнішня стрілка */
          left: 79.4%;
          margin-left: -6px;
          border-width: 9px 9px 0;
          border-color: ${a.red} transparent transparent;
        `:`
          top: -9px; /* Трохи нижче, ніж зовнішня стрілка */
          left: 79.4%;
          margin-left: -6px;
          border-width: 0 9px 9px;
          border-color: transparent transparent ${a.red};
        `}
  }

  @media (max-width: 768px) {
    max-width: 260px;

  }
`,_r=r.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
  /* color: ${({theme:e})=>e.red}; */
`,Wr=r.div`
  font-size: 14px; 
  font-weight: 700; 
  margin-bottom: 5px; 
  color:  ${({theme:e})=>e.red};
`,Hr=({title:e,text:a})=>{const[f,d]=o.useState(!1),[k,h]=o.useState("top"),[w,m]=o.useState(null),g=o.useRef(null),v=o.useRef(null),$=()=>{if(!v.current||!g.current||!f)return;const x=v.current.getBoundingClientRect(),c=g.current.getBoundingClientRect(),i=window.innerWidth,p=c.height,u=c.width,j=x.top,s=x.bottom,n=x.left;x.right;const b=x.width;x.height;const y=n+b/2,M=j>p+15?"top":"bottom";h(M);let P,N;M==="top"?P=j-p-12:P=s+12,N=y-u*.8,N<10&&(N=10),N+u>i-10&&(N=i-u-10),m({top:P,left:N})};return o.useEffect(()=>{f&&setTimeout($,0)},[f]),o.useEffect(()=>{if(f)return window.addEventListener("scroll",$),window.addEventListener("resize",$),()=>{window.removeEventListener("scroll",$),window.removeEventListener("resize",$)}},[f]),t.jsxs(Fr,{ref:v,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onClick:()=>d(!f),children:[t.jsx($t,{}),t.jsx(Or,{ref:g,visible:f,placement:k,tooltipPosition:w,children:t.jsxs(_r,{children:[e&&t.jsx(Wr,{children:e}),a]})})]})},Ar=({onDataUpdate:e})=>{const[a,f]=o.useState([]),[d,k]=o.useState({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),[h,w]=o.useState({}),m=100;o.useEffect(()=>{const i=a.map(p=>({previousCoach:p.coachName,previousInstitution:p.institution||"",coachContacts:p.coachContacts||"",entryDate:p.entryDate||"",exitDate:p.exitDate||""}));e(i)},[a,e]);const g=()=>{const i={};if(d.coachName.trim()||(i.coachName="Ім'я тренера є обов'язковим"),d.entryDate&&d.exitDate){const p=new Date(d.entryDate),j=new Date(d.exitDate).getTime()-p.getTime();Math.ceil(j/(1e3*3600*24))<0&&(i.exitDate="Дата виходу має бути не раніше дати вступу")}return w(i),Object.keys(i).length===0},v=()=>{if(g()){const i={...d,coachName:d.coachName.trim(),institution:d.institution.trim(),coachContacts:d.coachContacts.trim(),id:Date.now()};f(p=>[...p,i]),k({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),w({})}},$=i=>{f(p=>p.filter(u=>u.id!==i))},x=(i,p)=>{if(k(u=>({...u,[i]:p})),h[i]&&w(u=>{const j={...u};return delete j[i],j}),i==="entryDate"&&d.exitDate){const u=new Date(p),s=new Date(d.exitDate).getTime()-u.getTime();Math.ceil(s/(1e3*3600*24))<0?w(b=>({...b,exitDate:"Дата виходу з закладу має бути не раніше дати вступу"})):h.exitDate&&w(b=>{const y={...b};return delete y.exitDate,y})}},c=i=>{if(!i)return"";try{const p=new Date(i);return isNaN(p.getTime())?i:p.toLocaleDateString("uk-UA")}catch{return i}};return t.jsxs(jr,{children:[a.length===0?t.jsx(Dr,{children:"Додайте інформацію"}):t.jsx(Br,{children:t.jsx(Er,{children:t.jsx(Mr,{$hasInstitutions:a.length>0,children:a.map(i=>t.jsxs(Rr,{children:[t.jsxs(zr,{children:[t.jsx(Nr,{children:"Вказана інформація"}),t.jsx(Tr,{onClick:()=>$(i.id),"aria-label":"Видалити заклад",children:t.jsx(vr,{})})]}),t.jsxs(Lr,{children:[t.jsx(re,{children:t.jsxs(ne,{children:[t.jsx(oe,{children:"Тренер: "})," ",i.coachName]})}),t.jsx(re,{children:t.jsxs(ne,{children:[t.jsx(oe,{children:"Заклад: "}),i.institution.trim()?i.institution:"Не вказано"]})}),t.jsx(re,{children:t.jsxs(ne,{children:[t.jsx(oe,{children:"Контакти: "})," ",i.coachContacts.trim()?i.coachContacts:"Не вказано"]})}),t.jsxs(re,{children:[t.jsx(oe,{children:"Період:"}),t.jsxs(ne,{children:[c(i.entryDate)||"Не вказано"," ",t.jsx("span",{children:" - "}),c(i.exitDate)||"Не вказано"]})]})]})]},i.id))})})}),t.jsxs(yr,{children:[t.jsxs(it,{children:[t.jsxs(le,{children:[t.jsxs(A,{children:["Минулий Тренер *",h.coachName&&t.jsx(Cr,{children:h.coachName})]}),t.jsx(ye,{type:"text",value:d.coachName,onChange:i=>x("coachName",i.target.value),placeholder:"Введіть ім'я тренера",maxLength:m,$error:h.coachName})]}),t.jsxs(le,{children:[t.jsx(A,{children:"Минулий спортивний заклад"}),t.jsx(ye,{type:"text",value:d.institution,onChange:i=>x("institution",i.target.value),placeholder:"Введіть назву закладу",maxLength:m})]})]}),t.jsxs(it,{children:[t.jsxs(le,{children:[t.jsx(A,{children:"Контакти тренера"}),t.jsx(ye,{type:"text",value:d.coachContacts,onChange:i=>x("coachContacts",i.target.value),placeholder:"Введіть контакти тренера",maxLength:m})]}),t.jsxs(Sr,{children:[t.jsxs(at,{children:[t.jsx(A,{children:"Дата вступу"}),t.jsx(Ne,{value:d.entryDate,onChange:i=>x("entryDate",i),placeholder:"Оберіть дату вступу"})]}),t.jsxs(at,{children:[t.jsxs(A,{children:["Дата виходу",h.exitDate&&t.jsx(Hr,{title:"Неправильно введені дані",text:h.exitDate})]}),t.jsx(Ne,{value:d.exitDate,onChange:i=>x("exitDate",i),placeholder:"Оберіть дату виходу",minDate:d.entryDate,hasError:!!h.exitDate})]})]})]})]}),t.jsx(Gr,{children:t.jsx(Ir,{type:"button",onClick:v,children:"Додати"})})]})},Ur=r(ze)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,Vr=r.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,Yr=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,st=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`,de=r.div`
  display: flex;
  flex-direction: column;
`,H=r.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,U=r.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({$error:e,theme:a})=>e?a.red:a.borderColor};
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
`,lt=r.span`
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
`,qr=r.button`
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
`,Kr=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,Jr=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,Xr=r(de)`
  flex: 1;
`,Qr=r.div`
  margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray};
  border: 1px dashed ${({theme:e})=>e.textGray};
  border-radius: 8px;
`,Zr=r.div`
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
  
  ${e=>!e.$hasMedicalRecords&&`
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
`,ie=r.div`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.disabledBG};
  margin-right: 10px;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,ae=r.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({theme:e})=>e.textGray};
  margin-bottom: 2px;
`,se=r.p`
  font-size: 13px;
  color: ${({theme:e})=>e.textBlack};
  word-wrap: break-word;
  word-break: break-word;
`,ao=r.button`
  background: none;
  border-radius: 50%;
  border: 2px solid  ${({theme:e})=>e.red};
  padding: 2px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  svg {
    stroke: ${({theme:e})=>e.red};
    fill: none; /* важливо */
    width: 1.2rem;  /* залишаємо розмір як у тебе */
    height: 1.2rem;
    transition: stroke 0.2s;
  }

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.red};

    svg {
      stroke: ${({theme:e})=>e.white};
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    svg {
      stroke: ${({theme:e})=>e.red};
    }
  }

  &:focus {
    outline: none;
  }

  &:focus-within svg {
    stroke: ${({theme:e})=>e.redDark};
  }
`,so=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid  ${e=>e.theme.greenMain};
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,dt=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,lo=({onDataUpdate:e,medicalData:a,setMedicalData:f})=>{const[d,k]=o.useState([]),[h,w]=o.useState({doctorName:"",healthStatus:"",medicalInstitution:"",examinationDate:""}),[m,g]=o.useState({}),v=n=>{const{name:b,value:y}=n.target;f(E=>({...E,[b]:y.trimStart()}))},$=n=>{const{name:b,value:y}=n.target;f(E=>({...E,[b]:y.trim()}))},x=100;o.useEffect(()=>{const n=d.map(b=>({doctorName:b.doctorName,healthStatus:b.healthStatus||"",medicalInstitution:b.medicalInstitution||"",examinationDate:b.examinationDate||""}));e(n)},[d,e]);const c=()=>{const n={};return h.doctorName.trim()||(n.doctorName="Ім'я лікаря є обов'язковим"),h.healthStatus.trim()||(n.healthStatus="Статус здоров'я є обов'язковим"),g(n),Object.keys(n).length===0},i=()=>{if(c()){const n={...h,doctorName:h.doctorName.trim(),healthStatus:h.healthStatus.trim(),medicalInstitution:h.medicalInstitution.trim(),id:Date.now()};k(b=>[...b,n]),w({doctorName:"",healthStatus:"",medicalInstitution:"",examinationDate:""}),g({})}},p=n=>{k(b=>b.filter(y=>y.id!==n))},u=(n,b)=>{w(y=>({...y,[n]:b})),m[n]&&g(y=>{const E={...y};return delete E[n],E})},j=n=>{u("examinationDate",n)},s=n=>{if(!n)return"";try{const b=new Date(n);return isNaN(b.getTime())?n:b.toLocaleDateString("uk-UA")}catch{return n}};return t.jsxs(Vr,{children:[t.jsxs(so,{children:[t.jsxs(dt,{children:[t.jsx(H,{htmlFor:"input1",children:"Алергії"}),t.jsx(U,{type:"text",name:"allergies",value:a.allergies,onChange:v,onBlur:$,placeholder:"Введіть алергії спортсмена",maxLength:x})]}),t.jsxs(dt,{children:[t.jsx(H,{htmlFor:"input2",children:"Захворювання"}),t.jsx(U,{type:"text",name:"diseases",value:a.diseases,onChange:v,onBlur:$,placeholder:"Введіть захворювання спортсмена",maxLength:x})]})]}),d.length===0?t.jsx(Qr,{children:"Додайте інформацію про медкомісії"}):t.jsx(Zr,{children:t.jsx(eo,{children:t.jsx(to,{$hasMedicalRecords:d.length>0,children:d.map(n=>t.jsxs(oo,{children:[t.jsxs(no,{children:[t.jsx(ro,{children:"Медкомісія"}),t.jsx(ao,{onClick:()=>p(n.id),"aria-label":"Видалити запис",children:t.jsx(Ur,{})})]}),t.jsxs(io,{children:[t.jsx(ie,{children:t.jsxs(se,{children:[t.jsx(ae,{children:"Лікар: "})," ",n.doctorName]})}),t.jsx(ie,{children:t.jsxs(se,{children:[t.jsx(ae,{children:"Статус здоров'я: "})," ",n.healthStatus]})}),t.jsx(ie,{children:t.jsxs(se,{children:[t.jsx(ae,{children:"Медичний заклад: "})," ",n.medicalInstitution.trim()?n.medicalInstitution:"Не вказано"]})}),t.jsx(ie,{children:t.jsxs(se,{children:[t.jsx(ae,{children:"Дата обстеження: "})," ",s(n.examinationDate)||"Не вказано"]})})]})]},n.id))})})}),t.jsxs(Yr,{children:[t.jsxs(st,{children:[t.jsxs(de,{children:[t.jsxs(H,{children:["Лікар *",m.doctorName&&t.jsx(lt,{children:m.doctorName})]}),t.jsx(U,{type:"text",value:h.doctorName,onChange:n=>u("doctorName",n.target.value),placeholder:"Введіть ім'я лікаря",maxLength:x,$error:m.doctorName})]}),t.jsxs(de,{children:[t.jsxs(H,{children:["Статус здоров'я *",m.healthStatus&&t.jsx(lt,{children:m.healthStatus})]}),t.jsx(U,{type:"text",value:h.healthStatus,onChange:n=>u("healthStatus",n.target.value),placeholder:"Введіть статус здоров'я",maxLength:x,$error:m.healthStatus})]})]}),t.jsxs(st,{children:[t.jsxs(de,{children:[t.jsx(H,{children:"Медичний заклад"}),t.jsx(U,{type:"text",value:h.medicalInstitution,onChange:n=>u("medicalInstitution",n.target.value),placeholder:"Введіть назву медичного закладу",maxLength:x})]}),t.jsx(Jr,{children:t.jsxs(Xr,{children:[t.jsx(H,{children:"Дата обстеження"}),t.jsx(Ne,{value:h.examinationDate,onChange:j})]})})]})]}),t.jsx(Kr,{children:t.jsx(qr,{type:"button",onClick:i,children:"Додати"})})]})},co=r(ze)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,po=r.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,ho=r.div`
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
`,Ce=r.div`
  display: flex;
  flex-direction: column;
`,Ie=r.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,Ge=r.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({$error:e,theme:a})=>e?a.red:a.borderColor};
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
`,xo=r.span`
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
`,uo=r.button`
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
`,mo=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,go=r.div`
  margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray};
  border: 1px dashed ${({theme:e})=>e.textGray};
  border-radius: 8px;
`,bo=r.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,fo=r.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom: 4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,wo=r.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  min-width: max-content;
  
  ${e=>!e.$hasInstitutions&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,$o=r.p`
  color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,ko=r.div`
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
`,vo=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,jo=r.div`
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
`,Se=r.div`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.disabledBG};
  margin-right: 10px;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,De=r.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({theme:e})=>e.textGray};
  margin-bottom: 2px;
`,Be=r.p`
  font-size: 13px;
  color: ${({theme:e})=>e.textBlack};
  word-wrap: break-word;
  word-break: break-word;
`,yo=r.button`
  background: none;
  border-radius: 50%;
  border: 2px solid  ${({theme:e})=>e.red};
  padding: 2px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  svg {
    stroke: ${({theme:e})=>e.red};
    fill: none; /* важливо */
    width: 1.2rem;  /* залишаємо розмір як у тебе */
    height: 1.2rem;
    transition: stroke 0.2s;
  }

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.red};

    svg {
      stroke: ${({theme:e})=>e.white};
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    svg {
      stroke: ${({theme:e})=>e.red};
    }
  }

  &:focus {
    outline: none;
  }

  &:focus-within svg {
    stroke: ${({theme:e})=>e.redDark};
  }
`,Co=({onDataUpdate:e})=>{const[a,f]=o.useState([]),[d,k]=o.useState({name:"",contacts:"",relationship:""}),[h,w]=o.useState({}),m=100;o.useEffect(()=>{const c=a.map(i=>({name:i.name,contacts:i.contacts||"",relationship:i.relationship||""}));e(c)},[a,e]);const g=()=>{const c={};return d.name.trim()||(c.name="Обов'язкове поле"),w(c),Object.keys(c).length===0},v=()=>{if(g()){const c={...d,name:d.name.trim(),contacts:d.contacts.trim(),relationship:d.relationship.trim(),id:Date.now()};f(i=>[...i,c]),k({name:"",contacts:"",relationship:""}),w({})}},$=c=>{f(i=>i.filter(p=>p.id!==c))},x=(c,i)=>{k(p=>({...p,[c]:i})),h[c]&&w(p=>{const u={...p};return delete u[c],u})};return t.jsxs(po,{children:[a.length===0?t.jsx(go,{children:"Додайте інформацію"}):t.jsx(bo,{children:t.jsx(fo,{children:t.jsx(wo,{$hasInstitutions:a.length>0,children:a.map(c=>t.jsxs(ko,{children:[t.jsxs(vo,{children:[t.jsx($o,{children:"Вказана інформація"}),t.jsx(yo,{onClick:()=>$(c.id),"aria-label":"Видалити запис",children:t.jsx(co,{})})]}),t.jsxs(jo,{children:[t.jsx(Se,{children:t.jsxs(Be,{children:[t.jsx(De,{children:"Ім'я: "})," ",c.name]})}),t.jsx(Se,{children:t.jsxs(Be,{children:[t.jsx(De,{children:"Контакти: "})," ",c.contacts.trim()?c.contacts:"Не вказано"]})}),t.jsx(Se,{children:t.jsxs(Be,{children:[t.jsx(De,{children:"Ступінь спорідненості: "})," ",c.relationship.trim()?c.relationship:"Не вказано"]})})]})]},c.id))})})}),t.jsxs(ho,{children:[t.jsxs(Ce,{children:[t.jsxs(Ie,{children:["Ім'я родича*",h.name&&t.jsx(xo,{children:h.name})]}),t.jsx(Ge,{type:"text",value:d.name,onChange:c=>x("name",c.target.value),placeholder:"Введіть ім'я",maxLength:m,$error:h.name})]}),t.jsxs(Ce,{children:[t.jsx(Ie,{children:"Контакти родича *"}),t.jsx(Ge,{type:"text",value:d.contacts,onChange:c=>x("contacts",c.target.value),placeholder:"Введіть контактні дані",maxLength:m})]}),t.jsxs(Ce,{children:[t.jsx(Ie,{children:"Ступінь спорідненості"}),t.jsx(Ge,{type:"text",value:d.relationship,onChange:c=>x("relationship",c.target.value),placeholder:"Введіть ступінь спорідненості",maxLength:m})]})]}),t.jsx(mo,{children:t.jsx(uo,{type:"button",onClick:v,children:"Додати"})})]})},G={mobile:"320px",tablet:"768px",desktop:"1024px"},Io=r.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${G.desktop}) {
    width: 8rem;
    height: 8rem;
  }
`,Go=r.div`
  position: sticky; 
  left: 0; 
  right: 0;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
`,So=r.div`
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  
  background: ${({blurred:e})=>e?"rgba(255, 255, 255, 0.2)":"transparent"};
  backdrop-filter: ${({blurred:e})=>e?"blur(10px)":"none"};
  -webkit-backdrop-filter: ${({blurred:e})=>e?"blur(10px)":"none"};
  filter: ${({blurred:e})=>e?"blur(3px)":"none"};
  pointer-events: ${({blurred:e})=>e?"none":"auto"};
  border-radius: 16px;
  box-shadow: ${({blurred:e})=>e?"0 4px 30px rgba(0, 0, 0, 0.1)":"none"};

  @media (min-width: ${G.tablet}) {
    align-items: flex-start;
    height: 100%;
  }
`,ct=r.div`
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

  ${({$isSportsFacility:e})=>e&&Re`
      @media (min-width: ${G.tablet}) {
       padding: 14px 0;
      }
  
      @media (min-width: ${G.desktop}) {
        padding: 14px 0;
      }
  `}
`,Do=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${G.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`,Bo=r.div`
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
`,Eo=r.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,Mo=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,No=r.label`
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
`,Ro=r.input`
  display: none;
`,zo=r.div`
  flex: 1;
  
  @media (min-width: ${G.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center; 
  }
`,kt=r.h2`
  color: ${({theme:e})=>e.greenMain};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`,pt=r.div`
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
`,S=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;

${({$isUniversity:e})=>e&&Re`
      @media (max-width: 1024px) {
        margin-top: 10px; 
      }

      @media (min-width: 1024px) {
        margin-top: 0;
      }
    `}
`,D=r.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,B=r.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,isError:a})=>a?e.red:e.borderColor};
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
`,Lo=r.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,To=r.button`
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
    color: ${({theme:e})=>e.textGray};
    cursor: not-allowed;
  }
`,Po=r(Pt)`
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
`,Ee=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ht=r.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
   margin-top: ${e=>e.$hasSportInfo?"20px":"0"};
  @media (min-width: ${G.desktop}) {
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }
`,xt=r.div`
  flex: 1;
  
  @media (min-width: ${G.desktop}) {
     margin-top: ${e=>e.$hasSportInfo?"0":"3.1rem"}
  }

  
`,ut=r.div`
  flex: 1;
  @media (max-width: ${G.desktop}) {
    margin-top: ${e=>e.$hasSportInfo?"20px":"0"}
  }
`,Me=r.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,R=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: ${G.desktop}) {
    flex-direction: row;
    gap: 20px;
    
    & > ${S} {
      flex: 1;
    }
  }
`,Fo=r(kt)`
  margin-bottom: 1rem;
  padding-top: 10px;

  @media (min-width: ${G.desktop}) {
    padding-top: 0;
  }
`,Oo=r.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:a,name:f})=>a&&f==="notes"?e.red:e.borderColor};
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
`,_o=r.div`
  margin: 20px 0;
`,Wo=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${G.desktop}) {
    flex-direction: row;
    gap: 40px;
  }

`,mt=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  ${({$isSportsFacility:e})=>e&&Re`
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
`;const Ho=r.button`
  position: absolute;
  top: -0.3rem;
  right: -0.3rem;
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.mode==="dark"?"#e0e0e0":"#343434"};
  border: 2px solid
    ${({theme:e})=>e.mode==="dark"?"#e0e0e0":"#343434"};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.2s ease;
  will-change: transform;

  &:hover {
    background-color: ${({theme:e})=>e.mode==="dark"?"#ffffff":"#555555"};
    box-shadow: ${({theme:e})=>e.mode==="dark"?"0 0 0 4px rgba(255, 255, 255, 0.6), 0 2px 8px rgba(0, 0, 0, 0.3)":"0 0 0 4px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.35)"};
    transform: scale(1.05);
  }

  @media (min-width: ${G.desktop}) {
    width: 2rem;
    height: 2rem;
  }
`,Ao=r(Ft)`
  fill: ${({theme:e})=>e.mode==="dark"?"#343434":"#ffffff"};
  width: 12px;
  height: 12px;
  transform: rotate(180deg);

  @media (min-width: ${G.desktop}) {
    width: 14px;
    height: 14px;
  }
`,Qo=()=>{const e=o.useRef(null),a=o.useRef(null),f=gt(),{loading:d}=bt(l=>l.athletes),k=Dt(),{setTitle:h}=Bt(),[w,m]=o.useState(null),[g,v]=o.useState(null),[$,x]=o.useState(""),[c,i]=o.useState(""),[p,u]=o.useState(""),[j,s]=o.useState(""),[n,b]=o.useState(""),[y,E]=o.useState(""),[M,P]=o.useState(""),[N,Le]=o.useState(""),[V,Te]=o.useState(""),[ce,Pe]=o.useState(""),[pe,Fe]=o.useState(""),[he,Oe]=o.useState(""),[Y,_e]=o.useState(""),[q,We]=o.useState(""),[K,He]=o.useState(""),[xe,Ae]=o.useState(null),[J,Ue]=o.useState(""),[X,Ve]=o.useState(""),[F,Ye]=o.useState(""),[O,qe]=o.useState(""),[Q,Ke]=o.useState(""),[_,Je]=o.useState(""),[ue,Xe]=o.useState({}),[Z,Qe]=o.useState({allergies:"",diseases:""}),[me,Ze]=o.useState({}),[ge,et]=o.useState({}),[z,L]=o.useState({firstName:!1,lastName:!1,birthdate:!1,currentSportInstitution:!1,trainer:!1,entryDate:!1}),be=o.useRef(!1),vt=l=>{const C=l.target.files[0];if(C){m(C);const ee=URL.createObjectURL(C);return v(ee),()=>URL.revokeObjectURL(ee)}},[jt,fe]=o.useState(!1),[we,$e,yt]=Ot(jt);o.useEffect(()=>{w||g||$!==""||c!==""||p!==""||j||n!==""||y||M!==""||N!==""||V!==""||ce!==""||pe!==""||he||Y!==""||q!==""||K!==""||xe!==null||X!==""||J!==""||F!==""||O!==""||Q!==""||_||Object.keys(ue).length>0||Z.allergies!==""||Z.diseases!==""||Object.keys(me).length>0||Object.keys(ge).length>0?fe(!0):fe(!1)},[w,g,$,c,p,j,n,y,M,N,V,ce,pe,he,Y,q,K,xe,X,J,F,O,Q,_,ue,me,Z,ge]);const tt=Object.values(z).some(Boolean)||!$.trim()||!c.trim()||!j||!F.trim()||!O.trim()||!_;o.useEffect(()=>(h("Створення нового спортсмена"),()=>{g&&URL.revokeObjectURL(g)}),[h]),o.useEffect(()=>{be.current&&we&&($e(),be.current=!1)},[we,$e]);const Ct=l=>{if(l.key==="Enter"||l.key===" "){const C=document.getElementById("photo-upload");C&&C.click()}},It=l=>{l.preventDefault();const C={firstName:!$.trim(),lastName:!c.trim(),birthdate:!j,currentSportInstitution:!F.trim(),trainer:!O.trim(),entryDate:!_},ee=!Object.values(C).some(W=>W);if(L(C),!ee){C.currentSportInstitution||C.trainer||C.entryDate?(console.log("Has sports facility errors, scrolling to that section"),e.current&&(e.current.open(),setTimeout(()=>{te.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),e.current.scrollIntoView({behavior:"smooth",block:"center"})},300))):(console.log("No sports facility errors, scrolling to top"),setTimeout(()=>{te.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),a.current.scrollIntoView({behavior:"smooth",block:"center"})},100));return}const I=new FormData;w&&I.append("athlete-avatar",w),I.append("firstName",$),I.append("lastName",c),I.append("patronymic",p),I.append("birthdate",j),I.append("gender",y||""),I.append("address",n||""),I.append("phone",M||""),I.append("email",N||""),I.append("socialMedia",V||""),I.append("role",Y||""),I.append("sportCategory",q||""),I.append("notes",K||""),I.append("teamId",xe||""),I.append("school",X||""),I.append("university",J||""),I.append("currentSportInstitution",F||""),I.append("trainer",O||""),I.append("trainerContacts",Q||""),I.append("entryDate",_||""),I.append("previousEstablishments",JSON.stringify(ue||{})),I.append("medicalInformation",JSON.stringify(me||{})),I.append("parentsInformation",JSON.stringify(ge||{})),f(Et(I)).unwrap().then(W=>{te.success("Спортсмена успішно створено!"),be.current=!0,fe(!1),m(null),v(null),x(""),i(""),u(""),s(""),b(""),E(""),P(""),Le(""),Te(""),Pe(""),Fe(""),Oe(""),_e(""),We(""),He(""),Ae(null),Ue(""),Ve(""),Ye(""),qe(""),Ke(""),Je(""),Xe({}),Qe({allergies:"",diseases:""}),Ze({}),et({}),k(`/athletes/${W.id}`)}).catch(W=>{te.error(`Помилка: ${W}`)})},rt=()=>{g&&g!==ve&&URL.revokeObjectURL(g),m(null),v(null);const l=document.getElementById("photo-upload");l&&(l.value="")},Gt=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),rt())};return t.jsxs(t.Fragment,{children:[d&&t.jsx(Go,{children:t.jsx(ft,{})}),t.jsx(So,{blurred:d,children:t.jsxs(ct,{children:[t.jsxs(Do,{children:[t.jsx(Bo,{children:t.jsxs(Io,{children:[t.jsx(Eo,{children:t.jsx(Mo,{src:g||ve,alt:"Фото спортсмена"})}),t.jsx(No,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:Ct,children:t.jsx(Po,{})}),g&&g!==ve&&t.jsx(Ho,{type:"button",tabIndex:0,onKeyDown:Gt,onClick:rt,title:"Скасувати завантаження фото",children:t.jsx(Ao,{})}),t.jsx(Ro,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:vt})]})}),t.jsxs(zo,{ref:a,children:[t.jsx(kt,{children:"Особиста інформація"}),t.jsxs(pt,{children:[t.jsxs(S,{children:[t.jsx(D,{htmlFor:"firstName",children:"Ім'я *"}),t.jsx(B,{id:"firstName",type:"text",placeholder:"Введіть ім'я",value:$,onChange:l=>{x(l.target.value),l.target.value.trim()&&L(C=>({...C,firstName:!1}))},isError:z.firstName})]}),t.jsxs(S,{children:[t.jsx(D,{htmlFor:"lastName",children:"Прізвище *"}),t.jsx(B,{id:"lastName",type:"text",placeholder:"Введіть прізвище",value:c,onChange:l=>{i(l.target.value),l.target.value.trim()&&L(C=>({...C,lastName:!1}))},isError:z.lastName})]}),t.jsxs(S,{children:[t.jsx(D,{htmlFor:"patronymic",children:"По батькові"}),t.jsx(B,{id:"patronymic",type:"text",placeholder:"Введіть по батькові",value:p,onChange:l=>u(l.target.value)})]})]})]})]}),t.jsxs(ht,{children:[t.jsx(xt,{children:t.jsxs(Me,{children:[t.jsx(R,{children:t.jsxs(S,{children:[t.jsx(D,{htmlFor:"birthdate",children:"Дата народження *"}),t.jsx(Ee,{children:t.jsx(ke,{selectedDate:j,onDateChange:l=>{s(l),l&&L(C=>({...C,birthdate:!1}))},isError:z.birthdate})})]})}),t.jsx(R,{children:t.jsxs(S,{children:[t.jsx(D,{htmlFor:"address",children:"Адреса"}),t.jsx(B,{id:"address",type:"text",value:n,onChange:l=>b(l.target.value),placeholder:"Введіть адресу"})]})}),t.jsx(R,{children:t.jsx(tr,{label:"Виберіть стать",value:y,onChange:E})})]})}),t.jsxs(ut,{children:[t.jsx(Fo,{children:"Контакти"}),t.jsxs(Me,{children:[t.jsx(R,{children:t.jsxs(S,{children:[t.jsx(D,{htmlFor:"phone",children:"Телефон"}),t.jsx(B,{id:"phone",type:"tel",value:M,onChange:l=>P(l.target.value),placeholder:"Введіть номер телефону"})]})}),t.jsx(R,{children:t.jsxs(S,{children:[t.jsx(D,{htmlFor:"email",children:"Email"}),t.jsx(B,{id:"email",type:"email",value:N,onChange:l=>Le(l.target.value),placeholder:"Введіть email"})]})}),t.jsx(R,{children:t.jsxs(S,{children:[t.jsx(D,{htmlFor:"socialMedia",children:"Соцмережі"}),t.jsx(B,{id:"socialMedia",type:"text",value:V,onChange:l=>Te(l.target.value),placeholder:"Введіть посилання на соцмережі"})]})})]})]})]}),t.jsx(T,{helpTooltiptitle:"Ці параметри не є обов'язковими, але вони допомагають отримати детальнішу статистику 📊",helpTooltip:"Додайте перший замір щоб відстежувати зміни спортсмена. Після створення профілю спортсмена ви зможете додавати нові заміри та повністю керувати ними 😊",title:"Фізичні дані",children:t.jsxs(pt,{hasphysique:!0,children:[t.jsxs(S,{children:[t.jsx(D,{htmlFor:"height",children:"Зріст у м."}),t.jsx(B,{id:"height",type:"number",min:"0",max:"4",placeholder:"Введіть зріст у м.",step:"0.1",value:ce,onChange:l=>Pe(l.target.value)})]}),t.jsxs(S,{children:[t.jsx(D,{htmlFor:"weight",children:"Вага у кг."}),t.jsx(B,{id:"weight",min:"0",max:"400",step:"0.1",placeholder:"Введіть вагу у кг.",type:"number",value:pe,onChange:l=>Fe(l.target.value)})]}),t.jsxs(S,{children:[t.jsx(D,{htmlFor:"dateOfMeasurement",children:"Дата вимірювання"}),t.jsx(Ee,{children:t.jsx(ke,{selectedDate:he,onDateChange:Oe})})]})]})}),t.jsx(T,{title:"Спортивна інформація",children:t.jsxs(ht,{$hasSportInfo:!0,children:[t.jsx(xt,{$hasSportInfo:!0,children:t.jsxs(Me,{children:[t.jsx(R,{children:t.jsxs(S,{children:[t.jsx(D,{htmlFor:"role",children:"Роль у команді"}),t.jsx(B,{id:"role",type:"text",value:Y,onChange:l=>_e(l.target.value),placeholder:"Введіть роль у команді"})]})}),t.jsx(R,{children:t.jsxs(S,{children:[t.jsx(D,{htmlFor:"sportCategory",children:"Спортивний розряд"}),t.jsx(B,{id:"sportCategory",type:"text",value:q,onChange:l=>We(l.target.value),placeholder:"Введіть спортивний розряд"})]})}),t.jsx(R,{children:t.jsxs(S,{children:[t.jsx(D,{htmlFor:"notes",children:"Примітки про спортсмена"}),t.jsx(Oo,{id:"notes",value:K,onChange:l=>He(l.target.value),placeholder:"Додайте примітки про спортсмена"})]})})]})}),t.jsx(ut,{$hasSportInfo:!0,children:t.jsx(mr,{onTeamSelect:Ae})})]})}),t.jsx(T,{title:"Навчальні заклади",children:t.jsx(_o,{children:t.jsxs(R,{children:[t.jsxs(S,{children:[t.jsx(D,{htmlFor:"school",children:"Школа"}),t.jsx(B,{id:"school",type:"text",placeholder:"Введіть назву школи",value:X,onChange:l=>Ve(l.target.value)})]}),t.jsxs(S,{$isUniversity:!0,children:[t.jsx(D,{htmlFor:"university",children:"Університет"}),t.jsx(B,{id:"university",type:"text",placeholder:"Введіть назву університету",value:J,onChange:l=>Ue(l.target.value)})]})]})})}),t.jsx(T,{title:"Спортивний заклад",ref:e,children:t.jsx(ct,{$isSportsFacility:!0,children:t.jsxs(Wo,{children:[t.jsxs(mt,{$isSportsFacility:!0,children:[t.jsxs(S,{children:[t.jsx(D,{children:"Поточний спортивний заклад *"}),t.jsx(B,{type:"text",value:F,onChange:l=>{Ye(l.target.value),l.target.value.trim()&&L(C=>({...C,currentSportInstitution:!1}))},placeholder:"Введіть назву закладу",isError:z.currentSportInstitution})]}),t.jsxs(S,{children:[t.jsx(D,{children:"Тренер *"}),t.jsx(B,{type:"text",value:O,onChange:l=>{qe(l.target.value),l.target.value.trim()&&L(C=>({...C,trainer:!1}))},placeholder:"Введіть ім'я тренера",isError:z.trainer})]})]}),t.jsxs(mt,{$isSportsFacility:!0,children:[t.jsxs(S,{children:[t.jsx(D,{children:"Контакти тренера"}),t.jsx(B,{type:"text",value:Q,onChange:l=>Ke(l.target.value),placeholder:"Введіть контакти"})]}),t.jsxs(S,{children:[t.jsx(D,{children:"Дата вступу *"}),t.jsx(Ee,{children:t.jsx(ke,{selectedDate:_,onDateChange:l=>{Je(l),l&&L(C=>({...C,entryDate:!1}))},isError:z.entryDate})})]})]})]})})}),t.jsx(T,{title:"Минулі спортивні заклади",children:t.jsx(Ar,{onDataUpdate:Xe})}),t.jsx(T,{title:"Медична інформація",children:t.jsx(lo,{onDataUpdate:Ze,medicalData:Z,setMedicalData:Qe})}),t.jsx(T,{title:"Родичи спортсмена",children:t.jsx(Co,{onDataUpdate:et})}),t.jsx(Lo,{children:t.jsx(To,{type:"button",onClick:It,disabled:d||tt,children:d?"Створення...":tt?"Заповніть обов'язкові поля":"Додати спортсмена"})})]})}),t.jsx(_t,{isOpen:we,onConfirm:$e,onCancel:yt})]})};export{Qo as default};
