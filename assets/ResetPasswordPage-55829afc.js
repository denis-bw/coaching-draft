import{d as r,l as B,i as z,u as I,a as E,r as n,h as F,n as R,t as q,j as o,L as M,y as b,w as T}from"./index-9cb2d85f.js";import{H as D}from"./HeaderForUnlogged-e52d6766.js";const N=r.div`
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
`,j=r.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.textBlack};
`,k=r.input`
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

`,A=r.button`
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
`,J=r.div`
  color: ${({theme:e})=>e.red};
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,K=r.p`
  color: ${({theme:e})=>e.textGray};
  text-align: center;
  font-size: 0.875rem;
  margin-top: -1.5rem;
  margin-bottom: 2rem;
  line-height: 1.5;
`,O=r.div`
  padding: 0;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.textGray};
`,Q=r.p`
  display: flex;
  align-items: center;
  
`,P=r.button`
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
`,V=r(B)`
  color: ${({theme:e})=>e.greenMain};
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;
  
  &:hover {
    color: ${({theme:e})=>e.darkGreen};
    text-decoration: underline;
  }
`,Z=()=>{const e=z(),y=I(),v=E(),[c,C]=n.useState(!1),[d,G]=n.useState(!1),m=new URLSearchParams(v.search),u=m.get("email"),L=m.get("token"),[s,p]=n.useState(""),[g,h]=n.useState(""),{error:a,successMessage:i,isLoading:x}=F(t=>t.auth);n.useEffect(()=>{a&&e(R())},[e]),n.useEffect(()=>{i&&(e(q()),y("/login",{state:{toastMessage:i}}))},[i,e]);const w=t=>{const{name:l,value:f}=t.target;l==="newPassword"?p(f):l==="confirmPassword"&&h(f)},S=async t=>{if(t.preventDefault(),s!==g){b.error("Паролі не співпадають");return}if(!u){b.error("Email не надано у запиті");return}try{await e(T({email:u,token:L,newPassword:s})).unwrap(),p(""),h("")}catch{console.error("Помилка при скиданні паролю:")}};return o.jsxs(o.Fragment,{children:[o.jsx(M,{}),o.jsx(D,{}),o.jsx(N,{children:o.jsxs(H,{children:[o.jsx(U,{children:"Створити новий пароль"}),o.jsx(K,{children:"Введіть новий пароль і підтвердьте його."}),o.jsxs(Y,{onSubmit:S,children:[o.jsxs($,{children:[o.jsx(j,{htmlFor:"newPassword",children:"Новий пароль"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsx(k,{id:"newPassword",name:"newPassword",type:c?"text":"password",value:s,onChange:w,minLength:6,maxLength:25,placeholder:"Пароль",required:!0}),o.jsx(P,{type:"button",onClick:()=>C(t=>!t),children:c?"Сховати":"Показати"})]})]}),o.jsxs($,{children:[o.jsx(j,{htmlFor:"confirmPassword",children:"Підтвердити пароль"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsx(k,{id:"confirmPassword",name:"confirmPassword",type:d?"text":"password",value:g,minLength:6,maxLength:25,onChange:w,placeholder:"Пароль",required:!0}),o.jsx(P,{type:"button",onClick:()=>G(t=>!t),children:d?"Сховати":"Показати"})]}),o.jsx(O,{children:o.jsx(Q,{children:"Мінімум 6 символів"})}),a&&o.jsxs(J,{children:[" ",a]})]}),o.jsx(A,{type:"submit",disabled:x,children:x?"Завантаження...":"Створити пароль"}),o.jsx(V,{to:"/login",children:"Прейти до входу"})]})]})})]})};export{Z as default};
