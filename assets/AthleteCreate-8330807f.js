import{r,d as o,j as t,b as A}from"./index-e096bf72.js";import{S as V,C as I}from"./CustomDatePicker-aed08ffd.js";import{p as q}from"./PlaceholderProfile-3c1b0d36.js";const y=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6 9L12 15L18 9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Y=o.div`
  
  margin: 20px 0;
  border: 1.7px solid ${({theme:e})=>e.greenMain};
  border-radius: 8px;

  background-color: ${({theme:e})=>e.ContainerBGColor}; 
    transition: background-color 0.3s ease;
  ${({isOpen:e})=>!e&&`
    border-radius: 8px 8px 0 0;
  `}


`,E=o(y)`
  stroke: ${e=>e.theme.white};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
`,U=o.div`
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
  border-top-right-radius:6px;
  border: 1.7px solid ${({theme:e})=>e.greenMain};

  &:hover {
    background-color: ${({theme:e})=>e.lightGreen};
    border-color: ${({theme:e})=>e.lightGreen}; 
    ${E} {
      stroke: ${({theme:e})=>e.ContainerBGColor};
    }
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
  }
`,X=o.div`
  padding: 0 20px;
  max-height: ${({isOpen:e})=>e?"1000px":"0"};
  opacity: ${({isOpen:e})=>e?"1":"0"};
  overflow: hidden;
  transition: 
    max-height ${({isOpen:e})=>e?"0.8s":"0.4s"} ease-in-out,
    opacity ${({isOpen:e})=>e?"0.8s":"0.4s"} ease-in-out;
`,Z=o.h3`
  color: ${({theme:e})=>e.white};
  font-size: 22px; 
  font-weight: 600;
  margin: 0;
  line-height: 1.2; 
  max-height: 22px;  
  overflow: hidden; 
`,J=o.div`
  display: flex;
  align-items: center;
`,K=o.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,Q=e=>r.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2}),r.createElement("path",{d:"M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M12 16H12.01",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),_=o.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,ee=o(Q)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({theme:e})=>e.white};
`,te=o.div`
  position: absolute;
  background-color:  ${({theme:e})=>e.ContainerBGColor};
  color:  ${({theme:e})=>e.textBlack};
  padding: 12px;
  border-radius: 10px;
  border: 2px solid   ${({theme:e})=>e.greenMain};
  font-size: 14px;
  line-height: 1.5;
  width: 300px;
  max-height: 170px;
  overflow-y: auto;
  word-wrap: break-word;
  z-index: 100;
  cursor: pointer;
  top: ${({top:e})=>e||"-180%"};
  left: ${({left:e})=>e||"-310%"};
  transform: translateX(-50%);
  
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  opacity: ${({visible:e})=>e?1:0};
  transition: opacity 0.2s ease-in-out;
  
`,oe=({text:e,top:s,left:l})=>{const[h,d]=r.useState(!1);return t.jsxs(_,{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onClick:()=>d(!h),children:[t.jsx(ee,{}),t.jsx(te,{visible:h,top:s,left:l,children:e})]})},S=({children:e,helpTooltip:s,title:l,top:h,left:d})=>{const[x,w]=r.useState(!1),[m,$]=r.useState(!1),c=r.useRef(null),f=r.useRef(!1),u=()=>{w(b=>(m||$(!0),!b))};r.useEffect(()=>{const b=new IntersectionObserver(([j])=>{!m&&j.isIntersecting&&!f.current&&j.intersectionRatio>=1&&(setTimeout(()=>{w(!0)},200),f.current=!0)},{threshold:1,rootMargin:"0px 0px -100px 0px"});return c.current&&b.observe(c.current),()=>{c.current&&b.unobserve(c.current)}},[m]);const v=b=>{b.stopPropagation()};return t.jsxs(Y,{ref:c,isOpen:x,children:[t.jsxs(U,{onClick:u,children:[l&&t.jsx(Z,{children:l}),t.jsxs(J,{children:[s&&t.jsx(K,{onClick:v,children:t.jsx(oe,{text:s,top:h,left:d})}),t.jsx(E,{isOpen:x})]})]}),t.jsx(X,{isOpen:x,children:e})]})},re=o.div`
  position: relative;
  width: 100%;
`,ie=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,ne=o.span`
   color: ${({theme:e})=>e.textGray};
`,se=o.button`
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
  cursor: pointer;
  font-size: 1rem;
  position: relative; 
  cursor: text;
  &:focus {
      outline: none;
      border-color: ${({theme:e})=>e.lightGreen};
      box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.lightGreen.slice(1,3),16)}, ${parseInt(e.lightGreen.slice(3,5),16)}, ${parseInt(e.lightGreen.slice(5,7),16)}, 0.5)`};
  }
`,le=o.div`
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
`,C=o.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  color: ${({theme:e})=>e.textBlack};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({theme:e})=>e.lightGreen};
  }

  &.selected {
    background-color: ${({theme:e})=>e.darkGreen};
    color: ${({theme:e})=>e.white};
  }
`,ae=o(y)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) ${e=>e.open?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
  width: 22px;
  height: auto;
`,de=({label:e,value:s,onChange:l})=>{const[h,d]=r.useState(!1),[x,w]=r.useState(s),m=r.useRef(null),$=u=>{u.preventDefault(),d(!h)},c=u=>{w(u),l(u),d(!1)},f=u=>{m.current&&!m.current.contains(u.target)&&d(!1)};return r.useEffect(()=>(document.addEventListener("click",f),()=>{document.removeEventListener("click",f)}),[]),t.jsxs(re,{ref:m,children:[e&&t.jsx(ie,{onClick:$,children:e}),t.jsxs(se,{onClick:$,children:[t.jsx(ne,{children:x||"Не вибрано"}),t.jsx(ae,{open:h})]}),h&&t.jsxs(le,{children:[t.jsx(C,{className:x==="Чоловік"?"selected":"",onClick:()=>c("Чоловік"),children:"Чоловік"}),t.jsx(C,{className:x===" Жінка"?"selected":"",onClick:()=>c(" Жінка"),children:"Жінка"}),t.jsx(C,{className:x===""?"selected":"",onClick:()=>c(""),children:"Не вибрано"})]})]})};o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`;o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:s,name:l})=>s&&l==="username"?e.red:e.borderColor};
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
`;const n={mobile:"320px",tablet:"768px",desktop:"1024px"},ce=o.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  @media (min-width: ${n.tablet}) {
    align-items: flex-start;
    height: 100%;
  }
`,pe=o.form`
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
`,he=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${n.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`,xe=o.div`
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
`,ue=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${n.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,me=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,ge=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,be=o.label`
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

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
  }

  @media (min-width: ${n.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,fe=o.input`
  display: none;
`,we=o.div`
  flex: 1;
  
  @media (min-width: ${n.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center; 
  }
`,G=o.h2`
  color: ${({theme:e})=>e.greenMain};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`,B=o.div`
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
`,a=o.div`
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
  border: 1.6px solid ${({theme:e,$isEmpty:s,name:l})=>s&&l==="username"?e.red:e.borderColor};
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


`,$e=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,ke=o.button`
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
    box-shadow: 0 0 0 2px ${({theme:e})=>e.lightGreenAlpha};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    cursor: not-allowed;
  }
`,je=o(V)`
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
`,M=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ve=o.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media (min-width: ${n.desktop}) {
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }
`,Ce=o.div`
  flex: 1;
  
  @media (min-width: ${n.desktop}) {
    margin-top: 3.1rem;
  }
`,ye=o.div`
  flex: 1;
`;o(G)`
  margin-bottom: 1rem;
`;const z=o.div`
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
    
    & > ${a} {
      flex: 1;
    }
  }
`;o.div`
  position: relative;
`;const Ge=o.select`
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
`;o(y)`
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
  
  ${Ge}:focus + & {
    transform: translateY(-50%) rotate(180deg);
  }
`;const Ie=o(G)`
  margin-bottom: 1rem;
  padding-top: 10px;

  @media (min-width: ${n.desktop}) {
    padding-top: 0;
  }
`,ze=()=>{const{setTitle:e}=A();r.useState(!1);const[s,l]=r.useState(""),[h,d]=r.useState(""),[x,w]=r.useState(""),[m,$]=r.useState(""),[c,f]=r.useState(""),[u,v]=r.useState(""),[b,j]=r.useState(""),[F,L]=r.useState(""),[O,P]=r.useState(""),[T,W]=r.useState(""),[N,D]=r.useState(""),[R,H]=r.useState("");return r.useEffect(()=>{e("Створення нового спортсмена")},[e]),t.jsx(t.Fragment,{children:t.jsx(ce,{children:t.jsxs(pe,{children:[t.jsxs(he,{children:[t.jsx(xe,{children:t.jsxs(ue,{children:[t.jsx(me,{children:t.jsx(ge,{src:q,alt:"Фото спортсмена"})}),t.jsx(be,{htmlFor:"photo-upload",children:t.jsx(je,{})}),t.jsx(fe,{id:"photo-upload",type:"file",loading:"lazy",accept:"image/jpeg,image/jpg,image/png,image/webp"})]})}),t.jsxs(we,{children:[t.jsx(G,{children:"Особиста інформація"}),t.jsxs(B,{children:[t.jsxs(a,{children:[t.jsx(p,{htmlFor:"firstName",children:"Ім'я"}),t.jsx(g,{id:"firstName",type:"text",placeholder:"Введіть ім'я",value:s,onChange:i=>l(i.target.value)})]}),t.jsxs(a,{children:[t.jsx(p,{htmlFor:"lastName",children:"Прізвище"}),t.jsx(g,{id:"lastName",type:"text",placeholder:"Введіть прізвище",value:h,onChange:i=>d(i.target.value)})]}),t.jsxs(a,{children:[t.jsx(p,{htmlFor:"patronymic",children:"По батькові"}),t.jsx(g,{id:"patronymic",type:"text",placeholder:"Введіть по батькові",value:x,onChange:i=>w(i.target.value)})]})]})]})]}),t.jsxs(ve,{children:[t.jsx(Ce,{children:t.jsxs(z,{children:[t.jsx(k,{children:t.jsxs(a,{children:[t.jsx(p,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(M,{children:t.jsx(I,{selectedDate:m,onDateChange:$})})]})}),t.jsx(k,{children:t.jsxs(a,{children:[t.jsx(p,{htmlFor:"address",children:"Адреса"}),t.jsx(g,{id:"address",type:"text",value:c,onChange:i=>f(i.target.value),placeholder:"Введіть адресу"})]})}),t.jsx(k,{children:t.jsx(de,{label:"Виберіть стать",value:u,onChange:v})})]})}),t.jsxs(ye,{children:[t.jsx(Ie,{children:"Контакти"}),t.jsxs(z,{children:[t.jsx(k,{children:t.jsxs(a,{children:[t.jsx(p,{htmlFor:"phone",children:"Телефон"}),t.jsx(g,{id:"phone",type:"tel",value:b,onChange:i=>j(i.target.value),placeholder:"Введіть номер телефону"})]})}),t.jsx(k,{children:t.jsxs(a,{children:[t.jsx(p,{htmlFor:"email",children:"Email"}),t.jsx(g,{id:"email",type:"email",value:F,onChange:i=>L(i.target.value),placeholder:"Введіть email"})]})}),t.jsx(k,{children:t.jsxs(a,{children:[t.jsx(p,{htmlFor:"socialMedia",children:"Соцмережі"}),t.jsx(g,{id:"socialMedia",type:"text",value:O,onChange:i=>P(i.target.value),placeholder:"Введіть посилання на соцмережі"})]})})]})]})]}),t.jsx(S,{helpTooltip:"Це не обов'язкові параметри, але він дає можливість. отримати аналіз  Додайте перший замір щоб відстежувати зміни в параметрах спортсмена з часом. Ви можете додавати нові заміри пізніше для точнішого аналізу.",top:"-620%",left:"-310%",title:"Фізачні дані",children:t.jsxs(B,{hasphysique:!0,children:[t.jsxs(a,{children:[t.jsx(p,{htmlFor:"height",children:"Зріст у м."}),t.jsx(g,{id:"height",type:"number",min:"0",max:"4",placeholder:"Введіть зріст у м.",step:"0.1",value:T,onChange:i=>W(i.target.value)})]}),t.jsxs(a,{children:[t.jsx(p,{htmlFor:"weight",children:"Вага у кг."}),t.jsx(g,{id:"weight",min:"0",max:"400",step:"0.1",placeholder:"Введіть вагу у кг.",type:"number",value:N,onChange:i=>D(i.target.value)})]}),t.jsxs(a,{children:[t.jsx(p,{htmlFor:"dateOfMeasurement",children:"Дата вимірювання"}),t.jsx(M,{children:t.jsx(I,{selectedDate:R,onDateChange:H})})]})]})}),t.jsx(S,{title:"Спортивна інформація",children:"Будь-який контент"}),t.jsx($e,{children:t.jsx(ke,{type:"submit",children:"Створити"})})]})})})};export{ze as default};
