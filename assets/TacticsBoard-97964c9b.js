import{r as y,d as w,b as ge,a as Ye,_ as Pn,$ as pt,a0 as $e,a1 as Pe,a2 as Yn,a3 as Gn,a4 as Oe,j as n,a5 as Pt,a6 as Xn,a7 as Ne,W as Yt,S as Fn,a8 as Dn,a9 as An,aa as Zn,ab as Hn,ac as Wn,ad as _n,ae as Vn,af as jn,ag as Gt,ah as On,ai as Nn,aj as qn,ak as Un,al as Jn,am as Kn,an as Qn,ao as er,ap as tr,aq as nr,ar as rr,as as or,at as ir,au as ar,av as sr,aw as lr,ax as cr,ay as dr,az as hr,aA as pr,aB as ur,aC as gr,u as xr,aD as fr,aE as mr}from"./index-f48466b8.js";import{S as yr}from"./ChevronDownicon-13704cc4.js";import{S as Cr}from"./DeleteIcon-ea0865b2.js";const Ke=(e,t,r,d,a)=>{const i=Math.cos(a),o=Math.sin(a),l=e-r,p=t-d;return{x:r+(l*i-p*o),y:d+(l*o+p*i)}},ae=(e,t)=>{if(e.type==="player"){const r=e.radius||20,a=(e.rotation||0)*Math.PI/180;let i=e.x-r,o=e.x+r,l=e.y-r,p=e.y+r;if(e.topText){const g=e.textSize||Math.max(10,r*.5),x=g,h=e.topText.length*g*.6,c=-(r+x);[{x:-h/2,y:c-x*.2},{x:h/2,y:c-x*.2},{x:-h/2,y:c},{x:h/2,y:c}].forEach(u=>{const f=u.x*Math.cos(a)-u.y*Math.sin(a),m=u.x*Math.sin(a)+u.y*Math.cos(a);i=Math.min(i,e.x+f),o=Math.max(o,e.x+f),l=Math.min(l,e.y+m),p=Math.max(p,e.y+m)})}if(e.cards&&e.cards.length>0){const g=r*.35,x=g*1.4,h=2,c=Math.PI/4,s=Math.cos(c)*r*.7,u=Math.sin(c)*r*.7,f=e.cards.length-1,m=s-f*(g+h);[{x:m-g,y:u},{x:s,y:u},{x:m-g,y:u+x},{x:s,y:u+x}].forEach(C=>{const b=C.x*Math.cos(a)-C.y*Math.sin(a),v=C.x*Math.sin(a)+C.y*Math.cos(a);i=Math.min(i,e.x+b),o=Math.max(o,e.x+b),l=Math.min(l,e.y+v),p=Math.max(p,e.y+v)})}return{x:e.x-r,y:e.y-r,width:r*2,height:r*2,centerX:e.x,centerY:e.y}}if(e.type==="ball"){const r=e.radius||10;return{x:e.x-r,y:e.y-r,width:r*2,height:r*2,centerX:e.x,centerY:e.y}}if(e.type==="shape"){if(e.shape==="line"||e.shape==="arrow"){const l=e.rotation||0;if(l!==0){const c=l*Math.PI/180,s=(e.startX+e.endX)/2,u=(e.startY+e.endY)/2,f=Ke(e.startX,e.startY,s,u,c),m=Ke(e.endX,e.endY,s,u,c),M=Math.min(f.x,m.x),C=Math.max(f.x,m.x),b=Math.min(f.y,m.y),v=Math.max(f.y,m.y);return{x:M,y:b,width:C-M,height:v-b,startX:f.x,startY:f.y,endX:m.x,endY:m.y,originalStartX:e.startX,originalStartY:e.startY,originalEndX:e.endX,originalEndY:e.endY,centerX:s,centerY:u,rotation:l,rotatedCorners:[f,m]}}const p=Math.min(e.startX,e.endX),g=Math.max(e.startX,e.endX),x=Math.min(e.startY,e.endY),h=Math.max(e.startY,e.endY);return{x:p,y:x,width:g-p,height:h-x,startX:e.startX,startY:e.startY,endX:e.endX,endY:e.endY,rotation:e.rotation||0}}const r=e.width||50,d=e.height||30,a=e.rotation||0;if(e.shape==="circle"){const l=Math.max(Math.abs(r),Math.abs(d)),p=e.x+r/2,g=e.y+d/2;return{x:p-l/2,y:g-l/2,width:l,height:l,centerX:p,centerY:g,radius:l/2,originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:d,rotation:a}}if(a!==0){const l=a*Math.PI/180,p=e.x+r/2,g=e.y+d/2,h=[{x:e.x,y:e.y},{x:e.x+r,y:e.y},{x:e.x+r,y:e.y+d},{x:e.x,y:e.y+d}].map(m=>Ke(m.x,m.y,p,g,l));let c=h[0].x,s=h[0].x,u=h[0].y,f=h[0].y;return h.forEach(m=>{c=Math.min(c,m.x),s=Math.max(s,m.x),u=Math.min(u,m.y),f=Math.max(f,m.y)}),{x:c,y:u,width:s-c,height:f-u,centerX:p,centerY:g,originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:d,rotation:a,rotatedCorners:h}}const i=r<0?e.x+r:e.x,o=d<0?e.y+d:e.y;return{x:i,y:o,width:Math.abs(r),height:Math.abs(d),originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:d,rotation:a}}if(e.type==="figure"){const r=e.size||30;return{x:e.x-r/2,y:e.y-r/2,width:r,height:r,centerX:e.x,centerY:e.y}}if(e.type==="path"){if(!e.points||e.points.length===0)return null;let r=e.points[0].x,d=e.points[0].y,a=e.points[0].x,i=e.points[0].y;return e.points.forEach(o=>{r=Math.min(r,o.x),d=Math.min(d,o.y),a=Math.max(a,o.x),i=Math.max(i,o.y)}),{x:r,y:d,width:a-r,height:i-d,points:e.points,centerX:(r+a)/2,centerY:(d+i)/2}}if(e.type==="text"){if(t){const a=t.getContext("2d"),i=e.fontWeight||"normal",o=e.fontStyle||"normal",l=e.fontSize||16,p=e.fontFamily||"Arial";a.font=`${o} ${i} ${l}px ${p}`;const g=(e.text||"").split(`
`),x=(e.lineHeight||1.5)*l,h=e.letterSpacing||0;let c=0;g.forEach(M=>{let b=a.measureText(M).width;h!==0&&(b+=h*(M.length-1)),b>c&&(c=b)});const s=g.length>0?(g.length-1)*x+l:0,u=e.rotation||0,f=e.x+c/2,m=e.y+s/2;if(u!==0){const M=u*Math.PI/180,b=[{x:e.x,y:e.y},{x:e.x+c,y:e.y},{x:e.x+c,y:e.y+s},{x:e.x,y:e.y+s}].map(k=>Ke(k.x,k.y,f,m,M));let v=b[0].x,B=b[0].x,S=b[0].y,E=b[0].y;return b.forEach(k=>{v=Math.min(v,k.x),B=Math.max(B,k.x),S=Math.min(S,k.y),E=Math.max(E,k.y)}),{x:v,y:S,width:B-v,height:E-S,centerX:f,centerY:m,originalX:e.x,originalY:e.y,originalWidth:c,originalHeight:s,rotation:u,rotatedCorners:b}}return{x:e.x,y:e.y,width:c,height:s,centerX:f,centerY:m,originalX:e.x,originalY:e.y,originalWidth:c,originalHeight:s,rotation:0}}const r=e.width||100,d=e.height||20;return{x:e.x,y:e.y,width:r,height:d,centerX:e.x+r/2,centerY:e.y+d/2}}return null},wt=(e,t,r)=>{if(!r)return!1;if(r.rotatedCorners&&r.rotatedCorners.length>0){const d=r.rotatedCorners;let a=!1;for(let i=0,o=d.length-1;i<d.length;o=i++){const l=d[i].x,p=d[i].y,g=d[o].x,x=d[o].y;p>t!=x>t&&e<(g-l)*(t-p)/(x-p)+l&&(a=!a)}return a}return e>=r.x&&e<=r.x+r.width&&t>=r.y&&t<=r.y+r.height},Xt=(e,t,r,d=10,a)=>{const i=ae(r,a);if(!i)return!1;if(r.type==="path"){const o=Math.max(d,10);for(let l=0;l<r.points.length-1;l++){const p=r.points[l],g=r.points[l+1],x=g.x-p.x,h=g.y-p.y,c=Math.sqrt(x*x+h*h);if(c===0)continue;const s=Math.max(0,Math.min(1,((e-p.x)*x+(t-p.y)*h)/(c*c))),u=p.x+s*x,f=p.y+s*h;if(Math.sqrt(Math.pow(e-u,2)+Math.pow(t-f,2))<=o)return!0}return!1}if(r.type==="shape"&&(r.shape==="line"||r.shape==="arrow")){const l=i.endX-i.startX,p=i.endY-i.startY,g=Math.sqrt(l*l+p*p);if(g===0)return!1;const x=Math.max(0,Math.min(1,((e-i.startX)*l+(t-i.startY)*p)/(g*g))),h=i.startX+x*l,c=i.startY+x*p;return Math.sqrt(Math.pow(e-h,2)+Math.pow(t-c,2))<=10}if(r.type==="shape"&&r.shape==="circle"){const o=i.centerX||i.x+i.width/2,l=i.centerY||i.y+i.height/2,p=i.radius||Math.max(i.width,i.height)/2;return Math.sqrt(Math.pow(e-o,2)+Math.pow(t-l,2))<=p}return wt(e,t,i)},cn=(e,t)=>{if(t&&t.type==="shape"&&(t.shape==="line"||t.shape==="arrow"))return{start:{x:e.startX,y:e.startY,cursor:"crosshair"},end:{x:e.endX,y:e.endY,cursor:"crosshair"}};if(t&&t.type==="path")return{};if(t&&t.type==="text"){if(e.rotatedCorners&&e.rotatedCorners.length===4){const r=e.rotatedCorners;return{topLeft:{x:r[0].x,y:r[0].y,cursor:"nwse-resize"},topRight:{x:r[1].x,y:r[1].y,cursor:"nesw-resize"},bottomRight:{x:r[2].x,y:r[2].y,cursor:"nwse-resize"},bottomLeft:{x:r[3].x,y:r[3].y,cursor:"nesw-resize"}}}return{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"}}}if(e.rotatedCorners&&e.rotatedCorners.length===4){const r=e.rotatedCorners;return{topLeft:{x:r[0].x,y:r[0].y,cursor:"nwse-resize"},topRight:{x:r[1].x,y:r[1].y,cursor:"nesw-resize"},bottomRight:{x:r[2].x,y:r[2].y,cursor:"nwse-resize"},bottomLeft:{x:r[3].x,y:r[3].y,cursor:"nesw-resize"},top:{x:(r[0].x+r[1].x)/2,y:(r[0].y+r[1].y)/2,cursor:"ns-resize"},bottom:{x:(r[2].x+r[3].x)/2,y:(r[2].y+r[3].y)/2,cursor:"ns-resize"},left:{x:(r[0].x+r[3].x)/2,y:(r[0].y+r[3].y)/2,cursor:"ew-resize"},right:{x:(r[1].x+r[2].x)/2,y:(r[1].y+r[2].y)/2,cursor:"ew-resize"}}}return{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"},top:{x:e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.y+e.height/2,cursor:"ew-resize"}}},Ft=(e,t,r,d)=>{const a=cn(r,d),i=8;for(const[o,l]of Object.entries(a))if(d&&d.type==="shape"&&(d.shape==="line"||d.shape==="arrow")){if(Math.sqrt(Math.pow(e-l.x,2)+Math.pow(t-l.y,2))<=i*2)return{name:o,...l}}else if(Math.abs(e-l.x)<=i&&Math.abs(t-l.y)<=i)return{name:o,...l};return null},dn=(e,t,r,d,a,i)=>{for(let o=r.length-1;o>=0;o--)if(Xt(e,t,r[o],a,i))return r[o];for(let o=d.length-1;o>=0;o--){const l={...d[o],type:"path",id:`path_${o}`};if(Xt(e,t,l,a,i))return l}return null},hn=(e,t=1)=>{if(!e)return"rgba(0, 0, 0, 1)";let r=e.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const d=parseInt(r.slice(0,2),16),a=parseInt(r.slice(2,4),16),i=parseInt(r.slice(4,6),16);return`rgba(${d}, ${a}, ${i}, ${t})`},ke=e=>{let t=e.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}},te=e=>{const t=Math.sin(e)*1e4;return t-Math.floor(t)},bt=(e,t,r,d,a,i)=>{const o=Math.max(1,Math.floor(d*1.5));for(let l=0;l<o;l++){const p=te(t*r*l)*Math.PI*2,g=Math.sqrt(te(t+r+l))*d,x=Math.cos(p)*g,h=Math.sin(p)*g,c=i*(.2+te(l)*.7);e.fillStyle=`rgba(${a.r}, ${a.g}, ${a.b}, ${c})`;const s=.5+te(l*2);e.beginPath(),e.arc(t+x,r+h,s,0,Math.PI*2),e.fill()}},wr=(e,t,r,d,a,i)=>{e.lineCap="round",e.lineJoin="round";const o=ke(d),l=Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2)),p=Math.max(1,i*.2),g=Math.ceil(l/p);for(let x=0;x<g;x++){const h=x/g,c=t.x+(r.x-t.x)*h,s=t.y+(r.y-t.y)*h,u=(te(c*s)-.5)*.5;bt(e,c+u,s+u,i/2,o,a)}},Mt=(e,t,r,d,a,i)=>{const o=ke(d);e.lineCap="butt",e.lineJoin="round";const l=Math.max(12,i*1.5),p=i*.8;for(let g=0;g<l;g++){const x=(g/l-.5)*p,h=a*(.8+te(g)*.2);e.strokeStyle=`rgba(${o.r}, ${o.g}, ${o.b}, ${h})`,e.lineWidth=i/l*2,e.beginPath();const c=te(t.x*g)-.5,s=te(r.x*g)-.5;e.moveTo(t.x+x+c,t.y+x+c),e.lineTo(r.x+x+s,r.y+x+s),e.stroke()}},pn=(e,t,r,d,a,i)=>{const o=ke(d);e.lineCap="butt";const l=Math.max(6,i),p=Math.PI/4,g=Math.cos(p)*i,x=Math.sin(p)*i;for(let h=0;h<l;h++){const c=h/(l-1),s=g*(c-.5),u=x*(c-.5);e.strokeStyle=`rgba(${o.r}, ${o.g}, ${o.b}, ${a})`,e.lineWidth=1.5,e.beginPath(),e.moveTo(t.x+s,t.y+u),e.lineTo(r.x+s,r.y+u),e.stroke()}},un=(e,t,r,d,a,i)=>{e.lineCap="round",e.lineJoin="round";const o=ke(d);[{widthMult:1.5,alphaMult:.15},{widthMult:1.2,alphaMult:.25},{widthMult:1,alphaMult:.35},{widthMult:.7,alphaMult:.45}].forEach((p,g)=>{const x=Math.max(3,Math.floor(i*.2));for(let h=0;h<x;h++){const c=h/x*Math.PI*2,s=i*p.widthMult*.15*(h/x),u=Math.cos(c)*s,f=Math.sin(c)*s,m=a*p.alphaMult*(.8+te(h+g)*.2);e.strokeStyle=`rgba(${o.r}, ${o.g}, ${o.b}, ${m})`,e.lineWidth=i*p.widthMult,e.beginPath();const M=(te(t.x*h)-.5)*.5,C=(te(r.x*h)-.5)*.5;e.moveTo(t.x+u+M,t.y+f+M),e.lineTo(r.x+u+C,r.y+f+C),e.stroke()}})},gn=(e,t,r,d,a,i)=>{const o=ke(d);e.fillStyle=`rgba(${o.r}, ${o.g}, ${o.b}, ${a})`;const l=Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2)),p=Math.max(5,i/1.2);for(let g=0;g<l;g+=p){const x=g/l,h=t.x+(r.x-t.x)*x,c=t.y+(r.y-t.y)*x,s=i*(.3+te(h)*.6),u=(te(c)-.5)*i*1.5,f=(te(h)-.5)*i*1.5;e.beginPath(),e.arc(h+u,c+f,s,0,Math.PI*2),e.fill();const m=Math.floor(te(h*c)*4);for(let M=0;M<m;M++){const C=te(h+M)*Math.PI*2,b=i*(.5+te(c+M)),v=i*(.05+te(M)*.1),B=h+u+Math.cos(C)*b,S=c+f+Math.sin(C)*b;e.beginPath(),e.arc(B,S,v,0,Math.PI*2),e.fill()}}},br=(e,t,r,d,a,i)=>{e.lineCap="round",e.lineJoin="round",e.lineWidth=i,e.strokeStyle=hn(d,a),e.setLineDash([]),e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(r.x,r.y),e.stroke()},Mr=(e,t,r,d)=>{const{color:a,opacity:i,brushSize:o,brushStyle:l}=d,p=i!==void 0?i/100:1;switch(e.save(),l){case"pencil":wr(e,t,r,a,p,o);break;case"calligraphy":pn(e,t,r,a,p,o);break;case"oil":Mt(e,t,r,a,p,o);break;case"watercolor":un(e,t,r,a,p,o);break;case"splatter":gn(e,t,r,a,p,o);break;case"hard":default:br(e,t,r,a,p,o);break}e.restore()},vr=(e,t,r,d,a,i)=>{if(e.lineCap="round",e.lineJoin="round",i==="solid"){const o=ke(r),l=Math.max(1,a*.2);for(let p=0;p<t.points.length-1;p++){const g=t.points[p],x=t.points[p+1],h=(x.x-g.x)**2+(x.y-g.y)**2;if(h<2&&p<t.points.length-2)continue;const c=Math.sqrt(h),s=Math.ceil(c/l);for(let u=0;u<s;u++){const f=u/s,m=g.x+(x.x-g.x)*f,M=g.y+(x.y-g.y)*f,C=(te(m*M)-.5)*.5;bt(e,m+C,M+C,a/2,o,d)}}}else{const o=ke(r),l=i==="dotted",p=l?a*.1:a*3,g=l?a*1.1:a*2,x=p+g;let h=0;for(let c=0;c<t.points.length-1;c++){const s=t.points[c],u=t.points[c+1],f=Math.sqrt(Math.pow(u.x-s.x,2)+Math.pow(u.y-s.y,2));let m=0;const M=Math.max(1,a*.1);for(;m<f;){const b=(h+m)%x;if(b<p||l&&b<a){const v=m/f,B=s.x+(u.x-s.x)*v,S=s.y+(u.y-s.y)*v;bt(e,B,S,a/2,o,d)}m+=M}h+=f}}},Lr=(e,t,r,d,a)=>{if(t.points.length>1){const i=Math.max(2,a*.15);let o=0;for(let g=0;g<t.points.length-1;g++){const x=t.points[g],h=t.points[g+1],c=h.x-x.x,s=h.y-x.y,u=Math.sqrt(c*c+s*s);if(o+u<i&&g<t.points.length-2){o+=u;continue}Mt(e,x,h,r,d,a),o=0}const l=t.points[t.points.length-2],p=t.points[t.points.length-1];Mt(e,l,p,r,d,a)}},Sr=(e,t,r,d,a)=>{if(t.points.length>1)for(let i=0;i<t.points.length-1;i++){const o=t.points[i],l=t.points[i+1];(l.x-o.x)**2+(l.y-o.y)**2<2&&i<t.points.length-2||pn(e,o,l,r,d,a)}},$r=(e,t,r,d,a)=>{if(t.points.length>1)for(let i=0;i<t.points.length-1;i++){const o=t.points[i],l=t.points[i+1];(l.x-o.x)**2+(l.y-o.y)**2<2.25&&i<t.points.length-2||un(e,o,l,r,d,a)}},kr=(e,t,r,d,a)=>{if(t.points.length>1)for(let i=0;i<t.points.length-1;i++){const o=t.points[i],l=t.points[i+1];(l.x-o.x)**2+(l.y-o.y)**2<1&&i<t.points.length-2||gn(e,o,l,r,d,a)}},Br=(e,t,r,d,a,i)=>{if(e.lineCap="round",e.lineJoin="round",e.lineWidth=a,e.strokeStyle=hn(r,d),i==="solid"){if(e.setLineDash([]),e.beginPath(),t.points.length>0){e.moveTo(t.points[0].x,t.points[0].y);for(let g=1;g<t.points.length;g++){const x=t.points[g],h=t.points[g-1];Math.abs(x.x-h.x)<.5&&Math.abs(x.y-h.y)<.5&&g<t.points.length-1||e.lineTo(x.x,x.y)}}e.stroke();return}const o=i==="dotted",l=o?.1:a*3,p=a*2;if(e.setLineDash([l,p]),e.lineCap=o?"round":"butt",e.beginPath(),t.points.length>0){e.moveTo(t.points[0].x,t.points[0].y);for(let g=1;g<t.points.length;g++)e.lineTo(t.points[g].x,t.points[g].y)}e.stroke(),e.setLineDash([])},vt=(e,t,r=!1)=>{if(t.points.length<2)return;e.save();const d=t.opacity!==void 0?t.opacity/100:1,a=r?"#FFD700":t.color,i=t.brushStyle||"hard",o=t.lineType||"solid",l=t.brushSize;if(r){e.strokeStyle="rgba(255, 215, 0, 0.5)",e.lineWidth=l+6,e.lineCap="round",e.lineJoin="round",e.setLineDash([]),e.beginPath(),e.moveTo(t.points[0].x,t.points[0].y);for(let p=1;p<t.points.length;p++)e.lineTo(t.points[p].x,t.points[p].y);e.stroke()}switch(i){case"pencil":vr(e,t,a,d,l,o);break;case"calligraphy":Sr(e,t,a,d,l);break;case"oil":Lr(e,t,a,d,l);break;case"watercolor":$r(e,t,a,d,l);break;case"splatter":kr(e,t,a,d,l);break;case"hard":default:Br(e,t,a,d,l,o);break}e.restore()},Tr=(e,t,r,d,a,i,o,l,p)=>{e.save(),e.strokeStyle=l,e.lineWidth=p,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t,r),e.lineTo(d,a),e.lineTo(i,o),e.stroke(),e.restore()},Er=(e,t,r,d,a,i,o,l,p=0,g=0)=>{const x=d-t,h=a-r,c=Math.sqrt(x*x+h*h);if(c===0)return;const s=x/c,u=h/c,f=p,m=g,M=c-f-m;if(M<=0)return;const C=t+s*f,b=r+u*f;if(e.strokeStyle=l,e.lineWidth=o,e.lineCap="butt",i==="dashed"){const v=Math.max(o*3,12),B=Math.max(o*2,8),S=v+B,E=Math.max(2,Math.floor(M/S));if(E===2&&M<S*2){const A=M*.35,F=M*.3;e.setLineDash([A,F]),e.lineDashOffset=0,e.beginPath(),e.moveTo(C,b),e.lineTo(d-s*m,a-u*m),e.stroke(),e.setLineDash([]);return}const T=(M-E*v)/E,L=v+T,$=E*L-T,P=(M-$)/2;e.setLineDash([v,T]),e.lineDashOffset=-P,e.beginPath(),e.moveTo(C,b),e.lineTo(d-s*m,a-u*m),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}else if(i==="dotted"){const v=Math.max(o*2.5,10),B=o/2,S=Math.max(2,Math.floor(M/v)+1),E=M/(S-1);e.fillStyle=l;for(let k=0;k<S;k++){const T=k*E,L=C+s*T,$=b+u*T;e.beginPath(),e.arc(L,$,B,0,Math.PI*2),e.fill()}}else e.beginPath(),e.moveTo(C,b),e.lineTo(d-s*m,a-u*m),e.stroke()},Dt=(e,t,r,d,a)=>{if(t.length<2)return;if(r==="solid"){e.strokeStyle=a,e.lineWidth=d,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let c=1;c<t.length;c++)e.lineTo(t[c].x,t[c].y);e.closePath(),e.stroke();return}let i=0;const o=[],l=t.length;for(let c=0;c<l;c++){const s=t[c],u=t[(c+1)%l],f=u.x-s.x,m=u.y-s.y,M=Math.sqrt(f*f+m*m);o.push(M),i+=M}if(i<20){e.strokeStyle=a,e.lineWidth=d,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let c=1;c<t.length;c++)e.lineTo(t[c].x,t[c].y);e.closePath(),e.stroke();return}const p=Math.max(d*2.5,Math.min(d*4,i/25)),g=Math.max(d*1.5,p*.5),x=p+g,h=p*.7;if(r==="dotted"){const c=d/2,s=Math.max(d*2,i/60);e.fillStyle=a;for(let u=0;u<l;u++){const f=t[u];e.beginPath(),e.arc(f.x,f.y,c,0,Math.PI*2),e.fill()}for(let u=0;u<l;u++){const f=t[u],m=o[u];if(m<=0)continue;const M=t[(u+1)%l].x-f.x,C=t[(u+1)%l].y-f.y,b=M/m,v=C/m,B=1,S=Math.floor(m/s)+1,E=Math.max(B,S-1),k=m/E;for(let T=1;T<E;T++){const L=T*k,$=f.x+b*L,X=f.y+v*L;e.beginPath(),e.arc($,X,c,0,Math.PI*2),e.fill()}}}else if(r==="dashed"){e.strokeStyle=a,e.lineWidth=d,e.lineCap="butt";for(let c=0;c<l;c++){const s=t[c],u=t[c===0?l-1:c-1],f=t[(c+1)%l],m=o[c===0?l-1:c-1],M=o[c];if(m>0&&M>0){const C=u.x-s.x,b=u.y-s.y,v=f.x-s.x,B=f.y-s.y,S=Math.min(m,M)/3,E=Math.min(h,S),k=s.x+C/m*E,T=s.y+b/m*E,L=s.x+v/M*E,$=s.y+B/M*E;Tr(e,k,T,s.x,s.y,L,$,a,d)}}for(let c=0;c<l;c++){const s=t[c],u=t[(c+1)%l],f=o[c];if(f===0)continue;const m=u.x-s.x,M=u.y-s.y,C=m/f,b=M/f,v=o[c===0?l-1:c-1],B=f,S=o[(c+1)%l],E=Math.min(v,B)/3,k=Math.min(h,E),T=Math.min(B,S)/3,L=Math.min(h,T),$=f-k-L;if($<=p/2)continue;const X=s.x+C*k,P=s.y+b*k,A=Math.floor($/x);if(A===0){const z=$/2-p/2;if(z>=0){const O=X+C*z,j=P+b*z,V=X+C*(z+p),H=P+b*(z+p);e.beginPath(),e.moveTo(O,j),e.lineTo(V,H),e.stroke()}continue}const Z=($-A*p)/A,Y=p+Z,N=A*Y-Z,J=($-N)/2;e.setLineDash([p,Z]),e.lineDashOffset=-J,e.beginPath(),e.moveTo(X,P),e.lineTo(u.x-C*L,u.y-b*L),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}}},At=(e,t,r,d,a,i,o,l,p)=>{if(a==="butt")return 0;const g=o.replace("#",""),x=parseInt(g.slice(0,2),16),h=parseInt(g.slice(2,4),16),c=parseInt(g.slice(4,6),16);e.fillStyle=`rgba(${x}, ${h}, ${c}, ${l})`,e.strokeStyle=`rgba(${x}, ${h}, ${c}, ${l})`,e.save(),e.translate(t,r),e.rotate(d);let s=0;if(a==="round"){const u=Math.max(p*.75,4);e.beginPath(),e.arc(0,0,u,0,Math.PI*2),e.fill(),s=0}else a==="arrow"?(e.beginPath(),e.moveTo(0,0),e.lineTo(-i,-i*.5),e.lineTo(-i,i*.5),e.closePath(),e.fill(),s=i):a==="circle"?(e.beginPath(),e.arc(0,0,i*.4,0,Math.PI*2),e.fill(),s=i*.2):a==="bar"&&(e.lineWidth=p,e.lineCap="butt",e.beginPath(),e.moveTo(0,-i*.6),e.lineTo(0,i*.6),e.stroke(),s=0);return e.restore(),s},xn=(e,t,r=!1)=>{e.save();const d=t.fontWeight||"normal",a=t.fontStyle||"normal",i=t.fontSize||16,o=t.fontFamily||"Arial";e.font=`${a} ${d} ${i}px ${o}`,e.textAlign="left",e.textBaseline="top";const l=(t.text||"").split(`
`),p=(t.lineHeight||1.5)*i,g=t.letterSpacing||0;let x=0;l.forEach(b=>{let v=0;g!==0?v=e.measureText(b).width+g*(b.length-1):v=e.measureText(b).width,v>x&&(x=v)});const h=l.length>0?(l.length-1)*p+i:0,c=2;if(t.rotation){const b=t.x+x/2,v=t.y+h/2;e.translate(b,v),e.rotate(t.rotation*Math.PI/180),e.translate(-b,-v)}const s=t.opacity!==void 0?t.opacity/100:1,f=(t.color||"#000000").replace("#",""),m=parseInt(f.slice(0,2),16),M=parseInt(f.slice(2,4),16),C=parseInt(f.slice(4,6),16);return e.fillStyle=`rgba(${m}, ${M}, ${C}, ${s})`,l.forEach((b,v)=>{const B=t.y+v*p;if(g!==0){let S=t.x;for(let E=0;E<b.length;E++){const k=b[E];e.fillText(k,S,B);const T=e.measureText(k).width;S+=T+g}}else e.fillText(b,t.x,B);if(t.textDecoration==="underline"){const S=g!==0?e.measureText(b).width+g*(b.length-1):e.measureText(b).width;e.beginPath(),e.moveTo(t.x,B+i),e.lineTo(t.x+S,B+i),e.strokeStyle=e.fillStyle,e.lineWidth=Math.max(1,i/16),e.stroke()}}),r&&(e.fillStyle="rgba(255, 215, 0, 0.2)",e.fillRect(t.x-c,t.y-c,x+c*2,h+c*2)),e.restore(),t},fn=(e,t,r)=>{e.save();const d=t.x,a=t.y,i=t.radius||20,o=t.rotation||0;e.translate(d,a),e.rotate(o*Math.PI/180);const l=t.borderWidth||2,p=(t.borderOpacity!==void 0?t.borderOpacity:100)/100,g=r?"#FFD700":t.borderColor||"#000000",x=t.borderStyle||"solid",h=g.replace("#",""),c=parseInt(h.slice(0,2),16),s=parseInt(h.slice(2,4),16),u=parseInt(h.slice(4,6),16),f=(t.colorOpacity!==void 0?t.colorOpacity:100)/100,M=(t.color||"#ff0000").replace("#",""),C=parseInt(M.slice(0,2),16),b=parseInt(M.slice(2,4),16),v=parseInt(M.slice(4,6),16);if(e.beginPath(),e.arc(0,0,i,0,Math.PI*2),e.fillStyle=`rgba(${C}, ${b}, ${v}, ${f})`,e.fill(),e.strokeStyle=`rgba(${c}, ${s}, ${u}, ${p})`,e.lineWidth=l,x==="dashed"){const P=2*Math.PI*i,A=Math.max(l*2.5,Math.min(l*4,P/25)),F=Math.max(l*1.5,A*.5),Z=A+F,Y=Math.floor(P/Z);if(Y<3||P<30)e.setLineDash([]),e.beginPath(),e.arc(0,0,i,0,Math.PI*2),e.stroke();else{const J=(P-Y*A)/Y,z=(A+J)/i,O=A/i,j=A+J,V=Y*j-J,q=(P-V)/2/i;e.lineCap="butt";for(let ne=0;ne<Y;ne++){const U=q+ne*z,Q=U+O;e.beginPath(),e.arc(0,0,i,U,Q),e.stroke()}}}else if(x==="dotted"){const P=2*Math.PI*i,A=l/2,F=Math.max(l*2,P/60),Z=Math.max(8,Math.round(P/F)),Y=2*Math.PI/Z;e.fillStyle=`rgba(${c}, ${s}, ${u}, ${p})`;for(let N=0;N<Z;N++){const K=N*Y,J=i*Math.cos(K),z=i*Math.sin(K);e.beginPath(),e.arc(J,z,A,0,Math.PI*2),e.fill()}}else e.setLineDash([]),e.beginPath(),e.arc(0,0,i,0,Math.PI*2),e.stroke();e.setLineDash([]);const B=t.number!==void 0?t.number:1,S=(t.numberOpacity!==void 0?t.numberOpacity:100)/100,k=(t.numberColor||"#ffffff").replace("#",""),T=parseInt(k.slice(0,2),16),L=parseInt(k.slice(2,4),16),$=parseInt(k.slice(4,6),16),X=Math.max(12,i*.8);if(e.fillStyle=`rgba(${T}, ${L}, ${$}, ${S})`,e.font=`bold ${X}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(B.toString(),0,0),t.topText){const P=(t.textOpacity!==void 0?t.textOpacity:100)/100,F=(t.textColor||"#000000").replace("#",""),Z=parseInt(F.slice(0,2),16),Y=parseInt(F.slice(2,4),16),N=parseInt(F.slice(4,6),16),K=t.textSize||Math.max(10,i*.5),z=-(i+5);e.fillStyle=`rgba(${Z}, ${Y}, ${N}, ${P})`,e.font=`${K}px Arial`,e.textAlign="center",e.textBaseline="bottom",e.fillText(t.topText,0,z)}if(t.cards&&t.cards.length>0){const P=i*.35,A=P*1.4,F=4,Z=Math.PI/4,Y=Math.cos(Z)*i*.7,N=Math.sin(Z)*i*.7;t.cards.forEach((K,J)=>{const z=K.color||(K==="yellow"?"#FFD700":"#FF0000"),O=K.cardBorderColor||"#000000",j=Y-J*(P+F);e.fillStyle=z,e.fillRect(j-P,N,P,A),e.strokeStyle=O,e.lineWidth=1.5,e.setLineDash([]),e.strokeRect(j-P,N,P,A)})}e.restore()},mn=(e,t,r=!1)=>{const d=t.radius||10,a=r?"#FFD700":"black",i=r?3:2;e.fillStyle="white",e.strokeStyle=a,e.lineWidth=i,e.beginPath(),e.arc(t.x,t.y,d,0,Math.PI*2),e.fill(),e.stroke(),e.beginPath(),e.arc(t.x-d/3,t.y-d/3,d/3,0,Math.PI*2),e.fillStyle="black",e.fill()},at=(e,t,r=!1,d="#000")=>{if(e.save(),t.rotation)if(t.shape==="line"||t.shape==="arrow"){const s=(t.startX+t.endX)/2,u=(t.startY+t.endY)/2;e.translate(s,u),e.rotate(t.rotation*Math.PI/180),e.translate(-s,-u)}else{const s=t.x+(t.width||50)/2,u=t.y+(t.height||30)/2;e.translate(s,u),e.rotate(t.rotation*Math.PI/180),e.translate(-s,-u)}const a=r?"#FFD700":t.borderColor||t.color||d,i=t.borderOpacity!==void 0?t.borderOpacity/100:1,o=t.borderWidth||2,l=t.borderStyle||"solid",p=a.replace("#",""),g=parseInt(p.slice(0,2),16),x=parseInt(p.slice(2,4),16),h=parseInt(p.slice(4,6),16),c=`rgba(${g}, ${x}, ${h}, ${i})`;if(e.strokeStyle=c,e.lineWidth=o,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),t.shape==="line"||t.shape==="arrow"){const s=t.endX-t.startX,u=t.endY-t.startY,f=Math.atan2(u,s),m=t.lineCapStart||"butt",M=t.lineCapEnd||(t.shape==="arrow"?"arrow":"butt"),C=Math.max(o*2.5,10);let b=0;m==="arrow"?b=C:m==="circle"?b=C*.2:(m==="round"||m==="bar")&&(b=0);let v=0;if(M==="arrow"?v=C:M==="circle"?v=C*.2:(M==="round"||M==="bar")&&(v=0),l==="dashed"||l==="dotted")Er(e,t.startX,t.startY,t.endX,t.endY,l,o,c,b,v);else{const B=t.startX+Math.cos(f)*b,S=t.startY+Math.sin(f)*b,E=t.endX-Math.cos(f)*v,k=t.endY-Math.sin(f)*v;e.lineCap="butt",e.beginPath(),e.moveTo(B,S),e.lineTo(E,k),e.stroke()}m!=="butt"&&At(e,t.startX,t.startY,f+Math.PI,m,C,a,i,o),M!=="butt"&&At(e,t.endX,t.endY,f,M,C,a,i,o)}else{const s=t.x,u=t.y,f=t.width!==void 0?t.width:50,m=t.height!==void 0?t.height:30,M=t.ignoreMinSize?0:10,C=Math.abs(f)<M?f<0?-M:M:f,b=Math.abs(m)<M?m<0?-M:M:m,v=t.fillColor||"#ffffff",B=t.fillOpacity!==void 0?t.fillOpacity/100:0;if(B>0){const S=v.replace("#",""),E=parseInt(S.slice(0,2),16),k=parseInt(S.slice(2,4),16),T=parseInt(S.slice(4,6),16);if(e.fillStyle=`rgba(${E}, ${k}, ${T}, ${B})`,e.beginPath(),t.shape==="rectangle")e.rect(s,u,C,b);else if(t.shape==="circle"){const L=Math.max(Math.abs(C),Math.abs(b))/2,$=s+C/2,X=u+b/2;e.arc($,X,L,0,Math.PI*2)}else t.shape==="triangle"&&(e.moveTo(s+C/2,u),e.lineTo(s,u+b),e.lineTo(s+C,u+b),e.closePath());e.fill()}if(l==="dashed"||l==="dotted"){if(t.shape==="rectangle"){const S=[{x:s,y:u},{x:s+C,y:u},{x:s+C,y:u+b},{x:s,y:u+b}];Dt(e,S,l,o,c)}else if(t.shape==="triangle"){const S=[{x:s+C/2,y:u},{x:s,y:u+b},{x:s+C,y:u+b}];Dt(e,S,l,o,c)}else if(t.shape==="circle"){const S=Math.max(Math.abs(C),Math.abs(b))/2,E=s+C/2,k=u+b/2,T=2*Math.PI*S,L=Math.max(o*2.5,Math.min(o*4,T/25)),$=Math.max(o*1.5,L*.5),X=L+$;if(T<30)e.strokeStyle=c,e.lineWidth=o,e.beginPath(),e.arc(E,k,S,0,Math.PI*2),e.stroke();else if(l==="dashed"){const P=Math.floor(T/X);if(P===0)e.strokeStyle=c,e.lineWidth=o,e.beginPath(),e.arc(E,k,S,0,Math.PI*2),e.stroke();else{const F=(T-P*L)/P,Z=(L+F)/S,Y=L/S,N=L+F,K=P*N-F,O=(T-K)/2/S;e.strokeStyle=c,e.lineWidth=o,e.lineCap="butt";for(let j=0;j<P;j++){const V=O+j*Z,H=V+Y;e.beginPath(),e.arc(E,k,S,V,H),e.stroke()}}}else if(l==="dotted"){const P=o/2,A=Math.max(o*2,T/60),F=Math.max(8,Math.round(T/A)),Z=2*Math.PI/F;e.fillStyle=c;for(let Y=0;Y<F;Y++){const N=Y*Z,K=E+S*Math.cos(N),J=k+S*Math.sin(N);e.beginPath(),e.arc(K,J,P,0,Math.PI*2),e.fill()}}}}else{if(e.beginPath(),t.shape==="rectangle"){const S=t.x,E=t.y;t.width,t.height,e.rect(S,E,C,b)}else if(t.shape==="circle"){const S=t.x,E=t.y;t.width,t.height;const k=Math.max(Math.abs(C),Math.abs(b))/2,T=S+C/2,L=E+b/2;e.arc(T,L,k,0,Math.PI*2)}else if(t.shape==="triangle"){const S=t.x,E=t.y;e.moveTo(S+C/2,E),e.lineTo(S,E+b),e.lineTo(S+C,E+b),e.closePath()}e.stroke()}}e.restore()},yn=(e,t,r=!1)=>{const d=t.size||30;e.font=`${d}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(t.icon,t.x,t.y),r&&(e.strokeStyle="#FFD700",e.lineWidth=3,e.strokeRect(t.x-d/2,t.y-d/2,d,d))},Ir=(e,t)=>{if(e.save(),e.strokeStyle="#FFD700",e.lineWidth=2,e.setLineDash([5,5]),t.rotatedCorners&&t.rotatedCorners.length===4){e.beginPath(),e.moveTo(t.rotatedCorners[0].x,t.rotatedCorners[0].y);for(let r=1;r<t.rotatedCorners.length;r++)e.lineTo(t.rotatedCorners[r].x,t.rotatedCorners[r].y);e.closePath(),e.stroke()}else e.strokeRect(t.x,t.y,t.width,t.height);e.setLineDash([]),e.restore()},Rr=(e,t,r)=>{const d=cn(t,r),a=8;e.fillStyle="white",e.strokeStyle="#FFD700",e.lineWidth=2,Object.entries(d).forEach(([i,o])=>{e.save(),e.fillRect(o.x-a/2,o.y-a/2,a,a),e.strokeRect(o.x-a/2,o.y-a/2,a,a),e.restore()})},Cn=(e,t)=>{if(!e||!t)return null;const r=ae(e,t);if(!r)return null;const d=(e.brushSize||e.borderWidth||10)*2+20,a=2e3;let i=r.width+d*2,o=r.height+d*2;if(i>a||o>a)return null;const l=document.createElement("canvas");l.width=i,l.height=o;const p=l.getContext("2d"),g=r.x-d,x=r.y-d;if(p.translate(-g,-x),e.type==="path")vt(p,e,!1);else if(e.type==="player")fn(p,e,!1);else if(e.type==="ball")mn(p,e,!1);else if(e.type==="shape"){const h=e.borderColor||e.color||"#000000";at(p,e,!1,h)}else e.type==="figure"?yn(p,e,!1):e.type==="text"&&xn(p,e,!1);return{canvas:l,offsetX:g,offsetY:x,originalWidth:i,originalHeight:o}},zr=(e,t)=>{const r=y.useRef(null),d=y.useRef(null),a=y.useRef(new Map),i=y.useCallback((c,s=!1)=>{if(!c)return;c.getContext("2d").clearRect(0,0,c.width,c.height)},[]),o=y.useCallback(()=>{const c=t.current;if(!c)return;c.getContext("2d").clearRect(0,0,c.width,c.height)},[t]),l=(c,s,u,f)=>{if(c.save(),s.type==="path")vt(c,s,f);else switch(s.type){case"player":fn(c,s,f);break;case"ball":mn(c,s,f);break;case"shape":at(c,s,f,s.borderColor||u);break;case"figure":yn(c,s,f);break;case"text":xn(c,s,f);break}c.restore()},p=y.useCallback((c,s,u,f,m)=>{if(f){l(c,s,u,!0);return}const M=JSON.stringify(s),C=a.current.get(s.id);if(C&&C.hash===M&&C.cache){const{cache:v}=C,B=ae(s,m);if(B){const S=(s.brushSize||s.borderWidth||10)*2+20;c.drawImage(v.canvas,B.x-S,B.y-S)}else l(c,s,u,!1);return}const b=Cn(s,m);if(b){a.current.set(s.id,{hash:M,cache:b});const v=ae(s,m);if(v){const B=(s.brushSize||s.borderWidth||10)*2+20;c.drawImage(b.canvas,v.x-B,v.y-B)}}else l(c,s,u,!1)},[]),g=y.useCallback((c,s,u,f,m,M=null)=>{const C=e.current;if(!C)return;i(C,!0);const b=C.getContext("2d");c.forEach((v,B)=>{const S=`path_${B}`;if(S===M||v.points.length<2)return;const E={...v,type:"path",id:S};p(b,E,f,!1,C)}),s.forEach(v=>{v.id!==M&&p(b,v,f,!1,C)})},[e,i,p]),x=y.useCallback((c,s,u=!0)=>{const f=t.current;if(!f||!c)return;const m=f.getContext("2d");if(m.clearRect(0,0,f.width,f.height),m.save(),c._cache){const{canvas:M}=c._cache,C=ae(c,f),b=(c.brushSize||c.borderWidth||10)*2+20;m.drawImage(M,C.x-b,C.y-b)}else l(m,c,s,u);if(u){const M=ae(c,f);M&&(Ir(m,M),c._cache||Rr(m,M,c))}m.restore()},[t]),h=y.useCallback((c,s,u=!1)=>{const f=t.current;if(!f)return;const m=f.getContext("2d");if(u||m.clearRect(0,0,f.width,f.height),c&&c.points&&c.points.length>=2)if(u){const M=c.points.length,C=c.points[M-2],b=c.points[M-1];Mr(m,C,b,{color:c.color,opacity:c.opacity,brushSize:c.brushSize,brushStyle:c.brushStyle})}else vt(m,c,!1);if(s){const{type:M,start:C,end:b,borderColor:v,borderOpacity:B,borderStyle:S,borderWidth:E,fillColor:k,fillOpacity:T,lineCapStart:L,lineCapEnd:$}=s;if(M==="line"||M==="arrow"){const X={type:"shape",shape:M,startX:C.x,startY:C.y,endX:b.x,endY:b.y,borderColor:v,borderOpacity:B,borderWidth:E,borderStyle:S,lineCapStart:L,lineCapEnd:$,rotation:0};at(m,X,!1,v)}else{const X=b.x-C.x,P=b.y-C.y,A={type:"shape",shape:M,x:C.x,y:C.y,width:X,height:P,borderColor:v,borderOpacity:B,borderWidth:E,borderStyle:S,fillColor:k,fillOpacity:T,rotation:0,ignoreMinSize:!0};at(m,A,!1,v)}}},[t]);return{redrawStatic:g,drawLiveLayer:h,drawSingleObjectOnActive:x,clearActiveLayer:o,tempObjectDataRef:r,tempPathDataRef:d}},Pr=()=>{const e=y.useRef(null),t=y.useRef({x:0,y:0}),r=y.useRef(null),[d,a]=y.useState("default");return{draggedObjectRef:e,dragOffsetRef:t,cursorStyle:d,setCursorStyle:a,startDrag:(h,c,s)=>{const u=ae(h,s);let f;h.type==="path"?f={...h,points:h.points.map(M=>({...M}))}:f={...h};const m=Cn(h,s);if(e.current={...f,_cache:m},r.current={mouseStart:{...c},objectStart:h.type==="path"?{...h,points:h.points.map(M=>({...M}))}:{...h},cachedBounds:u||{x:0,y:0,width:0,height:0}},h.type==="path")t.current={x:c.x-u.points[0].x,y:c.y-u.points[0].y};else if(h.type==="shape"&&(h.shape==="line"||h.shape==="arrow")){const M=(h.startX+h.endX)/2,C=(h.startY+h.endY)/2;t.current={x:c.x-M,y:c.y-C}}else h.x!==void 0&&h.y!==void 0?t.current={x:c.x-h.x,y:c.y-h.y}:t.current={x:c.x-(u?u.x:0),y:c.y-(u?u.y:0)}},updateDragPosition:(h,c,s)=>{if(!e.current||!r.current)return null;const{objectStart:u,cachedBounds:f}=r.current,m=h.x-r.current.mouseStart.x,M=h.y-r.current.mouseStart.y;let C=e.current;if(C.type==="path"){const E=u.points,k=C.points;for(let T=0;T<E.length;T++)k[T].x=E[T].x+m,k[T].y=E[T].y+M}else C.type==="shape"&&(C.shape==="line"||C.shape==="arrow")?(C.startX=u.startX+m,C.endX=u.endX+m,C.startY=u.startY+M,C.endY=u.endY+M):(C.x=u.x+m,C.y=u.y+M);const b=f.x+f.width/2+m,v=f.y+f.height/2+M;let B=0,S=0;if(b<0?B=0-b:b>c&&(B=c-b),v<0?S=0-v:v>s&&(S=s-v),B!==0||S!==0)if(C.type==="path")for(let E=0;E<C.points.length;E++)C.points[E].x+=B,C.points[E].y+=S;else C.type==="shape"&&(C.shape==="line"||C.shape==="arrow")?(C.startX+=B,C.endX+=B,C.startY+=S,C.endY+=S):(C.x+=B,C.y+=S);return C},endDrag:()=>{const h=e.current;return h&&h._cache&&delete h._cache,e.current=null,r.current=null,t.current={x:0,y:0},h},updateCursor:(h,c,s,u,f,m)=>{if(e.current)return;if(u){const C=u?u.startsWith("path_")?{...s[parseInt(u.replace("path_",""))],type:"path",id:u}:c.find(b=>b.id===u):null;if(C){const b=ae(C,m);if(b){const v=Ft(h.x,h.y,b,C);if(v){a(v.cursor);return}if(wt(h.x,h.y,b)){a("move");return}}}}const M=dn(h.x,h.y,c,s,f,m);a(M?"pointer":"default")},checkForHandle:(h,c,s)=>{const u=ae(c,s);return u?Ft(h.x,h.y,u,c):null},checkIfPointInSelectedBounds:(h,c,s)=>{if(!c)return!1;const u=ae(c,s);return u&&wt(h.x,h.y,u)}}},De=10,Yr=8,Gr=70,Xr=5,Fr=50,Dr=(e,t,r,d,a)=>{const i=a*Math.PI/180,o=Math.cos(i),l=Math.sin(i),p=r/2,g=d/2;return[{x:-p,y:-g},{x:p,y:-g},{x:p,y:g},{x:-p,y:g}].map(h=>({x:e+(h.x*o-h.y*l),y:t+(h.x*l+h.y*o)}))},Ae=(e,t,r,d,a)=>{const i=a*Math.PI/180,o=Math.cos(i),l=Math.sin(i),p=e-r,g=t-d;return{x:r+(p*o-g*l),y:d+(p*l+g*o)}},Ar=()=>{const e=y.useRef(null);return{resizeHandleRef:e,startResize:(a,i,o,l)=>{let p,g;i.type==="player"||i.type==="ball"?(p=(i.radius||20)*2,g=(i.radius||20)*2):i.type==="figure"?(p=i.size||30,g=i.size||30):i.type==="text"?(p=l.originalWidth||l.width,g=l.originalHeight||l.height):(p=i.width!==void 0?i.width:l.width,g=i.height!==void 0?i.height:l.height);let x,h;i.shape==="line"||i.shape==="arrow"?(x=(i.startX+i.endX)/2,h=(i.startY+i.endY)/2):i.type==="player"||i.type==="ball"||i.type==="figure"?(x=i.x,h=i.y):i.type==="text"?(x=l.centerX,h=l.centerY):(x=i.x+p/2,h=i.y+g/2);const c=i.rotation||0,s=Dr(x,h,p,g,c);let u={x,y:h},f={x:o.x,y:o.y};a.name==="topLeft"?(f=s[0],u=s[2]):a.name==="topRight"?(f=s[1],u=s[3]):a.name==="bottomRight"?(f=s[2],u=s[0]):a.name==="bottomLeft"?(f=s[3],u=s[1]):a.name==="top"?(f={x:(s[0].x+s[1].x)/2,y:(s[0].y+s[1].y)/2},u={x:(s[2].x+s[3].x)/2,y:(s[2].y+s[3].y)/2}):a.name==="bottom"?(f={x:(s[2].x+s[3].x)/2,y:(s[2].y+s[3].y)/2},u={x:(s[0].x+s[1].x)/2,y:(s[0].y+s[1].y)/2}):a.name==="left"?(f={x:(s[0].x+s[3].x)/2,y:(s[0].y+s[3].y)/2},u={x:(s[1].x+s[2].x)/2,y:(s[1].y+s[2].y)/2}):a.name==="right"&&(f={x:(s[1].x+s[2].x)/2,y:(s[1].y+s[2].y)/2},u={x:(s[0].x+s[3].x)/2,y:(s[0].y+s[3].y)/2});const m=f.x-o.x,M=f.y-o.y,C=f.x-u.x,b=f.y-u.y,v=C*C+b*b,B=Ae(o.x,o.y,x,h,-c),S=B.x-x,E=B.y-h;let k=0;(i.shape==="circle"||["player","ball","figure"].includes(i.type))&&(k=Math.sqrt(Math.pow(o.x-x,2)+Math.pow(o.y-h,2))),e.current={handle:a.name,object:{...i},startPos:o,anchorPoint:u,startVectorX:C,startVectorY:b,startLengthSq:v,pressOffsetX:m,pressOffsetY:M,startFontSize:i.fontSize||16,startX:i.x,startY:i.y,lineStartX:i.startX,lineStartY:i.startY,lineEndX:i.endX,lineEndY:i.endY,startCenterX:x,startCenterY:h,rotation:c,startLocalLeft:-Math.abs(p)/2,startLocalRight:Math.abs(p)/2,startLocalTop:-Math.abs(g)/2,startLocalBottom:Math.abs(g)/2,startFlippedX:p<0,startFlippedY:g<0,isHandleLeft:S<0,isHandleRight:S>0,isHandleTop:E<0,isHandleBottom:E>0,startWidth:p,startHeight:g,startDistanceFromCenter:k}},updateResize:a=>{if(!e.current)return null;const{handle:i,object:o,startFontSize:l,startCenterX:p,startCenterY:g,startDistanceFromCenter:x,rotation:h,lineStartX:c,lineStartY:s,lineEndX:u,lineEndY:f,startPos:m,startLocalLeft:M,startLocalRight:C,startLocalTop:b,startLocalBottom:v,isHandleLeft:B,isHandleRight:S,isHandleTop:E,isHandleBottom:k,startFlippedX:T,startFlippedY:L,startWidth:$,startHeight:X,startX:P,startY:A,anchorPoint:F,startVectorX:Z,startVectorY:Y,startLengthSq:N,pressOffsetX:K,pressOffsetY:J}=e.current;let z={...o};if(o.type==="text"){const O=a.x+K,j=a.y+J,V=O-F.x,H=j-F.y,oe=V*Z+H*Y;let q=oe/N;if(!["topLeft","topRight","bottomLeft","bottomRight"].includes(i)){const ce=Math.sqrt(N),we=Math.sqrt(V*V+H*H),be=oe>0?1:-1;q=we/ce*be}const ne=8;let U=l*q;U<ne&&(U=ne,q=ne/l),q<.1&&(q=.1),z.fontSize=l*q;const Q=$*q,ee=X*q,se=Z*q,Be=Y*q,Ce=F.x+se*.5,le=F.y+Be*.5;return z.x=Ce-Q/2,z.y=le-ee/2,z.width=Q,z.height=ee,e.current.object=z,z}if(o.type==="shape"&&(o.shape==="line"||o.shape==="arrow")){const O=Ae(c,s,p,g,h),j=Ae(u,f,p,g,h);let V={...O},H={...j};["start","topLeft","left","top"].includes(i)?V={x:a.x,y:a.y}:H={x:a.x,y:a.y};const oe=(V.x+H.x)/2,q=(V.y+H.y)/2,ne=Ae(V.x,V.y,oe,q,-h),U=Ae(H.x,H.y,oe,q,-h);return z.startX=ne.x,z.startY=ne.y,z.endX=U.x,z.endY=U.y,e.current.object=z,z}if(o.shape==="circle"||["player","ball","figure"].includes(o.type)){const O=Math.sqrt(Math.pow(a.x-p,2)+Math.pow(a.y-g,2)),j=x>0?O/x:1,V=Math.abs($);if(o.shape==="circle"){const H=Math.max(De,V*j);z.width=H,z.height=H,z.x=p-H/2,z.y=g-H/2}else if(o.type==="player"){const H=V/2*j;z.radius=Math.max(Yr,Math.min(Gr,H))}else if(o.type==="ball"){const H=V/2*j;z.radius=Math.max(Xr,Math.min(Fr,H))}else z.size=Math.max(10,V*j);return e.current.object=z,z}if(o.type==="shape"){const O=h*Math.PI/180,j=Math.cos(-O),V=Math.sin(-O),H=a.x-m.x,oe=a.y-m.y,q=H*j-oe*V,ne=H*V+oe*j;let U=M,Q=C,ee=b,se=v;B?U+=q:S&&(Q+=q),E?ee+=ne:k&&(se+=ne);let Be=T,Ce=L;U>Q&&([U,Q]=[Q,U],Be=!Be),ee>se&&([ee,se]=[se,ee],Ce=!Ce);let le=Q-U,ce=se-ee;le<De&&(le=De,B?U=Q-le:Q=U+le),ce<De&&(ce=De,E?ee=se-ce:se=ee+ce);const we=(U+Q)/2,be=(ee+se)/2,st=we*Math.cos(O)-be*Math.sin(O),lt=we*Math.sin(O)+be*Math.cos(O),ue=p+st,ct=g+lt;let he=Be?-le:le,qe=Ce?-ce:ce;return z.width=he,z.height=qe,z.x=ue-he/2,z.y=ct-qe/2,e.current.object=z,z}return z},endResize:()=>{const a=e.current;return e.current=null,a?a.object:null}}},Zr=()=>{const e=y.useRef(!1),t=y.useRef([]),r=y.useRef(null),d=y.useRef(!1);return{drawingRef:e,currentPathRef:t,shapeStartRef:r,isDrawingShapeRef:d,startDrawing:h=>{e.current=!0,t.current=[{x:h.x,y:h.y}]},continueDrawing:h=>e.current?(t.current.push({x:h.x,y:h.y}),t.current):null,endDrawing:()=>{const h=t.current;return e.current=!1,t.current=[],h.length>1?h:null},startShape:h=>{d.current=!0,r.current=h},getShapePreview:h=>!d.current||!r.current?null:{start:r.current,end:h},endShape:(h,c)=>{if(!d.current||!r.current)return null;const s=r.current;let u=null;if(c==="line"||c==="arrow")Math.sqrt(Math.pow(h.x-s.x,2)+Math.pow(h.y-s.y,2))>5&&(u={startX:s.x,startY:s.y,endX:h.x,endY:h.y});else{const f=h.x-s.x,m=h.y-s.y;Math.abs(f)>5&&Math.abs(m)>5&&(u={x:s.x,y:s.y,width:f,height:m})}return d.current=!1,r.current=null,u},cancelDrawing:()=>{e.current=!1,t.current=[],d.current=!1,r.current=null}}},Hr=w.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,Wr=w.div`
  border: 2px solid #ddd;
  margin-top: 10px;
  background: white;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  position: relative;
  cursor: ${e=>e.$activeTool==="drawing"?"none":e.cursor};
`,_r=w.canvas`
  display: block;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`,Vr=w.canvas`
  display: block;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  touch-action: none; 
`,jr=w.textarea`
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
`,Or=w.div`
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
`,Nr=({fieldSize:e,fieldType:t})=>{const r=y.useRef(null),d=y.useRef(null),a=y.useRef(null),i=y.useRef(null),o=y.useRef(!1),l=y.useRef(null),p=y.useRef(null),g=y.useRef(null),[x,h]=y.useState({width:800,height:500}),[c,s]=y.useState(!1),[u,f]=y.useState(""),[m,M]=y.useState({x:0,y:0}),[C,b]=y.useState(!1),v=y.useRef(!1),B=y.useRef([]),S=y.useRef([]),E=y.useRef(null),k=ge(),{activeTool:T,drawColor:L,brushSize:$,brushOpacity:X,brushStyle:P,lineType:A,paths:F,objects:Z,selectedObjectId:Y,textFontSize:N,textColor:K,shapeBorderColor:J,shapeBorderOpacity:z,shapeFillColor:O,shapeFillOpacity:j,shapeBorderWidth:V,shapeBorderStyle:H,shapeLineCapStart:oe,shapeLineCapEnd:q}=Ye(I=>I.tacticsBoard);y.useEffect(()=>{p.current=Y},[Y]);const{redrawStatic:ne,drawLiveLayer:U,drawSingleObjectOnActive:Q,clearActiveLayer:ee,tempObjectDataRef:se,tempPathDataRef:Be}=zr(r,d),{cursorStyle:Ce,setCursorStyle:le,startDrag:ce,updateDragPosition:we,endDrag:be,updateCursor:st,checkForHandle:lt,draggedObjectRef:ue,checkIfPointInSelectedBounds:ct}=Pr(),{resizeHandleRef:he,startResize:qe,updateResize:Lt,endResize:St}=Ar(),{drawingRef:Me,startDrawing:Mn,continueDrawing:$t,endDrawing:kt,shapeStartRef:Ge,isDrawingShapeRef:ve,startShape:vn,endShape:Bt}=Zr(),Ln=1500,Sn=640,$n=1400,dt=e.width/e.height,Tt=y.useCallback(()=>{var zt;const I=a.current;if(!I)return{width:800,height:500};const G=((zt=I.parentElement)==null?void 0:zt.clientWidth)||window.innerWidth,W=G/Ln,R=$n*W,D=Sn*W,_=R,re=_/dt,Te=D,Rn=Te*dt;let Ee,Fe;re<=D?(Ee=_,Fe=re):(Ee=Rn,Fe=Te);const ht=G*.95;if(Ee>ht){const zn=ht/Ee;Ee=ht,Fe=Fe*zn}return{width:Math.floor(Ee),height:Math.floor(Fe)}},[dt]),Ue=I=>{const G=d.current;if(!G)return{x:0,y:0};let W,R;I.changedTouches&&I.changedTouches.length>0?(W=I.changedTouches[0].clientX,R=I.changedTouches[0].clientY):I.touches&&I.touches.length>0?(W=I.touches[0].clientX,R=I.touches[0].clientY):(W=I.clientX,R=I.clientY);const D=G.getBoundingClientRect(),_=G.width/D.width,re=G.height/D.height;return{x:(W-D.left)*_,y:(R-D.top)*re}},Et=I=>({x:Math.max(0,Math.min(I.x,x.width)),y:Math.max(0,Math.min(I.y,x.height))}),Xe=y.useCallback(I=>{if(T==="drawing"&&g.current){let R,D;I.touches&&I.touches.length>0?(R=I.touches[0].clientX,D=I.touches[0].clientY):(R=I.clientX,D=I.clientY),g.current.style.left=`${R}px`,g.current.style.top=`${D}px`}if(!ue.current&&!he.current&&!Me.current&&!ve.current)return;I.cancelable&&I.preventDefault();const G=Ue(I),W=Et(G);if((ue.current||he.current)&&!v.current&&(v.current=!0),he.current){const R=Lt(G);R&&Q(R,L,!0)}else if(ue.current){const R=we(G,x.width,x.height);R&&Q(R,L,!0)}else if(Me.current){const R=$t(W);R&&R.length>=2&&U({id:"live_drawing",type:"path",points:R,color:L,brushSize:$,opacity:X,brushStyle:P,lineType:A},null,A==="solid")}else if(ve.current&&Ge.current){const R=T.replace("shape_","");U(null,{type:R,start:Ge.current,end:W,borderColor:J,borderOpacity:z,borderStyle:H,borderWidth:V,fillColor:O,fillOpacity:j,lineCapStart:oe,lineCapEnd:q},!1)}},[x,ue,he,Me,ve,we,Lt,U,Q,$t,T,L,$,Ge,J,z,H,V,O,j,X,P,A,oe,q]),Je=y.useCallback(I=>{window.removeEventListener("mousemove",Xe),window.removeEventListener("mouseup",Je),window.removeEventListener("touchmove",Xe),window.removeEventListener("touchend",Je),v.current=!1;const G=Ue(I),W=Et(G);if(!p.current&&!Me.current&&!ve.current&&ee(),Me.current){const R=kt();R&&k(Pn({points:R,color:L,brushSize:$,opacity:X,brushStyle:P,lineType:A})),ee()}if(ve.current&&Ge.current){const R=T.replace("shape_",""),D=Bt(W,R);if(D){const _={type:"shape",shape:R,...D,borderColor:J,borderOpacity:z,borderWidth:V,borderStyle:H,color:J};R==="line"||R==="arrow"?(_.lineCapStart=oe,_.lineCapEnd=q):(_.fillColor=O,_.fillOpacity=j),k(pt(_))}ee()}if(ue.current){const R=be();if(R)if(R.type==="path"){const D=parseInt(R.id.replace("path_",""));k($e({index:D,updates:R}))}else k(Pe({id:R.id,updates:R}))}if(he.current){const R=St();if(R&&R.id)if(R.type==="path"){const D=parseInt(R.id.replace("path_",""));k($e({index:D,updates:R}))}else k(Pe({id:R.id,updates:R}))}le("default")},[Xe,Me,ve,Ge,ue,he,T,kt,Bt,be,St,k,L,$,J,z,V,H,O,j,oe,q,le,ee]),It=I=>{if(I.button!==void 0&&I.button!==0)return;window.addEventListener("mousemove",Xe),window.addEventListener("mouseup",Je),window.addEventListener("touchmove",Xe,{passive:!1}),window.addEventListener("touchend",Je);const G=Ue(I),W=r.current;if(c){Rt();return}if(T==="cursor"){const R=Y?Y.startsWith("path_")?{...F[parseInt(Y.replace("path_",""))],type:"path",id:Y}:Z.find(_=>_.id===Y):null;if(R){const _=ae(R,W);if(_){const re=lt(G,R,W);if(re){qe(re,R,G,_);return}if(ct(G,R,W)){ce(R,G,W);return}}}const D=dn(G.x,G.y,Z,F,$,W);D?(p.current=D.id,k(Pt(D.id)),ae(D,W)&&ce(D,G,W)):(p.current=null,k(Oe()))}else if(T==="drawing")Mn(G),U({id:"live_drawing",type:"path",points:[G],color:L,brushSize:$,opacity:X,brushStyle:P,lineType:A},null,!1);else if(T.startsWith("shape_"))vn(G);else if(T.startsWith("figure_")){const R={player:"👤",goalkeeper:"🧤",coach:"🧠",referee:"⚖️",goal:"🥅",cone:"🟨"},D=T.replace("figure_","");k(pt({type:"figure",figureType:D,icon:R[D],x:G.x,y:G.y,size:30}))}else if(T==="ball")k(pt({type:"ball",x:G.x,y:G.y,radius:10}));else if(T==="text"){const R=`text_${Date.now()}_${Math.random()}`;s(!0),f(""),M(G),l.current=R,k(Pt(R)),p.current=R}},kn=I=>{if(ue.current||he.current||Me.current||ve.current||I.touches)return;T==="drawing"&&g.current&&(g.current.style.left=`${I.clientX}px`,g.current.style.top=`${I.clientY}px`);const G=Ue(I),W=r.current;T==="cursor"&&st(G,Z,F,p.current,$,W)},Bn=()=>b(!0),Tn=()=>b(!1);y.useEffect(()=>{const I=()=>{const G=Tt();h(G)};return I(),window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[Tt]),y.useEffect(()=>{const I=r.current,G=d.current,W=a.current;I&&G&&W&&(I.width=x.width,I.height=x.height,I.style.width=`${x.width}px`,I.style.height=`${x.height}px`,G.width=x.width,G.height=x.height,G.style.width=`${x.width}px`,G.style.height=`${x.height}px`,W.style.width=`${x.width}px`,W.style.height=`${x.height}px`,o.current||(k(Yn({canvasWidth:x.width,canvasHeight:x.height})),o.current=!0),ne(F,Z,T,L,$,Y))},[x,k,ne,F,Z,Y,T,L,$]),y.useEffect(()=>{if(v.current)return;const I=B.current,G=S.current,W=E.current;let R=!1,D=null;if(Y&&Y===W){if(Y.startsWith("path_")){const _=parseInt(Y.replace("path_",""));F[_]!==G[_]&&(R=!0,D={...F[_],type:"path",id:Y})}else{const _=Z.find(Te=>Te.id===Y),re=I.find(Te=>Te.id===Y);_!==re&&(R=!0,D=_)}(Z.length!==I.length||F.length!==G.length)&&(R=!1)}if(R&&D)Q(D,L,!0);else if(ne(F,Z,T,L,$,Y),Y){let _=null;if(Y.startsWith("path_")){const re=parseInt(Y.replace("path_",""));F[re]&&(_={...F[re],type:"path",id:Y})}else _=Z.find(re=>re.id===Y);_?Q(_,L,!0):ee()}else ee();B.current=Z,S.current=F,E.current=Y},[F,Z,Y,ne,Q,ee,T,L,$]),y.useEffect(()=>{x.width>0&&x.height>0&&k(Gn({canvasWidth:x.width,canvasHeight:x.height}))},[x,k]),y.useEffect(()=>{if(c&&i.current&&d.current){const I=i.current;setTimeout(()=>{I.focus(),I.select()},0);const G=d.current,W=G.getBoundingClientRect(),R=G.width/W.width,D=G.height/W.height,_=m.x/R,re=m.y/D;I.style.left=`${_}px`,I.style.top=`${re}px`,I.style.fontSize=`${N/D}px`,I.style.color=K,I.style.width="auto",I.style.height="auto"}},[c,m,K,N]),y.useEffect(()=>{const I=G=>{G.key==="Escape"&&!c&&(k(Oe()),p.current=null)};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[Y,c,k]),y.useEffect(()=>{k(Oe()),p.current=null},[T,k]);const En=I=>{f(I.target.value),i.current&&(i.current.style.height="auto",i.current.style.height=i.current.scrollHeight+"px")},Rt=()=>{const I=u.trim();I&&k(Xn({id:l.current,x:m.x,y:m.y,text:I,fontSize:N,color:K})),s(!1),f(""),l.current=null,k(Ne("cursor"))},In=I=>{I.key==="Escape"&&(I.preventDefault(),s(!1),f(""),k(Oe()),p.current=null,k(Ne("cursor")))};return n.jsxs(Hr,{children:[n.jsx(Or,{ref:g,size:$,color:L,$visible:T==="drawing"&&C}),n.jsxs(Wr,{ref:a,cursor:Ce,$activeTool:T,onMouseEnter:Bn,onMouseLeave:Tn,children:[n.jsx(_r,{ref:r}),n.jsx(Vr,{ref:d,onMouseDown:It,onTouchStart:It,onMouseMove:kn}),c&&n.jsx(jr,{ref:i,value:u,onChange:En,onBlur:Rt,onKeyDown:In,placeholder:"Введіть текст",rows:1})]})]})},qr=e=>y.createElement("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32",xmlSpace:"preserve",...e},y.createElement("path",{className:"st0",d:"M20,29h-8c-2.2,0-4-1.8-4-4V7c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v18C24,27.2,22.2,29,20,29z"}),y.createElement("circle",{className:"st0",cx:16,cy:16,r:4}),y.createElement("line",{className:"st0",x1:8,y1:16,x2:24,y2:16}),y.createElement("rect",{x:13,y:3,className:"st0",width:6,height:4}),y.createElement("rect",{x:13,y:25,className:"st0",width:6,height:4})),Ur=e=>y.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{d:"M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Jr=e=>y.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{d:"M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"})),Kr=e=>y.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("circle",{cx:12,cy:12,r:9,strokeWidth:2}),y.createElement("path",{d:"M18 18L6 6",strokeWidth:2})),wn=e=>y.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},y.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fillRule:"evenodd"},y.createElement("g",{id:"Arrow",transform:"translate(-528.000000, 0.000000)",fillRule:"nonzero"},y.createElement("g",{id:"forward_2_line",transform:"translate(528.000000, 0.000000)"},y.createElement("path",{d:"M17.954,11.6767 C16.6468,9.47493 14.2448,8 11.5,8 C7.35786,8 4,11.3579 4,15.5 C4,16.0523 3.55228,16.5 3,16.5 C2.44772,16.5 2,16.0523 2,15.5 C2,10.2533 6.25329,6 11.5,6 C14.6814,6 17.4961,7.56337 19.22,9.96279 L19.757,6.91751 C19.8529,6.37361 20.3715,6.01044 20.9154,6.10635 C21.4593,6.20225 21.8225,6.72091 21.7266,7.2648 L20.6847,13.1736 C20.6386,13.4348 20.4907,13.667 20.2735,13.8192 C19.9896,14.0179 19.6122,14.0542 19.2977,13.9445 L13.6174,12.9429 C13.0735,12.847 12.7103,12.3284 12.8062,11.7845 C12.9021,11.2406 13.4208,10.8774 13.9647,10.9733 L17.954,11.6767 Z",id:"\\u8DEF\\u5F84"}))))),Qr=e=>y.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.93417 2C7.95604 2 7.97799 2 8 2L16.0658 2C16.9523 1.99995 17.7161 1.99991 18.3278 2.08215C18.9833 2.17028 19.6117 2.36902 20.1213 2.87868C20.631 3.38835 20.8297 4.0167 20.9179 4.67221C21.0001 5.28388 21.0001 6.0477 21 6.9342L21 7.95C21 8.50229 20.5523 8.95 20 8.95C19.4477 8.95 19 8.50229 19 7.95V7.00001C19 6.02893 18.9979 5.40122 18.9357 4.93871C18.8774 4.50497 18.7832 4.36902 18.7071 4.2929C18.631 4.21677 18.495 4.12263 18.0613 4.06431C17.5988 4.00213 16.9711 4 16 4H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V4H8C7.02893 4 6.40122 4.00213 5.93871 4.06431C5.50497 4.12263 5.36902 4.21677 5.2929 4.2929C5.21677 4.36902 5.12263 4.50497 5.06431 4.93871C5.00213 5.40122 5 6.02893 5 7.00001V7.95C5 8.50229 4.55229 8.95 4 8.95C3.44772 8.95 3 8.50229 3 7.95V7.00001C3 6.97799 3 6.95604 3 6.93418C2.99995 6.04769 2.99991 5.28387 3.08215 4.67221C3.17028 4.0167 3.36902 3.38835 3.87868 2.87868C4.38835 2.36902 5.0167 2.17028 5.67221 2.08215C6.28387 1.99991 7.04769 1.99995 7.93417 2Z"}),y.createElement("path",{d:"M7 21H17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),bn=e=>y.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.51192 4.43057C6.82641 4.161 7.29989 4.19743 7.56946 4.51192L13.5695 11.5119C13.8102 11.7928 13.8102 12.2072 13.5695 12.4881L7.56946 19.4881C7.29989 19.8026 6.82641 19.839 6.51192 19.5695C6.19743 19.2999 6.161 18.8264 6.43057 18.5119L12.0122 12L6.43057 5.48811C6.161 5.17361 6.19743 4.70014 6.51192 4.43057ZM10.5121 4.43068C10.8266 4.16111 11.3001 4.19753 11.5697 4.51202L17.5697 11.512C17.8104 11.7929 17.8104 12.2073 17.5697 12.4882L11.5697 19.4882C11.3001 19.8027 10.8266 19.8391 10.5121 19.5696C10.1976 19.3 10.1612 18.8265 10.4308 18.512L16.0124 12.0001L10.4308 5.48821C10.1612 5.17372 10.1976 4.70024 10.5121 4.43068Z"})),eo=e=>y.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("rect",{x:3,y:5,width:18,height:14,rx:2,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),to=e=>y.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),no=e=>y.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.0001 5.94363L4.76627 18H19.2339L12.0001 5.94363ZM10.7138 4.20006C11.2964 3.22905 12.7037 3.22905 13.2863 4.20006L21.4032 17.7282C22.0031 18.728 21.2829 20 20.117 20H3.88318C2.71724 20 1.99706 18.728 2.59694 17.7282L10.7138 4.20006Z"})),ro=e=>y.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{d:"M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z"})),oo=e=>y.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{d:"M6 12H18M18 12L13 7M18 12L13 17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),io=w.div`
  position: relative;
  display: inline-block;
`,ao=w.button`
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
`,so=w.div`
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
`,lo=w.button`
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
`,Zt=w.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ut=[{id:"rectangle",name:"Прямокутник",icon:n.jsx(eo,{}),style:{stroke:"currentColor",fill:"none"}},{id:"circle",name:"Коло",icon:n.jsx(to,{}),style:{stroke:"currentColor",fill:"none"}},{id:"triangle",name:"Трикутник",icon:n.jsx(no,{}),style:{fill:"currentColor",stroke:"none"}},{id:"line",name:"Лінія",icon:n.jsx(ro,{}),style:{fill:"currentColor",stroke:"none"}},{id:"arrow",name:"Стрілка",icon:n.jsx(oo,{}),style:{stroke:"currentColor",fill:"none"}}],co=({activeTool:e,onSelectShape:t})=>{const[r,d]=y.useState(!1),[a,i]=y.useState({top:0,left:0}),o=y.useRef(null),l=y.useRef(null),p=e.startsWith("shape_"),g=p?e.replace("shape_",""):null,x=ut.find(m=>m.id===g),h=()=>{if(l.current){const m=l.current.getBoundingClientRect();i({top:m.bottom+window.scrollY,left:m.left+window.scrollX})}d(!r)},c=m=>{t(m),d(!1)},s=m=>{o.current&&!o.current.contains(m.target)&&d(!1)};y.useEffect(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}),[]);const u=()=>{const m=x||ut[0];return n.jsx(Zt,{children:Yt.cloneElement(m.icon,m.style)})},f=m=>Yt.cloneElement(m.icon,m.style);return n.jsxs(io,{ref:o,children:[n.jsx(ao,{ref:l,title:"Геометричні фігури",onClick:h,active:p,children:u()}),n.jsx(so,{isOpen:r,style:{top:a.top,left:a.left},children:ut.map(m=>n.jsx(lo,{onClick:()=>c(m),title:m.name,children:n.jsx(Zt,{children:f(m)})},m.id))})]})},ho=w.div`
  position: relative;
  display: inline-block;
`,po=w.button`
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
`,uo=w.div`
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
`,go=w.button`
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
`,Ht=[{id:"player",name:"Гравець",icon:"👤"},{id:"goalkeeper",name:"Воротар",icon:"🧤"},{id:"coach",name:"Тренер",icon:"🧠"},{id:"referee",name:"Суддя",icon:"⚖️"},{id:"goal",name:"Ворота",icon:"🥅"},{id:"cone",name:"Стійка",icon:"🟨"}],xo=({activeTool:e,onSelectFigure:t})=>{const[r,d]=y.useState(!1),[a,i]=y.useState({top:0,left:0}),o=y.useRef(null),l=y.useRef(null),p=e.startsWith("figure_"),g=p?e.replace("figure_",""):null,x=Ht.find(f=>f.id===g),h=()=>{if(l.current){const f=l.current.getBoundingClientRect();i({top:f.bottom+window.scrollY,left:f.left+window.scrollX})}d(!r)},c=f=>{t(f),d(!1)},s=f=>{o.current&&!o.current.contains(f.target)&&d(!1)};y.useEffect(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}),[]);const u=()=>x?x.icon:"👤";return n.jsxs(ho,{ref:o,children:[n.jsx(po,{ref:l,title:"Спортивні фігури",onClick:h,active:p,children:u()}),n.jsx(uo,{isOpen:r,style:{top:a.top,left:a.left},children:Ht.map(f=>n.jsx(go,{onClick:()=>c(f),title:f.name,children:f.icon},f.id))})]})},Wt=e=>y.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{d:"M9.19762 11.9582L9.91426 11.737L9.19762 11.9582ZM9.54558 10.8683L9.08995 10.2726L9.54558 10.8683ZM9.91896 14.2952L9.20232 14.5164L9.91896 14.2952ZM14.0579 14.2952L13.3413 14.074L14.0579 14.2952ZM14.4313 10.8683L13.9757 11.4641V11.4641L14.4313 10.8683ZM14.7793 11.9582L15.4959 12.1794L14.7793 11.9582ZM12.5948 9.46375L13.0504 8.86802L12.5948 9.46375ZM11.3821 9.46375L11.8377 10.0595L11.3821 9.46375ZM20.1847 17.75C20.5989 17.75 20.9347 17.4142 20.9347 17C20.9347 16.5858 20.5989 16.25 20.1847 16.25V17.75ZM14.7793 19.7351L14.0677 19.4982L14.7793 19.7351ZM13.4801 21.2631C13.3492 21.6561 13.5617 22.0807 13.9547 22.2116C14.3477 22.3424 14.7724 22.1299 14.9033 21.7369L13.4801 21.2631ZM3.99769 16.25C3.58348 16.25 3.24769 16.5858 3.24769 17C3.24769 17.4142 3.58348 17.75 3.99769 17.75V16.25ZM9.40314 19.7351L10.1147 19.4982L9.40314 19.7351ZM9.27917 21.7369C9.41002 22.1299 9.83469 22.3424 10.2277 22.2116C10.6207 22.0807 10.8332 21.6561 10.7024 21.2631L9.27917 21.7369ZM8.22071 17.3775L7.78185 17.9857L8.22071 17.3775ZM5.556 5.45942C5.4489 5.05928 5.03772 4.82173 4.63759 4.92882C4.23746 5.03591 3.9999 5.44709 4.10699 5.84723L5.556 5.45942ZM5.24951 7.21519L4.52501 7.40909V7.40909L5.24951 7.21519ZM3.59168 11.5885L3.17811 10.9628L3.17811 10.9628L3.59168 11.5885ZM1.62739 11.9879C1.28185 12.2163 1.18689 12.6816 1.4153 13.0271C1.64372 13.3727 2.109 13.4676 2.45454 13.2392L1.62739 11.9879ZM19.934 5.84732C20.0411 5.44719 19.8035 5.036 19.4034 4.92891C19.0033 4.82182 18.5921 5.05938 18.485 5.45951L19.934 5.84732ZM18.7915 7.21528L18.067 7.02137L18.7915 7.21528ZM20.4493 11.5886L20.0357 12.2143L20.4493 11.5886ZM21.5864 13.2393C21.932 13.4677 22.3973 13.3728 22.6257 13.0272C22.8541 12.6817 22.7591 12.2164 22.4136 11.988L21.5864 13.2393ZM16.0903 3.83623C16.4288 3.5975 16.5096 3.12956 16.2709 2.79107C16.0322 2.45257 15.5642 2.3717 15.2257 2.61044L16.0903 3.83623ZM14.3376 4.15456L14.7699 4.76746L14.3376 4.15456ZM9.66562 4.10403L9.22021 4.70744V4.70744L9.66562 4.10403ZM8.61539 2.39659C8.28213 2.15059 7.81255 2.22133 7.56656 2.55459C7.32056 2.88784 7.3913 3.35742 7.72456 3.60341L8.61539 2.39659ZM14.7793 11.3678L14.0627 11.589L14.7793 11.3678ZM9.19762 11.3678L9.91426 11.589L9.19762 11.3678ZM21.2269 12C21.2269 17.1095 17.0899 21.25 11.9885 21.25V22.75C17.92 22.75 22.7269 17.9362 22.7269 12H21.2269ZM11.9885 21.25C6.88701 21.25 2.75 17.1095 2.75 12H1.25C1.25 17.9362 6.05695 22.75 11.9885 22.75V21.25ZM2.75 12C2.75 6.89055 6.88701 2.75 11.9885 2.75V1.25C6.05695 1.25 1.25 6.06376 1.25 12H2.75ZM11.9885 2.75C17.0899 2.75 21.2269 6.89055 21.2269 12H22.7269C22.7269 6.06376 17.92 1.25 11.9885 1.25V2.75ZM12.1392 10.0595L13.9757 11.4641L14.887 10.2726L13.0504 8.86802L12.1392 10.0595ZM14.0626 11.737L13.3413 14.074L14.7746 14.5164L15.4959 12.1794L14.0626 11.737ZM13.1036 14.25H10.8733V15.75H13.1036V14.25ZM10.6356 14.074L9.91426 11.737L8.48098 12.1794L9.20232 14.5164L10.6356 14.074ZM10.0012 11.4641L11.8377 10.0595L10.9265 8.86802L9.08995 10.2726L10.0012 11.4641ZM20.1847 16.25H18.5696V17.75H20.1847V16.25ZM14.0677 19.4982L13.4801 21.2631L14.9033 21.7369L15.4909 19.972L14.0677 19.4982ZM18.5696 16.25C17.892 16.25 17.3207 16.2489 16.8555 16.302C16.3711 16.3574 15.9264 16.4781 15.5228 16.7693L16.4006 17.9857C16.5201 17.8994 16.6846 17.8313 17.0258 17.7923C17.3863 17.7511 17.8574 17.75 18.5696 17.75V16.25ZM15.4909 19.972C15.7161 19.2956 15.8662 18.8484 16.0193 18.5189C16.1643 18.2069 16.2809 18.072 16.4006 17.9857L15.5228 16.7693C15.1193 17.0605 14.8645 17.4444 14.659 17.8868C14.4615 18.3117 14.282 18.8545 14.0677 19.4982L15.4909 19.972ZM3.99769 17.75H5.61279V16.25H3.99769V17.75ZM8.69154 19.972L9.27917 21.7369L10.7024 21.2631L10.1147 19.4982L8.69154 19.972ZM5.61279 17.75C6.325 17.75 6.79611 17.7511 7.15658 17.7923C7.49784 17.8313 7.66228 17.8994 7.78185 17.9857L8.65958 16.7693C8.25598 16.4781 7.81137 16.3574 7.32692 16.302C6.86168 16.2489 6.29041 16.25 5.61279 16.25V17.75ZM10.1147 19.4982C9.90043 18.8545 9.7209 18.3117 9.52346 17.8868C9.31791 17.4445 9.06311 17.0605 8.65958 16.7693L7.78185 17.9857C7.90148 18.072 8.01815 18.2069 8.16314 18.5189C8.31624 18.8484 8.46634 19.2956 8.69154 19.972L10.1147 19.4982ZM4.10699 5.84723L4.52501 7.40909L5.97401 7.02128L5.556 5.45942L4.10699 5.84723ZM3.17811 10.9628L1.62739 11.9879L2.45454 13.2392L4.00526 12.2142L3.17811 10.9628ZM4.52501 7.40909C4.70933 8.09777 4.83021 8.55381 4.88378 8.91324C4.93452 9.25362 4.9114 9.43069 4.85896 9.56902L6.26156 10.1007C6.43795 9.63541 6.43932 9.17465 6.3674 8.69211C6.29831 8.22862 6.14941 7.67663 5.97401 7.02128L4.52501 7.40909ZM4.00526 12.2142C4.57077 11.8404 5.04807 11.5262 5.407 11.2252C5.78074 10.9119 6.08516 10.5661 6.26156 10.1007L4.85896 9.56902C4.80654 9.70729 4.70659 9.855 4.44321 10.0759C4.16501 10.3091 3.77244 10.57 3.17811 10.9628L4.00526 12.2142ZM18.485 5.45951L18.067 7.02137L19.516 7.40918L19.934 5.84732L18.485 5.45951ZM20.0357 12.2143L21.5864 13.2393L22.4136 11.988L20.8629 10.9629L20.0357 12.2143ZM18.067 7.02137C17.8916 7.67672 17.7427 8.22871 17.6736 8.6922C17.6017 9.17474 17.603 9.6355 17.7794 10.1008L19.182 9.56911C19.1296 9.43078 19.1065 9.25372 19.1572 8.91333C19.2108 8.5539 19.3316 8.09787 19.516 7.40918L18.067 7.02137ZM20.8629 10.9629C20.2685 10.5701 19.876 10.3092 19.5978 10.0759C19.3344 9.85509 19.2344 9.70739 19.182 9.56911L17.7794 10.1008C17.9558 10.5662 18.2602 10.912 18.634 11.2253C18.9929 11.5263 19.4702 11.8405 20.0357 12.2143L20.8629 10.9629ZM15.2257 2.61044L13.9054 3.54166L14.7699 4.76746L16.0903 3.83623L15.2257 2.61044ZM10.111 3.50061L8.61539 2.39659L7.72456 3.60341L9.22021 4.70744L10.111 3.50061ZM13.9054 3.54166C13.3231 3.9523 12.9373 4.22303 12.6189 4.39721C12.3174 4.56214 12.1438 4.60125 11.9966 4.59965L11.9803 6.09957C12.478 6.10495 12.9109 5.94721 13.3387 5.7132C13.7496 5.48845 14.2159 5.15817 14.7699 4.76746L13.9054 3.54166ZM9.22021 4.70744C9.76562 5.11004 10.2247 5.45033 10.6306 5.68391C11.0533 5.92712 11.4827 6.09418 11.9803 6.09957L11.9966 4.59965C11.8494 4.59806 11.6767 4.5552 11.3788 4.38379C11.0642 4.20276 10.6843 3.92375 10.111 3.50061L9.22021 4.70744ZM13.9757 11.4641C14.0179 11.4963 14.0475 11.5399 14.0627 11.589L15.4959 11.1465C15.3911 10.807 15.1828 10.4989 14.887 10.2726L13.9757 11.4641ZM14.0627 11.589C14.0773 11.6364 14.0779 11.6876 14.0626 11.737L15.4959 12.1794C15.6023 11.8349 15.5974 11.4754 15.4959 11.1465L14.0627 11.589ZM18.1938 9.14203L14.4923 10.6748L15.0662 12.0607L18.7677 10.5279L18.1938 9.14203ZM13.0504 8.86802C12.7371 8.62838 12.3624 8.50841 11.9885 8.50841V10.0084C12.0419 10.0084 12.0945 10.0253 12.1392 10.0595L13.0504 8.86802ZM11.9885 8.50841C11.6146 8.50841 11.2398 8.62838 10.9265 8.86802L11.8377 10.0595C11.8824 10.0253 11.935 10.0084 11.9885 10.0084V8.50841ZM12.7385 9.25841V5.34961H11.2385V9.25841H12.7385ZM13.3413 14.074C13.3259 14.1241 13.2962 14.166 13.2572 14.1967L14.1852 15.3752C14.4575 15.1608 14.6671 14.8646 14.7746 14.5164L13.3413 14.074ZM13.2572 14.1967C13.214 14.2308 13.1607 14.25 13.1036 14.25V15.75C13.5063 15.75 13.8846 15.6119 14.1852 15.3752L13.2572 14.1967ZM16.5291 16.887L14.2886 14.2954L13.1538 15.2765L15.3944 17.868L16.5291 16.887ZM10.8733 14.25C10.8162 14.25 10.7629 14.2308 10.7197 14.1967L9.79172 15.3752C10.0923 15.6119 10.4706 15.75 10.8733 15.75V14.25ZM10.7197 14.1967C10.6807 14.166 10.651 14.1241 10.6356 14.074L9.20232 14.5164C9.3098 14.8646 9.51943 15.1608 9.79172 15.3752L10.7197 14.1967ZM8.81059 17.8407L10.8456 15.2492L9.66584 14.3228L7.63084 16.9143L8.81059 17.8407ZM9.91426 11.737C9.89899 11.6876 9.89961 11.6364 9.91426 11.589L8.48099 11.1465C8.37949 11.4754 8.37465 11.8349 8.48098 12.1794L9.91426 11.737ZM9.91426 11.589C9.9294 11.5399 9.95905 11.4963 10.0012 11.4641L9.08995 10.2726C8.79412 10.4989 8.58579 10.807 8.48099 11.1465L9.91426 11.589ZM9.48889 10.6766L5.85153 9.14373L5.269 10.526L8.90636 12.0589L9.48889 10.6766Z"})),fo=e=>y.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5262 17.4999C18.4887 22.7611 11.7612 24.5637 6.49994 21.5262C1.23873 18.4886 -0.563901 11.7611 2.47367 6.49988C5.51123 1.23866 12.2387 -0.563962 17.4999 2.4736C22.7612 5.51117 24.5638 12.2387 21.5262 17.4999ZM5.84382 7.87995C5.25279 7.64272 4.74291 7.45257 4.3292 7.30543C5.59153 5.24057 7.56267 3.85898 9.74648 3.29362C9.77176 3.62621 9.82851 4.00289 9.93722 4.40861C10.3269 5.86297 11.3579 7.58777 13.75 8.96886C14.0666 9.15165 14.3765 9.31079 14.6793 9.44842C14.4757 10.219 14.1794 11.0351 13.7614 11.8848C13.3566 11.6365 12.936 11.3857 12.5 11.1339C9.85449 9.60655 7.52076 8.55305 5.84382 7.87995ZM12.7587 13.6161C12.3555 13.3682 11.9358 13.1176 11.5 12.866C8.94938 11.3934 6.70297 10.3799 5.09882 9.73602C4.44209 9.47241 3.89359 9.27099 3.47664 9.12556C2.8887 10.8629 2.86217 12.7007 3.33339 14.4015C3.63406 14.2571 3.98864 14.1179 4.39435 14.0092C5.84872 13.6195 7.85792 13.65 10.25 15.0311C10.5667 15.2139 10.8594 15.4027 11.13 15.5961C11.6875 15.0424 12.2384 14.3885 12.7587 13.6161ZM12.6204 16.9341C13.4037 17.8315 13.839 18.756 14.0628 19.5913C14.1715 19.997 14.2283 20.3736 14.2536 20.7061C15.962 20.2638 17.5403 19.3219 18.7509 17.9441C18.4164 17.6557 17.9678 17.2815 17.4112 16.8446C16.6284 16.2301 15.633 15.4925 14.4426 14.6962C13.8639 15.5605 13.2482 16.3006 12.6204 16.9341ZM9.52737 16.9296C9.43788 16.8737 9.34548 16.8182 9.25005 16.7631C7.31205 15.6442 5.84818 15.6902 4.91199 15.9411C4.58 16.03 4.30141 16.1484 4.0805 16.2639C4.53358 17.1073 5.12461 17.8846 5.84359 18.5583C5.87614 18.5513 5.90977 18.5439 5.94444 18.5361C6.44532 18.4223 7.15871 18.2112 7.97658 17.8245C8.4626 17.5947 8.98712 17.3022 9.52737 16.9296ZM7.92672 20.018C8.21347 19.909 8.51642 19.7815 8.83145 19.6326C9.54844 19.2936 10.3256 18.8442 11.1145 18.2503C11.6989 18.9202 11.9873 19.5728 12.131 20.109C12.2199 20.4409 12.2567 20.7413 12.2672 20.9903C10.8031 21.0352 9.31171 20.7231 7.92672 20.018ZM18.6461 15.2714C17.8061 14.612 16.7364 13.8204 15.4558 12.968C15.9672 11.9634 16.3317 10.9922 16.5833 10.0701C17.7521 10.2998 18.7704 10.2145 19.6057 9.99072C20.0114 9.88202 20.3659 9.74284 20.6666 9.59846C21.2688 11.7723 21.0579 14.1701 19.9008 16.2957C19.5666 16.011 19.147 15.6645 18.6461 15.2714ZM16.9702 8.10789C17.8425 8.27902 18.5519 8.20254 19.0881 8.05887C19.42 7.96992 19.6986 7.85154 19.9195 7.73607C19.2263 6.44565 18.2102 5.3101 16.907 4.46319C16.956 4.76614 16.9971 5.09234 17.0257 5.43977C17.0906 6.23015 17.09 7.1278 16.9702 8.10789ZM15.0328 7.39372C15.0854 6.73963 15.0764 6.13922 15.0324 5.60348C14.9583 4.70183 14.7845 3.97847 14.6326 3.4878C14.622 3.45374 14.6116 3.42082 14.6013 3.38905C13.6584 3.10331 12.6898 2.9801 11.7329 3.00943C11.7433 3.2585 11.7801 3.55897 11.8691 3.89097C12.1199 4.82716 12.812 6.11791 14.75 7.23681C14.8454 7.2919 14.9397 7.34416 15.0328 7.39372Z"})),mo=e=>y.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{d:"M11.5697 12.5532L12.1617 13.0137V13.0137L11.5697 12.5532ZM11.3142 3.64586L12.0065 3.93432V3.93432L11.3142 3.64586ZM18.555 14.5045C18.8336 14.198 18.811 13.7237 18.5045 13.445C18.198 13.1664 17.7237 13.189 17.445 13.4955L18.555 14.5045ZM17.7087 14.3204L17.1538 13.8159L17.1538 13.8159L17.7087 14.3204ZM21.2426 10.7426L21.7773 10.2166L21.773 10.2123L21.2426 10.7426ZM21.4531 12.026C21.7436 12.3213 22.2184 12.3251 22.5137 12.0346C22.809 11.7442 22.8129 11.2693 22.5224 10.974L21.4531 12.026ZM5.7327 19.0428C5.31848 19.0428 4.9827 19.3786 4.9827 19.7928C4.9827 20.207 5.31848 20.5428 5.7327 20.5428V19.0428ZM3.5 15.75C3.08579 15.75 2.75 16.0858 2.75 16.5C2.75 16.9142 3.08579 17.25 3.5 17.25V15.75ZM8.19231 3.35575C8.35162 2.9734 8.17081 2.5343 7.78846 2.37498C7.40611 2.21567 6.96701 2.39648 6.80769 2.77883L8.19231 3.35575ZM6.80769 15.2885C6.96701 15.6708 7.40611 15.8516 7.78846 15.6923C8.17081 15.533 8.35162 15.0939 8.19231 14.7115L6.80769 15.2885ZM11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5C10.25 6.91421 10.5858 7.25 11 7.25V5.75ZM19.876 16.916C20.1057 17.2607 20.5714 17.3538 20.916 17.124C21.2607 16.8943 21.3538 16.4286 21.124 16.084L19.876 16.916ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75C2.75 6.89137 6.89137 2.75 12 2.75V1.25ZM12 12.75H12.0917V11.25H12V12.75ZM11.408 11.5395L10.9777 12.0928L12.1617 13.0137L12.592 12.4605L11.408 11.5395ZM11.3077 1.71154L10.6219 3.35739L12.0065 3.93432L12.6923 2.28846L11.3077 1.71154ZM17.445 13.4955L17.1538 13.8159L18.2637 14.8249L18.555 14.5045L17.445 13.4955ZM20.708 11.2686L21.4531 12.026L22.5224 10.974L21.7773 10.2167L20.708 11.2686ZM17.1538 13.8159C14.2838 16.9729 9.96086 19.0428 5.7327 19.0428V20.5428C10.4211 20.5428 15.1357 18.2657 18.2637 14.8249L17.1538 13.8159ZM10.6219 3.35739C9.39039 6.31308 9.66695 9.68222 11.364 12.3975L12.636 11.6025C11.1965 9.29929 10.9619 6.44145 12.0065 3.93432L10.6219 3.35739ZM10.9777 12.0928C9.18293 14.4003 6.42334 15.75 3.5 15.75V17.25C6.88622 17.25 10.0828 15.6866 12.1617 13.0137L10.9777 12.0928ZM6.80769 2.77883C5.13077 6.80344 5.13077 11.2638 6.80769 15.2885L8.19231 14.7115C6.66923 11.0562 6.66923 7.01114 8.19231 3.35575L6.80769 2.77883ZM11 7.25C14.6428 7.25 18.1364 8.6971 20.7123 11.273L21.773 10.2123C18.9158 7.35514 15.0406 5.75 11 5.75V7.25ZM12.0917 12.75C15.2197 12.75 18.1408 14.3133 19.876 16.916L21.124 16.084C19.1107 13.064 15.7213 11.25 12.0917 11.25V12.75Z"})),yo=e=>y.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.9386 4.73542C13.3511 4.69785 13.716 5.0018 13.7535 5.4143C13.8024 5.95058 13.893 6.53361 14.045 7.14711C14.1447 7.54916 13.8995 7.95586 13.4974 8.05549C13.0954 8.15512 12.6887 7.90997 12.5891 7.50791C12.4172 6.81421 12.3148 6.15558 12.2597 5.55036C12.2221 5.13785 12.5261 4.77299 12.9386 4.73542ZM5.23942 9.18054C5.47821 8.84208 5.94616 8.76129 6.28461 9.00008C6.78119 9.35043 7.30041 9.76836 7.81522 10.2641C8.1136 10.5514 8.12256 11.0262 7.83525 11.3246C7.54794 11.6229 7.07315 11.6319 6.77478 11.3446C6.31949 10.9062 5.85988 10.5362 5.41988 10.2257C5.08142 9.98694 5.00063 9.51899 5.23942 9.18054ZM13.836 8.99599C14.2094 8.81661 14.6574 8.97385 14.8368 9.3472C14.9605 9.60468 15.097 9.86417 15.2474 10.1247C15.3979 10.3852 15.5543 10.6332 15.7155 10.869C15.9491 11.2111 15.8612 11.6778 15.5192 11.9114C15.1772 12.145 14.7105 12.0572 14.4769 11.7151C14.2947 11.4485 14.118 11.1685 13.9484 10.8747C13.7788 10.5809 13.6246 10.2879 13.4848 9.99681C13.3054 9.62346 13.4627 9.17538 13.836 8.99599ZM8.48046 12.088C8.82249 11.8544 9.28917 11.9422 9.52281 12.2843C9.70496 12.5509 9.88164 12.8309 10.0513 13.1247C10.2209 13.4185 10.375 13.7115 10.5149 14.0026C10.6943 14.3759 10.537 14.824 10.1637 15.0034C9.79032 15.1828 9.34223 15.0256 9.16285 14.6522C9.03914 14.3947 8.90267 14.1352 8.75225 13.8747C8.60182 13.6142 8.44534 13.3662 8.28421 13.1304C8.05057 12.7883 8.13843 12.3217 8.48046 12.088ZM16.1644 12.6748C16.4517 12.3765 16.9265 12.3675 17.2249 12.6548C17.6802 13.0932 18.1398 13.4632 18.5798 13.7737C18.9183 14.0125 18.9991 14.4804 18.7603 14.8189C18.5215 15.1573 18.0535 15.2381 17.7151 14.9993C17.2185 14.649 16.6993 14.2311 16.1845 13.7353C15.8861 13.448 15.8771 12.9732 16.1644 12.6748ZM10.5022 15.9439C10.9043 15.8443 11.311 16.0894 11.4106 16.4915C11.5825 17.1852 11.6849 17.8438 11.74 18.4491C11.7776 18.8616 11.4736 19.2264 11.0611 19.264C10.6486 19.3016 10.2837 18.9976 10.2462 18.5851C10.1973 18.0488 10.1067 17.4658 9.95466 16.8523C9.85502 16.4502 10.1002 16.0436 10.5022 15.9439Z"}),y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2859 1.32632C11.0551 1.05591 8.71992 1.48034 6.62484 2.68993C1.4832 5.65846 -0.278462 12.2331 2.69007 17.3747C5.6586 22.5164 12.2332 24.278 17.3748 21.3095C19.4699 20.0999 21.0051 18.2898 21.8863 16.2227C23.1661 13.2206 23.0684 9.67094 21.3096 6.62471C19.5509 3.57847 16.5256 1.71902 13.2859 1.32632ZM13.7802 3.08033C13.7309 3.49161 13.3576 3.7851 12.9463 3.73585C12.5351 3.68661 12.2416 3.31329 12.2908 2.90201C12.297 2.85081 12.3032 2.8013 12.3096 2.75354C10.638 2.6958 8.93097 3.09054 7.37484 3.98897C5.81951 4.88694 4.62362 6.16839 3.83764 7.64494C3.88216 7.66328 3.92814 7.68258 3.97552 7.70286C4.35631 7.86585 4.53288 8.30668 4.36989 8.68748C4.20689 9.06827 3.76606 9.24484 3.38527 9.08184C3.33556 9.06057 3.2878 9.04062 3.24212 9.02195C2.41524 11.457 2.60225 14.2226 3.98911 16.6247C5.37596 19.0268 7.67752 20.5716 10.1998 21.073C10.2065 21.0241 10.2131 20.9728 10.2195 20.9191C10.2687 20.5078 10.6421 20.2143 11.0533 20.2636C11.4646 20.3128 11.7581 20.6861 11.7089 21.0974C11.7027 21.1486 11.6965 21.198 11.6901 21.2458C13.3618 21.3034 15.0695 20.9084 16.6248 20.0104C18.181 19.112 19.3764 17.831 20.1621 16.3545C20.1176 16.3362 20.0716 16.3168 20.0242 16.2966C19.6434 16.1336 19.4668 15.6927 19.6298 15.3119C19.7928 14.9311 20.2336 14.7546 20.6144 14.9176C20.6641 14.9388 20.7119 14.9588 20.7576 14.9775C21.5849 12.5411 21.3972 9.77639 20.0106 7.37471C18.624 4.97302 16.3236 3.42808 13.7999 2.92639C13.7932 2.97529 13.7866 3.02664 13.7802 3.08033Z"})),Co=e=>y.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.1665 2.75836L21.2416 8.83351C21.2677 7.81177 21.2303 6.84352 21.1649 5.98862C21.0341 4.27797 19.722 2.96586 18.0114 2.83507C17.1565 2.76971 16.1882 2.7323 15.1665 2.75836ZM21.1071 10.8203L13.1797 2.89285C10.483 3.1978 7.77958 4.04236 5.91097 5.91097C4.04236 7.77958 3.1978 10.483 2.89285 13.1797L10.8203 21.1071C13.517 20.8022 16.2204 19.9576 18.089 18.089C19.9576 16.2204 20.8022 13.517 21.1071 10.8203ZM8.83351 21.2416L2.75836 15.1665C2.7323 16.1882 2.76971 17.1565 2.83507 18.0114C2.96587 19.722 4.27797 21.0341 5.98861 21.1649C6.84352 21.2303 7.81177 21.2677 8.83351 21.2416ZM13.3854 1.36321C15.1096 1.19733 16.7638 1.2353 18.1257 1.33944C20.5746 1.52667 22.4733 3.4254 22.6606 5.87426C22.7647 7.23618 22.8027 8.89045 22.6368 10.6146C22.3524 13.5707 21.4579 16.8414 19.1497 19.1497C16.8414 21.4579 13.5707 22.3524 10.6146 22.6368C8.89045 22.8027 7.23618 22.7647 5.87426 22.6606C3.4254 22.4733 1.52667 20.5746 1.33944 18.1257C1.2353 16.7638 1.19733 15.1096 1.36321 13.3854C1.6476 10.4293 2.54206 7.15857 4.85031 4.85031C7.15857 2.54206 10.4293 1.6476 13.3854 1.36321ZM11.9426 8.1601C12.2355 7.86721 12.7104 7.86721 13.0032 8.1601L13.8914 9.0482L14.7795 8.1601C15.0723 7.86721 15.5472 7.86721 15.8401 8.1601C16.133 8.45299 16.133 8.92787 15.8401 9.22076L14.952 10.1089L15.8401 10.997C16.133 11.2899 16.133 11.7647 15.8401 12.0576C15.5472 12.3505 15.0723 12.3505 14.7795 12.0576L13.8914 11.1695L13.0608 12.0001L13.9489 12.8882C14.2418 13.1811 14.2418 13.656 13.9489 13.9489C13.656 14.2418 13.1811 14.2418 12.8882 13.9489L12.0001 13.0608L11.1695 13.8914L12.0576 14.7795C12.3505 15.0723 12.3505 15.5472 12.0576 15.8401C11.7647 16.133 11.2899 16.133 10.997 15.8401L10.1089 14.952L9.22076 15.8401C8.92787 16.133 8.45299 16.133 8.1601 15.8401C7.86721 15.5472 7.86721 15.0723 8.1601 14.7795L9.0482 13.8914L8.1601 13.0032C7.86721 12.7104 7.86721 12.2355 8.1601 11.9426C8.45299 11.6497 8.92787 11.6497 9.22076 11.9426L10.1089 12.8307L10.9394 12.0001L10.0513 11.112C9.75845 10.8191 9.75845 10.3442 10.0513 10.0513C10.3442 9.75845 10.8191 9.75845 11.112 10.0513L12.0001 10.9394L12.8307 10.1089L11.9426 9.22076C11.6497 8.92787 11.6497 8.45299 11.9426 8.1601Z"})),wo=e=>y.createElement("svg",{fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 32 32","data-name":"Layer 1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("rect",{height:1,transform:"translate(20 51) rotate(180)",width:16,x:2,y:25}),y.createElement("rect",{height:1,transform:"translate(26 59) rotate(180)",width:16,x:5,y:29}),y.createElement("rect",{height:1,transform:"translate(39 -8) rotate(90)",width:19,x:14,y:15}),y.createElement("rect",{height:1,transform:"translate(21 10) rotate(90)",width:19,x:-4,y:15}),y.createElement("path",{d:"M24,25H23v2a2,2,0,0,1-2,2H20v1h1a3,3,0,0,0,3-3Z"}),y.createElement("path",{d:"M17,26h1v1a2,2,0,0,0,2,2h1v1H20a3,3,0,0,1-3-3Z"}),y.createElement("path",{d:"M2,26H3v1a2,2,0,0,0,2,2H6v1H5a3,3,0,0,1-3-3Z"}),y.createElement("rect",{height:1,width:6,x:24,y:6}),y.createElement("rect",{height:1,width:19,x:8,y:2}),y.createElement("path",{d:"M5,6H6V5A2,2,0,0,1,8,3H9V2H8A3,3,0,0,0,5,5Z"}),y.createElement("path",{d:"M23,6h1V5a2,2,0,0,1,2-2h1V2H26a3,3,0,0,0-3,3Z"}),y.createElement("path",{d:"M30,6H29V5a2,2,0,0,0-2-2H26V2h1a3,3,0,0,1,3,3Z"})),bo=w.div`
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
`,Mo=w.div`
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
`,vo=w.div`
  padding: 20px 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 2px solid ${({theme:e})=>e.mainBGColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme:e})=>e.ContainerBGColor};
`,Lo=w.h2`
  margin: 0;
  font-size: 24px;
  color: ${({theme:e})=>e.textBlack};
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,So=w.button`
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
`,$o=w.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`,ko=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  @media (max-width: 768px) {
    gap: 6px;
  }
`,Bo=w.button`
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
`,To=w.div`
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
`,Eo=w.div`
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
`,Io=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
`,Ro=w.div`
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
`,zo=w.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.textBlack};
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,Po=w.div`
  font-size: 13px;
  color: ${({theme:e})=>e.textGray};
  line-height: 1.5;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,Yo=w.div`
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
`,Go=w.div`
  position: relative;
  width: ${e=>{const d=e.fieldWidth,a=e.fieldHeight,i=100/d,o=80/a,l=Math.min(i,o);return`${d*l}px`}};
  height: ${e=>{const d=e.fieldWidth,a=e.fieldHeight,i=100/d,o=80/a,l=Math.min(i,o);return`${a*l}px`}};
  background: ${({theme:e})=>e.greenMain};
  border: 2px solid ${({theme:e})=>e.darkGreen};
  border-radius: 2px;
  
  /* Гарантуємо мінімальний розмір для дуже малих полів */
  min-width: 20px;
  min-height: 20px;
`,_t=w.div`
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
`,Xo={FOOTBALL:[{id:"football_standard",name:"Стандартне поле",width:105,height:68},{id:"football_small",name:"Мале поле",width:90,height:45},{id:"football_futsal",name:"Футзал",width:40,height:20}],BASKETBALL:[{id:"basketball_nba",name:"NBA",width:28.65,height:15.24},{id:"basketball_fiba",name:"FIBA",width:28,height:15}],VOLLEYBALL:[{id:"volleyball_indoor",name:"Закритий майданчик",width:18,height:9},{id:"volleyball_beach",name:"Пляжний майданчик",width:16,height:8}],TENNIS:[{id:"tennis_singles",name:"Одиночний розряд",width:23.77,height:8.23},{id:"tennis_doubles",name:"Парний розряд",width:23.77,height:10.97}],RUGBY:[{id:"rugby_standard",name:"Регбі (15 гравців)",width:100,height:70},{id:"rugby_sevens",name:"Регбі-7",width:94,height:68}],HANDBALL:[{id:"handball_standard",name:"Гандбол",width:40,height:20}],SHEET:[{id:"a4_portrait",name:"A4 Портрет",width:21,height:29.7},{id:"a4_landscape",name:"A4 Ландшафт",width:29.7,height:21},{id:"a3_portrait",name:"A3 Портрет",width:29.7,height:42},{id:"a3_landscape",name:"A3 Ландшафт",width:42,height:29.7},{id:"a3_landscape1",name:"A3 Ландшафт",width:600,height:29.7},{id:"a3_landscape2",name:"A3 Ландшафт",width:2,height:529.7}]},Fo=[{id:"FOOTBALL",name:"Футбол",icon:Wt},{id:"RUGBY",name:"Регбі",icon:Co},{id:"BASKETBALL",name:"Баскетбол",icon:fo},{id:"VOLLEYBALL",name:"Волейбол",icon:mo},{id:"TENNIS",name:"Теніс",icon:yo},{id:"HANDBALL",name:"Гандбол",icon:Wt},{id:"SHEET",name:"Аркуш",icon:wo}],Do=({isOpen:e,onClose:t,onSelectField:r,currentFieldId:d})=>{var c;const[a,i]=y.useState("FOOTBALL"),[o,l]=y.useState(d);if(!e)return null;const p=s=>{l(s.id),r(s),setTimeout(()=>t(),300)},g=s=>{s.target===s.currentTarget&&t()},x=(s,u)=>u==="SHEET"?`${s.width}см × ${s.height}см`:`${s.width}м × ${s.height}м`,h=(s,u)=>u==="SHEET"?`${s}см`:`${s}м`;return n.jsx(bo,{onClick:g,children:n.jsxs(Mo,{children:[n.jsxs(vo,{children:[n.jsx(Lo,{children:"Обрати спортивне поле"}),n.jsx(So,{onClick:t,children:n.jsx(Fn,{})})]}),n.jsxs($o,{children:[n.jsx(ko,{children:Fo.map(s=>{const u=s.icon;return n.jsxs(Bo,{active:a===s.id,onClick:()=>i(s.id),children:[n.jsx(To,{children:n.jsx(u,{})}),s.name]},s.id)})}),n.jsx(Eo,{children:n.jsx(Io,{children:(c=Xo[a])==null?void 0:c.map(s=>n.jsxs(Ro,{selected:o===s.id,onClick:()=>p(s),children:[n.jsx(zo,{children:s.name}),n.jsx(Po,{children:x(s,a)}),n.jsx(Yo,{children:n.jsxs(Go,{fieldWidth:s.width,fieldHeight:s.height,children:[n.jsx(_t,{className:"width",children:h(s.width,a)}),n.jsx(_t,{className:"height",children:h(s.height,a)})]})})]},s.id))})})]})]})})},Ao=w(Qr)`
  width: 80%;
  height: 80%;
  stroke: ${({theme:e})=>e.textBlack};
   fill: ${({theme:e})=>e.textBlack};
`,Zo=w(bn)`
  width: 100%;
  height: 100%;
   fill: ${({theme:e})=>e.black};
   rotate: 180deg;
`,Ho=w(Kr)`
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.textBlack};
`,Wo=w(wn)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.textBlack};
`,_o=w(wn)`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  fill: ${({theme:e})=>e.textBlack};
`,Vo=w(Ur)`
  width: 70%;  
  height: 70%;
  stroke: ${({theme:e})=>e.textBlack};
`,jo=w(Jr)`
  width: 70%;  
  height: 70%;
  fill: ${({theme:e})=>e.textBlack};
`,Oo=w.div`
  width: 100%;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-bottom: 2px solid ${({theme:e})=>e.gray};
  padding: 12px 16px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`,No=w.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`,qo=w.div`
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
`,Uo=w.div`
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

`,Jo=w.button`
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
  
`,Ko=w(qr)`
  width: 60%;
  height: 60%;
  fill: none;
  stroke: ${({theme:e})=>e.textBlack};
`,Qe=w.div`
  width: 1px;
  height: 20px;
  background: ${({theme:e})=>e.gray};
  margin: 0 4px;
  
  @media (max-width: 768px) {
    height: 16px;
  }
`,Vt=w.div`
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
`,jt=w.span`
  font-size: 11px;
  color: ${({theme:e})=>e.textGray};
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 9px;
  }
`,Ot=w.input`
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
`,Qo=w.input`
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
`,Nt=({value:e,onChange:t,...r})=>{const[d,a]=y.useState(e),i=y.useRef(null);y.useEffect(()=>{i.current||a(e)},[e]);const o=l=>{const p=l.target.value;a(p),i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{t(p),i.current=null},200)};return n.jsx(Qo,{type:"color",value:d,onChange:o,...r})},ei=({currentField:e,onSelectField:t,isSidebarOpen:r,onToggleSidebar:d})=>{const[a,i]=y.useState(!1),o=ge(),{activeTool:l,team1:p,team2:g,historyIndex:x,history:h}=Ye($=>$.tacticsBoard),c=()=>{i(!0)},s=()=>{i(!1)},u=$=>{t($),s()},f=$=>{o(Ne($))},m=$=>{o(Ne(`shape_${$.id}`))},M=$=>{o(Ne(`figure_${$.id}`))},C=$=>{const X=parseInt($.target.value)||0;o(Dn(Math.max(0,Math.min(30,X))))},b=$=>{o(An($))},v=$=>{const X=parseInt($.target.value)||0;o(Zn(Math.max(0,Math.min(30,X))))},B=$=>{o(Hn($))},S=()=>{o(Wn())},E=()=>{o(_n())},k=()=>{window.confirm("Ви впевнені, що хочете очистити всю дошку?")&&o(Vn())},T=x>0,L=x<h.length-1;return n.jsxs(n.Fragment,{children:[n.jsx(Oo,{children:n.jsxs(No,{children:[n.jsxs(qo,{children:[n.jsx(xe,{title:"Обрати поле",onClick:c,children:n.jsx(Ko,{})}),n.jsx(Qe,{}),n.jsx(xe,{title:"Курсор (виділення та переміщення)",active:l==="cursor",onClick:()=>f("cursor"),children:n.jsx(Vo,{})}),n.jsx(xe,{title:"Додати текст",active:l==="text",onClick:()=>f("text"),children:n.jsx(Ao,{})}),n.jsx(xe,{title:"Малювання",active:l==="drawing",onClick:()=>f("drawing"),children:n.jsx(jo,{})}),n.jsx(co,{activeTool:l,onSelectShape:m}),n.jsx(xo,{activeTool:l,onSelectFigure:M}),n.jsx(Qe,{}),n.jsxs(Vt,{children:[n.jsx(jt,{children:"К1:"}),n.jsx(Ot,{type:"number",min:"0",max:"30",value:p.count,onChange:C,title:"Кількість гравців команди 1"}),n.jsx(Nt,{value:p.color,onChange:b,title:"Колір команди 1"})]}),n.jsxs(Vt,{children:[n.jsx(jt,{children:"К2:"}),n.jsx(Ot,{type:"number",min:"0",max:"30",value:g.count,onChange:v,title:"Кількість гравців команди 2"}),n.jsx(Nt,{value:g.color,onChange:B,title:"Колір команди 2"})]}),n.jsx(Qe,{}),n.jsx(xe,{title:"М'яч",active:l==="ball",onClick:()=>f("ball"),children:"⚽"}),n.jsx(Qe,{}),n.jsx(xe,{title:"Назад (Undo)",onClick:S,disabled:!T,children:n.jsx(_o,{})}),n.jsx(xe,{title:"Вперед (Redo)",onClick:E,disabled:!L,children:n.jsx(Wo,{})}),n.jsx(xe,{title:"Скасувати все",onClick:k,children:n.jsx(Ho,{})})]}),n.jsx(Uo,{children:n.jsx(Jo,{title:"Відкрити панель інструментів",active:r,onClick:d,children:n.jsx(Zo,{})})})]})}),n.jsx(Do,{isOpen:a,onClose:s,onSelectField:u,currentFieldId:e.id})]})},ti=w.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,ni=w.div`
  display: grid;
  grid-template-columns: 40px 1fr 80px;
  gap: 8px;
  align-items: center;
`,ri=w.div`
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
`,oi=w.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  border: 2px solid ${({theme:e})=>e.lightGreen||"#ccc"};
  cursor: pointer;
  overflow: hidden;
`,ii=w.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,ai=w.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,si=w.input`
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
`,li=w.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
`,ci=w.div`
  position: relative;
`,di=w.input`
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
`,hi=w.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
  display: block;
  text-align: center;
  margin-top: 2px;
`,qt=e=>Math.max(0,Math.min(1,e/100)),pi=e=>Math.round(Math.max(0,Math.min(100,e*100))),Ut=(e,t=1)=>{if(!e)return"0, 0, 0, 1";let r=e.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const d=parseInt(r.slice(0,2),16),a=parseInt(r.slice(2,4),16),i=parseInt(r.slice(4,6),16);return`${d}, ${a}, ${i}, ${t}`},de=({color:e,opacity:t,onColorChange:r,onOpacityChange:d,label:a})=>{const[i,o]=y.useState(e||"#000000"),[l,p]=y.useState(t!==void 0?t:100),g=y.useRef(null),x=y.useRef(null),h=y.useRef(null),c=y.useMemo(()=>{const v=qt(l);return Ut(i,v)},[i,l]),[s,u]=y.useState(c),f=y.useMemo(()=>{const v=qt(l);return{backgroundColor:`rgba(${Ut(i,v)})`}},[i,l]);y.useEffect(()=>{x.current||(o(e||"#000000"),p(t!==void 0?t:100))},[e,t]),y.useEffect(()=>{document.activeElement!==h.current&&u(c)},[c]);const m=v=>{const B=v.target.value;o(B),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{r&&r(B),x.current=null},150)},M=v=>{const B=v.target.value;u(B);const S=B.split(",").map(E=>parseFloat(E.trim()));if(S.length>=3&&!S.some(isNaN)){const E=Math.max(0,Math.min(255,S[0]||0)),k=Math.max(0,Math.min(255,S[1]||0)),T=Math.max(0,Math.min(255,S[2]||0)),L=S[3]!==void 0?Math.max(0,Math.min(1,S[3])):1,$=`#${((1<<24)+(E<<16)+(k<<8)+T).toString(16).slice(1)}`,X=pi(L);o($),p(X),x.current&&clearTimeout(x.current),r&&r($),d&&d(X)}},C=v=>{let B=v.target.value,S=parseInt(B);isNaN(S)&&(S=0),S>100&&(S=100),S<0&&(S=0),p(S),d&&d(S)},b=()=>{g.current&&g.current.click()};return n.jsxs("div",{children:[a&&n.jsx(ti,{children:a}),n.jsxs(ni,{children:[n.jsxs(ri,{children:[n.jsx(oi,{style:f,onClick:b}),n.jsx(ii,{ref:g,type:"color",value:i,onChange:m})]}),n.jsxs(ai,{children:[n.jsx(si,{ref:h,type:"text",value:s,onChange:M,placeholder:"0, 0, 0, 1"}),n.jsx(li,{children:"RGBA"})]}),n.jsxs(ci,{children:[n.jsx(di,{type:"number",min:"0",max:"100",value:l,onChange:C}),n.jsx(hi,{children:"Прозорість %"})]})]})]})},ui=w.div`
  position: relative;
  width: 100%;
`,gi=w.button`
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
`,xi=w.div`
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
`,fi=w.div`
  padding: 6px 8px;
  font-family: ${({$fontFamily:e})=>e||"Arial"};
  cursor: pointer;
  color: ${({theme:e})=>e.textBlack};
  background-color: ${({selected:e,theme:t})=>e?t.lightGreen:"transparent"};

  &:hover {
    background-color: ${({theme:e})=>e.greenMain};
    color: ${({theme:e})=>e.white};
  }
`,mi=w(yr)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) rotate(${({$open:e})=>e?"180deg":"0"});
  width: 20px;
  height: 20px;
  stroke: ${({theme:e})=>e.iconColor};
  transition: transform 0.3s ease;
`,pe=({value:e,onChange:t,options:r=[],placeholder:d="Оберіть..."})=>{const[a,i]=y.useState(!1),o=y.useRef(null),l=()=>i(h=>!h),p=()=>i(!1),g=h=>{t(h),p()};y.useEffect(()=>{const h=c=>{o.current&&!o.current.contains(c.target)&&p()};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]);const x=r.find(h=>h.value===e);return n.jsxs(ui,{ref:o,children:[n.jsxs(gi,{onClick:l,$fontFamily:x==null?void 0:x.value,children:[x?x.label:d,n.jsx(mi,{$open:a})]}),a&&n.jsx(xi,{children:r.map(h=>n.jsx(fi,{onClick:()=>g(h.value),selected:h.value===e,$fontFamily:h.value,children:h.label},h.value))})]})},yi="/coaching-draft/assets/brush_marker-9c4a6bad.png",Ci="/coaching-draft/assets/brush_pencil-33e6165e.png",wi="/coaching-draft/assets/brush_pen-07c57dd9.png",bi="/coaching-draft/assets/brush_oil-91e92a78.png",Mi="/coaching-draft/assets/brush_watercolor-e5ec0b25.png",vi="/coaching-draft/assets/brush_spray-d0145476.png",Jt=w.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,Li=w.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,gt=w.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,Kt=w.label`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Si=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,$i=w.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:d})=>{const a=(e-t)/(r-t)*100;return`linear-gradient(to right, ${d.greenMain} 0%, ${d.greenMain} ${a}%, ${d.lightGreen} ${a}%, ${d.lightGreen} 100%)`}};
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
`,ki=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 10px;
`,Ie=w.button`
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
`,Qt=()=>{const e=ge(),{drawColor:t,brushSize:r,brushOpacity:d,brushStyle:a,lineType:i,selectedObjectId:o,paths:l}=Ye($=>$.tacticsBoard),p=o&&o.startsWith("path_")?parseInt(o.replace("path_","")):-1,g=p>=0?l[p]:null,x=g?g.brushStyle:a,h=g?g.color:t,c=g?g.opacity!==void 0?g.opacity:100:d,s=g?g.brushSize:r,u=g?g.lineType:i,[f,m]=y.useState(s),[M,C]=y.useState(50),[b,v]=y.useState(!0);y.useEffect(()=>{switch(m(s),g?g.brushStyle:a){case"hard":C(50),v(!0);break;case"pencil":C(20),v(!0);break;case"calligraphy":C(30),v(!1);break;case"oil":C(60),v(!1);break;case"watercolor":C(80),v(!1);break;case"splatter":C(100),v(!1);break;default:C(50),v(!0)}},[o,s,g,a]);const B=$=>{g?e($e({index:p,updates:{brushStyle:$,lineType:["oil","watercolor","splatter","calligraphy"].includes($)?"solid":u}})):(e(jn($)),["oil","watercolor","splatter","calligraphy"].includes($)&&e(Gt("solid")))},S=$=>{e(g?$e({index:p,updates:{color:$}}):On($))},E=$=>{e(g?$e({index:p,updates:{opacity:$}}):Nn($))},k=$=>{m(parseInt($.target.value))},T=()=>{e(g?$e({index:p,updates:{brushSize:f}}):qn(f))},L=$=>{e(g?$e({index:p,updates:{lineType:$}}):Gt($))};return n.jsxs(n.Fragment,{children:[n.jsxs(Jt,{children:[n.jsx(Li,{children:g?"Пензель":"Тип пензля"}),n.jsxs(ki,{children:[n.jsx(Ie,{active:x==="hard",onClick:()=>B("hard"),title:"Маркер",children:n.jsx("img",{src:yi,alt:"Маркер"})}),n.jsx(Ie,{active:x==="pencil",onClick:()=>B("pencil"),title:"Олівець",children:n.jsx("img",{src:Ci,alt:"Олівець"})}),n.jsx(Ie,{active:x==="calligraphy",onClick:()=>B("calligraphy"),title:"Перо",children:n.jsx("img",{src:wi,alt:"Перо"})}),n.jsx(Ie,{active:x==="oil",onClick:()=>B("oil"),title:"Олія",children:n.jsx("img",{src:bi,alt:"Олія"})}),n.jsx(Ie,{active:x==="watercolor",onClick:()=>B("watercolor"),title:"Акварель",children:n.jsx("img",{src:Mi,alt:"Акварель"})}),n.jsx(Ie,{active:x==="splatter",onClick:()=>B("splatter"),title:"Спрей",children:n.jsx("img",{src:vi,alt:"Спрей"})})]})]}),n.jsxs(Jt,{children:[n.jsx(gt,{children:n.jsx(de,{color:h,opacity:c,onColorChange:S,onOpacityChange:E,label:"Колір та прозорість"})}),n.jsxs(gt,{children:[n.jsxs(Kt,{children:["Товщина лінії",n.jsxs(Si,{children:[f,"px"]})]}),n.jsx($i,{min:"1",max:M,value:f,onChange:k,onMouseUp:T,onTouchEnd:T})]}),b&&n.jsxs(gt,{children:[n.jsx(Kt,{children:"Тип лінії"}),n.jsx(pe,{value:u||"solid",onChange:L,options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]})]})},Bi=w.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Ti=w.h3`
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
`,Ei=w.textarea`
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
`,et=w.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:d})=>{const a=(e-t)/(r-t)*100;return`linear-gradient(to right, ${d.greenMain||"#4CAF50"} 0%, ${d.greenMain||"#4CAF50"} ${a}%, ${d.lightGreen||"#E8F5E9"} ${a}%, ${d.lightGreen||"#E8F5E9"} 100%)`}};
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
`,tt=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Ii=w.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,xt=w.button`
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
`,Ri=({selectedObject:e})=>{const t=ge(),[r,d]=y.useState(e.text||"");y.useEffect(()=>{d(e.text||"")},[e.id,e.text]);const a=(o,l)=>{t(Pe({id:e.id,updates:{[o]:l}}))},i=o=>{const l=o.target.value;d(l),a("text",l)};return n.jsxs(Bi,{children:[n.jsx(Ti,{children:"Властивості тексту"}),n.jsxs(fe,{children:[n.jsx(Le,{children:"Текст"}),n.jsx(Ei,{value:r,onChange:i,placeholder:"Введіть текст...",$fontFamily:e.fontFamily})]}),n.jsx(fe,{children:n.jsx(de,{color:e.color||"#000000",opacity:e.opacity||100,onColorChange:o=>a("color",o),onOpacityChange:o=>a("opacity",o),label:"Колір і прозорість"})}),n.jsxs(fe,{children:[n.jsxs(Le,{children:["Розмір шрифту",n.jsxs(tt,{children:[e.fontSize||16,"px"]})]}),n.jsx(et,{min:"8",max:"200",value:e.fontSize||16,onChange:o=>a("fontSize",Number(o.target.value))})]}),n.jsxs(fe,{children:[n.jsx(Le,{children:"Тип шрифту"}),n.jsx(pe,{value:e.fontFamily||"Arial",onChange:o=>a("fontFamily",o),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(fe,{children:[n.jsx(Le,{children:"Стиль тексту"}),n.jsxs(Ii,{children:[n.jsx(xt,{$active:e.fontWeight==="bold",onClick:()=>a("fontWeight",e.fontWeight==="bold"?"normal":"bold"),children:n.jsx("strong",{children:"B"})}),n.jsx(xt,{$active:e.fontStyle==="italic",onClick:()=>a("fontStyle",e.fontStyle==="italic"?"normal":"italic"),children:n.jsx("em",{children:"I"})}),n.jsx(xt,{$active:e.textDecoration==="underline",onClick:()=>a("textDecoration",e.textDecoration==="underline"?"none":"underline"),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(fe,{children:[n.jsxs(Le,{children:["Міжрядковий інтервал",n.jsx(tt,{children:(e.lineHeight||.9).toFixed(1)})]}),n.jsx(et,{min:"0.5",max:"3",step:"0.1",value:e.lineHeight||.9,onChange:o=>a("lineHeight",Number(o.target.value))})]}),n.jsxs(fe,{children:[n.jsxs(Le,{children:["Міжлітерний інтервал",n.jsxs(tt,{children:[e.letterSpacing||0,"px"]})]}),n.jsx(et,{min:"-2",max:"10",step:"0.5",value:e.letterSpacing||0,onChange:o=>a("letterSpacing",Number(o.target.value))})]}),n.jsxs(fe,{children:[n.jsxs(Le,{children:["Поворот тексту",n.jsxs(tt,{children:[e.rotation||0,"°"]})]}),n.jsx(et,{min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:o=>a("rotation",Number(o.target.value))})]})]})},zi=w.div`
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
`,Ze=w.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,ft=w.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:d})=>{const a=(e-t)/(r-t)*100;return`linear-gradient(to right, ${d.greenMain} 0%, ${d.greenMain} ${a}%, ${d.lightGreen} ${a}%, ${d.lightGreen} 100%)`}};
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
`,mt=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Yi=w.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,yt=w.button`
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
`,Gi=()=>{const e=ge(),{textColor:t,textOpacity:r,textFontSize:d,textFontFamily:a,textFontWeight:i,textFontStyle:o,textDecoration:l,textLineHeight:p,textLetterSpacing:g}=Ye(x=>x.tacticsBoard);return n.jsxs(zi,{children:[n.jsx(Pi,{children:"Налаштування тексту"}),n.jsx(Re,{children:n.jsx(de,{color:t,opacity:r,onColorChange:x=>e(Un(x)),onOpacityChange:x=>e(Jn(x)),label:"Колір і прозорість"})}),n.jsxs(Re,{children:[n.jsxs(Ze,{children:["Розмір шрифту",n.jsxs(mt,{children:[d,"px"]})]}),n.jsx(ft,{type:"range",min:"8",max:"200",value:d,onChange:x=>e(Kn(Number(x.target.value)))})]}),n.jsxs(Re,{children:[n.jsx(Ze,{children:"Тип шрифту"}),n.jsx(pe,{value:a,onChange:x=>e(Qn(x)),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(Re,{children:[n.jsx(Ze,{children:"Стиль тексту"}),n.jsxs(Yi,{children:[n.jsx(yt,{$active:i==="bold",onClick:()=>e(er(i==="bold"?"normal":"bold")),children:n.jsx("strong",{children:"B"})}),n.jsx(yt,{$active:o==="italic",onClick:()=>e(tr(o==="italic"?"normal":"italic")),children:n.jsx("em",{children:"I"})}),n.jsx(yt,{$active:l==="underline",onClick:()=>e(nr(l==="underline"?"none":"underline")),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(Re,{children:[n.jsxs(Ze,{children:["Міжрядковий інтервал",n.jsx(mt,{children:p})]}),n.jsx(ft,{type:"range",min:"0.5",max:"3",step:"0.1",value:p,onChange:x=>e(rr(Number(x.target.value)))})]}),n.jsxs(Re,{children:[n.jsxs(Ze,{children:["Міжлітерний інтервал",n.jsxs(mt,{children:[g,"px"]})]}),n.jsx(ft,{type:"range",min:"-2",max:"10",step:"0.5",value:g,onChange:x=>e(or(Number(x.target.value)))})]})]})},Xi=w.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Fi=w.h3`
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
`,en=w.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:d})=>{const a=(e-t)/(r-t)*100;return`linear-gradient(to right, ${d.greenMain} 0%, ${d.greenMain} ${a}%, ${d.lightGreen} ${a}%, ${d.lightGreen} 100%)`}};
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
`,tn=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Di=w.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,Ct=w.input`
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
`,He=8,Ai=({selectedObject:e})=>{const t=ge(),r=(o,l)=>{t(Pe({id:e.id,updates:{[o]:l}}))},d=(o,l)=>{let p=Number(l);p<He&&(p=He);const g=(e[o]||1)<0?-1:1;p*=g,e.shape==="circle"?t(Pe({id:e.id,updates:{width:p,height:p}})):r(o,p)},a=e.shape==="line"||e.shape==="arrow",i=e.shape==="circle";return n.jsxs(Xi,{children:[n.jsx(Fi,{children:"Властивості фігури"}),!a&&n.jsxs(me,{children:[n.jsx(ye,{children:i?"Діаметр":"Розміри"}),i?n.jsx(Ct,{type:"number",min:He,value:Math.abs(e.width||50),onChange:o=>d("width",o.target.value)}):n.jsxs(Di,{children:[n.jsxs("div",{children:[n.jsx(ye,{style:{fontSize:"10px",marginBottom:"4px"},children:"Ширина"}),n.jsx(Ct,{type:"number",min:He,value:Math.abs(e.width||50),onChange:o=>d("width",o.target.value)})]}),n.jsxs("div",{children:[n.jsx(ye,{style:{fontSize:"10px",marginBottom:"4px"},children:"Висота"}),n.jsx(Ct,{type:"number",min:He,value:Math.abs(e.height||30),onChange:o=>d("height",o.target.value)})]})]})]}),n.jsxs(me,{children:[n.jsxs(ye,{children:["Кут повороту",n.jsxs(tn,{children:[e.rotation||0,"º"]})]}),n.jsx(en,{type:"range",min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:o=>r("rotation",Number(o.target.value))})]}),n.jsx(me,{children:n.jsx(de,{color:e.borderColor||e.color||"#000000",opacity:e.borderOpacity!==void 0?e.borderOpacity:100,onColorChange:o=>r("borderColor",o),onOpacityChange:o=>r("borderOpacity",o),label:a?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(me,{children:[n.jsxs(ye,{children:[a?"Товщина лінії":"Товщина обводки",n.jsxs(tn,{children:[e.borderWidth||2,"px"]})]}),n.jsx(en,{type:"range",min:"1",max:"20",value:e.borderWidth||2,onChange:o=>r("borderWidth",Number(o.target.value))})]}),n.jsxs(me,{children:[n.jsx(ye,{children:"Тип обводки"}),n.jsx(pe,{value:e.borderStyle||"solid",onChange:o=>r("borderStyle",o),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),a&&n.jsxs(n.Fragment,{children:[n.jsxs(me,{children:[n.jsx(ye,{children:"Початок лінії"}),n.jsx(pe,{value:e.lineCapStart||"butt",onChange:o=>r("lineCapStart",o),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(me,{children:[n.jsx(ye,{children:"Кінець лінії"}),n.jsx(pe,{value:e.lineCapEnd||(e.shape==="arrow"?"arrow":"butt"),onChange:o=>r("lineCapEnd",o),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!a&&n.jsx(me,{children:n.jsx(de,{color:e.fillColor||"#ffffff",opacity:e.fillOpacity!==void 0?e.fillOpacity:0,onColorChange:o=>r("fillColor",o),onOpacityChange:o=>r("fillOpacity",o),label:"Колір заливки і прозорість"})})]})},Zi=w.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Hi=w.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ze=w.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,nt=w.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Wi=w.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:d})=>{const a=(e-t)/(r-t)*100;return`linear-gradient(to right, ${d.greenMain} 0%, ${d.greenMain} ${a}%, ${d.lightGreen} ${a}%, ${d.lightGreen} 100%)`}};
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
`,_i=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Vi=w.p`
  font-size: 12px;
  color: #888;
  font-style: italic;
  margin-top: 12px;
  line-height: 1.4;
`,ji=()=>{const e=ge(),{activeTool:t,shapeBorderColor:r,shapeBorderOpacity:d,shapeFillColor:a,shapeFillOpacity:i,shapeBorderWidth:o,shapeBorderStyle:l,shapeLineCapStart:p,shapeLineCapEnd:g}=Ye(h=>h.tacticsBoard),x=t==="shape_line"||t==="shape_arrow";return n.jsxs(Zi,{children:[n.jsx(Hi,{children:"Налаштування фігури"}),n.jsx(ze,{children:n.jsx(de,{color:r,opacity:d,onColorChange:h=>e(ir(h)),onOpacityChange:h=>e(ar(h)),label:"Колір обводки та прозорість"})}),n.jsxs(ze,{children:[n.jsxs(nt,{children:["Товщина обводки",n.jsxs(_i,{children:[o,"px"]})]}),n.jsx(Wi,{type:"range",min:"1",max:"20",value:o,onChange:h=>e(sr(Number(h.target.value)))})]}),n.jsxs(ze,{children:[n.jsx(nt,{children:"Стиль обводки"}),n.jsx(pe,{value:l,onChange:h=>e(lr(h)),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть стиль"})]}),x&&n.jsxs(n.Fragment,{children:[n.jsxs(ze,{children:[n.jsx(nt,{children:"Початок лінії"}),n.jsx(pe,{value:p,onChange:h=>e(cr(h)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(ze,{children:[n.jsx(nt,{children:"Кінець лінії"}),n.jsx(pe,{value:g||(t==="shape_arrow"?"arrow":"butt"),onChange:h=>e(dr(h)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!x&&n.jsx(ze,{children:n.jsx(de,{color:a,opacity:i,onColorChange:h=>e(hr(h)),onOpacityChange:h=>e(pr(h)),label:"Колір заливки і прозорість"})}),n.jsx(Vi,{children:x?"Клікніть і потягніть, щоб намалювати лінію":"Клікніть і потягніть, щоб створити фігуру"})]})},We=w.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,_e=w.h3`
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
`,Se=w.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,nn=w.input`
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
`,rt=w.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:d})=>{const a=(e-t)/(r-t)*100;return`linear-gradient(to right, ${d.greenMain} 0%, ${d.greenMain} ${a}%, ${d.lightGreen} ${a}%, ${d.lightGreen} 100%)`}};
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
`,ot=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Oi=w.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
  margin-top: 10px;
`,Ni=w.div`
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
`,qi=w.div`
  width: 30px; 
  height: 45px;
  background: ${({$color:e})=>e};
  border: 2px solid ${({$borderColor:e})=>e}; 
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); 
`,Ui=w.div`
  display: flex;
  flex-direction: row; 
  gap: 15px; 
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`,rn=w.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,on=w.input.attrs({type:"color"})`
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
`,an=w.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.textGray||"#666"};
  min-width: 45px; 
`,Ji=w.button`
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
`,Ki=w.button`
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
`,Qi=w.span`
  font-size: 10px;
  color: ${({theme:e,$over:t})=>t?e.red:e.textGray};
  margin-top: 4px;
  display: block;
`,sn=8,ln=50,it=100,Ve=3,ea=({selectedObject:e})=>{const t=ge(),r=(L,$)=>{t(Pe({id:e.id,updates:{[L]:$}}))},d=L=>{let $=Number(L);$=Math.max(sn,Math.min(ln,$)),r("radius",$)},a=L=>{const $=Math.max(0,Math.min(99,Number(L)||0));r("number",$)},i=L=>{L.length<=it&&r("topText",L)},o=()=>{const L=e.cards||[];if(L.length<Ve){const $=[...L,{color:"#FFD700",cardBorderColor:"#000000"}];r("cards",$)}},l=L=>{const X=(e.cards||[]).filter((P,A)=>A!==L);r("cards",X)},p=(L,$)=>{const P=[...e.cards||[]];P[L]={...P[L],color:$},r("cards",P)},g=(L,$)=>{const P=[...e.cards||[]];P[L]={...P[L],cardBorderColor:$},r("cards",P)},x=e.radius||20,h=e.number!==void 0?e.number:1,c=e.topText||"",s=e.rotation||0,u=e.color||"#ff0000",f=e.colorOpacity!==void 0?e.colorOpacity:100,m=e.numberColor||"#ffffff",M=e.numberOpacity!==void 0?e.numberOpacity:100,C=e.textColor||"#000000",b=e.textOpacity!==void 0?e.textOpacity:100,v=e.textSize||Math.max(10,x*.5),B=e.borderWidth||2,S=e.borderColor||"#000000",E=e.borderOpacity!==void 0?e.borderOpacity:100,k=e.borderStyle||"solid",T=e.cards||[];return n.jsxs(n.Fragment,{children:[n.jsxs(We,{children:[n.jsx(_e,{children:"Розмір та позиція"}),n.jsxs(ie,{children:[n.jsxs(Se,{children:["Розмір гравця (8-50px)",n.jsxs(ot,{children:[x,"px"]})]}),n.jsx(rt,{min:sn,max:ln,value:x,onChange:L=>d(L.target.value)})]}),n.jsxs(ie,{children:[n.jsxs(Se,{children:["Кут повороту",n.jsxs(ot,{children:[s,"º"]})]}),n.jsx(rt,{min:"-180",max:"180",step:"5",value:s,onChange:L=>r("rotation",Number(L.target.value))})]}),n.jsx(ie,{children:n.jsx(de,{color:u,opacity:f,onColorChange:L=>r("color",L),onOpacityChange:L=>r("colorOpacity",L),label:"Колір гравця"})})]}),n.jsxs(We,{children:[n.jsx(_e,{children:"Номер гравця"}),n.jsxs(ie,{children:[n.jsx(Se,{children:"Номер гравця (0-99)"}),n.jsx(nn,{type:"number",min:"0",max:"99",value:h,onChange:L=>a(L.target.value)})]}),n.jsx(ie,{children:n.jsx(de,{color:m,opacity:M,onColorChange:L=>r("numberColor",L),onOpacityChange:L=>r("numberOpacity",L),label:"Колір номера"})})]}),n.jsxs(We,{children:[n.jsx(_e,{children:"Текст над гравцем"}),n.jsxs(ie,{children:[n.jsx(Se,{children:"Текст"}),n.jsx(nn,{type:"text",maxLength:it,placeholder:"Введіть текст",value:c,onChange:L=>i(L.target.value)}),n.jsxs(Qi,{$over:c.length>it,children:[c.length,"/",it," символів"]})]}),c&&n.jsxs(n.Fragment,{children:[n.jsxs(ie,{children:[n.jsxs(Se,{children:["Розмір тексту",n.jsxs(ot,{children:[v,"px"]})]}),n.jsx(rt,{min:"8",max:"40",value:v,onChange:L=>r("textSize",Number(L.target.value))})]}),n.jsx(ie,{children:n.jsx(de,{color:C,opacity:b,onColorChange:L=>r("textColor",L),onOpacityChange:L=>r("textOpacity",L),label:"Колір тексту"})})]})]}),n.jsxs(We,{children:[n.jsx(_e,{children:"Обводка"}),n.jsx(ie,{children:n.jsx(de,{color:S,opacity:E,onColorChange:L=>r("borderColor",L),onOpacityChange:L=>r("borderOpacity",L),label:"Колір обводки"})}),n.jsxs(ie,{children:[n.jsxs(Se,{children:["Товщина обводки",n.jsxs(ot,{children:[B,"px"]})]}),n.jsx(rt,{min:"1",max:"10",value:B,onChange:L=>r("borderWidth",Number(L.target.value))})]}),n.jsxs(ie,{children:[n.jsx(Se,{children:"Тип обводки"}),n.jsx(pe,{value:k,onChange:L=>r("borderStyle",L),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]}),n.jsxs(We,{children:[n.jsxs(_e,{children:["Картки (",T.length,"/",Ve,")"]}),T.length>0&&n.jsx(Oi,{children:T.map((L,$)=>n.jsxs(Ni,{children:[n.jsx(qi,{$color:L.color,$borderColor:L.cardBorderColor||"#000000"}),n.jsxs(Ui,{children:[n.jsxs(rn,{title:"Колір заливки картки",children:[n.jsx(an,{children:"Заливка:"}),n.jsx(on,{value:L.color,onChange:X=>p($,X.target.value)})]}),n.jsxs(rn,{title:"Колір обводки картки",children:[n.jsx(an,{children:"Обводка:"}),n.jsx(on,{value:L.cardBorderColor||"#000000",onChange:X=>g($,X.target.value)})]})]}),n.jsx(Ji,{onClick:()=>l($),title:"Видалити картку",children:n.jsx(Cr,{})})]},$))}),n.jsx(ie,{style:{marginTop:T.length>0?"15px":"0"},children:n.jsx(Ki,{onClick:o,disabled:T.length>=Ve,children:T.length>=Ve?`Максимум ${Ve} картки`:"Додати картку"})})]})]})},ta=w(bn)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.black};
`,na=w.div`
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
`,ra=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
`,oa=w.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ia=w.button`
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
`,aa=w.div`
  padding: 20px;
`,je=w.button`
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
`,sa=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #ccc;
  text-align: center;
`,la=({isOpen:e,onClose:t})=>{const r=ge(),{activeTool:d,selectedObjectId:a,objects:i,paths:o}=Ye(x=>x.tacticsBoard),l=a?a.startsWith("path_")?{...o[parseInt(a.replace("path_",""))],type:"path",id:a}:i.find(x=>x.id===a):null,p=()=>{if(a){if(a.startsWith("path_")){const x=parseInt(a.replace("path_",""));r(ur(x))}else r(gr(a));r(Oe())}},g=()=>{if(l)switch(l.type){case"text":return n.jsxs(n.Fragment,{children:[n.jsx(Ri,{selectedObject:l}),n.jsx(je,{onClick:p,children:"Видалити текст"})]});case"player":return n.jsxs(n.Fragment,{children:[n.jsx(ea,{selectedObject:l}),n.jsx(je,{onClick:p,children:"Видалити гравця"})]});case"shape":return n.jsxs(n.Fragment,{children:[n.jsx(Ai,{selectedObject:l}),n.jsx(je,{onClick:p,children:"Видалити фігуру"})]});case"path":return n.jsxs(n.Fragment,{children:[n.jsx(Qt,{}),n.jsx(je,{onClick:p,children:"Видалити лінію"})]});default:return n.jsx(je,{onClick:p,children:"Видалити об'єкт"})}switch(d){case"text":return n.jsx(Gi,{});case"drawing":return n.jsx(Qt,{});case"shape_rectangle":case"shape_circle":case"shape_triangle":case"shape_line":case"shape_arrow":return n.jsx(ji,{});default:return n.jsxs(sa,{children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎯"}),n.jsx("p",{children:"Виберіть інструмент або об'єкт"}),n.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px",fontStyle:"italic"},children:"Налаштування з'являться тут"})]})}};return n.jsxs(na,{$isOpen:e,children:[n.jsxs(ra,{children:[n.jsx(oa,{children:l?"Властивості":"Інструменти"}),n.jsx(ia,{title:"Закрити панель інструментів",onClick:t,children:n.jsx(ta,{})})]}),n.jsx(aa,{children:g()})]})},ca=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: ${({theme:e})=>e.mainBGColor};
`,da=w.div`
  background: ${({theme:e})=>e.ContainerBGColor};
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`,ha=w.div`
  width: 100%;
`,xa=({theme:e})=>{const{setTitle:t}=xr(),[r,d]=y.useState(!1),[a,i]=y.useState({id:"football_standard",name:"Стандартне футбольне поле",width:105,height:68}),o=g=>{i(g)},l=()=>{d(!r)},p=()=>{d(!1)};return y.useEffect(()=>{t("Тактична дошка")},[t]),n.jsx(fr,{store:mr,children:n.jsx(ca,{children:n.jsxs(da,{children:[n.jsx(ei,{currentField:a,onSelectField:o,isSidebarOpen:r,onToggleSidebar:l}),n.jsx(ha,{children:n.jsx(Nr,{fieldSize:{width:a.width,height:a.height},fieldType:a.id})}),n.jsx(la,{isOpen:r,onClose:p,children:n.jsx("div",{children:"Тут будуть інструменти"})})]})})})};export{xa as default};
