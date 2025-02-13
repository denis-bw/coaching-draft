import{d as r,l as S,i as B,a as z,r as n,h as I,n as E,y as c,t as F,j as o,L as R,w as q}from"./index-62bf0a9d.js";import{H as M}from"./HeaderForUnlogged-c3ad30bf.js";const T=r.div`
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
`,D=r.div`
  width: 100%;
  max-width: 28rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,H=r.h1`
  font-size: 1.75rem;
  color: ${({theme:e})=>e.textBlack};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`,N=r.form`
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

`,U=r.button`
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
`,Y=r.div`
  color: ${({theme:e})=>e.red};
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,A=r.p`
  color: ${({theme:e})=>e.textGray};
  text-align: center;
  font-size: 0.875rem;
  margin-top: -1.5rem;
  margin-bottom: 2rem;
  line-height: 1.5;
`,J=r.div`
  padding: 0;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.textGray};
`,K=r.p`
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
`,O=r(S)`
  color: ${({theme:e})=>e.greenMain};
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;
  
  &:hover {
    color: ${({theme:e})=>e.darkGreen};
    text-decoration: underline;
  }
`,W=()=>{const e=B(),y=z(),[d,v]=n.useState(!1),[m,C]=n.useState(!1),u=new URLSearchParams(y.search),p=u.get("email"),G=u.get("token"),[s,h]=n.useState(""),[x,g]=n.useState(""),{error:i,successMessage:a,isLoading:w}=I(t=>t.auth);n.useEffect(()=>{i&&e(E())},[e]),n.useEffect(()=>{a&&(c.success(a),e(F()))},[a,e]);const f=t=>{const{name:l,value:b}=t.target;l==="newPassword"?h(b):l==="confirmPassword"&&g(b)},L=async t=>{if(t.preventDefault(),s!==x){c.error("Паролі не співпадають");return}if(!p){c.error("Email не надано у запиті");return}try{await e(q({email:p,token:G,newPassword:s})).unwrap(),h(""),g("")}catch{console.error("Помилка при скиданні паролю:")}};return o.jsxs(o.Fragment,{children:[o.jsx(R,{}),o.jsx(M,{}),o.jsx(T,{children:o.jsxs(D,{children:[o.jsx(H,{children:"Створити новий пароль"}),o.jsx(A,{children:"Введіть новий пароль і підтвердьте його."}),o.jsxs(N,{onSubmit:L,children:[o.jsxs($,{children:[o.jsx(j,{htmlFor:"newPassword",children:"Новий пароль"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsx(k,{id:"newPassword",name:"newPassword",type:d?"text":"password",value:s,onChange:f,minLength:6,maxLength:25,placeholder:"Пароль",required:!0}),o.jsx(P,{type:"button",onClick:()=>v(t=>!t),children:d?"Сховати":"Показати"})]})]}),o.jsxs($,{children:[o.jsx(j,{htmlFor:"confirmPassword",children:"Підтвердити пароль"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsx(k,{id:"confirmPassword",name:"confirmPassword",type:m?"text":"password",value:x,minLength:6,maxLength:25,onChange:f,placeholder:"Пароль",required:!0}),o.jsx(P,{type:"button",onClick:()=>C(t=>!t),children:m?"Сховати":"Показати"})]}),o.jsx(J,{children:o.jsx(K,{children:"Мінімум 6 символів"})}),i&&o.jsxs(Y,{children:[" ",i]})]}),o.jsx(U,{type:"submit",disabled:w,children:w?"Завантаження...":"Створити пароль"}),o.jsx(O,{to:"/login",children:"Прейти до входу"})]})]})})]})};export{W as default};
