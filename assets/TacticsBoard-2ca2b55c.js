import{r as M,d as v,b as mt,a as Xt,_ as un,$ as fn,a0 as Yt,j as n,a1 as he,a2 as ne,a3 as pe,a4 as At,a5 as ft,a6 as mn,a7 as Dt,W as ge,S as Cn,a8 as yn,a9 as wn,aa as Mn,ab as vn,ac as Ln,ad as bn,ae as $n,af as We,ag as Ve,ah as je,ai as Ne,aj as Oe,ak as qe,al as Ue,am as Je,an as Sn,ao as kn,u as Bn,ap as Tn,aq as In}from"./index-56a4b989.js";import{S as En}from"./ChevronDownicon-05fbbef2.js";import{S as Pn}from"./DeleteIcon-83e74060.js";const Ht=(t,e,r,h,d)=>{const l=Math.cos(d),s=Math.sin(d),i=t-r,f=e-h;return{x:r+(i*l-f*s),y:h+(i*s+f*l)}},ct=(t,e)=>{if(t.type==="player"){const r=t.radius||20,d=(t.rotation||0)*Math.PI/180;let l=t.x-r,s=t.x+r,i=t.y-r,f=t.y+r;if(t.topText){const m=t.textSize||Math.max(10,r*.5),u=m,o=t.topText.length*m*.6,p=-(r+u);[{x:-o/2,y:p-u*.2},{x:o/2,y:p-u*.2},{x:-o/2,y:p},{x:o/2,y:p}].forEach(g=>{const x=g.x*Math.cos(d)-g.y*Math.sin(d),c=g.x*Math.sin(d)+g.y*Math.cos(d);l=Math.min(l,t.x+x),s=Math.max(s,t.x+x),i=Math.min(i,t.y+c),f=Math.max(f,t.y+c)})}if(t.cards&&t.cards.length>0){const m=r*.35,u=m*1.4,o=2,p=Math.PI/4,a=Math.cos(p)*r*.7,g=Math.sin(p)*r*.7,x=t.cards.length-1,c=a-x*(m+o);[{x:c-m,y:g},{x:a,y:g},{x:c-m,y:g+u},{x:a,y:g+u}].forEach(w=>{const C=w.x*Math.cos(d)-w.y*Math.sin(d),$=w.x*Math.sin(d)+w.y*Math.cos(d);l=Math.min(l,t.x+C),s=Math.max(s,t.x+C),i=Math.min(i,t.y+$),f=Math.max(f,t.y+$)})}return{x:t.x-r,y:t.y-r,width:r*2,height:r*2,centerX:t.x,centerY:t.y}}if(t.type==="ball"){const r=t.radius||10;return{x:t.x-r,y:t.y-r,width:r*2,height:r*2,centerX:t.x,centerY:t.y}}if(t.type==="shape"){if(t.shape==="line"||t.shape==="arrow"){const i=t.rotation||0;if(i!==0){const p=i*Math.PI/180,a=(t.startX+t.endX)/2,g=(t.startY+t.endY)/2,x=Ht(t.startX,t.startY,a,g,p),c=Ht(t.endX,t.endY,a,g,p),L=Math.min(x.x,c.x),w=Math.max(x.x,c.x),C=Math.min(x.y,c.y),$=Math.max(x.y,c.y);return{x:L,y:C,width:w-L,height:$-C,startX:x.x,startY:x.y,endX:c.x,endY:c.y,originalStartX:t.startX,originalStartY:t.startY,originalEndX:t.endX,originalEndY:t.endY,centerX:a,centerY:g,rotation:i,rotatedCorners:[x,c]}}const f=Math.min(t.startX,t.endX),m=Math.max(t.startX,t.endX),u=Math.min(t.startY,t.endY),o=Math.max(t.startY,t.endY);return{x:f,y:u,width:m-f,height:o-u,startX:t.startX,startY:t.startY,endX:t.endX,endY:t.endY,rotation:t.rotation||0}}const r=t.width||50,h=t.height||30,d=t.rotation||0;if(t.shape==="circle"){const i=Math.max(Math.abs(r),Math.abs(h)),f=t.x+r/2,m=t.y+h/2;return{x:f-i/2,y:m-i/2,width:i,height:i,centerX:f,centerY:m,radius:i/2,originalX:t.x,originalY:t.y,originalWidth:r,originalHeight:h,rotation:d}}if(d!==0){const i=d*Math.PI/180,f=t.x+r/2,m=t.y+h/2,o=[{x:t.x,y:t.y},{x:t.x+r,y:t.y},{x:t.x+r,y:t.y+h},{x:t.x,y:t.y+h}].map(c=>Ht(c.x,c.y,f,m,i));let p=o[0].x,a=o[0].x,g=o[0].y,x=o[0].y;return o.forEach(c=>{p=Math.min(p,c.x),a=Math.max(a,c.x),g=Math.min(g,c.y),x=Math.max(x,c.y)}),{x:p,y:g,width:a-p,height:x-g,centerX:f,centerY:m,originalX:t.x,originalY:t.y,originalWidth:r,originalHeight:h,rotation:d,rotatedCorners:o}}const l=r<0?t.x+r:t.x,s=h<0?t.y+h:t.y;return{x:l,y:s,width:Math.abs(r),height:Math.abs(h),originalX:t.x,originalY:t.y,originalWidth:r,originalHeight:h,rotation:d}}if(t.type==="figure"){const r=t.size||30;return{x:t.x-r/2,y:t.y-r/2,width:r,height:r,centerX:t.x,centerY:t.y}}if(t.type==="path"){if(!t.points||t.points.length===0)return null;let r=t.points[0].x,h=t.points[0].y,d=t.points[0].x,l=t.points[0].y;return t.points.forEach(s=>{r=Math.min(r,s.x),h=Math.min(h,s.y),d=Math.max(d,s.x),l=Math.max(l,s.y)}),{x:r,y:h,width:d-r,height:l-h,points:t.points,centerX:(r+d)/2,centerY:(h+l)/2}}if(t.type==="text"){if(e){const d=e.getContext("2d"),l=t.fontWeight||"normal",s=t.fontStyle||"normal",i=t.fontSize||16,f=t.fontFamily||"Arial";d.font=`${s} ${l} ${i}px ${f}`;const m=(t.text||"").split(`
`),u=(t.lineHeight||1.5)*i,o=t.letterSpacing||0;let p=0;m.forEach(L=>{let C=d.measureText(L).width;o!==0&&(C+=o*(L.length-1)),C>p&&(p=C)});const a=m.length>0?(m.length-1)*u+i:0,g=t.rotation||0,x=t.x+p/2,c=t.y+a/2;if(g!==0){const L=g*Math.PI/180,C=[{x:t.x,y:t.y},{x:t.x+p,y:t.y},{x:t.x+p,y:t.y+a},{x:t.x,y:t.y+a}].map(E=>Ht(E.x,E.y,x,c,L));let $=C[0].x,T=C[0].x,S=C[0].y,B=C[0].y;return C.forEach(E=>{$=Math.min($,E.x),T=Math.max(T,E.x),S=Math.min(S,E.y),B=Math.max(B,E.y)}),{x:$,y:S,width:T-$,height:B-S,centerX:x,centerY:c,originalX:t.x,originalY:t.y,originalWidth:p,originalHeight:a,rotation:g,rotatedCorners:C}}return{x:t.x,y:t.y,width:p,height:a,centerX:x,centerY:c,originalX:t.x,originalY:t.y,originalWidth:p,originalHeight:a,rotation:0}}const r=t.width||100,h=t.height||20;return{x:t.x,y:t.y,width:r,height:h,centerX:t.x+r/2,centerY:t.y+h/2}}return null},ie=(t,e,r)=>{if(!r)return!1;if(r.rotatedCorners&&r.rotatedCorners.length>0){const h=r.rotatedCorners;let d=!1;for(let l=0,s=h.length-1;l<h.length;s=l++){const i=h[l].x,f=h[l].y,m=h[s].x,u=h[s].y;f>e!=u>e&&t<(m-i)*(e-f)/(u-f)+i&&(d=!d)}return d}return t>=r.x&&t<=r.x+r.width&&e>=r.y&&e<=r.y+r.height},xe=(t,e,r,h=10,d)=>{const l=ct(r,d);if(!l)return!1;if(r.type==="path"){const s=Math.max(h,10);for(let i=0;i<r.points.length-1;i++){const f=r.points[i],m=r.points[i+1],u=m.x-f.x,o=m.y-f.y,p=Math.sqrt(u*u+o*o);if(p===0)continue;const a=Math.max(0,Math.min(1,((t-f.x)*u+(e-f.y)*o)/(p*p))),g=f.x+a*u,x=f.y+a*o;if(Math.sqrt(Math.pow(t-g,2)+Math.pow(e-x,2))<=s)return!0}return!1}if(r.type==="shape"&&(r.shape==="line"||r.shape==="arrow")){const i=l.endX-l.startX,f=l.endY-l.startY,m=Math.sqrt(i*i+f*f);if(m===0)return!1;const u=Math.max(0,Math.min(1,((t-l.startX)*i+(e-l.startY)*f)/(m*m))),o=l.startX+u*i,p=l.startY+u*f;return Math.sqrt(Math.pow(t-o,2)+Math.pow(e-p,2))<=10}if(r.type==="shape"&&r.shape==="circle"){const s=l.centerX||l.x+l.width/2,i=l.centerY||l.y+l.height/2,f=l.radius||Math.max(l.width,l.height)/2;return Math.sqrt(Math.pow(t-s,2)+Math.pow(e-i,2))<=f}return ie(t,e,l)},Ke=(t,e)=>{if(e&&e.type==="shape"&&(e.shape==="line"||e.shape==="arrow"))return{start:{x:t.startX,y:t.startY,cursor:"crosshair"},end:{x:t.endX,y:t.endY,cursor:"crosshair"}};if(e&&e.type==="path")return{};if(e&&e.type==="text"){if(t.rotatedCorners&&t.rotatedCorners.length===4){const r=t.rotatedCorners;return{topLeft:{x:r[0].x,y:r[0].y,cursor:"nwse-resize"},topRight:{x:r[1].x,y:r[1].y,cursor:"nesw-resize"},bottomRight:{x:r[2].x,y:r[2].y,cursor:"nwse-resize"},bottomLeft:{x:r[3].x,y:r[3].y,cursor:"nesw-resize"}}}return{topLeft:{x:t.x,y:t.y,cursor:"nwse-resize"},topRight:{x:t.x+t.width,y:t.y,cursor:"nesw-resize"},bottomLeft:{x:t.x,y:t.y+t.height,cursor:"nesw-resize"},bottomRight:{x:t.x+t.width,y:t.y+t.height,cursor:"nwse-resize"}}}if(t.rotatedCorners&&t.rotatedCorners.length===4){const r=t.rotatedCorners;return{topLeft:{x:r[0].x,y:r[0].y,cursor:"nwse-resize"},topRight:{x:r[1].x,y:r[1].y,cursor:"nesw-resize"},bottomRight:{x:r[2].x,y:r[2].y,cursor:"nwse-resize"},bottomLeft:{x:r[3].x,y:r[3].y,cursor:"nesw-resize"},top:{x:(r[0].x+r[1].x)/2,y:(r[0].y+r[1].y)/2,cursor:"ns-resize"},bottom:{x:(r[2].x+r[3].x)/2,y:(r[2].y+r[3].y)/2,cursor:"ns-resize"},left:{x:(r[0].x+r[3].x)/2,y:(r[0].y+r[3].y)/2,cursor:"ew-resize"},right:{x:(r[1].x+r[2].x)/2,y:(r[1].y+r[2].y)/2,cursor:"ew-resize"}}}return{topLeft:{x:t.x,y:t.y,cursor:"nwse-resize"},topRight:{x:t.x+t.width,y:t.y,cursor:"nesw-resize"},bottomLeft:{x:t.x,y:t.y+t.height,cursor:"nesw-resize"},bottomRight:{x:t.x+t.width,y:t.y+t.height,cursor:"nwse-resize"},top:{x:t.x+t.width/2,y:t.y,cursor:"ns-resize"},bottom:{x:t.x+t.width/2,y:t.y+t.height,cursor:"ns-resize"},left:{x:t.x,y:t.y+t.height/2,cursor:"ew-resize"},right:{x:t.x+t.width,y:t.y+t.height/2,cursor:"ew-resize"}}},ue=(t,e,r,h)=>{const d=Ke(r,h),l=8;for(const[s,i]of Object.entries(d))if(h&&h.type==="shape"&&(h.shape==="line"||h.shape==="arrow")){if(Math.sqrt(Math.pow(t-i.x,2)+Math.pow(e-i.y,2))<=l*2)return{name:s,...i}}else if(Math.abs(t-i.x)<=l&&Math.abs(e-i.y)<=l)return{name:s,...i};return null},Qe=(t,e,r,h,d,l)=>{for(let s=r.length-1;s>=0;s--)if(xe(t,e,r[s],d,l))return r[s];for(let s=h.length-1;s>=0;s--){const i={...h[s],type:"path",id:`path_${s}`};if(xe(t,e,i,d,l))return i}return null},zn=(t,e,r,h,d,l,s,i,f)=>{t.save(),t.strokeStyle=i,t.lineWidth=f,t.lineCap="butt",t.lineJoin="miter",t.setLineDash([]),t.beginPath(),t.moveTo(e,r),t.lineTo(h,d),t.lineTo(l,s),t.stroke(),t.restore()},Gn=(t,e,r,h,d,l,s,i,f=0,m=0)=>{const u=h-e,o=d-r,p=Math.sqrt(u*u+o*o);if(p===0)return;const a=u/p,g=o/p,x=f,c=m,L=p-x-c;if(L<=0)return;const w=e+a*x,C=r+g*x;if(t.strokeStyle=i,t.lineWidth=s,t.lineCap="butt",l==="dashed"){const $=Math.max(s*3,12),T=Math.max(s*2,8),S=$+T,B=Math.max(2,Math.floor(L/S));if(B===2&&L<S*2){const Z=L*.35,Y=L*.3;t.setLineDash([Z,Y]),t.lineDashOffset=0,t.beginPath(),t.moveTo(w,C),t.lineTo(h-a*c,d-g*c),t.stroke(),t.setLineDash([]);return}const k=(L-B*$)/B,y=$+k,b=B*y-k,P=(L-b)/2;t.setLineDash([$,k]),t.lineDashOffset=-P,t.beginPath(),t.moveTo(w,C),t.lineTo(h-a*c,d-g*c),t.stroke(),t.setLineDash([]),t.lineDashOffset=0}else if(l==="dotted"){const $=Math.max(s*2.5,10),T=s/2,S=Math.max(2,Math.floor(L/$)+1),B=L/(S-1);t.fillStyle=i;for(let E=0;E<S;E++){const k=E*B,y=w+a*k,b=C+g*k;t.beginPath(),t.arc(y,b,T,0,Math.PI*2),t.fill()}}else t.beginPath(),t.moveTo(w,C),t.lineTo(h-a*c,d-g*c),t.stroke()},fe=(t,e,r,h,d)=>{if(e.length<2)return;if(r==="solid"){t.strokeStyle=d,t.lineWidth=h,t.lineCap="butt",t.lineJoin="miter",t.setLineDash([]),t.beginPath(),t.moveTo(e[0].x,e[0].y);for(let p=1;p<e.length;p++)t.lineTo(e[p].x,e[p].y);t.closePath(),t.stroke();return}let l=0;const s=[],i=e.length;for(let p=0;p<i;p++){const a=e[p],g=e[(p+1)%i],x=g.x-a.x,c=g.y-a.y,L=Math.sqrt(x*x+c*c);s.push(L),l+=L}if(l<20){t.strokeStyle=d,t.lineWidth=h,t.lineCap="butt",t.lineJoin="miter",t.setLineDash([]),t.beginPath(),t.moveTo(e[0].x,e[0].y);for(let p=1;p<e.length;p++)t.lineTo(e[p].x,e[p].y);t.closePath(),t.stroke();return}const f=Math.max(h*2.5,Math.min(h*4,l/25)),m=Math.max(h*1.5,f*.5),u=f+m,o=f*.7;if(r==="dotted"){const p=h/2,a=Math.max(h*2,l/60);t.fillStyle=d;for(let g=0;g<i;g++){const x=e[g];t.beginPath(),t.arc(x.x,x.y,p,0,Math.PI*2),t.fill()}for(let g=0;g<i;g++){const x=e[g],c=s[g];if(c<=0)continue;const L=e[(g+1)%i].x-x.x,w=e[(g+1)%i].y-x.y,C=L/c,$=w/c,T=1,S=Math.floor(c/a)+1,B=Math.max(T,S-1),E=c/B;for(let k=1;k<B;k++){const y=k*E,b=x.x+C*y,G=x.y+$*y;t.beginPath(),t.arc(b,G,p,0,Math.PI*2),t.fill()}}}else if(r==="dashed"){t.strokeStyle=d,t.lineWidth=h,t.lineCap="butt";for(let p=0;p<i;p++){const a=e[p],g=e[p===0?i-1:p-1],x=e[(p+1)%i],c=s[p===0?i-1:p-1],L=s[p];if(c>0&&L>0){const w=g.x-a.x,C=g.y-a.y,$=x.x-a.x,T=x.y-a.y,S=Math.min(c,L)/3,B=Math.min(o,S),E=a.x+w/c*B,k=a.y+C/c*B,y=a.x+$/L*B,b=a.y+T/L*B;zn(t,E,k,a.x,a.y,y,b,d,h)}}for(let p=0;p<i;p++){const a=e[p],g=e[(p+1)%i],x=s[p];if(x===0)continue;const c=g.x-a.x,L=g.y-a.y,w=c/x,C=L/x,$=s[p===0?i-1:p-1],T=x,S=s[(p+1)%i],B=Math.min($,T)/3,E=Math.min(o,B),k=Math.min(T,S)/3,y=Math.min(o,k),b=x-E-y;if(b<=f/2)continue;const G=a.x+w*E,P=a.y+C*E,Z=Math.floor(b/u);if(Z===0){const I=b/2-f/2;if(I>=0){const R=G+w*I,V=P+C*I,A=G+w*(I+f),_=P+C*(I+f);t.beginPath(),t.moveTo(R,V),t.lineTo(A,_),t.stroke()}continue}const j=(b-Z*f)/Z,W=f+j,H=Z*W-j,O=(b-H)/2;t.setLineDash([f,j]),t.lineDashOffset=-O,t.beginPath(),t.moveTo(G,P),t.lineTo(g.x-w*y,g.y-C*y),t.stroke(),t.setLineDash([]),t.lineDashOffset=0}}},me=(t,e,r,h,d,l,s,i,f)=>{if(d==="butt")return 0;const m=s.replace("#",""),u=parseInt(m.slice(0,2),16),o=parseInt(m.slice(2,4),16),p=parseInt(m.slice(4,6),16);t.fillStyle=`rgba(${u}, ${o}, ${p}, ${i})`,t.strokeStyle=`rgba(${u}, ${o}, ${p}, ${i})`,t.save(),t.translate(e,r),t.rotate(h);let a=0;if(d==="round"){const g=Math.max(f*.75,4);t.beginPath(),t.arc(0,0,g,0,Math.PI*2),t.fill(),a=0}else d==="arrow"?(t.beginPath(),t.moveTo(0,0),t.lineTo(-l,-l*.5),t.lineTo(-l,l*.5),t.closePath(),t.fill(),a=l):d==="circle"?(t.beginPath(),t.arc(0,0,l*.4,0,Math.PI*2),t.fill(),a=l*.2):d==="bar"&&(t.lineWidth=f,t.lineCap="butt",t.beginPath(),t.moveTo(0,-l*.6),t.lineTo(0,l*.6),t.stroke(),a=0);return t.restore(),a},Ce=(t,e,r=!1)=>{t.save();const h=e.fontWeight||"normal",d=e.fontStyle||"normal",l=e.fontSize||16,s=e.fontFamily||"Arial";t.font=`${d} ${h} ${l}px ${s}`,t.textAlign="left",t.textBaseline="top";const i=(e.text||"").split(`
`),f=(e.lineHeight||1.5)*l,m=e.letterSpacing||0;let u=0;i.forEach(C=>{let $=0;m!==0?$=t.measureText(C).width+m*(C.length-1):$=t.measureText(C).width,$>u&&(u=$)});const o=i.length>0?(i.length-1)*f+l:0,p=2;if(e.rotation){const C=e.x+u/2,$=e.y+o/2;t.translate(C,$),t.rotate(e.rotation*Math.PI/180),t.translate(-C,-$)}const a=e.opacity!==void 0?e.opacity/100:1,x=(e.color||"#000000").replace("#",""),c=parseInt(x.slice(0,2),16),L=parseInt(x.slice(2,4),16),w=parseInt(x.slice(4,6),16);return t.fillStyle=`rgba(${c}, ${L}, ${w}, ${a})`,i.forEach((C,$)=>{const T=e.y+$*f;if(m!==0){let S=e.x;for(let B=0;B<C.length;B++){const E=C[B];t.fillText(E,S,T);const k=t.measureText(E).width;S+=k+m}}else t.fillText(C,e.x,T);if(e.textDecoration==="underline"){const S=m!==0?t.measureText(C).width+m*(C.length-1):t.measureText(C).width;t.beginPath(),t.moveTo(e.x,T+l),t.lineTo(e.x+S,T+l),t.strokeStyle=t.fillStyle,t.lineWidth=Math.max(1,l/16),t.stroke()}}),r&&(t.fillStyle="rgba(255, 215, 0, 0.2)",t.fillRect(e.x-p,e.y-p,u+p*2,o+p*2)),t.restore(),e},ye=(t,e,r=!1)=>{if(!(e.points.length<2)){t.strokeStyle=r?"#FFD700":e.color,t.lineWidth=e.brushSize,t.lineCap="round",t.lineJoin="round",r&&(t.shadowColor="#FFD700",t.shadowBlur=5),t.beginPath(),t.moveTo(e.points[0].x,e.points[0].y);for(let h=1;h<e.points.length;h++)t.lineTo(e.points[h].x,e.points[h].y);t.stroke(),t.shadowBlur=0}},we=(t,e,r)=>{t.save();const h=e.x,d=e.y,l=e.radius||20,s=e.rotation||0;t.translate(h,d),t.rotate(s*Math.PI/180);const i=e.borderWidth||2,f=(e.borderOpacity!==void 0?e.borderOpacity:100)/100,m=r?"#FFD700":e.borderColor||"#000000",u=e.borderStyle||"solid",o=m.replace("#",""),p=parseInt(o.slice(0,2),16),a=parseInt(o.slice(2,4),16),g=parseInt(o.slice(4,6),16),x=(e.colorOpacity!==void 0?e.colorOpacity:100)/100,L=(e.color||"#ff0000").replace("#",""),w=parseInt(L.slice(0,2),16),C=parseInt(L.slice(2,4),16),$=parseInt(L.slice(4,6),16);if(t.beginPath(),t.arc(0,0,l,0,Math.PI*2),t.fillStyle=`rgba(${w}, ${C}, ${$}, ${x})`,t.fill(),t.strokeStyle=`rgba(${p}, ${a}, ${g}, ${f})`,t.lineWidth=i,u==="dashed"){const P=2*Math.PI*l,Z=Math.max(i*2.5,Math.min(i*4,P/25)),Y=Math.max(i*1.5,Z*.5),j=Z+Y,W=Math.floor(P/j);if(W<3||P<30)t.setLineDash([]),t.beginPath(),t.arc(0,0,l,0,Math.PI*2),t.stroke();else{const O=(P-W*Z)/W,I=(Z+O)/l,R=Z/l,V=Z+O,A=W*V-O,U=(P-A)/2/l;t.lineCap="butt";for(let K=0;K<W;K++){const q=U+K*I,Q=q+R;t.beginPath(),t.arc(0,0,l,q,Q),t.stroke()}}}else if(u==="dotted"){const P=2*Math.PI*l,Z=i/2,Y=Math.max(i*2,P/60),j=Math.max(8,Math.round(P/Y)),W=2*Math.PI/j;t.fillStyle=`rgba(${p}, ${a}, ${g}, ${f})`;for(let H=0;H<j;H++){const N=H*W,O=l*Math.cos(N),I=l*Math.sin(N);t.beginPath(),t.arc(O,I,Z,0,Math.PI*2),t.fill()}}else t.setLineDash([]),t.beginPath(),t.arc(0,0,l,0,Math.PI*2),t.stroke();t.setLineDash([]);const T=e.number!==void 0?e.number:1,S=(e.numberOpacity!==void 0?e.numberOpacity:100)/100,E=(e.numberColor||"#ffffff").replace("#",""),k=parseInt(E.slice(0,2),16),y=parseInt(E.slice(2,4),16),b=parseInt(E.slice(4,6),16),G=Math.max(12,l*.8);if(t.fillStyle=`rgba(${k}, ${y}, ${b}, ${S})`,t.font=`bold ${G}px Arial`,t.textAlign="center",t.textBaseline="middle",t.fillText(T.toString(),0,0),e.topText){const P=(e.textOpacity!==void 0?e.textOpacity:100)/100,Y=(e.textColor||"#000000").replace("#",""),j=parseInt(Y.slice(0,2),16),W=parseInt(Y.slice(2,4),16),H=parseInt(Y.slice(4,6),16),N=e.textSize||Math.max(10,l*.5),I=-(l+5);t.fillStyle=`rgba(${j}, ${W}, ${H}, ${P})`,t.font=`${N}px Arial`,t.textAlign="center",t.textBaseline="bottom",t.fillText(e.topText,0,I)}if(e.cards&&e.cards.length>0){const P=l*.35,Z=P*1.4,Y=4,j=Math.PI/4,W=Math.cos(j)*l*.7,H=Math.sin(j)*l*.7;e.cards.forEach((N,O)=>{const I=N.color||(N==="yellow"?"#FFD700":"#FF0000"),R=N.cardBorderColor||"#000000",V=W-O*(P+Y);t.fillStyle=I,t.fillRect(V-P,H,P,Z),t.strokeStyle=R,t.lineWidth=1.5,t.setLineDash([]),t.strokeRect(V-P,H,P,Z)})}t.restore()},Me=(t,e,r=!1)=>{const h=e.radius||10,d=r?"#FFD700":"black",l=r?3:2;t.fillStyle="white",t.strokeStyle=d,t.lineWidth=l,t.beginPath(),t.arc(e.x,e.y,h,0,Math.PI*2),t.fill(),t.stroke(),t.beginPath(),t.arc(e.x-h/3,e.y-h/3,h/3,0,Math.PI*2),t.fillStyle="black",t.fill()},ve=(t,e,r=!1,h="#000")=>{if(t.save(),e.rotation)if(e.shape==="line"||e.shape==="arrow"){const a=(e.startX+e.endX)/2,g=(e.startY+e.endY)/2;t.translate(a,g),t.rotate(e.rotation*Math.PI/180),t.translate(-a,-g)}else{const a=e.x+(e.width||50)/2,g=e.y+(e.height||30)/2;t.translate(a,g),t.rotate(e.rotation*Math.PI/180),t.translate(-a,-g)}const d=r?"#FFD700":e.borderColor||e.color||h,l=e.borderOpacity!==void 0?e.borderOpacity/100:1,s=e.borderWidth||2,i=e.borderStyle||"solid",f=d.replace("#",""),m=parseInt(f.slice(0,2),16),u=parseInt(f.slice(2,4),16),o=parseInt(f.slice(4,6),16),p=`rgba(${m}, ${u}, ${o}, ${l})`;if(t.strokeStyle=p,t.lineWidth=s,t.lineCap="butt",t.lineJoin="miter",t.setLineDash([]),e.shape==="line"||e.shape==="arrow"){const a=e.endX-e.startX,g=e.endY-e.startY,x=Math.atan2(g,a),c=e.lineCapStart||"butt",L=e.lineCapEnd||(e.shape==="arrow"?"arrow":"butt"),w=Math.max(s*2.5,10);let C=0;c==="arrow"?C=w:c==="circle"?C=w*.2:(c==="round"||c==="bar")&&(C=0);let $=0;if(L==="arrow"?$=w:L==="circle"?$=w*.2:(L==="round"||L==="bar")&&($=0),i==="dashed"||i==="dotted")Gn(t,e.startX,e.startY,e.endX,e.endY,i,s,p,C,$);else{const T=e.startX+Math.cos(x)*C,S=e.startY+Math.sin(x)*C,B=e.endX-Math.cos(x)*$,E=e.endY-Math.sin(x)*$;t.lineCap="butt",t.beginPath(),t.moveTo(T,S),t.lineTo(B,E),t.stroke()}c!=="butt"&&me(t,e.startX,e.startY,x+Math.PI,c,w,d,l,s),L!=="butt"&&me(t,e.endX,e.endY,x,L,w,d,l,s)}else{const a=e.x,g=e.y,x=e.width||50,c=e.height||30,L=10,w=Math.abs(x)<L?x<0?-L:L:x,C=Math.abs(c)<L?c<0?-L:L:c,$=e.fillColor||"#ffffff",T=e.fillOpacity!==void 0?e.fillOpacity/100:0;if(T>0){const S=$.replace("#",""),B=parseInt(S.slice(0,2),16),E=parseInt(S.slice(2,4),16),k=parseInt(S.slice(4,6),16);if(t.fillStyle=`rgba(${B}, ${E}, ${k}, ${T})`,t.beginPath(),e.shape==="rectangle")t.rect(a,g,w,C);else if(e.shape==="circle"){const y=Math.max(Math.abs(w),Math.abs(C))/2,b=a+w/2,G=g+C/2;t.arc(b,G,y,0,Math.PI*2)}else e.shape==="triangle"&&(t.moveTo(a+w/2,g),t.lineTo(a,g+C),t.lineTo(a+w,g+C),t.closePath());t.fill()}if(i==="dashed"||i==="dotted"){if(e.shape==="rectangle"){const S=[{x:a,y:g},{x:a+w,y:g},{x:a+w,y:g+C},{x:a,y:g+C}];fe(t,S,i,s,p)}else if(e.shape==="triangle"){const S=[{x:a+w/2,y:g},{x:a,y:g+C},{x:a+w,y:g+C}];fe(t,S,i,s,p)}else if(e.shape==="circle"){const S=Math.max(Math.abs(w),Math.abs(C))/2,B=a+w/2,E=g+C/2,k=2*Math.PI*S,y=Math.max(s*2.5,Math.min(s*4,k/25)),b=Math.max(s*1.5,y*.5),G=y+b;if(k<30)t.strokeStyle=p,t.lineWidth=s,t.beginPath(),t.arc(B,E,S,0,Math.PI*2),t.stroke();else if(i==="dashed"){const P=Math.floor(k/G);if(P===0)t.strokeStyle=p,t.lineWidth=s,t.beginPath(),t.arc(B,E,S,0,Math.PI*2),t.stroke();else{const Y=(k-P*y)/P,j=(y+Y)/S,W=y/S,H=y+Y,N=P*H-Y,R=(k-N)/2/S;t.strokeStyle=p,t.lineWidth=s,t.lineCap="butt";for(let V=0;V<P;V++){const A=R+V*j,_=A+W;t.beginPath(),t.arc(B,E,S,A,_),t.stroke()}}}else if(i==="dotted"){const P=s/2,Z=Math.max(s*2,k/60),Y=Math.max(8,Math.round(k/Z)),j=2*Math.PI/Y;t.fillStyle=p;for(let W=0;W<Y;W++){const H=W*j,N=B+S*Math.cos(H),O=E+S*Math.sin(H);t.beginPath(),t.arc(N,O,P,0,Math.PI*2),t.fill()}}}}else{if(t.beginPath(),e.shape==="rectangle"){const S=e.x,B=e.y;e.width,e.height,t.rect(S,B,w,C)}else if(e.shape==="circle"){const S=e.x,B=e.y,E=e.width||50,k=e.height||30,y=E,b=k,G=Math.max(Math.abs(y),Math.abs(b))/2,P=S+y/2,Z=B+b/2;t.arc(P,Z,G,0,Math.PI*2)}else if(e.shape==="triangle"){const S=e.x,B=e.y,E=e.width||50,k=e.height||30,y=E,b=k;t.moveTo(S+y/2,B),t.lineTo(S,B+b),t.lineTo(S+y,B+b),t.closePath()}t.stroke()}}t.restore()},Le=(t,e,r=!1)=>{const h=e.size||30;t.font=`${h}px Arial`,t.textAlign="center",t.textBaseline="middle",t.fillText(e.icon,e.x,e.y),r&&(t.strokeStyle="#FFD700",t.lineWidth=3,t.strokeRect(e.x-h/2,e.y-h/2,h,h))},be=(t,e)=>{if(t.save(),t.strokeStyle="#FFD700",t.lineWidth=2,t.setLineDash([5,5]),e.rotatedCorners&&e.rotatedCorners.length===4){t.beginPath(),t.moveTo(e.rotatedCorners[0].x,e.rotatedCorners[0].y);for(let r=1;r<e.rotatedCorners.length;r++)t.lineTo(e.rotatedCorners[r].x,e.rotatedCorners[r].y);t.closePath(),t.stroke()}else t.strokeRect(e.x,e.y,e.width,e.height);t.setLineDash([]),t.restore()},Yn=(t,e,r)=>{const h=Ke(e,r),d=8;t.fillStyle="white",t.strokeStyle="#FFD700",t.lineWidth=2,Object.entries(h).forEach(([l,s])=>{t.save(),t.fillRect(s.x-d/2,s.y-d/2,d,d),t.strokeRect(s.x-d/2,s.y-d/2,d,d),t.restore()})},Dn=(t,e,r,h,d,l,s,i,f)=>{t.save(),t.strokeStyle=i,t.lineWidth=f,t.lineCap="butt",t.lineJoin="miter",t.setLineDash([]),t.beginPath(),t.moveTo(e,r),t.lineTo(h,d),t.lineTo(l,s),t.stroke(),t.restore()},$e=(t,e,r,h,d)=>{if(e.length<2)return;let l=0;const s=[];for(let o=0;o<e.length;o++){const p=e[o],a=e[(o+1)%e.length],g=a.x-p.x,x=a.y-p.y,c=Math.sqrt(g*g+x*x);s.push(c),l+=c}const i=Math.max(h*2.5,Math.min(h*4,l/25)),f=Math.max(h*1.5,i*.5),m=i+f,u=i*.7;if(r==="dotted"){const o=h/2,p=Math.max(h*2,l/60),a=Math.max(e.length*3,Math.round(l/p));t.fillStyle=d;const g=l/a;for(let x=0;x<a;x++){const c=x*g;let L=0;for(let w=0;w<e.length;w++){const C=e[w],$=e[(w+1)%e.length],T=s[w];if(L+T>=c){const B=(c-L)/T,E=C.x+($.x-C.x)*B,k=C.y+($.y-C.y)*B;t.beginPath(),t.arc(E,k,o,0,Math.PI*2),t.fill();break}L+=T}}}else if(r==="dashed"){t.strokeStyle=d,t.lineWidth=h,t.lineCap="butt";for(let o=0;o<e.length;o++){const p=e[o],a=e[o===0?e.length-1:o-1],g=e[(o+1)%e.length],x=s[o===0?e.length-1:o-1],c=s[o];if(x>0&&c>0){const L=a.x-p.x,w=a.y-p.y,C=g.x-p.x,$=g.y-p.y,T=Math.min(x,c)/3,S=Math.min(u,T),B=p.x+L/x*S,E=p.y+w/x*S,k=p.x+C/c*S,y=p.y+$/c*S;Dn(t,B,E,p.x,p.y,k,y,d,h)}}for(let o=0;o<e.length;o++){const p=e[o],a=e[(o+1)%e.length],g=s[o];if(g===0)continue;const x=a.x-p.x,c=a.y-p.y,L=x/g,w=c/g,C=s[o===0?e.length-1:o-1],$=g,T=s[(o+1)%e.length],S=Math.min(C,$)/3,B=Math.min(u,S),E=Math.min($,T)/3,k=Math.min(u,E),y=g-B-k;if(y<=i/2)continue;const b=p.x+L*B,G=p.y+w*B,P=Math.floor(y/m);if(P===0){const O=y/2-i/2;if(O>=0){const I=b+L*O,R=G+w*O,V=b+L*(O+i),A=G+w*(O+i);t.beginPath(),t.moveTo(I,R),t.lineTo(V,A),t.stroke()}continue}const Y=(y-P*i)/P,j=i+Y,W=P*j-Y,N=(y-W)/2;t.setLineDash([i,Y]),t.lineDashOffset=-N,t.beginPath(),t.moveTo(b,G),t.lineTo(a.x-L*k,a.y-w*k),t.stroke(),t.setLineDash([]),t.lineDashOffset=0}}},Xn=t=>{const e=M.useRef(null),r=M.useRef(null),h=M.useCallback(i=>{if(!i)return;const f=i.getContext("2d");f.clearRect(0,0,i.width,i.height),f.fillStyle="white",f.fillRect(0,0,i.width,i.height)},[]),d=M.useCallback((i,f,m,u,o,p)=>{const a=t.current;if(!a)return;h(a);const g=a.getContext("2d");let x=null,c=-1;if(m&&m.startsWith("path_")){c=parseInt(m.replace("path_",""));const C=i[c];C&&(x=r.current&&r.current.id===m?r.current:C)}i.forEach((C,$)=>{if(C.points.length<2||$===c)return;const T=r.current&&r.current.id===`path_${$}`?r.current:C;ye(g,T,!1)});const L=e.current?f.map(C=>C.id===e.current.id?e.current:C):f;let w=null;if(m&&!m.startsWith("path_")&&(w=L.find(C=>C.id===m)),L.forEach(C=>{if(C.id!==m){switch(g.save(),C.type){case"player":we(g,C,!1);break;case"ball":Me(g,C,!1);break;case"shape":ve(g,C,!1,o);break;case"figure":Le(g,C,!1);break;case"text":Ce(g,C,!1);break}g.restore()}}),x){ye(g,x,!0);const C={...x,type:"path",id:m},$=ct(C,a);$&&be(g,$)}if(w){switch(g.save(),w.type){case"player":we(g,w,!0);break;case"ball":Me(g,w,!0);break;case"shape":ve(g,w,!0,o);break;case"figure":Le(g,w,!0);break;case"text":Ce(g,w,!0);break}if(g.restore(),u==="cursor"){const C=ct(w,a);C&&(be(g,C),Yn(g,C,w))}}},[t,h]),l=M.useCallback((i,f,m)=>{if(i.length<2)return;const u=t.current;if(!u)return;const o=u.getContext("2d"),p=i;o.strokeStyle=f,o.lineWidth=m,o.lineCap="round",o.lineJoin="round",o.setLineDash([]),o.beginPath(),o.moveTo(p[p.length-2].x,p[p.length-2].y),o.lineTo(p[p.length-1].x,p[p.length-1].y),o.stroke()},[t]),s=M.useCallback((i,f,m,u,o,p=2,a="#ffffff",g=0)=>{const x=t.current;if(!x)return;const c=x.getContext("2d"),L=f.x,w=f.y,C=u.replace("#",""),$=parseInt(C.slice(0,2),16),T=parseInt(C.slice(2,4),16),S=parseInt(C.slice(4,6),16),B=`rgba(${$}, ${T}, ${S}, 1)`;c.strokeStyle=B,c.lineWidth=p,c.lineCap="butt",c.lineJoin="miter",c.setLineDash([]);const E=(k,y,b,G)=>{const P=b-k,Z=G-y,Y=Math.sqrt(P*P+Z*Z);if(Y===0)return;const j=P/Y,W=Z/Y,N=Math.max(p*2.5,Math.min(p*4,Y/25)),O=Math.max(p*1.5,N*.5),I=N+O;if(o==="dashed"){const R=Math.floor(Y/I);if(R===0){const q=(Y-N)/2;if(q>=0){const Q=k+j*q,nt=y+W*q,et=k+j*(q+N),dt=y+W*(q+N);c.beginPath(),c.moveTo(Q,nt),c.lineTo(et,dt),c.stroke()}return}const A=(Y-R*N)/numSegments,_=N+A,tt=R*_-A,K=(Y-tt)/2;c.setLineDash([N,A]),c.lineDashOffset=-K,c.beginPath(),c.moveTo(k,y),c.lineTo(b,G),c.stroke(),c.setLineDash([]),c.lineDashOffset=0}else if(o==="dotted"){const R=Math.max(p*2,Y/30),V=p/2,A=Math.max(2,Math.floor(Y/R)+1),_=Y/(A-1);c.fillStyle=B;for(let tt=0;tt<A;tt++){const U=tt*_,K=k+j*U,q=y+W*U;c.beginPath(),c.arc(K,q,V,0,Math.PI*2),c.fill()}}};if(i==="line"||i==="arrow"){if(o==="dashed"||o==="dotted"?E(L,w,m.x,m.y):(c.beginPath(),c.moveTo(L,w),c.lineTo(m.x,m.y),c.stroke()),i==="arrow"){const k=m.x-L,y=m.y-w,b=Math.atan2(y,k),G=Math.max(p*2.5,10);c.fillStyle=B,c.beginPath(),c.moveTo(m.x,m.y),c.lineTo(m.x-G*Math.cos(b-Math.PI/6),m.y-G*Math.sin(b-Math.PI/6)),c.lineTo(m.x-G*Math.cos(b+Math.PI/6),m.y-G*Math.sin(b+Math.PI/6)),c.closePath(),c.fill()}c.fillStyle="#FFD700",c.beginPath(),c.arc(L,w,4,0,Math.PI*2),c.fill()}else{const k=m.x-L,y=m.y-w;if(g>0){const b=a.replace("#",""),G=parseInt(b.slice(0,2),16),P=parseInt(b.slice(2,4),16),Z=parseInt(b.slice(4,6),16),Y=g/100;if(c.fillStyle=`rgba(${G}, ${P}, ${Z}, ${Y})`,c.beginPath(),i==="rectangle")c.rect(L,w,k,y);else if(i==="circle"){const j=Math.max(Math.abs(k),Math.abs(y))/2,W=L+k/2,H=w+y/2;c.arc(W,H,j,0,Math.PI*2)}else i==="triangle"&&(c.moveTo(L+k/2,w),c.lineTo(L,w+y),c.lineTo(L+k,w+y),c.closePath());c.fill()}if(o==="dashed"||o==="dotted"){if(i==="rectangle"){const b=[{x:L,y:w},{x:L+k,y:w},{x:L+k,y:w+y},{x:L,y:w+y}];$e(c,b,o,p,B)}else if(i==="triangle"){const b=[{x:L+k/2,y:w},{x:L,y:w+y},{x:L+k,y:w+y}];$e(c,b,o,p,B)}else if(i==="circle"){const b=Math.max(Math.abs(k),Math.abs(y))/2,G=L+k/2,P=w+y/2,Z=2*Math.PI*b,Y=Math.max(p*2.5,Math.min(p*4,Z/25)),j=Math.max(p*1.5,Y*.5),W=Y+j;if(o==="dashed"){const H=Math.floor(Z/W);if(H===0)c.strokeStyle=B,c.lineWidth=p,c.beginPath(),c.arc(G,P,b,0,Math.PI*2),c.stroke();else{const O=(Z-H*Y)/H,I=(Y+O)/b,R=Y/b,V=Y+O,A=H*V-O,U=(Z-A)/2/b;for(let K=0;K<H;K++){const q=U+K*I,Q=q+R;c.beginPath(),c.arc(G,P,b,q,Q),c.stroke()}}}else{const H=p/2,N=Math.max(p*2,Z/40),O=Math.max(8,Math.round(Z/N)),I=2*Math.PI/O;c.fillStyle=B;for(let R=0;R<O;R++){const V=R*I,A=G+b*Math.cos(V),_=P+b*Math.sin(V);c.beginPath(),c.arc(A,_,H,0,Math.PI*2),c.fill()}}}}else{if(c.beginPath(),i==="rectangle")c.rect(L,w,k,y);else if(i==="circle"){const b=Math.max(Math.abs(k),Math.abs(y))/2,G=L+k/2,P=w+y/2;c.arc(G,P,b,0,Math.PI*2)}else i==="triangle"&&(c.moveTo(L+k/2,w),c.lineTo(L,w+y),c.lineTo(L+k,w+y),c.closePath());c.stroke()}}c.setLineDash([])},[t]);return{redraw:d,clearCanvas:h,drawLivePath:l,drawPreviewShape:s,tempObjectDataRef:e,tempPathDataRef:r}},Rn=()=>{const t=M.useRef(null),e=M.useRef({x:0,y:0}),[r,h]=M.useState("default");return{draggedObjectRef:t,dragOffsetRef:e,cursorStyle:r,setCursorStyle:h,startDrag:(u,o,p)=>{if(t.current={...u},u.type==="path"){const a=ct(u,p);e.current={x:o.x-a.points[0].x,y:o.y-a.points[0].y}}else if(u.type==="shape"&&(u.shape==="line"||u.shape==="arrow")){const a=(u.startX+u.endX)/2,g=(u.startY+u.endY)/2;e.current={x:o.x-a,y:o.y-g}}else if(u.x!==void 0&&u.y!==void 0)e.current={x:o.x-u.x,y:o.y-u.y};else{const a=ct(u,p);a.centerX!==void 0?e.current={x:o.x-a.centerX,y:o.y-a.centerY}:e.current={x:o.x-a.x,y:o.y-a.y}}},updateDragPosition:u=>{if(!t.current)return null;let o={...t.current};if(o.type==="path"){const p=u.x-e.current.x-o.points[0].x,a=u.y-e.current.y-o.points[0].y;o.points=o.points.map(g=>({x:g.x+p,y:g.y+a}))}else if(o.type==="shape"&&(o.shape==="line"||o.shape==="arrow")){const p=(o.startX+o.endX)/2,a=(o.startY+o.endY)/2,g=u.x-e.current.x,x=u.y-e.current.y,c=g-p,L=x-a;o.startX+=c,o.startY+=L,o.endX+=c,o.endY+=L}else o.x!==void 0&&o.y!==void 0&&(o.x=u.x-e.current.x,o.y=u.y-e.current.y);return t.current=o,o},endDrag:()=>{const u=t.current;return t.current=null,e.current={x:0,y:0},u},updateCursor:(u,o,p,a,g,x)=>{if(a){const L=a?a.startsWith("path_")?{...p[parseInt(a.replace("path_",""))],type:"path",id:a}:o.find(w=>w.id===a):null;if(L){const w=ct(L,x);if(w){const C=ue(u.x,u.y,w,L);if(C){h(C.cursor);return}if(ie(u.x,u.y,w)){h("move");return}}}}const c=Qe(u.x,u.y,o,p,g,x);h(c?"pointer":"default")},checkForHandle:(u,o,p)=>{const a=ct(o,p);return a?ue(u.x,u.y,a,o):null},checkIfPointInSelectedBounds:(u,o,p)=>{if(!o)return!1;const a=ct(o,p);return a&&ie(u.x,u.y,a)}}},Bt=10,Fn=8,Zn=70,An=5,Hn=50,_n=(t,e,r,h,d)=>{const l=d*Math.PI/180,s=Math.cos(l),i=Math.sin(l),f=r/2,m=h/2;return[{x:-f,y:-m},{x:f,y:-m},{x:f,y:m},{x:-f,y:m}].map(o=>({x:t+(o.x*s-o.y*i),y:e+(o.x*i+o.y*s)}))},Tt=(t,e,r,h,d)=>{const l=d*Math.PI/180,s=Math.cos(l),i=Math.sin(l),f=t-r,m=e-h;return{x:r+(f*s-m*i),y:h+(f*i+m*s)}},Wn=()=>{const t=M.useRef(null);return{resizeHandleRef:t,startResize:(d,l,s,i)=>{let f,m;l.type==="player"||l.type==="ball"?(f=(l.radius||20)*2,m=(l.radius||20)*2):l.type==="figure"?(f=l.size||30,m=l.size||30):l.type==="text"?(f=i.originalWidth||i.width,m=i.originalHeight||i.height):(f=l.width!==void 0?l.width:i.width,m=l.height!==void 0?l.height:i.height);let u,o;l.shape==="line"||l.shape==="arrow"?(u=(l.startX+l.endX)/2,o=(l.startY+l.endY)/2):l.type==="player"||l.type==="ball"||l.type==="figure"?(u=l.x,o=l.y):l.type==="text"?(u=i.centerX,o=i.centerY):(u=l.x+f/2,o=l.y+m/2);const p=l.rotation||0,a=_n(u,o,f,m,p);let g={x:u,y:o},x={x:s.x,y:s.y};d.name==="topLeft"?(x=a[0],g=a[2]):d.name==="topRight"?(x=a[1],g=a[3]):d.name==="bottomRight"?(x=a[2],g=a[0]):d.name==="bottomLeft"?(x=a[3],g=a[1]):d.name==="top"?(x={x:(a[0].x+a[1].x)/2,y:(a[0].y+a[1].y)/2},g={x:(a[2].x+a[3].x)/2,y:(a[2].y+a[3].y)/2}):d.name==="bottom"?(x={x:(a[2].x+a[3].x)/2,y:(a[2].y+a[3].y)/2},g={x:(a[0].x+a[1].x)/2,y:(a[0].y+a[1].y)/2}):d.name==="left"?(x={x:(a[0].x+a[3].x)/2,y:(a[0].y+a[3].y)/2},g={x:(a[1].x+a[2].x)/2,y:(a[1].y+a[2].y)/2}):d.name==="right"&&(x={x:(a[1].x+a[2].x)/2,y:(a[1].y+a[2].y)/2},g={x:(a[0].x+a[3].x)/2,y:(a[0].y+a[3].y)/2});const c=x.x-s.x,L=x.y-s.y,w=x.x-g.x,C=x.y-g.y,$=w*w+C*C,T=Tt(s.x,s.y,u,o,-p),S=T.x-u,B=T.y-o;let E=0;(l.shape==="circle"||["player","ball","figure"].includes(l.type))&&(E=Math.sqrt(Math.pow(s.x-u,2)+Math.pow(s.y-o,2))),t.current={handle:d.name,object:{...l},startPos:s,anchorPoint:g,startVectorX:w,startVectorY:C,startLengthSq:$,pressOffsetX:c,pressOffsetY:L,startFontSize:l.fontSize||16,startX:l.x,startY:l.y,lineStartX:l.startX,lineStartY:l.startY,lineEndX:l.endX,lineEndY:l.endY,startCenterX:u,startCenterY:o,rotation:p,startLocalLeft:-Math.abs(f)/2,startLocalRight:Math.abs(f)/2,startLocalTop:-Math.abs(m)/2,startLocalBottom:Math.abs(m)/2,startFlippedX:f<0,startFlippedY:m<0,isHandleLeft:S<0,isHandleRight:S>0,isHandleTop:B<0,isHandleBottom:B>0,startWidth:f,startHeight:m,startDistanceFromCenter:E}},updateResize:d=>{if(!t.current)return null;const{handle:l,object:s,startFontSize:i,startCenterX:f,startCenterY:m,startDistanceFromCenter:u,rotation:o,lineStartX:p,lineStartY:a,lineEndX:g,lineEndY:x,startPos:c,startLocalLeft:L,startLocalRight:w,startLocalTop:C,startLocalBottom:$,isHandleLeft:T,isHandleRight:S,isHandleTop:B,isHandleBottom:E,startFlippedX:k,startFlippedY:y,startWidth:b,startHeight:G,startX:P,startY:Z,anchorPoint:Y,startVectorX:j,startVectorY:W,startLengthSq:H,pressOffsetX:N,pressOffsetY:O}=t.current;let I={...s};if(s.type==="text"){const R=d.x+N,V=d.y+O,A=R-Y.x,_=V-Y.y,tt=A*j+_*W;let U=tt/H;if(!["topLeft","topRight","bottomLeft","bottomRight"].includes(l)){const rt=Math.sqrt(H),$t=Math.sqrt(A*A+_*_),ht=tt>0?1:-1;U=$t/rt*ht}const K=8;let q=i*U;q<K&&(q=K,U=K/i),U<.1&&(U=.1),I.fontSize=i*U;const Q=b*U,nt=G*U,et=j*U,dt=W*U,Ct=Y.x+et*.5,at=Y.y+dt*.5;return I.x=Ct-Q/2,I.y=at-nt/2,I.width=Q,I.height=nt,t.current.object=I,I}if(s.type==="shape"&&(s.shape==="line"||s.shape==="arrow")){const R=Tt(p,a,f,m,o),V=Tt(g,x,f,m,o);let A={...R},_={...V};["start","topLeft","left","top"].includes(l)?A={x:d.x,y:d.y}:_={x:d.x,y:d.y};const tt=(A.x+_.x)/2,U=(A.y+_.y)/2,K=Tt(A.x,A.y,tt,U,-o),q=Tt(_.x,_.y,tt,U,-o);return I.startX=K.x,I.startY=K.y,I.endX=q.x,I.endY=q.y,t.current.object=I,I}if(s.shape==="circle"||["player","ball","figure"].includes(s.type)){const R=Math.sqrt(Math.pow(d.x-f,2)+Math.pow(d.y-m,2)),V=u>0?R/u:1,A=Math.abs(b);if(s.shape==="circle"){const _=Math.max(Bt,A*V);I.width=_,I.height=_,I.x=f-_/2,I.y=m-_/2}else if(s.type==="player"){const _=A/2*V;I.radius=Math.max(Fn,Math.min(Zn,_))}else if(s.type==="ball"){const _=A/2*V;I.radius=Math.max(An,Math.min(Hn,_))}else I.size=Math.max(10,A*V);return t.current.object=I,I}if(s.type==="shape"){const R=o*Math.PI/180,V=Math.cos(-R),A=Math.sin(-R),_=d.x-c.x,tt=d.y-c.y,U=_*V-tt*A,K=_*A+tt*V;let q=L,Q=w,nt=C,et=$;T?q+=U:S&&(Q+=U),B?nt+=K:E&&(et+=K);let dt=k,Ct=y;q>Q&&([q,Q]=[Q,q],dt=!dt),nt>et&&([nt,et]=[et,nt],Ct=!Ct);let at=Q-q,rt=et-nt;at<Bt&&(at=Bt,T?q=Q-at:Q=q+at),rt<Bt&&(rt=Bt,B?nt=et-rt:et=nt+rt);const $t=(q+Q)/2,ht=(nt+et)/2,St=$t*Math.cos(R)-ht*Math.sin(R),Jt=$t*Math.sin(R)+ht*Math.cos(R),Kt=f+St,Rt=m+Jt;let Ft=dt?-at:at,Zt=Ct?-rt:rt;return I.width=Ft,I.height=Zt,I.x=Kt-Ft/2,I.y=Rt-Zt/2,t.current.object=I,I}return I},endResize:()=>{const d=t.current;return t.current=null,d?d.object:null}}},Vn=()=>{const t=M.useRef(!1),e=M.useRef([]),r=M.useRef(null),h=M.useRef(!1);return{drawingRef:t,currentPathRef:e,shapeStartRef:r,isDrawingShapeRef:h,startDrawing:o=>{t.current=!0,e.current=[{x:o.x,y:o.y}]},continueDrawing:o=>t.current?(e.current.push({x:o.x,y:o.y}),e.current):null,endDrawing:()=>{const o=e.current;return t.current=!1,e.current=[],o.length>1?o:null},startShape:o=>{h.current=!0,r.current=o},getShapePreview:o=>!h.current||!r.current?null:{start:r.current,end:o},endShape:(o,p)=>{if(!h.current||!r.current)return null;const a=r.current;let g=null;if(p==="line"||p==="arrow")Math.sqrt(Math.pow(o.x-a.x,2)+Math.pow(o.y-a.y,2))>5&&(g={startX:a.x,startY:a.y,endX:o.x,endY:o.y});else{const x=o.x-a.x,c=o.y-a.y;Math.abs(x)>5&&Math.abs(c)>5&&(g={x:a.x,y:a.y,width:x,height:c})}return h.current=!1,r.current=null,g},cancelDrawing:()=>{t.current=!1,e.current=[],h.current=!1,r.current=null}}},jn=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,Nn=v.div`
  border: 2px solid #ddd;
  margin-top: 10px;
  background: white;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  position: relative;
  cursor: ${t=>t.cursor};
`,On=v.canvas`
  display: block;
  background: white;
`,qn=v.textarea`
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
`,Un=({fieldSize:t,fieldType:e})=>{const r=M.useRef(null),h=M.useRef(null),d=M.useRef(null),l=M.useRef(!1),s=M.useRef(null),[i,f]=M.useState({width:800,height:500}),[m,u]=M.useState(!1),[o,p]=M.useState(""),[a,g]=M.useState({x:0,y:0}),x=mt(),{activeTool:c,drawColor:L,brushSize:w,paths:C,objects:$,selectedObjectId:T,team1:S,team2:B,textFontSize:E,textColor:k,shapeBorderColor:y,shapeBorderOpacity:b,shapeFillColor:G,shapeFillOpacity:P,shapeBorderWidth:Z,shapeBorderStyle:Y,shapeLineCapStart:j,shapeLineCapEnd:W}=Xt(X=>X.tacticsBoard),{redraw:H,drawLivePath:N,drawPreviewShape:O,tempObjectDataRef:I,tempPathDataRef:R}=Xn(r),{cursorStyle:V,setCursorStyle:A,startDrag:_,updateDragPosition:tt,endDrag:U,updateCursor:K,checkForHandle:q,draggedObjectRef:Q,checkIfPointInSelectedBounds:nt}=Rn(),{resizeHandleRef:et,startResize:dt,updateResize:Ct,endResize:at}=Wn(),{drawingRef:rt,currentPathRef:$t,shapeStartRef:ht,isDrawingShapeRef:St,startDrawing:Jt,continueDrawing:Kt,endDrawing:Rt,startShape:Ft,endShape:Zt,cancelDrawing:nn}=Vn(),rn=1500,on=640,an=1400,Qt=t.width/t.height,se=M.useCallback(()=>{var de;const X=h.current;if(!X)return{width:800,height:500};const z=((de=X.parentElement)==null?void 0:de.clientWidth)||window.innerWidth,F=z/rn,D=an*F,J=on*F,lt=D,yt=lt/Qt,ce=J,gn=ce*Qt;let vt,kt;yt<=J?(vt=lt,kt=yt):(vt=gn,kt=ce);const ee=z*.95;if(vt>ee){const xn=ee/vt;vt=ee,kt=kt*xn}return{width:Math.floor(vt),height:Math.floor(kt)}},[Qt]),te=X=>{const z=r.current;if(!z)return{x:0,y:0};const F=z.getBoundingClientRect(),D=z.width/F.width,J=z.height/F.height;return{x:(X.clientX-F.left)*D,y:(X.clientY-F.top)*J}},sn=X=>{if(X.button!==0)return;const z=te(X),F=r.current;if(m){le();return}if(c==="cursor"){const D=T?T.startsWith("path_")?{...C[parseInt(T.replace("path_",""))],type:"path",id:T}:$.find(lt=>lt.id===T):null;if(D){const lt=ct(D,F);if(lt){const yt=q(z,D,F);if(yt){dt(yt,D,z,lt),D.type==="path"?R.current={...D}:I.current={...D};return}if(nt(z,D,F)){_(D,z,F),D.type==="path"?R.current={...D}:I.current={...D};return}}}const J=Qe(z.x,z.y,$,C,w,F);J?(x(he(J.id)),ct(J,F)&&(_(J,z,F),J.type==="path"?R.current={...J}:I.current={...J})):x(Yt())}else if(c==="drawing")Jt(z);else if(c.startsWith("shape_"))Ft(z);else if(c.startsWith("figure_")){const D={player:"👤",goalkeeper:"🧤",coach:"🧠",referee:"⚖️",goal:"🥅",cone:"🟨"},J=c.replace("figure_","");x(ne({type:"figure",figureType:J,icon:D[J],x:z.x,y:z.y,size:30}))}else if(c==="ball")x(ne({type:"ball",x:z.x,y:z.y,radius:10}));else if(c==="text"){const D=`text_${Date.now()}_${Math.random()}`;u(!0),p(""),g(z),s.current=D,x(he(D))}X.preventDefault()},ln=X=>{const z=te(X),F=r.current;if(c==="cursor"&&!Q.current&&!et.current&&K(z,$,C,T,w,F),et.current){const D=Ct(z);D&&(D.type==="path"?R.current=D:I.current=D,H(C,$,T,c,L,w))}else if(Q.current){const D=tt(z);D&&(D.type==="path"?R.current=D:I.current=D,H(C,$,T,c,L,w))}else if(rt.current){const D=Kt(z);D&&D.length>=2&&N(D,L,w)}else if(St.current&&ht.current){const D=c.replace("shape_","");H(C,$,T,c,L,w),O(D,ht.current,z,y,Y,Z,G,P)}X.preventDefault()},cn=X=>{const z=te(X);if(rt.current){const F=Rt();F&&x(pe({points:F,color:L,brushSize:w}))}if(St.current&&ht.current){const F=c.replace("shape_",""),D=Zt(z,F);if(D){const J={type:"shape",shape:F,...D,borderColor:y,borderOpacity:b,borderWidth:Z,borderStyle:Y,color:y};F==="line"||F==="arrow"?(J.lineCapStart=j,J.lineCapEnd=F==="arrow"?"arrow":W):(J.fillColor=G,J.fillOpacity=P),x(ne(J))}}if(Q.current){const F=U();if(F)if(F.type==="path"){const D=parseInt(F.id.replace("path_",""));x(At({index:D,updates:F}))}else x(ft({id:F.id,updates:F}));I.current=null,R.current=null}if(et.current){const F=at();if(F&&I.current)if(F.type==="path"){const D=parseInt(F.id.replace("path_",""));x(At({index:D,updates:R.current}))}else x(ft({id:I.current.id,updates:I.current}));I.current=null,R.current=null}A("default"),X.preventDefault()},dn=X=>{if(rt.current){const z=Rt();z&&x(pe({points:z,color:L,brushSize:w}))}if(St.current&&nn(),Q.current){const z=U();if(z&&I.current)if(z.type==="path"){const F=parseInt(z.id.replace("path_",""));x(At({index:F,updates:R.current}))}else x(ft({id:I.current.id,updates:I.current}))}if(et.current){const z=at();if(z&&I.current)if(z.object.type==="path"){const F=parseInt(z.object.id.replace("path_",""));x(At({index:F,updates:R.current}))}else x(ft({id:I.current.id,updates:I.current}))}I.current=null,R.current=null,A("default")},hn=X=>{p(X.target.value),d.current&&(d.current.style.height="auto",d.current.style.height=d.current.scrollHeight+"px")},le=()=>{const X=o.trim();X&&x(mn({id:s.current,x:a.x,y:a.y,text:X,fontSize:E,color:k})),u(!1),p(""),s.current=null,x(Dt("cursor"))},pn=X=>{X.key==="Escape"&&(X.preventDefault(),u(!1),p(""),x(Yt()),x(Dt("cursor")))};return M.useEffect(()=>{const X=()=>{const z=se();f(z)};return X(),window.addEventListener("resize",X),()=>window.removeEventListener("resize",X)},[se]),M.useEffect(()=>{const X=r.current,z=h.current;X&&z&&(X.width=i.width,X.height=i.height,X.style.width=`${i.width}px`,X.style.height=`${i.height}px`,z.style.width=`${i.width}px`,z.style.height=`${i.height}px`,l.current||(x(un({canvasWidth:i.width,canvasHeight:i.height})),l.current=!0),H(C,$,T,c,L,w))},[i,x,H,C,$,T,c,L,w]),M.useEffect(()=>{H(C,$,T,c,L,w)},[C,$,T,H,c,L,w]),M.useEffect(()=>{if(i.width>0&&i.height>0){const X=$.filter(D=>D.type==="player"),z=X.filter(D=>D.team===1),F=X.filter(D=>D.team===2);(z.length!==S.count||F.length!==B.count)&&x(fn({canvasWidth:i.width,canvasHeight:i.height}))}},[S.count,B.count,i,$,x]),M.useEffect(()=>{if(m&&d.current&&r.current){const X=d.current;setTimeout(()=>{X.focus(),X.select()},0);const z=r.current,F=z.getBoundingClientRect(),D=z.width/F.width,J=z.height/F.height,lt=a.x/D,yt=a.y/J;X.style.left=`${lt}px`,X.style.top=`${yt}px`,X.style.fontSize=`${E/J}px`,X.style.color=k,X.style.width="auto",X.style.height="auto"}},[m,a,k,E]),M.useEffect(()=>{const X=z=>{z.key==="Escape"&&!m&&x(Yt())};return window.addEventListener("keydown",X),()=>window.removeEventListener("keydown",X)},[T,m,x]),M.useEffect(()=>{x(Yt())},[c,x]),n.jsx(jn,{children:n.jsxs(Nn,{ref:h,cursor:V,children:[n.jsx(On,{ref:r,onMouseDown:sn,onMouseMove:ln,onMouseUp:cn,onMouseLeave:dn}),m&&n.jsx(qn,{ref:d,value:o,onChange:hn,onBlur:le,onKeyDown:pn,placeholder:"Введіть текст",rows:1})]})})},Jn=t=>M.createElement("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32",xmlSpace:"preserve",...t},M.createElement("path",{className:"st0",d:"M20,29h-8c-2.2,0-4-1.8-4-4V7c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v18C24,27.2,22.2,29,20,29z"}),M.createElement("circle",{className:"st0",cx:16,cy:16,r:4}),M.createElement("line",{className:"st0",x1:8,y1:16,x2:24,y2:16}),M.createElement("rect",{x:13,y:3,className:"st0",width:6,height:4}),M.createElement("rect",{x:13,y:25,className:"st0",width:6,height:4})),Kn=t=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{d:"M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Qn=t=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{d:"M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"})),tr=t=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("circle",{cx:12,cy:12,r:9,strokeWidth:2}),M.createElement("path",{d:"M18 18L6 6",strokeWidth:2})),tn=t=>M.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},M.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fillRule:"evenodd"},M.createElement("g",{id:"Arrow",transform:"translate(-528.000000, 0.000000)",fillRule:"nonzero"},M.createElement("g",{id:"forward_2_line",transform:"translate(528.000000, 0.000000)"},M.createElement("path",{d:"M17.954,11.6767 C16.6468,9.47493 14.2448,8 11.5,8 C7.35786,8 4,11.3579 4,15.5 C4,16.0523 3.55228,16.5 3,16.5 C2.44772,16.5 2,16.0523 2,15.5 C2,10.2533 6.25329,6 11.5,6 C14.6814,6 17.4961,7.56337 19.22,9.96279 L19.757,6.91751 C19.8529,6.37361 20.3715,6.01044 20.9154,6.10635 C21.4593,6.20225 21.8225,6.72091 21.7266,7.2648 L20.6847,13.1736 C20.6386,13.4348 20.4907,13.667 20.2735,13.8192 C19.9896,14.0179 19.6122,14.0542 19.2977,13.9445 L13.6174,12.9429 C13.0735,12.847 12.7103,12.3284 12.8062,11.7845 C12.9021,11.2406 13.4208,10.8774 13.9647,10.9733 L17.954,11.6767 Z",id:"\\u8DEF\\u5F84"}))))),er=t=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.93417 2C7.95604 2 7.97799 2 8 2L16.0658 2C16.9523 1.99995 17.7161 1.99991 18.3278 2.08215C18.9833 2.17028 19.6117 2.36902 20.1213 2.87868C20.631 3.38835 20.8297 4.0167 20.9179 4.67221C21.0001 5.28388 21.0001 6.0477 21 6.9342L21 7.95C21 8.50229 20.5523 8.95 20 8.95C19.4477 8.95 19 8.50229 19 7.95V7.00001C19 6.02893 18.9979 5.40122 18.9357 4.93871C18.8774 4.50497 18.7832 4.36902 18.7071 4.2929C18.631 4.21677 18.495 4.12263 18.0613 4.06431C17.5988 4.00213 16.9711 4 16 4H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V4H8C7.02893 4 6.40122 4.00213 5.93871 4.06431C5.50497 4.12263 5.36902 4.21677 5.2929 4.2929C5.21677 4.36902 5.12263 4.50497 5.06431 4.93871C5.00213 5.40122 5 6.02893 5 7.00001V7.95C5 8.50229 4.55229 8.95 4 8.95C3.44772 8.95 3 8.50229 3 7.95V7.00001C3 6.97799 3 6.95604 3 6.93418C2.99995 6.04769 2.99991 5.28387 3.08215 4.67221C3.17028 4.0167 3.36902 3.38835 3.87868 2.87868C4.38835 2.36902 5.0167 2.17028 5.67221 2.08215C6.28387 1.99991 7.04769 1.99995 7.93417 2Z"}),M.createElement("path",{d:"M7 21H17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),en=t=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.51192 4.43057C6.82641 4.161 7.29989 4.19743 7.56946 4.51192L13.5695 11.5119C13.8102 11.7928 13.8102 12.2072 13.5695 12.4881L7.56946 19.4881C7.29989 19.8026 6.82641 19.839 6.51192 19.5695C6.19743 19.2999 6.161 18.8264 6.43057 18.5119L12.0122 12L6.43057 5.48811C6.161 5.17361 6.19743 4.70014 6.51192 4.43057ZM10.5121 4.43068C10.8266 4.16111 11.3001 4.19753 11.5697 4.51202L17.5697 11.512C17.8104 11.7929 17.8104 12.2073 17.5697 12.4882L11.5697 19.4882C11.3001 19.8027 10.8266 19.8391 10.5121 19.5696C10.1976 19.3 10.1612 18.8265 10.4308 18.512L16.0124 12.0001L10.4308 5.48821C10.1612 5.17372 10.1976 4.70024 10.5121 4.43068Z"})),nr=t=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("rect",{x:3,y:5,width:18,height:14,rx:2,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),rr=t=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),or=t=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.0001 5.94363L4.76627 18H19.2339L12.0001 5.94363ZM10.7138 4.20006C11.2964 3.22905 12.7037 3.22905 13.2863 4.20006L21.4032 17.7282C22.0031 18.728 21.2829 20 20.117 20H3.88318C2.71724 20 1.99706 18.728 2.59694 17.7282L10.7138 4.20006Z"})),ar=t=>M.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{d:"M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z"})),ir=t=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{d:"M6 12H18M18 12L13 7M18 12L13 17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),sr=v.div`
  position: relative;
  display: inline-block;
`,lr=v.button`
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
`,cr=v.div`
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
`,dr=v.button`
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
`,Se=v.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,re=[{id:"rectangle",name:"Прямокутник",icon:n.jsx(nr,{}),style:{stroke:"currentColor",fill:"none"}},{id:"circle",name:"Коло",icon:n.jsx(rr,{}),style:{stroke:"currentColor",fill:"none"}},{id:"triangle",name:"Трикутник",icon:n.jsx(or,{}),style:{fill:"currentColor",stroke:"none"}},{id:"line",name:"Лінія",icon:n.jsx(ar,{}),style:{fill:"currentColor",stroke:"none"}},{id:"arrow",name:"Стрілка",icon:n.jsx(ir,{}),style:{stroke:"currentColor",fill:"none"}}],hr=({activeTool:t,onSelectShape:e})=>{const[r,h]=M.useState(!1),[d,l]=M.useState({top:0,left:0}),s=M.useRef(null),i=M.useRef(null),f=t.startsWith("shape_"),m=f?t.replace("shape_",""):null,u=re.find(c=>c.id===m),o=()=>{if(i.current){const c=i.current.getBoundingClientRect();l({top:c.bottom+window.scrollY,left:c.left+window.scrollX})}h(!r)},p=c=>{e(c),h(!1)},a=c=>{s.current&&!s.current.contains(c.target)&&h(!1)};M.useEffect(()=>(document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}),[]);const g=()=>{const c=u||re[0];return n.jsx(Se,{children:ge.cloneElement(c.icon,c.style)})},x=c=>ge.cloneElement(c.icon,c.style);return n.jsxs(sr,{ref:s,children:[n.jsx(lr,{ref:i,title:"Геометричні фігури",onClick:o,active:f,children:g()}),n.jsx(cr,{isOpen:r,style:{top:d.top,left:d.left},children:re.map(c=>n.jsx(dr,{onClick:()=>p(c),title:c.name,children:n.jsx(Se,{children:x(c)})},c.id))})]})},pr=v.div`
  position: relative;
  display: inline-block;
`,gr=v.button`
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
`,xr=v.div`
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
`,ur=v.button`
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
`,ke=[{id:"player",name:"Гравець",icon:"👤"},{id:"goalkeeper",name:"Воротар",icon:"🧤"},{id:"coach",name:"Тренер",icon:"🧠"},{id:"referee",name:"Суддя",icon:"⚖️"},{id:"goal",name:"Ворота",icon:"🥅"},{id:"cone",name:"Стійка",icon:"🟨"}],fr=({activeTool:t,onSelectFigure:e})=>{const[r,h]=M.useState(!1),[d,l]=M.useState({top:0,left:0}),s=M.useRef(null),i=M.useRef(null),f=t.startsWith("figure_"),m=f?t.replace("figure_",""):null,u=ke.find(x=>x.id===m),o=()=>{if(i.current){const x=i.current.getBoundingClientRect();l({top:x.bottom+window.scrollY,left:x.left+window.scrollX})}h(!r)},p=x=>{e(x),h(!1)},a=x=>{s.current&&!s.current.contains(x.target)&&h(!1)};M.useEffect(()=>(document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}),[]);const g=()=>u?u.icon:"👤";return n.jsxs(pr,{ref:s,children:[n.jsx(gr,{ref:i,title:"Спортивні фігури",onClick:o,active:f,children:g()}),n.jsx(xr,{isOpen:r,style:{top:d.top,left:d.left},children:ke.map(x=>n.jsx(ur,{onClick:()=>p(x),title:x.name,children:x.icon},x.id))})]})},Be=t=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{d:"M9.19762 11.9582L9.91426 11.737L9.19762 11.9582ZM9.54558 10.8683L9.08995 10.2726L9.54558 10.8683ZM9.91896 14.2952L9.20232 14.5164L9.91896 14.2952ZM14.0579 14.2952L13.3413 14.074L14.0579 14.2952ZM14.4313 10.8683L13.9757 11.4641V11.4641L14.4313 10.8683ZM14.7793 11.9582L15.4959 12.1794L14.7793 11.9582ZM12.5948 9.46375L13.0504 8.86802L12.5948 9.46375ZM11.3821 9.46375L11.8377 10.0595L11.3821 9.46375ZM20.1847 17.75C20.5989 17.75 20.9347 17.4142 20.9347 17C20.9347 16.5858 20.5989 16.25 20.1847 16.25V17.75ZM14.7793 19.7351L14.0677 19.4982L14.7793 19.7351ZM13.4801 21.2631C13.3492 21.6561 13.5617 22.0807 13.9547 22.2116C14.3477 22.3424 14.7724 22.1299 14.9033 21.7369L13.4801 21.2631ZM3.99769 16.25C3.58348 16.25 3.24769 16.5858 3.24769 17C3.24769 17.4142 3.58348 17.75 3.99769 17.75V16.25ZM9.40314 19.7351L10.1147 19.4982L9.40314 19.7351ZM9.27917 21.7369C9.41002 22.1299 9.83469 22.3424 10.2277 22.2116C10.6207 22.0807 10.8332 21.6561 10.7024 21.2631L9.27917 21.7369ZM8.22071 17.3775L7.78185 17.9857L8.22071 17.3775ZM5.556 5.45942C5.4489 5.05928 5.03772 4.82173 4.63759 4.92882C4.23746 5.03591 3.9999 5.44709 4.10699 5.84723L5.556 5.45942ZM5.24951 7.21519L4.52501 7.40909V7.40909L5.24951 7.21519ZM3.59168 11.5885L3.17811 10.9628L3.17811 10.9628L3.59168 11.5885ZM1.62739 11.9879C1.28185 12.2163 1.18689 12.6816 1.4153 13.0271C1.64372 13.3727 2.109 13.4676 2.45454 13.2392L1.62739 11.9879ZM19.934 5.84732C20.0411 5.44719 19.8035 5.036 19.4034 4.92891C19.0033 4.82182 18.5921 5.05938 18.485 5.45951L19.934 5.84732ZM18.7915 7.21528L18.067 7.02137L18.7915 7.21528ZM20.4493 11.5886L20.0357 12.2143L20.4493 11.5886ZM21.5864 13.2393C21.932 13.4677 22.3973 13.3728 22.6257 13.0272C22.8541 12.6817 22.7591 12.2164 22.4136 11.988L21.5864 13.2393ZM16.0903 3.83623C16.4288 3.5975 16.5096 3.12956 16.2709 2.79107C16.0322 2.45257 15.5642 2.3717 15.2257 2.61044L16.0903 3.83623ZM14.3376 4.15456L14.7699 4.76746L14.3376 4.15456ZM9.66562 4.10403L9.22021 4.70744V4.70744L9.66562 4.10403ZM8.61539 2.39659C8.28213 2.15059 7.81255 2.22133 7.56656 2.55459C7.32056 2.88784 7.3913 3.35742 7.72456 3.60341L8.61539 2.39659ZM14.7793 11.3678L14.0627 11.589L14.7793 11.3678ZM9.19762 11.3678L9.91426 11.589L9.19762 11.3678ZM21.2269 12C21.2269 17.1095 17.0899 21.25 11.9885 21.25V22.75C17.92 22.75 22.7269 17.9362 22.7269 12H21.2269ZM11.9885 21.25C6.88701 21.25 2.75 17.1095 2.75 12H1.25C1.25 17.9362 6.05695 22.75 11.9885 22.75V21.25ZM2.75 12C2.75 6.89055 6.88701 2.75 11.9885 2.75V1.25C6.05695 1.25 1.25 6.06376 1.25 12H2.75ZM11.9885 2.75C17.0899 2.75 21.2269 6.89055 21.2269 12H22.7269C22.7269 6.06376 17.92 1.25 11.9885 1.25V2.75ZM12.1392 10.0595L13.9757 11.4641L14.887 10.2726L13.0504 8.86802L12.1392 10.0595ZM14.0626 11.737L13.3413 14.074L14.7746 14.5164L15.4959 12.1794L14.0626 11.737ZM13.1036 14.25H10.8733V15.75H13.1036V14.25ZM10.6356 14.074L9.91426 11.737L8.48098 12.1794L9.20232 14.5164L10.6356 14.074ZM10.0012 11.4641L11.8377 10.0595L10.9265 8.86802L9.08995 10.2726L10.0012 11.4641ZM20.1847 16.25H18.5696V17.75H20.1847V16.25ZM14.0677 19.4982L13.4801 21.2631L14.9033 21.7369L15.4909 19.972L14.0677 19.4982ZM18.5696 16.25C17.892 16.25 17.3207 16.2489 16.8555 16.302C16.3711 16.3574 15.9264 16.4781 15.5228 16.7693L16.4006 17.9857C16.5201 17.8994 16.6846 17.8313 17.0258 17.7923C17.3863 17.7511 17.8574 17.75 18.5696 17.75V16.25ZM15.4909 19.972C15.7161 19.2956 15.8662 18.8484 16.0193 18.5189C16.1643 18.2069 16.2809 18.072 16.4006 17.9857L15.5228 16.7693C15.1193 17.0605 14.8645 17.4444 14.659 17.8868C14.4615 18.3117 14.282 18.8545 14.0677 19.4982L15.4909 19.972ZM3.99769 17.75H5.61279V16.25H3.99769V17.75ZM8.69154 19.972L9.27917 21.7369L10.7024 21.2631L10.1147 19.4982L8.69154 19.972ZM5.61279 17.75C6.325 17.75 6.79611 17.7511 7.15658 17.7923C7.49784 17.8313 7.66228 17.8994 7.78185 17.9857L8.65958 16.7693C8.25598 16.4781 7.81137 16.3574 7.32692 16.302C6.86168 16.2489 6.29041 16.25 5.61279 16.25V17.75ZM10.1147 19.4982C9.90043 18.8545 9.7209 18.3117 9.52346 17.8868C9.31791 17.4445 9.06311 17.0605 8.65958 16.7693L7.78185 17.9857C7.90148 18.072 8.01815 18.2069 8.16314 18.5189C8.31624 18.8484 8.46634 19.2956 8.69154 19.972L10.1147 19.4982ZM4.10699 5.84723L4.52501 7.40909L5.97401 7.02128L5.556 5.45942L4.10699 5.84723ZM3.17811 10.9628L1.62739 11.9879L2.45454 13.2392L4.00526 12.2142L3.17811 10.9628ZM4.52501 7.40909C4.70933 8.09777 4.83021 8.55381 4.88378 8.91324C4.93452 9.25362 4.9114 9.43069 4.85896 9.56902L6.26156 10.1007C6.43795 9.63541 6.43932 9.17465 6.3674 8.69211C6.29831 8.22862 6.14941 7.67663 5.97401 7.02128L4.52501 7.40909ZM4.00526 12.2142C4.57077 11.8404 5.04807 11.5262 5.407 11.2252C5.78074 10.9119 6.08516 10.5661 6.26156 10.1007L4.85896 9.56902C4.80654 9.70729 4.70659 9.855 4.44321 10.0759C4.16501 10.3091 3.77244 10.57 3.17811 10.9628L4.00526 12.2142ZM18.485 5.45951L18.067 7.02137L19.516 7.40918L19.934 5.84732L18.485 5.45951ZM20.0357 12.2143L21.5864 13.2393L22.4136 11.988L20.8629 10.9629L20.0357 12.2143ZM18.067 7.02137C17.8916 7.67672 17.7427 8.22871 17.6736 8.6922C17.6017 9.17474 17.603 9.6355 17.7794 10.1008L19.182 9.56911C19.1296 9.43078 19.1065 9.25372 19.1572 8.91333C19.2108 8.5539 19.3316 8.09787 19.516 7.40918L18.067 7.02137ZM20.8629 10.9629C20.2685 10.5701 19.876 10.3092 19.5978 10.0759C19.3344 9.85509 19.2344 9.70739 19.182 9.56911L17.7794 10.1008C17.9558 10.5662 18.2602 10.912 18.634 11.2253C18.9929 11.5263 19.4702 11.8405 20.0357 12.2143L20.8629 10.9629ZM15.2257 2.61044L13.9054 3.54166L14.7699 4.76746L16.0903 3.83623L15.2257 2.61044ZM10.111 3.50061L8.61539 2.39659L7.72456 3.60341L9.22021 4.70744L10.111 3.50061ZM13.9054 3.54166C13.3231 3.9523 12.9373 4.22303 12.6189 4.39721C12.3174 4.56214 12.1438 4.60125 11.9966 4.59965L11.9803 6.09957C12.478 6.10495 12.9109 5.94721 13.3387 5.7132C13.7496 5.48845 14.2159 5.15817 14.7699 4.76746L13.9054 3.54166ZM9.22021 4.70744C9.76562 5.11004 10.2247 5.45033 10.6306 5.68391C11.0533 5.92712 11.4827 6.09418 11.9803 6.09957L11.9966 4.59965C11.8494 4.59806 11.6767 4.5552 11.3788 4.38379C11.0642 4.20276 10.6843 3.92375 10.111 3.50061L9.22021 4.70744ZM13.9757 11.4641C14.0179 11.4963 14.0475 11.5399 14.0627 11.589L15.4959 11.1465C15.3911 10.807 15.1828 10.4989 14.887 10.2726L13.9757 11.4641ZM14.0627 11.589C14.0773 11.6364 14.0779 11.6876 14.0626 11.737L15.4959 12.1794C15.6023 11.8349 15.5974 11.4754 15.4959 11.1465L14.0627 11.589ZM18.1938 9.14203L14.4923 10.6748L15.0662 12.0607L18.7677 10.5279L18.1938 9.14203ZM13.0504 8.86802C12.7371 8.62838 12.3624 8.50841 11.9885 8.50841V10.0084C12.0419 10.0084 12.0945 10.0253 12.1392 10.0595L13.0504 8.86802ZM11.9885 8.50841C11.6146 8.50841 11.2398 8.62838 10.9265 8.86802L11.8377 10.0595C11.8824 10.0253 11.935 10.0084 11.9885 10.0084V8.50841ZM12.7385 9.25841V5.34961H11.2385V9.25841H12.7385ZM13.3413 14.074C13.3259 14.1241 13.2962 14.166 13.2572 14.1967L14.1852 15.3752C14.4575 15.1608 14.6671 14.8646 14.7746 14.5164L13.3413 14.074ZM13.2572 14.1967C13.214 14.2308 13.1607 14.25 13.1036 14.25V15.75C13.5063 15.75 13.8846 15.6119 14.1852 15.3752L13.2572 14.1967ZM16.5291 16.887L14.2886 14.2954L13.1538 15.2765L15.3944 17.868L16.5291 16.887ZM10.8733 14.25C10.8162 14.25 10.7629 14.2308 10.7197 14.1967L9.79172 15.3752C10.0923 15.6119 10.4706 15.75 10.8733 15.75V14.25ZM10.7197 14.1967C10.6807 14.166 10.651 14.1241 10.6356 14.074L9.20232 14.5164C9.3098 14.8646 9.51943 15.1608 9.79172 15.3752L10.7197 14.1967ZM8.81059 17.8407L10.8456 15.2492L9.66584 14.3228L7.63084 16.9143L8.81059 17.8407ZM9.91426 11.737C9.89899 11.6876 9.89961 11.6364 9.91426 11.589L8.48099 11.1465C8.37949 11.4754 8.37465 11.8349 8.48098 12.1794L9.91426 11.737ZM9.91426 11.589C9.9294 11.5399 9.95905 11.4963 10.0012 11.4641L9.08995 10.2726C8.79412 10.4989 8.58579 10.807 8.48099 11.1465L9.91426 11.589ZM9.48889 10.6766L5.85153 9.14373L5.269 10.526L8.90636 12.0589L9.48889 10.6766Z"})),mr=t=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5262 17.4999C18.4887 22.7611 11.7612 24.5637 6.49994 21.5262C1.23873 18.4886 -0.563901 11.7611 2.47367 6.49988C5.51123 1.23866 12.2387 -0.563962 17.4999 2.4736C22.7612 5.51117 24.5638 12.2387 21.5262 17.4999ZM5.84382 7.87995C5.25279 7.64272 4.74291 7.45257 4.3292 7.30543C5.59153 5.24057 7.56267 3.85898 9.74648 3.29362C9.77176 3.62621 9.82851 4.00289 9.93722 4.40861C10.3269 5.86297 11.3579 7.58777 13.75 8.96886C14.0666 9.15165 14.3765 9.31079 14.6793 9.44842C14.4757 10.219 14.1794 11.0351 13.7614 11.8848C13.3566 11.6365 12.936 11.3857 12.5 11.1339C9.85449 9.60655 7.52076 8.55305 5.84382 7.87995ZM12.7587 13.6161C12.3555 13.3682 11.9358 13.1176 11.5 12.866C8.94938 11.3934 6.70297 10.3799 5.09882 9.73602C4.44209 9.47241 3.89359 9.27099 3.47664 9.12556C2.8887 10.8629 2.86217 12.7007 3.33339 14.4015C3.63406 14.2571 3.98864 14.1179 4.39435 14.0092C5.84872 13.6195 7.85792 13.65 10.25 15.0311C10.5667 15.2139 10.8594 15.4027 11.13 15.5961C11.6875 15.0424 12.2384 14.3885 12.7587 13.6161ZM12.6204 16.9341C13.4037 17.8315 13.839 18.756 14.0628 19.5913C14.1715 19.997 14.2283 20.3736 14.2536 20.7061C15.962 20.2638 17.5403 19.3219 18.7509 17.9441C18.4164 17.6557 17.9678 17.2815 17.4112 16.8446C16.6284 16.2301 15.633 15.4925 14.4426 14.6962C13.8639 15.5605 13.2482 16.3006 12.6204 16.9341ZM9.52737 16.9296C9.43788 16.8737 9.34548 16.8182 9.25005 16.7631C7.31205 15.6442 5.84818 15.6902 4.91199 15.9411C4.58 16.03 4.30141 16.1484 4.0805 16.2639C4.53358 17.1073 5.12461 17.8846 5.84359 18.5583C5.87614 18.5513 5.90977 18.5439 5.94444 18.5361C6.44532 18.4223 7.15871 18.2112 7.97658 17.8245C8.4626 17.5947 8.98712 17.3022 9.52737 16.9296ZM7.92672 20.018C8.21347 19.909 8.51642 19.7815 8.83145 19.6326C9.54844 19.2936 10.3256 18.8442 11.1145 18.2503C11.6989 18.9202 11.9873 19.5728 12.131 20.109C12.2199 20.4409 12.2567 20.7413 12.2672 20.9903C10.8031 21.0352 9.31171 20.7231 7.92672 20.018ZM18.6461 15.2714C17.8061 14.612 16.7364 13.8204 15.4558 12.968C15.9672 11.9634 16.3317 10.9922 16.5833 10.0701C17.7521 10.2998 18.7704 10.2145 19.6057 9.99072C20.0114 9.88202 20.3659 9.74284 20.6666 9.59846C21.2688 11.7723 21.0579 14.1701 19.9008 16.2957C19.5666 16.011 19.147 15.6645 18.6461 15.2714ZM16.9702 8.10789C17.8425 8.27902 18.5519 8.20254 19.0881 8.05887C19.42 7.96992 19.6986 7.85154 19.9195 7.73607C19.2263 6.44565 18.2102 5.3101 16.907 4.46319C16.956 4.76614 16.9971 5.09234 17.0257 5.43977C17.0906 6.23015 17.09 7.1278 16.9702 8.10789ZM15.0328 7.39372C15.0854 6.73963 15.0764 6.13922 15.0324 5.60348C14.9583 4.70183 14.7845 3.97847 14.6326 3.4878C14.622 3.45374 14.6116 3.42082 14.6013 3.38905C13.6584 3.10331 12.6898 2.9801 11.7329 3.00943C11.7433 3.2585 11.7801 3.55897 11.8691 3.89097C12.1199 4.82716 12.812 6.11791 14.75 7.23681C14.8454 7.2919 14.9397 7.34416 15.0328 7.39372Z"})),Cr=t=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{d:"M11.5697 12.5532L12.1617 13.0137V13.0137L11.5697 12.5532ZM11.3142 3.64586L12.0065 3.93432V3.93432L11.3142 3.64586ZM18.555 14.5045C18.8336 14.198 18.811 13.7237 18.5045 13.445C18.198 13.1664 17.7237 13.189 17.445 13.4955L18.555 14.5045ZM17.7087 14.3204L17.1538 13.8159L17.1538 13.8159L17.7087 14.3204ZM21.2426 10.7426L21.7773 10.2166L21.773 10.2123L21.2426 10.7426ZM21.4531 12.026C21.7436 12.3213 22.2184 12.3251 22.5137 12.0346C22.809 11.7442 22.8129 11.2693 22.5224 10.974L21.4531 12.026ZM5.7327 19.0428C5.31848 19.0428 4.9827 19.3786 4.9827 19.7928C4.9827 20.207 5.31848 20.5428 5.7327 20.5428V19.0428ZM3.5 15.75C3.08579 15.75 2.75 16.0858 2.75 16.5C2.75 16.9142 3.08579 17.25 3.5 17.25V15.75ZM8.19231 3.35575C8.35162 2.9734 8.17081 2.5343 7.78846 2.37498C7.40611 2.21567 6.96701 2.39648 6.80769 2.77883L8.19231 3.35575ZM6.80769 15.2885C6.96701 15.6708 7.40611 15.8516 7.78846 15.6923C8.17081 15.533 8.35162 15.0939 8.19231 14.7115L6.80769 15.2885ZM11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5C10.25 6.91421 10.5858 7.25 11 7.25V5.75ZM19.876 16.916C20.1057 17.2607 20.5714 17.3538 20.916 17.124C21.2607 16.8943 21.3538 16.4286 21.124 16.084L19.876 16.916ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75C2.75 6.89137 6.89137 2.75 12 2.75V1.25ZM12 12.75H12.0917V11.25H12V12.75ZM11.408 11.5395L10.9777 12.0928L12.1617 13.0137L12.592 12.4605L11.408 11.5395ZM11.3077 1.71154L10.6219 3.35739L12.0065 3.93432L12.6923 2.28846L11.3077 1.71154ZM17.445 13.4955L17.1538 13.8159L18.2637 14.8249L18.555 14.5045L17.445 13.4955ZM20.708 11.2686L21.4531 12.026L22.5224 10.974L21.7773 10.2167L20.708 11.2686ZM17.1538 13.8159C14.2838 16.9729 9.96086 19.0428 5.7327 19.0428V20.5428C10.4211 20.5428 15.1357 18.2657 18.2637 14.8249L17.1538 13.8159ZM10.6219 3.35739C9.39039 6.31308 9.66695 9.68222 11.364 12.3975L12.636 11.6025C11.1965 9.29929 10.9619 6.44145 12.0065 3.93432L10.6219 3.35739ZM10.9777 12.0928C9.18293 14.4003 6.42334 15.75 3.5 15.75V17.25C6.88622 17.25 10.0828 15.6866 12.1617 13.0137L10.9777 12.0928ZM6.80769 2.77883C5.13077 6.80344 5.13077 11.2638 6.80769 15.2885L8.19231 14.7115C6.66923 11.0562 6.66923 7.01114 8.19231 3.35575L6.80769 2.77883ZM11 7.25C14.6428 7.25 18.1364 8.6971 20.7123 11.273L21.773 10.2123C18.9158 7.35514 15.0406 5.75 11 5.75V7.25ZM12.0917 12.75C15.2197 12.75 18.1408 14.3133 19.876 16.916L21.124 16.084C19.1107 13.064 15.7213 11.25 12.0917 11.25V12.75Z"})),yr=t=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.9386 4.73542C13.3511 4.69785 13.716 5.0018 13.7535 5.4143C13.8024 5.95058 13.893 6.53361 14.045 7.14711C14.1447 7.54916 13.8995 7.95586 13.4974 8.05549C13.0954 8.15512 12.6887 7.90997 12.5891 7.50791C12.4172 6.81421 12.3148 6.15558 12.2597 5.55036C12.2221 5.13785 12.5261 4.77299 12.9386 4.73542ZM5.23942 9.18054C5.47821 8.84208 5.94616 8.76129 6.28461 9.00008C6.78119 9.35043 7.30041 9.76836 7.81522 10.2641C8.1136 10.5514 8.12256 11.0262 7.83525 11.3246C7.54794 11.6229 7.07315 11.6319 6.77478 11.3446C6.31949 10.9062 5.85988 10.5362 5.41988 10.2257C5.08142 9.98694 5.00063 9.51899 5.23942 9.18054ZM13.836 8.99599C14.2094 8.81661 14.6574 8.97385 14.8368 9.3472C14.9605 9.60468 15.097 9.86417 15.2474 10.1247C15.3979 10.3852 15.5543 10.6332 15.7155 10.869C15.9491 11.2111 15.8612 11.6778 15.5192 11.9114C15.1772 12.145 14.7105 12.0572 14.4769 11.7151C14.2947 11.4485 14.118 11.1685 13.9484 10.8747C13.7788 10.5809 13.6246 10.2879 13.4848 9.99681C13.3054 9.62346 13.4627 9.17538 13.836 8.99599ZM8.48046 12.088C8.82249 11.8544 9.28917 11.9422 9.52281 12.2843C9.70496 12.5509 9.88164 12.8309 10.0513 13.1247C10.2209 13.4185 10.375 13.7115 10.5149 14.0026C10.6943 14.3759 10.537 14.824 10.1637 15.0034C9.79032 15.1828 9.34223 15.0256 9.16285 14.6522C9.03914 14.3947 8.90267 14.1352 8.75225 13.8747C8.60182 13.6142 8.44534 13.3662 8.28421 13.1304C8.05057 12.7883 8.13843 12.3217 8.48046 12.088ZM16.1644 12.6748C16.4517 12.3765 16.9265 12.3675 17.2249 12.6548C17.6802 13.0932 18.1398 13.4632 18.5798 13.7737C18.9183 14.0125 18.9991 14.4804 18.7603 14.8189C18.5215 15.1573 18.0535 15.2381 17.7151 14.9993C17.2185 14.649 16.6993 14.2311 16.1845 13.7353C15.8861 13.448 15.8771 12.9732 16.1644 12.6748ZM10.5022 15.9439C10.9043 15.8443 11.311 16.0894 11.4106 16.4915C11.5825 17.1852 11.6849 17.8438 11.74 18.4491C11.7776 18.8616 11.4736 19.2264 11.0611 19.264C10.6486 19.3016 10.2837 18.9976 10.2462 18.5851C10.1973 18.0488 10.1067 17.4658 9.95466 16.8523C9.85502 16.4502 10.1002 16.0436 10.5022 15.9439Z"}),M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2859 1.32632C11.0551 1.05591 8.71992 1.48034 6.62484 2.68993C1.4832 5.65846 -0.278462 12.2331 2.69007 17.3747C5.6586 22.5164 12.2332 24.278 17.3748 21.3095C19.4699 20.0999 21.0051 18.2898 21.8863 16.2227C23.1661 13.2206 23.0684 9.67094 21.3096 6.62471C19.5509 3.57847 16.5256 1.71902 13.2859 1.32632ZM13.7802 3.08033C13.7309 3.49161 13.3576 3.7851 12.9463 3.73585C12.5351 3.68661 12.2416 3.31329 12.2908 2.90201C12.297 2.85081 12.3032 2.8013 12.3096 2.75354C10.638 2.6958 8.93097 3.09054 7.37484 3.98897C5.81951 4.88694 4.62362 6.16839 3.83764 7.64494C3.88216 7.66328 3.92814 7.68258 3.97552 7.70286C4.35631 7.86585 4.53288 8.30668 4.36989 8.68748C4.20689 9.06827 3.76606 9.24484 3.38527 9.08184C3.33556 9.06057 3.2878 9.04062 3.24212 9.02195C2.41524 11.457 2.60225 14.2226 3.98911 16.6247C5.37596 19.0268 7.67752 20.5716 10.1998 21.073C10.2065 21.0241 10.2131 20.9728 10.2195 20.9191C10.2687 20.5078 10.6421 20.2143 11.0533 20.2636C11.4646 20.3128 11.7581 20.6861 11.7089 21.0974C11.7027 21.1486 11.6965 21.198 11.6901 21.2458C13.3618 21.3034 15.0695 20.9084 16.6248 20.0104C18.181 19.112 19.3764 17.831 20.1621 16.3545C20.1176 16.3362 20.0716 16.3168 20.0242 16.2966C19.6434 16.1336 19.4668 15.6927 19.6298 15.3119C19.7928 14.9311 20.2336 14.7546 20.6144 14.9176C20.6641 14.9388 20.7119 14.9588 20.7576 14.9775C21.5849 12.5411 21.3972 9.77639 20.0106 7.37471C18.624 4.97302 16.3236 3.42808 13.7999 2.92639C13.7932 2.97529 13.7866 3.02664 13.7802 3.08033Z"})),wr=t=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.1665 2.75836L21.2416 8.83351C21.2677 7.81177 21.2303 6.84352 21.1649 5.98862C21.0341 4.27797 19.722 2.96586 18.0114 2.83507C17.1565 2.76971 16.1882 2.7323 15.1665 2.75836ZM21.1071 10.8203L13.1797 2.89285C10.483 3.1978 7.77958 4.04236 5.91097 5.91097C4.04236 7.77958 3.1978 10.483 2.89285 13.1797L10.8203 21.1071C13.517 20.8022 16.2204 19.9576 18.089 18.089C19.9576 16.2204 20.8022 13.517 21.1071 10.8203ZM8.83351 21.2416L2.75836 15.1665C2.7323 16.1882 2.76971 17.1565 2.83507 18.0114C2.96587 19.722 4.27797 21.0341 5.98861 21.1649C6.84352 21.2303 7.81177 21.2677 8.83351 21.2416ZM13.3854 1.36321C15.1096 1.19733 16.7638 1.2353 18.1257 1.33944C20.5746 1.52667 22.4733 3.4254 22.6606 5.87426C22.7647 7.23618 22.8027 8.89045 22.6368 10.6146C22.3524 13.5707 21.4579 16.8414 19.1497 19.1497C16.8414 21.4579 13.5707 22.3524 10.6146 22.6368C8.89045 22.8027 7.23618 22.7647 5.87426 22.6606C3.4254 22.4733 1.52667 20.5746 1.33944 18.1257C1.2353 16.7638 1.19733 15.1096 1.36321 13.3854C1.6476 10.4293 2.54206 7.15857 4.85031 4.85031C7.15857 2.54206 10.4293 1.6476 13.3854 1.36321ZM11.9426 8.1601C12.2355 7.86721 12.7104 7.86721 13.0032 8.1601L13.8914 9.0482L14.7795 8.1601C15.0723 7.86721 15.5472 7.86721 15.8401 8.1601C16.133 8.45299 16.133 8.92787 15.8401 9.22076L14.952 10.1089L15.8401 10.997C16.133 11.2899 16.133 11.7647 15.8401 12.0576C15.5472 12.3505 15.0723 12.3505 14.7795 12.0576L13.8914 11.1695L13.0608 12.0001L13.9489 12.8882C14.2418 13.1811 14.2418 13.656 13.9489 13.9489C13.656 14.2418 13.1811 14.2418 12.8882 13.9489L12.0001 13.0608L11.1695 13.8914L12.0576 14.7795C12.3505 15.0723 12.3505 15.5472 12.0576 15.8401C11.7647 16.133 11.2899 16.133 10.997 15.8401L10.1089 14.952L9.22076 15.8401C8.92787 16.133 8.45299 16.133 8.1601 15.8401C7.86721 15.5472 7.86721 15.0723 8.1601 14.7795L9.0482 13.8914L8.1601 13.0032C7.86721 12.7104 7.86721 12.2355 8.1601 11.9426C8.45299 11.6497 8.92787 11.6497 9.22076 11.9426L10.1089 12.8307L10.9394 12.0001L10.0513 11.112C9.75845 10.8191 9.75845 10.3442 10.0513 10.0513C10.3442 9.75845 10.8191 9.75845 11.112 10.0513L12.0001 10.9394L12.8307 10.1089L11.9426 9.22076C11.6497 8.92787 11.6497 8.45299 11.9426 8.1601Z"})),Mr=t=>M.createElement("svg",{fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 32 32","data-name":"Layer 1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("rect",{height:1,transform:"translate(20 51) rotate(180)",width:16,x:2,y:25}),M.createElement("rect",{height:1,transform:"translate(26 59) rotate(180)",width:16,x:5,y:29}),M.createElement("rect",{height:1,transform:"translate(39 -8) rotate(90)",width:19,x:14,y:15}),M.createElement("rect",{height:1,transform:"translate(21 10) rotate(90)",width:19,x:-4,y:15}),M.createElement("path",{d:"M24,25H23v2a2,2,0,0,1-2,2H20v1h1a3,3,0,0,0,3-3Z"}),M.createElement("path",{d:"M17,26h1v1a2,2,0,0,0,2,2h1v1H20a3,3,0,0,1-3-3Z"}),M.createElement("path",{d:"M2,26H3v1a2,2,0,0,0,2,2H6v1H5a3,3,0,0,1-3-3Z"}),M.createElement("rect",{height:1,width:6,x:24,y:6}),M.createElement("rect",{height:1,width:19,x:8,y:2}),M.createElement("path",{d:"M5,6H6V5A2,2,0,0,1,8,3H9V2H8A3,3,0,0,0,5,5Z"}),M.createElement("path",{d:"M23,6h1V5a2,2,0,0,1,2-2h1V2H26a3,3,0,0,0-3,3Z"}),M.createElement("path",{d:"M30,6H29V5a2,2,0,0,0-2-2H26V2h1a3,3,0,0,1,3,3Z"})),vr=v.div`
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
`,Lr=v.div`
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
`,br=v.div`
  padding: 20px 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 2px solid ${({theme:t})=>t.mainBGColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme:t})=>t.ContainerBGColor};
`,$r=v.h2`
  margin: 0;
  font-size: 24px;
  color: ${({theme:t})=>t.textBlack};
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Sr=v.button`
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
`,kr=v.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`,Br=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  @media (max-width: 768px) {
    gap: 6px;
  }
`,Tr=v.button`
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
`,Ir=v.div`
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
`,Er=v.div`
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
`,Pr=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
`,zr=v.div`
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
`,Gr=v.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:t})=>t.textBlack};
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,Yr=v.div`
  font-size: 13px;
  color: ${({theme:t})=>t.textGray};
  line-height: 1.5;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,Dr=v.div`
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
`,Xr=v.div`
  position: relative;
  width: ${t=>{const h=t.fieldWidth,d=t.fieldHeight,l=100/h,s=80/d,i=Math.min(l,s);return`${h*i}px`}};
  height: ${t=>{const h=t.fieldWidth,d=t.fieldHeight,l=100/h,s=80/d,i=Math.min(l,s);return`${d*i}px`}};
  background: ${({theme:t})=>t.greenMain};
  border: 2px solid ${({theme:t})=>t.darkGreen};
  border-radius: 2px;
  
  /* Гарантуємо мінімальний розмір для дуже малих полів */
  min-width: 20px;
  min-height: 20px;
`,Te=v.div`
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
`,Rr={FOOTBALL:[{id:"football_standard",name:"Стандартне поле",width:105,height:68},{id:"football_small",name:"Мале поле",width:90,height:45},{id:"football_futsal",name:"Футзал",width:40,height:20}],BASKETBALL:[{id:"basketball_nba",name:"NBA",width:28.65,height:15.24},{id:"basketball_fiba",name:"FIBA",width:28,height:15}],VOLLEYBALL:[{id:"volleyball_indoor",name:"Закритий майданчик",width:18,height:9},{id:"volleyball_beach",name:"Пляжний майданчик",width:16,height:8}],TENNIS:[{id:"tennis_singles",name:"Одиночний розряд",width:23.77,height:8.23},{id:"tennis_doubles",name:"Парний розряд",width:23.77,height:10.97}],RUGBY:[{id:"rugby_standard",name:"Регбі (15 гравців)",width:100,height:70},{id:"rugby_sevens",name:"Регбі-7",width:94,height:68}],HANDBALL:[{id:"handball_standard",name:"Гандбол",width:40,height:20}],SHEET:[{id:"a4_portrait",name:"A4 Портрет",width:21,height:29.7},{id:"a4_landscape",name:"A4 Ландшафт",width:29.7,height:21},{id:"a3_portrait",name:"A3 Портрет",width:29.7,height:42},{id:"a3_landscape",name:"A3 Ландшафт",width:42,height:29.7},{id:"a3_landscape1",name:"A3 Ландшафт",width:600,height:29.7},{id:"a3_landscape2",name:"A3 Ландшафт",width:2,height:529.7}]},Fr=[{id:"FOOTBALL",name:"Футбол",icon:Be},{id:"RUGBY",name:"Регбі",icon:wr},{id:"BASKETBALL",name:"Баскетбол",icon:mr},{id:"VOLLEYBALL",name:"Волейбол",icon:Cr},{id:"TENNIS",name:"Теніс",icon:yr},{id:"HANDBALL",name:"Гандбол",icon:Be},{id:"SHEET",name:"Аркуш",icon:Mr}],Zr=({isOpen:t,onClose:e,onSelectField:r,currentFieldId:h})=>{var p;const[d,l]=M.useState("FOOTBALL"),[s,i]=M.useState(h);if(!t)return null;const f=a=>{i(a.id),r(a),setTimeout(()=>e(),300)},m=a=>{a.target===a.currentTarget&&e()},u=(a,g)=>g==="SHEET"?`${a.width}см × ${a.height}см`:`${a.width}м × ${a.height}м`,o=(a,g)=>g==="SHEET"?`${a}см`:`${a}м`;return n.jsx(vr,{onClick:m,children:n.jsxs(Lr,{children:[n.jsxs(br,{children:[n.jsx($r,{children:"Обрати спортивне поле"}),n.jsx(Sr,{onClick:e,children:n.jsx(Cn,{})})]}),n.jsxs(kr,{children:[n.jsx(Br,{children:Fr.map(a=>{const g=a.icon;return n.jsxs(Tr,{active:d===a.id,onClick:()=>l(a.id),children:[n.jsx(Ir,{children:n.jsx(g,{})}),a.name]},a.id)})}),n.jsx(Er,{children:n.jsx(Pr,{children:(p=Rr[d])==null?void 0:p.map(a=>n.jsxs(zr,{selected:s===a.id,onClick:()=>f(a),children:[n.jsx(Gr,{children:a.name}),n.jsx(Yr,{children:u(a,d)}),n.jsx(Dr,{children:n.jsxs(Xr,{fieldWidth:a.width,fieldHeight:a.height,children:[n.jsx(Te,{className:"width",children:o(a.width,d)}),n.jsx(Te,{className:"height",children:o(a.height,d)})]})})]},a.id))})})]})]})})},Ar=v(er)`
  width: 80%;
  height: 80%;
  stroke: ${({theme:t})=>t.textBlack};
   fill: ${({theme:t})=>t.textBlack};
`,Hr=v(en)`
  width: 100%;
  height: 100%;
   fill: ${({theme:t})=>t.black};
   rotate: 180deg;
`,_r=v(tr)`
  width: 100%;
  height: 100%;
  stroke: ${({theme:t})=>t.textBlack};
`,Wr=v(tn)`
  width: 100%;
  height: 100%;
  fill: ${({theme:t})=>t.textBlack};
`,Vr=v(tn)`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  fill: ${({theme:t})=>t.textBlack};
`,jr=v(Kn)`
  width: 70%;  
  height: 70%;
  stroke: ${({theme:t})=>t.textBlack};
`,Nr=v(Qn)`
  width: 70%;  
  height: 70%;
  fill: ${({theme:t})=>t.textBlack};
`,Or=v.div`
  width: 100%;
  background: ${({theme:t})=>t.ContainerBGColor};
  border-bottom: 2px solid ${({theme:t})=>t.gray};
  padding: 12px 16px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`,qr=v.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`,Ur=v.div`
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
`,Jr=v.div`
  flex-shrink: 0;
  position: relative;
  z-index: 10;
`,pt=v.button`
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

`,Kr=v.button`
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
  
`,Qr=v(Jn)`
  width: 60%;
  height: 60%;
  fill: none;
  stroke: ${({theme:t})=>t.textBlack};
`,_t=v.div`
  width: 1px;
  height: 20px;
  background: ${({theme:t})=>t.gray};
  margin: 0 4px;
  
  @media (max-width: 768px) {
    height: 16px;
  }
`,Ie=v.div`
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
`,Ee=v.span`
  font-size: 11px;
  color: ${({theme:t})=>t.textGray};
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 9px;
  }
`,Pe=v.input`
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
`,t1=v.input`
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
`,ze=({value:t,onChange:e,...r})=>{const[h,d]=M.useState(t),l=M.useRef(null);M.useEffect(()=>{l.current||d(t)},[t]);const s=i=>{const f=i.target.value;d(f),l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{e(f),l.current=null},200)};return n.jsx(t1,{type:"color",value:h,onChange:s,...r})},e1=({currentField:t,onSelectField:e,isSidebarOpen:r,onToggleSidebar:h})=>{const[d,l]=M.useState(!1),s=mt(),{activeTool:i,team1:f,team2:m,historyIndex:u,history:o}=Xt(b=>b.tacticsBoard),p=()=>{l(!0)},a=()=>{l(!1)},g=b=>{e(b),a()},x=b=>{s(Dt(b))},c=b=>{s(Dt(`shape_${b.id}`))},L=b=>{s(Dt(`figure_${b.id}`))},w=b=>{const G=parseInt(b.target.value)||0;s(yn(Math.max(0,Math.min(30,G))))},C=b=>{s(wn(b))},$=b=>{const G=parseInt(b.target.value)||0;s(Mn(Math.max(0,Math.min(30,G))))},T=b=>{s(vn(b))},S=()=>{s(Ln())},B=()=>{s(bn())},E=()=>{window.confirm("Ви впевнені, що хочете очистити всю дошку?")&&s($n())},k=u>0,y=u<o.length-1;return n.jsxs(n.Fragment,{children:[n.jsx(Or,{children:n.jsxs(qr,{children:[n.jsxs(Ur,{children:[n.jsx(pt,{title:"Обрати поле",onClick:p,children:n.jsx(Qr,{})}),n.jsx(_t,{}),n.jsx(pt,{title:"Курсор (виділення та переміщення)",active:i==="cursor",onClick:()=>x("cursor"),children:n.jsx(jr,{})}),n.jsx(pt,{title:"Додати текст",active:i==="text",onClick:()=>x("text"),children:n.jsx(Ar,{})}),n.jsx(pt,{title:"Малювання",active:i==="drawing",onClick:()=>x("drawing"),children:n.jsx(Nr,{})}),n.jsx(hr,{activeTool:i,onSelectShape:c}),n.jsx(fr,{activeTool:i,onSelectFigure:L}),n.jsx(_t,{}),n.jsxs(Ie,{children:[n.jsx(Ee,{children:"К1:"}),n.jsx(Pe,{type:"number",min:"0",max:"30",value:f.count,onChange:w,title:"Кількість гравців команди 1"}),n.jsx(ze,{value:f.color,onChange:C,title:"Колір команди 1"})]}),n.jsxs(Ie,{children:[n.jsx(Ee,{children:"К2:"}),n.jsx(Pe,{type:"number",min:"0",max:"30",value:m.count,onChange:$,title:"Кількість гравців команди 2"}),n.jsx(ze,{value:m.color,onChange:T,title:"Колір команди 2"})]}),n.jsx(_t,{}),n.jsx(pt,{title:"М'яч",active:i==="ball",onClick:()=>x("ball"),children:"⚽"}),n.jsx(_t,{}),n.jsx(pt,{title:"Назад (Undo)",onClick:S,disabled:!k,children:n.jsx(Vr,{})}),n.jsx(pt,{title:"Вперед (Redo)",onClick:B,disabled:!y,children:n.jsx(Wr,{})}),n.jsx(pt,{title:"Скасувати все",onClick:E,children:n.jsx(_r,{})})]}),n.jsx(Jr,{children:n.jsx(Kr,{title:"Відкрити панель інструментів",active:r,onClick:h,children:n.jsx(Hr,{})})})]})}),n.jsx(Zr,{isOpen:d,onClose:a,onSelectField:g,currentFieldId:t.id})]})},n1=v.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,r1=v.div`
  display: grid;
  grid-template-columns: 40px 1fr 80px;
  gap: 8px;
  align-items: center;
`,o1=v.div`
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
`,a1=v.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  border: 2px solid ${({theme:t})=>t.lightGreen||"#ccc"};
  cursor: pointer;
  overflow: hidden;
`,i1=v.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,s1=v.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,l1=v.input`
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
`,c1=v.span`
  font-size: 10px;
  color: ${({theme:t})=>t.textGray||"#777"};
`,d1=v.div`
  position: relative;
`,h1=v.input`
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
`,p1=v.span`
  font-size: 10px;
  color: ${({theme:t})=>t.textGray||"#777"};
  display: block;
  text-align: center;
  margin-top: 2px;
`,Ge=t=>Math.max(0,Math.min(1,t/100)),g1=t=>Math.round(Math.max(0,Math.min(100,t*100))),Ye=(t,e=1)=>{if(!t)return"0, 0, 0, 1";let r=t.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const h=parseInt(r.slice(0,2),16),d=parseInt(r.slice(2,4),16),l=parseInt(r.slice(4,6),16);return`${h}, ${d}, ${l}, ${e}`},it=({color:t,opacity:e,onColorChange:r,onOpacityChange:h,label:d})=>{const[l,s]=M.useState(t||"#000000"),[i,f]=M.useState(e!==void 0?e:100),m=M.useRef(null),u=M.useRef(null),o=M.useRef(null),p=M.useMemo(()=>{const $=Ge(i);return Ye(l,$)},[l,i]),[a,g]=M.useState(p),x=M.useMemo(()=>{const $=Ge(i);return{backgroundColor:`rgba(${Ye(l,$)})`}},[l,i]);M.useEffect(()=>{u.current||(s(t||"#000000"),f(e!==void 0?e:100))},[t,e]),M.useEffect(()=>{document.activeElement!==o.current&&g(p)},[p]);const c=$=>{const T=$.target.value;s(T),u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{r&&r(T),u.current=null},150)},L=$=>{const T=$.target.value;g(T);const S=T.split(",").map(B=>parseFloat(B.trim()));if(S.length>=3&&!S.some(isNaN)){const B=Math.max(0,Math.min(255,S[0]||0)),E=Math.max(0,Math.min(255,S[1]||0)),k=Math.max(0,Math.min(255,S[2]||0)),y=S[3]!==void 0?Math.max(0,Math.min(1,S[3])):1,b=`#${((1<<24)+(B<<16)+(E<<8)+k).toString(16).slice(1)}`,G=g1(y);s(b),f(G),u.current&&clearTimeout(u.current),r&&r(b),h&&h(G)}},w=$=>{let T=$.target.value,S=parseInt(T);isNaN(S)&&(S=0),S>100&&(S=100),S<0&&(S=0),f(S),h&&h(S)},C=()=>{m.current&&m.current.click()};return n.jsxs("div",{children:[d&&n.jsx(n1,{children:d}),n.jsxs(r1,{children:[n.jsxs(o1,{children:[n.jsx(a1,{style:x,onClick:C}),n.jsx(i1,{ref:m,type:"color",value:l,onChange:c})]}),n.jsxs(s1,{children:[n.jsx(l1,{ref:o,type:"text",value:a,onChange:L,placeholder:"0, 0, 0, 1"}),n.jsx(c1,{children:"RGBA"})]}),n.jsxs(d1,{children:[n.jsx(h1,{type:"number",min:"0",max:"100",value:i,onChange:w}),n.jsx(p1,{children:"Прозорість %"})]})]})]})},x1=v.div`
  position: relative;
  width: 100%;
`,u1=v.button`
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
`,f1=v.div`
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
`,m1=v.div`
  padding: 6px 8px;
  font-family: ${({$fontFamily:t})=>t||"Arial"};
  cursor: pointer;
  color: ${({theme:t})=>t.textBlack};
  background-color: ${({selected:t,theme:e})=>t?e.lightGreen:"transparent"};

  &:hover {
    background-color: ${({theme:t})=>t.greenMain};
    color: ${({theme:t})=>t.white};
  }
`,C1=v(En)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) rotate(${({$open:t})=>t?"180deg":"0"});
  width: 20px;
  height: 20px;
  stroke: ${({theme:t})=>t.iconColor};
  transition: transform 0.3s ease;
`,st=({value:t,onChange:e,options:r=[],placeholder:h="Оберіть..."})=>{const[d,l]=M.useState(!1),s=M.useRef(null),i=()=>l(o=>!o),f=()=>l(!1),m=o=>{e(o),f()};M.useEffect(()=>{const o=p=>{s.current&&!s.current.contains(p.target)&&f()};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[]);const u=r.find(o=>o.value===t);return n.jsxs(x1,{ref:s,children:[n.jsxs(u1,{onClick:i,$fontFamily:u==null?void 0:u.value,children:[u?u.label:h,n.jsx(C1,{$open:d})]}),d&&n.jsx(f1,{children:r.map(o=>n.jsx(m1,{onClick:()=>m(o.value),selected:o.value===t,$fontFamily:o.value,children:o.label},o.value))})]})},y1=v.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:t})=>t.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,w1=v.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:t})=>t.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,gt=v.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,wt=v.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,M1=v.textarea`
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
`,Wt=v.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:t,min:e,max:r,theme:h})=>{const d=(t-e)/(r-e)*100;return`linear-gradient(to right, ${h.greenMain||"#4CAF50"} 0%, ${h.greenMain||"#4CAF50"} ${d}%, ${h.lightGreen||"#E8F5E9"} ${d}%, ${h.lightGreen||"#E8F5E9"} 100%)`}};
  outline: none;
  margin: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:t})=>t.greenMain||"#4CAF50"};
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
    border: none;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:t})=>t.greenMain||"#4CAF50"};
    cursor: pointer;
    border: none;
  }
`,Vt=v.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  margin-left: 8px;
`,v1=v.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,oe=v.button`
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
`,L1=({selectedObject:t})=>{const e=mt(),[r,h]=M.useState(t.text||"");M.useEffect(()=>{h(t.text||"")},[t.id,t.text]);const d=(s,i)=>{e(ft({id:t.id,updates:{[s]:i}}))},l=s=>{const i=s.target.value;h(i),d("text",i)};return n.jsxs(y1,{children:[n.jsx(w1,{children:"Властивості тексту"}),n.jsxs(gt,{children:[n.jsx(wt,{children:"Текст"}),n.jsx(M1,{value:r,onChange:l,placeholder:"Введіть текст...",$fontFamily:t.fontFamily})]}),n.jsx(gt,{children:n.jsx(it,{color:t.color||"#000000",opacity:t.opacity||100,onColorChange:s=>d("color",s),onOpacityChange:s=>d("opacity",s),label:"Колір і прозорість"})}),n.jsxs(gt,{children:[n.jsxs(wt,{children:["Розмір шрифту",n.jsxs(Vt,{children:[t.fontSize||16,"px"]})]}),n.jsx(Wt,{min:"8",max:"200",value:t.fontSize||16,onChange:s=>d("fontSize",Number(s.target.value))})]}),n.jsxs(gt,{children:[n.jsx(wt,{children:"Тип шрифту"}),n.jsx(st,{value:t.fontFamily||"Arial",onChange:s=>d("fontFamily",s),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(gt,{children:[n.jsx(wt,{children:"Стиль тексту"}),n.jsxs(v1,{children:[n.jsx(oe,{$active:t.fontWeight==="bold",onClick:()=>d("fontWeight",t.fontWeight==="bold"?"normal":"bold"),children:n.jsx("strong",{children:"B"})}),n.jsx(oe,{$active:t.fontStyle==="italic",onClick:()=>d("fontStyle",t.fontStyle==="italic"?"normal":"italic"),children:n.jsx("em",{children:"I"})}),n.jsx(oe,{$active:t.textDecoration==="underline",onClick:()=>d("textDecoration",t.textDecoration==="underline"?"none":"underline"),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(gt,{children:[n.jsxs(wt,{children:["Міжрядковий інтервал",n.jsx(Vt,{children:(t.lineHeight||.9).toFixed(1)})]}),n.jsx(Wt,{min:"0.5",max:"3",step:"0.1",value:t.lineHeight||.9,onChange:s=>d("lineHeight",Number(s.target.value))})]}),n.jsxs(gt,{children:[n.jsxs(wt,{children:["Міжлітерний інтервал",n.jsxs(Vt,{children:[t.letterSpacing||0,"px"]})]}),n.jsx(Wt,{min:"-2",max:"10",step:"0.5",value:t.letterSpacing||0,onChange:s=>d("letterSpacing",Number(s.target.value))})]}),n.jsxs(gt,{children:[n.jsxs(wt,{children:["Поворот тексту",n.jsxs(Vt,{children:[t.rotation||0,"°"]})]}),n.jsx(Wt,{min:"-180",max:"180",step:"5",value:t.rotation||0,onChange:s=>d("rotation",Number(s.target.value))})]})]})},b1=v.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:t})=>t.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,$1=v.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:t})=>t.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Lt=v.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,jt=v.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,S1=v.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:t,min:e,max:r,theme:h})=>{const d=(t-e)/(r-e)*100;return`linear-gradient(to right, ${h.greenMain} 0%, ${h.greenMain} ${d}%, ${h.lightGreen} ${d}%, ${h.lightGreen} 100%)`}};
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
`,k1=v.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  margin-left: 8px;
`,B1=v.p`
  font-size: 12px;
  color: ${({theme:t})=>t.textGray||"#777"};
  margin: 8px 0 0 0;
  font-style: italic;
`,T1=()=>{const t=mt(),{shapeBorderColor:e,shapeBorderOpacity:r,shapeFillColor:h,shapeFillOpacity:d,shapeBorderWidth:l,shapeBorderStyle:s,shapeLineCapStart:i,shapeLineCapEnd:f,activeTool:m}=Xt(o=>o.tacticsBoard),u=m==="shape_line"||m==="shape_arrow";return n.jsxs(b1,{children:[n.jsx($1,{children:"Налаштування фігури"}),n.jsx(Lt,{children:n.jsx(it,{color:e,opacity:r,onColorChange:o=>t(We(o)),onOpacityChange:o=>t(Ve(o)),label:u?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(Lt,{children:[n.jsxs(jt,{children:[u?"Товщина лінії":"Товщина обводки",n.jsxs(k1,{children:[l,"px"]})]}),n.jsx(S1,{type:"range",min:"1",max:"20",value:l,onChange:o=>t(je(Number(o.target.value)))})]}),n.jsxs(Lt,{children:[n.jsx(jt,{children:"Тип обводки"}),n.jsx(st,{value:s,onChange:o=>t(Ne(o)),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),u&&n.jsxs(n.Fragment,{children:[n.jsxs(Lt,{children:[n.jsx(jt,{children:"Початок лінії"}),n.jsx(st,{value:i,onChange:o=>t(Oe(o)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(Lt,{children:[n.jsx(jt,{children:"Кінець лінії"}),n.jsx(st,{value:f||(m==="shape_arrow"?"arrow":"butt"),onChange:o=>t(qe(o)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!u&&n.jsx(Lt,{children:n.jsx(it,{color:h,opacity:d,onColorChange:o=>t(Ue(o)),onOpacityChange:o=>t(Je(o)),label:"Колір заливки і прозорість"})}),n.jsx(B1,{children:u?"Клікніть і потягніть, щоб намалювати лінію.":"Клікніть і потягніть, щоб намалювати фігуру."})]})},I1=v.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:t})=>t.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,E1=v.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:t})=>t.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,xt=v.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ut=v.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,De=v.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:t,min:e,max:r,theme:h})=>{const d=(t-e)/(r-e)*100;return`linear-gradient(to right, ${h.greenMain} 0%, ${h.greenMain} ${d}%, ${h.lightGreen} ${d}%, ${h.lightGreen} 100%)`}};
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
`,Xe=v.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  margin-left: 8px;
`,P1=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,ae=v.input`
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
`,It=8,z1=({selectedObject:t})=>{const e=mt(),r=(s,i)=>{e(ft({id:t.id,updates:{[s]:i}}))},h=(s,i)=>{let f=Number(i);f<It&&(f=It);const m=(t[s]||1)<0?-1:1;f*=m,t.shape==="circle"?e(ft({id:t.id,updates:{width:f,height:f}})):r(s,f)},d=t.shape==="line"||t.shape==="arrow",l=t.shape==="circle";return n.jsxs(I1,{children:[n.jsx(E1,{children:"Властивості фігури"}),!d&&n.jsxs(xt,{children:[n.jsx(ut,{children:l?"Діаметр":"Розміри"}),l?n.jsx(ae,{type:"number",min:It,value:Math.abs(t.width||50),onChange:s=>h("width",s.target.value)}):n.jsxs(P1,{children:[n.jsxs("div",{children:[n.jsx(ut,{style:{fontSize:"10px",marginBottom:"4px"},children:"Ширина"}),n.jsx(ae,{type:"number",min:It,value:Math.abs(t.width||50),onChange:s=>h("width",s.target.value)})]}),n.jsxs("div",{children:[n.jsx(ut,{style:{fontSize:"10px",marginBottom:"4px"},children:"Висота"}),n.jsx(ae,{type:"number",min:It,value:Math.abs(t.height||30),onChange:s=>h("height",s.target.value)})]})]})]}),n.jsxs(xt,{children:[n.jsxs(ut,{children:["Кут повороту",n.jsxs(Xe,{children:[t.rotation||0,"º"]})]}),n.jsx(De,{type:"range",min:"-180",max:"180",step:"5",value:t.rotation||0,onChange:s=>r("rotation",Number(s.target.value))})]}),n.jsx(xt,{children:n.jsx(it,{color:t.borderColor||t.color||"#000000",opacity:t.borderOpacity!==void 0?t.borderOpacity:100,onColorChange:s=>r("borderColor",s),onOpacityChange:s=>r("borderOpacity",s),label:d?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(xt,{children:[n.jsxs(ut,{children:[d?"Товщина лінії":"Товщина обводки",n.jsxs(Xe,{children:[t.borderWidth||2,"px"]})]}),n.jsx(De,{type:"range",min:"1",max:"20",value:t.borderWidth||2,onChange:s=>r("borderWidth",Number(s.target.value))})]}),n.jsxs(xt,{children:[n.jsx(ut,{children:"Тип обводки"}),n.jsx(st,{value:t.borderStyle||"solid",onChange:s=>r("borderStyle",s),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),d&&n.jsxs(n.Fragment,{children:[n.jsxs(xt,{children:[n.jsx(ut,{children:"Початок лінії"}),n.jsx(st,{value:t.lineCapStart||"butt",onChange:s=>r("lineCapStart",s),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(xt,{children:[n.jsx(ut,{children:"Кінець лінії"}),n.jsx(st,{value:t.lineCapEnd||(t.shape==="arrow"?"arrow":"butt"),onChange:s=>r("lineCapEnd",s),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!d&&n.jsx(xt,{children:n.jsx(it,{color:t.fillColor||"#ffffff",opacity:t.fillOpacity!==void 0?t.fillOpacity:0,onColorChange:s=>r("fillColor",s),onOpacityChange:s=>r("fillOpacity",s),label:"Колір заливки і прозорість"})})]})},G1=v.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:t})=>t.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Y1=v.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:t})=>t.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,bt=v.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Nt=v.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,D1=v.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:t,min:e,max:r,theme:h})=>{const d=(t-e)/(r-e)*100;return`linear-gradient(to right, ${h.greenMain} 0%, ${h.greenMain} ${d}%, ${h.lightGreen} ${d}%, ${h.lightGreen} 100%)`}};
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
`,X1=v.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  margin-left: 8px;
`,R1=v.p`
  font-size: 12px;
  color: ${({theme:t})=>t.textGray||"#777"};
  margin: 8px 0 0 0;
  font-style: italic;
`,F1=()=>{const t=mt(),{shapeBorderColor:e,shapeBorderOpacity:r,shapeFillColor:h,shapeFillOpacity:d,shapeBorderWidth:l,shapeBorderStyle:s,shapeLineCapStart:i,shapeLineCapEnd:f,activeTool:m}=Xt(o=>o.tacticsBoard),u=m==="shape_line"||m==="shape_arrow";return n.jsxs(G1,{children:[n.jsx(Y1,{children:"Налаштування фігури"}),n.jsx(bt,{children:n.jsx(it,{color:e,opacity:r,onColorChange:o=>t(We(o)),onOpacityChange:o=>t(Ve(o)),label:u?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(bt,{children:[n.jsxs(Nt,{children:[u?"Товщина лінії":"Товщина обводки",n.jsxs(X1,{children:[l,"px"]})]}),n.jsx(D1,{type:"range",min:"1",max:"20",value:l,onChange:o=>t(je(Number(o.target.value)))})]}),n.jsxs(bt,{children:[n.jsx(Nt,{children:"Тип обводки"}),n.jsx(st,{value:s,onChange:o=>t(Ne(o)),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),u&&n.jsxs(n.Fragment,{children:[n.jsxs(bt,{children:[n.jsx(Nt,{children:"Початок лінії"}),n.jsx(st,{value:i,onChange:o=>t(Oe(o)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"perp",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(bt,{children:[n.jsx(Nt,{children:"Кінець лінії"}),n.jsx(st,{value:f||(m==="shape_arrow"?"arrow":"butt"),onChange:o=>t(qe(o)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"perp",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!u&&n.jsx(bt,{children:n.jsx(it,{color:h,opacity:d,onColorChange:o=>t(Ue(o)),onOpacityChange:o=>t(Je(o)),label:"Колір заливки і прозорість"})}),n.jsx(R1,{children:u?"Клікніть і потягніть, щоб намалювати лінію.":"Клікніть і потягніть, щоб намалювати фігуру."})]})},Et=v.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:t})=>t.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,Pt=v.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:t})=>t.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ot=v.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,Mt=v.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,Re=v.input`
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
`,Ot=v.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:t,min:e,max:r,theme:h})=>{const d=(t-e)/(r-e)*100;return`linear-gradient(to right, ${h.greenMain} 0%, ${h.greenMain} ${d}%, ${h.lightGreen} ${d}%, ${h.lightGreen} 100%)`}};
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
`,qt=v.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Z1=v.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
  margin-top: 10px;
`,A1=v.div`
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
`,H1=v.div`
  width: 30px; 
  height: 45px;
  background: ${({$color:t})=>t};
  border: 2px solid ${({$borderColor:t})=>t}; 
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); 
`,_1=v.div`
  display: flex;
  flex-direction: row; 
  gap: 15px; 
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`,Fe=v.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,Ze=v.input.attrs({type:"color"})`
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
`,Ae=v.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:t})=>t.textGray||"#666"};
  min-width: 45px; 
`,W1=v.button`
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
`,V1=v.button`
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
`,j1=v.span`
  font-size: 10px;
  color: ${({theme:t,$over:e})=>e?t.red:t.textGray};
  margin-top: 4px;
  display: block;
`,He=8,_e=50,Ut=100,zt=3,N1=({selectedObject:t})=>{const e=mt(),r=(y,b)=>{e(ft({id:t.id,updates:{[y]:b}}))},h=y=>{let b=Number(y);b=Math.max(He,Math.min(_e,b)),r("radius",b)},d=y=>{const b=Math.max(0,Math.min(99,Number(y)||0));r("number",b)},l=y=>{y.length<=Ut&&r("topText",y)},s=()=>{const y=t.cards||[];if(y.length<zt){const b=[...y,{color:"#FFD700",cardBorderColor:"#000000"}];r("cards",b)}},i=y=>{const G=(t.cards||[]).filter((P,Z)=>Z!==y);r("cards",G)},f=(y,b)=>{const P=[...t.cards||[]];P[y]={...P[y],color:b},r("cards",P)},m=(y,b)=>{const P=[...t.cards||[]];P[y]={...P[y],cardBorderColor:b},r("cards",P)},u=t.radius||20,o=t.number!==void 0?t.number:1,p=t.topText||"",a=t.rotation||0,g=t.color||"#ff0000",x=t.colorOpacity!==void 0?t.colorOpacity:100,c=t.numberColor||"#ffffff",L=t.numberOpacity!==void 0?t.numberOpacity:100,w=t.textColor||"#000000",C=t.textOpacity!==void 0?t.textOpacity:100,$=t.textSize||Math.max(10,u*.5),T=t.borderWidth||2,S=t.borderColor||"#000000",B=t.borderOpacity!==void 0?t.borderOpacity:100,E=t.borderStyle||"solid",k=t.cards||[];return n.jsxs(n.Fragment,{children:[n.jsxs(Et,{children:[n.jsx(Pt,{children:"Розмір та позиція"}),n.jsxs(ot,{children:[n.jsxs(Mt,{children:["Розмір гравця (8-50px)",n.jsxs(qt,{children:[u,"px"]})]}),n.jsx(Ot,{min:He,max:_e,value:u,onChange:y=>h(y.target.value)})]}),n.jsxs(ot,{children:[n.jsxs(Mt,{children:["Кут повороту",n.jsxs(qt,{children:[a,"º"]})]}),n.jsx(Ot,{min:"-180",max:"180",step:"5",value:a,onChange:y=>r("rotation",Number(y.target.value))})]}),n.jsx(ot,{children:n.jsx(it,{color:g,opacity:x,onColorChange:y=>r("color",y),onOpacityChange:y=>r("colorOpacity",y),label:"Колір гравця"})})]}),n.jsxs(Et,{children:[n.jsx(Pt,{children:"Номер гравця"}),n.jsxs(ot,{children:[n.jsx(Mt,{children:"Номер гравця (0-99)"}),n.jsx(Re,{type:"number",min:"0",max:"99",value:o,onChange:y=>d(y.target.value)})]}),n.jsx(ot,{children:n.jsx(it,{color:c,opacity:L,onColorChange:y=>r("numberColor",y),onOpacityChange:y=>r("numberOpacity",y),label:"Колір номера"})})]}),n.jsxs(Et,{children:[n.jsx(Pt,{children:"Текст над гравцем"}),n.jsxs(ot,{children:[n.jsx(Mt,{children:"Текст"}),n.jsx(Re,{type:"text",maxLength:Ut,placeholder:"Введіть текст",value:p,onChange:y=>l(y.target.value)}),n.jsxs(j1,{$over:p.length>Ut,children:[p.length,"/",Ut," символів"]})]}),p&&n.jsxs(n.Fragment,{children:[n.jsxs(ot,{children:[n.jsxs(Mt,{children:["Розмір тексту",n.jsxs(qt,{children:[$,"px"]})]}),n.jsx(Ot,{min:"8",max:"40",value:$,onChange:y=>r("textSize",Number(y.target.value))})]}),n.jsx(ot,{children:n.jsx(it,{color:w,opacity:C,onColorChange:y=>r("textColor",y),onOpacityChange:y=>r("textOpacity",y),label:"Колір тексту"})})]})]}),n.jsxs(Et,{children:[n.jsx(Pt,{children:"Обводка"}),n.jsx(ot,{children:n.jsx(it,{color:S,opacity:B,onColorChange:y=>r("borderColor",y),onOpacityChange:y=>r("borderOpacity",y),label:"Колір обводки"})}),n.jsxs(ot,{children:[n.jsxs(Mt,{children:["Товщина обводки",n.jsxs(qt,{children:[T,"px"]})]}),n.jsx(Ot,{min:"1",max:"10",value:T,onChange:y=>r("borderWidth",Number(y.target.value))})]}),n.jsxs(ot,{children:[n.jsx(Mt,{children:"Тип обводки"}),n.jsx(st,{value:E,onChange:y=>r("borderStyle",y),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]}),n.jsxs(Et,{children:[n.jsxs(Pt,{children:["Картки (",k.length,"/",zt,")"]}),k.length>0&&n.jsx(Z1,{children:k.map((y,b)=>n.jsxs(A1,{children:[n.jsx(H1,{$color:y.color,$borderColor:y.cardBorderColor||"#000000"}),n.jsxs(_1,{children:[n.jsxs(Fe,{title:"Колір заливки картки",children:[n.jsx(Ae,{children:"Заливка:"}),n.jsx(Ze,{value:y.color,onChange:G=>f(b,G.target.value)})]}),n.jsxs(Fe,{title:"Колір обводки картки",children:[n.jsx(Ae,{children:"Обводка:"}),n.jsx(Ze,{value:y.cardBorderColor||"#000000",onChange:G=>m(b,G.target.value)})]})]}),n.jsx(W1,{onClick:()=>i(b),title:"Видалити картку",children:n.jsx(Pn,{})})]},b))}),n.jsx(ot,{style:{marginTop:k.length>0?"15px":"0"},children:n.jsx(V1,{onClick:s,disabled:k.length>=zt,children:k.length>=zt?`Максимум ${zt} картки`:"Додати картку"})})]})]})},O1=v(en)`
  width: 100%;
  height: 100%;
  fill: ${({theme:t})=>t.black};
`,q1=v.div`
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
`,U1=v.div`
  padding: 16px;
  height: calc(100% - 48px);
`,J1=v.button`
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
`,K1=v.div`
  text-align: center;
  padding: 40px 20px;
  color: ${({theme:t})=>t.textGray||"#999"};
  font-size: 14px;
`,Gt=v.button`
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
`,Q1=({isOpen:t,onClose:e})=>{const r=mt(),{activeTool:h,selectedObjectId:d,objects:l,paths:s}=Xt(u=>u.tacticsBoard),i=d?d.startsWith("path_")?{...s[parseInt(d.replace("path_",""))],type:"path",id:d}:l.find(u=>u.id===d):null,f=()=>{if(d){if(d.startsWith("path_")){const u=parseInt(d.replace("path_",""));r(Sn(u))}else r(kn(d));r(Yt())}},m=()=>{if(i)switch(i.type){case"text":return n.jsxs(n.Fragment,{children:[n.jsx(L1,{selectedObject:i}),n.jsx(Gt,{onClick:f,children:"Видалити текст"})]});case"player":return n.jsxs(n.Fragment,{children:[n.jsx(N1,{selectedObject:i}),n.jsx(Gt,{onClick:f,children:"Видалити гравця"})]});case"path":return n.jsx(Gt,{onClick:f,children:"Видалити малюнок"});case"shape":return n.jsxs(n.Fragment,{children:[n.jsx(z1,{selectedObject:i}),n.jsx(Gt,{onClick:f,children:"Видалити фігуру"})]});default:return n.jsx(Gt,{onClick:f,children:"Видалити об'єкт"})}switch(h){case"text":return n.jsx(T1,{});case"shape_rectangle":case"shape_circle":case"shape_triangle":case"shape_line":case"shape_arrow":return n.jsx(F1,{});default:return n.jsxs(K1,{children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎯"}),n.jsx("p",{children:"Виберіть інструмент або об'єкт"}),n.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px",fontStyle:"italic"},children:"Налаштування з'являться тут"})]})}};return n.jsxs(q1,{$isOpen:t,children:[n.jsx(J1,{title:"Закрити панель інструментів",onClick:e,children:n.jsx(O1,{})}),n.jsx(U1,{children:m()})]})},to=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: ${({theme:t})=>t.mainBGColor};
`,eo=v.div`
  background: ${({theme:t})=>t.ContainerBGColor};
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`,no=v.div`
  width: 100%;
`,io=({theme:t})=>{const{setTitle:e}=Bn(),[r,h]=M.useState(!1),[d,l]=M.useState({id:"football_standard",name:"Стандартне футбольне поле",width:105,height:68}),s=m=>{l(m)},i=()=>{h(!r)},f=()=>{h(!1)};return M.useEffect(()=>{e("Тактична дошка")},[e]),n.jsx(Tn,{store:In,children:n.jsx(to,{children:n.jsxs(eo,{children:[n.jsx(e1,{currentField:d,onSelectField:s,isSidebarOpen:r,onToggleSidebar:i}),n.jsx(no,{children:n.jsx(Un,{fieldSize:{width:d.width,height:d.height},fieldType:d.id})}),n.jsx(Q1,{isOpen:r,onClose:f,children:n.jsx("div",{children:"Тут будуть інструменти"})})]})})})};export{io as default};
