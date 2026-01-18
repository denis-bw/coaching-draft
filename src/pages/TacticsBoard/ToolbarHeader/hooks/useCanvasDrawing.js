import { useCallback, useRef } from 'react';
import {
  drawPath,
  drawSegment,
  drawPlayer,
  drawBall,
  drawShape,
  drawFigure,
  drawText,
  drawSelectionBox,
  drawResizeHandles
} from '../utils/drawingUtils';
import { getObjectBounds } from '../utils/objectBoundsUtils';

export const useCanvasDrawing = (staticCanvasRef, activeCanvasRef) => {
  const tempObjectDataRef = useRef(null);
  const tempPathDataRef = useRef(null);

  const clearCanvas = useCallback((canvas, isStatic = false) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (isStatic) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  const clearActiveLayer = useCallback(() => {
      const canvas = activeCanvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, [activeCanvasRef]);

  const redrawStatic = useCallback((paths, objects, selectedObjectId, activeTool, drawColor, brushSize) => {
    const canvas = staticCanvasRef.current;
    if (!canvas) return;
    
    clearCanvas(canvas, true);
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
        case 'player': drawPlayer(ctx, obj, false); break;
        case 'ball': drawBall(ctx, obj, false); break;
        case 'shape': drawShape(ctx, obj, false, drawColor); break;
        case 'figure': drawFigure(ctx, obj, false); break;
        case 'text': drawText(ctx, obj, false); break;
        default: break;
      }
      ctx.restore();
    });

    if (selectedPath) {
      drawPath(ctx, selectedPath, true);
      const pathObj = { ...selectedPath, type: 'path', id: selectedObjectId };
      const bounds = getObjectBounds(pathObj, canvas);
      if (bounds) drawSelectionBox(ctx, bounds);
    }

    if (selectedObject) {
      ctx.save();
      switch (selectedObject.type) {
        case 'player': drawPlayer(ctx, selectedObject, true); break;
        case 'ball': drawBall(ctx, selectedObject, true); break;
        case 'shape': drawShape(ctx, selectedObject, true, drawColor); break;
        case 'figure': drawFigure(ctx, selectedObject, true); break;
        case 'text': drawText(ctx, selectedObject, true); break;
        default: break;
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
  }, [staticCanvasRef, clearCanvas]);

  const drawLiveLayer = useCallback((livePath, previewShape, isIncremental = false) => {
      const canvas = activeCanvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      

      if (!isIncremental) {
         ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      if (livePath && livePath.points && livePath.points.length >= 2) {
          if (isIncremental) {
          
              const len = livePath.points.length;
              const p1 = livePath.points[len - 2];
              const p2 = livePath.points[len - 1];
              
              drawSegment(ctx, p1, p2, {
                  color: livePath.color,
                  opacity: livePath.opacity,
                  brushSize: livePath.brushSize,
                  brushStyle: livePath.brushStyle
              });
          } else {
        
              drawPath(ctx, livePath, false);
          }
      }

      if (previewShape) {
         const { type, start, end, borderColor, borderStyle, borderWidth, fillColor, fillOpacity } = previewShape;
         
         const hexColor = borderColor.replace('#', '');
         const r = parseInt(hexColor.slice(0, 2), 16);
         const g = parseInt(hexColor.slice(2, 4), 16);
         const b = parseInt(hexColor.slice(4, 6), 16);
         const strokeStyle = `rgba(${r}, ${g}, ${b}, 1)`;

         const width = end.x - start.x;
         const height = end.y - start.y;

         ctx.save();
         ctx.strokeStyle = strokeStyle;
         ctx.lineWidth = borderWidth;
         
         if (borderStyle === 'dashed') ctx.setLineDash([10, 5]);
         if (borderStyle === 'dotted') ctx.setLineDash([2, 5]);

         ctx.beginPath();
         
         if (type === 'line' || type === 'arrow') {
             ctx.moveTo(start.x, start.y);
             ctx.lineTo(end.x, end.y);
             ctx.stroke();
             if (type === 'arrow') {
                const angle = Math.atan2(end.y - start.y, end.x - start.x);
                const headLen = 15;
                ctx.beginPath();
                ctx.moveTo(end.x, end.y);
                ctx.lineTo(end.x - headLen * Math.cos(angle - Math.PI / 6), end.y - headLen * Math.sin(angle - Math.PI / 6));
                ctx.moveTo(end.x, end.y);
                ctx.lineTo(end.x - headLen * Math.cos(angle + Math.PI / 6), end.y - headLen * Math.sin(angle + Math.PI / 6));
                ctx.stroke();
             }
         } else {
             if (fillOpacity > 0) {
                 const fHex = fillColor.replace('#', '');
                 const fR = parseInt(fHex.slice(0, 2), 16);
                 const fG = parseInt(fHex.slice(2, 4), 16);
                 const fB = parseInt(fHex.slice(4, 6), 16);
                 ctx.fillStyle = `rgba(${fR}, ${fG}, ${fB}, ${fillOpacity / 100})`;
                 
                 ctx.beginPath();
                 if (type === 'rectangle') ctx.rect(start.x, start.y, width, height);
                 else if (type === 'circle') {
                     const r = Math.max(Math.abs(width), Math.abs(height)) / 2;
                     ctx.arc(start.x + width/2, start.y + height/2, r, 0, Math.PI*2);
                 } else if (type === 'triangle') {
                    ctx.moveTo(start.x + width/2, start.y);
                    ctx.lineTo(start.x, start.y + height);
                    ctx.lineTo(start.x + width, start.y + height);
                    ctx.closePath();
                 }
                 ctx.fill();
             }

             ctx.beginPath();
             if (type === 'rectangle') ctx.rect(start.x, start.y, width, height);
             else if (type === 'circle') {
                 const r = Math.max(Math.abs(width), Math.abs(height)) / 2;
                 ctx.arc(start.x + width/2, start.y + height/2, r, 0, Math.PI*2);
             } else if (type === 'triangle') {
                 ctx.moveTo(start.x + width/2, start.y);
                 ctx.lineTo(start.x, start.y + height);
                 ctx.lineTo(start.x + width, start.y + height);
                 ctx.closePath();
             }
             ctx.stroke();
         }
         ctx.restore();
      }
  }, [activeCanvasRef]);

  return {
    redrawStatic,
    drawLiveLayer,
    clearActiveLayer,
    tempObjectDataRef,
    tempPathDataRef
  };
};