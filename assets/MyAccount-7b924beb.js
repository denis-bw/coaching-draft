import{d as n,u as K,a as T,b as V,r as a,j as t,p as B,c as X,y as m}from"./index-8def2ee6.js";import{S as Y,u as Z,N as q}from"./CameraIcon-7144a44a.js";import{C as J}from"./CustomDatePicker-3b5d36a3.js";const l={mobile:"320px",tablet:"768px",desktop:"1024px"},Q=n.form`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  /* overflow-y: auto; */

  @media (min-width: ${l.tablet}) {
    align-items: flex-start; 
    height: 100%;
  }
`,ee=n.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${l.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 32px;
  }
  @media (min-width: ${l.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 52px 82px 52px 82px;
  }
`;n.div`
  flex-grow: 1;
  overflow-y: auto; 
`;const te=n.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`,oe=n.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${l.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,ie=n.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,re=n.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ne=n.label`
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

  @media (min-width: ${l.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,F=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  padding: 0;

  @media (min-width: ${l.tablet}) {
    flex-direction: row;
    gap: 2rem;

    > * {
      flex: 1;
      margin-bottom: 0;
    }
  }
`,f=n.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0;
  
`,b=n.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,$=n.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:i,name:g})=>i&&g==="username"?e.red:e.borderColor};
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
`,w=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`,ae=n.input`
  display: none;
`,se=n.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,le=n.button`
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
`,de=n(Y)`
  fill:  ${e=>e.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${l.tablet}) {
   width: 18px;
   height: 18px;
  }
`,ue=()=>{const{setTitle:e}=K(),{user:i,isLoading:g}=T(o=>o.auth),E=V(),[d,G]=a.useState(i.username||""),[h,L]=a.useState(i.location||""),[p,y]=a.useState(i.dateOfBirth||""),[P,v]=a.useState(!1),[u,j]=a.useState(i.avatar||null),[S,U]=a.useState(!0),[D,k]=a.useState(!1),[O,M,R]=Z(P),z=5*1024*1024,A=["image/jpeg","image/jpg","image/png","image/webp"];a.useEffect(()=>{if(i.avatar){const o=new Image;o.src=i.avatar,o.onload=()=>{j(i.avatar)},o.onerror=()=>{console.log("Зображення не знайдено."),j(null)}}},[i.avatar]);const C=o=>o?A.includes(o.type)?o.size>z?(m.error("Розмір файлу не повинен перевищувати 5MB",{position:"top-right",autoClose:3e3}),null):o:(m.error("Дозволені лише зображення (jpeg, jpg, png, webp)",{position:"top-right",autoClose:3e3}),null):null,N=o=>{if(o.key==="Enter"||o.key===" "){const r=document.getElementById("photo-upload");r&&r.click()}},W=o=>{const r=o.target.files[0];if(r){if(!C(r)){o.target.value="";return}const x=URL.createObjectURL(r);j(x),v(!0)}};a.useEffect(()=>{e("Мій акаунт")},[e]),a.useEffect(()=>{const o=d!==(i.username||"")||h!==(i.location||"")||p!==(i.dateOfBirth||"");v(o)},[d,h,p,i]),a.useEffect(()=>()=>{u&&u!==i.avatar&&URL.revokeObjectURL(u)},[u,i.avatar]);const I=o=>{const{name:r,value:s}=o.target;r==="username"&&(G(s),U(s.length>=3)),r==="location"&&L(s),r==="birthdate"&&y(s)},_=async o=>{o.preventDefault();const r=new FormData;d!==i.username&&r.append("username",d||""),h!==i.location&&r.append("location",h||""),p!==i.dateOfBirth&&r.append("dateOfBirth",p||null);const s=document.getElementById("photo-upload"),x=s.files[0];if(x){const c=C(x);if(!c)return;r.append("avatar",c)}if(r.has("username")||r.has("location")||r.has("dateOfBirth")||r.has("avatar"))try{const c=await E(X(r));if(!c.error)v(!1),m.success("Зміни успішно збережено!"),s&&(s.value="");else throw new Error(c.error)}catch{m.error("Помилка при збереженні даних",{position:"top-right",autoClose:3e3})}else m.info("Немає змін для збереження.",{position:"top-right",autoClose:3e3})},H=o=>{o.target.src=B};return t.jsxs(t.Fragment,{children:[t.jsx(q,{isOpen:O,onConfirm:M,onCancel:R}),t.jsx(Q,{onSubmit:_,children:t.jsxs(ee,{children:[t.jsx(te,{children:t.jsxs(oe,{children:[t.jsx(ie,{children:t.jsx(re,{src:u||B,alt:"Фото профілю",loading:"lazy",onError:H})}),t.jsx(ne,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:N,children:t.jsx(de,{})}),t.jsx(ae,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:W})]})}),t.jsxs(F,{children:[t.jsx(f,{children:t.jsxs(w,{children:[t.jsx(b,{htmlFor:"username",children:"Ім'я користувача"}),t.jsx($,{id:"username",name:"username",placeholder:"Введіть ім'я користувача",value:d,maxLength:25,minLength:3,onChange:I,onFocus:()=>k(!0),onBlur:()=>k(!1),$isEmpty:!D&&d===""})]})}),t.jsx(f,{children:t.jsxs(w,{children:[t.jsx(b,{htmlFor:"email",children:"Електронна пошта"}),t.jsx($,{id:"email",type:"email",value:i.email||"email",disabled:!0})]})})]}),t.jsxs(F,{children:[t.jsx(f,{children:t.jsxs(w,{children:[t.jsx(b,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(J,{selectedDate:p,onDateChange:y})]})}),t.jsx(f,{children:t.jsxs(w,{children:[t.jsx(b,{htmlFor:"location",children:"Локація"}),t.jsx($,{id:"location",name:"location",placeholder:"Введіть вашу локацію",value:h,maxLength:50,onChange:I})]})})]}),t.jsx(se,{children:t.jsx(le,{type:"submit",disabled:g||!S,children:g?"Збереження...":"Зберегти зміни"})})]})})]})};export{ue as default};
