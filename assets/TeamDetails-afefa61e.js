import{r as i,d as o,b as ue,a as re,o as Ue,q as me,i as Fe,k as fe,j as t,L as ee,t as Oe,S as ne,v as Xe,w as ie,x as He,z as te,y as f,A as Ve,B as We,C as qe,u as Ze,l as Je,D as ae,E as be,F as se,G as Ke,H as we,I as Qe,J as _e}from"./index-8def2ee6.js";import{P as et}from"./PlaceholderTeam-7b26a08e.js";import{p as tt}from"./PlaceholderProfile-3c1b0d36.js";import{S as rt,u as ot,N as nt}from"./CameraIcon-7144a44a.js";import{S as ve}from"./DeleteIcon-d8742b24.js";const Te=e=>i.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("path",{d:"M6 12H18M12 6V18",strokeLinecap:"round",strokeLinejoin:"round"})),Ie=e=>i.createElement("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"none",...e},i.createElement("path",{fillRule:"evenodd",d:"M3.5 7.75A.75.75 0 014.25 7h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75z",clipRule:"evenodd"})),it=({teamAthletes:e=[],onAthletesChange:a,teamId:l,onSelectionChange:y})=>{const d=ue(),{entities:R,list:C,loading:k,hasMore:w,currentPage:v,isAllDataLoaded:E}=re(n=>n.athletes),{teamAthletes:{entities:g,list:D,loading:B,hasMore:M,currentPage:P,isAllDataLoaded:u}}=re(n=>n.athletes),[h,A]=i.useState("remove"),[x,m]=i.useState(new Set),[L,T]=i.useState(!1),[$,q]=i.useState(null),I=i.useRef(null),S=i.useRef(null),j=i.useRef(!1),z=i.useRef(!1),Y=i.useRef(!1);i.useEffect(()=>{y&&y(x.size>0)},[x,y]),i.useEffect(()=>{m(new Set)},[h]),i.useEffect(()=>{if(h==="remove"&&l){d(Ue());const n=setTimeout(()=>{d(me({teamId:l,page:1}))},50);return()=>clearTimeout(n)}},[d,h,l]),i.useEffect(()=>{if(h==="add"){d(Fe());const n=setTimeout(()=>{j.current=!0,d(fe({page:1,filter:"withoutTeam"}))},50);return()=>clearTimeout(n)}},[d,h]);const N=i.useCallback(()=>{h!=="add"||!w||k||z.current||E||(z.current=!0,d(fe({page:v,filter:"withoutTeam"})).finally(()=>{z.current=!1}))},[d,w,k,v,E,h]),V=i.useCallback(()=>{h!=="remove"||!M||B||Y.current||u||!l||(Y.current=!0,d(me({teamId:l,page:P})).finally(()=>{Y.current=!1}))},[d,M,B,P,u,h,l]),W=i.useCallback(()=>{if(h==="add"){if(k||!w||z.current||E)return;if(I.current){const{scrollTop:n,scrollHeight:r,clientHeight:c}=I.current;n+c>=r-20&&N()}}else if(h==="remove"){if(B||!M||Y.current||u)return;if(S.current){const{scrollTop:n,scrollHeight:r,clientHeight:c}=S.current;n+c>=r-20&&V()}}},[w,k,N,M,B,V,u,h]);i.useEffect(()=>{const n=h==="add"?I.current:S.current;if(n)return n.addEventListener("scroll",W),()=>n.removeEventListener("scroll",W)},[W,h]);const U=n=>{m(r=>{const c=new Set(r);return c.has(n)?c.delete(n):c.add(n),c})},F=()=>{if(x.size===0)return;const n=Array.from(x);q({type:h,athleteIds:n,count:x.size}),T(!0)},Z=()=>{$&&($.type==="add"?a({addedAthletes:$.athleteIds}):$.type==="remove"&&a({removedAthletes:$.athleteIds}),T(!1),q(null),m(new Set))},J=()=>{T(!1),q(null)},_=()=>{m(new Set)},K=D.map(n=>{const r=g[n];return r?{id:r.id,name:`${r.lastName} ${r.firstName} ${r.patronymic||""}`.trim(),photo:r.photo}:null}).filter(Boolean),Q=h==="add"?C.map(n=>{const r=R[n];return r?{id:r._id||r.id,name:`${r.lastName} ${r.firstName} ${r.patronymic||""}`.trim(),photo:r.photo}:null}).filter(Boolean):[],s=h==="remove"?K:Q,p=h==="remove"?B:k,b=()=>Array.from(x).map(n=>{const r=s.find(c=>c.id===n);return r?r.name:""}).filter(Boolean);return t.jsxs(t.Fragment,{children:[L&&$&&t.jsx(at,{children:t.jsxs(st,{children:[t.jsx(lt,{children:"Підтвердження дії"}),t.jsxs(dt,{children:[t.jsxs(ct,{children:["Ви впевнені, що хочете ",$.type==="add"?"додати до команди":"видалити з команди"," ",$.count," спортсмен",$.count>1?"ів":"а","?"]}),t.jsx(ht,{children:b().map((n,r)=>t.jsxs(pt,{children:["• ",n]},r))})]}),t.jsxs(ut,{children:[t.jsx(xt,{onClick:Z,$actionType:$.type,children:$.type==="add"?"Додати":"Видалити"}),t.jsx(gt,{onClick:J,children:"Скасувати"})]})]})}),t.jsxs(mt,{children:[t.jsx(ft,{children:t.jsxs(bt,{children:[t.jsx(ye,{$isActive:h==="remove",onClick:()=>A("remove"),children:"Видалити з команди"}),t.jsx(ye,{$isActive:h==="add",onClick:()=>A("add"),children:"Додати до команди"})]})}),t.jsxs(wt,{children:[t.jsxs(vt,{ref:h==="add"?I:S,$hasSelectedAthletes:x.size>0,children:[s.length>0?s.map(n=>t.jsx(yt,{className:"athlete-item",children:t.jsxs(kt,{as:"div",onClick:()=>U(n.id),$isSelected:x.has(n.id),$actionType:h,children:[t.jsx(jt,{children:t.jsx(Ct,{to:`/athletes/${n.id}`,title:`Перейти до профілю спортсмена ${n.name}`,"aria-label":`Перейти до профілю спортсмена ${n.name}`,children:t.jsx($t,{loading:"lazy",src:n.photo||tt,alt:n.name})})}),t.jsx(At,{children:t.jsx(St,{$isSelected:x.has(n.id),title:`Перейти до профілю спортсмена ${n.name}`,"aria-label":`Перейти до профілю спортсмена ${n.name}`,children:n.name})}),t.jsx(Mt,{children:x.has(n.id)?t.jsx(le,{$iconType:"close",children:t.jsx(Bt,{onClick:r=>{r.stopPropagation(),U(n.id)}})}):h==="add"?t.jsx(le,{$iconType:"add",children:t.jsx(zt,{})}):t.jsx(le,{$iconType:"remove",children:t.jsx(Et,{})})})]})},n.id)):t.jsxs(Dt,{children:[h==="remove"&&!p&&"В команді немає спортсменів",h==="add"&&!p&&"Спортсменів без команди не знайдено"]}),p&&t.jsx(Yt,{children:t.jsx(ee,{})})]}),x.size>0&&t.jsx(Pt,{children:t.jsxs(Lt,{children:[t.jsxs(Tt,{children:["Обрано: ",x.size," спортсмен",x.size>1?"ів":"а"]}),t.jsxs(It,{children:[t.jsx(Gt,{onClick:F,children:h==="add"?"Додати":"Видалити"}),t.jsx(Rt,{onClick:_,children:"Скасувати"})]})]})})]})]})]})},at=o.div`
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
`,st=o.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 480px;
  width: 90%;
  margin: 20px;
  overflow: hidden;
`,lt=o.div`
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  padding: 16px 20px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`,dt=o.div`
  padding: 24px 20px;
`,ct=o.p`
  color: ${({theme:e})=>e.textBlack};
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 16px 0;
  text-align: center;
`,ht=o.div`
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
`,pt=o.div`
  color: ${({theme:e})=>e.textBlack};
  font-size: 14px;
  margin-bottom: 4px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ut=o.div`
  display: flex;
  gap: 12px;
  padding: 0 20px 20px 20px;
`,xt=o.button`
  flex: 1;
  background-color: ${({$actionType:e,theme:a})=>e==="add"?a.greenMain:a.red};
  color: ${({theme:e})=>e.white};
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({$actionType:e,theme:a})=>e==="add"?a.darkGreen:a.redDark};
    transform: translateY(-1px);
  }
`,gt=o.button`
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
`,mt=o.div`
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
`,ft=o.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-bottom: 1px solid ${({theme:e})=>e.greenMain};
`,bt=o.div`
  display: flex;
  border-radius: 6px 10px 0 0;
  overflow: hidden;
`,ye=o.button`
  flex: 1;
  padding: 12px 16px;
  background-color: ${({$isActive:e,theme:a})=>e?a.greenMain:a.ContainerBGColor};
  color: ${({$isActive:e,theme:a})=>e?a.white:a.textBlack};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  
  &:first-child {
    border-right: 1px solid ${({theme:e})=>e.greenMain};
  }
  
  &:hover {
    background-color: ${({$isActive:e,theme:a})=>e?a.darkGreen:a.lightGreen};
    color: ${({$isActive:e,theme:a})=>a.white};
  }

  @media (max-width: 390px) { 
     font-size: 12px;
  }
`,wt=o.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`,vt=o.div`
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
`,yt=o.div`
  width: 100%;
`,kt=o.div`
  display: grid;
  grid-template-columns: 32px 1fr 24px;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({theme:e,$isSelected:a,$actionType:l})=>a?l==="add"?e.lightGreen:e.red:e.disabledBG};
  color: ${({theme:e,$isSelected:a})=>a?e.white:e.textBlack};
  border-radius: 8px;
  cursor: default;
  transition: all 0.2s;
  box-sizing: border-box;

  &:hover {
    background-color: ${({theme:e,$isSelected:a,$actionType:l})=>a?l==="add"?e.greenMain:e.redDark:e.lightGreen};
    color: ${({theme:e})=>e.white};
  }
`,jt=o.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`,$t=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Ct=o(Oe)`

  &:hover {
  display: inline-block;
  border: 2px solid black; 
  border-radius: 50%;     
  overflow: hidden;
  border-color: black;  
  }
`,At=o.div`
  padding: 0 10px;
  overflow: hidden;
  min-width: 0;
`,St=o.div`
  font-weight: ${({$isSelected:e})=>e?"600":"500"};
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Mt=o.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
`,le=o.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({$iconType:e,theme:a})=>{switch(e){case"add":return a.greenMain;case"remove":return a.red;case"close":return a.gray;default:return a.gray}}};
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  &:hover {
    transform: scale(1.1);
    background-color: ${({$iconType:e,theme:a})=>{switch(e){case"add":return a.darkGreen;case"remove":return a.redDark;case"close":return a.textGray;default:return a.textGray}}};
  }
`,zt=o(Te)`
  width: 15px;
  height: 15px;
  fill: ${({theme:e})=>e.white};
  stroke: ${({theme:e})=>e.white};
  stroke-width: 3px;
`,Et=o(Ie)`
  width: 15px;
  height: 15px;
  fill: ${({theme:e})=>e.white};
  stroke: ${({theme:e})=>e.white};
  stroke-width: 1px;
`,Bt=o(ne)`
  width: 15px;
  height: 15px;
  fill: ${({theme:e})=>e.white};
    stroke: ${({theme:e})=>e.white};
  stroke-width: 0.4px;
`,Pt=o.div`
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
`,Lt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`,Tt=o.div`
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
`,It=o.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`,Gt=o.button`
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
`,Rt=o.button`
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
`,Dt=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({theme:e})=>e.textGray};
  font-size: 13px;
  text-align: center;
`,Yt=o.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,H={mobile:"320px",desktop:"1024px"},ke=o.div`
  position: sticky; 
  left: 0; 
  right: 0;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
`,de=o.div`
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  
  background: ${({blurred:e,theme:a})=>e?`rgba(${a.ContainerBGColor==="#ffffff"?"255, 255, 255":"77, 77, 77"}, 0.2)`:"transparent"};
  backdrop-filter: ${({blurred:e})=>e?"blur(10px)":"none"};
  -webkit-backdrop-filter: ${({blurred:e})=>e?"blur(10px)":"none"};
  filter: ${({blurred:e})=>e?"blur(3px)":"none"};
  pointer-events: ${({blurred:e})=>e?"none":"auto"};
  border-radius: 16px;
  box-shadow: ${({blurred:e})=>e?"0 4px 30px rgba(0, 0, 0, 0.1)":"none"};

  @media (min-width: ${H.desktop}) {
    align-items: flex-start;
    height: 100%;
  }
`,ce=o.div`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${H.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${H.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }
`,Nt=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  
  @media (min-width: ${H.desktop}) {
    flex-direction: row;
    gap: 20px;
  }
`,Ut=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media (min-width: ${H.desktop}) {
    margin-bottom: 0;
  }
`,Ft=o.div`
  flex: 1;
  min-height: 300px;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 8px;
  
  @media (max-width: ${H.desktop}) {
    min-height: 200px;
  }
`;o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  
  @media (min-width: ${H.desktop}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`;const Ot=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  
  @media (min-width: ${H.desktop}) {
    justify-content: center;
  }
`,Xt=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${H.desktop}) {
    width: 8rem;
    height: 8rem;
  }
`,Ht=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.disabledBG};
`,Vt=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Wt=o.label`
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

  @media (min-width: ${H.desktop}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,qt=o.input`
  display: none;
`;o.div`
  flex: 1;
`;const Zt=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,je=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,$e=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textBlack};
  font-size: 0.875rem;
  font-weight: 500;
`,Ce=o.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,isError:a})=>a?e.red:e.disabledBG};
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
`,Jt=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`,oe=o.button`
  max-width: 500px;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({theme:e,$hasChanges:a,$isDelete:l})=>l?e.red:a?e.greenMain:e.disabledBG};
  color: ${({theme:e,$hasChanges:a,$isDelete:l})=>l||a?e.white:e.textGray};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: ${({$hasChanges:e,$isDelete:a})=>e||a?"pointer":"not-allowed"};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e,$hasChanges:a,$isDelete:l})=>l?e.redDark:a?e.darkGreen:e.disabledBG};
  }

  &:focus {
    outline: none;
    background-color: ${({theme:e,$hasChanges:a,$isDelete:l})=>l?e.redDark:a?e.darkGreen:e.disabledBG};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    color: ${({theme:e})=>e.textGray};
    cursor: not-allowed;
  }

  @media (max-width: ${H.desktop}) {
    font-size: 0.8rem;
  }

`,Kt=o.div`
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
`,Qt=o.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  margin: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`,_t=o.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.textBlack};
  font-size: 1.25rem;
  font-weight: 600;
`,er=o.p`
  margin-bottom: 2rem;
  color: ${({theme:e})=>e.textBlack};
  line-height: 1.5;
`,tr=o.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`,rr=o.button`
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
`,or=o.button`
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
`,nr=o(rt)`
  fill: ${({theme:e})=>e.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${H.desktop}) {
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
  background-color: ${({$isActive:e,theme:a})=>e?a.greenMain:"transparent"};
  color: ${({$isActive:e,theme:a})=>e?a.white:a.greenMain};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:first-child {
    border-right: 1px solid ${({theme:e})=>e.greenMain};
  }
  
  &:hover {
    background-color: ${({$isActive:e,theme:a})=>e?a.darkGreen:a.lightGreen+"40"};
  }
  
  &:focus {
    outline: 2px solid ${({theme:e})=>e.greenMain};
    outline-offset: 2px;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;const ir=o.div`
margin-top: 10px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.1);
  position: relative;
`,ar=o.div`
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
`,sr=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  transform-origin: center;
`,lr=o.div`
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
`,dr=o.div`
  text-align: center;
  color: white;
  width: 100%;
  max-width: 600px;
`,cr=o.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,Ae=o.span`
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
`,hr=o.div`
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
`,pr=o.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`,ur=o.div`
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`,xr=o.div`
  height: 100%;
  background: #10b981;
  border-radius: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 0 4px rgba(16, 185, 129, 0.5);
`,gr=o.button`
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
`,mr=o.div`
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
`,fr=o.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4); 
  z-index: 10;
`,br=o.div`
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
`,wr=o.div`
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
`,vr=o.h2`
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
`,yr=o.span`
  font-weight: normal;
  font-size: 1rem;
  margin-left: 0.5rem;
  text-transform: uppercase;
 color: ${({theme:e})=>e.white};
  @media (max-width: 768px) {
    margin-left: 0; 
    font-size: 0.9rem;
  }
`,Se=o.button`
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
`,kr=o.div`
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
`,jr=o.div`
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
`;const $r=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  opacity: 0.7;
  filter: grayscale(0.3);

  @media (max-width: 768px) {
    border-radius: 6px;
  }
`,Cr=o.div`
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
`,Ge=o.button`
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
`,Me=o(Ge)`
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
`,ze=o(Ge)`
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
`,Ar=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
  height: 200px;
`,Sr=o.div`
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
`,he=o.div`
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
`,Mr=o.input`
  display: none;
`,zr=o.label`
  display: inline-block;   
  width: auto;          

  @media (max-width: 768px) {
    display: block;       
    width: 100%;         
    text-align: center;   
  }
`,Ee=o.button`
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
`;const Er=o.div`
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
`;const Br=o.p`
  text-align: center;
  font-size: 1rem;
  color: ${({theme:e})=>e.white};
  margin: 2rem auto;
  width: 100%;
`,Pr=o.div`
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
`;const Lr=o.div`
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
`,Tr=o.div`
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
`;const Ir=o.div`
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
`,Gr=o.div`
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
`,Rr=o.img`
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
`,Be=o.img`
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
`,Dr=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* Нижчий z-index ніж кнопки */
  opacity: ${e=>e.$loaded?0:1};
  transition: opacity 0.3s ease;
  pointer-events: none;
`,Yr=o.div`
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
`,Nr=e=>{if(!e)return"";try{const a=new URL(e);return a.searchParams.set("w","50"),a.searchParams.set("q","30"),a.toString()}catch{return e}},Ur=(e=10,a=10)=>{const l=document.createElement("canvas");l.width=e,l.height=a;const y=l.getContext("2d"),d=y.createLinearGradient(0,0,e,a);return d.addColorStop(0,"#f0f0f0"),d.addColorStop(1,"#e0e0e0"),y.fillStyle=d,y.fillRect(0,0,e,a),l.toDataURL()},Fr=({src:e,alt:a,onClick:l,onError:y,className:d,$borderRadius:R,$objectFit:C="cover",$cursor:k="pointer",$isFullscreen:w=!1,style:v,loading:E="lazy"})=>{const[g,D]=i.useState(!1),[B,M]=i.useState(!1),[P,u]=i.useState("");i.useEffect(()=>{if(e){const x=Nr(e);u(x!==e?x:Ur()),D(!1),M(!1)}},[e]);const h=()=>{D(!0)},A=x=>{M(!0),y&&y(x)};return w?t.jsx(Be,{src:e,alt:a,onClick:l,onLoad:h,onError:A,$loaded:g,$objectFit:C,$cursor:k,$isFullscreen:w,className:d,style:v}):t.jsxs(Gr,{$borderRadius:R,className:d,style:v,children:[P&&!B&&t.jsx(Rr,{src:P,alt:"",$loaded:g,loading:"eager"}),e&&t.jsx(Be,{src:e,alt:a,onClick:l,onLoad:h,onError:A,$loaded:g,$objectFit:C,$cursor:k,loading:E}),!g&&!B&&t.jsx(Dr,{$loaded:g,children:t.jsx(Yr,{})})]})},Pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEXz9Pa5vsq2u8jN0dnV2N/o6u7w8fTi5OnFydO+ws3f4ee6v8vY2+H29/jy9Pbu7/LJztbCx9HR1ty/NMEIAAACq0lEQVR42u3cYXaqMBBA4cyEgEAi4P4X+34oLSra9IA9E979FtDj7SAJUOocAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAqrQ3Y311iH5fsaktBTYn3d/Y2JljlM/orAR2IsdOHNqPFbY2TqKdXj/Orl/C24/sLHwV0ygiIv2466n0+kNlNFHYiohotfNyWKmIyKm2U9jsffqyU+gopLDMwiGE+sCFjRdV1SkOxyw8X2Rer6cNe2e7hfVJv3ddGg9YeNHlxrIPhyvs9GHvXB+sMJ2eLoDSsQrDwwhF/cFm+HiQikxvP+Prk63RwhSfCtt3i6J/fbK1Wlj9qvCiIjEd9yg9e32zZFotHPLPNOd55VyfotnVYsq9XVZ7fbvxsbviZx6kZ7+Y9toU7e7a/P1x+mI5qP3doRyLuraYlokxY4LrUzRcOPj56knaxmVMcP1XYfkKODW+VVWZqiHlTXBtisbvYgwhhKF22RNcmWLBd6JWJ/g8xXIL64u+eg5zl1huodfXj5riAQrPF333NG0xxVILvb5/YBhLKxzC8+XSD4mpqMLQt2F59hj158e+saDCFFrRacj9Dj5MsYTC0IuIfk9xzAoU7QopTKG93dq/7d3yJiiiVSqjMPTzJ25Dcu6cOUERjUUUzhP8mmLuBIsp/Jrg9Soq+OzAMgqXE7wm/uKvhIoovJ/gLxVQ+DTBwxVummABhRsnWEDhxgmaL9w8QfOFmydovTDlb11KLawopJBCCimk8E8Kbd+nGcJ2Q9F39fNRSKH5wtSZeyvI7/sm8O053MnCCOc/C/7Iu2vexIuyn3z/sLEQ6Orp4O+QOtf0HwrsGyOFrhP9QJ+qmUDnwtju/jp+PwZT/1chdNW+YuMAAAAAAAAAAAAAAAAAAAAAAAAAAACA/9s/LTI30XlcBHoAAAAASUVORK5CYII=",Le=e=>i.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.163 2.819C9 3.139 9 3.559 9 4.4V11H7.803c-.883 0-1.325 0-1.534.176a.75.75 0 0 0-.266.62c.017.274.322.593.931 1.232l4.198 4.401c.302.318.453.476.63.535a.749.749 0 0 0 .476 0c.177-.059.328-.217.63-.535l4.198-4.4c.61-.64.914-.96.93-1.233a.75.75 0 0 0-.265-.62C17.522 11 17.081 11 16.197 11H15V4.4c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656C13.861 2 13.441 2 12.6 2h-1.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zM5 21a1 1 0 0 0 1 1h12a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1z"})),Or=e=>i.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("g",{id:"Navigation / House_02"},i.createElement("path",{id:"Vector",d:"M4 11.4522V16.8002C4 17.9203 4 18.4807 4.21799 18.9086C4.40973 19.2849 4.71547 19.5906 5.0918 19.7823C5.5192 20.0001 6.07899 20.0001 7.19691 20.0001H16.8031C17.921 20.0001 18.48 20.0001 18.9074 19.7823C19.2837 19.5906 19.5905 19.2849 19.7822 18.9086C20 18.4811 20 17.9216 20 16.8037V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522Z",strokeLinecap:"round",strokeLinejoin:"round"}))),Xr=o.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  cursor: ${e=>e.$isDragging?"grabbing":e.$isZoomed?"grab":"zoom-in"};
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
`,Hr=o.img`
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
`,Vr=o.div`
  position: absolute;
  top: 20px;
  right: 80px;
  display: flex;
  gap: 10px;
  z-index: 100;

    @media (max-width: 768px) {
    top: 12px;
  }
`,pe=o.button`
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
`,Wr=({src:e,alt:a,onError:l,...y})=>{const[d,R]=i.useState(1),[C,k]=i.useState(0),[w,v]=i.useState(0),[E,g]=i.useState(!1),[D,B]=i.useState(!1),[M,P]=i.useState({width:0,height:0,left:0,top:0}),[u,h]=i.useState({width:0,height:0}),A=i.useRef(null),x=i.useRef(null),m=i.useRef({x:0,y:0,translateX:0,translateY:0}),L=i.useRef(0),T=.5,$=5,q=.8,I=i.useCallback(()=>{if(A.current&&x.current){const s=A.current.getBoundingClientRect(),p=x.current.getBoundingClientRect();h({width:s.width,height:s.height}),P({width:p.width,height:p.height,left:p.left-s.left,top:p.top-s.top})}},[]),S=i.useCallback((s,p,b)=>{if(!M.width||!M.height||!u.width||!u.height)return{x:s,y:p};const n=M.width*b,r=M.height*b;if(n<=u.width)s=0;else{const c=(n-u.width)/2;s=Math.max(-c,Math.min(c,s))}if(r<=u.height)p=0;else{const c=(r-u.height)/2;p=Math.max(-c,Math.min(c,p))}return{x:s,y:p}},[M,u]),j=i.useCallback((s,p,b)=>{const n=Math.max(T,Math.min($,d+s*q));if(n!==d){if(B(!0),setTimeout(()=>B(!1),200),p!==void 0&&b!==void 0&&A.current){const r=A.current.getBoundingClientRect(),c=p-r.left,G=b-r.top,O=c-C-r.width/2,X=G-w-r.height/2,xe=n/d,Re=O*xe,De=X*xe,Ye=C-(Re-O),Ne=w-(De-X),ge=S(Ye,Ne,n);k(ge.x),v(ge.y)}else{const r=S(0,0,n);k(r.x),v(r.y)}R(n)}},[d,C,w,S]),z=i.useCallback(s=>{s.preventDefault();const b=(Math.abs(s.deltaY)>50?s.deltaY*2:s.deltaY)>0?-1:1;j(b,s.clientX,s.clientY)},[j]),Y=i.useCallback(s=>{d<=1||(g(!0),m.current={x:s.clientX,y:s.clientY,translateX:C,translateY:w},s.preventDefault())},[d,C,w]),N=i.useCallback(s=>{if(!E||d<=1)return;const p=s.clientX-m.current.x,b=s.clientY-m.current.y;if(Math.abs(p)<1&&Math.abs(b)<1)return;const n=m.current.translateX+p,r=m.current.translateY+b,c=S(n,r,d);k(c.x),v(c.y)},[E,d,S]),V=i.useCallback(()=>{E&&g(!1)},[E]),W=i.useCallback(s=>{if(s.touches.length===1)g(!0),m.current={x:s.touches[0].clientX,y:s.touches[0].clientY,translateX:C,translateY:w};else if(s.touches.length===2){const p=s.touches[0],b=s.touches[1],n=Math.sqrt(Math.pow(b.clientX-p.clientX,2)+Math.pow(b.clientY-p.clientY,2));L.current=n}},[C,w]),U=i.useCallback(s=>{if(s.preventDefault(),s.touches.length===1&&E&&d>1){const p=s.touches[0].clientX-m.current.x,b=s.touches[0].clientY-m.current.y,n=m.current.translateX+p,r=m.current.translateY+b,c=S(n,r,d);k(c.x),v(c.y)}else if(s.touches.length===2){const p=s.touches[0],b=s.touches[1],n=Math.sqrt(Math.pow(b.clientX-p.clientX,2)+Math.pow(b.clientY-p.clientY,2));if(L.current>0){const r=n/L.current,c=(p.clientX+b.clientX)/2,G=(p.clientY+b.clientY)/2,O=Math.max(T,Math.min($,d*r));O!==d&&j(O>d?1:-1,c,G)}L.current=n}},[E,d,j,S]),F=i.useCallback(()=>{g(!1),L.current=0},[]),Z=i.useCallback(s=>{const p=d>1?1:3;B(!0),setTimeout(()=>B(!1),200),p===1?(R(1),k(0),v(0)):j(2,s.clientX,s.clientY)},[d,j]),J=i.useCallback(()=>{if(A.current){const s=A.current.getBoundingClientRect();j(1,s.left+s.width/2,s.top+s.height/2)}},[j]),_=i.useCallback(()=>{if(A.current){const s=A.current.getBoundingClientRect();j(-1,s.left+s.width/2,s.top+s.height/2)}},[j]),K=i.useCallback(()=>{B(!0),setTimeout(()=>B(!1),200),R(1),k(0),v(0)},[]),Q=i.useCallback(()=>{setTimeout(()=>{I()},100)},[I]);return i.useEffect(()=>{const s=()=>{I();const p=S(C,w,d);k(p.x),v(p.y)};return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[I,S,C,w,d]),i.useEffect(()=>{I()},[d,C,w,I]),i.useEffect(()=>{const s=A.current;if(s)return s.addEventListener("wheel",z,{passive:!1}),s.addEventListener("mousemove",N),s.addEventListener("touchmove",U,{passive:!1}),window.addEventListener("mouseup",V),window.addEventListener("touchend",F),()=>{s.removeEventListener("wheel",z),s.removeEventListener("mousemove",N),s.removeEventListener("touchmove",U),window.removeEventListener("mouseup",V),window.removeEventListener("touchend",F)}},[z,N,V,U,F]),t.jsxs(Xr,{ref:A,$isDragging:E,$isZoomed:d>1,onMouseDown:Y,onDoubleClick:Z,onTouchStart:W,...y,children:[t.jsxs(Vr,{children:[t.jsx(pe,{onClick:_,disabled:d<=T,title:"Зменшити",children:t.jsx(Ie,{})}),t.jsx(pe,{onClick:K,disabled:d===1&&C===0&&w===0,title:"Скинути масштаб",children:t.jsx(Or,{})}),t.jsx(pe,{onClick:J,disabled:d>=$,title:"Збільшити",children:t.jsx(Te,{})})]}),t.jsx(Hr,{ref:x,src:e,alt:a,$scale:d,$translateX:C,$translateY:w,$isTransitioning:D,onLoad:Q,onError:l,draggable:!1})]})},qr=({teamId:e,onSelectionChange:a})=>{const l=ue(),{teamGallery:y,galleryCurrentPage:d,galleryHasMore:R,fetchTeamGalleryStatus:C,uploadTeamPhotoStatus:k,deleteTeamPhotoStatus:w,storageInfo:v,teamDetails:E,uploadTeamPhotoError:g}=re(r=>r.teams),[D,B]=i.useState(!1),[M,P]=i.useState(!1),[u,h]=i.useState(null),[A,x]=i.useState(!1),[m,L]=i.useState(null),[T,$]=i.useState(new Set),[q,I]=i.useState(!0),S=i.useRef(null),j=i.useRef(null),z=k==="loading",Y=w==="loading";i.useEffect(()=>(e&&(l(Xe()),l(ie({teamId:e,page:1})),l(He())),()=>{l(te()),L(null),$(new Set),I(!0)}),[e,l]),i.useEffect(()=>{a&&a(m!==null)},[m,a]),i.useEffect(()=>{k==="succeeded"&&(f.success("Фото успішно завантажено!"),L(null),l(te()),j.current&&(j.current.value="")),k==="failed"&&(g?g.includes("File too large")||g.includes("max file size")||g.includes("size")?f.error("Файл занадто великий (макс. 5MB)"):g.includes("Insufficient storage")||g.includes("not enough space")||g.includes("storage")?f.error("Недостатньо місця в сховищі"):g.includes("Server not responding")||g.includes("network error")||g.includes("server")?f.error("Сервер не відповідає"):g.includes("Invalid file type")||g.includes("file type")||g.includes("format")?f.error("Файл не того формату"):f.error("Помилка при завантаженні фото"):f.error("Помилка при завантаженні фото"),l(te()),j.current&&(j.current.value=""))},[k,g,l]),i.useEffect(()=>{w==="succeeded"&&(f.success("Фото успішно видалено!"),l(te()),M&&u&&!y.find(r=>r.id===u.id)&&(P(!1),h(null))),w==="failed"&&(f.error("Помилка при видаленні фото"),l(te()))},[w,l,M,u,y]);const N=i.useCallback(()=>{if(!S.current||A||!R)return;const r=S.current,{scrollTop:c,scrollHeight:G,clientHeight:O}=r;G-c<=O+100&&(x(!0),l(ie({teamId:e,page:d+1})).unwrap().catch(X=>{X.message&&X.message.includes("Server not responding")&&f.error("Сервер не відповідає")}).finally(()=>{x(!1)}))},[l,e,d,R,A]);i.useEffect(()=>{const r=S.current;if(r&&D)return r.addEventListener("scroll",N),()=>r.removeEventListener("scroll",N)},[N,D]);const V=r=>{$(c=>new Set([...c,r]))},W=r=>{const c=r.target.files[0];if(c){if(!c.type.startsWith("image/")){f.error("Файл не того формату");return}if(c.size>5*1024*1024){f.error("Файл занадто великий (макс. 5MB)");return}L(c)}},U=()=>{L(null),j.current&&(j.current.value="")},F=async()=>{if(!m){f.warning("Оберіть файл для завантаження");return}if(v&&v.remainingBytes<m.size){Math.round(v.remainingBytes/(1024*1024)),Math.round(m.size/(1024*1024)),f.error("Недостатньо місця в сховищі");return}l(Ve({teamId:e,photo:m})).unwrap().catch(r=>{r.message&&(r.message.includes("File too large")?f.error("Файл занадто великий (макс. 5MB)"):r.message.includes("Insufficient storage")?f.error("Недостатньо місця в сховищі"):r.message.includes("Server not responding")?f.error("Сервер не відповідає"):r.message.includes("Invalid file type")&&f.error("Файл не того формату"))})},Z=r=>{l(We({teamId:e,photoId:r}))},J=async(r,c)=>{try{const G=await fetch(r,{mode:"cors"});if(!G.ok)throw new Error("Server not responding");const O=await G.blob(),X=document.createElement("a");X.href=URL.createObjectURL(O),X.download=`team-${e}-photo-${c}.jpg`,document.body.appendChild(X),X.click(),X.remove(),URL.revokeObjectURL(X.href)}catch(G){G.message.includes("Server not responding")||G.message.includes("Failed to fetch")?f.error("Сервер не відповідає"):f.error("Помилка завантаження фото"),console.error(G)}},_=()=>{B(!0),I(!0),y.length===0&&l(ie({teamId:e,page:1})).unwrap().catch(r=>{r.message&&r.message.includes("Server not responding")&&f.error("Сервер не відповідає")})},K=()=>{B(!1),P(!1),h(null),m&&(L(null),j.current&&(j.current.value=""))},Q=r=>{if(T.has(r.id)){f.error("Помилка завантаження фото");return}h(r),P(!0)},s=r=>{r.target===r.currentTarget&&K()},p=r=>{if(r===0)return"0 MB";const c=1024,G=["B","KB","MB","GB"],O=Math.floor(Math.log(r)/Math.log(c));return parseFloat((r/Math.pow(c,O)).toFixed(1))+" "+G[O]},b=y&&y.length>0?y[0]:null,n=(E==null?void 0:E.galleryCount)||y.length||0;return t.jsxs(t.Fragment,{children:[t.jsx(ir,{children:t.jsxs(ar,{onClick:_,children:[t.jsx(sr,{src:b&&!T.has(b.id)?b.url:Pe,alt:"Фон галереї",onError:()=>b&&V(b.id)}),t.jsx(lr,{children:t.jsxs(dr,{children:[t.jsx(cr,{children:"Галерея команди"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",justifyContent:"center",flexWrap:"wrap",marginBottom:"1rem"},children:[n>0?t.jsxs(Ae,{children:[n," фото"]}):t.jsx(Ae,{children:"Поки що немає фото"}),v&&t.jsxs(hr,{children:[t.jsxs(pr,{children:[p(v.usedBytes)," / ",p(v.limitBytes)]}),t.jsx(ur,{children:t.jsx(xr,{style:{width:`${Math.min(v.usedPercentage,100)}%`,backgroundColor:v.usedPercentage>90?"#ef4444":v.usedPercentage>70?"#f59e0b":"#10b981"}})})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx(gr,{children:n>0?"Переглянути всі фото":"Додати фото"})})]})})]})}),D&&t.jsxs(mr,{children:[t.jsx(fr,{onClick:s}),t.jsxs(br,{onClick:r=>r.stopPropagation(),children:[t.jsxs(wr,{children:[t.jsxs(vr,{children:["Галерея команди",n>0&&t.jsxs(yr,{children:["(",n," фото)"]})]}),t.jsx(Se,{onClick:K,title:"Закрити",children:t.jsx(ne,{})})]}),t.jsx("div",{ref:S,style:{flex:1,overflowY:"auto",padding:"1.5rem",paddingBottom:"10px"},children:y.length>0?t.jsxs(t.Fragment,{children:[t.jsx(kr,{children:y.map(r=>t.jsxs(jr,{children:[T.has(r.id)?t.jsx($r,{src:Pe,alt:"Помилка завантаження",onClick:()=>Q(r)}):t.jsx(Fr,{src:r.url,alt:`Фото команди ${r.id}`,onClick:()=>Q(r),onError:()=>V(r.id),loading:"lazy",$borderRadius:"8px",$objectFit:"cover",$cursor:"pointer"}),t.jsxs(Cr,{className:"photo-actions",children:[t.jsx(ze,{onClick:c=>{c.stopPropagation(),J(r.url,r.id)},disabled:Y||z||T.has(r.id),title:T.has(r.id)?"Фото недоступне для завантаження":"Завантажити фото",children:t.jsx(Le,{style:{width:"1.2rem",height:"1.2rem"}})}),t.jsx(Me,{onClick:c=>{c.stopPropagation(),Z(r.id)},disabled:Y||z,title:Y||z?"Не можна видалити фото зараз":"Видалити фото",children:t.jsx(ve,{})})]})]},r.id))}),A&&t.jsx(Ar,{children:t.jsx(ee,{})})]}):t.jsx(Er,{children:t.jsx(Br,{children:"Поки що немає фотографій"})})}),z&&t.jsx(he,{children:t.jsx(ee,{})}),Y&&t.jsx(he,{children:t.jsx(ee,{})}),t.jsxs(Sr,{children:[m&&t.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.9)",border:"2px dashed #ccc",borderRadius:"8px",padding:"1rem",marginBottom:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("span",{style:{fontSize:"0.9rem",color:"#333"},children:m.name.length>30?`${m.name.substring(0,30)}...`:m.name}),t.jsx("button",{onClick:U,style:{background:"transparent",border:"none",color:"#ef4444",cursor:"pointer",fontSize:"1.2rem",fontWeight:"bold",padding:"0.25rem"},children:t.jsx(ne,{style:{width:"1rem",height:"1rem",color:"#ef4444",fill:"#ef4444"}})})]}),t.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[t.jsx(Mr,{ref:j,type:"file",accept:"image/*",onChange:W,id:"gallery-upload"}),t.jsx(zr,{htmlFor:"gallery-upload",children:t.jsx(Ee,{as:"span",disabled:z,children:"Додати зображення"})}),m&&t.jsx(Ee,{onClick:F,disabled:z||!m,$isPrimary:!0,children:z?"Завантаження...":"Завантажити зображення"})]})]})]})]}),M&&t.jsx(Pr,{onClick:r=>{r.stopPropagation(),P(!1),h(null)},children:t.jsx(Tr,{children:t.jsxs(Lr,{children:[t.jsx(Wr,{src:u==null?void 0:u.url,alt:"Перегляд фото",onClick:r=>r.stopPropagation(),onError:()=>{f.error("Помилка завантаження фото"),P(!1)},style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}),Y&&t.jsx(he,{children:t.jsx(ee,{})}),t.jsxs(Ir,{onClick:r=>r.stopPropagation(),children:[t.jsx(ze,{onClick:()=>J(u==null?void 0:u.url,u==null?void 0:u.id),disabled:T.has(u==null?void 0:u.id),children:t.jsx(Le,{style:{width:"1.2rem",height:"1.2rem"}})}),t.jsx(Me,{onClick:()=>Z(u==null?void 0:u.id),children:t.jsx(ve,{style:{width:"1.2rem",height:"1.2rem"}})})]}),t.jsx(Se,{onClick:r=>{r.stopPropagation(),P(!1),h(null)},children:t.jsx(ne,{})})]})})})]})},eo=()=>{const{teamId:e}=qe(),{setTitle:a}=Ze(),l=ue(),y=Je(),{teamDetails:d,fetchTeamDetailsStatus:R,fetchTeamDetailsError:C,updateTeamStatus:k,updateTeamError:w,deleteTeamStatus:v,deleteTeamError:E}=re(n=>n.teams),{updateTeamAthletesStatus:g,updateTeamAthletesError:D}=re(n=>n.athletes),B=R==="loading",M=k==="loading",P=v==="loading",u=g==="loading",[h,A]=i.useState(null),[x,m]=i.useState(null),[L,T]=i.useState(""),[$,q]=i.useState(""),[I,S]=i.useState(!1),[j,z]=i.useState(!1),[Y,N,V]=ot(j),[W,U]=i.useState({teamName:!1,ageCategory:!1}),[F,Z]=i.useState({teamName:"",ageCategory:"",photoPreview:null});i.useEffect(()=>(e&&l(ae(e)),()=>{x&&x!==(d==null?void 0:d.logo)&&URL.revokeObjectURL(x),l(be()),l(se())}),[e,l]),i.useEffect(()=>{if(d){a(`Профіль команди ${d.name}`);const n=d.name||"",r=d.ageCategory||"",c=d.logo||null;T(n),q(r),m(c),Z({teamName:n,ageCategory:r,photoPreview:c}),z(!1)}},[d,a]),i.useEffect(()=>{const n=L!==F.teamName,r=$!==F.ageCategory,c=h!==null||x!==F.photoPreview;z(n||r||c)},[L,$,h,x,F]),i.useEffect(()=>{k==="succeeded"&&(f.success("Дані команди успішно оновлено!"),A(null),l(be()),l(ae(e)),z(!1)),k==="failed"&&w&&f.error(w)},[k,w,l,e]),i.useEffect(()=>{g==="succeeded"&&(f.success("Спортсмени успішно оновлені!"),l(ae(e)),l(se())),g==="failed"&&D&&(f.error(D),l(se()))},[g,D,l,e]),i.useEffect(()=>{v==="succeeded"&&(f.success("Команду успішно видалено!"),y("/teams"),l(Ke())),v==="failed"&&E&&f.error(E)},[v,E,y,l]),i.useEffect(()=>{R==="failed"&&C&&f.error(C)},[R,C]);const J=n=>{const r=n.target.files[0];if(r){A(r),x&&x!==(d==null?void 0:d.logo)&&URL.revokeObjectURL(x);const c=URL.createObjectURL(r);m(c)}},_=n=>{if(n.key==="Enter"||n.key===" "){const r=document.getElementById("photo-upload");r&&r.click()}},K=async({addedAthletes:n=[],removedAthletes:r=[]})=>{try{n.length>0&&await l(we({teamId:e,operation:"add",athleteIds:n})).unwrap(),r.length>0&&await l(we({teamId:e,operation:"remove",athleteIds:r})).unwrap()}catch(c){console.error("Error updating team athletes:",c)}},Q=n=>{n.preventDefault();const r={teamName:!L.trim(),ageCategory:!$.trim()},c=!Object.values(r).some(G=>G);if(U(r),!c){f.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});return}l(Qe({teamId:e,teamData:{name:L,ageCategory:$,photo:h}}))},s=()=>{S(!0)},p=()=>{l(_e(e)),S(!1)},b=()=>{S(!1)};return B?t.jsx(ke,{children:t.jsx(ee,{})}):R==="failed"?t.jsx(de,{children:t.jsxs(ce,{style:{textAlign:"center",padding:"2rem"},children:[t.jsx("h2",{style:{color:"inherit"},children:"Помилка завантаження"}),t.jsx("p",{style:{color:"inherit"},children:C}),t.jsx(oe,{onClick:()=>y("/teams"),children:"Повернутися до списку команд"})]})}):d?t.jsxs(t.Fragment,{children:[(M||P||u)&&t.jsx(ke,{children:t.jsx(ee,{})}),I&&t.jsx(Kt,{children:t.jsxs(Qt,{children:[t.jsx(_t,{children:"Підтвердження видалення"}),t.jsxs(er,{children:['Ви впевнені, що хочете видалити команду "',d.name,'"?']}),t.jsxs(tr,{children:[t.jsx(rr,{onClick:p,children:"Видалити"}),t.jsx(or,{onClick:b,children:"Скасувати"})]})]})}),t.jsx(de,{blurred:M||P||u,children:t.jsxs(ce,{children:[t.jsxs(Nt,{children:[t.jsxs(Ut,{children:[t.jsx(Ot,{children:t.jsxs(Xt,{children:[t.jsx(Ht,{children:t.jsx(Vt,{src:x||et,alt:"Фото команди"})}),t.jsx(Wt,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:_,children:t.jsx(nr,{})}),t.jsx(qt,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:J})]})}),t.jsxs(Zt,{children:[t.jsxs(je,{children:[t.jsx($e,{htmlFor:"teamName",children:"Назва команди *"}),t.jsx(Ce,{id:"teamName",type:"text",placeholder:"Введіть назву команди",value:L,onChange:n=>{T(n.target.value),n.target.value.trim()&&U(r=>({...r,teamName:!1}))},isError:W.teamName})]}),t.jsxs(je,{children:[t.jsx($e,{htmlFor:"ageCategory",children:"Вікова категорія *"}),t.jsx(Ce,{id:"ageCategory",type:"text",placeholder:"Введіть вікову категорію",value:$,onChange:n=>{q(n.target.value),n.target.value.trim()&&U(r=>({...r,ageCategory:!1}))},isError:W.ageCategory})]})]})]}),t.jsx(Ft,{children:t.jsx(it,{teamAthletes:d.athletes||[],teamId:e,onAthletesChange:K,onSelectionChange:z})})]}),t.jsx(qr,{teamId:e,onSelectionChange:z}),t.jsx(Jt,{children:t.jsxs("div",{style:{display:"flex",gap:"1rem",width:"100%",maxWidth:"500px"},children:[t.jsx(oe,{type:"button",onClick:Q,disabled:M||!j,$hasChanges:j,children:M?"Збереження...":"Зберегти дані команди"}),t.jsx(oe,{type:"button",onClick:s,disabled:P,$isDelete:!0,children:P?"Видалення...":"Видалити команду"})]})})]})}),t.jsx(nt,{isOpen:Y,onConfirm:N,onCancel:V})]}):t.jsx(de,{children:t.jsxs(ce,{style:{textAlign:"center",padding:"2rem"},children:[t.jsx("h2",{style:{color:"inherit"},children:"Команду не знайдено"}),t.jsx(oe,{onClick:()=>y("/teams"),children:"Повернутися до списку команд"})]})})};export{eo as default};
