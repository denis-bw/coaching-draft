import { useRef, useState } from 'react';
import { getObjectBounds, getObjectAtPosition, getHandleAtPosition, isPointInBoundingBox } from '../utils/objectBoundsUtils';

export const useObjectInteraction = () => {
  const draggedObjectRef = useRef(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const [cursorStyle, setCursorStyle] = useState('default');

  const startDrag = (clickedObject, pos, canvas) => {
    draggedObjectRef.current = { ...clickedObject };
    
    if (clickedObject.type === 'path') {
      const bounds = getObjectBounds(clickedObject, canvas);
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
      const bounds = getObjectBounds(clickedObject, canvas);
      if (bounds.centerX !== undefined) {
        dragOffsetRef.current = {
          x: pos.x - bounds.centerX,
          y: pos.y - bounds.centerY
        };
      } else {
        dragOffsetRef.current = {
          x: pos.x - bounds.x,
          y: pos.y - bounds.y
        };
      }
    }
  };

  const updateDragPosition = (pos) => {
    if (!draggedObjectRef.current) return null;

    let updatedObject = { ...draggedObjectRef.current };
    
    if (updatedObject.type === 'path') {
      const dx = pos.x - dragOffsetRef.current.x - updatedObject.points[0].x;
      const dy = pos.y - dragOffsetRef.current.y - updatedObject.points[0].y;
      
      updatedObject.points = updatedObject.points.map(point => ({
        x: point.x + dx,
        y: point.y + dy
      }));
    } else if (updatedObject.type === 'shape' && (updatedObject.shape === 'line' || updatedObject.shape === 'arrow')) {
      const midX = (updatedObject.startX + updatedObject.endX) / 2;
      const midY = (updatedObject.startY + updatedObject.endY) / 2;
      const newMidX = pos.x - dragOffsetRef.current.x;
      const newMidY = pos.y - dragOffsetRef.current.y;
      const dx = newMidX - midX;
      const dy = newMidY - midY;
      
      updatedObject.startX += dx;
      updatedObject.startY += dy;
      updatedObject.endX += dx;
      updatedObject.endY += dy;
    } else if (updatedObject.x !== undefined && updatedObject.y !== undefined) {
      updatedObject.x = pos.x - dragOffsetRef.current.x;
      updatedObject.y = pos.y - dragOffsetRef.current.y;
    }
    
    draggedObjectRef.current = updatedObject;
    return updatedObject;
  };

  const endDrag = () => {
    const draggedObject = draggedObjectRef.current;
    draggedObjectRef.current = null;
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