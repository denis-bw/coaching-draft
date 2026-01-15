import{d as o,b as x,r as a,a as h,m as b,ar as f,y as $,av as w,j as r,aw as k}from"./index-0c4cf82d.js";import{H as v}from"./HeaderForUnlogged-8b729d51.js";const j=o.div`
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
`,y=o.div`
  width: 100%;
  max-width: 28rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,G=o.h1`
  font-size: 1.75rem;
  color: ${({theme:e})=>e.textBlack};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`,B=o.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,E=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,C=o.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.textBlack};
`,F=o.input`
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
`,I=o.button`
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
`,S=o.button`
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
`,z=o.p`
  color: ${({theme:e})=>e.red};
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,D=o.p`
  color: ${({theme:e})=>e.textGray};
  text-align: center;
  font-size: 0.875rem;
  margin-top: -1.5rem;
  margin-bottom: 2rem;
  line-height: 1.5;
`,A=()=>{const e=x(),[l,n]=a.useState(""),{error:i,successMessage:s,isLoading:c}=h(t=>t.auth),g=b();a.useEffect(()=>{i&&e(f())},[e]),a.useEffect(()=>{s&&($.success(s),e(w()))},[s]),a.useEffect(()=>{const t=localStorage.getItem("forgotEmailFormData")||"";t&&n(t)},[]);const p=t=>{const{name:d,value:m}=t.target;localStorage.setItem("forgotEmailFormData",m),n(m)},u=async t=>{t.preventDefault(),localStorage.removeItem("forgotEmailFormData");try{await e(k(l)).unwrap(),n("")}catch(d){console.error("Помилка при відправці запиту:",d)}};return r.jsxs(r.Fragment,{children:[r.jsx(v,{}),r.jsx(j,{children:r.jsxs(y,{children:[r.jsx(G,{children:"Відновлення паролю"}),r.jsx(D,{children:"Після надсилання форми - на вашу електронну пошту прийде посилання для створення нового паролю"}),r.jsxs(B,{onSubmit:u,children:[r.jsxs(E,{children:[r.jsx(C,{htmlFor:"email",children:"Email"}),r.jsx(F,{id:"email",name:"email",type:"email",value:l,onChange:p,placeholder:"Введіть ваш email",required:!0}),i&&r.jsx(z,{children:i})]}),r.jsx(I,{type:"submit",disabled:c,children:c?"Завантаження...":"Відправити"}),r.jsx(S,{type:"button",onClick:()=>g(-1),children:"Назад"})]})]})})]})};export{A as default};
