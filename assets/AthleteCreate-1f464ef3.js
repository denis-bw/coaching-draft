import{d as r,r as o,j as t,b as gt,a as ft,f as ot,L as bt,i as Dt,R as Ne,m as Bt,u as Et,y as te,T as Mt}from"./index-89a1ad42.js";import{g as nt,a as Rt,u as Nt,b as Lt,D as zt,C as ke}from"./CustomDatePicker-c79c05cf.js";import{p as ve}from"./PlaceholderProfile-3c1b0d36.js";import{S as wt}from"./ChevronDownicon-73aea26d.js";import{P as Tt}from"./PlaceholderTeam-7b26a08e.js";import{S as Le}from"./DeleteIcon-ebe2a402.js";import{a as Pt,S as Ft,u as Ot,N as _t}from"./minus-56a9d831.js";const Wt=r.div`
  
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
`,Kt=e=>o.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2}),o.createElement("path",{d:"M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M12 16H12.01",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),$t=r(Kt)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({theme:e})=>e.white};
  transition: stroke 0.3s ease;
`,Jt=r.button.attrs({type:"button"})`
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
`,Xt=r.div`
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
    
    ${({placement:e,theme:a})=>e==="top"?`
          bottom: -9px; /* Трохи вище, ніж зовнішня стрілка */
          left: 79.4%;
          margin-left: -6px;
          border-width: 9px 9px 0;
          border-color: ${a.black} transparent transparent;
        `:`
          top: -9px; /* Трохи нижче, ніж зовнішня стрілка */
          left: 79.4%;
          margin-left: -6px;
          border-width: 0 9px 9px;
          border-color: transparent transparent ${a.black};
        `}
  }

  @media (max-width: 768px) {
    max-width: 260px;

  }
`,Zt=r.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
`,Qt=r.div`
  font-size: 14px; 
  font-weight: 600; 
  margin-bottom: 5px; 
`,er=({title:e,text:a})=>{const[g,l]=o.useState(!1),[v,x]=o.useState("top"),[$,f]=o.useState(null),m=o.useRef(null),k=o.useRef(null),b=()=>{if(!k.current||!m.current||!g)return;const p=k.current.getBoundingClientRect(),c=m.current.getBoundingClientRect(),i=window.innerWidth,h=c.height,u=c.width,j=p.top,s=p.bottom,n=p.left;p.right;const w=p.width;p.height;const y=n+w/2,E=j>h+15?"top":"bottom";x(E);let N,B;E==="top"?N=j-h-12:N=s+12,B=y-u*.8,B<10&&(B=10),B+u>i-10&&(B=i-u-10),f({top:N,left:B})};return o.useEffect(()=>{g&&setTimeout(b,0)},[g]),o.useEffect(()=>{if(g)return window.addEventListener("scroll",b),window.addEventListener("resize",b),()=>{window.removeEventListener("scroll",b),window.removeEventListener("resize",b)}},[g]),t.jsxs(Jt,{ref:k,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),onClick:()=>l(!g),children:[t.jsx($t,{}),t.jsx(Xt,{ref:m,visible:g,placement:v,tooltipPosition:$,children:t.jsxs(Zt,{children:[e&&t.jsx(Qt,{children:e}),a]})})]})},P=o.forwardRef(({children:e,helpTooltiptitle:a,helpTooltip:g,title:l,top:v,left:x},$)=>{const[f,m]=o.useState(!1),[k,b]=o.useState(!1),p=o.useRef(null),c=o.useRef(null),i=o.useRef(!1);o.useImperativeHandle($,()=>({open:()=>{m(!0),b(!0)},close:()=>{m(!1)},scrollIntoView:u=>{p.current&&p.current.scrollIntoView(u)},isOpen:()=>f}));const h=()=>{m(u=>!u),b(!0)};return o.useEffect(()=>{const u=new IntersectionObserver(([j])=>{!k&&j.isIntersecting&&!i.current&&j.intersectionRatio>=1&&(setTimeout(()=>{m(!0)},200),i.current=!0)},{threshold:1,rootMargin:"0px 0px -100px 0px"});return p.current&&u.observe(p.current),()=>{p.current&&u.unobserve(p.current)}},[k]),o.useEffect(()=>{c.current&&(f?c.current.removeAttribute("inert"):c.current.setAttribute("inert",""))},[f]),t.jsxs(Wt,{ref:p,isOpen:f,children:[t.jsxs(At,{onClick:h,role:"button",tabIndex:0,children:[l&&t.jsx(Vt,{children:l}),t.jsxs(Yt,{children:[g&&t.jsx(qt,{onClick:u=>u.stopPropagation(),children:t.jsx(er,{title:a,text:g,top:v,left:x})}),t.jsx(Ht,{isOpen:f})]})]}),t.jsx(Ut,{ref:c,isOpen:f,role:"region",children:e})]})}),tr=r.div`
  position: relative;
  width: 100%;
`,rr=r.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,or=r.span`
  color: ${({selectedValue:e,theme:a})=>e===""?a.textBlack:e==="Чоловік"||e==="Жінка"?a.greenMain:a.textGray}; 
  font-family: 'Inter Tight', sans-serif;
`,nr=r.button.attrs({type:"button"})`
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
`,ir=r.div`
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
`,ar=r(wt)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) ${e=>e.open?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
  width: 22px;
  height: auto;
`,sr=({label:e,value:a,onChange:g})=>{const[l,v]=o.useState(!1),[x,$]=o.useState(a||""),f=o.useRef(null),m=()=>{v(!l)},k=p=>{$(p),g(p),v(!1)},b=p=>{f.current&&!f.current.contains(p.target)&&v(!1)};return o.useEffect(()=>(document.addEventListener("click",b),()=>{document.removeEventListener("click",b)}),[]),t.jsxs(tr,{ref:f,children:[e&&t.jsx(rr,{onClick:m,children:e}),t.jsxs(nr,{onClick:m,children:[t.jsx(or,{selectedValue:x,children:x||"Не вибрано"}),t.jsx(ar,{open:l})]}),l&&t.jsxs(ir,{children:[t.jsx(je,{className:x==="Чоловік"?"selected":"",onClick:()=>k("Чоловік"),children:"Чоловік"}),t.jsx(je,{className:x==="Жінка"?"selected":"",onClick:()=>k("Жінка"),children:"Жінка"}),t.jsx(je,{className:x===""?"selected":"",onClick:()=>k(""),children:"Не вибрано"})]})]})},lr=r.div`
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
`,dr=r.div`
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
`,cr=r.button`
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
`,pr=r.div`
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
`,hr=r.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,xr=r.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,ur=r.div`
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
`,mr=r.div`
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
`,gr=r.div`
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  flex: 1; 
  overflow: hidden; 
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`,fr=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,br=r.div`
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
`,wr=r.img`
  border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,$r=r.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,kr=({onTeamSelect:e})=>{const[a,g]=o.useState(null),[l,v]=o.useState({}),x=o.useRef(null),$=o.useRef({}),f=o.useRef(!1),m=gt(),{teams:k,isLoading:b,hasMore:p,currentPage:c}=ft(s=>s.teams);o.useEffect(()=>{m(ot(1))},[m]),o.useEffect(()=>{if(k.length>0){const s={...l};k.forEach(n=>{if(n.logo&&!s[n.id]){const w=new Image;w.src=n.logo,w.onload=()=>{v(y=>({...y,[n.id]:{loaded:!0,error:!1}}))},w.onerror=()=>{v(y=>({...y,[n.id]:{loaded:!0,error:!0}})),console.log(`Зображення для команди ${n.id} не знайдено.`)},s[n.id]={loaded:!1,error:!1}}}),Object.keys(s).length>0&&v(n=>({...n,...s}))}},[k]);const i=o.useCallback(s=>{a&&a.id===s.id?(g(null),e&&e(null),$.current[s.id]&&$.current[s.id].blur()):(g(s),e&&e(s.id))},[a,e]),h=s=>{v(n=>({...n,[s]:{loaded:!0,error:!0}}))},u=s=>{if(!s.logo)return Tt;const n=l[s.id];return n&&n.error?Dt:s.logo},j=o.useCallback(()=>{if(!(f.current||!p)&&x.current){const{scrollTop:s,scrollHeight:n,clientHeight:w}=x.current;s+w>=n-20&&p&&!b&&(f.current=!0,m(ot(c)).finally(()=>{f.current=!1}))}},[m,p,b,c]);return o.useEffect(()=>{const s=x.current;if(s)return s.addEventListener("scroll",j),()=>s.removeEventListener("scroll",j)},[j]),o.useEffect(()=>{if(!x.current)return;const s={root:x.current,rootMargin:"0px",threshold:.1},n=M=>{M.forEach(E=>{E.target.classList&&(E.isIntersecting?(E.target.classList.add("visible"),E.target.classList.remove("hidden")):(E.target.classList.add("hidden"),E.target.classList.remove("visible")))})},w=new IntersectionObserver(n,s);return document.querySelectorAll('[id^="team-"]').forEach(M=>{w.observe(M),M.classList.add("hidden")}),()=>w.disconnect()},[k]),t.jsx(gr,{children:t.jsxs(ur,{children:[t.jsx(br,{children:t.jsx(fr,{children:t.jsx("h2",{children:"Команда спортсмена"})})}),t.jsxs(mr,{ref:x,children:[k.length>0?k.map(s=>t.jsx(lr,{className:"team-item",id:`team-${s.id}`,children:t.jsxs(cr,{ref:n=>$.current[s.id]=n,isSelected:a&&a.id===s.id,onClick:()=>i(s),type:"button",children:[t.jsx(pr,{children:t.jsx(wr,{loading:"lazy",src:u(s),alt:`Логотип команди ${s.name}`,onError:()=>h(s.id)})}),t.jsx(hr,{children:t.jsx(xr,{children:s.name})})]})},s.id)):b?null:t.jsx(dr,{children:"Команд не знайдено"}),b&&t.jsx($r,{children:t.jsx(bt,{})})]})]})})},vr=r(zt)`
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
`,jr=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 8px 4px;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 12px;
`,yr=r.select`
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


`,Cr=r.select`
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

`,Ir=r.div`
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
`,Gr=(e,a,g=1)=>{let l=[];for(let v=e;v<=a;v+=g)l.push(v);return l},Re=({value:e,onChange:a,placeholder:g="Оберіть дату",hasError:l=!1,minDate:v,maxDate:x})=>{const $=h=>{if(!h)return null;try{const u=new Date(h);return isNaN(u.getTime())?null:u}catch{return null}},[f,m]=o.useState(()=>$(e));o.useEffect(()=>{m($(e))},[e]);const b=Gr(1900,nt(new Date)),p=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],c=h=>{if(m(h),h){const u=h.getFullYear(),j=String(h.getMonth()+1).padStart(2,"0"),s=String(h.getDate()).padStart(2,"0");a(`${u}-${j}-${s}`)}else a("")};let i=$(v);return i&&(i=Rt(i,0)),t.jsx(Ir,{children:t.jsx(vr,{selected:f,onChange:c,dateFormat:"dd.MM.yyyy",placeholderText:g,locale:Nt,$error:l,minDate:i,maxDate:x?$(x):void 0,renderCustomHeader:({date:h,changeYear:u,changeMonth:j})=>t.jsxs(jr,{children:[t.jsx(yr,{value:nt(h),onChange:s=>{u(parseInt(s.target.value))},children:b.map(s=>t.jsx("option",{value:s,children:s},s))}),t.jsx(Cr,{value:p[Lt(h)],onChange:s=>{j(p.indexOf(s.target.value))},children:p.map((s,n)=>t.jsx("option",{value:s,children:s},n))})]})})})},Sr=r(Le)`
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
`,Er=r.span`
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

`,Rr=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,Nr=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,at=r(le)`
  flex: 1;
`,Lr=r.div`
margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray} ;
  border: 1px dashed ${({theme:e})=>e.textGray} ;
  border-radius: 8px;
`,zr=r.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid  ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,Tr=r.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom:4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,Pr=r.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  
  min-width:  max-content;
  
  ${e=>!e.$hasInstitutions&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,Fr=r.p`
 color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,Or=r.div`
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
`,Wr=r.div`
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
`,Hr=r.button`
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
`,Ar=e=>o.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 ",stroke:"none",fillRule:"evenodd"})),kt=r(Ar)`
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: ${({theme:e})=>e.red};
  transition: stroke 0.3s ease;
`,Ur=r.button.attrs({type:"button"})`
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

    ${kt} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,Vr=r.div`
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
`,Yr=r.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
  /* color: ${({theme:e})=>e.red}; */
`,qr=r.div`
  font-size: 14px; 
  font-weight: 700; 
  margin-bottom: 5px; 
  color:  ${({theme:e})=>e.red};
`,Kr=({title:e,text:a})=>{const[g,l]=o.useState(!1),[v,x]=o.useState("top"),[$,f]=o.useState(null),m=o.useRef(null),k=o.useRef(null),b=()=>{if(!k.current||!m.current||!g)return;const p=k.current.getBoundingClientRect(),c=m.current.getBoundingClientRect(),i=window.innerWidth,h=c.height,u=c.width,j=p.top,s=p.bottom,n=p.left;p.right;const w=p.width;p.height;const y=n+w/2,E=j>h+15?"top":"bottom";x(E);let N,B;E==="top"?N=j-h-12:N=s+12,B=y-u*.8,B<10&&(B=10),B+u>i-10&&(B=i-u-10),f({top:N,left:B})};return o.useEffect(()=>{g&&setTimeout(b,0)},[g]),o.useEffect(()=>{if(g)return window.addEventListener("scroll",b),window.addEventListener("resize",b),()=>{window.removeEventListener("scroll",b),window.removeEventListener("resize",b)}},[g]),t.jsxs(Ur,{ref:k,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),onClick:()=>l(!g),children:[t.jsx(kt,{}),t.jsx(Vr,{ref:m,visible:g,placement:v,tooltipPosition:$,children:t.jsxs(Yr,{children:[e&&t.jsx(qr,{children:e}),a]})})]})},Jr=({onDataUpdate:e})=>{const[a,g]=o.useState([]),[l,v]=o.useState({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),[x,$]=o.useState({}),f=100;o.useEffect(()=>{const i=a.map(h=>({previousCoach:h.coachName,previousInstitution:h.institution||"",coachContacts:h.coachContacts||"",entryDate:h.entryDate||"",exitDate:h.exitDate||""}));e(i)},[a,e]);const m=()=>{const i={};if(l.coachName.trim()||(i.coachName="Ім'я тренера є обов'язковим"),l.entryDate&&l.exitDate){const h=new Date(l.entryDate),j=new Date(l.exitDate).getTime()-h.getTime();Math.ceil(j/(1e3*3600*24))<0&&(i.exitDate="Дата виходу має бути не раніше дати вступу")}return $(i),Object.keys(i).length===0},k=()=>{if(m()){const i={...l,coachName:l.coachName.trim(),institution:l.institution.trim(),coachContacts:l.coachContacts.trim(),id:Date.now()};g(h=>[...h,i]),v({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),$({})}},b=i=>{g(h=>h.filter(u=>u.id!==i))},p=(i,h)=>{if(v(u=>({...u,[i]:h})),x[i]&&$(u=>{const j={...u};return delete j[i],j}),i==="entryDate"&&l.exitDate){const u=new Date(h),s=new Date(l.exitDate).getTime()-u.getTime();Math.ceil(s/(1e3*3600*24))<0?$(w=>({...w,exitDate:"Дата виходу з закладу має бути не раніше дати вступу"})):x.exitDate&&$(w=>{const y={...w};return delete y.exitDate,y})}},c=i=>{if(!i)return"";try{const h=new Date(i);return isNaN(h.getTime())?i:h.toLocaleDateString("uk-UA")}catch{return i}};return t.jsxs(Dr,{children:[a.length===0?t.jsx(Lr,{children:"Додайте інформацію"}):t.jsx(zr,{children:t.jsx(Tr,{children:t.jsx(Pr,{$hasInstitutions:a.length>0,children:a.map(i=>t.jsxs(Or,{children:[t.jsxs(_r,{children:[t.jsx(Fr,{children:"Вказана інформація"}),t.jsx(Hr,{onClick:()=>b(i.id),"aria-label":"Видалити заклад",children:t.jsx(Sr,{})})]}),t.jsxs(Wr,{children:[t.jsx(re,{children:t.jsxs(ne,{children:[t.jsx(oe,{children:"Тренер: "})," ",i.coachName]})}),t.jsx(re,{children:t.jsxs(ne,{children:[t.jsx(oe,{children:"Заклад: "}),i.institution.trim()?i.institution:"Не вказано"]})}),t.jsx(re,{children:t.jsxs(ne,{children:[t.jsx(oe,{children:"Контакти: "})," ",i.coachContacts.trim()?i.coachContacts:"Не вказано"]})}),t.jsxs(re,{children:[t.jsx(oe,{children:"Період:"}),t.jsxs(ne,{children:[c(i.entryDate)||"Не вказано"," ",t.jsx("span",{children:" - "}),c(i.exitDate)||"Не вказано"]})]})]})]},i.id))})})}),t.jsxs(Br,{children:[t.jsxs(it,{children:[t.jsxs(le,{children:[t.jsxs(A,{children:["Минулий Тренер *",x.coachName&&t.jsx(Er,{children:x.coachName})]}),t.jsx(ye,{type:"text",value:l.coachName,onChange:i=>p("coachName",i.target.value),placeholder:"Введіть ім'я тренера",maxLength:f,$error:x.coachName})]}),t.jsxs(le,{children:[t.jsx(A,{children:"Минулий спортивний заклад"}),t.jsx(ye,{type:"text",value:l.institution,onChange:i=>p("institution",i.target.value),placeholder:"Введіть назву закладу",maxLength:f})]})]}),t.jsxs(it,{children:[t.jsxs(le,{children:[t.jsx(A,{children:"Контакти тренера"}),t.jsx(ye,{type:"text",value:l.coachContacts,onChange:i=>p("coachContacts",i.target.value),placeholder:"Введіть контакти тренера",maxLength:f})]}),t.jsxs(Nr,{children:[t.jsxs(at,{children:[t.jsx(A,{children:"Дата вступу"}),t.jsx(Re,{value:l.entryDate,onChange:i=>p("entryDate",i),placeholder:"Оберіть дату вступу"})]}),t.jsxs(at,{children:[t.jsxs(A,{children:["Дата виходу",x.exitDate&&t.jsx(Kr,{title:"Неправильно введені дані",text:x.exitDate})]}),t.jsx(Re,{value:l.exitDate,onChange:i=>p("exitDate",i),placeholder:"Оберіть дату виходу",minDate:l.entryDate,hasError:!!x.exitDate})]})]})]})]}),t.jsx(Rr,{children:t.jsx(Mr,{type:"button",onClick:k,children:"Додати"})})]})},Xr=r(Le)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,Zr=r.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,Qr=r.div`
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
`,eo=r.button`
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
`,to=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,ro=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,oo=r(de)`
  flex: 1;
`,no=r.div`
  margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray};
  border: 1px dashed ${({theme:e})=>e.textGray};
  border-radius: 8px;
`,io=r.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,ao=r.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom: 4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,so=r.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  min-width: max-content;
  
  ${e=>!e.$hasMedicalRecords&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,lo=r.p`
  color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,co=r.div`
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
`,po=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,ho=r.div`
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
`,xo=r.button`
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
`,uo=r.div`
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
`,mo=({onDataUpdate:e,medicalData:a,setMedicalData:g})=>{const[l,v]=o.useState([]),[x,$]=o.useState({doctorName:"",healthStatus:"",medicalInstitution:"",examinationDate:""}),[f,m]=o.useState({}),k=n=>{const{name:w,value:y}=n.target;g(M=>({...M,[w]:y.trimStart()}))},b=n=>{const{name:w,value:y}=n.target;g(M=>({...M,[w]:y.trim()}))},p=100;o.useEffect(()=>{const n=l.map(w=>({doctorName:w.doctorName,healthStatus:w.healthStatus||"",medicalInstitution:w.medicalInstitution||"",examinationDate:w.examinationDate||""}));e(n)},[l,e]);const c=()=>{const n={};return x.doctorName.trim()||(n.doctorName="Ім'я лікаря є обов'язковим"),x.healthStatus.trim()||(n.healthStatus="Статус здоров'я є обов'язковим"),m(n),Object.keys(n).length===0},i=()=>{if(c()){const n={...x,doctorName:x.doctorName.trim(),healthStatus:x.healthStatus.trim(),medicalInstitution:x.medicalInstitution.trim(),id:Date.now()};v(w=>[...w,n]),$({doctorName:"",healthStatus:"",medicalInstitution:"",examinationDate:""}),m({})}},h=n=>{v(w=>w.filter(y=>y.id!==n))},u=(n,w)=>{$(y=>({...y,[n]:w})),f[n]&&m(y=>{const M={...y};return delete M[n],M})},j=n=>{u("examinationDate",n)},s=n=>{if(!n)return"";try{const w=new Date(n);return isNaN(w.getTime())?n:w.toLocaleDateString("uk-UA")}catch{return n}};return t.jsxs(Zr,{children:[t.jsxs(uo,{children:[t.jsxs(dt,{children:[t.jsx(H,{htmlFor:"input1",children:"Алергії"}),t.jsx(U,{type:"text",name:"allergies",value:a.allergies,onChange:k,onBlur:b,placeholder:"Введіть алергії спортсмена",maxLength:p})]}),t.jsxs(dt,{children:[t.jsx(H,{htmlFor:"input2",children:"Захворювання"}),t.jsx(U,{type:"text",name:"diseases",value:a.diseases,onChange:k,onBlur:b,placeholder:"Введіть захворювання спортсмена",maxLength:p})]})]}),l.length===0?t.jsx(no,{children:"Додайте інформацію про медкомісії"}):t.jsx(io,{children:t.jsx(ao,{children:t.jsx(so,{$hasMedicalRecords:l.length>0,children:l.map(n=>t.jsxs(co,{children:[t.jsxs(po,{children:[t.jsx(lo,{children:"Медкомісія"}),t.jsx(xo,{onClick:()=>h(n.id),"aria-label":"Видалити запис",children:t.jsx(Xr,{})})]}),t.jsxs(ho,{children:[t.jsx(ie,{children:t.jsxs(se,{children:[t.jsx(ae,{children:"Лікар: "})," ",n.doctorName]})}),t.jsx(ie,{children:t.jsxs(se,{children:[t.jsx(ae,{children:"Статус здоров'я: "})," ",n.healthStatus]})}),t.jsx(ie,{children:t.jsxs(se,{children:[t.jsx(ae,{children:"Медичний заклад: "})," ",n.medicalInstitution.trim()?n.medicalInstitution:"Не вказано"]})}),t.jsx(ie,{children:t.jsxs(se,{children:[t.jsx(ae,{children:"Дата обстеження: "})," ",s(n.examinationDate)||"Не вказано"]})})]})]},n.id))})})}),t.jsxs(Qr,{children:[t.jsxs(st,{children:[t.jsxs(de,{children:[t.jsxs(H,{children:["Лікар *",f.doctorName&&t.jsx(lt,{children:f.doctorName})]}),t.jsx(U,{type:"text",value:x.doctorName,onChange:n=>u("doctorName",n.target.value),placeholder:"Введіть ім'я лікаря",maxLength:p,$error:f.doctorName})]}),t.jsxs(de,{children:[t.jsxs(H,{children:["Статус здоров'я *",f.healthStatus&&t.jsx(lt,{children:f.healthStatus})]}),t.jsx(U,{type:"text",value:x.healthStatus,onChange:n=>u("healthStatus",n.target.value),placeholder:"Введіть статус здоров'я",maxLength:p,$error:f.healthStatus})]})]}),t.jsxs(st,{children:[t.jsxs(de,{children:[t.jsx(H,{children:"Медичний заклад"}),t.jsx(U,{type:"text",value:x.medicalInstitution,onChange:n=>u("medicalInstitution",n.target.value),placeholder:"Введіть назву медичного закладу",maxLength:p})]}),t.jsx(ro,{children:t.jsxs(oo,{children:[t.jsx(H,{children:"Дата обстеження"}),t.jsx(Re,{value:x.examinationDate,onChange:j})]})})]})]}),t.jsx(to,{children:t.jsx(eo,{type:"button",onClick:i,children:"Додати"})})]})},go=r(Le)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,fo=r.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,bo=r.div`
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
`,wo=r.span`
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
`,$o=r.button`
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
`,ko=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,vo=r.div`
  margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray};
  border: 1px dashed ${({theme:e})=>e.textGray};
  border-radius: 8px;
`,jo=r.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,yo=r.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom: 4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,Co=r.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  min-width: max-content;
  
  ${e=>!e.$hasInstitutions&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,Io=r.p`
  color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,Go=r.div`
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
`,So=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,Do=r.div`
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
`,Bo=r.button`
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
`,Eo=({onDataUpdate:e})=>{const[a,g]=o.useState([]),[l,v]=o.useState({name:"",contacts:"",relationship:""}),[x,$]=o.useState({}),f=100;o.useEffect(()=>{const c=a.map(i=>({name:i.name,contacts:i.contacts||"",relationship:i.relationship||""}));e(c)},[a,e]);const m=()=>{const c={};return l.name.trim()||(c.name="Обов'язкове поле"),$(c),Object.keys(c).length===0},k=()=>{if(m()){const c={...l,name:l.name.trim(),contacts:l.contacts.trim(),relationship:l.relationship.trim(),id:Date.now()};g(i=>[...i,c]),v({name:"",contacts:"",relationship:""}),$({})}},b=c=>{g(i=>i.filter(h=>h.id!==c))},p=(c,i)=>{v(h=>({...h,[c]:i})),x[c]&&$(h=>{const u={...h};return delete u[c],u})};return t.jsxs(fo,{children:[a.length===0?t.jsx(vo,{children:"Додайте інформацію"}):t.jsx(jo,{children:t.jsx(yo,{children:t.jsx(Co,{$hasInstitutions:a.length>0,children:a.map(c=>t.jsxs(Go,{children:[t.jsxs(So,{children:[t.jsx(Io,{children:"Вказана інформація"}),t.jsx(Bo,{onClick:()=>b(c.id),"aria-label":"Видалити запис",children:t.jsx(go,{})})]}),t.jsxs(Do,{children:[t.jsx(Se,{children:t.jsxs(Be,{children:[t.jsx(De,{children:"Ім'я: "})," ",c.name]})}),t.jsx(Se,{children:t.jsxs(Be,{children:[t.jsx(De,{children:"Контакти: "})," ",c.contacts.trim()?c.contacts:"Не вказано"]})}),t.jsx(Se,{children:t.jsxs(Be,{children:[t.jsx(De,{children:"Ступінь спорідненості: "})," ",c.relationship.trim()?c.relationship:"Не вказано"]})})]})]},c.id))})})}),t.jsxs(bo,{children:[t.jsxs(Ce,{children:[t.jsxs(Ie,{children:["Ім'я родича*",x.name&&t.jsx(wo,{children:x.name})]}),t.jsx(Ge,{type:"text",value:l.name,onChange:c=>p("name",c.target.value),placeholder:"Введіть ім'я",maxLength:f,$error:x.name})]}),t.jsxs(Ce,{children:[t.jsx(Ie,{children:"Контакти родича *"}),t.jsx(Ge,{type:"text",value:l.contacts,onChange:c=>p("contacts",c.target.value),placeholder:"Введіть контактні дані",maxLength:f})]}),t.jsxs(Ce,{children:[t.jsx(Ie,{children:"Ступінь спорідненості"}),t.jsx(Ge,{type:"text",value:l.relationship,onChange:c=>p("relationship",c.target.value),placeholder:"Введіть ступінь спорідненості",maxLength:f})]})]}),t.jsx(ko,{children:t.jsx($o,{type:"button",onClick:k,children:"Додати"})})]})},G={mobile:"320px",tablet:"768px",desktop:"1024px"},Mo=r.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${G.desktop}) {
    width: 8rem;
    height: 8rem;
  }
`,Ro=r.div`
  position: sticky; 
  left: 0; 
  right: 0;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
`,No=r.div`
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

  ${({$isSportsFacility:e})=>e&&Ne`
      @media (min-width: ${G.tablet}) {
       padding: 14px 0;
      }
  
      @media (min-width: ${G.desktop}) {
        padding: 14px 0;
      }
  `}
`,Lo=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${G.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`,zo=r.div`
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
`,To=r.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,Po=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Fo=r.label`
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
`,Oo=r.input`
  display: none;
`,_o=r.div`
  flex: 1;
  
  @media (min-width: ${G.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center; 
  }
`,vt=r.h2`
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

${({$isUniversity:e})=>e&&Ne`
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
`,R=r.input`
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
`,Wo=r.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,Ho=r.button`
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
`,Ao=r(Pt)`
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
`,L=r.div`
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
`,Uo=r(vt)`
  margin-bottom: 1rem;
  padding-top: 10px;

  @media (min-width: ${G.desktop}) {
    padding-top: 0;
  }
`,Vo=r.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:a,name:g})=>a&&g==="notes"?e.red:e.borderColor};
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
`,Yo=r.div`
  margin: 20px 0;
`,qo=r.div`
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

  ${({$isSportsFacility:e})=>e&&Ne`
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
`;const Ko=r.button`
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
`,Jo=r(Ft)`
  fill: ${({theme:e})=>e.mode==="dark"?"#343434":"#ffffff"};
  width: 12px;
  height: 12px;
  transform: rotate(180deg);

  @media (min-width: ${G.desktop}) {
    width: 14px;
    height: 14px;
  }
`,nn=()=>{const e=o.useRef(null),a=o.useRef(null),g=gt(),{loading:l}=ft(d=>d.athletes),v=Bt(),{setTitle:x}=Et(),[$,f]=o.useState(null),[m,k]=o.useState(null),[b,p]=o.useState(""),[c,i]=o.useState(""),[h,u]=o.useState(""),[j,s]=o.useState(""),[n,w]=o.useState(""),[y,M]=o.useState(""),[E,N]=o.useState(""),[B,ze]=o.useState(""),[V,Te]=o.useState(""),[ce,Pe]=o.useState(""),[pe,Fe]=o.useState(""),[he,Oe]=o.useState(""),[Y,_e]=o.useState(""),[q,We]=o.useState(""),[K,He]=o.useState(""),[xe,Ae]=o.useState(null),[J,Ue]=o.useState(""),[X,Ve]=o.useState(""),[F,Ye]=o.useState(""),[O,qe]=o.useState(""),[Z,Ke]=o.useState(""),[_,Je]=o.useState(""),[ue,Xe]=o.useState({}),[Q,Ze]=o.useState({allergies:"",diseases:""}),[me,Qe]=o.useState({}),[ge,et]=o.useState({}),[z,T]=o.useState({firstName:!1,lastName:!1,birthdate:!1,currentSportInstitution:!1,trainer:!1,entryDate:!1}),fe=o.useRef(!1),jt=d=>{const C=d.target.files[0];if(C){f(C);const ee=URL.createObjectURL(C);return k(ee),()=>URL.revokeObjectURL(ee)}},[yt,be]=o.useState(!1),[we,$e,Ct]=Ot(yt);o.useEffect(()=>{$||m||b!==""||c!==""||h!==""||j||n!==""||y||E!==""||B!==""||V!==""||ce!==""||pe!==""||he||Y!==""||q!==""||K!==""||xe!==null||X!==""||J!==""||F!==""||O!==""||Z!==""||_||Object.keys(ue).length>0||Q.allergies!==""||Q.diseases!==""||Object.keys(me).length>0||Object.keys(ge).length>0?be(!0):be(!1)},[$,m,b,c,h,j,n,y,E,B,V,ce,pe,he,Y,q,K,xe,X,J,F,O,Z,_,ue,me,Q,ge]);const tt=Object.values(z).some(Boolean)||!b.trim()||!c.trim()||!j||!F.trim()||!O.trim()||!_;o.useEffect(()=>(x("Створення нового спортсмена"),()=>{m&&URL.revokeObjectURL(m)}),[x]),o.useEffect(()=>{fe.current&&we&&($e(),fe.current=!1)},[we,$e]);const It=d=>{if(d.key==="Enter"||d.key===" "){const C=document.getElementById("photo-upload");C&&C.click()}},Gt=d=>{d.preventDefault();const C={firstName:!b.trim(),lastName:!c.trim(),birthdate:!j,currentSportInstitution:!F.trim(),trainer:!O.trim(),entryDate:!_},ee=!Object.values(C).some(W=>W);if(T(C),!ee){C.currentSportInstitution||C.trainer||C.entryDate?(console.log("Has sports facility errors, scrolling to that section"),e.current&&(e.current.open(),setTimeout(()=>{te.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),e.current.scrollIntoView({behavior:"smooth",block:"center"})},300))):(console.log("No sports facility errors, scrolling to top"),setTimeout(()=>{te.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),a.current.scrollIntoView({behavior:"smooth",block:"center"})},100));return}const I=new FormData;$&&I.append("athlete-avatar",$),I.append("firstName",b),I.append("lastName",c),I.append("patronymic",h),I.append("birthdate",j),I.append("gender",y||""),I.append("address",n||""),I.append("phone",E||""),I.append("email",B||""),I.append("socialMedia",V||""),I.append("role",Y||""),I.append("sportCategory",q||""),I.append("notes",K||""),I.append("teamId",xe||""),I.append("school",X||""),I.append("university",J||""),I.append("currentSportInstitution",F||""),I.append("trainer",O||""),I.append("trainerContacts",Z||""),I.append("entryDate",_||""),I.append("previousEstablishments",JSON.stringify(ue||{})),I.append("medicalInformation",JSON.stringify(me||{})),I.append("parentsInformation",JSON.stringify(ge||{})),g(Mt(I)).unwrap().then(W=>{te.success("Спортсмена успішно створено!"),fe.current=!0,be(!1),f(null),k(null),p(""),i(""),u(""),s(""),w(""),M(""),N(""),ze(""),Te(""),Pe(""),Fe(""),Oe(""),_e(""),We(""),He(""),Ae(null),Ue(""),Ve(""),Ye(""),qe(""),Ke(""),Je(""),Xe({}),Ze({allergies:"",diseases:""}),Qe({}),et({}),v(`/athletes/${W.id}`)}).catch(W=>{te.error(`Помилка: ${W}`)})},rt=()=>{m&&m!==ve&&URL.revokeObjectURL(m),f(null),k(null);const d=document.getElementById("photo-upload");d&&(d.value="")},St=d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),rt())};return t.jsxs(t.Fragment,{children:[l&&t.jsx(Ro,{children:t.jsx(bt,{})}),t.jsx(No,{blurred:l,children:t.jsxs(ct,{children:[t.jsxs(Lo,{children:[t.jsx(zo,{children:t.jsxs(Mo,{children:[t.jsx(To,{children:t.jsx(Po,{src:m||ve,alt:"Фото спортсмена"})}),t.jsx(Fo,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:It,children:t.jsx(Ao,{})}),m&&m!==ve&&t.jsx(Ko,{type:"button",tabIndex:0,onKeyDown:St,onClick:rt,title:"Скасувати завантаження фото",children:t.jsx(Jo,{})}),t.jsx(Oo,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:jt})]})}),t.jsxs(_o,{ref:a,children:[t.jsx(vt,{children:"Особиста інформація"}),t.jsxs(pt,{children:[t.jsxs(S,{children:[t.jsx(D,{htmlFor:"firstName",children:"Ім'я *"}),t.jsx(R,{id:"firstName",type:"text",placeholder:"Введіть ім'я",value:b,onChange:d=>{p(d.target.value),d.target.value.trim()&&T(C=>({...C,firstName:!1}))},isError:z.firstName})]}),t.jsxs(S,{children:[t.jsx(D,{htmlFor:"lastName",children:"Прізвище *"}),t.jsx(R,{id:"lastName",type:"text",placeholder:"Введіть прізвище",value:c,onChange:d=>{i(d.target.value),d.target.value.trim()&&T(C=>({...C,lastName:!1}))},isError:z.lastName})]}),t.jsxs(S,{children:[t.jsx(D,{htmlFor:"patronymic",children:"По батькові"}),t.jsx(R,{id:"patronymic",type:"text",placeholder:"Введіть по батькові",value:h,onChange:d=>u(d.target.value)})]})]})]})]}),t.jsxs(ht,{children:[t.jsx(xt,{children:t.jsxs(Me,{children:[t.jsx(L,{children:t.jsxs(S,{children:[t.jsx(D,{htmlFor:"birthdate",children:"Дата народження *"}),t.jsx(Ee,{children:t.jsx(ke,{selectedDate:j,onDateChange:d=>{s(d),d&&T(C=>({...C,birthdate:!1}))},isError:z.birthdate})})]})}),t.jsx(L,{children:t.jsxs(S,{children:[t.jsx(D,{htmlFor:"address",children:"Адреса"}),t.jsx(R,{id:"address",type:"text",value:n,onChange:d=>w(d.target.value),placeholder:"Введіть адресу"})]})}),t.jsx(L,{children:t.jsx(sr,{label:"Виберіть стать",value:y,onChange:M})})]})}),t.jsxs(ut,{children:[t.jsx(Uo,{children:"Контакти"}),t.jsxs(Me,{children:[t.jsx(L,{children:t.jsxs(S,{children:[t.jsx(D,{htmlFor:"phone",children:"Телефон"}),t.jsx(R,{id:"phone",type:"tel",value:E,onChange:d=>N(d.target.value),placeholder:"Введіть номер телефону"})]})}),t.jsx(L,{children:t.jsxs(S,{children:[t.jsx(D,{htmlFor:"email",children:"Email"}),t.jsx(R,{id:"email",type:"email",value:B,onChange:d=>ze(d.target.value),placeholder:"Введіть email"})]})}),t.jsx(L,{children:t.jsxs(S,{children:[t.jsx(D,{htmlFor:"socialMedia",children:"Соцмережі"}),t.jsx(R,{id:"socialMedia",type:"text",value:V,onChange:d=>Te(d.target.value),placeholder:"Введіть посилання на соцмережі"})]})})]})]})]}),t.jsx(P,{helpTooltiptitle:"Ці параметри не є обов'язковими, але вони допомагають отримати детальнішу статистику 📊",helpTooltip:"Додайте перший замір щоб відстежувати зміни спортсмена. Після створення профілю спортсмена ви зможете додавати нові заміри та повністю керувати ними 😊",title:"Фізичні дані",children:t.jsxs(pt,{hasphysique:!0,children:[t.jsxs(S,{children:[t.jsx(D,{htmlFor:"height",children:"Зріст у м."}),t.jsx(R,{id:"height",type:"number",min:"0",max:"4",placeholder:"Введіть зріст у м.",step:"0.1",value:ce,onChange:d=>Pe(d.target.value)})]}),t.jsxs(S,{children:[t.jsx(D,{htmlFor:"weight",children:"Вага у кг."}),t.jsx(R,{id:"weight",min:"0",max:"400",step:"0.1",placeholder:"Введіть вагу у кг.",type:"number",value:pe,onChange:d=>Fe(d.target.value)})]}),t.jsxs(S,{children:[t.jsx(D,{htmlFor:"dateOfMeasurement",children:"Дата вимірювання"}),t.jsx(Ee,{children:t.jsx(ke,{selectedDate:he,onDateChange:Oe})})]})]})}),t.jsx(P,{title:"Спортивна інформація",children:t.jsxs(ht,{$hasSportInfo:!0,children:[t.jsx(xt,{$hasSportInfo:!0,children:t.jsxs(Me,{children:[t.jsx(L,{children:t.jsxs(S,{children:[t.jsx(D,{htmlFor:"role",children:"Роль у команді"}),t.jsx(R,{id:"role",type:"text",value:Y,onChange:d=>_e(d.target.value),placeholder:"Введіть роль у команді"})]})}),t.jsx(L,{children:t.jsxs(S,{children:[t.jsx(D,{htmlFor:"sportCategory",children:"Спортивний розряд"}),t.jsx(R,{id:"sportCategory",type:"text",value:q,onChange:d=>We(d.target.value),placeholder:"Введіть спортивний розряд"})]})}),t.jsx(L,{children:t.jsxs(S,{children:[t.jsx(D,{htmlFor:"notes",children:"Примітки про спортсмена"}),t.jsx(Vo,{id:"notes",value:K,onChange:d=>He(d.target.value),placeholder:"Додайте примітки про спортсмена"})]})})]})}),t.jsx(ut,{$hasSportInfo:!0,children:t.jsx(kr,{onTeamSelect:Ae})})]})}),t.jsx(P,{title:"Навчальні заклади",children:t.jsx(Yo,{children:t.jsxs(L,{children:[t.jsxs(S,{children:[t.jsx(D,{htmlFor:"school",children:"Школа"}),t.jsx(R,{id:"school",type:"text",placeholder:"Введіть назву школи",value:X,onChange:d=>Ve(d.target.value)})]}),t.jsxs(S,{$isUniversity:!0,children:[t.jsx(D,{htmlFor:"university",children:"Університет"}),t.jsx(R,{id:"university",type:"text",placeholder:"Введіть назву університету",value:J,onChange:d=>Ue(d.target.value)})]})]})})}),t.jsx(P,{title:"Спортивний заклад",ref:e,children:t.jsx(ct,{$isSportsFacility:!0,children:t.jsxs(qo,{children:[t.jsxs(mt,{$isSportsFacility:!0,children:[t.jsxs(S,{children:[t.jsx(D,{children:"Поточний спортивний заклад *"}),t.jsx(R,{type:"text",value:F,onChange:d=>{Ye(d.target.value),d.target.value.trim()&&T(C=>({...C,currentSportInstitution:!1}))},placeholder:"Введіть назву закладу",isError:z.currentSportInstitution})]}),t.jsxs(S,{children:[t.jsx(D,{children:"Тренер *"}),t.jsx(R,{type:"text",value:O,onChange:d=>{qe(d.target.value),d.target.value.trim()&&T(C=>({...C,trainer:!1}))},placeholder:"Введіть ім'я тренера",isError:z.trainer})]})]}),t.jsxs(mt,{$isSportsFacility:!0,children:[t.jsxs(S,{children:[t.jsx(D,{children:"Контакти тренера"}),t.jsx(R,{type:"text",value:Z,onChange:d=>Ke(d.target.value),placeholder:"Введіть контакти"})]}),t.jsxs(S,{children:[t.jsx(D,{children:"Дата вступу *"}),t.jsx(Ee,{children:t.jsx(ke,{selectedDate:_,onDateChange:d=>{Je(d),d&&T(C=>({...C,entryDate:!1}))},isError:z.entryDate})})]})]})]})})}),t.jsx(P,{title:"Минулі спортивні заклади",children:t.jsx(Jr,{onDataUpdate:Xe})}),t.jsx(P,{title:"Медична інформація",children:t.jsx(mo,{onDataUpdate:Qe,medicalData:Q,setMedicalData:Ze})}),t.jsx(P,{title:"Родичи спортсмена",children:t.jsx(Eo,{onDataUpdate:et})}),t.jsx(Wo,{children:t.jsx(Ho,{type:"button",onClick:Gt,disabled:l||tt,children:l?"Створення...":tt?"Заповніть обов'язкові поля":"Додати спортсмена"})})]})}),t.jsx(_t,{isOpen:we,onConfirm:$e,onCancel:Ct})]})};export{nn as default};
