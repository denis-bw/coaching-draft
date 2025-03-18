import{r,d as o,j as t,b as A}from"./index-b4191670.js";import{S as V,C as S}from"./CustomDatePicker-6cb29947.js";import{p as q}from"./PlaceholderProfile-3c1b0d36.js";const G=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6 9L12 15L18 9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Y=o.div`
  
  margin: 20px 0;
  border: 1.7px solid ${({theme:e})=>e.greenMain};
  border-radius: 8px;

  background-color: ${({theme:e})=>e.ContainerBGColor}; 
    transition: background-color 0.3s ease;
  ${({isOpen:e})=>!e&&`
    border-radius: 8px 8px 0 0;
  `}


`,O=o(G)`
  stroke: ${e=>e.theme.white};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
`,U=o.div`
  background-color: ${({theme:e})=>e.greenMain};
  padding: 8px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  transition: background-color 0.3s ease;
  position: relative;
  cursor: row-resize;
  border-top-left-radius: 6px; 
  border-top-right-radius:6px;
  border: 1.7px solid ${({theme:e})=>e.greenMain};

  &:hover {
    background-color: ${({theme:e})=>e.lightGreen};
    border-color: ${({theme:e})=>e.lightGreen}; 
    ${O} {
      stroke: ${({theme:e})=>e.ContainerBGColor};
    }
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
  }
`,X=o.div`
  padding: 0 20px;
  max-height: ${({isOpen:e})=>e?"1000px":"0"};
  opacity: ${({isOpen:e})=>e?"1":"0"};
  overflow: hidden;
  transition: 
    max-height ${({isOpen:e})=>e?"0.8s":"0.4s"} ease-in-out,
    opacity ${({isOpen:e})=>e?"0.8s":"0.4s"} ease-in-out;
`,Z=o.h3`
  color: ${({theme:e})=>e.white};
  font-size: 22px; 
  font-weight: 600;
  margin: 0;
  line-height: 1.2; 
  max-height: 27px;  
  overflow: hidden; 
  @media (max-width: 768px) {
    font-size: 18px; 
    font-weight: 600;
    max-height: 24px; 
  }
`,J=o.div`
  display: flex;
  align-items: center;
`,K=o.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,Q=e=>r.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2}),r.createElement("path",{d:"M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M12 16H12.01",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),_=o.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,ee=o(Q)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({theme:e})=>e.white};
`,te=o.div`
  position: absolute;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  padding: 12px;
  border-radius: 10px;
  border: 2px solid ${({theme:e})=>e.black};
  font-size: 14px;
  line-height: 1.5;
  width: 300px;
  max-height: 170px;
  z-index: 100;
  cursor: pointer;
  top: ${({top:e})=>e||"-190%"};
  left: ${({left:e})=>e||"-310%"};
  transform: translateX(-50%);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  opacity: ${({visible:e})=>e?1:0};
  transition: opacity 0.2s ease-in-out;
  white-space: pre-line;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 79%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${({theme:e})=>e.black};
  }

  @media (max-width: 768px) {
    width: 260px;
    &::after {
         left: 84%;
    }
  }
`,oe=o.div`

  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300; 


`,re=o.div`
  font-size: 14px; 
  font-weight: 600; 
  margin-bottom: 5px; 
`,ie=({title:e,text:d,top:s,left:h})=>{const[x,l]=r.useState(!1);return t.jsxs(_,{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),onClick:()=>l(!x),children:[t.jsx(ee,{}),t.jsx(te,{visible:x,top:s,left:h,children:t.jsxs(oe,{children:[" ",e&&t.jsx(re,{children:e}),d]})})]})},B=({children:e,helpTooltiptitle:d,helpTooltip:s,title:h,top:x,left:l})=>{const[w,g]=r.useState(!1),[b,$]=r.useState(!1),u=r.useRef(null),c=r.useRef(!1),v=()=>{g(f=>(b||$(!0),!f))};r.useEffect(()=>{const f=new IntersectionObserver(([j])=>{!b&&j.isIntersecting&&!c.current&&j.intersectionRatio>=1&&(setTimeout(()=>{g(!0)},200),c.current=!0)},{threshold:1,rootMargin:"0px 0px -100px 0px"});return u.current&&f.observe(u.current),()=>{u.current&&f.unobserve(u.current)}},[b]);const C=f=>{f.stopPropagation()};return t.jsxs(Y,{ref:u,isOpen:w,children:[t.jsxs(U,{onClick:v,children:[h&&t.jsx(Z,{children:h}),t.jsxs(J,{children:[s&&t.jsx(K,{onClick:C,children:t.jsx(ie,{title:d,text:s,top:x,left:l})}),t.jsx(O,{isOpen:w})]})]}),t.jsx(X,{isOpen:w,children:e})]})},ne=o.div`
  position: relative;
  width: 100%;
`,se=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,le=o.span`
   color: ${({theme:e})=>e.textGray};
`,ae=o.button`
  padding: 0.75rem 1rem;
  width: 100%;
  padding-right: 2.5rem;
  border: 1.6px solid ${({theme:e})=>e.borderColor};
  border-radius: 0.5rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  position: relative; 
  cursor: text;
  &:focus {
      outline: none;
      border-color: ${({theme:e})=>e.lightGreen};
      box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.lightGreen.slice(1,3),16)}, ${parseInt(e.lightGreen.slice(3,5),16)}, ${parseInt(e.lightGreen.slice(5,7),16)}, 0.5)`};
  }
`,de=o.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border: 1px solid ${({theme:e})=>e.darkGreen};
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  max-height: 200px;
  overflow-y: auto;
`,y=o.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  color: ${({theme:e})=>e.textBlack};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({theme:e})=>e.lightGreen};
  }

  &.selected {
    background-color: ${({theme:e})=>e.darkGreen};
    color: ${({theme:e})=>e.white};
  }
`,ce=o(G)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) ${e=>e.open?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
  width: 22px;
  height: auto;
`,pe=({label:e,value:d,onChange:s})=>{const[h,x]=r.useState(!1),[l,w]=r.useState(d),g=r.useRef(null),b=c=>{c.preventDefault(),x(!h)},$=c=>{w(c),s(c),x(!1)},u=c=>{g.current&&!g.current.contains(c.target)&&x(!1)};return r.useEffect(()=>(document.addEventListener("click",u),()=>{document.removeEventListener("click",u)}),[]),t.jsxs(ne,{ref:g,children:[e&&t.jsx(se,{onClick:b,children:e}),t.jsxs(ae,{onClick:b,children:[t.jsx(le,{children:l||"Не вибрано"}),t.jsx(ce,{open:h})]}),h&&t.jsxs(de,{children:[t.jsx(y,{className:l==="Чоловік"?"selected":"",onClick:()=>$("Чоловік"),children:"Чоловік"}),t.jsx(y,{className:l===" Жінка"?"selected":"",onClick:()=>$(" Жінка"),children:"Жінка"}),t.jsx(y,{className:l===""?"selected":"",onClick:()=>$(""),children:"Не вибрано"})]})]})};o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`;o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:d,name:s})=>d&&s==="username"?e.red:e.borderColor};
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

  &:not(:placeholder-shown):not(:-webkit-autofill):invalid {
      border-color: ${({theme:e})=>e.red};
  }

  &:focus:not(:placeholder-shown):not(:-webkit-autofill):invalid {
      box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.red.slice(1,3),16)}, ${parseInt(e.red.slice(3,5),16)}, ${parseInt(e.red.slice(5,7),16)}, 0.5)`};
  }
  
  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    cursor: not-allowed;
  }

  &:focus {
    border-color: ${({theme:e})=>e.lightGreen};
  }
`;o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;const n={mobile:"320px",tablet:"768px",desktop:"1024px"},he=o.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  @media (min-width: ${n.tablet}) {
    align-items: flex-start;
    height: 100%;
  }
`,xe=o.form`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${n.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${n.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }
`,ue=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${n.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`,me=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  
  @media (min-width: ${n.tablet}) {
    width: auto;
    margin-right: 3.8rem;
    margin-bottom: 0;
    justify-content: flex-start;
    align-self: center; 
  }

   @media (min-width: ${n.desktop}) {
    margin-right: 2rem;
  }
`,ge=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${n.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,be=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,fe=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,we=o.label`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 2px solid ${({theme:e})=>e.white};

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
  }

  @media (min-width: ${n.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,$e=o.input`
  display: none;
`,ke=o.div`
  flex: 1;
  
  @media (min-width: ${n.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center; 
  }
`,I=o.h2`
  color: ${({theme:e})=>e.greenMain};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`,M=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: ${e=>e.hasphysique?"20px":"0"};
  padding-bottom: ${e=>e.hasphysique?"20px":"0"};
  @media (min-width: ${n.tablet}) {
    flex-direction: column;
  }
  
  @media (min-width: ${n.desktop}) {
    flex-direction: row;
    gap: 1.5rem;
  }
`,a=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,p=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,m=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:d,name:s})=>d&&s==="username"?e.red:e.borderColor};
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

  &:not(:placeholder-shown):not(:-webkit-autofill):invalid {
      border-color: ${({theme:e})=>e.red};
  }

  &:focus:not(:placeholder-shown):not(:-webkit-autofill):invalid {
      box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.red.slice(1,3),16)}, ${parseInt(e.red.slice(3,5),16)}, ${parseInt(e.red.slice(5,7),16)}, 0.5)`};
  }
  
  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    cursor: not-allowed;
  }
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }


`,je=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,ve=o.button`
  max-width: 500px;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>e.lightGreenAlpha};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    cursor: not-allowed;
  }
`,Ce=o(V)`
  fill: ${e=>e.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${n.tablet}) {
    width: 18px;
    height: 18px;
  }
`,z=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ye=o.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media (min-width: ${n.desktop}) {
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }
`,Ge=o.div`
  flex: 1;
  
  @media (min-width: ${n.desktop}) {
    margin-top: 3.1rem;
  }
`,Ie=o.div`
  flex: 1;
`;o(I)`
  margin-bottom: 1rem;
`;const E=o.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,k=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: ${n.desktop}) {
    flex-direction: row;
    gap: 20px;
    
    & > ${a} {
      flex: 1;
    }
  }
`;o.div`
  position: relative;
`;const Se=o.select`
  width: 100%;
  padding: 0.75rem 1rem;
  padding-right: 2.5rem; 
  border: 1.6px solid ${({theme:e})=>e.borderColor};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  transition: all 0.2s ease-in-out;
  appearance: none; 
  -webkit-appearance: none;
  -moz-appearance: none;
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

  &:not(:placeholder-shown):not(:-webkit-autofill):invalid {
      border-color: ${({theme:e})=>e.red};
  }

  &:focus:not(:placeholder-shown):not(:-webkit-autofill):invalid {
      box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.red.slice(1,3),16)}, ${parseInt(e.red.slice(3,5),16)}, ${parseInt(e.red.slice(5,7),16)}, 0.5)`};
  }
  
  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    cursor: not-allowed;
  }

  &:focus {
    border-color: ${({theme:e})=>e.lightGreen};
  }
  
 & > option {
    background-color: ${({theme:e})=>e.ContainerBGColor};
    color: ${({theme:e})=>e.textBlack};
    padding: 10px;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
  }


  & > option:checked {
    background-color: ${({theme:e})=>e.darkGreen}; 
    color: ${({theme:e})=>e.white}; 
  }
`;o(G)`
  stroke: ${e=>e.theme.iconColor};
  stroke-width: 3; 
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  transform-origin: center;
  width: 22px; 
  height: auto;
  transition: transform 0.3s ease; 
  
  ${Se}:focus + & {
    transform: translateY(-50%) rotate(180deg);
  }
`;const Be=o(I)`
  margin-bottom: 1rem;
  padding-top: 10px;

  @media (min-width: ${n.desktop}) {
    padding-top: 0;
  }
`,Oe=()=>{const{setTitle:e}=A();r.useState(!1);const[d,s]=r.useState(""),[h,x]=r.useState(""),[l,w]=r.useState(""),[g,b]=r.useState(""),[$,u]=r.useState(""),[c,v]=r.useState(""),[C,f]=r.useState(""),[j,F]=r.useState(""),[L,P]=r.useState(""),[T,W]=r.useState(""),[N,D]=r.useState(""),[R,H]=r.useState("");return r.useEffect(()=>{e("Створення нового спортсмена")},[e]),t.jsx(t.Fragment,{children:t.jsx(he,{children:t.jsxs(xe,{children:[t.jsxs(ue,{children:[t.jsx(me,{children:t.jsxs(ge,{children:[t.jsx(be,{children:t.jsx(fe,{src:q,alt:"Фото спортсмена"})}),t.jsx(we,{htmlFor:"photo-upload",children:t.jsx(Ce,{})}),t.jsx($e,{id:"photo-upload",type:"file",loading:"lazy",accept:"image/jpeg,image/jpg,image/png,image/webp"})]})}),t.jsxs(ke,{children:[t.jsx(I,{children:"Особиста інформація"}),t.jsxs(M,{children:[t.jsxs(a,{children:[t.jsx(p,{htmlFor:"firstName",children:"Ім'я"}),t.jsx(m,{id:"firstName",type:"text",placeholder:"Введіть ім'я",value:d,onChange:i=>s(i.target.value)})]}),t.jsxs(a,{children:[t.jsx(p,{htmlFor:"lastName",children:"Прізвище"}),t.jsx(m,{id:"lastName",type:"text",placeholder:"Введіть прізвище",value:h,onChange:i=>x(i.target.value)})]}),t.jsxs(a,{children:[t.jsx(p,{htmlFor:"patronymic",children:"По батькові"}),t.jsx(m,{id:"patronymic",type:"text",placeholder:"Введіть по батькові",value:l,onChange:i=>w(i.target.value)})]})]})]})]}),t.jsxs(ye,{children:[t.jsx(Ge,{children:t.jsxs(E,{children:[t.jsx(k,{children:t.jsxs(a,{children:[t.jsx(p,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(z,{children:t.jsx(S,{selectedDate:g,onDateChange:b})})]})}),t.jsx(k,{children:t.jsxs(a,{children:[t.jsx(p,{htmlFor:"address",children:"Адреса"}),t.jsx(m,{id:"address",type:"text",value:$,onChange:i=>u(i.target.value),placeholder:"Введіть адресу"})]})}),t.jsx(k,{children:t.jsx(pe,{label:"Виберіть стать",value:c,onChange:v})})]})}),t.jsxs(Ie,{children:[t.jsx(Be,{children:"Контакти"}),t.jsxs(E,{children:[t.jsx(k,{children:t.jsxs(a,{children:[t.jsx(p,{htmlFor:"phone",children:"Телефон"}),t.jsx(m,{id:"phone",type:"tel",value:C,onChange:i=>f(i.target.value),placeholder:"Введіть номер телефону"})]})}),t.jsx(k,{children:t.jsxs(a,{children:[t.jsx(p,{htmlFor:"email",children:"Email"}),t.jsx(m,{id:"email",type:"email",value:j,onChange:i=>F(i.target.value),placeholder:"Введіть email"})]})}),t.jsx(k,{children:t.jsxs(a,{children:[t.jsx(p,{htmlFor:"socialMedia",children:"Соцмережі"}),t.jsx(m,{id:"socialMedia",type:"text",value:L,onChange:i=>P(i.target.value),placeholder:"Введіть посилання на соцмережі"})]})})]})]})]}),t.jsx(B,{helpTooltiptitle:"Ці параметри не є обов'язковими, але вони допомагають отримати детальнішу статистику 📊",helpTooltip:"Додайте перший замір щоб відстежувати зміни спортсмена. Після створення профілю спортсмена ви зможете додавати нові заміри та повністю керувати ними 😊",top:"-700%",left:"-310%",title:"Фізичні дані",children:t.jsxs(M,{hasphysique:!0,children:[t.jsxs(a,{children:[t.jsx(p,{htmlFor:"height",children:"Зріст у м."}),t.jsx(m,{id:"height",type:"number",min:"0",max:"4",placeholder:"Введіть зріст у м.",step:"0.1",value:T,onChange:i=>W(i.target.value)})]}),t.jsxs(a,{children:[t.jsx(p,{htmlFor:"weight",children:"Вага у кг."}),t.jsx(m,{id:"weight",min:"0",max:"400",step:"0.1",placeholder:"Введіть вагу у кг.",type:"number",value:N,onChange:i=>D(i.target.value)})]}),t.jsxs(a,{children:[t.jsx(p,{htmlFor:"dateOfMeasurement",children:"Дата вимірювання"}),t.jsx(z,{children:t.jsx(S,{selectedDate:R,onDateChange:H})})]})]})}),t.jsx(B,{title:"Спортивна інформація",children:"Будь-який контент"}),t.jsx(je,{children:t.jsx(ve,{type:"submit",children:"Створити"})})]})})})};export{Oe as default};
