export const getObjectBounds = (obj, canvas) => {
  if (obj.type === 'player') {
    const radius = obj.radius || 20;
    return {
      x: obj.x - radius,
      y: obj.y - radius,
      width: radius * 2,
      height: radius * 2,
      centerX: obj.x,
      centerY: obj.y
    };
  } 
  
  if (obj.type === 'ball') {
    const radius = obj.radius || 10;
    return {
      x: obj.x - radius,
      y: obj.y - radius,
      width: radius * 2,
      height: radius * 2,
      centerX: obj.x,
      centerY: obj.y
    };
  } 
  
if (obj.type === 'shape') {
  if (obj.shape === 'line' || obj.shape === 'arrow') {
    const minX = Math.min(obj.startX, obj.endX);
    const maxX = Math.max(obj.startX, obj.endX);
    const minY = Math.min(obj.startY, obj.endY);
    const maxY = Math.max(obj.startY, obj.endY);
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY,
      startX: obj.startX,
      startY: obj.startY,
      endX: obj.endX,
      endY: obj.endY
    };
  }
  
  const w = obj.width || 50;
  const h = obj.height || 30;
  const minX = w < 0 ? obj.x + w : obj.x;
  const minY = h < 0 ? obj.y + h : obj.y;
  

  if (obj.shape === 'circle') {
    const maxSize = Math.max(Math.abs(w), Math.abs(h));
    const centerX = obj.x + w / 2;
    const centerY = obj.y + h / 2;
    
    return {
      x: centerX - maxSize / 2,
      y: centerY - maxSize / 2,
      width: maxSize,
      height: maxSize,
      centerX: centerX,
      centerY: centerY,
      radius: maxSize / 2,
      originalX: obj.x,
      originalY: obj.y,
      originalWidth: w,
      originalHeight: h
    };
  }
  
  return {
    x: minX,
    y: minY,
    width: Math.abs(w),
    height: Math.abs(h),
    originalX: obj.x,
    originalY: obj.y,
    originalWidth: w,
    originalHeight: h
  };
}
  
  if (obj.type === 'figure') {
    const size = obj.size || 30;
    return {
      x: obj.x - size/2,
      y: obj.y - size/2,
      width: size,
      height: size,
      centerX: obj.x,
      centerY: obj.y
    };
  } 
  
  if (obj.type === 'path') {
    if (!obj.points || obj.points.length === 0) return null;
    
    let minX = obj.points[0].x;
    let minY = obj.points[0].y;
    let maxX = obj.points[0].x;
    let maxY = obj.points[0].y;
    
    obj.points.forEach(p => {
      minX = Math.min(minX, p.x);
      minY = Math.min(minY, p.y);
      maxX = Math.max(maxX, p.x);
      maxY = Math.max(maxY, p.y);
    });
    
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY,
      points: obj.points,
      centerX: (minX + maxX) / 2,
      centerY: (minY + maxY) / 2
    };
  } 
  
if (obj.type === 'text') {
 
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx.font = `${obj.fontSize}px Arial`;
    const metrics = ctx.measureText(obj.text);
    const width = metrics.width;
    const height = obj.fontSize * 1.2;
    
    return {
      x: obj.x,
      y: obj.y,
      width: width,
      height: height,
      centerX: obj.x + width / 2,
      centerY: obj.y + height / 2
    };
  }
  
  const width = obj.width || 100;
  const height = obj.height || 20;
  
  return {
    x: obj.x,
    y: obj.y,
    width: width,
    height: height,
    centerX: obj.x + width / 2,
    centerY: obj.y + height / 2
  };
}

  
  return null;
};

export const isPointInObject = (x, y, obj, brushSize = 10, canvas) => {
  const bounds = getObjectBounds(obj, canvas);
  if (!bounds) return false;
 
  if (obj.type === 'path') {
    const tolerance = Math.max(brushSize, 10);
    for (let i = 0; i < obj.points.length - 1; i++) {
      const p1 = obj.points[i];
      const p2 = obj.points[i + 1];
      
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const length = Math.sqrt(dx * dx + dy * dy);
      
      if (length === 0) continue;
      
      const t = Math.max(0, Math.min(1, ((x - p1.x) * dx + (y - p1.y) * dy) / (length * length)));
      const projX = p1.x + t * dx;
      const projY = p1.y + t * dy;
      const distance = Math.sqrt(Math.pow(x - projX, 2) + Math.pow(y - projY, 2));
      
      if (distance <= tolerance) return true;
    }
    return false;
  }
  
  if (obj.type === 'shape' && (obj.shape === 'line' || obj.shape === 'arrow')) {
    const tolerance = 10;
    const dx = bounds.endX - bounds.startX;
    const dy = bounds.endY - bounds.startY;
    const length = Math.sqrt(dx * dx + dy * dy);
    
    if (length === 0) return false;
    
    const t = Math.max(0, Math.min(1, ((x - bounds.startX) * dx + (y - bounds.startY) * dy) / (length * length)));
    const projX = bounds.startX + t * dx;
    const projY = bounds.startY + t * dy;
    const distance = Math.sqrt(Math.pow(x - projX, 2) + Math.pow(y - projY, 2));
    
    return distance <= tolerance;
  }
  
  if (obj.type === 'shape' && obj.shape === 'circle') {
    const centerX = bounds.centerX || bounds.x + bounds.width / 2;
    const centerY = bounds.centerY || bounds.y + bounds.height / 2;
    const radius = bounds.radius || Math.max(bounds.width, bounds.height) / 2;
    const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
    return distance <= radius;
  }
  
  if (obj.type === 'shape' && obj.shape === 'triangle') {
    const x1 = bounds.originalX + bounds.originalWidth / 2;
    const y1 = bounds.originalY;
    const x2 = bounds.originalX;
    const y2 = bounds.originalY + bounds.originalHeight;
    const x3 = bounds.originalX + bounds.originalWidth;
    const y3 = bounds.originalY + bounds.originalHeight;
    
    const denominator = ((y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3));
    const a = ((y2 - y3) * (x - x3) + (x3 - x2) * (y - y3)) / denominator;
    const b = ((y3 - y1) * (x - x3) + (x1 - x3) * (y - y3)) / denominator;
    const c = 1 - a - b;
    
    return a >= 0 && a <= 1 && b >= 0 && b <= 1 && c >= 0 && c <= 1;
  }
  
  if (obj.type === 'shape' && obj.shape === 'rectangle') {
    const origX = bounds.originalX !== undefined ? bounds.originalX : bounds.x;
    const origY = bounds.originalY !== undefined ? bounds.originalY : bounds.y;
    const w = bounds.originalWidth !== undefined ? bounds.originalWidth : bounds.width;
    const h = bounds.originalHeight !== undefined ? bounds.originalHeight : bounds.height;
    
    const minX = w < 0 ? origX + w : origX;
    const maxX = w < 0 ? origX : origX + w;
    const minY = h < 0 ? origY + h : origY;
    const maxY = h < 0 ? origY : origY + h;
    
    return x >= minX && x <= maxX && y >= minY && y <= maxY;
  }
  
  if (obj.type === 'text') {
    return x >= bounds.x && x <= bounds.x + bounds.width &&
           y >= bounds.y && y <= bounds.y + bounds.height;
  }
  
  return x >= bounds.x && x <= bounds.x + bounds.width &&
         y >= bounds.y && y <= bounds.y + bounds.height;
};

export const isPointInBoundingBox = (x, y, bounds) => {
  if (!bounds) return false;
  return x >= bounds.x && x <= bounds.x + bounds.width &&
         y >= bounds.y && y <= bounds.y + bounds.height;
};

export const getResizeHandles = (bounds, obj) => {
  if (obj && obj.type === 'shape' && (obj.shape === 'line' || obj.shape === 'arrow')) {
    return {
      start: { x: bounds.startX, y: bounds.startY, cursor: 'crosshair' },
      end: { x: bounds.endX, y: bounds.endY, cursor: 'crosshair' }
    };
  }
  
  if (obj && obj.type === 'path') {
    return {};
  }
  
  if (obj && obj.type === 'text') {
    return {
      topLeft: { x: bounds.x, y: bounds.y, cursor: 'nwse-resize' },
      topRight: { x: bounds.x + bounds.width, y: bounds.y, cursor: 'nesw-resize' },
      bottomLeft: { x: bounds.x, y: bounds.y + bounds.height, cursor: 'nesw-resize' },
      bottomRight: { x: bounds.x + bounds.width, y: bounds.y + bounds.height, cursor: 'nwse-resize' },
      top: { x: bounds.x + bounds.width/2, y: bounds.y, cursor: 'ns-resize' },
      bottom: { x: bounds.x + bounds.width/2, y: bounds.y + bounds.height, cursor: 'ns-resize' },
      left: { x: bounds.x, y: bounds.y + bounds.height/2, cursor: 'ew-resize' },
      right: { x: bounds.x + bounds.width, y: bounds.y + bounds.height/2, cursor: 'ew-resize' }
    };
  }
  
  if (obj && (obj.type === 'player' || obj.type === 'ball' || obj.type === 'figure')) {
    return {
      top: { x: bounds.centerX || bounds.x + bounds.width/2, y: bounds.y, cursor: 'ns-resize' },
      bottom: { x: bounds.centerX || bounds.x + bounds.width/2, y: bounds.y + bounds.height, cursor: 'ns-resize' },
      left: { x: bounds.x, y: bounds.centerY || bounds.y + bounds.height/2, cursor: 'ew-resize' },
      right: { x: bounds.x + bounds.width, y: bounds.centerY || bounds.y + bounds.height/2, cursor: 'ew-resize' }
    };
  }
  

  return {
    topLeft: { x: bounds.x, y: bounds.y, cursor: 'nwse-resize' },
    topRight: { x: bounds.x + bounds.width, y: bounds.y, cursor: 'nesw-resize' },
    bottomLeft: { x: bounds.x, y: bounds.y + bounds.height, cursor: 'nesw-resize' },
    bottomRight: { x: bounds.x + bounds.width, y: bounds.y + bounds.height, cursor: 'nwse-resize' },
    top: { x: bounds.x + bounds.width/2, y: bounds.y, cursor: 'ns-resize' },
    bottom: { x: bounds.x + bounds.width/2, y: bounds.y + bounds.height, cursor: 'ns-resize' },
    left: { x: bounds.x, y: bounds.y + bounds.height/2, cursor: 'ew-resize' },
    right: { x: bounds.x + bounds.width, y: bounds.y + bounds.height/2, cursor: 'ew-resize' }
  };
};

export const getHandleAtPosition = (x, y, bounds, obj) => {
  const handles = getResizeHandles(bounds, obj);
  const handleSize = 8;
  
  for (const [name, handle] of Object.entries(handles)) {
   
    if (obj && obj.type === 'shape' && (obj.shape === 'line' || obj.shape === 'arrow')) {
      const distance = Math.sqrt(Math.pow(x - handle.x, 2) + Math.pow(y - handle.y, 2));
      if (distance <= handleSize * 2) {
        return { name, ...handle };
      }
    } else {
     
      if (Math.abs(x - handle.x) <= handleSize && 
          Math.abs(y - handle.y) <= handleSize) {
        return { name, ...handle };
      }
    }
  }
  return null;
};

export const getObjectAtPosition = (x, y, objects, paths, brushSize, canvas) => {
  
  for (let i = objects.length - 1; i >= 0; i--) {
    if (isPointInObject(x, y, objects[i], brushSize, canvas)) {
      return objects[i];
    }
  }
  

  for (let i = paths.length - 1; i >= 0; i--) {
    const pathObj = { ...paths[i], type: 'path', id: `path_${i}` };
    if (isPointInObject(x, y, pathObj, brushSize, canvas)) {
      return pathObj;
    }
  }
  
  return null;
};