import{r,d as o,j as t,l as $e,b as ve}from"./index-f271f074.js";import{S as ke,C as z}from"./CustomDatePicker-84e94f5d.js";import{p as ye}from"./PlaceholderProfile-3c1b0d36.js";import{P as Ce}from"./PlaceholderTeam-4fc9ba85.js";const K=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6 9L12 15L18 9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ie=o.div`
  
  margin: 20px 0;
  border: 1.7px solid ${({theme:e})=>e.greenMain};
  border-radius: 8px;

  background-color: ${({theme:e})=>e.ContainerBGColor}; 
  transition: background-color 0.3s ease;
  ${({isOpen:e})=>!e&&`
    border-radius: 8px 8px 0 0;
  `}


`,Ge=o(K)`
  stroke: ${e=>e.theme.white};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
`,Se=o.button.attrs({type:"button"})`
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
`,Be=o.div`
  padding: 0 20px;
  max-height: ${({isOpen:e})=>e?"1000px":"0"};
  opacity: ${({isOpen:e})=>e?"1":"0"};
  overflow: hidden;
  transition: 
    max-height ${({isOpen:e})=>e?"0.8s":"0.4s"} ease-in-out,
    opacity ${({isOpen:e})=>e?"0.8s":"0.4s"} ease-in-out;
`,De=o.h3`
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
`,ze=o.div`
  display: flex;
  align-items: center;
`,Ee=o.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,Me=e=>r.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2}),r.createElement("path",{d:"M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M12 16H12.01",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),V=o(Me)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({theme:e})=>e.white};
  transition: stroke 0.3s ease;
`,Te=o.button.attrs({type:"button"})`
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

    ${V} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,Le=o.div`
  position: absolute;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  padding: 12px;
  border-radius: 10px;
  border: 2px solid ${({theme:e})=>e.black};
  font-size: 14px;
  line-height: 1.5;
  width: 300px;
  max-height: 170px;
  z-index: 100;
  cursor: pointer;
  top: ${({top:e})=>e||"-190%"};
  left: ${({left:e})=>e||"-310%"};
  transform: translateX(-50%);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  opacity: ${({visible:e})=>e?1:0};
  transition: opacity 0.2s ease-in-out;
  white-space: pre-line;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 79%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${({theme:e})=>e.black};
  }

  @media (max-width: 768px) {
    width: 260px;
    &::after {
         left: 84%;
    }
  }
`,Ne=o.div`

  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300; 


`,Fe=o.div`
  font-size: 14px; 
  font-weight: 600; 
  margin-bottom: 5px; 
`,Re=({title:e,text:l,top:i,left:g})=>{const[d,x]=r.useState(!1);return t.jsxs(Te,{onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),onClick:()=>x(!d),children:[t.jsx(V,{}),t.jsx(Le,{visible:d,top:i,left:g,children:t.jsxs(Ne,{children:[" ",e&&t.jsx(Fe,{children:e}),l]})})]})},y=({children:e,helpTooltiptitle:l,helpTooltip:i,title:g,top:d,left:x})=>{const[a,b]=r.useState(!1),[f,w]=r.useState(!1),c=r.useRef(null),n=r.useRef(null),v=r.useRef(!1),j=()=>{b(k=>(f||w(!0),!k))};return r.useEffect(()=>{const k=new IntersectionObserver(([G])=>{!f&&G.isIntersecting&&!v.current&&G.intersectionRatio>=1&&(setTimeout(()=>{b(!0)},200),v.current=!0)},{threshold:1,rootMargin:"0px 0px -100px 0px"});return c.current&&k.observe(c.current),()=>{c.current&&k.unobserve(c.current)}},[f]),r.useEffect(()=>{n.current&&(a?n.current.removeAttribute("inert"):n.current.setAttribute("inert",""))},[a]),t.jsxs(Ie,{ref:c,isOpen:a,children:[t.jsxs(Se,{onClick:j,role:"button",tabIndex:0,children:[g&&t.jsx(De,{children:g}),t.jsxs(ze,{children:[i&&t.jsx(Ee,{onClick:k=>k.stopPropagation(),children:t.jsx(Re,{title:l,text:i,top:d,left:x})}),t.jsx(Ge,{isOpen:a})]})]}),t.jsx(Be,{ref:n,isOpen:a,children:e})]})},Pe=o.div`
  position: relative;
  width: 100%;
`,Oe=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,We=o.span`
  color: ${({theme:e})=>e.textGray};
  font-family: 'Inter Tight', sans-serif;
`,Ae=o.button.attrs({type:"button"})`
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
`,He=o.div`
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
`,E=o.button.attrs({type:"button"})`
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
`,Ke=o(K)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) ${e=>e.open?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
  width: 22px;
  height: auto;
`,Ve=({label:e,value:l,onChange:i})=>{const[g,d]=r.useState(!1),[x,a]=r.useState(l),b=r.useRef(null),f=()=>{d(!g)},w=n=>{a(n),i(n),d(!1)},c=n=>{b.current&&!b.current.contains(n.target)&&d(!1)};return r.useEffect(()=>(document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}),[]),t.jsxs(Pe,{ref:b,children:[e&&t.jsx(Oe,{onClick:f,children:e}),t.jsxs(Ae,{onClick:f,children:[t.jsx(We,{children:x||"Не вибрано"}),t.jsx(Ke,{open:g})]}),g&&t.jsxs(He,{children:[t.jsx(E,{className:x==="Чоловік"?"selected":"",onClick:()=>w("Чоловік"),children:"Чоловік"}),t.jsx(E,{className:x==="Жінка"?"selected":"",onClick:()=>w("Жінка"),children:"Жінка"}),t.jsx(E,{className:x===""?"selected":"",onClick:()=>w(""),children:"Не вибрано"})]})]})},qe=o.div`
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
`,Ue=o.div`
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
`,Xe=o.button`
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) 14px;
  grid-gap: 12px;
  align-items: center;
  padding: 10px 15px;
  background-color: ${({theme:e,isSelected:l})=>l?e.greenMain:e.disabledBG};
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
    background-color: ${({theme:e,isSelected:l})=>l?e.greenMain:`${e.lightGreen}`};
  }

  &:focus {
    outline: none;
    background-color: ${({theme:e,isSelected:l})=>l?e.greenMain:`${e.greenMain}80`};
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
`,_e=o.div`
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
`,Ye=o.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,Ze=o.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Je=o.div`
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
`,Qe=o.div`
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
`,et=o.div`
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  flex: 1; 
  overflow: hidden; 
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`,tt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,ot=o.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  margin-bottom: 15px;
  position: relative;
  z-index: 1;

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
`,nt=o.img`
  border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,rt=()=>{const[e,l]=r.useState(null),i=r.useRef(null),g=r.useRef({}),d=[{id:1,name:"Динамо"},{id:2,name:"Шахтар"},{id:3,name:"Зоря"},{id:4,name:"Металіст"},{id:5,name:"Верес"},{id:6,name:"Олександрія"},{id:7,name:"Чорноморець"},{id:8,name:"Карпати"},{id:9,name:"Дніпро"},{id:10,name:"Десна"}],x=r.useCallback(a=>{e&&e.id===a.id?(console.log("Team deselected:",a),l(null),g.current[a.id]&&g.current[a.id].blur()):(console.log("Team selected:",a),l(a))},[e]);return r.useEffect(()=>{if(!i.current)return;const a={root:i.current,rootMargin:"0px",threshold:.1},b=c=>{c.forEach(n=>{n.target.classList&&(n.isIntersecting?(n.target.classList.add("visible"),n.target.classList.remove("hidden")):(n.target.classList.add("hidden"),n.target.classList.remove("visible")))})},f=new IntersectionObserver(b,a);return document.querySelectorAll('[id^="team-"]').forEach(c=>{f.observe(c),c.classList.add("hidden")}),()=>f.disconnect()},[]),t.jsx(et,{children:t.jsxs(Je,{children:[t.jsx(ot,{children:t.jsx(tt,{children:t.jsx("h2",{children:"Команда спортсмена"})})}),t.jsx(Qe,{ref:i,children:d.length>0?d.map(a=>t.jsx(qe,{className:"team-item",id:`team-${a.id}`,children:t.jsxs(Xe,{ref:b=>g.current[a.id]=b,isSelected:e&&e.id===a.id,onClick:()=>x(a),type:"button",children:[t.jsx(_e,{children:t.jsx(nt,{loading:"lazy",src:Ce})}),t.jsx(Ye,{children:t.jsx(Ze,{children:a.name})})]})},a.id)):t.jsx(Ue,{children:"Команд не знайдено"})})]})})},it=o.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,st=o.div`
    padding: 10px 0;
    border: 1.6px solid ${({theme:e})=>e.gray};
    border-radius: 0.5rem;
   margin-bottom: 1rem;
`,at=o.div`
  flex-grow: 1;
  max-height: 300px;
  overflow-y: auto;
  display: ${({$hasInstitutions:e})=>e?"block":"none"};
  background-color: ${({theme:e})=>e.ContainerBGColor};
  
`,lt=o.div`
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
`,dt=o.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,S=o.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: ${({theme:e})=>e.textBlack};
`,ct=o.button`
  background: none;
  border: none;
  color: ${({theme:e})=>e.red};
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 0.5rem;

  &:hover {
    color: ${({theme:e})=>e.redDark};
  }
`,ht=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,N=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`,D=o.div`
  display: flex;
  flex-direction: column;
`,C=o.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textPrimary||e.textBlack};
`,I=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({$error:e,theme:l})=>e?l.red:l.borderColor};
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
`,B=o.span`
  color: ${({theme:e})=>e.red};
  font-size: 0.75rem;
  margin-left: 0.5rem;
`,pt=o.button`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
  }
  &:focus {
    outline: none;
    background-color: ${({theme:e})=>e.darkGreen};
  }
`,xt=o.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,ut=o.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`,F=o(D)`
  flex: 1;
`,gt=o.div`
  text-align: center;
  color: ${({theme:e})=>e.textGray};
  padding: 1rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
`,mt=()=>{const[e,l]=r.useState([]),[i,g]=r.useState({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),[d,x]=r.useState({}),a=n=>{n.key==="Enter"&&n.preventDefault()},b=()=>{const n={};return i.coachName.trim()?i.coachName.length>50&&(n.coachName="Ім'я тренера не може перевищувати 50 символів"):n.coachName="Ім'я тренера є обов'язковим",i.institution&&i.institution.length>100&&(n.institution="Назва закладу не може перевищувати 100 символів"),i.coachContacts&&i.coachContacts.length>100&&(n.coachContacts="Контакти не можуть перевищувати 100 символів"),i.entryDate&&i.exitDate&&i.exitDate<i.entryDate&&(n.exitDate="Дата виходу не може бути раніше дати вступу"),x(n),Object.keys(n).length===0},f=()=>{if(b()){const n=[...e,{...i,id:Date.now()}];l(n),g({coachName:"",institution:"",coachContacts:"",entryDate:"",exitDate:""}),x({})}},w=n=>{const v=e.filter(j=>j.id!==n);l(v)},c=(n,v)=>{if(g(j=>({...j,[n]:v})),d[n]){const j={...d};delete j[n],x(j)}};return t.jsxs(it,{children:[e.length===0?t.jsx(gt,{children:"Додайте інформацію"}):t.jsx(st,{children:t.jsx(at,{$hasInstitutions:e.length>0,children:e.map(n=>t.jsxs(lt,{children:[t.jsxs(dt,{children:[t.jsxs(S,{children:[t.jsx("strong",{children:"Тренер:"}),t.jsx("span",{children:n.coachName})]}),t.jsxs(S,{children:[t.jsx("strong",{children:"Заклад:"}),t.jsx("span",{children:n.institution||"Без назви"})]}),t.jsxs(S,{children:[t.jsx("strong",{children:"Контакти:"}),t.jsx("span",{children:n.coachContacts||"Не вказано"})]}),t.jsxs(S,{children:[t.jsx("strong",{children:"Період:"}),t.jsxs("span",{children:[n.entryDate," - ",n.exitDate||"дотепер"]})]})]}),t.jsx(ct,{onClick:()=>w(n.id),children:"✕"})]},n.id))})}),t.jsxs(ht,{children:[t.jsxs(N,{children:[t.jsxs(D,{children:[t.jsxs(C,{children:["Минулий Тренер *",d.coachName&&t.jsx(B,{children:d.coachName})]}),t.jsx(I,{type:"text",onKeyDown:a,value:i.coachName,onChange:n=>c("coachName",n.target.value),placeholder:"Введіть ім'я тренера",$error:d.coachName})]}),t.jsxs(D,{children:[t.jsxs(C,{children:["Минулий спортивний заклад",d.institution&&t.jsx(B,{children:d.institution})]}),t.jsx(I,{type:"text",onKeyDown:a,value:i.institution,onChange:n=>c("institution",n.target.value),placeholder:"Введіть назву закладу",$error:d.institution})]})]}),t.jsxs(N,{children:[t.jsxs(D,{children:[t.jsxs(C,{children:["Контакти тренера",d.coachContacts&&t.jsx(B,{children:d.coachContacts})]}),t.jsx(I,{type:"text",onKeyDown:a,value:i.coachContacts,onChange:n=>c("coachContacts",n.target.value),placeholder:"Введіть контакти тренера",$error:d.coachContacts})]}),t.jsxs(ut,{children:[t.jsxs(F,{children:[t.jsx(C,{children:"Дата вступу"}),t.jsx(I,{type:"date",value:i.entryDate,onChange:n=>c("entryDate",n.target.value)})]}),t.jsxs(F,{children:[t.jsxs(C,{children:["Дата залишення",d.exitDate&&t.jsx(B,{children:d.exitDate})]}),t.jsx(I,{type:"date",value:i.exitDate,onChange:n=>c("exitDate",n.target.value),min:i.entryDate,$error:d.exitDate})]})]})]})]}),t.jsx(xt,{children:t.jsx(pt,{type:"button",onClick:f,children:"Додати"})})]})};o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`;o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:l,name:i})=>l&&i==="username"?e.red:e.borderColor};
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
`;const u={mobile:"320px",tablet:"768px",desktop:"1024px"},bt=o.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  @media (min-width: ${u.tablet}) {
    align-items: flex-start;
    height: 100%;
  }
`,R=o.form`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${u.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${u.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }
`,ft=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${u.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`,wt=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  
  @media (min-width: ${u.tablet}) {
    width: auto;
    margin-right: 3.8rem;
    margin-bottom: 0;
    justify-content: flex-start;
    align-self: center; 
  }

   @media (min-width: ${u.desktop}) {
    margin-right: 2rem;
  }
`,jt=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${u.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,$t=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,vt=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,kt=o.label`
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

  @media (min-width: ${u.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,yt=o.input`
  display: none;
`,Ct=o.div`
  flex: 1;
  
  @media (min-width: ${u.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center; 
  }
`,q=o.h2`
  color: ${({theme:e})=>e.greenMain};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`,P=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: ${e=>e.hasphysique?"20px":"0"};
  padding-bottom: ${e=>e.hasphysique?"20px":"0"};
  @media (min-width: ${u.tablet}) {
    flex-direction: column;
  }
  
  @media (min-width: ${u.desktop}) {
    flex-direction: row;
    gap: 1.5rem;
  }
`,h=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({$isUniversity:e})=>e&&$e`
      @media (min-width: 1024px) {
       margin-top: 10px; 
      }  
    `}
`,p=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,m=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:l,name:i})=>l&&i==="username"?e.red:e.borderColor};
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
`,It=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,Gt=o.button`
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
`,St=o(ke)`
  fill: ${e=>e.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${u.tablet}) {
    width: 18px;
    height: 18px;
  }
`,M=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,O=o.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
   margin-top: ${e=>e.$hasSportInfo?"20px":"0"};
  @media (min-width: ${u.desktop}) {
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }
`,W=o.div`
  flex: 1;
  
  @media (min-width: ${u.desktop}) {
     margin-top: ${e=>e.$hasSportInfo?"0":"3.1rem"}
  }

  
`,A=o.div`
  flex: 1;
  @media (max-width: ${u.desktop}) {
    margin-top: ${e=>e.$hasSportInfo?"20px":"0"}
  }
`,T=o.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,$=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: ${u.desktop}) {
    flex-direction: row;
    gap: 20px;
    
    & > ${h} {
      flex: 1;
    }
  }
`,Bt=o(q)`
  margin-bottom: 1rem;
  padding-top: 10px;

  @media (min-width: ${u.desktop}) {
    padding-top: 0;
  }
`,Dt=o.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:l,name:i})=>l&&i==="notes"?e.red:e.borderColor};
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
`,zt=o.div`
  margin: 20px 0;
`,Et=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${u.desktop}) {
    flex-direction: row;
    gap: 40px;
  }
`,H=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
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
`;const Ft=()=>{const{setTitle:e}=ve();r.useState(!1);const[l,i]=r.useState(""),[g,d]=r.useState(""),[x,a]=r.useState(""),[b,f]=r.useState(""),[w,c]=r.useState(""),[n,v]=r.useState(""),[j,k]=r.useState(""),[G,U]=r.useState(""),[X,_]=r.useState(""),[Y,Z]=r.useState(""),[J,Q]=r.useState(""),[ee,te]=r.useState(""),[oe,ne]=r.useState(""),[re,ie]=r.useState(""),[se,ae]=r.useState("");r.useState(null);const[le,de]=r.useState(""),[ce,he]=r.useState(""),[pe,xe]=r.useState(""),[ue,ge]=r.useState(""),[me,be]=r.useState(""),[fe,we]=r.useState(null);r.useEffect(()=>{e("Створення нового спортсмена")},[e]);const je=s=>{if(s.key==="Enter"||s.key===" "){const L=document.getElementById("photo-upload");L&&L.click()}};return t.jsx(t.Fragment,{children:t.jsx(bt,{children:t.jsxs(R,{children:[t.jsxs(ft,{children:[t.jsx(wt,{children:t.jsxs(jt,{children:[t.jsx($t,{children:t.jsx(vt,{src:ye,alt:"Фото спортсмена"})}),t.jsx(kt,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:je,children:t.jsx(St,{})}),t.jsx(yt,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp"})]})}),t.jsxs(Ct,{children:[t.jsx(q,{children:"Особиста інформація"}),t.jsxs(P,{children:[t.jsxs(h,{children:[t.jsx(p,{htmlFor:"firstName",children:"Ім'я"}),t.jsx(m,{id:"firstName",type:"text",placeholder:"Введіть ім'я",value:l,onChange:s=>i(s.target.value)})]}),t.jsxs(h,{children:[t.jsx(p,{htmlFor:"lastName",children:"Прізвище"}),t.jsx(m,{id:"lastName",type:"text",placeholder:"Введіть прізвище",value:g,onChange:s=>d(s.target.value)})]}),t.jsxs(h,{children:[t.jsx(p,{htmlFor:"patronymic",children:"По батькові"}),t.jsx(m,{id:"patronymic",type:"text",placeholder:"Введіть по батькові",value:x,onChange:s=>a(s.target.value)})]})]})]})]}),t.jsxs(O,{children:[t.jsx(W,{children:t.jsxs(T,{children:[t.jsx($,{children:t.jsxs(h,{children:[t.jsx(p,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(M,{children:t.jsx(z,{selectedDate:b,onDateChange:f})})]})}),t.jsx($,{children:t.jsxs(h,{children:[t.jsx(p,{htmlFor:"address",children:"Адреса"}),t.jsx(m,{id:"address",type:"text",value:w,onChange:s=>c(s.target.value),placeholder:"Введіть адресу"})]})}),t.jsx($,{children:t.jsx(Ve,{label:"Виберіть стать",value:n,onChange:v})})]})}),t.jsxs(A,{children:[t.jsx(Bt,{children:"Контакти"}),t.jsxs(T,{children:[t.jsx($,{children:t.jsxs(h,{children:[t.jsx(p,{htmlFor:"phone",children:"Телефон"}),t.jsx(m,{id:"phone",type:"tel",value:j,onChange:s=>k(s.target.value),placeholder:"Введіть номер телефону"})]})}),t.jsx($,{children:t.jsxs(h,{children:[t.jsx(p,{htmlFor:"email",children:"Email"}),t.jsx(m,{id:"email",type:"email",value:G,onChange:s=>U(s.target.value),placeholder:"Введіть email"})]})}),t.jsx($,{children:t.jsxs(h,{children:[t.jsx(p,{htmlFor:"socialMedia",children:"Соцмережі"}),t.jsx(m,{id:"socialMedia",type:"text",value:X,onChange:s=>_(s.target.value),placeholder:"Введіть посилання на соцмережі"})]})})]})]})]}),t.jsx(y,{helpTooltiptitle:"Ці параметри не є обов'язковими, але вони допомагають отримати детальнішу статистику 📊",helpTooltip:"Додайте перший замір щоб відстежувати зміни спортсмена. Після створення профілю спортсмена ви зможете додавати нові заміри та повністю керувати ними 😊",top:"-700%",left:"-310%",title:"Фізичні дані",children:t.jsxs(P,{hasphysique:!0,children:[t.jsxs(h,{children:[t.jsx(p,{htmlFor:"height",children:"Зріст у м."}),t.jsx(m,{id:"height",type:"number",min:"0",max:"4",placeholder:"Введіть зріст у м.",step:"0.1",value:Y,onChange:s=>Z(s.target.value)})]}),t.jsxs(h,{children:[t.jsx(p,{htmlFor:"weight",children:"Вага у кг."}),t.jsx(m,{id:"weight",min:"0",max:"400",step:"0.1",placeholder:"Введіть вагу у кг.",type:"number",value:J,onChange:s=>Q(s.target.value)})]}),t.jsxs(h,{children:[t.jsx(p,{htmlFor:"dateOfMeasurement",children:"Дата вимірювання"}),t.jsx(M,{children:t.jsx(z,{selectedDate:ee,onDateChange:te})})]})]})}),t.jsx(y,{title:"Спортивна інформація",children:t.jsxs(O,{$hasSportInfo:!0,children:[t.jsx(W,{$hasSportInfo:!0,children:t.jsxs(T,{children:[t.jsx($,{children:t.jsxs(h,{children:[t.jsx(p,{htmlFor:"role",children:"Роль у команді"}),t.jsx(m,{id:"role",type:"text",value:oe,onChange:s=>ne(s.target.value),placeholder:"Введіть роль у команді"})]})}),t.jsx($,{children:t.jsxs(h,{children:[t.jsx(p,{htmlFor:"sportCategory",children:"Спортивний розряд"}),t.jsx(m,{id:"sportCategory",type:"text",value:re,onChange:s=>ie(s.target.value),placeholder:"Введіть спортивний розряд"})]})}),t.jsx($,{children:t.jsxs(h,{children:[t.jsx(p,{htmlFor:"notes",children:"Примітки про спортсмена"}),t.jsx(Dt,{id:"notes",value:se,onChange:s=>ae(s.target.value),placeholder:"Додайте примітки про спортсмена"})]})})]})}),t.jsx(A,{$hasSportInfo:!0,children:t.jsx(rt,{})})]})}),t.jsx(y,{title:"Навчальні заклади",children:t.jsx(zt,{children:t.jsxs($,{children:[t.jsxs(h,{children:[t.jsx(p,{htmlFor:"school",children:"Школа"}),t.jsx(m,{id:"school",type:"text",placeholder:"Введіть назву школи",value:ce,onChange:s=>he(s.target.value)})]}),t.jsxs(h,{$isUniversity:!0,children:[t.jsx(p,{htmlFor:"university",children:"Університет"}),t.jsx(m,{id:"university",type:"text",placeholder:"Введіть назву університету",value:le,onChange:s=>de(s.target.value)})]})]})})}),t.jsx(y,{title:"Спортивний заклад",children:t.jsx(R,{children:t.jsxs(Et,{children:[t.jsxs(H,{children:[t.jsxs(h,{children:[t.jsx(p,{children:"Поточний спортивний заклад"}),t.jsx(m,{type:"text",value:pe,onChange:s=>xe(s.target.value),placeholder:"Введіть назву закладу"})]}),t.jsxs(h,{children:[t.jsx(p,{children:"Тренер"}),t.jsx(m,{type:"text",value:ue,onChange:s=>ge(s.target.value),placeholder:"Введіть ім'я тренера"})]})]}),t.jsxs(H,{children:[t.jsxs(h,{children:[t.jsx(p,{children:"Контакти тренера"}),t.jsx(m,{type:"text",value:me,onChange:s=>be(s.target.value),placeholder:"Введіть контакти"})]}),t.jsxs(h,{children:[t.jsx(p,{children:"Дата вступу"}),t.jsx(M,{children:t.jsx(z,{selectedDate:fe,onDateChange:we})})]})]})]})})}),t.jsx(y,{title:"Минулі спортивні заклади",children:t.jsx(mt,{})}),t.jsx(y,{title:"TESR",children:t.jsx("p",{children:"asdf"})}),t.jsx(It,{children:t.jsx(Gt,{type:"submit",children:"Створити"})})]})})})};export{Ft as default};
