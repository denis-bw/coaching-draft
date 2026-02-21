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

export const useCanvasDrawing = (staticCanvasRef, activeCanvasRef, ballImages = {}) => {
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

  const drawRealObject = (ctx, obj, drawColor, isSelected, images) => {
      ctx.save();
      if (obj.type === 'path') {
        drawPath(ctx, obj, isSelected);
      } else {
        switch (obj.type) {
            case 'player': drawPlayer(ctx, obj, isSelected); break;
            case 'ball': drawBall(ctx, obj, isSelected, images); break;
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
          drawRealObject(ctx, obj, drawColor, true, ballImages);
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
             drawRealObject(ctx, obj, drawColor, false, ballImages);
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
          drawRealObject(ctx, obj, drawColor, false, ballImages);
      }
  }, [ballImages]);

  const redrawStatic = useCallback((paths, objects, activeTool, drawColor, brushSize, selectedObjectId, hiddenObjectIds = new Set(), layerOrder = []) => {
    const canvas = staticCanvasRef.current;
    if (!canvas) return;
    
    clearCanvas(canvas, true);
    const ctx = canvas.getContext('2d');

    const allItems = {};
    // ВАЖЛИВО: Гарантуємо наявність type: 'path' для всіх ліній
    paths.forEach(p => allItems[p.id] = { ...p, type: 'path' });
    objects.forEach(o => allItems[o.id] = o);

    const renderItem = (item) => {
        if (!item || hiddenObjectIds.has(item.id)) return;

        if (item.type === 'path') {
            if (selectedObjectId === item.id) return;
            if (item.points.length < 2) return;
            drawCachedOrReal(ctx, item, drawColor, false, canvas);
        } else {
            const isSelected = item.id === selectedObjectId;
            drawRealObject(ctx, item, drawColor, isSelected, ballImages);
        }
    };

    if (layerOrder && layerOrder.length > 0) {
        for (let i = layerOrder.length - 1; i >= 0; i--) {
            renderItem(allItems[layerOrder[i]]);
        }
    } else {
        paths.forEach(renderItem);
        objects.forEach(renderItem);
    }

  }, [staticCanvasRef, clearCanvas, drawCachedOrReal, ballImages]);

  const drawSingleObjectOnActive = useCallback((obj, drawColor, isSelected = true, rotateIconImage = null) => {
    const canvas = activeCanvasRef.current;
    if (!canvas || !obj) return;
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    
    drawRealObject(ctx, obj, drawColor, isSelected, ballImages);

    if (isSelected) {
        const bounds = getObjectBounds(obj, canvas);
        if (bounds) {
            drawSelectionBox(ctx, bounds);
            if (!obj._cache) { 
                drawResizeHandles(ctx, bounds, obj, rotateIconImage);
            }
        }
    }
    ctx.restore();

  }, [activeCanvasRef, ballImages]);

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
         const { 
           type, start, end, 
           borderColor, borderOpacity, borderStyle, borderWidth, 
           fillColor, fillOpacity,
           lineCapStart, lineCapEnd
         } = previewShape;
         
         if (type === 'line' || type === 'arrow') {
             const tempShape = {
                 type: 'shape', shape: type, startX: start.x, startY: start.y, endX: end.x, endY: end.y,
                 borderColor, borderOpacity, borderWidth, borderStyle, lineCapStart, lineCapEnd, rotation: 0
             };
             drawShape(ctx, tempShape, false, borderColor);
         } else {
             const width = end.x - start.x;
             const height = end.y - start.y;
             const tempShape = {
                 type: 'shape', shape: type, x: start.x, y: start.y, width, height,
                 borderColor, borderOpacity, borderWidth, borderStyle, fillColor, fillOpacity, rotation: 0, ignoreMinSize: true 
             };
             drawShape(ctx, tempShape, false, borderColor);
         }
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