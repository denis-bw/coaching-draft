import { getResizeHandles } from './objectBoundsUtils';

const drawCorner = (ctx, x1, y1, x2, y2, x3, y3, strokeStyle, lineWidth) => {
  ctx.save();
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  ctx.setLineDash([]);
  
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.stroke();
  
  ctx.restore();
};

const drawStyledLine = (ctx, x1, y1, x2, y2, borderStyle, borderWidth, strokeStyle, lineCapStartOffset = 0, lineCapEndOffset = 0) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.sqrt(dx * dx + dy * dy);
  
  if (length === 0) return;
  
  const dirX = dx / length;
  const dirY = dy / length;
  
  const startOffset = lineCapStartOffset; 
  const endOffset = lineCapEndOffset; 
  
  const adjustedLength = length - startOffset - endOffset;
  if (adjustedLength <= 0) return;
  
  const sx = x1 + dirX * startOffset;
  const sy = y1 + dirY * startOffset;
  
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = borderWidth;
  ctx.lineCap = 'butt';
  
  if (borderStyle === 'dashed') {
    const dashLength = Math.max(borderWidth * 3, 12);
    const minGapLength = Math.max(borderWidth * 2, 8);
    const totalSegmentInitial = dashLength + minGapLength;
    
    const numSegments = Math.max(2, Math.floor(adjustedLength / totalSegmentInitial));
    
    if (numSegments === 2 && adjustedLength < totalSegmentInitial * 2) {

      const scaledDash = adjustedLength * 0.35; 
      const scaledGap = adjustedLength * 0.3;  
      
      ctx.setLineDash([scaledDash, scaledGap]);
      ctx.lineDashOffset = 0;
      
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(x2 - dirX * endOffset, y2 - dirY * endOffset);
      ctx.stroke();
      ctx.setLineDash([]);
      return;
    }
        
    const totalGapLength = adjustedLength - (numSegments * dashLength);
    const adjustedGap = totalGapLength / numSegments; 
    
    const fullSegmentLength = dashLength + adjustedGap;
    const totalSegmentsLength = numSegments * fullSegmentLength - adjustedGap;
    const firstGap = (adjustedLength - totalSegmentsLength) / 2;
    const startPhase = firstGap; 
    
    ctx.setLineDash([dashLength, adjustedGap]);
    ctx.lineDashOffset = -startPhase; 
    
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(x2 - dirX * endOffset, y2 - dirY * endOffset);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.lineDashOffset = 0; 
    
  } else if (borderStyle === 'dotted') {
    const dotSpacing = Math.max(borderWidth * 2.5, 10);
    const dotRadius = borderWidth / 2;
    
    const numDots = Math.max(2, Math.floor(adjustedLength / dotSpacing) + 1);
    const actualDotSpacing = adjustedLength / (numDots - 1);
    
    ctx.fillStyle = strokeStyle;
    
    for (let i = 0; i < numDots; i++) {
      const dist = i * actualDotSpacing;
      const dotX = sx + dirX * dist;
      const dotY = sy + dirY * dist;
      
      ctx.beginPath();
      ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
      ctx.fill();
    }
  } else {
 
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(x2 - dirX * endOffset, y2 - dirY * endOffset);
    ctx.stroke();
  }
};

const drawStyledLineWithCorners = (ctx, points, borderStyle, borderWidth, strokeStyle) => {
  if (points.length < 2) return;
  
  if (borderStyle === 'solid') {
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = borderWidth;
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
    ctx.stroke();
    return;
  }

  let perimeter = 0;
  const sideLengths = [];
  const numVertices = points.length;
  
  for (let i = 0; i < numVertices; i++) {
    const start = points[i];
    const end = points[(i + 1) % numVertices];
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const sideLength = Math.sqrt(dx * dx + dy * dy);
    sideLengths.push(sideLength);
    perimeter += sideLength;
  }
  
  if (perimeter < 20) {
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = borderWidth;
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
    ctx.stroke();
    return;
  }
  
  const dashLength = Math.max(borderWidth * 2.5, Math.min(borderWidth * 4, perimeter / 25));
  const minGapLength = Math.max(borderWidth * 1.5, dashLength * 0.5);
  const totalSegmentInitial = dashLength + minGapLength;
  const desiredCornerLength = dashLength * 0.7;
  
  if (borderStyle === 'dotted') {
    const dotRadius = borderWidth / 2;
    const dotSpacing = Math.max(borderWidth * 2, perimeter / 60);
    
    ctx.fillStyle = strokeStyle;
    
    for (let i = 0; i < numVertices; i++) {
      const p = points[i];
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2);
      ctx.fill();
    }
    
    for (let i = 0; i < numVertices; i++) {
      const start = points[i];
      const sideLength = sideLengths[i];
      
      if (sideLength <= 0) continue;
      
      const dx = points[(i + 1) % numVertices].x - start.x;
      const dy = points[(i + 1) % numVertices].y - start.y;
      const dirX = dx / sideLength;
      const dirY = dy / sideLength;
      
      const minIntervals = 1;
      const maxDots = Math.floor(sideLength / dotSpacing) + 1;
      const numIntervals = Math.max(minIntervals, maxDots - 1);
      
      const actualInterval = sideLength / numIntervals;
      
      for (let j = 1; j < numIntervals; j++) {
        const dist = j * actualInterval;
        
        const dotX = start.x + dirX * dist;
        const dotY = start.y + dirY * dist;
        
        ctx.beginPath();
        ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  } else if (borderStyle === 'dashed') {
    
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = borderWidth;
    ctx.lineCap = 'butt';
    
    for (let i = 0; i < numVertices; i++) {
      const curr = points[i];
      const prev = points[i === 0 ? numVertices - 1 : i - 1];
      const next = points[(i + 1) % numVertices];
      
      const len1 = sideLengths[i === 0 ? numVertices - 1 : i - 1];
      const len2 = sideLengths[i];
      
      if (len1 > 0 && len2 > 0) {
        const dx1 = prev.x - curr.x;
        const dy1 = prev.y - curr.y;
        const dx2 = next.x - curr.x;
        const dy2 = next.y - curr.y;
        
        const maxCornerLenForJoint = Math.min(len1, len2) / 3;
        const actualCornerLen = Math.min(desiredCornerLength, maxCornerLenForJoint); 
        
        const x1 = curr.x + (dx1 / len1) * actualCornerLen;
        const y1 = curr.y + (dy1 / len1) * actualCornerLen;
        
        const x2 = curr.x + (dx2 / len2) * actualCornerLen;
        const y2 = curr.y + (dy2 / len2) * actualCornerLen;
        
        drawCorner(ctx, x1, y1, curr.x, curr.y, x2, y2, strokeStyle, borderWidth);
      }
    }
    
    for (let i = 0; i < numVertices; i++) {
      const start = points[i];
      const end = points[(i + 1) % numVertices];
      const sideLength = sideLengths[i];
      
      if (sideLength === 0) continue;
      
      const dx = end.x - start.x;
      const dy = end.y - start.y;
      const dirX = dx / sideLength;
      const dirY = dy / sideLength;
      
      const prevLen = sideLengths[i === 0 ? numVertices - 1 : i - 1];
      const currentLen = sideLength;
      const nextLen = sideLengths[(i + 1) % numVertices];
      
      const maxStartCornerLen = Math.min(prevLen, currentLen) / 3;
      const startOffset = Math.min(desiredCornerLength, maxStartCornerLen);
      
      const maxEndCornerLen = Math.min(currentLen, nextLen) / 3;
      const endOffset = Math.min(desiredCornerLength, maxEndCornerLen);
      
      const adjustedLength = sideLength - startOffset - endOffset;
      
      if (adjustedLength <= dashLength / 2) {
        continue;
      }
      
      const sx = start.x + dirX * startOffset;
      const sy = start.y + dirY * startOffset;
      
      const numSegments = Math.floor(adjustedLength / totalSegmentInitial);
      if (numSegments === 0) {
        const centerDist = adjustedLength / 2 - dashLength / 2;
        if (centerDist >= 0) {
          const x1 = sx + dirX * centerDist;
          const y1 = sy + dirY * centerDist;
          const x2 = sx + dirX * (centerDist + dashLength);
          const y2 = sy + dirY * (centerDist + dashLength);
          
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
        continue;
      }
      
      const totalGapLength = adjustedLength - (numSegments * dashLength);
      const adjustedGap = totalGapLength / numSegments;
      
      const fullSegmentLength = dashLength + adjustedGap;
      const totalSegmentsLength = numSegments * fullSegmentLength - adjustedGap;
      const firstGap = (adjustedLength - totalSegmentsLength) / 2;
      const startPhase = firstGap; 
      
      ctx.setLineDash([dashLength, adjustedGap]);
      ctx.lineDashOffset = -startPhase; 
      
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(end.x - dirX * endOffset, end.y - dirY * endOffset);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.lineDashOffset = 0; 
    }
  }
};

const drawLineCap = (ctx, x, y, angle, capType, size, color, opacity, lineWidth) => {
  if (capType === 'butt') return 0;
  
  const hex = color.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
  ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
  
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  
  let offset = 0;
  
  if (capType === 'round') {
 
    const circleRadius = Math.max(lineWidth * 0.75, 4);
    ctx.beginPath();
    ctx.arc(0, 0, circleRadius, 0, Math.PI * 2);
    ctx.fill();
    offset = 0; 
  } else if (capType === 'arrow') {
   
    ctx.beginPath();
   
    ctx.moveTo(0, 0); 
    ctx.lineTo(-size, -size * 0.5);
    ctx.lineTo(-size, size * 0.5);
    ctx.closePath();
    ctx.fill();
 
    offset = size; 
  } else if (capType === 'circle') {
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.4, 0, Math.PI * 2);
    ctx.fill();
    offset = size * 0.2; 
  } else if (capType === 'bar') {
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'butt';
    ctx.beginPath();
    ctx.moveTo(0, -size * 0.6);
    ctx.lineTo(0, size * 0.6);
    ctx.stroke();
    offset = 0; 
  }
  
  ctx.restore();
  return offset;
};

export const drawText = (ctx, textObj, isSelected = false) => {
  ctx.save();
  
  const fontWeight = textObj.fontWeight || 'normal';
  const fontStyle = textObj.fontStyle || 'normal';
  const fontSize = textObj.fontSize || 16;
  const fontFamily = textObj.fontFamily || 'Arial';
  
  ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  
  const lines = (textObj.text || '').split('\n');
  const lineHeight = (textObj.lineHeight || 1.5) * fontSize;
  const letterSpacing = textObj.letterSpacing || 0;
  
  let maxWidth = 0;
  lines.forEach(line => {
    let lineWidth = 0;
    if (letterSpacing !== 0) {
      lineWidth = ctx.measureText(line).width + (letterSpacing * (line.length - 1));
    } else {
      lineWidth = ctx.measureText(line).width;
    }
    if (lineWidth > maxWidth) maxWidth = lineWidth;
  });
  
  const totalHeight = lines.length > 0 
    ? (lines.length - 1) * lineHeight + fontSize 
    : 0;

  const PADDING = 2;

  if (textObj.rotation) {

    const centerX = textObj.x + maxWidth / 2;
    const centerY = textObj.y + totalHeight / 2;
    
    ctx.translate(centerX, centerY);
    ctx.rotate((textObj.rotation * Math.PI) / 180);
    ctx.translate(-centerX, -centerY);
  }
  
  const opacity = textObj.opacity !== undefined ? textObj.opacity / 100 : 1;
  const color = textObj.color || '#000000';
  
  const hex = color.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
  
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
    } else {
      ctx.fillText(line, textObj.x, y);
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
    ctx.fillStyle = 'rgba(255, 215, 0, 0.2)';

    ctx.fillRect(
      textObj.x - PADDING, 
      textObj.y - PADDING, 
      maxWidth + (PADDING * 2), 
      totalHeight + (PADDING * 2)
    );
  }
  
  ctx.restore();
  return textObj;
};

export const drawPath = (ctx, path, isSelected = false) => {
  if (path.points.length < 2) return;
  
  ctx.strokeStyle = isSelected ? '#FFD700' : path.color;
  ctx.lineWidth = path.brushSize;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  if (isSelected) {
    ctx.shadowColor = '#FFD700';
    ctx.shadowBlur = 5;
  }
  
  ctx.beginPath();
  ctx.moveTo(path.points[0].x, path.points[0].y);
  
  for (let i = 1; i < path.points.length; i++) {
    ctx.lineTo(path.points[i].x, path.points[i].y);
  }
  
  ctx.stroke();
  ctx.shadowBlur = 0;
};


export const drawPlayer = (ctx, player, isSelected) => {
  ctx.save();
  
  const x = player.x;
  const y = player.y;
  const radius = player.radius || 20;
  const rotation = player.rotation || 0;
  
  ctx.translate(x, y);
  ctx.rotate((rotation * Math.PI) / 180);
  
  const borderWidth = player.borderWidth || 2;
  const borderOpacity = (player.borderOpacity !== undefined ? player.borderOpacity : 100) / 100;
  const borderColor = isSelected ? '#FFD700' : (player.borderColor || '#000000');
  const borderStyle = player.borderStyle || 'solid';
  
  const borderHex = borderColor.replace('#', '');
  const borderR = parseInt(borderHex.slice(0, 2), 16);
  const borderG = parseInt(borderHex.slice(2, 4), 16);
  const borderB = parseInt(borderHex.slice(4, 6), 16);
  
  const circleOpacity = (player.colorOpacity !== undefined ? player.colorOpacity : 100) / 100;
  const circleColor = player.color || '#ff0000';
  const circleHex = circleColor.replace('#', '');
  const circleR = parseInt(circleHex.slice(0, 2), 16);
  const circleG = parseInt(circleHex.slice(2, 4), 16);
  const circleB = parseInt(circleHex.slice(4, 6), 16);
  
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(${circleR}, ${circleG}, ${circleB}, ${circleOpacity})`;
  ctx.fill();
  
  ctx.strokeStyle = `rgba(${borderR}, ${borderG}, ${borderB}, ${borderOpacity})`;
  ctx.lineWidth = borderWidth;
  
  if (borderStyle === 'dashed') {
      const circumference = 2 * Math.PI * radius;
      const dashLength = Math.max(borderWidth * 2.5, Math.min(borderWidth * 4, circumference / 25));
      const minGapLength = Math.max(borderWidth * 1.5, dashLength * 0.5);
      const totalSegmentInitial = dashLength + minGapLength;
      
      const numFullSegments = Math.floor(circumference / totalSegmentInitial);
      const MIN_DASH_SEGMENTS = 3; 
      
      if (numFullSegments < MIN_DASH_SEGMENTS || circumference < 30) {
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        const totalGapLength = circumference - (numFullSegments * dashLength);
        const adjustedGap = totalGapLength / numFullSegments;
        const actualSegmentAngle = (dashLength + adjustedGap) / radius;
        const dashAngle = dashLength / radius;
        const fullSegmentLength = dashLength + adjustedGap;
        const totalSegmentsLength = numFullSegments * fullSegmentLength - adjustedGap;
        const remainingArc = circumference - totalSegmentsLength;
        const startPhase = remainingArc / 2;
        const startAngleOffset = startPhase / radius;
        
        ctx.lineCap = 'butt';
        
        for (let i = 0; i < numFullSegments; i++) {
          const startAngle = startAngleOffset + i * actualSegmentAngle;
          const endAngle = startAngle + dashAngle;
          ctx.beginPath();
          ctx.arc(0, 0, radius, startAngle, endAngle);
          ctx.stroke();
        }
      }
    } else if (borderStyle === 'dotted') {
      const circumference = 2 * Math.PI * radius;
      const dotRadius = borderWidth / 2;
      const dotSpacing = Math.max(borderWidth * 2, circumference / 60);
      const numDots = Math.max(8, Math.round(circumference / dotSpacing));
      const angleStep = (2 * Math.PI) / numDots;
      
      ctx.fillStyle = `rgba(${borderR}, ${borderG}, ${borderB}, ${borderOpacity})`;
      
      for (let i = 0; i < numDots; i++) {
        const angle = i * angleStep;
        const dotX = radius * Math.cos(angle);
        const dotY = radius * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.stroke();
    }
  
  ctx.setLineDash([]);
  
  const number = player.number !== undefined ? player.number : 1;
  const numberOpacity = (player.numberOpacity !== undefined ? player.numberOpacity : 100) / 100;
  const numberColor = player.numberColor || '#ffffff';
  const numberHex = numberColor.replace('#', '');
  const numberR = parseInt(numberHex.slice(0, 2), 16);
  const numberG = parseInt(numberHex.slice(2, 4), 16);
  const numberB = parseInt(numberHex.slice(4, 6), 16);
  const fontSize = Math.max(12, radius * 0.8);
  
  ctx.fillStyle = `rgba(${numberR}, ${numberG}, ${numberB}, ${numberOpacity})`;
  ctx.font = `bold ${fontSize}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(number.toString(), 0, 0);
  
  if (player.topText) {
    const textOpacity = (player.textOpacity !== undefined ? player.textOpacity : 100) / 100;
    const textColor = player.textColor || '#000000';
    const textHex = textColor.replace('#', '');
    const textR = parseInt(textHex.slice(0, 2), 16);
    const textG = parseInt(textHex.slice(2, 4), 16);
    const textB = parseInt(textHex.slice(4, 6), 16);
    const textFontSize = player.textSize || Math.max(10, radius * 0.5);
    const fixedGap = 5;
    const textY = -(radius + fixedGap);
    
    ctx.fillStyle = `rgba(${textR}, ${textG}, ${textB}, ${textOpacity})`;
    ctx.font = `${textFontSize}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText(player.topText, 0, textY);
  }
  
  if (player.cards && player.cards.length > 0) {
    const cardWidth = radius * 0.35;
    const cardHeight = cardWidth * 1.4;
    const cardSpacing = 4;
    const startAngle = Math.PI / 4;
    const startX = Math.cos(startAngle) * radius * 0.7;
    const startY = Math.sin(startAngle) * radius * 0.7;
    
    player.cards.forEach((card, index) => {
      const cardColor = card.color || (card === 'yellow' ? '#FFD700' : '#FF0000');
      const cardBorderColor = card.cardBorderColor || '#000000';
      const cardX = startX - (index * (cardWidth + cardSpacing));
      
      ctx.fillStyle = cardColor;
      ctx.fillRect(cardX - cardWidth, startY, cardWidth, cardHeight);
      ctx.strokeStyle = cardBorderColor;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([]);
      ctx.strokeRect(cardX - cardWidth, startY, cardWidth, cardHeight);
    });
  }
  
  ctx.restore();
};

export const drawBall = (ctx, ball, isSelected = false) => {
  const radius = ball.radius || 10;
  const strokeColor = isSelected ? '#FFD700' : 'black';
  const lineWidth = isSelected ? 3 : 2;

  ctx.fillStyle = 'white';
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(ball.x - radius/3, ball.y - radius/3, radius/3, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.fill();
};

export const drawShape = (ctx, shape, isSelected = false, drawColor = '#000') => {
  ctx.save();
  
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
  
  const borderColor = isSelected ? '#FFD700' : (shape.borderColor || shape.color || drawColor);
  const borderOpacity = shape.borderOpacity !== undefined ? shape.borderOpacity / 100 : 1;
  const borderWidth = shape.borderWidth || 2;
  const borderStyle = shape.borderStyle || 'solid';
  
  const hexBorder = borderColor.replace('#', '');
  const rBorder = parseInt(hexBorder.slice(0, 2), 16);
  const gBorder = parseInt(hexBorder.slice(2, 4), 16);
  const bBorder = parseInt(hexBorder.slice(4, 6), 16);
  const strokeStyle = `rgba(${rBorder}, ${gBorder}, ${bBorder}, ${borderOpacity})`;
  
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = borderWidth;
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  ctx.setLineDash([]);
  
  if (shape.shape === 'line' || shape.shape === 'arrow') {
    const dx = shape.endX - shape.startX;
    const dy = shape.endY - shape.startY;
    const angle = Math.atan2(dy, dx);
    const lineCapStart = shape.lineCapStart || 'butt';
    const lineCapEnd = shape.lineCapEnd || (shape.shape === 'arrow' ? 'arrow' : 'butt');
    const arrowSize = Math.max(borderWidth * 2.5, 10);

    let requiredStartOffset = 0;

    if (lineCapStart === 'arrow') requiredStartOffset = arrowSize; 
    else if (lineCapStart === 'circle') requiredStartOffset = arrowSize * 0.2; 
    else if (lineCapStart === 'round') requiredStartOffset = 0; 
    else if (lineCapStart === 'bar') requiredStartOffset = 0;

    let requiredEndOffset = 0;

    if (lineCapEnd === 'arrow') requiredEndOffset = arrowSize; 
    else if (lineCapEnd === 'circle') requiredEndOffset = arrowSize * 0.2; 
    else if (lineCapEnd === 'round') requiredEndOffset = 0; 
    else if (lineCapEnd === 'bar') requiredEndOffset = 0;
    
    if (borderStyle === 'dashed' || borderStyle === 'dotted') {
      drawStyledLine(ctx, shape.startX, shape.startY, shape.endX, shape.endY, borderStyle, borderWidth, strokeStyle, requiredStartOffset, requiredEndOffset);
    } else {

      const startX = shape.startX + Math.cos(angle) * requiredStartOffset; 
      const startY = shape.startY + Math.sin(angle) * requiredStartOffset;
      const endX = shape.endX - Math.cos(angle) * requiredEndOffset;    
      const endY = shape.endY - Math.sin(angle) * requiredEndOffset;
      
      ctx.lineCap = 'butt';
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
    
  
    if (lineCapStart !== 'butt') {
      drawLineCap(ctx, shape.startX, shape.startY, angle + Math.PI, lineCapStart, arrowSize, borderColor, borderOpacity, borderWidth);
    }
    if (lineCapEnd !== 'butt') {
      drawLineCap(ctx, shape.endX, shape.endY, angle, lineCapEnd, arrowSize, borderColor, borderOpacity, borderWidth);
    }

  } else {

    const x = shape.x;
    const y = shape.y;
    const w = shape.width || 50;
    const h = shape.height || 30;
    
    const minSize = 10;
    const actualW = Math.abs(w) < minSize ? (w < 0 ? -minSize : minSize) : w;
    const actualH = Math.abs(h) < minSize ? (h < 0 ? -minSize : minSize) : h;
    
    const fillColor = shape.fillColor || '#ffffff';
    const fillOpacity = shape.fillOpacity !== undefined ? shape.fillOpacity / 100 : 0;
    
    if (fillOpacity > 0) {
      const hexFill = fillColor.replace('#', '');
      const rFill = parseInt(hexFill.slice(0, 2), 16);
      const gFill = parseInt(hexFill.slice(2, 4), 16);
      const bFill = parseInt(hexFill.slice(4, 6), 16);
      ctx.fillStyle = `rgba(${rFill}, ${gFill}, ${bFill}, ${fillOpacity})`;
      
      ctx.beginPath();
      if (shape.shape === 'rectangle') {
        ctx.rect(x, y, actualW, actualH);
      } else if (shape.shape === 'circle') {
        const radius = Math.max(Math.abs(actualW), Math.abs(actualH)) / 2;
        const centerX = x + actualW / 2;
        const centerY = y + actualH / 2;
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      } else if (shape.shape === 'triangle') {
        ctx.moveTo(x + actualW/2, y);
        ctx.lineTo(x, y + actualH);
        ctx.lineTo(x + actualW, y + actualH);
        ctx.closePath();
      }
      ctx.fill();
    }
    
    if (borderStyle === 'dashed' || borderStyle === 'dotted') {
      if (shape.shape === 'rectangle') {
        const points = [
          { x: x, y: y },
          { x: x + actualW, y: y },
          { x: x + actualW, y: y + actualH },
          { x: x, y: y + actualH }
        ];
        drawStyledLineWithCorners(ctx, points, borderStyle, borderWidth, strokeStyle);
      } else if (shape.shape === 'triangle') {
        const points = [
          { x: x + actualW/2, y: y },
          { x: x, y: y + actualH },
          { x: x + actualW, y: y + actualH }
        ];
        drawStyledLineWithCorners(ctx, points, borderStyle, borderWidth, strokeStyle);
      } else if (shape.shape === 'circle') {
        const radius = Math.max(Math.abs(actualW), Math.abs(actualH)) / 2;
        const centerX = x + actualW / 2;
        const centerY = y + actualH / 2;
        const circumference = 2 * Math.PI * radius;
        
        const dashLength = Math.max(borderWidth * 2.5, Math.min(borderWidth * 4, circumference / 25));
        const minGapLength = Math.max(borderWidth * 1.5, dashLength * 0.5);
        const totalSegmentInitial = dashLength + minGapLength;
        
        if (circumference < 30) {
          ctx.strokeStyle = strokeStyle;
          ctx.lineWidth = borderWidth;
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.stroke();
        } else if (borderStyle === 'dashed') {
          const numFullSegments = Math.floor(circumference / totalSegmentInitial);
          
          if (numFullSegments === 0) {
            ctx.strokeStyle = strokeStyle;
            ctx.lineWidth = borderWidth;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.stroke();
          } else {
            const totalGapLength = circumference - (numFullSegments * dashLength);
            const adjustedGap = totalGapLength / numFullSegments;
            const actualSegmentAngle = (dashLength + adjustedGap) / radius;
            const dashAngle = dashLength / radius;
            const fullSegmentLength = dashLength + adjustedGap;
            const totalSegmentsLength = numFullSegments * fullSegmentLength - adjustedGap;
            const remainingArc = circumference - totalSegmentsLength;
            const startPhase = remainingArc / 2; 
            const startAngleOffset = startPhase / radius;
            
            ctx.strokeStyle = strokeStyle;
            ctx.lineWidth = borderWidth;
            ctx.lineCap = 'butt';
            
            for (let i = 0; i < numFullSegments; i++) {
              const startAngle = startAngleOffset + i * actualSegmentAngle;
              const endAngle = startAngle + dashAngle;
              ctx.beginPath();
              ctx.arc(centerX, centerY, radius, startAngle, endAngle);
              ctx.stroke();
            }
          }
        } else if (borderStyle === 'dotted') {
          const dotRadius = borderWidth / 2;
          const dotSpacing = Math.max(borderWidth * 2, circumference / 60);
          const numDots = Math.max(8, Math.round(circumference / dotSpacing));
          const angleStep = (2 * Math.PI) / numDots;
          
          ctx.fillStyle = strokeStyle;
          for (let i = 0; i < numDots; i++) {
            const angle = i * angleStep;
            const dotX = centerX + radius * Math.cos(angle);
            const dotY = centerY + radius * Math.sin(angle);
            ctx.beginPath();
            ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    } else {
      ctx.beginPath();
      if (shape.shape === 'rectangle') {
        const x = shape.x;
        const y = shape.y;
        const w = shape.width || 50;
        const h = shape.height || 30;
        ctx.rect(x, y, actualW, actualH);
      } else if (shape.shape === 'circle') {
        const x = shape.x;
        const y = shape.y;
        const w = shape.width || 50;
        const h = shape.height || 30;
        const actualW = w;
        const actualH = h;
        const radius = Math.max(Math.abs(actualW), Math.abs(actualH)) / 2;
        const centerX = x + actualW / 2;
        const centerY = y + actualH / 2;
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      } else if (shape.shape === 'triangle') {
        const x = shape.x;
        const y = shape.y;
        const w = shape.width || 50;
        const h = shape.height || 30;
        const actualW = w;
        const actualH = h;
        ctx.moveTo(x + actualW/2, y);
        ctx.lineTo(x, y + actualH);
        ctx.lineTo(x + actualW, y + actualH);
        ctx.closePath();
      }
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
  ctx.save();
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  
  if (bounds.rotatedCorners && bounds.rotatedCorners.length === 4) {
    ctx.beginPath();
    ctx.moveTo(bounds.rotatedCorners[0].x, bounds.rotatedCorners[0].y);
    for (let i = 1; i < bounds.rotatedCorners.length; i++) {
      ctx.lineTo(bounds.rotatedCorners[i].x, bounds.rotatedCorners[i].y);
    }
    ctx.closePath();
    ctx.stroke();
  } else {
    ctx.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height);
  }
  
  ctx.setLineDash([]);
  ctx.restore();
};

export const drawResizeHandles = (ctx, bounds, obj) => {
  const handles = getResizeHandles(bounds, obj);
  const handleSize = 8;
  
  ctx.fillStyle = 'white';
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  
  Object.entries(handles).forEach(([name, handle]) => {
    ctx.save();
    ctx.fillRect(handle.x - handleSize/2, handle.y - handleSize/2, handleSize, handleSize);
    ctx.strokeRect(handle.x - handleSize/2, handle.y - handleSize/2, handleSize, handleSize);
    ctx.restore();
  });
};