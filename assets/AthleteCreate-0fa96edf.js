import{r,d as o,j as t,b as q}from"./index-ebdd0f24.js";import{S as H,C}from"./CustomDatePicker-efb94c79.js";import{p as Y}from"./PlaceholderProfile-3c1b0d36.js";const j=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6 9L12 15L18 9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),U=o.div`
    margin: 20px 0;
    border: 1.7px solid ${({theme:e})=>e.greenMain};
    border-radius: 8px;
    overflow: hidden;
    background-color: ${({theme:e})=>e.ContainerBGColor}; 

    ${({isOpen:e})=>!e&&`
      border-radius: 8px 8px 0 0;
    `}

     &:hover {
       border-color: ${({theme:e})=>e.lightGreen}; 
    }
  `,B=o(j)`
    stroke: ${e=>e.theme.white};
    width: 24px;
    height: 24px;
    margin-left: auto;
    transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
    transition: transform 0.3s ease;
  `,V=o.div`
    background-color: ${({theme:e})=>e.greenMain}; 
    padding: 8px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
    cursor: row-resize;
    &:hover {
      background-color: ${({theme:e})=>e.lightGreen}; 

      ${B} {
        stroke: ${({theme:e})=>e.ContainerBGColor}; 
      }
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
`,K=o.h3`
  color: ${({theme:e})=>e.white};
  font-size: 22px; 
  font-weight: 600;
  margin: 0;
  line-height: 1.2; 
  max-height: 22px;  
  overflow: hidden; 
`,y=({children:e,title:d})=>{const[l,u]=r.useState(!1),[h,m]=r.useState(!1),p=r.useRef(null),g=r.useRef(!1),w=()=>{u(c=>(h||m(!0),!c))};return r.useEffect(()=>{const c=new IntersectionObserver(([f])=>{!h&&f.isIntersecting&&!g.current&&f.intersectionRatio>=1&&(setTimeout(()=>{u(!0)},200),g.current=!0)},{threshold:1,rootMargin:"0px 0px -100px 0px"});return p.current&&c.observe(p.current),()=>{p.current&&c.unobserve(p.current)}},[h]),t.jsxs(U,{ref:p,isOpen:l,children:[t.jsxs(V,{onClick:w,children:[d&&t.jsx(K,{children:d}),t.jsx(B,{isOpen:l,children:"▾"})]}),t.jsx(J,{isOpen:l,children:e})]})},Q=o.div`
  position: relative;
  width: 100%;
`,X=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,Z=o.span`
   color: ${({theme:e})=>e.textGray};
`,_=o.button`
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
`,ee=o.div`
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
`,k=o.div`
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
`,te=o(j)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) ${e=>e.open?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
  width: 22px;
  height: auto;
`,oe=({label:e,value:d,onChange:l})=>{const[u,h]=r.useState(!1),[m,p]=r.useState(d),g=r.useRef(null),w=b=>{b.preventDefault(),h(!u)},c=b=>{p(b),l(b),h(!1)},f=b=>{g.current&&!g.current.contains(b.target)&&h(!1)};return r.useEffect(()=>(document.addEventListener("click",f),()=>{document.removeEventListener("click",f)}),[]),t.jsxs(Q,{ref:g,children:[e&&t.jsx(X,{onClick:w,children:e}),t.jsxs(_,{onClick:w,children:[t.jsx(Z,{children:m||"Не вибрано"}),t.jsx(te,{open:u})]}),u&&t.jsxs(ee,{children:[t.jsx(k,{className:m==="Чоловік"?"selected":"",onClick:()=>c("Чоловік"),children:"Чоловік"}),t.jsx(k,{className:m===" Жінка"?"selected":"",onClick:()=>c(" Жінка"),children:"Жінка"}),t.jsx(k,{className:m===""?"selected":"",onClick:()=>c(""),children:"Не вибрано"})]})]})};o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`;o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:d,name:l})=>d&&l==="username"?e.red:e.borderColor};
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
`;const n={mobile:"320px",tablet:"768px",desktop:"1024px"},re=o.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  overflow-y: auto;

  @media (min-width: ${n.tablet}) {
    align-items: flex-start;
    height: 100%;
  }
`,ie=o.form`
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
`,ne=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${n.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`,se=o.div`
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
`,le=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${n.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,ae=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,de=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ce=o.label`
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
`,he=o.input`
  display: none;
`,pe=o.div`
  flex: 1;
  
  @media (min-width: ${n.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center; 
  }
`,v=o.h2`
  color: ${({theme:e})=>e.greenMain};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`,G=o.div`
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
`,s=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,a=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,x=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:d,name:l})=>d&&l==="username"?e.red:e.borderColor};
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


`,xe=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,ue=o.button`
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
`,me=o(H)`
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
`,I=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ge=o.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media (min-width: ${n.desktop}) {
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }
`,be=o.div`
  flex: 1;
  
  @media (min-width: ${n.desktop}) {
    margin-top: 3.1rem;
  }
`,fe=o.div`
  flex: 1;
`;o(v)`
  margin-bottom: 1rem;
`;const S=o.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,$=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: ${n.desktop}) {
    flex-direction: row;
    gap: 20px;
    
    & > ${s} {
      flex: 1;
    }
  }
`;o.div`
  position: relative;
`;const we=o.select`
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
`;o(j)`
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
  
  ${we}:focus + & {
    transform: translateY(-50%) rotate(180deg);
  }
`;const $e=o(v)`
  margin-bottom: 1rem;
  padding-top: 10px;

  @media (min-width: ${n.desktop}) {
    padding-top: 0;
  }
`,Ce=()=>{const{setTitle:e}=q();r.useState(!1);const[d,l]=r.useState(""),[u,h]=r.useState(""),[m,p]=r.useState(""),[g,w]=r.useState(""),[c,f]=r.useState(""),[b,F]=r.useState(""),[O,z]=r.useState(""),[M,P]=r.useState(""),[E,N]=r.useState(""),[D,L]=r.useState(""),[R,W]=r.useState(""),[T,A]=r.useState("");return r.useEffect(()=>{e("Створення нового спортсмена")},[e]),t.jsx(t.Fragment,{children:t.jsx(re,{children:t.jsxs(ie,{children:[t.jsxs(ne,{children:[t.jsx(se,{children:t.jsxs(le,{children:[t.jsx(ae,{children:t.jsx(de,{src:Y,alt:"Фото спортсмена"})}),t.jsx(ce,{htmlFor:"photo-upload",children:t.jsx(me,{})}),t.jsx(he,{id:"photo-upload",type:"file",loading:"lazy",accept:"image/jpeg,image/jpg,image/png,image/webp"})]})}),t.jsxs(pe,{children:[t.jsx(v,{children:"Особиста інформація"}),t.jsxs(G,{children:[t.jsxs(s,{children:[t.jsx(a,{htmlFor:"firstName",children:"Ім'я"}),t.jsx(x,{id:"firstName",type:"text",placeholder:"Введіть ім'я",value:d,onChange:i=>l(i.target.value)})]}),t.jsxs(s,{children:[t.jsx(a,{htmlFor:"lastName",children:"Прізвище"}),t.jsx(x,{id:"lastName",type:"text",placeholder:"Введіть прізвище",value:u,onChange:i=>h(i.target.value)})]}),t.jsxs(s,{children:[t.jsx(a,{htmlFor:"patronymic",children:"По батькові"}),t.jsx(x,{id:"patronymic",type:"text",placeholder:"Введіть по батькові",value:m,onChange:i=>p(i.target.value)})]})]})]})]}),t.jsxs(ge,{children:[t.jsx(be,{children:t.jsxs(S,{children:[t.jsx($,{children:t.jsxs(s,{children:[t.jsx(a,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(I,{children:t.jsx(C,{selectedDate:g,onDateChange:w})})]})}),t.jsx($,{children:t.jsxs(s,{children:[t.jsx(a,{htmlFor:"address",children:"Адреса"}),t.jsx(x,{id:"address",type:"text",value:c,onChange:i=>f(i.target.value),placeholder:"Введіть адресу"})]})}),t.jsx($,{children:t.jsx(oe,{label:"Виберіть стать",value:b,onChange:F})})]})}),t.jsxs(fe,{children:[t.jsx($e,{children:"Контакти"}),t.jsxs(S,{children:[t.jsx($,{children:t.jsxs(s,{children:[t.jsx(a,{htmlFor:"phone",children:"Телефон"}),t.jsx(x,{id:"phone",type:"tel",value:O,onChange:i=>z(i.target.value),placeholder:"Введіть номер телефону"})]})}),t.jsx($,{children:t.jsxs(s,{children:[t.jsx(a,{htmlFor:"email",children:"Email"}),t.jsx(x,{id:"email",type:"email",value:M,onChange:i=>P(i.target.value),placeholder:"Введіть email"})]})}),t.jsx($,{children:t.jsxs(s,{children:[t.jsx(a,{htmlFor:"socialMedia",children:"Соцмережі"}),t.jsx(x,{id:"socialMedia",type:"text",value:E,onChange:i=>N(i.target.value),placeholder:"Введіть посилання на соцмережі"})]})})]})]})]}),t.jsx(y,{title:"Фізачні дані",children:t.jsxs(G,{hasphysique:!0,children:[t.jsxs(s,{children:[t.jsx(a,{htmlFor:"height",children:"Зріст у м."}),t.jsx(x,{id:"height",type:"number",min:"0",max:"4",placeholder:"Введіть зріст у м.",step:"0.1",value:D,onChange:i=>L(i.target.value)})]}),t.jsxs(s,{children:[t.jsx(a,{htmlFor:"weight",children:"Вага у кг."}),t.jsx(x,{id:"weight",min:"0",max:"400",step:"0.1",placeholder:"Введіть вагу у кг.",type:"number",value:R,onChange:i=>W(i.target.value)})]}),t.jsxs(s,{children:[t.jsx(a,{htmlFor:"dateOfMeasurement",children:"Дата вимірювання"}),t.jsx(I,{children:t.jsx(C,{selectedDate:T,onDateChange:A})})]})]})}),t.jsx(y,{title:"Фізачні дані",children:"Будь-який контент"}),t.jsx(xe,{children:t.jsx(ue,{type:"submit",children:"Створити"})})]})})})};export{Ce as default};
