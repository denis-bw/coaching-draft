import{r,d as o,b as $e,a as ie,q as Ke,t as Me,k as _e,l as Be,j as t,i as ce,L as re,v as qe,S as de,w as Qe,x as xe,z as Je,A as ne,y as b,B as et,C as tt,D as ot,u as rt,m as nt,E as me,F as fe,G as be,H as it,I as ze,J as Ee,K as at}from"./index-8f34988e.js";import{P as st}from"./PlaceholderTeam-7b26a08e.js";import{p as lt}from"./PlaceholderProfile-3c1b0d36.js";import{S as je,a as dt,u as ct,N as ht}from"./minus-8d20cecb.js";import{S as ye}from"./DeleteIcon-0606ad49.js";const He=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6 12H18M12 6V18",strokeLinecap:"round",strokeLinejoin:"round"})),pt=({teamAthletes:e=[],onAthletesChange:n,teamId:s,onSelectionChange:$})=>{const c=$e(),[U,d]=r.useState(new Set),{entities:L,list:M,loading:y,hasMore:I,currentPage:w,isAllDataLoaded:X}=ie(l=>l.athletes),{teamAthletes:{entities:A,list:R,loading:D,hasMore:x,currentPage:Y,isAllDataLoaded:z}}=ie(l=>l.athletes),[u,v]=r.useState("remove"),[m,T]=r.useState(new Set),[O,Q]=r.useState(!1),[j,P]=r.useState(null),S=r.useRef(null),G=r.useRef(null),K=r.useRef(!1),F=r.useRef(!1),V=r.useRef(!1);r.useEffect(()=>{$&&$(m.size>0)},[m,$]),r.useEffect(()=>{T(new Set)},[u]),r.useEffect(()=>{if(u==="remove"&&s){c(Ke());const l=setTimeout(()=>{c(Me({teamId:s,page:1}))},50);return()=>clearTimeout(l)}},[c,u,s]),r.useEffect(()=>{if(u==="add"){c(_e());const l=setTimeout(()=>{K.current=!0,c(Be({page:1,filter:"withoutTeam"}))},50);return()=>clearTimeout(l)}},[c,u]);const _=r.useCallback(()=>{u!=="add"||!I||y||F.current||X||(F.current=!0,c(Be({page:w,filter:"withoutTeam"})).finally(()=>{F.current=!1}))},[c,I,y,w,X,u]),Z=r.useCallback(()=>{u!=="remove"||!x||D||V.current||z||!s||(V.current=!0,c(Me({teamId:s,page:Y})).finally(()=>{V.current=!1}))},[c,x,D,Y,z,u,s]),H=r.useCallback(()=>{if(u==="add"){if(y||!I||F.current||X)return;if(S.current){const{scrollTop:l,scrollHeight:p,clientHeight:B}=S.current;l+B>=p-20&&_()}}else if(u==="remove"){if(D||!x||V.current||z)return;if(G.current){const{scrollTop:l,scrollHeight:p,clientHeight:B}=G.current;l+B>=p-20&&Z()}}},[I,y,_,x,D,Z,z,u]);r.useEffect(()=>{const l=u==="add"?S.current:G.current;if(l)return l.addEventListener("scroll",H),()=>l.removeEventListener("scroll",H)},[H,u]);const J=l=>{T(p=>{const B=new Set(p);return B.has(l)?B.delete(l):B.add(l),B})},te=()=>{if(m.size===0)return;const l=Array.from(m);P({type:u,athleteIds:l,count:m.size}),Q(!0)},oe=()=>{j&&(j.type==="add"?n({addedAthletes:j.athleteIds}):j.type==="remove"&&n({removedAthletes:j.athleteIds}),Q(!1),P(null),T(new Set))},ee=()=>{Q(!1),P(null)},q=()=>{T(new Set)},a=R.map(l=>{const p=A[l];return p?{id:p.id,name:`${p.lastName} ${p.firstName} ${p.patronymic||""}`.trim(),photo:p.photo}:null}).filter(Boolean),g=u==="add"?M.map(l=>{const p=L[l];return p?{id:p._id||p.id,name:`${p.lastName} ${p.firstName} ${p.patronymic||""}`.trim(),photo:p.photo}:null}).filter(Boolean):[],k=u==="remove"?a:g,C=u==="remove"?D:y,i=()=>Array.from(m).map(l=>{const p=k.find(B=>B.id===l);return p?p.name:""}).filter(Boolean),f=l=>{d(p=>new Set(p).add(l))};return t.jsxs(t.Fragment,{children:[O&&j&&t.jsx(ut,{children:t.jsxs(gt,{children:[t.jsx(xt,{children:"Підтвердження дії"}),t.jsxs(mt,{children:[t.jsxs(ft,{children:["Ви впевнені, що хочете ",j.type==="add"?"додати до команди":"видалити з команди"," ",j.count," спортсмен",j.count>1?"ів":"а","?"]}),t.jsx(bt,{children:i().map((l,p)=>t.jsxs(wt,{children:["• ",l]},p))})]}),t.jsxs(vt,{children:[t.jsx(kt,{onClick:oe,$actionType:j.type,children:j.type==="add"?"Додати":"Видалити"}),t.jsx(yt,{onClick:ee,children:"Скасувати"})]})]})}),t.jsxs($t,{children:[t.jsx(jt,{children:t.jsxs(Ct,{children:[t.jsx(Le,{$isActive:u==="remove",onClick:()=>v("remove"),children:"Видалити з команди"}),t.jsx(Le,{$isActive:u==="add",onClick:()=>v("add"),children:"Додати до команди"})]})}),t.jsxs(St,{children:[t.jsxs(Mt,{ref:u==="add"?S:G,$hasSelectedAthletes:m.size>0,children:[k.length>0?k.map(l=>t.jsx(Bt,{className:"athlete-item",children:t.jsxs(zt,{as:"div",onClick:()=>J(l.id),$isSelected:m.has(l.id),$actionType:u,children:[t.jsx(Et,{children:t.jsx(It,{to:`/athletes/${l.id}`,title:`Перейти до профілю спортсмена ${l.name}`,"aria-label":`Перейти до профілю спортсмена ${l.name}`,children:t.jsx(Lt,{loading:"lazy",src:U.has(l.id)?ce:l.photo||lt,onError:()=>f(l.id),alt:l.name})})}),t.jsx(Pt,{children:t.jsx(Tt,{$isSelected:m.has(l.id),title:`Перейти до профілю спортсмена ${l.name}`,"aria-label":`Перейти до профілю спортсмена ${l.name}`,children:l.name})}),t.jsx(Gt,{children:m.has(l.id)?t.jsx(we,{$iconType:"close",children:t.jsx(Rt,{onClick:p=>{p.stopPropagation(),J(l.id)}})}):u==="add"?t.jsx(we,{$iconType:"add",children:t.jsx(At,{})}):t.jsx(we,{$iconType:"remove",children:t.jsx(Dt,{})})})]})},l.id)):t.jsxs(Ht,{children:[u==="remove"&&!C&&"В команді немає спортсменів",u==="add"&&!C&&"Спортсменів без команди не знайдено"]}),C&&t.jsx(Vt,{children:t.jsx(re,{})})]}),m.size>0&&t.jsx(Yt,{children:t.jsxs(Ft,{children:[t.jsxs(Ut,{children:["Обрано: ",m.size," спортсмен",m.size>1?"ів":"а"]}),t.jsxs(Nt,{children:[t.jsx(Xt,{onClick:te,children:u==="add"?"Додати":"Видалити"}),t.jsx(Ot,{onClick:q,children:"Скасувати"})]})]})})]})]})]})},ut=o.div`
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
`,gt=o.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 480px;
  width: 90%;
  margin: 20px;
  overflow: hidden;
`,xt=o.div`
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  padding: 16px 20px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`,mt=o.div`
  padding: 24px 20px;
`,ft=o.p`
  color: ${({theme:e})=>e.textBlack};
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 16px 0;
  text-align: center;
`,bt=o.div`
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
`,wt=o.div`
  color: ${({theme:e})=>e.textBlack};
  font-size: 14px;
  margin-bottom: 4px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,vt=o.div`
  display: flex;
  gap: 12px;
  padding: 0 20px 20px 20px;
`,kt=o.button`
  flex: 1;
  background-color: ${({$actionType:e,theme:n})=>e==="add"?n.greenMain:n.red};
  color: ${({theme:e})=>e.white};
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({$actionType:e,theme:n})=>e==="add"?n.darkGreen:n.redDark};
    transform: translateY(-1px);
  }
`,yt=o.button`
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
`,$t=o.div`
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
`,jt=o.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-bottom: 1px solid ${({theme:e})=>e.greenMain};
`,Ct=o.div`
  display: flex;
  border-radius: 6px 10px 0 0;
  overflow: hidden;
`,Le=o.button`
  flex: 1;
  padding: 12px 16px;
  background-color: ${({$isActive:e,theme:n})=>e?n.greenMain:n.ContainerBGColor};
  color: ${({$isActive:e,theme:n})=>e?n.white:n.textBlack};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  
  &:first-child {
    border-right: 1px solid ${({theme:e})=>e.greenMain};
  }
  
  &:hover {
    background-color: ${({$isActive:e,theme:n})=>e?n.darkGreen:n.lightGreen};
    color: ${({$isActive:e,theme:n})=>n.white};
  }

  @media (max-width: 390px) { 
     font-size: 12px;
  }
`,St=o.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`,Mt=o.div`
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
`,Bt=o.div`
  width: 100%;
`,zt=o.div`
  display: grid;
  grid-template-columns: 32px 1fr 24px;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({theme:e,$isSelected:n,$actionType:s})=>n?s==="add"?e.lightGreen:e.red:e.disabledBG};
  color: ${({theme:e,$isSelected:n})=>n?e.white:e.textBlack};
  border-radius: 8px;
  cursor: default;
  transition: all 0.2s;
  box-sizing: border-box;

  &:hover {
    background-color: ${({theme:e,$isSelected:n,$actionType:s})=>n?s==="add"?e.greenMain:e.redDark:e.lightGreen};
    color: ${({theme:e})=>e.white};
  }
`,Et=o.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`,Lt=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,It=o(qe)`
  &:hover {
    opacity: 0.6;  
    transition: all 0.2s ease;
  }
`,Pt=o.div`
  padding: 0 10px;
  overflow: hidden;
  min-width: 0;
`,Tt=o.div`
  font-weight: ${({$isSelected:e})=>e?"600":"500"};
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Gt=o.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
`,we=o.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({$iconType:e,theme:n})=>{switch(e){case"add":return n.greenMain;case"remove":return n.red;case"close":return n.gray;default:return n.gray}}};
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  &:hover {
    transform: scale(1.1);
    background-color: ${({$iconType:e,theme:n})=>{switch(e){case"add":return n.darkGreen;case"remove":return n.redDark;case"close":return n.textGray;default:return n.textGray}}};
  }
`,At=o(He)`
  width: 15px;
  height: 15px;
  fill: ${({theme:e})=>e.white};
  stroke: ${({theme:e})=>e.white};
  stroke-width: 3px;
`,Dt=o(je)`
  width: 15px;
  height: 15px;
  fill: ${({theme:e})=>e.white};
  stroke: ${({theme:e})=>e.white};
  stroke-width: 1px;
`,Rt=o(de)`
  width: 15px;
  height: 15px;
  fill: ${({theme:e})=>e.white};
    stroke: ${({theme:e})=>e.white};
  stroke-width: 0.4px;
`,Yt=o.div`
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
`,Ft=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`,Ut=o.div`
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
`,Nt=o.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`,Xt=o.button`
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
`,Ot=o.button`
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
`,Ht=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({theme:e})=>e.textGray};
  font-size: 13px;
  text-align: center;
`,Vt=o.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,N={mobile:"320px",desktop:"1024px"},Ie=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`,Pe=o.div`
  padding: 2rem 3rem;
  text-align: center;
  max-width: 500px;
  width: 100%;
  h2 {
    margin-bottom: 10px;
    color: ${({theme:e})=>e.red};
  }
`,Te=o.div`
  position: sticky; 
  left: 0; 
  right: 0;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
`,Wt=o.div`
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  
  background: ${({blurred:e,theme:n})=>e?`rgba(${n.ContainerBGColor==="#ffffff"?"255, 255, 255":"77, 77, 77"}, 0.2)`:"transparent"};
  backdrop-filter: ${({blurred:e})=>e?"blur(10px)":"none"};
  -webkit-backdrop-filter: ${({blurred:e})=>e?"blur(10px)":"none"};
  filter: ${({blurred:e})=>e?"blur(3px)":"none"};
  pointer-events: ${({blurred:e})=>e?"none":"auto"};
  border-radius: 16px;
  box-shadow: ${({blurred:e})=>e?"0 4px 30px rgba(0, 0, 0, 0.1)":"none"};

  @media (min-width: ${N.desktop}) {
    align-items: flex-start;
    height: 100%;
  }
`,Zt=o.div`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${N.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${N.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }
`,Kt=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  
  @media (min-width: ${N.desktop}) {
    flex-direction: row;
    gap: 20px;
  }
`,_t=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media (min-width: ${N.desktop}) {
    margin-bottom: 0;
  }
`,qt=o.div`
  flex: 1;
  min-height: 300px;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 8px;
  
  @media (max-width: ${N.desktop}) {
    min-height: 200px;
  }
`;o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  
  @media (min-width: ${N.desktop}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`;const Qt=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  
  @media (min-width: ${N.desktop}) {
    justify-content: center;
  }
`,Jt=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${N.desktop}) {
    width: 8rem;
    height: 8rem;
  }
`,eo=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.disabledBG};
`,to=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,oo=o.label`
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

  @media (min-width: ${N.desktop}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,ro=o.div`
  position: absolute;
  top: -0.3rem;
  right: -0.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  @media (min-width: ${N.desktop}) {
    top: -0.4rem;
    right: -0.4rem;
    gap: 0.4rem;
  }
`,no=o.button`
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.red};
  color: ${({theme:e})=>e.white};
  border-radius: 50%;
  border: 2px solid ${({theme:e})=>e.white};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out,
            transform 0.2s ease-in-out;

  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({theme:e})=>e.redDark};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.red}, 0 2px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  &:focus-visible {
    background-color: ${({theme:e})=>e.redDark};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.red}, 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: ${N.desktop}) {
    width: 2rem;
    height: 2rem;
  }
`,io=o.button`
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

  @media (min-width: ${N.desktop}) {
    width: 2rem;
    height: 2rem;
  }
`,ao=o(ye)`
  stroke: ${({theme:e})=>e.white};
  fill: none; 
  width: 12px;
  height: 12px;

  @media (min-width: ${N.desktop}) {
    width: 14px;
    height: 14px;
  }
`,so=o(je)`
  fill: ${({theme:e})=>e.mode==="dark"?"#343434":"#ffffff"};
  width: 12px;
  height: 12px;
  transform: rotate(180deg);

  @media (min-width: ${N.desktop}) {
    width: 14px;
    height: 14px;
  }
`,lo=o.input`
  display: none;
`;o.div`
  flex: 1;
`;const co=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ge=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Ae=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textBlack};
  font-size: 0.875rem;
  font-weight: 500;
`,De=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,isError:n})=>n?e.red:e.disabledBG};
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
`,ho=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`,le=o.button`
  max-width: 500px;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({theme:e,$hasChanges:n,$isDelete:s})=>s?e.red:n?e.greenMain:e.disabledBG};
  color: ${({theme:e,$hasChanges:n,$isDelete:s})=>s||n?e.white:e.textGray};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: ${({$hasChanges:e,$isDelete:n})=>e||n?"pointer":"not-allowed"};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e,$hasChanges:n,$isDelete:s})=>s?e.redDark:n?e.darkGreen:e.disabledBG};
  }

  &:focus {
    outline: none;
    background-color: ${({theme:e,$hasChanges:n,$isDelete:s})=>s?e.redDark:n?e.darkGreen:e.disabledBG};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    color: ${({theme:e})=>e.textGray};
    cursor: not-allowed;
  }

  @media (max-width: ${N.desktop}) {
    font-size: 0.8rem;
  }

`,po=o.div`
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
`,uo=o.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  margin: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`,go=o.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.textBlack};
  font-size: 1.25rem;
  font-weight: 600;
`,xo=o.p`
  margin-bottom: 2rem;
  color: ${({theme:e})=>e.textBlack};
  line-height: 1.5;
`,mo=o.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`,fo=o.button`
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
`,bo=o.button`
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
`,wo=o(dt)`
  fill: ${({theme:e})=>e.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${N.desktop}) {
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
  background-color: ${({$isActive:e,theme:n})=>e?n.greenMain:"transparent"};
  color: ${({$isActive:e,theme:n})=>e?n.white:n.greenMain};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:first-child {
    border-right: 1px solid ${({theme:e})=>e.greenMain};
  }
  
  &:hover {
    background-color: ${({$isActive:e,theme:n})=>e?n.darkGreen:n.lightGreen+"40"};
  }
  
  &:focus {
    outline: 2px solid ${({theme:e})=>e.greenMain};
    outline-offset: 2px;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;const vo=o.div`
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
`,ko=o.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  padding: 2rem;
  border-radius: 0.75rem;
  max-width: 420px;
  width: 90%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid ${({theme:e})=>e.gray};
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,yo=o.h3`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({theme:e})=>e.textBlack};
  text-align: center;
  margin-top: 0;
`,$o=o.p`
  margin-bottom: 2rem;
  color: ${({theme:e})=>e.textGray};
  line-height: 1.5;
  text-align: center;
  margin-top: 0;
`,jo=o.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`,Ve=o.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out,
            transform 0.2s ease-in-out;

  font-size: 14px;
  min-width: 100px;

  &:focus {
    outline: 2px solid ${({theme:e})=>e.lightGreen};
    outline-offset: 2px;
  }
`,Co=o(Ve)`
  border: 1px solid ${({theme:e})=>e.textBlack};
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};

  &:hover {
    background-color: ${({theme:e})=>e.black};
    border-color: ${({theme:e})=>e.black};
    color: ${({theme:e})=>e.white};
  }
`,So=o(Ve)`
  border: none;
  background-color: ${({theme:e})=>e.red};
  color: ${({theme:e})=>e.white};

  &:hover {
    background-color: ${({theme:e})=>e.redDark};
  }
`,Mo=o.div`
margin-top: 10px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.1);
  position: relative;
`,Bo=o.div`
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
`,zo=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  transform-origin: center;
`,Eo=o.div`
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
`,Lo=o.div`
  text-align: center;
  color: white;
  width: 100%;
  max-width: 600px;
`,Io=o.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,Re=o.span`
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
`,Po=o.div`
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
`,To=o.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`,Go=o.div`
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`,Ao=o.div`
  height: 100%;
  background: #10b981;
  border-radius: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 0 4px rgba(16, 185, 129, 0.5);
`,Do=o.button`
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
`,Ro=o.div`
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
`,Yo=o.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4); 
  z-index: 10;
`,Fo=o.div`
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
`,Uo=o.div`
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
`,No=o.h2`
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
`,Xo=o.span`
  font-weight: normal;
  font-size: 1rem;
  margin-left: 0.5rem;
  text-transform: uppercase;
 color: ${({theme:e})=>e.white};
  @media (max-width: 768px) {
    margin-left: 0; 
    font-size: 0.9rem;
  }
`,Ye=o.button`
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
`,Oo=o.div`
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
`,Ho=o.div`
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
`;o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.2s ease;

  @media (max-width: 768px) {
    border-radius: 6px;
  }
`;const Vo=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  opacity: 0.7;
  filter: grayscale(0.3);

  @media (max-width: 768px) {
    border-radius: 6px;
  }
`,Wo=o.div`
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
`,We=o.button`
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
`,Fe=o(We)`
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
`,Ue=o(We)`
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
`,Zo=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
  height: 200px;
`,Ko=o.div`
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
`,ve=o.div`
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
`,_o=o.input`
  display: none;
`,qo=o.label`
  display: inline-block;   
  width: auto;          

  @media (max-width: 768px) {
    display: block;       
    width: 100%;         
    text-align: center;   
  }
`,Ne=o.button`
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
`;o.div`
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
`;const Qo=o.div`
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
`;o.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;const Jo=o.p`
  text-align: center;
  font-size: 1rem;
  color: ${({theme:e})=>e.white};
  margin: 2rem auto;
  width: 100%;
`,er=o.div`
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
`;o.div`
  display: none; 
`;const tr=o.div`
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
`,or=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  max-height: 90%;
`;o.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
`;const rr=o.div`
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
`,nr=o.div`
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
`,ir=o.img`
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
`,Xe=o.img`
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
`,ar=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* Нижчий z-index ніж кнопки */
  opacity: ${e=>e.$loaded?0:1};
  transition: opacity 0.3s ease;
  pointer-events: none;
`,sr=o.div`
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
`,lr=e=>{if(!e)return"";try{const n=new URL(e);return n.searchParams.set("w","50"),n.searchParams.set("q","30"),n.toString()}catch{return e}},dr=(e=10,n=10)=>{const s=document.createElement("canvas");s.width=e,s.height=n;const $=s.getContext("2d"),c=$.createLinearGradient(0,0,e,n);return c.addColorStop(0,"#f0f0f0"),c.addColorStop(1,"#e0e0e0"),$.fillStyle=c,$.fillRect(0,0,e,n),s.toDataURL()},cr=({src:e,alt:n,onClick:s,onError:$,className:c,$borderRadius:U,$objectFit:d="cover",$cursor:L="pointer",$isFullscreen:M=!1,style:y,loading:I="lazy"})=>{const[w,X]=r.useState(!1),[A,R]=r.useState(!1),[D,x]=r.useState("");r.useEffect(()=>{if(e){const u=lr(e);x(u!==e?u:dr()),X(!1),R(!1)}},[e]);const Y=()=>{X(!0)},z=u=>{R(!0),$&&$(u)};return M?t.jsx(Xe,{src:e,alt:n,onClick:s,onLoad:Y,onError:z,$loaded:w,$objectFit:d,$cursor:L,$isFullscreen:M,className:c,style:y}):t.jsxs(nr,{$borderRadius:U,className:c,style:y,children:[D&&!A&&t.jsx(ir,{src:D,alt:"",$loaded:w,loading:"eager"}),e&&t.jsx(Xe,{src:e,alt:n,onClick:s,onLoad:Y,onError:z,$loaded:w,$objectFit:d,$cursor:L,loading:I}),!w&&!A&&t.jsx(ar,{$loaded:w,children:t.jsx(sr,{})})]})},Oe=e=>r.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.163 2.819C9 3.139 9 3.559 9 4.4V11H7.803c-.883 0-1.325 0-1.534.176a.75.75 0 0 0-.266.62c.017.274.322.593.931 1.232l4.198 4.401c.302.318.453.476.63.535a.749.749 0 0 0 .476 0c.177-.059.328-.217.63-.535l4.198-4.4c.61-.64.914-.96.93-1.233a.75.75 0 0 0-.265-.62C17.522 11 17.081 11 16.197 11H15V4.4c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656C13.861 2 13.441 2 12.6 2h-1.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zM5 21a1 1 0 0 0 1 1h12a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1z"})),hr=e=>r.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("g",{id:"Navigation / House_02"},r.createElement("path",{id:"Vector",d:"M4 11.4522V16.8002C4 17.9203 4 18.4807 4.21799 18.9086C4.40973 19.2849 4.71547 19.5906 5.0918 19.7823C5.5192 20.0001 6.07899 20.0001 7.19691 20.0001H16.8031C17.921 20.0001 18.48 20.0001 18.9074 19.7823C19.2837 19.5906 19.5905 19.2849 19.7822 18.9086C20 18.4811 20 17.9216 20 16.8037V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522Z",strokeLinecap:"round",strokeLinejoin:"round"}))),pr=o.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  cursor: ${e=>e.$isDragging?"grabbing":e.$isZoomed?"grab":"zoom-in"};
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
`,ur=o.img`
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
`,gr=o.div`
  position: absolute;
  top: 20px;
  right: 80px;
  display: flex;
  gap: 10px;
  z-index: 100;

    @media (max-width: 768px) {
    top: 12px;
  }
`,ke=o.button`
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
`,xr=({src:e,alt:n,onError:s,...$})=>{const[c,U]=r.useState(1),[d,L]=r.useState(0),[M,y]=r.useState(0),[I,w]=r.useState(!1),[X,A]=r.useState(!1),[R,D]=r.useState({width:0,height:0,left:0,top:0}),[x,Y]=r.useState({width:0,height:0}),z=r.useRef(null),u=r.useRef(null),v=r.useRef({x:0,y:0,translateX:0,translateY:0}),m=r.useRef(0),T=.5,O=5,Q=.8,j=r.useCallback(()=>{if(z.current&&u.current){const a=z.current.getBoundingClientRect(),g=u.current.getBoundingClientRect();Y({width:a.width,height:a.height}),D({width:g.width,height:g.height,left:g.left-a.left,top:g.top-a.top})}},[]),P=r.useCallback((a,g,k)=>{if(!R.width||!R.height||!x.width||!x.height)return{x:a,y:g};const C=R.width*k,i=R.height*k;if(C<=x.width)a=0;else{const f=(C-x.width)/2;a=Math.max(-f,Math.min(f,a))}if(i<=x.height)g=0;else{const f=(i-x.height)/2;g=Math.max(-f,Math.min(f,g))}return{x:a,y:g}},[R,x]),S=r.useCallback((a,g,k)=>{const C=Math.max(T,Math.min(O,c+a*Q));if(C!==c){if(A(!0),setTimeout(()=>A(!1),200),g!==void 0&&k!==void 0&&z.current){const i=z.current.getBoundingClientRect(),f=g-i.left,l=k-i.top,p=f-d-i.width/2,B=l-M-i.height/2,ae=C/c,he=p*ae,pe=B*ae,ue=d-(he-p),ge=M-(pe-B),se=P(ue,ge,C);L(se.x),y(se.y)}else{const i=P(0,0,C);L(i.x),y(i.y)}U(C)}},[c,d,M,P]),G=r.useCallback(a=>{a.preventDefault();const k=(Math.abs(a.deltaY)>50?a.deltaY*2:a.deltaY)>0?-1:1;S(k,a.clientX,a.clientY)},[S]),K=r.useCallback(a=>{c<=1||(w(!0),v.current={x:a.clientX,y:a.clientY,translateX:d,translateY:M},a.preventDefault())},[c,d,M]),F=r.useCallback(a=>{if(!I||c<=1)return;const g=a.clientX-v.current.x,k=a.clientY-v.current.y;if(Math.abs(g)<1&&Math.abs(k)<1)return;const C=v.current.translateX+g,i=v.current.translateY+k,f=P(C,i,c);L(f.x),y(f.y)},[I,c,P]),V=r.useCallback(()=>{I&&w(!1)},[I]),_=r.useCallback(a=>{if(a.touches.length===1)w(!0),v.current={x:a.touches[0].clientX,y:a.touches[0].clientY,translateX:d,translateY:M};else if(a.touches.length===2){const g=a.touches[0],k=a.touches[1],C=Math.sqrt(Math.pow(k.clientX-g.clientX,2)+Math.pow(k.clientY-g.clientY,2));m.current=C}},[d,M]),Z=r.useCallback(a=>{if(a.preventDefault(),a.touches.length===1&&I&&c>1){const g=a.touches[0].clientX-v.current.x,k=a.touches[0].clientY-v.current.y,C=v.current.translateX+g,i=v.current.translateY+k,f=P(C,i,c);L(f.x),y(f.y)}else if(a.touches.length===2){const g=a.touches[0],k=a.touches[1],C=Math.sqrt(Math.pow(k.clientX-g.clientX,2)+Math.pow(k.clientY-g.clientY,2));if(m.current>0){const i=C/m.current,f=(g.clientX+k.clientX)/2,l=(g.clientY+k.clientY)/2,p=Math.max(T,Math.min(O,c*i));p!==c&&S(p>c?1:-1,f,l)}m.current=C}},[I,c,S,P]),H=r.useCallback(()=>{w(!1),m.current=0},[]),J=r.useCallback(a=>{const g=c>1?1:3;A(!0),setTimeout(()=>A(!1),200),g===1?(U(1),L(0),y(0)):S(2,a.clientX,a.clientY)},[c,S]),te=r.useCallback(()=>{if(z.current){const a=z.current.getBoundingClientRect();S(1,a.left+a.width/2,a.top+a.height/2)}},[S]),oe=r.useCallback(()=>{if(z.current){const a=z.current.getBoundingClientRect();S(-1,a.left+a.width/2,a.top+a.height/2)}},[S]),ee=r.useCallback(()=>{A(!0),setTimeout(()=>A(!1),200),U(1),L(0),y(0)},[]),q=r.useCallback(()=>{setTimeout(()=>{j()},100)},[j]);return r.useEffect(()=>{const a=()=>{j();const g=P(d,M,c);L(g.x),y(g.y)};return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[j,P,d,M,c]),r.useEffect(()=>{j()},[c,d,M,j]),r.useEffect(()=>{const a=z.current;if(a)return a.addEventListener("wheel",G,{passive:!1}),a.addEventListener("mousemove",F),a.addEventListener("touchmove",Z,{passive:!1}),window.addEventListener("mouseup",V),window.addEventListener("touchend",H),()=>{a.removeEventListener("wheel",G),a.removeEventListener("mousemove",F),a.removeEventListener("touchmove",Z),window.removeEventListener("mouseup",V),window.removeEventListener("touchend",H)}},[G,F,V,Z,H]),t.jsxs(pr,{ref:z,$isDragging:I,$isZoomed:c>1,onMouseDown:K,onDoubleClick:J,onTouchStart:_,...$,children:[t.jsxs(gr,{children:[t.jsx(ke,{onClick:oe,disabled:c<=T,title:"Зменшити",children:t.jsx(je,{})}),t.jsx(ke,{onClick:ee,disabled:c===1&&d===0&&M===0,title:"Скинути масштаб",children:t.jsx(hr,{})}),t.jsx(ke,{onClick:te,disabled:c>=O,title:"Збільшити",children:t.jsx(He,{})})]}),t.jsx(ur,{ref:u,src:e,alt:n,$scale:c,$translateX:d,$translateY:M,$isTransitioning:X,onLoad:q,onError:s,draggable:!1})]})},mr=({teamId:e,onSelectionChange:n})=>{const s=$e(),{teamGallery:$,galleryCurrentPage:c,galleryHasMore:U,fetchTeamGalleryStatus:d,uploadTeamPhotoStatus:L,deleteTeamPhotoStatus:M,storageInfo:y,teamDetails:I,uploadTeamPhotoError:w}=ie(i=>i.teams),[X,A]=r.useState(!1),[R,D]=r.useState(!1),[x,Y]=r.useState(null),[z,u]=r.useState(!1),[v,m]=r.useState(null),[T,O]=r.useState(new Set),[Q,j]=r.useState(!0),P=r.useRef(null),S=r.useRef(null),G=L==="loading",K=M==="loading";r.useEffect(()=>(e&&(s(Qe()),s(xe({teamId:e,page:1})),s(Je())),()=>{s(ne()),m(null),O(new Set),j(!0)}),[e,s]),r.useEffect(()=>{n&&n(v!==null)},[v,n]),r.useEffect(()=>{L==="succeeded"&&(b.success("Фото успішно завантажено!"),m(null),s(ne()),S.current&&(S.current.value="")),L==="failed"&&(w?w.includes("File too large")||w.includes("max file size")||w.includes("size")?b.error("Файл занадто великий (макс. 5MB)"):w.includes("Insufficient storage")||w.includes("not enough space")||w.includes("storage")?b.error("Недостатньо місця в сховищі"):w.includes("Server not responding")||w.includes("network error")||w.includes("server")?b.error("Сервер не відповідає"):w.includes("Invalid file type")||w.includes("file type")||w.includes("format")?b.error("Файл не того формату"):b.error("Помилка при завантаженні фото"):b.error("Помилка при завантаженні фото"),s(ne()),S.current&&(S.current.value=""))},[L,w,s]),r.useEffect(()=>{M==="succeeded"&&(b.success("Фото успішно видалено!"),s(ne()),R&&x&&!$.find(i=>i.id===x.id)&&(D(!1),Y(null))),M==="failed"&&(b.error("Помилка при видаленні фото"),s(ne()))},[M,s,R,x,$]);const F=r.useCallback(()=>{if(!P.current||z||!U)return;const i=P.current,{scrollTop:f,scrollHeight:l,clientHeight:p}=i;l-f<=p+100&&(u(!0),s(xe({teamId:e,page:c+1})).unwrap().catch(B=>{B.message&&B.message.includes("Server not responding")&&b.error("Сервер не відповідає")}).finally(()=>{u(!1)}))},[s,e,c,U,z]);r.useEffect(()=>{const i=P.current;if(i&&X)return i.addEventListener("scroll",F),()=>i.removeEventListener("scroll",F)},[F,X]);const V=i=>{O(f=>new Set([...f,i]))},_=i=>{const f=i.target.files[0];if(f){if(!f.type.startsWith("image/")){b.error("Файл не того формату");return}if(f.size>5*1024*1024){b.error("Файл занадто великий (макс. 5MB)");return}m(f)}},Z=()=>{m(null),S.current&&(S.current.value="")},H=async()=>{if(!v){b.warning("Оберіть файл для завантаження");return}if(y&&y.remainingBytes<v.size){Math.round(y.remainingBytes/(1024*1024)),Math.round(v.size/(1024*1024)),b.error("Недостатньо місця в сховищі");return}s(et({teamId:e,photo:v})).unwrap().catch(i=>{i.message&&(i.message.includes("File too large")?b.error("Файл занадто великий (макс. 5MB)"):i.message.includes("Insufficient storage")?b.error("Недостатньо місця в сховищі"):i.message.includes("Server not responding")?b.error("Сервер не відповідає"):i.message.includes("Invalid file type")&&b.error("Файл не того формату"))})},J=i=>{s(tt({teamId:e,photoId:i}))},te=async(i,f)=>{try{const l=await fetch(i,{mode:"cors"});if(!l.ok)throw new Error("Server not responding");const p=await l.blob(),B=document.createElement("a");B.href=URL.createObjectURL(p),B.download=`team-${e}-photo-${f}.jpg`,document.body.appendChild(B),B.click(),B.remove(),URL.revokeObjectURL(B.href)}catch(l){l.message.includes("Server not responding")||l.message.includes("Failed to fetch")?b.error("Сервер не відповідає"):b.error("Помилка завантаження фото"),console.error(l)}},oe=()=>{A(!0),j(!0),$.length===0&&s(xe({teamId:e,page:1})).unwrap().catch(i=>{i.message&&i.message.includes("Server not responding")&&b.error("Сервер не відповідає")})},ee=()=>{A(!1),D(!1),Y(null),v&&(m(null),S.current&&(S.current.value=""))},q=i=>{if(T.has(i.id)){b.error("Помилка завантаження фото");return}Y(i),D(!0)},a=i=>{i.target===i.currentTarget&&ee()},g=i=>{if(i===0)return"0 MB";const f=1024,l=["B","KB","MB","GB"],p=Math.floor(Math.log(i)/Math.log(f));return parseFloat((i/Math.pow(f,p)).toFixed(1))+" "+l[p]},k=$&&$.length>0?$[0]:null,C=(I==null?void 0:I.galleryCount)||$.length||0;return t.jsxs(t.Fragment,{children:[t.jsx(Mo,{children:t.jsxs(Bo,{onClick:oe,children:[t.jsx(zo,{src:k&&!T.has(k.id)?k.url:ce,alt:"Фон галереї",onError:()=>k&&V(k.id)}),t.jsx(Eo,{children:t.jsxs(Lo,{children:[t.jsx(Io,{children:"Галерея команди"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",justifyContent:"center",flexWrap:"wrap",marginBottom:"1rem"},children:[C>0?t.jsxs(Re,{children:[C," фото"]}):t.jsx(Re,{children:"Поки що немає фото"}),y&&t.jsxs(Po,{children:[t.jsxs(To,{children:[g(y.usedBytes)," / ",g(y.limitBytes)]}),t.jsx(Go,{children:t.jsx(Ao,{style:{width:`${Math.min(y.usedPercentage,100)}%`,backgroundColor:y.usedPercentage>90?"#ef4444":y.usedPercentage>70?"#f59e0b":"#10b981"}})})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx(Do,{children:C>0?"Переглянути всі фото":"Додати фото"})})]})})]})}),X&&t.jsxs(Ro,{children:[t.jsx(Yo,{onClick:a}),t.jsxs(Fo,{onClick:i=>i.stopPropagation(),children:[t.jsxs(Uo,{children:[t.jsxs(No,{children:["Галерея команди",C>0&&t.jsxs(Xo,{children:["(",C," фото)"]})]}),t.jsx(Ye,{onClick:ee,title:"Закрити",children:t.jsx(de,{})})]}),t.jsx("div",{ref:P,style:{flex:1,overflowY:"auto",padding:"1.5rem",paddingBottom:"10px"},children:$.length>0?t.jsxs(t.Fragment,{children:[t.jsx(Oo,{children:$.map(i=>t.jsxs(Ho,{children:[T.has(i.id)?t.jsx(Vo,{src:ce,alt:"Помилка завантаження",onClick:()=>q(i)}):t.jsx(cr,{src:i.url,alt:`Фото команди ${i.id}`,onClick:()=>q(i),onError:()=>V(i.id),loading:"lazy",$borderRadius:"8px",$objectFit:"cover",$cursor:"pointer"}),t.jsxs(Wo,{className:"photo-actions",children:[t.jsx(Ue,{onClick:f=>{f.stopPropagation(),te(i.url,i.id)},disabled:K||G||T.has(i.id),title:T.has(i.id)?"Фото недоступне для завантаження":"Завантажити фото",children:t.jsx(Oe,{style:{width:"1.2rem",height:"1.2rem"}})}),t.jsx(Fe,{onClick:f=>{f.stopPropagation(),J(i.id)},disabled:K||G,title:K||G?"Не можна видалити фото зараз":"Видалити фото",children:t.jsx(ye,{})})]})]},i.id))}),z&&t.jsx(Zo,{children:t.jsx(re,{})})]}):t.jsx(Qo,{children:t.jsx(Jo,{children:"Поки що немає фотографій"})})}),G&&t.jsx(ve,{children:t.jsx(re,{})}),K&&t.jsx(ve,{children:t.jsx(re,{})}),t.jsxs(Ko,{children:[v&&t.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.9)",border:"2px dashed #ccc",borderRadius:"8px",padding:"1rem",marginBottom:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("span",{style:{fontSize:"0.9rem",color:"#333"},children:v.name.length>30?`${v.name.substring(0,30)}...`:v.name}),t.jsx("button",{onClick:Z,style:{background:"transparent",border:"none",color:"#ef4444",cursor:"pointer",fontSize:"1.2rem",fontWeight:"bold",padding:"0.25rem"},children:t.jsx(de,{style:{width:"1rem",height:"1rem",color:"#ef4444",fill:"#ef4444"}})})]}),t.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[t.jsx(_o,{ref:S,type:"file",accept:"image/*",onChange:_,id:"gallery-upload"}),t.jsx(qo,{htmlFor:"gallery-upload",children:t.jsx(Ne,{as:"span",disabled:G,children:"Додати зображення"})}),v&&t.jsx(Ne,{onClick:H,disabled:G||!v,$isPrimary:!0,children:G?"Завантаження...":"Завантажити зображення"})]})]})]})]}),R&&t.jsx(er,{onClick:i=>{i.stopPropagation(),D(!1),Y(null)},children:t.jsx(or,{children:t.jsxs(tr,{children:[t.jsx(xr,{src:x==null?void 0:x.url,alt:"Перегляд фото",onClick:i=>i.stopPropagation(),onError:()=>{b.error("Помилка завантаження фото"),D(!1)},style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}),K&&t.jsx(ve,{children:t.jsx(re,{})}),t.jsxs(rr,{onClick:i=>i.stopPropagation(),children:[t.jsx(Ue,{onClick:()=>te(x==null?void 0:x.url,x==null?void 0:x.id),disabled:T.has(x==null?void 0:x.id),children:t.jsx(Oe,{style:{width:"1.2rem",height:"1.2rem"}})}),t.jsx(Fe,{onClick:()=>J(x==null?void 0:x.id),children:t.jsx(ye,{style:{width:"1.2rem",height:"1.2rem"}})})]}),t.jsx(Ye,{onClick:i=>{i.stopPropagation(),D(!1),Y(null)},children:t.jsx(de,{})})]})})})]})},fr=({isOpen:e,onConfirm:n,onCancel:s,teamName:$})=>{if(!e)return null;const c=d=>{d.key==="Escape"&&s(),d.key==="Enter"&&n()},U=d=>{d.target===d.currentTarget&&s()};return t.jsx(vo,{onClick:U,onKeyDown:c,tabIndex:-1,children:t.jsxs(ko,{onClick:d=>d.stopPropagation(),children:[t.jsx(yo,{children:"Видалити логотип команди?"}),t.jsxs($o,{children:['Ви впевнені, що хочете видалити поточний логотип команди "',$,'"?']}),t.jsxs(jo,{children:[t.jsx(So,{onClick:n,children:"Видалити"}),t.jsx(Co,{onClick:s,children:"Скасувати"})]})]})})},$r=()=>{const{teamId:e}=ot(),{setTitle:n}=rt(),s=$e(),$=nt(),[c,U]=r.useState(!1),{teamDetails:d,fetchTeamDetailsStatus:L,fetchTeamDetailsError:M,updateTeamStatus:y,updateTeamError:I,deleteTeamStatus:w,deleteTeamError:X}=ie(h=>h.teams),{updateTeamAthletesStatus:A,updateTeamAthletesError:R}=ie(h=>h.athletes),D=L==="loading",x=y==="loading",Y=w==="loading",z=A==="loading",[u,v]=r.useState(null),[m,T]=r.useState(null),[O,Q]=r.useState(""),[j,P]=r.useState(""),[S,G]=r.useState(!1),[K,F]=r.useState(!1),[V,_]=r.useState(null),[Z,H]=r.useState(!1),[J,te,oe]=ct(Z),[ee,q]=r.useState({teamName:!1,ageCategory:!1}),[a,g]=r.useState({teamName:"",ageCategory:"",photoPreview:null});r.useEffect(()=>(e&&s(me(e)),()=>{m&&m!==(d==null?void 0:d.logo)&&URL.revokeObjectURL(m),s(fe()),s(be())}),[e,s]),r.useEffect(()=>{if(d){n(`Профіль команди ${d.name}`);const h=d.name||"",E=d.ageCategory||"",W=d.logo||null;Q(h),P(E),T(W),g({teamName:h,ageCategory:E,photoPreview:W}),H(!1)}},[d,n]),r.useEffect(()=>{const h=O!==a.teamName,E=j!==a.ageCategory,W=u!==null||m!==a.photoPreview;H(h||E||W)},[O,j,u,m,a]),r.useEffect(()=>{y==="succeeded"&&(b.success("Дані команди успішно оновлено!"),v(null),_(null),U(!1),s(fe()),d!=null&&d.logo&&g(h=>({...h,photoPreview:d.logo})),H(!1)),y==="failed"&&I&&(b.error(I),U(!1),s(fe()))},[y,I,s,e]),r.useEffect(()=>{A==="succeeded"&&(b.success("Спортсмени успішно оновлені!"),s(me(e)),s(be())),A==="failed"&&R&&(b.error(R),s(be()))},[A,R,s,e]),r.useEffect(()=>{w==="succeeded"&&(b.success("Команду успішно видалено!"),$("/teams"),s(it())),w==="failed"&&X&&b.error(X)},[w,X,$,s]),r.useEffect(()=>{L==="failed"&&M&&b.error(M)},[L,M]);const k=5*1024*1024,C=["image/jpeg","image/jpg","image/png","image/webp"],i=h=>h?C.includes(h.type)?h.size>k?(b.error("Розмір файлу не повинен перевищувати 5MB",{position:"top-right",autoClose:3e3}),null):h:(b.error("Дозволені лише зображення (jpeg, jpg, png, webp)",{position:"top-right",autoClose:3e3}),null):null,f=h=>{const E=h.target.files[0];if(E){const W=i(E);if(!W){h.target.value="";return}v(W),m&&m!==(d==null?void 0:d.logo)&&URL.revokeObjectURL(m);const Ze=URL.createObjectURL(W);T(Ze),_(W)}},l=h=>{if(h.key==="Enter"||h.key===" "){const E=document.getElementById("photo-upload");E&&E.click()}},p=h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),V?B():F(!0))},B=()=>{m&&m!==(d==null?void 0:d.logo)&&URL.revokeObjectURL(m),T((d==null?void 0:d.logo)||null),v(null),_(null);const h=document.getElementById("photo-upload");h&&(h.value="");const E=O!==a.teamName||j!==a.ageCategory;H(E)},ae=async()=>{try{if(!(d!=null&&d.logo)){b.info("У команди немає логотипу для видалення"),F(!1);return}console.log("Початок видалення логотипу для команди:",e),F(!1),U(!0);const h=await s(ze({teamId:e,teamData:{name:O,ageCategory:j,deleteLogo:!0}})).unwrap();T(null),v(null),_(null);const E=document.getElementById("photo-upload");E&&(E.value=""),g(W=>({...W,photoPreview:null})),s(me(e))}catch(h){console.error("Помилка при видаленні логотипу:",h),b.error(h.message||"Помилка при видаленні логотипу")}finally{U(!1)}},he=async({addedAthletes:h=[],removedAthletes:E=[]})=>{try{h.length>0&&await s(Ee({teamId:e,operation:"add",athleteIds:h})).unwrap(),E.length>0&&await s(Ee({teamId:e,operation:"remove",athleteIds:E})).unwrap()}catch(W){console.error("Error updating team athletes:",W)}},pe=h=>{h.preventDefault();const E={teamName:!O.trim(),ageCategory:!j.trim()};q(E),s(ze({teamId:e,teamData:{name:O,ageCategory:j,photo:u}}))},ue=()=>{G(!0)},ge=()=>{s(at(e)),G(!1)},se=()=>{G(!1)};if(D)return t.jsx(Te,{children:t.jsx(re,{})});if(L==="failed")return t.jsx(Ie,{children:t.jsxs(Pe,{children:[t.jsx("h2",{children:"Помилка завантаження"}),t.jsx(le,{$hasChanges:!0,onClick:()=>$("/teams"),children:"Повернутися до списку команд"})]})});if(!d)return t.jsx(Ie,{children:t.jsxs(Pe,{children:[t.jsx("h2",{children:"Команду не знайдено"}),t.jsx(le,{$hasChanges:!0,onClick:()=>$("/teams"),children:"Повернутися до списку команд"})]})});const Ce=d.logo&&!V,Se=V!==null;return t.jsxs(t.Fragment,{children:[(x||Y||z||c)&&t.jsx(Te,{children:t.jsx(re,{})}),S&&t.jsx(po,{children:t.jsxs(uo,{children:[t.jsx(go,{children:"Підтвердження видалення"}),t.jsxs(xo,{children:['Ви впевнені, що хочете видалити команду "',d.name,'"?']}),t.jsxs(mo,{children:[t.jsx(fo,{onClick:ge,children:"Видалити"}),t.jsx(bo,{onClick:se,children:"Скасувати"})]})]})}),t.jsx(fr,{isOpen:K,onConfirm:ae,onCancel:()=>F(!1),teamName:d.name}),t.jsx(Wt,{blurred:x||Y||z||c,children:t.jsxs(Zt,{children:[t.jsxs(Kt,{children:[t.jsxs(_t,{children:[t.jsx(Qt,{children:t.jsxs(Jt,{children:[t.jsx(eo,{children:t.jsx(to,{src:m||st,alt:"Логотип команди",onError:h=>{h.target.onerror=null,h.target.src=ce}})}),t.jsx(oo,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:l,children:t.jsx(wo,{})}),(Ce||Se)&&t.jsxs(ro,{children:[Ce&&(d==null?void 0:d.logo)&&t.jsx(no,{type:"button",tabIndex:0,onKeyDown:p,onClick:()=>F(!0),title:"Видалити логотип",children:t.jsx(ao,{})}),Se&&t.jsx(io,{type:"button",tabIndex:0,onKeyDown:p,onClick:B,title:"Скасувати завантаження",children:t.jsx(so,{})})]}),t.jsx(lo,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:f})]})}),t.jsxs(co,{children:[t.jsxs(Ge,{children:[t.jsx(Ae,{htmlFor:"teamName",children:"Назва команди *"}),t.jsx(De,{id:"teamName",type:"text",placeholder:"Введіть назву команди",value:O,onChange:h=>{Q(h.target.value),h.target.value.trim()&&q(E=>({...E,teamName:!1}))},isError:ee.teamName})]}),t.jsxs(Ge,{children:[t.jsx(Ae,{htmlFor:"ageCategory",children:"Вікова категорія *"}),t.jsx(De,{id:"ageCategory",type:"text",placeholder:"Введіть вікову категорію",value:j,onChange:h=>{P(h.target.value),h.target.value.trim()&&q(E=>({...E,ageCategory:!1}))},isError:ee.ageCategory})]})]})]}),t.jsx(qt,{children:t.jsx(pt,{teamAthletes:d.athletes||[],teamId:e,onAthletesChange:he,onSelectionChange:H})})]}),t.jsx(mr,{teamId:e,onSelectionChange:H}),t.jsx(ho,{children:t.jsxs("div",{style:{display:"flex",gap:"1rem",width:"100%",maxWidth:"500px"},children:[t.jsx(le,{type:"button",onClick:pe,disabled:x||!Z,$hasChanges:Z,children:x?"Збереження...":"Зберегти дані команди"}),t.jsx(le,{type:"button",onClick:ue,disabled:Y,$isDelete:!0,children:Y?"Видалення...":"Видалити команду"})]})})]})}),t.jsx(ht,{isOpen:J,onConfirm:te,onCancel:oe})]})};export{$r as default};
