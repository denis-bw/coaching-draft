import{d as r,N as B,a as z,m as I,M as E,r as n,u as F,_ as M,a2 as R,j as o,a4 as q,y as b,a5 as N}from"./index-cec7cca9.js";import{H as T}from"./HeaderForUnlogged-41b8e6e0.js";const D=r.div`
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
`,H=r.div`
  width: 100%;
  max-width: 28rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,U=r.h1`
  font-size: 1.75rem;
  color: ${({theme:e})=>e.textBlack};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`,Y=r.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,$=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,k=r.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.textBlack};
`,j=r.input`
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

&:-webkit-autofill,
&:-webkit-autofill:hover,
&:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 30px ${({theme:e})=>e.ContainerBGColor} inset;
  -webkit-text-fill-color: ${({theme:e})=>e.textBlack};
  transition: background-color 5000s ease-in-out 0s;
  border-color: ${({theme:e})=>e.lightGreen};
}

&:valid {
    border-color: ${({theme:e})=>e.lightGreen};
}

&:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    border-color: ${({theme:e})=>e.red};
}

&:focus:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.red.slice(1,3),16)}, ${parseInt(e.red.slice(3,5),16)}, ${parseInt(e.red.slice(5,7),16)}, 0.5)`};
}

`,_=r.button`
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
`,A=r.div`
  color: ${({theme:e})=>e.red};
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,J=r.p`
  color: ${({theme:e})=>e.textGray};
  text-align: center;
  font-size: 0.875rem;
  margin-top: -1.5rem;
  margin-bottom: 2rem;
  line-height: 1.5;
`,K=r.div`
  padding: 0;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.textGray};
`,O=r.p`
  display: flex;
  align-items: center;
  
`,y=r.button`
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
    color: ${({theme:e})=>e.textGray};
  }

  &:hover {
    color: ${({theme:e})=>e.textGray};
    outline: none;
  }
`,Q=r(B)`
  color: ${({theme:e})=>e.greenMain};
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;
  
  &:hover {
    color: ${({theme:e})=>e.darkGreen};
    text-decoration: underline;
  }

  &:focus {
    color: ${({theme:e})=>e.darkGreen};
    text-decoration: underline;
  }
`,X=()=>{const e=z(),P=I(),v=E(),[c,G]=n.useState(!1),[d,C]=n.useState(!1),m=new URLSearchParams(v.search),u=m.get("email"),L=m.get("token"),[s,p]=n.useState(""),[x,g]=n.useState(""),{error:a,successMessage:i,isLoading:h}=F(t=>t.auth);n.useEffect(()=>{a&&e(M())},[e]),n.useEffect(()=>{i&&(e(R()),P("/login",{state:{toastMessage:i}}))},[i,e]);const w=t=>{const{name:l,value:f}=t.target;l==="newPassword"?p(f):l==="confirmPassword"&&g(f)},S=async t=>{if(t.preventDefault(),s!==x){b.error("Паролі не співпадають");return}if(!u){b.error("Email не надано у запиті");return}try{await e(N({email:u,token:L,newPassword:s})).unwrap(),p(""),g("")}catch{console.error("Помилка при скиданні паролю:")}};return o.jsxs(o.Fragment,{children:[o.jsx(q,{}),o.jsx(T,{}),o.jsx(D,{children:o.jsxs(H,{children:[o.jsx(U,{children:"Створити новий пароль"}),o.jsx(J,{children:"Введіть новий пароль і підтвердьте його."}),o.jsxs(Y,{onSubmit:S,children:[o.jsxs($,{children:[o.jsx(k,{htmlFor:"newPassword",children:"Новий пароль"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsx(j,{id:"newPassword",name:"newPassword",type:c?"text":"password",value:s,onChange:w,minLength:6,maxLength:25,placeholder:"Пароль",required:!0}),o.jsx(y,{type:"button",onClick:()=>G(t=>!t),children:c?"Сховати":"Показати"})]})]}),o.jsxs($,{children:[o.jsx(k,{htmlFor:"confirmPassword",children:"Підтвердити пароль"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsx(j,{id:"confirmPassword",name:"confirmPassword",type:d?"text":"password",value:x,minLength:6,maxLength:25,onChange:w,placeholder:"Пароль",required:!0}),o.jsx(y,{type:"button",onClick:()=>C(t=>!t),children:d?"Сховати":"Показати"})]}),o.jsx(K,{children:o.jsx(O,{children:"Мінімум 6 символів"})}),a&&o.jsxs(A,{children:[" ",a]})]}),o.jsx(_,{type:"submit",disabled:h,children:h?"Завантаження...":"Створити пароль"}),o.jsx(Q,{to:"/login",children:"Прейти до входу"})]})]})})]})};export{X as default};
