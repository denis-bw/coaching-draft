import{d as o,j as t,b as s,r as a}from"./index-0bd5a3cd.js";import{S as c,C as h}from"./CustomDatePicker-a58fd0ad.js";import{p}from"./PlaceholderProfile-3c1b0d36.js";const i={mobile:"320px",tablet:"768px",desktop:"1024px"},m=o.form`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  overflow-y: auto;

  @media (min-width: ${i.tablet}) {
    align-items: flex-start; 
    height: 100%;
  }
`,x=o.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${i.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 32px;
  }
  @media (min-width: ${i.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 52px 82px 52px 82px;
  }
`;o.div`
  flex-grow: 1;
  overflow-y: auto; 
`;const u=o.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`,b=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${i.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,g=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,w=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,f=o.label`
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

  @media (min-width: ${i.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,$=o.input`
  display: none;
`,j=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,y=o.button`
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
`,k=o(c)`
  fill:  ${e=>e.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${i.tablet}) {
   width: 18px;
   height: 18px;
  }
`,v=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,C=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`,I=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,G=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:r,name:n})=>r&&n==="username"?e.red:e.borderColor};
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
`,B=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`,P=({id:e,name:r,placeholder:n="-",labelText:l="-",maxLength:d=0})=>t.jsxs(B,{children:[t.jsx(I,{htmlFor:e,children:l}),t.jsx(G,{id:e,name:r,placeholder:n,maxLength:d})]}),T=()=>{const{setTitle:e}=s();a.useState(!1),a.useState("");const[r,n]=a.useState("");return a.useEffect(()=>{e("Створення нового спортсмена")},[e]),t.jsx(t.Fragment,{children:t.jsx(m,{children:t.jsxs(x,{children:[t.jsx(u,{children:t.jsxs(b,{children:[t.jsx(g,{children:t.jsx(w,{src:p,alt:"Фото спортсмена"})}),t.jsx(f,{htmlFor:"photo-upload",children:t.jsx(k,{})}),t.jsx($,{id:"photo-upload",type:"file",loading:"lazy",accept:"image/jpeg,image/jpg,image/png,image/webp"})]})}),t.jsx(P,{id:"sportType",name:"sportType",placeholder:"Введіть вид спорту",labelText:"Вид спорту",maxLength:30}),t.jsx(v,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(C,{children:t.jsx(h,{selectedDate:r,onDateChange:n})}),t.jsx(j,{children:t.jsx(y,{type:"submit",children:"Створити"})})]})})})};export{T as default};
