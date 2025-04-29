import{d as o,e as P,c as R,r as a,m as D,n as I,j as t,L as T,g as W,b as H,u as O,o as B,y as A,q as U}from"./index-e6044883.js";import{P as K}from"./PlaceholderTeam-7b26a08e.js";import{S as V}from"./RoadSignPointingRight-5ee4b9dd.js";import{p as _}from"./PlaceholderProfile-3c1b0d36.js";import{S as q}from"./CameraIcon-c01d63c9.js";const J=({onAthletesSelect:e})=>{const r=P(),{entities:k,list:g,loading:c,hasMore:p,currentPage:$,isAllDataLoaded:x}=R(i=>i.athletes),[h,j]=a.useState([]),u=a.useRef(null),y=a.useRef(!1),f=a.useRef(!1);a.useEffect(()=>{r(D());const i=setTimeout(()=>{y.current=!0,r(I({page:1,filter:"withoutTeam"}))},50);return()=>clearTimeout(i)},[r]);const v=a.useCallback(()=>{!p||c||f.current||x||(f.current=!0,r(I({page:$,filter:"withoutTeam"})).finally(()=>{f.current=!1}))},[r,p,c,$,x]),m=a.useCallback(()=>{if(!(c||!p||f.current||x)&&u.current){const{scrollTop:i,scrollHeight:n,clientHeight:w}=u.current;i+w>=n-20&&v()}},[p,c,v,x]);a.useEffect(()=>{const i=u.current;if(i)return i.addEventListener("scroll",m),()=>i.removeEventListener("scroll",m)},[m]),a.useEffect(()=>{e&&e(h)},[h,e]);const C=i=>{j(n=>n.includes(i)?n.filter(w=>w!==i):[...n,i])},b=g.map(i=>{const n=k[i];return n?{id:n._id||n.id,name:`${n.lastName} ${n.firstName} ${n.patronymic||""}`.trim(),photo:n.photo,isSelected:h.includes(n._id||n.id)}:null}).filter(Boolean);return t.jsx(Y,{children:t.jsxs(Z,{children:[t.jsx(ee,{children:t.jsxs(te,{children:[t.jsx(X,{children:"Додайте в команду"}),h.length>0&&t.jsxs(oe,{children:["Обрано: ",h.length]})]})}),t.jsx(ie,{children:t.jsxs(re,{ref:u,children:[b.length>0?b.map(i=>t.jsx(he,{className:"athlete-item",id:`athlete-${i.id}`,children:t.jsxs(pe,{to:`/athletes/${i.id}`,onClick:n=>{n.preventDefault(),C(i.id)},$isSelected:i.isSelected,children:[t.jsx(ne,{children:t.jsx(ae,{loading:"lazy",src:i.photo||_})}),t.jsx(se,{children:t.jsx(le,{children:i.name})}),t.jsx(F,{children:t.jsx(Q,{})})]})},i.id)):c?null:t.jsx(de,{children:"Спортсменів не знайдено"}),c&&t.jsx(ce,{children:t.jsx(T,{})})]})})]})})},Q=o(V)`
  width: 18px;
  height: 18px;
  fill: ${e=>e.theme.iconColor};
`,X=o.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  height: auto;
`,Y=o.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 500px;
`,Z=o.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.greenMain};
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,ee=o.div`
  padding: 12px 16px;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  position: relative;
`,te=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,oe=o.div`
  background-color: ${({theme:e})=>e.white};
  color: ${({theme:e})=>e.greenMain};
  padding: 3px 10px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
`,ie=o.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`,re=o.div`
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
`,ne=o.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  position: relative;
  overflow: hidden;
`,ae=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,se=o.div`
  padding: 0 10px;
  overflow: hidden;
`,le=o.div`
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,F=o.div`
  color: ${({theme:e})=>e.textGray};
  display: flex;
  justify-content: flex-end;
`,de=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({theme:e})=>e.textGray};
  font-size: 13px;
`,ce=o.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,he=o.div`
  width: 100%;
`,pe=o(W)`
  display: grid;
  grid-template-columns: 32px 1fr 18px;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({$isSelected:e,theme:r})=>e?r.greenMain:r.lightGreen};
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
`,d={mobile:"320px",desktop:"1024px"},ue=o.div`
  position: sticky; 
  left: 0; 
  right: 0;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
`,fe=o.div`
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
`,ge=o.div`
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
`,xe=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  
  @media (min-width: ${d.desktop}) {
    flex-direction: row;
    gap: 20px;
  }
`,me=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media (min-width: ${d.desktop}) {
    margin-bottom: 0;
  }
`,be=o.div`
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
`;const we=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  
  @media (min-width: ${d.desktop}) {
    justify-content: center;
  }
`,$e=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${d.desktop}) {
    width: 8rem;
    height: 8rem;
  }
`,ve=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white||"#fff"};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor||"#e0e0e0"};
`,ke=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,je=o.label`
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
`,ye=o.input`
  display: none;
`;o.div`
  flex: 1;
`;const Ce=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,E=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,G=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textBlack};
  font-size: 0.875rem;
  font-weight: 500;
`,L=o.input`
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
`,Se=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`,Ae=o.button`
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
`,Ie=o(q)`
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
`,Re=()=>{const{setTitle:e}=H(),r=P(),k=O(),{createTeamStatus:g,createTeamError:c}=R(s=>s.teams),p=g==="loading",[$,x]=a.useState(null),[h,j]=a.useState(null),[u,y]=a.useState(""),[f,v]=a.useState(""),[m,C]=a.useState([]),[b,i]=a.useState({teamName:!1,ageCategory:!1});a.useEffect(()=>(e("Створення команди"),()=>{h&&URL.revokeObjectURL(h),r(B())}),[e,r,h]),a.useEffect(()=>{g==="succeeded"&&(A.success("Команду успішно створено!"),r(B())),g==="failed"&&c&&A.error(c)},[g,c,k,r]);const n=s=>{const l=s.target.files[0];if(l){x(l);const S=URL.createObjectURL(l);j(S)}},w=s=>{if(s.key==="Enter"||s.key===" "){const l=document.getElementById("photo-upload");l&&l.click()}},M=s=>{C(s)},N=s=>{s.preventDefault();const l={teamName:!u.trim(),ageCategory:!f.trim()},S=!Object.values(l).some(z=>z);if(i(l),!S){A.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});return}r(U({name:u,ageCategory:f,photo:$,athleteIds:m}))};return t.jsxs(t.Fragment,{children:[p&&t.jsx(ue,{children:t.jsx(T,{})}),t.jsx(fe,{blurred:p,children:t.jsxs(ge,{children:[t.jsxs(xe,{children:[t.jsxs(me,{children:[t.jsx(we,{children:t.jsxs($e,{children:[t.jsx(ve,{children:t.jsx(ke,{src:h||K,alt:"Фото команди"})}),t.jsx(je,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:w,children:t.jsx(Ie,{})}),t.jsx(ye,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:n})]})}),t.jsxs(Ce,{children:[t.jsxs(E,{children:[t.jsx(G,{htmlFor:"teamName",children:"Назва команди *"}),t.jsx(L,{id:"teamName",type:"text",placeholder:"Введіть назву команди",value:u,onChange:s=>{y(s.target.value),s.target.value.trim()&&i(l=>({...l,teamName:!1}))},isError:b.teamName})]}),t.jsxs(E,{children:[t.jsx(G,{htmlFor:"ageCategory",children:"Вікова категорія *"}),t.jsx(L,{id:"ageCategory",type:"text",placeholder:"Введіть вікову категорію",value:f,onChange:s=>{v(s.target.value),s.target.value.trim()&&i(l=>({...l,ageCategory:!1}))},isError:b.ageCategory})]})]})]}),t.jsx(be,{children:t.jsx(J,{onAthletesSelect:M})})]}),t.jsx(Se,{children:t.jsx(Ae,{type:"button",onClick:N,disabled:p,children:p?"Створення...":"Створити команду"})})]})})]})};export{Re as default};
