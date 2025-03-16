import{r,d as o,j as t,b as $}from"./index-6157a231.js";import{S as j,C as k}from"./CustomDatePicker-f95de260.js";import{p as y}from"./PlaceholderProfile-3c1b0d36.js";const v=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6 9L12 15L18 9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),C=o.div`
    margin: 20px 0;
    border: 1.7px solid ${({theme:e})=>e.greenMain};
    border-radius: 8px;
    overflow: hidden;
    background-color: ${({theme:e})=>e.ContainerBGColor}; 

    ${({isOpen:e})=>!e&&`
      border-radius: 8px 8px 0 0;
    `}

     &:hover {
       border-color: ${({theme:e})=>e.lightGreen}; 
    }
  `,w=o(v)`
    stroke: ${e=>e.theme.white};
    width: 24px;
    height: 24px;
    margin-left: auto;
    transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
    transition: transform 0.3s ease;
  `,G=o.div`
    background-color: ${({theme:e})=>e.greenMain}; 
    padding: 8px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({theme:e})=>e.lightGreen}; 

      ${w} {
        stroke: ${({theme:e})=>e.ContainerBGColor}; 
      }
    }

    @media (min-width: 768px) {
      padding: 10px 20px;
    }
  `,I=o.div`
  padding: 0 20px;
  max-height: ${({isOpen:e})=>e?"1000px":"0"};
  opacity: ${({isOpen:e})=>e?"1":"0"};
  overflow: hidden;
  transition: 
    max-height ${({isOpen:e})=>e?"0.8s":"0.4s"} ease-in-out,
    opacity ${({isOpen:e})=>e?"0.8s":"0.4s"} ease-in-out;
`,B=o.h3`
  color: ${({theme:e})=>e.white};
  font-size: 22px; 
  font-weight: 600;
  margin: 0;
  line-height: 1.2; 
  max-height: 22px;  
  overflow: hidden; 
`,S=({children:e,title:l})=>{const[n,h]=r.useState(!1),[a,m]=r.useState(!1),d=r.useRef(null),p=r.useRef(!1),u=()=>{h(s=>(a||m(!0),!s))};return r.useEffect(()=>{const s=new IntersectionObserver(([f])=>{!a&&f.isIntersecting&&!p.current&&f.intersectionRatio>=1&&(setTimeout(()=>{h(!0)},200),p.current=!0)},{threshold:1,rootMargin:"0px 0px -100px 0px"});return d.current&&s.observe(d.current),()=>{d.current&&s.unobserve(d.current)}},[a]),t.jsxs(C,{ref:d,isOpen:n,children:[t.jsxs(G,{onClick:u,children:[l&&t.jsx(B,{children:l}),t.jsx(w,{isOpen:n,children:"▾"})]}),t.jsx(I,{isOpen:n,children:e})]})},T=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,F=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:l,name:n})=>l&&n==="username"?e.red:e.borderColor};
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
`,L=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`,x=({id:e,name:l,placeholder:n="-",labelText:h="-",maxLength:a=0})=>t.jsxs(L,{children:[t.jsx(T,{htmlFor:e,children:h}),t.jsx(F,{id:e,name:l,placeholder:n,maxLength:a})]}),i={mobile:"320px",tablet:"768px",desktop:"1024px"},P=o.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  overflow-y: auto;

  @media (min-width: ${i.tablet}) {
    align-items: flex-start;
    height: 100%;
  }
`,z=o.form`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${i.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${i.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }
`,N=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  @media (min-width: ${i.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 50px;
  }
`,M=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  
  @media (min-width: ${i.tablet}) {
    width: auto;
    margin-right: 3.8rem;
    margin-bottom: 0;
    justify-content: flex-start;
    align-self: center; 
  }

   @media (min-width: ${i.desktop}) {
    margin-right: 2rem;
  }
`,O=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${i.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,E=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,W=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,R=o.label`
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

  @media (min-width: ${i.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,D=o.input`
  display: none;
`,A=o.div`
  flex: 1;
  
  @media (min-width: ${i.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center; 
  }
`,H=o.h2`
  color: ${({theme:e})=>e.greenMain};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`,U=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: ${i.tablet}) {
    flex-direction: column;
  }
  
  @media (min-width: ${i.desktop}) {
    flex-direction: row;
    gap: 1.5rem;
  }
`,g=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,c=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,b=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:l,name:n})=>l&&n==="username"?e.red:e.borderColor};
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
`,q=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,J=o.button`
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
`,K=o(j)`
  fill: ${e=>e.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${i.tablet}) {
    width: 18px;
    height: 18px;
  }
`,Q=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`,Z=()=>{const{setTitle:e}=$();r.useState(!1);const[l,n]=r.useState(""),[h,a]=r.useState(""),[m,d]=r.useState(""),[p,u]=r.useState("");return r.useEffect(()=>{e("Створення нового спортсмена")},[e]),t.jsx(t.Fragment,{children:t.jsx(P,{children:t.jsxs(z,{children:[t.jsxs(N,{children:[t.jsx(M,{children:t.jsxs(O,{children:[t.jsx(E,{children:t.jsx(W,{src:y,alt:"Фото спортсмена"})}),t.jsx(R,{htmlFor:"photo-upload",children:t.jsx(K,{})}),t.jsx(D,{id:"photo-upload",type:"file",loading:"lazy",accept:"image/jpeg,image/jpg,image/png,image/webp"})]})}),t.jsxs(A,{children:[t.jsx(H,{children:"Особиста інформація"}),t.jsxs(U,{children:[t.jsxs(g,{children:[t.jsx(c,{htmlFor:"firstName",children:"Ім'я"}),t.jsx(b,{id:"firstName",type:"text",value:l,onChange:s=>n(s.target.value)})]}),t.jsxs(g,{children:[t.jsx(c,{htmlFor:"lastName",children:"Прізвище"}),t.jsx(b,{id:"lastName",type:"text",value:h,onChange:s=>a(s.target.value)})]}),t.jsxs(g,{children:[t.jsx(c,{htmlFor:"patronymic",children:"По батькові"}),t.jsx(b,{id:"patronymic",type:"text",value:m,onChange:s=>d(s.target.value)})]})]})]})]}),t.jsx(x,{id:"sportType",name:"sportType",placeholder:"Введіть вид спорту",labelText:"Вид спорту",maxLength:30}),t.jsx(c,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(x,{id:"sportType",name:"sportType",placeholder:"Введіть вид спорту",labelText:"Вид спорту",maxLength:30}),t.jsx(c,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(x,{id:"sportType",name:"sportType",placeholder:"Введіть вид спорту",labelText:"Вид спорту",maxLength:30}),t.jsx(c,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(x,{id:"sportType",name:"sportType",placeholder:"Введіть вид спорту",labelText:"Вид спорту",maxLength:30}),t.jsx(c,{htmlFor:"birthdate",children:"Дата народження"}),t.jsx(Q,{children:t.jsx(k,{selectedDate:p,onDateChange:u})}),t.jsxs(S,{title:"Test",children:["Будь-який контент",t.jsx("p",{children:" Будь-який контент"}),t.jsx("p",{children:" Будь-який контент"}),t.jsx("p",{children:" Будь-який контент"}),t.jsx("p",{children:" Будь-який контент"}),t.jsx("p",{children:" Будь-який контент"}),t.jsx("p",{children:" Будь-який контент"})]}),t.jsx(q,{children:t.jsx(J,{type:"submit",children:"Створити"})})]})})})};export{Z as default};
