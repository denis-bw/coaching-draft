import{r as a,d as r,e as se,c as Z,t as Se,v as le,m as Me,n as de,j as t,L as K,S as ee,w as Be,x as te,z as ze,A as Q,y as w,B as Pe,C as Ge,D as Te,b as Ee,u as Ie,E as re,F as ce,G as oe,H as Le,I as pe,J as De,K as Re}from"./index-24ae9786.js";import{P as Ne}from"./PlaceholderTeam-7b26a08e.js";import{p as Ue}from"./PlaceholderProfile-3c1b0d36.js";import{S as Fe}from"./CameraIcon-b5242fdf.js";import{S as he}from"./DeleteIcon-7f3c71f5.js";const Oe=e=>a.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{d:"M6 12H18M12 6V18",strokeLinecap:"round",strokeLinejoin:"round"})),Ve=e=>a.createElement("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"none",...e},a.createElement("path",{fillRule:"evenodd",d:"M3.5 7.75A.75.75 0 014.25 7h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75z",clipRule:"evenodd"})),He=({teamAthletes:e=[],onAthletesChange:i,teamId:s})=>{const f=se(),{entities:x,list:O,loading:k,hasMore:$,currentPage:y,isAllDataLoaded:C}=Z(n=>n.athletes),{teamAthletes:{entities:L,list:D,loading:A,hasMore:S,currentPage:p,isAllDataLoaded:v}}=Z(n=>n.athletes),[c,R]=a.useState("remove"),[h,g]=a.useState(new Set),[T,M]=a.useState(!1),[m,u]=a.useState(null),j=a.useRef(null),z=a.useRef(null),N=a.useRef(!1),E=a.useRef(!1),I=a.useRef(!1);a.useEffect(()=>{g(new Set)},[c]),a.useEffect(()=>{if(c==="remove"&&s){f(Se());const n=setTimeout(()=>{f(le({teamId:s,page:1}))},50);return()=>clearTimeout(n)}},[f,c,s]),a.useEffect(()=>{if(c==="add"){f(Me());const n=setTimeout(()=>{N.current=!0,f(de({page:1,filter:"withoutTeam"}))},50);return()=>clearTimeout(n)}},[f,c]);const V=a.useCallback(()=>{c!=="add"||!$||k||E.current||C||(E.current=!0,f(de({page:y,filter:"withoutTeam"})).finally(()=>{E.current=!1}))},[f,$,k,y,C,c]),F=a.useCallback(()=>{c!=="remove"||!S||A||I.current||v||!s||(I.current=!0,f(le({teamId:s,page:p})).finally(()=>{I.current=!1}))},[f,S,A,p,v,c,s]),P=a.useCallback(()=>{if(c==="add"){if(k||!$||E.current||C)return;if(j.current){const{scrollTop:n,scrollHeight:d,clientHeight:b}=j.current;n+b>=d-20&&V()}}else if(c==="remove"){if(A||!S||I.current||v)return;if(z.current){const{scrollTop:n,scrollHeight:d,clientHeight:b}=z.current;n+b>=d-20&&F()}}},[$,k,V,S,A,F,v,c]);a.useEffect(()=>{const n=c==="add"?j.current:z.current;if(n)return n.addEventListener("scroll",P),()=>n.removeEventListener("scroll",P)},[P,c]);const H=n=>{g(d=>{const b=new Set(d);return b.has(n)?b.delete(n):b.add(n),b})},q=()=>{if(h.size===0)return;const n=Array.from(h);u({type:c,athleteIds:n,count:h.size}),M(!0)},Y=()=>{m&&(m.type==="add"?i({addedAthletes:m.athleteIds}):m.type==="remove"&&i({removedAthletes:m.athleteIds}),M(!1),u(null),g(new Set))},W=()=>{M(!1),u(null)},X=()=>{g(new Set)},J=D.map(n=>{const d=L[n];return d?{id:d.id,name:`${d.lastName} ${d.firstName} ${d.patronymic||""}`.trim(),photo:d.photo}:null}).filter(Boolean),U=c==="add"?O.map(n=>{const d=x[n];return d?{id:d._id||d.id,name:`${d.lastName} ${d.firstName} ${d.patronymic||""}`.trim(),photo:d.photo}:null}).filter(Boolean):[],G=c==="remove"?J:U,o=c==="remove"?A:k,l=()=>Array.from(h).map(n=>{const d=G.find(b=>b.id===n);return d?d.name:""}).filter(Boolean);return t.jsxs(t.Fragment,{children:[T&&m&&t.jsx(Ye,{children:t.jsxs(We,{children:[t.jsx(Je,{children:"Підтвердження дії"}),t.jsxs(Ke,{children:[t.jsxs(qe,{children:["Ви впевнені, що хочете ",m.type==="add"?"додати до команди":"видалити з команди"," ",m.count," спортсмен",m.count>1?"ів":"а","?"]}),t.jsx(Xe,{children:l().map((n,d)=>t.jsxs(Qe,{children:["• ",n]},d))})]}),t.jsxs(Ze,{children:[t.jsx(_e,{onClick:Y,$actionType:m.type,children:m.type==="add"?"Додати":"Видалити"}),t.jsx(et,{onClick:W,children:"Скасувати"})]})]})}),t.jsxs(tt,{children:[t.jsx(rt,{children:t.jsxs(ot,{children:[t.jsx(xe,{$isActive:c==="remove",onClick:()=>R("remove"),children:"Видалити з команди"}),t.jsx(xe,{$isActive:c==="add",onClick:()=>R("add"),children:"Додати до команди"})]})}),t.jsxs(it,{children:[t.jsxs(nt,{ref:c==="add"?j:z,$hasSelectedAthletes:h.size>0,children:[G.length>0?G.map(n=>t.jsx(at,{className:"athlete-item",children:t.jsxs(st,{as:"div",onClick:()=>H(n.id),$isSelected:h.has(n.id),$actionType:c,children:[t.jsx(lt,{children:t.jsx(dt,{loading:"lazy",src:n.photo||Ue,alt:n.name})}),t.jsx(ct,{children:t.jsx(pt,{$isSelected:h.has(n.id),children:n.name})}),t.jsx(ht,{children:h.has(n.id)?t.jsx(ie,{$iconType:"close",children:t.jsx(mt,{onClick:d=>{d.stopPropagation(),H(n.id)}})}):c==="add"?t.jsx(ie,{$iconType:"add",children:t.jsx(xt,{})}):t.jsx(ie,{$iconType:"remove",children:t.jsx(gt,{})})})]})},n.id)):t.jsxs(vt,{children:[c==="remove"&&!o&&"В команді немає спортсменів",c==="add"&&!o&&"Спортсменів без команди не знайдено"]}),o&&t.jsx(jt,{children:t.jsx(K,{})})]}),h.size>0&&t.jsx(ut,{children:t.jsxs(ft,{children:[t.jsxs(bt,{children:["Обрано: ",h.size," спортсмен",h.size>1?"ів":"а"]}),t.jsxs(wt,{children:[t.jsx(yt,{onClick:q,children:c==="add"?"Додати":"Видалити"}),t.jsx(kt,{onClick:X,children:"Скасувати"})]})]})})]})]})]})},Ye=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,We=r.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 480px;
  width: 90%;
  margin: 20px;
  overflow: hidden;
`,Je=r.div`
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  padding: 16px 20px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`,Ke=r.div`
  padding: 24px 20px;
`,qe=r.p`
  color: ${({theme:e})=>e.textBlack};
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 16px 0;
  text-align: center;
`,Xe=r.div`
  background-color: ${({theme:e})=>e.disabledBG};
  border-radius: 8px;
  padding: 12px 16px;
  margin-top: 16px;
  max-height: 120px; 
  overflow-y: auto;
  border: 1px solid ${({theme:e})=>e.lightGreen};

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.white};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.greenMain};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.darkGreen};
  }
`,Qe=r.div`
  color: ${({theme:e})=>e.textBlack};
  font-size: 14px;
  margin-bottom: 4px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ze=r.div`
  display: flex;
  gap: 12px;
  padding: 0 20px 20px 20px;
`,_e=r.button`
  flex: 1;
  background-color: ${({$actionType:e,theme:i})=>e==="add"?i.greenMain:i.red};
  color: ${({theme:e})=>e.white};
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({$actionType:e,theme:i})=>e==="add"?i.darkGreen:i.redDark};
    transform: translateY(-1px);
  }
`,et=r.button`
  flex: 1;
  background-color: ${({theme:e})=>e.gray};
  color: ${({theme:e})=>e.white};
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({theme:e})=>e.textGray};
    transform: translateY(-1px);
  }
`,tt=r.div`
  width: 100%;
  max-width: 100%;
  height: 330px;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.greenMain};
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,rt=r.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-bottom: 1px solid ${({theme:e})=>e.greenMain};
`,ot=r.div`
  display: flex;
  border-radius: 6px 10px 0 0;
  overflow: hidden;
`,xe=r.button`
  flex: 1;
  padding: 12px 16px;
  background-color: ${({$isActive:e,theme:i})=>e?i.greenMain:i.ContainerBGColor};
  color: ${({$isActive:e,theme:i})=>e?i.white:i.textBlack};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  
  &:first-child {
    border-right: 1px solid ${({theme:e})=>e.greenMain};
  }
  
  &:hover {
    background-color: ${({$isActive:e,theme:i})=>e?i.darkGreen:i.lightGreen};
    color: ${({$isActive:e,theme:i})=>i.white};
  }

  @media (max-width: 390px) { 
     font-size: 12px;
  }
`,it=r.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`,nt=r.div`
  height: 100%;
  max-height: ${({$hasSelectedAthletes:e})=>e?"218px":"270px"};
  overflow-y: auto;
  padding: 0 12px 12px 12px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: max-height 0.2s ease-in-out;

  @media (max-width: 768px) {
    max-height: ${({$hasSelectedAthletes:e})=>e?"190px":"270px"};
  }

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
`,at=r.div`
  width: 100%;
`,st=r.div`
  display: grid;
  grid-template-columns: 32px 1fr 24px;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({theme:e,$isSelected:i,$actionType:s})=>i?s==="add"?e.lightGreen:e.red:e.disabledBG};
  color: ${({theme:e,$isSelected:i})=>i?e.white:e.textBlack};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  box-sizing: border-box;

  &:hover {
    background-color: ${({theme:e,$isSelected:i,$actionType:s})=>i?s==="add"?e.greenMain:e.redDark:e.lightGreen};
    color: ${({theme:e})=>e.white};
  }
`,lt=r.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`,dt=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ct=r.div`
  padding: 0 10px;
  overflow: hidden;
  min-width: 0;
`,pt=r.div`
  font-weight: ${({$isSelected:e})=>e?"600":"500"};
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ht=r.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
`,ie=r.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({$iconType:e,theme:i})=>{switch(e){case"add":return i.greenMain;case"remove":return i.red;case"close":return i.gray;default:return i.gray}}};
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  &:hover {
    transform: scale(1.1);
    background-color: ${({$iconType:e,theme:i})=>{switch(e){case"add":return i.darkGreen;case"remove":return i.redDark;case"close":return i.textGray;default:return i.textGray}}};
  }
`,xt=r(Oe)`
  width: 15px;
  height: 15px;
  fill: ${({theme:e})=>e.white};
  stroke: ${({theme:e})=>e.white};
  stroke-width: 3px;
`,gt=r(Ve)`
  width: 15px;
  height: 15px;
  fill: ${({theme:e})=>e.white};
  stroke: ${({theme:e})=>e.white};
  stroke-width: 1px;
`,mt=r(ee)`
  width: 15px;
  height: 15px;
  fill: ${({theme:e})=>e.white};
    stroke: ${({theme:e})=>e.white};
  stroke-width: 0.4px;
`,ut=r.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({theme:e})=>e.lightGreen};
  border-top: 1px solid ${({theme:e})=>e.greenMain};
  padding: 8px 12px;
  z-index: 10;
  transform: translateY(100%);
  animation: slideUp 0.3s ease-out forwards;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`,ft=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`,bt=r.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.textBlack};
  flex-shrink: 1; 
  min-width: 0; 
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,wt=r.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`,yt=r.button`
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  transition: background-color 0.2s;
  white-space: nowrap;
  
  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
  }
  
  @media (max-width: 768px) {
    flex: 1;
    padding: 8px 16px;
  }
`,kt=r.button`
  background-color: ${({theme:e})=>e.gray};
  color: ${({theme:e})=>e.white};
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  transition: background-color 0.2s;
  white-space: nowrap;
  
  &:hover {
    background-color: ${({theme:e})=>e.textGray};
  }
  
  @media (max-width: 768px) {
    flex: 1;
    padding: 8px 16px;
  }
`,vt=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({theme:e})=>e.textGray};
  font-size: 13px;
  text-align: center;
`,jt=r.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,B={mobile:"320px",desktop:"1024px"},ge=r.div`
  position: sticky; 
  left: 0; 
  right: 0;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
`,ne=r.div`
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  
  background: ${({blurred:e,theme:i})=>e?`rgba(${i.ContainerBGColor==="#ffffff"?"255, 255, 255":"77, 77, 77"}, 0.2)`:"transparent"};
  backdrop-filter: ${({blurred:e})=>e?"blur(10px)":"none"};
  -webkit-backdrop-filter: ${({blurred:e})=>e?"blur(10px)":"none"};
  filter: ${({blurred:e})=>e?"blur(3px)":"none"};
  pointer-events: ${({blurred:e})=>e?"none":"auto"};
  border-radius: 16px;
  box-shadow: ${({blurred:e})=>e?"0 4px 30px rgba(0, 0, 0, 0.1)":"none"};

  @media (min-width: ${B.desktop}) {
    align-items: flex-start;
    height: 100%;
  }
`,ae=r.div`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${B.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${B.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }
`,$t=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  
  @media (min-width: ${B.desktop}) {
    flex-direction: row;
    gap: 20px;
  }
`,At=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media (min-width: ${B.desktop}) {
    margin-bottom: 0;
  }
`,Ct=r.div`
  flex: 1;
  min-height: 300px;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 8px;
  
  @media (max-width: ${B.desktop}) {
    min-height: 200px;
  }
`;r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  
  @media (min-width: ${B.desktop}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`;const St=r.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  
  @media (min-width: ${B.desktop}) {
    justify-content: center;
  }
`,Mt=r.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${B.desktop}) {
    width: 8rem;
    height: 8rem;
  }
`,Bt=r.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.disabledBG};
`,zt=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Pt=r.label`
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
  outline: none;

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
    box-shadow: 0 0 0 4px ${({theme:e})=>e.greenMain}, 0 0 0 6px ${({theme:e})=>e.white};
  }

  &:focus-visible {
    background-color: ${({theme:e})=>e.darkGreen};
    box-shadow: 0 0 0 4px ${({theme:e})=>e.greenMain}, 0 0 0 6px ${({theme:e})=>e.white};
  }

  @media (min-width: ${B.desktop}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,Gt=r.input`
  display: none;
`;r.div`
  flex: 1;
`;const Tt=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,me=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ue=r.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textBlack};
  font-size: 0.875rem;
  font-weight: 500;
`,fe=r.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,isError:i})=>i?e.red:e.disabledBG};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.lightGreen};
    box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.lightGreen.slice(1,3),16)}, 
      ${parseInt(e.lightGreen.slice(3,5),16)}, 
      ${parseInt(e.lightGreen.slice(5,7),16)}, 0.5)`};
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
    box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.red.slice(1,3),16)}, 
      ${parseInt(e.red.slice(3,5),16)}, 
      ${parseInt(e.red.slice(5,7),16)}, 0.5)`};
  }
  
  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    cursor: not-allowed;
  }
`,Et=r.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`,_=r.button`
  max-width: 500px;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({theme:e,$hasChanges:i,$isDelete:s})=>s?e.red:i?e.greenMain:e.disabledBG};
  color: ${({theme:e,$hasChanges:i,$isDelete:s})=>s||i?e.white:e.textGray};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: ${({$hasChanges:e,$isDelete:i})=>e||i?"pointer":"not-allowed"};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e,$hasChanges:i,$isDelete:s})=>s?e.redDark:i?e.darkGreen:e.disabledBG};
  }

  &:focus {
    outline: none;
    background-color: ${({theme:e,$hasChanges:i,$isDelete:s})=>s?e.redDark:i?e.darkGreen:e.disabledBG};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    color: ${({theme:e})=>e.textGray};
    cursor: not-allowed;
  }

  @media (max-width: ${B.desktop}) {
    font-size: 0.8rem;
  }

`,It=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Lt=r.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  margin: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`,Dt=r.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.textBlack};
  font-size: 1.25rem;
  font-weight: 600;
`,Rt=r.p`
  margin-bottom: 2rem;
  color: ${({theme:e})=>e.textBlack};
  line-height: 1.5;
`,Nt=r.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`,Ut=r.button`
  background-color: ${({theme:e})=>e.red};
  color: ${({theme:e})=>e.white};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({theme:e})=>e.redDark};
  }

  &:focus {
    outline: 2px solid ${({theme:e})=>e.red};
    outline-offset: 2px;
  }
`,Ft=r.button`
  background-color: ${({theme:e})=>e.gray};
  color: ${({theme:e})=>e.white};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({theme:e})=>e.textGray};
  }

  &:focus {
    outline: 2px solid ${({theme:e})=>e.gray};
    outline-offset: 2px;
  }
`,Ot=r(Fe)`
  fill: ${({theme:e})=>e.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${B.desktop}) {
    width: 18px;
    height: 18px;
  }
`;r.div`
  display: flex;
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.greenMain};
`;r.button`
  flex: 1;
  padding: 12px 16px;
  background-color: ${({$isActive:e,theme:i})=>e?i.greenMain:"transparent"};
  color: ${({$isActive:e,theme:i})=>e?i.white:i.greenMain};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:first-child {
    border-right: 1px solid ${({theme:e})=>e.greenMain};
  }
  
  &:hover {
    background-color: ${({$isActive:e,theme:i})=>e?i.darkGreen:i.lightGreen+"40"};
  }
  
  &:focus {
    outline: 2px solid ${({theme:e})=>e.greenMain};
    outline-offset: 2px;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;const Vt=r.div`
margin-top: 10px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.1);
  position: relative;
`,Ht=r.div`
  position: relative;
  width: 100%;
  height: 300px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
    
    .gallery-zoom-effect {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`,Yt=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  transform-origin: center;
`,Wt=r.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 30%,
    rgba(0, 0, 0, 0.3) 70%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Jt=r.div`
  text-align: center;
  color: white;
  width: 100%;
  max-width: 600px;
`,Kt=r.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,be=r.span`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  white-space: nowrap;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
  }
`,qt=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  min-width: 140px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.5rem 0.75rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    min-width: 120px;
    padding: 0.4rem 0.6rem;
  }
`,Xt=r.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`,Qt=r.div`
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`,Zt=r.div`
  height: 100%;
  background: #10b981;
  border-radius: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 0 4px rgba(16, 185, 129, 0.5);
`,_t=r.button`
  background: linear-gradient(135deg, ${({theme:e})=>e.lightGreen}, ${({theme:e})=>e.greenMain});
  color: ${({theme:e})=>e.white};
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(103, 188, 142, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1.5rem;
  backdrop-filter: blur(10px);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, ${({theme:e})=>e.greenMain}, ${({theme:e})=>e.darkGreen});
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(103, 188, 142, 0.6);
  }

  &:active {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 0.85rem 2rem;
    font-size: 0.9rem;
    margin-top: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
  }
`,er=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  
  // Матовий фон тільки там, де немає контенту
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    z-index: -1;
  }
`,tr=r.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4); // затемнення фону
  z-index: 10;
`,rr=r.div`
  position: relative;
  /* max-width: 900px; */
  width: 90%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  background: rgba(254, 254, 254, 0.1); // прозорий фон
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  overflow: hidden;
  z-index: 1001;
`,or=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.9rem;

  background: rgba(255,255,255,0.1); // прозорий
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  z-index: 2;

  @media (max-width: 768px) {
  flex-direction: column;
    align-items: flex-start; 
    justify-content: flex-start;
  }
`,ir=r.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({theme:e})=>e.white};
  margin: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

@media (max-width: 768px) {
  flex-direction: column;
  align-items: flex-start;
  font-size: 1rem;
}
`,nr=r.span`
  font-weight: normal;
  font-size: 1rem;
  margin-left: 0.5rem;
  text-transform: uppercase;
 color: ${({theme:e})=>e.white};
  @media (max-width: 768px) {
    margin-left: 0; 
    font-size: 0.9rem;
  }
`,we=r.button`
  position: absolute;
  top: 0.9rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);

  svg {
    width: 1.2rem;
    height: 1.2rem;
    stroke: ${({theme:e})=>e.textGray}; 
    transition: stroke 0.2s ease;
  }

  &:hover {
    background: ${({theme:e})=>e.white};
    
    svg {
      stroke: ${({theme:e})=>e.textBlack}; 
    }

  }

  @media (max-width: 768px) {
    top: 0.6rem;
    right: 1rem;
    width: 36px;
    height: 36px;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`,ar=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.5rem;
  }
`,sr=r.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.3);
  padding: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);

  &:hover {
    transform: scale(1.05);
    
    .photo-actions {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    border-radius: 8px;
    padding: 6px;
  }
`,lr=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.2s ease;

  @media (max-width: 768px) {
    border-radius: 6px;
  }
`,dr=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  opacity: 0.7;
  filter: grayscale(0.3);

  @media (max-width: 768px) {
    border-radius: 6px;
  }
`,cr=r.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.2s ease;

  @media (max-width: 768px) {
    opacity: 1;
    top: 10px;
    right: 10px;
    gap: 0.25rem;
  }
`,Ce=r.button`
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 0.75rem;
  }
`,ye=r(Ce)`
  border: 2px solid ${({theme:e})=>e.red};
  display: flex;
  align-items: center;
  justify-content: center;

svg {
  stroke: ${({theme:e})=>e.red};
  fill: none; // <- важливо
  width: 1.2rem;
  height: 1.2rem;
  transition: stroke 0.2s;
}

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.red};
    color: ${({theme:e})=>e.white};

    svg {
      stroke: ${({theme:e})=>e.white};
      fill: none; // <- важливо
      width: 1.2rem;
      height: 1.2rem;
      transition: stroke 0.2s;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    svg {
      stroke: ${({theme:e})=>e.red};
    }
  }
`,ke=r(Ce)`
  border: 2px solid  ${({theme:e})=>e.greenMain};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({theme:e})=>e.greenMain};
    transition: fill 0.2s;
  }

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.greenMain};
    color: ${({theme:e})=>e.white};
    
    svg {
      fill: ${({theme:e})=>e.white};
    }
  }
`,pr=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
  height: 200px;
`,hr=r.div`
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.5);   // більш матово
  backdrop-filter: blur(30px);            // сильніший blur
  position: sticky;
  bottom: 0;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.75rem;
  }
`,ve=r.div`
 position: fixed;
   top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.4); 
  z-index: 11; 
  backdrop-filter: blur(3px); 
`,xr=r.input`
  display: none;
`,gr=r.label`
  display: inline-block;   
  width: auto;          

  @media (max-width: 768px) {
    display: block;       
    width: 100%;         
    text-align: center;   
  }
`,je=r.button`
  background: ${e=>e.$isPrimary?`linear-gradient(135deg, ${e.theme.lightGreen}, ${e.theme.greenMain})`:"rgba(255, 255, 255, 0.9)"};
  color: ${e=>e.$isPrimary?e.theme.white:e.theme.black};
  border: ${e=>e.$isPrimary?"none":`2px dashed ${e.theme.gray}`};
  padding: 0.875rem 1.5rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  min-width: 140px;
  text-align: center;
  
  ${e=>e.$isPrimary&&`
    box-shadow: 0 4px 14px rgba(103, 188, 142, 0.25);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `}

  &:hover:not(:disabled) {
    background: ${e=>e.$isPrimary?`linear-gradient(135deg, ${e.theme.greenMain}, ${e.theme.darkGreen})`:e.theme.disabledBG};
    
    ${e=>e.$isPrimary&&`
      box-shadow: 0 6px 20px rgba(103, 188, 142, 0.4);
    `}
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

@media (max-width: 768px) {
  padding: 0.75rem 1.25rem;
  font-size: 0.85rem;
  min-width: 100%;  // займає всю ширину контейнера
  display: block;   // щоб точно була під одною

}

@media (max-width: 480px) {
  width: 100%;
  min-width: auto;
}
`;r.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  z-index: 999;
  border-radius: inherit;
`;const mr=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // центрує по вертикалі
  text-align: center;
  margin: 3rem 2rem;
  color: ${({theme:e})=>e.textGray};
  flex: 1;
  min-height: 70%; // додаємо мінімальну висоту, щоб центр працював

  p {
    margin: 0 0 1rem 0;
    font-size: 1rem;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;r.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;const ur=r.p`
  text-align: center;
  font-size: 1rem;
  color: ${({theme:e})=>e.textGray};
  margin: 2rem auto;
  width: 100%;
`,fr=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1500;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
`;r.div`
  display: none; // Не потрібен окремий оверлей
`;const br=r.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 1501;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,wr=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  max-height: 90%;
`,yr=r.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
`,kr=r.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  gap: 1rem;
  z-index: 1502;

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    gap: 0.5rem;
  }
`,$e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEXz9Pa5vsq2u8jN0dnV2N/o6u7w8fTi5OnFydO+ws3f4ee6v8vY2+H29/jy9Pbu7/LJztbCx9HR1ty/NMEIAAACq0lEQVR42u3cYXaqMBBA4cyEgEAi4P4X+34oLSra9IA9E979FtDj7SAJUOocAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAqrQ3Y311iH5fsaktBTYn3d/Y2JljlM/orAR2IsdOHNqPFbY2TqKdXj/Orl/C24/sLHwV0ygiIv2466n0+kNlNFHYiohotfNyWKmIyKm2U9jsffqyU+gopLDMwiGE+sCFjRdV1SkOxyw8X2Rer6cNe2e7hfVJv3ddGg9YeNHlxrIPhyvs9GHvXB+sMJ2eLoDSsQrDwwhF/cFm+HiQikxvP+Prk63RwhSfCtt3i6J/fbK1Wlj9qvCiIjEd9yg9e32zZFotHPLPNOd55VyfotnVYsq9XVZ7fbvxsbviZx6kZ7+Y9toU7e7a/P1x+mI5qP3doRyLuraYlokxY4LrUzRcOPj56knaxmVMcP1XYfkKODW+VVWZqiHlTXBtisbvYgwhhKF22RNcmWLBd6JWJ/g8xXIL64u+eg5zl1huodfXj5riAQrPF333NG0xxVILvb5/YBhLKxzC8+XSD4mpqMLQt2F59hj158e+saDCFFrRacj9Dj5MsYTC0IuIfk9xzAoU7QopTKG93dq/7d3yJiiiVSqjMPTzJ25Dcu6cOUERjUUUzhP8mmLuBIsp/Jrg9Soq+OzAMgqXE7wm/uKvhIoovJ/gLxVQ+DTBwxVummABhRsnWEDhxgmaL9w8QfOFmydovTDlb11KLawopJBCCimk8E8Kbd+nGcJ2Q9F39fNRSKH5wtSZeyvI7/sm8O053MnCCOc/C/7Iu2vexIuyn3z/sLEQ6Orp4O+QOtf0HwrsGyOFrhP9QJ+qmUDnwtju/jp+PwZT/1chdNW+YuMAAAAAAAAAAAAAAAAAAAAAAAAAAACA/9s/LTI30XlcBHoAAAAASUVORK5CYII=",Ae=e=>a.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.163 2.819C9 3.139 9 3.559 9 4.4V11H7.803c-.883 0-1.325 0-1.534.176a.75.75 0 0 0-.266.62c.017.274.322.593.931 1.232l4.198 4.401c.302.318.453.476.63.535a.749.749 0 0 0 .476 0c.177-.059.328-.217.63-.535l4.198-4.4c.61-.64.914-.96.93-1.233a.75.75 0 0 0-.265-.62C17.522 11 17.081 11 16.197 11H15V4.4c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656C13.861 2 13.441 2 12.6 2h-1.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zM5 21a1 1 0 0 0 1 1h12a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1z"})),vr=({teamId:e})=>{const i=se(),{teamGallery:s,galleryCurrentPage:f,galleryHasMore:x,fetchTeamGalleryStatus:O,uploadTeamPhotoStatus:k,deleteTeamPhotoStatus:$,storageInfo:y,teamDetails:C}=Z(o=>o.teams),[L,D]=a.useState(!1),[A,S]=a.useState(!1),[p,v]=a.useState(null),[c,R]=a.useState(!1),[h,g]=a.useState(null),[T,M]=a.useState(new Set),m=a.useRef(null),u=a.useRef(null),j=k==="loading",z=$==="loading";a.useEffect(()=>(e&&(i(Be()),i(te({teamId:e,page:1})),i(ze())),()=>{i(Q()),g(null),M(new Set)}),[e,i]),a.useEffect(()=>{k==="succeeded"&&(w.success("Фото успішно завантажено!"),g(null),i(Q()),u.current&&(u.current.value="")),k==="failed"&&(w.error("Помилка при завантаженні фото"),i(Q()),u.current&&(u.current.value=""))},[k,i]),a.useEffect(()=>{$==="succeeded"&&(w.success("Фото успішно видалено!"),i(Q()),A&&p&&!s.find(o=>o.id===p.id)&&(S(!1),v(null))),$==="failed"&&(w.error("Помилка при видаленні фото"),i(Q()))},[$,i,A,p,s]);const N=a.useCallback(()=>{if(!m.current||c||!x)return;const o=m.current,{scrollTop:l,scrollHeight:n,clientHeight:d}=o;n-l<=d+100&&(R(!0),i(te({teamId:e,page:f+1})).finally(()=>{R(!1)}))},[i,e,f,x,c]);a.useEffect(()=>{const o=m.current;if(o&&L)return o.addEventListener("scroll",N),()=>o.removeEventListener("scroll",N)},[N,L]);const E=o=>{M(l=>new Set([...l,o]))},I=o=>{const l=o.target.files[0];if(l){if(!l.type.startsWith("image/")){w.warning("Можна завантажувати тільки зображення");return}if(l.size>5*1024*1024){w.warning("Максимальний розмір файлу: 5MB");return}g(l)}},V=()=>{g(null),u.current&&(u.current.value="")},F=async()=>{if(!h){w.warning("Оберіть файл для завантаження");return}if(y&&y.remainingBytes<h.size){const o=Math.round(y.remainingBytes/1048576),l=Math.round(h.size/(1024*1024));w.error(`Недостатньо місця в сховищі. Залишилось: ${o}MB, потрібно: ${l}MB`);return}i(Pe({teamId:e,photo:h}))},P=o=>{window.confirm("Ви впевнені, що хочете видалити це фото?")&&i(Ge({teamId:e,photoId:o}))},H=async(o,l)=>{try{const d=await(await fetch(o,{mode:"cors"})).blob(),b=document.createElement("a");b.href=URL.createObjectURL(d),b.download=`team-${e}-photo-${l}.jpg`,document.body.appendChild(b),b.click(),b.remove(),URL.revokeObjectURL(b.href)}catch(n){w.error("Не вдалося завантажити фото"),console.error(n)}},q=()=>{D(!0),s.length===0&&i(te({teamId:e,page:1}))},Y=()=>{D(!1),S(!1),v(null),h&&(g(null),u.current&&(u.current.value=""))},W=o=>{v(o),S(!0)},X=o=>{o.target===o.currentTarget&&Y()},J=o=>{if(o===0)return"0 MB";const l=1024,n=["B","KB","MB","GB"],d=Math.floor(Math.log(o)/Math.log(l));return parseFloat((o/Math.pow(l,d)).toFixed(1))+" "+n[d]},U=s&&s.length>0?s[0]:null,G=(C==null?void 0:C.galleryCount)||s.length||0;return t.jsxs(t.Fragment,{children:[t.jsx(Vt,{children:t.jsxs(Ht,{onClick:q,children:[t.jsx(Yt,{src:U&&!T.has(U.id)?U.url:$e,alt:"Фон галереї",onError:()=>U&&E(U.id)}),t.jsx(Wt,{children:t.jsxs(Jt,{children:[t.jsx(Kt,{children:"Галерея команди"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",justifyContent:"center",flexWrap:"wrap",marginBottom:"1rem"},children:[G>0?t.jsxs(be,{children:[G," фото"]}):t.jsx(be,{children:"Поки що немає фото"}),y&&t.jsxs(qt,{children:[t.jsxs(Xt,{children:[J(y.usedBytes)," / ",J(y.limitBytes)]}),t.jsx(Qt,{children:t.jsx(Zt,{style:{width:`${Math.min(y.usedPercentage,100)}%`,backgroundColor:y.usedPercentage>90?"#ef4444":y.usedPercentage>70?"#f59e0b":"#10b981"}})})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx(_t,{children:G>0?"Переглянути всі фото":"Додати фото"})})]})})]})}),L&&t.jsxs(er,{children:[t.jsx(tr,{onClick:X}),t.jsxs(rr,{onClick:o=>o.stopPropagation(),children:[t.jsxs(or,{children:[t.jsxs(ir,{children:["Галерея команди",G>0&&t.jsxs(nr,{children:["(",G," фото)"]})]}),t.jsx(we,{onClick:Y,title:"Закрити",children:t.jsx(ee,{})})]}),t.jsx("div",{ref:m,style:{flex:1,overflowY:"auto",padding:"1.5rem",paddingBottom:"10px"},children:s.length>0?t.jsxs(t.Fragment,{children:[t.jsx(ar,{children:s.map(o=>t.jsxs(sr,{children:[T.has(o.id)?t.jsx(dr,{src:$e,alt:"Помилка завантаження",onClick:()=>W(o)}):t.jsx(lr,{src:o.url,alt:`Фото команди ${o.id}`,onClick:()=>W(o),onError:()=>E(o.id)}),t.jsxs(cr,{className:"photo-actions",children:[t.jsx(ke,{onClick:l=>{l.stopPropagation(),H(o.url,o.id)},disabled:z||j||T.has(o.id),title:T.has(o.id)?"Фото недоступне для завантаження":"Завантажити фото",children:t.jsx(Ae,{style:{width:"1.2rem",height:"1.2rem"}})}),t.jsx(ye,{onClick:l=>{l.stopPropagation(),P(o.id)},disabled:z||j,title:z||j?"Не можна видалити фото зараз":"Видалити фото",children:t.jsx(he,{})})]})]},o.id))}),c&&t.jsx(pr,{children:t.jsx(K,{})})]}):t.jsx(mr,{children:t.jsx(ur,{children:"Поки що немає фотографій"})})}),j&&t.jsx(ve,{children:t.jsx(K,{})}),z&&t.jsx(ve,{children:t.jsx(K,{})}),t.jsxs(hr,{children:[h&&t.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.9)",border:"2px dashed #ccc",borderRadius:"8px",padding:"1rem",marginBottom:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("span",{style:{fontSize:"0.9rem",color:"#333"},children:h.name.length>30?`${h.name.substring(0,30)}...`:h.name}),t.jsx("button",{onClick:V,style:{background:"transparent",border:"none",color:"#ef4444",cursor:"pointer",fontSize:"1.2rem",fontWeight:"bold",padding:"0.25rem"},children:t.jsx(ee,{style:{width:"1rem",height:"1rem",color:"#ef4444",fill:"#ef4444"}})})]}),t.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[t.jsx(xr,{ref:u,type:"file",accept:"image/*",onChange:I,id:"gallery-upload"}),t.jsx(gr,{htmlFor:"gallery-upload",children:t.jsx(je,{as:"span",disabled:j,children:"Додати зображення"})}),h&&t.jsx(je,{onClick:F,disabled:j||!h,$isPrimary:!0,children:j?"Завантаження...":"Завантажити зображення"})]})]})]})]}),A&&t.jsx(fr,{onClick:o=>{o.stopPropagation(),S(!1),v(null)},children:t.jsx(wr,{children:t.jsxs(br,{children:[t.jsx(yr,{src:p==null?void 0:p.url,alt:"Перегляд фото",onClick:o=>o.stopPropagation()}),t.jsxs(kr,{onClick:o=>o.stopPropagation(),children:[t.jsx(ke,{onClick:()=>H(p==null?void 0:p.url,p==null?void 0:p.id),disabled:T.has(p==null?void 0:p.id),children:t.jsx(Ae,{style:{width:"1.2rem",height:"1.2rem"}})}),t.jsx(ye,{onClick:()=>P(p==null?void 0:p.id),children:t.jsx(he,{style:{width:"1.2rem",height:"1.2rem"}})})]}),t.jsx(we,{onClick:o=>{o.stopPropagation(),S(!1),v(null)},children:t.jsx(ee,{})})]})})})]})},Mr=()=>{const{teamId:e}=Te(),{setTitle:i}=Ee(),s=se(),f=Ie(),{teamDetails:x,fetchTeamDetailsStatus:O,fetchTeamDetailsError:k,updateTeamStatus:$,updateTeamError:y,deleteTeamStatus:C,deleteTeamError:L}=Z(o=>o.teams),{updateTeamAthletesStatus:D,updateTeamAthletesError:A}=Z(o=>o.athletes),S=O==="loading",p=$==="loading",v=C==="loading",c=D==="loading",[R,h]=a.useState(null),[g,T]=a.useState(null),[M,m]=a.useState(""),[u,j]=a.useState(""),[z,N]=a.useState(!1),[E,I]=a.useState(!1),[V,F]=a.useState({teamName:!1,ageCategory:!1}),[P,H]=a.useState({teamName:"",ageCategory:"",photoPreview:null});a.useEffect(()=>(e&&s(re(e)),()=>{g&&g!==(x==null?void 0:x.logo)&&URL.revokeObjectURL(g),s(ce()),s(oe())}),[e,s]),a.useEffect(()=>{if(x){i(`Профіль команди ${x.name}`);const o=x.name||"",l=x.ageCategory||"",n=x.logo||null;m(o),j(l),T(n),H({teamName:o,ageCategory:l,photoPreview:n}),I(!1)}},[x,i]),a.useEffect(()=>{const o=M!==P.teamName,l=u!==P.ageCategory,n=R!==null||g!==P.photoPreview;I(o||l||n)},[M,u,R,g,P]),a.useEffect(()=>{$==="succeeded"&&(w.success("Дані команди успішно оновлено!"),h(null),s(ce()),s(re(e)),I(!1)),$==="failed"&&y&&w.error(y)},[$,y,s,e]),a.useEffect(()=>{D==="succeeded"&&(w.success("Спортсмени успішно оновлені!"),s(re(e)),s(oe())),D==="failed"&&A&&(w.error(A),s(oe()))},[D,A,s,e]),a.useEffect(()=>{C==="succeeded"&&(w.success("Команду успішно видалено!"),f("/teams"),s(Le())),C==="failed"&&L&&w.error(L)},[C,L,f,s]),a.useEffect(()=>{O==="failed"&&k&&w.error(k)},[O,k]);const q=o=>{const l=o.target.files[0];if(l){h(l),g&&g!==(x==null?void 0:x.logo)&&URL.revokeObjectURL(g);const n=URL.createObjectURL(l);T(n)}},Y=o=>{if(o.key==="Enter"||o.key===" "){const l=document.getElementById("photo-upload");l&&l.click()}},W=async({addedAthletes:o=[],removedAthletes:l=[]})=>{try{o.length>0&&await s(pe({teamId:e,operation:"add",athleteIds:o})).unwrap(),l.length>0&&await s(pe({teamId:e,operation:"remove",athleteIds:l})).unwrap()}catch(n){console.error("Error updating team athletes:",n)}},X=o=>{o.preventDefault();const l={teamName:!M.trim(),ageCategory:!u.trim()},n=!Object.values(l).some(d=>d);if(F(l),!n){w.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});return}s(De({teamId:e,teamData:{name:M,ageCategory:u,photo:R}}))},J=()=>{N(!0)},U=()=>{s(Re(e)),N(!1)},G=()=>{N(!1)};return S?t.jsx(ge,{children:t.jsx(K,{})}):O==="failed"?t.jsx(ne,{children:t.jsxs(ae,{style:{textAlign:"center",padding:"2rem"},children:[t.jsx("h2",{style:{color:"inherit"},children:"Помилка завантаження"}),t.jsx("p",{style:{color:"inherit"},children:k}),t.jsx(_,{onClick:()=>f("/teams"),children:"Повернутися до списку команд"})]})}):x?t.jsxs(t.Fragment,{children:[(p||v||c)&&t.jsx(ge,{children:t.jsx(K,{})}),z&&t.jsx(It,{children:t.jsxs(Lt,{children:[t.jsx(Dt,{children:"Підтвердження видалення"}),t.jsxs(Rt,{children:['Ви впевнені, що хочете видалити команду "',x.name,'"?']}),t.jsxs(Nt,{children:[t.jsx(Ut,{onClick:U,children:"Видалити"}),t.jsx(Ft,{onClick:G,children:"Скасувати"})]})]})}),t.jsx(ne,{blurred:p||v||c,children:t.jsxs(ae,{children:[t.jsxs($t,{children:[t.jsxs(At,{children:[t.jsx(St,{children:t.jsxs(Mt,{children:[t.jsx(Bt,{children:t.jsx(zt,{src:g||Ne,alt:"Фото команди"})}),t.jsx(Pt,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:Y,children:t.jsx(Ot,{})}),t.jsx(Gt,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:q})]})}),t.jsxs(Tt,{children:[t.jsxs(me,{children:[t.jsx(ue,{htmlFor:"teamName",children:"Назва команди *"}),t.jsx(fe,{id:"teamName",type:"text",placeholder:"Введіть назву команди",value:M,onChange:o=>{m(o.target.value),o.target.value.trim()&&F(l=>({...l,teamName:!1}))},isError:V.teamName})]}),t.jsxs(me,{children:[t.jsx(ue,{htmlFor:"ageCategory",children:"Вікова категорія *"}),t.jsx(fe,{id:"ageCategory",type:"text",placeholder:"Введіть вікову категорію",value:u,onChange:o=>{j(o.target.value),o.target.value.trim()&&F(l=>({...l,ageCategory:!1}))},isError:V.ageCategory})]})]})]}),t.jsx(Ct,{children:t.jsx(He,{teamAthletes:x.athletes||[],teamId:e,onAthletesChange:W})})]}),t.jsx(vr,{teamId:e}),t.jsx(Et,{children:t.jsxs("div",{style:{display:"flex",gap:"1rem",width:"100%",maxWidth:"500px"},children:[t.jsx(_,{type:"button",onClick:X,disabled:p||!E,$hasChanges:E,children:p?"Збереження...":"Зберегти дані команди"}),t.jsx(_,{type:"button",onClick:J,disabled:v,$isDelete:!0,children:v?"Видалення...":"Видалити команду"})]})})]})})]}):t.jsx(ne,{children:t.jsxs(ae,{style:{textAlign:"center",padding:"2rem"},children:[t.jsx("h2",{style:{color:"inherit"},children:"Команду не знайдено"}),t.jsx(_,{onClick:()=>f("/teams"),children:"Повернутися до списку команд"})]})})};export{Mr as default};
