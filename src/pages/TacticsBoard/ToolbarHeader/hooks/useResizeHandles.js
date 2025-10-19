import { useRef } from 'react';

export const useResizeHandles = () => {
  const resizeHandleRef = useRef(null);

  const startResize = (handle, object, startPos, bounds) => {
    const actualWidth = bounds.width;
    const actualHeight = bounds.height;
    
    resizeHandleRef.current = { 
      handle: handle.name, 
      object: { ...object }, 
      startPos, 
      startBounds: bounds,
      startFontSize: object.fontSize,
      startX: object.x,
      startY: object.y,
      startWidth: actualWidth,
      startHeight: actualHeight,
      startMouseX: startPos.x,
      startMouseY: startPos.y,
      // Для кола зберігаємо початковий центр
      startCenterX: bounds.centerX,
      startCenterY: bounds.centerY
    };
  };

  const updateResize = (pos) => {
    if (!resizeHandleRef.current) return null;

    const { handle, object, startPos, startBounds, startFontSize, startX, startY, startWidth, startHeight, startCenterX, startCenterY } = resizeHandleRef.current;
    let updatedObject = { ...object };
    
    if (object.type === 'text') {
      const origX = startX;
      const origY = startY;
      const origWidth = startWidth || startBounds.width;
      const origHeight = startHeight || startBounds.height;
      
      const fixedRight = origX + origWidth;
      const fixedBottom = origY + origHeight;
      const fixedLeft = origX;
      const fixedTop = origY;
      
      let newX = origX;
      let newY = origY;
      let newWidth = origWidth;
      let newHeight = origHeight;
      
      switch (handle) {
        case 'topLeft':
          newY = pos.y;
          newHeight = Math.max(fixedBottom - pos.y, 1);
          newWidth = newHeight * (origWidth / origHeight);
          newX = fixedRight - newWidth;
          break;
        case 'topRight':
          newX = fixedLeft;
          newY = pos.y;
          newHeight = Math.max(fixedBottom - pos.y, 1);
          newWidth = newHeight * (origWidth / origHeight);
          break;
        case 'bottomLeft':
          newY = fixedTop;
          newHeight = Math.max(pos.y - origY, 1);
          newWidth = newHeight * (origWidth / origHeight);
          newX = fixedRight - newWidth;
          break;
        case 'bottomRight':
          newX = fixedLeft;
          newY = fixedTop;
          newHeight = Math.max(pos.y - origY, 1);
          newWidth = newHeight * (origWidth / origHeight);
          break;
        default:
          break;
      }
      
      const minHeight = 15;
      const minWidth = minHeight * (origWidth / origHeight);
      
      if (newHeight < minHeight) {
        newHeight = minHeight;
        newWidth = minWidth;
        
        if (handle === 'topLeft' || handle === 'topRight') {
          newY = fixedBottom - minHeight;
        }
        if (handle === 'topLeft' || handle === 'bottomLeft') {
          newX = fixedRight - minWidth;
        }
      }
      
      const heightScale = newHeight / origHeight;
      const newFontSize = Math.max(8, Math.min(200, Math.round(startFontSize * heightScale)));
      
      updatedObject.x = newX;
      updatedObject.y = newY;
      updatedObject.fontSize = newFontSize;
      delete updatedObject.width;
      delete updatedObject.height;
      
      resizeHandleRef.current.object = updatedObject;
      return updatedObject;
    }
    
    if (object.type === 'path') {
      if (handle === 'start') {
        updatedObject.points[0] = { x: pos.x, y: pos.y };
      } else if (handle === 'end') {
        updatedObject.points[updatedObject.points.length - 1] = { x: pos.x, y: pos.y };
      }
      resizeHandleRef.current.object = updatedObject;
      return updatedObject;
    }
    
    if (object.type === 'shape' && (object.shape === 'line' || object.shape === 'arrow')) {
      if (handle === 'start') {
        updatedObject.startX = pos.x;
        updatedObject.startY = pos.y;
      } else if (handle === 'end') {
        updatedObject.endX = pos.x;
        updatedObject.endY = pos.y;
      }
      resizeHandleRef.current.object = updatedObject;
      return updatedObject;
    }
    
    if (object.type === 'player' || object.type === 'ball') {
      const centerX = startBounds.centerX;
      const centerY = startBounds.centerY;
      const newRadius = Math.sqrt(Math.pow(pos.x - centerX, 2) + Math.pow(pos.y - centerY, 2));
      updatedObject.radius = Math.max(5, Math.min(50, newRadius));
      resizeHandleRef.current.object = updatedObject;
      return updatedObject;
    }
    
    if (object.type === 'figure') {
      const centerX = startBounds.centerX;
      const centerY = startBounds.centerY;
      const newSize = Math.max(Math.abs(pos.x - centerX), Math.abs(pos.y - centerY)) * 2;
      updatedObject.size = Math.max(10, Math.min(100, newSize));
      resizeHandleRef.current.object = updatedObject;
      return updatedObject;
    }
    
    if (object.type === 'shape' && object.shape !== 'line' && object.shape !== 'arrow') {
      const bounds = startBounds;
      
      // ВИПРАВЛЕННЯ ДЛЯ КОЛА
      if (object.shape === 'circle') {
        // Використовуємо початковий центр
        const newRadius = Math.sqrt(Math.pow(pos.x - startCenterX, 2) + Math.pow(pos.y - startCenterY, 2));
        const newDiameter = newRadius * 2;
        
        // Центр залишається незмінним
        updatedObject.x = startCenterX - newRadius;
        updatedObject.y = startCenterY - newRadius;
        updatedObject.width = newDiameter;
        updatedObject.height = newDiameter;
        
        resizeHandleRef.current.object = updatedObject;
        return updatedObject;
      }
      
      const origX = bounds.originalX !== undefined ? bounds.originalX : bounds.x;
      const origY = bounds.originalY !== undefined ? bounds.originalY : bounds.y;
      const origW = bounds.originalWidth !== undefined ? bounds.originalWidth : bounds.width;
      const origH = bounds.originalHeight !== undefined ? bounds.originalHeight : bounds.height;
      
      const oppositeX = origX + origW;
      const oppositeY = origY + origH;
      
      switch (handle) {
        case 'topLeft':
          updatedObject.x = pos.x;
          updatedObject.y = pos.y;
          updatedObject.width = oppositeX - pos.x;
          updatedObject.height = oppositeY - pos.y;
          break;
        case 'topRight':
          updatedObject.y = pos.y;
          updatedObject.width = pos.x - origX;
          updatedObject.height = oppositeY - pos.y;
          break;
        case 'bottomLeft':
          updatedObject.x = pos.x;
          updatedObject.width = oppositeX - pos.x;
          updatedObject.height = pos.y - origY;
          break;
        case 'bottomRight':
          updatedObject.width = pos.x - origX;
          updatedObject.height = pos.y - origY;
          break;
        case 'top':
          updatedObject.y = pos.y;
          updatedObject.height = oppositeY - pos.y;
          break;
        case 'bottom':
          updatedObject.height = pos.y - origY;
          break;
        case 'left':
          updatedObject.x = pos.x;
          updatedObject.width = oppositeX - pos.x;
          break;
        case 'right':
          updatedObject.width = pos.x - origX;
          break;
        default:
          break;
      }
      
      const minSize = 10;
      if (Math.abs(updatedObject.width) < minSize) {
        updatedObject.width = updatedObject.width < 0 ? -minSize : minSize;
      }
      if (Math.abs(updatedObject.height) < minSize) {
        updatedObject.height = updatedObject.height < 0 ? -minSize : minSize;
      }
    }
    
    resizeHandleRef.current.object = updatedObject;
    return updatedObject;
  };

  const endResize = () => {
    const resizeData = resizeHandleRef.current;
    resizeHandleRef.current = null;
    return resizeData ? resizeData.object : null;
  };

  return {
    resizeHandleRef,
    startResize,
    updateResize,
    endResize
  };
};