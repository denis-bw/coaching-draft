import{d as i,g as F,j as r,b as Q,e as V,a as q,c as Y,r as a,m as A,n as g,F as y,L as J,G as D,H as K}from"./index-110bea2d.js";import{S as U}from"./RoadSignPointingRight-2e83b2f4.js";import{S as X}from"./CreateIcon-034cecb2.js";import{p as Z}from"./PlaceholderProfile-3c1b0d36.js";const _=i(U)`
  width: 24px;
  height: 24px;
  fill: ${e=>e.theme.iconColor};
`,ee=i(X)`
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
`,te=i.div`
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
`,re=i.div`
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
`,S=i.button`
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
`,oe=i.div`
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
`,ie=i(F)`
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
`,ne=i.div`
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
`,ae=i.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,se=i.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,ce=i.span`
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
`,pe=i.div`
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
`,xe=i.div`
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
`,he=i.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  position: relative;
`,ue=i(F)`
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
`,fe=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,ge=i.div`
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
`,me=i.input`
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
`,be=i.div`
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
`,we=i.button`  
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
`,ve=i.img`
border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,ye=i(ie)`
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
`,$e=({athlete:e})=>r.jsx(te,{className:"athlete-item",id:`athlete-${e.id}`,children:r.jsxs(ye,{to:`/athletes/${e.id}`,children:[r.jsx(ne,{children:r.jsx(ve,{loading:"lazy",src:e.photo||Z})}),r.jsxs(ae,{children:[r.jsx(se,{children:e.name}),r.jsx(ce,{children:e.teamName||"-"})]}),r.jsx(de,{children:r.jsx(_,{})})]})}),Ie=()=>{const{setTitle:e}=Q(),o=V(),m=q(),{entities:H,fullEntities:je,list:b,loading:d,hasMore:l,currentPage:I,searchQuery:p,isSearchMode:B,searchPage:E,currentFilter:s,isAllDataLoaded:ze}=Y(t=>t.athletes),[T,k]=a.useState(!1),[P,R]=a.useState(p),c=a.useRef(null),$=a.useRef(null),x=a.useRef(null),f=a.useRef(!1),j=a.useRef(null),z=a.useRef(!1),h=a.useRef(0),L=a.useRef(m.pathname);a.useEffect(()=>{e("Спортсмени")},[e]),a.useEffect(()=>{R(p)},[p]),a.useEffect(()=>{L.current!==m.pathname&&(L.current=m.pathname,z.current=!1,o(A()),h.current=0,o(g({page:1,filter:s})))},[m.pathname,o,s]);const w=a.useCallback(()=>{if(!l||d||f.current)return;f.current=!0;const t=B?y({name:p,page:E,filter:s}):g({page:I,filter:s});o(t).finally(()=>{f.current=!1})},[o,l,d,I,p,B,E,s]);a.useEffect(()=>{z.current||(z.current=!0,o(p?y({name:p,page:1,filter:s}):g({page:1,filter:s})))},[o,p,s,b.length,d]),a.useEffect(()=>{if(!l||d||f.current)return;const n=setTimeout(()=>{if(!c.current)return;const u=c.current.scrollHeight>c.current.clientHeight;!u&&l&&!d&&h.current<10?(h.current++,w()):(u||!l||h.current>=10)&&(h.current=0)},200);return()=>clearTimeout(n)},[b,d,l,w]),a.useEffect(()=>{if(!c.current)return;const t={root:c.current,rootMargin:"0px",threshold:.5},n=u=>{u.forEach(N=>{const v=N.target;N.isIntersecting?(v.style.opacity="1",v.style.transform="scale(1)"):(v.style.opacity="0.6",v.style.transform="scale(0.9)")})};return x.current=new IntersectionObserver(n,t),()=>{x.current&&x.current.disconnect()}},[]),a.useEffect(()=>{x.current&&(x.current.disconnect(),setTimeout(()=>{document.querySelectorAll('[id^="athlete-"]').forEach(n=>{x.current.observe(n)})},0))},[b]);const C=a.useCallback(()=>{if(!(f.current||!l||d)&&c.current){const{scrollTop:t,scrollHeight:n,clientHeight:u}=c.current;t+u>=n-20&&l&&w()}},[l,d,w]);a.useEffect(()=>{const t=c.current;if(t)return t.addEventListener("scroll",C),()=>t.removeEventListener("scroll",C)},[C]),a.useEffect(()=>{const t=n=>{$.current&&!$.current.contains(n.target)&&k(!1)};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[]);const O=t=>{const n=t.target.value;R(n),j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{W(n)},500)},W=t=>{h.current=0,o(D(t)),c.current&&c.current.scrollTo({top:0,behavior:"smooth"}),t?o(y({name:t,page:1,filter:s})):(o(A()),o(g({page:1,filter:s})))},G=t=>{o(K(t)),k(!1),c.current&&c.current.scrollTo({top:0,behavior:"smooth"});const n=p;o(A()),n?(o(D(n)),o(y({name:n,page:1,filter:t}))):o(g({page:1,filter:t}))},M=b.map(t=>{const n=H[t];return n?{id:n.id,name:`${n.lastName} ${n.firstName} ${n.patronymic||""}`.trim(),photo:n.photo,teamName:n.teamName||"-"}:null}).filter(Boolean);return r.jsx(xe,{children:r.jsxs(le,{children:[r.jsxs(be,{children:[r.jsxs(fe,{children:[r.jsx("h2",{children:"Мої спортсмени"}),r.jsxs("div",{ref:$,style:{position:"relative"},children:[r.jsxs(we,{onClick:()=>k(!T),children:[s==="all"&&"Усі",s==="withTeam"&&"З командами",s==="withoutTeam"&&"Без команди"]}),T&&r.jsxs(re,{children:[r.jsx(S,{active:s==="all",onClick:()=>G("all"),children:"Усі"}),r.jsx(S,{active:s==="withTeam",onClick:()=>G("withTeam"),children:"З командами"}),r.jsx(S,{active:s==="withoutTeam",onClick:()=>G("withoutTeam"),children:"Без команди"})]})]})]}),r.jsx(ge,{children:r.jsx(me,{type:"text",placeholder:"Пошук спортсменів...",value:P,onChange:O})})]}),r.jsxs(pe,{ref:c,children:[M.length>0?M.map(t=>r.jsx($e,{athlete:t},t.id)):d?null:r.jsx(oe,{children:"Спортсменів не знайдено"}),d&&r.jsx(ke,{children:r.jsx(J,{})})]}),r.jsx(he,{children:r.jsxs(ue,{to:"/athletes/create",children:["Додати нового спортсмена",r.jsx(ee,{})]})})]})})};export{Ie as default};
