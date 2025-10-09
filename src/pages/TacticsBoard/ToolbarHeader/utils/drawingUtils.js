export const drawText = (ctx, textObj, isSelected = false) => {
  ctx.font = `${textObj.fontSize}px Arial`;
  ctx.fillStyle = textObj.color;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  
  const metrics = ctx.measureText(textObj.text);
  const actualWidth = metrics.width;
  const actualHeight = textObj.fontSize * 1.2;
  
  
  ctx.fillStyle = textObj.color;
  ctx.fillText(textObj.text, textObj.x, textObj.y);
  
  if (isSelected) {
 
    ctx.fillStyle = 'rgba(255, 215, 0, 0.2)';
    ctx.fillRect(textObj.x, textObj.y, actualWidth, actualHeight);
    
   
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(textObj.x, textObj.y, actualWidth, actualHeight);
    ctx.setLineDash([]);
  }
  
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

export const drawShape = (ctx, shape, isSelected = false, drawColor = '#000') => {
  ctx.strokeStyle = shape.color || drawColor;
  ctx.lineWidth = 2;
  
  if (isSelected) {
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3;
  }
  
  if (shape.shape === 'line' || shape.shape === 'arrow') {
    ctx.beginPath();
    ctx.moveTo(shape.startX, shape.startY);
    ctx.lineTo(shape.endX, shape.endY);
    ctx.stroke();
    
    if (shape.shape === 'arrow') {
      const dx = shape.endX - shape.startX;
      const dy = shape.endY - shape.startY;
      const angle = Math.atan2(dy, dx);
      const arrowSize = 15;
      
      ctx.beginPath();
      ctx.moveTo(shape.endX, shape.endY);
      ctx.lineTo(
        shape.endX - arrowSize * Math.cos(angle - Math.PI / 6),
        shape.endY - arrowSize * Math.sin(angle - Math.PI / 6)
      );
      ctx.moveTo(shape.endX, shape.endY);
      ctx.lineTo(
        shape.endX - arrowSize * Math.cos(angle + Math.PI / 6),
        shape.endY - arrowSize * Math.sin(angle + Math.PI / 6)
      );
      ctx.stroke();
    }
  } else {
    const x = shape.x;
    const y = shape.y;
    const w = shape.width || 50;
    const h = shape.height || 30;
    
    if (shape.shape === 'rectangle') {
      ctx.strokeRect(x, y, w, h);
    } else if (shape.shape === 'circle') {
      const radius = Math.max(Math.abs(w), Math.abs(h)) / 2;
      const centerX = x + w / 2;
      const centerY = y + h / 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
    } else if (shape.shape === 'triangle') {
      ctx.beginPath();
      ctx.moveTo(x + w/2, y);
      ctx.lineTo(x, y + h);
      ctx.lineTo(x + w, y + h);
      ctx.closePath();
      ctx.stroke();
    }
  }
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