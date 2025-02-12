import{d as o,l as S,i as z,a as B,r as n,h as F,n as E,y as f,s as R,j as r,L as q,v as I}from"./index-ae991d8e.js";import{H as M}from"./HeaderForUnlogged-dc5057a4.js";const T=o.div`
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
`,b=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,j=o.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.textBlack};
`,P=o.input`
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
  
`,y=o.button`
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
`,W=()=>{const e=z(),$=B(),[d,k]=n.useState(!1),[l,v]=n.useState(!1),m=new URLSearchParams($.search),C=m.get("email"),G=m.get("token"),[s,p]=n.useState(""),[g,h]=n.useState(""),{error:a,successMessage:i,isLoading:u}=F(t=>t.auth);n.useEffect(()=>{a&&e(E())},[e]),n.useEffect(()=>{i&&(f.success(i),e(R()))},[i,e]);const x=t=>{const{name:c,value:w}=t.target;c==="newPassword"?p(w):c==="confirmPassword"&&h(w)},L=async t=>{if(t.preventDefault(),s!==g){f.error("Паролі не співпадають");return}try{await e(I({email:C,token:G,newPassword:s})).unwrap(),p(""),h("")}catch{console.error("Помилка при скиданні паролю:")}};return r.jsxs(r.Fragment,{children:[r.jsx(q,{}),r.jsx(M,{}),r.jsx(T,{children:r.jsxs(D,{children:[r.jsx(H,{children:"Створити новий пароль"}),r.jsx(A,{children:"Введіть новий пароль і підтвердьте його."}),r.jsxs(N,{onSubmit:L,children:[r.jsxs(b,{children:[r.jsx(j,{htmlFor:"newPassword",children:"Новий пароль"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx(P,{id:"newPassword",name:"newPassword",type:d?"text":"password",value:s,onChange:x,minLength:6,maxLength:25,placeholder:"Пароль",required:!0}),r.jsx(y,{type:"button",onClick:()=>k(t=>!t),children:d?"Сховати":"Показати"})]})]}),r.jsxs(b,{children:[r.jsx(j,{htmlFor:"confirmPassword",children:"Підтвердити пароль"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx(P,{id:"confirmPassword",name:"confirmPassword",type:l?"text":"password",value:g,minLength:6,maxLength:25,onChange:x,placeholder:"Пароль",required:!0}),r.jsx(y,{type:"button",onClick:()=>v(t=>!t),children:l?"Сховати":"Показати"})]}),r.jsx(J,{children:r.jsx(K,{children:"Мінімум 6 символів"})}),a&&r.jsxs(Y,{children:[" ",a]})]}),r.jsx(U,{type:"submit",disabled:u,children:u?"Завантаження...":"Створити пароль"}),r.jsx(O,{to:"/login",children:"Прейти до Login"})]})]})})]})};export{W as default};
