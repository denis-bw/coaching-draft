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
  drawResizeHandles,
  createObjectCache
} from '../utils/drawingUtils';
import { getObjectBounds } from '../utils/objectBoundsUtils';

export const useCanvasDrawing = (staticCanvasRef, activeCanvasRef) => {
  const tempObjectDataRef = useRef(null);
  const tempPathDataRef = useRef(null);
  
  const smartCacheRef = useRef(new Map());

  const clearCanvas = useCallback((canvas, isStatic = false) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  const clearActiveLayer = useCallback(() => {
      const canvas = activeCanvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, [activeCanvasRef]);

  const drawRealObject = (ctx, obj, drawColor, isSelected) => {
      ctx.save();
      if (obj.type === 'path') {
        drawPath(ctx, obj, isSelected);
      } else {
        switch (obj.type) {
            case 'player': drawPlayer(ctx, obj, isSelected); break;
            case 'ball': drawBall(ctx, obj, isSelected); break;
            case 'shape': 
               drawShape(ctx, obj, isSelected, obj.borderColor || drawColor); 
               break;
            case 'figure': drawFigure(ctx, obj, isSelected); break;
            case 'text': drawText(ctx, obj, isSelected); break;
            default: break;
        }
      }
      ctx.restore();
  };

  const drawCachedOrReal = useCallback((ctx, obj, drawColor, isSelected, canvas) => {
      if (isSelected) {
          drawRealObject(ctx, obj, drawColor, true);
          return;
      }

      const currentHash = JSON.stringify(obj);
      
      const cachedData = smartCacheRef.current.get(obj.id);

      if (cachedData && cachedData.hash === currentHash && cachedData.cache) {
          const { cache } = cachedData;

          const bounds = getObjectBounds(obj, canvas);
          if (bounds) {
             const padding = (obj.brushSize || obj.borderWidth || 10) * 2 + 20;
             ctx.drawImage(cache.canvas, bounds.x - padding, bounds.y - padding);
          } else {
             drawRealObject(ctx, obj, drawColor, false);
          }
          return;
      }

      const newCache = createObjectCache(obj, canvas);
      
      if (newCache) {
          smartCacheRef.current.set(obj.id, {
              hash: currentHash,
              cache: newCache
          });
          
          const bounds = getObjectBounds(obj, canvas);
          if (bounds) {
             const padding = (obj.brushSize || obj.borderWidth || 10) * 2 + 20;
             ctx.drawImage(newCache.canvas, bounds.x - padding, bounds.y - padding);
          }
      } else {
          drawRealObject(ctx, obj, drawColor, false);
      }
  }, []);

  const redrawStatic = useCallback((paths, objects, activeTool, drawColor, brushSize, excludeObjectId = null) => {
    const canvas = staticCanvasRef.current;
    if (!canvas) return;
    
    clearCanvas(canvas, true);
    const ctx = canvas.getContext('2d');

    paths.forEach((path, index) => {
      const pathId = `path_${index}`;
      if (pathId === excludeObjectId) return;
      if (path.points.length < 2) return;
      
      const pathObj = { ...path, type: 'path', id: pathId };
      drawCachedOrReal(ctx, pathObj, drawColor, false, canvas);
    });

    objects.forEach(obj => {
      if (obj.id === excludeObjectId) return;
      drawCachedOrReal(ctx, obj, drawColor, false, canvas);
    });

  }, [staticCanvasRef, clearCanvas, drawCachedOrReal]);

  const drawSingleObjectOnActive = useCallback((obj, drawColor, isSelected = true) => {
    const canvas = activeCanvasRef.current;
    if (!canvas || !obj) return;
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.save();
    
    if (obj._cache) {
         const { canvas: cacheImg } = obj._cache;
         const bounds = getObjectBounds(obj, canvas);
         const padding = (obj.brushSize || obj.borderWidth || 10) * 2 + 20;
         ctx.drawImage(cacheImg, bounds.x - padding, bounds.y - padding);
    } 
    else {
        drawRealObject(ctx, obj, drawColor, isSelected);
    }

    if (isSelected) {
        const bounds = getObjectBounds(obj, canvas);
        if (bounds) {
            drawSelectionBox(ctx, bounds);
            if (!obj._cache) { 
                drawResizeHandles(ctx, bounds, obj);
            }
        }
    }
    ctx.restore();

  }, [activeCanvasRef]);

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
    drawSingleObjectOnActive,
    clearActiveLayer,
    tempObjectDataRef,
    tempPathDataRef
  };
};