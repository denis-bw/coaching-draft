import{d as o,g as E,r as i,j as r,b as G,e as H,c as P,s as v,h as j,i as C,L as A,k as W,l as D}from"./index-5a4bf341.js";import{S as N}from"./RoadSignPointingRight-08e6f74c.js";import{S as F}from"./CreateIcon-b0769267.js";import{P as z}from"./PlaceholderTeam-7b26a08e.js";const O=o(N)`
  width: 24px;
  height: 24px;
  fill: ${e=>e.theme.iconColor};
`,Q=o(F)`
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
`,V=o.div`
  width: 100%;
  opacity: 0.6;
  transform: scale(0.9);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;

  @media (max-width: 768px) {
    opacity: 0.5;
    transform: scale(0.85);
  }
`,q=o.div`
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
`,Y=o(E)`
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
`,J=o.div`
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
`,K=o.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`,U=o.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,X=o.div`
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
`,Z=o.div`
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
`,_=o.div`
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
  scroll-behavior: smooth;
  
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
`,ee=o.div`
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
`,te=o.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  position: relative;
`,re=o(E)`
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
`,oe=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`,ie=o.div`
  position: relative;
  width: 35%;
  max-width: 400px;
  min-width: 150px;
  
  @media (max-width: 768px) {
    width: 45%;
    min-width: 120px;
  }
  
  @media (max-width: 480px) {
    width: 50%;
    min-width: 100px;
  }
`,ne=o.input`
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
`,ae=o.div`
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
  }
  
  @media (max-width: 768px) {
    padding: 10px 15px;
    margin: -15px -15px 15px -15px;
    
    h2 {
      font-size: 16px;
    }
  }
`,se=o.img`
  border: 2px solid  ${({theme:e})=>e.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,ce=o(Y)`
  background-color: ${({theme:e})=>`${e.lightGreen}80`};
  transition: background-color 0.3s ease-out;
  
  &:hover {
    background-color: ${({theme:e})=>e.greenMain};
  }
`,de=o.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`,le=({team:e})=>{const[n,d]=i.useState({loaded:!1,error:!1});i.useEffect(()=>{if(e.logo){const x=new Image;x.src=e.logo,x.onload=()=>{d({loaded:!0,error:!1})},x.onerror=()=>{d({loaded:!0,error:!0}),console.log(`Зображення для команди ${e.id} не знайдено.`)}}},[e]);const a=()=>e.logo?n.error?z:e.logo:z,s=()=>{d({loaded:!0,error:!0})};return r.jsx(V,{"data-team-item":!0,children:r.jsxs(ce,{to:`/teams/${e.id}`,children:[r.jsx(J,{children:r.jsx(se,{loading:"lazy",src:a(),alt:`Логотип команди ${e.name}`,onError:s})}),r.jsx(K,{children:r.jsx(U,{children:e.name})}),r.jsx(X,{children:r.jsx(O,{})})]})})},me=()=>{const{setTitle:e}=G(),n=H(),{teams:d,isLoading:a,hasMore:s,currentPage:x,searchQuery:p,isSearchMode:k,searchPage:$,allTeams:pe,isAllDataLoaded:R}=P(t=>t.teams),c=i.useRef(null),h=i.useRef(null),m=i.useRef(!1),w=i.useRef(null),T=i.useRef(!1),u=i.useRef(0),[L,S]=i.useState(p);i.useEffect(()=>{e("Команди")},[e]),i.useEffect(()=>{S(p)},[p]);const f=i.useCallback(()=>{if(!s||a||m.current)return;m.current=!0;const t=k?v({name:p,page:$}):j(x);n(t).finally(()=>{m.current=!1})},[n,s,a,x,p,k,$]);i.useEffect(()=>{!T.current&&!a&&d.length===0&&(T.current=!0,p?(n(C(p)),n(v({name:p,page:1}))):n(j(1)))},[n,p,d.length,a]),i.useEffect(()=>{if(!s||a||m.current)return;const l=setTimeout(()=>{if(!c.current)return;const g=c.current.scrollHeight>c.current.clientHeight;!g&&s&&!a&&u.current<10?(console.log("Немає скролу, довантажуємо ще дані...",u.current),u.current++,f()):(g||!s||u.current>=10)&&(u.current=0)},200);return()=>clearTimeout(l)},[d,a,s,f]),i.useEffect(()=>{if(!c.current)return;const t={root:c.current,rootMargin:"0px",threshold:.5},l=g=>{g.forEach(I=>{const b=I.target;I.isIntersecting?(b.style.opacity="1",b.style.transform="scale(1)"):(b.style.opacity="0.6",b.style.transform="scale(0.9)")})};return h.current=new IntersectionObserver(l,t),()=>{h.current&&h.current.disconnect()}},[]),i.useEffect(()=>{h.current&&(h.current.disconnect(),setTimeout(()=>{document.querySelectorAll("[data-team-item]").forEach(l=>{h.current.observe(l)})},0))},[d]);const y=i.useCallback(()=>{if(!(m.current||!s||a)&&c.current){const{scrollTop:t,scrollHeight:l,clientHeight:g}=c.current;t+g>=l-20&&s&&f()}},[s,a,f]);i.useEffect(()=>{const t=c.current;if(t)return t.addEventListener("scroll",y),()=>t.removeEventListener("scroll",y)},[y]);const M=t=>{const l=t.target.value;S(l),w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{B(l)},500)},B=t=>{u.current=0,t&&R?n(W(t)):(n(C(t)),c.current&&c.current.scrollTo({top:0,behavior:"smooth"}),t?n(v({name:t,page:1})):t||(n(D()),n(j(1))))};return r.jsx(ee,{children:r.jsxs(Z,{children:[r.jsx(ae,{children:r.jsxs(oe,{children:[r.jsx("h2",{children:"Мої команди"}),r.jsx(ie,{children:r.jsx(ne,{type:"text",placeholder:"Пошук команд...",value:L,onChange:M})})]})}),r.jsxs(_,{ref:c,children:[d.length>0?d.map(t=>r.jsx(le,{team:t,"data-team-item":!0},t.id)):a?null:r.jsx(q,{children:"Команд не знайдено"}),a&&r.jsx(de,{children:r.jsx(A,{})})]}),r.jsx(te,{children:r.jsxs(re,{to:"/teams/create",children:["Додати нову команду",r.jsx(Q,{})]})})]})})};export{me as default};
