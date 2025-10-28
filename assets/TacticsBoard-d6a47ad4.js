import{r as M,d as v,b as pe,a as ve,_ as jt,$ as Wt,a0 as ye,j as n,a1 as _e,a2 as Ze,a3 as Ne,a4 as be,a5 as te,a6 as Vt,a7 as Me,W as qe,S as _t,a8 as Nt,a9 as qt,aa as Ot,ab as Ut,ac as Jt,ad as Kt,ae as Qt,af as en,ag as tn,ah as nn,ai as rn,aj as on,ak as an,al as sn,am as ln,an as cn,ao as hn,ap as dn,u as pn,aq as gn,ar as un}from"./index-d58ed956.js";import{S as xn}from"./ChevronDownicon-d0a3f67b.js";const K=(e,t)=>{if(e.type==="player"){const s=e.radius||20;return{x:e.x-s,y:e.y-s,width:s*2,height:s*2,centerX:e.x,centerY:e.y}}if(e.type==="ball"){const s=e.radius||10;return{x:e.x-s,y:e.y-s,width:s*2,height:s*2,centerX:e.x,centerY:e.y}}if(e.type==="shape"){if(e.shape==="line"||e.shape==="arrow"){const i=Math.min(e.startX,e.endX),o=Math.max(e.startX,e.endX),m=Math.min(e.startY,e.endY),L=Math.max(e.startY,e.endY);return{x:i,y:m,width:o-i,height:L-m,startX:e.startX,startY:e.startY,endX:e.endX,endY:e.endY,rotation:e.rotation||0}}const s=e.width||50,h=e.height||30,a=s<0?e.x+s:e.x,d=h<0?e.y+h:e.y;if(e.shape==="circle"){const i=Math.max(Math.abs(s),Math.abs(h)),o=e.x+s/2,m=e.y+h/2;return{x:o-i/2,y:m-i/2,width:i,height:i,centerX:o,centerY:m,radius:i/2,originalX:e.x,originalY:e.y,originalWidth:s,originalHeight:h,rotation:e.rotation||0}}return{x:a,y:d,width:Math.abs(s),height:Math.abs(h),originalX:e.x,originalY:e.y,originalWidth:s,originalHeight:h,rotation:e.rotation||0}}if(e.type==="figure"){const s=e.size||30;return{x:e.x-s/2,y:e.y-s/2,width:s,height:s,centerX:e.x,centerY:e.y}}if(e.type==="path"){if(!e.points||e.points.length===0)return null;let s=e.points[0].x,h=e.points[0].y,a=e.points[0].x,d=e.points[0].y;return e.points.forEach(i=>{s=Math.min(s,i.x),h=Math.min(h,i.y),a=Math.max(a,i.x),d=Math.max(d,i.y)}),{x:s,y:h,width:a-s,height:d-h,points:e.points,centerX:(s+a)/2,centerY:(h+d)/2}}if(e.type==="text"){if(t){const a=t.getContext("2d"),d=e.fontWeight||"normal",i=e.fontStyle||"normal",o=e.fontSize||16,m=e.fontFamily||"Arial";a.font=`${i} ${d} ${o}px ${m}`;const L=(e.text||"").split(`
`),y=(e.lineHeight||1.5)*o,c=e.letterSpacing||0;let p=0;L.forEach(u=>{let r=a.measureText(u).width;c!==0&&(r+=c*(u.length-1)),r>p&&(p=r)});const l=L.length*y;return{x:e.x,y:e.y,width:p,height:l,centerX:e.x+p/2,centerY:e.y+l/2}}const s=e.width||100,h=e.height||20;return{x:e.x,y:e.y,width:s,height:h,centerX:e.x+s/2,centerY:e.y+h/2}}return null},Oe=(e,t,s,h=10,a)=>{const d=K(s,a);if(!d)return!1;if(s.type==="path"){const i=Math.max(h,10);for(let o=0;o<s.points.length-1;o++){const m=s.points[o],L=s.points[o+1],y=L.x-m.x,c=L.y-m.y,p=Math.sqrt(y*y+c*c);if(p===0)continue;const l=Math.max(0,Math.min(1,((e-m.x)*y+(t-m.y)*c)/(p*p))),u=m.x+l*y,g=m.y+l*c;if(Math.sqrt(Math.pow(e-u,2)+Math.pow(t-g,2))<=i)return!0}return!1}if(s.type==="shape"&&(s.shape==="line"||s.shape==="arrow")){const o=d.endX-d.startX,m=d.endY-d.startY,L=Math.sqrt(o*o+m*m);if(L===0)return!1;const y=Math.max(0,Math.min(1,((e-d.startX)*o+(t-d.startY)*m)/(L*L))),c=d.startX+y*o,p=d.startY+y*m;return Math.sqrt(Math.pow(e-c,2)+Math.pow(t-p,2))<=10}if(s.type==="shape"&&s.shape==="circle"){const i=d.centerX||d.x+d.width/2,o=d.centerY||d.y+d.height/2,m=d.radius||Math.max(d.width,d.height)/2;return Math.sqrt(Math.pow(e-i,2)+Math.pow(t-o,2))<=m}if(s.type==="shape"&&s.shape==="triangle"){const i=d.originalX+d.originalWidth/2,o=d.originalY,m=d.originalX,L=d.originalY+d.originalHeight,y=d.originalX+d.originalWidth,c=d.originalY+d.originalHeight,p=(L-c)*(i-y)+(y-m)*(o-c),l=((L-c)*(e-y)+(y-m)*(t-c))/p,u=((c-o)*(e-y)+(i-y)*(t-c))/p,g=1-l-u;return l>=0&&l<=1&&u>=0&&u<=1&&g>=0&&g<=1}if(s.type==="shape"&&s.shape==="rectangle"){const i=d.originalX!==void 0?d.originalX:d.x,o=d.originalY!==void 0?d.originalY:d.y,m=d.originalWidth!==void 0?d.originalWidth:d.width,L=d.originalHeight!==void 0?d.originalHeight:d.height,y=m<0?i+m:i,c=m<0?i:i+m,p=L<0?o+L:o,l=L<0?o:o+L;return e>=y&&e<=c&&t>=p&&t<=l}return s.type==="text",e>=d.x&&e<=d.x+d.width&&t>=d.y&&t<=d.y+d.height},Ue=(e,t,s)=>s?e>=s.x&&e<=s.x+s.width&&t>=s.y&&t<=s.y+s.height:!1,vt=(e,t)=>t&&t.type==="shape"&&(t.shape==="line"||t.shape==="arrow")?{start:{x:e.startX,y:e.startY,cursor:"crosshair"},end:{x:e.endX,y:e.endY,cursor:"crosshair"}}:t&&t.type==="path"?{}:t&&t.type==="text"?{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"},top:{x:e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.y+e.height/2,cursor:"ew-resize"}}:t&&(t.type==="player"||t.type==="ball"||t.type==="figure")?{top:{x:e.centerX||e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.centerX||e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.centerY||e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.centerY||e.y+e.height/2,cursor:"ew-resize"}}:{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"},top:{x:e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.y+e.height/2,cursor:"ew-resize"}},Je=(e,t,s,h)=>{const a=vt(s,h),d=8;for(const[i,o]of Object.entries(a))if(h&&h.type==="shape"&&(h.shape==="line"||h.shape==="arrow")){if(Math.sqrt(Math.pow(e-o.x,2)+Math.pow(t-o.y,2))<=d*2)return{name:i,...o}}else if(Math.abs(e-o.x)<=d&&Math.abs(t-o.y)<=d)return{name:i,...o};return null},bt=(e,t,s,h,a,d)=>{for(let i=s.length-1;i>=0;i--)if(Oe(e,t,s[i],a,d))return s[i];for(let i=h.length-1;i>=0;i--){const o={...h[i],type:"path",id:`path_${i}`};if(Oe(e,t,o,a,d))return o}return null},fn=(e,t,s,h,a,d,i,o,m)=>{e.save(),e.strokeStyle=o,e.lineWidth=m,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t,s),e.lineTo(h,a),e.lineTo(d,i),e.stroke(),e.restore()},mn=(e,t,s,h,a,d,i,o,m=0,L=0)=>{const y=h-t,c=a-s,p=Math.sqrt(y*y+c*c);if(p===0)return;const l=y/p,u=c/p,g=m,r=L,x=p-g-r;if(x<=0)return;const C=t+l*g,b=s+u*g;if(e.strokeStyle=o,e.lineWidth=i,e.lineCap="butt",d==="dashed"){const $=Math.max(i*3,12),E=Math.max(i*2,8),S=$+E,B=Math.floor(x/S);if(B===0){const Y=(x-$)/2;if(Y>=0){const D=C+l*Y,H=b+u*Y,j=C+l*(Y+$),X=b+u*(Y+$);e.beginPath(),e.moveTo(D,H),e.lineTo(j,X),e.stroke()}return}const f=(x-B*$)/B,w=$+f,k=B*w-f,Z=(x-k)/2;e.setLineDash([$,f]),e.lineDashOffset=-Z,e.beginPath(),e.moveTo(C,b),e.lineTo(h-l*r,a-u*r),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}else if(d==="dotted"){const $=Math.max(i*2.5,10),E=i/2,S=Math.max(2,Math.floor(x/$)+1),B=x/(S-1);e.fillStyle=o;for(let z=0;z<S;z++){const f=z*B,w=C+l*f,k=b+u*f;e.beginPath(),e.arc(w,k,E,0,Math.PI*2),e.fill()}}},Ke=(e,t,s,h,a)=>{if(t.length<2)return;let d=0;const i=[],o=t.length;for(let p=0;p<o;p++){const l=t[p],u=t[(p+1)%o],g=u.x-l.x,r=u.y-l.y,x=Math.sqrt(g*g+r*r);i.push(x),d+=x}if(d<20){e.strokeStyle=a,e.lineWidth=h,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let p=1;p<t.length;p++)e.lineTo(t[p].x,t[p].y);e.closePath(),e.stroke();return}const m=Math.max(h*2.5,Math.min(h*4,d/25)),L=Math.max(h*1.5,m*.5),y=m+L,c=m*.7;if(s==="dotted"){const p=h/2,l=Math.max(h*2,d/60);e.fillStyle=a;for(let u=0;u<o;u++){const g=t[u];e.beginPath(),e.arc(g.x,g.y,p,0,Math.PI*2),e.fill()}for(let u=0;u<o;u++){const g=t[u],r=i[u];if(r<=0)continue;const x=t[(u+1)%o].x-g.x,C=t[(u+1)%o].y-g.y,b=x/r,$=C/r,E=1,S=Math.floor(r/l)+1,B=Math.max(E,S-1),z=r/B;for(let f=1;f<B;f++){const w=f*z,k=g.x+b*w,T=g.y+$*w;e.beginPath(),e.arc(k,T,p,0,Math.PI*2),e.fill()}}}else if(s==="dashed"){e.strokeStyle=a,e.lineWidth=h,e.lineCap="butt";for(let p=0;p<o;p++){const l=t[p],u=t[p===0?o-1:p-1],g=t[(p+1)%o],r=i[p===0?o-1:p-1],x=i[p];if(r>0&&x>0){const C=u.x-l.x,b=u.y-l.y,$=g.x-l.x,E=g.y-l.y,S=Math.min(r,x)/3,B=Math.min(c,S),z=l.x+C/r*B,f=l.y+b/r*B,w=l.x+$/x*B,k=l.y+E/x*B;fn(e,z,f,l.x,l.y,w,k,a,h)}}for(let p=0;p<o;p++){const l=t[p],u=t[(p+1)%o],g=i[p];if(g===0)continue;const r=u.x-l.x,x=u.y-l.y,C=r/g,b=x/g,$=i[p===0?o-1:p-1],E=g,S=i[(p+1)%o],B=Math.min($,E)/3,z=Math.min(c,B),f=Math.min(E,S)/3,w=Math.min(c,f),k=g-z-w;if(k<=m/2)continue;const T=l.x+C*z,Z=l.y+b*z,Y=Math.floor(k/y);if(Y===0){const F=k/2-m/2;if(F>=0){const A=T+C*F,q=Z+b*F,N=T+C*(F+m),O=Z+b*(F+m);e.beginPath(),e.moveTo(A,q),e.lineTo(N,O),e.stroke()}continue}const H=(k-Y*m)/Y,j=m+H,X=Y*j-H,V=(k-X)/2;e.setLineDash([m,H]),e.lineDashOffset=-V,e.beginPath(),e.moveTo(T,Z),e.lineTo(u.x-C*w,u.y-b*w),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}}},Qe=(e,t,s,h,a,d,i,o,m)=>{if(a==="butt")return 0;const L=i.replace("#",""),y=parseInt(L.slice(0,2),16),c=parseInt(L.slice(2,4),16),p=parseInt(L.slice(4,6),16);e.fillStyle=`rgba(${y}, ${c}, ${p}, ${o})`,e.strokeStyle=`rgba(${y}, ${c}, ${p}, ${o})`,e.save(),e.translate(t,s),e.rotate(h);let l=0;return a==="round"?(e.lineWidth=m,e.lineCap="round",e.beginPath(),e.moveTo(-m/2,0),e.lineTo(0,0),e.stroke(),l=0):a==="arrow"?(e.beginPath(),e.moveTo(0,0),e.lineTo(-d,-d*.5),e.lineTo(-d,d*.5),e.closePath(),e.fill(),l=d):a==="circle"?(e.beginPath(),e.arc(0,0,d*.4,0,Math.PI*2),e.fill(),l=d*.4):a==="bar"&&(e.lineWidth=m,e.lineCap="butt",e.beginPath(),e.moveTo(0,-d*.5),e.lineTo(0,d*.5),e.stroke(),l=0),e.restore(),l},et=(e,t,s=!1)=>{if(e.save(),t.rotation){const x=t.x,C=t.y;e.translate(x,C),e.rotate(t.rotation*Math.PI/180),e.translate(-x,-C)}const h=t.fontWeight||"normal",a=t.fontStyle||"normal",d=t.fontSize||16,i=t.fontFamily||"Arial";e.font=`${a} ${h} ${d}px ${i}`,e.textAlign="left",e.textBaseline="top";const o=t.opacity!==void 0?t.opacity/100:1,L=(t.color||"#000000").replace("#",""),y=parseInt(L.slice(0,2),16),c=parseInt(L.slice(2,4),16),p=parseInt(L.slice(4,6),16);e.fillStyle=`rgba(${y}, ${c}, ${p}, ${o})`;const l=(t.text||"").split(`
`),u=(t.lineHeight||1.5)*d,g=t.letterSpacing||0;let r=0;if(l.forEach((x,C)=>{const b=t.y+C*u;if(g!==0){let $=t.x;for(let S=0;S<x.length;S++){const B=x[S];e.fillText(B,$,b);const z=e.measureText(B).width;$+=z+g}const E=e.measureText(x).width+g*(x.length-1);E>r&&(r=E)}else{e.fillText(x,t.x,b);const $=e.measureText(x).width;$>r&&(r=$)}if(t.textDecoration==="underline"){const $=g!==0?e.measureText(x).width+g*(x.length-1):e.measureText(x).width;e.beginPath(),e.moveTo(t.x,b+d),e.lineTo(t.x+$,b+d),e.strokeStyle=e.fillStyle,e.lineWidth=Math.max(1,d/16),e.stroke()}}),s){const x=l.length*u;e.fillStyle="rgba(255, 215, 0, 0.2)",e.fillRect(t.x-2,t.y-2,r+4,x+4),e.strokeStyle="#FFD700",e.lineWidth=2,e.setLineDash([5,5]),e.strokeRect(t.x-2,t.y-2,r+4,x+4),e.setLineDash([])}return e.restore(),t},tt=(e,t,s=!1)=>{if(!(t.points.length<2)){e.strokeStyle=t.color,e.lineWidth=t.brushSize,e.lineCap="round",e.lineJoin="round",s&&(e.shadowColor="#FFD700",e.shadowBlur=10),e.beginPath(),e.moveTo(t.points[0].x,t.points[0].y);for(let h=1;h<t.points.length;h++)e.lineTo(t.points[h].x,t.points[h].y);e.stroke(),e.shadowBlur=0}},nt=(e,t,s=!1)=>{const h=t.radius||20;e.fillStyle=t.color,e.beginPath(),e.arc(t.x,t.y,h,0,Math.PI*2),e.fill(),s&&(e.strokeStyle="#FFD700",e.lineWidth=3,e.stroke()),e.fillStyle="white",e.font=`bold ${Math.floor(h*.7)}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(t.number,t.x,t.y)},rt=(e,t,s=!1)=>{const h=t.radius||10;e.fillStyle="white",e.strokeStyle="black",e.lineWidth=2,e.beginPath(),e.arc(t.x,t.y,h,0,Math.PI*2),e.fill(),e.stroke(),e.beginPath(),e.arc(t.x-h/3,t.y-h/3,h/3,0,Math.PI*2),e.fillStyle="black",e.fill(),s&&(e.strokeStyle="#FFD700",e.lineWidth=3,e.beginPath(),e.arc(t.x,t.y,h+2,0,Math.PI*2),e.stroke())},it=(e,t,s=!1,h="#000")=>{if(e.save(),t.rotation)if(t.shape==="line"||t.shape==="arrow"){const l=(t.startX+t.endX)/2,u=(t.startY+t.endY)/2;e.translate(l,u),e.rotate(t.rotation*Math.PI/180),e.translate(-l,-u)}else{const l=t.x+(t.width||50)/2,u=t.y+(t.height||30)/2;e.translate(l,u),e.rotate(t.rotation*Math.PI/180),e.translate(-l,-u)}const a=t.borderColor||t.color||h,d=t.borderOpacity!==void 0?t.borderOpacity/100:1,i=t.borderWidth||2,o=t.borderStyle||"solid",m=a.replace("#",""),L=parseInt(m.slice(0,2),16),y=parseInt(m.slice(2,4),16),c=parseInt(m.slice(4,6),16),p=`rgba(${L}, ${y}, ${c}, ${d})`;if(e.strokeStyle=p,e.lineWidth=i,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),s&&(e.strokeStyle="#FFD700",e.lineWidth=i+2),t.shape==="line"||t.shape==="arrow"){const l=t.endX-t.startX,u=t.endY-t.startY,g=Math.atan2(u,l),r=t.lineCapStart||"butt",x=t.lineCapEnd||(t.shape==="arrow"?"arrow":"butt"),C=Math.max(i*2.5,10);let b=0;r==="arrow"?b=C:r==="circle"?b=C*.4:(r==="round"||r==="bar")&&(b=0);let $=0;x==="arrow"?$=C:x==="circle"?$=C*.4:(x==="round"||x==="bar")&&($=0);const E=t.startX+Math.cos(g)*b,S=t.startY+Math.sin(g)*b,B=t.endX-Math.cos(g)*$,z=t.endY-Math.sin(g)*$;!s&&(o==="dashed"||o==="dotted")?mn(e,t.startX,t.startY,t.endX,t.endY,o,i,p,b,$):(e.lineCap="butt",e.beginPath(),e.moveTo(E,S),e.lineTo(B,z),e.stroke()),s||(r!=="butt"&&Qe(e,t.startX,t.startY,g+Math.PI,r,C,a,d,i),x!=="butt"&&Qe(e,t.endX,t.endY,g,x,C,a,d,i))}else{const l=t.x,u=t.y,g=t.width||50,r=t.height||30,x=10,C=Math.abs(g)<x?g<0?-x:x:g,b=Math.abs(r)<x?r<0?-x:x:r,$=t.fillColor||"#ffffff",E=t.fillOpacity!==void 0?t.fillOpacity/100:0;if(E>0){const S=$.replace("#",""),B=parseInt(S.slice(0,2),16),z=parseInt(S.slice(2,4),16),f=parseInt(S.slice(4,6),16);if(e.fillStyle=`rgba(${B}, ${z}, ${f}, ${E})`,e.beginPath(),t.shape==="rectangle")e.rect(l,u,C,b);else if(t.shape==="circle"){const w=Math.max(Math.abs(C),Math.abs(b))/2,k=l+C/2,T=u+b/2;e.arc(k,T,w,0,Math.PI*2)}else t.shape==="triangle"&&(e.moveTo(l+C/2,u),e.lineTo(l,u+b),e.lineTo(l+C,u+b),e.closePath());e.fill()}if(!s&&(o==="dashed"||o==="dotted")){if(t.shape==="rectangle"){const S=[{x:l,y:u},{x:l+C,y:u},{x:l+C,y:u+b},{x:l,y:u+b}];Ke(e,S,o,i,p)}else if(t.shape==="triangle"){const S=[{x:l+C/2,y:u},{x:l,y:u+b},{x:l+C,y:u+b}];Ke(e,S,o,i,p)}else if(t.shape==="circle"){const S=Math.max(Math.abs(C),Math.abs(b))/2,B=l+C/2,z=u+b/2,f=2*Math.PI*S,w=Math.max(i*2.5,Math.min(i*4,f/25)),k=Math.max(i*1.5,w*.5),T=w+k;if(f<30)e.strokeStyle=p,e.lineWidth=i,e.beginPath(),e.arc(B,z,S,0,Math.PI*2),e.stroke();else if(o==="dashed"){const Z=Math.floor(f/T);if(Z===0)e.strokeStyle=p,e.lineWidth=i,e.beginPath(),e.arc(B,z,S,0,Math.PI*2),e.stroke();else{const D=(f-Z*w)/Z,H=(w+D)/S,j=w/S,X=w+D,_=Z*X-D,A=(f-_)/2/S;e.strokeStyle=p,e.lineWidth=i,e.lineCap="butt";for(let q=0;q<Z;q++){const N=A+q*H,O=N+j;e.beginPath(),e.arc(B,z,S,N,O),e.stroke()}}}else if(o==="dotted"){const Z=i/2,Y=Math.max(i*2,f/60),D=Math.max(8,Math.round(f/Y)),H=2*Math.PI/D;e.fillStyle=p;for(let j=0;j<D;j++){const X=j*H,_=B+S*Math.cos(X),V=z+S*Math.sin(X);e.beginPath(),e.arc(_,V,Z,0,Math.PI*2),e.fill()}}}}else{if(e.beginPath(),t.shape==="rectangle"){const S=t.x,B=t.y,z=t.width||50,f=t.height||30,w=10,k=Math.abs(z)<w?z<0?-w:w:z,T=Math.abs(f)<w?f<0?-w:w:f;e.rect(S,B,k,T)}else if(t.shape==="circle"){const S=t.x,B=t.y,z=t.width||50,f=t.height||30,w=z,k=f,T=Math.max(Math.abs(w),Math.abs(k))/2,Z=S+w/2,Y=B+k/2;e.arc(Z,Y,T,0,Math.PI*2)}else if(t.shape==="triangle"){const S=t.x,B=t.y,z=t.width||50,f=t.height||30,w=z,k=f;e.moveTo(S+w/2,B),e.lineTo(S,B+k),e.lineTo(S+w,B+k),e.closePath()}e.stroke()}}e.restore()},ot=(e,t,s=!1)=>{const h=t.size||30;e.font=`${h}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(t.icon,t.x,t.y),s&&(e.strokeStyle="#FFD700",e.lineWidth=3,e.strokeRect(t.x-h/2,t.y-h/2,h,h))},at=(e,t)=>{e.strokeStyle="#FFD700",e.lineWidth=2,e.setLineDash([5,5]),e.strokeRect(t.x,t.y,t.width,t.height),e.setLineDash([])},Cn=(e,t,s)=>{const h=vt(t,s),a=8;e.fillStyle="white",e.strokeStyle="#FFD700",e.lineWidth=2,Object.entries(h).forEach(([d,i])=>{e.fillRect(i.x-a/2,i.y-a/2,a,a),e.strokeRect(i.x-a/2,i.y-a/2,a,a)})},wn=(e,t,s,h,a,d,i,o,m)=>{e.save(),e.strokeStyle=o,e.lineWidth=m,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t,s),e.lineTo(h,a),e.lineTo(d,i),e.stroke(),e.restore()},st=(e,t,s,h,a)=>{if(t.length<2)return;let d=0;const i=[];for(let c=0;c<t.length;c++){const p=t[c],l=t[(c+1)%t.length],u=l.x-p.x,g=l.y-p.y,r=Math.sqrt(u*u+g*g);i.push(r),d+=r}const o=Math.max(h*2.5,Math.min(h*4,d/25)),m=Math.max(h*1.5,o*.5),L=o+m,y=o*.7;if(s==="dotted"){const c=h/2,p=Math.max(h*2,d/60),l=Math.max(t.length*3,Math.round(d/p));e.fillStyle=a;const u=d/l;for(let g=0;g<l;g++){const r=g*u;let x=0;for(let C=0;C<t.length;C++){const b=t[C],$=t[(C+1)%t.length],E=i[C];if(x+E>=r){const B=(r-x)/E,z=b.x+($.x-b.x)*B,f=b.y+($.y-b.y)*B;e.beginPath(),e.arc(z,f,c,0,Math.PI*2),e.fill();break}x+=E}}}else if(s==="dashed"){e.strokeStyle=a,e.lineWidth=h,e.lineCap="butt";for(let c=0;c<t.length;c++){const p=t[c],l=t[c===0?t.length-1:c-1],u=t[(c+1)%t.length],g=i[c===0?t.length-1:c-1],r=i[c];if(g>0&&r>0){const x=l.x-p.x,C=l.y-p.y,b=u.x-p.x,$=u.y-p.y,E=Math.min(g,r)/3,S=Math.min(y,E),B=p.x+x/g*S,z=p.y+C/g*S,f=p.x+b/r*S,w=p.y+$/r*S;wn(e,B,z,p.x,p.y,f,w,a,h)}}for(let c=0;c<t.length;c++){const p=t[c],l=t[(c+1)%t.length],u=i[c];if(u===0)continue;const g=l.x-p.x,r=l.y-p.y,x=g/u,C=r/u,b=i[c===0?t.length-1:c-1],$=u,E=i[(c+1)%t.length],S=Math.min(b,$)/3,B=Math.min(y,S),z=Math.min($,E)/3,f=Math.min(y,z),w=u-B-f;if(w<=o/2)continue;const k=p.x+x*B,T=p.y+C*B,Z=Math.floor(w/L);if(Z===0){const V=w/2-o/2;if(V>=0){const F=k+x*V,A=T+C*V,q=k+x*(V+o),N=T+C*(V+o);e.beginPath(),e.moveTo(F,A),e.lineTo(q,N),e.stroke()}continue}const D=(w-Z*o)/Z,H=o+D,j=Z*H-D,_=(w-j)/2;e.setLineDash([o,D]),e.lineDashOffset=-_,e.beginPath(),e.moveTo(k,T),e.lineTo(l.x-x*f,l.y-C*f),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}}},yn=e=>{const t=M.useRef(null),s=M.useRef(null),h=M.useCallback(o=>{if(!o)return;const m=o.getContext("2d");m.clearRect(0,0,o.width,o.height),m.fillStyle="white",m.fillRect(0,0,o.width,o.height)},[]),a=M.useCallback((o,m,L,y,c,p)=>{const l=e.current;if(!l)return;h(l);const u=l.getContext("2d");let g=null,r=-1;if(L&&L.startsWith("path_")){r=parseInt(L.replace("path_",""));const b=o[r];b&&(g=s.current&&s.current.id===L?s.current:b)}o.forEach((b,$)=>{if(b.points.length<2||$===r)return;const E=s.current&&s.current.id===`path_${$}`?s.current:b;tt(u,E,!1)});const x=t.current?m.map(b=>b.id===t.current.id?t.current:b):m;let C=null;if(L&&!L.startsWith("path_")&&(C=x.find(b=>b.id===L)),x.forEach(b=>{if(b.id!==L){switch(u.save(),b.type){case"player":nt(u,b,!1);break;case"ball":rt(u,b,!1);break;case"shape":it(u,b,!1,c);break;case"figure":ot(u,b,!1);break;case"text":et(u,b,!1);break}u.restore()}}),g){tt(u,g,!0);const b={...g,type:"path",id:L},$=K(b,l);$&&at(u,$)}if(C){switch(u.save(),C.type){case"player":nt(u,C,!0);break;case"ball":rt(u,C,!0);break;case"shape":it(u,C,!0,c);break;case"figure":ot(u,C,!0);break;case"text":et(u,C,!0);break}if(u.restore(),y==="cursor"){const b=K(C,l);b&&(at(u,b),Cn(u,b,C))}}},[e,h]),d=M.useCallback((o,m,L)=>{if(o.length<2)return;const y=e.current;if(!y)return;const c=y.getContext("2d"),p=o;c.strokeStyle=m,c.lineWidth=L,c.lineCap="round",c.lineJoin="round",c.setLineDash([]),c.beginPath(),c.moveTo(p[p.length-2].x,p[p.length-2].y),c.lineTo(p[p.length-1].x,p[p.length-1].y),c.stroke()},[e]),i=M.useCallback((o,m,L,y,c,p=2,l="#ffffff",u=0)=>{const g=e.current;if(!g)return;const r=g.getContext("2d"),x=m.x,C=m.y,b=y.replace("#",""),$=parseInt(b.slice(0,2),16),E=parseInt(b.slice(2,4),16),S=parseInt(b.slice(4,6),16),B=`rgba(${$}, ${E}, ${S}, 1)`;r.strokeStyle=B,r.lineWidth=p,r.lineCap="butt",r.lineJoin="miter",r.setLineDash([]);const z=(f,w,k,T)=>{const Z=k-f,Y=T-w,D=Math.sqrt(Z*Z+Y*Y);if(D===0)return;const H=Z/D,j=Y/D,_=Math.max(p*2.5,Math.min(p*4,D/25)),V=Math.max(p*1.5,_*.5),F=_+V;if(c==="dashed"){const A=Math.floor(D/F);if(A===0){const U=(D-_)/2;if(U>=0){const ie=f+H*U,Se=w+j*U,xe=f+H*(U+_),Be=w+j*(U+_);r.beginPath(),r.moveTo(ie,Se),r.lineTo(xe,Be),r.stroke()}return}const N=(D-A*_)/numSegments,O=_+N,ne=A*O-N,Q=(D-ne)/2;r.setLineDash([_,N]),r.lineDashOffset=-Q,r.beginPath(),r.moveTo(f,w),r.lineTo(k,T),r.stroke(),r.setLineDash([]),r.lineDashOffset=0}else if(c==="dotted"){const A=Math.max(p*2,D/30),q=p/2,N=Math.max(2,Math.floor(D/A)+1),O=D/(N-1);r.fillStyle=B;for(let ne=0;ne<N;ne++){const re=ne*O,Q=f+H*re,U=w+j*re;r.beginPath(),r.arc(Q,U,q,0,Math.PI*2),r.fill()}}};if(o==="line"||o==="arrow"){if(c==="dashed"||c==="dotted"?z(x,C,L.x,L.y):(r.beginPath(),r.moveTo(x,C),r.lineTo(L.x,L.y),r.stroke()),o==="arrow"){const f=L.x-x,w=L.y-C,k=Math.atan2(w,f),T=Math.max(p*2.5,10);r.fillStyle=B,r.beginPath(),r.moveTo(L.x,L.y),r.lineTo(L.x-T*Math.cos(k-Math.PI/6),L.y-T*Math.sin(k-Math.PI/6)),r.lineTo(L.x-T*Math.cos(k+Math.PI/6),L.y-T*Math.sin(k+Math.PI/6)),r.closePath(),r.fill()}r.fillStyle="#FFD700",r.beginPath(),r.arc(x,C,4,0,Math.PI*2),r.fill()}else{const f=L.x-x,w=L.y-C;if(u>0){const k=l.replace("#",""),T=parseInt(k.slice(0,2),16),Z=parseInt(k.slice(2,4),16),Y=parseInt(k.slice(4,6),16),D=u/100;if(r.fillStyle=`rgba(${T}, ${Z}, ${Y}, ${D})`,r.beginPath(),o==="rectangle")r.rect(x,C,f,w);else if(o==="circle"){const H=Math.max(Math.abs(f),Math.abs(w))/2,j=x+f/2,X=C+w/2;r.arc(j,X,H,0,Math.PI*2)}else o==="triangle"&&(r.moveTo(x+f/2,C),r.lineTo(x,C+w),r.lineTo(x+f,C+w),r.closePath());r.fill()}if(c==="dashed"||c==="dotted"){if(o==="rectangle"){const k=[{x,y:C},{x:x+f,y:C},{x:x+f,y:C+w},{x,y:C+w}];st(r,k,c,p,B)}else if(o==="triangle"){const k=[{x:x+f/2,y:C},{x,y:C+w},{x:x+f,y:C+w}];st(r,k,c,p,B)}else if(o==="circle"){const k=Math.max(Math.abs(f),Math.abs(w))/2,T=x+f/2,Z=C+w/2,Y=2*Math.PI*k,D=Math.max(p*2.5,Math.min(p*4,Y/25)),H=Math.max(p*1.5,D*.5),j=D+H;if(c==="dashed"){const X=Math.floor(Y/j);if(X===0)r.strokeStyle=B,r.lineWidth=p,r.beginPath(),r.arc(T,Z,k,0,Math.PI*2),r.stroke();else{const V=(Y-X*D)/X,F=(D+V)/k,A=D/k,q=D+V,N=X*q-V,re=(Y-N)/2/k;for(let Q=0;Q<X;Q++){const U=re+Q*F,ie=U+A;r.beginPath(),r.arc(T,Z,k,U,ie),r.stroke()}}}else{const X=p/2,_=Math.max(p*2,Y/40),V=Math.max(8,Math.round(Y/_)),F=2*Math.PI/V;r.fillStyle=B;for(let A=0;A<V;A++){const q=A*F,N=T+k*Math.cos(q),O=Z+k*Math.sin(q);r.beginPath(),r.arc(N,O,X,0,Math.PI*2),r.fill()}}}}else{if(r.beginPath(),o==="rectangle")r.rect(x,C,f,w);else if(o==="circle"){const k=Math.max(Math.abs(f),Math.abs(w))/2,T=x+f/2,Z=C+w/2;r.arc(T,Z,k,0,Math.PI*2)}else o==="triangle"&&(r.moveTo(x+f/2,C),r.lineTo(x,C+w),r.lineTo(x+f,C+w),r.closePath());r.stroke()}}r.setLineDash([])},[e]);return{redraw:a,clearCanvas:h,drawLivePath:d,drawPreviewShape:i,tempObjectDataRef:t,tempPathDataRef:s}},Mn=()=>{const e=M.useRef(null),t=M.useRef({x:0,y:0}),[s,h]=M.useState("default");return{draggedObjectRef:e,dragOffsetRef:t,cursorStyle:s,setCursorStyle:h,startDrag:(y,c,p)=>{if(e.current={...y},y.type==="path"){const l=K(y,p);t.current={x:c.x-l.points[0].x,y:c.y-l.points[0].y}}else if(y.type==="shape"&&(y.shape==="line"||y.shape==="arrow")){const l=(y.startX+y.endX)/2,u=(y.startY+y.endY)/2;t.current={x:c.x-l,y:c.y-u}}else if(y.x!==void 0&&y.y!==void 0)t.current={x:c.x-y.x,y:c.y-y.y};else{const l=K(y,p);l.centerX!==void 0?t.current={x:c.x-l.centerX,y:c.y-l.centerY}:t.current={x:c.x-l.x,y:c.y-l.y}}},updateDragPosition:y=>{if(!e.current)return null;let c={...e.current};if(c.type==="path"){const p=y.x-t.current.x-c.points[0].x,l=y.y-t.current.y-c.points[0].y;c.points=c.points.map(u=>({x:u.x+p,y:u.y+l}))}else if(c.type==="shape"&&(c.shape==="line"||c.shape==="arrow")){const p=(c.startX+c.endX)/2,l=(c.startY+c.endY)/2,u=y.x-t.current.x,g=y.y-t.current.y,r=u-p,x=g-l;c.startX+=r,c.startY+=x,c.endX+=r,c.endY+=x}else c.x!==void 0&&c.y!==void 0&&(c.x=y.x-t.current.x,c.y=y.y-t.current.y);return e.current=c,c},endDrag:()=>{const y=e.current;return e.current=null,t.current={x:0,y:0},y},updateCursor:(y,c,p,l,u,g)=>{if(l){const x=l?l.startsWith("path_")?{...p[parseInt(l.replace("path_",""))],type:"path",id:l}:c.find(C=>C.id===l):null;if(x){const C=K(x,g);if(C){const b=Je(y.x,y.y,C,x);if(b){h(b.cursor);return}if(Ue(y.x,y.y,C)){h("move");return}}}}const r=bt(y.x,y.y,c,p,u,g);h(r?"pointer":"default")},checkForHandle:(y,c,p)=>{const l=K(c,p);return l?Je(y.x,y.y,l,c):null},checkIfPointInSelectedBounds:(y,c,p)=>{if(!c)return!1;const l=K(c,p);return l&&Ue(y.x,y.y,l)}}},vn=()=>{const e=M.useRef(null);return{resizeHandleRef:e,startResize:(a,d,i,o)=>{const m=o.width,L=o.height;e.current={handle:a.name,object:{...d},startPos:i,startBounds:o,startFontSize:d.fontSize,startX:d.x,startY:d.y,startWidth:m,startHeight:L,startMouseX:i.x,startMouseY:i.y,startCenterX:o.centerX,startCenterY:o.centerY}},updateResize:a=>{if(!e.current)return null;const{handle:d,object:i,startPos:o,startBounds:m,startFontSize:L,startX:y,startY:c,startWidth:p,startHeight:l,startCenterX:u,startCenterY:g}=e.current;let r={...i};if(i.type==="text"){const x=y,C=c,b=p||m.width,$=l||m.height,E=x+b,S=C+$,B=x,z=C;let f=x,w=C,k=b,T=$;switch(d){case"topLeft":w=a.y,T=Math.max(S-a.y,1),k=T*(b/$),f=E-k;break;case"topRight":f=B,w=a.y,T=Math.max(S-a.y,1),k=T*(b/$);break;case"bottomLeft":w=z,T=Math.max(a.y-C,1),k=T*(b/$),f=E-k;break;case"bottomRight":f=B,w=z,T=Math.max(a.y-C,1),k=T*(b/$);break}const Z=15,Y=Z*(b/$);T<Z&&(T=Z,k=Y,(d==="topLeft"||d==="topRight")&&(w=S-Z),(d==="topLeft"||d==="bottomLeft")&&(f=E-Y));const D=T/$,H=Math.max(8,Math.min(200,Math.round(L*D)));return r.x=f,r.y=w,r.fontSize=H,delete r.width,delete r.height,e.current.object=r,r}if(i.type==="path")return d==="start"?r.points[0]={x:a.x,y:a.y}:d==="end"&&(r.points[r.points.length-1]={x:a.x,y:a.y}),e.current.object=r,r;if(i.type==="shape"&&(i.shape==="line"||i.shape==="arrow"))return d==="start"?(r.startX=a.x,r.startY=a.y):d==="end"&&(r.endX=a.x,r.endY=a.y),e.current.object=r,r;if(i.type==="player"||i.type==="ball"){const x=m.centerX,C=m.centerY,b=Math.sqrt(Math.pow(a.x-x,2)+Math.pow(a.y-C,2));return r.radius=Math.max(5,Math.min(50,b)),e.current.object=r,r}if(i.type==="figure"){const x=m.centerX,C=m.centerY,b=Math.max(Math.abs(a.x-x),Math.abs(a.y-C))*2;return r.size=Math.max(10,Math.min(100,b)),e.current.object=r,r}if(i.type==="shape"&&i.shape!=="line"&&i.shape!=="arrow"){const x=m;if(i.shape==="circle"){const f=Math.sqrt(Math.pow(a.x-u,2)+Math.pow(a.y-g,2)),w=f*2;return r.x=u-f,r.y=g-f,r.width=w,r.height=w,e.current.object=r,r}const C=x.originalX!==void 0?x.originalX:x.x,b=x.originalY!==void 0?x.originalY:x.y,$=x.originalWidth!==void 0?x.originalWidth:x.width,E=x.originalHeight!==void 0?x.originalHeight:x.height,S=C+$,B=b+E;switch(d){case"topLeft":r.x=a.x,r.y=a.y,r.width=S-a.x,r.height=B-a.y;break;case"topRight":r.y=a.y,r.width=a.x-C,r.height=B-a.y;break;case"bottomLeft":r.x=a.x,r.width=S-a.x,r.height=a.y-b;break;case"bottomRight":r.width=a.x-C,r.height=a.y-b;break;case"top":r.y=a.y,r.height=B-a.y;break;case"bottom":r.height=a.y-b;break;case"left":r.x=a.x,r.width=S-a.x;break;case"right":r.width=a.x-C;break}const z=10;Math.abs(r.width)<z&&(r.width=r.width<0?-z:z),Math.abs(r.height)<z&&(r.height=r.height<0?-z:z)}return e.current.object=r,r},endResize:()=>{const a=e.current;return e.current=null,a?a.object:null}}},bn=()=>{const e=M.useRef(!1),t=M.useRef([]),s=M.useRef(null),h=M.useRef(!1);return{drawingRef:e,currentPathRef:t,shapeStartRef:s,isDrawingShapeRef:h,startDrawing:c=>{e.current=!0,t.current=[{x:c.x,y:c.y}]},continueDrawing:c=>e.current?(t.current.push({x:c.x,y:c.y}),t.current):null,endDrawing:()=>{const c=t.current;return e.current=!1,t.current=[],c.length>1?c:null},startShape:c=>{h.current=!0,s.current=c},getShapePreview:c=>!h.current||!s.current?null:{start:s.current,end:c},endShape:(c,p)=>{if(!h.current||!s.current)return null;const l=s.current;let u=null;if(p==="line"||p==="arrow")Math.sqrt(Math.pow(c.x-l.x,2)+Math.pow(c.y-l.y,2))>5&&(u={startX:l.x,startY:l.y,endX:c.x,endY:c.y});else{const g=c.x-l.x,r=c.y-l.y;Math.abs(g)>5&&Math.abs(r)>5&&(u={x:l.x,y:l.y,width:g,height:r})}return h.current=!1,s.current=null,u},cancelDrawing:()=>{e.current=!1,t.current=[],h.current=!1,s.current=null}}},Ln=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,kn=v.div`
  border: 2px solid #ddd;
  margin-top: 10px;
  background: white;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  position: relative;
  cursor: ${e=>e.cursor};
`,$n=v.canvas`
  display: block;
  background: white;
`,Sn=v.textarea`
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
`,Bn=({fieldSize:e,fieldType:t})=>{const s=M.useRef(null),h=M.useRef(null),a=M.useRef(null),d=M.useRef(!1),i=M.useRef(null),[o,m]=M.useState({width:800,height:500}),[L,y]=M.useState(!1),[c,p]=M.useState(""),[l,u]=M.useState({x:0,y:0}),g=pe(),{activeTool:r,drawColor:x,brushSize:C,paths:b,objects:$,selectedObjectId:E,team1:S,team2:B,textFontSize:z,textColor:f,shapeBorderColor:w,shapeBorderOpacity:k,shapeFillColor:T,shapeFillOpacity:Z,shapeBorderWidth:Y,shapeBorderStyle:D,shapeLineCapStart:H,shapeLineCapEnd:j}=ve(P=>P.tacticsBoard),{redraw:X,drawLivePath:_,drawPreviewShape:V,tempObjectDataRef:F,tempPathDataRef:A}=yn(s),{cursorStyle:q,setCursorStyle:N,startDrag:O,updateDragPosition:ne,endDrag:re,updateCursor:Q,checkForHandle:U,draggedObjectRef:ie,checkIfPointInSelectedBounds:Se}=Mn(),{resizeHandleRef:xe,startResize:Be,updateResize:$t,endResize:Xe}=vn(),{drawingRef:Te,currentPathRef:zr,shapeStartRef:ze,isDrawingShapeRef:Ee,startDrawing:St,continueDrawing:Bt,endDrawing:Ae,startShape:Tt,endShape:zt,cancelDrawing:Et}=bn(),It=1500,Gt=640,Pt=1400,Ie=e.width/e.height,He=M.useCallback(()=>{var Ve;const P=h.current;if(!P)return{width:800,height:500};const I=((Ve=P.parentElement)==null?void 0:Ve.clientWidth)||window.innerWidth,R=I/It,G=Pt*R,W=Gt*R,J=G,ge=J/Ie,We=W,At=We*Ie;let fe,me;ge<=W?(fe=J,me=ge):(fe=At,me=We);const Pe=I*.95;if(fe>Pe){const Ht=Pe/fe;fe=Pe,me=me*Ht}return{width:Math.floor(fe),height:Math.floor(me)}},[Ie]),Ge=P=>{const I=s.current;if(!I)return{x:0,y:0};const R=I.getBoundingClientRect(),G=I.width/R.width,W=I.height/R.height;return{x:(P.clientX-R.left)*G,y:(P.clientY-R.top)*W}},Zt=P=>{if(P.button!==0)return;const I=Ge(P),R=s.current;if(L){je();return}if(r==="cursor"){const G=E?E.startsWith("path_")?{...b[parseInt(E.replace("path_",""))],type:"path",id:E}:$.find(J=>J.id===E):null;if(G){const J=K(G,R);if(J){const ge=U(I,G,R);if(ge){Be(ge,G,I,J),G.type==="path"?A.current={...G}:F.current={...G};return}if(Se(I,G,R)){O(G,I,R),G.type==="path"?A.current={...G}:F.current={...G};return}}}const W=bt(I.x,I.y,$,b,C,R);W?(g(_e(W.id)),K(W,R)&&(O(W,I,R),W.type==="path"?A.current={...W}:F.current={...W})):g(ye())}else if(r==="drawing")St(I);else if(r.startsWith("shape_"))Tt(I);else if(r.startsWith("figure_")){const G={player:"👤",goalkeeper:"🧤",coach:"🧠",referee:"⚖️",goal:"🥅",cone:"🟨"},W=r.replace("figure_","");g(Ze({type:"figure",figureType:W,icon:G[W],x:I.x,y:I.y,size:30}))}else if(r==="ball")g(Ze({type:"ball",x:I.x,y:I.y,radius:10}));else if(r==="text"){const G=`text_${Date.now()}_${Math.random()}`;y(!0),p(""),u(I),i.current=G,g(_e(G))}P.preventDefault()},Rt=P=>{const I=Ge(P),R=s.current;if(r==="cursor"&&!ie.current&&!xe.current&&Q(I,$,b,E,C,R),xe.current){const G=$t(I);G&&(G.type==="path"?A.current=G:F.current=G,X(b,$,E,r,x,C))}else if(ie.current){const G=ne(I);G&&(G.type==="path"?A.current=G:F.current=G,X(b,$,E,r,x,C))}else if(Te.current){const G=Bt(I);G&&G.length>=2&&_(G,x,C)}else if(Ee.current&&ze.current){const G=r.replace("shape_","");X(b,$,E,r,x,C),V(G,ze.current,I,w,D,Y,T,Z)}P.preventDefault()},Dt=P=>{const I=Ge(P);if(Te.current){const R=Ae();R&&g(Ne({points:R,color:x,brushSize:C}))}if(Ee.current&&ze.current){const R=r.replace("shape_",""),G=zt(I,R);if(G){const W={type:"shape",shape:R,...G,borderColor:w,borderOpacity:k,borderWidth:Y,borderStyle:D,color:w};R==="line"||R==="arrow"?(W.lineCapStart=H,W.lineCapEnd=R==="arrow"?"arrow":j):(W.fillColor=T,W.fillOpacity=Z),g(Ze(W))}}if(ie.current){const R=re();if(R)if(R.type==="path"){const G=parseInt(R.id.replace("path_",""));g(be({index:G,updates:R}))}else g(te({id:R.id,updates:R}));F.current=null,A.current=null}if(xe.current){const R=Xe();if(R&&F.current)if(R.type==="path"){const G=parseInt(R.id.replace("path_",""));g(be({index:G,updates:A.current}))}else g(te({id:F.current.id,updates:F.current}));F.current=null,A.current=null}N("default"),P.preventDefault()},Yt=P=>{if(Te.current){const I=Ae();I&&g(Ne({points:I,color:x,brushSize:C}))}if(Ee.current&&Et(),ie.current){const I=re();if(I&&F.current)if(I.type==="path"){const R=parseInt(I.id.replace("path_",""));g(be({index:R,updates:A.current}))}else g(te({id:F.current.id,updates:F.current}))}if(xe.current){const I=Xe();if(I&&F.current)if(I.object.type==="path"){const R=parseInt(I.object.id.replace("path_",""));g(be({index:R,updates:A.current}))}else g(te({id:F.current.id,updates:F.current}))}F.current=null,A.current=null,N("default")},Ft=P=>{p(P.target.value),a.current&&(a.current.style.height="auto",a.current.style.height=a.current.scrollHeight+"px")},je=()=>{const P=c.trim();P&&g(Vt({id:i.current,x:l.x,y:l.y,text:P,fontSize:z,color:f})),y(!1),p(""),i.current=null,g(Me("cursor"))},Xt=P=>{P.key==="Escape"&&(P.preventDefault(),y(!1),p(""),g(ye()),g(Me("cursor")))};return M.useEffect(()=>{const P=()=>{const I=He();m(I)};return P(),window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[He]),M.useEffect(()=>{const P=s.current,I=h.current;P&&I&&(P.width=o.width,P.height=o.height,P.style.width=`${o.width}px`,P.style.height=`${o.height}px`,I.style.width=`${o.width}px`,I.style.height=`${o.height}px`,d.current||(g(jt({canvasWidth:o.width,canvasHeight:o.height})),d.current=!0),X(b,$,E,r,x,C))},[o,g,X,b,$,E,r,x,C]),M.useEffect(()=>{X(b,$,E,r,x,C)},[b,$,E,X,r,x,C]),M.useEffect(()=>{if(o.width>0&&o.height>0){const P=$.filter(G=>G.type==="player"),I=P.filter(G=>G.team===1),R=P.filter(G=>G.team===2);(I.length!==S.count||R.length!==B.count)&&g(Wt({canvasWidth:o.width,canvasHeight:o.height}))}},[S.count,B.count,o,$,g]),M.useEffect(()=>{if(L&&a.current&&s.current){const P=a.current;setTimeout(()=>{P.focus(),P.select()},0);const I=s.current,R=I.getBoundingClientRect(),G=I.width/R.width,W=I.height/R.height,J=l.x/G,ge=l.y/W;P.style.left=`${J}px`,P.style.top=`${ge}px`,P.style.fontSize=`${z/W}px`,P.style.color=f,P.style.width="auto",P.style.height="auto"}},[L,l,f,z]),M.useEffect(()=>{const P=I=>{I.key==="Escape"&&!L&&g(ye())};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[E,L,g]),M.useEffect(()=>{g(ye())},[r,g]),n.jsx(Ln,{children:n.jsxs(kn,{ref:h,cursor:q,children:[n.jsx($n,{ref:s,onMouseDown:Zt,onMouseMove:Rt,onMouseUp:Dt,onMouseLeave:Yt}),L&&n.jsx(Sn,{ref:a,value:c,onChange:Ft,onBlur:je,onKeyDown:Xt,placeholder:"Введіть текст",rows:1})]})})},Tn=e=>M.createElement("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32",xmlSpace:"preserve",...e},M.createElement("path",{className:"st0",d:"M20,29h-8c-2.2,0-4-1.8-4-4V7c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v18C24,27.2,22.2,29,20,29z"}),M.createElement("circle",{className:"st0",cx:16,cy:16,r:4}),M.createElement("line",{className:"st0",x1:8,y1:16,x2:24,y2:16}),M.createElement("rect",{x:13,y:3,className:"st0",width:6,height:4}),M.createElement("rect",{x:13,y:25,className:"st0",width:6,height:4})),zn=e=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},M.createElement("path",{d:"M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),En=e=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...e},M.createElement("path",{d:"M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"})),In=e=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},M.createElement("circle",{cx:12,cy:12,r:9,strokeWidth:2}),M.createElement("path",{d:"M18 18L6 6",strokeWidth:2})),Lt=e=>M.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},M.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fillRule:"evenodd"},M.createElement("g",{id:"Arrow",transform:"translate(-528.000000, 0.000000)",fillRule:"nonzero"},M.createElement("g",{id:"forward_2_line",transform:"translate(528.000000, 0.000000)"},M.createElement("path",{d:"M17.954,11.6767 C16.6468,9.47493 14.2448,8 11.5,8 C7.35786,8 4,11.3579 4,15.5 C4,16.0523 3.55228,16.5 3,16.5 C2.44772,16.5 2,16.0523 2,15.5 C2,10.2533 6.25329,6 11.5,6 C14.6814,6 17.4961,7.56337 19.22,9.96279 L19.757,6.91751 C19.8529,6.37361 20.3715,6.01044 20.9154,6.10635 C21.4593,6.20225 21.8225,6.72091 21.7266,7.2648 L20.6847,13.1736 C20.6386,13.4348 20.4907,13.667 20.2735,13.8192 C19.9896,14.0179 19.6122,14.0542 19.2977,13.9445 L13.6174,12.9429 C13.0735,12.847 12.7103,12.3284 12.8062,11.7845 C12.9021,11.2406 13.4208,10.8774 13.9647,10.9733 L17.954,11.6767 Z",id:"\\u8DEF\\u5F84"}))))),Gn=e=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.93417 2C7.95604 2 7.97799 2 8 2L16.0658 2C16.9523 1.99995 17.7161 1.99991 18.3278 2.08215C18.9833 2.17028 19.6117 2.36902 20.1213 2.87868C20.631 3.38835 20.8297 4.0167 20.9179 4.67221C21.0001 5.28388 21.0001 6.0477 21 6.9342L21 7.95C21 8.50229 20.5523 8.95 20 8.95C19.4477 8.95 19 8.50229 19 7.95V7.00001C19 6.02893 18.9979 5.40122 18.9357 4.93871C18.8774 4.50497 18.7832 4.36902 18.7071 4.2929C18.631 4.21677 18.495 4.12263 18.0613 4.06431C17.5988 4.00213 16.9711 4 16 4H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V4H8C7.02893 4 6.40122 4.00213 5.93871 4.06431C5.50497 4.12263 5.36902 4.21677 5.2929 4.2929C5.21677 4.36902 5.12263 4.50497 5.06431 4.93871C5.00213 5.40122 5 6.02893 5 7.00001V7.95C5 8.50229 4.55229 8.95 4 8.95C3.44772 8.95 3 8.50229 3 7.95V7.00001C3 6.97799 3 6.95604 3 6.93418C2.99995 6.04769 2.99991 5.28387 3.08215 4.67221C3.17028 4.0167 3.36902 3.38835 3.87868 2.87868C4.38835 2.36902 5.0167 2.17028 5.67221 2.08215C6.28387 1.99991 7.04769 1.99995 7.93417 2Z"}),M.createElement("path",{d:"M7 21H17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),kt=e=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.51192 4.43057C6.82641 4.161 7.29989 4.19743 7.56946 4.51192L13.5695 11.5119C13.8102 11.7928 13.8102 12.2072 13.5695 12.4881L7.56946 19.4881C7.29989 19.8026 6.82641 19.839 6.51192 19.5695C6.19743 19.2999 6.161 18.8264 6.43057 18.5119L12.0122 12L6.43057 5.48811C6.161 5.17361 6.19743 4.70014 6.51192 4.43057ZM10.5121 4.43068C10.8266 4.16111 11.3001 4.19753 11.5697 4.51202L17.5697 11.512C17.8104 11.7929 17.8104 12.2073 17.5697 12.4882L11.5697 19.4882C11.3001 19.8027 10.8266 19.8391 10.5121 19.5696C10.1976 19.3 10.1612 18.8265 10.4308 18.512L16.0124 12.0001L10.4308 5.48821C10.1612 5.17372 10.1976 4.70024 10.5121 4.43068Z"})),Pn=e=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},M.createElement("rect",{x:3,y:5,width:18,height:14,rx:2,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Zn=e=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},M.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Rn=e=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.0001 5.94363L4.76627 18H19.2339L12.0001 5.94363ZM10.7138 4.20006C11.2964 3.22905 12.7037 3.22905 13.2863 4.20006L21.4032 17.7282C22.0031 18.728 21.2829 20 20.117 20H3.88318C2.71724 20 1.99706 18.728 2.59694 17.7282L10.7138 4.20006Z"})),Dn=e=>M.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},M.createElement("path",{d:"M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z"})),Yn=e=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},M.createElement("path",{d:"M6 12H18M18 12L13 7M18 12L13 17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Fn=v.div`
  position: relative;
  display: inline-block;
`,Xn=v.button`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  border: 1px solid ${({theme:e})=>e.textBlack};
  background: ${e=>e.active?e.theme.greenMain:e.theme.ContainerBGColor};
  color: ${e=>e.active?e.theme.white:e.theme.textBlack};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 4px;
  transition: all 0.2s;
  padding: 0;
  
  &:hover {
    background: ${e=>e.active?e.theme.darkGreen:e.theme.lightGreen};
    border-color: ${({theme:e})=>e.textGray};
  }
`,An=v.div`
  position: fixed;
  background: ${({theme:e})=>e.ContainerBGColor};
  border: 1px solid ${({theme:e})=>e.textBlack};
  border-radius: 4px;
  z-index: 10000;
  display: ${e=>e.isOpen?"flex":"none"};
  flex-direction: column;
  gap: 2px;
  width: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`,Hn=v.button`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${({theme:e})=>e.lightGreen};
  }
`,lt=v.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Re=[{id:"rectangle",name:"Прямокутник",icon:n.jsx(Pn,{}),style:{stroke:"currentColor",fill:"none"}},{id:"circle",name:"Коло",icon:n.jsx(Zn,{}),style:{stroke:"currentColor",fill:"none"}},{id:"triangle",name:"Трикутник",icon:n.jsx(Rn,{}),style:{fill:"currentColor",stroke:"none"}},{id:"line",name:"Лінія",icon:n.jsx(Dn,{}),style:{fill:"currentColor",stroke:"none"}},{id:"arrow",name:"Стрілка",icon:n.jsx(Yn,{}),style:{stroke:"currentColor",fill:"none"}}],jn=({activeTool:e,onSelectShape:t})=>{const[s,h]=M.useState(!1),[a,d]=M.useState({top:0,left:0}),i=M.useRef(null),o=M.useRef(null),m=e.startsWith("shape_"),L=m?e.replace("shape_",""):null,y=Re.find(r=>r.id===L),c=()=>{if(o.current){const r=o.current.getBoundingClientRect();d({top:r.bottom+window.scrollY,left:r.left+window.scrollX})}h(!s)},p=r=>{t(r),h(!1)},l=r=>{i.current&&!i.current.contains(r.target)&&h(!1)};M.useEffect(()=>(document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}),[]);const u=()=>{const r=y||Re[0];return n.jsx(lt,{children:qe.cloneElement(r.icon,r.style)})},g=r=>qe.cloneElement(r.icon,r.style);return n.jsxs(Fn,{ref:i,children:[n.jsx(Xn,{ref:o,title:"Геометричні фігури",onClick:c,active:m,children:u()}),n.jsx(An,{isOpen:s,style:{top:a.top,left:a.left},children:Re.map(r=>n.jsx(Hn,{onClick:()=>p(r),title:r.name,children:n.jsx(lt,{children:g(r)})},r.id))})]})},Wn=v.div`
  position: relative;
  display: inline-block;
`,Vn=v.button`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  border: 1px solid ${({theme:e})=>e.textBlack};
  background: ${e=>e.active?e.theme.greenMain:e.theme.ContainerBGColor};
  color: ${e=>e.active?e.theme.white:e.theme.textBlack};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 4px;
  transition: all 0.2s;
  padding: 0;
  
  &:hover {
    background: ${e=>e.active?e.theme.darkGreen:e.theme.lightGreen};
    border-color: ${({theme:e})=>e.textGray};
  }
`,_n=v.div`
  position: fixed;
  background: ${({theme:e})=>e.ContainerBGColor};
  border: 1px solid ${({theme:e})=>e.gray};
  border-radius: 4px;
  z-index: 10000;
  display: ${e=>e.isOpen?"flex":"none"};
  flex-direction: column;
  gap: 2px;
  width: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`,Nn=v.button`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;
  color: ${({theme:e})=>e.textBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${({theme:e})=>e.lightGreen};
  }
`,ct=[{id:"player",name:"Гравець",icon:"👤"},{id:"goalkeeper",name:"Воротар",icon:"🧤"},{id:"coach",name:"Тренер",icon:"🧠"},{id:"referee",name:"Суддя",icon:"⚖️"},{id:"goal",name:"Ворота",icon:"🥅"},{id:"cone",name:"Стійка",icon:"🟨"}],qn=({activeTool:e,onSelectFigure:t})=>{const[s,h]=M.useState(!1),[a,d]=M.useState({top:0,left:0}),i=M.useRef(null),o=M.useRef(null),m=e.startsWith("figure_"),L=m?e.replace("figure_",""):null,y=ct.find(g=>g.id===L),c=()=>{if(o.current){const g=o.current.getBoundingClientRect();d({top:g.bottom+window.scrollY,left:g.left+window.scrollX})}h(!s)},p=g=>{t(g),h(!1)},l=g=>{i.current&&!i.current.contains(g.target)&&h(!1)};M.useEffect(()=>(document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}),[]);const u=()=>y?y.icon:"👤";return n.jsxs(Wn,{ref:i,children:[n.jsx(Vn,{ref:o,title:"Спортивні фігури",onClick:c,active:m,children:u()}),n.jsx(_n,{isOpen:s,style:{top:a.top,left:a.left},children:ct.map(g=>n.jsx(Nn,{onClick:()=>p(g),title:g.name,children:g.icon},g.id))})]})},ht=e=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},M.createElement("path",{d:"M9.19762 11.9582L9.91426 11.737L9.19762 11.9582ZM9.54558 10.8683L9.08995 10.2726L9.54558 10.8683ZM9.91896 14.2952L9.20232 14.5164L9.91896 14.2952ZM14.0579 14.2952L13.3413 14.074L14.0579 14.2952ZM14.4313 10.8683L13.9757 11.4641V11.4641L14.4313 10.8683ZM14.7793 11.9582L15.4959 12.1794L14.7793 11.9582ZM12.5948 9.46375L13.0504 8.86802L12.5948 9.46375ZM11.3821 9.46375L11.8377 10.0595L11.3821 9.46375ZM20.1847 17.75C20.5989 17.75 20.9347 17.4142 20.9347 17C20.9347 16.5858 20.5989 16.25 20.1847 16.25V17.75ZM14.7793 19.7351L14.0677 19.4982L14.7793 19.7351ZM13.4801 21.2631C13.3492 21.6561 13.5617 22.0807 13.9547 22.2116C14.3477 22.3424 14.7724 22.1299 14.9033 21.7369L13.4801 21.2631ZM3.99769 16.25C3.58348 16.25 3.24769 16.5858 3.24769 17C3.24769 17.4142 3.58348 17.75 3.99769 17.75V16.25ZM9.40314 19.7351L10.1147 19.4982L9.40314 19.7351ZM9.27917 21.7369C9.41002 22.1299 9.83469 22.3424 10.2277 22.2116C10.6207 22.0807 10.8332 21.6561 10.7024 21.2631L9.27917 21.7369ZM8.22071 17.3775L7.78185 17.9857L8.22071 17.3775ZM5.556 5.45942C5.4489 5.05928 5.03772 4.82173 4.63759 4.92882C4.23746 5.03591 3.9999 5.44709 4.10699 5.84723L5.556 5.45942ZM5.24951 7.21519L4.52501 7.40909V7.40909L5.24951 7.21519ZM3.59168 11.5885L3.17811 10.9628L3.17811 10.9628L3.59168 11.5885ZM1.62739 11.9879C1.28185 12.2163 1.18689 12.6816 1.4153 13.0271C1.64372 13.3727 2.109 13.4676 2.45454 13.2392L1.62739 11.9879ZM19.934 5.84732C20.0411 5.44719 19.8035 5.036 19.4034 4.92891C19.0033 4.82182 18.5921 5.05938 18.485 5.45951L19.934 5.84732ZM18.7915 7.21528L18.067 7.02137L18.7915 7.21528ZM20.4493 11.5886L20.0357 12.2143L20.4493 11.5886ZM21.5864 13.2393C21.932 13.4677 22.3973 13.3728 22.6257 13.0272C22.8541 12.6817 22.7591 12.2164 22.4136 11.988L21.5864 13.2393ZM16.0903 3.83623C16.4288 3.5975 16.5096 3.12956 16.2709 2.79107C16.0322 2.45257 15.5642 2.3717 15.2257 2.61044L16.0903 3.83623ZM14.3376 4.15456L14.7699 4.76746L14.3376 4.15456ZM9.66562 4.10403L9.22021 4.70744V4.70744L9.66562 4.10403ZM8.61539 2.39659C8.28213 2.15059 7.81255 2.22133 7.56656 2.55459C7.32056 2.88784 7.3913 3.35742 7.72456 3.60341L8.61539 2.39659ZM14.7793 11.3678L14.0627 11.589L14.7793 11.3678ZM9.19762 11.3678L9.91426 11.589L9.19762 11.3678ZM21.2269 12C21.2269 17.1095 17.0899 21.25 11.9885 21.25V22.75C17.92 22.75 22.7269 17.9362 22.7269 12H21.2269ZM11.9885 21.25C6.88701 21.25 2.75 17.1095 2.75 12H1.25C1.25 17.9362 6.05695 22.75 11.9885 22.75V21.25ZM2.75 12C2.75 6.89055 6.88701 2.75 11.9885 2.75V1.25C6.05695 1.25 1.25 6.06376 1.25 12H2.75ZM11.9885 2.75C17.0899 2.75 21.2269 6.89055 21.2269 12H22.7269C22.7269 6.06376 17.92 1.25 11.9885 1.25V2.75ZM12.1392 10.0595L13.9757 11.4641L14.887 10.2726L13.0504 8.86802L12.1392 10.0595ZM14.0626 11.737L13.3413 14.074L14.7746 14.5164L15.4959 12.1794L14.0626 11.737ZM13.1036 14.25H10.8733V15.75H13.1036V14.25ZM10.6356 14.074L9.91426 11.737L8.48098 12.1794L9.20232 14.5164L10.6356 14.074ZM10.0012 11.4641L11.8377 10.0595L10.9265 8.86802L9.08995 10.2726L10.0012 11.4641ZM20.1847 16.25H18.5696V17.75H20.1847V16.25ZM14.0677 19.4982L13.4801 21.2631L14.9033 21.7369L15.4909 19.972L14.0677 19.4982ZM18.5696 16.25C17.892 16.25 17.3207 16.2489 16.8555 16.302C16.3711 16.3574 15.9264 16.4781 15.5228 16.7693L16.4006 17.9857C16.5201 17.8994 16.6846 17.8313 17.0258 17.7923C17.3863 17.7511 17.8574 17.75 18.5696 17.75V16.25ZM15.4909 19.972C15.7161 19.2956 15.8662 18.8484 16.0193 18.5189C16.1643 18.2069 16.2809 18.072 16.4006 17.9857L15.5228 16.7693C15.1193 17.0605 14.8645 17.4444 14.659 17.8868C14.4615 18.3117 14.282 18.8545 14.0677 19.4982L15.4909 19.972ZM3.99769 17.75H5.61279V16.25H3.99769V17.75ZM8.69154 19.972L9.27917 21.7369L10.7024 21.2631L10.1147 19.4982L8.69154 19.972ZM5.61279 17.75C6.325 17.75 6.79611 17.7511 7.15658 17.7923C7.49784 17.8313 7.66228 17.8994 7.78185 17.9857L8.65958 16.7693C8.25598 16.4781 7.81137 16.3574 7.32692 16.302C6.86168 16.2489 6.29041 16.25 5.61279 16.25V17.75ZM10.1147 19.4982C9.90043 18.8545 9.7209 18.3117 9.52346 17.8868C9.31791 17.4445 9.06311 17.0605 8.65958 16.7693L7.78185 17.9857C7.90148 18.072 8.01815 18.2069 8.16314 18.5189C8.31624 18.8484 8.46634 19.2956 8.69154 19.972L10.1147 19.4982ZM4.10699 5.84723L4.52501 7.40909L5.97401 7.02128L5.556 5.45942L4.10699 5.84723ZM3.17811 10.9628L1.62739 11.9879L2.45454 13.2392L4.00526 12.2142L3.17811 10.9628ZM4.52501 7.40909C4.70933 8.09777 4.83021 8.55381 4.88378 8.91324C4.93452 9.25362 4.9114 9.43069 4.85896 9.56902L6.26156 10.1007C6.43795 9.63541 6.43932 9.17465 6.3674 8.69211C6.29831 8.22862 6.14941 7.67663 5.97401 7.02128L4.52501 7.40909ZM4.00526 12.2142C4.57077 11.8404 5.04807 11.5262 5.407 11.2252C5.78074 10.9119 6.08516 10.5661 6.26156 10.1007L4.85896 9.56902C4.80654 9.70729 4.70659 9.855 4.44321 10.0759C4.16501 10.3091 3.77244 10.57 3.17811 10.9628L4.00526 12.2142ZM18.485 5.45951L18.067 7.02137L19.516 7.40918L19.934 5.84732L18.485 5.45951ZM20.0357 12.2143L21.5864 13.2393L22.4136 11.988L20.8629 10.9629L20.0357 12.2143ZM18.067 7.02137C17.8916 7.67672 17.7427 8.22871 17.6736 8.6922C17.6017 9.17474 17.603 9.6355 17.7794 10.1008L19.182 9.56911C19.1296 9.43078 19.1065 9.25372 19.1572 8.91333C19.2108 8.5539 19.3316 8.09787 19.516 7.40918L18.067 7.02137ZM20.8629 10.9629C20.2685 10.5701 19.876 10.3092 19.5978 10.0759C19.3344 9.85509 19.2344 9.70739 19.182 9.56911L17.7794 10.1008C17.9558 10.5662 18.2602 10.912 18.634 11.2253C18.9929 11.5263 19.4702 11.8405 20.0357 12.2143L20.8629 10.9629ZM15.2257 2.61044L13.9054 3.54166L14.7699 4.76746L16.0903 3.83623L15.2257 2.61044ZM10.111 3.50061L8.61539 2.39659L7.72456 3.60341L9.22021 4.70744L10.111 3.50061ZM13.9054 3.54166C13.3231 3.9523 12.9373 4.22303 12.6189 4.39721C12.3174 4.56214 12.1438 4.60125 11.9966 4.59965L11.9803 6.09957C12.478 6.10495 12.9109 5.94721 13.3387 5.7132C13.7496 5.48845 14.2159 5.15817 14.7699 4.76746L13.9054 3.54166ZM9.22021 4.70744C9.76562 5.11004 10.2247 5.45033 10.6306 5.68391C11.0533 5.92712 11.4827 6.09418 11.9803 6.09957L11.9966 4.59965C11.8494 4.59806 11.6767 4.5552 11.3788 4.38379C11.0642 4.20276 10.6843 3.92375 10.111 3.50061L9.22021 4.70744ZM13.9757 11.4641C14.0179 11.4963 14.0475 11.5399 14.0627 11.589L15.4959 11.1465C15.3911 10.807 15.1828 10.4989 14.887 10.2726L13.9757 11.4641ZM14.0627 11.589C14.0773 11.6364 14.0779 11.6876 14.0626 11.737L15.4959 12.1794C15.6023 11.8349 15.5974 11.4754 15.4959 11.1465L14.0627 11.589ZM18.1938 9.14203L14.4923 10.6748L15.0662 12.0607L18.7677 10.5279L18.1938 9.14203ZM13.0504 8.86802C12.7371 8.62838 12.3624 8.50841 11.9885 8.50841V10.0084C12.0419 10.0084 12.0945 10.0253 12.1392 10.0595L13.0504 8.86802ZM11.9885 8.50841C11.6146 8.50841 11.2398 8.62838 10.9265 8.86802L11.8377 10.0595C11.8824 10.0253 11.935 10.0084 11.9885 10.0084V8.50841ZM12.7385 9.25841V5.34961H11.2385V9.25841H12.7385ZM13.3413 14.074C13.3259 14.1241 13.2962 14.166 13.2572 14.1967L14.1852 15.3752C14.4575 15.1608 14.6671 14.8646 14.7746 14.5164L13.3413 14.074ZM13.2572 14.1967C13.214 14.2308 13.1607 14.25 13.1036 14.25V15.75C13.5063 15.75 13.8846 15.6119 14.1852 15.3752L13.2572 14.1967ZM16.5291 16.887L14.2886 14.2954L13.1538 15.2765L15.3944 17.868L16.5291 16.887ZM10.8733 14.25C10.8162 14.25 10.7629 14.2308 10.7197 14.1967L9.79172 15.3752C10.0923 15.6119 10.4706 15.75 10.8733 15.75V14.25ZM10.7197 14.1967C10.6807 14.166 10.651 14.1241 10.6356 14.074L9.20232 14.5164C9.3098 14.8646 9.51943 15.1608 9.79172 15.3752L10.7197 14.1967ZM8.81059 17.8407L10.8456 15.2492L9.66584 14.3228L7.63084 16.9143L8.81059 17.8407ZM9.91426 11.737C9.89899 11.6876 9.89961 11.6364 9.91426 11.589L8.48099 11.1465C8.37949 11.4754 8.37465 11.8349 8.48098 12.1794L9.91426 11.737ZM9.91426 11.589C9.9294 11.5399 9.95905 11.4963 10.0012 11.4641L9.08995 10.2726C8.79412 10.4989 8.58579 10.807 8.48099 11.1465L9.91426 11.589ZM9.48889 10.6766L5.85153 9.14373L5.269 10.526L8.90636 12.0589L9.48889 10.6766Z"})),On=e=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5262 17.4999C18.4887 22.7611 11.7612 24.5637 6.49994 21.5262C1.23873 18.4886 -0.563901 11.7611 2.47367 6.49988C5.51123 1.23866 12.2387 -0.563962 17.4999 2.4736C22.7612 5.51117 24.5638 12.2387 21.5262 17.4999ZM5.84382 7.87995C5.25279 7.64272 4.74291 7.45257 4.3292 7.30543C5.59153 5.24057 7.56267 3.85898 9.74648 3.29362C9.77176 3.62621 9.82851 4.00289 9.93722 4.40861C10.3269 5.86297 11.3579 7.58777 13.75 8.96886C14.0666 9.15165 14.3765 9.31079 14.6793 9.44842C14.4757 10.219 14.1794 11.0351 13.7614 11.8848C13.3566 11.6365 12.936 11.3857 12.5 11.1339C9.85449 9.60655 7.52076 8.55305 5.84382 7.87995ZM12.7587 13.6161C12.3555 13.3682 11.9358 13.1176 11.5 12.866C8.94938 11.3934 6.70297 10.3799 5.09882 9.73602C4.44209 9.47241 3.89359 9.27099 3.47664 9.12556C2.8887 10.8629 2.86217 12.7007 3.33339 14.4015C3.63406 14.2571 3.98864 14.1179 4.39435 14.0092C5.84872 13.6195 7.85792 13.65 10.25 15.0311C10.5667 15.2139 10.8594 15.4027 11.13 15.5961C11.6875 15.0424 12.2384 14.3885 12.7587 13.6161ZM12.6204 16.9341C13.4037 17.8315 13.839 18.756 14.0628 19.5913C14.1715 19.997 14.2283 20.3736 14.2536 20.7061C15.962 20.2638 17.5403 19.3219 18.7509 17.9441C18.4164 17.6557 17.9678 17.2815 17.4112 16.8446C16.6284 16.2301 15.633 15.4925 14.4426 14.6962C13.8639 15.5605 13.2482 16.3006 12.6204 16.9341ZM9.52737 16.9296C9.43788 16.8737 9.34548 16.8182 9.25005 16.7631C7.31205 15.6442 5.84818 15.6902 4.91199 15.9411C4.58 16.03 4.30141 16.1484 4.0805 16.2639C4.53358 17.1073 5.12461 17.8846 5.84359 18.5583C5.87614 18.5513 5.90977 18.5439 5.94444 18.5361C6.44532 18.4223 7.15871 18.2112 7.97658 17.8245C8.4626 17.5947 8.98712 17.3022 9.52737 16.9296ZM7.92672 20.018C8.21347 19.909 8.51642 19.7815 8.83145 19.6326C9.54844 19.2936 10.3256 18.8442 11.1145 18.2503C11.6989 18.9202 11.9873 19.5728 12.131 20.109C12.2199 20.4409 12.2567 20.7413 12.2672 20.9903C10.8031 21.0352 9.31171 20.7231 7.92672 20.018ZM18.6461 15.2714C17.8061 14.612 16.7364 13.8204 15.4558 12.968C15.9672 11.9634 16.3317 10.9922 16.5833 10.0701C17.7521 10.2998 18.7704 10.2145 19.6057 9.99072C20.0114 9.88202 20.3659 9.74284 20.6666 9.59846C21.2688 11.7723 21.0579 14.1701 19.9008 16.2957C19.5666 16.011 19.147 15.6645 18.6461 15.2714ZM16.9702 8.10789C17.8425 8.27902 18.5519 8.20254 19.0881 8.05887C19.42 7.96992 19.6986 7.85154 19.9195 7.73607C19.2263 6.44565 18.2102 5.3101 16.907 4.46319C16.956 4.76614 16.9971 5.09234 17.0257 5.43977C17.0906 6.23015 17.09 7.1278 16.9702 8.10789ZM15.0328 7.39372C15.0854 6.73963 15.0764 6.13922 15.0324 5.60348C14.9583 4.70183 14.7845 3.97847 14.6326 3.4878C14.622 3.45374 14.6116 3.42082 14.6013 3.38905C13.6584 3.10331 12.6898 2.9801 11.7329 3.00943C11.7433 3.2585 11.7801 3.55897 11.8691 3.89097C12.1199 4.82716 12.812 6.11791 14.75 7.23681C14.8454 7.2919 14.9397 7.34416 15.0328 7.39372Z"})),Un=e=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},M.createElement("path",{d:"M11.5697 12.5532L12.1617 13.0137V13.0137L11.5697 12.5532ZM11.3142 3.64586L12.0065 3.93432V3.93432L11.3142 3.64586ZM18.555 14.5045C18.8336 14.198 18.811 13.7237 18.5045 13.445C18.198 13.1664 17.7237 13.189 17.445 13.4955L18.555 14.5045ZM17.7087 14.3204L17.1538 13.8159L17.1538 13.8159L17.7087 14.3204ZM21.2426 10.7426L21.7773 10.2166L21.773 10.2123L21.2426 10.7426ZM21.4531 12.026C21.7436 12.3213 22.2184 12.3251 22.5137 12.0346C22.809 11.7442 22.8129 11.2693 22.5224 10.974L21.4531 12.026ZM5.7327 19.0428C5.31848 19.0428 4.9827 19.3786 4.9827 19.7928C4.9827 20.207 5.31848 20.5428 5.7327 20.5428V19.0428ZM3.5 15.75C3.08579 15.75 2.75 16.0858 2.75 16.5C2.75 16.9142 3.08579 17.25 3.5 17.25V15.75ZM8.19231 3.35575C8.35162 2.9734 8.17081 2.5343 7.78846 2.37498C7.40611 2.21567 6.96701 2.39648 6.80769 2.77883L8.19231 3.35575ZM6.80769 15.2885C6.96701 15.6708 7.40611 15.8516 7.78846 15.6923C8.17081 15.533 8.35162 15.0939 8.19231 14.7115L6.80769 15.2885ZM11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5C10.25 6.91421 10.5858 7.25 11 7.25V5.75ZM19.876 16.916C20.1057 17.2607 20.5714 17.3538 20.916 17.124C21.2607 16.8943 21.3538 16.4286 21.124 16.084L19.876 16.916ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75C2.75 6.89137 6.89137 2.75 12 2.75V1.25ZM12 12.75H12.0917V11.25H12V12.75ZM11.408 11.5395L10.9777 12.0928L12.1617 13.0137L12.592 12.4605L11.408 11.5395ZM11.3077 1.71154L10.6219 3.35739L12.0065 3.93432L12.6923 2.28846L11.3077 1.71154ZM17.445 13.4955L17.1538 13.8159L18.2637 14.8249L18.555 14.5045L17.445 13.4955ZM20.708 11.2686L21.4531 12.026L22.5224 10.974L21.7773 10.2167L20.708 11.2686ZM17.1538 13.8159C14.2838 16.9729 9.96086 19.0428 5.7327 19.0428V20.5428C10.4211 20.5428 15.1357 18.2657 18.2637 14.8249L17.1538 13.8159ZM10.6219 3.35739C9.39039 6.31308 9.66695 9.68222 11.364 12.3975L12.636 11.6025C11.1965 9.29929 10.9619 6.44145 12.0065 3.93432L10.6219 3.35739ZM10.9777 12.0928C9.18293 14.4003 6.42334 15.75 3.5 15.75V17.25C6.88622 17.25 10.0828 15.6866 12.1617 13.0137L10.9777 12.0928ZM6.80769 2.77883C5.13077 6.80344 5.13077 11.2638 6.80769 15.2885L8.19231 14.7115C6.66923 11.0562 6.66923 7.01114 8.19231 3.35575L6.80769 2.77883ZM11 7.25C14.6428 7.25 18.1364 8.6971 20.7123 11.273L21.773 10.2123C18.9158 7.35514 15.0406 5.75 11 5.75V7.25ZM12.0917 12.75C15.2197 12.75 18.1408 14.3133 19.876 16.916L21.124 16.084C19.1107 13.064 15.7213 11.25 12.0917 11.25V12.75Z"})),Jn=e=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.9386 4.73542C13.3511 4.69785 13.716 5.0018 13.7535 5.4143C13.8024 5.95058 13.893 6.53361 14.045 7.14711C14.1447 7.54916 13.8995 7.95586 13.4974 8.05549C13.0954 8.15512 12.6887 7.90997 12.5891 7.50791C12.4172 6.81421 12.3148 6.15558 12.2597 5.55036C12.2221 5.13785 12.5261 4.77299 12.9386 4.73542ZM5.23942 9.18054C5.47821 8.84208 5.94616 8.76129 6.28461 9.00008C6.78119 9.35043 7.30041 9.76836 7.81522 10.2641C8.1136 10.5514 8.12256 11.0262 7.83525 11.3246C7.54794 11.6229 7.07315 11.6319 6.77478 11.3446C6.31949 10.9062 5.85988 10.5362 5.41988 10.2257C5.08142 9.98694 5.00063 9.51899 5.23942 9.18054ZM13.836 8.99599C14.2094 8.81661 14.6574 8.97385 14.8368 9.3472C14.9605 9.60468 15.097 9.86417 15.2474 10.1247C15.3979 10.3852 15.5543 10.6332 15.7155 10.869C15.9491 11.2111 15.8612 11.6778 15.5192 11.9114C15.1772 12.145 14.7105 12.0572 14.4769 11.7151C14.2947 11.4485 14.118 11.1685 13.9484 10.8747C13.7788 10.5809 13.6246 10.2879 13.4848 9.99681C13.3054 9.62346 13.4627 9.17538 13.836 8.99599ZM8.48046 12.088C8.82249 11.8544 9.28917 11.9422 9.52281 12.2843C9.70496 12.5509 9.88164 12.8309 10.0513 13.1247C10.2209 13.4185 10.375 13.7115 10.5149 14.0026C10.6943 14.3759 10.537 14.824 10.1637 15.0034C9.79032 15.1828 9.34223 15.0256 9.16285 14.6522C9.03914 14.3947 8.90267 14.1352 8.75225 13.8747C8.60182 13.6142 8.44534 13.3662 8.28421 13.1304C8.05057 12.7883 8.13843 12.3217 8.48046 12.088ZM16.1644 12.6748C16.4517 12.3765 16.9265 12.3675 17.2249 12.6548C17.6802 13.0932 18.1398 13.4632 18.5798 13.7737C18.9183 14.0125 18.9991 14.4804 18.7603 14.8189C18.5215 15.1573 18.0535 15.2381 17.7151 14.9993C17.2185 14.649 16.6993 14.2311 16.1845 13.7353C15.8861 13.448 15.8771 12.9732 16.1644 12.6748ZM10.5022 15.9439C10.9043 15.8443 11.311 16.0894 11.4106 16.4915C11.5825 17.1852 11.6849 17.8438 11.74 18.4491C11.7776 18.8616 11.4736 19.2264 11.0611 19.264C10.6486 19.3016 10.2837 18.9976 10.2462 18.5851C10.1973 18.0488 10.1067 17.4658 9.95466 16.8523C9.85502 16.4502 10.1002 16.0436 10.5022 15.9439Z"}),M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2859 1.32632C11.0551 1.05591 8.71992 1.48034 6.62484 2.68993C1.4832 5.65846 -0.278462 12.2331 2.69007 17.3747C5.6586 22.5164 12.2332 24.278 17.3748 21.3095C19.4699 20.0999 21.0051 18.2898 21.8863 16.2227C23.1661 13.2206 23.0684 9.67094 21.3096 6.62471C19.5509 3.57847 16.5256 1.71902 13.2859 1.32632ZM13.7802 3.08033C13.7309 3.49161 13.3576 3.7851 12.9463 3.73585C12.5351 3.68661 12.2416 3.31329 12.2908 2.90201C12.297 2.85081 12.3032 2.8013 12.3096 2.75354C10.638 2.6958 8.93097 3.09054 7.37484 3.98897C5.81951 4.88694 4.62362 6.16839 3.83764 7.64494C3.88216 7.66328 3.92814 7.68258 3.97552 7.70286C4.35631 7.86585 4.53288 8.30668 4.36989 8.68748C4.20689 9.06827 3.76606 9.24484 3.38527 9.08184C3.33556 9.06057 3.2878 9.04062 3.24212 9.02195C2.41524 11.457 2.60225 14.2226 3.98911 16.6247C5.37596 19.0268 7.67752 20.5716 10.1998 21.073C10.2065 21.0241 10.2131 20.9728 10.2195 20.9191C10.2687 20.5078 10.6421 20.2143 11.0533 20.2636C11.4646 20.3128 11.7581 20.6861 11.7089 21.0974C11.7027 21.1486 11.6965 21.198 11.6901 21.2458C13.3618 21.3034 15.0695 20.9084 16.6248 20.0104C18.181 19.112 19.3764 17.831 20.1621 16.3545C20.1176 16.3362 20.0716 16.3168 20.0242 16.2966C19.6434 16.1336 19.4668 15.6927 19.6298 15.3119C19.7928 14.9311 20.2336 14.7546 20.6144 14.9176C20.6641 14.9388 20.7119 14.9588 20.7576 14.9775C21.5849 12.5411 21.3972 9.77639 20.0106 7.37471C18.624 4.97302 16.3236 3.42808 13.7999 2.92639C13.7932 2.97529 13.7866 3.02664 13.7802 3.08033Z"})),Kn=e=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.1665 2.75836L21.2416 8.83351C21.2677 7.81177 21.2303 6.84352 21.1649 5.98862C21.0341 4.27797 19.722 2.96586 18.0114 2.83507C17.1565 2.76971 16.1882 2.7323 15.1665 2.75836ZM21.1071 10.8203L13.1797 2.89285C10.483 3.1978 7.77958 4.04236 5.91097 5.91097C4.04236 7.77958 3.1978 10.483 2.89285 13.1797L10.8203 21.1071C13.517 20.8022 16.2204 19.9576 18.089 18.089C19.9576 16.2204 20.8022 13.517 21.1071 10.8203ZM8.83351 21.2416L2.75836 15.1665C2.7323 16.1882 2.76971 17.1565 2.83507 18.0114C2.96587 19.722 4.27797 21.0341 5.98861 21.1649C6.84352 21.2303 7.81177 21.2677 8.83351 21.2416ZM13.3854 1.36321C15.1096 1.19733 16.7638 1.2353 18.1257 1.33944C20.5746 1.52667 22.4733 3.4254 22.6606 5.87426C22.7647 7.23618 22.8027 8.89045 22.6368 10.6146C22.3524 13.5707 21.4579 16.8414 19.1497 19.1497C16.8414 21.4579 13.5707 22.3524 10.6146 22.6368C8.89045 22.8027 7.23618 22.7647 5.87426 22.6606C3.4254 22.4733 1.52667 20.5746 1.33944 18.1257C1.2353 16.7638 1.19733 15.1096 1.36321 13.3854C1.6476 10.4293 2.54206 7.15857 4.85031 4.85031C7.15857 2.54206 10.4293 1.6476 13.3854 1.36321ZM11.9426 8.1601C12.2355 7.86721 12.7104 7.86721 13.0032 8.1601L13.8914 9.0482L14.7795 8.1601C15.0723 7.86721 15.5472 7.86721 15.8401 8.1601C16.133 8.45299 16.133 8.92787 15.8401 9.22076L14.952 10.1089L15.8401 10.997C16.133 11.2899 16.133 11.7647 15.8401 12.0576C15.5472 12.3505 15.0723 12.3505 14.7795 12.0576L13.8914 11.1695L13.0608 12.0001L13.9489 12.8882C14.2418 13.1811 14.2418 13.656 13.9489 13.9489C13.656 14.2418 13.1811 14.2418 12.8882 13.9489L12.0001 13.0608L11.1695 13.8914L12.0576 14.7795C12.3505 15.0723 12.3505 15.5472 12.0576 15.8401C11.7647 16.133 11.2899 16.133 10.997 15.8401L10.1089 14.952L9.22076 15.8401C8.92787 16.133 8.45299 16.133 8.1601 15.8401C7.86721 15.5472 7.86721 15.0723 8.1601 14.7795L9.0482 13.8914L8.1601 13.0032C7.86721 12.7104 7.86721 12.2355 8.1601 11.9426C8.45299 11.6497 8.92787 11.6497 9.22076 11.9426L10.1089 12.8307L10.9394 12.0001L10.0513 11.112C9.75845 10.8191 9.75845 10.3442 10.0513 10.0513C10.3442 9.75845 10.8191 9.75845 11.112 10.0513L12.0001 10.9394L12.8307 10.1089L11.9426 9.22076C11.6497 8.92787 11.6497 8.45299 11.9426 8.1601Z"})),Qn=e=>M.createElement("svg",{fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 32 32","data-name":"Layer 1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",...e},M.createElement("rect",{height:1,transform:"translate(20 51) rotate(180)",width:16,x:2,y:25}),M.createElement("rect",{height:1,transform:"translate(26 59) rotate(180)",width:16,x:5,y:29}),M.createElement("rect",{height:1,transform:"translate(39 -8) rotate(90)",width:19,x:14,y:15}),M.createElement("rect",{height:1,transform:"translate(21 10) rotate(90)",width:19,x:-4,y:15}),M.createElement("path",{d:"M24,25H23v2a2,2,0,0,1-2,2H20v1h1a3,3,0,0,0,3-3Z"}),M.createElement("path",{d:"M17,26h1v1a2,2,0,0,0,2,2h1v1H20a3,3,0,0,1-3-3Z"}),M.createElement("path",{d:"M2,26H3v1a2,2,0,0,0,2,2H6v1H5a3,3,0,0,1-3-3Z"}),M.createElement("rect",{height:1,width:6,x:24,y:6}),M.createElement("rect",{height:1,width:19,x:8,y:2}),M.createElement("path",{d:"M5,6H6V5A2,2,0,0,1,8,3H9V2H8A3,3,0,0,0,5,5Z"}),M.createElement("path",{d:"M23,6h1V5a2,2,0,0,1,2-2h1V2H26a3,3,0,0,0-3,3Z"}),M.createElement("path",{d:"M30,6H29V5a2,2,0,0,0-2-2H26V2h1a3,3,0,0,1,3,3Z"})),e1=v.div`
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
`,t1=v.div`
  background: ${({theme:e})=>e.ContainerBGColor};
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
`,n1=v.div`
  padding: 20px 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 2px solid ${({theme:e})=>e.mainBGColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme:e})=>e.ContainerBGColor};
`,r1=v.h2`
  margin: 0;
  font-size: 24px;
  color: ${({theme:e})=>e.textBlack};
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,i1=v.button`
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: ${({theme:e})=>e.textGray};
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
    fill: ${({theme:e})=>e.textBlack};
  }

  &:hover {
    background: ${({theme:e})=>e.red};
    svg {
      fill: ${({theme:e})=>e.white};
   }
    color: ${({theme:e})=>e.textBlack};
  }
`,o1=v.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`,a1=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  @media (max-width: 768px) {
    gap: 6px;
  }
`,s1=v.button`
  padding: 10px 16px;
  border: 2px solid
    ${({active:e,theme:t})=>e?t.greenMain:t.textGray};
  background: ${({active:e,theme:t})=>e?t.greenMain:t.ContainerBGColor};
  color: ${({active:e,theme:t})=>e?t.white:t.textBlack};
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
    border-color: ${({active:e,theme:t})=>e?t.darkGreen:t.lightGreen};
    background: ${({active:e,theme:t})=>e?t.darkGreen:t.ContainerBGColor==="#ffffff"?t.lightGreen:"#343434"};
    color: ${({active:e,theme:t})=>e?t.white:t.ContainerBGColor==="#ffffff"?"#ffffff":t.textBlack};
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
    gap: 6px;
  }
`,l1=v.div`
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
`,c1=v.div`
  overflow-y: auto;
  padding-right: 8px;
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.mainBGColor};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.textBlack};
  }
`,h1=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
`,d1=v.div`
  border: 2px solid ${e=>e.selected?e.theme.greenMain:e.theme.mainBGColor};
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: border-color 0.2s;
  background: ${e=>e.selected?e.theme.BgActiveLink:e.theme.ContainerBGColor};
  
  &:hover {
    border-color: ${({theme:e})=>e.greenMain};
  }
  
  @media (max-width: 768px) {
    padding: 12px;
  }
`,p1=v.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.textBlack};
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,g1=v.div`
  font-size: 13px;
  color: ${({theme:e})=>e.textGray};
  line-height: 1.5;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,u1=v.div`
  width: 100%;
  height: 140px;
  background: ${({theme:e})=>e.mainBGColor};
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.textGray};
  display: flex;
  align-items: center;
  justify-content: center;
`,x1=v.div`
  position: relative;
  width: ${e=>{const h=e.fieldWidth,a=e.fieldHeight,d=100/h,i=80/a,o=Math.min(d,i);return`${h*o}px`}};
  height: ${e=>{const h=e.fieldWidth,a=e.fieldHeight,d=100/h,i=80/a,o=Math.min(d,i);return`${a*o}px`}};
  background: ${({theme:e})=>e.greenMain};
  border: 2px solid ${({theme:e})=>e.darkGreen};
  border-radius: 2px;
  
  /* Гарантуємо мінімальний розмір для дуже малих полів */
  min-width: 20px;
  min-height: 20px;
`,dt=v.div`
  position: absolute;
  font-size: 10px;
  color: ${({theme:e})=>e.textGray};
  font-weight: 600;
  background: ${({theme:e})=>e.ContainerBGColor};
  padding: 1px 4px;
  border-radius: 2px;
  white-space: nowrap;
  border: 1px solid ${({theme:e})=>e.textGray};
  
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
`,f1={FOOTBALL:[{id:"football_standard",name:"Стандартне поле",width:105,height:68},{id:"football_small",name:"Мале поле",width:90,height:45},{id:"football_futsal",name:"Футзал",width:40,height:20}],BASKETBALL:[{id:"basketball_nba",name:"NBA",width:28.65,height:15.24},{id:"basketball_fiba",name:"FIBA",width:28,height:15}],VOLLEYBALL:[{id:"volleyball_indoor",name:"Закритий майданчик",width:18,height:9},{id:"volleyball_beach",name:"Пляжний майданчик",width:16,height:8}],TENNIS:[{id:"tennis_singles",name:"Одиночний розряд",width:23.77,height:8.23},{id:"tennis_doubles",name:"Парний розряд",width:23.77,height:10.97}],RUGBY:[{id:"rugby_standard",name:"Регбі (15 гравців)",width:100,height:70},{id:"rugby_sevens",name:"Регбі-7",width:94,height:68}],HANDBALL:[{id:"handball_standard",name:"Гандбол",width:40,height:20}],SHEET:[{id:"a4_portrait",name:"A4 Портрет",width:21,height:29.7},{id:"a4_landscape",name:"A4 Ландшафт",width:29.7,height:21},{id:"a3_portrait",name:"A3 Портрет",width:29.7,height:42},{id:"a3_landscape",name:"A3 Ландшафт",width:42,height:29.7},{id:"a3_landscape1",name:"A3 Ландшафт",width:600,height:29.7},{id:"a3_landscape2",name:"A3 Ландшафт",width:2,height:529.7}]},m1=[{id:"FOOTBALL",name:"Футбол",icon:ht},{id:"RUGBY",name:"Регбі",icon:Kn},{id:"BASKETBALL",name:"Баскетбол",icon:On},{id:"VOLLEYBALL",name:"Волейбол",icon:Un},{id:"TENNIS",name:"Теніс",icon:Jn},{id:"HANDBALL",name:"Гандбол",icon:ht},{id:"SHEET",name:"Аркуш",icon:Qn}],C1=({isOpen:e,onClose:t,onSelectField:s,currentFieldId:h})=>{var p;const[a,d]=M.useState("FOOTBALL"),[i,o]=M.useState(h);if(!e)return null;const m=l=>{o(l.id),s(l),setTimeout(()=>t(),300)},L=l=>{l.target===l.currentTarget&&t()},y=(l,u)=>u==="SHEET"?`${l.width}см × ${l.height}см`:`${l.width}м × ${l.height}м`,c=(l,u)=>u==="SHEET"?`${l}см`:`${l}м`;return n.jsx(e1,{onClick:L,children:n.jsxs(t1,{children:[n.jsxs(n1,{children:[n.jsx(r1,{children:"Обрати спортивне поле"}),n.jsx(i1,{onClick:t,children:n.jsx(_t,{})})]}),n.jsxs(o1,{children:[n.jsx(a1,{children:m1.map(l=>{const u=l.icon;return n.jsxs(s1,{active:a===l.id,onClick:()=>d(l.id),children:[n.jsx(l1,{children:n.jsx(u,{})}),l.name]},l.id)})}),n.jsx(c1,{children:n.jsx(h1,{children:(p=f1[a])==null?void 0:p.map(l=>n.jsxs(d1,{selected:i===l.id,onClick:()=>m(l),children:[n.jsx(p1,{children:l.name}),n.jsx(g1,{children:y(l,a)}),n.jsx(u1,{children:n.jsxs(x1,{fieldWidth:l.width,fieldHeight:l.height,children:[n.jsx(dt,{className:"width",children:c(l.width,a)}),n.jsx(dt,{className:"height",children:c(l.height,a)})]})})]},l.id))})})]})]})})},w1=v(Gn)`
  width: 80%;
  height: 80%;
  stroke: ${({theme:e})=>e.textBlack};
   fill: ${({theme:e})=>e.textBlack};
`,y1=v(kt)`
  width: 100%;
  height: 100%;
   fill: ${({theme:e})=>e.black};
   rotate: 180deg;
`,M1=v(In)`
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.textBlack};
`,v1=v(Lt)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.textBlack};
`,b1=v(Lt)`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  fill: ${({theme:e})=>e.textBlack};
`,L1=v(zn)`
  width: 70%;  
  height: 70%;
  stroke: ${({theme:e})=>e.textBlack};
`,k1=v(En)`
  width: 70%;  
  height: 70%;
  fill: ${({theme:e})=>e.textBlack};
`,$1=v.div`
  width: 100%;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-bottom: 2px solid ${({theme:e})=>e.gray};
  padding: 12px 16px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`,S1=v.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`,B1=v.div`
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
`,T1=v.div`
  flex-shrink: 0;
  position: relative;
  z-index: 10;
`,ee=v.button`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  border: 1px solid ${({theme:e})=>e.textBlack};
  background: ${e=>e.active?e.theme.greenMain:e.theme.ContainerBGColor};
  color: ${e=>e.active?e.theme.white:e.theme.textBlack};
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
    background: ${e=>e.active?e.theme.darkGreen:e.theme.lightGreen};
    border-color: ${({theme:e})=>e.textGray};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

`,z1=v.button`
  width: 28px;
  height: 28px;
  min-width: 28px;
  min-height: 28px;
  border: 2px solid ${({theme:e})=>e.greenMain};
  background: ${({theme:e})=>e.lightGreen};
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
    background: ${({theme:e})=>e.darkGreen};
    border-color: ${({theme:e})=>e.darkGreen};
    svg {
      fill: ${({theme:e})=>e.white};
    }
  }
  
`,E1=v(Tn)`
  width: 60%;
  height: 60%;
  fill: none;
  stroke: ${({theme:e})=>e.textBlack};
`,Ce=v.div`
  width: 1px;
  height: 20px;
  background: ${({theme:e})=>e.gray};
  margin: 0 4px;
  
  @media (max-width: 768px) {
    height: 16px;
  }
`,pt=v.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  background: ${({theme:e})=>e.disabledBG};
  border-radius: 4px;
  border: 1px solid ${({theme:e})=>e.gray};
  
  @media (max-width: 768px) {
    padding: 2px 6px;
  }
`,gt=v.span`
  font-size: 11px;
  color: ${({theme:e})=>e.textGray};
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 9px;
  }
`,ut=v.input`
  width: 32px;
  height: 20px;
  border: 1px solid ${({theme:e})=>e.gray};
  border-radius: 3px;
  text-align: center;
  font-size: 12px;
  padding: 0 2px;
  background: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.greenMain};
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
`,xt=v.input`
  width: 24px;
  height: 24px;
  border: 1px solid ${({theme:e})=>e.gray};
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
`,I1=({currentField:e,onSelectField:t,isSidebarOpen:s,onToggleSidebar:h})=>{const[a,d]=M.useState(!1),i=pe(),{activeTool:o,team1:m,team2:L,historyIndex:y,history:c}=ve(k=>k.tacticsBoard),p=()=>{d(!0)},l=()=>{d(!1)},u=k=>{t(k),l()},g=k=>{i(Me(k))},r=k=>{i(Me(`shape_${k.id}`))},x=k=>{i(Me(`figure_${k.id}`))},C=k=>{const T=parseInt(k.target.value)||0;i(Nt(Math.max(0,Math.min(30,T))))},b=k=>{i(qt(k.target.value))},$=k=>{const T=parseInt(k.target.value)||0;i(Ot(Math.max(0,Math.min(30,T))))},E=k=>{i(Ut(k.target.value))},S=()=>{i(Jt())},B=()=>{i(Kt())},z=()=>{window.confirm("Ви впевнені, що хочете очистити всю дошку?")&&i(Qt())},f=y>0,w=y<c.length-1;return n.jsxs(n.Fragment,{children:[n.jsx($1,{children:n.jsxs(S1,{children:[n.jsxs(B1,{children:[n.jsx(ee,{title:"Обрати поле",onClick:p,children:n.jsx(E1,{})}),n.jsx(Ce,{}),n.jsx(ee,{title:"Курсор (виділення та переміщення)",active:o==="cursor",onClick:()=>g("cursor"),children:n.jsx(L1,{})}),n.jsx(ee,{title:"Додати текст",active:o==="text",onClick:()=>g("text"),children:n.jsx(w1,{})}),n.jsx(ee,{title:"Малювання",active:o==="drawing",onClick:()=>g("drawing"),children:n.jsx(k1,{})}),n.jsx(Ce,{}),n.jsx(jn,{activeTool:o,onSelectShape:r}),n.jsx(qn,{activeTool:o,onSelectFigure:x}),n.jsx(Ce,{}),n.jsxs(pt,{children:[n.jsx(gt,{children:"К1:"}),n.jsx(ut,{type:"number",min:"0",max:"30",value:m.count,onChange:C,title:"Кількість гравців команди 1"}),n.jsx(xt,{type:"color",value:m.color,onChange:b,title:"Колір команди 1"})]}),n.jsxs(pt,{children:[n.jsx(gt,{children:"К2:"}),n.jsx(ut,{type:"number",min:"0",max:"30",value:L.count,onChange:$,title:"Кількість гравців команди 2"}),n.jsx(xt,{type:"color",value:L.color,onChange:E,title:"Колір команди 2"})]}),n.jsx(Ce,{}),n.jsx(ee,{title:"М'яч",active:o==="ball",onClick:()=>g("ball"),children:"⚽"}),n.jsx(ee,{title:"Картки",active:o==="cards",onClick:()=>g("cards"),children:"🟨"}),n.jsx(Ce,{}),n.jsx(ee,{title:"Назад (Undo)",onClick:S,disabled:!f,children:n.jsx(b1,{})}),n.jsx(ee,{title:"Вперед (Redo)",onClick:B,disabled:!w,children:n.jsx(v1,{})}),n.jsx(ee,{title:"Скасувати все",onClick:z,children:n.jsx(M1,{})})]}),n.jsx(T1,{children:n.jsx(z1,{title:"Відкрити панель інструментів",active:s,onClick:h,children:n.jsx(y1,{})})})]})}),n.jsx(C1,{isOpen:a,onClose:l,onSelectField:u,currentFieldId:e.id})]})},G1=v.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,P1=v.div`
  display: grid;
  grid-template-columns: 40px 1fr 80px;
  gap: 8px;
  align-items: center;
`,Z1=v.div`
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
`,R1=v.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  border: 2px solid ${({theme:e})=>e.lightGreen||"#ccc"};
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    border-radius: 50%;
    z-index: 1;
    background: ${e=>`rgba(${e.$rgbaColor}, ${e.$opacity})`};
  }
`,D1=v.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,Y1=v.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,F1=v.input`
  width: 100%;
  padding: 6px 8px;
  border: 1px solid ${({theme:e})=>e.lightGreen||"#ccc"};
  border-radius: 4px;
  font-size: 12px;
  font-family: monospace;
  background: ${({theme:e})=>e.ContainerBGColor||"#fff"};
  color: ${({theme:e})=>e.textBlack||"#333"};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  }
`,X1=v.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
`,A1=v.div`
  position: relative;
`,H1=v.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({theme:e})=>e.lightGreen||"#ccc"};
  border-radius: 4px;
  font-size: 12px;
  text-align: center;
  background: ${({theme:e})=>e.ContainerBGColor||"#fff"};
  color: ${({theme:e})=>e.textBlack||"#333"};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  }
`,j1=v.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
  display: block;
  text-align: center;
  margin-top: 2px;
`,de=({color:e,opacity:t,onColorChange:s,onOpacityChange:h,label:a})=>{const[d,i]=M.useState(e||"#000000"),[o,m]=M.useState(t||100),[L,y]=M.useState("0, 0, 0, 1"),c=M.useRef(null),p=M.useRef(null),l=(f,w=1)=>{if(!f)return"0, 0, 0, 1";f=f.replace("#",""),f.length===3&&(f=f[0]+f[0]+f[1]+f[1]+f[2]+f[2]);const k=parseInt(f.slice(0,2),16),T=parseInt(f.slice(2,4),16),Z=parseInt(f.slice(4,6),16);return`${k}, ${T}, ${Z}, ${w}`},u=f=>/^[\d\s,\.]*$/.test(f),g=f=>{const w=f.split(",").map(D=>parseFloat(D.trim()));if(w.length<3||w.some(isNaN))return null;const k=Math.max(0,Math.min(255,w[0]||0)),T=Math.max(0,Math.min(255,w[1]||0)),Z=Math.max(0,Math.min(255,w[2]||0)),Y=w[3]!==void 0?Math.max(0,Math.min(1,w[3])):1;return{r:k,g:T,b:Z,alpha:Y}},r=f=>Math.max(0,Math.min(1,f/100)),x=f=>Math.round(Math.max(0,Math.min(100,f*100))),C=()=>{const f=d.replace("#","");let w,k,T;return f.length===3?(w=parseInt(f[0]+f[0],16),k=parseInt(f[1]+f[1],16),T=parseInt(f[2]+f[2],16)):(w=parseInt(f.slice(0,2),16),k=parseInt(f.slice(2,4),16),T=parseInt(f.slice(4,6),16)),`${w}, ${k}, ${T}`};M.useEffect(()=>{i(e||"#000000"),m(t||100);const f=r(t||100);y(l(e||"#000000",f))},[e,t]);const b=f=>{const w=f.target.value,k=r(o);i(w),y(l(w,k)),p.current&&clearTimeout(p.current),p.current=setTimeout(()=>{s&&s(w)},100)},$=f=>{const w=f.target.value;u(w)&&y(w)},E=f=>{const w=f.target.value,k=g(w);if(k){const{r:T,g:Z,b:Y,alpha:D}=k,H=`${T}, ${Z}, ${Y}, ${D}`,j=`#${((1<<24)+(T<<16)+(Z<<8)+Y).toString(16).slice(1)}`,X=x(D);y(H),i(j),m(X),s&&s(j),h&&h(X)}else{const T=r(o);y(l(d,T))}},S=f=>{let w=parseInt(f.target.value);isNaN(w)&&(w=0),w=Math.max(0,Math.min(100,w));const k=r(w);m(w),y(l(d,k))},B=f=>{let w=parseInt(f.target.value);isNaN(w)&&(w=0),w=Math.max(0,Math.min(100,w));const k=r(w);m(w),y(l(d,k)),h&&h(w)},z=()=>{c.current&&c.current.click()};return n.jsxs("div",{children:[a&&n.jsx(G1,{children:a}),n.jsxs(P1,{children:[n.jsxs(Z1,{children:[n.jsx(R1,{$rgbaColor:C(),$opacity:o/100,onClick:z}),n.jsx(D1,{ref:c,type:"color",value:d,onChange:b})]}),n.jsxs(Y1,{children:[n.jsx(F1,{type:"text",value:L,onChange:$,onBlur:E,placeholder:"0, 0, 0, 1"}),n.jsx(X1,{children:"RGBA"})]}),n.jsxs(A1,{children:[n.jsx(H1,{type:"number",min:"0",max:"100",value:o,onChange:S,onBlur:B}),n.jsx(j1,{children:"Прозорість %"})]})]})]})},W1=v.div`
  position: relative;
  width: 100%;
`,V1=v.button`
  width: 100%;
  padding: 10px 40px 10px 12px;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border: 1.6px solid ${({theme:e})=>e.greenMain};
  border-radius: 8px;
  color: ${({theme:e})=>e.textBlack};
  font-size: 14px;
  cursor: pointer;
  text-align: left;
  position: relative;
  font-family: ${({$fontFamily:e})=>e||"Arial"};
  transition: border 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${({theme:e})=>e.darkGreen};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>e.lightGreen};
  }
`,_1=v.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border: 1px solid ${({theme:e})=>e.darkGreen};
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
`,N1=v.div`
  padding: 6px 8px;
  font-family: ${({$fontFamily:e})=>e||"Arial"};
  cursor: pointer;
  color: ${({theme:e})=>e.textBlack};
  background-color: ${({selected:e,theme:t})=>e?t.lightGreen:"transparent"};

  &:hover {
    background-color: ${({theme:e})=>e.greenMain};
    color: ${({theme:e})=>e.white};
  }
`,q1=v(xn)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) rotate(${({$open:e})=>e?"180deg":"0"});
  width: 20px;
  height: 20px;
  stroke: ${({theme:e})=>e.iconColor};
  transition: transform 0.3s ease;
`,he=({value:e,onChange:t,options:s=[],placeholder:h="Оберіть..."})=>{const[a,d]=M.useState(!1),i=M.useRef(null),o=()=>d(c=>!c),m=()=>d(!1),L=c=>{t(c),m()};M.useEffect(()=>{const c=p=>{i.current&&!i.current.contains(p.target)&&m()};return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[]);const y=s.find(c=>c.value===e);return n.jsxs(W1,{ref:i,children:[n.jsxs(V1,{onClick:o,$fontFamily:y==null?void 0:y.value,children:[y?y.label:h,n.jsx(q1,{$open:a})]}),a&&n.jsx(_1,{children:s.map(c=>n.jsx(N1,{onClick:()=>L(c.value),selected:c.value===e,$fontFamily:c.value,children:c.label},c.value))})]})},O1=v.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,U1=v.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,oe=v.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ue=v.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,J1=v.textarea`
  width: 100%;
  min-height: 80px;
  padding: 8px;
  border: 1px solid ${({theme:e})=>e.lightGreen||"#ccc"};
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  resize: vertical;
  font-family: ${({$fontFamily:e})=>e||"Arial"};
  line-height: 1.5;
  background: ${({theme:e})=>e.ContainerBGColor||"#fff"};
  color: ${({theme:e})=>e.textBlack||"#333"};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  }
`,Le=v.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:s,theme:h})=>{const a=(e-t)/(s-t)*100;return`linear-gradient(to right, ${h.greenMain} 0%, ${h.greenMain} ${a}%, ${h.lightGreen} ${a}%, ${h.lightGreen} 100%)`}};
  outline: none;
  margin: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:e})=>e.greenMain};
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
    border: none;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:e})=>e.greenMain};
    cursor: pointer;
    border: none;
  }
`,ke=v.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,K1=v.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,De=v.button`
  padding: 8px 12px;
  border: 1px solid ${({theme:e})=>e.lightGreen||"#ccc"};
  background: ${e=>e.$active?e.theme.greenMain||"#4CAF50":e.theme.ContainerBGColor||"white"};
  color: ${e=>e.$active?"white":e.theme.textBlack||"#333"};
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: ${e=>e.$active?"600":"500"};
  transition: all 0.2s;
  
  &:hover {
    border-color: ${({theme:e})=>e.greenMain||"#4CAF50"};
    background: ${e=>e.$active?e.theme.greenMain||"#4CAF50":e.theme.lightGreen||"#E8F5E9"};
  }
`,Q1=({selectedObject:e})=>{const t=pe(),[s,h]=M.useState(e.text||"");M.useEffect(()=>{h(e.text||"")},[e.id]);const a=(o,m)=>{t(te({id:e.id,updates:{[o]:m}}))},d=o=>{h(o.target.value)},i=()=>{a("text",s)};return n.jsxs(O1,{children:[n.jsx(U1,{children:"Властивості тексту"}),n.jsxs(oe,{children:[n.jsx(ue,{children:"Текст"}),n.jsx(J1,{value:s,onChange:d,onBlur:i,placeholder:"Введіть текст...",$fontFamily:e.fontFamily})]}),n.jsx(oe,{children:n.jsx(de,{color:e.color||"#000000",opacity:e.opacity||100,onColorChange:o=>a("color",o),onOpacityChange:o=>a("opacity",o),label:"Колір і прозорість"})}),n.jsxs(oe,{children:[n.jsxs(ue,{children:["Розмір шрифту",n.jsxs(ke,{children:[e.fontSize||16,"px"]})]}),n.jsx(Le,{type:"range",min:"8",max:"200",value:e.fontSize||16,onChange:o=>a("fontSize",Number(o.target.value))})]}),n.jsxs(oe,{children:[n.jsx(ue,{children:"Тип шрифту"}),n.jsx(he,{value:e.fontFamily||"Arial",onChange:o=>a("fontFamily",o),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(oe,{children:[n.jsx(ue,{children:"Стиль тексту"}),n.jsxs(K1,{children:[n.jsx(De,{$active:e.fontWeight==="bold",onClick:()=>a("fontWeight",e.fontWeight==="bold"?"normal":"bold"),children:n.jsx("strong",{children:"B"})}),n.jsx(De,{$active:e.fontStyle==="italic",onClick:()=>a("fontStyle",e.fontStyle==="italic"?"normal":"italic"),children:n.jsx("em",{children:"I"})}),n.jsx(De,{$active:e.textDecoration==="underline",onClick:()=>a("textDecoration",e.textDecoration==="underline"?"none":"underline"),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(oe,{children:[n.jsxs(ue,{children:["Міжрядковий інтервал",n.jsx(ke,{children:(e.lineHeight||1.5).toFixed(1)})]}),n.jsx(Le,{type:"range",min:"0.8",max:"3",step:"0.1",value:e.lineHeight||1.5,onChange:o=>a("lineHeight",Number(o.target.value))})]}),n.jsxs(oe,{children:[n.jsxs(ue,{children:["Міжлітерний інтервал",n.jsxs(ke,{children:[e.letterSpacing||0,"px"]})]}),n.jsx(Le,{type:"range",min:"-2",max:"10",step:"0.5",value:e.letterSpacing||0,onChange:o=>a("letterSpacing",Number(o.target.value))})]}),n.jsxs(oe,{children:[n.jsxs(ue,{children:["Поворот тексту",n.jsxs(ke,{children:[e.rotation||0,"°"]})]}),n.jsx(Le,{type:"range",min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:o=>a("rotation",Number(o.target.value))})]})]})},er=v.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,tr=v.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ft=v.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,nr=v.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,rr=v.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:s,theme:h})=>{const a=(e-t)/(s-t)*100;return`linear-gradient(to right, ${h.greenMain} 0%, ${h.greenMain} ${a}%, ${h.lightGreen} ${a}%, ${h.lightGreen} 100%)`}};
  outline: none;
  margin: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:e})=>e.greenMain};
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
    border: none;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:e})=>e.greenMain};
    cursor: pointer;
    border: none;
  }
`,ir=v.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,or=v.p`
  font-size: 12px;
  color: ${({theme:e})=>e.textGray||"#777"};
  margin: 8px 0 0 0;
  font-style: italic;
`,ar=()=>{const e=pe(),{textColor:t,textOpacity:s,textFontSize:h}=ve(a=>a.tacticsBoard);return n.jsxs(er,{children:[n.jsx(tr,{children:"Текст"}),n.jsx(ft,{children:n.jsx(de,{color:t,opacity:s,onColorChange:a=>e(en(a)),onOpacityChange:a=>e(tn(a)),label:"Колір і прозорість"})}),n.jsxs(ft,{children:[n.jsxs(nr,{children:["Розмір шрифту",n.jsxs(ir,{children:[h,"px"]})]}),n.jsx(rr,{type:"range",min:"8",max:"200",value:h,onChange:a=>e(nn(Number(a.target.value)))})]}),n.jsx(or,{children:"Клікніть на полі, щоб додати текст."})]})},sr=v.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,lr=v.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ae=v.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,se=v.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,mt=v.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:s,theme:h})=>{const a=(e-t)/(s-t)*100;return`linear-gradient(to right, ${h.greenMain} 0%, ${h.greenMain} ${a}%, ${h.lightGreen} ${a}%, ${h.lightGreen} 100%)`}};
  outline: none;
  margin: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:e})=>e.greenMain};
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
    border: none;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:e})=>e.greenMain};
    cursor: pointer;
    border: none;
  }
`,Ct=v.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,cr=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,Ye=v.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({theme:e})=>e.lightGreen||"#ccc"};
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  background: ${({theme:e})=>e.ContainerBGColor||"#fff"};
  color: ${({theme:e})=>e.textBlack||"#333"};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,hr=({selectedObject:e})=>{const t=pe(),s=(i,o)=>{t(te({id:e.id,updates:{[i]:o}}))},h=(i,o)=>{const m=Number(o);e.shape==="circle"?t(te({id:e.id,updates:{width:m,height:m}})):s(i,m)},a=e.shape==="line"||e.shape==="arrow",d=e.shape==="circle";return n.jsxs(sr,{children:[n.jsx(lr,{children:"Властивості фігури"}),!a&&n.jsxs(ae,{children:[n.jsx(se,{children:d?"Діаметр":"Розміри"}),d?n.jsx(Ye,{type:"number",min:"10",value:Math.abs(e.width||50),onChange:i=>h("width",i.target.value)}):n.jsxs(cr,{children:[n.jsxs("div",{children:[n.jsx(se,{style:{fontSize:"10px",marginBottom:"4px"},children:"Ширина"}),n.jsx(Ye,{type:"number",min:"10",value:Math.abs(e.width||50),onChange:i=>h("width",i.target.value)})]}),n.jsxs("div",{children:[n.jsx(se,{style:{fontSize:"10px",marginBottom:"4px"},children:"Висота"}),n.jsx(Ye,{type:"number",min:"10",value:Math.abs(e.height||30),onChange:i=>h("height",i.target.value)})]})]})]}),n.jsxs(ae,{children:[n.jsxs(se,{children:["Кут повороту",n.jsxs(Ct,{children:[e.rotation||0,"°"]})]}),n.jsx(mt,{type:"range",min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:i=>s("rotation",Number(i.target.value))})]}),n.jsx(ae,{children:n.jsx(de,{color:e.borderColor||e.color||"#000000",opacity:e.borderOpacity!==void 0?e.borderOpacity:100,onColorChange:i=>s("borderColor",i),onOpacityChange:i=>s("borderOpacity",i),label:a?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(ae,{children:[n.jsxs(se,{children:[a?"Товщина лінії":"Товщина обводки",n.jsxs(Ct,{children:[e.borderWidth||2,"px"]})]}),n.jsx(mt,{type:"range",min:"1",max:"20",value:e.borderWidth||2,onChange:i=>s("borderWidth",Number(i.target.value))})]}),n.jsxs(ae,{children:[n.jsx(se,{children:"Тип обводки"}),n.jsx(he,{value:e.borderStyle||"solid",onChange:i=>s("borderStyle",i),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),a&&n.jsxs(n.Fragment,{children:[n.jsxs(ae,{children:[n.jsx(se,{children:"Початок лінії"}),n.jsx(he,{value:e.lineCapStart||"butt",onChange:i=>s("lineCapStart",i),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Заокруглений"},{value:"arrow",label:"Стрілка"},{value:"circle",label:"Коло"},{value:"bar",label:"Тупік"}],placeholder:"Оберіть тип"})]}),n.jsxs(ae,{children:[n.jsx(se,{children:"Кінець лінії"}),n.jsx(he,{value:e.lineCapEnd||(e.shape==="arrow"?"arrow":"butt"),onChange:i=>s("lineCapEnd",i),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Заокруглений"},{value:"arrow",label:"Стрілка"},{value:"circle",label:"Коло"},{value:"bar",label:"Тупік"}],placeholder:"Оберіть тип"})]})]}),!a&&n.jsx(ae,{children:n.jsx(de,{color:e.fillColor||"#ffffff",opacity:e.fillOpacity!==void 0?e.fillOpacity:0,onColorChange:i=>s("fillColor",i),onOpacityChange:i=>s("fillOpacity",i),label:"Колір заливки і прозорість"})})]})},dr=v.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,pr=v.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,$e=v.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,wt=v.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,gr=v.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:s,theme:h})=>{const a=(e-t)/(s-t)*100;return`linear-gradient(to right, ${h.greenMain} 0%, ${h.greenMain} ${a}%, ${h.lightGreen} ${a}%, ${h.lightGreen} 100%)`}};
  outline: none;
  margin: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:e})=>e.greenMain};
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
    border: none;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:e})=>e.greenMain};
    cursor: pointer;
    border: none;
  }
`,ur=v.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,xr=v.p`
  font-size: 12px;
  color: ${({theme:e})=>e.textGray||"#777"};
  margin: 8px 0 0 0;
  font-style: italic;
`,fr=()=>{const e=pe(),{shapeBorderColor:t,shapeBorderOpacity:s,shapeFillColor:h,shapeFillOpacity:a,shapeBorderWidth:d,shapeBorderStyle:i,activeTool:o}=ve(L=>L.tacticsBoard),m=o==="shape_line"||o==="shape_arrow";return n.jsxs(dr,{children:[n.jsx(pr,{children:"Налаштування фігури"}),n.jsx($e,{children:n.jsx(de,{color:t,opacity:s,onColorChange:L=>e(rn(L)),onOpacityChange:L=>e(on(L)),label:m?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs($e,{children:[n.jsxs(wt,{children:[m?"Товщина лінії":"Товщина обводки",n.jsxs(ur,{children:[d,"px"]})]}),n.jsx(gr,{type:"range",min:"1",max:"20",value:d,onChange:L=>e(an(Number(L.target.value)))})]}),n.jsxs($e,{children:[n.jsx(wt,{children:"Тип обводки"}),n.jsx(he,{value:i,onChange:L=>e(sn(L)),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),!m&&n.jsx($e,{children:n.jsx(de,{color:h,opacity:a,onColorChange:L=>e(ln(L)),onOpacityChange:L=>e(cn(L)),label:"Колір заливки і прозорість"})}),n.jsx(xr,{children:m?"Клікніть і потягніть, щоб намалювати лінію.":"Клікніть і потягніть, щоб намалювати фігуру."})]})},mr=v.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Cr=v.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,le=v.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ce=v.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,yt=v.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:s,theme:h})=>{const a=(e-t)/(s-t)*100;return`linear-gradient(to right, ${h.greenMain} 0%, ${h.greenMain} ${a}%, ${h.lightGreen} ${a}%, ${h.lightGreen} 100%)`}};
  outline: none;
  margin: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:e})=>e.greenMain};
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
    border: none;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:e})=>e.greenMain};
    cursor: pointer;
    border: none;
  }
`,Mt=v.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,wr=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,Fe=v.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({theme:e})=>e.lightGreen||"#ccc"};
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  background: ${({theme:e})=>e.ContainerBGColor||"#fff"};
  color: ${({theme:e})=>e.textBlack||"#333"};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  }
`,yr=({selectedObject:e})=>{const t=pe(),s=(i,o)=>{t(te({id:e.id,updates:{[i]:o}}))},h=(i,o)=>{const m=Number(o);e.shape==="circle"?t(te({id:e.id,updates:{width:m,height:m}})):s(i,m)},a=e.shape==="line"||e.shape==="arrow",d=e.shape==="circle";return n.jsxs(mr,{children:[n.jsx(Cr,{children:"Властивості фігури"}),!a&&n.jsxs(le,{children:[n.jsx(ce,{children:d?"Діаметр":"Розміри"}),d?n.jsx(Fe,{type:"number",min:"10",value:Math.abs(e.width||50),onChange:i=>h("width",i.target.value)}):n.jsxs(wr,{children:[n.jsxs("div",{children:[n.jsx(ce,{style:{fontSize:"10px",marginBottom:"4px"},children:"Ширина"}),n.jsx(Fe,{type:"number",min:"10",value:Math.abs(e.width||50),onChange:i=>h("width",i.target.value)})]}),n.jsxs("div",{children:[n.jsx(ce,{style:{fontSize:"10px",marginBottom:"4px"},children:"Висота"}),n.jsx(Fe,{type:"number",min:"10",value:Math.abs(e.height||30),onChange:i=>h("height",i.target.value)})]})]})]}),n.jsxs(le,{children:[n.jsxs(ce,{children:["Кут повороту",n.jsxs(Mt,{children:[e.rotation||0,"°"]})]}),n.jsx(yt,{type:"range",min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:i=>s("rotation",Number(i.target.value))})]}),n.jsx(le,{children:n.jsx(de,{color:e.borderColor||e.color||"#000000",opacity:e.borderOpacity!==void 0?e.borderOpacity:100,onColorChange:i=>s("borderColor",i),onOpacityChange:i=>s("borderOpacity",i),label:"Колір обводки і прозорість"})}),n.jsxs(le,{children:[n.jsxs(ce,{children:["Товщина обводки",n.jsxs(Mt,{children:[e.borderWidth||2,"px"]})]}),n.jsx(yt,{type:"range",min:"1",max:"20",value:e.borderWidth||2,onChange:i=>s("borderWidth",Number(i.target.value))})]}),n.jsxs(le,{children:[n.jsx(ce,{children:"Тип обводки"}),n.jsx(he,{value:e.borderStyle||"solid",onChange:i=>s("borderStyle",i),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),a&&n.jsxs(n.Fragment,{children:[n.jsxs(le,{children:[n.jsx(ce,{children:"Початок лінії"}),n.jsx(he,{value:e.lineCapStart||"butt",onChange:i=>s("lineCapStart",i),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Круглий"},{value:"arrow",label:"Стрілка"}],placeholder:"Оберіть тип"})]}),n.jsxs(le,{children:[n.jsx(ce,{children:"Кінець лінії"}),n.jsx(he,{value:e.shape==="arrow"?"arrow":e.lineCapEnd||"butt",onChange:i=>s("lineCapEnd",i),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Круглий"},{value:"arrow",label:"Стрілка"}],placeholder:"Оберіть тип",disabled:e.shape==="arrow"})]})]}),!a&&n.jsx(le,{children:n.jsx(de,{color:e.fillColor||"#ffffff",opacity:e.fillOpacity!==void 0?e.fillOpacity:0,onColorChange:i=>s("fillColor",i),onOpacityChange:i=>s("fillOpacity",i),label:"Колір заливки і прозорість"})})]})},Mr=v(kt)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.black};
`,vr=v.div`
  position: absolute;
  top: 0;
  right: ${e=>e.$isOpen?"0":"-320px"};
  width: 320px;
  height: 100%;
  background: ${({theme:e})=>e.ContainerBGColor||"#fff"};
  border-left: 1px solid ${({theme:e})=>e.lightGreen||"#ccc"};
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
    background-color: ${({theme:e})=>e.lightGreen};
    border-radius: 10px;
    border: 2px solid ${({theme:e})=>e.ContainerBGColor};
  }
`,br=v.div`
  padding: 16px;
  height: calc(100% - 48px);
`,Lr=v.button`
  position: absolute;
  top: 12px;
  right: 280px;
  width: 28px;
  height: 28px;
  border: 2px solid ${({theme:e})=>e.greenMain||"#4CAF50"};
  background: ${({theme:e})=>e.lightGreen||"#E8F5E9"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;
  padding: 0;
  z-index: 100;
  
  &:hover {
    border-color: ${({theme:e})=>e.darkGreen||"#2E7D32"};
    background: ${({theme:e})=>e.darkGreen||"#2E7D32"};
    
    svg {
      color: ${({theme:e})=>e.white||"#fff"};
    }
  }
  
  svg {
    color: ${({theme:e})=>e.greenMain||"#4CAF50"};
    transition: color 0.2s;
  }
`,kr=v.div`
  text-align: center;
  padding: 40px 20px;
  color: ${({theme:e})=>e.textGray||"#999"};
  font-size: 14px;
`,we=v.button`
  width: 100%;
  padding: 12px;
  margin-top: 16px;
  background: ${({theme:e})=>e.red};
  color: ${({theme:e})=>e.white};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.redDark};
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(251, 69, 102, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: ${({theme:e})=>e.disabledBG};
    color: ${({theme:e})=>e.textGray};
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`,$r=({isOpen:e,onClose:t})=>{const s=pe(),{activeTool:h,selectedObjectId:a,objects:d,paths:i}=ve(y=>y.tacticsBoard),o=a?a.startsWith("path_")?{...i[parseInt(a.replace("path_",""))],type:"path",id:a}:d.find(y=>y.id===a):null,m=()=>{if(a){if(a.startsWith("path_")){const y=parseInt(a.replace("path_",""));s(hn(y))}else s(dn(a));s(ye())}},L=()=>{if(o)switch(o.type){case"text":return n.jsxs(n.Fragment,{children:[n.jsx(Q1,{selectedObject:o}),n.jsx(we,{onClick:m,children:"Видалити текст"})]});case"player":return n.jsxs(n.Fragment,{children:[n.jsx(yr,{selectedObject:o}),n.jsx(we,{onClick:m,children:"Видалити гравця"})]});case"path":return n.jsx(we,{onClick:m,children:"Видалити малюнок"});case"shape":return n.jsxs(n.Fragment,{children:[n.jsx(hr,{selectedObject:o}),n.jsx(we,{onClick:m,children:"Видалити фігуру"})]});default:return n.jsx(we,{onClick:m,children:"Видалити об'єкт"})}switch(h){case"text":return n.jsx(ar,{});case"shape_rectangle":case"shape_circle":case"shape_triangle":case"shape_line":case"shape_arrow":return n.jsx(fr,{});default:return n.jsxs(kr,{children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎯"}),n.jsx("p",{children:"Виберіть інструмент або об'єкт"}),n.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px",fontStyle:"italic"},children:"Налаштування з'являться тут"})]})}};return n.jsxs(vr,{$isOpen:e,children:[n.jsx(Lr,{title:"Закрити панель інструментів",onClick:t,children:n.jsx(Mr,{})}),n.jsx(br,{children:L()})]})},Sr=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: ${({theme:e})=>e.mainBGColor};
`,Br=v.div`
  background: ${({theme:e})=>e.ContainerBGColor};
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`,Tr=v.div`
  width: 100%;
`,Gr=({theme:e})=>{const{setTitle:t}=pn(),[s,h]=M.useState(!1),[a,d]=M.useState({id:"football_standard",name:"Стандартне футбольне поле",width:105,height:68}),i=L=>{d(L)},o=()=>{h(!s)},m=()=>{h(!1)};return M.useEffect(()=>{t("Тактична дошка")},[t]),n.jsx(gn,{store:un,children:n.jsx(Sr,{children:n.jsxs(Br,{children:[n.jsx(I1,{currentField:a,onSelectField:i,isSidebarOpen:s,onToggleSidebar:o}),n.jsx(Tr,{children:n.jsx(Bn,{fieldSize:{width:a.width,height:a.height},fieldType:a.id})}),n.jsx($r,{isOpen:s,onClose:m,children:n.jsx("div",{children:"Тут будуть інструменти"})})]})})})};export{Gr as default};
