import { useRef } from 'react';

export const useDrawingTools = () => {
  const drawingRef = useRef(false);
  const currentPathRef = useRef([]);
  const shapeStartRef = useRef(null);
  const isDrawingShapeRef = useRef(false);

  const startDrawing = (pos) => {
    drawingRef.current = true;
    currentPathRef.current = [{ x: pos.x, y: pos.y }];
  };

  const continueDrawing = (pos) => {
    if (!drawingRef.current) return null;
    
    currentPathRef.current.push({ x: pos.x, y: pos.y });
    return currentPathRef.current;
  };

  const endDrawing = () => {
    const path = currentPathRef.current;
    drawingRef.current = false;
    currentPathRef.current = [];
    return path.length > 1 ? path : null;
  };

  const startShape = (pos) => {
    isDrawingShapeRef.current = true;
    shapeStartRef.current = pos;
  };

  const getShapePreview = (endPos) => {
    if (!isDrawingShapeRef.current || !shapeStartRef.current) return null;
    
    return {
      start: shapeStartRef.current,
      end: endPos
    };
  };

  const endShape = (endPos, shapeType) => {
    if (!isDrawingShapeRef.current || !shapeStartRef.current) return null;

    const startPos = shapeStartRef.current;
    let shapeData = null;

    if (shapeType === 'line' || shapeType === 'arrow') {
      const length = Math.sqrt(
        Math.pow(endPos.x - startPos.x, 2) + 
        Math.pow(endPos.y - startPos.y, 2)
      );
      
      if (length > 5) {
        shapeData = {
          startX: startPos.x,
          startY: startPos.y,
          endX: endPos.x,
          endY: endPos.y
        };
      }
    } else {
      // Для геометричних фігур (rectangle, circle, triangle)
      const width = endPos.x - startPos.x;
      const height = endPos.y - startPos.y;
      
      if (Math.abs(width) > 5 && Math.abs(height) > 5) {
        shapeData = {
          x: startPos.x,
          y: startPos.y,
          width,
          height
        };
      }
    }

    isDrawingShapeRef.current = false;
    shapeStartRef.current = null;
    
    return shapeData;
  };

  const cancelDrawing = () => {
    drawingRef.current = false;
    currentPathRef.current = [];
    isDrawingShapeRef.current = false;
    shapeStartRef.current = null;
  };

  return {
    drawingRef,
    currentPathRef,
    shapeStartRef,
    isDrawingShapeRef,
    startDrawing,
    continueDrawing,
    endDrawing,
    startShape,
    getShapePreview,
    endShape,
    cancelDrawing
  };
};