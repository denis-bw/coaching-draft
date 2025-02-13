import{d as o,l as S,i as z,a as B,r as n,h as E,n as F,y as d,t as R,j as r,L as q,w as I}from"./index-7aef204e.js";import{H as M}from"./HeaderForUnlogged-04a0bae8.js";const T=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-top: 60px;
  background-color: ${({theme:e})=>e.mainBGColor};
  transition: all 0.2s ease-in-out;
  @media (max-width: 640px) {
    padding-top: 40px;
  }
`,D=o.div`
  width: 100%;
  max-width: 28rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,H=o.h1`
  font-size: 1.75rem;
  color: ${({theme:e})=>e.textBlack};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`,N=o.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,j=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,P=o.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.textBlack};
`,y=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e})=>e.textGray};
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
`,U=o.button`
  width: 100%;
  padding: 0.875rem;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 16px;

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,Y=o.div`
  color: ${({theme:e})=>e.red};
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,A=o.p`
  color: ${({theme:e})=>e.textGray};
  text-align: center;
  font-size: 0.875rem;
  margin-top: -1.5rem;
  margin-bottom: 2rem;
  line-height: 1.5;
`,J=o.div`
  padding: 0;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.textGray};
`,K=o.p`
  display: flex;
  align-items: center;
  
`,$=o.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 14px;
  color: ${({theme:e})=>e.iconColor};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,O=o(S)`
  color: ${({theme:e})=>e.greenMain};
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;
  
  &:hover {
    color: ${({theme:e})=>e.darkGreen};
    text-decoration: underline;
  }
`,W=()=>{const e=z(),k=B(),[l,v]=n.useState(!1),[m,C]=n.useState(!1),p=new URLSearchParams(k.search),u=p.get("email"),G=p.get("token"),[s,g]=n.useState(""),[h,x]=n.useState(""),{error:a,successMessage:i,isLoading:w}=E(t=>t.auth);n.useEffect(()=>{a&&e(F())},[e]),n.useEffect(()=>{i&&(d.success(i),e(R()))},[i,e]);const f=t=>{const{name:c,value:b}=t.target;c==="newPassword"?g(b):c==="confirmPassword"&&x(b)},L=async t=>{if(t.preventDefault(),s!==h){d.error("Паролі не співпадають");return}if(!u){d.error("Email не надано у запиті");return}try{await e(I({email:u,token:G,newPassword:s})).unwrap(),g(""),x("")}catch{console.error("Помилка при скиданні паролю:")}};return r.jsxs(r.Fragment,{children:[r.jsx(q,{}),r.jsx(M,{}),r.jsx(T,{children:r.jsxs(D,{children:[r.jsx(H,{children:"Створити новий пароль"}),r.jsx(A,{children:"Введіть новий пароль і підтвердьте його."}),r.jsxs(N,{onSubmit:L,children:[r.jsxs(j,{children:[r.jsx(P,{htmlFor:"newPassword",children:"Новий пароль"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx(y,{id:"newPassword",name:"newPassword",type:l?"text":"password",value:s,onChange:f,minLength:6,maxLength:25,placeholder:"Пароль",required:!0}),r.jsx($,{type:"button",onClick:()=>v(t=>!t),children:l?"Сховати":"Показати"})]})]}),r.jsxs(j,{children:[r.jsx(P,{htmlFor:"confirmPassword",children:"Підтвердити пароль"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx(y,{id:"confirmPassword",name:"confirmPassword",type:m?"text":"password",value:h,minLength:6,maxLength:25,onChange:f,placeholder:"Пароль",required:!0}),r.jsx($,{type:"button",onClick:()=>C(t=>!t),children:m?"Сховати":"Показати"})]}),r.jsx(J,{children:r.jsx(K,{children:"Мінімум 6 символів"})}),a&&r.jsxs(Y,{children:[" ",a]})]}),r.jsx(U,{type:"submit",disabled:w,children:w?"Завантаження...":"Створити пароль"}),r.jsx(O,{to:"/login",children:"Прейти до Login"})]})]})})]})};export{W as default};
