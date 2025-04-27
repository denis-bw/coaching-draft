import{d as i,g as D,j as r,b as W,e as q,c as Q,r as a,m as v,n as k,o as M,L as V,q as Y,t as N,v as J}from"./index-3f108b01.js";import{S as K,a as U}from"./CreateIcon-7287022d.js";import{p as X}from"./PlaceholderProfile-3c1b0d36.js";const Z=i(K)`
  width: 24px;
  height: 24px;
  fill: ${e=>e.theme.iconColor};
`,_=i(U)`
  width: 20px;
  height: 20px;
  fill: white;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 360px) {
    width: 16px; 
    height: 16px;
    right: 12px;
  }
`,ee=i.div`
  width: 100%;
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  
  &.visible {
    opacity: 1;
    transform: scale(1);
  }
  
  &.hidden {
    opacity: 0.6;
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    &.visible {
      opacity: 1;
      transform: scale(1);
    }
    
    &.hidden {
      opacity: 0.5;
      transform: scale(0.85);
    }
  }
`,te=i.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 5px;
  background-color: ${({theme:e})=>e.mainBGColor}; 
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  min-width: 120px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0.2, 0.2);
  z-index: 10;

  @media (max-width: 768px) {
    min-width: 100px;
    font-size: 11px;
  }
`,G=i.button`
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${({active:e,theme:o})=>e?o.lightGreen:"transparent"};
  color: ${({active:e,theme:o})=>e?o.textBlack:o.textGray}; 
  font-weight: ${({active:e})=>e?"500":"400"};
  border: none;
  text-align: left;
  width: 100%;

  &:hover {
    background-color: ${({theme:e,active:o})=>o?e.lightGreen:e.disabledBG};
    color: ${({theme:e})=>e.textBlack}; 
  }

  &:focus {
    background-color: ${({theme:e,active:o})=>o?e.lightGreen:e.disabledBG};
    color: ${({theme:e})=>e.textBlack}; 
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`,re=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: ${({theme:e})=>e.textGray};
  font-size: 14px;
  text-align: center;
  padding: 40px 20px;
  
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 30px 15px;
  }
`,ie=i(D)`
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) 14px;
  grid-gap: 12px;
  align-items: center;
  padding: 10px 15px;
  background-color: ${({theme:e})=>e.lightGreen};
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  color: ${({theme:e})=>e.textBlack};
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: ${({theme:e})=>e.greenMain};
  }

  &:focus {
    background-color: ${({theme:e})=>e.greenMain};
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    grid-template-columns: 28px minmax(0, 1fr) 12px; 
    grid-gap: 10px;
  }
`,oe=i.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`,ne=i.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,ae=i.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,se=i.span`
  font-size: 12px;
  color: ${({theme:e})=>e.textGray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
`,de=i.div`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.textGray};
  
  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`,le=i.div`
  width: calc(100% - 60px); 
  padding: 20px; 
  padding-bottom: 14px;
  background-color: ${({theme:e})=>e.ContainerBGColor}; 
  border-radius: 10px; 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
  display: flex; 
  flex-direction: column; 
  height: 100%;
  min-height: 240px;
  box-sizing: border-box;
  
  @media (max-width: 768px) { 
    width: calc(100% - 30px); 
    padding: 15px; 
    border-radius: 8px; 
  } 
`,ce=i.div`
  display: flex; 
  flex-direction: column; 
  gap: 8px; 
  flex: 1; 
  overflow-y: auto;
  overflow-x: hidden; 
  padding-right: 20px; 
  padding-left: 20px;
  position: relative; 
  padding-bottom: 20px; 
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) { 
    padding-left: 6px;
    padding-right: 10px;
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
`,pe=i.div`
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  flex: 1; 
  padding-top: 20px; 
  padding-bottom: 20px; 
  overflow: hidden; 
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`,xe=i.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  position: relative;
`,he=i(D)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 500px;
  padding: 12px 16px;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 16px;
  padding-right: 40px; 

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
  }

  &:focus {
    background-color: ${({theme:e})=>e.darkGreen};
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
    padding-right: 36px;
  }

  @media (max-width: 360px) {
    font-size: 13px;
    padding-right: 32px; 
  }
`,ue=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,fe=i.div`
  position: relative;
  width: 100%;
  
  @media (min-width: 850px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 35%; 
    max-width: 400px; 
    min-width: 70px; 
    z-index: 1; 
  }
  
  @media (max-width: 850px) {
    margin-top: 10px;
  }
`,ge=i.input`
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border: 2px solid ${({theme:e})=>e.ContainerBGColor};
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 14px;
  width: 100%;
  color: ${({theme:e})=>e.textBlack};
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({theme:e})=>e.textGray};
  }
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.textBlack};
  }
  
  &:hover {
    outline: none;
    border-color: ${({theme:e})=>e.textBlack};
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
  }
`,me=i.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  border-radius: 6px 6px 0 0;
  margin: -20px -20px 20px -20px;
  position: relative;

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    z-index: 2; 
  }
  
  @media (max-width: 768px) {
    padding: 10px 15px;
    margin: -15px -15px 15px -15px;
    
    h2 {
      font-size: 16px;
    }
  }
`,be=i.button`  
  background-color: ${({theme:e})=>e.greenMain};
  border: 1.7px solid ${({theme:e})=>e.white};
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.white};
  cursor: pointer;
  min-width: 120px;
  transition: all 0.3s ease;
  z-index: 2;
  outline: none;
  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
    border-color: ${({theme:e})=>e.greenMain};
  }

  &:focus {
    background-color: ${({theme:e})=>e.darkGreen};
    border-color: ${({theme:e})=>e.greenMain};
  }

  @media (max-width: 768px) {
    min-width: 100px;
    padding: 6px 10px;
    font-size: 11px;
  }
`,we=i.img`
border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,ve=i(ie)`
  background-color: ${({theme:e})=>`${e.lightGreen}80`};
  transition: background-color 0.3s ease-out;
  
  .hidden & {
    background-color: ${({theme:e})=>`${e.lightGreen}40`};
  }
`,ke=i.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,ye=({athlete:e})=>r.jsx(ee,{className:"athlete-item",id:`athlete-${e.id}`,children:r.jsxs(ve,{to:`/athletes/${e.id}`,children:[r.jsx(oe,{children:r.jsx(we,{loading:"lazy",src:e.photo||X})}),r.jsxs(ne,{children:[r.jsx(ae,{children:e.name}),r.jsx(se,{children:e.teamName||"-"})]}),r.jsx(de,{children:r.jsx(Z,{})})]})}),Ae=()=>{const{setTitle:e}=W(),o=q(),{entities:F,fullEntities:$e,list:u,loading:d,hasMore:p,currentPage:I,searchQuery:c,isSearchMode:m,searchPage:S,currentFilter:l,isAllDataLoaded:y}=Q(t=>t.athletes),[B,$]=a.useState(!1),[H,T]=a.useState(c),s=a.useRef(null),j=a.useRef(null),x=a.useRef(null),f=a.useRef(!1),z=a.useRef(null),E=a.useRef(!1),g=a.useRef(0);a.useEffect(()=>{e("Спортсмени")},[e]),a.useEffect(()=>{T(c)},[c]);const b=a.useCallback(()=>{if(!p||d||f.current)return;f.current=!0;const t=m?v({name:c,page:S,filter:l}):k(I);o(t).finally(()=>{f.current=!1})},[o,p,d,I,c,m,S,l]);a.useEffect(()=>{!E.current&&!d&&u.length===0&&(E.current=!0,c?(o(M(c)),o(v({name:c,page:1,filter:l}))):o(k(1)))},[o,c,l,u.length,d]),a.useEffect(()=>{if(!p||d||f.current)return;const n=setTimeout(()=>{if(!s.current)return;const h=s.current.scrollHeight>s.current.clientHeight;!h&&p&&!d&&g.current<10?(g.current++,b()):(h||!p||g.current>=10)&&(g.current=0)},200);return()=>clearTimeout(n)},[u,d,p,b]),a.useEffect(()=>{if(!s.current)return;const t={root:s.current,rootMargin:"0px",threshold:.5},n=h=>{h.forEach(L=>{const w=L.target;L.isIntersecting?(w.style.opacity="1",w.style.transform="scale(1)"):(w.style.opacity="0.6",w.style.transform="scale(0.9)")})};return x.current=new IntersectionObserver(n,t),()=>{x.current&&x.current.disconnect()}},[]),a.useEffect(()=>{x.current&&(x.current.disconnect(),setTimeout(()=>{document.querySelectorAll('[id^="athlete-"]').forEach(n=>{x.current.observe(n)})},0))},[u]);const C=a.useCallback(()=>{if(!(f.current||!p||d)&&s.current){const{scrollTop:t,scrollHeight:n,clientHeight:h}=s.current;t+h>=n-20&&p&&b()}},[p,d,b]);a.useEffect(()=>{const t=s.current;if(t)return t.addEventListener("scroll",C),()=>t.removeEventListener("scroll",C)},[C]),a.useEffect(()=>{const t=n=>{j.current&&!j.current.contains(n.target)&&$(!1)};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[]);const O=t=>{const n=t.target.value;T(n),z.current&&clearTimeout(z.current),z.current=setTimeout(()=>{P(n)},500)},P=t=>{g.current=0,t&&y?o(Y(t)):(o(M(t)),s.current&&s.current.scrollTo({top:0,behavior:"smooth"}),t?o(v({name:t,page:1,filter:l})):t||(o(N()),o(k(1))))},A=t=>{o(J(t)),$(!1),s.current&&s.current.scrollTo({top:0,behavior:"smooth"}),!y&&!m?(o(N()),o(k(1))):!y&&m&&o(v({name:c,page:1,filter:t}))},R=u.map(t=>{const n=F[t];return n?{id:n.id,name:`${n.lastName} ${n.firstName} ${n.patronymic||""}`.trim(),photo:n.photo,teamName:n.teamName||"-"}:null}).filter(Boolean);return r.jsx(pe,{children:r.jsxs(le,{children:[r.jsxs(me,{children:[r.jsxs(ue,{children:[r.jsx("h2",{children:"Мої спортсмени"}),r.jsxs("div",{ref:j,style:{position:"relative"},children:[r.jsxs(be,{onClick:()=>$(!B),children:[l==="all"&&"Усі",l==="withTeam"&&"З командами",l==="withoutTeam"&&"Без команди"]}),B&&r.jsxs(te,{children:[r.jsx(G,{active:l==="all",onClick:()=>A("all"),children:"Усі"}),r.jsx(G,{active:l==="withTeam",onClick:()=>A("withTeam"),children:"З командами"}),r.jsx(G,{active:l==="withoutTeam",onClick:()=>A("withoutTeam"),children:"Без команди"})]})]})]}),r.jsx(fe,{children:r.jsx(ge,{type:"text",placeholder:"Пошук спортсменів...",value:H,onChange:O})})]}),r.jsxs(ce,{ref:s,children:[R.length>0?R.map(t=>r.jsx(ye,{athlete:t},t.id)):d?null:r.jsx(re,{children:"Спортсменів не знайдено"}),d&&r.jsx(ke,{children:r.jsx(V,{})})]}),r.jsx(xe,{children:r.jsxs(he,{to:"/athletes/create",children:["Додати нового спортсмена",r.jsx(_,{})]})})]})})};export{Ae as default};
