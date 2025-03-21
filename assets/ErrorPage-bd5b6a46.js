import{d as r,a as o,r as a,y as s,j as e,L as i}from"./index-f42f01ef.js";import{H as n}from"./HeaderForUnlogged-952ef95a.js";const c=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  overflow-y: scroll;
`,l=r.h1`
  font-size: 70px;
  color: ${t=>t.theme.textColor};
  @media (max-width: 640px) {
    font-size: 58px;
  }
`,x=r.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`,h=r.img`
  width: 300px;
  max-height: 300px;
  @media (max-width: 640px) {
    width: 200px;
    max-height: 200px;
  }
`,m="/coaching-draft/assets/error-b574aa8e.png",g=()=>{const t=o();return localStorage.removeItem("lastPrivatePath"),a.useEffect(()=>{console.log(t.pathname),t.pathname==="/auth/error"&&s.error("Помилка авторизації. Користувача з такою поштою не знайдено.")},[t.pathname]),e.jsxs(e.Fragment,{children:[e.jsx(i,{}),e.jsxs(x,{children:[e.jsx(n,{}),e.jsxs(c,{children:[e.jsx(l,{children:"Oops 404"}),e.jsx(h,{src:m,alt:"error-img"})]})]})]})};export{g as default};
