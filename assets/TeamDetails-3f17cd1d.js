import{r as o,d as r,b as pe,a as re,q as Ne,t as xe,k as Fe,l as me,j as t,i as ie,L as ee,v as Xe,S as oe,w as He,x as ae,z as Oe,A as te,y,B as Ve,C as We,D as Ze,u as _e,m as qe,E as se,F as fe,G as le,H as Ke,I as be,J as Qe,K as Je}from"./index-134eba29.js";import{P as et}from"./PlaceholderTeam-7b26a08e.js";import{p as tt}from"./PlaceholderProfile-3c1b0d36.js";import{S as rt,u as nt,N as ot}from"./CameraIcon-8ceefbdc.js";import{S as we}from"./DeleteIcon-5e0b1f19.js";const Ge=e=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M6 12H18M12 6V18",strokeLinecap:"round",strokeLinejoin:"round"})),Ie=e=>o.createElement("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"none",...e},o.createElement("path",{fillRule:"evenodd",d:"M3.5 7.75A.75.75 0 014.25 7h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75z",clipRule:"evenodd"})),it=({teamAthletes:e=[],onAthletesChange:i,teamId:s,onSelectionChange:$})=>{const d=pe(),[Y,z]=o.useState(new Set),{entities:E,list:j,loading:b,hasMore:B,currentPage:m,isAllDataLoaded:R}=re(l=>l.athletes),{teamAthletes:{entities:D,list:G,loading:T,hasMore:x,currentPage:A,isAllDataLoaded:C}}=re(l=>l.athletes),[h,v]=o.useState("remove"),[w,I]=o.useState(new Set),[U,W]=o.useState(!1),[S,P]=o.useState(null),k=o.useRef(null),L=o.useRef(null),V=o.useRef(!1),N=o.useRef(!1),X=o.useRef(!1);o.useEffect(()=>{$&&$(w.size>0)},[w,$]),o.useEffect(()=>{I(new Set)},[h]),o.useEffect(()=>{if(h==="remove"&&s){d(Ne());const l=setTimeout(()=>{d(xe({teamId:s,page:1}))},50);return()=>clearTimeout(l)}},[d,h,s]),o.useEffect(()=>{if(h==="add"){d(Fe());const l=setTimeout(()=>{V.current=!0,d(me({page:1,filter:"withoutTeam"}))},50);return()=>clearTimeout(l)}},[d,h]);const Z=o.useCallback(()=>{h!=="add"||!B||b||N.current||R||(N.current=!0,d(me({page:m,filter:"withoutTeam"})).finally(()=>{N.current=!1}))},[d,B,b,m,R,h]),H=o.useCallback(()=>{h!=="remove"||!x||T||X.current||C||!s||(X.current=!0,d(xe({teamId:s,page:A})).finally(()=>{X.current=!1}))},[d,x,T,A,C,h,s]),F=o.useCallback(()=>{if(h==="add"){if(b||!B||N.current||R)return;if(k.current){const{scrollTop:l,scrollHeight:u,clientHeight:M}=k.current;l+M>=u-20&&Z()}}else if(h==="remove"){if(T||!x||X.current||C)return;if(L.current){const{scrollTop:l,scrollHeight:u,clientHeight:M}=L.current;l+M>=u-20&&H()}}},[B,b,Z,x,T,H,C,h]);o.useEffect(()=>{const l=h==="add"?k.current:L.current;if(l)return l.addEventListener("scroll",F),()=>l.removeEventListener("scroll",F)},[F,h]);const _=l=>{I(u=>{const M=new Set(u);return M.has(l)?M.delete(l):M.add(l),M})},q=()=>{if(w.size===0)return;const l=Array.from(w);P({type:h,athleteIds:l,count:w.size}),W(!0)},J=()=>{S&&(S.type==="add"?i({addedAthletes:S.athleteIds}):S.type==="remove"&&i({removedAthletes:S.athleteIds}),W(!1),P(null),I(new Set))},K=()=>{W(!1),P(null)},Q=()=>{I(new Set)},a=G.map(l=>{const u=D[l];return u?{id:u.id,name:`${u.lastName} ${u.firstName} ${u.patronymic||""}`.trim(),photo:u.photo}:null}).filter(Boolean),g=h==="add"?j.map(l=>{const u=E[l];return u?{id:u._id||u.id,name:`${u.lastName} ${u.firstName} ${u.patronymic||""}`.trim(),photo:u.photo}:null}).filter(Boolean):[],f=h==="remove"?a:g,c=h==="remove"?T:b,n=()=>Array.from(w).map(l=>{const u=f.find(M=>M.id===l);return u?u.name:""}).filter(Boolean),p=l=>{z(u=>new Set(u).add(l))};return t.jsxs(t.Fragment,{children:[U&&S&&t.jsx(at,{children:t.jsxs(st,{children:[t.jsx(lt,{children:"Підтвердження дії"}),t.jsxs(dt,{children:[t.jsxs(ct,{children:["Ви впевнені, що хочете ",S.type==="add"?"додати до команди":"видалити з команди"," ",S.count," спортсмен",S.count>1?"ів":"а","?"]}),t.jsx(ht,{children:n().map((l,u)=>t.jsxs(pt,{children:["• ",l]},u))})]}),t.jsxs(ut,{children:[t.jsx(gt,{onClick:J,$actionType:S.type,children:S.type==="add"?"Додати":"Видалити"}),t.jsx(xt,{onClick:K,children:"Скасувати"})]})]})}),t.jsxs(mt,{children:[t.jsx(ft,{children:t.jsxs(bt,{children:[t.jsx(ve,{$isActive:h==="remove",onClick:()=>v("remove"),children:"Видалити з команди"}),t.jsx(ve,{$isActive:h==="add",onClick:()=>v("add"),children:"Додати до команди"})]})}),t.jsxs(wt,{children:[t.jsxs(vt,{ref:h==="add"?k:L,$hasSelectedAthletes:w.size>0,children:[f.length>0?f.map(l=>t.jsx(yt,{className:"athlete-item",children:t.jsxs(kt,{as:"div",onClick:()=>_(l.id),$isSelected:w.has(l.id),$actionType:h,children:[t.jsx($t,{children:t.jsx(Ct,{to:`/athletes/${l.id}`,title:`Перейти до профілю спортсмена ${l.name}`,"aria-label":`Перейти до профілю спортсмена ${l.name}`,children:t.jsx(jt,{loading:"lazy",src:Y.has(l.id)?ie:l.photo||tt,onError:()=>p(l.id),alt:l.name})})}),t.jsx(St,{children:t.jsx(Mt,{$isSelected:w.has(l.id),title:`Перейти до профілю спортсмена ${l.name}`,"aria-label":`Перейти до профілю спортсмена ${l.name}`,children:l.name})}),t.jsx(zt,{children:w.has(l.id)?t.jsx(de,{$iconType:"close",children:t.jsx(Tt,{onClick:u=>{u.stopPropagation(),_(l.id)}})}):h==="add"?t.jsx(de,{$iconType:"add",children:t.jsx(Et,{})}):t.jsx(de,{$iconType:"remove",children:t.jsx(Bt,{})})})]})},l.id)):t.jsxs(Dt,{children:[h==="remove"&&!c&&"В команді немає спортсменів",h==="add"&&!c&&"Спортсменів без команди не знайдено"]}),c&&t.jsx(Yt,{children:t.jsx(ee,{})})]}),w.size>0&&t.jsx(Pt,{children:t.jsxs(Lt,{children:[t.jsxs(Gt,{children:["Обрано: ",w.size," спортсмен",w.size>1?"ів":"а"]}),t.jsxs(It,{children:[t.jsx(At,{onClick:q,children:h==="add"?"Додати":"Видалити"}),t.jsx(Rt,{onClick:Q,children:"Скасувати"})]})]})})]})]})]})},at=r.div`
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
`,st=r.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 480px;
  width: 90%;
  margin: 20px;
  overflow: hidden;
`,lt=r.div`
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  padding: 16px 20px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`,dt=r.div`
  padding: 24px 20px;
`,ct=r.p`
  color: ${({theme:e})=>e.textBlack};
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 16px 0;
  text-align: center;
`,ht=r.div`
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
`,pt=r.div`
  color: ${({theme:e})=>e.textBlack};
  font-size: 14px;
  margin-bottom: 4px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ut=r.div`
  display: flex;
  gap: 12px;
  padding: 0 20px 20px 20px;
`,gt=r.button`
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
`,xt=r.button`
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
`,mt=r.div`
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
`,ft=r.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-bottom: 1px solid ${({theme:e})=>e.greenMain};
`,bt=r.div`
  display: flex;
  border-radius: 6px 10px 0 0;
  overflow: hidden;
`,ve=r.button`
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
`,wt=r.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`,vt=r.div`
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
`,yt=r.div`
  width: 100%;
`,kt=r.div`
  display: grid;
  grid-template-columns: 32px 1fr 24px;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({theme:e,$isSelected:i,$actionType:s})=>i?s==="add"?e.lightGreen:e.red:e.disabledBG};
  color: ${({theme:e,$isSelected:i})=>i?e.white:e.textBlack};
  border-radius: 8px;
  cursor: default;
  transition: all 0.2s;
  box-sizing: border-box;

  &:hover {
    background-color: ${({theme:e,$isSelected:i,$actionType:s})=>i?s==="add"?e.greenMain:e.redDark:e.lightGreen};
    color: ${({theme:e})=>e.white};
  }
`,$t=r.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`,jt=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Ct=r(Xe)`
  &:hover {
    opacity: 0.6;  
    transition: all 0.2s ease;
  }
`,St=r.div`
  padding: 0 10px;
  overflow: hidden;
  min-width: 0;
`,Mt=r.div`
  font-weight: ${({$isSelected:e})=>e?"600":"500"};
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,zt=r.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
`,de=r.div`
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
`,Et=r(Ge)`
  width: 15px;
  height: 15px;
  fill: ${({theme:e})=>e.white};
  stroke: ${({theme:e})=>e.white};
  stroke-width: 3px;
`,Bt=r(Ie)`
  width: 15px;
  height: 15px;
  fill: ${({theme:e})=>e.white};
  stroke: ${({theme:e})=>e.white};
  stroke-width: 1px;
`,Tt=r(oe)`
  width: 15px;
  height: 15px;
  fill: ${({theme:e})=>e.white};
    stroke: ${({theme:e})=>e.white};
  stroke-width: 0.4px;
`,Pt=r.div`
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
`,Lt=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`,Gt=r.div`
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
`,It=r.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`,At=r.button`
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
`,Rt=r.button`
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
`,Dt=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({theme:e})=>e.textGray};
  font-size: 13px;
  text-align: center;
`,Yt=r.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,O={mobile:"320px",desktop:"1024px"},ye=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`,ke=r.div`
  padding: 2rem 3rem;
  text-align: center;
  max-width: 500px;
  width: 100%;
  h2 {
    margin-bottom: 10px;
    color: ${({theme:e})=>e.red};
  }
`,$e=r.div`
  position: sticky; 
  left: 0; 
  right: 0;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
`,Ut=r.div`
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

  @media (min-width: ${O.desktop}) {
    align-items: flex-start;
    height: 100%;
  }
`,Nt=r.div`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${O.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${O.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }
`,Ft=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  
  @media (min-width: ${O.desktop}) {
    flex-direction: row;
    gap: 20px;
  }
`,Xt=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media (min-width: ${O.desktop}) {
    margin-bottom: 0;
  }
`,Ht=r.div`
  flex: 1;
  min-height: 300px;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 8px;
  
  @media (max-width: ${O.desktop}) {
    min-height: 200px;
  }
`;r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  
  @media (min-width: ${O.desktop}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`;const Ot=r.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  
  @media (min-width: ${O.desktop}) {
    justify-content: center;
  }
`,Vt=r.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${O.desktop}) {
    width: 8rem;
    height: 8rem;
  }
`,Wt=r.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.disabledBG};
`,Zt=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,_t=r.label`
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

  @media (min-width: ${O.desktop}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,qt=r.input`
  display: none;
`;r.div`
  flex: 1;
`;const Kt=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,je=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Ce=r.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textBlack};
  font-size: 0.875rem;
  font-weight: 500;
`,Se=r.input`
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
`,Qt=r.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`,ne=r.button`
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

  @media (max-width: ${O.desktop}) {
    font-size: 0.8rem;
  }

`,Jt=r.div`
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
`,er=r.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  margin: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`,tr=r.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.textBlack};
  font-size: 1.25rem;
  font-weight: 600;
`,rr=r.p`
  margin-bottom: 2rem;
  color: ${({theme:e})=>e.textBlack};
  line-height: 1.5;
`,nr=r.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`,or=r.button`
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
`,ir=r.button`
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
`,ar=r(rt)`
  fill: ${({theme:e})=>e.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${O.desktop}) {
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
`;const sr=r.div`
margin-top: 10px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.1);
  position: relative;
`,lr=r.div`
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
`,dr=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  transform-origin: center;
`,cr=r.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    ${({theme:e})=>e.mainBGColor==="#333"?`rgba(255, 255, 255, 0.1) 0%,
       rgba(255, 255, 255, 0.05) 20%,
       rgba(255, 255, 255, 0.02) 50%,
       rgba(255, 255, 255, 0.08) 80%,
       rgba(255, 255, 255, 0.15) 100%`:`rgba(0, 0, 0, 0.6) 0%,
       rgba(0, 0, 0, 0.25) 20%,
       rgba(0, 0, 0, 0.15) 50%,
       rgba(0, 0, 0, 0.25) 80%,
       rgba(0, 0, 0, 0.6) 100%`}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,hr=r.div`
  text-align: center;
  color: white;
  width: 100%;
  max-width: 600px;
`,pr=r.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,Me=r.span`
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
`,ur=r.div`
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
`,gr=r.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`,xr=r.div`
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`,mr=r.div`
  height: 100%;
  background: #10b981;
  border-radius: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 0 4px rgba(16, 185, 129, 0.5);
`,fr=r.button`
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
`,br=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  
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
`,wr=r.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4); 
  z-index: 10;
`,vr=r.div`
  position: relative;
  width: 90%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  background: rgba(254, 254, 254, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  overflow: hidden;
  z-index: 1001;
`,yr=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.9rem;

  background: rgba(255,255,255,0.1); 
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  z-index: 2;

  @media (max-width: 768px) {
  flex-direction: column;
    align-items: flex-start; 
    justify-content: flex-start;
  }
`,kr=r.h2`
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
`,$r=r.span`
  font-weight: normal;
  font-size: 1rem;
  margin-left: 0.5rem;
  text-transform: uppercase;
 color: ${({theme:e})=>e.white};
  @media (max-width: 768px) {
    margin-left: 0; 
    font-size: 0.9rem;
  }
`,ze=r.button`
  position: absolute;
  top: 0.9rem;
  right: 1.5rem;
  background:  ${({theme:e})=>e.white};
  border: 3px solid ${({theme:e})=>e.greenMain};
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
`,jr=r.div`
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
`,Cr=r.div`
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
`;r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.2s ease;

  @media (max-width: 768px) {
    border-radius: 6px;
  }
`;const Sr=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  opacity: 0.7;
  filter: grayscale(0.3);

  @media (max-width: 768px) {
    border-radius: 6px;
  }
`,Mr=r.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 10; 

  @media (max-width: 768px) {
    opacity: 1;
    top: 10px;
    right: 10px;
    gap: 0.25rem;
  }
`,Ae=r.button`
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
`,Ee=r(Ae)`
  border: 2px solid ${({theme:e})=>e.red};
  display: flex;
  align-items: center;
  justify-content: center;

svg {
  stroke: ${({theme:e})=>e.red};
  fill: none;
  width: 1.2rem;
  height: 1.2rem;
  transition: stroke 0.2s;
}

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.red};
    color: ${({theme:e})=>e.white};

    svg {
      stroke: ${({theme:e})=>e.white};
      fill: none; 
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
`,Be=r(Ae)`
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
`,zr=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
  height: 200px;
`,Er=r.div`
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.5);   
  backdrop-filter: blur(30px);           
  position: sticky;
  bottom: 0;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.75rem;
  }
`,ce=r.div`
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
`,Br=r.input`
  display: none;
`,Tr=r.label`
  display: inline-block;   
  width: auto;          

  @media (max-width: 768px) {
    display: block;       
    width: 100%;         
    text-align: center;   
  }
`,Te=r.button`
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
  min-width: 100%;  
  display: block;   

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
`;const Pr=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  text-align: center;
  margin: 3rem 2rem;
  color: ${({theme:e})=>e.textGray};
  flex: 1;
  min-height: 70%; 

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
`;const Lr=r.p`
  text-align: center;
  font-size: 1rem;
  color: ${({theme:e})=>e.white};
  margin: 2rem auto;
  width: 100%;
`,Gr=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  cursor: pointer;

  body& {
    overflow: hidden;
  }
`;r.div`
  display: none; 
`;const Ir=r.div`
  position: relative;
  width: 90vw;
  height: 90vh;
  max-width: 1200px;
  max-height: 800px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 95vw;
    height: 85vh;
  }
`,Ar=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  max-height: 90%;
`;r.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
`;const Rr=r.div`
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
`,Dr=r.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius||"8px"};
  background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
              linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
              linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;

  @media (max-width: 768px) {
    border-radius: ${e=>e.$borderRadius==="8px"?"6px":e.$borderRadius||"6px"};
  }
`,Yr=r.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: blur(5px);
  transform: scale(1.02); 
  opacity: ${e=>e.$loaded?0:1};
  transition: opacity 0.3s ease;
  z-index: 1;
`,Pe=r.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: ${e=>e.$objectFit||"cover"};
  object-position: center;
  opacity: ${e=>e.$loaded?1:0};
  transition: opacity 0.5s ease;
  z-index: 2;
  cursor: ${e=>e.$cursor||"pointer"};
  
  ${e=>e.$isFullscreen&&`
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
    position: relative;
  `}
`,Ur=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* Нижчий z-index ніж кнопки */
  opacity: ${e=>e.$loaded?0:1};
  transition: opacity 0.3s ease;
  pointer-events: none;
`,Nr=r.div`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,Fr=e=>{if(!e)return"";try{const i=new URL(e);return i.searchParams.set("w","50"),i.searchParams.set("q","30"),i.toString()}catch{return e}},Xr=(e=10,i=10)=>{const s=document.createElement("canvas");s.width=e,s.height=i;const $=s.getContext("2d"),d=$.createLinearGradient(0,0,e,i);return d.addColorStop(0,"#f0f0f0"),d.addColorStop(1,"#e0e0e0"),$.fillStyle=d,$.fillRect(0,0,e,i),s.toDataURL()},Hr=({src:e,alt:i,onClick:s,onError:$,className:d,$borderRadius:Y,$objectFit:z="cover",$cursor:E="pointer",$isFullscreen:j=!1,style:b,loading:B="lazy"})=>{const[m,R]=o.useState(!1),[D,G]=o.useState(!1),[T,x]=o.useState("");o.useEffect(()=>{if(e){const h=Fr(e);x(h!==e?h:Xr()),R(!1),G(!1)}},[e]);const A=()=>{R(!0)},C=h=>{G(!0),$&&$(h)};return j?t.jsx(Pe,{src:e,alt:i,onClick:s,onLoad:A,onError:C,$loaded:m,$objectFit:z,$cursor:E,$isFullscreen:j,className:d,style:b}):t.jsxs(Dr,{$borderRadius:Y,className:d,style:b,children:[T&&!D&&t.jsx(Yr,{src:T,alt:"",$loaded:m,loading:"eager"}),e&&t.jsx(Pe,{src:e,alt:i,onClick:s,onLoad:A,onError:C,$loaded:m,$objectFit:z,$cursor:E,loading:B}),!m&&!D&&t.jsx(Ur,{$loaded:m,children:t.jsx(Nr,{})})]})},Le=e=>o.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.163 2.819C9 3.139 9 3.559 9 4.4V11H7.803c-.883 0-1.325 0-1.534.176a.75.75 0 0 0-.266.62c.017.274.322.593.931 1.232l4.198 4.401c.302.318.453.476.63.535a.749.749 0 0 0 .476 0c.177-.059.328-.217.63-.535l4.198-4.4c.61-.64.914-.96.93-1.233a.75.75 0 0 0-.265-.62C17.522 11 17.081 11 16.197 11H15V4.4c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656C13.861 2 13.441 2 12.6 2h-1.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zM5 21a1 1 0 0 0 1 1h12a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1z"})),Or=e=>o.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("g",{id:"Navigation / House_02"},o.createElement("path",{id:"Vector",d:"M4 11.4522V16.8002C4 17.9203 4 18.4807 4.21799 18.9086C4.40973 19.2849 4.71547 19.5906 5.0918 19.7823C5.5192 20.0001 6.07899 20.0001 7.19691 20.0001H16.8031C17.921 20.0001 18.48 20.0001 18.9074 19.7823C19.2837 19.5906 19.5905 19.2849 19.7822 18.9086C20 18.4811 20 17.9216 20 16.8037V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522Z",strokeLinecap:"round",strokeLinejoin:"round"}))),Vr=r.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  cursor: ${e=>e.$isDragging?"grabbing":e.$isZoomed?"grab":"zoom-in"};
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
`,Wr=r.img`
  display: block;
  transition: ${e=>e.$isTransitioning?"transform 0.2s ease-out":"none"};
  transform: translate(${e=>e.$translateX}px, ${e=>e.$translateY}px) scale(${e=>e.$scale});
  transform-origin: center center;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Zr=r.div`
  position: absolute;
  top: 20px;
  right: 80px;
  display: flex;
  gap: 10px;
  z-index: 100;

    @media (max-width: 768px) {
    top: 12px;
  }
`,he=r.button`
  width: 32px;
  height: 32px;
    border-radius: 50%;
    border: 1.4px solid ${({theme:e})=>e.white};
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;  

  svg {
    width: 18px;
    height: 18px;
    stroke: white;
    stroke-width: 2px;
    pointer-events: none;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    border: 1.4px solid ${({theme:e})=>e.greenMain};
    svg {
        stroke: ${({theme:e})=>e.greenMain}
    ;}
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;

    svg {
      stroke: #aaa;
      transform: none;
    }
  }
`,_r=({src:e,alt:i,onError:s,...$})=>{const[d,Y]=o.useState(1),[z,E]=o.useState(0),[j,b]=o.useState(0),[B,m]=o.useState(!1),[R,D]=o.useState(!1),[G,T]=o.useState({width:0,height:0,left:0,top:0}),[x,A]=o.useState({width:0,height:0}),C=o.useRef(null),h=o.useRef(null),v=o.useRef({x:0,y:0,translateX:0,translateY:0}),w=o.useRef(0),I=.5,U=5,W=.8,S=o.useCallback(()=>{if(C.current&&h.current){const a=C.current.getBoundingClientRect(),g=h.current.getBoundingClientRect();A({width:a.width,height:a.height}),T({width:g.width,height:g.height,left:g.left-a.left,top:g.top-a.top})}},[]),P=o.useCallback((a,g,f)=>{if(!G.width||!G.height||!x.width||!x.height)return{x:a,y:g};const c=G.width*f,n=G.height*f;if(c<=x.width)a=0;else{const p=(c-x.width)/2;a=Math.max(-p,Math.min(p,a))}if(n<=x.height)g=0;else{const p=(n-x.height)/2;g=Math.max(-p,Math.min(p,g))}return{x:a,y:g}},[G,x]),k=o.useCallback((a,g,f)=>{const c=Math.max(I,Math.min(U,d+a*W));if(c!==d){if(D(!0),setTimeout(()=>D(!1),200),g!==void 0&&f!==void 0&&C.current){const n=C.current.getBoundingClientRect(),p=g-n.left,l=f-n.top,u=p-z-n.width/2,M=l-j-n.height/2,ue=c/d,Re=u*ue,De=M*ue,Ye=z-(Re-u),Ue=j-(De-M),ge=P(Ye,Ue,c);E(ge.x),b(ge.y)}else{const n=P(0,0,c);E(n.x),b(n.y)}Y(c)}},[d,z,j,P]),L=o.useCallback(a=>{a.preventDefault();const f=(Math.abs(a.deltaY)>50?a.deltaY*2:a.deltaY)>0?-1:1;k(f,a.clientX,a.clientY)},[k]),V=o.useCallback(a=>{d<=1||(m(!0),v.current={x:a.clientX,y:a.clientY,translateX:z,translateY:j},a.preventDefault())},[d,z,j]),N=o.useCallback(a=>{if(!B||d<=1)return;const g=a.clientX-v.current.x,f=a.clientY-v.current.y;if(Math.abs(g)<1&&Math.abs(f)<1)return;const c=v.current.translateX+g,n=v.current.translateY+f,p=P(c,n,d);E(p.x),b(p.y)},[B,d,P]),X=o.useCallback(()=>{B&&m(!1)},[B]),Z=o.useCallback(a=>{if(a.touches.length===1)m(!0),v.current={x:a.touches[0].clientX,y:a.touches[0].clientY,translateX:z,translateY:j};else if(a.touches.length===2){const g=a.touches[0],f=a.touches[1],c=Math.sqrt(Math.pow(f.clientX-g.clientX,2)+Math.pow(f.clientY-g.clientY,2));w.current=c}},[z,j]),H=o.useCallback(a=>{if(a.preventDefault(),a.touches.length===1&&B&&d>1){const g=a.touches[0].clientX-v.current.x,f=a.touches[0].clientY-v.current.y,c=v.current.translateX+g,n=v.current.translateY+f,p=P(c,n,d);E(p.x),b(p.y)}else if(a.touches.length===2){const g=a.touches[0],f=a.touches[1],c=Math.sqrt(Math.pow(f.clientX-g.clientX,2)+Math.pow(f.clientY-g.clientY,2));if(w.current>0){const n=c/w.current,p=(g.clientX+f.clientX)/2,l=(g.clientY+f.clientY)/2,u=Math.max(I,Math.min(U,d*n));u!==d&&k(u>d?1:-1,p,l)}w.current=c}},[B,d,k,P]),F=o.useCallback(()=>{m(!1),w.current=0},[]),_=o.useCallback(a=>{const g=d>1?1:3;D(!0),setTimeout(()=>D(!1),200),g===1?(Y(1),E(0),b(0)):k(2,a.clientX,a.clientY)},[d,k]),q=o.useCallback(()=>{if(C.current){const a=C.current.getBoundingClientRect();k(1,a.left+a.width/2,a.top+a.height/2)}},[k]),J=o.useCallback(()=>{if(C.current){const a=C.current.getBoundingClientRect();k(-1,a.left+a.width/2,a.top+a.height/2)}},[k]),K=o.useCallback(()=>{D(!0),setTimeout(()=>D(!1),200),Y(1),E(0),b(0)},[]),Q=o.useCallback(()=>{setTimeout(()=>{S()},100)},[S]);return o.useEffect(()=>{const a=()=>{S();const g=P(z,j,d);E(g.x),b(g.y)};return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[S,P,z,j,d]),o.useEffect(()=>{S()},[d,z,j,S]),o.useEffect(()=>{const a=C.current;if(a)return a.addEventListener("wheel",L,{passive:!1}),a.addEventListener("mousemove",N),a.addEventListener("touchmove",H,{passive:!1}),window.addEventListener("mouseup",X),window.addEventListener("touchend",F),()=>{a.removeEventListener("wheel",L),a.removeEventListener("mousemove",N),a.removeEventListener("touchmove",H),window.removeEventListener("mouseup",X),window.removeEventListener("touchend",F)}},[L,N,X,H,F]),t.jsxs(Vr,{ref:C,$isDragging:B,$isZoomed:d>1,onMouseDown:V,onDoubleClick:_,onTouchStart:Z,...$,children:[t.jsxs(Zr,{children:[t.jsx(he,{onClick:J,disabled:d<=I,title:"Зменшити",children:t.jsx(Ie,{})}),t.jsx(he,{onClick:K,disabled:d===1&&z===0&&j===0,title:"Скинути масштаб",children:t.jsx(Or,{})}),t.jsx(he,{onClick:q,disabled:d>=U,title:"Збільшити",children:t.jsx(Ge,{})})]}),t.jsx(Wr,{ref:h,src:e,alt:i,$scale:d,$translateX:z,$translateY:j,$isTransitioning:R,onLoad:Q,onError:s,draggable:!1})]})},qr=({teamId:e,onSelectionChange:i})=>{const s=pe(),{teamGallery:$,galleryCurrentPage:d,galleryHasMore:Y,fetchTeamGalleryStatus:z,uploadTeamPhotoStatus:E,deleteTeamPhotoStatus:j,storageInfo:b,teamDetails:B,uploadTeamPhotoError:m}=re(n=>n.teams),[R,D]=o.useState(!1),[G,T]=o.useState(!1),[x,A]=o.useState(null),[C,h]=o.useState(!1),[v,w]=o.useState(null),[I,U]=o.useState(new Set),[W,S]=o.useState(!0),P=o.useRef(null),k=o.useRef(null),L=E==="loading",V=j==="loading";o.useEffect(()=>(e&&(s(He()),s(ae({teamId:e,page:1})),s(Oe())),()=>{s(te()),w(null),U(new Set),S(!0)}),[e,s]),o.useEffect(()=>{i&&i(v!==null)},[v,i]),o.useEffect(()=>{E==="succeeded"&&(y.success("Фото успішно завантажено!"),w(null),s(te()),k.current&&(k.current.value="")),E==="failed"&&(m?m.includes("File too large")||m.includes("max file size")||m.includes("size")?y.error("Файл занадто великий (макс. 5MB)"):m.includes("Insufficient storage")||m.includes("not enough space")||m.includes("storage")?y.error("Недостатньо місця в сховищі"):m.includes("Server not responding")||m.includes("network error")||m.includes("server")?y.error("Сервер не відповідає"):m.includes("Invalid file type")||m.includes("file type")||m.includes("format")?y.error("Файл не того формату"):y.error("Помилка при завантаженні фото"):y.error("Помилка при завантаженні фото"),s(te()),k.current&&(k.current.value=""))},[E,m,s]),o.useEffect(()=>{j==="succeeded"&&(y.success("Фото успішно видалено!"),s(te()),G&&x&&!$.find(n=>n.id===x.id)&&(T(!1),A(null))),j==="failed"&&(y.error("Помилка при видаленні фото"),s(te()))},[j,s,G,x,$]);const N=o.useCallback(()=>{if(!P.current||C||!Y)return;const n=P.current,{scrollTop:p,scrollHeight:l,clientHeight:u}=n;l-p<=u+100&&(h(!0),s(ae({teamId:e,page:d+1})).unwrap().catch(M=>{M.message&&M.message.includes("Server not responding")&&y.error("Сервер не відповідає")}).finally(()=>{h(!1)}))},[s,e,d,Y,C]);o.useEffect(()=>{const n=P.current;if(n&&R)return n.addEventListener("scroll",N),()=>n.removeEventListener("scroll",N)},[N,R]);const X=n=>{U(p=>new Set([...p,n]))},Z=n=>{const p=n.target.files[0];if(p){if(!p.type.startsWith("image/")){y.error("Файл не того формату");return}if(p.size>5*1024*1024){y.error("Файл занадто великий (макс. 5MB)");return}w(p)}},H=()=>{w(null),k.current&&(k.current.value="")},F=async()=>{if(!v){y.warning("Оберіть файл для завантаження");return}if(b&&b.remainingBytes<v.size){Math.round(b.remainingBytes/(1024*1024)),Math.round(v.size/(1024*1024)),y.error("Недостатньо місця в сховищі");return}s(Ve({teamId:e,photo:v})).unwrap().catch(n=>{n.message&&(n.message.includes("File too large")?y.error("Файл занадто великий (макс. 5MB)"):n.message.includes("Insufficient storage")?y.error("Недостатньо місця в сховищі"):n.message.includes("Server not responding")?y.error("Сервер не відповідає"):n.message.includes("Invalid file type")&&y.error("Файл не того формату"))})},_=n=>{s(We({teamId:e,photoId:n}))},q=async(n,p)=>{try{const l=await fetch(n,{mode:"cors"});if(!l.ok)throw new Error("Server not responding");const u=await l.blob(),M=document.createElement("a");M.href=URL.createObjectURL(u),M.download=`team-${e}-photo-${p}.jpg`,document.body.appendChild(M),M.click(),M.remove(),URL.revokeObjectURL(M.href)}catch(l){l.message.includes("Server not responding")||l.message.includes("Failed to fetch")?y.error("Сервер не відповідає"):y.error("Помилка завантаження фото"),console.error(l)}},J=()=>{D(!0),S(!0),$.length===0&&s(ae({teamId:e,page:1})).unwrap().catch(n=>{n.message&&n.message.includes("Server not responding")&&y.error("Сервер не відповідає")})},K=()=>{D(!1),T(!1),A(null),v&&(w(null),k.current&&(k.current.value=""))},Q=n=>{if(I.has(n.id)){y.error("Помилка завантаження фото");return}A(n),T(!0)},a=n=>{n.target===n.currentTarget&&K()},g=n=>{if(n===0)return"0 MB";const p=1024,l=["B","KB","MB","GB"],u=Math.floor(Math.log(n)/Math.log(p));return parseFloat((n/Math.pow(p,u)).toFixed(1))+" "+l[u]},f=$&&$.length>0?$[0]:null,c=(B==null?void 0:B.galleryCount)||$.length||0;return t.jsxs(t.Fragment,{children:[t.jsx(sr,{children:t.jsxs(lr,{onClick:J,children:[t.jsx(dr,{src:f&&!I.has(f.id)?f.url:ie,alt:"Фон галереї",onError:()=>f&&X(f.id)}),t.jsx(cr,{children:t.jsxs(hr,{children:[t.jsx(pr,{children:"Галерея команди"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",justifyContent:"center",flexWrap:"wrap",marginBottom:"1rem"},children:[c>0?t.jsxs(Me,{children:[c," фото"]}):t.jsx(Me,{children:"Поки що немає фото"}),b&&t.jsxs(ur,{children:[t.jsxs(gr,{children:[g(b.usedBytes)," / ",g(b.limitBytes)]}),t.jsx(xr,{children:t.jsx(mr,{style:{width:`${Math.min(b.usedPercentage,100)}%`,backgroundColor:b.usedPercentage>90?"#ef4444":b.usedPercentage>70?"#f59e0b":"#10b981"}})})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx(fr,{children:c>0?"Переглянути всі фото":"Додати фото"})})]})})]})}),R&&t.jsxs(br,{children:[t.jsx(wr,{onClick:a}),t.jsxs(vr,{onClick:n=>n.stopPropagation(),children:[t.jsxs(yr,{children:[t.jsxs(kr,{children:["Галерея команди",c>0&&t.jsxs($r,{children:["(",c," фото)"]})]}),t.jsx(ze,{onClick:K,title:"Закрити",children:t.jsx(oe,{})})]}),t.jsx("div",{ref:P,style:{flex:1,overflowY:"auto",padding:"1.5rem",paddingBottom:"10px"},children:$.length>0?t.jsxs(t.Fragment,{children:[t.jsx(jr,{children:$.map(n=>t.jsxs(Cr,{children:[I.has(n.id)?t.jsx(Sr,{src:ie,alt:"Помилка завантаження",onClick:()=>Q(n)}):t.jsx(Hr,{src:n.url,alt:`Фото команди ${n.id}`,onClick:()=>Q(n),onError:()=>X(n.id),loading:"lazy",$borderRadius:"8px",$objectFit:"cover",$cursor:"pointer"}),t.jsxs(Mr,{className:"photo-actions",children:[t.jsx(Be,{onClick:p=>{p.stopPropagation(),q(n.url,n.id)},disabled:V||L||I.has(n.id),title:I.has(n.id)?"Фото недоступне для завантаження":"Завантажити фото",children:t.jsx(Le,{style:{width:"1.2rem",height:"1.2rem"}})}),t.jsx(Ee,{onClick:p=>{p.stopPropagation(),_(n.id)},disabled:V||L,title:V||L?"Не можна видалити фото зараз":"Видалити фото",children:t.jsx(we,{})})]})]},n.id))}),C&&t.jsx(zr,{children:t.jsx(ee,{})})]}):t.jsx(Pr,{children:t.jsx(Lr,{children:"Поки що немає фотографій"})})}),L&&t.jsx(ce,{children:t.jsx(ee,{})}),V&&t.jsx(ce,{children:t.jsx(ee,{})}),t.jsxs(Er,{children:[v&&t.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.9)",border:"2px dashed #ccc",borderRadius:"8px",padding:"1rem",marginBottom:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("span",{style:{fontSize:"0.9rem",color:"#333"},children:v.name.length>30?`${v.name.substring(0,30)}...`:v.name}),t.jsx("button",{onClick:H,style:{background:"transparent",border:"none",color:"#ef4444",cursor:"pointer",fontSize:"1.2rem",fontWeight:"bold",padding:"0.25rem"},children:t.jsx(oe,{style:{width:"1rem",height:"1rem",color:"#ef4444",fill:"#ef4444"}})})]}),t.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[t.jsx(Br,{ref:k,type:"file",accept:"image/*",onChange:Z,id:"gallery-upload"}),t.jsx(Tr,{htmlFor:"gallery-upload",children:t.jsx(Te,{as:"span",disabled:L,children:"Додати зображення"})}),v&&t.jsx(Te,{onClick:F,disabled:L||!v,$isPrimary:!0,children:L?"Завантаження...":"Завантажити зображення"})]})]})]})]}),G&&t.jsx(Gr,{onClick:n=>{n.stopPropagation(),T(!1),A(null)},children:t.jsx(Ar,{children:t.jsxs(Ir,{children:[t.jsx(_r,{src:x==null?void 0:x.url,alt:"Перегляд фото",onClick:n=>n.stopPropagation(),onError:()=>{y.error("Помилка завантаження фото"),T(!1)},style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}),V&&t.jsx(ce,{children:t.jsx(ee,{})}),t.jsxs(Rr,{onClick:n=>n.stopPropagation(),children:[t.jsx(Be,{onClick:()=>q(x==null?void 0:x.url,x==null?void 0:x.id),disabled:I.has(x==null?void 0:x.id),children:t.jsx(Le,{style:{width:"1.2rem",height:"1.2rem"}})}),t.jsx(Ee,{onClick:()=>_(x==null?void 0:x.id),children:t.jsx(we,{style:{width:"1.2rem",height:"1.2rem"}})})]}),t.jsx(ze,{onClick:n=>{n.stopPropagation(),T(!1),A(null)},children:t.jsx(oe,{})})]})})})]})},rn=()=>{const{teamId:e}=Ze(),{setTitle:i}=_e(),s=pe(),$=qe(),{teamDetails:d,fetchTeamDetailsStatus:Y,fetchTeamDetailsError:z,updateTeamStatus:E,updateTeamError:j,deleteTeamStatus:b,deleteTeamError:B}=re(c=>c.teams),{updateTeamAthletesStatus:m,updateTeamAthletesError:R}=re(c=>c.athletes),D=Y==="loading",G=E==="loading",T=b==="loading",x=m==="loading",[A,C]=o.useState(null),[h,v]=o.useState(null),[w,I]=o.useState(""),[U,W]=o.useState(""),[S,P]=o.useState(!1),[k,L]=o.useState(!1),[V,N,X]=nt(k),[Z,H]=o.useState({teamName:!1,ageCategory:!1}),[F,_]=o.useState({teamName:"",ageCategory:"",photoPreview:null});o.useEffect(()=>(e&&s(se(e)),()=>{h&&h!==(d==null?void 0:d.logo)&&URL.revokeObjectURL(h),s(fe()),s(le())}),[e,s]),o.useEffect(()=>{if(d){i(`Профіль команди ${d.name}`);const c=d.name||"",n=d.ageCategory||"",p=d.logo||null;I(c),W(n),v(p),_({teamName:c,ageCategory:n,photoPreview:p}),L(!1)}},[d,i]),o.useEffect(()=>{const c=w!==F.teamName,n=U!==F.ageCategory,p=A!==null||h!==F.photoPreview;L(c||n||p)},[w,U,A,h,F]),o.useEffect(()=>{E==="succeeded"&&(y.success("Дані команди успішно оновлено!"),C(null),s(fe()),s(se(e)),L(!1)),E==="failed"&&j&&y.error(j)},[E,j,s,e]),o.useEffect(()=>{m==="succeeded"&&(y.success("Спортсмени успішно оновлені!"),s(se(e)),s(le())),m==="failed"&&R&&(y.error(R),s(le()))},[m,R,s,e]),o.useEffect(()=>{b==="succeeded"&&(y.success("Команду успішно видалено!"),$("/teams"),s(Ke())),b==="failed"&&B&&y.error(B)},[b,B,$,s]),o.useEffect(()=>{Y==="failed"&&z&&y.error(z)},[Y,z]);const q=c=>{const n=c.target.files[0];if(n){C(n),h&&h!==(d==null?void 0:d.logo)&&URL.revokeObjectURL(h);const p=URL.createObjectURL(n);v(p)}},J=c=>{if(c.key==="Enter"||c.key===" "){const n=document.getElementById("photo-upload");n&&n.click()}},K=async({addedAthletes:c=[],removedAthletes:n=[]})=>{try{c.length>0&&await s(be({teamId:e,operation:"add",athleteIds:c})).unwrap(),n.length>0&&await s(be({teamId:e,operation:"remove",athleteIds:n})).unwrap()}catch(p){console.error("Error updating team athletes:",p)}},Q=c=>{c.preventDefault();const n={teamName:!w.trim(),ageCategory:!U.trim()};H(n),s(Qe({teamId:e,teamData:{name:w,ageCategory:U,photo:A}}))},a=()=>{P(!0)},g=()=>{s(Je(e)),P(!1)},f=()=>{P(!1)};return D?t.jsx($e,{children:t.jsx(ee,{})}):Y==="failed"?t.jsx(ye,{children:t.jsxs(ke,{children:[t.jsx("h2",{children:"Помилка завантаження"}),t.jsx(ne,{$hasChanges:!0,onClick:()=>$("/teams"),children:"Повернутися до списку команд"})]})}):d?t.jsxs(t.Fragment,{children:[(G||T||x)&&t.jsx($e,{children:t.jsx(ee,{})}),S&&t.jsx(Jt,{children:t.jsxs(er,{children:[t.jsx(tr,{children:"Підтвердження видалення"}),t.jsxs(rr,{children:['Ви впевнені, що хочете видалити команду "',d.name,'"?']}),t.jsxs(nr,{children:[t.jsx(or,{onClick:g,children:"Видалити"}),t.jsx(ir,{onClick:f,children:"Скасувати"})]})]})}),t.jsx(Ut,{blurred:G||T||x,children:t.jsxs(Nt,{children:[t.jsxs(Ft,{children:[t.jsxs(Xt,{children:[t.jsx(Ot,{children:t.jsxs(Vt,{children:[t.jsx(Wt,{children:t.jsx(Zt,{src:h||et,alt:"Фото команди",onError:c=>{c.target.onerror=null,c.target.src=ie}})}),t.jsx(_t,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:J,children:t.jsx(ar,{})}),t.jsx(qt,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:q})]})}),t.jsxs(Kt,{children:[t.jsxs(je,{children:[t.jsx(Ce,{htmlFor:"teamName",children:"Назва команди *"}),t.jsx(Se,{id:"teamName",type:"text",placeholder:"Введіть назву команди",value:w,onChange:c=>{I(c.target.value),c.target.value.trim()&&H(n=>({...n,teamName:!1}))},isError:Z.teamName})]}),t.jsxs(je,{children:[t.jsx(Ce,{htmlFor:"ageCategory",children:"Вікова категорія *"}),t.jsx(Se,{id:"ageCategory",type:"text",placeholder:"Введіть вікову категорію",value:U,onChange:c=>{W(c.target.value),c.target.value.trim()&&H(n=>({...n,ageCategory:!1}))},isError:Z.ageCategory})]})]})]}),t.jsx(Ht,{children:t.jsx(it,{teamAthletes:d.athletes||[],teamId:e,onAthletesChange:K,onSelectionChange:L})})]}),t.jsx(qr,{teamId:e,onSelectionChange:L}),t.jsx(Qt,{children:t.jsxs("div",{style:{display:"flex",gap:"1rem",width:"100%",maxWidth:"500px"},children:[t.jsx(ne,{type:"button",onClick:Q,disabled:G||!k,$hasChanges:k,children:G?"Збереження...":"Зберегти дані команди"}),t.jsx(ne,{type:"button",onClick:a,disabled:T,$isDelete:!0,children:T?"Видалення...":"Видалити команду"})]})})]})}),t.jsx(ot,{isOpen:V,onConfirm:N,onCancel:X})]}):t.jsx(ye,{children:t.jsxs(ke,{children:[t.jsx("h2",{children:"Команду не знайдено"}),t.jsx(ne,{$hasChanges:!0,onClick:()=>$("/teams"),children:"Повернутися до списку команд"})]})})};export{rn as default};
