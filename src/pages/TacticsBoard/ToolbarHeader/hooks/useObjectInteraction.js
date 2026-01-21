import { useRef, useState } from 'react';
import { getObjectBounds, getObjectAtPosition, getHandleAtPosition, isPointInBoundingBox } from '../utils/objectBoundsUtils';
import { createObjectCache } from '../utils/drawingUtils';

export const useObjectInteraction = () => {
  const draggedObjectRef = useRef(null);
  const rotationRef = useRef(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const initialDragStateRef = useRef(null); 
  const [cursorStyle, setCursorStyle] = useState('default');

  const startDrag = (clickedObject, pos, canvas) => {
    const bounds = getObjectBounds(clickedObject, canvas);
    
    let objectCopy;
    if (clickedObject.type === 'path') {
        objectCopy = { 
            ...clickedObject, 
            points: clickedObject.points.map(p => ({ ...p })) 
        };
    } else {
        objectCopy = { ...clickedObject };
    }

    const cache = createObjectCache(clickedObject, canvas);
    
    draggedObjectRef.current = {
      ...objectCopy,
      _cache: cache
    };
    
    initialDragStateRef.current = {
      mouseStart: { ...pos },
      objectStart: clickedObject.type === 'path' 
          ? { ...clickedObject, points: clickedObject.points.map(p => ({ ...p })) }
          : { ...clickedObject },
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

    let candidateObject = draggedObjectRef.current; 
    
    if (candidateObject.type === 'path') {
        const startPoints = objectStart.points;
        const currentPoints = candidateObject.points;
        
        for(let i = 0; i < startPoints.length; i++) {
            currentPoints[i].x = startPoints[i].x + totalDeltaX;
            currentPoints[i].y = startPoints[i].y + totalDeltaY;
        }
    } else if (candidateObject.type === 'shape' && (candidateObject.shape === 'line' || candidateObject.shape === 'arrow')) {
        candidateObject.startX = objectStart.startX + totalDeltaX;
        candidateObject.endX = objectStart.endX + totalDeltaX;
        candidateObject.startY = objectStart.startY + totalDeltaY;
        candidateObject.endY = objectStart.endY + totalDeltaY;
    } else {
        candidateObject.x = objectStart.x + totalDeltaX;
        candidateObject.y = objectStart.y + totalDeltaY;
    }

    const currentBoundsCenterX = (cachedBounds.x + cachedBounds.width / 2) + totalDeltaX;
    const currentBoundsCenterY = (cachedBounds.y + cachedBounds.height / 2) + totalDeltaY;

    let correctionX = 0;
    let correctionY = 0;

    if (currentBoundsCenterX < 0) correctionX = 0 - currentBoundsCenterX;
    else if (currentBoundsCenterX > canvasWidth) correctionX = canvasWidth - currentBoundsCenterX;

    if (currentBoundsCenterY < 0) correctionY = 0 - currentBoundsCenterY;
    else if (currentBoundsCenterY > canvasHeight) correctionY = canvasHeight - currentBoundsCenterY;

    if (correctionX !== 0 || correctionY !== 0) {
        if (candidateObject.type === 'path') {
             for(let i = 0; i < candidateObject.points.length; i++) {
                candidateObject.points[i].x += correctionX;
                candidateObject.points[i].y += correctionY;
            }
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

    return candidateObject;
  };

  const endDrag = () => {
    const draggedObject = draggedObjectRef.current;
    
    if (draggedObject && draggedObject._cache) {
        delete draggedObject._cache;
    }

    draggedObjectRef.current = null;
    initialDragStateRef.current = null;
    dragOffsetRef.current = { x: 0, y: 0 };
    return draggedObject;
  };

  const startRotate = (object, pos, bounds) => {
    const cx = bounds.centerX !== undefined ? bounds.centerX : (object.x + (object.width || 0)/2);
    const cy = bounds.centerY !== undefined ? bounds.centerY : (object.y + (object.height || 0)/2);

    const startAngleRad = Math.atan2(pos.y - cy, pos.x - cx);
    const startAngleDeg = (startAngleRad * 180) / Math.PI;

    rotationRef.current = {
      object: { ...object },
      centerX: cx,
      centerY: cy,
      startMouseAngle: startAngleDeg,
      startObjectRotation: object.rotation || 0
    };
  };

  const updateRotate = (pos, isShiftPressed) => {
    if (!rotationRef.current) return null;

    const { object, centerX, centerY, startMouseAngle, startObjectRotation } = rotationRef.current;

    const currentAngleRad = Math.atan2(pos.y - centerY, pos.x - centerX);
    const currentAngleDeg = (currentAngleRad * 180) / Math.PI;

    let angleDelta = currentAngleDeg - startMouseAngle;
    let newRotation = startObjectRotation + angleDelta;

    while (newRotation > 180) newRotation -= 360;
    while (newRotation <= -180) newRotation += 360;

    if (isShiftPressed) {
       const snapStep = 15;
       newRotation = Math.round(newRotation / snapStep) * snapStep;
    }

    const updatedObject = { ...object, rotation: Math.round(newRotation) };
    rotationRef.current.object = updatedObject;

    return updatedObject;
  };

  const endRotate = () => {
    const data = rotationRef.current;
    rotationRef.current = null;
    return data ? data.object : null;
  };

  const updateCursor = (pos, objects, paths, selectedObjectId, brushSize, canvas) => {
    if (draggedObjectRef.current || rotationRef.current) return;

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
    rotationRef,
    dragOffsetRef,
    cursorStyle,
    setCursorStyle,
    startDrag,
    updateDragPosition,
    endDrag,
    startRotate,
    updateRotate,
    endRotate,
    updateCursor,
    checkForHandle,
    checkIfPointInSelectedBounds  
  };
};