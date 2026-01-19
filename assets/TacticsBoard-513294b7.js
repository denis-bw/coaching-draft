import{r as C,d as w,b as ge,a as Ye,_ as Zn,$ as ht,a0 as Se,a1 as ze,a2 as An,a3 as Fn,a4 as Ve,j as n,a5 as It,a6 as Hn,a7 as je,W as Et,S as Wn,a8 as _n,a9 as Vn,aa as jn,ab as On,ac as Nn,ad as qn,ae as Jn,af as Un,ag as Pt,ah as Kn,ai as Qn,aj as er,ak as on,al as an,am as sn,an as ln,ao as cn,ap as dn,aq as hn,ar as pn,as as tr,at as nr,u as rr,au as or,av as ir}from"./index-634897fe.js";import{S as ar}from"./ChevronDownicon-308511e4.js";import{S as sr}from"./DeleteIcon-7844873f.js";const Je=(e,t,r,h,a)=>{const o=Math.cos(a),i=Math.sin(a),c=e-r,p=t-h;return{x:r+(c*o-p*i),y:h+(c*i+p*o)}},ae=(e,t)=>{if(e.type==="player"){const r=e.radius||20,a=(e.rotation||0)*Math.PI/180;let o=e.x-r,i=e.x+r,c=e.y-r,p=e.y+r;if(e.topText){const g=e.textSize||Math.max(10,r*.5),f=g,l=e.topText.length*g*.6,d=-(r+f);[{x:-l/2,y:d-f*.2},{x:l/2,y:d-f*.2},{x:-l/2,y:d},{x:l/2,y:d}].forEach(u=>{const m=u.x*Math.cos(a)-u.y*Math.sin(a),x=u.x*Math.sin(a)+u.y*Math.cos(a);o=Math.min(o,e.x+m),i=Math.max(i,e.x+m),c=Math.min(c,e.y+x),p=Math.max(p,e.y+x)})}if(e.cards&&e.cards.length>0){const g=r*.35,f=g*1.4,l=2,d=Math.PI/4,s=Math.cos(d)*r*.7,u=Math.sin(d)*r*.7,m=e.cards.length-1,x=s-m*(g+l);[{x:x-g,y:u},{x:s,y:u},{x:x-g,y:u+f},{x:s,y:u+f}].forEach(y=>{const b=y.x*Math.cos(a)-y.y*Math.sin(a),L=y.x*Math.sin(a)+y.y*Math.cos(a);o=Math.min(o,e.x+b),i=Math.max(i,e.x+b),c=Math.min(c,e.y+L),p=Math.max(p,e.y+L)})}return{x:e.x-r,y:e.y-r,width:r*2,height:r*2,centerX:e.x,centerY:e.y}}if(e.type==="ball"){const r=e.radius||10;return{x:e.x-r,y:e.y-r,width:r*2,height:r*2,centerX:e.x,centerY:e.y}}if(e.type==="shape"){if(e.shape==="line"||e.shape==="arrow"){const c=e.rotation||0;if(c!==0){const d=c*Math.PI/180,s=(e.startX+e.endX)/2,u=(e.startY+e.endY)/2,m=Je(e.startX,e.startY,s,u,d),x=Je(e.endX,e.endY,s,u,d),M=Math.min(m.x,x.x),y=Math.max(m.x,x.x),b=Math.min(m.y,x.y),L=Math.max(m.y,x.y);return{x:M,y:b,width:y-M,height:L-b,startX:m.x,startY:m.y,endX:x.x,endY:x.y,originalStartX:e.startX,originalStartY:e.startY,originalEndX:e.endX,originalEndY:e.endY,centerX:s,centerY:u,rotation:c,rotatedCorners:[m,x]}}const p=Math.min(e.startX,e.endX),g=Math.max(e.startX,e.endX),f=Math.min(e.startY,e.endY),l=Math.max(e.startY,e.endY);return{x:p,y:f,width:g-p,height:l-f,startX:e.startX,startY:e.startY,endX:e.endX,endY:e.endY,rotation:e.rotation||0}}const r=e.width||50,h=e.height||30,a=e.rotation||0;if(e.shape==="circle"){const c=Math.max(Math.abs(r),Math.abs(h)),p=e.x+r/2,g=e.y+h/2;return{x:p-c/2,y:g-c/2,width:c,height:c,centerX:p,centerY:g,radius:c/2,originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:h,rotation:a}}if(a!==0){const c=a*Math.PI/180,p=e.x+r/2,g=e.y+h/2,l=[{x:e.x,y:e.y},{x:e.x+r,y:e.y},{x:e.x+r,y:e.y+h},{x:e.x,y:e.y+h}].map(x=>Je(x.x,x.y,p,g,c));let d=l[0].x,s=l[0].x,u=l[0].y,m=l[0].y;return l.forEach(x=>{d=Math.min(d,x.x),s=Math.max(s,x.x),u=Math.min(u,x.y),m=Math.max(m,x.y)}),{x:d,y:u,width:s-d,height:m-u,centerX:p,centerY:g,originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:h,rotation:a,rotatedCorners:l}}const o=r<0?e.x+r:e.x,i=h<0?e.y+h:e.y;return{x:o,y:i,width:Math.abs(r),height:Math.abs(h),originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:h,rotation:a}}if(e.type==="figure"){const r=e.size||30;return{x:e.x-r/2,y:e.y-r/2,width:r,height:r,centerX:e.x,centerY:e.y}}if(e.type==="path"){if(!e.points||e.points.length===0)return null;let r=e.points[0].x,h=e.points[0].y,a=e.points[0].x,o=e.points[0].y;return e.points.forEach(i=>{r=Math.min(r,i.x),h=Math.min(h,i.y),a=Math.max(a,i.x),o=Math.max(o,i.y)}),{x:r,y:h,width:a-r,height:o-h,points:e.points,centerX:(r+a)/2,centerY:(h+o)/2}}if(e.type==="text"){if(t){const a=t.getContext("2d"),o=e.fontWeight||"normal",i=e.fontStyle||"normal",c=e.fontSize||16,p=e.fontFamily||"Arial";a.font=`${i} ${o} ${c}px ${p}`;const g=(e.text||"").split(`
`),f=(e.lineHeight||1.5)*c,l=e.letterSpacing||0;let d=0;g.forEach(M=>{let b=a.measureText(M).width;l!==0&&(b+=l*(M.length-1)),b>d&&(d=b)});const s=g.length>0?(g.length-1)*f+c:0,u=e.rotation||0,m=e.x+d/2,x=e.y+s/2;if(u!==0){const M=u*Math.PI/180,b=[{x:e.x,y:e.y},{x:e.x+d,y:e.y},{x:e.x+d,y:e.y+s},{x:e.x,y:e.y+s}].map(k=>Je(k.x,k.y,m,x,M));let L=b[0].x,T=b[0].x,S=b[0].y,I=b[0].y;return b.forEach(k=>{L=Math.min(L,k.x),T=Math.max(T,k.x),S=Math.min(S,k.y),I=Math.max(I,k.y)}),{x:L,y:S,width:T-L,height:I-S,centerX:m,centerY:x,originalX:e.x,originalY:e.y,originalWidth:d,originalHeight:s,rotation:u,rotatedCorners:b}}return{x:e.x,y:e.y,width:d,height:s,centerX:m,centerY:x,originalX:e.x,originalY:e.y,originalWidth:d,originalHeight:s,rotation:0}}const r=e.width||100,h=e.height||20;return{x:e.x,y:e.y,width:r,height:h,centerX:e.x+r/2,centerY:e.y+h/2}}return null},ft=(e,t,r)=>{if(!r)return!1;if(r.rotatedCorners&&r.rotatedCorners.length>0){const h=r.rotatedCorners;let a=!1;for(let o=0,i=h.length-1;o<h.length;i=o++){const c=h[o].x,p=h[o].y,g=h[i].x,f=h[i].y;p>t!=f>t&&e<(g-c)*(t-p)/(f-p)+c&&(a=!a)}return a}return e>=r.x&&e<=r.x+r.width&&t>=r.y&&t<=r.y+r.height},Rt=(e,t,r,h=10,a)=>{const o=ae(r,a);if(!o)return!1;if(r.type==="path"){const i=Math.max(h,10);for(let c=0;c<r.points.length-1;c++){const p=r.points[c],g=r.points[c+1],f=g.x-p.x,l=g.y-p.y,d=Math.sqrt(f*f+l*l);if(d===0)continue;const s=Math.max(0,Math.min(1,((e-p.x)*f+(t-p.y)*l)/(d*d))),u=p.x+s*f,m=p.y+s*l;if(Math.sqrt(Math.pow(e-u,2)+Math.pow(t-m,2))<=i)return!0}return!1}if(r.type==="shape"&&(r.shape==="line"||r.shape==="arrow")){const c=o.endX-o.startX,p=o.endY-o.startY,g=Math.sqrt(c*c+p*p);if(g===0)return!1;const f=Math.max(0,Math.min(1,((e-o.startX)*c+(t-o.startY)*p)/(g*g))),l=o.startX+f*c,d=o.startY+f*p;return Math.sqrt(Math.pow(e-l,2)+Math.pow(t-d,2))<=10}if(r.type==="shape"&&r.shape==="circle"){const i=o.centerX||o.x+o.width/2,c=o.centerY||o.y+o.height/2,p=o.radius||Math.max(o.width,o.height)/2;return Math.sqrt(Math.pow(e-i,2)+Math.pow(t-c,2))<=p}return ft(e,t,o)},un=(e,t)=>{if(t&&t.type==="shape"&&(t.shape==="line"||t.shape==="arrow"))return{start:{x:e.startX,y:e.startY,cursor:"crosshair"},end:{x:e.endX,y:e.endY,cursor:"crosshair"}};if(t&&t.type==="path")return{};if(t&&t.type==="text"){if(e.rotatedCorners&&e.rotatedCorners.length===4){const r=e.rotatedCorners;return{topLeft:{x:r[0].x,y:r[0].y,cursor:"nwse-resize"},topRight:{x:r[1].x,y:r[1].y,cursor:"nesw-resize"},bottomRight:{x:r[2].x,y:r[2].y,cursor:"nwse-resize"},bottomLeft:{x:r[3].x,y:r[3].y,cursor:"nesw-resize"}}}return{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"}}}if(e.rotatedCorners&&e.rotatedCorners.length===4){const r=e.rotatedCorners;return{topLeft:{x:r[0].x,y:r[0].y,cursor:"nwse-resize"},topRight:{x:r[1].x,y:r[1].y,cursor:"nesw-resize"},bottomRight:{x:r[2].x,y:r[2].y,cursor:"nwse-resize"},bottomLeft:{x:r[3].x,y:r[3].y,cursor:"nesw-resize"},top:{x:(r[0].x+r[1].x)/2,y:(r[0].y+r[1].y)/2,cursor:"ns-resize"},bottom:{x:(r[2].x+r[3].x)/2,y:(r[2].y+r[3].y)/2,cursor:"ns-resize"},left:{x:(r[0].x+r[3].x)/2,y:(r[0].y+r[3].y)/2,cursor:"ew-resize"},right:{x:(r[1].x+r[2].x)/2,y:(r[1].y+r[2].y)/2,cursor:"ew-resize"}}}return{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"},top:{x:e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.y+e.height/2,cursor:"ew-resize"}}},zt=(e,t,r,h)=>{const a=un(r,h),o=8;for(const[i,c]of Object.entries(a))if(h&&h.type==="shape"&&(h.shape==="line"||h.shape==="arrow")){if(Math.sqrt(Math.pow(e-c.x,2)+Math.pow(t-c.y,2))<=o*2)return{name:i,...c}}else if(Math.abs(e-c.x)<=o&&Math.abs(t-c.y)<=o)return{name:i,...c};return null},gn=(e,t,r,h,a,o)=>{for(let i=r.length-1;i>=0;i--)if(Rt(e,t,r[i],a,o))return r[i];for(let i=h.length-1;i>=0;i--){const c={...h[i],type:"path",id:`path_${i}`};if(Rt(e,t,c,a,o))return c}return null},xn=(e,t=1)=>{if(!e)return"rgba(0, 0, 0, 1)";let r=e.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const h=parseInt(r.slice(0,2),16),a=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${h}, ${a}, ${o}, ${t})`},ke=e=>{let t=e.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}},te=e=>{const t=Math.sin(e)*1e4;return t-Math.floor(t)},mt=(e,t,r,h,a,o)=>{const i=Math.max(1,Math.floor(h*1.5));for(let c=0;c<i;c++){const p=te(t*r*c)*Math.PI*2,g=Math.sqrt(te(t+r+c))*h,f=Math.cos(p)*g,l=Math.sin(p)*g,d=o*(.2+te(c)*.7);e.fillStyle=`rgba(${a.r}, ${a.g}, ${a.b}, ${d})`;const s=.5+te(c*2);e.beginPath(),e.arc(t+f,r+l,s,0,Math.PI*2),e.fill()}},lr=(e,t,r,h,a,o)=>{e.lineCap="round",e.lineJoin="round";const i=ke(h),c=Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2)),p=Math.max(1,o*.2),g=Math.ceil(c/p);for(let f=0;f<g;f++){const l=f/g,d=t.x+(r.x-t.x)*l,s=t.y+(r.y-t.y)*l,u=(te(d*s)-.5)*.5;mt(e,d+u,s+u,o/2,i,a)}},yt=(e,t,r,h,a,o)=>{const i=ke(h);e.lineCap="butt",e.lineJoin="round";const c=Math.max(12,o*1.5),p=o*.8;for(let g=0;g<c;g++){const f=(g/c-.5)*p,l=a*(.8+te(g)*.2);e.strokeStyle=`rgba(${i.r}, ${i.g}, ${i.b}, ${l})`,e.lineWidth=o/c*2,e.beginPath();const d=te(t.x*g)-.5,s=te(r.x*g)-.5;e.moveTo(t.x+f+d,t.y+f+d),e.lineTo(r.x+f+s,r.y+f+s),e.stroke()}},fn=(e,t,r,h,a,o)=>{const i=ke(h);e.lineCap="butt";const c=Math.max(6,o),p=Math.PI/4,g=Math.cos(p)*o,f=Math.sin(p)*o;for(let l=0;l<c;l++){const d=l/(c-1),s=g*(d-.5),u=f*(d-.5);e.strokeStyle=`rgba(${i.r}, ${i.g}, ${i.b}, ${a})`,e.lineWidth=1.5,e.beginPath(),e.moveTo(t.x+s,t.y+u),e.lineTo(r.x+s,r.y+u),e.stroke()}},mn=(e,t,r,h,a,o)=>{e.lineCap="round",e.lineJoin="round";const i=ke(h);[{widthMult:1.5,alphaMult:.15},{widthMult:1.2,alphaMult:.25},{widthMult:1,alphaMult:.35},{widthMult:.7,alphaMult:.45}].forEach((p,g)=>{const f=Math.max(3,Math.floor(o*.2));for(let l=0;l<f;l++){const d=l/f*Math.PI*2,s=o*p.widthMult*.15*(l/f),u=Math.cos(d)*s,m=Math.sin(d)*s,x=a*p.alphaMult*(.8+te(l+g)*.2);e.strokeStyle=`rgba(${i.r}, ${i.g}, ${i.b}, ${x})`,e.lineWidth=o*p.widthMult,e.beginPath();const M=(te(t.x*l)-.5)*.5,y=(te(r.x*l)-.5)*.5;e.moveTo(t.x+u+M,t.y+m+M),e.lineTo(r.x+u+y,r.y+m+y),e.stroke()}})},yn=(e,t,r,h,a,o)=>{const i=ke(h);e.fillStyle=`rgba(${i.r}, ${i.g}, ${i.b}, ${a})`;const c=Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2)),p=Math.max(5,o/1.2);for(let g=0;g<c;g+=p){const f=g/c,l=t.x+(r.x-t.x)*f,d=t.y+(r.y-t.y)*f,s=o*(.3+te(l)*.6),u=(te(d)-.5)*o*1.5,m=(te(l)-.5)*o*1.5;e.beginPath(),e.arc(l+u,d+m,s,0,Math.PI*2),e.fill();const x=Math.floor(te(l*d)*4);for(let M=0;M<x;M++){const y=te(l+M)*Math.PI*2,b=o*(.5+te(d+M)),L=o*(.05+te(M)*.1),T=l+u+Math.cos(y)*b,S=d+m+Math.sin(y)*b;e.beginPath(),e.arc(T,S,L,0,Math.PI*2),e.fill()}}},cr=(e,t,r,h,a,o)=>{e.lineCap="round",e.lineJoin="round",e.lineWidth=o,e.strokeStyle=xn(h,a),e.setLineDash([]),e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(r.x,r.y),e.stroke()},dr=(e,t,r,h)=>{const{color:a,opacity:o,brushSize:i,brushStyle:c}=h,p=o!==void 0?o/100:1;switch(e.save(),c){case"pencil":lr(e,t,r,a,p,i);break;case"calligraphy":fn(e,t,r,a,p,i);break;case"oil":yt(e,t,r,a,p,i);break;case"watercolor":mn(e,t,r,a,p,i);break;case"splatter":yn(e,t,r,a,p,i);break;case"hard":default:cr(e,t,r,a,p,i);break}e.restore()},hr=(e,t,r,h,a,o)=>{if(e.lineCap="round",e.lineJoin="round",o==="solid"){const i=ke(r),c=Math.max(1,a*.2);for(let p=0;p<t.points.length-1;p++){const g=t.points[p],f=t.points[p+1],l=(f.x-g.x)**2+(f.y-g.y)**2;if(l<2&&p<t.points.length-2)continue;const d=Math.sqrt(l),s=Math.ceil(d/c);for(let u=0;u<s;u++){const m=u/s,x=g.x+(f.x-g.x)*m,M=g.y+(f.y-g.y)*m,y=(te(x*M)-.5)*.5;mt(e,x+y,M+y,a/2,i,h)}}}else{const i=ke(r),c=o==="dotted",p=c?a*.1:a*3,g=c?a*1.1:a*2,f=p+g;let l=0;for(let d=0;d<t.points.length-1;d++){const s=t.points[d],u=t.points[d+1],m=Math.sqrt(Math.pow(u.x-s.x,2)+Math.pow(u.y-s.y,2));let x=0;const M=Math.max(1,a*.1);for(;x<m;){const b=(l+x)%f;if(b<p||c&&b<a){const L=x/m,T=s.x+(u.x-s.x)*L,S=s.y+(u.y-s.y)*L;mt(e,T,S,a/2,i,h)}x+=M}l+=m}}},pr=(e,t,r,h,a)=>{if(t.points.length>1){const o=Math.max(2,a*.15);let i=0;for(let g=0;g<t.points.length-1;g++){const f=t.points[g],l=t.points[g+1],d=l.x-f.x,s=l.y-f.y,u=Math.sqrt(d*d+s*s);if(i+u<o&&g<t.points.length-2){i+=u;continue}yt(e,f,l,r,h,a),i=0}const c=t.points[t.points.length-2],p=t.points[t.points.length-1];yt(e,c,p,r,h,a)}},ur=(e,t,r,h,a)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const i=t.points[o],c=t.points[o+1];(c.x-i.x)**2+(c.y-i.y)**2<2&&o<t.points.length-2||fn(e,i,c,r,h,a)}},gr=(e,t,r,h,a)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const i=t.points[o],c=t.points[o+1];(c.x-i.x)**2+(c.y-i.y)**2<2.25&&o<t.points.length-2||mn(e,i,c,r,h,a)}},xr=(e,t,r,h,a)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const i=t.points[o],c=t.points[o+1];(c.x-i.x)**2+(c.y-i.y)**2<1&&o<t.points.length-2||yn(e,i,c,r,h,a)}},fr=(e,t,r,h,a,o)=>{if(e.lineCap="round",e.lineJoin="round",e.lineWidth=a,e.strokeStyle=xn(r,h),o==="solid"){if(e.setLineDash([]),e.beginPath(),t.points.length>0){e.moveTo(t.points[0].x,t.points[0].y);for(let g=1;g<t.points.length;g++){const f=t.points[g],l=t.points[g-1];Math.abs(f.x-l.x)<.5&&Math.abs(f.y-l.y)<.5&&g<t.points.length-1||e.lineTo(f.x,f.y)}}e.stroke();return}const i=o==="dotted",c=i?.1:a*3,p=a*2;if(e.setLineDash([c,p]),e.lineCap=i?"round":"butt",e.beginPath(),t.points.length>0){e.moveTo(t.points[0].x,t.points[0].y);for(let g=1;g<t.points.length;g++)e.lineTo(t.points[g].x,t.points[g].y)}e.stroke(),e.setLineDash([])},Ct=(e,t,r=!1)=>{if(t.points.length<2)return;e.save();const h=t.opacity!==void 0?t.opacity/100:1,a=r?"#FFD700":t.color,o=t.brushStyle||"hard",i=t.lineType||"solid",c=t.brushSize;if(r){e.strokeStyle="rgba(255, 215, 0, 0.5)",e.lineWidth=c+6,e.lineCap="round",e.lineJoin="round",e.setLineDash([]),e.beginPath(),e.moveTo(t.points[0].x,t.points[0].y);for(let p=1;p<t.points.length;p++)e.lineTo(t.points[p].x,t.points[p].y);e.stroke()}switch(o){case"pencil":hr(e,t,a,h,c,i);break;case"calligraphy":ur(e,t,a,h,c);break;case"oil":pr(e,t,a,h,c);break;case"watercolor":gr(e,t,a,h,c);break;case"splatter":xr(e,t,a,h,c);break;case"hard":default:fr(e,t,a,h,c,i);break}e.restore()},mr=(e,t,r,h,a,o,i,c,p)=>{e.save(),e.strokeStyle=c,e.lineWidth=p,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t,r),e.lineTo(h,a),e.lineTo(o,i),e.stroke(),e.restore()},yr=(e,t,r,h,a,o,i,c,p=0,g=0)=>{const f=h-t,l=a-r,d=Math.sqrt(f*f+l*l);if(d===0)return;const s=f/d,u=l/d,m=p,x=g,M=d-m-x;if(M<=0)return;const y=t+s*m,b=r+u*m;if(e.strokeStyle=c,e.lineWidth=i,e.lineCap="butt",o==="dashed"){const L=Math.max(i*3,12),T=Math.max(i*2,8),S=L+T,I=Math.max(2,Math.floor(M/S));if(I===2&&M<S*2){const D=M*.35,Y=M*.3;e.setLineDash([D,Y]),e.lineDashOffset=0,e.beginPath(),e.moveTo(y,b),e.lineTo(h-s*x,a-u*x),e.stroke(),e.setLineDash([]);return}const B=(M-I*L)/I,v=L+B,$=I*v-B,z=(M-$)/2;e.setLineDash([L,B]),e.lineDashOffset=-z,e.beginPath(),e.moveTo(y,b),e.lineTo(h-s*x,a-u*x),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}else if(o==="dotted"){const L=Math.max(i*2.5,10),T=i/2,S=Math.max(2,Math.floor(M/L)+1),I=M/(S-1);e.fillStyle=c;for(let k=0;k<S;k++){const B=k*I,v=y+s*B,$=b+u*B;e.beginPath(),e.arc(v,$,T,0,Math.PI*2),e.fill()}}else e.beginPath(),e.moveTo(y,b),e.lineTo(h-s*x,a-u*x),e.stroke()},Yt=(e,t,r,h,a)=>{if(t.length<2)return;if(r==="solid"){e.strokeStyle=a,e.lineWidth=h,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let d=1;d<t.length;d++)e.lineTo(t[d].x,t[d].y);e.closePath(),e.stroke();return}let o=0;const i=[],c=t.length;for(let d=0;d<c;d++){const s=t[d],u=t[(d+1)%c],m=u.x-s.x,x=u.y-s.y,M=Math.sqrt(m*m+x*x);i.push(M),o+=M}if(o<20){e.strokeStyle=a,e.lineWidth=h,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let d=1;d<t.length;d++)e.lineTo(t[d].x,t[d].y);e.closePath(),e.stroke();return}const p=Math.max(h*2.5,Math.min(h*4,o/25)),g=Math.max(h*1.5,p*.5),f=p+g,l=p*.7;if(r==="dotted"){const d=h/2,s=Math.max(h*2,o/60);e.fillStyle=a;for(let u=0;u<c;u++){const m=t[u];e.beginPath(),e.arc(m.x,m.y,d,0,Math.PI*2),e.fill()}for(let u=0;u<c;u++){const m=t[u],x=i[u];if(x<=0)continue;const M=t[(u+1)%c].x-m.x,y=t[(u+1)%c].y-m.y,b=M/x,L=y/x,T=1,S=Math.floor(x/s)+1,I=Math.max(T,S-1),k=x/I;for(let B=1;B<I;B++){const v=B*k,$=m.x+b*v,A=m.y+L*v;e.beginPath(),e.arc($,A,d,0,Math.PI*2),e.fill()}}}else if(r==="dashed"){e.strokeStyle=a,e.lineWidth=h,e.lineCap="butt";for(let d=0;d<c;d++){const s=t[d],u=t[d===0?c-1:d-1],m=t[(d+1)%c],x=i[d===0?c-1:d-1],M=i[d];if(x>0&&M>0){const y=u.x-s.x,b=u.y-s.y,L=m.x-s.x,T=m.y-s.y,S=Math.min(x,M)/3,I=Math.min(l,S),k=s.x+y/x*I,B=s.y+b/x*I,v=s.x+L/M*I,$=s.y+T/M*I;mr(e,k,B,s.x,s.y,v,$,a,h)}}for(let d=0;d<c;d++){const s=t[d],u=t[(d+1)%c],m=i[d];if(m===0)continue;const x=u.x-s.x,M=u.y-s.y,y=x/m,b=M/m,L=i[d===0?c-1:d-1],T=m,S=i[(d+1)%c],I=Math.min(L,T)/3,k=Math.min(l,I),B=Math.min(T,S)/3,v=Math.min(l,B),$=m-k-v;if($<=p/2)continue;const A=s.x+y*k,z=s.y+b*k,D=Math.floor($/f);if(D===0){const G=$/2-p/2;if(G>=0){const N=A+y*G,j=z+b*G,V=A+y*(G+p),H=z+b*(G+p);e.beginPath(),e.moveTo(N,j),e.lineTo(V,H),e.stroke()}continue}const Z=($-D*p)/D,R=p+Z,O=D*R-Z,q=($-O)/2;e.setLineDash([p,Z]),e.lineDashOffset=-q,e.beginPath(),e.moveTo(A,z),e.lineTo(u.x-y*v,u.y-b*v),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}}},Xt=(e,t,r,h,a,o,i,c,p)=>{if(a==="butt")return 0;const g=i.replace("#",""),f=parseInt(g.slice(0,2),16),l=parseInt(g.slice(2,4),16),d=parseInt(g.slice(4,6),16);e.fillStyle=`rgba(${f}, ${l}, ${d}, ${c})`,e.strokeStyle=`rgba(${f}, ${l}, ${d}, ${c})`,e.save(),e.translate(t,r),e.rotate(h);let s=0;if(a==="round"){const u=Math.max(p*.75,4);e.beginPath(),e.arc(0,0,u,0,Math.PI*2),e.fill(),s=0}else a==="arrow"?(e.beginPath(),e.moveTo(0,0),e.lineTo(-o,-o*.5),e.lineTo(-o,o*.5),e.closePath(),e.fill(),s=o):a==="circle"?(e.beginPath(),e.arc(0,0,o*.4,0,Math.PI*2),e.fill(),s=o*.2):a==="bar"&&(e.lineWidth=p,e.lineCap="butt",e.beginPath(),e.moveTo(0,-o*.6),e.lineTo(0,o*.6),e.stroke(),s=0);return e.restore(),s},Cn=(e,t,r=!1)=>{e.save();const h=t.fontWeight||"normal",a=t.fontStyle||"normal",o=t.fontSize||16,i=t.fontFamily||"Arial";e.font=`${a} ${h} ${o}px ${i}`,e.textAlign="left",e.textBaseline="top";const c=(t.text||"").split(`
`),p=(t.lineHeight||1.5)*o,g=t.letterSpacing||0;let f=0;c.forEach(b=>{let L=0;g!==0?L=e.measureText(b).width+g*(b.length-1):L=e.measureText(b).width,L>f&&(f=L)});const l=c.length>0?(c.length-1)*p+o:0,d=2;if(t.rotation){const b=t.x+f/2,L=t.y+l/2;e.translate(b,L),e.rotate(t.rotation*Math.PI/180),e.translate(-b,-L)}const s=t.opacity!==void 0?t.opacity/100:1,m=(t.color||"#000000").replace("#",""),x=parseInt(m.slice(0,2),16),M=parseInt(m.slice(2,4),16),y=parseInt(m.slice(4,6),16);return e.fillStyle=`rgba(${x}, ${M}, ${y}, ${s})`,c.forEach((b,L)=>{const T=t.y+L*p;if(g!==0){let S=t.x;for(let I=0;I<b.length;I++){const k=b[I];e.fillText(k,S,T);const B=e.measureText(k).width;S+=B+g}}else e.fillText(b,t.x,T);if(t.textDecoration==="underline"){const S=g!==0?e.measureText(b).width+g*(b.length-1):e.measureText(b).width;e.beginPath(),e.moveTo(t.x,T+o),e.lineTo(t.x+S,T+o),e.strokeStyle=e.fillStyle,e.lineWidth=Math.max(1,o/16),e.stroke()}}),r&&(e.fillStyle="rgba(255, 215, 0, 0.2)",e.fillRect(t.x-d,t.y-d,f+d*2,l+d*2)),e.restore(),t},wn=(e,t,r)=>{e.save();const h=t.x,a=t.y,o=t.radius||20,i=t.rotation||0;e.translate(h,a),e.rotate(i*Math.PI/180);const c=t.borderWidth||2,p=(t.borderOpacity!==void 0?t.borderOpacity:100)/100,g=r?"#FFD700":t.borderColor||"#000000",f=t.borderStyle||"solid",l=g.replace("#",""),d=parseInt(l.slice(0,2),16),s=parseInt(l.slice(2,4),16),u=parseInt(l.slice(4,6),16),m=(t.colorOpacity!==void 0?t.colorOpacity:100)/100,M=(t.color||"#ff0000").replace("#",""),y=parseInt(M.slice(0,2),16),b=parseInt(M.slice(2,4),16),L=parseInt(M.slice(4,6),16);if(e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.fillStyle=`rgba(${y}, ${b}, ${L}, ${m})`,e.fill(),e.strokeStyle=`rgba(${d}, ${s}, ${u}, ${p})`,e.lineWidth=c,f==="dashed"){const z=2*Math.PI*o,D=Math.max(c*2.5,Math.min(c*4,z/25)),Y=Math.max(c*1.5,D*.5),Z=D+Y,R=Math.floor(z/Z);if(R<3||z<30)e.setLineDash([]),e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();else{const q=(z-R*D)/R,G=(D+q)/o,N=D/o,j=D+q,V=R*j-q,K=(z-V)/2/o;e.lineCap="butt";for(let ne=0;ne<R;ne++){const U=K+ne*G,Q=U+N;e.beginPath(),e.arc(0,0,o,U,Q),e.stroke()}}}else if(f==="dotted"){const z=2*Math.PI*o,D=c/2,Y=Math.max(c*2,z/60),Z=Math.max(8,Math.round(z/Y)),R=2*Math.PI/Z;e.fillStyle=`rgba(${d}, ${s}, ${u}, ${p})`;for(let O=0;O<Z;O++){const J=O*R,q=o*Math.cos(J),G=o*Math.sin(J);e.beginPath(),e.arc(q,G,D,0,Math.PI*2),e.fill()}}else e.setLineDash([]),e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();e.setLineDash([]);const T=t.number!==void 0?t.number:1,S=(t.numberOpacity!==void 0?t.numberOpacity:100)/100,k=(t.numberColor||"#ffffff").replace("#",""),B=parseInt(k.slice(0,2),16),v=parseInt(k.slice(2,4),16),$=parseInt(k.slice(4,6),16),A=Math.max(12,o*.8);if(e.fillStyle=`rgba(${B}, ${v}, ${$}, ${S})`,e.font=`bold ${A}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(T.toString(),0,0),t.topText){const z=(t.textOpacity!==void 0?t.textOpacity:100)/100,Y=(t.textColor||"#000000").replace("#",""),Z=parseInt(Y.slice(0,2),16),R=parseInt(Y.slice(2,4),16),O=parseInt(Y.slice(4,6),16),J=t.textSize||Math.max(10,o*.5),G=-(o+5);e.fillStyle=`rgba(${Z}, ${R}, ${O}, ${z})`,e.font=`${J}px Arial`,e.textAlign="center",e.textBaseline="bottom",e.fillText(t.topText,0,G)}if(t.cards&&t.cards.length>0){const z=o*.35,D=z*1.4,Y=4,Z=Math.PI/4,R=Math.cos(Z)*o*.7,O=Math.sin(Z)*o*.7;t.cards.forEach((J,q)=>{const G=J.color||(J==="yellow"?"#FFD700":"#FF0000"),N=J.cardBorderColor||"#000000",j=R-q*(z+Y);e.fillStyle=G,e.fillRect(j-z,O,z,D),e.strokeStyle=N,e.lineWidth=1.5,e.setLineDash([]),e.strokeRect(j-z,O,z,D)})}e.restore()},bn=(e,t,r=!1)=>{const h=t.radius||10,a=r?"#FFD700":"black",o=r?3:2;e.fillStyle="white",e.strokeStyle=a,e.lineWidth=o,e.beginPath(),e.arc(t.x,t.y,h,0,Math.PI*2),e.fill(),e.stroke(),e.beginPath(),e.arc(t.x-h/3,t.y-h/3,h/3,0,Math.PI*2),e.fillStyle="black",e.fill()},Mn=(e,t,r=!1,h="#000")=>{if(e.save(),t.rotation)if(t.shape==="line"||t.shape==="arrow"){const s=(t.startX+t.endX)/2,u=(t.startY+t.endY)/2;e.translate(s,u),e.rotate(t.rotation*Math.PI/180),e.translate(-s,-u)}else{const s=t.x+(t.width||50)/2,u=t.y+(t.height||30)/2;e.translate(s,u),e.rotate(t.rotation*Math.PI/180),e.translate(-s,-u)}const a=r?"#FFD700":t.borderColor||t.color||h,o=t.borderOpacity!==void 0?t.borderOpacity/100:1,i=t.borderWidth||2,c=t.borderStyle||"solid",p=a.replace("#",""),g=parseInt(p.slice(0,2),16),f=parseInt(p.slice(2,4),16),l=parseInt(p.slice(4,6),16),d=`rgba(${g}, ${f}, ${l}, ${o})`;if(e.strokeStyle=d,e.lineWidth=i,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),t.shape==="line"||t.shape==="arrow"){const s=t.endX-t.startX,u=t.endY-t.startY,m=Math.atan2(u,s),x=t.lineCapStart||"butt",M=t.lineCapEnd||(t.shape==="arrow"?"arrow":"butt"),y=Math.max(i*2.5,10);let b=0;x==="arrow"?b=y:x==="circle"?b=y*.2:(x==="round"||x==="bar")&&(b=0);let L=0;if(M==="arrow"?L=y:M==="circle"?L=y*.2:(M==="round"||M==="bar")&&(L=0),c==="dashed"||c==="dotted")yr(e,t.startX,t.startY,t.endX,t.endY,c,i,d,b,L);else{const T=t.startX+Math.cos(m)*b,S=t.startY+Math.sin(m)*b,I=t.endX-Math.cos(m)*L,k=t.endY-Math.sin(m)*L;e.lineCap="butt",e.beginPath(),e.moveTo(T,S),e.lineTo(I,k),e.stroke()}x!=="butt"&&Xt(e,t.startX,t.startY,m+Math.PI,x,y,a,o,i),M!=="butt"&&Xt(e,t.endX,t.endY,m,M,y,a,o,i)}else{const s=t.x,u=t.y,m=t.width||50,x=t.height||30,M=10,y=Math.abs(m)<M?m<0?-M:M:m,b=Math.abs(x)<M?x<0?-M:M:x,L=t.fillColor||"#ffffff",T=t.fillOpacity!==void 0?t.fillOpacity/100:0;if(T>0){const S=L.replace("#",""),I=parseInt(S.slice(0,2),16),k=parseInt(S.slice(2,4),16),B=parseInt(S.slice(4,6),16);if(e.fillStyle=`rgba(${I}, ${k}, ${B}, ${T})`,e.beginPath(),t.shape==="rectangle")e.rect(s,u,y,b);else if(t.shape==="circle"){const v=Math.max(Math.abs(y),Math.abs(b))/2,$=s+y/2,A=u+b/2;e.arc($,A,v,0,Math.PI*2)}else t.shape==="triangle"&&(e.moveTo(s+y/2,u),e.lineTo(s,u+b),e.lineTo(s+y,u+b),e.closePath());e.fill()}if(c==="dashed"||c==="dotted"){if(t.shape==="rectangle"){const S=[{x:s,y:u},{x:s+y,y:u},{x:s+y,y:u+b},{x:s,y:u+b}];Yt(e,S,c,i,d)}else if(t.shape==="triangle"){const S=[{x:s+y/2,y:u},{x:s,y:u+b},{x:s+y,y:u+b}];Yt(e,S,c,i,d)}else if(t.shape==="circle"){const S=Math.max(Math.abs(y),Math.abs(b))/2,I=s+y/2,k=u+b/2,B=2*Math.PI*S,v=Math.max(i*2.5,Math.min(i*4,B/25)),$=Math.max(i*1.5,v*.5),A=v+$;if(B<30)e.strokeStyle=d,e.lineWidth=i,e.beginPath(),e.arc(I,k,S,0,Math.PI*2),e.stroke();else if(c==="dashed"){const z=Math.floor(B/A);if(z===0)e.strokeStyle=d,e.lineWidth=i,e.beginPath(),e.arc(I,k,S,0,Math.PI*2),e.stroke();else{const Y=(B-z*v)/z,Z=(v+Y)/S,R=v/S,O=v+Y,J=z*O-Y,N=(B-J)/2/S;e.strokeStyle=d,e.lineWidth=i,e.lineCap="butt";for(let j=0;j<z;j++){const V=N+j*Z,H=V+R;e.beginPath(),e.arc(I,k,S,V,H),e.stroke()}}}else if(c==="dotted"){const z=i/2,D=Math.max(i*2,B/60),Y=Math.max(8,Math.round(B/D)),Z=2*Math.PI/Y;e.fillStyle=d;for(let R=0;R<Y;R++){const O=R*Z,J=I+S*Math.cos(O),q=k+S*Math.sin(O);e.beginPath(),e.arc(J,q,z,0,Math.PI*2),e.fill()}}}}else{if(e.beginPath(),t.shape==="rectangle"){const S=t.x,I=t.y;t.width,t.height,e.rect(S,I,y,b)}else if(t.shape==="circle"){const S=t.x,I=t.y,k=t.width||50,B=t.height||30,v=k,$=B,A=Math.max(Math.abs(v),Math.abs($))/2,z=S+v/2,D=I+$/2;e.arc(z,D,A,0,Math.PI*2)}else if(t.shape==="triangle"){const S=t.x,I=t.y,k=t.width||50,B=t.height||30,v=k,$=B;e.moveTo(S+v/2,I),e.lineTo(S,I+$),e.lineTo(S+v,I+$),e.closePath()}e.stroke()}}e.restore()},vn=(e,t,r=!1)=>{const h=t.size||30;e.font=`${h}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(t.icon,t.x,t.y),r&&(e.strokeStyle="#FFD700",e.lineWidth=3,e.strokeRect(t.x-h/2,t.y-h/2,h,h))},Cr=(e,t)=>{if(e.save(),e.strokeStyle="#FFD700",e.lineWidth=2,e.setLineDash([5,5]),t.rotatedCorners&&t.rotatedCorners.length===4){e.beginPath(),e.moveTo(t.rotatedCorners[0].x,t.rotatedCorners[0].y);for(let r=1;r<t.rotatedCorners.length;r++)e.lineTo(t.rotatedCorners[r].x,t.rotatedCorners[r].y);e.closePath(),e.stroke()}else e.strokeRect(t.x,t.y,t.width,t.height);e.setLineDash([]),e.restore()},wr=(e,t,r)=>{const h=un(t,r),a=8;e.fillStyle="white",e.strokeStyle="#FFD700",e.lineWidth=2,Object.entries(h).forEach(([o,i])=>{e.save(),e.fillRect(i.x-a/2,i.y-a/2,a,a),e.strokeRect(i.x-a/2,i.y-a/2,a,a),e.restore()})},Ln=(e,t)=>{if(!e||!t)return null;const r=ae(e,t);if(!r)return null;const h=(e.brushSize||e.borderWidth||10)*2+20,a=2e3;let o=r.width+h*2,i=r.height+h*2;if(o>a||i>a)return null;const c=document.createElement("canvas");c.width=o,c.height=i;const p=c.getContext("2d"),g=r.x-h,f=r.y-h;if(p.translate(-g,-f),e.type==="path")Ct(p,e,!1);else if(e.type==="player")wn(p,e,!1);else if(e.type==="ball")bn(p,e,!1);else if(e.type==="shape"){const l=e.borderColor||e.color||"#000000";Mn(p,e,!1,l)}else e.type==="figure"?vn(p,e,!1):e.type==="text"&&Cn(p,e,!1);return{canvas:c,offsetX:g,offsetY:f,originalWidth:o,originalHeight:i}},br=(e,t)=>{const r=C.useRef(null),h=C.useRef(null),a=C.useRef(new Map),o=C.useCallback((d,s=!1)=>{if(!d)return;d.getContext("2d").clearRect(0,0,d.width,d.height)},[]),i=C.useCallback(()=>{const d=t.current;if(!d)return;d.getContext("2d").clearRect(0,0,d.width,d.height)},[t]),c=(d,s,u,m)=>{if(d.save(),s.type==="path")Ct(d,s,m);else switch(s.type){case"player":wn(d,s,m);break;case"ball":bn(d,s,m);break;case"shape":Mn(d,s,m,s.borderColor||u);break;case"figure":vn(d,s,m);break;case"text":Cn(d,s,m);break}d.restore()},p=C.useCallback((d,s,u,m,x)=>{if(m){c(d,s,u,!0);return}const M=JSON.stringify(s),y=a.current.get(s.id);if(y&&y.hash===M&&y.cache){const{cache:L}=y,T=ae(s,x);if(T){const S=(s.brushSize||s.borderWidth||10)*2+20;d.drawImage(L.canvas,T.x-S,T.y-S)}else c(d,s,u,!1);return}const b=Ln(s,x);if(b){a.current.set(s.id,{hash:M,cache:b});const L=ae(s,x);if(L){const T=(s.brushSize||s.borderWidth||10)*2+20;d.drawImage(b.canvas,L.x-T,L.y-T)}}else c(d,s,u,!1)},[]),g=C.useCallback((d,s,u,m,x,M=null)=>{const y=e.current;if(!y)return;o(y,!0);const b=y.getContext("2d");d.forEach((L,T)=>{const S=`path_${T}`;if(S===M||L.points.length<2)return;const I={...L,type:"path",id:S};p(b,I,m,!1,y)}),s.forEach(L=>{L.id!==M&&p(b,L,m,!1,y)})},[e,o,p]),f=C.useCallback((d,s,u=!0)=>{const m=t.current;if(!m||!d)return;const x=m.getContext("2d");if(x.clearRect(0,0,m.width,m.height),x.save(),d._cache){const{canvas:M}=d._cache,y=ae(d,m),b=(d.brushSize||d.borderWidth||10)*2+20;x.drawImage(M,y.x-b,y.y-b)}else c(x,d,s,u);if(u){const M=ae(d,m);M&&(Cr(x,M),d._cache||wr(x,M,d))}x.restore()},[t]),l=C.useCallback((d,s,u=!1)=>{const m=t.current;if(!m)return;const x=m.getContext("2d");if(u||x.clearRect(0,0,m.width,m.height),d&&d.points&&d.points.length>=2)if(u){const M=d.points.length,y=d.points[M-2],b=d.points[M-1];dr(x,y,b,{color:d.color,opacity:d.opacity,brushSize:d.brushSize,brushStyle:d.brushStyle})}else Ct(x,d,!1);if(s){const{type:M,start:y,end:b,borderColor:L,borderStyle:T,borderWidth:S,fillColor:I,fillOpacity:k}=s,B=L.replace("#",""),v=parseInt(B.slice(0,2),16),$=parseInt(B.slice(2,4),16),A=parseInt(B.slice(4,6),16),z=`rgba(${v}, ${$}, ${A}, 1)`,D=b.x-y.x,Y=b.y-y.y;if(x.save(),x.strokeStyle=z,x.lineWidth=S,T==="dashed"&&x.setLineDash([10,5]),T==="dotted"&&x.setLineDash([2,5]),x.beginPath(),M==="line"||M==="arrow"){if(x.moveTo(y.x,y.y),x.lineTo(b.x,b.y),x.stroke(),M==="arrow"){const Z=Math.atan2(b.y-y.y,b.x-y.x),R=15;x.beginPath(),x.moveTo(b.x,b.y),x.lineTo(b.x-R*Math.cos(Z-Math.PI/6),b.y-R*Math.sin(Z-Math.PI/6)),x.moveTo(b.x,b.y),x.lineTo(b.x-R*Math.cos(Z+Math.PI/6),b.y-R*Math.sin(Z+Math.PI/6)),x.stroke()}}else{if(k>0){const Z=I.replace("#",""),R=parseInt(Z.slice(0,2),16),O=parseInt(Z.slice(2,4),16),J=parseInt(Z.slice(4,6),16);if(x.fillStyle=`rgba(${R}, ${O}, ${J}, ${k/100})`,x.beginPath(),M==="rectangle")x.rect(y.x,y.y,D,Y);else if(M==="circle"){const q=Math.max(Math.abs(D),Math.abs(Y))/2;x.arc(y.x+D/2,y.y+Y/2,q,0,Math.PI*2)}else M==="triangle"&&(x.moveTo(y.x+D/2,y.y),x.lineTo(y.x,y.y+Y),x.lineTo(y.x+D,y.y+Y),x.closePath());x.fill()}if(x.beginPath(),M==="rectangle")x.rect(y.x,y.y,D,Y);else if(M==="circle"){const Z=Math.max(Math.abs(D),Math.abs(Y))/2;x.arc(y.x+D/2,y.y+Y/2,Z,0,Math.PI*2)}else M==="triangle"&&(x.moveTo(y.x+D/2,y.y),x.lineTo(y.x,y.y+Y),x.lineTo(y.x+D,y.y+Y),x.closePath());x.stroke()}x.restore()}},[t]);return{redrawStatic:g,drawLiveLayer:l,drawSingleObjectOnActive:f,clearActiveLayer:i,tempObjectDataRef:r,tempPathDataRef:h}},Mr=()=>{const e=C.useRef(null),t=C.useRef({x:0,y:0}),r=C.useRef(null),[h,a]=C.useState("default");return{draggedObjectRef:e,dragOffsetRef:t,cursorStyle:h,setCursorStyle:a,startDrag:(l,d,s)=>{const u=ae(l,s);let m;l.type==="path"?m={...l,points:l.points.map(M=>({...M}))}:m={...l};const x=Ln(l,s);if(e.current={...m,_cache:x},r.current={mouseStart:{...d},objectStart:l.type==="path"?{...l,points:l.points.map(M=>({...M}))}:{...l},cachedBounds:u||{x:0,y:0,width:0,height:0}},l.type==="path")t.current={x:d.x-u.points[0].x,y:d.y-u.points[0].y};else if(l.type==="shape"&&(l.shape==="line"||l.shape==="arrow")){const M=(l.startX+l.endX)/2,y=(l.startY+l.endY)/2;t.current={x:d.x-M,y:d.y-y}}else l.x!==void 0&&l.y!==void 0?t.current={x:d.x-l.x,y:d.y-l.y}:t.current={x:d.x-(u?u.x:0),y:d.y-(u?u.y:0)}},updateDragPosition:(l,d,s)=>{if(!e.current||!r.current)return null;const{objectStart:u,cachedBounds:m}=r.current,x=l.x-r.current.mouseStart.x,M=l.y-r.current.mouseStart.y;let y=e.current;if(y.type==="path"){const I=u.points,k=y.points;for(let B=0;B<I.length;B++)k[B].x=I[B].x+x,k[B].y=I[B].y+M}else y.type==="shape"&&(y.shape==="line"||y.shape==="arrow")?(y.startX=u.startX+x,y.endX=u.endX+x,y.startY=u.startY+M,y.endY=u.endY+M):(y.x=u.x+x,y.y=u.y+M);const b=m.x+m.width/2+x,L=m.y+m.height/2+M;let T=0,S=0;if(b<0?T=0-b:b>d&&(T=d-b),L<0?S=0-L:L>s&&(S=s-L),T!==0||S!==0)if(y.type==="path")for(let I=0;I<y.points.length;I++)y.points[I].x+=T,y.points[I].y+=S;else y.type==="shape"&&(y.shape==="line"||y.shape==="arrow")?(y.startX+=T,y.endX+=T,y.startY+=S,y.endY+=S):(y.x+=T,y.y+=S);return y},endDrag:()=>{const l=e.current;return l&&l._cache&&delete l._cache,e.current=null,r.current=null,t.current={x:0,y:0},l},updateCursor:(l,d,s,u,m,x)=>{if(e.current)return;if(u){const y=u?u.startsWith("path_")?{...s[parseInt(u.replace("path_",""))],type:"path",id:u}:d.find(b=>b.id===u):null;if(y){const b=ae(y,x);if(b){const L=zt(l.x,l.y,b,y);if(L){a(L.cursor);return}if(ft(l.x,l.y,b)){a("move");return}}}}const M=gn(l.x,l.y,d,s,m,x);a(M?"pointer":"default")},checkForHandle:(l,d,s)=>{const u=ae(d,s);return u?zt(l.x,l.y,u,d):null},checkIfPointInSelectedBounds:(l,d,s)=>{if(!d)return!1;const u=ae(d,s);return u&&ft(l.x,l.y,u)}}},Ze=10,vr=8,Lr=70,$r=5,Sr=50,kr=(e,t,r,h,a)=>{const o=a*Math.PI/180,i=Math.cos(o),c=Math.sin(o),p=r/2,g=h/2;return[{x:-p,y:-g},{x:p,y:-g},{x:p,y:g},{x:-p,y:g}].map(l=>({x:e+(l.x*i-l.y*c),y:t+(l.x*c+l.y*i)}))},Ae=(e,t,r,h,a)=>{const o=a*Math.PI/180,i=Math.cos(o),c=Math.sin(o),p=e-r,g=t-h;return{x:r+(p*i-g*c),y:h+(p*c+g*i)}},Br=()=>{const e=C.useRef(null);return{resizeHandleRef:e,startResize:(a,o,i,c)=>{let p,g;o.type==="player"||o.type==="ball"?(p=(o.radius||20)*2,g=(o.radius||20)*2):o.type==="figure"?(p=o.size||30,g=o.size||30):o.type==="text"?(p=c.originalWidth||c.width,g=c.originalHeight||c.height):(p=o.width!==void 0?o.width:c.width,g=o.height!==void 0?o.height:c.height);let f,l;o.shape==="line"||o.shape==="arrow"?(f=(o.startX+o.endX)/2,l=(o.startY+o.endY)/2):o.type==="player"||o.type==="ball"||o.type==="figure"?(f=o.x,l=o.y):o.type==="text"?(f=c.centerX,l=c.centerY):(f=o.x+p/2,l=o.y+g/2);const d=o.rotation||0,s=kr(f,l,p,g,d);let u={x:f,y:l},m={x:i.x,y:i.y};a.name==="topLeft"?(m=s[0],u=s[2]):a.name==="topRight"?(m=s[1],u=s[3]):a.name==="bottomRight"?(m=s[2],u=s[0]):a.name==="bottomLeft"?(m=s[3],u=s[1]):a.name==="top"?(m={x:(s[0].x+s[1].x)/2,y:(s[0].y+s[1].y)/2},u={x:(s[2].x+s[3].x)/2,y:(s[2].y+s[3].y)/2}):a.name==="bottom"?(m={x:(s[2].x+s[3].x)/2,y:(s[2].y+s[3].y)/2},u={x:(s[0].x+s[1].x)/2,y:(s[0].y+s[1].y)/2}):a.name==="left"?(m={x:(s[0].x+s[3].x)/2,y:(s[0].y+s[3].y)/2},u={x:(s[1].x+s[2].x)/2,y:(s[1].y+s[2].y)/2}):a.name==="right"&&(m={x:(s[1].x+s[2].x)/2,y:(s[1].y+s[2].y)/2},u={x:(s[0].x+s[3].x)/2,y:(s[0].y+s[3].y)/2});const x=m.x-i.x,M=m.y-i.y,y=m.x-u.x,b=m.y-u.y,L=y*y+b*b,T=Ae(i.x,i.y,f,l,-d),S=T.x-f,I=T.y-l;let k=0;(o.shape==="circle"||["player","ball","figure"].includes(o.type))&&(k=Math.sqrt(Math.pow(i.x-f,2)+Math.pow(i.y-l,2))),e.current={handle:a.name,object:{...o},startPos:i,anchorPoint:u,startVectorX:y,startVectorY:b,startLengthSq:L,pressOffsetX:x,pressOffsetY:M,startFontSize:o.fontSize||16,startX:o.x,startY:o.y,lineStartX:o.startX,lineStartY:o.startY,lineEndX:o.endX,lineEndY:o.endY,startCenterX:f,startCenterY:l,rotation:d,startLocalLeft:-Math.abs(p)/2,startLocalRight:Math.abs(p)/2,startLocalTop:-Math.abs(g)/2,startLocalBottom:Math.abs(g)/2,startFlippedX:p<0,startFlippedY:g<0,isHandleLeft:S<0,isHandleRight:S>0,isHandleTop:I<0,isHandleBottom:I>0,startWidth:p,startHeight:g,startDistanceFromCenter:k}},updateResize:a=>{if(!e.current)return null;const{handle:o,object:i,startFontSize:c,startCenterX:p,startCenterY:g,startDistanceFromCenter:f,rotation:l,lineStartX:d,lineStartY:s,lineEndX:u,lineEndY:m,startPos:x,startLocalLeft:M,startLocalRight:y,startLocalTop:b,startLocalBottom:L,isHandleLeft:T,isHandleRight:S,isHandleTop:I,isHandleBottom:k,startFlippedX:B,startFlippedY:v,startWidth:$,startHeight:A,startX:z,startY:D,anchorPoint:Y,startVectorX:Z,startVectorY:R,startLengthSq:O,pressOffsetX:J,pressOffsetY:q}=e.current;let G={...i};if(i.type==="text"){const N=a.x+J,j=a.y+q,V=N-Y.x,H=j-Y.y,oe=V*Z+H*R;let K=oe/O;if(!["topLeft","topRight","bottomLeft","bottomRight"].includes(o)){const he=Math.sqrt(O),we=Math.sqrt(V*V+H*H),be=oe>0?1:-1;K=we/he*be}const ne=8;let U=c*K;U<ne&&(U=ne,K=ne/c),K<.1&&(K=.1),G.fontSize=c*K;const Q=$*K,ee=A*K,ce=Z*K,Be=R*K,Ce=Y.x+ce*.5,de=Y.y+Be*.5;return G.x=Ce-Q/2,G.y=de-ee/2,G.width=Q,G.height=ee,e.current.object=G,G}if(i.type==="shape"&&(i.shape==="line"||i.shape==="arrow")){const N=Ae(d,s,p,g,l),j=Ae(u,m,p,g,l);let V={...N},H={...j};["start","topLeft","left","top"].includes(o)?V={x:a.x,y:a.y}:H={x:a.x,y:a.y};const oe=(V.x+H.x)/2,K=(V.y+H.y)/2,ne=Ae(V.x,V.y,oe,K,-l),U=Ae(H.x,H.y,oe,K,-l);return G.startX=ne.x,G.startY=ne.y,G.endX=U.x,G.endY=U.y,e.current.object=G,G}if(i.shape==="circle"||["player","ball","figure"].includes(i.type)){const N=Math.sqrt(Math.pow(a.x-p,2)+Math.pow(a.y-g,2)),j=f>0?N/f:1,V=Math.abs($);if(i.shape==="circle"){const H=Math.max(Ze,V*j);G.width=H,G.height=H,G.x=p-H/2,G.y=g-H/2}else if(i.type==="player"){const H=V/2*j;G.radius=Math.max(vr,Math.min(Lr,H))}else if(i.type==="ball"){const H=V/2*j;G.radius=Math.max($r,Math.min(Sr,H))}else G.size=Math.max(10,V*j);return e.current.object=G,G}if(i.type==="shape"){const N=l*Math.PI/180,j=Math.cos(-N),V=Math.sin(-N),H=a.x-x.x,oe=a.y-x.y,K=H*j-oe*V,ne=H*V+oe*j;let U=M,Q=y,ee=b,ce=L;T?U+=K:S&&(Q+=K),I?ee+=ne:k&&(ce+=ne);let Be=B,Ce=v;U>Q&&([U,Q]=[Q,U],Be=!Be),ee>ce&&([ee,ce]=[ce,ee],Ce=!Ce);let de=Q-U,he=ce-ee;de<Ze&&(de=Ze,T?U=Q-de:Q=U+de),he<Ze&&(he=Ze,I?ee=ce-he:ce=ee+he);const we=(U+Q)/2,be=(ee+ce)/2,at=we*Math.cos(N)-be*Math.sin(N),st=we*Math.sin(N)+be*Math.cos(N),ue=p+at,lt=g+st;let pe=Be?-de:de,Oe=Ce?-he:he;return G.width=pe,G.height=Oe,G.x=ue-pe/2,G.y=lt-Oe/2,e.current.object=G,G}return G},endResize:()=>{const a=e.current;return e.current=null,a?a.object:null}}},Tr=()=>{const e=C.useRef(!1),t=C.useRef([]),r=C.useRef(null),h=C.useRef(!1);return{drawingRef:e,currentPathRef:t,shapeStartRef:r,isDrawingShapeRef:h,startDrawing:l=>{e.current=!0,t.current=[{x:l.x,y:l.y}]},continueDrawing:l=>e.current?(t.current.push({x:l.x,y:l.y}),t.current):null,endDrawing:()=>{const l=t.current;return e.current=!1,t.current=[],l.length>1?l:null},startShape:l=>{h.current=!0,r.current=l},getShapePreview:l=>!h.current||!r.current?null:{start:r.current,end:l},endShape:(l,d)=>{if(!h.current||!r.current)return null;const s=r.current;let u=null;if(d==="line"||d==="arrow")Math.sqrt(Math.pow(l.x-s.x,2)+Math.pow(l.y-s.y,2))>5&&(u={startX:s.x,startY:s.y,endX:l.x,endY:l.y});else{const m=l.x-s.x,x=l.y-s.y;Math.abs(m)>5&&Math.abs(x)>5&&(u={x:s.x,y:s.y,width:m,height:x})}return h.current=!1,r.current=null,u},cancelDrawing:()=>{e.current=!1,t.current=[],h.current=!1,r.current=null}}},Ir=w.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,Er=w.div`
  border: 2px solid #ddd;
  margin-top: 10px;
  background: white;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  position: relative;
  cursor: ${e=>e.$activeTool==="drawing"?"none":e.cursor};
`,Pr=w.canvas`
  display: block;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`,Rr=w.canvas`
  display: block;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  touch-action: none; 
`,zr=w.textarea`
  position: absolute;
  z-index: 10;
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
`,Yr=w.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  border-radius: 50%;
  border: 2px solid ${e=>e.color};
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.8), 0 0 4px rgba(0,0,0,0.2);
  display: ${e=>e.$visible?"block":"none"};
  transition: width 0.1s, height 0.1s;
`,Xr=({fieldSize:e,fieldType:t})=>{const r=C.useRef(null),h=C.useRef(null),a=C.useRef(null),o=C.useRef(null),i=C.useRef(!1),c=C.useRef(null),p=C.useRef(null),g=C.useRef(null),[f,l]=C.useState({width:800,height:500}),[d,s]=C.useState(!1),[u,m]=C.useState(""),[x,M]=C.useState({x:0,y:0}),[y,b]=C.useState(!1),L=C.useRef(!1),T=C.useRef([]),S=C.useRef([]),I=C.useRef(null),k=ge(),{activeTool:B,drawColor:v,brushSize:$,brushOpacity:A,brushStyle:z,lineType:D,paths:Y,objects:Z,selectedObjectId:R,textFontSize:O,textColor:J,shapeBorderColor:q,shapeBorderOpacity:G,shapeFillColor:N,shapeFillOpacity:j,shapeBorderWidth:V,shapeBorderStyle:H,shapeLineCapStart:oe,shapeLineCapEnd:K}=Ye(E=>E.tacticsBoard);C.useEffect(()=>{p.current=R},[R]);const{redrawStatic:ne,drawLiveLayer:U,drawSingleObjectOnActive:Q,clearActiveLayer:ee,tempObjectDataRef:ce,tempPathDataRef:Be}=br(r,h),{cursorStyle:Ce,setCursorStyle:de,startDrag:he,updateDragPosition:we,endDrag:be,updateCursor:at,checkForHandle:st,draggedObjectRef:ue,checkIfPointInSelectedBounds:lt}=Mr(),{resizeHandleRef:pe,startResize:Oe,updateResize:wt,endResize:bt}=Br(),{drawingRef:Me,startDrawing:kn,continueDrawing:Mt,endDrawing:vt,shapeStartRef:Xe,isDrawingShapeRef:ve,startShape:Bn,endShape:Lt}=Tr(),Tn=1500,In=640,En=1400,ct=e.width/e.height,$t=C.useCallback(()=>{var Tt;const E=a.current;if(!E)return{width:800,height:500};const X=((Tt=E.parentElement)==null?void 0:Tt.clientWidth)||window.innerWidth,W=X/Tn,P=En*W,F=In*W,_=P,re=_/ct,Te=F,Gn=Te*ct;let Ie,De;re<=F?(Ie=_,De=re):(Ie=Gn,De=Te);const dt=X*.95;if(Ie>dt){const Dn=dt/Ie;Ie=dt,De=De*Dn}return{width:Math.floor(Ie),height:Math.floor(De)}},[ct]),Ne=E=>{const X=h.current;if(!X)return{x:0,y:0};let W,P;E.changedTouches&&E.changedTouches.length>0?(W=E.changedTouches[0].clientX,P=E.changedTouches[0].clientY):E.touches&&E.touches.length>0?(W=E.touches[0].clientX,P=E.touches[0].clientY):(W=E.clientX,P=E.clientY);const F=X.getBoundingClientRect(),_=X.width/F.width,re=X.height/F.height;return{x:(W-F.left)*_,y:(P-F.top)*re}},St=E=>({x:Math.max(0,Math.min(E.x,f.width)),y:Math.max(0,Math.min(E.y,f.height))}),Ge=C.useCallback(E=>{if(B==="drawing"&&g.current){let P,F;E.touches&&E.touches.length>0?(P=E.touches[0].clientX,F=E.touches[0].clientY):(P=E.clientX,F=E.clientY),g.current.style.left=`${P}px`,g.current.style.top=`${F}px`}if(!ue.current&&!pe.current&&!Me.current&&!ve.current)return;E.cancelable&&E.preventDefault();const X=Ne(E),W=St(X);if((ue.current||pe.current)&&!L.current&&(L.current=!0),pe.current){const P=wt(X);P&&Q(P,v,!0)}else if(ue.current){const P=we(X,f.width,f.height);P&&Q(P,v,!0)}else if(Me.current){const P=Mt(W);P&&P.length>=2&&U({id:"live_drawing",type:"path",points:P,color:v,brushSize:$,opacity:A,brushStyle:z,lineType:D},null,D==="solid")}else if(ve.current&&Xe.current){const P=B.replace("shape_","");U(null,{type:P,start:Xe.current,end:W,borderColor:q,borderStyle:H,borderWidth:V,fillColor:N,fillOpacity:j},!1)}},[f,ue,pe,Me,ve,we,wt,U,Q,Mt,B,v,$,Xe,q,H,V,N,j,A,z,D]),qe=C.useCallback(E=>{window.removeEventListener("mousemove",Ge),window.removeEventListener("mouseup",qe),window.removeEventListener("touchmove",Ge),window.removeEventListener("touchend",qe),L.current=!1;const X=Ne(E),W=St(X);if(!p.current&&!Me.current&&!ve.current&&ee(),Me.current){const P=vt();P&&k(Zn({points:P,color:v,brushSize:$,opacity:A,brushStyle:z,lineType:D})),ee()}if(ve.current&&Xe.current){const P=B.replace("shape_",""),F=Lt(W,P);if(F){const _={type:"shape",shape:P,...F,borderColor:q,borderOpacity:G,borderWidth:V,borderStyle:H,color:q};P==="line"||P==="arrow"?(_.lineCapStart=oe,_.lineCapEnd=P==="arrow"?"arrow":K):(_.fillColor=N,_.fillOpacity=j),k(ht(_))}ee()}if(ue.current){const P=be();if(P)if(P.type==="path"){const F=parseInt(P.id.replace("path_",""));k(Se({index:F,updates:P}))}else k(ze({id:P.id,updates:P}))}if(pe.current){const P=bt();if(P&&P.id)if(P.type==="path"){const F=parseInt(P.id.replace("path_",""));k(Se({index:F,updates:P}))}else k(ze({id:P.id,updates:P}))}de("default")},[Ge,Me,ve,Xe,ue,pe,B,vt,Lt,be,bt,k,v,$,q,G,V,H,N,j,oe,K,de,ee]),kt=E=>{if(E.button!==void 0&&E.button!==0)return;window.addEventListener("mousemove",Ge),window.addEventListener("mouseup",qe),window.addEventListener("touchmove",Ge,{passive:!1}),window.addEventListener("touchend",qe);const X=Ne(E),W=r.current;if(d){Bt();return}if(B==="cursor"){const P=R?R.startsWith("path_")?{...Y[parseInt(R.replace("path_",""))],type:"path",id:R}:Z.find(_=>_.id===R):null;if(P){const _=ae(P,W);if(_){const re=st(X,P,W);if(re){Oe(re,P,X,_);return}if(lt(X,P,W)){he(P,X,W);return}}}const F=gn(X.x,X.y,Z,Y,$,W);F?(p.current=F.id,k(It(F.id)),ae(F,W)&&he(F,X,W)):(p.current=null,k(Ve()))}else if(B==="drawing")kn(X),U({id:"live_drawing",type:"path",points:[X],color:v,brushSize:$,opacity:A,brushStyle:z,lineType:D},null,!1);else if(B.startsWith("shape_"))Bn(X);else if(B.startsWith("figure_")){const P={player:"👤",goalkeeper:"🧤",coach:"🧠",referee:"⚖️",goal:"🥅",cone:"🟨"},F=B.replace("figure_","");k(ht({type:"figure",figureType:F,icon:P[F],x:X.x,y:X.y,size:30}))}else if(B==="ball")k(ht({type:"ball",x:X.x,y:X.y,radius:10}));else if(B==="text"){const P=`text_${Date.now()}_${Math.random()}`;s(!0),m(""),M(X),c.current=P,k(It(P)),p.current=P}},Pn=E=>{if(ue.current||pe.current||Me.current||ve.current||E.touches)return;B==="drawing"&&g.current&&(g.current.style.left=`${E.clientX}px`,g.current.style.top=`${E.clientY}px`);const X=Ne(E),W=r.current;B==="cursor"&&at(X,Z,Y,p.current,$,W)},Rn=()=>b(!0),zn=()=>b(!1);C.useEffect(()=>{const E=()=>{const X=$t();l(X)};return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[$t]),C.useEffect(()=>{const E=r.current,X=h.current,W=a.current;E&&X&&W&&(E.width=f.width,E.height=f.height,E.style.width=`${f.width}px`,E.style.height=`${f.height}px`,X.width=f.width,X.height=f.height,X.style.width=`${f.width}px`,X.style.height=`${f.height}px`,W.style.width=`${f.width}px`,W.style.height=`${f.height}px`,i.current||(k(An({canvasWidth:f.width,canvasHeight:f.height})),i.current=!0),ne(Y,Z,B,v,$,R))},[f,k,ne,Y,Z,R,B,v,$]),C.useEffect(()=>{if(L.current)return;const E=T.current,X=S.current,W=I.current;let P=!1,F=null;if(R&&R===W){if(R.startsWith("path_")){const _=parseInt(R.replace("path_",""));Y[_]!==X[_]&&(P=!0,F={...Y[_],type:"path",id:R})}else{const _=Z.find(Te=>Te.id===R),re=E.find(Te=>Te.id===R);_!==re&&(P=!0,F=_)}(Z.length!==E.length||Y.length!==X.length)&&(P=!1)}if(P&&F)Q(F,v,!0);else if(ne(Y,Z,B,v,$,R),R){let _=null;if(R.startsWith("path_")){const re=parseInt(R.replace("path_",""));Y[re]&&(_={...Y[re],type:"path",id:R})}else _=Z.find(re=>re.id===R);_?Q(_,v,!0):ee()}else ee();T.current=Z,S.current=Y,I.current=R},[Y,Z,R,ne,Q,ee,B,v,$]),C.useEffect(()=>{f.width>0&&f.height>0&&k(Fn({canvasWidth:f.width,canvasHeight:f.height}))},[f,k]),C.useEffect(()=>{if(d&&o.current&&h.current){const E=o.current;setTimeout(()=>{E.focus(),E.select()},0);const X=h.current,W=X.getBoundingClientRect(),P=X.width/W.width,F=X.height/W.height,_=x.x/P,re=x.y/F;E.style.left=`${_}px`,E.style.top=`${re}px`,E.style.fontSize=`${O/F}px`,E.style.color=J,E.style.width="auto",E.style.height="auto"}},[d,x,J,O]),C.useEffect(()=>{const E=X=>{X.key==="Escape"&&!d&&(k(Ve()),p.current=null)};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[R,d,k]),C.useEffect(()=>{k(Ve()),p.current=null},[B,k]);const Yn=E=>{m(E.target.value),o.current&&(o.current.style.height="auto",o.current.style.height=o.current.scrollHeight+"px")},Bt=()=>{const E=u.trim();E&&k(Hn({id:c.current,x:x.x,y:x.y,text:E,fontSize:O,color:J})),s(!1),m(""),c.current=null,k(je("cursor"))},Xn=E=>{E.key==="Escape"&&(E.preventDefault(),s(!1),m(""),k(Ve()),p.current=null,k(je("cursor")))};return n.jsxs(Ir,{children:[n.jsx(Yr,{ref:g,size:$,color:v,$visible:B==="drawing"&&y}),n.jsxs(Er,{ref:a,cursor:Ce,$activeTool:B,onMouseEnter:Rn,onMouseLeave:zn,children:[n.jsx(Pr,{ref:r}),n.jsx(Rr,{ref:h,onMouseDown:kt,onTouchStart:kt,onMouseMove:Pn}),d&&n.jsx(zr,{ref:o,value:u,onChange:Yn,onBlur:Bt,onKeyDown:Xn,placeholder:"Введіть текст",rows:1})]})]})},Gr=e=>C.createElement("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32",xmlSpace:"preserve",...e},C.createElement("path",{className:"st0",d:"M20,29h-8c-2.2,0-4-1.8-4-4V7c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v18C24,27.2,22.2,29,20,29z"}),C.createElement("circle",{className:"st0",cx:16,cy:16,r:4}),C.createElement("line",{className:"st0",x1:8,y1:16,x2:24,y2:16}),C.createElement("rect",{x:13,y:3,className:"st0",width:6,height:4}),C.createElement("rect",{x:13,y:25,className:"st0",width:6,height:4})),Dr=e=>C.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Zr=e=>C.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"})),Ar=e=>C.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("circle",{cx:12,cy:12,r:9,strokeWidth:2}),C.createElement("path",{d:"M18 18L6 6",strokeWidth:2})),$n=e=>C.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},C.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fillRule:"evenodd"},C.createElement("g",{id:"Arrow",transform:"translate(-528.000000, 0.000000)",fillRule:"nonzero"},C.createElement("g",{id:"forward_2_line",transform:"translate(528.000000, 0.000000)"},C.createElement("path",{d:"M17.954,11.6767 C16.6468,9.47493 14.2448,8 11.5,8 C7.35786,8 4,11.3579 4,15.5 C4,16.0523 3.55228,16.5 3,16.5 C2.44772,16.5 2,16.0523 2,15.5 C2,10.2533 6.25329,6 11.5,6 C14.6814,6 17.4961,7.56337 19.22,9.96279 L19.757,6.91751 C19.8529,6.37361 20.3715,6.01044 20.9154,6.10635 C21.4593,6.20225 21.8225,6.72091 21.7266,7.2648 L20.6847,13.1736 C20.6386,13.4348 20.4907,13.667 20.2735,13.8192 C19.9896,14.0179 19.6122,14.0542 19.2977,13.9445 L13.6174,12.9429 C13.0735,12.847 12.7103,12.3284 12.8062,11.7845 C12.9021,11.2406 13.4208,10.8774 13.9647,10.9733 L17.954,11.6767 Z",id:"\\u8DEF\\u5F84"}))))),Fr=e=>C.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.93417 2C7.95604 2 7.97799 2 8 2L16.0658 2C16.9523 1.99995 17.7161 1.99991 18.3278 2.08215C18.9833 2.17028 19.6117 2.36902 20.1213 2.87868C20.631 3.38835 20.8297 4.0167 20.9179 4.67221C21.0001 5.28388 21.0001 6.0477 21 6.9342L21 7.95C21 8.50229 20.5523 8.95 20 8.95C19.4477 8.95 19 8.50229 19 7.95V7.00001C19 6.02893 18.9979 5.40122 18.9357 4.93871C18.8774 4.50497 18.7832 4.36902 18.7071 4.2929C18.631 4.21677 18.495 4.12263 18.0613 4.06431C17.5988 4.00213 16.9711 4 16 4H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V4H8C7.02893 4 6.40122 4.00213 5.93871 4.06431C5.50497 4.12263 5.36902 4.21677 5.2929 4.2929C5.21677 4.36902 5.12263 4.50497 5.06431 4.93871C5.00213 5.40122 5 6.02893 5 7.00001V7.95C5 8.50229 4.55229 8.95 4 8.95C3.44772 8.95 3 8.50229 3 7.95V7.00001C3 6.97799 3 6.95604 3 6.93418C2.99995 6.04769 2.99991 5.28387 3.08215 4.67221C3.17028 4.0167 3.36902 3.38835 3.87868 2.87868C4.38835 2.36902 5.0167 2.17028 5.67221 2.08215C6.28387 1.99991 7.04769 1.99995 7.93417 2Z"}),C.createElement("path",{d:"M7 21H17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Sn=e=>C.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.51192 4.43057C6.82641 4.161 7.29989 4.19743 7.56946 4.51192L13.5695 11.5119C13.8102 11.7928 13.8102 12.2072 13.5695 12.4881L7.56946 19.4881C7.29989 19.8026 6.82641 19.839 6.51192 19.5695C6.19743 19.2999 6.161 18.8264 6.43057 18.5119L12.0122 12L6.43057 5.48811C6.161 5.17361 6.19743 4.70014 6.51192 4.43057ZM10.5121 4.43068C10.8266 4.16111 11.3001 4.19753 11.5697 4.51202L17.5697 11.512C17.8104 11.7929 17.8104 12.2073 17.5697 12.4882L11.5697 19.4882C11.3001 19.8027 10.8266 19.8391 10.5121 19.5696C10.1976 19.3 10.1612 18.8265 10.4308 18.512L16.0124 12.0001L10.4308 5.48821C10.1612 5.17372 10.1976 4.70024 10.5121 4.43068Z"})),Hr=e=>C.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("rect",{x:3,y:5,width:18,height:14,rx:2,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Wr=e=>C.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),_r=e=>C.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.0001 5.94363L4.76627 18H19.2339L12.0001 5.94363ZM10.7138 4.20006C11.2964 3.22905 12.7037 3.22905 13.2863 4.20006L21.4032 17.7282C22.0031 18.728 21.2829 20 20.117 20H3.88318C2.71724 20 1.99706 18.728 2.59694 17.7282L10.7138 4.20006Z"})),Vr=e=>C.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z"})),jr=e=>C.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M6 12H18M18 12L13 7M18 12L13 17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Or=w.div`
  position: relative;
  display: inline-block;
`,Nr=w.button`
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
`,qr=w.div`
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
`,Jr=w.button`
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
`,Gt=w.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,pt=[{id:"rectangle",name:"Прямокутник",icon:n.jsx(Hr,{}),style:{stroke:"currentColor",fill:"none"}},{id:"circle",name:"Коло",icon:n.jsx(Wr,{}),style:{stroke:"currentColor",fill:"none"}},{id:"triangle",name:"Трикутник",icon:n.jsx(_r,{}),style:{fill:"currentColor",stroke:"none"}},{id:"line",name:"Лінія",icon:n.jsx(Vr,{}),style:{fill:"currentColor",stroke:"none"}},{id:"arrow",name:"Стрілка",icon:n.jsx(jr,{}),style:{stroke:"currentColor",fill:"none"}}],Ur=({activeTool:e,onSelectShape:t})=>{const[r,h]=C.useState(!1),[a,o]=C.useState({top:0,left:0}),i=C.useRef(null),c=C.useRef(null),p=e.startsWith("shape_"),g=p?e.replace("shape_",""):null,f=pt.find(x=>x.id===g),l=()=>{if(c.current){const x=c.current.getBoundingClientRect();o({top:x.bottom+window.scrollY,left:x.left+window.scrollX})}h(!r)},d=x=>{t(x),h(!1)},s=x=>{i.current&&!i.current.contains(x.target)&&h(!1)};C.useEffect(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}),[]);const u=()=>{const x=f||pt[0];return n.jsx(Gt,{children:Et.cloneElement(x.icon,x.style)})},m=x=>Et.cloneElement(x.icon,x.style);return n.jsxs(Or,{ref:i,children:[n.jsx(Nr,{ref:c,title:"Геометричні фігури",onClick:l,active:p,children:u()}),n.jsx(qr,{isOpen:r,style:{top:a.top,left:a.left},children:pt.map(x=>n.jsx(Jr,{onClick:()=>d(x),title:x.name,children:n.jsx(Gt,{children:m(x)})},x.id))})]})},Kr=w.div`
  position: relative;
  display: inline-block;
`,Qr=w.button`
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
`,eo=w.div`
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
`,to=w.button`
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
`,Dt=[{id:"player",name:"Гравець",icon:"👤"},{id:"goalkeeper",name:"Воротар",icon:"🧤"},{id:"coach",name:"Тренер",icon:"🧠"},{id:"referee",name:"Суддя",icon:"⚖️"},{id:"goal",name:"Ворота",icon:"🥅"},{id:"cone",name:"Стійка",icon:"🟨"}],no=({activeTool:e,onSelectFigure:t})=>{const[r,h]=C.useState(!1),[a,o]=C.useState({top:0,left:0}),i=C.useRef(null),c=C.useRef(null),p=e.startsWith("figure_"),g=p?e.replace("figure_",""):null,f=Dt.find(m=>m.id===g),l=()=>{if(c.current){const m=c.current.getBoundingClientRect();o({top:m.bottom+window.scrollY,left:m.left+window.scrollX})}h(!r)},d=m=>{t(m),h(!1)},s=m=>{i.current&&!i.current.contains(m.target)&&h(!1)};C.useEffect(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}),[]);const u=()=>f?f.icon:"👤";return n.jsxs(Kr,{ref:i,children:[n.jsx(Qr,{ref:c,title:"Спортивні фігури",onClick:l,active:p,children:u()}),n.jsx(eo,{isOpen:r,style:{top:a.top,left:a.left},children:Dt.map(m=>n.jsx(to,{onClick:()=>d(m),title:m.name,children:m.icon},m.id))})]})},Zt=e=>C.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M9.19762 11.9582L9.91426 11.737L9.19762 11.9582ZM9.54558 10.8683L9.08995 10.2726L9.54558 10.8683ZM9.91896 14.2952L9.20232 14.5164L9.91896 14.2952ZM14.0579 14.2952L13.3413 14.074L14.0579 14.2952ZM14.4313 10.8683L13.9757 11.4641V11.4641L14.4313 10.8683ZM14.7793 11.9582L15.4959 12.1794L14.7793 11.9582ZM12.5948 9.46375L13.0504 8.86802L12.5948 9.46375ZM11.3821 9.46375L11.8377 10.0595L11.3821 9.46375ZM20.1847 17.75C20.5989 17.75 20.9347 17.4142 20.9347 17C20.9347 16.5858 20.5989 16.25 20.1847 16.25V17.75ZM14.7793 19.7351L14.0677 19.4982L14.7793 19.7351ZM13.4801 21.2631C13.3492 21.6561 13.5617 22.0807 13.9547 22.2116C14.3477 22.3424 14.7724 22.1299 14.9033 21.7369L13.4801 21.2631ZM3.99769 16.25C3.58348 16.25 3.24769 16.5858 3.24769 17C3.24769 17.4142 3.58348 17.75 3.99769 17.75V16.25ZM9.40314 19.7351L10.1147 19.4982L9.40314 19.7351ZM9.27917 21.7369C9.41002 22.1299 9.83469 22.3424 10.2277 22.2116C10.6207 22.0807 10.8332 21.6561 10.7024 21.2631L9.27917 21.7369ZM8.22071 17.3775L7.78185 17.9857L8.22071 17.3775ZM5.556 5.45942C5.4489 5.05928 5.03772 4.82173 4.63759 4.92882C4.23746 5.03591 3.9999 5.44709 4.10699 5.84723L5.556 5.45942ZM5.24951 7.21519L4.52501 7.40909V7.40909L5.24951 7.21519ZM3.59168 11.5885L3.17811 10.9628L3.17811 10.9628L3.59168 11.5885ZM1.62739 11.9879C1.28185 12.2163 1.18689 12.6816 1.4153 13.0271C1.64372 13.3727 2.109 13.4676 2.45454 13.2392L1.62739 11.9879ZM19.934 5.84732C20.0411 5.44719 19.8035 5.036 19.4034 4.92891C19.0033 4.82182 18.5921 5.05938 18.485 5.45951L19.934 5.84732ZM18.7915 7.21528L18.067 7.02137L18.7915 7.21528ZM20.4493 11.5886L20.0357 12.2143L20.4493 11.5886ZM21.5864 13.2393C21.932 13.4677 22.3973 13.3728 22.6257 13.0272C22.8541 12.6817 22.7591 12.2164 22.4136 11.988L21.5864 13.2393ZM16.0903 3.83623C16.4288 3.5975 16.5096 3.12956 16.2709 2.79107C16.0322 2.45257 15.5642 2.3717 15.2257 2.61044L16.0903 3.83623ZM14.3376 4.15456L14.7699 4.76746L14.3376 4.15456ZM9.66562 4.10403L9.22021 4.70744V4.70744L9.66562 4.10403ZM8.61539 2.39659C8.28213 2.15059 7.81255 2.22133 7.56656 2.55459C7.32056 2.88784 7.3913 3.35742 7.72456 3.60341L8.61539 2.39659ZM14.7793 11.3678L14.0627 11.589L14.7793 11.3678ZM9.19762 11.3678L9.91426 11.589L9.19762 11.3678ZM21.2269 12C21.2269 17.1095 17.0899 21.25 11.9885 21.25V22.75C17.92 22.75 22.7269 17.9362 22.7269 12H21.2269ZM11.9885 21.25C6.88701 21.25 2.75 17.1095 2.75 12H1.25C1.25 17.9362 6.05695 22.75 11.9885 22.75V21.25ZM2.75 12C2.75 6.89055 6.88701 2.75 11.9885 2.75V1.25C6.05695 1.25 1.25 6.06376 1.25 12H2.75ZM11.9885 2.75C17.0899 2.75 21.2269 6.89055 21.2269 12H22.7269C22.7269 6.06376 17.92 1.25 11.9885 1.25V2.75ZM12.1392 10.0595L13.9757 11.4641L14.887 10.2726L13.0504 8.86802L12.1392 10.0595ZM14.0626 11.737L13.3413 14.074L14.7746 14.5164L15.4959 12.1794L14.0626 11.737ZM13.1036 14.25H10.8733V15.75H13.1036V14.25ZM10.6356 14.074L9.91426 11.737L8.48098 12.1794L9.20232 14.5164L10.6356 14.074ZM10.0012 11.4641L11.8377 10.0595L10.9265 8.86802L9.08995 10.2726L10.0012 11.4641ZM20.1847 16.25H18.5696V17.75H20.1847V16.25ZM14.0677 19.4982L13.4801 21.2631L14.9033 21.7369L15.4909 19.972L14.0677 19.4982ZM18.5696 16.25C17.892 16.25 17.3207 16.2489 16.8555 16.302C16.3711 16.3574 15.9264 16.4781 15.5228 16.7693L16.4006 17.9857C16.5201 17.8994 16.6846 17.8313 17.0258 17.7923C17.3863 17.7511 17.8574 17.75 18.5696 17.75V16.25ZM15.4909 19.972C15.7161 19.2956 15.8662 18.8484 16.0193 18.5189C16.1643 18.2069 16.2809 18.072 16.4006 17.9857L15.5228 16.7693C15.1193 17.0605 14.8645 17.4444 14.659 17.8868C14.4615 18.3117 14.282 18.8545 14.0677 19.4982L15.4909 19.972ZM3.99769 17.75H5.61279V16.25H3.99769V17.75ZM8.69154 19.972L9.27917 21.7369L10.7024 21.2631L10.1147 19.4982L8.69154 19.972ZM5.61279 17.75C6.325 17.75 6.79611 17.7511 7.15658 17.7923C7.49784 17.8313 7.66228 17.8994 7.78185 17.9857L8.65958 16.7693C8.25598 16.4781 7.81137 16.3574 7.32692 16.302C6.86168 16.2489 6.29041 16.25 5.61279 16.25V17.75ZM10.1147 19.4982C9.90043 18.8545 9.7209 18.3117 9.52346 17.8868C9.31791 17.4445 9.06311 17.0605 8.65958 16.7693L7.78185 17.9857C7.90148 18.072 8.01815 18.2069 8.16314 18.5189C8.31624 18.8484 8.46634 19.2956 8.69154 19.972L10.1147 19.4982ZM4.10699 5.84723L4.52501 7.40909L5.97401 7.02128L5.556 5.45942L4.10699 5.84723ZM3.17811 10.9628L1.62739 11.9879L2.45454 13.2392L4.00526 12.2142L3.17811 10.9628ZM4.52501 7.40909C4.70933 8.09777 4.83021 8.55381 4.88378 8.91324C4.93452 9.25362 4.9114 9.43069 4.85896 9.56902L6.26156 10.1007C6.43795 9.63541 6.43932 9.17465 6.3674 8.69211C6.29831 8.22862 6.14941 7.67663 5.97401 7.02128L4.52501 7.40909ZM4.00526 12.2142C4.57077 11.8404 5.04807 11.5262 5.407 11.2252C5.78074 10.9119 6.08516 10.5661 6.26156 10.1007L4.85896 9.56902C4.80654 9.70729 4.70659 9.855 4.44321 10.0759C4.16501 10.3091 3.77244 10.57 3.17811 10.9628L4.00526 12.2142ZM18.485 5.45951L18.067 7.02137L19.516 7.40918L19.934 5.84732L18.485 5.45951ZM20.0357 12.2143L21.5864 13.2393L22.4136 11.988L20.8629 10.9629L20.0357 12.2143ZM18.067 7.02137C17.8916 7.67672 17.7427 8.22871 17.6736 8.6922C17.6017 9.17474 17.603 9.6355 17.7794 10.1008L19.182 9.56911C19.1296 9.43078 19.1065 9.25372 19.1572 8.91333C19.2108 8.5539 19.3316 8.09787 19.516 7.40918L18.067 7.02137ZM20.8629 10.9629C20.2685 10.5701 19.876 10.3092 19.5978 10.0759C19.3344 9.85509 19.2344 9.70739 19.182 9.56911L17.7794 10.1008C17.9558 10.5662 18.2602 10.912 18.634 11.2253C18.9929 11.5263 19.4702 11.8405 20.0357 12.2143L20.8629 10.9629ZM15.2257 2.61044L13.9054 3.54166L14.7699 4.76746L16.0903 3.83623L15.2257 2.61044ZM10.111 3.50061L8.61539 2.39659L7.72456 3.60341L9.22021 4.70744L10.111 3.50061ZM13.9054 3.54166C13.3231 3.9523 12.9373 4.22303 12.6189 4.39721C12.3174 4.56214 12.1438 4.60125 11.9966 4.59965L11.9803 6.09957C12.478 6.10495 12.9109 5.94721 13.3387 5.7132C13.7496 5.48845 14.2159 5.15817 14.7699 4.76746L13.9054 3.54166ZM9.22021 4.70744C9.76562 5.11004 10.2247 5.45033 10.6306 5.68391C11.0533 5.92712 11.4827 6.09418 11.9803 6.09957L11.9966 4.59965C11.8494 4.59806 11.6767 4.5552 11.3788 4.38379C11.0642 4.20276 10.6843 3.92375 10.111 3.50061L9.22021 4.70744ZM13.9757 11.4641C14.0179 11.4963 14.0475 11.5399 14.0627 11.589L15.4959 11.1465C15.3911 10.807 15.1828 10.4989 14.887 10.2726L13.9757 11.4641ZM14.0627 11.589C14.0773 11.6364 14.0779 11.6876 14.0626 11.737L15.4959 12.1794C15.6023 11.8349 15.5974 11.4754 15.4959 11.1465L14.0627 11.589ZM18.1938 9.14203L14.4923 10.6748L15.0662 12.0607L18.7677 10.5279L18.1938 9.14203ZM13.0504 8.86802C12.7371 8.62838 12.3624 8.50841 11.9885 8.50841V10.0084C12.0419 10.0084 12.0945 10.0253 12.1392 10.0595L13.0504 8.86802ZM11.9885 8.50841C11.6146 8.50841 11.2398 8.62838 10.9265 8.86802L11.8377 10.0595C11.8824 10.0253 11.935 10.0084 11.9885 10.0084V8.50841ZM12.7385 9.25841V5.34961H11.2385V9.25841H12.7385ZM13.3413 14.074C13.3259 14.1241 13.2962 14.166 13.2572 14.1967L14.1852 15.3752C14.4575 15.1608 14.6671 14.8646 14.7746 14.5164L13.3413 14.074ZM13.2572 14.1967C13.214 14.2308 13.1607 14.25 13.1036 14.25V15.75C13.5063 15.75 13.8846 15.6119 14.1852 15.3752L13.2572 14.1967ZM16.5291 16.887L14.2886 14.2954L13.1538 15.2765L15.3944 17.868L16.5291 16.887ZM10.8733 14.25C10.8162 14.25 10.7629 14.2308 10.7197 14.1967L9.79172 15.3752C10.0923 15.6119 10.4706 15.75 10.8733 15.75V14.25ZM10.7197 14.1967C10.6807 14.166 10.651 14.1241 10.6356 14.074L9.20232 14.5164C9.3098 14.8646 9.51943 15.1608 9.79172 15.3752L10.7197 14.1967ZM8.81059 17.8407L10.8456 15.2492L9.66584 14.3228L7.63084 16.9143L8.81059 17.8407ZM9.91426 11.737C9.89899 11.6876 9.89961 11.6364 9.91426 11.589L8.48099 11.1465C8.37949 11.4754 8.37465 11.8349 8.48098 12.1794L9.91426 11.737ZM9.91426 11.589C9.9294 11.5399 9.95905 11.4963 10.0012 11.4641L9.08995 10.2726C8.79412 10.4989 8.58579 10.807 8.48099 11.1465L9.91426 11.589ZM9.48889 10.6766L5.85153 9.14373L5.269 10.526L8.90636 12.0589L9.48889 10.6766Z"})),ro=e=>C.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5262 17.4999C18.4887 22.7611 11.7612 24.5637 6.49994 21.5262C1.23873 18.4886 -0.563901 11.7611 2.47367 6.49988C5.51123 1.23866 12.2387 -0.563962 17.4999 2.4736C22.7612 5.51117 24.5638 12.2387 21.5262 17.4999ZM5.84382 7.87995C5.25279 7.64272 4.74291 7.45257 4.3292 7.30543C5.59153 5.24057 7.56267 3.85898 9.74648 3.29362C9.77176 3.62621 9.82851 4.00289 9.93722 4.40861C10.3269 5.86297 11.3579 7.58777 13.75 8.96886C14.0666 9.15165 14.3765 9.31079 14.6793 9.44842C14.4757 10.219 14.1794 11.0351 13.7614 11.8848C13.3566 11.6365 12.936 11.3857 12.5 11.1339C9.85449 9.60655 7.52076 8.55305 5.84382 7.87995ZM12.7587 13.6161C12.3555 13.3682 11.9358 13.1176 11.5 12.866C8.94938 11.3934 6.70297 10.3799 5.09882 9.73602C4.44209 9.47241 3.89359 9.27099 3.47664 9.12556C2.8887 10.8629 2.86217 12.7007 3.33339 14.4015C3.63406 14.2571 3.98864 14.1179 4.39435 14.0092C5.84872 13.6195 7.85792 13.65 10.25 15.0311C10.5667 15.2139 10.8594 15.4027 11.13 15.5961C11.6875 15.0424 12.2384 14.3885 12.7587 13.6161ZM12.6204 16.9341C13.4037 17.8315 13.839 18.756 14.0628 19.5913C14.1715 19.997 14.2283 20.3736 14.2536 20.7061C15.962 20.2638 17.5403 19.3219 18.7509 17.9441C18.4164 17.6557 17.9678 17.2815 17.4112 16.8446C16.6284 16.2301 15.633 15.4925 14.4426 14.6962C13.8639 15.5605 13.2482 16.3006 12.6204 16.9341ZM9.52737 16.9296C9.43788 16.8737 9.34548 16.8182 9.25005 16.7631C7.31205 15.6442 5.84818 15.6902 4.91199 15.9411C4.58 16.03 4.30141 16.1484 4.0805 16.2639C4.53358 17.1073 5.12461 17.8846 5.84359 18.5583C5.87614 18.5513 5.90977 18.5439 5.94444 18.5361C6.44532 18.4223 7.15871 18.2112 7.97658 17.8245C8.4626 17.5947 8.98712 17.3022 9.52737 16.9296ZM7.92672 20.018C8.21347 19.909 8.51642 19.7815 8.83145 19.6326C9.54844 19.2936 10.3256 18.8442 11.1145 18.2503C11.6989 18.9202 11.9873 19.5728 12.131 20.109C12.2199 20.4409 12.2567 20.7413 12.2672 20.9903C10.8031 21.0352 9.31171 20.7231 7.92672 20.018ZM18.6461 15.2714C17.8061 14.612 16.7364 13.8204 15.4558 12.968C15.9672 11.9634 16.3317 10.9922 16.5833 10.0701C17.7521 10.2998 18.7704 10.2145 19.6057 9.99072C20.0114 9.88202 20.3659 9.74284 20.6666 9.59846C21.2688 11.7723 21.0579 14.1701 19.9008 16.2957C19.5666 16.011 19.147 15.6645 18.6461 15.2714ZM16.9702 8.10789C17.8425 8.27902 18.5519 8.20254 19.0881 8.05887C19.42 7.96992 19.6986 7.85154 19.9195 7.73607C19.2263 6.44565 18.2102 5.3101 16.907 4.46319C16.956 4.76614 16.9971 5.09234 17.0257 5.43977C17.0906 6.23015 17.09 7.1278 16.9702 8.10789ZM15.0328 7.39372C15.0854 6.73963 15.0764 6.13922 15.0324 5.60348C14.9583 4.70183 14.7845 3.97847 14.6326 3.4878C14.622 3.45374 14.6116 3.42082 14.6013 3.38905C13.6584 3.10331 12.6898 2.9801 11.7329 3.00943C11.7433 3.2585 11.7801 3.55897 11.8691 3.89097C12.1199 4.82716 12.812 6.11791 14.75 7.23681C14.8454 7.2919 14.9397 7.34416 15.0328 7.39372Z"})),oo=e=>C.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M11.5697 12.5532L12.1617 13.0137V13.0137L11.5697 12.5532ZM11.3142 3.64586L12.0065 3.93432V3.93432L11.3142 3.64586ZM18.555 14.5045C18.8336 14.198 18.811 13.7237 18.5045 13.445C18.198 13.1664 17.7237 13.189 17.445 13.4955L18.555 14.5045ZM17.7087 14.3204L17.1538 13.8159L17.1538 13.8159L17.7087 14.3204ZM21.2426 10.7426L21.7773 10.2166L21.773 10.2123L21.2426 10.7426ZM21.4531 12.026C21.7436 12.3213 22.2184 12.3251 22.5137 12.0346C22.809 11.7442 22.8129 11.2693 22.5224 10.974L21.4531 12.026ZM5.7327 19.0428C5.31848 19.0428 4.9827 19.3786 4.9827 19.7928C4.9827 20.207 5.31848 20.5428 5.7327 20.5428V19.0428ZM3.5 15.75C3.08579 15.75 2.75 16.0858 2.75 16.5C2.75 16.9142 3.08579 17.25 3.5 17.25V15.75ZM8.19231 3.35575C8.35162 2.9734 8.17081 2.5343 7.78846 2.37498C7.40611 2.21567 6.96701 2.39648 6.80769 2.77883L8.19231 3.35575ZM6.80769 15.2885C6.96701 15.6708 7.40611 15.8516 7.78846 15.6923C8.17081 15.533 8.35162 15.0939 8.19231 14.7115L6.80769 15.2885ZM11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5C10.25 6.91421 10.5858 7.25 11 7.25V5.75ZM19.876 16.916C20.1057 17.2607 20.5714 17.3538 20.916 17.124C21.2607 16.8943 21.3538 16.4286 21.124 16.084L19.876 16.916ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75C2.75 6.89137 6.89137 2.75 12 2.75V1.25ZM12 12.75H12.0917V11.25H12V12.75ZM11.408 11.5395L10.9777 12.0928L12.1617 13.0137L12.592 12.4605L11.408 11.5395ZM11.3077 1.71154L10.6219 3.35739L12.0065 3.93432L12.6923 2.28846L11.3077 1.71154ZM17.445 13.4955L17.1538 13.8159L18.2637 14.8249L18.555 14.5045L17.445 13.4955ZM20.708 11.2686L21.4531 12.026L22.5224 10.974L21.7773 10.2167L20.708 11.2686ZM17.1538 13.8159C14.2838 16.9729 9.96086 19.0428 5.7327 19.0428V20.5428C10.4211 20.5428 15.1357 18.2657 18.2637 14.8249L17.1538 13.8159ZM10.6219 3.35739C9.39039 6.31308 9.66695 9.68222 11.364 12.3975L12.636 11.6025C11.1965 9.29929 10.9619 6.44145 12.0065 3.93432L10.6219 3.35739ZM10.9777 12.0928C9.18293 14.4003 6.42334 15.75 3.5 15.75V17.25C6.88622 17.25 10.0828 15.6866 12.1617 13.0137L10.9777 12.0928ZM6.80769 2.77883C5.13077 6.80344 5.13077 11.2638 6.80769 15.2885L8.19231 14.7115C6.66923 11.0562 6.66923 7.01114 8.19231 3.35575L6.80769 2.77883ZM11 7.25C14.6428 7.25 18.1364 8.6971 20.7123 11.273L21.773 10.2123C18.9158 7.35514 15.0406 5.75 11 5.75V7.25ZM12.0917 12.75C15.2197 12.75 18.1408 14.3133 19.876 16.916L21.124 16.084C19.1107 13.064 15.7213 11.25 12.0917 11.25V12.75Z"})),io=e=>C.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.9386 4.73542C13.3511 4.69785 13.716 5.0018 13.7535 5.4143C13.8024 5.95058 13.893 6.53361 14.045 7.14711C14.1447 7.54916 13.8995 7.95586 13.4974 8.05549C13.0954 8.15512 12.6887 7.90997 12.5891 7.50791C12.4172 6.81421 12.3148 6.15558 12.2597 5.55036C12.2221 5.13785 12.5261 4.77299 12.9386 4.73542ZM5.23942 9.18054C5.47821 8.84208 5.94616 8.76129 6.28461 9.00008C6.78119 9.35043 7.30041 9.76836 7.81522 10.2641C8.1136 10.5514 8.12256 11.0262 7.83525 11.3246C7.54794 11.6229 7.07315 11.6319 6.77478 11.3446C6.31949 10.9062 5.85988 10.5362 5.41988 10.2257C5.08142 9.98694 5.00063 9.51899 5.23942 9.18054ZM13.836 8.99599C14.2094 8.81661 14.6574 8.97385 14.8368 9.3472C14.9605 9.60468 15.097 9.86417 15.2474 10.1247C15.3979 10.3852 15.5543 10.6332 15.7155 10.869C15.9491 11.2111 15.8612 11.6778 15.5192 11.9114C15.1772 12.145 14.7105 12.0572 14.4769 11.7151C14.2947 11.4485 14.118 11.1685 13.9484 10.8747C13.7788 10.5809 13.6246 10.2879 13.4848 9.99681C13.3054 9.62346 13.4627 9.17538 13.836 8.99599ZM8.48046 12.088C8.82249 11.8544 9.28917 11.9422 9.52281 12.2843C9.70496 12.5509 9.88164 12.8309 10.0513 13.1247C10.2209 13.4185 10.375 13.7115 10.5149 14.0026C10.6943 14.3759 10.537 14.824 10.1637 15.0034C9.79032 15.1828 9.34223 15.0256 9.16285 14.6522C9.03914 14.3947 8.90267 14.1352 8.75225 13.8747C8.60182 13.6142 8.44534 13.3662 8.28421 13.1304C8.05057 12.7883 8.13843 12.3217 8.48046 12.088ZM16.1644 12.6748C16.4517 12.3765 16.9265 12.3675 17.2249 12.6548C17.6802 13.0932 18.1398 13.4632 18.5798 13.7737C18.9183 14.0125 18.9991 14.4804 18.7603 14.8189C18.5215 15.1573 18.0535 15.2381 17.7151 14.9993C17.2185 14.649 16.6993 14.2311 16.1845 13.7353C15.8861 13.448 15.8771 12.9732 16.1644 12.6748ZM10.5022 15.9439C10.9043 15.8443 11.311 16.0894 11.4106 16.4915C11.5825 17.1852 11.6849 17.8438 11.74 18.4491C11.7776 18.8616 11.4736 19.2264 11.0611 19.264C10.6486 19.3016 10.2837 18.9976 10.2462 18.5851C10.1973 18.0488 10.1067 17.4658 9.95466 16.8523C9.85502 16.4502 10.1002 16.0436 10.5022 15.9439Z"}),C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2859 1.32632C11.0551 1.05591 8.71992 1.48034 6.62484 2.68993C1.4832 5.65846 -0.278462 12.2331 2.69007 17.3747C5.6586 22.5164 12.2332 24.278 17.3748 21.3095C19.4699 20.0999 21.0051 18.2898 21.8863 16.2227C23.1661 13.2206 23.0684 9.67094 21.3096 6.62471C19.5509 3.57847 16.5256 1.71902 13.2859 1.32632ZM13.7802 3.08033C13.7309 3.49161 13.3576 3.7851 12.9463 3.73585C12.5351 3.68661 12.2416 3.31329 12.2908 2.90201C12.297 2.85081 12.3032 2.8013 12.3096 2.75354C10.638 2.6958 8.93097 3.09054 7.37484 3.98897C5.81951 4.88694 4.62362 6.16839 3.83764 7.64494C3.88216 7.66328 3.92814 7.68258 3.97552 7.70286C4.35631 7.86585 4.53288 8.30668 4.36989 8.68748C4.20689 9.06827 3.76606 9.24484 3.38527 9.08184C3.33556 9.06057 3.2878 9.04062 3.24212 9.02195C2.41524 11.457 2.60225 14.2226 3.98911 16.6247C5.37596 19.0268 7.67752 20.5716 10.1998 21.073C10.2065 21.0241 10.2131 20.9728 10.2195 20.9191C10.2687 20.5078 10.6421 20.2143 11.0533 20.2636C11.4646 20.3128 11.7581 20.6861 11.7089 21.0974C11.7027 21.1486 11.6965 21.198 11.6901 21.2458C13.3618 21.3034 15.0695 20.9084 16.6248 20.0104C18.181 19.112 19.3764 17.831 20.1621 16.3545C20.1176 16.3362 20.0716 16.3168 20.0242 16.2966C19.6434 16.1336 19.4668 15.6927 19.6298 15.3119C19.7928 14.9311 20.2336 14.7546 20.6144 14.9176C20.6641 14.9388 20.7119 14.9588 20.7576 14.9775C21.5849 12.5411 21.3972 9.77639 20.0106 7.37471C18.624 4.97302 16.3236 3.42808 13.7999 2.92639C13.7932 2.97529 13.7866 3.02664 13.7802 3.08033Z"})),ao=e=>C.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.1665 2.75836L21.2416 8.83351C21.2677 7.81177 21.2303 6.84352 21.1649 5.98862C21.0341 4.27797 19.722 2.96586 18.0114 2.83507C17.1565 2.76971 16.1882 2.7323 15.1665 2.75836ZM21.1071 10.8203L13.1797 2.89285C10.483 3.1978 7.77958 4.04236 5.91097 5.91097C4.04236 7.77958 3.1978 10.483 2.89285 13.1797L10.8203 21.1071C13.517 20.8022 16.2204 19.9576 18.089 18.089C19.9576 16.2204 20.8022 13.517 21.1071 10.8203ZM8.83351 21.2416L2.75836 15.1665C2.7323 16.1882 2.76971 17.1565 2.83507 18.0114C2.96587 19.722 4.27797 21.0341 5.98861 21.1649C6.84352 21.2303 7.81177 21.2677 8.83351 21.2416ZM13.3854 1.36321C15.1096 1.19733 16.7638 1.2353 18.1257 1.33944C20.5746 1.52667 22.4733 3.4254 22.6606 5.87426C22.7647 7.23618 22.8027 8.89045 22.6368 10.6146C22.3524 13.5707 21.4579 16.8414 19.1497 19.1497C16.8414 21.4579 13.5707 22.3524 10.6146 22.6368C8.89045 22.8027 7.23618 22.7647 5.87426 22.6606C3.4254 22.4733 1.52667 20.5746 1.33944 18.1257C1.2353 16.7638 1.19733 15.1096 1.36321 13.3854C1.6476 10.4293 2.54206 7.15857 4.85031 4.85031C7.15857 2.54206 10.4293 1.6476 13.3854 1.36321ZM11.9426 8.1601C12.2355 7.86721 12.7104 7.86721 13.0032 8.1601L13.8914 9.0482L14.7795 8.1601C15.0723 7.86721 15.5472 7.86721 15.8401 8.1601C16.133 8.45299 16.133 8.92787 15.8401 9.22076L14.952 10.1089L15.8401 10.997C16.133 11.2899 16.133 11.7647 15.8401 12.0576C15.5472 12.3505 15.0723 12.3505 14.7795 12.0576L13.8914 11.1695L13.0608 12.0001L13.9489 12.8882C14.2418 13.1811 14.2418 13.656 13.9489 13.9489C13.656 14.2418 13.1811 14.2418 12.8882 13.9489L12.0001 13.0608L11.1695 13.8914L12.0576 14.7795C12.3505 15.0723 12.3505 15.5472 12.0576 15.8401C11.7647 16.133 11.2899 16.133 10.997 15.8401L10.1089 14.952L9.22076 15.8401C8.92787 16.133 8.45299 16.133 8.1601 15.8401C7.86721 15.5472 7.86721 15.0723 8.1601 14.7795L9.0482 13.8914L8.1601 13.0032C7.86721 12.7104 7.86721 12.2355 8.1601 11.9426C8.45299 11.6497 8.92787 11.6497 9.22076 11.9426L10.1089 12.8307L10.9394 12.0001L10.0513 11.112C9.75845 10.8191 9.75845 10.3442 10.0513 10.0513C10.3442 9.75845 10.8191 9.75845 11.112 10.0513L12.0001 10.9394L12.8307 10.1089L11.9426 9.22076C11.6497 8.92787 11.6497 8.45299 11.9426 8.1601Z"})),so=e=>C.createElement("svg",{fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 32 32","data-name":"Layer 1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("rect",{height:1,transform:"translate(20 51) rotate(180)",width:16,x:2,y:25}),C.createElement("rect",{height:1,transform:"translate(26 59) rotate(180)",width:16,x:5,y:29}),C.createElement("rect",{height:1,transform:"translate(39 -8) rotate(90)",width:19,x:14,y:15}),C.createElement("rect",{height:1,transform:"translate(21 10) rotate(90)",width:19,x:-4,y:15}),C.createElement("path",{d:"M24,25H23v2a2,2,0,0,1-2,2H20v1h1a3,3,0,0,0,3-3Z"}),C.createElement("path",{d:"M17,26h1v1a2,2,0,0,0,2,2h1v1H20a3,3,0,0,1-3-3Z"}),C.createElement("path",{d:"M2,26H3v1a2,2,0,0,0,2,2H6v1H5a3,3,0,0,1-3-3Z"}),C.createElement("rect",{height:1,width:6,x:24,y:6}),C.createElement("rect",{height:1,width:19,x:8,y:2}),C.createElement("path",{d:"M5,6H6V5A2,2,0,0,1,8,3H9V2H8A3,3,0,0,0,5,5Z"}),C.createElement("path",{d:"M23,6h1V5a2,2,0,0,1,2-2h1V2H26a3,3,0,0,0-3,3Z"}),C.createElement("path",{d:"M30,6H29V5a2,2,0,0,0-2-2H26V2h1a3,3,0,0,1,3,3Z"})),lo=w.div`
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
`,co=w.div`
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
`,ho=w.div`
  padding: 20px 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 2px solid ${({theme:e})=>e.mainBGColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme:e})=>e.ContainerBGColor};
`,po=w.h2`
  margin: 0;
  font-size: 24px;
  color: ${({theme:e})=>e.textBlack};
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,uo=w.button`
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
`,go=w.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`,xo=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  @media (max-width: 768px) {
    gap: 6px;
  }
`,fo=w.button`
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
`,mo=w.div`
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
`,yo=w.div`
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
`,Co=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
`,wo=w.div`
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
`,bo=w.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.textBlack};
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,Mo=w.div`
  font-size: 13px;
  color: ${({theme:e})=>e.textGray};
  line-height: 1.5;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,vo=w.div`
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
`,Lo=w.div`
  position: relative;
  width: ${e=>{const h=e.fieldWidth,a=e.fieldHeight,o=100/h,i=80/a,c=Math.min(o,i);return`${h*c}px`}};
  height: ${e=>{const h=e.fieldWidth,a=e.fieldHeight,o=100/h,i=80/a,c=Math.min(o,i);return`${a*c}px`}};
  background: ${({theme:e})=>e.greenMain};
  border: 2px solid ${({theme:e})=>e.darkGreen};
  border-radius: 2px;
  
  /* Гарантуємо мінімальний розмір для дуже малих полів */
  min-width: 20px;
  min-height: 20px;
`,At=w.div`
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
`,$o={FOOTBALL:[{id:"football_standard",name:"Стандартне поле",width:105,height:68},{id:"football_small",name:"Мале поле",width:90,height:45},{id:"football_futsal",name:"Футзал",width:40,height:20}],BASKETBALL:[{id:"basketball_nba",name:"NBA",width:28.65,height:15.24},{id:"basketball_fiba",name:"FIBA",width:28,height:15}],VOLLEYBALL:[{id:"volleyball_indoor",name:"Закритий майданчик",width:18,height:9},{id:"volleyball_beach",name:"Пляжний майданчик",width:16,height:8}],TENNIS:[{id:"tennis_singles",name:"Одиночний розряд",width:23.77,height:8.23},{id:"tennis_doubles",name:"Парний розряд",width:23.77,height:10.97}],RUGBY:[{id:"rugby_standard",name:"Регбі (15 гравців)",width:100,height:70},{id:"rugby_sevens",name:"Регбі-7",width:94,height:68}],HANDBALL:[{id:"handball_standard",name:"Гандбол",width:40,height:20}],SHEET:[{id:"a4_portrait",name:"A4 Портрет",width:21,height:29.7},{id:"a4_landscape",name:"A4 Ландшафт",width:29.7,height:21},{id:"a3_portrait",name:"A3 Портрет",width:29.7,height:42},{id:"a3_landscape",name:"A3 Ландшафт",width:42,height:29.7},{id:"a3_landscape1",name:"A3 Ландшафт",width:600,height:29.7},{id:"a3_landscape2",name:"A3 Ландшафт",width:2,height:529.7}]},So=[{id:"FOOTBALL",name:"Футбол",icon:Zt},{id:"RUGBY",name:"Регбі",icon:ao},{id:"BASKETBALL",name:"Баскетбол",icon:ro},{id:"VOLLEYBALL",name:"Волейбол",icon:oo},{id:"TENNIS",name:"Теніс",icon:io},{id:"HANDBALL",name:"Гандбол",icon:Zt},{id:"SHEET",name:"Аркуш",icon:so}],ko=({isOpen:e,onClose:t,onSelectField:r,currentFieldId:h})=>{var d;const[a,o]=C.useState("FOOTBALL"),[i,c]=C.useState(h);if(!e)return null;const p=s=>{c(s.id),r(s),setTimeout(()=>t(),300)},g=s=>{s.target===s.currentTarget&&t()},f=(s,u)=>u==="SHEET"?`${s.width}см × ${s.height}см`:`${s.width}м × ${s.height}м`,l=(s,u)=>u==="SHEET"?`${s}см`:`${s}м`;return n.jsx(lo,{onClick:g,children:n.jsxs(co,{children:[n.jsxs(ho,{children:[n.jsx(po,{children:"Обрати спортивне поле"}),n.jsx(uo,{onClick:t,children:n.jsx(Wn,{})})]}),n.jsxs(go,{children:[n.jsx(xo,{children:So.map(s=>{const u=s.icon;return n.jsxs(fo,{active:a===s.id,onClick:()=>o(s.id),children:[n.jsx(mo,{children:n.jsx(u,{})}),s.name]},s.id)})}),n.jsx(yo,{children:n.jsx(Co,{children:(d=$o[a])==null?void 0:d.map(s=>n.jsxs(wo,{selected:i===s.id,onClick:()=>p(s),children:[n.jsx(bo,{children:s.name}),n.jsx(Mo,{children:f(s,a)}),n.jsx(vo,{children:n.jsxs(Lo,{fieldWidth:s.width,fieldHeight:s.height,children:[n.jsx(At,{className:"width",children:l(s.width,a)}),n.jsx(At,{className:"height",children:l(s.height,a)})]})})]},s.id))})})]})]})})},Bo=w(Fr)`
  width: 80%;
  height: 80%;
  stroke: ${({theme:e})=>e.textBlack};
   fill: ${({theme:e})=>e.textBlack};
`,To=w(Sn)`
  width: 100%;
  height: 100%;
   fill: ${({theme:e})=>e.black};
   rotate: 180deg;
`,Io=w(Ar)`
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.textBlack};
`,Eo=w($n)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.textBlack};
`,Po=w($n)`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  fill: ${({theme:e})=>e.textBlack};
`,Ro=w(Dr)`
  width: 70%;  
  height: 70%;
  stroke: ${({theme:e})=>e.textBlack};
`,zo=w(Zr)`
  width: 70%;  
  height: 70%;
  fill: ${({theme:e})=>e.textBlack};
`,Yo=w.div`
  width: 100%;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-bottom: 2px solid ${({theme:e})=>e.gray};
  padding: 12px 16px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`,Xo=w.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`,Go=w.div`
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
`,Do=w.div`
  flex-shrink: 0;
  position: relative;
  z-index: 10;
`,xe=w.button`
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

`,Zo=w.button`
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
  
`,Ao=w(Gr)`
  width: 60%;
  height: 60%;
  fill: none;
  stroke: ${({theme:e})=>e.textBlack};
`,Ue=w.div`
  width: 1px;
  height: 20px;
  background: ${({theme:e})=>e.gray};
  margin: 0 4px;
  
  @media (max-width: 768px) {
    height: 16px;
  }
`,Ft=w.div`
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
`,Ht=w.span`
  font-size: 11px;
  color: ${({theme:e})=>e.textGray};
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 9px;
  }
`,Wt=w.input`
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
`,Fo=w.input`
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
`,_t=({value:e,onChange:t,...r})=>{const[h,a]=C.useState(e),o=C.useRef(null);C.useEffect(()=>{o.current||a(e)},[e]);const i=c=>{const p=c.target.value;a(p),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{t(p),o.current=null},200)};return n.jsx(Fo,{type:"color",value:h,onChange:i,...r})},Ho=({currentField:e,onSelectField:t,isSidebarOpen:r,onToggleSidebar:h})=>{const[a,o]=C.useState(!1),i=ge(),{activeTool:c,team1:p,team2:g,historyIndex:f,history:l}=Ye($=>$.tacticsBoard),d=()=>{o(!0)},s=()=>{o(!1)},u=$=>{t($),s()},m=$=>{i(je($))},x=$=>{i(je(`shape_${$.id}`))},M=$=>{i(je(`figure_${$.id}`))},y=$=>{const A=parseInt($.target.value)||0;i(_n(Math.max(0,Math.min(30,A))))},b=$=>{i(Vn($))},L=$=>{const A=parseInt($.target.value)||0;i(jn(Math.max(0,Math.min(30,A))))},T=$=>{i(On($))},S=()=>{i(Nn())},I=()=>{i(qn())},k=()=>{window.confirm("Ви впевнені, що хочете очистити всю дошку?")&&i(Jn())},B=f>0,v=f<l.length-1;return n.jsxs(n.Fragment,{children:[n.jsx(Yo,{children:n.jsxs(Xo,{children:[n.jsxs(Go,{children:[n.jsx(xe,{title:"Обрати поле",onClick:d,children:n.jsx(Ao,{})}),n.jsx(Ue,{}),n.jsx(xe,{title:"Курсор (виділення та переміщення)",active:c==="cursor",onClick:()=>m("cursor"),children:n.jsx(Ro,{})}),n.jsx(xe,{title:"Додати текст",active:c==="text",onClick:()=>m("text"),children:n.jsx(Bo,{})}),n.jsx(xe,{title:"Малювання",active:c==="drawing",onClick:()=>m("drawing"),children:n.jsx(zo,{})}),n.jsx(Ur,{activeTool:c,onSelectShape:x}),n.jsx(no,{activeTool:c,onSelectFigure:M}),n.jsx(Ue,{}),n.jsxs(Ft,{children:[n.jsx(Ht,{children:"К1:"}),n.jsx(Wt,{type:"number",min:"0",max:"30",value:p.count,onChange:y,title:"Кількість гравців команди 1"}),n.jsx(_t,{value:p.color,onChange:b,title:"Колір команди 1"})]}),n.jsxs(Ft,{children:[n.jsx(Ht,{children:"К2:"}),n.jsx(Wt,{type:"number",min:"0",max:"30",value:g.count,onChange:L,title:"Кількість гравців команди 2"}),n.jsx(_t,{value:g.color,onChange:T,title:"Колір команди 2"})]}),n.jsx(Ue,{}),n.jsx(xe,{title:"М'яч",active:c==="ball",onClick:()=>m("ball"),children:"⚽"}),n.jsx(Ue,{}),n.jsx(xe,{title:"Назад (Undo)",onClick:S,disabled:!B,children:n.jsx(Po,{})}),n.jsx(xe,{title:"Вперед (Redo)",onClick:I,disabled:!v,children:n.jsx(Eo,{})}),n.jsx(xe,{title:"Скасувати все",onClick:k,children:n.jsx(Io,{})})]}),n.jsx(Do,{children:n.jsx(Zo,{title:"Відкрити панель інструментів",active:r,onClick:h,children:n.jsx(To,{})})})]})}),n.jsx(ko,{isOpen:a,onClose:s,onSelectField:u,currentFieldId:e.id})]})},Wo=w.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,_o=w.div`
  display: grid;
  grid-template-columns: 40px 1fr 80px;
  gap: 8px;
  align-items: center;
`,Vo=w.div`
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
`,jo=w.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  border: 2px solid ${({theme:e})=>e.lightGreen||"#ccc"};
  cursor: pointer;
  overflow: hidden;
`,Oo=w.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,No=w.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,qo=w.input`
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
`,Jo=w.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
`,Uo=w.div`
  position: relative;
`,Ko=w.input`
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
`,Qo=w.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
  display: block;
  text-align: center;
  margin-top: 2px;
`,Vt=e=>Math.max(0,Math.min(1,e/100)),ei=e=>Math.round(Math.max(0,Math.min(100,e*100))),jt=(e,t=1)=>{if(!e)return"0, 0, 0, 1";let r=e.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const h=parseInt(r.slice(0,2),16),a=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`${h}, ${a}, ${o}, ${t}`},se=({color:e,opacity:t,onColorChange:r,onOpacityChange:h,label:a})=>{const[o,i]=C.useState(e||"#000000"),[c,p]=C.useState(t!==void 0?t:100),g=C.useRef(null),f=C.useRef(null),l=C.useRef(null),d=C.useMemo(()=>{const L=Vt(c);return jt(o,L)},[o,c]),[s,u]=C.useState(d),m=C.useMemo(()=>{const L=Vt(c);return{backgroundColor:`rgba(${jt(o,L)})`}},[o,c]);C.useEffect(()=>{f.current||(i(e||"#000000"),p(t!==void 0?t:100))},[e,t]),C.useEffect(()=>{document.activeElement!==l.current&&u(d)},[d]);const x=L=>{const T=L.target.value;i(T),f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{r&&r(T),f.current=null},150)},M=L=>{const T=L.target.value;u(T);const S=T.split(",").map(I=>parseFloat(I.trim()));if(S.length>=3&&!S.some(isNaN)){const I=Math.max(0,Math.min(255,S[0]||0)),k=Math.max(0,Math.min(255,S[1]||0)),B=Math.max(0,Math.min(255,S[2]||0)),v=S[3]!==void 0?Math.max(0,Math.min(1,S[3])):1,$=`#${((1<<24)+(I<<16)+(k<<8)+B).toString(16).slice(1)}`,A=ei(v);i($),p(A),f.current&&clearTimeout(f.current),r&&r($),h&&h(A)}},y=L=>{let T=L.target.value,S=parseInt(T);isNaN(S)&&(S=0),S>100&&(S=100),S<0&&(S=0),p(S),h&&h(S)},b=()=>{g.current&&g.current.click()};return n.jsxs("div",{children:[a&&n.jsx(Wo,{children:a}),n.jsxs(_o,{children:[n.jsxs(Vo,{children:[n.jsx(jo,{style:m,onClick:b}),n.jsx(Oo,{ref:g,type:"color",value:o,onChange:x})]}),n.jsxs(No,{children:[n.jsx(qo,{ref:l,type:"text",value:s,onChange:M,placeholder:"0, 0, 0, 1"}),n.jsx(Jo,{children:"RGBA"})]}),n.jsxs(Uo,{children:[n.jsx(Ko,{type:"number",min:"0",max:"100",value:c,onChange:y}),n.jsx(Qo,{children:"Прозорість %"})]})]})]})},ti=w.div`
  position: relative;
  width: 100%;
`,ni=w.button`
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
`,ri=w.div`
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
`,oi=w.div`
  padding: 6px 8px;
  font-family: ${({$fontFamily:e})=>e||"Arial"};
  cursor: pointer;
  color: ${({theme:e})=>e.textBlack};
  background-color: ${({selected:e,theme:t})=>e?t.lightGreen:"transparent"};

  &:hover {
    background-color: ${({theme:e})=>e.greenMain};
    color: ${({theme:e})=>e.white};
  }
`,ii=w(ar)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) rotate(${({$open:e})=>e?"180deg":"0"});
  width: 20px;
  height: 20px;
  stroke: ${({theme:e})=>e.iconColor};
  transition: transform 0.3s ease;
`,le=({value:e,onChange:t,options:r=[],placeholder:h="Оберіть..."})=>{const[a,o]=C.useState(!1),i=C.useRef(null),c=()=>o(l=>!l),p=()=>o(!1),g=l=>{t(l),p()};C.useEffect(()=>{const l=d=>{i.current&&!i.current.contains(d.target)&&p()};return document.addEventListener("mousedown",l),()=>document.removeEventListener("mousedown",l)},[]);const f=r.find(l=>l.value===e);return n.jsxs(ti,{ref:i,children:[n.jsxs(ni,{onClick:c,$fontFamily:f==null?void 0:f.value,children:[f?f.label:h,n.jsx(ii,{$open:a})]}),a&&n.jsx(ri,{children:r.map(l=>n.jsx(oi,{onClick:()=>g(l.value),selected:l.value===e,$fontFamily:l.value,children:l.label},l.value))})]})},ai="/coaching-draft/assets/brush_marker-9c4a6bad.png",si="/coaching-draft/assets/brush_pencil-33e6165e.png",li="/coaching-draft/assets/brush_pen-07c57dd9.png",ci="/coaching-draft/assets/brush_oil-91e92a78.png",di="/coaching-draft/assets/brush_watercolor-e5ec0b25.png",hi="/coaching-draft/assets/brush_spray-d0145476.png",Ot=w.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,pi=w.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ut=w.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,Nt=w.label`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,ui=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,gi=w.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:h})=>{const a=(e-t)/(r-t)*100;return`linear-gradient(to right, ${h.greenMain} 0%, ${h.greenMain} ${a}%, ${h.lightGreen} ${a}%, ${h.lightGreen} 100%)`}};
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
`,xi=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 10px;
`,Ee=w.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px; 
  width: 100%;
  
  border: 2px solid ${({active:e,theme:t})=>e?t.darkGreen||"#388E3C":t.lightGreen||"#ccc"};
  background: ${({active:e,theme:t})=>e?t.lightGreen||"#E8F5E9":t.ContainerBGColor||"#fff"};
  
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  padding: 8px;
  overflow: hidden;

  /* Стиль для картинки всередині */
  img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Картинка впишеться, не обрізаючись */
    
    /* Якщо треба, щоб картинка ставала білою на активній кнопці, розкоментуйте це: */
    /* filter: ${({active:e})=>e?"brightness(0) invert(1)":"none"}; */
    
    /* Але краще залишити як є, якщо штрихи чорні, а активна кнопка світло-зелена */
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    border-color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  }
  
  &:active {
    transform: translateY(0);
  }
`,qt=()=>{const e=ge(),{drawColor:t,brushSize:r,brushOpacity:h,brushStyle:a,lineType:o,selectedObjectId:i,paths:c}=Ye($=>$.tacticsBoard),p=i&&i.startsWith("path_")?parseInt(i.replace("path_","")):-1,g=p>=0?c[p]:null,f=g?g.brushStyle:a,l=g?g.color:t,d=g?g.opacity!==void 0?g.opacity:100:h,s=g?g.brushSize:r,u=g?g.lineType:o,[m,x]=C.useState(s),[M,y]=C.useState(50),[b,L]=C.useState(!0);C.useEffect(()=>{switch(x(s),g?g.brushStyle:a){case"hard":y(50),L(!0);break;case"pencil":y(20),L(!0);break;case"calligraphy":y(30),L(!1);break;case"oil":y(60),L(!1);break;case"watercolor":y(80),L(!1);break;case"splatter":y(100),L(!1);break;default:y(50),L(!0)}},[i,s,g,a]);const T=$=>{g?e(Se({index:p,updates:{brushStyle:$,lineType:["oil","watercolor","splatter","calligraphy"].includes($)?"solid":u}})):(e(Un($)),["oil","watercolor","splatter","calligraphy"].includes($)&&e(Pt("solid")))},S=$=>{e(g?Se({index:p,updates:{color:$}}):Kn($))},I=$=>{e(g?Se({index:p,updates:{opacity:$}}):Qn($))},k=$=>{x(parseInt($.target.value))},B=()=>{e(g?Se({index:p,updates:{brushSize:m}}):er(m))},v=$=>{e(g?Se({index:p,updates:{lineType:$}}):Pt($))};return n.jsxs(n.Fragment,{children:[n.jsxs(Ot,{children:[n.jsx(pi,{children:g?"Пензель":"Тип пензля"}),n.jsxs(xi,{children:[n.jsx(Ee,{active:f==="hard",onClick:()=>T("hard"),title:"Маркер",children:n.jsx("img",{src:ai,alt:"Маркер"})}),n.jsx(Ee,{active:f==="pencil",onClick:()=>T("pencil"),title:"Олівець",children:n.jsx("img",{src:si,alt:"Олівець"})}),n.jsx(Ee,{active:f==="calligraphy",onClick:()=>T("calligraphy"),title:"Перо",children:n.jsx("img",{src:li,alt:"Перо"})}),n.jsx(Ee,{active:f==="oil",onClick:()=>T("oil"),title:"Олія",children:n.jsx("img",{src:ci,alt:"Олія"})}),n.jsx(Ee,{active:f==="watercolor",onClick:()=>T("watercolor"),title:"Акварель",children:n.jsx("img",{src:di,alt:"Акварель"})}),n.jsx(Ee,{active:f==="splatter",onClick:()=>T("splatter"),title:"Спрей",children:n.jsx("img",{src:hi,alt:"Спрей"})})]})]}),n.jsxs(Ot,{children:[n.jsx(ut,{children:n.jsx(se,{color:l,opacity:d,onColorChange:S,onOpacityChange:I,label:"Колір та прозорість"})}),n.jsxs(ut,{children:[n.jsxs(Nt,{children:["Товщина лінії",n.jsxs(ui,{children:[m,"px"]})]}),n.jsx(gi,{min:"1",max:M,value:m,onChange:k,onMouseUp:B,onTouchEnd:B})]}),b&&n.jsxs(ut,{children:[n.jsx(Nt,{children:"Тип лінії"}),n.jsx(le,{value:u||"solid",onChange:v,options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]})]})},fi=w.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,mi=w.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,fe=w.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Le=w.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,yi=w.textarea`
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
`,Ke=w.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:h})=>{const a=(e-t)/(r-t)*100;return`linear-gradient(to right, ${h.greenMain||"#4CAF50"} 0%, ${h.greenMain||"#4CAF50"} ${a}%, ${h.lightGreen||"#E8F5E9"} ${a}%, ${h.lightGreen||"#E8F5E9"} 100%)`}};
  outline: none;
  margin: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:e})=>e.greenMain||"#4CAF50"};
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
    border: none;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme:e})=>e.greenMain||"#4CAF50"};
    cursor: pointer;
    border: none;
  }
`,Qe=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Ci=w.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,gt=w.button`
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
`,wi=({selectedObject:e})=>{const t=ge(),[r,h]=C.useState(e.text||"");C.useEffect(()=>{h(e.text||"")},[e.id,e.text]);const a=(i,c)=>{t(ze({id:e.id,updates:{[i]:c}}))},o=i=>{const c=i.target.value;h(c),a("text",c)};return n.jsxs(fi,{children:[n.jsx(mi,{children:"Властивості тексту"}),n.jsxs(fe,{children:[n.jsx(Le,{children:"Текст"}),n.jsx(yi,{value:r,onChange:o,placeholder:"Введіть текст...",$fontFamily:e.fontFamily})]}),n.jsx(fe,{children:n.jsx(se,{color:e.color||"#000000",opacity:e.opacity||100,onColorChange:i=>a("color",i),onOpacityChange:i=>a("opacity",i),label:"Колір і прозорість"})}),n.jsxs(fe,{children:[n.jsxs(Le,{children:["Розмір шрифту",n.jsxs(Qe,{children:[e.fontSize||16,"px"]})]}),n.jsx(Ke,{min:"8",max:"200",value:e.fontSize||16,onChange:i=>a("fontSize",Number(i.target.value))})]}),n.jsxs(fe,{children:[n.jsx(Le,{children:"Тип шрифту"}),n.jsx(le,{value:e.fontFamily||"Arial",onChange:i=>a("fontFamily",i),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(fe,{children:[n.jsx(Le,{children:"Стиль тексту"}),n.jsxs(Ci,{children:[n.jsx(gt,{$active:e.fontWeight==="bold",onClick:()=>a("fontWeight",e.fontWeight==="bold"?"normal":"bold"),children:n.jsx("strong",{children:"B"})}),n.jsx(gt,{$active:e.fontStyle==="italic",onClick:()=>a("fontStyle",e.fontStyle==="italic"?"normal":"italic"),children:n.jsx("em",{children:"I"})}),n.jsx(gt,{$active:e.textDecoration==="underline",onClick:()=>a("textDecoration",e.textDecoration==="underline"?"none":"underline"),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(fe,{children:[n.jsxs(Le,{children:["Міжрядковий інтервал",n.jsx(Qe,{children:(e.lineHeight||.9).toFixed(1)})]}),n.jsx(Ke,{min:"0.5",max:"3",step:"0.1",value:e.lineHeight||.9,onChange:i=>a("lineHeight",Number(i.target.value))})]}),n.jsxs(fe,{children:[n.jsxs(Le,{children:["Міжлітерний інтервал",n.jsxs(Qe,{children:[e.letterSpacing||0,"px"]})]}),n.jsx(Ke,{min:"-2",max:"10",step:"0.5",value:e.letterSpacing||0,onChange:i=>a("letterSpacing",Number(i.target.value))})]}),n.jsxs(fe,{children:[n.jsxs(Le,{children:["Поворот тексту",n.jsxs(Qe,{children:[e.rotation||0,"°"]})]}),n.jsx(Ke,{min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:i=>a("rotation",Number(i.target.value))})]})]})},bi=w.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Mi=w.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Pe=w.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,et=w.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,vi=w.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:h})=>{const a=(e-t)/(r-t)*100;return`linear-gradient(to right, ${h.greenMain} 0%, ${h.greenMain} ${a}%, ${h.lightGreen} ${a}%, ${h.lightGreen} 100%)`}};
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
`,Li=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,$i=w.p`
  font-size: 12px;
  color: ${({theme:e})=>e.textGray||"#777"};
  margin: 8px 0 0 0;
  font-style: italic;
`,Si=()=>{const e=ge(),{shapeBorderColor:t,shapeBorderOpacity:r,shapeFillColor:h,shapeFillOpacity:a,shapeBorderWidth:o,shapeBorderStyle:i,shapeLineCapStart:c,shapeLineCapEnd:p,activeTool:g}=Ye(l=>l.tacticsBoard),f=g==="shape_line"||g==="shape_arrow";return n.jsxs(bi,{children:[n.jsx(Mi,{children:"Налаштування фігури"}),n.jsx(Pe,{children:n.jsx(se,{color:t,opacity:r,onColorChange:l=>e(on(l)),onOpacityChange:l=>e(an(l)),label:f?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(Pe,{children:[n.jsxs(et,{children:[f?"Товщина лінії":"Товщина обводки",n.jsxs(Li,{children:[o,"px"]})]}),n.jsx(vi,{type:"range",min:"1",max:"20",value:o,onChange:l=>e(sn(Number(l.target.value)))})]}),n.jsxs(Pe,{children:[n.jsx(et,{children:"Тип обводки"}),n.jsx(le,{value:i,onChange:l=>e(ln(l)),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),f&&n.jsxs(n.Fragment,{children:[n.jsxs(Pe,{children:[n.jsx(et,{children:"Початок лінії"}),n.jsx(le,{value:c,onChange:l=>e(cn(l)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(Pe,{children:[n.jsx(et,{children:"Кінець лінії"}),n.jsx(le,{value:p||(g==="shape_arrow"?"arrow":"butt"),onChange:l=>e(dn(l)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!f&&n.jsx(Pe,{children:n.jsx(se,{color:h,opacity:a,onColorChange:l=>e(hn(l)),onOpacityChange:l=>e(pn(l)),label:"Колір заливки і прозорість"})}),n.jsx($i,{children:f?"Клікніть і потягніть, щоб намалювати лінію.":"Клікніть і потягніть, щоб намалювати фігуру."})]})},ki=w.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Bi=w.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,me=w.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ye=w.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Jt=w.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:h})=>{const a=(e-t)/(r-t)*100;return`linear-gradient(to right, ${h.greenMain} 0%, ${h.greenMain} ${a}%, ${h.lightGreen} ${a}%, ${h.lightGreen} 100%)`}};
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
`,Ut=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Ti=w.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,xt=w.input`
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
`,Fe=8,Ii=({selectedObject:e})=>{const t=ge(),r=(i,c)=>{t(ze({id:e.id,updates:{[i]:c}}))},h=(i,c)=>{let p=Number(c);p<Fe&&(p=Fe);const g=(e[i]||1)<0?-1:1;p*=g,e.shape==="circle"?t(ze({id:e.id,updates:{width:p,height:p}})):r(i,p)},a=e.shape==="line"||e.shape==="arrow",o=e.shape==="circle";return n.jsxs(ki,{children:[n.jsx(Bi,{children:"Властивості фігури"}),!a&&n.jsxs(me,{children:[n.jsx(ye,{children:o?"Діаметр":"Розміри"}),o?n.jsx(xt,{type:"number",min:Fe,value:Math.abs(e.width||50),onChange:i=>h("width",i.target.value)}):n.jsxs(Ti,{children:[n.jsxs("div",{children:[n.jsx(ye,{style:{fontSize:"10px",marginBottom:"4px"},children:"Ширина"}),n.jsx(xt,{type:"number",min:Fe,value:Math.abs(e.width||50),onChange:i=>h("width",i.target.value)})]}),n.jsxs("div",{children:[n.jsx(ye,{style:{fontSize:"10px",marginBottom:"4px"},children:"Висота"}),n.jsx(xt,{type:"number",min:Fe,value:Math.abs(e.height||30),onChange:i=>h("height",i.target.value)})]})]})]}),n.jsxs(me,{children:[n.jsxs(ye,{children:["Кут повороту",n.jsxs(Ut,{children:[e.rotation||0,"º"]})]}),n.jsx(Jt,{type:"range",min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:i=>r("rotation",Number(i.target.value))})]}),n.jsx(me,{children:n.jsx(se,{color:e.borderColor||e.color||"#000000",opacity:e.borderOpacity!==void 0?e.borderOpacity:100,onColorChange:i=>r("borderColor",i),onOpacityChange:i=>r("borderOpacity",i),label:a?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(me,{children:[n.jsxs(ye,{children:[a?"Товщина лінії":"Товщина обводки",n.jsxs(Ut,{children:[e.borderWidth||2,"px"]})]}),n.jsx(Jt,{type:"range",min:"1",max:"20",value:e.borderWidth||2,onChange:i=>r("borderWidth",Number(i.target.value))})]}),n.jsxs(me,{children:[n.jsx(ye,{children:"Тип обводки"}),n.jsx(le,{value:e.borderStyle||"solid",onChange:i=>r("borderStyle",i),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),a&&n.jsxs(n.Fragment,{children:[n.jsxs(me,{children:[n.jsx(ye,{children:"Початок лінії"}),n.jsx(le,{value:e.lineCapStart||"butt",onChange:i=>r("lineCapStart",i),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(me,{children:[n.jsx(ye,{children:"Кінець лінії"}),n.jsx(le,{value:e.lineCapEnd||(e.shape==="arrow"?"arrow":"butt"),onChange:i=>r("lineCapEnd",i),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!a&&n.jsx(me,{children:n.jsx(se,{color:e.fillColor||"#ffffff",opacity:e.fillOpacity!==void 0?e.fillOpacity:0,onColorChange:i=>r("fillColor",i),onOpacityChange:i=>r("fillOpacity",i),label:"Колір заливки і прозорість"})})]})},Ei=w.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Pi=w.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Re=w.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,tt=w.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Ri=w.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:h})=>{const a=(e-t)/(r-t)*100;return`linear-gradient(to right, ${h.greenMain} 0%, ${h.greenMain} ${a}%, ${h.lightGreen} ${a}%, ${h.lightGreen} 100%)`}};
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
`,zi=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Yi=w.p`
  font-size: 12px;
  color: ${({theme:e})=>e.textGray||"#777"};
  margin: 8px 0 0 0;
  font-style: italic;
`,Xi=()=>{const e=ge(),{shapeBorderColor:t,shapeBorderOpacity:r,shapeFillColor:h,shapeFillOpacity:a,shapeBorderWidth:o,shapeBorderStyle:i,shapeLineCapStart:c,shapeLineCapEnd:p,activeTool:g}=Ye(l=>l.tacticsBoard),f=g==="shape_line"||g==="shape_arrow";return n.jsxs(Ei,{children:[n.jsx(Pi,{children:"Налаштування фігури"}),n.jsx(Re,{children:n.jsx(se,{color:t,opacity:r,onColorChange:l=>e(on(l)),onOpacityChange:l=>e(an(l)),label:f?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(Re,{children:[n.jsxs(tt,{children:[f?"Товщина лінії":"Товщина обводки",n.jsxs(zi,{children:[o,"px"]})]}),n.jsx(Ri,{type:"range",min:"1",max:"20",value:o,onChange:l=>e(sn(Number(l.target.value)))})]}),n.jsxs(Re,{children:[n.jsx(tt,{children:"Тип обводки"}),n.jsx(le,{value:i,onChange:l=>e(ln(l)),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),f&&n.jsxs(n.Fragment,{children:[n.jsxs(Re,{children:[n.jsx(tt,{children:"Початок лінії"}),n.jsx(le,{value:c,onChange:l=>e(cn(l)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"perp",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(Re,{children:[n.jsx(tt,{children:"Кінець лінії"}),n.jsx(le,{value:p||(g==="shape_arrow"?"arrow":"butt"),onChange:l=>e(dn(l)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"perp",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!f&&n.jsx(Re,{children:n.jsx(se,{color:h,opacity:a,onColorChange:l=>e(hn(l)),onOpacityChange:l=>e(pn(l)),label:"Колір заливки і прозорість"})}),n.jsx(Yi,{children:f?"Клікніть і потягніть, щоб намалювати лінію.":"Клікніть і потягніть, щоб намалювати фігуру."})]})},He=w.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,We=w.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ie=w.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,$e=w.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Kt=w.input`
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
`,nt=w.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:h})=>{const a=(e-t)/(r-t)*100;return`linear-gradient(to right, ${h.greenMain} 0%, ${h.greenMain} ${a}%, ${h.lightGreen} ${a}%, ${h.lightGreen} 100%)`}};
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
`,rt=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Gi=w.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
  margin-top: 10px;
`,Di=w.div`
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
`,Zi=w.div`
  width: 30px; 
  height: 45px;
  background: ${({$color:e})=>e};
  border: 2px solid ${({$borderColor:e})=>e}; 
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); 
`,Ai=w.div`
  display: flex;
  flex-direction: row; 
  gap: 15px; 
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`,Qt=w.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,en=w.input.attrs({type:"color"})`
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
`,tn=w.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.textGray||"#666"};
  min-width: 45px; 
`,Fi=w.button`
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
`,Hi=w.button`
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
`,Wi=w.span`
  font-size: 10px;
  color: ${({theme:e,$over:t})=>t?e.red:e.textGray};
  margin-top: 4px;
  display: block;
`,nn=8,rn=50,ot=100,_e=3,_i=({selectedObject:e})=>{const t=ge(),r=(v,$)=>{t(ze({id:e.id,updates:{[v]:$}}))},h=v=>{let $=Number(v);$=Math.max(nn,Math.min(rn,$)),r("radius",$)},a=v=>{const $=Math.max(0,Math.min(99,Number(v)||0));r("number",$)},o=v=>{v.length<=ot&&r("topText",v)},i=()=>{const v=e.cards||[];if(v.length<_e){const $=[...v,{color:"#FFD700",cardBorderColor:"#000000"}];r("cards",$)}},c=v=>{const A=(e.cards||[]).filter((z,D)=>D!==v);r("cards",A)},p=(v,$)=>{const z=[...e.cards||[]];z[v]={...z[v],color:$},r("cards",z)},g=(v,$)=>{const z=[...e.cards||[]];z[v]={...z[v],cardBorderColor:$},r("cards",z)},f=e.radius||20,l=e.number!==void 0?e.number:1,d=e.topText||"",s=e.rotation||0,u=e.color||"#ff0000",m=e.colorOpacity!==void 0?e.colorOpacity:100,x=e.numberColor||"#ffffff",M=e.numberOpacity!==void 0?e.numberOpacity:100,y=e.textColor||"#000000",b=e.textOpacity!==void 0?e.textOpacity:100,L=e.textSize||Math.max(10,f*.5),T=e.borderWidth||2,S=e.borderColor||"#000000",I=e.borderOpacity!==void 0?e.borderOpacity:100,k=e.borderStyle||"solid",B=e.cards||[];return n.jsxs(n.Fragment,{children:[n.jsxs(He,{children:[n.jsx(We,{children:"Розмір та позиція"}),n.jsxs(ie,{children:[n.jsxs($e,{children:["Розмір гравця (8-50px)",n.jsxs(rt,{children:[f,"px"]})]}),n.jsx(nt,{min:nn,max:rn,value:f,onChange:v=>h(v.target.value)})]}),n.jsxs(ie,{children:[n.jsxs($e,{children:["Кут повороту",n.jsxs(rt,{children:[s,"º"]})]}),n.jsx(nt,{min:"-180",max:"180",step:"5",value:s,onChange:v=>r("rotation",Number(v.target.value))})]}),n.jsx(ie,{children:n.jsx(se,{color:u,opacity:m,onColorChange:v=>r("color",v),onOpacityChange:v=>r("colorOpacity",v),label:"Колір гравця"})})]}),n.jsxs(He,{children:[n.jsx(We,{children:"Номер гравця"}),n.jsxs(ie,{children:[n.jsx($e,{children:"Номер гравця (0-99)"}),n.jsx(Kt,{type:"number",min:"0",max:"99",value:l,onChange:v=>a(v.target.value)})]}),n.jsx(ie,{children:n.jsx(se,{color:x,opacity:M,onColorChange:v=>r("numberColor",v),onOpacityChange:v=>r("numberOpacity",v),label:"Колір номера"})})]}),n.jsxs(He,{children:[n.jsx(We,{children:"Текст над гравцем"}),n.jsxs(ie,{children:[n.jsx($e,{children:"Текст"}),n.jsx(Kt,{type:"text",maxLength:ot,placeholder:"Введіть текст",value:d,onChange:v=>o(v.target.value)}),n.jsxs(Wi,{$over:d.length>ot,children:[d.length,"/",ot," символів"]})]}),d&&n.jsxs(n.Fragment,{children:[n.jsxs(ie,{children:[n.jsxs($e,{children:["Розмір тексту",n.jsxs(rt,{children:[L,"px"]})]}),n.jsx(nt,{min:"8",max:"40",value:L,onChange:v=>r("textSize",Number(v.target.value))})]}),n.jsx(ie,{children:n.jsx(se,{color:y,opacity:b,onColorChange:v=>r("textColor",v),onOpacityChange:v=>r("textOpacity",v),label:"Колір тексту"})})]})]}),n.jsxs(He,{children:[n.jsx(We,{children:"Обводка"}),n.jsx(ie,{children:n.jsx(se,{color:S,opacity:I,onColorChange:v=>r("borderColor",v),onOpacityChange:v=>r("borderOpacity",v),label:"Колір обводки"})}),n.jsxs(ie,{children:[n.jsxs($e,{children:["Товщина обводки",n.jsxs(rt,{children:[T,"px"]})]}),n.jsx(nt,{min:"1",max:"10",value:T,onChange:v=>r("borderWidth",Number(v.target.value))})]}),n.jsxs(ie,{children:[n.jsx($e,{children:"Тип обводки"}),n.jsx(le,{value:k,onChange:v=>r("borderStyle",v),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]}),n.jsxs(He,{children:[n.jsxs(We,{children:["Картки (",B.length,"/",_e,")"]}),B.length>0&&n.jsx(Gi,{children:B.map((v,$)=>n.jsxs(Di,{children:[n.jsx(Zi,{$color:v.color,$borderColor:v.cardBorderColor||"#000000"}),n.jsxs(Ai,{children:[n.jsxs(Qt,{title:"Колір заливки картки",children:[n.jsx(tn,{children:"Заливка:"}),n.jsx(en,{value:v.color,onChange:A=>p($,A.target.value)})]}),n.jsxs(Qt,{title:"Колір обводки картки",children:[n.jsx(tn,{children:"Обводка:"}),n.jsx(en,{value:v.cardBorderColor||"#000000",onChange:A=>g($,A.target.value)})]})]}),n.jsx(Fi,{onClick:()=>c($),title:"Видалити картку",children:n.jsx(sr,{})})]},$))}),n.jsx(ie,{style:{marginTop:B.length>0?"15px":"0"},children:n.jsx(Hi,{onClick:i,disabled:B.length>=_e,children:B.length>=_e?`Максимум ${_e} картки`:"Додати картку"})})]})]})},Vi=w(Sn)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.black};
`,ji=w.div`
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
  
  /* Стилізація скролбару */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }
`,Oi=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
`,Ni=w.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,qi=w.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`,Ji=w.div`
  padding: 20px;
`,it=w.button`
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
`,Ui=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #ccc;
  text-align: center;
`,Ki=({isOpen:e,onClose:t})=>{const r=ge(),{activeTool:h,selectedObjectId:a,objects:o,paths:i}=Ye(f=>f.tacticsBoard),c=a?a.startsWith("path_")?{...i[parseInt(a.replace("path_",""))],type:"path",id:a}:o.find(f=>f.id===a):null,p=()=>{if(a){if(a.startsWith("path_")){const f=parseInt(a.replace("path_",""));r(tr(f))}else r(nr(a));r(Ve())}},g=()=>{if(c)switch(c.type){case"text":return n.jsxs(n.Fragment,{children:[n.jsx(wi,{selectedObject:c}),n.jsx(it,{onClick:p,children:"Видалити текст"})]});case"player":return n.jsx(_i,{selectedObject:c});case"shape":return n.jsxs(n.Fragment,{children:[n.jsx(Ii,{selectedObject:c}),n.jsx(it,{onClick:p,children:"Видалити фігуру"})]});case"path":return n.jsxs(n.Fragment,{children:[n.jsx(qt,{}),n.jsx(it,{onClick:p,children:"Видалити лінію"})]});default:return n.jsx(it,{onClick:p,children:"Видалити об'єкт"})}switch(h){case"text":return n.jsx(Si,{});case"drawing":return n.jsx(qt,{});case"shape_rectangle":case"shape_circle":case"shape_triangle":case"shape_line":case"shape_arrow":return n.jsx(Xi,{});default:return n.jsxs(Ui,{children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎯"}),n.jsx("p",{children:"Виберіть інструмент або об'єкт"}),n.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px",fontStyle:"italic"},children:"Налаштування з'являться тут"})]})}};return n.jsxs(ji,{$isOpen:e,children:[n.jsxs(Oi,{children:[n.jsx(Ni,{children:c?"Властивості":"Інструменти"}),n.jsx(qi,{title:"Закрити панель інструментів",onClick:t,children:n.jsx(Vi,{})})]}),n.jsx(Ji,{children:g()})]})},Qi=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: ${({theme:e})=>e.mainBGColor};
`,ea=w.div`
  background: ${({theme:e})=>e.ContainerBGColor};
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`,ta=w.div`
  width: 100%;
`,ia=({theme:e})=>{const{setTitle:t}=rr(),[r,h]=C.useState(!1),[a,o]=C.useState({id:"football_standard",name:"Стандартне футбольне поле",width:105,height:68}),i=g=>{o(g)},c=()=>{h(!r)},p=()=>{h(!1)};return C.useEffect(()=>{t("Тактична дошка")},[t]),n.jsx(or,{store:ir,children:n.jsx(Qi,{children:n.jsxs(ea,{children:[n.jsx(Ho,{currentField:a,onSelectField:i,isSidebarOpen:r,onToggleSidebar:c}),n.jsx(ta,{children:n.jsx(Xr,{fieldSize:{width:a.width,height:a.height},fieldType:a.id})}),n.jsx(Ki,{isOpen:r,onClose:p,children:n.jsx("div",{children:"Тут будуть інструменти"})})]})})})};export{ia as default};
