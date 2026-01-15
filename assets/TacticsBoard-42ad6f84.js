import{r as M,d as L,b as Ct,a as Zt,_ as xn,$ as re,a0 as xe,a1 as $t,a2 as fn,a3 as mn,a4 as Dt,j as n,a5 as fe,a6 as Cn,a7 as Ft,W as me,S as yn,a8 as wn,a9 as Mn,aa as vn,ab as Ln,ac as bn,ad as Sn,ae as $n,af as Oe,ag as qe,ah as Je,ai as Ue,aj as Ke,ak as Qe,al as tn,am as en,an as kn,ao as Bn,u as Tn,ap as En,aq as In}from"./index-0c4cf82d.js";import{S as Pn}from"./ChevronDownicon-c0db98b4.js";import{S as Gn}from"./DeleteIcon-faacca43.js";const Vt=(t,e,r,p,c)=>{const d=Math.cos(c),i=Math.sin(c),s=t-r,u=e-p;return{x:r+(s*d-u*i),y:p+(s*i+u*d)}},pt=(t,e)=>{if(t.type==="player"){const r=t.radius||20,c=(t.rotation||0)*Math.PI/180;let d=t.x-r,i=t.x+r,s=t.y-r,u=t.y+r;if(t.topText){const C=t.textSize||Math.max(10,r*.5),v=C,o=t.topText.length*C*.6,h=-(r+v);[{x:-o/2,y:h-v*.2},{x:o/2,y:h-v*.2},{x:-o/2,y:h},{x:o/2,y:h}].forEach(g=>{const m=g.x*Math.cos(c)-g.y*Math.sin(c),a=g.x*Math.sin(c)+g.y*Math.cos(c);d=Math.min(d,t.x+m),i=Math.max(i,t.x+m),s=Math.min(s,t.y+a),u=Math.max(u,t.y+a)})}if(t.cards&&t.cards.length>0){const C=r*.35,v=C*1.4,o=2,h=Math.PI/4,l=Math.cos(h)*r*.7,g=Math.sin(h)*r*.7,m=t.cards.length-1,a=l-m*(C+o);[{x:a-C,y:g},{x:l,y:g},{x:a-C,y:g+v},{x:l,y:g+v}].forEach(x=>{const f=x.x*Math.cos(c)-x.y*Math.sin(c),$=x.x*Math.sin(c)+x.y*Math.cos(c);d=Math.min(d,t.x+f),i=Math.max(i,t.x+f),s=Math.min(s,t.y+$),u=Math.max(u,t.y+$)})}return{x:t.x-r,y:t.y-r,width:r*2,height:r*2,centerX:t.x,centerY:t.y}}if(t.type==="ball"){const r=t.radius||10;return{x:t.x-r,y:t.y-r,width:r*2,height:r*2,centerX:t.x,centerY:t.y}}if(t.type==="shape"){if(t.shape==="line"||t.shape==="arrow"){const s=t.rotation||0;if(s!==0){const h=s*Math.PI/180,l=(t.startX+t.endX)/2,g=(t.startY+t.endY)/2,m=Vt(t.startX,t.startY,l,g,h),a=Vt(t.endX,t.endY,l,g,h),y=Math.min(m.x,a.x),x=Math.max(m.x,a.x),f=Math.min(m.y,a.y),$=Math.max(m.y,a.y);return{x:y,y:f,width:x-y,height:$-f,startX:m.x,startY:m.y,endX:a.x,endY:a.y,originalStartX:t.startX,originalStartY:t.startY,originalEndX:t.endX,originalEndY:t.endY,centerX:l,centerY:g,rotation:s,rotatedCorners:[m,a]}}const u=Math.min(t.startX,t.endX),C=Math.max(t.startX,t.endX),v=Math.min(t.startY,t.endY),o=Math.max(t.startY,t.endY);return{x:u,y:v,width:C-u,height:o-v,startX:t.startX,startY:t.startY,endX:t.endX,endY:t.endY,rotation:t.rotation||0}}const r=t.width||50,p=t.height||30,c=t.rotation||0;if(t.shape==="circle"){const s=Math.max(Math.abs(r),Math.abs(p)),u=t.x+r/2,C=t.y+p/2;return{x:u-s/2,y:C-s/2,width:s,height:s,centerX:u,centerY:C,radius:s/2,originalX:t.x,originalY:t.y,originalWidth:r,originalHeight:p,rotation:c}}if(c!==0){const s=c*Math.PI/180,u=t.x+r/2,C=t.y+p/2,o=[{x:t.x,y:t.y},{x:t.x+r,y:t.y},{x:t.x+r,y:t.y+p},{x:t.x,y:t.y+p}].map(a=>Vt(a.x,a.y,u,C,s));let h=o[0].x,l=o[0].x,g=o[0].y,m=o[0].y;return o.forEach(a=>{h=Math.min(h,a.x),l=Math.max(l,a.x),g=Math.min(g,a.y),m=Math.max(m,a.y)}),{x:h,y:g,width:l-h,height:m-g,centerX:u,centerY:C,originalX:t.x,originalY:t.y,originalWidth:r,originalHeight:p,rotation:c,rotatedCorners:o}}const d=r<0?t.x+r:t.x,i=p<0?t.y+p:t.y;return{x:d,y:i,width:Math.abs(r),height:Math.abs(p),originalX:t.x,originalY:t.y,originalWidth:r,originalHeight:p,rotation:c}}if(t.type==="figure"){const r=t.size||30;return{x:t.x-r/2,y:t.y-r/2,width:r,height:r,centerX:t.x,centerY:t.y}}if(t.type==="path"){if(!t.points||t.points.length===0)return null;let r=t.points[0].x,p=t.points[0].y,c=t.points[0].x,d=t.points[0].y;return t.points.forEach(i=>{r=Math.min(r,i.x),p=Math.min(p,i.y),c=Math.max(c,i.x),d=Math.max(d,i.y)}),{x:r,y:p,width:c-r,height:d-p,points:t.points,centerX:(r+c)/2,centerY:(p+d)/2}}if(t.type==="text"){if(e){const c=e.getContext("2d"),d=t.fontWeight||"normal",i=t.fontStyle||"normal",s=t.fontSize||16,u=t.fontFamily||"Arial";c.font=`${i} ${d} ${s}px ${u}`;const C=(t.text||"").split(`
`),v=(t.lineHeight||1.5)*s,o=t.letterSpacing||0;let h=0;C.forEach(y=>{let f=c.measureText(y).width;o!==0&&(f+=o*(y.length-1)),f>h&&(h=f)});const l=C.length>0?(C.length-1)*v+s:0,g=t.rotation||0,m=t.x+h/2,a=t.y+l/2;if(g!==0){const y=g*Math.PI/180,f=[{x:t.x,y:t.y},{x:t.x+h,y:t.y},{x:t.x+h,y:t.y+l},{x:t.x,y:t.y+l}].map(G=>Vt(G.x,G.y,m,a,y));let $=f[0].x,k=f[0].x,b=f[0].y,B=f[0].y;return f.forEach(G=>{$=Math.min($,G.x),k=Math.max(k,G.x),b=Math.min(b,G.y),B=Math.max(B,G.y)}),{x:$,y:b,width:k-$,height:B-b,centerX:m,centerY:a,originalX:t.x,originalY:t.y,originalWidth:h,originalHeight:l,rotation:g,rotatedCorners:f}}return{x:t.x,y:t.y,width:h,height:l,centerX:m,centerY:a,originalX:t.x,originalY:t.y,originalWidth:h,originalHeight:l,rotation:0}}const r=t.width||100,p=t.height||20;return{x:t.x,y:t.y,width:r,height:p,centerX:t.x+r/2,centerY:t.y+p/2}}return null},se=(t,e,r)=>{if(!r)return!1;if(r.rotatedCorners&&r.rotatedCorners.length>0){const p=r.rotatedCorners;let c=!1;for(let d=0,i=p.length-1;d<p.length;i=d++){const s=p[d].x,u=p[d].y,C=p[i].x,v=p[i].y;u>e!=v>e&&t<(C-s)*(e-u)/(v-u)+s&&(c=!c)}return c}return t>=r.x&&t<=r.x+r.width&&e>=r.y&&e<=r.y+r.height},Ce=(t,e,r,p=10,c)=>{const d=pt(r,c);if(!d)return!1;if(r.type==="path"){const i=Math.max(p,10);for(let s=0;s<r.points.length-1;s++){const u=r.points[s],C=r.points[s+1],v=C.x-u.x,o=C.y-u.y,h=Math.sqrt(v*v+o*o);if(h===0)continue;const l=Math.max(0,Math.min(1,((t-u.x)*v+(e-u.y)*o)/(h*h))),g=u.x+l*v,m=u.y+l*o;if(Math.sqrt(Math.pow(t-g,2)+Math.pow(e-m,2))<=i)return!0}return!1}if(r.type==="shape"&&(r.shape==="line"||r.shape==="arrow")){const s=d.endX-d.startX,u=d.endY-d.startY,C=Math.sqrt(s*s+u*u);if(C===0)return!1;const v=Math.max(0,Math.min(1,((t-d.startX)*s+(e-d.startY)*u)/(C*C))),o=d.startX+v*s,h=d.startY+v*u;return Math.sqrt(Math.pow(t-o,2)+Math.pow(e-h,2))<=10}if(r.type==="shape"&&r.shape==="circle"){const i=d.centerX||d.x+d.width/2,s=d.centerY||d.y+d.height/2,u=d.radius||Math.max(d.width,d.height)/2;return Math.sqrt(Math.pow(t-i,2)+Math.pow(e-s,2))<=u}return se(t,e,d)},nn=(t,e)=>{if(e&&e.type==="shape"&&(e.shape==="line"||e.shape==="arrow"))return{start:{x:t.startX,y:t.startY,cursor:"crosshair"},end:{x:t.endX,y:t.endY,cursor:"crosshair"}};if(e&&e.type==="path")return{};if(e&&e.type==="text"){if(t.rotatedCorners&&t.rotatedCorners.length===4){const r=t.rotatedCorners;return{topLeft:{x:r[0].x,y:r[0].y,cursor:"nwse-resize"},topRight:{x:r[1].x,y:r[1].y,cursor:"nesw-resize"},bottomRight:{x:r[2].x,y:r[2].y,cursor:"nwse-resize"},bottomLeft:{x:r[3].x,y:r[3].y,cursor:"nesw-resize"}}}return{topLeft:{x:t.x,y:t.y,cursor:"nwse-resize"},topRight:{x:t.x+t.width,y:t.y,cursor:"nesw-resize"},bottomLeft:{x:t.x,y:t.y+t.height,cursor:"nesw-resize"},bottomRight:{x:t.x+t.width,y:t.y+t.height,cursor:"nwse-resize"}}}if(t.rotatedCorners&&t.rotatedCorners.length===4){const r=t.rotatedCorners;return{topLeft:{x:r[0].x,y:r[0].y,cursor:"nwse-resize"},topRight:{x:r[1].x,y:r[1].y,cursor:"nesw-resize"},bottomRight:{x:r[2].x,y:r[2].y,cursor:"nwse-resize"},bottomLeft:{x:r[3].x,y:r[3].y,cursor:"nesw-resize"},top:{x:(r[0].x+r[1].x)/2,y:(r[0].y+r[1].y)/2,cursor:"ns-resize"},bottom:{x:(r[2].x+r[3].x)/2,y:(r[2].y+r[3].y)/2,cursor:"ns-resize"},left:{x:(r[0].x+r[3].x)/2,y:(r[0].y+r[3].y)/2,cursor:"ew-resize"},right:{x:(r[1].x+r[2].x)/2,y:(r[1].y+r[2].y)/2,cursor:"ew-resize"}}}return{topLeft:{x:t.x,y:t.y,cursor:"nwse-resize"},topRight:{x:t.x+t.width,y:t.y,cursor:"nesw-resize"},bottomLeft:{x:t.x,y:t.y+t.height,cursor:"nesw-resize"},bottomRight:{x:t.x+t.width,y:t.y+t.height,cursor:"nwse-resize"},top:{x:t.x+t.width/2,y:t.y,cursor:"ns-resize"},bottom:{x:t.x+t.width/2,y:t.y+t.height,cursor:"ns-resize"},left:{x:t.x,y:t.y+t.height/2,cursor:"ew-resize"},right:{x:t.x+t.width,y:t.y+t.height/2,cursor:"ew-resize"}}},ye=(t,e,r,p)=>{const c=nn(r,p),d=8;for(const[i,s]of Object.entries(c))if(p&&p.type==="shape"&&(p.shape==="line"||p.shape==="arrow")){if(Math.sqrt(Math.pow(t-s.x,2)+Math.pow(e-s.y,2))<=d*2)return{name:i,...s}}else if(Math.abs(t-s.x)<=d&&Math.abs(e-s.y)<=d)return{name:i,...s};return null},rn=(t,e,r,p,c,d)=>{for(let i=r.length-1;i>=0;i--)if(Ce(t,e,r[i],c,d))return r[i];for(let i=p.length-1;i>=0;i--){const s={...p[i],type:"path",id:`path_${i}`};if(Ce(t,e,s,c,d))return s}return null},zn=(t,e,r,p,c,d,i,s,u)=>{t.save(),t.strokeStyle=s,t.lineWidth=u,t.lineCap="butt",t.lineJoin="miter",t.setLineDash([]),t.beginPath(),t.moveTo(e,r),t.lineTo(p,c),t.lineTo(d,i),t.stroke(),t.restore()},Yn=(t,e,r,p,c,d,i,s,u=0,C=0)=>{const v=p-e,o=c-r,h=Math.sqrt(v*v+o*o);if(h===0)return;const l=v/h,g=o/h,m=u,a=C,y=h-m-a;if(y<=0)return;const x=e+l*m,f=r+g*m;if(t.strokeStyle=s,t.lineWidth=i,t.lineCap="butt",d==="dashed"){const $=Math.max(i*3,12),k=Math.max(i*2,8),b=$+k,B=Math.max(2,Math.floor(y/b));if(B===2&&y<b*2){const X=y*.35,R=y*.3;t.setLineDash([X,R]),t.lineDashOffset=0,t.beginPath(),t.moveTo(x,f),t.lineTo(p-l*a,c-g*a),t.stroke(),t.setLineDash([]);return}const T=(y-B*$)/B,w=$+T,S=B*w-T,I=(y-S)/2;t.setLineDash([$,T]),t.lineDashOffset=-I,t.beginPath(),t.moveTo(x,f),t.lineTo(p-l*a,c-g*a),t.stroke(),t.setLineDash([]),t.lineDashOffset=0}else if(d==="dotted"){const $=Math.max(i*2.5,10),k=i/2,b=Math.max(2,Math.floor(y/$)+1),B=y/(b-1);t.fillStyle=s;for(let G=0;G<b;G++){const T=G*B,w=x+l*T,S=f+g*T;t.beginPath(),t.arc(w,S,k,0,Math.PI*2),t.fill()}}else t.beginPath(),t.moveTo(x,f),t.lineTo(p-l*a,c-g*a),t.stroke()},we=(t,e,r,p,c)=>{if(e.length<2)return;if(r==="solid"){t.strokeStyle=c,t.lineWidth=p,t.lineCap="butt",t.lineJoin="miter",t.setLineDash([]),t.beginPath(),t.moveTo(e[0].x,e[0].y);for(let h=1;h<e.length;h++)t.lineTo(e[h].x,e[h].y);t.closePath(),t.stroke();return}let d=0;const i=[],s=e.length;for(let h=0;h<s;h++){const l=e[h],g=e[(h+1)%s],m=g.x-l.x,a=g.y-l.y,y=Math.sqrt(m*m+a*a);i.push(y),d+=y}if(d<20){t.strokeStyle=c,t.lineWidth=p,t.lineCap="butt",t.lineJoin="miter",t.setLineDash([]),t.beginPath(),t.moveTo(e[0].x,e[0].y);for(let h=1;h<e.length;h++)t.lineTo(e[h].x,e[h].y);t.closePath(),t.stroke();return}const u=Math.max(p*2.5,Math.min(p*4,d/25)),C=Math.max(p*1.5,u*.5),v=u+C,o=u*.7;if(r==="dotted"){const h=p/2,l=Math.max(p*2,d/60);t.fillStyle=c;for(let g=0;g<s;g++){const m=e[g];t.beginPath(),t.arc(m.x,m.y,h,0,Math.PI*2),t.fill()}for(let g=0;g<s;g++){const m=e[g],a=i[g];if(a<=0)continue;const y=e[(g+1)%s].x-m.x,x=e[(g+1)%s].y-m.y,f=y/a,$=x/a,k=1,b=Math.floor(a/l)+1,B=Math.max(k,b-1),G=a/B;for(let T=1;T<B;T++){const w=T*G,S=m.x+f*w,Y=m.y+$*w;t.beginPath(),t.arc(S,Y,h,0,Math.PI*2),t.fill()}}}else if(r==="dashed"){t.strokeStyle=c,t.lineWidth=p,t.lineCap="butt";for(let h=0;h<s;h++){const l=e[h],g=e[h===0?s-1:h-1],m=e[(h+1)%s],a=i[h===0?s-1:h-1],y=i[h];if(a>0&&y>0){const x=g.x-l.x,f=g.y-l.y,$=m.x-l.x,k=m.y-l.y,b=Math.min(a,y)/3,B=Math.min(o,b),G=l.x+x/a*B,T=l.y+f/a*B,w=l.x+$/y*B,S=l.y+k/y*B;zn(t,G,T,l.x,l.y,w,S,c,p)}}for(let h=0;h<s;h++){const l=e[h],g=e[(h+1)%s],m=i[h];if(m===0)continue;const a=g.x-l.x,y=g.y-l.y,x=a/m,f=y/m,$=i[h===0?s-1:h-1],k=m,b=i[(h+1)%s],B=Math.min($,k)/3,G=Math.min(o,B),T=Math.min(k,b)/3,w=Math.min(o,T),S=m-G-w;if(S<=u/2)continue;const Y=l.x+x*G,I=l.y+f*G,X=Math.floor(S/v);if(X===0){const z=S/2-u/2;if(z>=0){const D=Y+x*z,A=I+f*z,H=Y+x*(z+u),_=I+f*(z+u);t.beginPath(),t.moveTo(D,A),t.lineTo(H,_),t.stroke()}continue}const W=(S-X*u)/X,V=u+W,j=X*V-W,N=(S-j)/2;t.setLineDash([u,W]),t.lineDashOffset=-N,t.beginPath(),t.moveTo(Y,I),t.lineTo(g.x-x*w,g.y-f*w),t.stroke(),t.setLineDash([]),t.lineDashOffset=0}}},Me=(t,e,r,p,c,d,i,s,u)=>{if(c==="butt")return 0;const C=i.replace("#",""),v=parseInt(C.slice(0,2),16),o=parseInt(C.slice(2,4),16),h=parseInt(C.slice(4,6),16);t.fillStyle=`rgba(${v}, ${o}, ${h}, ${s})`,t.strokeStyle=`rgba(${v}, ${o}, ${h}, ${s})`,t.save(),t.translate(e,r),t.rotate(p);let l=0;if(c==="round"){const g=Math.max(u*.75,4);t.beginPath(),t.arc(0,0,g,0,Math.PI*2),t.fill(),l=0}else c==="arrow"?(t.beginPath(),t.moveTo(0,0),t.lineTo(-d,-d*.5),t.lineTo(-d,d*.5),t.closePath(),t.fill(),l=d):c==="circle"?(t.beginPath(),t.arc(0,0,d*.4,0,Math.PI*2),t.fill(),l=d*.2):c==="bar"&&(t.lineWidth=u,t.lineCap="butt",t.beginPath(),t.moveTo(0,-d*.6),t.lineTo(0,d*.6),t.stroke(),l=0);return t.restore(),l},ve=(t,e,r=!1)=>{t.save();const p=e.fontWeight||"normal",c=e.fontStyle||"normal",d=e.fontSize||16,i=e.fontFamily||"Arial";t.font=`${c} ${p} ${d}px ${i}`,t.textAlign="left",t.textBaseline="top";const s=(e.text||"").split(`
`),u=(e.lineHeight||1.5)*d,C=e.letterSpacing||0;let v=0;s.forEach(f=>{let $=0;C!==0?$=t.measureText(f).width+C*(f.length-1):$=t.measureText(f).width,$>v&&(v=$)});const o=s.length>0?(s.length-1)*u+d:0,h=2;if(e.rotation){const f=e.x+v/2,$=e.y+o/2;t.translate(f,$),t.rotate(e.rotation*Math.PI/180),t.translate(-f,-$)}const l=e.opacity!==void 0?e.opacity/100:1,m=(e.color||"#000000").replace("#",""),a=parseInt(m.slice(0,2),16),y=parseInt(m.slice(2,4),16),x=parseInt(m.slice(4,6),16);return t.fillStyle=`rgba(${a}, ${y}, ${x}, ${l})`,s.forEach((f,$)=>{const k=e.y+$*u;if(C!==0){let b=e.x;for(let B=0;B<f.length;B++){const G=f[B];t.fillText(G,b,k);const T=t.measureText(G).width;b+=T+C}}else t.fillText(f,e.x,k);if(e.textDecoration==="underline"){const b=C!==0?t.measureText(f).width+C*(f.length-1):t.measureText(f).width;t.beginPath(),t.moveTo(e.x,k+d),t.lineTo(e.x+b,k+d),t.strokeStyle=t.fillStyle,t.lineWidth=Math.max(1,d/16),t.stroke()}}),r&&(t.fillStyle="rgba(255, 215, 0, 0.2)",t.fillRect(e.x-h,e.y-h,v+h*2,o+h*2)),t.restore(),e},Le=(t,e,r=!1)=>{if(!(e.points.length<2)){t.strokeStyle=r?"#FFD700":e.color,t.lineWidth=e.brushSize,t.lineCap="round",t.lineJoin="round",r&&(t.shadowColor="#FFD700",t.shadowBlur=5),t.beginPath(),t.moveTo(e.points[0].x,e.points[0].y);for(let p=1;p<e.points.length;p++)t.lineTo(e.points[p].x,e.points[p].y);t.stroke(),t.shadowBlur=0}},be=(t,e,r)=>{t.save();const p=e.x,c=e.y,d=e.radius||20,i=e.rotation||0;t.translate(p,c),t.rotate(i*Math.PI/180);const s=e.borderWidth||2,u=(e.borderOpacity!==void 0?e.borderOpacity:100)/100,C=r?"#FFD700":e.borderColor||"#000000",v=e.borderStyle||"solid",o=C.replace("#",""),h=parseInt(o.slice(0,2),16),l=parseInt(o.slice(2,4),16),g=parseInt(o.slice(4,6),16),m=(e.colorOpacity!==void 0?e.colorOpacity:100)/100,y=(e.color||"#ff0000").replace("#",""),x=parseInt(y.slice(0,2),16),f=parseInt(y.slice(2,4),16),$=parseInt(y.slice(4,6),16);if(t.beginPath(),t.arc(0,0,d,0,Math.PI*2),t.fillStyle=`rgba(${x}, ${f}, ${$}, ${m})`,t.fill(),t.strokeStyle=`rgba(${h}, ${l}, ${g}, ${u})`,t.lineWidth=s,v==="dashed"){const I=2*Math.PI*d,X=Math.max(s*2.5,Math.min(s*4,I/25)),R=Math.max(s*1.5,X*.5),W=X+R,V=Math.floor(I/W);if(V<3||I<30)t.setLineDash([]),t.beginPath(),t.arc(0,0,d,0,Math.PI*2),t.stroke();else{const N=(I-V*X)/V,z=(X+N)/d,D=X/d,A=X+N,H=V*A-N,J=(I-H)/2/d;t.lineCap="butt";for(let K=0;K<V;K++){const O=J+K*z,et=O+D;t.beginPath(),t.arc(0,0,d,O,et),t.stroke()}}}else if(v==="dotted"){const I=2*Math.PI*d,X=s/2,R=Math.max(s*2,I/60),W=Math.max(8,Math.round(I/R)),V=2*Math.PI/W;t.fillStyle=`rgba(${h}, ${l}, ${g}, ${u})`;for(let j=0;j<W;j++){const Z=j*V,N=d*Math.cos(Z),z=d*Math.sin(Z);t.beginPath(),t.arc(N,z,X,0,Math.PI*2),t.fill()}}else t.setLineDash([]),t.beginPath(),t.arc(0,0,d,0,Math.PI*2),t.stroke();t.setLineDash([]);const k=e.number!==void 0?e.number:1,b=(e.numberOpacity!==void 0?e.numberOpacity:100)/100,G=(e.numberColor||"#ffffff").replace("#",""),T=parseInt(G.slice(0,2),16),w=parseInt(G.slice(2,4),16),S=parseInt(G.slice(4,6),16),Y=Math.max(12,d*.8);if(t.fillStyle=`rgba(${T}, ${w}, ${S}, ${b})`,t.font=`bold ${Y}px Arial`,t.textAlign="center",t.textBaseline="middle",t.fillText(k.toString(),0,0),e.topText){const I=(e.textOpacity!==void 0?e.textOpacity:100)/100,R=(e.textColor||"#000000").replace("#",""),W=parseInt(R.slice(0,2),16),V=parseInt(R.slice(2,4),16),j=parseInt(R.slice(4,6),16),Z=e.textSize||Math.max(10,d*.5),z=-(d+5);t.fillStyle=`rgba(${W}, ${V}, ${j}, ${I})`,t.font=`${Z}px Arial`,t.textAlign="center",t.textBaseline="bottom",t.fillText(e.topText,0,z)}if(e.cards&&e.cards.length>0){const I=d*.35,X=I*1.4,R=4,W=Math.PI/4,V=Math.cos(W)*d*.7,j=Math.sin(W)*d*.7;e.cards.forEach((Z,N)=>{const z=Z.color||(Z==="yellow"?"#FFD700":"#FF0000"),D=Z.cardBorderColor||"#000000",A=V-N*(I+R);t.fillStyle=z,t.fillRect(A-I,j,I,X),t.strokeStyle=D,t.lineWidth=1.5,t.setLineDash([]),t.strokeRect(A-I,j,I,X)})}t.restore()},Se=(t,e,r=!1)=>{const p=e.radius||10,c=r?"#FFD700":"black",d=r?3:2;t.fillStyle="white",t.strokeStyle=c,t.lineWidth=d,t.beginPath(),t.arc(e.x,e.y,p,0,Math.PI*2),t.fill(),t.stroke(),t.beginPath(),t.arc(e.x-p/3,e.y-p/3,p/3,0,Math.PI*2),t.fillStyle="black",t.fill()},$e=(t,e,r=!1,p="#000")=>{if(t.save(),e.rotation)if(e.shape==="line"||e.shape==="arrow"){const l=(e.startX+e.endX)/2,g=(e.startY+e.endY)/2;t.translate(l,g),t.rotate(e.rotation*Math.PI/180),t.translate(-l,-g)}else{const l=e.x+(e.width||50)/2,g=e.y+(e.height||30)/2;t.translate(l,g),t.rotate(e.rotation*Math.PI/180),t.translate(-l,-g)}const c=r?"#FFD700":e.borderColor||e.color||p,d=e.borderOpacity!==void 0?e.borderOpacity/100:1,i=e.borderWidth||2,s=e.borderStyle||"solid",u=c.replace("#",""),C=parseInt(u.slice(0,2),16),v=parseInt(u.slice(2,4),16),o=parseInt(u.slice(4,6),16),h=`rgba(${C}, ${v}, ${o}, ${d})`;if(t.strokeStyle=h,t.lineWidth=i,t.lineCap="butt",t.lineJoin="miter",t.setLineDash([]),e.shape==="line"||e.shape==="arrow"){const l=e.endX-e.startX,g=e.endY-e.startY,m=Math.atan2(g,l),a=e.lineCapStart||"butt",y=e.lineCapEnd||(e.shape==="arrow"?"arrow":"butt"),x=Math.max(i*2.5,10);let f=0;a==="arrow"?f=x:a==="circle"?f=x*.2:(a==="round"||a==="bar")&&(f=0);let $=0;if(y==="arrow"?$=x:y==="circle"?$=x*.2:(y==="round"||y==="bar")&&($=0),s==="dashed"||s==="dotted")Yn(t,e.startX,e.startY,e.endX,e.endY,s,i,h,f,$);else{const k=e.startX+Math.cos(m)*f,b=e.startY+Math.sin(m)*f,B=e.endX-Math.cos(m)*$,G=e.endY-Math.sin(m)*$;t.lineCap="butt",t.beginPath(),t.moveTo(k,b),t.lineTo(B,G),t.stroke()}a!=="butt"&&Me(t,e.startX,e.startY,m+Math.PI,a,x,c,d,i),y!=="butt"&&Me(t,e.endX,e.endY,m,y,x,c,d,i)}else{const l=e.x,g=e.y,m=e.width||50,a=e.height||30,y=10,x=Math.abs(m)<y?m<0?-y:y:m,f=Math.abs(a)<y?a<0?-y:y:a,$=e.fillColor||"#ffffff",k=e.fillOpacity!==void 0?e.fillOpacity/100:0;if(k>0){const b=$.replace("#",""),B=parseInt(b.slice(0,2),16),G=parseInt(b.slice(2,4),16),T=parseInt(b.slice(4,6),16);if(t.fillStyle=`rgba(${B}, ${G}, ${T}, ${k})`,t.beginPath(),e.shape==="rectangle")t.rect(l,g,x,f);else if(e.shape==="circle"){const w=Math.max(Math.abs(x),Math.abs(f))/2,S=l+x/2,Y=g+f/2;t.arc(S,Y,w,0,Math.PI*2)}else e.shape==="triangle"&&(t.moveTo(l+x/2,g),t.lineTo(l,g+f),t.lineTo(l+x,g+f),t.closePath());t.fill()}if(s==="dashed"||s==="dotted"){if(e.shape==="rectangle"){const b=[{x:l,y:g},{x:l+x,y:g},{x:l+x,y:g+f},{x:l,y:g+f}];we(t,b,s,i,h)}else if(e.shape==="triangle"){const b=[{x:l+x/2,y:g},{x:l,y:g+f},{x:l+x,y:g+f}];we(t,b,s,i,h)}else if(e.shape==="circle"){const b=Math.max(Math.abs(x),Math.abs(f))/2,B=l+x/2,G=g+f/2,T=2*Math.PI*b,w=Math.max(i*2.5,Math.min(i*4,T/25)),S=Math.max(i*1.5,w*.5),Y=w+S;if(T<30)t.strokeStyle=h,t.lineWidth=i,t.beginPath(),t.arc(B,G,b,0,Math.PI*2),t.stroke();else if(s==="dashed"){const I=Math.floor(T/Y);if(I===0)t.strokeStyle=h,t.lineWidth=i,t.beginPath(),t.arc(B,G,b,0,Math.PI*2),t.stroke();else{const R=(T-I*w)/I,W=(w+R)/b,V=w/b,j=w+R,Z=I*j-R,D=(T-Z)/2/b;t.strokeStyle=h,t.lineWidth=i,t.lineCap="butt";for(let A=0;A<I;A++){const H=D+A*W,_=H+V;t.beginPath(),t.arc(B,G,b,H,_),t.stroke()}}}else if(s==="dotted"){const I=i/2,X=Math.max(i*2,T/60),R=Math.max(8,Math.round(T/X)),W=2*Math.PI/R;t.fillStyle=h;for(let V=0;V<R;V++){const j=V*W,Z=B+b*Math.cos(j),N=G+b*Math.sin(j);t.beginPath(),t.arc(Z,N,I,0,Math.PI*2),t.fill()}}}}else{if(t.beginPath(),e.shape==="rectangle"){const b=e.x,B=e.y;e.width,e.height,t.rect(b,B,x,f)}else if(e.shape==="circle"){const b=e.x,B=e.y,G=e.width||50,T=e.height||30,w=G,S=T,Y=Math.max(Math.abs(w),Math.abs(S))/2,I=b+w/2,X=B+S/2;t.arc(I,X,Y,0,Math.PI*2)}else if(e.shape==="triangle"){const b=e.x,B=e.y,G=e.width||50,T=e.height||30,w=G,S=T;t.moveTo(b+w/2,B),t.lineTo(b,B+S),t.lineTo(b+w,B+S),t.closePath()}t.stroke()}}t.restore()},ke=(t,e,r=!1)=>{const p=e.size||30;t.font=`${p}px Arial`,t.textAlign="center",t.textBaseline="middle",t.fillText(e.icon,e.x,e.y),r&&(t.strokeStyle="#FFD700",t.lineWidth=3,t.strokeRect(e.x-p/2,e.y-p/2,p,p))},Be=(t,e)=>{if(t.save(),t.strokeStyle="#FFD700",t.lineWidth=2,t.setLineDash([5,5]),e.rotatedCorners&&e.rotatedCorners.length===4){t.beginPath(),t.moveTo(e.rotatedCorners[0].x,e.rotatedCorners[0].y);for(let r=1;r<e.rotatedCorners.length;r++)t.lineTo(e.rotatedCorners[r].x,e.rotatedCorners[r].y);t.closePath(),t.stroke()}else t.strokeRect(e.x,e.y,e.width,e.height);t.setLineDash([]),t.restore()},Rn=(t,e,r)=>{const p=nn(e,r),c=8;t.fillStyle="white",t.strokeStyle="#FFD700",t.lineWidth=2,Object.entries(p).forEach(([d,i])=>{t.save(),t.fillRect(i.x-c/2,i.y-c/2,c,c),t.strokeRect(i.x-c/2,i.y-c/2,c,c),t.restore()})},Xn=(t,e,r,p,c,d,i,s,u)=>{t.save(),t.strokeStyle=s,t.lineWidth=u,t.lineCap="butt",t.lineJoin="miter",t.setLineDash([]),t.beginPath(),t.moveTo(e,r),t.lineTo(p,c),t.lineTo(d,i),t.stroke(),t.restore()},Te=(t,e,r,p,c)=>{if(e.length<2)return;let d=0;const i=[];for(let o=0;o<e.length;o++){const h=e[o],l=e[(o+1)%e.length],g=l.x-h.x,m=l.y-h.y,a=Math.sqrt(g*g+m*m);i.push(a),d+=a}const s=Math.max(p*2.5,Math.min(p*4,d/25)),u=Math.max(p*1.5,s*.5),C=s+u,v=s*.7;if(r==="dotted"){const o=p/2,h=Math.max(p*2,d/60),l=Math.max(e.length*3,Math.round(d/h));t.fillStyle=c;const g=d/l;for(let m=0;m<l;m++){const a=m*g;let y=0;for(let x=0;x<e.length;x++){const f=e[x],$=e[(x+1)%e.length],k=i[x];if(y+k>=a){const B=(a-y)/k,G=f.x+($.x-f.x)*B,T=f.y+($.y-f.y)*B;t.beginPath(),t.arc(G,T,o,0,Math.PI*2),t.fill();break}y+=k}}}else if(r==="dashed"){t.strokeStyle=c,t.lineWidth=p,t.lineCap="butt";for(let o=0;o<e.length;o++){const h=e[o],l=e[o===0?e.length-1:o-1],g=e[(o+1)%e.length],m=i[o===0?e.length-1:o-1],a=i[o];if(m>0&&a>0){const y=l.x-h.x,x=l.y-h.y,f=g.x-h.x,$=g.y-h.y,k=Math.min(m,a)/3,b=Math.min(v,k),B=h.x+y/m*b,G=h.y+x/m*b,T=h.x+f/a*b,w=h.y+$/a*b;Xn(t,B,G,h.x,h.y,T,w,c,p)}}for(let o=0;o<e.length;o++){const h=e[o],l=e[(o+1)%e.length],g=i[o];if(g===0)continue;const m=l.x-h.x,a=l.y-h.y,y=m/g,x=a/g,f=i[o===0?e.length-1:o-1],$=g,k=i[(o+1)%e.length],b=Math.min(f,$)/3,B=Math.min(v,b),G=Math.min($,k)/3,T=Math.min(v,G),w=g-B-T;if(w<=s/2)continue;const S=h.x+y*B,Y=h.y+x*B,I=Math.floor(w/C);if(I===0){const N=w/2-s/2;if(N>=0){const z=S+y*N,D=Y+x*N,A=S+y*(N+s),H=Y+x*(N+s);t.beginPath(),t.moveTo(z,D),t.lineTo(A,H),t.stroke()}continue}const R=(w-I*s)/I,W=s+R,V=I*W-R,Z=(w-V)/2;t.setLineDash([s,R]),t.lineDashOffset=-Z,t.beginPath(),t.moveTo(S,Y),t.lineTo(l.x-y*T,l.y-x*T),t.stroke(),t.setLineDash([]),t.lineDashOffset=0}}},Dn=t=>{const e=M.useRef(null),r=M.useRef(null),p=M.useCallback(s=>{if(!s)return;const u=s.getContext("2d");u.clearRect(0,0,s.width,s.height),u.fillStyle="white",u.fillRect(0,0,s.width,s.height)},[]),c=M.useCallback((s,u,C,v,o,h)=>{const l=t.current;if(!l)return;p(l);const g=l.getContext("2d");let m=null,a=-1;if(C&&C.startsWith("path_")){a=parseInt(C.replace("path_",""));const f=s[a];f&&(m=r.current&&r.current.id===C?r.current:f)}s.forEach((f,$)=>{if(f.points.length<2||$===a)return;const k=r.current&&r.current.id===`path_${$}`?r.current:f;Le(g,k,!1)});const y=e.current?u.map(f=>f.id===e.current.id?e.current:f):u;let x=null;if(C&&!C.startsWith("path_")&&(x=y.find(f=>f.id===C)),y.forEach(f=>{if(f.id!==C){switch(g.save(),f.type){case"player":be(g,f,!1);break;case"ball":Se(g,f,!1);break;case"shape":$e(g,f,!1,o);break;case"figure":ke(g,f,!1);break;case"text":ve(g,f,!1);break}g.restore()}}),m){Le(g,m,!0);const f={...m,type:"path",id:C},$=pt(f,l);$&&Be(g,$)}if(x){switch(g.save(),x.type){case"player":be(g,x,!0);break;case"ball":Se(g,x,!0);break;case"shape":$e(g,x,!0,o);break;case"figure":ke(g,x,!0);break;case"text":ve(g,x,!0);break}if(g.restore(),v==="cursor"){const f=pt(x,l);f&&(Be(g,f),Rn(g,f,x))}}},[t,p]),d=M.useCallback((s,u,C)=>{if(s.length<2)return;const v=t.current;if(!v)return;const o=v.getContext("2d"),h=s;o.strokeStyle=u,o.lineWidth=C,o.lineCap="round",o.lineJoin="round",o.setLineDash([]),o.beginPath(),o.moveTo(h[h.length-2].x,h[h.length-2].y),o.lineTo(h[h.length-1].x,h[h.length-1].y),o.stroke()},[t]),i=M.useCallback((s,u,C,v,o,h=2,l="#ffffff",g=0)=>{const m=t.current;if(!m)return;const a=m.getContext("2d"),y=u.x,x=u.y,f=v.replace("#",""),$=parseInt(f.slice(0,2),16),k=parseInt(f.slice(2,4),16),b=parseInt(f.slice(4,6),16),B=`rgba(${$}, ${k}, ${b}, 1)`;a.strokeStyle=B,a.lineWidth=h,a.lineCap="butt",a.lineJoin="miter",a.setLineDash([]);const G=(T,w,S,Y)=>{const I=S-T,X=Y-w,R=Math.sqrt(I*I+X*X);if(R===0)return;const W=I/R,V=X/R,Z=Math.max(h*2.5,Math.min(h*4,R/25)),N=Math.max(h*1.5,Z*.5),z=Z+N;if(o==="dashed"){const D=Math.floor(R/z);if(D===0){const O=(R-Z)/2;if(O>=0){const et=T+W*O,Q=w+V*O,rt=T+W*(O+Z),ot=w+V*(O+Z);a.beginPath(),a.moveTo(et,Q),a.lineTo(rt,ot),a.stroke()}return}const H=(R-D*Z)/numSegments,_=Z+H,tt=D*_-H,K=(R-tt)/2;a.setLineDash([Z,H]),a.lineDashOffset=-K,a.beginPath(),a.moveTo(T,w),a.lineTo(S,Y),a.stroke(),a.setLineDash([]),a.lineDashOffset=0}else if(o==="dotted"){const D=Math.max(h*2,R/30),A=h/2,H=Math.max(2,Math.floor(R/D)+1),_=R/(H-1);a.fillStyle=B;for(let tt=0;tt<H;tt++){const J=tt*_,K=T+W*J,O=w+V*J;a.beginPath(),a.arc(K,O,A,0,Math.PI*2),a.fill()}}};if(s==="line"||s==="arrow"){if(o==="dashed"||o==="dotted"?G(y,x,C.x,C.y):(a.beginPath(),a.moveTo(y,x),a.lineTo(C.x,C.y),a.stroke()),s==="arrow"){const T=C.x-y,w=C.y-x,S=Math.atan2(w,T),Y=Math.max(h*2.5,10);a.fillStyle=B,a.beginPath(),a.moveTo(C.x,C.y),a.lineTo(C.x-Y*Math.cos(S-Math.PI/6),C.y-Y*Math.sin(S-Math.PI/6)),a.lineTo(C.x-Y*Math.cos(S+Math.PI/6),C.y-Y*Math.sin(S+Math.PI/6)),a.closePath(),a.fill()}a.fillStyle="#FFD700",a.beginPath(),a.arc(y,x,4,0,Math.PI*2),a.fill()}else{const T=C.x-y,w=C.y-x;if(g>0){const S=l.replace("#",""),Y=parseInt(S.slice(0,2),16),I=parseInt(S.slice(2,4),16),X=parseInt(S.slice(4,6),16),R=g/100;if(a.fillStyle=`rgba(${Y}, ${I}, ${X}, ${R})`,a.beginPath(),s==="rectangle")a.rect(y,x,T,w);else if(s==="circle"){const W=Math.max(Math.abs(T),Math.abs(w))/2,V=y+T/2,j=x+w/2;a.arc(V,j,W,0,Math.PI*2)}else s==="triangle"&&(a.moveTo(y+T/2,x),a.lineTo(y,x+w),a.lineTo(y+T,x+w),a.closePath());a.fill()}if(o==="dashed"||o==="dotted"){if(s==="rectangle"){const S=[{x:y,y:x},{x:y+T,y:x},{x:y+T,y:x+w},{x:y,y:x+w}];Te(a,S,o,h,B)}else if(s==="triangle"){const S=[{x:y+T/2,y:x},{x:y,y:x+w},{x:y+T,y:x+w}];Te(a,S,o,h,B)}else if(s==="circle"){const S=Math.max(Math.abs(T),Math.abs(w))/2,Y=y+T/2,I=x+w/2,X=2*Math.PI*S,R=Math.max(h*2.5,Math.min(h*4,X/25)),W=Math.max(h*1.5,R*.5),V=R+W;if(o==="dashed"){const j=Math.floor(X/V);if(j===0)a.strokeStyle=B,a.lineWidth=h,a.beginPath(),a.arc(Y,I,S,0,Math.PI*2),a.stroke();else{const N=(X-j*R)/j,z=(R+N)/S,D=R/S,A=R+N,H=j*A-N,J=(X-H)/2/S;for(let K=0;K<j;K++){const O=J+K*z,et=O+D;a.beginPath(),a.arc(Y,I,S,O,et),a.stroke()}}}else{const j=h/2,Z=Math.max(h*2,X/40),N=Math.max(8,Math.round(X/Z)),z=2*Math.PI/N;a.fillStyle=B;for(let D=0;D<N;D++){const A=D*z,H=Y+S*Math.cos(A),_=I+S*Math.sin(A);a.beginPath(),a.arc(H,_,j,0,Math.PI*2),a.fill()}}}}else{if(a.beginPath(),s==="rectangle")a.rect(y,x,T,w);else if(s==="circle"){const S=Math.max(Math.abs(T),Math.abs(w))/2,Y=y+T/2,I=x+w/2;a.arc(Y,I,S,0,Math.PI*2)}else s==="triangle"&&(a.moveTo(y+T/2,x),a.lineTo(y,x+w),a.lineTo(y+T,x+w),a.closePath());a.stroke()}}a.setLineDash([])},[t]);return{redraw:c,clearCanvas:p,drawLivePath:d,drawPreviewShape:i,tempObjectDataRef:e,tempPathDataRef:r}},Fn=()=>{const t=M.useRef(null),e=M.useRef({x:0,y:0}),r=M.useRef(null),[p,c]=M.useState("default");return{draggedObjectRef:t,dragOffsetRef:e,cursorStyle:p,setCursorStyle:c,startDrag:(o,h,l)=>{const g=pt(o,l);if(t.current=JSON.parse(JSON.stringify(o)),r.current={mouseStart:{...h},objectStart:JSON.parse(JSON.stringify(o)),cachedBounds:g||{x:0,y:0,width:0,height:0}},o.type==="path")e.current={x:h.x-g.points[0].x,y:h.y-g.points[0].y};else if(o.type==="shape"&&(o.shape==="line"||o.shape==="arrow")){const m=(o.startX+o.endX)/2,a=(o.startY+o.endY)/2;e.current={x:h.x-m,y:h.y-a}}else o.x!==void 0&&o.y!==void 0?e.current={x:h.x-o.x,y:h.y-o.y}:e.current={x:h.x-(g?g.x:0),y:h.y-(g?g.y:0)}},updateDragPosition:(o,h,l)=>{if(!t.current||!r.current)return null;const{objectStart:g,cachedBounds:m}=r.current,a=o.x-r.current.mouseStart.x,y=o.y-r.current.mouseStart.y;let x=JSON.parse(JSON.stringify(g));x.type==="path"?x.points=x.points.map(B=>({x:B.x+a,y:B.y+y})):x.type==="shape"&&(x.shape==="line"||x.shape==="arrow")?(x.startX+=a,x.endX+=a,x.startY+=y,x.endY+=y):(x.x+=a,x.y+=y);const f=m.x+m.width/2+a,$=m.y+m.height/2+y;let k=0,b=0;return f<0?k=0-f:f>h&&(k=h-f),$<0?b=0-$:$>l&&(b=l-$),(k!==0||b!==0)&&(x.type==="path"?x.points=x.points.map(B=>({x:B.x+k,y:B.y+b})):x.type==="shape"&&(x.shape==="line"||x.shape==="arrow")?(x.startX+=k,x.endX+=k,x.startY+=b,x.endY+=b):(x.x+=k,x.y+=b)),t.current=x,x},endDrag:()=>{const o=t.current;return t.current=null,r.current=null,e.current={x:0,y:0},o},updateCursor:(o,h,l,g,m,a)=>{if(g){const x=g?g.startsWith("path_")?{...l[parseInt(g.replace("path_",""))],type:"path",id:g}:h.find(f=>f.id===g):null;if(x){const f=pt(x,a);if(f){const $=ye(o.x,o.y,f,x);if($){c($.cursor);return}if(se(o.x,o.y,f)){c("move");return}}}}const y=rn(o.x,o.y,h,l,m,a);c(y?"pointer":"default")},checkForHandle:(o,h,l)=>{const g=pt(h,l);return g?ye(o.x,o.y,g,h):null},checkIfPointInSelectedBounds:(o,h,l)=>{if(!h)return!1;const g=pt(h,l);return g&&se(o.x,o.y,g)}}},It=10,Zn=8,An=70,Hn=5,_n=50,Wn=(t,e,r,p,c)=>{const d=c*Math.PI/180,i=Math.cos(d),s=Math.sin(d),u=r/2,C=p/2;return[{x:-u,y:-C},{x:u,y:-C},{x:u,y:C},{x:-u,y:C}].map(o=>({x:t+(o.x*i-o.y*s),y:e+(o.x*s+o.y*i)}))},Pt=(t,e,r,p,c)=>{const d=c*Math.PI/180,i=Math.cos(d),s=Math.sin(d),u=t-r,C=e-p;return{x:r+(u*i-C*s),y:p+(u*s+C*i)}},Vn=()=>{const t=M.useRef(null);return{resizeHandleRef:t,startResize:(c,d,i,s)=>{let u,C;d.type==="player"||d.type==="ball"?(u=(d.radius||20)*2,C=(d.radius||20)*2):d.type==="figure"?(u=d.size||30,C=d.size||30):d.type==="text"?(u=s.originalWidth||s.width,C=s.originalHeight||s.height):(u=d.width!==void 0?d.width:s.width,C=d.height!==void 0?d.height:s.height);let v,o;d.shape==="line"||d.shape==="arrow"?(v=(d.startX+d.endX)/2,o=(d.startY+d.endY)/2):d.type==="player"||d.type==="ball"||d.type==="figure"?(v=d.x,o=d.y):d.type==="text"?(v=s.centerX,o=s.centerY):(v=d.x+u/2,o=d.y+C/2);const h=d.rotation||0,l=Wn(v,o,u,C,h);let g={x:v,y:o},m={x:i.x,y:i.y};c.name==="topLeft"?(m=l[0],g=l[2]):c.name==="topRight"?(m=l[1],g=l[3]):c.name==="bottomRight"?(m=l[2],g=l[0]):c.name==="bottomLeft"?(m=l[3],g=l[1]):c.name==="top"?(m={x:(l[0].x+l[1].x)/2,y:(l[0].y+l[1].y)/2},g={x:(l[2].x+l[3].x)/2,y:(l[2].y+l[3].y)/2}):c.name==="bottom"?(m={x:(l[2].x+l[3].x)/2,y:(l[2].y+l[3].y)/2},g={x:(l[0].x+l[1].x)/2,y:(l[0].y+l[1].y)/2}):c.name==="left"?(m={x:(l[0].x+l[3].x)/2,y:(l[0].y+l[3].y)/2},g={x:(l[1].x+l[2].x)/2,y:(l[1].y+l[2].y)/2}):c.name==="right"&&(m={x:(l[1].x+l[2].x)/2,y:(l[1].y+l[2].y)/2},g={x:(l[0].x+l[3].x)/2,y:(l[0].y+l[3].y)/2});const a=m.x-i.x,y=m.y-i.y,x=m.x-g.x,f=m.y-g.y,$=x*x+f*f,k=Pt(i.x,i.y,v,o,-h),b=k.x-v,B=k.y-o;let G=0;(d.shape==="circle"||["player","ball","figure"].includes(d.type))&&(G=Math.sqrt(Math.pow(i.x-v,2)+Math.pow(i.y-o,2))),t.current={handle:c.name,object:{...d},startPos:i,anchorPoint:g,startVectorX:x,startVectorY:f,startLengthSq:$,pressOffsetX:a,pressOffsetY:y,startFontSize:d.fontSize||16,startX:d.x,startY:d.y,lineStartX:d.startX,lineStartY:d.startY,lineEndX:d.endX,lineEndY:d.endY,startCenterX:v,startCenterY:o,rotation:h,startLocalLeft:-Math.abs(u)/2,startLocalRight:Math.abs(u)/2,startLocalTop:-Math.abs(C)/2,startLocalBottom:Math.abs(C)/2,startFlippedX:u<0,startFlippedY:C<0,isHandleLeft:b<0,isHandleRight:b>0,isHandleTop:B<0,isHandleBottom:B>0,startWidth:u,startHeight:C,startDistanceFromCenter:G}},updateResize:c=>{if(!t.current)return null;const{handle:d,object:i,startFontSize:s,startCenterX:u,startCenterY:C,startDistanceFromCenter:v,rotation:o,lineStartX:h,lineStartY:l,lineEndX:g,lineEndY:m,startPos:a,startLocalLeft:y,startLocalRight:x,startLocalTop:f,startLocalBottom:$,isHandleLeft:k,isHandleRight:b,isHandleTop:B,isHandleBottom:G,startFlippedX:T,startFlippedY:w,startWidth:S,startHeight:Y,startX:I,startY:X,anchorPoint:R,startVectorX:W,startVectorY:V,startLengthSq:j,pressOffsetX:Z,pressOffsetY:N}=t.current;let z={...i};if(i.type==="text"){const D=c.x+Z,A=c.y+N,H=D-R.x,_=A-R.y,tt=H*W+_*V;let J=tt/j;if(!["topLeft","topRight","bottomLeft","bottomRight"].includes(d)){const st=Math.sqrt(j),lt=Math.sqrt(H*H+_*_),kt=tt>0?1:-1;J=lt/st*kt}const K=8;let O=s*J;O<K&&(O=K,J=K/s),J<.1&&(J=.1),z.fontSize=s*J;const et=S*J,Q=Y*J,rt=W*J,ot=V*J,yt=R.x+rt*.5,it=R.y+ot*.5;return z.x=yt-et/2,z.y=it-Q/2,z.width=et,z.height=Q,t.current.object=z,z}if(i.type==="shape"&&(i.shape==="line"||i.shape==="arrow")){const D=Pt(h,l,u,C,o),A=Pt(g,m,u,C,o);let H={...D},_={...A};["start","topLeft","left","top"].includes(d)?H={x:c.x,y:c.y}:_={x:c.x,y:c.y};const tt=(H.x+_.x)/2,J=(H.y+_.y)/2,K=Pt(H.x,H.y,tt,J,-o),O=Pt(_.x,_.y,tt,J,-o);return z.startX=K.x,z.startY=K.y,z.endX=O.x,z.endY=O.y,t.current.object=z,z}if(i.shape==="circle"||["player","ball","figure"].includes(i.type)){const D=Math.sqrt(Math.pow(c.x-u,2)+Math.pow(c.y-C,2)),A=v>0?D/v:1,H=Math.abs(S);if(i.shape==="circle"){const _=Math.max(It,H*A);z.width=_,z.height=_,z.x=u-_/2,z.y=C-_/2}else if(i.type==="player"){const _=H/2*A;z.radius=Math.max(Zn,Math.min(An,_))}else if(i.type==="ball"){const _=H/2*A;z.radius=Math.max(Hn,Math.min(_n,_))}else z.size=Math.max(10,H*A);return t.current.object=z,z}if(i.type==="shape"){const D=o*Math.PI/180,A=Math.cos(-D),H=Math.sin(-D),_=c.x-a.x,tt=c.y-a.y,J=_*A-tt*H,K=_*H+tt*A;let O=y,et=x,Q=f,rt=$;k?O+=J:b&&(et+=J),B?Q+=K:G&&(rt+=K);let ot=T,yt=w;O>et&&([O,et]=[et,O],ot=!ot),Q>rt&&([Q,rt]=[rt,Q],yt=!yt);let it=et-O,st=rt-Q;it<It&&(it=It,k?O=et-it:et=O+it),st<It&&(st=It,B?Q=rt-st:rt=Q+st);const lt=(O+et)/2,kt=(Q+rt)/2,wt=lt*Math.cos(D)-kt*Math.sin(D),gt=lt*Math.sin(D)+kt*Math.cos(D),te=u+wt,At=C+gt;let Bt=ot?-it:it,Ht=yt?-st:st;return z.width=Bt,z.height=Ht,z.x=te-Bt/2,z.y=At-Ht/2,t.current.object=z,z}return z},endResize:()=>{const c=t.current;return t.current=null,c?c.object:null}}},jn=()=>{const t=M.useRef(!1),e=M.useRef([]),r=M.useRef(null),p=M.useRef(!1);return{drawingRef:t,currentPathRef:e,shapeStartRef:r,isDrawingShapeRef:p,startDrawing:o=>{t.current=!0,e.current=[{x:o.x,y:o.y}]},continueDrawing:o=>t.current?(e.current.push({x:o.x,y:o.y}),e.current):null,endDrawing:()=>{const o=e.current;return t.current=!1,e.current=[],o.length>1?o:null},startShape:o=>{p.current=!0,r.current=o},getShapePreview:o=>!p.current||!r.current?null:{start:r.current,end:o},endShape:(o,h)=>{if(!p.current||!r.current)return null;const l=r.current;let g=null;if(h==="line"||h==="arrow")Math.sqrt(Math.pow(o.x-l.x,2)+Math.pow(o.y-l.y,2))>5&&(g={startX:l.x,startY:l.y,endX:o.x,endY:o.y});else{const m=o.x-l.x,a=o.y-l.y;Math.abs(m)>5&&Math.abs(a)>5&&(g={x:l.x,y:l.y,width:m,height:a})}return p.current=!1,r.current=null,g},cancelDrawing:()=>{t.current=!1,e.current=[],p.current=!1,r.current=null}}},Nn=L.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,On=L.div`
  border: 2px solid #ddd;
  margin-top: 10px;
  background: white;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  position: relative;
  cursor: ${t=>t.cursor};
`,qn=L.canvas`
  display: block;
  background: white;
  touch-action: none; 
`,Jn=L.textarea`
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
`,Un=({fieldSize:t,fieldType:e})=>{const r=M.useRef(null),p=M.useRef(null),c=M.useRef(null),d=M.useRef(!1),i=M.useRef(null),s=M.useRef(null),[u,C]=M.useState({width:800,height:500}),[v,o]=M.useState(!1),[h,l]=M.useState(""),[g,m]=M.useState({x:0,y:0}),a=Ct(),{activeTool:y,drawColor:x,brushSize:f,paths:$,objects:k,selectedObjectId:b,team1:B,team2:G,textFontSize:T,textColor:w,shapeBorderColor:S,shapeBorderOpacity:Y,shapeFillColor:I,shapeFillOpacity:X,shapeBorderWidth:R,shapeBorderStyle:W,shapeLineCapStart:V,shapeLineCapEnd:j}=Zt(P=>P.tacticsBoard);M.useEffect(()=>{s.current=b},[b]);const{redraw:Z,drawLivePath:N,drawPreviewShape:z,tempObjectDataRef:D,tempPathDataRef:A}=Dn(r),{cursorStyle:H,setCursorStyle:_,startDrag:tt,updateDragPosition:J,endDrag:K,updateCursor:O,checkForHandle:et,draggedObjectRef:Q,checkIfPointInSelectedBounds:rt}=Fn(),{resizeHandleRef:ot,startResize:yt,updateResize:it,endResize:st}=Vn(),{drawingRef:lt,currentPathRef:kt,shapeStartRef:wt,isDrawingShapeRef:gt,startDrawing:te,continueDrawing:At,endDrawing:Bt,startShape:Ht,endShape:le,cancelDrawing:oo}=jn(),sn=1500,ln=640,cn=1400,ee=t.width/t.height,ce=M.useCallback(()=>{var ue;const P=p.current;if(!P)return{width:800,height:500};const F=((ue=P.parentElement)==null?void 0:ue.clientWidth)||window.innerWidth,U=F/sn,E=cn*U,q=ln*U,nt=E,ht=nt/ee,ge=q,gn=ge*ee;let Lt,Et;ht<=q?(Lt=nt,Et=ht):(Lt=gn,Et=ge);const ne=F*.95;if(Lt>ne){const un=ne/Lt;Lt=ne,Et=Et*un}return{width:Math.floor(Lt),height:Math.floor(Et)}},[ee]),_t=P=>{const F=r.current;if(!F)return{x:0,y:0};let U,E;P.changedTouches&&P.changedTouches.length>0?(U=P.changedTouches[0].clientX,E=P.changedTouches[0].clientY):P.touches&&P.touches.length>0?(U=P.touches[0].clientX,E=P.touches[0].clientY):(U=P.clientX,E=P.clientY);const q=F.getBoundingClientRect(),nt=F.width/q.width,ht=F.height/q.height;return{x:(U-q.left)*nt,y:(E-q.top)*ht}},de=P=>({x:Math.max(0,Math.min(P.x,u.width)),y:Math.max(0,Math.min(P.y,u.height))}),Tt=M.useCallback(P=>{if(!Q.current&&!ot.current&&!lt.current&&!gt.current)return;P.cancelable&&P.preventDefault();const F=_t(P),U=de(F);if(ot.current){const E=it(F);E&&(E.type==="path"?A.current=E:D.current=E,Z($,k,s.current,y,x,f))}else if(Q.current){const E=J(F,u.width,u.height);E&&(E.type==="path"?A.current=E:D.current=E,Z($,k,s.current,y,x,f))}else if(lt.current){const E=At(U);E&&E.length>=2&&N(E,x,f)}else if(gt.current&&wt.current){const E=y.replace("shape_","");Z($,k,s.current,y,x,f),z(E,wt.current,U,S,W,R,I,X)}},[u,Q,ot,lt,gt,J,it,Z,At,N,z,$,k,y,x,f,wt,S,W,R,I,X]),Wt=M.useCallback(P=>{window.removeEventListener("mousemove",Tt),window.removeEventListener("mouseup",Wt),window.removeEventListener("touchmove",Tt),window.removeEventListener("touchend",Wt);const F=_t(P),U=de(F);if(lt.current){const E=Bt();E&&a(xn({points:E,color:x,brushSize:f}))}if(gt.current&&wt.current){const E=y.replace("shape_",""),q=le(U,E);if(q){const nt={type:"shape",shape:E,...q,borderColor:S,borderOpacity:Y,borderWidth:R,borderStyle:W,color:S};E==="line"||E==="arrow"?(nt.lineCapStart=V,nt.lineCapEnd=E==="arrow"?"arrow":j):(nt.fillColor=I,nt.fillOpacity=X),a(re(nt))}}if(Q.current){const E=K();if(E)if(E.type==="path"){const q=parseInt(E.id.replace("path_",""));a(xe({index:q,updates:E}))}else a($t({id:E.id,updates:E}));D.current=null,A.current=null}if(ot.current){const E=st();if(E&&D.current)if(E.type==="path"){const q=parseInt(E.id.replace("path_",""));a(xe({index:q,updates:A.current}))}else a($t({id:D.current.id,updates:D.current}));D.current=null,A.current=null}_("default")},[Tt,lt,gt,wt,Q,ot,y,Bt,le,K,st,a,x,f,S,Y,R,W,I,X,V,j,_,$,k,u]),he=P=>{if(P.button!==void 0&&P.button!==0)return;P.cancelable,window.addEventListener("mousemove",Tt),window.addEventListener("mouseup",Wt),window.addEventListener("touchmove",Tt,{passive:!1}),window.addEventListener("touchend",Wt);const F=_t(P),U=r.current;if(v){pe();return}if(y==="cursor"){const E=b?b.startsWith("path_")?{...$[parseInt(b.replace("path_",""))],type:"path",id:b}:k.find(nt=>nt.id===b):null;if(E){const nt=pt(E,U);if(nt){const ht=et(F,E,U);if(ht){yt(ht,E,F,nt),E.type==="path"?A.current={...E}:D.current={...E};return}if(rt(F,E,U)){tt(E,F,U),E.type==="path"?A.current={...E}:D.current={...E};return}}}const q=rn(F.x,F.y,k,$,f,U);q?(s.current=q.id,a(fe(q.id)),pt(q,U)&&(tt(q,F,U),q.type==="path"?A.current={...q}:D.current={...q},Z($,k,q.id,y,x,f))):(s.current=null,a(Dt()),Z($,k,null,y,x,f))}else if(y==="drawing")te(F);else if(y.startsWith("shape_"))Ht(F);else if(y.startsWith("figure_")){const E={player:"👤",goalkeeper:"🧤",coach:"🧠",referee:"⚖️",goal:"🥅",cone:"🟨"},q=y.replace("figure_","");a(re({type:"figure",figureType:q,icon:E[q],x:F.x,y:F.y,size:30}))}else if(y==="ball")a(re({type:"ball",x:F.x,y:F.y,radius:10}));else if(y==="text"){const E=`text_${Date.now()}_${Math.random()}`;o(!0),l(""),m(F),i.current=E,a(fe(E)),s.current=E}},dn=P=>{if(Q.current||ot.current||lt.current||gt.current||P.touches)return;const F=_t(P),U=r.current;y==="cursor"&&O(F,k,$,s.current,f,U)},hn=P=>{l(P.target.value),c.current&&(c.current.style.height="auto",c.current.style.height=c.current.scrollHeight+"px")},pe=()=>{const P=h.trim();P&&a(Cn({id:i.current,x:g.x,y:g.y,text:P,fontSize:T,color:w})),o(!1),l(""),i.current=null,a(Ft("cursor"))},pn=P=>{P.key==="Escape"&&(P.preventDefault(),o(!1),l(""),a(Dt()),s.current=null,a(Ft("cursor")))};return M.useEffect(()=>{const P=()=>{const F=ce();C(F)};return P(),window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[ce]),M.useEffect(()=>{const P=r.current,F=p.current;P&&F&&(P.width=u.width,P.height=u.height,P.style.width=`${u.width}px`,P.style.height=`${u.height}px`,F.style.width=`${u.width}px`,F.style.height=`${u.height}px`,d.current||(a(fn({canvasWidth:u.width,canvasHeight:u.height})),d.current=!0),Z($,k,b,y,x,f))},[u,a,Z,$,k,b,y,x,f]),M.useEffect(()=>{Z($,k,b,y,x,f)},[$,k,b,Z,y,x,f]),M.useEffect(()=>{if(u.width>0&&u.height>0){const P=k.filter(E=>E.type==="player"),F=P.filter(E=>E.team===1),U=P.filter(E=>E.team===2);(F.length!==B.count||U.length!==G.count)&&a(mn({canvasWidth:u.width,canvasHeight:u.height}))}},[B.count,G.count,u,k,a]),M.useEffect(()=>{if(v&&c.current&&r.current){const P=c.current;setTimeout(()=>{P.focus(),P.select()},0);const F=r.current,U=F.getBoundingClientRect(),E=F.width/U.width,q=F.height/U.height,nt=g.x/E,ht=g.y/q;P.style.left=`${nt}px`,P.style.top=`${ht}px`,P.style.fontSize=`${T/q}px`,P.style.color=w,P.style.width="auto",P.style.height="auto"}},[v,g,w,T]),M.useEffect(()=>{const P=F=>{F.key==="Escape"&&!v&&(a(Dt()),s.current=null)};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[b,v,a]),M.useEffect(()=>{a(Dt()),s.current=null},[y,a]),n.jsx(Nn,{children:n.jsxs(On,{ref:p,cursor:H,children:[n.jsx(qn,{ref:r,onMouseDown:he,onTouchStart:he,onMouseMove:dn}),v&&n.jsx(Jn,{ref:c,value:h,onChange:hn,onBlur:pe,onKeyDown:pn,placeholder:"Введіть текст",rows:1})]})})},Kn=t=>M.createElement("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32",xmlSpace:"preserve",...t},M.createElement("path",{className:"st0",d:"M20,29h-8c-2.2,0-4-1.8-4-4V7c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v18C24,27.2,22.2,29,20,29z"}),M.createElement("circle",{className:"st0",cx:16,cy:16,r:4}),M.createElement("line",{className:"st0",x1:8,y1:16,x2:24,y2:16}),M.createElement("rect",{x:13,y:3,className:"st0",width:6,height:4}),M.createElement("rect",{x:13,y:25,className:"st0",width:6,height:4})),Qn=t=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{d:"M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),tr=t=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{d:"M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"})),er=t=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("circle",{cx:12,cy:12,r:9,strokeWidth:2}),M.createElement("path",{d:"M18 18L6 6",strokeWidth:2})),on=t=>M.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},M.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fillRule:"evenodd"},M.createElement("g",{id:"Arrow",transform:"translate(-528.000000, 0.000000)",fillRule:"nonzero"},M.createElement("g",{id:"forward_2_line",transform:"translate(528.000000, 0.000000)"},M.createElement("path",{d:"M17.954,11.6767 C16.6468,9.47493 14.2448,8 11.5,8 C7.35786,8 4,11.3579 4,15.5 C4,16.0523 3.55228,16.5 3,16.5 C2.44772,16.5 2,16.0523 2,15.5 C2,10.2533 6.25329,6 11.5,6 C14.6814,6 17.4961,7.56337 19.22,9.96279 L19.757,6.91751 C19.8529,6.37361 20.3715,6.01044 20.9154,6.10635 C21.4593,6.20225 21.8225,6.72091 21.7266,7.2648 L20.6847,13.1736 C20.6386,13.4348 20.4907,13.667 20.2735,13.8192 C19.9896,14.0179 19.6122,14.0542 19.2977,13.9445 L13.6174,12.9429 C13.0735,12.847 12.7103,12.3284 12.8062,11.7845 C12.9021,11.2406 13.4208,10.8774 13.9647,10.9733 L17.954,11.6767 Z",id:"\\u8DEF\\u5F84"}))))),nr=t=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.93417 2C7.95604 2 7.97799 2 8 2L16.0658 2C16.9523 1.99995 17.7161 1.99991 18.3278 2.08215C18.9833 2.17028 19.6117 2.36902 20.1213 2.87868C20.631 3.38835 20.8297 4.0167 20.9179 4.67221C21.0001 5.28388 21.0001 6.0477 21 6.9342L21 7.95C21 8.50229 20.5523 8.95 20 8.95C19.4477 8.95 19 8.50229 19 7.95V7.00001C19 6.02893 18.9979 5.40122 18.9357 4.93871C18.8774 4.50497 18.7832 4.36902 18.7071 4.2929C18.631 4.21677 18.495 4.12263 18.0613 4.06431C17.5988 4.00213 16.9711 4 16 4H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V4H8C7.02893 4 6.40122 4.00213 5.93871 4.06431C5.50497 4.12263 5.36902 4.21677 5.2929 4.2929C5.21677 4.36902 5.12263 4.50497 5.06431 4.93871C5.00213 5.40122 5 6.02893 5 7.00001V7.95C5 8.50229 4.55229 8.95 4 8.95C3.44772 8.95 3 8.50229 3 7.95V7.00001C3 6.97799 3 6.95604 3 6.93418C2.99995 6.04769 2.99991 5.28387 3.08215 4.67221C3.17028 4.0167 3.36902 3.38835 3.87868 2.87868C4.38835 2.36902 5.0167 2.17028 5.67221 2.08215C6.28387 1.99991 7.04769 1.99995 7.93417 2Z"}),M.createElement("path",{d:"M7 21H17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),an=t=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.51192 4.43057C6.82641 4.161 7.29989 4.19743 7.56946 4.51192L13.5695 11.5119C13.8102 11.7928 13.8102 12.2072 13.5695 12.4881L7.56946 19.4881C7.29989 19.8026 6.82641 19.839 6.51192 19.5695C6.19743 19.2999 6.161 18.8264 6.43057 18.5119L12.0122 12L6.43057 5.48811C6.161 5.17361 6.19743 4.70014 6.51192 4.43057ZM10.5121 4.43068C10.8266 4.16111 11.3001 4.19753 11.5697 4.51202L17.5697 11.512C17.8104 11.7929 17.8104 12.2073 17.5697 12.4882L11.5697 19.4882C11.3001 19.8027 10.8266 19.8391 10.5121 19.5696C10.1976 19.3 10.1612 18.8265 10.4308 18.512L16.0124 12.0001L10.4308 5.48821C10.1612 5.17372 10.1976 4.70024 10.5121 4.43068Z"})),rr=t=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("rect",{x:3,y:5,width:18,height:14,rx:2,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),or=t=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ar=t=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.0001 5.94363L4.76627 18H19.2339L12.0001 5.94363ZM10.7138 4.20006C11.2964 3.22905 12.7037 3.22905 13.2863 4.20006L21.4032 17.7282C22.0031 18.728 21.2829 20 20.117 20H3.88318C2.71724 20 1.99706 18.728 2.59694 17.7282L10.7138 4.20006Z"})),ir=t=>M.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{d:"M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z"})),sr=t=>M.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{d:"M6 12H18M18 12L13 7M18 12L13 17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),lr=L.div`
  position: relative;
  display: inline-block;
`,cr=L.button`
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
`,dr=L.div`
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
`,hr=L.button`
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
`,Ee=L.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,oe=[{id:"rectangle",name:"Прямокутник",icon:n.jsx(rr,{}),style:{stroke:"currentColor",fill:"none"}},{id:"circle",name:"Коло",icon:n.jsx(or,{}),style:{stroke:"currentColor",fill:"none"}},{id:"triangle",name:"Трикутник",icon:n.jsx(ar,{}),style:{fill:"currentColor",stroke:"none"}},{id:"line",name:"Лінія",icon:n.jsx(ir,{}),style:{fill:"currentColor",stroke:"none"}},{id:"arrow",name:"Стрілка",icon:n.jsx(sr,{}),style:{stroke:"currentColor",fill:"none"}}],pr=({activeTool:t,onSelectShape:e})=>{const[r,p]=M.useState(!1),[c,d]=M.useState({top:0,left:0}),i=M.useRef(null),s=M.useRef(null),u=t.startsWith("shape_"),C=u?t.replace("shape_",""):null,v=oe.find(a=>a.id===C),o=()=>{if(s.current){const a=s.current.getBoundingClientRect();d({top:a.bottom+window.scrollY,left:a.left+window.scrollX})}p(!r)},h=a=>{e(a),p(!1)},l=a=>{i.current&&!i.current.contains(a.target)&&p(!1)};M.useEffect(()=>(document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}),[]);const g=()=>{const a=v||oe[0];return n.jsx(Ee,{children:me.cloneElement(a.icon,a.style)})},m=a=>me.cloneElement(a.icon,a.style);return n.jsxs(lr,{ref:i,children:[n.jsx(cr,{ref:s,title:"Геометричні фігури",onClick:o,active:u,children:g()}),n.jsx(dr,{isOpen:r,style:{top:c.top,left:c.left},children:oe.map(a=>n.jsx(hr,{onClick:()=>h(a),title:a.name,children:n.jsx(Ee,{children:m(a)})},a.id))})]})},gr=L.div`
  position: relative;
  display: inline-block;
`,ur=L.button`
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
`,xr=L.div`
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
`,fr=L.button`
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
`,Ie=[{id:"player",name:"Гравець",icon:"👤"},{id:"goalkeeper",name:"Воротар",icon:"🧤"},{id:"coach",name:"Тренер",icon:"🧠"},{id:"referee",name:"Суддя",icon:"⚖️"},{id:"goal",name:"Ворота",icon:"🥅"},{id:"cone",name:"Стійка",icon:"🟨"}],mr=({activeTool:t,onSelectFigure:e})=>{const[r,p]=M.useState(!1),[c,d]=M.useState({top:0,left:0}),i=M.useRef(null),s=M.useRef(null),u=t.startsWith("figure_"),C=u?t.replace("figure_",""):null,v=Ie.find(m=>m.id===C),o=()=>{if(s.current){const m=s.current.getBoundingClientRect();d({top:m.bottom+window.scrollY,left:m.left+window.scrollX})}p(!r)},h=m=>{e(m),p(!1)},l=m=>{i.current&&!i.current.contains(m.target)&&p(!1)};M.useEffect(()=>(document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}),[]);const g=()=>v?v.icon:"👤";return n.jsxs(gr,{ref:i,children:[n.jsx(ur,{ref:s,title:"Спортивні фігури",onClick:o,active:u,children:g()}),n.jsx(xr,{isOpen:r,style:{top:c.top,left:c.left},children:Ie.map(m=>n.jsx(fr,{onClick:()=>h(m),title:m.name,children:m.icon},m.id))})]})},Pe=t=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{d:"M9.19762 11.9582L9.91426 11.737L9.19762 11.9582ZM9.54558 10.8683L9.08995 10.2726L9.54558 10.8683ZM9.91896 14.2952L9.20232 14.5164L9.91896 14.2952ZM14.0579 14.2952L13.3413 14.074L14.0579 14.2952ZM14.4313 10.8683L13.9757 11.4641V11.4641L14.4313 10.8683ZM14.7793 11.9582L15.4959 12.1794L14.7793 11.9582ZM12.5948 9.46375L13.0504 8.86802L12.5948 9.46375ZM11.3821 9.46375L11.8377 10.0595L11.3821 9.46375ZM20.1847 17.75C20.5989 17.75 20.9347 17.4142 20.9347 17C20.9347 16.5858 20.5989 16.25 20.1847 16.25V17.75ZM14.7793 19.7351L14.0677 19.4982L14.7793 19.7351ZM13.4801 21.2631C13.3492 21.6561 13.5617 22.0807 13.9547 22.2116C14.3477 22.3424 14.7724 22.1299 14.9033 21.7369L13.4801 21.2631ZM3.99769 16.25C3.58348 16.25 3.24769 16.5858 3.24769 17C3.24769 17.4142 3.58348 17.75 3.99769 17.75V16.25ZM9.40314 19.7351L10.1147 19.4982L9.40314 19.7351ZM9.27917 21.7369C9.41002 22.1299 9.83469 22.3424 10.2277 22.2116C10.6207 22.0807 10.8332 21.6561 10.7024 21.2631L9.27917 21.7369ZM8.22071 17.3775L7.78185 17.9857L8.22071 17.3775ZM5.556 5.45942C5.4489 5.05928 5.03772 4.82173 4.63759 4.92882C4.23746 5.03591 3.9999 5.44709 4.10699 5.84723L5.556 5.45942ZM5.24951 7.21519L4.52501 7.40909V7.40909L5.24951 7.21519ZM3.59168 11.5885L3.17811 10.9628L3.17811 10.9628L3.59168 11.5885ZM1.62739 11.9879C1.28185 12.2163 1.18689 12.6816 1.4153 13.0271C1.64372 13.3727 2.109 13.4676 2.45454 13.2392L1.62739 11.9879ZM19.934 5.84732C20.0411 5.44719 19.8035 5.036 19.4034 4.92891C19.0033 4.82182 18.5921 5.05938 18.485 5.45951L19.934 5.84732ZM18.7915 7.21528L18.067 7.02137L18.7915 7.21528ZM20.4493 11.5886L20.0357 12.2143L20.4493 11.5886ZM21.5864 13.2393C21.932 13.4677 22.3973 13.3728 22.6257 13.0272C22.8541 12.6817 22.7591 12.2164 22.4136 11.988L21.5864 13.2393ZM16.0903 3.83623C16.4288 3.5975 16.5096 3.12956 16.2709 2.79107C16.0322 2.45257 15.5642 2.3717 15.2257 2.61044L16.0903 3.83623ZM14.3376 4.15456L14.7699 4.76746L14.3376 4.15456ZM9.66562 4.10403L9.22021 4.70744V4.70744L9.66562 4.10403ZM8.61539 2.39659C8.28213 2.15059 7.81255 2.22133 7.56656 2.55459C7.32056 2.88784 7.3913 3.35742 7.72456 3.60341L8.61539 2.39659ZM14.7793 11.3678L14.0627 11.589L14.7793 11.3678ZM9.19762 11.3678L9.91426 11.589L9.19762 11.3678ZM21.2269 12C21.2269 17.1095 17.0899 21.25 11.9885 21.25V22.75C17.92 22.75 22.7269 17.9362 22.7269 12H21.2269ZM11.9885 21.25C6.88701 21.25 2.75 17.1095 2.75 12H1.25C1.25 17.9362 6.05695 22.75 11.9885 22.75V21.25ZM2.75 12C2.75 6.89055 6.88701 2.75 11.9885 2.75V1.25C6.05695 1.25 1.25 6.06376 1.25 12H2.75ZM11.9885 2.75C17.0899 2.75 21.2269 6.89055 21.2269 12H22.7269C22.7269 6.06376 17.92 1.25 11.9885 1.25V2.75ZM12.1392 10.0595L13.9757 11.4641L14.887 10.2726L13.0504 8.86802L12.1392 10.0595ZM14.0626 11.737L13.3413 14.074L14.7746 14.5164L15.4959 12.1794L14.0626 11.737ZM13.1036 14.25H10.8733V15.75H13.1036V14.25ZM10.6356 14.074L9.91426 11.737L8.48098 12.1794L9.20232 14.5164L10.6356 14.074ZM10.0012 11.4641L11.8377 10.0595L10.9265 8.86802L9.08995 10.2726L10.0012 11.4641ZM20.1847 16.25H18.5696V17.75H20.1847V16.25ZM14.0677 19.4982L13.4801 21.2631L14.9033 21.7369L15.4909 19.972L14.0677 19.4982ZM18.5696 16.25C17.892 16.25 17.3207 16.2489 16.8555 16.302C16.3711 16.3574 15.9264 16.4781 15.5228 16.7693L16.4006 17.9857C16.5201 17.8994 16.6846 17.8313 17.0258 17.7923C17.3863 17.7511 17.8574 17.75 18.5696 17.75V16.25ZM15.4909 19.972C15.7161 19.2956 15.8662 18.8484 16.0193 18.5189C16.1643 18.2069 16.2809 18.072 16.4006 17.9857L15.5228 16.7693C15.1193 17.0605 14.8645 17.4444 14.659 17.8868C14.4615 18.3117 14.282 18.8545 14.0677 19.4982L15.4909 19.972ZM3.99769 17.75H5.61279V16.25H3.99769V17.75ZM8.69154 19.972L9.27917 21.7369L10.7024 21.2631L10.1147 19.4982L8.69154 19.972ZM5.61279 17.75C6.325 17.75 6.79611 17.7511 7.15658 17.7923C7.49784 17.8313 7.66228 17.8994 7.78185 17.9857L8.65958 16.7693C8.25598 16.4781 7.81137 16.3574 7.32692 16.302C6.86168 16.2489 6.29041 16.25 5.61279 16.25V17.75ZM10.1147 19.4982C9.90043 18.8545 9.7209 18.3117 9.52346 17.8868C9.31791 17.4445 9.06311 17.0605 8.65958 16.7693L7.78185 17.9857C7.90148 18.072 8.01815 18.2069 8.16314 18.5189C8.31624 18.8484 8.46634 19.2956 8.69154 19.972L10.1147 19.4982ZM4.10699 5.84723L4.52501 7.40909L5.97401 7.02128L5.556 5.45942L4.10699 5.84723ZM3.17811 10.9628L1.62739 11.9879L2.45454 13.2392L4.00526 12.2142L3.17811 10.9628ZM4.52501 7.40909C4.70933 8.09777 4.83021 8.55381 4.88378 8.91324C4.93452 9.25362 4.9114 9.43069 4.85896 9.56902L6.26156 10.1007C6.43795 9.63541 6.43932 9.17465 6.3674 8.69211C6.29831 8.22862 6.14941 7.67663 5.97401 7.02128L4.52501 7.40909ZM4.00526 12.2142C4.57077 11.8404 5.04807 11.5262 5.407 11.2252C5.78074 10.9119 6.08516 10.5661 6.26156 10.1007L4.85896 9.56902C4.80654 9.70729 4.70659 9.855 4.44321 10.0759C4.16501 10.3091 3.77244 10.57 3.17811 10.9628L4.00526 12.2142ZM18.485 5.45951L18.067 7.02137L19.516 7.40918L19.934 5.84732L18.485 5.45951ZM20.0357 12.2143L21.5864 13.2393L22.4136 11.988L20.8629 10.9629L20.0357 12.2143ZM18.067 7.02137C17.8916 7.67672 17.7427 8.22871 17.6736 8.6922C17.6017 9.17474 17.603 9.6355 17.7794 10.1008L19.182 9.56911C19.1296 9.43078 19.1065 9.25372 19.1572 8.91333C19.2108 8.5539 19.3316 8.09787 19.516 7.40918L18.067 7.02137ZM20.8629 10.9629C20.2685 10.5701 19.876 10.3092 19.5978 10.0759C19.3344 9.85509 19.2344 9.70739 19.182 9.56911L17.7794 10.1008C17.9558 10.5662 18.2602 10.912 18.634 11.2253C18.9929 11.5263 19.4702 11.8405 20.0357 12.2143L20.8629 10.9629ZM15.2257 2.61044L13.9054 3.54166L14.7699 4.76746L16.0903 3.83623L15.2257 2.61044ZM10.111 3.50061L8.61539 2.39659L7.72456 3.60341L9.22021 4.70744L10.111 3.50061ZM13.9054 3.54166C13.3231 3.9523 12.9373 4.22303 12.6189 4.39721C12.3174 4.56214 12.1438 4.60125 11.9966 4.59965L11.9803 6.09957C12.478 6.10495 12.9109 5.94721 13.3387 5.7132C13.7496 5.48845 14.2159 5.15817 14.7699 4.76746L13.9054 3.54166ZM9.22021 4.70744C9.76562 5.11004 10.2247 5.45033 10.6306 5.68391C11.0533 5.92712 11.4827 6.09418 11.9803 6.09957L11.9966 4.59965C11.8494 4.59806 11.6767 4.5552 11.3788 4.38379C11.0642 4.20276 10.6843 3.92375 10.111 3.50061L9.22021 4.70744ZM13.9757 11.4641C14.0179 11.4963 14.0475 11.5399 14.0627 11.589L15.4959 11.1465C15.3911 10.807 15.1828 10.4989 14.887 10.2726L13.9757 11.4641ZM14.0627 11.589C14.0773 11.6364 14.0779 11.6876 14.0626 11.737L15.4959 12.1794C15.6023 11.8349 15.5974 11.4754 15.4959 11.1465L14.0627 11.589ZM18.1938 9.14203L14.4923 10.6748L15.0662 12.0607L18.7677 10.5279L18.1938 9.14203ZM13.0504 8.86802C12.7371 8.62838 12.3624 8.50841 11.9885 8.50841V10.0084C12.0419 10.0084 12.0945 10.0253 12.1392 10.0595L13.0504 8.86802ZM11.9885 8.50841C11.6146 8.50841 11.2398 8.62838 10.9265 8.86802L11.8377 10.0595C11.8824 10.0253 11.935 10.0084 11.9885 10.0084V8.50841ZM12.7385 9.25841V5.34961H11.2385V9.25841H12.7385ZM13.3413 14.074C13.3259 14.1241 13.2962 14.166 13.2572 14.1967L14.1852 15.3752C14.4575 15.1608 14.6671 14.8646 14.7746 14.5164L13.3413 14.074ZM13.2572 14.1967C13.214 14.2308 13.1607 14.25 13.1036 14.25V15.75C13.5063 15.75 13.8846 15.6119 14.1852 15.3752L13.2572 14.1967ZM16.5291 16.887L14.2886 14.2954L13.1538 15.2765L15.3944 17.868L16.5291 16.887ZM10.8733 14.25C10.8162 14.25 10.7629 14.2308 10.7197 14.1967L9.79172 15.3752C10.0923 15.6119 10.4706 15.75 10.8733 15.75V14.25ZM10.7197 14.1967C10.6807 14.166 10.651 14.1241 10.6356 14.074L9.20232 14.5164C9.3098 14.8646 9.51943 15.1608 9.79172 15.3752L10.7197 14.1967ZM8.81059 17.8407L10.8456 15.2492L9.66584 14.3228L7.63084 16.9143L8.81059 17.8407ZM9.91426 11.737C9.89899 11.6876 9.89961 11.6364 9.91426 11.589L8.48099 11.1465C8.37949 11.4754 8.37465 11.8349 8.48098 12.1794L9.91426 11.737ZM9.91426 11.589C9.9294 11.5399 9.95905 11.4963 10.0012 11.4641L9.08995 10.2726C8.79412 10.4989 8.58579 10.807 8.48099 11.1465L9.91426 11.589ZM9.48889 10.6766L5.85153 9.14373L5.269 10.526L8.90636 12.0589L9.48889 10.6766Z"})),Cr=t=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5262 17.4999C18.4887 22.7611 11.7612 24.5637 6.49994 21.5262C1.23873 18.4886 -0.563901 11.7611 2.47367 6.49988C5.51123 1.23866 12.2387 -0.563962 17.4999 2.4736C22.7612 5.51117 24.5638 12.2387 21.5262 17.4999ZM5.84382 7.87995C5.25279 7.64272 4.74291 7.45257 4.3292 7.30543C5.59153 5.24057 7.56267 3.85898 9.74648 3.29362C9.77176 3.62621 9.82851 4.00289 9.93722 4.40861C10.3269 5.86297 11.3579 7.58777 13.75 8.96886C14.0666 9.15165 14.3765 9.31079 14.6793 9.44842C14.4757 10.219 14.1794 11.0351 13.7614 11.8848C13.3566 11.6365 12.936 11.3857 12.5 11.1339C9.85449 9.60655 7.52076 8.55305 5.84382 7.87995ZM12.7587 13.6161C12.3555 13.3682 11.9358 13.1176 11.5 12.866C8.94938 11.3934 6.70297 10.3799 5.09882 9.73602C4.44209 9.47241 3.89359 9.27099 3.47664 9.12556C2.8887 10.8629 2.86217 12.7007 3.33339 14.4015C3.63406 14.2571 3.98864 14.1179 4.39435 14.0092C5.84872 13.6195 7.85792 13.65 10.25 15.0311C10.5667 15.2139 10.8594 15.4027 11.13 15.5961C11.6875 15.0424 12.2384 14.3885 12.7587 13.6161ZM12.6204 16.9341C13.4037 17.8315 13.839 18.756 14.0628 19.5913C14.1715 19.997 14.2283 20.3736 14.2536 20.7061C15.962 20.2638 17.5403 19.3219 18.7509 17.9441C18.4164 17.6557 17.9678 17.2815 17.4112 16.8446C16.6284 16.2301 15.633 15.4925 14.4426 14.6962C13.8639 15.5605 13.2482 16.3006 12.6204 16.9341ZM9.52737 16.9296C9.43788 16.8737 9.34548 16.8182 9.25005 16.7631C7.31205 15.6442 5.84818 15.6902 4.91199 15.9411C4.58 16.03 4.30141 16.1484 4.0805 16.2639C4.53358 17.1073 5.12461 17.8846 5.84359 18.5583C5.87614 18.5513 5.90977 18.5439 5.94444 18.5361C6.44532 18.4223 7.15871 18.2112 7.97658 17.8245C8.4626 17.5947 8.98712 17.3022 9.52737 16.9296ZM7.92672 20.018C8.21347 19.909 8.51642 19.7815 8.83145 19.6326C9.54844 19.2936 10.3256 18.8442 11.1145 18.2503C11.6989 18.9202 11.9873 19.5728 12.131 20.109C12.2199 20.4409 12.2567 20.7413 12.2672 20.9903C10.8031 21.0352 9.31171 20.7231 7.92672 20.018ZM18.6461 15.2714C17.8061 14.612 16.7364 13.8204 15.4558 12.968C15.9672 11.9634 16.3317 10.9922 16.5833 10.0701C17.7521 10.2998 18.7704 10.2145 19.6057 9.99072C20.0114 9.88202 20.3659 9.74284 20.6666 9.59846C21.2688 11.7723 21.0579 14.1701 19.9008 16.2957C19.5666 16.011 19.147 15.6645 18.6461 15.2714ZM16.9702 8.10789C17.8425 8.27902 18.5519 8.20254 19.0881 8.05887C19.42 7.96992 19.6986 7.85154 19.9195 7.73607C19.2263 6.44565 18.2102 5.3101 16.907 4.46319C16.956 4.76614 16.9971 5.09234 17.0257 5.43977C17.0906 6.23015 17.09 7.1278 16.9702 8.10789ZM15.0328 7.39372C15.0854 6.73963 15.0764 6.13922 15.0324 5.60348C14.9583 4.70183 14.7845 3.97847 14.6326 3.4878C14.622 3.45374 14.6116 3.42082 14.6013 3.38905C13.6584 3.10331 12.6898 2.9801 11.7329 3.00943C11.7433 3.2585 11.7801 3.55897 11.8691 3.89097C12.1199 4.82716 12.812 6.11791 14.75 7.23681C14.8454 7.2919 14.9397 7.34416 15.0328 7.39372Z"})),yr=t=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{d:"M11.5697 12.5532L12.1617 13.0137V13.0137L11.5697 12.5532ZM11.3142 3.64586L12.0065 3.93432V3.93432L11.3142 3.64586ZM18.555 14.5045C18.8336 14.198 18.811 13.7237 18.5045 13.445C18.198 13.1664 17.7237 13.189 17.445 13.4955L18.555 14.5045ZM17.7087 14.3204L17.1538 13.8159L17.1538 13.8159L17.7087 14.3204ZM21.2426 10.7426L21.7773 10.2166L21.773 10.2123L21.2426 10.7426ZM21.4531 12.026C21.7436 12.3213 22.2184 12.3251 22.5137 12.0346C22.809 11.7442 22.8129 11.2693 22.5224 10.974L21.4531 12.026ZM5.7327 19.0428C5.31848 19.0428 4.9827 19.3786 4.9827 19.7928C4.9827 20.207 5.31848 20.5428 5.7327 20.5428V19.0428ZM3.5 15.75C3.08579 15.75 2.75 16.0858 2.75 16.5C2.75 16.9142 3.08579 17.25 3.5 17.25V15.75ZM8.19231 3.35575C8.35162 2.9734 8.17081 2.5343 7.78846 2.37498C7.40611 2.21567 6.96701 2.39648 6.80769 2.77883L8.19231 3.35575ZM6.80769 15.2885C6.96701 15.6708 7.40611 15.8516 7.78846 15.6923C8.17081 15.533 8.35162 15.0939 8.19231 14.7115L6.80769 15.2885ZM11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5C10.25 6.91421 10.5858 7.25 11 7.25V5.75ZM19.876 16.916C20.1057 17.2607 20.5714 17.3538 20.916 17.124C21.2607 16.8943 21.3538 16.4286 21.124 16.084L19.876 16.916ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75C2.75 6.89137 6.89137 2.75 12 2.75V1.25ZM12 12.75H12.0917V11.25H12V12.75ZM11.408 11.5395L10.9777 12.0928L12.1617 13.0137L12.592 12.4605L11.408 11.5395ZM11.3077 1.71154L10.6219 3.35739L12.0065 3.93432L12.6923 2.28846L11.3077 1.71154ZM17.445 13.4955L17.1538 13.8159L18.2637 14.8249L18.555 14.5045L17.445 13.4955ZM20.708 11.2686L21.4531 12.026L22.5224 10.974L21.7773 10.2167L20.708 11.2686ZM17.1538 13.8159C14.2838 16.9729 9.96086 19.0428 5.7327 19.0428V20.5428C10.4211 20.5428 15.1357 18.2657 18.2637 14.8249L17.1538 13.8159ZM10.6219 3.35739C9.39039 6.31308 9.66695 9.68222 11.364 12.3975L12.636 11.6025C11.1965 9.29929 10.9619 6.44145 12.0065 3.93432L10.6219 3.35739ZM10.9777 12.0928C9.18293 14.4003 6.42334 15.75 3.5 15.75V17.25C6.88622 17.25 10.0828 15.6866 12.1617 13.0137L10.9777 12.0928ZM6.80769 2.77883C5.13077 6.80344 5.13077 11.2638 6.80769 15.2885L8.19231 14.7115C6.66923 11.0562 6.66923 7.01114 8.19231 3.35575L6.80769 2.77883ZM11 7.25C14.6428 7.25 18.1364 8.6971 20.7123 11.273L21.773 10.2123C18.9158 7.35514 15.0406 5.75 11 5.75V7.25ZM12.0917 12.75C15.2197 12.75 18.1408 14.3133 19.876 16.916L21.124 16.084C19.1107 13.064 15.7213 11.25 12.0917 11.25V12.75Z"})),wr=t=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.9386 4.73542C13.3511 4.69785 13.716 5.0018 13.7535 5.4143C13.8024 5.95058 13.893 6.53361 14.045 7.14711C14.1447 7.54916 13.8995 7.95586 13.4974 8.05549C13.0954 8.15512 12.6887 7.90997 12.5891 7.50791C12.4172 6.81421 12.3148 6.15558 12.2597 5.55036C12.2221 5.13785 12.5261 4.77299 12.9386 4.73542ZM5.23942 9.18054C5.47821 8.84208 5.94616 8.76129 6.28461 9.00008C6.78119 9.35043 7.30041 9.76836 7.81522 10.2641C8.1136 10.5514 8.12256 11.0262 7.83525 11.3246C7.54794 11.6229 7.07315 11.6319 6.77478 11.3446C6.31949 10.9062 5.85988 10.5362 5.41988 10.2257C5.08142 9.98694 5.00063 9.51899 5.23942 9.18054ZM13.836 8.99599C14.2094 8.81661 14.6574 8.97385 14.8368 9.3472C14.9605 9.60468 15.097 9.86417 15.2474 10.1247C15.3979 10.3852 15.5543 10.6332 15.7155 10.869C15.9491 11.2111 15.8612 11.6778 15.5192 11.9114C15.1772 12.145 14.7105 12.0572 14.4769 11.7151C14.2947 11.4485 14.118 11.1685 13.9484 10.8747C13.7788 10.5809 13.6246 10.2879 13.4848 9.99681C13.3054 9.62346 13.4627 9.17538 13.836 8.99599ZM8.48046 12.088C8.82249 11.8544 9.28917 11.9422 9.52281 12.2843C9.70496 12.5509 9.88164 12.8309 10.0513 13.1247C10.2209 13.4185 10.375 13.7115 10.5149 14.0026C10.6943 14.3759 10.537 14.824 10.1637 15.0034C9.79032 15.1828 9.34223 15.0256 9.16285 14.6522C9.03914 14.3947 8.90267 14.1352 8.75225 13.8747C8.60182 13.6142 8.44534 13.3662 8.28421 13.1304C8.05057 12.7883 8.13843 12.3217 8.48046 12.088ZM16.1644 12.6748C16.4517 12.3765 16.9265 12.3675 17.2249 12.6548C17.6802 13.0932 18.1398 13.4632 18.5798 13.7737C18.9183 14.0125 18.9991 14.4804 18.7603 14.8189C18.5215 15.1573 18.0535 15.2381 17.7151 14.9993C17.2185 14.649 16.6993 14.2311 16.1845 13.7353C15.8861 13.448 15.8771 12.9732 16.1644 12.6748ZM10.5022 15.9439C10.9043 15.8443 11.311 16.0894 11.4106 16.4915C11.5825 17.1852 11.6849 17.8438 11.74 18.4491C11.7776 18.8616 11.4736 19.2264 11.0611 19.264C10.6486 19.3016 10.2837 18.9976 10.2462 18.5851C10.1973 18.0488 10.1067 17.4658 9.95466 16.8523C9.85502 16.4502 10.1002 16.0436 10.5022 15.9439Z"}),M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2859 1.32632C11.0551 1.05591 8.71992 1.48034 6.62484 2.68993C1.4832 5.65846 -0.278462 12.2331 2.69007 17.3747C5.6586 22.5164 12.2332 24.278 17.3748 21.3095C19.4699 20.0999 21.0051 18.2898 21.8863 16.2227C23.1661 13.2206 23.0684 9.67094 21.3096 6.62471C19.5509 3.57847 16.5256 1.71902 13.2859 1.32632ZM13.7802 3.08033C13.7309 3.49161 13.3576 3.7851 12.9463 3.73585C12.5351 3.68661 12.2416 3.31329 12.2908 2.90201C12.297 2.85081 12.3032 2.8013 12.3096 2.75354C10.638 2.6958 8.93097 3.09054 7.37484 3.98897C5.81951 4.88694 4.62362 6.16839 3.83764 7.64494C3.88216 7.66328 3.92814 7.68258 3.97552 7.70286C4.35631 7.86585 4.53288 8.30668 4.36989 8.68748C4.20689 9.06827 3.76606 9.24484 3.38527 9.08184C3.33556 9.06057 3.2878 9.04062 3.24212 9.02195C2.41524 11.457 2.60225 14.2226 3.98911 16.6247C5.37596 19.0268 7.67752 20.5716 10.1998 21.073C10.2065 21.0241 10.2131 20.9728 10.2195 20.9191C10.2687 20.5078 10.6421 20.2143 11.0533 20.2636C11.4646 20.3128 11.7581 20.6861 11.7089 21.0974C11.7027 21.1486 11.6965 21.198 11.6901 21.2458C13.3618 21.3034 15.0695 20.9084 16.6248 20.0104C18.181 19.112 19.3764 17.831 20.1621 16.3545C20.1176 16.3362 20.0716 16.3168 20.0242 16.2966C19.6434 16.1336 19.4668 15.6927 19.6298 15.3119C19.7928 14.9311 20.2336 14.7546 20.6144 14.9176C20.6641 14.9388 20.7119 14.9588 20.7576 14.9775C21.5849 12.5411 21.3972 9.77639 20.0106 7.37471C18.624 4.97302 16.3236 3.42808 13.7999 2.92639C13.7932 2.97529 13.7866 3.02664 13.7802 3.08033Z"})),Mr=t=>M.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.1665 2.75836L21.2416 8.83351C21.2677 7.81177 21.2303 6.84352 21.1649 5.98862C21.0341 4.27797 19.722 2.96586 18.0114 2.83507C17.1565 2.76971 16.1882 2.7323 15.1665 2.75836ZM21.1071 10.8203L13.1797 2.89285C10.483 3.1978 7.77958 4.04236 5.91097 5.91097C4.04236 7.77958 3.1978 10.483 2.89285 13.1797L10.8203 21.1071C13.517 20.8022 16.2204 19.9576 18.089 18.089C19.9576 16.2204 20.8022 13.517 21.1071 10.8203ZM8.83351 21.2416L2.75836 15.1665C2.7323 16.1882 2.76971 17.1565 2.83507 18.0114C2.96587 19.722 4.27797 21.0341 5.98861 21.1649C6.84352 21.2303 7.81177 21.2677 8.83351 21.2416ZM13.3854 1.36321C15.1096 1.19733 16.7638 1.2353 18.1257 1.33944C20.5746 1.52667 22.4733 3.4254 22.6606 5.87426C22.7647 7.23618 22.8027 8.89045 22.6368 10.6146C22.3524 13.5707 21.4579 16.8414 19.1497 19.1497C16.8414 21.4579 13.5707 22.3524 10.6146 22.6368C8.89045 22.8027 7.23618 22.7647 5.87426 22.6606C3.4254 22.4733 1.52667 20.5746 1.33944 18.1257C1.2353 16.7638 1.19733 15.1096 1.36321 13.3854C1.6476 10.4293 2.54206 7.15857 4.85031 4.85031C7.15857 2.54206 10.4293 1.6476 13.3854 1.36321ZM11.9426 8.1601C12.2355 7.86721 12.7104 7.86721 13.0032 8.1601L13.8914 9.0482L14.7795 8.1601C15.0723 7.86721 15.5472 7.86721 15.8401 8.1601C16.133 8.45299 16.133 8.92787 15.8401 9.22076L14.952 10.1089L15.8401 10.997C16.133 11.2899 16.133 11.7647 15.8401 12.0576C15.5472 12.3505 15.0723 12.3505 14.7795 12.0576L13.8914 11.1695L13.0608 12.0001L13.9489 12.8882C14.2418 13.1811 14.2418 13.656 13.9489 13.9489C13.656 14.2418 13.1811 14.2418 12.8882 13.9489L12.0001 13.0608L11.1695 13.8914L12.0576 14.7795C12.3505 15.0723 12.3505 15.5472 12.0576 15.8401C11.7647 16.133 11.2899 16.133 10.997 15.8401L10.1089 14.952L9.22076 15.8401C8.92787 16.133 8.45299 16.133 8.1601 15.8401C7.86721 15.5472 7.86721 15.0723 8.1601 14.7795L9.0482 13.8914L8.1601 13.0032C7.86721 12.7104 7.86721 12.2355 8.1601 11.9426C8.45299 11.6497 8.92787 11.6497 9.22076 11.9426L10.1089 12.8307L10.9394 12.0001L10.0513 11.112C9.75845 10.8191 9.75845 10.3442 10.0513 10.0513C10.3442 9.75845 10.8191 9.75845 11.112 10.0513L12.0001 10.9394L12.8307 10.1089L11.9426 9.22076C11.6497 8.92787 11.6497 8.45299 11.9426 8.1601Z"})),vr=t=>M.createElement("svg",{fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 32 32","data-name":"Layer 1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("rect",{height:1,transform:"translate(20 51) rotate(180)",width:16,x:2,y:25}),M.createElement("rect",{height:1,transform:"translate(26 59) rotate(180)",width:16,x:5,y:29}),M.createElement("rect",{height:1,transform:"translate(39 -8) rotate(90)",width:19,x:14,y:15}),M.createElement("rect",{height:1,transform:"translate(21 10) rotate(90)",width:19,x:-4,y:15}),M.createElement("path",{d:"M24,25H23v2a2,2,0,0,1-2,2H20v1h1a3,3,0,0,0,3-3Z"}),M.createElement("path",{d:"M17,26h1v1a2,2,0,0,0,2,2h1v1H20a3,3,0,0,1-3-3Z"}),M.createElement("path",{d:"M2,26H3v1a2,2,0,0,0,2,2H6v1H5a3,3,0,0,1-3-3Z"}),M.createElement("rect",{height:1,width:6,x:24,y:6}),M.createElement("rect",{height:1,width:19,x:8,y:2}),M.createElement("path",{d:"M5,6H6V5A2,2,0,0,1,8,3H9V2H8A3,3,0,0,0,5,5Z"}),M.createElement("path",{d:"M23,6h1V5a2,2,0,0,1,2-2h1V2H26a3,3,0,0,0-3,3Z"}),M.createElement("path",{d:"M30,6H29V5a2,2,0,0,0-2-2H26V2h1a3,3,0,0,1,3,3Z"})),Lr=L.div`
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
`,br=L.div`
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
`,Sr=L.div`
  padding: 20px 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 2px solid ${({theme:t})=>t.mainBGColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme:t})=>t.ContainerBGColor};
`,$r=L.h2`
  margin: 0;
  font-size: 24px;
  color: ${({theme:t})=>t.textBlack};
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,kr=L.button`
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
`,Br=L.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`,Tr=L.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  @media (max-width: 768px) {
    gap: 6px;
  }
`,Er=L.button`
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
`,Ir=L.div`
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
`,Pr=L.div`
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
`,Gr=L.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
`,zr=L.div`
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
`,Yr=L.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:t})=>t.textBlack};
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,Rr=L.div`
  font-size: 13px;
  color: ${({theme:t})=>t.textGray};
  line-height: 1.5;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,Xr=L.div`
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
`,Dr=L.div`
  position: relative;
  width: ${t=>{const p=t.fieldWidth,c=t.fieldHeight,d=100/p,i=80/c,s=Math.min(d,i);return`${p*s}px`}};
  height: ${t=>{const p=t.fieldWidth,c=t.fieldHeight,d=100/p,i=80/c,s=Math.min(d,i);return`${c*s}px`}};
  background: ${({theme:t})=>t.greenMain};
  border: 2px solid ${({theme:t})=>t.darkGreen};
  border-radius: 2px;
  
  /* Гарантуємо мінімальний розмір для дуже малих полів */
  min-width: 20px;
  min-height: 20px;
`,Ge=L.div`
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
`,Fr={FOOTBALL:[{id:"football_standard",name:"Стандартне поле",width:105,height:68},{id:"football_small",name:"Мале поле",width:90,height:45},{id:"football_futsal",name:"Футзал",width:40,height:20}],BASKETBALL:[{id:"basketball_nba",name:"NBA",width:28.65,height:15.24},{id:"basketball_fiba",name:"FIBA",width:28,height:15}],VOLLEYBALL:[{id:"volleyball_indoor",name:"Закритий майданчик",width:18,height:9},{id:"volleyball_beach",name:"Пляжний майданчик",width:16,height:8}],TENNIS:[{id:"tennis_singles",name:"Одиночний розряд",width:23.77,height:8.23},{id:"tennis_doubles",name:"Парний розряд",width:23.77,height:10.97}],RUGBY:[{id:"rugby_standard",name:"Регбі (15 гравців)",width:100,height:70},{id:"rugby_sevens",name:"Регбі-7",width:94,height:68}],HANDBALL:[{id:"handball_standard",name:"Гандбол",width:40,height:20}],SHEET:[{id:"a4_portrait",name:"A4 Портрет",width:21,height:29.7},{id:"a4_landscape",name:"A4 Ландшафт",width:29.7,height:21},{id:"a3_portrait",name:"A3 Портрет",width:29.7,height:42},{id:"a3_landscape",name:"A3 Ландшафт",width:42,height:29.7},{id:"a3_landscape1",name:"A3 Ландшафт",width:600,height:29.7},{id:"a3_landscape2",name:"A3 Ландшафт",width:2,height:529.7}]},Zr=[{id:"FOOTBALL",name:"Футбол",icon:Pe},{id:"RUGBY",name:"Регбі",icon:Mr},{id:"BASKETBALL",name:"Баскетбол",icon:Cr},{id:"VOLLEYBALL",name:"Волейбол",icon:yr},{id:"TENNIS",name:"Теніс",icon:wr},{id:"HANDBALL",name:"Гандбол",icon:Pe},{id:"SHEET",name:"Аркуш",icon:vr}],Ar=({isOpen:t,onClose:e,onSelectField:r,currentFieldId:p})=>{var h;const[c,d]=M.useState("FOOTBALL"),[i,s]=M.useState(p);if(!t)return null;const u=l=>{s(l.id),r(l),setTimeout(()=>e(),300)},C=l=>{l.target===l.currentTarget&&e()},v=(l,g)=>g==="SHEET"?`${l.width}см × ${l.height}см`:`${l.width}м × ${l.height}м`,o=(l,g)=>g==="SHEET"?`${l}см`:`${l}м`;return n.jsx(Lr,{onClick:C,children:n.jsxs(br,{children:[n.jsxs(Sr,{children:[n.jsx($r,{children:"Обрати спортивне поле"}),n.jsx(kr,{onClick:e,children:n.jsx(yn,{})})]}),n.jsxs(Br,{children:[n.jsx(Tr,{children:Zr.map(l=>{const g=l.icon;return n.jsxs(Er,{active:c===l.id,onClick:()=>d(l.id),children:[n.jsx(Ir,{children:n.jsx(g,{})}),l.name]},l.id)})}),n.jsx(Pr,{children:n.jsx(Gr,{children:(h=Fr[c])==null?void 0:h.map(l=>n.jsxs(zr,{selected:i===l.id,onClick:()=>u(l),children:[n.jsx(Yr,{children:l.name}),n.jsx(Rr,{children:v(l,c)}),n.jsx(Xr,{children:n.jsxs(Dr,{fieldWidth:l.width,fieldHeight:l.height,children:[n.jsx(Ge,{className:"width",children:o(l.width,c)}),n.jsx(Ge,{className:"height",children:o(l.height,c)})]})})]},l.id))})})]})]})})},Hr=L(nr)`
  width: 80%;
  height: 80%;
  stroke: ${({theme:t})=>t.textBlack};
   fill: ${({theme:t})=>t.textBlack};
`,_r=L(an)`
  width: 100%;
  height: 100%;
   fill: ${({theme:t})=>t.black};
   rotate: 180deg;
`,Wr=L(er)`
  width: 100%;
  height: 100%;
  stroke: ${({theme:t})=>t.textBlack};
`,Vr=L(on)`
  width: 100%;
  height: 100%;
  fill: ${({theme:t})=>t.textBlack};
`,jr=L(on)`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  fill: ${({theme:t})=>t.textBlack};
`,Nr=L(Qn)`
  width: 70%;  
  height: 70%;
  stroke: ${({theme:t})=>t.textBlack};
`,Or=L(tr)`
  width: 70%;  
  height: 70%;
  fill: ${({theme:t})=>t.textBlack};
`,qr=L.div`
  width: 100%;
  background: ${({theme:t})=>t.ContainerBGColor};
  border-bottom: 2px solid ${({theme:t})=>t.gray};
  padding: 12px 16px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`,Jr=L.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`,Ur=L.div`
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
`,Kr=L.div`
  flex-shrink: 0;
  position: relative;
  z-index: 10;
`,ut=L.button`
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

`,Qr=L.button`
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
  
`,t1=L(Kn)`
  width: 60%;
  height: 60%;
  fill: none;
  stroke: ${({theme:t})=>t.textBlack};
`,jt=L.div`
  width: 1px;
  height: 20px;
  background: ${({theme:t})=>t.gray};
  margin: 0 4px;
  
  @media (max-width: 768px) {
    height: 16px;
  }
`,ze=L.div`
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
`,Ye=L.span`
  font-size: 11px;
  color: ${({theme:t})=>t.textGray};
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 9px;
  }
`,Re=L.input`
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
`,e1=L.input`
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
`,Xe=({value:t,onChange:e,...r})=>{const[p,c]=M.useState(t),d=M.useRef(null);M.useEffect(()=>{d.current||c(t)},[t]);const i=s=>{const u=s.target.value;c(u),d.current&&clearTimeout(d.current),d.current=setTimeout(()=>{e(u),d.current=null},200)};return n.jsx(e1,{type:"color",value:p,onChange:i,...r})},n1=({currentField:t,onSelectField:e,isSidebarOpen:r,onToggleSidebar:p})=>{const[c,d]=M.useState(!1),i=Ct(),{activeTool:s,team1:u,team2:C,historyIndex:v,history:o}=Zt(S=>S.tacticsBoard),h=()=>{d(!0)},l=()=>{d(!1)},g=S=>{e(S),l()},m=S=>{i(Ft(S))},a=S=>{i(Ft(`shape_${S.id}`))},y=S=>{i(Ft(`figure_${S.id}`))},x=S=>{const Y=parseInt(S.target.value)||0;i(wn(Math.max(0,Math.min(30,Y))))},f=S=>{i(Mn(S))},$=S=>{const Y=parseInt(S.target.value)||0;i(vn(Math.max(0,Math.min(30,Y))))},k=S=>{i(Ln(S))},b=()=>{i(bn())},B=()=>{i(Sn())},G=()=>{window.confirm("Ви впевнені, що хочете очистити всю дошку?")&&i($n())},T=v>0,w=v<o.length-1;return n.jsxs(n.Fragment,{children:[n.jsx(qr,{children:n.jsxs(Jr,{children:[n.jsxs(Ur,{children:[n.jsx(ut,{title:"Обрати поле",onClick:h,children:n.jsx(t1,{})}),n.jsx(jt,{}),n.jsx(ut,{title:"Курсор (виділення та переміщення)",active:s==="cursor",onClick:()=>m("cursor"),children:n.jsx(Nr,{})}),n.jsx(ut,{title:"Додати текст",active:s==="text",onClick:()=>m("text"),children:n.jsx(Hr,{})}),n.jsx(ut,{title:"Малювання",active:s==="drawing",onClick:()=>m("drawing"),children:n.jsx(Or,{})}),n.jsx(pr,{activeTool:s,onSelectShape:a}),n.jsx(mr,{activeTool:s,onSelectFigure:y}),n.jsx(jt,{}),n.jsxs(ze,{children:[n.jsx(Ye,{children:"К1:"}),n.jsx(Re,{type:"number",min:"0",max:"30",value:u.count,onChange:x,title:"Кількість гравців команди 1"}),n.jsx(Xe,{value:u.color,onChange:f,title:"Колір команди 1"})]}),n.jsxs(ze,{children:[n.jsx(Ye,{children:"К2:"}),n.jsx(Re,{type:"number",min:"0",max:"30",value:C.count,onChange:$,title:"Кількість гравців команди 2"}),n.jsx(Xe,{value:C.color,onChange:k,title:"Колір команди 2"})]}),n.jsx(jt,{}),n.jsx(ut,{title:"М'яч",active:s==="ball",onClick:()=>m("ball"),children:"⚽"}),n.jsx(jt,{}),n.jsx(ut,{title:"Назад (Undo)",onClick:b,disabled:!T,children:n.jsx(jr,{})}),n.jsx(ut,{title:"Вперед (Redo)",onClick:B,disabled:!w,children:n.jsx(Vr,{})}),n.jsx(ut,{title:"Скасувати все",onClick:G,children:n.jsx(Wr,{})})]}),n.jsx(Kr,{children:n.jsx(Qr,{title:"Відкрити панель інструментів",active:r,onClick:p,children:n.jsx(_r,{})})})]})}),n.jsx(Ar,{isOpen:c,onClose:l,onSelectField:g,currentFieldId:t.id})]})},r1=L.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,o1=L.div`
  display: grid;
  grid-template-columns: 40px 1fr 80px;
  gap: 8px;
  align-items: center;
`,a1=L.div`
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
`,i1=L.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  border: 2px solid ${({theme:t})=>t.lightGreen||"#ccc"};
  cursor: pointer;
  overflow: hidden;
`,s1=L.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,l1=L.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,c1=L.input`
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
`,d1=L.span`
  font-size: 10px;
  color: ${({theme:t})=>t.textGray||"#777"};
`,h1=L.div`
  position: relative;
`,p1=L.input`
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
`,g1=L.span`
  font-size: 10px;
  color: ${({theme:t})=>t.textGray||"#777"};
  display: block;
  text-align: center;
  margin-top: 2px;
`,De=t=>Math.max(0,Math.min(1,t/100)),u1=t=>Math.round(Math.max(0,Math.min(100,t*100))),Fe=(t,e=1)=>{if(!t)return"0, 0, 0, 1";let r=t.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const p=parseInt(r.slice(0,2),16),c=parseInt(r.slice(2,4),16),d=parseInt(r.slice(4,6),16);return`${p}, ${c}, ${d}, ${e}`},ct=({color:t,opacity:e,onColorChange:r,onOpacityChange:p,label:c})=>{const[d,i]=M.useState(t||"#000000"),[s,u]=M.useState(e!==void 0?e:100),C=M.useRef(null),v=M.useRef(null),o=M.useRef(null),h=M.useMemo(()=>{const $=De(s);return Fe(d,$)},[d,s]),[l,g]=M.useState(h),m=M.useMemo(()=>{const $=De(s);return{backgroundColor:`rgba(${Fe(d,$)})`}},[d,s]);M.useEffect(()=>{v.current||(i(t||"#000000"),u(e!==void 0?e:100))},[t,e]),M.useEffect(()=>{document.activeElement!==o.current&&g(h)},[h]);const a=$=>{const k=$.target.value;i(k),v.current&&clearTimeout(v.current),v.current=setTimeout(()=>{r&&r(k),v.current=null},150)},y=$=>{const k=$.target.value;g(k);const b=k.split(",").map(B=>parseFloat(B.trim()));if(b.length>=3&&!b.some(isNaN)){const B=Math.max(0,Math.min(255,b[0]||0)),G=Math.max(0,Math.min(255,b[1]||0)),T=Math.max(0,Math.min(255,b[2]||0)),w=b[3]!==void 0?Math.max(0,Math.min(1,b[3])):1,S=`#${((1<<24)+(B<<16)+(G<<8)+T).toString(16).slice(1)}`,Y=u1(w);i(S),u(Y),v.current&&clearTimeout(v.current),r&&r(S),p&&p(Y)}},x=$=>{let k=$.target.value,b=parseInt(k);isNaN(b)&&(b=0),b>100&&(b=100),b<0&&(b=0),u(b),p&&p(b)},f=()=>{C.current&&C.current.click()};return n.jsxs("div",{children:[c&&n.jsx(r1,{children:c}),n.jsxs(o1,{children:[n.jsxs(a1,{children:[n.jsx(i1,{style:m,onClick:f}),n.jsx(s1,{ref:C,type:"color",value:d,onChange:a})]}),n.jsxs(l1,{children:[n.jsx(c1,{ref:o,type:"text",value:l,onChange:y,placeholder:"0, 0, 0, 1"}),n.jsx(d1,{children:"RGBA"})]}),n.jsxs(h1,{children:[n.jsx(p1,{type:"number",min:"0",max:"100",value:s,onChange:x}),n.jsx(g1,{children:"Прозорість %"})]})]})]})},x1=L.div`
  position: relative;
  width: 100%;
`,f1=L.button`
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
`,m1=L.div`
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
`,C1=L.div`
  padding: 6px 8px;
  font-family: ${({$fontFamily:t})=>t||"Arial"};
  cursor: pointer;
  color: ${({theme:t})=>t.textBlack};
  background-color: ${({selected:t,theme:e})=>t?e.lightGreen:"transparent"};

  &:hover {
    background-color: ${({theme:t})=>t.greenMain};
    color: ${({theme:t})=>t.white};
  }
`,y1=L(Pn)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) rotate(${({$open:t})=>t?"180deg":"0"});
  width: 20px;
  height: 20px;
  stroke: ${({theme:t})=>t.iconColor};
  transition: transform 0.3s ease;
`,dt=({value:t,onChange:e,options:r=[],placeholder:p="Оберіть..."})=>{const[c,d]=M.useState(!1),i=M.useRef(null),s=()=>d(o=>!o),u=()=>d(!1),C=o=>{e(o),u()};M.useEffect(()=>{const o=h=>{i.current&&!i.current.contains(h.target)&&u()};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[]);const v=r.find(o=>o.value===t);return n.jsxs(x1,{ref:i,children:[n.jsxs(f1,{onClick:s,$fontFamily:v==null?void 0:v.value,children:[v?v.label:p,n.jsx(y1,{$open:c})]}),c&&n.jsx(m1,{children:r.map(o=>n.jsx(C1,{onClick:()=>C(o.value),selected:o.value===t,$fontFamily:o.value,children:o.label},o.value))})]})},w1=L.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:t})=>t.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,M1=L.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:t})=>t.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,xt=L.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Mt=L.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,v1=L.textarea`
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
`,Nt=L.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:t,min:e,max:r,theme:p})=>{const c=(t-e)/(r-e)*100;return`linear-gradient(to right, ${p.greenMain||"#4CAF50"} 0%, ${p.greenMain||"#4CAF50"} ${c}%, ${p.lightGreen||"#E8F5E9"} ${c}%, ${p.lightGreen||"#E8F5E9"} 100%)`}};
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
`,Ot=L.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  margin-left: 8px;
`,L1=L.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,ae=L.button`
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
`,b1=({selectedObject:t})=>{const e=Ct(),[r,p]=M.useState(t.text||"");M.useEffect(()=>{p(t.text||"")},[t.id,t.text]);const c=(i,s)=>{e($t({id:t.id,updates:{[i]:s}}))},d=i=>{const s=i.target.value;p(s),c("text",s)};return n.jsxs(w1,{children:[n.jsx(M1,{children:"Властивості тексту"}),n.jsxs(xt,{children:[n.jsx(Mt,{children:"Текст"}),n.jsx(v1,{value:r,onChange:d,placeholder:"Введіть текст...",$fontFamily:t.fontFamily})]}),n.jsx(xt,{children:n.jsx(ct,{color:t.color||"#000000",opacity:t.opacity||100,onColorChange:i=>c("color",i),onOpacityChange:i=>c("opacity",i),label:"Колір і прозорість"})}),n.jsxs(xt,{children:[n.jsxs(Mt,{children:["Розмір шрифту",n.jsxs(Ot,{children:[t.fontSize||16,"px"]})]}),n.jsx(Nt,{min:"8",max:"200",value:t.fontSize||16,onChange:i=>c("fontSize",Number(i.target.value))})]}),n.jsxs(xt,{children:[n.jsx(Mt,{children:"Тип шрифту"}),n.jsx(dt,{value:t.fontFamily||"Arial",onChange:i=>c("fontFamily",i),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(xt,{children:[n.jsx(Mt,{children:"Стиль тексту"}),n.jsxs(L1,{children:[n.jsx(ae,{$active:t.fontWeight==="bold",onClick:()=>c("fontWeight",t.fontWeight==="bold"?"normal":"bold"),children:n.jsx("strong",{children:"B"})}),n.jsx(ae,{$active:t.fontStyle==="italic",onClick:()=>c("fontStyle",t.fontStyle==="italic"?"normal":"italic"),children:n.jsx("em",{children:"I"})}),n.jsx(ae,{$active:t.textDecoration==="underline",onClick:()=>c("textDecoration",t.textDecoration==="underline"?"none":"underline"),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(xt,{children:[n.jsxs(Mt,{children:["Міжрядковий інтервал",n.jsx(Ot,{children:(t.lineHeight||.9).toFixed(1)})]}),n.jsx(Nt,{min:"0.5",max:"3",step:"0.1",value:t.lineHeight||.9,onChange:i=>c("lineHeight",Number(i.target.value))})]}),n.jsxs(xt,{children:[n.jsxs(Mt,{children:["Міжлітерний інтервал",n.jsxs(Ot,{children:[t.letterSpacing||0,"px"]})]}),n.jsx(Nt,{min:"-2",max:"10",step:"0.5",value:t.letterSpacing||0,onChange:i=>c("letterSpacing",Number(i.target.value))})]}),n.jsxs(xt,{children:[n.jsxs(Mt,{children:["Поворот тексту",n.jsxs(Ot,{children:[t.rotation||0,"°"]})]}),n.jsx(Nt,{min:"-180",max:"180",step:"5",value:t.rotation||0,onChange:i=>c("rotation",Number(i.target.value))})]})]})},S1=L.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:t})=>t.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,$1=L.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:t})=>t.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,bt=L.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,qt=L.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,k1=L.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:t,min:e,max:r,theme:p})=>{const c=(t-e)/(r-e)*100;return`linear-gradient(to right, ${p.greenMain} 0%, ${p.greenMain} ${c}%, ${p.lightGreen} ${c}%, ${p.lightGreen} 100%)`}};
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
`,B1=L.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  margin-left: 8px;
`,T1=L.p`
  font-size: 12px;
  color: ${({theme:t})=>t.textGray||"#777"};
  margin: 8px 0 0 0;
  font-style: italic;
`,E1=()=>{const t=Ct(),{shapeBorderColor:e,shapeBorderOpacity:r,shapeFillColor:p,shapeFillOpacity:c,shapeBorderWidth:d,shapeBorderStyle:i,shapeLineCapStart:s,shapeLineCapEnd:u,activeTool:C}=Zt(o=>o.tacticsBoard),v=C==="shape_line"||C==="shape_arrow";return n.jsxs(S1,{children:[n.jsx($1,{children:"Налаштування фігури"}),n.jsx(bt,{children:n.jsx(ct,{color:e,opacity:r,onColorChange:o=>t(Oe(o)),onOpacityChange:o=>t(qe(o)),label:v?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(bt,{children:[n.jsxs(qt,{children:[v?"Товщина лінії":"Товщина обводки",n.jsxs(B1,{children:[d,"px"]})]}),n.jsx(k1,{type:"range",min:"1",max:"20",value:d,onChange:o=>t(Je(Number(o.target.value)))})]}),n.jsxs(bt,{children:[n.jsx(qt,{children:"Тип обводки"}),n.jsx(dt,{value:i,onChange:o=>t(Ue(o)),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),v&&n.jsxs(n.Fragment,{children:[n.jsxs(bt,{children:[n.jsx(qt,{children:"Початок лінії"}),n.jsx(dt,{value:s,onChange:o=>t(Ke(o)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(bt,{children:[n.jsx(qt,{children:"Кінець лінії"}),n.jsx(dt,{value:u||(C==="shape_arrow"?"arrow":"butt"),onChange:o=>t(Qe(o)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!v&&n.jsx(bt,{children:n.jsx(ct,{color:p,opacity:c,onColorChange:o=>t(tn(o)),onOpacityChange:o=>t(en(o)),label:"Колір заливки і прозорість"})}),n.jsx(T1,{children:v?"Клікніть і потягніть, щоб намалювати лінію.":"Клікніть і потягніть, щоб намалювати фігуру."})]})},I1=L.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:t})=>t.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,P1=L.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:t})=>t.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ft=L.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,mt=L.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,Ze=L.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:t,min:e,max:r,theme:p})=>{const c=(t-e)/(r-e)*100;return`linear-gradient(to right, ${p.greenMain} 0%, ${p.greenMain} ${c}%, ${p.lightGreen} ${c}%, ${p.lightGreen} 100%)`}};
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
`,Ae=L.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  margin-left: 8px;
`,G1=L.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,ie=L.input`
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
`,Gt=8,z1=({selectedObject:t})=>{const e=Ct(),r=(i,s)=>{e($t({id:t.id,updates:{[i]:s}}))},p=(i,s)=>{let u=Number(s);u<Gt&&(u=Gt);const C=(t[i]||1)<0?-1:1;u*=C,t.shape==="circle"?e($t({id:t.id,updates:{width:u,height:u}})):r(i,u)},c=t.shape==="line"||t.shape==="arrow",d=t.shape==="circle";return n.jsxs(I1,{children:[n.jsx(P1,{children:"Властивості фігури"}),!c&&n.jsxs(ft,{children:[n.jsx(mt,{children:d?"Діаметр":"Розміри"}),d?n.jsx(ie,{type:"number",min:Gt,value:Math.abs(t.width||50),onChange:i=>p("width",i.target.value)}):n.jsxs(G1,{children:[n.jsxs("div",{children:[n.jsx(mt,{style:{fontSize:"10px",marginBottom:"4px"},children:"Ширина"}),n.jsx(ie,{type:"number",min:Gt,value:Math.abs(t.width||50),onChange:i=>p("width",i.target.value)})]}),n.jsxs("div",{children:[n.jsx(mt,{style:{fontSize:"10px",marginBottom:"4px"},children:"Висота"}),n.jsx(ie,{type:"number",min:Gt,value:Math.abs(t.height||30),onChange:i=>p("height",i.target.value)})]})]})]}),n.jsxs(ft,{children:[n.jsxs(mt,{children:["Кут повороту",n.jsxs(Ae,{children:[t.rotation||0,"º"]})]}),n.jsx(Ze,{type:"range",min:"-180",max:"180",step:"5",value:t.rotation||0,onChange:i=>r("rotation",Number(i.target.value))})]}),n.jsx(ft,{children:n.jsx(ct,{color:t.borderColor||t.color||"#000000",opacity:t.borderOpacity!==void 0?t.borderOpacity:100,onColorChange:i=>r("borderColor",i),onOpacityChange:i=>r("borderOpacity",i),label:c?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(ft,{children:[n.jsxs(mt,{children:[c?"Товщина лінії":"Товщина обводки",n.jsxs(Ae,{children:[t.borderWidth||2,"px"]})]}),n.jsx(Ze,{type:"range",min:"1",max:"20",value:t.borderWidth||2,onChange:i=>r("borderWidth",Number(i.target.value))})]}),n.jsxs(ft,{children:[n.jsx(mt,{children:"Тип обводки"}),n.jsx(dt,{value:t.borderStyle||"solid",onChange:i=>r("borderStyle",i),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),c&&n.jsxs(n.Fragment,{children:[n.jsxs(ft,{children:[n.jsx(mt,{children:"Початок лінії"}),n.jsx(dt,{value:t.lineCapStart||"butt",onChange:i=>r("lineCapStart",i),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(ft,{children:[n.jsx(mt,{children:"Кінець лінії"}),n.jsx(dt,{value:t.lineCapEnd||(t.shape==="arrow"?"arrow":"butt"),onChange:i=>r("lineCapEnd",i),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!c&&n.jsx(ft,{children:n.jsx(ct,{color:t.fillColor||"#ffffff",opacity:t.fillOpacity!==void 0?t.fillOpacity:0,onColorChange:i=>r("fillColor",i),onOpacityChange:i=>r("fillOpacity",i),label:"Колір заливки і прозорість"})})]})},Y1=L.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:t})=>t.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,R1=L.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:t})=>t.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,St=L.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Jt=L.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,X1=L.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:t,min:e,max:r,theme:p})=>{const c=(t-e)/(r-e)*100;return`linear-gradient(to right, ${p.greenMain} 0%, ${p.greenMain} ${c}%, ${p.lightGreen} ${c}%, ${p.lightGreen} 100%)`}};
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
`,D1=L.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  margin-left: 8px;
`,F1=L.p`
  font-size: 12px;
  color: ${({theme:t})=>t.textGray||"#777"};
  margin: 8px 0 0 0;
  font-style: italic;
`,Z1=()=>{const t=Ct(),{shapeBorderColor:e,shapeBorderOpacity:r,shapeFillColor:p,shapeFillOpacity:c,shapeBorderWidth:d,shapeBorderStyle:i,shapeLineCapStart:s,shapeLineCapEnd:u,activeTool:C}=Zt(o=>o.tacticsBoard),v=C==="shape_line"||C==="shape_arrow";return n.jsxs(Y1,{children:[n.jsx(R1,{children:"Налаштування фігури"}),n.jsx(St,{children:n.jsx(ct,{color:e,opacity:r,onColorChange:o=>t(Oe(o)),onOpacityChange:o=>t(qe(o)),label:v?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(St,{children:[n.jsxs(Jt,{children:[v?"Товщина лінії":"Товщина обводки",n.jsxs(D1,{children:[d,"px"]})]}),n.jsx(X1,{type:"range",min:"1",max:"20",value:d,onChange:o=>t(Je(Number(o.target.value)))})]}),n.jsxs(St,{children:[n.jsx(Jt,{children:"Тип обводки"}),n.jsx(dt,{value:i,onChange:o=>t(Ue(o)),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),v&&n.jsxs(n.Fragment,{children:[n.jsxs(St,{children:[n.jsx(Jt,{children:"Початок лінії"}),n.jsx(dt,{value:s,onChange:o=>t(Ke(o)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"perp",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(St,{children:[n.jsx(Jt,{children:"Кінець лінії"}),n.jsx(dt,{value:u||(C==="shape_arrow"?"arrow":"butt"),onChange:o=>t(Qe(o)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"perp",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!v&&n.jsx(St,{children:n.jsx(ct,{color:p,opacity:c,onColorChange:o=>t(tn(o)),onOpacityChange:o=>t(en(o)),label:"Колір заливки і прозорість"})}),n.jsx(F1,{children:v?"Клікніть і потягніть, щоб намалювати лінію.":"Клікніть і потягніть, щоб намалювати фігуру."})]})},zt=L.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:t})=>t.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,Yt=L.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:t})=>t.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,at=L.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,vt=L.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.textBlack||"#555"};
`,He=L.input`
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
`,Ut=L.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:t,min:e,max:r,theme:p})=>{const c=(t-e)/(r-e)*100;return`linear-gradient(to right, ${p.greenMain} 0%, ${p.greenMain} ${c}%, ${p.lightGreen} ${c}%, ${p.lightGreen} 100%)`}};
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
`,Kt=L.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:t})=>t.greenMain||"#4CAF50"};
  margin-left: 8px;
`,A1=L.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
  margin-top: 10px;
`,H1=L.div`
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
`,_1=L.div`
  width: 30px; 
  height: 45px;
  background: ${({$color:t})=>t};
  border: 2px solid ${({$borderColor:t})=>t}; 
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); 
`,W1=L.div`
  display: flex;
  flex-direction: row; 
  gap: 15px; 
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`,_e=L.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,We=L.input.attrs({type:"color"})`
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
`,Ve=L.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:t})=>t.textGray||"#666"};
  min-width: 45px; 
`,V1=L.button`
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
`,j1=L.button`
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
`,N1=L.span`
  font-size: 10px;
  color: ${({theme:t,$over:e})=>e?t.red:t.textGray};
  margin-top: 4px;
  display: block;
`,je=8,Ne=50,Qt=100,Rt=3,O1=({selectedObject:t})=>{const e=Ct(),r=(w,S)=>{e($t({id:t.id,updates:{[w]:S}}))},p=w=>{let S=Number(w);S=Math.max(je,Math.min(Ne,S)),r("radius",S)},c=w=>{const S=Math.max(0,Math.min(99,Number(w)||0));r("number",S)},d=w=>{w.length<=Qt&&r("topText",w)},i=()=>{const w=t.cards||[];if(w.length<Rt){const S=[...w,{color:"#FFD700",cardBorderColor:"#000000"}];r("cards",S)}},s=w=>{const Y=(t.cards||[]).filter((I,X)=>X!==w);r("cards",Y)},u=(w,S)=>{const I=[...t.cards||[]];I[w]={...I[w],color:S},r("cards",I)},C=(w,S)=>{const I=[...t.cards||[]];I[w]={...I[w],cardBorderColor:S},r("cards",I)},v=t.radius||20,o=t.number!==void 0?t.number:1,h=t.topText||"",l=t.rotation||0,g=t.color||"#ff0000",m=t.colorOpacity!==void 0?t.colorOpacity:100,a=t.numberColor||"#ffffff",y=t.numberOpacity!==void 0?t.numberOpacity:100,x=t.textColor||"#000000",f=t.textOpacity!==void 0?t.textOpacity:100,$=t.textSize||Math.max(10,v*.5),k=t.borderWidth||2,b=t.borderColor||"#000000",B=t.borderOpacity!==void 0?t.borderOpacity:100,G=t.borderStyle||"solid",T=t.cards||[];return n.jsxs(n.Fragment,{children:[n.jsxs(zt,{children:[n.jsx(Yt,{children:"Розмір та позиція"}),n.jsxs(at,{children:[n.jsxs(vt,{children:["Розмір гравця (8-50px)",n.jsxs(Kt,{children:[v,"px"]})]}),n.jsx(Ut,{min:je,max:Ne,value:v,onChange:w=>p(w.target.value)})]}),n.jsxs(at,{children:[n.jsxs(vt,{children:["Кут повороту",n.jsxs(Kt,{children:[l,"º"]})]}),n.jsx(Ut,{min:"-180",max:"180",step:"5",value:l,onChange:w=>r("rotation",Number(w.target.value))})]}),n.jsx(at,{children:n.jsx(ct,{color:g,opacity:m,onColorChange:w=>r("color",w),onOpacityChange:w=>r("colorOpacity",w),label:"Колір гравця"})})]}),n.jsxs(zt,{children:[n.jsx(Yt,{children:"Номер гравця"}),n.jsxs(at,{children:[n.jsx(vt,{children:"Номер гравця (0-99)"}),n.jsx(He,{type:"number",min:"0",max:"99",value:o,onChange:w=>c(w.target.value)})]}),n.jsx(at,{children:n.jsx(ct,{color:a,opacity:y,onColorChange:w=>r("numberColor",w),onOpacityChange:w=>r("numberOpacity",w),label:"Колір номера"})})]}),n.jsxs(zt,{children:[n.jsx(Yt,{children:"Текст над гравцем"}),n.jsxs(at,{children:[n.jsx(vt,{children:"Текст"}),n.jsx(He,{type:"text",maxLength:Qt,placeholder:"Введіть текст",value:h,onChange:w=>d(w.target.value)}),n.jsxs(N1,{$over:h.length>Qt,children:[h.length,"/",Qt," символів"]})]}),h&&n.jsxs(n.Fragment,{children:[n.jsxs(at,{children:[n.jsxs(vt,{children:["Розмір тексту",n.jsxs(Kt,{children:[$,"px"]})]}),n.jsx(Ut,{min:"8",max:"40",value:$,onChange:w=>r("textSize",Number(w.target.value))})]}),n.jsx(at,{children:n.jsx(ct,{color:x,opacity:f,onColorChange:w=>r("textColor",w),onOpacityChange:w=>r("textOpacity",w),label:"Колір тексту"})})]})]}),n.jsxs(zt,{children:[n.jsx(Yt,{children:"Обводка"}),n.jsx(at,{children:n.jsx(ct,{color:b,opacity:B,onColorChange:w=>r("borderColor",w),onOpacityChange:w=>r("borderOpacity",w),label:"Колір обводки"})}),n.jsxs(at,{children:[n.jsxs(vt,{children:["Товщина обводки",n.jsxs(Kt,{children:[k,"px"]})]}),n.jsx(Ut,{min:"1",max:"10",value:k,onChange:w=>r("borderWidth",Number(w.target.value))})]}),n.jsxs(at,{children:[n.jsx(vt,{children:"Тип обводки"}),n.jsx(dt,{value:G,onChange:w=>r("borderStyle",w),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]}),n.jsxs(zt,{children:[n.jsxs(Yt,{children:["Картки (",T.length,"/",Rt,")"]}),T.length>0&&n.jsx(A1,{children:T.map((w,S)=>n.jsxs(H1,{children:[n.jsx(_1,{$color:w.color,$borderColor:w.cardBorderColor||"#000000"}),n.jsxs(W1,{children:[n.jsxs(_e,{title:"Колір заливки картки",children:[n.jsx(Ve,{children:"Заливка:"}),n.jsx(We,{value:w.color,onChange:Y=>u(S,Y.target.value)})]}),n.jsxs(_e,{title:"Колір обводки картки",children:[n.jsx(Ve,{children:"Обводка:"}),n.jsx(We,{value:w.cardBorderColor||"#000000",onChange:Y=>C(S,Y.target.value)})]})]}),n.jsx(V1,{onClick:()=>s(S),title:"Видалити картку",children:n.jsx(Gn,{})})]},S))}),n.jsx(at,{style:{marginTop:T.length>0?"15px":"0"},children:n.jsx(j1,{onClick:i,disabled:T.length>=Rt,children:T.length>=Rt?`Максимум ${Rt} картки`:"Додати картку"})})]})]})},q1=L(an)`
  width: 100%;
  height: 100%;
  fill: ${({theme:t})=>t.black};
`,J1=L.div`
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
`,U1=L.div`
  padding: 16px;
  height: calc(100% - 48px);
`,K1=L.button`
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
`,Q1=L.div`
  text-align: center;
  padding: 40px 20px;
  color: ${({theme:t})=>t.textGray||"#999"};
  font-size: 14px;
`,Xt=L.button`
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
`,to=({isOpen:t,onClose:e})=>{const r=Ct(),{activeTool:p,selectedObjectId:c,objects:d,paths:i}=Zt(v=>v.tacticsBoard),s=c?c.startsWith("path_")?{...i[parseInt(c.replace("path_",""))],type:"path",id:c}:d.find(v=>v.id===c):null,u=()=>{if(c){if(c.startsWith("path_")){const v=parseInt(c.replace("path_",""));r(kn(v))}else r(Bn(c));r(Dt())}},C=()=>{if(s)switch(s.type){case"text":return n.jsxs(n.Fragment,{children:[n.jsx(b1,{selectedObject:s}),n.jsx(Xt,{onClick:u,children:"Видалити текст"})]});case"player":return n.jsxs(n.Fragment,{children:[n.jsx(O1,{selectedObject:s}),n.jsx(Xt,{onClick:u,children:"Видалити гравця"})]});case"path":return n.jsx(Xt,{onClick:u,children:"Видалити малюнок"});case"shape":return n.jsxs(n.Fragment,{children:[n.jsx(z1,{selectedObject:s}),n.jsx(Xt,{onClick:u,children:"Видалити фігуру"})]});default:return n.jsx(Xt,{onClick:u,children:"Видалити об'єкт"})}switch(p){case"text":return n.jsx(E1,{});case"shape_rectangle":case"shape_circle":case"shape_triangle":case"shape_line":case"shape_arrow":return n.jsx(Z1,{});default:return n.jsxs(Q1,{children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎯"}),n.jsx("p",{children:"Виберіть інструмент або об'єкт"}),n.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px",fontStyle:"italic"},children:"Налаштування з'являться тут"})]})}};return n.jsxs(J1,{$isOpen:t,children:[n.jsx(K1,{title:"Закрити панель інструментів",onClick:e,children:n.jsx(q1,{})}),n.jsx(U1,{children:C()})]})},eo=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: ${({theme:t})=>t.mainBGColor};
`,no=L.div`
  background: ${({theme:t})=>t.ContainerBGColor};
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`,ro=L.div`
  width: 100%;
`,lo=({theme:t})=>{const{setTitle:e}=Tn(),[r,p]=M.useState(!1),[c,d]=M.useState({id:"football_standard",name:"Стандартне футбольне поле",width:105,height:68}),i=C=>{d(C)},s=()=>{p(!r)},u=()=>{p(!1)};return M.useEffect(()=>{e("Тактична дошка")},[e]),n.jsx(En,{store:In,children:n.jsx(eo,{children:n.jsxs(no,{children:[n.jsx(n1,{currentField:c,onSelectField:i,isSidebarOpen:r,onToggleSidebar:s}),n.jsx(ro,{children:n.jsx(Un,{fieldSize:{width:c.width,height:c.height},fieldType:c.id})}),n.jsx(to,{isOpen:r,onClose:u,children:n.jsx("div",{children:"Тут будуть інструменти"})})]})})})};export{lo as default};
