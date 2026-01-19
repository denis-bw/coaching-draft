import{r as m,d as y,b as pe,a as Te,_ as An,$ as Hn,a0 as mt,a1 as ke,a2 as Ne,a3 as jn,a4 as Wn,a5 as Ve,a6 as un,j as n,a7 as Ft,a8 as _n,a9 as Oe,W as Dt,S as Vn,aa as On,ab as Nn,ac as qn,ad as Un,ae as Jn,af as Kn,ag as Qn,ah as er,ai as Yt,aj as tr,ak as nr,al as rr,am as or,an as ir,ao as ar,ap as sr,aq as lr,ar as cr,as as dr,at as hr,au as pr,av as ur,aw as gr,ax as xr,ay as fr,az as mr,aA as yr,aB as Cr,aC as wr,aD as br,aE as Mr,u as vr,aF as $r,aG as Lr}from"./index-13d5f35a.js";import{S as Sr}from"./ChevronDownicon-bf9c37f5.js";import{S as kr}from"./DeleteIcon-771554d4.js";const Xt=(e,t,r,a,i)=>{const o=Math.cos(i),l=Math.sin(i),c=e-r,p=t-a;return{x:r+(c*o-p*l),y:a+(c*l+p*o)}},fe=(e,t)=>{const r=(e+t)%360,a=r<0?r+360:r,i=Math.round(a/45)%4;return["ns-resize","nesw-resize","ew-resize","nwse-resize"][i]},le=(e,t)=>{if(e.type==="player"){const r=e.radius||20,i=(e.rotation||0)*Math.PI/180;let o=e.x-r,l=e.x+r,c=e.y-r,p=e.y+r;if(e.topText){const g=e.textSize||Math.max(10,r*.5),x=g,h=e.topText.length*g*.6,d=-(r+x);[{x:-h/2,y:d-x*.2},{x:h/2,y:d-x*.2},{x:-h/2,y:d},{x:h/2,y:d}].forEach(u=>{const f=u.x*Math.cos(i)-u.y*Math.sin(i),C=u.x*Math.sin(i)+u.y*Math.cos(i);o=Math.min(o,e.x+f),l=Math.max(l,e.x+f),c=Math.min(c,e.y+C),p=Math.max(p,e.y+C)})}if(e.cards&&e.cards.length>0){const g=r*.35,x=g*1.4,h=2,d=Math.PI/4,s=Math.cos(d)*r*.7,u=Math.sin(d)*r*.7,f=e.cards.length-1,C=s-f*(g+h);[{x:C-g,y:u},{x:s,y:u},{x:C-g,y:u+x},{x:s,y:u+x}].forEach(w=>{const M=w.x*Math.cos(i)-w.y*Math.sin(i),L=w.x*Math.sin(i)+w.y*Math.cos(i);o=Math.min(o,e.x+M),l=Math.max(l,e.x+M),c=Math.min(c,e.y+L),p=Math.max(p,e.y+L)})}return{x:e.x-r,y:e.y-r,width:r*2,height:r*2,centerX:e.x,centerY:e.y}}if(e.type==="ball"){const r=e.radius||10;return{x:e.x-r,y:e.y-r,width:r*2,height:r*2,centerX:e.x,centerY:e.y}}if(e.type==="shape"){if(e.shape==="line"||e.shape==="arrow"){const c=Math.min(e.startX,e.endX),p=Math.max(e.startX,e.endX),g=Math.min(e.startY,e.endY),x=Math.max(e.startY,e.endY),h=(e.borderWidth||2)+10;return{x:c-h,y:g-h,width:p-c+h*2,height:x-g+h*2,startX:e.startX,startY:e.startY,endX:e.endX,endY:e.endY}}const r=e.width||50,a=e.height||30,i=e.rotation||0;if(i!==0){const c=i*Math.PI/180,p=e.x+r/2,g=e.y+a/2,h=[{x:e.x,y:e.y},{x:e.x+r,y:e.y},{x:e.x+r,y:e.y+a},{x:e.x,y:e.y+a}].map(C=>Xt(C.x,C.y,p,g,c));let d=h[0].x,s=h[0].x,u=h[0].y,f=h[0].y;return h.forEach(C=>{d=Math.min(d,C.x),s=Math.max(s,C.x),u=Math.min(u,C.y),f=Math.max(f,C.y)}),{x:d,y:u,width:s-d,height:f-u,centerX:p,centerY:g,originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:a,rotation:i,rotatedCorners:h}}const o=r<0?e.x+r:e.x,l=a<0?e.y+a:e.y;return{x:o,y:l,width:Math.abs(r),height:Math.abs(a),originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:a,rotation:i}}if(e.type==="figure"){const r=e.size||30;return{x:e.x-r/2,y:e.y-r/2,width:r,height:r,centerX:e.x,centerY:e.y}}if(e.type==="path"){if(!e.points||e.points.length===0)return null;let r=1/0,a=1/0,i=-1/0,o=-1/0;for(let p=0;p<e.points.length;p+=5){const g=e.points[p];g.x<r&&(r=g.x),g.x>i&&(i=g.x),g.y<a&&(a=g.y),g.y>o&&(o=g.y)}const l=e.points[e.points.length-1];l.x<r&&(r=l.x),l.x>i&&(i=l.x),l.y<a&&(a=l.y),l.y>o&&(o=l.y);const c=(e.brushSize||5)/2;return{x:r-c,y:a-c,width:i-r+c*2,height:o-a+c*2,points:e.points}}if(e.type==="text"){if(t){const i=t.getContext("2d"),o=e.fontWeight||"normal",l=e.fontStyle||"normal",c=e.fontSize||16,p=e.fontFamily||"Arial";i.font=`${l} ${o} ${c}px ${p}`;const g=(e.text||"").split(`
`),x=(e.lineHeight||1.5)*c,h=e.letterSpacing||0;let d=0;g.forEach(v=>{let M=i.measureText(v).width;h!==0&&(M+=h*(v.length-1)),M>d&&(d=M)});const s=g.length>0?(g.length-1)*x+c:0,u=e.rotation||0,f=e.x+d/2,C=e.y+s/2;if(u!==0){const v=u*Math.PI/180,M=[{x:e.x,y:e.y},{x:e.x+d,y:e.y},{x:e.x+d,y:e.y+s},{x:e.x,y:e.y+s}].map(I=>Xt(I.x,I.y,f,C,v));let L=M[0].x,k=M[0].x,S=M[0].y,E=M[0].y;return M.forEach(I=>{L=Math.min(L,I.x),k=Math.max(k,I.x),S=Math.min(S,I.y),E=Math.max(E,I.y)}),{x:L,y:S,width:k-L,height:E-S,centerX:f,centerY:C,originalX:e.x,originalY:e.y,originalWidth:d,originalHeight:s,rotation:u,rotatedCorners:M}}return{x:e.x,y:e.y,width:d,height:s,centerX:f,centerY:C,originalX:e.x,originalY:e.y,originalWidth:d,originalHeight:s,rotation:0}}const r=e.width||100,a=e.height||20;return{x:e.x,y:e.y,width:r,height:a,centerX:e.x+r/2,centerY:e.y+a/2}}return null},pt=(e,t,r,a=0)=>{if(!r)return!1;if(r.rotatedCorners&&r.rotatedCorners.length>0){const i=r.rotatedCorners;let o=!1;for(let l=0,c=i.length-1;l<i.length;c=l++){const p=i[l].x,g=i[l].y,x=i[c].x,h=i[c].y;g>t!=h>t&&e<(x-p)*(t-g)/(h-g)+p&&(o=!o)}return o}return e>=r.x-a&&e<=r.x+r.width+a&&t>=r.y-a&&t<=r.y+r.height+a},Zt=(e,t,r,a=10,i)=>{const o=le(r,i);if(!o||!pt(e,t,o,a))return!1;if(r.type==="path"){const l=r.brushSize/2+a;for(let c=0;c<r.points.length-1;c++){const p=r.points[c],g=r.points[c+1],x=g.x-p.x,h=g.y-p.y,d=Math.sqrt(x*x+h*h);if(d===0)continue;const s=Math.max(0,Math.min(1,((e-p.x)*x+(t-p.y)*h)/(d*d))),u=p.x+s*x,f=p.y+s*h;if(Math.sqrt(Math.pow(e-u,2)+Math.pow(t-f,2))<=l)return!0}return!1}if(r.type==="shape"&&(r.shape==="line"||r.shape==="arrow")){const l=r.borderWidth/2+a,c=o.endX-o.startX,p=o.endY-o.startY,g=c*c+p*p;let x=0;g>0&&(x=((e-o.startX)*c+(t-o.startY)*p)/g),x=Math.max(0,Math.min(1,x));const h=o.startX+x*c,d=o.startY+x*p;return(e-h)**2+(t-d)**2<=l*l}if(r.type==="shape"&&r.shape==="circle"){const l=o.centerX||o.x+o.width/2,c=o.centerY||o.y+o.height/2,p=(o.originalWidth?Math.abs(o.originalWidth):o.width)/2+a,g=(o.originalHeight?Math.abs(o.originalHeight):o.height)/2+a;if(o.rotation){const x=-(o.rotation*Math.PI)/180,h=e-l,d=t-c,s=h*Math.cos(x)-d*Math.sin(x),u=h*Math.sin(x)+d*Math.cos(x);return s*s/(p*p)+u*u/(g*g)<=1}return Math.pow(e-l,2)/Math.pow(p,2)+Math.pow(t-c,2)/Math.pow(g,2)<=1}return pt(e,t,o,a)},gn=(e,t)=>{const r=t&&t.rotation||0;if(t&&t.type==="shape"&&(t.shape==="line"||t.shape==="arrow"))return{start:{x:e.startX,y:e.startY,cursor:"crosshair"},end:{x:e.endX,y:e.endY,cursor:"crosshair"}};if(t&&t.type==="path")return{};if(e.rotatedCorners&&e.rotatedCorners.length===4){const a=e.rotatedCorners;return{topLeft:{x:a[0].x,y:a[0].y,cursor:fe(315,r)},topRight:{x:a[1].x,y:a[1].y,cursor:fe(45,r)},bottomRight:{x:a[2].x,y:a[2].y,cursor:fe(135,r)},bottomLeft:{x:a[3].x,y:a[3].y,cursor:fe(225,r)},top:{x:(a[0].x+a[1].x)/2,y:(a[0].y+a[1].y)/2,cursor:fe(0,r)},bottom:{x:(a[2].x+a[3].x)/2,y:(a[2].y+a[3].y)/2,cursor:fe(180,r)},left:{x:(a[0].x+a[3].x)/2,y:(a[0].y+a[3].y)/2,cursor:fe(270,r)},right:{x:(a[1].x+a[2].x)/2,y:(a[1].y+a[2].y)/2,cursor:fe(90,r)}}}return{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"},top:{x:e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.y+e.height/2,cursor:"ew-resize"}}},At=(e,t,r,a)=>{const i=gn(r,a),o=8;for(const[l,c]of Object.entries(i))if(a&&a.type==="shape"&&(a.shape==="line"||a.shape==="arrow")){if(Math.sqrt(Math.pow(e-c.x,2)+Math.pow(t-c.y,2))<=o*2)return{name:l,...c}}else if(Math.abs(e-c.x)<=o&&Math.abs(t-c.y)<=o)return{name:l,...c};return null},xn=(e,t,r,a,i,o)=>{const l=[];for(let c=r.length-1;c>=0;c--)Zt(e,t,r[c],i,o)&&l.push(r[c]);for(let c=a.length-1;c>=0;c--){const p={...a[c],type:"path",id:`path_${c}`};Zt(e,t,p,i,o)&&l.push(p)}return l},fn=(e,t,r,a,i,o)=>{const l=xn(e,t,r,a,i,o);return l.length>0?l[0]:null},mn=(e,t=1)=>{if(!e)return"rgba(0, 0, 0, 1)";let r=e.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const a=parseInt(r.slice(0,2),16),i=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${a}, ${i}, ${o}, ${t})`},Be=e=>{let t=e.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}},ee=e=>{const t=Math.sin(e)*1e4;return t-Math.floor(t)},$t=(e,t,r,a,i,o)=>{const l=Math.max(1,Math.floor(a*1.5));for(let c=0;c<l;c++){const p=ee(t*r*c)*Math.PI*2,g=Math.sqrt(ee(t+r+c))*a,x=Math.cos(p)*g,h=Math.sin(p)*g,d=o*(.2+ee(c)*.7);e.fillStyle=`rgba(${i.r}, ${i.g}, ${i.b}, ${d})`;const s=.5+ee(c*2);e.beginPath(),e.arc(t+x,r+h,s,0,Math.PI*2),e.fill()}},Br=(e,t,r,a,i,o)=>{e.lineCap="round",e.lineJoin="round";const l=Be(a),c=Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2)),p=Math.max(1,o*.2),g=Math.ceil(c/p);for(let x=0;x<g;x++){const h=x/g,d=t.x+(r.x-t.x)*h,s=t.y+(r.y-t.y)*h,u=(ee(d*s)-.5)*.5;$t(e,d+u,s+u,o/2,l,i)}},Lt=(e,t,r,a,i,o)=>{const l=Be(a);e.lineCap="butt",e.lineJoin="round";const c=Math.max(12,o*1.5),p=o*.8;for(let g=0;g<c;g++){const x=(g/c-.5)*p,h=i*(.8+ee(g)*.2);e.strokeStyle=`rgba(${l.r}, ${l.g}, ${l.b}, ${h})`,e.lineWidth=o/c*2,e.beginPath();const d=ee(t.x*g)-.5,s=ee(r.x*g)-.5;e.moveTo(t.x+x+d,t.y+x+d),e.lineTo(r.x+x+s,r.y+x+s),e.stroke()}},yn=(e,t,r,a,i,o)=>{const l=Be(a);e.lineCap="butt";const c=Math.max(6,o),p=Math.PI/4,g=Math.cos(p)*o,x=Math.sin(p)*o;for(let h=0;h<c;h++){const d=h/(c-1),s=g*(d-.5),u=x*(d-.5);e.strokeStyle=`rgba(${l.r}, ${l.g}, ${l.b}, ${i})`,e.lineWidth=1.5,e.beginPath(),e.moveTo(t.x+s,t.y+u),e.lineTo(r.x+s,r.y+u),e.stroke()}},Cn=(e,t,r,a,i,o)=>{e.lineCap="round",e.lineJoin="round";const l=Be(a);[{widthMult:1.5,alphaMult:.15},{widthMult:1.2,alphaMult:.25},{widthMult:1,alphaMult:.35},{widthMult:.7,alphaMult:.45}].forEach((p,g)=>{const x=Math.max(3,Math.floor(o*.2));for(let h=0;h<x;h++){const d=h/x*Math.PI*2,s=o*p.widthMult*.15*(h/x),u=Math.cos(d)*s,f=Math.sin(d)*s,C=i*p.alphaMult*(.8+ee(h+g)*.2);e.strokeStyle=`rgba(${l.r}, ${l.g}, ${l.b}, ${C})`,e.lineWidth=o*p.widthMult,e.beginPath();const v=(ee(t.x*h)-.5)*.5,w=(ee(r.x*h)-.5)*.5;e.moveTo(t.x+u+v,t.y+f+v),e.lineTo(r.x+u+w,r.y+f+w),e.stroke()}})},wn=(e,t,r,a,i,o)=>{const l=Be(a);e.fillStyle=`rgba(${l.r}, ${l.g}, ${l.b}, ${i})`;const c=Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2)),p=Math.max(5,o/1.2);for(let g=0;g<c;g+=p){const x=g/c,h=t.x+(r.x-t.x)*x,d=t.y+(r.y-t.y)*x,s=o*(.3+ee(h)*.6),u=(ee(d)-.5)*o*1.5,f=(ee(h)-.5)*o*1.5;e.beginPath(),e.arc(h+u,d+f,s,0,Math.PI*2),e.fill();const C=Math.floor(ee(h*d)*4);for(let v=0;v<C;v++){const w=ee(h+v)*Math.PI*2,M=o*(.5+ee(d+v)),L=o*(.05+ee(v)*.1),k=h+u+Math.cos(w)*M,S=d+f+Math.sin(w)*M;e.beginPath(),e.arc(k,S,L,0,Math.PI*2),e.fill()}}},Tr=(e,t,r,a,i,o)=>{e.lineCap="round",e.lineJoin="round",e.lineWidth=o,e.strokeStyle=mn(a,i),e.setLineDash([]),e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(r.x,r.y),e.stroke()},Er=(e,t,r,a)=>{const{color:i,opacity:o,brushSize:l,brushStyle:c}=a,p=o!==void 0?o/100:1;switch(e.save(),c){case"pencil":Br(e,t,r,i,p,l);break;case"calligraphy":yn(e,t,r,i,p,l);break;case"oil":Lt(e,t,r,i,p,l);break;case"watercolor":Cn(e,t,r,i,p,l);break;case"splatter":wn(e,t,r,i,p,l);break;case"hard":default:Tr(e,t,r,i,p,l);break}e.restore()},Ir=(e,t,r,a,i,o)=>{if(e.lineCap="round",e.lineJoin="round",o==="solid"){const l=Be(r),c=Math.max(1,i*.2);for(let p=0;p<t.points.length-1;p++){const g=t.points[p],x=t.points[p+1],h=(x.x-g.x)**2+(x.y-g.y)**2;if(h<2&&p<t.points.length-2)continue;const d=Math.sqrt(h),s=Math.ceil(d/c);for(let u=0;u<s;u++){const f=u/s,C=g.x+(x.x-g.x)*f,v=g.y+(x.y-g.y)*f,w=(ee(C*v)-.5)*.5;$t(e,C+w,v+w,i/2,l,a)}}}else{const l=Be(r),c=o==="dotted",p=c?i*.1:i*3,g=c?i*1.1:i*2,x=p+g;let h=0;for(let d=0;d<t.points.length-1;d++){const s=t.points[d],u=t.points[d+1],f=Math.sqrt(Math.pow(u.x-s.x,2)+Math.pow(u.y-s.y,2));let C=0;const v=Math.max(1,i*.1);for(;C<f;){const M=(h+C)%x;if(M<p||c&&M<i){const L=C/f,k=s.x+(u.x-s.x)*L,S=s.y+(u.y-s.y)*L;$t(e,k,S,i/2,l,a)}C+=v}h+=f}}},zr=(e,t,r,a,i)=>{if(t.points.length>1){const o=Math.max(2,i*.15);let l=0;for(let g=0;g<t.points.length-1;g++){const x=t.points[g],h=t.points[g+1],d=h.x-x.x,s=h.y-x.y,u=Math.sqrt(d*d+s*s);if(l+u<o&&g<t.points.length-2){l+=u;continue}Lt(e,x,h,r,a,i),l=0}const c=t.points[t.points.length-2],p=t.points[t.points.length-1];Lt(e,c,p,r,a,i)}},Rr=(e,t,r,a,i)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const l=t.points[o],c=t.points[o+1];(c.x-l.x)**2+(c.y-l.y)**2<2&&o<t.points.length-2||yn(e,l,c,r,a,i)}},Pr=(e,t,r,a,i)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const l=t.points[o],c=t.points[o+1];(c.x-l.x)**2+(c.y-l.y)**2<2.25&&o<t.points.length-2||Cn(e,l,c,r,a,i)}},Gr=(e,t,r,a,i)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const l=t.points[o],c=t.points[o+1];(c.x-l.x)**2+(c.y-l.y)**2<1&&o<t.points.length-2||wn(e,l,c,r,a,i)}},Fr=(e,t,r,a,i,o)=>{if(e.lineCap="round",e.lineJoin="round",e.lineWidth=i,e.strokeStyle=mn(r,a),o==="solid"){if(e.setLineDash([]),e.beginPath(),t.points.length>0){e.moveTo(t.points[0].x,t.points[0].y);for(let g=1;g<t.points.length;g++){const x=t.points[g],h=t.points[g-1];Math.abs(x.x-h.x)<.5&&Math.abs(x.y-h.y)<.5&&g<t.points.length-1||e.lineTo(x.x,x.y)}}e.stroke();return}const l=o==="dotted",c=l?.1:i*3,p=i*2;if(e.setLineDash([c,p]),e.lineCap=l?"round":"butt",e.beginPath(),t.points.length>0){e.moveTo(t.points[0].x,t.points[0].y);for(let g=1;g<t.points.length;g++)e.lineTo(t.points[g].x,t.points[g].y)}e.stroke(),e.setLineDash([])},St=(e,t,r=!1)=>{if(t.points.length<2)return;e.save();const a=t.opacity!==void 0?t.opacity/100:1,i=r?"#FFD700":t.color,o=t.brushStyle||"hard",l=t.lineType||"solid",c=t.brushSize;if(r){e.strokeStyle="rgba(255, 215, 0, 0.5)",e.lineWidth=c+6,e.lineCap="round",e.lineJoin="round",e.setLineDash([]),e.beginPath(),e.moveTo(t.points[0].x,t.points[0].y);for(let p=1;p<t.points.length;p++)e.lineTo(t.points[p].x,t.points[p].y);e.stroke()}switch(o){case"pencil":Ir(e,t,i,a,c,l);break;case"calligraphy":Rr(e,t,i,a,c);break;case"oil":zr(e,t,i,a,c);break;case"watercolor":Pr(e,t,i,a,c);break;case"splatter":Gr(e,t,i,a,c);break;case"hard":default:Fr(e,t,i,a,c,l);break}e.restore()},Dr=(e,t,r,a,i,o,l,c,p)=>{e.save(),e.strokeStyle=c,e.lineWidth=p,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t,r),e.lineTo(a,i),e.lineTo(o,l),e.stroke(),e.restore()},Yr=(e,t,r,a,i,o,l,c,p=0,g=0)=>{const x=a-t,h=i-r,d=Math.sqrt(x*x+h*h);if(d===0)return;const s=x/d,u=h/d,f=p,C=g,v=d-f-C;if(v<=0)return;const w=t+s*f,M=r+u*f;if(e.strokeStyle=c,e.lineWidth=l,e.lineCap="butt",o==="dashed"){const L=Math.max(l*3,12),k=Math.max(l*2,8),S=L+k,E=Math.max(2,Math.floor(v/S));if(E===2&&v<S*2){const X=v*.35,N=v*.3;e.setLineDash([X,N]),e.lineDashOffset=0,e.beginPath(),e.moveTo(w,M),e.lineTo(a-s*C,i-u*C),e.stroke(),e.setLineDash([]);return}const R=(v-E*L)/E,$=L+R,b=E*$-R,z=(v-b)/2;e.setLineDash([L,R]),e.lineDashOffset=-z,e.beginPath(),e.moveTo(w,M),e.lineTo(a-s*C,i-u*C),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}else if(o==="dotted"){const L=Math.max(l*2.5,10),k=l/2,S=Math.max(2,Math.floor(v/L)+1),E=v/(S-1);e.fillStyle=c;for(let I=0;I<S;I++){const R=I*E,$=w+s*R,b=M+u*R;e.beginPath(),e.arc($,b,k,0,Math.PI*2),e.fill()}}else e.beginPath(),e.moveTo(w,M),e.lineTo(a-s*C,i-u*C),e.stroke()},Ht=(e,t,r,a,i)=>{if(t.length<2)return;if(r==="solid"){e.strokeStyle=i,e.lineWidth=a,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let d=1;d<t.length;d++)e.lineTo(t[d].x,t[d].y);e.closePath(),e.stroke();return}let o=0;const l=[],c=t.length;for(let d=0;d<c;d++){const s=t[d],u=t[(d+1)%c],f=u.x-s.x,C=u.y-s.y,v=Math.sqrt(f*f+C*C);l.push(v),o+=v}if(o<20){e.strokeStyle=i,e.lineWidth=a,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let d=1;d<t.length;d++)e.lineTo(t[d].x,t[d].y);e.closePath(),e.stroke();return}const p=Math.max(a*2.5,Math.min(a*4,o/25)),g=Math.max(a*1.5,p*.5),x=p+g,h=p*.7;if(r==="dotted"){const d=a/2,s=Math.max(a*2,o/60);e.fillStyle=i;for(let u=0;u<c;u++){const f=t[u];e.beginPath(),e.arc(f.x,f.y,d,0,Math.PI*2),e.fill()}for(let u=0;u<c;u++){const f=t[u],C=l[u];if(C<=0)continue;const v=t[(u+1)%c].x-f.x,w=t[(u+1)%c].y-f.y,M=v/C,L=w/C,k=1,S=Math.floor(C/s)+1,E=Math.max(k,S-1),I=C/E;for(let R=1;R<E;R++){const $=R*I,b=f.x+M*$,P=f.y+L*$;e.beginPath(),e.arc(b,P,d,0,Math.PI*2),e.fill()}}}else if(r==="dashed"){e.strokeStyle=i,e.lineWidth=a,e.lineCap="butt";for(let d=0;d<c;d++){const s=t[d],u=t[d===0?c-1:d-1],f=t[(d+1)%c],C=l[d===0?c-1:d-1],v=l[d];if(C>0&&v>0){const w=u.x-s.x,M=u.y-s.y,L=f.x-s.x,k=f.y-s.y,S=Math.min(C,v)/3,E=Math.min(h,S),I=s.x+w/C*E,R=s.y+M/C*E,$=s.x+L/v*E,b=s.y+k/v*E;Dr(e,I,R,s.x,s.y,$,b,i,a)}}for(let d=0;d<c;d++){const s=t[d],u=t[(d+1)%c],f=l[d];if(f===0)continue;const C=u.x-s.x,v=u.y-s.y,w=C/f,M=v/f,L=l[d===0?c-1:d-1],k=f,S=l[(d+1)%c],E=Math.min(L,k)/3,I=Math.min(h,E),R=Math.min(k,S)/3,$=Math.min(h,R),b=f-I-$;if(b<=p/2)continue;const P=s.x+w*I,z=s.y+M*I,X=Math.floor(b/x);if(X===0){const W=b/2-p/2;if(W>=0){const _=P+w*W,j=z+M*W,te=P+w*(W+p),V=z+M*(W+p);e.beginPath(),e.moveTo(_,j),e.lineTo(te,V),e.stroke()}continue}const q=(b-X*p)/X,O=p+q,H=X*O-q,D=(b-H)/2;e.setLineDash([p,q]),e.lineDashOffset=-D,e.beginPath(),e.moveTo(P,z),e.lineTo(u.x-w*$,u.y-M*$),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}}},jt=(e,t,r,a,i,o,l,c,p)=>{if(i==="butt")return 0;const g=l.replace("#",""),x=parseInt(g.slice(0,2),16),h=parseInt(g.slice(2,4),16),d=parseInt(g.slice(4,6),16);e.fillStyle=`rgba(${x}, ${h}, ${d}, ${c})`,e.strokeStyle=`rgba(${x}, ${h}, ${d}, ${c})`,e.save(),e.translate(t,r),e.rotate(a);let s=0;if(i==="round"){const u=Math.max(p*.75,4);e.beginPath(),e.arc(0,0,u,0,Math.PI*2),e.fill(),s=0}else i==="arrow"?(e.beginPath(),e.moveTo(0,0),e.lineTo(-o,-o*.5),e.lineTo(-o,o*.5),e.closePath(),e.fill(),s=o):i==="circle"?(e.beginPath(),e.arc(0,0,o*.4,0,Math.PI*2),e.fill(),s=o*.2):i==="bar"&&(e.lineWidth=p,e.lineCap="butt",e.beginPath(),e.moveTo(0,-o*.6),e.lineTo(0,o*.6),e.stroke(),s=0);return e.restore(),s},bn=(e,t,r=!1)=>{e.save();const a=t.fontWeight||"normal",i=t.fontStyle||"normal",o=t.fontSize||16,l=t.fontFamily||"Arial";e.font=`${i} ${a} ${o}px ${l}`,e.textAlign="left",e.textBaseline="top";const c=(t.text||"").split(`
`),p=(t.lineHeight||1.5)*o,g=t.letterSpacing||0;let x=0;c.forEach(M=>{let L=0;g!==0?L=e.measureText(M).width+g*(M.length-1):L=e.measureText(M).width,L>x&&(x=L)});const h=c.length>0?(c.length-1)*p+o:0,d=2;if(t.rotation){const M=t.x+x/2,L=t.y+h/2;e.translate(M,L),e.rotate(t.rotation*Math.PI/180),e.translate(-M,-L)}const s=t.opacity!==void 0?t.opacity/100:1,f=(t.color||"#000000").replace("#",""),C=parseInt(f.slice(0,2),16),v=parseInt(f.slice(2,4),16),w=parseInt(f.slice(4,6),16);return e.fillStyle=`rgba(${C}, ${v}, ${w}, ${s})`,c.forEach((M,L)=>{const k=t.y+L*p;if(g!==0){let S=t.x;for(let E=0;E<M.length;E++){const I=M[E];e.fillText(I,S,k);const R=e.measureText(I).width;S+=R+g}}else e.fillText(M,t.x,k);if(t.textDecoration==="underline"){const S=g!==0?e.measureText(M).width+g*(M.length-1):e.measureText(M).width;e.beginPath(),e.moveTo(t.x,k+o),e.lineTo(t.x+S,k+o),e.strokeStyle=e.fillStyle,e.lineWidth=Math.max(1,o/16),e.stroke()}}),r&&(e.fillStyle="rgba(255, 215, 0, 0.2)",e.fillRect(t.x-d,t.y-d,x+d*2,h+d*2)),e.restore(),t},Mn=(e,t,r)=>{e.save();const a=t.x,i=t.y,o=t.radius||20,l=t.rotation||0;e.translate(a,i),e.rotate(l*Math.PI/180);const c=t.borderWidth||2,p=(t.borderOpacity!==void 0?t.borderOpacity:100)/100,g=r?"#FFD700":t.borderColor||"#000000",x=t.borderStyle||"solid",h=g.replace("#",""),d=parseInt(h.slice(0,2),16),s=parseInt(h.slice(2,4),16),u=parseInt(h.slice(4,6),16),f=(t.colorOpacity!==void 0?t.colorOpacity:100)/100,v=(t.color||"#ff0000").replace("#",""),w=parseInt(v.slice(0,2),16),M=parseInt(v.slice(2,4),16),L=parseInt(v.slice(4,6),16);if(e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.fillStyle=`rgba(${w}, ${M}, ${L}, ${f})`,e.fill(),e.strokeStyle=`rgba(${d}, ${s}, ${u}, ${p})`,e.lineWidth=c,x==="dashed"){const z=2*Math.PI*o,X=Math.max(c*2.5,Math.min(c*4,z/25)),N=Math.max(c*1.5,X*.5),q=X+N,O=Math.floor(z/q);if(O<3||z<30)e.setLineDash([]),e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();else{const D=(z-O*X)/O,W=(X+D)/o,_=X/o,j=X+D,te=O*j-D,U=(z-te)/2/o;e.lineCap="butt";for(let J=0;J<O;J++){const K=U+J*W,ne=K+_;e.beginPath(),e.arc(0,0,o,K,ne),e.stroke()}}}else if(x==="dotted"){const z=2*Math.PI*o,X=c/2,N=Math.max(c*2,z/60),q=Math.max(8,Math.round(z/N)),O=2*Math.PI/q;e.fillStyle=`rgba(${d}, ${s}, ${u}, ${p})`;for(let H=0;H<q;H++){const F=H*O,D=o*Math.cos(F),W=o*Math.sin(F);e.beginPath(),e.arc(D,W,X,0,Math.PI*2),e.fill()}}else e.setLineDash([]),e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();e.setLineDash([]);const k=t.number!==void 0?t.number:1,S=(t.numberOpacity!==void 0?t.numberOpacity:100)/100,I=(t.numberColor||"#ffffff").replace("#",""),R=parseInt(I.slice(0,2),16),$=parseInt(I.slice(2,4),16),b=parseInt(I.slice(4,6),16),P=Math.max(12,o*.8);if(e.fillStyle=`rgba(${R}, ${$}, ${b}, ${S})`,e.font=`bold ${P}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(k.toString(),0,0),t.topText){const z=(t.textOpacity!==void 0?t.textOpacity:100)/100,N=(t.textColor||"#000000").replace("#",""),q=parseInt(N.slice(0,2),16),O=parseInt(N.slice(2,4),16),H=parseInt(N.slice(4,6),16),F=t.textSize||Math.max(10,o*.5),W=-(o+5);e.fillStyle=`rgba(${q}, ${O}, ${H}, ${z})`,e.font=`${F}px Arial`,e.textAlign="center",e.textBaseline="bottom",e.fillText(t.topText,0,W)}if(t.cards&&t.cards.length>0){const z=o*.35,X=z*1.4,N=4,q=Math.PI/4,O=Math.cos(q)*o*.7,H=Math.sin(q)*o*.7;t.cards.forEach((F,D)=>{const W=F.color||(F==="yellow"?"#FFD700":"#FF0000"),_=F.cardBorderColor||"#000000",j=O-D*(z+N);e.fillStyle=W,e.fillRect(j-z,H,z,X),e.strokeStyle=_,e.lineWidth=1.5,e.setLineDash([]),e.strokeRect(j-z,H,z,X)})}e.restore()},vn=(e,t,r=!1)=>{const a=t.radius||10,i=r?"#FFD700":"black",o=r?3:2;e.fillStyle="white",e.strokeStyle=i,e.lineWidth=o,e.beginPath(),e.arc(t.x,t.y,a,0,Math.PI*2),e.fill(),e.stroke(),e.beginPath(),e.arc(t.x-a/3,t.y-a/3,a/3,0,Math.PI*2),e.fillStyle="black",e.fill()},ht=(e,t,r=!1,a="#000")=>{if(e.save(),t.rotation)if(t.shape==="line"||t.shape==="arrow"){const s=(t.startX+t.endX)/2,u=(t.startY+t.endY)/2;e.translate(s,u),e.rotate(t.rotation*Math.PI/180),e.translate(-s,-u)}else{const s=t.x+(t.width||50)/2,u=t.y+(t.height||30)/2;e.translate(s,u),e.rotate(t.rotation*Math.PI/180),e.translate(-s,-u)}const i=r?"#FFD700":t.borderColor||t.color||a,o=t.borderOpacity!==void 0?t.borderOpacity/100:1,l=t.borderWidth||2,c=t.borderStyle||"solid",p=i.replace("#",""),g=parseInt(p.slice(0,2),16),x=parseInt(p.slice(2,4),16),h=parseInt(p.slice(4,6),16),d=`rgba(${g}, ${x}, ${h}, ${o})`;if(e.strokeStyle=d,e.lineWidth=l,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),t.shape==="line"||t.shape==="arrow"){const s=t.endX-t.startX,u=t.endY-t.startY,f=Math.atan2(u,s),C=t.lineCapStart||"butt",v=t.lineCapEnd||(t.shape==="arrow"?"arrow":"butt"),w=Math.max(l*2.5,10);let M=0;C==="arrow"?M=w:C==="circle"?M=w*.2:(C==="round"||C==="bar")&&(M=0);let L=0;if(v==="arrow"?L=w:v==="circle"?L=w*.2:(v==="round"||v==="bar")&&(L=0),c==="dashed"||c==="dotted")Yr(e,t.startX,t.startY,t.endX,t.endY,c,l,d,M,L);else{const k=t.startX+Math.cos(f)*M,S=t.startY+Math.sin(f)*M,E=t.endX-Math.cos(f)*L,I=t.endY-Math.sin(f)*L;e.lineCap="butt",e.beginPath(),e.moveTo(k,S),e.lineTo(E,I),e.stroke()}C!=="butt"&&jt(e,t.startX,t.startY,f+Math.PI,C,w,i,o,l),v!=="butt"&&jt(e,t.endX,t.endY,f,v,w,i,o,l)}else{const s=t.x,u=t.y,f=t.width!==void 0?t.width:50,C=t.height!==void 0?t.height:30,v=t.ignoreMinSize?0:10,w=Math.abs(f)<v?f<0?-v:v:f,M=Math.abs(C)<v?C<0?-v:v:C,L=t.fillColor||"#ffffff",k=t.fillOpacity!==void 0?t.fillOpacity/100:0;if(k>0){const S=L.replace("#",""),E=parseInt(S.slice(0,2),16),I=parseInt(S.slice(2,4),16),R=parseInt(S.slice(4,6),16);if(e.fillStyle=`rgba(${E}, ${I}, ${R}, ${k})`,e.beginPath(),t.shape==="rectangle")e.rect(s,u,w,M);else if(t.shape==="circle"){const $=s+w/2,b=u+M/2,P=Math.abs(w)/2,z=Math.abs(M)/2;e.ellipse($,b,P,z,0,0,2*Math.PI)}else t.shape==="triangle"&&(e.moveTo(s+w/2,u),e.lineTo(s,u+M),e.lineTo(s+w,u+M),e.closePath());e.fill()}if(c==="dashed"||c==="dotted"){if(t.shape==="rectangle"){const S=[{x:s,y:u},{x:s+w,y:u},{x:s+w,y:u+M},{x:s,y:u+M}];Ht(e,S,c,l,d)}else if(t.shape==="triangle"){const S=[{x:s+w/2,y:u},{x:s,y:u+M},{x:s+w,y:u+M}];Ht(e,S,c,l,d)}else if(t.shape==="circle"){const S=s+w/2,E=u+M/2,I=Math.abs(w)/2,R=Math.abs(M)/2,$=Math.pow(I-R,2)/Math.pow(I+R,2),b=Math.PI*(I+R)*(1+3*$/(10+Math.sqrt(4-3*$)));if(e.beginPath(),c==="dashed"){const P=Math.max(l*2.5,Math.min(l*4,b/25)),z=Math.max(l*1.5,P*.5),X=P+z,N=Math.max(2,Math.round(b/X)),O=b/N-P;e.setLineDash([P,O]),e.lineCap="butt"}else if(c==="dotted"){const P=Math.max(l*2,b/60),z=Math.round(b/P),X=b/z;e.setLineDash([0,X]),e.lineCap="round"}e.ellipse(S,E,I,R,0,0,2*Math.PI),e.stroke(),e.setLineDash([]),e.lineCap="butt"}}else{if(e.beginPath(),t.shape==="rectangle")e.rect(s,u,w,M);else if(t.shape==="circle"){const S=s+w/2,E=u+M/2,I=Math.abs(w)/2,R=Math.abs(M)/2;e.ellipse(S,E,I,R,0,0,2*Math.PI)}else t.shape==="triangle"&&(e.moveTo(s+w/2,u),e.lineTo(s,u+M),e.lineTo(s+w,u+M),e.closePath());e.stroke()}}e.restore()},$n=(e,t,r=!1)=>{const a=t.size||30;e.font=`${a}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(t.icon,t.x,t.y),r&&(e.strokeStyle="#FFD700",e.lineWidth=3,e.strokeRect(t.x-a/2,t.y-a/2,a,a))},Xr=(e,t)=>{if(e.save(),e.strokeStyle="#FFD700",e.lineWidth=2,e.setLineDash([5,5]),t.rotatedCorners&&t.rotatedCorners.length===4){e.beginPath(),e.moveTo(t.rotatedCorners[0].x,t.rotatedCorners[0].y);for(let r=1;r<t.rotatedCorners.length;r++)e.lineTo(t.rotatedCorners[r].x,t.rotatedCorners[r].y);e.closePath(),e.stroke()}else e.strokeRect(t.x,t.y,t.width,t.height);e.setLineDash([]),e.restore()},Zr=(e,t,r)=>{const a=gn(t,r),i=8;e.fillStyle="white",e.strokeStyle="#FFD700",e.lineWidth=2,Object.entries(a).forEach(([o,l])=>{e.save(),e.fillRect(l.x-i/2,l.y-i/2,i,i),e.strokeRect(l.x-i/2,l.y-i/2,i,i),e.restore()})},Ln=(e,t)=>{if(!e||!t)return null;const r=le(e,t);if(!r)return null;const a=(e.brushSize||e.borderWidth||10)*2+20,i=2e3;let o=r.width+a*2,l=r.height+a*2;if(o>i||l>i)return null;const c=document.createElement("canvas");c.width=o,c.height=l;const p=c.getContext("2d"),g=r.x-a,x=r.y-a;if(p.translate(-g,-x),e.type==="path")St(p,e,!1);else if(e.type==="player")Mn(p,e,!1);else if(e.type==="ball")vn(p,e,!1);else if(e.type==="shape"){const h=e.borderColor||e.color||"#000000";ht(p,e,!1,h)}else e.type==="figure"?$n(p,e,!1):e.type==="text"&&bn(p,e,!1);return{canvas:c,offsetX:g,offsetY:x,originalWidth:o,originalHeight:l}},Ar=(e,t)=>{const r=m.useRef(null),a=m.useRef(null),i=m.useRef(new Map),o=m.useCallback((d,s=!1)=>{if(!d)return;d.getContext("2d").clearRect(0,0,d.width,d.height)},[]),l=m.useCallback(()=>{const d=t.current;if(!d)return;d.getContext("2d").clearRect(0,0,d.width,d.height)},[t]),c=(d,s,u,f)=>{if(d.save(),s.type==="path")St(d,s,f);else switch(s.type){case"player":Mn(d,s,f);break;case"ball":vn(d,s,f);break;case"shape":ht(d,s,f,s.borderColor||u);break;case"figure":$n(d,s,f);break;case"text":bn(d,s,f);break}d.restore()},p=m.useCallback((d,s,u,f,C)=>{if(f){c(d,s,u,!0);return}const v=JSON.stringify(s),w=i.current.get(s.id);if(w&&w.hash===v&&w.cache){const{cache:L}=w,k=le(s,C);if(k){const S=(s.brushSize||s.borderWidth||10)*2+20;d.drawImage(L.canvas,k.x-S,k.y-S)}else c(d,s,u,!1);return}const M=Ln(s,C);if(M){i.current.set(s.id,{hash:v,cache:M});const L=le(s,C);if(L){const k=(s.brushSize||s.borderWidth||10)*2+20;d.drawImage(M.canvas,L.x-k,L.y-k)}}else c(d,s,u,!1)},[]),g=m.useCallback((d,s,u,f,C,v=null,w=new Set)=>{const M=e.current;if(!M)return;o(M,!0);const L=M.getContext("2d");d.forEach((k,S)=>{const E=`path_${S}`;if(E===v||w.has(E)||k.points.length<2)return;const I={...k,type:"path",id:E};p(L,I,f,!1,M)}),s.forEach(k=>{k.id===v||w.has(k.id)||p(L,k,f,!1,M)})},[e,o,p]),x=m.useCallback((d,s,u=!0)=>{const f=t.current;if(!f||!d)return;const C=f.getContext("2d");if(C.clearRect(0,0,f.width,f.height),C.save(),d._cache){const{canvas:v}=d._cache,w=le(d,f),M=(d.brushSize||d.borderWidth||10)*2+20;C.drawImage(v,w.x-M,w.y-M)}else c(C,d,s,u);if(u){const v=le(d,f);v&&(Xr(C,v),d._cache||Zr(C,v,d))}C.restore()},[t]),h=m.useCallback((d,s,u=!1)=>{const f=t.current;if(!f)return;const C=f.getContext("2d");if(u||C.clearRect(0,0,f.width,f.height),d&&d.points&&d.points.length>=2)if(u){const v=d.points.length,w=d.points[v-2],M=d.points[v-1];Er(C,w,M,{color:d.color,opacity:d.opacity,brushSize:d.brushSize,brushStyle:d.brushStyle})}else St(C,d,!1);if(s){const{type:v,start:w,end:M,borderColor:L,borderOpacity:k,borderStyle:S,borderWidth:E,fillColor:I,fillOpacity:R,lineCapStart:$,lineCapEnd:b}=s;if(v==="line"||v==="arrow"){const P={type:"shape",shape:v,startX:w.x,startY:w.y,endX:M.x,endY:M.y,borderColor:L,borderOpacity:k,borderWidth:E,borderStyle:S,lineCapStart:$,lineCapEnd:b,rotation:0};ht(C,P,!1,L)}else{const P=M.x-w.x,z=M.y-w.y,X={type:"shape",shape:v,x:w.x,y:w.y,width:P,height:z,borderColor:L,borderOpacity:k,borderWidth:E,borderStyle:S,fillColor:I,fillOpacity:R,rotation:0,ignoreMinSize:!0};ht(C,X,!1,L)}}},[t]);return{redrawStatic:g,drawLiveLayer:h,drawSingleObjectOnActive:x,clearActiveLayer:l,tempObjectDataRef:r,tempPathDataRef:a}},Hr=()=>{const e=m.useRef(null),t=m.useRef({x:0,y:0}),r=m.useRef(null),[a,i]=m.useState("default");return{draggedObjectRef:e,dragOffsetRef:t,cursorStyle:a,setCursorStyle:i,startDrag:(h,d,s)=>{const u=le(h,s);let f;h.type==="path"?f={...h,points:h.points.map(v=>({...v}))}:f={...h};const C=Ln(h,s);if(e.current={...f,_cache:C},r.current={mouseStart:{...d},objectStart:h.type==="path"?{...h,points:h.points.map(v=>({...v}))}:{...h},cachedBounds:u||{x:0,y:0,width:0,height:0}},h.type==="path")t.current={x:d.x-u.points[0].x,y:d.y-u.points[0].y};else if(h.type==="shape"&&(h.shape==="line"||h.shape==="arrow")){const v=(h.startX+h.endX)/2,w=(h.startY+h.endY)/2;t.current={x:d.x-v,y:d.y-w}}else h.x!==void 0&&h.y!==void 0?t.current={x:d.x-h.x,y:d.y-h.y}:t.current={x:d.x-(u?u.x:0),y:d.y-(u?u.y:0)}},updateDragPosition:(h,d,s)=>{if(!e.current||!r.current)return null;const{objectStart:u,cachedBounds:f}=r.current,C=h.x-r.current.mouseStart.x,v=h.y-r.current.mouseStart.y;let w=e.current;if(w.type==="path"){const E=u.points,I=w.points;for(let R=0;R<E.length;R++)I[R].x=E[R].x+C,I[R].y=E[R].y+v}else w.type==="shape"&&(w.shape==="line"||w.shape==="arrow")?(w.startX=u.startX+C,w.endX=u.endX+C,w.startY=u.startY+v,w.endY=u.endY+v):(w.x=u.x+C,w.y=u.y+v);const M=f.x+f.width/2+C,L=f.y+f.height/2+v;let k=0,S=0;if(M<0?k=0-M:M>d&&(k=d-M),L<0?S=0-L:L>s&&(S=s-L),k!==0||S!==0)if(w.type==="path")for(let E=0;E<w.points.length;E++)w.points[E].x+=k,w.points[E].y+=S;else w.type==="shape"&&(w.shape==="line"||w.shape==="arrow")?(w.startX+=k,w.endX+=k,w.startY+=S,w.endY+=S):(w.x+=k,w.y+=S);return w},endDrag:()=>{const h=e.current;return h&&h._cache&&delete h._cache,e.current=null,r.current=null,t.current={x:0,y:0},h},updateCursor:(h,d,s,u,f,C)=>{if(e.current)return;if(u){const w=u?u.startsWith("path_")?{...s[parseInt(u.replace("path_",""))],type:"path",id:u}:d.find(M=>M.id===u):null;if(w){const M=le(w,C);if(M){const L=At(h.x,h.y,M,w);if(L){i(L.cursor);return}if(pt(h.x,h.y,M)){i("move");return}}}}const v=fn(h.x,h.y,d,s,f,C);i(v?"pointer":"default")},checkForHandle:(h,d,s)=>{const u=le(d,s);return u?At(h.x,h.y,u,d):null},checkIfPointInSelectedBounds:(h,d,s)=>{if(!d)return!1;const u=le(d,s);return u&&pt(h.x,h.y,u)}}},nt=10,jr=8,Wr=70,_r=5,Vr=50,Or=(e,t,r,a,i)=>{const o=i*Math.PI/180,l=Math.cos(o),c=Math.sin(o),p=r/2,g=a/2;return[{x:-p,y:-g},{x:p,y:-g},{x:p,y:g},{x:-p,y:g}].map(h=>({x:e+(h.x*l-h.y*c),y:t+(h.x*c+h.y*l)}))},Ze=(e,t,r,a,i)=>{const o=i*Math.PI/180,l=Math.cos(o),c=Math.sin(o),p=e-r,g=t-a;return{x:r+(p*l-g*c),y:a+(p*c+g*l)}},Nr=()=>{const e=m.useRef(null);return{resizeHandleRef:e,startResize:(i,o,l,c)=>{let p,g;o.type==="player"||o.type==="ball"?(p=(o.radius||20)*2,g=(o.radius||20)*2):o.type==="figure"?(p=o.size||30,g=o.size||30):o.type==="text"?(p=c.originalWidth||c.width,g=c.originalHeight||c.height):(p=o.width!==void 0?o.width:c.width,g=o.height!==void 0?o.height:c.height);let x,h;o.shape==="line"||o.shape==="arrow"?(x=(o.startX+o.endX)/2,h=(o.startY+o.endY)/2):o.type==="player"||o.type==="ball"||o.type==="figure"?(x=o.x,h=o.y):o.type==="text"?(x=c.centerX,h=c.centerY):(x=o.x+p/2,h=o.y+g/2);const d=o.rotation||0,s=Or(x,h,p,g,d);let u={x,y:h},f={x:l.x,y:l.y};i.name==="topLeft"?(f=s[0],u=s[2]):i.name==="topRight"?(f=s[1],u=s[3]):i.name==="bottomRight"?(f=s[2],u=s[0]):i.name==="bottomLeft"?(f=s[3],u=s[1]):i.name==="top"?(f={x:(s[0].x+s[1].x)/2,y:(s[0].y+s[1].y)/2},u={x:(s[2].x+s[3].x)/2,y:(s[2].y+s[3].y)/2}):i.name==="bottom"?(f={x:(s[2].x+s[3].x)/2,y:(s[2].y+s[3].y)/2},u={x:(s[0].x+s[1].x)/2,y:(s[0].y+s[1].y)/2}):i.name==="left"?(f={x:(s[0].x+s[3].x)/2,y:(s[0].y+s[3].y)/2},u={x:(s[1].x+s[2].x)/2,y:(s[1].y+s[2].y)/2}):i.name==="right"&&(f={x:(s[1].x+s[2].x)/2,y:(s[1].y+s[2].y)/2},u={x:(s[0].x+s[3].x)/2,y:(s[0].y+s[3].y)/2});const C=f.x-l.x,v=f.y-l.y,w=f.x-u.x,M=f.y-u.y,L=w*w+M*M,k=Ze(l.x,l.y,x,h,-d),S=k.x-x,E=k.y-h;let I=0;["player","ball","figure"].includes(o.type)&&(I=Math.sqrt(Math.pow(l.x-x,2)+Math.pow(l.y-h,2))),e.current={handle:i.name,object:{...o},startPos:l,anchorPoint:u,startVectorX:w,startVectorY:M,startLengthSq:L,pressOffsetX:C,pressOffsetY:v,startFontSize:o.fontSize||16,startX:o.x,startY:o.y,lineStartX:o.startX,lineStartY:o.startY,lineEndX:o.endX,lineEndY:o.endY,startCenterX:x,startCenterY:h,rotation:d,startLocalLeft:-Math.abs(p)/2,startLocalRight:Math.abs(p)/2,startLocalTop:-Math.abs(g)/2,startLocalBottom:Math.abs(g)/2,startFlippedX:p<0,startFlippedY:g<0,isHandleLeft:S<0,isHandleRight:S>0,isHandleTop:E<0,isHandleBottom:E>0,startWidth:p,startHeight:g,startDistanceFromCenter:I}},updateResize:i=>{if(!e.current)return null;const{handle:o,object:l,startFontSize:c,startCenterX:p,startCenterY:g,startDistanceFromCenter:x,rotation:h,lineStartX:d,lineStartY:s,lineEndX:u,lineEndY:f,startPos:C,startLocalLeft:v,startLocalRight:w,startLocalTop:M,startLocalBottom:L,isHandleLeft:k,isHandleRight:S,isHandleTop:E,isHandleBottom:I,startFlippedX:R,startFlippedY:$,startWidth:b,startHeight:P,anchorPoint:z,startVectorX:X,startVectorY:N,startLengthSq:q,pressOffsetX:O,pressOffsetY:H}=e.current;let F={...l};if(l.type==="text"){const D=i.x+O,W=i.y+H,_=D-z.x,j=W-z.y,te=_*X+j*N;let V=te/q;if(!["topLeft","topRight","bottomLeft","bottomRight"].includes(o)){const re=Math.sqrt(q),Re=Math.sqrt(_*_+j*j),Pe=te>0?1:-1;V=Re/re*Pe}const oe=8;let U=c*V;U<oe&&(U=oe,V=oe/c),V<.1&&(V=.1),F.fontSize=c*V;const J=b*V,K=P*V,ne=X*V,ae=N*V,de=z.x+ne*.5,ie=z.y+ae*.5;return F.x=de-J/2,F.y=ie-K/2,F.width=J,F.height=K,e.current.object=F,F}if(l.type==="shape"&&(l.shape==="line"||l.shape==="arrow")){const D=Ze(d,s,p,g,h),W=Ze(u,f,p,g,h);let _={...D},j={...W};["start","topLeft","left","top"].includes(o)?_={x:i.x,y:i.y}:j={x:i.x,y:i.y};const te=(_.x+j.x)/2,V=(_.y+j.y)/2,oe=Ze(_.x,_.y,te,V,-h),U=Ze(j.x,j.y,te,V,-h);return F.startX=oe.x,F.startY=oe.y,F.endX=U.x,F.endY=U.y,e.current.object=F,F}if(["player","ball","figure"].includes(l.type)){const D=Math.sqrt(Math.pow(i.x-p,2)+Math.pow(i.y-g,2)),W=x>0?D/x:1,_=Math.abs(b);if(l.type==="player"){const j=_/2*W;F.radius=Math.max(jr,Math.min(Wr,j))}else if(l.type==="ball"){const j=_/2*W;F.radius=Math.max(_r,Math.min(Vr,j))}else F.size=Math.max(10,_*W);return e.current.object=F,F}if(l.type==="shape"){const D=h*Math.PI/180,W=Math.cos(-D),_=Math.sin(-D),j=i.x-C.x,te=i.y-C.y,V=j*W-te*_,oe=j*_+te*W;let U=v,J=w,K=M,ne=L;k?U+=V:S&&(J+=V),E?K+=oe:I&&(ne+=oe);let ae=R,de=$;U>J&&([U,J]=[J,U],ae=!ae),K>ne&&([K,ne]=[ne,K],de=!de);let ie=J-U,re=ne-K;ie<nt&&(ie=nt,k?U=J-ie:J=U+ie),re<nt&&(re=nt,E?K=ne-re:ne=K+re);const Re=(U+J)/2,Pe=(K+ne)/2,ut=Re*Math.cos(D)-Pe*Math.sin(D),qe=Re*Math.sin(D)+Pe*Math.cos(D),Ue=p+ut,Je=g+qe;let Ge=ae?-ie:ie,Ke=de?-re:re;return F.width=Ge,F.height=Ke,F.x=Ue-Ge/2,F.y=Je-Ke/2,e.current.object=F,F}return F},endResize:()=>{const i=e.current;return e.current=null,i?i.object:null}}},qr=()=>{const e=m.useRef(!1),t=m.useRef([]),r=m.useRef(null),a=m.useRef(!1);return{drawingRef:e,currentPathRef:t,shapeStartRef:r,isDrawingShapeRef:a,startDrawing:h=>{e.current=!0,t.current=[{x:h.x,y:h.y}]},continueDrawing:h=>e.current?(t.current.push({x:h.x,y:h.y}),t.current):null,endDrawing:()=>{const h=t.current;return e.current=!1,t.current=[],h.length>1?h:null},startShape:h=>{a.current=!0,r.current=h},getShapePreview:h=>!a.current||!r.current?null:{start:r.current,end:h},endShape:(h,d)=>{if(!a.current||!r.current)return null;const s=r.current;let u=null;if(d==="line"||d==="arrow")Math.sqrt(Math.pow(h.x-s.x,2)+Math.pow(h.y-s.y,2))>5&&(u={startX:s.x,startY:s.y,endX:h.x,endY:h.y});else{const f=h.x-s.x,C=h.y-s.y;Math.abs(f)>5&&Math.abs(C)>5&&(u={x:s.x,y:s.y,width:f,height:C})}return a.current=!1,r.current=null,u},cancelDrawing:()=>{e.current=!1,t.current=[],a.current=!1,r.current=null}}},Ur=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,Jr=y.div`
  border: 2px solid #ddd;
  margin-top: 10px;
  background: white;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  position: relative;
  
  cursor: ${e=>e.$isTextInput?"default":e.$activeTool==="drawing"||e.$activeTool==="eraser"||e.$activeTool==="text"?"none":e.cursor};
`,Kr=y.canvas`
  display: block;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`,Qr=y.canvas`
  display: block;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  touch-action: none; 
`,eo=y.textarea`
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
`,to=y.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  
  border-radius: ${e=>e.isText?"0":"50%"};
  border: ${e=>e.isText?"none":`2px solid ${e.isEraser?"#000":e.color}`};
  background-color: ${e=>e.isEraser?"rgba(255, 255, 255, 0.8)":"transparent"}; 
  
  width: ${e=>e.isText?"auto":`${e.size}px`};
  height: ${e=>e.isText?"auto":`${e.size}px`};
  
  transform: translate(-50%, -50%);
  
  box-shadow: ${e=>e.isText?"none":"0 0 0 1px rgba(255, 255, 255, 0.5), 0 0 4px rgba(0,0,0,0.2)"};
  
  display: ${e=>e.$visible?"flex":"none"};
  align-items: center;
  justify-content: center;
  transition: width 0.1s, height 0.1s;

  font-family: 'Times New Roman', serif;
  font-weight: bold;
  font-size: 24px;
  color: ${e=>e.color||"black"};
  text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
  white-space: nowrap;
`,no=({fieldSize:e,fieldType:t})=>{const r=m.useRef(null),a=m.useRef(null),i=m.useRef(null),o=m.useRef(null),l=m.useRef(!1),c=m.useRef(null),p=m.useRef(null),g=m.useRef(null),x=m.useRef(null),h=m.useRef(new Set),[d,s]=m.useState({width:800,height:500}),[u,f]=m.useState(!1),[C,v]=m.useState(""),[w,M]=m.useState({x:0,y:0}),[L,k]=m.useState(!1),S=m.useRef(!1),E=m.useRef([]),I=m.useRef([]),R=m.useRef(null),$=pe(),{activeTool:b,drawColor:P,brushSize:z,eraserSize:X,brushOpacity:N,brushStyle:q,lineType:O,paths:H,objects:F,selectedObjectId:D,textFontSize:W,textColor:_,shapeBorderColor:j,shapeBorderOpacity:te,shapeFillColor:V,shapeFillOpacity:oe,shapeBorderWidth:U,shapeBorderStyle:J,shapeLineCapStart:K,shapeLineCapEnd:ne}=Te(B=>B.tacticsBoard);m.useEffect(()=>{p.current=D},[D]);const{redrawStatic:ae,drawLiveLayer:de,drawSingleObjectOnActive:ie,clearActiveLayer:re,tempObjectDataRef:Re,tempPathDataRef:Pe}=Ar(r,a),{cursorStyle:ut,setCursorStyle:qe,startDrag:Ue,updateDragPosition:Je,endDrag:Ge,updateCursor:Ke,checkForHandle:Bn,draggedObjectRef:we,checkIfPointInSelectedBounds:Tn}=Hr(),{resizeHandleRef:be,startResize:En,updateResize:kt,endResize:Bt}=Nr(),{drawingRef:Me,startDrawing:In,continueDrawing:Tt,endDrawing:Et,shapeStartRef:Fe,isDrawingShapeRef:ve,startShape:zn,endShape:It}=qr(),Rn=1500,Pn=640,Gn=1400,gt=e.width/e.height,zt=m.useCallback(()=>{var ft;const B=i.current;if(!B)return{width:800,height:500};const G=((ft=B.parentElement)==null?void 0:ft.clientWidth)||window.innerWidth,Z=G/Rn,T=Gn*Z,Y=Pn*Z,A=T,Q=A/gt,xe=Y,Ye=xe*gt;let ue,$e;Q<=Y?(ue=A,$e=Q):(ue=Ye,$e=xe);const Xe=G*.95;if(ue>Xe){const tt=Xe/ue;ue=Xe,$e=$e*tt}return{width:Math.floor(ue),height:Math.floor($e)}},[gt]),Qe=B=>{const G=a.current;if(!G)return{x:0,y:0};let Z,T;B.changedTouches&&B.changedTouches.length>0?(Z=B.changedTouches[0].clientX,T=B.changedTouches[0].clientY):B.touches&&B.touches.length>0?(Z=B.touches[0].clientX,T=B.touches[0].clientY):(Z=B.clientX,T=B.clientY);const Y=G.getBoundingClientRect(),A=G.width/Y.width,Q=G.height/Y.height;return{x:(Z-Y.left)*A,y:(T-Y.top)*Q}},Rt=B=>({x:Math.max(0,Math.min(B.x,d.width)),y:Math.max(0,Math.min(B.y,d.height))}),xt=m.useCallback(B=>{const G=x.current||B,Z=B.x-G.x,T=B.y-G.y,Y=Math.sqrt(Z*Z+T*T),A=Math.max(1,Math.ceil(Y/(X/5)));let Q=!1;const xe=X/2*.85;for(let Ye=0;Ye<=A;Ye++){const ue=Ye/A,$e=G.x+Z*ue,Xe=G.y+T*ue;xn($e,Xe,F,H,xe,r.current).forEach(tt=>{h.current.has(tt.id)||(h.current.add(tt.id),Q=!0)})}Q&&requestAnimationFrame(()=>{ae(H,F,b,P,z,null,h.current)}),x.current=B},[F,H,X,b,P,z,ae]),De=m.useCallback(B=>{if((b==="drawing"||b==="eraser"||b==="text")&&g.current&&!u){let T,Y;B.touches&&B.touches.length>0?(T=B.touches[0].clientX,Y=B.touches[0].clientY):(T=B.clientX,Y=B.clientY),g.current.style.left=`${T}px`,g.current.style.top=`${Y}px`}if(!we.current&&!be.current&&!Me.current&&!ve.current&&!(b==="eraser"&&S.current))return;B.cancelable&&B.preventDefault();const G=Qe(B),Z=Rt(G);if((we.current||be.current||b==="eraser")&&!S.current&&(S.current=!0),b==="eraser"&&S.current)xt(Z);else if(be.current){const T=kt(G);T&&ie(T,P,!0)}else if(we.current){const T=Je(G,d.width,d.height);T&&ie(T,P,!0)}else if(Me.current){const T=Tt(Z);T&&T.length>=2&&de({id:"live_drawing",type:"path",points:T,color:P,brushSize:z,opacity:N,brushStyle:q,lineType:O},null,O==="solid")}else if(ve.current&&Fe.current){const T=b.replace("shape_","");de(null,{type:T,start:Fe.current,end:Z,borderColor:j,borderOpacity:te,borderStyle:J,borderWidth:U,fillColor:V,fillOpacity:oe,lineCapStart:K,lineCapEnd:ne},!1)}},[d,we,be,Me,ve,Je,kt,de,ie,Tt,b,P,z,X,Fe,j,te,J,U,V,oe,N,q,O,K,ne,xt,u]),et=m.useCallback(B=>{if(window.removeEventListener("mousemove",De),window.removeEventListener("mouseup",et),window.removeEventListener("touchmove",De),window.removeEventListener("touchend",et),S.current=!1,x.current=null,b==="eraser"&&h.current.size>0){const T=Array.from(h.current);$(An(T)),h.current.clear()}const G=Qe(B),Z=Rt(G);if(!p.current&&!Me.current&&!ve.current&&re(),Me.current){const T=Et();T&&$(Hn({points:T,color:P,brushSize:z,opacity:N,brushStyle:q,lineType:O})),re()}if(ve.current&&Fe.current){const T=b.replace("shape_",""),Y=It(Z,T);if(Y){const A={type:"shape",shape:T,...Y,borderColor:j,borderOpacity:te,borderWidth:U,borderStyle:J,color:j};T==="line"||T==="arrow"?(A.lineCapStart=K,A.lineCapEnd=ne):(A.fillColor=V,A.fillOpacity=oe),$(mt(A))}re()}if(we.current){const T=Ge();if(T)if(T.type==="path"){const Y=parseInt(T.id.replace("path_",""));$(ke({index:Y,updates:T}))}else $(Ne({id:T.id,updates:T}))}if(be.current){const T=Bt();if(T&&T.id)if(T.type==="path"){const Y=parseInt(T.id.replace("path_",""));$(ke({index:Y,updates:T}))}else $(Ne({id:T.id,updates:T}))}qe("default")},[De,Me,ve,Fe,we,be,b,Et,It,Ge,Bt,$,P,z,j,te,U,J,V,oe,K,ne,qe,re]),Pt=B=>{if(B.button!==void 0&&B.button!==0)return;window.addEventListener("mousemove",De),window.addEventListener("mouseup",et),window.addEventListener("touchmove",De,{passive:!1}),window.addEventListener("touchend",et);const G=Qe(B),Z=r.current;if(u){Gt();return}if(b==="cursor"){const T=D?D.startsWith("path_")?{...H[parseInt(D.replace("path_",""))],type:"path",id:D}:F.find(A=>A.id===D):null;if(T){const A=le(T,Z);if(A){const Q=Bn(G,T,Z);if(Q){En(Q,T,G,A);return}if(Tn(G,T,Z)){Ue(T,G,Z);return}}}const Y=fn(G.x,G.y,F,H,z,Z);Y?(p.current=Y.id,$(Ft(Y.id)),le(Y,Z)&&Ue(Y,G,Z)):(p.current=null,$(Ve()))}else if(b==="drawing")In(G),de({id:"live_drawing",type:"path",points:[G],color:P,brushSize:z,opacity:N,brushStyle:q,lineType:O},null,!1);else if(b==="eraser")S.current=!0,x.current=G,xt(G);else if(b.startsWith("shape_"))zn(G);else if(b.startsWith("figure_")){const T={player:"👤",goalkeeper:"🧤",coach:"🧠",referee:"⚖️",goal:"🥅",cone:"🟨"},Y=b.replace("figure_","");$(mt({type:"figure",figureType:Y,icon:T[Y],x:G.x,y:G.y,size:30}))}else if(b==="ball")$(mt({type:"ball",x:G.x,y:G.y,radius:10}));else if(b==="text"){const T=`text_${Date.now()}_${Math.random()}`;f(!0),v(""),M(G),c.current=T,$(Ft(T)),p.current=T}},Fn=B=>{if(we.current||be.current||Me.current||ve.current||S.current||B.touches)return;(b==="drawing"||b==="eraser"||b==="text")&&g.current&&!u&&(g.current.style.left=`${B.clientX}px`,g.current.style.top=`${B.clientY}px`);const G=Qe(B),Z=r.current;b==="cursor"&&Ke(G,F,H,p.current,z,Z)},Dn=()=>k(!0),Yn=()=>k(!1);m.useEffect(()=>{const B=()=>{const G=zt();s(G)};return B(),window.addEventListener("resize",B),()=>window.removeEventListener("resize",B)},[zt]),m.useEffect(()=>{const B=r.current,G=a.current,Z=i.current;B&&G&&Z&&(B.width=d.width,B.height=d.height,B.style.width=`${d.width}px`,B.style.height=`${d.height}px`,G.width=d.width,G.height=d.height,G.style.width=`${d.width}px`,G.style.height=`${d.height}px`,Z.style.width=`${d.width}px`,Z.style.height=`${d.height}px`,l.current||($(jn({canvasWidth:d.width,canvasHeight:d.height})),l.current=!0),ae(H,F,b,P,z,D))},[d,$,ae,H,F,D,b,P,z]),m.useEffect(()=>{if(S.current)return;const B=E.current,G=I.current,Z=R.current;let T=!1,Y=null;if(D&&D===Z){if(D.startsWith("path_")){const A=parseInt(D.replace("path_",""));H[A]!==G[A]&&(T=!0,Y={...H[A],type:"path",id:D})}else{const A=F.find(xe=>xe.id===D),Q=B.find(xe=>xe.id===D);A!==Q&&(T=!0,Y=A)}(F.length!==B.length||H.length!==G.length)&&(T=!1)}if(T&&Y)ie(Y,P,!0);else if(ae(H,F,b,P,z,D,h.current),D){let A=null;if(D.startsWith("path_")){const Q=parseInt(D.replace("path_",""));H[Q]&&(A={...H[Q],type:"path",id:D})}else A=F.find(Q=>Q.id===D);A?ie(A,P,!0):re()}else re();E.current=F,I.current=H,R.current=D},[H,F,D,ae,ie,re,b,P,z]),m.useEffect(()=>{d.width>0&&d.height>0&&$(Wn({canvasWidth:d.width,canvasHeight:d.height}))},[d,$]),m.useEffect(()=>{if(u&&o.current&&a.current){const B=o.current;setTimeout(()=>{B.focus(),B.select()},0);const G=a.current,Z=G.getBoundingClientRect(),T=G.width/Z.width,Y=G.height/Z.height,A=w.x/T,Q=w.y/Y;B.style.left=`${A}px`,B.style.top=`${Q}px`,B.style.fontSize=`${W/Y}px`,B.style.color=_,B.style.width="auto",B.style.height="auto"}},[u,w,_,W]),m.useEffect(()=>{const B=G=>{G.key==="Escape"&&!u&&($(Ve()),p.current=null)};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[D,u,$]),m.useEffect(()=>{$(Ve()),p.current=null,b==="shape_arrow"&&$(un("arrow"))},[b,$]);const Xn=B=>{v(B.target.value),o.current&&(o.current.style.height="auto",o.current.style.height=o.current.scrollHeight+"px")},Gt=()=>{const B=C.trim();B&&$(_n({id:c.current,x:w.x,y:w.y,text:B,fontSize:W,color:_})),f(!1),v(""),c.current=null,$(Oe("cursor"))},Zn=B=>{B.key==="Escape"&&(B.preventDefault(),f(!1),v(""),$(Ve()),p.current=null,$(Oe("cursor")))};return n.jsxs(Ur,{children:[n.jsx(to,{ref:g,size:b==="eraser"?X:z,color:b==="text"?_:P,$visible:(b==="drawing"||b==="eraser"||b==="text"&&!u)&&L,isEraser:b==="eraser",isText:b==="text",children:b==="text"&&"T"}),n.jsxs(Jr,{ref:i,cursor:ut,$activeTool:b,$isTextInput:u,onMouseEnter:Dn,onMouseLeave:Yn,children:[n.jsx(Kr,{ref:r}),n.jsx(Qr,{ref:a,onMouseDown:Pt,onTouchStart:Pt,onMouseMove:Fn}),u&&n.jsx(eo,{ref:o,value:C,onChange:Xn,onBlur:Gt,onKeyDown:Zn,placeholder:"Введіть текст",rows:1})]})]})},ro=e=>m.createElement("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32",xmlSpace:"preserve",...e},m.createElement("path",{className:"st0",d:"M20,29h-8c-2.2,0-4-1.8-4-4V7c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v18C24,27.2,22.2,29,20,29z"}),m.createElement("circle",{className:"st0",cx:16,cy:16,r:4}),m.createElement("line",{className:"st0",x1:8,y1:16,x2:24,y2:16}),m.createElement("rect",{x:13,y:3,className:"st0",width:6,height:4}),m.createElement("rect",{x:13,y:25,className:"st0",width:6,height:4})),oo=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),io=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"})),ao=e=>m.createElement("svg",{fill:"#000000",height:"800px",width:"800px",baseProfile:"tiny",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"-1117 883 256 256",xmlSpace:"preserve",...e},m.createElement("path",{d:"M-1016.4,1091.3l113.9-113.9c13.5-13.5,13.5-35.3,0-48.8l-32.5-32.5c-13.5-13.5-35.3-13.5-48.8,0l-113.9,113.9 c-13.5,13.5-13.5,35.3,0,48.8l32.5,32.5C-1051.7,1104.8-1029.9,1104.8-1016.4,1091.3z M-1057.1,1083.2l-32.5-32.5 c-9-9-9-23.6,0-32.5l67.6-68.1l65.1,65.1l-67.6,68.1c-4.3,4.3-10.1,6.7-16.3,6.7C-1046.9,1089.9-1052.7,1087.6-1057.1,1083.2z  M-954.3,1129.7c0,3.5-2.8,6.3-6.3,6.3h-89.3c-3.5,0-6.3-2.8-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3h89.3 C-957.1,1123.4-954.3,1126.2-954.3,1129.7z M-882.3,1129.7c0,3.4-2.9,6.3-6.3,6.3c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3 C-885.2,1123.4-882.3,1126.2-882.3,1129.7z M-907.5,1129.7c0,3.4-2.9,6.3-6.3,6.3c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3 C-910.4,1123.4-907.5,1126.2-907.5,1129.7z M-932.7,1129.7c0,3.4-2.9,6.3-6.3,6.3c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3 C-935.6,1123.4-932.7,1126.2-932.7,1129.7z M-944.5,1107.9c0,3.5-2.8,6.3-6.3,6.3h-51.1c-3.5,0-6.3-2.8-6.3-6.3 c0-3.5,2.8-6.3,6.3-6.3h51.1C-947.4,1101.6-944.5,1104.4-944.5,1107.9z M-894.9,1107.9c0,3.4-2.9,6.3-6.3,6.3 c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3C-897.8,1101.6-894.9,1104.4-894.9,1107.9z M-920.1,1107.9c0,3.4-2.9,6.3-6.3,6.3 c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3C-923,1101.6-920.1,1104.4-920.1,1107.9z M-869.6,1107.9c0,3.4-2.9,6.3-6.3,6.3 c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3C-872.6,1101.6-869.6,1104.4-869.6,1107.9z"})),so=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("circle",{cx:12,cy:12,r:9,strokeWidth:2}),m.createElement("path",{d:"M18 18L6 6",strokeWidth:2})),Sn=e=>m.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},m.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fillRule:"evenodd"},m.createElement("g",{id:"Arrow",transform:"translate(-528.000000, 0.000000)",fillRule:"nonzero"},m.createElement("g",{id:"forward_2_line",transform:"translate(528.000000, 0.000000)"},m.createElement("path",{d:"M17.954,11.6767 C16.6468,9.47493 14.2448,8 11.5,8 C7.35786,8 4,11.3579 4,15.5 C4,16.0523 3.55228,16.5 3,16.5 C2.44772,16.5 2,16.0523 2,15.5 C2,10.2533 6.25329,6 11.5,6 C14.6814,6 17.4961,7.56337 19.22,9.96279 L19.757,6.91751 C19.8529,6.37361 20.3715,6.01044 20.9154,6.10635 C21.4593,6.20225 21.8225,6.72091 21.7266,7.2648 L20.6847,13.1736 C20.6386,13.4348 20.4907,13.667 20.2735,13.8192 C19.9896,14.0179 19.6122,14.0542 19.2977,13.9445 L13.6174,12.9429 C13.0735,12.847 12.7103,12.3284 12.8062,11.7845 C12.9021,11.2406 13.4208,10.8774 13.9647,10.9733 L17.954,11.6767 Z",id:"\\u8DEF\\u5F84"}))))),lo=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.93417 2C7.95604 2 7.97799 2 8 2L16.0658 2C16.9523 1.99995 17.7161 1.99991 18.3278 2.08215C18.9833 2.17028 19.6117 2.36902 20.1213 2.87868C20.631 3.38835 20.8297 4.0167 20.9179 4.67221C21.0001 5.28388 21.0001 6.0477 21 6.9342L21 7.95C21 8.50229 20.5523 8.95 20 8.95C19.4477 8.95 19 8.50229 19 7.95V7.00001C19 6.02893 18.9979 5.40122 18.9357 4.93871C18.8774 4.50497 18.7832 4.36902 18.7071 4.2929C18.631 4.21677 18.495 4.12263 18.0613 4.06431C17.5988 4.00213 16.9711 4 16 4H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V4H8C7.02893 4 6.40122 4.00213 5.93871 4.06431C5.50497 4.12263 5.36902 4.21677 5.2929 4.2929C5.21677 4.36902 5.12263 4.50497 5.06431 4.93871C5.00213 5.40122 5 6.02893 5 7.00001V7.95C5 8.50229 4.55229 8.95 4 8.95C3.44772 8.95 3 8.50229 3 7.95V7.00001C3 6.97799 3 6.95604 3 6.93418C2.99995 6.04769 2.99991 5.28387 3.08215 4.67221C3.17028 4.0167 3.36902 3.38835 3.87868 2.87868C4.38835 2.36902 5.0167 2.17028 5.67221 2.08215C6.28387 1.99991 7.04769 1.99995 7.93417 2Z"}),m.createElement("path",{d:"M7 21H17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),kn=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.51192 4.43057C6.82641 4.161 7.29989 4.19743 7.56946 4.51192L13.5695 11.5119C13.8102 11.7928 13.8102 12.2072 13.5695 12.4881L7.56946 19.4881C7.29989 19.8026 6.82641 19.839 6.51192 19.5695C6.19743 19.2999 6.161 18.8264 6.43057 18.5119L12.0122 12L6.43057 5.48811C6.161 5.17361 6.19743 4.70014 6.51192 4.43057ZM10.5121 4.43068C10.8266 4.16111 11.3001 4.19753 11.5697 4.51202L17.5697 11.512C17.8104 11.7929 17.8104 12.2073 17.5697 12.4882L11.5697 19.4882C11.3001 19.8027 10.8266 19.8391 10.5121 19.5696C10.1976 19.3 10.1612 18.8265 10.4308 18.512L16.0124 12.0001L10.4308 5.48821C10.1612 5.17372 10.1976 4.70024 10.5121 4.43068Z"})),co=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("rect",{x:3,y:5,width:18,height:14,rx:2,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ho=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),po=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.0001 5.94363L4.76627 18H19.2339L12.0001 5.94363ZM10.7138 4.20006C11.2964 3.22905 12.7037 3.22905 13.2863 4.20006L21.4032 17.7282C22.0031 18.728 21.2829 20 20.117 20H3.88318C2.71724 20 1.99706 18.728 2.59694 17.7282L10.7138 4.20006Z"})),uo=e=>m.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z"})),go=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M6 12H18M18 12L13 7M18 12L13 17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),xo=y.div`
  position: relative;
  display: inline-block;
`,fo=y.button`
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
`,mo=y.div`
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
`,yo=y.button`
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
`,Wt=y.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,yt=[{id:"rectangle",name:"Прямокутник",icon:n.jsx(co,{}),style:{stroke:"currentColor",fill:"none"}},{id:"circle",name:"Коло",icon:n.jsx(ho,{}),style:{stroke:"currentColor",fill:"none"}},{id:"triangle",name:"Трикутник",icon:n.jsx(po,{}),style:{fill:"currentColor",stroke:"none"}},{id:"line",name:"Лінія",icon:n.jsx(uo,{}),style:{fill:"currentColor",stroke:"none"}},{id:"arrow",name:"Стрілка",icon:n.jsx(go,{}),style:{stroke:"currentColor",fill:"none"}}],Co=({activeTool:e,onSelectShape:t})=>{const[r,a]=m.useState(!1),[i,o]=m.useState({top:0,left:0}),l=m.useRef(null),c=m.useRef(null),p=e.startsWith("shape_"),g=p?e.replace("shape_",""):null,x=yt.find(C=>C.id===g),h=()=>{if(c.current){const C=c.current.getBoundingClientRect();o({top:C.bottom+window.scrollY,left:C.left+window.scrollX})}a(!r)},d=C=>{t(C),a(!1)},s=C=>{l.current&&!l.current.contains(C.target)&&a(!1)};m.useEffect(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}),[]);const u=()=>{const C=x||yt[0];return n.jsx(Wt,{children:Dt.cloneElement(C.icon,C.style)})},f=C=>Dt.cloneElement(C.icon,C.style);return n.jsxs(xo,{ref:l,children:[n.jsx(fo,{ref:c,title:"Геометричні фігури",onClick:h,active:p,children:u()}),n.jsx(mo,{isOpen:r,style:{top:i.top,left:i.left},children:yt.map(C=>n.jsx(yo,{onClick:()=>d(C),title:C.name,children:n.jsx(Wt,{children:f(C)})},C.id))})]})},wo=y.div`
  position: relative;
  display: inline-block;
`,bo=y.button`
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
`,Mo=y.div`
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
`,vo=y.button`
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
`,_t=[{id:"player",name:"Гравець",icon:"👤"},{id:"goalkeeper",name:"Воротар",icon:"🧤"},{id:"coach",name:"Тренер",icon:"🧠"},{id:"referee",name:"Суддя",icon:"⚖️"},{id:"goal",name:"Ворота",icon:"🥅"},{id:"cone",name:"Стійка",icon:"🟨"}],$o=({activeTool:e,onSelectFigure:t})=>{const[r,a]=m.useState(!1),[i,o]=m.useState({top:0,left:0}),l=m.useRef(null),c=m.useRef(null),p=e.startsWith("figure_"),g=p?e.replace("figure_",""):null,x=_t.find(f=>f.id===g),h=()=>{if(c.current){const f=c.current.getBoundingClientRect();o({top:f.bottom+window.scrollY,left:f.left+window.scrollX})}a(!r)},d=f=>{t(f),a(!1)},s=f=>{l.current&&!l.current.contains(f.target)&&a(!1)};m.useEffect(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}),[]);const u=()=>x?x.icon:"👤";return n.jsxs(wo,{ref:l,children:[n.jsx(bo,{ref:c,title:"Спортивні фігури",onClick:h,active:p,children:u()}),n.jsx(Mo,{isOpen:r,style:{top:i.top,left:i.left},children:_t.map(f=>n.jsx(vo,{onClick:()=>d(f),title:f.name,children:f.icon},f.id))})]})},Vt=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M9.19762 11.9582L9.91426 11.737L9.19762 11.9582ZM9.54558 10.8683L9.08995 10.2726L9.54558 10.8683ZM9.91896 14.2952L9.20232 14.5164L9.91896 14.2952ZM14.0579 14.2952L13.3413 14.074L14.0579 14.2952ZM14.4313 10.8683L13.9757 11.4641V11.4641L14.4313 10.8683ZM14.7793 11.9582L15.4959 12.1794L14.7793 11.9582ZM12.5948 9.46375L13.0504 8.86802L12.5948 9.46375ZM11.3821 9.46375L11.8377 10.0595L11.3821 9.46375ZM20.1847 17.75C20.5989 17.75 20.9347 17.4142 20.9347 17C20.9347 16.5858 20.5989 16.25 20.1847 16.25V17.75ZM14.7793 19.7351L14.0677 19.4982L14.7793 19.7351ZM13.4801 21.2631C13.3492 21.6561 13.5617 22.0807 13.9547 22.2116C14.3477 22.3424 14.7724 22.1299 14.9033 21.7369L13.4801 21.2631ZM3.99769 16.25C3.58348 16.25 3.24769 16.5858 3.24769 17C3.24769 17.4142 3.58348 17.75 3.99769 17.75V16.25ZM9.40314 19.7351L10.1147 19.4982L9.40314 19.7351ZM9.27917 21.7369C9.41002 22.1299 9.83469 22.3424 10.2277 22.2116C10.6207 22.0807 10.8332 21.6561 10.7024 21.2631L9.27917 21.7369ZM8.22071 17.3775L7.78185 17.9857L8.22071 17.3775ZM5.556 5.45942C5.4489 5.05928 5.03772 4.82173 4.63759 4.92882C4.23746 5.03591 3.9999 5.44709 4.10699 5.84723L5.556 5.45942ZM5.24951 7.21519L4.52501 7.40909V7.40909L5.24951 7.21519ZM3.59168 11.5885L3.17811 10.9628L3.17811 10.9628L3.59168 11.5885ZM1.62739 11.9879C1.28185 12.2163 1.18689 12.6816 1.4153 13.0271C1.64372 13.3727 2.109 13.4676 2.45454 13.2392L1.62739 11.9879ZM19.934 5.84732C20.0411 5.44719 19.8035 5.036 19.4034 4.92891C19.0033 4.82182 18.5921 5.05938 18.485 5.45951L19.934 5.84732ZM18.7915 7.21528L18.067 7.02137L18.7915 7.21528ZM20.4493 11.5886L20.0357 12.2143L20.4493 11.5886ZM21.5864 13.2393C21.932 13.4677 22.3973 13.3728 22.6257 13.0272C22.8541 12.6817 22.7591 12.2164 22.4136 11.988L21.5864 13.2393ZM16.0903 3.83623C16.4288 3.5975 16.5096 3.12956 16.2709 2.79107C16.0322 2.45257 15.5642 2.3717 15.2257 2.61044L16.0903 3.83623ZM14.3376 4.15456L14.7699 4.76746L14.3376 4.15456ZM9.66562 4.10403L9.22021 4.70744V4.70744L9.66562 4.10403ZM8.61539 2.39659C8.28213 2.15059 7.81255 2.22133 7.56656 2.55459C7.32056 2.88784 7.3913 3.35742 7.72456 3.60341L8.61539 2.39659ZM14.7793 11.3678L14.0627 11.589L14.7793 11.3678ZM9.19762 11.3678L9.91426 11.589L9.19762 11.3678ZM21.2269 12C21.2269 17.1095 17.0899 21.25 11.9885 21.25V22.75C17.92 22.75 22.7269 17.9362 22.7269 12H21.2269ZM11.9885 21.25C6.88701 21.25 2.75 17.1095 2.75 12H1.25C1.25 17.9362 6.05695 22.75 11.9885 22.75V21.25ZM2.75 12C2.75 6.89055 6.88701 2.75 11.9885 2.75V1.25C6.05695 1.25 1.25 6.06376 1.25 12H2.75ZM11.9885 2.75C17.0899 2.75 21.2269 6.89055 21.2269 12H22.7269C22.7269 6.06376 17.92 1.25 11.9885 1.25V2.75ZM12.1392 10.0595L13.9757 11.4641L14.887 10.2726L13.0504 8.86802L12.1392 10.0595ZM14.0626 11.737L13.3413 14.074L14.7746 14.5164L15.4959 12.1794L14.0626 11.737ZM13.1036 14.25H10.8733V15.75H13.1036V14.25ZM10.6356 14.074L9.91426 11.737L8.48098 12.1794L9.20232 14.5164L10.6356 14.074ZM10.0012 11.4641L11.8377 10.0595L10.9265 8.86802L9.08995 10.2726L10.0012 11.4641ZM20.1847 16.25H18.5696V17.75H20.1847V16.25ZM14.0677 19.4982L13.4801 21.2631L14.9033 21.7369L15.4909 19.972L14.0677 19.4982ZM18.5696 16.25C17.892 16.25 17.3207 16.2489 16.8555 16.302C16.3711 16.3574 15.9264 16.4781 15.5228 16.7693L16.4006 17.9857C16.5201 17.8994 16.6846 17.8313 17.0258 17.7923C17.3863 17.7511 17.8574 17.75 18.5696 17.75V16.25ZM15.4909 19.972C15.7161 19.2956 15.8662 18.8484 16.0193 18.5189C16.1643 18.2069 16.2809 18.072 16.4006 17.9857L15.5228 16.7693C15.1193 17.0605 14.8645 17.4444 14.659 17.8868C14.4615 18.3117 14.282 18.8545 14.0677 19.4982L15.4909 19.972ZM3.99769 17.75H5.61279V16.25H3.99769V17.75ZM8.69154 19.972L9.27917 21.7369L10.7024 21.2631L10.1147 19.4982L8.69154 19.972ZM5.61279 17.75C6.325 17.75 6.79611 17.7511 7.15658 17.7923C7.49784 17.8313 7.66228 17.8994 7.78185 17.9857L8.65958 16.7693C8.25598 16.4781 7.81137 16.3574 7.32692 16.302C6.86168 16.2489 6.29041 16.25 5.61279 16.25V17.75ZM10.1147 19.4982C9.90043 18.8545 9.7209 18.3117 9.52346 17.8868C9.31791 17.4445 9.06311 17.0605 8.65958 16.7693L7.78185 17.9857C7.90148 18.072 8.01815 18.2069 8.16314 18.5189C8.31624 18.8484 8.46634 19.2956 8.69154 19.972L10.1147 19.4982ZM4.10699 5.84723L4.52501 7.40909L5.97401 7.02128L5.556 5.45942L4.10699 5.84723ZM3.17811 10.9628L1.62739 11.9879L2.45454 13.2392L4.00526 12.2142L3.17811 10.9628ZM4.52501 7.40909C4.70933 8.09777 4.83021 8.55381 4.88378 8.91324C4.93452 9.25362 4.9114 9.43069 4.85896 9.56902L6.26156 10.1007C6.43795 9.63541 6.43932 9.17465 6.3674 8.69211C6.29831 8.22862 6.14941 7.67663 5.97401 7.02128L4.52501 7.40909ZM4.00526 12.2142C4.57077 11.8404 5.04807 11.5262 5.407 11.2252C5.78074 10.9119 6.08516 10.5661 6.26156 10.1007L4.85896 9.56902C4.80654 9.70729 4.70659 9.855 4.44321 10.0759C4.16501 10.3091 3.77244 10.57 3.17811 10.9628L4.00526 12.2142ZM18.485 5.45951L18.067 7.02137L19.516 7.40918L19.934 5.84732L18.485 5.45951ZM20.0357 12.2143L21.5864 13.2393L22.4136 11.988L20.8629 10.9629L20.0357 12.2143ZM18.067 7.02137C17.8916 7.67672 17.7427 8.22871 17.6736 8.6922C17.6017 9.17474 17.603 9.6355 17.7794 10.1008L19.182 9.56911C19.1296 9.43078 19.1065 9.25372 19.1572 8.91333C19.2108 8.5539 19.3316 8.09787 19.516 7.40918L18.067 7.02137ZM20.8629 10.9629C20.2685 10.5701 19.876 10.3092 19.5978 10.0759C19.3344 9.85509 19.2344 9.70739 19.182 9.56911L17.7794 10.1008C17.9558 10.5662 18.2602 10.912 18.634 11.2253C18.9929 11.5263 19.4702 11.8405 20.0357 12.2143L20.8629 10.9629ZM15.2257 2.61044L13.9054 3.54166L14.7699 4.76746L16.0903 3.83623L15.2257 2.61044ZM10.111 3.50061L8.61539 2.39659L7.72456 3.60341L9.22021 4.70744L10.111 3.50061ZM13.9054 3.54166C13.3231 3.9523 12.9373 4.22303 12.6189 4.39721C12.3174 4.56214 12.1438 4.60125 11.9966 4.59965L11.9803 6.09957C12.478 6.10495 12.9109 5.94721 13.3387 5.7132C13.7496 5.48845 14.2159 5.15817 14.7699 4.76746L13.9054 3.54166ZM9.22021 4.70744C9.76562 5.11004 10.2247 5.45033 10.6306 5.68391C11.0533 5.92712 11.4827 6.09418 11.9803 6.09957L11.9966 4.59965C11.8494 4.59806 11.6767 4.5552 11.3788 4.38379C11.0642 4.20276 10.6843 3.92375 10.111 3.50061L9.22021 4.70744ZM13.9757 11.4641C14.0179 11.4963 14.0475 11.5399 14.0627 11.589L15.4959 11.1465C15.3911 10.807 15.1828 10.4989 14.887 10.2726L13.9757 11.4641ZM14.0627 11.589C14.0773 11.6364 14.0779 11.6876 14.0626 11.737L15.4959 12.1794C15.6023 11.8349 15.5974 11.4754 15.4959 11.1465L14.0627 11.589ZM18.1938 9.14203L14.4923 10.6748L15.0662 12.0607L18.7677 10.5279L18.1938 9.14203ZM13.0504 8.86802C12.7371 8.62838 12.3624 8.50841 11.9885 8.50841V10.0084C12.0419 10.0084 12.0945 10.0253 12.1392 10.0595L13.0504 8.86802ZM11.9885 8.50841C11.6146 8.50841 11.2398 8.62838 10.9265 8.86802L11.8377 10.0595C11.8824 10.0253 11.935 10.0084 11.9885 10.0084V8.50841ZM12.7385 9.25841V5.34961H11.2385V9.25841H12.7385ZM13.3413 14.074C13.3259 14.1241 13.2962 14.166 13.2572 14.1967L14.1852 15.3752C14.4575 15.1608 14.6671 14.8646 14.7746 14.5164L13.3413 14.074ZM13.2572 14.1967C13.214 14.2308 13.1607 14.25 13.1036 14.25V15.75C13.5063 15.75 13.8846 15.6119 14.1852 15.3752L13.2572 14.1967ZM16.5291 16.887L14.2886 14.2954L13.1538 15.2765L15.3944 17.868L16.5291 16.887ZM10.8733 14.25C10.8162 14.25 10.7629 14.2308 10.7197 14.1967L9.79172 15.3752C10.0923 15.6119 10.4706 15.75 10.8733 15.75V14.25ZM10.7197 14.1967C10.6807 14.166 10.651 14.1241 10.6356 14.074L9.20232 14.5164C9.3098 14.8646 9.51943 15.1608 9.79172 15.3752L10.7197 14.1967ZM8.81059 17.8407L10.8456 15.2492L9.66584 14.3228L7.63084 16.9143L8.81059 17.8407ZM9.91426 11.737C9.89899 11.6876 9.89961 11.6364 9.91426 11.589L8.48099 11.1465C8.37949 11.4754 8.37465 11.8349 8.48098 12.1794L9.91426 11.737ZM9.91426 11.589C9.9294 11.5399 9.95905 11.4963 10.0012 11.4641L9.08995 10.2726C8.79412 10.4989 8.58579 10.807 8.48099 11.1465L9.91426 11.589ZM9.48889 10.6766L5.85153 9.14373L5.269 10.526L8.90636 12.0589L9.48889 10.6766Z"})),Lo=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5262 17.4999C18.4887 22.7611 11.7612 24.5637 6.49994 21.5262C1.23873 18.4886 -0.563901 11.7611 2.47367 6.49988C5.51123 1.23866 12.2387 -0.563962 17.4999 2.4736C22.7612 5.51117 24.5638 12.2387 21.5262 17.4999ZM5.84382 7.87995C5.25279 7.64272 4.74291 7.45257 4.3292 7.30543C5.59153 5.24057 7.56267 3.85898 9.74648 3.29362C9.77176 3.62621 9.82851 4.00289 9.93722 4.40861C10.3269 5.86297 11.3579 7.58777 13.75 8.96886C14.0666 9.15165 14.3765 9.31079 14.6793 9.44842C14.4757 10.219 14.1794 11.0351 13.7614 11.8848C13.3566 11.6365 12.936 11.3857 12.5 11.1339C9.85449 9.60655 7.52076 8.55305 5.84382 7.87995ZM12.7587 13.6161C12.3555 13.3682 11.9358 13.1176 11.5 12.866C8.94938 11.3934 6.70297 10.3799 5.09882 9.73602C4.44209 9.47241 3.89359 9.27099 3.47664 9.12556C2.8887 10.8629 2.86217 12.7007 3.33339 14.4015C3.63406 14.2571 3.98864 14.1179 4.39435 14.0092C5.84872 13.6195 7.85792 13.65 10.25 15.0311C10.5667 15.2139 10.8594 15.4027 11.13 15.5961C11.6875 15.0424 12.2384 14.3885 12.7587 13.6161ZM12.6204 16.9341C13.4037 17.8315 13.839 18.756 14.0628 19.5913C14.1715 19.997 14.2283 20.3736 14.2536 20.7061C15.962 20.2638 17.5403 19.3219 18.7509 17.9441C18.4164 17.6557 17.9678 17.2815 17.4112 16.8446C16.6284 16.2301 15.633 15.4925 14.4426 14.6962C13.8639 15.5605 13.2482 16.3006 12.6204 16.9341ZM9.52737 16.9296C9.43788 16.8737 9.34548 16.8182 9.25005 16.7631C7.31205 15.6442 5.84818 15.6902 4.91199 15.9411C4.58 16.03 4.30141 16.1484 4.0805 16.2639C4.53358 17.1073 5.12461 17.8846 5.84359 18.5583C5.87614 18.5513 5.90977 18.5439 5.94444 18.5361C6.44532 18.4223 7.15871 18.2112 7.97658 17.8245C8.4626 17.5947 8.98712 17.3022 9.52737 16.9296ZM7.92672 20.018C8.21347 19.909 8.51642 19.7815 8.83145 19.6326C9.54844 19.2936 10.3256 18.8442 11.1145 18.2503C11.6989 18.9202 11.9873 19.5728 12.131 20.109C12.2199 20.4409 12.2567 20.7413 12.2672 20.9903C10.8031 21.0352 9.31171 20.7231 7.92672 20.018ZM18.6461 15.2714C17.8061 14.612 16.7364 13.8204 15.4558 12.968C15.9672 11.9634 16.3317 10.9922 16.5833 10.0701C17.7521 10.2998 18.7704 10.2145 19.6057 9.99072C20.0114 9.88202 20.3659 9.74284 20.6666 9.59846C21.2688 11.7723 21.0579 14.1701 19.9008 16.2957C19.5666 16.011 19.147 15.6645 18.6461 15.2714ZM16.9702 8.10789C17.8425 8.27902 18.5519 8.20254 19.0881 8.05887C19.42 7.96992 19.6986 7.85154 19.9195 7.73607C19.2263 6.44565 18.2102 5.3101 16.907 4.46319C16.956 4.76614 16.9971 5.09234 17.0257 5.43977C17.0906 6.23015 17.09 7.1278 16.9702 8.10789ZM15.0328 7.39372C15.0854 6.73963 15.0764 6.13922 15.0324 5.60348C14.9583 4.70183 14.7845 3.97847 14.6326 3.4878C14.622 3.45374 14.6116 3.42082 14.6013 3.38905C13.6584 3.10331 12.6898 2.9801 11.7329 3.00943C11.7433 3.2585 11.7801 3.55897 11.8691 3.89097C12.1199 4.82716 12.812 6.11791 14.75 7.23681C14.8454 7.2919 14.9397 7.34416 15.0328 7.39372Z"})),So=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M11.5697 12.5532L12.1617 13.0137V13.0137L11.5697 12.5532ZM11.3142 3.64586L12.0065 3.93432V3.93432L11.3142 3.64586ZM18.555 14.5045C18.8336 14.198 18.811 13.7237 18.5045 13.445C18.198 13.1664 17.7237 13.189 17.445 13.4955L18.555 14.5045ZM17.7087 14.3204L17.1538 13.8159L17.1538 13.8159L17.7087 14.3204ZM21.2426 10.7426L21.7773 10.2166L21.773 10.2123L21.2426 10.7426ZM21.4531 12.026C21.7436 12.3213 22.2184 12.3251 22.5137 12.0346C22.809 11.7442 22.8129 11.2693 22.5224 10.974L21.4531 12.026ZM5.7327 19.0428C5.31848 19.0428 4.9827 19.3786 4.9827 19.7928C4.9827 20.207 5.31848 20.5428 5.7327 20.5428V19.0428ZM3.5 15.75C3.08579 15.75 2.75 16.0858 2.75 16.5C2.75 16.9142 3.08579 17.25 3.5 17.25V15.75ZM8.19231 3.35575C8.35162 2.9734 8.17081 2.5343 7.78846 2.37498C7.40611 2.21567 6.96701 2.39648 6.80769 2.77883L8.19231 3.35575ZM6.80769 15.2885C6.96701 15.6708 7.40611 15.8516 7.78846 15.6923C8.17081 15.533 8.35162 15.0939 8.19231 14.7115L6.80769 15.2885ZM11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5C10.25 6.91421 10.5858 7.25 11 7.25V5.75ZM19.876 16.916C20.1057 17.2607 20.5714 17.3538 20.916 17.124C21.2607 16.8943 21.3538 16.4286 21.124 16.084L19.876 16.916ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75C2.75 6.89137 6.89137 2.75 12 2.75V1.25ZM12 12.75H12.0917V11.25H12V12.75ZM11.408 11.5395L10.9777 12.0928L12.1617 13.0137L12.592 12.4605L11.408 11.5395ZM11.3077 1.71154L10.6219 3.35739L12.0065 3.93432L12.6923 2.28846L11.3077 1.71154ZM17.445 13.4955L17.1538 13.8159L18.2637 14.8249L18.555 14.5045L17.445 13.4955ZM20.708 11.2686L21.4531 12.026L22.5224 10.974L21.7773 10.2167L20.708 11.2686ZM17.1538 13.8159C14.2838 16.9729 9.96086 19.0428 5.7327 19.0428V20.5428C10.4211 20.5428 15.1357 18.2657 18.2637 14.8249L17.1538 13.8159ZM10.6219 3.35739C9.39039 6.31308 9.66695 9.68222 11.364 12.3975L12.636 11.6025C11.1965 9.29929 10.9619 6.44145 12.0065 3.93432L10.6219 3.35739ZM10.9777 12.0928C9.18293 14.4003 6.42334 15.75 3.5 15.75V17.25C6.88622 17.25 10.0828 15.6866 12.1617 13.0137L10.9777 12.0928ZM6.80769 2.77883C5.13077 6.80344 5.13077 11.2638 6.80769 15.2885L8.19231 14.7115C6.66923 11.0562 6.66923 7.01114 8.19231 3.35575L6.80769 2.77883ZM11 7.25C14.6428 7.25 18.1364 8.6971 20.7123 11.273L21.773 10.2123C18.9158 7.35514 15.0406 5.75 11 5.75V7.25ZM12.0917 12.75C15.2197 12.75 18.1408 14.3133 19.876 16.916L21.124 16.084C19.1107 13.064 15.7213 11.25 12.0917 11.25V12.75Z"})),ko=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.9386 4.73542C13.3511 4.69785 13.716 5.0018 13.7535 5.4143C13.8024 5.95058 13.893 6.53361 14.045 7.14711C14.1447 7.54916 13.8995 7.95586 13.4974 8.05549C13.0954 8.15512 12.6887 7.90997 12.5891 7.50791C12.4172 6.81421 12.3148 6.15558 12.2597 5.55036C12.2221 5.13785 12.5261 4.77299 12.9386 4.73542ZM5.23942 9.18054C5.47821 8.84208 5.94616 8.76129 6.28461 9.00008C6.78119 9.35043 7.30041 9.76836 7.81522 10.2641C8.1136 10.5514 8.12256 11.0262 7.83525 11.3246C7.54794 11.6229 7.07315 11.6319 6.77478 11.3446C6.31949 10.9062 5.85988 10.5362 5.41988 10.2257C5.08142 9.98694 5.00063 9.51899 5.23942 9.18054ZM13.836 8.99599C14.2094 8.81661 14.6574 8.97385 14.8368 9.3472C14.9605 9.60468 15.097 9.86417 15.2474 10.1247C15.3979 10.3852 15.5543 10.6332 15.7155 10.869C15.9491 11.2111 15.8612 11.6778 15.5192 11.9114C15.1772 12.145 14.7105 12.0572 14.4769 11.7151C14.2947 11.4485 14.118 11.1685 13.9484 10.8747C13.7788 10.5809 13.6246 10.2879 13.4848 9.99681C13.3054 9.62346 13.4627 9.17538 13.836 8.99599ZM8.48046 12.088C8.82249 11.8544 9.28917 11.9422 9.52281 12.2843C9.70496 12.5509 9.88164 12.8309 10.0513 13.1247C10.2209 13.4185 10.375 13.7115 10.5149 14.0026C10.6943 14.3759 10.537 14.824 10.1637 15.0034C9.79032 15.1828 9.34223 15.0256 9.16285 14.6522C9.03914 14.3947 8.90267 14.1352 8.75225 13.8747C8.60182 13.6142 8.44534 13.3662 8.28421 13.1304C8.05057 12.7883 8.13843 12.3217 8.48046 12.088ZM16.1644 12.6748C16.4517 12.3765 16.9265 12.3675 17.2249 12.6548C17.6802 13.0932 18.1398 13.4632 18.5798 13.7737C18.9183 14.0125 18.9991 14.4804 18.7603 14.8189C18.5215 15.1573 18.0535 15.2381 17.7151 14.9993C17.2185 14.649 16.6993 14.2311 16.1845 13.7353C15.8861 13.448 15.8771 12.9732 16.1644 12.6748ZM10.5022 15.9439C10.9043 15.8443 11.311 16.0894 11.4106 16.4915C11.5825 17.1852 11.6849 17.8438 11.74 18.4491C11.7776 18.8616 11.4736 19.2264 11.0611 19.264C10.6486 19.3016 10.2837 18.9976 10.2462 18.5851C10.1973 18.0488 10.1067 17.4658 9.95466 16.8523C9.85502 16.4502 10.1002 16.0436 10.5022 15.9439Z"}),m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2859 1.32632C11.0551 1.05591 8.71992 1.48034 6.62484 2.68993C1.4832 5.65846 -0.278462 12.2331 2.69007 17.3747C5.6586 22.5164 12.2332 24.278 17.3748 21.3095C19.4699 20.0999 21.0051 18.2898 21.8863 16.2227C23.1661 13.2206 23.0684 9.67094 21.3096 6.62471C19.5509 3.57847 16.5256 1.71902 13.2859 1.32632ZM13.7802 3.08033C13.7309 3.49161 13.3576 3.7851 12.9463 3.73585C12.5351 3.68661 12.2416 3.31329 12.2908 2.90201C12.297 2.85081 12.3032 2.8013 12.3096 2.75354C10.638 2.6958 8.93097 3.09054 7.37484 3.98897C5.81951 4.88694 4.62362 6.16839 3.83764 7.64494C3.88216 7.66328 3.92814 7.68258 3.97552 7.70286C4.35631 7.86585 4.53288 8.30668 4.36989 8.68748C4.20689 9.06827 3.76606 9.24484 3.38527 9.08184C3.33556 9.06057 3.2878 9.04062 3.24212 9.02195C2.41524 11.457 2.60225 14.2226 3.98911 16.6247C5.37596 19.0268 7.67752 20.5716 10.1998 21.073C10.2065 21.0241 10.2131 20.9728 10.2195 20.9191C10.2687 20.5078 10.6421 20.2143 11.0533 20.2636C11.4646 20.3128 11.7581 20.6861 11.7089 21.0974C11.7027 21.1486 11.6965 21.198 11.6901 21.2458C13.3618 21.3034 15.0695 20.9084 16.6248 20.0104C18.181 19.112 19.3764 17.831 20.1621 16.3545C20.1176 16.3362 20.0716 16.3168 20.0242 16.2966C19.6434 16.1336 19.4668 15.6927 19.6298 15.3119C19.7928 14.9311 20.2336 14.7546 20.6144 14.9176C20.6641 14.9388 20.7119 14.9588 20.7576 14.9775C21.5849 12.5411 21.3972 9.77639 20.0106 7.37471C18.624 4.97302 16.3236 3.42808 13.7999 2.92639C13.7932 2.97529 13.7866 3.02664 13.7802 3.08033Z"})),Bo=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.1665 2.75836L21.2416 8.83351C21.2677 7.81177 21.2303 6.84352 21.1649 5.98862C21.0341 4.27797 19.722 2.96586 18.0114 2.83507C17.1565 2.76971 16.1882 2.7323 15.1665 2.75836ZM21.1071 10.8203L13.1797 2.89285C10.483 3.1978 7.77958 4.04236 5.91097 5.91097C4.04236 7.77958 3.1978 10.483 2.89285 13.1797L10.8203 21.1071C13.517 20.8022 16.2204 19.9576 18.089 18.089C19.9576 16.2204 20.8022 13.517 21.1071 10.8203ZM8.83351 21.2416L2.75836 15.1665C2.7323 16.1882 2.76971 17.1565 2.83507 18.0114C2.96587 19.722 4.27797 21.0341 5.98861 21.1649C6.84352 21.2303 7.81177 21.2677 8.83351 21.2416ZM13.3854 1.36321C15.1096 1.19733 16.7638 1.2353 18.1257 1.33944C20.5746 1.52667 22.4733 3.4254 22.6606 5.87426C22.7647 7.23618 22.8027 8.89045 22.6368 10.6146C22.3524 13.5707 21.4579 16.8414 19.1497 19.1497C16.8414 21.4579 13.5707 22.3524 10.6146 22.6368C8.89045 22.8027 7.23618 22.7647 5.87426 22.6606C3.4254 22.4733 1.52667 20.5746 1.33944 18.1257C1.2353 16.7638 1.19733 15.1096 1.36321 13.3854C1.6476 10.4293 2.54206 7.15857 4.85031 4.85031C7.15857 2.54206 10.4293 1.6476 13.3854 1.36321ZM11.9426 8.1601C12.2355 7.86721 12.7104 7.86721 13.0032 8.1601L13.8914 9.0482L14.7795 8.1601C15.0723 7.86721 15.5472 7.86721 15.8401 8.1601C16.133 8.45299 16.133 8.92787 15.8401 9.22076L14.952 10.1089L15.8401 10.997C16.133 11.2899 16.133 11.7647 15.8401 12.0576C15.5472 12.3505 15.0723 12.3505 14.7795 12.0576L13.8914 11.1695L13.0608 12.0001L13.9489 12.8882C14.2418 13.1811 14.2418 13.656 13.9489 13.9489C13.656 14.2418 13.1811 14.2418 12.8882 13.9489L12.0001 13.0608L11.1695 13.8914L12.0576 14.7795C12.3505 15.0723 12.3505 15.5472 12.0576 15.8401C11.7647 16.133 11.2899 16.133 10.997 15.8401L10.1089 14.952L9.22076 15.8401C8.92787 16.133 8.45299 16.133 8.1601 15.8401C7.86721 15.5472 7.86721 15.0723 8.1601 14.7795L9.0482 13.8914L8.1601 13.0032C7.86721 12.7104 7.86721 12.2355 8.1601 11.9426C8.45299 11.6497 8.92787 11.6497 9.22076 11.9426L10.1089 12.8307L10.9394 12.0001L10.0513 11.112C9.75845 10.8191 9.75845 10.3442 10.0513 10.0513C10.3442 9.75845 10.8191 9.75845 11.112 10.0513L12.0001 10.9394L12.8307 10.1089L11.9426 9.22076C11.6497 8.92787 11.6497 8.45299 11.9426 8.1601Z"})),To=e=>m.createElement("svg",{fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 32 32","data-name":"Layer 1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("rect",{height:1,transform:"translate(20 51) rotate(180)",width:16,x:2,y:25}),m.createElement("rect",{height:1,transform:"translate(26 59) rotate(180)",width:16,x:5,y:29}),m.createElement("rect",{height:1,transform:"translate(39 -8) rotate(90)",width:19,x:14,y:15}),m.createElement("rect",{height:1,transform:"translate(21 10) rotate(90)",width:19,x:-4,y:15}),m.createElement("path",{d:"M24,25H23v2a2,2,0,0,1-2,2H20v1h1a3,3,0,0,0,3-3Z"}),m.createElement("path",{d:"M17,26h1v1a2,2,0,0,0,2,2h1v1H20a3,3,0,0,1-3-3Z"}),m.createElement("path",{d:"M2,26H3v1a2,2,0,0,0,2,2H6v1H5a3,3,0,0,1-3-3Z"}),m.createElement("rect",{height:1,width:6,x:24,y:6}),m.createElement("rect",{height:1,width:19,x:8,y:2}),m.createElement("path",{d:"M5,6H6V5A2,2,0,0,1,8,3H9V2H8A3,3,0,0,0,5,5Z"}),m.createElement("path",{d:"M23,6h1V5a2,2,0,0,1,2-2h1V2H26a3,3,0,0,0-3,3Z"}),m.createElement("path",{d:"M30,6H29V5a2,2,0,0,0-2-2H26V2h1a3,3,0,0,1,3,3Z"})),Eo=y.div`
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
`,Io=y.div`
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
`,zo=y.div`
  padding: 20px 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 2px solid ${({theme:e})=>e.mainBGColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme:e})=>e.ContainerBGColor};
`,Ro=y.h2`
  margin: 0;
  font-size: 24px;
  color: ${({theme:e})=>e.textBlack};
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Po=y.button`
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
`,Go=y.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`,Fo=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  @media (max-width: 768px) {
    gap: 6px;
  }
`,Do=y.button`
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
`,Yo=y.div`
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
`,Xo=y.div`
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
`,Zo=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
`,Ao=y.div`
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
`,Ho=y.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.textBlack};
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,jo=y.div`
  font-size: 13px;
  color: ${({theme:e})=>e.textGray};
  line-height: 1.5;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,Wo=y.div`
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
`,_o=y.div`
  position: relative;
  width: ${e=>{const a=e.fieldWidth,i=e.fieldHeight,o=100/a,l=80/i,c=Math.min(o,l);return`${a*c}px`}};
  height: ${e=>{const a=e.fieldWidth,i=e.fieldHeight,o=100/a,l=80/i,c=Math.min(o,l);return`${i*c}px`}};
  background: ${({theme:e})=>e.greenMain};
  border: 2px solid ${({theme:e})=>e.darkGreen};
  border-radius: 2px;
  
  /* Гарантуємо мінімальний розмір для дуже малих полів */
  min-width: 20px;
  min-height: 20px;
`,Ot=y.div`
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
`,Vo={FOOTBALL:[{id:"football_standard",name:"Стандартне поле",width:105,height:68},{id:"football_small",name:"Мале поле",width:90,height:45},{id:"football_futsal",name:"Футзал",width:40,height:20}],BASKETBALL:[{id:"basketball_nba",name:"NBA",width:28.65,height:15.24},{id:"basketball_fiba",name:"FIBA",width:28,height:15}],VOLLEYBALL:[{id:"volleyball_indoor",name:"Закритий майданчик",width:18,height:9},{id:"volleyball_beach",name:"Пляжний майданчик",width:16,height:8}],TENNIS:[{id:"tennis_singles",name:"Одиночний розряд",width:23.77,height:8.23},{id:"tennis_doubles",name:"Парний розряд",width:23.77,height:10.97}],RUGBY:[{id:"rugby_standard",name:"Регбі (15 гравців)",width:100,height:70},{id:"rugby_sevens",name:"Регбі-7",width:94,height:68}],HANDBALL:[{id:"handball_standard",name:"Гандбол",width:40,height:20}],SHEET:[{id:"a4_portrait",name:"A4 Портрет",width:21,height:29.7},{id:"a4_landscape",name:"A4 Ландшафт",width:29.7,height:21},{id:"a3_portrait",name:"A3 Портрет",width:29.7,height:42},{id:"a3_landscape",name:"A3 Ландшафт",width:42,height:29.7},{id:"a3_landscape1",name:"A3 Ландшафт",width:600,height:29.7},{id:"a3_landscape2",name:"A3 Ландшафт",width:2,height:529.7}]},Oo=[{id:"FOOTBALL",name:"Футбол",icon:Vt},{id:"RUGBY",name:"Регбі",icon:Bo},{id:"BASKETBALL",name:"Баскетбол",icon:Lo},{id:"VOLLEYBALL",name:"Волейбол",icon:So},{id:"TENNIS",name:"Теніс",icon:ko},{id:"HANDBALL",name:"Гандбол",icon:Vt},{id:"SHEET",name:"Аркуш",icon:To}],No=({isOpen:e,onClose:t,onSelectField:r,currentFieldId:a})=>{var d;const[i,o]=m.useState("FOOTBALL"),[l,c]=m.useState(a);if(!e)return null;const p=s=>{c(s.id),r(s),setTimeout(()=>t(),300)},g=s=>{s.target===s.currentTarget&&t()},x=(s,u)=>u==="SHEET"?`${s.width}см × ${s.height}см`:`${s.width}м × ${s.height}м`,h=(s,u)=>u==="SHEET"?`${s}см`:`${s}м`;return n.jsx(Eo,{onClick:g,children:n.jsxs(Io,{children:[n.jsxs(zo,{children:[n.jsx(Ro,{children:"Обрати спортивне поле"}),n.jsx(Po,{onClick:t,children:n.jsx(Vn,{})})]}),n.jsxs(Go,{children:[n.jsx(Fo,{children:Oo.map(s=>{const u=s.icon;return n.jsxs(Do,{active:i===s.id,onClick:()=>o(s.id),children:[n.jsx(Yo,{children:n.jsx(u,{})}),s.name]},s.id)})}),n.jsx(Xo,{children:n.jsx(Zo,{children:(d=Vo[i])==null?void 0:d.map(s=>n.jsxs(Ao,{selected:l===s.id,onClick:()=>p(s),children:[n.jsx(Ho,{children:s.name}),n.jsx(jo,{children:x(s,i)}),n.jsx(Wo,{children:n.jsxs(_o,{fieldWidth:s.width,fieldHeight:s.height,children:[n.jsx(Ot,{className:"width",children:h(s.width,i)}),n.jsx(Ot,{className:"height",children:h(s.height,i)})]})})]},s.id))})})]})]})})},qo=y(lo)`
  width: 80%;
  height: 80%;
  stroke: ${({theme:e})=>e.textBlack};
   fill: ${({theme:e})=>e.textBlack};
`,Uo=y(kn)`
  width: 100%;
  height: 100%;
   fill: ${({theme:e})=>e.black};
   rotate: 180deg;
`,Jo=y(so)`
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.textBlack};
`,Ko=y(Sn)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.textBlack};
`,Qo=y(Sn)`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  fill: ${({theme:e})=>e.textBlack};
`,ei=y(oo)`
  width: 70%;  
  height: 70%;
  stroke: ${({theme:e})=>e.textBlack};
`,ti=y(io)`
  width: 70%;  
  height: 70%;
  fill: ${({theme:e})=>e.textBlack};
`,ni=y(ao)`
  width: 70%;  
  height: 70%;
  fill: ${({theme:e})=>e.textBlack};
`,ri=y.div`
  width: 100%;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-bottom: 2px solid ${({theme:e})=>e.gray};
  padding: 12px 16px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`,oi=y.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`,ii=y.div`
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
`,ai=y.div`
  flex-shrink: 0;
  position: relative;
  z-index: 10;
`,ge=y.button`
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

`,si=y.button`
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
  
`,li=y(ro)`
  width: 60%;
  height: 60%;
  fill: none;
  stroke: ${({theme:e})=>e.textBlack};
`,rt=y.div`
  width: 1px;
  height: 20px;
  background: ${({theme:e})=>e.gray};
  margin: 0 4px;
  
  @media (max-width: 768px) {
    height: 16px;
  }
`,Nt=y.div`
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
`,qt=y.span`
  font-size: 11px;
  color: ${({theme:e})=>e.textGray};
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 9px;
  }
`,Ut=y.input`
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
`,ci=y.input`
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
`,Jt=({value:e,onChange:t,...r})=>{const[a,i]=m.useState(e),o=m.useRef(null);m.useEffect(()=>{o.current||i(e)},[e]);const l=c=>{const p=c.target.value;i(p),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{t(p),o.current=null},200)};return n.jsx(ci,{type:"color",value:a,onChange:l,...r})},di=({currentField:e,onSelectField:t,isSidebarOpen:r,onToggleSidebar:a})=>{const[i,o]=m.useState(!1),l=pe(),{activeTool:c,team1:p,team2:g,historyIndex:x,history:h}=Te(b=>b.tacticsBoard),d=()=>{o(!0)},s=()=>{o(!1)},u=b=>{t(b),s()},f=b=>{l(Oe(b))},C=b=>{l(Oe(`shape_${b.id}`))},v=b=>{l(Oe(`figure_${b.id}`))},w=b=>{const P=parseInt(b.target.value)||0;l(On(Math.max(0,Math.min(30,P))))},M=b=>{l(Nn(b))},L=b=>{const P=parseInt(b.target.value)||0;l(qn(Math.max(0,Math.min(30,P))))},k=b=>{l(Un(b))},S=()=>{l(Jn())},E=()=>{l(Kn())},I=()=>{window.confirm("Ви впевнені, що хочете очистити всю дошку?")&&l(Qn())},R=x>0,$=x<h.length-1;return n.jsxs(n.Fragment,{children:[n.jsx(ri,{children:n.jsxs(oi,{children:[n.jsxs(ii,{children:[n.jsx(ge,{title:"Обрати поле",onClick:d,children:n.jsx(li,{})}),n.jsx(rt,{}),n.jsx(ge,{title:"Курсор (виділення та переміщення)",active:c==="cursor",onClick:()=>f("cursor"),children:n.jsx(ei,{})}),n.jsx(ge,{title:"Додати текст",active:c==="text",onClick:()=>f("text"),children:n.jsx(qo,{})}),n.jsx(ge,{title:"Малювання",active:c==="drawing",onClick:()=>f("drawing"),children:n.jsx(ti,{})}),n.jsx(ge,{title:"Ластик",active:c==="eraser",onClick:()=>f("eraser"),children:n.jsx(ni,{})}),n.jsx(Co,{activeTool:c,onSelectShape:C}),n.jsx($o,{activeTool:c,onSelectFigure:v}),n.jsx(rt,{}),n.jsxs(Nt,{children:[n.jsx(qt,{children:"К1:"}),n.jsx(Ut,{type:"number",min:"0",max:"30",value:p.count,onChange:w,title:"Кількість гравців команди 1"}),n.jsx(Jt,{value:p.color,onChange:M,title:"Колір команди 1"})]}),n.jsxs(Nt,{children:[n.jsx(qt,{children:"К2:"}),n.jsx(Ut,{type:"number",min:"0",max:"30",value:g.count,onChange:L,title:"Кількість гравців команди 2"}),n.jsx(Jt,{value:g.color,onChange:k,title:"Колір команди 2"})]}),n.jsx(rt,{}),n.jsx(ge,{title:"М'яч",active:c==="ball",onClick:()=>f("ball"),children:"⚽"}),n.jsx(rt,{}),n.jsx(ge,{title:"Назад (Undo)",onClick:S,disabled:!R,children:n.jsx(Qo,{})}),n.jsx(ge,{title:"Вперед (Redo)",onClick:E,disabled:!$,children:n.jsx(Ko,{})}),n.jsx(ge,{title:"Скасувати все",onClick:I,children:n.jsx(Jo,{})})]}),n.jsx(ai,{children:n.jsx(si,{title:"Відкрити панель інструментів",active:r,onClick:a,children:n.jsx(Uo,{})})})]})}),n.jsx(No,{isOpen:i,onClose:s,onSelectField:u,currentFieldId:e.id})]})},hi=y.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,pi=y.div`
  display: grid;
  grid-template-columns: 40px 1fr 80px;
  gap: 8px;
  align-items: center;
`,ui=y.div`
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
`,gi=y.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  border: 2px solid ${({theme:e})=>e.lightGreen||"#ccc"};
  cursor: pointer;
  overflow: hidden;
`,xi=y.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,fi=y.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,mi=y.input`
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
`,yi=y.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
`,Ci=y.div`
  position: relative;
`,wi=y.input`
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
`,bi=y.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
  display: block;
  text-align: center;
  margin-top: 2px;
`,Kt=e=>Math.max(0,Math.min(1,e/100)),Mi=e=>Math.round(Math.max(0,Math.min(100,e*100))),Qt=(e,t=1)=>{if(!e)return"0, 0, 0, 1";let r=e.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const a=parseInt(r.slice(0,2),16),i=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`${a}, ${i}, ${o}, ${t}`},ce=({color:e,opacity:t,onColorChange:r,onOpacityChange:a,label:i})=>{const[o,l]=m.useState(e||"#000000"),[c,p]=m.useState(t!==void 0?t:100),g=m.useRef(null),x=m.useRef(null),h=m.useRef(null),d=m.useMemo(()=>{const L=Kt(c);return Qt(o,L)},[o,c]),[s,u]=m.useState(d),f=m.useMemo(()=>{const L=Kt(c);return{backgroundColor:`rgba(${Qt(o,L)})`}},[o,c]);m.useEffect(()=>{x.current||(l(e||"#000000"),p(t!==void 0?t:100))},[e,t]),m.useEffect(()=>{document.activeElement!==h.current&&u(d)},[d]);const C=L=>{const k=L.target.value;l(k),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{r&&r(k),x.current=null},150)},v=L=>{const k=L.target.value;u(k);const S=k.split(",").map(E=>parseFloat(E.trim()));if(S.length>=3&&!S.some(isNaN)){const E=Math.max(0,Math.min(255,S[0]||0)),I=Math.max(0,Math.min(255,S[1]||0)),R=Math.max(0,Math.min(255,S[2]||0)),$=S[3]!==void 0?Math.max(0,Math.min(1,S[3])):1,b=`#${((1<<24)+(E<<16)+(I<<8)+R).toString(16).slice(1)}`,P=Mi($);l(b),p(P),x.current&&clearTimeout(x.current),r&&r(b),a&&a(P)}},w=L=>{let k=L.target.value,S=parseInt(k);isNaN(S)&&(S=0),S>100&&(S=100),S<0&&(S=0),p(S),a&&a(S)},M=()=>{g.current&&g.current.click()};return n.jsxs("div",{children:[i&&n.jsx(hi,{children:i}),n.jsxs(pi,{children:[n.jsxs(ui,{children:[n.jsx(gi,{style:f,onClick:M}),n.jsx(xi,{ref:g,type:"color",value:o,onChange:C})]}),n.jsxs(fi,{children:[n.jsx(mi,{ref:h,type:"text",value:s,onChange:v,placeholder:"0, 0, 0, 1"}),n.jsx(yi,{children:"RGBA"})]}),n.jsxs(Ci,{children:[n.jsx(wi,{type:"number",min:"0",max:"100",value:c,onChange:w}),n.jsx(bi,{children:"Прозорість %"})]})]})]})},vi=y.div`
  position: relative;
  width: 100%;
`,$i=y.button`
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
`,Li=y.div`
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
`,Si=y.div`
  padding: 6px 8px;
  font-family: ${({$fontFamily:e})=>e||"Arial"};
  cursor: pointer;
  color: ${({theme:e})=>e.textBlack};
  background-color: ${({selected:e,theme:t})=>e?t.lightGreen:"transparent"};

  &:hover {
    background-color: ${({theme:e})=>e.greenMain};
    color: ${({theme:e})=>e.white};
  }
`,ki=y(Sr)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) rotate(${({$open:e})=>e?"180deg":"0"});
  width: 20px;
  height: 20px;
  stroke: ${({theme:e})=>e.iconColor};
  transition: transform 0.3s ease;
`,he=({value:e,onChange:t,options:r=[],placeholder:a="Оберіть..."})=>{const[i,o]=m.useState(!1),l=m.useRef(null),c=()=>o(h=>!h),p=()=>o(!1),g=h=>{t(h),p()};m.useEffect(()=>{const h=d=>{l.current&&!l.current.contains(d.target)&&p()};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]);const x=r.find(h=>h.value===e);return n.jsxs(vi,{ref:l,children:[n.jsxs($i,{onClick:c,$fontFamily:x==null?void 0:x.value,children:[x?x.label:a,n.jsx(ki,{$open:i})]}),i&&n.jsx(Li,{children:r.map(h=>n.jsx(Si,{onClick:()=>g(h.value),selected:h.value===e,$fontFamily:h.value,children:h.label},h.value))})]})},Bi="/coaching-draft/assets/brush_marker-9c4a6bad.png",Ti="/coaching-draft/assets/brush_pencil-33e6165e.png",Ei="/coaching-draft/assets/brush_pen-07c57dd9.png",Ii="/coaching-draft/assets/brush_oil-91e92a78.png",zi="/coaching-draft/assets/brush_watercolor-e5ec0b25.png",Ri="/coaching-draft/assets/brush_spray-d0145476.png",en=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,Pi=y.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Ct=y.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,tn=y.label`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Gi=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Fi=y.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:a})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${a.greenMain} 0%, ${a.greenMain} ${i}%, ${a.lightGreen} ${i}%, ${a.lightGreen} 100%)`}};
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
`,Di=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 10px;
`,Ee=y.button`
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
`,nn=()=>{const e=pe(),{drawColor:t,brushSize:r,brushOpacity:a,brushStyle:i,lineType:o,selectedObjectId:l,paths:c}=Te(b=>b.tacticsBoard),p=l&&l.startsWith("path_")?parseInt(l.replace("path_","")):-1,g=p>=0?c[p]:null,x=g?g.brushStyle:i,h=g?g.color:t,d=g?g.opacity!==void 0?g.opacity:100:a,s=g?g.brushSize:r,u=g?g.lineType:o,[f,C]=m.useState(s),[v,w]=m.useState(50),[M,L]=m.useState(!0);m.useEffect(()=>{switch(C(s),g?g.brushStyle:i){case"hard":w(50),L(!0);break;case"pencil":w(20),L(!0);break;case"calligraphy":w(30),L(!1);break;case"oil":w(60),L(!1);break;case"watercolor":w(80),L(!1);break;case"splatter":w(100),L(!1);break;default:w(50),L(!0)}},[l,s,g,i]);const k=b=>{g?e(ke({index:p,updates:{brushStyle:b,lineType:["oil","watercolor","splatter","calligraphy"].includes(b)?"solid":u}})):(e(er(b)),["oil","watercolor","splatter","calligraphy"].includes(b)&&e(Yt("solid")))},S=b=>{e(g?ke({index:p,updates:{color:b}}):tr(b))},E=b=>{e(g?ke({index:p,updates:{opacity:b}}):nr(b))},I=b=>{C(parseInt(b.target.value))},R=()=>{e(g?ke({index:p,updates:{brushSize:f}}):rr(f))},$=b=>{e(g?ke({index:p,updates:{lineType:b}}):Yt(b))};return n.jsxs(n.Fragment,{children:[n.jsxs(en,{children:[n.jsx(Pi,{children:g?"Пензель":"Тип пензля"}),n.jsxs(Di,{children:[n.jsx(Ee,{active:x==="hard",onClick:()=>k("hard"),title:"Маркер",children:n.jsx("img",{src:Bi,alt:"Маркер"})}),n.jsx(Ee,{active:x==="pencil",onClick:()=>k("pencil"),title:"Олівець",children:n.jsx("img",{src:Ti,alt:"Олівець"})}),n.jsx(Ee,{active:x==="calligraphy",onClick:()=>k("calligraphy"),title:"Перо",children:n.jsx("img",{src:Ei,alt:"Перо"})}),n.jsx(Ee,{active:x==="oil",onClick:()=>k("oil"),title:"Олія",children:n.jsx("img",{src:Ii,alt:"Олія"})}),n.jsx(Ee,{active:x==="watercolor",onClick:()=>k("watercolor"),title:"Акварель",children:n.jsx("img",{src:zi,alt:"Акварель"})}),n.jsx(Ee,{active:x==="splatter",onClick:()=>k("splatter"),title:"Спрей",children:n.jsx("img",{src:Ri,alt:"Спрей"})})]})]}),n.jsxs(en,{children:[n.jsx(Ct,{children:n.jsx(ce,{color:h,opacity:d,onColorChange:S,onOpacityChange:E,label:"Колір та прозорість"})}),n.jsxs(Ct,{children:[n.jsxs(tn,{children:["Товщина лінії",n.jsxs(Gi,{children:[f,"px"]})]}),n.jsx(Fi,{min:"1",max:v,value:f,onChange:I,onMouseUp:R,onTouchEnd:R})]}),M&&n.jsxs(Ct,{children:[n.jsx(tn,{children:"Тип лінії"}),n.jsx(he,{value:u||"solid",onChange:$,options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]})]})},Yi=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Xi=y.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,me=y.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Le=y.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Zi=y.textarea`
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
`,ot=y.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:a})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${a.greenMain||"#4CAF50"} 0%, ${a.greenMain||"#4CAF50"} ${i}%, ${a.lightGreen||"#E8F5E9"} ${i}%, ${a.lightGreen||"#E8F5E9"} 100%)`}};
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
`,it=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Ai=y.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,wt=y.button`
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
`,Hi=({selectedObject:e})=>{const t=pe(),[r,a]=m.useState(e.text||"");m.useEffect(()=>{a(e.text||"")},[e.id,e.text]);const i=(l,c)=>{t(Ne({id:e.id,updates:{[l]:c}}))},o=l=>{const c=l.target.value;a(c),i("text",c)};return n.jsxs(Yi,{children:[n.jsx(Xi,{children:"Властивості тексту"}),n.jsxs(me,{children:[n.jsx(Le,{children:"Текст"}),n.jsx(Zi,{value:r,onChange:o,placeholder:"Введіть текст...",$fontFamily:e.fontFamily})]}),n.jsx(me,{children:n.jsx(ce,{color:e.color||"#000000",opacity:e.opacity||100,onColorChange:l=>i("color",l),onOpacityChange:l=>i("opacity",l),label:"Колір і прозорість"})}),n.jsxs(me,{children:[n.jsxs(Le,{children:["Розмір шрифту",n.jsxs(it,{children:[e.fontSize||16,"px"]})]}),n.jsx(ot,{min:"8",max:"200",value:e.fontSize||16,onChange:l=>i("fontSize",Number(l.target.value))})]}),n.jsxs(me,{children:[n.jsx(Le,{children:"Тип шрифту"}),n.jsx(he,{value:e.fontFamily||"Arial",onChange:l=>i("fontFamily",l),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(me,{children:[n.jsx(Le,{children:"Стиль тексту"}),n.jsxs(Ai,{children:[n.jsx(wt,{$active:e.fontWeight==="bold",onClick:()=>i("fontWeight",e.fontWeight==="bold"?"normal":"bold"),children:n.jsx("strong",{children:"B"})}),n.jsx(wt,{$active:e.fontStyle==="italic",onClick:()=>i("fontStyle",e.fontStyle==="italic"?"normal":"italic"),children:n.jsx("em",{children:"I"})}),n.jsx(wt,{$active:e.textDecoration==="underline",onClick:()=>i("textDecoration",e.textDecoration==="underline"?"none":"underline"),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(me,{children:[n.jsxs(Le,{children:["Міжрядковий інтервал",n.jsx(it,{children:(e.lineHeight||.9).toFixed(1)})]}),n.jsx(ot,{min:"0.5",max:"3",step:"0.1",value:e.lineHeight||.9,onChange:l=>i("lineHeight",Number(l.target.value))})]}),n.jsxs(me,{children:[n.jsxs(Le,{children:["Міжлітерний інтервал",n.jsxs(it,{children:[e.letterSpacing||0,"px"]})]}),n.jsx(ot,{min:"-2",max:"10",step:"0.5",value:e.letterSpacing||0,onChange:l=>i("letterSpacing",Number(l.target.value))})]}),n.jsxs(me,{children:[n.jsxs(Le,{children:["Поворот тексту",n.jsxs(it,{children:[e.rotation||0,"°"]})]}),n.jsx(ot,{min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:l=>i("rotation",Number(l.target.value))})]})]})},ji=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Wi=y.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Ie=y.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ae=y.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,bt=y.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:a})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${a.greenMain} 0%, ${a.greenMain} ${i}%, ${a.lightGreen} ${i}%, ${a.lightGreen} 100%)`}};
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
`,Mt=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,_i=y.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,vt=y.button`
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
`,Vi=()=>{const e=pe(),{textColor:t,textOpacity:r,textFontSize:a,textFontFamily:i,textFontWeight:o,textFontStyle:l,textDecoration:c,textLineHeight:p,textLetterSpacing:g}=Te(x=>x.tacticsBoard);return n.jsxs(ji,{children:[n.jsx(Wi,{children:"Налаштування тексту"}),n.jsx(Ie,{children:n.jsx(ce,{color:t,opacity:r,onColorChange:x=>e(or(x)),onOpacityChange:x=>e(ir(x)),label:"Колір і прозорість"})}),n.jsxs(Ie,{children:[n.jsxs(Ae,{children:["Розмір шрифту",n.jsxs(Mt,{children:[a,"px"]})]}),n.jsx(bt,{type:"range",min:"8",max:"200",value:a,onChange:x=>e(ar(Number(x.target.value)))})]}),n.jsxs(Ie,{children:[n.jsx(Ae,{children:"Тип шрифту"}),n.jsx(he,{value:i,onChange:x=>e(sr(x)),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(Ie,{children:[n.jsx(Ae,{children:"Стиль тексту"}),n.jsxs(_i,{children:[n.jsx(vt,{$active:o==="bold",onClick:()=>e(lr(o==="bold"?"normal":"bold")),children:n.jsx("strong",{children:"B"})}),n.jsx(vt,{$active:l==="italic",onClick:()=>e(cr(l==="italic"?"normal":"italic")),children:n.jsx("em",{children:"I"})}),n.jsx(vt,{$active:c==="underline",onClick:()=>e(dr(c==="underline"?"none":"underline")),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(Ie,{children:[n.jsxs(Ae,{children:["Міжрядковий інтервал",n.jsx(Mt,{children:p})]}),n.jsx(bt,{type:"range",min:"0.5",max:"3",step:"0.1",value:p,onChange:x=>e(hr(Number(x.target.value)))})]}),n.jsxs(Ie,{children:[n.jsxs(Ae,{children:["Міжлітерний інтервал",n.jsxs(Mt,{children:[g,"px"]})]}),n.jsx(bt,{type:"range",min:"-2",max:"10",step:"0.5",value:g,onChange:x=>e(pr(Number(x.target.value)))})]})]})},Oi=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Ni=y.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ye=y.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ce=y.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,rn=y.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:a})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${a.greenMain} 0%, ${a.greenMain} ${i}%, ${a.lightGreen} ${i}%, ${a.lightGreen} 100%)`}};
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
`,on=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,qi=y.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,an=y.input`
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
`,at=8,Ui=({selectedObject:e})=>{const t=pe(),r=(o,l)=>{t(Ne({id:e.id,updates:{[o]:l}}))},a=(o,l)=>{let c=Number(l);c<at&&(c=at);const p=(e[o]||1)<0?-1:1;c*=p,r(o,c)},i=e.shape==="line"||e.shape==="arrow";return n.jsxs(Oi,{children:[n.jsx(Ni,{children:"Властивості фігури"}),!i&&n.jsxs(ye,{children:[n.jsx(Ce,{children:"Розміри"}),n.jsxs(qi,{children:[n.jsxs("div",{children:[n.jsx(Ce,{style:{fontSize:"10px",marginBottom:"4px"},children:"Ширина"}),n.jsx(an,{type:"number",min:at,value:Math.abs(e.width||50),onChange:o=>a("width",o.target.value)})]}),n.jsxs("div",{children:[n.jsx(Ce,{style:{fontSize:"10px",marginBottom:"4px"},children:"Висота"}),n.jsx(an,{type:"number",min:at,value:Math.abs(e.height||30),onChange:o=>a("height",o.target.value)})]})]})]}),n.jsxs(ye,{children:[n.jsxs(Ce,{children:["Кут повороту",n.jsxs(on,{children:[e.rotation||0,"º"]})]}),n.jsx(rn,{type:"range",min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:o=>r("rotation",Number(o.target.value))})]}),n.jsx(ye,{children:n.jsx(ce,{color:e.borderColor||e.color||"#000000",opacity:e.borderOpacity!==void 0?e.borderOpacity:100,onColorChange:o=>r("borderColor",o),onOpacityChange:o=>r("borderOpacity",o),label:i?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(ye,{children:[n.jsxs(Ce,{children:[i?"Товщина лінії":"Товщина обводки",n.jsxs(on,{children:[e.borderWidth||2,"px"]})]}),n.jsx(rn,{type:"range",min:"1",max:"20",value:e.borderWidth||2,onChange:o=>r("borderWidth",Number(o.target.value))})]}),n.jsxs(ye,{children:[n.jsx(Ce,{children:"Тип обводки"}),n.jsx(he,{value:e.borderStyle||"solid",onChange:o=>r("borderStyle",o),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),i&&n.jsxs(n.Fragment,{children:[n.jsxs(ye,{children:[n.jsx(Ce,{children:"Початок лінії"}),n.jsx(he,{value:e.lineCapStart||"butt",onChange:o=>r("lineCapStart",o),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(ye,{children:[n.jsx(Ce,{children:"Кінець лінії"}),n.jsx(he,{value:e.lineCapEnd||(e.shape==="arrow"?"arrow":"butt"),onChange:o=>r("lineCapEnd",o),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!i&&n.jsx(ye,{children:n.jsx(ce,{color:e.fillColor||"#ffffff",opacity:e.fillOpacity!==void 0?e.fillOpacity:0,onColorChange:o=>r("fillColor",o),onOpacityChange:o=>r("fillOpacity",o),label:"Колір заливки і прозорість"})})]})},Ji=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Ki=y.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ze=y.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,st=y.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Qi=y.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:a})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${a.greenMain} 0%, ${a.greenMain} ${i}%, ${a.lightGreen} ${i}%, ${a.lightGreen} 100%)`}};
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
`,e1=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,t1=y.p`
  font-size: 12px;
  color: #888;
  font-style: italic;
  margin-top: 12px;
  line-height: 1.4;
`,n1=()=>{const e=pe(),{activeTool:t,shapeBorderColor:r,shapeBorderOpacity:a,shapeFillColor:i,shapeFillOpacity:o,shapeBorderWidth:l,shapeBorderStyle:c,shapeLineCapStart:p,shapeLineCapEnd:g}=Te(h=>h.tacticsBoard),x=t==="shape_line"||t==="shape_arrow";return n.jsxs(Ji,{children:[n.jsx(Ki,{children:"Налаштування фігури"}),n.jsx(ze,{children:n.jsx(ce,{color:r,opacity:a,onColorChange:h=>e(ur(h)),onOpacityChange:h=>e(gr(h)),label:"Колір обводки та прозорість"})}),n.jsxs(ze,{children:[n.jsxs(st,{children:["Товщина обводки",n.jsxs(e1,{children:[l,"px"]})]}),n.jsx(Qi,{type:"range",min:"1",max:"20",value:l,onChange:h=>e(xr(Number(h.target.value)))})]}),n.jsxs(ze,{children:[n.jsx(st,{children:"Стиль обводки"}),n.jsx(he,{value:c,onChange:h=>e(fr(h)),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть стиль"})]}),x&&n.jsxs(n.Fragment,{children:[n.jsxs(ze,{children:[n.jsx(st,{children:"Початок лінії"}),n.jsx(he,{value:p,onChange:h=>e(mr(h)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(ze,{children:[n.jsx(st,{children:"Кінець лінії"}),n.jsx(he,{value:g||(t==="shape_arrow"?"arrow":"butt"),onChange:h=>e(un(h)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!x&&n.jsx(ze,{children:n.jsx(ce,{color:i,opacity:o,onColorChange:h=>e(yr(h)),onOpacityChange:h=>e(Cr(h)),label:"Колір заливки і прозорість"})}),n.jsx(t1,{children:x?"Клікніть і потягніть, щоб намалювати лінію":"Клікніть і потягніть, щоб створити фігуру"})]})},He=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,je=y.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,se=y.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,Se=y.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,sn=y.input`
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
`,lt=y.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:a})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${a.greenMain} 0%, ${a.greenMain} ${i}%, ${a.lightGreen} ${i}%, ${a.lightGreen} 100%)`}};
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
`,ct=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,r1=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
  margin-top: 10px;
`,o1=y.div`
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
`,i1=y.div`
  width: 30px; 
  height: 45px;
  background: ${({$color:e})=>e};
  border: 2px solid ${({$borderColor:e})=>e}; 
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); 
`,a1=y.div`
  display: flex;
  flex-direction: row; 
  gap: 15px; 
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`,ln=y.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,cn=y.input.attrs({type:"color"})`
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
`,dn=y.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.textGray||"#666"};
  min-width: 45px; 
`,s1=y.button`
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
`,l1=y.button`
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
`,c1=y.span`
  font-size: 10px;
  color: ${({theme:e,$over:t})=>t?e.red:e.textGray};
  margin-top: 4px;
  display: block;
`,hn=8,pn=50,dt=100,We=3,d1=({selectedObject:e})=>{const t=pe(),r=($,b)=>{t(Ne({id:e.id,updates:{[$]:b}}))},a=$=>{let b=Number($);b=Math.max(hn,Math.min(pn,b)),r("radius",b)},i=$=>{const b=Math.max(0,Math.min(99,Number($)||0));r("number",b)},o=$=>{$.length<=dt&&r("topText",$)},l=()=>{const $=e.cards||[];if($.length<We){const b=[...$,{color:"#FFD700",cardBorderColor:"#000000"}];r("cards",b)}},c=$=>{const P=(e.cards||[]).filter((z,X)=>X!==$);r("cards",P)},p=($,b)=>{const z=[...e.cards||[]];z[$]={...z[$],color:b},r("cards",z)},g=($,b)=>{const z=[...e.cards||[]];z[$]={...z[$],cardBorderColor:b},r("cards",z)},x=e.radius||20,h=e.number!==void 0?e.number:1,d=e.topText||"",s=e.rotation||0,u=e.color||"#ff0000",f=e.colorOpacity!==void 0?e.colorOpacity:100,C=e.numberColor||"#ffffff",v=e.numberOpacity!==void 0?e.numberOpacity:100,w=e.textColor||"#000000",M=e.textOpacity!==void 0?e.textOpacity:100,L=e.textSize||Math.max(10,x*.5),k=e.borderWidth||2,S=e.borderColor||"#000000",E=e.borderOpacity!==void 0?e.borderOpacity:100,I=e.borderStyle||"solid",R=e.cards||[];return n.jsxs(n.Fragment,{children:[n.jsxs(He,{children:[n.jsx(je,{children:"Розмір та позиція"}),n.jsxs(se,{children:[n.jsxs(Se,{children:["Розмір гравця (8-50px)",n.jsxs(ct,{children:[x,"px"]})]}),n.jsx(lt,{min:hn,max:pn,value:x,onChange:$=>a($.target.value)})]}),n.jsxs(se,{children:[n.jsxs(Se,{children:["Кут повороту",n.jsxs(ct,{children:[s,"º"]})]}),n.jsx(lt,{min:"-180",max:"180",step:"5",value:s,onChange:$=>r("rotation",Number($.target.value))})]}),n.jsx(se,{children:n.jsx(ce,{color:u,opacity:f,onColorChange:$=>r("color",$),onOpacityChange:$=>r("colorOpacity",$),label:"Колір гравця"})})]}),n.jsxs(He,{children:[n.jsx(je,{children:"Номер гравця"}),n.jsxs(se,{children:[n.jsx(Se,{children:"Номер гравця (0-99)"}),n.jsx(sn,{type:"number",min:"0",max:"99",value:h,onChange:$=>i($.target.value)})]}),n.jsx(se,{children:n.jsx(ce,{color:C,opacity:v,onColorChange:$=>r("numberColor",$),onOpacityChange:$=>r("numberOpacity",$),label:"Колір номера"})})]}),n.jsxs(He,{children:[n.jsx(je,{children:"Текст над гравцем"}),n.jsxs(se,{children:[n.jsx(Se,{children:"Текст"}),n.jsx(sn,{type:"text",maxLength:dt,placeholder:"Введіть текст",value:d,onChange:$=>o($.target.value)}),n.jsxs(c1,{$over:d.length>dt,children:[d.length,"/",dt," символів"]})]}),d&&n.jsxs(n.Fragment,{children:[n.jsxs(se,{children:[n.jsxs(Se,{children:["Розмір тексту",n.jsxs(ct,{children:[L,"px"]})]}),n.jsx(lt,{min:"8",max:"40",value:L,onChange:$=>r("textSize",Number($.target.value))})]}),n.jsx(se,{children:n.jsx(ce,{color:w,opacity:M,onColorChange:$=>r("textColor",$),onOpacityChange:$=>r("textOpacity",$),label:"Колір тексту"})})]})]}),n.jsxs(He,{children:[n.jsx(je,{children:"Обводка"}),n.jsx(se,{children:n.jsx(ce,{color:S,opacity:E,onColorChange:$=>r("borderColor",$),onOpacityChange:$=>r("borderOpacity",$),label:"Колір обводки"})}),n.jsxs(se,{children:[n.jsxs(Se,{children:["Товщина обводки",n.jsxs(ct,{children:[k,"px"]})]}),n.jsx(lt,{min:"1",max:"10",value:k,onChange:$=>r("borderWidth",Number($.target.value))})]}),n.jsxs(se,{children:[n.jsx(Se,{children:"Тип обводки"}),n.jsx(he,{value:I,onChange:$=>r("borderStyle",$),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]}),n.jsxs(He,{children:[n.jsxs(je,{children:["Картки (",R.length,"/",We,")"]}),R.length>0&&n.jsx(r1,{children:R.map(($,b)=>n.jsxs(o1,{children:[n.jsx(i1,{$color:$.color,$borderColor:$.cardBorderColor||"#000000"}),n.jsxs(a1,{children:[n.jsxs(ln,{title:"Колір заливки картки",children:[n.jsx(dn,{children:"Заливка:"}),n.jsx(cn,{value:$.color,onChange:P=>p(b,P.target.value)})]}),n.jsxs(ln,{title:"Колір обводки картки",children:[n.jsx(dn,{children:"Обводка:"}),n.jsx(cn,{value:$.cardBorderColor||"#000000",onChange:P=>g(b,P.target.value)})]})]}),n.jsx(s1,{onClick:()=>c(b),title:"Видалити картку",children:n.jsx(kr,{})})]},b))}),n.jsx(se,{style:{marginTop:R.length>0?"15px":"0"},children:n.jsx(l1,{onClick:l,disabled:R.length>=We,children:R.length>=We?`Максимум ${We} картки`:"Додати картку"})})]})]})},h1=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,p1=y.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,u1=y.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,g1=y.label`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,x1=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,f1=y.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:a})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${a.greenMain} 0%, ${a.greenMain} ${i}%, ${a.lightGreen} ${i}%, ${a.lightGreen} 100%)`}};
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
`,m1=()=>{const e=pe(),{eraserSize:t}=Te(l=>l.tacticsBoard),[r,a]=m.useState(t);m.useEffect(()=>{a(t)},[t]);const i=l=>{a(parseInt(l.target.value))},o=()=>{e(wr(r))};return n.jsxs(h1,{children:[n.jsx(p1,{children:"Налаштування ластика"}),n.jsxs(u1,{children:[n.jsxs(g1,{children:["Розмір ластика",n.jsxs(x1,{children:[r,"px"]})]}),n.jsx(f1,{min:"5",max:"200",value:r,onChange:i,onMouseUp:o,onTouchEnd:o})]})]})},y1=y(kn)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.black};
`,C1=y.div`
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
`,w1=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
`,b1=y.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,M1=y.button`
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
`,v1=y.div`
  padding: 20px;
`,_e=y.button`
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
`,$1=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #ccc;
  text-align: center;
`,L1=({isOpen:e,onClose:t})=>{const r=pe(),{activeTool:a,selectedObjectId:i,objects:o,paths:l}=Te(x=>x.tacticsBoard),c=i?i.startsWith("path_")?{...l[parseInt(i.replace("path_",""))],type:"path",id:i}:o.find(x=>x.id===i):null,p=()=>{if(i){if(i.startsWith("path_")){const x=parseInt(i.replace("path_",""));r(br(x))}else r(Mr(i));r(Ve()),t()}},g=()=>{if(c)switch(c.type){case"text":return n.jsxs(n.Fragment,{children:[n.jsx(Hi,{selectedObject:c}),n.jsx(_e,{onClick:p,children:"Видалити текст"})]});case"player":return n.jsxs(n.Fragment,{children:[n.jsx(d1,{selectedObject:c}),n.jsx(_e,{onClick:p,children:"Видалити гравця"})]});case"shape":return n.jsxs(n.Fragment,{children:[n.jsx(Ui,{selectedObject:c}),n.jsx(_e,{onClick:p,children:"Видалити фігуру"})]});case"path":return n.jsxs(n.Fragment,{children:[n.jsx(nn,{}),n.jsx(_e,{onClick:p,children:"Видалити лінію"})]});default:return n.jsx(_e,{onClick:p,children:"Видалити об'єкт"})}switch(a){case"text":return n.jsx(Vi,{});case"drawing":return n.jsx(nn,{});case"eraser":return n.jsx(m1,{});case"shape_rectangle":case"shape_circle":case"shape_triangle":case"shape_line":case"shape_arrow":return n.jsx(n1,{});default:return n.jsxs($1,{children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎯"}),n.jsx("p",{children:"Виберіть інструмент або об'єкт"}),n.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px",fontStyle:"italic"},children:"Налаштування з'являться тут"})]})}};return n.jsxs(C1,{$isOpen:e,children:[n.jsxs(w1,{children:[n.jsx(b1,{children:c?"Властивості":"Інструменти"}),n.jsx(M1,{title:"Закрити панель інструментів",onClick:t,children:n.jsx(y1,{})})]}),n.jsx(v1,{children:g()})]})},S1=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: ${({theme:e})=>e.mainBGColor};
`,k1=y.div`
  background: ${({theme:e})=>e.ContainerBGColor};
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`,B1=y.div`
  width: 100%;
`,z1=({theme:e})=>{const{setTitle:t}=vr(),[r,a]=m.useState(!1),[i,o]=m.useState({id:"football_standard",name:"Стандартне футбольне поле",width:105,height:68}),l=g=>{o(g)},c=()=>{a(!r)},p=()=>{a(!1)};return m.useEffect(()=>{t("Тактична дошка")},[t]),n.jsx($r,{store:Lr,children:n.jsx(S1,{children:n.jsxs(k1,{children:[n.jsx(di,{currentField:i,onSelectField:l,isSidebarOpen:r,onToggleSidebar:c}),n.jsx(B1,{children:n.jsx(no,{fieldSize:{width:i.width,height:i.height},fieldType:i.id})}),n.jsx(L1,{isOpen:r,onClose:p,children:n.jsx("div",{children:"Тут будуть інструменти"})})]})})})};export{z1 as default};
