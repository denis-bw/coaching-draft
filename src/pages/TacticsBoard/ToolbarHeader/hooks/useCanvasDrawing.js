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
    const canvas = canvasRef.current;
    if (!canvas || points.length < 2) return;
    
    const ctx = canvas.getContext('2d');
    const path = points;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    ctx.beginPath();
    ctx.moveTo(path[path.length - 2].x, path[path.length - 2].y);
    ctx.lineTo(path[path.length - 1].x, path[path.length - 1].y);
    ctx.stroke();
  }, [canvasRef]);

  const drawPreviewShape = useCallback((shape, startPos, endPos, color, borderStyle) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const startX = startPos.x;
    const startY = startPos.y;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    
    // Застосовуємо стиль лінії для preview
    if (borderStyle === 'dashed') {
      ctx.setLineDash([10, 5, 5, 5]);
    } else if (borderStyle === 'dotted') {
      ctx.setLineDash([2, 3, 2, 3]);
    } else {
      ctx.setLineDash([5, 5]);
    }
    
    if (shape === 'line' || shape === 'arrow') {
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endPos.x, endPos.y);
      ctx.stroke();
      
      if (shape === 'arrow') {
        const dx = endPos.x - startX;
        const dy = endPos.y - startY;
        const angle = Math.atan2(dy, dx);
        const arrowSize = 15;
        
        ctx.beginPath();
        ctx.moveTo(endPos.x, endPos.y);
        ctx.lineTo(
          endPos.x - arrowSize * Math.cos(angle - Math.PI / 6),
          endPos.y - arrowSize * Math.sin(angle - Math.PI / 6)
        );
        ctx.moveTo(endPos.x, endPos.y);
        ctx.lineTo(
          endPos.x - arrowSize * Math.cos(angle + Math.PI / 6),
          endPos.y - arrowSize * Math.sin(angle + Math.PI / 6)
        );
        ctx.stroke();
      }
      
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(startX, startY, 4, 0, Math.PI * 2);
      ctx.fill();
      
    } else {
      const width = endPos.x - startX;
      const height = endPos.y - startY;
      
      if (shape === 'rectangle') {
        ctx.strokeRect(startX, startY, width, height);
      } else if (shape === 'circle') {
        const radius = Math.max(Math.abs(width), Math.abs(height)) / 2;
        const centerX = startX + width / 2;
        const centerY = startY + height / 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      } else if (shape === 'triangle') {
        ctx.beginPath();
        ctx.moveTo(startX + width/2, startY);
        ctx.lineTo(startX, startY + height);
        ctx.lineTo(startX + width, startY + height);
        ctx.closePath();
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