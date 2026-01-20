import { useRef } from 'react';

const MIN_SHAPE_SIZE = 10;
const MIN_PLAYER_SIZE = 8;
const MAX_PLAYER_SIZE = 70;
const MIN_BALL_SIZE = 5;
const MAX_BALL_SIZE = 50;

const getCorners = (cx, cy, w, h, rotation) => {
  const rad = (rotation * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);

  const dx = w / 2;
  const dy = h / 2;

  const cornersLocal = [
    { x: -dx, y: -dy }, 
    { x: dx, y: -dy },  
    { x: dx, y: dy },   
    { x: -dx, y: dy }   
  ];

  return cornersLocal.map(p => ({
    x: cx + (p.x * cos - p.y * sin),
    y: cy + (p.x * sin + p.y * cos)
  }));
};

const rotatePoint = (x, y, cx, cy, angle) => {
  const rad = (angle * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const dx = x - cx;
  const dy = y - cy;
  return {
    x: cx + (dx * cos - dy * sin),
    y: cy + (dx * sin + dy * cos)
  };
};

export const useResizeHandles = () => {
  const resizeHandleRef = useRef(null);

  const startResize = (handle, object, startPos, bounds) => {

    let actualWidth, actualHeight;
    
    if (object.type === 'player' || object.type === 'ball') {
       actualWidth = (object.radius || 20) * 2;
       actualHeight = (object.radius || 20) * 2;
    } else if (object.type === 'figure') {
       actualWidth = object.size || 30;
       actualHeight = object.size || 30;
    } else if (object.type === 'text') {
       actualWidth = bounds.originalWidth || bounds.width; 
       actualHeight = bounds.originalHeight || bounds.height;
    } else {
       actualWidth = object.width !== undefined ? object.width : bounds.width;
       actualHeight = object.height !== undefined ? object.height : bounds.height;
    }

    let cx, cy;
    if (object.shape === 'line' || object.shape === 'arrow') {
      cx = (object.startX + object.endX) / 2;
      cy = (object.startY + object.endY) / 2;
    } else if (object.type === 'player' || object.type === 'ball' || object.type === 'figure') {
      cx = object.x;
      cy = object.y;
    } else if (object.type === 'text') {
      cx = bounds.centerX;
      cy = bounds.centerY;
    } else {
      cx = object.x + actualWidth / 2;
      cy = object.y + actualHeight / 2;
    }

    const rotation = object.rotation || 0;

    const corners = getCorners(cx, cy, actualWidth, actualHeight, rotation);
    let anchorPoint = { x: cx, y: cy }; 
    let handlePoint = { x: startPos.x, y: startPos.y }; 

    if (object.shape === 'line' || object.shape === 'arrow') {
        const globalStart = rotatePoint(object.startX, object.startY, cx, cy, rotation);
        const globalEnd = rotatePoint(object.endX, object.endY, cx, cy, rotation);
        
        if (handle.name === 'start') {
            handlePoint = globalStart;
            anchorPoint = globalEnd; 
        } else if (handle.name === 'end') {
            handlePoint = globalEnd;
            anchorPoint = globalStart;
        }
    }
    else if (handle.name === 'topLeft') {
        handlePoint = corners[0];
        anchorPoint = corners[2]; 
    } else if (handle.name === 'topRight') {
        handlePoint = corners[1];
        anchorPoint = corners[3]; 
    } else if (handle.name === 'bottomRight') {
        handlePoint = corners[2];
        anchorPoint = corners[0]; 
    } else if (handle.name === 'bottomLeft') {
        handlePoint = corners[3];
        anchorPoint = corners[1]; 
    } 
    else if (handle.name === 'top') {
        handlePoint = { x: (corners[0].x + corners[1].x)/2, y: (corners[0].y + corners[1].y)/2 };
        anchorPoint = { x: (corners[2].x + corners[3].x)/2, y: (corners[2].y + corners[3].y)/2 };
    } else if (handle.name === 'bottom') {
        handlePoint = { x: (corners[2].x + corners[3].x)/2, y: (corners[2].y + corners[3].y)/2 };
        anchorPoint = { x: (corners[0].x + corners[1].x)/2, y: (corners[0].y + corners[1].y)/2 };
    } else if (handle.name === 'left') {
        handlePoint = { x: (corners[0].x + corners[3].x)/2, y: (corners[0].y + corners[3].y)/2 };
        anchorPoint = { x: (corners[1].x + corners[2].x)/2, y: (corners[1].y + corners[2].y)/2 };
    } else if (handle.name === 'right') {
        handlePoint = { x: (corners[1].x + corners[2].x)/2, y: (corners[1].y + corners[2].y)/2 };
        anchorPoint = { x: (corners[0].x + corners[3].x)/2, y: (corners[0].y + corners[3].y)/2 };
    }

    const pressOffsetX = handlePoint.x - startPos.x;
    const pressOffsetY = handlePoint.y - startPos.y;

    const startVectorX = handlePoint.x - anchorPoint.x;
    const startVectorY = handlePoint.y - anchorPoint.y;
    const startLengthSq = startVectorX * startVectorX + startVectorY * startVectorY;

    const startLocalMouse = rotatePoint(startPos.x, startPos.y, cx, cy, -rotation);
    const mx = startLocalMouse.x - cx;
    const my = startLocalMouse.y - cy;
    
    let startDistanceFromCenter = 0;
    if (['player', 'ball', 'figure'].includes(object.type)) {
      startDistanceFromCenter = Math.sqrt(Math.pow(startPos.x - cx, 2) + Math.pow(startPos.y - cy, 2));
    }

    resizeHandleRef.current = {
      handle: handle.name,
      object: { ...object },
      startPos,
      
      anchorPoint,
      startVectorX,
      startVectorY,
      startLengthSq,
      pressOffsetX,
      pressOffsetY,
      
      startFontSize: object.fontSize || 16,
      
      startX: object.x,
      startY: object.y,
      lineStartX: object.startX,
      lineStartY: object.startY,
      lineEndX: object.endX,
      lineEndY: object.endY,
      
      startCenterX: cx,
      startCenterY: cy,
      rotation: rotation,
      
      startLocalLeft: -Math.abs(actualWidth) / 2,
      startLocalRight: Math.abs(actualWidth) / 2,
      startLocalTop: -Math.abs(actualHeight) / 2,
      startLocalBottom: Math.abs(actualHeight) / 2,
      
      startFlippedX: actualWidth < 0,
      startFlippedY: actualHeight < 0,
      isHandleLeft: mx < 0, 
      isHandleRight: mx > 0,
      isHandleTop: my < 0,
      isHandleBottom: my > 0,
      
      startWidth: actualWidth, 
      startHeight: actualHeight,
      startDistanceFromCenter
    };
  };

  const updateResize = (pos, isShiftPressed = false) => {
    if (!resizeHandleRef.current) return null;

    const {
      handle, object, startFontSize,
      startCenterX, startCenterY, startDistanceFromCenter,
      rotation, lineStartX, lineStartY, lineEndX, lineEndY,
      startPos, startLocalLeft, startLocalRight, startLocalTop, startLocalBottom,
      isHandleLeft, isHandleRight, isHandleTop, isHandleBottom,
      startFlippedX, startFlippedY, startWidth, startHeight,
      anchorPoint, startVectorX, startVectorY, startLengthSq, pressOffsetX, pressOffsetY
    } = resizeHandleRef.current;

    let updatedObject = { ...object };

    if (object.type === 'text') {
        const adjustedMouseX = pos.x + pressOffsetX;
        const adjustedMouseY = pos.y + pressOffsetY;

        const currentVectorX = adjustedMouseX - anchorPoint.x;
        const currentVectorY = adjustedMouseY - anchorPoint.y;

        const dotProduct = currentVectorX * startVectorX + currentVectorY * startVectorY;
        let scale = dotProduct / startLengthSq;

        if (!['topLeft', 'topRight', 'bottomLeft', 'bottomRight'].includes(handle)) {
             const distStart = Math.sqrt(startLengthSq);
             const distCurrent = Math.sqrt(currentVectorX*currentVectorX + currentVectorY*currentVectorY);
             const sign = dotProduct > 0 ? 1 : -1;
             scale = (distCurrent / distStart) * sign;
        }

        const MIN_FONT_LIMIT = 8;
        let newFontSize = startFontSize * scale;

        if (newFontSize < MIN_FONT_LIMIT) {
          newFontSize = MIN_FONT_LIMIT;
          scale = MIN_FONT_LIMIT / startFontSize;
        }
      
        if (scale < 0.1) scale = 0.1;

        updatedObject.fontSize = startFontSize * scale;
        
        const newWidth = startWidth * scale;
        const newHeight = startHeight * scale;

        const vecNewDiagonalX = startVectorX * scale;
        const vecNewDiagonalY = startVectorY * scale;

        const newCenterX = anchorPoint.x + vecNewDiagonalX * 0.5;
        const newCenterY = anchorPoint.y + vecNewDiagonalY * 0.5;

        updatedObject.x = newCenterX - newWidth / 2;
        updatedObject.y = newCenterY - newHeight / 2;
        updatedObject.width = newWidth;
        updatedObject.height = newHeight;

        resizeHandleRef.current.object = updatedObject;
        return updatedObject;
    }

    if (object.type === 'shape' && (object.shape === 'line' || object.shape === 'arrow')) {
       let targetGlobalStart, targetGlobalEnd;

       if (handle === 'start') {
           targetGlobalEnd = anchorPoint;
           targetGlobalStart = { x: pos.x, y: pos.y };
       } else if (handle === 'end') {
           targetGlobalStart = anchorPoint;
           targetGlobalEnd = { x: pos.x, y: pos.y };
       } else {
           return updatedObject; 
       }

       if (isShiftPressed) {
           const dx = targetGlobalEnd.x - targetGlobalStart.x;
           const dy = targetGlobalEnd.y - targetGlobalStart.y;
           const angle = Math.atan2(dy, dx);
           const dist = Math.sqrt(dx*dx + dy*dy);
           const snapAngle = Math.round(angle / (Math.PI / 4)) * (Math.PI / 4);

           if (handle === 'start') {
               targetGlobalStart.x = targetGlobalEnd.x - Math.cos(snapAngle) * dist;
               targetGlobalStart.y = targetGlobalEnd.y - Math.sin(snapAngle) * dist;
           } else {
               targetGlobalEnd.x = targetGlobalStart.x + Math.cos(snapAngle) * dist;
               targetGlobalEnd.y = targetGlobalStart.y + Math.sin(snapAngle) * dist;
           }
       }

       const newCx = (targetGlobalStart.x + targetGlobalEnd.x) / 2;
       const newCy = (targetGlobalStart.y + targetGlobalEnd.y) / 2;

       const newLocalStart = rotatePoint(targetGlobalStart.x, targetGlobalStart.y, newCx, newCy, -rotation);
       const newLocalEnd = rotatePoint(targetGlobalEnd.x, targetGlobalEnd.y, newCx, newCy, -rotation);

       updatedObject.startX = newLocalStart.x;
       updatedObject.startY = newLocalStart.y;
       updatedObject.endX = newLocalEnd.x;
       updatedObject.endY = newLocalEnd.y;
       
       resizeHandleRef.current.object = updatedObject;
       return updatedObject;
    }

    if (['player', 'ball', 'figure'].includes(object.type)) {
       const currentDist = Math.sqrt(
         Math.pow(pos.x - startCenterX, 2) + Math.pow(pos.y - startCenterY, 2)
       );
       const scale = startDistanceFromCenter > 0 ? currentDist / startDistanceFromCenter : 1;
       const absStartWidth = Math.abs(startWidth);

       if (object.type === 'player') {
           const r = (absStartWidth / 2) * scale;
           updatedObject.radius = Math.max(MIN_PLAYER_SIZE, Math.min(MAX_PLAYER_SIZE, r));
       } 
       else if (object.type === 'ball') {
           const r = (absStartWidth / 2) * scale;
           updatedObject.radius = Math.max(MIN_BALL_SIZE, Math.min(MAX_BALL_SIZE, r));
       } 
       else {
           updatedObject.size = Math.max(10, absStartWidth * scale);
       }

       resizeHandleRef.current.object = updatedObject;
       return updatedObject;
    }

    if (object.type === 'shape') {
      const rad = (rotation * Math.PI) / 180;
      const cos = Math.cos(-rad);
      const sin = Math.sin(-rad);

      const globalDx = pos.x - startPos.x;
      const globalDy = pos.y - startPos.y;

      const localDx = globalDx * cos - globalDy * sin;
      const localDy = globalDx * sin + globalDy * cos;

      let currentL = startLocalLeft;
      let currentR = startLocalRight;
      let currentT = startLocalTop;
      let currentB = startLocalBottom;

      if (isHandleLeft) currentL += localDx;
      else if (isHandleRight) currentR += localDx;
      
      if (isHandleTop) currentT += localDy;
      else if (isHandleBottom) currentB += localDy;

      let isFlippedX = startFlippedX;
      let isFlippedY = startFlippedY;

      if (currentL > currentR) {
          [currentL, currentR] = [currentR, currentL];
          isFlippedX = !isFlippedX;
      }
      if (currentT > currentB) {
          [currentT, currentB] = [currentB, currentT];
          isFlippedY = !isFlippedY;
      }

      let physW = currentR - currentL;
      let physH = currentB - currentT;

      if (physW < MIN_SHAPE_SIZE) {
          physW = MIN_SHAPE_SIZE;
          if (isHandleLeft) currentL = currentR - physW;
          else currentR = currentL + physW;
      }
      if (physH < MIN_SHAPE_SIZE) {
          physH = MIN_SHAPE_SIZE;
          if (isHandleTop) currentT = currentB - physH;
          else currentB = currentT + physH;
      }

      const newLocalCx = (currentL + currentR) / 2;
      const newLocalCy = (currentT + currentB) / 2;

      const globalShiftX = newLocalCx * Math.cos(rad) - newLocalCy * Math.sin(rad);
      const globalShiftY = newLocalCx * Math.sin(rad) + newLocalCy * Math.cos(rad);

      const finalCx = startCenterX + globalShiftX;
      const finalCy = startCenterY + globalShiftY;

      let finalWidth = isFlippedX ? -physW : physW;
      let finalHeight = isFlippedY ? -physH : physH;

      updatedObject.width = finalWidth;
      updatedObject.height = finalHeight;
      updatedObject.x = finalCx - finalWidth / 2;
      updatedObject.y = finalCy - finalHeight / 2;

      resizeHandleRef.current.object = updatedObject;
      return updatedObject;
    }

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