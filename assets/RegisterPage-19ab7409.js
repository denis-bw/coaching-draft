import{d as o,N as v,b as j,a as y,r as d,ar as G,j as r,as as k}from"./index-0c4cf82d.js";import{H as F}from"./HeaderForUnlogged-8b729d51.js";const C=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-top: 40px;
  background-color: ${({theme:e})=>e.mainBGColor};
  transition: all 0.2s ease-in-out;
  @media (max-width: 640px) {
    padding: 20px; 
  }
`,E=o.div`
  width: 100%;
  max-width: 28rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,S=o.h1`
  font-size: 1.75rem;
  color: ${({theme:e})=>e.textBlack};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`,D=o.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,p=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`,u=o.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.textBlack};
`,g=o.input`
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

&:-webkit-autofill {
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
`;o.span`
  color: ${({theme:e})=>e.red};
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;const I=o.button`
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

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,z=o.p`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({theme:e})=>e.textGray};
  font-size: 0.875rem;
`,B=o(v)`
  color: ${({theme:e})=>e.greenMain};
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
`,L=o.div`
  padding: 0;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.textGray};
`,q=o.p`
  display: flex;
  align-items: center;
  
  svg {
    color: ${({isValid:e,theme:s})=>e?s.greenMain:s.textGray};
  }
`,P=o.div`
  color: ${({theme:e})=>e.red};
`,R=o.button`
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
`,T=()=>{const e=j(),{error:s,isLoading:x}=y(t=>t.auth),[h,b]=d.useState(!1),[l,f]=d.useState({username:"",email:"",password:""});d.useEffect(()=>{s&&e(G())},[e]),d.useEffect(()=>{const t=localStorage.getItem("registerFormData");let n="",i="";if(t){const a=JSON.parse(t);console.log(a),n=a.savedEmail||"",i=a.savedUsername||""}(i||n)&&f(a=>({...a,email:n,username:i}))},[]);const c=t=>{const{name:n,value:i}=t.target;f(a=>{const m={...a,[n]:i};if(n==="email"||n==="username"){const w={savedEmail:m.email,savedUsername:m.username};localStorage.setItem("registerFormData",JSON.stringify(w))}return m})},$=t=>{t.preventDefault(),e(k(l)).then(()=>{}).catch(n=>{console.error("Реєстрація не вдалася: ",n)})};return r.jsxs(r.Fragment,{children:[r.jsx(F,{}),r.jsx(C,{children:r.jsxs(E,{children:[r.jsx(S,{children:"Реєстрація"}),r.jsxs(D,{onSubmit:$,children:[r.jsxs(p,{children:[r.jsx(u,{htmlFor:"name",children:"Ім'я"}),r.jsx(g,{id:"name",name:"username",type:"text",value:l.username,onChange:c,minLength:3,maxLength:25,placeholder:"Введіть ім'я",required:!0})]}),r.jsxs(p,{children:[r.jsx(u,{htmlFor:"email",children:"Email"}),r.jsx(g,{id:"email",name:"email",type:"email",value:l.email,onChange:c,maxLength:40,placeholder:"Введіть Email",required:!0})]}),r.jsxs(p,{children:[r.jsx(u,{htmlFor:"password",children:"Пароль"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx(g,{id:"password",name:"password",type:h?"text":"password",value:l.password,onChange:c,placeholder:"Введіть пароль",required:!0,minLength:6,maxLength:25}),r.jsx(R,{type:"button",onClick:()=>b(t=>!t),children:h?"Сховати":"Показати"})]}),r.jsx(L,{children:r.jsx(q,{children:"Мінімум 6 символів"})})]}),r.jsx(I,{type:"submit",disabled:x,children:x?"Завантаження...":"Зареєструватися"}),s&&r.jsxs(P,{children:[" ",s]})]}),r.jsxs(z,{children:["Вже маєте акаунт? ",r.jsx(B,{to:"/login",children:"Увійти"})]})]})})]})};export{T as default};
