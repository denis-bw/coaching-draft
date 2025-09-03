import{d as o,e as he,c as V,r as i,t as xe,v as re,m as ue,n as ne,j as t,L as oe,w as ge,b as fe,u as me,x as X,z as ie,A as Z,y as T,B as be,C as ae,D as we,E as ke}from"./index-120b2613.js";import{P as ve}from"./PlaceholderTeam-7b26a08e.js";import{p as $e}from"./PlaceholderProfile-3c1b0d36.js";import{S as ye}from"./CameraIcon-60953cb7.js";const je=({teamAthletes:e=[],onAthletesChange:n,teamId:l})=>{const h=he(),{entities:p,list:M,loading:m,hasMore:w,currentPage:I,isAllDataLoaded:j}=V(r=>r.athletes),{teamAthletes:{entities:R,list:E,loading:k,hasMore:L,currentPage:B,isAllDataLoaded:v}}=V(r=>r.athletes),[a,z]=i.useState("remove"),[u,g]=i.useState(new Set),[W,$]=i.useState(!1),[x,y]=i.useState(null),G=i.useRef(null),P=i.useRef(null),N=i.useRef(!1),C=i.useRef(!1),A=i.useRef(!1);i.useEffect(()=>{g(new Set)},[a]),i.useEffect(()=>{if(a==="remove"&&l){h(xe());const r=setTimeout(()=>{h(re({teamId:l,page:1}))},50);return()=>clearTimeout(r)}},[h,a,l]),i.useEffect(()=>{if(a==="add"){h(ue());const r=setTimeout(()=>{N.current=!0,h(ne({page:1,filter:"withoutTeam"}))},50);return()=>clearTimeout(r)}},[h,a]);const U=i.useCallback(()=>{a!=="add"||!w||m||C.current||j||(C.current=!0,h(ne({page:I,filter:"withoutTeam"})).finally(()=>{C.current=!1}))},[h,w,m,I,j,a]),D=i.useCallback(()=>{a!=="remove"||!L||k||A.current||v||!l||(A.current=!0,h(re({teamId:l,page:B})).finally(()=>{A.current=!1}))},[h,L,k,B,v,a,l]),S=i.useCallback(()=>{if(a==="add"){if(m||!w||C.current||j)return;if(G.current){const{scrollTop:r,scrollHeight:s,clientHeight:b}=G.current;r+b>=s-20&&U()}}else if(a==="remove"){if(k||!L||A.current||v)return;if(P.current){const{scrollTop:r,scrollHeight:s,clientHeight:b}=P.current;r+b>=s-20&&D()}}},[w,m,U,L,k,D,v,a]);i.useEffect(()=>{const r=a==="add"?G.current:P.current;if(r)return r.addEventListener("scroll",S),()=>r.removeEventListener("scroll",S)},[S,a]);const F=r=>{g(s=>{const b=new Set(s);return b.has(r)?b.delete(r):b.add(r),b})},K=()=>{if(u.size===0)return;const r=Array.from(u);y({type:a,athleteIds:r,count:u.size}),$(!0)},Y=()=>{x&&(x.type==="add"?n({addedAthletes:x.athleteIds}):x.type==="remove"&&n({removedAthletes:x.athleteIds}),$(!1),y(null),g(new Set))},_=()=>{$(!1),y(null)},q=()=>{g(new Set)},J=E.map(r=>{const s=R[r];return s?{id:s.id,name:`${s.lastName} ${s.firstName} ${s.patronymic||""}`.trim(),photo:s.photo}:null}).filter(Boolean),Q=a==="add"?M.map(r=>{const s=p[r];return s?{id:s._id||s.id,name:`${s.lastName} ${s.firstName} ${s.patronymic||""}`.trim(),photo:s.photo}:null}).filter(Boolean):[],H=a==="remove"?J:Q,d=a==="remove"?k:m,c=()=>Array.from(u).map(r=>{const s=H.find(b=>b.id===r);return s?s.name:""}).filter(Boolean);return t.jsxs(t.Fragment,{children:[W&&x&&t.jsx(Ce,{children:t.jsxs(Ae,{children:[t.jsx(Se,{children:"Підтвердження дії"}),t.jsxs(Te,{children:[t.jsxs(Be,{children:["Ви впевнені, що хочете ",x.type==="add"?"додати до команди":"видалити з команди"," ",x.count," спортсмен",x.count>1?"ів":"","?"]}),x.count<=5&&t.jsx(Ge,{children:c().map((r,s)=>t.jsxs(Me,{children:["• ",r]},s))})]}),t.jsxs(Ie,{children:[t.jsx(Ee,{onClick:Y,$actionType:x.type,children:x.type==="add"?"Додати":"Видалити"}),t.jsx(Le,{onClick:_,children:"Скасувати"})]})]})}),t.jsxs(ze,{$hasSelectedAthletes:u.size>0,children:[t.jsx(Pe,{children:t.jsxs(De,{children:[t.jsx(se,{$isActive:a==="remove",onClick:()=>z("remove"),children:"Видалити з команди"}),t.jsx(se,{$isActive:a==="add",onClick:()=>z("add"),children:"Додати до команди"})]})}),t.jsx(Re,{children:t.jsxs(Ne,{ref:a==="add"?G:P,children:[H.length>0?H.map(r=>t.jsx(Ue,{className:"athlete-item",children:t.jsxs(He,{as:"div",onClick:()=>F(r.id),$isSelected:u.has(r.id),$actionType:a,children:[t.jsx(We,{children:t.jsx(Fe,{loading:"lazy",src:r.photo||$e,alt:r.name})}),t.jsx(Oe,{children:t.jsx(Ve,{$isSelected:u.has(r.id),children:r.name})}),t.jsx(Ke,{children:u.has(r.id)?t.jsx(_e,{onClick:s=>{s.stopPropagation(),F(r.id)}}):t.jsx(Ye,{$actionType:a})})]})},r.id)):t.jsxs(tt,{children:[a==="remove"&&!d&&"В команді немає спортсменів",a==="add"&&!d&&"Спортсменів без команди не знайдено"]}),d&&t.jsx(ot,{children:t.jsx(oe,{})})]})}),u.size>0&&t.jsx(qe,{children:t.jsxs(Je,{children:[t.jsxs(Qe,{children:["Обрано: ",u.size," спортсмен",u.size>1?"ів":""]}),t.jsxs(Xe,{children:[t.jsx(Ze,{onClick:K,children:a==="add"?"Додати":"Видалити"}),t.jsx(et,{onClick:q,children:"Скасувати"})]})]})})]})]})},Ce=o.div`
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
`,Ae=o.div`
  background-color: ${({theme:e})=>e.white};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 480px;
  width: 90%;
  margin: 20px;
  overflow: hidden;
`,Se=o.div`
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  padding: 16px 20px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`,Te=o.div`
  padding: 24px 20px;
`,Be=o.p`
  color: ${({theme:e})=>e.textBlack};
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 16px 0;
  text-align: center;
`,Ge=o.div`
  background-color: ${({theme:e})=>e.disabledBG};
  border-radius: 8px;
  padding: 12px 16px;
  margin-top: 16px;
  max-height: 150px;
  overflow-y: auto;
`,Me=o.div`
  color: ${({theme:e})=>e.textBlack};
  font-size: 14px;
  margin-bottom: 4px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ie=o.div`
  display: flex;
  gap: 12px;
  padding: 0 20px 20px 20px;
`,Ee=o.button`
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
`,Le=o.button`
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
`,ze=o.div`
  width: 100%;
  max-width: 100%;
  height: ${({$hasSelectedAthletes:e})=>e?"360px":"320px"};
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.greenMain};
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: height 0.2s ease-in-out;
`,Pe=o.div`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-bottom: 1px solid ${({theme:e})=>e.greenMain};
`,De=o.div`
  display: flex;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`,se=o.button`
  flex: 1;
  padding: 12px 16px;
  background-color: ${({$isActive:e,theme:n})=>e?n.greenMain:n.white};
  color: ${({$isActive:e,theme:n})=>e?n.white:n.greenMain};
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
`,Re=o.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`,Ne=o.div`
  height: 100%;
  max-height: 240px;
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
`,Ue=o.div`
  width: 100%;
`,He=o.div`
  display: grid;
  grid-template-columns: 32px 1fr 24px;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({theme:e,$isSelected:n,$actionType:l})=>n?l==="add"?e.lightGreen:e.red:e.disabledBG};
  color: ${({theme:e,$isSelected:n})=>n?e.white:e.textBlack};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  box-sizing: border-box;

  &:hover {
    background-color: ${({theme:e,$isSelected:n,$actionType:l})=>n?l==="add"?e.greenMain:e.redDark:e.lightGreen};
    color: ${({theme:e})=>e.white};
  }
`,We=o.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`,Fe=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Oe=o.div`
  padding: 0 10px;
  overflow: hidden;
  min-width: 0;
`,Ve=o.div`
  font-weight: ${({$isSelected:e})=>e?"600":"500"};
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ke=o.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
`,Ye=o.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${({$actionType:e,theme:n})=>e==="add"?n.greenMain:n.red};
  cursor: pointer;
  transition: transform 0.2s;
  position: relative;
  flex-shrink: 0;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 2px;
    background-color: white;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2px;
    height: 10px;
    background-color: white;
    display: ${({$actionType:e})=>e==="add"?"block":"none"};
  }
`,_e=o.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.gray};
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  flex-shrink: 0;
  
  &:hover {
    transform: scale(1.1);
    background-color: ${({theme:e})=>e.textGray};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 10px;
    height: 2px;
    background-color: white;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 10px;
    height: 2px;
    background-color: white;
  }
`,qe=o.div`
  background-color: ${({theme:e})=>e.lightGreen};
  border-top: 1px solid ${({theme:e})=>e.greenMain};
  padding: 8px 12px;
`,Je=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`,Qe=o.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.textBlack};
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Xe=o.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`,Ze=o.button`
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
`,et=o.button`
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
`,tt=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({theme:e})=>e.textGray};
  font-size: 13px;
  text-align: center;
`,ot=o.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,f={mobile:"320px",desktop:"1024px"},le=o.div`
  position: sticky; 
  left: 0; 
  right: 0;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
`,ee=o.div`
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

  @media (min-width: ${f.desktop}) {
    align-items: flex-start;
    height: 100%;
  }
`,te=o.div`
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
`,rt=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  
  @media (min-width: ${f.desktop}) {
    flex-direction: row;
    gap: 20px;
  }
`,nt=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media (min-width: ${f.desktop}) {
    margin-bottom: 0;
  }
`,it=o.div`
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
`;const at=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  
  @media (min-width: ${f.desktop}) {
    justify-content: center;
  }
`,st=o.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${f.desktop}) {
    width: 8rem;
    height: 8rem;
  }
`,lt=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.disabledBG};
`,dt=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ct=o.label`
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
`,pt=o.input`
  display: none;
`;o.div`
  flex: 1;
`;const ht=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,de=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ce=o.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textBlack};
  font-size: 0.875rem;
  font-weight: 500;
`,pe=o.input`
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
`,xt=o.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`,O=o.button`
  max-width: 500px;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
  }

  &:focus {
    outline: none;
    background-color: ${({theme:e})=>e.darkGreen};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    color: ${({theme:e})=>e.textGray};
    cursor: not-allowed;
  }
`,ut=o(ye)`
  fill: ${e=>e.theme.white};
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
`;const wt=()=>{const{teamId:e}=ge(),{setTitle:n}=fe(),l=he(),h=me(),{teamDetails:p,fetchTeamDetailsStatus:M,fetchTeamDetailsError:m,updateTeamStatus:w,updateTeamError:I,deleteTeamStatus:j,deleteTeamError:R}=V(d=>d.teams),{updateTeamAthletesStatus:E,updateTeamAthletesError:k}=V(d=>d.athletes),L=M==="loading",B=w==="loading",v=j==="loading",a=E==="loading",[z,u]=i.useState(null),[g,W]=i.useState(null),[$,x]=i.useState(""),[y,G]=i.useState(""),[P,N]=i.useState(!1),[C,A]=i.useState(!1),[U,D]=i.useState({teamName:!1,ageCategory:!1}),[S,F]=i.useState({teamName:"",ageCategory:"",photoPreview:null});i.useEffect(()=>(e&&l(X(e)),()=>{g&&g!==(p==null?void 0:p.logo)&&URL.revokeObjectURL(g),l(ie()),l(Z())}),[e,l]),i.useEffect(()=>{if(p){n(`Профіль команди ${p.name}`);const d=p.name||"",c=p.ageCategory||"",r=p.logo||null;x(d),G(c),W(r),F({teamName:d,ageCategory:c,photoPreview:r}),A(!1)}},[p,n]),i.useEffect(()=>{const d=$!==S.teamName,c=y!==S.ageCategory,r=z!==null||g!==S.photoPreview;A(d||c||r)},[$,y,z,g,S]),i.useEffect(()=>{w==="succeeded"&&(T.success("Дані команди успішно оновлено!"),u(null),l(ie()),l(X(e)),A(!1)),w==="failed"&&I&&T.error(I)},[w,I,l,e]),i.useEffect(()=>{E==="succeeded"&&(T.success("Спортсмени успішно оновлені!"),l(X(e)),l(Z())),E==="failed"&&k&&(T.error(k),l(Z()))},[E,k,l,e]),i.useEffect(()=>{j==="succeeded"&&(T.success("Команду успішно видалено!"),h("/teams"),l(be())),j==="failed"&&R&&T.error(R)},[j,R,h,l]),i.useEffect(()=>{M==="failed"&&m&&T.error(m)},[M,m]);const K=d=>{const c=d.target.files[0];if(c){u(c),g&&g!==(p==null?void 0:p.logo)&&URL.revokeObjectURL(g);const r=URL.createObjectURL(c);W(r)}},Y=d=>{if(d.key==="Enter"||d.key===" "){const c=document.getElementById("photo-upload");c&&c.click()}},_=async({addedAthletes:d=[],removedAthletes:c=[]})=>{try{d.length>0&&await l(ae({teamId:e,operation:"add",athleteIds:d})).unwrap(),c.length>0&&await l(ae({teamId:e,operation:"remove",athleteIds:c})).unwrap()}catch(r){console.error("Error updating team athletes:",r)}},q=d=>{d.preventDefault();const c={teamName:!$.trim(),ageCategory:!y.trim()},r=!Object.values(c).some(s=>s);if(D(c),!r){T.error("Будь ласка, заповніть всі обов'язкові поля",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});return}l(we({teamId:e,teamData:{name:$,ageCategory:y,photo:z}}))},J=()=>{N(!0)},Q=()=>{l(ke(e)),N(!1)},H=()=>{N(!1)};return L?t.jsx(le,{children:t.jsx(oe,{})}):M==="failed"?t.jsx(ee,{children:t.jsxs(te,{style:{textAlign:"center",padding:"2rem"},children:[t.jsx("h2",{children:"Помилка завантаження"}),t.jsx("p",{children:m}),t.jsx(O,{onClick:()=>h("/teams"),children:"Повернутися до списку команд"})]})}):p?t.jsxs(t.Fragment,{children:[(B||v||a)&&t.jsx(le,{children:t.jsx(oe,{})}),P&&t.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},children:t.jsxs("div",{style:{backgroundColor:"white",padding:"2rem",borderRadius:"12px",textAlign:"center",maxWidth:"400px",margin:"20px"},children:[t.jsx("h3",{style:{marginTop:0,marginBottom:"1rem"},children:"Підтвердження видалення"}),t.jsxs("p",{style:{marginBottom:"2rem"},children:['Ви впевнені, що хочете видалити команду "',p.name,'"?']}),t.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:[t.jsx("button",{onClick:Q,style:{backgroundColor:"#f44336",color:"white",border:"none",padding:"0.75rem 1.5rem",borderRadius:"6px",cursor:"pointer",fontWeight:"500"},children:"Видалити"}),t.jsx("button",{onClick:H,style:{backgroundColor:"#e0e0e0",color:"#333",border:"none",padding:"0.75rem 1.5rem",borderRadius:"6px",cursor:"pointer",fontWeight:"500"},children:"Скасувати"})]})]})}),t.jsx(ee,{blurred:B||v||a,children:t.jsxs(te,{children:[t.jsxs(rt,{children:[t.jsxs(nt,{children:[t.jsx(at,{children:t.jsxs(st,{children:[t.jsx(lt,{children:t.jsx(dt,{src:g||ve,alt:"Фото команди"})}),t.jsx(ct,{htmlFor:"photo-upload",tabIndex:0,onKeyDown:Y,children:t.jsx(ut,{})}),t.jsx(pt,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:K})]})}),t.jsxs(ht,{children:[t.jsxs(de,{children:[t.jsx(ce,{htmlFor:"teamName",children:"Назва команди *"}),t.jsx(pe,{id:"teamName",type:"text",placeholder:"Введіть назву команди",value:$,onChange:d=>{x(d.target.value),d.target.value.trim()&&D(c=>({...c,teamName:!1}))},isError:U.teamName})]}),t.jsxs(de,{children:[t.jsx(ce,{htmlFor:"ageCategory",children:"Вікова категорія *"}),t.jsx(pe,{id:"ageCategory",type:"text",placeholder:"Введіть вікову категорію",value:y,onChange:d=>{G(d.target.value),d.target.value.trim()&&D(c=>({...c,ageCategory:!1}))},isError:U.ageCategory})]})]})]}),t.jsx(it,{children:t.jsx(je,{teamAthletes:p.athletes||[],teamId:e,onAthletesChange:_})})]}),t.jsx(xt,{children:t.jsxs("div",{style:{display:"flex",gap:"1rem",width:"100%",maxWidth:"500px"},children:[t.jsx(O,{type:"button",onClick:q,disabled:B||!C,style:{flex:1,backgroundColor:C?"#27913a":"#e0e0e0",color:C?"white":"#999"},children:B?"Збереження...":"Зберегти дані команди"}),t.jsx(O,{type:"button",onClick:J,disabled:v,style:{flex:1,backgroundColor:"#f44336"},children:v?"Видалення...":"Видалити"})]})})]})})]}):t.jsx(ee,{children:t.jsxs(te,{style:{textAlign:"center",padding:"2rem"},children:[t.jsx("h2",{children:"Команду не знайдено"}),t.jsx(O,{onClick:()=>h("/teams"),children:"Повернутися до списку команд"})]})})};export{wt as default};
