import { useRef } from 'react';

const MIN_SHAPE_SIZE = 8;
const MIN_PLAYER_SIZE = 8;
const MAX_PLAYER_SIZE = 50;

export const useResizeHandles = () => {
  const resizeHandleRef = useRef(null);

  const startResize = (handle, object, startPos, bounds) => {
    const actualWidth = bounds.width;
    const actualHeight = bounds.height;

    // Для кола обчислюємо початкову відстань від курсору до центру
    let startDistanceFromCenter = 0;
    if (object.shape === 'circle' || object.type === 'player' || object.type === 'ball' || object.type === 'figure') {
      const cx = bounds.centerX;
      const cy = bounds.centerY;
      startDistanceFromCenter = Math.sqrt(
        Math.pow(startPos.x - cx, 2) + Math.pow(startPos.y - cy, 2)
      );
    }

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
      startCenterX: bounds.centerX,
      startCenterY: bounds.centerY,
      startDistanceFromCenter // Зберігаємо початкову відстань
    };
  };

  const updateResize = (pos) => {
    if (!resizeHandleRef.current) return null;

    const {
      handle,
      object,
      startBounds,
      startFontSize,
      startX,
      startY,
      startWidth,
      startHeight,
      startCenterX,
      startCenterY,
      startDistanceFromCenter
    } = resizeHandleRef.current;

    let updatedObject = { ...object };

    if (object.type === 'text') {
      const origX = startX;
      const origY = startY;
      const origWidth = startWidth || startBounds.width;
      const origHeight = startHeight || startBounds.height;

      const fixedRight = origX + origWidth;
      const fixedBottom = origY + origHeight;

      let newX = origX;
      let newY = origY;
      let newHeight = origHeight;

      switch (handle) {
        case 'topLeft':
        case 'topRight':
          newY = pos.y;
          newHeight = Math.max(fixedBottom - pos.y, 1);
          break;
        case 'bottomLeft':
        case 'bottomRight':
          newY = origY;
          newHeight = Math.max(pos.y - origY, 1);
          break;
        default:
          break;
      }

      const minTextHeight = 15;

      if (newHeight < minTextHeight) {
        newHeight = minTextHeight;
        if (handle === 'topLeft' || handle === 'topRight') {
          newY = fixedBottom - minTextHeight;
        }
      }

      const heightScale = newHeight / origHeight;
      const newFontSize = Math.max(
        8,
        Math.min(200, Math.round(startFontSize * heightScale))
      );

      updatedObject.x = newX;
      updatedObject.y = newY;
      updatedObject.fontSize = newFontSize;

      resizeHandleRef.current.object = updatedObject;
      return updatedObject;
    }

    if (
      object.type === 'path' ||
      (object.type === 'shape' &&
        (object.shape === 'line' || object.shape === 'arrow'))
    ) {
      if (object.rotation && object.rotation !== 0) {
        const angle = -(object.rotation * Math.PI) / 180;
        const centerX = (object.startX + object.endX) / 2;
        const centerY = (object.startY + object.endY) / 2;
        
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const dx = pos.x - centerX;
        const dy = pos.y - centerY;
        const rotatedX = centerX + (dx * cos - dy * sin);
        const rotatedY = centerY + (dx * sin + dy * cos);
        
        if (handle === 'start') {
          updatedObject.startX = rotatedX;
          updatedObject.startY = rotatedY;
        } else if (handle === 'end') {
          updatedObject.endX = rotatedX;
          updatedObject.endY = rotatedY;
        }
      } else {
        if (handle === 'start') {
          updatedObject.startX = pos.x;
          updatedObject.startY = pos.y;
        } else if (handle === 'end') {
          updatedObject.endX = pos.x;
          updatedObject.endY = pos.y;
        }
      }
      
      resizeHandleRef.current.object = updatedObject;
      return updatedObject;
    }

    // Логіка для об'єктів, що зберігають пропорції або мають радіус
    if (object.type === 'player' || object.type === 'ball' || object.type === 'figure') {
      const centerX = startBounds.centerX;
      const centerY = startBounds.centerY;
      const currentDistance = Math.sqrt(
        Math.pow(pos.x - centerX, 2) + Math.pow(pos.y - centerY, 2)
      );
      
      // Використовуємо коефіцієнт масштабування відносно початкового кліку
      // Це запобігає стрибкам
      const scale = startDistanceFromCenter > 0 ? currentDistance / startDistanceFromCenter : 1;

      if (object.type === 'player') {
        // Початковий радіус * масштаб
        const initialRadius = startWidth / 2;
        const newRadius = initialRadius * scale;
        updatedObject.radius = Math.max(MIN_PLAYER_SIZE, Math.min(MAX_PLAYER_SIZE, newRadius));
      } else if (object.type === 'ball') {
        const initialRadius = startWidth / 2;
        updatedObject.radius = Math.max(5, initialRadius * scale);
      } else if (object.type === 'figure') {
        const initialSize = startWidth; // width == size for figures usually
        updatedObject.size = Math.max(10, initialSize * scale);
      }

      resizeHandleRef.current.object = updatedObject;
      return updatedObject;
    }

    if (object.type === 'shape' && object.shape !== 'line' && object.shape !== 'arrow') {
      const bounds = startBounds;

      const origX = bounds.originalX ?? bounds.x;
      const origY = bounds.originalY ?? bounds.y;
      const origW = bounds.originalWidth ?? bounds.width;
      const origH = bounds.originalHeight ?? bounds.height;

      let newX = origX;
      let newY = origY;
      let newW = origW;
      let newH = origH;

      const diffX = pos.x - resizeHandleRef.current.startMouseX;
      const diffY = pos.y - resizeHandleRef.current.startMouseY;

      if (object.shape === 'circle') {
        const centerX = startCenterX;
        const centerY = startCenterY;
        
        const currentDistance = Math.sqrt(
          Math.pow(pos.x - centerX, 2) + Math.pow(pos.y - centerY, 2)
        );
        
        // Використовуємо той самий підхід масштабування для кола
        const scale = startDistanceFromCenter > 0 ? currentDistance / startDistanceFromCenter : 1;
        const initialDiameter = startWidth; // width = diameter
        const newDiameter = Math.max(MIN_SHAPE_SIZE, initialDiameter * scale);
        
        newX = centerX - newDiameter / 2;
        newY = centerY - newDiameter / 2;
        newW = newDiameter;
        newH = newDiameter;
      } else {
        const oppositeX = origX + origW;
        const oppositeY = origY + origH;

        switch (handle) {
          case 'topLeft':
            newX = origX + diffX;
            newY = origY + diffY;
            newW = origW - diffX;
            newH = origH - diffY;
            break;
          case 'topRight':
            newY = origY + diffY;
            newW = origW + diffX;
            newH = origH - diffY;
            break;
          case 'bottomLeft':
            newX = origX + diffX;
            newW = origW - diffX;
            newH = origH + diffY;
            break;
          case 'bottomRight':
            newW = origW + diffX;
            newH = origH + diffY;
            break;
          case 'top':
            newY = origY + diffY;
            newH = origH - diffY;
            break;
          case 'bottom':
            newH = origH + diffY;
            break;
          case 'left':
            newX = origX + diffX;
            newW = origW - diffX;
            break;
          case 'right':
            newW = origW + diffX;
            break;
          default:
            break;
        }

        if (Math.abs(newW) < MIN_SHAPE_SIZE) {
          const sign = newW < 0 ? -1 : 1;
          newW = MIN_SHAPE_SIZE * sign;
          if (handle.includes('Left')) newX = oppositeX - newW;
        }

        if (Math.abs(newH) < MIN_SHAPE_SIZE) {
          const sign = newH < 0 ? -1 : 1;
          newH = MIN_SHAPE_SIZE * sign;
          if (handle.includes('Top')) newY = oppositeY - newH;
        }
      }

      updatedObject.x = newX;
      updatedObject.y = newY;
      updatedObject.width = newW;
      updatedObject.height = newH;
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
    endResize,
  };
};