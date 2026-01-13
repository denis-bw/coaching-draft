import{d as i,N as P,r as a,j as r,i as Q,u as V,b as q,M as Y,a as J,k as A,l as m,O as k,L as K,P as F,Q as U}from"./index-9bc50ca0.js";import{S as X}from"./RoadSignPointingRight-0d0f30bb.js";import{S as Z}from"./CreateIcon-38e61b22.js";import{p as _}from"./PlaceholderProfile-3c1b0d36.js";const ee=i(X)`
  width: 24px;
  height: 24px;
  fill: ${e=>e.theme.iconColor};
`,te=i(Z)`
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
`,re=i.div`
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
`,oe=i.div`
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
`,ie=i.div`
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
`,ne=i(P)`
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
`,ae=i.div`
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
`,se=i.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,ce=i.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,de=i.span`
  font-size: 12px;
  color: ${({theme:e})=>e.textGray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
`,le=i.div`
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
`,pe=i.div`
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
`,xe=i.div`
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
`,he=i.div`
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
`,ue=i.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  position: relative;
`,fe=i(P)`
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
`,ge=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,me=i.div`
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
`,be=i.input`
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
`,we=i.div`
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
`,ve=i.button`  
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
`,ke=i.img`
border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,ye=i(ne)`
  background-color: ${({theme:e})=>`${e.lightGreen}80`};
  transition: background-color 0.3s ease-out;
  
  .hidden & {
    background-color: ${({theme:e})=>`${e.lightGreen}40`};
  }
`,$e=i.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,je=({athlete:e})=>{const[o,x]=a.useState(!1),y=()=>{x(!0)};return r.jsx(re,{className:"athlete-item",id:`athlete-${e.id}`,children:r.jsxs(ye,{to:`/athletes/${e.id}`,children:[r.jsx(ae,{children:r.jsx(ke,{loading:"lazy",src:o?Q:e.photo||_,onError:y,alt:e.name})}),r.jsxs(se,{children:[r.jsx(ce,{children:e.name}),r.jsx(de,{children:e.teamName||"-"})]}),r.jsx(le,{children:r.jsx(ee,{})})]})})},Ie=()=>{const{setTitle:e}=V(),o=q(),x=Y(),{entities:y,fullEntities:ze,list:b,loading:d,hasMore:l,currentPage:I,searchQuery:p,isSearchMode:B,searchPage:T,currentFilter:s,isAllDataLoaded:Ce}=J(t=>t.athletes),[R,$]=a.useState(!1),[H,L]=a.useState(p),c=a.useRef(null),j=a.useRef(null),h=a.useRef(null),g=a.useRef(!1),z=a.useRef(null),C=a.useRef(!1),u=a.useRef(0),M=a.useRef(x.pathname);a.useEffect(()=>{e("Спортсмени")},[e]),a.useEffect(()=>{L(p)},[p]),a.useEffect(()=>{M.current!==x.pathname&&(M.current=x.pathname,C.current=!1,o(A()),u.current=0,o(m({page:1,filter:s})))},[x.pathname,o,s]);const w=a.useCallback(()=>{if(!l||d||g.current)return;g.current=!0;const t=B?k({name:p,page:T,filter:s}):m({page:I,filter:s});o(t).finally(()=>{g.current=!1})},[o,l,d,I,p,B,T,s]);a.useEffect(()=>{C.current||(C.current=!0,o(p?k({name:p,page:1,filter:s}):m({page:1,filter:s})))},[o,p,s,b.length,d]),a.useEffect(()=>{if(!l||d||g.current)return;const n=setTimeout(()=>{if(!c.current)return;const f=c.current.scrollHeight>c.current.clientHeight;!f&&l&&!d&&u.current<10?(u.current++,w()):(f||!l||u.current>=10)&&(u.current=0)},200);return()=>clearTimeout(n)},[b,d,l,w]),a.useEffect(()=>{if(!c.current)return;const t={root:c.current,rootMargin:"0px",threshold:.5},n=f=>{f.forEach(D=>{const v=D.target;D.isIntersecting?(v.style.opacity="1",v.style.transform="scale(1)"):(v.style.opacity="0.6",v.style.transform="scale(0.9)")})};return h.current=new IntersectionObserver(n,t),()=>{h.current&&h.current.disconnect()}},[]),a.useEffect(()=>{h.current&&(h.current.disconnect(),setTimeout(()=>{document.querySelectorAll('[id^="athlete-"]').forEach(n=>{h.current.observe(n)})},0))},[b]);const E=a.useCallback(()=>{if(!(g.current||!l||d)&&c.current){const{scrollTop:t,scrollHeight:n,clientHeight:f}=c.current;t+f>=n-20&&l&&w()}},[l,d,w]);a.useEffect(()=>{const t=c.current;if(t)return t.addEventListener("scroll",E),()=>t.removeEventListener("scroll",E)},[E]),a.useEffect(()=>{const t=n=>{j.current&&!j.current.contains(n.target)&&$(!1)};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[]);const O=t=>{const n=t.target.value;L(n),z.current&&clearTimeout(z.current),z.current=setTimeout(()=>{W(n)},500)},W=t=>{u.current=0,o(F(t)),c.current&&c.current.scrollTo({top:0,behavior:"smooth"}),t?o(k({name:t,page:1,filter:s})):(o(A()),o(m({page:1,filter:s})))},S=t=>{o(U(t)),$(!1),c.current&&c.current.scrollTo({top:0,behavior:"smooth"});const n=p;o(A()),n?(o(F(n)),o(k({name:n,page:1,filter:t}))):o(m({page:1,filter:t}))},N=b.map(t=>{const n=y[t];return n?{id:n.id,name:`${n.lastName} ${n.firstName} ${n.patronymic||""}`.trim(),photo:n.photo,teamName:n.teamName||"-"}:null}).filter(Boolean);return r.jsx(he,{children:r.jsxs(pe,{children:[r.jsxs(we,{children:[r.jsxs(ge,{children:[r.jsx("h2",{children:"Мої спортсмени"}),r.jsxs("div",{ref:j,style:{position:"relative"},children:[r.jsxs(ve,{onClick:()=>$(!R),children:[s==="all"&&"Усі",s==="withTeam"&&"З командами",s==="withoutTeam"&&"Без команди"]}),R&&r.jsxs(oe,{children:[r.jsx(G,{active:s==="all",onClick:()=>S("all"),children:"Усі"}),r.jsx(G,{active:s==="withTeam",onClick:()=>S("withTeam"),children:"З командами"}),r.jsx(G,{active:s==="withoutTeam",onClick:()=>S("withoutTeam"),children:"Без команди"})]})]})]}),r.jsx(me,{children:r.jsx(be,{type:"text",placeholder:"Пошук спортсменів...",value:H,onChange:O})})]}),r.jsxs(xe,{ref:c,children:[N.length>0?N.map(t=>r.jsx(je,{athlete:t},t.id)):d?null:r.jsx(ie,{children:"Спортсменів не знайдено"}),d&&r.jsx($e,{children:r.jsx(K,{})})]}),r.jsx(ue,{children:r.jsxs(fe,{to:"/athletes/create",children:["Додати нового спортсмена",r.jsx(te,{})]})})]})})};export{Ie as default};
