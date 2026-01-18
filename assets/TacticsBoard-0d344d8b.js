import{r as C,d as w,b as ue,a as Pe,_ as Rn,$ as ct,a0 as ve,a1 as Ie,a2 as Yn,a3 as Gn,a4 as We,j as n,a5 as $t,a6 as Xn,a7 as je,W as kt,S as Dn,a8 as Zn,a9 as Fn,aa as An,ab as Hn,ac as Wn,ad as jn,ae as _n,af as Vn,ag as Bt,ah as Nn,ai as On,aj as qn,ak as sn,al as ln,am as cn,an as dn,ao as hn,ap as pn,aq as un,ar as gn,as as Jn,at as Un,u as Kn,au as Qn,av as er}from"./index-9b799b22.js";import{S as tr}from"./ChevronDownicon-088f5b78.js";import{S as nr}from"./DeleteIcon-c24d4ed6.js";const Je=(e,t,r,d,a)=>{const o=Math.cos(a),i=Math.sin(a),c=e-r,h=t-d;return{x:r+(c*o-h*i),y:d+(c*i+h*o)}},pe=(e,t)=>{if(e.type==="player"){const r=e.radius||20,a=(e.rotation||0)*Math.PI/180;let o=e.x-r,i=e.x+r,c=e.y-r,h=e.y+r;if(e.topText){const g=e.textSize||Math.max(10,r*.5),x=g,l=e.topText.length*g*.6,p=-(r+x);[{x:-l/2,y:p-x*.2},{x:l/2,y:p-x*.2},{x:-l/2,y:p},{x:l/2,y:p}].forEach(u=>{const f=u.x*Math.cos(a)-u.y*Math.sin(a),m=u.x*Math.sin(a)+u.y*Math.cos(a);o=Math.min(o,e.x+f),i=Math.max(i,e.x+f),c=Math.min(c,e.y+m),h=Math.max(h,e.y+m)})}if(e.cards&&e.cards.length>0){const g=r*.35,x=g*1.4,l=2,p=Math.PI/4,s=Math.cos(p)*r*.7,u=Math.sin(p)*r*.7,f=e.cards.length-1,m=s-f*(g+l);[{x:m-g,y:u},{x:s,y:u},{x:m-g,y:u+x},{x:s,y:u+x}].forEach(b=>{const M=b.x*Math.cos(a)-b.y*Math.sin(a),y=b.x*Math.sin(a)+b.y*Math.cos(a);o=Math.min(o,e.x+M),i=Math.max(i,e.x+M),c=Math.min(c,e.y+y),h=Math.max(h,e.y+y)})}return{x:e.x-r,y:e.y-r,width:r*2,height:r*2,centerX:e.x,centerY:e.y}}if(e.type==="ball"){const r=e.radius||10;return{x:e.x-r,y:e.y-r,width:r*2,height:r*2,centerX:e.x,centerY:e.y}}if(e.type==="shape"){if(e.shape==="line"||e.shape==="arrow"){const c=e.rotation||0;if(c!==0){const p=c*Math.PI/180,s=(e.startX+e.endX)/2,u=(e.startY+e.endY)/2,f=Je(e.startX,e.startY,s,u,p),m=Je(e.endX,e.endY,s,u,p),k=Math.min(f.x,m.x),b=Math.max(f.x,m.x),M=Math.min(f.y,m.y),y=Math.max(f.y,m.y);return{x:k,y:M,width:b-k,height:y-M,startX:f.x,startY:f.y,endX:m.x,endY:m.y,originalStartX:e.startX,originalStartY:e.startY,originalEndX:e.endX,originalEndY:e.endY,centerX:s,centerY:u,rotation:c,rotatedCorners:[f,m]}}const h=Math.min(e.startX,e.endX),g=Math.max(e.startX,e.endX),x=Math.min(e.startY,e.endY),l=Math.max(e.startY,e.endY);return{x:h,y:x,width:g-h,height:l-x,startX:e.startX,startY:e.startY,endX:e.endX,endY:e.endY,rotation:e.rotation||0}}const r=e.width||50,d=e.height||30,a=e.rotation||0;if(e.shape==="circle"){const c=Math.max(Math.abs(r),Math.abs(d)),h=e.x+r/2,g=e.y+d/2;return{x:h-c/2,y:g-c/2,width:c,height:c,centerX:h,centerY:g,radius:c/2,originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:d,rotation:a}}if(a!==0){const c=a*Math.PI/180,h=e.x+r/2,g=e.y+d/2,l=[{x:e.x,y:e.y},{x:e.x+r,y:e.y},{x:e.x+r,y:e.y+d},{x:e.x,y:e.y+d}].map(m=>Je(m.x,m.y,h,g,c));let p=l[0].x,s=l[0].x,u=l[0].y,f=l[0].y;return l.forEach(m=>{p=Math.min(p,m.x),s=Math.max(s,m.x),u=Math.min(u,m.y),f=Math.max(f,m.y)}),{x:p,y:u,width:s-p,height:f-u,centerX:h,centerY:g,originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:d,rotation:a,rotatedCorners:l}}const o=r<0?e.x+r:e.x,i=d<0?e.y+d:e.y;return{x:o,y:i,width:Math.abs(r),height:Math.abs(d),originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:d,rotation:a}}if(e.type==="figure"){const r=e.size||30;return{x:e.x-r/2,y:e.y-r/2,width:r,height:r,centerX:e.x,centerY:e.y}}if(e.type==="path"){if(!e.points||e.points.length===0)return null;let r=e.points[0].x,d=e.points[0].y,a=e.points[0].x,o=e.points[0].y;return e.points.forEach(i=>{r=Math.min(r,i.x),d=Math.min(d,i.y),a=Math.max(a,i.x),o=Math.max(o,i.y)}),{x:r,y:d,width:a-r,height:o-d,points:e.points,centerX:(r+a)/2,centerY:(d+o)/2}}if(e.type==="text"){if(t){const a=t.getContext("2d"),o=e.fontWeight||"normal",i=e.fontStyle||"normal",c=e.fontSize||16,h=e.fontFamily||"Arial";a.font=`${i} ${o} ${c}px ${h}`;const g=(e.text||"").split(`
`),x=(e.lineHeight||1.5)*c,l=e.letterSpacing||0;let p=0;g.forEach(k=>{let M=a.measureText(k).width;l!==0&&(M+=l*(k.length-1)),M>p&&(p=M)});const s=g.length>0?(g.length-1)*x+c:0,u=e.rotation||0,f=e.x+p/2,m=e.y+s/2;if(u!==0){const k=u*Math.PI/180,M=[{x:e.x,y:e.y},{x:e.x+p,y:e.y},{x:e.x+p,y:e.y+s},{x:e.x,y:e.y+s}].map(P=>Je(P.x,P.y,f,m,k));let y=M[0].x,$=M[0].x,L=M[0].y,B=M[0].y;return M.forEach(P=>{y=Math.min(y,P.x),$=Math.max($,P.x),L=Math.min(L,P.y),B=Math.max(B,P.y)}),{x:y,y:L,width:$-y,height:B-L,centerX:f,centerY:m,originalX:e.x,originalY:e.y,originalWidth:p,originalHeight:s,rotation:u,rotatedCorners:M}}return{x:e.x,y:e.y,width:p,height:s,centerX:f,centerY:m,originalX:e.x,originalY:e.y,originalWidth:p,originalHeight:s,rotation:0}}const r=e.width||100,d=e.height||20;return{x:e.x,y:e.y,width:r,height:d,centerX:e.x+r/2,centerY:e.y+d/2}}return null},xt=(e,t,r)=>{if(!r)return!1;if(r.rotatedCorners&&r.rotatedCorners.length>0){const d=r.rotatedCorners;let a=!1;for(let o=0,i=d.length-1;o<d.length;i=o++){const c=d[o].x,h=d[o].y,g=d[i].x,x=d[i].y;h>t!=x>t&&e<(g-c)*(t-h)/(x-h)+c&&(a=!a)}return a}return e>=r.x&&e<=r.x+r.width&&t>=r.y&&t<=r.y+r.height},Tt=(e,t,r,d=10,a)=>{const o=pe(r,a);if(!o)return!1;if(r.type==="path"){const i=Math.max(d,10);for(let c=0;c<r.points.length-1;c++){const h=r.points[c],g=r.points[c+1],x=g.x-h.x,l=g.y-h.y,p=Math.sqrt(x*x+l*l);if(p===0)continue;const s=Math.max(0,Math.min(1,((e-h.x)*x+(t-h.y)*l)/(p*p))),u=h.x+s*x,f=h.y+s*l;if(Math.sqrt(Math.pow(e-u,2)+Math.pow(t-f,2))<=i)return!0}return!1}if(r.type==="shape"&&(r.shape==="line"||r.shape==="arrow")){const c=o.endX-o.startX,h=o.endY-o.startY,g=Math.sqrt(c*c+h*h);if(g===0)return!1;const x=Math.max(0,Math.min(1,((e-o.startX)*c+(t-o.startY)*h)/(g*g))),l=o.startX+x*c,p=o.startY+x*h;return Math.sqrt(Math.pow(e-l,2)+Math.pow(t-p,2))<=10}if(r.type==="shape"&&r.shape==="circle"){const i=o.centerX||o.x+o.width/2,c=o.centerY||o.y+o.height/2,h=o.radius||Math.max(o.width,o.height)/2;return Math.sqrt(Math.pow(e-i,2)+Math.pow(t-c,2))<=h}return xt(e,t,o)},xn=(e,t)=>{if(t&&t.type==="shape"&&(t.shape==="line"||t.shape==="arrow"))return{start:{x:e.startX,y:e.startY,cursor:"crosshair"},end:{x:e.endX,y:e.endY,cursor:"crosshair"}};if(t&&t.type==="path")return{};if(t&&t.type==="text"){if(e.rotatedCorners&&e.rotatedCorners.length===4){const r=e.rotatedCorners;return{topLeft:{x:r[0].x,y:r[0].y,cursor:"nwse-resize"},topRight:{x:r[1].x,y:r[1].y,cursor:"nesw-resize"},bottomRight:{x:r[2].x,y:r[2].y,cursor:"nwse-resize"},bottomLeft:{x:r[3].x,y:r[3].y,cursor:"nesw-resize"}}}return{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"}}}if(e.rotatedCorners&&e.rotatedCorners.length===4){const r=e.rotatedCorners;return{topLeft:{x:r[0].x,y:r[0].y,cursor:"nwse-resize"},topRight:{x:r[1].x,y:r[1].y,cursor:"nesw-resize"},bottomRight:{x:r[2].x,y:r[2].y,cursor:"nwse-resize"},bottomLeft:{x:r[3].x,y:r[3].y,cursor:"nesw-resize"},top:{x:(r[0].x+r[1].x)/2,y:(r[0].y+r[1].y)/2,cursor:"ns-resize"},bottom:{x:(r[2].x+r[3].x)/2,y:(r[2].y+r[3].y)/2,cursor:"ns-resize"},left:{x:(r[0].x+r[3].x)/2,y:(r[0].y+r[3].y)/2,cursor:"ew-resize"},right:{x:(r[1].x+r[2].x)/2,y:(r[1].y+r[2].y)/2,cursor:"ew-resize"}}}return{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"},top:{x:e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.y+e.height/2,cursor:"ew-resize"}}},Et=(e,t,r,d)=>{const a=xn(r,d),o=8;for(const[i,c]of Object.entries(a))if(d&&d.type==="shape"&&(d.shape==="line"||d.shape==="arrow")){if(Math.sqrt(Math.pow(e-c.x,2)+Math.pow(t-c.y,2))<=o*2)return{name:i,...c}}else if(Math.abs(e-c.x)<=o&&Math.abs(t-c.y)<=o)return{name:i,...c};return null},fn=(e,t,r,d,a,o)=>{for(let i=r.length-1;i>=0;i--)if(Tt(e,t,r[i],a,o))return r[i];for(let i=d.length-1;i>=0;i--){const c={...d[i],type:"path",id:`path_${i}`};if(Tt(e,t,c,a,o))return c}return null},mn=(e,t=1)=>{if(!e)return"rgba(0, 0, 0, 1)";let r=e.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const d=parseInt(r.slice(0,2),16),a=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${d}, ${a}, ${o}, ${t})`},Le=e=>{let t=e.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}},ee=e=>{const t=Math.sin(e)*1e4;return t-Math.floor(t)},ft=(e,t,r,d,a,o)=>{const i=Math.max(1,Math.floor(d*1.5));for(let c=0;c<i;c++){const h=ee(t*r*c)*Math.PI*2,g=Math.sqrt(ee(t+r+c))*d,x=Math.cos(h)*g,l=Math.sin(h)*g,p=o*(.2+ee(c)*.7);e.fillStyle=`rgba(${a.r}, ${a.g}, ${a.b}, ${p})`;const s=.5+ee(c*2);e.beginPath(),e.arc(t+x,r+l,s,0,Math.PI*2),e.fill()}},rr=(e,t,r,d,a,o)=>{e.lineCap="round",e.lineJoin="round";const i=Le(d),c=Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2)),h=Math.max(1,o*.2),g=Math.ceil(c/h);for(let x=0;x<g;x++){const l=x/g,p=t.x+(r.x-t.x)*l,s=t.y+(r.y-t.y)*l,u=(ee(p*s)-.5)*.5;ft(e,p+u,s+u,o/2,i,a)}},mt=(e,t,r,d,a,o)=>{const i=Le(d);e.lineCap="butt",e.lineJoin="round";const c=Math.max(12,o*1.5),h=o*.8;for(let g=0;g<c;g++){const x=(g/c-.5)*h,l=a*(.8+ee(g)*.2);e.strokeStyle=`rgba(${i.r}, ${i.g}, ${i.b}, ${l})`,e.lineWidth=o/c*2,e.beginPath();const p=ee(t.x*g)-.5,s=ee(r.x*g)-.5;e.moveTo(t.x+x+p,t.y+x+p),e.lineTo(r.x+x+s,r.y+x+s),e.stroke()}},yn=(e,t,r,d,a,o)=>{const i=Le(d);e.lineCap="butt";const c=Math.max(6,o),h=Math.PI/4,g=Math.cos(h)*o,x=Math.sin(h)*o;for(let l=0;l<c;l++){const p=l/(c-1),s=g*(p-.5),u=x*(p-.5);e.strokeStyle=`rgba(${i.r}, ${i.g}, ${i.b}, ${a})`,e.lineWidth=1.5,e.beginPath(),e.moveTo(t.x+s,t.y+u),e.lineTo(r.x+s,r.y+u),e.stroke()}},Cn=(e,t,r,d,a,o)=>{e.lineCap="round",e.lineJoin="round";const i=Le(d);[{widthMult:1.5,alphaMult:.15},{widthMult:1.2,alphaMult:.25},{widthMult:1,alphaMult:.35},{widthMult:.7,alphaMult:.45}].forEach((h,g)=>{const x=Math.max(3,Math.floor(o*.2));for(let l=0;l<x;l++){const p=l/x*Math.PI*2,s=o*h.widthMult*.15*(l/x),u=Math.cos(p)*s,f=Math.sin(p)*s,m=a*h.alphaMult*(.8+ee(l+g)*.2);e.strokeStyle=`rgba(${i.r}, ${i.g}, ${i.b}, ${m})`,e.lineWidth=o*h.widthMult,e.beginPath();const k=(ee(t.x*l)-.5)*.5,b=(ee(r.x*l)-.5)*.5;e.moveTo(t.x+u+k,t.y+f+k),e.lineTo(r.x+u+b,r.y+f+b),e.stroke()}})},wn=(e,t,r,d,a,o)=>{const i=Le(d);e.fillStyle=`rgba(${i.r}, ${i.g}, ${i.b}, ${a})`;const c=Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2)),h=Math.max(5,o/1.2);for(let g=0;g<c;g+=h){const x=g/c,l=t.x+(r.x-t.x)*x,p=t.y+(r.y-t.y)*x,s=o*(.3+ee(l)*.6),u=(ee(p)-.5)*o*1.5,f=(ee(l)-.5)*o*1.5;e.beginPath(),e.arc(l+u,p+f,s,0,Math.PI*2),e.fill();const m=Math.floor(ee(l*p)*4);for(let k=0;k<m;k++){const b=ee(l+k)*Math.PI*2,M=o*(.5+ee(p+k)),y=o*(.05+ee(k)*.1),$=l+u+Math.cos(b)*M,L=p+f+Math.sin(b)*M;e.beginPath(),e.arc($,L,y,0,Math.PI*2),e.fill()}}},or=(e,t,r,d,a,o)=>{e.lineCap="round",e.lineJoin="round",e.lineWidth=o,e.strokeStyle=mn(d,a),e.setLineDash([]),e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(r.x,r.y),e.stroke()},ir=(e,t,r,d)=>{const{color:a,opacity:o,brushSize:i,brushStyle:c}=d,h=o!==void 0?o/100:1;switch(e.save(),c){case"pencil":rr(e,t,r,a,h,i);break;case"calligraphy":yn(e,t,r,a,h,i);break;case"oil":mt(e,t,r,a,h,i);break;case"watercolor":Cn(e,t,r,a,h,i);break;case"splatter":wn(e,t,r,a,h,i);break;case"hard":default:or(e,t,r,a,h,i);break}e.restore()},ar=(e,t,r,d,a,o)=>{if(e.lineCap="round",e.lineJoin="round",o==="solid"){const i=Le(r),c=Math.max(1,a*.2);for(let h=0;h<t.points.length-1;h++){const g=t.points[h],x=t.points[h+1],l=(x.x-g.x)**2+(x.y-g.y)**2;if(l<2&&h<t.points.length-2)continue;const p=Math.sqrt(l),s=Math.ceil(p/c);for(let u=0;u<s;u++){const f=u/s,m=g.x+(x.x-g.x)*f,k=g.y+(x.y-g.y)*f,b=(ee(m*k)-.5)*.5;ft(e,m+b,k+b,a/2,i,d)}}}else{const i=Le(r),c=o==="dotted",h=c?a*.1:a*3,g=c?a*1.1:a*2,x=h+g;let l=0;for(let p=0;p<t.points.length-1;p++){const s=t.points[p],u=t.points[p+1],f=Math.sqrt(Math.pow(u.x-s.x,2)+Math.pow(u.y-s.y,2));let m=0;const k=Math.max(1,a*.1);for(;m<f;){const M=(l+m)%x;if(M<h||c&&M<a){const y=m/f,$=s.x+(u.x-s.x)*y,L=s.y+(u.y-s.y)*y;ft(e,$,L,a/2,i,d)}m+=k}l+=f}}},sr=(e,t,r,d,a)=>{if(t.points.length>1){const o=Math.max(2,a*.15);let i=0;for(let g=0;g<t.points.length-1;g++){const x=t.points[g],l=t.points[g+1],p=l.x-x.x,s=l.y-x.y,u=Math.sqrt(p*p+s*s);if(i+u<o&&g<t.points.length-2){i+=u;continue}mt(e,x,l,r,d,a),i=0}const c=t.points[t.points.length-2],h=t.points[t.points.length-1];mt(e,c,h,r,d,a)}},lr=(e,t,r,d,a)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const i=t.points[o],c=t.points[o+1];(c.x-i.x)**2+(c.y-i.y)**2<2&&o<t.points.length-2||yn(e,i,c,r,d,a)}},cr=(e,t,r,d,a)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const i=t.points[o],c=t.points[o+1];(c.x-i.x)**2+(c.y-i.y)**2<2.25&&o<t.points.length-2||Cn(e,i,c,r,d,a)}},dr=(e,t,r,d,a)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const i=t.points[o],c=t.points[o+1];(c.x-i.x)**2+(c.y-i.y)**2<1&&o<t.points.length-2||wn(e,i,c,r,d,a)}},hr=(e,t,r,d,a,o)=>{if(e.lineCap="round",e.lineJoin="round",e.lineWidth=a,e.strokeStyle=mn(r,d),o==="solid"){if(e.setLineDash([]),e.beginPath(),t.points.length>0){e.moveTo(t.points[0].x,t.points[0].y);for(let g=1;g<t.points.length;g++){const x=t.points[g],l=t.points[g-1];Math.abs(x.x-l.x)<.5&&Math.abs(x.y-l.y)<.5&&g<t.points.length-1||e.lineTo(x.x,x.y)}}e.stroke();return}const i=o==="dotted",c=i?.1:a*3,h=a*2;if(e.setLineDash([c,h]),e.lineCap=i?"round":"butt",e.beginPath(),t.points.length>0){e.moveTo(t.points[0].x,t.points[0].y);for(let g=1;g<t.points.length;g++)e.lineTo(t.points[g].x,t.points[g].y)}e.stroke(),e.setLineDash([])},dt=(e,t,r=!1)=>{if(t.points.length<2)return;e.save();const d=t.opacity!==void 0?t.opacity/100:1,a=r?"#FFD700":t.color,o=t.brushStyle||"hard",i=t.lineType||"solid",c=t.brushSize;if(r){e.strokeStyle="rgba(255, 215, 0, 0.5)",e.lineWidth=c+6,e.lineCap="round",e.lineJoin="round",e.setLineDash([]),e.beginPath(),e.moveTo(t.points[0].x,t.points[0].y);for(let h=1;h<t.points.length;h++)e.lineTo(t.points[h].x,t.points[h].y);e.stroke()}switch(o){case"pencil":ar(e,t,a,d,c,i);break;case"calligraphy":lr(e,t,a,d,c);break;case"oil":sr(e,t,a,d,c);break;case"watercolor":cr(e,t,a,d,c);break;case"splatter":dr(e,t,a,d,c);break;case"hard":default:hr(e,t,a,d,c,i);break}e.restore()},pr=(e,t,r,d,a,o,i,c,h)=>{e.save(),e.strokeStyle=c,e.lineWidth=h,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t,r),e.lineTo(d,a),e.lineTo(o,i),e.stroke(),e.restore()},ur=(e,t,r,d,a,o,i,c,h=0,g=0)=>{const x=d-t,l=a-r,p=Math.sqrt(x*x+l*l);if(p===0)return;const s=x/p,u=l/p,f=h,m=g,k=p-f-m;if(k<=0)return;const b=t+s*f,M=r+u*f;if(e.strokeStyle=c,e.lineWidth=i,e.lineCap="butt",o==="dashed"){const y=Math.max(i*3,12),$=Math.max(i*2,8),L=y+$,B=Math.max(2,Math.floor(k/L));if(B===2&&k<L*2){const Z=k*.35,A=k*.3;e.setLineDash([Z,A]),e.lineDashOffset=0,e.beginPath(),e.moveTo(b,M),e.lineTo(d-s*m,a-u*m),e.stroke(),e.setLineDash([]);return}const z=(k-B*y)/B,S=y+z,v=B*S-z,I=(k-v)/2;e.setLineDash([y,z]),e.lineDashOffset=-I,e.beginPath(),e.moveTo(b,M),e.lineTo(d-s*m,a-u*m),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}else if(o==="dotted"){const y=Math.max(i*2.5,10),$=i/2,L=Math.max(2,Math.floor(k/y)+1),B=k/(L-1);e.fillStyle=c;for(let P=0;P<L;P++){const z=P*B,S=b+s*z,v=M+u*z;e.beginPath(),e.arc(S,v,$,0,Math.PI*2),e.fill()}}else e.beginPath(),e.moveTo(b,M),e.lineTo(d-s*m,a-u*m),e.stroke()},It=(e,t,r,d,a)=>{if(t.length<2)return;if(r==="solid"){e.strokeStyle=a,e.lineWidth=d,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let p=1;p<t.length;p++)e.lineTo(t[p].x,t[p].y);e.closePath(),e.stroke();return}let o=0;const i=[],c=t.length;for(let p=0;p<c;p++){const s=t[p],u=t[(p+1)%c],f=u.x-s.x,m=u.y-s.y,k=Math.sqrt(f*f+m*m);i.push(k),o+=k}if(o<20){e.strokeStyle=a,e.lineWidth=d,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let p=1;p<t.length;p++)e.lineTo(t[p].x,t[p].y);e.closePath(),e.stroke();return}const h=Math.max(d*2.5,Math.min(d*4,o/25)),g=Math.max(d*1.5,h*.5),x=h+g,l=h*.7;if(r==="dotted"){const p=d/2,s=Math.max(d*2,o/60);e.fillStyle=a;for(let u=0;u<c;u++){const f=t[u];e.beginPath(),e.arc(f.x,f.y,p,0,Math.PI*2),e.fill()}for(let u=0;u<c;u++){const f=t[u],m=i[u];if(m<=0)continue;const k=t[(u+1)%c].x-f.x,b=t[(u+1)%c].y-f.y,M=k/m,y=b/m,$=1,L=Math.floor(m/s)+1,B=Math.max($,L-1),P=m/B;for(let z=1;z<B;z++){const S=z*P,v=f.x+M*S,R=f.y+y*S;e.beginPath(),e.arc(v,R,p,0,Math.PI*2),e.fill()}}}else if(r==="dashed"){e.strokeStyle=a,e.lineWidth=d,e.lineCap="butt";for(let p=0;p<c;p++){const s=t[p],u=t[p===0?c-1:p-1],f=t[(p+1)%c],m=i[p===0?c-1:p-1],k=i[p];if(m>0&&k>0){const b=u.x-s.x,M=u.y-s.y,y=f.x-s.x,$=f.y-s.y,L=Math.min(m,k)/3,B=Math.min(l,L),P=s.x+b/m*B,z=s.y+M/m*B,S=s.x+y/k*B,v=s.y+$/k*B;pr(e,P,z,s.x,s.y,S,v,a,d)}}for(let p=0;p<c;p++){const s=t[p],u=t[(p+1)%c],f=i[p];if(f===0)continue;const m=u.x-s.x,k=u.y-s.y,b=m/f,M=k/f,y=i[p===0?c-1:p-1],$=f,L=i[(p+1)%c],B=Math.min(y,$)/3,P=Math.min(l,B),z=Math.min($,L)/3,S=Math.min(l,z),v=f-P-S;if(v<=h/2)continue;const R=s.x+b*P,I=s.y+M*P,Z=Math.floor(v/x);if(Z===0){const Y=v/2-h/2;if(Y>=0){const O=R+b*Y,V=I+M*Y,D=R+b*(Y+h),F=I+M*(Y+h);e.beginPath(),e.moveTo(O,V),e.lineTo(D,F),e.stroke()}continue}const j=(v-Z*h)/Z,_=h+j,N=Z*_-j,U=(v-N)/2;e.setLineDash([h,j]),e.lineDashOffset=-U,e.beginPath(),e.moveTo(R,I),e.lineTo(u.x-b*S,u.y-M*S),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}}},Pt=(e,t,r,d,a,o,i,c,h)=>{if(a==="butt")return 0;const g=i.replace("#",""),x=parseInt(g.slice(0,2),16),l=parseInt(g.slice(2,4),16),p=parseInt(g.slice(4,6),16);e.fillStyle=`rgba(${x}, ${l}, ${p}, ${c})`,e.strokeStyle=`rgba(${x}, ${l}, ${p}, ${c})`,e.save(),e.translate(t,r),e.rotate(d);let s=0;if(a==="round"){const u=Math.max(h*.75,4);e.beginPath(),e.arc(0,0,u,0,Math.PI*2),e.fill(),s=0}else a==="arrow"?(e.beginPath(),e.moveTo(0,0),e.lineTo(-o,-o*.5),e.lineTo(-o,o*.5),e.closePath(),e.fill(),s=o):a==="circle"?(e.beginPath(),e.arc(0,0,o*.4,0,Math.PI*2),e.fill(),s=o*.2):a==="bar"&&(e.lineWidth=h,e.lineCap="butt",e.beginPath(),e.moveTo(0,-o*.6),e.lineTo(0,o*.6),e.stroke(),s=0);return e.restore(),s},zt=(e,t,r=!1)=>{e.save();const d=t.fontWeight||"normal",a=t.fontStyle||"normal",o=t.fontSize||16,i=t.fontFamily||"Arial";e.font=`${a} ${d} ${o}px ${i}`,e.textAlign="left",e.textBaseline="top";const c=(t.text||"").split(`
`),h=(t.lineHeight||1.5)*o,g=t.letterSpacing||0;let x=0;c.forEach(M=>{let y=0;g!==0?y=e.measureText(M).width+g*(M.length-1):y=e.measureText(M).width,y>x&&(x=y)});const l=c.length>0?(c.length-1)*h+o:0,p=2;if(t.rotation){const M=t.x+x/2,y=t.y+l/2;e.translate(M,y),e.rotate(t.rotation*Math.PI/180),e.translate(-M,-y)}const s=t.opacity!==void 0?t.opacity/100:1,f=(t.color||"#000000").replace("#",""),m=parseInt(f.slice(0,2),16),k=parseInt(f.slice(2,4),16),b=parseInt(f.slice(4,6),16);return e.fillStyle=`rgba(${m}, ${k}, ${b}, ${s})`,c.forEach((M,y)=>{const $=t.y+y*h;if(g!==0){let L=t.x;for(let B=0;B<M.length;B++){const P=M[B];e.fillText(P,L,$);const z=e.measureText(P).width;L+=z+g}}else e.fillText(M,t.x,$);if(t.textDecoration==="underline"){const L=g!==0?e.measureText(M).width+g*(M.length-1):e.measureText(M).width;e.beginPath(),e.moveTo(t.x,$+o),e.lineTo(t.x+L,$+o),e.strokeStyle=e.fillStyle,e.lineWidth=Math.max(1,o/16),e.stroke()}}),r&&(e.fillStyle="rgba(255, 215, 0, 0.2)",e.fillRect(t.x-p,t.y-p,x+p*2,l+p*2)),e.restore(),t},Rt=(e,t,r)=>{e.save();const d=t.x,a=t.y,o=t.radius||20,i=t.rotation||0;e.translate(d,a),e.rotate(i*Math.PI/180);const c=t.borderWidth||2,h=(t.borderOpacity!==void 0?t.borderOpacity:100)/100,g=r?"#FFD700":t.borderColor||"#000000",x=t.borderStyle||"solid",l=g.replace("#",""),p=parseInt(l.slice(0,2),16),s=parseInt(l.slice(2,4),16),u=parseInt(l.slice(4,6),16),f=(t.colorOpacity!==void 0?t.colorOpacity:100)/100,k=(t.color||"#ff0000").replace("#",""),b=parseInt(k.slice(0,2),16),M=parseInt(k.slice(2,4),16),y=parseInt(k.slice(4,6),16);if(e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.fillStyle=`rgba(${b}, ${M}, ${y}, ${f})`,e.fill(),e.strokeStyle=`rgba(${p}, ${s}, ${u}, ${h})`,e.lineWidth=c,x==="dashed"){const I=2*Math.PI*o,Z=Math.max(c*2.5,Math.min(c*4,I/25)),A=Math.max(c*1.5,Z*.5),j=Z+A,_=Math.floor(I/j);if(_<3||I<30)e.setLineDash([]),e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();else{const U=(I-_*Z)/_,Y=(Z+U)/o,O=Z/o,V=Z+U,D=_*V-U,H=(I-D)/2/o;e.lineCap="butt";for(let q=0;q<_;q++){const K=H+q*Y,te=K+O;e.beginPath(),e.arc(0,0,o,K,te),e.stroke()}}}else if(x==="dotted"){const I=2*Math.PI*o,Z=c/2,A=Math.max(c*2,I/60),j=Math.max(8,Math.round(I/A)),_=2*Math.PI/j;e.fillStyle=`rgba(${p}, ${s}, ${u}, ${h})`;for(let N=0;N<j;N++){const J=N*_,U=o*Math.cos(J),Y=o*Math.sin(J);e.beginPath(),e.arc(U,Y,Z,0,Math.PI*2),e.fill()}}else e.setLineDash([]),e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();e.setLineDash([]);const $=t.number!==void 0?t.number:1,L=(t.numberOpacity!==void 0?t.numberOpacity:100)/100,P=(t.numberColor||"#ffffff").replace("#",""),z=parseInt(P.slice(0,2),16),S=parseInt(P.slice(2,4),16),v=parseInt(P.slice(4,6),16),R=Math.max(12,o*.8);if(e.fillStyle=`rgba(${z}, ${S}, ${v}, ${L})`,e.font=`bold ${R}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText($.toString(),0,0),t.topText){const I=(t.textOpacity!==void 0?t.textOpacity:100)/100,A=(t.textColor||"#000000").replace("#",""),j=parseInt(A.slice(0,2),16),_=parseInt(A.slice(2,4),16),N=parseInt(A.slice(4,6),16),J=t.textSize||Math.max(10,o*.5),Y=-(o+5);e.fillStyle=`rgba(${j}, ${_}, ${N}, ${I})`,e.font=`${J}px Arial`,e.textAlign="center",e.textBaseline="bottom",e.fillText(t.topText,0,Y)}if(t.cards&&t.cards.length>0){const I=o*.35,Z=I*1.4,A=4,j=Math.PI/4,_=Math.cos(j)*o*.7,N=Math.sin(j)*o*.7;t.cards.forEach((J,U)=>{const Y=J.color||(J==="yellow"?"#FFD700":"#FF0000"),O=J.cardBorderColor||"#000000",V=_-U*(I+A);e.fillStyle=Y,e.fillRect(V-I,N,I,Z),e.strokeStyle=O,e.lineWidth=1.5,e.setLineDash([]),e.strokeRect(V-I,N,I,Z)})}e.restore()},Yt=(e,t,r=!1)=>{const d=t.radius||10,a=r?"#FFD700":"black",o=r?3:2;e.fillStyle="white",e.strokeStyle=a,e.lineWidth=o,e.beginPath(),e.arc(t.x,t.y,d,0,Math.PI*2),e.fill(),e.stroke(),e.beginPath(),e.arc(t.x-d/3,t.y-d/3,d/3,0,Math.PI*2),e.fillStyle="black",e.fill()},Gt=(e,t,r=!1,d="#000")=>{if(e.save(),t.rotation)if(t.shape==="line"||t.shape==="arrow"){const s=(t.startX+t.endX)/2,u=(t.startY+t.endY)/2;e.translate(s,u),e.rotate(t.rotation*Math.PI/180),e.translate(-s,-u)}else{const s=t.x+(t.width||50)/2,u=t.y+(t.height||30)/2;e.translate(s,u),e.rotate(t.rotation*Math.PI/180),e.translate(-s,-u)}const a=r?"#FFD700":t.borderColor||t.color||d,o=t.borderOpacity!==void 0?t.borderOpacity/100:1,i=t.borderWidth||2,c=t.borderStyle||"solid",h=a.replace("#",""),g=parseInt(h.slice(0,2),16),x=parseInt(h.slice(2,4),16),l=parseInt(h.slice(4,6),16),p=`rgba(${g}, ${x}, ${l}, ${o})`;if(e.strokeStyle=p,e.lineWidth=i,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),t.shape==="line"||t.shape==="arrow"){const s=t.endX-t.startX,u=t.endY-t.startY,f=Math.atan2(u,s),m=t.lineCapStart||"butt",k=t.lineCapEnd||(t.shape==="arrow"?"arrow":"butt"),b=Math.max(i*2.5,10);let M=0;m==="arrow"?M=b:m==="circle"?M=b*.2:(m==="round"||m==="bar")&&(M=0);let y=0;if(k==="arrow"?y=b:k==="circle"?y=b*.2:(k==="round"||k==="bar")&&(y=0),c==="dashed"||c==="dotted")ur(e,t.startX,t.startY,t.endX,t.endY,c,i,p,M,y);else{const $=t.startX+Math.cos(f)*M,L=t.startY+Math.sin(f)*M,B=t.endX-Math.cos(f)*y,P=t.endY-Math.sin(f)*y;e.lineCap="butt",e.beginPath(),e.moveTo($,L),e.lineTo(B,P),e.stroke()}m!=="butt"&&Pt(e,t.startX,t.startY,f+Math.PI,m,b,a,o,i),k!=="butt"&&Pt(e,t.endX,t.endY,f,k,b,a,o,i)}else{const s=t.x,u=t.y,f=t.width||50,m=t.height||30,k=10,b=Math.abs(f)<k?f<0?-k:k:f,M=Math.abs(m)<k?m<0?-k:k:m,y=t.fillColor||"#ffffff",$=t.fillOpacity!==void 0?t.fillOpacity/100:0;if($>0){const L=y.replace("#",""),B=parseInt(L.slice(0,2),16),P=parseInt(L.slice(2,4),16),z=parseInt(L.slice(4,6),16);if(e.fillStyle=`rgba(${B}, ${P}, ${z}, ${$})`,e.beginPath(),t.shape==="rectangle")e.rect(s,u,b,M);else if(t.shape==="circle"){const S=Math.max(Math.abs(b),Math.abs(M))/2,v=s+b/2,R=u+M/2;e.arc(v,R,S,0,Math.PI*2)}else t.shape==="triangle"&&(e.moveTo(s+b/2,u),e.lineTo(s,u+M),e.lineTo(s+b,u+M),e.closePath());e.fill()}if(c==="dashed"||c==="dotted"){if(t.shape==="rectangle"){const L=[{x:s,y:u},{x:s+b,y:u},{x:s+b,y:u+M},{x:s,y:u+M}];It(e,L,c,i,p)}else if(t.shape==="triangle"){const L=[{x:s+b/2,y:u},{x:s,y:u+M},{x:s+b,y:u+M}];It(e,L,c,i,p)}else if(t.shape==="circle"){const L=Math.max(Math.abs(b),Math.abs(M))/2,B=s+b/2,P=u+M/2,z=2*Math.PI*L,S=Math.max(i*2.5,Math.min(i*4,z/25)),v=Math.max(i*1.5,S*.5),R=S+v;if(z<30)e.strokeStyle=p,e.lineWidth=i,e.beginPath(),e.arc(B,P,L,0,Math.PI*2),e.stroke();else if(c==="dashed"){const I=Math.floor(z/R);if(I===0)e.strokeStyle=p,e.lineWidth=i,e.beginPath(),e.arc(B,P,L,0,Math.PI*2),e.stroke();else{const A=(z-I*S)/I,j=(S+A)/L,_=S/L,N=S+A,J=I*N-A,O=(z-J)/2/L;e.strokeStyle=p,e.lineWidth=i,e.lineCap="butt";for(let V=0;V<I;V++){const D=O+V*j,F=D+_;e.beginPath(),e.arc(B,P,L,D,F),e.stroke()}}}else if(c==="dotted"){const I=i/2,Z=Math.max(i*2,z/60),A=Math.max(8,Math.round(z/Z)),j=2*Math.PI/A;e.fillStyle=p;for(let _=0;_<A;_++){const N=_*j,J=B+L*Math.cos(N),U=P+L*Math.sin(N);e.beginPath(),e.arc(J,U,I,0,Math.PI*2),e.fill()}}}}else{if(e.beginPath(),t.shape==="rectangle"){const L=t.x,B=t.y;t.width,t.height,e.rect(L,B,b,M)}else if(t.shape==="circle"){const L=t.x,B=t.y,P=t.width||50,z=t.height||30,S=P,v=z,R=Math.max(Math.abs(S),Math.abs(v))/2,I=L+S/2,Z=B+v/2;e.arc(I,Z,R,0,Math.PI*2)}else if(t.shape==="triangle"){const L=t.x,B=t.y,P=t.width||50,z=t.height||30,S=P,v=z;e.moveTo(L+S/2,B),e.lineTo(L,B+v),e.lineTo(L+S,B+v),e.closePath()}e.stroke()}}e.restore()},Xt=(e,t,r=!1)=>{const d=t.size||30;e.font=`${d}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(t.icon,t.x,t.y),r&&(e.strokeStyle="#FFD700",e.lineWidth=3,e.strokeRect(t.x-d/2,t.y-d/2,d,d))},Dt=(e,t)=>{if(e.save(),e.strokeStyle="#FFD700",e.lineWidth=2,e.setLineDash([5,5]),t.rotatedCorners&&t.rotatedCorners.length===4){e.beginPath(),e.moveTo(t.rotatedCorners[0].x,t.rotatedCorners[0].y);for(let r=1;r<t.rotatedCorners.length;r++)e.lineTo(t.rotatedCorners[r].x,t.rotatedCorners[r].y);e.closePath(),e.stroke()}else e.strokeRect(t.x,t.y,t.width,t.height);e.setLineDash([]),e.restore()},gr=(e,t,r)=>{const d=xn(t,r),a=8;e.fillStyle="white",e.strokeStyle="#FFD700",e.lineWidth=2,Object.entries(d).forEach(([o,i])=>{e.save(),e.fillRect(i.x-a/2,i.y-a/2,a,a),e.strokeRect(i.x-a/2,i.y-a/2,a,a),e.restore()})},xr=(e,t)=>{const r=C.useRef(null),d=C.useRef(null),a=C.useCallback((h,g=!1)=>{if(!h)return;const x=h.getContext("2d");x.clearRect(0,0,h.width,h.height),g&&(x.fillStyle="white",x.fillRect(0,0,h.width,h.height))},[]),o=C.useCallback(()=>{const h=t.current;if(!h)return;h.getContext("2d").clearRect(0,0,h.width,h.height)},[t]),i=C.useCallback((h,g,x,l,p,s)=>{const u=e.current;if(!u)return;a(u,!0);const f=u.getContext("2d");let m=null,k=-1;if(x&&x.startsWith("path_")){k=parseInt(x.replace("path_",""));const y=h[k];y&&(m=d.current&&d.current.id===x?d.current:y)}h.forEach((y,$)=>{if(y.points.length<2||$===k)return;const L=d.current&&d.current.id===`path_${$}`?d.current:y;dt(f,L,!1)});const b=r.current?g.map(y=>y.id===r.current.id?r.current:y):g;let M=null;if(x&&!x.startsWith("path_")&&(M=b.find(y=>y.id===x)),b.forEach(y=>{if(y.id!==x){switch(f.save(),y.type){case"player":Rt(f,y,!1);break;case"ball":Yt(f,y,!1);break;case"shape":Gt(f,y,!1,p);break;case"figure":Xt(f,y,!1);break;case"text":zt(f,y,!1);break}f.restore()}}),m){dt(f,m,!0);const y={...m,type:"path",id:x},$=pe(y,u);$&&Dt(f,$)}if(M){switch(f.save(),M.type){case"player":Rt(f,M,!0);break;case"ball":Yt(f,M,!0);break;case"shape":Gt(f,M,!0,p);break;case"figure":Xt(f,M,!0);break;case"text":zt(f,M,!0);break}if(f.restore(),l==="cursor"){const y=pe(M,u);y&&(Dt(f,y),gr(f,y,M))}}},[e,a]),c=C.useCallback((h,g,x=!1)=>{const l=t.current;if(!l)return;const p=l.getContext("2d");if(x||p.clearRect(0,0,l.width,l.height),h&&h.points&&h.points.length>=2)if(x){const s=h.points.length,u=h.points[s-2],f=h.points[s-1];ir(p,u,f,{color:h.color,opacity:h.opacity,brushSize:h.brushSize,brushStyle:h.brushStyle})}else dt(p,h,!1);if(g){const{type:s,start:u,end:f,borderColor:m,borderStyle:k,borderWidth:b,fillColor:M,fillOpacity:y}=g,$=m.replace("#",""),L=parseInt($.slice(0,2),16),B=parseInt($.slice(2,4),16),P=parseInt($.slice(4,6),16),z=`rgba(${L}, ${B}, ${P}, 1)`,S=f.x-u.x,v=f.y-u.y;if(p.save(),p.strokeStyle=z,p.lineWidth=b,k==="dashed"&&p.setLineDash([10,5]),k==="dotted"&&p.setLineDash([2,5]),p.beginPath(),s==="line"||s==="arrow"){if(p.moveTo(u.x,u.y),p.lineTo(f.x,f.y),p.stroke(),s==="arrow"){const R=Math.atan2(f.y-u.y,f.x-u.x),I=15;p.beginPath(),p.moveTo(f.x,f.y),p.lineTo(f.x-I*Math.cos(R-Math.PI/6),f.y-I*Math.sin(R-Math.PI/6)),p.moveTo(f.x,f.y),p.lineTo(f.x-I*Math.cos(R+Math.PI/6),f.y-I*Math.sin(R+Math.PI/6)),p.stroke()}}else{if(y>0){const R=M.replace("#",""),I=parseInt(R.slice(0,2),16),Z=parseInt(R.slice(2,4),16),A=parseInt(R.slice(4,6),16);if(p.fillStyle=`rgba(${I}, ${Z}, ${A}, ${y/100})`,p.beginPath(),s==="rectangle")p.rect(u.x,u.y,S,v);else if(s==="circle"){const j=Math.max(Math.abs(S),Math.abs(v))/2;p.arc(u.x+S/2,u.y+v/2,j,0,Math.PI*2)}else s==="triangle"&&(p.moveTo(u.x+S/2,u.y),p.lineTo(u.x,u.y+v),p.lineTo(u.x+S,u.y+v),p.closePath());p.fill()}if(p.beginPath(),s==="rectangle")p.rect(u.x,u.y,S,v);else if(s==="circle"){const R=Math.max(Math.abs(S),Math.abs(v))/2;p.arc(u.x+S/2,u.y+v/2,R,0,Math.PI*2)}else s==="triangle"&&(p.moveTo(u.x+S/2,u.y),p.lineTo(u.x,u.y+v),p.lineTo(u.x+S,u.y+v),p.closePath());p.stroke()}p.restore()}},[t]);return{redrawStatic:i,drawLiveLayer:c,clearActiveLayer:o,tempObjectDataRef:r,tempPathDataRef:d}},fr=()=>{const e=C.useRef(null),t=C.useRef({x:0,y:0}),r=C.useRef(null),[d,a]=C.useState("default");return{draggedObjectRef:e,dragOffsetRef:t,cursorStyle:d,setCursorStyle:a,startDrag:(l,p,s)=>{const u=pe(l,s);if(e.current=JSON.parse(JSON.stringify(l)),r.current={mouseStart:{...p},objectStart:JSON.parse(JSON.stringify(l)),cachedBounds:u||{x:0,y:0,width:0,height:0}},l.type==="path")t.current={x:p.x-u.points[0].x,y:p.y-u.points[0].y};else if(l.type==="shape"&&(l.shape==="line"||l.shape==="arrow")){const f=(l.startX+l.endX)/2,m=(l.startY+l.endY)/2;t.current={x:p.x-f,y:p.y-m}}else l.x!==void 0&&l.y!==void 0?t.current={x:p.x-l.x,y:p.y-l.y}:t.current={x:p.x-(u?u.x:0),y:p.y-(u?u.y:0)}},updateDragPosition:(l,p,s)=>{if(!e.current||!r.current)return null;const{objectStart:u,cachedBounds:f}=r.current,m=l.x-r.current.mouseStart.x,k=l.y-r.current.mouseStart.y;let b=JSON.parse(JSON.stringify(u));b.type==="path"?b.points=b.points.map(B=>({x:B.x+m,y:B.y+k})):b.type==="shape"&&(b.shape==="line"||b.shape==="arrow")?(b.startX+=m,b.endX+=m,b.startY+=k,b.endY+=k):(b.x+=m,b.y+=k);const M=f.x+f.width/2+m,y=f.y+f.height/2+k;let $=0,L=0;return M<0?$=0-M:M>p&&($=p-M),y<0?L=0-y:y>s&&(L=s-y),($!==0||L!==0)&&(b.type==="path"?b.points=b.points.map(B=>({x:B.x+$,y:B.y+L})):b.type==="shape"&&(b.shape==="line"||b.shape==="arrow")?(b.startX+=$,b.endX+=$,b.startY+=L,b.endY+=L):(b.x+=$,b.y+=L)),e.current=b,b},endDrag:()=>{const l=e.current;return e.current=null,r.current=null,t.current={x:0,y:0},l},updateCursor:(l,p,s,u,f,m)=>{if(u){const b=u?u.startsWith("path_")?{...s[parseInt(u.replace("path_",""))],type:"path",id:u}:p.find(M=>M.id===u):null;if(b){const M=pe(b,m);if(M){const y=Et(l.x,l.y,M,b);if(y){a(y.cursor);return}if(xt(l.x,l.y,M)){a("move");return}}}}const k=fn(l.x,l.y,p,s,f,m);a(k?"pointer":"default")},checkForHandle:(l,p,s)=>{const u=pe(p,s);return u?Et(l.x,l.y,u,p):null},checkIfPointInSelectedBounds:(l,p,s)=>{if(!p)return!1;const u=pe(p,s);return u&&xt(l.x,l.y,u)}}},Xe=10,mr=8,yr=70,Cr=5,wr=50,br=(e,t,r,d,a)=>{const o=a*Math.PI/180,i=Math.cos(o),c=Math.sin(o),h=r/2,g=d/2;return[{x:-h,y:-g},{x:h,y:-g},{x:h,y:g},{x:-h,y:g}].map(l=>({x:e+(l.x*i-l.y*c),y:t+(l.x*c+l.y*i)}))},De=(e,t,r,d,a)=>{const o=a*Math.PI/180,i=Math.cos(o),c=Math.sin(o),h=e-r,g=t-d;return{x:r+(h*i-g*c),y:d+(h*c+g*i)}},Mr=()=>{const e=C.useRef(null);return{resizeHandleRef:e,startResize:(a,o,i,c)=>{let h,g;o.type==="player"||o.type==="ball"?(h=(o.radius||20)*2,g=(o.radius||20)*2):o.type==="figure"?(h=o.size||30,g=o.size||30):o.type==="text"?(h=c.originalWidth||c.width,g=c.originalHeight||c.height):(h=o.width!==void 0?o.width:c.width,g=o.height!==void 0?o.height:c.height);let x,l;o.shape==="line"||o.shape==="arrow"?(x=(o.startX+o.endX)/2,l=(o.startY+o.endY)/2):o.type==="player"||o.type==="ball"||o.type==="figure"?(x=o.x,l=o.y):o.type==="text"?(x=c.centerX,l=c.centerY):(x=o.x+h/2,l=o.y+g/2);const p=o.rotation||0,s=br(x,l,h,g,p);let u={x,y:l},f={x:i.x,y:i.y};a.name==="topLeft"?(f=s[0],u=s[2]):a.name==="topRight"?(f=s[1],u=s[3]):a.name==="bottomRight"?(f=s[2],u=s[0]):a.name==="bottomLeft"?(f=s[3],u=s[1]):a.name==="top"?(f={x:(s[0].x+s[1].x)/2,y:(s[0].y+s[1].y)/2},u={x:(s[2].x+s[3].x)/2,y:(s[2].y+s[3].y)/2}):a.name==="bottom"?(f={x:(s[2].x+s[3].x)/2,y:(s[2].y+s[3].y)/2},u={x:(s[0].x+s[1].x)/2,y:(s[0].y+s[1].y)/2}):a.name==="left"?(f={x:(s[0].x+s[3].x)/2,y:(s[0].y+s[3].y)/2},u={x:(s[1].x+s[2].x)/2,y:(s[1].y+s[2].y)/2}):a.name==="right"&&(f={x:(s[1].x+s[2].x)/2,y:(s[1].y+s[2].y)/2},u={x:(s[0].x+s[3].x)/2,y:(s[0].y+s[3].y)/2});const m=f.x-i.x,k=f.y-i.y,b=f.x-u.x,M=f.y-u.y,y=b*b+M*M,$=De(i.x,i.y,x,l,-p),L=$.x-x,B=$.y-l;let P=0;(o.shape==="circle"||["player","ball","figure"].includes(o.type))&&(P=Math.sqrt(Math.pow(i.x-x,2)+Math.pow(i.y-l,2))),e.current={handle:a.name,object:{...o},startPos:i,anchorPoint:u,startVectorX:b,startVectorY:M,startLengthSq:y,pressOffsetX:m,pressOffsetY:k,startFontSize:o.fontSize||16,startX:o.x,startY:o.y,lineStartX:o.startX,lineStartY:o.startY,lineEndX:o.endX,lineEndY:o.endY,startCenterX:x,startCenterY:l,rotation:p,startLocalLeft:-Math.abs(h)/2,startLocalRight:Math.abs(h)/2,startLocalTop:-Math.abs(g)/2,startLocalBottom:Math.abs(g)/2,startFlippedX:h<0,startFlippedY:g<0,isHandleLeft:L<0,isHandleRight:L>0,isHandleTop:B<0,isHandleBottom:B>0,startWidth:h,startHeight:g,startDistanceFromCenter:P}},updateResize:a=>{if(!e.current)return null;const{handle:o,object:i,startFontSize:c,startCenterX:h,startCenterY:g,startDistanceFromCenter:x,rotation:l,lineStartX:p,lineStartY:s,lineEndX:u,lineEndY:f,startPos:m,startLocalLeft:k,startLocalRight:b,startLocalTop:M,startLocalBottom:y,isHandleLeft:$,isHandleRight:L,isHandleTop:B,isHandleBottom:P,startFlippedX:z,startFlippedY:S,startWidth:v,startHeight:R,startX:I,startY:Z,anchorPoint:A,startVectorX:j,startVectorY:_,startLengthSq:N,pressOffsetX:J,pressOffsetY:U}=e.current;let Y={...i};if(i.type==="text"){const O=a.x+J,V=a.y+U,D=O-A.x,F=V-A.y,ie=D*j+F*_;let H=ie/N;if(!["topLeft","topRight","bottomLeft","bottomRight"].includes(o)){const ne=Math.sqrt(N),Se=Math.sqrt(D*D+F*F),ce=ie>0?1:-1;H=Se/ne*ce}const q=8;let K=c*H;K<q&&(K=q,H=q/c),H<.1&&(H=.1),Y.fontSize=c*H;const te=v*H,re=R*H,oe=j*H,ge=_*H,we=A.x+oe*.5,de=A.y+ge*.5;return Y.x=we-te/2,Y.y=de-re/2,Y.width=te,Y.height=re,e.current.object=Y,Y}if(i.type==="shape"&&(i.shape==="line"||i.shape==="arrow")){const O=De(p,s,h,g,l),V=De(u,f,h,g,l);let D={...O},F={...V};["start","topLeft","left","top"].includes(o)?D={x:a.x,y:a.y}:F={x:a.x,y:a.y};const ie=(D.x+F.x)/2,H=(D.y+F.y)/2,q=De(D.x,D.y,ie,H,-l),K=De(F.x,F.y,ie,H,-l);return Y.startX=q.x,Y.startY=q.y,Y.endX=K.x,Y.endY=K.y,e.current.object=Y,Y}if(i.shape==="circle"||["player","ball","figure"].includes(i.type)){const O=Math.sqrt(Math.pow(a.x-h,2)+Math.pow(a.y-g,2)),V=x>0?O/x:1,D=Math.abs(v);if(i.shape==="circle"){const F=Math.max(Xe,D*V);Y.width=F,Y.height=F,Y.x=h-F/2,Y.y=g-F/2}else if(i.type==="player"){const F=D/2*V;Y.radius=Math.max(mr,Math.min(yr,F))}else if(i.type==="ball"){const F=D/2*V;Y.radius=Math.max(Cr,Math.min(wr,F))}else Y.size=Math.max(10,D*V);return e.current.object=Y,Y}if(i.type==="shape"){const O=l*Math.PI/180,V=Math.cos(-O),D=Math.sin(-O),F=a.x-m.x,ie=a.y-m.y,H=F*V-ie*D,q=F*D+ie*V;let K=k,te=b,re=M,oe=y;$?K+=H:L&&(te+=H),B?re+=q:P&&(oe+=q);let ge=z,we=S;K>te&&([K,te]=[te,K],ge=!ge),re>oe&&([re,oe]=[oe,re],we=!we);let de=te-K,ne=oe-re;de<Xe&&(de=Xe,$?K=te-de:te=K+de),ne<Xe&&(ne=Xe,B?re=oe-ne:oe=re+ne);const Se=(K+te)/2,ce=(re+oe)/2,at=Se*Math.cos(O)-ce*Math.sin(O),_e=Se*Math.sin(O)+ce*Math.cos(O),Ve=h+at,xe=g+_e;let Ne=ge?-de:de,ze=we?-ne:ne;return Y.width=Ne,Y.height=ze,Y.x=Ve-Ne/2,Y.y=xe-ze/2,e.current.object=Y,Y}return Y},endResize:()=>{const a=e.current;return e.current=null,a?a.object:null}}},vr=()=>{const e=C.useRef(!1),t=C.useRef([]),r=C.useRef(null),d=C.useRef(!1);return{drawingRef:e,currentPathRef:t,shapeStartRef:r,isDrawingShapeRef:d,startDrawing:l=>{e.current=!0,t.current=[{x:l.x,y:l.y}]},continueDrawing:l=>e.current?(t.current.push({x:l.x,y:l.y}),t.current):null,endDrawing:()=>{const l=t.current;return e.current=!1,t.current=[],l.length>1?l:null},startShape:l=>{d.current=!0,r.current=l},getShapePreview:l=>!d.current||!r.current?null:{start:r.current,end:l},endShape:(l,p)=>{if(!d.current||!r.current)return null;const s=r.current;let u=null;if(p==="line"||p==="arrow")Math.sqrt(Math.pow(l.x-s.x,2)+Math.pow(l.y-s.y,2))>5&&(u={startX:s.x,startY:s.y,endX:l.x,endY:l.y});else{const f=l.x-s.x,m=l.y-s.y;Math.abs(f)>5&&Math.abs(m)>5&&(u={x:s.x,y:s.y,width:f,height:m})}return d.current=!1,r.current=null,u},cancelDrawing:()=>{e.current=!1,t.current=[],d.current=!1,r.current=null}}},Lr=w.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,Sr=w.div`
  border: 2px solid #ddd;
  margin-top: 10px;
  background: white;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  position: relative;
  /* Приховуємо системний курсор, якщо активне малювання */
  cursor: ${e=>e.$activeTool==="drawing"?"none":e.cursor};
`,$r=w.canvas`
  display: block;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`,kr=w.canvas`
  display: block;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  touch-action: none; 
`,Br=w.textarea`
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
`,Tr=w.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  border-radius: 50%;
  border: 2px solid ${e=>e.color};
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.8), 0 0 4px rgba(0,0,0,0.2); /* Контраст */
  display: ${e=>e.visible?"block":"none"};
  transition: width 0.1s, height 0.1s; /* Плавна зміна розміру */
`,Er=({fieldSize:e,fieldType:t})=>{const r=C.useRef(null),d=C.useRef(null),a=C.useRef(null),o=C.useRef(null),i=C.useRef(!1),c=C.useRef(null),h=C.useRef(null),g=C.useRef(null),[x,l]=C.useState({width:800,height:500}),[p,s]=C.useState(!1),[u,f]=C.useState(""),[m,k]=C.useState({x:0,y:0}),[b,M]=C.useState(!1),y=ue(),{activeTool:$,drawColor:L,brushSize:B,brushOpacity:P,brushStyle:z,lineType:S,paths:v,objects:R,selectedObjectId:I,textFontSize:Z,textColor:A,shapeBorderColor:j,shapeBorderOpacity:_,shapeFillColor:N,shapeFillOpacity:J,shapeBorderWidth:U,shapeBorderStyle:Y,shapeLineCapStart:O,shapeLineCapEnd:V}=Pe(T=>T.tacticsBoard);C.useEffect(()=>{h.current=I},[I]);const{redrawStatic:D,drawLiveLayer:F,clearActiveLayer:ie,tempObjectDataRef:H,tempPathDataRef:q}=xr(r,d),{cursorStyle:K,setCursorStyle:te,startDrag:re,updateDragPosition:oe,endDrag:ge,updateCursor:we,checkForHandle:de,draggedObjectRef:ne,checkIfPointInSelectedBounds:Se}=fr(),{resizeHandleRef:ce,startResize:at,updateResize:_e,endResize:Ve}=Mr(),{drawingRef:xe,startDrawing:Ne,continueDrawing:ze,endDrawing:yt,shapeStartRef:Re,isDrawingShapeRef:$e,startShape:vn,endShape:Ct}=vr(),Ln=1500,Sn=640,$n=1400,st=e.width/e.height,wt=C.useCallback(()=>{var St;const T=a.current;if(!T)return{width:800,height:500};const G=((St=T.parentElement)==null?void 0:St.clientWidth)||window.innerWidth,W=G/Ln,E=$n*W,X=Sn*W,Q=E,he=Q/st,Lt=X,Pn=Lt*st;let ke,Ge;he<=X?(ke=Q,Ge=he):(ke=Pn,Ge=Lt);const lt=G*.95;if(ke>lt){const zn=lt/ke;ke=lt,Ge=Ge*zn}return{width:Math.floor(ke),height:Math.floor(Ge)}},[st]),Oe=T=>{const G=d.current;if(!G)return{x:0,y:0};let W,E;T.changedTouches&&T.changedTouches.length>0?(W=T.changedTouches[0].clientX,E=T.changedTouches[0].clientY):T.touches&&T.touches.length>0?(W=T.touches[0].clientX,E=T.touches[0].clientY):(W=T.clientX,E=T.clientY);const X=G.getBoundingClientRect(),Q=G.width/X.width,he=G.height/X.height;return{x:(W-X.left)*Q,y:(E-X.top)*he}},bt=T=>({x:Math.max(0,Math.min(T.x,x.width)),y:Math.max(0,Math.min(T.y,x.height))}),Ye=C.useCallback(T=>{if($==="drawing"&&g.current){let E,X;T.touches&&T.touches.length>0?(E=T.touches[0].clientX,X=T.touches[0].clientY):(E=T.clientX,X=T.clientY),g.current.style.left=`${E}px`,g.current.style.top=`${X}px`}if(!ne.current&&!ce.current&&!xe.current&&!$e.current)return;T.cancelable&&T.preventDefault();const G=Oe(T),W=bt(G);if(ce.current){const E=_e(G);E&&(E.type==="path"?q.current=E:H.current=E,D(v,R,h.current,$,L,B))}else if(ne.current){const E=oe(G,x.width,x.height);E&&(E.type==="path"?q.current=E:H.current=E,D(v,R,h.current,$,L,B))}else if(xe.current){const E=ze(W);E&&E.length>=2&&F({id:"live_drawing",type:"path",points:E,color:L,brushSize:B,opacity:P,brushStyle:z,lineType:S},null,S==="solid")}else if($e.current&&Re.current){const E=$.replace("shape_","");F(null,{type:E,start:Re.current,end:W,borderColor:j,borderStyle:Y,borderWidth:U,fillColor:N,fillOpacity:J},!1)}},[x,ne,ce,xe,$e,oe,_e,D,F,ze,v,R,$,L,B,Re,j,Y,U,N,J,P,z,S]),qe=C.useCallback(T=>{window.removeEventListener("mousemove",Ye),window.removeEventListener("mouseup",qe),window.removeEventListener("touchmove",Ye),window.removeEventListener("touchend",qe);const G=Oe(T),W=bt(G);if(ie(),xe.current){const E=yt();E&&y(Rn({points:E,color:L,brushSize:B,opacity:P,brushStyle:z,lineType:S}))}if($e.current&&Re.current){const E=$.replace("shape_",""),X=Ct(W,E);if(X){const Q={type:"shape",shape:E,...X,borderColor:j,borderOpacity:_,borderWidth:U,borderStyle:Y,color:j};E==="line"||E==="arrow"?(Q.lineCapStart=O,Q.lineCapEnd=E==="arrow"?"arrow":V):(Q.fillColor=N,Q.fillOpacity=J),y(ct(Q))}}if(ne.current){const E=ge();if(E)if(E.type==="path"){const X=parseInt(E.id.replace("path_",""));y(ve({index:X,updates:E}))}else y(Ie({id:E.id,updates:E}));H.current=null,q.current=null}if(ce.current){const E=Ve();if(E&&H.current)if(E.type==="path"){const X=parseInt(E.id.replace("path_",""));y(ve({index:X,updates:q.current}))}else y(Ie({id:H.current.id,updates:H.current}));H.current=null,q.current=null}te("default")},[Ye,xe,$e,Re,ne,ce,$,yt,Ct,ge,Ve,y,L,B,j,_,U,Y,N,J,O,V,te,v,R,x,P,z,S,ie]),Mt=T=>{if(T.button!==void 0&&T.button!==0)return;window.addEventListener("mousemove",Ye),window.addEventListener("mouseup",qe),window.addEventListener("touchmove",Ye,{passive:!1}),window.addEventListener("touchend",qe);const G=Oe(T),W=r.current;if(p){vt();return}if($==="cursor"){const E=I?I.startsWith("path_")?{...v[parseInt(I.replace("path_",""))],type:"path",id:I}:R.find(Q=>Q.id===I):null;if(E){const Q=pe(E,W);if(Q){const he=de(G,E,W);if(he){at(he,E,G,Q),E.type==="path"?q.current={...E}:H.current={...E};return}if(Se(G,E,W)){re(E,G,W),E.type==="path"?q.current={...E}:H.current={...E};return}}}const X=fn(G.x,G.y,R,v,B,W);X?(h.current=X.id,y($t(X.id)),pe(X,W)&&(re(X,G,W),X.type==="path"?q.current={...X}:H.current={...X},D(v,R,X.id,$,L,B))):(h.current=null,y(We()),D(v,R,null,$,L,B))}else if($==="drawing")Ne(G),F({id:"live_drawing",type:"path",points:[G],color:L,brushSize:B,opacity:P,brushStyle:z,lineType:S},null,!1);else if($.startsWith("shape_"))vn(G);else if($.startsWith("figure_")){const E={player:"👤",goalkeeper:"🧤",coach:"🧠",referee:"⚖️",goal:"🥅",cone:"🟨"},X=$.replace("figure_","");y(ct({type:"figure",figureType:X,icon:E[X],x:G.x,y:G.y,size:30}))}else if($==="ball")y(ct({type:"ball",x:G.x,y:G.y,radius:10}));else if($==="text"){const E=`text_${Date.now()}_${Math.random()}`;s(!0),f(""),k(G),c.current=E,y($t(E)),h.current=E}},kn=T=>{if(ne.current||ce.current||xe.current||$e.current||T.touches)return;$==="drawing"&&g.current&&(g.current.style.left=`${T.clientX}px`,g.current.style.top=`${T.clientY}px`);const G=Oe(T),W=r.current;$==="cursor"&&we(G,R,v,h.current,B,W)},Bn=()=>M(!0),Tn=()=>M(!1);C.useEffect(()=>{const T=()=>{const G=wt();l(G)};return T(),window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[wt]),C.useEffect(()=>{const T=r.current,G=d.current,W=a.current;T&&G&&W&&(T.width=x.width,T.height=x.height,T.style.width=`${x.width}px`,T.style.height=`${x.height}px`,G.width=x.width,G.height=x.height,G.style.width=`${x.width}px`,G.style.height=`${x.height}px`,W.style.width=`${x.width}px`,W.style.height=`${x.height}px`,i.current||(y(Yn({canvasWidth:x.width,canvasHeight:x.height})),i.current=!0),D(v,R,I,$,L,B))},[x,y,D,v,R,I,$,L,B]),C.useEffect(()=>{D(v,R,I,$,L,B)},[v,R,I,D,$,L,B]),C.useEffect(()=>{x.width>0&&x.height>0&&y(Gn({canvasWidth:x.width,canvasHeight:x.height}))},[x,y]),C.useEffect(()=>{if(p&&o.current&&d.current){const T=o.current;setTimeout(()=>{T.focus(),T.select()},0);const G=d.current,W=G.getBoundingClientRect(),E=G.width/W.width,X=G.height/W.height,Q=m.x/E,he=m.y/X;T.style.left=`${Q}px`,T.style.top=`${he}px`,T.style.fontSize=`${Z/X}px`,T.style.color=A,T.style.width="auto",T.style.height="auto"}},[p,m,A,Z]),C.useEffect(()=>{const T=G=>{G.key==="Escape"&&!p&&(y(We()),h.current=null)};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[I,p,y]),C.useEffect(()=>{y(We()),h.current=null},[$,y]);const En=T=>{f(T.target.value),o.current&&(o.current.style.height="auto",o.current.style.height=o.current.scrollHeight+"px")},vt=()=>{const T=u.trim();T&&y(Xn({id:c.current,x:m.x,y:m.y,text:T,fontSize:Z,color:A})),s(!1),f(""),c.current=null,y(je("cursor"))},In=T=>{T.key==="Escape"&&(T.preventDefault(),s(!1),f(""),y(We()),h.current=null,y(je("cursor")))};return n.jsxs(Lr,{children:[n.jsx(Tr,{ref:g,size:B,color:L,visible:$==="drawing"&&b}),n.jsxs(Sr,{ref:a,cursor:K,$activeTool:$,onMouseEnter:Bn,onMouseLeave:Tn,children:[n.jsx($r,{ref:r}),n.jsx(kr,{ref:d,onMouseDown:Mt,onTouchStart:Mt,onMouseMove:kn}),p&&n.jsx(Br,{ref:o,value:u,onChange:En,onBlur:vt,onKeyDown:In,placeholder:"Введіть текст",rows:1})]})]})},Ir=e=>C.createElement("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32",xmlSpace:"preserve",...e},C.createElement("path",{className:"st0",d:"M20,29h-8c-2.2,0-4-1.8-4-4V7c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v18C24,27.2,22.2,29,20,29z"}),C.createElement("circle",{className:"st0",cx:16,cy:16,r:4}),C.createElement("line",{className:"st0",x1:8,y1:16,x2:24,y2:16}),C.createElement("rect",{x:13,y:3,className:"st0",width:6,height:4}),C.createElement("rect",{x:13,y:25,className:"st0",width:6,height:4})),Pr=e=>C.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),zr=e=>C.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"})),Rr=e=>C.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("circle",{cx:12,cy:12,r:9,strokeWidth:2}),C.createElement("path",{d:"M18 18L6 6",strokeWidth:2})),bn=e=>C.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},C.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fillRule:"evenodd"},C.createElement("g",{id:"Arrow",transform:"translate(-528.000000, 0.000000)",fillRule:"nonzero"},C.createElement("g",{id:"forward_2_line",transform:"translate(528.000000, 0.000000)"},C.createElement("path",{d:"M17.954,11.6767 C16.6468,9.47493 14.2448,8 11.5,8 C7.35786,8 4,11.3579 4,15.5 C4,16.0523 3.55228,16.5 3,16.5 C2.44772,16.5 2,16.0523 2,15.5 C2,10.2533 6.25329,6 11.5,6 C14.6814,6 17.4961,7.56337 19.22,9.96279 L19.757,6.91751 C19.8529,6.37361 20.3715,6.01044 20.9154,6.10635 C21.4593,6.20225 21.8225,6.72091 21.7266,7.2648 L20.6847,13.1736 C20.6386,13.4348 20.4907,13.667 20.2735,13.8192 C19.9896,14.0179 19.6122,14.0542 19.2977,13.9445 L13.6174,12.9429 C13.0735,12.847 12.7103,12.3284 12.8062,11.7845 C12.9021,11.2406 13.4208,10.8774 13.9647,10.9733 L17.954,11.6767 Z",id:"\\u8DEF\\u5F84"}))))),Yr=e=>C.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.93417 2C7.95604 2 7.97799 2 8 2L16.0658 2C16.9523 1.99995 17.7161 1.99991 18.3278 2.08215C18.9833 2.17028 19.6117 2.36902 20.1213 2.87868C20.631 3.38835 20.8297 4.0167 20.9179 4.67221C21.0001 5.28388 21.0001 6.0477 21 6.9342L21 7.95C21 8.50229 20.5523 8.95 20 8.95C19.4477 8.95 19 8.50229 19 7.95V7.00001C19 6.02893 18.9979 5.40122 18.9357 4.93871C18.8774 4.50497 18.7832 4.36902 18.7071 4.2929C18.631 4.21677 18.495 4.12263 18.0613 4.06431C17.5988 4.00213 16.9711 4 16 4H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V4H8C7.02893 4 6.40122 4.00213 5.93871 4.06431C5.50497 4.12263 5.36902 4.21677 5.2929 4.2929C5.21677 4.36902 5.12263 4.50497 5.06431 4.93871C5.00213 5.40122 5 6.02893 5 7.00001V7.95C5 8.50229 4.55229 8.95 4 8.95C3.44772 8.95 3 8.50229 3 7.95V7.00001C3 6.97799 3 6.95604 3 6.93418C2.99995 6.04769 2.99991 5.28387 3.08215 4.67221C3.17028 4.0167 3.36902 3.38835 3.87868 2.87868C4.38835 2.36902 5.0167 2.17028 5.67221 2.08215C6.28387 1.99991 7.04769 1.99995 7.93417 2Z"}),C.createElement("path",{d:"M7 21H17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Mn=e=>C.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.51192 4.43057C6.82641 4.161 7.29989 4.19743 7.56946 4.51192L13.5695 11.5119C13.8102 11.7928 13.8102 12.2072 13.5695 12.4881L7.56946 19.4881C7.29989 19.8026 6.82641 19.839 6.51192 19.5695C6.19743 19.2999 6.161 18.8264 6.43057 18.5119L12.0122 12L6.43057 5.48811C6.161 5.17361 6.19743 4.70014 6.51192 4.43057ZM10.5121 4.43068C10.8266 4.16111 11.3001 4.19753 11.5697 4.51202L17.5697 11.512C17.8104 11.7929 17.8104 12.2073 17.5697 12.4882L11.5697 19.4882C11.3001 19.8027 10.8266 19.8391 10.5121 19.5696C10.1976 19.3 10.1612 18.8265 10.4308 18.512L16.0124 12.0001L10.4308 5.48821C10.1612 5.17372 10.1976 4.70024 10.5121 4.43068Z"})),Gr=e=>C.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("rect",{x:3,y:5,width:18,height:14,rx:2,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Xr=e=>C.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Dr=e=>C.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.0001 5.94363L4.76627 18H19.2339L12.0001 5.94363ZM10.7138 4.20006C11.2964 3.22905 12.7037 3.22905 13.2863 4.20006L21.4032 17.7282C22.0031 18.728 21.2829 20 20.117 20H3.88318C2.71724 20 1.99706 18.728 2.59694 17.7282L10.7138 4.20006Z"})),Zr=e=>C.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z"})),Fr=e=>C.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M6 12H18M18 12L13 7M18 12L13 17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ar=w.div`
  position: relative;
  display: inline-block;
`,Hr=w.button`
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
`,Wr=w.div`
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
`,jr=w.button`
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
`,ht=[{id:"rectangle",name:"Прямокутник",icon:n.jsx(Gr,{}),style:{stroke:"currentColor",fill:"none"}},{id:"circle",name:"Коло",icon:n.jsx(Xr,{}),style:{stroke:"currentColor",fill:"none"}},{id:"triangle",name:"Трикутник",icon:n.jsx(Dr,{}),style:{fill:"currentColor",stroke:"none"}},{id:"line",name:"Лінія",icon:n.jsx(Zr,{}),style:{fill:"currentColor",stroke:"none"}},{id:"arrow",name:"Стрілка",icon:n.jsx(Fr,{}),style:{stroke:"currentColor",fill:"none"}}],_r=({activeTool:e,onSelectShape:t})=>{const[r,d]=C.useState(!1),[a,o]=C.useState({top:0,left:0}),i=C.useRef(null),c=C.useRef(null),h=e.startsWith("shape_"),g=h?e.replace("shape_",""):null,x=ht.find(m=>m.id===g),l=()=>{if(c.current){const m=c.current.getBoundingClientRect();o({top:m.bottom+window.scrollY,left:m.left+window.scrollX})}d(!r)},p=m=>{t(m),d(!1)},s=m=>{i.current&&!i.current.contains(m.target)&&d(!1)};C.useEffect(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}),[]);const u=()=>{const m=x||ht[0];return n.jsx(Zt,{children:kt.cloneElement(m.icon,m.style)})},f=m=>kt.cloneElement(m.icon,m.style);return n.jsxs(Ar,{ref:i,children:[n.jsx(Hr,{ref:c,title:"Геометричні фігури",onClick:l,active:h,children:u()}),n.jsx(Wr,{isOpen:r,style:{top:a.top,left:a.left},children:ht.map(m=>n.jsx(jr,{onClick:()=>p(m),title:m.name,children:n.jsx(Zt,{children:f(m)})},m.id))})]})},Vr=w.div`
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
`,Or=w.div`
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
`,qr=w.button`
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
`,Ft=[{id:"player",name:"Гравець",icon:"👤"},{id:"goalkeeper",name:"Воротар",icon:"🧤"},{id:"coach",name:"Тренер",icon:"🧠"},{id:"referee",name:"Суддя",icon:"⚖️"},{id:"goal",name:"Ворота",icon:"🥅"},{id:"cone",name:"Стійка",icon:"🟨"}],Jr=({activeTool:e,onSelectFigure:t})=>{const[r,d]=C.useState(!1),[a,o]=C.useState({top:0,left:0}),i=C.useRef(null),c=C.useRef(null),h=e.startsWith("figure_"),g=h?e.replace("figure_",""):null,x=Ft.find(f=>f.id===g),l=()=>{if(c.current){const f=c.current.getBoundingClientRect();o({top:f.bottom+window.scrollY,left:f.left+window.scrollX})}d(!r)},p=f=>{t(f),d(!1)},s=f=>{i.current&&!i.current.contains(f.target)&&d(!1)};C.useEffect(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}),[]);const u=()=>x?x.icon:"👤";return n.jsxs(Vr,{ref:i,children:[n.jsx(Nr,{ref:c,title:"Спортивні фігури",onClick:l,active:h,children:u()}),n.jsx(Or,{isOpen:r,style:{top:a.top,left:a.left},children:Ft.map(f=>n.jsx(qr,{onClick:()=>p(f),title:f.name,children:f.icon},f.id))})]})},At=e=>C.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M9.19762 11.9582L9.91426 11.737L9.19762 11.9582ZM9.54558 10.8683L9.08995 10.2726L9.54558 10.8683ZM9.91896 14.2952L9.20232 14.5164L9.91896 14.2952ZM14.0579 14.2952L13.3413 14.074L14.0579 14.2952ZM14.4313 10.8683L13.9757 11.4641V11.4641L14.4313 10.8683ZM14.7793 11.9582L15.4959 12.1794L14.7793 11.9582ZM12.5948 9.46375L13.0504 8.86802L12.5948 9.46375ZM11.3821 9.46375L11.8377 10.0595L11.3821 9.46375ZM20.1847 17.75C20.5989 17.75 20.9347 17.4142 20.9347 17C20.9347 16.5858 20.5989 16.25 20.1847 16.25V17.75ZM14.7793 19.7351L14.0677 19.4982L14.7793 19.7351ZM13.4801 21.2631C13.3492 21.6561 13.5617 22.0807 13.9547 22.2116C14.3477 22.3424 14.7724 22.1299 14.9033 21.7369L13.4801 21.2631ZM3.99769 16.25C3.58348 16.25 3.24769 16.5858 3.24769 17C3.24769 17.4142 3.58348 17.75 3.99769 17.75V16.25ZM9.40314 19.7351L10.1147 19.4982L9.40314 19.7351ZM9.27917 21.7369C9.41002 22.1299 9.83469 22.3424 10.2277 22.2116C10.6207 22.0807 10.8332 21.6561 10.7024 21.2631L9.27917 21.7369ZM8.22071 17.3775L7.78185 17.9857L8.22071 17.3775ZM5.556 5.45942C5.4489 5.05928 5.03772 4.82173 4.63759 4.92882C4.23746 5.03591 3.9999 5.44709 4.10699 5.84723L5.556 5.45942ZM5.24951 7.21519L4.52501 7.40909V7.40909L5.24951 7.21519ZM3.59168 11.5885L3.17811 10.9628L3.17811 10.9628L3.59168 11.5885ZM1.62739 11.9879C1.28185 12.2163 1.18689 12.6816 1.4153 13.0271C1.64372 13.3727 2.109 13.4676 2.45454 13.2392L1.62739 11.9879ZM19.934 5.84732C20.0411 5.44719 19.8035 5.036 19.4034 4.92891C19.0033 4.82182 18.5921 5.05938 18.485 5.45951L19.934 5.84732ZM18.7915 7.21528L18.067 7.02137L18.7915 7.21528ZM20.4493 11.5886L20.0357 12.2143L20.4493 11.5886ZM21.5864 13.2393C21.932 13.4677 22.3973 13.3728 22.6257 13.0272C22.8541 12.6817 22.7591 12.2164 22.4136 11.988L21.5864 13.2393ZM16.0903 3.83623C16.4288 3.5975 16.5096 3.12956 16.2709 2.79107C16.0322 2.45257 15.5642 2.3717 15.2257 2.61044L16.0903 3.83623ZM14.3376 4.15456L14.7699 4.76746L14.3376 4.15456ZM9.66562 4.10403L9.22021 4.70744V4.70744L9.66562 4.10403ZM8.61539 2.39659C8.28213 2.15059 7.81255 2.22133 7.56656 2.55459C7.32056 2.88784 7.3913 3.35742 7.72456 3.60341L8.61539 2.39659ZM14.7793 11.3678L14.0627 11.589L14.7793 11.3678ZM9.19762 11.3678L9.91426 11.589L9.19762 11.3678ZM21.2269 12C21.2269 17.1095 17.0899 21.25 11.9885 21.25V22.75C17.92 22.75 22.7269 17.9362 22.7269 12H21.2269ZM11.9885 21.25C6.88701 21.25 2.75 17.1095 2.75 12H1.25C1.25 17.9362 6.05695 22.75 11.9885 22.75V21.25ZM2.75 12C2.75 6.89055 6.88701 2.75 11.9885 2.75V1.25C6.05695 1.25 1.25 6.06376 1.25 12H2.75ZM11.9885 2.75C17.0899 2.75 21.2269 6.89055 21.2269 12H22.7269C22.7269 6.06376 17.92 1.25 11.9885 1.25V2.75ZM12.1392 10.0595L13.9757 11.4641L14.887 10.2726L13.0504 8.86802L12.1392 10.0595ZM14.0626 11.737L13.3413 14.074L14.7746 14.5164L15.4959 12.1794L14.0626 11.737ZM13.1036 14.25H10.8733V15.75H13.1036V14.25ZM10.6356 14.074L9.91426 11.737L8.48098 12.1794L9.20232 14.5164L10.6356 14.074ZM10.0012 11.4641L11.8377 10.0595L10.9265 8.86802L9.08995 10.2726L10.0012 11.4641ZM20.1847 16.25H18.5696V17.75H20.1847V16.25ZM14.0677 19.4982L13.4801 21.2631L14.9033 21.7369L15.4909 19.972L14.0677 19.4982ZM18.5696 16.25C17.892 16.25 17.3207 16.2489 16.8555 16.302C16.3711 16.3574 15.9264 16.4781 15.5228 16.7693L16.4006 17.9857C16.5201 17.8994 16.6846 17.8313 17.0258 17.7923C17.3863 17.7511 17.8574 17.75 18.5696 17.75V16.25ZM15.4909 19.972C15.7161 19.2956 15.8662 18.8484 16.0193 18.5189C16.1643 18.2069 16.2809 18.072 16.4006 17.9857L15.5228 16.7693C15.1193 17.0605 14.8645 17.4444 14.659 17.8868C14.4615 18.3117 14.282 18.8545 14.0677 19.4982L15.4909 19.972ZM3.99769 17.75H5.61279V16.25H3.99769V17.75ZM8.69154 19.972L9.27917 21.7369L10.7024 21.2631L10.1147 19.4982L8.69154 19.972ZM5.61279 17.75C6.325 17.75 6.79611 17.7511 7.15658 17.7923C7.49784 17.8313 7.66228 17.8994 7.78185 17.9857L8.65958 16.7693C8.25598 16.4781 7.81137 16.3574 7.32692 16.302C6.86168 16.2489 6.29041 16.25 5.61279 16.25V17.75ZM10.1147 19.4982C9.90043 18.8545 9.7209 18.3117 9.52346 17.8868C9.31791 17.4445 9.06311 17.0605 8.65958 16.7693L7.78185 17.9857C7.90148 18.072 8.01815 18.2069 8.16314 18.5189C8.31624 18.8484 8.46634 19.2956 8.69154 19.972L10.1147 19.4982ZM4.10699 5.84723L4.52501 7.40909L5.97401 7.02128L5.556 5.45942L4.10699 5.84723ZM3.17811 10.9628L1.62739 11.9879L2.45454 13.2392L4.00526 12.2142L3.17811 10.9628ZM4.52501 7.40909C4.70933 8.09777 4.83021 8.55381 4.88378 8.91324C4.93452 9.25362 4.9114 9.43069 4.85896 9.56902L6.26156 10.1007C6.43795 9.63541 6.43932 9.17465 6.3674 8.69211C6.29831 8.22862 6.14941 7.67663 5.97401 7.02128L4.52501 7.40909ZM4.00526 12.2142C4.57077 11.8404 5.04807 11.5262 5.407 11.2252C5.78074 10.9119 6.08516 10.5661 6.26156 10.1007L4.85896 9.56902C4.80654 9.70729 4.70659 9.855 4.44321 10.0759C4.16501 10.3091 3.77244 10.57 3.17811 10.9628L4.00526 12.2142ZM18.485 5.45951L18.067 7.02137L19.516 7.40918L19.934 5.84732L18.485 5.45951ZM20.0357 12.2143L21.5864 13.2393L22.4136 11.988L20.8629 10.9629L20.0357 12.2143ZM18.067 7.02137C17.8916 7.67672 17.7427 8.22871 17.6736 8.6922C17.6017 9.17474 17.603 9.6355 17.7794 10.1008L19.182 9.56911C19.1296 9.43078 19.1065 9.25372 19.1572 8.91333C19.2108 8.5539 19.3316 8.09787 19.516 7.40918L18.067 7.02137ZM20.8629 10.9629C20.2685 10.5701 19.876 10.3092 19.5978 10.0759C19.3344 9.85509 19.2344 9.70739 19.182 9.56911L17.7794 10.1008C17.9558 10.5662 18.2602 10.912 18.634 11.2253C18.9929 11.5263 19.4702 11.8405 20.0357 12.2143L20.8629 10.9629ZM15.2257 2.61044L13.9054 3.54166L14.7699 4.76746L16.0903 3.83623L15.2257 2.61044ZM10.111 3.50061L8.61539 2.39659L7.72456 3.60341L9.22021 4.70744L10.111 3.50061ZM13.9054 3.54166C13.3231 3.9523 12.9373 4.22303 12.6189 4.39721C12.3174 4.56214 12.1438 4.60125 11.9966 4.59965L11.9803 6.09957C12.478 6.10495 12.9109 5.94721 13.3387 5.7132C13.7496 5.48845 14.2159 5.15817 14.7699 4.76746L13.9054 3.54166ZM9.22021 4.70744C9.76562 5.11004 10.2247 5.45033 10.6306 5.68391C11.0533 5.92712 11.4827 6.09418 11.9803 6.09957L11.9966 4.59965C11.8494 4.59806 11.6767 4.5552 11.3788 4.38379C11.0642 4.20276 10.6843 3.92375 10.111 3.50061L9.22021 4.70744ZM13.9757 11.4641C14.0179 11.4963 14.0475 11.5399 14.0627 11.589L15.4959 11.1465C15.3911 10.807 15.1828 10.4989 14.887 10.2726L13.9757 11.4641ZM14.0627 11.589C14.0773 11.6364 14.0779 11.6876 14.0626 11.737L15.4959 12.1794C15.6023 11.8349 15.5974 11.4754 15.4959 11.1465L14.0627 11.589ZM18.1938 9.14203L14.4923 10.6748L15.0662 12.0607L18.7677 10.5279L18.1938 9.14203ZM13.0504 8.86802C12.7371 8.62838 12.3624 8.50841 11.9885 8.50841V10.0084C12.0419 10.0084 12.0945 10.0253 12.1392 10.0595L13.0504 8.86802ZM11.9885 8.50841C11.6146 8.50841 11.2398 8.62838 10.9265 8.86802L11.8377 10.0595C11.8824 10.0253 11.935 10.0084 11.9885 10.0084V8.50841ZM12.7385 9.25841V5.34961H11.2385V9.25841H12.7385ZM13.3413 14.074C13.3259 14.1241 13.2962 14.166 13.2572 14.1967L14.1852 15.3752C14.4575 15.1608 14.6671 14.8646 14.7746 14.5164L13.3413 14.074ZM13.2572 14.1967C13.214 14.2308 13.1607 14.25 13.1036 14.25V15.75C13.5063 15.75 13.8846 15.6119 14.1852 15.3752L13.2572 14.1967ZM16.5291 16.887L14.2886 14.2954L13.1538 15.2765L15.3944 17.868L16.5291 16.887ZM10.8733 14.25C10.8162 14.25 10.7629 14.2308 10.7197 14.1967L9.79172 15.3752C10.0923 15.6119 10.4706 15.75 10.8733 15.75V14.25ZM10.7197 14.1967C10.6807 14.166 10.651 14.1241 10.6356 14.074L9.20232 14.5164C9.3098 14.8646 9.51943 15.1608 9.79172 15.3752L10.7197 14.1967ZM8.81059 17.8407L10.8456 15.2492L9.66584 14.3228L7.63084 16.9143L8.81059 17.8407ZM9.91426 11.737C9.89899 11.6876 9.89961 11.6364 9.91426 11.589L8.48099 11.1465C8.37949 11.4754 8.37465 11.8349 8.48098 12.1794L9.91426 11.737ZM9.91426 11.589C9.9294 11.5399 9.95905 11.4963 10.0012 11.4641L9.08995 10.2726C8.79412 10.4989 8.58579 10.807 8.48099 11.1465L9.91426 11.589ZM9.48889 10.6766L5.85153 9.14373L5.269 10.526L8.90636 12.0589L9.48889 10.6766Z"})),Ur=e=>C.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5262 17.4999C18.4887 22.7611 11.7612 24.5637 6.49994 21.5262C1.23873 18.4886 -0.563901 11.7611 2.47367 6.49988C5.51123 1.23866 12.2387 -0.563962 17.4999 2.4736C22.7612 5.51117 24.5638 12.2387 21.5262 17.4999ZM5.84382 7.87995C5.25279 7.64272 4.74291 7.45257 4.3292 7.30543C5.59153 5.24057 7.56267 3.85898 9.74648 3.29362C9.77176 3.62621 9.82851 4.00289 9.93722 4.40861C10.3269 5.86297 11.3579 7.58777 13.75 8.96886C14.0666 9.15165 14.3765 9.31079 14.6793 9.44842C14.4757 10.219 14.1794 11.0351 13.7614 11.8848C13.3566 11.6365 12.936 11.3857 12.5 11.1339C9.85449 9.60655 7.52076 8.55305 5.84382 7.87995ZM12.7587 13.6161C12.3555 13.3682 11.9358 13.1176 11.5 12.866C8.94938 11.3934 6.70297 10.3799 5.09882 9.73602C4.44209 9.47241 3.89359 9.27099 3.47664 9.12556C2.8887 10.8629 2.86217 12.7007 3.33339 14.4015C3.63406 14.2571 3.98864 14.1179 4.39435 14.0092C5.84872 13.6195 7.85792 13.65 10.25 15.0311C10.5667 15.2139 10.8594 15.4027 11.13 15.5961C11.6875 15.0424 12.2384 14.3885 12.7587 13.6161ZM12.6204 16.9341C13.4037 17.8315 13.839 18.756 14.0628 19.5913C14.1715 19.997 14.2283 20.3736 14.2536 20.7061C15.962 20.2638 17.5403 19.3219 18.7509 17.9441C18.4164 17.6557 17.9678 17.2815 17.4112 16.8446C16.6284 16.2301 15.633 15.4925 14.4426 14.6962C13.8639 15.5605 13.2482 16.3006 12.6204 16.9341ZM9.52737 16.9296C9.43788 16.8737 9.34548 16.8182 9.25005 16.7631C7.31205 15.6442 5.84818 15.6902 4.91199 15.9411C4.58 16.03 4.30141 16.1484 4.0805 16.2639C4.53358 17.1073 5.12461 17.8846 5.84359 18.5583C5.87614 18.5513 5.90977 18.5439 5.94444 18.5361C6.44532 18.4223 7.15871 18.2112 7.97658 17.8245C8.4626 17.5947 8.98712 17.3022 9.52737 16.9296ZM7.92672 20.018C8.21347 19.909 8.51642 19.7815 8.83145 19.6326C9.54844 19.2936 10.3256 18.8442 11.1145 18.2503C11.6989 18.9202 11.9873 19.5728 12.131 20.109C12.2199 20.4409 12.2567 20.7413 12.2672 20.9903C10.8031 21.0352 9.31171 20.7231 7.92672 20.018ZM18.6461 15.2714C17.8061 14.612 16.7364 13.8204 15.4558 12.968C15.9672 11.9634 16.3317 10.9922 16.5833 10.0701C17.7521 10.2998 18.7704 10.2145 19.6057 9.99072C20.0114 9.88202 20.3659 9.74284 20.6666 9.59846C21.2688 11.7723 21.0579 14.1701 19.9008 16.2957C19.5666 16.011 19.147 15.6645 18.6461 15.2714ZM16.9702 8.10789C17.8425 8.27902 18.5519 8.20254 19.0881 8.05887C19.42 7.96992 19.6986 7.85154 19.9195 7.73607C19.2263 6.44565 18.2102 5.3101 16.907 4.46319C16.956 4.76614 16.9971 5.09234 17.0257 5.43977C17.0906 6.23015 17.09 7.1278 16.9702 8.10789ZM15.0328 7.39372C15.0854 6.73963 15.0764 6.13922 15.0324 5.60348C14.9583 4.70183 14.7845 3.97847 14.6326 3.4878C14.622 3.45374 14.6116 3.42082 14.6013 3.38905C13.6584 3.10331 12.6898 2.9801 11.7329 3.00943C11.7433 3.2585 11.7801 3.55897 11.8691 3.89097C12.1199 4.82716 12.812 6.11791 14.75 7.23681C14.8454 7.2919 14.9397 7.34416 15.0328 7.39372Z"})),Kr=e=>C.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M11.5697 12.5532L12.1617 13.0137V13.0137L11.5697 12.5532ZM11.3142 3.64586L12.0065 3.93432V3.93432L11.3142 3.64586ZM18.555 14.5045C18.8336 14.198 18.811 13.7237 18.5045 13.445C18.198 13.1664 17.7237 13.189 17.445 13.4955L18.555 14.5045ZM17.7087 14.3204L17.1538 13.8159L17.1538 13.8159L17.7087 14.3204ZM21.2426 10.7426L21.7773 10.2166L21.773 10.2123L21.2426 10.7426ZM21.4531 12.026C21.7436 12.3213 22.2184 12.3251 22.5137 12.0346C22.809 11.7442 22.8129 11.2693 22.5224 10.974L21.4531 12.026ZM5.7327 19.0428C5.31848 19.0428 4.9827 19.3786 4.9827 19.7928C4.9827 20.207 5.31848 20.5428 5.7327 20.5428V19.0428ZM3.5 15.75C3.08579 15.75 2.75 16.0858 2.75 16.5C2.75 16.9142 3.08579 17.25 3.5 17.25V15.75ZM8.19231 3.35575C8.35162 2.9734 8.17081 2.5343 7.78846 2.37498C7.40611 2.21567 6.96701 2.39648 6.80769 2.77883L8.19231 3.35575ZM6.80769 15.2885C6.96701 15.6708 7.40611 15.8516 7.78846 15.6923C8.17081 15.533 8.35162 15.0939 8.19231 14.7115L6.80769 15.2885ZM11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5C10.25 6.91421 10.5858 7.25 11 7.25V5.75ZM19.876 16.916C20.1057 17.2607 20.5714 17.3538 20.916 17.124C21.2607 16.8943 21.3538 16.4286 21.124 16.084L19.876 16.916ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75C2.75 6.89137 6.89137 2.75 12 2.75V1.25ZM12 12.75H12.0917V11.25H12V12.75ZM11.408 11.5395L10.9777 12.0928L12.1617 13.0137L12.592 12.4605L11.408 11.5395ZM11.3077 1.71154L10.6219 3.35739L12.0065 3.93432L12.6923 2.28846L11.3077 1.71154ZM17.445 13.4955L17.1538 13.8159L18.2637 14.8249L18.555 14.5045L17.445 13.4955ZM20.708 11.2686L21.4531 12.026L22.5224 10.974L21.7773 10.2167L20.708 11.2686ZM17.1538 13.8159C14.2838 16.9729 9.96086 19.0428 5.7327 19.0428V20.5428C10.4211 20.5428 15.1357 18.2657 18.2637 14.8249L17.1538 13.8159ZM10.6219 3.35739C9.39039 6.31308 9.66695 9.68222 11.364 12.3975L12.636 11.6025C11.1965 9.29929 10.9619 6.44145 12.0065 3.93432L10.6219 3.35739ZM10.9777 12.0928C9.18293 14.4003 6.42334 15.75 3.5 15.75V17.25C6.88622 17.25 10.0828 15.6866 12.1617 13.0137L10.9777 12.0928ZM6.80769 2.77883C5.13077 6.80344 5.13077 11.2638 6.80769 15.2885L8.19231 14.7115C6.66923 11.0562 6.66923 7.01114 8.19231 3.35575L6.80769 2.77883ZM11 7.25C14.6428 7.25 18.1364 8.6971 20.7123 11.273L21.773 10.2123C18.9158 7.35514 15.0406 5.75 11 5.75V7.25ZM12.0917 12.75C15.2197 12.75 18.1408 14.3133 19.876 16.916L21.124 16.084C19.1107 13.064 15.7213 11.25 12.0917 11.25V12.75Z"})),Qr=e=>C.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.9386 4.73542C13.3511 4.69785 13.716 5.0018 13.7535 5.4143C13.8024 5.95058 13.893 6.53361 14.045 7.14711C14.1447 7.54916 13.8995 7.95586 13.4974 8.05549C13.0954 8.15512 12.6887 7.90997 12.5891 7.50791C12.4172 6.81421 12.3148 6.15558 12.2597 5.55036C12.2221 5.13785 12.5261 4.77299 12.9386 4.73542ZM5.23942 9.18054C5.47821 8.84208 5.94616 8.76129 6.28461 9.00008C6.78119 9.35043 7.30041 9.76836 7.81522 10.2641C8.1136 10.5514 8.12256 11.0262 7.83525 11.3246C7.54794 11.6229 7.07315 11.6319 6.77478 11.3446C6.31949 10.9062 5.85988 10.5362 5.41988 10.2257C5.08142 9.98694 5.00063 9.51899 5.23942 9.18054ZM13.836 8.99599C14.2094 8.81661 14.6574 8.97385 14.8368 9.3472C14.9605 9.60468 15.097 9.86417 15.2474 10.1247C15.3979 10.3852 15.5543 10.6332 15.7155 10.869C15.9491 11.2111 15.8612 11.6778 15.5192 11.9114C15.1772 12.145 14.7105 12.0572 14.4769 11.7151C14.2947 11.4485 14.118 11.1685 13.9484 10.8747C13.7788 10.5809 13.6246 10.2879 13.4848 9.99681C13.3054 9.62346 13.4627 9.17538 13.836 8.99599ZM8.48046 12.088C8.82249 11.8544 9.28917 11.9422 9.52281 12.2843C9.70496 12.5509 9.88164 12.8309 10.0513 13.1247C10.2209 13.4185 10.375 13.7115 10.5149 14.0026C10.6943 14.3759 10.537 14.824 10.1637 15.0034C9.79032 15.1828 9.34223 15.0256 9.16285 14.6522C9.03914 14.3947 8.90267 14.1352 8.75225 13.8747C8.60182 13.6142 8.44534 13.3662 8.28421 13.1304C8.05057 12.7883 8.13843 12.3217 8.48046 12.088ZM16.1644 12.6748C16.4517 12.3765 16.9265 12.3675 17.2249 12.6548C17.6802 13.0932 18.1398 13.4632 18.5798 13.7737C18.9183 14.0125 18.9991 14.4804 18.7603 14.8189C18.5215 15.1573 18.0535 15.2381 17.7151 14.9993C17.2185 14.649 16.6993 14.2311 16.1845 13.7353C15.8861 13.448 15.8771 12.9732 16.1644 12.6748ZM10.5022 15.9439C10.9043 15.8443 11.311 16.0894 11.4106 16.4915C11.5825 17.1852 11.6849 17.8438 11.74 18.4491C11.7776 18.8616 11.4736 19.2264 11.0611 19.264C10.6486 19.3016 10.2837 18.9976 10.2462 18.5851C10.1973 18.0488 10.1067 17.4658 9.95466 16.8523C9.85502 16.4502 10.1002 16.0436 10.5022 15.9439Z"}),C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2859 1.32632C11.0551 1.05591 8.71992 1.48034 6.62484 2.68993C1.4832 5.65846 -0.278462 12.2331 2.69007 17.3747C5.6586 22.5164 12.2332 24.278 17.3748 21.3095C19.4699 20.0999 21.0051 18.2898 21.8863 16.2227C23.1661 13.2206 23.0684 9.67094 21.3096 6.62471C19.5509 3.57847 16.5256 1.71902 13.2859 1.32632ZM13.7802 3.08033C13.7309 3.49161 13.3576 3.7851 12.9463 3.73585C12.5351 3.68661 12.2416 3.31329 12.2908 2.90201C12.297 2.85081 12.3032 2.8013 12.3096 2.75354C10.638 2.6958 8.93097 3.09054 7.37484 3.98897C5.81951 4.88694 4.62362 6.16839 3.83764 7.64494C3.88216 7.66328 3.92814 7.68258 3.97552 7.70286C4.35631 7.86585 4.53288 8.30668 4.36989 8.68748C4.20689 9.06827 3.76606 9.24484 3.38527 9.08184C3.33556 9.06057 3.2878 9.04062 3.24212 9.02195C2.41524 11.457 2.60225 14.2226 3.98911 16.6247C5.37596 19.0268 7.67752 20.5716 10.1998 21.073C10.2065 21.0241 10.2131 20.9728 10.2195 20.9191C10.2687 20.5078 10.6421 20.2143 11.0533 20.2636C11.4646 20.3128 11.7581 20.6861 11.7089 21.0974C11.7027 21.1486 11.6965 21.198 11.6901 21.2458C13.3618 21.3034 15.0695 20.9084 16.6248 20.0104C18.181 19.112 19.3764 17.831 20.1621 16.3545C20.1176 16.3362 20.0716 16.3168 20.0242 16.2966C19.6434 16.1336 19.4668 15.6927 19.6298 15.3119C19.7928 14.9311 20.2336 14.7546 20.6144 14.9176C20.6641 14.9388 20.7119 14.9588 20.7576 14.9775C21.5849 12.5411 21.3972 9.77639 20.0106 7.37471C18.624 4.97302 16.3236 3.42808 13.7999 2.92639C13.7932 2.97529 13.7866 3.02664 13.7802 3.08033Z"})),eo=e=>C.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.1665 2.75836L21.2416 8.83351C21.2677 7.81177 21.2303 6.84352 21.1649 5.98862C21.0341 4.27797 19.722 2.96586 18.0114 2.83507C17.1565 2.76971 16.1882 2.7323 15.1665 2.75836ZM21.1071 10.8203L13.1797 2.89285C10.483 3.1978 7.77958 4.04236 5.91097 5.91097C4.04236 7.77958 3.1978 10.483 2.89285 13.1797L10.8203 21.1071C13.517 20.8022 16.2204 19.9576 18.089 18.089C19.9576 16.2204 20.8022 13.517 21.1071 10.8203ZM8.83351 21.2416L2.75836 15.1665C2.7323 16.1882 2.76971 17.1565 2.83507 18.0114C2.96587 19.722 4.27797 21.0341 5.98861 21.1649C6.84352 21.2303 7.81177 21.2677 8.83351 21.2416ZM13.3854 1.36321C15.1096 1.19733 16.7638 1.2353 18.1257 1.33944C20.5746 1.52667 22.4733 3.4254 22.6606 5.87426C22.7647 7.23618 22.8027 8.89045 22.6368 10.6146C22.3524 13.5707 21.4579 16.8414 19.1497 19.1497C16.8414 21.4579 13.5707 22.3524 10.6146 22.6368C8.89045 22.8027 7.23618 22.7647 5.87426 22.6606C3.4254 22.4733 1.52667 20.5746 1.33944 18.1257C1.2353 16.7638 1.19733 15.1096 1.36321 13.3854C1.6476 10.4293 2.54206 7.15857 4.85031 4.85031C7.15857 2.54206 10.4293 1.6476 13.3854 1.36321ZM11.9426 8.1601C12.2355 7.86721 12.7104 7.86721 13.0032 8.1601L13.8914 9.0482L14.7795 8.1601C15.0723 7.86721 15.5472 7.86721 15.8401 8.1601C16.133 8.45299 16.133 8.92787 15.8401 9.22076L14.952 10.1089L15.8401 10.997C16.133 11.2899 16.133 11.7647 15.8401 12.0576C15.5472 12.3505 15.0723 12.3505 14.7795 12.0576L13.8914 11.1695L13.0608 12.0001L13.9489 12.8882C14.2418 13.1811 14.2418 13.656 13.9489 13.9489C13.656 14.2418 13.1811 14.2418 12.8882 13.9489L12.0001 13.0608L11.1695 13.8914L12.0576 14.7795C12.3505 15.0723 12.3505 15.5472 12.0576 15.8401C11.7647 16.133 11.2899 16.133 10.997 15.8401L10.1089 14.952L9.22076 15.8401C8.92787 16.133 8.45299 16.133 8.1601 15.8401C7.86721 15.5472 7.86721 15.0723 8.1601 14.7795L9.0482 13.8914L8.1601 13.0032C7.86721 12.7104 7.86721 12.2355 8.1601 11.9426C8.45299 11.6497 8.92787 11.6497 9.22076 11.9426L10.1089 12.8307L10.9394 12.0001L10.0513 11.112C9.75845 10.8191 9.75845 10.3442 10.0513 10.0513C10.3442 9.75845 10.8191 9.75845 11.112 10.0513L12.0001 10.9394L12.8307 10.1089L11.9426 9.22076C11.6497 8.92787 11.6497 8.45299 11.9426 8.1601Z"})),to=e=>C.createElement("svg",{fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 32 32","data-name":"Layer 1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("rect",{height:1,transform:"translate(20 51) rotate(180)",width:16,x:2,y:25}),C.createElement("rect",{height:1,transform:"translate(26 59) rotate(180)",width:16,x:5,y:29}),C.createElement("rect",{height:1,transform:"translate(39 -8) rotate(90)",width:19,x:14,y:15}),C.createElement("rect",{height:1,transform:"translate(21 10) rotate(90)",width:19,x:-4,y:15}),C.createElement("path",{d:"M24,25H23v2a2,2,0,0,1-2,2H20v1h1a3,3,0,0,0,3-3Z"}),C.createElement("path",{d:"M17,26h1v1a2,2,0,0,0,2,2h1v1H20a3,3,0,0,1-3-3Z"}),C.createElement("path",{d:"M2,26H3v1a2,2,0,0,0,2,2H6v1H5a3,3,0,0,1-3-3Z"}),C.createElement("rect",{height:1,width:6,x:24,y:6}),C.createElement("rect",{height:1,width:19,x:8,y:2}),C.createElement("path",{d:"M5,6H6V5A2,2,0,0,1,8,3H9V2H8A3,3,0,0,0,5,5Z"}),C.createElement("path",{d:"M23,6h1V5a2,2,0,0,1,2-2h1V2H26a3,3,0,0,0-3,3Z"}),C.createElement("path",{d:"M30,6H29V5a2,2,0,0,0-2-2H26V2h1a3,3,0,0,1,3,3Z"})),no=w.div`
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
`,ro=w.div`
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
`,oo=w.div`
  padding: 20px 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 2px solid ${({theme:e})=>e.mainBGColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme:e})=>e.ContainerBGColor};
`,io=w.h2`
  margin: 0;
  font-size: 24px;
  color: ${({theme:e})=>e.textBlack};
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,ao=w.button`
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
`,so=w.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`,lo=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  @media (max-width: 768px) {
    gap: 6px;
  }
`,co=w.button`
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
`,ho=w.div`
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
`,po=w.div`
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
`,uo=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
`,go=w.div`
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
`,xo=w.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.textBlack};
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,fo=w.div`
  font-size: 13px;
  color: ${({theme:e})=>e.textGray};
  line-height: 1.5;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,mo=w.div`
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
`,yo=w.div`
  position: relative;
  width: ${e=>{const d=e.fieldWidth,a=e.fieldHeight,o=100/d,i=80/a,c=Math.min(o,i);return`${d*c}px`}};
  height: ${e=>{const d=e.fieldWidth,a=e.fieldHeight,o=100/d,i=80/a,c=Math.min(o,i);return`${a*c}px`}};
  background: ${({theme:e})=>e.greenMain};
  border: 2px solid ${({theme:e})=>e.darkGreen};
  border-radius: 2px;
  
  /* Гарантуємо мінімальний розмір для дуже малих полів */
  min-width: 20px;
  min-height: 20px;
`,Ht=w.div`
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
`,Co={FOOTBALL:[{id:"football_standard",name:"Стандартне поле",width:105,height:68},{id:"football_small",name:"Мале поле",width:90,height:45},{id:"football_futsal",name:"Футзал",width:40,height:20}],BASKETBALL:[{id:"basketball_nba",name:"NBA",width:28.65,height:15.24},{id:"basketball_fiba",name:"FIBA",width:28,height:15}],VOLLEYBALL:[{id:"volleyball_indoor",name:"Закритий майданчик",width:18,height:9},{id:"volleyball_beach",name:"Пляжний майданчик",width:16,height:8}],TENNIS:[{id:"tennis_singles",name:"Одиночний розряд",width:23.77,height:8.23},{id:"tennis_doubles",name:"Парний розряд",width:23.77,height:10.97}],RUGBY:[{id:"rugby_standard",name:"Регбі (15 гравців)",width:100,height:70},{id:"rugby_sevens",name:"Регбі-7",width:94,height:68}],HANDBALL:[{id:"handball_standard",name:"Гандбол",width:40,height:20}],SHEET:[{id:"a4_portrait",name:"A4 Портрет",width:21,height:29.7},{id:"a4_landscape",name:"A4 Ландшафт",width:29.7,height:21},{id:"a3_portrait",name:"A3 Портрет",width:29.7,height:42},{id:"a3_landscape",name:"A3 Ландшафт",width:42,height:29.7},{id:"a3_landscape1",name:"A3 Ландшафт",width:600,height:29.7},{id:"a3_landscape2",name:"A3 Ландшафт",width:2,height:529.7}]},wo=[{id:"FOOTBALL",name:"Футбол",icon:At},{id:"RUGBY",name:"Регбі",icon:eo},{id:"BASKETBALL",name:"Баскетбол",icon:Ur},{id:"VOLLEYBALL",name:"Волейбол",icon:Kr},{id:"TENNIS",name:"Теніс",icon:Qr},{id:"HANDBALL",name:"Гандбол",icon:At},{id:"SHEET",name:"Аркуш",icon:to}],bo=({isOpen:e,onClose:t,onSelectField:r,currentFieldId:d})=>{var p;const[a,o]=C.useState("FOOTBALL"),[i,c]=C.useState(d);if(!e)return null;const h=s=>{c(s.id),r(s),setTimeout(()=>t(),300)},g=s=>{s.target===s.currentTarget&&t()},x=(s,u)=>u==="SHEET"?`${s.width}см × ${s.height}см`:`${s.width}м × ${s.height}м`,l=(s,u)=>u==="SHEET"?`${s}см`:`${s}м`;return n.jsx(no,{onClick:g,children:n.jsxs(ro,{children:[n.jsxs(oo,{children:[n.jsx(io,{children:"Обрати спортивне поле"}),n.jsx(ao,{onClick:t,children:n.jsx(Dn,{})})]}),n.jsxs(so,{children:[n.jsx(lo,{children:wo.map(s=>{const u=s.icon;return n.jsxs(co,{active:a===s.id,onClick:()=>o(s.id),children:[n.jsx(ho,{children:n.jsx(u,{})}),s.name]},s.id)})}),n.jsx(po,{children:n.jsx(uo,{children:(p=Co[a])==null?void 0:p.map(s=>n.jsxs(go,{selected:i===s.id,onClick:()=>h(s),children:[n.jsx(xo,{children:s.name}),n.jsx(fo,{children:x(s,a)}),n.jsx(mo,{children:n.jsxs(yo,{fieldWidth:s.width,fieldHeight:s.height,children:[n.jsx(Ht,{className:"width",children:l(s.width,a)}),n.jsx(Ht,{className:"height",children:l(s.height,a)})]})})]},s.id))})})]})]})})},Mo=w(Yr)`
  width: 80%;
  height: 80%;
  stroke: ${({theme:e})=>e.textBlack};
   fill: ${({theme:e})=>e.textBlack};
`,vo=w(Mn)`
  width: 100%;
  height: 100%;
   fill: ${({theme:e})=>e.black};
   rotate: 180deg;
`,Lo=w(Rr)`
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.textBlack};
`,So=w(bn)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.textBlack};
`,$o=w(bn)`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  fill: ${({theme:e})=>e.textBlack};
`,ko=w(Pr)`
  width: 70%;  
  height: 70%;
  stroke: ${({theme:e})=>e.textBlack};
`,Bo=w(zr)`
  width: 70%;  
  height: 70%;
  fill: ${({theme:e})=>e.textBlack};
`,To=w.div`
  width: 100%;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-bottom: 2px solid ${({theme:e})=>e.gray};
  padding: 12px 16px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`,Eo=w.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`,Io=w.div`
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
`,Po=w.div`
  flex-shrink: 0;
  position: relative;
  z-index: 10;
`,fe=w.button`
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

`,zo=w.button`
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
  
`,Ro=w(Ir)`
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
`,Wt=w.div`
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
`,_t=w.input`
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
`,Yo=w.input`
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
`,Vt=({value:e,onChange:t,...r})=>{const[d,a]=C.useState(e),o=C.useRef(null);C.useEffect(()=>{o.current||a(e)},[e]);const i=c=>{const h=c.target.value;a(h),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{t(h),o.current=null},200)};return n.jsx(Yo,{type:"color",value:d,onChange:i,...r})},Go=({currentField:e,onSelectField:t,isSidebarOpen:r,onToggleSidebar:d})=>{const[a,o]=C.useState(!1),i=ue(),{activeTool:c,team1:h,team2:g,historyIndex:x,history:l}=Pe(v=>v.tacticsBoard),p=()=>{o(!0)},s=()=>{o(!1)},u=v=>{t(v),s()},f=v=>{i(je(v))},m=v=>{i(je(`shape_${v.id}`))},k=v=>{i(je(`figure_${v.id}`))},b=v=>{const R=parseInt(v.target.value)||0;i(Zn(Math.max(0,Math.min(30,R))))},M=v=>{i(Fn(v))},y=v=>{const R=parseInt(v.target.value)||0;i(An(Math.max(0,Math.min(30,R))))},$=v=>{i(Hn(v))},L=()=>{i(Wn())},B=()=>{i(jn())},P=()=>{window.confirm("Ви впевнені, що хочете очистити всю дошку?")&&i(_n())},z=x>0,S=x<l.length-1;return n.jsxs(n.Fragment,{children:[n.jsx(To,{children:n.jsxs(Eo,{children:[n.jsxs(Io,{children:[n.jsx(fe,{title:"Обрати поле",onClick:p,children:n.jsx(Ro,{})}),n.jsx(Ue,{}),n.jsx(fe,{title:"Курсор (виділення та переміщення)",active:c==="cursor",onClick:()=>f("cursor"),children:n.jsx(ko,{})}),n.jsx(fe,{title:"Додати текст",active:c==="text",onClick:()=>f("text"),children:n.jsx(Mo,{})}),n.jsx(fe,{title:"Малювання",active:c==="drawing",onClick:()=>f("drawing"),children:n.jsx(Bo,{})}),n.jsx(_r,{activeTool:c,onSelectShape:m}),n.jsx(Jr,{activeTool:c,onSelectFigure:k}),n.jsx(Ue,{}),n.jsxs(Wt,{children:[n.jsx(jt,{children:"К1:"}),n.jsx(_t,{type:"number",min:"0",max:"30",value:h.count,onChange:b,title:"Кількість гравців команди 1"}),n.jsx(Vt,{value:h.color,onChange:M,title:"Колір команди 1"})]}),n.jsxs(Wt,{children:[n.jsx(jt,{children:"К2:"}),n.jsx(_t,{type:"number",min:"0",max:"30",value:g.count,onChange:y,title:"Кількість гравців команди 2"}),n.jsx(Vt,{value:g.color,onChange:$,title:"Колір команди 2"})]}),n.jsx(Ue,{}),n.jsx(fe,{title:"М'яч",active:c==="ball",onClick:()=>f("ball"),children:"⚽"}),n.jsx(Ue,{}),n.jsx(fe,{title:"Назад (Undo)",onClick:L,disabled:!z,children:n.jsx($o,{})}),n.jsx(fe,{title:"Вперед (Redo)",onClick:B,disabled:!S,children:n.jsx(So,{})}),n.jsx(fe,{title:"Скасувати все",onClick:P,children:n.jsx(Lo,{})})]}),n.jsx(Po,{children:n.jsx(zo,{title:"Відкрити панель інструментів",active:r,onClick:d,children:n.jsx(vo,{})})})]})}),n.jsx(bo,{isOpen:a,onClose:s,onSelectField:u,currentFieldId:e.id})]})},Xo=w.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Do=w.div`
  display: grid;
  grid-template-columns: 40px 1fr 80px;
  gap: 8px;
  align-items: center;
`,Zo=w.div`
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
`,Fo=w.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  border: 2px solid ${({theme:e})=>e.lightGreen||"#ccc"};
  cursor: pointer;
  overflow: hidden;
`,Ao=w.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,Ho=w.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Wo=w.input`
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
`,jo=w.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
`,_o=w.div`
  position: relative;
`,Vo=w.input`
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
`,No=w.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
  display: block;
  text-align: center;
  margin-top: 2px;
`,Nt=e=>Math.max(0,Math.min(1,e/100)),Oo=e=>Math.round(Math.max(0,Math.min(100,e*100))),Ot=(e,t=1)=>{if(!e)return"0, 0, 0, 1";let r=e.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const d=parseInt(r.slice(0,2),16),a=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`${d}, ${a}, ${o}, ${t}`},se=({color:e,opacity:t,onColorChange:r,onOpacityChange:d,label:a})=>{const[o,i]=C.useState(e||"#000000"),[c,h]=C.useState(t!==void 0?t:100),g=C.useRef(null),x=C.useRef(null),l=C.useRef(null),p=C.useMemo(()=>{const y=Nt(c);return Ot(o,y)},[o,c]),[s,u]=C.useState(p),f=C.useMemo(()=>{const y=Nt(c);return{backgroundColor:`rgba(${Ot(o,y)})`}},[o,c]);C.useEffect(()=>{x.current||(i(e||"#000000"),h(t!==void 0?t:100))},[e,t]),C.useEffect(()=>{document.activeElement!==l.current&&u(p)},[p]);const m=y=>{const $=y.target.value;i($),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{r&&r($),x.current=null},150)},k=y=>{const $=y.target.value;u($);const L=$.split(",").map(B=>parseFloat(B.trim()));if(L.length>=3&&!L.some(isNaN)){const B=Math.max(0,Math.min(255,L[0]||0)),P=Math.max(0,Math.min(255,L[1]||0)),z=Math.max(0,Math.min(255,L[2]||0)),S=L[3]!==void 0?Math.max(0,Math.min(1,L[3])):1,v=`#${((1<<24)+(B<<16)+(P<<8)+z).toString(16).slice(1)}`,R=Oo(S);i(v),h(R),x.current&&clearTimeout(x.current),r&&r(v),d&&d(R)}},b=y=>{let $=y.target.value,L=parseInt($);isNaN(L)&&(L=0),L>100&&(L=100),L<0&&(L=0),h(L),d&&d(L)},M=()=>{g.current&&g.current.click()};return n.jsxs("div",{children:[a&&n.jsx(Xo,{children:a}),n.jsxs(Do,{children:[n.jsxs(Zo,{children:[n.jsx(Fo,{style:f,onClick:M}),n.jsx(Ao,{ref:g,type:"color",value:o,onChange:m})]}),n.jsxs(Ho,{children:[n.jsx(Wo,{ref:l,type:"text",value:s,onChange:k,placeholder:"0, 0, 0, 1"}),n.jsx(jo,{children:"RGBA"})]}),n.jsxs(_o,{children:[n.jsx(Vo,{type:"number",min:"0",max:"100",value:c,onChange:b}),n.jsx(No,{children:"Прозорість %"})]})]})]})},qo=w.div`
  position: relative;
  width: 100%;
`,Jo=w.button`
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
`,Uo=w.div`
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
`,Ko=w.div`
  padding: 6px 8px;
  font-family: ${({$fontFamily:e})=>e||"Arial"};
  cursor: pointer;
  color: ${({theme:e})=>e.textBlack};
  background-color: ${({selected:e,theme:t})=>e?t.lightGreen:"transparent"};

  &:hover {
    background-color: ${({theme:e})=>e.greenMain};
    color: ${({theme:e})=>e.white};
  }
`,Qo=w(tr)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) rotate(${({$open:e})=>e?"180deg":"0"});
  width: 20px;
  height: 20px;
  stroke: ${({theme:e})=>e.iconColor};
  transition: transform 0.3s ease;
`,le=({value:e,onChange:t,options:r=[],placeholder:d="Оберіть..."})=>{const[a,o]=C.useState(!1),i=C.useRef(null),c=()=>o(l=>!l),h=()=>o(!1),g=l=>{t(l),h()};C.useEffect(()=>{const l=p=>{i.current&&!i.current.contains(p.target)&&h()};return document.addEventListener("mousedown",l),()=>document.removeEventListener("mousedown",l)},[]);const x=r.find(l=>l.value===e);return n.jsxs(qo,{ref:i,children:[n.jsxs(Jo,{onClick:c,$fontFamily:x==null?void 0:x.value,children:[x?x.label:d,n.jsx(Qo,{$open:a})]}),a&&n.jsx(Uo,{children:r.map(l=>n.jsx(Ko,{onClick:()=>g(l.value),selected:l.value===e,$fontFamily:l.value,children:l.label},l.value))})]})},ei="/coaching-draft/assets/brush_marker-9c4a6bad.png",ti="/coaching-draft/assets/brush_pencil-33e6165e.png",ni="/coaching-draft/assets/brush_pen-07c57dd9.png",ri="/coaching-draft/assets/brush_oil-91e92a78.png",oi="/coaching-draft/assets/brush_watercolor-e5ec0b25.png",ii="/coaching-draft/assets/brush_spray-d0145476.png",qt=w.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,ai=w.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,pt=w.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,Jt=w.label`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,si=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,li=w.input.attrs({type:"range"})`
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
`,ci=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 10px;
`,Be=w.button`
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
`,Ut=()=>{const e=ue(),{drawColor:t,brushSize:r,brushOpacity:d,brushStyle:a,lineType:o,selectedObjectId:i,paths:c}=Pe(v=>v.tacticsBoard),h=i&&i.startsWith("path_")?parseInt(i.replace("path_","")):-1,g=h>=0?c[h]:null,x=g?g.brushStyle:a,l=g?g.color:t,p=g?g.opacity!==void 0?g.opacity:100:d,s=g?g.brushSize:r,u=g?g.lineType:o,[f,m]=C.useState(s),[k,b]=C.useState(50),[M,y]=C.useState(!0);C.useEffect(()=>{switch(m(s),g?g.brushStyle:a){case"hard":b(50),y(!0);break;case"pencil":b(20),y(!0);break;case"calligraphy":b(30),y(!1);break;case"oil":b(60),y(!1);break;case"watercolor":b(80),y(!1);break;case"splatter":b(100),y(!1);break;default:b(50),y(!0)}},[i,s,g,a]);const $=v=>{g?e(ve({index:h,updates:{brushStyle:v,lineType:["oil","watercolor","splatter","calligraphy"].includes(v)?"solid":u}})):(e(Vn(v)),["oil","watercolor","splatter","calligraphy"].includes(v)&&e(Bt("solid")))},L=v=>{e(g?ve({index:h,updates:{color:v}}):Nn(v))},B=v=>{e(g?ve({index:h,updates:{opacity:v}}):On(v))},P=v=>{m(parseInt(v.target.value))},z=()=>{e(g?ve({index:h,updates:{brushSize:f}}):qn(f))},S=v=>{e(g?ve({index:h,updates:{lineType:v}}):Bt(v))};return n.jsxs(n.Fragment,{children:[n.jsxs(qt,{children:[n.jsx(ai,{children:g?"Пензель":"Тип пензля"}),n.jsxs(ci,{children:[n.jsx(Be,{active:x==="hard",onClick:()=>$("hard"),title:"Маркер",children:n.jsx("img",{src:ei,alt:"Маркер"})}),n.jsx(Be,{active:x==="pencil",onClick:()=>$("pencil"),title:"Олівець",children:n.jsx("img",{src:ti,alt:"Олівець"})}),n.jsx(Be,{active:x==="calligraphy",onClick:()=>$("calligraphy"),title:"Перо",children:n.jsx("img",{src:ni,alt:"Перо"})}),n.jsx(Be,{active:x==="oil",onClick:()=>$("oil"),title:"Олія",children:n.jsx("img",{src:ri,alt:"Олія"})}),n.jsx(Be,{active:x==="watercolor",onClick:()=>$("watercolor"),title:"Акварель",children:n.jsx("img",{src:oi,alt:"Акварель"})}),n.jsx(Be,{active:x==="splatter",onClick:()=>$("splatter"),title:"Спрей",children:n.jsx("img",{src:ii,alt:"Спрей"})})]})]}),n.jsxs(qt,{children:[n.jsx(pt,{children:n.jsx(se,{color:l,opacity:p,onColorChange:L,onOpacityChange:B,label:"Колір та прозорість"})}),n.jsxs(pt,{children:[n.jsxs(Jt,{children:["Товщина лінії",n.jsxs(si,{children:[f,"px"]})]}),n.jsx(li,{min:"1",max:k,value:f,onChange:P,onMouseUp:z,onTouchEnd:z})]}),M&&n.jsxs(pt,{children:[n.jsx(Jt,{children:"Тип лінії"}),n.jsx(le,{value:u||"solid",onChange:S,options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]})]})},di=w.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,hi=w.h3`
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
`,be=w.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,pi=w.textarea`
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
`,Qe=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,ui=w.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,ut=w.button`
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
`,gi=({selectedObject:e})=>{const t=ue(),[r,d]=C.useState(e.text||"");C.useEffect(()=>{d(e.text||"")},[e.id,e.text]);const a=(i,c)=>{t(Ie({id:e.id,updates:{[i]:c}}))},o=i=>{const c=i.target.value;d(c),a("text",c)};return n.jsxs(di,{children:[n.jsx(hi,{children:"Властивості тексту"}),n.jsxs(me,{children:[n.jsx(be,{children:"Текст"}),n.jsx(pi,{value:r,onChange:o,placeholder:"Введіть текст...",$fontFamily:e.fontFamily})]}),n.jsx(me,{children:n.jsx(se,{color:e.color||"#000000",opacity:e.opacity||100,onColorChange:i=>a("color",i),onOpacityChange:i=>a("opacity",i),label:"Колір і прозорість"})}),n.jsxs(me,{children:[n.jsxs(be,{children:["Розмір шрифту",n.jsxs(Qe,{children:[e.fontSize||16,"px"]})]}),n.jsx(Ke,{min:"8",max:"200",value:e.fontSize||16,onChange:i=>a("fontSize",Number(i.target.value))})]}),n.jsxs(me,{children:[n.jsx(be,{children:"Тип шрифту"}),n.jsx(le,{value:e.fontFamily||"Arial",onChange:i=>a("fontFamily",i),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(me,{children:[n.jsx(be,{children:"Стиль тексту"}),n.jsxs(ui,{children:[n.jsx(ut,{$active:e.fontWeight==="bold",onClick:()=>a("fontWeight",e.fontWeight==="bold"?"normal":"bold"),children:n.jsx("strong",{children:"B"})}),n.jsx(ut,{$active:e.fontStyle==="italic",onClick:()=>a("fontStyle",e.fontStyle==="italic"?"normal":"italic"),children:n.jsx("em",{children:"I"})}),n.jsx(ut,{$active:e.textDecoration==="underline",onClick:()=>a("textDecoration",e.textDecoration==="underline"?"none":"underline"),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(me,{children:[n.jsxs(be,{children:["Міжрядковий інтервал",n.jsx(Qe,{children:(e.lineHeight||.9).toFixed(1)})]}),n.jsx(Ke,{min:"0.5",max:"3",step:"0.1",value:e.lineHeight||.9,onChange:i=>a("lineHeight",Number(i.target.value))})]}),n.jsxs(me,{children:[n.jsxs(be,{children:["Міжлітерний інтервал",n.jsxs(Qe,{children:[e.letterSpacing||0,"px"]})]}),n.jsx(Ke,{min:"-2",max:"10",step:"0.5",value:e.letterSpacing||0,onChange:i=>a("letterSpacing",Number(i.target.value))})]}),n.jsxs(me,{children:[n.jsxs(be,{children:["Поворот тексту",n.jsxs(Qe,{children:[e.rotation||0,"°"]})]}),n.jsx(Ke,{min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:i=>a("rotation",Number(i.target.value))})]})]})},xi=w.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,fi=w.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Te=w.div`
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
`,mi=w.input.attrs({type:"range"})`
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
`,yi=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Ci=w.p`
  font-size: 12px;
  color: ${({theme:e})=>e.textGray||"#777"};
  margin: 8px 0 0 0;
  font-style: italic;
`,wi=()=>{const e=ue(),{shapeBorderColor:t,shapeBorderOpacity:r,shapeFillColor:d,shapeFillOpacity:a,shapeBorderWidth:o,shapeBorderStyle:i,shapeLineCapStart:c,shapeLineCapEnd:h,activeTool:g}=Pe(l=>l.tacticsBoard),x=g==="shape_line"||g==="shape_arrow";return n.jsxs(xi,{children:[n.jsx(fi,{children:"Налаштування фігури"}),n.jsx(Te,{children:n.jsx(se,{color:t,opacity:r,onColorChange:l=>e(sn(l)),onOpacityChange:l=>e(ln(l)),label:x?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(Te,{children:[n.jsxs(et,{children:[x?"Товщина лінії":"Товщина обводки",n.jsxs(yi,{children:[o,"px"]})]}),n.jsx(mi,{type:"range",min:"1",max:"20",value:o,onChange:l=>e(cn(Number(l.target.value)))})]}),n.jsxs(Te,{children:[n.jsx(et,{children:"Тип обводки"}),n.jsx(le,{value:i,onChange:l=>e(dn(l)),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),x&&n.jsxs(n.Fragment,{children:[n.jsxs(Te,{children:[n.jsx(et,{children:"Початок лінії"}),n.jsx(le,{value:c,onChange:l=>e(hn(l)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(Te,{children:[n.jsx(et,{children:"Кінець лінії"}),n.jsx(le,{value:h||(g==="shape_arrow"?"arrow":"butt"),onChange:l=>e(pn(l)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!x&&n.jsx(Te,{children:n.jsx(se,{color:d,opacity:a,onColorChange:l=>e(un(l)),onOpacityChange:l=>e(gn(l)),label:"Колір заливки і прозорість"})}),n.jsx(Ci,{children:x?"Клікніть і потягніть, щоб намалювати лінію.":"Клікніть і потягніть, щоб намалювати фігуру."})]})},bi=w.div`
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
`,ye=w.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ce=w.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Kt=w.input.attrs({type:"range"})`
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
`,Qt=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,vi=w.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,gt=w.input`
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
`,Ze=8,Li=({selectedObject:e})=>{const t=ue(),r=(i,c)=>{t(Ie({id:e.id,updates:{[i]:c}}))},d=(i,c)=>{let h=Number(c);h<Ze&&(h=Ze);const g=(e[i]||1)<0?-1:1;h*=g,e.shape==="circle"?t(Ie({id:e.id,updates:{width:h,height:h}})):r(i,h)},a=e.shape==="line"||e.shape==="arrow",o=e.shape==="circle";return n.jsxs(bi,{children:[n.jsx(Mi,{children:"Властивості фігури"}),!a&&n.jsxs(ye,{children:[n.jsx(Ce,{children:o?"Діаметр":"Розміри"}),o?n.jsx(gt,{type:"number",min:Ze,value:Math.abs(e.width||50),onChange:i=>d("width",i.target.value)}):n.jsxs(vi,{children:[n.jsxs("div",{children:[n.jsx(Ce,{style:{fontSize:"10px",marginBottom:"4px"},children:"Ширина"}),n.jsx(gt,{type:"number",min:Ze,value:Math.abs(e.width||50),onChange:i=>d("width",i.target.value)})]}),n.jsxs("div",{children:[n.jsx(Ce,{style:{fontSize:"10px",marginBottom:"4px"},children:"Висота"}),n.jsx(gt,{type:"number",min:Ze,value:Math.abs(e.height||30),onChange:i=>d("height",i.target.value)})]})]})]}),n.jsxs(ye,{children:[n.jsxs(Ce,{children:["Кут повороту",n.jsxs(Qt,{children:[e.rotation||0,"º"]})]}),n.jsx(Kt,{type:"range",min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:i=>r("rotation",Number(i.target.value))})]}),n.jsx(ye,{children:n.jsx(se,{color:e.borderColor||e.color||"#000000",opacity:e.borderOpacity!==void 0?e.borderOpacity:100,onColorChange:i=>r("borderColor",i),onOpacityChange:i=>r("borderOpacity",i),label:a?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(ye,{children:[n.jsxs(Ce,{children:[a?"Товщина лінії":"Товщина обводки",n.jsxs(Qt,{children:[e.borderWidth||2,"px"]})]}),n.jsx(Kt,{type:"range",min:"1",max:"20",value:e.borderWidth||2,onChange:i=>r("borderWidth",Number(i.target.value))})]}),n.jsxs(ye,{children:[n.jsx(Ce,{children:"Тип обводки"}),n.jsx(le,{value:e.borderStyle||"solid",onChange:i=>r("borderStyle",i),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),a&&n.jsxs(n.Fragment,{children:[n.jsxs(ye,{children:[n.jsx(Ce,{children:"Початок лінії"}),n.jsx(le,{value:e.lineCapStart||"butt",onChange:i=>r("lineCapStart",i),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(ye,{children:[n.jsx(Ce,{children:"Кінець лінії"}),n.jsx(le,{value:e.lineCapEnd||(e.shape==="arrow"?"arrow":"butt"),onChange:i=>r("lineCapEnd",i),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!a&&n.jsx(ye,{children:n.jsx(se,{color:e.fillColor||"#ffffff",opacity:e.fillOpacity!==void 0?e.fillOpacity:0,onColorChange:i=>r("fillColor",i),onOpacityChange:i=>r("fillOpacity",i),label:"Колір заливки і прозорість"})})]})},Si=w.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,$i=w.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Ee=w.div`
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
`,ki=w.input.attrs({type:"range"})`
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
`,Bi=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Ti=w.p`
  font-size: 12px;
  color: ${({theme:e})=>e.textGray||"#777"};
  margin: 8px 0 0 0;
  font-style: italic;
`,Ei=()=>{const e=ue(),{shapeBorderColor:t,shapeBorderOpacity:r,shapeFillColor:d,shapeFillOpacity:a,shapeBorderWidth:o,shapeBorderStyle:i,shapeLineCapStart:c,shapeLineCapEnd:h,activeTool:g}=Pe(l=>l.tacticsBoard),x=g==="shape_line"||g==="shape_arrow";return n.jsxs(Si,{children:[n.jsx($i,{children:"Налаштування фігури"}),n.jsx(Ee,{children:n.jsx(se,{color:t,opacity:r,onColorChange:l=>e(sn(l)),onOpacityChange:l=>e(ln(l)),label:x?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(Ee,{children:[n.jsxs(tt,{children:[x?"Товщина лінії":"Товщина обводки",n.jsxs(Bi,{children:[o,"px"]})]}),n.jsx(ki,{type:"range",min:"1",max:"20",value:o,onChange:l=>e(cn(Number(l.target.value)))})]}),n.jsxs(Ee,{children:[n.jsx(tt,{children:"Тип обводки"}),n.jsx(le,{value:i,onChange:l=>e(dn(l)),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),x&&n.jsxs(n.Fragment,{children:[n.jsxs(Ee,{children:[n.jsx(tt,{children:"Початок лінії"}),n.jsx(le,{value:c,onChange:l=>e(hn(l)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"perp",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(Ee,{children:[n.jsx(tt,{children:"Кінець лінії"}),n.jsx(le,{value:h||(g==="shape_arrow"?"arrow":"butt"),onChange:l=>e(pn(l)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"perp",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!x&&n.jsx(Ee,{children:n.jsx(se,{color:d,opacity:a,onColorChange:l=>e(un(l)),onOpacityChange:l=>e(gn(l)),label:"Колір заливки і прозорість"})}),n.jsx(Ti,{children:x?"Клікніть і потягніть, щоб намалювати лінію.":"Клікніть і потягніть, щоб намалювати фігуру."})]})},Fe=w.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,Ae=w.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ae=w.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,Me=w.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,en=w.input`
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
`,rt=w.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Ii=w.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
  margin-top: 10px;
`,Pi=w.div`
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
`,zi=w.div`
  width: 30px; 
  height: 45px;
  background: ${({$color:e})=>e};
  border: 2px solid ${({$borderColor:e})=>e}; 
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); 
`,Ri=w.div`
  display: flex;
  flex-direction: row; 
  gap: 15px; 
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`,tn=w.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,nn=w.input.attrs({type:"color"})`
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
`,rn=w.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.textGray||"#666"};
  min-width: 45px; 
`,Yi=w.button`
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
`,Gi=w.button`
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
`,Xi=w.span`
  font-size: 10px;
  color: ${({theme:e,$over:t})=>t?e.red:e.textGray};
  margin-top: 4px;
  display: block;
`,on=8,an=50,ot=100,He=3,Di=({selectedObject:e})=>{const t=ue(),r=(S,v)=>{t(Ie({id:e.id,updates:{[S]:v}}))},d=S=>{let v=Number(S);v=Math.max(on,Math.min(an,v)),r("radius",v)},a=S=>{const v=Math.max(0,Math.min(99,Number(S)||0));r("number",v)},o=S=>{S.length<=ot&&r("topText",S)},i=()=>{const S=e.cards||[];if(S.length<He){const v=[...S,{color:"#FFD700",cardBorderColor:"#000000"}];r("cards",v)}},c=S=>{const R=(e.cards||[]).filter((I,Z)=>Z!==S);r("cards",R)},h=(S,v)=>{const I=[...e.cards||[]];I[S]={...I[S],color:v},r("cards",I)},g=(S,v)=>{const I=[...e.cards||[]];I[S]={...I[S],cardBorderColor:v},r("cards",I)},x=e.radius||20,l=e.number!==void 0?e.number:1,p=e.topText||"",s=e.rotation||0,u=e.color||"#ff0000",f=e.colorOpacity!==void 0?e.colorOpacity:100,m=e.numberColor||"#ffffff",k=e.numberOpacity!==void 0?e.numberOpacity:100,b=e.textColor||"#000000",M=e.textOpacity!==void 0?e.textOpacity:100,y=e.textSize||Math.max(10,x*.5),$=e.borderWidth||2,L=e.borderColor||"#000000",B=e.borderOpacity!==void 0?e.borderOpacity:100,P=e.borderStyle||"solid",z=e.cards||[];return n.jsxs(n.Fragment,{children:[n.jsxs(Fe,{children:[n.jsx(Ae,{children:"Розмір та позиція"}),n.jsxs(ae,{children:[n.jsxs(Me,{children:["Розмір гравця (8-50px)",n.jsxs(rt,{children:[x,"px"]})]}),n.jsx(nt,{min:on,max:an,value:x,onChange:S=>d(S.target.value)})]}),n.jsxs(ae,{children:[n.jsxs(Me,{children:["Кут повороту",n.jsxs(rt,{children:[s,"º"]})]}),n.jsx(nt,{min:"-180",max:"180",step:"5",value:s,onChange:S=>r("rotation",Number(S.target.value))})]}),n.jsx(ae,{children:n.jsx(se,{color:u,opacity:f,onColorChange:S=>r("color",S),onOpacityChange:S=>r("colorOpacity",S),label:"Колір гравця"})})]}),n.jsxs(Fe,{children:[n.jsx(Ae,{children:"Номер гравця"}),n.jsxs(ae,{children:[n.jsx(Me,{children:"Номер гравця (0-99)"}),n.jsx(en,{type:"number",min:"0",max:"99",value:l,onChange:S=>a(S.target.value)})]}),n.jsx(ae,{children:n.jsx(se,{color:m,opacity:k,onColorChange:S=>r("numberColor",S),onOpacityChange:S=>r("numberOpacity",S),label:"Колір номера"})})]}),n.jsxs(Fe,{children:[n.jsx(Ae,{children:"Текст над гравцем"}),n.jsxs(ae,{children:[n.jsx(Me,{children:"Текст"}),n.jsx(en,{type:"text",maxLength:ot,placeholder:"Введіть текст",value:p,onChange:S=>o(S.target.value)}),n.jsxs(Xi,{$over:p.length>ot,children:[p.length,"/",ot," символів"]})]}),p&&n.jsxs(n.Fragment,{children:[n.jsxs(ae,{children:[n.jsxs(Me,{children:["Розмір тексту",n.jsxs(rt,{children:[y,"px"]})]}),n.jsx(nt,{min:"8",max:"40",value:y,onChange:S=>r("textSize",Number(S.target.value))})]}),n.jsx(ae,{children:n.jsx(se,{color:b,opacity:M,onColorChange:S=>r("textColor",S),onOpacityChange:S=>r("textOpacity",S),label:"Колір тексту"})})]})]}),n.jsxs(Fe,{children:[n.jsx(Ae,{children:"Обводка"}),n.jsx(ae,{children:n.jsx(se,{color:L,opacity:B,onColorChange:S=>r("borderColor",S),onOpacityChange:S=>r("borderOpacity",S),label:"Колір обводки"})}),n.jsxs(ae,{children:[n.jsxs(Me,{children:["Товщина обводки",n.jsxs(rt,{children:[$,"px"]})]}),n.jsx(nt,{min:"1",max:"10",value:$,onChange:S=>r("borderWidth",Number(S.target.value))})]}),n.jsxs(ae,{children:[n.jsx(Me,{children:"Тип обводки"}),n.jsx(le,{value:P,onChange:S=>r("borderStyle",S),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]}),n.jsxs(Fe,{children:[n.jsxs(Ae,{children:["Картки (",z.length,"/",He,")"]}),z.length>0&&n.jsx(Ii,{children:z.map((S,v)=>n.jsxs(Pi,{children:[n.jsx(zi,{$color:S.color,$borderColor:S.cardBorderColor||"#000000"}),n.jsxs(Ri,{children:[n.jsxs(tn,{title:"Колір заливки картки",children:[n.jsx(rn,{children:"Заливка:"}),n.jsx(nn,{value:S.color,onChange:R=>h(v,R.target.value)})]}),n.jsxs(tn,{title:"Колір обводки картки",children:[n.jsx(rn,{children:"Обводка:"}),n.jsx(nn,{value:S.cardBorderColor||"#000000",onChange:R=>g(v,R.target.value)})]})]}),n.jsx(Yi,{onClick:()=>c(v),title:"Видалити картку",children:n.jsx(nr,{})})]},v))}),n.jsx(ae,{style:{marginTop:z.length>0?"15px":"0"},children:n.jsx(Gi,{onClick:i,disabled:z.length>=He,children:z.length>=He?`Максимум ${He} картки`:"Додати картку"})})]})]})},Zi=w(Mn)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.black};
`,Fi=w.div`
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
`,Ai=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
`,Hi=w.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Wi=w.button`
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
`,ji=w.div`
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
`,_i=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #ccc;
  text-align: center;
`,Vi=({isOpen:e,onClose:t})=>{const r=ue(),{activeTool:d,selectedObjectId:a,objects:o,paths:i}=Pe(x=>x.tacticsBoard),c=a?a.startsWith("path_")?{...i[parseInt(a.replace("path_",""))],type:"path",id:a}:o.find(x=>x.id===a):null,h=()=>{if(a){if(a.startsWith("path_")){const x=parseInt(a.replace("path_",""));r(Jn(x))}else r(Un(a));r(We())}},g=()=>{if(c)switch(c.type){case"text":return n.jsxs(n.Fragment,{children:[n.jsx(gi,{selectedObject:c}),n.jsx(it,{onClick:h,children:"Видалити текст"})]});case"player":return n.jsx(Di,{selectedObject:c});case"shape":return n.jsxs(n.Fragment,{children:[n.jsx(Li,{selectedObject:c}),n.jsx(it,{onClick:h,children:"Видалити фігуру"})]});case"path":return n.jsxs(n.Fragment,{children:[n.jsx(Ut,{}),n.jsx(it,{onClick:h,children:"Видалити лінію"})]});default:return n.jsx(it,{onClick:h,children:"Видалити об'єкт"})}switch(d){case"text":return n.jsx(wi,{});case"drawing":return n.jsx(Ut,{});case"shape_rectangle":case"shape_circle":case"shape_triangle":case"shape_line":case"shape_arrow":return n.jsx(Ei,{});default:return n.jsxs(_i,{children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎯"}),n.jsx("p",{children:"Виберіть інструмент або об'єкт"}),n.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px",fontStyle:"italic"},children:"Налаштування з'являться тут"})]})}};return n.jsxs(Fi,{$isOpen:e,children:[n.jsxs(Ai,{children:[n.jsx(Hi,{children:c?"Властивості":"Інструменти"}),n.jsx(Wi,{title:"Закрити панель інструментів",onClick:t,children:n.jsx(Zi,{})})]}),n.jsx(ji,{children:g()})]})},Ni=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: ${({theme:e})=>e.mainBGColor};
`,Oi=w.div`
  background: ${({theme:e})=>e.ContainerBGColor};
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`,qi=w.div`
  width: 100%;
`,Qi=({theme:e})=>{const{setTitle:t}=Kn(),[r,d]=C.useState(!1),[a,o]=C.useState({id:"football_standard",name:"Стандартне футбольне поле",width:105,height:68}),i=g=>{o(g)},c=()=>{d(!r)},h=()=>{d(!1)};return C.useEffect(()=>{t("Тактична дошка")},[t]),n.jsx(Qn,{store:er,children:n.jsx(Ni,{children:n.jsxs(Oi,{children:[n.jsx(Go,{currentField:a,onSelectField:i,isSidebarOpen:r,onToggleSidebar:c}),n.jsx(qi,{children:n.jsx(Er,{fieldSize:{width:a.width,height:a.height},fieldType:a.id})}),n.jsx(Vi,{isOpen:r,onClose:h,children:n.jsx("div",{children:"Тут будуть інструменти"})})]})})})};export{Qi as default};
