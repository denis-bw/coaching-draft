import{r as v,d as b,b as de,a as Te,_ as gn,$ as un,a0 as Se,j as n,a1 as rt,a2 as Ne,a3 as ot,a4 as Ie,a5 as he,a6 as xn,a7 as Be,W as it,S as fn,a8 as mn,a9 as Cn,aa as yn,ab as wn,ac as Mn,ad as vn,ae as bn,af as Dt,ag as Rt,ah as Zt,ai as Ft,aj as At,ak as Ht,al as Wt,am as _t,an as Ln,ao as $n,u as kn,ap as Sn,aq as Bn}from"./index-9bc50ca0.js";import{S as Tn}from"./ChevronDownicon-e12575c0.js";import{S as In}from"./DeleteIcon-26266cc3.js";const ye=(e,t,r,p,d)=>{const s=Math.cos(d),l=Math.sin(d),a=e-r,C=t-p;return{x:r+(a*s-C*l),y:p+(a*l+C*s)}},oe=(e,t)=>{if(e.type==="player"){const r=e.radius||20,d=(e.rotation||0)*Math.PI/180;let s=e.x-r,l=e.x+r,a=e.y-r,C=e.y+r;if(e.topText){const y=e.textSize||Math.max(10,r*.5),x=y,o=e.topText.length*y*.6,h=-(r+x);[{x:-o/2,y:h-x*.2},{x:o/2,y:h-x*.2},{x:-o/2,y:h},{x:o/2,y:h}].forEach(u=>{const g=u.x*Math.cos(d)-u.y*Math.sin(d),i=u.x*Math.sin(d)+u.y*Math.cos(d);s=Math.min(s,e.x+g),l=Math.max(l,e.x+g),a=Math.min(a,e.y+i),C=Math.max(C,e.y+i)})}if(e.cards&&e.cards.length>0){const y=r*.35,x=y*1.4,o=2,h=Math.PI/4,c=Math.cos(h)*r*.7,u=Math.sin(h)*r*.7,g=e.cards.length-1,i=c-g*(y+o);[{x:i-y,y:u},{x:c,y:u},{x:i-y,y:u+x},{x:c,y:u+x}].forEach(m=>{const M=m.x*Math.cos(d)-m.y*Math.sin(d),$=m.x*Math.sin(d)+m.y*Math.cos(d);s=Math.min(s,e.x+M),l=Math.max(l,e.x+M),a=Math.min(a,e.y+$),C=Math.max(C,e.y+$)})}return{x:e.x-r,y:e.y-r,width:r*2,height:r*2,centerX:e.x,centerY:e.y}}if(e.type==="ball"){const r=e.radius||10;return{x:e.x-r,y:e.y-r,width:r*2,height:r*2,centerX:e.x,centerY:e.y}}if(e.type==="shape"){if(e.shape==="line"||e.shape==="arrow"){const a=e.rotation||0;if(a!==0){const h=a*Math.PI/180,c=(e.startX+e.endX)/2,u=(e.startY+e.endY)/2,g=ye(e.startX,e.startY,c,u,h),i=ye(e.endX,e.endY,c,u,h),f=Math.min(g.x,i.x),m=Math.max(g.x,i.x),M=Math.min(g.y,i.y),$=Math.max(g.y,i.y);return{x:f,y:M,width:m-f,height:$-M,startX:g.x,startY:g.y,endX:i.x,endY:i.y,originalStartX:e.startX,originalStartY:e.startY,originalEndX:e.endX,originalEndY:e.endY,centerX:c,centerY:u,rotation:a,rotatedCorners:[g,i]}}const C=Math.min(e.startX,e.endX),y=Math.max(e.startX,e.endX),x=Math.min(e.startY,e.endY),o=Math.max(e.startY,e.endY);return{x:C,y:x,width:y-C,height:o-x,startX:e.startX,startY:e.startY,endX:e.endX,endY:e.endY,rotation:e.rotation||0}}const r=e.width||50,p=e.height||30,d=e.rotation||0;if(e.shape==="circle"){const a=Math.max(Math.abs(r),Math.abs(p)),C=e.x+r/2,y=e.y+p/2;return{x:C-a/2,y:y-a/2,width:a,height:a,centerX:C,centerY:y,radius:a/2,originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:p,rotation:d}}if(d!==0){const a=d*Math.PI/180,C=e.x+r/2,y=e.y+p/2,o=[{x:e.x,y:e.y},{x:e.x+r,y:e.y},{x:e.x+r,y:e.y+p},{x:e.x,y:e.y+p}].map(i=>ye(i.x,i.y,C,y,a));let h=o[0].x,c=o[0].x,u=o[0].y,g=o[0].y;return o.forEach(i=>{h=Math.min(h,i.x),c=Math.max(c,i.x),u=Math.min(u,i.y),g=Math.max(g,i.y)}),{x:h,y:u,width:c-h,height:g-u,centerX:C,centerY:y,originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:p,rotation:d,rotatedCorners:o}}const s=r<0?e.x+r:e.x,l=p<0?e.y+p:e.y;return{x:s,y:l,width:Math.abs(r),height:Math.abs(p),originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:p,rotation:d}}if(e.type==="figure"){const r=e.size||30;return{x:e.x-r/2,y:e.y-r/2,width:r,height:r,centerX:e.x,centerY:e.y}}if(e.type==="path"){if(!e.points||e.points.length===0)return null;let r=e.points[0].x,p=e.points[0].y,d=e.points[0].x,s=e.points[0].y;return e.points.forEach(l=>{r=Math.min(r,l.x),p=Math.min(p,l.y),d=Math.max(d,l.x),s=Math.max(s,l.y)}),{x:r,y:p,width:d-r,height:s-p,points:e.points,centerX:(r+d)/2,centerY:(p+s)/2}}if(e.type==="text"){if(t){const d=t.getContext("2d"),s=e.fontWeight||"normal",l=e.fontStyle||"normal",a=e.fontSize||16,C=e.fontFamily||"Arial";d.font=`${l} ${s} ${a}px ${C}`;const y=(e.text||"").split(`
`),x=(e.lineHeight||1.5)*a,o=e.letterSpacing||0;let h=0;y.forEach(g=>{let f=d.measureText(g).width;o!==0&&(f+=o*(g.length-1)),f>h&&(h=f)});const c=y.length*x,u=e.rotation||0;if(u!==0){const g=u*Math.PI/180,i=e.x+h/2,f=e.y+c/2,M=[{x:e.x,y:e.y},{x:e.x+h,y:e.y},{x:e.x+h,y:e.y+c},{x:e.x,y:e.y+c}].map(I=>ye(I.x,I.y,i,f,g));let $=M[0].x,B=M[0].x,k=M[0].y,T=M[0].y;return M.forEach(I=>{$=Math.min($,I.x),B=Math.max(B,I.x),k=Math.min(k,I.y),T=Math.max(T,I.y)}),{x:$,y:k,width:B-$,height:T-k,centerX:i,centerY:f,originalX:e.x,originalY:e.y,originalWidth:h,originalHeight:c,rotation:u,rotatedCorners:M}}return{x:e.x,y:e.y,width:h,height:c,centerX:e.x+h/2,centerY:e.y+c/2}}const r=e.width||100,p=e.height||20;return{x:e.x,y:e.y,width:r,height:p,centerX:e.x+r/2,centerY:e.y+p/2}}return null},at=(e,t,r,p=10,d)=>{const s=oe(r,d);if(!s)return!1;if(r.type==="path"){const l=Math.max(p,10);for(let a=0;a<r.points.length-1;a++){const C=r.points[a],y=r.points[a+1],x=y.x-C.x,o=y.y-C.y,h=Math.sqrt(x*x+o*o);if(h===0)continue;const c=Math.max(0,Math.min(1,((e-C.x)*x+(t-C.y)*o)/(h*h))),u=C.x+c*x,g=C.y+c*o;if(Math.sqrt(Math.pow(e-u,2)+Math.pow(t-g,2))<=l)return!0}return!1}if(r.type==="shape"&&(r.shape==="line"||r.shape==="arrow")){const a=s.endX-s.startX,C=s.endY-s.startY,y=Math.sqrt(a*a+C*C);if(y===0)return!1;const x=Math.max(0,Math.min(1,((e-s.startX)*a+(t-s.startY)*C)/(y*y))),o=s.startX+x*a,h=s.startY+x*C;return Math.sqrt(Math.pow(e-o,2)+Math.pow(t-h,2))<=10}if(r.type==="shape"&&r.shape==="circle"){const l=s.centerX||s.x+s.width/2,a=s.centerY||s.y+s.height/2,C=s.radius||Math.max(s.width,s.height)/2;return Math.sqrt(Math.pow(e-l,2)+Math.pow(t-a,2))<=C}if(r.type==="shape"&&s.rotation&&s.rotation!==0&&s.rotatedCorners){const l=-(s.rotation*Math.PI)/180,a=s.centerX,C=s.centerY,y=ye(e,t,a,C,l),x=s.originalX,o=s.originalY,h=s.originalWidth,c=s.originalHeight;if(r.shape==="triangle"){const u=x+h/2,g=o,i=x,f=o+c,m=x+h,M=o+c,$=(f-M)*(u-m)+(m-i)*(g-M),B=((f-M)*(y.x-m)+(m-i)*(y.y-M))/$,k=((M-g)*(y.x-m)+(u-m)*(y.y-M))/$,T=1-B-k;return B>=0&&B<=1&&k>=0&&k<=1&&T>=0&&T<=1}else if(r.shape==="rectangle"){const u=h<0?x+h:x,g=h<0?x:x+h,i=c<0?o+c:o,f=c<0?o:o+c;return y.x>=u&&y.x<=g&&y.y>=i&&y.y<=f}}if(r.type==="shape"&&r.shape==="triangle"){const l=s.originalX+s.originalWidth/2,a=s.originalY,C=s.originalX,y=s.originalY+s.originalHeight,x=s.originalX+s.originalWidth,o=s.originalY+s.originalHeight,h=(y-o)*(l-x)+(x-C)*(a-o),c=((y-o)*(e-x)+(x-C)*(t-o))/h,u=((o-a)*(e-x)+(l-x)*(t-o))/h,g=1-c-u;return c>=0&&c<=1&&u>=0&&u<=1&&g>=0&&g<=1}if(r.type==="shape"&&r.shape==="rectangle"){const l=s.originalX!==void 0?s.originalX:s.x,a=s.originalY!==void 0?s.originalY:s.y,C=s.originalWidth!==void 0?s.originalWidth:s.width,y=s.originalHeight!==void 0?s.originalHeight:s.height,x=C<0?l+C:l,o=C<0?l:l+C,h=y<0?a+y:a,c=y<0?a:a+y;return e>=x&&e<=o&&t>=h&&t<=c}if(r.type==="text"){if(s.rotation&&s.rotation!==0&&s.rotatedCorners){const l=-(s.rotation*Math.PI)/180,a=s.centerX,C=s.centerY,y=ye(e,t,a,C,l),x=s.originalX,o=s.originalY,h=s.originalWidth,c=s.originalHeight;return y.x>=x&&y.x<=x+h&&y.y>=o&&y.y<=o+c}return e>=s.x&&e<=s.x+s.width&&t>=s.y&&t<=s.y+s.height}return e>=s.x&&e<=s.x+s.width&&t>=s.y&&t<=s.y+s.height},st=(e,t,r)=>r?e>=r.x&&e<=r.x+r.width&&t>=r.y&&t<=r.y+r.height:!1,jt=(e,t)=>{if(t&&t.type==="shape"&&(t.shape==="line"||t.shape==="arrow")){const r=e.startX,p=e.startY,d=e.endX,s=e.endY;return{start:{x:r,y:p,cursor:"crosshair"},end:{x:d,y:s,cursor:"crosshair"}}}if(t&&t.type==="path")return{};if(t&&t.type==="text")return{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"},top:{x:e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.y+e.height/2,cursor:"ew-resize"}};if(t&&(t.type==="player"||t.type==="ball"||t.type==="figure"))return{top:{x:e.centerX||e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.centerX||e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.centerY||e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.centerY||e.y+e.height/2,cursor:"ew-resize"}};if(e.rotatedCorners&&e.rotatedCorners.length===4){const r=e.rotatedCorners;return{topLeft:{x:r[0].x,y:r[0].y,cursor:"nwse-resize"},topRight:{x:r[1].x,y:r[1].y,cursor:"nesw-resize"},bottomRight:{x:r[2].x,y:r[2].y,cursor:"nwse-resize"},bottomLeft:{x:r[3].x,y:r[3].y,cursor:"nesw-resize"},top:{x:(r[0].x+r[1].x)/2,y:(r[0].y+r[1].y)/2,cursor:"ns-resize"},bottom:{x:(r[2].x+r[3].x)/2,y:(r[2].y+r[3].y)/2,cursor:"ns-resize"},left:{x:(r[0].x+r[3].x)/2,y:(r[0].y+r[3].y)/2,cursor:"ew-resize"},right:{x:(r[1].x+r[2].x)/2,y:(r[1].y+r[2].y)/2,cursor:"ew-resize"}}}return{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"},top:{x:e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.y+e.height/2,cursor:"ew-resize"}}},lt=(e,t,r,p)=>{const d=jt(r,p),s=8;for(const[l,a]of Object.entries(d))if(p&&p.type==="shape"&&(p.shape==="line"||p.shape==="arrow")){if(Math.sqrt(Math.pow(e-a.x,2)+Math.pow(t-a.y,2))<=s*2)return{name:l,...a}}else if(Math.abs(e-a.x)<=s&&Math.abs(t-a.y)<=s)return{name:l,...a};return null},Vt=(e,t,r,p,d,s)=>{for(let l=r.length-1;l>=0;l--)if(at(e,t,r[l],d,s))return r[l];for(let l=p.length-1;l>=0;l--){const a={...p[l],type:"path",id:`path_${l}`};if(at(e,t,a,d,s))return a}return null},Yn=(e,t,r,p,d,s,l,a,C)=>{e.save(),e.strokeStyle=a,e.lineWidth=C,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t,r),e.lineTo(p,d),e.lineTo(s,l),e.stroke(),e.restore()},En=(e,t,r,p,d,s,l,a,C=0,y=0)=>{const x=p-t,o=d-r,h=Math.sqrt(x*x+o*o);if(h===0)return;const c=x/h,u=o/h,g=C,i=y,f=h-g-i;if(f<=0)return;const m=t+c*g,M=r+u*g;if(e.strokeStyle=a,e.lineWidth=l,e.lineCap="butt",s==="dashed"){const $=Math.max(l*3,12),B=Math.max(l*2,8),k=$+B,T=Math.max(2,Math.floor(f/k));if(T===2&&f<k*2){const G=f*.35,D=f*.3;e.setLineDash([G,D]),e.lineDashOffset=0,e.beginPath(),e.moveTo(m,M),e.lineTo(p-c*i,d-u*i),e.stroke(),e.setLineDash([]);return}const S=(f-T*$)/T,w=$+S,L=T*w-S,Y=(f-L)/2;e.setLineDash([$,S]),e.lineDashOffset=-Y,e.beginPath(),e.moveTo(m,M),e.lineTo(p-c*i,d-u*i),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}else if(s==="dotted"){const $=Math.max(l*2.5,10),B=l/2,k=Math.max(2,Math.floor(f/$)+1),T=f/(k-1);e.fillStyle=a;for(let I=0;I<k;I++){const S=I*T,w=m+c*S,L=M+u*S;e.beginPath(),e.arc(w,L,B,0,Math.PI*2),e.fill()}}else e.beginPath(),e.moveTo(m,M),e.lineTo(p-c*i,d-u*i),e.stroke()},ct=(e,t,r,p,d)=>{if(t.length<2)return;if(r==="solid"){e.strokeStyle=d,e.lineWidth=p,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let h=1;h<t.length;h++)e.lineTo(t[h].x,t[h].y);e.closePath(),e.stroke();return}let s=0;const l=[],a=t.length;for(let h=0;h<a;h++){const c=t[h],u=t[(h+1)%a],g=u.x-c.x,i=u.y-c.y,f=Math.sqrt(g*g+i*i);l.push(f),s+=f}if(s<20){e.strokeStyle=d,e.lineWidth=p,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let h=1;h<t.length;h++)e.lineTo(t[h].x,t[h].y);e.closePath(),e.stroke();return}const C=Math.max(p*2.5,Math.min(p*4,s/25)),y=Math.max(p*1.5,C*.5),x=C+y,o=C*.7;if(r==="dotted"){const h=p/2,c=Math.max(p*2,s/60);e.fillStyle=d;for(let u=0;u<a;u++){const g=t[u];e.beginPath(),e.arc(g.x,g.y,h,0,Math.PI*2),e.fill()}for(let u=0;u<a;u++){const g=t[u],i=l[u];if(i<=0)continue;const f=t[(u+1)%a].x-g.x,m=t[(u+1)%a].y-g.y,M=f/i,$=m/i,B=1,k=Math.floor(i/c)+1,T=Math.max(B,k-1),I=i/T;for(let S=1;S<T;S++){const w=S*I,L=g.x+M*w,E=g.y+$*w;e.beginPath(),e.arc(L,E,h,0,Math.PI*2),e.fill()}}}else if(r==="dashed"){e.strokeStyle=d,e.lineWidth=p,e.lineCap="butt";for(let h=0;h<a;h++){const c=t[h],u=t[h===0?a-1:h-1],g=t[(h+1)%a],i=l[h===0?a-1:h-1],f=l[h];if(i>0&&f>0){const m=u.x-c.x,M=u.y-c.y,$=g.x-c.x,B=g.y-c.y,k=Math.min(i,f)/3,T=Math.min(o,k),I=c.x+m/i*T,S=c.y+M/i*T,w=c.x+$/f*T,L=c.y+B/f*T;Yn(e,I,S,c.x,c.y,w,L,d,p)}}for(let h=0;h<a;h++){const c=t[h],u=t[(h+1)%a],g=l[h];if(g===0)continue;const i=u.x-c.x,f=u.y-c.y,m=i/g,M=f/g,$=l[h===0?a-1:h-1],B=g,k=l[(h+1)%a],T=Math.min($,B)/3,I=Math.min(o,T),S=Math.min(B,k)/3,w=Math.min(o,S),L=g-I-w;if(L<=C/2)continue;const E=c.x+m*I,Y=c.y+M*I,G=Math.floor(L/x);if(G===0){const Z=L/2-C/2;if(Z>=0){const H=E+m*Z,N=Y+M*Z,O=E+m*(Z+C),U=Y+M*(Z+C);e.beginPath(),e.moveTo(H,N),e.lineTo(O,U),e.stroke()}continue}const W=(L-G*C)/G,F=C+W,A=G*F-W,j=(L-A)/2;e.setLineDash([C,W]),e.lineDashOffset=-j,e.beginPath(),e.moveTo(E,Y),e.lineTo(u.x-m*w,u.y-M*w),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}}},ht=(e,t,r,p,d,s,l,a,C)=>{if(d==="butt")return 0;const y=l.replace("#",""),x=parseInt(y.slice(0,2),16),o=parseInt(y.slice(2,4),16),h=parseInt(y.slice(4,6),16);e.fillStyle=`rgba(${x}, ${o}, ${h}, ${a})`,e.strokeStyle=`rgba(${x}, ${o}, ${h}, ${a})`,e.save(),e.translate(t,r),e.rotate(p);let c=0;if(d==="round"){const u=Math.max(C*.75,4);e.beginPath(),e.arc(0,0,u,0,Math.PI*2),e.fill(),c=0}else d==="arrow"?(e.beginPath(),e.moveTo(0,0),e.lineTo(-s,-s*.5),e.lineTo(-s,s*.5),e.closePath(),e.fill(),c=s):d==="circle"?(e.beginPath(),e.arc(0,0,s*.4,0,Math.PI*2),e.fill(),c=s*.2):d==="bar"&&(e.lineWidth=C,e.lineCap="butt",e.beginPath(),e.moveTo(0,-s*.6),e.lineTo(0,s*.6),e.stroke(),c=0);return e.restore(),c},dt=(e,t,r=!1)=>{if(e.save(),t.rotation){const f=t.x,m=t.y;e.translate(f,m),e.rotate(t.rotation*Math.PI/180),e.translate(-f,-m)}const p=t.fontWeight||"normal",d=t.fontStyle||"normal",s=t.fontSize||16,l=t.fontFamily||"Arial";e.font=`${d} ${p} ${s}px ${l}`,e.textAlign="left",e.textBaseline="top";const a=t.opacity!==void 0?t.opacity/100:1,y=(t.color||"#000000").replace("#",""),x=parseInt(y.slice(0,2),16),o=parseInt(y.slice(2,4),16),h=parseInt(y.slice(4,6),16);e.fillStyle=`rgba(${x}, ${o}, ${h}, ${a})`;const c=(t.text||"").split(`
`),u=(t.lineHeight||1.5)*s,g=t.letterSpacing||0;let i=0;if(c.forEach((f,m)=>{const M=t.y+m*u;if(g!==0){let $=t.x;for(let k=0;k<f.length;k++){const T=f[k];e.fillText(T,$,M);const I=e.measureText(T).width;$+=I+g}const B=e.measureText(f).width+g*(f.length-1);B>i&&(i=B)}else{e.fillText(f,t.x,M);const $=e.measureText(f).width;$>i&&(i=$)}if(t.textDecoration==="underline"){const $=g!==0?e.measureText(f).width+g*(f.length-1):e.measureText(f).width;e.beginPath(),e.moveTo(t.x,M+s),e.lineTo(t.x+$,M+s),e.strokeStyle=e.fillStyle,e.lineWidth=Math.max(1,s/16),e.stroke()}}),r){const f=c.length*u;e.fillStyle="rgba(255, 215, 0, 0.2)",e.fillRect(t.x-2,t.y-2,i+4,f+4),e.strokeStyle="#FFD700",e.lineWidth=2,e.setLineDash([5,5]),e.strokeRect(t.x-2,t.y-2,i+4,f+4),e.setLineDash([])}return e.restore(),t},pt=(e,t,r=!1)=>{if(!(t.points.length<2)){e.strokeStyle=r?"#FFD700":t.color,e.lineWidth=t.brushSize,e.lineCap="round",e.lineJoin="round",r&&(e.shadowColor="#FFD700",e.shadowBlur=5),e.beginPath(),e.moveTo(t.points[0].x,t.points[0].y);for(let p=1;p<t.points.length;p++)e.lineTo(t.points[p].x,t.points[p].y);e.stroke(),e.shadowBlur=0}},gt=(e,t,r)=>{e.save();const p=t.x,d=t.y,s=t.radius||20,l=t.rotation||0;e.translate(p,d),e.rotate(l*Math.PI/180);const a=t.borderWidth||2,C=(t.borderOpacity!==void 0?t.borderOpacity:100)/100,y=r?"#FFD700":t.borderColor||"#000000",x=t.borderStyle||"solid",o=y.replace("#",""),h=parseInt(o.slice(0,2),16),c=parseInt(o.slice(2,4),16),u=parseInt(o.slice(4,6),16),g=(t.colorOpacity!==void 0?t.colorOpacity:100)/100,f=(t.color||"#ff0000").replace("#",""),m=parseInt(f.slice(0,2),16),M=parseInt(f.slice(2,4),16),$=parseInt(f.slice(4,6),16);if(e.beginPath(),e.arc(0,0,s,0,Math.PI*2),e.fillStyle=`rgba(${m}, ${M}, ${$}, ${g})`,e.fill(),e.strokeStyle=`rgba(${h}, ${c}, ${u}, ${C})`,e.lineWidth=a,x==="dashed"){const Y=2*Math.PI*s,G=Math.max(a*2.5,Math.min(a*4,Y/25)),D=Math.max(a*1.5,G*.5),W=G+D,F=Math.floor(Y/W);if(F<3||Y<30)e.setLineDash([]),e.beginPath(),e.arc(0,0,s,0,Math.PI*2),e.stroke();else{const j=(Y-F*G)/F,Z=(G+j)/s,H=G/s,N=G+j,O=F*N-j,te=(Y-O)/2/s;e.lineCap="butt";for(let J=0;J<F;J++){const q=te+J*Z,ne=q+H;e.beginPath(),e.arc(0,0,s,q,ne),e.stroke()}}}else if(x==="dotted"){const Y=2*Math.PI*s,G=a/2,D=Math.max(a*2,Y/60),W=Math.max(8,Math.round(Y/D)),F=2*Math.PI/W;e.fillStyle=`rgba(${h}, ${c}, ${u}, ${C})`;for(let A=0;A<W;A++){const _=A*F,j=s*Math.cos(_),Z=s*Math.sin(_);e.beginPath(),e.arc(j,Z,G,0,Math.PI*2),e.fill()}}else e.setLineDash([]),e.beginPath(),e.arc(0,0,s,0,Math.PI*2),e.stroke();e.setLineDash([]);const B=t.number!==void 0?t.number:1,k=(t.numberOpacity!==void 0?t.numberOpacity:100)/100,I=(t.numberColor||"#ffffff").replace("#",""),S=parseInt(I.slice(0,2),16),w=parseInt(I.slice(2,4),16),L=parseInt(I.slice(4,6),16),E=Math.max(12,s*.8);if(e.fillStyle=`rgba(${S}, ${w}, ${L}, ${k})`,e.font=`bold ${E}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(B.toString(),0,0),t.topText){const Y=(t.textOpacity!==void 0?t.textOpacity:100)/100,D=(t.textColor||"#000000").replace("#",""),W=parseInt(D.slice(0,2),16),F=parseInt(D.slice(2,4),16),A=parseInt(D.slice(4,6),16),_=t.textSize||Math.max(10,s*.5),Z=-(s+5);e.fillStyle=`rgba(${W}, ${F}, ${A}, ${Y})`,e.font=`${_}px Arial`,e.textAlign="center",e.textBaseline="bottom",e.fillText(t.topText,0,Z)}if(t.cards&&t.cards.length>0){const Y=s*.35,G=Y*1.4,D=4,W=Math.PI/4,F=Math.cos(W)*s*.7,A=Math.sin(W)*s*.7;t.cards.forEach((_,j)=>{const Z=_.color||(_==="yellow"?"#FFD700":"#FF0000"),H=_.cardBorderColor||"#000000",N=F-j*(Y+D);e.fillStyle=Z,e.fillRect(N-Y,A,Y,G),e.strokeStyle=H,e.lineWidth=1.5,e.setLineDash([]),e.strokeRect(N-Y,A,Y,G)})}e.restore()},ut=(e,t,r=!1)=>{const p=t.radius||10,d=r?"#FFD700":"black",s=r?3:2;e.fillStyle="white",e.strokeStyle=d,e.lineWidth=s,e.beginPath(),e.arc(t.x,t.y,p,0,Math.PI*2),e.fill(),e.stroke(),e.beginPath(),e.arc(t.x-p/3,t.y-p/3,p/3,0,Math.PI*2),e.fillStyle="black",e.fill()},xt=(e,t,r=!1,p="#000")=>{if(e.save(),t.rotation)if(t.shape==="line"||t.shape==="arrow"){const c=(t.startX+t.endX)/2,u=(t.startY+t.endY)/2;e.translate(c,u),e.rotate(t.rotation*Math.PI/180),e.translate(-c,-u)}else{const c=t.x+(t.width||50)/2,u=t.y+(t.height||30)/2;e.translate(c,u),e.rotate(t.rotation*Math.PI/180),e.translate(-c,-u)}const d=r?"#FFD700":t.borderColor||t.color||p,s=t.borderOpacity!==void 0?t.borderOpacity/100:1,l=t.borderWidth||2,a=t.borderStyle||"solid",C=d.replace("#",""),y=parseInt(C.slice(0,2),16),x=parseInt(C.slice(2,4),16),o=parseInt(C.slice(4,6),16),h=`rgba(${y}, ${x}, ${o}, ${s})`;if(e.strokeStyle=h,e.lineWidth=l,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),t.shape==="line"||t.shape==="arrow"){const c=t.endX-t.startX,u=t.endY-t.startY,g=Math.atan2(u,c),i=t.lineCapStart||"butt",f=t.lineCapEnd||(t.shape==="arrow"?"arrow":"butt"),m=Math.max(l*2.5,10);let M=0;i==="arrow"?M=m:i==="circle"?M=m*.2:(i==="round"||i==="bar")&&(M=0);let $=0;if(f==="arrow"?$=m:f==="circle"?$=m*.2:(f==="round"||f==="bar")&&($=0),a==="dashed"||a==="dotted")En(e,t.startX,t.startY,t.endX,t.endY,a,l,h,M,$);else{const B=t.startX+Math.cos(g)*M,k=t.startY+Math.sin(g)*M,T=t.endX-Math.cos(g)*$,I=t.endY-Math.sin(g)*$;e.lineCap="butt",e.beginPath(),e.moveTo(B,k),e.lineTo(T,I),e.stroke()}i!=="butt"&&ht(e,t.startX,t.startY,g+Math.PI,i,m,d,s,l),f!=="butt"&&ht(e,t.endX,t.endY,g,f,m,d,s,l)}else{const c=t.x,u=t.y,g=t.width||50,i=t.height||30,f=10,m=Math.abs(g)<f?g<0?-f:f:g,M=Math.abs(i)<f?i<0?-f:f:i,$=t.fillColor||"#ffffff",B=t.fillOpacity!==void 0?t.fillOpacity/100:0;if(B>0){const k=$.replace("#",""),T=parseInt(k.slice(0,2),16),I=parseInt(k.slice(2,4),16),S=parseInt(k.slice(4,6),16);if(e.fillStyle=`rgba(${T}, ${I}, ${S}, ${B})`,e.beginPath(),t.shape==="rectangle")e.rect(c,u,m,M);else if(t.shape==="circle"){const w=Math.max(Math.abs(m),Math.abs(M))/2,L=c+m/2,E=u+M/2;e.arc(L,E,w,0,Math.PI*2)}else t.shape==="triangle"&&(e.moveTo(c+m/2,u),e.lineTo(c,u+M),e.lineTo(c+m,u+M),e.closePath());e.fill()}if(a==="dashed"||a==="dotted"){if(t.shape==="rectangle"){const k=[{x:c,y:u},{x:c+m,y:u},{x:c+m,y:u+M},{x:c,y:u+M}];ct(e,k,a,l,h)}else if(t.shape==="triangle"){const k=[{x:c+m/2,y:u},{x:c,y:u+M},{x:c+m,y:u+M}];ct(e,k,a,l,h)}else if(t.shape==="circle"){const k=Math.max(Math.abs(m),Math.abs(M))/2,T=c+m/2,I=u+M/2,S=2*Math.PI*k,w=Math.max(l*2.5,Math.min(l*4,S/25)),L=Math.max(l*1.5,w*.5),E=w+L;if(S<30)e.strokeStyle=h,e.lineWidth=l,e.beginPath(),e.arc(T,I,k,0,Math.PI*2),e.stroke();else if(a==="dashed"){const Y=Math.floor(S/E);if(Y===0)e.strokeStyle=h,e.lineWidth=l,e.beginPath(),e.arc(T,I,k,0,Math.PI*2),e.stroke();else{const D=(S-Y*w)/Y,W=(w+D)/k,F=w/k,A=w+D,_=Y*A-D,H=(S-_)/2/k;e.strokeStyle=h,e.lineWidth=l,e.lineCap="butt";for(let N=0;N<Y;N++){const O=H+N*W,U=O+F;e.beginPath(),e.arc(T,I,k,O,U),e.stroke()}}}else if(a==="dotted"){const Y=l/2,G=Math.max(l*2,S/60),D=Math.max(8,Math.round(S/G)),W=2*Math.PI/D;e.fillStyle=h;for(let F=0;F<D;F++){const A=F*W,_=T+k*Math.cos(A),j=I+k*Math.sin(A);e.beginPath(),e.arc(_,j,Y,0,Math.PI*2),e.fill()}}}}else{if(e.beginPath(),t.shape==="rectangle"){const k=t.x,T=t.y;t.width,t.height,e.rect(k,T,m,M)}else if(t.shape==="circle"){const k=t.x,T=t.y,I=t.width||50,S=t.height||30,w=I,L=S,E=Math.max(Math.abs(w),Math.abs(L))/2,Y=k+w/2,G=T+L/2;e.arc(Y,G,E,0,Math.PI*2)}else if(t.shape==="triangle"){const k=t.x,T=t.y,I=t.width||50,S=t.height||30,w=I,L=S;e.moveTo(k+w/2,T),e.lineTo(k,T+L),e.lineTo(k+w,T+L),e.closePath()}e.stroke()}}e.restore()},ft=(e,t,r=!1)=>{const p=t.size||30;e.font=`${p}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(t.icon,t.x,t.y),r&&(e.strokeStyle="#FFD700",e.lineWidth=3,e.strokeRect(t.x-p/2,t.y-p/2,p,p))},mt=(e,t)=>{if(e.save(),e.strokeStyle="#FFD700",e.lineWidth=2,e.setLineDash([5,5]),t.rotatedCorners&&t.rotatedCorners.length===4){e.beginPath(),e.moveTo(t.rotatedCorners[0].x,t.rotatedCorners[0].y);for(let r=1;r<t.rotatedCorners.length;r++)e.lineTo(t.rotatedCorners[r].x,t.rotatedCorners[r].y);e.closePath(),e.stroke()}else e.strokeRect(t.x,t.y,t.width,t.height);e.setLineDash([]),e.restore()},Xn=(e,t,r)=>{const p=jt(t,r),d=8;e.fillStyle="white",e.strokeStyle="#FFD700",e.lineWidth=2,Object.entries(p).forEach(([s,l])=>{e.save(),e.fillRect(l.x-d/2,l.y-d/2,d,d),e.strokeRect(l.x-d/2,l.y-d/2,d,d),e.restore()})},Pn=(e,t,r,p,d,s,l,a,C)=>{e.save(),e.strokeStyle=a,e.lineWidth=C,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t,r),e.lineTo(p,d),e.lineTo(s,l),e.stroke(),e.restore()},Ct=(e,t,r,p,d)=>{if(t.length<2)return;let s=0;const l=[];for(let o=0;o<t.length;o++){const h=t[o],c=t[(o+1)%t.length],u=c.x-h.x,g=c.y-h.y,i=Math.sqrt(u*u+g*g);l.push(i),s+=i}const a=Math.max(p*2.5,Math.min(p*4,s/25)),C=Math.max(p*1.5,a*.5),y=a+C,x=a*.7;if(r==="dotted"){const o=p/2,h=Math.max(p*2,s/60),c=Math.max(t.length*3,Math.round(s/h));e.fillStyle=d;const u=s/c;for(let g=0;g<c;g++){const i=g*u;let f=0;for(let m=0;m<t.length;m++){const M=t[m],$=t[(m+1)%t.length],B=l[m];if(f+B>=i){const T=(i-f)/B,I=M.x+($.x-M.x)*T,S=M.y+($.y-M.y)*T;e.beginPath(),e.arc(I,S,o,0,Math.PI*2),e.fill();break}f+=B}}}else if(r==="dashed"){e.strokeStyle=d,e.lineWidth=p,e.lineCap="butt";for(let o=0;o<t.length;o++){const h=t[o],c=t[o===0?t.length-1:o-1],u=t[(o+1)%t.length],g=l[o===0?t.length-1:o-1],i=l[o];if(g>0&&i>0){const f=c.x-h.x,m=c.y-h.y,M=u.x-h.x,$=u.y-h.y,B=Math.min(g,i)/3,k=Math.min(x,B),T=h.x+f/g*k,I=h.y+m/g*k,S=h.x+M/i*k,w=h.y+$/i*k;Pn(e,T,I,h.x,h.y,S,w,d,p)}}for(let o=0;o<t.length;o++){const h=t[o],c=t[(o+1)%t.length],u=l[o];if(u===0)continue;const g=c.x-h.x,i=c.y-h.y,f=g/u,m=i/u,M=l[o===0?t.length-1:o-1],$=u,B=l[(o+1)%t.length],k=Math.min(M,$)/3,T=Math.min(x,k),I=Math.min($,B)/3,S=Math.min(x,I),w=u-T-S;if(w<=a/2)continue;const L=h.x+f*T,E=h.y+m*T,Y=Math.floor(w/y);if(Y===0){const j=w/2-a/2;if(j>=0){const Z=L+f*j,H=E+m*j,N=L+f*(j+a),O=E+m*(j+a);e.beginPath(),e.moveTo(Z,H),e.lineTo(N,O),e.stroke()}continue}const D=(w-Y*a)/Y,W=a+D,F=Y*W-D,_=(w-F)/2;e.setLineDash([a,D]),e.lineDashOffset=-_,e.beginPath(),e.moveTo(L,E),e.lineTo(c.x-f*S,c.y-m*S),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}}},zn=e=>{const t=v.useRef(null),r=v.useRef(null),p=v.useCallback(a=>{if(!a)return;const C=a.getContext("2d");C.clearRect(0,0,a.width,a.height),C.fillStyle="white",C.fillRect(0,0,a.width,a.height)},[]),d=v.useCallback((a,C,y,x,o,h)=>{const c=e.current;if(!c)return;p(c);const u=c.getContext("2d");let g=null,i=-1;if(y&&y.startsWith("path_")){i=parseInt(y.replace("path_",""));const M=a[i];M&&(g=r.current&&r.current.id===y?r.current:M)}a.forEach((M,$)=>{if(M.points.length<2||$===i)return;const B=r.current&&r.current.id===`path_${$}`?r.current:M;pt(u,B,!1)});const f=t.current?C.map(M=>M.id===t.current.id?t.current:M):C;let m=null;if(y&&!y.startsWith("path_")&&(m=f.find(M=>M.id===y)),f.forEach(M=>{if(M.id!==y){switch(u.save(),M.type){case"player":gt(u,M,!1);break;case"ball":ut(u,M,!1);break;case"shape":xt(u,M,!1,o);break;case"figure":ft(u,M,!1);break;case"text":dt(u,M,!1);break}u.restore()}}),g){pt(u,g,!0);const M={...g,type:"path",id:y},$=oe(M,c);$&&mt(u,$)}if(m){switch(u.save(),m.type){case"player":gt(u,m,!0);break;case"ball":ut(u,m,!0);break;case"shape":xt(u,m,!0,o);break;case"figure":ft(u,m,!0);break;case"text":dt(u,m,!0);break}if(u.restore(),x==="cursor"){const M=oe(m,c);M&&(mt(u,M),Xn(u,M,m))}}},[e,p]),s=v.useCallback((a,C,y)=>{if(a.length<2)return;const x=e.current;if(!x)return;const o=x.getContext("2d"),h=a;o.strokeStyle=C,o.lineWidth=y,o.lineCap="round",o.lineJoin="round",o.setLineDash([]),o.beginPath(),o.moveTo(h[h.length-2].x,h[h.length-2].y),o.lineTo(h[h.length-1].x,h[h.length-1].y),o.stroke()},[e]),l=v.useCallback((a,C,y,x,o,h=2,c="#ffffff",u=0)=>{const g=e.current;if(!g)return;const i=g.getContext("2d"),f=C.x,m=C.y,M=x.replace("#",""),$=parseInt(M.slice(0,2),16),B=parseInt(M.slice(2,4),16),k=parseInt(M.slice(4,6),16),T=`rgba(${$}, ${B}, ${k}, 1)`;i.strokeStyle=T,i.lineWidth=h,i.lineCap="butt",i.lineJoin="miter",i.setLineDash([]);const I=(S,w,L,E)=>{const Y=L-S,G=E-w,D=Math.sqrt(Y*Y+G*G);if(D===0)return;const W=Y/D,F=G/D,_=Math.max(h*2.5,Math.min(h*4,D/25)),j=Math.max(h*1.5,_*.5),Z=_+j;if(o==="dashed"){const H=Math.floor(D/Z);if(H===0){const q=(D-_)/2;if(q>=0){const ne=S+W*q,Ze=w+F*q,xe=S+W*(q+_),Fe=w+F*(q+_);i.beginPath(),i.moveTo(ne,Ze),i.lineTo(xe,Fe),i.stroke()}return}const O=(D-H*_)/numSegments,U=_+O,ie=H*U-O,J=(D-ie)/2;i.setLineDash([_,O]),i.lineDashOffset=-J,i.beginPath(),i.moveTo(S,w),i.lineTo(L,E),i.stroke(),i.setLineDash([]),i.lineDashOffset=0}else if(o==="dotted"){const H=Math.max(h*2,D/30),N=h/2,O=Math.max(2,Math.floor(D/H)+1),U=D/(O-1);i.fillStyle=T;for(let ie=0;ie<O;ie++){const te=ie*U,J=S+W*te,q=w+F*te;i.beginPath(),i.arc(J,q,N,0,Math.PI*2),i.fill()}}};if(a==="line"||a==="arrow"){if(o==="dashed"||o==="dotted"?I(f,m,y.x,y.y):(i.beginPath(),i.moveTo(f,m),i.lineTo(y.x,y.y),i.stroke()),a==="arrow"){const S=y.x-f,w=y.y-m,L=Math.atan2(w,S),E=Math.max(h*2.5,10);i.fillStyle=T,i.beginPath(),i.moveTo(y.x,y.y),i.lineTo(y.x-E*Math.cos(L-Math.PI/6),y.y-E*Math.sin(L-Math.PI/6)),i.lineTo(y.x-E*Math.cos(L+Math.PI/6),y.y-E*Math.sin(L+Math.PI/6)),i.closePath(),i.fill()}i.fillStyle="#FFD700",i.beginPath(),i.arc(f,m,4,0,Math.PI*2),i.fill()}else{const S=y.x-f,w=y.y-m;if(u>0){const L=c.replace("#",""),E=parseInt(L.slice(0,2),16),Y=parseInt(L.slice(2,4),16),G=parseInt(L.slice(4,6),16),D=u/100;if(i.fillStyle=`rgba(${E}, ${Y}, ${G}, ${D})`,i.beginPath(),a==="rectangle")i.rect(f,m,S,w);else if(a==="circle"){const W=Math.max(Math.abs(S),Math.abs(w))/2,F=f+S/2,A=m+w/2;i.arc(F,A,W,0,Math.PI*2)}else a==="triangle"&&(i.moveTo(f+S/2,m),i.lineTo(f,m+w),i.lineTo(f+S,m+w),i.closePath());i.fill()}if(o==="dashed"||o==="dotted"){if(a==="rectangle"){const L=[{x:f,y:m},{x:f+S,y:m},{x:f+S,y:m+w},{x:f,y:m+w}];Ct(i,L,o,h,T)}else if(a==="triangle"){const L=[{x:f+S/2,y:m},{x:f,y:m+w},{x:f+S,y:m+w}];Ct(i,L,o,h,T)}else if(a==="circle"){const L=Math.max(Math.abs(S),Math.abs(w))/2,E=f+S/2,Y=m+w/2,G=2*Math.PI*L,D=Math.max(h*2.5,Math.min(h*4,G/25)),W=Math.max(h*1.5,D*.5),F=D+W;if(o==="dashed"){const A=Math.floor(G/F);if(A===0)i.strokeStyle=T,i.lineWidth=h,i.beginPath(),i.arc(E,Y,L,0,Math.PI*2),i.stroke();else{const j=(G-A*D)/A,Z=(D+j)/L,H=D/L,N=D+j,O=A*N-j,te=(G-O)/2/L;for(let J=0;J<A;J++){const q=te+J*Z,ne=q+H;i.beginPath(),i.arc(E,Y,L,q,ne),i.stroke()}}}else{const A=h/2,_=Math.max(h*2,G/40),j=Math.max(8,Math.round(G/_)),Z=2*Math.PI/j;i.fillStyle=T;for(let H=0;H<j;H++){const N=H*Z,O=E+L*Math.cos(N),U=Y+L*Math.sin(N);i.beginPath(),i.arc(O,U,A,0,Math.PI*2),i.fill()}}}}else{if(i.beginPath(),a==="rectangle")i.rect(f,m,S,w);else if(a==="circle"){const L=Math.max(Math.abs(S),Math.abs(w))/2,E=f+S/2,Y=m+w/2;i.arc(E,Y,L,0,Math.PI*2)}else a==="triangle"&&(i.moveTo(f+S/2,m),i.lineTo(f,m+w),i.lineTo(f+S,m+w),i.closePath());i.stroke()}}i.setLineDash([])},[e]);return{redraw:d,clearCanvas:p,drawLivePath:s,drawPreviewShape:l,tempObjectDataRef:t,tempPathDataRef:r}},Gn=()=>{const e=v.useRef(null),t=v.useRef({x:0,y:0}),[r,p]=v.useState("default");return{draggedObjectRef:e,dragOffsetRef:t,cursorStyle:r,setCursorStyle:p,startDrag:(x,o,h)=>{if(e.current={...x},x.type==="path"){const c=oe(x,h);t.current={x:o.x-c.points[0].x,y:o.y-c.points[0].y}}else if(x.type==="shape"&&(x.shape==="line"||x.shape==="arrow")){const c=(x.startX+x.endX)/2,u=(x.startY+x.endY)/2;t.current={x:o.x-c,y:o.y-u}}else if(x.x!==void 0&&x.y!==void 0)t.current={x:o.x-x.x,y:o.y-x.y};else{const c=oe(x,h);c.centerX!==void 0?t.current={x:o.x-c.centerX,y:o.y-c.centerY}:t.current={x:o.x-c.x,y:o.y-c.y}}},updateDragPosition:x=>{if(!e.current)return null;let o={...e.current};if(o.type==="path"){const h=x.x-t.current.x-o.points[0].x,c=x.y-t.current.y-o.points[0].y;o.points=o.points.map(u=>({x:u.x+h,y:u.y+c}))}else if(o.type==="shape"&&(o.shape==="line"||o.shape==="arrow")){const h=(o.startX+o.endX)/2,c=(o.startY+o.endY)/2,u=x.x-t.current.x,g=x.y-t.current.y,i=u-h,f=g-c;o.startX+=i,o.startY+=f,o.endX+=i,o.endY+=f}else o.x!==void 0&&o.y!==void 0&&(o.x=x.x-t.current.x,o.y=x.y-t.current.y);return e.current=o,o},endDrag:()=>{const x=e.current;return e.current=null,t.current={x:0,y:0},x},updateCursor:(x,o,h,c,u,g)=>{if(c){const f=c?c.startsWith("path_")?{...h[parseInt(c.replace("path_",""))],type:"path",id:c}:o.find(m=>m.id===c):null;if(f){const m=oe(f,g);if(m){const M=lt(x.x,x.y,m,f);if(M){p(M.cursor);return}if(st(x.x,x.y,m)){p("move");return}}}}const i=Vt(x.x,x.y,o,h,u,g);p(i?"pointer":"default")},checkForHandle:(x,o,h)=>{const c=oe(o,h);return c?lt(x.x,x.y,c,o):null},checkIfPointInSelectedBounds:(x,o,h)=>{if(!o)return!1;const c=oe(o,h);return c&&st(x.x,x.y,c)}}},Me=8,Dn=8,Rn=50,Zn=()=>{const e=v.useRef(null);return{resizeHandleRef:e,startResize:(d,s,l,a)=>{const C=a.width,y=a.height;let x=0;if(s.shape==="circle"||s.type==="player"||s.type==="ball"||s.type==="figure"){const o=a.centerX,h=a.centerY;x=Math.sqrt(Math.pow(l.x-o,2)+Math.pow(l.y-h,2))}e.current={handle:d.name,object:{...s},startPos:l,startBounds:a,startFontSize:s.fontSize,startX:s.x,startY:s.y,startWidth:C,startHeight:y,startMouseX:l.x,startMouseY:l.y,startCenterX:a.centerX,startCenterY:a.centerY,startDistanceFromCenter:x}},updateResize:d=>{if(!e.current)return null;const{handle:s,object:l,startBounds:a,startFontSize:C,startX:y,startY:x,startWidth:o,startHeight:h,startCenterX:c,startCenterY:u,startDistanceFromCenter:g}=e.current;let i={...l};if(l.type==="text"){const f=y,m=x;o||a.width;const M=h||a.height,$=m+M;let B=f,k=m,T=M;switch(s){case"topLeft":case"topRight":k=d.y,T=Math.max($-d.y,1);break;case"bottomLeft":case"bottomRight":k=m,T=Math.max(d.y-m,1);break}const I=15;T<I&&(T=I,(s==="topLeft"||s==="topRight")&&(k=$-I));const S=T/M,w=Math.max(8,Math.min(200,Math.round(C*S)));return i.x=B,i.y=k,i.fontSize=w,e.current.object=i,i}if(l.type==="path"||l.type==="shape"&&(l.shape==="line"||l.shape==="arrow")){if(l.rotation&&l.rotation!==0){const f=-(l.rotation*Math.PI)/180,m=(l.startX+l.endX)/2,M=(l.startY+l.endY)/2,$=Math.cos(f),B=Math.sin(f),k=d.x-m,T=d.y-M,I=m+(k*$-T*B),S=M+(k*B+T*$);s==="start"?(i.startX=I,i.startY=S):s==="end"&&(i.endX=I,i.endY=S)}else s==="start"?(i.startX=d.x,i.startY=d.y):s==="end"&&(i.endX=d.x,i.endY=d.y);return e.current.object=i,i}if(l.type==="player"||l.type==="ball"||l.type==="figure"){const f=a.centerX,m=a.centerY,M=Math.sqrt(Math.pow(d.x-f,2)+Math.pow(d.y-m,2)),$=g>0?M/g:1;if(l.type==="player"){const k=o/2*$;i.radius=Math.max(Dn,Math.min(Rn,k))}else if(l.type==="ball"){const B=o/2;i.radius=Math.max(5,B*$)}else if(l.type==="figure"){const B=o;i.size=Math.max(10,B*$)}return e.current.object=i,i}if(l.type==="shape"&&l.shape!=="line"&&l.shape!=="arrow"){const f=a,m=f.originalX??f.x,M=f.originalY??f.y,$=f.originalWidth??f.width,B=f.originalHeight??f.height;let k=m,T=M,I=$,S=B;const w=d.x-e.current.startMouseX,L=d.y-e.current.startMouseY;if(l.shape==="circle"){const E=c,Y=u,G=Math.sqrt(Math.pow(d.x-E,2)+Math.pow(d.y-Y,2)),D=g>0?G/g:1,F=Math.max(Me,o*D);k=E-F/2,T=Y-F/2,I=F,S=F}else{const E=m+$,Y=M+B;switch(s){case"topLeft":k=m+w,T=M+L,I=$-w,S=B-L;break;case"topRight":T=M+L,I=$+w,S=B-L;break;case"bottomLeft":k=m+w,I=$-w,S=B+L;break;case"bottomRight":I=$+w,S=B+L;break;case"top":T=M+L,S=B-L;break;case"bottom":S=B+L;break;case"left":k=m+w,I=$-w;break;case"right":I=$+w;break}if(Math.abs(I)<Me){const G=I<0?-1:1;I=Me*G,s.includes("Left")&&(k=E-I)}if(Math.abs(S)<Me){const G=S<0?-1:1;S=Me*G,s.includes("Top")&&(T=Y-S)}}i.x=k,i.y=T,i.width=I,i.height=S}return e.current.object=i,i},endResize:()=>{const d=e.current;return e.current=null,d?d.object:null}}},Fn=()=>{const e=v.useRef(!1),t=v.useRef([]),r=v.useRef(null),p=v.useRef(!1);return{drawingRef:e,currentPathRef:t,shapeStartRef:r,isDrawingShapeRef:p,startDrawing:o=>{e.current=!0,t.current=[{x:o.x,y:o.y}]},continueDrawing:o=>e.current?(t.current.push({x:o.x,y:o.y}),t.current):null,endDrawing:()=>{const o=t.current;return e.current=!1,t.current=[],o.length>1?o:null},startShape:o=>{p.current=!0,r.current=o},getShapePreview:o=>!p.current||!r.current?null:{start:r.current,end:o},endShape:(o,h)=>{if(!p.current||!r.current)return null;const c=r.current;let u=null;if(h==="line"||h==="arrow")Math.sqrt(Math.pow(o.x-c.x,2)+Math.pow(o.y-c.y,2))>5&&(u={startX:c.x,startY:c.y,endX:o.x,endY:o.y});else{const g=o.x-c.x,i=o.y-c.y;Math.abs(g)>5&&Math.abs(i)>5&&(u={x:c.x,y:c.y,width:g,height:i})}return p.current=!1,r.current=null,u},cancelDrawing:()=>{e.current=!1,t.current=[],p.current=!1,r.current=null}}},An=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,Hn=b.div`
  border: 2px solid #ddd;
  margin-top: 10px;
  background: white;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  position: relative;
  cursor: ${e=>e.cursor};
`,Wn=b.canvas`
  display: block;
  background: white;
`,_n=b.textarea`
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
`,jn=({fieldSize:e,fieldType:t})=>{const r=v.useRef(null),p=v.useRef(null),d=v.useRef(null),s=v.useRef(!1),l=v.useRef(null),[a,C]=v.useState({width:800,height:500}),[y,x]=v.useState(!1),[o,h]=v.useState(""),[c,u]=v.useState({x:0,y:0}),g=de(),{activeTool:i,drawColor:f,brushSize:m,paths:M,objects:$,selectedObjectId:B,team1:k,team2:T,textFontSize:I,textColor:S,shapeBorderColor:w,shapeBorderOpacity:L,shapeFillColor:E,shapeFillOpacity:Y,shapeBorderWidth:G,shapeBorderStyle:D,shapeLineCapStart:W,shapeLineCapEnd:F}=Te(z=>z.tacticsBoard),{redraw:A,drawLivePath:_,drawPreviewShape:j,tempObjectDataRef:Z,tempPathDataRef:H}=zn(r),{cursorStyle:N,setCursorStyle:O,startDrag:U,updateDragPosition:ie,endDrag:te,updateCursor:J,checkForHandle:q,draggedObjectRef:ne,checkIfPointInSelectedBounds:Ze}=Gn(),{resizeHandleRef:xe,startResize:Fe,updateResize:qt,endResize:Je}=Zn(),{drawingRef:Ae,currentPathRef:K1,shapeStartRef:He,isDrawingShapeRef:We,startDrawing:Ut,continueDrawing:Jt,endDrawing:Ke,startShape:Kt,endShape:Qt,cancelDrawing:en}=Fn(),tn=1500,nn=640,rn=1400,_e=e.width/e.height,Qe=v.useCallback(()=>{var nt;const z=p.current;if(!z)return{width:800,height:500};const X=((nt=z.parentElement)==null?void 0:nt.clientWidth)||window.innerWidth,R=X/tn,P=rn*R,V=nn*R,re=P,pe=re/_e,tt=V,dn=tt*_e;let fe,we;pe<=V?(fe=re,we=pe):(fe=dn,we=tt);const Ve=X*.95;if(fe>Ve){const pn=Ve/fe;fe=Ve,we=we*pn}return{width:Math.floor(fe),height:Math.floor(we)}},[_e]),je=z=>{const X=r.current;if(!X)return{x:0,y:0};const R=X.getBoundingClientRect(),P=X.width/R.width,V=X.height/R.height;return{x:(z.clientX-R.left)*P,y:(z.clientY-R.top)*V}},on=z=>{if(z.button!==0)return;const X=je(z),R=r.current;if(y){et();return}if(i==="cursor"){const P=B?B.startsWith("path_")?{...M[parseInt(B.replace("path_",""))],type:"path",id:B}:$.find(re=>re.id===B):null;if(P){const re=oe(P,R);if(re){const pe=q(X,P,R);if(pe){Fe(pe,P,X,re),P.type==="path"?H.current={...P}:Z.current={...P};return}if(Ze(X,P,R)){U(P,X,R),P.type==="path"?H.current={...P}:Z.current={...P};return}}}const V=Vt(X.x,X.y,$,M,m,R);V?(g(rt(V.id)),oe(V,R)&&(U(V,X,R),V.type==="path"?H.current={...V}:Z.current={...V})):g(Se())}else if(i==="drawing")Ut(X);else if(i.startsWith("shape_"))Kt(X);else if(i.startsWith("figure_")){const P={player:"👤",goalkeeper:"🧤",coach:"🧠",referee:"⚖️",goal:"🥅",cone:"🟨"},V=i.replace("figure_","");g(Ne({type:"figure",figureType:V,icon:P[V],x:X.x,y:X.y,size:30}))}else if(i==="ball")g(Ne({type:"ball",x:X.x,y:X.y,radius:10}));else if(i==="text"){const P=`text_${Date.now()}_${Math.random()}`;x(!0),h(""),u(X),l.current=P,g(rt(P))}z.preventDefault()},an=z=>{const X=je(z),R=r.current;if(i==="cursor"&&!ne.current&&!xe.current&&J(X,$,M,B,m,R),xe.current){const P=qt(X);P&&(P.type==="path"?H.current=P:Z.current=P,A(M,$,B,i,f,m))}else if(ne.current){const P=ie(X);P&&(P.type==="path"?H.current=P:Z.current=P,A(M,$,B,i,f,m))}else if(Ae.current){const P=Jt(X);P&&P.length>=2&&_(P,f,m)}else if(We.current&&He.current){const P=i.replace("shape_","");A(M,$,B,i,f,m),j(P,He.current,X,w,D,G,E,Y)}z.preventDefault()},sn=z=>{const X=je(z);if(Ae.current){const R=Ke();R&&g(ot({points:R,color:f,brushSize:m}))}if(We.current&&He.current){const R=i.replace("shape_",""),P=Qt(X,R);if(P){const V={type:"shape",shape:R,...P,borderColor:w,borderOpacity:L,borderWidth:G,borderStyle:D,color:w};R==="line"||R==="arrow"?(V.lineCapStart=W,V.lineCapEnd=R==="arrow"?"arrow":F):(V.fillColor=E,V.fillOpacity=Y),g(Ne(V))}}if(ne.current){const R=te();if(R)if(R.type==="path"){const P=parseInt(R.id.replace("path_",""));g(Ie({index:P,updates:R}))}else g(he({id:R.id,updates:R}));Z.current=null,H.current=null}if(xe.current){const R=Je();if(R&&Z.current)if(R.type==="path"){const P=parseInt(R.id.replace("path_",""));g(Ie({index:P,updates:H.current}))}else g(he({id:Z.current.id,updates:Z.current}));Z.current=null,H.current=null}O("default"),z.preventDefault()},ln=z=>{if(Ae.current){const X=Ke();X&&g(ot({points:X,color:f,brushSize:m}))}if(We.current&&en(),ne.current){const X=te();if(X&&Z.current)if(X.type==="path"){const R=parseInt(X.id.replace("path_",""));g(Ie({index:R,updates:H.current}))}else g(he({id:Z.current.id,updates:Z.current}))}if(xe.current){const X=Je();if(X&&Z.current)if(X.object.type==="path"){const R=parseInt(X.object.id.replace("path_",""));g(Ie({index:R,updates:H.current}))}else g(he({id:Z.current.id,updates:Z.current}))}Z.current=null,H.current=null,O("default")},cn=z=>{h(z.target.value),d.current&&(d.current.style.height="auto",d.current.style.height=d.current.scrollHeight+"px")},et=()=>{const z=o.trim();z&&g(xn({id:l.current,x:c.x,y:c.y,text:z,fontSize:I,color:S})),x(!1),h(""),l.current=null,g(Be("cursor"))},hn=z=>{z.key==="Escape"&&(z.preventDefault(),x(!1),h(""),g(Se()),g(Be("cursor")))};return v.useEffect(()=>{const z=()=>{const X=Qe();C(X)};return z(),window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[Qe]),v.useEffect(()=>{const z=r.current,X=p.current;z&&X&&(z.width=a.width,z.height=a.height,z.style.width=`${a.width}px`,z.style.height=`${a.height}px`,X.style.width=`${a.width}px`,X.style.height=`${a.height}px`,s.current||(g(gn({canvasWidth:a.width,canvasHeight:a.height})),s.current=!0),A(M,$,B,i,f,m))},[a,g,A,M,$,B,i,f,m]),v.useEffect(()=>{A(M,$,B,i,f,m)},[M,$,B,A,i,f,m]),v.useEffect(()=>{if(a.width>0&&a.height>0){const z=$.filter(P=>P.type==="player"),X=z.filter(P=>P.team===1),R=z.filter(P=>P.team===2);(X.length!==k.count||R.length!==T.count)&&g(un({canvasWidth:a.width,canvasHeight:a.height}))}},[k.count,T.count,a,$,g]),v.useEffect(()=>{if(y&&d.current&&r.current){const z=d.current;setTimeout(()=>{z.focus(),z.select()},0);const X=r.current,R=X.getBoundingClientRect(),P=X.width/R.width,V=X.height/R.height,re=c.x/P,pe=c.y/V;z.style.left=`${re}px`,z.style.top=`${pe}px`,z.style.fontSize=`${I/V}px`,z.style.color=S,z.style.width="auto",z.style.height="auto"}},[y,c,S,I]),v.useEffect(()=>{const z=X=>{X.key==="Escape"&&!y&&g(Se())};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[B,y,g]),v.useEffect(()=>{g(Se())},[i,g]),n.jsx(An,{children:n.jsxs(Hn,{ref:p,cursor:N,children:[n.jsx(Wn,{ref:r,onMouseDown:on,onMouseMove:an,onMouseUp:sn,onMouseLeave:ln}),y&&n.jsx(_n,{ref:d,value:o,onChange:cn,onBlur:et,onKeyDown:hn,placeholder:"Введіть текст",rows:1})]})})},Vn=e=>v.createElement("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32",xmlSpace:"preserve",...e},v.createElement("path",{className:"st0",d:"M20,29h-8c-2.2,0-4-1.8-4-4V7c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v18C24,27.2,22.2,29,20,29z"}),v.createElement("circle",{className:"st0",cx:16,cy:16,r:4}),v.createElement("line",{className:"st0",x1:8,y1:16,x2:24,y2:16}),v.createElement("rect",{x:13,y:3,className:"st0",width:6,height:4}),v.createElement("rect",{x:13,y:25,className:"st0",width:6,height:4})),Nn=e=>v.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("path",{d:"M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),On=e=>v.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("path",{d:"M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"})),qn=e=>v.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("circle",{cx:12,cy:12,r:9,strokeWidth:2}),v.createElement("path",{d:"M18 18L6 6",strokeWidth:2})),Nt=e=>v.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},v.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fillRule:"evenodd"},v.createElement("g",{id:"Arrow",transform:"translate(-528.000000, 0.000000)",fillRule:"nonzero"},v.createElement("g",{id:"forward_2_line",transform:"translate(528.000000, 0.000000)"},v.createElement("path",{d:"M17.954,11.6767 C16.6468,9.47493 14.2448,8 11.5,8 C7.35786,8 4,11.3579 4,15.5 C4,16.0523 3.55228,16.5 3,16.5 C2.44772,16.5 2,16.0523 2,15.5 C2,10.2533 6.25329,6 11.5,6 C14.6814,6 17.4961,7.56337 19.22,9.96279 L19.757,6.91751 C19.8529,6.37361 20.3715,6.01044 20.9154,6.10635 C21.4593,6.20225 21.8225,6.72091 21.7266,7.2648 L20.6847,13.1736 C20.6386,13.4348 20.4907,13.667 20.2735,13.8192 C19.9896,14.0179 19.6122,14.0542 19.2977,13.9445 L13.6174,12.9429 C13.0735,12.847 12.7103,12.3284 12.8062,11.7845 C12.9021,11.2406 13.4208,10.8774 13.9647,10.9733 L17.954,11.6767 Z",id:"\\u8DEF\\u5F84"}))))),Un=e=>v.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.93417 2C7.95604 2 7.97799 2 8 2L16.0658 2C16.9523 1.99995 17.7161 1.99991 18.3278 2.08215C18.9833 2.17028 19.6117 2.36902 20.1213 2.87868C20.631 3.38835 20.8297 4.0167 20.9179 4.67221C21.0001 5.28388 21.0001 6.0477 21 6.9342L21 7.95C21 8.50229 20.5523 8.95 20 8.95C19.4477 8.95 19 8.50229 19 7.95V7.00001C19 6.02893 18.9979 5.40122 18.9357 4.93871C18.8774 4.50497 18.7832 4.36902 18.7071 4.2929C18.631 4.21677 18.495 4.12263 18.0613 4.06431C17.5988 4.00213 16.9711 4 16 4H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V4H8C7.02893 4 6.40122 4.00213 5.93871 4.06431C5.50497 4.12263 5.36902 4.21677 5.2929 4.2929C5.21677 4.36902 5.12263 4.50497 5.06431 4.93871C5.00213 5.40122 5 6.02893 5 7.00001V7.95C5 8.50229 4.55229 8.95 4 8.95C3.44772 8.95 3 8.50229 3 7.95V7.00001C3 6.97799 3 6.95604 3 6.93418C2.99995 6.04769 2.99991 5.28387 3.08215 4.67221C3.17028 4.0167 3.36902 3.38835 3.87868 2.87868C4.38835 2.36902 5.0167 2.17028 5.67221 2.08215C6.28387 1.99991 7.04769 1.99995 7.93417 2Z"}),v.createElement("path",{d:"M7 21H17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ot=e=>v.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.51192 4.43057C6.82641 4.161 7.29989 4.19743 7.56946 4.51192L13.5695 11.5119C13.8102 11.7928 13.8102 12.2072 13.5695 12.4881L7.56946 19.4881C7.29989 19.8026 6.82641 19.839 6.51192 19.5695C6.19743 19.2999 6.161 18.8264 6.43057 18.5119L12.0122 12L6.43057 5.48811C6.161 5.17361 6.19743 4.70014 6.51192 4.43057ZM10.5121 4.43068C10.8266 4.16111 11.3001 4.19753 11.5697 4.51202L17.5697 11.512C17.8104 11.7929 17.8104 12.2073 17.5697 12.4882L11.5697 19.4882C11.3001 19.8027 10.8266 19.8391 10.5121 19.5696C10.1976 19.3 10.1612 18.8265 10.4308 18.512L16.0124 12.0001L10.4308 5.48821C10.1612 5.17372 10.1976 4.70024 10.5121 4.43068Z"})),Jn=e=>v.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("rect",{x:3,y:5,width:18,height:14,rx:2,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Kn=e=>v.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Qn=e=>v.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.0001 5.94363L4.76627 18H19.2339L12.0001 5.94363ZM10.7138 4.20006C11.2964 3.22905 12.7037 3.22905 13.2863 4.20006L21.4032 17.7282C22.0031 18.728 21.2829 20 20.117 20H3.88318C2.71724 20 1.99706 18.728 2.59694 17.7282L10.7138 4.20006Z"})),er=e=>v.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("path",{d:"M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z"})),tr=e=>v.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("path",{d:"M6 12H18M18 12L13 7M18 12L13 17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),nr=b.div`
  position: relative;
  display: inline-block;
`,rr=b.button`
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
`,or=b.div`
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
`,ir=b.button`
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
`,yt=b.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Oe=[{id:"rectangle",name:"Прямокутник",icon:n.jsx(Jn,{}),style:{stroke:"currentColor",fill:"none"}},{id:"circle",name:"Коло",icon:n.jsx(Kn,{}),style:{stroke:"currentColor",fill:"none"}},{id:"triangle",name:"Трикутник",icon:n.jsx(Qn,{}),style:{fill:"currentColor",stroke:"none"}},{id:"line",name:"Лінія",icon:n.jsx(er,{}),style:{fill:"currentColor",stroke:"none"}},{id:"arrow",name:"Стрілка",icon:n.jsx(tr,{}),style:{stroke:"currentColor",fill:"none"}}],ar=({activeTool:e,onSelectShape:t})=>{const[r,p]=v.useState(!1),[d,s]=v.useState({top:0,left:0}),l=v.useRef(null),a=v.useRef(null),C=e.startsWith("shape_"),y=C?e.replace("shape_",""):null,x=Oe.find(i=>i.id===y),o=()=>{if(a.current){const i=a.current.getBoundingClientRect();s({top:i.bottom+window.scrollY,left:i.left+window.scrollX})}p(!r)},h=i=>{t(i),p(!1)},c=i=>{l.current&&!l.current.contains(i.target)&&p(!1)};v.useEffect(()=>(document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}),[]);const u=()=>{const i=x||Oe[0];return n.jsx(yt,{children:it.cloneElement(i.icon,i.style)})},g=i=>it.cloneElement(i.icon,i.style);return n.jsxs(nr,{ref:l,children:[n.jsx(rr,{ref:a,title:"Геометричні фігури",onClick:o,active:C,children:u()}),n.jsx(or,{isOpen:r,style:{top:d.top,left:d.left},children:Oe.map(i=>n.jsx(ir,{onClick:()=>h(i),title:i.name,children:n.jsx(yt,{children:g(i)})},i.id))})]})},sr=b.div`
  position: relative;
  display: inline-block;
`,lr=b.button`
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
`,cr=b.div`
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
`,hr=b.button`
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
`,wt=[{id:"player",name:"Гравець",icon:"👤"},{id:"goalkeeper",name:"Воротар",icon:"🧤"},{id:"coach",name:"Тренер",icon:"🧠"},{id:"referee",name:"Суддя",icon:"⚖️"},{id:"goal",name:"Ворота",icon:"🥅"},{id:"cone",name:"Стійка",icon:"🟨"}],dr=({activeTool:e,onSelectFigure:t})=>{const[r,p]=v.useState(!1),[d,s]=v.useState({top:0,left:0}),l=v.useRef(null),a=v.useRef(null),C=e.startsWith("figure_"),y=C?e.replace("figure_",""):null,x=wt.find(g=>g.id===y),o=()=>{if(a.current){const g=a.current.getBoundingClientRect();s({top:g.bottom+window.scrollY,left:g.left+window.scrollX})}p(!r)},h=g=>{t(g),p(!1)},c=g=>{l.current&&!l.current.contains(g.target)&&p(!1)};v.useEffect(()=>(document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}),[]);const u=()=>x?x.icon:"👤";return n.jsxs(sr,{ref:l,children:[n.jsx(lr,{ref:a,title:"Спортивні фігури",onClick:o,active:C,children:u()}),n.jsx(cr,{isOpen:r,style:{top:d.top,left:d.left},children:wt.map(g=>n.jsx(hr,{onClick:()=>h(g),title:g.name,children:g.icon},g.id))})]})},Mt=e=>v.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("path",{d:"M9.19762 11.9582L9.91426 11.737L9.19762 11.9582ZM9.54558 10.8683L9.08995 10.2726L9.54558 10.8683ZM9.91896 14.2952L9.20232 14.5164L9.91896 14.2952ZM14.0579 14.2952L13.3413 14.074L14.0579 14.2952ZM14.4313 10.8683L13.9757 11.4641V11.4641L14.4313 10.8683ZM14.7793 11.9582L15.4959 12.1794L14.7793 11.9582ZM12.5948 9.46375L13.0504 8.86802L12.5948 9.46375ZM11.3821 9.46375L11.8377 10.0595L11.3821 9.46375ZM20.1847 17.75C20.5989 17.75 20.9347 17.4142 20.9347 17C20.9347 16.5858 20.5989 16.25 20.1847 16.25V17.75ZM14.7793 19.7351L14.0677 19.4982L14.7793 19.7351ZM13.4801 21.2631C13.3492 21.6561 13.5617 22.0807 13.9547 22.2116C14.3477 22.3424 14.7724 22.1299 14.9033 21.7369L13.4801 21.2631ZM3.99769 16.25C3.58348 16.25 3.24769 16.5858 3.24769 17C3.24769 17.4142 3.58348 17.75 3.99769 17.75V16.25ZM9.40314 19.7351L10.1147 19.4982L9.40314 19.7351ZM9.27917 21.7369C9.41002 22.1299 9.83469 22.3424 10.2277 22.2116C10.6207 22.0807 10.8332 21.6561 10.7024 21.2631L9.27917 21.7369ZM8.22071 17.3775L7.78185 17.9857L8.22071 17.3775ZM5.556 5.45942C5.4489 5.05928 5.03772 4.82173 4.63759 4.92882C4.23746 5.03591 3.9999 5.44709 4.10699 5.84723L5.556 5.45942ZM5.24951 7.21519L4.52501 7.40909V7.40909L5.24951 7.21519ZM3.59168 11.5885L3.17811 10.9628L3.17811 10.9628L3.59168 11.5885ZM1.62739 11.9879C1.28185 12.2163 1.18689 12.6816 1.4153 13.0271C1.64372 13.3727 2.109 13.4676 2.45454 13.2392L1.62739 11.9879ZM19.934 5.84732C20.0411 5.44719 19.8035 5.036 19.4034 4.92891C19.0033 4.82182 18.5921 5.05938 18.485 5.45951L19.934 5.84732ZM18.7915 7.21528L18.067 7.02137L18.7915 7.21528ZM20.4493 11.5886L20.0357 12.2143L20.4493 11.5886ZM21.5864 13.2393C21.932 13.4677 22.3973 13.3728 22.6257 13.0272C22.8541 12.6817 22.7591 12.2164 22.4136 11.988L21.5864 13.2393ZM16.0903 3.83623C16.4288 3.5975 16.5096 3.12956 16.2709 2.79107C16.0322 2.45257 15.5642 2.3717 15.2257 2.61044L16.0903 3.83623ZM14.3376 4.15456L14.7699 4.76746L14.3376 4.15456ZM9.66562 4.10403L9.22021 4.70744V4.70744L9.66562 4.10403ZM8.61539 2.39659C8.28213 2.15059 7.81255 2.22133 7.56656 2.55459C7.32056 2.88784 7.3913 3.35742 7.72456 3.60341L8.61539 2.39659ZM14.7793 11.3678L14.0627 11.589L14.7793 11.3678ZM9.19762 11.3678L9.91426 11.589L9.19762 11.3678ZM21.2269 12C21.2269 17.1095 17.0899 21.25 11.9885 21.25V22.75C17.92 22.75 22.7269 17.9362 22.7269 12H21.2269ZM11.9885 21.25C6.88701 21.25 2.75 17.1095 2.75 12H1.25C1.25 17.9362 6.05695 22.75 11.9885 22.75V21.25ZM2.75 12C2.75 6.89055 6.88701 2.75 11.9885 2.75V1.25C6.05695 1.25 1.25 6.06376 1.25 12H2.75ZM11.9885 2.75C17.0899 2.75 21.2269 6.89055 21.2269 12H22.7269C22.7269 6.06376 17.92 1.25 11.9885 1.25V2.75ZM12.1392 10.0595L13.9757 11.4641L14.887 10.2726L13.0504 8.86802L12.1392 10.0595ZM14.0626 11.737L13.3413 14.074L14.7746 14.5164L15.4959 12.1794L14.0626 11.737ZM13.1036 14.25H10.8733V15.75H13.1036V14.25ZM10.6356 14.074L9.91426 11.737L8.48098 12.1794L9.20232 14.5164L10.6356 14.074ZM10.0012 11.4641L11.8377 10.0595L10.9265 8.86802L9.08995 10.2726L10.0012 11.4641ZM20.1847 16.25H18.5696V17.75H20.1847V16.25ZM14.0677 19.4982L13.4801 21.2631L14.9033 21.7369L15.4909 19.972L14.0677 19.4982ZM18.5696 16.25C17.892 16.25 17.3207 16.2489 16.8555 16.302C16.3711 16.3574 15.9264 16.4781 15.5228 16.7693L16.4006 17.9857C16.5201 17.8994 16.6846 17.8313 17.0258 17.7923C17.3863 17.7511 17.8574 17.75 18.5696 17.75V16.25ZM15.4909 19.972C15.7161 19.2956 15.8662 18.8484 16.0193 18.5189C16.1643 18.2069 16.2809 18.072 16.4006 17.9857L15.5228 16.7693C15.1193 17.0605 14.8645 17.4444 14.659 17.8868C14.4615 18.3117 14.282 18.8545 14.0677 19.4982L15.4909 19.972ZM3.99769 17.75H5.61279V16.25H3.99769V17.75ZM8.69154 19.972L9.27917 21.7369L10.7024 21.2631L10.1147 19.4982L8.69154 19.972ZM5.61279 17.75C6.325 17.75 6.79611 17.7511 7.15658 17.7923C7.49784 17.8313 7.66228 17.8994 7.78185 17.9857L8.65958 16.7693C8.25598 16.4781 7.81137 16.3574 7.32692 16.302C6.86168 16.2489 6.29041 16.25 5.61279 16.25V17.75ZM10.1147 19.4982C9.90043 18.8545 9.7209 18.3117 9.52346 17.8868C9.31791 17.4445 9.06311 17.0605 8.65958 16.7693L7.78185 17.9857C7.90148 18.072 8.01815 18.2069 8.16314 18.5189C8.31624 18.8484 8.46634 19.2956 8.69154 19.972L10.1147 19.4982ZM4.10699 5.84723L4.52501 7.40909L5.97401 7.02128L5.556 5.45942L4.10699 5.84723ZM3.17811 10.9628L1.62739 11.9879L2.45454 13.2392L4.00526 12.2142L3.17811 10.9628ZM4.52501 7.40909C4.70933 8.09777 4.83021 8.55381 4.88378 8.91324C4.93452 9.25362 4.9114 9.43069 4.85896 9.56902L6.26156 10.1007C6.43795 9.63541 6.43932 9.17465 6.3674 8.69211C6.29831 8.22862 6.14941 7.67663 5.97401 7.02128L4.52501 7.40909ZM4.00526 12.2142C4.57077 11.8404 5.04807 11.5262 5.407 11.2252C5.78074 10.9119 6.08516 10.5661 6.26156 10.1007L4.85896 9.56902C4.80654 9.70729 4.70659 9.855 4.44321 10.0759C4.16501 10.3091 3.77244 10.57 3.17811 10.9628L4.00526 12.2142ZM18.485 5.45951L18.067 7.02137L19.516 7.40918L19.934 5.84732L18.485 5.45951ZM20.0357 12.2143L21.5864 13.2393L22.4136 11.988L20.8629 10.9629L20.0357 12.2143ZM18.067 7.02137C17.8916 7.67672 17.7427 8.22871 17.6736 8.6922C17.6017 9.17474 17.603 9.6355 17.7794 10.1008L19.182 9.56911C19.1296 9.43078 19.1065 9.25372 19.1572 8.91333C19.2108 8.5539 19.3316 8.09787 19.516 7.40918L18.067 7.02137ZM20.8629 10.9629C20.2685 10.5701 19.876 10.3092 19.5978 10.0759C19.3344 9.85509 19.2344 9.70739 19.182 9.56911L17.7794 10.1008C17.9558 10.5662 18.2602 10.912 18.634 11.2253C18.9929 11.5263 19.4702 11.8405 20.0357 12.2143L20.8629 10.9629ZM15.2257 2.61044L13.9054 3.54166L14.7699 4.76746L16.0903 3.83623L15.2257 2.61044ZM10.111 3.50061L8.61539 2.39659L7.72456 3.60341L9.22021 4.70744L10.111 3.50061ZM13.9054 3.54166C13.3231 3.9523 12.9373 4.22303 12.6189 4.39721C12.3174 4.56214 12.1438 4.60125 11.9966 4.59965L11.9803 6.09957C12.478 6.10495 12.9109 5.94721 13.3387 5.7132C13.7496 5.48845 14.2159 5.15817 14.7699 4.76746L13.9054 3.54166ZM9.22021 4.70744C9.76562 5.11004 10.2247 5.45033 10.6306 5.68391C11.0533 5.92712 11.4827 6.09418 11.9803 6.09957L11.9966 4.59965C11.8494 4.59806 11.6767 4.5552 11.3788 4.38379C11.0642 4.20276 10.6843 3.92375 10.111 3.50061L9.22021 4.70744ZM13.9757 11.4641C14.0179 11.4963 14.0475 11.5399 14.0627 11.589L15.4959 11.1465C15.3911 10.807 15.1828 10.4989 14.887 10.2726L13.9757 11.4641ZM14.0627 11.589C14.0773 11.6364 14.0779 11.6876 14.0626 11.737L15.4959 12.1794C15.6023 11.8349 15.5974 11.4754 15.4959 11.1465L14.0627 11.589ZM18.1938 9.14203L14.4923 10.6748L15.0662 12.0607L18.7677 10.5279L18.1938 9.14203ZM13.0504 8.86802C12.7371 8.62838 12.3624 8.50841 11.9885 8.50841V10.0084C12.0419 10.0084 12.0945 10.0253 12.1392 10.0595L13.0504 8.86802ZM11.9885 8.50841C11.6146 8.50841 11.2398 8.62838 10.9265 8.86802L11.8377 10.0595C11.8824 10.0253 11.935 10.0084 11.9885 10.0084V8.50841ZM12.7385 9.25841V5.34961H11.2385V9.25841H12.7385ZM13.3413 14.074C13.3259 14.1241 13.2962 14.166 13.2572 14.1967L14.1852 15.3752C14.4575 15.1608 14.6671 14.8646 14.7746 14.5164L13.3413 14.074ZM13.2572 14.1967C13.214 14.2308 13.1607 14.25 13.1036 14.25V15.75C13.5063 15.75 13.8846 15.6119 14.1852 15.3752L13.2572 14.1967ZM16.5291 16.887L14.2886 14.2954L13.1538 15.2765L15.3944 17.868L16.5291 16.887ZM10.8733 14.25C10.8162 14.25 10.7629 14.2308 10.7197 14.1967L9.79172 15.3752C10.0923 15.6119 10.4706 15.75 10.8733 15.75V14.25ZM10.7197 14.1967C10.6807 14.166 10.651 14.1241 10.6356 14.074L9.20232 14.5164C9.3098 14.8646 9.51943 15.1608 9.79172 15.3752L10.7197 14.1967ZM8.81059 17.8407L10.8456 15.2492L9.66584 14.3228L7.63084 16.9143L8.81059 17.8407ZM9.91426 11.737C9.89899 11.6876 9.89961 11.6364 9.91426 11.589L8.48099 11.1465C8.37949 11.4754 8.37465 11.8349 8.48098 12.1794L9.91426 11.737ZM9.91426 11.589C9.9294 11.5399 9.95905 11.4963 10.0012 11.4641L9.08995 10.2726C8.79412 10.4989 8.58579 10.807 8.48099 11.1465L9.91426 11.589ZM9.48889 10.6766L5.85153 9.14373L5.269 10.526L8.90636 12.0589L9.48889 10.6766Z"})),pr=e=>v.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5262 17.4999C18.4887 22.7611 11.7612 24.5637 6.49994 21.5262C1.23873 18.4886 -0.563901 11.7611 2.47367 6.49988C5.51123 1.23866 12.2387 -0.563962 17.4999 2.4736C22.7612 5.51117 24.5638 12.2387 21.5262 17.4999ZM5.84382 7.87995C5.25279 7.64272 4.74291 7.45257 4.3292 7.30543C5.59153 5.24057 7.56267 3.85898 9.74648 3.29362C9.77176 3.62621 9.82851 4.00289 9.93722 4.40861C10.3269 5.86297 11.3579 7.58777 13.75 8.96886C14.0666 9.15165 14.3765 9.31079 14.6793 9.44842C14.4757 10.219 14.1794 11.0351 13.7614 11.8848C13.3566 11.6365 12.936 11.3857 12.5 11.1339C9.85449 9.60655 7.52076 8.55305 5.84382 7.87995ZM12.7587 13.6161C12.3555 13.3682 11.9358 13.1176 11.5 12.866C8.94938 11.3934 6.70297 10.3799 5.09882 9.73602C4.44209 9.47241 3.89359 9.27099 3.47664 9.12556C2.8887 10.8629 2.86217 12.7007 3.33339 14.4015C3.63406 14.2571 3.98864 14.1179 4.39435 14.0092C5.84872 13.6195 7.85792 13.65 10.25 15.0311C10.5667 15.2139 10.8594 15.4027 11.13 15.5961C11.6875 15.0424 12.2384 14.3885 12.7587 13.6161ZM12.6204 16.9341C13.4037 17.8315 13.839 18.756 14.0628 19.5913C14.1715 19.997 14.2283 20.3736 14.2536 20.7061C15.962 20.2638 17.5403 19.3219 18.7509 17.9441C18.4164 17.6557 17.9678 17.2815 17.4112 16.8446C16.6284 16.2301 15.633 15.4925 14.4426 14.6962C13.8639 15.5605 13.2482 16.3006 12.6204 16.9341ZM9.52737 16.9296C9.43788 16.8737 9.34548 16.8182 9.25005 16.7631C7.31205 15.6442 5.84818 15.6902 4.91199 15.9411C4.58 16.03 4.30141 16.1484 4.0805 16.2639C4.53358 17.1073 5.12461 17.8846 5.84359 18.5583C5.87614 18.5513 5.90977 18.5439 5.94444 18.5361C6.44532 18.4223 7.15871 18.2112 7.97658 17.8245C8.4626 17.5947 8.98712 17.3022 9.52737 16.9296ZM7.92672 20.018C8.21347 19.909 8.51642 19.7815 8.83145 19.6326C9.54844 19.2936 10.3256 18.8442 11.1145 18.2503C11.6989 18.9202 11.9873 19.5728 12.131 20.109C12.2199 20.4409 12.2567 20.7413 12.2672 20.9903C10.8031 21.0352 9.31171 20.7231 7.92672 20.018ZM18.6461 15.2714C17.8061 14.612 16.7364 13.8204 15.4558 12.968C15.9672 11.9634 16.3317 10.9922 16.5833 10.0701C17.7521 10.2998 18.7704 10.2145 19.6057 9.99072C20.0114 9.88202 20.3659 9.74284 20.6666 9.59846C21.2688 11.7723 21.0579 14.1701 19.9008 16.2957C19.5666 16.011 19.147 15.6645 18.6461 15.2714ZM16.9702 8.10789C17.8425 8.27902 18.5519 8.20254 19.0881 8.05887C19.42 7.96992 19.6986 7.85154 19.9195 7.73607C19.2263 6.44565 18.2102 5.3101 16.907 4.46319C16.956 4.76614 16.9971 5.09234 17.0257 5.43977C17.0906 6.23015 17.09 7.1278 16.9702 8.10789ZM15.0328 7.39372C15.0854 6.73963 15.0764 6.13922 15.0324 5.60348C14.9583 4.70183 14.7845 3.97847 14.6326 3.4878C14.622 3.45374 14.6116 3.42082 14.6013 3.38905C13.6584 3.10331 12.6898 2.9801 11.7329 3.00943C11.7433 3.2585 11.7801 3.55897 11.8691 3.89097C12.1199 4.82716 12.812 6.11791 14.75 7.23681C14.8454 7.2919 14.9397 7.34416 15.0328 7.39372Z"})),gr=e=>v.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("path",{d:"M11.5697 12.5532L12.1617 13.0137V13.0137L11.5697 12.5532ZM11.3142 3.64586L12.0065 3.93432V3.93432L11.3142 3.64586ZM18.555 14.5045C18.8336 14.198 18.811 13.7237 18.5045 13.445C18.198 13.1664 17.7237 13.189 17.445 13.4955L18.555 14.5045ZM17.7087 14.3204L17.1538 13.8159L17.1538 13.8159L17.7087 14.3204ZM21.2426 10.7426L21.7773 10.2166L21.773 10.2123L21.2426 10.7426ZM21.4531 12.026C21.7436 12.3213 22.2184 12.3251 22.5137 12.0346C22.809 11.7442 22.8129 11.2693 22.5224 10.974L21.4531 12.026ZM5.7327 19.0428C5.31848 19.0428 4.9827 19.3786 4.9827 19.7928C4.9827 20.207 5.31848 20.5428 5.7327 20.5428V19.0428ZM3.5 15.75C3.08579 15.75 2.75 16.0858 2.75 16.5C2.75 16.9142 3.08579 17.25 3.5 17.25V15.75ZM8.19231 3.35575C8.35162 2.9734 8.17081 2.5343 7.78846 2.37498C7.40611 2.21567 6.96701 2.39648 6.80769 2.77883L8.19231 3.35575ZM6.80769 15.2885C6.96701 15.6708 7.40611 15.8516 7.78846 15.6923C8.17081 15.533 8.35162 15.0939 8.19231 14.7115L6.80769 15.2885ZM11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5C10.25 6.91421 10.5858 7.25 11 7.25V5.75ZM19.876 16.916C20.1057 17.2607 20.5714 17.3538 20.916 17.124C21.2607 16.8943 21.3538 16.4286 21.124 16.084L19.876 16.916ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75C2.75 6.89137 6.89137 2.75 12 2.75V1.25ZM12 12.75H12.0917V11.25H12V12.75ZM11.408 11.5395L10.9777 12.0928L12.1617 13.0137L12.592 12.4605L11.408 11.5395ZM11.3077 1.71154L10.6219 3.35739L12.0065 3.93432L12.6923 2.28846L11.3077 1.71154ZM17.445 13.4955L17.1538 13.8159L18.2637 14.8249L18.555 14.5045L17.445 13.4955ZM20.708 11.2686L21.4531 12.026L22.5224 10.974L21.7773 10.2167L20.708 11.2686ZM17.1538 13.8159C14.2838 16.9729 9.96086 19.0428 5.7327 19.0428V20.5428C10.4211 20.5428 15.1357 18.2657 18.2637 14.8249L17.1538 13.8159ZM10.6219 3.35739C9.39039 6.31308 9.66695 9.68222 11.364 12.3975L12.636 11.6025C11.1965 9.29929 10.9619 6.44145 12.0065 3.93432L10.6219 3.35739ZM10.9777 12.0928C9.18293 14.4003 6.42334 15.75 3.5 15.75V17.25C6.88622 17.25 10.0828 15.6866 12.1617 13.0137L10.9777 12.0928ZM6.80769 2.77883C5.13077 6.80344 5.13077 11.2638 6.80769 15.2885L8.19231 14.7115C6.66923 11.0562 6.66923 7.01114 8.19231 3.35575L6.80769 2.77883ZM11 7.25C14.6428 7.25 18.1364 8.6971 20.7123 11.273L21.773 10.2123C18.9158 7.35514 15.0406 5.75 11 5.75V7.25ZM12.0917 12.75C15.2197 12.75 18.1408 14.3133 19.876 16.916L21.124 16.084C19.1107 13.064 15.7213 11.25 12.0917 11.25V12.75Z"})),ur=e=>v.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.9386 4.73542C13.3511 4.69785 13.716 5.0018 13.7535 5.4143C13.8024 5.95058 13.893 6.53361 14.045 7.14711C14.1447 7.54916 13.8995 7.95586 13.4974 8.05549C13.0954 8.15512 12.6887 7.90997 12.5891 7.50791C12.4172 6.81421 12.3148 6.15558 12.2597 5.55036C12.2221 5.13785 12.5261 4.77299 12.9386 4.73542ZM5.23942 9.18054C5.47821 8.84208 5.94616 8.76129 6.28461 9.00008C6.78119 9.35043 7.30041 9.76836 7.81522 10.2641C8.1136 10.5514 8.12256 11.0262 7.83525 11.3246C7.54794 11.6229 7.07315 11.6319 6.77478 11.3446C6.31949 10.9062 5.85988 10.5362 5.41988 10.2257C5.08142 9.98694 5.00063 9.51899 5.23942 9.18054ZM13.836 8.99599C14.2094 8.81661 14.6574 8.97385 14.8368 9.3472C14.9605 9.60468 15.097 9.86417 15.2474 10.1247C15.3979 10.3852 15.5543 10.6332 15.7155 10.869C15.9491 11.2111 15.8612 11.6778 15.5192 11.9114C15.1772 12.145 14.7105 12.0572 14.4769 11.7151C14.2947 11.4485 14.118 11.1685 13.9484 10.8747C13.7788 10.5809 13.6246 10.2879 13.4848 9.99681C13.3054 9.62346 13.4627 9.17538 13.836 8.99599ZM8.48046 12.088C8.82249 11.8544 9.28917 11.9422 9.52281 12.2843C9.70496 12.5509 9.88164 12.8309 10.0513 13.1247C10.2209 13.4185 10.375 13.7115 10.5149 14.0026C10.6943 14.3759 10.537 14.824 10.1637 15.0034C9.79032 15.1828 9.34223 15.0256 9.16285 14.6522C9.03914 14.3947 8.90267 14.1352 8.75225 13.8747C8.60182 13.6142 8.44534 13.3662 8.28421 13.1304C8.05057 12.7883 8.13843 12.3217 8.48046 12.088ZM16.1644 12.6748C16.4517 12.3765 16.9265 12.3675 17.2249 12.6548C17.6802 13.0932 18.1398 13.4632 18.5798 13.7737C18.9183 14.0125 18.9991 14.4804 18.7603 14.8189C18.5215 15.1573 18.0535 15.2381 17.7151 14.9993C17.2185 14.649 16.6993 14.2311 16.1845 13.7353C15.8861 13.448 15.8771 12.9732 16.1644 12.6748ZM10.5022 15.9439C10.9043 15.8443 11.311 16.0894 11.4106 16.4915C11.5825 17.1852 11.6849 17.8438 11.74 18.4491C11.7776 18.8616 11.4736 19.2264 11.0611 19.264C10.6486 19.3016 10.2837 18.9976 10.2462 18.5851C10.1973 18.0488 10.1067 17.4658 9.95466 16.8523C9.85502 16.4502 10.1002 16.0436 10.5022 15.9439Z"}),v.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2859 1.32632C11.0551 1.05591 8.71992 1.48034 6.62484 2.68993C1.4832 5.65846 -0.278462 12.2331 2.69007 17.3747C5.6586 22.5164 12.2332 24.278 17.3748 21.3095C19.4699 20.0999 21.0051 18.2898 21.8863 16.2227C23.1661 13.2206 23.0684 9.67094 21.3096 6.62471C19.5509 3.57847 16.5256 1.71902 13.2859 1.32632ZM13.7802 3.08033C13.7309 3.49161 13.3576 3.7851 12.9463 3.73585C12.5351 3.68661 12.2416 3.31329 12.2908 2.90201C12.297 2.85081 12.3032 2.8013 12.3096 2.75354C10.638 2.6958 8.93097 3.09054 7.37484 3.98897C5.81951 4.88694 4.62362 6.16839 3.83764 7.64494C3.88216 7.66328 3.92814 7.68258 3.97552 7.70286C4.35631 7.86585 4.53288 8.30668 4.36989 8.68748C4.20689 9.06827 3.76606 9.24484 3.38527 9.08184C3.33556 9.06057 3.2878 9.04062 3.24212 9.02195C2.41524 11.457 2.60225 14.2226 3.98911 16.6247C5.37596 19.0268 7.67752 20.5716 10.1998 21.073C10.2065 21.0241 10.2131 20.9728 10.2195 20.9191C10.2687 20.5078 10.6421 20.2143 11.0533 20.2636C11.4646 20.3128 11.7581 20.6861 11.7089 21.0974C11.7027 21.1486 11.6965 21.198 11.6901 21.2458C13.3618 21.3034 15.0695 20.9084 16.6248 20.0104C18.181 19.112 19.3764 17.831 20.1621 16.3545C20.1176 16.3362 20.0716 16.3168 20.0242 16.2966C19.6434 16.1336 19.4668 15.6927 19.6298 15.3119C19.7928 14.9311 20.2336 14.7546 20.6144 14.9176C20.6641 14.9388 20.7119 14.9588 20.7576 14.9775C21.5849 12.5411 21.3972 9.77639 20.0106 7.37471C18.624 4.97302 16.3236 3.42808 13.7999 2.92639C13.7932 2.97529 13.7866 3.02664 13.7802 3.08033Z"})),xr=e=>v.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.1665 2.75836L21.2416 8.83351C21.2677 7.81177 21.2303 6.84352 21.1649 5.98862C21.0341 4.27797 19.722 2.96586 18.0114 2.83507C17.1565 2.76971 16.1882 2.7323 15.1665 2.75836ZM21.1071 10.8203L13.1797 2.89285C10.483 3.1978 7.77958 4.04236 5.91097 5.91097C4.04236 7.77958 3.1978 10.483 2.89285 13.1797L10.8203 21.1071C13.517 20.8022 16.2204 19.9576 18.089 18.089C19.9576 16.2204 20.8022 13.517 21.1071 10.8203ZM8.83351 21.2416L2.75836 15.1665C2.7323 16.1882 2.76971 17.1565 2.83507 18.0114C2.96587 19.722 4.27797 21.0341 5.98861 21.1649C6.84352 21.2303 7.81177 21.2677 8.83351 21.2416ZM13.3854 1.36321C15.1096 1.19733 16.7638 1.2353 18.1257 1.33944C20.5746 1.52667 22.4733 3.4254 22.6606 5.87426C22.7647 7.23618 22.8027 8.89045 22.6368 10.6146C22.3524 13.5707 21.4579 16.8414 19.1497 19.1497C16.8414 21.4579 13.5707 22.3524 10.6146 22.6368C8.89045 22.8027 7.23618 22.7647 5.87426 22.6606C3.4254 22.4733 1.52667 20.5746 1.33944 18.1257C1.2353 16.7638 1.19733 15.1096 1.36321 13.3854C1.6476 10.4293 2.54206 7.15857 4.85031 4.85031C7.15857 2.54206 10.4293 1.6476 13.3854 1.36321ZM11.9426 8.1601C12.2355 7.86721 12.7104 7.86721 13.0032 8.1601L13.8914 9.0482L14.7795 8.1601C15.0723 7.86721 15.5472 7.86721 15.8401 8.1601C16.133 8.45299 16.133 8.92787 15.8401 9.22076L14.952 10.1089L15.8401 10.997C16.133 11.2899 16.133 11.7647 15.8401 12.0576C15.5472 12.3505 15.0723 12.3505 14.7795 12.0576L13.8914 11.1695L13.0608 12.0001L13.9489 12.8882C14.2418 13.1811 14.2418 13.656 13.9489 13.9489C13.656 14.2418 13.1811 14.2418 12.8882 13.9489L12.0001 13.0608L11.1695 13.8914L12.0576 14.7795C12.3505 15.0723 12.3505 15.5472 12.0576 15.8401C11.7647 16.133 11.2899 16.133 10.997 15.8401L10.1089 14.952L9.22076 15.8401C8.92787 16.133 8.45299 16.133 8.1601 15.8401C7.86721 15.5472 7.86721 15.0723 8.1601 14.7795L9.0482 13.8914L8.1601 13.0032C7.86721 12.7104 7.86721 12.2355 8.1601 11.9426C8.45299 11.6497 8.92787 11.6497 9.22076 11.9426L10.1089 12.8307L10.9394 12.0001L10.0513 11.112C9.75845 10.8191 9.75845 10.3442 10.0513 10.0513C10.3442 9.75845 10.8191 9.75845 11.112 10.0513L12.0001 10.9394L12.8307 10.1089L11.9426 9.22076C11.6497 8.92787 11.6497 8.45299 11.9426 8.1601Z"})),fr=e=>v.createElement("svg",{fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 32 32","data-name":"Layer 1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("rect",{height:1,transform:"translate(20 51) rotate(180)",width:16,x:2,y:25}),v.createElement("rect",{height:1,transform:"translate(26 59) rotate(180)",width:16,x:5,y:29}),v.createElement("rect",{height:1,transform:"translate(39 -8) rotate(90)",width:19,x:14,y:15}),v.createElement("rect",{height:1,transform:"translate(21 10) rotate(90)",width:19,x:-4,y:15}),v.createElement("path",{d:"M24,25H23v2a2,2,0,0,1-2,2H20v1h1a3,3,0,0,0,3-3Z"}),v.createElement("path",{d:"M17,26h1v1a2,2,0,0,0,2,2h1v1H20a3,3,0,0,1-3-3Z"}),v.createElement("path",{d:"M2,26H3v1a2,2,0,0,0,2,2H6v1H5a3,3,0,0,1-3-3Z"}),v.createElement("rect",{height:1,width:6,x:24,y:6}),v.createElement("rect",{height:1,width:19,x:8,y:2}),v.createElement("path",{d:"M5,6H6V5A2,2,0,0,1,8,3H9V2H8A3,3,0,0,0,5,5Z"}),v.createElement("path",{d:"M23,6h1V5a2,2,0,0,1,2-2h1V2H26a3,3,0,0,0-3,3Z"}),v.createElement("path",{d:"M30,6H29V5a2,2,0,0,0-2-2H26V2h1a3,3,0,0,1,3,3Z"})),mr=b.div`
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
`,Cr=b.div`
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
`,yr=b.div`
  padding: 20px 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 2px solid ${({theme:e})=>e.mainBGColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme:e})=>e.ContainerBGColor};
`,wr=b.h2`
  margin: 0;
  font-size: 24px;
  color: ${({theme:e})=>e.textBlack};
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Mr=b.button`
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
`,vr=b.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`,br=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  @media (max-width: 768px) {
    gap: 6px;
  }
`,Lr=b.button`
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
`,$r=b.div`
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
`,kr=b.div`
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
`,Sr=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
`,Br=b.div`
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
`,Tr=b.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.textBlack};
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,Ir=b.div`
  font-size: 13px;
  color: ${({theme:e})=>e.textGray};
  line-height: 1.5;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,Yr=b.div`
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
`,Er=b.div`
  position: relative;
  width: ${e=>{const p=e.fieldWidth,d=e.fieldHeight,s=100/p,l=80/d,a=Math.min(s,l);return`${p*a}px`}};
  height: ${e=>{const p=e.fieldWidth,d=e.fieldHeight,s=100/p,l=80/d,a=Math.min(s,l);return`${d*a}px`}};
  background: ${({theme:e})=>e.greenMain};
  border: 2px solid ${({theme:e})=>e.darkGreen};
  border-radius: 2px;
  
  /* Гарантуємо мінімальний розмір для дуже малих полів */
  min-width: 20px;
  min-height: 20px;
`,vt=b.div`
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
`,Xr={FOOTBALL:[{id:"football_standard",name:"Стандартне поле",width:105,height:68},{id:"football_small",name:"Мале поле",width:90,height:45},{id:"football_futsal",name:"Футзал",width:40,height:20}],BASKETBALL:[{id:"basketball_nba",name:"NBA",width:28.65,height:15.24},{id:"basketball_fiba",name:"FIBA",width:28,height:15}],VOLLEYBALL:[{id:"volleyball_indoor",name:"Закритий майданчик",width:18,height:9},{id:"volleyball_beach",name:"Пляжний майданчик",width:16,height:8}],TENNIS:[{id:"tennis_singles",name:"Одиночний розряд",width:23.77,height:8.23},{id:"tennis_doubles",name:"Парний розряд",width:23.77,height:10.97}],RUGBY:[{id:"rugby_standard",name:"Регбі (15 гравців)",width:100,height:70},{id:"rugby_sevens",name:"Регбі-7",width:94,height:68}],HANDBALL:[{id:"handball_standard",name:"Гандбол",width:40,height:20}],SHEET:[{id:"a4_portrait",name:"A4 Портрет",width:21,height:29.7},{id:"a4_landscape",name:"A4 Ландшафт",width:29.7,height:21},{id:"a3_portrait",name:"A3 Портрет",width:29.7,height:42},{id:"a3_landscape",name:"A3 Ландшафт",width:42,height:29.7},{id:"a3_landscape1",name:"A3 Ландшафт",width:600,height:29.7},{id:"a3_landscape2",name:"A3 Ландшафт",width:2,height:529.7}]},Pr=[{id:"FOOTBALL",name:"Футбол",icon:Mt},{id:"RUGBY",name:"Регбі",icon:xr},{id:"BASKETBALL",name:"Баскетбол",icon:pr},{id:"VOLLEYBALL",name:"Волейбол",icon:gr},{id:"TENNIS",name:"Теніс",icon:ur},{id:"HANDBALL",name:"Гандбол",icon:Mt},{id:"SHEET",name:"Аркуш",icon:fr}],zr=({isOpen:e,onClose:t,onSelectField:r,currentFieldId:p})=>{var h;const[d,s]=v.useState("FOOTBALL"),[l,a]=v.useState(p);if(!e)return null;const C=c=>{a(c.id),r(c),setTimeout(()=>t(),300)},y=c=>{c.target===c.currentTarget&&t()},x=(c,u)=>u==="SHEET"?`${c.width}см × ${c.height}см`:`${c.width}м × ${c.height}м`,o=(c,u)=>u==="SHEET"?`${c}см`:`${c}м`;return n.jsx(mr,{onClick:y,children:n.jsxs(Cr,{children:[n.jsxs(yr,{children:[n.jsx(wr,{children:"Обрати спортивне поле"}),n.jsx(Mr,{onClick:t,children:n.jsx(fn,{})})]}),n.jsxs(vr,{children:[n.jsx(br,{children:Pr.map(c=>{const u=c.icon;return n.jsxs(Lr,{active:d===c.id,onClick:()=>s(c.id),children:[n.jsx($r,{children:n.jsx(u,{})}),c.name]},c.id)})}),n.jsx(kr,{children:n.jsx(Sr,{children:(h=Xr[d])==null?void 0:h.map(c=>n.jsxs(Br,{selected:l===c.id,onClick:()=>C(c),children:[n.jsx(Tr,{children:c.name}),n.jsx(Ir,{children:x(c,d)}),n.jsx(Yr,{children:n.jsxs(Er,{fieldWidth:c.width,fieldHeight:c.height,children:[n.jsx(vt,{className:"width",children:o(c.width,d)}),n.jsx(vt,{className:"height",children:o(c.height,d)})]})})]},c.id))})})]})]})})},Gr=b(Un)`
  width: 80%;
  height: 80%;
  stroke: ${({theme:e})=>e.textBlack};
   fill: ${({theme:e})=>e.textBlack};
`,Dr=b(Ot)`
  width: 100%;
  height: 100%;
   fill: ${({theme:e})=>e.black};
   rotate: 180deg;
`,Rr=b(qn)`
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.textBlack};
`,Zr=b(Nt)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.textBlack};
`,Fr=b(Nt)`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  fill: ${({theme:e})=>e.textBlack};
`,Ar=b(Nn)`
  width: 70%;  
  height: 70%;
  stroke: ${({theme:e})=>e.textBlack};
`,Hr=b(On)`
  width: 70%;  
  height: 70%;
  fill: ${({theme:e})=>e.textBlack};
`,Wr=b.div`
  width: 100%;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-bottom: 2px solid ${({theme:e})=>e.gray};
  padding: 12px 16px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`,_r=b.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`,jr=b.div`
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
`,Vr=b.div`
  flex-shrink: 0;
  position: relative;
  z-index: 10;
`,ae=b.button`
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

`,Nr=b.button`
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
  
`,Or=b(Vn)`
  width: 60%;
  height: 60%;
  fill: none;
  stroke: ${({theme:e})=>e.textBlack};
`,Ye=b.div`
  width: 1px;
  height: 20px;
  background: ${({theme:e})=>e.gray};
  margin: 0 4px;
  
  @media (max-width: 768px) {
    height: 16px;
  }
`,bt=b.div`
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
`,Lt=b.span`
  font-size: 11px;
  color: ${({theme:e})=>e.textGray};
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 9px;
  }
`,$t=b.input`
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
`,qr=b.input`
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
`,kt=({value:e,onChange:t,...r})=>{const[p,d]=v.useState(e),s=v.useRef(null);v.useEffect(()=>{s.current||d(e)},[e]);const l=a=>{const C=a.target.value;d(C),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{t(C),s.current=null},200)};return n.jsx(qr,{type:"color",value:p,onChange:l,...r})},Ur=({currentField:e,onSelectField:t,isSidebarOpen:r,onToggleSidebar:p})=>{const[d,s]=v.useState(!1),l=de(),{activeTool:a,team1:C,team2:y,historyIndex:x,history:o}=Te(L=>L.tacticsBoard),h=()=>{s(!0)},c=()=>{s(!1)},u=L=>{t(L),c()},g=L=>{l(Be(L))},i=L=>{l(Be(`shape_${L.id}`))},f=L=>{l(Be(`figure_${L.id}`))},m=L=>{const E=parseInt(L.target.value)||0;l(mn(Math.max(0,Math.min(30,E))))},M=L=>{l(Cn(L))},$=L=>{const E=parseInt(L.target.value)||0;l(yn(Math.max(0,Math.min(30,E))))},B=L=>{l(wn(L))},k=()=>{l(Mn())},T=()=>{l(vn())},I=()=>{window.confirm("Ви впевнені, що хочете очистити всю дошку?")&&l(bn())},S=x>0,w=x<o.length-1;return n.jsxs(n.Fragment,{children:[n.jsx(Wr,{children:n.jsxs(_r,{children:[n.jsxs(jr,{children:[n.jsx(ae,{title:"Обрати поле",onClick:h,children:n.jsx(Or,{})}),n.jsx(Ye,{}),n.jsx(ae,{title:"Курсор (виділення та переміщення)",active:a==="cursor",onClick:()=>g("cursor"),children:n.jsx(Ar,{})}),n.jsx(ae,{title:"Додати текст",active:a==="text",onClick:()=>g("text"),children:n.jsx(Gr,{})}),n.jsx(ae,{title:"Малювання",active:a==="drawing",onClick:()=>g("drawing"),children:n.jsx(Hr,{})}),n.jsx(ar,{activeTool:a,onSelectShape:i}),n.jsx(dr,{activeTool:a,onSelectFigure:f}),n.jsx(Ye,{}),n.jsxs(bt,{children:[n.jsx(Lt,{children:"К1:"}),n.jsx($t,{type:"number",min:"0",max:"30",value:C.count,onChange:m,title:"Кількість гравців команди 1"}),n.jsx(kt,{value:C.color,onChange:M,title:"Колір команди 1"})]}),n.jsxs(bt,{children:[n.jsx(Lt,{children:"К2:"}),n.jsx($t,{type:"number",min:"0",max:"30",value:y.count,onChange:$,title:"Кількість гравців команди 2"}),n.jsx(kt,{value:y.color,onChange:B,title:"Колір команди 2"})]}),n.jsx(Ye,{}),n.jsx(ae,{title:"М'яч",active:a==="ball",onClick:()=>g("ball"),children:"⚽"}),n.jsx(Ye,{}),n.jsx(ae,{title:"Назад (Undo)",onClick:k,disabled:!S,children:n.jsx(Fr,{})}),n.jsx(ae,{title:"Вперед (Redo)",onClick:T,disabled:!w,children:n.jsx(Zr,{})}),n.jsx(ae,{title:"Скасувати все",onClick:I,children:n.jsx(Rr,{})})]}),n.jsx(Vr,{children:n.jsx(Nr,{title:"Відкрити панель інструментів",active:r,onClick:p,children:n.jsx(Dr,{})})})]})}),n.jsx(zr,{isOpen:d,onClose:c,onSelectField:u,currentFieldId:e.id})]})},Jr=b.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Kr=b.div`
  display: grid;
  grid-template-columns: 40px 1fr 80px;
  gap: 8px;
  align-items: center;
`,Qr=b.div`
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
`,e1=b.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  border: 2px solid ${({theme:e})=>e.lightGreen||"#ccc"};
  cursor: pointer;
  overflow: hidden;
`,t1=b.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,n1=b.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,r1=b.input`
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
`,o1=b.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
`,i1=b.div`
  position: relative;
`,a1=b.input`
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
`,s1=b.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
  display: block;
  text-align: center;
  margin-top: 2px;
`,St=e=>Math.max(0,Math.min(1,e/100)),l1=e=>Math.round(Math.max(0,Math.min(100,e*100))),Bt=(e,t=1)=>{if(!e)return"0, 0, 0, 1";let r=e.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const p=parseInt(r.slice(0,2),16),d=parseInt(r.slice(2,4),16),s=parseInt(r.slice(4,6),16);return`${p}, ${d}, ${s}, ${t}`},Q=({color:e,opacity:t,onColorChange:r,onOpacityChange:p,label:d})=>{const[s,l]=v.useState(e||"#000000"),[a,C]=v.useState(t!==void 0?t:100),y=v.useRef(null),x=v.useRef(null),o=v.useRef(null),h=v.useMemo(()=>{const $=St(a);return Bt(s,$)},[s,a]),[c,u]=v.useState(h),g=v.useMemo(()=>{const $=St(a);return{backgroundColor:`rgba(${Bt(s,$)})`}},[s,a]);v.useEffect(()=>{x.current||(l(e||"#000000"),C(t!==void 0?t:100))},[e,t]),v.useEffect(()=>{document.activeElement!==o.current&&u(h)},[h]);const i=$=>{const B=$.target.value;l(B),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{r&&r(B),x.current=null},150)},f=$=>{const B=$.target.value;u(B);const k=B.split(",").map(T=>parseFloat(T.trim()));if(k.length>=3&&!k.some(isNaN)){const T=Math.max(0,Math.min(255,k[0]||0)),I=Math.max(0,Math.min(255,k[1]||0)),S=Math.max(0,Math.min(255,k[2]||0)),w=k[3]!==void 0?Math.max(0,Math.min(1,k[3])):1,L=`#${((1<<24)+(T<<16)+(I<<8)+S).toString(16).slice(1)}`,E=l1(w);l(L),C(E),x.current&&clearTimeout(x.current),r&&r(L),p&&p(E)}},m=$=>{let B=$.target.value,k=parseInt(B);isNaN(k)&&(k=0),k>100&&(k=100),k<0&&(k=0),C(k),p&&p(k)},M=()=>{y.current&&y.current.click()};return n.jsxs("div",{children:[d&&n.jsx(Jr,{children:d}),n.jsxs(Kr,{children:[n.jsxs(Qr,{children:[n.jsx(e1,{style:g,onClick:M}),n.jsx(t1,{ref:y,type:"color",value:s,onChange:i})]}),n.jsxs(n1,{children:[n.jsx(r1,{ref:o,type:"text",value:c,onChange:f,placeholder:"0, 0, 0, 1"}),n.jsx(o1,{children:"RGBA"})]}),n.jsxs(i1,{children:[n.jsx(a1,{type:"number",min:"0",max:"100",value:a,onChange:m}),n.jsx(s1,{children:"Прозорість %"})]})]})]})},c1=b.div`
  position: relative;
  width: 100%;
`,h1=b.button`
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
`,d1=b.div`
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
`,p1=b.div`
  padding: 6px 8px;
  font-family: ${({$fontFamily:e})=>e||"Arial"};
  cursor: pointer;
  color: ${({theme:e})=>e.textBlack};
  background-color: ${({selected:e,theme:t})=>e?t.lightGreen:"transparent"};

  &:hover {
    background-color: ${({theme:e})=>e.greenMain};
    color: ${({theme:e})=>e.white};
  }
`,g1=b(Tn)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) rotate(${({$open:e})=>e?"180deg":"0"});
  width: 20px;
  height: 20px;
  stroke: ${({theme:e})=>e.iconColor};
  transition: transform 0.3s ease;
`,ee=({value:e,onChange:t,options:r=[],placeholder:p="Оберіть..."})=>{const[d,s]=v.useState(!1),l=v.useRef(null),a=()=>s(o=>!o),C=()=>s(!1),y=o=>{t(o),C()};v.useEffect(()=>{const o=h=>{l.current&&!l.current.contains(h.target)&&C()};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[]);const x=r.find(o=>o.value===e);return n.jsxs(c1,{ref:l,children:[n.jsxs(h1,{onClick:a,$fontFamily:x==null?void 0:x.value,children:[x?x.label:p,n.jsx(g1,{$open:d})]}),d&&n.jsx(d1,{children:r.map(o=>n.jsx(p1,{onClick:()=>y(o.value),selected:o.value===e,$fontFamily:o.value,children:o.label},o.value))})]})},u1=b.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,x1=b.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,se=b.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ge=b.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,f1=b.textarea`
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
`,Ee=b.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:p})=>{const d=(e-t)/(r-t)*100;return`linear-gradient(to right, ${p.greenMain} 0%, ${p.greenMain} ${d}%, ${p.lightGreen} ${d}%, ${p.lightGreen} 100%)`}};
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
`,Xe=b.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,m1=b.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,qe=b.button`
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
`,C1=({selectedObject:e})=>{const t=de(),[r,p]=v.useState(e.text||"");v.useEffect(()=>{p(e.text||"")},[e.id,e.text]);const d=(a,C)=>{t(he({id:e.id,updates:{[a]:C}}))},s=a=>{p(a.target.value)},l=()=>{d("text",r)};return n.jsxs(u1,{children:[n.jsx(x1,{children:"Властивості тексту"}),n.jsxs(se,{children:[n.jsx(ge,{children:"Текст"}),n.jsx(f1,{value:r,onChange:s,onBlur:l,placeholder:"Введіть текст...",$fontFamily:e.fontFamily})]}),n.jsx(se,{children:n.jsx(Q,{color:e.color||"#000000",opacity:e.opacity||100,onColorChange:a=>d("color",a),onOpacityChange:a=>d("opacity",a),label:"Колір і прозорість"})}),n.jsxs(se,{children:[n.jsxs(ge,{children:["Розмір шрифту",n.jsxs(Xe,{children:[e.fontSize||16,"px"]})]}),n.jsx(Ee,{type:"range",min:"8",max:"200",value:e.fontSize||16,onChange:a=>d("fontSize",Number(a.target.value))})]}),n.jsxs(se,{children:[n.jsx(ge,{children:"Тип шрифту"}),n.jsx(ee,{value:e.fontFamily||"Arial",onChange:a=>d("fontFamily",a),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(se,{children:[n.jsx(ge,{children:"Стиль тексту"}),n.jsxs(m1,{children:[n.jsx(qe,{$active:e.fontWeight==="bold",onClick:()=>d("fontWeight",e.fontWeight==="bold"?"normal":"bold"),children:n.jsx("strong",{children:"B"})}),n.jsx(qe,{$active:e.fontStyle==="italic",onClick:()=>d("fontStyle",e.fontStyle==="italic"?"normal":"italic"),children:n.jsx("em",{children:"I"})}),n.jsx(qe,{$active:e.textDecoration==="underline",onClick:()=>d("textDecoration",e.textDecoration==="underline"?"none":"underline"),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(se,{children:[n.jsxs(ge,{children:["Міжрядковий інтервал",n.jsx(Xe,{children:(e.lineHeight||1.5).toFixed(1)})]}),n.jsx(Ee,{type:"range",min:"0.8",max:"3",step:"0.1",value:e.lineHeight||1.5,onChange:a=>d("lineHeight",Number(a.target.value))})]}),n.jsxs(se,{children:[n.jsxs(ge,{children:["Міжлітерний інтервал",n.jsxs(Xe,{children:[e.letterSpacing||0,"px"]})]}),n.jsx(Ee,{type:"range",min:"-2",max:"10",step:"0.5",value:e.letterSpacing||0,onChange:a=>d("letterSpacing",Number(a.target.value))})]}),n.jsxs(se,{children:[n.jsxs(ge,{children:["Поворот тексту",n.jsxs(Xe,{children:[e.rotation||0,"°"]})]}),n.jsx(Ee,{type:"range",min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:a=>d("rotation",Number(a.target.value))})]})]})},y1=b.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,w1=b.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,me=b.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Pe=b.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,M1=b.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:p})=>{const d=(e-t)/(r-t)*100;return`linear-gradient(to right, ${p.greenMain} 0%, ${p.greenMain} ${d}%, ${p.lightGreen} ${d}%, ${p.lightGreen} 100%)`}};
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
`,v1=b.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,b1=b.p`
  font-size: 12px;
  color: ${({theme:e})=>e.textGray||"#777"};
  margin: 8px 0 0 0;
  font-style: italic;
`,L1=()=>{const e=de(),{shapeBorderColor:t,shapeBorderOpacity:r,shapeFillColor:p,shapeFillOpacity:d,shapeBorderWidth:s,shapeBorderStyle:l,shapeLineCapStart:a,shapeLineCapEnd:C,activeTool:y}=Te(o=>o.tacticsBoard),x=y==="shape_line"||y==="shape_arrow";return n.jsxs(y1,{children:[n.jsx(w1,{children:"Налаштування фігури"}),n.jsx(me,{children:n.jsx(Q,{color:t,opacity:r,onColorChange:o=>e(Dt(o)),onOpacityChange:o=>e(Rt(o)),label:x?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(me,{children:[n.jsxs(Pe,{children:[x?"Товщина лінії":"Товщина обводки",n.jsxs(v1,{children:[s,"px"]})]}),n.jsx(M1,{type:"range",min:"1",max:"20",value:s,onChange:o=>e(Zt(Number(o.target.value)))})]}),n.jsxs(me,{children:[n.jsx(Pe,{children:"Тип обводки"}),n.jsx(ee,{value:l,onChange:o=>e(Ft(o)),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),x&&n.jsxs(n.Fragment,{children:[n.jsxs(me,{children:[n.jsx(Pe,{children:"Початок лінії"}),n.jsx(ee,{value:a,onChange:o=>e(At(o)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(me,{children:[n.jsx(Pe,{children:"Кінець лінії"}),n.jsx(ee,{value:C||(y==="shape_arrow"?"arrow":"butt"),onChange:o=>e(Ht(o)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!x&&n.jsx(me,{children:n.jsx(Q,{color:p,opacity:d,onColorChange:o=>e(Wt(o)),onOpacityChange:o=>e(_t(o)),label:"Колір заливки і прозорість"})}),n.jsx(b1,{children:x?"Клікніть і потягніть, щоб намалювати лінію.":"Клікніть і потягніть, щоб намалювати фігуру."})]})},$1=b.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,k1=b.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,le=b.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ce=b.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Tt=b.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:p})=>{const d=(e-t)/(r-t)*100;return`linear-gradient(to right, ${p.greenMain} 0%, ${p.greenMain} ${d}%, ${p.lightGreen} ${d}%, ${p.lightGreen} 100%)`}};
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
`,It=b.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,S1=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,Ue=b.input`
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
`,ve=8,B1=({selectedObject:e})=>{const t=de(),r=(l,a)=>{t(he({id:e.id,updates:{[l]:a}}))},p=(l,a)=>{let C=Number(a);C<ve&&(C=ve);const y=(e[l]||1)<0?-1:1;C*=y,e.shape==="circle"?t(he({id:e.id,updates:{width:C,height:C}})):r(l,C)},d=e.shape==="line"||e.shape==="arrow",s=e.shape==="circle";return n.jsxs($1,{children:[n.jsx(k1,{children:"Властивості фігури"}),!d&&n.jsxs(le,{children:[n.jsx(ce,{children:s?"Діаметр":"Розміри"}),s?n.jsx(Ue,{type:"number",min:ve,value:Math.abs(e.width||50),onChange:l=>p("width",l.target.value)}):n.jsxs(S1,{children:[n.jsxs("div",{children:[n.jsx(ce,{style:{fontSize:"10px",marginBottom:"4px"},children:"Ширина"}),n.jsx(Ue,{type:"number",min:ve,value:Math.abs(e.width||50),onChange:l=>p("width",l.target.value)})]}),n.jsxs("div",{children:[n.jsx(ce,{style:{fontSize:"10px",marginBottom:"4px"},children:"Висота"}),n.jsx(Ue,{type:"number",min:ve,value:Math.abs(e.height||30),onChange:l=>p("height",l.target.value)})]})]})]}),n.jsxs(le,{children:[n.jsxs(ce,{children:["Кут повороту",n.jsxs(It,{children:[e.rotation||0,"º"]})]}),n.jsx(Tt,{type:"range",min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:l=>r("rotation",Number(l.target.value))})]}),n.jsx(le,{children:n.jsx(Q,{color:e.borderColor||e.color||"#000000",opacity:e.borderOpacity!==void 0?e.borderOpacity:100,onColorChange:l=>r("borderColor",l),onOpacityChange:l=>r("borderOpacity",l),label:d?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(le,{children:[n.jsxs(ce,{children:[d?"Товщина лінії":"Товщина обводки",n.jsxs(It,{children:[e.borderWidth||2,"px"]})]}),n.jsx(Tt,{type:"range",min:"1",max:"20",value:e.borderWidth||2,onChange:l=>r("borderWidth",Number(l.target.value))})]}),n.jsxs(le,{children:[n.jsx(ce,{children:"Тип обводки"}),n.jsx(ee,{value:e.borderStyle||"solid",onChange:l=>r("borderStyle",l),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),d&&n.jsxs(n.Fragment,{children:[n.jsxs(le,{children:[n.jsx(ce,{children:"Початок лінії"}),n.jsx(ee,{value:e.lineCapStart||"butt",onChange:l=>r("lineCapStart",l),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(le,{children:[n.jsx(ce,{children:"Кінець лінії"}),n.jsx(ee,{value:e.lineCapEnd||(e.shape==="arrow"?"arrow":"butt"),onChange:l=>r("lineCapEnd",l),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!d&&n.jsx(le,{children:n.jsx(Q,{color:e.fillColor||"#ffffff",opacity:e.fillOpacity!==void 0?e.fillOpacity:0,onColorChange:l=>r("fillColor",l),onOpacityChange:l=>r("fillOpacity",l),label:"Колір заливки і прозорість"})})]})},T1=b.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,I1=b.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Ce=b.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ze=b.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Y1=b.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:p})=>{const d=(e-t)/(r-t)*100;return`linear-gradient(to right, ${p.greenMain} 0%, ${p.greenMain} ${d}%, ${p.lightGreen} ${d}%, ${p.lightGreen} 100%)`}};
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
`,E1=b.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,X1=b.p`
  font-size: 12px;
  color: ${({theme:e})=>e.textGray||"#777"};
  margin: 8px 0 0 0;
  font-style: italic;
`,P1=()=>{const e=de(),{shapeBorderColor:t,shapeBorderOpacity:r,shapeFillColor:p,shapeFillOpacity:d,shapeBorderWidth:s,shapeBorderStyle:l,shapeLineCapStart:a,shapeLineCapEnd:C,activeTool:y}=Te(o=>o.tacticsBoard),x=y==="shape_line"||y==="shape_arrow";return n.jsxs(T1,{children:[n.jsx(I1,{children:"Налаштування фігури"}),n.jsx(Ce,{children:n.jsx(Q,{color:t,opacity:r,onColorChange:o=>e(Dt(o)),onOpacityChange:o=>e(Rt(o)),label:x?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(Ce,{children:[n.jsxs(ze,{children:[x?"Товщина лінії":"Товщина обводки",n.jsxs(E1,{children:[s,"px"]})]}),n.jsx(Y1,{type:"range",min:"1",max:"20",value:s,onChange:o=>e(Zt(Number(o.target.value)))})]}),n.jsxs(Ce,{children:[n.jsx(ze,{children:"Тип обводки"}),n.jsx(ee,{value:l,onChange:o=>e(Ft(o)),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),x&&n.jsxs(n.Fragment,{children:[n.jsxs(Ce,{children:[n.jsx(ze,{children:"Початок лінії"}),n.jsx(ee,{value:a,onChange:o=>e(At(o)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"perp",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(Ce,{children:[n.jsx(ze,{children:"Кінець лінії"}),n.jsx(ee,{value:C||(y==="shape_arrow"?"arrow":"butt"),onChange:o=>e(Ht(o)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"perp",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!x&&n.jsx(Ce,{children:n.jsx(Q,{color:p,opacity:d,onColorChange:o=>e(Wt(o)),onOpacityChange:o=>e(_t(o)),label:"Колір заливки і прозорість"})}),n.jsx(X1,{children:x?"Клікніть і потягніть, щоб намалювати лінію.":"Клікніть і потягніть, щоб намалювати фігуру."})]})},be=b.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,Le=b.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,K=b.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,ue=b.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Yt=b.input`
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
`,Ge=b.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:p})=>{const d=(e-t)/(r-t)*100;return`linear-gradient(to right, ${p.greenMain} 0%, ${p.greenMain} ${d}%, ${p.lightGreen} ${d}%, ${p.lightGreen} 100%)`}};
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
`,De=b.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,z1=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
  margin-top: 10px;
`,G1=b.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 10px;
  background: ${({theme:e})=>e.ContainerBGColor||"#f5f5f5"}; 
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); 
  border-radius: 8px; 
  border: 1px solid ${({theme:e})=>e.lightGreen||"#e0e0e0"}; 
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`,D1=b.div`
  width: 30px; 
  height: 45px;
  background: ${({$color:e})=>e};
  border: 2px solid ${({$borderColor:e})=>e}; 
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); 
`,R1=b.div`
  display: flex;
  flex-direction: row; 
  gap: 15px; 
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`,Et=b.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,Xt=b.input.attrs({type:"color"})`
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
    border: 1px solid ${({theme:e})=>e.lightGreen||"#ccc"}; 
    border-radius: 4px;
  }
  &::-moz-color-swatch {
    border: 1px solid ${({theme:e})=>e.lightGreen||"#ccc"};
    border-radius: 4px;
  }
`,Pt=b.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.textGray||"#666"};
  min-width: 45px; 
`,Z1=b.button`
  width: 35px; 
  height: 35px;
  background: #ff5252; 
  color: ${({theme:e})=>e.white};
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
`,F1=b.button`
  width: 100%;
  padding: 10px;
  background: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  border: none;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: ${({theme:e})=>e.darkGreen};
  }
  &:disabled {
    background: ${({theme:e})=>e.lightGreen};
    cursor: not-allowed;
    opacity: 0.5;
  }
`,A1=b.span`
  font-size: 10px;
  color: ${({theme:e,$over:t})=>t?e.red:e.textGray};
  margin-top: 4px;
  display: block;
`,zt=8,Gt=50,Re=100,$e=3,H1=({selectedObject:e})=>{const t=de(),r=(w,L)=>{t(he({id:e.id,updates:{[w]:L}}))},p=w=>{let L=Number(w);L=Math.max(zt,Math.min(Gt,L)),r("radius",L)},d=w=>{const L=Math.max(0,Math.min(99,Number(w)||0));r("number",L)},s=w=>{w.length<=Re&&r("topText",w)},l=()=>{const w=e.cards||[];if(w.length<$e){const L=[...w,{color:"#FFD700",cardBorderColor:"#000000"}];r("cards",L)}},a=w=>{const E=(e.cards||[]).filter((Y,G)=>G!==w);r("cards",E)},C=(w,L)=>{const Y=[...e.cards||[]];Y[w]={...Y[w],color:L},r("cards",Y)},y=(w,L)=>{const Y=[...e.cards||[]];Y[w]={...Y[w],cardBorderColor:L},r("cards",Y)},x=e.radius||20,o=e.number!==void 0?e.number:1,h=e.topText||"",c=e.rotation||0,u=e.color||"#ff0000",g=e.colorOpacity!==void 0?e.colorOpacity:100,i=e.numberColor||"#ffffff",f=e.numberOpacity!==void 0?e.numberOpacity:100,m=e.textColor||"#000000",M=e.textOpacity!==void 0?e.textOpacity:100,$=e.textSize||Math.max(10,x*.5),B=e.borderWidth||2,k=e.borderColor||"#000000",T=e.borderOpacity!==void 0?e.borderOpacity:100,I=e.borderStyle||"solid",S=e.cards||[];return n.jsxs(n.Fragment,{children:[n.jsxs(be,{children:[n.jsx(Le,{children:"Розмір та позиція"}),n.jsxs(K,{children:[n.jsxs(ue,{children:["Розмір гравця (8-50px)",n.jsxs(De,{children:[x,"px"]})]}),n.jsx(Ge,{min:zt,max:Gt,value:x,onChange:w=>p(w.target.value)})]}),n.jsxs(K,{children:[n.jsxs(ue,{children:["Кут повороту",n.jsxs(De,{children:[c,"º"]})]}),n.jsx(Ge,{min:"-180",max:"180",step:"5",value:c,onChange:w=>r("rotation",Number(w.target.value))})]}),n.jsx(K,{children:n.jsx(Q,{color:u,opacity:g,onColorChange:w=>r("color",w),onOpacityChange:w=>r("colorOpacity",w),label:"Колір гравця"})})]}),n.jsxs(be,{children:[n.jsx(Le,{children:"Номер гравця"}),n.jsxs(K,{children:[n.jsx(ue,{children:"Номер гравця (0-99)"}),n.jsx(Yt,{type:"number",min:"0",max:"99",value:o,onChange:w=>d(w.target.value)})]}),n.jsx(K,{children:n.jsx(Q,{color:i,opacity:f,onColorChange:w=>r("numberColor",w),onOpacityChange:w=>r("numberOpacity",w),label:"Колір номера"})})]}),n.jsxs(be,{children:[n.jsx(Le,{children:"Текст над гравцем"}),n.jsxs(K,{children:[n.jsx(ue,{children:"Текст"}),n.jsx(Yt,{type:"text",maxLength:Re,placeholder:"Введіть текст",value:h,onChange:w=>s(w.target.value)}),n.jsxs(A1,{$over:h.length>Re,children:[h.length,"/",Re," символів"]})]}),h&&n.jsxs(n.Fragment,{children:[n.jsxs(K,{children:[n.jsxs(ue,{children:["Розмір тексту",n.jsxs(De,{children:[$,"px"]})]}),n.jsx(Ge,{min:"8",max:"40",value:$,onChange:w=>r("textSize",Number(w.target.value))})]}),n.jsx(K,{children:n.jsx(Q,{color:m,opacity:M,onColorChange:w=>r("textColor",w),onOpacityChange:w=>r("textOpacity",w),label:"Колір тексту"})})]})]}),n.jsxs(be,{children:[n.jsx(Le,{children:"Обводка"}),n.jsx(K,{children:n.jsx(Q,{color:k,opacity:T,onColorChange:w=>r("borderColor",w),onOpacityChange:w=>r("borderOpacity",w),label:"Колір обводки"})}),n.jsxs(K,{children:[n.jsxs(ue,{children:["Товщина обводки",n.jsxs(De,{children:[B,"px"]})]}),n.jsx(Ge,{min:"1",max:"10",value:B,onChange:w=>r("borderWidth",Number(w.target.value))})]}),n.jsxs(K,{children:[n.jsx(ue,{children:"Тип обводки"}),n.jsx(ee,{value:I,onChange:w=>r("borderStyle",w),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]}),n.jsxs(be,{children:[n.jsxs(Le,{children:["Картки (",S.length,"/",$e,")"]}),S.length>0&&n.jsx(z1,{children:S.map((w,L)=>n.jsxs(G1,{children:[n.jsx(D1,{$color:w.color,$borderColor:w.cardBorderColor||"#000000"}),n.jsxs(R1,{children:[n.jsxs(Et,{title:"Колір заливки картки",children:[n.jsx(Pt,{children:"Заливка:"}),n.jsx(Xt,{value:w.color,onChange:E=>C(L,E.target.value)})]}),n.jsxs(Et,{title:"Колір обводки картки",children:[n.jsx(Pt,{children:"Обводка:"}),n.jsx(Xt,{value:w.cardBorderColor||"#000000",onChange:E=>y(L,E.target.value)})]})]}),n.jsx(Z1,{onClick:()=>a(L),title:"Видалити картку",children:n.jsx(In,{})})]},L))}),n.jsx(K,{style:{marginTop:S.length>0?"15px":"0"},children:n.jsx(F1,{onClick:l,disabled:S.length>=$e,children:S.length>=$e?`Максимум ${$e} картки`:"Додати картку"})})]})]})},W1=b(Ot)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.black};
`,_1=b.div`
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
`,j1=b.div`
  padding: 16px;
  height: calc(100% - 48px);
`,V1=b.button`
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
`,N1=b.div`
  text-align: center;
  padding: 40px 20px;
  color: ${({theme:e})=>e.textGray||"#999"};
  font-size: 14px;
`,ke=b.button`
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
`,O1=({isOpen:e,onClose:t})=>{const r=de(),{activeTool:p,selectedObjectId:d,objects:s,paths:l}=Te(x=>x.tacticsBoard),a=d?d.startsWith("path_")?{...l[parseInt(d.replace("path_",""))],type:"path",id:d}:s.find(x=>x.id===d):null,C=()=>{if(d){if(d.startsWith("path_")){const x=parseInt(d.replace("path_",""));r(Ln(x))}else r($n(d));r(Se())}},y=()=>{if(a)switch(a.type){case"text":return n.jsxs(n.Fragment,{children:[n.jsx(C1,{selectedObject:a}),n.jsx(ke,{onClick:C,children:"Видалити текст"})]});case"player":return n.jsxs(n.Fragment,{children:[n.jsx(H1,{selectedObject:a}),n.jsx(ke,{onClick:C,children:"Видалити гравця"})]});case"path":return n.jsx(ke,{onClick:C,children:"Видалити малюнок"});case"shape":return n.jsxs(n.Fragment,{children:[n.jsx(B1,{selectedObject:a}),n.jsx(ke,{onClick:C,children:"Видалити фігуру"})]});default:return n.jsx(ke,{onClick:C,children:"Видалити об'єкт"})}switch(p){case"text":return n.jsx(L1,{});case"shape_rectangle":case"shape_circle":case"shape_triangle":case"shape_line":case"shape_arrow":return n.jsx(P1,{});default:return n.jsxs(N1,{children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎯"}),n.jsx("p",{children:"Виберіть інструмент або об'єкт"}),n.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px",fontStyle:"italic"},children:"Налаштування з'являться тут"})]})}};return n.jsxs(_1,{$isOpen:e,children:[n.jsx(V1,{title:"Закрити панель інструментів",onClick:t,children:n.jsx(W1,{})}),n.jsx(j1,{children:y()})]})},q1=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: ${({theme:e})=>e.mainBGColor};
`,U1=b.div`
  background: ${({theme:e})=>e.ContainerBGColor};
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`,J1=b.div`
  width: 100%;
`,no=({theme:e})=>{const{setTitle:t}=kn(),[r,p]=v.useState(!1),[d,s]=v.useState({id:"football_standard",name:"Стандартне футбольне поле",width:105,height:68}),l=y=>{s(y)},a=()=>{p(!r)},C=()=>{p(!1)};return v.useEffect(()=>{t("Тактична дошка")},[t]),n.jsx(Sn,{store:Bn,children:n.jsx(q1,{children:n.jsxs(U1,{children:[n.jsx(Ur,{currentField:d,onSelectField:l,isSidebarOpen:r,onToggleSidebar:a}),n.jsx(J1,{children:n.jsx(jn,{fieldSize:{width:d.width,height:d.height},fieldType:d.id})}),n.jsx(O1,{isOpen:r,onClose:C,children:n.jsx("div",{children:"Тут будуть інструменти"})})]})})})};export{no as default};
