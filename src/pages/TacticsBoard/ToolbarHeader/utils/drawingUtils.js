export const drawText = (ctx, textObj, isSelected = false) => {
  ctx.save();
  
  if (textObj.rotation) {
    const centerX = textObj.x;
    const centerY = textObj.y;
    ctx.translate(centerX, centerY);
    ctx.rotate((textObj.rotation * Math.PI) / 180);
    ctx.translate(-centerX, -centerY);
  }
  
  const fontWeight = textObj.fontWeight || 'normal';
  const fontStyle = textObj.fontStyle || 'normal';
  const fontSize = textObj.fontSize || 16;
  const fontFamily = textObj.fontFamily || 'Arial';
  
  ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  
  const opacity = textObj.opacity !== undefined ? textObj.opacity / 100 : 1;
  const color = textObj.color || '#000000';
  
  const hex = color.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
  
  const lines = (textObj.text || '').split('\n');
  const lineHeight = (textObj.lineHeight || 1.5) * fontSize;
  const letterSpacing = textObj.letterSpacing || 0;
  
  let maxWidth = 0;
  lines.forEach((line, index) => {
    const y = textObj.y + (index * lineHeight);
    
    if (letterSpacing !== 0) {
      let x = textObj.x;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        ctx.fillText(char, x, y);
        const charWidth = ctx.measureText(char).width;
        x += charWidth + letterSpacing;
      }
      const lineWidth = ctx.measureText(line).width + (letterSpacing * (line.length - 1));
      if (lineWidth > maxWidth) maxWidth = lineWidth;
    } else {
      ctx.fillText(line, textObj.x, y);
      const lineWidth = ctx.measureText(line).width;
      if (lineWidth > maxWidth) maxWidth = lineWidth;
    }
    
    if (textObj.textDecoration === 'underline') {
      const lineWidth = letterSpacing !== 0 
        ? ctx.measureText(line).width + (letterSpacing * (line.length - 1))
        : ctx.measureText(line).width;
      ctx.beginPath();
      ctx.moveTo(textObj.x, y + fontSize);
      ctx.lineTo(textObj.x + lineWidth, y + fontSize);
      ctx.strokeStyle = ctx.fillStyle;
      ctx.lineWidth = Math.max(1, fontSize / 16);
      ctx.stroke();
    }
  });
  
  if (isSelected) {
    const totalHeight = lines.length * lineHeight;
    
    ctx.fillStyle = 'rgba(255, 215, 0, 0.2)';
    ctx.fillRect(textObj.x - 2, textObj.y - 2, maxWidth + 4, totalHeight + 4);
    
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(textObj.x - 2, textObj.y - 2, maxWidth + 4, totalHeight + 4);
    ctx.setLineDash([]);
  }
  
  ctx.restore();
  return textObj;
};

export const drawPath = (ctx, path, isSelected = false) => {
  if (path.points.length < 2) return;
  
  ctx.strokeStyle = path.color;
  ctx.lineWidth = path.brushSize;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  if (isSelected) {
    ctx.shadowColor = '#FFD700';
    ctx.shadowBlur = 10;
  }
  
  ctx.beginPath();
  ctx.moveTo(path.points[0].x, path.points[0].y);
  
  for (let i = 1; i < path.points.length; i++) {
    ctx.lineTo(path.points[i].x, path.points[i].y);
  }
  
  ctx.stroke();
  ctx.shadowBlur = 0;
};

export const drawPlayer = (ctx, player, isSelected = false) => {
  const radius = player.radius || 20;
  
  ctx.fillStyle = player.color;
  ctx.beginPath();
  ctx.arc(player.x, player.y, radius, 0, Math.PI * 2);
  ctx.fill();
  
  if (isSelected) {
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3;
    ctx.stroke();
  }
  
  ctx.fillStyle = 'white';
  ctx.font = `bold ${Math.floor(radius * 0.7)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(player.number, player.x, player.y);
};

export const drawBall = (ctx, ball, isSelected = false) => {
  const radius = ball.radius || 10;
  
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(ball.x - radius/3, ball.y - radius/3, radius/3, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.fill();
  
  if (isSelected) {
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, radius + 2, 0, Math.PI * 2);
    ctx.stroke();
  }
};

// Функція для малювання наконечників
const drawLineCap = (ctx, x, y, angle, capType, size, color, opacity) => {
  if (capType === 'butt') return;
  
  const hex = color.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
  ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
  
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  
  if (capType === 'round') {
    ctx.beginPath();
    ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
    ctx.fill();
  } else if (capType === 'arrow') {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-size * 0.8, -size * 0.4);
    ctx.lineTo(-size * 0.8, size * 0.4);
    ctx.closePath();
    ctx.fill();
  }
  
  ctx.restore();
};

export const drawShape = (ctx, shape, isSelected = false, drawColor = '#000') => {
  ctx.save();
  
  // Для ліній та стрілок застосовуємо поворот навколо центру
  if (shape.rotation) {
    if (shape.shape === 'line' || shape.shape === 'arrow') {
      const centerX = (shape.startX + shape.endX) / 2;
      const centerY = (shape.startY + shape.endY) / 2;
      ctx.translate(centerX, centerY);
      ctx.rotate((shape.rotation * Math.PI) / 180);
      ctx.translate(-centerX, -centerY);
    } else {
      const centerX = shape.x + (shape.width || 50) / 2;
      const centerY = shape.y + (shape.height || 30) / 2;
      ctx.translate(centerX, centerY);
      ctx.rotate((shape.rotation * Math.PI) / 180);
      ctx.translate(-centerX, -centerY);
    }
  }
  
  const borderColor = shape.borderColor || shape.color || drawColor;
  const borderOpacity = shape.borderOpacity !== undefined ? shape.borderOpacity / 100 : 1;
  const borderWidth = shape.borderWidth || 2;
  const borderStyle = shape.borderStyle || 'solid';
  
  const hexBorder = borderColor.replace('#', '');
  const rBorder = parseInt(hexBorder.slice(0, 2), 16);
  const gBorder = parseInt(hexBorder.slice(2, 4), 16);
  const bBorder = parseInt(hexBorder.slice(4, 6), 16);
  
  ctx.strokeStyle = `rgba(${rBorder}, ${gBorder}, ${bBorder}, ${borderOpacity})`;
  ctx.lineWidth = borderWidth;
  
  // ВИПРАВЛЕННЯ СТИЛІВ ЛІНІЙ
  if (borderStyle === 'dashed') {
    ctx.setLineDash([borderWidth * 3, borderWidth * 2]);
  } else if (borderStyle === 'dotted') {
    ctx.setLineDash([borderWidth, borderWidth]);
    ctx.lineCap = 'round';
  } else {
    ctx.setLineDash([]);
  }
  
  if (isSelected) {
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = borderWidth + 2;
    ctx.setLineDash([]);
  }
  
  if (shape.shape === 'line' || shape.shape === 'arrow') {
    const dx = shape.endX - shape.startX;
    const dy = shape.endY - shape.startY;
    const angle = Math.atan2(dy, dx);
    
    ctx.beginPath();
    ctx.moveTo(shape.startX, shape.startY);
    ctx.lineTo(shape.endX, shape.endY);
    ctx.stroke();
    
    // Малюємо наконечники тільки якщо не виділено
    if (!isSelected) {
      const arrowSize = Math.max(borderWidth * 3, 12);
      const lineCapStart = shape.lineCapStart || 'butt';
      const lineCapEnd = shape.shape === 'arrow' ? 'arrow' : (shape.lineCapEnd || 'butt');
      
      drawLineCap(ctx, shape.startX, shape.startY, angle + Math.PI, lineCapStart, arrowSize, borderColor, borderOpacity);
      drawLineCap(ctx, shape.endX, shape.endY, angle, lineCapEnd, arrowSize, borderColor, borderOpacity);
    }
  } else {
    const x = shape.x;
    const y = shape.y;
    const w = shape.width || 50;
    const h = shape.height || 30;
    
    // ВИПРАВЛЕННЯ ЗАЛИВКИ
    const fillColor = shape.fillColor || '#ffffff';
    const fillOpacity = shape.fillOpacity !== undefined ? shape.fillOpacity / 100 : 0;
    
    let shouldFill = false;
    if (fillOpacity > 0) {
      const hexFill = fillColor.replace('#', '');
      const rFill = parseInt(hexFill.slice(0, 2), 16);
      const gFill = parseInt(hexFill.slice(2, 4), 16);
      const bFill = parseInt(hexFill.slice(4, 6), 16);
      ctx.fillStyle = `rgba(${rFill}, ${gFill}, ${bFill}, ${fillOpacity})`;
      shouldFill = true;
    }
    
    if (shape.shape === 'rectangle') {
      ctx.beginPath();
      ctx.rect(x, y, w, h);
      if (shouldFill) ctx.fill();
      ctx.stroke();
    } else if (shape.shape === 'circle') {
      const radius = Math.max(Math.abs(w), Math.abs(h)) / 2;
      const centerX = x + w / 2;
      const centerY = y + h / 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      if (shouldFill) ctx.fill();
      ctx.stroke();
    } else if (shape.shape === 'triangle') {
      ctx.beginPath();
      ctx.moveTo(x + w/2, y);
      ctx.lineTo(x, y + h);
      ctx.lineTo(x + w, y + h);
      ctx.closePath();
      if (shouldFill) ctx.fill();
      ctx.stroke();
    }
  }
  
  ctx.restore();
};

export const drawFigure = (ctx, figure, isSelected = false) => {
  const size = figure.size || 30;
  
  ctx.font = `${size}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(figure.icon, figure.x, figure.y);
  
  if (isSelected) {
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3;
    ctx.strokeRect(figure.x - size/2, figure.y - size/2, size, size);
  }
};

export const drawSelectionBox = (ctx, bounds) => {
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height);
  ctx.setLineDash([]);
};

export const drawResizeHandles = (ctx, bounds, obj) => {
  const handles = getResizeHandles(bounds, obj);
  const handleSize = 8;
  
  ctx.fillStyle = 'white';
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  
  Object.entries(handles).forEach(([name, handle]) => {
    ctx.fillRect(handle.x - handleSize/2, handle.y - handleSize/2, handleSize, handleSize);
    ctx.strokeRect(handle.x - handleSize/2, handle.y - handleSize/2, handleSize, handleSize);
  });
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
      bottomRight: { x: bounds.x + bounds.width, y: bounds.y + bounds.height, cursor: 'nwse-resize' }
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