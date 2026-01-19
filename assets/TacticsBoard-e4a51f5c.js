import{r as m,d as C,b as pe,a as Be,_ as Zn,$ as An,a0 as mt,a1 as Se,a2 as Oe,a3 as Hn,a4 as Wn,a5 as je,a6 as pn,j as n,a7 as Yt,a8 as _n,a9 as Ve,W as Xt,S as jn,aa as Vn,ab as On,ac as Nn,ad as qn,ae as Un,af as Jn,ag as Kn,ah as Qn,ai as Ft,aj as er,ak as tr,al as nr,am as rr,an as or,ao as ir,ap as ar,aq as sr,ar as lr,as as cr,at as dr,au as hr,av as pr,aw as ur,ax as gr,ay as xr,az as fr,aA as mr,aB as yr,aC as Cr,aD as wr,aE as br,u as Mr,aF as vr,aG as Lr}from"./index-a9ff27d5.js";import{S as $r}from"./ChevronDownicon-e7989aed.js";import{S as Sr}from"./DeleteIcon-b789bd80.js";const tt=(e,t,r,d,i)=>{const o=Math.cos(i),s=Math.sin(i),c=e-r,p=t-d;return{x:r+(c*o-p*s),y:d+(c*s+p*o)}},le=(e,t)=>{if(e.type==="player"){const r=e.radius||20,i=(e.rotation||0)*Math.PI/180;let o=e.x-r,s=e.x+r,c=e.y-r,p=e.y+r;if(e.topText){const g=e.textSize||Math.max(10,r*.5),x=g,h=e.topText.length*g*.6,l=-(r+x);[{x:-h/2,y:l-x*.2},{x:h/2,y:l-x*.2},{x:-h/2,y:l},{x:h/2,y:l}].forEach(u=>{const f=u.x*Math.cos(i)-u.y*Math.sin(i),y=u.x*Math.sin(i)+u.y*Math.cos(i);o=Math.min(o,e.x+f),s=Math.max(s,e.x+f),c=Math.min(c,e.y+y),p=Math.max(p,e.y+y)})}if(e.cards&&e.cards.length>0){const g=r*.35,x=g*1.4,h=2,l=Math.PI/4,a=Math.cos(l)*r*.7,u=Math.sin(l)*r*.7,f=e.cards.length-1,y=a-f*(g+h);[{x:y-g,y:u},{x:a,y:u},{x:y-g,y:u+x},{x:a,y:u+x}].forEach(w=>{const b=w.x*Math.cos(i)-w.y*Math.sin(i),$=w.x*Math.sin(i)+w.y*Math.cos(i);o=Math.min(o,e.x+b),s=Math.max(s,e.x+b),c=Math.min(c,e.y+$),p=Math.max(p,e.y+$)})}return{x:e.x-r,y:e.y-r,width:r*2,height:r*2,centerX:e.x,centerY:e.y}}if(e.type==="ball"){const r=e.radius||10;return{x:e.x-r,y:e.y-r,width:r*2,height:r*2,centerX:e.x,centerY:e.y}}if(e.type==="shape"){if(e.shape==="line"||e.shape==="arrow"){const c=e.rotation||0;if(c!==0){const l=c*Math.PI/180,a=(e.startX+e.endX)/2,u=(e.startY+e.endY)/2,f=tt(e.startX,e.startY,a,u,l),y=tt(e.endX,e.endY,a,u,l),v=Math.min(f.x,y.x),w=Math.max(f.x,y.x),b=Math.min(f.y,y.y),$=Math.max(f.y,y.y);return{x:v,y:b,width:w-v,height:$-b,startX:f.x,startY:f.y,endX:y.x,endY:y.y,originalStartX:e.startX,originalStartY:e.startY,originalEndX:e.endX,originalEndY:e.endY,centerX:a,centerY:u,rotation:c,rotatedCorners:[f,y]}}const p=Math.min(e.startX,e.endX),g=Math.max(e.startX,e.endX),x=Math.min(e.startY,e.endY),h=Math.max(e.startY,e.endY);return{x:p,y:x,width:g-p,height:h-x,startX:e.startX,startY:e.startY,endX:e.endX,endY:e.endY,rotation:e.rotation||0}}const r=e.width||50,d=e.height||30,i=e.rotation||0;if(i!==0){const c=i*Math.PI/180,p=e.x+r/2,g=e.y+d/2,h=[{x:e.x,y:e.y},{x:e.x+r,y:e.y},{x:e.x+r,y:e.y+d},{x:e.x,y:e.y+d}].map(y=>tt(y.x,y.y,p,g,c));let l=h[0].x,a=h[0].x,u=h[0].y,f=h[0].y;return h.forEach(y=>{l=Math.min(l,y.x),a=Math.max(a,y.x),u=Math.min(u,y.y),f=Math.max(f,y.y)}),{x:l,y:u,width:a-l,height:f-u,centerX:p,centerY:g,originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:d,rotation:i,rotatedCorners:h}}const o=r<0?e.x+r:e.x,s=d<0?e.y+d:e.y;return{x:o,y:s,width:Math.abs(r),height:Math.abs(d),originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:d,rotation:i}}if(e.type==="figure"){const r=e.size||30;return{x:e.x-r/2,y:e.y-r/2,width:r,height:r,centerX:e.x,centerY:e.y}}if(e.type==="path"){if(!e.points||e.points.length===0)return null;let r=1/0,d=1/0,i=-1/0,o=-1/0;for(let p=0;p<e.points.length;p+=5){const g=e.points[p];g.x<r&&(r=g.x),g.x>i&&(i=g.x),g.y<d&&(d=g.y),g.y>o&&(o=g.y)}const s=e.points[e.points.length-1];s.x<r&&(r=s.x),s.x>i&&(i=s.x),s.y<d&&(d=s.y),s.y>o&&(o=s.y);const c=(e.brushSize||5)/2;return{x:r-c,y:d-c,width:i-r+c*2,height:o-d+c*2,points:e.points}}if(e.type==="text"){if(t){const i=t.getContext("2d"),o=e.fontWeight||"normal",s=e.fontStyle||"normal",c=e.fontSize||16,p=e.fontFamily||"Arial";i.font=`${s} ${o} ${c}px ${p}`;const g=(e.text||"").split(`
`),x=(e.lineHeight||1.5)*c,h=e.letterSpacing||0;let l=0;g.forEach(v=>{let b=i.measureText(v).width;h!==0&&(b+=h*(v.length-1)),b>l&&(l=b)});const a=g.length>0?(g.length-1)*x+c:0,u=e.rotation||0,f=e.x+l/2,y=e.y+a/2;if(u!==0){const v=u*Math.PI/180,b=[{x:e.x,y:e.y},{x:e.x+l,y:e.y},{x:e.x+l,y:e.y+a},{x:e.x,y:e.y+a}].map(I=>tt(I.x,I.y,f,y,v));let $=b[0].x,k=b[0].x,S=b[0].y,T=b[0].y;return b.forEach(I=>{$=Math.min($,I.x),k=Math.max(k,I.x),S=Math.min(S,I.y),T=Math.max(T,I.y)}),{x:$,y:S,width:k-$,height:T-S,centerX:f,centerY:y,originalX:e.x,originalY:e.y,originalWidth:l,originalHeight:a,rotation:u,rotatedCorners:b}}return{x:e.x,y:e.y,width:l,height:a,centerX:f,centerY:y,originalX:e.x,originalY:e.y,originalWidth:l,originalHeight:a,rotation:0}}const r=e.width||100,d=e.height||20;return{x:e.x,y:e.y,width:r,height:d,centerX:e.x+r/2,centerY:e.y+d/2}}return null},pt=(e,t,r,d=0)=>{if(!r)return!1;if(r.rotatedCorners&&r.rotatedCorners.length>0){const i=r.rotatedCorners;let o=!1;for(let s=0,c=i.length-1;s<i.length;c=s++){const p=i[s].x,g=i[s].y,x=i[c].x,h=i[c].y;g>t!=h>t&&e<(x-p)*(t-g)/(h-g)+p&&(o=!o)}return o}return e>=r.x-d&&e<=r.x+r.width+d&&t>=r.y-d&&t<=r.y+r.height+d},Dt=(e,t,r,d=10,i)=>{const o=le(r,i);if(!o||!pt(e,t,o,d))return!1;if(r.type==="path"){const s=r.brushSize/2+d;for(let c=0;c<r.points.length-1;c++){const p=r.points[c],g=r.points[c+1],x=g.x-p.x,h=g.y-p.y,l=Math.sqrt(x*x+h*h);if(l===0)continue;const a=Math.max(0,Math.min(1,((e-p.x)*x+(t-p.y)*h)/(l*l))),u=p.x+a*x,f=p.y+a*h;if(Math.sqrt(Math.pow(e-u,2)+Math.pow(t-f,2))<=s)return!0}return!1}if(r.type==="shape"&&(r.shape==="line"||r.shape==="arrow")){const s=r.borderWidth/2+d,c=o.endX-o.startX,p=o.endY-o.startY,g=Math.sqrt(c*c+p*p);if(g===0)return!1;const x=Math.max(0,Math.min(1,((e-o.startX)*c+(t-o.startY)*p)/(g*g))),h=o.startX+x*c,l=o.startY+x*p;return Math.sqrt(Math.pow(e-h,2)+Math.pow(t-l,2))<=s}if(r.type==="shape"&&r.shape==="circle"){const s=o.centerX||o.x+o.width/2,c=o.centerY||o.y+o.height/2,p=(o.originalWidth?Math.abs(o.originalWidth):o.width)/2+d,g=(o.originalHeight?Math.abs(o.originalHeight):o.height)/2+d;if(o.rotation){const x=-(o.rotation*Math.PI)/180,h=e-s,l=t-c,a=h*Math.cos(x)-l*Math.sin(x),u=h*Math.sin(x)+l*Math.cos(x);return a*a/(p*p)+u*u/(g*g)<=1}return Math.pow(e-s,2)/Math.pow(p,2)+Math.pow(t-c,2)/Math.pow(g,2)<=1}return pt(e,t,o,d)},un=(e,t)=>{if(t&&t.type==="shape"&&(t.shape==="line"||t.shape==="arrow"))return{start:{x:e.startX,y:e.startY,cursor:"crosshair"},end:{x:e.endX,y:e.endY,cursor:"crosshair"}};if(t&&t.type==="path")return{};if(t&&t.type==="text"){if(e.rotatedCorners&&e.rotatedCorners.length===4){const r=e.rotatedCorners;return{topLeft:{x:r[0].x,y:r[0].y,cursor:"nwse-resize"},topRight:{x:r[1].x,y:r[1].y,cursor:"nesw-resize"},bottomRight:{x:r[2].x,y:r[2].y,cursor:"nwse-resize"},bottomLeft:{x:r[3].x,y:r[3].y,cursor:"nesw-resize"}}}return{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"}}}if(e.rotatedCorners&&e.rotatedCorners.length===4){const r=e.rotatedCorners;return{topLeft:{x:r[0].x,y:r[0].y,cursor:"nwse-resize"},topRight:{x:r[1].x,y:r[1].y,cursor:"nesw-resize"},bottomRight:{x:r[2].x,y:r[2].y,cursor:"nwse-resize"},bottomLeft:{x:r[3].x,y:r[3].y,cursor:"nesw-resize"},top:{x:(r[0].x+r[1].x)/2,y:(r[0].y+r[1].y)/2,cursor:"ns-resize"},bottom:{x:(r[2].x+r[3].x)/2,y:(r[2].y+r[3].y)/2,cursor:"ns-resize"},left:{x:(r[0].x+r[3].x)/2,y:(r[0].y+r[3].y)/2,cursor:"ew-resize"},right:{x:(r[1].x+r[2].x)/2,y:(r[1].y+r[2].y)/2,cursor:"ew-resize"}}}return{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"},top:{x:e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.y+e.height/2,cursor:"ew-resize"}}},Zt=(e,t,r,d)=>{const i=un(r,d),o=8;for(const[s,c]of Object.entries(i))if(d&&d.type==="shape"&&(d.shape==="line"||d.shape==="arrow")){if(Math.sqrt(Math.pow(e-c.x,2)+Math.pow(t-c.y,2))<=o*2)return{name:s,...c}}else if(Math.abs(e-c.x)<=o&&Math.abs(t-c.y)<=o)return{name:s,...c};return null},gn=(e,t,r,d,i,o)=>{const s=[];for(let c=r.length-1;c>=0;c--)Dt(e,t,r[c],i,o)&&s.push(r[c]);for(let c=d.length-1;c>=0;c--){const p={...d[c],type:"path",id:`path_${c}`};Dt(e,t,p,i,o)&&s.push(p)}return s},xn=(e,t,r,d,i,o)=>{const s=gn(e,t,r,d,i,o);return s.length>0?s[0]:null},fn=(e,t=1)=>{if(!e)return"rgba(0, 0, 0, 1)";let r=e.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const d=parseInt(r.slice(0,2),16),i=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${d}, ${i}, ${o}, ${t})`},ke=e=>{let t=e.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}},ee=e=>{const t=Math.sin(e)*1e4;return t-Math.floor(t)},Lt=(e,t,r,d,i,o)=>{const s=Math.max(1,Math.floor(d*1.5));for(let c=0;c<s;c++){const p=ee(t*r*c)*Math.PI*2,g=Math.sqrt(ee(t+r+c))*d,x=Math.cos(p)*g,h=Math.sin(p)*g,l=o*(.2+ee(c)*.7);e.fillStyle=`rgba(${i.r}, ${i.g}, ${i.b}, ${l})`;const a=.5+ee(c*2);e.beginPath(),e.arc(t+x,r+h,a,0,Math.PI*2),e.fill()}},kr=(e,t,r,d,i,o)=>{e.lineCap="round",e.lineJoin="round";const s=ke(d),c=Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2)),p=Math.max(1,o*.2),g=Math.ceil(c/p);for(let x=0;x<g;x++){const h=x/g,l=t.x+(r.x-t.x)*h,a=t.y+(r.y-t.y)*h,u=(ee(l*a)-.5)*.5;Lt(e,l+u,a+u,o/2,s,i)}},$t=(e,t,r,d,i,o)=>{const s=ke(d);e.lineCap="butt",e.lineJoin="round";const c=Math.max(12,o*1.5),p=o*.8;for(let g=0;g<c;g++){const x=(g/c-.5)*p,h=i*(.8+ee(g)*.2);e.strokeStyle=`rgba(${s.r}, ${s.g}, ${s.b}, ${h})`,e.lineWidth=o/c*2,e.beginPath();const l=ee(t.x*g)-.5,a=ee(r.x*g)-.5;e.moveTo(t.x+x+l,t.y+x+l),e.lineTo(r.x+x+a,r.y+x+a),e.stroke()}},mn=(e,t,r,d,i,o)=>{const s=ke(d);e.lineCap="butt";const c=Math.max(6,o),p=Math.PI/4,g=Math.cos(p)*o,x=Math.sin(p)*o;for(let h=0;h<c;h++){const l=h/(c-1),a=g*(l-.5),u=x*(l-.5);e.strokeStyle=`rgba(${s.r}, ${s.g}, ${s.b}, ${i})`,e.lineWidth=1.5,e.beginPath(),e.moveTo(t.x+a,t.y+u),e.lineTo(r.x+a,r.y+u),e.stroke()}},yn=(e,t,r,d,i,o)=>{e.lineCap="round",e.lineJoin="round";const s=ke(d);[{widthMult:1.5,alphaMult:.15},{widthMult:1.2,alphaMult:.25},{widthMult:1,alphaMult:.35},{widthMult:.7,alphaMult:.45}].forEach((p,g)=>{const x=Math.max(3,Math.floor(o*.2));for(let h=0;h<x;h++){const l=h/x*Math.PI*2,a=o*p.widthMult*.15*(h/x),u=Math.cos(l)*a,f=Math.sin(l)*a,y=i*p.alphaMult*(.8+ee(h+g)*.2);e.strokeStyle=`rgba(${s.r}, ${s.g}, ${s.b}, ${y})`,e.lineWidth=o*p.widthMult,e.beginPath();const v=(ee(t.x*h)-.5)*.5,w=(ee(r.x*h)-.5)*.5;e.moveTo(t.x+u+v,t.y+f+v),e.lineTo(r.x+u+w,r.y+f+w),e.stroke()}})},Cn=(e,t,r,d,i,o)=>{const s=ke(d);e.fillStyle=`rgba(${s.r}, ${s.g}, ${s.b}, ${i})`;const c=Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2)),p=Math.max(5,o/1.2);for(let g=0;g<c;g+=p){const x=g/c,h=t.x+(r.x-t.x)*x,l=t.y+(r.y-t.y)*x,a=o*(.3+ee(h)*.6),u=(ee(l)-.5)*o*1.5,f=(ee(h)-.5)*o*1.5;e.beginPath(),e.arc(h+u,l+f,a,0,Math.PI*2),e.fill();const y=Math.floor(ee(h*l)*4);for(let v=0;v<y;v++){const w=ee(h+v)*Math.PI*2,b=o*(.5+ee(l+v)),$=o*(.05+ee(v)*.1),k=h+u+Math.cos(w)*b,S=l+f+Math.sin(w)*b;e.beginPath(),e.arc(k,S,$,0,Math.PI*2),e.fill()}}},Br=(e,t,r,d,i,o)=>{e.lineCap="round",e.lineJoin="round",e.lineWidth=o,e.strokeStyle=fn(d,i),e.setLineDash([]),e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(r.x,r.y),e.stroke()},Er=(e,t,r,d)=>{const{color:i,opacity:o,brushSize:s,brushStyle:c}=d,p=o!==void 0?o/100:1;switch(e.save(),c){case"pencil":kr(e,t,r,i,p,s);break;case"calligraphy":mn(e,t,r,i,p,s);break;case"oil":$t(e,t,r,i,p,s);break;case"watercolor":yn(e,t,r,i,p,s);break;case"splatter":Cn(e,t,r,i,p,s);break;case"hard":default:Br(e,t,r,i,p,s);break}e.restore()},Tr=(e,t,r,d,i,o)=>{if(e.lineCap="round",e.lineJoin="round",o==="solid"){const s=ke(r),c=Math.max(1,i*.2);for(let p=0;p<t.points.length-1;p++){const g=t.points[p],x=t.points[p+1],h=(x.x-g.x)**2+(x.y-g.y)**2;if(h<2&&p<t.points.length-2)continue;const l=Math.sqrt(h),a=Math.ceil(l/c);for(let u=0;u<a;u++){const f=u/a,y=g.x+(x.x-g.x)*f,v=g.y+(x.y-g.y)*f,w=(ee(y*v)-.5)*.5;Lt(e,y+w,v+w,i/2,s,d)}}}else{const s=ke(r),c=o==="dotted",p=c?i*.1:i*3,g=c?i*1.1:i*2,x=p+g;let h=0;for(let l=0;l<t.points.length-1;l++){const a=t.points[l],u=t.points[l+1],f=Math.sqrt(Math.pow(u.x-a.x,2)+Math.pow(u.y-a.y,2));let y=0;const v=Math.max(1,i*.1);for(;y<f;){const b=(h+y)%x;if(b<p||c&&b<i){const $=y/f,k=a.x+(u.x-a.x)*$,S=a.y+(u.y-a.y)*$;Lt(e,k,S,i/2,s,d)}y+=v}h+=f}}},Ir=(e,t,r,d,i)=>{if(t.points.length>1){const o=Math.max(2,i*.15);let s=0;for(let g=0;g<t.points.length-1;g++){const x=t.points[g],h=t.points[g+1],l=h.x-x.x,a=h.y-x.y,u=Math.sqrt(l*l+a*a);if(s+u<o&&g<t.points.length-2){s+=u;continue}$t(e,x,h,r,d,i),s=0}const c=t.points[t.points.length-2],p=t.points[t.points.length-1];$t(e,c,p,r,d,i)}},zr=(e,t,r,d,i)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const s=t.points[o],c=t.points[o+1];(c.x-s.x)**2+(c.y-s.y)**2<2&&o<t.points.length-2||mn(e,s,c,r,d,i)}},Rr=(e,t,r,d,i)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const s=t.points[o],c=t.points[o+1];(c.x-s.x)**2+(c.y-s.y)**2<2.25&&o<t.points.length-2||yn(e,s,c,r,d,i)}},Pr=(e,t,r,d,i)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const s=t.points[o],c=t.points[o+1];(c.x-s.x)**2+(c.y-s.y)**2<1&&o<t.points.length-2||Cn(e,s,c,r,d,i)}},Gr=(e,t,r,d,i,o)=>{if(e.lineCap="round",e.lineJoin="round",e.lineWidth=i,e.strokeStyle=fn(r,d),o==="solid"){if(e.setLineDash([]),e.beginPath(),t.points.length>0){e.moveTo(t.points[0].x,t.points[0].y);for(let g=1;g<t.points.length;g++){const x=t.points[g],h=t.points[g-1];Math.abs(x.x-h.x)<.5&&Math.abs(x.y-h.y)<.5&&g<t.points.length-1||e.lineTo(x.x,x.y)}}e.stroke();return}const s=o==="dotted",c=s?.1:i*3,p=i*2;if(e.setLineDash([c,p]),e.lineCap=s?"round":"butt",e.beginPath(),t.points.length>0){e.moveTo(t.points[0].x,t.points[0].y);for(let g=1;g<t.points.length;g++)e.lineTo(t.points[g].x,t.points[g].y)}e.stroke(),e.setLineDash([])},St=(e,t,r=!1)=>{if(t.points.length<2)return;e.save();const d=t.opacity!==void 0?t.opacity/100:1,i=r?"#FFD700":t.color,o=t.brushStyle||"hard",s=t.lineType||"solid",c=t.brushSize;if(r){e.strokeStyle="rgba(255, 215, 0, 0.5)",e.lineWidth=c+6,e.lineCap="round",e.lineJoin="round",e.setLineDash([]),e.beginPath(),e.moveTo(t.points[0].x,t.points[0].y);for(let p=1;p<t.points.length;p++)e.lineTo(t.points[p].x,t.points[p].y);e.stroke()}switch(o){case"pencil":Tr(e,t,i,d,c,s);break;case"calligraphy":zr(e,t,i,d,c);break;case"oil":Ir(e,t,i,d,c);break;case"watercolor":Rr(e,t,i,d,c);break;case"splatter":Pr(e,t,i,d,c);break;case"hard":default:Gr(e,t,i,d,c,s);break}e.restore()},Yr=(e,t,r,d,i,o,s,c,p)=>{e.save(),e.strokeStyle=c,e.lineWidth=p,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t,r),e.lineTo(d,i),e.lineTo(o,s),e.stroke(),e.restore()},Xr=(e,t,r,d,i,o,s,c,p=0,g=0)=>{const x=d-t,h=i-r,l=Math.sqrt(x*x+h*h);if(l===0)return;const a=x/l,u=h/l,f=p,y=g,v=l-f-y;if(v<=0)return;const w=t+a*f,b=r+u*f;if(e.strokeStyle=c,e.lineWidth=s,e.lineCap="butt",o==="dashed"){const $=Math.max(s*3,12),k=Math.max(s*2,8),S=$+k,T=Math.max(2,Math.floor(v/S));if(T===2&&v<S*2){const D=v*.35,N=v*.3;e.setLineDash([D,N]),e.lineDashOffset=0,e.beginPath(),e.moveTo(w,b),e.lineTo(d-a*y,i-u*y),e.stroke(),e.setLineDash([]);return}const R=(v-T*$)/T,L=$+R,M=T*L-R,z=(v-M)/2;e.setLineDash([$,R]),e.lineDashOffset=-z,e.beginPath(),e.moveTo(w,b),e.lineTo(d-a*y,i-u*y),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}else if(o==="dotted"){const $=Math.max(s*2.5,10),k=s/2,S=Math.max(2,Math.floor(v/$)+1),T=v/(S-1);e.fillStyle=c;for(let I=0;I<S;I++){const R=I*T,L=w+a*R,M=b+u*R;e.beginPath(),e.arc(L,M,k,0,Math.PI*2),e.fill()}}else e.beginPath(),e.moveTo(w,b),e.lineTo(d-a*y,i-u*y),e.stroke()},At=(e,t,r,d,i)=>{if(t.length<2)return;if(r==="solid"){e.strokeStyle=i,e.lineWidth=d,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let l=1;l<t.length;l++)e.lineTo(t[l].x,t[l].y);e.closePath(),e.stroke();return}let o=0;const s=[],c=t.length;for(let l=0;l<c;l++){const a=t[l],u=t[(l+1)%c],f=u.x-a.x,y=u.y-a.y,v=Math.sqrt(f*f+y*y);s.push(v),o+=v}if(o<20){e.strokeStyle=i,e.lineWidth=d,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let l=1;l<t.length;l++)e.lineTo(t[l].x,t[l].y);e.closePath(),e.stroke();return}const p=Math.max(d*2.5,Math.min(d*4,o/25)),g=Math.max(d*1.5,p*.5),x=p+g,h=p*.7;if(r==="dotted"){const l=d/2,a=Math.max(d*2,o/60);e.fillStyle=i;for(let u=0;u<c;u++){const f=t[u];e.beginPath(),e.arc(f.x,f.y,l,0,Math.PI*2),e.fill()}for(let u=0;u<c;u++){const f=t[u],y=s[u];if(y<=0)continue;const v=t[(u+1)%c].x-f.x,w=t[(u+1)%c].y-f.y,b=v/y,$=w/y,k=1,S=Math.floor(y/a)+1,T=Math.max(k,S-1),I=y/T;for(let R=1;R<T;R++){const L=R*I,M=f.x+b*L,P=f.y+$*L;e.beginPath(),e.arc(M,P,l,0,Math.PI*2),e.fill()}}}else if(r==="dashed"){e.strokeStyle=i,e.lineWidth=d,e.lineCap="butt";for(let l=0;l<c;l++){const a=t[l],u=t[l===0?c-1:l-1],f=t[(l+1)%c],y=s[l===0?c-1:l-1],v=s[l];if(y>0&&v>0){const w=u.x-a.x,b=u.y-a.y,$=f.x-a.x,k=f.y-a.y,S=Math.min(y,v)/3,T=Math.min(h,S),I=a.x+w/y*T,R=a.y+b/y*T,L=a.x+$/v*T,M=a.y+k/v*T;Yr(e,I,R,a.x,a.y,L,M,i,d)}}for(let l=0;l<c;l++){const a=t[l],u=t[(l+1)%c],f=s[l];if(f===0)continue;const y=u.x-a.x,v=u.y-a.y,w=y/f,b=v/f,$=s[l===0?c-1:l-1],k=f,S=s[(l+1)%c],T=Math.min($,k)/3,I=Math.min(h,T),R=Math.min(k,S)/3,L=Math.min(h,R),M=f-I-L;if(M<=p/2)continue;const P=a.x+w*I,z=a.y+b*I,D=Math.floor(M/x);if(D===0){const _=M/2-p/2;if(_>=0){const j=P+w*_,W=z+b*_,te=P+w*(_+p),V=z+b*(_+p);e.beginPath(),e.moveTo(j,W),e.lineTo(te,V),e.stroke()}continue}const q=(M-D*p)/D,O=p+q,H=D*O-q,X=(M-H)/2;e.setLineDash([p,q]),e.lineDashOffset=-X,e.beginPath(),e.moveTo(P,z),e.lineTo(u.x-w*L,u.y-b*L),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}}},Ht=(e,t,r,d,i,o,s,c,p)=>{if(i==="butt")return 0;const g=s.replace("#",""),x=parseInt(g.slice(0,2),16),h=parseInt(g.slice(2,4),16),l=parseInt(g.slice(4,6),16);e.fillStyle=`rgba(${x}, ${h}, ${l}, ${c})`,e.strokeStyle=`rgba(${x}, ${h}, ${l}, ${c})`,e.save(),e.translate(t,r),e.rotate(d);let a=0;if(i==="round"){const u=Math.max(p*.75,4);e.beginPath(),e.arc(0,0,u,0,Math.PI*2),e.fill(),a=0}else i==="arrow"?(e.beginPath(),e.moveTo(0,0),e.lineTo(-o,-o*.5),e.lineTo(-o,o*.5),e.closePath(),e.fill(),a=o):i==="circle"?(e.beginPath(),e.arc(0,0,o*.4,0,Math.PI*2),e.fill(),a=o*.2):i==="bar"&&(e.lineWidth=p,e.lineCap="butt",e.beginPath(),e.moveTo(0,-o*.6),e.lineTo(0,o*.6),e.stroke(),a=0);return e.restore(),a},wn=(e,t,r=!1)=>{e.save();const d=t.fontWeight||"normal",i=t.fontStyle||"normal",o=t.fontSize||16,s=t.fontFamily||"Arial";e.font=`${i} ${d} ${o}px ${s}`,e.textAlign="left",e.textBaseline="top";const c=(t.text||"").split(`
`),p=(t.lineHeight||1.5)*o,g=t.letterSpacing||0;let x=0;c.forEach(b=>{let $=0;g!==0?$=e.measureText(b).width+g*(b.length-1):$=e.measureText(b).width,$>x&&(x=$)});const h=c.length>0?(c.length-1)*p+o:0,l=2;if(t.rotation){const b=t.x+x/2,$=t.y+h/2;e.translate(b,$),e.rotate(t.rotation*Math.PI/180),e.translate(-b,-$)}const a=t.opacity!==void 0?t.opacity/100:1,f=(t.color||"#000000").replace("#",""),y=parseInt(f.slice(0,2),16),v=parseInt(f.slice(2,4),16),w=parseInt(f.slice(4,6),16);return e.fillStyle=`rgba(${y}, ${v}, ${w}, ${a})`,c.forEach((b,$)=>{const k=t.y+$*p;if(g!==0){let S=t.x;for(let T=0;T<b.length;T++){const I=b[T];e.fillText(I,S,k);const R=e.measureText(I).width;S+=R+g}}else e.fillText(b,t.x,k);if(t.textDecoration==="underline"){const S=g!==0?e.measureText(b).width+g*(b.length-1):e.measureText(b).width;e.beginPath(),e.moveTo(t.x,k+o),e.lineTo(t.x+S,k+o),e.strokeStyle=e.fillStyle,e.lineWidth=Math.max(1,o/16),e.stroke()}}),r&&(e.fillStyle="rgba(255, 215, 0, 0.2)",e.fillRect(t.x-l,t.y-l,x+l*2,h+l*2)),e.restore(),t},bn=(e,t,r)=>{e.save();const d=t.x,i=t.y,o=t.radius||20,s=t.rotation||0;e.translate(d,i),e.rotate(s*Math.PI/180);const c=t.borderWidth||2,p=(t.borderOpacity!==void 0?t.borderOpacity:100)/100,g=r?"#FFD700":t.borderColor||"#000000",x=t.borderStyle||"solid",h=g.replace("#",""),l=parseInt(h.slice(0,2),16),a=parseInt(h.slice(2,4),16),u=parseInt(h.slice(4,6),16),f=(t.colorOpacity!==void 0?t.colorOpacity:100)/100,v=(t.color||"#ff0000").replace("#",""),w=parseInt(v.slice(0,2),16),b=parseInt(v.slice(2,4),16),$=parseInt(v.slice(4,6),16);if(e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.fillStyle=`rgba(${w}, ${b}, ${$}, ${f})`,e.fill(),e.strokeStyle=`rgba(${l}, ${a}, ${u}, ${p})`,e.lineWidth=c,x==="dashed"){const z=2*Math.PI*o,D=Math.max(c*2.5,Math.min(c*4,z/25)),N=Math.max(c*1.5,D*.5),q=D+N,O=Math.floor(z/q);if(O<3||z<30)e.setLineDash([]),e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();else{const X=(z-O*D)/O,_=(D+X)/o,j=D/o,W=D+X,te=O*W-X,U=(z-te)/2/o;e.lineCap="butt";for(let J=0;J<O;J++){const K=U+J*_,ne=K+j;e.beginPath(),e.arc(0,0,o,K,ne),e.stroke()}}}else if(x==="dotted"){const z=2*Math.PI*o,D=c/2,N=Math.max(c*2,z/60),q=Math.max(8,Math.round(z/N)),O=2*Math.PI/q;e.fillStyle=`rgba(${l}, ${a}, ${u}, ${p})`;for(let H=0;H<q;H++){const Y=H*O,X=o*Math.cos(Y),_=o*Math.sin(Y);e.beginPath(),e.arc(X,_,D,0,Math.PI*2),e.fill()}}else e.setLineDash([]),e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();e.setLineDash([]);const k=t.number!==void 0?t.number:1,S=(t.numberOpacity!==void 0?t.numberOpacity:100)/100,I=(t.numberColor||"#ffffff").replace("#",""),R=parseInt(I.slice(0,2),16),L=parseInt(I.slice(2,4),16),M=parseInt(I.slice(4,6),16),P=Math.max(12,o*.8);if(e.fillStyle=`rgba(${R}, ${L}, ${M}, ${S})`,e.font=`bold ${P}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(k.toString(),0,0),t.topText){const z=(t.textOpacity!==void 0?t.textOpacity:100)/100,N=(t.textColor||"#000000").replace("#",""),q=parseInt(N.slice(0,2),16),O=parseInt(N.slice(2,4),16),H=parseInt(N.slice(4,6),16),Y=t.textSize||Math.max(10,o*.5),_=-(o+5);e.fillStyle=`rgba(${q}, ${O}, ${H}, ${z})`,e.font=`${Y}px Arial`,e.textAlign="center",e.textBaseline="bottom",e.fillText(t.topText,0,_)}if(t.cards&&t.cards.length>0){const z=o*.35,D=z*1.4,N=4,q=Math.PI/4,O=Math.cos(q)*o*.7,H=Math.sin(q)*o*.7;t.cards.forEach((Y,X)=>{const _=Y.color||(Y==="yellow"?"#FFD700":"#FF0000"),j=Y.cardBorderColor||"#000000",W=O-X*(z+N);e.fillStyle=_,e.fillRect(W-z,H,z,D),e.strokeStyle=j,e.lineWidth=1.5,e.setLineDash([]),e.strokeRect(W-z,H,z,D)})}e.restore()},Mn=(e,t,r=!1)=>{const d=t.radius||10,i=r?"#FFD700":"black",o=r?3:2;e.fillStyle="white",e.strokeStyle=i,e.lineWidth=o,e.beginPath(),e.arc(t.x,t.y,d,0,Math.PI*2),e.fill(),e.stroke(),e.beginPath(),e.arc(t.x-d/3,t.y-d/3,d/3,0,Math.PI*2),e.fillStyle="black",e.fill()},ht=(e,t,r=!1,d="#000")=>{if(e.save(),t.rotation)if(t.shape==="line"||t.shape==="arrow"){const a=(t.startX+t.endX)/2,u=(t.startY+t.endY)/2;e.translate(a,u),e.rotate(t.rotation*Math.PI/180),e.translate(-a,-u)}else{const a=t.x+(t.width||50)/2,u=t.y+(t.height||30)/2;e.translate(a,u),e.rotate(t.rotation*Math.PI/180),e.translate(-a,-u)}const i=r?"#FFD700":t.borderColor||t.color||d,o=t.borderOpacity!==void 0?t.borderOpacity/100:1,s=t.borderWidth||2,c=t.borderStyle||"solid",p=i.replace("#",""),g=parseInt(p.slice(0,2),16),x=parseInt(p.slice(2,4),16),h=parseInt(p.slice(4,6),16),l=`rgba(${g}, ${x}, ${h}, ${o})`;if(e.strokeStyle=l,e.lineWidth=s,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),t.shape==="line"||t.shape==="arrow"){const a=t.endX-t.startX,u=t.endY-t.startY,f=Math.atan2(u,a),y=t.lineCapStart||"butt",v=t.lineCapEnd||(t.shape==="arrow"?"arrow":"butt"),w=Math.max(s*2.5,10);let b=0;y==="arrow"?b=w:y==="circle"?b=w*.2:(y==="round"||y==="bar")&&(b=0);let $=0;if(v==="arrow"?$=w:v==="circle"?$=w*.2:(v==="round"||v==="bar")&&($=0),c==="dashed"||c==="dotted")Xr(e,t.startX,t.startY,t.endX,t.endY,c,s,l,b,$);else{const k=t.startX+Math.cos(f)*b,S=t.startY+Math.sin(f)*b,T=t.endX-Math.cos(f)*$,I=t.endY-Math.sin(f)*$;e.lineCap="butt",e.beginPath(),e.moveTo(k,S),e.lineTo(T,I),e.stroke()}y!=="butt"&&Ht(e,t.startX,t.startY,f+Math.PI,y,w,i,o,s),v!=="butt"&&Ht(e,t.endX,t.endY,f,v,w,i,o,s)}else{const a=t.x,u=t.y,f=t.width!==void 0?t.width:50,y=t.height!==void 0?t.height:30,v=t.ignoreMinSize?0:10,w=Math.abs(f)<v?f<0?-v:v:f,b=Math.abs(y)<v?y<0?-v:v:y,$=t.fillColor||"#ffffff",k=t.fillOpacity!==void 0?t.fillOpacity/100:0;if(k>0){const S=$.replace("#",""),T=parseInt(S.slice(0,2),16),I=parseInt(S.slice(2,4),16),R=parseInt(S.slice(4,6),16);if(e.fillStyle=`rgba(${T}, ${I}, ${R}, ${k})`,e.beginPath(),t.shape==="rectangle")e.rect(a,u,w,b);else if(t.shape==="circle"){const L=a+w/2,M=u+b/2,P=Math.abs(w)/2,z=Math.abs(b)/2;e.ellipse(L,M,P,z,0,0,2*Math.PI)}else t.shape==="triangle"&&(e.moveTo(a+w/2,u),e.lineTo(a,u+b),e.lineTo(a+w,u+b),e.closePath());e.fill()}if(c==="dashed"||c==="dotted"){if(t.shape==="rectangle"){const S=[{x:a,y:u},{x:a+w,y:u},{x:a+w,y:u+b},{x:a,y:u+b}];At(e,S,c,s,l)}else if(t.shape==="triangle"){const S=[{x:a+w/2,y:u},{x:a,y:u+b},{x:a+w,y:u+b}];At(e,S,c,s,l)}else if(t.shape==="circle"){const S=a+w/2,T=u+b/2,I=Math.abs(w)/2,R=Math.abs(b)/2,L=Math.pow(I-R,2)/Math.pow(I+R,2),M=Math.PI*(I+R)*(1+3*L/(10+Math.sqrt(4-3*L)));if(e.beginPath(),c==="dashed"){const P=Math.max(s*2.5,Math.min(s*4,M/25)),z=Math.max(s*1.5,P*.5),D=P+z,N=Math.max(2,Math.round(M/D)),O=M/N-P;e.setLineDash([P,O]),e.lineCap="butt"}else if(c==="dotted"){const P=Math.max(s*2,M/60),z=Math.round(M/P),D=M/z;e.setLineDash([0,D]),e.lineCap="round"}e.ellipse(S,T,I,R,0,0,2*Math.PI),e.stroke(),e.setLineDash([]),e.lineCap="butt"}}else{if(e.beginPath(),t.shape==="rectangle")e.rect(a,u,w,b);else if(t.shape==="circle"){const S=a+w/2,T=u+b/2,I=Math.abs(w)/2,R=Math.abs(b)/2;e.ellipse(S,T,I,R,0,0,2*Math.PI)}else t.shape==="triangle"&&(e.moveTo(a+w/2,u),e.lineTo(a,u+b),e.lineTo(a+w,u+b),e.closePath());e.stroke()}}e.restore()},vn=(e,t,r=!1)=>{const d=t.size||30;e.font=`${d}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(t.icon,t.x,t.y),r&&(e.strokeStyle="#FFD700",e.lineWidth=3,e.strokeRect(t.x-d/2,t.y-d/2,d,d))},Fr=(e,t)=>{if(e.save(),e.strokeStyle="#FFD700",e.lineWidth=2,e.setLineDash([5,5]),t.rotatedCorners&&t.rotatedCorners.length===4){e.beginPath(),e.moveTo(t.rotatedCorners[0].x,t.rotatedCorners[0].y);for(let r=1;r<t.rotatedCorners.length;r++)e.lineTo(t.rotatedCorners[r].x,t.rotatedCorners[r].y);e.closePath(),e.stroke()}else e.strokeRect(t.x,t.y,t.width,t.height);e.setLineDash([]),e.restore()},Dr=(e,t,r)=>{const d=un(t,r),i=8;e.fillStyle="white",e.strokeStyle="#FFD700",e.lineWidth=2,Object.entries(d).forEach(([o,s])=>{e.save(),e.fillRect(s.x-i/2,s.y-i/2,i,i),e.strokeRect(s.x-i/2,s.y-i/2,i,i),e.restore()})},Ln=(e,t)=>{if(!e||!t)return null;const r=le(e,t);if(!r)return null;const d=(e.brushSize||e.borderWidth||10)*2+20,i=2e3;let o=r.width+d*2,s=r.height+d*2;if(o>i||s>i)return null;const c=document.createElement("canvas");c.width=o,c.height=s;const p=c.getContext("2d"),g=r.x-d,x=r.y-d;if(p.translate(-g,-x),e.type==="path")St(p,e,!1);else if(e.type==="player")bn(p,e,!1);else if(e.type==="ball")Mn(p,e,!1);else if(e.type==="shape"){const h=e.borderColor||e.color||"#000000";ht(p,e,!1,h)}else e.type==="figure"?vn(p,e,!1):e.type==="text"&&wn(p,e,!1);return{canvas:c,offsetX:g,offsetY:x,originalWidth:o,originalHeight:s}},Zr=(e,t)=>{const r=m.useRef(null),d=m.useRef(null),i=m.useRef(new Map),o=m.useCallback((l,a=!1)=>{if(!l)return;l.getContext("2d").clearRect(0,0,l.width,l.height)},[]),s=m.useCallback(()=>{const l=t.current;if(!l)return;l.getContext("2d").clearRect(0,0,l.width,l.height)},[t]),c=(l,a,u,f)=>{if(l.save(),a.type==="path")St(l,a,f);else switch(a.type){case"player":bn(l,a,f);break;case"ball":Mn(l,a,f);break;case"shape":ht(l,a,f,a.borderColor||u);break;case"figure":vn(l,a,f);break;case"text":wn(l,a,f);break}l.restore()},p=m.useCallback((l,a,u,f,y)=>{if(f){c(l,a,u,!0);return}const v=JSON.stringify(a),w=i.current.get(a.id);if(w&&w.hash===v&&w.cache){const{cache:$}=w,k=le(a,y);if(k){const S=(a.brushSize||a.borderWidth||10)*2+20;l.drawImage($.canvas,k.x-S,k.y-S)}else c(l,a,u,!1);return}const b=Ln(a,y);if(b){i.current.set(a.id,{hash:v,cache:b});const $=le(a,y);if($){const k=(a.brushSize||a.borderWidth||10)*2+20;l.drawImage(b.canvas,$.x-k,$.y-k)}}else c(l,a,u,!1)},[]),g=m.useCallback((l,a,u,f,y,v=null,w=new Set)=>{const b=e.current;if(!b)return;o(b,!0);const $=b.getContext("2d");l.forEach((k,S)=>{const T=`path_${S}`;if(T===v||w.has(T)||k.points.length<2)return;const I={...k,type:"path",id:T};p($,I,f,!1,b)}),a.forEach(k=>{k.id===v||w.has(k.id)||p($,k,f,!1,b)})},[e,o,p]),x=m.useCallback((l,a,u=!0)=>{const f=t.current;if(!f||!l)return;const y=f.getContext("2d");if(y.clearRect(0,0,f.width,f.height),y.save(),l._cache){const{canvas:v}=l._cache,w=le(l,f),b=(l.brushSize||l.borderWidth||10)*2+20;y.drawImage(v,w.x-b,w.y-b)}else c(y,l,a,u);if(u){const v=le(l,f);v&&(Fr(y,v),l._cache||Dr(y,v,l))}y.restore()},[t]),h=m.useCallback((l,a,u=!1)=>{const f=t.current;if(!f)return;const y=f.getContext("2d");if(u||y.clearRect(0,0,f.width,f.height),l&&l.points&&l.points.length>=2)if(u){const v=l.points.length,w=l.points[v-2],b=l.points[v-1];Er(y,w,b,{color:l.color,opacity:l.opacity,brushSize:l.brushSize,brushStyle:l.brushStyle})}else St(y,l,!1);if(a){const{type:v,start:w,end:b,borderColor:$,borderOpacity:k,borderStyle:S,borderWidth:T,fillColor:I,fillOpacity:R,lineCapStart:L,lineCapEnd:M}=a;if(v==="line"||v==="arrow"){const P={type:"shape",shape:v,startX:w.x,startY:w.y,endX:b.x,endY:b.y,borderColor:$,borderOpacity:k,borderWidth:T,borderStyle:S,lineCapStart:L,lineCapEnd:M,rotation:0};ht(y,P,!1,$)}else{const P=b.x-w.x,z=b.y-w.y,D={type:"shape",shape:v,x:w.x,y:w.y,width:P,height:z,borderColor:$,borderOpacity:k,borderWidth:T,borderStyle:S,fillColor:I,fillOpacity:R,rotation:0,ignoreMinSize:!0};ht(y,D,!1,$)}}},[t]);return{redrawStatic:g,drawLiveLayer:h,drawSingleObjectOnActive:x,clearActiveLayer:s,tempObjectDataRef:r,tempPathDataRef:d}},Ar=()=>{const e=m.useRef(null),t=m.useRef({x:0,y:0}),r=m.useRef(null),[d,i]=m.useState("default");return{draggedObjectRef:e,dragOffsetRef:t,cursorStyle:d,setCursorStyle:i,startDrag:(h,l,a)=>{const u=le(h,a);let f;h.type==="path"?f={...h,points:h.points.map(v=>({...v}))}:f={...h};const y=Ln(h,a);if(e.current={...f,_cache:y},r.current={mouseStart:{...l},objectStart:h.type==="path"?{...h,points:h.points.map(v=>({...v}))}:{...h},cachedBounds:u||{x:0,y:0,width:0,height:0}},h.type==="path")t.current={x:l.x-u.points[0].x,y:l.y-u.points[0].y};else if(h.type==="shape"&&(h.shape==="line"||h.shape==="arrow")){const v=(h.startX+h.endX)/2,w=(h.startY+h.endY)/2;t.current={x:l.x-v,y:l.y-w}}else h.x!==void 0&&h.y!==void 0?t.current={x:l.x-h.x,y:l.y-h.y}:t.current={x:l.x-(u?u.x:0),y:l.y-(u?u.y:0)}},updateDragPosition:(h,l,a)=>{if(!e.current||!r.current)return null;const{objectStart:u,cachedBounds:f}=r.current,y=h.x-r.current.mouseStart.x,v=h.y-r.current.mouseStart.y;let w=e.current;if(w.type==="path"){const T=u.points,I=w.points;for(let R=0;R<T.length;R++)I[R].x=T[R].x+y,I[R].y=T[R].y+v}else w.type==="shape"&&(w.shape==="line"||w.shape==="arrow")?(w.startX=u.startX+y,w.endX=u.endX+y,w.startY=u.startY+v,w.endY=u.endY+v):(w.x=u.x+y,w.y=u.y+v);const b=f.x+f.width/2+y,$=f.y+f.height/2+v;let k=0,S=0;if(b<0?k=0-b:b>l&&(k=l-b),$<0?S=0-$:$>a&&(S=a-$),k!==0||S!==0)if(w.type==="path")for(let T=0;T<w.points.length;T++)w.points[T].x+=k,w.points[T].y+=S;else w.type==="shape"&&(w.shape==="line"||w.shape==="arrow")?(w.startX+=k,w.endX+=k,w.startY+=S,w.endY+=S):(w.x+=k,w.y+=S);return w},endDrag:()=>{const h=e.current;return h&&h._cache&&delete h._cache,e.current=null,r.current=null,t.current={x:0,y:0},h},updateCursor:(h,l,a,u,f,y)=>{if(e.current)return;if(u){const w=u?u.startsWith("path_")?{...a[parseInt(u.replace("path_",""))],type:"path",id:u}:l.find(b=>b.id===u):null;if(w){const b=le(w,y);if(b){const $=Zt(h.x,h.y,b,w);if($){i($.cursor);return}if(pt(h.x,h.y,b)){i("move");return}}}}const v=xn(h.x,h.y,l,a,f,y);i(v?"pointer":"default")},checkForHandle:(h,l,a)=>{const u=le(l,a);return u?Zt(h.x,h.y,u,l):null},checkIfPointInSelectedBounds:(h,l,a)=>{if(!l)return!1;const u=le(l,a);return u&&pt(h.x,h.y,u)}}},nt=10,Hr=8,Wr=70,_r=5,jr=50,Vr=(e,t,r,d,i)=>{const o=i*Math.PI/180,s=Math.cos(o),c=Math.sin(o),p=r/2,g=d/2;return[{x:-p,y:-g},{x:p,y:-g},{x:p,y:g},{x:-p,y:g}].map(h=>({x:e+(h.x*s-h.y*c),y:t+(h.x*c+h.y*s)}))},De=(e,t,r,d,i)=>{const o=i*Math.PI/180,s=Math.cos(o),c=Math.sin(o),p=e-r,g=t-d;return{x:r+(p*s-g*c),y:d+(p*c+g*s)}},Or=()=>{const e=m.useRef(null);return{resizeHandleRef:e,startResize:(i,o,s,c)=>{let p,g;o.type==="player"||o.type==="ball"?(p=(o.radius||20)*2,g=(o.radius||20)*2):o.type==="figure"?(p=o.size||30,g=o.size||30):o.type==="text"?(p=c.originalWidth||c.width,g=c.originalHeight||c.height):(p=o.width!==void 0?o.width:c.width,g=o.height!==void 0?o.height:c.height);let x,h;o.shape==="line"||o.shape==="arrow"?(x=(o.startX+o.endX)/2,h=(o.startY+o.endY)/2):o.type==="player"||o.type==="ball"||o.type==="figure"?(x=o.x,h=o.y):o.type==="text"?(x=c.centerX,h=c.centerY):(x=o.x+p/2,h=o.y+g/2);const l=o.rotation||0,a=Vr(x,h,p,g,l);let u={x,y:h},f={x:s.x,y:s.y};i.name==="topLeft"?(f=a[0],u=a[2]):i.name==="topRight"?(f=a[1],u=a[3]):i.name==="bottomRight"?(f=a[2],u=a[0]):i.name==="bottomLeft"?(f=a[3],u=a[1]):i.name==="top"?(f={x:(a[0].x+a[1].x)/2,y:(a[0].y+a[1].y)/2},u={x:(a[2].x+a[3].x)/2,y:(a[2].y+a[3].y)/2}):i.name==="bottom"?(f={x:(a[2].x+a[3].x)/2,y:(a[2].y+a[3].y)/2},u={x:(a[0].x+a[1].x)/2,y:(a[0].y+a[1].y)/2}):i.name==="left"?(f={x:(a[0].x+a[3].x)/2,y:(a[0].y+a[3].y)/2},u={x:(a[1].x+a[2].x)/2,y:(a[1].y+a[2].y)/2}):i.name==="right"&&(f={x:(a[1].x+a[2].x)/2,y:(a[1].y+a[2].y)/2},u={x:(a[0].x+a[3].x)/2,y:(a[0].y+a[3].y)/2});const y=f.x-s.x,v=f.y-s.y,w=f.x-u.x,b=f.y-u.y,$=w*w+b*b,k=De(s.x,s.y,x,h,-l),S=k.x-x,T=k.y-h;let I=0;["player","ball","figure"].includes(o.type)&&(I=Math.sqrt(Math.pow(s.x-x,2)+Math.pow(s.y-h,2))),e.current={handle:i.name,object:{...o},startPos:s,anchorPoint:u,startVectorX:w,startVectorY:b,startLengthSq:$,pressOffsetX:y,pressOffsetY:v,startFontSize:o.fontSize||16,startX:o.x,startY:o.y,lineStartX:o.startX,lineStartY:o.startY,lineEndX:o.endX,lineEndY:o.endY,startCenterX:x,startCenterY:h,rotation:l,startLocalLeft:-Math.abs(p)/2,startLocalRight:Math.abs(p)/2,startLocalTop:-Math.abs(g)/2,startLocalBottom:Math.abs(g)/2,startFlippedX:p<0,startFlippedY:g<0,isHandleLeft:S<0,isHandleRight:S>0,isHandleTop:T<0,isHandleBottom:T>0,startWidth:p,startHeight:g,startDistanceFromCenter:I}},updateResize:i=>{if(!e.current)return null;const{handle:o,object:s,startFontSize:c,startCenterX:p,startCenterY:g,startDistanceFromCenter:x,rotation:h,lineStartX:l,lineStartY:a,lineEndX:u,lineEndY:f,startPos:y,startLocalLeft:v,startLocalRight:w,startLocalTop:b,startLocalBottom:$,isHandleLeft:k,isHandleRight:S,isHandleTop:T,isHandleBottom:I,startFlippedX:R,startFlippedY:L,startWidth:M,startHeight:P,anchorPoint:z,startVectorX:D,startVectorY:N,startLengthSq:q,pressOffsetX:O,pressOffsetY:H}=e.current;let Y={...s};if(s.type==="text"){const X=i.x+O,_=i.y+H,j=X-z.x,W=_-z.y,te=j*D+W*N;let V=te/q;if(!["topLeft","topRight","bottomLeft","bottomRight"].includes(o)){const re=Math.sqrt(q),ze=Math.sqrt(j*j+W*W),Re=te>0?1:-1;V=ze/re*Re}const oe=8;let U=c*V;U<oe&&(U=oe,V=oe/c),V<.1&&(V=.1),Y.fontSize=c*V;const J=M*V,K=P*V,ne=D*V,ae=N*V,de=z.x+ne*.5,ie=z.y+ae*.5;return Y.x=de-J/2,Y.y=ie-K/2,Y.width=J,Y.height=K,e.current.object=Y,Y}if(s.type==="shape"&&(s.shape==="line"||s.shape==="arrow")){const X=De(l,a,p,g,h),_=De(u,f,p,g,h);let j={...X},W={..._};["start","topLeft","left","top"].includes(o)?j={x:i.x,y:i.y}:W={x:i.x,y:i.y};const te=(j.x+W.x)/2,V=(j.y+W.y)/2,oe=De(j.x,j.y,te,V,-h),U=De(W.x,W.y,te,V,-h);return Y.startX=oe.x,Y.startY=oe.y,Y.endX=U.x,Y.endY=U.y,e.current.object=Y,Y}if(["player","ball","figure"].includes(s.type)){const X=Math.sqrt(Math.pow(i.x-p,2)+Math.pow(i.y-g,2)),_=x>0?X/x:1,j=Math.abs(M);if(s.type==="player"){const W=j/2*_;Y.radius=Math.max(Hr,Math.min(Wr,W))}else if(s.type==="ball"){const W=j/2*_;Y.radius=Math.max(_r,Math.min(jr,W))}else Y.size=Math.max(10,j*_);return e.current.object=Y,Y}if(s.type==="shape"){const X=h*Math.PI/180,_=Math.cos(-X),j=Math.sin(-X),W=i.x-y.x,te=i.y-y.y,V=W*_-te*j,oe=W*j+te*_;let U=v,J=w,K=b,ne=$;k?U+=V:S&&(J+=V),T?K+=oe:I&&(ne+=oe);let ae=R,de=L;U>J&&([U,J]=[J,U],ae=!ae),K>ne&&([K,ne]=[ne,K],de=!de);let ie=J-U,re=ne-K;ie<nt&&(ie=nt,k?U=J-ie:J=U+ie),re<nt&&(re=nt,T?K=ne-re:ne=K+re);const ze=(U+J)/2,Re=(K+ne)/2,ut=ze*Math.cos(X)-Re*Math.sin(X),Ne=ze*Math.sin(X)+Re*Math.cos(X),qe=p+ut,Ue=g+Ne;let Pe=ae?-ie:ie,Je=de?-re:re;return Y.width=Pe,Y.height=Je,Y.x=qe-Pe/2,Y.y=Ue-Je/2,e.current.object=Y,Y}return Y},endResize:()=>{const i=e.current;return e.current=null,i?i.object:null}}},Nr=()=>{const e=m.useRef(!1),t=m.useRef([]),r=m.useRef(null),d=m.useRef(!1);return{drawingRef:e,currentPathRef:t,shapeStartRef:r,isDrawingShapeRef:d,startDrawing:h=>{e.current=!0,t.current=[{x:h.x,y:h.y}]},continueDrawing:h=>e.current?(t.current.push({x:h.x,y:h.y}),t.current):null,endDrawing:()=>{const h=t.current;return e.current=!1,t.current=[],h.length>1?h:null},startShape:h=>{d.current=!0,r.current=h},getShapePreview:h=>!d.current||!r.current?null:{start:r.current,end:h},endShape:(h,l)=>{if(!d.current||!r.current)return null;const a=r.current;let u=null;if(l==="line"||l==="arrow")Math.sqrt(Math.pow(h.x-a.x,2)+Math.pow(h.y-a.y,2))>5&&(u={startX:a.x,startY:a.y,endX:h.x,endY:h.y});else{const f=h.x-a.x,y=h.y-a.y;Math.abs(f)>5&&Math.abs(y)>5&&(u={x:a.x,y:a.y,width:f,height:y})}return d.current=!1,r.current=null,u},cancelDrawing:()=>{e.current=!1,t.current=[],d.current=!1,r.current=null}}},qr=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,Ur=C.div`
  border: 2px solid #ddd;
  margin-top: 10px;
  background: white;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  position: relative;
  cursor: ${e=>e.$activeTool==="drawing"||e.$activeTool==="eraser"?"none":e.cursor};
`,Jr=C.canvas`
  display: block;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`,Kr=C.canvas`
  display: block;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  touch-action: none; 
`,Qr=C.textarea`
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
`,eo=C.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  border-radius: 50%;
  border: 2px solid ${e=>e.isEraser?"#000":e.color}; 
  background-color: ${e=>e.isEraser?"rgba(255, 255, 255, 0.8)":"transparent"}; 
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.5), 0 0 4px rgba(0,0,0,0.2);
  display: ${e=>e.$visible?"block":"none"};
  transition: width 0.1s, height 0.1s;
`,to=({fieldSize:e,fieldType:t})=>{const r=m.useRef(null),d=m.useRef(null),i=m.useRef(null),o=m.useRef(null),s=m.useRef(!1),c=m.useRef(null),p=m.useRef(null),g=m.useRef(null),x=m.useRef(null),h=m.useRef(new Set),[l,a]=m.useState({width:800,height:500}),[u,f]=m.useState(!1),[y,v]=m.useState(""),[w,b]=m.useState({x:0,y:0}),[$,k]=m.useState(!1),S=m.useRef(!1),T=m.useRef([]),I=m.useRef([]),R=m.useRef(null),L=pe(),{activeTool:M,drawColor:P,brushSize:z,eraserSize:D,brushOpacity:N,brushStyle:q,lineType:O,paths:H,objects:Y,selectedObjectId:X,textFontSize:_,textColor:j,shapeBorderColor:W,shapeBorderOpacity:te,shapeFillColor:V,shapeFillOpacity:oe,shapeBorderWidth:U,shapeBorderStyle:J,shapeLineCapStart:K,shapeLineCapEnd:ne}=Be(B=>B.tacticsBoard);m.useEffect(()=>{p.current=X},[X]);const{redrawStatic:ae,drawLiveLayer:de,drawSingleObjectOnActive:ie,clearActiveLayer:re,tempObjectDataRef:ze,tempPathDataRef:Re}=Zr(r,d),{cursorStyle:ut,setCursorStyle:Ne,startDrag:qe,updateDragPosition:Ue,endDrag:Pe,updateCursor:Je,checkForHandle:kn,draggedObjectRef:Ce,checkIfPointInSelectedBounds:Bn}=Ar(),{resizeHandleRef:we,startResize:En,updateResize:kt,endResize:Bt}=Or(),{drawingRef:be,startDrawing:Tn,continueDrawing:Et,endDrawing:Tt,shapeStartRef:Ge,isDrawingShapeRef:Me,startShape:In,endShape:It}=Nr(),zn=1500,Rn=640,Pn=1400,gt=e.width/e.height,zt=m.useCallback(()=>{var ft;const B=i.current;if(!B)return{width:800,height:500};const G=((ft=B.parentElement)==null?void 0:ft.clientWidth)||window.innerWidth,Z=G/zn,E=Pn*Z,F=Rn*Z,A=E,Q=A/gt,xe=F,Xe=xe*gt;let ue,ve;Q<=F?(ue=A,ve=Q):(ue=Xe,ve=xe);const Fe=G*.95;if(ue>Fe){const et=Fe/ue;ue=Fe,ve=ve*et}return{width:Math.floor(ue),height:Math.floor(ve)}},[gt]),Ke=B=>{const G=d.current;if(!G)return{x:0,y:0};let Z,E;B.changedTouches&&B.changedTouches.length>0?(Z=B.changedTouches[0].clientX,E=B.changedTouches[0].clientY):B.touches&&B.touches.length>0?(Z=B.touches[0].clientX,E=B.touches[0].clientY):(Z=B.clientX,E=B.clientY);const F=G.getBoundingClientRect(),A=G.width/F.width,Q=G.height/F.height;return{x:(Z-F.left)*A,y:(E-F.top)*Q}},Rt=B=>({x:Math.max(0,Math.min(B.x,l.width)),y:Math.max(0,Math.min(B.y,l.height))}),xt=m.useCallback(B=>{const G=x.current||B,Z=B.x-G.x,E=B.y-G.y,F=Math.sqrt(Z*Z+E*E),A=Math.max(1,Math.ceil(F/(D/5)));let Q=!1;const xe=D/2*.85;for(let Xe=0;Xe<=A;Xe++){const ue=Xe/A,ve=G.x+Z*ue,Fe=G.y+E*ue;gn(ve,Fe,Y,H,xe,r.current).forEach(et=>{h.current.has(et.id)||(h.current.add(et.id),Q=!0)})}Q&&requestAnimationFrame(()=>{ae(H,Y,M,P,z,null,h.current)}),x.current=B},[Y,H,D,M,P,z,ae]),Ye=m.useCallback(B=>{if((M==="drawing"||M==="eraser")&&g.current){let E,F;B.touches&&B.touches.length>0?(E=B.touches[0].clientX,F=B.touches[0].clientY):(E=B.clientX,F=B.clientY),g.current.style.left=`${E}px`,g.current.style.top=`${F}px`}if(!Ce.current&&!we.current&&!be.current&&!Me.current&&!(M==="eraser"&&S.current))return;B.cancelable&&B.preventDefault();const G=Ke(B),Z=Rt(G);if((Ce.current||we.current||M==="eraser")&&!S.current&&(S.current=!0),M==="eraser"&&S.current)xt(Z);else if(we.current){const E=kt(G);E&&ie(E,P,!0)}else if(Ce.current){const E=Ue(G,l.width,l.height);E&&ie(E,P,!0)}else if(be.current){const E=Et(Z);E&&E.length>=2&&de({id:"live_drawing",type:"path",points:E,color:P,brushSize:z,opacity:N,brushStyle:q,lineType:O},null,O==="solid")}else if(Me.current&&Ge.current){const E=M.replace("shape_","");de(null,{type:E,start:Ge.current,end:Z,borderColor:W,borderOpacity:te,borderStyle:J,borderWidth:U,fillColor:V,fillOpacity:oe,lineCapStart:K,lineCapEnd:ne},!1)}},[l,Ce,we,be,Me,Ue,kt,de,ie,Et,M,P,z,D,Ge,W,te,J,U,V,oe,N,q,O,K,ne,xt]),Qe=m.useCallback(B=>{if(window.removeEventListener("mousemove",Ye),window.removeEventListener("mouseup",Qe),window.removeEventListener("touchmove",Ye),window.removeEventListener("touchend",Qe),S.current=!1,x.current=null,M==="eraser"&&h.current.size>0){const E=Array.from(h.current);L(Zn(E)),h.current.clear()}const G=Ke(B),Z=Rt(G);if(!p.current&&!be.current&&!Me.current&&re(),be.current){const E=Tt();E&&L(An({points:E,color:P,brushSize:z,opacity:N,brushStyle:q,lineType:O})),re()}if(Me.current&&Ge.current){const E=M.replace("shape_",""),F=It(Z,E);if(F){const A={type:"shape",shape:E,...F,borderColor:W,borderOpacity:te,borderWidth:U,borderStyle:J,color:W};E==="line"||E==="arrow"?(A.lineCapStart=K,A.lineCapEnd=ne):(A.fillColor=V,A.fillOpacity=oe),L(mt(A))}re()}if(Ce.current){const E=Pe();if(E)if(E.type==="path"){const F=parseInt(E.id.replace("path_",""));L(Se({index:F,updates:E}))}else L(Oe({id:E.id,updates:E}))}if(we.current){const E=Bt();if(E&&E.id)if(E.type==="path"){const F=parseInt(E.id.replace("path_",""));L(Se({index:F,updates:E}))}else L(Oe({id:E.id,updates:E}))}Ne("default")},[Ye,be,Me,Ge,Ce,we,M,Tt,It,Pe,Bt,L,P,z,W,te,U,J,V,oe,K,ne,Ne,re]),Pt=B=>{if(B.button!==void 0&&B.button!==0)return;window.addEventListener("mousemove",Ye),window.addEventListener("mouseup",Qe),window.addEventListener("touchmove",Ye,{passive:!1}),window.addEventListener("touchend",Qe);const G=Ke(B),Z=r.current;if(u){Gt();return}if(M==="cursor"){const E=X?X.startsWith("path_")?{...H[parseInt(X.replace("path_",""))],type:"path",id:X}:Y.find(A=>A.id===X):null;if(E){const A=le(E,Z);if(A){const Q=kn(G,E,Z);if(Q){En(Q,E,G,A);return}if(Bn(G,E,Z)){qe(E,G,Z);return}}}const F=xn(G.x,G.y,Y,H,z,Z);F?(p.current=F.id,L(Yt(F.id)),le(F,Z)&&qe(F,G,Z)):(p.current=null,L(je()))}else if(M==="drawing")Tn(G),de({id:"live_drawing",type:"path",points:[G],color:P,brushSize:z,opacity:N,brushStyle:q,lineType:O},null,!1);else if(M==="eraser")S.current=!0,x.current=G,xt(G);else if(M.startsWith("shape_"))In(G);else if(M.startsWith("figure_")){const E={player:"👤",goalkeeper:"🧤",coach:"🧠",referee:"⚖️",goal:"🥅",cone:"🟨"},F=M.replace("figure_","");L(mt({type:"figure",figureType:F,icon:E[F],x:G.x,y:G.y,size:30}))}else if(M==="ball")L(mt({type:"ball",x:G.x,y:G.y,radius:10}));else if(M==="text"){const E=`text_${Date.now()}_${Math.random()}`;f(!0),v(""),b(G),c.current=E,L(Yt(E)),p.current=E}},Gn=B=>{if(Ce.current||we.current||be.current||Me.current||S.current||B.touches)return;(M==="drawing"||M==="eraser")&&g.current&&(g.current.style.left=`${B.clientX}px`,g.current.style.top=`${B.clientY}px`);const G=Ke(B),Z=r.current;M==="cursor"&&Je(G,Y,H,p.current,z,Z)},Yn=()=>k(!0),Xn=()=>k(!1);m.useEffect(()=>{const B=()=>{const G=zt();a(G)};return B(),window.addEventListener("resize",B),()=>window.removeEventListener("resize",B)},[zt]),m.useEffect(()=>{const B=r.current,G=d.current,Z=i.current;B&&G&&Z&&(B.width=l.width,B.height=l.height,B.style.width=`${l.width}px`,B.style.height=`${l.height}px`,G.width=l.width,G.height=l.height,G.style.width=`${l.width}px`,G.style.height=`${l.height}px`,Z.style.width=`${l.width}px`,Z.style.height=`${l.height}px`,s.current||(L(Hn({canvasWidth:l.width,canvasHeight:l.height})),s.current=!0),ae(H,Y,M,P,z,X))},[l,L,ae,H,Y,X,M,P,z]),m.useEffect(()=>{if(S.current)return;const B=T.current,G=I.current,Z=R.current;let E=!1,F=null;if(X&&X===Z){if(X.startsWith("path_")){const A=parseInt(X.replace("path_",""));H[A]!==G[A]&&(E=!0,F={...H[A],type:"path",id:X})}else{const A=Y.find(xe=>xe.id===X),Q=B.find(xe=>xe.id===X);A!==Q&&(E=!0,F=A)}(Y.length!==B.length||H.length!==G.length)&&(E=!1)}if(E&&F)ie(F,P,!0);else if(ae(H,Y,M,P,z,X,h.current),X){let A=null;if(X.startsWith("path_")){const Q=parseInt(X.replace("path_",""));H[Q]&&(A={...H[Q],type:"path",id:X})}else A=Y.find(Q=>Q.id===X);A?ie(A,P,!0):re()}else re();T.current=Y,I.current=H,R.current=X},[H,Y,X,ae,ie,re,M,P,z]),m.useEffect(()=>{l.width>0&&l.height>0&&L(Wn({canvasWidth:l.width,canvasHeight:l.height}))},[l,L]),m.useEffect(()=>{if(u&&o.current&&d.current){const B=o.current;setTimeout(()=>{B.focus(),B.select()},0);const G=d.current,Z=G.getBoundingClientRect(),E=G.width/Z.width,F=G.height/Z.height,A=w.x/E,Q=w.y/F;B.style.left=`${A}px`,B.style.top=`${Q}px`,B.style.fontSize=`${_/F}px`,B.style.color=j,B.style.width="auto",B.style.height="auto"}},[u,w,j,_]),m.useEffect(()=>{const B=G=>{G.key==="Escape"&&!u&&(L(je()),p.current=null)};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[X,u,L]),m.useEffect(()=>{L(je()),p.current=null,M==="shape_arrow"&&L(pn("arrow"))},[M,L]);const Fn=B=>{v(B.target.value),o.current&&(o.current.style.height="auto",o.current.style.height=o.current.scrollHeight+"px")},Gt=()=>{const B=y.trim();B&&L(_n({id:c.current,x:w.x,y:w.y,text:B,fontSize:_,color:j})),f(!1),v(""),c.current=null,L(Ve("cursor"))},Dn=B=>{B.key==="Escape"&&(B.preventDefault(),f(!1),v(""),L(je()),p.current=null,L(Ve("cursor")))};return n.jsxs(qr,{children:[n.jsx(eo,{ref:g,size:M==="eraser"?D:z,color:P,$visible:(M==="drawing"||M==="eraser")&&$,isEraser:M==="eraser"}),n.jsxs(Ur,{ref:i,cursor:ut,$activeTool:M,onMouseEnter:Yn,onMouseLeave:Xn,children:[n.jsx(Jr,{ref:r}),n.jsx(Kr,{ref:d,onMouseDown:Pt,onTouchStart:Pt,onMouseMove:Gn}),u&&n.jsx(Qr,{ref:o,value:y,onChange:Fn,onBlur:Gt,onKeyDown:Dn,placeholder:"Введіть текст",rows:1})]})]})},no=e=>m.createElement("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32",xmlSpace:"preserve",...e},m.createElement("path",{className:"st0",d:"M20,29h-8c-2.2,0-4-1.8-4-4V7c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v18C24,27.2,22.2,29,20,29z"}),m.createElement("circle",{className:"st0",cx:16,cy:16,r:4}),m.createElement("line",{className:"st0",x1:8,y1:16,x2:24,y2:16}),m.createElement("rect",{x:13,y:3,className:"st0",width:6,height:4}),m.createElement("rect",{x:13,y:25,className:"st0",width:6,height:4})),ro=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),oo=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"})),io=e=>m.createElement("svg",{fill:"#000000",height:"800px",width:"800px",baseProfile:"tiny",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"-1117 883 256 256",xmlSpace:"preserve",...e},m.createElement("path",{d:"M-1016.4,1091.3l113.9-113.9c13.5-13.5,13.5-35.3,0-48.8l-32.5-32.5c-13.5-13.5-35.3-13.5-48.8,0l-113.9,113.9 c-13.5,13.5-13.5,35.3,0,48.8l32.5,32.5C-1051.7,1104.8-1029.9,1104.8-1016.4,1091.3z M-1057.1,1083.2l-32.5-32.5 c-9-9-9-23.6,0-32.5l67.6-68.1l65.1,65.1l-67.6,68.1c-4.3,4.3-10.1,6.7-16.3,6.7C-1046.9,1089.9-1052.7,1087.6-1057.1,1083.2z  M-954.3,1129.7c0,3.5-2.8,6.3-6.3,6.3h-89.3c-3.5,0-6.3-2.8-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3h89.3 C-957.1,1123.4-954.3,1126.2-954.3,1129.7z M-882.3,1129.7c0,3.4-2.9,6.3-6.3,6.3c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3 C-885.2,1123.4-882.3,1126.2-882.3,1129.7z M-907.5,1129.7c0,3.4-2.9,6.3-6.3,6.3c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3 C-910.4,1123.4-907.5,1126.2-907.5,1129.7z M-932.7,1129.7c0,3.4-2.9,6.3-6.3,6.3c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3 C-935.6,1123.4-932.7,1126.2-932.7,1129.7z M-944.5,1107.9c0,3.5-2.8,6.3-6.3,6.3h-51.1c-3.5,0-6.3-2.8-6.3-6.3 c0-3.5,2.8-6.3,6.3-6.3h51.1C-947.4,1101.6-944.5,1104.4-944.5,1107.9z M-894.9,1107.9c0,3.4-2.9,6.3-6.3,6.3 c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3C-897.8,1101.6-894.9,1104.4-894.9,1107.9z M-920.1,1107.9c0,3.4-2.9,6.3-6.3,6.3 c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3C-923,1101.6-920.1,1104.4-920.1,1107.9z M-869.6,1107.9c0,3.4-2.9,6.3-6.3,6.3 c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3C-872.6,1101.6-869.6,1104.4-869.6,1107.9z"})),ao=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("circle",{cx:12,cy:12,r:9,strokeWidth:2}),m.createElement("path",{d:"M18 18L6 6",strokeWidth:2})),$n=e=>m.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},m.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fillRule:"evenodd"},m.createElement("g",{id:"Arrow",transform:"translate(-528.000000, 0.000000)",fillRule:"nonzero"},m.createElement("g",{id:"forward_2_line",transform:"translate(528.000000, 0.000000)"},m.createElement("path",{d:"M17.954,11.6767 C16.6468,9.47493 14.2448,8 11.5,8 C7.35786,8 4,11.3579 4,15.5 C4,16.0523 3.55228,16.5 3,16.5 C2.44772,16.5 2,16.0523 2,15.5 C2,10.2533 6.25329,6 11.5,6 C14.6814,6 17.4961,7.56337 19.22,9.96279 L19.757,6.91751 C19.8529,6.37361 20.3715,6.01044 20.9154,6.10635 C21.4593,6.20225 21.8225,6.72091 21.7266,7.2648 L20.6847,13.1736 C20.6386,13.4348 20.4907,13.667 20.2735,13.8192 C19.9896,14.0179 19.6122,14.0542 19.2977,13.9445 L13.6174,12.9429 C13.0735,12.847 12.7103,12.3284 12.8062,11.7845 C12.9021,11.2406 13.4208,10.8774 13.9647,10.9733 L17.954,11.6767 Z",id:"\\u8DEF\\u5F84"}))))),so=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.93417 2C7.95604 2 7.97799 2 8 2L16.0658 2C16.9523 1.99995 17.7161 1.99991 18.3278 2.08215C18.9833 2.17028 19.6117 2.36902 20.1213 2.87868C20.631 3.38835 20.8297 4.0167 20.9179 4.67221C21.0001 5.28388 21.0001 6.0477 21 6.9342L21 7.95C21 8.50229 20.5523 8.95 20 8.95C19.4477 8.95 19 8.50229 19 7.95V7.00001C19 6.02893 18.9979 5.40122 18.9357 4.93871C18.8774 4.50497 18.7832 4.36902 18.7071 4.2929C18.631 4.21677 18.495 4.12263 18.0613 4.06431C17.5988 4.00213 16.9711 4 16 4H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V4H8C7.02893 4 6.40122 4.00213 5.93871 4.06431C5.50497 4.12263 5.36902 4.21677 5.2929 4.2929C5.21677 4.36902 5.12263 4.50497 5.06431 4.93871C5.00213 5.40122 5 6.02893 5 7.00001V7.95C5 8.50229 4.55229 8.95 4 8.95C3.44772 8.95 3 8.50229 3 7.95V7.00001C3 6.97799 3 6.95604 3 6.93418C2.99995 6.04769 2.99991 5.28387 3.08215 4.67221C3.17028 4.0167 3.36902 3.38835 3.87868 2.87868C4.38835 2.36902 5.0167 2.17028 5.67221 2.08215C6.28387 1.99991 7.04769 1.99995 7.93417 2Z"}),m.createElement("path",{d:"M7 21H17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Sn=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.51192 4.43057C6.82641 4.161 7.29989 4.19743 7.56946 4.51192L13.5695 11.5119C13.8102 11.7928 13.8102 12.2072 13.5695 12.4881L7.56946 19.4881C7.29989 19.8026 6.82641 19.839 6.51192 19.5695C6.19743 19.2999 6.161 18.8264 6.43057 18.5119L12.0122 12L6.43057 5.48811C6.161 5.17361 6.19743 4.70014 6.51192 4.43057ZM10.5121 4.43068C10.8266 4.16111 11.3001 4.19753 11.5697 4.51202L17.5697 11.512C17.8104 11.7929 17.8104 12.2073 17.5697 12.4882L11.5697 19.4882C11.3001 19.8027 10.8266 19.8391 10.5121 19.5696C10.1976 19.3 10.1612 18.8265 10.4308 18.512L16.0124 12.0001L10.4308 5.48821C10.1612 5.17372 10.1976 4.70024 10.5121 4.43068Z"})),lo=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("rect",{x:3,y:5,width:18,height:14,rx:2,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),co=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ho=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.0001 5.94363L4.76627 18H19.2339L12.0001 5.94363ZM10.7138 4.20006C11.2964 3.22905 12.7037 3.22905 13.2863 4.20006L21.4032 17.7282C22.0031 18.728 21.2829 20 20.117 20H3.88318C2.71724 20 1.99706 18.728 2.59694 17.7282L10.7138 4.20006Z"})),po=e=>m.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z"})),uo=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M6 12H18M18 12L13 7M18 12L13 17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),go=C.div`
  position: relative;
  display: inline-block;
`,xo=C.button`
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
`,fo=C.div`
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
`,mo=C.button`
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
`,Wt=C.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,yt=[{id:"rectangle",name:"Прямокутник",icon:n.jsx(lo,{}),style:{stroke:"currentColor",fill:"none"}},{id:"circle",name:"Коло",icon:n.jsx(co,{}),style:{stroke:"currentColor",fill:"none"}},{id:"triangle",name:"Трикутник",icon:n.jsx(ho,{}),style:{fill:"currentColor",stroke:"none"}},{id:"line",name:"Лінія",icon:n.jsx(po,{}),style:{fill:"currentColor",stroke:"none"}},{id:"arrow",name:"Стрілка",icon:n.jsx(uo,{}),style:{stroke:"currentColor",fill:"none"}}],yo=({activeTool:e,onSelectShape:t})=>{const[r,d]=m.useState(!1),[i,o]=m.useState({top:0,left:0}),s=m.useRef(null),c=m.useRef(null),p=e.startsWith("shape_"),g=p?e.replace("shape_",""):null,x=yt.find(y=>y.id===g),h=()=>{if(c.current){const y=c.current.getBoundingClientRect();o({top:y.bottom+window.scrollY,left:y.left+window.scrollX})}d(!r)},l=y=>{t(y),d(!1)},a=y=>{s.current&&!s.current.contains(y.target)&&d(!1)};m.useEffect(()=>(document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}),[]);const u=()=>{const y=x||yt[0];return n.jsx(Wt,{children:Xt.cloneElement(y.icon,y.style)})},f=y=>Xt.cloneElement(y.icon,y.style);return n.jsxs(go,{ref:s,children:[n.jsx(xo,{ref:c,title:"Геометричні фігури",onClick:h,active:p,children:u()}),n.jsx(fo,{isOpen:r,style:{top:i.top,left:i.left},children:yt.map(y=>n.jsx(mo,{onClick:()=>l(y),title:y.name,children:n.jsx(Wt,{children:f(y)})},y.id))})]})},Co=C.div`
  position: relative;
  display: inline-block;
`,wo=C.button`
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
`,bo=C.div`
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
`,Mo=C.button`
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
`,_t=[{id:"player",name:"Гравець",icon:"👤"},{id:"goalkeeper",name:"Воротар",icon:"🧤"},{id:"coach",name:"Тренер",icon:"🧠"},{id:"referee",name:"Суддя",icon:"⚖️"},{id:"goal",name:"Ворота",icon:"🥅"},{id:"cone",name:"Стійка",icon:"🟨"}],vo=({activeTool:e,onSelectFigure:t})=>{const[r,d]=m.useState(!1),[i,o]=m.useState({top:0,left:0}),s=m.useRef(null),c=m.useRef(null),p=e.startsWith("figure_"),g=p?e.replace("figure_",""):null,x=_t.find(f=>f.id===g),h=()=>{if(c.current){const f=c.current.getBoundingClientRect();o({top:f.bottom+window.scrollY,left:f.left+window.scrollX})}d(!r)},l=f=>{t(f),d(!1)},a=f=>{s.current&&!s.current.contains(f.target)&&d(!1)};m.useEffect(()=>(document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}),[]);const u=()=>x?x.icon:"👤";return n.jsxs(Co,{ref:s,children:[n.jsx(wo,{ref:c,title:"Спортивні фігури",onClick:h,active:p,children:u()}),n.jsx(bo,{isOpen:r,style:{top:i.top,left:i.left},children:_t.map(f=>n.jsx(Mo,{onClick:()=>l(f),title:f.name,children:f.icon},f.id))})]})},jt=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M9.19762 11.9582L9.91426 11.737L9.19762 11.9582ZM9.54558 10.8683L9.08995 10.2726L9.54558 10.8683ZM9.91896 14.2952L9.20232 14.5164L9.91896 14.2952ZM14.0579 14.2952L13.3413 14.074L14.0579 14.2952ZM14.4313 10.8683L13.9757 11.4641V11.4641L14.4313 10.8683ZM14.7793 11.9582L15.4959 12.1794L14.7793 11.9582ZM12.5948 9.46375L13.0504 8.86802L12.5948 9.46375ZM11.3821 9.46375L11.8377 10.0595L11.3821 9.46375ZM20.1847 17.75C20.5989 17.75 20.9347 17.4142 20.9347 17C20.9347 16.5858 20.5989 16.25 20.1847 16.25V17.75ZM14.7793 19.7351L14.0677 19.4982L14.7793 19.7351ZM13.4801 21.2631C13.3492 21.6561 13.5617 22.0807 13.9547 22.2116C14.3477 22.3424 14.7724 22.1299 14.9033 21.7369L13.4801 21.2631ZM3.99769 16.25C3.58348 16.25 3.24769 16.5858 3.24769 17C3.24769 17.4142 3.58348 17.75 3.99769 17.75V16.25ZM9.40314 19.7351L10.1147 19.4982L9.40314 19.7351ZM9.27917 21.7369C9.41002 22.1299 9.83469 22.3424 10.2277 22.2116C10.6207 22.0807 10.8332 21.6561 10.7024 21.2631L9.27917 21.7369ZM8.22071 17.3775L7.78185 17.9857L8.22071 17.3775ZM5.556 5.45942C5.4489 5.05928 5.03772 4.82173 4.63759 4.92882C4.23746 5.03591 3.9999 5.44709 4.10699 5.84723L5.556 5.45942ZM5.24951 7.21519L4.52501 7.40909V7.40909L5.24951 7.21519ZM3.59168 11.5885L3.17811 10.9628L3.17811 10.9628L3.59168 11.5885ZM1.62739 11.9879C1.28185 12.2163 1.18689 12.6816 1.4153 13.0271C1.64372 13.3727 2.109 13.4676 2.45454 13.2392L1.62739 11.9879ZM19.934 5.84732C20.0411 5.44719 19.8035 5.036 19.4034 4.92891C19.0033 4.82182 18.5921 5.05938 18.485 5.45951L19.934 5.84732ZM18.7915 7.21528L18.067 7.02137L18.7915 7.21528ZM20.4493 11.5886L20.0357 12.2143L20.4493 11.5886ZM21.5864 13.2393C21.932 13.4677 22.3973 13.3728 22.6257 13.0272C22.8541 12.6817 22.7591 12.2164 22.4136 11.988L21.5864 13.2393ZM16.0903 3.83623C16.4288 3.5975 16.5096 3.12956 16.2709 2.79107C16.0322 2.45257 15.5642 2.3717 15.2257 2.61044L16.0903 3.83623ZM14.3376 4.15456L14.7699 4.76746L14.3376 4.15456ZM9.66562 4.10403L9.22021 4.70744V4.70744L9.66562 4.10403ZM8.61539 2.39659C8.28213 2.15059 7.81255 2.22133 7.56656 2.55459C7.32056 2.88784 7.3913 3.35742 7.72456 3.60341L8.61539 2.39659ZM14.7793 11.3678L14.0627 11.589L14.7793 11.3678ZM9.19762 11.3678L9.91426 11.589L9.19762 11.3678ZM21.2269 12C21.2269 17.1095 17.0899 21.25 11.9885 21.25V22.75C17.92 22.75 22.7269 17.9362 22.7269 12H21.2269ZM11.9885 21.25C6.88701 21.25 2.75 17.1095 2.75 12H1.25C1.25 17.9362 6.05695 22.75 11.9885 22.75V21.25ZM2.75 12C2.75 6.89055 6.88701 2.75 11.9885 2.75V1.25C6.05695 1.25 1.25 6.06376 1.25 12H2.75ZM11.9885 2.75C17.0899 2.75 21.2269 6.89055 21.2269 12H22.7269C22.7269 6.06376 17.92 1.25 11.9885 1.25V2.75ZM12.1392 10.0595L13.9757 11.4641L14.887 10.2726L13.0504 8.86802L12.1392 10.0595ZM14.0626 11.737L13.3413 14.074L14.7746 14.5164L15.4959 12.1794L14.0626 11.737ZM13.1036 14.25H10.8733V15.75H13.1036V14.25ZM10.6356 14.074L9.91426 11.737L8.48098 12.1794L9.20232 14.5164L10.6356 14.074ZM10.0012 11.4641L11.8377 10.0595L10.9265 8.86802L9.08995 10.2726L10.0012 11.4641ZM20.1847 16.25H18.5696V17.75H20.1847V16.25ZM14.0677 19.4982L13.4801 21.2631L14.9033 21.7369L15.4909 19.972L14.0677 19.4982ZM18.5696 16.25C17.892 16.25 17.3207 16.2489 16.8555 16.302C16.3711 16.3574 15.9264 16.4781 15.5228 16.7693L16.4006 17.9857C16.5201 17.8994 16.6846 17.8313 17.0258 17.7923C17.3863 17.7511 17.8574 17.75 18.5696 17.75V16.25ZM15.4909 19.972C15.7161 19.2956 15.8662 18.8484 16.0193 18.5189C16.1643 18.2069 16.2809 18.072 16.4006 17.9857L15.5228 16.7693C15.1193 17.0605 14.8645 17.4444 14.659 17.8868C14.4615 18.3117 14.282 18.8545 14.0677 19.4982L15.4909 19.972ZM3.99769 17.75H5.61279V16.25H3.99769V17.75ZM8.69154 19.972L9.27917 21.7369L10.7024 21.2631L10.1147 19.4982L8.69154 19.972ZM5.61279 17.75C6.325 17.75 6.79611 17.7511 7.15658 17.7923C7.49784 17.8313 7.66228 17.8994 7.78185 17.9857L8.65958 16.7693C8.25598 16.4781 7.81137 16.3574 7.32692 16.302C6.86168 16.2489 6.29041 16.25 5.61279 16.25V17.75ZM10.1147 19.4982C9.90043 18.8545 9.7209 18.3117 9.52346 17.8868C9.31791 17.4445 9.06311 17.0605 8.65958 16.7693L7.78185 17.9857C7.90148 18.072 8.01815 18.2069 8.16314 18.5189C8.31624 18.8484 8.46634 19.2956 8.69154 19.972L10.1147 19.4982ZM4.10699 5.84723L4.52501 7.40909L5.97401 7.02128L5.556 5.45942L4.10699 5.84723ZM3.17811 10.9628L1.62739 11.9879L2.45454 13.2392L4.00526 12.2142L3.17811 10.9628ZM4.52501 7.40909C4.70933 8.09777 4.83021 8.55381 4.88378 8.91324C4.93452 9.25362 4.9114 9.43069 4.85896 9.56902L6.26156 10.1007C6.43795 9.63541 6.43932 9.17465 6.3674 8.69211C6.29831 8.22862 6.14941 7.67663 5.97401 7.02128L4.52501 7.40909ZM4.00526 12.2142C4.57077 11.8404 5.04807 11.5262 5.407 11.2252C5.78074 10.9119 6.08516 10.5661 6.26156 10.1007L4.85896 9.56902C4.80654 9.70729 4.70659 9.855 4.44321 10.0759C4.16501 10.3091 3.77244 10.57 3.17811 10.9628L4.00526 12.2142ZM18.485 5.45951L18.067 7.02137L19.516 7.40918L19.934 5.84732L18.485 5.45951ZM20.0357 12.2143L21.5864 13.2393L22.4136 11.988L20.8629 10.9629L20.0357 12.2143ZM18.067 7.02137C17.8916 7.67672 17.7427 8.22871 17.6736 8.6922C17.6017 9.17474 17.603 9.6355 17.7794 10.1008L19.182 9.56911C19.1296 9.43078 19.1065 9.25372 19.1572 8.91333C19.2108 8.5539 19.3316 8.09787 19.516 7.40918L18.067 7.02137ZM20.8629 10.9629C20.2685 10.5701 19.876 10.3092 19.5978 10.0759C19.3344 9.85509 19.2344 9.70739 19.182 9.56911L17.7794 10.1008C17.9558 10.5662 18.2602 10.912 18.634 11.2253C18.9929 11.5263 19.4702 11.8405 20.0357 12.2143L20.8629 10.9629ZM15.2257 2.61044L13.9054 3.54166L14.7699 4.76746L16.0903 3.83623L15.2257 2.61044ZM10.111 3.50061L8.61539 2.39659L7.72456 3.60341L9.22021 4.70744L10.111 3.50061ZM13.9054 3.54166C13.3231 3.9523 12.9373 4.22303 12.6189 4.39721C12.3174 4.56214 12.1438 4.60125 11.9966 4.59965L11.9803 6.09957C12.478 6.10495 12.9109 5.94721 13.3387 5.7132C13.7496 5.48845 14.2159 5.15817 14.7699 4.76746L13.9054 3.54166ZM9.22021 4.70744C9.76562 5.11004 10.2247 5.45033 10.6306 5.68391C11.0533 5.92712 11.4827 6.09418 11.9803 6.09957L11.9966 4.59965C11.8494 4.59806 11.6767 4.5552 11.3788 4.38379C11.0642 4.20276 10.6843 3.92375 10.111 3.50061L9.22021 4.70744ZM13.9757 11.4641C14.0179 11.4963 14.0475 11.5399 14.0627 11.589L15.4959 11.1465C15.3911 10.807 15.1828 10.4989 14.887 10.2726L13.9757 11.4641ZM14.0627 11.589C14.0773 11.6364 14.0779 11.6876 14.0626 11.737L15.4959 12.1794C15.6023 11.8349 15.5974 11.4754 15.4959 11.1465L14.0627 11.589ZM18.1938 9.14203L14.4923 10.6748L15.0662 12.0607L18.7677 10.5279L18.1938 9.14203ZM13.0504 8.86802C12.7371 8.62838 12.3624 8.50841 11.9885 8.50841V10.0084C12.0419 10.0084 12.0945 10.0253 12.1392 10.0595L13.0504 8.86802ZM11.9885 8.50841C11.6146 8.50841 11.2398 8.62838 10.9265 8.86802L11.8377 10.0595C11.8824 10.0253 11.935 10.0084 11.9885 10.0084V8.50841ZM12.7385 9.25841V5.34961H11.2385V9.25841H12.7385ZM13.3413 14.074C13.3259 14.1241 13.2962 14.166 13.2572 14.1967L14.1852 15.3752C14.4575 15.1608 14.6671 14.8646 14.7746 14.5164L13.3413 14.074ZM13.2572 14.1967C13.214 14.2308 13.1607 14.25 13.1036 14.25V15.75C13.5063 15.75 13.8846 15.6119 14.1852 15.3752L13.2572 14.1967ZM16.5291 16.887L14.2886 14.2954L13.1538 15.2765L15.3944 17.868L16.5291 16.887ZM10.8733 14.25C10.8162 14.25 10.7629 14.2308 10.7197 14.1967L9.79172 15.3752C10.0923 15.6119 10.4706 15.75 10.8733 15.75V14.25ZM10.7197 14.1967C10.6807 14.166 10.651 14.1241 10.6356 14.074L9.20232 14.5164C9.3098 14.8646 9.51943 15.1608 9.79172 15.3752L10.7197 14.1967ZM8.81059 17.8407L10.8456 15.2492L9.66584 14.3228L7.63084 16.9143L8.81059 17.8407ZM9.91426 11.737C9.89899 11.6876 9.89961 11.6364 9.91426 11.589L8.48099 11.1465C8.37949 11.4754 8.37465 11.8349 8.48098 12.1794L9.91426 11.737ZM9.91426 11.589C9.9294 11.5399 9.95905 11.4963 10.0012 11.4641L9.08995 10.2726C8.79412 10.4989 8.58579 10.807 8.48099 11.1465L9.91426 11.589ZM9.48889 10.6766L5.85153 9.14373L5.269 10.526L8.90636 12.0589L9.48889 10.6766Z"})),Lo=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5262 17.4999C18.4887 22.7611 11.7612 24.5637 6.49994 21.5262C1.23873 18.4886 -0.563901 11.7611 2.47367 6.49988C5.51123 1.23866 12.2387 -0.563962 17.4999 2.4736C22.7612 5.51117 24.5638 12.2387 21.5262 17.4999ZM5.84382 7.87995C5.25279 7.64272 4.74291 7.45257 4.3292 7.30543C5.59153 5.24057 7.56267 3.85898 9.74648 3.29362C9.77176 3.62621 9.82851 4.00289 9.93722 4.40861C10.3269 5.86297 11.3579 7.58777 13.75 8.96886C14.0666 9.15165 14.3765 9.31079 14.6793 9.44842C14.4757 10.219 14.1794 11.0351 13.7614 11.8848C13.3566 11.6365 12.936 11.3857 12.5 11.1339C9.85449 9.60655 7.52076 8.55305 5.84382 7.87995ZM12.7587 13.6161C12.3555 13.3682 11.9358 13.1176 11.5 12.866C8.94938 11.3934 6.70297 10.3799 5.09882 9.73602C4.44209 9.47241 3.89359 9.27099 3.47664 9.12556C2.8887 10.8629 2.86217 12.7007 3.33339 14.4015C3.63406 14.2571 3.98864 14.1179 4.39435 14.0092C5.84872 13.6195 7.85792 13.65 10.25 15.0311C10.5667 15.2139 10.8594 15.4027 11.13 15.5961C11.6875 15.0424 12.2384 14.3885 12.7587 13.6161ZM12.6204 16.9341C13.4037 17.8315 13.839 18.756 14.0628 19.5913C14.1715 19.997 14.2283 20.3736 14.2536 20.7061C15.962 20.2638 17.5403 19.3219 18.7509 17.9441C18.4164 17.6557 17.9678 17.2815 17.4112 16.8446C16.6284 16.2301 15.633 15.4925 14.4426 14.6962C13.8639 15.5605 13.2482 16.3006 12.6204 16.9341ZM9.52737 16.9296C9.43788 16.8737 9.34548 16.8182 9.25005 16.7631C7.31205 15.6442 5.84818 15.6902 4.91199 15.9411C4.58 16.03 4.30141 16.1484 4.0805 16.2639C4.53358 17.1073 5.12461 17.8846 5.84359 18.5583C5.87614 18.5513 5.90977 18.5439 5.94444 18.5361C6.44532 18.4223 7.15871 18.2112 7.97658 17.8245C8.4626 17.5947 8.98712 17.3022 9.52737 16.9296ZM7.92672 20.018C8.21347 19.909 8.51642 19.7815 8.83145 19.6326C9.54844 19.2936 10.3256 18.8442 11.1145 18.2503C11.6989 18.9202 11.9873 19.5728 12.131 20.109C12.2199 20.4409 12.2567 20.7413 12.2672 20.9903C10.8031 21.0352 9.31171 20.7231 7.92672 20.018ZM18.6461 15.2714C17.8061 14.612 16.7364 13.8204 15.4558 12.968C15.9672 11.9634 16.3317 10.9922 16.5833 10.0701C17.7521 10.2998 18.7704 10.2145 19.6057 9.99072C20.0114 9.88202 20.3659 9.74284 20.6666 9.59846C21.2688 11.7723 21.0579 14.1701 19.9008 16.2957C19.5666 16.011 19.147 15.6645 18.6461 15.2714ZM16.9702 8.10789C17.8425 8.27902 18.5519 8.20254 19.0881 8.05887C19.42 7.96992 19.6986 7.85154 19.9195 7.73607C19.2263 6.44565 18.2102 5.3101 16.907 4.46319C16.956 4.76614 16.9971 5.09234 17.0257 5.43977C17.0906 6.23015 17.09 7.1278 16.9702 8.10789ZM15.0328 7.39372C15.0854 6.73963 15.0764 6.13922 15.0324 5.60348C14.9583 4.70183 14.7845 3.97847 14.6326 3.4878C14.622 3.45374 14.6116 3.42082 14.6013 3.38905C13.6584 3.10331 12.6898 2.9801 11.7329 3.00943C11.7433 3.2585 11.7801 3.55897 11.8691 3.89097C12.1199 4.82716 12.812 6.11791 14.75 7.23681C14.8454 7.2919 14.9397 7.34416 15.0328 7.39372Z"})),$o=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M11.5697 12.5532L12.1617 13.0137V13.0137L11.5697 12.5532ZM11.3142 3.64586L12.0065 3.93432V3.93432L11.3142 3.64586ZM18.555 14.5045C18.8336 14.198 18.811 13.7237 18.5045 13.445C18.198 13.1664 17.7237 13.189 17.445 13.4955L18.555 14.5045ZM17.7087 14.3204L17.1538 13.8159L17.1538 13.8159L17.7087 14.3204ZM21.2426 10.7426L21.7773 10.2166L21.773 10.2123L21.2426 10.7426ZM21.4531 12.026C21.7436 12.3213 22.2184 12.3251 22.5137 12.0346C22.809 11.7442 22.8129 11.2693 22.5224 10.974L21.4531 12.026ZM5.7327 19.0428C5.31848 19.0428 4.9827 19.3786 4.9827 19.7928C4.9827 20.207 5.31848 20.5428 5.7327 20.5428V19.0428ZM3.5 15.75C3.08579 15.75 2.75 16.0858 2.75 16.5C2.75 16.9142 3.08579 17.25 3.5 17.25V15.75ZM8.19231 3.35575C8.35162 2.9734 8.17081 2.5343 7.78846 2.37498C7.40611 2.21567 6.96701 2.39648 6.80769 2.77883L8.19231 3.35575ZM6.80769 15.2885C6.96701 15.6708 7.40611 15.8516 7.78846 15.6923C8.17081 15.533 8.35162 15.0939 8.19231 14.7115L6.80769 15.2885ZM11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5C10.25 6.91421 10.5858 7.25 11 7.25V5.75ZM19.876 16.916C20.1057 17.2607 20.5714 17.3538 20.916 17.124C21.2607 16.8943 21.3538 16.4286 21.124 16.084L19.876 16.916ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75C2.75 6.89137 6.89137 2.75 12 2.75V1.25ZM12 12.75H12.0917V11.25H12V12.75ZM11.408 11.5395L10.9777 12.0928L12.1617 13.0137L12.592 12.4605L11.408 11.5395ZM11.3077 1.71154L10.6219 3.35739L12.0065 3.93432L12.6923 2.28846L11.3077 1.71154ZM17.445 13.4955L17.1538 13.8159L18.2637 14.8249L18.555 14.5045L17.445 13.4955ZM20.708 11.2686L21.4531 12.026L22.5224 10.974L21.7773 10.2167L20.708 11.2686ZM17.1538 13.8159C14.2838 16.9729 9.96086 19.0428 5.7327 19.0428V20.5428C10.4211 20.5428 15.1357 18.2657 18.2637 14.8249L17.1538 13.8159ZM10.6219 3.35739C9.39039 6.31308 9.66695 9.68222 11.364 12.3975L12.636 11.6025C11.1965 9.29929 10.9619 6.44145 12.0065 3.93432L10.6219 3.35739ZM10.9777 12.0928C9.18293 14.4003 6.42334 15.75 3.5 15.75V17.25C6.88622 17.25 10.0828 15.6866 12.1617 13.0137L10.9777 12.0928ZM6.80769 2.77883C5.13077 6.80344 5.13077 11.2638 6.80769 15.2885L8.19231 14.7115C6.66923 11.0562 6.66923 7.01114 8.19231 3.35575L6.80769 2.77883ZM11 7.25C14.6428 7.25 18.1364 8.6971 20.7123 11.273L21.773 10.2123C18.9158 7.35514 15.0406 5.75 11 5.75V7.25ZM12.0917 12.75C15.2197 12.75 18.1408 14.3133 19.876 16.916L21.124 16.084C19.1107 13.064 15.7213 11.25 12.0917 11.25V12.75Z"})),So=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.9386 4.73542C13.3511 4.69785 13.716 5.0018 13.7535 5.4143C13.8024 5.95058 13.893 6.53361 14.045 7.14711C14.1447 7.54916 13.8995 7.95586 13.4974 8.05549C13.0954 8.15512 12.6887 7.90997 12.5891 7.50791C12.4172 6.81421 12.3148 6.15558 12.2597 5.55036C12.2221 5.13785 12.5261 4.77299 12.9386 4.73542ZM5.23942 9.18054C5.47821 8.84208 5.94616 8.76129 6.28461 9.00008C6.78119 9.35043 7.30041 9.76836 7.81522 10.2641C8.1136 10.5514 8.12256 11.0262 7.83525 11.3246C7.54794 11.6229 7.07315 11.6319 6.77478 11.3446C6.31949 10.9062 5.85988 10.5362 5.41988 10.2257C5.08142 9.98694 5.00063 9.51899 5.23942 9.18054ZM13.836 8.99599C14.2094 8.81661 14.6574 8.97385 14.8368 9.3472C14.9605 9.60468 15.097 9.86417 15.2474 10.1247C15.3979 10.3852 15.5543 10.6332 15.7155 10.869C15.9491 11.2111 15.8612 11.6778 15.5192 11.9114C15.1772 12.145 14.7105 12.0572 14.4769 11.7151C14.2947 11.4485 14.118 11.1685 13.9484 10.8747C13.7788 10.5809 13.6246 10.2879 13.4848 9.99681C13.3054 9.62346 13.4627 9.17538 13.836 8.99599ZM8.48046 12.088C8.82249 11.8544 9.28917 11.9422 9.52281 12.2843C9.70496 12.5509 9.88164 12.8309 10.0513 13.1247C10.2209 13.4185 10.375 13.7115 10.5149 14.0026C10.6943 14.3759 10.537 14.824 10.1637 15.0034C9.79032 15.1828 9.34223 15.0256 9.16285 14.6522C9.03914 14.3947 8.90267 14.1352 8.75225 13.8747C8.60182 13.6142 8.44534 13.3662 8.28421 13.1304C8.05057 12.7883 8.13843 12.3217 8.48046 12.088ZM16.1644 12.6748C16.4517 12.3765 16.9265 12.3675 17.2249 12.6548C17.6802 13.0932 18.1398 13.4632 18.5798 13.7737C18.9183 14.0125 18.9991 14.4804 18.7603 14.8189C18.5215 15.1573 18.0535 15.2381 17.7151 14.9993C17.2185 14.649 16.6993 14.2311 16.1845 13.7353C15.8861 13.448 15.8771 12.9732 16.1644 12.6748ZM10.5022 15.9439C10.9043 15.8443 11.311 16.0894 11.4106 16.4915C11.5825 17.1852 11.6849 17.8438 11.74 18.4491C11.7776 18.8616 11.4736 19.2264 11.0611 19.264C10.6486 19.3016 10.2837 18.9976 10.2462 18.5851C10.1973 18.0488 10.1067 17.4658 9.95466 16.8523C9.85502 16.4502 10.1002 16.0436 10.5022 15.9439Z"}),m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2859 1.32632C11.0551 1.05591 8.71992 1.48034 6.62484 2.68993C1.4832 5.65846 -0.278462 12.2331 2.69007 17.3747C5.6586 22.5164 12.2332 24.278 17.3748 21.3095C19.4699 20.0999 21.0051 18.2898 21.8863 16.2227C23.1661 13.2206 23.0684 9.67094 21.3096 6.62471C19.5509 3.57847 16.5256 1.71902 13.2859 1.32632ZM13.7802 3.08033C13.7309 3.49161 13.3576 3.7851 12.9463 3.73585C12.5351 3.68661 12.2416 3.31329 12.2908 2.90201C12.297 2.85081 12.3032 2.8013 12.3096 2.75354C10.638 2.6958 8.93097 3.09054 7.37484 3.98897C5.81951 4.88694 4.62362 6.16839 3.83764 7.64494C3.88216 7.66328 3.92814 7.68258 3.97552 7.70286C4.35631 7.86585 4.53288 8.30668 4.36989 8.68748C4.20689 9.06827 3.76606 9.24484 3.38527 9.08184C3.33556 9.06057 3.2878 9.04062 3.24212 9.02195C2.41524 11.457 2.60225 14.2226 3.98911 16.6247C5.37596 19.0268 7.67752 20.5716 10.1998 21.073C10.2065 21.0241 10.2131 20.9728 10.2195 20.9191C10.2687 20.5078 10.6421 20.2143 11.0533 20.2636C11.4646 20.3128 11.7581 20.6861 11.7089 21.0974C11.7027 21.1486 11.6965 21.198 11.6901 21.2458C13.3618 21.3034 15.0695 20.9084 16.6248 20.0104C18.181 19.112 19.3764 17.831 20.1621 16.3545C20.1176 16.3362 20.0716 16.3168 20.0242 16.2966C19.6434 16.1336 19.4668 15.6927 19.6298 15.3119C19.7928 14.9311 20.2336 14.7546 20.6144 14.9176C20.6641 14.9388 20.7119 14.9588 20.7576 14.9775C21.5849 12.5411 21.3972 9.77639 20.0106 7.37471C18.624 4.97302 16.3236 3.42808 13.7999 2.92639C13.7932 2.97529 13.7866 3.02664 13.7802 3.08033Z"})),ko=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.1665 2.75836L21.2416 8.83351C21.2677 7.81177 21.2303 6.84352 21.1649 5.98862C21.0341 4.27797 19.722 2.96586 18.0114 2.83507C17.1565 2.76971 16.1882 2.7323 15.1665 2.75836ZM21.1071 10.8203L13.1797 2.89285C10.483 3.1978 7.77958 4.04236 5.91097 5.91097C4.04236 7.77958 3.1978 10.483 2.89285 13.1797L10.8203 21.1071C13.517 20.8022 16.2204 19.9576 18.089 18.089C19.9576 16.2204 20.8022 13.517 21.1071 10.8203ZM8.83351 21.2416L2.75836 15.1665C2.7323 16.1882 2.76971 17.1565 2.83507 18.0114C2.96587 19.722 4.27797 21.0341 5.98861 21.1649C6.84352 21.2303 7.81177 21.2677 8.83351 21.2416ZM13.3854 1.36321C15.1096 1.19733 16.7638 1.2353 18.1257 1.33944C20.5746 1.52667 22.4733 3.4254 22.6606 5.87426C22.7647 7.23618 22.8027 8.89045 22.6368 10.6146C22.3524 13.5707 21.4579 16.8414 19.1497 19.1497C16.8414 21.4579 13.5707 22.3524 10.6146 22.6368C8.89045 22.8027 7.23618 22.7647 5.87426 22.6606C3.4254 22.4733 1.52667 20.5746 1.33944 18.1257C1.2353 16.7638 1.19733 15.1096 1.36321 13.3854C1.6476 10.4293 2.54206 7.15857 4.85031 4.85031C7.15857 2.54206 10.4293 1.6476 13.3854 1.36321ZM11.9426 8.1601C12.2355 7.86721 12.7104 7.86721 13.0032 8.1601L13.8914 9.0482L14.7795 8.1601C15.0723 7.86721 15.5472 7.86721 15.8401 8.1601C16.133 8.45299 16.133 8.92787 15.8401 9.22076L14.952 10.1089L15.8401 10.997C16.133 11.2899 16.133 11.7647 15.8401 12.0576C15.5472 12.3505 15.0723 12.3505 14.7795 12.0576L13.8914 11.1695L13.0608 12.0001L13.9489 12.8882C14.2418 13.1811 14.2418 13.656 13.9489 13.9489C13.656 14.2418 13.1811 14.2418 12.8882 13.9489L12.0001 13.0608L11.1695 13.8914L12.0576 14.7795C12.3505 15.0723 12.3505 15.5472 12.0576 15.8401C11.7647 16.133 11.2899 16.133 10.997 15.8401L10.1089 14.952L9.22076 15.8401C8.92787 16.133 8.45299 16.133 8.1601 15.8401C7.86721 15.5472 7.86721 15.0723 8.1601 14.7795L9.0482 13.8914L8.1601 13.0032C7.86721 12.7104 7.86721 12.2355 8.1601 11.9426C8.45299 11.6497 8.92787 11.6497 9.22076 11.9426L10.1089 12.8307L10.9394 12.0001L10.0513 11.112C9.75845 10.8191 9.75845 10.3442 10.0513 10.0513C10.3442 9.75845 10.8191 9.75845 11.112 10.0513L12.0001 10.9394L12.8307 10.1089L11.9426 9.22076C11.6497 8.92787 11.6497 8.45299 11.9426 8.1601Z"})),Bo=e=>m.createElement("svg",{fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 32 32","data-name":"Layer 1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("rect",{height:1,transform:"translate(20 51) rotate(180)",width:16,x:2,y:25}),m.createElement("rect",{height:1,transform:"translate(26 59) rotate(180)",width:16,x:5,y:29}),m.createElement("rect",{height:1,transform:"translate(39 -8) rotate(90)",width:19,x:14,y:15}),m.createElement("rect",{height:1,transform:"translate(21 10) rotate(90)",width:19,x:-4,y:15}),m.createElement("path",{d:"M24,25H23v2a2,2,0,0,1-2,2H20v1h1a3,3,0,0,0,3-3Z"}),m.createElement("path",{d:"M17,26h1v1a2,2,0,0,0,2,2h1v1H20a3,3,0,0,1-3-3Z"}),m.createElement("path",{d:"M2,26H3v1a2,2,0,0,0,2,2H6v1H5a3,3,0,0,1-3-3Z"}),m.createElement("rect",{height:1,width:6,x:24,y:6}),m.createElement("rect",{height:1,width:19,x:8,y:2}),m.createElement("path",{d:"M5,6H6V5A2,2,0,0,1,8,3H9V2H8A3,3,0,0,0,5,5Z"}),m.createElement("path",{d:"M23,6h1V5a2,2,0,0,1,2-2h1V2H26a3,3,0,0,0-3,3Z"}),m.createElement("path",{d:"M30,6H29V5a2,2,0,0,0-2-2H26V2h1a3,3,0,0,1,3,3Z"})),Eo=C.div`
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
`,To=C.div`
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
`,Io=C.div`
  padding: 20px 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 2px solid ${({theme:e})=>e.mainBGColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme:e})=>e.ContainerBGColor};
`,zo=C.h2`
  margin: 0;
  font-size: 24px;
  color: ${({theme:e})=>e.textBlack};
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Ro=C.button`
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
`,Po=C.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`,Go=C.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  @media (max-width: 768px) {
    gap: 6px;
  }
`,Yo=C.button`
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
`,Xo=C.div`
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
`,Fo=C.div`
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
`,Do=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
`,Zo=C.div`
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
`,Ao=C.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.textBlack};
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,Ho=C.div`
  font-size: 13px;
  color: ${({theme:e})=>e.textGray};
  line-height: 1.5;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,Wo=C.div`
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
`,_o=C.div`
  position: relative;
  width: ${e=>{const d=e.fieldWidth,i=e.fieldHeight,o=100/d,s=80/i,c=Math.min(o,s);return`${d*c}px`}};
  height: ${e=>{const d=e.fieldWidth,i=e.fieldHeight,o=100/d,s=80/i,c=Math.min(o,s);return`${i*c}px`}};
  background: ${({theme:e})=>e.greenMain};
  border: 2px solid ${({theme:e})=>e.darkGreen};
  border-radius: 2px;
  
  /* Гарантуємо мінімальний розмір для дуже малих полів */
  min-width: 20px;
  min-height: 20px;
`,Vt=C.div`
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
`,jo={FOOTBALL:[{id:"football_standard",name:"Стандартне поле",width:105,height:68},{id:"football_small",name:"Мале поле",width:90,height:45},{id:"football_futsal",name:"Футзал",width:40,height:20}],BASKETBALL:[{id:"basketball_nba",name:"NBA",width:28.65,height:15.24},{id:"basketball_fiba",name:"FIBA",width:28,height:15}],VOLLEYBALL:[{id:"volleyball_indoor",name:"Закритий майданчик",width:18,height:9},{id:"volleyball_beach",name:"Пляжний майданчик",width:16,height:8}],TENNIS:[{id:"tennis_singles",name:"Одиночний розряд",width:23.77,height:8.23},{id:"tennis_doubles",name:"Парний розряд",width:23.77,height:10.97}],RUGBY:[{id:"rugby_standard",name:"Регбі (15 гравців)",width:100,height:70},{id:"rugby_sevens",name:"Регбі-7",width:94,height:68}],HANDBALL:[{id:"handball_standard",name:"Гандбол",width:40,height:20}],SHEET:[{id:"a4_portrait",name:"A4 Портрет",width:21,height:29.7},{id:"a4_landscape",name:"A4 Ландшафт",width:29.7,height:21},{id:"a3_portrait",name:"A3 Портрет",width:29.7,height:42},{id:"a3_landscape",name:"A3 Ландшафт",width:42,height:29.7},{id:"a3_landscape1",name:"A3 Ландшафт",width:600,height:29.7},{id:"a3_landscape2",name:"A3 Ландшафт",width:2,height:529.7}]},Vo=[{id:"FOOTBALL",name:"Футбол",icon:jt},{id:"RUGBY",name:"Регбі",icon:ko},{id:"BASKETBALL",name:"Баскетбол",icon:Lo},{id:"VOLLEYBALL",name:"Волейбол",icon:$o},{id:"TENNIS",name:"Теніс",icon:So},{id:"HANDBALL",name:"Гандбол",icon:jt},{id:"SHEET",name:"Аркуш",icon:Bo}],Oo=({isOpen:e,onClose:t,onSelectField:r,currentFieldId:d})=>{var l;const[i,o]=m.useState("FOOTBALL"),[s,c]=m.useState(d);if(!e)return null;const p=a=>{c(a.id),r(a),setTimeout(()=>t(),300)},g=a=>{a.target===a.currentTarget&&t()},x=(a,u)=>u==="SHEET"?`${a.width}см × ${a.height}см`:`${a.width}м × ${a.height}м`,h=(a,u)=>u==="SHEET"?`${a}см`:`${a}м`;return n.jsx(Eo,{onClick:g,children:n.jsxs(To,{children:[n.jsxs(Io,{children:[n.jsx(zo,{children:"Обрати спортивне поле"}),n.jsx(Ro,{onClick:t,children:n.jsx(jn,{})})]}),n.jsxs(Po,{children:[n.jsx(Go,{children:Vo.map(a=>{const u=a.icon;return n.jsxs(Yo,{active:i===a.id,onClick:()=>o(a.id),children:[n.jsx(Xo,{children:n.jsx(u,{})}),a.name]},a.id)})}),n.jsx(Fo,{children:n.jsx(Do,{children:(l=jo[i])==null?void 0:l.map(a=>n.jsxs(Zo,{selected:s===a.id,onClick:()=>p(a),children:[n.jsx(Ao,{children:a.name}),n.jsx(Ho,{children:x(a,i)}),n.jsx(Wo,{children:n.jsxs(_o,{fieldWidth:a.width,fieldHeight:a.height,children:[n.jsx(Vt,{className:"width",children:h(a.width,i)}),n.jsx(Vt,{className:"height",children:h(a.height,i)})]})})]},a.id))})})]})]})})},No=C(so)`
  width: 80%;
  height: 80%;
  stroke: ${({theme:e})=>e.textBlack};
   fill: ${({theme:e})=>e.textBlack};
`,qo=C(Sn)`
  width: 100%;
  height: 100%;
   fill: ${({theme:e})=>e.black};
   rotate: 180deg;
`,Uo=C(ao)`
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.textBlack};
`,Jo=C($n)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.textBlack};
`,Ko=C($n)`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  fill: ${({theme:e})=>e.textBlack};
`,Qo=C(ro)`
  width: 70%;  
  height: 70%;
  stroke: ${({theme:e})=>e.textBlack};
`,ei=C(oo)`
  width: 70%;  
  height: 70%;
  fill: ${({theme:e})=>e.textBlack};
`,ti=C(io)`
  width: 70%;  
  height: 70%;
  fill: ${({theme:e})=>e.textBlack};
`,ni=C.div`
  width: 100%;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-bottom: 2px solid ${({theme:e})=>e.gray};
  padding: 12px 16px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`,ri=C.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`,oi=C.div`
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
`,ii=C.div`
  flex-shrink: 0;
  position: relative;
  z-index: 10;
`,ge=C.button`
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

`,ai=C.button`
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
  
`,si=C(no)`
  width: 60%;
  height: 60%;
  fill: none;
  stroke: ${({theme:e})=>e.textBlack};
`,rt=C.div`
  width: 1px;
  height: 20px;
  background: ${({theme:e})=>e.gray};
  margin: 0 4px;
  
  @media (max-width: 768px) {
    height: 16px;
  }
`,Ot=C.div`
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
`,Nt=C.span`
  font-size: 11px;
  color: ${({theme:e})=>e.textGray};
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 9px;
  }
`,qt=C.input`
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
`,li=C.input`
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
`,Ut=({value:e,onChange:t,...r})=>{const[d,i]=m.useState(e),o=m.useRef(null);m.useEffect(()=>{o.current||i(e)},[e]);const s=c=>{const p=c.target.value;i(p),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{t(p),o.current=null},200)};return n.jsx(li,{type:"color",value:d,onChange:s,...r})},ci=({currentField:e,onSelectField:t,isSidebarOpen:r,onToggleSidebar:d})=>{const[i,o]=m.useState(!1),s=pe(),{activeTool:c,team1:p,team2:g,historyIndex:x,history:h}=Be(M=>M.tacticsBoard),l=()=>{o(!0)},a=()=>{o(!1)},u=M=>{t(M),a()},f=M=>{s(Ve(M))},y=M=>{s(Ve(`shape_${M.id}`))},v=M=>{s(Ve(`figure_${M.id}`))},w=M=>{const P=parseInt(M.target.value)||0;s(Vn(Math.max(0,Math.min(30,P))))},b=M=>{s(On(M))},$=M=>{const P=parseInt(M.target.value)||0;s(Nn(Math.max(0,Math.min(30,P))))},k=M=>{s(qn(M))},S=()=>{s(Un())},T=()=>{s(Jn())},I=()=>{window.confirm("Ви впевнені, що хочете очистити всю дошку?")&&s(Kn())},R=x>0,L=x<h.length-1;return n.jsxs(n.Fragment,{children:[n.jsx(ni,{children:n.jsxs(ri,{children:[n.jsxs(oi,{children:[n.jsx(ge,{title:"Обрати поле",onClick:l,children:n.jsx(si,{})}),n.jsx(rt,{}),n.jsx(ge,{title:"Курсор (виділення та переміщення)",active:c==="cursor",onClick:()=>f("cursor"),children:n.jsx(Qo,{})}),n.jsx(ge,{title:"Додати текст",active:c==="text",onClick:()=>f("text"),children:n.jsx(No,{})}),n.jsx(ge,{title:"Малювання",active:c==="drawing",onClick:()=>f("drawing"),children:n.jsx(ei,{})}),n.jsx(ge,{title:"Ластик",active:c==="eraser",onClick:()=>f("eraser"),children:n.jsx(ti,{})}),n.jsx(yo,{activeTool:c,onSelectShape:y}),n.jsx(vo,{activeTool:c,onSelectFigure:v}),n.jsx(rt,{}),n.jsxs(Ot,{children:[n.jsx(Nt,{children:"К1:"}),n.jsx(qt,{type:"number",min:"0",max:"30",value:p.count,onChange:w,title:"Кількість гравців команди 1"}),n.jsx(Ut,{value:p.color,onChange:b,title:"Колір команди 1"})]}),n.jsxs(Ot,{children:[n.jsx(Nt,{children:"К2:"}),n.jsx(qt,{type:"number",min:"0",max:"30",value:g.count,onChange:$,title:"Кількість гравців команди 2"}),n.jsx(Ut,{value:g.color,onChange:k,title:"Колір команди 2"})]}),n.jsx(rt,{}),n.jsx(ge,{title:"М'яч",active:c==="ball",onClick:()=>f("ball"),children:"⚽"}),n.jsx(rt,{}),n.jsx(ge,{title:"Назад (Undo)",onClick:S,disabled:!R,children:n.jsx(Ko,{})}),n.jsx(ge,{title:"Вперед (Redo)",onClick:T,disabled:!L,children:n.jsx(Jo,{})}),n.jsx(ge,{title:"Скасувати все",onClick:I,children:n.jsx(Uo,{})})]}),n.jsx(ii,{children:n.jsx(ai,{title:"Відкрити панель інструментів",active:r,onClick:d,children:n.jsx(qo,{})})})]})}),n.jsx(Oo,{isOpen:i,onClose:a,onSelectField:u,currentFieldId:e.id})]})},di=C.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,hi=C.div`
  display: grid;
  grid-template-columns: 40px 1fr 80px;
  gap: 8px;
  align-items: center;
`,pi=C.div`
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
`,ui=C.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  border: 2px solid ${({theme:e})=>e.lightGreen||"#ccc"};
  cursor: pointer;
  overflow: hidden;
`,gi=C.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,xi=C.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,fi=C.input`
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
`,mi=C.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
`,yi=C.div`
  position: relative;
`,Ci=C.input`
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
`,wi=C.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
  display: block;
  text-align: center;
  margin-top: 2px;
`,Jt=e=>Math.max(0,Math.min(1,e/100)),bi=e=>Math.round(Math.max(0,Math.min(100,e*100))),Kt=(e,t=1)=>{if(!e)return"0, 0, 0, 1";let r=e.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const d=parseInt(r.slice(0,2),16),i=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`${d}, ${i}, ${o}, ${t}`},ce=({color:e,opacity:t,onColorChange:r,onOpacityChange:d,label:i})=>{const[o,s]=m.useState(e||"#000000"),[c,p]=m.useState(t!==void 0?t:100),g=m.useRef(null),x=m.useRef(null),h=m.useRef(null),l=m.useMemo(()=>{const $=Jt(c);return Kt(o,$)},[o,c]),[a,u]=m.useState(l),f=m.useMemo(()=>{const $=Jt(c);return{backgroundColor:`rgba(${Kt(o,$)})`}},[o,c]);m.useEffect(()=>{x.current||(s(e||"#000000"),p(t!==void 0?t:100))},[e,t]),m.useEffect(()=>{document.activeElement!==h.current&&u(l)},[l]);const y=$=>{const k=$.target.value;s(k),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{r&&r(k),x.current=null},150)},v=$=>{const k=$.target.value;u(k);const S=k.split(",").map(T=>parseFloat(T.trim()));if(S.length>=3&&!S.some(isNaN)){const T=Math.max(0,Math.min(255,S[0]||0)),I=Math.max(0,Math.min(255,S[1]||0)),R=Math.max(0,Math.min(255,S[2]||0)),L=S[3]!==void 0?Math.max(0,Math.min(1,S[3])):1,M=`#${((1<<24)+(T<<16)+(I<<8)+R).toString(16).slice(1)}`,P=bi(L);s(M),p(P),x.current&&clearTimeout(x.current),r&&r(M),d&&d(P)}},w=$=>{let k=$.target.value,S=parseInt(k);isNaN(S)&&(S=0),S>100&&(S=100),S<0&&(S=0),p(S),d&&d(S)},b=()=>{g.current&&g.current.click()};return n.jsxs("div",{children:[i&&n.jsx(di,{children:i}),n.jsxs(hi,{children:[n.jsxs(pi,{children:[n.jsx(ui,{style:f,onClick:b}),n.jsx(gi,{ref:g,type:"color",value:o,onChange:y})]}),n.jsxs(xi,{children:[n.jsx(fi,{ref:h,type:"text",value:a,onChange:v,placeholder:"0, 0, 0, 1"}),n.jsx(mi,{children:"RGBA"})]}),n.jsxs(yi,{children:[n.jsx(Ci,{type:"number",min:"0",max:"100",value:c,onChange:w}),n.jsx(wi,{children:"Прозорість %"})]})]})]})},Mi=C.div`
  position: relative;
  width: 100%;
`,vi=C.button`
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
`,Li=C.div`
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
`,$i=C.div`
  padding: 6px 8px;
  font-family: ${({$fontFamily:e})=>e||"Arial"};
  cursor: pointer;
  color: ${({theme:e})=>e.textBlack};
  background-color: ${({selected:e,theme:t})=>e?t.lightGreen:"transparent"};

  &:hover {
    background-color: ${({theme:e})=>e.greenMain};
    color: ${({theme:e})=>e.white};
  }
`,Si=C($r)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) rotate(${({$open:e})=>e?"180deg":"0"});
  width: 20px;
  height: 20px;
  stroke: ${({theme:e})=>e.iconColor};
  transition: transform 0.3s ease;
`,he=({value:e,onChange:t,options:r=[],placeholder:d="Оберіть..."})=>{const[i,o]=m.useState(!1),s=m.useRef(null),c=()=>o(h=>!h),p=()=>o(!1),g=h=>{t(h),p()};m.useEffect(()=>{const h=l=>{s.current&&!s.current.contains(l.target)&&p()};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]);const x=r.find(h=>h.value===e);return n.jsxs(Mi,{ref:s,children:[n.jsxs(vi,{onClick:c,$fontFamily:x==null?void 0:x.value,children:[x?x.label:d,n.jsx(Si,{$open:i})]}),i&&n.jsx(Li,{children:r.map(h=>n.jsx($i,{onClick:()=>g(h.value),selected:h.value===e,$fontFamily:h.value,children:h.label},h.value))})]})},ki="/coaching-draft/assets/brush_marker-9c4a6bad.png",Bi="/coaching-draft/assets/brush_pencil-33e6165e.png",Ei="/coaching-draft/assets/brush_pen-07c57dd9.png",Ti="/coaching-draft/assets/brush_oil-91e92a78.png",Ii="/coaching-draft/assets/brush_watercolor-e5ec0b25.png",zi="/coaching-draft/assets/brush_spray-d0145476.png",Qt=C.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,Ri=C.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Ct=C.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,en=C.label`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Pi=C.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Gi=C.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:d})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${d.greenMain} 0%, ${d.greenMain} ${i}%, ${d.lightGreen} ${i}%, ${d.lightGreen} 100%)`}};
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
`,Yi=C.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 10px;
`,Ee=C.button`
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

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; 
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    border-color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  }
  
  &:active {
    transform: translateY(0);
  }
`,tn=()=>{const e=pe(),{drawColor:t,brushSize:r,brushOpacity:d,brushStyle:i,lineType:o,selectedObjectId:s,paths:c}=Be(M=>M.tacticsBoard),p=s&&s.startsWith("path_")?parseInt(s.replace("path_","")):-1,g=p>=0?c[p]:null,x=g?g.brushStyle:i,h=g?g.color:t,l=g?g.opacity!==void 0?g.opacity:100:d,a=g?g.brushSize:r,u=g?g.lineType:o,[f,y]=m.useState(a),[v,w]=m.useState(50),[b,$]=m.useState(!0);m.useEffect(()=>{switch(y(a),g?g.brushStyle:i){case"hard":w(50),$(!0);break;case"pencil":w(20),$(!0);break;case"calligraphy":w(30),$(!1);break;case"oil":w(60),$(!1);break;case"watercolor":w(80),$(!1);break;case"splatter":w(100),$(!1);break;default:w(50),$(!0)}},[s,a,g,i]);const k=M=>{g?e(Se({index:p,updates:{brushStyle:M,lineType:["oil","watercolor","splatter","calligraphy"].includes(M)?"solid":u}})):(e(Qn(M)),["oil","watercolor","splatter","calligraphy"].includes(M)&&e(Ft("solid")))},S=M=>{e(g?Se({index:p,updates:{color:M}}):er(M))},T=M=>{e(g?Se({index:p,updates:{opacity:M}}):tr(M))},I=M=>{y(parseInt(M.target.value))},R=()=>{e(g?Se({index:p,updates:{brushSize:f}}):nr(f))},L=M=>{e(g?Se({index:p,updates:{lineType:M}}):Ft(M))};return n.jsxs(n.Fragment,{children:[n.jsxs(Qt,{children:[n.jsx(Ri,{children:g?"Пензель":"Тип пензля"}),n.jsxs(Yi,{children:[n.jsx(Ee,{active:x==="hard",onClick:()=>k("hard"),title:"Маркер",children:n.jsx("img",{src:ki,alt:"Маркер"})}),n.jsx(Ee,{active:x==="pencil",onClick:()=>k("pencil"),title:"Олівець",children:n.jsx("img",{src:Bi,alt:"Олівець"})}),n.jsx(Ee,{active:x==="calligraphy",onClick:()=>k("calligraphy"),title:"Перо",children:n.jsx("img",{src:Ei,alt:"Перо"})}),n.jsx(Ee,{active:x==="oil",onClick:()=>k("oil"),title:"Олія",children:n.jsx("img",{src:Ti,alt:"Олія"})}),n.jsx(Ee,{active:x==="watercolor",onClick:()=>k("watercolor"),title:"Акварель",children:n.jsx("img",{src:Ii,alt:"Акварель"})}),n.jsx(Ee,{active:x==="splatter",onClick:()=>k("splatter"),title:"Спрей",children:n.jsx("img",{src:zi,alt:"Спрей"})})]})]}),n.jsxs(Qt,{children:[n.jsx(Ct,{children:n.jsx(ce,{color:h,opacity:l,onColorChange:S,onOpacityChange:T,label:"Колір та прозорість"})}),n.jsxs(Ct,{children:[n.jsxs(en,{children:["Товщина лінії",n.jsxs(Pi,{children:[f,"px"]})]}),n.jsx(Gi,{min:"1",max:v,value:f,onChange:I,onMouseUp:R,onTouchEnd:R})]}),b&&n.jsxs(Ct,{children:[n.jsx(en,{children:"Тип лінії"}),n.jsx(he,{value:u||"solid",onChange:L,options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]})]})},Xi=C.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Fi=C.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,fe=C.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Le=C.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Di=C.textarea`
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
`,ot=C.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:d})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${d.greenMain||"#4CAF50"} 0%, ${d.greenMain||"#4CAF50"} ${i}%, ${d.lightGreen||"#E8F5E9"} ${i}%, ${d.lightGreen||"#E8F5E9"} 100%)`}};
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
`,it=C.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Zi=C.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,wt=C.button`
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
`,Ai=({selectedObject:e})=>{const t=pe(),[r,d]=m.useState(e.text||"");m.useEffect(()=>{d(e.text||"")},[e.id,e.text]);const i=(s,c)=>{t(Oe({id:e.id,updates:{[s]:c}}))},o=s=>{const c=s.target.value;d(c),i("text",c)};return n.jsxs(Xi,{children:[n.jsx(Fi,{children:"Властивості тексту"}),n.jsxs(fe,{children:[n.jsx(Le,{children:"Текст"}),n.jsx(Di,{value:r,onChange:o,placeholder:"Введіть текст...",$fontFamily:e.fontFamily})]}),n.jsx(fe,{children:n.jsx(ce,{color:e.color||"#000000",opacity:e.opacity||100,onColorChange:s=>i("color",s),onOpacityChange:s=>i("opacity",s),label:"Колір і прозорість"})}),n.jsxs(fe,{children:[n.jsxs(Le,{children:["Розмір шрифту",n.jsxs(it,{children:[e.fontSize||16,"px"]})]}),n.jsx(ot,{min:"8",max:"200",value:e.fontSize||16,onChange:s=>i("fontSize",Number(s.target.value))})]}),n.jsxs(fe,{children:[n.jsx(Le,{children:"Тип шрифту"}),n.jsx(he,{value:e.fontFamily||"Arial",onChange:s=>i("fontFamily",s),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(fe,{children:[n.jsx(Le,{children:"Стиль тексту"}),n.jsxs(Zi,{children:[n.jsx(wt,{$active:e.fontWeight==="bold",onClick:()=>i("fontWeight",e.fontWeight==="bold"?"normal":"bold"),children:n.jsx("strong",{children:"B"})}),n.jsx(wt,{$active:e.fontStyle==="italic",onClick:()=>i("fontStyle",e.fontStyle==="italic"?"normal":"italic"),children:n.jsx("em",{children:"I"})}),n.jsx(wt,{$active:e.textDecoration==="underline",onClick:()=>i("textDecoration",e.textDecoration==="underline"?"none":"underline"),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(fe,{children:[n.jsxs(Le,{children:["Міжрядковий інтервал",n.jsx(it,{children:(e.lineHeight||.9).toFixed(1)})]}),n.jsx(ot,{min:"0.5",max:"3",step:"0.1",value:e.lineHeight||.9,onChange:s=>i("lineHeight",Number(s.target.value))})]}),n.jsxs(fe,{children:[n.jsxs(Le,{children:["Міжлітерний інтервал",n.jsxs(it,{children:[e.letterSpacing||0,"px"]})]}),n.jsx(ot,{min:"-2",max:"10",step:"0.5",value:e.letterSpacing||0,onChange:s=>i("letterSpacing",Number(s.target.value))})]}),n.jsxs(fe,{children:[n.jsxs(Le,{children:["Поворот тексту",n.jsxs(it,{children:[e.rotation||0,"°"]})]}),n.jsx(ot,{min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:s=>i("rotation",Number(s.target.value))})]})]})},Hi=C.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Wi=C.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Te=C.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ze=C.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,bt=C.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:d})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${d.greenMain} 0%, ${d.greenMain} ${i}%, ${d.lightGreen} ${i}%, ${d.lightGreen} 100%)`}};
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
`,Mt=C.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,_i=C.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,vt=C.button`
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
`,ji=()=>{const e=pe(),{textColor:t,textOpacity:r,textFontSize:d,textFontFamily:i,textFontWeight:o,textFontStyle:s,textDecoration:c,textLineHeight:p,textLetterSpacing:g}=Be(x=>x.tacticsBoard);return n.jsxs(Hi,{children:[n.jsx(Wi,{children:"Налаштування тексту"}),n.jsx(Te,{children:n.jsx(ce,{color:t,opacity:r,onColorChange:x=>e(rr(x)),onOpacityChange:x=>e(or(x)),label:"Колір і прозорість"})}),n.jsxs(Te,{children:[n.jsxs(Ze,{children:["Розмір шрифту",n.jsxs(Mt,{children:[d,"px"]})]}),n.jsx(bt,{type:"range",min:"8",max:"200",value:d,onChange:x=>e(ir(Number(x.target.value)))})]}),n.jsxs(Te,{children:[n.jsx(Ze,{children:"Тип шрифту"}),n.jsx(he,{value:i,onChange:x=>e(ar(x)),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(Te,{children:[n.jsx(Ze,{children:"Стиль тексту"}),n.jsxs(_i,{children:[n.jsx(vt,{$active:o==="bold",onClick:()=>e(sr(o==="bold"?"normal":"bold")),children:n.jsx("strong",{children:"B"})}),n.jsx(vt,{$active:s==="italic",onClick:()=>e(lr(s==="italic"?"normal":"italic")),children:n.jsx("em",{children:"I"})}),n.jsx(vt,{$active:c==="underline",onClick:()=>e(cr(c==="underline"?"none":"underline")),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(Te,{children:[n.jsxs(Ze,{children:["Міжрядковий інтервал",n.jsx(Mt,{children:p})]}),n.jsx(bt,{type:"range",min:"0.5",max:"3",step:"0.1",value:p,onChange:x=>e(dr(Number(x.target.value)))})]}),n.jsxs(Te,{children:[n.jsxs(Ze,{children:["Міжлітерний інтервал",n.jsxs(Mt,{children:[g,"px"]})]}),n.jsx(bt,{type:"range",min:"-2",max:"10",step:"0.5",value:g,onChange:x=>e(hr(Number(x.target.value)))})]})]})},Vi=C.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Oi=C.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,me=C.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ye=C.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,nn=C.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:d})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${d.greenMain} 0%, ${d.greenMain} ${i}%, ${d.lightGreen} ${i}%, ${d.lightGreen} 100%)`}};
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
`,rn=C.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Ni=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,on=C.input`
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
`,at=8,qi=({selectedObject:e})=>{const t=pe(),r=(o,s)=>{t(Oe({id:e.id,updates:{[o]:s}}))},d=(o,s)=>{let c=Number(s);c<at&&(c=at);const p=(e[o]||1)<0?-1:1;c*=p,r(o,c)},i=e.shape==="line"||e.shape==="arrow";return n.jsxs(Vi,{children:[n.jsx(Oi,{children:"Властивості фігури"}),!i&&n.jsxs(me,{children:[n.jsx(ye,{children:"Розміри"}),n.jsxs(Ni,{children:[n.jsxs("div",{children:[n.jsx(ye,{style:{fontSize:"10px",marginBottom:"4px"},children:"Ширина"}),n.jsx(on,{type:"number",min:at,value:Math.abs(e.width||50),onChange:o=>d("width",o.target.value)})]}),n.jsxs("div",{children:[n.jsx(ye,{style:{fontSize:"10px",marginBottom:"4px"},children:"Висота"}),n.jsx(on,{type:"number",min:at,value:Math.abs(e.height||30),onChange:o=>d("height",o.target.value)})]})]})]}),n.jsxs(me,{children:[n.jsxs(ye,{children:["Кут повороту",n.jsxs(rn,{children:[e.rotation||0,"º"]})]}),n.jsx(nn,{type:"range",min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:o=>r("rotation",Number(o.target.value))})]}),n.jsx(me,{children:n.jsx(ce,{color:e.borderColor||e.color||"#000000",opacity:e.borderOpacity!==void 0?e.borderOpacity:100,onColorChange:o=>r("borderColor",o),onOpacityChange:o=>r("borderOpacity",o),label:i?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(me,{children:[n.jsxs(ye,{children:[i?"Товщина лінії":"Товщина обводки",n.jsxs(rn,{children:[e.borderWidth||2,"px"]})]}),n.jsx(nn,{type:"range",min:"1",max:"20",value:e.borderWidth||2,onChange:o=>r("borderWidth",Number(o.target.value))})]}),n.jsxs(me,{children:[n.jsx(ye,{children:"Тип обводки"}),n.jsx(he,{value:e.borderStyle||"solid",onChange:o=>r("borderStyle",o),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),i&&n.jsxs(n.Fragment,{children:[n.jsxs(me,{children:[n.jsx(ye,{children:"Початок лінії"}),n.jsx(he,{value:e.lineCapStart||"butt",onChange:o=>r("lineCapStart",o),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(me,{children:[n.jsx(ye,{children:"Кінець лінії"}),n.jsx(he,{value:e.lineCapEnd||(e.shape==="arrow"?"arrow":"butt"),onChange:o=>r("lineCapEnd",o),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!i&&n.jsx(me,{children:n.jsx(ce,{color:e.fillColor||"#ffffff",opacity:e.fillOpacity!==void 0?e.fillOpacity:0,onColorChange:o=>r("fillColor",o),onOpacityChange:o=>r("fillOpacity",o),label:"Колір заливки і прозорість"})})]})},Ui=C.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Ji=C.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Ie=C.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,st=C.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Ki=C.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:d})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${d.greenMain} 0%, ${d.greenMain} ${i}%, ${d.lightGreen} ${i}%, ${d.lightGreen} 100%)`}};
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
`,Qi=C.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,ea=C.p`
  font-size: 12px;
  color: #888;
  font-style: italic;
  margin-top: 12px;
  line-height: 1.4;
`,ta=()=>{const e=pe(),{activeTool:t,shapeBorderColor:r,shapeBorderOpacity:d,shapeFillColor:i,shapeFillOpacity:o,shapeBorderWidth:s,shapeBorderStyle:c,shapeLineCapStart:p,shapeLineCapEnd:g}=Be(h=>h.tacticsBoard),x=t==="shape_line"||t==="shape_arrow";return n.jsxs(Ui,{children:[n.jsx(Ji,{children:"Налаштування фігури"}),n.jsx(Ie,{children:n.jsx(ce,{color:r,opacity:d,onColorChange:h=>e(pr(h)),onOpacityChange:h=>e(ur(h)),label:"Колір обводки та прозорість"})}),n.jsxs(Ie,{children:[n.jsxs(st,{children:["Товщина обводки",n.jsxs(Qi,{children:[s,"px"]})]}),n.jsx(Ki,{type:"range",min:"1",max:"20",value:s,onChange:h=>e(gr(Number(h.target.value)))})]}),n.jsxs(Ie,{children:[n.jsx(st,{children:"Стиль обводки"}),n.jsx(he,{value:c,onChange:h=>e(xr(h)),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть стиль"})]}),x&&n.jsxs(n.Fragment,{children:[n.jsxs(Ie,{children:[n.jsx(st,{children:"Початок лінії"}),n.jsx(he,{value:p,onChange:h=>e(fr(h)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(Ie,{children:[n.jsx(st,{children:"Кінець лінії"}),n.jsx(he,{value:g||(t==="shape_arrow"?"arrow":"butt"),onChange:h=>e(pn(h)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!x&&n.jsx(Ie,{children:n.jsx(ce,{color:i,opacity:o,onColorChange:h=>e(mr(h)),onOpacityChange:h=>e(yr(h)),label:"Колір заливки і прозорість"})}),n.jsx(ea,{children:x?"Клікніть і потягніть, щоб намалювати лінію":"Клікніть і потягніть, щоб створити фігуру"})]})},Ae=C.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,He=C.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,se=C.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,$e=C.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,an=C.input`
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
`,lt=C.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:d})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${d.greenMain} 0%, ${d.greenMain} ${i}%, ${d.lightGreen} ${i}%, ${d.lightGreen} 100%)`}};
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
`,ct=C.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,na=C.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
  margin-top: 10px;
`,ra=C.div`
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
`,oa=C.div`
  width: 30px; 
  height: 45px;
  background: ${({$color:e})=>e};
  border: 2px solid ${({$borderColor:e})=>e}; 
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); 
`,ia=C.div`
  display: flex;
  flex-direction: row; 
  gap: 15px; 
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`,sn=C.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,ln=C.input.attrs({type:"color"})`
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
`,cn=C.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.textGray||"#666"};
  min-width: 45px; 
`,aa=C.button`
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
`,sa=C.button`
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
`,la=C.span`
  font-size: 10px;
  color: ${({theme:e,$over:t})=>t?e.red:e.textGray};
  margin-top: 4px;
  display: block;
`,dn=8,hn=50,dt=100,We=3,ca=({selectedObject:e})=>{const t=pe(),r=(L,M)=>{t(Oe({id:e.id,updates:{[L]:M}}))},d=L=>{let M=Number(L);M=Math.max(dn,Math.min(hn,M)),r("radius",M)},i=L=>{const M=Math.max(0,Math.min(99,Number(L)||0));r("number",M)},o=L=>{L.length<=dt&&r("topText",L)},s=()=>{const L=e.cards||[];if(L.length<We){const M=[...L,{color:"#FFD700",cardBorderColor:"#000000"}];r("cards",M)}},c=L=>{const P=(e.cards||[]).filter((z,D)=>D!==L);r("cards",P)},p=(L,M)=>{const z=[...e.cards||[]];z[L]={...z[L],color:M},r("cards",z)},g=(L,M)=>{const z=[...e.cards||[]];z[L]={...z[L],cardBorderColor:M},r("cards",z)},x=e.radius||20,h=e.number!==void 0?e.number:1,l=e.topText||"",a=e.rotation||0,u=e.color||"#ff0000",f=e.colorOpacity!==void 0?e.colorOpacity:100,y=e.numberColor||"#ffffff",v=e.numberOpacity!==void 0?e.numberOpacity:100,w=e.textColor||"#000000",b=e.textOpacity!==void 0?e.textOpacity:100,$=e.textSize||Math.max(10,x*.5),k=e.borderWidth||2,S=e.borderColor||"#000000",T=e.borderOpacity!==void 0?e.borderOpacity:100,I=e.borderStyle||"solid",R=e.cards||[];return n.jsxs(n.Fragment,{children:[n.jsxs(Ae,{children:[n.jsx(He,{children:"Розмір та позиція"}),n.jsxs(se,{children:[n.jsxs($e,{children:["Розмір гравця (8-50px)",n.jsxs(ct,{children:[x,"px"]})]}),n.jsx(lt,{min:dn,max:hn,value:x,onChange:L=>d(L.target.value)})]}),n.jsxs(se,{children:[n.jsxs($e,{children:["Кут повороту",n.jsxs(ct,{children:[a,"º"]})]}),n.jsx(lt,{min:"-180",max:"180",step:"5",value:a,onChange:L=>r("rotation",Number(L.target.value))})]}),n.jsx(se,{children:n.jsx(ce,{color:u,opacity:f,onColorChange:L=>r("color",L),onOpacityChange:L=>r("colorOpacity",L),label:"Колір гравця"})})]}),n.jsxs(Ae,{children:[n.jsx(He,{children:"Номер гравця"}),n.jsxs(se,{children:[n.jsx($e,{children:"Номер гравця (0-99)"}),n.jsx(an,{type:"number",min:"0",max:"99",value:h,onChange:L=>i(L.target.value)})]}),n.jsx(se,{children:n.jsx(ce,{color:y,opacity:v,onColorChange:L=>r("numberColor",L),onOpacityChange:L=>r("numberOpacity",L),label:"Колір номера"})})]}),n.jsxs(Ae,{children:[n.jsx(He,{children:"Текст над гравцем"}),n.jsxs(se,{children:[n.jsx($e,{children:"Текст"}),n.jsx(an,{type:"text",maxLength:dt,placeholder:"Введіть текст",value:l,onChange:L=>o(L.target.value)}),n.jsxs(la,{$over:l.length>dt,children:[l.length,"/",dt," символів"]})]}),l&&n.jsxs(n.Fragment,{children:[n.jsxs(se,{children:[n.jsxs($e,{children:["Розмір тексту",n.jsxs(ct,{children:[$,"px"]})]}),n.jsx(lt,{min:"8",max:"40",value:$,onChange:L=>r("textSize",Number(L.target.value))})]}),n.jsx(se,{children:n.jsx(ce,{color:w,opacity:b,onColorChange:L=>r("textColor",L),onOpacityChange:L=>r("textOpacity",L),label:"Колір тексту"})})]})]}),n.jsxs(Ae,{children:[n.jsx(He,{children:"Обводка"}),n.jsx(se,{children:n.jsx(ce,{color:S,opacity:T,onColorChange:L=>r("borderColor",L),onOpacityChange:L=>r("borderOpacity",L),label:"Колір обводки"})}),n.jsxs(se,{children:[n.jsxs($e,{children:["Товщина обводки",n.jsxs(ct,{children:[k,"px"]})]}),n.jsx(lt,{min:"1",max:"10",value:k,onChange:L=>r("borderWidth",Number(L.target.value))})]}),n.jsxs(se,{children:[n.jsx($e,{children:"Тип обводки"}),n.jsx(he,{value:I,onChange:L=>r("borderStyle",L),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]}),n.jsxs(Ae,{children:[n.jsxs(He,{children:["Картки (",R.length,"/",We,")"]}),R.length>0&&n.jsx(na,{children:R.map((L,M)=>n.jsxs(ra,{children:[n.jsx(oa,{$color:L.color,$borderColor:L.cardBorderColor||"#000000"}),n.jsxs(ia,{children:[n.jsxs(sn,{title:"Колір заливки картки",children:[n.jsx(cn,{children:"Заливка:"}),n.jsx(ln,{value:L.color,onChange:P=>p(M,P.target.value)})]}),n.jsxs(sn,{title:"Колір обводки картки",children:[n.jsx(cn,{children:"Обводка:"}),n.jsx(ln,{value:L.cardBorderColor||"#000000",onChange:P=>g(M,P.target.value)})]})]}),n.jsx(aa,{onClick:()=>c(M),title:"Видалити картку",children:n.jsx(Sr,{})})]},M))}),n.jsx(se,{style:{marginTop:R.length>0?"15px":"0"},children:n.jsx(sa,{onClick:s,disabled:R.length>=We,children:R.length>=We?`Максимум ${We} картки`:"Додати картку"})})]})]})},da=C.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,ha=C.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,pa=C.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,ua=C.label`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,ga=C.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,xa=C.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:d})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${d.greenMain} 0%, ${d.greenMain} ${i}%, ${d.lightGreen} ${i}%, ${d.lightGreen} 100%)`}};
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
`,fa=()=>{const e=pe(),{eraserSize:t}=Be(s=>s.tacticsBoard),[r,d]=m.useState(t);m.useEffect(()=>{d(t)},[t]);const i=s=>{d(parseInt(s.target.value))},o=()=>{e(Cr(r))};return n.jsxs(da,{children:[n.jsx(ha,{children:"Налаштування ластика"}),n.jsxs(pa,{children:[n.jsxs(ua,{children:["Розмір ластика",n.jsxs(ga,{children:[r,"px"]})]}),n.jsx(xa,{min:"5",max:"200",value:r,onChange:i,onMouseUp:o,onTouchEnd:o})]})]})},ma=C(Sn)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.black};
`,ya=C.div`
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
`,Ca=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
`,wa=C.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ba=C.button`
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
`,Ma=C.div`
  padding: 20px;
`,_e=C.button`
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
`,va=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #ccc;
  text-align: center;
`,La=({isOpen:e,onClose:t})=>{const r=pe(),{activeTool:d,selectedObjectId:i,objects:o,paths:s}=Be(x=>x.tacticsBoard),c=i?i.startsWith("path_")?{...s[parseInt(i.replace("path_",""))],type:"path",id:i}:o.find(x=>x.id===i):null,p=()=>{if(i){if(i.startsWith("path_")){const x=parseInt(i.replace("path_",""));r(wr(x))}else r(br(i));r(je()),t()}},g=()=>{if(c)switch(c.type){case"text":return n.jsxs(n.Fragment,{children:[n.jsx(Ai,{selectedObject:c}),n.jsx(_e,{onClick:p,children:"Видалити текст"})]});case"player":return n.jsxs(n.Fragment,{children:[n.jsx(ca,{selectedObject:c}),n.jsx(_e,{onClick:p,children:"Видалити гравця"})]});case"shape":return n.jsxs(n.Fragment,{children:[n.jsx(qi,{selectedObject:c}),n.jsx(_e,{onClick:p,children:"Видалити фігуру"})]});case"path":return n.jsxs(n.Fragment,{children:[n.jsx(tn,{}),n.jsx(_e,{onClick:p,children:"Видалити лінію"})]});default:return n.jsx(_e,{onClick:p,children:"Видалити об'єкт"})}switch(d){case"text":return n.jsx(ji,{});case"drawing":return n.jsx(tn,{});case"eraser":return n.jsx(fa,{});case"shape_rectangle":case"shape_circle":case"shape_triangle":case"shape_line":case"shape_arrow":return n.jsx(ta,{});default:return n.jsxs(va,{children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎯"}),n.jsx("p",{children:"Виберіть інструмент або об'єкт"}),n.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px",fontStyle:"italic"},children:"Налаштування з'являться тут"})]})}};return n.jsxs(ya,{$isOpen:e,children:[n.jsxs(Ca,{children:[n.jsx(wa,{children:c?"Властивості":"Інструменти"}),n.jsx(ba,{title:"Закрити панель інструментів",onClick:t,children:n.jsx(ma,{})})]}),n.jsx(Ma,{children:g()})]})},$a=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: ${({theme:e})=>e.mainBGColor};
`,Sa=C.div`
  background: ${({theme:e})=>e.ContainerBGColor};
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`,ka=C.div`
  width: 100%;
`,Ia=({theme:e})=>{const{setTitle:t}=Mr(),[r,d]=m.useState(!1),[i,o]=m.useState({id:"football_standard",name:"Стандартне футбольне поле",width:105,height:68}),s=g=>{o(g)},c=()=>{d(!r)},p=()=>{d(!1)};return m.useEffect(()=>{t("Тактична дошка")},[t]),n.jsx(vr,{store:Lr,children:n.jsx($a,{children:n.jsxs(Sa,{children:[n.jsx(ci,{currentField:i,onSelectField:s,isSidebarOpen:r,onToggleSidebar:c}),n.jsx(ka,{children:n.jsx(to,{fieldSize:{width:i.width,height:i.height},fieldType:i.id})}),n.jsx(La,{isOpen:r,onClose:p,children:n.jsx("div",{children:"Тут будуть інструменти"})})]})})})};export{Ia as default};
