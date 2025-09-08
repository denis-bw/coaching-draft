import{d as e,g as t,j as o}from"./index-f7fb8227.js";import{H as i}from"./HeaderForUnlogged-54e97b6d.js";const a=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-top: 100px;
  background-color: ${({theme:r})=>r.mainBGColor};
  transition: all 0.2s ease-in-out;
  @media (max-width: 640px) {
    padding: 40px; 
  }
`,c=e.div`
  text-align: center;
  max-width: 1200px;
  width: 100%;
  padding: 3rem;
  background-color: ${({theme:r})=>r.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,d=e.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: ${({theme:r})=>r.textBlack};
  margin-bottom: 1rem;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
`,s=e.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${({theme:r})=>r.textGray};
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  transition: color 0.2s ease-in-out;
`,l=e.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`,n=e(t)`
  padding: 0.875rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &.primary {
    background-color: ${({theme:r})=>r.greenMain};
    color: ${({theme:r})=>r.white};
    
    &:hover {
      background-color: ${({theme:r})=>r.darkGreen};
    }
      &:focus {
      background-color: ${({theme:r})=>r.darkGreen};
    }
  }

  &.secondary {
    background-color: transparent;
    color: ${({theme:r})=>r.textBlack};
    border: 2px solid ${({theme:r})=>r.greenMain};
    
    &:hover {
      background-color: ${({theme:r})=>r.BgActiveLink};
      border-color: ${({theme:r})=>r.BgActiveLink};
      color: ${({theme:r})=>r.white};
    }

    &:focus {
      background-color: ${({theme:r})=>r.BgActiveLink};
      border-color: ${({theme:r})=>r.BgActiveLink};
      color: ${({theme:r})=>r.white};
    }
  }

  @media (max-width: 640px) {
    width: 100%;
    text-align: center;
    padding: 1rem 2rem;
  }
`,x=()=>o.jsxs(o.Fragment,{children:[o.jsx(i,{}),o.jsx(a,{children:o.jsxs(c,{children:[o.jsx(d,{children:"Ласкаво просимо!"}),o.jsx(s,{children:"Приєднуйтесь до нашої спільноти та відкривайте для себе нові можливості. Почніть свою подорож прямо зараз!"}),o.jsxs(l,{children:[o.jsx(n,{to:"/login",className:"secondary",children:"Увійти"}),o.jsx(n,{to:"/register",className:"primary",children:"Реєстрація"})]})]})})]});export{x as default};
