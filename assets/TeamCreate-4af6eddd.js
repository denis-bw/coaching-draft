import{d as o,b as D,a as P,r as s,k as J,l as T,j as t,i as Q,L as O,N as X,u as Y,m as Z,n as F,y as N,o as ee}from"./index-134eba29.js";import{P as te}from"./PlaceholderTeam-7b26a08e.js";import{S as oe}from"./CreateIcon-a16904d4.js";import{p as ie}from"./PlaceholderProfile-3c1b0d36.js";import{S as re,u as ne,N as ae}from"./CameraIcon-8ceefbdc.js";const se=({onAthletesSelect:e})=>{const n=D(),{entities:A,list:$,loading:c,hasMore:h,currentPage:x,isAllDataLoaded:p}=P(i=>i.athletes),[I,u]=s.useState(new Set),[g,f]=s.useState([]),b=s.useRef(null),m=s.useRef(!1),w=s.useRef(!1);s.useEffect(()=>{n(J());const i=setTimeout(()=>{m.current=!0,n(T({page:1,filter:"withoutTeam"}))},50);return()=>clearTimeout(i)},[n]);const k=s.useCallback(()=>{!h||c||w.current||p||(w.current=!0,n(T({page:x,filter:"withoutTeam"})).finally(()=>{w.current=!1}))},[n,h,c,x,p]),C=s.useCallback(()=>{if(!(c||!h||w.current||p)&&b.current){const{scrollTop:i,scrollHeight:r,clientHeight:v}=b.current;i+v>=r-20&&k()}},[h,c,k,p]);s.useEffect(()=>{const i=b.current;if(i)return i.addEventListener("scroll",C),()=>i.removeEventListener("scroll",C)},[C]),s.useEffect(()=>{e&&e(g)},[g,e]);const y=i=>{f(r=>r.includes(i)?r.filter(v=>v!==i):[...r,i])},j=$.map(i=>{const r=A[i];return r?{id:r._id||r.id,name:`${r.lastName} ${r.firstName} ${r.patronymic||""}`.trim(),photo:r.photo,isSelected:g.includes(r._id||r.id)}:null}).filter(Boolean),B=i=>{u(r=>new Set(r).add(i))};return t.jsx(ce,{children:t.jsxs(he,{children:[t.jsx(pe,{children:t.jsxs(ue,{children:[t.jsx(de,{children:"Додайте в команду"}),g.length>0&&t.jsxs(ge,{children:["Обрано: ",g.length]})]})}),t.jsx(fe,{children:t.jsxs(me,{ref:b,children:[j.length>0?j.map(i=>t.jsx(Ce,{className:"athlete-item",id:`athlete-${i.id}`,children:t.jsxs(je,{to:`/athletes/${i.id}`,onClick:r=>{r.preventDefault(),y(i.id)},$isSelected:i.isSelected,children:[t.jsx(xe,{children:t.jsx(be,{loading:"lazy",src:I.has(i.id)?Q:i.photo||ie,onError:()=>B(i.id),alt:i.name})}),t.jsx(we,{children:t.jsx(ve,{children:i.name})}),t.jsx(H,{children:t.jsx(le,{})})]})},i.id)):c?null:t.jsx($e,{children:"Спортсменів не знайдено"}),c&&t.jsx(ke,{children:t.jsx(O,{})})]})})]})})},le=o(oe)`
  width: 18px;
  height: 18px;
  fill: ${e=>e.theme.iconColor};
`,de=o.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  height: auto;
`,ce=o.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 500px;
`,he=o.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.greenMain};
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,pe=o.div`
  padding: 12px 16px;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  position: relative;
`,ue=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,ge=o.div`
  background-color: ${({theme:e})=>e.white};
  color: ${({theme:e})=>e.greenMain};
  padding: 3px 10px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
`,fe=o.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`,me=o.div`
  height: 100%;
  max-height: 350px;
  overflow-y: auto;
  padding: 0 12px 12px 12px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.disabledBG};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.greenMain};
    border-radius: 10px;
  }
`,xe=o.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  position: relative;
  overflow: hidden;
`,be=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,we=o.div`
  padding: 0 10px;
  overflow: hidden;
`,ve=o.div`
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,H=o.div`
  color: ${({theme:e})=>e.textGray};
  display: flex;
  justify-content: flex-end;
`,$e=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({theme:e})=>e.textGray};
  font-size: 13px;
`,ke=o.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,Ce=o.div`
  width: 100%;
`,je=o(X)`
  display: grid;
  grid-template-columns: 32px 1fr 18px;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({$isSelected:e,theme:n})=>e?n.greenMain:n.disabledBG};
  color: ${({$isSelected:e,theme:n})=>e?n.white:n.textBlack};
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({$isSelected:e,theme:n})=>e?n.greenMain:n.greenMain+"cc"};
    color: white;
    
    ${H} {
      color: white;
    }
  }
`,d={mobile:"320px",desktop:"1024px"},ye=o.div`
  position: sticky; 
  left: 0; 
  right: 0;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
`,Se=o.div`
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  
  background: ${({blurred:e})=>e?"rgba(255, 255, 255, 0.2)":"transparent"};
  backdrop-filter: ${({blurred:e})=>e?"blur(10px)":"none"};
  -webkit-backdrop-filter: ${({blurred:e})=>e?"blur(10px)":"none"};
  filter: ${({blurred:e})=>e?"blur(3px)":"none"};
  pointer-events: ${({blurred:e})=>e?"none":"auto"};
  border-radius: 16px;
  box-shadow: ${({blurred:e})=>e?"0 4px 30px rgba(0, 0, 0, 0.1)":"none"};

  @media (min-width: ${d.desktop}) {
    align-items: flex-start;
    height: 100%;
  }
`,Ae=o.div`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${d.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${d.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }
`,Ie=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  
  @media (min-width: ${d.desktop}) {
    flex-direction: row;
    gap: 20px;
  }
`,Be=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media (min-width: ${d.desktop}) {
    margin-bottom: 0;
  }
`,Ee=o.div`
  flex: 1;
  min-height: 300px;
  background-color: ${({theme:e})=>e.ContainerBGColor||"#f8f8f8"};
  border-radius: 8px;
  
  @media (max-width: ${d.desktop}) {
    min-height: 200px;
  }
`;o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  
  @media (min-width: ${d.desktop}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`;const Ge=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  
  @media (min-width: ${d.desktop}) {
    justify-content: center;
  }
`,Ne=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${d.desktop}) {
    width: 8rem;
    height: 8rem;
  }
`,Pe=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white||"#fff"};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor||"#e0e0e0"};
`,Le=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Te=o.label`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  color: ${({theme:e})=>e.white||"#fff"};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 2px solid ${({theme:e})=>e.white||"#fff"};
  outline: none;

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen||"#388E3C"};
    box-shadow: 0 0 0 4px ${({theme:e})=>e.greenMain||"#4CAF50"}, 0 0 0 6px ${({theme:e})=>e.white||"#fff"};
  }

  &:focus-visible {
    background-color: ${({theme:e})=>e.darkGreen||"#388E3C"};
    box-shadow: 0 0 0 4px ${({theme:e})=>e.greenMain||"#4CAF50"}, 0 0 0 6px ${({theme:e})=>e.white||"#fff"};
  }
  
  @media (min-width: ${d.desktop}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,Fe=o.input`
  display: none;
`;o.div`
  flex: 1;
`;const Re=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,R=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,M=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textBlack};
  font-size: 0.875rem;
  font-weight: 500;
`,z=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,isError:n})=>n?e.red||"#F44336":e.borderColor||"#e0e0e0"};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({theme:e})=>e.ContainerBGColor||"#f8f8f8"};
  color: ${({theme:e})=>e.textBlack||"#212121"};
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.lightGreen||"#8BC34A"};
    box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt((e.lightGreen||"#8BC34A").slice(1,3),16)}, 
      ${parseInt((e.lightGreen||"#8BC34A").slice(3,5),16)}, 
      ${parseInt((e.lightGreen||"#8BC34A").slice(5,7),16)}, 0.5)`};
  }

  &::placeholder {
    color: ${({theme:e})=>e.textGray||"#9e9e9e"};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 30px ${({theme:e})=>e.ContainerBGColor||"#f8f8f8"} inset;
    -webkit-text-fill-color: ${({theme:e})=>e.textBlack||"#212121"};
    transition: background-color 5000s ease-in-out 0s;
    border-color: ${({theme:e})=>e.lightGreen||"#8BC34A"};
  }

  &:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    border-color: ${({theme:e})=>e.red||"#F44336"};
  }

  &:focus:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt((e.red||"#F44336").slice(1,3),16)}, 
      ${parseInt((e.red||"#F44336").slice(3,5),16)}, 
      ${parseInt((e.red||"#F44336").slice(5,7),16)}, 0.5)`};
  }
  
&:disabled {
  background-color: ${({theme:e})=>e.disabledBG};
  color: ${({theme:e})=>e.textGray};
  cursor: not-allowed;
}

`,Me=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`,ze=o.button`
  max-width: 500px;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  color: ${({theme:e})=>e.white||"#fff"};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen||"#388E3C"};
  }

  &:focus {
    outline: none;
    background-color: ${({theme:e})=>e.darkGreen||"#388E3C"};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG||"#e0e0e0"};
    cursor: not-allowed;
    color: ${({theme:e})=>e.textGray};
  }
`,De=o(re)`
  fill: ${e=>e.theme.white||"#fff"};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${d.desktop}) {
    width: 18px;
    height: 18px;
  }
`,Ve=()=>{const{setTitle:e}=Y(),n=D(),A=Z(),{createTeamStatus:$,createTeamError:c}=P(a=>a.teams),h=P(a=>a.teams),x=$==="loading",[p,I]=s.useState(null),[u,g]=s.useState(null),[f,b]=s.useState(""),[m,w]=s.useState(""),[k,C]=s.useState([]),[y,j]=s.useState({teamName:!1,ageCategory:!1}),[B,i]=s.useState(!1),[r,v,W]=ne(B),E=s.useRef(!1),L=Object.values(y).some(Boolean)||!f.trim()||!m.trim();s.useEffect(()=>{const a=p!==null,l=u!==null,S=f!=="",G=m!=="",q=k.length>0;i(!!(a||l||S||G||q))},[p,u,f,m,k]),s.useEffect(()=>(e("Створення команди"),()=>{u&&URL.revokeObjectURL(u),n(F())}),[e,n,u]),s.useEffect(()=>{if($==="succeeded"&&h.teams.length>0){const a=h.teams[0];N.success("Команду успішно створено!"),E.current=!0,i(!1),I(null),g(null),b(""),w(""),C([]),A(`/teams/${a.id}`),n(F())}$==="failed"&&c&&N.error(c)},[$,c,A,n,h.teams]),s.useEffect(()=>{E.current&&r&&(v(),E.current=!1)},[r,v]);const U=a=>{const l=a.target.files[0];if(l){I(l);const S=URL.createObjectURL(l);g(S)}},K=a=>{if(a.key==="Enter"||a.key===" "){const l=document.getElementById("photo-upload");l&&l.click()}},V=a=>{C(a)},_=a=>{a.preventDefault();const l={teamName:!f.trim(),ageCategory:!m.trim()},S=!Object.values(l).some(G=>G);if(j(l),!S){N.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});return}n(ee({name:f,ageCategory:m,photo:p,athleteIds:k}))};return t.jsxs(t.Fragment,{children:[x&&t.jsx(ye,{children:t.jsx(O,{})}),t.jsx(Se,{blurred:x,children:t.jsxs(Ae,{children:[t.jsxs(Ie,{children:[t.jsxs(Be,{children:[t.jsx(Ge,{children:t.jsxs(Ne,{children:[t.jsx(Pe,{children:t.jsx(Le,{src:u||te,alt:"Фото команди"})}),t.jsx(Te,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:K,children:t.jsx(De,{})}),t.jsx(Fe,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:U})]})}),t.jsxs(Re,{children:[t.jsxs(R,{children:[t.jsx(M,{htmlFor:"teamName",children:"Назва команди *"}),t.jsx(z,{id:"teamName",type:"text",placeholder:"Введіть назву команди",value:f,onChange:a=>{b(a.target.value),a.target.value.trim()&&j(l=>({...l,teamName:!1}))},isError:y.teamName})]}),t.jsxs(R,{children:[t.jsx(M,{htmlFor:"ageCategory",children:"Вікова категорія *"}),t.jsx(z,{id:"ageCategory",type:"text",placeholder:"Введіть вікову категорію",value:m,onChange:a=>{w(a.target.value),a.target.value.trim()&&j(l=>({...l,ageCategory:!1}))},isError:y.ageCategory})]})]})]}),t.jsx(Ee,{children:t.jsx(se,{onAthletesSelect:V})})]}),t.jsx(Me,{children:t.jsx(ze,{type:"button",onClick:_,disabled:x||L,children:x?"Створення...":L?"Заповніть обов'язкові поля":"Створити команду"})})]})}),t.jsx(ae,{isOpen:r,onConfirm:v,onCancel:W})]})};export{Ve as default};
