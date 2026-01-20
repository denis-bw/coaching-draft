import{r as m,d as y,b as me,a as Pe,_ as Nn,$ as qn,a0 as yt,a1 as $e,a2 as ze,a3 as Kn,a4 as Un,a5 as Ae,a6 as mn,j as n,a7 as yn,a8 as Cn,a9 as wn,aa as bn,ab as Zt,ac as Jn,ad as Ke,W as Ht,S as Qn,ae as er,af as tr,ag as nr,ah as rr,ai as or,aj as ir,ak as Wt,al as ar,am as sr,an as lr,ao as cr,ap as dr,aq as hr,ar as pr,as as ur,at as xr,au as gr,av as fr,aw as mr,ax as yr,ay as Cr,az as wr,aA as br,aB as Mr,aC as vr,aD as $r,aE as Lr,u as Sr,aF as kr,aG as Er}from"./index-35e36c85.js";import{S as Tr}from"./ChevronDownicon-b4ce1be1.js";import{S as Br}from"./DeleteIcon-7f5dc9cf.js";const qe=(e,t,r,c,i)=>{const o=i*Math.PI/180,d=Math.cos(o),l=Math.sin(o),p=e-r,x=t-c;return{x:r+(p*d-x*l),y:c+(p*l+x*d)}},he=(e,t)=>{if(!e)return null;if(e.type==="player"){const r=e.radius||20,i=(e.rotation||0)*Math.PI/180;let o=e.x-r,d=e.x+r,l=e.y-r,p=e.y+r;if(e.topText){const x=e.textSize||Math.max(10,r*.5),g=x,h=e.topText.length*x*.6,s=-(r+g);[{x:-h/2,y:s-g*.2},{x:h/2,y:s-g*.2},{x:-h/2,y:s},{x:h/2,y:s}].forEach(u=>{const f=u.x*Math.cos(i)-u.y*Math.sin(i),w=u.x*Math.sin(i)+u.y*Math.cos(i);o=Math.min(o,e.x+f),d=Math.max(d,e.x+f),l=Math.min(l,e.y+w),p=Math.max(p,e.y+w)})}return{x:e.x-r,y:e.y-r,width:r*2,height:r*2,centerX:e.x,centerY:e.y}}if(e.type==="ball"){const r=e.radius||10;return{x:e.x-r,y:e.y-r,width:r*2,height:r*2,centerX:e.x,centerY:e.y}}if(e.type==="shape"){if(e.shape==="line"||e.shape==="arrow"){const l=(e.borderWidth||2)+10,p=(e.startX+e.endX)/2,x=(e.startY+e.endY)/2,g=e.rotation||0,h=qe(e.startX,e.startY,p,x,g),s=qe(e.endX,e.endY,p,x,g),a=Math.min(h.x,s.x)-l,u=Math.max(h.x,s.x)+l,f=Math.min(h.y,s.y)-l,w=Math.max(h.y,s.y)+l;return{x:a,y:f,width:u-a,height:w-f,rotatedEndpoints:{start:h,end:s},startX:e.startX,startY:e.startY,endX:e.endX,endY:e.endY,centerX:p,centerY:x,rotation:g}}const r=e.width||50,c=e.height||30,i=e.rotation||0;if(i!==0){const l=e.x+r/2,p=e.y+c/2,g=[{x:e.x,y:e.y},{x:e.x+r,y:e.y},{x:e.x+r,y:e.y+c},{x:e.x,y:e.y+c}].map(f=>qe(f.x,f.y,l,p,i));let h=g[0].x,s=g[0].x,a=g[0].y,u=g[0].y;return g.forEach(f=>{h=Math.min(h,f.x),s=Math.max(s,f.x),a=Math.min(a,f.y),u=Math.max(u,f.y)}),{x:h,y:a,width:s-h,height:u-a,centerX:l,centerY:p,originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:c,rotation:i,rotatedCorners:g}}const o=r<0?e.x+r:e.x,d=c<0?e.y+c:e.y;return{x:o,y:d,width:Math.abs(r),height:Math.abs(c),originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:c,rotation:i}}if(e.type==="figure"){const r=e.size||30;return{x:e.x-r/2,y:e.y-r/2,width:r,height:r,centerX:e.x,centerY:e.y}}if(e.type==="path"){if(!e.points||e.points.length===0)return null;let r=1/0,c=1/0,i=-1/0,o=-1/0;for(let p=0;p<e.points.length;p+=5){const x=e.points[p];x.x<r&&(r=x.x),x.x>i&&(i=x.x),x.y<c&&(c=x.y),x.y>o&&(o=x.y)}const d=e.points[e.points.length-1];d.x<r&&(r=d.x),d.x>i&&(i=d.x),d.y<c&&(c=d.y),d.y>o&&(o=d.y);const l=(e.brushSize||5)/2;return{x:r-l,y:c-l,width:i-r+l*2,height:o-c+l*2,points:e.points}}if(e.type==="text"){if(t){const i=t.getContext("2d"),o=e.fontWeight||"normal",d=e.fontStyle||"normal",l=e.fontSize||16,p=e.fontFamily||"Arial";i.font=`${d} ${o} ${l}px ${p}`;const x=(e.text||"").split(`
`),g=(e.lineHeight||1.5)*l,h=e.letterSpacing||0;let s=0;x.forEach($=>{let v=i.measureText($).width;h!==0&&(v+=h*($.length-1)),v>s&&(s=v)});const a=x.length>0?(x.length-1)*g+l:0,u=e.rotation||0,f=e.x+s/2,w=e.y+a/2;if(u!==0){const C=[{x:e.x,y:e.y},{x:e.x+s,y:e.y},{x:e.x+s,y:e.y+a},{x:e.x,y:e.y+a}].map(z=>qe(z.x,z.y,f,w,u));let v=C[0].x,L=C[0].x,k=C[0].y,S=C[0].y;return C.forEach(z=>{v=Math.min(v,z.x),L=Math.max(L,z.x),k=Math.min(k,z.y),S=Math.max(S,z.y)}),{x:v,y:k,width:L-v,height:S-k,centerX:f,centerY:w,originalX:e.x,originalY:e.y,originalWidth:s,originalHeight:a,rotation:u,rotatedCorners:C}}return{x:e.x,y:e.y,width:s,height:a,centerX:f,centerY:w,originalX:e.x,originalY:e.y,originalWidth:s,originalHeight:a,rotation:0}}const r=e.width||100,c=e.height||20;return{x:e.x,y:e.y,width:r,height:c,centerX:e.x+r/2,centerY:e.y+c/2}}return null},gt=(e,t,r,c=0)=>{if(!r)return!1;if(r.rotatedCorners&&r.rotatedCorners.length>0){const i=r.rotatedCorners;let o=!1;for(let d=0,l=i.length-1;d<i.length;l=d++){const p=i[d].x,x=i[d].y,g=i[l].x,h=i[l].y;x>t!=h>t&&e<(g-p)*(t-x)/(h-x)+p&&(o=!o)}return o}return e>=r.x-c&&e<=r.x+r.width+c&&t>=r.y-c&&t<=r.y+r.height+c},_t=(e,t,r,c=10,i)=>{const o=he(r,i);if(!o||!gt(e,t,o,c+5))return!1;if(r.type==="shape"&&(r.shape==="line"||r.shape==="arrow")){const d=r.borderWidth/2+c,l=(r.startX+r.endX)/2,p=(r.startY+r.endY)/2,x=r.rotation||0,g=qe(e,t,l,p,-x),h=g.x,s=g.y,a=r.endX-r.startX,u=r.endY-r.startY,f=a*a+u*u;let w=0;f>0&&(w=((h-r.startX)*a+(s-r.startY)*u)/f),w=Math.max(0,Math.min(1,w));const $=r.startX+w*a,C=r.startY+w*u;return(h-$)**2+(s-C)**2<=d*d}if(r.type==="path"){const d=r.brushSize/2+c;for(let l=0;l<r.points.length-1;l++){const p=r.points[l],x=r.points[l+1],g=x.x-p.x,h=x.y-p.y,s=Math.sqrt(g*g+h*h);if(s===0)continue;const a=Math.max(0,Math.min(1,((e-p.x)*g+(t-p.y)*h)/(s*s))),u=p.x+a*g,f=p.y+a*h;if(Math.sqrt(Math.pow(e-u,2)+Math.pow(t-f,2))<=d)return!0}return!1}if(r.type==="shape"&&r.shape==="circle"){const d=o.centerX||o.x+o.width/2,l=o.centerY||o.y+o.height/2,p=(o.originalWidth?Math.abs(o.originalWidth):o.width)/2+c,x=(o.originalHeight?Math.abs(o.originalHeight):o.height)/2+c;if(o.rotation){const g=-(o.rotation*Math.PI)/180,h=e-d,s=t-l,a=h*Math.cos(g)-s*Math.sin(g),u=h*Math.sin(g)+s*Math.cos(g);return a*a/(p*p)+u*u/(x*x)<=1}return Math.pow(e-d,2)/Math.pow(p,2)+Math.pow(t-l,2)/Math.pow(x,2)<=1}return gt(e,t,o,c)},Mn=(e,t)=>{const r=t&&t.rotation||0;if(t&&t.type==="shape"&&(t.shape==="line"||t.shape==="arrow"))return e.rotatedEndpoints?{start:{x:e.rotatedEndpoints.start.x,y:e.rotatedEndpoints.start.y,cursor:"crosshair"},end:{x:e.rotatedEndpoints.end.x,y:e.rotatedEndpoints.end.y,cursor:"crosshair"}}:{start:{x:e.startX,y:e.startY,cursor:"crosshair"},end:{x:e.endX,y:e.endY,cursor:"crosshair"}};if(t&&t.type==="path")return{};const c=(i,o)=>{const d=(i+o)%360,l=d<0?d+360:d,p=Math.round(l/45)%4;return["ns-resize","nesw-resize","ew-resize","nwse-resize"][p]};if(e.rotatedCorners&&e.rotatedCorners.length===4){const i=e.rotatedCorners;return{topLeft:{x:i[0].x,y:i[0].y,cursor:c(315,r)},topRight:{x:i[1].x,y:i[1].y,cursor:c(45,r)},bottomRight:{x:i[2].x,y:i[2].y,cursor:c(135,r)},bottomLeft:{x:i[3].x,y:i[3].y,cursor:c(225,r)},top:{x:(i[0].x+i[1].x)/2,y:(i[0].y+i[1].y)/2,cursor:c(0,r)},bottom:{x:(i[2].x+i[3].x)/2,y:(i[2].y+i[3].y)/2,cursor:c(180,r)},left:{x:(i[0].x+i[3].x)/2,y:(i[0].y+i[3].y)/2,cursor:c(270,r)},right:{x:(i[1].x+i[2].x)/2,y:(i[1].y+i[2].y)/2,cursor:c(90,r)}}}return{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"},top:{x:e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.y+e.height/2,cursor:"ew-resize"}}},jt=(e,t,r,c)=>{const i=Mn(r,c),o=8;for(const[d,l]of Object.entries(i))if(c&&c.type==="shape"&&(c.shape==="line"||c.shape==="arrow")){if(Math.sqrt(Math.pow(e-l.x,2)+Math.pow(t-l.y,2))<=o*1.5)return{name:d,...l}}else if(Math.abs(e-l.x)<=o&&Math.abs(t-l.y)<=o)return{name:d,...l};return null},vn=(e,t,r,c,i,o)=>{const d=[];for(let l=r.length-1;l>=0;l--)_t(e,t,r[l],i,o)&&d.push(r[l]);for(let l=c.length-1;l>=0;l--){const p={...c[l],type:"path",id:`path_${l}`};_t(e,t,p,i,o)&&d.push(p)}return d},$n=(e,t,r,c,i,o)=>{const d=vn(e,t,r,c,i,o);return d.length>0?d[0]:null},Ln=(e,t=1)=>{if(!e)return"rgba(0, 0, 0, 1)";let r=e.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const c=parseInt(r.slice(0,2),16),i=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${c}, ${i}, ${o}, ${t})`},Re=e=>{let t=e.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}},ie=e=>{const t=Math.sin(e)*1e4;return t-Math.floor(t)},Lt=(e,t,r,c,i,o)=>{const d=Math.max(1,Math.floor(c*1.5));for(let l=0;l<d;l++){const p=ie(t*r*l)*Math.PI*2,x=Math.sqrt(ie(t+r+l))*c,g=Math.cos(p)*x,h=Math.sin(p)*x,s=o*(.2+ie(l)*.7);e.fillStyle=`rgba(${i.r}, ${i.g}, ${i.b}, ${s})`;const a=.5+ie(l*2);e.beginPath(),e.arc(t+g,r+h,a,0,Math.PI*2),e.fill()}},Ir=(e,t,r,c,i,o)=>{e.lineCap="round",e.lineJoin="round";const d=Re(c),l=Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2)),p=Math.max(1,o*.2),x=Math.ceil(l/p);for(let g=0;g<x;g++){const h=g/x,s=t.x+(r.x-t.x)*h,a=t.y+(r.y-t.y)*h,u=(ie(s*a)-.5)*.5;Lt(e,s+u,a+u,o/2,d,i)}},St=(e,t,r,c,i,o)=>{const d=Re(c);e.lineCap="butt",e.lineJoin="round";const l=Math.max(12,o*1.5),p=o*.8;for(let x=0;x<l;x++){const g=(x/l-.5)*p,h=i*(.8+ie(x)*.2);e.strokeStyle=`rgba(${d.r}, ${d.g}, ${d.b}, ${h})`,e.lineWidth=o/l*2,e.beginPath();const s=ie(t.x*x)-.5,a=ie(r.x*x)-.5;e.moveTo(t.x+g+s,t.y+g+s),e.lineTo(r.x+g+a,r.y+g+a),e.stroke()}},Sn=(e,t,r,c,i,o)=>{const d=Re(c);e.lineCap="butt";const l=Math.max(6,o),p=Math.PI/4,x=Math.cos(p)*o,g=Math.sin(p)*o;for(let h=0;h<l;h++){const s=h/(l-1),a=x*(s-.5),u=g*(s-.5);e.strokeStyle=`rgba(${d.r}, ${d.g}, ${d.b}, ${i})`,e.lineWidth=1.5,e.beginPath(),e.moveTo(t.x+a,t.y+u),e.lineTo(r.x+a,r.y+u),e.stroke()}},kn=(e,t,r,c,i,o)=>{e.lineCap="round",e.lineJoin="round";const d=Re(c);[{widthMult:1.5,alphaMult:.15},{widthMult:1.2,alphaMult:.25},{widthMult:1,alphaMult:.35},{widthMult:.7,alphaMult:.45}].forEach((p,x)=>{const g=Math.max(3,Math.floor(o*.2));for(let h=0;h<g;h++){const s=h/g*Math.PI*2,a=o*p.widthMult*.15*(h/g),u=Math.cos(s)*a,f=Math.sin(s)*a,w=i*p.alphaMult*(.8+ie(h+x)*.2);e.strokeStyle=`rgba(${d.r}, ${d.g}, ${d.b}, ${w})`,e.lineWidth=o*p.widthMult,e.beginPath();const $=(ie(t.x*h)-.5)*.5,C=(ie(r.x*h)-.5)*.5;e.moveTo(t.x+u+$,t.y+f+$),e.lineTo(r.x+u+C,r.y+f+C),e.stroke()}})},En=(e,t,r,c,i,o)=>{const d=Re(c);e.fillStyle=`rgba(${d.r}, ${d.g}, ${d.b}, ${i})`;const l=Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2)),p=Math.max(5,o/1.2);for(let x=0;x<l;x+=p){const g=x/l,h=t.x+(r.x-t.x)*g,s=t.y+(r.y-t.y)*g,a=o*(.3+ie(h)*.6),u=(ie(s)-.5)*o*1.5,f=(ie(h)-.5)*o*1.5;e.beginPath(),e.arc(h+u,s+f,a,0,Math.PI*2),e.fill();const w=Math.floor(ie(h*s)*4);for(let $=0;$<w;$++){const C=ie(h+$)*Math.PI*2,v=o*(.5+ie(s+$)),L=o*(.05+ie($)*.1),k=h+u+Math.cos(C)*v,S=s+f+Math.sin(C)*v;e.beginPath(),e.arc(k,S,L,0,Math.PI*2),e.fill()}}},zr=(e,t,r,c,i,o)=>{e.lineCap="round",e.lineJoin="round",e.lineWidth=o,e.strokeStyle=Ln(c,i),e.setLineDash([]),e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(r.x,r.y),e.stroke()},Rr=(e,t,r,c)=>{const{color:i,opacity:o,brushSize:d,brushStyle:l}=c,p=o!==void 0?o/100:1;switch(e.save(),l){case"pencil":Ir(e,t,r,i,p,d);break;case"calligraphy":Sn(e,t,r,i,p,d);break;case"oil":St(e,t,r,i,p,d);break;case"watercolor":kn(e,t,r,i,p,d);break;case"splatter":En(e,t,r,i,p,d);break;case"hard":default:zr(e,t,r,i,p,d);break}e.restore()},Pr=(e,t,r,c,i,o)=>{if(e.lineCap="round",e.lineJoin="round",o==="solid"){const d=Re(r),l=Math.max(1,i*.2);for(let p=0;p<t.points.length-1;p++){const x=t.points[p],g=t.points[p+1],h=(g.x-x.x)**2+(g.y-x.y)**2;if(h<2&&p<t.points.length-2)continue;const s=Math.sqrt(h),a=Math.ceil(s/l);for(let u=0;u<a;u++){const f=u/a,w=x.x+(g.x-x.x)*f,$=x.y+(g.y-x.y)*f,C=(ie(w*$)-.5)*.5;Lt(e,w+C,$+C,i/2,d,c)}}}else{const d=Re(r),l=o==="dotted",p=l?i*.1:i*3,x=l?i*1.1:i*2,g=p+x;let h=0;for(let s=0;s<t.points.length-1;s++){const a=t.points[s],u=t.points[s+1],f=Math.sqrt(Math.pow(u.x-a.x,2)+Math.pow(u.y-a.y,2));let w=0;const $=Math.max(1,i*.1);for(;w<f;){const v=(h+w)%g;if(v<p||l&&v<i){const L=w/f,k=a.x+(u.x-a.x)*L,S=a.y+(u.y-a.y)*L;Lt(e,k,S,i/2,d,c)}w+=$}h+=f}}},Gr=(e,t,r,c,i)=>{if(t.points.length>1){const o=Math.max(2,i*.15);let d=0;for(let x=0;x<t.points.length-1;x++){const g=t.points[x],h=t.points[x+1],s=h.x-g.x,a=h.y-g.y,u=Math.sqrt(s*s+a*a);if(d+u<o&&x<t.points.length-2){d+=u;continue}St(e,g,h,r,c,i),d=0}const l=t.points[t.points.length-2],p=t.points[t.points.length-1];St(e,l,p,r,c,i)}},Dr=(e,t,r,c,i)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const d=t.points[o],l=t.points[o+1];(l.x-d.x)**2+(l.y-d.y)**2<2&&o<t.points.length-2||Sn(e,d,l,r,c,i)}},Yr=(e,t,r,c,i)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const d=t.points[o],l=t.points[o+1];(l.x-d.x)**2+(l.y-d.y)**2<2.25&&o<t.points.length-2||kn(e,d,l,r,c,i)}},Xr=(e,t,r,c,i)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const d=t.points[o],l=t.points[o+1];(l.x-d.x)**2+(l.y-d.y)**2<1&&o<t.points.length-2||En(e,d,l,r,c,i)}},Fr=(e,t,r,c,i,o)=>{if(e.lineCap="round",e.lineJoin="round",e.lineWidth=i,e.strokeStyle=Ln(r,c),o==="solid"){if(e.setLineDash([]),e.beginPath(),t.points.length>0){e.moveTo(t.points[0].x,t.points[0].y);for(let x=1;x<t.points.length;x++){const g=t.points[x],h=t.points[x-1];Math.abs(g.x-h.x)<.5&&Math.abs(g.y-h.y)<.5&&x<t.points.length-1||e.lineTo(g.x,g.y)}}e.stroke();return}const d=o==="dotted",l=d?.1:i*3,p=i*2;if(e.setLineDash([l,p]),e.lineCap=d?"round":"butt",e.beginPath(),t.points.length>0){e.moveTo(t.points[0].x,t.points[0].y);for(let x=1;x<t.points.length;x++)e.lineTo(t.points[x].x,t.points[x].y)}e.stroke(),e.setLineDash([])},kt=(e,t,r=!1)=>{if(t.points.length<2)return;e.save();const c=t.opacity!==void 0?t.opacity/100:1,i=r?"#FFD700":t.color,o=t.brushStyle||"hard",d=t.lineType||"solid",l=t.brushSize;if(r){e.strokeStyle="rgba(255, 215, 0, 0.5)",e.lineWidth=l+6,e.lineCap="round",e.lineJoin="round",e.setLineDash([]),e.beginPath(),e.moveTo(t.points[0].x,t.points[0].y);for(let p=1;p<t.points.length;p++)e.lineTo(t.points[p].x,t.points[p].y);e.stroke()}switch(o){case"pencil":Pr(e,t,i,c,l,d);break;case"calligraphy":Dr(e,t,i,c,l);break;case"oil":Gr(e,t,i,c,l);break;case"watercolor":Yr(e,t,i,c,l);break;case"splatter":Xr(e,t,i,c,l);break;case"hard":default:Fr(e,t,i,c,l,d);break}e.restore()},Ar=(e,t,r,c,i,o,d,l,p)=>{e.save(),e.strokeStyle=l,e.lineWidth=p,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t,r),e.lineTo(c,i),e.lineTo(o,d),e.stroke(),e.restore()},Zr=(e,t,r,c,i,o,d,l,p=0,x=0)=>{const g=c-t,h=i-r,s=Math.sqrt(g*g+h*h);if(s===0)return;const a=g/s,u=h/s,f=p,w=x,$=s-f-w;if($<=0)return;const C=t+a*f,v=r+u*f;if(e.strokeStyle=l,e.lineWidth=d,e.lineCap="butt",o==="dashed"){const L=Math.max(d*3,12),k=Math.max(d*2,8),S=L+k,z=Math.max(2,Math.floor($/S));if(z===2&&$<S*2){const H=$*.35,U=$*.3;e.setLineDash([H,U]),e.lineDashOffset=0,e.beginPath(),e.moveTo(C,v),e.lineTo(c-a*w,i-u*w),e.stroke(),e.setLineDash([]);return}const R=($-z*L)/z,M=L+R,b=z*M-R,G=($-b)/2;e.setLineDash([L,R]),e.lineDashOffset=-G,e.beginPath(),e.moveTo(C,v),e.lineTo(c-a*w,i-u*w),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}else if(o==="dotted"){const L=Math.max(d*2.5,10),k=d/2,S=Math.max(2,Math.floor($/L)+1),z=$/(S-1);e.fillStyle=l;for(let X=0;X<S;X++){const R=X*z,M=C+a*R,b=v+u*R;e.beginPath(),e.arc(M,b,k,0,Math.PI*2),e.fill()}}else e.beginPath(),e.moveTo(C,v),e.lineTo(c-a*w,i-u*w),e.stroke()},Vt=(e,t,r,c,i)=>{if(t.length<2)return;if(r==="solid"){e.strokeStyle=i,e.lineWidth=c,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let s=1;s<t.length;s++)e.lineTo(t[s].x,t[s].y);e.closePath(),e.stroke();return}let o=0;const d=[],l=t.length;for(let s=0;s<l;s++){const a=t[s],u=t[(s+1)%l],f=u.x-a.x,w=u.y-a.y,$=Math.sqrt(f*f+w*w);d.push($),o+=$}if(o<20){e.strokeStyle=i,e.lineWidth=c,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let s=1;s<t.length;s++)e.lineTo(t[s].x,t[s].y);e.closePath(),e.stroke();return}const p=Math.max(c*2.5,Math.min(c*4,o/25)),x=Math.max(c*1.5,p*.5),g=p+x,h=p*.7;if(r==="dotted"){const s=c/2,a=Math.max(c*2,o/60);e.fillStyle=i;for(let u=0;u<l;u++){const f=t[u];e.beginPath(),e.arc(f.x,f.y,s,0,Math.PI*2),e.fill()}for(let u=0;u<l;u++){const f=t[u],w=d[u];if(w<=0)continue;const $=t[(u+1)%l].x-f.x,C=t[(u+1)%l].y-f.y,v=$/w,L=C/w,k=1,S=Math.floor(w/a)+1,z=Math.max(k,S-1),X=w/z;for(let R=1;R<z;R++){const M=R*X,b=f.x+v*M,Y=f.y+L*M;e.beginPath(),e.arc(b,Y,s,0,Math.PI*2),e.fill()}}}else if(r==="dashed"){e.strokeStyle=i,e.lineWidth=c,e.lineCap="butt";for(let s=0;s<l;s++){const a=t[s],u=t[s===0?l-1:s-1],f=t[(s+1)%l],w=d[s===0?l-1:s-1],$=d[s];if(w>0&&$>0){const C=u.x-a.x,v=u.y-a.y,L=f.x-a.x,k=f.y-a.y,S=Math.min(w,$)/3,z=Math.min(h,S),X=a.x+C/w*z,R=a.y+v/w*z,M=a.x+L/$*z,b=a.y+k/$*z;Ar(e,X,R,a.x,a.y,M,b,i,c)}}for(let s=0;s<l;s++){const a=t[s],u=t[(s+1)%l],f=d[s];if(f===0)continue;const w=u.x-a.x,$=u.y-a.y,C=w/f,v=$/f,L=d[s===0?l-1:s-1],k=f,S=d[(s+1)%l],z=Math.min(L,k)/3,X=Math.min(h,z),R=Math.min(k,S)/3,M=Math.min(h,R),b=f-X-M;if(b<=p/2)continue;const Y=a.x+C*X,G=a.y+v*X,H=Math.floor(b/g);if(H===0){const Z=b/2-p/2;if(Z>=0){const j=Y+C*Z,O=G+v*Z,Q=Y+C*(Z+p),se=G+v*(Z+p);e.beginPath(),e.moveTo(j,O),e.lineTo(Q,se),e.stroke()}continue}const J=(b-H*p)/H,N=p+J,_=H*N-J,B=(b-_)/2;e.setLineDash([p,J]),e.lineDashOffset=-B,e.beginPath(),e.moveTo(Y,G),e.lineTo(u.x-C*M,u.y-v*M),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}}},Ot=(e,t,r,c,i,o,d,l,p)=>{if(i==="butt")return 0;const x=d.replace("#",""),g=parseInt(x.slice(0,2),16),h=parseInt(x.slice(2,4),16),s=parseInt(x.slice(4,6),16);e.fillStyle=`rgba(${g}, ${h}, ${s}, ${l})`,e.strokeStyle=`rgba(${g}, ${h}, ${s}, ${l})`,e.save(),e.translate(t,r),e.rotate(c);let a=0;if(i==="round"){const u=Math.max(p*.75,4);e.beginPath(),e.arc(0,0,u,0,Math.PI*2),e.fill(),a=0}else i==="arrow"?(e.beginPath(),e.moveTo(0,0),e.lineTo(-o,-o*.5),e.lineTo(-o,o*.5),e.closePath(),e.fill(),a=o):i==="circle"?(e.beginPath(),e.arc(0,0,o*.4,0,Math.PI*2),e.fill(),a=o*.2):i==="bar"&&(e.lineWidth=p,e.lineCap="butt",e.beginPath(),e.moveTo(0,-o*.6),e.lineTo(0,o*.6),e.stroke(),a=0);return e.restore(),a},Tn=(e,t,r=!1)=>{e.save();const c=t.fontWeight||"normal",i=t.fontStyle||"normal",o=t.fontSize||16,d=t.fontFamily||"Arial";e.font=`${i} ${c} ${o}px ${d}`,e.textAlign="left",e.textBaseline="top";const l=(t.text||"").split(`
`),p=(t.lineHeight||1.5)*o,x=t.letterSpacing||0;let g=0;l.forEach(v=>{let L=0;x!==0?L=e.measureText(v).width+x*(v.length-1):L=e.measureText(v).width,L>g&&(g=L)});const h=l.length>0?(l.length-1)*p+o:0,s=2;if(t.rotation){const v=t.x+g/2,L=t.y+h/2;e.translate(v,L),e.rotate(t.rotation*Math.PI/180),e.translate(-v,-L)}const a=t.opacity!==void 0?t.opacity/100:1,f=(t.color||"#000000").replace("#",""),w=parseInt(f.slice(0,2),16),$=parseInt(f.slice(2,4),16),C=parseInt(f.slice(4,6),16);return e.fillStyle=`rgba(${w}, ${$}, ${C}, ${a})`,l.forEach((v,L)=>{const k=t.y+L*p;if(x!==0){let S=t.x;for(let z=0;z<v.length;z++){const X=v[z];e.fillText(X,S,k);const R=e.measureText(X).width;S+=R+x}}else e.fillText(v,t.x,k);if(t.textDecoration==="underline"){const S=x!==0?e.measureText(v).width+x*(v.length-1):e.measureText(v).width;e.beginPath(),e.moveTo(t.x,k+o),e.lineTo(t.x+S,k+o),e.strokeStyle=e.fillStyle,e.lineWidth=Math.max(1,o/16),e.stroke()}}),r&&(e.fillStyle="rgba(255, 215, 0, 0.2)",e.fillRect(t.x-s,t.y-s,g+s*2,h+s*2)),e.restore(),t},Bn=(e,t,r)=>{e.save();const c=t.x,i=t.y,o=t.radius||20,d=t.rotation||0;e.translate(c,i),e.rotate(d*Math.PI/180);const l=t.borderWidth||2,p=(t.borderOpacity!==void 0?t.borderOpacity:100)/100,x=r?"#FFD700":t.borderColor||"#000000",g=t.borderStyle||"solid",h=x.replace("#",""),s=parseInt(h.slice(0,2),16),a=parseInt(h.slice(2,4),16),u=parseInt(h.slice(4,6),16),f=(t.colorOpacity!==void 0?t.colorOpacity:100)/100,$=(t.color||"#ff0000").replace("#",""),C=parseInt($.slice(0,2),16),v=parseInt($.slice(2,4),16),L=parseInt($.slice(4,6),16);if(e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.fillStyle=`rgba(${C}, ${v}, ${L}, ${f})`,e.fill(),e.strokeStyle=`rgba(${s}, ${a}, ${u}, ${p})`,e.lineWidth=l,g==="dashed"){const G=2*Math.PI*o,H=Math.max(l*2.5,Math.min(l*4,G/25)),U=Math.max(l*1.5,H*.5),J=H+U,N=Math.floor(G/J);if(N<3||G<30)e.setLineDash([]),e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();else{const B=(G-N*H)/N,Z=(H+B)/o,j=H/o,O=H+B,Q=N*O-B,ae=(G-Q)/2/o;e.lineCap="butt";for(let q=0;q<N;q++){const ne=ae+q*Z,K=ne+j;e.beginPath(),e.arc(0,0,o,ne,K),e.stroke()}}}else if(g==="dotted"){const G=2*Math.PI*o,H=l/2,U=Math.max(l*2,G/60),J=Math.max(8,Math.round(G/U)),N=2*Math.PI/J;e.fillStyle=`rgba(${s}, ${a}, ${u}, ${p})`;for(let _=0;_<J;_++){const V=_*N,B=o*Math.cos(V),Z=o*Math.sin(V);e.beginPath(),e.arc(B,Z,H,0,Math.PI*2),e.fill()}}else e.setLineDash([]),e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();e.setLineDash([]);const k=t.number!==void 0?t.number:1,S=(t.numberOpacity!==void 0?t.numberOpacity:100)/100,X=(t.numberColor||"#ffffff").replace("#",""),R=parseInt(X.slice(0,2),16),M=parseInt(X.slice(2,4),16),b=parseInt(X.slice(4,6),16),Y=Math.max(12,o*.8);if(e.fillStyle=`rgba(${R}, ${M}, ${b}, ${S})`,e.font=`bold ${Y}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(k.toString(),0,0),t.topText){const G=(t.textOpacity!==void 0?t.textOpacity:100)/100,U=(t.textColor||"#000000").replace("#",""),J=parseInt(U.slice(0,2),16),N=parseInt(U.slice(2,4),16),_=parseInt(U.slice(4,6),16),V=t.textSize||Math.max(10,o*.5),Z=-(o+5);e.fillStyle=`rgba(${J}, ${N}, ${_}, ${G})`,e.font=`${V}px Arial`,e.textAlign="center",e.textBaseline="bottom",e.fillText(t.topText,0,Z)}if(t.cards&&t.cards.length>0){const G=o*.35,H=G*1.4,U=4,J=Math.PI/4,N=Math.cos(J)*o*.7,_=Math.sin(J)*o*.7;t.cards.forEach((V,B)=>{const Z=V.color||(V==="yellow"?"#FFD700":"#FF0000"),j=V.cardBorderColor||"#000000",O=N-B*(G+U);e.fillStyle=Z,e.fillRect(O-G,_,G,H),e.strokeStyle=j,e.lineWidth=1.5,e.setLineDash([]),e.strokeRect(O-G,_,G,H)})}e.restore()},In=(e,t,r=!1)=>{const c=t.radius||10,i=r?"#FFD700":"black",o=r?3:2;e.fillStyle="white",e.strokeStyle=i,e.lineWidth=o,e.beginPath(),e.arc(t.x,t.y,c,0,Math.PI*2),e.fill(),e.stroke(),e.beginPath(),e.arc(t.x-c/3,t.y-c/3,c/3,0,Math.PI*2),e.fillStyle="black",e.fill()},xt=(e,t,r=!1,c="#000")=>{if(e.save(),t.rotation)if(t.shape==="line"||t.shape==="arrow"){const a=(t.startX+t.endX)/2,u=(t.startY+t.endY)/2;e.translate(a,u),e.rotate(t.rotation*Math.PI/180),e.translate(-a,-u)}else{const a=t.x+(t.width||50)/2,u=t.y+(t.height||30)/2;e.translate(a,u),e.rotate(t.rotation*Math.PI/180),e.translate(-a,-u)}const i=r?"#FFD700":t.borderColor||t.color||c,o=t.borderOpacity!==void 0?t.borderOpacity/100:1,d=t.borderWidth||2,l=t.borderStyle||"solid",p=i.replace("#",""),x=parseInt(p.slice(0,2),16),g=parseInt(p.slice(2,4),16),h=parseInt(p.slice(4,6),16),s=`rgba(${x}, ${g}, ${h}, ${o})`;if(e.strokeStyle=s,e.lineWidth=d,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),t.shape==="line"||t.shape==="arrow"){const a=t.endX-t.startX,u=t.endY-t.startY,f=Math.atan2(u,a),w=t.lineCapStart||"butt",$=t.lineCapEnd||(t.shape==="arrow"?"arrow":"butt"),C=Math.max(d*2.5,10);let v=0;w==="arrow"?v=C:w==="circle"?v=C*.2:(w==="round"||w==="bar")&&(v=0);let L=0;if($==="arrow"?L=C:$==="circle"?L=C*.2:($==="round"||$==="bar")&&(L=0),l==="dashed"||l==="dotted")Zr(e,t.startX,t.startY,t.endX,t.endY,l,d,s,v,L);else{const k=t.startX+Math.cos(f)*v,S=t.startY+Math.sin(f)*v,z=t.endX-Math.cos(f)*L,X=t.endY-Math.sin(f)*L;e.lineCap="butt",e.beginPath(),e.moveTo(k,S),e.lineTo(z,X),e.stroke()}w!=="butt"&&Ot(e,t.startX,t.startY,f+Math.PI,w,C,i,o,d),$!=="butt"&&Ot(e,t.endX,t.endY,f,$,C,i,o,d)}else{const a=t.x,u=t.y,f=t.width!==void 0?t.width:50,w=t.height!==void 0?t.height:30,$=t.ignoreMinSize?0:10,C=Math.abs(f)<$?f<0?-$:$:f,v=Math.abs(w)<$?w<0?-$:$:w,L=t.fillColor||"#ffffff",k=t.fillOpacity!==void 0?t.fillOpacity/100:0;if(k>0){const S=L.replace("#",""),z=parseInt(S.slice(0,2),16),X=parseInt(S.slice(2,4),16),R=parseInt(S.slice(4,6),16);if(e.fillStyle=`rgba(${z}, ${X}, ${R}, ${k})`,e.beginPath(),t.shape==="rectangle")e.rect(a,u,C,v);else if(t.shape==="circle"){const M=a+C/2,b=u+v/2,Y=Math.abs(C)/2,G=Math.abs(v)/2;e.ellipse(M,b,Y,G,0,0,2*Math.PI)}else t.shape==="triangle"&&(e.moveTo(a+C/2,u),e.lineTo(a,u+v),e.lineTo(a+C,u+v),e.closePath());e.fill()}if(l==="dashed"||l==="dotted"){if(t.shape==="rectangle"){const S=[{x:a,y:u},{x:a+C,y:u},{x:a+C,y:u+v},{x:a,y:u+v}];Vt(e,S,l,d,s)}else if(t.shape==="triangle"){const S=[{x:a+C/2,y:u},{x:a,y:u+v},{x:a+C,y:u+v}];Vt(e,S,l,d,s)}else if(t.shape==="circle"){const S=a+C/2,z=u+v/2,X=Math.abs(C)/2,R=Math.abs(v)/2,M=Math.pow(X-R,2)/Math.pow(X+R,2),b=Math.PI*(X+R)*(1+3*M/(10+Math.sqrt(4-3*M)));if(e.beginPath(),l==="dashed"){const Y=Math.max(d*2.5,Math.min(d*4,b/25)),G=Math.max(d*1.5,Y*.5),H=Y+G,U=Math.max(2,Math.round(b/H)),N=b/U-Y;e.setLineDash([Y,N]),e.lineCap="butt"}else if(l==="dotted"){const Y=Math.max(d*2,b/60),G=Math.round(b/Y),H=b/G;e.setLineDash([0,H]),e.lineCap="round"}e.ellipse(S,z,X,R,0,0,2*Math.PI),e.stroke(),e.setLineDash([]),e.lineCap="butt"}}else{if(e.beginPath(),t.shape==="rectangle")e.rect(a,u,C,v);else if(t.shape==="circle"){const S=a+C/2,z=u+v/2,X=Math.abs(C)/2,R=Math.abs(v)/2;e.ellipse(S,z,X,R,0,0,2*Math.PI)}else t.shape==="triangle"&&(e.moveTo(a+C/2,u),e.lineTo(a,u+v),e.lineTo(a+C,u+v),e.closePath());e.stroke()}}e.restore()},zn=(e,t,r=!1)=>{const c=t.size||30;e.font=`${c}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(t.icon,t.x,t.y),r&&(e.strokeStyle="#FFD700",e.lineWidth=3,e.strokeRect(t.x-c/2,t.y-c/2,c,c))},Hr=(e,t)=>{if(e.save(),e.strokeStyle="#FFD700",e.lineWidth=2,e.setLineDash([5,5]),t.rotatedCorners&&t.rotatedCorners.length===4){e.beginPath(),e.moveTo(t.rotatedCorners[0].x,t.rotatedCorners[0].y);for(let r=1;r<t.rotatedCorners.length;r++)e.lineTo(t.rotatedCorners[r].x,t.rotatedCorners[r].y);e.closePath(),e.stroke()}else e.strokeRect(t.x,t.y,t.width,t.height);e.setLineDash([]),e.restore()},Wr=(e,t,r)=>{const c=Mn(t,r),i=8;e.fillStyle="white",e.strokeStyle="#FFD700",e.lineWidth=2,Object.entries(c).forEach(([o,d])=>{e.save(),e.fillRect(d.x-i/2,d.y-i/2,i,i),e.strokeRect(d.x-i/2,d.y-i/2,i,i),e.restore()})},Rn=(e,t)=>{if(!e||!t)return null;const r=he(e,t);if(!r)return null;const c=(e.brushSize||e.borderWidth||10)*2+20,i=2e3;let o=r.width+c*2,d=r.height+c*2;if(o>i||d>i)return null;const l=document.createElement("canvas");l.width=o,l.height=d;const p=l.getContext("2d"),x=r.x-c,g=r.y-c;if(p.translate(-x,-g),e.type==="path")kt(p,e,!1);else if(e.type==="player")Bn(p,e,!1);else if(e.type==="ball")In(p,e,!1);else if(e.type==="shape"){const h=e.borderColor||e.color||"#000000";xt(p,e,!1,h)}else e.type==="figure"?zn(p,e,!1):e.type==="text"&&Tn(p,e,!1);return{canvas:l,offsetX:x,offsetY:g,originalWidth:o,originalHeight:d}},_r=(e,t)=>{const r=m.useRef(null),c=m.useRef(null),i=m.useRef(new Map),o=m.useCallback((s,a=!1)=>{if(!s)return;s.getContext("2d").clearRect(0,0,s.width,s.height)},[]),d=m.useCallback(()=>{const s=t.current;if(!s)return;s.getContext("2d").clearRect(0,0,s.width,s.height)},[t]),l=(s,a,u,f)=>{if(s.save(),a.type==="path")kt(s,a,f);else switch(a.type){case"player":Bn(s,a,f);break;case"ball":In(s,a,f);break;case"shape":xt(s,a,f,a.borderColor||u);break;case"figure":zn(s,a,f);break;case"text":Tn(s,a,f);break}s.restore()},p=m.useCallback((s,a,u,f,w)=>{if(f){l(s,a,u,!0);return}const $=JSON.stringify(a),C=i.current.get(a.id);if(C&&C.hash===$&&C.cache){const{cache:L}=C,k=he(a,w);if(k){const S=(a.brushSize||a.borderWidth||10)*2+20;s.drawImage(L.canvas,k.x-S,k.y-S)}else l(s,a,u,!1);return}const v=Rn(a,w);if(v){i.current.set(a.id,{hash:$,cache:v});const L=he(a,w);if(L){const k=(a.brushSize||a.borderWidth||10)*2+20;s.drawImage(v.canvas,L.x-k,L.y-k)}}else l(s,a,u,!1)},[]),x=m.useCallback((s,a,u,f,w,$=null,C=new Set)=>{const v=e.current;if(!v)return;o(v,!0);const L=v.getContext("2d");s.forEach((k,S)=>{const z=`path_${S}`;if(z===$||C.has(z)||k.points.length<2)return;const X={...k,type:"path",id:z};p(L,X,f,!1,v)}),a.forEach(k=>{k.id===$||C.has(k.id)||p(L,k,f,!1,v)})},[e,o,p]),g=m.useCallback((s,a,u=!0)=>{const f=t.current;if(!f||!s)return;const w=f.getContext("2d");if(w.clearRect(0,0,f.width,f.height),w.save(),s._cache){const{canvas:$}=s._cache,C=he(s,f),v=(s.brushSize||s.borderWidth||10)*2+20;w.drawImage($,C.x-v,C.y-v)}else l(w,s,a,u);if(u){const $=he(s,f);$&&(Hr(w,$),s._cache||Wr(w,$,s))}w.restore()},[t]),h=m.useCallback((s,a,u=!1)=>{const f=t.current;if(!f)return;const w=f.getContext("2d");if(u||w.clearRect(0,0,f.width,f.height),s&&s.points&&s.points.length>=2)if(u){const $=s.points.length,C=s.points[$-2],v=s.points[$-1];Rr(w,C,v,{color:s.color,opacity:s.opacity,brushSize:s.brushSize,brushStyle:s.brushStyle})}else kt(w,s,!1);if(a){const{type:$,start:C,end:v,borderColor:L,borderOpacity:k,borderStyle:S,borderWidth:z,fillColor:X,fillOpacity:R,lineCapStart:M,lineCapEnd:b}=a;if($==="line"||$==="arrow"){const Y={type:"shape",shape:$,startX:C.x,startY:C.y,endX:v.x,endY:v.y,borderColor:L,borderOpacity:k,borderWidth:z,borderStyle:S,lineCapStart:M,lineCapEnd:b,rotation:0};xt(w,Y,!1,L)}else{const Y=v.x-C.x,G=v.y-C.y,H={type:"shape",shape:$,x:C.x,y:C.y,width:Y,height:G,borderColor:L,borderOpacity:k,borderWidth:z,borderStyle:S,fillColor:X,fillOpacity:R,rotation:0,ignoreMinSize:!0};xt(w,H,!1,L)}}},[t]);return{redrawStatic:x,drawLiveLayer:h,drawSingleObjectOnActive:g,clearActiveLayer:d,tempObjectDataRef:r,tempPathDataRef:c}},jr=()=>{const e=m.useRef(null),t=m.useRef({x:0,y:0}),r=m.useRef(null),[c,i]=m.useState("default");return{draggedObjectRef:e,dragOffsetRef:t,cursorStyle:c,setCursorStyle:i,startDrag:(h,s,a)=>{const u=he(h,a);let f;h.type==="path"?f={...h,points:h.points.map($=>({...$}))}:f={...h};const w=Rn(h,a);if(e.current={...f,_cache:w},r.current={mouseStart:{...s},objectStart:h.type==="path"?{...h,points:h.points.map($=>({...$}))}:{...h},cachedBounds:u||{x:0,y:0,width:0,height:0}},h.type==="path")t.current={x:s.x-u.points[0].x,y:s.y-u.points[0].y};else if(h.type==="shape"&&(h.shape==="line"||h.shape==="arrow")){const $=(h.startX+h.endX)/2,C=(h.startY+h.endY)/2;t.current={x:s.x-$,y:s.y-C}}else h.x!==void 0&&h.y!==void 0?t.current={x:s.x-h.x,y:s.y-h.y}:t.current={x:s.x-(u?u.x:0),y:s.y-(u?u.y:0)}},updateDragPosition:(h,s,a)=>{if(!e.current||!r.current)return null;const{objectStart:u,cachedBounds:f}=r.current,w=h.x-r.current.mouseStart.x,$=h.y-r.current.mouseStart.y;let C=e.current;if(C.type==="path"){const z=u.points,X=C.points;for(let R=0;R<z.length;R++)X[R].x=z[R].x+w,X[R].y=z[R].y+$}else C.type==="shape"&&(C.shape==="line"||C.shape==="arrow")?(C.startX=u.startX+w,C.endX=u.endX+w,C.startY=u.startY+$,C.endY=u.endY+$):(C.x=u.x+w,C.y=u.y+$);const v=f.x+f.width/2+w,L=f.y+f.height/2+$;let k=0,S=0;if(v<0?k=0-v:v>s&&(k=s-v),L<0?S=0-L:L>a&&(S=a-L),k!==0||S!==0)if(C.type==="path")for(let z=0;z<C.points.length;z++)C.points[z].x+=k,C.points[z].y+=S;else C.type==="shape"&&(C.shape==="line"||C.shape==="arrow")?(C.startX+=k,C.endX+=k,C.startY+=S,C.endY+=S):(C.x+=k,C.y+=S);return C},endDrag:()=>{const h=e.current;return h&&h._cache&&delete h._cache,e.current=null,r.current=null,t.current={x:0,y:0},h},updateCursor:(h,s,a,u,f,w)=>{if(e.current)return;if(u){const C=u?u.startsWith("path_")?{...a[parseInt(u.replace("path_",""))],type:"path",id:u}:s.find(v=>v.id===u):null;if(C){const v=he(C,w);if(v){const L=jt(h.x,h.y,v,C);if(L){i(L.cursor);return}if(gt(h.x,h.y,v)){i("move");return}}}}const $=$n(h.x,h.y,s,a,f,w);i($?"pointer":"default")},checkForHandle:(h,s,a)=>{const u=he(s,a);return u?jt(h.x,h.y,u,s):null},checkIfPointInSelectedBounds:(h,s,a)=>{if(!s)return!1;const u=he(s,a);return u&&gt(h.x,h.y,u)}}},it=10,Vr=8,Or=70,Nr=5,qr=50,Kr=(e,t,r,c,i)=>{const o=i*Math.PI/180,d=Math.cos(o),l=Math.sin(o),p=r/2,x=c/2;return[{x:-p,y:-x},{x:p,y:-x},{x:p,y:x},{x:-p,y:x}].map(h=>({x:e+(h.x*d-h.y*l),y:t+(h.x*l+h.y*d)}))},We=(e,t,r,c,i)=>{const o=i*Math.PI/180,d=Math.cos(o),l=Math.sin(o),p=e-r,x=t-c;return{x:r+(p*d-x*l),y:c+(p*l+x*d)}},Ur=()=>{const e=m.useRef(null);return{resizeHandleRef:e,startResize:(i,o,d,l)=>{let p,x;o.type==="player"||o.type==="ball"?(p=(o.radius||20)*2,x=(o.radius||20)*2):o.type==="figure"?(p=o.size||30,x=o.size||30):o.type==="text"?(p=l.originalWidth||l.width,x=l.originalHeight||l.height):(p=o.width!==void 0?o.width:l.width,x=o.height!==void 0?o.height:l.height);let g,h;o.shape==="line"||o.shape==="arrow"?(g=(o.startX+o.endX)/2,h=(o.startY+o.endY)/2):o.type==="player"||o.type==="ball"||o.type==="figure"?(g=o.x,h=o.y):o.type==="text"?(g=l.centerX,h=l.centerY):(g=o.x+p/2,h=o.y+x/2);const s=o.rotation||0,a=Kr(g,h,p,x,s);let u={x:g,y:h},f={x:d.x,y:d.y};if(o.shape==="line"||o.shape==="arrow"){const R=We(o.startX,o.startY,g,h,s),M=We(o.endX,o.endY,g,h,s);i.name==="start"?(f=R,u=M):i.name==="end"&&(f=M,u=R)}else i.name==="topLeft"?(f=a[0],u=a[2]):i.name==="topRight"?(f=a[1],u=a[3]):i.name==="bottomRight"?(f=a[2],u=a[0]):i.name==="bottomLeft"?(f=a[3],u=a[1]):i.name==="top"?(f={x:(a[0].x+a[1].x)/2,y:(a[0].y+a[1].y)/2},u={x:(a[2].x+a[3].x)/2,y:(a[2].y+a[3].y)/2}):i.name==="bottom"?(f={x:(a[2].x+a[3].x)/2,y:(a[2].y+a[3].y)/2},u={x:(a[0].x+a[1].x)/2,y:(a[0].y+a[1].y)/2}):i.name==="left"?(f={x:(a[0].x+a[3].x)/2,y:(a[0].y+a[3].y)/2},u={x:(a[1].x+a[2].x)/2,y:(a[1].y+a[2].y)/2}):i.name==="right"&&(f={x:(a[1].x+a[2].x)/2,y:(a[1].y+a[2].y)/2},u={x:(a[0].x+a[3].x)/2,y:(a[0].y+a[3].y)/2});const w=f.x-d.x,$=f.y-d.y,C=f.x-u.x,v=f.y-u.y,L=C*C+v*v,k=We(d.x,d.y,g,h,-s),S=k.x-g,z=k.y-h;let X=0;["player","ball","figure"].includes(o.type)&&(X=Math.sqrt(Math.pow(d.x-g,2)+Math.pow(d.y-h,2))),e.current={handle:i.name,object:{...o},startPos:d,anchorPoint:u,startVectorX:C,startVectorY:v,startLengthSq:L,pressOffsetX:w,pressOffsetY:$,startFontSize:o.fontSize||16,startX:o.x,startY:o.y,lineStartX:o.startX,lineStartY:o.startY,lineEndX:o.endX,lineEndY:o.endY,startCenterX:g,startCenterY:h,rotation:s,startLocalLeft:-Math.abs(p)/2,startLocalRight:Math.abs(p)/2,startLocalTop:-Math.abs(x)/2,startLocalBottom:Math.abs(x)/2,startFlippedX:p<0,startFlippedY:x<0,isHandleLeft:S<0,isHandleRight:S>0,isHandleTop:z<0,isHandleBottom:z>0,startWidth:p,startHeight:x,startDistanceFromCenter:X}},updateResize:(i,o=!1)=>{if(!e.current)return null;const{handle:d,object:l,startFontSize:p,startCenterX:x,startCenterY:g,startDistanceFromCenter:h,rotation:s,lineStartX:a,lineStartY:u,lineEndX:f,lineEndY:w,startPos:$,startLocalLeft:C,startLocalRight:v,startLocalTop:L,startLocalBottom:k,isHandleLeft:S,isHandleRight:z,isHandleTop:X,isHandleBottom:R,startFlippedX:M,startFlippedY:b,startWidth:Y,startHeight:G,anchorPoint:H,startVectorX:U,startVectorY:J,startLengthSq:N,pressOffsetX:_,pressOffsetY:V}=e.current;let B={...l};if(l.type==="text"){const Z=i.x+_,j=i.y+V,O=Z-H.x,Q=j-H.y,se=O*U+Q*J;let ee=se/N;if(!["topLeft","topRight","bottomLeft","bottomRight"].includes(d)){const ye=Math.sqrt(N),Ze=Math.sqrt(O*O+Q*Q),Ge=se>0?1:-1;ee=Ze/ye*Ge}const ae=8;let q=p*ee;q<ae&&(q=ae,ee=ae/p),ee<.1&&(ee=.1),B.fontSize=p*ee;const ne=Y*ee,K=G*ee,te=U*ee,ge=J*ee,pe=H.x+te*.5,le=H.y+ge*.5;return B.x=pe-ne/2,B.y=le-K/2,B.width=ne,B.height=K,e.current.object=B,B}if(l.type==="shape"&&(l.shape==="line"||l.shape==="arrow")){let Z,j;if(d==="start")j=H,Z={x:i.x,y:i.y};else if(d==="end")Z=H,j={x:i.x,y:i.y};else return B;if(o){const ae=j.x-Z.x,q=j.y-Z.y,ne=Math.atan2(q,ae),K=Math.sqrt(ae*ae+q*q),te=Math.round(ne/(Math.PI/4))*(Math.PI/4);d==="start"?(Z.x=j.x-Math.cos(te)*K,Z.y=j.y-Math.sin(te)*K):(j.x=Z.x+Math.cos(te)*K,j.y=Z.y+Math.sin(te)*K)}const O=(Z.x+j.x)/2,Q=(Z.y+j.y)/2,se=We(Z.x,Z.y,O,Q,-s),ee=We(j.x,j.y,O,Q,-s);return B.startX=se.x,B.startY=se.y,B.endX=ee.x,B.endY=ee.y,e.current.object=B,B}if(["player","ball","figure"].includes(l.type)){const Z=Math.sqrt(Math.pow(i.x-x,2)+Math.pow(i.y-g,2)),j=h>0?Z/h:1,O=Math.abs(Y);if(l.type==="player"){const Q=O/2*j;B.radius=Math.max(Vr,Math.min(Or,Q))}else if(l.type==="ball"){const Q=O/2*j;B.radius=Math.max(Nr,Math.min(qr,Q))}else B.size=Math.max(10,O*j);return e.current.object=B,B}if(l.type==="shape"){const Z=s*Math.PI/180,j=Math.cos(-Z),O=Math.sin(-Z),Q=i.x-$.x,se=i.y-$.y,ee=Q*j-se*O,ae=Q*O+se*j;let q=C,ne=v,K=L,te=k;S?q+=ee:z&&(ne+=ee),X?K+=ae:R&&(te+=ae);let ge=M,pe=b;q>ne&&([q,ne]=[ne,q],ge=!ge),K>te&&([K,te]=[te,K],pe=!pe);let le=ne-q,ye=te-K;le<it&&(le=it,S?q=ne-le:ne=q+le),ye<it&&(ye=it,X?K=te-ye:te=K+ye);const Ze=(q+ne)/2,Ge=(K+te)/2,Ue=Ze*Math.cos(Z)-Ge*Math.sin(Z),Je=Ze*Math.sin(Z)+Ge*Math.cos(Z),Qe=x+Ue,et=g+Je;let tt=ge?-le:le,nt=pe?-ye:ye;return B.width=tt,B.height=nt,B.x=Qe-tt/2,B.y=et-nt/2,e.current.object=B,B}return B},endResize:()=>{const i=e.current;return e.current=null,i?i.object:null}}},Jr=()=>{const e=m.useRef(!1),t=m.useRef([]),r=m.useRef(null),c=m.useRef(!1);return{drawingRef:e,currentPathRef:t,shapeStartRef:r,isDrawingShapeRef:c,startDrawing:h=>{e.current=!0,t.current=[{x:h.x,y:h.y}]},continueDrawing:h=>e.current?(t.current.push({x:h.x,y:h.y}),t.current):null,endDrawing:()=>{const h=t.current;return e.current=!1,t.current=[],h.length>1?h:null},startShape:h=>{c.current=!0,r.current=h},getShapePreview:h=>!c.current||!r.current?null:{start:r.current,end:h},endShape:(h,s)=>{if(!c.current||!r.current)return null;const a=r.current;let u=null;if(s==="line"||s==="arrow")Math.sqrt(Math.pow(h.x-a.x,2)+Math.pow(h.y-a.y,2))>5&&(u={startX:a.x,startY:a.y,endX:h.x,endY:h.y});else{const f=h.x-a.x,w=h.y-a.y;Math.abs(f)>5&&Math.abs(w)>5&&(u={x:a.x,y:a.y,width:f,height:w})}return c.current=!1,r.current=null,u},cancelDrawing:()=>{e.current=!1,t.current=[],c.current=!1,r.current=null}}},Qr=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,eo=y.div`
  border: 2px solid #ddd;
  margin-top: 10px;
  background: white;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  position: relative;
  
  cursor: ${e=>e.$isTextInput?"default":e.$activeTool==="drawing"||e.$activeTool==="eraser"||e.$activeTool==="text"?"none":e.cursor};
`,to=y.canvas`
  display: block;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`,no=y.canvas`
  display: block;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  touch-action: none; 
`,ro=y.textarea`
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
`,oo=y.div`
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
`,io=({fieldSize:e,fieldType:t})=>{const r=m.useRef(null),c=m.useRef(null),i=m.useRef(null),o=m.useRef(null),d=m.useRef(!1),l=m.useRef(null),p=m.useRef(null),x=m.useRef(null),g=m.useRef(null),h=m.useRef(new Set),[s,a]=m.useState({width:800,height:500}),[u,f]=m.useState(!1),[w,$]=m.useState(""),[C,v]=m.useState({x:0,y:0}),[L,k]=m.useState(!1),S=m.useRef(!1),z=m.useRef([]),X=m.useRef([]),R=m.useRef(null),M=me(),{activeTool:b,drawColor:Y,brushSize:G,eraserSize:H,brushOpacity:U,brushStyle:J,lineType:N,paths:_,objects:V,selectedObjectId:B,textFontSize:Z,textColor:j,shapeBorderColor:O,shapeBorderOpacity:Q,shapeFillColor:se,shapeFillOpacity:ee,shapeBorderWidth:ae,shapeBorderStyle:q,shapeLineCapStart:ne,shapeLineCapEnd:K}=Pe(E=>E.tacticsBoard);m.useEffect(()=>{p.current=B},[B]);const{redrawStatic:te,drawLiveLayer:ge,drawSingleObjectOnActive:pe,clearActiveLayer:le,tempObjectDataRef:ye,tempPathDataRef:Ze}=_r(r,c),{cursorStyle:Ge,setCursorStyle:Ue,startDrag:Je,updateDragPosition:Qe,endDrag:et,updateCursor:tt,checkForHandle:nt,draggedObjectRef:Le,checkIfPointInSelectedBounds:Dn}=jr(),{resizeHandleRef:Se,startResize:Yn,updateResize:Et,endResize:Tt}=Ur(),{drawingRef:ke,startDrawing:Xn,continueDrawing:Bt,endDrawing:It,shapeStartRef:re,isDrawingShapeRef:Ee,startShape:Fn,endShape:zt}=Jr(),An=1500,Zn=640,Hn=1400,ft=e.width/e.height,Rt=m.useCallback(()=>{var De;const E=i.current;if(!E)return{width:800,height:500};const I=((De=E.parentElement)==null?void 0:De.clientWidth)||window.innerWidth,A=I/An,T=Hn*A,D=Zn*A,P=T,F=P/ft,W=D,ce=W*ft;let oe,de;F<=D?(oe=P,de=F):(oe=ce,de=W);const we=I*.95;if(oe>we){const Te=we/oe;oe=we,de=de*Te}return{width:Math.floor(oe),height:Math.floor(de)}},[ft]),rt=E=>{const I=c.current;if(!I)return{x:0,y:0};let A,T;E.changedTouches&&E.changedTouches.length>0?(A=E.changedTouches[0].clientX,T=E.changedTouches[0].clientY):E.touches&&E.touches.length>0?(A=E.touches[0].clientX,T=E.touches[0].clientY):(A=E.clientX,T=E.clientY);const D=I.getBoundingClientRect(),P=I.width/D.width,F=I.height/D.height;return{x:(A-D.left)*P,y:(T-D.top)*F}},Pt=E=>({x:Math.max(0,Math.min(E.x,s.width)),y:Math.max(0,Math.min(E.y,s.height))}),mt=m.useCallback(E=>{const I=g.current||E,A=E.x-I.x,T=E.y-I.y,D=Math.sqrt(A*A+T*T),P=Math.max(1,Math.ceil(D/(H/5)));let F=!1;const W=H/2*.85;for(let ce=0;ce<=P;ce++){const oe=ce/P,de=I.x+A*oe,we=I.y+T*oe;vn(de,we,V,_,W,r.current).forEach(Te=>{h.current.has(Te.id)||(h.current.add(Te.id),F=!0)})}F&&requestAnimationFrame(()=>{te(_,V,b,Y,G,null,h.current)}),g.current=E},[V,_,H,b,Y,G,te]);m.useEffect(()=>{const E=I=>{if(u)return;const A=I.ctrlKey||I.metaKey;if(A&&!I.shiftKey&&I.code==="KeyZ"){I.preventDefault(),M(yn());return}if(A&&I.code==="KeyY"||A&&I.shiftKey&&I.code==="KeyZ"){I.preventDefault(),M(Cn());return}if(I.key==="Delete"){if(B){if(B.startsWith("path_")){const T=parseInt(B.replace("path_",""));M(wn(T))}else M(bn(B));M(Ae())}return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(I.key)&&B){I.preventDefault();const T=I.shiftKey?10:1;let D=0,P=0;I.key==="ArrowUp"&&(P=-T),I.key==="ArrowDown"&&(P=T),I.key==="ArrowLeft"&&(D=-T),I.key==="ArrowRight"&&(D=T);let F=null;if(B.startsWith("path_")){const W=parseInt(B.replace("path_",""));F={..._[W],type:"path"}}else F=V.find(W=>W.id===B);if(F){const W=he(F,r.current);if(W){const ce=s.width,oe=s.height,de=W.width/2,we=W.height/2,De=-de,Te=ce-de,Yt=-we,Xt=oe-we,Ft=W.x+D,At=W.y+P;Ft<De&&(D=De-W.x),Ft>Te&&(D=Te-W.x),At<Yt&&(P=Yt-W.y),At>Xt&&(P=Xt-W.y)}if(Math.abs(D)>.01||Math.abs(P)>.01)if(B.startsWith("path_")){const ce=parseInt(B.replace("path_","")),oe=_[ce].points.map(de=>({x:de.x+D,y:de.y+P}));M($e({index:ce,updates:{points:oe}}))}else F.type==="shape"&&(F.shape==="line"||F.shape==="arrow")?M(ze({id:B,updates:{startX:F.startX+D,startY:F.startY+P,endX:F.endX+D,endY:F.endY+P}})):M(ze({id:B,updates:{x:F.x+D,y:F.y+P}}))}}};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[B,u,M,V,_,s]);const He=m.useCallback(E=>{if((b==="drawing"||b==="eraser"||b==="text")&&x.current&&!u){let T,D;E.touches&&E.touches.length>0?(T=E.touches[0].clientX,D=E.touches[0].clientY):(T=E.clientX,D=E.clientY),x.current.style.left=`${T}px`,x.current.style.top=`${D}px`}if(!Le.current&&!Se.current&&!ke.current&&!Ee.current&&!(b==="eraser"&&S.current))return;E.cancelable&&E.preventDefault();const I=rt(E),A=Pt(I);if((Le.current||Se.current||b==="eraser")&&!S.current&&(S.current=!0),b==="eraser"&&S.current)mt(A);else if(Se.current){const T=Et(I,E.shiftKey,E.altKey);T&&pe(T,Y,!0)}else if(Le.current){const T=Qe(I,s.width,s.height);T&&pe(T,Y,!0)}else if(ke.current){const T=Bt(A);T&&T.length>=2&&ge({id:"live_drawing",type:"path",points:T,color:Y,brushSize:G,opacity:U,brushStyle:J,lineType:N},null,N==="solid")}else if(Ee.current&&re.current){const T=b.replace("shape_","");let D=A;if(E.shiftKey)if(T==="line"||T==="arrow"){const P=D.x-re.current.x,F=D.y-re.current.y,W=Math.atan2(F,P),ce=Math.sqrt(P*P+F*F),oe=Math.round(W/(Math.PI/4))*(Math.PI/4);D={x:re.current.x+Math.cos(oe)*ce,y:re.current.y+Math.sin(oe)*ce}}else{const P=D.x-re.current.x,F=D.y-re.current.y,W=Math.max(Math.abs(P),Math.abs(F));D={x:re.current.x+(P>=0?W:-W),y:re.current.y+(F>=0?W:-W)}}ge(null,{type:T,start:re.current,end:D,borderColor:O,borderOpacity:Q,borderStyle:q,borderWidth:ae,fillColor:se,fillOpacity:ee,lineCapStart:ne,lineCapEnd:K},!1)}},[s,Le,Se,ke,Ee,Qe,Et,ge,pe,Bt,b,Y,G,H,re,O,Q,q,ae,se,ee,U,J,N,ne,K,mt,u]),ot=m.useCallback(E=>{if(window.removeEventListener("mousemove",He),window.removeEventListener("mouseup",ot),window.removeEventListener("touchmove",He),window.removeEventListener("touchend",ot),S.current=!1,g.current=null,b==="eraser"&&h.current.size>0){const T=Array.from(h.current);M(Nn(T)),h.current.clear()}const I=rt(E);let A=Pt(I);if(!p.current&&!ke.current&&!Ee.current&&le(),ke.current){const T=It();T&&M(qn({points:T,color:Y,brushSize:G,opacity:U,brushStyle:J,lineType:N})),le()}if(Ee.current&&re.current){const T=b.replace("shape_","");if(E.shiftKey)if(T==="line"||T==="arrow"){const P=A.x-re.current.x,F=A.y-re.current.y,W=Math.atan2(F,P),ce=Math.sqrt(P*P+F*F),oe=Math.round(W/(Math.PI/4))*(Math.PI/4);A={x:re.current.x+Math.cos(oe)*ce,y:re.current.y+Math.sin(oe)*ce}}else{const P=A.x-re.current.x,F=A.y-re.current.y,W=Math.max(Math.abs(P),Math.abs(F));A={x:re.current.x+(P>=0?W:-W),y:re.current.y+(F>=0?W:-W)}}const D=zt(A,T);if(D){const P={type:"shape",shape:T,...D,borderColor:O,borderOpacity:Q,borderWidth:ae,borderStyle:q,color:O};T==="line"||T==="arrow"?(P.lineCapStart=ne,P.lineCapEnd=K):(P.fillColor=se,P.fillOpacity=ee),M(yt(P))}le()}if(Le.current){const T=et();if(T)if(T.type==="path"){const D=parseInt(T.id.replace("path_",""));M($e({index:D,updates:T}))}else M(ze({id:T.id,updates:T}))}if(Se.current){const T=Tt();if(T&&T.id)if(T.type==="path"){const D=parseInt(T.id.replace("path_",""));M($e({index:D,updates:T}))}else M(ze({id:T.id,updates:T}))}Ue("default")},[He,ke,Ee,re,Le,Se,b,It,zt,et,Tt,M,Y,G,O,Q,ae,q,se,ee,ne,K,Ue,le]),Gt=E=>{if(E.button!==void 0&&E.button!==0)return;window.addEventListener("mousemove",He),window.addEventListener("mouseup",ot),window.addEventListener("touchmove",He,{passive:!1}),window.addEventListener("touchend",ot);const I=rt(E),A=r.current;if(u){Dt();return}if(b==="cursor"){const T=B?B.startsWith("path_")?{..._[parseInt(B.replace("path_",""))],type:"path",id:B}:V.find(P=>P.id===B):null;if(T){const P=he(T,A);if(P){const F=nt(I,T,A);if(F){Yn(F,T,I,P);return}if(Dn(I,T,A)){Je(T,I,A);return}}}const D=$n(I.x,I.y,V,_,G,A);D?(p.current=D.id,M(Zt(D.id)),he(D,A)&&Je(D,I,A)):(p.current=null,M(Ae()))}else if(b==="drawing")Xn(I),ge({id:"live_drawing",type:"path",points:[I],color:Y,brushSize:G,opacity:U,brushStyle:J,lineType:N},null,!1);else if(b==="eraser")S.current=!0,g.current=I,mt(I);else if(b.startsWith("shape_"))Fn(I);else if(b.startsWith("figure_")){const T={player:"👤",goalkeeper:"🧤",coach:"🧠",referee:"⚖️",goal:"🥅",cone:"🟨"},D=b.replace("figure_","");M(yt({type:"figure",figureType:D,icon:T[D],x:I.x,y:I.y,size:30}))}else if(b==="ball")M(yt({type:"ball",x:I.x,y:I.y,radius:10}));else if(b==="text"){const T=`text_${Date.now()}_${Math.random()}`;f(!0),$(""),v(I),l.current=T,M(Zt(T)),p.current=T}},Wn=E=>{if(Le.current||Se.current||ke.current||Ee.current||S.current||E.touches)return;(b==="drawing"||b==="eraser"||b==="text")&&x.current&&!u&&(x.current.style.left=`${E.clientX}px`,x.current.style.top=`${E.clientY}px`);const I=rt(E),A=r.current;b==="cursor"&&tt(I,V,_,p.current,G,A)},_n=()=>k(!0),jn=()=>k(!1);m.useEffect(()=>{const E=()=>{const I=Rt();a(I)};return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[Rt]),m.useEffect(()=>{const E=r.current,I=c.current,A=i.current;E&&I&&A&&(E.width=s.width,E.height=s.height,E.style.width=`${s.width}px`,E.style.height=`${s.height}px`,I.width=s.width,I.height=s.height,I.style.width=`${s.width}px`,I.style.height=`${s.height}px`,A.style.width=`${s.width}px`,A.style.height=`${s.height}px`,d.current||(M(Kn({canvasWidth:s.width,canvasHeight:s.height})),d.current=!0),te(_,V,b,Y,G,B))},[s,M,te,_,V,B,b,Y,G]),m.useEffect(()=>{if(S.current)return;const E=z.current,I=X.current,A=R.current;let T=!1,D=null;if(B&&B===A){if(B.startsWith("path_")){const P=parseInt(B.replace("path_",""));_[P]!==I[P]&&(T=!0,D={..._[P],type:"path",id:B})}else{const P=V.find(W=>W.id===B),F=E.find(W=>W.id===B);P!==F&&(T=!0,D=P)}(V.length!==E.length||_.length!==I.length)&&(T=!1)}if(T&&D)pe(D,Y,!0);else if(te(_,V,b,Y,G,B,h.current),B){let P=null;if(B.startsWith("path_")){const F=parseInt(B.replace("path_",""));_[F]&&(P={..._[F],type:"path",id:B})}else P=V.find(F=>F.id===B);P?pe(P,Y,!0):le()}else le();z.current=V,X.current=_,R.current=B},[_,V,B,te,pe,le,b,Y,G]),m.useEffect(()=>{s.width>0&&s.height>0&&M(Un({canvasWidth:s.width,canvasHeight:s.height}))},[s,M]),m.useEffect(()=>{if(u&&o.current&&c.current){const E=o.current;setTimeout(()=>{E.focus(),E.select()},0);const I=c.current,A=I.getBoundingClientRect(),T=I.width/A.width,D=I.height/A.height,P=C.x/T,F=C.y/D;E.style.left=`${P}px`,E.style.top=`${F}px`,E.style.fontSize=`${Z/D}px`,E.style.color=j,E.style.width="auto",E.style.height="auto"}},[u,C,j,Z]),m.useEffect(()=>{const E=I=>{I.key==="Escape"&&!u&&(M(Ae()),p.current=null)};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[B,u,M]),m.useEffect(()=>{M(Ae()),p.current=null,b==="shape_arrow"&&M(mn("arrow"))},[b,M]);const Vn=E=>{$(E.target.value),o.current&&(o.current.style.height="auto",o.current.style.height=o.current.scrollHeight+"px")},Dt=()=>{const E=w.trim();E&&M(Jn({id:l.current,x:C.x,y:C.y,text:E,fontSize:Z,color:j})),f(!1),$(""),l.current=null,M(Ke("cursor"))},On=E=>{E.key==="Escape"&&(E.preventDefault(),f(!1),$(""),M(Ae()),p.current=null,M(Ke("cursor")))};return n.jsxs(Qr,{children:[n.jsx(oo,{ref:x,size:b==="eraser"?H:G,color:b==="text"?j:Y,$visible:(b==="drawing"||b==="eraser"||b==="text"&&!u)&&L,isEraser:b==="eraser",isText:b==="text",children:b==="text"&&"T"}),n.jsxs(eo,{ref:i,cursor:Ge,$activeTool:b,$isTextInput:u,onMouseEnter:_n,onMouseLeave:jn,children:[n.jsx(to,{ref:r}),n.jsx(no,{ref:c,onMouseDown:Gt,onTouchStart:Gt,onMouseMove:Wn}),u&&n.jsx(ro,{ref:o,value:w,onChange:Vn,onBlur:Dt,onKeyDown:On,placeholder:"Введіть текст",rows:1})]})]})},ao=e=>m.createElement("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32",xmlSpace:"preserve",...e},m.createElement("path",{className:"st0",d:"M20,29h-8c-2.2,0-4-1.8-4-4V7c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v18C24,27.2,22.2,29,20,29z"}),m.createElement("circle",{className:"st0",cx:16,cy:16,r:4}),m.createElement("line",{className:"st0",x1:8,y1:16,x2:24,y2:16}),m.createElement("rect",{x:13,y:3,className:"st0",width:6,height:4}),m.createElement("rect",{x:13,y:25,className:"st0",width:6,height:4})),so=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),lo=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"})),co=e=>m.createElement("svg",{fill:"#000000",height:"800px",width:"800px",baseProfile:"tiny",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"-1117 883 256 256",xmlSpace:"preserve",...e},m.createElement("path",{d:"M-1016.4,1091.3l113.9-113.9c13.5-13.5,13.5-35.3,0-48.8l-32.5-32.5c-13.5-13.5-35.3-13.5-48.8,0l-113.9,113.9 c-13.5,13.5-13.5,35.3,0,48.8l32.5,32.5C-1051.7,1104.8-1029.9,1104.8-1016.4,1091.3z M-1057.1,1083.2l-32.5-32.5 c-9-9-9-23.6,0-32.5l67.6-68.1l65.1,65.1l-67.6,68.1c-4.3,4.3-10.1,6.7-16.3,6.7C-1046.9,1089.9-1052.7,1087.6-1057.1,1083.2z  M-954.3,1129.7c0,3.5-2.8,6.3-6.3,6.3h-89.3c-3.5,0-6.3-2.8-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3h89.3 C-957.1,1123.4-954.3,1126.2-954.3,1129.7z M-882.3,1129.7c0,3.4-2.9,6.3-6.3,6.3c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3 C-885.2,1123.4-882.3,1126.2-882.3,1129.7z M-907.5,1129.7c0,3.4-2.9,6.3-6.3,6.3c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3 C-910.4,1123.4-907.5,1126.2-907.5,1129.7z M-932.7,1129.7c0,3.4-2.9,6.3-6.3,6.3c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3 C-935.6,1123.4-932.7,1126.2-932.7,1129.7z M-944.5,1107.9c0,3.5-2.8,6.3-6.3,6.3h-51.1c-3.5,0-6.3-2.8-6.3-6.3 c0-3.5,2.8-6.3,6.3-6.3h51.1C-947.4,1101.6-944.5,1104.4-944.5,1107.9z M-894.9,1107.9c0,3.4-2.9,6.3-6.3,6.3 c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3C-897.8,1101.6-894.9,1104.4-894.9,1107.9z M-920.1,1107.9c0,3.4-2.9,6.3-6.3,6.3 c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3C-923,1101.6-920.1,1104.4-920.1,1107.9z M-869.6,1107.9c0,3.4-2.9,6.3-6.3,6.3 c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3C-872.6,1101.6-869.6,1104.4-869.6,1107.9z"})),ho=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("circle",{cx:12,cy:12,r:9,strokeWidth:2}),m.createElement("path",{d:"M18 18L6 6",strokeWidth:2})),Pn=e=>m.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},m.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fillRule:"evenodd"},m.createElement("g",{id:"Arrow",transform:"translate(-528.000000, 0.000000)",fillRule:"nonzero"},m.createElement("g",{id:"forward_2_line",transform:"translate(528.000000, 0.000000)"},m.createElement("path",{d:"M17.954,11.6767 C16.6468,9.47493 14.2448,8 11.5,8 C7.35786,8 4,11.3579 4,15.5 C4,16.0523 3.55228,16.5 3,16.5 C2.44772,16.5 2,16.0523 2,15.5 C2,10.2533 6.25329,6 11.5,6 C14.6814,6 17.4961,7.56337 19.22,9.96279 L19.757,6.91751 C19.8529,6.37361 20.3715,6.01044 20.9154,6.10635 C21.4593,6.20225 21.8225,6.72091 21.7266,7.2648 L20.6847,13.1736 C20.6386,13.4348 20.4907,13.667 20.2735,13.8192 C19.9896,14.0179 19.6122,14.0542 19.2977,13.9445 L13.6174,12.9429 C13.0735,12.847 12.7103,12.3284 12.8062,11.7845 C12.9021,11.2406 13.4208,10.8774 13.9647,10.9733 L17.954,11.6767 Z",id:"\\u8DEF\\u5F84"}))))),po=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.93417 2C7.95604 2 7.97799 2 8 2L16.0658 2C16.9523 1.99995 17.7161 1.99991 18.3278 2.08215C18.9833 2.17028 19.6117 2.36902 20.1213 2.87868C20.631 3.38835 20.8297 4.0167 20.9179 4.67221C21.0001 5.28388 21.0001 6.0477 21 6.9342L21 7.95C21 8.50229 20.5523 8.95 20 8.95C19.4477 8.95 19 8.50229 19 7.95V7.00001C19 6.02893 18.9979 5.40122 18.9357 4.93871C18.8774 4.50497 18.7832 4.36902 18.7071 4.2929C18.631 4.21677 18.495 4.12263 18.0613 4.06431C17.5988 4.00213 16.9711 4 16 4H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V4H8C7.02893 4 6.40122 4.00213 5.93871 4.06431C5.50497 4.12263 5.36902 4.21677 5.2929 4.2929C5.21677 4.36902 5.12263 4.50497 5.06431 4.93871C5.00213 5.40122 5 6.02893 5 7.00001V7.95C5 8.50229 4.55229 8.95 4 8.95C3.44772 8.95 3 8.50229 3 7.95V7.00001C3 6.97799 3 6.95604 3 6.93418C2.99995 6.04769 2.99991 5.28387 3.08215 4.67221C3.17028 4.0167 3.36902 3.38835 3.87868 2.87868C4.38835 2.36902 5.0167 2.17028 5.67221 2.08215C6.28387 1.99991 7.04769 1.99995 7.93417 2Z"}),m.createElement("path",{d:"M7 21H17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Gn=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.51192 4.43057C6.82641 4.161 7.29989 4.19743 7.56946 4.51192L13.5695 11.5119C13.8102 11.7928 13.8102 12.2072 13.5695 12.4881L7.56946 19.4881C7.29989 19.8026 6.82641 19.839 6.51192 19.5695C6.19743 19.2999 6.161 18.8264 6.43057 18.5119L12.0122 12L6.43057 5.48811C6.161 5.17361 6.19743 4.70014 6.51192 4.43057ZM10.5121 4.43068C10.8266 4.16111 11.3001 4.19753 11.5697 4.51202L17.5697 11.512C17.8104 11.7929 17.8104 12.2073 17.5697 12.4882L11.5697 19.4882C11.3001 19.8027 10.8266 19.8391 10.5121 19.5696C10.1976 19.3 10.1612 18.8265 10.4308 18.512L16.0124 12.0001L10.4308 5.48821C10.1612 5.17372 10.1976 4.70024 10.5121 4.43068Z"})),uo=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("rect",{x:3,y:5,width:18,height:14,rx:2,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),xo=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),go=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.0001 5.94363L4.76627 18H19.2339L12.0001 5.94363ZM10.7138 4.20006C11.2964 3.22905 12.7037 3.22905 13.2863 4.20006L21.4032 17.7282C22.0031 18.728 21.2829 20 20.117 20H3.88318C2.71724 20 1.99706 18.728 2.59694 17.7282L10.7138 4.20006Z"})),fo=e=>m.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z"})),mo=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M6 12H18M18 12L13 7M18 12L13 17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),yo=y.div`
  position: relative;
  display: inline-block;
`,Co=y.button`
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
`,wo=y.div`
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
`,bo=y.button`
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
`,Nt=y.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ct=[{id:"rectangle",name:"Прямокутник",icon:n.jsx(uo,{}),style:{stroke:"currentColor",fill:"none"}},{id:"circle",name:"Коло",icon:n.jsx(xo,{}),style:{stroke:"currentColor",fill:"none"}},{id:"triangle",name:"Трикутник",icon:n.jsx(go,{}),style:{fill:"currentColor",stroke:"none"}},{id:"line",name:"Лінія",icon:n.jsx(fo,{}),style:{fill:"currentColor",stroke:"none"}},{id:"arrow",name:"Стрілка",icon:n.jsx(mo,{}),style:{stroke:"currentColor",fill:"none"}}],Mo=({activeTool:e,onSelectShape:t})=>{const[r,c]=m.useState(!1),[i,o]=m.useState({top:0,left:0}),d=m.useRef(null),l=m.useRef(null),p=e.startsWith("shape_"),x=p?e.replace("shape_",""):null,g=Ct.find(w=>w.id===x),h=()=>{if(l.current){const w=l.current.getBoundingClientRect();o({top:w.bottom+window.scrollY,left:w.left+window.scrollX})}c(!r)},s=w=>{t(w),c(!1)},a=w=>{d.current&&!d.current.contains(w.target)&&c(!1)};m.useEffect(()=>(document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}),[]);const u=()=>{const w=g||Ct[0];return n.jsx(Nt,{children:Ht.cloneElement(w.icon,w.style)})},f=w=>Ht.cloneElement(w.icon,w.style);return n.jsxs(yo,{ref:d,children:[n.jsx(Co,{ref:l,title:"Геометричні фігури",onClick:h,active:p,children:u()}),n.jsx(wo,{isOpen:r,style:{top:i.top,left:i.left},children:Ct.map(w=>n.jsx(bo,{onClick:()=>s(w),title:w.name,children:n.jsx(Nt,{children:f(w)})},w.id))})]})},vo=y.div`
  position: relative;
  display: inline-block;
`,$o=y.button`
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
`,Lo=y.div`
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
`,So=y.button`
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
`,qt=[{id:"player",name:"Гравець",icon:"👤"},{id:"goalkeeper",name:"Воротар",icon:"🧤"},{id:"coach",name:"Тренер",icon:"🧠"},{id:"referee",name:"Суддя",icon:"⚖️"},{id:"goal",name:"Ворота",icon:"🥅"},{id:"cone",name:"Стійка",icon:"🟨"}],ko=({activeTool:e,onSelectFigure:t})=>{const[r,c]=m.useState(!1),[i,o]=m.useState({top:0,left:0}),d=m.useRef(null),l=m.useRef(null),p=e.startsWith("figure_"),x=p?e.replace("figure_",""):null,g=qt.find(f=>f.id===x),h=()=>{if(l.current){const f=l.current.getBoundingClientRect();o({top:f.bottom+window.scrollY,left:f.left+window.scrollX})}c(!r)},s=f=>{t(f),c(!1)},a=f=>{d.current&&!d.current.contains(f.target)&&c(!1)};m.useEffect(()=>(document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}),[]);const u=()=>g?g.icon:"👤";return n.jsxs(vo,{ref:d,children:[n.jsx($o,{ref:l,title:"Спортивні фігури",onClick:h,active:p,children:u()}),n.jsx(Lo,{isOpen:r,style:{top:i.top,left:i.left},children:qt.map(f=>n.jsx(So,{onClick:()=>s(f),title:f.name,children:f.icon},f.id))})]})},Kt=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M9.19762 11.9582L9.91426 11.737L9.19762 11.9582ZM9.54558 10.8683L9.08995 10.2726L9.54558 10.8683ZM9.91896 14.2952L9.20232 14.5164L9.91896 14.2952ZM14.0579 14.2952L13.3413 14.074L14.0579 14.2952ZM14.4313 10.8683L13.9757 11.4641V11.4641L14.4313 10.8683ZM14.7793 11.9582L15.4959 12.1794L14.7793 11.9582ZM12.5948 9.46375L13.0504 8.86802L12.5948 9.46375ZM11.3821 9.46375L11.8377 10.0595L11.3821 9.46375ZM20.1847 17.75C20.5989 17.75 20.9347 17.4142 20.9347 17C20.9347 16.5858 20.5989 16.25 20.1847 16.25V17.75ZM14.7793 19.7351L14.0677 19.4982L14.7793 19.7351ZM13.4801 21.2631C13.3492 21.6561 13.5617 22.0807 13.9547 22.2116C14.3477 22.3424 14.7724 22.1299 14.9033 21.7369L13.4801 21.2631ZM3.99769 16.25C3.58348 16.25 3.24769 16.5858 3.24769 17C3.24769 17.4142 3.58348 17.75 3.99769 17.75V16.25ZM9.40314 19.7351L10.1147 19.4982L9.40314 19.7351ZM9.27917 21.7369C9.41002 22.1299 9.83469 22.3424 10.2277 22.2116C10.6207 22.0807 10.8332 21.6561 10.7024 21.2631L9.27917 21.7369ZM8.22071 17.3775L7.78185 17.9857L8.22071 17.3775ZM5.556 5.45942C5.4489 5.05928 5.03772 4.82173 4.63759 4.92882C4.23746 5.03591 3.9999 5.44709 4.10699 5.84723L5.556 5.45942ZM5.24951 7.21519L4.52501 7.40909V7.40909L5.24951 7.21519ZM3.59168 11.5885L3.17811 10.9628L3.17811 10.9628L3.59168 11.5885ZM1.62739 11.9879C1.28185 12.2163 1.18689 12.6816 1.4153 13.0271C1.64372 13.3727 2.109 13.4676 2.45454 13.2392L1.62739 11.9879ZM19.934 5.84732C20.0411 5.44719 19.8035 5.036 19.4034 4.92891C19.0033 4.82182 18.5921 5.05938 18.485 5.45951L19.934 5.84732ZM18.7915 7.21528L18.067 7.02137L18.7915 7.21528ZM20.4493 11.5886L20.0357 12.2143L20.4493 11.5886ZM21.5864 13.2393C21.932 13.4677 22.3973 13.3728 22.6257 13.0272C22.8541 12.6817 22.7591 12.2164 22.4136 11.988L21.5864 13.2393ZM16.0903 3.83623C16.4288 3.5975 16.5096 3.12956 16.2709 2.79107C16.0322 2.45257 15.5642 2.3717 15.2257 2.61044L16.0903 3.83623ZM14.3376 4.15456L14.7699 4.76746L14.3376 4.15456ZM9.66562 4.10403L9.22021 4.70744V4.70744L9.66562 4.10403ZM8.61539 2.39659C8.28213 2.15059 7.81255 2.22133 7.56656 2.55459C7.32056 2.88784 7.3913 3.35742 7.72456 3.60341L8.61539 2.39659ZM14.7793 11.3678L14.0627 11.589L14.7793 11.3678ZM9.19762 11.3678L9.91426 11.589L9.19762 11.3678ZM21.2269 12C21.2269 17.1095 17.0899 21.25 11.9885 21.25V22.75C17.92 22.75 22.7269 17.9362 22.7269 12H21.2269ZM11.9885 21.25C6.88701 21.25 2.75 17.1095 2.75 12H1.25C1.25 17.9362 6.05695 22.75 11.9885 22.75V21.25ZM2.75 12C2.75 6.89055 6.88701 2.75 11.9885 2.75V1.25C6.05695 1.25 1.25 6.06376 1.25 12H2.75ZM11.9885 2.75C17.0899 2.75 21.2269 6.89055 21.2269 12H22.7269C22.7269 6.06376 17.92 1.25 11.9885 1.25V2.75ZM12.1392 10.0595L13.9757 11.4641L14.887 10.2726L13.0504 8.86802L12.1392 10.0595ZM14.0626 11.737L13.3413 14.074L14.7746 14.5164L15.4959 12.1794L14.0626 11.737ZM13.1036 14.25H10.8733V15.75H13.1036V14.25ZM10.6356 14.074L9.91426 11.737L8.48098 12.1794L9.20232 14.5164L10.6356 14.074ZM10.0012 11.4641L11.8377 10.0595L10.9265 8.86802L9.08995 10.2726L10.0012 11.4641ZM20.1847 16.25H18.5696V17.75H20.1847V16.25ZM14.0677 19.4982L13.4801 21.2631L14.9033 21.7369L15.4909 19.972L14.0677 19.4982ZM18.5696 16.25C17.892 16.25 17.3207 16.2489 16.8555 16.302C16.3711 16.3574 15.9264 16.4781 15.5228 16.7693L16.4006 17.9857C16.5201 17.8994 16.6846 17.8313 17.0258 17.7923C17.3863 17.7511 17.8574 17.75 18.5696 17.75V16.25ZM15.4909 19.972C15.7161 19.2956 15.8662 18.8484 16.0193 18.5189C16.1643 18.2069 16.2809 18.072 16.4006 17.9857L15.5228 16.7693C15.1193 17.0605 14.8645 17.4444 14.659 17.8868C14.4615 18.3117 14.282 18.8545 14.0677 19.4982L15.4909 19.972ZM3.99769 17.75H5.61279V16.25H3.99769V17.75ZM8.69154 19.972L9.27917 21.7369L10.7024 21.2631L10.1147 19.4982L8.69154 19.972ZM5.61279 17.75C6.325 17.75 6.79611 17.7511 7.15658 17.7923C7.49784 17.8313 7.66228 17.8994 7.78185 17.9857L8.65958 16.7693C8.25598 16.4781 7.81137 16.3574 7.32692 16.302C6.86168 16.2489 6.29041 16.25 5.61279 16.25V17.75ZM10.1147 19.4982C9.90043 18.8545 9.7209 18.3117 9.52346 17.8868C9.31791 17.4445 9.06311 17.0605 8.65958 16.7693L7.78185 17.9857C7.90148 18.072 8.01815 18.2069 8.16314 18.5189C8.31624 18.8484 8.46634 19.2956 8.69154 19.972L10.1147 19.4982ZM4.10699 5.84723L4.52501 7.40909L5.97401 7.02128L5.556 5.45942L4.10699 5.84723ZM3.17811 10.9628L1.62739 11.9879L2.45454 13.2392L4.00526 12.2142L3.17811 10.9628ZM4.52501 7.40909C4.70933 8.09777 4.83021 8.55381 4.88378 8.91324C4.93452 9.25362 4.9114 9.43069 4.85896 9.56902L6.26156 10.1007C6.43795 9.63541 6.43932 9.17465 6.3674 8.69211C6.29831 8.22862 6.14941 7.67663 5.97401 7.02128L4.52501 7.40909ZM4.00526 12.2142C4.57077 11.8404 5.04807 11.5262 5.407 11.2252C5.78074 10.9119 6.08516 10.5661 6.26156 10.1007L4.85896 9.56902C4.80654 9.70729 4.70659 9.855 4.44321 10.0759C4.16501 10.3091 3.77244 10.57 3.17811 10.9628L4.00526 12.2142ZM18.485 5.45951L18.067 7.02137L19.516 7.40918L19.934 5.84732L18.485 5.45951ZM20.0357 12.2143L21.5864 13.2393L22.4136 11.988L20.8629 10.9629L20.0357 12.2143ZM18.067 7.02137C17.8916 7.67672 17.7427 8.22871 17.6736 8.6922C17.6017 9.17474 17.603 9.6355 17.7794 10.1008L19.182 9.56911C19.1296 9.43078 19.1065 9.25372 19.1572 8.91333C19.2108 8.5539 19.3316 8.09787 19.516 7.40918L18.067 7.02137ZM20.8629 10.9629C20.2685 10.5701 19.876 10.3092 19.5978 10.0759C19.3344 9.85509 19.2344 9.70739 19.182 9.56911L17.7794 10.1008C17.9558 10.5662 18.2602 10.912 18.634 11.2253C18.9929 11.5263 19.4702 11.8405 20.0357 12.2143L20.8629 10.9629ZM15.2257 2.61044L13.9054 3.54166L14.7699 4.76746L16.0903 3.83623L15.2257 2.61044ZM10.111 3.50061L8.61539 2.39659L7.72456 3.60341L9.22021 4.70744L10.111 3.50061ZM13.9054 3.54166C13.3231 3.9523 12.9373 4.22303 12.6189 4.39721C12.3174 4.56214 12.1438 4.60125 11.9966 4.59965L11.9803 6.09957C12.478 6.10495 12.9109 5.94721 13.3387 5.7132C13.7496 5.48845 14.2159 5.15817 14.7699 4.76746L13.9054 3.54166ZM9.22021 4.70744C9.76562 5.11004 10.2247 5.45033 10.6306 5.68391C11.0533 5.92712 11.4827 6.09418 11.9803 6.09957L11.9966 4.59965C11.8494 4.59806 11.6767 4.5552 11.3788 4.38379C11.0642 4.20276 10.6843 3.92375 10.111 3.50061L9.22021 4.70744ZM13.9757 11.4641C14.0179 11.4963 14.0475 11.5399 14.0627 11.589L15.4959 11.1465C15.3911 10.807 15.1828 10.4989 14.887 10.2726L13.9757 11.4641ZM14.0627 11.589C14.0773 11.6364 14.0779 11.6876 14.0626 11.737L15.4959 12.1794C15.6023 11.8349 15.5974 11.4754 15.4959 11.1465L14.0627 11.589ZM18.1938 9.14203L14.4923 10.6748L15.0662 12.0607L18.7677 10.5279L18.1938 9.14203ZM13.0504 8.86802C12.7371 8.62838 12.3624 8.50841 11.9885 8.50841V10.0084C12.0419 10.0084 12.0945 10.0253 12.1392 10.0595L13.0504 8.86802ZM11.9885 8.50841C11.6146 8.50841 11.2398 8.62838 10.9265 8.86802L11.8377 10.0595C11.8824 10.0253 11.935 10.0084 11.9885 10.0084V8.50841ZM12.7385 9.25841V5.34961H11.2385V9.25841H12.7385ZM13.3413 14.074C13.3259 14.1241 13.2962 14.166 13.2572 14.1967L14.1852 15.3752C14.4575 15.1608 14.6671 14.8646 14.7746 14.5164L13.3413 14.074ZM13.2572 14.1967C13.214 14.2308 13.1607 14.25 13.1036 14.25V15.75C13.5063 15.75 13.8846 15.6119 14.1852 15.3752L13.2572 14.1967ZM16.5291 16.887L14.2886 14.2954L13.1538 15.2765L15.3944 17.868L16.5291 16.887ZM10.8733 14.25C10.8162 14.25 10.7629 14.2308 10.7197 14.1967L9.79172 15.3752C10.0923 15.6119 10.4706 15.75 10.8733 15.75V14.25ZM10.7197 14.1967C10.6807 14.166 10.651 14.1241 10.6356 14.074L9.20232 14.5164C9.3098 14.8646 9.51943 15.1608 9.79172 15.3752L10.7197 14.1967ZM8.81059 17.8407L10.8456 15.2492L9.66584 14.3228L7.63084 16.9143L8.81059 17.8407ZM9.91426 11.737C9.89899 11.6876 9.89961 11.6364 9.91426 11.589L8.48099 11.1465C8.37949 11.4754 8.37465 11.8349 8.48098 12.1794L9.91426 11.737ZM9.91426 11.589C9.9294 11.5399 9.95905 11.4963 10.0012 11.4641L9.08995 10.2726C8.79412 10.4989 8.58579 10.807 8.48099 11.1465L9.91426 11.589ZM9.48889 10.6766L5.85153 9.14373L5.269 10.526L8.90636 12.0589L9.48889 10.6766Z"})),Eo=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5262 17.4999C18.4887 22.7611 11.7612 24.5637 6.49994 21.5262C1.23873 18.4886 -0.563901 11.7611 2.47367 6.49988C5.51123 1.23866 12.2387 -0.563962 17.4999 2.4736C22.7612 5.51117 24.5638 12.2387 21.5262 17.4999ZM5.84382 7.87995C5.25279 7.64272 4.74291 7.45257 4.3292 7.30543C5.59153 5.24057 7.56267 3.85898 9.74648 3.29362C9.77176 3.62621 9.82851 4.00289 9.93722 4.40861C10.3269 5.86297 11.3579 7.58777 13.75 8.96886C14.0666 9.15165 14.3765 9.31079 14.6793 9.44842C14.4757 10.219 14.1794 11.0351 13.7614 11.8848C13.3566 11.6365 12.936 11.3857 12.5 11.1339C9.85449 9.60655 7.52076 8.55305 5.84382 7.87995ZM12.7587 13.6161C12.3555 13.3682 11.9358 13.1176 11.5 12.866C8.94938 11.3934 6.70297 10.3799 5.09882 9.73602C4.44209 9.47241 3.89359 9.27099 3.47664 9.12556C2.8887 10.8629 2.86217 12.7007 3.33339 14.4015C3.63406 14.2571 3.98864 14.1179 4.39435 14.0092C5.84872 13.6195 7.85792 13.65 10.25 15.0311C10.5667 15.2139 10.8594 15.4027 11.13 15.5961C11.6875 15.0424 12.2384 14.3885 12.7587 13.6161ZM12.6204 16.9341C13.4037 17.8315 13.839 18.756 14.0628 19.5913C14.1715 19.997 14.2283 20.3736 14.2536 20.7061C15.962 20.2638 17.5403 19.3219 18.7509 17.9441C18.4164 17.6557 17.9678 17.2815 17.4112 16.8446C16.6284 16.2301 15.633 15.4925 14.4426 14.6962C13.8639 15.5605 13.2482 16.3006 12.6204 16.9341ZM9.52737 16.9296C9.43788 16.8737 9.34548 16.8182 9.25005 16.7631C7.31205 15.6442 5.84818 15.6902 4.91199 15.9411C4.58 16.03 4.30141 16.1484 4.0805 16.2639C4.53358 17.1073 5.12461 17.8846 5.84359 18.5583C5.87614 18.5513 5.90977 18.5439 5.94444 18.5361C6.44532 18.4223 7.15871 18.2112 7.97658 17.8245C8.4626 17.5947 8.98712 17.3022 9.52737 16.9296ZM7.92672 20.018C8.21347 19.909 8.51642 19.7815 8.83145 19.6326C9.54844 19.2936 10.3256 18.8442 11.1145 18.2503C11.6989 18.9202 11.9873 19.5728 12.131 20.109C12.2199 20.4409 12.2567 20.7413 12.2672 20.9903C10.8031 21.0352 9.31171 20.7231 7.92672 20.018ZM18.6461 15.2714C17.8061 14.612 16.7364 13.8204 15.4558 12.968C15.9672 11.9634 16.3317 10.9922 16.5833 10.0701C17.7521 10.2998 18.7704 10.2145 19.6057 9.99072C20.0114 9.88202 20.3659 9.74284 20.6666 9.59846C21.2688 11.7723 21.0579 14.1701 19.9008 16.2957C19.5666 16.011 19.147 15.6645 18.6461 15.2714ZM16.9702 8.10789C17.8425 8.27902 18.5519 8.20254 19.0881 8.05887C19.42 7.96992 19.6986 7.85154 19.9195 7.73607C19.2263 6.44565 18.2102 5.3101 16.907 4.46319C16.956 4.76614 16.9971 5.09234 17.0257 5.43977C17.0906 6.23015 17.09 7.1278 16.9702 8.10789ZM15.0328 7.39372C15.0854 6.73963 15.0764 6.13922 15.0324 5.60348C14.9583 4.70183 14.7845 3.97847 14.6326 3.4878C14.622 3.45374 14.6116 3.42082 14.6013 3.38905C13.6584 3.10331 12.6898 2.9801 11.7329 3.00943C11.7433 3.2585 11.7801 3.55897 11.8691 3.89097C12.1199 4.82716 12.812 6.11791 14.75 7.23681C14.8454 7.2919 14.9397 7.34416 15.0328 7.39372Z"})),To=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M11.5697 12.5532L12.1617 13.0137V13.0137L11.5697 12.5532ZM11.3142 3.64586L12.0065 3.93432V3.93432L11.3142 3.64586ZM18.555 14.5045C18.8336 14.198 18.811 13.7237 18.5045 13.445C18.198 13.1664 17.7237 13.189 17.445 13.4955L18.555 14.5045ZM17.7087 14.3204L17.1538 13.8159L17.1538 13.8159L17.7087 14.3204ZM21.2426 10.7426L21.7773 10.2166L21.773 10.2123L21.2426 10.7426ZM21.4531 12.026C21.7436 12.3213 22.2184 12.3251 22.5137 12.0346C22.809 11.7442 22.8129 11.2693 22.5224 10.974L21.4531 12.026ZM5.7327 19.0428C5.31848 19.0428 4.9827 19.3786 4.9827 19.7928C4.9827 20.207 5.31848 20.5428 5.7327 20.5428V19.0428ZM3.5 15.75C3.08579 15.75 2.75 16.0858 2.75 16.5C2.75 16.9142 3.08579 17.25 3.5 17.25V15.75ZM8.19231 3.35575C8.35162 2.9734 8.17081 2.5343 7.78846 2.37498C7.40611 2.21567 6.96701 2.39648 6.80769 2.77883L8.19231 3.35575ZM6.80769 15.2885C6.96701 15.6708 7.40611 15.8516 7.78846 15.6923C8.17081 15.533 8.35162 15.0939 8.19231 14.7115L6.80769 15.2885ZM11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5C10.25 6.91421 10.5858 7.25 11 7.25V5.75ZM19.876 16.916C20.1057 17.2607 20.5714 17.3538 20.916 17.124C21.2607 16.8943 21.3538 16.4286 21.124 16.084L19.876 16.916ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75C2.75 6.89137 6.89137 2.75 12 2.75V1.25ZM12 12.75H12.0917V11.25H12V12.75ZM11.408 11.5395L10.9777 12.0928L12.1617 13.0137L12.592 12.4605L11.408 11.5395ZM11.3077 1.71154L10.6219 3.35739L12.0065 3.93432L12.6923 2.28846L11.3077 1.71154ZM17.445 13.4955L17.1538 13.8159L18.2637 14.8249L18.555 14.5045L17.445 13.4955ZM20.708 11.2686L21.4531 12.026L22.5224 10.974L21.7773 10.2167L20.708 11.2686ZM17.1538 13.8159C14.2838 16.9729 9.96086 19.0428 5.7327 19.0428V20.5428C10.4211 20.5428 15.1357 18.2657 18.2637 14.8249L17.1538 13.8159ZM10.6219 3.35739C9.39039 6.31308 9.66695 9.68222 11.364 12.3975L12.636 11.6025C11.1965 9.29929 10.9619 6.44145 12.0065 3.93432L10.6219 3.35739ZM10.9777 12.0928C9.18293 14.4003 6.42334 15.75 3.5 15.75V17.25C6.88622 17.25 10.0828 15.6866 12.1617 13.0137L10.9777 12.0928ZM6.80769 2.77883C5.13077 6.80344 5.13077 11.2638 6.80769 15.2885L8.19231 14.7115C6.66923 11.0562 6.66923 7.01114 8.19231 3.35575L6.80769 2.77883ZM11 7.25C14.6428 7.25 18.1364 8.6971 20.7123 11.273L21.773 10.2123C18.9158 7.35514 15.0406 5.75 11 5.75V7.25ZM12.0917 12.75C15.2197 12.75 18.1408 14.3133 19.876 16.916L21.124 16.084C19.1107 13.064 15.7213 11.25 12.0917 11.25V12.75Z"})),Bo=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.9386 4.73542C13.3511 4.69785 13.716 5.0018 13.7535 5.4143C13.8024 5.95058 13.893 6.53361 14.045 7.14711C14.1447 7.54916 13.8995 7.95586 13.4974 8.05549C13.0954 8.15512 12.6887 7.90997 12.5891 7.50791C12.4172 6.81421 12.3148 6.15558 12.2597 5.55036C12.2221 5.13785 12.5261 4.77299 12.9386 4.73542ZM5.23942 9.18054C5.47821 8.84208 5.94616 8.76129 6.28461 9.00008C6.78119 9.35043 7.30041 9.76836 7.81522 10.2641C8.1136 10.5514 8.12256 11.0262 7.83525 11.3246C7.54794 11.6229 7.07315 11.6319 6.77478 11.3446C6.31949 10.9062 5.85988 10.5362 5.41988 10.2257C5.08142 9.98694 5.00063 9.51899 5.23942 9.18054ZM13.836 8.99599C14.2094 8.81661 14.6574 8.97385 14.8368 9.3472C14.9605 9.60468 15.097 9.86417 15.2474 10.1247C15.3979 10.3852 15.5543 10.6332 15.7155 10.869C15.9491 11.2111 15.8612 11.6778 15.5192 11.9114C15.1772 12.145 14.7105 12.0572 14.4769 11.7151C14.2947 11.4485 14.118 11.1685 13.9484 10.8747C13.7788 10.5809 13.6246 10.2879 13.4848 9.99681C13.3054 9.62346 13.4627 9.17538 13.836 8.99599ZM8.48046 12.088C8.82249 11.8544 9.28917 11.9422 9.52281 12.2843C9.70496 12.5509 9.88164 12.8309 10.0513 13.1247C10.2209 13.4185 10.375 13.7115 10.5149 14.0026C10.6943 14.3759 10.537 14.824 10.1637 15.0034C9.79032 15.1828 9.34223 15.0256 9.16285 14.6522C9.03914 14.3947 8.90267 14.1352 8.75225 13.8747C8.60182 13.6142 8.44534 13.3662 8.28421 13.1304C8.05057 12.7883 8.13843 12.3217 8.48046 12.088ZM16.1644 12.6748C16.4517 12.3765 16.9265 12.3675 17.2249 12.6548C17.6802 13.0932 18.1398 13.4632 18.5798 13.7737C18.9183 14.0125 18.9991 14.4804 18.7603 14.8189C18.5215 15.1573 18.0535 15.2381 17.7151 14.9993C17.2185 14.649 16.6993 14.2311 16.1845 13.7353C15.8861 13.448 15.8771 12.9732 16.1644 12.6748ZM10.5022 15.9439C10.9043 15.8443 11.311 16.0894 11.4106 16.4915C11.5825 17.1852 11.6849 17.8438 11.74 18.4491C11.7776 18.8616 11.4736 19.2264 11.0611 19.264C10.6486 19.3016 10.2837 18.9976 10.2462 18.5851C10.1973 18.0488 10.1067 17.4658 9.95466 16.8523C9.85502 16.4502 10.1002 16.0436 10.5022 15.9439Z"}),m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2859 1.32632C11.0551 1.05591 8.71992 1.48034 6.62484 2.68993C1.4832 5.65846 -0.278462 12.2331 2.69007 17.3747C5.6586 22.5164 12.2332 24.278 17.3748 21.3095C19.4699 20.0999 21.0051 18.2898 21.8863 16.2227C23.1661 13.2206 23.0684 9.67094 21.3096 6.62471C19.5509 3.57847 16.5256 1.71902 13.2859 1.32632ZM13.7802 3.08033C13.7309 3.49161 13.3576 3.7851 12.9463 3.73585C12.5351 3.68661 12.2416 3.31329 12.2908 2.90201C12.297 2.85081 12.3032 2.8013 12.3096 2.75354C10.638 2.6958 8.93097 3.09054 7.37484 3.98897C5.81951 4.88694 4.62362 6.16839 3.83764 7.64494C3.88216 7.66328 3.92814 7.68258 3.97552 7.70286C4.35631 7.86585 4.53288 8.30668 4.36989 8.68748C4.20689 9.06827 3.76606 9.24484 3.38527 9.08184C3.33556 9.06057 3.2878 9.04062 3.24212 9.02195C2.41524 11.457 2.60225 14.2226 3.98911 16.6247C5.37596 19.0268 7.67752 20.5716 10.1998 21.073C10.2065 21.0241 10.2131 20.9728 10.2195 20.9191C10.2687 20.5078 10.6421 20.2143 11.0533 20.2636C11.4646 20.3128 11.7581 20.6861 11.7089 21.0974C11.7027 21.1486 11.6965 21.198 11.6901 21.2458C13.3618 21.3034 15.0695 20.9084 16.6248 20.0104C18.181 19.112 19.3764 17.831 20.1621 16.3545C20.1176 16.3362 20.0716 16.3168 20.0242 16.2966C19.6434 16.1336 19.4668 15.6927 19.6298 15.3119C19.7928 14.9311 20.2336 14.7546 20.6144 14.9176C20.6641 14.9388 20.7119 14.9588 20.7576 14.9775C21.5849 12.5411 21.3972 9.77639 20.0106 7.37471C18.624 4.97302 16.3236 3.42808 13.7999 2.92639C13.7932 2.97529 13.7866 3.02664 13.7802 3.08033Z"})),Io=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.1665 2.75836L21.2416 8.83351C21.2677 7.81177 21.2303 6.84352 21.1649 5.98862C21.0341 4.27797 19.722 2.96586 18.0114 2.83507C17.1565 2.76971 16.1882 2.7323 15.1665 2.75836ZM21.1071 10.8203L13.1797 2.89285C10.483 3.1978 7.77958 4.04236 5.91097 5.91097C4.04236 7.77958 3.1978 10.483 2.89285 13.1797L10.8203 21.1071C13.517 20.8022 16.2204 19.9576 18.089 18.089C19.9576 16.2204 20.8022 13.517 21.1071 10.8203ZM8.83351 21.2416L2.75836 15.1665C2.7323 16.1882 2.76971 17.1565 2.83507 18.0114C2.96587 19.722 4.27797 21.0341 5.98861 21.1649C6.84352 21.2303 7.81177 21.2677 8.83351 21.2416ZM13.3854 1.36321C15.1096 1.19733 16.7638 1.2353 18.1257 1.33944C20.5746 1.52667 22.4733 3.4254 22.6606 5.87426C22.7647 7.23618 22.8027 8.89045 22.6368 10.6146C22.3524 13.5707 21.4579 16.8414 19.1497 19.1497C16.8414 21.4579 13.5707 22.3524 10.6146 22.6368C8.89045 22.8027 7.23618 22.7647 5.87426 22.6606C3.4254 22.4733 1.52667 20.5746 1.33944 18.1257C1.2353 16.7638 1.19733 15.1096 1.36321 13.3854C1.6476 10.4293 2.54206 7.15857 4.85031 4.85031C7.15857 2.54206 10.4293 1.6476 13.3854 1.36321ZM11.9426 8.1601C12.2355 7.86721 12.7104 7.86721 13.0032 8.1601L13.8914 9.0482L14.7795 8.1601C15.0723 7.86721 15.5472 7.86721 15.8401 8.1601C16.133 8.45299 16.133 8.92787 15.8401 9.22076L14.952 10.1089L15.8401 10.997C16.133 11.2899 16.133 11.7647 15.8401 12.0576C15.5472 12.3505 15.0723 12.3505 14.7795 12.0576L13.8914 11.1695L13.0608 12.0001L13.9489 12.8882C14.2418 13.1811 14.2418 13.656 13.9489 13.9489C13.656 14.2418 13.1811 14.2418 12.8882 13.9489L12.0001 13.0608L11.1695 13.8914L12.0576 14.7795C12.3505 15.0723 12.3505 15.5472 12.0576 15.8401C11.7647 16.133 11.2899 16.133 10.997 15.8401L10.1089 14.952L9.22076 15.8401C8.92787 16.133 8.45299 16.133 8.1601 15.8401C7.86721 15.5472 7.86721 15.0723 8.1601 14.7795L9.0482 13.8914L8.1601 13.0032C7.86721 12.7104 7.86721 12.2355 8.1601 11.9426C8.45299 11.6497 8.92787 11.6497 9.22076 11.9426L10.1089 12.8307L10.9394 12.0001L10.0513 11.112C9.75845 10.8191 9.75845 10.3442 10.0513 10.0513C10.3442 9.75845 10.8191 9.75845 11.112 10.0513L12.0001 10.9394L12.8307 10.1089L11.9426 9.22076C11.6497 8.92787 11.6497 8.45299 11.9426 8.1601Z"})),zo=e=>m.createElement("svg",{fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 32 32","data-name":"Layer 1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("rect",{height:1,transform:"translate(20 51) rotate(180)",width:16,x:2,y:25}),m.createElement("rect",{height:1,transform:"translate(26 59) rotate(180)",width:16,x:5,y:29}),m.createElement("rect",{height:1,transform:"translate(39 -8) rotate(90)",width:19,x:14,y:15}),m.createElement("rect",{height:1,transform:"translate(21 10) rotate(90)",width:19,x:-4,y:15}),m.createElement("path",{d:"M24,25H23v2a2,2,0,0,1-2,2H20v1h1a3,3,0,0,0,3-3Z"}),m.createElement("path",{d:"M17,26h1v1a2,2,0,0,0,2,2h1v1H20a3,3,0,0,1-3-3Z"}),m.createElement("path",{d:"M2,26H3v1a2,2,0,0,0,2,2H6v1H5a3,3,0,0,1-3-3Z"}),m.createElement("rect",{height:1,width:6,x:24,y:6}),m.createElement("rect",{height:1,width:19,x:8,y:2}),m.createElement("path",{d:"M5,6H6V5A2,2,0,0,1,8,3H9V2H8A3,3,0,0,0,5,5Z"}),m.createElement("path",{d:"M23,6h1V5a2,2,0,0,1,2-2h1V2H26a3,3,0,0,0-3,3Z"}),m.createElement("path",{d:"M30,6H29V5a2,2,0,0,0-2-2H26V2h1a3,3,0,0,1,3,3Z"})),Ro=y.div`
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
`,Po=y.div`
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
`,Go=y.div`
  padding: 20px 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 2px solid ${({theme:e})=>e.mainBGColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme:e})=>e.ContainerBGColor};
`,Do=y.h2`
  margin: 0;
  font-size: 24px;
  color: ${({theme:e})=>e.textBlack};
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Yo=y.button`
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
`,Xo=y.div`
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
`,Ao=y.button`
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
`,Zo=y.div`
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
`,Ho=y.div`
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
`,Wo=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
`,_o=y.div`
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
`,jo=y.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.textBlack};
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,Vo=y.div`
  font-size: 13px;
  color: ${({theme:e})=>e.textGray};
  line-height: 1.5;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,Oo=y.div`
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
`,No=y.div`
  position: relative;
  width: ${e=>{const c=e.fieldWidth,i=e.fieldHeight,o=100/c,d=80/i,l=Math.min(o,d);return`${c*l}px`}};
  height: ${e=>{const c=e.fieldWidth,i=e.fieldHeight,o=100/c,d=80/i,l=Math.min(o,d);return`${i*l}px`}};
  background: ${({theme:e})=>e.greenMain};
  border: 2px solid ${({theme:e})=>e.darkGreen};
  border-radius: 2px;
  
  /* Гарантуємо мінімальний розмір для дуже малих полів */
  min-width: 20px;
  min-height: 20px;
`,Ut=y.div`
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
`,qo={FOOTBALL:[{id:"football_standard",name:"Стандартне поле",width:105,height:68},{id:"football_small",name:"Мале поле",width:90,height:45},{id:"football_futsal",name:"Футзал",width:40,height:20}],BASKETBALL:[{id:"basketball_nba",name:"NBA",width:28.65,height:15.24},{id:"basketball_fiba",name:"FIBA",width:28,height:15}],VOLLEYBALL:[{id:"volleyball_indoor",name:"Закритий майданчик",width:18,height:9},{id:"volleyball_beach",name:"Пляжний майданчик",width:16,height:8}],TENNIS:[{id:"tennis_singles",name:"Одиночний розряд",width:23.77,height:8.23},{id:"tennis_doubles",name:"Парний розряд",width:23.77,height:10.97}],RUGBY:[{id:"rugby_standard",name:"Регбі (15 гравців)",width:100,height:70},{id:"rugby_sevens",name:"Регбі-7",width:94,height:68}],HANDBALL:[{id:"handball_standard",name:"Гандбол",width:40,height:20}],SHEET:[{id:"a4_portrait",name:"A4 Портрет",width:21,height:29.7},{id:"a4_landscape",name:"A4 Ландшафт",width:29.7,height:21},{id:"a3_portrait",name:"A3 Портрет",width:29.7,height:42},{id:"a3_landscape",name:"A3 Ландшафт",width:42,height:29.7},{id:"a3_landscape1",name:"A3 Ландшафт",width:600,height:29.7},{id:"a3_landscape2",name:"A3 Ландшафт",width:2,height:529.7}]},Ko=[{id:"FOOTBALL",name:"Футбол",icon:Kt},{id:"RUGBY",name:"Регбі",icon:Io},{id:"BASKETBALL",name:"Баскетбол",icon:Eo},{id:"VOLLEYBALL",name:"Волейбол",icon:To},{id:"TENNIS",name:"Теніс",icon:Bo},{id:"HANDBALL",name:"Гандбол",icon:Kt},{id:"SHEET",name:"Аркуш",icon:zo}],Uo=({isOpen:e,onClose:t,onSelectField:r,currentFieldId:c})=>{var s;const[i,o]=m.useState("FOOTBALL"),[d,l]=m.useState(c);if(!e)return null;const p=a=>{l(a.id),r(a),setTimeout(()=>t(),300)},x=a=>{a.target===a.currentTarget&&t()},g=(a,u)=>u==="SHEET"?`${a.width}см × ${a.height}см`:`${a.width}м × ${a.height}м`,h=(a,u)=>u==="SHEET"?`${a}см`:`${a}м`;return n.jsx(Ro,{onClick:x,children:n.jsxs(Po,{children:[n.jsxs(Go,{children:[n.jsx(Do,{children:"Обрати спортивне поле"}),n.jsx(Yo,{onClick:t,children:n.jsx(Qn,{})})]}),n.jsxs(Xo,{children:[n.jsx(Fo,{children:Ko.map(a=>{const u=a.icon;return n.jsxs(Ao,{active:i===a.id,onClick:()=>o(a.id),children:[n.jsx(Zo,{children:n.jsx(u,{})}),a.name]},a.id)})}),n.jsx(Ho,{children:n.jsx(Wo,{children:(s=qo[i])==null?void 0:s.map(a=>n.jsxs(_o,{selected:d===a.id,onClick:()=>p(a),children:[n.jsx(jo,{children:a.name}),n.jsx(Vo,{children:g(a,i)}),n.jsx(Oo,{children:n.jsxs(No,{fieldWidth:a.width,fieldHeight:a.height,children:[n.jsx(Ut,{className:"width",children:h(a.width,i)}),n.jsx(Ut,{className:"height",children:h(a.height,i)})]})})]},a.id))})})]})]})})},Jo=y(po)`
  width: 80%;
  height: 80%;
  stroke: ${({theme:e})=>e.textBlack};
   fill: ${({theme:e})=>e.textBlack};
`,Qo=y(Gn)`
  width: 100%;
  height: 100%;
   fill: ${({theme:e})=>e.black};
   rotate: 180deg;
`,ei=y(ho)`
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.textBlack};
`,ti=y(Pn)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.textBlack};
`,ni=y(Pn)`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  fill: ${({theme:e})=>e.textBlack};
`,ri=y(so)`
  width: 70%;  
  height: 70%;
  stroke: ${({theme:e})=>e.textBlack};
`,oi=y(lo)`
  width: 70%;  
  height: 70%;
  fill: ${({theme:e})=>e.textBlack};
`,ii=y(co)`
  width: 70%;  
  height: 70%;
  fill: ${({theme:e})=>e.textBlack};
`,ai=y.div`
  width: 100%;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-bottom: 2px solid ${({theme:e})=>e.gray};
  padding: 12px 16px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`,si=y.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`,li=y.div`
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
`,ci=y.div`
  flex-shrink: 0;
  position: relative;
  z-index: 10;
`,Ce=y.button`
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

`,di=y.button`
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
  
`,hi=y(ao)`
  width: 60%;
  height: 60%;
  fill: none;
  stroke: ${({theme:e})=>e.textBlack};
`,at=y.div`
  width: 1px;
  height: 20px;
  background: ${({theme:e})=>e.gray};
  margin: 0 4px;
  
  @media (max-width: 768px) {
    height: 16px;
  }
`,Jt=y.div`
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
`,Qt=y.span`
  font-size: 11px;
  color: ${({theme:e})=>e.textGray};
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 9px;
  }
`,en=y.input`
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
`,pi=y.input`
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
`,tn=({value:e,onChange:t,...r})=>{const[c,i]=m.useState(e),o=m.useRef(null);m.useEffect(()=>{o.current||i(e)},[e]);const d=l=>{const p=l.target.value;i(p),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{t(p),o.current=null},200)};return n.jsx(pi,{type:"color",value:c,onChange:d,...r})},ui=({currentField:e,onSelectField:t,isSidebarOpen:r,onToggleSidebar:c})=>{const[i,o]=m.useState(!1),d=me(),{activeTool:l,team1:p,team2:x,historyIndex:g,history:h}=Pe(b=>b.tacticsBoard),s=()=>{o(!0)},a=()=>{o(!1)},u=b=>{t(b),a()},f=b=>{d(Ke(b))},w=b=>{d(Ke(`shape_${b.id}`))},$=b=>{d(Ke(`figure_${b.id}`))},C=b=>{const Y=parseInt(b.target.value)||0;d(er(Math.max(0,Math.min(30,Y))))},v=b=>{d(tr(b))},L=b=>{const Y=parseInt(b.target.value)||0;d(nr(Math.max(0,Math.min(30,Y))))},k=b=>{d(rr(b))},S=()=>{d(yn())},z=()=>{d(Cn())},X=()=>{window.confirm("Ви впевнені, що хочете очистити всю дошку?")&&d(or())},R=g>0,M=g<h.length-1;return n.jsxs(n.Fragment,{children:[n.jsx(ai,{children:n.jsxs(si,{children:[n.jsxs(li,{children:[n.jsx(Ce,{title:"Обрати поле",onClick:s,children:n.jsx(hi,{})}),n.jsx(at,{}),n.jsx(Ce,{title:"Курсор (виділення та переміщення)",active:l==="cursor",onClick:()=>f("cursor"),children:n.jsx(ri,{})}),n.jsx(Ce,{title:"Додати текст",active:l==="text",onClick:()=>f("text"),children:n.jsx(Jo,{})}),n.jsx(Ce,{title:"Малювання",active:l==="drawing",onClick:()=>f("drawing"),children:n.jsx(oi,{})}),n.jsx(Ce,{title:"Ластик",active:l==="eraser",onClick:()=>f("eraser"),children:n.jsx(ii,{})}),n.jsx(Mo,{activeTool:l,onSelectShape:w}),n.jsx(ko,{activeTool:l,onSelectFigure:$}),n.jsx(at,{}),n.jsxs(Jt,{children:[n.jsx(Qt,{children:"К1:"}),n.jsx(en,{type:"number",min:"0",max:"30",value:p.count,onChange:C,title:"Кількість гравців команди 1"}),n.jsx(tn,{value:p.color,onChange:v,title:"Колір команди 1"})]}),n.jsxs(Jt,{children:[n.jsx(Qt,{children:"К2:"}),n.jsx(en,{type:"number",min:"0",max:"30",value:x.count,onChange:L,title:"Кількість гравців команди 2"}),n.jsx(tn,{value:x.color,onChange:k,title:"Колір команди 2"})]}),n.jsx(at,{}),n.jsx(Ce,{title:"М'яч",active:l==="ball",onClick:()=>f("ball"),children:"⚽"}),n.jsx(at,{}),n.jsx(Ce,{title:"Назад (Undo)",onClick:S,disabled:!R,children:n.jsx(ni,{})}),n.jsx(Ce,{title:"Вперед (Redo)",onClick:z,disabled:!M,children:n.jsx(ti,{})}),n.jsx(Ce,{title:"Скасувати все",onClick:X,children:n.jsx(ei,{})})]}),n.jsx(ci,{children:n.jsx(di,{title:"Відкрити панель інструментів",active:r,onClick:c,children:n.jsx(Qo,{})})})]})}),n.jsx(Uo,{isOpen:i,onClose:a,onSelectField:u,currentFieldId:e.id})]})},xi=y.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,gi=y.div`
  display: grid;
  grid-template-columns: 40px 1fr 80px;
  gap: 8px;
  align-items: center;
`,fi=y.div`
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
`,mi=y.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  border: 2px solid ${({theme:e})=>e.lightGreen||"#ccc"};
  cursor: pointer;
  overflow: hidden;
`,yi=y.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,Ci=y.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,wi=y.input`
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
`,bi=y.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
`,Mi=y.div`
  position: relative;
`,vi=y.input`
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
`,$i=y.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
  display: block;
  text-align: center;
  margin-top: 2px;
`,nn=e=>Math.max(0,Math.min(1,e/100)),Li=e=>Math.round(Math.max(0,Math.min(100,e*100))),rn=(e,t=1)=>{if(!e)return"0, 0, 0, 1";let r=e.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const c=parseInt(r.slice(0,2),16),i=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`${c}, ${i}, ${o}, ${t}`},xe=({color:e,opacity:t,onColorChange:r,onOpacityChange:c,label:i})=>{const[o,d]=m.useState(e||"#000000"),[l,p]=m.useState(t!==void 0?t:100),x=m.useRef(null),g=m.useRef(null),h=m.useRef(null),s=m.useMemo(()=>{const L=nn(l);return rn(o,L)},[o,l]),[a,u]=m.useState(s),f=m.useMemo(()=>{const L=nn(l);return{backgroundColor:`rgba(${rn(o,L)})`}},[o,l]);m.useEffect(()=>{g.current||(d(e||"#000000"),p(t!==void 0?t:100))},[e,t]),m.useEffect(()=>{document.activeElement!==h.current&&u(s)},[s]);const w=L=>{const k=L.target.value;d(k),g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{r&&r(k),g.current=null},150)},$=L=>{const k=L.target.value;u(k);const S=k.split(",").map(z=>parseFloat(z.trim()));if(S.length>=3&&!S.some(isNaN)){const z=Math.max(0,Math.min(255,S[0]||0)),X=Math.max(0,Math.min(255,S[1]||0)),R=Math.max(0,Math.min(255,S[2]||0)),M=S[3]!==void 0?Math.max(0,Math.min(1,S[3])):1,b=`#${((1<<24)+(z<<16)+(X<<8)+R).toString(16).slice(1)}`,Y=Li(M);d(b),p(Y),g.current&&clearTimeout(g.current),r&&r(b),c&&c(Y)}},C=L=>{let k=L.target.value,S=parseInt(k);isNaN(S)&&(S=0),S>100&&(S=100),S<0&&(S=0),p(S),c&&c(S)},v=()=>{x.current&&x.current.click()};return n.jsxs("div",{children:[i&&n.jsx(xi,{children:i}),n.jsxs(gi,{children:[n.jsxs(fi,{children:[n.jsx(mi,{style:f,onClick:v}),n.jsx(yi,{ref:x,type:"color",value:o,onChange:w})]}),n.jsxs(Ci,{children:[n.jsx(wi,{ref:h,type:"text",value:a,onChange:$,placeholder:"0, 0, 0, 1"}),n.jsx(bi,{children:"RGBA"})]}),n.jsxs(Mi,{children:[n.jsx(vi,{type:"number",min:"0",max:"100",value:l,onChange:C}),n.jsx($i,{children:"Прозорість %"})]})]})]})},Si=y.div`
  position: relative;
  width: 100%;
`,ki=y.button`
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
`,Ei=y.div`
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
`,Ti=y.div`
  padding: 6px 8px;
  font-family: ${({$fontFamily:e})=>e||"Arial"};
  cursor: pointer;
  color: ${({theme:e})=>e.textBlack};
  background-color: ${({selected:e,theme:t})=>e?t.lightGreen:"transparent"};

  &:hover {
    background-color: ${({theme:e})=>e.greenMain};
    color: ${({theme:e})=>e.white};
  }
`,Bi=y(Tr)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) rotate(${({$open:e})=>e?"180deg":"0"});
  width: 20px;
  height: 20px;
  stroke: ${({theme:e})=>e.iconColor};
  transition: transform 0.3s ease;
`,fe=({value:e,onChange:t,options:r=[],placeholder:c="Оберіть..."})=>{const[i,o]=m.useState(!1),d=m.useRef(null),l=()=>o(h=>!h),p=()=>o(!1),x=h=>{t(h),p()};m.useEffect(()=>{const h=s=>{d.current&&!d.current.contains(s.target)&&p()};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]);const g=r.find(h=>h.value===e);return n.jsxs(Si,{ref:d,children:[n.jsxs(ki,{onClick:l,$fontFamily:g==null?void 0:g.value,children:[g?g.label:c,n.jsx(Bi,{$open:i})]}),i&&n.jsx(Ei,{children:r.map(h=>n.jsx(Ti,{onClick:()=>x(h.value),selected:h.value===e,$fontFamily:h.value,children:h.label},h.value))})]})},Ii="/coaching-draft/assets/brush_marker-9c4a6bad.png",zi="/coaching-draft/assets/brush_pencil-33e6165e.png",Ri="/coaching-draft/assets/brush_pen-07c57dd9.png",Pi="/coaching-draft/assets/brush_oil-91e92a78.png",Gi="/coaching-draft/assets/brush_watercolor-e5ec0b25.png",Di="/coaching-draft/assets/brush_spray-d0145476.png",on=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,Yi=y.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,wt=y.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,an=y.label`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Xi=y.span`
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
  background: ${({value:e,min:t,max:r,theme:c})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${c.greenMain} 0%, ${c.greenMain} ${i}%, ${c.lightGreen} ${i}%, ${c.lightGreen} 100%)`}};
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
`,Ai=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 10px;
`,Ye=y.button`
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
`,sn=()=>{const e=me(),{drawColor:t,brushSize:r,brushOpacity:c,brushStyle:i,lineType:o,selectedObjectId:d,paths:l}=Pe(b=>b.tacticsBoard),p=d&&d.startsWith("path_")?parseInt(d.replace("path_","")):-1,x=p>=0?l[p]:null,g=x?x.brushStyle:i,h=x?x.color:t,s=x?x.opacity!==void 0?x.opacity:100:c,a=x?x.brushSize:r,u=x?x.lineType:o,[f,w]=m.useState(a),[$,C]=m.useState(50),[v,L]=m.useState(!0);m.useEffect(()=>{switch(w(a),x?x.brushStyle:i){case"hard":C(50),L(!0);break;case"pencil":C(20),L(!0);break;case"calligraphy":C(30),L(!1);break;case"oil":C(60),L(!1);break;case"watercolor":C(80),L(!1);break;case"splatter":C(100),L(!1);break;default:C(50),L(!0)}},[d,a,x,i]);const k=b=>{x?e($e({index:p,updates:{brushStyle:b,lineType:["oil","watercolor","splatter","calligraphy"].includes(b)?"solid":u}})):(e(ir(b)),["oil","watercolor","splatter","calligraphy"].includes(b)&&e(Wt("solid")))},S=b=>{e(x?$e({index:p,updates:{color:b}}):ar(b))},z=b=>{e(x?$e({index:p,updates:{opacity:b}}):sr(b))},X=b=>{w(parseInt(b.target.value))},R=()=>{e(x?$e({index:p,updates:{brushSize:f}}):lr(f))},M=b=>{e(x?$e({index:p,updates:{lineType:b}}):Wt(b))};return n.jsxs(n.Fragment,{children:[n.jsxs(on,{children:[n.jsx(Yi,{children:x?"Пензель":"Тип пензля"}),n.jsxs(Ai,{children:[n.jsx(Ye,{active:g==="hard",onClick:()=>k("hard"),title:"Маркер",children:n.jsx("img",{src:Ii,alt:"Маркер"})}),n.jsx(Ye,{active:g==="pencil",onClick:()=>k("pencil"),title:"Олівець",children:n.jsx("img",{src:zi,alt:"Олівець"})}),n.jsx(Ye,{active:g==="calligraphy",onClick:()=>k("calligraphy"),title:"Перо",children:n.jsx("img",{src:Ri,alt:"Перо"})}),n.jsx(Ye,{active:g==="oil",onClick:()=>k("oil"),title:"Олія",children:n.jsx("img",{src:Pi,alt:"Олія"})}),n.jsx(Ye,{active:g==="watercolor",onClick:()=>k("watercolor"),title:"Акварель",children:n.jsx("img",{src:Gi,alt:"Акварель"})}),n.jsx(Ye,{active:g==="splatter",onClick:()=>k("splatter"),title:"Спрей",children:n.jsx("img",{src:Di,alt:"Спрей"})})]})]}),n.jsxs(on,{children:[n.jsx(wt,{children:n.jsx(xe,{color:h,opacity:s,onColorChange:S,onOpacityChange:z,label:"Колір та прозорість"})}),n.jsxs(wt,{children:[n.jsxs(an,{children:["Товщина лінії",n.jsxs(Xi,{children:[f,"px"]})]}),n.jsx(Fi,{min:"1",max:$,value:f,onChange:X,onMouseUp:R,onTouchEnd:R})]}),v&&n.jsxs(wt,{children:[n.jsx(an,{children:"Тип лінії"}),n.jsx(fe,{value:u||"solid",onChange:M,options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]})]})},Zi=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Hi=y.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,be=y.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Be=y.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Wi=y.textarea`
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
`,st=y.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:c})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${c.greenMain||"#4CAF50"} 0%, ${c.greenMain||"#4CAF50"} ${i}%, ${c.lightGreen||"#E8F5E9"} ${i}%, ${c.lightGreen||"#E8F5E9"} 100%)`}};
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
`,lt=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,_i=y.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,bt=y.button`
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
`,ji=({selectedObject:e})=>{const t=me(),[r,c]=m.useState(e.text||"");m.useEffect(()=>{c(e.text||"")},[e.id,e.text]);const i=(d,l)=>{t(ze({id:e.id,updates:{[d]:l}}))},o=d=>{const l=d.target.value;c(l),i("text",l)};return n.jsxs(Zi,{children:[n.jsx(Hi,{children:"Властивості тексту"}),n.jsxs(be,{children:[n.jsx(Be,{children:"Текст"}),n.jsx(Wi,{value:r,onChange:o,placeholder:"Введіть текст...",$fontFamily:e.fontFamily})]}),n.jsx(be,{children:n.jsx(xe,{color:e.color||"#000000",opacity:e.opacity||100,onColorChange:d=>i("color",d),onOpacityChange:d=>i("opacity",d),label:"Колір і прозорість"})}),n.jsxs(be,{children:[n.jsxs(Be,{children:["Розмір шрифту",n.jsxs(lt,{children:[e.fontSize||16,"px"]})]}),n.jsx(st,{min:"8",max:"200",value:e.fontSize||16,onChange:d=>i("fontSize",Number(d.target.value))})]}),n.jsxs(be,{children:[n.jsx(Be,{children:"Тип шрифту"}),n.jsx(fe,{value:e.fontFamily||"Arial",onChange:d=>i("fontFamily",d),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(be,{children:[n.jsx(Be,{children:"Стиль тексту"}),n.jsxs(_i,{children:[n.jsx(bt,{$active:e.fontWeight==="bold",onClick:()=>i("fontWeight",e.fontWeight==="bold"?"normal":"bold"),children:n.jsx("strong",{children:"B"})}),n.jsx(bt,{$active:e.fontStyle==="italic",onClick:()=>i("fontStyle",e.fontStyle==="italic"?"normal":"italic"),children:n.jsx("em",{children:"I"})}),n.jsx(bt,{$active:e.textDecoration==="underline",onClick:()=>i("textDecoration",e.textDecoration==="underline"?"none":"underline"),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(be,{children:[n.jsxs(Be,{children:["Міжрядковий інтервал",n.jsx(lt,{children:(e.lineHeight||.9).toFixed(1)})]}),n.jsx(st,{min:"0.5",max:"3",step:"0.1",value:e.lineHeight||.9,onChange:d=>i("lineHeight",Number(d.target.value))})]}),n.jsxs(be,{children:[n.jsxs(Be,{children:["Міжлітерний інтервал",n.jsxs(lt,{children:[e.letterSpacing||0,"px"]})]}),n.jsx(st,{min:"-2",max:"10",step:"0.5",value:e.letterSpacing||0,onChange:d=>i("letterSpacing",Number(d.target.value))})]}),n.jsxs(be,{children:[n.jsxs(Be,{children:["Поворот тексту",n.jsxs(lt,{children:[e.rotation||0,"°"]})]}),n.jsx(st,{min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:d=>i("rotation",Number(d.target.value))})]})]})},Vi=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Oi=y.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Xe=y.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,_e=y.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Mt=y.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:c})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${c.greenMain} 0%, ${c.greenMain} ${i}%, ${c.lightGreen} ${i}%, ${c.lightGreen} 100%)`}};
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
`,vt=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Ni=y.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,$t=y.button`
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
`,qi=()=>{const e=me(),{textColor:t,textOpacity:r,textFontSize:c,textFontFamily:i,textFontWeight:o,textFontStyle:d,textDecoration:l,textLineHeight:p,textLetterSpacing:x}=Pe(g=>g.tacticsBoard);return n.jsxs(Vi,{children:[n.jsx(Oi,{children:"Налаштування тексту"}),n.jsx(Xe,{children:n.jsx(xe,{color:t,opacity:r,onColorChange:g=>e(cr(g)),onOpacityChange:g=>e(dr(g)),label:"Колір і прозорість"})}),n.jsxs(Xe,{children:[n.jsxs(_e,{children:["Розмір шрифту",n.jsxs(vt,{children:[c,"px"]})]}),n.jsx(Mt,{type:"range",min:"8",max:"200",value:c,onChange:g=>e(hr(Number(g.target.value)))})]}),n.jsxs(Xe,{children:[n.jsx(_e,{children:"Тип шрифту"}),n.jsx(fe,{value:i,onChange:g=>e(pr(g)),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(Xe,{children:[n.jsx(_e,{children:"Стиль тексту"}),n.jsxs(Ni,{children:[n.jsx($t,{$active:o==="bold",onClick:()=>e(ur(o==="bold"?"normal":"bold")),children:n.jsx("strong",{children:"B"})}),n.jsx($t,{$active:d==="italic",onClick:()=>e(xr(d==="italic"?"normal":"italic")),children:n.jsx("em",{children:"I"})}),n.jsx($t,{$active:l==="underline",onClick:()=>e(gr(l==="underline"?"none":"underline")),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(Xe,{children:[n.jsxs(_e,{children:["Міжрядковий інтервал",n.jsx(vt,{children:p})]}),n.jsx(Mt,{type:"range",min:"0.5",max:"3",step:"0.1",value:p,onChange:g=>e(fr(Number(g.target.value)))})]}),n.jsxs(Xe,{children:[n.jsxs(_e,{children:["Міжлітерний інтервал",n.jsxs(vt,{children:[x,"px"]})]}),n.jsx(Mt,{type:"range",min:"-2",max:"10",step:"0.5",value:x,onChange:g=>e(mr(Number(g.target.value)))})]})]})},Ki=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Ui=y.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Me=y.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ve=y.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,ln=y.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:c})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${c.greenMain} 0%, ${c.greenMain} ${i}%, ${c.lightGreen} ${i}%, ${c.lightGreen} 100%)`}};
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
`,cn=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Ji=y.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,dn=y.input`
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
`,ct=8,Qi=({selectedObject:e})=>{const t=me(),r=(o,d)=>{t(ze({id:e.id,updates:{[o]:d}}))},c=(o,d)=>{let l=Number(d);l<ct&&(l=ct);const p=(e[o]||1)<0?-1:1;l*=p,r(o,l)},i=e.shape==="line"||e.shape==="arrow";return n.jsxs(Ki,{children:[n.jsx(Ui,{children:"Властивості фігури"}),!i&&n.jsxs(Me,{children:[n.jsx(ve,{children:"Розміри"}),n.jsxs(Ji,{children:[n.jsxs("div",{children:[n.jsx(ve,{style:{fontSize:"10px",marginBottom:"4px"},children:"Ширина"}),n.jsx(dn,{type:"number",min:ct,value:Math.abs(e.width||50),onChange:o=>c("width",o.target.value)})]}),n.jsxs("div",{children:[n.jsx(ve,{style:{fontSize:"10px",marginBottom:"4px"},children:"Висота"}),n.jsx(dn,{type:"number",min:ct,value:Math.abs(e.height||30),onChange:o=>c("height",o.target.value)})]})]})]}),n.jsxs(Me,{children:[n.jsxs(ve,{children:["Кут повороту",n.jsxs(cn,{children:[e.rotation||0,"º"]})]}),n.jsx(ln,{type:"range",min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:o=>r("rotation",Number(o.target.value))})]}),n.jsx(Me,{children:n.jsx(xe,{color:e.borderColor||e.color||"#000000",opacity:e.borderOpacity!==void 0?e.borderOpacity:100,onColorChange:o=>r("borderColor",o),onOpacityChange:o=>r("borderOpacity",o),label:i?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(Me,{children:[n.jsxs(ve,{children:[i?"Товщина лінії":"Товщина обводки",n.jsxs(cn,{children:[e.borderWidth||2,"px"]})]}),n.jsx(ln,{type:"range",min:"1",max:"20",value:e.borderWidth||2,onChange:o=>r("borderWidth",Number(o.target.value))})]}),n.jsxs(Me,{children:[n.jsx(ve,{children:"Тип обводки"}),n.jsx(fe,{value:e.borderStyle||"solid",onChange:o=>r("borderStyle",o),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),i&&n.jsxs(n.Fragment,{children:[n.jsxs(Me,{children:[n.jsx(ve,{children:"Початок лінії"}),n.jsx(fe,{value:e.lineCapStart||"butt",onChange:o=>r("lineCapStart",o),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(Me,{children:[n.jsx(ve,{children:"Кінець лінії"}),n.jsx(fe,{value:e.lineCapEnd||(e.shape==="arrow"?"arrow":"butt"),onChange:o=>r("lineCapEnd",o),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!i&&n.jsx(Me,{children:n.jsx(xe,{color:e.fillColor||"#ffffff",opacity:e.fillOpacity!==void 0?e.fillOpacity:0,onColorChange:o=>r("fillColor",o),onOpacityChange:o=>r("fillOpacity",o),label:"Колір заливки і прозорість"})})]})},ea=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,ta=y.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Fe=y.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,dt=y.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,na=y.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:c})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${c.greenMain} 0%, ${c.greenMain} ${i}%, ${c.lightGreen} ${i}%, ${c.lightGreen} 100%)`}};
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
`,ra=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,oa=y.p`
  font-size: 12px;
  color: #888;
  font-style: italic;
  margin-top: 12px;
  line-height: 1.4;
`,ia=()=>{const e=me(),{activeTool:t,shapeBorderColor:r,shapeBorderOpacity:c,shapeFillColor:i,shapeFillOpacity:o,shapeBorderWidth:d,shapeBorderStyle:l,shapeLineCapStart:p,shapeLineCapEnd:x}=Pe(h=>h.tacticsBoard),g=t==="shape_line"||t==="shape_arrow";return n.jsxs(ea,{children:[n.jsx(ta,{children:"Налаштування фігури"}),n.jsx(Fe,{children:n.jsx(xe,{color:r,opacity:c,onColorChange:h=>e(yr(h)),onOpacityChange:h=>e(Cr(h)),label:"Колір обводки та прозорість"})}),n.jsxs(Fe,{children:[n.jsxs(dt,{children:["Товщина обводки",n.jsxs(ra,{children:[d,"px"]})]}),n.jsx(na,{type:"range",min:"1",max:"20",value:d,onChange:h=>e(wr(Number(h.target.value)))})]}),n.jsxs(Fe,{children:[n.jsx(dt,{children:"Стиль обводки"}),n.jsx(fe,{value:l,onChange:h=>e(br(h)),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть стиль"})]}),g&&n.jsxs(n.Fragment,{children:[n.jsxs(Fe,{children:[n.jsx(dt,{children:"Початок лінії"}),n.jsx(fe,{value:p,onChange:h=>e(Mr(h)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(Fe,{children:[n.jsx(dt,{children:"Кінець лінії"}),n.jsx(fe,{value:x||(t==="shape_arrow"?"arrow":"butt"),onChange:h=>e(mn(h)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!g&&n.jsx(Fe,{children:n.jsx(xe,{color:i,opacity:o,onColorChange:h=>e(vr(h)),onOpacityChange:h=>e($r(h)),label:"Колір заливки і прозорість"})}),n.jsx(oa,{children:g?"Клікніть і потягніть, щоб намалювати лінію":"Клікніть і потягніть, щоб створити фігуру"})]})},je=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,Ve=y.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ue=y.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,Ie=y.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,hn=y.input`
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
`,ht=y.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:c})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${c.greenMain} 0%, ${c.greenMain} ${i}%, ${c.lightGreen} ${i}%, ${c.lightGreen} 100%)`}};
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
`,pt=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,aa=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
  margin-top: 10px;
`,sa=y.div`
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
`,la=y.div`
  width: 30px; 
  height: 45px;
  background: ${({$color:e})=>e};
  border: 2px solid ${({$borderColor:e})=>e}; 
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); 
`,ca=y.div`
  display: flex;
  flex-direction: row; 
  gap: 15px; 
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`,pn=y.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,un=y.input.attrs({type:"color"})`
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
`,xn=y.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.textGray||"#666"};
  min-width: 45px; 
`,da=y.button`
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
`,ha=y.button`
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
`,pa=y.span`
  font-size: 10px;
  color: ${({theme:e,$over:t})=>t?e.red:e.textGray};
  margin-top: 4px;
  display: block;
`,gn=8,fn=50,ut=100,Oe=3,ua=({selectedObject:e})=>{const t=me(),r=(M,b)=>{t(ze({id:e.id,updates:{[M]:b}}))},c=M=>{let b=Number(M);b=Math.max(gn,Math.min(fn,b)),r("radius",b)},i=M=>{const b=Math.max(0,Math.min(99,Number(M)||0));r("number",b)},o=M=>{M.length<=ut&&r("topText",M)},d=()=>{const M=e.cards||[];if(M.length<Oe){const b=[...M,{color:"#FFD700",cardBorderColor:"#000000"}];r("cards",b)}},l=M=>{const Y=(e.cards||[]).filter((G,H)=>H!==M);r("cards",Y)},p=(M,b)=>{const G=[...e.cards||[]];G[M]={...G[M],color:b},r("cards",G)},x=(M,b)=>{const G=[...e.cards||[]];G[M]={...G[M],cardBorderColor:b},r("cards",G)},g=e.radius||20,h=e.number!==void 0?e.number:1,s=e.topText||"",a=e.rotation||0,u=e.color||"#ff0000",f=e.colorOpacity!==void 0?e.colorOpacity:100,w=e.numberColor||"#ffffff",$=e.numberOpacity!==void 0?e.numberOpacity:100,C=e.textColor||"#000000",v=e.textOpacity!==void 0?e.textOpacity:100,L=e.textSize||Math.max(10,g*.5),k=e.borderWidth||2,S=e.borderColor||"#000000",z=e.borderOpacity!==void 0?e.borderOpacity:100,X=e.borderStyle||"solid",R=e.cards||[];return n.jsxs(n.Fragment,{children:[n.jsxs(je,{children:[n.jsx(Ve,{children:"Розмір та позиція"}),n.jsxs(ue,{children:[n.jsxs(Ie,{children:["Розмір гравця (8-50px)",n.jsxs(pt,{children:[g,"px"]})]}),n.jsx(ht,{min:gn,max:fn,value:g,onChange:M=>c(M.target.value)})]}),n.jsxs(ue,{children:[n.jsxs(Ie,{children:["Кут повороту",n.jsxs(pt,{children:[a,"º"]})]}),n.jsx(ht,{min:"-180",max:"180",step:"5",value:a,onChange:M=>r("rotation",Number(M.target.value))})]}),n.jsx(ue,{children:n.jsx(xe,{color:u,opacity:f,onColorChange:M=>r("color",M),onOpacityChange:M=>r("colorOpacity",M),label:"Колір гравця"})})]}),n.jsxs(je,{children:[n.jsx(Ve,{children:"Номер гравця"}),n.jsxs(ue,{children:[n.jsx(Ie,{children:"Номер гравця (0-99)"}),n.jsx(hn,{type:"number",min:"0",max:"99",value:h,onChange:M=>i(M.target.value)})]}),n.jsx(ue,{children:n.jsx(xe,{color:w,opacity:$,onColorChange:M=>r("numberColor",M),onOpacityChange:M=>r("numberOpacity",M),label:"Колір номера"})})]}),n.jsxs(je,{children:[n.jsx(Ve,{children:"Текст над гравцем"}),n.jsxs(ue,{children:[n.jsx(Ie,{children:"Текст"}),n.jsx(hn,{type:"text",maxLength:ut,placeholder:"Введіть текст",value:s,onChange:M=>o(M.target.value)}),n.jsxs(pa,{$over:s.length>ut,children:[s.length,"/",ut," символів"]})]}),s&&n.jsxs(n.Fragment,{children:[n.jsxs(ue,{children:[n.jsxs(Ie,{children:["Розмір тексту",n.jsxs(pt,{children:[L,"px"]})]}),n.jsx(ht,{min:"8",max:"40",value:L,onChange:M=>r("textSize",Number(M.target.value))})]}),n.jsx(ue,{children:n.jsx(xe,{color:C,opacity:v,onColorChange:M=>r("textColor",M),onOpacityChange:M=>r("textOpacity",M),label:"Колір тексту"})})]})]}),n.jsxs(je,{children:[n.jsx(Ve,{children:"Обводка"}),n.jsx(ue,{children:n.jsx(xe,{color:S,opacity:z,onColorChange:M=>r("borderColor",M),onOpacityChange:M=>r("borderOpacity",M),label:"Колір обводки"})}),n.jsxs(ue,{children:[n.jsxs(Ie,{children:["Товщина обводки",n.jsxs(pt,{children:[k,"px"]})]}),n.jsx(ht,{min:"1",max:"10",value:k,onChange:M=>r("borderWidth",Number(M.target.value))})]}),n.jsxs(ue,{children:[n.jsx(Ie,{children:"Тип обводки"}),n.jsx(fe,{value:X,onChange:M=>r("borderStyle",M),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]}),n.jsxs(je,{children:[n.jsxs(Ve,{children:["Картки (",R.length,"/",Oe,")"]}),R.length>0&&n.jsx(aa,{children:R.map((M,b)=>n.jsxs(sa,{children:[n.jsx(la,{$color:M.color,$borderColor:M.cardBorderColor||"#000000"}),n.jsxs(ca,{children:[n.jsxs(pn,{title:"Колір заливки картки",children:[n.jsx(xn,{children:"Заливка:"}),n.jsx(un,{value:M.color,onChange:Y=>p(b,Y.target.value)})]}),n.jsxs(pn,{title:"Колір обводки картки",children:[n.jsx(xn,{children:"Обводка:"}),n.jsx(un,{value:M.cardBorderColor||"#000000",onChange:Y=>x(b,Y.target.value)})]})]}),n.jsx(da,{onClick:()=>l(b),title:"Видалити картку",children:n.jsx(Br,{})})]},b))}),n.jsx(ue,{style:{marginTop:R.length>0?"15px":"0"},children:n.jsx(ha,{onClick:d,disabled:R.length>=Oe,children:R.length>=Oe?`Максимум ${Oe} картки`:"Додати картку"})})]})]})},xa=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,ga=y.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,fa=y.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,ma=y.label`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,ya=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Ca=y.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:r,theme:c})=>{const i=(e-t)/(r-t)*100;return`linear-gradient(to right, ${c.greenMain} 0%, ${c.greenMain} ${i}%, ${c.lightGreen} ${i}%, ${c.lightGreen} 100%)`}};
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
`,wa=()=>{const e=me(),{eraserSize:t}=Pe(d=>d.tacticsBoard),[r,c]=m.useState(t);m.useEffect(()=>{c(t)},[t]);const i=d=>{c(parseInt(d.target.value))},o=()=>{e(Lr(r))};return n.jsxs(xa,{children:[n.jsx(ga,{children:"Налаштування ластика"}),n.jsxs(fa,{children:[n.jsxs(ma,{children:["Розмір ластика",n.jsxs(ya,{children:[r,"px"]})]}),n.jsx(Ca,{min:"5",max:"200",value:r,onChange:i,onMouseUp:o,onTouchEnd:o})]})]})},ba=y(Gn)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.black};
`,Ma=y.div`
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
`,va=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
`,$a=y.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,La=y.button`
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
`,Sa=y.div`
  padding: 20px;
`,Ne=y.button`
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
`,ka=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #ccc;
  text-align: center;
`,Ea=({isOpen:e,onClose:t})=>{const r=me(),{activeTool:c,selectedObjectId:i,objects:o,paths:d}=Pe(g=>g.tacticsBoard),l=i?i.startsWith("path_")?{...d[parseInt(i.replace("path_",""))],type:"path",id:i}:o.find(g=>g.id===i):null,p=()=>{if(i){if(i.startsWith("path_")){const g=parseInt(i.replace("path_",""));r(wn(g))}else r(bn(i));r(Ae()),t()}},x=()=>{if(l)switch(l.type){case"text":return n.jsxs(n.Fragment,{children:[n.jsx(ji,{selectedObject:l}),n.jsx(Ne,{onClick:p,children:"Видалити текст"})]});case"player":return n.jsxs(n.Fragment,{children:[n.jsx(ua,{selectedObject:l}),n.jsx(Ne,{onClick:p,children:"Видалити гравця"})]});case"shape":return n.jsxs(n.Fragment,{children:[n.jsx(Qi,{selectedObject:l}),n.jsx(Ne,{onClick:p,children:"Видалити фігуру"})]});case"path":return n.jsxs(n.Fragment,{children:[n.jsx(sn,{}),n.jsx(Ne,{onClick:p,children:"Видалити лінію"})]});default:return n.jsx(Ne,{onClick:p,children:"Видалити об'єкт"})}switch(c){case"text":return n.jsx(qi,{});case"drawing":return n.jsx(sn,{});case"eraser":return n.jsx(wa,{});case"shape_rectangle":case"shape_circle":case"shape_triangle":case"shape_line":case"shape_arrow":return n.jsx(ia,{});default:return n.jsxs(ka,{children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎯"}),n.jsx("p",{children:"Виберіть інструмент або об'єкт"}),n.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px",fontStyle:"italic"},children:"Налаштування з'являться тут"})]})}};return n.jsxs(Ma,{$isOpen:e,children:[n.jsxs(va,{children:[n.jsx($a,{children:l?"Властивості":"Інструменти"}),n.jsx(La,{title:"Закрити панель інструментів",onClick:t,children:n.jsx(ba,{})})]}),n.jsx(Sa,{children:x()})]})},Ta=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: ${({theme:e})=>e.mainBGColor};
`,Ba=y.div`
  background: ${({theme:e})=>e.ContainerBGColor};
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`,Ia=y.div`
  width: 100%;
`,Ga=({theme:e})=>{const{setTitle:t}=Sr(),[r,c]=m.useState(!1),[i,o]=m.useState({id:"football_standard",name:"Стандартне футбольне поле",width:105,height:68}),d=x=>{o(x)},l=()=>{c(!r)},p=()=>{c(!1)};return m.useEffect(()=>{t("Тактична дошка")},[t]),n.jsx(kr,{store:Er,children:n.jsx(Ta,{children:n.jsxs(Ba,{children:[n.jsx(ui,{currentField:i,onSelectField:d,isSidebarOpen:r,onToggleSidebar:l}),n.jsx(Ia,{children:n.jsx(io,{fieldSize:{width:i.width,height:i.height},fieldType:i.id})}),n.jsx(Ea,{isOpen:r,onClose:p,children:n.jsx("div",{children:"Тут будуть інструменти"})})]})})})};export{Ga as default};
