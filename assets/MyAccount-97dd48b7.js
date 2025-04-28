import{u as _,a as V,r as i,N as K,d as o,j as t,b as X,c as Z,e as q,p as O,f as J,y as G}from"./index-5a4bf341.js";import{S as Q}from"./CameraIcon-b18de945.js";import{C as ee}from"./CustomDatePicker-907014e4.js";function te(e){const n=_(),p=V(),{navigator:l}=i.useContext(K),[g,d]=i.useState(!1),[u,w]=i.useState(null),[x,C]=i.useState(!1),h=i.useCallback(m=>{const $="/coaching-draft";let c=m;return c.startsWith($)&&(c=c.substring($.length)),c=c.replace(/\/+/g,"/"),c=c.replace(/\/$/,""),c},[]),v=i.useCallback((m,$)=>{const c=h(m),f=h($);return c===f},[h]),y=i.useCallback(()=>{d(!1),w(null),C(!1)},[]),E=i.useCallback(()=>{if(u){C(!0),d(!1);let m;typeof u=="string"?m=h(u):m=h(u.pathname)+(u.search||""),setTimeout(()=>{n(m),w(null),C(!1)},0)}},[u,n,h]);return i.useEffect(()=>{if(!e)return;let m=()=>{};m=(()=>{const f=l.push,P=l.replace,F=l.go;return l.push=(a,...k)=>{if(x)return f.apply(l,[a,...k]);const L=typeof a=="string"?a:a.pathname;if(v(p.pathname,L))return f.apply(l,[a,...k]);const I=typeof a=="string"?{pathname:h(a)}:{...a,pathname:h(a.pathname)};w(I),d(!0)},l.replace=(a,...k)=>{if(x)return P.apply(l,[a,...k]);const L=typeof a=="string"?a:a.pathname;if(v(p.pathname,L))return P.apply(l,[a,...k]);const I=typeof a=="string"?{pathname:h(a)}:{...a,pathname:h(a.pathname)};w(I),d(!0)},l.go=a=>{if(x)return F.apply(l,[a]);w(p),d(!0)},()=>{l.push=f,l.replace=P,l.go=F}})();const c=f=>{if(e)return f.preventDefault(),f.returnValue="",""};return window.addEventListener("beforeunload",c),()=>{m(),window.removeEventListener("beforeunload",c)}},[e,l,p,x,h,v]),[g,E,y]}const oe=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,ne=o.div`
  background: ${({theme:e})=>e.ContainerBGColor};  // Використовуємо тему
  padding: 24px;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
`,re=o.div`
  margin-bottom: 16px;
`,ae=o.h2`
  margin: 0;
  font-size: 20px;
  color: ${({theme:e})=>e.textBlack};  // Використовуємо тему
  margin-bottom: 8px;
`,ie=o.p`
  margin: 0;
  color: ${({theme:e})=>e.textGray};  // Використовуємо тему
  font-size: 14px;
  line-height: 1.5;
`,se=o.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
`,A=o.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  background-color: ${({theme:e})=>e.greenMain};  // Використовуємо тему
  color: ${({theme:e})=>e.white};  // Використовуємо тему

  &:hover {
    background-color: ${({theme:e})=>e.BgActiveLinkHover};  // Використовуємо тему
  }

  &:active {
    transform: translateY(0);
  }
`,le=o(A)`
  background-color: ${({theme:e})=>e.greenMain};  
  color: ${({theme:e})=>e.white}; 
  width: 100%;
  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};  
    color: ${({theme:e})=>e.white};
  }
`,ce=o(A)`
  background-color: ${({theme:e})=>e.red}; 
  color: ${({theme:e})=>e.white}; 
  width: 100%;
  &:hover {
    background-color: ${({theme:e})=>e.redDark};  
  }
`,de=({isOpen:e,onConfirm:n,onCancel:p})=>{if(i.useEffect(()=>{const d=u=>{u.key==="Escape"&&p()};return e&&(document.addEventListener("keydown",d),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",d),document.body.style.overflow="unset"}},[e,p]),!e)return null;const l=()=>{n()},g=d=>{d.stopPropagation(),p()};return t.jsx(oe,{onClick:g,children:t.jsxs(ne,{onClick:d=>d.stopPropagation(),children:[t.jsxs(re,{children:[t.jsx(ae,{children:"Незбережені зміни"}),t.jsx(ie,{children:"У вас є незбережені зміни. Якщо ви залишите цю сторінку, всі зміни будуть втрачені."})]}),t.jsxs(se,{children:[t.jsx(ce,{onClick:l,children:"Залишити сторінку"}),t.jsx(le,{onClick:g,children:"Продовжити роботу"})]})]})})},j={mobile:"320px",tablet:"768px",desktop:"1024px"},ue=o.form`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  /* overflow-y: auto; */

  @media (min-width: ${j.tablet}) {
    align-items: flex-start; 
    height: 100%;
  }
`,pe=o.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${j.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 32px;
  }
  @media (min-width: ${j.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 52px 82px 52px 82px;
  }
`;o.div`
  flex-grow: 1;
  overflow-y: auto; 
`;const he=o.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`,me=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${j.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,ge=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,fe=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,xe=o.label`
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

  @media (min-width: ${j.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,R=o.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  padding: 0;

  @media (min-width: ${j.tablet}) {
    flex-direction: row;
    gap: 2rem;

    > * {
      flex: 1;
      margin-bottom: 0;
    }
  }
`,z=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0;
  
`,M=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,U=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:n,name:p})=>n&&p==="username"?e.red:e.borderColor};
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
`,D=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`,be=o.input`
  display: none;
`,we=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,ve=o.button`
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
`,ye=o(Q)`
  fill:  ${e=>e.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${j.tablet}) {
   width: 18px;
   height: 18px;
  }
`,Ce=()=>{const{setTitle:e}=X(),{user:n,isLoading:p}=Z(r=>r.auth),l=q(),[g,d]=i.useState(n.username||""),[u,w]=i.useState(n.location||""),[x,C]=i.useState(n.dateOfBirth||""),[h,v]=i.useState(!1),[y,E]=i.useState(n.avatar||null),[m,$]=i.useState(!0),[c,f]=i.useState(!1),[P,F,a]=te(h),k=5*1024*1024,L=["image/jpeg","image/jpg","image/png","image/webp"];i.useEffect(()=>{if(n.avatar){const r=new Image;r.src=n.avatar,r.onload=()=>{E(n.avatar)},r.onerror=()=>{console.log("Зображення не знайдено."),E(null)}}},[n.avatar]);const I=r=>r?L.includes(r.type)?r.size>k?(G.error("Розмір файлу не повинен перевищувати 5MB",{position:"top-right",autoClose:3e3}),null):r:(G.error("Дозволені лише зображення (jpeg, jpg, png, webp)",{position:"top-right",autoClose:3e3}),null):null,T=r=>{if(r.key==="Enter"||r.key===" "){const s=document.getElementById("photo-upload");s&&s.click()}},W=r=>{const s=r.target.files[0];if(s){if(!I(s)){r.target.value="";return}const S=URL.createObjectURL(s);E(S),v(!0)}};i.useEffect(()=>{e("Мій акаунт")},[e]),i.useEffect(()=>{const r=g!==(n.username||"")||u!==(n.location||"")||x!==(n.dateOfBirth||"");v(r)},[g,u,x,n]),i.useEffect(()=>()=>{y&&y!==n.avatar&&URL.revokeObjectURL(y)},[y,n.avatar]);const N=r=>{const{name:s,value:b}=r.target;s==="username"&&(d(b),$(b.length>=3)),s==="location"&&w(b),s==="birthdate"&&C(b)},H=async r=>{r.preventDefault();const s=new FormData;g!==n.username&&s.append("username",g||""),u!==n.location&&s.append("location",u||""),x!==n.dateOfBirth&&s.append("dateOfBirth",x||null);const b=document.getElementById("photo-upload"),S=b.files[0];if(S){const B=I(S);if(!B)return;s.append("avatar",B)}if(s.has("username")||s.has("location")||s.has("dateOfBirth")||s.has("avatar"))try{const B=await l(J(s));if(!B.error)v(!1),G.success("Зміни успішно збережено!"),b&&(b.value="");else throw new Error(B.error)}catch{G.error("Помилка при збереженні даних",{position:"top-right",autoClose:3e3})}else G.info("Немає змін для збереження.",{position:"top-right",autoClose:3e3})},Y=r=>{r.target.src=O};return t.jsxs(t.Fragment,{children:[t.jsx(de,{isOpen:P,onConfirm:F,onCancel:a}),t.jsx(ue,{onSubmit:H,children:t.jsxs(pe,{children:[t.jsx(he,{children:t.jsxs(me,{children:[t.jsx(ge,{children:t.jsx(fe,{src:y||O,alt:"Фото профілю",loading:"lazy",onError:Y})}),t.jsx(xe,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:T,children:t.jsx(ye,{})}),t.jsx(be,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:W})]})}),t.jsxs(R,{children:[t.jsx(z,{children:t.jsxs(D,{children:[t.jsx(M,{htmlFor:"username",children:"Ім'я користувача"}),t.jsx(U,{id:"username",name:"username",placeholder:"Введіть ім'я користувача",value:g,maxLength:25,minLength:3,onChange:N,onFocus:()=>f(!0),onBlur:()=>f(!1),$isEmpty:!c&&g===""})]})}),t.jsx(z,{children:t.jsxs(D,{children:[t.jsx(M,{htmlFor:"email",children:"Електронна пошта"}),t.jsx(U,{id:"email",type:"email",value:n.email||"email",disabled:!0})]})})]}),t.jsxs(R,{children:[t.jsx(z,{children:t.jsxs(D,{children:[t.jsx(M,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(ee,{selectedDate:x,onDateChange:C})]})}),t.jsx(z,{children:t.jsxs(D,{children:[t.jsx(M,{htmlFor:"location",children:"Локація"}),t.jsx(U,{id:"location",name:"location",placeholder:"Введіть вашу локацію",value:u,maxLength:50,onChange:N})]})})]}),t.jsx(we,{children:t.jsx(ve,{type:"submit",disabled:p||!m,children:p?"Збереження...":"Зберегти зміни"})})]})})]})};export{Ce as default};
