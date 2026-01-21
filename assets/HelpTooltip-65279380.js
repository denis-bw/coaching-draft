import{r as t,d as p,j as s}from"./index-bd79a0ad.js";const H=e=>t.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},t.createElement("path",{d:"M6 9L12 15L18 9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),R=e=>t.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},t.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2}),t.createElement("path",{d:"M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),t.createElement("path",{d:"M12 16H12.01",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),b=p(R)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({theme:e})=>e.white};
  transition: stroke 0.3s ease;
`,W=p.button.attrs({type:"button"})`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;

  &:focus,
  &:hover {
    outline: none;

    ${b} {
      stroke: ${({theme:e})=>e.darkGreen}; 
    }
  }
`,S=p.div`
  position: fixed;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  padding: 12px;
  border-radius: 10px;
  border: 2px solid ${({theme:e})=>e.black};
  font-size: 14px;
  line-height: 1.5;
  max-width: 300px;
  min-width: 80px;
  max-height: 170px;
  width: max-content;
  z-index: 100;
  cursor: pointer;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  opacity: ${({visible:e})=>e?1:0};
  transition: opacity 0.2s ease-in-out;
  white-space: pre-line;
  margin-top: ${({placement:e})=>e==="top"?"6px":"-6px"};
  top: ${({tooltipPosition:e})=>(e==null?void 0:e.top)||"0"}px;
  left: ${({tooltipPosition:e})=>(e==null?void 0:e.left)||"0"}px;
  
  &::before {
    content: '';
    position: absolute;
    display: block;
    border-style: solid;
    width: 0;
    height: 0;
    z-index: 1;
    
    ${({placement:e,theme:c})=>e==="top"?`
          bottom: -9px; /* Трохи вище, ніж зовнішня стрілка */
          left: 79.4%;
          margin-left: -6px;
          border-width: 9px 9px 0;
          border-color: ${c.black} transparent transparent;
        `:`
          top: -9px; /* Трохи нижче, ніж зовнішня стрілка */
          left: 79.4%;
          margin-left: -6px;
          border-width: 0 9px 9px;
          border-color: transparent transparent ${c.black};
        `}
  }

  @media (max-width: 768px) {
    max-width: 260px;

  }
`,T=p.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
`,z=p.div`
  font-size: 14px; 
  font-weight: 600; 
  margin-bottom: 5px; 
`,I=({title:e,text:c})=>{const[o,a]=t.useState(!1),[v,k]=t.useState("top"),[C,E]=t.useState(null),d=t.useRef(null),l=t.useRef(null),i=()=>{if(!l.current||!d.current||!o)return;const n=l.current.getBoundingClientRect(),w=d.current.getBoundingClientRect(),u=window.innerWidth,f=w.height,h=w.width,g=n.top,L=n.bottom,$=n.left;n.right;const j=n.width;n.height;const y=$+j/2,m=g>f+15?"top":"bottom";k(m);let x,r;m==="top"?x=g-f-12:x=L+12,r=y-h*.8,r<10&&(r=10),r+h>u-10&&(r=u-h-10),E({top:x,left:r})};return t.useEffect(()=>{o&&setTimeout(i,0)},[o]),t.useEffect(()=>{if(o)return window.addEventListener("scroll",i),window.addEventListener("resize",i),()=>{window.removeEventListener("scroll",i),window.removeEventListener("resize",i)}},[o]),s.jsxs(W,{ref:l,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:()=>a(!o),children:[s.jsx(b,{}),s.jsx(S,{ref:d,visible:o,placement:v,tooltipPosition:C,children:s.jsxs(T,{children:[e&&s.jsx(z,{children:e}),c]})})]})};export{I as H,H as S};
