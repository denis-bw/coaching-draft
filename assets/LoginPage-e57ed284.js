import{d as r,j as o,l as m,i as $,h as k,r as a,n as j,q as v}from"./index-ae991d8e.js";import{H as G}from"./HeaderForUnlogged-dc5057a4.js";const y=r.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 0.875rem;
    font-size: 1rem;
    font-weight: 500;

    color: ${({theme:e})=>e.textBlack}; 
    background-color:  ${({theme:e})=>e.ContainerBGColor};
    border: 1.6px solid ${({theme:e})=>e.textGray};
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    width: 100%;
    margin-top: 16px;
    margin-bottom: 10px;
    height: 46px;
    &:hover {  
        background-color:  ${({theme:e})=>e.BgActiveLink}; 
        border-color: ${({theme:e})=>e.BgActiveLink};
        /* background-color:  ${({theme:e})=>e.BgActiveLinkHover};  */
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.lightGreen.slice(1,3),16)}, ${parseInt(e.lightGreen.slice(3,5),16)}, ${parseInt(e.lightGreen.slice(5,7),16)}, 0.5)`};
        
    }

    svg {
        width: 20px;
        height: 20px;
    }
`,B=()=>{const e="https://coaching-draft-backend.onrender.com/api/auth/",i=()=>{window.location.href=`${e}users/google`};return o.jsxs(y,{onClick:i,children:[o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",children:[o.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),o.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),o.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),o.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),o.jsx("path",{fill:"none",d:"M0 0h48v48H0z"})]}),"Увійти через Google"]})},C=r.div`
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
`,F=r.div`
  width: 100%;
  max-width: 28rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,L=r.h1`
  font-size: 1.75rem;
  color: ${({theme:e})=>e.textBlack};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`,z=r.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,h=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,x=r.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.textBlack};
`,u=r.input`
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
`,I=r.button`
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
  margin-top: 0.5rem;

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,E=r.p`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({theme:e})=>e.textGray};
  font-size: 0.875rem;
`,S=r(m)`
  color: ${({theme:e})=>e.greenMain};
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;
  
  &:hover {
    color: ${({theme:e})=>e.darkGreen};
    text-decoration: underline;
  }
`,A=r.div`
  display: flex;
  justify-content: flex-end; 
  width: 100%;
  &:hover {
    color: ${({theme:e})=>e.darkGreen};
    text-decoration: underline;
  }
`,M=r(m)`
  color: ${({theme:e})=>e.textGray};
  text-decoration: none;
  font-size: 0.875rem;
  margin-top: -1rem;
  width: fit-content;
  
  &:hover {
    color: ${({theme:e})=>e.greenMain};
  }
`,D=r.div`
  color: ${({theme:e})=>e.red};
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
`,q=()=>{const e=$(),{error:i,isLoading:l}=k(t=>t.auth),[c,f]=a.useState(!1),[s,d]=a.useState({email:"",password:""});a.useEffect(()=>{i&&e(j())},[e]),a.useEffect(()=>{const t=localStorage.getItem("loginFormData")||"";t&&d(n=>({...n,email:t}))},[]);const g=t=>{const{name:n,value:p}=t.target;n==="email"&&localStorage.setItem("loginFormData",p),d(w=>({...w,[n]:p}))},b=t=>{t.preventDefault(),e(v(s)).catch(n=>{console.error("Помилка входу: ",n)})};return o.jsxs(o.Fragment,{children:[o.jsx(G,{}),o.jsx(C,{children:o.jsxs(F,{children:[o.jsx(L,{children:"Вхід"}),o.jsxs(z,{onSubmit:b,children:[o.jsxs(h,{children:[o.jsx(x,{htmlFor:"email",children:"Email"}),o.jsx(u,{id:"email",name:"email",type:"email",value:s.email,onChange:g,maxLength:40,placeholder:"Введіть email",required:!0})]}),o.jsxs(h,{children:[o.jsx(x,{htmlFor:"password",children:"Пароль"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsx(u,{id:"password",name:"password",type:c?"text":"password",value:s.password,onChange:g,placeholder:"Введіть пароль",required:!0,minLength:6,maxLength:20}),o.jsx(P,{type:"button",onClick:()=>f(t=>!t),children:c?"Сховати":"Показати"})]})]}),o.jsxs(A,{children:[" ",o.jsx(M,{to:"/forgot-password",children:"Забули пароль?"})," "]}),o.jsx(I,{type:"submit",disabled:l,children:l?"Завантаження...":"Увійти"})]}),o.jsx(B,{}),i&&o.jsx(D,{children:i}),o.jsxs(E,{children:["Немає акаунту? ",o.jsx(S,{to:"/register",children:"Зареєструватися"})]})]})})]})};export{q as default};
