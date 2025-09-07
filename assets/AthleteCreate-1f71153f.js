import{r as o,d as r,j as t,e as Te,c as Fe,h as je,L as Pe,Q as ue,u as $t,b as vt,y as A,R as kt}from"./index-24ae9786.js";import{g as ye,a as jt,u as yt,b as Ct,D as It,C as re}from"./CustomDatePicker-2195b1cb.js";import{p as Gt}from"./PlaceholderProfile-3c1b0d36.js";import{P as Ce}from"./PlaceholderTeam-7b26a08e.js";import{S as me}from"./DeleteIcon-7f3c71f5.js";import{S as St}from"./CameraIcon-b5242fdf.js";const Oe=e=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M6 9L12 15L18 9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Dt=r.div`
  
  margin: 20px 0;
  border: 1.7px solid ${({theme:e})=>e.greenMain};
  border-radius: 8px;

  background-color: ${({theme:e})=>e.ContainerBGColor}; 
  transition: background-color 0.3s ease;
  ${({isOpen:e})=>!e&&`
    border-radius: 8px 8px 0 0;
  `}


`,Bt=r(Oe)`
  stroke: ${e=>e.theme.white};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
`,Et=r.button.attrs({type:"button"})`
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
`,Mt=r.div`
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
`,zt=r.h3`
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
`,Lt=r.div`
  display: flex;
  align-items: center;
`,Rt=r.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,Nt=e=>o.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2}),o.createElement("path",{d:"M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M12 16H12.01",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),_e=r(Nt)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({theme:e})=>e.white};
  transition: stroke 0.3s ease;
`,Tt=r.button.attrs({type:"button"})`
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

    ${_e} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,Ft=r.div`
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
`,Pt=r.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
`,Ot=r.div`
  font-size: 14px; 
  font-weight: 600; 
  margin-bottom: 5px; 
`,_t=({title:e,text:a})=>{const[m,l]=o.useState(!1),[v,x]=o.useState("top"),[$,g]=o.useState(null),b=o.useRef(null),k=o.useRef(null),w=()=>{if(!k.current||!b.current||!m)return;const d=k.current.getBoundingClientRect(),c=b.current.getBoundingClientRect(),n=window.innerWidth,h=c.height,u=c.width,j=d.top,s=d.bottom,i=d.left;d.right;const f=d.width;d.height;const y=i+f/2,z=j>h+15?"top":"bottom";x(z);let R,B;z==="top"?R=j-h-12:R=s+12,B=y-u*.8,B<10&&(B=10),B+u>n-10&&(B=n-u-10),g({top:R,left:B})};return o.useEffect(()=>{m&&setTimeout(w,0)},[m]),o.useEffect(()=>{if(m)return window.addEventListener("scroll",w),window.addEventListener("resize",w),()=>{window.removeEventListener("scroll",w),window.removeEventListener("resize",w)}},[m]),t.jsxs(Tt,{ref:k,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),onClick:()=>l(!m),children:[t.jsx(_e,{}),t.jsx(Ft,{ref:b,visible:m,placement:v,tooltipPosition:$,children:t.jsxs(Pt,{children:[e&&t.jsx(Ot,{children:e}),a]})})]})},T=o.forwardRef(({children:e,helpTooltiptitle:a,helpTooltip:m,title:l,top:v,left:x},$)=>{const[g,b]=o.useState(!1),[k,w]=o.useState(!1),d=o.useRef(null),c=o.useRef(null),n=o.useRef(!1);o.useImperativeHandle($,()=>({open:()=>{b(!0),w(!0)},close:()=>{b(!1)},scrollIntoView:u=>{d.current&&d.current.scrollIntoView(u)},isOpen:()=>g}));const h=()=>{b(u=>!u),w(!0)};return o.useEffect(()=>{const u=new IntersectionObserver(([j])=>{!k&&j.isIntersecting&&!n.current&&j.intersectionRatio>=1&&(setTimeout(()=>{b(!0)},200),n.current=!0)},{threshold:1,rootMargin:"0px 0px -100px 0px"});return d.current&&u.observe(d.current),()=>{d.current&&u.unobserve(d.current)}},[k]),o.useEffect(()=>{c.current&&(g?c.current.removeAttribute("inert"):c.current.setAttribute("inert",""))},[g]),t.jsxs(Dt,{ref:d,isOpen:g,children:[t.jsxs(Et,{onClick:h,role:"button",tabIndex:0,children:[l&&t.jsx(zt,{children:l}),t.jsxs(Lt,{children:[m&&t.jsx(Rt,{onClick:u=>u.stopPropagation(),children:t.jsx(_t,{title:a,text:m,top:v,left:x})}),t.jsx(Bt,{isOpen:g})]})]}),t.jsx(Mt,{ref:c,isOpen:g,role:"region",children:e})]})}),Wt=r.div`
  position: relative;
  width: 100%;
`,Ht=r.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,At=r.span`
  color: ${({selectedValue:e,theme:a})=>e===""?a.textBlack:e==="Чоловік"||e==="Жінка"?a.greenMain:a.textGray}; 
  font-family: 'Inter Tight', sans-serif;
`,Ut=r.button.attrs({type:"button"})`
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
`,Vt=r.div`
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
`,Yt=r(Oe)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) ${e=>e.open?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
  width: 22px;
  height: auto;
`,qt=({label:e,value:a,onChange:m})=>{const[l,v]=o.useState(!1),[x,$]=o.useState(a||""),g=o.useRef(null),b=()=>{v(!l)},k=d=>{$(d),m(d),v(!1)},w=d=>{g.current&&!g.current.contains(d.target)&&v(!1)};return o.useEffect(()=>(document.addEventListener("click",w),()=>{document.removeEventListener("click",w)}),[]),t.jsxs(Wt,{ref:g,children:[e&&t.jsx(Ht,{onClick:b,children:e}),t.jsxs(Ut,{onClick:b,children:[t.jsx(At,{selectedValue:x,children:x||"Не вибрано"}),t.jsx(Yt,{open:l})]}),l&&t.jsxs(Vt,{children:[t.jsx(oe,{className:x==="Чоловік"?"selected":"",onClick:()=>k("Чоловік"),children:"Чоловік"}),t.jsx(oe,{className:x==="Жінка"?"selected":"",onClick:()=>k("Жінка"),children:"Жінка"}),t.jsx(oe,{className:x===""?"selected":"",onClick:()=>k(""),children:"Не вибрано"})]})]})},Jt=r.div`
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
`,Kt=r.div`
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
`,Xt=r.button`
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
`,Qt=r.div`
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
`,Zt=r.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,er=r.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,tr=r.div`
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
`,rr=r.div`
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
`,or=r.div`
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  flex: 1; 
  overflow: hidden; 
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`,nr=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,ir=r.div`
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
`,ar=r.img`
  border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,sr=r.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,lr=({onTeamSelect:e})=>{const[a,m]=o.useState(null),[l,v]=o.useState({}),x=o.useRef(null),$=o.useRef({}),g=o.useRef(!1),b=Te(),{teams:k,isLoading:w,hasMore:d,currentPage:c}=Fe(s=>s.teams);o.useEffect(()=>{b(je(1))},[b]),o.useEffect(()=>{if(k.length>0){const s={...l};k.forEach(i=>{if(i.logo&&!s[i.id]){const f=new Image;f.src=i.logo,f.onload=()=>{v(y=>({...y,[i.id]:{loaded:!0,error:!1}}))},f.onerror=()=>{v(y=>({...y,[i.id]:{loaded:!0,error:!0}})),console.log(`Зображення для команди ${i.id} не знайдено.`)},s[i.id]={loaded:!1,error:!1}}}),Object.keys(s).length>0&&v(i=>({...i,...s}))}},[k]);const n=o.useCallback(s=>{a&&a.id===s.id?(m(null),e&&e(null),$.current[s.id]&&$.current[s.id].blur()):(m(s),e&&e(s.id))},[a,e]),h=s=>{v(i=>({...i,[s]:{loaded:!0,error:!0}}))},u=s=>{if(!s.logo)return Ce;const i=l[s.id];return i&&i.error?Ce:s.logo},j=o.useCallback(()=>{if(!(g.current||!d)&&x.current){const{scrollTop:s,scrollHeight:i,clientHeight:f}=x.current;s+f>=i-20&&d&&!w&&(g.current=!0,b(je(c)).finally(()=>{g.current=!1}))}},[b,d,w,c]);return o.useEffect(()=>{const s=x.current;if(s)return s.addEventListener("scroll",j),()=>s.removeEventListener("scroll",j)},[j]),o.useEffect(()=>{if(!x.current)return;const s={root:x.current,rootMargin:"0px",threshold:.1},i=M=>{M.forEach(z=>{z.target.classList&&(z.isIntersecting?(z.target.classList.add("visible"),z.target.classList.remove("hidden")):(z.target.classList.add("hidden"),z.target.classList.remove("visible")))})},f=new IntersectionObserver(i,s);return document.querySelectorAll('[id^="team-"]').forEach(M=>{f.observe(M),M.classList.add("hidden")}),()=>f.disconnect()},[k]),t.jsx(or,{children:t.jsxs(tr,{children:[t.jsx(ir,{children:t.jsx(nr,{children:t.jsx("h2",{children:"Команда спортсмена"})})}),t.jsxs(rr,{ref:x,children:[k.length>0?k.map(s=>t.jsx(Jt,{className:"team-item",id:`team-${s.id}`,children:t.jsxs(Xt,{ref:i=>$.current[s.id]=i,isSelected:a&&a.id===s.id,onClick:()=>n(s),type:"button",children:[t.jsx(Qt,{children:t.jsx(ar,{loading:"lazy",src:u(s),alt:`Логотип команди ${s.name}`,onError:()=>h(s.id)})}),t.jsx(Zt,{children:t.jsx(er,{children:s.name})})]})},s.id)):w?null:t.jsx(Kt,{children:"Команд не знайдено"}),w&&t.jsx(sr,{children:t.jsx(Pe,{})})]})]})})},dr=r(It)`
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
`,cr=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 8px 4px;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 12px;
`,pr=r.select`
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


`,hr=r.select`
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

`,xr=r.div`
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
`,ur=(e,a,m=1)=>{let l=[];for(let v=e;v<=a;v+=m)l.push(v);return l},xe=({value:e,onChange:a,placeholder:m="Оберіть дату",hasError:l=!1,minDate:v,maxDate:x})=>{const $=h=>{if(!h)return null;try{const u=new Date(h);return isNaN(u.getTime())?null:u}catch{return null}},[g,b]=o.useState(()=>$(e));o.useEffect(()=>{b($(e))},[e]);const w=ur(1900,ye(new Date)),d=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],c=h=>{if(b(h),h){const u=h.getFullYear(),j=String(h.getMonth()+1).padStart(2,"0"),s=String(h.getDate()).padStart(2,"0");a(`${u}-${j}-${s}`)}else a("")};let n=$(v);return n&&(n=jt(n,0)),t.jsx(xr,{children:t.jsx(dr,{selected:g,onChange:c,dateFormat:"dd.MM.yyyy",placeholderText:m,locale:yt,$error:l,minDate:n,maxDate:x?$(x):void 0,renderCustomHeader:({date:h,changeYear:u,changeMonth:j})=>t.jsxs(cr,{children:[t.jsx(pr,{value:ye(h),onChange:s=>{u(parseInt(s.target.value))},children:w.map(s=>t.jsx("option",{value:s,children:s},s))}),t.jsx(hr,{value:d[Ct(h)],onChange:s=>{j(d.indexOf(s.target.value))},children:d.map((s,i)=>t.jsx("option",{value:s,children:s},i))})]})})})},mr=r(me)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,gr=r.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,fr=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Ie=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`,X=r.div`
  display: flex;
  flex-direction: column;
`,_=r.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,ne=r.input`
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
`,br=r.span`
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
`,wr=r.button`
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

`,$r=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,vr=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,Ge=r(X)`
  flex: 1;
`,kr=r.div`
margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray} ;
  border: 1px dashed ${({theme:e})=>e.textGray} ;
  border-radius: 8px;
`,jr=r.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid  ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,yr=r.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom:4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,Cr=r.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  
  min-width:  max-content;
  
  ${e=>!e.$hasInstitutions&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,Ir=r.p`
 color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,Gr=r.div`
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
`,Sr=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,Dr=r.div`
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
`,U=r.div`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.disabledBG};
  margin-right: 10px;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,V=r.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({theme:e})=>e.textGray};
  margin-bottom: 2px;
`,Y=r.p`
  font-size: 13px;
  color: ${({theme:e})=>e.textBlack};
  word-wrap: break-word;
  word-break: break-word;
`,Br=r.button`

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

`,Er=e=>o.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 ",stroke:"none",fillRule:"evenodd"})),We=r(Er)`
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: ${({theme:e})=>e.red};
  transition: stroke 0.3s ease;
`,Mr=r.button.attrs({type:"button"})`
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

    ${We} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,zr=r.div`
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
`,Lr=r.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
  /* color: ${({theme:e})=>e.red}; */
`,Rr=r.div`
  font-size: 14px; 
  font-weight: 700; 
  margin-bottom: 5px; 
  color:  ${({theme:e})=>e.red};
`,Nr=({title:e,text:a})=>{const[m,l]=o.useState(!1),[v,x]=o.useState("top"),[$,g]=o.useState(null),b=o.useRef(null),k=o.useRef(null),w=()=>{if(!k.current||!b.current||!m)return;const d=k.current.getBoundingClientRect(),c=b.current.getBoundingClientRect(),n=window.innerWidth,h=c.height,u=c.width,j=d.top,s=d.bottom,i=d.left;d.right;const f=d.width;d.height;const y=i+f/2,z=j>h+15?"top":"bottom";x(z);let R,B;z==="top"?R=j-h-12:R=s+12,B=y-u*.8,B<10&&(B=10),B+u>n-10&&(B=n-u-10),g({top:R,left:B})};return o.useEffect(()=>{m&&setTimeout(w,0)},[m]),o.useEffect(()=>{if(m)return window.addEventListener("scroll",w),window.addEventListener("resize",w),()=>{window.removeEventListener("scroll",w),window.removeEventListener("resize",w)}},[m]),t.jsxs(Mr,{ref:k,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),onClick:()=>l(!m),children:[t.jsx(We,{}),t.jsx(zr,{ref:b,visible:m,placement:v,tooltipPosition:$,children:t.jsxs(Lr,{children:[e&&t.jsx(Rr,{children:e}),a]})})]})},Tr=({onDataUpdate:e})=>{const[a,m]=o.useState([]),[l,v]=o.useState({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),[x,$]=o.useState({}),g=100;o.useEffect(()=>{const n=a.map(h=>({previousCoach:h.coachName,previousInstitution:h.institution||"",coachContacts:h.coachContacts||"",entryDate:h.entryDate||"",exitDate:h.exitDate||""}));e(n)},[a,e]);const b=()=>{const n={};if(l.coachName.trim()||(n.coachName="Ім'я тренера є обов'язковим"),l.entryDate&&l.exitDate){const h=new Date(l.entryDate),j=new Date(l.exitDate).getTime()-h.getTime();Math.ceil(j/(1e3*3600*24))<0&&(n.exitDate="Дата виходу має бути не раніше дати вступу")}return $(n),Object.keys(n).length===0},k=()=>{if(b()){const n={...l,coachName:l.coachName.trim(),institution:l.institution.trim(),coachContacts:l.coachContacts.trim(),id:Date.now()};m(h=>[...h,n]),v({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),$({})}},w=n=>{m(h=>h.filter(u=>u.id!==n))},d=(n,h)=>{if(v(u=>({...u,[n]:h})),x[n]&&$(u=>{const j={...u};return delete j[n],j}),n==="entryDate"&&l.exitDate){const u=new Date(h),s=new Date(l.exitDate).getTime()-u.getTime();Math.ceil(s/(1e3*3600*24))<0?$(f=>({...f,exitDate:"Дата виходу з закладу має бути не раніше дати вступу"})):x.exitDate&&$(f=>{const y={...f};return delete y.exitDate,y})}},c=n=>{if(!n)return"";try{const h=new Date(n);return isNaN(h.getTime())?n:h.toLocaleDateString("uk-UA")}catch{return n}};return t.jsxs(gr,{children:[a.length===0?t.jsx(kr,{children:"Додайте інформацію"}):t.jsx(jr,{children:t.jsx(yr,{children:t.jsx(Cr,{$hasInstitutions:a.length>0,children:a.map(n=>t.jsxs(Gr,{children:[t.jsxs(Sr,{children:[t.jsx(Ir,{children:"Вказана інформація"}),t.jsx(Br,{onClick:()=>w(n.id),"aria-label":"Видалити заклад",children:t.jsx(mr,{})})]}),t.jsxs(Dr,{children:[t.jsx(U,{children:t.jsxs(Y,{children:[t.jsx(V,{children:"Тренер: "})," ",n.coachName]})}),t.jsx(U,{children:t.jsxs(Y,{children:[t.jsx(V,{children:"Заклад: "}),n.institution.trim()?n.institution:"Не вказано"]})}),t.jsx(U,{children:t.jsxs(Y,{children:[t.jsx(V,{children:"Контакти: "})," ",n.coachContacts.trim()?n.coachContacts:"Не вказано"]})}),t.jsxs(U,{children:[t.jsx(V,{children:"Період:"}),t.jsxs(Y,{children:[c(n.entryDate)||"Не вказано"," ",t.jsx("span",{children:" - "}),c(n.exitDate)||"Не вказано"]})]})]})]},n.id))})})}),t.jsxs(fr,{children:[t.jsxs(Ie,{children:[t.jsxs(X,{children:[t.jsxs(_,{children:["Минулий Тренер *",x.coachName&&t.jsx(br,{children:x.coachName})]}),t.jsx(ne,{type:"text",value:l.coachName,onChange:n=>d("coachName",n.target.value),placeholder:"Введіть ім'я тренера",maxLength:g,$error:x.coachName})]}),t.jsxs(X,{children:[t.jsx(_,{children:"Минулий спортивний заклад"}),t.jsx(ne,{type:"text",value:l.institution,onChange:n=>d("institution",n.target.value),placeholder:"Введіть назву закладу",maxLength:g})]})]}),t.jsxs(Ie,{children:[t.jsxs(X,{children:[t.jsx(_,{children:"Контакти тренера"}),t.jsx(ne,{type:"text",value:l.coachContacts,onChange:n=>d("coachContacts",n.target.value),placeholder:"Введіть контакти тренера",maxLength:g})]}),t.jsxs(vr,{children:[t.jsxs(Ge,{children:[t.jsx(_,{children:"Дата вступу"}),t.jsx(xe,{value:l.entryDate,onChange:n=>d("entryDate",n),placeholder:"Оберіть дату вступу"})]}),t.jsxs(Ge,{children:[t.jsxs(_,{children:["Дата виходу",x.exitDate&&t.jsx(Nr,{title:"Неправильно введені дані",text:x.exitDate})]}),t.jsx(xe,{value:l.exitDate,onChange:n=>d("exitDate",n),placeholder:"Оберіть дату виходу",minDate:l.entryDate,hasError:!!x.exitDate})]})]})]})]}),t.jsx($r,{children:t.jsx(wr,{type:"button",onClick:k,children:"Додати"})})]})},Fr=r(me)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,Pr=r.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,Or=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Se=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`,Q=r.div`
  display: flex;
  flex-direction: column;
`,O=r.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,W=r.input`
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
`,De=r.span`
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
`,_r=r.button`
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
`,Wr=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,Hr=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,Ar=r(Q)`
  flex: 1;
`,Ur=r.div`
  margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray};
  border: 1px dashed ${({theme:e})=>e.textGray};
  border-radius: 8px;
`,Vr=r.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,Yr=r.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom: 4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,qr=r.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  min-width: max-content;
  
  ${e=>!e.$hasMedicalRecords&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,Jr=r.p`
  color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,Kr=r.div`
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
`,Xr=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,Qr=r.div`
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
`,Zr=r.button`
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
`,eo=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid  ${e=>e.theme.greenMain};
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Be=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,to=({onDataUpdate:e,medicalData:a,setMedicalData:m})=>{const[l,v]=o.useState([]),[x,$]=o.useState({doctorName:"",healthStatus:"",medicalInstitution:"",examinationDate:""}),[g,b]=o.useState({}),k=i=>{const{name:f,value:y}=i.target;m(M=>({...M,[f]:y.trimStart()}))},w=i=>{const{name:f,value:y}=i.target;m(M=>({...M,[f]:y.trim()}))},d=100;o.useEffect(()=>{const i=l.map(f=>({doctorName:f.doctorName,healthStatus:f.healthStatus||"",medicalInstitution:f.medicalInstitution||"",examinationDate:f.examinationDate||""}));e(i)},[l,e]);const c=()=>{const i={};return x.doctorName.trim()||(i.doctorName="Ім'я лікаря є обов'язковим"),x.healthStatus.trim()||(i.healthStatus="Статус здоров'я є обов'язковим"),b(i),Object.keys(i).length===0},n=()=>{if(c()){const i={...x,doctorName:x.doctorName.trim(),healthStatus:x.healthStatus.trim(),medicalInstitution:x.medicalInstitution.trim(),id:Date.now()};v(f=>[...f,i]),$({doctorName:"",healthStatus:"",medicalInstitution:"",examinationDate:""}),b({})}},h=i=>{v(f=>f.filter(y=>y.id!==i))},u=(i,f)=>{$(y=>({...y,[i]:f})),g[i]&&b(y=>{const M={...y};return delete M[i],M})},j=i=>{u("examinationDate",i)},s=i=>{if(!i)return"";try{const f=new Date(i);return isNaN(f.getTime())?i:f.toLocaleDateString("uk-UA")}catch{return i}};return t.jsxs(Pr,{children:[t.jsxs(eo,{children:[t.jsxs(Be,{children:[t.jsx(O,{htmlFor:"input1",children:"Алергії"}),t.jsx(W,{type:"text",name:"allergies",value:a.allergies,onChange:k,onBlur:w,placeholder:"Введіть алергії спортсмена",maxLength:d})]}),t.jsxs(Be,{children:[t.jsx(O,{htmlFor:"input2",children:"Захворювання"}),t.jsx(W,{type:"text",name:"diseases",value:a.diseases,onChange:k,onBlur:w,placeholder:"Введіть захворювання спортсмена",maxLength:d})]})]}),l.length===0?t.jsx(Ur,{children:"Додайте інформацію про медкомісії"}):t.jsx(Vr,{children:t.jsx(Yr,{children:t.jsx(qr,{$hasMedicalRecords:l.length>0,children:l.map(i=>t.jsxs(Kr,{children:[t.jsxs(Xr,{children:[t.jsx(Jr,{children:"Медкомісія"}),t.jsx(Zr,{onClick:()=>h(i.id),"aria-label":"Видалити запис",children:t.jsx(Fr,{})})]}),t.jsxs(Qr,{children:[t.jsx(q,{children:t.jsxs(K,{children:[t.jsx(J,{children:"Лікар: "})," ",i.doctorName]})}),t.jsx(q,{children:t.jsxs(K,{children:[t.jsx(J,{children:"Статус здоров'я: "})," ",i.healthStatus]})}),t.jsx(q,{children:t.jsxs(K,{children:[t.jsx(J,{children:"Медичний заклад: "})," ",i.medicalInstitution.trim()?i.medicalInstitution:"Не вказано"]})}),t.jsx(q,{children:t.jsxs(K,{children:[t.jsx(J,{children:"Дата обстеження: "})," ",s(i.examinationDate)||"Не вказано"]})})]})]},i.id))})})}),t.jsxs(Or,{children:[t.jsxs(Se,{children:[t.jsxs(Q,{children:[t.jsxs(O,{children:["Лікар *",g.doctorName&&t.jsx(De,{children:g.doctorName})]}),t.jsx(W,{type:"text",value:x.doctorName,onChange:i=>u("doctorName",i.target.value),placeholder:"Введіть ім'я лікаря",maxLength:d,$error:g.doctorName})]}),t.jsxs(Q,{children:[t.jsxs(O,{children:["Статус здоров'я *",g.healthStatus&&t.jsx(De,{children:g.healthStatus})]}),t.jsx(W,{type:"text",value:x.healthStatus,onChange:i=>u("healthStatus",i.target.value),placeholder:"Введіть статус здоров'я",maxLength:d,$error:g.healthStatus})]})]}),t.jsxs(Se,{children:[t.jsxs(Q,{children:[t.jsx(O,{children:"Медичний заклад"}),t.jsx(W,{type:"text",value:x.medicalInstitution,onChange:i=>u("medicalInstitution",i.target.value),placeholder:"Введіть назву медичного закладу",maxLength:d})]}),t.jsx(Hr,{children:t.jsxs(Ar,{children:[t.jsx(O,{children:"Дата обстеження"}),t.jsx(xe,{value:x.examinationDate,onChange:j})]})})]})]}),t.jsx(Wr,{children:t.jsx(_r,{type:"button",onClick:n,children:"Додати"})})]})},ro=r(me)`
  stroke: ${e=>e.theme.red};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
    &:hover {
      stroke: ${e=>e.theme.redDark};
  }
`,oo=r.div`
  display: flex;
  width: 100%;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,no=r.div`
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
`,io=r.span`
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
`,ao=r.button`
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
`,so=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,lo=r.div`
  margin-bottom: 1rem;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.textGray};
  border: 1px dashed ${({theme:e})=>e.textGray};
  border-radius: 8px;
`,co=r.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  border: 1px solid ${({theme:e})=>e.lightGreen};
  border-radius: 8px;
  max-width: 100%;
`,po=r.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding-bottom: 4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
`,ho=r.div`
  display: inline-flex;
  white-space: nowrap;
  padding-bottom: 5px;
  min-width: max-content;
  
  ${e=>!e.$hasInstitutions&&`
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `}
`,xo=r.p`
  color: ${({theme:e})=>e.greenMain};
  font-weight: 600;
`,uo=r.div`
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
`,mo=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
`,go=r.div`
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
`,fo=r.button`
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
`,bo=({onDataUpdate:e})=>{const[a,m]=o.useState([]),[l,v]=o.useState({name:"",contacts:"",relationship:""}),[x,$]=o.useState({}),g=100;o.useEffect(()=>{const c=a.map(n=>({name:n.name,contacts:n.contacts||"",relationship:n.relationship||""}));e(c)},[a,e]);const b=()=>{const c={};return l.name.trim()||(c.name="Обов'язкове поле"),$(c),Object.keys(c).length===0},k=()=>{if(b()){const c={...l,name:l.name.trim(),contacts:l.contacts.trim(),relationship:l.relationship.trim(),id:Date.now()};m(n=>[...n,c]),v({name:"",contacts:"",relationship:""}),$({})}},w=c=>{m(n=>n.filter(h=>h.id!==c))},d=(c,n)=>{v(h=>({...h,[c]:n})),x[c]&&$(h=>{const u={...h};return delete u[c],u})};return t.jsxs(oo,{children:[a.length===0?t.jsx(lo,{children:"Додайте інформацію"}):t.jsx(co,{children:t.jsx(po,{children:t.jsx(ho,{$hasInstitutions:a.length>0,children:a.map(c=>t.jsxs(uo,{children:[t.jsxs(mo,{children:[t.jsx(xo,{children:"Вказана інформація"}),t.jsx(fo,{onClick:()=>w(c.id),"aria-label":"Видалити запис",children:t.jsx(ro,{})})]}),t.jsxs(go,{children:[t.jsx(le,{children:t.jsxs(ce,{children:[t.jsx(de,{children:"Ім'я: "})," ",c.name]})}),t.jsx(le,{children:t.jsxs(ce,{children:[t.jsx(de,{children:"Контакти: "})," ",c.contacts.trim()?c.contacts:"Не вказано"]})}),t.jsx(le,{children:t.jsxs(ce,{children:[t.jsx(de,{children:"Ступінь спорідненості: "})," ",c.relationship.trim()?c.relationship:"Не вказано"]})})]})]},c.id))})})}),t.jsxs(no,{children:[t.jsxs(ie,{children:[t.jsxs(ae,{children:["Ім'я родича*",x.name&&t.jsx(io,{children:x.name})]}),t.jsx(se,{type:"text",value:l.name,onChange:c=>d("name",c.target.value),placeholder:"Введіть ім'я",maxLength:g,$error:x.name})]}),t.jsxs(ie,{children:[t.jsx(ae,{children:"Контакти родича *ф"}),t.jsx(se,{type:"text",value:l.contacts,onChange:c=>d("contacts",c.target.value),placeholder:"Введіть контактні дані",maxLength:g})]}),t.jsxs(ie,{children:[t.jsx(ae,{children:"Ступінь спорідненості"}),t.jsx(se,{type:"text",value:l.relationship,onChange:c=>d("relationship",c.target.value),placeholder:"Введіть ступінь спорідненості",maxLength:g})]})]}),t.jsx(so,{children:t.jsx(ao,{type:"button",onClick:k,children:"Додати"})})]})},D={mobile:"320px",tablet:"768px",desktop:"1024px"},wo=r.div`
  position: sticky; 
  left: 0; 
  right: 0;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
`,$o=r.div`
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
`,Ee=r.div`
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

  ${({$isSportsFacility:e})=>e&&ue`
      @media (min-width: ${D.tablet}) {
       padding: 14px 0;
      }
  
      @media (min-width: ${D.desktop}) {
        padding: 14px 0;
      }
  `}
`,vo=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${D.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`,ko=r.div`
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
`,jo=r.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${D.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,yo=r.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,Co=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Io=r.label`
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
`,Go=r.input`
  display: none;
`,So=r.div`
  flex: 1;
  
  @media (min-width: ${D.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center; 
  }
`,He=r.h2`
  color: ${({theme:e})=>e.greenMain};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`,Me=r.div`
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

${({$isUniversity:e})=>e&&ue`
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
`,E=r.input`
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
`,Do=r.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,Bo=r.button`
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
`,Eo=r(St)`
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
`,pe=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ze=r.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
   margin-top: ${e=>e.$hasSportInfo?"20px":"0"};
  @media (min-width: ${D.desktop}) {
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }
`,Le=r.div`
  flex: 1;
  
  @media (min-width: ${D.desktop}) {
     margin-top: ${e=>e.$hasSportInfo?"0":"3.1rem"}
  }

  
`,Re=r.div`
  flex: 1;
  @media (max-width: ${D.desktop}) {
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
  
  @media (min-width: ${D.desktop}) {
    flex-direction: row;
    gap: 20px;
    
    & > ${G} {
      flex: 1;
    }
  }
`,Mo=r(He)`
  margin-bottom: 1rem;
  padding-top: 10px;

  @media (min-width: ${D.desktop}) {
    padding-top: 0;
  }
`,zo=r.textarea`
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
`,Lo=r.div`
  margin: 20px 0;
`,Ro=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${D.desktop}) {
    flex-direction: row;
    gap: 40px;
  }

`,Ne=r.div`
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
`;const Wo=()=>{const e=o.useRef(null),a=o.useRef(null),m=Te(),{loading:l}=Fe(p=>p.athletes),v=$t(),{setTitle:x}=vt(),[$,g]=o.useState(null),[b,k]=o.useState(null),[w,d]=o.useState(""),[c,n]=o.useState(""),[h,u]=o.useState(""),[j,s]=o.useState(""),[i,f]=o.useState(""),[y,M]=o.useState(""),[z,R]=o.useState(""),[B,Ae]=o.useState(""),[ge,Ue]=o.useState(""),[Ve,Ye]=o.useState(""),[qe,Je]=o.useState(""),[Ke,Xe]=o.useState(""),[fe,Qe]=o.useState(""),[be,Ze]=o.useState(""),[we,et]=o.useState(""),[tt,rt]=o.useState(null),[$e,ot]=o.useState(""),[ve,nt]=o.useState(""),[Z,it]=o.useState(""),[ee,at]=o.useState(""),[ke,st]=o.useState(""),[te,lt]=o.useState(""),[dt,ct]=o.useState({}),[pt,ht]=o.useState({allergies:"",diseases:""}),[xt,ut]=o.useState({}),[mt,gt]=o.useState({}),[F,N]=o.useState({firstName:!1,lastName:!1,birthdate:!1,currentSportInstitution:!1,trainer:!1,entryDate:!1}),ft=p=>{const C=p.target.files[0];if(C){g(C);const H=URL.createObjectURL(C);return k(H),()=>URL.revokeObjectURL(H)}};o.useEffect(()=>(x("Створення нового спортсмена"),()=>{b&&URL.revokeObjectURL(b)}),[x]);const bt=p=>{if(p.key==="Enter"||p.key===" "){const C=document.getElementById("photo-upload");C&&C.click()}},wt=p=>{p.preventDefault();const C={firstName:!w.trim(),lastName:!c.trim(),birthdate:!j,currentSportInstitution:!Z.trim(),trainer:!ee.trim(),entryDate:!te},H=!Object.values(C).some(P=>P);if(N(C),!H){C.currentSportInstitution||C.trainer||C.entryDate?(console.log("Has sports facility errors, scrolling to that section"),e.current&&(e.current.open(),setTimeout(()=>{A.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),e.current.scrollIntoView({behavior:"smooth",block:"center"})},300))):(console.log("No sports facility errors, scrolling to top"),setTimeout(()=>{A.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),a.current.scrollIntoView({behavior:"smooth",block:"center"})},100));return}const I=new FormData;$&&I.append("athlete-avatar",$),I.append("firstName",w),I.append("lastName",c),I.append("patronymic",h),I.append("birthdate",j),I.append("gender",y||""),I.append("address",i||""),I.append("phone",z||""),I.append("email",B||""),I.append("socialMedia",ge||""),I.append("role",fe||""),I.append("sportCategory",be||""),I.append("notes",we||""),I.append("teamId",tt||""),I.append("school",ve||""),I.append("university",$e||""),I.append("currentSportInstitution",Z||""),I.append("trainer",ee||""),I.append("trainerContacts",ke||""),I.append("entryDate",te||""),I.append("previousEstablishments",JSON.stringify(dt||{})),I.append("medicalInformation",JSON.stringify(xt||{})),I.append("parentsInformation",JSON.stringify(mt||{})),m(kt(I)).unwrap().then(P=>{A.success("Спортсмена успішно створено!"),v(`/athletes/${P.id}`)}).catch(P=>{A.error(`Помилка: ${P}`)})};return t.jsxs(t.Fragment,{children:[l&&t.jsx(wo,{children:t.jsx(Pe,{})}),t.jsx($o,{blurred:l,children:t.jsxs(Ee,{children:[t.jsxs(vo,{children:[t.jsx(ko,{children:t.jsxs(jo,{children:[t.jsx(yo,{children:t.jsx(Co,{src:b||Gt,alt:"Фото спортсмена"})}),t.jsx(Io,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:bt,children:t.jsx(Eo,{})}),t.jsx(Go,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:ft})]})}),t.jsxs(So,{ref:a,children:[t.jsx(He,{children:"Особиста інформація"}),t.jsxs(Me,{children:[t.jsxs(G,{children:[t.jsx(S,{htmlFor:"firstName",children:"Ім'я *"}),t.jsx(E,{id:"firstName",type:"text",placeholder:"Введіть ім'я",value:w,onChange:p=>{d(p.target.value),p.target.value.trim()&&N(C=>({...C,firstName:!1}))},isError:F.firstName})]}),t.jsxs(G,{children:[t.jsx(S,{htmlFor:"lastName",children:"Прізвище *"}),t.jsx(E,{id:"lastName",type:"text",placeholder:"Введіть прізвище",value:c,onChange:p=>{n(p.target.value),p.target.value.trim()&&N(C=>({...C,lastName:!1}))},isError:F.lastName})]}),t.jsxs(G,{children:[t.jsx(S,{htmlFor:"patronymic",children:"По батькові"}),t.jsx(E,{id:"patronymic",type:"text",placeholder:"Введіть по батькові",value:h,onChange:p=>u(p.target.value)})]})]})]})]}),t.jsxs(ze,{children:[t.jsx(Le,{children:t.jsxs(he,{children:[t.jsx(L,{children:t.jsxs(G,{children:[t.jsx(S,{htmlFor:"birthdate",children:"Дата народження *"}),t.jsx(pe,{children:t.jsx(re,{selectedDate:j,onDateChange:p=>{s(p),p&&N(C=>({...C,birthdate:!1}))},isError:F.birthdate})})]})}),t.jsx(L,{children:t.jsxs(G,{children:[t.jsx(S,{htmlFor:"address",children:"Адреса"}),t.jsx(E,{id:"address",type:"text",value:i,onChange:p=>f(p.target.value),placeholder:"Введіть адресу"})]})}),t.jsx(L,{children:t.jsx(qt,{label:"Виберіть стать",value:y,onChange:M})})]})}),t.jsxs(Re,{children:[t.jsx(Mo,{children:"Контакти"}),t.jsxs(he,{children:[t.jsx(L,{children:t.jsxs(G,{children:[t.jsx(S,{htmlFor:"phone",children:"Телефон"}),t.jsx(E,{id:"phone",type:"tel",value:z,onChange:p=>R(p.target.value),placeholder:"Введіть номер телефону"})]})}),t.jsx(L,{children:t.jsxs(G,{children:[t.jsx(S,{htmlFor:"email",children:"Email"}),t.jsx(E,{id:"email",type:"email",value:B,onChange:p=>Ae(p.target.value),placeholder:"Введіть email"})]})}),t.jsx(L,{children:t.jsxs(G,{children:[t.jsx(S,{htmlFor:"socialMedia",children:"Соцмережі"}),t.jsx(E,{id:"socialMedia",type:"text",value:ge,onChange:p=>Ue(p.target.value),placeholder:"Введіть посилання на соцмережі"})]})})]})]})]}),t.jsx(T,{helpTooltiptitle:"Ці параметри не є обов'язковими, але вони допомагають отримати детальнішу статистику 📊",helpTooltip:"Додайте перший замір щоб відстежувати зміни спортсмена. Після створення профілю спортсмена ви зможете додавати нові заміри та повністю керувати ними 😊",title:"Фізичні дані",children:t.jsxs(Me,{hasphysique:!0,children:[t.jsxs(G,{children:[t.jsx(S,{htmlFor:"height",children:"Зріст у м."}),t.jsx(E,{id:"height",type:"number",min:"0",max:"4",placeholder:"Введіть зріст у м.",step:"0.1",value:Ve,onChange:p=>Ye(p.target.value)})]}),t.jsxs(G,{children:[t.jsx(S,{htmlFor:"weight",children:"Вага у кг."}),t.jsx(E,{id:"weight",min:"0",max:"400",step:"0.1",placeholder:"Введіть вагу у кг.",type:"number",value:qe,onChange:p=>Je(p.target.value)})]}),t.jsxs(G,{children:[t.jsx(S,{htmlFor:"dateOfMeasurement",children:"Дата вимірювання"}),t.jsx(pe,{children:t.jsx(re,{selectedDate:Ke,onDateChange:Xe})})]})]})}),t.jsx(T,{title:"Спортивна інформація",children:t.jsxs(ze,{$hasSportInfo:!0,children:[t.jsx(Le,{$hasSportInfo:!0,children:t.jsxs(he,{children:[t.jsx(L,{children:t.jsxs(G,{children:[t.jsx(S,{htmlFor:"role",children:"Роль у команді"}),t.jsx(E,{id:"role",type:"text",value:fe,onChange:p=>Qe(p.target.value),placeholder:"Введіть роль у команді"})]})}),t.jsx(L,{children:t.jsxs(G,{children:[t.jsx(S,{htmlFor:"sportCategory",children:"Спортивний розряд"}),t.jsx(E,{id:"sportCategory",type:"text",value:be,onChange:p=>Ze(p.target.value),placeholder:"Введіть спортивний розряд"})]})}),t.jsx(L,{children:t.jsxs(G,{children:[t.jsx(S,{htmlFor:"notes",children:"Примітки про спортсмена"}),t.jsx(zo,{id:"notes",value:we,onChange:p=>et(p.target.value),placeholder:"Додайте примітки про спортсмена"})]})})]})}),t.jsx(Re,{$hasSportInfo:!0,children:t.jsx(lr,{onTeamSelect:rt})})]})}),t.jsx(T,{title:"Навчальні заклади",children:t.jsx(Lo,{children:t.jsxs(L,{children:[t.jsxs(G,{children:[t.jsx(S,{htmlFor:"school",children:"Школа"}),t.jsx(E,{id:"school",type:"text",placeholder:"Введіть назву школи",value:ve,onChange:p=>nt(p.target.value)})]}),t.jsxs(G,{$isUniversity:!0,children:[t.jsx(S,{htmlFor:"university",children:"Університет"}),t.jsx(E,{id:"university",type:"text",placeholder:"Введіть назву університету",value:$e,onChange:p=>ot(p.target.value)})]})]})})}),t.jsx(T,{title:"Спортивний заклад",ref:e,children:t.jsx(Ee,{$isSportsFacility:!0,children:t.jsxs(Ro,{children:[t.jsxs(Ne,{$isSportsFacility:!0,children:[t.jsxs(G,{children:[t.jsx(S,{children:"Поточний спортивний заклад *"}),t.jsx(E,{type:"text",value:Z,onChange:p=>{it(p.target.value),p.target.value.trim()&&N(C=>({...C,currentSportInstitution:!1}))},placeholder:"Введіть назву закладу",isError:F.currentSportInstitution})]}),t.jsxs(G,{children:[t.jsx(S,{children:"Тренер *"}),t.jsx(E,{type:"text",value:ee,onChange:p=>{at(p.target.value),p.target.value.trim()&&N(C=>({...C,trainer:!1}))},placeholder:"Введіть ім'я тренера",isError:F.trainer})]})]}),t.jsxs(Ne,{$isSportsFacility:!0,children:[t.jsxs(G,{children:[t.jsx(S,{children:"Контакти тренера"}),t.jsx(E,{type:"text",value:ke,onChange:p=>st(p.target.value),placeholder:"Введіть контакти"})]}),t.jsxs(G,{children:[t.jsx(S,{children:"Дата вступу *"}),t.jsx(pe,{children:t.jsx(re,{selectedDate:te,onDateChange:p=>{lt(p),p&&N(C=>({...C,entryDate:!1}))},isError:F.entryDate})})]})]})]})})}),t.jsx(T,{title:"Минулі спортивні заклади",children:t.jsx(Tr,{onDataUpdate:ct})}),t.jsx(T,{title:"Медична інформація",children:t.jsx(to,{onDataUpdate:ut,medicalData:pt,setMedicalData:ht})}),t.jsx(T,{title:"Родичи спортсмена",children:t.jsx(bo,{onDataUpdate:gt})}),t.jsx(Do,{children:t.jsx(Bo,{type:"button",onClick:wt,children:"Створити"})})]})})]})};export{Wo as default};
