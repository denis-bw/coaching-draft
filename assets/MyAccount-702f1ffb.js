import{d as r,u as _,a as H,b as K,r as a,j as t,p as T,i as V,c as X,y as m}from"./index-134eba29.js";import{S as Y,u as Z,N as q}from"./CameraIcon-8ceefbdc.js";import{C as J}from"./CustomDatePicker-7e2b61ce.js";const l={mobile:"320px",tablet:"768px",desktop:"1024px"},Q=r.form`
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
`,ee=r.div`
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
`;r.div`
  flex-grow: 1;
  overflow-y: auto; 
`;const te=r.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`,oe=r.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${l.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,ie=r.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,re=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ne=r.label`
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
`,I=r.div`
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
`,f=r.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0;
  
`,b=r.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,v=r.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:n,name:g})=>n&&g==="username"?e.red:e.borderColor};
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
`,w=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`,ae=r.input`
  display: none;
`,se=r.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,le=r.button`
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
`,de=r(Y)`
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
`,ue=()=>{const{setTitle:e}=_(),{user:n,isLoading:g}=H(o=>o.auth),F=K(),[d,B]=a.useState(n.username||""),[h,G]=a.useState(n.location||""),[p,$]=a.useState(n.dateOfBirth||""),[E,j]=a.useState(!1),[u,L]=a.useState(n.avatar||null),[P,S]=a.useState(!0),[U,y]=a.useState(!1),[D,O,M]=Z(E),N=5*1024*1024,R=["image/jpeg","image/jpg","image/png","image/webp"],k=o=>o?R.includes(o.type)?o.size>N?(m.error("Розмір файлу не повинен перевищувати 5MB",{position:"top-right",autoClose:3e3}),null):o:(m.error("Дозволені лише зображення (jpeg, jpg, png, webp)",{position:"top-right",autoClose:3e3}),null):null,z=o=>{if(o.key==="Enter"||o.key===" "){const i=document.getElementById("photo-upload");i&&i.click()}},A=o=>{const i=o.target.files[0];if(i){if(!k(i)){o.target.value="";return}const x=URL.createObjectURL(i);L(x),j(!0)}};a.useEffect(()=>{e("Мій акаунт")},[e]),a.useEffect(()=>{const o=d!==(n.username||"")||h!==(n.location||"")||p!==(n.dateOfBirth||"");j(o)},[d,h,p,n]),a.useEffect(()=>()=>{u&&u!==n.avatar&&URL.revokeObjectURL(u)},[u,n.avatar]);const C=o=>{const{name:i,value:s}=o.target;i==="username"&&(B(s),S(s.length>=3)),i==="location"&&G(s),i==="birthdate"&&$(s)},W=async o=>{o.preventDefault();const i=new FormData;d!==n.username&&i.append("username",d||""),h!==n.location&&i.append("location",h||""),p!==n.dateOfBirth&&i.append("dateOfBirth",p||null);const s=document.getElementById("photo-upload"),x=s.files[0];if(x){const c=k(x);if(!c)return;i.append("avatar",c)}if(i.has("username")||i.has("location")||i.has("dateOfBirth")||i.has("avatar"))try{const c=await F(X(i));if(!c.error)j(!1),m.success("Зміни успішно збережено!"),s&&(s.value="");else throw new Error(c.error)}catch{m.error("Помилка при збереженні даних",{position:"top-right",autoClose:3e3})}else m.info("Немає змін для збереження.",{position:"top-right",autoClose:3e3})};return t.jsxs(t.Fragment,{children:[t.jsx(q,{isOpen:D,onConfirm:O,onCancel:M}),t.jsx(Q,{onSubmit:W,children:t.jsxs(ee,{children:[t.jsx(te,{children:t.jsxs(oe,{children:[t.jsx(ie,{children:t.jsx(re,{src:u||T,alt:"Фото профілю",loading:"lazy",onError:o=>{o.target.onerror=null,o.target.src=V}})}),t.jsx(ne,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:z,children:t.jsx(de,{})}),t.jsx(ae,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:A})]})}),t.jsxs(I,{children:[t.jsx(f,{children:t.jsxs(w,{children:[t.jsx(b,{htmlFor:"username",children:"Ім'я користувача"}),t.jsx(v,{id:"username",name:"username",placeholder:"Введіть ім'я користувача",value:d,maxLength:25,minLength:3,onChange:C,onFocus:()=>y(!0),onBlur:()=>y(!1),$isEmpty:!U&&d===""})]})}),t.jsx(f,{children:t.jsxs(w,{children:[t.jsx(b,{htmlFor:"email",children:"Електронна пошта"}),t.jsx(v,{id:"email",type:"email",value:n.email||"email",disabled:!0})]})})]}),t.jsxs(I,{children:[t.jsx(f,{children:t.jsxs(w,{children:[t.jsx(b,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(J,{selectedDate:p,onDateChange:$})]})}),t.jsx(f,{children:t.jsxs(w,{children:[t.jsx(b,{htmlFor:"location",children:"Локація"}),t.jsx(v,{id:"location",name:"location",placeholder:"Введіть вашу локацію",value:h,maxLength:50,onChange:C})]})})]}),t.jsx(se,{children:t.jsx(le,{type:"submit",disabled:g||!P,children:g?"Збереження...":"Зберегти зміни"})})]})})]})};export{ue as default};
