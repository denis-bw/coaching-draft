export const rotatePoint = (x, y, cx, cy, angleDegrees) => {
  const rad = (angleDegrees * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const dx = x - cx;
  const dy = y - cy;
  return {
    x: cx + (dx * cos - dy * sin),
    y: cy + (dx * sin + dy * cos)
  };
};

export const getObjectBounds = (obj, canvas) => {
  if (!obj) return null;

  if (obj.type === 'player') {
    const radius = obj.radius || 20;
    const rotation = obj.rotation || 0;
    const angle = (rotation * Math.PI) / 180;
    
    let minX = obj.x - radius;
    let maxX = obj.x + radius;
    let minY = obj.y - radius;
    let maxY = obj.y + radius;
    
    if (obj.topText) {
      const textFontSize = obj.textSize || Math.max(10, radius * 0.5);
      const textHeight = textFontSize;
      const textWidth = obj.topText.length * textFontSize * 0.6;
      const textY = -(radius + textHeight);
      const corners = [
        { x: -textWidth / 2, y: textY - textHeight * 0.2 },
        { x: textWidth / 2, y: textY - textHeight * 0.2 },
        { x: -textWidth / 2, y: textY },
        { x: textWidth / 2, y: textY }
      ];
      corners.forEach(corner => {
        const rotatedX = corner.x * Math.cos(angle) - corner.y * Math.sin(angle);
        const rotatedY = corner.x * Math.sin(angle) + corner.y * Math.cos(angle);
        minX = Math.min(minX, obj.x + rotatedX);
        maxX = Math.max(maxX, obj.x + rotatedX);
        minY = Math.min(minY, obj.y + rotatedY);
        maxY = Math.max(maxY, obj.y + rotatedY);
      });
    }
    
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
        const padding = (obj.borderWidth || 2) + 10;
        const cx = (obj.startX + obj.endX) / 2;
        const cy = (obj.startY + obj.endY) / 2;
        const rotation = obj.rotation || 0;

        const pStart = rotatePoint(obj.startX, obj.startY, cx, cy, rotation);
        const pEnd = rotatePoint(obj.endX, obj.endY, cx, cy, rotation);

        const minX = Math.min(pStart.x, pEnd.x) - padding;
        const maxX = Math.max(pStart.x, pEnd.x) + padding;
        const minY = Math.min(pStart.y, pEnd.y) - padding;
        const maxY = Math.max(pStart.y, pEnd.y) + padding;

        return {
            x: minX, 
            y: minY, 
            width: maxX - minX, 
            height: maxY - minY,
            rotatedEndpoints: { start: pStart, end: pEnd },
            startX: obj.startX, 
            startY: obj.startY, 
            endX: obj.endX, 
            endY: obj.endY,
            centerX: cx,
            centerY: cy,
            rotation: rotation
        };
    }
    
    const w = obj.width || 50;
    const h = obj.height || 30;
    const rotation = obj.rotation || 0;
    
    if (rotation !== 0) {
      const angle = (rotation * Math.PI) / 180;
      const centerX = obj.x + w / 2;
      const centerY = obj.y + h / 2;
      
      const corners = [
        { x: obj.x, y: obj.y },
        { x: obj.x + w, y: obj.y },
        { x: obj.x + w, y: obj.y + h },
        { x: obj.x, y: obj.y + h }
      ];
      
      const rotatedCorners = corners.map(corner => rotatePoint(corner.x, corner.y, centerX, centerY, rotation));
      
      let minX = rotatedCorners[0].x, maxX = rotatedCorners[0].x;
      let minY = rotatedCorners[0].y, maxY = rotatedCorners[0].y;
      
      rotatedCorners.forEach(corner => {
        minX = Math.min(minX, corner.x); maxX = Math.max(maxX, corner.x);
        minY = Math.min(minY, corner.y); maxY = Math.max(maxY, corner.y);
      });

      return {
        x: minX, y: minY, width: maxX - minX, height: maxY - minY,
        centerX: centerX, centerY: centerY,
        originalX: obj.x, originalY: obj.y, originalWidth: w, originalHeight: h,
        rotation: rotation, rotatedCorners: rotatedCorners
      };
    }
    
    const minX = w < 0 ? obj.x + w : obj.x;
    const minY = h < 0 ? obj.y + h : obj.y;
    return {
      x: minX, y: minY, width: Math.abs(w), height: Math.abs(h),
      originalX: obj.x, originalY: obj.y, originalWidth: w, originalHeight: h, rotation: rotation
    };
  }
  
  if (obj.type === 'figure') {
    const size = obj.size || 30;
    return {
      x: obj.x - size/2, y: obj.y - size/2, width: size, height: size,
      centerX: obj.x, centerY: obj.y
    };
  } 
  
  if (obj.type === 'path') {
    if (!obj.points || obj.points.length === 0) return null;
    let minX = Infinity, minY = Infinity;
    let maxX = -Infinity, maxY = -Infinity;
    
    for (let i = 0; i < obj.points.length; i += 5) {
        const p = obj.points[i];
        if(p.x < minX) minX = p.x;
        if(p.x > maxX) maxX = p.x;
        if(p.y < minY) minY = p.y;
        if(p.y > maxY) maxY = p.y;
    }
    const last = obj.points[obj.points.length -1];
    if(last.x < minX) minX = last.x; if(last.x > maxX) maxX = last.x;
    if(last.y < minY) minY = last.y; if(last.y > maxY) maxY = last.y;

    const padding = (obj.brushSize || 5) / 2;

    return {
      x: minX - padding, y: minY - padding, width: (maxX - minX) + padding*2, height: (maxY - minY) + padding*2,
      points: obj.points
    };
  } 
  
  if (obj.type === 'text') {
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const fontWeight = obj.fontWeight || 'normal';
      const fontStyle = obj.fontStyle || 'normal';
      const fontSize = obj.fontSize || 16;
      const fontFamily = obj.fontFamily || 'Arial';
      ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`;
      
      const lines = (obj.text || '').split('\n');
      const lineHeight = (obj.lineHeight || 1.5) * fontSize;
      const letterSpacing = obj.letterSpacing || 0;
      
      let maxWidth = 0;
      lines.forEach(line => {
        const metrics = ctx.measureText(line);
        let lineWidth = metrics.width;
        if (letterSpacing !== 0) lineWidth += letterSpacing * (line.length - 1);
        if (lineWidth > maxWidth) maxWidth = lineWidth;
      });

      const totalHeight = lines.length > 0 
        ? (lines.length - 1) * lineHeight + fontSize 
        : 0;
      
      const rotation = obj.rotation || 0;
      const pivotX = obj.x + maxWidth / 2;
      const pivotY = obj.y + totalHeight / 2;
      
      if (rotation !== 0) {
        const corners = [
          { x: obj.x, y: obj.y },
          { x: obj.x + maxWidth, y: obj.y },
          { x: obj.x + maxWidth, y: obj.y + totalHeight },
          { x: obj.x, y: obj.y + totalHeight }
        ];
        
        const rotatedCorners = corners.map(corner => 
          rotatePoint(corner.x, corner.y, pivotX, pivotY, rotation)
        );
        
        let minX = rotatedCorners[0].x, maxX = rotatedCorners[0].x;
        let minY = rotatedCorners[0].y, maxY = rotatedCorners[0].y;
        rotatedCorners.forEach(corner => {
          minX = Math.min(minX, corner.x); maxX = Math.max(maxX, corner.x);
          minY = Math.min(minY, corner.y); maxY = Math.max(maxY, corner.y);
        });
        
        return {
          x: minX, y: minY, width: maxX - minX, height: maxY - minY,
          centerX: pivotX, 
          centerY: pivotY,
          originalX: obj.x,
          originalY: obj.y,
          originalWidth: maxWidth,
          originalHeight: totalHeight,
          rotation: rotation,
          rotatedCorners: rotatedCorners
        };
      }
      
      return {
        x: obj.x, y: obj.y, width: maxWidth, height: totalHeight,
        centerX: pivotX, centerY: pivotY,
        originalX: obj.x, originalY: obj.y,
        originalWidth: maxWidth,
        originalHeight: totalHeight,
        rotation: 0
      };
    }
    const width = obj.width || 100;
    const height = obj.height || 20;
    return {
      x: obj.x, y: obj.y, width: width, height: height,
      centerX: obj.x + width / 2, centerY: obj.y + height / 2
    };
  }
  
  return null;
};

export const isPointInBoundingBox = (x, y, bounds, tolerance = 0) => {
  if (!bounds) return false;

  if (bounds.rotatedCorners && bounds.rotatedCorners.length > 0) {
    const corners = bounds.rotatedCorners;
    let inside = false;

    for (let i = 0, j = corners.length - 1; i < corners.length; j = i++) {
      const xi = corners[i].x, yi = corners[i].y;
      const xj = corners[j].x, yj = corners[j].y;
      const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  }

  return x >= bounds.x - tolerance && x <= bounds.x + bounds.width + tolerance &&
         y >= bounds.y - tolerance && y <= bounds.y + bounds.height + tolerance;
};

export const isPointInObject = (x, y, obj, brushSize = 10, canvas) => {
  const bounds = getObjectBounds(obj, canvas);
  if (!bounds) return false;
  
  if (!isPointInBoundingBox(x, y, bounds, brushSize + 5)) {
      return false;
  }
 
  if (obj.type === 'shape' && (obj.shape === 'line' || obj.shape === 'arrow')) {
    const tolerance = (obj.borderWidth / 2) + brushSize;
    
    const cx = (obj.startX + obj.endX) / 2;
    const cy = (obj.startY + obj.endY) / 2;
    const rotation = obj.rotation || 0;

    const unrotatedPoint = rotatePoint(x, y, cx, cy, -rotation);
    const mx = unrotatedPoint.x;
    const my = unrotatedPoint.y;

    const dx = obj.endX - obj.startX;
    const dy = obj.endY - obj.startY;
    const lenSq = dx * dx + dy * dy;
    
    let t = 0;
    if (lenSq > 0) t = ((mx - obj.startX) * dx + (my - obj.startY) * dy) / lenSq;
    t = Math.max(0, Math.min(1, t));
    
    const projX = obj.startX + t * dx;
    const projY = obj.startY + t * dy;
    
    const distSq = (mx - projX) ** 2 + (my - projY) ** 2;
    return distSq <= tolerance * tolerance;
  }
  
  if (obj.type === 'path') {
    const tolerance = (obj.brushSize / 2) + brushSize; 
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
  
  if (obj.type === 'shape' && obj.shape === 'circle') {
    const centerX = bounds.centerX || bounds.x + bounds.width / 2;
    const centerY = bounds.centerY || bounds.y + bounds.height / 2;
    const rx = ((bounds.originalWidth ? Math.abs(bounds.originalWidth) : bounds.width) / 2) + brushSize;
    const ry = ((bounds.originalHeight ? Math.abs(bounds.originalHeight) : bounds.height) / 2) + brushSize;
    
    if (bounds.rotation) {
        const angle = -(bounds.rotation * Math.PI) / 180;
        const dx = x - centerX;
        const dy = y - centerY;
        const rxPos = dx * Math.cos(angle) - dy * Math.sin(angle);
        const ryPos = dx * Math.sin(angle) + dy * Math.cos(angle);
        return (rxPos * rxPos) / (rx * rx) + (ryPos * ryPos) / (ry * ry) <= 1;
    }
    return (Math.pow(x - centerX, 2) / Math.pow(rx, 2)) + (Math.pow(y - centerY, 2) / Math.pow(ry, 2)) <= 1;
  }
  
  return isPointInBoundingBox(x, y, bounds, brushSize);
};

export const getResizeHandles = (bounds, obj) => {
  const rotation = (obj && obj.rotation) || 0;

  if (obj && obj.type === 'shape' && (obj.shape === 'line' || obj.shape === 'arrow')) {
    if (bounds.rotatedEndpoints) {
        return {
          start: { x: bounds.rotatedEndpoints.start.x, y: bounds.rotatedEndpoints.start.y, cursor: 'crosshair' },
          end: { x: bounds.rotatedEndpoints.end.x, y: bounds.rotatedEndpoints.end.y, cursor: 'crosshair' }
        };
    }
    return {
      start: { x: bounds.startX, y: bounds.startY, cursor: 'crosshair' },
      end: { x: bounds.endX, y: bounds.endY, cursor: 'crosshair' }
    };
  }
  
  if (obj && obj.type === 'path') {
    return {};
  }
  
  const getCursorForRotation = (baseAngle, objectRotation) => {
    const totalAngle = (baseAngle + objectRotation) % 360;
    const normalized = (totalAngle < 0 ? totalAngle + 360 : totalAngle);
    
    const step = Math.round(normalized / 45) % 4;
    
    const cursors = [
      'ns-resize',
      'nesw-resize',
      'ew-resize',
      'nwse-resize'
    ];
    
    return cursors[step];
  };
  
  if (bounds.rotatedCorners && bounds.rotatedCorners.length === 4) {
    const corners = bounds.rotatedCorners;
    return {
      topLeft: { x: corners[0].x, y: corners[0].y, cursor: getCursorForRotation(315, rotation) },
      topRight: { x: corners[1].x, y: corners[1].y, cursor: getCursorForRotation(45, rotation) },
      bottomRight: { x: corners[2].x, y: corners[2].y, cursor: getCursorForRotation(135, rotation) },
      bottomLeft: { x: corners[3].x, y: corners[3].y, cursor: getCursorForRotation(225, rotation) },
      
      top: { x: (corners[0].x + corners[1].x) / 2, y: (corners[0].y + corners[1].y) / 2, cursor: getCursorForRotation(0, rotation) },
      bottom: { x: (corners[2].x + corners[3].x) / 2, y: (corners[2].y + corners[3].y) / 2, cursor: getCursorForRotation(180, rotation) },
      left: { x: (corners[0].x + corners[3].x) / 2, y: (corners[0].y + corners[3].y) / 2, cursor: getCursorForRotation(270, rotation) },
      right: { x: (corners[1].x + corners[2].x) / 2, y: (corners[1].y + corners[2].y) / 2, cursor: getCursorForRotation(90, rotation) }
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
      if (distance <= handleSize * 1.5) {
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

export const getCollidingObjects = (x, y, objects, paths, brushSize, canvas) => {
  const hits = [];
  
  for (let i = objects.length - 1; i >= 0; i--) {
    if (isPointInObject(x, y, objects[i], brushSize, canvas)) {
      hits.push(objects[i]);
    }
  }
  
  for (let i = paths.length - 1; i >= 0; i--) {
    const pathObj = { ...paths[i], type: 'path', id: `path_${i}` };
    if (isPointInObject(x, y, pathObj, brushSize, canvas)) {
      hits.push(pathObj);
    }
  }
  
  return hits;
};

export const getObjectAtPosition = (x, y, objects, paths, brushSize, canvas) => {
    const hits = getCollidingObjects(x, y, objects, paths, brushSize, canvas);
    return hits.length > 0 ? hits[0] : null;
};