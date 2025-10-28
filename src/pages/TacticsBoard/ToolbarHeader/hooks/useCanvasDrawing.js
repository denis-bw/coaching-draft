// src/components/TacticsBoard/ToolbarHeader/hooks/useCanvasDrawing.js

import { useCallback, useRef } from 'react';
import {
  drawPath,
  drawPlayer,
  drawBall,
  drawShape,
  drawFigure,
  drawText,
  drawSelectionBox,
  drawResizeHandles
} from '../utils/drawingUtils';
import { getObjectBounds } from '../utils/objectBoundsUtils';

// Допоміжна функція для малювання суцільних кутів (для preview)
const drawCornerPreview = (ctx, x1, y1, x2, y2, x3, y3, strokeStyle, lineWidth) => {
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

// Функція для малювання пунктирної лінії з суцільними кутами (для preview)
const drawStyledLineWithCornersPreview = (ctx, points, borderStyle, borderWidth, strokeStyle) => {
  if (points.length < 2) return;
  
  let perimeter = 0;
  const sideLengths = [];
  
  for (let i = 0; i < points.length; i++) {
    const start = points[i];
    const end = points[(i + 1) % points.length];
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const sideLength = Math.sqrt(dx * dx + dy * dy);
    sideLengths.push(sideLength);
    perimeter += sideLength;
  }
  
  const dashLength = Math.max(borderWidth * 2.5, Math.min(borderWidth * 4, perimeter / 25));
  const minGapLength = Math.max(borderWidth * 1.5, dashLength * 0.5);
  const totalSegmentInitial = dashLength + minGapLength;
  const desiredCornerLength = dashLength * 0.7;
  
  if (borderStyle === 'dotted') {
    // FIX: Виправлена логіка для точок
    const dotRadius = borderWidth / 2;
    const dotSpacing = Math.max(borderWidth * 2, perimeter / 60);
    const numDots = Math.max(points.length * 3, Math.round(perimeter / dotSpacing));
    
    ctx.fillStyle = strokeStyle;
    const dotInterval = perimeter / numDots;
    
    for (let dotIndex = 0; dotIndex < numDots; dotIndex++) {
      const targetDistance = dotIndex * dotInterval;
      let currentDistance = 0;
      
      for (let i = 0; i < points.length; i++) {
        const start = points[i];
        const end = points[(i + 1) % points.length];
        const sideLength = sideLengths[i];
        
        if (currentDistance + sideLength >= targetDistance) {
          const distOnSide = targetDistance - currentDistance;
          const t = distOnSide / sideLength;
          const dotX = start.x + (end.x - start.x) * t;
          const dotY = start.y + (end.y - start.y) * t;
          
          ctx.beginPath();
          ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
          ctx.fill();
          break;
        }
        currentDistance += sideLength;
      }
    }
  } else if (borderStyle === 'dashed') {
    
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = borderWidth;
    ctx.lineCap = 'butt';
    
    // FIX 1: Малюємо суцільні кути
    for (let i = 0; i < points.length; i++) {
      const curr = points[i];
      const prev = points[i === 0 ? points.length - 1 : i - 1];
      const next = points[(i + 1) % points.length];
      
      const len1 = sideLengths[i === 0 ? points.length - 1 : i - 1];
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
        
        drawCornerPreview(ctx, x1, y1, curr.x, curr.y, x2, y2, strokeStyle, borderWidth);
      }
    }
    
    // FIX 2: Малюємо рівномірний пунктир між кутами з фазою
    for (let i = 0; i < points.length; i++) {
      const start = points[i];
      const end = points[(i + 1) % points.length];
      const sideLength = sideLengths[i];
      
      if (sideLength === 0) continue;
      
      const dx = end.x - start.x;
      const dy = end.y - start.y;
      const dirX = dx / sideLength;
      const dirY = dy / sideLength;
      
      const prevLen = sideLengths[i === 0 ? points.length - 1 : i - 1];
      const currentLen = sideLength;
      const nextLen = sideLengths[(i + 1) % points.length];
      
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

export const useCanvasDrawing = (canvasRef) => {
  const tempObjectDataRef = useRef(null);
  const tempPathDataRef = useRef(null);

  const clearCanvas = useCallback((canvas) => {
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const redraw = useCallback((paths, objects, selectedObjectId, activeTool, drawColor, brushSize) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    clearCanvas(canvas);
    const ctx = canvas.getContext('2d');

    let selectedPath = null;
    let selectedPathIndex = -1;
    
    if (selectedObjectId && selectedObjectId.startsWith('path_')) {
      selectedPathIndex = parseInt(selectedObjectId.replace('path_', ''));
      const pathData = paths[selectedPathIndex];
      if (pathData) {
        selectedPath = tempPathDataRef.current && tempPathDataRef.current.id === selectedObjectId 
          ? tempPathDataRef.current 
          : pathData;
      }
    }

    paths.forEach((path, index) => {
      if (path.points.length < 2) return;
      if (index === selectedPathIndex) return; 
      
      const pathToDraw = tempPathDataRef.current && tempPathDataRef.current.id === `path_${index}` 
        ? tempPathDataRef.current 
        : path;
      
      drawPath(ctx, pathToDraw, false);
    });

    const objectsToDraw = tempObjectDataRef.current ? 
      objects.map(obj => obj.id === tempObjectDataRef.current.id ? tempObjectDataRef.current : obj) : 
      objects;

    let selectedObject = null;
    if (selectedObjectId && !selectedObjectId.startsWith('path_')) {
      selectedObject = objectsToDraw.find(obj => obj.id === selectedObjectId);
    }

    objectsToDraw.forEach(obj => {
      if (obj.id === selectedObjectId) return; 
      
      ctx.save();
      
      switch (obj.type) {
        case 'player':
          drawPlayer(ctx, obj, false);
          break;
        case 'ball':
          drawBall(ctx, obj, false);
          break;
        case 'shape':
          drawShape(ctx, obj, false, drawColor);
          break;
        case 'figure':
          drawFigure(ctx, obj, false);
          break;
        case 'text':
          drawText(ctx, obj, false);
          break;
        default:
          break;
      }
      
      ctx.restore();
    });

    if (selectedPath) {
      drawPath(ctx, selectedPath, true);
      const pathObj = { ...selectedPath, type: 'path', id: selectedObjectId };
      const bounds = getObjectBounds(pathObj, canvas);
      if (bounds) {
        drawSelectionBox(ctx, bounds);
      }
    }

    if (selectedObject) {
      ctx.save();
      
      switch (selectedObject.type) {
        case 'player':
          drawPlayer(ctx, selectedObject, true);
          break;
        case 'ball':
          drawBall(ctx, selectedObject, true);
          break;
        case 'shape':
          drawShape(ctx, selectedObject, true, drawColor);
          break;
        case 'figure':
          drawFigure(ctx, selectedObject, true);
          break;
        case 'text':
          drawText(ctx, selectedObject, true);
          break;
        default:
          break;
      }
      
      ctx.restore();
      
      if (activeTool === 'cursor') {
        const bounds = getObjectBounds(selectedObject, canvas);
        if (bounds) {
          drawSelectionBox(ctx, bounds);
          drawResizeHandles(ctx, bounds, selectedObject);
        }
      }
    }
  }, [canvasRef, clearCanvas]);

  const drawLivePath = useCallback((points, color, brushSize) => {
    if (points.length < 2) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const path = points;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.setLineDash([]);
    
    ctx.beginPath();
    ctx.moveTo(path[path.length - 2].x, path[path.length - 2].y);
    ctx.lineTo(path[path.length - 1].x, path[path.length - 1].y);
    ctx.stroke();
  }, [canvasRef]);

  const drawPreviewShape = useCallback((shape, startPos, endPos, color, borderStyle, borderWidth = 2, fillColor = '#ffffff', fillOpacity = 0) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const startX = startPos.x;
    const startY = startPos.y;
    
    const hexColor = color.replace('#', '');
    const r = parseInt(hexColor.slice(0, 2), 16);
    const g = parseInt(hexColor.slice(2, 4), 16);
    const b = parseInt(hexColor.slice(4, 6), 16);
    const strokeStyle = `rgba(${r}, ${g}, ${b}, 1)`;
    
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = borderWidth;
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.setLineDash([]);
    
    // Допоміжна функція для малювання пунктирної/точкової лінії (для ліній/стрілок)
    const drawStyledLinePreview = (x1, y1, x2, y2) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const length = Math.sqrt(dx * dx + dy * dy);
      
      if (length === 0) return;
      
      const dirX = dx / length;
      const dirY = dy / length;
      
      // Адаптивна довжина пунктира
      let baseDashLength = Math.max(borderWidth * 2.5, Math.min(borderWidth * 4, length / 25));
      const dashLength = baseDashLength;
      const minGapLength = Math.max(borderWidth * 1.5, dashLength * 0.5);
      const totalSegmentInitial = dashLength + minGapLength;
      
      if (borderStyle === 'dashed') {
        const numFullSegments = Math.floor(length / totalSegmentInitial);
        
        if (numFullSegments === 0) {
          // Логіка малювання одного пунктиру по центру
          const centerStart = (length - dashLength) / 2;
          if (centerStart >= 0) {
            const sX = x1 + dirX * centerStart;
            const sY = y1 + dirY * centerStart;
            const eX = x1 + dirX * (centerStart + dashLength);
            const eY = y1 + dirY * (centerStart + dashLength);
            
            ctx.beginPath();
            ctx.moveTo(sX, sY);
            ctx.lineTo(eX, eY);
            ctx.stroke();
          }
          return;
        }
        
        // FIX: Рівномірний розподіл (центрування)
        const totalGapLength = length - (numFullSegments * dashLength);
        const adjustedGap = totalGapLength / numSegments;
        
        const fullSegmentLength = dashLength + adjustedGap;
        const totalSegmentsLength = numFullSegments * fullSegmentLength - adjustedGap;
        const firstGap = (length - totalSegmentsLength) / 2;
        const startPhase = firstGap; 
        
        ctx.setLineDash([dashLength, adjustedGap]);
        ctx.lineDashOffset = -startPhase; 
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.lineDashOffset = 0;
        
      } else if (borderStyle === 'dotted') {
        // FIX: Логіка для точок
        const dotSpacing = Math.max(borderWidth * 2, length / 30);
        const dotRadius = borderWidth / 2;
        
        const numDots = Math.max(2, Math.floor(length / dotSpacing) + 1);
        const actualSpacing = length / (numDots - 1);
        
        ctx.fillStyle = strokeStyle;
        
        for (let i = 0; i < numDots; i++) {
          const dist = i * actualSpacing;
          const dotX = x1 + dirX * dist;
          const dotY = y1 + dirY * dist;
          
          ctx.beginPath();
          ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };
    
    if (shape === 'line' || shape === 'arrow') {
      if (borderStyle === 'dashed' || borderStyle === 'dotted') {
        drawStyledLinePreview(startX, startY, endPos.x, endPos.y); 
      } else {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endPos.x, endPos.y);
        ctx.stroke();
      }
      
      if (shape === 'arrow') {
        const dx = endPos.x - startX;
        const dy = endPos.y - startY;
        const angle = Math.atan2(dy, dx);
        const arrowSize = Math.max(borderWidth * 2.5, 10);
        
        ctx.fillStyle = strokeStyle;
        ctx.beginPath();
        ctx.moveTo(endPos.x, endPos.y);
        ctx.lineTo(endPos.x - arrowSize * Math.cos(angle - Math.PI / 6), endPos.y - arrowSize * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(endPos.x - arrowSize * Math.cos(angle + Math.PI / 6), endPos.y - arrowSize * Math.sin(angle + Math.PI / 6));
        ctx.closePath();
        ctx.fill();
      }
      
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(startX, startY, 4, 0, Math.PI * 2);
      ctx.fill();
      
    } else {
      const width = endPos.x - startX;
      const height = endPos.y - startY;
      
      // Малюємо заливку
      if (fillOpacity > 0) {
        const hexFill = fillColor.replace('#', '');
        const rFill = parseInt(hexFill.slice(0, 2), 16);
        const gFill = parseInt(hexFill.slice(2, 4), 16);
        const bFill = parseInt(hexFill.slice(4, 6), 16);
        const opacity = fillOpacity / 100;
        ctx.fillStyle = `rgba(${rFill}, ${gFill}, ${bFill}, ${opacity})`;
        
        ctx.beginPath();
        if (shape === 'rectangle') {
          ctx.rect(startX, startY, width, height);
        } else if (shape === 'circle') {
          const radius = Math.max(Math.abs(width), Math.abs(height)) / 2;
          const centerX = startX + width / 2;
          const centerY = startY + height / 2;
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        } else if (shape === 'triangle') {
          ctx.moveTo(startX + width/2, startY);
          ctx.lineTo(startX, startY + height);
          ctx.lineTo(startX + width, startY + height);
          ctx.closePath();
        }
        ctx.fill();
      }
      
      // Малюємо обводку
      if (borderStyle === 'dashed' || borderStyle === 'dotted') {
        if (shape === 'rectangle') {
          const points = [
            { x: startX, y: startY },
            { x: startX + width, y: startY },
            { x: startX + width, y: startY + height },
            { x: startX, y: startY + height }
          ];
          drawStyledLineWithCornersPreview(ctx, points, borderStyle, borderWidth, strokeStyle);
        } else if (shape === 'triangle') {
          const points = [
            { x: startX + width/2, y: startY },
            { x: startX, y: startY + height },
            { x: startX + width, y: startY + height }
          ];
          drawStyledLineWithCornersPreview(ctx, points, borderStyle, borderWidth, strokeStyle);
        } else if (shape === 'circle') {
          const radius = Math.max(Math.abs(width), Math.abs(height)) / 2;
          const centerX = startX + width / 2;
          const centerY = startY + height / 2;
          const circumference = 2 * Math.PI * radius;
          
          const dashLength = Math.max(borderWidth * 2.5, Math.min(borderWidth * 4, circumference / 25));
          const minGapLength = Math.max(borderWidth * 1.5, dashLength * 0.5);
          const totalSegmentInitial = dashLength + minGapLength;
          
          if (borderStyle === 'dashed') {
            const numFullSegments = Math.floor(circumference / totalSegmentInitial);
            
            if (numFullSegments === 0) {
              ctx.strokeStyle = strokeStyle;
              ctx.lineWidth = borderWidth;
              ctx.beginPath();
              ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
              ctx.stroke();
            } else {
              // FIX: Рівномірний розподіл (центрування)
              const totalGapLength = circumference - (numFullSegments * dashLength);
              const adjustedGap = totalGapLength / numFullSegments;
              
              const actualSegmentAngle = (dashLength + adjustedGap) / radius;
              const dashAngle = dashLength / radius;
              
              const fullSegmentLength = dashLength + adjustedGap;
              const totalSegmentsLength = numFullSegments * fullSegmentLength - adjustedGap;
              const remainingArc = circumference - totalSegmentsLength;
              const startPhase = remainingArc / 2; 
              const startAngleOffset = startPhase / radius;
              
              for (let i = 0; i < numFullSegments; i++) {
                const startAngle = startAngleOffset + i * actualSegmentAngle;
                const endAngle = startAngle + dashAngle;
                
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, startAngle, endAngle);
                ctx.stroke();
              }
            }
          } else {
            // FIX: Виправлена логіка для точок кола
            const dotRadius = borderWidth / 2;
            const dotSpacing = Math.max(borderWidth * 2, circumference / 40);
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
        if (shape === 'rectangle') {
          ctx.rect(startX, startY, width, height);
        } else if (shape === 'circle') {
          const radius = Math.max(Math.abs(width), Math.abs(height)) / 2;
          const centerX = startX + width / 2;
          const centerY = startY + height / 2;
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        } else if (shape === 'triangle') {
          ctx.moveTo(startX + width/2, startY);
          ctx.lineTo(startX, startY + height);
          ctx.lineTo(startX + width, startY + height);
          ctx.closePath();
        }
        ctx.stroke();
      }
    }
    
    ctx.setLineDash([]);
  }, [canvasRef]);

  return {
    redraw,
    clearCanvas,
    drawLivePath,
    drawPreviewShape,
    tempObjectDataRef,
    tempPathDataRef
  };
};