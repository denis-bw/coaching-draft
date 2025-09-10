import{m as M,M as P,r as o,Z as N,d as l,j as u}from"./index-134eba29.js";function R(e){const h=M(),c=P(),{navigator:n}=o.useContext(N),[x,r]=o.useState(!1),[d,g]=o.useState(null),[v,b]=o.useState(!1),i=o.useCallback(s=>{const f="/coaching-draft";let a=s;return a.startsWith(f)&&(a=a.substring(f.length)),a=a.replace(/\/+/g,"/"),a=a.replace(/\/$/,""),a},[]),k=o.useCallback((s,f)=>{const a=i(s),p=i(f);return a===p},[i]),E=o.useCallback(()=>{r(!1),g(null),b(!1)},[]),j=o.useCallback(()=>{if(d){b(!0),r(!1);let s;typeof d=="string"?s=i(d):s=i(d.pathname)+(d.search||""),setTimeout(()=>{h(s),g(null),b(!1)},0)}},[d,h,i]);return o.useEffect(()=>{if(!e)return;let s=()=>{};s=(()=>{const p=n.push,y=n.replace,$=n.go;return n.push=(t,...m)=>{if(v)return p.apply(n,[t,...m]);const w=typeof t=="string"?t:t.pathname;if(k(c.pathname,w))return p.apply(n,[t,...m]);const C=typeof t=="string"?{pathname:i(t)}:{...t,pathname:i(t.pathname)};g(C),r(!0)},n.replace=(t,...m)=>{if(v)return y.apply(n,[t,...m]);const w=typeof t=="string"?t:t.pathname;if(k(c.pathname,w))return y.apply(n,[t,...m]);const C=typeof t=="string"?{pathname:i(t)}:{...t,pathname:i(t.pathname)};g(C),r(!0)},n.go=t=>{if(v)return $.apply(n,[t]);g(c),r(!0)},()=>{n.push=p,n.replace=y,n.go=$}})();const a=p=>{if(e)return p.preventDefault(),p.returnValue="",""};return window.addEventListener("beforeunload",a),()=>{s(),window.removeEventListener("beforeunload",a)}},[e,n,c,v,i,k]),[x,j,E]}const S=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,L=l.div`
  background: ${({theme:e})=>e.ContainerBGColor};  // Використовуємо тему
  padding: 24px;
  border-radius: 14px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
`,B=l.div`
  margin-bottom: 16px;
`,D=l.h2`
  margin: 0;
  font-size: 20px;
  color: ${({theme:e})=>e.textBlack};  // Використовуємо тему
  margin-bottom: 8px;
`,H=l.p`
  margin: 0;
  color: ${({theme:e})=>e.textGray};  // Використовуємо тему
  font-size: 14px;
  line-height: 1.5;
`,I=l.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
`,z=l.button`
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  background-color: ${({theme:e})=>e.greenMain};  // Використовуємо тему
  color: ${({theme:e})=>e.white};  // Використовуємо тему

  &:hover {
    background-color: ${({theme:e})=>e.BgActiveLinkHover};  // Використовуємо тему
  }

  &:active {
    transform: translateY(0);
  }
`,T=l(z)`
  
  width: 100%;
  background-color: ${({theme:e})=>e.gray};
  color: ${({theme:e})=>e.white};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({theme:e})=>e.black};
  }

  &:focus {
    outline: 2px solid ${({theme:e})=>e.gray};
    outline-offset: 2px;
     background-color: ${({theme:e})=>e.black};
  }
`,G=l(z)`
  background-color: ${({theme:e})=>e.red}; 
  color: ${({theme:e})=>e.white}; 
  width: 100%;
  &:hover {
    background-color: ${({theme:e})=>e.redDark};  
  }

    &:focus {
    outline: 2px solid ${({theme:e})=>e.gray};
    outline-offset: 2px;
     background-color: ${({theme:e})=>e.redDark};
  }
`,A=({isOpen:e,onConfirm:h,onCancel:c})=>{if(o.useEffect(()=>{const r=d=>{d.key==="Escape"&&c()};return e&&(document.addEventListener("keydown",r),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",r),document.body.style.overflow="unset"}},[e,c]),!e)return null;const n=()=>{h()},x=r=>{r.stopPropagation(),c()};return u.jsx(S,{onClick:x,children:u.jsxs(L,{onClick:r=>r.stopPropagation(),children:[u.jsxs(B,{children:[u.jsx(D,{children:"Незбережені зміни"}),u.jsx(H,{children:"У вас є незбережені зміни. Якщо ви залишите цю сторінку, всі зміни будуть втрачені."})]}),u.jsxs(I,{children:[u.jsx(G,{onClick:n,children:"Залишити сторінку"}),u.jsx(T,{onClick:x,children:"Продовжити редагування"})]})]})})},F=e=>o.createElement("svg",{fill:"#000000",height:"800px",width:"800px",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 487 487",xmlSpace:"preserve",...e},o.createElement("g",null,o.createElement("g",null,o.createElement("path",{d:"M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z  M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9 v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z  M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z  M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z"}))));export{A as N,F as S,R as u};
