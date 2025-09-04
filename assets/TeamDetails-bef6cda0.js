import{r as a,d as o,e as xe,c as V,t as ue,v as ne,m as ge,n as ie,j as t,L as re,S as fe,w as me,b as be,u as we,x as X,z as ae,A as Z,y as S,B as ke,C as se,D as $e,E as ve}from"./index-110bea2d.js";import{P as ye}from"./PlaceholderTeam-7b26a08e.js";import{p as je}from"./PlaceholderProfile-3c1b0d36.js";import{S as Ce}from"./CameraIcon-265c2b23.js";const Ae=e=>a.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{d:"M6 12H18M12 6V18",strokeLinecap:"round",strokeLinejoin:"round"})),Se=e=>a.createElement("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"none",...e},a.createElement("path",{fillRule:"evenodd",d:"M3.5 7.75A.75.75 0 014.25 7h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75z",clipRule:"evenodd"})),Ge=({teamAthletes:e=[],onAthletesChange:r,teamId:i})=>{const h=xe(),{entities:p,list:M,loading:m,hasMore:w,currentPage:z,isAllDataLoaded:j}=V(n=>n.athletes),{teamAthletes:{entities:N,list:D,loading:k,hasMore:E,currentPage:G,isAllDataLoaded:$}}=V(n=>n.athletes),[s,I]=a.useState("remove"),[x,u]=a.useState(new Set),[F,v]=a.useState(!1),[g,y]=a.useState(null),B=a.useRef(null),L=a.useRef(null),R=a.useRef(!1),T=a.useRef(!1),C=a.useRef(!1);a.useEffect(()=>{u(new Set)},[s]),a.useEffect(()=>{if(s==="remove"&&i){h(ue());const n=setTimeout(()=>{h(ne({teamId:i,page:1}))},50);return()=>clearTimeout(n)}},[h,s,i]),a.useEffect(()=>{if(s==="add"){h(ge());const n=setTimeout(()=>{R.current=!0,h(ie({page:1,filter:"withoutTeam"}))},50);return()=>clearTimeout(n)}},[h,s]);const U=a.useCallback(()=>{s!=="add"||!w||m||T.current||j||(T.current=!0,h(ie({page:z,filter:"withoutTeam"})).finally(()=>{T.current=!1}))},[h,w,m,z,j,s]),P=a.useCallback(()=>{s!=="remove"||!E||k||C.current||$||!i||(C.current=!0,h(ne({teamId:i,page:G})).finally(()=>{C.current=!1}))},[h,E,k,G,$,s,i]),A=a.useCallback(()=>{if(s==="add"){if(m||!w||T.current||j)return;if(B.current){const{scrollTop:n,scrollHeight:l,clientHeight:b}=B.current;n+b>=l-20&&U()}}else if(s==="remove"){if(k||!E||C.current||$)return;if(L.current){const{scrollTop:n,scrollHeight:l,clientHeight:b}=L.current;n+b>=l-20&&P()}}},[w,m,U,E,k,P,$,s]);a.useEffect(()=>{const n=s==="add"?B.current:L.current;if(n)return n.addEventListener("scroll",A),()=>n.removeEventListener("scroll",A)},[A,s]);const O=n=>{u(l=>{const b=new Set(l);return b.has(n)?b.delete(n):b.add(n),b})},Y=()=>{if(x.size===0)return;const n=Array.from(x);y({type:s,athleteIds:n,count:x.size}),v(!0)},K=()=>{g&&(g.type==="add"?r({addedAthletes:g.athleteIds}):g.type==="remove"&&r({removedAthletes:g.athleteIds}),v(!1),y(null),u(new Set))},_=()=>{v(!1),y(null)},q=()=>{u(new Set)},J=D.map(n=>{const l=N[n];return l?{id:l.id,name:`${l.lastName} ${l.firstName} ${l.patronymic||""}`.trim(),photo:l.photo}:null}).filter(Boolean),Q=s==="add"?M.map(n=>{const l=p[n];return l?{id:l._id||l.id,name:`${l.lastName} ${l.firstName} ${l.patronymic||""}`.trim(),photo:l.photo}:null}).filter(Boolean):[],H=s==="remove"?J:Q,d=s==="remove"?k:m,c=()=>Array.from(x).map(n=>{const l=H.find(b=>b.id===n);return l?l.name:""}).filter(Boolean);return t.jsxs(t.Fragment,{children:[F&&g&&t.jsx(Be,{children:t.jsxs(Te,{children:[t.jsx(Me,{children:"Підтвердження дії"}),t.jsxs(ze,{children:[t.jsxs(De,{children:["Ви впевнені, що хочете ",g.type==="add"?"додати до команди":"видалити з команди"," ",g.count," спортсмен",g.count>1?"ів":"а","?"]}),t.jsx(Ee,{children:c().map((n,l)=>t.jsxs(Ie,{children:["• ",n]},l))})]}),t.jsxs(Le,{children:[t.jsx(Pe,{onClick:K,$actionType:g.type,children:g.type==="add"?"Додати":"Видалити"}),t.jsx(Ne,{onClick:_,children:"Скасувати"})]})]})}),t.jsxs(Re,{children:[t.jsx(Ue,{children:t.jsxs(He,{children:[t.jsx(le,{$isActive:s==="remove",onClick:()=>I("remove"),children:"Видалити з команди"}),t.jsx(le,{$isActive:s==="add",onClick:()=>I("add"),children:"Додати до команди"})]})}),t.jsxs(Fe,{children:[t.jsxs(Oe,{ref:s==="add"?B:L,$hasSelectedAthletes:x.size>0,children:[H.length>0?H.map(n=>t.jsx(We,{className:"athlete-item",children:t.jsxs(Ve,{as:"div",onClick:()=>O(n.id),$isSelected:x.has(n.id),$actionType:s,children:[t.jsx(Ye,{children:t.jsx(Ke,{loading:"lazy",src:n.photo||je,alt:n.name})}),t.jsx(_e,{children:t.jsx(qe,{$isSelected:x.has(n.id),children:n.name})}),t.jsx(Je,{children:x.has(n.id)?t.jsx(ee,{$iconType:"close",children:t.jsx(Ze,{onClick:l=>{l.stopPropagation(),O(n.id)}})}):s==="add"?t.jsx(ee,{$iconType:"add",children:t.jsx(Qe,{})}):t.jsx(ee,{$iconType:"remove",children:t.jsx(Xe,{})})})]})},n.id)):t.jsxs(at,{children:[s==="remove"&&!d&&"В команді немає спортсменів",s==="add"&&!d&&"Спортсменів без команди не знайдено"]}),d&&t.jsx(st,{children:t.jsx(re,{})})]}),x.size>0&&t.jsx(et,{children:t.jsxs(tt,{children:[t.jsxs(ot,{children:["Обрано: ",x.size," спортсмен",x.size>1?"ів":"а"]}),t.jsxs(rt,{children:[t.jsx(nt,{onClick:Y,children:s==="add"?"Додати":"Видалити"}),t.jsx(it,{onClick:q,children:"Скасувати"})]})]})})]})]})]})},Be=o.div`
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
`,Te=o.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 480px;
  width: 90%;
  margin: 20px;
  overflow: hidden;
`,Me=o.div`
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  padding: 16px 20px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`,ze=o.div`
  padding: 24px 20px;
`,De=o.p`
  color: ${({theme:e})=>e.textBlack};
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 16px 0;
  text-align: center;
`,Ee=o.div`
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
`,Ie=o.div`
  color: ${({theme:e})=>e.textBlack};
  font-size: 14px;
  margin-bottom: 4px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Le=o.div`
  display: flex;
  gap: 12px;
  padding: 0 20px 20px 20px;
`,Pe=o.button`
  flex: 1;
  background-color: ${({$actionType:e,theme:r})=>e==="add"?r.greenMain:r.red};
  color: ${({theme:e})=>e.white};
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({$actionType:e,theme:r})=>e==="add"?r.darkGreen:r.redDark};
    transform: translateY(-1px);
  }
`,Ne=o.button`
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
`,Re=o.div`
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
`,Ue=o.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-bottom: 1px solid ${({theme:e})=>e.greenMain};
`,He=o.div`
  display: flex;
  border-radius: 6px 10px 0 0;
  overflow: hidden;
`,le=o.button`
  flex: 1;
  padding: 12px 16px;
  background-color: ${({$isActive:e,theme:r})=>e?r.greenMain:r.ContainerBGColor};
  color: ${({$isActive:e,theme:r})=>e?r.white:r.textBlack};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  
  &:first-child {
    border-right: 1px solid ${({theme:e})=>e.greenMain};
  }
  
  &:hover {
    background-color: ${({$isActive:e,theme:r})=>e?r.darkGreen:r.lightGreen};
    color: ${({$isActive:e,theme:r})=>r.white};
  }

  @media (max-width: 390px) { 
     font-size: 12px;
  }
`,Fe=o.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`,Oe=o.div`
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
`,We=o.div`
  width: 100%;
`,Ve=o.div`
  display: grid;
  grid-template-columns: 32px 1fr 24px;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({theme:e,$isSelected:r,$actionType:i})=>r?i==="add"?e.lightGreen:e.red:e.disabledBG};
  color: ${({theme:e,$isSelected:r})=>r?e.white:e.textBlack};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  box-sizing: border-box;

  &:hover {
    background-color: ${({theme:e,$isSelected:r,$actionType:i})=>r?i==="add"?e.greenMain:e.redDark:e.lightGreen};
    color: ${({theme:e})=>e.white};
  }
`,Ye=o.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`,Ke=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,_e=o.div`
  padding: 0 10px;
  overflow: hidden;
  min-width: 0;
`,qe=o.div`
  font-weight: ${({$isSelected:e})=>e?"600":"500"};
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Je=o.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
`,ee=o.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({$iconType:e,theme:r})=>{switch(e){case"add":return r.greenMain;case"remove":return r.red;case"close":return r.gray;default:return r.gray}}};
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  &:hover {
    transform: scale(1.1);
    background-color: ${({$iconType:e,theme:r})=>{switch(e){case"add":return r.darkGreen;case"remove":return r.redDark;case"close":return r.textGray;default:return r.textGray}}};
  }
`,Qe=o(Ae)`
  width: 15px;
  height: 15px;
  fill: ${({theme:e})=>e.white};
  stroke: ${({theme:e})=>e.white};
  stroke-width: 3px;
`,Xe=o(Se)`
  width: 15px;
  height: 15px;
  fill: ${({theme:e})=>e.white};
  stroke: ${({theme:e})=>e.white};
  stroke-width: 1px;
`,Ze=o(fe)`
  width: 15px;
  height: 15px;
  fill: ${({theme:e})=>e.white};
    stroke: ${({theme:e})=>e.white};
  stroke-width: 0.4px;
`,et=o.div`
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
`,tt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`,ot=o.div`
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
`,rt=o.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`,nt=o.button`
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
`,it=o.button`
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
`,at=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({theme:e})=>e.textGray};
  font-size: 13px;
  text-align: center;
`,st=o.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,f={mobile:"320px",desktop:"1024px"},de=o.div`
  position: sticky; 
  left: 0; 
  right: 0;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
`,te=o.div`
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  
  background: ${({blurred:e,theme:r})=>e?`rgba(${r.ContainerBGColor==="#ffffff"?"255, 255, 255":"77, 77, 77"}, 0.2)`:"transparent"};
  backdrop-filter: ${({blurred:e})=>e?"blur(10px)":"none"};
  -webkit-backdrop-filter: ${({blurred:e})=>e?"blur(10px)":"none"};
  filter: ${({blurred:e})=>e?"blur(3px)":"none"};
  pointer-events: ${({blurred:e})=>e?"none":"auto"};
  border-radius: 16px;
  box-shadow: ${({blurred:e})=>e?"0 4px 30px rgba(0, 0, 0, 0.1)":"none"};

  @media (min-width: ${f.desktop}) {
    align-items: flex-start;
    height: 100%;
  }
`,oe=o.div`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${f.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${f.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }
`,lt=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  
  @media (min-width: ${f.desktop}) {
    flex-direction: row;
    gap: 20px;
  }
`,dt=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media (min-width: ${f.desktop}) {
    margin-bottom: 0;
  }
`,ct=o.div`
  flex: 1;
  min-height: 300px;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 8px;
  
  @media (max-width: ${f.desktop}) {
    min-height: 200px;
  }
`;o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  
  @media (min-width: ${f.desktop}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`;const pt=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  
  @media (min-width: ${f.desktop}) {
    justify-content: center;
  }
`,ht=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${f.desktop}) {
    width: 8rem;
    height: 8rem;
  }
`,xt=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.disabledBG};
`,ut=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,gt=o.label`
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

  @media (min-width: ${f.desktop}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,ft=o.input`
  display: none;
`;o.div`
  flex: 1;
`;const mt=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ce=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,pe=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textBlack};
  font-size: 0.875rem;
  font-weight: 500;
`,he=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,isError:r})=>r?e.red:e.disabledBG};
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
`,bt=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`,W=o.button`
  max-width: 500px;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({theme:e,$hasChanges:r,$isDelete:i})=>i?e.red:r?e.greenMain:e.disabledBG};
  color: ${({theme:e,$hasChanges:r,$isDelete:i})=>i||r?e.white:e.textGray};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: ${({$hasChanges:e,$isDelete:r})=>e||r?"pointer":"not-allowed"};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e,$hasChanges:r,$isDelete:i})=>i?e.redDark:r?e.darkGreen:e.disabledBG};
  }

  &:focus {
    outline: none;
    background-color: ${({theme:e,$hasChanges:r,$isDelete:i})=>i?e.redDark:r?e.darkGreen:e.disabledBG};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    color: ${({theme:e})=>e.textGray};
    cursor: not-allowed;
  }

  @media (max-width: ${f.desktop}) {
    font-size: 0.8rem;
  }

`,wt=o.div`
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
`,kt=o.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  margin: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`,$t=o.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.textBlack};
  font-size: 1.25rem;
  font-weight: 600;
`,vt=o.p`
  margin-bottom: 2rem;
  color: ${({theme:e})=>e.textBlack};
  line-height: 1.5;
`,yt=o.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`,jt=o.button`
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
`,Ct=o.button`
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
`,At=o(Ce)`
  fill: ${({theme:e})=>e.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${f.desktop}) {
    width: 18px;
    height: 18px;
  }
`;o.div`
  display: flex;
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.greenMain};
`;o.button`
  flex: 1;
  padding: 12px 16px;
  background-color: ${({$isActive:e,theme:r})=>e?r.greenMain:"transparent"};
  color: ${({$isActive:e,theme:r})=>e?r.white:r.greenMain};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:first-child {
    border-right: 1px solid ${({theme:e})=>e.greenMain};
  }
  
  &:hover {
    background-color: ${({$isActive:e,theme:r})=>e?r.darkGreen:r.lightGreen+"40"};
  }
  
  &:focus {
    outline: 2px solid ${({theme:e})=>e.greenMain};
    outline-offset: 2px;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;const Mt=()=>{const{teamId:e}=me(),{setTitle:r}=be(),i=xe(),h=we(),{teamDetails:p,fetchTeamDetailsStatus:M,fetchTeamDetailsError:m,updateTeamStatus:w,updateTeamError:z,deleteTeamStatus:j,deleteTeamError:N}=V(d=>d.teams),{updateTeamAthletesStatus:D,updateTeamAthletesError:k}=V(d=>d.athletes),E=M==="loading",G=w==="loading",$=j==="loading",s=D==="loading",[I,x]=a.useState(null),[u,F]=a.useState(null),[v,g]=a.useState(""),[y,B]=a.useState(""),[L,R]=a.useState(!1),[T,C]=a.useState(!1),[U,P]=a.useState({teamName:!1,ageCategory:!1}),[A,O]=a.useState({teamName:"",ageCategory:"",photoPreview:null});a.useEffect(()=>(e&&i(X(e)),()=>{u&&u!==(p==null?void 0:p.logo)&&URL.revokeObjectURL(u),i(ae()),i(Z())}),[e,i]),a.useEffect(()=>{if(p){r(`Профіль команди ${p.name}`);const d=p.name||"",c=p.ageCategory||"",n=p.logo||null;g(d),B(c),F(n),O({teamName:d,ageCategory:c,photoPreview:n}),C(!1)}},[p,r]),a.useEffect(()=>{const d=v!==A.teamName,c=y!==A.ageCategory,n=I!==null||u!==A.photoPreview;C(d||c||n)},[v,y,I,u,A]),a.useEffect(()=>{w==="succeeded"&&(S.success("Дані команди успішно оновлено!"),x(null),i(ae()),i(X(e)),C(!1)),w==="failed"&&z&&S.error(z)},[w,z,i,e]),a.useEffect(()=>{D==="succeeded"&&(S.success("Спортсмени успішно оновлені!"),i(X(e)),i(Z())),D==="failed"&&k&&(S.error(k),i(Z()))},[D,k,i,e]),a.useEffect(()=>{j==="succeeded"&&(S.success("Команду успішно видалено!"),h("/teams"),i(ke())),j==="failed"&&N&&S.error(N)},[j,N,h,i]),a.useEffect(()=>{M==="failed"&&m&&S.error(m)},[M,m]);const Y=d=>{const c=d.target.files[0];if(c){x(c),u&&u!==(p==null?void 0:p.logo)&&URL.revokeObjectURL(u);const n=URL.createObjectURL(c);F(n)}},K=d=>{if(d.key==="Enter"||d.key===" "){const c=document.getElementById("photo-upload");c&&c.click()}},_=async({addedAthletes:d=[],removedAthletes:c=[]})=>{try{d.length>0&&await i(se({teamId:e,operation:"add",athleteIds:d})).unwrap(),c.length>0&&await i(se({teamId:e,operation:"remove",athleteIds:c})).unwrap()}catch(n){console.error("Error updating team athletes:",n)}},q=d=>{d.preventDefault();const c={teamName:!v.trim(),ageCategory:!y.trim()},n=!Object.values(c).some(l=>l);if(P(c),!n){S.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});return}i($e({teamId:e,teamData:{name:v,ageCategory:y,photo:I}}))},J=()=>{R(!0)},Q=()=>{i(ve(e)),R(!1)},H=()=>{R(!1)};return E?t.jsx(de,{children:t.jsx(re,{})}):M==="failed"?t.jsx(te,{children:t.jsxs(oe,{style:{textAlign:"center",padding:"2rem"},children:[t.jsx("h2",{style:{color:"inherit"},children:"Помилка завантаження"}),t.jsx("p",{style:{color:"inherit"},children:m}),t.jsx(W,{onClick:()=>h("/teams"),children:"Повернутися до списку команд"})]})}):p?t.jsxs(t.Fragment,{children:[(G||$||s)&&t.jsx(de,{children:t.jsx(re,{})}),L&&t.jsx(wt,{children:t.jsxs(kt,{children:[t.jsx($t,{children:"Підтвердження видалення"}),t.jsxs(vt,{children:['Ви впевнені, що хочете видалити команду "',p.name,'"?']}),t.jsxs(yt,{children:[t.jsx(jt,{onClick:Q,children:"Видалити"}),t.jsx(Ct,{onClick:H,children:"Скасувати"})]})]})}),t.jsx(te,{blurred:G||$||s,children:t.jsxs(oe,{children:[t.jsxs(lt,{children:[t.jsxs(dt,{children:[t.jsx(pt,{children:t.jsxs(ht,{children:[t.jsx(xt,{children:t.jsx(ut,{src:u||ye,alt:"Фото команди"})}),t.jsx(gt,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:K,children:t.jsx(At,{})}),t.jsx(ft,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:Y})]})}),t.jsxs(mt,{children:[t.jsxs(ce,{children:[t.jsx(pe,{htmlFor:"teamName",children:"Назва команди *"}),t.jsx(he,{id:"teamName",type:"text",placeholder:"Введіть назву команди",value:v,onChange:d=>{g(d.target.value),d.target.value.trim()&&P(c=>({...c,teamName:!1}))},isError:U.teamName})]}),t.jsxs(ce,{children:[t.jsx(pe,{htmlFor:"ageCategory",children:"Вікова категорія *"}),t.jsx(he,{id:"ageCategory",type:"text",placeholder:"Введіть вікову категорію",value:y,onChange:d=>{B(d.target.value),d.target.value.trim()&&P(c=>({...c,ageCategory:!1}))},isError:U.ageCategory})]})]})]}),t.jsx(ct,{children:t.jsx(Ge,{teamAthletes:p.athletes||[],teamId:e,onAthletesChange:_})})]}),t.jsx(bt,{children:t.jsxs("div",{style:{display:"flex",gap:"1rem",width:"100%",maxWidth:"500px"},children:[t.jsx(W,{type:"button",onClick:q,disabled:G||!T,$hasChanges:T,children:G?"Збереження...":"Зберегти дані команди"}),t.jsx(W,{type:"button",onClick:J,disabled:$,$isDelete:!0,children:$?"Видалення...":"Видалити команду"})]})})]})})]}):t.jsx(te,{children:t.jsxs(oe,{style:{textAlign:"center",padding:"2rem"},children:[t.jsx("h2",{style:{color:"inherit"},children:"Команду не знайдено"}),t.jsx(W,{onClick:()=>h("/teams"),children:"Повернутися до списку команд"})]})})};export{Mt as default};
