import{d as t,N as r,j as e,as as n}from"./index-8f34988e.js";const s=t.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color:  ${({theme:o})=>o.ContainerBGColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,a=t(r)`
  font-size: 24px;
  font-weight: bold;
  color:  ${({theme:o})=>o.greenMain};

  &:focus {
    color: ${({theme:o})=>o.textGray};
  }

  &:hover {
    color: ${({theme:o})=>o.textGray};
  }
`,d=()=>e.jsxs(s,{children:[e.jsx(a,{to:"/",children:"Coach's Sketch"}),e.jsx(n,{})]});export{d as H};
