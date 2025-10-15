import{r as p,d as u,b as U,a as le,_ as Mt,$ as Lt,a0 as Q,j as n,a1 as Be,a2 as ue,a3 as ze,a4 as ae,a5 as N,a6 as kt,a7 as ee,W as Ze,S as $t,a8 as bt,a9 as Ke,aa as St,ab as Oe,ac as Bt,ad as zt,ae as Zt,af as Tt,ag as Rt,ah as Et,ai as It,aj as Yt,u as Ft,ak as Gt,al as Ht}from"./index-8f34988e.js";import{S as Xt}from"./ChevronDownicon-20bf148c.js";const Te=(e,t,i=!1)=>{if(e.save(),t.rotation){const y=t.x,L=t.y;e.translate(y,L),e.rotate(t.rotation*Math.PI/180),e.translate(-y,-L)}const l=t.fontWeight||"normal",r=t.fontStyle||"normal",o=t.fontSize||16,h=t.fontFamily||"Arial";e.font=`${r} ${l} ${o}px ${h}`,e.textAlign="left",e.textBaseline="top";const a=t.opacity!==void 0?t.opacity/100:1,C=(t.color||"#000000").replace("#",""),g=parseInt(C.slice(0,2),16),s=parseInt(C.slice(2,4),16),f=parseInt(C.slice(4,6),16);e.fillStyle=`rgba(${g}, ${s}, ${f}, ${a})`;const d=(t.text||"").split(`
`),c=(t.lineHeight||1.5)*o,x=t.letterSpacing||0;let w=0;if(d.forEach((y,L)=>{const k=t.y+L*c;if(x!==0){let Z=t.x;for(let I=0;I<y.length;I++){const Y=y[I];e.fillText(Y,Z,k);const F=e.measureText(Y).width;Z+=F+x}const T=e.measureText(y).width+x*(y.length-1);T>w&&(w=T)}else{e.fillText(y,t.x,k);const Z=e.measureText(y).width;Z>w&&(w=Z)}if(t.textDecoration==="underline"){const Z=x!==0?e.measureText(y).width+x*(y.length-1):e.measureText(y).width;e.beginPath(),e.moveTo(t.x,k+o),e.lineTo(t.x+Z,k+o),e.strokeStyle=e.fillStyle,e.lineWidth=Math.max(1,o/16),e.stroke()}}),i){const y=d.length*c;e.fillStyle="rgba(255, 215, 0, 0.2)",e.fillRect(t.x-2,t.y-2,w+4,y+4),e.strokeStyle="#FFD700",e.lineWidth=2,e.setLineDash([5,5]),e.strokeRect(t.x-2,t.y-2,w+4,y+4),e.setLineDash([])}return e.restore(),t},Re=(e,t,i=!1)=>{if(!(t.points.length<2)){e.strokeStyle=t.color,e.lineWidth=t.brushSize,e.lineCap="round",e.lineJoin="round",i&&(e.shadowColor="#FFD700",e.shadowBlur=10),e.beginPath(),e.moveTo(t.points[0].x,t.points[0].y);for(let l=1;l<t.points.length;l++)e.lineTo(t.points[l].x,t.points[l].y);e.stroke(),e.shadowBlur=0}},Ee=(e,t,i=!1)=>{const l=t.radius||20;e.fillStyle=t.color,e.beginPath(),e.arc(t.x,t.y,l,0,Math.PI*2),e.fill(),i&&(e.strokeStyle="#FFD700",e.lineWidth=3,e.stroke()),e.fillStyle="white",e.font=`bold ${Math.floor(l*.7)}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(t.number,t.x,t.y)},Ie=(e,t,i=!1)=>{const l=t.radius||10;e.fillStyle="white",e.strokeStyle="black",e.lineWidth=2,e.beginPath(),e.arc(t.x,t.y,l,0,Math.PI*2),e.fill(),e.stroke(),e.beginPath(),e.arc(t.x-l/3,t.y-l/3,l/3,0,Math.PI*2),e.fillStyle="black",e.fill(),i&&(e.strokeStyle="#FFD700",e.lineWidth=3,e.beginPath(),e.arc(t.x,t.y,l+2,0,Math.PI*2),e.stroke())},Ye=(e,t,i=!1,l="#000")=>{if(e.strokeStyle=t.color||l,e.lineWidth=2,i&&(e.strokeStyle="#FFD700",e.lineWidth=3),t.shape==="line"||t.shape==="arrow"){if(e.beginPath(),e.moveTo(t.startX,t.startY),e.lineTo(t.endX,t.endY),e.stroke(),t.shape==="arrow"){const r=t.endX-t.startX,o=t.endY-t.startY,h=Math.atan2(o,r),a=15;e.beginPath(),e.moveTo(t.endX,t.endY),e.lineTo(t.endX-a*Math.cos(h-Math.PI/6),t.endY-a*Math.sin(h-Math.PI/6)),e.moveTo(t.endX,t.endY),e.lineTo(t.endX-a*Math.cos(h+Math.PI/6),t.endY-a*Math.sin(h+Math.PI/6)),e.stroke()}}else{const r=t.x,o=t.y,h=t.width||50,a=t.height||30;if(t.shape==="rectangle")e.strokeRect(r,o,h,a);else if(t.shape==="circle"){const m=Math.max(Math.abs(h),Math.abs(a))/2,C=r+h/2,g=o+a/2;e.beginPath(),e.arc(C,g,m,0,Math.PI*2),e.stroke()}else t.shape==="triangle"&&(e.beginPath(),e.moveTo(r+h/2,o),e.lineTo(r,o+a),e.lineTo(r+h,o+a),e.closePath(),e.stroke())}},Fe=(e,t,i=!1)=>{const l=t.size||30;e.font=`${l}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(t.icon,t.x,t.y),i&&(e.strokeStyle="#FFD700",e.lineWidth=3,e.strokeRect(t.x-l/2,t.y-l/2,l,l))},Ge=(e,t)=>{e.strokeStyle="#FFD700",e.lineWidth=2,e.setLineDash([5,5]),e.strokeRect(t.x,t.y,t.width,t.height),e.setLineDash([])},Dt=(e,t,i)=>{const l=At(t,i),r=8;e.fillStyle="white",e.strokeStyle="#FFD700",e.lineWidth=2,Object.entries(l).forEach(([o,h])=>{e.fillRect(h.x-r/2,h.y-r/2,r,r),e.strokeRect(h.x-r/2,h.y-r/2,r,r)})},At=(e,t)=>t&&t.type==="shape"&&(t.shape==="line"||t.shape==="arrow")?{end:{x:e.endX,y:e.endY,cursor:"crosshair"}}:t&&t.type==="path"?{}:t&&t.type==="text"?{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"}}:t&&(t.type==="player"||t.type==="ball"||t.type==="figure")?{top:{x:e.centerX||e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.centerX||e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.centerY||e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.centerY||e.y+e.height/2,cursor:"ew-resize"}}:{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"},top:{x:e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.y+e.height/2,cursor:"ew-resize"}},D=(e,t)=>{if(e.type==="player"){const i=e.radius||20;return{x:e.x-i,y:e.y-i,width:i*2,height:i*2,centerX:e.x,centerY:e.y}}if(e.type==="ball"){const i=e.radius||10;return{x:e.x-i,y:e.y-i,width:i*2,height:i*2,centerX:e.x,centerY:e.y}}if(e.type==="shape"){if(e.shape==="line"||e.shape==="arrow"){const h=Math.min(e.startX,e.endX),a=Math.max(e.startX,e.endX),m=Math.min(e.startY,e.endY),C=Math.max(e.startY,e.endY);return{x:h,y:m,width:a-h,height:C-m,startX:e.startX,startY:e.startY,endX:e.endX,endY:e.endY}}const i=e.width||50,l=e.height||30,r=i<0?e.x+i:e.x,o=l<0?e.y+l:e.y;if(e.shape==="circle"){const h=Math.max(Math.abs(i),Math.abs(l)),a=e.x+i/2,m=e.y+l/2;return{x:a-h/2,y:m-h/2,width:h,height:h,centerX:a,centerY:m,radius:h/2,originalX:e.x,originalY:e.y,originalWidth:i,originalHeight:l}}return{x:r,y:o,width:Math.abs(i),height:Math.abs(l),originalX:e.x,originalY:e.y,originalWidth:i,originalHeight:l}}if(e.type==="figure"){const i=e.size||30;return{x:e.x-i/2,y:e.y-i/2,width:i,height:i,centerX:e.x,centerY:e.y}}if(e.type==="path"){if(!e.points||e.points.length===0)return null;let i=e.points[0].x,l=e.points[0].y,r=e.points[0].x,o=e.points[0].y;return e.points.forEach(h=>{i=Math.min(i,h.x),l=Math.min(l,h.y),r=Math.max(r,h.x),o=Math.max(o,h.y)}),{x:i,y:l,width:r-i,height:o-l,points:e.points,centerX:(i+r)/2,centerY:(l+o)/2}}if(e.type==="text"){if(t){const r=t.getContext("2d"),o=e.fontWeight||"normal",h=e.fontStyle||"normal",a=e.fontSize||16,m=e.fontFamily||"Arial";r.font=`${h} ${o} ${a}px ${m}`;const C=(e.text||"").split(`
`),g=(e.lineHeight||1.5)*a,s=e.letterSpacing||0;let f=0;C.forEach(c=>{let w=r.measureText(c).width;s!==0&&(w+=s*(c.length-1)),w>f&&(f=w)});const d=C.length*g;return{x:e.x,y:e.y,width:f,height:d,centerX:e.x+f/2,centerY:e.y+d/2}}const i=e.width||100,l=e.height||20;return{x:e.x,y:e.y,width:i,height:l,centerX:e.x+i/2,centerY:e.y+l/2}}return null},He=(e,t,i,l=10,r)=>{const o=D(i,r);if(!o)return!1;if(i.type==="path"){const h=Math.max(l,10);for(let a=0;a<i.points.length-1;a++){const m=i.points[a],C=i.points[a+1],g=C.x-m.x,s=C.y-m.y,f=Math.sqrt(g*g+s*s);if(f===0)continue;const d=Math.max(0,Math.min(1,((e-m.x)*g+(t-m.y)*s)/(f*f))),c=m.x+d*g,x=m.y+d*s;if(Math.sqrt(Math.pow(e-c,2)+Math.pow(t-x,2))<=h)return!0}return!1}if(i.type==="shape"&&(i.shape==="line"||i.shape==="arrow")){const a=o.endX-o.startX,m=o.endY-o.startY,C=Math.sqrt(a*a+m*m);if(C===0)return!1;const g=Math.max(0,Math.min(1,((e-o.startX)*a+(t-o.startY)*m)/(C*C))),s=o.startX+g*a,f=o.startY+g*m;return Math.sqrt(Math.pow(e-s,2)+Math.pow(t-f,2))<=10}if(i.type==="shape"&&i.shape==="circle"){const h=o.centerX||o.x+o.width/2,a=o.centerY||o.y+o.height/2,m=o.radius||Math.max(o.width,o.height)/2;return Math.sqrt(Math.pow(e-h,2)+Math.pow(t-a,2))<=m}if(i.type==="shape"&&i.shape==="triangle"){const h=o.originalX+o.originalWidth/2,a=o.originalY,m=o.originalX,C=o.originalY+o.originalHeight,g=o.originalX+o.originalWidth,s=o.originalY+o.originalHeight,f=(C-s)*(h-g)+(g-m)*(a-s),d=((C-s)*(e-g)+(g-m)*(t-s))/f,c=((s-a)*(e-g)+(h-g)*(t-s))/f,x=1-d-c;return d>=0&&d<=1&&c>=0&&c<=1&&x>=0&&x<=1}if(i.type==="shape"&&i.shape==="rectangle"){const h=o.originalX!==void 0?o.originalX:o.x,a=o.originalY!==void 0?o.originalY:o.y,m=o.originalWidth!==void 0?o.originalWidth:o.width,C=o.originalHeight!==void 0?o.originalHeight:o.height,g=m<0?h+m:h,s=m<0?h:h+m,f=C<0?a+C:a,d=C<0?a:a+C;return e>=g&&e<=s&&t>=f&&t<=d}return i.type==="text",e>=o.x&&e<=o.x+o.width&&t>=o.y&&t<=o.y+o.height},Xe=(e,t,i)=>i?e>=i.x&&e<=i.x+i.width&&t>=i.y&&t<=i.y+i.height:!1,Wt=(e,t)=>t&&t.type==="shape"&&(t.shape==="line"||t.shape==="arrow")?{start:{x:e.startX,y:e.startY,cursor:"crosshair"},end:{x:e.endX,y:e.endY,cursor:"crosshair"}}:t&&t.type==="path"?{}:t&&t.type==="text"?{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"},top:{x:e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.y+e.height/2,cursor:"ew-resize"}}:t&&(t.type==="player"||t.type==="ball"||t.type==="figure")?{top:{x:e.centerX||e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.centerX||e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.centerY||e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.centerY||e.y+e.height/2,cursor:"ew-resize"}}:{topLeft:{x:e.x,y:e.y,cursor:"nwse-resize"},topRight:{x:e.x+e.width,y:e.y,cursor:"nesw-resize"},bottomLeft:{x:e.x,y:e.y+e.height,cursor:"nesw-resize"},bottomRight:{x:e.x+e.width,y:e.y+e.height,cursor:"nwse-resize"},top:{x:e.x+e.width/2,y:e.y,cursor:"ns-resize"},bottom:{x:e.x+e.width/2,y:e.y+e.height,cursor:"ns-resize"},left:{x:e.x,y:e.y+e.height/2,cursor:"ew-resize"},right:{x:e.x+e.width,y:e.y+e.height/2,cursor:"ew-resize"}},De=(e,t,i,l)=>{const r=Wt(i,l),o=8;for(const[h,a]of Object.entries(r))if(l&&l.type==="shape"&&(l.shape==="line"||l.shape==="arrow")){if(Math.sqrt(Math.pow(e-a.x,2)+Math.pow(t-a.y,2))<=o*2)return{name:h,...a}}else if(Math.abs(e-a.x)<=o&&Math.abs(t-a.y)<=o)return{name:h,...a};return null},Je=(e,t,i,l,r,o)=>{for(let h=i.length-1;h>=0;h--)if(He(e,t,i[h],r,o))return i[h];for(let h=l.length-1;h>=0;h--){const a={...l[h],type:"path",id:`path_${h}`};if(He(e,t,a,r,o))return a}return null},Pt=e=>{const t=p.useRef(null),i=p.useRef(null),l=p.useCallback(a=>{if(!a)return;const m=a.getContext("2d");m.clearRect(0,0,a.width,a.height),m.fillStyle="white",m.fillRect(0,0,a.width,a.height)},[]),r=p.useCallback((a,m,C,g,s,f)=>{const d=e.current;if(!d)return;l(d);const c=d.getContext("2d");let x=null,w=-1;if(C&&C.startsWith("path_")){w=parseInt(C.replace("path_",""));const k=a[w];k&&(x=i.current&&i.current.id===C?i.current:k)}a.forEach((k,Z)=>{if(k.points.length<2||Z===w)return;const T=i.current&&i.current.id===`path_${Z}`?i.current:k;Re(c,T,!1)});const y=t.current?m.map(k=>k.id===t.current.id?t.current:k):m;let L=null;if(C&&!C.startsWith("path_")&&(L=y.find(k=>k.id===C)),y.forEach(k=>{if(k.id!==C){switch(c.save(),k.type){case"player":Ee(c,k,!1);break;case"ball":Ie(c,k,!1);break;case"shape":Ye(c,k,!1,s);break;case"figure":Fe(c,k,!1);break;case"text":Te(c,k,!1);break}c.restore()}}),x){Re(c,x,!0);const k={...x,type:"path",id:C},Z=D(k,d);Z&&Ge(c,Z)}if(L){switch(c.save(),L.type){case"player":Ee(c,L,!0);break;case"ball":Ie(c,L,!0);break;case"shape":Ye(c,L,!0,s);break;case"figure":Fe(c,L,!0);break;case"text":Te(c,L,!0);break}if(c.restore(),g==="cursor"){const k=D(L,d);k&&(Ge(c,k),Dt(c,k,L))}}},[e,l]),o=p.useCallback((a,m,C)=>{const g=e.current;if(!g||a.length<2)return;const s=g.getContext("2d"),f=a;s.strokeStyle=m,s.lineWidth=C,s.lineCap="round",s.lineJoin="round",s.beginPath(),s.moveTo(f[f.length-2].x,f[f.length-2].y),s.lineTo(f[f.length-1].x,f[f.length-1].y),s.stroke()},[e]),h=p.useCallback((a,m,C,g)=>{const s=e.current;if(!s)return;const f=s.getContext("2d"),d=m.x,c=m.y;if(f.strokeStyle=g,f.lineWidth=2,f.setLineDash([5,5]),a==="line"||a==="arrow"){if(f.beginPath(),f.moveTo(d,c),f.lineTo(C.x,C.y),f.stroke(),a==="arrow"){const x=C.x-d,w=C.y-c,y=Math.atan2(w,x),L=15;f.beginPath(),f.moveTo(C.x,C.y),f.lineTo(C.x-L*Math.cos(y-Math.PI/6),C.y-L*Math.sin(y-Math.PI/6)),f.moveTo(C.x,C.y),f.lineTo(C.x-L*Math.cos(y+Math.PI/6),C.y-L*Math.sin(y+Math.PI/6)),f.stroke()}f.fillStyle="#FFD700",f.beginPath(),f.arc(d,c,4,0,Math.PI*2),f.fill()}else{const x=C.x-d,w=C.y-c;if(a==="rectangle")f.strokeRect(d,c,x,w);else if(a==="circle"){const y=Math.max(Math.abs(x),Math.abs(w))/2,L=d+x/2,k=c+w/2;f.beginPath(),f.arc(L,k,y,0,Math.PI*2),f.stroke()}else a==="triangle"&&(f.beginPath(),f.moveTo(d+x/2,c),f.lineTo(d,c+w),f.lineTo(d+x,c+w),f.closePath(),f.stroke())}f.setLineDash([])},[e]);return{redraw:r,clearCanvas:l,drawLivePath:o,drawPreviewShape:h,tempObjectDataRef:t,tempPathDataRef:i}},Vt=()=>{const e=p.useRef(null),t=p.useRef({x:0,y:0}),[i,l]=p.useState("default");return{draggedObjectRef:e,dragOffsetRef:t,cursorStyle:i,setCursorStyle:l,startDrag:(g,s,f)=>{if(e.current={...g},g.type==="path"){const d=D(g,f);t.current={x:s.x-d.points[0].x,y:s.y-d.points[0].y}}else if(g.type==="shape"&&(g.shape==="line"||g.shape==="arrow")){const d=(g.startX+g.endX)/2,c=(g.startY+g.endY)/2;t.current={x:s.x-d,y:s.y-c}}else if(g.x!==void 0&&g.y!==void 0)t.current={x:s.x-g.x,y:s.y-g.y};else{const d=D(g,f);d.centerX!==void 0?t.current={x:s.x-d.centerX,y:s.y-d.centerY}:t.current={x:s.x-d.x,y:s.y-d.y}}},updateDragPosition:g=>{if(!e.current)return null;let s={...e.current};if(s.type==="path"){const f=g.x-t.current.x-s.points[0].x,d=g.y-t.current.y-s.points[0].y;s.points=s.points.map(c=>({x:c.x+f,y:c.y+d}))}else if(s.type==="shape"&&(s.shape==="line"||s.shape==="arrow")){const f=(s.startX+s.endX)/2,d=(s.startY+s.endY)/2,c=g.x-t.current.x,x=g.y-t.current.y,w=c-f,y=x-d;s.startX+=w,s.startY+=y,s.endX+=w,s.endY+=y}else s.x!==void 0&&s.y!==void 0&&(s.x=g.x-t.current.x,s.y=g.y-t.current.y);return e.current=s,s},endDrag:()=>{const g=e.current;return e.current=null,t.current={x:0,y:0},g},updateCursor:(g,s,f,d,c,x)=>{if(d){const y=d?d.startsWith("path_")?{...f[parseInt(d.replace("path_",""))],type:"path",id:d}:s.find(L=>L.id===d):null;if(y){const L=D(y,x);if(L){const k=De(g.x,g.y,L,y);if(k){l(k.cursor);return}if(Xe(g.x,g.y,L)){l("move");return}}}}const w=Je(g.x,g.y,s,f,c,x);l(w?"pointer":"default")},checkForHandle:(g,s,f)=>{const d=D(s,f);return d?De(g.x,g.y,d,s):null},checkIfPointInSelectedBounds:(g,s,f)=>{if(!s)return!1;const d=D(s,f);return d&&Xe(g.x,g.y,d)}}},_t=()=>{const e=p.useRef(null);return{resizeHandleRef:e,startResize:(r,o,h,a)=>{const m=a.width,C=a.height;e.current={handle:r.name,object:{...o},startPos:h,startBounds:a,startFontSize:o.fontSize,startX:o.x,startY:o.y,startWidth:m,startHeight:C,startMouseX:h.x,startMouseY:h.y}},updateResize:r=>{if(!e.current)return null;const{handle:o,object:h,startPos:a,startBounds:m,startFontSize:C,startX:g,startY:s,startWidth:f,startHeight:d}=e.current;let c={...h};if(h.type==="text"){const x=g,w=s,y=f||m.width,L=d||m.height,k=x+y,Z=w+L,T=x,I=w;let Y=x,F=w,v=y,M=L;switch(o){case"topLeft":F=r.y,M=Math.max(Z-r.y,1),v=M*(y/L),Y=k-v;break;case"topRight":Y=T,F=r.y,M=Math.max(Z-r.y,1),v=M*(y/L);break;case"bottomLeft":F=I,M=Math.max(r.y-w,1),v=M*(y/L),Y=k-v;break;case"bottomRight":Y=T,F=I,M=Math.max(r.y-w,1),v=M*(y/L);break}const z=15,E=z*(y/L);M<z&&(M=z,v=E,(o==="topLeft"||o==="topRight")&&(F=Z-z),(o==="topLeft"||o==="bottomLeft")&&(Y=k-E));const R=M/L,G=Math.max(8,Math.min(200,Math.round(C*R)));return c.x=Y,c.y=F,c.fontSize=G,delete c.width,delete c.height,e.current.object=c,c}if(h.type==="path")return o==="start"?c.points[0]={x:r.x,y:r.y}:o==="end"&&(c.points[c.points.length-1]={x:r.x,y:r.y}),e.current.object=c,c;if(h.type==="shape"&&(h.shape==="line"||h.shape==="arrow"))return o==="end"&&(c.endX=r.x,c.endY=r.y),e.current.object=c,c;if(h.type==="player"||h.type==="ball"){const x=m.centerX,w=m.centerY,y=Math.sqrt(Math.pow(r.x-x,2)+Math.pow(r.y-w,2));return c.radius=Math.max(5,Math.min(50,y)),e.current.object=c,c}if(h.type==="figure"){const x=m.centerX,w=m.centerY,y=Math.max(Math.abs(r.x-x),Math.abs(r.y-w))*2;return c.size=Math.max(10,Math.min(100,y)),e.current.object=c,c}if(h.type==="shape"&&h.shape!=="line"&&h.shape!=="arrow"){const x=m;if(h.shape==="circle"){const Y=x.centerX,F=x.centerY,v=Math.sqrt(Math.pow(r.x-Y,2)+Math.pow(r.y-F,2)),M=v*2;return c.x=Y-v,c.y=F-v,c.width=M,c.height=M,e.current.object=c,c}const w=x.originalX!==void 0?x.originalX:x.x,y=x.originalY!==void 0?x.originalY:x.y,L=x.originalWidth!==void 0?x.originalWidth:x.width,k=x.originalHeight!==void 0?x.originalHeight:x.height,Z=w+L,T=y+k;switch(o){case"topLeft":c.x=r.x,c.y=r.y,c.width=Z-r.x,c.height=T-r.y;break;case"topRight":c.y=r.y,c.width=r.x-w,c.height=T-r.y;break;case"bottomLeft":c.x=r.x,c.width=Z-r.x,c.height=r.y-y;break;case"bottomRight":c.width=r.x-w,c.height=r.y-y;break;case"top":c.y=r.y,c.height=T-r.y;break;case"bottom":c.height=r.y-y;break;case"left":c.x=r.x,c.width=Z-r.x;break;case"right":c.width=r.x-w;break}const I=10;Math.abs(c.width)<I&&(c.width=c.width<0?-I:I),Math.abs(c.height)<I&&(c.height=c.height<0?-I:I)}return e.current.object=c,c},endResize:()=>{const r=e.current;return e.current=null,r?r.object:null}}},jt=()=>{const e=p.useRef(!1),t=p.useRef([]),i=p.useRef(null),l=p.useRef(!1);return{drawingRef:e,currentPathRef:t,shapeStartRef:i,isDrawingShapeRef:l,startDrawing:s=>{e.current=!0,t.current=[{x:s.x,y:s.y}]},continueDrawing:s=>e.current?(t.current.push({x:s.x,y:s.y}),t.current):null,endDrawing:()=>{const s=t.current;return e.current=!1,t.current=[],s.length>1?s:null},startShape:s=>{l.current=!0,i.current=s},getShapePreview:s=>!l.current||!i.current?null:{start:i.current,end:s},endShape:(s,f)=>{if(!l.current||!i.current)return null;const d=i.current;let c=null;if(f==="line"||f==="arrow")Math.sqrt(Math.pow(s.x-d.x,2)+Math.pow(s.y-d.y,2))>5&&(c={startX:d.x,startY:d.y,endX:s.x,endY:s.y});else{const x=s.x-d.x,w=s.y-d.y;Math.abs(x)>5&&Math.abs(w)>5&&(c={x:d.x,y:d.y,width:x,height:w})}return l.current=!1,i.current=null,c},cancelDrawing:()=>{e.current=!1,t.current=[],l.current=!1,i.current=null}}},Nt=u.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,Ut=u.div`
  border: 2px solid #ddd;
  margin-top: 10px;
  background: white;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  position: relative;
  cursor: ${e=>e.cursor};
`,qt=u.canvas`
  display: block;
  background: white;
`,Kt=u.textarea`
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
`,Ot=({fieldSize:e,fieldType:t})=>{const i=p.useRef(null),l=p.useRef(null),r=p.useRef(null),o=p.useRef(!1),h=p.useRef(null),[a,m]=p.useState({width:800,height:500}),[C,g]=p.useState(!1),[s,f]=p.useState(""),[d,c]=p.useState({x:0,y:0}),x=U(),{activeTool:w,drawColor:y,brushSize:L,paths:k,objects:Z,selectedObjectId:T,team1:I,team2:Y,textFontSize:F,textColor:v}=le(S=>S.tacticsBoard),{redraw:M,drawLivePath:z,drawPreviewShape:E,tempObjectDataRef:R,tempPathDataRef:G}=Pt(i),{cursorStyle:_,setCursorStyle:te,startDrag:q,updateDragPosition:ne,endDrag:ve,updateCursor:tt,checkForHandle:nt,draggedObjectRef:re,checkIfPointInSelectedBounds:rt}=Vt(),{resizeHandleRef:ie,startResize:it,updateResize:at,endResize:Me}=_t(),{drawingRef:ce,currentPathRef:Nn,shapeStartRef:he,isDrawingShapeRef:de,startDrawing:ot,continueDrawing:st,endDrawing:Le,startShape:lt,endShape:ct,cancelDrawing:ht}=jt(),dt=1500,pt=640,xt=1400,pe=e.width/e.height,ke=p.useCallback(()=>{var Se;const S=l.current;if(!S)return{width:800,height:500};const $=((Se=S.parentElement)==null?void 0:Se.clientWidth)||window.innerWidth,B=$/dt,b=xt*B,H=pt*B,X=b,P=X/pe,be=H,yt=be*pe;let j,K;P<=H?(j=X,K=P):(j=yt,K=be);const ge=$*.95;if(j>ge){const vt=ge/j;j=ge,K=K*vt}return{width:Math.floor(j),height:Math.floor(K)}},[pe]),xe=S=>{const $=i.current;if(!$)return{x:0,y:0};const B=$.getBoundingClientRect(),b=$.width/B.width,H=$.height/B.height;return{x:(S.clientX-B.left)*b,y:(S.clientY-B.top)*H}},gt=S=>{if(S.button!==0)return;const $=xe(S),B=i.current;if(C){$e();return}if(w==="cursor"){const b=T?T.startsWith("path_")?{...k[parseInt(T.replace("path_",""))],type:"path",id:T}:Z.find(X=>X.id===T):null;if(b){const X=D(b,B);if(X){const P=nt($,b,B);if(P){it(P,b,$,X),b.type==="path"?G.current={...b}:R.current={...b};return}if(rt($,b,B)){q(b,$,B),b.type==="path"?G.current={...b}:R.current={...b};return}}}const H=Je($.x,$.y,Z,k,L,B);H?(x(Be(H.id)),D(H,B)&&(q(H,$,B),H.type==="path"?G.current={...H}:R.current={...H})):x(Q())}else if(w==="drawing")ot($);else if(w.startsWith("shape_"))lt($);else if(w.startsWith("figure_")){const b={player:"👤",goalkeeper:"🧤",coach:"🧠",referee:"⚖️",goal:"🥅",cone:"🟨"},H=w.replace("figure_","");x(ue({type:"figure",figureType:H,icon:b[H],x:$.x,y:$.y,size:30}))}else if(w==="ball")x(ue({type:"ball",x:$.x,y:$.y,radius:10}));else if(w==="text"){const b=`text_${Date.now()}_${Math.random()}`;g(!0),f(""),c($),h.current=b,x(Be(b))}S.preventDefault()},ut=S=>{const $=xe(S),B=i.current;if(w==="cursor"&&!re.current&&!ie.current&&tt($,Z,k,T,L,B),ie.current){const b=at($);b&&(b.type==="path"?G.current=b:R.current=b,M(k,Z,T,w,y,L))}else if(re.current){const b=ne($);b&&(b.type==="path"?G.current=b:R.current=b,M(k,Z,T,w,y,L))}else if(ce.current){const b=st($);b&&b.length>=2&&z(b,y,L)}else if(de.current&&he.current){const b=w.replace("shape_","");M(k,Z,T,w,y,L),E(b,he.current,$,y)}S.preventDefault()},ft=S=>{const $=xe(S);if(ce.current){const B=Le();B&&x(ze({points:B,color:y,brushSize:L}))}if(de.current&&he.current){const B=w.replace("shape_",""),b=ct($,B);b&&x(ue({type:"shape",shape:B,...b,color:y}))}if(re.current){const B=ve();if(B)if(B.type==="path"){const b=parseInt(B.id.replace("path_",""));x(ae({index:b,updates:B}))}else x(N({id:B.id,updates:B}));R.current=null,G.current=null}if(ie.current){const B=Me();if(B&&R.current)if(B.type==="path"){const b=parseInt(B.id.replace("path_",""));x(ae({index:b,updates:G.current}))}else x(N({id:R.current.id,updates:R.current}));R.current=null,G.current=null}te("default"),S.preventDefault()},wt=S=>{if(ce.current){const $=Le();$&&x(ze({points:$,color:y,brushSize:L}))}if(de.current&&ht(),re.current){const $=ve();if($&&R.current)if($.type==="path"){const B=parseInt($.id.replace("path_",""));x(ae({index:B,updates:G.current}))}else x(N({id:R.current.id,updates:R.current}))}if(ie.current){const $=Me();if($&&R.current)if($.object.type==="path"){const B=parseInt($.object.id.replace("path_",""));x(ae({index:B,updates:G.current}))}else x(N({id:R.current.id,updates:R.current}))}R.current=null,G.current=null,te("default")},mt=S=>{f(S.target.value),r.current&&(r.current.style.height="auto",r.current.style.height=r.current.scrollHeight+"px")},$e=()=>{const S=s.trim();S&&x(kt({id:h.current,x:d.x,y:d.y,text:S,fontSize:F,color:v})),g(!1),f(""),h.current=null,x(ee("cursor"))},Ct=S=>{S.key==="Escape"&&(S.preventDefault(),g(!1),f(""),x(Q()),x(ee("cursor")))};return p.useEffect(()=>{const S=()=>{const $=ke();m($)};return S(),window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[ke]),p.useEffect(()=>{const S=i.current,$=l.current;S&&$&&(S.width=a.width,S.height=a.height,S.style.width=`${a.width}px`,S.style.height=`${a.height}px`,$.style.width=`${a.width}px`,$.style.height=`${a.height}px`,o.current||(x(Mt({canvasWidth:a.width,canvasHeight:a.height})),o.current=!0),M(k,Z,T,w,y,L))},[a,x,M,k,Z,T,w,y,L]),p.useEffect(()=>{M(k,Z,T,w,y,L)},[k,Z,T,M,w,y,L]),p.useEffect(()=>{if(a.width>0&&a.height>0){const S=Z.filter(b=>b.type==="player"),$=S.filter(b=>b.team===1),B=S.filter(b=>b.team===2);($.length!==I.count||B.length!==Y.count)&&x(Lt({canvasWidth:a.width,canvasHeight:a.height}))}},[I.count,Y.count,a,Z,x]),p.useEffect(()=>{if(C&&r.current&&i.current){const S=r.current;setTimeout(()=>{S.focus(),S.select()},0);const $=i.current,B=$.getBoundingClientRect(),b=$.width/B.width,H=$.height/B.height,X=d.x/b,P=d.y/H;S.style.left=`${X}px`,S.style.top=`${P}px`,S.style.fontSize=`${F/H}px`,S.style.color=v,S.style.width="auto",S.style.height="auto"}},[C,d,v,F]),p.useEffect(()=>{const S=$=>{$.key==="Escape"&&!C&&x(Q())};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[T,C,x]),p.useEffect(()=>{x(Q())},[w,x]),n.jsx(Nt,{children:n.jsxs(Ut,{ref:l,cursor:_,children:[n.jsx(qt,{ref:i,onMouseDown:gt,onMouseMove:ut,onMouseUp:ft,onMouseLeave:wt}),C&&n.jsx(Kt,{ref:r,value:s,onChange:mt,onBlur:$e,onKeyDown:Ct,placeholder:"Введіть текст",rows:1})]})})},Jt=e=>p.createElement("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32",xmlSpace:"preserve",...e},p.createElement("path",{className:"st0",d:"M20,29h-8c-2.2,0-4-1.8-4-4V7c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v18C24,27.2,22.2,29,20,29z"}),p.createElement("circle",{className:"st0",cx:16,cy:16,r:4}),p.createElement("line",{className:"st0",x1:8,y1:16,x2:24,y2:16}),p.createElement("rect",{x:13,y:3,className:"st0",width:6,height:4}),p.createElement("rect",{x:13,y:25,className:"st0",width:6,height:4})),Qt=e=>p.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{d:"M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),e1=e=>p.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{d:"M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"})),t1=e=>p.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("circle",{cx:12,cy:12,r:9,strokeWidth:2}),p.createElement("path",{d:"M18 18L6 6",strokeWidth:2})),Qe=e=>p.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},p.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fillRule:"evenodd"},p.createElement("g",{id:"Arrow",transform:"translate(-528.000000, 0.000000)",fillRule:"nonzero"},p.createElement("g",{id:"forward_2_line",transform:"translate(528.000000, 0.000000)"},p.createElement("path",{d:"M17.954,11.6767 C16.6468,9.47493 14.2448,8 11.5,8 C7.35786,8 4,11.3579 4,15.5 C4,16.0523 3.55228,16.5 3,16.5 C2.44772,16.5 2,16.0523 2,15.5 C2,10.2533 6.25329,6 11.5,6 C14.6814,6 17.4961,7.56337 19.22,9.96279 L19.757,6.91751 C19.8529,6.37361 20.3715,6.01044 20.9154,6.10635 C21.4593,6.20225 21.8225,6.72091 21.7266,7.2648 L20.6847,13.1736 C20.6386,13.4348 20.4907,13.667 20.2735,13.8192 C19.9896,14.0179 19.6122,14.0542 19.2977,13.9445 L13.6174,12.9429 C13.0735,12.847 12.7103,12.3284 12.8062,11.7845 C12.9021,11.2406 13.4208,10.8774 13.9647,10.9733 L17.954,11.6767 Z",id:"\\u8DEF\\u5F84"}))))),n1=e=>p.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.93417 2C7.95604 2 7.97799 2 8 2L16.0658 2C16.9523 1.99995 17.7161 1.99991 18.3278 2.08215C18.9833 2.17028 19.6117 2.36902 20.1213 2.87868C20.631 3.38835 20.8297 4.0167 20.9179 4.67221C21.0001 5.28388 21.0001 6.0477 21 6.9342L21 7.95C21 8.50229 20.5523 8.95 20 8.95C19.4477 8.95 19 8.50229 19 7.95V7.00001C19 6.02893 18.9979 5.40122 18.9357 4.93871C18.8774 4.50497 18.7832 4.36902 18.7071 4.2929C18.631 4.21677 18.495 4.12263 18.0613 4.06431C17.5988 4.00213 16.9711 4 16 4H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V4H8C7.02893 4 6.40122 4.00213 5.93871 4.06431C5.50497 4.12263 5.36902 4.21677 5.2929 4.2929C5.21677 4.36902 5.12263 4.50497 5.06431 4.93871C5.00213 5.40122 5 6.02893 5 7.00001V7.95C5 8.50229 4.55229 8.95 4 8.95C3.44772 8.95 3 8.50229 3 7.95V7.00001C3 6.97799 3 6.95604 3 6.93418C2.99995 6.04769 2.99991 5.28387 3.08215 4.67221C3.17028 4.0167 3.36902 3.38835 3.87868 2.87868C4.38835 2.36902 5.0167 2.17028 5.67221 2.08215C6.28387 1.99991 7.04769 1.99995 7.93417 2Z"}),p.createElement("path",{d:"M7 21H17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),et=e=>p.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.51192 4.43057C6.82641 4.161 7.29989 4.19743 7.56946 4.51192L13.5695 11.5119C13.8102 11.7928 13.8102 12.2072 13.5695 12.4881L7.56946 19.4881C7.29989 19.8026 6.82641 19.839 6.51192 19.5695C6.19743 19.2999 6.161 18.8264 6.43057 18.5119L12.0122 12L6.43057 5.48811C6.161 5.17361 6.19743 4.70014 6.51192 4.43057ZM10.5121 4.43068C10.8266 4.16111 11.3001 4.19753 11.5697 4.51202L17.5697 11.512C17.8104 11.7929 17.8104 12.2073 17.5697 12.4882L11.5697 19.4882C11.3001 19.8027 10.8266 19.8391 10.5121 19.5696C10.1976 19.3 10.1612 18.8265 10.4308 18.512L16.0124 12.0001L10.4308 5.48821C10.1612 5.17372 10.1976 4.70024 10.5121 4.43068Z"})),r1=e=>p.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("rect",{x:3,y:5,width:18,height:14,rx:2,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),i1=e=>p.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),a1=e=>p.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.0001 5.94363L4.76627 18H19.2339L12.0001 5.94363ZM10.7138 4.20006C11.2964 3.22905 12.7037 3.22905 13.2863 4.20006L21.4032 17.7282C22.0031 18.728 21.2829 20 20.117 20H3.88318C2.71724 20 1.99706 18.728 2.59694 17.7282L10.7138 4.20006Z"})),o1=e=>p.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{d:"M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z"})),s1=e=>p.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{d:"M6 12H18M18 12L13 7M18 12L13 17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),l1=u.div`
  position: relative;
  display: inline-block;
`,c1=u.button`
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
`,h1=u.div`
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
`,d1=u.button`
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
`,Ae=u.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,fe=[{id:"rectangle",name:"Прямокутник",icon:n.jsx(r1,{}),style:{stroke:"currentColor",fill:"none"}},{id:"circle",name:"Коло",icon:n.jsx(i1,{}),style:{stroke:"currentColor",fill:"none"}},{id:"triangle",name:"Трикутник",icon:n.jsx(a1,{}),style:{fill:"currentColor",stroke:"none"}},{id:"line",name:"Лінія",icon:n.jsx(o1,{}),style:{fill:"currentColor",stroke:"none"}},{id:"arrow",name:"Стрілка",icon:n.jsx(s1,{}),style:{stroke:"currentColor",fill:"none"}}],p1=({activeTool:e,onSelectShape:t})=>{const[i,l]=p.useState(!1),[r,o]=p.useState({top:0,left:0}),h=p.useRef(null),a=p.useRef(null),m=e.startsWith("shape_"),C=m?e.replace("shape_",""):null,g=fe.find(w=>w.id===C),s=()=>{if(a.current){const w=a.current.getBoundingClientRect();o({top:w.bottom+window.scrollY,left:w.left+window.scrollX})}l(!i)},f=w=>{t(w),l(!1)},d=w=>{h.current&&!h.current.contains(w.target)&&l(!1)};p.useEffect(()=>(document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}),[]);const c=()=>{const w=g||fe[0];return n.jsx(Ae,{children:Ze.cloneElement(w.icon,w.style)})},x=w=>Ze.cloneElement(w.icon,w.style);return n.jsxs(l1,{ref:h,children:[n.jsx(c1,{ref:a,title:"Геометричні фігури",onClick:s,active:m,children:c()}),n.jsx(h1,{isOpen:i,style:{top:r.top,left:r.left},children:fe.map(w=>n.jsx(d1,{onClick:()=>f(w),title:w.name,children:n.jsx(Ae,{children:x(w)})},w.id))})]})},x1=u.div`
  position: relative;
  display: inline-block;
`,g1=u.button`
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
`,u1=u.div`
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
`,f1=u.button`
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
`,We=[{id:"player",name:"Гравець",icon:"👤"},{id:"goalkeeper",name:"Воротар",icon:"🧤"},{id:"coach",name:"Тренер",icon:"🧠"},{id:"referee",name:"Суддя",icon:"⚖️"},{id:"goal",name:"Ворота",icon:"🥅"},{id:"cone",name:"Стійка",icon:"🟨"}],w1=({activeTool:e,onSelectFigure:t})=>{const[i,l]=p.useState(!1),[r,o]=p.useState({top:0,left:0}),h=p.useRef(null),a=p.useRef(null),m=e.startsWith("figure_"),C=m?e.replace("figure_",""):null,g=We.find(x=>x.id===C),s=()=>{if(a.current){const x=a.current.getBoundingClientRect();o({top:x.bottom+window.scrollY,left:x.left+window.scrollX})}l(!i)},f=x=>{t(x),l(!1)},d=x=>{h.current&&!h.current.contains(x.target)&&l(!1)};p.useEffect(()=>(document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}),[]);const c=()=>g?g.icon:"👤";return n.jsxs(x1,{ref:h,children:[n.jsx(g1,{ref:a,title:"Спортивні фігури",onClick:s,active:m,children:c()}),n.jsx(u1,{isOpen:i,style:{top:r.top,left:r.left},children:We.map(x=>n.jsx(f1,{onClick:()=>f(x),title:x.name,children:x.icon},x.id))})]})},Pe=e=>p.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{d:"M9.19762 11.9582L9.91426 11.737L9.19762 11.9582ZM9.54558 10.8683L9.08995 10.2726L9.54558 10.8683ZM9.91896 14.2952L9.20232 14.5164L9.91896 14.2952ZM14.0579 14.2952L13.3413 14.074L14.0579 14.2952ZM14.4313 10.8683L13.9757 11.4641V11.4641L14.4313 10.8683ZM14.7793 11.9582L15.4959 12.1794L14.7793 11.9582ZM12.5948 9.46375L13.0504 8.86802L12.5948 9.46375ZM11.3821 9.46375L11.8377 10.0595L11.3821 9.46375ZM20.1847 17.75C20.5989 17.75 20.9347 17.4142 20.9347 17C20.9347 16.5858 20.5989 16.25 20.1847 16.25V17.75ZM14.7793 19.7351L14.0677 19.4982L14.7793 19.7351ZM13.4801 21.2631C13.3492 21.6561 13.5617 22.0807 13.9547 22.2116C14.3477 22.3424 14.7724 22.1299 14.9033 21.7369L13.4801 21.2631ZM3.99769 16.25C3.58348 16.25 3.24769 16.5858 3.24769 17C3.24769 17.4142 3.58348 17.75 3.99769 17.75V16.25ZM9.40314 19.7351L10.1147 19.4982L9.40314 19.7351ZM9.27917 21.7369C9.41002 22.1299 9.83469 22.3424 10.2277 22.2116C10.6207 22.0807 10.8332 21.6561 10.7024 21.2631L9.27917 21.7369ZM8.22071 17.3775L7.78185 17.9857L8.22071 17.3775ZM5.556 5.45942C5.4489 5.05928 5.03772 4.82173 4.63759 4.92882C4.23746 5.03591 3.9999 5.44709 4.10699 5.84723L5.556 5.45942ZM5.24951 7.21519L4.52501 7.40909V7.40909L5.24951 7.21519ZM3.59168 11.5885L3.17811 10.9628L3.17811 10.9628L3.59168 11.5885ZM1.62739 11.9879C1.28185 12.2163 1.18689 12.6816 1.4153 13.0271C1.64372 13.3727 2.109 13.4676 2.45454 13.2392L1.62739 11.9879ZM19.934 5.84732C20.0411 5.44719 19.8035 5.036 19.4034 4.92891C19.0033 4.82182 18.5921 5.05938 18.485 5.45951L19.934 5.84732ZM18.7915 7.21528L18.067 7.02137L18.7915 7.21528ZM20.4493 11.5886L20.0357 12.2143L20.4493 11.5886ZM21.5864 13.2393C21.932 13.4677 22.3973 13.3728 22.6257 13.0272C22.8541 12.6817 22.7591 12.2164 22.4136 11.988L21.5864 13.2393ZM16.0903 3.83623C16.4288 3.5975 16.5096 3.12956 16.2709 2.79107C16.0322 2.45257 15.5642 2.3717 15.2257 2.61044L16.0903 3.83623ZM14.3376 4.15456L14.7699 4.76746L14.3376 4.15456ZM9.66562 4.10403L9.22021 4.70744V4.70744L9.66562 4.10403ZM8.61539 2.39659C8.28213 2.15059 7.81255 2.22133 7.56656 2.55459C7.32056 2.88784 7.3913 3.35742 7.72456 3.60341L8.61539 2.39659ZM14.7793 11.3678L14.0627 11.589L14.7793 11.3678ZM9.19762 11.3678L9.91426 11.589L9.19762 11.3678ZM21.2269 12C21.2269 17.1095 17.0899 21.25 11.9885 21.25V22.75C17.92 22.75 22.7269 17.9362 22.7269 12H21.2269ZM11.9885 21.25C6.88701 21.25 2.75 17.1095 2.75 12H1.25C1.25 17.9362 6.05695 22.75 11.9885 22.75V21.25ZM2.75 12C2.75 6.89055 6.88701 2.75 11.9885 2.75V1.25C6.05695 1.25 1.25 6.06376 1.25 12H2.75ZM11.9885 2.75C17.0899 2.75 21.2269 6.89055 21.2269 12H22.7269C22.7269 6.06376 17.92 1.25 11.9885 1.25V2.75ZM12.1392 10.0595L13.9757 11.4641L14.887 10.2726L13.0504 8.86802L12.1392 10.0595ZM14.0626 11.737L13.3413 14.074L14.7746 14.5164L15.4959 12.1794L14.0626 11.737ZM13.1036 14.25H10.8733V15.75H13.1036V14.25ZM10.6356 14.074L9.91426 11.737L8.48098 12.1794L9.20232 14.5164L10.6356 14.074ZM10.0012 11.4641L11.8377 10.0595L10.9265 8.86802L9.08995 10.2726L10.0012 11.4641ZM20.1847 16.25H18.5696V17.75H20.1847V16.25ZM14.0677 19.4982L13.4801 21.2631L14.9033 21.7369L15.4909 19.972L14.0677 19.4982ZM18.5696 16.25C17.892 16.25 17.3207 16.2489 16.8555 16.302C16.3711 16.3574 15.9264 16.4781 15.5228 16.7693L16.4006 17.9857C16.5201 17.8994 16.6846 17.8313 17.0258 17.7923C17.3863 17.7511 17.8574 17.75 18.5696 17.75V16.25ZM15.4909 19.972C15.7161 19.2956 15.8662 18.8484 16.0193 18.5189C16.1643 18.2069 16.2809 18.072 16.4006 17.9857L15.5228 16.7693C15.1193 17.0605 14.8645 17.4444 14.659 17.8868C14.4615 18.3117 14.282 18.8545 14.0677 19.4982L15.4909 19.972ZM3.99769 17.75H5.61279V16.25H3.99769V17.75ZM8.69154 19.972L9.27917 21.7369L10.7024 21.2631L10.1147 19.4982L8.69154 19.972ZM5.61279 17.75C6.325 17.75 6.79611 17.7511 7.15658 17.7923C7.49784 17.8313 7.66228 17.8994 7.78185 17.9857L8.65958 16.7693C8.25598 16.4781 7.81137 16.3574 7.32692 16.302C6.86168 16.2489 6.29041 16.25 5.61279 16.25V17.75ZM10.1147 19.4982C9.90043 18.8545 9.7209 18.3117 9.52346 17.8868C9.31791 17.4445 9.06311 17.0605 8.65958 16.7693L7.78185 17.9857C7.90148 18.072 8.01815 18.2069 8.16314 18.5189C8.31624 18.8484 8.46634 19.2956 8.69154 19.972L10.1147 19.4982ZM4.10699 5.84723L4.52501 7.40909L5.97401 7.02128L5.556 5.45942L4.10699 5.84723ZM3.17811 10.9628L1.62739 11.9879L2.45454 13.2392L4.00526 12.2142L3.17811 10.9628ZM4.52501 7.40909C4.70933 8.09777 4.83021 8.55381 4.88378 8.91324C4.93452 9.25362 4.9114 9.43069 4.85896 9.56902L6.26156 10.1007C6.43795 9.63541 6.43932 9.17465 6.3674 8.69211C6.29831 8.22862 6.14941 7.67663 5.97401 7.02128L4.52501 7.40909ZM4.00526 12.2142C4.57077 11.8404 5.04807 11.5262 5.407 11.2252C5.78074 10.9119 6.08516 10.5661 6.26156 10.1007L4.85896 9.56902C4.80654 9.70729 4.70659 9.855 4.44321 10.0759C4.16501 10.3091 3.77244 10.57 3.17811 10.9628L4.00526 12.2142ZM18.485 5.45951L18.067 7.02137L19.516 7.40918L19.934 5.84732L18.485 5.45951ZM20.0357 12.2143L21.5864 13.2393L22.4136 11.988L20.8629 10.9629L20.0357 12.2143ZM18.067 7.02137C17.8916 7.67672 17.7427 8.22871 17.6736 8.6922C17.6017 9.17474 17.603 9.6355 17.7794 10.1008L19.182 9.56911C19.1296 9.43078 19.1065 9.25372 19.1572 8.91333C19.2108 8.5539 19.3316 8.09787 19.516 7.40918L18.067 7.02137ZM20.8629 10.9629C20.2685 10.5701 19.876 10.3092 19.5978 10.0759C19.3344 9.85509 19.2344 9.70739 19.182 9.56911L17.7794 10.1008C17.9558 10.5662 18.2602 10.912 18.634 11.2253C18.9929 11.5263 19.4702 11.8405 20.0357 12.2143L20.8629 10.9629ZM15.2257 2.61044L13.9054 3.54166L14.7699 4.76746L16.0903 3.83623L15.2257 2.61044ZM10.111 3.50061L8.61539 2.39659L7.72456 3.60341L9.22021 4.70744L10.111 3.50061ZM13.9054 3.54166C13.3231 3.9523 12.9373 4.22303 12.6189 4.39721C12.3174 4.56214 12.1438 4.60125 11.9966 4.59965L11.9803 6.09957C12.478 6.10495 12.9109 5.94721 13.3387 5.7132C13.7496 5.48845 14.2159 5.15817 14.7699 4.76746L13.9054 3.54166ZM9.22021 4.70744C9.76562 5.11004 10.2247 5.45033 10.6306 5.68391C11.0533 5.92712 11.4827 6.09418 11.9803 6.09957L11.9966 4.59965C11.8494 4.59806 11.6767 4.5552 11.3788 4.38379C11.0642 4.20276 10.6843 3.92375 10.111 3.50061L9.22021 4.70744ZM13.9757 11.4641C14.0179 11.4963 14.0475 11.5399 14.0627 11.589L15.4959 11.1465C15.3911 10.807 15.1828 10.4989 14.887 10.2726L13.9757 11.4641ZM14.0627 11.589C14.0773 11.6364 14.0779 11.6876 14.0626 11.737L15.4959 12.1794C15.6023 11.8349 15.5974 11.4754 15.4959 11.1465L14.0627 11.589ZM18.1938 9.14203L14.4923 10.6748L15.0662 12.0607L18.7677 10.5279L18.1938 9.14203ZM13.0504 8.86802C12.7371 8.62838 12.3624 8.50841 11.9885 8.50841V10.0084C12.0419 10.0084 12.0945 10.0253 12.1392 10.0595L13.0504 8.86802ZM11.9885 8.50841C11.6146 8.50841 11.2398 8.62838 10.9265 8.86802L11.8377 10.0595C11.8824 10.0253 11.935 10.0084 11.9885 10.0084V8.50841ZM12.7385 9.25841V5.34961H11.2385V9.25841H12.7385ZM13.3413 14.074C13.3259 14.1241 13.2962 14.166 13.2572 14.1967L14.1852 15.3752C14.4575 15.1608 14.6671 14.8646 14.7746 14.5164L13.3413 14.074ZM13.2572 14.1967C13.214 14.2308 13.1607 14.25 13.1036 14.25V15.75C13.5063 15.75 13.8846 15.6119 14.1852 15.3752L13.2572 14.1967ZM16.5291 16.887L14.2886 14.2954L13.1538 15.2765L15.3944 17.868L16.5291 16.887ZM10.8733 14.25C10.8162 14.25 10.7629 14.2308 10.7197 14.1967L9.79172 15.3752C10.0923 15.6119 10.4706 15.75 10.8733 15.75V14.25ZM10.7197 14.1967C10.6807 14.166 10.651 14.1241 10.6356 14.074L9.20232 14.5164C9.3098 14.8646 9.51943 15.1608 9.79172 15.3752L10.7197 14.1967ZM8.81059 17.8407L10.8456 15.2492L9.66584 14.3228L7.63084 16.9143L8.81059 17.8407ZM9.91426 11.737C9.89899 11.6876 9.89961 11.6364 9.91426 11.589L8.48099 11.1465C8.37949 11.4754 8.37465 11.8349 8.48098 12.1794L9.91426 11.737ZM9.91426 11.589C9.9294 11.5399 9.95905 11.4963 10.0012 11.4641L9.08995 10.2726C8.79412 10.4989 8.58579 10.807 8.48099 11.1465L9.91426 11.589ZM9.48889 10.6766L5.85153 9.14373L5.269 10.526L8.90636 12.0589L9.48889 10.6766Z"})),m1=e=>p.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5262 17.4999C18.4887 22.7611 11.7612 24.5637 6.49994 21.5262C1.23873 18.4886 -0.563901 11.7611 2.47367 6.49988C5.51123 1.23866 12.2387 -0.563962 17.4999 2.4736C22.7612 5.51117 24.5638 12.2387 21.5262 17.4999ZM5.84382 7.87995C5.25279 7.64272 4.74291 7.45257 4.3292 7.30543C5.59153 5.24057 7.56267 3.85898 9.74648 3.29362C9.77176 3.62621 9.82851 4.00289 9.93722 4.40861C10.3269 5.86297 11.3579 7.58777 13.75 8.96886C14.0666 9.15165 14.3765 9.31079 14.6793 9.44842C14.4757 10.219 14.1794 11.0351 13.7614 11.8848C13.3566 11.6365 12.936 11.3857 12.5 11.1339C9.85449 9.60655 7.52076 8.55305 5.84382 7.87995ZM12.7587 13.6161C12.3555 13.3682 11.9358 13.1176 11.5 12.866C8.94938 11.3934 6.70297 10.3799 5.09882 9.73602C4.44209 9.47241 3.89359 9.27099 3.47664 9.12556C2.8887 10.8629 2.86217 12.7007 3.33339 14.4015C3.63406 14.2571 3.98864 14.1179 4.39435 14.0092C5.84872 13.6195 7.85792 13.65 10.25 15.0311C10.5667 15.2139 10.8594 15.4027 11.13 15.5961C11.6875 15.0424 12.2384 14.3885 12.7587 13.6161ZM12.6204 16.9341C13.4037 17.8315 13.839 18.756 14.0628 19.5913C14.1715 19.997 14.2283 20.3736 14.2536 20.7061C15.962 20.2638 17.5403 19.3219 18.7509 17.9441C18.4164 17.6557 17.9678 17.2815 17.4112 16.8446C16.6284 16.2301 15.633 15.4925 14.4426 14.6962C13.8639 15.5605 13.2482 16.3006 12.6204 16.9341ZM9.52737 16.9296C9.43788 16.8737 9.34548 16.8182 9.25005 16.7631C7.31205 15.6442 5.84818 15.6902 4.91199 15.9411C4.58 16.03 4.30141 16.1484 4.0805 16.2639C4.53358 17.1073 5.12461 17.8846 5.84359 18.5583C5.87614 18.5513 5.90977 18.5439 5.94444 18.5361C6.44532 18.4223 7.15871 18.2112 7.97658 17.8245C8.4626 17.5947 8.98712 17.3022 9.52737 16.9296ZM7.92672 20.018C8.21347 19.909 8.51642 19.7815 8.83145 19.6326C9.54844 19.2936 10.3256 18.8442 11.1145 18.2503C11.6989 18.9202 11.9873 19.5728 12.131 20.109C12.2199 20.4409 12.2567 20.7413 12.2672 20.9903C10.8031 21.0352 9.31171 20.7231 7.92672 20.018ZM18.6461 15.2714C17.8061 14.612 16.7364 13.8204 15.4558 12.968C15.9672 11.9634 16.3317 10.9922 16.5833 10.0701C17.7521 10.2998 18.7704 10.2145 19.6057 9.99072C20.0114 9.88202 20.3659 9.74284 20.6666 9.59846C21.2688 11.7723 21.0579 14.1701 19.9008 16.2957C19.5666 16.011 19.147 15.6645 18.6461 15.2714ZM16.9702 8.10789C17.8425 8.27902 18.5519 8.20254 19.0881 8.05887C19.42 7.96992 19.6986 7.85154 19.9195 7.73607C19.2263 6.44565 18.2102 5.3101 16.907 4.46319C16.956 4.76614 16.9971 5.09234 17.0257 5.43977C17.0906 6.23015 17.09 7.1278 16.9702 8.10789ZM15.0328 7.39372C15.0854 6.73963 15.0764 6.13922 15.0324 5.60348C14.9583 4.70183 14.7845 3.97847 14.6326 3.4878C14.622 3.45374 14.6116 3.42082 14.6013 3.38905C13.6584 3.10331 12.6898 2.9801 11.7329 3.00943C11.7433 3.2585 11.7801 3.55897 11.8691 3.89097C12.1199 4.82716 12.812 6.11791 14.75 7.23681C14.8454 7.2919 14.9397 7.34416 15.0328 7.39372Z"})),C1=e=>p.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{d:"M11.5697 12.5532L12.1617 13.0137V13.0137L11.5697 12.5532ZM11.3142 3.64586L12.0065 3.93432V3.93432L11.3142 3.64586ZM18.555 14.5045C18.8336 14.198 18.811 13.7237 18.5045 13.445C18.198 13.1664 17.7237 13.189 17.445 13.4955L18.555 14.5045ZM17.7087 14.3204L17.1538 13.8159L17.1538 13.8159L17.7087 14.3204ZM21.2426 10.7426L21.7773 10.2166L21.773 10.2123L21.2426 10.7426ZM21.4531 12.026C21.7436 12.3213 22.2184 12.3251 22.5137 12.0346C22.809 11.7442 22.8129 11.2693 22.5224 10.974L21.4531 12.026ZM5.7327 19.0428C5.31848 19.0428 4.9827 19.3786 4.9827 19.7928C4.9827 20.207 5.31848 20.5428 5.7327 20.5428V19.0428ZM3.5 15.75C3.08579 15.75 2.75 16.0858 2.75 16.5C2.75 16.9142 3.08579 17.25 3.5 17.25V15.75ZM8.19231 3.35575C8.35162 2.9734 8.17081 2.5343 7.78846 2.37498C7.40611 2.21567 6.96701 2.39648 6.80769 2.77883L8.19231 3.35575ZM6.80769 15.2885C6.96701 15.6708 7.40611 15.8516 7.78846 15.6923C8.17081 15.533 8.35162 15.0939 8.19231 14.7115L6.80769 15.2885ZM11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5C10.25 6.91421 10.5858 7.25 11 7.25V5.75ZM19.876 16.916C20.1057 17.2607 20.5714 17.3538 20.916 17.124C21.2607 16.8943 21.3538 16.4286 21.124 16.084L19.876 16.916ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75C2.75 6.89137 6.89137 2.75 12 2.75V1.25ZM12 12.75H12.0917V11.25H12V12.75ZM11.408 11.5395L10.9777 12.0928L12.1617 13.0137L12.592 12.4605L11.408 11.5395ZM11.3077 1.71154L10.6219 3.35739L12.0065 3.93432L12.6923 2.28846L11.3077 1.71154ZM17.445 13.4955L17.1538 13.8159L18.2637 14.8249L18.555 14.5045L17.445 13.4955ZM20.708 11.2686L21.4531 12.026L22.5224 10.974L21.7773 10.2167L20.708 11.2686ZM17.1538 13.8159C14.2838 16.9729 9.96086 19.0428 5.7327 19.0428V20.5428C10.4211 20.5428 15.1357 18.2657 18.2637 14.8249L17.1538 13.8159ZM10.6219 3.35739C9.39039 6.31308 9.66695 9.68222 11.364 12.3975L12.636 11.6025C11.1965 9.29929 10.9619 6.44145 12.0065 3.93432L10.6219 3.35739ZM10.9777 12.0928C9.18293 14.4003 6.42334 15.75 3.5 15.75V17.25C6.88622 17.25 10.0828 15.6866 12.1617 13.0137L10.9777 12.0928ZM6.80769 2.77883C5.13077 6.80344 5.13077 11.2638 6.80769 15.2885L8.19231 14.7115C6.66923 11.0562 6.66923 7.01114 8.19231 3.35575L6.80769 2.77883ZM11 7.25C14.6428 7.25 18.1364 8.6971 20.7123 11.273L21.773 10.2123C18.9158 7.35514 15.0406 5.75 11 5.75V7.25ZM12.0917 12.75C15.2197 12.75 18.1408 14.3133 19.876 16.916L21.124 16.084C19.1107 13.064 15.7213 11.25 12.0917 11.25V12.75Z"})),y1=e=>p.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.9386 4.73542C13.3511 4.69785 13.716 5.0018 13.7535 5.4143C13.8024 5.95058 13.893 6.53361 14.045 7.14711C14.1447 7.54916 13.8995 7.95586 13.4974 8.05549C13.0954 8.15512 12.6887 7.90997 12.5891 7.50791C12.4172 6.81421 12.3148 6.15558 12.2597 5.55036C12.2221 5.13785 12.5261 4.77299 12.9386 4.73542ZM5.23942 9.18054C5.47821 8.84208 5.94616 8.76129 6.28461 9.00008C6.78119 9.35043 7.30041 9.76836 7.81522 10.2641C8.1136 10.5514 8.12256 11.0262 7.83525 11.3246C7.54794 11.6229 7.07315 11.6319 6.77478 11.3446C6.31949 10.9062 5.85988 10.5362 5.41988 10.2257C5.08142 9.98694 5.00063 9.51899 5.23942 9.18054ZM13.836 8.99599C14.2094 8.81661 14.6574 8.97385 14.8368 9.3472C14.9605 9.60468 15.097 9.86417 15.2474 10.1247C15.3979 10.3852 15.5543 10.6332 15.7155 10.869C15.9491 11.2111 15.8612 11.6778 15.5192 11.9114C15.1772 12.145 14.7105 12.0572 14.4769 11.7151C14.2947 11.4485 14.118 11.1685 13.9484 10.8747C13.7788 10.5809 13.6246 10.2879 13.4848 9.99681C13.3054 9.62346 13.4627 9.17538 13.836 8.99599ZM8.48046 12.088C8.82249 11.8544 9.28917 11.9422 9.52281 12.2843C9.70496 12.5509 9.88164 12.8309 10.0513 13.1247C10.2209 13.4185 10.375 13.7115 10.5149 14.0026C10.6943 14.3759 10.537 14.824 10.1637 15.0034C9.79032 15.1828 9.34223 15.0256 9.16285 14.6522C9.03914 14.3947 8.90267 14.1352 8.75225 13.8747C8.60182 13.6142 8.44534 13.3662 8.28421 13.1304C8.05057 12.7883 8.13843 12.3217 8.48046 12.088ZM16.1644 12.6748C16.4517 12.3765 16.9265 12.3675 17.2249 12.6548C17.6802 13.0932 18.1398 13.4632 18.5798 13.7737C18.9183 14.0125 18.9991 14.4804 18.7603 14.8189C18.5215 15.1573 18.0535 15.2381 17.7151 14.9993C17.2185 14.649 16.6993 14.2311 16.1845 13.7353C15.8861 13.448 15.8771 12.9732 16.1644 12.6748ZM10.5022 15.9439C10.9043 15.8443 11.311 16.0894 11.4106 16.4915C11.5825 17.1852 11.6849 17.8438 11.74 18.4491C11.7776 18.8616 11.4736 19.2264 11.0611 19.264C10.6486 19.3016 10.2837 18.9976 10.2462 18.5851C10.1973 18.0488 10.1067 17.4658 9.95466 16.8523C9.85502 16.4502 10.1002 16.0436 10.5022 15.9439Z"}),p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2859 1.32632C11.0551 1.05591 8.71992 1.48034 6.62484 2.68993C1.4832 5.65846 -0.278462 12.2331 2.69007 17.3747C5.6586 22.5164 12.2332 24.278 17.3748 21.3095C19.4699 20.0999 21.0051 18.2898 21.8863 16.2227C23.1661 13.2206 23.0684 9.67094 21.3096 6.62471C19.5509 3.57847 16.5256 1.71902 13.2859 1.32632ZM13.7802 3.08033C13.7309 3.49161 13.3576 3.7851 12.9463 3.73585C12.5351 3.68661 12.2416 3.31329 12.2908 2.90201C12.297 2.85081 12.3032 2.8013 12.3096 2.75354C10.638 2.6958 8.93097 3.09054 7.37484 3.98897C5.81951 4.88694 4.62362 6.16839 3.83764 7.64494C3.88216 7.66328 3.92814 7.68258 3.97552 7.70286C4.35631 7.86585 4.53288 8.30668 4.36989 8.68748C4.20689 9.06827 3.76606 9.24484 3.38527 9.08184C3.33556 9.06057 3.2878 9.04062 3.24212 9.02195C2.41524 11.457 2.60225 14.2226 3.98911 16.6247C5.37596 19.0268 7.67752 20.5716 10.1998 21.073C10.2065 21.0241 10.2131 20.9728 10.2195 20.9191C10.2687 20.5078 10.6421 20.2143 11.0533 20.2636C11.4646 20.3128 11.7581 20.6861 11.7089 21.0974C11.7027 21.1486 11.6965 21.198 11.6901 21.2458C13.3618 21.3034 15.0695 20.9084 16.6248 20.0104C18.181 19.112 19.3764 17.831 20.1621 16.3545C20.1176 16.3362 20.0716 16.3168 20.0242 16.2966C19.6434 16.1336 19.4668 15.6927 19.6298 15.3119C19.7928 14.9311 20.2336 14.7546 20.6144 14.9176C20.6641 14.9388 20.7119 14.9588 20.7576 14.9775C21.5849 12.5411 21.3972 9.77639 20.0106 7.37471C18.624 4.97302 16.3236 3.42808 13.7999 2.92639C13.7932 2.97529 13.7866 3.02664 13.7802 3.08033Z"})),v1=e=>p.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.1665 2.75836L21.2416 8.83351C21.2677 7.81177 21.2303 6.84352 21.1649 5.98862C21.0341 4.27797 19.722 2.96586 18.0114 2.83507C17.1565 2.76971 16.1882 2.7323 15.1665 2.75836ZM21.1071 10.8203L13.1797 2.89285C10.483 3.1978 7.77958 4.04236 5.91097 5.91097C4.04236 7.77958 3.1978 10.483 2.89285 13.1797L10.8203 21.1071C13.517 20.8022 16.2204 19.9576 18.089 18.089C19.9576 16.2204 20.8022 13.517 21.1071 10.8203ZM8.83351 21.2416L2.75836 15.1665C2.7323 16.1882 2.76971 17.1565 2.83507 18.0114C2.96587 19.722 4.27797 21.0341 5.98861 21.1649C6.84352 21.2303 7.81177 21.2677 8.83351 21.2416ZM13.3854 1.36321C15.1096 1.19733 16.7638 1.2353 18.1257 1.33944C20.5746 1.52667 22.4733 3.4254 22.6606 5.87426C22.7647 7.23618 22.8027 8.89045 22.6368 10.6146C22.3524 13.5707 21.4579 16.8414 19.1497 19.1497C16.8414 21.4579 13.5707 22.3524 10.6146 22.6368C8.89045 22.8027 7.23618 22.7647 5.87426 22.6606C3.4254 22.4733 1.52667 20.5746 1.33944 18.1257C1.2353 16.7638 1.19733 15.1096 1.36321 13.3854C1.6476 10.4293 2.54206 7.15857 4.85031 4.85031C7.15857 2.54206 10.4293 1.6476 13.3854 1.36321ZM11.9426 8.1601C12.2355 7.86721 12.7104 7.86721 13.0032 8.1601L13.8914 9.0482L14.7795 8.1601C15.0723 7.86721 15.5472 7.86721 15.8401 8.1601C16.133 8.45299 16.133 8.92787 15.8401 9.22076L14.952 10.1089L15.8401 10.997C16.133 11.2899 16.133 11.7647 15.8401 12.0576C15.5472 12.3505 15.0723 12.3505 14.7795 12.0576L13.8914 11.1695L13.0608 12.0001L13.9489 12.8882C14.2418 13.1811 14.2418 13.656 13.9489 13.9489C13.656 14.2418 13.1811 14.2418 12.8882 13.9489L12.0001 13.0608L11.1695 13.8914L12.0576 14.7795C12.3505 15.0723 12.3505 15.5472 12.0576 15.8401C11.7647 16.133 11.2899 16.133 10.997 15.8401L10.1089 14.952L9.22076 15.8401C8.92787 16.133 8.45299 16.133 8.1601 15.8401C7.86721 15.5472 7.86721 15.0723 8.1601 14.7795L9.0482 13.8914L8.1601 13.0032C7.86721 12.7104 7.86721 12.2355 8.1601 11.9426C8.45299 11.6497 8.92787 11.6497 9.22076 11.9426L10.1089 12.8307L10.9394 12.0001L10.0513 11.112C9.75845 10.8191 9.75845 10.3442 10.0513 10.0513C10.3442 9.75845 10.8191 9.75845 11.112 10.0513L12.0001 10.9394L12.8307 10.1089L11.9426 9.22076C11.6497 8.92787 11.6497 8.45299 11.9426 8.1601Z"})),M1=e=>p.createElement("svg",{fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 32 32","data-name":"Layer 1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("rect",{height:1,transform:"translate(20 51) rotate(180)",width:16,x:2,y:25}),p.createElement("rect",{height:1,transform:"translate(26 59) rotate(180)",width:16,x:5,y:29}),p.createElement("rect",{height:1,transform:"translate(39 -8) rotate(90)",width:19,x:14,y:15}),p.createElement("rect",{height:1,transform:"translate(21 10) rotate(90)",width:19,x:-4,y:15}),p.createElement("path",{d:"M24,25H23v2a2,2,0,0,1-2,2H20v1h1a3,3,0,0,0,3-3Z"}),p.createElement("path",{d:"M17,26h1v1a2,2,0,0,0,2,2h1v1H20a3,3,0,0,1-3-3Z"}),p.createElement("path",{d:"M2,26H3v1a2,2,0,0,0,2,2H6v1H5a3,3,0,0,1-3-3Z"}),p.createElement("rect",{height:1,width:6,x:24,y:6}),p.createElement("rect",{height:1,width:19,x:8,y:2}),p.createElement("path",{d:"M5,6H6V5A2,2,0,0,1,8,3H9V2H8A3,3,0,0,0,5,5Z"}),p.createElement("path",{d:"M23,6h1V5a2,2,0,0,1,2-2h1V2H26a3,3,0,0,0-3,3Z"}),p.createElement("path",{d:"M30,6H29V5a2,2,0,0,0-2-2H26V2h1a3,3,0,0,1,3,3Z"})),L1=u.div`
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
`,k1=u.div`
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
`,$1=u.div`
  padding: 20px 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 2px solid ${({theme:e})=>e.mainBGColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme:e})=>e.ContainerBGColor};
`,b1=u.h2`
  margin: 0;
  font-size: 24px;
  color: ${({theme:e})=>e.textBlack};
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,S1=u.button`
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
`,B1=u.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`,z1=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  @media (max-width: 768px) {
    gap: 6px;
  }
`,Z1=u.button`
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
`,T1=u.div`
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
`,R1=u.div`
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
`,E1=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
`,I1=u.div`
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
`,Y1=u.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.textBlack};
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,F1=u.div`
  font-size: 13px;
  color: ${({theme:e})=>e.textGray};
  line-height: 1.5;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,G1=u.div`
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
`,H1=u.div`
  position: relative;
  width: ${e=>{const l=e.fieldWidth,r=e.fieldHeight,o=100/l,h=80/r,a=Math.min(o,h);return`${l*a}px`}};
  height: ${e=>{const l=e.fieldWidth,r=e.fieldHeight,o=100/l,h=80/r,a=Math.min(o,h);return`${r*a}px`}};
  background: ${({theme:e})=>e.greenMain};
  border: 2px solid ${({theme:e})=>e.darkGreen};
  border-radius: 2px;
  
  /* Гарантуємо мінімальний розмір для дуже малих полів */
  min-width: 20px;
  min-height: 20px;
`,Ve=u.div`
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
`,X1={FOOTBALL:[{id:"football_standard",name:"Стандартне поле",width:105,height:68},{id:"football_small",name:"Мале поле",width:90,height:45},{id:"football_futsal",name:"Футзал",width:40,height:20}],BASKETBALL:[{id:"basketball_nba",name:"NBA",width:28.65,height:15.24},{id:"basketball_fiba",name:"FIBA",width:28,height:15}],VOLLEYBALL:[{id:"volleyball_indoor",name:"Закритий майданчик",width:18,height:9},{id:"volleyball_beach",name:"Пляжний майданчик",width:16,height:8}],TENNIS:[{id:"tennis_singles",name:"Одиночний розряд",width:23.77,height:8.23},{id:"tennis_doubles",name:"Парний розряд",width:23.77,height:10.97}],RUGBY:[{id:"rugby_standard",name:"Регбі (15 гравців)",width:100,height:70},{id:"rugby_sevens",name:"Регбі-7",width:94,height:68}],HANDBALL:[{id:"handball_standard",name:"Гандбол",width:40,height:20}],SHEET:[{id:"a4_portrait",name:"A4 Портрет",width:21,height:29.7},{id:"a4_landscape",name:"A4 Ландшафт",width:29.7,height:21},{id:"a3_portrait",name:"A3 Портрет",width:29.7,height:42},{id:"a3_landscape",name:"A3 Ландшафт",width:42,height:29.7},{id:"a3_landscape1",name:"A3 Ландшафт",width:600,height:29.7},{id:"a3_landscape2",name:"A3 Ландшафт",width:2,height:529.7}]},D1=[{id:"FOOTBALL",name:"Футбол",icon:Pe},{id:"RUGBY",name:"Регбі",icon:v1},{id:"BASKETBALL",name:"Баскетбол",icon:m1},{id:"VOLLEYBALL",name:"Волейбол",icon:C1},{id:"TENNIS",name:"Теніс",icon:y1},{id:"HANDBALL",name:"Гандбол",icon:Pe},{id:"SHEET",name:"Аркуш",icon:M1}],A1=({isOpen:e,onClose:t,onSelectField:i,currentFieldId:l})=>{var f;const[r,o]=p.useState("FOOTBALL"),[h,a]=p.useState(l);if(!e)return null;const m=d=>{a(d.id),i(d),setTimeout(()=>t(),300)},C=d=>{d.target===d.currentTarget&&t()},g=(d,c)=>c==="SHEET"?`${d.width}см × ${d.height}см`:`${d.width}м × ${d.height}м`,s=(d,c)=>c==="SHEET"?`${d}см`:`${d}м`;return n.jsx(L1,{onClick:C,children:n.jsxs(k1,{children:[n.jsxs($1,{children:[n.jsx(b1,{children:"Обрати спортивне поле"}),n.jsx(S1,{onClick:t,children:n.jsx($t,{})})]}),n.jsxs(B1,{children:[n.jsx(z1,{children:D1.map(d=>{const c=d.icon;return n.jsxs(Z1,{active:r===d.id,onClick:()=>o(d.id),children:[n.jsx(T1,{children:n.jsx(c,{})}),d.name]},d.id)})}),n.jsx(R1,{children:n.jsx(E1,{children:(f=X1[r])==null?void 0:f.map(d=>n.jsxs(I1,{selected:h===d.id,onClick:()=>m(d),children:[n.jsx(Y1,{children:d.name}),n.jsx(F1,{children:g(d,r)}),n.jsx(G1,{children:n.jsxs(H1,{fieldWidth:d.width,fieldHeight:d.height,children:[n.jsx(Ve,{className:"width",children:s(d.width,r)}),n.jsx(Ve,{className:"height",children:s(d.height,r)})]})})]},d.id))})})]})]})})},W1=u(n1)`
  width: 80%;
  height: 80%;
  stroke: ${({theme:e})=>e.textBlack};
   fill: ${({theme:e})=>e.textBlack};
`,P1=u(et)`
  width: 100%;
  height: 100%;
   fill: ${({theme:e})=>e.black};
   rotate: 180deg;
`,V1=u(t1)`
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.textBlack};
`,_1=u(Qe)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.textBlack};
`,j1=u(Qe)`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  fill: ${({theme:e})=>e.textBlack};
`,N1=u(Qt)`
  width: 70%;  
  height: 70%;
  stroke: ${({theme:e})=>e.textBlack};
`,U1=u(e1)`
  width: 70%;  
  height: 70%;
  fill: ${({theme:e})=>e.textBlack};
`,q1=u.div`
  width: 100%;
  background: ${({theme:e})=>e.ContainerBGColor};
  border-bottom: 2px solid ${({theme:e})=>e.gray};
  padding: 12px 16px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`,K1=u.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`,O1=u.div`
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
`,J1=u.div`
  flex-shrink: 0;
  position: relative;
  z-index: 10;
`,A=u.button`
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

`,Q1=u.button`
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
  
`,en=u(Jt)`
  width: 60%;
  height: 60%;
  fill: none;
  stroke: ${({theme:e})=>e.textBlack};
`,O=u.div`
  width: 1px;
  height: 20px;
  background: ${({theme:e})=>e.gray};
  margin: 0 4px;
  
  @media (max-width: 768px) {
    height: 16px;
  }
`,_e=u.div`
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
`,je=u.span`
  font-size: 11px;
  color: ${({theme:e})=>e.textGray};
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 9px;
  }
`,Ne=u.input`
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
`,Ue=u.input`
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
`,tn=({currentField:e,onSelectField:t,isSidebarOpen:i,onToggleSidebar:l})=>{const[r,o]=p.useState(!1),h=U(),{activeTool:a,team1:m,team2:C,historyIndex:g,history:s}=le(z=>z.tacticsBoard),f=()=>{o(!0)},d=()=>{o(!1)},c=z=>{t(z),d()},x=z=>{h(ee(z))},w=z=>{h(ee(`shape_${z.id}`))},y=z=>{h(ee(`figure_${z.id}`))},L=z=>{const E=parseInt(z.target.value)||0;h(bt(Math.max(0,Math.min(30,E))))},k=z=>{h(Ke(z.target.value))},Z=z=>{const E=parseInt(z.target.value)||0;h(St(Math.max(0,Math.min(30,E))))},T=z=>{h(Oe(z.target.value))},I=()=>{h(Bt())},Y=()=>{h(zt())},F=()=>{window.confirm("Ви впевнені, що хочете очистити всю дошку?")&&h(Zt())},v=g>0,M=g<s.length-1;return n.jsxs(n.Fragment,{children:[n.jsx(q1,{children:n.jsxs(K1,{children:[n.jsxs(O1,{children:[n.jsx(A,{title:"Обрати поле",onClick:f,children:n.jsx(en,{})}),n.jsx(O,{}),n.jsx(A,{title:"Курсор (виділення та переміщення)",active:a==="cursor",onClick:()=>x("cursor"),children:n.jsx(N1,{})}),n.jsx(A,{title:"Додати текст",active:a==="text",onClick:()=>x("text"),children:n.jsx(W1,{})}),n.jsx(A,{title:"Малювання",active:a==="drawing",onClick:()=>x("drawing"),children:n.jsx(U1,{})}),n.jsx(O,{}),n.jsx(p1,{activeTool:a,onSelectShape:w}),n.jsx(w1,{activeTool:a,onSelectFigure:y}),n.jsx(O,{}),n.jsxs(_e,{children:[n.jsx(je,{children:"К1:"}),n.jsx(Ne,{type:"number",min:"0",max:"30",value:m.count,onChange:L,title:"Кількість гравців команди 1"}),n.jsx(Ue,{type:"color",value:m.color,onChange:k,title:"Колір команди 1"})]}),n.jsxs(_e,{children:[n.jsx(je,{children:"К2:"}),n.jsx(Ne,{type:"number",min:"0",max:"30",value:C.count,onChange:Z,title:"Кількість гравців команди 2"}),n.jsx(Ue,{type:"color",value:C.color,onChange:T,title:"Колір команди 2"})]}),n.jsx(O,{}),n.jsx(A,{title:"М'яч",active:a==="ball",onClick:()=>x("ball"),children:"⚽"}),n.jsx(A,{title:"Картки",active:a==="cards",onClick:()=>x("cards"),children:"🟨"}),n.jsx(O,{}),n.jsx(A,{title:"Назад (Undo)",onClick:I,disabled:!v,children:n.jsx(j1,{})}),n.jsx(A,{title:"Вперед (Redo)",onClick:Y,disabled:!M,children:n.jsx(_1,{})}),n.jsx(A,{title:"Скасувати все",onClick:F,children:n.jsx(V1,{})})]}),n.jsx(J1,{children:n.jsx(Q1,{title:"Відкрити панель інструментів",active:i,onClick:l,children:n.jsx(P1,{})})})]})}),n.jsx(A1,{isOpen:r,onClose:d,onSelectField:c,currentFieldId:e.id})]})},nn=u.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,rn=u.div`
  display: grid;
  grid-template-columns: 40px 1fr 80px;
  gap: 8px;
  align-items: center;
`,an=u.div`
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
`,on=u.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  border: 2px solid ${({theme:e})=>e.lightGreen||"#ccc"};
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    border-radius: 50%;
    z-index: 1;
    background: ${e=>`rgba(${e.$rgbaColor}, ${e.$opacity})`};
  }
`,sn=u.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,ln=u.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,cn=u.input`
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
`,hn=u.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
`,dn=u.div`
  position: relative;
`,pn=u.input`
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
`,xn=u.span`
  font-size: 10px;
  color: ${({theme:e})=>e.textGray||"#777"};
  display: block;
  text-align: center;
  margin-top: 2px;
`,ye=({color:e,opacity:t,onColorChange:i,onOpacityChange:l,label:r})=>{const[o,h]=p.useState(e||"#000000"),[a,m]=p.useState(t||100),[C,g]=p.useState("0, 0, 0, 1"),s=p.useRef(null),f=p.useRef(null),d=(v,M=1)=>{if(!v)return"0, 0, 0, 1";v=v.replace("#",""),v.length===3&&(v=v[0]+v[0]+v[1]+v[1]+v[2]+v[2]);const z=parseInt(v.slice(0,2),16),E=parseInt(v.slice(2,4),16),R=parseInt(v.slice(4,6),16);return`${z}, ${E}, ${R}, ${M}`},c=v=>/^[\d\s,\.]*$/.test(v),x=v=>{const M=v.split(",").map(_=>parseFloat(_.trim()));if(M.length<3||M.some(isNaN))return null;const z=Math.max(0,Math.min(255,M[0]||0)),E=Math.max(0,Math.min(255,M[1]||0)),R=Math.max(0,Math.min(255,M[2]||0)),G=M[3]!==void 0?Math.max(0,Math.min(1,M[3])):1;return{r:z,g:E,b:R,alpha:G}},w=v=>Math.max(0,Math.min(1,v/100)),y=v=>Math.round(Math.max(0,Math.min(100,v*100))),L=()=>{const v=o.replace("#","");let M,z,E;return v.length===3?(M=parseInt(v[0]+v[0],16),z=parseInt(v[1]+v[1],16),E=parseInt(v[2]+v[2],16)):(M=parseInt(v.slice(0,2),16),z=parseInt(v.slice(2,4),16),E=parseInt(v.slice(4,6),16)),`${M}, ${z}, ${E}`};p.useEffect(()=>{h(e||"#000000"),m(t||100);const v=w(t||100);g(d(e||"#000000",v))},[e,t]);const k=v=>{const M=v.target.value,z=w(a);h(M),g(d(M,z)),f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{i&&i(M)},100)},Z=v=>{const M=v.target.value;c(M)&&g(M)},T=v=>{const M=v.target.value,z=x(M);if(z){const{r:E,g:R,b:G,alpha:_}=z,te=`${E}, ${R}, ${G}, ${_}`,q=`#${((1<<24)+(E<<16)+(R<<8)+G).toString(16).slice(1)}`,ne=y(_);g(te),h(q),m(ne),i&&i(q),l&&l(ne)}else{const E=w(a);g(d(o,E))}},I=v=>{let M=parseInt(v.target.value);isNaN(M)&&(M=0),M=Math.max(0,Math.min(100,M));const z=w(M);m(M),g(d(o,z))},Y=v=>{let M=parseInt(v.target.value);isNaN(M)&&(M=0),M=Math.max(0,Math.min(100,M));const z=w(M);m(M),g(d(o,z)),l&&l(M)},F=()=>{s.current&&s.current.click()};return n.jsxs("div",{children:[r&&n.jsx(nn,{children:r}),n.jsxs(rn,{children:[n.jsxs(an,{children:[n.jsx(on,{$rgbaColor:L(),$opacity:a/100,onClick:F}),n.jsx(sn,{ref:s,type:"color",value:o,onChange:k})]}),n.jsxs(ln,{children:[n.jsx(cn,{type:"text",value:C,onChange:Z,onBlur:T,placeholder:"0, 0, 0, 1"}),n.jsx(hn,{children:"RGBA"})]}),n.jsxs(dn,{children:[n.jsx(pn,{type:"number",min:"0",max:"100",value:a,onChange:I,onBlur:Y}),n.jsx(xn,{children:"Прозорість %"})]})]})]})},gn=u.div`
  position: relative;
  width: 100%;
`,un=u.button`
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
`,fn=u.div`
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
`,wn=u.div`
  padding: 6px 8px;
  font-family: ${({$fontFamily:e})=>e||"Arial"};
  cursor: pointer;
  color: ${({theme:e})=>e.textBlack};
  background-color: ${({selected:e,theme:t})=>e?t.lightGreen:"transparent"};

  &:hover {
    background-color: ${({theme:e})=>e.greenMain};
    color: ${({theme:e})=>e.white};
  }
`,mn=u(Xt)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) rotate(${({$open:e})=>e?"180deg":"0"});
  width: 20px;
  height: 20px;
  stroke: ${({theme:e})=>e.iconColor};
  transition: transform 0.3s ease;
`,Cn=({value:e,onChange:t,options:i=[],placeholder:l="Оберіть..."})=>{const[r,o]=p.useState(!1),h=p.useRef(null),a=()=>o(s=>!s),m=()=>o(!1),C=s=>{t(s),m()};p.useEffect(()=>{const s=f=>{h.current&&!h.current.contains(f.target)&&m()};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[]);const g=i.find(s=>s.value===e);return n.jsxs(gn,{ref:h,children:[n.jsxs(un,{onClick:a,$fontFamily:g==null?void 0:g.value,children:[g?g.label:l,n.jsx(mn,{$open:r})]}),r&&n.jsx(fn,{children:i.map(s=>n.jsx(wn,{onClick:()=>C(s.value),selected:s.value===e,$fontFamily:s.value,children:s.label},s.value))})]})},yn=u.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,vn=u.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,W=u.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,V=u.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Mn=u.textarea`
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
`,oe=u.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:i,theme:l})=>{const r=(e-t)/(i-t)*100;return`linear-gradient(to right, ${l.greenMain} 0%, ${l.greenMain} ${r}%, ${l.lightGreen} ${r}%, ${l.lightGreen} 100%)`}};
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
`,se=u.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Ln=u.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,we=u.button`
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
`,kn=({selectedObject:e})=>{const t=U(),[i,l]=p.useState(e.text||"");p.useEffect(()=>{l(e.text||"")},[e.id]);const r=(a,m)=>{t(N({id:e.id,updates:{[a]:m}}))},o=a=>{l(a.target.value)},h=()=>{r("text",i)};return n.jsxs(yn,{children:[n.jsx(vn,{children:"Властивості тексту"}),n.jsxs(W,{children:[n.jsx(V,{children:"Текст"}),n.jsx(Mn,{value:i,onChange:o,onBlur:h,placeholder:"Введіть текст...",$fontFamily:e.fontFamily})]}),n.jsx(W,{children:n.jsx(ye,{color:e.color||"#000000",opacity:e.opacity||100,onColorChange:a=>r("color",a),onOpacityChange:a=>r("opacity",a),label:"Колір і прозорість"})}),n.jsxs(W,{children:[n.jsxs(V,{children:["Розмір шрифту",n.jsxs(se,{children:[e.fontSize||16,"px"]})]}),n.jsx(oe,{type:"range",min:"8",max:"200",value:e.fontSize||16,onChange:a=>r("fontSize",Number(a.target.value))})]}),n.jsxs(W,{children:[n.jsx(V,{children:"Тип шрифту"}),n.jsx(Cn,{value:e.fontFamily||"Arial",onChange:a=>r("fontFamily",a),options:[{value:"Arial",label:"Arial"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Georgia",label:"Georgia"},{value:"Verdana",label:"Verdana"},{value:"Comic Sans MS",label:"Comic Sans MS"}],placeholder:"Оберіть шрифт"})]}),n.jsxs(W,{children:[n.jsx(V,{children:"Стиль тексту"}),n.jsxs(Ln,{children:[n.jsx(we,{$active:e.fontWeight==="bold",onClick:()=>r("fontWeight",e.fontWeight==="bold"?"normal":"bold"),children:n.jsx("strong",{children:"B"})}),n.jsx(we,{$active:e.fontStyle==="italic",onClick:()=>r("fontStyle",e.fontStyle==="italic"?"normal":"italic"),children:n.jsx("em",{children:"I"})}),n.jsx(we,{$active:e.textDecoration==="underline",onClick:()=>r("textDecoration",e.textDecoration==="underline"?"none":"underline"),children:n.jsx("u",{children:"U"})})]})]}),n.jsxs(W,{children:[n.jsxs(V,{children:["Міжрядковий інтервал",n.jsx(se,{children:(e.lineHeight||1.5).toFixed(1)})]}),n.jsx(oe,{type:"range",min:"0.8",max:"3",step:"0.1",value:e.lineHeight||1.5,onChange:a=>r("lineHeight",Number(a.target.value))})]}),n.jsxs(W,{children:[n.jsxs(V,{children:["Міжлітерний інтервал",n.jsxs(se,{children:[e.letterSpacing||0,"px"]})]}),n.jsx(oe,{type:"range",min:"-2",max:"10",step:"0.5",value:e.letterSpacing||0,onChange:a=>r("letterSpacing",Number(a.target.value))})]}),n.jsxs(W,{children:[n.jsxs(V,{children:["Поворот тексту",n.jsxs(se,{children:[e.rotation||0,"°"]})]}),n.jsx(oe,{type:"range",min:"-180",max:"180",step:"5",value:e.rotation||0,onChange:a=>r("rotation",Number(a.target.value))})]})]})},$n=u.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,bn=u.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,qe=u.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Sn=u.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,Bn=u.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:i,theme:l})=>{const r=(e-t)/(i-t)*100;return`linear-gradient(to right, ${l.greenMain} 0%, ${l.greenMain} ${r}%, ${l.lightGreen} ${r}%, ${l.lightGreen} 100%)`}};
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
`,zn=u.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Zn=u.p`
  font-size: 12px;
  color: ${({theme:e})=>e.textGray||"#777"};
  margin: 8px 0 0 0;
  font-style: italic;
`,Tn=()=>{const e=U(),{textColor:t,textOpacity:i,textFontSize:l}=le(r=>r.tacticsBoard);return n.jsxs($n,{children:[n.jsx(bn,{children:"Текст"}),n.jsx(qe,{children:n.jsx(ye,{color:t,opacity:i,onColorChange:r=>e(Tt(r)),onOpacityChange:r=>e(Rt(r)),label:"Колір і прозорість"})}),n.jsxs(qe,{children:[n.jsxs(Sn,{children:["Розмір шрифту",n.jsxs(zn,{children:[l,"px"]})]}),n.jsx(Bn,{type:"range",min:"8",max:"200",value:l,onChange:r=>e(Et(Number(r.target.value)))})]}),n.jsx(Zn,{children:"Клікніть на полі, щоб додати текст."})]})},Rn=u.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.lightGreen||"#E0E0E0"};
  
  &:last-child {
    border-bottom: none;
  }
`,En=u.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({theme:e})=>e.textBlack||"#333"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,me=u.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ce=u.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.textBlack||"#555"};
`,In=u.input`
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
`,Yn=u.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({value:e,min:t,max:i,theme:l})=>{const r=(e-t)/(i-t)*100;return`linear-gradient(to right, ${l.greenMain} 0%, ${l.greenMain} ${r}%, ${l.lightGreen} ${r}%, ${l.lightGreen} 100%)`}};
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
`,Fn=u.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.greenMain||"#4CAF50"};
  margin-left: 8px;
`,Gn=({selectedObject:e})=>{const t=U(),i=(r,o)=>{t(N({id:e.id,updates:{[r]:o}}))},l=r=>{e.team===1?t(Ke(r)):t(Oe(r))};return n.jsxs(Rn,{children:[n.jsx(En,{children:"Властивості гравця"}),n.jsxs(me,{children:[n.jsx(Ce,{children:"Номер"}),n.jsx(In,{type:"number",min:"1",max:"99",value:e.number||1,onChange:r=>i("number",Number(r.target.value))})]}),n.jsxs(me,{children:[n.jsx(Ce,{children:"Колір команди"}),n.jsx(ye,{color:e.color||"#ff0000",opacity:100,onColorChange:l,label:""})]}),n.jsxs(me,{children:[n.jsxs(Ce,{children:["Розмір",n.jsxs(Fn,{children:[e.radius||20,"px"]})]}),n.jsx(Yn,{type:"range",min:"10",max:"50",value:e.radius||20,onChange:r=>i("radius",Number(r.target.value))})]})]})},Hn=u(et)`
  width: 100%;
  height: 100%;
  fill: ${({theme:e})=>e.black};
`,Xn=u.div`
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
`,Dn=u.div`
  padding: 16px;
  height: calc(100% - 48px);
`,An=u.button`
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
`,Wn=u.div`
  text-align: center;
  padding: 40px 20px;
  color: ${({theme:e})=>e.textGray||"#999"};
  font-size: 14px;
`,J=u.button`
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
`,Pn=({isOpen:e,onClose:t})=>{const i=U(),{activeTool:l,selectedObjectId:r,objects:o,paths:h}=le(g=>g.tacticsBoard),a=r?r.startsWith("path_")?{...h[parseInt(r.replace("path_",""))],type:"path",id:r}:o.find(g=>g.id===r):null,m=()=>{if(r){if(r.startsWith("path_")){const g=parseInt(r.replace("path_",""));i(It(g))}else i(Yt(r));i(Q())}},C=()=>{if(a)switch(a.type){case"text":return n.jsxs(n.Fragment,{children:[n.jsx(kn,{selectedObject:a}),n.jsx(J,{onClick:m,children:"Видалити текст"})]});case"player":return n.jsxs(n.Fragment,{children:[n.jsx(Gn,{selectedObject:a}),n.jsx(J,{onClick:m,children:"Видалити гравця"})]});case"path":return n.jsx(J,{onClick:m,children:"Видалити малюнок"});case"shape":return n.jsx(J,{onClick:m,children:"Видалити фігуру"});default:return n.jsx(J,{onClick:m,children:"Видалити об'єкт"})}switch(l){case"drawing":case"text":return n.jsx(Tn,{});case"shape_rectangle":case"shape_circle":case"shape_triangle":case"shape_line":case"shape_arrow":default:return n.jsxs(Wn,{children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎯"}),n.jsx("p",{children:"Виберіть інструмент або об'єкт"}),n.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px",fontStyle:"italic"},children:"Налаштування з'являться тут"})]})}};return n.jsxs(Xn,{$isOpen:e,children:[n.jsx(An,{title:"Закрити панель інструментів",onClick:t,children:n.jsx(Hn,{})}),n.jsx(Dn,{children:C()})]})},Vn=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: ${({theme:e})=>e.mainBGColor};
`,_n=u.div`
  background: ${({theme:e})=>e.ContainerBGColor};
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`,jn=u.div`
  width: 100%;
`,Kn=({theme:e})=>{const{setTitle:t}=Ft(),[i,l]=p.useState(!1),[r,o]=p.useState({id:"football_standard",name:"Стандартне футбольне поле",width:105,height:68}),h=C=>{o(C)},a=()=>{l(!i)},m=()=>{l(!1)};return p.useEffect(()=>{t("Тактична дошка")},[t]),n.jsx(Gt,{store:Ht,children:n.jsx(Vn,{children:n.jsxs(_n,{children:[n.jsx(tn,{currentField:r,onSelectField:h,isSidebarOpen:i,onToggleSidebar:a}),n.jsx(jn,{children:n.jsx(Ot,{fieldSize:{width:r.width,height:r.height},fieldType:r.id})}),n.jsx(Pn,{isOpen:i,onClose:m,children:n.jsx("div",{children:"Тут будуть інструменти"})})]})})})};export{Kn as default};
