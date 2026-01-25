import{d as o,b as U,a as L,r as s,k as Y,l as F,j as t,i as Z,L as H,N as ee,u as te,m as oe,n as M,y as G,o as ie}from"./index-2c318999.js";import{P as N}from"./PlaceholderTeam-7b26a08e.js";import{S as re}from"./CreateIcon-25deeab2.js";import{p as ne}from"./PlaceholderProfile-3c1b0d36.js";import{a as ae,S as se,u as le,N as de}from"./minus-eda8bfaa.js";const ce=({onAthletesSelect:e})=>{const a=U(),{entities:I,list:v,loading:h,hasMore:u,currentPage:x,isAllDataLoaded:f}=L(i=>i.athletes),[j,d]=s.useState(new Set),[p,g]=s.useState([]),b=s.useRef(null),m=s.useRef(!1),w=s.useRef(!1);s.useEffect(()=>{a(Y());const i=setTimeout(()=>{m.current=!0,a(F({page:1,filter:"withoutTeam"}))},50);return()=>clearTimeout(i)},[a]);const $=s.useCallback(()=>{!u||h||w.current||f||(w.current=!0,a(F({page:x,filter:"withoutTeam"})).finally(()=>{w.current=!1}))},[a,u,h,x,f]),C=s.useCallback(()=>{if(!(h||!u||w.current||f)&&b.current){const{scrollTop:i,scrollHeight:n,clientHeight:k}=b.current;i+k>=n-20&&$()}},[u,h,$,f]);s.useEffect(()=>{const i=b.current;if(i)return i.addEventListener("scroll",C),()=>i.removeEventListener("scroll",C)},[C]),s.useEffect(()=>{e&&e(p)},[p,e]);const S=i=>{g(n=>n.includes(i)?n.filter(k=>k!==i):[...n,i])},y=v.map(i=>{const n=I[i];return n?{id:n._id||n.id,name:`${n.lastName} ${n.firstName} ${n.patronymic||""}`.trim(),photo:n.photo,isSelected:p.includes(n._id||n.id)}:null}).filter(Boolean),B=i=>{d(n=>new Set(n).add(i))};return t.jsx(ue,{children:t.jsxs(fe,{children:[t.jsx(ge,{children:t.jsxs(me,{children:[t.jsx(pe,{children:"Додайте в команду"}),p.length>0&&t.jsxs(xe,{children:["Обрано: ",p.length]})]})}),t.jsx(be,{children:t.jsxs(we,{ref:b,children:[y.length>0?y.map(i=>t.jsx(Se,{className:"athlete-item",id:`athlete-${i.id}`,children:t.jsxs(Ae,{to:`/athletes/${i.id}`,onClick:n=>{n.preventDefault(),S(i.id)},$isSelected:i.isSelected,children:[t.jsx(ke,{children:t.jsx(ve,{loading:"lazy",src:j.has(i.id)?Z:i.photo||ne,onError:()=>B(i.id),alt:i.name})}),t.jsx($e,{children:t.jsx(Ce,{children:i.name})}),t.jsx(W,{children:t.jsx(he,{})})]})},i.id)):h?null:t.jsx(ye,{children:"Спортсменів не знайдено"}),h&&t.jsx(je,{children:t.jsx(H,{})})]})})]})})},he=o(re)`
  width: 18px;
  height: 18px;
  fill: ${e=>e.theme.iconColor};
`,pe=o.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  height: auto;
`,ue=o.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 500px;
`,fe=o.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.greenMain};
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,ge=o.div`
  padding: 12px 16px;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  position: relative;
`,me=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,xe=o.div`
  background-color: ${({theme:e})=>e.white};
  color: ${({theme:e})=>e.greenMain};
  padding: 3px 10px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
`,be=o.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`,we=o.div`
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
`,ke=o.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  position: relative;
  overflow: hidden;
`,ve=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,$e=o.div`
  padding: 0 10px;
  overflow: hidden;
`,Ce=o.div`
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,W=o.div`
  color: ${({theme:e})=>e.textGray};
  display: flex;
  justify-content: flex-end;
`,ye=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({theme:e})=>e.textGray};
  font-size: 13px;
`,je=o.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,Se=o.div`
  width: 100%;
`,Ae=o(ee)`
  display: grid;
  grid-template-columns: 32px 1fr 18px;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({$isSelected:e,theme:a})=>e?a.greenMain:a.disabledBG};
  color: ${({$isSelected:e,theme:a})=>e?a.white:a.textBlack};
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({$isSelected:e,theme:a})=>e?a.greenMain:a.greenMain+"cc"};
    color: white;
    
    ${W} {
      color: white;
    }
  }
`,c={mobile:"320px",desktop:"1024px"},Ie=o.div`
  position: sticky; 
  left: 0; 
  right: 0;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
`,Be=o.div`
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

  @media (min-width: ${c.desktop}) {
    align-items: flex-start;
    height: 100%;
  }
`,Ee=o.div`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${c.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${c.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }
`,Pe=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  
  @media (min-width: ${c.desktop}) {
    flex-direction: row;
    gap: 20px;
  }
`,Ge=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media (min-width: ${c.desktop}) {
    margin-bottom: 0;
  }
`,Ne=o.div`
  flex: 1;
  min-height: 300px;
  background-color: ${({theme:e})=>e.ContainerBGColor||"#f8f8f8"};
  border-radius: 8px;
  
  @media (max-width: ${c.desktop}) {
    min-height: 200px;
  }
`;o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  
  @media (min-width: ${c.desktop}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`;const Le=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  
  @media (min-width: ${c.desktop}) {
    justify-content: center;
  }
`,Te=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${c.desktop}) {
    width: 8rem;
    height: 8rem;
  }
`,Re=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white||"#fff"};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor||"#e0e0e0"};
`,Fe=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Me=o.label`
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
  
  @media (min-width: ${c.desktop}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,De=o.input`
  display: none;
`;o.div`
  flex: 1;
`;const ze=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,D=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,z=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textBlack};
  font-size: 0.875rem;
  font-weight: 500;
`,O=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,isError:a})=>a?e.red||"#F44336":e.borderColor||"#e0e0e0"};
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

`,Oe=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`,Ue=o.button`
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
`,He=o(ae)`
  fill: ${e=>e.theme.white||"#fff"};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${c.desktop}) {
    width: 18px;
    height: 18px;
  }
`,We=o.button`
  position: absolute;
  top: -0.3rem;
  right: -0.3rem;
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.mode==="dark"?"#e0e0e0":"#343434"};
  border: 2px solid
    ${({theme:e})=>e.mode==="dark"?"#e0e0e0":"#343434"};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.2s ease;
  will-change: transform;

  &:hover {
    background-color: ${({theme:e})=>e.mode==="dark"?"#ffffff":"#555555"};
    box-shadow: ${({theme:e})=>e.mode==="dark"?"0 0 0 4px rgba(255, 255, 255, 0.6), 0 2px 8px rgba(0, 0, 0, 0.3)":"0 0 0 4px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.35)"};
    transform: scale(1.05);
  }

  @media (min-width: ${c.desktop}) {
    width: 2rem;
    height: 2rem;
  }
`,Ke=o(se)`
  fill: ${({theme:e})=>e.mode==="dark"?"#343434":"#ffffff"};
  width: 12px;
  height: 12px;
  transform: rotate(180deg);

  @media (min-width: ${c.desktop}) {
    width: 14px;
    height: 14px;
  }
`,Xe=()=>{const{setTitle:e}=te(),a=U(),I=oe(),{createTeamStatus:v,createTeamError:h}=L(r=>r.teams),u=L(r=>r.teams),x=v==="loading",[f,j]=s.useState(null),[d,p]=s.useState(null),[g,b]=s.useState(""),[m,w]=s.useState(""),[$,C]=s.useState([]),[S,y]=s.useState({teamName:!1,ageCategory:!1}),[B,i]=s.useState(!1),[n,k,K]=le(B),E=s.useRef(!1),T=Object.values(S).some(Boolean)||!g.trim()||!m.trim();s.useEffect(()=>{const r=f!==null,l=d!==null,A=g!=="",P=m!=="",X=$.length>0;i(!!(r||l||A||P||X))},[f,d,g,m,$]),s.useEffect(()=>(e("Створення команди"),()=>{d&&URL.revokeObjectURL(d),a(M())}),[e,a,d]),s.useEffect(()=>{if(v==="succeeded"&&u.teams.length>0){const r=u.teams[0];G.success("Команду успішно створено!"),E.current=!0,i(!1),j(null),p(null),b(""),w(""),C([]),I(`/teams/${r.id}`),a(M())}v==="failed"&&h&&G.error(h)},[v,h,I,a,u.teams]),s.useEffect(()=>{E.current&&n&&(k(),E.current=!1)},[n,k]);const V=r=>{const l=r.target.files[0];if(l){j(l);const A=URL.createObjectURL(l);p(A)}},_=r=>{if(r.key==="Enter"||r.key===" "){const l=document.getElementById("photo-upload");l&&l.click()}},q=r=>{C(r)},J=r=>{r.preventDefault();const l={teamName:!g.trim(),ageCategory:!m.trim()},A=!Object.values(l).some(P=>P);if(y(l),!A){G.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});return}a(ie({name:g,ageCategory:m,photo:f,athleteIds:$}))},R=()=>{d&&d!==N&&URL.revokeObjectURL(d),j(null),p(null);const r=document.getElementById("photo-upload");r&&(r.value="")},Q=r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),R())};return t.jsxs(t.Fragment,{children:[x&&t.jsx(Ie,{children:t.jsx(H,{})}),t.jsx(Be,{blurred:x,children:t.jsxs(Ee,{children:[t.jsxs(Pe,{children:[t.jsxs(Ge,{children:[t.jsx(Le,{children:t.jsxs(Te,{children:[t.jsx(Re,{children:t.jsx(Fe,{src:d||N,alt:"Фото команди"})}),t.jsx(Me,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:_,children:t.jsx(He,{})}),d&&d!==N&&t.jsx(We,{type:"button",tabIndex:0,onKeyDown:Q,onClick:R,title:"Скасувати завантаження фото",children:t.jsx(Ke,{})}),t.jsx(De,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:V})]})}),t.jsxs(ze,{children:[t.jsxs(D,{children:[t.jsx(z,{htmlFor:"teamName",children:"Назва команди *"}),t.jsx(O,{id:"teamName",type:"text",placeholder:"Введіть назву команди",value:g,onChange:r=>{b(r.target.value),r.target.value.trim()&&y(l=>({...l,teamName:!1}))},isError:S.teamName})]}),t.jsxs(D,{children:[t.jsx(z,{htmlFor:"ageCategory",children:"Вікова категорія *"}),t.jsx(O,{id:"ageCategory",type:"text",placeholder:"Введіть вікову категорію",value:m,onChange:r=>{w(r.target.value),r.target.value.trim()&&y(l=>({...l,ageCategory:!1}))},isError:S.ageCategory})]})]})]}),t.jsx(Ne,{children:t.jsx(ce,{onAthletesSelect:q})})]}),t.jsx(Oe,{children:t.jsx(Ue,{type:"button",onClick:J,disabled:x||T,children:x?"Створення...":T?"Заповніть обов'язкові поля":"Створити команду"})})]})}),t.jsx(de,{isOpen:n,onConfirm:k,onCancel:K})]})};export{Xe as default};
