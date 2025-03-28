import{u as _,a as V,r as i,N as K,d as o,j as t,b as X,c as Z,e as q,L as J,p as O,f as Q,y as G}from"./index-f271f074.js";import{S as ee,C as te}from"./CustomDatePicker-84e94f5d.js";function oe(e){const n=_(),p=V(),{navigator:l}=i.useContext(K),[g,d]=i.useState(!1),[u,w]=i.useState(null),[x,C]=i.useState(!1),h=i.useCallback(m=>{const $="/coaching-draft";let c=m;return c.startsWith($)&&(c=c.substring($.length)),c=c.replace(/\/+/g,"/"),c=c.replace(/\/$/,""),c},[]),v=i.useCallback((m,$)=>{const c=h(m),f=h($);return c===f},[h]),y=i.useCallback(()=>{d(!1),w(null),C(!1)},[]),E=i.useCallback(()=>{if(u){C(!0),d(!1);let m;typeof u=="string"?m=h(u):m=h(u.pathname)+(u.search||""),setTimeout(()=>{n(m),w(null),C(!1)},0)}},[u,n,h]);return i.useEffect(()=>{if(!e)return;let m=()=>{};m=(()=>{const f=l.push,L=l.replace,F=l.go;return l.push=(r,...k)=>{if(x)return f.apply(l,[r,...k]);const P=typeof r=="string"?r:r.pathname;if(v(p.pathname,P))return f.apply(l,[r,...k]);const I=typeof r=="string"?{pathname:h(r)}:{...r,pathname:h(r.pathname)};w(I),d(!0)},l.replace=(r,...k)=>{if(x)return L.apply(l,[r,...k]);const P=typeof r=="string"?r:r.pathname;if(v(p.pathname,P))return L.apply(l,[r,...k]);const I=typeof r=="string"?{pathname:h(r)}:{...r,pathname:h(r.pathname)};w(I),d(!0)},l.go=r=>{if(x)return F.apply(l,[r]);w(p),d(!0)},()=>{l.push=f,l.replace=L,l.go=F}})();const c=f=>{if(e)return f.preventDefault(),f.returnValue="",""};return window.addEventListener("beforeunload",c),()=>{m(),window.removeEventListener("beforeunload",c)}},[e,l,p,x,h,v]),[g,E,y]}const ne=o.div`
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
`,ae=o.div`
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
`,ie=o.h2`
  margin: 0;
  font-size: 20px;
  color: ${({theme:e})=>e.textBlack};  // Використовуємо тему
  margin-bottom: 8px;
`,se=o.p`
  margin: 0;
  color: ${({theme:e})=>e.textGray};  // Використовуємо тему
  font-size: 14px;
  line-height: 1.5;
`,le=o.div`
  display: flex;
  justify-content: flex-end;
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
`,ce=o(A)`
  background-color: ${({theme:e})=>e.gray};  
  color: ${({theme:e})=>e.white}; 

  &:hover {
    background-color: ${({theme:e})=>e.black};  
    color: ${({theme:e})=>e.white};
  }
`,de=o(A)`
  background-color: ${({theme:e})=>e.red}; 
  color: ${({theme:e})=>e.white}; 

  &:hover {
    background-color: ${({theme:e})=>e.redDark};  
  }
`,ue=({isOpen:e,onConfirm:n,onCancel:p})=>{if(i.useEffect(()=>{const d=u=>{u.key==="Escape"&&p()};return e&&(document.addEventListener("keydown",d),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",d),document.body.style.overflow="unset"}},[e,p]),!e)return null;const l=()=>{n()},g=d=>{d.stopPropagation(),p()};return t.jsx(ne,{onClick:g,children:t.jsxs(ae,{onClick:d=>d.stopPropagation(),children:[t.jsxs(re,{children:[t.jsx(ie,{children:"Незбережені зміни"}),t.jsx(se,{children:"У вас є незбережені зміни. Якщо ви залишите цю сторінку, всі зміни будуть втрачені."})]}),t.jsxs(le,{children:[t.jsx(ce,{onClick:g,children:"Залишитись"}),t.jsx(de,{onClick:l,children:"Залишити сторінку"})]})]})})},j={mobile:"320px",tablet:"768px",desktop:"1024px"},pe=o.form`
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
`,he=o.div`
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
`;const me=o.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`,ge=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${j.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,fe=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,xe=o.img`
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
`,we=o.input`
  display: none;
`,ve=o.div`
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
`,$e=o(ee)`
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
`,Ce=()=>{const{setTitle:e}=X(),{user:n,isLoading:p}=Z(a=>a.auth),l=q(),[g,d]=i.useState(n.username||""),[u,w]=i.useState(n.location||""),[x,C]=i.useState(n.dateOfBirth||""),[h,v]=i.useState(!1),[y,E]=i.useState(n.avatar||null),[m,$]=i.useState(!0),[c,f]=i.useState(!1),[L,F,r]=oe(h),k=5*1024*1024,P=["image/jpeg","image/jpg","image/png","image/webp"];i.useEffect(()=>{if(n.avatar){const a=new Image;a.src=n.avatar,a.onload=()=>{E(n.avatar)},a.onerror=()=>{console.log("Зображення не знайдено."),E(null)}}},[n.avatar]);const I=a=>a?P.includes(a.type)?a.size>k?(G.error("Розмір файлу не повинен перевищувати 5MB",{position:"top-right",autoClose:3e3}),null):a:(G.error("Дозволені лише зображення (jpeg, jpg, png, webp)",{position:"top-right",autoClose:3e3}),null):null,T=a=>{if(a.key==="Enter"||a.key===" "){const s=document.getElementById("photo-upload");s&&s.click()}},W=a=>{const s=a.target.files[0];if(s){if(!I(s)){a.target.value="";return}const S=URL.createObjectURL(s);E(S),v(!0)}};i.useEffect(()=>{e("Мій акаунт")},[e]),i.useEffect(()=>{const a=g!==(n.username||"")||u!==(n.location||"")||x!==(n.dateOfBirth||"");v(a)},[g,u,x,n]),i.useEffect(()=>()=>{y&&y!==n.avatar&&URL.revokeObjectURL(y)},[y,n.avatar]);const N=a=>{const{name:s,value:b}=a.target;s==="username"&&(d(b),$(b.length>=3)),s==="location"&&w(b),s==="birthdate"&&C(b)},H=async a=>{a.preventDefault();const s=new FormData;g!==n.username&&s.append("username",g||""),u!==n.location&&s.append("location",u||""),x!==n.dateOfBirth&&s.append("dateOfBirth",x||null);const b=document.getElementById("photo-upload"),S=b.files[0];if(S){const B=I(S);if(!B)return;s.append("avatar",B)}if(s.has("username")||s.has("location")||s.has("dateOfBirth")||s.has("avatar"))try{const B=await l(Q(s));if(!B.error)v(!1),G.success("Зміни успішно збережено!"),b&&(b.value="");else throw new Error(B.error)}catch{G.error("Помилка при збереженні даних",{position:"top-right",autoClose:3e3})}else G.info("Немає змін для збереження.",{position:"top-right",autoClose:3e3})},Y=a=>{a.target.src=O};return t.jsxs(t.Fragment,{children:[t.jsx(ue,{isOpen:L,onConfirm:F,onCancel:r}),t.jsx(J,{}),t.jsx(pe,{onSubmit:H,children:t.jsxs(he,{children:[t.jsx(me,{children:t.jsxs(ge,{children:[t.jsx(fe,{children:t.jsx(xe,{src:y||O,alt:"Фото профілю",loading:"lazy",onError:Y})}),t.jsx(be,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:T,children:t.jsx($e,{})}),t.jsx(we,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:W})]})}),t.jsxs(R,{children:[t.jsx(z,{children:t.jsxs(D,{children:[t.jsx(M,{htmlFor:"username",children:"Ім'я користувача"}),t.jsx(U,{id:"username",name:"username",placeholder:"Введіть ім'я користувача",value:g,maxLength:25,minLength:3,onChange:N,onFocus:()=>f(!0),onBlur:()=>f(!1),$isEmpty:!c&&g===""})]})}),t.jsx(z,{children:t.jsxs(D,{children:[t.jsx(M,{htmlFor:"email",children:"Електронна пошта"}),t.jsx(U,{id:"email",type:"email",value:n.email||"email",disabled:!0})]})})]}),t.jsxs(R,{children:[t.jsx(z,{children:t.jsxs(D,{children:[t.jsx(M,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(te,{selectedDate:x,onDateChange:C})]})}),t.jsx(z,{children:t.jsxs(D,{children:[t.jsx(M,{htmlFor:"location",children:"Локація"}),t.jsx(U,{id:"location",name:"location",placeholder:"Введіть вашу локацію",value:u,maxLength:50,onChange:N})]})})]}),t.jsx(ve,{children:t.jsx(ye,{type:"submit",disabled:p||!m,children:p?"Збереження...":"Зберегти зміни"})})]})})]})};export{Ce as default};
