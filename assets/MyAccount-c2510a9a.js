import{d as r,u as Q,a as ee,b as te,r as s,j as t,p as oe,i as re,c as L,y as m}from"./index-13d5f35a.js";import{S as ne,a as ae,u as ie,N as se}from"./minus-c02d2a89.js";import{S as le}from"./DeleteIcon-771554d4.js";import{C as de}from"./CustomDatePicker-e37e46ec.js";const l={mobile:"320px",tablet:"768px",desktop:"1024px"},ce=r(le)`
  stroke: ${({theme:e})=>e.white};
  fill: none; 
  width: 12px;
  height: 12px;

  @media (min-width: ${l.tablet}) {
    width: 14px;
    height: 14px;
  }
`,he=r.form`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;

  @media (min-width: ${l.tablet}) {
    align-items: flex-start; 
    height: 100%;
  }
`,ue=r.div`
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
`,pe=r.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`,me=r.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${l.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,ge=r.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.gray};
`,xe=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,fe=r.label`
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

  @media (min-width: ${l.desktop}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,be=r.div`
  position: absolute;
  top: -0.3rem;
  right: -0.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  @media (min-width: ${l.tablet}) {
    top: -0.4rem;
    right: -0.4rem;
    gap: 0.4rem;
  }
`,we=r.button`
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.red};
  color: ${({theme:e})=>e.white};
  border-radius: 50%;
  border: 2px solid ${({theme:e})=>e.white};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out,
            transform 0.2s ease-in-out;

  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({theme:e})=>e.redDark};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.red}, 0 2px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  &:focus-visible {
    background-color: ${({theme:e})=>e.redDark};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.red}, 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: ${l.tablet}) {
    width: 2rem;
    height: 2rem;
  }
`,ke=r.button`
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.mode==="dark"?"#e0e0e0":"#343434"};
  border: 2px solid
    ${({theme:e})=>e.mode==="dark"?"#e0e0e0":"#343434"};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.2s ease;
  will-change: transform;

&:hover {
  background-color: ${({theme:e})=>e.mode==="dark"?"#ffffff":"#555555"};
  box-shadow: ${({theme:e})=>e.mode==="dark"?"0 0 0 4px rgba(255, 255, 255, 0.6), 0 2px 8px rgba(0, 0, 0, 0.3)":"0 0 0 4px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.35)"};
  transform: scale(1.05);
}



  @media (min-width: ${l.tablet}) {
    width: 2rem;
    height: 2rem;
  }
`,$e=r(ne)`
  fill: ${({theme:e})=>e.mode==="dark"?"#343434":"#ffffff"};
  width: 12px;
  height: 12px;
  transform: rotate(180deg);

  @media (min-width: ${l.tablet}) {
    width: 14px;
    height: 14px;
  }
`,ye=r(ae)`
  fill: ${({theme:e})=>e.white};
  width: 14px;
  height: 14px;

  @media (min-width: ${l.tablet}) {
    width: 18px;
    height: 18px;
  }
`,O=r.div`
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
`,y=r.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0;
`,j=r.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textBlack};
  font-size: 0.875rem;
  font-weight: 500;
`,B=r.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:a,name:h})=>a&&h==="username"?e.red:e.gray};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  transition: background-color 0.2s ease-in-out,
            transform 0.2s ease-in-out;


  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.lightGreen};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.lightGreen}33;
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
    box-shadow: 0 0 0 2px ${({theme:e})=>e.red}33;
  }
  
  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    cursor: not-allowed;
    color: ${({theme:e})=>e.textGray};
  }
`,v=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`,je=r.input`
  display: none;
`,ve=r.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,Ce=r.button`
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
  transition: background-color 0.2s ease-in-out,
            transform 0.2s ease-in-out;


  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.lightGreen}33;
  }

  &:focus {
    outline: none;
    background-color: ${({theme:e})=>e.darkGreen};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.lightGreen}33;
  }

  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    color: ${({theme:e})=>e.textGray};
    cursor: not-allowed;
  }
`,Be=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Ie=r.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  padding: 2rem;
  border-radius: 0.75rem;
  max-width: 420px;
  width: 90%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid ${({theme:e})=>e.gray};
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,De=r.h3`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({theme:e})=>e.textBlack};
  text-align: center;
  margin-top: 0;
`,Ee=r.p`
  margin-bottom: 2rem;
  color: ${({theme:e})=>e.textGray};
  line-height: 1.5;
  text-align: center;
  margin-top: 0;
`,Fe=r.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`,U=r.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out,
            transform 0.2s ease-in-out;

  font-size: 14px;
  min-width: 100px;

  &:focus {
    outline: 2px solid ${({theme:e})=>e.lightGreen};
    outline-offset: 2px;
  }
`,Ge=r(U)`
  border: 1px solid ${({theme:e})=>e.textBlack};
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};

  &:hover {
    background-color: ${({theme:e})=>e.black};
    border-color: ${({theme:e})=>e.black};
    color: ${({theme:e})=>e.white};
  }
`,Pe=r(U)`
  border: none;
  background-color: ${({theme:e})=>e.red};
  color: ${({theme:e})=>e.white};

  &:hover {
    background-color: ${({theme:e})=>e.redDark};
  }
`,Se=({isOpen:e,onConfirm:a,onCancel:h})=>{if(!e)return null;const f=c=>{c.key==="Escape"&&h(),c.key==="Enter"&&a()},d=c=>{c.target===c.currentTarget&&h()};return t.jsx(Be,{onClick:d,onKeyDown:f,tabIndex:-1,children:t.jsxs(Ie,{onClick:c=>c.stopPropagation(),children:[t.jsx(De,{children:"Видалити фото профілю?"}),t.jsx(Ee,{children:"Ви впевнені, що хочете видалити поточне фото профілю? Цю дію не можна буде скасувати."}),t.jsxs(Fe,{children:[t.jsx(Pe,{onClick:a,children:"Видалити"}),t.jsx(Ge,{onClick:h,children:"Скасувати"})]})]})})},ze=()=>{const{setTitle:e}=Q(),{user:a,isLoading:h}=ee(o=>o.auth),f=te(),[d,c]=s.useState(a.username||""),[g,z]=s.useState(a.location||""),[x,I]=s.useState(a.dateOfBirth||""),[R,b]=s.useState(!1),[u,C]=s.useState(a.avatar||null),[K,N]=s.useState(!0),[A,D]=s.useState(!1),[T,w]=s.useState(!1),[p,k]=s.useState(null),[W,_,Y]=ie(R),H=5*1024*1024,V=["image/jpeg","image/jpg","image/png","image/webp"],E=o=>o?V.includes(o.type)?o.size>H?(m.error("Розмір файлу не повинен перевищувати 5MB",{position:"top-right",autoClose:3e3}),null):o:(m.error("Дозволені лише зображення (jpeg, jpg, png, webp)",{position:"top-right",autoClose:3e3}),null):null,X=o=>{if(o.key==="Enter"||o.key===" "){const n=document.getElementById("photo-upload");n&&n.click()}},F=o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),p?G():w(!0))},Z=o=>{const n=o.target.files[0];if(n){if(!E(n)){o.target.value="";return}const $=URL.createObjectURL(n);C($),k(n),b(!0)}},G=()=>{u&&u!==a.avatar&&URL.revokeObjectURL(u),C(a.avatar||null),k(null);const o=document.getElementById("photo-upload");o&&(o.value="");const n=d!==(a.username||"")||g!==(a.location||"")||x!==(a.dateOfBirth||"");b(n)},q=async()=>{try{const o=new FormData;o.append("deleteAvatar","true");const n=await f(L(o));if(n.error)throw new Error(n.error);{C(null),k(null);const i=document.getElementById("photo-upload");i&&(i.value=""),m.success("Фото успішно видалено!"),w(!1)}}catch{m.error("Помилка при видаленні фото",{position:"top-right",autoClose:3e3})}};s.useEffect(()=>{e("Мій акаунт")},[e]),s.useEffect(()=>{const o=d!==(a.username||"")||g!==(a.location||"")||x!==(a.dateOfBirth||"")||p!==null;b(o)},[d,g,x,a,p]),s.useEffect(()=>()=>{u&&u!==a.avatar&&URL.revokeObjectURL(u)},[u,a.avatar]);const P=o=>{const{name:n,value:i}=o.target;n==="username"&&(c(i),N(i.length>=3)),n==="location"&&z(i),n==="birthdate"&&I(i)},J=async o=>{o.preventDefault();const n=new FormData;if(d!==a.username&&n.append("username",d||""),g!==a.location&&n.append("location",g||""),x!==a.dateOfBirth&&n.append("dateOfBirth",x||null),p){const i=E(p);if(!i)return;n.append("avatar",i)}if(n.has("username")||n.has("location")||n.has("dateOfBirth")||n.has("avatar"))try{const i=await f(L(n));if(i.error)throw new Error(i.error);{b(!1),k(null),m.success("Зміни успішно збережено!");const $=document.getElementById("photo-upload");$&&($.value="")}}catch{m.error("Помилка при збереженні даних",{position:"top-right",autoClose:3e3})}else m.info("Немає змін для збереження.",{position:"top-right",autoClose:3e3})},S=a.avatar&&!p,M=p!==null;return t.jsxs(t.Fragment,{children:[t.jsx(se,{isOpen:W,onConfirm:_,onCancel:Y}),t.jsx(Se,{isOpen:T,onConfirm:q,onCancel:()=>w(!1)}),t.jsx(he,{onSubmit:J,children:t.jsxs(ue,{children:[t.jsx(pe,{children:t.jsxs(me,{children:[t.jsx(ge,{children:t.jsx(xe,{src:u||oe,alt:"Фото профілю",loading:"lazy",onError:o=>{o.target.onerror=null,o.target.src=re}})}),t.jsx(fe,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:X,children:t.jsx(ye,{})}),(S||M)&&t.jsxs(be,{children:[S&&t.jsx(we,{type:"button",tabIndex:0,onKeyDown:F,onClick:()=>w(!0),title:"Видалити фото",children:t.jsx(ce,{})}),M&&t.jsx(ke,{type:"button",tabIndex:0,onKeyDown:F,onClick:G,title:"Скасувати завантаження",children:t.jsx($e,{})})]}),t.jsx(je,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:Z})]})}),t.jsxs(O,{children:[t.jsx(y,{children:t.jsxs(v,{children:[t.jsx(j,{htmlFor:"username",children:"Ім'я користувача"}),t.jsx(B,{id:"username",name:"username",placeholder:"Введіть ім'я користувача",value:d,maxLength:25,minLength:3,onChange:P,onFocus:()=>D(!0),onBlur:()=>D(!1),$isEmpty:!A&&d===""})]})}),t.jsx(y,{children:t.jsxs(v,{children:[t.jsx(j,{htmlFor:"email",children:"Електронна пошта"}),t.jsx(B,{id:"email",type:"email",value:a.email||"email",disabled:!0})]})})]}),t.jsxs(O,{children:[t.jsx(y,{children:t.jsxs(v,{children:[t.jsx(j,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(de,{selectedDate:x,onDateChange:I})]})}),t.jsx(y,{children:t.jsxs(v,{children:[t.jsx(j,{htmlFor:"location",children:"Локація"}),t.jsx(B,{id:"location",name:"location",placeholder:"Введіть вашу локацію",value:g,maxLength:50,onChange:P})]})})]}),t.jsx(ve,{children:t.jsx(Ce,{type:"submit",disabled:h||!K,children:h?"Збереження...":"Зберегти зміни"})})]})})]})};export{ze as default};
