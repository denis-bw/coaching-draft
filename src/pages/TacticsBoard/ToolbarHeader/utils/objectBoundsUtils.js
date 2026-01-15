const rotatePoint = (x, y, centerX, centerY, angle) => {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const dx = x - centerX;
  const dy = y - centerY;
  return {
    x: centerX + (dx * cos - dy * sin),
    y: centerY + (dx * sin + dy * cos)
  };
};

export const getObjectBounds = (obj, canvas) => {
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
    
    if (obj.cards && obj.cards.length > 0) {
      const cardWidth = radius * 0.35;
      const cardHeight = cardWidth * 1.4;
      const cardSpacing = 2;
      const startAngle = Math.PI / 4;
      const startX = Math.cos(startAngle) * radius * 0.7;
      const startY = Math.sin(startAngle) * radius * 0.7;
      const lastCardIndex = obj.cards.length - 1;
      const lastCardX = startX - (lastCardIndex * (cardWidth + cardSpacing));
      const cardCorners = [
        { x: lastCardX - cardWidth, y: startY },
        { x: startX, y: startY },
        { x: lastCardX - cardWidth, y: startY + cardHeight },
        { x: startX, y: startY + cardHeight }
      ];
      cardCorners.forEach(corner => {
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
      const rotation = obj.rotation || 0;
      if (rotation !== 0) {
        const angle = (rotation * Math.PI) / 180;
        const centerX = (obj.startX + obj.endX) / 2;
        const centerY = (obj.startY + obj.endY) / 2;
        const rotatedStart = rotatePoint(obj.startX, obj.startY, centerX, centerY, angle);
        const rotatedEnd = rotatePoint(obj.endX, obj.endY, centerX, centerY, angle);
        const minX = Math.min(rotatedStart.x, rotatedEnd.x);
        const maxX = Math.max(rotatedStart.x, rotatedEnd.x);
        const minY = Math.min(rotatedStart.y, rotatedEnd.y);
        const maxY = Math.max(rotatedStart.y, rotatedEnd.y);
        return {
          x: minX, y: minY, width: maxX - minX, height: maxY - minY,
          startX: rotatedStart.x, startY: rotatedStart.y, endX: rotatedEnd.x, endY: rotatedEnd.y,
          originalStartX: obj.startX, originalStartY: obj.startY, originalEndX: obj.endX, originalEndY: obj.endY,
          centerX: centerX, centerY: centerY, rotation: rotation, rotatedCorners: [rotatedStart, rotatedEnd]
        };
      }
      const minX = Math.min(obj.startX, obj.endX);
      const maxX = Math.max(obj.startX, obj.endX);
      const minY = Math.min(obj.startY, obj.endY);
      const maxY = Math.max(obj.startY, obj.endY);
      return {
        x: minX, y: minY, width: maxX - minX, height: maxY - minY,
        startX: obj.startX, startY: obj.startY, endX: obj.endX, endY: obj.endY, rotation: obj.rotation || 0
      };
    }
    
    const w = obj.width || 50;
    const h = obj.height || 30;
    const rotation = obj.rotation || 0;
    
    if (obj.shape === 'circle') {
      const maxSize = Math.max(Math.abs(w), Math.abs(h));
      const centerX = obj.x + w / 2;
      const centerY = obj.y + h / 2;
      return {
        x: centerX - maxSize / 2, y: centerY - maxSize / 2, width: maxSize, height: maxSize,
        centerX: centerX, centerY: centerY, radius: maxSize / 2,
        originalX: obj.x, originalY: obj.y, originalWidth: w, originalHeight: h, rotation: rotation
      };
    }
    
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
      const rotatedCorners = corners.map(corner => rotatePoint(corner.x, corner.y, centerX, centerY, angle));
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
    let minX = obj.points[0].x, minY = obj.points[0].y;
    let maxX = obj.points[0].x, maxY = obj.points[0].y;
    obj.points.forEach(p => {
      minX = Math.min(minX, p.x); minY = Math.min(minY, p.y);
      maxX = Math.max(maxX, p.x); maxY = Math.max(maxY, p.y);
    });
    return {
      x: minX, y: minY, width: maxX - minX, height: maxY - minY,
      points: obj.points, centerX: (minX + maxX) / 2, centerY: (minY + maxY) / 2
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
        const angle = (rotation * Math.PI) / 180;
        
        const corners = [
          { x: obj.x, y: obj.y },
          { x: obj.x + maxWidth, y: obj.y },
          { x: obj.x + maxWidth, y: obj.y + totalHeight },
          { x: obj.x, y: obj.y + totalHeight }
        ];
        
        const rotatedCorners = corners.map(corner => 
          rotatePoint(corner.x, corner.y, pivotX, pivotY, angle)
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

export const isPointInBoundingBox = (x, y, bounds) => {
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

  return x >= bounds.x && x <= bounds.x + bounds.width &&
         y >= bounds.y && y <= bounds.y + bounds.height;
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
  
  return isPointInBoundingBox(x, y, bounds);
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
    if (bounds.rotatedCorners && bounds.rotatedCorners.length === 4) {
      const c = bounds.rotatedCorners;
      return {
        topLeft: { x: c[0].x, y: c[0].y, cursor: 'nwse-resize' },
        topRight: { x: c[1].x, y: c[1].y, cursor: 'nesw-resize' },
        bottomRight: { x: c[2].x, y: c[2].y, cursor: 'nwse-resize' },
        bottomLeft: { x: c[3].x, y: c[3].y, cursor: 'nesw-resize' },
      };
    }
    return {
      topLeft: { x: bounds.x, y: bounds.y, cursor: 'nwse-resize' },
      topRight: { x: bounds.x + bounds.width, y: bounds.y, cursor: 'nesw-resize' },
      bottomLeft: { x: bounds.x, y: bounds.y + bounds.height, cursor: 'nesw-resize' },
      bottomRight: { x: bounds.x + bounds.width, y: bounds.y + bounds.height, cursor: 'nwse-resize' },
    };
  }
  
  if (bounds.rotatedCorners && bounds.rotatedCorners.length === 4) {
    const corners = bounds.rotatedCorners;
    return {
      topLeft: { x: corners[0].x, y: corners[0].y, cursor: 'nwse-resize' },
      topRight: { x: corners[1].x, y: corners[1].y, cursor: 'nesw-resize' },
      bottomRight: { x: corners[2].x, y: corners[2].y, cursor: 'nwse-resize' },
      bottomLeft: { x: corners[3].x, y: corners[3].y, cursor: 'nesw-resize' },
      top: { x: (corners[0].x + corners[1].x) / 2, y: (corners[0].y + corners[1].y) / 2, cursor: 'ns-resize' },
      bottom: { x: (corners[2].x + corners[3].x) / 2, y: (corners[2].y + corners[3].y) / 2, cursor: 'ns-resize' },
      left: { x: (corners[0].x + corners[3].x) / 2, y: (corners[0].y + corners[3].y) / 2, cursor: 'ew-resize' },
      right: { x: (corners[1].x + corners[2].x) / 2, y: (corners[1].y + corners[2].y) / 2, cursor: 'ew-resize' }
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