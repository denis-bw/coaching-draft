import { useRef } from 'react';

// Мінімальний дозволений розмір для ширини/висоти фігур
const MIN_SHAPE_SIZE = 8;

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
      startCenterY: bounds.centerY,
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

      // Розраховуємо нову висоту та позицію
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

    if (
      object.type === 'player' ||
      object.type === 'ball' ||
      object.type === 'figure'
    ) {
      const centerX = startBounds.centerX;
      const centerY = startBounds.centerY;
      const newSizeAbs = Math.sqrt(
        Math.pow(pos.x - centerX, 2) + Math.pow(pos.y - centerY, 2)
      );

      let finalSize = newSizeAbs;

      if (object.type === 'player' || object.type === 'ball') {
        finalSize = Math.max(5, newSizeAbs);
        updatedObject.radius = finalSize;
      } else if (object.type === 'figure') {
        finalSize = Math.max(10, newSizeAbs * 2);
        updatedObject.size = finalSize;
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

      const oppositeX = origX + origW;
      const oppositeY = origY + origH;

      let newX = origX;
      let newY = origY;
      let newW = origW;
      let newH = origH;

      const diffX = pos.x - resizeHandleRef.current.startMouseX;
      const diffY = pos.y - resizeHandleRef.current.startMouseY;

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

      // Обмеження мінімального розміру
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
