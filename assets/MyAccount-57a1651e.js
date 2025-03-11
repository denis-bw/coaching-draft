import{u as ie,a as re,r as u,N as oe,d as s,j as a,b as se,c as le,e as ue,L as ce,p as R,f as de,y as S}from"./index-926dd412.js";import{S as me,n as he,s as X,b as U,t as Z,a as F,c as ge,d as L,i as A,g as _,C as pe,e as fe,D as ve,f as q,h as xe,j as be,k as we}from"./CustomDatePicker.styled-24564259.js";function ye(e){const t=ie(),n=re(),{navigator:i}=u.useContext(oe),[r,p]=u.useState(!1),[m,w]=u.useState(null),[b,j]=u.useState(!1),o=u.useCallback(d=>{const P="/coaching-draft";let v=d;return v.startsWith(P)&&(v=v.substring(P.length)),v=v.replace(/\/+/g,"/"),v=v.replace(/\/$/,""),v},[]),h=u.useCallback((d,P)=>{const v=o(d),k=o(P);return v===k},[o]),y=u.useCallback(()=>{p(!1),w(null),j(!1)},[]),f=u.useCallback(()=>{if(m){j(!0),p(!1);let d;typeof m=="string"?d=o(m):d=o(m.pathname)+(m.search||""),setTimeout(()=>{t(d),w(null),j(!1)},0)}},[m,t,o]);return u.useEffect(()=>{if(!e)return;let d=()=>{};d=(()=>{const k=i.push,W=i.replace,I=i.go;return i.push=(l,...C)=>{if(b)return k.apply(i,[l,...C]);const D=typeof l=="string"?l:l.pathname;if(h(n.pathname,D))return k.apply(i,[l,...C]);const N=typeof l=="string"?{pathname:o(l)}:{...l,pathname:o(l.pathname)};w(N),p(!0)},i.replace=(l,...C)=>{if(b)return W.apply(i,[l,...C]);const D=typeof l=="string"?l:l.pathname;if(h(n.pathname,D))return W.apply(i,[l,...C]);const N=typeof l=="string"?{pathname:o(l)}:{...l,pathname:o(l.pathname)};w(N),p(!0)},i.go=l=>{if(b)return I.apply(i,[l]);w(n),p(!0)},()=>{i.push=k,i.replace=W,i.go=I}})();const v=k=>{if(e)return k.preventDefault(),k.returnValue="",""};return window.addEventListener("beforeunload",v),()=>{d(),window.removeEventListener("beforeunload",v)}},[e,i,n,b,o,h]),[r,f,y]}const ke=s.div`
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
`,Ge=s.div`
  background: ${({theme:e})=>e.ContainerBGColor};  // Використовуємо тему
  padding: 24px;
  border-radius: 8px;
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
`,je=s.div`
  margin-bottom: 16px;
`,Pe=s.h2`
  margin: 0;
  font-size: 20px;
  color: ${({theme:e})=>e.textBlack};  // Використовуємо тему
  margin-bottom: 8px;
`,Ce=s.p`
  margin: 0;
  color: ${({theme:e})=>e.textGray};  // Використовуємо тему
  font-size: 14px;
  line-height: 1.5;
`,$e=s.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
`,J=s.button`
  padding: 8px 16px;
  border-radius: 4px;
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
`,Ne=s(J)`
  background-color: ${({theme:e})=>e.gray};  
  color: ${({theme:e})=>e.white}; 

  &:hover {
    background-color: ${({theme:e})=>e.black};  
    color: ${({theme:e})=>e.white};
  }
`,Me=s(J)`
  background-color: ${({theme:e})=>e.red}; 
  color: ${({theme:e})=>e.white}; 

  &:hover {
    background-color: ${({theme:e})=>e.redDark};  
  }
`,We=({isOpen:e,onConfirm:t,onCancel:n})=>{if(u.useEffect(()=>{const p=m=>{m.key==="Escape"&&n()};return e&&(document.addEventListener("keydown",p),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",p),document.body.style.overflow="unset"}},[e,n]),!e)return null;const i=()=>{t()},r=p=>{p.stopPropagation(),n()};return a.jsx(ke,{onClick:r,children:a.jsxs(Ge,{onClick:p=>p.stopPropagation(),children:[a.jsxs(je,{children:[a.jsx(Pe,{children:"Незбережені зміни"}),a.jsx(Ce,{children:"У вас є незбережені зміни. Якщо ви залишите цю сторінку, всі зміни будуть втрачені."})]}),a.jsxs($e,{children:[a.jsx(Ne,{onClick:r,children:"Залишитись"}),a.jsx(Me,{onClick:i,children:"Залишити сторінку"})]})]})})},$={mobile:"320px",tablet:"768px",desktop:"1024px"},De=s.form`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  overflow-y: auto;

  @media (min-width: ${$.tablet}) {
    align-items: flex-start; 
    height: 100%;
  }
`,Se=s.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${$.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 32px;
  }
  @media (min-width: ${$.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 52px 82px 52px 82px;
  }
`;s.div`
  flex-grow: 1;
  overflow-y: auto; 
`;const Fe=s.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`,Le=s.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${$.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`,Ee=s.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.white};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.borderColor};
`,Ie=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ze=s.label`
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

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
  }

  @media (min-width: ${$.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,Q=s.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  padding: 0;

  @media (min-width: ${$.tablet}) {
    flex-direction: row;
    gap: 2rem;

    > * {
      flex: 1;
      margin-bottom: 0;
    }
  }
`,B=s.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0;
  
`,O=s.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`,V=s.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e,$isEmpty:t,name:n})=>t&&n==="username"?e.red:e.borderColor};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  transition: all 0.2s ease-in-out;

  &:focus {
      outline: none;
      border-color: ${({theme:e})=>e.lightGreen};
      box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.lightGreen.slice(1,3),16)}, ${parseInt(e.lightGreen.slice(3,5),16)}, ${parseInt(e.lightGreen.slice(5,7),16)}, 0.5)`};
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
      box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.red.slice(1,3),16)}, ${parseInt(e.red.slice(3,5),16)}, ${parseInt(e.red.slice(5,7),16)}, 0.5)`};
  }
  
  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    cursor: not-allowed;
  }

  &:focus {
    border-color: ${({theme:e})=>e.lightGreen};
  }
`,T=s.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`,Be=s.input`
  display: none;
`,Oe=s.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`,Te=s.button`
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
    box-shadow: 0 0 0 2px ${({theme:e})=>e.lightGreenAlpha};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.disabledBG};
    cursor: not-allowed;
  }
`,Ue=s(me)`
  fill:  ${e=>e.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${$.tablet}) {
   width: 18px;
   height: 18px;
  }
`;function K(e,t,n){const[i,r]=he(n==null?void 0:n.in,e,t);return+X(i,n)==+X(r,n)}function E(e,t){if(e.one!==void 0&&t===1)return e.one;const n=t%10,i=t%100;return n===1&&i!==11?e.singularNominative.replace("{{count}}",String(t)):n>=2&&n<=4&&(i<10||i>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}function x(e){return(t,n)=>n&&n.addSuffix?n.comparison&&n.comparison>0?e.future?E(e.future,t):"за "+E(e.regular,t):e.past?E(e.past,t):E(e.regular,t)+" тому":E(e.regular,t)}const Ve=(e,t)=>t&&t.addSuffix?t.comparison&&t.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини",He={lessThanXSeconds:x({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:x({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:Ve,lessThanXMinutes:x({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:x({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:x({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:x({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:x({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:x({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:x({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:x({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:x({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:x({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:x({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:x({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:x({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})},Ye=(e,t,n)=>(n=n||{},He[e](t,n)),Re={full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},Xe={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},Ae={full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},_e={date:U({formats:Re,defaultWidth:"full"}),time:U({formats:Xe,defaultWidth:"full"}),dateTime:U({formats:Ae,defaultWidth:"full"})},H=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function qe(e){const t=H[e];switch(e){case 0:case 3:case 5:case 6:return"'у минулу "+t+" о' p";case 1:case 2:case 4:return"'у минулий "+t+" о' p"}}function ee(e){return"'у "+H[e]+" о' p"}function Qe(e){const t=H[e];switch(e){case 0:case 3:case 5:case 6:return"'у наступну "+t+" о' p";case 1:case 2:case 4:return"'у наступний "+t+" о' p"}}const Ze=(e,t,n)=>{const i=Z(e),r=i.getDay();return K(i,t,n)?ee(r):qe(r)},Je=(e,t,n)=>{const i=Z(e),r=i.getDay();return K(i,t,n)?ee(r):Qe(r)},Ke={lastWeek:Ze,yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:Je,other:"P"},et=(e,t,n,i)=>{const r=Ke[e];return typeof r=="function"?r(t,n,i):r},tt={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},nt={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},at={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},it={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},rt={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},ot={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},st={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},lt=(e,t)=>{const n=String(t==null?void 0:t.unit),i=Number(e);let r;return n==="date"?i===3||i===23?r="-є":r="-е":n==="minute"||n==="second"||n==="hour"?r="-а":r="-й",i+r},ut={ordinalNumber:lt,era:F({values:tt,defaultWidth:"wide"}),quarter:F({values:nt,defaultWidth:"wide",argumentCallback:e=>e-1}),month:F({values:at,defaultWidth:"wide",formattingValues:it,defaultFormattingWidth:"wide"}),day:F({values:rt,defaultWidth:"wide"}),dayPeriod:F({values:ot,defaultWidth:"any",formattingValues:st,defaultFormattingWidth:"wide"})},ct=/^(\d+)(-?(е|й|є|а|я))?/i,dt=/\d+/i,mt={narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},ht={any:[/^д/i,/^н/i]},gt={narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},pt={any:[/1/i,/2/i,/3/i,/4/i]},ft={narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},vt={narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},xt={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},bt={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},wt={narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},yt={any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},kt={ordinalNumber:ge({matchPattern:ct,parsePattern:dt,valueCallback:e=>parseInt(e,10)}),era:L({matchPatterns:mt,defaultMatchWidth:"wide",parsePatterns:ht,defaultParseWidth:"any"}),quarter:L({matchPatterns:gt,defaultMatchWidth:"wide",parsePatterns:pt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:L({matchPatterns:ft,defaultMatchWidth:"wide",parsePatterns:vt,defaultParseWidth:"any"}),day:L({matchPatterns:xt,defaultMatchWidth:"wide",parsePatterns:bt,defaultParseWidth:"any"}),dayPeriod:L({matchPatterns:wt,defaultMatchWidth:"wide",parsePatterns:yt,defaultParseWidth:"any"})},Gt={code:"uk",formatDistance:Ye,formatLong:_e,formatRelative:et,localize:ut,match:kt,options:{weekStartsOn:1,firstWeekContainsDate:1}},jt=(e,t,n=1)=>{let i=[];for(let r=e;r<=t;r+=n)i.push(r);return i},Pt=({selectedDate:e,onDateChange:t})=>{const n=new Date,[i,r]=u.useState(()=>{try{if(e){const o=new Date(e);return A(o)&&!isNaN(o.getTime())&&o<=n?o:null}return null}catch{return console.error("Invalid date format:",e),null}}),p=jt(1900,_(n)),m=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],w=o=>{try{if(o&&A(o)&&!isNaN(o.getTime())){const h=o.toISOString();r(o),t(h)}else r(null),t(null)}catch(h){console.error("Error handling date change:",h),r(null),t(null)}},b=o=>{const h=be(i,parseInt(o));w(h)},j=o=>{const h=m.indexOf(o),y=we(i,h);w(y)};return a.jsx(pe,{children:a.jsx(fe,{selected:i,onChange:w,dateFormat:"dd.MM.yyyy",placeholderText:"Оберіть дату",locale:Gt,maxDate:n,renderCustomHeader:({date:o,changeYear:h,changeMonth:y})=>a.jsxs(ve,{children:[a.jsx(q,{value:_(o),onChange:f=>{const d=f.target.value;h(d),b(d)},children:p.map(f=>a.jsx("option",{value:f,children:f},f))}),a.jsx(q,{value:m[xe(o)],onChange:f=>{const d=f.target.value;y(m.indexOf(d)),j(d)},children:m.map((f,d)=>a.jsx("option",{value:f,children:f},d))})]})})})},Nt=()=>{const{setTitle:e}=se(),{user:t,isLoading:n}=le(c=>c.auth),i=ue(),[r,p]=u.useState(t.username||""),[m,w]=u.useState(t.location||""),[b,j]=u.useState(t.dateOfBirth||""),[o,h]=u.useState(!1),[y,f]=u.useState(t.avatar||null),[d,P]=u.useState(!0),[v,k]=u.useState(!1),[W,I,l]=ye(o),C=5*1024*1024,D=["image/jpeg","image/jpg","image/png","image/webp"];u.useEffect(()=>{if(t.avatar){const c=new Image;c.src=t.avatar,c.onload=()=>{f(t.avatar)},c.onerror=()=>{console.log("Зображення не знайдено."),f(null)}}},[t.avatar]);const N=c=>c?D.includes(c.type)?c.size>C?(S.error("Розмір файлу не повинен перевищувати 5MB",{position:"top-right",autoClose:3e3}),null):c:(S.error("Дозволені лише зображення (jpeg, jpg, png, webp)",{position:"top-right",autoClose:3e3}),null):null,te=c=>{const g=c.target.files[0];if(g){if(!N(g)){c.target.value="";return}const z=URL.createObjectURL(g);f(z),h(!0)}};u.useEffect(()=>{e("Мій акаунт")},[e]),u.useEffect(()=>{const c=r!==(t.username||"")||m!==(t.location||"")||b!==(t.dateOfBirth||"");h(c)},[r,m,b,t]),u.useEffect(()=>()=>{y&&y!==t.avatar&&URL.revokeObjectURL(y)},[y,t.avatar]);const Y=c=>{const{name:g,value:G}=c.target;g==="username"&&(p(G),P(G.length>=3)),g==="location"&&w(G),g==="birthdate"&&j(G)},ne=async c=>{c.preventDefault();const g=new FormData;r!==t.username&&g.append("username",r||""),m!==t.location&&g.append("location",m||""),b!==t.dateOfBirth&&g.append("dateOfBirth",b||null);const G=document.getElementById("photo-upload"),z=G.files[0];if(z){const M=N(z);if(!M)return;g.append("avatar",M)}if(g.has("username")||g.has("location")||g.has("dateOfBirth")||g.has("avatar"))try{const M=await i(de(g));if(!M.error)h(!1),S.success("Зміни успішно збережено!"),G&&(G.value="");else throw new Error(M.error)}catch{S.error("Помилка при збереженні даних",{position:"top-right",autoClose:3e3})}else S.info("Немає змін для збереження.",{position:"top-right",autoClose:3e3})},ae=c=>{c.target.src=R};return a.jsxs(a.Fragment,{children:[a.jsx(We,{isOpen:W,onConfirm:I,onCancel:l}),a.jsx(ce,{}),a.jsx(De,{onSubmit:ne,children:a.jsxs(Se,{children:[a.jsx(Fe,{children:a.jsxs(Le,{children:[a.jsx(Ee,{children:a.jsx(Ie,{src:y||R,alt:"Фото профілю",loading:"lazy",onError:ae})}),a.jsx(ze,{htmlFor:"photo-upload",children:a.jsx(Ue,{})}),a.jsx(Be,{id:"photo-upload",type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:te})]})}),a.jsxs(Q,{children:[a.jsx(B,{children:a.jsxs(T,{children:[a.jsx(O,{htmlFor:"username",children:"Ім'я користувача"}),a.jsx(V,{id:"username",name:"username",placeholder:"Введіть ім'я користувача",value:r,maxLength:25,minLength:3,onChange:Y,onFocus:()=>k(!0),onBlur:()=>k(!1),$isEmpty:!v&&r===""})]})}),a.jsx(B,{children:a.jsxs(T,{children:[a.jsx(O,{htmlFor:"email",children:"Електронна пошта"}),a.jsx(V,{id:"email",type:"email",value:t.email||"email",disabled:!0})]})})]}),a.jsxs(Q,{children:[a.jsx(B,{children:a.jsxs(T,{children:[a.jsx(O,{htmlFor:"birthdate",children:"Дата народження"}),a.jsx(Pt,{selectedDate:b,onDateChange:j})]})}),a.jsx(B,{children:a.jsxs(T,{children:[a.jsx(O,{htmlFor:"location",children:"Локація"}),a.jsx(V,{id:"location",name:"location",placeholder:"Введіть вашу локацію",value:m,maxLength:50,onChange:Y})]})})]}),a.jsx(Oe,{children:a.jsx(Te,{type:"submit",disabled:n||!d,children:n?"Збереження...":"Зберегти зміни"})})]})})]})};export{Nt as default};
