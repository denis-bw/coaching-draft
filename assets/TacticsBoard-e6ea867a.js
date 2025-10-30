import{r as $,d as b,b as dt,a as kt,_ as Qe,$ as tn,a0 as Lt,j as n,a1 as te,a2 as jt,a3 as ee,a4 as St,a5 as ct,a6 as en,a7 as $t,W as ne,S as nn,a8 as rn,a9 as on,aa as an,ab as sn,ac as ln,ad as cn,ae as dn,af as hn,ag as pn,ah as gn,ai as un,aj as xn,ak as fn,al as mn,am as Cn,an as yn,ao as wn,ap as Mn,u as bn,aq as vn,ar as Ln}from"./index-89a1ad42.js";import{S as $n}from"./ChevronDownicon-73aea26d.js";import{S as kn}from"./DeleteIcon-ebe2a402.js";const nt=(t,e)=>{if(t.type==="player"){const o=t.radius||20,h=(t.rotation||0)*Math.PI/180;let c=t.x-o,a=t.x+o,r=t.y-o,y=t.y+o;if(t.topText){const v=t.textSize||Math.max(10,o*.5),m=v,l=t.topText.length*v*.6,g=-(o+m);[{x:-l/2,y:g-m*.2},{x:l/2,y:g-m*.2},{x:-l/2,y:g},{x:l/2,y:g}].forEach(x=>{const u=x.x*Math.cos(h)-x.y*Math.sin(h),i=x.x*Math.sin(h)+x.y*Math.cos(h);c=Math.min(c,t.x+u),a=Math.max(a,t.x+u),r=Math.min(r,t.y+i),y=Math.max(y,t.y+i)})}if(t.cards&&t.cards.length>0){const v=o*.35,m=v*1.4,l=2,g=Math.PI/4,s=Math.cos(g)*o*.7,x=Math.sin(g)*o*.7,u=t.cards.length-1,i=s-u*(v+l);[{x:i-v,y:x},{x:s,y:x},{x:i-v,y:x+m},{x:s,y:x+m}].forEach(C=>{const L=C.x*Math.cos(h)-C.y*Math.sin(h),k=C.x*Math.sin(h)+C.y*Math.cos(h);c=Math.min(c,t.x+L),a=Math.max(a,t.x+L),r=Math.min(r,t.y+k),y=Math.max(y,t.y+k)})}return{x:t.x-o,y:t.y-o,width:o*2,height:o*2,centerX:t.x,centerY:t.y}}if(t.type==="ball"){const o=t.radius||10;return{x:t.x-o,y:t.y-o,width:o*2,height:o*2,centerX:t.x,centerY:t.y}}if(t.type==="shape"){if(t.shape==="line"||t.shape==="arrow"){const a=Math.min(t.startX,t.endX),r=Math.max(t.startX,t.endX),y=Math.min(t.startY,t.endY),v=Math.max(t.startY,t.endY);return{x:a,y,width:r-a,height:v-y,startX:t.startX,startY:t.startY,endX:t.endX,endY:t.endY,rotation:t.rotation||0}}const o=t.width||50,p=t.height||30,h=o<0?t.x+o:t.x,c=p<0?t.y+p:t.y;if(t.shape==="circle"){const a=Math.max(Math.abs(o),Math.abs(p)),r=t.x+o/2,y=t.y+p/2;return{x:r-a/2,y:y-a/2,width:a,height:a,centerX:r,centerY:y,radius:a/2,originalX:t.x,originalY:t.y,originalWidth:o,originalHeight:p,rotation:t.rotation||0}}return{x:h,y:c,width:Math.abs(o),height:Math.abs(p),originalX:t.x,originalY:t.y,originalWidth:o,originalHeight:p,rotation:t.rotation||0}}if(t.type==="figure"){const o=t.size||30;return{x:t.x-o/2,y:t.y-o/2,width:o,height:o,centerX:t.x,centerY:t.y}}if(t.type==="path"){if(!t.points||t.points.length===0)return null;let o=t.points[0].x,p=t.points[0].y,h=t.points[0].x,c=t.points[0].y;return t.points.forEach(a=>{o=Math.min(o,a.x),p=Math.min(p,a.y),h=Math.max(h,a.x),c=Math.max(c,a.y)}),{x:o,y:p,width:h-o,height:c-p,points:t.points,centerX:(o+h)/2,centerY:(p+c)/2}}if(t.type==="text"){if(e){const h=e.getContext("2d"),c=t.fontWeight||"normal",a=t.fontStyle||"normal",r=t.fontSize||16,y=t.fontFamily||"Arial";h.font=`${a} ${c} ${r}px ${y}`;const v=(t.text||"").split(`
`),m=(t.lineHeight||1.5)*r,l=t.letterSpacing||0;let g=0;v.forEach(x=>{let i=h.measureText(x).width;l!==0&&(i+=l*(x.length-1)),i>g&&(g=i)});const s=v.length*m;return{x:t.x,y:t.y,width:g,height:s,centerX:t.x+g/2,centerY:t.y+s/2}}const o=t.width||100,p=t.height||20;return{x:t.x,y:t.y,width:o,height:p,centerX:t.x+o/2,centerY:t.y+p/2}}return null},re=(t,e,o,p=10,h)=>{const c=nt(o,h);if(!c)return!1;if(o.type==="path"){const a=Math.max(p,10);for(let r=0;r<o.points.length-1;r++){const y=o.points[r],v=o.points[r+1],m=v.x-y.x,l=v.y-y.y,g=Math.sqrt(m*m+l*l);if(g===0)continue;const s=Math.max(0,Math.min(1,((t-y.x)*m+(e-y.y)*l)/(g*g))),x=y.x+s*m,u=y.y+s*l;if(Math.sqrt(Math.pow(t-x,2)+Math.pow(e-u,2))<=a)return!0}return!1}if(o.type==="shape"&&(o.shape==="line"||o.shape==="arrow")){const r=c.endX-c.startX,y=c.endY-c.startY,v=Math.sqrt(r*r+y*y);if(v===0)return!1;const m=Math.max(0,Math.min(1,((t-c.startX)*r+(e-c.startY)*y)/(v*v))),l=c.startX+m*r,g=c.startY+m*y;return Math.sqrt(Math.pow(t-l,2)+Math.pow(e-g,2))<=10}if(o.type==="shape"&&o.shape==="circle"){const a=c.centerX||c.x+c.width/2,r=c.centerY||c.y+c.height/2,y=c.radius||Math.max(c.width,c.height)/2;return Math.sqrt(Math.pow(t-a,2)+Math.pow(e-r,2))<=y}if(o.type==="shape"&&o.shape==="triangle"){const a=c.originalX+c.originalWidth/2,r=c.originalY,y=c.originalX,v=c.originalY+c.originalHeight,m=c.originalX+c.originalWidth,l=c.originalY+c.originalHeight,g=(v-l)*(a-m)+(m-y)*(r-l),s=((v-l)*(t-m)+(m-y)*(e-l))/g,x=((l-r)*(t-m)+(a-m)*(e-l))/g,u=1-s-x;return s>=0&&s<=1&&x>=0&&x<=1&&u>=0&&u<=1}if(o.type==="shape"&&o.shape==="rectangle"){const a=c.originalX!==void 0?c.originalX:c.x,r=c.originalY!==void 0?c.originalY:c.y,y=c.originalWidth!==void 0?c.originalWidth:c.width,v=c.originalHeight!==void 0?c.originalHeight:c.height,m=y<0?a+y:a,l=y<0?a:a+y,g=v<0?r+v:r,s=v<0?r:r+v;return t>=m&&t<=l&&e>=g&&e<=s}return o.type==="text",t>=c.x&&t<=c.x+c.width&&e>=c.y&&e<=c.y+c.height},oe=(t,e,o)=>o?t>=o.x&&t<=o.x+o.width&&e>=o.y&&e<=o.y+o.height:!1,Ge=(t,e)=>e&&e.type==="shape"&&(e.shape==="line"||e.shape==="arrow")?{start:{x:t.startX,y:t.startY,cursor:"crosshair"},end:{x:t.endX,y:t.endY,cursor:"crosshair"}}:e&&e.type==="path"?{}:e&&e.type==="text"?{topLeft:{x:t.x,y:t.y,cursor:"nwse-resize"},topRight:{x:t.x+t.width,y:t.y,cursor:"nesw-resize"},bottomLeft:{x:t.x,y:t.y+t.height,cursor:"nesw-resize"},bottomRight:{x:t.x+t.width,y:t.y+t.height,cursor:"nwse-resize"},top:{x:t.x+t.width/2,y:t.y,cursor:"ns-resize"},bottom:{x:t.x+t.width/2,y:t.y+t.height,cursor:"ns-resize"},left:{x:t.x,y:t.y+t.height/2,cursor:"ew-resize"},right:{x:t.x+t.width,y:t.y+t.height/2,cursor:"ew-resize"}}:e&&(e.type==="player"||e.type==="ball"||e.type==="figure")?{top:{x:t.centerX||t.x+t.width/2,y:t.y,cursor:"ns-resize"},bottom:{x:t.centerX||t.x+t.width/2,y:t.y+t.height,cursor:"ns-resize"},left:{x:t.x,y:t.centerY||t.y+t.height/2,cursor:"ew-resize"},right:{x:t.x+t.width,y:t.centerY||t.y+t.height/2,cursor:"ew-resize"}}:{topLeft:{x:t.x,y:t.y,cursor:"nwse-resize"},topRight:{x:t.x+t.width,y:t.y,cursor:"nesw-resize"},bottomLeft:{x:t.x,y:t.y+t.height,cursor:"nesw-resize"},bottomRight:{x:t.x+t.width,y:t.y+t.height,cursor:"nwse-resize"},top:{x:t.x+t.width/2,y:t.y,cursor:"ns-resize"},bottom:{x:t.x+t.width/2,y:t.y+t.height,cursor:"ns-resize"},left:{x:t.x,y:t.y+t.height/2,cursor:"ew-resize"},right:{x:t.x+t.width,y:t.y+t.height/2,cursor:"ew-resize"}},ie=(t,e,o,p)=>{const h=Ge(o,p),c=8;for(const[a,r]of Object.entries(h))if(p&&p.type==="shape"&&(p.shape==="line"||p.shape==="arrow")){if(Math.sqrt(Math.pow(t-r.x,2)+Math.pow(e-r.y,2))<=c*2)return{name:a,...r}}else if(Math.abs(t-r.x)<=c&&Math.abs(e-r.y)<=c)return{name:a,...r};return null},Ee=(t,e,o,p,h,c)=>{for(let a=o.length-1;a>=0;a--)if(re(t,e,o[a],h,c))return o[a];for(let a=p.length-1;a>=0;a--){const r={...p[a],type:"path",id:`path_${a}`};if(re(t,e,r,h,c))return r}return null},Sn=(t,e,o,p,h,c,a,r,y)=>{t.save(),t.strokeStyle=r,t.lineWidth=y,t.lineCap="butt",t.lineJoin="miter",t.setLineDash([]),t.beginPath(),t.moveTo(e,o),t.lineTo(p,h),t.lineTo(c,a),t.stroke(),t.restore()},Bn=(t,e,o,p,h,c,a,r,y=0,v=0)=>{const m=p-e,l=h-o,g=Math.sqrt(m*m+l*l);if(g===0)return;const s=m/g,x=l/g,u=y,i=v,w=g-u-i;if(w<=0)return;const C=e+s*u,L=o+x*u;if(t.strokeStyle=r,t.lineWidth=a,t.lineCap="butt",c==="dashed"){const k=Math.max(a*3,12),z=Math.max(a*2,8),I=k+z,B=Math.floor(w/I);if(B===0){const P=(w-k)/2;if(P>=0){const R=C+s*P,H=L+x*P,A=C+s*(P+k),F=L+x*(P+k);t.beginPath(),t.moveTo(R,H),t.lineTo(A,F),t.stroke()}return}const f=(w-B*k)/B,d=k+f,M=B*d-f,T=(w-M)/2;t.setLineDash([k,f]),t.lineDashOffset=-T,t.beginPath(),t.moveTo(C,L),t.lineTo(p-s*i,h-x*i),t.stroke(),t.setLineDash([]),t.lineDashOffset=0}else if(c==="dotted"){const k=Math.max(a*2.5,10),z=a/2,I=Math.max(2,Math.floor(w/k)+1),B=w/(I-1);t.fillStyle=r;for(let G=0;G<I;G++){const f=G*B,d=C+s*f,M=L+x*f;t.beginPath(),t.arc(d,M,z,0,Math.PI*2),t.fill()}}},ae=(t,e,o,p,h)=>{if(e.length<2)return;let c=0;const a=[],r=e.length;for(let g=0;g<r;g++){const s=e[g],x=e[(g+1)%r],u=x.x-s.x,i=x.y-s.y,w=Math.sqrt(u*u+i*i);a.push(w),c+=w}if(c<20){t.strokeStyle=h,t.lineWidth=p,t.lineCap="butt",t.lineJoin="miter",t.setLineDash([]),t.beginPath(),t.moveTo(e[0].x,e[0].y);for(let g=1;g<e.length;g++)t.lineTo(e[g].x,e[g].y);t.closePath(),t.stroke();return}const y=Math.max(p*2.5,Math.min(p*4,c/25)),v=Math.max(p*1.5,y*.5),m=y+v,l=y*.7;if(o==="dotted"){const g=p/2,s=Math.max(p*2,c/60);t.fillStyle=h;for(let x=0;x<r;x++){const u=e[x];t.beginPath(),t.arc(u.x,u.y,g,0,Math.PI*2),t.fill()}for(let x=0;x<r;x++){const u=e[x],i=a[x];if(i<=0)continue;const w=e[(x+1)%r].x-u.x,C=e[(x+1)%r].y-u.y,L=w/i,k=C/i,z=1,I=Math.floor(i/s)+1,B=Math.max(z,I-1),G=i/B;for(let f=1;f<B;f++){const d=f*G,M=u.x+L*d,S=u.y+k*d;t.beginPath(),t.arc(M,S,g,0,Math.PI*2),t.fill()}}}else if(o==="dashed"){t.strokeStyle=h,t.lineWidth=p,t.lineCap="butt";for(let g=0;g<r;g++){const s=e[g],x=e[g===0?r-1:g-1],u=e[(g+1)%r],i=a[g===0?r-1:g-1],w=a[g];if(i>0&&w>0){const C=x.x-s.x,L=x.y-s.y,k=u.x-s.x,z=u.y-s.y,I=Math.min(i,w)/3,B=Math.min(l,I),G=s.x+C/i*B,f=s.y+L/i*B,d=s.x+k/w*B,M=s.y+z/w*B;Sn(t,G,f,s.x,s.y,d,M,h,p)}}for(let g=0;g<r;g++){const s=e[g],x=e[(g+1)%r],u=a[g];if(u===0)continue;const i=x.x-s.x,w=x.y-s.y,C=i/u,L=w/u,k=a[g===0?r-1:g-1],z=u,I=a[(g+1)%r],B=Math.min(k,z)/3,G=Math.min(l,B),f=Math.min(z,I)/3,d=Math.min(l,f),M=u-G-d;if(M<=y/2)continue;const S=s.x+C*G,T=s.y+L*G,P=Math.floor(M/m);if(P===0){const X=M/2-y/2;if(X>=0){const j=S+C*X,N=T+L*X,O=S+C*(X+y),U=T+L*(X+y);t.beginPath(),t.moveTo(j,N),t.lineTo(O,U),t.stroke()}continue}const H=(M-P*y)/P,A=y+H,F=P*A-H,_=(M-F)/2;t.setLineDash([y,H]),t.lineDashOffset=-_,t.beginPath(),t.moveTo(S,T),t.lineTo(x.x-C*d,x.y-L*d),t.stroke(),t.setLineDash([]),t.lineDashOffset=0}}},se=(t,e,o,p,h,c,a,r,y)=>{if(h==="butt")return 0;const v=a.replace("#",""),m=parseInt(v.slice(0,2),16),l=parseInt(v.slice(2,4),16),g=parseInt(v.slice(4,6),16);t.fillStyle=`rgba(${m}, ${l}, ${g}, ${r})`,t.strokeStyle=`rgba(${m}, ${l}, ${g}, ${r})`,t.save(),t.translate(e,o),t.rotate(p);let s=0;return h==="round"?(t.lineWidth=y,t.lineCap="round",t.beginPath(),t.moveTo(-y/2,0),t.lineTo(0,0),t.stroke(),s=0):h==="arrow"?(t.beginPath(),t.moveTo(0,0),t.lineTo(-c,-c*.5),t.lineTo(-c,c*.5),t.closePath(),t.fill(),s=c):h==="circle"?(t.beginPath(),t.arc(0,0,c*.4,0,Math.PI*2),t.fill(),s=c*.4):h==="bar"&&(t.lineWidth=y,t.lineCap="butt",t.beginPath(),t.moveTo(0,-c*.5),t.lineTo(0,c*.5),t.stroke(),s=0),t.restore(),s},le=(t,e,o=!1)=>{if(t.save(),e.rotation){const w=e.x,C=e.y;t.translate(w,C),t.rotate(e.rotation*Math.PI/180),t.translate(-w,-C)}const p=e.fontWeight||"normal",h=e.fontStyle||"normal",c=e.fontSize||16,a=e.fontFamily||"Arial";t.font=`${h} ${p} ${c}px ${a}`,t.textAlign="left",t.textBaseline="top";const r=e.opacity!==void 0?e.opacity/100:1,v=(e.color||"#000000").replace("#",""),m=parseInt(v.slice(0,2),16),l=parseInt(v.slice(2,4),16),g=parseInt(v.slice(4,6),16);t.fillStyle=`rgba(${m}, ${l}, ${g}, ${r})`;const s=(e.text||"").split(`
`),x=(e.lineHeight||1.5)*c,u=e.letterSpacing||0;let i=0;if(s.forEach((w,C)=>{const L=e.y+C*x;if(u!==0){let k=e.x;for(let I=0;I<w.length;I++){const B=w[I];t.fillText(B,k,L);const G=t.measureText(B).width;k+=G+u}const z=t.measureText(w).width+u*(w.length-1);z>i&&(i=z)}else{t.fillText(w,e.x,L);const k=t.measureText(w).width;k>i&&(i=k)}if(e.textDecoration==="underline"){const k=u!==0?t.measureText(w).width+u*(w.length-1):t.measureText(w).width;t.beginPath(),t.moveTo(e.x,L+c),t.lineTo(e.x+k,L+c),t.strokeStyle=t.fillStyle,t.lineWidth=Math.max(1,c/16),t.stroke()}}),o){const w=s.length*x;t.fillStyle="rgba(255, 215, 0, 0.2)",t.fillRect(e.x-2,e.y-2,i+4,w+4),t.strokeStyle="#FFD700",t.lineWidth=2,t.setLineDash([5,5]),t.strokeRect(e.x-2,e.y-2,i+4,w+4),t.setLineDash([])}return t.restore(),e},ce=(t,e,o=!1)=>{if(!(e.points.length<2)){t.strokeStyle=e.color,t.lineWidth=e.brushSize,t.lineCap="round",t.lineJoin="round",o&&(t.shadowColor="#FFD700",t.shadowBlur=10),t.beginPath(),t.moveTo(e.points[0].x,e.points[0].y);for(let p=1;p<e.points.length;p++)t.lineTo(e.points[p].x,e.points[p].y);t.stroke(),t.shadowBlur=0}},de=(t,e,o)=>{t.save();const p=e.x,h=e.y,c=e.radius||20,a=e.rotation||0;t.translate(p,h),t.rotate(a*Math.PI/180);const r=e.borderWidth||2,y=(e.borderOpacity!==void 0?e.borderOpacity:100)/100,v=e.borderColor||"#000000",m=e.borderStyle||"solid",l=v.replace("#",""),g=parseInt(l.slice(0,2),16),s=parseInt(l.slice(2,4),16),x=parseInt(l.slice(4,6),16),u=(e.colorOpacity!==void 0?e.colorOpacity:100)/100,w=(e.color||"#ff0000").replace("#",""),C=parseInt(w.slice(0,2),16),L=parseInt(w.slice(2,4),16),k=parseInt(w.slice(4,6),16);if(t.beginPath(),t.arc(0,0,c,0,Math.PI*2),t.fillStyle=`rgba(${C}, ${L}, ${k}, ${u})`,t.fill(),t.strokeStyle=`rgba(${g}, ${s}, ${x}, ${y})`,t.lineWidth=r,o)t.setLineDash([]),t.strokeStyle="#FFD700",t.lineWidth=3,t.beginPath(),t.arc(0,0,c,0,Math.PI*2),t.stroke();else if(m==="dashed"){const T=2*Math.PI*c,P=Math.max(r*2.5,Math.min(r*4,T/25)),R=Math.max(r*1.5,P*.5),H=P+R,A=Math.floor(T/H);if(A<3||T<30)t.setLineDash([]),t.beginPath(),t.arc(0,0,c,0,Math.PI*2),t.stroke();else{const _=(T-A*P)/A,X=(P+_)/c,j=P/c,N=P+_,O=A*N-_,Q=(T-O)/2/c;t.lineCap="butt";for(let J=0;J<A;J++){const q=Q+J*X,tt=q+j;t.beginPath(),t.arc(0,0,c,q,tt),t.stroke()}}}else if(m==="dotted"){const T=2*Math.PI*c,P=r/2,R=Math.max(r*2,T/60),H=Math.max(8,Math.round(T/R)),A=2*Math.PI/H;t.fillStyle=`rgba(${g}, ${s}, ${x}, ${y})`;for(let F=0;F<H;F++){const W=F*A,_=c*Math.cos(W),X=c*Math.sin(W);t.beginPath(),t.arc(_,X,P,0,Math.PI*2),t.fill()}}else t.setLineDash([]),t.beginPath(),t.arc(0,0,c,0,Math.PI*2),t.stroke();t.setLineDash([]);const z=e.number!==void 0?e.number:1,I=(e.numberOpacity!==void 0?e.numberOpacity:100)/100,G=(e.numberColor||"#ffffff").replace("#",""),f=parseInt(G.slice(0,2),16),d=parseInt(G.slice(2,4),16),M=parseInt(G.slice(4,6),16),S=Math.max(12,c*.8);if(t.fillStyle=`rgba(${f}, ${d}, ${M}, ${I})`,t.font=`bold ${S}px Arial`,t.textAlign="center",t.textBaseline="middle",t.fillText(z.toString(),0,0),e.topText){const T=(e.textOpacity!==void 0?e.textOpacity:100)/100,R=(e.textColor||"#000000").replace("#",""),H=parseInt(R.slice(0,2),16),A=parseInt(R.slice(2,4),16),F=parseInt(R.slice(4,6),16),W=e.textSize||Math.max(10,c*.5),X=-(c+5);t.fillStyle=`rgba(${H}, ${A}, ${F}, ${T})`,t.font=`${W}px Arial`,t.textAlign="center",t.textBaseline="bottom",t.fillText(e.topText,0,X)}if(e.cards&&e.cards.length>0){const T=c*.35,P=T*1.4,R=4,H=Math.PI/4,A=Math.cos(H)*c*.7,F=Math.sin(H)*c*.7;e.cards.forEach((W,_)=>{const X=W.color||(W==="yellow"?"#FFD700":"#FF0000"),j=W.cardBorderColor||"#000000",N=A-_*(T+R);t.fillStyle=X,t.fillRect(N-T,F,T,P),t.strokeStyle=j,t.lineWidth=1.5,t.setLineDash([]),t.strokeRect(N-T,F,T,P)})}t.restore()},he=(t,e,o=!1)=>{const p=e.radius||10;t.fillStyle="white",t.strokeStyle="black",t.lineWidth=2,t.beginPath(),t.arc(e.x,e.y,p,0,Math.PI*2),t.fill(),t.stroke(),t.beginPath(),t.arc(e.x-p/3,e.y-p/3,p/3,0,Math.PI*2),t.fillStyle="black",t.fill(),o&&(t.strokeStyle="#FFD700",t.lineWidth=3,t.beginPath(),t.arc(e.x,e.y,p+2,0,Math.PI*2),t.stroke())},pe=(t,e,o=!1,p="#000")=>{if(t.save(),e.rotation)if(e.shape==="line"||e.shape==="arrow"){const s=(e.startX+e.endX)/2,x=(e.startY+e.endY)/2;t.translate(s,x),t.rotate(e.rotation*Math.PI/180),t.translate(-s,-x)}else{const s=e.x+(e.width||50)/2,x=e.y+(e.height||30)/2;t.translate(s,x),t.rotate(e.rotation*Math.PI/180),t.translate(-s,-x)}const h=e.borderColor||e.color||p,c=e.borderOpacity!==void 0?e.borderOpacity/100:1,a=e.borderWidth||2,r=e.borderStyle||"solid",y=h.replace("#",""),v=parseInt(y.slice(0,2),16),m=parseInt(y.slice(2,4),16),l=parseInt(y.slice(4,6),16),g=`rgba(${v}, ${m}, ${l}, ${c})`;if(t.strokeStyle=g,t.lineWidth=a,t.lineCap="butt",t.lineJoin="miter",t.setLineDash([]),o&&(t.strokeStyle="#FFD700",t.lineWidth=a+2),e.shape==="line"||e.shape==="arrow"){const s=e.endX-e.startX,x=e.endY-e.startY,u=Math.atan2(x,s),i=e.lineCapStart||"butt",w=e.lineCapEnd||(e.shape==="arrow"?"arrow":"butt"),C=Math.max(a*2.5,10);let L=0;i==="arrow"?L=C:i==="circle"?L=C*.4:(i==="round"||i==="bar")&&(L=0);let k=0;w==="arrow"?k=C:w==="circle"?k=C*.4:(w==="round"||w==="bar")&&(k=0);const z=e.startX+Math.cos(u)*L,I=e.startY+Math.sin(u)*L,B=e.endX-Math.cos(u)*k,G=e.endY-Math.sin(u)*k;!o&&(r==="dashed"||r==="dotted")?Bn(t,e.startX,e.startY,e.endX,e.endY,r,a,g,L,k):(t.lineCap="butt",t.beginPath(),t.moveTo(z,I),t.lineTo(B,G),t.stroke()),o||(i!=="butt"&&se(t,e.startX,e.startY,u+Math.PI,i,C,h,c,a),w!=="butt"&&se(t,e.endX,e.endY,u,w,C,h,c,a))}else{const s=e.x,x=e.y,u=e.width||50,i=e.height||30,w=10,C=Math.abs(u)<w?u<0?-w:w:u,L=Math.abs(i)<w?i<0?-w:w:i,k=e.fillColor||"#ffffff",z=e.fillOpacity!==void 0?e.fillOpacity/100:0;if(z>0){const I=k.replace("#",""),B=parseInt(I.slice(0,2),16),G=parseInt(I.slice(2,4),16),f=parseInt(I.slice(4,6),16);if(t.fillStyle=`rgba(${B}, ${G}, ${f}, ${z})`,t.beginPath(),e.shape==="rectangle")t.rect(s,x,C,L);else if(e.shape==="circle"){const d=Math.max(Math.abs(C),Math.abs(L))/2,M=s+C/2,S=x+L/2;t.arc(M,S,d,0,Math.PI*2)}else e.shape==="triangle"&&(t.moveTo(s+C/2,x),t.lineTo(s,x+L),t.lineTo(s+C,x+L),t.closePath());t.fill()}if(!o&&(r==="dashed"||r==="dotted")){if(e.shape==="rectangle"){const I=[{x:s,y:x},{x:s+C,y:x},{x:s+C,y:x+L},{x:s,y:x+L}];ae(t,I,r,a,g)}else if(e.shape==="triangle"){const I=[{x:s+C/2,y:x},{x:s,y:x+L},{x:s+C,y:x+L}];ae(t,I,r,a,g)}else if(e.shape==="circle"){const I=Math.max(Math.abs(C),Math.abs(L))/2,B=s+C/2,G=x+L/2,f=2*Math.PI*I,d=Math.max(a*2.5,Math.min(a*4,f/25)),M=Math.max(a*1.5,d*.5),S=d+M;if(f<30)t.strokeStyle=g,t.lineWidth=a,t.beginPath(),t.arc(B,G,I,0,Math.PI*2),t.stroke();else if(r==="dashed"){const T=Math.floor(f/S);if(T===0)t.strokeStyle=g,t.lineWidth=a,t.beginPath(),t.arc(B,G,I,0,Math.PI*2),t.stroke();else{const R=(f-T*d)/T,H=(d+R)/I,A=d/I,F=d+R,W=T*F-R,j=(f-W)/2/I;t.strokeStyle=g,t.lineWidth=a,t.lineCap="butt";for(let N=0;N<T;N++){const O=j+N*H,U=O+A;t.beginPath(),t.arc(B,G,I,O,U),t.stroke()}}}else if(r==="dotted"){const T=a/2,P=Math.max(a*2,f/60),R=Math.max(8,Math.round(f/P)),H=2*Math.PI/R;t.fillStyle=g;for(let A=0;A<R;A++){const F=A*H,W=B+I*Math.cos(F),_=G+I*Math.sin(F);t.beginPath(),t.arc(W,_,T,0,Math.PI*2),t.fill()}}}}else{if(t.beginPath(),e.shape==="rectangle"){const I=e.x,B=e.y,G=e.width||50,f=e.height||30,d=10,M=Math.abs(G)<d?G<0?-d:d:G,S=Math.abs(f)<d?f<0?-d:d:f;t.rect(I,B,M,S)}else if(e.shape==="circle"){const I=e.x,B=e.y,G=e.width||50,f=e.height||30,d=G,M=f,S=Math.max(Math.abs(d),Math.abs(M))/2,T=I+d/2,P=B+M/2;t.arc(T,P,S,0,Math.PI*2)}else if(e.shape==="triangle"){const I=e.x,B=e.y,G=e.width||50,f=e.height||30,d=G,M=f;t.moveTo(I+d/2,B),t.lineTo(I,B+M),t.lineTo(I+d,B+M),t.closePath()}t.stroke()}}t.restore()},ge=(t,e,o=!1)=>{const p=e.size||30;t.font=`${p}px Arial`,t.textAlign="center",t.textBaseline="middle",t.fillText(e.icon,e.x,e.y),o&&(t.strokeStyle="#FFD700",t.lineWidth=3,t.strokeRect(e.x-p/2,e.y-p/2,p,p))},ue=(t,e)=>{t.strokeStyle="#FFD700",t.lineWidth=2,t.setLineDash([5,5]),t.strokeRect(e.x,e.y,e.width,e.height),t.setLineDash([])},Tn=(t,e,o)=>{const p=Ge(e,o),h=8;t.fillStyle="white",t.strokeStyle="#FFD700",t.lineWidth=2,Object.entries(p).forEach(([c,a])=>{t.fillRect(a.x-h/2,a.y-h/2,h,h),t.strokeRect(a.x-h/2,a.y-h/2,h,h)})},In=(t,e,o,p,h,c,a,r,y)=>{t.save(),t.strokeStyle=r,t.lineWidth=y,t.lineCap="butt",t.lineJoin="miter",t.setLineDash([]),t.beginPath(),t.moveTo(e,o),t.lineTo(p,h),t.lineTo(c,a),t.stroke(),t.restore()},xe=(t,e,o,p,h)=>{if(e.length<2)return;let c=0;const a=[];for(let l=0;l<e.length;l++){const g=e[l],s=e[(l+1)%e.length],x=s.x-g.x,u=s.y-g.y,i=Math.sqrt(x*x+u*u);a.push(i),c+=i}const r=Math.max(p*2.5,Math.min(p*4,c/25)),y=Math.max(p*1.5,r*.5),v=r+y,m=r*.7;if(o==="dotted"){const l=p/2,g=Math.max(p*2,c/60),s=Math.max(e.length*3,Math.round(c/g));t.fillStyle=h;const x=c/s;for(let u=0;u<s;u++){const i=u*x;let w=0;for(let C=0;C<e.length;C++){const L=e[C],k=e[(C+1)%e.length],z=a[C];if(w+z>=i){const B=(i-w)/z,G=L.x+(k.x-L.x)*B,f=L.y+(k.y-L.y)*B;t.beginPath(),t.arc(G,f,l,0,Math.PI*2),t.fill();break}w+=z}}}else if(o==="dashed"){t.strokeStyle=h,t.lineWidth=p,t.lineCap="butt";for(let l=0;l<e.length;l++){const g=e[l],s=e[l===0?e.length-1:l-1],x=e[(l+1)%e.length],u=a[l===0?e.length-1:l-1],i=a[l];if(u>0&&i>0){const w=s.x-g.x,C=s.y-g.y,L=x.x-g.x,k=x.y-g.y,z=Math.min(u,i)/3,I=Math.min(m,z),B=g.x+w/u*I,G=g.y+C/u*I,f=g.x+L/i*I,d=g.y+k/i*I;In(t,B,G,g.x,g.y,f,d,h,p)}}for(let l=0;l<e.length;l++){const g=e[l],s=e[(l+1)%e.length],x=a[l];if(x===0)continue;const u=s.x-g.x,i=s.y-g.y,w=u/x,C=i/x,L=a[l===0?e.length-1:l-1],k=x,z=a[(l+1)%e.length],I=Math.min(L,k)/3,B=Math.min(m,I),G=Math.min(k,z)/3,f=Math.min(m,G),d=x-B-f;if(d<=r/2)continue;const M=g.x+w*B,S=g.y+C*B,T=Math.floor(d/v);if(T===0){const _=d/2-r/2;if(_>=0){const X=M+w*_,j=S+C*_,N=M+w*(_+r),O=S+C*(_+r);t.beginPath(),t.moveTo(X,j),t.lineTo(N,O),t.stroke()}continue}const R=(d-T*r)/T,H=r+R,A=T*H-R,W=(d-A)/2;t.setLineDash([r,R]),t.lineDashOffset=-W,t.beginPath(),t.moveTo(M,S),t.lineTo(s.x-w*f,s.y-C*f),t.stroke(),t.setLineDash([]),t.lineDashOffset=0}}},zn=t=>{const e=$.useRef(null),o=$.useRef(null),p=$.useCallback(r=>{if(!r)return;const y=r.getContext("2d");y.clearRect(0,0,r.width,r.height),y.fillStyle="white",y.fillRect(0,0,r.width,r.height)},[]),h=$.useCallback((r,y,v,m,l,g)=>{const s=t.current;if(!s)return;p(s);const x=s.getContext("2d");let u=null,i=-1;if(v&&v.startsWith("path_")){i=parseInt(v.replace("path_",""));const L=r[i];L&&(u=o.current&&o.current.id===v?o.current:L)}r.forEach((L,k)=>{if(L.points.length<2||k===i)return;const z=o.current&&o.current.id===`path_${k}`?o.current:L;ce(x,z,!1)});const w=e.current?y.map(L=>L.id===e.current.id?e.current:L):y;let C=null;if(v&&!v.startsWith("path_")&&(C=w.find(L=>L.id===v)),w.forEach(L=>{if(L.id!==v){switch(x.save(),L.type){case"player":de(x,L,!1);break;case"ball":he(x,L,!1);break;case"shape":pe(x,L,!1,l);break;case"figure":ge(x,L,!1);break;case"text":le(x,L,!1);break}x.restore()}}),u){ce(x,u,!0);const L={...u,type:"path",id:v},k=nt(L,s);k&&ue(x,k)}if(C){switch(x.save(),C.type){case"player":de(x,C,!0);break;case"ball":he(x,C,!0);break;case"shape":pe(x,C,!0,l);break;case"figure":ge(x,C,!0);break;case"text":le(x,C,!0);break}if(x.restore(),m==="cursor"){const L=nt(C,s);L&&(ue(x,L),Tn(x,L,C))}}},[t,p]),c=$.useCallback((r,y,v)=>{if(r.length<2)return;const m=t.current;if(!m)return;const l=m.getContext("2d"),g=r;l.strokeStyle=y,l.lineWidth=v,l.lineCap="round",l.lineJoin="round",l.setLineDash([]),l.beginPath(),l.moveTo(g[g.length-2].x,g[g.length-2].y),l.lineTo(g[g.length-1].x,g[g.length-1].y),l.stroke()},[t]),a=$.useCallback((r,y,v,m,l,g=2,s="#ffffff",x=0)=>{const u=t.current;if(!u)return;const i=u.getContext("2d"),w=y.x,C=y.y,L=m.replace("#",""),k=parseInt(L.slice(0,2),16),z=parseInt(L.slice(2,4),16),I=parseInt(L.slice(4,6),16),B=`rgba(${k}, ${z}, ${I}, 1)`;i.strokeStyle=B,i.lineWidth=g,i.lineCap="butt",i.lineJoin="miter",i.setLineDash([]);const G=(f,d,M,S)=>{const T=M-f,P=S-d,R=Math.sqrt(T*T+P*P);if(R===0)return;const H=T/R,A=P/R,W=Math.max(g*2.5,Math.min(g*4,R/25)),_=Math.max(g*1.5,W*.5),X=W+_;if(l==="dashed"){const j=Math.floor(R/X);if(j===0){const q=(R-W)/2;if(q>=0){const tt=f+H*q,Rt=d+A*q,ut=f+H*(q+W),Dt=d+A*(q+W);i.beginPath(),i.moveTo(tt,Rt),i.lineTo(ut,Dt),i.stroke()}return}const O=(R-j*W)/numSegments,U=W+O,ot=j*U-O,J=(R-ot)/2;i.setLineDash([W,O]),i.lineDashOffset=-J,i.beginPath(),i.moveTo(f,d),i.lineTo(M,S),i.stroke(),i.setLineDash([]),i.lineDashOffset=0}else if(l==="dotted"){const j=Math.max(g*2,R/30),N=g/2,O=Math.max(2,Math.floor(R/j)+1),U=R/(O-1);i.fillStyle=B;for(let ot=0;ot<O;ot++){const Q=ot*U,J=f+H*Q,q=d+A*Q;i.beginPath(),i.arc(J,q,N,0,Math.PI*2),i.fill()}}};if(r==="line"||r==="arrow"){if(l==="dashed"||l==="dotted"?G(w,C,v.x,v.y):(i.beginPath(),i.moveTo(w,C),i.lineTo(v.x,v.y),i.stroke()),r==="arrow"){const f=v.x-w,d=v.y-C,M=Math.atan2(d,f),S=Math.max(g*2.5,10);i.fillStyle=B,i.beginPath(),i.moveTo(v.x,v.y),i.lineTo(v.x-S*Math.cos(M-Math.PI/6),v.y-S*Math.sin(M-Math.PI/6)),i.lineTo(v.x-S*Math.cos(M+Math.PI/6),v.y-S*Math.sin(M+Math.PI/6)),i.closePath(),i.fill()}i.fillStyle="#FFD700",i.beginPath(),i.arc(w,C,4,0,Math.PI*2),i.fill()}else{const f=v.x-w,d=v.y-C;if(x>0){const M=s.replace("#",""),S=parseInt(M.slice(0,2),16),T=parseInt(M.slice(2,4),16),P=parseInt(M.slice(4,6),16),R=x/100;if(i.fillStyle=`rgba(${S}, ${T}, ${P}, ${R})`,i.beginPath(),r==="rectangle")i.rect(w,C,f,d);else if(r==="circle"){const H=Math.max(Math.abs(f),Math.abs(d))/2,A=w+f/2,F=C+d/2;i.arc(A,F,H,0,Math.PI*2)}else r==="triangle"&&(i.moveTo(w+f/2,C),i.lineTo(w,C+d),i.lineTo(w+f,C+d),i.closePath());i.fill()}if(l==="dashed"||l==="dotted"){if(r==="rectangle"){const M=[{x:w,y:C},{x:w+f,y:C},{x:w+f,y:C+d},{x:w,y:C+d}];xe(i,M,l,g,B)}else if(r==="triangle"){const M=[{x:w+f/2,y:C},{x:w,y:C+d},{x:w+f,y:C+d}];xe(i,M,l,g,B)}else if(r==="circle"){const M=Math.max(Math.abs(f),Math.abs(d))/2,S=w+f/2,T=C+d/2,P=2*Math.PI*M,R=Math.max(g*2.5,Math.min(g*4,P/25)),H=Math.max(g*1.5,R*.5),A=R+H;if(l==="dashed"){const F=Math.floor(P/A);if(F===0)i.strokeStyle=B,i.lineWidth=g,i.beginPath(),i.arc(S,T,M,0,Math.PI*2),i.stroke();else{const _=(P-F*R)/F,X=(R+_)/M,j=R/M,N=R+_,O=F*N-_,Q=(P-O)/2/M;for(let J=0;J<F;J++){const q=Q+J*X,tt=q+j;i.beginPath(),i.arc(S,T,M,q,tt),i.stroke()}}}else{const F=g/2,W=Math.max(g*2,P/40),_=Math.max(8,Math.round(P/W)),X=2*Math.PI/_;i.fillStyle=B;for(let j=0;j<_;j++){const N=j*X,O=S+M*Math.cos(N),U=T+M*Math.sin(N);i.beginPath(),i.arc(O,U,F,0,Math.PI*2),i.fill()}}}}else{if(i.beginPath(),r==="rectangle")i.rect(w,C,f,d);else if(r==="circle"){const M=Math.max(Math.abs(f),Math.abs(d))/2,S=w+f/2,T=C+d/2;i.arc(S,T,M,0,Math.PI*2)}else r==="triangle"&&(i.moveTo(w+f/2,C),i.lineTo(w,C+d),i.lineTo(w+f,C+d),i.closePath());i.stroke()}}i.setLineDash([])},[t]);return{redraw:h,clearCanvas:p,drawLivePath:c,drawPreviewShape:a,tempObjectDataRef:e,tempPathDataRef:o}},Gn=()=>{const t=$.useRef(null),e=$.useRef({x:0,y:0}),[o,p]=$.useState("default");return{draggedObjectRef:t,dragOffsetRef:e,cursorStyle:o,setCursorStyle:p,startDrag:(m,l,g)=>{if(t.current={...m},m.type==="path"){const s=nt(m,g);e.current={x:l.x-s.points[0].x,y:l.y-s.points[0].y}}else if(m.type==="shape"&&(m.shape==="line"||m.shape==="arrow")){const s=(m.startX+m.endX)/2,x=(m.startY+m.endY)/2;e.current={x:l.x-s,y:l.y-x}}else if(m.x!==void 0&&m.y!==void 0)e.current={x:l.x-m.x,y:l.y-m.y};else{const s=nt(m,g);s.centerX!==void 0?e.current={x:l.x-s.centerX,y:l.y-s.centerY}:e.current={x:l.x-s.x,y:l.y-s.y}}},updateDragPosition:m=>{if(!t.current)return null;let l={...t.current};if(l.type==="path"){const g=m.x-e.current.x-l.points[0].x,s=m.y-e.current.y-l.points[0].y;l.points=l.points.map(x=>({x:x.x+g,y:x.y+s}))}else if(l.type==="shape"&&(l.shape==="line"||l.shape==="arrow")){const g=(l.startX+l.endX)/2,s=(l.startY+l.endY)/2,x=m.x-e.current.x,u=m.y-e.current.y,i=x-g,w=u-s;l.startX+=i,l.startY+=w,l.endX+=i,l.endY+=w}else l.x!==void 0&&l.y!==void 0&&(l.x=m.x-e.current.x,l.y=m.y-e.current.y);return t.current=l,l},endDrag:()=>{const m=t.current;return t.current=null,e.current={x:0,y:0},m},updateCursor:(m,l,g,s,x,u)=>{if(s){const w=s?s.startsWith("path_")?{...g[parseInt(s.replace("path_",""))],type:"path",id:s}:l.find(C=>C.id===s):null;if(w){const C=nt(w,u);if(C){const L=ie(m.x,m.y,C,w);if(L){p(L.cursor);return}if(oe(m.x,m.y,C)){p("move");return}}}}const i=Ee(m.x,m.y,l,g,x,u);p(i?"pointer":"default")},checkForHandle:(m,l,g)=>{const s=nt(l,g);return s?ie(m.x,m.y,s,l):null},checkIfPointInSelectedBounds:(m,l,g)=>{if(!l)return!1;const s=nt(l,g);return s&&oe(m.x,m.y,s)}}},Bt=8,En=()=>{const t=$.useRef(null);return{resizeHandleRef:t,startResize:(h,c,a,r)=>{const y=r.width,v=r.height;t.current={handle:h.name,object:{...c},startPos:a,startBounds:r,startFontSize:c.fontSize,startX:c.x,startY:c.y,startWidth:y,startHeight:v,startMouseX:a.x,startMouseY:a.y,startCenterX:r.centerX,startCenterY:r.centerY}},updateResize:h=>{if(!t.current)return null;const{handle:c,object:a,startBounds:r,startFontSize:y,startX:v,startY:m,startWidth:l,startHeight:g,startCenterX:s,startCenterY:x}=t.current;let u={...a};if(a.type==="text"){const i=v,w=m;l||r.width;const C=g||r.height,L=w+C;let k=i,z=w,I=C;switch(c){case"topLeft":case"topRight":z=h.y,I=Math.max(L-h.y,1);break;case"bottomLeft":case"bottomRight":z=w,I=Math.max(h.y-w,1);break}const B=15;I<B&&(I=B,(c==="topLeft"||c==="topRight")&&(z=L-B));const G=I/C,f=Math.max(8,Math.min(200,Math.round(y*G)));return u.x=k,u.y=z,u.fontSize=f,t.current.object=u,u}if(a.type==="path"||a.type==="shape"&&(a.shape==="line"||a.shape==="arrow"))return c==="start"?(u.startX=h.x,u.startY=h.y):c==="end"&&(u.endX=h.x,u.endY=h.y),t.current.object=u,u;if(a.type==="player"||a.type==="ball"||a.type==="figure"){const i=r.centerX,w=r.centerY,C=Math.sqrt(Math.pow(h.x-i,2)+Math.pow(h.y-w,2));let L=C;return a.type==="player"||a.type==="ball"?(L=Math.max(5,C),u.radius=L):a.type==="figure"&&(L=Math.max(10,C*2),u.size=L),t.current.object=u,u}if(a.type==="shape"&&a.shape!=="line"&&a.shape!=="arrow"){const i=r,w=i.originalX??i.x,C=i.originalY??i.y,L=i.originalWidth??i.width,k=i.originalHeight??i.height,z=w+L,I=C+k;let B=w,G=C,f=L,d=k;const M=h.x-t.current.startMouseX,S=h.y-t.current.startMouseY;switch(c){case"topLeft":B=w+M,G=C+S,f=L-M,d=k-S;break;case"topRight":G=C+S,f=L+M,d=k-S;break;case"bottomLeft":B=w+M,f=L-M,d=k+S;break;case"bottomRight":f=L+M,d=k+S;break;case"top":G=C+S,d=k-S;break;case"bottom":d=k+S;break;case"left":B=w+M,f=L-M;break;case"right":f=L+M;break}if(Math.abs(f)<Bt){const T=f<0?-1:1;f=Bt*T,c.includes("Left")&&(B=z-f)}if(Math.abs(d)<Bt){const T=d<0?-1:1;d=Bt*T,c.includes("Top")&&(G=I-d)}u.x=B,u.y=G,u.width=f,u.height=d}return t.current.object=u,u},endResize:()=>{const h=t.current;return t.current=null,h?h.object:null}}},Pn=()=>{const t=$.useRef(!1),e=$.useRef([]),o=$.useRef(null),p=$.useRef(!1);return{drawingRef:t,currentPathRef:e,shapeStartRef:o,isDrawingShapeRef:p,startDrawing:l=>{t.current=!0,e.current=[{x:l.x,y:l.y}]},continueDrawing:l=>t.current?(e.current.push({x:l.x,y:l.y}),e.current):null,endDrawing:()=>{const l=e.current;return t.current=!1,e.current=[],l.length>1?l:null},startShape:l=>{p.current=!0,o.current=l},getShapePreview:l=>!p.current||!o.current?null:{start:o.current,end:l},endShape:(l,g)=>{if(!p.current||!o.current)return null;const s=o.current;let x=null;if(g==="line"||g==="arrow")Math.sqrt(Math.pow(l.x-s.x,2)+Math.pow(l.y-s.y,2))>5&&(x={startX:s.x,startY:s.y,endX:l.x,endY:l.y});else{const u=l.x-s.x,i=l.y-s.y;Math.abs(u)>5&&Math.abs(i)>5&&(x={x:s.x,y:s.y,width:u,height:i})}return p.current=!1,o.current=null,x},cancelDrawing:()=>{t.current=!1,e.current=[],p.current=!1,o.current=null}}},Rn=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,Dn=b.div`
  border: 2px solid #ddd;
  margin-top: 10px;
  background: white;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  position: relative;
  cursor: ${t=>t.cursor};
`,Zn=b.canvas`
  display: block;
  background: white;
`,Yn=b.textarea`
  position: absolute;
  border: 2px solid #FFD700;
  background: white;
  padding: 4px 6px;
  transform: translateY(-50%);
  min-width: 150px;
  min-height: auto;
  outline: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  font-family: Arial, sans-serif;
  resize: none;
  overflow: hidden;
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
`,Fn=({fieldSize:t,fieldType:e})=>{const o=$.useRef(null),p=$.useRef(null),h=$.useRef(null),c=$.useRef(!1),a=$.useRef(null),[r,y]=$.useState({width:800,height:500}),[v,m]=$.useState(!1),[l,g]=$.useState(""),[s,x]=$.useState({x:0,y:0}),u=dt(),{activeTool:i,drawColor:w,brushSize:C,paths:L,objects:k,selectedObjectId:z,team1:I,team2:B,textFontSize:G,textColor:f,shapeBorderColor:d,shapeBorderOpacity:M,shapeFillColor:S,shapeFillOpacity:T,shapeBorderWidth:P,shapeBorderStyle:R,shapeLineCapStart:H,shapeLineCapEnd:A}=kt(Z=>Z.tacticsBoard),{redraw:F,drawLivePath:W,drawPreviewShape:_,tempObjectDataRef:X,tempPathDataRef:j}=zn(o),{cursorStyle:N,setCursorStyle:O,startDrag:U,updateDragPosition:ot,endDrag:Q,updateCursor:J,checkForHandle:q,draggedObjectRef:tt,checkIfPointInSelectedBounds:Rt}=Gn(),{resizeHandleRef:ut,startResize:Dt,updateResize:De,endResize:Ot}=En(),{drawingRef:Zt,currentPathRef:_r,shapeStartRef:Yt,isDrawingShapeRef:Ft,startDrawing:Ze,continueDrawing:Ye,endDrawing:qt,startShape:Fe,endShape:Xe,cancelDrawing:Ae}=Pn(),He=1500,je=640,We=1400,Xt=t.width/t.height,Ut=$.useCallback(()=>{var Qt;const Z=p.current;if(!Z)return{width:800,height:500};const E=((Qt=Z.parentElement)==null?void 0:Qt.clientWidth)||window.innerWidth,Y=E/He,D=We*Y,V=je*Y,et=D,ht=et/Xt,Kt=V,Je=Kt*Xt;let xt,mt;ht<=V?(xt=et,mt=ht):(xt=Je,mt=Kt);const Ht=E*.95;if(xt>Ht){const Ke=Ht/xt;xt=Ht,mt=mt*Ke}return{width:Math.floor(xt),height:Math.floor(mt)}},[Xt]),At=Z=>{const E=o.current;if(!E)return{x:0,y:0};const Y=E.getBoundingClientRect(),D=E.width/Y.width,V=E.height/Y.height;return{x:(Z.clientX-Y.left)*D,y:(Z.clientY-Y.top)*V}},_e=Z=>{if(Z.button!==0)return;const E=At(Z),Y=o.current;if(v){Jt();return}if(i==="cursor"){const D=z?z.startsWith("path_")?{...L[parseInt(z.replace("path_",""))],type:"path",id:z}:k.find(et=>et.id===z):null;if(D){const et=nt(D,Y);if(et){const ht=q(E,D,Y);if(ht){Dt(ht,D,E,et),D.type==="path"?j.current={...D}:X.current={...D};return}if(Rt(E,D,Y)){U(D,E,Y),D.type==="path"?j.current={...D}:X.current={...D};return}}}const V=Ee(E.x,E.y,k,L,C,Y);V?(u(te(V.id)),nt(V,Y)&&(U(V,E,Y),V.type==="path"?j.current={...V}:X.current={...V})):u(Lt())}else if(i==="drawing")Ze(E);else if(i.startsWith("shape_"))Fe(E);else if(i.startsWith("figure_")){const D={player:"👤",goalkeeper:"🧤",coach:"🧠",referee:"⚖️",goal:"🥅",cone:"🟨"},V=i.replace("figure_","");u(jt({type:"figure",figureType:V,icon:D[V],x:E.x,y:E.y,size:30}))}else if(i==="ball")u(jt({type:"ball",x:E.x,y:E.y,radius:10}));else if(i==="text"){const D=`text_${Date.now()}_${Math.random()}`;m(!0),g(""),x(E),a.current=D,u(te(D))}Z.preventDefault()},Ve=Z=>{const E=At(Z),Y=o.current;if(i==="cursor"&&!tt.current&&!ut.current&&J(E,k,L,z,C,Y),ut.current){const D=De(E);D&&(D.type==="path"?j.current=D:X.current=D,F(L,k,z,i,w,C))}else if(tt.current){const D=ot(E);D&&(D.type==="path"?j.current=D:X.current=D,F(L,k,z,i,w,C))}else if(Zt.current){const D=Ye(E);D&&D.length>=2&&W(D,w,C)}else if(Ft.current&&Yt.current){const D=i.replace("shape_","");F(L,k,z,i,w,C),_(D,Yt.current,E,d,R,P,S,T)}Z.preventDefault()},Ne=Z=>{const E=At(Z);if(Zt.current){const Y=qt();Y&&u(ee({points:Y,color:w,brushSize:C}))}if(Ft.current&&Yt.current){const Y=i.replace("shape_",""),D=Xe(E,Y);if(D){const V={type:"shape",shape:Y,...D,borderColor:d,borderOpacity:M,borderWidth:P,borderStyle:R,color:d};Y==="line"||Y==="arrow"?(V.lineCapStart=H,V.lineCapEnd=Y==="arrow"?"arrow":A):(V.fillColor=S,V.fillOpacity=T),u(jt(V))}}if(tt.current){const Y=Q();if(Y)if(Y.type==="path"){const D=parseInt(Y.id.replace("path_",""));u(St({index:D,updates:Y}))}else u(ct({id:Y.id,updates:Y}));X.current=null,j.current=null}if(ut.current){const Y=Ot();if(Y&&X.current)if(Y.type==="path"){const D=parseInt(Y.id.replace("path_",""));u(St({index:D,updates:j.current}))}else u(ct({id:X.current.id,updates:X.current}));X.current=null,j.current=null}O("default"),Z.preventDefault()},Oe=Z=>{if(Zt.current){const E=qt();E&&u(ee({points:E,color:w,brushSize:C}))}if(Ft.current&&Ae(),tt.current){const E=Q();if(E&&X.current)if(E.type==="path"){const Y=parseInt(E.id.replace("path_",""));u(St({index:Y,updates:j.current}))}else u(ct({id:X.current.id,updates:X.current}))}if(ut.current){const E=Ot();if(E&&X.current)if(E.object.type==="path"){const Y=parseInt(E.object.id.replace("path_",""));u(St({index:Y,updates:j.current}))}else u(ct({id:X.current.id,updates:X.current}))}X.current=null,j.current=null,O("default")},qe=Z=>{g(Z.target.value),h.current&&(h.current.style.height="auto",h.current.style.height=h.current.scrollHeight+"px")},Jt=()=>{const Z=l.trim();Z&&u(en({id:a.current,x:s.x,y:s.y,text:Z,fontSize:G,color:f})),m(!1),g(""),a.current=null,u($t("cursor"))},Ue=Z=>{Z.key==="Escape"&&(Z.preventDefault(),m(!1),g(""),u(Lt()),u($t("cursor")))};return $.useEffect(()=>{const Z=()=>{const E=Ut();y(E)};return Z(),window.addEventListener("resize",Z),()=>window.removeEventListener("resize",Z)},[Ut]),$.useEffect(()=>{const Z=o.current,E=p.current;Z&&E&&(Z.width=r.width,Z.height=r.height,Z.style.width=`${r.width}px`,Z.style.height=`${r.height}px`,E.style.width=`${r.width}px`,E.style.height=`${r.height}px`,c.current||(u(Qe({canvasWidth:r.width,canvasHeight:r.height})),c.current=!0),F(L,k,z,i,w,C))},[r,u,F,L,k,z,i,w,C]),$.useEffect(()=>{F(L,k,z,i,w,C)},[L,k,z,F,i,w,C]),$.useEffect(()=>{if(r.width>0&&r.height>0){const Z=k.filter(D=>D.type==="player"),E=Z.filter(D=>D.team===1),Y=Z.filter(D=>D.team===2);(E.length!==I.count||Y.length!==B.count)&&u(tn({canvasWidth:r.width,canvasHeight:r.height}))}},[I.count,B.count,r,k,u]),$.useEffect(()=>{if(v&&h.current&&o.current){const Z=h.current;setTimeout(()=>{Z.focus(),Z.select()},0);const E=o.current,Y=E.getBoundingClientRect(),D=E.width/Y.width,V=E.height/Y.height,et=s.x/D,ht=s.y/V;Z.style.left=`${et}px`,Z.style.top=`${ht}px`,Z.style.fontSize=`${G/V}px`,Z.style.color=f,Z.style.width="auto",Z.style.height="auto"}},[v,s,f,G]),$.useEffect(()=>{const Z=E=>{E.key==="Escape"&&!v&&u(Lt())};return window.addEventListener("keydown",Z),()=>window.removeEventListener("keydown",Z)},[z,v,u]),$.useEffect(()=>{u(Lt())},[i,u]),n.jsx(Rn,{children:n.jsxs(Dn,{ref:p,cursor:N,children:[n.jsx(Zn,{ref:o,onMouseDown:_e,onMouseMove:Ve,onMouseUp:Ne,onMouseLeave:Oe}),v&&n.jsx(Yn,{ref:h,value:l,onChange:qe,onBlur:Jt,onKeyDown:Ue,placeholder:"Введіть текст",rows:1})]})})},Xn=t=>$.createElement("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32",xmlSpace:"preserve",...t},$.createElement("path",{className:"st0",d:"M20,29h-8c-2.2,0-4-1.8-4-4V7c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v18C24,27.2,22.2,29,20,29z"}),$.createElement("circle",{className:"st0",cx:16,cy:16,r:4}),$.createElement("line",{className:"st0",x1:8,y1:16,x2:24,y2:16}),$.createElement("rect",{x:13,y:3,className:"st0",width:6,height:4}),$.createElement("rect",{x:13,y:25,className:"st0",width:6,height:4})),An=t=>$.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},$.createElement("path",{d:"M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Hn=t=>$.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...t},$.createElement("path",{d:"M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"})),jn=t=>$.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},$.createElement("circle",{cx:12,cy:12,r:9,strokeWidth:2}),$.createElement("path",{d:"M18 18L6 6",strokeWidth:2})),Pe=t=>$.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},$.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fillRule:"evenodd"},$.createElement("g",{id:"Arrow",transform:"translate(-528.000000, 0.000000)",fillRule:"nonzero"},$.createElement("g",{id:"forward_2_line",transform:"translate(528.000000, 0.000000)"},$.createElement("path",{d:"M17.954,11.6767 C16.6468,9.47493 14.2448,8 11.5,8 C7.35786,8 4,11.3579 4,15.5 C4,16.0523 3.55228,16.5 3,16.5 C2.44772,16.5 2,16.0523 2,15.5 C2,10.2533 6.25329,6 11.5,6 C14.6814,6 17.4961,7.56337 19.22,9.96279 L19.757,6.91751 C19.8529,6.37361 20.3715,6.01044 20.9154,6.10635 C21.4593,6.20225 21.8225,6.72091 21.7266,7.2648 L20.6847,13.1736 C20.6386,13.4348 20.4907,13.667 20.2735,13.8192 C19.9896,14.0179 19.6122,14.0542 19.2977,13.9445 L13.6174,12.9429 C13.0735,12.847 12.7103,12.3284 12.8062,11.7845 C12.9021,11.2406 13.4208,10.8774 13.9647,10.9733 L17.954,11.6767 Z",id:"\\u8DEF\\u5F84"}))))),Wn=t=>$.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},$.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.93417 2C7.95604 2 7.97799 2 8 2L16.0658 2C16.9523 1.99995 17.7161 1.99991 18.3278 2.08215C18.9833 2.17028 19.6117 2.36902 20.1213 2.87868C20.631 3.38835 20.8297 4.0167 20.9179 4.67221C21.0001 5.28388 21.0001 6.0477 21 6.9342L21 7.95C21 8.50229 20.5523 8.95 20 8.95C19.4477 8.95 19 8.50229 19 7.95V7.00001C19 6.02893 18.9979 5.40122 18.9357 4.93871C18.8774 4.50497 18.7832 4.36902 18.7071 4.2929C18.631 4.21677 18.495 4.12263 18.0613 4.06431C17.5988 4.00213 16.9711 4 16 4H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V4H8C7.02893 4 6.40122 4.00213 5.93871 4.06431C5.50497 4.12263 5.36902 4.21677 5.2929 4.2929C5.21677 4.36902 5.12263 4.50497 5.06431 4.93871C5.00213 5.40122 5 6.02893 5 7.00001V7.95C5 8.50229 4.55229 8.95 4 8.95C3.44772 8.95 3 8.50229 3 7.95V7.00001C3 6.97799 3 6.95604 3 6.93418C2.99995 6.04769 2.99991 5.28387 3.08215 4.67221C3.17028 4.0167 3.36902 3.38835 3.87868 2.87868C4.38835 2.36902 5.0167 2.17028 5.67221 2.08215C6.28387 1.99991 7.04769 1.99995 7.93417 2Z"}),$.createElement("path",{d:"M7 21H17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Re=t=>$.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},$.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.51192 4.43057C6.82641 4.161 7.29989 4.19743 7.56946 4.51192L13.5695 11.5119C13.8102 11.7928 13.8102 12.2072 13.5695 12.4881L7.56946 19.4881C7.29989 19.8026 6.82641 19.839 6.51192 19.5695C6.19743 19.2999 6.161 18.8264 6.43057 18.5119L12.0122 12L6.43057 5.48811C6.161 5.17361 6.19743 4.70014 6.51192 4.43057ZM10.5121 4.43068C10.8266 4.16111 11.3001 4.19753 11.5697 4.51202L17.5697 11.512C17.8104 11.7929 17.8104 12.2073 17.5697 12.4882L11.5697 19.4882C11.3001 19.8027 10.8266 19.8391 10.5121 19.5696C10.1976 19.3 10.1612 18.8265 10.4308 18.512L16.0124 12.0001L10.4308 5.48821C10.1612 5.17372 10.1976 4.70024 10.5121 4.43068Z"})),_n=t=>$.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},$.createElement("rect",{x:3,y:5,width:18,height:14,rx:2,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Vn=t=>$.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},$.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Nn=t=>$.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},$.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.0001 5.94363L4.76627 18H19.2339L12.0001 5.94363ZM10.7138 4.20006C11.2964 3.22905 12.7037 3.22905 13.2863 4.20006L21.4032 17.7282C22.0031 18.728 21.2829 20 20.117 20H3.88318C2.71724 20 1.99706 18.728 2.59694 17.7282L10.7138 4.20006Z"})),On=t=>$.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...t},$.createElement("path",{d:"M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z"})),qn=t=>$.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},$.createElement("path",{d:"M6 12H18M18 12L13 7M18 12L13 17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Un=b.div`
  position: relative;
  display: inline-block;
`,Jn=b.button`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  border: 1px solid ${({theme:t})=>t.textBlack};
  background: ${t=>t.active?t.theme.greenMain:t.theme.ContainerBGColor};
  color: ${t=>t.active?t.theme.white:t.theme.textBlack};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 4px;
  transition: all 0.2s;
  padding: 0;
  
  &:hover {
    background: ${t=>t.active?t.theme.darkGreen:t.theme.lightGreen};
    border-color: ${({theme:t})=>t.textGray};
  }
`,Kn=b.div`
  position: fixed;
  background: ${({theme:t})=>t.ContainerBGColor};
  border: 1px solid ${({theme:t})=>t.textBlack};
  border-radius: 4px;
  z-index: 10000;
  display: ${t=>t.isOpen?"flex":"none"};
  flex-direction: column;
  gap: 2px;
  width: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`,Qn=b.button`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;
  color: ${({theme:t})=>t.textBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${({theme:t})=>t.lightGreen};
  }
`,fe=b.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Wt=[{id:"rectangle",name:"Прямокутник",icon:n.jsx(_n,{}),style:{stroke:"currentColor",fill:"none"}},{id:"circle",name:"Коло",icon:n.jsx(Vn,{}),style:{stroke:"currentColor",fill:"none"}},{id:"triangle",name:"Трикутник",icon:n.jsx(Nn,{}),style:{fill:"currentColor",stroke:"none"}},{id:"line",name:"Лінія",icon:n.jsx(On,{}),style:{fill:"currentColor",stroke:"none"}},{id:"arrow",name:"Стрілка",icon:n.jsx(qn,{}),style:{stroke:"currentColor",fill:"none"}}],t1=({activeTool:t,onSelectShape:e})=>{const[o,p]=$.useState(!1),[h,c]=$.useState({top:0,left:0}),a=$.useRef(null),r=$.useRef(null),y=t.startsWith("shape_"),v=y?t.replace("shape_",""):null,m=Wt.find(i=>i.id===v),l=()=>{if(r.current){const i=r.current.getBoundingClientRect();c({top:i.bottom+window.scrollY,left:i.left+window.scrollX})}p(!o)},g=i=>{e(i),p(!1)},s=i=>{a.current&&!a.current.contains(i.target)&&p(!1)};$.useEffect(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}),[]);const x=()=>{const i=m||Wt[0];return n.jsx(fe,{children:ne.cloneElement(i.icon,i.style)})},u=i=>ne.cloneElement(i.icon,i.style);return n.jsxs(Un,{ref:a,children:[n.jsx(Jn,{ref:r,title:"Геометричні фігури",onClick:l,active:y,children:x()}),n.jsx(Kn,{isOpen:o,style:{top:h.top,left:h.left},children:Wt.map(i=>n.jsx(Qn,{onClick:()=>g(i),title:i.name,children:n.jsx(fe,{children:u(i)})},i.id))})]})},e1=b.div`
  position: relative;
  display: inline-block;
`,n1=b.button`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  border: 1px solid ${({theme:t})=>t.textBlack};
  background: ${t=>t.active?t.theme.greenMain:t.theme.ContainerBGColor};
  color: ${t=>t.active?t.theme.white:t.theme.textBlack};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 4px;
  transition: all 0.2s;
  padding: 0;
  
  &:hover {
    background: ${t=>t.active?t.theme.darkGreen:t.theme.lightGreen};
    border-color: ${({theme:t})=>t.textGray};
  }
`,r1=b.div`
  position: fixed;
  background: ${({theme:t})=>t.ContainerBGColor};
  border: 1px solid ${({theme:t})=>t.gray};
  border-radius: 4px;
  z-index: 10000;
  display: ${t=>t.isOpen?"flex":"none"};
  flex-direction: column;
  gap: 2px;
  width: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`,o1=b.button`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;
  color: ${({theme:t})=>t.textBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${({theme:t})=>t.lightGreen};
  }
`,me=[{id:"player",name:"Гравець",icon:"👤"},{id:"goalkeeper",name:"Воротар",icon:"🧤"},{id:"coach",name:"Тренер",icon:"🧠"},{id:"referee",name:"Суддя",icon:"⚖️"},{id:"goal",name:"Ворота",icon:"🥅"},{id:"cone",name:"Стійка",icon:"🟨"}],i1=({activeTool:t,onSelectFigure:e})=>{const[o,p]=$.useState(!1),[h,c]=$.useState({top:0,left:0}),a=$.useRef(null),r=$.useRef(null),y=t.startsWith("figure_"),v=y?t.replace("figure_",""):null,m=me.find(u=>u.id===v),l=()=>{if(r.current){const u=r.current.getBoundingClientRect();c({top:u.bottom+window.scrollY,left:u.left+window.scrollX})}p(!o)},g=u=>{e(u),p(!1)},s=u=>{a.current&&!a.current.contains(u.target)&&p(!1)};$.useEffect(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}),[]);const x=()=>m?m.icon:"👤";return n.jsxs(e1,{ref:a,children:[n.jsx(n1,{ref:r,title:"Спортивні фігури",onClick:l,active:y,children:x()}),n.jsx(r1,{isOpen:o,style:{top:h.top,left:h.left},children:me.map(u=>n.jsx(o1,{onClick:()=>g(u),title:u.name,children:u.icon},u.id))})]})},Ce=t=>$.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},$.createElement("path",{d:"M9.19762 11.9582L9.91426 11.737L9.19762 11.9582ZM9.54558 10.8683L9.08995 10.2726L9.54558 10.8683ZM9.91896 14.2952L9.20232 14.5164L9.91896 14.2952ZM14.0579 14.2952L13.3413 14.074L14.0579 14.2952ZM14.4313 10.8683L13.9757 11.4641V11.4641L14.4313 10.8683ZM14.7793 11.9582L15.4959 12.1794L14.7793 11.9582ZM12.5948 9.46375L13.0504 8.86802L12.5948 9.46375ZM11.3821 9.46375L11.8377 10.0595L11.3821 9.46375ZM20.1847 17.75C20.5989 17.75 20.9347 17.4142 20.9347 17C20.9347 16.5858 20.5989 16.25 20.1847 16.25V17.75ZM14.7793 19.7351L14.0677 19.4982L14.7793 19.7351ZM13.4801 21.2631C13.3492 21.6561 13.5617 22.0807 13.9547 22.2116C14.3477 22.3424 14.7724 22.1299 14.9033 21.7369L13.4801 21.2631ZM3.99769 16.25C3.58348 16.25 3.24769 16.5858 3.24769 17C3.24769 17.4142 3.58348 17.75 3.99769 17.75V16.25ZM9.40314 19.7351L10.1147 19.4982L9.40314 19.7351ZM9.27917 21.7369C9.41002 22.1299 9.83469 22.3424 10.2277 22.2116C10.6207 22.0807 10.8332 21.6561 10.7024 21.2631L9.27917 21.7369ZM8.22071 17.3775L7.78185 17.9857L8.22071 17.3775ZM5.556 5.45942C5.4489 5.05928 5.03772 4.82173 4.63759 4.92882C4.23746 5.03591 3.9999 5.44709 4.10699 5.84723L5.556 5.45942ZM5.24951 7.21519L4.52501 7.40909V7.40909L5.24951 7.21519ZM3.59168 11.5885L3.17811 10.9628L3.17811 10.9628L3.59168 11.5885ZM1.62739 11.9879C1.28185 12.2163 1.18689 12.6816 1.4153 13.0271C1.64372 13.3727 2.109 13.4676 2.45454 13.2392L1.62739 11.9879ZM19.934 5.84732C20.0411 5.44719 19.8035 5.036 19.4034 4.92891C19.0033 4.82182 18.5921 5.05938 18.485 5.45951L19.934 5.84732ZM18.7915 7.21528L18.067 7.02137L18.7915 7.21528ZM20.4493 11.5886L20.0357 12.2143L20.4493 11.5886ZM21.5864 13.2393C21.932 13.4677 22.3973 13.3728 22.6257 13.0272C22.8541 12.6817 22.7591 12.2164 22.4136 11.988L21.5864 13.2393ZM16.0903 3.83623C16.4288 3.5975 16.5096 3.12956 16.2709 2.79107C16.0322 2.45257 15.5642 2.3717 15.2257 2.61044L16.0903 3.83623ZM14.3376 4.15456L14.7699 4.76746L14.3376 4.15456ZM9.66562 4.10403L9.22021 4.70744V4.70744L9.66562 4.10403ZM8.61539 2.39659C8.28213 2.15059 7.81255 2.22133 7.56656 2.55459C7.32056 2.88784 7.3913 3.35742 7.72456 3.60341L8.61539 2.39659ZM14.7793 11.3678L14.0627 11.589L14.7793 11.3678ZM9.19762 11.3678L9.91426 11.589L9.19762 11.3678ZM21.2269 12C21.2269 17.1095 17.0899 21.25 11.9885 21.25V22.75C17.92 22.75 22.7269 17.9362 22.7269 12H21.2269ZM11.9885 21.25C6.88701 21.25 2.75 17.1095 2.75 12H1.25C1.25 17.9362 6.05695 22.75 11.9885 22.75V21.25ZM2.75 12C2.75 6.89055 6.88701 2.75 11.9885 2.75V1.25C6.05695 1.25 1.25 6.06376 1.25 12H2.75ZM11.9885 2.75C17.0899 2.75 21.2269 6.89055 21.2269 12H22.7269C22.7269 6.06376 17.92 1.25 11.9885 1.25V2.75ZM12.1392 10.0595L13.9757 11.4641L14.887 10.2726L13.0504 8.86802L12.1392 10.0595ZM14.0626 11.737L13.3413 14.074L14.7746 14.5164L15.4959 12.1794L14.0626 11.737ZM13.1036 14.25H10.8733V15.75H13.1036V14.25ZM10.6356 14.074L9.91426 11.737L8.48098 12.1794L9.20232 14.5164L10.6356 14.074ZM10.0012 11.4641L11.8377 10.0595L10.9265 8.86802L9.08995 10.2726L10.0012 11.4641ZM20.1847 16.25H18.5696V17.75H20.1847V16.25ZM14.0677 19.4982L13.4801 21.2631L14.9033 21.7369L15.4909 19.972L14.0677 19.4982ZM18.5696 16.25C17.892 16.25 17.3207 16.2489 16.8555 16.302C16.3711 16.3574 15.9264 16.4781 15.5228 16.7693L16.4006 17.9857C16.5201 17.8994 16.6846 17.8313 17.0258 17.7923C17.3863 17.7511 17.8574 17.75 18.5696 17.75V16.25ZM15.4909 19.972C15.7161 19.2956 15.8662 18.8484 16.0193 18.5189C16.1643 18.2069 16.2809 18.072 16.4006 17.9857L15.5228 16.7693C15.1193 17.0605 14.8645 17.4444 14.659 17.8868C14.4615 18.3117 14.282 18.8545 14.0677 19.4982L15.4909 19.972ZM3.99769 17.75H5.61279V16.25H3.99769V17.75ZM8.69154 19.972L9.27917 21.7369L10.7024 21.2631L10.1147 19.4982L8.69154 19.972ZM5.61279 17.75C6.325 17.75 6.79611 17.7511 7.15658 17.7923C7.49784 17.8313 7.66228 17.8994 7.78185 17.9857L8.65958 16.7693C8.25598 16.4781 7.81137 16.3574 7.32692 16.302C6.86168 16.2489 6.29041 16.25 5.61279 16.25V17.75ZM10.1147 19.4982C9.90043 18.8545 9.7209 18.3117 9.52346 17.8868C9.31791 17.4445 9.06311 17.0605 8.65958 16.7693L7.78185 17.9857C7.90148 18.072 8.01815 18.2069 8.16314 18.5189C8.31624 18.8484 8.46634 19.2956 8.69154 19.972L10.1147 19.4982ZM4.10699 5.84723L4.52501 7.40909L5.97401 7.02128L5.556 5.45942L4.10699 5.84723ZM3.17811 10.9628L1.62739 11.9879L2.45454 13.2392L4.00526 12.2142L3.17811 10.9628ZM4.52501 7.40909C4.70933 8.09777 4.83021 8.55381 4.88378 8.91324C4.93452 9.25362 4.9114 9.43069 4.85896 9.56902L6.26156 10.1007C6.43795 9.63541 6.43932 9.17465 6.3674 8.69211C6.29831 8.22862 6.14941 7.67663 5.97401 7.02128L4.52501 7.40909ZM4.00526 12.2142C4.57077 11.8404 5.04807 11.5262 5.407 11.2252C5.78074 10.9119 6.08516 10.5661 6.26156 10.1007L4.85896 9.56902C4.80654 9.70729 4.70659 9.855 4.44321 10.0759C4.16501 10.3091 3.77244 10.57 3.17811 10.9628L4.00526 12.2142ZM18.485 5.45951L18.067 7.02137L19.516 7.40918L19.934 5.84732L18.485 5.45951ZM20.0357 12.2143L21.5864 13.2393L22.4136 11.988L20.8629 10.9629L20.0357 12.2143ZM18.067 7.02137C17.8916 7.67672 17.7427 8.22871 17.6736 8.6922C17.6017 9.17474 17.603 9.6355 17.7794 10.1008L19.182 9.56911C19.1296 9.43078 19.1065 9.25372 19.1572 8.91333C19.2108 8.5539 19.3316 8.09787 19.516 7.40918L18.067 7.02137ZM20.8629 10.9629C20.2685 10.5701 19.876 10.3092 19.5978 10.0759C19.3344 9.85509 19.2344 9.70739 19.182 9.56911L17.7794 10.1008C17.9558 10.5662 18.2602 10.912 18.634 11.2253C18.9929 11.5263 19.4702 11.8405 20.0357 12.2143L20.8629 10.9629ZM15.2257 2.61044L13.9054 3.54166L14.7699 4.76746L16.0903 3.83623L15.2257 2.61044ZM10.111 3.50061L8.61539 2.39659L7.72456 3.60341L9.22021 4.70744L10.111 3.50061ZM13.9054 3.54166C13.3231 3.9523 12.9373 4.22303 12.6189 4.39721C12.3174 4.56214 12.1438 4.60125 11.9966 4.59965L11.9803 6.09957C12.478 6.10495 12.9109 5.94721 13.3387 5.7132C13.7496 5.48845 14.2159 5.15817 14.7699 4.76746L13.9054 3.54166ZM9.22021 4.70744C9.76562 5.11004 10.2247 5.45033 10.6306 5.68391C11.0533 5.92712 11.4827 6.09418 11.9803 6.09957L11.9966 4.59965C11.8494 4.59806 11.6767 4.5552 11.3788 4.38379C11.0642 4.20276 10.6843 3.92375 10.111 3.50061L9.22021 4.70744ZM13.9757 11.4641C14.0179 11.4963 14.0475 11.5399 14.0627 11.589L15.4959 11.1465C15.3911 10.807 15.1828 10.4989 14.887 10.2726L13.9757 11.4641ZM14.0627 11.589C14.0773 11.6364 14.0779 11.6876 14.0626 11.737L15.4959 12.1794C15.6023 11.8349 15.5974 11.4754 15.4959 11.1465L14.0627 11.589ZM18.1938 9.14203L14.4923 10.6748L15.0662 12.0607L18.7677 10.5279L18.1938 9.14203ZM13.0504 8.86802C12.7371 8.62838 12.3624 8.50841 11.9885 8.50841V10.0084C12.0419 10.0084 12.0945 10.0253 12.1392 10.0595L13.0504 8.86802ZM11.9885 8.50841C11.6146 8.50841 11.2398 8.62838 10.9265 8.86802L11.8377 10.0595C11.8824 10.0253 11.935 10.0084 11.9885 10.0084V8.50841ZM12.7385 9.25841V5.34961H11.2385V9.25841H12.7385ZM13.3413 14.074C13.3259 14.1241 13.2962 14.166 13.2572 14.1967L14.1852 15.3752C14.4575 15.1608 14.6671 14.8646 14.7746 14.5164L13.3413 14.074ZM13.2572 14.1967C13.214 14.2308 13.1607 14.25 13.1036 14.25V15.75C13.5063 15.75 13.8846 15.6119 14.1852 15.3752L13.2572 14.1967ZM16.5291 16.887L14.2886 14.2954L13.1538 15.2765L15.3944 17.868L16.5291 16.887ZM10.8733 14.25C10.8162 14.25 10.7629 14.2308 10.7197 14.1967L9.79172 15.3752C10.0923 15.6119 10.4706 15.75 10.8733 15.75V14.25ZM10.7197 14.1967C10.6807 14.166 10.651 14.1241 10.6356 14.074L9.20232 14.5164C9.3098 14.8646 9.51943 15.1608 9.79172 15.3752L10.7197 14.1967ZM8.81059 17.8407L10.8456 15.2492L9.66584 14.3228L7.63084 16.9143L8.81059 17.8407ZM9.91426 11.737C9.89899 11.6876 9.89961 11.6364 9.91426 11.589L8.48099 11.1465C8.37949 11.4754 8.37465 11.8349 8.48098 12.1794L9.91426 11.737ZM9.91426 11.589C9.9294 11.5399 9.95905 11.4963 10.0012 11.4641L9.08995 10.2726C8.79412 10.4989 8.58579 10.807 8.48099 11.1465L9.91426 11.589ZM9.48889 10.6766L5.85153 9.14373L5.269 10.526L8.90636 12.0589L9.48889 10.6766Z"})),a1=t=>$.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},$.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5262 17.4999C18.4887 22.7611 11.7612 24.5637 6.49994 21.5262C1.23873 18.4886 -0.563901 11.7611 2.47367 6.49988C5.51123 1.23866 12.2387 -0.563962 17.4999 2.4736C22.7612 5.51117 24.5638 12.2387 21.5262 17.4999ZM5.84382 7.87995C5.25279 7.64272 4.74291 7.45257 4.3292 7.30543C5.59153 5.24057 7.56267 3.85898 9.74648 3.29362C9.77176 3.62621 9.82851 4.00289 9.93722 4.40861C10.3269 5.86297 11.3579 7.58777 13.75 8.96886C14.0666 9.15165 14.3765 9.31079 14.6793 9.44842C14.4757 10.219 14.1794 11.0351 13.7614 11.8848C13.3566 11.6365 12.936 11.3857 12.5 11.1339C9.85449 9.60655 7.52076 8.55305 5.84382 7.87995ZM12.7587 13.6161C12.3555 13.3682 11.9358 13.1176 11.5 12.866C8.94938 11.3934 6.70297 10.3799 5.09882 9.73602C4.44209 9.47241 3.89359 9.27099 3.47664 9.12556C2.8887 10.8629 2.86217 12.7007 3.33339 14.4015C3.63406 14.2571 3.98864 14.1179 4.39435 14.0092C5.84872 13.6195 7.85792 13.65 10.25 15.0311C10.5667 15.2139 10.8594 15.4027 11.13 15.5961C11.6875 15.0424 12.2384 14.3885 12.7587 13.6161ZM12.6204 16.9341C13.4037 17.8315 13.839 18.756 14.0628 19.5913C14.1715 19.997 14.2283 20.3736 14.2536 20.7061C15.962 20.2638 17.5403 19.3219 18.7509 17.9441C18.4164 17.6557 17.9678 17.2815 17.4112 16.8446C16.6284 16.2301 15.633 15.4925 14.4426 14.6962C13.8639 15.5605 13.2482 16.3006 12.6204 16.9341ZM9.52737 16.9296C9.43788 16.8737 9.34548 16.8182 9.25005 16.7631C7.31205 15.6442 5.84818 15.6902 4.91199 15.9411C4.58 16.03 4.30141 16.1484 4.0805 16.2639C4.53358 17.1073 5.12461 17.8846 5.84359 18.5583C5.87614 18.5513 5.90977 18.5439 5.94444 18.5361C6.44532 18.4223 7.15871 18.2112 7.97658 17.8245C8.4626 17.5947 8.98712 17.3022 9.52737 16.9296ZM7.92672 20.018C8.21347 19.909 8.51642 19.7815 8.83145 19.6326C9.54844 19.2936 10.3256 18.8442 11.1145 18.2503C11.6989 18.9202 11.9873 19.5728 12.131 20.109C12.2199 20.4409 12.2567 20.7413 12.2672 20.9903C10.8031 21.0352 9.31171 20.7231 7.92672 20.018ZM18.6461 15.2714C17.8061 14.612 16.7364 13.8204 15.4558 12.968C15.9672 11.9634 16.3317 10.9922 16.5833 10.0701C17.7521 10.2998 18.7704 10.2145 19.6057 9.99072C20.0114 9.88202 20.3659 9.74284 20.6666 9.59846C21.2688 11.7723 21.0579 14.1701 19.9008 16.2957C19.5666 16.011 19.147 15.6645 18.6461 15.2714ZM16.9702 8.10789C17.8425 8.27902 18.5519 8.20254 19.0881 8.05887C19.42 7.96992 19.6986 7.85154 19.9195 7.73607C19.2263 6.44565 18.2102 5.3101 16.907 4.46319C16.956 4.76614 16.9971 5.09234 17.0257 5.43977C17.0906 6.23015 17.09 7.1278 16.9702 8.10789ZM15.0328 7.39372C15.0854 6.73963 15.0764 6.13922 15.0324 5.60348C14.9583 4.70183 14.7845 3.97847 14.6326 3.4878C14.622 3.45374 14.6116 3.42082 14.6013 3.38905C13.6584 3.10331 12.6898 2.9801 11.7329 3.00943C11.7433 3.2585 11.7801 3.55897 11.8691 3.89097C12.1199 4.82716 12.812 6.11791 14.75 7.23681C14.8454 7.2919 14.9397 7.34416 15.0328 7.39372Z"})),s1=t=>$.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},$.createElement("path",{d:"M11.5697 12.5532L12.1617 13.0137V13.0137L11.5697 12.5532ZM11.3142 3.64586L12.0065 3.93432V3.93432L11.3142 3.64586ZM18.555 14.5045C18.8336 14.198 18.811 13.7237 18.5045 13.445C18.198 13.1664 17.7237 13.189 17.445 13.4955L18.555 14.5045ZM17.7087 14.3204L17.1538 13.8159L17.1538 13.8159L17.7087 14.3204ZM21.2426 10.7426L21.7773 10.2166L21.773 10.2123L21.2426 10.7426ZM21.4531 12.026C21.7436 12.3213 22.2184 12.3251 22.5137 12.0346C22.809 11.7442 22.8129 11.2693 22.5224 10.974L21.4531 12.026ZM5.7327 19.0428C5.31848 19.0428 4.9827 19.3786 4.9827 19.7928C4.9827 20.207 5.31848 20.5428 5.7327 20.5428V19.0428ZM3.5 15.75C3.08579 15.75 2.75 16.0858 2.75 16.5C2.75 16.9142 3.08579 17.25 3.5 17.25V15.75ZM8.19231 3.35575C8.35162 2.9734 8.17081 2.5343 7.78846 2.37498C7.40611 2.21567 6.96701 2.39648 6.80769 2.77883L8.19231 3.35575ZM6.80769 15.2885C6.96701 15.6708 7.40611 15.8516 7.78846 15.6923C8.17081 15.533 8.35162 15.0939 8.19231 14.7115L6.80769 15.2885ZM11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5C10.25 6.91421 10.5858 7.25 11 7.25V5.75ZM19.876 16.916C20.1057 17.2607 20.5714 17.3538 20.916 17.124C21.2607 16.8943 21.3538 16.4286 21.124 16.084L19.876 16.916ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75C2.75 6.89137 6.89137 2.75 12 2.75V1.25ZM12 12.75H12.0917V11.25H12V12.75ZM11.408 11.5395L10.9777 12.0928L12.1617 13.0137L12.592 12.4605L11.408 11.5395ZM11.3077 1.71154L10.6219 3.35739L12.0065 3.93432L12.6923 2.28846L11.3077 1.71154ZM17.445 13.4955L17.1538 13.8159L18.2637 14.8249L18.555 14.5045L17.445 13.4955ZM20.708 11.2686L21.4531 12.026L22.5224 10.974L21.7773 10.2167L20.708 11.2686ZM17.1538 13.8159C14.2838 16.9729 9.96086 19.0428 5.7327 19.0428V20.5428C10.4211 20.5428 15.1357 18.2657 18.2637 14.8249L17.1538 13.8159ZM10.6219 3.35739C9.39039 6.31308 9.66695 9.68222 11.364 12.3975L12.636 11.6025C11.1965 9.29929 10.9619 6.44145 12.0065 3.93432L10.6219 3.35739ZM10.9777 12.0928C9.18293 14.4003 6.42334 15.75 3.5 15.75V17.25C6.88622 17.25 10.0828 15.6866 12.1617 13.0137L10.9777 12.0928ZM6.80769 2.77883C5.13077 6.80344 5.13077 11.2638 6.80769 15.2885L8.19231 14.7115C6.66923 11.0562 6.66923 7.01114 8.19231 3.35575L6.80769 2.77883ZM11 7.25C14.6428 7.25 18.1364 8.6971 20.7123 11.273L21.773 10.2123C18.9158 7.35514 15.0406 5.75 11 5.75V7.25ZM12.0917 12.75C15.2197 12.75 18.1408 14.3133 19.876 16.916L21.124 16.084C19.1107 13.064 15.7213 11.25 12.0917 11.25V12.75Z"})),l1=t=>$.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},$.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.9386 4.73542C13.3511 4.69785 13.716 5.0018 13.7535 5.4143C13.8024 5.95058 13.893 6.53361 14.045 7.14711C14.1447 7.54916 13.8995 7.95586 13.4974 8.05549C13.0954 8.15512 12.6887 7.90997 12.5891 7.50791C12.4172 6.81421 12.3148 6.15558 12.2597 5.55036C12.2221 5.13785 12.5261 4.77299 12.9386 4.73542ZM5.23942 9.18054C5.47821 8.84208 5.94616 8.76129 6.28461 9.00008C6.78119 9.35043 7.30041 9.76836 7.81522 10.2641C8.1136 10.5514 8.12256 11.0262 7.83525 11.3246C7.54794 11.6229 7.07315 11.6319 6.77478 11.3446C6.31949 10.9062 5.85988 10.5362 5.41988 10.2257C5.08142 9.98694 5.00063 9.51899 5.23942 9.18054ZM13.836 8.99599C14.2094 8.81661 14.6574 8.97385 14.8368 9.3472C14.9605 9.60468 15.097 9.86417 15.2474 10.1247C15.3979 10.3852 15.5543 10.6332 15.7155 10.869C15.9491 11.2111 15.8612 11.6778 15.5192 11.9114C15.1772 12.145 14.7105 12.0572 14.4769 11.7151C14.2947 11.4485 14.118 11.1685 13.9484 10.8747C13.7788 10.5809 13.6246 10.2879 13.4848 9.99681C13.3054 9.62346 13.4627 9.17538 13.836 8.99599ZM8.48046 12.088C8.82249 11.8544 9.28917 11.9422 9.52281 12.2843C9.70496 12.5509 9.88164 12.8309 10.0513 13.1247C10.2209 13.4185 10.375 13.7115 10.5149 14.0026C10.6943 14.3759 10.537 14.824 10.1637 15.0034C9.79032 15.1828 9.34223 15.0256 9.16285 14.6522C9.03914 14.3947 8.90267 14.1352 8.75225 13.8747C8.60182 13.6142 8.44534 13.3662 8.28421 13.1304C8.05057 12.7883 8.13843 12.3217 8.48046 12.088ZM16.1644 12.6748C16.4517 12.3765 16.9265 12.3675 17.2249 12.6548C17.6802 13.0932 18.1398 13.4632 18.5798 13.7737C18.9183 14.0125 18.9991 14.4804 18.7603 14.8189C18.5215 15.1573 18.0535 15.2381 17.7151 14.9993C17.2185 14.649 16.6993 14.2311 16.1845 13.7353C15.8861 13.448 15.8771 12.9732 16.1644 12.6748ZM10.5022 15.9439C10.9043 15.8443 11.311 16.0894 11.4106 16.4915C11.5825 17.1852 11.6849 17.8438 11.74 18.4491C11.7776 18.8616 11.4736 19.2264 11.0611 19.264C10.6486 19.3016 10.2837 18.9976 10.2462 18.5851C10.1973 18.0488 10.1067 17.4658 9.95466 16.8523C9.85502 16.4502 10.1002 16.0436 10.5022 15.9439Z"}),$.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2859 1.32632C11.0551 1.05591 8.71992 1.48034 6.62484 2.68993C1.4832 5.65846 -0.278462 12.2331 2.69007 17.3747C5.6586 22.5164 12.2332 24.278 17.3748 21.3095C19.4699 20.0999 21.0051 18.2898 21.8863 16.2227C23.1661 13.2206 23.0684 9.67094 21.3096 6.62471C19.5509 3.57847 16.5256 1.71902 13.2859 1.32632ZM13.7802 3.08033C13.7309 3.49161 13.3576 3.7851 12.9463 3.73585C12.5351 3.68661 12.2416 3.31329 12.2908 2.90201C12.297 2.85081 12.3032 2.8013 12.3096 2.75354C10.638 2.6958 8.93097 3.09054 7.37484 3.98897C5.81951 4.88694 4.62362 6.16839 3.83764 7.64494C3.88216 7.66328 3.92814 7.68258 3.97552 7.70286C4.35631 7.86585 4.53288 8.30668 4.36989 8.68748C4.20689 9.06827 3.76606 9.24484 3.38527 9.08184C3.33556 9.06057 3.2878 9.04062 3.24212 9.02195C2.41524 11.457 2.60225 14.2226 3.98911 16.6247C5.37596 19.0268 7.67752 20.5716 10.1998 21.073C10.2065 21.0241 10.2131 20.9728 10.2195 20.9191C10.2687 20.5078 10.6421 20.2143 11.0533 20.2636C11.4646 20.3128 11.7581 20.6861 11.7089 21.0974C11.7027 21.1486 11.6965 21.198 11.6901 21.2458C13.3618 21.3034 15.0695 20.9084 16.6248 20.0104C18.181 19.112 19.3764 17.831 20.1621 16.3545C20.1176 16.3362 20.0716 16.3168 20.0242 16.2966C19.6434 16.1336 19.4668 15.6927 19.6298 15.3119C19.7928 14.9311 20.2336 14.7546 20.6144 14.9176C20.6641 14.9388 20.7119 14.9588 20.7576 14.9775C21.5849 12.5411 21.3972 9.77639 20.0106 7.37471C18.624 4.97302 16.3236 3.42808 13.7999 2.92639C13.7932 2.97529 13.7866 3.02664 13.7802 3.08033Z"})),c1=t=>$.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},$.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.1665 2.75836L21.2416 8.83351C21.2677 7.81177 21.2303 6.84352 21.1649 5.98862C21.0341 4.27797 19.722 2.96586 18.0114 2.83507C17.1565 2.76971 16.1882 2.7323 15.1665 2.75836ZM21.1071 10.8203L13.1797 2.89285C10.483 3.1978 7.77958 4.04236 5.91097 5.91097C4.04236 7.77958 3.1978 10.483 2.89285 13.1797L10.8203 21.1071C13.517 20.8022 16.2204 19.9576 18.089 18.089C19.9576 16.2204 20.8022 13.517 21.1071 10.8203ZM8.83351 21.2416L2.75836 15.1665C2.7323 16.1882 2.76971 17.1565 2.83507 18.0114C2.96587 19.722 4.27797 21.0341 5.98861 21.1649C6.84352 21.2303 7.81177 21.2677 8.83351 21.2416ZM13.3854 1.36321C15.1096 1.19733 16.7638 1.2353 18.1257 1.33944C20.5746 1.52667 22.4733 3.4254 22.6606 5.87426C22.7647 7.23618 22.8027 8.89045 22.6368 10.6146C22.3524 13.5707 21.4579 16.8414 19.1497 19.1497C16.8414 21.4579 13.5707 22.3524 10.6146 22.6368C8.89045 22.8027 7.23618 22.7647 5.87426 22.6606C3.4254 22.4733 1.52667 20.5746 1.33944 18.1257C1.2353 16.7638 1.19733 15.1096 1.36321 13.3854C1.6476 10.4293 2.54206 7.15857 4.85031 4.85031C7.15857 2.54206 10.4293 1.6476 13.3854 1.36321ZM11.9426 8.1601C12.2355 7.86721 12.7104 7.86721 13.0032 8.1601L13.8914 9.0482L14.7795 8.1601C15.0723 7.86721 15.5472 7.86721 15.8401 8.1601C16.133 8.45299 16.133 8.92787 15.8401 9.22076L14.952 10.1089L15.8401 10.997C16.133 11.2899 16.133 11.7647 15.8401 12.0576C15.5472 12.3505 15.0723 12.3505 14.7795 12.0576L13.8914 11.1695L13.0608 12.0001L13.9489 12.8882C14.2418 13.1811 14.2418 13.656 13.9489 13.9489C13.656 14.2418 13.1811 14.2418 12.8882 13.9489L12.0001 13.0608L11.1695 13.8914L12.0576 14.7795C12.3505 15.0723 12.3505 15.5472 12.0576 15.8401C11.7647 16.133 11.2899 16.133 10.997 15.8401L10.1089 14.952L9.22076 15.8401C8.92787 16.133 8.45299 16.133 8.1601 15.8401C7.86721 15.5472 7.86721 15.0723 8.1601 14.7795L9.0482 13.8914L8.1601 13.0032C7.86721 12.7104 7.86721 12.2355 8.1601 11.9426C8.45299 11.6497 8.92787 11.6497 9.22076 11.9426L10.1089 12.8307L10.9394 12.0001L10.0513 11.112C9.75845 10.8191 9.75845 10.3442 10.0513 10.0513C10.3442 9.75845 10.8191 9.75845 11.112 10.0513L12.0001 10.9394L12.8307 10.1089L11.9426 9.22076C11.6497 8.92787 11.6497 8.45299 11.9426 8.1601Z"})),d1=t=>$.createElement("svg",{fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 32 32","data-name":"Layer 1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",...t},$.createElement("rect",{height:1,transform:"translate(20 51) rotate(180)",width:16,x:2,y:25}),$.createElement("rect",{height:1,transform:"translate(26 59) rotate(180)",width:16,x:5,y:29}),$.createElement("rect",{height:1,transform:"translate(39 -8) rotate(90)",width:19,x:14,y:15}),$.createElement("rect",{height:1,transform:"translate(21 10) rotate(90)",width:19,x:-4,y:15}),$.createElement("path",{d:"M24,25H23v2a2,2,0,0,1-2,2H20v1h1a3,3,0,0,0,3-3Z"}),$.createElement("path",{d:"M17,26h1v1a2,2,0,0,0,2,2h1v1H20a3,3,0,0,1-3-3Z"}),$.createElement("path",{d:"M2,26H3v1a2,2,0,0,0,2,2H6v1H5a3,3,0,0,1-3-3Z"}),$.createElement("rect",{height:1,width:6,x:24,y:6}),$.createElement("rect",{height:1,width:19,x:8,y:2}),$.createElement("path",{d:"M5,6H6V5A2,2,0,0,1,8,3H9V2H8A3,3,0,0,0,5,5Z"}),$.createElement("path",{d:"M23,6h1V5a2,2,0,0,1,2-2h1V2H26a3,3,0,0,0-3,3Z"}),$.createElement("path",{d:"M30,6H29V5a2,2,0,0,0-2-2H26V2h1a3,3,0,0,1,3,3Z"})),h1=b.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.2s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,p1=b.div`
  background: ${({theme:t})=>t.ContainerBGColor};
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  height: 90vh;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease-out;
  
  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,g1=b.div`
  padding: 20px 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 2px solid ${({theme:t})=>t.mainBGColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme:t})=>t.ContainerBGColor};
`,u1=b.h2`
  margin: 0;
  font-size: 24px;
  color: ${({theme:t})=>t.textBlack};
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,x1=b.button`
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: ${({theme:t})=>t.textGray};
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;

  svg {
    width: 20px;
    height: 20px;
    fill: ${({theme:t})=>t.textBlack};
  }

  &:hover {
    background: ${({theme:t})=>t.red};
    svg {
      fill: ${({theme:t})=>t.white};
   }
    color: ${({theme:t})=>t.textBlack};
  }
`,f1=b.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`,m1=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  @media (max-width: 768px) {
    gap: 6px;
  }
`,C1=b.button`
  padding: 10px 16px;
  border: 2px solid
    ${({active:t,theme:e})=>t?e.greenMain:e.textGray};
  background: ${({active:t,theme:e})=>t?e.greenMain:e.ContainerBGColor};
  color: ${({active:t,theme:e})=>t?e.white:e.textBlack};
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;

  &:hover {
    border-color: ${({active:t,theme:e})=>t?e.darkGreen:e.lightGreen};
    background: ${({active:t,theme:e})=>t?e.darkGreen:e.ContainerBGColor==="#ffffff"?e.lightGreen:"#343434"};
    color: ${({active:t,theme:e})=>t?e.white:e.ContainerBGColor==="#ffffff"?"#ffffff":e.textBlack};
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
    gap: 6px;
  }
`,y1=b.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
  
  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`,w1=b.div`
  overflow-y: auto;
  padding-right: 8px;
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({theme:t})=>t.mainBGColor};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:t})=>t.textBlack};
  }
`,M1=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
`,b1=b.div`
  border: 2px solid ${t=>t.selected?t.theme.greenMain:t.theme.mainBGColor};
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: border-color 0.2s;
  background: ${t=>t.selected?t.theme.BgActiveLink:t.theme.ContainerBGColor};
  
  &:hover {
    border-color: ${({theme:t})=>t.greenMain};
  }
  
  @media (max-width: 768px) {
    padding: 12px;
  }
`,v1=b.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:t})=>t.textBlack};
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,L1=b.div`
  font-size: 13px;
  color: ${({theme:t})=>t.textGray};
  line-height: 1.5;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,$1=b.div`
  width: 100%;
  height: 140px;
  background: ${({theme:t})=>t.mainBGColor};
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:t})=>t.textGray};
  display: flex;
  align-items: center;
  justify-content: center;
`,k1=b.div`
  position: relative;
  width: ${t=>{const p=t.fieldWidth,h=t.fieldHeight,c=100/p,a=80/h,r=Math.min(c,a);return`${p*r}px`}};
  height: ${t=>{const p=t.fieldWidth,h=t.fieldHeight,c=100/p,a=80/h,r=Math.min(c,a);return`${h*r}px`}};
  background: ${({theme:t})=>t.greenMain};
  border: 2px solid ${({theme:t})=>t.darkGreen};
  border-radius: 2px;
  
  /* Гарантуємо мінімальний розмір для дуже малих полів */
  min-width: 20px;
  min-height: 20px;
`,ye=b.div`
  position: absolute;
  font-size: 10px;
  color: ${({theme:t})=>t.textGray};
  font-weight: 600;
  background: ${({theme:t})=>t.ContainerBGColor};
  padding: 1px 4px;
  border-radius: 2px;
  white-space: nowrap;
  border: 1px solid ${({theme:t})=>t.textGray};
  
  &.width {
    bottom: -18px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &.height {
    right: -20px;
    top: 50%;
    transform: translateY(-50%) rotate(90deg);
    transform-origin: center;
  }
`,S1={FOOTBALL:[{id:"football_standard",name:"Стандартне поле",width:105,height:68},{id:"football_small",name:"Мале поле",width:90,height:45},{id:"football_futsal",name:"Футзал",width:40,height:20}],BASKETBALL:[{id:"basketball_nba",name:"NBA",width:28.65,height:15.24},{id:"basketball_fiba",name:"FIBA",width:28,height:15}],VOLLEYBALL:[{id:"volleyball_indoor",name:"Закритий майданчик",width:18,height:9},{id:"volleyball_beach",name:"Пляжний майданчик",width:16,height:8}],TENNIS:[{id:"tennis_singles",name:"Одиночний розряд",width:23.77,height:8.23},{id:"tennis_doubles",name:"Парний розряд",width:23.77,height:10.97}],RUGBY:[{id:"rugby_standard",name:"Регбі (15 гравців)",width:100,height:70},{id:"rugby_sevens",name:"Регбі-7",width:94,height:68}],HANDBALL:[{id:"handball_standard",name:"Гандбол",width:40,height:20}],SHEET:[{id:"a4_portrait",name:"A4 Портрет",width:21,height:29.7},{id:"a4_landscape",name:"A4 Ландшафт",width:29.7,height:21},{id:"a3_portrait",name:"A3 Портрет",width:29.7,height:42},{id:"a3_landscape",name:"A3 Ландшафт",width:42,height:29.7},{id:"a3_landscape1",name:"A3 Ландшафт",width:600,height:29.7},{id:"a3_landscape2",name:"A3 Ландшафт",width:2,height:529.7}]},B1=[{id:"FOOTBALL",name:"Футбол",icon:Ce},{id:"RUGBY",name:"Регбі",icon:c1},{id:"BASKETBALL",name:"Баскетбол",icon:a1},{id:"VOLLEYBALL",name:"Волейбол",icon:s1},{id:"TENNIS",name:"Теніс",icon:l1},{id:"HANDBALL",name:"Гандбол",icon:Ce},{id:"SHEET",name:"Аркуш",icon:d1}],T1=({isOpen:t,onClose:e,onSelectField:o,currentFieldId:p})=>{var g;const[h,c]=$.useState("FOOTBALL"),[a,r]=$.useState(p);if(!t)return null;const y=s=>{r(s.id),o(s),setTimeout(()=>e(),300)},v=s=>{s.target===s.currentTarget&&e()},m=(s,x)=>x==="SHEET"?`${s.width}см × ${s.height}см`:`${s.width}м × ${s.height}м`,l=(s,x)=>x==="SHEET"?`${s}см`:`${s}м`;return n.jsx(h1,{onClick:v,children:n.jsxs(p1,{children:[n.jsxs(g1,{children:[n.jsx(u1,{children:"Обрати спортивне поле"}),n.jsx(x1,{onClick:e,children:n.jsx(nn,{})})]}),n.jsxs(f1,{children:[n.jsx(m1,{children:B1.map(s=>{const x=s.icon;return n.jsxs(C1,{active:h===s.id,onClick:()=>c(s.id),children:[n.jsx(y1,{children:n.jsx(x,{})}),s.name]},s.id)})}),n.jsx(w1,{children:n.jsx(M1,{children:(g=S1[h])==null?void 0:g.map(s=>n.jsxs(b1,{selected:a===s.id,onClick:()=>y(s),children:[n.jsx(v1,{children:s.name}),n.jsx(L1,{children:m(s,h)}),n.jsx($1,{children:n.jsxs(k1,{fieldWidth:s.width,fieldHeight:s.height,children:[n.jsx(ye,{className:"width",children:l(s.width,h)}),n.jsx(ye,{className:"height",children:l(s.height,h)})]})})]},s.id))})})]})]})})},I1=b(Wn)`
  width: 80%;
  height: 80%;
  stroke: ${({theme:t})=>t.textBlack};
   fill: ${({theme:t})=>t.textBlack};
`,z1=b(Re)`
  width: 100%;
  height: 100%;
   fill: ${({theme:t})=>t.black};
   rotate: 180deg;
`,G1=b(jn)`
  width: 100%;
  height: 100%;
  stroke: ${({theme:t})=>t.textBlack};
`,E1=b(Pe)`
  width: 100%;
  height: 100%;
  fill: ${({theme:t})=>t.textBlack};
`,P1=b(Pe)`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  fill: ${({theme:t})=>t.textBlack};
`,R1=b(An)`
  width: 70%;  
  height: 70%;
  stroke: ${({theme:t})=>t.textBlack};
`,D1=b(Hn)`
  width: 70%;  
  height: 70%;
  fill: ${({theme:t})=>t.textBlack};
`,Z1=b.div`
  width: 100%;
  background: ${({theme:t})=>t.ContainerBGColor};
  border-bottom: 2px solid ${({theme:t})=>t.gray};
  padding: 12px 16px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`,Y1=b.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`,F1=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
`,X1=b.div`
  flex-shrink: 0;
  position: relative;
  z-index: 10;
`,it=b.button`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  border: 1px solid ${({theme:t})=>t.textBlack};
  background: ${t=>t.active?t.theme.greenMain:t.theme.ContainerBGColor};
  color: ${t=>t.active?t.theme.white:t.theme.textBlack};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  transition: all 0.2s;
  padding: 0;
  
  &:hover {
    background: ${t=>t.active?t.theme.darkGreen:t.theme.lightGreen};
    border-color: ${({theme:t})=>t.textGray};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

`,A1=b.button`
  width: 28px;
  height: 28px;
  min-width: 28px;
  min-height: 28px;
  border: 2px solid ${({theme:t})=>t.greenMain};
  background: ${({theme:t})=>t.lightGreen};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  transition: all 0.2s;
  padding: 0;
  
  &:hover {
    background: ${({theme:t})=>t.darkGreen};
    border-color: ${({theme:t})=>t.darkGreen};
    svg {
      fill: ${({theme:t})=>t.white};
    }
  }
  
`,H1=b(Xn)`
  width: 60%;
  height: 60%;
  fill: none;
  stroke: ${({theme:t})=>t.textBlack};
`,Ct=b.div`
  width: 1px;
  height: 20px;
  background: ${({theme:t})=>t.gray};
  margin: 0 4px;
  
  @media (max-width: 768px) {
    height: 16px;
  }
`,we=b.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  background: ${({theme:t})=>t.disabledBG};
  border-radius: 4px;
  border: 1px solid ${({theme:t})=>t.gray};
  
  @media (max-width: 768px) {
    padding: 2px 6px;
  }
`,Me=b.span`
  font-size: 11px;
  color: ${({theme:t})=>t.textGray};
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 9px;
  }
`,be=b.input`
  width: 32px;
  height: 20px;
  border: 1px solid ${({theme:t})=>t.gray};
  border-radius: 3px;
  text-align: center;
  font-size: 12px;
  padding: 0 2px;
  background: ${({theme:t})=>t.ContainerBGColor};
  color: ${({theme:t})=>t.textBlack};
  
  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.greenMain};
  }
  
  @media (max-width: 768px) {
    width: 28px;
    height: 18px;
    font-size: 11px;
  }
  
  @media (max-width: 480px) {
    width: 24px;
    height: 16px;
    font-size: 10px;
  }
`,ve=b.input`
  width: 24px;
  height: 24px;
  border: 1px solid ${({theme:t})=>t.gray};
  border-radius: 3px;
  cursor: pointer;
  padding: 0;
  
  &::-webkit-color-swatch-wrapper {
    padding: 2px;
  }
  
  &::-webkit-color-swatch {
    border: none;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`,j1=({currentField:t,onSelectField:e,isSidebarOpen:o,onToggleSidebar:p})=>{const[h,c]=$.useState(!1),a=dt(),{activeTool:r,team1:y,team2:v,historyIndex:m,history:l}=kt(M=>M.tacticsBoard),g=()=>{c(!0)},s=()=>{c(!1)},x=M=>{e(M),s()},u=M=>{a($t(M))},i=M=>{a($t(`shape_${M.id}`))},w=M=>{a($t(`figure_${M.id}`))},C=M=>{const S=parseInt(M.target.value)||0;a(rn(Math.max(0,Math.min(30,S))))},L=M=>{a(on(M.target.value))},k=M=>{const S=parseInt(M.target.value)||0;a(an(Math.max(0,Math.min(30,S))))},z=M=>{a(sn(M.target.value))},I=()=>{a(ln())},B=()=>{a(cn())},G=()=>{window.confirm("Ви впевнені, що хочете очистити всю дошку?")&&a(dn())},f=m>0,d=m<l.length-1;return n.jsxs(n.Fragment,{children:[n.jsx(Z1,{children:n.jsxs(Y1,{children:[n.jsxs(F1,{children:[n.jsx(it,{title:"Обрати поле",onClick:g,children:n.jsx(H1,{})}),n.jsx(Ct,{}),n.jsx(it,{title:"Курсор (виділення та переміщення)",active:r==="cursor",onClick:()=>u("cursor"),children:n.jsx(R1,{})}),n.jsx(it,{title:"Додати текст",active:r==="text",onClick:()=>u("text"),children:n.jsx(I1,{})}),n.jsx(it,{title:"Малювання",active:r==="drawing",onClick:()=>u("drawing"),children:n.jsx(D1,{})}),n.jsx(Ct,{}),n.jsx(t1,{activeTool:r,onSelectShape:i}),n.jsx(i1,{activeTool:r,onSelectFigure:w}),n.jsx(Ct,{}),n.jsxs(we,{children:[n.jsx(Me,{children:"К1:"}),n.jsx(be,{type:"number",min:"0",max:"30",value:y.count,onChange:C,title:"Кількість гравців команди 1"}),n.jsx(ve,{type:"color",value:y.color,onChange:L,title:"Колір команди 1"})]}),n.jsxs(we,{children:[n.jsx(Me,{children:"К2:"}),n.jsx(be,{type:"number",min:"0",max:"30",value:v.count,onChange:k,title:"Кількість гравців команди 2"}),n.jsx(ve,{type:"color",value:v.color,onChange:z,title:"Колір команди 2"})]}),n.jsx(Ct,{}),n.jsx(it,{title:"М'яч",active:r==="ball",onClick:()=>u("ball"),children:"⚽"}),n.jsx(it,{title:"Картки",active:r==="cards",onClick:()=>u("cards"),children:"🟨"}),n.jsx(Ct,{}),n.jsx(it,{title:"Назад (Undo)",onClick:I,disabled:!f,children:n.jsx(P1,{})}),n.jsx(it,{title:"Вперед (Redo)",onClick:B,disabled:!d,children:n.jsx(E1,{})}),n.jsx(it,{title:"Скасувати все",onClick:G,children:n.jsx(G1,{})})]}),n.jsx(X1,{children:n.jsx(A1,{title:"Відкрити панель інструментів",active:o,onClick:p,children:n.jsx(z1,{})})})]})}),n.jsx(T1,{isOpen:h,onClose:s,onSelectField:x,currentFieldId:t.id})]})},W1=b.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,_1=b.div`
  display: grid;
  grid-template-columns: 40px 1fr 80px;
  gap: 8px;
  align-items: center;
`,V1=b.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  
  background-image: 
    linear-gradient(45deg, #ccc 25%, transparent 25%),
    linear-gradient(-45deg, #ccc 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #ccc 75%),
    linear-gradient(-45deg, transparent 75%, #ccc 75%);
  background-size: 12px 12px;
  background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
`,N1=b.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  border: 2px solid ${({theme:t})=>t.lightGreen||"#ccc"};
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    border-radius: 50%;
    z-index: 1;
    background: ${t=>`rgba(${t.$rgbaColor}, ${t.$opacity})`};
  }
`,O1=b.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,q1=b.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,U1=b.input`
  width: 100%;
  padding: 6px 8px;
  border: 1px solid ${({theme:t})=>t.lightGreen||"#ccc"};
  border-radius: 4px;
  font-size: 12px;
  font-family: monospace;
  background: ${({theme:t})=>t.ContainerBGColor||"#fff"};
  color: ${({theme:t})=>t.textBlack||"#333"};
  
  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  }
`,J1=b.span`
  font-size: 10px;
  color: ${({theme:t})=>t.textGray||"#777"};
`,K1=b.div`
  position: relative;
`,Q1=b.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({theme:t})=>t.lightGreen||"#ccc"};
  border-radius: 4px;
  font-size: 12px;
  text-align: center;
  background: ${({theme:t})=>t.ContainerBGColor||"#fff"};
  color: ${({theme:t})=>t.textBlack||"#333"};
  
  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  }
`,tr=b.span`
  font-size: 10px;
  color: ${({theme:t})=>t.textGray||"#777"};
  display: block;
  text-align: center;
  margin-top: 2px;
`,rt=({color:t,opacity:e,onColorChange:o,onOpacityChange:p,label:h})=>{const[c,a]=$.useState(t||"#000000"),[r,y]=$.useState(e||100),[v,m]=$.useState("0, 0, 0, 1"),l=$.useRef(null),g=$.useRef(null),s=(f,d=1)=>{if(!f)return"0, 0, 0, 1";f=f.replace("#",""),f.length===3&&(f=f[0]+f[0]+f[1]+f[1]+f[2]+f[2]);const M=parseInt(f.slice(0,2),16),S=parseInt(f.slice(2,4),16),T=parseInt(f.slice(4,6),16);return`${M}, ${S}, ${T}, ${d}`},x=f=>/^[\d\s,\.]*$/.test(f),u=f=>{const d=f.split(",").map(R=>parseFloat(R.trim()));if(d.length<3||d.some(isNaN))return null;const M=Math.max(0,Math.min(255,d[0]||0)),S=Math.max(0,Math.min(255,d[1]||0)),T=Math.max(0,Math.min(255,d[2]||0)),P=d[3]!==void 0?Math.max(0,Math.min(1,d[3])):1;return{r:M,g:S,b:T,alpha:P}},i=f=>Math.max(0,Math.min(1,f/100)),w=f=>Math.round(Math.max(0,Math.min(100,f*100))),C=()=>{const f=c.replace("#","");let d,M,S;return f.length===3?(d=parseInt(f[0]+f[0],16),M=parseInt(f[1]+f[1],16),S=parseInt(f[2]+f[2],16)):(d=parseInt(f.slice(0,2),16),M=parseInt(f.slice(2,4),16),S=parseInt(f.slice(4,6),16)),`${d}, ${M}, ${S}`};$.useEffect(()=>{a(t||"#000000"),y(e||100);const f=i(e||100);m(s(t||"#000000",f))},[t,e]);const L=f=>{const d=f.target.value,M=i(r);a(d),m(s(d,M)),g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{o&&o(d)},100)},k=f=>{const d=f.target.value;x(d)&&m(d)},z=f=>{const d=f.target.value,M=u(d);if(M){const{r:S,g:T,b:P,alpha:R}=M,H=`${S}, ${T}, ${P}, ${R}`,A=`#${((1<<24)+(S<<16)+(T<<8)+P).toString(16).slice(1)}`,F=w(R);m(H),a(A),y(F),o&&o(A),p&&p(F)}else{const S=i(r);m(s(c,S))}},I=f=>{let d=parseInt(f.target.value);isNaN(d)&&(d=0),d=Math.max(0,Math.min(100,d));const M=i(d);y(d),m(s(c,M))},B=f=>{let d=parseInt(f.target.value);isNaN(d)&&(d=0),d=Math.max(0,Math.min(100,d));const M=i(d);y(d),m(s(c,M)),p&&p(d)},G=()=>{l.current&&l.current.click()};return n.jsxs("div",{children:[h&&n.jsx(W1,{children:h}),n.jsxs(_1,{children:[n.jsxs(V1,{children:[n.jsx(N1,{$rgbaColor:C(),$opacity:r/100,onClick:G}),n.jsx(O1,{ref:l,type:"color",value:c,onChange:L})]}),n.jsxs(q1,{children:[n.jsx(U1,{type:"text",value:v,onChange:k,onBlur:z,placeholder:"0, 0, 0, 1"}),n.jsx(J1,{children:"RGBA"})]}),n.jsxs(K1,{children:[n.jsx(Q1,{type:"number",min:"0",max:"100",value:r,onChange:I,onBlur:B}),n.jsx(tr,{children:"Прозорість %"})]})]})]})},er=b.div`
  position: relative;
  width: 100%;
`,nr=b.button`
  width: 100%;
  padding: 10px 40px 10px 12px;
  background-color: ${({theme:t})=>t.ContainerBGColor};
  border: 1.6px solid ${({theme:t})=>t.greenMain};
  border-radius: 8px;
  color: ${({theme:t})=>t.textBlack};
  font-size: 14px;
  cursor: pointer;
  text-align: left;
  position: relative;
  font-family: ${({$fontFamily:t})=>t||"Arial"};
  transition: border 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${({theme:t})=>t.darkGreen};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:t})=>t.lightGreen};
  }
`,rr=b.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background-color: ${({theme:t})=>t.ContainerBGColor};
  border: 1px solid ${({theme:t})=>t.darkGreen};
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
`,or=b.div`
  padding: 6px 8px;
  font-family: ${({$fontFamily:t})=>t||"Arial"};
  cursor: pointer;
  color: ${({theme:t})=>t.textBlack};
  background-color: ${({selected:t,theme:e})=>t?e.lightGreen:"transparent"};

  &:hover {
    background-color: ${({theme:t})=>t.greenMain};
    color: ${({theme:t})=>t.white};
  }
`,ir=b($n)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) rotate(${({$open:t})=>t?"180deg":"0"});
  width: 20px;
  height: 20px;
  stroke: ${({theme:t})=>t.iconColor};
  transition: transform 0.3s ease;
`,ft=({value:t,onChange:e,options:o=[],placeholder:p="Оберіть..."})=>{const[h,c]=$.useState(!1),a=$.useRef(null),r=()=>c(l=>!l),y=()=>c(!1),v=l=>{e(l),y()};$.useEffect(()=>{const l=g=>{a.current&&!a.current.contains(g.target)&&y()};return document.addEventListener("mousedown",l),()=>document.removeEventListener("mousedown",l)},[]);const m=o.find(l=>l.value===t);return n.jsxs(er,{ref:a,children:[n.jsxs(nr,{onClick:r,$fontFamily:m==null?void 0:m.value,children:[m?m.label:p,n.jsx(ir,{$open:h})]}),h&&n.jsx(rr,{children:o.map(l=>n.jsx(or,{onClick:()=>v(l.value),selected:l.value===t,$fontFamily:l.value,children:l.label},l.value))})]})},ar=b.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:t})=>t.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,sr=b.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:t})=>t.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,at=b.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,pt=b.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,lr=b.textarea`
  width: 100%;
  min-height: 80px;
  padding: 8px;
  border: 1px solid ${({theme:t})=>t.lightGreen||"#ccc"};
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  resize: vertical;
  font-family: ${({$fontFamily:t})=>t||"Arial"};
  line-height: 1.5;
  background: ${({theme:t})=>t.ContainerBGColor||"#fff"};
  color: ${({theme:t})=>t.textBlack||"#333"};
  
  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  }
`,Tt=b.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:t,min:e,max:o,theme:p})=>{const h=(t-e)/(o-e)*100;return`linear-gradient(to right, ${p.greenMain} 0%, ${p.greenMain} ${h}%, ${p.lightGreen} ${h}%, ${p.lightGreen} 100%)`}};
  outline: none;
  margin: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:t})=>t.greenMain};
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
    border: none;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:t})=>t.greenMain};
    cursor: pointer;
    border: none;
  }
`,It=b.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  margin-left: 8px;
`,cr=b.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,_t=b.button`
  padding: 8px 12px;
  border: 1px solid ${({theme:t})=>t.lightGreen||"#ccc"};
  background: ${t=>t.$active?t.theme.greenMain||"#4CAF50":t.theme.ContainerBGColor||"white"};
  color: ${t=>t.$active?"white":t.theme.textBlack||"#333"};
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: ${t=>t.$active?"600":"500"};
  transition: all 0.2s;
  
  &:hover {
    border-color: ${({theme:t})=>t.greenMain||"#4CAF50"};
    background: ${t=>t.$active?t.theme.greenMain||"#4CAF50":t.theme.lightGreen||"#E8F5E9"};
  }
`,dr=({selectedObject:t})=>{const e=dt(),[o,p]=$.useState(t.text||"");$.useEffect(()=>{p(t.text||"")},[t.id]);const h=(r,y)=>{e(ct({id:t.id,updates:{[r]:y}}))},c=r=>{p(r.target.value)},a=()=>{h("text",o)};return n.jsxs(ar,{children:[n.jsx(sr,{children:"Властивості тексту"}),n.jsxs(at,{children:[n.jsx(pt,{children:"Текст"}),n.jsx(lr,{value:o,onChange:c,onBlur:a,placeholder:"Введіть текст...",$fontFamily:t.fontFamily})]}),n.jsx(at,{children:n.jsx(rt,{color:t.color||"#000000",opacity:t.opacity||100,onColorChange:r=>h("color",r),onOpacityChange:r=>h("opacity",r),label:"Колір і прозорість"})}),n.jsxs(at,{children:[n.jsxs(pt,{children:["Розмір шрифту",n.jsxs(It,{children:[t.fontSize||16,"px"]})]}),n.jsx(Tt,{type:"range",min:"8",max:"200",value:t.fontSize||16,onChange:r=>h("fontSize",Number(r.target.value))})]}),n.jsxs(at,{children:[n.jsx(pt,{children:"Тип шрифту"}),n.jsx(ft,{value:t.fontFamily||"Arial",onChange:r=>h("fontFamily",r),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(at,{children:[n.jsx(pt,{children:"Стиль тексту"}),n.jsxs(cr,{children:[n.jsx(_t,{$active:t.fontWeight==="bold",onClick:()=>h("fontWeight",t.fontWeight==="bold"?"normal":"bold"),children:n.jsx("strong",{children:"B"})}),n.jsx(_t,{$active:t.fontStyle==="italic",onClick:()=>h("fontStyle",t.fontStyle==="italic"?"normal":"italic"),children:n.jsx("em",{children:"I"})}),n.jsx(_t,{$active:t.textDecoration==="underline",onClick:()=>h("textDecoration",t.textDecoration==="underline"?"none":"underline"),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(at,{children:[n.jsxs(pt,{children:["Міжрядковий інтервал",n.jsx(It,{children:(t.lineHeight||1.5).toFixed(1)})]}),n.jsx(Tt,{type:"range",min:"0.8",max:"3",step:"0.1",value:t.lineHeight||1.5,onChange:r=>h("lineHeight",Number(r.target.value))})]}),n.jsxs(at,{children:[n.jsxs(pt,{children:["Міжлітерний інтервал",n.jsxs(It,{children:[t.letterSpacing||0,"px"]})]}),n.jsx(Tt,{type:"range",min:"-2",max:"10",step:"0.5",value:t.letterSpacing||0,onChange:r=>h("letterSpacing",Number(r.target.value))})]}),n.jsxs(at,{children:[n.jsxs(pt,{children:["Поворот тексту",n.jsxs(It,{children:[t.rotation||0,"°"]})]}),n.jsx(Tt,{type:"range",min:"-180",max:"180",step:"5",value:t.rotation||0,onChange:r=>h("rotation",Number(r.target.value))})]})]})},hr=b.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:t})=>t.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,pr=b.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:t})=>t.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Le=b.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,gr=b.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,ur=b.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:t,min:e,max:o,theme:p})=>{const h=(t-e)/(o-e)*100;return`linear-gradient(to right, ${p.greenMain} 0%, ${p.greenMain} ${h}%, ${p.lightGreen} ${h}%, ${p.lightGreen} 100%)`}};
  outline: none;
  margin: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:t})=>t.greenMain};
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
    border: none;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:t})=>t.greenMain};
    cursor: pointer;
    border: none;
  }
`,xr=b.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  margin-left: 8px;
`,fr=b.p`
  font-size: 12px;
  color: ${({theme:t})=>t.textGray||"#777"};
  margin: 8px 0 0 0;
  font-style: italic;
`,mr=()=>{const t=dt(),{textColor:e,textOpacity:o,textFontSize:p}=kt(h=>h.tacticsBoard);return n.jsxs(hr,{children:[n.jsx(pr,{children:"Текст"}),n.jsx(Le,{children:n.jsx(rt,{color:e,opacity:o,onColorChange:h=>t(hn(h)),onOpacityChange:h=>t(pn(h)),label:"Колір і прозорість"})}),n.jsxs(Le,{children:[n.jsxs(gr,{children:["Розмір шрифту",n.jsxs(xr,{children:[p,"px"]})]}),n.jsx(ur,{type:"range",min:"8",max:"200",value:p,onChange:h=>t(gn(Number(h.target.value)))})]}),n.jsx(fr,{children:"Клікніть на полі, щоб додати текст."})]})},Cr=b.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:t})=>t.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,yr=b.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:t})=>t.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,st=b.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,lt=b.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,$e=b.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:t,min:e,max:o,theme:p})=>{const h=(t-e)/(o-e)*100;return`linear-gradient(to right, ${p.greenMain} 0%, ${p.greenMain} ${h}%, ${p.lightGreen} ${h}%, ${p.lightGreen} 100%)`}};
  outline: none;
  margin: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:t})=>t.greenMain};
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
    border: none;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:t})=>t.greenMain};
    cursor: pointer;
    border: none;
  }
`,ke=b.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  margin-left: 8px;
`,wr=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,Vt=b.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({theme:t})=>t.lightGreen||"#ccc"};
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  background: ${({theme:t})=>t.ContainerBGColor||"#fff"};
  color: ${({theme:t})=>t.textBlack||"#333"};
  
  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  }
`,yt=8,Mr=({selectedObject:t})=>{const e=dt(),o=(a,r)=>{e(ct({id:t.id,updates:{[a]:r}}))},p=(a,r)=>{let y=Number(r);y<yt&&(y=yt);const v=(t[a]||1)<0?-1:1;y*=v,t.shape==="circle"?e(ct({id:t.id,updates:{width:y,height:y}})):o(a,y)},h=t.shape==="line"||t.shape==="arrow",c=t.shape==="circle";return n.jsxs(Cr,{children:[n.jsx(yr,{children:"Властивості фігури"}),!h&&n.jsxs(st,{children:[n.jsx(lt,{children:c?"Діаметр":"Розміри"}),c?n.jsx(Vt,{type:"number",min:yt,value:Math.abs(t.width||50),onChange:a=>p("width",a.target.value)}):n.jsxs(wr,{children:[n.jsxs("div",{children:[n.jsx(lt,{style:{fontSize:"10px",marginBottom:"4px"},children:"Ширина"}),n.jsx(Vt,{type:"number",min:yt,value:Math.abs(t.width||50),onChange:a=>p("width",a.target.value)})]}),n.jsxs("div",{children:[n.jsx(lt,{style:{fontSize:"10px",marginBottom:"4px"},children:"Висота"}),n.jsx(Vt,{type:"number",min:yt,value:Math.abs(t.height||30),onChange:a=>p("height",a.target.value)})]})]})]}),n.jsxs(st,{children:[n.jsxs(lt,{children:["Кут повороту",n.jsxs(ke,{children:[t.rotation||0,"º"]})]}),n.jsx($e,{type:"range",min:"-180",max:"180",step:"5",value:t.rotation||0,onChange:a=>o("rotation",Number(a.target.value))})]}),n.jsx(st,{children:n.jsx(rt,{color:t.borderColor||t.color||"#000000",opacity:t.borderOpacity!==void 0?t.borderOpacity:100,onColorChange:a=>o("borderColor",a),onOpacityChange:a=>o("borderOpacity",a),label:"Колір обводки і прозорість"})}),n.jsxs(st,{children:[n.jsxs(lt,{children:["Товщина обводки",n.jsxs(ke,{children:[t.borderWidth||2,"px"]})]}),n.jsx($e,{type:"range",min:"1",max:"20",value:t.borderWidth||2,onChange:a=>o("borderWidth",Number(a.target.value))})]}),n.jsxs(st,{children:[n.jsx(lt,{children:"Тип обводки"}),n.jsx(ft,{value:t.borderStyle||"solid",onChange:a=>o("borderStyle",a),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),h&&n.jsxs(n.Fragment,{children:[n.jsxs(st,{children:[n.jsx(lt,{children:"Початок лінії"}),n.jsx(ft,{value:t.lineCapStart||"butt",onChange:a=>o("lineCapStart",a),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Круглий"},{value:"arrow",label:"Стрілка"}],placeholder:"Оберіть тип"})]}),n.jsxs(st,{children:[n.jsx(lt,{children:"Кінець лінії"}),n.jsx(ft,{value:t.shape==="arrow"?"arrow":t.lineCapEnd||"butt",onChange:a=>o("lineCapEnd",a),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Круглий"},{value:"arrow",label:"Стрілка"}],placeholder:"Оберіть тип",disabled:t.shape==="arrow"})]})]}),!h&&n.jsx(st,{children:n.jsx(rt,{color:t.fillColor||"#ffffff",opacity:t.fillOpacity!==void 0?t.fillOpacity:0,onColorChange:a=>o("fillColor",a),onOpacityChange:a=>o("fillOpacity",a),label:"Колір заливки і прозорість"})})]})},br=b.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:t})=>t.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,vr=b.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:t})=>t.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,zt=b.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Se=b.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,Lr=b.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:t,min:e,max:o,theme:p})=>{const h=(t-e)/(o-e)*100;return`linear-gradient(to right, ${p.greenMain} 0%, ${p.greenMain} ${h}%, ${p.lightGreen} ${h}%, ${p.lightGreen} 100%)`}};
  outline: none;
  margin: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:t})=>t.greenMain};
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
    border: none;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:t})=>t.greenMain};
    cursor: pointer;
    border: none;
  }
`,$r=b.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  margin-left: 8px;
`,kr=b.p`
  font-size: 12px;
  color: ${({theme:t})=>t.textGray||"#777"};
  margin: 8px 0 0 0;
  font-style: italic;
`,Sr=()=>{const t=dt(),{shapeBorderColor:e,shapeBorderOpacity:o,shapeFillColor:p,shapeFillOpacity:h,shapeBorderWidth:c,shapeBorderStyle:a,activeTool:r}=kt(v=>v.tacticsBoard),y=r==="shape_line"||r==="shape_arrow";return n.jsxs(br,{children:[n.jsx(vr,{children:"Налаштування фігури"}),n.jsx(zt,{children:n.jsx(rt,{color:e,opacity:o,onColorChange:v=>t(un(v)),onOpacityChange:v=>t(xn(v)),label:y?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(zt,{children:[n.jsxs(Se,{children:[y?"Товщина лінії":"Товщина обводки",n.jsxs($r,{children:[c,"px"]})]}),n.jsx(Lr,{type:"range",min:"1",max:"20",value:c,onChange:v=>t(fn(Number(v.target.value)))})]}),n.jsxs(zt,{children:[n.jsx(Se,{children:"Тип обводки"}),n.jsx(ft,{value:a,onChange:v=>t(mn(v)),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),!y&&n.jsx(zt,{children:n.jsx(rt,{color:p,opacity:h,onColorChange:v=>t(Cn(v)),onOpacityChange:v=>t(yn(v)),label:"Колір заливки і прозорість"})}),n.jsx(kr,{children:y?"Клікніть і потягніть, щоб намалювати лінію.":"Клікніть і потягніть, щоб намалювати фігуру."})]})},wt=b.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:t})=>t.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,Mt=b.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:t})=>t.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,K=b.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,gt=b.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,Be=b.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({theme:t})=>t.lightGreen||"#ccc"};
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  background: ${({theme:t})=>t.ContainerBGColor||"#fff"};
  color: ${({theme:t})=>t.textBlack||"#333"};
  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  }
`,Gt=b.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:t,min:e,max:o,theme:p})=>{const h=(t-e)/(o-e)*100;return`linear-gradient(to right, ${p.greenMain} 0%, ${p.greenMain} ${h}%, ${p.lightGreen} ${h}%, ${p.lightGreen} 100%)`}};
  outline: none;
  margin: 0;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:t})=>t.greenMain};
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
    border: none;
  }
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:t})=>t.greenMain};
    cursor: pointer;
    border: none;
  }
`,Et=b.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Br=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
  margin-top: 10px;
`,Tr=b.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 10px;
  background: ${({theme:t})=>t.ContainerBGColor||"#f5f5f5"}; 
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); 
  border-radius: 8px; 
  border: 1px solid ${({theme:t})=>t.lightGreen||"#e0e0e0"}; 
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`,Ir=b.div`
  width: 30px; 
  height: 45px;
  background: ${({$color:t})=>t};
  border: 2px solid ${({$borderColor:t})=>t}; 
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); 
`,zr=b.div`
  display: flex;
  flex-direction: row; 
  gap: 15px; 
  flex: 1;
  align-items: center;
  justify-content: flex-start; // Вирівняти контролери на початку
`,Te=b.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,Ie=b.input.attrs({type:"color"})`
  width: 25px; 
  height: 25px;
  padding: 0;
  border: none; 
  border-radius: 4px; 
  cursor: pointer;
  background: transparent; 
  flex-shrink: 0;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  &::-webkit-color-swatch {
    border: 1px solid ${({theme:t})=>t.lightGreen||"#ccc"}; 
    border-radius: 4px;
  }
  &::-moz-color-swatch {
    border: 1px solid ${({theme:t})=>t.lightGreen||"#ccc"};
    border-radius: 4px;
  }
`,ze=b.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:t})=>t.textGray||"#666"};
  min-width: 45px; 
`,Gr=b.button`
  width: 35px; 
  height: 35px;
  background: #ff5252; 
  color: ${({theme:t})=>t.white};
  border: none;
  border-radius: 50%; 
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  &:hover {
    background: #e04b4b; 
    transform: scale(1.02);
  }

  svg {
   
    width: 18px; 
    height: 18px;
    fill: none; 
    stroke: currentColor;
    display: block;
  }
`,Er=b.button`
  width: 100%;
  padding: 10px;
  background: ${({theme:t})=>t.greenMain};
  color: ${({theme:t})=>t.white};
  border: none;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: ${({theme:t})=>t.darkGreen};
  }
  &:disabled {
    background: ${({theme:t})=>t.lightGreen};
    cursor: not-allowed;
    opacity: 0.5;
  }
`,Pr=b.span`
  font-size: 10px;
  color: ${({theme:t,$over:e})=>e?t.red:t.textGray};
  margin-top: 4px;
  display: block;
`,Nt=8,Pt=100,bt=3,Rr=({selectedObject:t})=>{const e=dt(),o=(d,M)=>{e(ct({id:t.id,updates:{[d]:M}}))},p=d=>{let M=Number(d);M<Nt&&(M=Nt),o("radius",M)},h=d=>{const M=Math.max(0,Math.min(99,Number(d)||0));o("number",M)},c=d=>{d.length<=Pt&&o("topText",d)},a=()=>{const d=t.cards||[];if(d.length<bt){const M=[...d,{color:"#FFD700",cardBorderColor:"#000000"}];o("cards",M)}},r=d=>{const S=(t.cards||[]).filter((T,P)=>P!==d);o("cards",S)},y=(d,M)=>{const T=[...t.cards||[]];T[d]={...T[d],color:M},o("cards",T)},v=(d,M)=>{const T=[...t.cards||[]];T[d]={...T[d],cardBorderColor:M},o("cards",T)},m=t.radius||20,l=t.number!==void 0?t.number:1,g=t.topText||"",s=t.rotation||0,x=t.color||"#ff0000",u=t.colorOpacity!==void 0?t.colorOpacity:100,i=t.numberColor||"#ffffff",w=t.numberOpacity!==void 0?t.numberOpacity:100,C=t.textColor||"#000000",L=t.textOpacity!==void 0?t.textOpacity:100,k=t.textSize||Math.max(10,m*.5),z=t.borderWidth||2,I=t.borderColor||"#000000",B=t.borderOpacity!==void 0?t.borderOpacity:100,G=t.borderStyle||"solid",f=t.cards||[];return n.jsxs(n.Fragment,{children:[n.jsxs(wt,{children:[n.jsx(Mt,{children:"Розмір та позиція"}),n.jsxs(K,{children:[n.jsxs(gt,{children:["Розмір гравця",n.jsxs(Et,{children:[m,"px"]})]}),n.jsx(Gt,{min:Nt,max:"50",value:m,onChange:d=>p(d.target.value)})]}),n.jsxs(K,{children:[n.jsxs(gt,{children:["Кут повороту",n.jsxs(Et,{children:[s,"º"]})]}),n.jsx(Gt,{min:"-180",max:"180",step:"5",value:s,onChange:d=>o("rotation",Number(d.target.value))})]}),n.jsx(K,{children:n.jsx(rt,{color:x,opacity:u,onColorChange:d=>o("color",d),onOpacityChange:d=>o("colorOpacity",d),label:"Колір гравця"})})]}),n.jsxs(wt,{children:[n.jsx(Mt,{children:"Номер гравця"}),n.jsxs(K,{children:[n.jsx(gt,{children:"Номер гравця (0-99)"}),n.jsx(Be,{type:"number",min:"0",max:"99",value:l,onChange:d=>h(d.target.value)})]}),n.jsx(K,{children:n.jsx(rt,{color:i,opacity:w,onColorChange:d=>o("numberColor",d),onOpacityChange:d=>o("numberOpacity",d),label:"Колір номера"})})]}),n.jsxs(wt,{children:[n.jsx(Mt,{children:"Текст над гравцем"}),n.jsxs(K,{children:[n.jsx(gt,{children:"Текст"}),n.jsx(Be,{type:"text",maxLength:Pt,placeholder:"Введіть текст",value:g,onChange:d=>c(d.target.value)}),n.jsxs(Pr,{$over:g.length>Pt,children:[g.length,"/",Pt," символів"]})]}),g&&n.jsxs(n.Fragment,{children:[n.jsxs(K,{children:[n.jsxs(gt,{children:["Розмір тексту",n.jsxs(Et,{children:[k,"px"]})]}),n.jsx(Gt,{min:"8",max:"40",value:k,onChange:d=>o("textSize",Number(d.target.value))})]}),n.jsx(K,{children:n.jsx(rt,{color:C,opacity:L,onColorChange:d=>o("textColor",d),onOpacityChange:d=>o("textOpacity",d),label:"Колір тексту"})})]})]}),n.jsxs(wt,{children:[n.jsx(Mt,{children:"Обводка"}),n.jsx(K,{children:n.jsx(rt,{color:I,opacity:B,onColorChange:d=>o("borderColor",d),onOpacityChange:d=>o("borderOpacity",d),label:"Колір обводки"})}),n.jsxs(K,{children:[n.jsxs(gt,{children:["Товщина обводки",n.jsxs(Et,{children:[z,"px"]})]}),n.jsx(Gt,{min:"1",max:"10",value:z,onChange:d=>o("borderWidth",Number(d.target.value))})]}),n.jsxs(K,{children:[n.jsx(gt,{children:"Тип обводки"}),n.jsx(ft,{value:G,onChange:d=>o("borderStyle",d),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]}),n.jsxs(wt,{children:[n.jsxs(Mt,{children:["Картки (",f.length,"/",bt,")"]}),f.length>0&&n.jsx(Br,{children:f.map((d,M)=>n.jsxs(Tr,{children:[n.jsx(Ir,{$color:d.color,$borderColor:d.cardBorderColor||"#000000"}),n.jsxs(zr,{children:[n.jsxs(Te,{title:"Колір заливки картки",children:[n.jsx(ze,{children:"Заливка:"}),n.jsx(Ie,{value:d.color,onChange:S=>y(M,S.target.value)})]}),n.jsxs(Te,{title:"Колір обводки картки",children:[n.jsx(ze,{children:"Обводка:"}),n.jsx(Ie,{value:d.cardBorderColor||"#000000",onChange:S=>v(M,S.target.value)})]})]}),n.jsx(Gr,{onClick:()=>r(M),title:"Видалити картку",children:n.jsx(kn,{})})]},M))}),n.jsx(K,{style:{marginTop:f.length>0?"15px":"0"},children:n.jsx(Er,{onClick:a,disabled:f.length>=bt,children:f.length>=bt?`Максимум ${bt} картки`:"Додати картку"})})]})]})},Dr=b(Re)`
  width: 100%;
  height: 100%;
  fill: ${({theme:t})=>t.black};
`,Zr=b.div`
  position: absolute;
  top: 0;
  right: ${t=>t.$isOpen?"0":"-320px"};
  width: 320px;
  height: 100%;
  background: ${({theme:t})=>t.ContainerBGColor||"#fff"};
  border-left: 1px solid ${({theme:t})=>t.lightGreen||"#ccc"};
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 99;
  overflow-y: auto;
  padding-top: 48px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    margin-right: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({theme:t})=>t.lightGreen};
    border-radius: 10px;
    border: 2px solid ${({theme:t})=>t.ContainerBGColor};
  }
`,Yr=b.div`
  padding: 16px;
  height: calc(100% - 48px);
`,Fr=b.button`
  position: absolute;
  top: 12px;
  right: 280px;
  width: 28px;
  height: 28px;
  border: 2px solid ${({theme:t})=>t.greenMain||"#4CAF50"};
  background: ${({theme:t})=>t.lightGreen||"#E8F5E9"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;
  padding: 0;
  z-index: 100;
  
  &:hover {
    border-color: ${({theme:t})=>t.darkGreen||"#2E7D32"};
    background: ${({theme:t})=>t.darkGreen||"#2E7D32"};
    
    svg {
      color: ${({theme:t})=>t.white||"#fff"};
    }
  }
  
  svg {
    color: ${({theme:t})=>t.greenMain||"#4CAF50"};
    transition: color 0.2s;
  }
`,Xr=b.div`
  text-align: center;
  padding: 40px 20px;
  color: ${({theme:t})=>t.textGray||"#999"};
  font-size: 14px;
`,vt=b.button`
  width: 100%;
  padding: 12px;
  margin-top: 16px;
  background: ${({theme:t})=>t.red};
  color: ${({theme:t})=>t.white};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:t})=>t.redDark};
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(251, 69, 102, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: ${({theme:t})=>t.disabledBG};
    color: ${({theme:t})=>t.textGray};
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`,Ar=({isOpen:t,onClose:e})=>{const o=dt(),{activeTool:p,selectedObjectId:h,objects:c,paths:a}=kt(m=>m.tacticsBoard),r=h?h.startsWith("path_")?{...a[parseInt(h.replace("path_",""))],type:"path",id:h}:c.find(m=>m.id===h):null,y=()=>{if(h){if(h.startsWith("path_")){const m=parseInt(h.replace("path_",""));o(wn(m))}else o(Mn(h));o(Lt())}},v=()=>{if(r)switch(r.type){case"text":return n.jsxs(n.Fragment,{children:[n.jsx(dr,{selectedObject:r}),n.jsx(vt,{onClick:y,children:"Видалити текст"})]});case"player":return n.jsxs(n.Fragment,{children:[n.jsx(Rr,{selectedObject:r}),n.jsx(vt,{onClick:y,children:"Видалити гравця"})]});case"path":return n.jsx(vt,{onClick:y,children:"Видалити малюнок"});case"shape":return n.jsxs(n.Fragment,{children:[n.jsx(Mr,{selectedObject:r}),n.jsx(vt,{onClick:y,children:"Видалити фігуру"})]});default:return n.jsx(vt,{onClick:y,children:"Видалити об'єкт"})}switch(p){case"text":return n.jsx(mr,{});case"shape_rectangle":case"shape_circle":case"shape_triangle":case"shape_line":case"shape_arrow":return n.jsx(Sr,{});default:return n.jsxs(Xr,{children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎯"}),n.jsx("p",{children:"Виберіть інструмент або об'єкт"}),n.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px",fontStyle:"italic"},children:"Налаштування з'являться тут"})]})}};return n.jsxs(Zr,{$isOpen:t,children:[n.jsx(Fr,{title:"Закрити панель інструментів",onClick:e,children:n.jsx(Dr,{})}),n.jsx(Yr,{children:v()})]})},Hr=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: ${({theme:t})=>t.mainBGColor};
`,jr=b.div`
  background: ${({theme:t})=>t.ContainerBGColor};
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`,Wr=b.div`
  width: 100%;
`,qr=({theme:t})=>{const{setTitle:e}=bn(),[o,p]=$.useState(!1),[h,c]=$.useState({id:"football_standard",name:"Стандартне футбольне поле",width:105,height:68}),a=v=>{c(v)},r=()=>{p(!o)},y=()=>{p(!1)};return $.useEffect(()=>{e("Тактична дошка")},[e]),n.jsx(vn,{store:Ln,children:n.jsx(Hr,{children:n.jsxs(jr,{children:[n.jsx(j1,{currentField:h,onSelectField:a,isSidebarOpen:o,onToggleSidebar:r}),n.jsx(Wr,{children:n.jsx(Fn,{fieldSize:{width:h.width,height:h.height},fieldType:h.id})}),n.jsx(Ar,{isOpen:o,onClose:y,children:n.jsx("div",{children:"Тут будуть інструменти"})})]})})})};export{qr as default};
