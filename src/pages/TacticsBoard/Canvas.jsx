import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import {
  addPath,
  addObject,
  selectObject,
  deselectObject,
  updateObject,
  deleteObject,
  initializePlayers,
  updatePath,
  deletePath,
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
`;

const TextInput = styled.input`
  position: absolute;
  border: 2px solid #FFD700;
  background: white;
  padding: 2px 4px;
  transform: translateY(-50%);
  min-width: 100px;
  outline: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  font-family: Arial, sans-serif;
`;

const Canvas = ({ fieldSize, fieldType }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const textInputRef = useRef(null);
  const initializedRef = useRef(false);
  const textIdRef = useRef(null);
  
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
    team2
  } = useSelector((state) => state.tacticsBoard);

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
    getShapePreview,
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

  const getMousePos = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

const handleMouseDown = (e) => {
  if (e.button !== 0) return;
  
  const pos = getMousePos(e);
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
          
          if (selectedObj.type === 'path') {
            tempPathDataRef.current = { ...selectedObj };
          } else {
            tempObjectDataRef.current = { ...selectedObj };
          }
          return;
        }
        
        if (checkIfPointInSelectedBounds(pos, selectedObj, canvas)) {
          startDrag(selectedObj, pos, canvas);
          
          if (selectedObj.type === 'path') {
            tempPathDataRef.current = { ...selectedObj };
          } else {
            tempObjectDataRef.current = { ...selectedObj };
          }
          return;
        }
      }
    }
    
    const clickedObject = getObjectAtPosition(pos.x, pos.y, objects, paths, brushSize, canvas);
    
    if (clickedObject) {
      dispatch(selectObject(clickedObject.id));
      
      const bounds = getObjectBounds(clickedObject, canvas);
      if (bounds) {
        startDrag(clickedObject, pos, canvas);
        
        if (clickedObject.type === 'path') {
          tempPathDataRef.current = { ...clickedObject };
        } else {
          tempObjectDataRef.current = { ...clickedObject };
        }
      }
    } else {
      dispatch(deselectObject());
    }
    
  } else if (activeTool === 'drawing') {
    startDrawing(pos);
    
  } else if (activeTool.startsWith('shape_')) {
    startShape(pos);
    
  } else if (activeTool.startsWith('figure_')) {
    const figureIcons = {
      'player': '👤',
      'goalkeeper': '🧤',
      'coach': '🧠',
      'referee': '⚖️',
      'goal': '🥅',
      'cone': '🟨'
    };
    
    const figureId = activeTool.replace('figure_', '');
    dispatch(addObject({
      type: 'figure',
      figureType: figureId,
      icon: figureIcons[figureId],
      x: pos.x,
      y: pos.y,
      size: 30
    }));
    
  } else if (activeTool === 'ball') {
    dispatch(addObject({
      type: 'ball',
      x: pos.x,
      y: pos.y,
      radius: 10
    }));
  } else if (activeTool === 'text') {
    const newTextId = `text_${Date.now()}_${Math.random()}`;
    setIsTextInput(true);
    setTextInputValue('');
    setTextInputPos(pos);
    textIdRef.current = newTextId;
  }
  
  e.preventDefault();
};

  const handleMouseMove = (e) => {
    const pos = getMousePos(e);
    const canvas = canvasRef.current;
    
    if (activeTool === 'cursor' && !draggedObjectRef.current && !resizeHandleRef.current) {
      updateCursor(pos, objects, paths, selectedObjectId, brushSize, canvas);
    }
    
    if (resizeHandleRef.current) {
      const updatedObject = updateResize(pos);
      
      if (updatedObject) {
        if (updatedObject.type === 'path') {
          tempPathDataRef.current = updatedObject;
        } else {
          tempObjectDataRef.current = updatedObject;
        }
        redraw(paths, objects, selectedObjectId, activeTool, drawColor, brushSize);
      }
      
    } else if (draggedObjectRef.current) {
      const updatedObject = updateDragPosition(pos);
      
      if (updatedObject) {
        if (updatedObject.type === 'path') {
          tempPathDataRef.current = updatedObject;
        } else {
          tempObjectDataRef.current = updatedObject;
        }
        redraw(paths, objects, selectedObjectId, activeTool, drawColor, brushSize);
      }
      
    } else if (drawingRef.current) {
      const path = continueDrawing(pos);
      if (path && path.length >= 2) {
        drawLivePath(path, drawColor, brushSize);
      }
      
    } else if (isDrawingShapeRef.current && shapeStartRef.current) {
      const shapeType = activeTool.replace('shape_', '');
      redraw(paths, objects, selectedObjectId, activeTool, drawColor, brushSize);
      drawPreviewShape(shapeType, shapeStartRef.current, pos, drawColor);
    }
    
    e.preventDefault();
  };

  const handleMouseUp = (e) => {
  const pos = getMousePos(e);
  
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
    const shapeData = endShape(pos, shapeType);
    
    if (shapeData) {
      dispatch(addObject({
        type: 'shape',
        shape: shapeType,
        ...shapeData,
        color: drawColor
      }));
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
  e.preventDefault();
};

  const handleMouseLeave = (e) => {

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
    
    if (isDrawingShapeRef.current) {
      cancelDrawing();
    }
    
    if (draggedObjectRef.current) {
      const draggedObject = endDrag();
      if (draggedObject && tempObjectDataRef.current) {
        if (draggedObject.type === 'path') {
          const pathIndex = parseInt(draggedObject.id.replace('path_', ''));
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
    }
    
    if (resizeHandleRef.current) {
      const resizeData = endResize();
      if (resizeData && tempObjectDataRef.current) {
        if (resizeData.object.type === 'path') {
          const pathIndex = parseInt(resizeData.object.id.replace('path_', ''));
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
    }
    
    tempObjectDataRef.current = null;
    tempPathDataRef.current = null;
    setCursorStyle('default');
  };

  const handleTextInputChange = (e) => {
    setTextInputValue(e.target.value);
    
    if (textInputRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.font = '16px Arial';
      const metrics = ctx.measureText(e.target.value || 'W');
      textInputRef.current.style.width = `${Math.max(100, metrics.width + 20)}px`;
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
      fontSize: 16,
      color: drawColor
    }));
  }
  
  setIsTextInput(false);
  setTextInputValue('');
  textIdRef.current = null;  
  dispatch(setActiveTool('cursor'));
};

  const handleTextInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (textInputRef.current) {
        textInputRef.current.blur();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsTextInput(false);
      setTextInputValue('');
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
    if (isTextInput && textInputRef.current && canvasRef.current) {
      const input = textInputRef.current;
      
      setTimeout(() => {
        input.focus();
      }, 0);
      
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      
      const screenX = textInputPos.x / scaleX;
      const screenY = textInputPos.y / scaleY;
      
      input.style.left = `${screenX}px`;
      input.style.top = `${screenY}px`;
      input.style.fontSize = `${16 / scaleY}px`;
      input.style.color = drawColor;
      input.style.width = '100px';
    }
  }, [isTextInput, textInputPos, drawColor]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedObjectId && !isTextInput) {
        e.preventDefault();
        if (selectedObjectId.startsWith('path_')) {
          const pathIndex = parseInt(selectedObjectId.replace('path_', ''));
          dispatch(deletePath(pathIndex));
        } else {
          dispatch(deleteObject(selectedObjectId));
        }
      }
      if (e.key === 'Escape' && !isTextInput) {
        dispatch(deselectObject());
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedObjectId, isTextInput, dispatch]);

  return (
    <OuterContainer>
      <CanvasContainer ref={containerRef} cursor={cursorStyle}>
        <StyledCanvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        />
        
        {isTextInput && (
          <TextInput
            ref={textInputRef}
            type="text"
            value={textInputValue}
            onChange={handleTextInputChange}
            onBlur={handleTextInputBlur}
            onKeyDown={handleTextInputKeyDown}
          />
        )}
      </CanvasContainer>
    </OuterContainer>
  );  
};

export default Canvas;