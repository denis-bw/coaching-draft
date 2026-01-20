import{r as m,d as y,b as pe,a as Be,_ as Zn,$ as An,a0 as yt,a1 as ke,a2 as Ne,a3 as Hn,a4 as Wn,a5 as je,a6 as un,j as n,a7 as Yt,a8 as _n,a9 as Oe,W as Dt,S as jn,aa as Vn,ab as On,ac as Nn,ad as qn,ae as Un,af as Jn,ag as Kn,ah as Qn,ai as Xt,aj as er,ak as tr,al as nr,am as rr,an as or,ao as ir,ap as ar,aq as sr,ar as lr,as as cr,at as dr,au as hr,av as pr,aw as ur,ax as gr,ay as xr,az as fr,aA as mr,aB as yr,aC as Cr,aD as wr,aE as br,u as vr,aF as Mr,aG as $r}from"./index-0332d14b.js";import{S as Lr}from"./ChevronDownicon-ec5f4812.js";import{S as Sr}from"./DeleteIcon-8eb60972.js";const Ve=(e,t,r,c,i)=>{const o=i*Math.PI/180,d=Math.cos(o),s=Math.sin(o),p=e-r,g=t-c;return{x:r+(p*d-g*s),y:c+(p*s+g*d)}},le=(e,t)=>{if(!e)return null;if(e.type==="player"){const r=e.radius||20,i=(e.rotation||0)*Math.PI/180;let o=e.x-r,d=e.x+r,s=e.y-r,p=e.y+r;if(e.topText){const g=e.textSize||Math.max(10,r*.5),x=g,h=e.topText.length*g*.6,l=-(r+x);[{x:-h/2,y:l-x*.2},{x:h/2,y:l-x*.2},{x:-h/2,y:l},{x:h/2,y:l}].forEach(u=>{const f=u.x*Math.cos(i)-u.y*Math.sin(i),w=u.x*Math.sin(i)+u.y*Math.cos(i);o=Math.min(o,e.x+f),d=Math.max(d,e.x+f),s=Math.min(s,e.y+w),p=Math.max(p,e.y+w)})}return{x:e.x-r,y:e.y-r,width:r*2,height:r*2,centerX:e.x,centerY:e.y}}if(e.type==="ball"){const r=e.radius||10;return{x:e.x-r,y:e.y-r,width:r*2,height:r*2,centerX:e.x,centerY:e.y}}if(e.type==="shape"){if(e.shape==="line"||e.shape==="arrow"){const s=(e.borderWidth||2)+10,p=(e.startX+e.endX)/2,g=(e.startY+e.endY)/2,x=e.rotation||0,h=Ve(e.startX,e.startY,p,g,x),l=Ve(e.endX,e.endY,p,g,x),a=Math.min(h.x,l.x)-s,u=Math.max(h.x,l.x)+s,f=Math.min(h.y,l.y)-s,w=Math.max(h.y,l.y)+s;return{x:a,y:f,width:u-a,height:w-f,rotatedEndpoints:{start:h,end:l},startX:e.startX,startY:e.startY,endX:e.endX,endY:e.endY,centerX:p,centerY:g,rotation:x}}const r=e.width||50,c=e.height||30,i=e.rotation||0;if(i!==0){const s=e.x+r/2,p=e.y+c/2,x=[{x:e.x,y:e.y},{x:e.x+r,y:e.y},{x:e.x+r,y:e.y+c},{x:e.x,y:e.y+c}].map(f=>Ve(f.x,f.y,s,p,i));let h=x[0].x,l=x[0].x,a=x[0].y,u=x[0].y;return x.forEach(f=>{h=Math.min(h,f.x),l=Math.max(l,f.x),a=Math.min(a,f.y),u=Math.max(u,f.y)}),{x:h,y:a,width:l-h,height:u-a,centerX:s,centerY:p,originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:c,rotation:i,rotatedCorners:x}}const o=r<0?e.x+r:e.x,d=c<0?e.y+c:e.y;return{x:o,y:d,width:Math.abs(r),height:Math.abs(c),originalX:e.x,originalY:e.y,originalWidth:r,originalHeight:c,rotation:i}}if(e.type==="figure"){const r=e.size||30;return{x:e.x-r/2,y:e.y-r/2,width:r,height:r,centerX:e.x,centerY:e.y}}if(e.type==="path"){if(!e.points||e.points.length===0)return null;let r=1/0,c=1/0,i=-1/0,o=-1/0;for(let p=0;p<e.points.length;p+=5){const g=e.points[p];g.x<r&&(r=g.x),g.x>i&&(i=g.x),g.y<c&&(c=g.y),g.y>o&&(o=g.y)}const d=e.points[e.points.length-1];d.x<r&&(r=d.x),d.x>i&&(i=d.x),d.y<c&&(c=d.y),d.y>o&&(o=d.y);const s=(e.brushSize||5)/2;return{x:r-s,y:c-s,width:i-r+s*2,height:o-c+s*2,points:e.points}}if(e.type==="text"){if(t){const i=t.getContext("2d"),o=e.fontWeight||"normal",d=e.fontStyle||"normal",s=e.fontSize||16,p=e.fontFamily||"Arial";i.font=`${d} ${o} ${s}px ${p}`;const g=(e.text||"").split(`
`),x=(e.lineHeight||1.5)*s,h=e.letterSpacing||0;let l=0;g.forEach($=>{let v=i.measureText($).width;h!==0&&(v+=h*($.length-1)),v>l&&(l=v)});const a=g.length>0?(g.length-1)*x+s:0,u=e.rotation||0,f=e.x+l/2,w=e.y+a/2;if(u!==0){const C=[{x:e.x,y:e.y},{x:e.x+l,y:e.y},{x:e.x+l,y:e.y+a},{x:e.x,y:e.y+a}].map(T=>Ve(T.x,T.y,f,w,u));let v=C[0].x,L=C[0].x,k=C[0].y,S=C[0].y;return C.forEach(T=>{v=Math.min(v,T.x),L=Math.max(L,T.x),k=Math.min(k,T.y),S=Math.max(S,T.y)}),{x:v,y:k,width:L-v,height:S-k,centerX:f,centerY:w,originalX:e.x,originalY:e.y,originalWidth:l,originalHeight:a,rotation:u,rotatedCorners:C}}return{x:e.x,y:e.y,width:l,height:a,centerX:f,centerY:w,originalX:e.x,originalY:e.y,originalWidth:l,originalHeight:a,rotation:0}}const r=e.width||100,c=e.height||20;return{x:e.x,y:e.y,width:r,height:c,centerX:e.x+r/2,centerY:e.y+c/2}}return null},gt=(e,t,r,c=0)=>{if(!r)return!1;if(r.rotatedCorners&&r.rotatedCorners.length>0){const i=r.rotatedCorners;let o=!1;for(let d=0,s=i.length-1;d<i.length;s=d++){const p=i[d].x,g=i[d].y,x=i[s].x,h=i[s].y;g>t!=h>t&&e<(x-p)*(t-g)/(h-g)+p&&(o=!o)}return o}return e>=r.x-c&&e<=r.x+r.width+c&&t>=r.y-c&&t<=r.y+r.height+c},Zt=(e,t,r,c=10,i)=>{const o=le(r,i);if(!o||!gt(e,t,o,c+5))return!1;if(r.type==="shape"&&(r.shape==="line"||r.shape==="arrow")){const d=r.borderWidth/2+c,s=(r.startX+r.endX)/2,p=(r.startY+r.endY)/2,g=r.rotation||0,x=Ve(e,t,s,p,-g),h=x.x,l=x.y,a=r.endX-r.startX,u=r.endY-r.startY,f=a*a+u*u;let w=0;f>0&&(w=((h-r.startX)*a+(l-r.startY)*u)/f),w=Math.max(0,Math.min(1,w));const $=r.startX+w*a,C=r.startY+w*u;return(h-$)**2+(l-C)**2<=d*d}if(r.type==="path"){const d=r.brushSize/2+c;for(let s=0;s<r.points.length-1;s++){const p=r.points[s],g=r.points[s+1],x=g.x-p.x,h=g.y-p.y,l=Math.sqrt(x*x+h*h);if(l===0)continue;const a=Math.max(0,Math.min(1,((e-p.x)*x+(t-p.y)*h)/(l*l))),u=p.x+a*x,f=p.y+a*h;if(Math.sqrt(Math.pow(e-u,2)+Math.pow(t-f,2))<=d)return!0}return!1}if(r.type==="shape"&&r.shape==="circle"){const d=o.centerX||o.x+o.width/2,s=o.centerY||o.y+o.height/2,p=(o.originalWidth?Math.abs(o.originalWidth):o.width)/2+c,g=(o.originalHeight?Math.abs(o.originalHeight):o.height)/2+c;if(o.rotation){const x=-(o.rotation*Math.PI)/180,h=e-d,l=t-s,a=h*Math.cos(x)-l*Math.sin(x),u=h*Math.sin(x)+l*Math.cos(x);return a*a/(p*p)+u*u/(g*g)<=1}return Math.pow(e-d,2)/Math.pow(p,2)+Math.pow(t-s,2)/Math.pow(g,2)<=1}return gt(e,t,o,c)},gn=(e,t)=>{const r=t&&t.rotation||0;if(t&&t.type==="shape"&&(t.shape==="line"||t.shape==="arrow"))return e.rotatedEndpoints?{start:{x:e.rotatedEndpoints.start.x,y:e.rotatedEndpoints.start.y,cursor:"crosshair"},end:{x:e.rotatedEndpoints.end.x,y:e.rotatedEndpoints.end.y,cursor:"crosshair"}}:{start:{x:e.startX,y:e.startY,cursor:"crosshair"},end:{x:e.endX,y:e.endY,cursor:"crosshair"}};if(t&&t.type==="path")return{};const c=(i,o)=>{const d=(i+o)%360,s=d<0?d+360:d,p=Math.round(s/45)%4;return["ns-resize","nesw-resize","ew-resize","nwse-resize"][p]};if(e.rotatedCorners&&e.rotatedCorners.length===4){const i=e.rotatedCorners;return{topLeft:{x:i[0].x,y:i[0].y,cursor:c(315,r)},topRight:{x:i[1].x,y:i[1].y,cursor:c(45,r)},bottomRight:{x:i[2].x,y:i[2].y,cursor:c(135,r)},bottomLeft:{x:i[3].x,y:i[3].y,cursor:c(225,r)},top:{x:(i[0].x+i[1].x)/2,y:(i[0].y+i[1].y)/2,cursor:c(0,r)},bottom:{x:(i[2].x+i[3].x)/2,y:(i[2].y+i[3].y)/2,cursor:c(180,r)},left:{x:(i[0].x+i[3].x)/2,y:(i[0].y+i[3].y)/2,cursor:c(270,r)},right:{x:(i[1].x+i[2].x)/2,y:(i[1].y+i[2].y)/2,cursor:c(90,r)}}}return{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"},top:{x:e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.y+e.height/2,cursor:"ew-resize"}}},At=(e,t,r,c)=>{const i=gn(r,c),o=8;for(const[d,s]of Object.entries(i))if(c&&c.type==="shape"&&(c.shape==="line"||c.shape==="arrow")){if(Math.sqrt(Math.pow(e-s.x,2)+Math.pow(t-s.y,2))<=o*1.5)return{name:d,...s}}else if(Math.abs(e-s.x)<=o&&Math.abs(t-s.y)<=o)return{name:d,...s};return null},xn=(e,t,r,c,i,o)=>{const d=[];for(let s=r.length-1;s>=0;s--)Zt(e,t,r[s],i,o)&&d.push(r[s]);for(let s=c.length-1;s>=0;s--){const p={...c[s],type:"path",id:`path_${s}`};Zt(e,t,p,i,o)&&d.push(p)}return d},fn=(e,t,r,c,i,o)=>{const d=xn(e,t,r,c,i,o);return d.length>0?d[0]:null},mn=(e,t=1)=>{if(!e)return"rgba(0, 0, 0, 1)";let r=e.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const c=parseInt(r.slice(0,2),16),i=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${c}, ${i}, ${o}, ${t})`},Ee=e=>{let t=e.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}},ne=e=>{const t=Math.sin(e)*1e4;return t-Math.floor(t)},Lt=(e,t,r,c,i,o)=>{const d=Math.max(1,Math.floor(c*1.5));for(let s=0;s<d;s++){const p=ne(t*r*s)*Math.PI*2,g=Math.sqrt(ne(t+r+s))*c,x=Math.cos(p)*g,h=Math.sin(p)*g,l=o*(.2+ne(s)*.7);e.fillStyle=`rgba(${i.r}, ${i.g}, ${i.b}, ${l})`;const a=.5+ne(s*2);e.beginPath(),e.arc(t+x,r+h,a,0,Math.PI*2),e.fill()}},kr=(e,t,r,c,i,o)=>{e.lineCap="round",e.lineJoin="round";const d=Ee(c),s=Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2)),p=Math.max(1,o*.2),g=Math.ceil(s/p);for(let x=0;x<g;x++){const h=x/g,l=t.x+(r.x-t.x)*h,a=t.y+(r.y-t.y)*h,u=(ne(l*a)-.5)*.5;Lt(e,l+u,a+u,o/2,d,i)}},St=(e,t,r,c,i,o)=>{const d=Ee(c);e.lineCap="butt",e.lineJoin="round";const s=Math.max(12,o*1.5),p=o*.8;for(let g=0;g<s;g++){const x=(g/s-.5)*p,h=i*(.8+ne(g)*.2);e.strokeStyle=`rgba(${d.r}, ${d.g}, ${d.b}, ${h})`,e.lineWidth=o/s*2,e.beginPath();const l=ne(t.x*g)-.5,a=ne(r.x*g)-.5;e.moveTo(t.x+x+l,t.y+x+l),e.lineTo(r.x+x+a,r.y+x+a),e.stroke()}},yn=(e,t,r,c,i,o)=>{const d=Ee(c);e.lineCap="butt";const s=Math.max(6,o),p=Math.PI/4,g=Math.cos(p)*o,x=Math.sin(p)*o;for(let h=0;h<s;h++){const l=h/(s-1),a=g*(l-.5),u=x*(l-.5);e.strokeStyle=`rgba(${d.r}, ${d.g}, ${d.b}, ${i})`,e.lineWidth=1.5,e.beginPath(),e.moveTo(t.x+a,t.y+u),e.lineTo(r.x+a,r.y+u),e.stroke()}},Cn=(e,t,r,c,i,o)=>{e.lineCap="round",e.lineJoin="round";const d=Ee(c);[{widthMult:1.5,alphaMult:.15},{widthMult:1.2,alphaMult:.25},{widthMult:1,alphaMult:.35},{widthMult:.7,alphaMult:.45}].forEach((p,g)=>{const x=Math.max(3,Math.floor(o*.2));for(let h=0;h<x;h++){const l=h/x*Math.PI*2,a=o*p.widthMult*.15*(h/x),u=Math.cos(l)*a,f=Math.sin(l)*a,w=i*p.alphaMult*(.8+ne(h+g)*.2);e.strokeStyle=`rgba(${d.r}, ${d.g}, ${d.b}, ${w})`,e.lineWidth=o*p.widthMult,e.beginPath();const $=(ne(t.x*h)-.5)*.5,C=(ne(r.x*h)-.5)*.5;e.moveTo(t.x+u+$,t.y+f+$),e.lineTo(r.x+u+C,r.y+f+C),e.stroke()}})},wn=(e,t,r,c,i,o)=>{const d=Ee(c);e.fillStyle=`rgba(${d.r}, ${d.g}, ${d.b}, ${i})`;const s=Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2)),p=Math.max(5,o/1.2);for(let g=0;g<s;g+=p){const x=g/s,h=t.x+(r.x-t.x)*x,l=t.y+(r.y-t.y)*x,a=o*(.3+ne(h)*.6),u=(ne(l)-.5)*o*1.5,f=(ne(h)-.5)*o*1.5;e.beginPath(),e.arc(h+u,l+f,a,0,Math.PI*2),e.fill();const w=Math.floor(ne(h*l)*4);for(let $=0;$<w;$++){const C=ne(h+$)*Math.PI*2,v=o*(.5+ne(l+$)),L=o*(.05+ne($)*.1),k=h+u+Math.cos(C)*v,S=l+f+Math.sin(C)*v;e.beginPath(),e.arc(k,S,L,0,Math.PI*2),e.fill()}}},Er=(e,t,r,c,i,o)=>{e.lineCap="round",e.lineJoin="round",e.lineWidth=o,e.strokeStyle=mn(c,i),e.setLineDash([]),e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(r.x,r.y),e.stroke()},Br=(e,t,r,c)=>{const{color:i,opacity:o,brushSize:d,brushStyle:s}=c,p=o!==void 0?o/100:1;switch(e.save(),s){case"pencil":kr(e,t,r,i,p,d);break;case"calligraphy":yn(e,t,r,i,p,d);break;case"oil":St(e,t,r,i,p,d);break;case"watercolor":Cn(e,t,r,i,p,d);break;case"splatter":wn(e,t,r,i,p,d);break;case"hard":default:Er(e,t,r,i,p,d);break}e.restore()},Tr=(e,t,r,c,i,o)=>{if(e.lineCap="round",e.lineJoin="round",o==="solid"){const d=Ee(r),s=Math.max(1,i*.2);for(let p=0;p<t.points.length-1;p++){const g=t.points[p],x=t.points[p+1],h=(x.x-g.x)**2+(x.y-g.y)**2;if(h<2&&p<t.points.length-2)continue;const l=Math.sqrt(h),a=Math.ceil(l/s);for(let u=0;u<a;u++){const f=u/a,w=g.x+(x.x-g.x)*f,$=g.y+(x.y-g.y)*f,C=(ne(w*$)-.5)*.5;Lt(e,w+C,$+C,i/2,d,c)}}}else{const d=Ee(r),s=o==="dotted",p=s?i*.1:i*3,g=s?i*1.1:i*2,x=p+g;let h=0;for(let l=0;l<t.points.length-1;l++){const a=t.points[l],u=t.points[l+1],f=Math.sqrt(Math.pow(u.x-a.x,2)+Math.pow(u.y-a.y,2));let w=0;const $=Math.max(1,i*.1);for(;w<f;){const v=(h+w)%x;if(v<p||s&&v<i){const L=w/f,k=a.x+(u.x-a.x)*L,S=a.y+(u.y-a.y)*L;Lt(e,k,S,i/2,d,c)}w+=$}h+=f}}},Ir=(e,t,r,c,i)=>{if(t.points.length>1){const o=Math.max(2,i*.15);let d=0;for(let g=0;g<t.points.length-1;g++){const x=t.points[g],h=t.points[g+1],l=h.x-x.x,a=h.y-x.y,u=Math.sqrt(l*l+a*a);if(d+u<o&&g<t.points.length-2){d+=u;continue}St(e,x,h,r,c,i),d=0}const s=t.points[t.points.length-2],p=t.points[t.points.length-1];St(e,s,p,r,c,i)}},zr=(e,t,r,c,i)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const d=t.points[o],s=t.points[o+1];(s.x-d.x)**2+(s.y-d.y)**2<2&&o<t.points.length-2||yn(e,d,s,r,c,i)}},Rr=(e,t,r,c,i)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const d=t.points[o],s=t.points[o+1];(s.x-d.x)**2+(s.y-d.y)**2<2.25&&o<t.points.length-2||Cn(e,d,s,r,c,i)}},Pr=(e,t,r,c,i)=>{if(t.points.length>1)for(let o=0;o<t.points.length-1;o++){const d=t.points[o],s=t.points[o+1];(s.x-d.x)**2+(s.y-d.y)**2<1&&o<t.points.length-2||wn(e,d,s,r,c,i)}},Gr=(e,t,r,c,i,o)=>{if(e.lineCap="round",e.lineJoin="round",e.lineWidth=i,e.strokeStyle=mn(r,c),o==="solid"){if(e.setLineDash([]),e.beginPath(),t.points.length>0){e.moveTo(t.points[0].x,t.points[0].y);for(let g=1;g<t.points.length;g++){const x=t.points[g],h=t.points[g-1];Math.abs(x.x-h.x)<.5&&Math.abs(x.y-h.y)<.5&&g<t.points.length-1||e.lineTo(x.x,x.y)}}e.stroke();return}const d=o==="dotted",s=d?.1:i*3,p=i*2;if(e.setLineDash([s,p]),e.lineCap=d?"round":"butt",e.beginPath(),t.points.length>0){e.moveTo(t.points[0].x,t.points[0].y);for(let g=1;g<t.points.length;g++)e.lineTo(t.points[g].x,t.points[g].y)}e.stroke(),e.setLineDash([])},kt=(e,t,r=!1)=>{if(t.points.length<2)return;e.save();const c=t.opacity!==void 0?t.opacity/100:1,i=r?"#FFD700":t.color,o=t.brushStyle||"hard",d=t.lineType||"solid",s=t.brushSize;if(r){e.strokeStyle="rgba(255, 215, 0, 0.5)",e.lineWidth=s+6,e.lineCap="round",e.lineJoin="round",e.setLineDash([]),e.beginPath(),e.moveTo(t.points[0].x,t.points[0].y);for(let p=1;p<t.points.length;p++)e.lineTo(t.points[p].x,t.points[p].y);e.stroke()}switch(o){case"pencil":Tr(e,t,i,c,s,d);break;case"calligraphy":zr(e,t,i,c,s);break;case"oil":Ir(e,t,i,c,s);break;case"watercolor":Rr(e,t,i,c,s);break;case"splatter":Pr(e,t,i,c,s);break;case"hard":default:Gr(e,t,i,c,s,d);break}e.restore()},Fr=(e,t,r,c,i,o,d,s,p)=>{e.save(),e.strokeStyle=s,e.lineWidth=p,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t,r),e.lineTo(c,i),e.lineTo(o,d),e.stroke(),e.restore()},Yr=(e,t,r,c,i,o,d,s,p=0,g=0)=>{const x=c-t,h=i-r,l=Math.sqrt(x*x+h*h);if(l===0)return;const a=x/l,u=h/l,f=p,w=g,$=l-f-w;if($<=0)return;const C=t+a*f,v=r+u*f;if(e.strokeStyle=s,e.lineWidth=d,e.lineCap="butt",o==="dashed"){const L=Math.max(d*3,12),k=Math.max(d*2,8),S=L+k,T=Math.max(2,Math.floor($/S));if(T===2&&$<S*2){const D=$*.35,q=$*.3;e.setLineDash([D,q]),e.lineDashOffset=0,e.beginPath(),e.moveTo(C,v),e.lineTo(c-a*w,i-u*w),e.stroke(),e.setLineDash([]);return}const z=($-T*L)/T,M=L+z,b=T*M-z,R=($-b)/2;e.setLineDash([L,z]),e.lineDashOffset=-R,e.beginPath(),e.moveTo(C,v),e.lineTo(c-a*w,i-u*w),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}else if(o==="dotted"){const L=Math.max(d*2.5,10),k=d/2,S=Math.max(2,Math.floor($/L)+1),T=$/(S-1);e.fillStyle=s;for(let F=0;F<S;F++){const z=F*T,M=C+a*z,b=v+u*z;e.beginPath(),e.arc(M,b,k,0,Math.PI*2),e.fill()}}else e.beginPath(),e.moveTo(C,v),e.lineTo(c-a*w,i-u*w),e.stroke()},Ht=(e,t,r,c,i)=>{if(t.length<2)return;if(r==="solid"){e.strokeStyle=i,e.lineWidth=c,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let l=1;l<t.length;l++)e.lineTo(t[l].x,t[l].y);e.closePath(),e.stroke();return}let o=0;const d=[],s=t.length;for(let l=0;l<s;l++){const a=t[l],u=t[(l+1)%s],f=u.x-a.x,w=u.y-a.y,$=Math.sqrt(f*f+w*w);d.push($),o+=$}if(o<20){e.strokeStyle=i,e.lineWidth=c,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let l=1;l<t.length;l++)e.lineTo(t[l].x,t[l].y);e.closePath(),e.stroke();return}const p=Math.max(c*2.5,Math.min(c*4,o/25)),g=Math.max(c*1.5,p*.5),x=p+g,h=p*.7;if(r==="dotted"){const l=c/2,a=Math.max(c*2,o/60);e.fillStyle=i;for(let u=0;u<s;u++){const f=t[u];e.beginPath(),e.arc(f.x,f.y,l,0,Math.PI*2),e.fill()}for(let u=0;u<s;u++){const f=t[u],w=d[u];if(w<=0)continue;const $=t[(u+1)%s].x-f.x,C=t[(u+1)%s].y-f.y,v=$/w,L=C/w,k=1,S=Math.floor(w/a)+1,T=Math.max(k,S-1),F=w/T;for(let z=1;z<T;z++){const M=z*F,b=f.x+v*M,P=f.y+L*M;e.beginPath(),e.arc(b,P,l,0,Math.PI*2),e.fill()}}}else if(r==="dashed"){e.strokeStyle=i,e.lineWidth=c,e.lineCap="butt";for(let l=0;l<s;l++){const a=t[l],u=t[l===0?s-1:l-1],f=t[(l+1)%s],w=d[l===0?s-1:l-1],$=d[l];if(w>0&&$>0){const C=u.x-a.x,v=u.y-a.y,L=f.x-a.x,k=f.y-a.y,S=Math.min(w,$)/3,T=Math.min(h,S),F=a.x+C/w*T,z=a.y+v/w*T,M=a.x+L/$*T,b=a.y+k/$*T;Fr(e,F,z,a.x,a.y,M,b,i,c)}}for(let l=0;l<s;l++){const a=t[l],u=t[(l+1)%s],f=d[l];if(f===0)continue;const w=u.x-a.x,$=u.y-a.y,C=w/f,v=$/f,L=d[l===0?s-1:l-1],k=f,S=d[(l+1)%s],T=Math.min(L,k)/3,F=Math.min(h,T),z=Math.min(k,S)/3,M=Math.min(h,z),b=f-F-M;if(b<=p/2)continue;const P=a.x+C*F,R=a.y+v*F,D=Math.floor(b/x);if(D===0){const Y=b/2-p/2;if(Y>=0){const H=P+C*Y,j=R+v*Y,J=P+C*(Y+p),oe=R+v*(Y+p);e.beginPath(),e.moveTo(H,j),e.lineTo(J,oe),e.stroke()}continue}const U=(b-D*p)/D,V=p+U,W=D*V-U,I=(b-W)/2;e.setLineDash([p,U]),e.lineDashOffset=-I,e.beginPath(),e.moveTo(P,R),e.lineTo(u.x-C*M,u.y-v*M),e.stroke(),e.setLineDash([]),e.lineDashOffset=0}}},Wt=(e,t,r,c,i,o,d,s,p)=>{if(i==="butt")return 0;const g=d.replace("#",""),x=parseInt(g.slice(0,2),16),h=parseInt(g.slice(2,4),16),l=parseInt(g.slice(4,6),16);e.fillStyle=`rgba(${x}, ${h}, ${l}, ${s})`,e.strokeStyle=`rgba(${x}, ${h}, ${l}, ${s})`,e.save(),e.translate(t,r),e.rotate(c);let a=0;if(i==="round"){const u=Math.max(p*.75,4);e.beginPath(),e.arc(0,0,u,0,Math.PI*2),e.fill(),a=0}else i==="arrow"?(e.beginPath(),e.moveTo(0,0),e.lineTo(-o,-o*.5),e.lineTo(-o,o*.5),e.closePath(),e.fill(),a=o):i==="circle"?(e.beginPath(),e.arc(0,0,o*.4,0,Math.PI*2),e.fill(),a=o*.2):i==="bar"&&(e.lineWidth=p,e.lineCap="butt",e.beginPath(),e.moveTo(0,-o*.6),e.lineTo(0,o*.6),e.stroke(),a=0);return e.restore(),a},bn=(e,t,r=!1)=>{e.save();const c=t.fontWeight||"normal",i=t.fontStyle||"normal",o=t.fontSize||16,d=t.fontFamily||"Arial";e.font=`${i} ${c} ${o}px ${d}`,e.textAlign="left",e.textBaseline="top";const s=(t.text||"").split(`
`),p=(t.lineHeight||1.5)*o,g=t.letterSpacing||0;let x=0;s.forEach(v=>{let L=0;g!==0?L=e.measureText(v).width+g*(v.length-1):L=e.measureText(v).width,L>x&&(x=L)});const h=s.length>0?(s.length-1)*p+o:0,l=2;if(t.rotation){const v=t.x+x/2,L=t.y+h/2;e.translate(v,L),e.rotate(t.rotation*Math.PI/180),e.translate(-v,-L)}const a=t.opacity!==void 0?t.opacity/100:1,f=(t.color||"#000000").replace("#",""),w=parseInt(f.slice(0,2),16),$=parseInt(f.slice(2,4),16),C=parseInt(f.slice(4,6),16);return e.fillStyle=`rgba(${w}, ${$}, ${C}, ${a})`,s.forEach((v,L)=>{const k=t.y+L*p;if(g!==0){let S=t.x;for(let T=0;T<v.length;T++){const F=v[T];e.fillText(F,S,k);const z=e.measureText(F).width;S+=z+g}}else e.fillText(v,t.x,k);if(t.textDecoration==="underline"){const S=g!==0?e.measureText(v).width+g*(v.length-1):e.measureText(v).width;e.beginPath(),e.moveTo(t.x,k+o),e.lineTo(t.x+S,k+o),e.strokeStyle=e.fillStyle,e.lineWidth=Math.max(1,o/16),e.stroke()}}),r&&(e.fillStyle="rgba(255, 215, 0, 0.2)",e.fillRect(t.x-l,t.y-l,x+l*2,h+l*2)),e.restore(),t},vn=(e,t,r)=>{e.save();const c=t.x,i=t.y,o=t.radius||20,d=t.rotation||0;e.translate(c,i),e.rotate(d*Math.PI/180);const s=t.borderWidth||2,p=(t.borderOpacity!==void 0?t.borderOpacity:100)/100,g=r?"#FFD700":t.borderColor||"#000000",x=t.borderStyle||"solid",h=g.replace("#",""),l=parseInt(h.slice(0,2),16),a=parseInt(h.slice(2,4),16),u=parseInt(h.slice(4,6),16),f=(t.colorOpacity!==void 0?t.colorOpacity:100)/100,$=(t.color||"#ff0000").replace("#",""),C=parseInt($.slice(0,2),16),v=parseInt($.slice(2,4),16),L=parseInt($.slice(4,6),16);if(e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.fillStyle=`rgba(${C}, ${v}, ${L}, ${f})`,e.fill(),e.strokeStyle=`rgba(${l}, ${a}, ${u}, ${p})`,e.lineWidth=s,x==="dashed"){const R=2*Math.PI*o,D=Math.max(s*2.5,Math.min(s*4,R/25)),q=Math.max(s*1.5,D*.5),U=D+q,V=Math.floor(R/U);if(V<3||R<30)e.setLineDash([]),e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();else{const I=(R-V*D)/V,Y=(D+I)/o,H=D/o,j=D+I,J=V*j-I,re=(R-J)/2/o;e.lineCap="butt";for(let O=0;O<V;O++){const ee=re+O*Y,N=ee+H;e.beginPath(),e.arc(0,0,o,ee,N),e.stroke()}}}else if(x==="dotted"){const R=2*Math.PI*o,D=s/2,q=Math.max(s*2,R/60),U=Math.max(8,Math.round(R/q)),V=2*Math.PI/U;e.fillStyle=`rgba(${l}, ${a}, ${u}, ${p})`;for(let W=0;W<U;W++){const _=W*V,I=o*Math.cos(_),Y=o*Math.sin(_);e.beginPath(),e.arc(I,Y,D,0,Math.PI*2),e.fill()}}else e.setLineDash([]),e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();e.setLineDash([]);const k=t.number!==void 0?t.number:1,S=(t.numberOpacity!==void 0?t.numberOpacity:100)/100,F=(t.numberColor||"#ffffff").replace("#",""),z=parseInt(F.slice(0,2),16),M=parseInt(F.slice(2,4),16),b=parseInt(F.slice(4,6),16),P=Math.max(12,o*.8);if(e.fillStyle=`rgba(${z}, ${M}, ${b}, ${S})`,e.font=`bold ${P}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(k.toString(),0,0),t.topText){const R=(t.textOpacity!==void 0?t.textOpacity:100)/100,q=(t.textColor||"#000000").replace("#",""),U=parseInt(q.slice(0,2),16),V=parseInt(q.slice(2,4),16),W=parseInt(q.slice(4,6),16),_=t.textSize||Math.max(10,o*.5),Y=-(o+5);e.fillStyle=`rgba(${U}, ${V}, ${W}, ${R})`,e.font=`${_}px Arial`,e.textAlign="center",e.textBaseline="bottom",e.fillText(t.topText,0,Y)}if(t.cards&&t.cards.length>0){const R=o*.35,D=R*1.4,q=4,U=Math.PI/4,V=Math.cos(U)*o*.7,W=Math.sin(U)*o*.7;t.cards.forEach((_,I)=>{const Y=_.color||(_==="yellow"?"#FFD700":"#FF0000"),H=_.cardBorderColor||"#000000",j=V-I*(R+q);e.fillStyle=Y,e.fillRect(j-R,W,R,D),e.strokeStyle=H,e.lineWidth=1.5,e.setLineDash([]),e.strokeRect(j-R,W,R,D)})}e.restore()},Mn=(e,t,r=!1)=>{const c=t.radius||10,i=r?"#FFD700":"black",o=r?3:2;e.fillStyle="white",e.strokeStyle=i,e.lineWidth=o,e.beginPath(),e.arc(t.x,t.y,c,0,Math.PI*2),e.fill(),e.stroke(),e.beginPath(),e.arc(t.x-c/3,t.y-c/3,c/3,0,Math.PI*2),e.fillStyle="black",e.fill()},ut=(e,t,r=!1,c="#000")=>{if(e.save(),t.rotation)if(t.shape==="line"||t.shape==="arrow"){const a=(t.startX+t.endX)/2,u=(t.startY+t.endY)/2;e.translate(a,u),e.rotate(t.rotation*Math.PI/180),e.translate(-a,-u)}else{const a=t.x+(t.width||50)/2,u=t.y+(t.height||30)/2;e.translate(a,u),e.rotate(t.rotation*Math.PI/180),e.translate(-a,-u)}const i=r?"#FFD700":t.borderColor||t.color||c,o=t.borderOpacity!==void 0?t.borderOpacity/100:1,d=t.borderWidth||2,s=t.borderStyle||"solid",p=i.replace("#",""),g=parseInt(p.slice(0,2),16),x=parseInt(p.slice(2,4),16),h=parseInt(p.slice(4,6),16),l=`rgba(${g}, ${x}, ${h}, ${o})`;if(e.strokeStyle=l,e.lineWidth=d,e.lineCap="butt",e.lineJoin="miter",e.setLineDash([]),t.shape==="line"||t.shape==="arrow"){const a=t.endX-t.startX,u=t.endY-t.startY,f=Math.atan2(u,a),w=t.lineCapStart||"butt",$=t.lineCapEnd||(t.shape==="arrow"?"arrow":"butt"),C=Math.max(d*2.5,10);let v=0;w==="arrow"?v=C:w==="circle"?v=C*.2:(w==="round"||w==="bar")&&(v=0);let L=0;if($==="arrow"?L=C:$==="circle"?L=C*.2:($==="round"||$==="bar")&&(L=0),s==="dashed"||s==="dotted")Yr(e,t.startX,t.startY,t.endX,t.endY,s,d,l,v,L);else{const k=t.startX+Math.cos(f)*v,S=t.startY+Math.sin(f)*v,T=t.endX-Math.cos(f)*L,F=t.endY-Math.sin(f)*L;e.lineCap="butt",e.beginPath(),e.moveTo(k,S),e.lineTo(T,F),e.stroke()}w!=="butt"&&Wt(e,t.startX,t.startY,f+Math.PI,w,C,i,o,d),$!=="butt"&&Wt(e,t.endX,t.endY,f,$,C,i,o,d)}else{const a=t.x,u=t.y,f=t.width!==void 0?t.width:50,w=t.height!==void 0?t.height:30,$=t.ignoreMinSize?0:10,C=Math.abs(f)<$?f<0?-$:$:f,v=Math.abs(w)<$?w<0?-$:$:w,L=t.fillColor||"#ffffff",k=t.fillOpacity!==void 0?t.fillOpacity/100:0;if(k>0){const S=L.replace("#",""),T=parseInt(S.slice(0,2),16),F=parseInt(S.slice(2,4),16),z=parseInt(S.slice(4,6),16);if(e.fillStyle=`rgba(${T}, ${F}, ${z}, ${k})`,e.beginPath(),t.shape==="rectangle")e.rect(a,u,C,v);else if(t.shape==="circle"){const M=a+C/2,b=u+v/2,P=Math.abs(C)/2,R=Math.abs(v)/2;e.ellipse(M,b,P,R,0,0,2*Math.PI)}else t.shape==="triangle"&&(e.moveTo(a+C/2,u),e.lineTo(a,u+v),e.lineTo(a+C,u+v),e.closePath());e.fill()}if(s==="dashed"||s==="dotted"){if(t.shape==="rectangle"){const S=[{x:a,y:u},{x:a+C,y:u},{x:a+C,y:u+v},{x:a,y:u+v}];Ht(e,S,s,d,l)}else if(t.shape==="triangle"){const S=[{x:a+C/2,y:u},{x:a,y:u+v},{x:a+C,y:u+v}];Ht(e,S,s,d,l)}else if(t.shape==="circle"){const S=a+C/2,T=u+v/2,F=Math.abs(C)/2,z=Math.abs(v)/2,M=Math.pow(F-z,2)/Math.pow(F+z,2),b=Math.PI*(F+z)*(1+3*M/(10+Math.sqrt(4-3*M)));if(e.beginPath(),s==="dashed"){const P=Math.max(d*2.5,Math.min(d*4,b/25)),R=Math.max(d*1.5,P*.5),D=P+R,q=Math.max(2,Math.round(b/D)),V=b/q-P;e.setLineDash([P,V]),e.lineCap="butt"}else if(s==="dotted"){const P=Math.max(d*2,b/60),R=Math.round(b/P),D=b/R;e.setLineDash([0,D]),e.lineCap="round"}e.ellipse(S,T,F,z,0,0,2*Math.PI),e.stroke(),e.setLineDash([]),e.lineCap="butt"}}else{if(e.beginPath(),t.shape==="rectangle")e.rect(a,u,C,v);else if(t.shape==="circle"){const S=a+C/2,T=u+v/2,F=Math.abs(C)/2,z=Math.abs(v)/2;e.ellipse(S,T,F,z,0,0,2*Math.PI)}else t.shape==="triangle"&&(e.moveTo(a+C/2,u),e.lineTo(a,u+v),e.lineTo(a+C,u+v),e.closePath());e.stroke()}}e.restore()},$n=(e,t,r=!1)=>{const c=t.size||30;e.font=`${c}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(t.icon,t.x,t.y),r&&(e.strokeStyle="#FFD700",e.lineWidth=3,e.strokeRect(t.x-c/2,t.y-c/2,c,c))},Dr=(e,t)=>{if(e.save(),e.strokeStyle="#FFD700",e.lineWidth=2,e.setLineDash([5,5]),t.rotatedCorners&&t.rotatedCorners.length===4){e.beginPath(),e.moveTo(t.rotatedCorners[0].x,t.rotatedCorners[0].y);for(let r=1;r<t.rotatedCorners.length;r++)e.lineTo(t.rotatedCorners[r].x,t.rotatedCorners[r].y);e.closePath(),e.stroke()}else e.strokeRect(t.x,t.y,t.width,t.height);e.setLineDash([]),e.restore()},Xr=(e,t,r)=>{const c=gn(t,r),i=8;e.fillStyle="white",e.strokeStyle="#FFD700",e.lineWidth=2,Object.entries(c).forEach(([o,d])=>{e.save(),e.fillRect(d.x-i/2,d.y-i/2,i,i),e.strokeRect(d.x-i/2,d.y-i/2,i,i),e.restore()})},Ln=(e,t)=>{if(!e||!t)return null;const r=le(e,t);if(!r)return null;const c=(e.brushSize||e.borderWidth||10)*2+20,i=2e3;let o=r.width+c*2,d=r.height+c*2;if(o>i||d>i)return null;const s=document.createElement("canvas");s.width=o,s.height=d;const p=s.getContext("2d"),g=r.x-c,x=r.y-c;if(p.translate(-g,-x),e.type==="path")kt(p,e,!1);else if(e.type==="player")vn(p,e,!1);else if(e.type==="ball")Mn(p,e,!1);else if(e.type==="shape"){const h=e.borderColor||e.color||"#000000";ut(p,e,!1,h)}else e.type==="figure"?$n(p,e,!1):e.type==="text"&&bn(p,e,!1);return{canvas:s,offsetX:g,offsetY:x,originalWidth:o,originalHeight:d}},Zr=(e,t)=>{const r=m.useRef(null),c=m.useRef(null),i=m.useRef(new Map),o=m.useCallback((l,a=!1)=>{if(!l)return;l.getContext("2d").clearRect(0,0,l.width,l.height)},[]),d=m.useCallback(()=>{const l=t.current;if(!l)return;l.getContext("2d").clearRect(0,0,l.width,l.height)},[t]),s=(l,a,u,f)=>{if(l.save(),a.type==="path")kt(l,a,f);else switch(a.type){case"player":vn(l,a,f);break;case"ball":Mn(l,a,f);break;case"shape":ut(l,a,f,a.borderColor||u);break;case"figure":$n(l,a,f);break;case"text":bn(l,a,f);break}l.restore()},p=m.useCallback((l,a,u,f,w)=>{if(f){s(l,a,u,!0);return}const $=JSON.stringify(a),C=i.current.get(a.id);if(C&&C.hash===$&&C.cache){const{cache:L}=C,k=le(a,w);if(k){const S=(a.brushSize||a.borderWidth||10)*2+20;l.drawImage(L.canvas,k.x-S,k.y-S)}else s(l,a,u,!1);return}const v=Ln(a,w);if(v){i.current.set(a.id,{hash:$,cache:v});const L=le(a,w);if(L){const k=(a.brushSize||a.borderWidth||10)*2+20;l.drawImage(v.canvas,L.x-k,L.y-k)}}else s(l,a,u,!1)},[]),g=m.useCallback((l,a,u,f,w,$=null,C=new Set)=>{const v=e.current;if(!v)return;o(v,!0);const L=v.getContext("2d");l.forEach((k,S)=>{const T=`path_${S}`;if(T===$||C.has(T)||k.points.length<2)return;const F={...k,type:"path",id:T};p(L,F,f,!1,v)}),a.forEach(k=>{k.id===$||C.has(k.id)||p(L,k,f,!1,v)})},[e,o,p]),x=m.useCallback((l,a,u=!0)=>{const f=t.current;if(!f||!l)return;const w=f.getContext("2d");if(w.clearRect(0,0,f.width,f.height),w.save(),l._cache){const{canvas:$}=l._cache,C=le(l,f),v=(l.brushSize||l.borderWidth||10)*2+20;w.drawImage($,C.x-v,C.y-v)}else s(w,l,a,u);if(u){const $=le(l,f);$&&(Dr(w,$),l._cache||Xr(w,$,l))}w.restore()},[t]),h=m.useCallback((l,a,u=!1)=>{const f=t.current;if(!f)return;const w=f.getContext("2d");if(u||w.clearRect(0,0,f.width,f.height),l&&l.points&&l.points.length>=2)if(u){const $=l.points.length,C=l.points[$-2],v=l.points[$-1];Br(w,C,v,{color:l.color,opacity:l.opacity,brushSize:l.brushSize,brushStyle:l.brushStyle})}else kt(w,l,!1);if(a){const{type:$,start:C,end:v,borderColor:L,borderOpacity:k,borderStyle:S,borderWidth:T,fillColor:F,fillOpacity:z,lineCapStart:M,lineCapEnd:b}=a;if($==="line"||$==="arrow"){const P={type:"shape",shape:$,startX:C.x,startY:C.y,endX:v.x,endY:v.y,borderColor:L,borderOpacity:k,borderWidth:T,borderStyle:S,lineCapStart:M,lineCapEnd:b,rotation:0};ut(w,P,!1,L)}else{const P=v.x-C.x,R=v.y-C.y,D={type:"shape",shape:$,x:C.x,y:C.y,width:P,height:R,borderColor:L,borderOpacity:k,borderWidth:T,borderStyle:S,fillColor:F,fillOpacity:z,rotation:0,ignoreMinSize:!0};ut(w,D,!1,L)}}},[t]);return{redrawStatic:g,drawLiveLayer:h,drawSingleObjectOnActive:x,clearActiveLayer:d,tempObjectDataRef:r,tempPathDataRef:c}},Ar=()=>{const e=m.useRef(null),t=m.useRef({x:0,y:0}),r=m.useRef(null),[c,i]=m.useState("default");return{draggedObjectRef:e,dragOffsetRef:t,cursorStyle:c,setCursorStyle:i,startDrag:(h,l,a)=>{const u=le(h,a);let f;h.type==="path"?f={...h,points:h.points.map($=>({...$}))}:f={...h};const w=Ln(h,a);if(e.current={...f,_cache:w},r.current={mouseStart:{...l},objectStart:h.type==="path"?{...h,points:h.points.map($=>({...$}))}:{...h},cachedBounds:u||{x:0,y:0,width:0,height:0}},h.type==="path")t.current={x:l.x-u.points[0].x,y:l.y-u.points[0].y};else if(h.type==="shape"&&(h.shape==="line"||h.shape==="arrow")){const $=(h.startX+h.endX)/2,C=(h.startY+h.endY)/2;t.current={x:l.x-$,y:l.y-C}}else h.x!==void 0&&h.y!==void 0?t.current={x:l.x-h.x,y:l.y-h.y}:t.current={x:l.x-(u?u.x:0),y:l.y-(u?u.y:0)}},updateDragPosition:(h,l,a)=>{if(!e.current||!r.current)return null;const{objectStart:u,cachedBounds:f}=r.current,w=h.x-r.current.mouseStart.x,$=h.y-r.current.mouseStart.y;let C=e.current;if(C.type==="path"){const T=u.points,F=C.points;for(let z=0;z<T.length;z++)F[z].x=T[z].x+w,F[z].y=T[z].y+$}else C.type==="shape"&&(C.shape==="line"||C.shape==="arrow")?(C.startX=u.startX+w,C.endX=u.endX+w,C.startY=u.startY+$,C.endY=u.endY+$):(C.x=u.x+w,C.y=u.y+$);const v=f.x+f.width/2+w,L=f.y+f.height/2+$;let k=0,S=0;if(v<0?k=0-v:v>l&&(k=l-v),L<0?S=0-L:L>a&&(S=a-L),k!==0||S!==0)if(C.type==="path")for(let T=0;T<C.points.length;T++)C.points[T].x+=k,C.points[T].y+=S;else C.type==="shape"&&(C.shape==="line"||C.shape==="arrow")?(C.startX+=k,C.endX+=k,C.startY+=S,C.endY+=S):(C.x+=k,C.y+=S);return C},endDrag:()=>{const h=e.current;return h&&h._cache&&delete h._cache,e.current=null,r.current=null,t.current={x:0,y:0},h},updateCursor:(h,l,a,u,f,w)=>{if(e.current)return;if(u){const C=u?u.startsWith("path_")?{...a[parseInt(u.replace("path_",""))],type:"path",id:u}:l.find(v=>v.id===u):null;if(C){const v=le(C,w);if(v){const L=At(h.x,h.y,v,C);if(L){i(L.cursor);return}if(gt(h.x,h.y,v)){i("move");return}}}}const $=fn(h.x,h.y,l,a,f,w);i($?"pointer":"default")},checkForHandle:(h,l,a)=>{const u=le(l,a);return u?At(h.x,h.y,u,l):null},checkIfPointInSelectedBounds:(h,l,a)=>{if(!l)return!1;const u=le(l,a);return u&&gt(h.x,h.y,u)}}},ot=10,Hr=8,Wr=70,_r=5,jr=50,Vr=(e,t,r,c,i)=>{const o=i*Math.PI/180,d=Math.cos(o),s=Math.sin(o),p=r/2,g=c/2;return[{x:-p,y:-g},{x:p,y:-g},{x:p,y:g},{x:-p,y:g}].map(h=>({x:e+(h.x*d-h.y*s),y:t+(h.x*s+h.y*d)}))},Xe=(e,t,r,c,i)=>{const o=i*Math.PI/180,d=Math.cos(o),s=Math.sin(o),p=e-r,g=t-c;return{x:r+(p*d-g*s),y:c+(p*s+g*d)}},Or=()=>{const e=m.useRef(null);return{resizeHandleRef:e,startResize:(i,o,d,s)=>{let p,g;o.type==="player"||o.type==="ball"?(p=(o.radius||20)*2,g=(o.radius||20)*2):o.type==="figure"?(p=o.size||30,g=o.size||30):o.type==="text"?(p=s.originalWidth||s.width,g=s.originalHeight||s.height):(p=o.width!==void 0?o.width:s.width,g=o.height!==void 0?o.height:s.height);let x,h;o.shape==="line"||o.shape==="arrow"?(x=(o.startX+o.endX)/2,h=(o.startY+o.endY)/2):o.type==="player"||o.type==="ball"||o.type==="figure"?(x=o.x,h=o.y):o.type==="text"?(x=s.centerX,h=s.centerY):(x=o.x+p/2,h=o.y+g/2);const l=o.rotation||0,a=Vr(x,h,p,g,l);let u={x,y:h},f={x:d.x,y:d.y};if(o.shape==="line"||o.shape==="arrow"){const z=Xe(o.startX,o.startY,x,h,l),M=Xe(o.endX,o.endY,x,h,l);i.name==="start"?(f=z,u=M):i.name==="end"&&(f=M,u=z)}else i.name==="topLeft"?(f=a[0],u=a[2]):i.name==="topRight"?(f=a[1],u=a[3]):i.name==="bottomRight"?(f=a[2],u=a[0]):i.name==="bottomLeft"?(f=a[3],u=a[1]):i.name==="top"?(f={x:(a[0].x+a[1].x)/2,y:(a[0].y+a[1].y)/2},u={x:(a[2].x+a[3].x)/2,y:(a[2].y+a[3].y)/2}):i.name==="bottom"?(f={x:(a[2].x+a[3].x)/2,y:(a[2].y+a[3].y)/2},u={x:(a[0].x+a[1].x)/2,y:(a[0].y+a[1].y)/2}):i.name==="left"?(f={x:(a[0].x+a[3].x)/2,y:(a[0].y+a[3].y)/2},u={x:(a[1].x+a[2].x)/2,y:(a[1].y+a[2].y)/2}):i.name==="right"&&(f={x:(a[1].x+a[2].x)/2,y:(a[1].y+a[2].y)/2},u={x:(a[0].x+a[3].x)/2,y:(a[0].y+a[3].y)/2});const w=f.x-d.x,$=f.y-d.y,C=f.x-u.x,v=f.y-u.y,L=C*C+v*v,k=Xe(d.x,d.y,x,h,-l),S=k.x-x,T=k.y-h;let F=0;["player","ball","figure"].includes(o.type)&&(F=Math.sqrt(Math.pow(d.x-x,2)+Math.pow(d.y-h,2))),e.current={handle:i.name,object:{...o},startPos:d,anchorPoint:u,startVectorX:C,startVectorY:v,startLengthSq:L,pressOffsetX:w,pressOffsetY:$,startFontSize:o.fontSize||16,startX:o.x,startY:o.y,lineStartX:o.startX,lineStartY:o.startY,lineEndX:o.endX,lineEndY:o.endY,startCenterX:x,startCenterY:h,rotation:l,startLocalLeft:-Math.abs(p)/2,startLocalRight:Math.abs(p)/2,startLocalTop:-Math.abs(g)/2,startLocalBottom:Math.abs(g)/2,startFlippedX:p<0,startFlippedY:g<0,isHandleLeft:S<0,isHandleRight:S>0,isHandleTop:T<0,isHandleBottom:T>0,startWidth:p,startHeight:g,startDistanceFromCenter:F}},updateResize:(i,o=!1)=>{if(!e.current)return null;const{handle:d,object:s,startFontSize:p,startCenterX:g,startCenterY:x,startDistanceFromCenter:h,rotation:l,lineStartX:a,lineStartY:u,lineEndX:f,lineEndY:w,startPos:$,startLocalLeft:C,startLocalRight:v,startLocalTop:L,startLocalBottom:k,isHandleLeft:S,isHandleRight:T,isHandleTop:F,isHandleBottom:z,startFlippedX:M,startFlippedY:b,startWidth:P,startHeight:R,anchorPoint:D,startVectorX:q,startVectorY:U,startLengthSq:V,pressOffsetX:W,pressOffsetY:_}=e.current;let I={...s};if(s.type==="text"){const Y=i.x+W,H=i.y+_,j=Y-D.x,J=H-D.y,oe=j*q+J*U;let K=oe/V;if(!["topLeft","topRight","bottomLeft","bottomRight"].includes(d)){const ue=Math.sqrt(V),Pe=Math.sqrt(j*j+J*J),Te=oe>0?1:-1;K=Pe/ue*Te}const re=8;let O=p*K;O<re&&(O=re,K=re/p),K<.1&&(K=.1),I.fontSize=p*K;const ee=P*K,N=R*K,Q=q*K,de=U*K,ae=D.x+Q*.5,ie=D.y+de*.5;return I.x=ae-ee/2,I.y=ie-N/2,I.width=ee,I.height=N,e.current.object=I,I}if(s.type==="shape"&&(s.shape==="line"||s.shape==="arrow")){let Y,H;if(d==="start")H=D,Y={x:i.x,y:i.y};else if(d==="end")Y=D,H={x:i.x,y:i.y};else return I;if(o){const re=H.x-Y.x,O=H.y-Y.y,ee=Math.atan2(O,re),N=Math.sqrt(re*re+O*O),Q=Math.round(ee/(Math.PI/4))*(Math.PI/4);d==="start"?(Y.x=H.x-Math.cos(Q)*N,Y.y=H.y-Math.sin(Q)*N):(H.x=Y.x+Math.cos(Q)*N,H.y=Y.y+Math.sin(Q)*N)}const j=(Y.x+H.x)/2,J=(Y.y+H.y)/2,oe=Xe(Y.x,Y.y,j,J,-l),K=Xe(H.x,H.y,j,J,-l);return I.startX=oe.x,I.startY=oe.y,I.endX=K.x,I.endY=K.y,e.current.object=I,I}if(["player","ball","figure"].includes(s.type)){const Y=Math.sqrt(Math.pow(i.x-g,2)+Math.pow(i.y-x,2)),H=h>0?Y/h:1,j=Math.abs(P);if(s.type==="player"){const J=j/2*H;I.radius=Math.max(Hr,Math.min(Wr,J))}else if(s.type==="ball"){const J=j/2*H;I.radius=Math.max(_r,Math.min(jr,J))}else I.size=Math.max(10,j*H);return e.current.object=I,I}if(s.type==="shape"){const Y=l*Math.PI/180,H=Math.cos(-Y),j=Math.sin(-Y),J=i.x-$.x,oe=i.y-$.y,K=J*H-oe*j,re=J*j+oe*H;let O=C,ee=v,N=L,Q=k;S?O+=K:T&&(ee+=K),F?N+=re:z&&(Q+=re);let de=M,ae=b;O>ee&&([O,ee]=[ee,O],de=!de),N>Q&&([N,Q]=[Q,N],ae=!ae);let ie=ee-O,ue=Q-N;ie<ot&&(ie=ot,S?O=ee-ie:ee=O+ie),ue<ot&&(ue=ot,F?N=Q-ue:Q=N+ue);const Pe=(O+ee)/2,Te=(N+Q)/2,qe=Pe*Math.cos(Y)-Te*Math.sin(Y),Ue=Pe*Math.sin(Y)+Te*Math.cos(Y),Je=g+qe,Ke=x+Ue;let Qe=de?-ie:ie,et=ae?-ue:ue;return I.width=Qe,I.height=et,I.x=Je-Qe/2,I.y=Ke-et/2,e.current.object=I,I}return I},endResize:()=>{const i=e.current;return e.current=null,i?i.object:null}}},Nr=()=>{const e=m.useRef(!1),t=m.useRef([]),r=m.useRef(null),c=m.useRef(!1);return{drawingRef:e,currentPathRef:t,shapeStartRef:r,isDrawingShapeRef:c,startDrawing:h=>{e.current=!0,t.current=[{x:h.x,y:h.y}]},continueDrawing:h=>e.current?(t.current.push({x:h.x,y:h.y}),t.current):null,endDrawing:()=>{const h=t.current;return e.current=!1,t.current=[],h.length>1?h:null},startShape:h=>{c.current=!0,r.current=h},getShapePreview:h=>!c.current||!r.current?null:{start:r.current,end:h},endShape:(h,l)=>{if(!c.current||!r.current)return null;const a=r.current;let u=null;if(l==="line"||l==="arrow")Math.sqrt(Math.pow(h.x-a.x,2)+Math.pow(h.y-a.y,2))>5&&(u={startX:a.x,startY:a.y,endX:h.x,endY:h.y});else{const f=h.x-a.x,w=h.y-a.y;Math.abs(f)>5&&Math.abs(w)>5&&(u={x:a.x,y:a.y,width:f,height:w})}return c.current=!1,r.current=null,u},cancelDrawing:()=>{e.current=!1,t.current=[],c.current=!1,r.current=null}}},qr=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,Ur=y.div`
  border: 2px solid #ddd;
  margin-top: 10px;
  background: white;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  position: relative;
  
  cursor: ${e=>e.$isTextInput?"default":e.$activeTool==="drawing"||e.$activeTool==="eraser"||e.$activeTool==="text"?"none":e.cursor};
`,Jr=y.canvas`
  display: block;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`,Kr=y.canvas`
  display: block;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  touch-action: none; 
`,Qr=y.textarea`
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
`,eo=y.div`
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
`,to=({fieldSize:e,fieldType:t})=>{const r=m.useRef(null),c=m.useRef(null),i=m.useRef(null),o=m.useRef(null),d=m.useRef(!1),s=m.useRef(null),p=m.useRef(null),g=m.useRef(null),x=m.useRef(null),h=m.useRef(new Set),[l,a]=m.useState({width:800,height:500}),[u,f]=m.useState(!1),[w,$]=m.useState(""),[C,v]=m.useState({x:0,y:0}),[L,k]=m.useState(!1),S=m.useRef(!1),T=m.useRef([]),F=m.useRef([]),z=m.useRef(null),M=pe(),{activeTool:b,drawColor:P,brushSize:R,eraserSize:D,brushOpacity:q,brushStyle:U,lineType:V,paths:W,objects:_,selectedObjectId:I,textFontSize:Y,textColor:H,shapeBorderColor:j,shapeBorderOpacity:J,shapeFillColor:oe,shapeFillOpacity:K,shapeBorderWidth:re,shapeBorderStyle:O,shapeLineCapStart:ee,shapeLineCapEnd:N}=Be(E=>E.tacticsBoard);m.useEffect(()=>{p.current=I},[I]);const{redrawStatic:Q,drawLiveLayer:de,drawSingleObjectOnActive:ae,clearActiveLayer:ie,tempObjectDataRef:ue,tempPathDataRef:Pe}=Zr(r,c),{cursorStyle:Te,setCursorStyle:qe,startDrag:Ue,updateDragPosition:Je,endDrag:Ke,updateCursor:Qe,checkForHandle:et,draggedObjectRef:we,checkIfPointInSelectedBounds:En}=Ar(),{resizeHandleRef:be,startResize:Bn,updateResize:Et,endResize:Bt}=Or(),{drawingRef:ve,startDrawing:Tn,continueDrawing:Tt,endDrawing:It,shapeStartRef:Ge,isDrawingShapeRef:Me,startShape:In,endShape:zt}=Nr(),zn=1500,Rn=640,Pn=1400,xt=e.width/e.height,Rt=m.useCallback(()=>{var mt;const E=i.current;if(!E)return{width:800,height:500};const G=((mt=E.parentElement)==null?void 0:mt.clientWidth)||window.innerWidth,Z=G/zn,B=Pn*Z,X=Rn*Z,A=B,te=A/xt,fe=X,Ye=fe*xt;let ge,$e;te<=X?(ge=A,$e=te):(ge=Ye,$e=fe);const De=G*.95;if(ge>De){const rt=De/ge;ge=De,$e=$e*rt}return{width:Math.floor(ge),height:Math.floor($e)}},[xt]),tt=E=>{const G=c.current;if(!G)return{x:0,y:0};let Z,B;E.changedTouches&&E.changedTouches.length>0?(Z=E.changedTouches[0].clientX,B=E.changedTouches[0].clientY):E.touches&&E.touches.length>0?(Z=E.touches[0].clientX,B=E.touches[0].clientY):(Z=E.clientX,B=E.clientY);const X=G.getBoundingClientRect(),A=G.width/X.width,te=G.height/X.height;return{x:(Z-X.left)*A,y:(B-X.top)*te}},Pt=E=>({x:Math.max(0,Math.min(E.x,l.width)),y:Math.max(0,Math.min(E.y,l.height))}),ft=m.useCallback(E=>{const G=x.current||E,Z=E.x-G.x,B=E.y-G.y,X=Math.sqrt(Z*Z+B*B),A=Math.max(1,Math.ceil(X/(D/5)));let te=!1;const fe=D/2*.85;for(let Ye=0;Ye<=A;Ye++){const ge=Ye/A,$e=G.x+Z*ge,De=G.y+B*ge;xn($e,De,_,W,fe,r.current).forEach(rt=>{h.current.has(rt.id)||(h.current.add(rt.id),te=!0)})}te&&requestAnimationFrame(()=>{Q(W,_,b,P,R,null,h.current)}),x.current=E},[_,W,D,b,P,R,Q]),Fe=m.useCallback(E=>{if((b==="drawing"||b==="eraser"||b==="text")&&g.current&&!u){let B,X;E.touches&&E.touches.length>0?(B=E.touches[0].clientX,X=E.touches[0].clientY):(B=E.clientX,X=E.clientY),g.current.style.left=`${B}px`,g.current.style.top=`${X}px`}if(!we.current&&!be.current&&!ve.current&&!Me.current&&!(b==="eraser"&&S.current))return;E.cancelable&&E.preventDefault();const G=tt(E),Z=Pt(G);if((we.current||be.current||b==="eraser")&&!S.current&&(S.current=!0),b==="eraser"&&S.current)ft(Z);else if(be.current){const B=Et(G);B&&ae(B,P,!0)}else if(we.current){const B=Je(G,l.width,l.height);B&&ae(B,P,!0)}else if(ve.current){const B=Tt(Z);B&&B.length>=2&&de({id:"live_drawing",type:"path",points:B,color:P,brushSize:R,opacity:q,brushStyle:U,lineType:V},null,V==="solid")}else if(Me.current&&Ge.current){const B=b.replace("shape_","");de(null,{type:B,start:Ge.current,end:Z,borderColor:j,borderOpacity:J,borderStyle:O,borderWidth:re,fillColor:oe,fillOpacity:K,lineCapStart:ee,lineCapEnd:N},!1)}},[l,we,be,ve,Me,Je,Et,de,ae,Tt,b,P,R,D,Ge,j,J,O,re,oe,K,q,U,V,ee,N,ft,u]),nt=m.useCallback(E=>{if(window.removeEventListener("mousemove",Fe),window.removeEventListener("mouseup",nt),window.removeEventListener("touchmove",Fe),window.removeEventListener("touchend",nt),S.current=!1,x.current=null,b==="eraser"&&h.current.size>0){const B=Array.from(h.current);M(Zn(B)),h.current.clear()}const G=tt(E),Z=Pt(G);if(!p.current&&!ve.current&&!Me.current&&ie(),ve.current){const B=It();B&&M(An({points:B,color:P,brushSize:R,opacity:q,brushStyle:U,lineType:V})),ie()}if(Me.current&&Ge.current){const B=b.replace("shape_",""),X=zt(Z,B);if(X){const A={type:"shape",shape:B,...X,borderColor:j,borderOpacity:J,borderWidth:re,borderStyle:O,color:j};B==="line"||B==="arrow"?(A.lineCapStart=ee,A.lineCapEnd=N):(A.fillColor=oe,A.fillOpacity=K),M(yt(A))}ie()}if(we.current){const B=Ke();if(B)if(B.type==="path"){const X=parseInt(B.id.replace("path_",""));M(ke({index:X,updates:B}))}else M(Ne({id:B.id,updates:B}))}if(be.current){const B=Bt();if(B&&B.id)if(B.type==="path"){const X=parseInt(B.id.replace("path_",""));M(ke({index:X,updates:B}))}else M(Ne({id:B.id,updates:B}))}qe("default")},[Fe,ve,Me,Ge,we,be,b,It,zt,Ke,Bt,M,P,R,j,J,re,O,oe,K,ee,N,qe,ie]),Gt=E=>{if(E.button!==void 0&&E.button!==0)return;window.addEventListener("mousemove",Fe),window.addEventListener("mouseup",nt),window.addEventListener("touchmove",Fe,{passive:!1}),window.addEventListener("touchend",nt);const G=tt(E),Z=r.current;if(u){Ft();return}if(b==="cursor"){const B=I?I.startsWith("path_")?{...W[parseInt(I.replace("path_",""))],type:"path",id:I}:_.find(A=>A.id===I):null;if(B){const A=le(B,Z);if(A){const te=et(G,B,Z);if(te){Bn(te,B,G,A);return}if(En(G,B,Z)){Ue(B,G,Z);return}}}const X=fn(G.x,G.y,_,W,R,Z);X?(p.current=X.id,M(Yt(X.id)),le(X,Z)&&Ue(X,G,Z)):(p.current=null,M(je()))}else if(b==="drawing")Tn(G),de({id:"live_drawing",type:"path",points:[G],color:P,brushSize:R,opacity:q,brushStyle:U,lineType:V},null,!1);else if(b==="eraser")S.current=!0,x.current=G,ft(G);else if(b.startsWith("shape_"))In(G);else if(b.startsWith("figure_")){const B={player:"👤",goalkeeper:"🧤",coach:"🧠",referee:"⚖️",goal:"🥅",cone:"🟨"},X=b.replace("figure_","");M(yt({type:"figure",figureType:X,icon:B[X],x:G.x,y:G.y,size:30}))}else if(b==="ball")M(yt({type:"ball",x:G.x,y:G.y,radius:10}));else if(b==="text"){const B=`text_${Date.now()}_${Math.random()}`;f(!0),$(""),v(G),s.current=B,M(Yt(B)),p.current=B}},Gn=E=>{if(we.current||be.current||ve.current||Me.current||S.current||E.touches)return;(b==="drawing"||b==="eraser"||b==="text")&&g.current&&!u&&(g.current.style.left=`${E.clientX}px`,g.current.style.top=`${E.clientY}px`);const G=tt(E),Z=r.current;b==="cursor"&&Qe(G,_,W,p.current,R,Z)},Fn=()=>k(!0),Yn=()=>k(!1);m.useEffect(()=>{const E=()=>{const G=Rt();a(G)};return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[Rt]),m.useEffect(()=>{const E=r.current,G=c.current,Z=i.current;E&&G&&Z&&(E.width=l.width,E.height=l.height,E.style.width=`${l.width}px`,E.style.height=`${l.height}px`,G.width=l.width,G.height=l.height,G.style.width=`${l.width}px`,G.style.height=`${l.height}px`,Z.style.width=`${l.width}px`,Z.style.height=`${l.height}px`,d.current||(M(Hn({canvasWidth:l.width,canvasHeight:l.height})),d.current=!0),Q(W,_,b,P,R,I))},[l,M,Q,W,_,I,b,P,R]),m.useEffect(()=>{if(S.current)return;const E=T.current,G=F.current,Z=z.current;let B=!1,X=null;if(I&&I===Z){if(I.startsWith("path_")){const A=parseInt(I.replace("path_",""));W[A]!==G[A]&&(B=!0,X={...W[A],type:"path",id:I})}else{const A=_.find(fe=>fe.id===I),te=E.find(fe=>fe.id===I);A!==te&&(B=!0,X=A)}(_.length!==E.length||W.length!==G.length)&&(B=!1)}if(B&&X)ae(X,P,!0);else if(Q(W,_,b,P,R,I,h.current),I){let A=null;if(I.startsWith("path_")){const te=parseInt(I.replace("path_",""));W[te]&&(A={...W[te],type:"path",id:I})}else A=_.find(te=>te.id===I);A?ae(A,P,!0):ie()}else ie();T.current=_,F.current=W,z.current=I},[W,_,I,Q,ae,ie,b,P,R]),m.useEffect(()=>{l.width>0&&l.height>0&&M(Wn({canvasWidth:l.width,canvasHeight:l.height}))},[l,M]),m.useEffect(()=>{if(u&&o.current&&c.current){const E=o.current;setTimeout(()=>{E.focus(),E.select()},0);const G=c.current,Z=G.getBoundingClientRect(),B=G.width/Z.width,X=G.height/Z.height,A=C.x/B,te=C.y/X;E.style.left=`${A}px`,E.style.top=`${te}px`,E.style.fontSize=`${Y/X}px`,E.style.color=H,E.style.width="auto",E.style.height="auto"}},[u,C,H,Y]),m.useEffect(()=>{const E=G=>{G.key==="Escape"&&!u&&(M(je()),p.current=null)};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[I,u,M]),m.useEffect(()=>{M(je()),p.current=null,b==="shape_arrow"&&M(un("arrow"))},[b,M]);const Dn=E=>{$(E.target.value),o.current&&(o.current.style.height="auto",o.current.style.height=o.current.scrollHeight+"px")},Ft=()=>{const E=w.trim();E&&M(_n({id:s.current,x:C.x,y:C.y,text:E,fontSize:Y,color:H})),f(!1),$(""),s.current=null,M(Oe("cursor"))},Xn=E=>{E.key==="Escape"&&(E.preventDefault(),f(!1),$(""),M(je()),p.current=null,M(Oe("cursor")))};return n.jsxs(qr,{children:[n.jsx(eo,{ref:g,size:b==="eraser"?D:R,color:b==="text"?H:P,$visible:(b==="drawing"||b==="eraser"||b==="text"&&!u)&&L,isEraser:b==="eraser",isText:b==="text",children:b==="text"&&"T"}),n.jsxs(Ur,{ref:i,cursor:Te,$activeTool:b,$isTextInput:u,onMouseEnter:Fn,onMouseLeave:Yn,children:[n.jsx(Jr,{ref:r}),n.jsx(Kr,{ref:c,onMouseDown:Gt,onTouchStart:Gt,onMouseMove:Gn}),u&&n.jsx(Qr,{ref:o,value:w,onChange:Dn,onBlur:Ft,onKeyDown:Xn,placeholder:"Введіть текст",rows:1})]})]})},no=e=>m.createElement("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32",xmlSpace:"preserve",...e},m.createElement("path",{className:"st0",d:"M20,29h-8c-2.2,0-4-1.8-4-4V7c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v18C24,27.2,22.2,29,20,29z"}),m.createElement("circle",{className:"st0",cx:16,cy:16,r:4}),m.createElement("line",{className:"st0",x1:8,y1:16,x2:24,y2:16}),m.createElement("rect",{x:13,y:3,className:"st0",width:6,height:4}),m.createElement("rect",{x:13,y:25,className:"st0",width:6,height:4})),ro=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),oo=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"})),io=e=>m.createElement("svg",{fill:"#000000",height:"800px",width:"800px",baseProfile:"tiny",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"-1117 883 256 256",xmlSpace:"preserve",...e},m.createElement("path",{d:"M-1016.4,1091.3l113.9-113.9c13.5-13.5,13.5-35.3,0-48.8l-32.5-32.5c-13.5-13.5-35.3-13.5-48.8,0l-113.9,113.9 c-13.5,13.5-13.5,35.3,0,48.8l32.5,32.5C-1051.7,1104.8-1029.9,1104.8-1016.4,1091.3z M-1057.1,1083.2l-32.5-32.5 c-9-9-9-23.6,0-32.5l67.6-68.1l65.1,65.1l-67.6,68.1c-4.3,4.3-10.1,6.7-16.3,6.7C-1046.9,1089.9-1052.7,1087.6-1057.1,1083.2z  M-954.3,1129.7c0,3.5-2.8,6.3-6.3,6.3h-89.3c-3.5,0-6.3-2.8-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3h89.3 C-957.1,1123.4-954.3,1126.2-954.3,1129.7z M-882.3,1129.7c0,3.4-2.9,6.3-6.3,6.3c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3 C-885.2,1123.4-882.3,1126.2-882.3,1129.7z M-907.5,1129.7c0,3.4-2.9,6.3-6.3,6.3c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3 C-910.4,1123.4-907.5,1126.2-907.5,1129.7z M-932.7,1129.7c0,3.4-2.9,6.3-6.3,6.3c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3 C-935.6,1123.4-932.7,1126.2-932.7,1129.7z M-944.5,1107.9c0,3.5-2.8,6.3-6.3,6.3h-51.1c-3.5,0-6.3-2.8-6.3-6.3 c0-3.5,2.8-6.3,6.3-6.3h51.1C-947.4,1101.6-944.5,1104.4-944.5,1107.9z M-894.9,1107.9c0,3.4-2.9,6.3-6.3,6.3 c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3C-897.8,1101.6-894.9,1104.4-894.9,1107.9z M-920.1,1107.9c0,3.4-2.9,6.3-6.3,6.3 c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3C-923,1101.6-920.1,1104.4-920.1,1107.9z M-869.6,1107.9c0,3.4-2.9,6.3-6.3,6.3 c-3.5,0-6.3-2.9-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3C-872.6,1101.6-869.6,1104.4-869.6,1107.9z"})),ao=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("circle",{cx:12,cy:12,r:9,strokeWidth:2}),m.createElement("path",{d:"M18 18L6 6",strokeWidth:2})),Sn=e=>m.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},m.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fillRule:"evenodd"},m.createElement("g",{id:"Arrow",transform:"translate(-528.000000, 0.000000)",fillRule:"nonzero"},m.createElement("g",{id:"forward_2_line",transform:"translate(528.000000, 0.000000)"},m.createElement("path",{d:"M17.954,11.6767 C16.6468,9.47493 14.2448,8 11.5,8 C7.35786,8 4,11.3579 4,15.5 C4,16.0523 3.55228,16.5 3,16.5 C2.44772,16.5 2,16.0523 2,15.5 C2,10.2533 6.25329,6 11.5,6 C14.6814,6 17.4961,7.56337 19.22,9.96279 L19.757,6.91751 C19.8529,6.37361 20.3715,6.01044 20.9154,6.10635 C21.4593,6.20225 21.8225,6.72091 21.7266,7.2648 L20.6847,13.1736 C20.6386,13.4348 20.4907,13.667 20.2735,13.8192 C19.9896,14.0179 19.6122,14.0542 19.2977,13.9445 L13.6174,12.9429 C13.0735,12.847 12.7103,12.3284 12.8062,11.7845 C12.9021,11.2406 13.4208,10.8774 13.9647,10.9733 L17.954,11.6767 Z",id:"\\u8DEF\\u5F84"}))))),so=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.93417 2C7.95604 2 7.97799 2 8 2L16.0658 2C16.9523 1.99995 17.7161 1.99991 18.3278 2.08215C18.9833 2.17028 19.6117 2.36902 20.1213 2.87868C20.631 3.38835 20.8297 4.0167 20.9179 4.67221C21.0001 5.28388 21.0001 6.0477 21 6.9342L21 7.95C21 8.50229 20.5523 8.95 20 8.95C19.4477 8.95 19 8.50229 19 7.95V7.00001C19 6.02893 18.9979 5.40122 18.9357 4.93871C18.8774 4.50497 18.7832 4.36902 18.7071 4.2929C18.631 4.21677 18.495 4.12263 18.0613 4.06431C17.5988 4.00213 16.9711 4 16 4H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V4H8C7.02893 4 6.40122 4.00213 5.93871 4.06431C5.50497 4.12263 5.36902 4.21677 5.2929 4.2929C5.21677 4.36902 5.12263 4.50497 5.06431 4.93871C5.00213 5.40122 5 6.02893 5 7.00001V7.95C5 8.50229 4.55229 8.95 4 8.95C3.44772 8.95 3 8.50229 3 7.95V7.00001C3 6.97799 3 6.95604 3 6.93418C2.99995 6.04769 2.99991 5.28387 3.08215 4.67221C3.17028 4.0167 3.36902 3.38835 3.87868 2.87868C4.38835 2.36902 5.0167 2.17028 5.67221 2.08215C6.28387 1.99991 7.04769 1.99995 7.93417 2Z"}),m.createElement("path",{d:"M7 21H17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),kn=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.51192 4.43057C6.82641 4.161 7.29989 4.19743 7.56946 4.51192L13.5695 11.5119C13.8102 11.7928 13.8102 12.2072 13.5695 12.4881L7.56946 19.4881C7.29989 19.8026 6.82641 19.839 6.51192 19.5695C6.19743 19.2999 6.161 18.8264 6.43057 18.5119L12.0122 12L6.43057 5.48811C6.161 5.17361 6.19743 4.70014 6.51192 4.43057ZM10.5121 4.43068C10.8266 4.16111 11.3001 4.19753 11.5697 4.51202L17.5697 11.512C17.8104 11.7929 17.8104 12.2073 17.5697 12.4882L11.5697 19.4882C11.3001 19.8027 10.8266 19.8391 10.5121 19.5696C10.1976 19.3 10.1612 18.8265 10.4308 18.512L16.0124 12.0001L10.4308 5.48821C10.1612 5.17372 10.1976 4.70024 10.5121 4.43068Z"})),lo=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("rect",{x:3,y:5,width:18,height:14,rx:2,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),co=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ho=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.0001 5.94363L4.76627 18H19.2339L12.0001 5.94363ZM10.7138 4.20006C11.2964 3.22905 12.7037 3.22905 13.2863 4.20006L21.4032 17.7282C22.0031 18.728 21.2829 20 20.117 20H3.88318C2.71724 20 1.99706 18.728 2.59694 17.7282L10.7138 4.20006Z"})),po=e=>m.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z"})),uo=e=>m.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M6 12H18M18 12L13 7M18 12L13 17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),go=y.div`
  position: relative;
  display: inline-block;
`,xo=y.button`
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
`,fo=y.div`
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
`,mo=y.button`
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
`,_t=y.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ct=[{id:"rectangle",name:"Прямокутник",icon:n.jsx(lo,{}),style:{stroke:"currentColor",fill:"none"}},{id:"circle",name:"Коло",icon:n.jsx(co,{}),style:{stroke:"currentColor",fill:"none"}},{id:"triangle",name:"Трикутник",icon:n.jsx(ho,{}),style:{fill:"currentColor",stroke:"none"}},{id:"line",name:"Лінія",icon:n.jsx(po,{}),style:{fill:"currentColor",stroke:"none"}},{id:"arrow",name:"Стрілка",icon:n.jsx(uo,{}),style:{stroke:"currentColor",fill:"none"}}],yo=({activeTool:e,onSelectShape:t})=>{const[r,c]=m.useState(!1),[i,o]=m.useState({top:0,left:0}),d=m.useRef(null),s=m.useRef(null),p=e.startsWith("shape_"),g=p?e.replace("shape_",""):null,x=Ct.find(w=>w.id===g),h=()=>{if(s.current){const w=s.current.getBoundingClientRect();o({top:w.bottom+window.scrollY,left:w.left+window.scrollX})}c(!r)},l=w=>{t(w),c(!1)},a=w=>{d.current&&!d.current.contains(w.target)&&c(!1)};m.useEffect(()=>(document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}),[]);const u=()=>{const w=x||Ct[0];return n.jsx(_t,{children:Dt.cloneElement(w.icon,w.style)})},f=w=>Dt.cloneElement(w.icon,w.style);return n.jsxs(go,{ref:d,children:[n.jsx(xo,{ref:s,title:"Геометричні фігури",onClick:h,active:p,children:u()}),n.jsx(fo,{isOpen:r,style:{top:i.top,left:i.left},children:Ct.map(w=>n.jsx(mo,{onClick:()=>l(w),title:w.name,children:n.jsx(_t,{children:f(w)})},w.id))})]})},Co=y.div`
  position: relative;
  display: inline-block;
`,wo=y.button`
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
`,bo=y.div`
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
`,jt=[{id:"player",name:"Гравець",icon:"👤"},{id:"goalkeeper",name:"Воротар",icon:"🧤"},{id:"coach",name:"Тренер",icon:"🧠"},{id:"referee",name:"Суддя",icon:"⚖️"},{id:"goal",name:"Ворота",icon:"🥅"},{id:"cone",name:"Стійка",icon:"🟨"}],Mo=({activeTool:e,onSelectFigure:t})=>{const[r,c]=m.useState(!1),[i,o]=m.useState({top:0,left:0}),d=m.useRef(null),s=m.useRef(null),p=e.startsWith("figure_"),g=p?e.replace("figure_",""):null,x=jt.find(f=>f.id===g),h=()=>{if(s.current){const f=s.current.getBoundingClientRect();o({top:f.bottom+window.scrollY,left:f.left+window.scrollX})}c(!r)},l=f=>{t(f),c(!1)},a=f=>{d.current&&!d.current.contains(f.target)&&c(!1)};m.useEffect(()=>(document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}),[]);const u=()=>x?x.icon:"👤";return n.jsxs(Co,{ref:d,children:[n.jsx(wo,{ref:s,title:"Спортивні фігури",onClick:h,active:p,children:u()}),n.jsx(bo,{isOpen:r,style:{top:i.top,left:i.left},children:jt.map(f=>n.jsx(vo,{onClick:()=>l(f),title:f.name,children:f.icon},f.id))})]})},Vt=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M9.19762 11.9582L9.91426 11.737L9.19762 11.9582ZM9.54558 10.8683L9.08995 10.2726L9.54558 10.8683ZM9.91896 14.2952L9.20232 14.5164L9.91896 14.2952ZM14.0579 14.2952L13.3413 14.074L14.0579 14.2952ZM14.4313 10.8683L13.9757 11.4641V11.4641L14.4313 10.8683ZM14.7793 11.9582L15.4959 12.1794L14.7793 11.9582ZM12.5948 9.46375L13.0504 8.86802L12.5948 9.46375ZM11.3821 9.46375L11.8377 10.0595L11.3821 9.46375ZM20.1847 17.75C20.5989 17.75 20.9347 17.4142 20.9347 17C20.9347 16.5858 20.5989 16.25 20.1847 16.25V17.75ZM14.7793 19.7351L14.0677 19.4982L14.7793 19.7351ZM13.4801 21.2631C13.3492 21.6561 13.5617 22.0807 13.9547 22.2116C14.3477 22.3424 14.7724 22.1299 14.9033 21.7369L13.4801 21.2631ZM3.99769 16.25C3.58348 16.25 3.24769 16.5858 3.24769 17C3.24769 17.4142 3.58348 17.75 3.99769 17.75V16.25ZM9.40314 19.7351L10.1147 19.4982L9.40314 19.7351ZM9.27917 21.7369C9.41002 22.1299 9.83469 22.3424 10.2277 22.2116C10.6207 22.0807 10.8332 21.6561 10.7024 21.2631L9.27917 21.7369ZM8.22071 17.3775L7.78185 17.9857L8.22071 17.3775ZM5.556 5.45942C5.4489 5.05928 5.03772 4.82173 4.63759 4.92882C4.23746 5.03591 3.9999 5.44709 4.10699 5.84723L5.556 5.45942ZM5.24951 7.21519L4.52501 7.40909V7.40909L5.24951 7.21519ZM3.59168 11.5885L3.17811 10.9628L3.17811 10.9628L3.59168 11.5885ZM1.62739 11.9879C1.28185 12.2163 1.18689 12.6816 1.4153 13.0271C1.64372 13.3727 2.109 13.4676 2.45454 13.2392L1.62739 11.9879ZM19.934 5.84732C20.0411 5.44719 19.8035 5.036 19.4034 4.92891C19.0033 4.82182 18.5921 5.05938 18.485 5.45951L19.934 5.84732ZM18.7915 7.21528L18.067 7.02137L18.7915 7.21528ZM20.4493 11.5886L20.0357 12.2143L20.4493 11.5886ZM21.5864 13.2393C21.932 13.4677 22.3973 13.3728 22.6257 13.0272C22.8541 12.6817 22.7591 12.2164 22.4136 11.988L21.5864 13.2393ZM16.0903 3.83623C16.4288 3.5975 16.5096 3.12956 16.2709 2.79107C16.0322 2.45257 15.5642 2.3717 15.2257 2.61044L16.0903 3.83623ZM14.3376 4.15456L14.7699 4.76746L14.3376 4.15456ZM9.66562 4.10403L9.22021 4.70744V4.70744L9.66562 4.10403ZM8.61539 2.39659C8.28213 2.15059 7.81255 2.22133 7.56656 2.55459C7.32056 2.88784 7.3913 3.35742 7.72456 3.60341L8.61539 2.39659ZM14.7793 11.3678L14.0627 11.589L14.7793 11.3678ZM9.19762 11.3678L9.91426 11.589L9.19762 11.3678ZM21.2269 12C21.2269 17.1095 17.0899 21.25 11.9885 21.25V22.75C17.92 22.75 22.7269 17.9362 22.7269 12H21.2269ZM11.9885 21.25C6.88701 21.25 2.75 17.1095 2.75 12H1.25C1.25 17.9362 6.05695 22.75 11.9885 22.75V21.25ZM2.75 12C2.75 6.89055 6.88701 2.75 11.9885 2.75V1.25C6.05695 1.25 1.25 6.06376 1.25 12H2.75ZM11.9885 2.75C17.0899 2.75 21.2269 6.89055 21.2269 12H22.7269C22.7269 6.06376 17.92 1.25 11.9885 1.25V2.75ZM12.1392 10.0595L13.9757 11.4641L14.887 10.2726L13.0504 8.86802L12.1392 10.0595ZM14.0626 11.737L13.3413 14.074L14.7746 14.5164L15.4959 12.1794L14.0626 11.737ZM13.1036 14.25H10.8733V15.75H13.1036V14.25ZM10.6356 14.074L9.91426 11.737L8.48098 12.1794L9.20232 14.5164L10.6356 14.074ZM10.0012 11.4641L11.8377 10.0595L10.9265 8.86802L9.08995 10.2726L10.0012 11.4641ZM20.1847 16.25H18.5696V17.75H20.1847V16.25ZM14.0677 19.4982L13.4801 21.2631L14.9033 21.7369L15.4909 19.972L14.0677 19.4982ZM18.5696 16.25C17.892 16.25 17.3207 16.2489 16.8555 16.302C16.3711 16.3574 15.9264 16.4781 15.5228 16.7693L16.4006 17.9857C16.5201 17.8994 16.6846 17.8313 17.0258 17.7923C17.3863 17.7511 17.8574 17.75 18.5696 17.75V16.25ZM15.4909 19.972C15.7161 19.2956 15.8662 18.8484 16.0193 18.5189C16.1643 18.2069 16.2809 18.072 16.4006 17.9857L15.5228 16.7693C15.1193 17.0605 14.8645 17.4444 14.659 17.8868C14.4615 18.3117 14.282 18.8545 14.0677 19.4982L15.4909 19.972ZM3.99769 17.75H5.61279V16.25H3.99769V17.75ZM8.69154 19.972L9.27917 21.7369L10.7024 21.2631L10.1147 19.4982L8.69154 19.972ZM5.61279 17.75C6.325 17.75 6.79611 17.7511 7.15658 17.7923C7.49784 17.8313 7.66228 17.8994 7.78185 17.9857L8.65958 16.7693C8.25598 16.4781 7.81137 16.3574 7.32692 16.302C6.86168 16.2489 6.29041 16.25 5.61279 16.25V17.75ZM10.1147 19.4982C9.90043 18.8545 9.7209 18.3117 9.52346 17.8868C9.31791 17.4445 9.06311 17.0605 8.65958 16.7693L7.78185 17.9857C7.90148 18.072 8.01815 18.2069 8.16314 18.5189C8.31624 18.8484 8.46634 19.2956 8.69154 19.972L10.1147 19.4982ZM4.10699 5.84723L4.52501 7.40909L5.97401 7.02128L5.556 5.45942L4.10699 5.84723ZM3.17811 10.9628L1.62739 11.9879L2.45454 13.2392L4.00526 12.2142L3.17811 10.9628ZM4.52501 7.40909C4.70933 8.09777 4.83021 8.55381 4.88378 8.91324C4.93452 9.25362 4.9114 9.43069 4.85896 9.56902L6.26156 10.1007C6.43795 9.63541 6.43932 9.17465 6.3674 8.69211C6.29831 8.22862 6.14941 7.67663 5.97401 7.02128L4.52501 7.40909ZM4.00526 12.2142C4.57077 11.8404 5.04807 11.5262 5.407 11.2252C5.78074 10.9119 6.08516 10.5661 6.26156 10.1007L4.85896 9.56902C4.80654 9.70729 4.70659 9.855 4.44321 10.0759C4.16501 10.3091 3.77244 10.57 3.17811 10.9628L4.00526 12.2142ZM18.485 5.45951L18.067 7.02137L19.516 7.40918L19.934 5.84732L18.485 5.45951ZM20.0357 12.2143L21.5864 13.2393L22.4136 11.988L20.8629 10.9629L20.0357 12.2143ZM18.067 7.02137C17.8916 7.67672 17.7427 8.22871 17.6736 8.6922C17.6017 9.17474 17.603 9.6355 17.7794 10.1008L19.182 9.56911C19.1296 9.43078 19.1065 9.25372 19.1572 8.91333C19.2108 8.5539 19.3316 8.09787 19.516 7.40918L18.067 7.02137ZM20.8629 10.9629C20.2685 10.5701 19.876 10.3092 19.5978 10.0759C19.3344 9.85509 19.2344 9.70739 19.182 9.56911L17.7794 10.1008C17.9558 10.5662 18.2602 10.912 18.634 11.2253C18.9929 11.5263 19.4702 11.8405 20.0357 12.2143L20.8629 10.9629ZM15.2257 2.61044L13.9054 3.54166L14.7699 4.76746L16.0903 3.83623L15.2257 2.61044ZM10.111 3.50061L8.61539 2.39659L7.72456 3.60341L9.22021 4.70744L10.111 3.50061ZM13.9054 3.54166C13.3231 3.9523 12.9373 4.22303 12.6189 4.39721C12.3174 4.56214 12.1438 4.60125 11.9966 4.59965L11.9803 6.09957C12.478 6.10495 12.9109 5.94721 13.3387 5.7132C13.7496 5.48845 14.2159 5.15817 14.7699 4.76746L13.9054 3.54166ZM9.22021 4.70744C9.76562 5.11004 10.2247 5.45033 10.6306 5.68391C11.0533 5.92712 11.4827 6.09418 11.9803 6.09957L11.9966 4.59965C11.8494 4.59806 11.6767 4.5552 11.3788 4.38379C11.0642 4.20276 10.6843 3.92375 10.111 3.50061L9.22021 4.70744ZM13.9757 11.4641C14.0179 11.4963 14.0475 11.5399 14.0627 11.589L15.4959 11.1465C15.3911 10.807 15.1828 10.4989 14.887 10.2726L13.9757 11.4641ZM14.0627 11.589C14.0773 11.6364 14.0779 11.6876 14.0626 11.737L15.4959 12.1794C15.6023 11.8349 15.5974 11.4754 15.4959 11.1465L14.0627 11.589ZM18.1938 9.14203L14.4923 10.6748L15.0662 12.0607L18.7677 10.5279L18.1938 9.14203ZM13.0504 8.86802C12.7371 8.62838 12.3624 8.50841 11.9885 8.50841V10.0084C12.0419 10.0084 12.0945 10.0253 12.1392 10.0595L13.0504 8.86802ZM11.9885 8.50841C11.6146 8.50841 11.2398 8.62838 10.9265 8.86802L11.8377 10.0595C11.8824 10.0253 11.935 10.0084 11.9885 10.0084V8.50841ZM12.7385 9.25841V5.34961H11.2385V9.25841H12.7385ZM13.3413 14.074C13.3259 14.1241 13.2962 14.166 13.2572 14.1967L14.1852 15.3752C14.4575 15.1608 14.6671 14.8646 14.7746 14.5164L13.3413 14.074ZM13.2572 14.1967C13.214 14.2308 13.1607 14.25 13.1036 14.25V15.75C13.5063 15.75 13.8846 15.6119 14.1852 15.3752L13.2572 14.1967ZM16.5291 16.887L14.2886 14.2954L13.1538 15.2765L15.3944 17.868L16.5291 16.887ZM10.8733 14.25C10.8162 14.25 10.7629 14.2308 10.7197 14.1967L9.79172 15.3752C10.0923 15.6119 10.4706 15.75 10.8733 15.75V14.25ZM10.7197 14.1967C10.6807 14.166 10.651 14.1241 10.6356 14.074L9.20232 14.5164C9.3098 14.8646 9.51943 15.1608 9.79172 15.3752L10.7197 14.1967ZM8.81059 17.8407L10.8456 15.2492L9.66584 14.3228L7.63084 16.9143L8.81059 17.8407ZM9.91426 11.737C9.89899 11.6876 9.89961 11.6364 9.91426 11.589L8.48099 11.1465C8.37949 11.4754 8.37465 11.8349 8.48098 12.1794L9.91426 11.737ZM9.91426 11.589C9.9294 11.5399 9.95905 11.4963 10.0012 11.4641L9.08995 10.2726C8.79412 10.4989 8.58579 10.807 8.48099 11.1465L9.91426 11.589ZM9.48889 10.6766L5.85153 9.14373L5.269 10.526L8.90636 12.0589L9.48889 10.6766Z"})),$o=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5262 17.4999C18.4887 22.7611 11.7612 24.5637 6.49994 21.5262C1.23873 18.4886 -0.563901 11.7611 2.47367 6.49988C5.51123 1.23866 12.2387 -0.563962 17.4999 2.4736C22.7612 5.51117 24.5638 12.2387 21.5262 17.4999ZM5.84382 7.87995C5.25279 7.64272 4.74291 7.45257 4.3292 7.30543C5.59153 5.24057 7.56267 3.85898 9.74648 3.29362C9.77176 3.62621 9.82851 4.00289 9.93722 4.40861C10.3269 5.86297 11.3579 7.58777 13.75 8.96886C14.0666 9.15165 14.3765 9.31079 14.6793 9.44842C14.4757 10.219 14.1794 11.0351 13.7614 11.8848C13.3566 11.6365 12.936 11.3857 12.5 11.1339C9.85449 9.60655 7.52076 8.55305 5.84382 7.87995ZM12.7587 13.6161C12.3555 13.3682 11.9358 13.1176 11.5 12.866C8.94938 11.3934 6.70297 10.3799 5.09882 9.73602C4.44209 9.47241 3.89359 9.27099 3.47664 9.12556C2.8887 10.8629 2.86217 12.7007 3.33339 14.4015C3.63406 14.2571 3.98864 14.1179 4.39435 14.0092C5.84872 13.6195 7.85792 13.65 10.25 15.0311C10.5667 15.2139 10.8594 15.4027 11.13 15.5961C11.6875 15.0424 12.2384 14.3885 12.7587 13.6161ZM12.6204 16.9341C13.4037 17.8315 13.839 18.756 14.0628 19.5913C14.1715 19.997 14.2283 20.3736 14.2536 20.7061C15.962 20.2638 17.5403 19.3219 18.7509 17.9441C18.4164 17.6557 17.9678 17.2815 17.4112 16.8446C16.6284 16.2301 15.633 15.4925 14.4426 14.6962C13.8639 15.5605 13.2482 16.3006 12.6204 16.9341ZM9.52737 16.9296C9.43788 16.8737 9.34548 16.8182 9.25005 16.7631C7.31205 15.6442 5.84818 15.6902 4.91199 15.9411C4.58 16.03 4.30141 16.1484 4.0805 16.2639C4.53358 17.1073 5.12461 17.8846 5.84359 18.5583C5.87614 18.5513 5.90977 18.5439 5.94444 18.5361C6.44532 18.4223 7.15871 18.2112 7.97658 17.8245C8.4626 17.5947 8.98712 17.3022 9.52737 16.9296ZM7.92672 20.018C8.21347 19.909 8.51642 19.7815 8.83145 19.6326C9.54844 19.2936 10.3256 18.8442 11.1145 18.2503C11.6989 18.9202 11.9873 19.5728 12.131 20.109C12.2199 20.4409 12.2567 20.7413 12.2672 20.9903C10.8031 21.0352 9.31171 20.7231 7.92672 20.018ZM18.6461 15.2714C17.8061 14.612 16.7364 13.8204 15.4558 12.968C15.9672 11.9634 16.3317 10.9922 16.5833 10.0701C17.7521 10.2998 18.7704 10.2145 19.6057 9.99072C20.0114 9.88202 20.3659 9.74284 20.6666 9.59846C21.2688 11.7723 21.0579 14.1701 19.9008 16.2957C19.5666 16.011 19.147 15.6645 18.6461 15.2714ZM16.9702 8.10789C17.8425 8.27902 18.5519 8.20254 19.0881 8.05887C19.42 7.96992 19.6986 7.85154 19.9195 7.73607C19.2263 6.44565 18.2102 5.3101 16.907 4.46319C16.956 4.76614 16.9971 5.09234 17.0257 5.43977C17.0906 6.23015 17.09 7.1278 16.9702 8.10789ZM15.0328 7.39372C15.0854 6.73963 15.0764 6.13922 15.0324 5.60348C14.9583 4.70183 14.7845 3.97847 14.6326 3.4878C14.622 3.45374 14.6116 3.42082 14.6013 3.38905C13.6584 3.10331 12.6898 2.9801 11.7329 3.00943C11.7433 3.2585 11.7801 3.55897 11.8691 3.89097C12.1199 4.82716 12.812 6.11791 14.75 7.23681C14.8454 7.2919 14.9397 7.34416 15.0328 7.39372Z"})),Lo=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M11.5697 12.5532L12.1617 13.0137V13.0137L11.5697 12.5532ZM11.3142 3.64586L12.0065 3.93432V3.93432L11.3142 3.64586ZM18.555 14.5045C18.8336 14.198 18.811 13.7237 18.5045 13.445C18.198 13.1664 17.7237 13.189 17.445 13.4955L18.555 14.5045ZM17.7087 14.3204L17.1538 13.8159L17.1538 13.8159L17.7087 14.3204ZM21.2426 10.7426L21.7773 10.2166L21.773 10.2123L21.2426 10.7426ZM21.4531 12.026C21.7436 12.3213 22.2184 12.3251 22.5137 12.0346C22.809 11.7442 22.8129 11.2693 22.5224 10.974L21.4531 12.026ZM5.7327 19.0428C5.31848 19.0428 4.9827 19.3786 4.9827 19.7928C4.9827 20.207 5.31848 20.5428 5.7327 20.5428V19.0428ZM3.5 15.75C3.08579 15.75 2.75 16.0858 2.75 16.5C2.75 16.9142 3.08579 17.25 3.5 17.25V15.75ZM8.19231 3.35575C8.35162 2.9734 8.17081 2.5343 7.78846 2.37498C7.40611 2.21567 6.96701 2.39648 6.80769 2.77883L8.19231 3.35575ZM6.80769 15.2885C6.96701 15.6708 7.40611 15.8516 7.78846 15.6923C8.17081 15.533 8.35162 15.0939 8.19231 14.7115L6.80769 15.2885ZM11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5C10.25 6.91421 10.5858 7.25 11 7.25V5.75ZM19.876 16.916C20.1057 17.2607 20.5714 17.3538 20.916 17.124C21.2607 16.8943 21.3538 16.4286 21.124 16.084L19.876 16.916ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75C2.75 6.89137 6.89137 2.75 12 2.75V1.25ZM12 12.75H12.0917V11.25H12V12.75ZM11.408 11.5395L10.9777 12.0928L12.1617 13.0137L12.592 12.4605L11.408 11.5395ZM11.3077 1.71154L10.6219 3.35739L12.0065 3.93432L12.6923 2.28846L11.3077 1.71154ZM17.445 13.4955L17.1538 13.8159L18.2637 14.8249L18.555 14.5045L17.445 13.4955ZM20.708 11.2686L21.4531 12.026L22.5224 10.974L21.7773 10.2167L20.708 11.2686ZM17.1538 13.8159C14.2838 16.9729 9.96086 19.0428 5.7327 19.0428V20.5428C10.4211 20.5428 15.1357 18.2657 18.2637 14.8249L17.1538 13.8159ZM10.6219 3.35739C9.39039 6.31308 9.66695 9.68222 11.364 12.3975L12.636 11.6025C11.1965 9.29929 10.9619 6.44145 12.0065 3.93432L10.6219 3.35739ZM10.9777 12.0928C9.18293 14.4003 6.42334 15.75 3.5 15.75V17.25C6.88622 17.25 10.0828 15.6866 12.1617 13.0137L10.9777 12.0928ZM6.80769 2.77883C5.13077 6.80344 5.13077 11.2638 6.80769 15.2885L8.19231 14.7115C6.66923 11.0562 6.66923 7.01114 8.19231 3.35575L6.80769 2.77883ZM11 7.25C14.6428 7.25 18.1364 8.6971 20.7123 11.273L21.773 10.2123C18.9158 7.35514 15.0406 5.75 11 5.75V7.25ZM12.0917 12.75C15.2197 12.75 18.1408 14.3133 19.876 16.916L21.124 16.084C19.1107 13.064 15.7213 11.25 12.0917 11.25V12.75Z"})),So=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.9386 4.73542C13.3511 4.69785 13.716 5.0018 13.7535 5.4143C13.8024 5.95058 13.893 6.53361 14.045 7.14711C14.1447 7.54916 13.8995 7.95586 13.4974 8.05549C13.0954 8.15512 12.6887 7.90997 12.5891 7.50791C12.4172 6.81421 12.3148 6.15558 12.2597 5.55036C12.2221 5.13785 12.5261 4.77299 12.9386 4.73542ZM5.23942 9.18054C5.47821 8.84208 5.94616 8.76129 6.28461 9.00008C6.78119 9.35043 7.30041 9.76836 7.81522 10.2641C8.1136 10.5514 8.12256 11.0262 7.83525 11.3246C7.54794 11.6229 7.07315 11.6319 6.77478 11.3446C6.31949 10.9062 5.85988 10.5362 5.41988 10.2257C5.08142 9.98694 5.00063 9.51899 5.23942 9.18054ZM13.836 8.99599C14.2094 8.81661 14.6574 8.97385 14.8368 9.3472C14.9605 9.60468 15.097 9.86417 15.2474 10.1247C15.3979 10.3852 15.5543 10.6332 15.7155 10.869C15.9491 11.2111 15.8612 11.6778 15.5192 11.9114C15.1772 12.145 14.7105 12.0572 14.4769 11.7151C14.2947 11.4485 14.118 11.1685 13.9484 10.8747C13.7788 10.5809 13.6246 10.2879 13.4848 9.99681C13.3054 9.62346 13.4627 9.17538 13.836 8.99599ZM8.48046 12.088C8.82249 11.8544 9.28917 11.9422 9.52281 12.2843C9.70496 12.5509 9.88164 12.8309 10.0513 13.1247C10.2209 13.4185 10.375 13.7115 10.5149 14.0026C10.6943 14.3759 10.537 14.824 10.1637 15.0034C9.79032 15.1828 9.34223 15.0256 9.16285 14.6522C9.03914 14.3947 8.90267 14.1352 8.75225 13.8747C8.60182 13.6142 8.44534 13.3662 8.28421 13.1304C8.05057 12.7883 8.13843 12.3217 8.48046 12.088ZM16.1644 12.6748C16.4517 12.3765 16.9265 12.3675 17.2249 12.6548C17.6802 13.0932 18.1398 13.4632 18.5798 13.7737C18.9183 14.0125 18.9991 14.4804 18.7603 14.8189C18.5215 15.1573 18.0535 15.2381 17.7151 14.9993C17.2185 14.649 16.6993 14.2311 16.1845 13.7353C15.8861 13.448 15.8771 12.9732 16.1644 12.6748ZM10.5022 15.9439C10.9043 15.8443 11.311 16.0894 11.4106 16.4915C11.5825 17.1852 11.6849 17.8438 11.74 18.4491C11.7776 18.8616 11.4736 19.2264 11.0611 19.264C10.6486 19.3016 10.2837 18.9976 10.2462 18.5851C10.1973 18.0488 10.1067 17.4658 9.95466 16.8523C9.85502 16.4502 10.1002 16.0436 10.5022 15.9439Z"}),m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2859 1.32632C11.0551 1.05591 8.71992 1.48034 6.62484 2.68993C1.4832 5.65846 -0.278462 12.2331 2.69007 17.3747C5.6586 22.5164 12.2332 24.278 17.3748 21.3095C19.4699 20.0999 21.0051 18.2898 21.8863 16.2227C23.1661 13.2206 23.0684 9.67094 21.3096 6.62471C19.5509 3.57847 16.5256 1.71902 13.2859 1.32632ZM13.7802 3.08033C13.7309 3.49161 13.3576 3.7851 12.9463 3.73585C12.5351 3.68661 12.2416 3.31329 12.2908 2.90201C12.297 2.85081 12.3032 2.8013 12.3096 2.75354C10.638 2.6958 8.93097 3.09054 7.37484 3.98897C5.81951 4.88694 4.62362 6.16839 3.83764 7.64494C3.88216 7.66328 3.92814 7.68258 3.97552 7.70286C4.35631 7.86585 4.53288 8.30668 4.36989 8.68748C4.20689 9.06827 3.76606 9.24484 3.38527 9.08184C3.33556 9.06057 3.2878 9.04062 3.24212 9.02195C2.41524 11.457 2.60225 14.2226 3.98911 16.6247C5.37596 19.0268 7.67752 20.5716 10.1998 21.073C10.2065 21.0241 10.2131 20.9728 10.2195 20.9191C10.2687 20.5078 10.6421 20.2143 11.0533 20.2636C11.4646 20.3128 11.7581 20.6861 11.7089 21.0974C11.7027 21.1486 11.6965 21.198 11.6901 21.2458C13.3618 21.3034 15.0695 20.9084 16.6248 20.0104C18.181 19.112 19.3764 17.831 20.1621 16.3545C20.1176 16.3362 20.0716 16.3168 20.0242 16.2966C19.6434 16.1336 19.4668 15.6927 19.6298 15.3119C19.7928 14.9311 20.2336 14.7546 20.6144 14.9176C20.6641 14.9388 20.7119 14.9588 20.7576 14.9775C21.5849 12.5411 21.3972 9.77639 20.0106 7.37471C18.624 4.97302 16.3236 3.42808 13.7999 2.92639C13.7932 2.97529 13.7866 3.02664 13.7802 3.08033Z"})),ko=e=>m.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.1665 2.75836L21.2416 8.83351C21.2677 7.81177 21.2303 6.84352 21.1649 5.98862C21.0341 4.27797 19.722 2.96586 18.0114 2.83507C17.1565 2.76971 16.1882 2.7323 15.1665 2.75836ZM21.1071 10.8203L13.1797 2.89285C10.483 3.1978 7.77958 4.04236 5.91097 5.91097C4.04236 7.77958 3.1978 10.483 2.89285 13.1797L10.8203 21.1071C13.517 20.8022 16.2204 19.9576 18.089 18.089C19.9576 16.2204 20.8022 13.517 21.1071 10.8203ZM8.83351 21.2416L2.75836 15.1665C2.7323 16.1882 2.76971 17.1565 2.83507 18.0114C2.96587 19.722 4.27797 21.0341 5.98861 21.1649C6.84352 21.2303 7.81177 21.2677 8.83351 21.2416ZM13.3854 1.36321C15.1096 1.19733 16.7638 1.2353 18.1257 1.33944C20.5746 1.52667 22.4733 3.4254 22.6606 5.87426C22.7647 7.23618 22.8027 8.89045 22.6368 10.6146C22.3524 13.5707 21.4579 16.8414 19.1497 19.1497C16.8414 21.4579 13.5707 22.3524 10.6146 22.6368C8.89045 22.8027 7.23618 22.7647 5.87426 22.6606C3.4254 22.4733 1.52667 20.5746 1.33944 18.1257C1.2353 16.7638 1.19733 15.1096 1.36321 13.3854C1.6476 10.4293 2.54206 7.15857 4.85031 4.85031C7.15857 2.54206 10.4293 1.6476 13.3854 1.36321ZM11.9426 8.1601C12.2355 7.86721 12.7104 7.86721 13.0032 8.1601L13.8914 9.0482L14.7795 8.1601C15.0723 7.86721 15.5472 7.86721 15.8401 8.1601C16.133 8.45299 16.133 8.92787 15.8401 9.22076L14.952 10.1089L15.8401 10.997C16.133 11.2899 16.133 11.7647 15.8401 12.0576C15.5472 12.3505 15.0723 12.3505 14.7795 12.0576L13.8914 11.1695L13.0608 12.0001L13.9489 12.8882C14.2418 13.1811 14.2418 13.656 13.9489 13.9489C13.656 14.2418 13.1811 14.2418 12.8882 13.9489L12.0001 13.0608L11.1695 13.8914L12.0576 14.7795C12.3505 15.0723 12.3505 15.5472 12.0576 15.8401C11.7647 16.133 11.2899 16.133 10.997 15.8401L10.1089 14.952L9.22076 15.8401C8.92787 16.133 8.45299 16.133 8.1601 15.8401C7.86721 15.5472 7.86721 15.0723 8.1601 14.7795L9.0482 13.8914L8.1601 13.0032C7.86721 12.7104 7.86721 12.2355 8.1601 11.9426C8.45299 11.6497 8.92787 11.6497 9.22076 11.9426L10.1089 12.8307L10.9394 12.0001L10.0513 11.112C9.75845 10.8191 9.75845 10.3442 10.0513 10.0513C10.3442 9.75845 10.8191 9.75845 11.112 10.0513L12.0001 10.9394L12.8307 10.1089L11.9426 9.22076C11.6497 8.92787 11.6497 8.45299 11.9426 8.1601Z"})),Eo=e=>m.createElement("svg",{fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 32 32","data-name":"Layer 1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("rect",{height:1,transform:"translate(20 51) rotate(180)",width:16,x:2,y:25}),m.createElement("rect",{height:1,transform:"translate(26 59) rotate(180)",width:16,x:5,y:29}),m.createElement("rect",{height:1,transform:"translate(39 -8) rotate(90)",width:19,x:14,y:15}),m.createElement("rect",{height:1,transform:"translate(21 10) rotate(90)",width:19,x:-4,y:15}),m.createElement("path",{d:"M24,25H23v2a2,2,0,0,1-2,2H20v1h1a3,3,0,0,0,3-3Z"}),m.createElement("path",{d:"M17,26h1v1a2,2,0,0,0,2,2h1v1H20a3,3,0,0,1-3-3Z"}),m.createElement("path",{d:"M2,26H3v1a2,2,0,0,0,2,2H6v1H5a3,3,0,0,1-3-3Z"}),m.createElement("rect",{height:1,width:6,x:24,y:6}),m.createElement("rect",{height:1,width:19,x:8,y:2}),m.createElement("path",{d:"M5,6H6V5A2,2,0,0,1,8,3H9V2H8A3,3,0,0,0,5,5Z"}),m.createElement("path",{d:"M23,6h1V5a2,2,0,0,1,2-2h1V2H26a3,3,0,0,0-3,3Z"}),m.createElement("path",{d:"M30,6H29V5a2,2,0,0,0-2-2H26V2h1a3,3,0,0,1,3,3Z"})),Bo=y.div`
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
`,To=y.div`
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
`,Io=y.div`
  padding: 20px 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 2px solid ${({theme:e})=>e.mainBGColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme:e})=>e.ContainerBGColor};
`,zo=y.h2`
  margin: 0;
  font-size: 24px;
  color: ${({theme:e})=>e.textBlack};
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Ro=y.button`
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
`,Po=y.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`,Go=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  @media (max-width: 768px) {
    gap: 6px;
  }
`,Fo=y.button`
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
`,Do=y.div`
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
`,Xo=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
`,Zo=y.div`
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
`,Ao=y.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.textBlack};
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,Ho=y.div`
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
  width: ${e=>{const c=e.fieldWidth,i=e.fieldHeight,o=100/c,d=80/i,s=Math.min(o,d);return`${c*s}px`}};
  height: ${e=>{const c=e.fieldWidth,i=e.fieldHeight,o=100/c,d=80/i,s=Math.min(o,d);return`${i*s}px`}};
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
`,jo={FOOTBALL:[{id:"football_standard",name:"Стандартне поле",width:105,height:68},{id:"football_small",name:"Мале поле",width:90,height:45},{id:"football_futsal",name:"Футзал",width:40,height:20}],BASKETBALL:[{id:"basketball_nba",name:"NBA",width:28.65,height:15.24},{id:"basketball_fiba",name:"FIBA",width:28,height:15}],VOLLEYBALL:[{id:"volleyball_indoor",name:"Закритий майданчик",width:18,height:9},{id:"volleyball_beach",name:"Пляжний майданчик",width:16,height:8}],TENNIS:[{id:"tennis_singles",name:"Одиночний розряд",width:23.77,height:8.23},{id:"tennis_doubles",name:"Парний розряд",width:23.77,height:10.97}],RUGBY:[{id:"rugby_standard",name:"Регбі (15 гравців)",width:100,height:70},{id:"rugby_sevens",name:"Регбі-7",width:94,height:68}],HANDBALL:[{id:"handball_standard",name:"Гандбол",width:40,height:20}],SHEET:[{id:"a4_portrait",name:"A4 Портрет",width:21,height:29.7},{id:"a4_landscape",name:"A4 Ландшафт",width:29.7,height:21},{id:"a3_portrait",name:"A3 Портрет",width:29.7,height:42},{id:"a3_landscape",name:"A3 Ландшафт",width:42,height:29.7},{id:"a3_landscape1",name:"A3 Ландшафт",width:600,height:29.7},{id:"a3_landscape2",name:"A3 Ландшафт",width:2,height:529.7}]},Vo=[{id:"FOOTBALL",name:"Футбол",icon:Vt},{id:"RUGBY",name:"Регбі",icon:ko},{id:"BASKETBALL",name:"Баскетбол",icon:$o},{id:"VOLLEYBALL",name:"Волейбол",icon:Lo},{id:"TENNIS",name:"Теніс",icon:So},{id:"HANDBALL",name:"Гандбол",icon:Vt},{id:"SHEET",name:"Аркуш",icon:Eo}],Oo=({isOpen:e,onClose:t,onSelectField:r,currentFieldId:c})=>{var l;const[i,o]=m.useState("FOOTBALL"),[d,s]=m.useState(c);if(!e)return null;const p=a=>{s(a.id),r(a),setTimeout(()=>t(),300)},g=a=>{a.target===a.currentTarget&&t()},x=(a,u)=>u==="SHEET"?`${a.width}см × ${a.height}см`:`${a.width}м × ${a.height}м`,h=(a,u)=>u==="SHEET"?`${a}см`:`${a}м`;return n.jsx(Bo,{onClick:g,children:n.jsxs(To,{children:[n.jsxs(Io,{children:[n.jsx(zo,{children:"Обрати спортивне поле"}),n.jsx(Ro,{onClick:t,children:n.jsx(jn,{})})]}),n.jsxs(Po,{children:[n.jsx(Go,{children:Vo.map(a=>{const u=a.icon;return n.jsxs(Fo,{active:i===a.id,onClick:()=>o(a.id),children:[n.jsx(Yo,{children:n.jsx(u,{})}),a.name]},a.id)})}),n.jsx(Do,{children:n.jsx(Xo,{children:(l=jo[i])==null?void 0:l.map(a=>n.jsxs(Zo,{selected:d===a.id,onClick:()=>p(a),children:[n.jsx(Ao,{children:a.name}),n.jsx(Ho,{children:x(a,i)}),n.jsx(Wo,{children:n.jsxs(_o,{fieldWidth:a.width,fieldHeight:a.height,children:[n.jsx(Ot,{className:"width",children:h(a.width,i)}),n.jsx(Ot,{className:"height",children:h(a.height,i)})]})})]},a.id))})})]})]})})},No=y(so)`
  width: 80%;
  height: 80%;
  stroke: ${({theme:e})=>e.textBlack};
   fill: ${({theme:e})=>e.textBlack};
`,qo=y(kn)`
  width: 100%;
  height: 100%;
   fill: ${({theme:e})=>e.black};
   rotate: 180deg;
`,Uo=y(ao)`
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.textBlack};
`,Jo=y(Sn)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.textBlack};
`,Ko=y(Sn)`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  fill: ${({theme:e})=>e.textBlack};
`,Qo=y(ro)`
  width: 70%;  
  height: 70%;
  stroke: ${({theme:e})=>e.textBlack};
`,ei=y(oo)`
  width: 70%;  
  height: 70%;
  fill: ${({theme:e})=>e.textBlack};
`,ti=y(io)`
  width: 70%;  
  height: 70%;
  fill: ${({theme:e})=>e.textBlack};
`,ni=y.div`
  width: 100%;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-bottom: 2px solid ${({theme:e})=>e.gray};
  padding: 12px 16px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`,ri=y.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`,oi=y.div`
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
`,ii=y.div`
  flex-shrink: 0;
  position: relative;
  z-index: 10;
`,xe=y.button`
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

`,ai=y.button`
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
  
`,si=y(no)`
  width: 60%;
  height: 60%;
  fill: none;
  stroke: ${({theme:e})=>e.textBlack};
`,it=y.div`
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
`,li=y.input`
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
`,Jt=({value:e,onChange:t,...r})=>{const[c,i]=m.useState(e),o=m.useRef(null);m.useEffect(()=>{o.current||i(e)},[e]);const d=s=>{const p=s.target.value;i(p),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{t(p),o.current=null},200)};return n.jsx(li,{type:"color",value:c,onChange:d,...r})},ci=({currentField:e,onSelectField:t,isSidebarOpen:r,onToggleSidebar:c})=>{const[i,o]=m.useState(!1),d=pe(),{activeTool:s,team1:p,team2:g,historyIndex:x,history:h}=Be(b=>b.tacticsBoard),l=()=>{o(!0)},a=()=>{o(!1)},u=b=>{t(b),a()},f=b=>{d(Oe(b))},w=b=>{d(Oe(`shape_${b.id}`))},$=b=>{d(Oe(`figure_${b.id}`))},C=b=>{const P=parseInt(b.target.value)||0;d(Vn(Math.max(0,Math.min(30,P))))},v=b=>{d(On(b))},L=b=>{const P=parseInt(b.target.value)||0;d(Nn(Math.max(0,Math.min(30,P))))},k=b=>{d(qn(b))},S=()=>{d(Un())},T=()=>{d(Jn())},F=()=>{window.confirm("Ви впевнені, що хочете очистити всю дошку?")&&d(Kn())},z=x>0,M=x<h.length-1;return n.jsxs(n.Fragment,{children:[n.jsx(ni,{children:n.jsxs(ri,{children:[n.jsxs(oi,{children:[n.jsx(xe,{title:"Обрати поле",onClick:l,children:n.jsx(si,{})}),n.jsx(it,{}),n.jsx(xe,{title:"Курсор (виділення та переміщення)",active:s==="cursor",onClick:()=>f("cursor"),children:n.jsx(Qo,{})}),n.jsx(xe,{title:"Додати текст",active:s==="text",onClick:()=>f("text"),children:n.jsx(No,{})}),n.jsx(xe,{title:"Малювання",active:s==="drawing",onClick:()=>f("drawing"),children:n.jsx(ei,{})}),n.jsx(xe,{title:"Ластик",active:s==="eraser",onClick:()=>f("eraser"),children:n.jsx(ti,{})}),n.jsx(yo,{activeTool:s,onSelectShape:w}),n.jsx(Mo,{activeTool:s,onSelectFigure:$}),n.jsx(it,{}),n.jsxs(Nt,{children:[n.jsx(qt,{children:"К1:"}),n.jsx(Ut,{type:"number",min:"0",max:"30",value:p.count,onChange:C,title:"Кількість гравців команди 1"}),n.jsx(Jt,{value:p.color,onChange:v,title:"Колір команди 1"})]}),n.jsxs(Nt,{children:[n.jsx(qt,{children:"К2:"}),n.jsx(Ut,{type:"number",min:"0",max:"30",value:g.count,onChange:L,title:"Кількість гравців команди 2"}),n.jsx(Jt,{value:g.color,onChange:k,title:"Колір команди 2"})]}),n.jsx(it,{}),n.jsx(xe,{title:"М'яч",active:s==="ball",onClick:()=>f("ball"),children:"⚽"}),n.jsx(it,{}),n.jsx(xe,{title:"Назад (Undo)",onClick:S,disabled:!z,children:n.jsx(Ko,{})}),n.jsx(xe,{title:"Вперед (Redo)",onClick:T,disabled:!M,children:n.jsx(Jo,{})}),n.jsx(xe,{title:"Скасувати все",onClick:F,children:n.jsx(Uo,{})})]}),n.jsx(ii,{children:n.jsx(ai,{title:"Відкрити панель інструментів",active:r,onClick:c,children:n.jsx(qo,{})})})]})}),n.jsx(Oo,{isOpen:i,onClose:a,onSelectField:u,currentFieldId:e.id})]})},di=y.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,hi=y.div`
  display: grid;
  grid-template-columns: 40px 1fr 80px;
  gap: 8px;
  align-items: center;
`,pi=y.div`
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
`,ui=y.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  border: 2px solid ${({theme:e})=>e.lightGreen||"#ccc"};
  cursor: pointer;
  overflow: hidden;
`,gi=y.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,xi=y.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,fi=y.input`
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
`,mi=y.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
`,yi=y.div`
  position: relative;
`,Ci=y.input`
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
`,wi=y.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
  display: block;
  text-align: center;
  margin-top: 2px;
`,Kt=e=>Math.max(0,Math.min(1,e/100)),bi=e=>Math.round(Math.max(0,Math.min(100,e*100))),Qt=(e,t=1)=>{if(!e)return"0, 0, 0, 1";let r=e.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const c=parseInt(r.slice(0,2),16),i=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`${c}, ${i}, ${o}, ${t}`},ce=({color:e,opacity:t,onColorChange:r,onOpacityChange:c,label:i})=>{const[o,d]=m.useState(e||"#000000"),[s,p]=m.useState(t!==void 0?t:100),g=m.useRef(null),x=m.useRef(null),h=m.useRef(null),l=m.useMemo(()=>{const L=Kt(s);return Qt(o,L)},[o,s]),[a,u]=m.useState(l),f=m.useMemo(()=>{const L=Kt(s);return{backgroundColor:`rgba(${Qt(o,L)})`}},[o,s]);m.useEffect(()=>{x.current||(d(e||"#000000"),p(t!==void 0?t:100))},[e,t]),m.useEffect(()=>{document.activeElement!==h.current&&u(l)},[l]);const w=L=>{const k=L.target.value;d(k),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{r&&r(k),x.current=null},150)},$=L=>{const k=L.target.value;u(k);const S=k.split(",").map(T=>parseFloat(T.trim()));if(S.length>=3&&!S.some(isNaN)){const T=Math.max(0,Math.min(255,S[0]||0)),F=Math.max(0,Math.min(255,S[1]||0)),z=Math.max(0,Math.min(255,S[2]||0)),M=S[3]!==void 0?Math.max(0,Math.min(1,S[3])):1,b=`#${((1<<24)+(T<<16)+(F<<8)+z).toString(16).slice(1)}`,P=bi(M);d(b),p(P),x.current&&clearTimeout(x.current),r&&r(b),c&&c(P)}},C=L=>{let k=L.target.value,S=parseInt(k);isNaN(S)&&(S=0),S>100&&(S=100),S<0&&(S=0),p(S),c&&c(S)},v=()=>{g.current&&g.current.click()};return n.jsxs("div",{children:[i&&n.jsx(di,{children:i}),n.jsxs(hi,{children:[n.jsxs(pi,{children:[n.jsx(ui,{style:f,onClick:v}),n.jsx(gi,{ref:g,type:"color",value:o,onChange:w})]}),n.jsxs(xi,{children:[n.jsx(fi,{ref:h,type:"text",value:a,onChange:$,placeholder:"0, 0, 0, 1"}),n.jsx(mi,{children:"RGBA"})]}),n.jsxs(yi,{children:[n.jsx(Ci,{type:"number",min:"0",max:"100",value:s,onChange:C}),n.jsx(wi,{children:"Прозорість %"})]})]})]})},vi=y.div`
  position: relative;
  width: 100%;
`,Mi=y.button`
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
`,$i=y.div`
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
`,Li=y.div`
  padding: 6px 8px;
  font-family: ${({$fontFamily:e})=>e||"Arial"};
  cursor: pointer;
  color: ${({theme:e})=>e.textBlack};
  background-color: ${({selected:e,theme:t})=>e?t.lightGreen:"transparent"};

  &:hover {
    background-color: ${({theme:e})=>e.greenMain};
    color: ${({theme:e})=>e.white};
  }
`,Si=y(Lr)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) rotate(${({$open:e})=>e?"180deg":"0"});
  width: 20px;
  height: 20px;
  stroke: ${({theme:e})=>e.iconColor};
  transition: transform 0.3s ease;
`,he=({value:e,onChange:t,options:r=[],placeholder:c="Оберіть..."})=>{const[i,o]=m.useState(!1),d=m.useRef(null),s=()=>o(h=>!h),p=()=>o(!1),g=h=>{t(h),p()};m.useEffect(()=>{const h=l=>{d.current&&!d.current.contains(l.target)&&p()};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]);const x=r.find(h=>h.value===e);return n.jsxs(vi,{ref:d,children:[n.jsxs(Mi,{onClick:s,$fontFamily:x==null?void 0:x.value,children:[x?x.label:c,n.jsx(Si,{$open:i})]}),i&&n.jsx($i,{children:r.map(h=>n.jsx(Li,{onClick:()=>g(h.value),selected:h.value===e,$fontFamily:h.value,children:h.label},h.value))})]})},ki="/coaching-draft/assets/brush_marker-9c4a6bad.png",Ei="/coaching-draft/assets/brush_pencil-33e6165e.png",Bi="/coaching-draft/assets/brush_pen-07c57dd9.png",Ti="/coaching-draft/assets/brush_oil-91e92a78.png",Ii="/coaching-draft/assets/brush_watercolor-e5ec0b25.png",zi="/coaching-draft/assets/brush_spray-d0145476.png",en=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,Ri=y.h3`
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
`,tn=y.label`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Pi=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Gi=y.input.attrs({type:"range"})`
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
`,Fi=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 10px;
`,Ie=y.button`
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
`,nn=()=>{const e=pe(),{drawColor:t,brushSize:r,brushOpacity:c,brushStyle:i,lineType:o,selectedObjectId:d,paths:s}=Be(b=>b.tacticsBoard),p=d&&d.startsWith("path_")?parseInt(d.replace("path_","")):-1,g=p>=0?s[p]:null,x=g?g.brushStyle:i,h=g?g.color:t,l=g?g.opacity!==void 0?g.opacity:100:c,a=g?g.brushSize:r,u=g?g.lineType:o,[f,w]=m.useState(a),[$,C]=m.useState(50),[v,L]=m.useState(!0);m.useEffect(()=>{switch(w(a),g?g.brushStyle:i){case"hard":C(50),L(!0);break;case"pencil":C(20),L(!0);break;case"calligraphy":C(30),L(!1);break;case"oil":C(60),L(!1);break;case"watercolor":C(80),L(!1);break;case"splatter":C(100),L(!1);break;default:C(50),L(!0)}},[d,a,g,i]);const k=b=>{g?e(ke({index:p,updates:{brushStyle:b,lineType:["oil","watercolor","splatter","calligraphy"].includes(b)?"solid":u}})):(e(Qn(b)),["oil","watercolor","splatter","calligraphy"].includes(b)&&e(Xt("solid")))},S=b=>{e(g?ke({index:p,updates:{color:b}}):er(b))},T=b=>{e(g?ke({index:p,updates:{opacity:b}}):tr(b))},F=b=>{w(parseInt(b.target.value))},z=()=>{e(g?ke({index:p,updates:{brushSize:f}}):nr(f))},M=b=>{e(g?ke({index:p,updates:{lineType:b}}):Xt(b))};return n.jsxs(n.Fragment,{children:[n.jsxs(en,{children:[n.jsx(Ri,{children:g?"Пензель":"Тип пензля"}),n.jsxs(Fi,{children:[n.jsx(Ie,{active:x==="hard",onClick:()=>k("hard"),title:"Маркер",children:n.jsx("img",{src:ki,alt:"Маркер"})}),n.jsx(Ie,{active:x==="pencil",onClick:()=>k("pencil"),title:"Олівець",children:n.jsx("img",{src:Ei,alt:"Олівець"})}),n.jsx(Ie,{active:x==="calligraphy",onClick:()=>k("calligraphy"),title:"Перо",children:n.jsx("img",{src:Bi,alt:"Перо"})}),n.jsx(Ie,{active:x==="oil",onClick:()=>k("oil"),title:"Олія",children:n.jsx("img",{src:Ti,alt:"Олія"})}),n.jsx(Ie,{active:x==="watercolor",onClick:()=>k("watercolor"),title:"Акварель",children:n.jsx("img",{src:Ii,alt:"Акварель"})}),n.jsx(Ie,{active:x==="splatter",onClick:()=>k("splatter"),title:"Спрей",children:n.jsx("img",{src:zi,alt:"Спрей"})})]})]}),n.jsxs(en,{children:[n.jsx(wt,{children:n.jsx(ce,{color:h,opacity:l,onColorChange:S,onOpacityChange:T,label:"Колір та прозорість"})}),n.jsxs(wt,{children:[n.jsxs(tn,{children:["Товщина лінії",n.jsxs(Pi,{children:[f,"px"]})]}),n.jsx(Gi,{min:"1",max:$,value:f,onChange:F,onMouseUp:z,onTouchEnd:z})]}),v&&n.jsxs(wt,{children:[n.jsx(tn,{children:"Тип лінії"}),n.jsx(he,{value:u||"solid",onChange:M,options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]})]})},Yi=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Di=y.h3`
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
`,Xi=y.textarea`
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
`,at=y.input.attrs({type:"range"})`
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
`,st=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Zi=y.div`
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
`,Ai=({selectedObject:e})=>{const t=pe(),[r,c]=m.useState(e.text||"");m.useEffect(()=>{c(e.text||"")},[e.id,e.text]);const i=(d,s)=>{t(Ne({id:e.id,updates:{[d]:s}}))},o=d=>{const s=d.target.value;c(s),i("text",s)};return n.jsxs(Yi,{children:[n.jsx(Di,{children:"Властивості тексту"}),n.jsxs(me,{children:[n.jsx(Le,{children:"Текст"}),n.jsx(Xi,{value:r,onChange:o,placeholder:"Введіть текст...",$fontFamily:e.fontFamily})]}),n.jsx(me,{children:n.jsx(ce,{color:e.color||"#000000",opacity:e.opacity||100,onColorChange:d=>i("color",d),onOpacityChange:d=>i("opacity",d),label:"Колір і прозорість"})}),n.jsxs(me,{children:[n.jsxs(Le,{children:["Розмір шрифту",n.jsxs(st,{children:[e.fontSize||16,"px"]})]}),n.jsx(at,{min:"8",max:"200",value:e.fontSize||16,onChange:d=>i("fontSize",Number(d.target.value))})]}),n.jsxs(me,{children:[n.jsx(Le,{children:"Тип шрифту"}),n.jsx(he,{value:e.fontFamily||"Arial",onChange:d=>i("fontFamily",d),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(me,{children:[n.jsx(Le,{children:"Стиль тексту"}),n.jsxs(Zi,{children:[n.jsx(bt,{$active:e.fontWeight==="bold",onClick:()=>i("fontWeight",e.fontWeight==="bold"?"normal":"bold"),children:n.jsx("strong",{children:"B"})}),n.jsx(bt,{$active:e.fontStyle==="italic",onClick:()=>i("fontStyle",e.fontStyle==="italic"?"normal":"italic"),children:n.jsx("em",{children:"I"})}),n.jsx(bt,{$active:e.textDecoration==="underline",onClick:()=>i("textDecoration",e.textDecoration==="underline"?"none":"underline"),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(me,{children:[n.jsxs(Le,{children:["Міжрядковий інтервал",n.jsx(st,{children:(e.lineHeight||.9).toFixed(1)})]}),n.jsx(at,{min:"0.5",max:"3",step:"0.1",value:e.lineHeight||.9,onChange:d=>i("lineHeight",Number(d.target.value))})]}),n.jsxs(me,{children:[n.jsxs(Le,{children:["Міжлітерний інтервал",n.jsxs(st,{children:[e.letterSpacing||0,"px"]})]}),n.jsx(at,{min:"-2",max:"10",step:"0.5",value:e.letterSpacing||0,onChange:d=>i("letterSpacing",Number(d.target.value))})]}),n.jsxs(me,{children:[n.jsxs(Le,{children:["Поворот тексту",n.jsxs(st,{children:[e.rotation||0,"°"]})]}),n.jsx(at,{min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:d=>i("rotation",Number(d.target.value))})]})]})},Hi=y.div`
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
`,ze=y.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ze=y.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,vt=y.input.attrs({type:"range"})`
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
`,ji=()=>{const e=pe(),{textColor:t,textOpacity:r,textFontSize:c,textFontFamily:i,textFontWeight:o,textFontStyle:d,textDecoration:s,textLineHeight:p,textLetterSpacing:g}=Be(x=>x.tacticsBoard);return n.jsxs(Hi,{children:[n.jsx(Wi,{children:"Налаштування тексту"}),n.jsx(ze,{children:n.jsx(ce,{color:t,opacity:r,onColorChange:x=>e(rr(x)),onOpacityChange:x=>e(or(x)),label:"Колір і прозорість"})}),n.jsxs(ze,{children:[n.jsxs(Ze,{children:["Розмір шрифту",n.jsxs(Mt,{children:[c,"px"]})]}),n.jsx(vt,{type:"range",min:"8",max:"200",value:c,onChange:x=>e(ir(Number(x.target.value)))})]}),n.jsxs(ze,{children:[n.jsx(Ze,{children:"Тип шрифту"}),n.jsx(he,{value:i,onChange:x=>e(ar(x)),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(ze,{children:[n.jsx(Ze,{children:"Стиль тексту"}),n.jsxs(_i,{children:[n.jsx($t,{$active:o==="bold",onClick:()=>e(sr(o==="bold"?"normal":"bold")),children:n.jsx("strong",{children:"B"})}),n.jsx($t,{$active:d==="italic",onClick:()=>e(lr(d==="italic"?"normal":"italic")),children:n.jsx("em",{children:"I"})}),n.jsx($t,{$active:s==="underline",onClick:()=>e(cr(s==="underline"?"none":"underline")),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(ze,{children:[n.jsxs(Ze,{children:["Міжрядковий інтервал",n.jsx(Mt,{children:p})]}),n.jsx(vt,{type:"range",min:"0.5",max:"3",step:"0.1",value:p,onChange:x=>e(dr(Number(x.target.value)))})]}),n.jsxs(ze,{children:[n.jsxs(Ze,{children:["Міжлітерний інтервал",n.jsxs(Mt,{children:[g,"px"]})]}),n.jsx(vt,{type:"range",min:"-2",max:"10",step:"0.5",value:g,onChange:x=>e(hr(Number(x.target.value)))})]})]})},Vi=y.div`
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
`,on=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Ni=y.div`
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
`,lt=8,qi=({selectedObject:e})=>{const t=pe(),r=(o,d)=>{t(Ne({id:e.id,updates:{[o]:d}}))},c=(o,d)=>{let s=Number(d);s<lt&&(s=lt);const p=(e[o]||1)<0?-1:1;s*=p,r(o,s)},i=e.shape==="line"||e.shape==="arrow";return n.jsxs(Vi,{children:[n.jsx(Oi,{children:"Властивості фігури"}),!i&&n.jsxs(ye,{children:[n.jsx(Ce,{children:"Розміри"}),n.jsxs(Ni,{children:[n.jsxs("div",{children:[n.jsx(Ce,{style:{fontSize:"10px",marginBottom:"4px"},children:"Ширина"}),n.jsx(an,{type:"number",min:lt,value:Math.abs(e.width||50),onChange:o=>c("width",o.target.value)})]}),n.jsxs("div",{children:[n.jsx(Ce,{style:{fontSize:"10px",marginBottom:"4px"},children:"Висота"}),n.jsx(an,{type:"number",min:lt,value:Math.abs(e.height||30),onChange:o=>c("height",o.target.value)})]})]})]}),n.jsxs(ye,{children:[n.jsxs(Ce,{children:["Кут повороту",n.jsxs(on,{children:[e.rotation||0,"º"]})]}),n.jsx(rn,{type:"range",min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:o=>r("rotation",Number(o.target.value))})]}),n.jsx(ye,{children:n.jsx(ce,{color:e.borderColor||e.color||"#000000",opacity:e.borderOpacity!==void 0?e.borderOpacity:100,onColorChange:o=>r("borderColor",o),onOpacityChange:o=>r("borderOpacity",o),label:i?"Колір лінії і прозорість":"Колір обводки і прозорість"})}),n.jsxs(ye,{children:[n.jsxs(Ce,{children:[i?"Товщина лінії":"Товщина обводки",n.jsxs(on,{children:[e.borderWidth||2,"px"]})]}),n.jsx(rn,{type:"range",min:"1",max:"20",value:e.borderWidth||2,onChange:o=>r("borderWidth",Number(o.target.value))})]}),n.jsxs(ye,{children:[n.jsx(Ce,{children:"Тип обводки"}),n.jsx(he,{value:e.borderStyle||"solid",onChange:o=>r("borderStyle",o),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]}),i&&n.jsxs(n.Fragment,{children:[n.jsxs(ye,{children:[n.jsx(Ce,{children:"Початок лінії"}),n.jsx(he,{value:e.lineCapStart||"butt",onChange:o=>r("lineCapStart",o),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(ye,{children:[n.jsx(Ce,{children:"Кінець лінії"}),n.jsx(he,{value:e.lineCapEnd||(e.shape==="arrow"?"arrow":"butt"),onChange:o=>r("lineCapEnd",o),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!i&&n.jsx(ye,{children:n.jsx(ce,{color:e.fillColor||"#ffffff",opacity:e.fillOpacity!==void 0?e.fillOpacity:0,onColorChange:o=>r("fillColor",o),onOpacityChange:o=>r("fillOpacity",o),label:"Колір заливки і прозорість"})})]})},Ui=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,Ji=y.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Re=y.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ct=y.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Ki=y.input.attrs({type:"range"})`
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
`,Qi=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,e1=y.p`
  font-size: 12px;
  color: #888;
  font-style: italic;
  margin-top: 12px;
  line-height: 1.4;
`,t1=()=>{const e=pe(),{activeTool:t,shapeBorderColor:r,shapeBorderOpacity:c,shapeFillColor:i,shapeFillOpacity:o,shapeBorderWidth:d,shapeBorderStyle:s,shapeLineCapStart:p,shapeLineCapEnd:g}=Be(h=>h.tacticsBoard),x=t==="shape_line"||t==="shape_arrow";return n.jsxs(Ui,{children:[n.jsx(Ji,{children:"Налаштування фігури"}),n.jsx(Re,{children:n.jsx(ce,{color:r,opacity:c,onColorChange:h=>e(pr(h)),onOpacityChange:h=>e(ur(h)),label:"Колір обводки та прозорість"})}),n.jsxs(Re,{children:[n.jsxs(ct,{children:["Товщина обводки",n.jsxs(Qi,{children:[d,"px"]})]}),n.jsx(Ki,{type:"range",min:"1",max:"20",value:d,onChange:h=>e(gr(Number(h.target.value)))})]}),n.jsxs(Re,{children:[n.jsx(ct,{children:"Стиль обводки"}),n.jsx(he,{value:s,onChange:h=>e(xr(h)),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть стиль"})]}),x&&n.jsxs(n.Fragment,{children:[n.jsxs(Re,{children:[n.jsx(ct,{children:"Початок лінії"}),n.jsx(he,{value:p,onChange:h=>e(fr(h)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]}),n.jsxs(Re,{children:[n.jsx(ct,{children:"Кінець лінії"}),n.jsx(he,{value:g||(t==="shape_arrow"?"arrow":"butt"),onChange:h=>e(un(h)),options:[{value:"butt",label:"Без закінчення"},{value:"round",label:"Точка"},{value:"arrow",label:"Стрілка"},{value:"bar",label:"Тупик"}],placeholder:"Оберіть тип"})]})]}),!x&&n.jsx(Re,{children:n.jsx(ce,{color:i,opacity:o,onColorChange:h=>e(mr(h)),onOpacityChange:h=>e(yr(h)),label:"Колір заливки і прозорість"})}),n.jsx(e1,{children:x?"Клікніть і потягніть, щоб намалювати лінію":"Клікніть і потягніть, щоб створити фігуру"})]})},Ae=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,He=y.h3`
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
`,dt=y.input.attrs({type:"range"})`
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
`,ht=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,n1=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
  margin-top: 10px;
`,r1=y.div`
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
`,o1=y.div`
  width: 30px; 
  height: 45px;
  background: ${({$color:e})=>e};
  border: 2px solid ${({$borderColor:e})=>e}; 
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); 
`,i1=y.div`
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
`,a1=y.button`
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
`,s1=y.button`
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
`,l1=y.span`
  font-size: 10px;
  color: ${({theme:e,$over:t})=>t?e.red:e.textGray};
  margin-top: 4px;
  display: block;
`,hn=8,pn=50,pt=100,We=3,c1=({selectedObject:e})=>{const t=pe(),r=(M,b)=>{t(Ne({id:e.id,updates:{[M]:b}}))},c=M=>{let b=Number(M);b=Math.max(hn,Math.min(pn,b)),r("radius",b)},i=M=>{const b=Math.max(0,Math.min(99,Number(M)||0));r("number",b)},o=M=>{M.length<=pt&&r("topText",M)},d=()=>{const M=e.cards||[];if(M.length<We){const b=[...M,{color:"#FFD700",cardBorderColor:"#000000"}];r("cards",b)}},s=M=>{const P=(e.cards||[]).filter((R,D)=>D!==M);r("cards",P)},p=(M,b)=>{const R=[...e.cards||[]];R[M]={...R[M],color:b},r("cards",R)},g=(M,b)=>{const R=[...e.cards||[]];R[M]={...R[M],cardBorderColor:b},r("cards",R)},x=e.radius||20,h=e.number!==void 0?e.number:1,l=e.topText||"",a=e.rotation||0,u=e.color||"#ff0000",f=e.colorOpacity!==void 0?e.colorOpacity:100,w=e.numberColor||"#ffffff",$=e.numberOpacity!==void 0?e.numberOpacity:100,C=e.textColor||"#000000",v=e.textOpacity!==void 0?e.textOpacity:100,L=e.textSize||Math.max(10,x*.5),k=e.borderWidth||2,S=e.borderColor||"#000000",T=e.borderOpacity!==void 0?e.borderOpacity:100,F=e.borderStyle||"solid",z=e.cards||[];return n.jsxs(n.Fragment,{children:[n.jsxs(Ae,{children:[n.jsx(He,{children:"Розмір та позиція"}),n.jsxs(se,{children:[n.jsxs(Se,{children:["Розмір гравця (8-50px)",n.jsxs(ht,{children:[x,"px"]})]}),n.jsx(dt,{min:hn,max:pn,value:x,onChange:M=>c(M.target.value)})]}),n.jsxs(se,{children:[n.jsxs(Se,{children:["Кут повороту",n.jsxs(ht,{children:[a,"º"]})]}),n.jsx(dt,{min:"-180",max:"180",step:"5",value:a,onChange:M=>r("rotation",Number(M.target.value))})]}),n.jsx(se,{children:n.jsx(ce,{color:u,opacity:f,onColorChange:M=>r("color",M),onOpacityChange:M=>r("colorOpacity",M),label:"Колір гравця"})})]}),n.jsxs(Ae,{children:[n.jsx(He,{children:"Номер гравця"}),n.jsxs(se,{children:[n.jsx(Se,{children:"Номер гравця (0-99)"}),n.jsx(sn,{type:"number",min:"0",max:"99",value:h,onChange:M=>i(M.target.value)})]}),n.jsx(se,{children:n.jsx(ce,{color:w,opacity:$,onColorChange:M=>r("numberColor",M),onOpacityChange:M=>r("numberOpacity",M),label:"Колір номера"})})]}),n.jsxs(Ae,{children:[n.jsx(He,{children:"Текст над гравцем"}),n.jsxs(se,{children:[n.jsx(Se,{children:"Текст"}),n.jsx(sn,{type:"text",maxLength:pt,placeholder:"Введіть текст",value:l,onChange:M=>o(M.target.value)}),n.jsxs(l1,{$over:l.length>pt,children:[l.length,"/",pt," символів"]})]}),l&&n.jsxs(n.Fragment,{children:[n.jsxs(se,{children:[n.jsxs(Se,{children:["Розмір тексту",n.jsxs(ht,{children:[L,"px"]})]}),n.jsx(dt,{min:"8",max:"40",value:L,onChange:M=>r("textSize",Number(M.target.value))})]}),n.jsx(se,{children:n.jsx(ce,{color:C,opacity:v,onColorChange:M=>r("textColor",M),onOpacityChange:M=>r("textOpacity",M),label:"Колір тексту"})})]})]}),n.jsxs(Ae,{children:[n.jsx(He,{children:"Обводка"}),n.jsx(se,{children:n.jsx(ce,{color:S,opacity:T,onColorChange:M=>r("borderColor",M),onOpacityChange:M=>r("borderOpacity",M),label:"Колір обводки"})}),n.jsxs(se,{children:[n.jsxs(Se,{children:["Товщина обводки",n.jsxs(ht,{children:[k,"px"]})]}),n.jsx(dt,{min:"1",max:"10",value:k,onChange:M=>r("borderWidth",Number(M.target.value))})]}),n.jsxs(se,{children:[n.jsx(Se,{children:"Тип обводки"}),n.jsx(he,{value:F,onChange:M=>r("borderStyle",M),options:[{value:"solid",label:"Суцільна"},{value:"dashed",label:"Пунктирна"},{value:"dotted",label:"Точкова"}],placeholder:"Оберіть тип"})]})]}),n.jsxs(Ae,{children:[n.jsxs(He,{children:["Картки (",z.length,"/",We,")"]}),z.length>0&&n.jsx(n1,{children:z.map((M,b)=>n.jsxs(r1,{children:[n.jsx(o1,{$color:M.color,$borderColor:M.cardBorderColor||"#000000"}),n.jsxs(i1,{children:[n.jsxs(ln,{title:"Колір заливки картки",children:[n.jsx(dn,{children:"Заливка:"}),n.jsx(cn,{value:M.color,onChange:P=>p(b,P.target.value)})]}),n.jsxs(ln,{title:"Колір обводки картки",children:[n.jsx(dn,{children:"Обводка:"}),n.jsx(cn,{value:M.cardBorderColor||"#000000",onChange:P=>g(b,P.target.value)})]})]}),n.jsx(a1,{onClick:()=>s(b),title:"Видалити картку",children:n.jsx(Sr,{})})]},b))}),n.jsx(se,{style:{marginTop:z.length>0?"15px":"0"},children:n.jsx(s1,{onClick:d,disabled:z.length>=We,children:z.length>=We?`Максимум ${We} картки`:"Додати картку"})})]})]})},d1=y.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  &:last-child {
    border-bottom: none;
  }
`,h1=y.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,p1=y.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`,u1=y.label`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,g1=y.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,x1=y.input.attrs({type:"range"})`
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
`,f1=()=>{const e=pe(),{eraserSize:t}=Be(d=>d.tacticsBoard),[r,c]=m.useState(t);m.useEffect(()=>{c(t)},[t]);const i=d=>{c(parseInt(d.target.value))},o=()=>{e(Cr(r))};return n.jsxs(d1,{children:[n.jsx(h1,{children:"Налаштування ластика"}),n.jsxs(p1,{children:[n.jsxs(u1,{children:["Розмір ластика",n.jsxs(g1,{children:[r,"px"]})]}),n.jsx(x1,{min:"5",max:"200",value:r,onChange:i,onMouseUp:o,onTouchEnd:o})]})]})},m1=y(kn)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.black};
`,y1=y.div`
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
`,C1=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
`,w1=y.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,b1=y.button`
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
`,M1=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #ccc;
  text-align: center;
`,$1=({isOpen:e,onClose:t})=>{const r=pe(),{activeTool:c,selectedObjectId:i,objects:o,paths:d}=Be(x=>x.tacticsBoard),s=i?i.startsWith("path_")?{...d[parseInt(i.replace("path_",""))],type:"path",id:i}:o.find(x=>x.id===i):null,p=()=>{if(i){if(i.startsWith("path_")){const x=parseInt(i.replace("path_",""));r(wr(x))}else r(br(i));r(je()),t()}},g=()=>{if(s)switch(s.type){case"text":return n.jsxs(n.Fragment,{children:[n.jsx(Ai,{selectedObject:s}),n.jsx(_e,{onClick:p,children:"Видалити текст"})]});case"player":return n.jsxs(n.Fragment,{children:[n.jsx(c1,{selectedObject:s}),n.jsx(_e,{onClick:p,children:"Видалити гравця"})]});case"shape":return n.jsxs(n.Fragment,{children:[n.jsx(qi,{selectedObject:s}),n.jsx(_e,{onClick:p,children:"Видалити фігуру"})]});case"path":return n.jsxs(n.Fragment,{children:[n.jsx(nn,{}),n.jsx(_e,{onClick:p,children:"Видалити лінію"})]});default:return n.jsx(_e,{onClick:p,children:"Видалити об'єкт"})}switch(c){case"text":return n.jsx(ji,{});case"drawing":return n.jsx(nn,{});case"eraser":return n.jsx(f1,{});case"shape_rectangle":case"shape_circle":case"shape_triangle":case"shape_line":case"shape_arrow":return n.jsx(t1,{});default:return n.jsxs(M1,{children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎯"}),n.jsx("p",{children:"Виберіть інструмент або об'єкт"}),n.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px",fontStyle:"italic"},children:"Налаштування з'являться тут"})]})}};return n.jsxs(y1,{$isOpen:e,children:[n.jsxs(C1,{children:[n.jsx(w1,{children:s?"Властивості":"Інструменти"}),n.jsx(b1,{title:"Закрити панель інструментів",onClick:t,children:n.jsx(m1,{})})]}),n.jsx(v1,{children:g()})]})},L1=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: ${({theme:e})=>e.mainBGColor};
`,S1=y.div`
  background: ${({theme:e})=>e.ContainerBGColor};
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`,k1=y.div`
  width: 100%;
`,I1=({theme:e})=>{const{setTitle:t}=vr(),[r,c]=m.useState(!1),[i,o]=m.useState({id:"football_standard",name:"Стандартне футбольне поле",width:105,height:68}),d=g=>{o(g)},s=()=>{c(!r)},p=()=>{c(!1)};return m.useEffect(()=>{t("Тактична дошка")},[t]),n.jsx(Mr,{store:$r,children:n.jsx(L1,{children:n.jsxs(S1,{children:[n.jsx(ci,{currentField:i,onSelectField:d,isSidebarOpen:r,onToggleSidebar:s}),n.jsx(k1,{children:n.jsx(to,{fieldSize:{width:i.width,height:i.height},fieldType:i.id})}),n.jsx($1,{isOpen:r,onClose:p,children:n.jsx("div",{children:"Тут будуть інструменти"})})]})})})};export{I1 as default};
