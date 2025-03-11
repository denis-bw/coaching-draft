import{d as o,b as x,r as s,j as r}from"./index-d4ffa551.js";import{S as u,D as m,C as b}from"./CustomDatePicker-ecaa8c86.js";import{p as g}from"./PlaceholderProfile-3c1b0d36.js";const t={mobile:"320px",tablet:"768px",desktop:"1024px"},$=o.form`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  overflow-y: auto;

  @media (min-width: ${t.tablet}) {
    align-items: flex-start; 
    height: 100%;
  }
`,w=o.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${t.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 32px;
  }
  @media (min-width: ${t.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 52px 82px 52px 82px;
  }
`;o.div`
  flex-grow: 1;
  overflow-y: auto; 
`;const f=o.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`,k=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${t.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,j=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,y=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,G=o.label`
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

  @media (min-width: ${t.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,p=o.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  padding: 0;

  @media (min-width: ${t.tablet}) {
    flex-direction: row;
    gap: 2rem;

    > * {
      flex: 1;
      margin-bottom: 0;
    }
  }
`,a=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0;
  
`,n=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,c=o.input`
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
`,d=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`,C=o.input`
  display: none;
`,v=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,_=o.button`
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
`,B=o(u)`
  fill:  ${e=>e.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${t.tablet}) {
   width: 18px;
   height: 18px;
  }
`;o(m)`
  display: block;
  width: 100%;
 max-width: 100%; 
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e})=>e.borderColor};
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
`;o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 8px 4px;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 12px;
`;o.select`
  padding: 6px 12px;
  width: 100px;
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

  option {
    background: ${({theme:e})=>e.ContainerBGColor};
    color: ${({theme:e})=>e.textBlack};
  }
`;o.div`
  .react-datepicker-wrapper{
    width: 100%;
  }
  .react-datepicker__month-container{
    border-radius: 14px;
  }
  .react-datepicker-popper{
    border-radius: 14px;
  }
  .react-datepicker {
    border-radius: 14px;
    border: 3px solid ${({theme:e})=>e.greenMain};
    background-color: ${({theme:e})=>e.ContainerBGColor};
  }

  .react-datepicker__header {
    background-color: ${({theme:e})=>e.ContainerBGColor};
    border-radius: 14px 14px 0 0 ;
    border-bottom: 1px solid ${({theme:e})=>e.greenMain};
    padding-top: 0;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select){
    border-radius: 14px 14px 0 0 ;
  }
  .react-datepicker__day-name{
    color: ${({theme:e})=>e.textBlack};
    font-size: 0.9rem;
  }

  .react-datepicker__day:not([aria-disabled=true]):hover, .react-datepicker__month-text:not([aria-disabled=true]):hover, .react-datepicker__quarter-text:not([aria-disabled=true]):hover, .react-datepicker__year-text:not([aria-disabled=true]):hover  {
    border-radius: 50%;
    background-color:  ${({theme:e})=>e.black};
    color: ${({theme:e})=>e.white};
  }
  .react-datepicker__day {
    color: ${({theme:e})=>e.textBlack};
    border-radius: 50%;
    &:hover {
      background-color: ${({theme:e})=>e.darkGreen};
      border-radius: 50%;
    }
  }

  .react-datepicker__day--selected {
    background-color: ${({theme:e})=>e.greenMain};
    color: ${({theme:e})=>e.white};
     border-radius: 50%;

    &:hover {
      background-color: ${({theme:e})=>e.darkGreen};
    }
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${({theme:e})=>e.lightGreen};
    color: ${({theme:e})=>e.textBlack};
  }

  .react-datepicker__day--outside-month {
    color: ${({theme:e})=>e.textGray};
  }

  .react-datepicker__triangle {
    display: none;
  }
`;const z=()=>{const{setTitle:e}=x(),[l,i]=s.useState(!1),[h,I]=s.useState("");return s.useEffect(()=>{e("Створення нового спортсмена")},[e]),r.jsx(r.Fragment,{children:r.jsx($,{children:r.jsxs(w,{children:[r.jsx(f,{children:r.jsxs(k,{children:[r.jsx(j,{children:r.jsx(y,{src:g,alt:"Фото спортсмена"})}),r.jsx(G,{htmlFor:"photo-upload",children:r.jsx(B,{})}),r.jsx(C,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp"})]})}),r.jsxs(p,{children:[r.jsx(a,{children:r.jsxs(d,{children:[r.jsx(n,{htmlFor:"fullName",children:"Ім'я спортсмена"}),r.jsx(c,{id:"fullName",name:"fullName",placeholder:"Введіть ім'я спортсмена",maxLength:25,minLength:3,onFocus:()=>i(!0),onBlur:()=>i(!1),$isEmpty:!l&&h===""})]})}),r.jsx(a,{children:r.jsxs(d,{children:[r.jsx(n,{htmlFor:"sportType",children:"Вид спорту"}),r.jsx(c,{id:"sportType",name:"sportType",placeholder:"Введіть вид спорту",maxLength:30})]})})]}),r.jsxs(p,{children:[r.jsx(a,{children:r.jsxs(d,{children:[r.jsx(n,{htmlFor:"birthdate",children:"Дата народження"}),r.jsx(b,{})]})}),r.jsx(a,{children:r.jsxs(d,{children:[r.jsx(n,{htmlFor:"location",children:"Локація"}),r.jsx(c,{id:"location",name:"location",placeholder:"Введіть локацію спортсмена",maxLength:50})]})})]}),r.jsx(v,{children:r.jsx(_,{type:"submit",children:"Створити"})})]})})})};export{z as default};
