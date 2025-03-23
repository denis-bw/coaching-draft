import{d as r,e as x,r as a,c as h,u as b,n as f,y as $,t as w,j as o,L as k,v as j}from"./index-c8db3a22.js";import{H as v}from"./HeaderForUnlogged-8dc96771.js";const y=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-top: 60px;
  background-color: ${({theme:e})=>e.mainBGColor};
  transition: all 0.2s ease-in-out;
  @media (max-width: 640px) {
    padding-top: 50px; 
  }
`,G=r.div`
  width: 100%;
  max-width: 28rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,B=r.h1`
  font-size: 1.75rem;
  color: ${({theme:e})=>e.textBlack};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`,E=r.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,C=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,F=r.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.textBlack};
`,I=r.input`
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
`,S=r.button`
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
`,z=r.button`
  width: 100%;
  padding: 0.875rem;
  background-color: transparent;
  color: ${({theme:e})=>e.greenMain};
  border: 1.6px solid ${({theme:e})=>e.greenMain};
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.2rem;

    background-color: transparent;
    color: ${({theme:e})=>e.textBlack};
    border: 2px solid ${({theme:e})=>e.greenMain};

    &:hover {
        background-color: ${({theme:e})=>e.BgActiveLink};
        border-color: ${({theme:e})=>e.BgActiveLink};
        color: ${({theme:e})=>e.white};
    }
`,D=r.p`
  color: ${({theme:e})=>e.red};
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,L=r.p`
  color: ${({theme:e})=>e.textGray};
  text-align: center;
  font-size: 0.875rem;
  margin-top: -1.5rem;
  margin-bottom: 2rem;
  line-height: 1.5;
`,H=()=>{const e=x(),[l,n]=a.useState(""),{error:i,successMessage:s,isLoading:c}=h(t=>t.auth),g=b();a.useEffect(()=>{i&&e(f())},[e]),a.useEffect(()=>{s&&($.success(s),e(w()))},[s]),a.useEffect(()=>{const t=localStorage.getItem("forgotEmailFormData")||"";t&&n(t)},[]);const u=t=>{const{name:d,value:m}=t.target;localStorage.setItem("forgotEmailFormData",m),n(m)},p=async t=>{t.preventDefault(),localStorage.removeItem("forgotEmailFormData");try{await e(j(l)).unwrap(),n("")}catch(d){console.error("Помилка при відправці запиту:",d)}};return o.jsxs(o.Fragment,{children:[o.jsx(k,{}),o.jsx(v,{}),o.jsx(y,{children:o.jsxs(G,{children:[o.jsx(B,{children:"Відновлення паролю"}),o.jsx(L,{children:"Після надсилання форми - на вашу електронну пошту прийде посилання для створення нового паролю"}),o.jsxs(E,{onSubmit:p,children:[o.jsxs(C,{children:[o.jsx(F,{htmlFor:"email",children:"Email"}),o.jsx(I,{id:"email",name:"email",type:"email",value:l,onChange:u,placeholder:"Введіть ваш email",required:!0}),i&&o.jsx(D,{children:i})]}),o.jsx(S,{type:"submit",disabled:c,children:c?"Завантаження...":"Відправити"}),o.jsx(z,{type:"button",onClick:()=>g(-1),children:"Назад"})]})]})})]})};export{H as default};
