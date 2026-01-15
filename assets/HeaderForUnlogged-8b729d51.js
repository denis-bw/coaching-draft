import{d as t,N as r,j as e,ax as n}from"./index-0c4cf82d.js";const a=t.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color:  ${({theme:o})=>o.ContainerBGColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,s=t(r)`
  font-size: 24px;
  font-weight: bold;
  color:  ${({theme:o})=>o.greenMain};

  &:focus {
    color: ${({theme:o})=>o.textGray};
  }

  &:hover {
    color: ${({theme:o})=>o.textGray};
  }
`,x=()=>e.jsxs(a,{children:[e.jsx(s,{to:"/",children:"Coach's Sketch"}),e.jsx(n,{})]});export{x as H};
