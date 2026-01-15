import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import {
  addPath,
  addObject,
  selectObject,
  deselectObject,
  updateObject,
  initializePlayers,
  updatePath,
  addText,
  updatePlayersPosition,
  setActiveTool
} from '../../redux/TacticsBoard/TacticsBoardSlice';

import { useCanvasDrawing } from './ToolbarHeader/hooks/useCanvasDrawing';
import { useObjectInteraction } from './ToolbarHeader/hooks/useObjectInteraction';
import { useResizeHandles } from './ToolbarHeader/hooks/useResizeHandles';
import { useDrawingTools } from './ToolbarHeader/hooks/useDrawingTools';

import { getObjectAtPosition, getObjectBounds } from './ToolbarHeader/utils/objectBoundsUtils';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CanvasContainer = styled.div`
  border: 2px solid #ddd;
  margin-top: 10px;
  background: white;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  position: relative;
  cursor: ${props => props.cursor};
`;

const StyledCanvas = styled.canvas`
  display: block;
  background: white;
  touch-action: none; 
`;

const TextArea = styled.textarea`
  position: absolute;
  border: 2px solid #FFD700;
  background: white;
  padding: 4px 6px;
  transform: translateY(-50%);
  min-width: 150px;
  min-height: auto;
  outline: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  font-family: Arial, sans-serif;
  resize: none;
  overflow: hidden;
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const Canvas = ({ fieldSize, fieldType }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const textAreaRef = useRef(null);
  const initializedRef = useRef(false);
  const textIdRef = useRef(null);
  
  const selectedObjectIdRef = useRef(null);

  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 500 });
  const [isTextInput, setIsTextInput] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const [textInputPos, setTextInputPos] = useState({ x: 0, y: 0 });
  
  const dispatch = useDispatch();
  
  const { 
    activeTool, 
    drawColor, 
    brushSize, 
    paths, 
    objects, 
    selectedObjectId,
    team1,
    team2,
    textFontSize,
    textColor,
    shapeBorderColor,
    shapeBorderOpacity,
    shapeFillColor,
    shapeFillOpacity,
    shapeBorderWidth,
    shapeBorderStyle,
    shapeLineCapStart,  
    shapeLineCapEnd     
  } = useSelector((state) => state.tacticsBoard);

  useEffect(() => {
    selectedObjectIdRef.current = selectedObjectId;
  }, [selectedObjectId]);

  const { 
    redraw, 
    drawLivePath, 
    drawPreviewShape,
    tempObjectDataRef,
    tempPathDataRef
  } = useCanvasDrawing(canvasRef);

  const {
    cursorStyle,
    setCursorStyle,
    startDrag,
    updateDragPosition,
    endDrag,
    updateCursor,
    checkForHandle,
    draggedObjectRef,
    checkIfPointInSelectedBounds
  } = useObjectInteraction();

  const {
    resizeHandleRef,
    startResize,
    updateResize,
    endResize
  } = useResizeHandles();

  const {
    drawingRef,
    currentPathRef,
    shapeStartRef,
    isDrawingShapeRef,
    startDrawing,
    continueDrawing,
    endDrawing,
    startShape,
    endShape,
    cancelDrawing
  } = useDrawingTools();

  const BASE_SCREEN_WIDTH = 1500;
  const BASE_CANVAS_HEIGHT = 640;
  const MAX_CANVAS_WIDTH = 1400;
  const fieldAspectRatio = fieldSize.width / fieldSize.height;

  const calculateCanvasSize = useCallback(() => {
    const container = containerRef.current;
    if (!container) return { width: 800, height: 500 };

    const containerWidth = container.parentElement?.clientWidth || window.innerWidth;
    const scale = containerWidth / BASE_SCREEN_WIDTH;
    const maxAvailableWidth = MAX_CANVAS_WIDTH * scale;
    const maxAvailableHeight = BASE_CANVAS_HEIGHT * scale;
    
    const widthBasedWidth = maxAvailableWidth;
    const widthBasedHeight = widthBasedWidth / fieldAspectRatio;
    const heightBasedHeight = maxAvailableHeight;
    const heightBasedWidth = heightBasedHeight * fieldAspectRatio;
    
    let finalWidth, finalHeight;
    
    if (widthBasedHeight <= maxAvailableHeight) {
      finalWidth = widthBasedWidth;
      finalHeight = widthBasedHeight;
    } else {
      finalWidth = heightBasedWidth;
      finalHeight = heightBasedHeight;
    }
    
    const maxContainerWidth = containerWidth * 0.95;
    if (finalWidth > maxContainerWidth) {
      const widthScale = maxContainerWidth / finalWidth;
      finalWidth = maxContainerWidth;
      finalHeight = finalHeight * widthScale;
    }
    
    return { 
      width: Math.floor(finalWidth), 
      height: Math.floor(finalHeight) 
    };
  }, [fieldAspectRatio]);

  const getPointerPos = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    let clientX, clientY;

    if (e.changedTouches && e.changedTouches.length > 0) {
      clientX = e.changedTouches[0].clientX;
      clientY = e.changedTouches[0].clientY;
    } else if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  };

  const clampCoordinates = (pos) => {
    return {
      x: Math.max(0, Math.min(pos.x, canvasSize.width)),
      y: Math.max(0, Math.min(pos.y, canvasSize.height))
    };
  };

  
  const handleGlobalPointerMove = useCallback((e) => {
    if (!draggedObjectRef.current && !resizeHandleRef.current && !drawingRef.current && !isDrawingShapeRef.current) {
        return; 
    }
    
    if(e.cancelable) e.preventDefault(); 

    const rawPos = getPointerPos(e);
    const clampedPos = clampCoordinates(rawPos);
    

    if (resizeHandleRef.current) {
      const updatedObject = updateResize(rawPos);
      if (updatedObject) {
        if (updatedObject.type === 'path') {
          tempPathDataRef.current = updatedObject;
        } else {
          tempObjectDataRef.current = updatedObject;
        }
        redraw(paths, objects, selectedObjectIdRef.current, activeTool, drawColor, brushSize);
      }
    } else if (draggedObjectRef.current) {

      const updatedObject = updateDragPosition(rawPos, canvasSize.width, canvasSize.height);
      
      if (updatedObject) {
        if (updatedObject.type === 'path') {
          tempPathDataRef.current = updatedObject;
        } else {
          tempObjectDataRef.current = updatedObject;
        }
        redraw(paths, objects, selectedObjectIdRef.current, activeTool, drawColor, brushSize);
      }
    } else if (drawingRef.current) {
     
      const path = continueDrawing(clampedPos);
      if (path && path.length >= 2) {
        drawLivePath(path, drawColor, brushSize);
      }
    } else if (isDrawingShapeRef.current && shapeStartRef.current) {
    
      const shapeType = activeTool.replace('shape_', '');
      redraw(paths, objects, selectedObjectIdRef.current, activeTool, drawColor, brushSize);
      drawPreviewShape(
        shapeType, 
        shapeStartRef.current, 
        clampedPos, 
        shapeBorderColor, 
        shapeBorderStyle,
        shapeBorderWidth,
        shapeFillColor,
        shapeFillOpacity
      );
    }
  }, [
    canvasSize, draggedObjectRef, resizeHandleRef, drawingRef, isDrawingShapeRef, 
    updateDragPosition, updateResize, redraw, continueDrawing, drawLivePath, drawPreviewShape, 
    paths, objects, activeTool, drawColor, brushSize, shapeStartRef, 
    shapeBorderColor, shapeBorderStyle, shapeBorderWidth, shapeFillColor, shapeFillOpacity
   
  ]);

  const handleGlobalPointerUp = useCallback((e) => {
    window.removeEventListener('mousemove', handleGlobalPointerMove);
    window.removeEventListener('mouseup', handleGlobalPointerUp);
    window.removeEventListener('touchmove', handleGlobalPointerMove);
    window.removeEventListener('touchend', handleGlobalPointerUp);

    const rawPos = getPointerPos(e);
    const clampedPos = clampCoordinates(rawPos);
    
    if (drawingRef.current) {
      const path = endDrawing();
      if (path) {
        dispatch(addPath({
          points: path,
          color: drawColor,
          brushSize: brushSize
        }));
      }
    }
    
    if (isDrawingShapeRef.current && shapeStartRef.current) {
      const shapeType = activeTool.replace('shape_', '');
      const shapeData = endShape(clampedPos, shapeType);
      
      if (shapeData) {
        const baseShapeData = {
          type: 'shape',
          shape: shapeType,
          ...shapeData,
          borderColor: shapeBorderColor,
          borderOpacity: shapeBorderOpacity,
          borderWidth: shapeBorderWidth,
          borderStyle: shapeBorderStyle,
          color: shapeBorderColor
        };

        if (shapeType === 'line' || shapeType === 'arrow') {
          baseShapeData.lineCapStart = shapeLineCapStart;
          baseShapeData.lineCapEnd = shapeType === 'arrow' ? 'arrow' : shapeLineCapEnd;
        } else {
          baseShapeData.fillColor = shapeFillColor;
          baseShapeData.fillOpacity = shapeFillOpacity;
        }

        dispatch(addObject(baseShapeData));
      }
    }
    
    if (draggedObjectRef.current) {
      const draggedObject = endDrag();
      if (draggedObject) {
        if (draggedObject.type === 'path') {
          const pathIndex = parseInt(draggedObject.id.replace('path_', ''));
          dispatch(updatePath({
            index: pathIndex,
            updates: draggedObject
          }));
        } else {
          dispatch(updateObject({
            id: draggedObject.id,
            updates: draggedObject
          }));
        }
      }
      tempObjectDataRef.current = null;
      tempPathDataRef.current = null;
    }
    
    if (resizeHandleRef.current) {
      const resizeData = endResize();
      if (resizeData && tempObjectDataRef.current) {
        if (resizeData.type === 'path') {
          const pathIndex = parseInt(resizeData.id.replace('path_', ''));
          dispatch(updatePath({
            index: pathIndex,
            updates: tempPathDataRef.current
          }));
        } else {
          dispatch(updateObject({
            id: tempObjectDataRef.current.id,
            updates: tempObjectDataRef.current
          }));
        }
      }
      tempObjectDataRef.current = null;
      tempPathDataRef.current = null;
    }
    
    setCursorStyle('default');
  }, [
    handleGlobalPointerMove, drawingRef, isDrawingShapeRef, shapeStartRef, draggedObjectRef, 
    resizeHandleRef, activeTool, endDrawing, endShape, endDrag, endResize, dispatch, 
    drawColor, brushSize, shapeBorderColor, shapeBorderOpacity, shapeBorderWidth, 
    shapeBorderStyle, shapeFillColor, shapeFillOpacity, shapeLineCapStart, 
    shapeLineCapEnd, setCursorStyle, paths, objects, canvasSize 
  ]);

 

  const handlePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    
    if (e.cancelable && activeTool !== 'cursor' && !isTextInput) {

    }

    window.addEventListener('mousemove', handleGlobalPointerMove);
    window.addEventListener('mouseup', handleGlobalPointerUp);
    window.addEventListener('touchmove', handleGlobalPointerMove, { passive: false });
    window.addEventListener('touchend', handleGlobalPointerUp);

    const pos = getPointerPos(e);
    const canvas = canvasRef.current;
    
    if (isTextInput) {
      handleTextInputBlur();
      return;
    }
    
    if (activeTool === 'cursor') {
      const selectedObj = selectedObjectId ? 
        (selectedObjectId.startsWith('path_') ? 
          { ...paths[parseInt(selectedObjectId.replace('path_', ''))], type: 'path', id: selectedObjectId } :
          objects.find(o => o.id === selectedObjectId)) : 
        null;

      if (selectedObj) {
        const bounds = getObjectBounds(selectedObj, canvas);
        if (bounds) {
          const handle = checkForHandle(pos, selectedObj, canvas);
          if (handle) {
            startResize(handle, selectedObj, pos, bounds);
            if (selectedObj.type === 'path') tempPathDataRef.current = { ...selectedObj };
            else tempObjectDataRef.current = { ...selectedObj };
            return;
          }
          if (checkIfPointInSelectedBounds(pos, selectedObj, canvas)) {
            startDrag(selectedObj, pos, canvas);
            if (selectedObj.type === 'path') tempPathDataRef.current = { ...selectedObj };
            else tempObjectDataRef.current = { ...selectedObj };
            return;
          }
        }
      }
      
      const clickedObject = getObjectAtPosition(pos.x, pos.y, objects, paths, brushSize, canvas);
      if (clickedObject) {
   
        selectedObjectIdRef.current = clickedObject.id;
        
        dispatch(selectObject(clickedObject.id));
        
        const bounds = getObjectBounds(clickedObject, canvas);
        if (bounds) {
          startDrag(clickedObject, pos, canvas);
          if (clickedObject.type === 'path') tempPathDataRef.current = { ...clickedObject };
          else tempObjectDataRef.current = { ...clickedObject };
          
          redraw(paths, objects, clickedObject.id, activeTool, drawColor, brushSize);
        }
      } else {
        selectedObjectIdRef.current = null;
        dispatch(deselectObject());
        redraw(paths, objects, null, activeTool, drawColor, brushSize);
      }
      
    } else if (activeTool === 'drawing') {
      startDrawing(pos);
    } else if (activeTool.startsWith('shape_')) {
      startShape(pos);
    } else if (activeTool.startsWith('figure_')) {
       const figureIcons = { 'player': '👤', 'goalkeeper': '🧤', 'coach': '🧠', 'referee': '⚖️', 'goal': '🥅', 'cone': '🟨' };
       const figureId = activeTool.replace('figure_', '');
       dispatch(addObject({ type: 'figure', figureType: figureId, icon: figureIcons[figureId], x: pos.x, y: pos.y, size: 30 }));
    } else if (activeTool === 'ball') {
      dispatch(addObject({ type: 'ball', x: pos.x, y: pos.y, radius: 10 }));
    } else if (activeTool === 'text') {
      const newTextId = `text_${Date.now()}_${Math.random()}`;
      setIsTextInput(true);
      setTextInputValue('');
      setTextInputPos(pos);
      textIdRef.current = newTextId;
      dispatch(selectObject(newTextId));
      selectedObjectIdRef.current = newTextId; 
    }
  };

  const handleCanvasMouseMove = (e) => {
    if (draggedObjectRef.current || resizeHandleRef.current || drawingRef.current || isDrawingShapeRef.current) return;
    if (e.touches) return;

    const pos = getPointerPos(e);
    const canvas = canvasRef.current;
    
    if (activeTool === 'cursor') {
      updateCursor(pos, objects, paths, selectedObjectIdRef.current, brushSize, canvas);
    }
  };

  const handleTextInputChange = (e) => {
    setTextInputValue(e.target.value);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  };

  const handleTextInputBlur = () => {
    const text = textInputValue.trim();
    if (text) {
      dispatch(addText({
        id: textIdRef.current,
        x: textInputPos.x,
        y: textInputPos.y,
        text: text,
        fontSize: textFontSize,
        color: textColor
      }));
    }
    setIsTextInput(false);
    setTextInputValue('');
    textIdRef.current = null;  
    dispatch(setActiveTool('cursor'));
  };

  const handleTextInputKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setIsTextInput(false);
      setTextInputValue('');
      dispatch(deselectObject());
      selectedObjectIdRef.current = null;
      dispatch(setActiveTool('cursor'));
    }
  };

  useEffect(() => {
    const updateCanvasSize = () => {
      const newSize = calculateCanvasSize();
      setCanvasSize(newSize);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, [calculateCanvasSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (canvas && container) {
      canvas.width = canvasSize.width;
      canvas.height = canvasSize.height;
      canvas.style.width = `${canvasSize.width}px`;
      canvas.style.height = `${canvasSize.height}px`;
      container.style.width = `${canvasSize.width}px`;
      container.style.height = `${canvasSize.height}px`;
      
      if (!initializedRef.current) {
        dispatch(initializePlayers({ 
          canvasWidth: canvasSize.width, 
          canvasHeight: canvasSize.height 
        }));
        initializedRef.current = true;
      }
      redraw(paths, objects, selectedObjectId, activeTool, drawColor, brushSize);
    }
  }, [canvasSize, dispatch, redraw, paths, objects, selectedObjectId, activeTool, drawColor, brushSize]);

  useEffect(() => {
    redraw(paths, objects, selectedObjectId, activeTool, drawColor, brushSize);
  }, [paths, objects, selectedObjectId, redraw, activeTool, drawColor, brushSize]);

  useEffect(() => {
    if (canvasSize.width > 0 && canvasSize.height > 0) {
      const players = objects.filter(obj => obj.type === 'player');
      const team1Players = players.filter(p => p.team === 1);
      const team2Players = players.filter(p => p.team === 2);
      
      if (team1Players.length !== team1.count || team2Players.length !== team2.count) {
        dispatch(updatePlayersPosition({ 
          canvasWidth: canvasSize.width, 
          canvasHeight: canvasSize.height 
        }));
      }
    }
  }, [team1.count, team2.count, canvasSize, objects, dispatch]);

  useEffect(() => {
    if (isTextInput && textAreaRef.current && canvasRef.current) {
      const input = textAreaRef.current;
      setTimeout(() => {
        input.focus();
        input.select();
      }, 0);
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const screenX = textInputPos.x / scaleX;
      const screenY = textInputPos.y / scaleY;
      input.style.left = `${screenX}px`;
      input.style.top = `${screenY}px`;
      input.style.fontSize = `${textFontSize / scaleY}px`;
      input.style.color = textColor;
      input.style.width = 'auto';
      input.style.height = 'auto';
    }
  }, [isTextInput, textInputPos, textColor, textFontSize]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && !isTextInput) {
        dispatch(deselectObject());
        selectedObjectIdRef.current = null;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedObjectId, isTextInput, dispatch]);

  useEffect(() => {
    dispatch(deselectObject());
    selectedObjectIdRef.current = null;
  }, [activeTool, dispatch]);

  return (
    <OuterContainer>
      <CanvasContainer ref={containerRef} cursor={cursorStyle}>
        <StyledCanvas
          ref={canvasRef}
          onMouseDown={handlePointerDown}
          onTouchStart={handlePointerDown}
          onMouseMove={handleCanvasMouseMove}
        />
        {isTextInput && (
          <TextArea
            ref={textAreaRef}
            value={textInputValue}
            onChange={handleTextInputChange}
            onBlur={handleTextInputBlur}
            onKeyDown={handleTextInputKeyDown}
            placeholder="Введіть текст"
            rows={1}
          />
        )}
      </CanvasContainer>
    </OuterContainer>
  );  
};

export default Canvas;