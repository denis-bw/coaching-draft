import{d as r,M as o,r as a,y as i,j as e}from"./index-e85cd0ab.js";import{H as s}from"./HeaderForUnlogged-128d5daf.js";const n=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  overflow-y: scroll;
`,c=r.h1`
  font-size: 70px;
  color: ${t=>t.theme.textColor};
  @media (max-width: 640px) {
    font-size: 58px;
  }
`,l=r.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`,x=r.img`
  width: 300px;
  max-height: 300px;
  @media (max-width: 640px) {
    width: 200px;
    max-height: 200px;
  }
`,h="/coaching-draft/assets/error-b574aa8e.png",p=()=>{const t=o();return localStorage.removeItem("lastPrivatePath"),a.useEffect(()=>{console.log(t.pathname),t.pathname==="/auth/error"&&i.error("Помилка авторизації. Користувача з такою поштою не знайдено.")},[t.pathname]),e.jsx(e.Fragment,{children:e.jsxs(l,{children:[e.jsx(s,{}),e.jsxs(n,{children:[e.jsx(c,{children:"Oops 404"}),e.jsx(x,{src:h,alt:"error-img"})]})]})})};export{p as default};
