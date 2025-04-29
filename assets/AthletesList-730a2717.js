import{d as o,g as D,j as r,b as W,e as Q,a as V,c as q,r as n,m as G,n as g,t as k,L as Y,v as J,w as K}from"./index-e6044883.js";import{S as U}from"./RoadSignPointingRight-5ee4b9dd.js";import{S as X}from"./CreateIcon-8796385d.js";import{p as Z}from"./PlaceholderProfile-3c1b0d36.js";const _=o(U)`
  width: 24px;
  height: 24px;
  fill: ${e=>e.theme.iconColor};
`,ee=o(X)`
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
`,te=o.div`
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
`,re=o.div`
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
`,S=o.button`
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${({active:e,theme:i})=>e?i.lightGreen:"transparent"};
  color: ${({active:e,theme:i})=>e?i.textBlack:i.textGray}; 
  font-weight: ${({active:e})=>e?"500":"400"};
  border: none;
  text-align: left;
  width: 100%;

  &:hover {
    background-color: ${({theme:e,active:i})=>i?e.lightGreen:e.disabledBG};
    color: ${({theme:e})=>e.textBlack}; 
  }

  &:focus {
    background-color: ${({theme:e,active:i})=>i?e.lightGreen:e.disabledBG};
    color: ${({theme:e})=>e.textBlack}; 
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`,ie=o.div`
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
`,oe=o(D)`
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
`,ne=o.div`
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
`,ae=o.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,se=o.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,de=o.span`
  font-size: 12px;
  color: ${({theme:e})=>e.textGray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
`,ce=o.div`
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
`,le=o.div`
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
`,pe=o.div`
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
`,xe=o.div`
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
`,he=o.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  position: relative;
`,ue=o(D)`
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
`,fe=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,ge=o.div`
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
`,me=o.input`
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
`,we=o.div`
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
`,be=o.button`  
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
`,ve=o.img`
border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,ke=o(oe)`
  background-color: ${({theme:e})=>`${e.lightGreen}80`};
  transition: background-color 0.3s ease-out;
  
  .hidden & {
    background-color: ${({theme:e})=>`${e.lightGreen}40`};
  }
`,ye=o.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,$e=({athlete:e})=>r.jsx(te,{className:"athlete-item",id:`athlete-${e.id}`,children:r.jsxs(ke,{to:`/athletes/${e.id}`,children:[r.jsx(ne,{children:r.jsx(ve,{loading:"lazy",src:e.photo||Z})}),r.jsxs(ae,{children:[r.jsx(se,{children:e.name}),r.jsx(de,{children:e.teamName||"-"})]}),r.jsx(ce,{children:r.jsx(_,{})})]})}),Ie=()=>{const{setTitle:e}=W(),i=Q(),m=V(),{entities:F,fullEntities:je,list:w,loading:c,hasMore:p,currentPage:I,searchQuery:l,isSearchMode:B,searchPage:E,currentFilter:s,isAllDataLoaded:ze}=q(t=>t.athletes),[T,y]=n.useState(!1),[H,R]=n.useState(l),d=n.useRef(null),$=n.useRef(null),x=n.useRef(null),f=n.useRef(!1),j=n.useRef(null),z=n.useRef(!1),h=n.useRef(0),L=n.useRef(m.pathname);n.useEffect(()=>{e("Спортсмени")},[e]),n.useEffect(()=>{R(l)},[l]),n.useEffect(()=>{L.current!==m.pathname&&(L.current=m.pathname,z.current=!1,i(G()),h.current=0,i(g({page:1,filter:s})))},[m.pathname,i,s]);const b=n.useCallback(()=>{if(!p||c||f.current)return;f.current=!0;const t=B?k({name:l,page:E,filter:s}):g({page:I,filter:s});i(t).finally(()=>{f.current=!1})},[i,p,c,I,l,B,E,s]);n.useEffect(()=>{z.current||(z.current=!0,i(l?k({name:l,page:1,filter:s}):g({page:1,filter:s})))},[i,l,s,w.length,c]),n.useEffect(()=>{if(!p||c||f.current)return;const a=setTimeout(()=>{if(!d.current)return;const u=d.current.scrollHeight>d.current.clientHeight;!u&&p&&!c&&h.current<10?(h.current++,b()):(u||!p||h.current>=10)&&(h.current=0)},200);return()=>clearTimeout(a)},[w,c,p,b]),n.useEffect(()=>{if(!d.current)return;const t={root:d.current,rootMargin:"0px",threshold:.5},a=u=>{u.forEach(N=>{const v=N.target;N.isIntersecting?(v.style.opacity="1",v.style.transform="scale(1)"):(v.style.opacity="0.6",v.style.transform="scale(0.9)")})};return x.current=new IntersectionObserver(a,t),()=>{x.current&&x.current.disconnect()}},[]),n.useEffect(()=>{x.current&&(x.current.disconnect(),setTimeout(()=>{document.querySelectorAll('[id^="athlete-"]').forEach(a=>{x.current.observe(a)})},0))},[w]);const C=n.useCallback(()=>{if(!(f.current||!p||c)&&d.current){const{scrollTop:t,scrollHeight:a,clientHeight:u}=d.current;t+u>=a-20&&p&&b()}},[p,c,b]);n.useEffect(()=>{const t=d.current;if(t)return t.addEventListener("scroll",C),()=>t.removeEventListener("scroll",C)},[C]),n.useEffect(()=>{const t=a=>{$.current&&!$.current.contains(a.target)&&y(!1)};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[]);const P=t=>{const a=t.target.value;R(a),j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{O(a)},500)},O=t=>{h.current=0,i(J(t)),d.current&&d.current.scrollTo({top:0,behavior:"smooth"}),t?i(k({name:t,page:1,filter:s})):(i(G()),i(g({page:1,filter:s})))},A=t=>{i(K(t)),y(!1),d.current&&d.current.scrollTo({top:0,behavior:"smooth"}),i(G()),i(l?k({name:l,page:1,filter:t}):g({page:1,filter:t}))},M=w.map(t=>{const a=F[t];return a?{id:a.id,name:`${a.lastName} ${a.firstName} ${a.patronymic||""}`.trim(),photo:a.photo,teamName:a.teamName||"-"}:null}).filter(Boolean);return r.jsx(xe,{children:r.jsxs(le,{children:[r.jsxs(we,{children:[r.jsxs(fe,{children:[r.jsx("h2",{children:"Мої спортсмени"}),r.jsxs("div",{ref:$,style:{position:"relative"},children:[r.jsxs(be,{onClick:()=>y(!T),children:[s==="all"&&"Усі",s==="withTeam"&&"З командами",s==="withoutTeam"&&"Без команди"]}),T&&r.jsxs(re,{children:[r.jsx(S,{active:s==="all",onClick:()=>A("all"),children:"Усі"}),r.jsx(S,{active:s==="withTeam",onClick:()=>A("withTeam"),children:"З командами"}),r.jsx(S,{active:s==="withoutTeam",onClick:()=>A("withoutTeam"),children:"Без команди"})]})]})]}),r.jsx(ge,{children:r.jsx(me,{type:"text",placeholder:"Пошук спортсменів...",value:H,onChange:P})})]}),r.jsxs(pe,{ref:d,children:[M.length>0?M.map(t=>r.jsx($e,{athlete:t},t.id)):c?null:r.jsx(ie,{children:"Спортсменів не знайдено"}),c&&r.jsx(ye,{children:r.jsx(Y,{})})]}),r.jsx(he,{children:r.jsxs(ue,{to:"/athletes/create",children:["Додати нового спортсмена",r.jsx(ee,{})]})})]})})};export{Ie as default};
