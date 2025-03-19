import{r,d as o,j as t,b as q}from"./index-7fa575f1.js";import{S as Y,C as B}from"./CustomDatePicker-85fcc7e3.js";import{p as K}from"./PlaceholderProfile-3c1b0d36.js";const G=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6 9L12 15L18 9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),U=o.div`
  
  margin: 20px 0;
  border: 1.7px solid ${({theme:e})=>e.greenMain};
  border-radius: 8px;

  background-color: ${({theme:e})=>e.ContainerBGColor}; 
  transition: background-color 0.3s ease;
  ${({isOpen:e})=>!e&&`
    border-radius: 8px 8px 0 0;
  `}


`,X=o(G)`
  stroke: ${e=>e.theme.white};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
`,Z=o.button.attrs({type:"button"})`
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
`,J=o.div`
  padding: 0 20px;
  max-height: ${({isOpen:e})=>e?"1000px":"0"};
  opacity: ${({isOpen:e})=>e?"1":"0"};
  overflow: hidden;
  transition: 
    max-height ${({isOpen:e})=>e?"0.8s":"0.4s"} ease-in-out,
    opacity ${({isOpen:e})=>e?"0.8s":"0.4s"} ease-in-out;
`,Q=o.h3`
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
`,_=o.div`
  display: flex;
  align-items: center;
`,ee=o.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,te=e=>r.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2}),r.createElement("path",{d:"M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M12 16H12.01",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),F=o(te)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({theme:e})=>e.white};
  transition: stroke 0.3s ease;
`,oe=o.button.attrs({type:"button"})`
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

    ${F} {
      stroke: ${({theme:e})=>e.gray}; 
    }
  }
`,re=o.div`
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
`,ie=o.div`

  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300; 


`,ne=o.div`
  font-size: 14px; 
  font-weight: 600; 
  margin-bottom: 5px; 
`,se=({title:e,text:d,top:s,left:h})=>{const[x,a]=r.useState(!1);return t.jsxs(oe,{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:()=>a(!x),children:[t.jsx(F,{}),t.jsx(re,{visible:x,top:s,left:h,children:t.jsxs(ie,{children:[" ",e&&t.jsx(ne,{children:e}),d]})})]})},M=({children:e,helpTooltiptitle:d,helpTooltip:s,title:h,top:x,left:a})=>{const[m,b]=r.useState(!1),[f,$]=r.useState(!1),u=r.useRef(null),c=r.useRef(null),j=r.useRef(!1),C=()=>{b(w=>(f||$(!0),!w))};return r.useEffect(()=>{const w=new IntersectionObserver(([v])=>{!f&&v.isIntersecting&&!j.current&&v.intersectionRatio>=1&&(setTimeout(()=>{b(!0)},200),j.current=!0)},{threshold:1,rootMargin:"0px 0px -100px 0px"});return u.current&&w.observe(u.current),()=>{u.current&&w.unobserve(u.current)}},[f]),r.useEffect(()=>{c.current&&(m?c.current.removeAttribute("inert"):c.current.setAttribute("inert",""))},[m]),t.jsxs(U,{ref:u,isOpen:m,children:[t.jsxs(Z,{onClick:C,role:"button",tabIndex:0,children:[h&&t.jsx(Q,{children:h}),t.jsxs(_,{children:[s&&t.jsx(ee,{onClick:w=>w.stopPropagation(),children:t.jsx(se,{title:d,text:s,top:x,left:a})}),t.jsx(X,{isOpen:m})]})]}),t.jsx(J,{ref:c,isOpen:m,children:e})]})},ae=o.div`
  position: relative;
  width: 100%;
`,le=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,de=o.span`
  color: ${({theme:e})=>e.textGray};
`,ce=o.button.attrs({type:"button"})`
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
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.lightGreen};
    box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.lightGreen.slice(1,3),16)}, ${parseInt(e.lightGreen.slice(3,5),16)}, ${parseInt(e.lightGreen.slice(5,7),16)}, 0.5)`};
  }
`,pe=o.div`
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
`,y=o.button.attrs({type:"button"})`
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
  }
`,he=o(G)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) ${e=>e.open?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
  width: 22px;
  height: auto;
`,xe=({label:e,value:d,onChange:s})=>{const[h,x]=r.useState(!1),[a,m]=r.useState(d),b=r.useRef(null),f=()=>{x(!h)},$=c=>{m(c),s(c),x(!1)},u=c=>{b.current&&!b.current.contains(c.target)&&x(!1)};return r.useEffect(()=>(document.addEventListener("click",u),()=>{document.removeEventListener("click",u)}),[]),t.jsxs(ae,{ref:b,children:[e&&t.jsx(le,{onClick:f,children:e}),t.jsxs(ce,{onClick:f,children:[t.jsx(de,{children:a||"Не вибрано"}),t.jsx(he,{open:h})]}),h&&t.jsxs(pe,{children:[t.jsx(y,{className:a==="Чоловік"?"selected":"",onClick:()=>$("Чоловік"),children:"Чоловік"}),t.jsx(y,{className:a==="Жінка"?"selected":"",onClick:()=>$("Жінка"),children:"Жінка"}),t.jsx(y,{className:a===""?"selected":"",onClick:()=>$(""),children:"Не вибрано"})]})]})};o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`;o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:d,name:s})=>d&&s==="username"?e.red:e.borderColor};
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
`;const n={mobile:"320px",tablet:"768px",desktop:"1024px"},ue=o.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  @media (min-width: ${n.tablet}) {
    align-items: flex-start;
    height: 100%;
  }
`,me=o.form`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${n.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${n.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }
`,ge=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${n.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`,be=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  
  @media (min-width: ${n.tablet}) {
    width: auto;
    margin-right: 3.8rem;
    margin-bottom: 0;
    justify-content: flex-start;
    align-self: center; 
  }

   @media (min-width: ${n.desktop}) {
    margin-right: 2rem;
  }
`,fe=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${n.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,we=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,$e=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ke=o.label`
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

  @media (min-width: ${n.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,je=o.input`
  display: none;
`,ve=o.div`
  flex: 1;
  
  @media (min-width: ${n.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center; 
  }
`,I=o.h2`
  color: ${({theme:e})=>e.greenMain};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`,z=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: ${e=>e.hasphysique?"20px":"0"};
  padding-bottom: ${e=>e.hasphysique?"20px":"0"};
  @media (min-width: ${n.tablet}) {
    flex-direction: column;
  }
  
  @media (min-width: ${n.desktop}) {
    flex-direction: row;
    gap: 1.5rem;
  }
`,l=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,p=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,g=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:d,name:s})=>d&&s==="username"?e.red:e.borderColor};
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


`,Ce=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,ye=o.button`
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
    box-shadow: 0 0 0 2px ${({theme:e})=>e.lightGreenAlpha};
  }

  &:focus {
    outline: none;
     background-color: ${({theme:e})=>e.darkGreen};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.lightGreenAlpha};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    cursor: not-allowed;
  }
`,Ge=o(Y)`
  fill: ${e=>e.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${n.tablet}) {
    width: 18px;
    height: 18px;
  }
`,E=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Ie=o.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media (min-width: ${n.desktop}) {
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }
`,Se=o.div`
  flex: 1;
  
  @media (min-width: ${n.desktop}) {
    margin-top: 3.1rem;
  }
`,Be=o.div`
  flex: 1;
`;o(I)`
  margin-bottom: 1rem;
`;const O=o.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,k=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: ${n.desktop}) {
    flex-direction: row;
    gap: 20px;
    
    & > ${l} {
      flex: 1;
    }
  }
`;o.div`
  position: relative;
`;const Me=o.select`
  width: 100%;
  padding: 0.75rem 1rem;
  padding-right: 2.5rem; 
  border: 1.6px solid ${({theme:e})=>e.borderColor};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  transition: all 0.2s ease-in-out;
  appearance: none; 
  -webkit-appearance: none;
  -moz-appearance: none;
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
  
 & > option {
    background-color: ${({theme:e})=>e.ContainerBGColor};
    color: ${({theme:e})=>e.textBlack};
    padding: 10px;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
  }


  & > option:checked {
    background-color: ${({theme:e})=>e.darkGreen}; 
    color: ${({theme:e})=>e.white}; 
  }
`;o(G)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3; 
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  transform-origin: center;
  width: 22px; 
  height: auto;
  transition: transform 0.3s ease; 
  
  ${Me}:focus + & {
    transform: translateY(-50%) rotate(180deg);
  }
`;const ze=o(I)`
  margin-bottom: 1rem;
  padding-top: 10px;

  @media (min-width: ${n.desktop}) {
    padding-top: 0;
  }
`,Le=()=>{const{setTitle:e}=q();r.useState(!1);const[d,s]=r.useState(""),[h,x]=r.useState(""),[a,m]=r.useState(""),[b,f]=r.useState(""),[$,u]=r.useState(""),[c,j]=r.useState(""),[C,w]=r.useState(""),[v,L]=r.useState(""),[P,T]=r.useState(""),[W,D]=r.useState(""),[N,R]=r.useState(""),[A,H]=r.useState("");r.useEffect(()=>{e("Створення нового спортсмена")},[e]);const V=i=>{if(i.key==="Enter"||i.key===" "){const S=document.getElementById("photo-upload");S&&S.click()}};return t.jsx(t.Fragment,{children:t.jsx(ue,{children:t.jsxs(me,{children:[t.jsxs(ge,{children:[t.jsx(be,{children:t.jsxs(fe,{children:[t.jsx(we,{children:t.jsx($e,{src:K,alt:"Фото спортсмена"})}),t.jsx(ke,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:V,children:t.jsx(Ge,{})}),t.jsx(je,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp"})]})}),t.jsxs(ve,{children:[t.jsx(I,{children:"Особиста інформація"}),t.jsxs(z,{children:[t.jsxs(l,{children:[t.jsx(p,{htmlFor:"firstName",children:"Ім'я"}),t.jsx(g,{id:"firstName",type:"text",placeholder:"Введіть ім'я",value:d,onChange:i=>s(i.target.value)})]}),t.jsxs(l,{children:[t.jsx(p,{htmlFor:"lastName",children:"Прізвище"}),t.jsx(g,{id:"lastName",type:"text",placeholder:"Введіть прізвище",value:h,onChange:i=>x(i.target.value)})]}),t.jsxs(l,{children:[t.jsx(p,{htmlFor:"patronymic",children:"По батькові"}),t.jsx(g,{id:"patronymic",type:"text",placeholder:"Введіть по батькові",value:a,onChange:i=>m(i.target.value)})]})]})]})]}),t.jsxs(Ie,{children:[t.jsx(Se,{children:t.jsxs(O,{children:[t.jsx(k,{children:t.jsxs(l,{children:[t.jsx(p,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(E,{children:t.jsx(B,{selectedDate:b,onDateChange:f})})]})}),t.jsx(k,{children:t.jsxs(l,{children:[t.jsx(p,{htmlFor:"address",children:"Адреса"}),t.jsx(g,{id:"address",type:"text",value:$,onChange:i=>u(i.target.value),placeholder:"Введіть адресу"})]})}),t.jsx(k,{children:t.jsx(xe,{label:"Виберіть стать",value:c,onChange:j})})]})}),t.jsxs(Be,{children:[t.jsx(ze,{children:"Контакти"}),t.jsxs(O,{children:[t.jsx(k,{children:t.jsxs(l,{children:[t.jsx(p,{htmlFor:"phone",children:"Телефон"}),t.jsx(g,{id:"phone",type:"tel",value:C,onChange:i=>w(i.target.value),placeholder:"Введіть номер телефону"})]})}),t.jsx(k,{children:t.jsxs(l,{children:[t.jsx(p,{htmlFor:"email",children:"Email"}),t.jsx(g,{id:"email",type:"email",value:v,onChange:i=>L(i.target.value),placeholder:"Введіть email"})]})}),t.jsx(k,{children:t.jsxs(l,{children:[t.jsx(p,{htmlFor:"socialMedia",children:"Соцмережі"}),t.jsx(g,{id:"socialMedia",type:"text",value:P,onChange:i=>T(i.target.value),placeholder:"Введіть посилання на соцмережі"})]})})]})]})]}),t.jsx(M,{helpTooltiptitle:"Ці параметри не є обов'язковими, але вони допомагають отримати детальнішу статистику 📊",helpTooltip:"Додайте перший замір щоб відстежувати зміни спортсмена. Після створення профілю спортсмена ви зможете додавати нові заміри та повністю керувати ними 😊",top:"-700%",left:"-310%",title:"Фізичні дані",children:t.jsxs(z,{hasphysique:!0,children:[t.jsxs(l,{children:[t.jsx(p,{htmlFor:"height",children:"Зріст у м."}),t.jsx(g,{id:"height",type:"number",min:"0",max:"4",placeholder:"Введіть зріст у м.",step:"0.1",value:W,onChange:i=>D(i.target.value)})]}),t.jsxs(l,{children:[t.jsx(p,{htmlFor:"weight",children:"Вага у кг."}),t.jsx(g,{id:"weight",min:"0",max:"400",step:"0.1",placeholder:"Введіть вагу у кг.",type:"number",value:N,onChange:i=>R(i.target.value)})]}),t.jsxs(l,{children:[t.jsx(p,{htmlFor:"dateOfMeasurement",children:"Дата вимірювання"}),t.jsx(E,{children:t.jsx(B,{selectedDate:A,onDateChange:H})})]})]})}),t.jsx(M,{title:"Спортивна інформація",children:"Будь-який контент"}),t.jsx(Ce,{children:t.jsx(ye,{type:"submit",children:"Створити"})})]})})})};export{Le as default};
