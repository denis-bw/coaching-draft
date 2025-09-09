import{r as o,d as r,j as t,b as mt,a as gt,f as tt,L as bt,Q as Le,l as Gt,u as St,y as te,R as Dt}from"./index-8def2ee6.js";import{g as rt,a as Bt,u as Et,b as Mt,D as Lt,C as ve}from"./CustomDatePicker-3b5d36a3.js";import{p as Rt}from"./PlaceholderProfile-3c1b0d36.js";import{P as ot}from"./PlaceholderTeam-7b26a08e.js";import{S as Re}from"./DeleteIcon-d8742b24.js";import{S as Nt,u as zt,N as Tt}from"./CameraIcon-7144a44a.js";const ft=e=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M6 9L12 15L18 9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ft=r.div`
  
  margin: 20px 0;
  border: 1.7px solid ${({theme:e})=>e.greenMain};
  border-radius: 8px;

  background-color: ${({theme:e})=>e.ContainerBGColor}; 
  transition: background-color 0.3s ease;
  ${({isOpen:e})=>!e&&`
    border-radius: 8px 8px 0 0;
  `}


`,Ot=r(ft)`
  stroke: ${e=>e.theme.white};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
`,Pt=r.button.attrs({type:"button"})`
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
`,_t=r.div`
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
`,Wt=r.h3`
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
`,Ht=r.div`
  display: flex;
  align-items: center;
`,At=r.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,Ut=e=>o.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2}),o.createElement("path",{d:"M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M12 16H12.01",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),wt=r(Ut)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({theme:e})=>e.white};
  transition: stroke 0.3s ease;
`,Vt=r.button.attrs({type:"button"})`
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

    ${wt} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,Yt=r.div`
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
`,qt=r.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
`,Jt=r.div`
  font-size: 14px; 
  font-weight: 600; 
  margin-bottom: 5px; 
`,Kt=({title:e,text:a})=>{const[m,l]=o.useState(!1),[k,x]=o.useState("top"),[$,g]=o.useState(null),f=o.useRef(null),v=o.useRef(null),b=()=>{if(!v.current||!f.current||!m)return;const c=v.current.getBoundingClientRect(),d=f.current.getBoundingClientRect(),i=window.innerWidth,p=d.height,u=d.width,j=c.top,s=c.bottom,n=c.left;c.right;const w=c.width;c.height;const y=n+w/2,E=j>p+15?"top":"bottom";x(E);let R,B;E==="top"?R=j-p-12:R=s+12,B=y-u*.8,B<10&&(B=10),B+u>i-10&&(B=i-u-10),g({top:R,left:B})};return o.useEffect(()=>{m&&setTimeout(b,0)},[m]),o.useEffect(()=>{if(m)return window.addEventListener("scroll",b),window.addEventListener("resize",b),()=>{window.removeEventListener("scroll",b),window.removeEventListener("resize",b)}},[m]),t.jsxs(Vt,{ref:v,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),onClick:()=>l(!m),children:[t.jsx(wt,{}),t.jsx(Yt,{ref:f,visible:m,placement:k,tooltipPosition:$,children:t.jsxs(qt,{children:[e&&t.jsx(Jt,{children:e}),a]})})]})},F=o.forwardRef(({children:e,helpTooltiptitle:a,helpTooltip:m,title:l,top:k,left:x},$)=>{const[g,f]=o.useState(!1),[v,b]=o.useState(!1),c=o.useRef(null),d=o.useRef(null),i=o.useRef(!1);o.useImperativeHandle($,()=>({open:()=>{f(!0),b(!0)},close:()=>{f(!1)},scrollIntoView:u=>{c.current&&c.current.scrollIntoView(u)},isOpen:()=>g}));const p=()=>{f(u=>!u),b(!0)};return o.useEffect(()=>{const u=new IntersectionObserver(([j])=>{!v&&j.isIntersecting&&!i.current&&j.intersectionRatio>=1&&(setTimeout(()=>{f(!0)},200),i.current=!0)},{threshold:1,rootMargin:"0px 0px -100px 0px"});return c.current&&u.observe(c.current),()=>{c.current&&u.unobserve(c.current)}},[v]),o.useEffect(()=>{d.current&&(g?d.current.removeAttribute("inert"):d.current.setAttribute("inert",""))},[g]),t.jsxs(Ft,{ref:c,isOpen:g,children:[t.jsxs(Pt,{onClick:p,role:"button",tabIndex:0,children:[l&&t.jsx(Wt,{children:l}),t.jsxs(Ht,{children:[m&&t.jsx(At,{onClick:u=>u.stopPropagation(),children:t.jsx(Kt,{title:a,text:m,top:k,left:x})}),t.jsx(Ot,{isOpen:g})]})]}),t.jsx(_t,{ref:d,isOpen:g,role:"region",children:e})]})}),Xt=r.div`
  position: relative;
  width: 100%;
`,Qt=r.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,Zt=r.span`
  color: ${({selectedValue:e,theme:a})=>e===""?a.textBlack:e==="Чоловік"||e==="Жінка"?a.greenMain:a.textGray}; 
  font-family: 'Inter Tight', sans-serif;
`,er=r.button.attrs({type:"button"})`
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
`,tr=r.div`
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
`,ke=r.button.attrs({type:"button"})`
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
`,rr=r(ft)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) ${e=>e.open?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
  width: 22px;
  height: auto;
`,or=({label:e,value:a,onChange:m})=>{const[l,k]=o.useState(!1),[x,$]=o.useState(a||""),g=o.useRef(null),f=()=>{k(!l)},v=c=>{$(c),m(c),k(!1)},b=c=>{g.current&&!g.current.contains(c.target)&&k(!1)};return o.useEffect(()=>(document.addEventListener("click",b),()=>{document.removeEventListener("click",b)}),[]),t.jsxs(Xt,{ref:g,children:[e&&t.jsx(Qt,{onClick:f,children:e}),t.jsxs(er,{onClick:f,children:[t.jsx(Zt,{selectedValue:x,children:x||"Не вибрано"}),t.jsx(rr,{open:l})]}),l&&t.jsxs(tr,{children:[t.jsx(ke,{className:x==="Чоловік"?"selected":"",onClick:()=>v("Чоловік"),children:"Чоловік"}),t.jsx(ke,{className:x==="Жінка"?"selected":"",onClick:()=>v("Жінка"),children:"Жінка"}),t.jsx(ke,{className:x===""?"selected":"",onClick:()=>v(""),children:"Не вибрано"})]})]})},nr=r.div`
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
`,ir=r.div`
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
`,ar=r.button`
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
`,sr=r.div`
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
`,lr=r.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,dr=r.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,cr=r.div`
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
`,pr=r.div`
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
`,hr=r.div`
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  flex: 1; 
  overflow: hidden; 
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`,xr=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,ur=r.div`
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
`,mr=r.img`
  border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,gr=r.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,br=({onTeamSelect:e})=>{const[a,m]=o.useState(null),[l,k]=o.useState({}),x=o.useRef(null),$=o.useRef({}),g=o.useRef(!1),f=mt(),{teams:v,isLoading:b,hasMore:c,currentPage:d}=gt(s=>s.teams);o.useEffect(()=>{f(tt(1))},[f]),o.useEffect(()=>{if(v.length>0){const s={...l};v.forEach(n=>{if(n.logo&&!s[n.id]){const w=new Image;w.src=n.logo,w.onload=()=>{k(y=>({...y,[n.id]:{loaded:!0,error:!1}}))},w.onerror=()=>{k(y=>({...y,[n.id]:{loaded:!0,error:!0}})),console.log(`Зображення для команди ${n.id} не знайдено.`)},s[n.id]={loaded:!1,error:!1}}}),Object.keys(s).length>0&&k(n=>({...n,...s}))}},[v]);const i=o.useCallback(s=>{a&&a.id===s.id?(m(null),e&&e(null),$.current[s.id]&&$.current[s.id].blur()):(m(s),e&&e(s.id))},[a,e]),p=s=>{k(n=>({...n,[s]:{loaded:!0,error:!0}}))},u=s=>{if(!s.logo)return ot;const n=l[s.id];return n&&n.error?ot:s.logo},j=o.useCallback(()=>{if(!(g.current||!c)&&x.current){const{scrollTop:s,scrollHeight:n,clientHeight:w}=x.current;s+w>=n-20&&c&&!b&&(g.current=!0,f(tt(d)).finally(()=>{g.current=!1}))}},[f,c,b,d]);return o.useEffect(()=>{const s=x.current;if(s)return s.addEventListener("scroll",j),()=>s.removeEventListener("scroll",j)},[j]),o.useEffect(()=>{if(!x.current)return;const s={root:x.current,rootMargin:"0px",threshold:.1},n=M=>{M.forEach(E=>{E.target.classList&&(E.isIntersecting?(E.target.classList.add("visible"),E.target.classList.remove("hidden")):(E.target.classList.add("hidden"),E.target.classList.remove("visible")))})},w=new IntersectionObserver(n,s);return document.querySelectorAll('[id^="team-"]').forEach(M=>{w.observe(M),M.classList.add("hidden")}),()=>w.disconnect()},[v]),t.jsx(hr,{children:t.jsxs(cr,{children:[t.jsx(ur,{children:t.jsx(xr,{children:t.jsx("h2",{children:"Команда спортсмена"})})}),t.jsxs(pr,{ref:x,children:[v.length>0?v.map(s=>t.jsx(nr,{className:"team-item",id:`team-${s.id}`,children:t.jsxs(ar,{ref:n=>$.current[s.id]=n,isSelected:a&&a.id===s.id,onClick:()=>i(s),type:"button",children:[t.jsx(sr,{children:t.jsx(mr,{loading:"lazy",src:u(s),alt:`Логотип команди ${s.name}`,onError:()=>p(s.id)})}),t.jsx(lr,{children:t.jsx(dr,{children:s.name})})]})},s.id)):b?null:t.jsx(ir,{children:"Команд не знайдено"}),b&&t.jsx(gr,{children:t.jsx(bt,{})})]})]})})},fr=r(Lt)`
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
`,wr=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 8px 4px;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 12px;
`,$r=r.select`
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


`,vr=r.select`
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

`,kr=r.div`
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
`,jr=(e,a,m=1)=>{let l=[];for(let k=e;k<=a;k+=m)l.push(k);return l},Me=({value:e,onChange:a,placeholder:m="Оберіть дату",hasError:l=!1,minDate:k,maxDate:x})=>{const $=p=>{if(!p)return null;try{const u=new Date(p);return isNaN(u.getTime())?null:u}catch{return null}},[g,f]=o.useState(()=>$(e));o.useEffect(()=>{f($(e))},[e]);const b=jr(1900,rt(new Date)),c=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],d=p=>{if(f(p),p){const u=p.getFullYear(),j=String(p.getMonth()+1).padStart(2,"0"),s=String(p.getDate()).padStart(2,"0");a(`${u}-${j}-${s}`)}else a("")};let i=$(k);return i&&(i=Bt(i,0)),t.jsx(kr,{children:t.jsx(fr,{selected:g,onChange:d,dateFormat:"dd.MM.yyyy",placeholderText:m,locale:Et,$error:l,minDate:i,maxDate:x?$(x):void 0,renderCustomHeader:({date:p,changeYear:u,changeMonth:j})=>t.jsxs(wr,{children:[t.jsx($r,{value:rt(p),onChange:s=>{u(parseInt(s.target.value))},children:b.map(s=>t.jsx("option",{value:s,children:s},s))}),t.jsx(vr,{value:c[Mt(p)],onChange:s=>{j(c.indexOf(s.target.value))},children:c.map((s,n)=>t.jsx("option",{value:s,children:s},n))})]})})})},yr=r(Re)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,Cr=r.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,Ir=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,nt=r.div`
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
`,je=r.input`
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
`,Gr=r.span`
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
`,Sr=r.button`
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

`,Dr=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,Br=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,it=r(le)`
  flex: 1;
`,Er=r.div`
margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray} ;
  border: 1px dashed ${({theme:e})=>e.textGray} ;
  border-radius: 8px;
`,Mr=r.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid  ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,Lr=r.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom:4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,Rr=r.div`
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
`,zr=r.div`
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
`,Tr=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,Fr=r.div`
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
`,Or=r.button`
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
`,_r=r.button.attrs({type:"button"})`
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
`,Wr=r.div`
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
`,Hr=r.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
  /* color: ${({theme:e})=>e.red}; */
`,Ar=r.div`
  font-size: 14px; 
  font-weight: 700; 
  margin-bottom: 5px; 
  color:  ${({theme:e})=>e.red};
`,Ur=({title:e,text:a})=>{const[m,l]=o.useState(!1),[k,x]=o.useState("top"),[$,g]=o.useState(null),f=o.useRef(null),v=o.useRef(null),b=()=>{if(!v.current||!f.current||!m)return;const c=v.current.getBoundingClientRect(),d=f.current.getBoundingClientRect(),i=window.innerWidth,p=d.height,u=d.width,j=c.top,s=c.bottom,n=c.left;c.right;const w=c.width;c.height;const y=n+w/2,E=j>p+15?"top":"bottom";x(E);let R,B;E==="top"?R=j-p-12:R=s+12,B=y-u*.8,B<10&&(B=10),B+u>i-10&&(B=i-u-10),g({top:R,left:B})};return o.useEffect(()=>{m&&setTimeout(b,0)},[m]),o.useEffect(()=>{if(m)return window.addEventListener("scroll",b),window.addEventListener("resize",b),()=>{window.removeEventListener("scroll",b),window.removeEventListener("resize",b)}},[m]),t.jsxs(_r,{ref:v,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),onClick:()=>l(!m),children:[t.jsx($t,{}),t.jsx(Wr,{ref:f,visible:m,placement:k,tooltipPosition:$,children:t.jsxs(Hr,{children:[e&&t.jsx(Ar,{children:e}),a]})})]})},Vr=({onDataUpdate:e})=>{const[a,m]=o.useState([]),[l,k]=o.useState({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),[x,$]=o.useState({}),g=100;o.useEffect(()=>{const i=a.map(p=>({previousCoach:p.coachName,previousInstitution:p.institution||"",coachContacts:p.coachContacts||"",entryDate:p.entryDate||"",exitDate:p.exitDate||""}));e(i)},[a,e]);const f=()=>{const i={};if(l.coachName.trim()||(i.coachName="Ім'я тренера є обов'язковим"),l.entryDate&&l.exitDate){const p=new Date(l.entryDate),j=new Date(l.exitDate).getTime()-p.getTime();Math.ceil(j/(1e3*3600*24))<0&&(i.exitDate="Дата виходу має бути не раніше дати вступу")}return $(i),Object.keys(i).length===0},v=()=>{if(f()){const i={...l,coachName:l.coachName.trim(),institution:l.institution.trim(),coachContacts:l.coachContacts.trim(),id:Date.now()};m(p=>[...p,i]),k({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),$({})}},b=i=>{m(p=>p.filter(u=>u.id!==i))},c=(i,p)=>{if(k(u=>({...u,[i]:p})),x[i]&&$(u=>{const j={...u};return delete j[i],j}),i==="entryDate"&&l.exitDate){const u=new Date(p),s=new Date(l.exitDate).getTime()-u.getTime();Math.ceil(s/(1e3*3600*24))<0?$(w=>({...w,exitDate:"Дата виходу з закладу має бути не раніше дати вступу"})):x.exitDate&&$(w=>{const y={...w};return delete y.exitDate,y})}},d=i=>{if(!i)return"";try{const p=new Date(i);return isNaN(p.getTime())?i:p.toLocaleDateString("uk-UA")}catch{return i}};return t.jsxs(Cr,{children:[a.length===0?t.jsx(Er,{children:"Додайте інформацію"}):t.jsx(Mr,{children:t.jsx(Lr,{children:t.jsx(Rr,{$hasInstitutions:a.length>0,children:a.map(i=>t.jsxs(zr,{children:[t.jsxs(Tr,{children:[t.jsx(Nr,{children:"Вказана інформація"}),t.jsx(Or,{onClick:()=>b(i.id),"aria-label":"Видалити заклад",children:t.jsx(yr,{})})]}),t.jsxs(Fr,{children:[t.jsx(re,{children:t.jsxs(ne,{children:[t.jsx(oe,{children:"Тренер: "})," ",i.coachName]})}),t.jsx(re,{children:t.jsxs(ne,{children:[t.jsx(oe,{children:"Заклад: "}),i.institution.trim()?i.institution:"Не вказано"]})}),t.jsx(re,{children:t.jsxs(ne,{children:[t.jsx(oe,{children:"Контакти: "})," ",i.coachContacts.trim()?i.coachContacts:"Не вказано"]})}),t.jsxs(re,{children:[t.jsx(oe,{children:"Період:"}),t.jsxs(ne,{children:[d(i.entryDate)||"Не вказано"," ",t.jsx("span",{children:" - "}),d(i.exitDate)||"Не вказано"]})]})]})]},i.id))})})}),t.jsxs(Ir,{children:[t.jsxs(nt,{children:[t.jsxs(le,{children:[t.jsxs(A,{children:["Минулий Тренер *",x.coachName&&t.jsx(Gr,{children:x.coachName})]}),t.jsx(je,{type:"text",value:l.coachName,onChange:i=>c("coachName",i.target.value),placeholder:"Введіть ім'я тренера",maxLength:g,$error:x.coachName})]}),t.jsxs(le,{children:[t.jsx(A,{children:"Минулий спортивний заклад"}),t.jsx(je,{type:"text",value:l.institution,onChange:i=>c("institution",i.target.value),placeholder:"Введіть назву закладу",maxLength:g})]})]}),t.jsxs(nt,{children:[t.jsxs(le,{children:[t.jsx(A,{children:"Контакти тренера"}),t.jsx(je,{type:"text",value:l.coachContacts,onChange:i=>c("coachContacts",i.target.value),placeholder:"Введіть контакти тренера",maxLength:g})]}),t.jsxs(Br,{children:[t.jsxs(it,{children:[t.jsx(A,{children:"Дата вступу"}),t.jsx(Me,{value:l.entryDate,onChange:i=>c("entryDate",i),placeholder:"Оберіть дату вступу"})]}),t.jsxs(it,{children:[t.jsxs(A,{children:["Дата виходу",x.exitDate&&t.jsx(Ur,{title:"Неправильно введені дані",text:x.exitDate})]}),t.jsx(Me,{value:l.exitDate,onChange:i=>c("exitDate",i),placeholder:"Оберіть дату виходу",minDate:l.entryDate,hasError:!!x.exitDate})]})]})]})]}),t.jsx(Dr,{children:t.jsx(Sr,{type:"button",onClick:v,children:"Додати"})})]})},Yr=r(Re)`
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

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,at=r.div`
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
`,st=r.span`
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
`,Qr=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,Zr=r(de)`
  flex: 1;
`,eo=r.div`
  margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray};
  border: 1px dashed ${({theme:e})=>e.textGray};
  border-radius: 8px;
`,to=r.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,ro=r.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom: 4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,oo=r.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  min-width: max-content;
  
  ${e=>!e.$hasMedicalRecords&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,no=r.p`
  color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,io=r.div`
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
`,ao=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,so=r.div`
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
`,lo=r.button`
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
`,co=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid  ${e=>e.theme.greenMain};
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,lt=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,po=({onDataUpdate:e,medicalData:a,setMedicalData:m})=>{const[l,k]=o.useState([]),[x,$]=o.useState({doctorName:"",healthStatus:"",medicalInstitution:"",examinationDate:""}),[g,f]=o.useState({}),v=n=>{const{name:w,value:y}=n.target;m(M=>({...M,[w]:y.trimStart()}))},b=n=>{const{name:w,value:y}=n.target;m(M=>({...M,[w]:y.trim()}))},c=100;o.useEffect(()=>{const n=l.map(w=>({doctorName:w.doctorName,healthStatus:w.healthStatus||"",medicalInstitution:w.medicalInstitution||"",examinationDate:w.examinationDate||""}));e(n)},[l,e]);const d=()=>{const n={};return x.doctorName.trim()||(n.doctorName="Ім'я лікаря є обов'язковим"),x.healthStatus.trim()||(n.healthStatus="Статус здоров'я є обов'язковим"),f(n),Object.keys(n).length===0},i=()=>{if(d()){const n={...x,doctorName:x.doctorName.trim(),healthStatus:x.healthStatus.trim(),medicalInstitution:x.medicalInstitution.trim(),id:Date.now()};k(w=>[...w,n]),$({doctorName:"",healthStatus:"",medicalInstitution:"",examinationDate:""}),f({})}},p=n=>{k(w=>w.filter(y=>y.id!==n))},u=(n,w)=>{$(y=>({...y,[n]:w})),g[n]&&f(y=>{const M={...y};return delete M[n],M})},j=n=>{u("examinationDate",n)},s=n=>{if(!n)return"";try{const w=new Date(n);return isNaN(w.getTime())?n:w.toLocaleDateString("uk-UA")}catch{return n}};return t.jsxs(qr,{children:[t.jsxs(co,{children:[t.jsxs(lt,{children:[t.jsx(H,{htmlFor:"input1",children:"Алергії"}),t.jsx(U,{type:"text",name:"allergies",value:a.allergies,onChange:v,onBlur:b,placeholder:"Введіть алергії спортсмена",maxLength:c})]}),t.jsxs(lt,{children:[t.jsx(H,{htmlFor:"input2",children:"Захворювання"}),t.jsx(U,{type:"text",name:"diseases",value:a.diseases,onChange:v,onBlur:b,placeholder:"Введіть захворювання спортсмена",maxLength:c})]})]}),l.length===0?t.jsx(eo,{children:"Додайте інформацію про медкомісії"}):t.jsx(to,{children:t.jsx(ro,{children:t.jsx(oo,{$hasMedicalRecords:l.length>0,children:l.map(n=>t.jsxs(io,{children:[t.jsxs(ao,{children:[t.jsx(no,{children:"Медкомісія"}),t.jsx(lo,{onClick:()=>p(n.id),"aria-label":"Видалити запис",children:t.jsx(Yr,{})})]}),t.jsxs(so,{children:[t.jsx(ie,{children:t.jsxs(se,{children:[t.jsx(ae,{children:"Лікар: "})," ",n.doctorName]})}),t.jsx(ie,{children:t.jsxs(se,{children:[t.jsx(ae,{children:"Статус здоров'я: "})," ",n.healthStatus]})}),t.jsx(ie,{children:t.jsxs(se,{children:[t.jsx(ae,{children:"Медичний заклад: "})," ",n.medicalInstitution.trim()?n.medicalInstitution:"Не вказано"]})}),t.jsx(ie,{children:t.jsxs(se,{children:[t.jsx(ae,{children:"Дата обстеження: "})," ",s(n.examinationDate)||"Не вказано"]})})]})]},n.id))})})}),t.jsxs(Jr,{children:[t.jsxs(at,{children:[t.jsxs(de,{children:[t.jsxs(H,{children:["Лікар *",g.doctorName&&t.jsx(st,{children:g.doctorName})]}),t.jsx(U,{type:"text",value:x.doctorName,onChange:n=>u("doctorName",n.target.value),placeholder:"Введіть ім'я лікаря",maxLength:c,$error:g.doctorName})]}),t.jsxs(de,{children:[t.jsxs(H,{children:["Статус здоров'я *",g.healthStatus&&t.jsx(st,{children:g.healthStatus})]}),t.jsx(U,{type:"text",value:x.healthStatus,onChange:n=>u("healthStatus",n.target.value),placeholder:"Введіть статус здоров'я",maxLength:c,$error:g.healthStatus})]})]}),t.jsxs(at,{children:[t.jsxs(de,{children:[t.jsx(H,{children:"Медичний заклад"}),t.jsx(U,{type:"text",value:x.medicalInstitution,onChange:n=>u("medicalInstitution",n.target.value),placeholder:"Введіть назву медичного закладу",maxLength:c})]}),t.jsx(Qr,{children:t.jsxs(Zr,{children:[t.jsx(H,{children:"Дата обстеження"}),t.jsx(Me,{value:x.examinationDate,onChange:j})]})})]})]}),t.jsx(Xr,{children:t.jsx(Kr,{type:"button",onClick:i,children:"Додати"})})]})},ho=r(Re)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,xo=r.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,uo=r.div`
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
`,ye=r.div`
  display: flex;
  flex-direction: column;
`,Ce=r.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,Ie=r.input`
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
`,mo=r.span`
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
`,go=r.button`
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
`,bo=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,fo=r.div`
  margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray};
  border: 1px dashed ${({theme:e})=>e.textGray};
  border-radius: 8px;
`,wo=r.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,$o=r.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom: 4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,vo=r.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  min-width: max-content;
  
  ${e=>!e.$hasInstitutions&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,ko=r.p`
  color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,jo=r.div`
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
`,yo=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,Co=r.div`
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
`,Ge=r.div`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.disabledBG};
  margin-right: 10px;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,Se=r.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({theme:e})=>e.textGray};
  margin-bottom: 2px;
`,De=r.p`
  font-size: 13px;
  color: ${({theme:e})=>e.textBlack};
  word-wrap: break-word;
  word-break: break-word;
`,Io=r.button`
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
`,Go=({onDataUpdate:e})=>{const[a,m]=o.useState([]),[l,k]=o.useState({name:"",contacts:"",relationship:""}),[x,$]=o.useState({}),g=100;o.useEffect(()=>{const d=a.map(i=>({name:i.name,contacts:i.contacts||"",relationship:i.relationship||""}));e(d)},[a,e]);const f=()=>{const d={};return l.name.trim()||(d.name="Обов'язкове поле"),$(d),Object.keys(d).length===0},v=()=>{if(f()){const d={...l,name:l.name.trim(),contacts:l.contacts.trim(),relationship:l.relationship.trim(),id:Date.now()};m(i=>[...i,d]),k({name:"",contacts:"",relationship:""}),$({})}},b=d=>{m(i=>i.filter(p=>p.id!==d))},c=(d,i)=>{k(p=>({...p,[d]:i})),x[d]&&$(p=>{const u={...p};return delete u[d],u})};return t.jsxs(xo,{children:[a.length===0?t.jsx(fo,{children:"Додайте інформацію"}):t.jsx(wo,{children:t.jsx($o,{children:t.jsx(vo,{$hasInstitutions:a.length>0,children:a.map(d=>t.jsxs(jo,{children:[t.jsxs(yo,{children:[t.jsx(ko,{children:"Вказана інформація"}),t.jsx(Io,{onClick:()=>b(d.id),"aria-label":"Видалити запис",children:t.jsx(ho,{})})]}),t.jsxs(Co,{children:[t.jsx(Ge,{children:t.jsxs(De,{children:[t.jsx(Se,{children:"Ім'я: "})," ",d.name]})}),t.jsx(Ge,{children:t.jsxs(De,{children:[t.jsx(Se,{children:"Контакти: "})," ",d.contacts.trim()?d.contacts:"Не вказано"]})}),t.jsx(Ge,{children:t.jsxs(De,{children:[t.jsx(Se,{children:"Ступінь спорідненості: "})," ",d.relationship.trim()?d.relationship:"Не вказано"]})})]})]},d.id))})})}),t.jsxs(uo,{children:[t.jsxs(ye,{children:[t.jsxs(Ce,{children:["Ім'я родича*",x.name&&t.jsx(mo,{children:x.name})]}),t.jsx(Ie,{type:"text",value:l.name,onChange:d=>c("name",d.target.value),placeholder:"Введіть ім'я",maxLength:g,$error:x.name})]}),t.jsxs(ye,{children:[t.jsx(Ce,{children:"Контакти родича *"}),t.jsx(Ie,{type:"text",value:l.contacts,onChange:d=>c("contacts",d.target.value),placeholder:"Введіть контактні дані",maxLength:g})]}),t.jsxs(ye,{children:[t.jsx(Ce,{children:"Ступінь спорідненості"}),t.jsx(Ie,{type:"text",value:l.relationship,onChange:d=>c("relationship",d.target.value),placeholder:"Введіть ступінь спорідненості",maxLength:g})]})]}),t.jsx(bo,{children:t.jsx(go,{type:"button",onClick:v,children:"Додати"})})]})},D={mobile:"320px",tablet:"768px",desktop:"1024px"},So=r.div`
  position: sticky; 
  left: 0; 
  right: 0;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
`,Do=r.div`
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

  @media (min-width: ${D.tablet}) {
    align-items: flex-start;
    height: 100%;
  }
`,dt=r.div`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${D.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${D.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }

  ${({$isSportsFacility:e})=>e&&Le`
      @media (min-width: ${D.tablet}) {
       padding: 14px 0;
      }
  
      @media (min-width: ${D.desktop}) {
        padding: 14px 0;
      }
  `}
`,Bo=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${D.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`,Eo=r.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  
  @media (min-width: ${D.tablet}) {
    width: auto;
    margin-right: 3.8rem;
    margin-bottom: 0;
    justify-content: flex-start;
    align-self: center; 
  }

   @media (min-width: ${D.desktop}) {
    margin-right: 2rem;
  }
`,Mo=r.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${D.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,Lo=r.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,Ro=r.img`
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

  @media (min-width: ${D.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,zo=r.input`
  display: none;
`,To=r.div`
  flex: 1;
  
  @media (min-width: ${D.tablet}) {
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
`,ct=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: ${e=>e.hasphysique?"20px":"0"};
  padding-bottom: ${e=>e.hasphysique?"20px":"0"};
  @media (min-width: ${D.tablet}) {
    flex-direction: column;
  }
  
  @media (min-width: ${D.desktop}) {
    flex-direction: row;
    gap: 1.5rem;
  }
`,G=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;

${({$isUniversity:e})=>e&&Le`
      @media (max-width: 1024px) {
        margin-top: 10px; 
      }

      @media (min-width: 1024px) {
        margin-top: 0;
      }
    `}
`,S=r.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,L=r.input`
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
`,Fo=r.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,Oo=r.button`
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
`,Po=r(Nt)`
  fill: ${e=>e.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${D.tablet}) {
    width: 18px;
    height: 18px;
  }
`,Be=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,pt=r.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
   margin-top: ${e=>e.$hasSportInfo?"20px":"0"};
  @media (min-width: ${D.desktop}) {
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }
`,ht=r.div`
  flex: 1;
  
  @media (min-width: ${D.desktop}) {
     margin-top: ${e=>e.$hasSportInfo?"0":"3.1rem"}
  }

  
`,xt=r.div`
  flex: 1;
  @media (max-width: ${D.desktop}) {
    margin-top: ${e=>e.$hasSportInfo?"20px":"0"}
  }
`,Ee=r.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,N=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: ${D.desktop}) {
    flex-direction: row;
    gap: 20px;
    
    & > ${G} {
      flex: 1;
    }
  }
`,_o=r(vt)`
  margin-bottom: 1rem;
  padding-top: 10px;

  @media (min-width: ${D.desktop}) {
    padding-top: 0;
  }
`,Wo=r.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:a,name:m})=>a&&m==="notes"?e.red:e.borderColor};
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
`,Ho=r.div`
  margin: 20px 0;
`,Ao=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${D.desktop}) {
    flex-direction: row;
    gap: 40px;
  }

`,ut=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  ${({$isSportsFacility:e})=>e&&Le`
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
`;const Xo=()=>{const e=o.useRef(null),a=o.useRef(null),m=mt(),{loading:l}=gt(h=>h.athletes),k=Gt(),{setTitle:x}=St(),[$,g]=o.useState(null),[f,v]=o.useState(null),[b,c]=o.useState(""),[d,i]=o.useState(""),[p,u]=o.useState(""),[j,s]=o.useState(""),[n,w]=o.useState(""),[y,M]=o.useState(""),[E,R]=o.useState(""),[B,Ne]=o.useState(""),[V,ze]=o.useState(""),[ce,Te]=o.useState(""),[pe,Fe]=o.useState(""),[he,Oe]=o.useState(""),[Y,Pe]=o.useState(""),[q,_e]=o.useState(""),[J,We]=o.useState(""),[xe,He]=o.useState(null),[K,Ae]=o.useState(""),[X,Ue]=o.useState(""),[O,Ve]=o.useState(""),[P,Ye]=o.useState(""),[Q,qe]=o.useState(""),[_,Je]=o.useState(""),[ue,Ke]=o.useState({}),[Z,Xe]=o.useState({allergies:"",diseases:""}),[me,Qe]=o.useState({}),[ge,Ze]=o.useState({}),[z,T]=o.useState({firstName:!1,lastName:!1,birthdate:!1,currentSportInstitution:!1,trainer:!1,entryDate:!1}),be=o.useRef(!1),kt=h=>{const C=h.target.files[0];if(C){g(C);const ee=URL.createObjectURL(C);return v(ee),()=>URL.revokeObjectURL(ee)}},[jt,fe]=o.useState(!1),[we,$e,yt]=zt(jt);o.useEffect(()=>{$||f||b!==""||d!==""||p!==""||j||n!==""||y||E!==""||B!==""||V!==""||ce!==""||pe!==""||he||Y!==""||q!==""||J!==""||xe!==null||X!==""||K!==""||O!==""||P!==""||Q!==""||_||Object.keys(ue).length>0||Z.allergies!==""||Z.diseases!==""||Object.keys(me).length>0||Object.keys(ge).length>0?fe(!0):fe(!1)},[$,f,b,d,p,j,n,y,E,B,V,ce,pe,he,Y,q,J,xe,X,K,O,P,Q,_,ue,me,Z,ge]);const et=Object.values(z).some(Boolean)||!b.trim()||!d.trim()||!j||!O.trim()||!P.trim()||!_;o.useEffect(()=>(x("Створення нового спортсмена"),()=>{f&&URL.revokeObjectURL(f)}),[x]),o.useEffect(()=>{be.current&&we&&($e(),be.current=!1)},[we,$e]);const Ct=h=>{if(h.key==="Enter"||h.key===" "){const C=document.getElementById("photo-upload");C&&C.click()}},It=h=>{h.preventDefault();const C={firstName:!b.trim(),lastName:!d.trim(),birthdate:!j,currentSportInstitution:!O.trim(),trainer:!P.trim(),entryDate:!_},ee=!Object.values(C).some(W=>W);if(T(C),!ee){C.currentSportInstitution||C.trainer||C.entryDate?(console.log("Has sports facility errors, scrolling to that section"),e.current&&(e.current.open(),setTimeout(()=>{te.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),e.current.scrollIntoView({behavior:"smooth",block:"center"})},300))):(console.log("No sports facility errors, scrolling to top"),setTimeout(()=>{te.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),a.current.scrollIntoView({behavior:"smooth",block:"center"})},100));return}const I=new FormData;$&&I.append("athlete-avatar",$),I.append("firstName",b),I.append("lastName",d),I.append("patronymic",p),I.append("birthdate",j),I.append("gender",y||""),I.append("address",n||""),I.append("phone",E||""),I.append("email",B||""),I.append("socialMedia",V||""),I.append("role",Y||""),I.append("sportCategory",q||""),I.append("notes",J||""),I.append("teamId",xe||""),I.append("school",X||""),I.append("university",K||""),I.append("currentSportInstitution",O||""),I.append("trainer",P||""),I.append("trainerContacts",Q||""),I.append("entryDate",_||""),I.append("previousEstablishments",JSON.stringify(ue||{})),I.append("medicalInformation",JSON.stringify(me||{})),I.append("parentsInformation",JSON.stringify(ge||{})),m(Dt(I)).unwrap().then(W=>{te.success("Спортсмена успішно створено!"),be.current=!0,fe(!1),g(null),v(null),c(""),i(""),u(""),s(""),w(""),M(""),R(""),Ne(""),ze(""),Te(""),Fe(""),Oe(""),Pe(""),_e(""),We(""),He(null),Ae(""),Ue(""),Ve(""),Ye(""),qe(""),Je(""),Ke({}),Xe({allergies:"",diseases:""}),Qe({}),Ze({}),k(`/athletes/${W.id}`)}).catch(W=>{te.error(`Помилка: ${W}`)})};return t.jsxs(t.Fragment,{children:[l&&t.jsx(So,{children:t.jsx(bt,{})}),t.jsx(Do,{blurred:l,children:t.jsxs(dt,{children:[t.jsxs(Bo,{children:[t.jsx(Eo,{children:t.jsxs(Mo,{children:[t.jsx(Lo,{children:t.jsx(Ro,{src:f||Rt,alt:"Фото спортсмена"})}),t.jsx(No,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:Ct,children:t.jsx(Po,{})}),t.jsx(zo,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:kt})]})}),t.jsxs(To,{ref:a,children:[t.jsx(vt,{children:"Особиста інформація"}),t.jsxs(ct,{children:[t.jsxs(G,{children:[t.jsx(S,{htmlFor:"firstName",children:"Ім'я *"}),t.jsx(L,{id:"firstName",type:"text",placeholder:"Введіть ім'я",value:b,onChange:h=>{c(h.target.value),h.target.value.trim()&&T(C=>({...C,firstName:!1}))},isError:z.firstName})]}),t.jsxs(G,{children:[t.jsx(S,{htmlFor:"lastName",children:"Прізвище *"}),t.jsx(L,{id:"lastName",type:"text",placeholder:"Введіть прізвище",value:d,onChange:h=>{i(h.target.value),h.target.value.trim()&&T(C=>({...C,lastName:!1}))},isError:z.lastName})]}),t.jsxs(G,{children:[t.jsx(S,{htmlFor:"patronymic",children:"По батькові"}),t.jsx(L,{id:"patronymic",type:"text",placeholder:"Введіть по батькові",value:p,onChange:h=>u(h.target.value)})]})]})]})]}),t.jsxs(pt,{children:[t.jsx(ht,{children:t.jsxs(Ee,{children:[t.jsx(N,{children:t.jsxs(G,{children:[t.jsx(S,{htmlFor:"birthdate",children:"Дата народження *"}),t.jsx(Be,{children:t.jsx(ve,{selectedDate:j,onDateChange:h=>{s(h),h&&T(C=>({...C,birthdate:!1}))},isError:z.birthdate})})]})}),t.jsx(N,{children:t.jsxs(G,{children:[t.jsx(S,{htmlFor:"address",children:"Адреса"}),t.jsx(L,{id:"address",type:"text",value:n,onChange:h=>w(h.target.value),placeholder:"Введіть адресу"})]})}),t.jsx(N,{children:t.jsx(or,{label:"Виберіть стать",value:y,onChange:M})})]})}),t.jsxs(xt,{children:[t.jsx(_o,{children:"Контакти"}),t.jsxs(Ee,{children:[t.jsx(N,{children:t.jsxs(G,{children:[t.jsx(S,{htmlFor:"phone",children:"Телефон"}),t.jsx(L,{id:"phone",type:"tel",value:E,onChange:h=>R(h.target.value),placeholder:"Введіть номер телефону"})]})}),t.jsx(N,{children:t.jsxs(G,{children:[t.jsx(S,{htmlFor:"email",children:"Email"}),t.jsx(L,{id:"email",type:"email",value:B,onChange:h=>Ne(h.target.value),placeholder:"Введіть email"})]})}),t.jsx(N,{children:t.jsxs(G,{children:[t.jsx(S,{htmlFor:"socialMedia",children:"Соцмережі"}),t.jsx(L,{id:"socialMedia",type:"text",value:V,onChange:h=>ze(h.target.value),placeholder:"Введіть посилання на соцмережі"})]})})]})]})]}),t.jsx(F,{helpTooltiptitle:"Ці параметри не є обов'язковими, але вони допомагають отримати детальнішу статистику 📊",helpTooltip:"Додайте перший замір щоб відстежувати зміни спортсмена. Після створення профілю спортсмена ви зможете додавати нові заміри та повністю керувати ними 😊",title:"Фізичні дані",children:t.jsxs(ct,{hasphysique:!0,children:[t.jsxs(G,{children:[t.jsx(S,{htmlFor:"height",children:"Зріст у м."}),t.jsx(L,{id:"height",type:"number",min:"0",max:"4",placeholder:"Введіть зріст у м.",step:"0.1",value:ce,onChange:h=>Te(h.target.value)})]}),t.jsxs(G,{children:[t.jsx(S,{htmlFor:"weight",children:"Вага у кг."}),t.jsx(L,{id:"weight",min:"0",max:"400",step:"0.1",placeholder:"Введіть вагу у кг.",type:"number",value:pe,onChange:h=>Fe(h.target.value)})]}),t.jsxs(G,{children:[t.jsx(S,{htmlFor:"dateOfMeasurement",children:"Дата вимірювання"}),t.jsx(Be,{children:t.jsx(ve,{selectedDate:he,onDateChange:Oe})})]})]})}),t.jsx(F,{title:"Спортивна інформація",children:t.jsxs(pt,{$hasSportInfo:!0,children:[t.jsx(ht,{$hasSportInfo:!0,children:t.jsxs(Ee,{children:[t.jsx(N,{children:t.jsxs(G,{children:[t.jsx(S,{htmlFor:"role",children:"Роль у команді"}),t.jsx(L,{id:"role",type:"text",value:Y,onChange:h=>Pe(h.target.value),placeholder:"Введіть роль у команді"})]})}),t.jsx(N,{children:t.jsxs(G,{children:[t.jsx(S,{htmlFor:"sportCategory",children:"Спортивний розряд"}),t.jsx(L,{id:"sportCategory",type:"text",value:q,onChange:h=>_e(h.target.value),placeholder:"Введіть спортивний розряд"})]})}),t.jsx(N,{children:t.jsxs(G,{children:[t.jsx(S,{htmlFor:"notes",children:"Примітки про спортсмена"}),t.jsx(Wo,{id:"notes",value:J,onChange:h=>We(h.target.value),placeholder:"Додайте примітки про спортсмена"})]})})]})}),t.jsx(xt,{$hasSportInfo:!0,children:t.jsx(br,{onTeamSelect:He})})]})}),t.jsx(F,{title:"Навчальні заклади",children:t.jsx(Ho,{children:t.jsxs(N,{children:[t.jsxs(G,{children:[t.jsx(S,{htmlFor:"school",children:"Школа"}),t.jsx(L,{id:"school",type:"text",placeholder:"Введіть назву школи",value:X,onChange:h=>Ue(h.target.value)})]}),t.jsxs(G,{$isUniversity:!0,children:[t.jsx(S,{htmlFor:"university",children:"Університет"}),t.jsx(L,{id:"university",type:"text",placeholder:"Введіть назву університету",value:K,onChange:h=>Ae(h.target.value)})]})]})})}),t.jsx(F,{title:"Спортивний заклад",ref:e,children:t.jsx(dt,{$isSportsFacility:!0,children:t.jsxs(Ao,{children:[t.jsxs(ut,{$isSportsFacility:!0,children:[t.jsxs(G,{children:[t.jsx(S,{children:"Поточний спортивний заклад *"}),t.jsx(L,{type:"text",value:O,onChange:h=>{Ve(h.target.value),h.target.value.trim()&&T(C=>({...C,currentSportInstitution:!1}))},placeholder:"Введіть назву закладу",isError:z.currentSportInstitution})]}),t.jsxs(G,{children:[t.jsx(S,{children:"Тренер *"}),t.jsx(L,{type:"text",value:P,onChange:h=>{Ye(h.target.value),h.target.value.trim()&&T(C=>({...C,trainer:!1}))},placeholder:"Введіть ім'я тренера",isError:z.trainer})]})]}),t.jsxs(ut,{$isSportsFacility:!0,children:[t.jsxs(G,{children:[t.jsx(S,{children:"Контакти тренера"}),t.jsx(L,{type:"text",value:Q,onChange:h=>qe(h.target.value),placeholder:"Введіть контакти"})]}),t.jsxs(G,{children:[t.jsx(S,{children:"Дата вступу *"}),t.jsx(Be,{children:t.jsx(ve,{selectedDate:_,onDateChange:h=>{Je(h),h&&T(C=>({...C,entryDate:!1}))},isError:z.entryDate})})]})]})]})})}),t.jsx(F,{title:"Минулі спортивні заклади",children:t.jsx(Vr,{onDataUpdate:Ke})}),t.jsx(F,{title:"Медична інформація",children:t.jsx(po,{onDataUpdate:Qe,medicalData:Z,setMedicalData:Xe})}),t.jsx(F,{title:"Родичи спортсмена",children:t.jsx(Go,{onDataUpdate:Ze})}),t.jsx(Fo,{children:t.jsx(Oo,{type:"button",onClick:It,disabled:l||et,children:l?"Створення...":et?"Заповніть обов'язкові поля":"Додати спортсмена"})})]})}),t.jsx(Tt,{isOpen:we,onConfirm:$e,onCancel:yt})]})};export{Xo as default};
