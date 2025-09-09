import{d as o,b as D,a as N,r as s,i as J,k as T,j as t,L as O,N as Q,u as X,l as Y,m as F,y as G,n as Z}from"./index-8def2ee6.js";import{P as ee}from"./PlaceholderTeam-7b26a08e.js";import{S as te}from"./CreateIcon-076d3469.js";import{p as oe}from"./PlaceholderProfile-3c1b0d36.js";import{S as ie,u as re,N as ne}from"./CameraIcon-7144a44a.js";const ae=({onAthletesSelect:e})=>{const r=D(),{entities:S,list:v,loading:c,hasMore:p,currentPage:x,isAllDataLoaded:u}=N(i=>i.athletes),[f,g]=s.useState([]),b=s.useRef(null),m=s.useRef(!1),w=s.useRef(!1);s.useEffect(()=>{r(J());const i=setTimeout(()=>{m.current=!0,r(T({page:1,filter:"withoutTeam"}))},50);return()=>clearTimeout(i)},[r]);const h=s.useCallback(()=>{!p||c||w.current||u||(w.current=!0,r(T({page:x,filter:"withoutTeam"})).finally(()=>{w.current=!1}))},[r,p,c,x,u]),$=s.useCallback(()=>{if(!(c||!p||w.current||u)&&b.current){const{scrollTop:i,scrollHeight:a,clientHeight:j}=b.current;i+j>=a-20&&h()}},[p,c,h,u]);s.useEffect(()=>{const i=b.current;if(i)return i.addEventListener("scroll",$),()=>i.removeEventListener("scroll",$)},[$]),s.useEffect(()=>{e&&e(f)},[f,e]);const k=i=>{g(a=>a.includes(i)?a.filter(j=>j!==i):[...a,i])},C=v.map(i=>{const a=S[i];return a?{id:a._id||a.id,name:`${a.lastName} ${a.firstName} ${a.patronymic||""}`.trim(),photo:a.photo,isSelected:f.includes(a._id||a.id)}:null}).filter(Boolean);return t.jsx(de,{children:t.jsxs(ce,{children:[t.jsx(he,{children:t.jsxs(pe,{children:[t.jsx(le,{children:"Додайте в команду"}),f.length>0&&t.jsxs(ue,{children:["Обрано: ",f.length]})]})}),t.jsx(fe,{children:t.jsxs(ge,{ref:b,children:[C.length>0?C.map(i=>t.jsx(ke,{className:"athlete-item",id:`athlete-${i.id}`,children:t.jsxs(Ce,{to:`/athletes/${i.id}`,onClick:a=>{a.preventDefault(),k(i.id)},$isSelected:i.isSelected,children:[t.jsx(me,{children:t.jsx(xe,{loading:"lazy",src:i.photo||oe})}),t.jsx(be,{children:t.jsx(we,{children:i.name})}),t.jsx(H,{children:t.jsx(se,{})})]})},i.id)):c?null:t.jsx(ve,{children:"Спортсменів не знайдено"}),c&&t.jsx($e,{children:t.jsx(O,{})})]})})]})})},se=o(te)`
  width: 18px;
  height: 18px;
  fill: ${e=>e.theme.iconColor};
`,le=o.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  height: auto;
`,de=o.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 500px;
`,ce=o.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.greenMain};
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,he=o.div`
  padding: 12px 16px;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  position: relative;
`,pe=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,ue=o.div`
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
`,ge=o.div`
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
`,me=o.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  position: relative;
  overflow: hidden;
`,xe=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,be=o.div`
  padding: 0 10px;
  overflow: hidden;
`,we=o.div`
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,H=o.div`
  color: ${({theme:e})=>e.textGray};
  display: flex;
  justify-content: flex-end;
`,ve=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({theme:e})=>e.textGray};
  font-size: 13px;
`,$e=o.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,ke=o.div`
  width: 100%;
`,Ce=o(Q)`
  display: grid;
  grid-template-columns: 32px 1fr 18px;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({$isSelected:e,theme:r})=>e?r.greenMain:r.disabledBG};
  color: ${({$isSelected:e,theme:r})=>e?r.white:r.textBlack};
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({$isSelected:e,theme:r})=>e?r.greenMain:r.greenMain+"cc"};
    color: white;
    
    ${H} {
      color: white;
    }
  }
`,d={mobile:"320px",desktop:"1024px"},je=o.div`
  position: sticky; 
  left: 0; 
  right: 0;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
`,ye=o.div`
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
`,Se=o.div`
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
`,Ae=o.div`
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
`,Ie=o.div`
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
`;const Ee=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  
  @media (min-width: ${d.desktop}) {
    justify-content: center;
  }
`,Pe=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${d.desktop}) {
    width: 8rem;
    height: 8rem;
  }
`,Ge=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white||"#fff"};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor||"#e0e0e0"};
`,Ne=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Le=o.label`
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
`,Te=o.input`
  display: none;
`;o.div`
  flex: 1;
`;const Fe=o.div`
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
  border: 1.6px solid ${({theme:e,isError:r})=>r?e.red||"#F44336":e.borderColor||"#e0e0e0"};
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

`,Re=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`,Me=o.button`
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
  }
`,ze=o(ie)`
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
`,Ke=()=>{const{setTitle:e}=X(),r=D(),S=Y(),{createTeamStatus:v,createTeamError:c}=N(n=>n.teams),p=N(n=>n.teams),x=v==="loading",[u,f]=s.useState(null),[g,b]=s.useState(null),[m,w]=s.useState(""),[h,$]=s.useState(""),[k,C]=s.useState([]),[i,a]=s.useState({teamName:!1,ageCategory:!1}),[j,A]=s.useState(!1),[B,I,W]=re(j),E=s.useRef(!1),L=Object.values(i).some(Boolean)||!m.trim()||!h.trim();s.useEffect(()=>{const n=u!==null,l=g!==null,y=m!=="",P=h!=="",q=k.length>0;A(!!(n||l||y||P||q))},[u,g,m,h,k]),s.useEffect(()=>(e("Створення команди"),()=>{g&&URL.revokeObjectURL(g),r(F())}),[e,r,g]),s.useEffect(()=>{if(v==="succeeded"&&p.teams.length>0){const n=p.teams[0];G.success("Команду успішно створено!"),E.current=!0,A(!1),f(null),b(null),w(""),$(""),C([]),S(`/teams/${n.id}`),r(F())}v==="failed"&&c&&G.error(c)},[v,c,S,r,p.teams]),s.useEffect(()=>{E.current&&B&&(I(),E.current=!1)},[B,I]);const U=n=>{const l=n.target.files[0];if(l){f(l);const y=URL.createObjectURL(l);b(y)}},K=n=>{if(n.key==="Enter"||n.key===" "){const l=document.getElementById("photo-upload");l&&l.click()}},V=n=>{C(n)},_=n=>{n.preventDefault();const l={teamName:!m.trim(),ageCategory:!h.trim()},y=!Object.values(l).some(P=>P);if(a(l),!y){G.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});return}r(Z({name:m,ageCategory:h,photo:u,athleteIds:k}))};return t.jsxs(t.Fragment,{children:[x&&t.jsx(je,{children:t.jsx(O,{})}),t.jsx(ye,{blurred:x,children:t.jsxs(Se,{children:[t.jsxs(Ae,{children:[t.jsxs(Be,{children:[t.jsx(Ee,{children:t.jsxs(Pe,{children:[t.jsx(Ge,{children:t.jsx(Ne,{src:g||ee,alt:"Фото команди"})}),t.jsx(Le,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:K,children:t.jsx(ze,{})}),t.jsx(Te,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:U})]})}),t.jsxs(Fe,{children:[t.jsxs(R,{children:[t.jsx(M,{htmlFor:"teamName",children:"Назва команди *"}),t.jsx(z,{id:"teamName",type:"text",placeholder:"Введіть назву команди",value:m,onChange:n=>{w(n.target.value),n.target.value.trim()&&a(l=>({...l,teamName:!1}))},isError:i.teamName})]}),t.jsxs(R,{children:[t.jsx(M,{htmlFor:"ageCategory",children:"Вікова категорія *"}),t.jsx(z,{id:"ageCategory",type:"text",placeholder:"Введіть вікову категорію",value:h,onChange:n=>{$(n.target.value),n.target.value.trim()&&a(l=>({...l,ageCategory:!1}))},isError:i.ageCategory})]})]})]}),t.jsx(Ie,{children:t.jsx(ae,{onAthletesSelect:V})})]}),t.jsx(Re,{children:t.jsx(Me,{type:"button",onClick:_,disabled:x||L,children:x?"Створення...":L?"Заповніть обов'язкові поля":"Створити команду"})})]})}),t.jsx(ne,{isOpen:B,onConfirm:I,onCancel:W})]})};export{Ke as default};
