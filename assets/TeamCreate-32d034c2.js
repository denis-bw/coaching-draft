import{d as o,e as T,c as B,r as s,m as W,n as I,j as t,L as R,g as H,b as O,u as U,o as E,y as A,q as K}from"./index-9e00c606.js";import{P as V}from"./PlaceholderTeam-7b26a08e.js";import{S as _}from"./RoadSignPointingRight-a2e692da.js";import{p as q}from"./PlaceholderProfile-3c1b0d36.js";import{S as J}from"./CameraIcon-dbfaea15.js";const Q=({onAthletesSelect:e})=>{const r=T(),{entities:j,list:f,loading:c,hasMore:h,currentPage:p,isAllDataLoaded:g}=B(i=>i.athletes),[u,x]=s.useState([]),m=s.useRef(null),$=s.useRef(!1),b=s.useRef(!1);s.useEffect(()=>{r(W());const i=setTimeout(()=>{$.current=!0,r(I({page:1,filter:"withoutTeam"}))},50);return()=>clearTimeout(i)},[r]);const w=s.useCallback(()=>{!h||c||b.current||g||(b.current=!0,r(I({page:p,filter:"withoutTeam"})).finally(()=>{b.current=!1}))},[r,h,c,p,g]),v=s.useCallback(()=>{if(!(c||!h||b.current||g)&&m.current){const{scrollTop:i,scrollHeight:n,clientHeight:k}=m.current;i+k>=n-20&&w()}},[h,c,w,g]);s.useEffect(()=>{const i=m.current;if(i)return i.addEventListener("scroll",v),()=>i.removeEventListener("scroll",v)},[v]),s.useEffect(()=>{e&&e(u)},[u,e]);const C=i=>{x(n=>n.includes(i)?n.filter(k=>k!==i):[...n,i])},y=f.map(i=>{const n=j[i];return n?{id:n._id||n.id,name:`${n.lastName} ${n.firstName} ${n.patronymic||""}`.trim(),photo:n.photo,isSelected:u.includes(n._id||n.id)}:null}).filter(Boolean);return t.jsx(Z,{children:t.jsxs(ee,{children:[t.jsx(te,{children:t.jsxs(oe,{children:[t.jsx(Y,{children:"Додайте в команду"}),u.length>0&&t.jsxs(ie,{children:["Обрано: ",u.length]})]})}),t.jsx(re,{children:t.jsxs(ne,{ref:m,children:[y.length>0?y.map(i=>t.jsx(pe,{className:"athlete-item",id:`athlete-${i.id}`,children:t.jsxs(ue,{to:`/athletes/${i.id}`,onClick:n=>{n.preventDefault(),C(i.id)},$isSelected:i.isSelected,children:[t.jsx(ae,{children:t.jsx(se,{loading:"lazy",src:i.photo||q})}),t.jsx(le,{children:t.jsx(de,{children:i.name})}),t.jsx(F,{children:t.jsx(X,{})})]})},i.id)):c?null:t.jsx(ce,{children:"Спортсменів не знайдено"}),c&&t.jsx(he,{children:t.jsx(R,{})})]})})]})})},X=o(_)`
  width: 18px;
  height: 18px;
  fill: ${e=>e.theme.iconColor};
`,Y=o.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  height: auto;
`,Z=o.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 500px;
`,ee=o.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.greenMain};
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,te=o.div`
  padding: 12px 16px;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  position: relative;
`,oe=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,ie=o.div`
  background-color: ${({theme:e})=>e.white};
  color: ${({theme:e})=>e.greenMain};
  padding: 3px 10px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
`,re=o.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`,ne=o.div`
  height: 100%;
  max-height: 350px;
  overflow-y: auto;
  padding: 12px;
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
`,ae=o.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  position: relative;
  overflow: hidden;
`,se=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,le=o.div`
  padding: 0 10px;
  overflow: hidden;
`,de=o.div`
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,F=o.div`
  color: ${({theme:e})=>e.textGray};
  display: flex;
  justify-content: flex-end;
`,ce=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({theme:e})=>e.textGray};
  font-size: 13px;
`,he=o.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,pe=o.div`
  width: 100%;
`,ue=o(H)`
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
    
    ${F} {
      color: white;
    }
  }
`,d={mobile:"320px",desktop:"1024px"},fe=o.div`
  position: sticky; 
  left: 0; 
  right: 0;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
`,ge=o.div`
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
`,xe=o.div`
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
`,me=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  
  @media (min-width: ${d.desktop}) {
    flex-direction: row;
    gap: 20px;
  }
`,be=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media (min-width: ${d.desktop}) {
    margin-bottom: 0;
  }
`,we=o.div`
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
`;const $e=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  
  @media (min-width: ${d.desktop}) {
    justify-content: center;
  }
`,ve=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${d.desktop}) {
    width: 8rem;
    height: 8rem;
  }
`,ke=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white||"#fff"};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor||"#e0e0e0"};
`,je=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ye=o.label`
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
`,Ce=o.input`
  display: none;
`;o.div`
  flex: 1;
`;const Se=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,G=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,L=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textBlack};
  font-size: 0.875rem;
  font-weight: 500;
`,P=o.input`
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
    background-color: ${({theme:e})=>e.disabledBG||"#e0e0e0"};
    cursor: not-allowed;
  }
`,Ae=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`,Be=o.button`
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
`,Ie=o(J)`
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
`,Re=()=>{const{setTitle:e}=O(),r=T(),j=U(),{createTeamStatus:f,createTeamError:c}=B(a=>a.teams),h=B(a=>a.teams),p=f==="loading",[g,u]=s.useState(null),[x,m]=s.useState(null),[$,b]=s.useState(""),[w,v]=s.useState(""),[C,y]=s.useState([]),[i,n]=s.useState({teamName:!1,ageCategory:!1});s.useEffect(()=>(e("Створення команди"),()=>{x&&URL.revokeObjectURL(x),r(E())}),[e,r,x]),s.useEffect(()=>{if(f==="succeeded"&&h.teams.length>0){const a=h.teams[0];A.success("Команду успішно створено!"),j(`/teams/${a.id}`),r(E())}f==="failed"&&c&&A.error(c)},[f,c,j,r,h.teams]);const k=a=>{const l=a.target.files[0];if(l){u(l);const S=URL.createObjectURL(l);m(S)}},M=a=>{if(a.key==="Enter"||a.key===" "){const l=document.getElementById("photo-upload");l&&l.click()}},N=a=>{y(a)},z=a=>{a.preventDefault();const l={teamName:!$.trim(),ageCategory:!w.trim()},S=!Object.values(l).some(D=>D);if(n(l),!S){A.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});return}r(K({name:$,ageCategory:w,photo:g,athleteIds:C}))};return t.jsxs(t.Fragment,{children:[p&&t.jsx(fe,{children:t.jsx(R,{})}),t.jsx(ge,{blurred:p,children:t.jsxs(xe,{children:[t.jsxs(me,{children:[t.jsxs(be,{children:[t.jsx($e,{children:t.jsxs(ve,{children:[t.jsx(ke,{children:t.jsx(je,{src:x||V,alt:"Фото команди"})}),t.jsx(ye,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:M,children:t.jsx(Ie,{})}),t.jsx(Ce,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:k})]})}),t.jsxs(Se,{children:[t.jsxs(G,{children:[t.jsx(L,{htmlFor:"teamName",children:"Назва команди *"}),t.jsx(P,{id:"teamName",type:"text",placeholder:"Введіть назву команди",value:$,onChange:a=>{b(a.target.value),a.target.value.trim()&&n(l=>({...l,teamName:!1}))},isError:i.teamName})]}),t.jsxs(G,{children:[t.jsx(L,{htmlFor:"ageCategory",children:"Вікова категорія *"}),t.jsx(P,{id:"ageCategory",type:"text",placeholder:"Введіть вікову категорію",value:w,onChange:a=>{v(a.target.value),a.target.value.trim()&&n(l=>({...l,ageCategory:!1}))},isError:i.ageCategory})]})]})]}),t.jsx(we,{children:t.jsx(Q,{onAthletesSelect:N})})]}),t.jsx(Ae,{children:t.jsx(Be,{type:"button",onClick:z,disabled:p,children:p?"Створення...":"Створити команду"})})]})})]})};export{Re as default};
