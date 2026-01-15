import { useRef, useState } from 'react';
import { getObjectBounds, getObjectAtPosition, getHandleAtPosition, isPointInBoundingBox } from '../utils/objectBoundsUtils';

export const useObjectInteraction = () => {
  const draggedObjectRef = useRef(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const initialDragStateRef = useRef(null); 
  const [cursorStyle, setCursorStyle] = useState('default');

  const startDrag = (clickedObject, pos, canvas) => {

    const bounds = getObjectBounds(clickedObject, canvas);
    
    draggedObjectRef.current = JSON.parse(JSON.stringify(clickedObject));
    
    initialDragStateRef.current = {
      mouseStart: { ...pos },
      objectStart: JSON.parse(JSON.stringify(clickedObject)),
      cachedBounds: bounds || { x: 0, y: 0, width: 0, height: 0 }
    };

    if (clickedObject.type === 'path') {
      dragOffsetRef.current = {
        x: pos.x - bounds.points[0].x,
        y: pos.y - bounds.points[0].y
      };
    } else if (clickedObject.type === 'shape' && (clickedObject.shape === 'line' || clickedObject.shape === 'arrow')) {
      const midX = (clickedObject.startX + clickedObject.endX) / 2;
      const midY = (clickedObject.startY + clickedObject.endY) / 2;
      dragOffsetRef.current = {
        x: pos.x - midX,
        y: pos.y - midY
      };
    } else if (clickedObject.x !== undefined && clickedObject.y !== undefined) {
      dragOffsetRef.current = {
        x: pos.x - clickedObject.x,
        y: pos.y - clickedObject.y
      };
    } else {
      dragOffsetRef.current = {
        x: pos.x - (bounds ? bounds.x : 0),
        y: pos.y - (bounds ? bounds.y : 0)
      };
    }
  };

  const updateDragPosition = (pos, canvasWidth, canvasHeight) => {
    if (!draggedObjectRef.current || !initialDragStateRef.current) return null;

    const { objectStart, cachedBounds } = initialDragStateRef.current;
    
    const totalDeltaX = pos.x - initialDragStateRef.current.mouseStart.x;
    const totalDeltaY = pos.y - initialDragStateRef.current.mouseStart.y;

    let candidateObject = JSON.parse(JSON.stringify(objectStart));
    
    if (candidateObject.type === 'path') {
      candidateObject.points = candidateObject.points.map(p => ({
        x: p.x + totalDeltaX,
        y: p.y + totalDeltaY
      }));
    } else if (candidateObject.type === 'shape' && (candidateObject.shape === 'line' || candidateObject.shape === 'arrow')) {
      candidateObject.startX += totalDeltaX;
      candidateObject.endX += totalDeltaX;
      candidateObject.startY += totalDeltaY;
      candidateObject.endY += totalDeltaY;
    } else {
      candidateObject.x += totalDeltaX;
      candidateObject.y += totalDeltaY;
    }

    const currentBoundsCenterX = (cachedBounds.x + cachedBounds.width / 2) + totalDeltaX;
    const currentBoundsCenterY = (cachedBounds.y + cachedBounds.height / 2) + totalDeltaY;

    let correctionX = 0;
    let correctionY = 0;

    if (currentBoundsCenterX < 0) {
      correctionX = 0 - currentBoundsCenterX;
    } else if (currentBoundsCenterX > canvasWidth) {
      correctionX = canvasWidth - currentBoundsCenterX;
    }

    if (currentBoundsCenterY < 0) {
      correctionY = 0 - currentBoundsCenterY;
    } else if (currentBoundsCenterY > canvasHeight) {
      correctionY = canvasHeight - currentBoundsCenterY;
    }

    if (correctionX !== 0 || correctionY !== 0) {
      if (candidateObject.type === 'path') {
        candidateObject.points = candidateObject.points.map(p => ({
          x: p.x + correctionX,
          y: p.y + correctionY
        }));
      } else if (candidateObject.type === 'shape' && (candidateObject.shape === 'line' || candidateObject.shape === 'arrow')) {
        candidateObject.startX += correctionX;
        candidateObject.endX += correctionX;
        candidateObject.startY += correctionY;
        candidateObject.endY += correctionY;
      } else {
        candidateObject.x += correctionX;
        candidateObject.y += correctionY;
      }
    }

    draggedObjectRef.current = candidateObject;
    return candidateObject;
  };

  const endDrag = () => {
    const draggedObject = draggedObjectRef.current;
    draggedObjectRef.current = null;
    initialDragStateRef.current = null;
    dragOffsetRef.current = { x: 0, y: 0 };
    return draggedObject;
  };

  const updateCursor = (pos, objects, paths, selectedObjectId, brushSize, canvas) => {
    if (selectedObjectId) {
      const selectedObj = selectedObjectId ? 
        (selectedObjectId.startsWith('path_') ? 
          { ...paths[parseInt(selectedObjectId.replace('path_', ''))], type: 'path', id: selectedObjectId } :
          objects.find(o => o.id === selectedObjectId)) : 
        null;
      
      if (selectedObj) {
        const bounds = getObjectBounds(selectedObj, canvas);
        if (bounds) {
          const handle = getHandleAtPosition(pos.x, pos.y, bounds, selectedObj);
          if (handle) {
            setCursorStyle(handle.cursor);
            return;
          }
          if (isPointInBoundingBox(pos.x, pos.y, bounds)) {
            setCursorStyle('move');
            return;
          }
        }
      }
    }
    
    const hoveredObject = getObjectAtPosition(pos.x, pos.y, objects, paths, brushSize, canvas);
    if (hoveredObject) {
      setCursorStyle('pointer');
    } else {
      setCursorStyle('default');
    }
  };

  const checkForHandle = (pos, clickedObject, canvas) => {
    const bounds = getObjectBounds(clickedObject, canvas);
    if (!bounds) return null;
    return getHandleAtPosition(pos.x, pos.y, bounds, clickedObject);
  };

  const checkIfPointInSelectedBounds = (pos, selectedObject, canvas) => {
    if (!selectedObject) return false;
    const bounds = getObjectBounds(selectedObject, canvas);
    return bounds && isPointInBoundingBox(pos.x, pos.y, bounds);
  };
  
  return {
    draggedObjectRef,
    dragOffsetRef,
    cursorStyle,
    setCursorStyle,
    startDrag,
    updateDragPosition,
    endDrag,
    updateCursor,
    checkForHandle,
    checkIfPointInSelectedBounds  
  };
};