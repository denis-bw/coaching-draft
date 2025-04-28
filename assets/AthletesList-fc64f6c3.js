import{d as i,g as N,j as r,b as P,e as W,c as q,r as a,m as w,n as v,o as L,L as Q,q as M,t as V}from"./index-94146bb8.js";import{S as Y,a as J}from"./CreateIcon-124d262b.js";import{p as K}from"./PlaceholderProfile-3c1b0d36.js";const U=i(Y)`
  width: 24px;
  height: 24px;
  fill: ${e=>e.theme.iconColor};
`,X=i(J)`
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
`,Z=i.div`
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
`,_=i.div`
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
`,C=i.button`
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
`,ee=i.div`
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
`,te=i(N)`
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
`,re=i.div`
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
`,ie=i.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,oe=i.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,ne=i.span`
  font-size: 12px;
  color: ${({theme:e})=>e.textGray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
`,ae=i.div`
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
`,se=i.div`
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
`,de=i.div`
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
`,le=i.div`
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
`,ce=i.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  position: relative;
`,pe=i(N)`
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
`,xe=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,he=i.div`
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
`,ue=i.input`
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
`,ge=i.div`
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
`,fe=i.button`  
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
`,me=i.img`
border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,be=i(te)`
  background-color: ${({theme:e})=>`${e.lightGreen}80`};
  transition: background-color 0.3s ease-out;
  
  .hidden & {
    background-color: ${({theme:e})=>`${e.lightGreen}40`};
  }
`,we=i.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,ve=({athlete:e})=>r.jsx(Z,{className:"athlete-item",id:`athlete-${e.id}`,children:r.jsxs(be,{to:`/athletes/${e.id}`,children:[r.jsx(re,{children:r.jsx(me,{loading:"lazy",src:e.photo||K})}),r.jsxs(ie,{children:[r.jsx(oe,{children:e.name}),r.jsx(ne,{children:e.teamName||"-"})]}),r.jsx(ae,{children:r.jsx(U,{})})]})}),Ce=()=>{const{setTitle:e}=P(),o=W(),{entities:D,fullEntities:ke,list:u,loading:d,hasMore:p,currentPage:A,searchQuery:l,isSearchMode:G,searchPage:I,currentFilter:c,isAllDataLoaded:ye}=q(t=>t.athletes),[S,k]=a.useState(!1),[F,B]=a.useState(l),s=a.useRef(null),y=a.useRef(null),x=a.useRef(null),g=a.useRef(!1),$=a.useRef(null),T=a.useRef(!1),f=a.useRef(0);a.useEffect(()=>{e("Спортсмени")},[e]),a.useEffect(()=>{B(l)},[l]);const m=a.useCallback(()=>{if(!p||d||g.current)return;g.current=!0;const t=G?w({name:l,page:I,filter:c}):v(A);o(t).finally(()=>{g.current=!1})},[o,p,d,A,l,G,I,c]);a.useEffect(()=>{!T.current&&!d&&u.length===0&&(T.current=!0,l?(o(L(l)),o(w({name:l,page:1,filter:c}))):o(v(1)))},[o,l,c,u.length,d]),a.useEffect(()=>{if(!p||d||g.current)return;const n=setTimeout(()=>{if(!s.current)return;const h=s.current.scrollHeight>s.current.clientHeight;!h&&p&&!d&&f.current<10?(f.current++,m()):(h||!p||f.current>=10)&&(f.current=0)},200);return()=>clearTimeout(n)},[u,d,p,m]),a.useEffect(()=>{if(!s.current)return;const t={root:s.current,rootMargin:"0px",threshold:.5},n=h=>{h.forEach(R=>{const b=R.target;R.isIntersecting?(b.style.opacity="1",b.style.transform="scale(1)"):(b.style.opacity="0.6",b.style.transform="scale(0.9)")})};return x.current=new IntersectionObserver(n,t),()=>{x.current&&x.current.disconnect()}},[]),a.useEffect(()=>{x.current&&(x.current.disconnect(),setTimeout(()=>{document.querySelectorAll('[id^="athlete-"]').forEach(n=>{x.current.observe(n)})},0))},[u]);const j=a.useCallback(()=>{if(!(g.current||!p||d)&&s.current){const{scrollTop:t,scrollHeight:n,clientHeight:h}=s.current;t+h>=n-20&&p&&m()}},[p,d,m]);a.useEffect(()=>{const t=s.current;if(t)return t.addEventListener("scroll",j),()=>t.removeEventListener("scroll",j)},[j]),a.useEffect(()=>{const t=n=>{y.current&&!y.current.contains(n.target)&&k(!1)};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[]);const H=t=>{const n=t.target.value;B(n),$.current&&clearTimeout($.current),$.current=setTimeout(()=>{O(n)},500)},O=t=>{f.current=0,o(L(t)),s.current&&s.current.scrollTo({top:0,behavior:"smooth"}),t?o(w({name:t,page:1,filter:c})):(o(M()),o(v(1)))},z=t=>{o(V(t)),k(!1),s.current&&s.current.scrollTo({top:0,behavior:"smooth"}),l?o(w({name:l,page:1,filter:t})):(o(M()),o(v(1)))},E=u.map(t=>{const n=D[t];return n?{id:n.id,name:`${n.lastName} ${n.firstName} ${n.patronymic||""}`.trim(),photo:n.photo,teamName:n.teamName||"-"}:null}).filter(Boolean);return r.jsx(le,{children:r.jsxs(se,{children:[r.jsxs(ge,{children:[r.jsxs(xe,{children:[r.jsx("h2",{children:"Мої спортсмени"}),r.jsxs("div",{ref:y,style:{position:"relative"},children:[r.jsxs(fe,{onClick:()=>k(!S),children:[c==="all"&&"Усі",c==="withTeam"&&"З командами",c==="withoutTeam"&&"Без команди"]}),S&&r.jsxs(_,{children:[r.jsx(C,{active:c==="all",onClick:()=>z("all"),children:"Усі"}),r.jsx(C,{active:c==="withTeam",onClick:()=>z("withTeam"),children:"З командами"}),r.jsx(C,{active:c==="withoutTeam",onClick:()=>z("withoutTeam"),children:"Без команди"})]})]})]}),r.jsx(he,{children:r.jsx(ue,{type:"text",placeholder:"Пошук спортсменів...",value:F,onChange:H})})]}),r.jsxs(de,{ref:s,children:[E.length>0?E.map(t=>r.jsx(ve,{athlete:t},t.id)):d?null:r.jsx(ee,{children:"Спортсменів не знайдено"}),d&&r.jsx(we,{children:r.jsx(Q,{})})]}),r.jsx(ce,{children:r.jsxs(pe,{to:"/athletes/create",children:["Додати нового спортсмена",r.jsx(X,{})]})})]})})};export{Ce as default};
