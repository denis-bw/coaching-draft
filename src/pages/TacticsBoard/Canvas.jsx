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
  setActiveTool,
  setShapeLineCapEnd,
  deleteObject, 
  deletePath,
  deleteObjects
} from '../../redux/TacticsBoard/TacticsBoardSlice';

import { useCanvasDrawing } from './ToolbarHeader/hooks/useCanvasDrawing';
import { useObjectInteraction } from './ToolbarHeader/hooks/useObjectInteraction';
import { useResizeHandles } from './ToolbarHeader/hooks/useResizeHandles';
import { useDrawingTools } from './ToolbarHeader/hooks/useDrawingTools';

import { getCollidingObjects, getObjectAtPosition, getObjectBounds } from './ToolbarHeader/utils/objectBoundsUtils';

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
  cursor: ${props => {
    if (props.$activeTool === 'drawing' || props.$activeTool === 'eraser') return 'none';
    return props.cursor;
  }};
`;

const StaticCanvas = styled.canvas`
  display: block;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const ActiveCanvas = styled.canvas`
  display: block;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  touch-action: none; 
`;

const TextArea = styled.textarea`
  position: absolute;
  z-index: 10;
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

const CustomCursor = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  border-radius: 50%;
  border: 2px solid ${props => props.isEraser ? '#000' : props.color}; 
  background-color: ${props => props.isEraser ? 'rgba(255, 255, 255, 0.8)' : 'transparent'}; 
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.5), 0 0 4px rgba(0,0,0,0.2);
  display: ${props => props.$visible ? 'block' : 'none'};
  transition: width 0.1s, height 0.1s;
`;

const Canvas = ({ fieldSize, fieldType }) => {
  const staticCanvasRef = useRef(null);
  const activeCanvasRef = useRef(null);
  const containerRef = useRef(null);
  const textAreaRef = useRef(null);
  const initializedRef = useRef(false);
  const textIdRef = useRef(null);
  const selectedObjectIdRef = useRef(null);
  const cursorRef = useRef(null);
  
  const lastEraserPosRef = useRef(null);
  const tempErasedIdsRef = useRef(new Set());

  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 500 });
  const [isTextInput, setIsTextInput] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const [textInputPos, setTextInputPos] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  
  const isDraggingRef = useRef(false);
  
  const prevObjectsRef = useRef([]);
  const prevPathsRef = useRef([]);
  const prevSelectedIdRef = useRef(null);

  const dispatch = useDispatch();
  
  const { 
    activeTool, 
    drawColor, 
    brushSize,
    eraserSize, 
    brushOpacity,
    brushStyle,
    lineType,
    paths, 
    objects, 
    selectedObjectId,
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
    redrawStatic, 
    drawLiveLayer,
    drawSingleObjectOnActive, 
    clearActiveLayer,
    tempObjectDataRef,
    tempPathDataRef
  } = useCanvasDrawing(staticCanvasRef, activeCanvasRef);

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
    startDrawing,
    continueDrawing,
    endDrawing,
    shapeStartRef,
    isDrawingShapeRef,
    startShape,
    endShape
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
    return { width: Math.floor(finalWidth), height: Math.floor(finalHeight) };
  }, [fieldAspectRatio]);

  const getPointerPos = (e) => {
    const canvas = activeCanvasRef.current;
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
    return { x: (clientX - rect.left) * scaleX, y: (clientY - rect.top) * scaleY };
  };

  const clampCoordinates = (pos) => {
    return {
      x: Math.max(0, Math.min(pos.x, canvasSize.width)),
      y: Math.max(0, Math.min(pos.y, canvasSize.height))
    };
  };

  const handleEraserMove = useCallback((currentPos) => {
    const lastPos = lastEraserPosRef.current || currentPos;
    
    const dx = currentPos.x - lastPos.x;
    const dy = currentPos.y - lastPos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    const steps = Math.max(1, Math.ceil(dist / (eraserSize / 5))); 
    
    let hasNewDeletions = false;

    const effectiveRadius = (eraserSize / 2) * 0.85;

    for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const x = lastPos.x + dx * t;
        const y = lastPos.y + dy * t;
        
        const hittingObjects = getCollidingObjects(
            x, 
            y, 
            objects, 
            paths, 
            effectiveRadius, 
            staticCanvasRef.current
        );

        hittingObjects.forEach(obj => {
            if (!tempErasedIdsRef.current.has(obj.id)) {
                tempErasedIdsRef.current.add(obj.id);
                hasNewDeletions = true;
            }
        });
    }
    
    if (hasNewDeletions) {
        requestAnimationFrame(() => {
            redrawStatic(
                paths, 
                objects, 
                activeTool, 
                drawColor, 
                brushSize, 
                null, 
                tempErasedIdsRef.current
            );
        });
    }
    
    lastEraserPosRef.current = currentPos;
  }, [objects, paths, eraserSize, activeTool, drawColor, brushSize, redrawStatic]);

  const handleGlobalPointerMove = useCallback((e) => {
    if ((activeTool === 'drawing' || activeTool === 'eraser') && cursorRef.current) {
        let clientX, clientY;
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
    }

    if (!draggedObjectRef.current && !resizeHandleRef.current && !drawingRef.current && !isDrawingShapeRef.current && !(activeTool === 'eraser' && isDraggingRef.current)) {
        return; 
    }
    if(e.cancelable) e.preventDefault(); 
    const rawPos = getPointerPos(e);
    const clampedPos = clampCoordinates(rawPos);
    
    if ((draggedObjectRef.current || resizeHandleRef.current || activeTool === 'eraser') && !isDraggingRef.current) {
        isDraggingRef.current = true;
    }

    if (activeTool === 'eraser' && isDraggingRef.current) {
        handleEraserMove(clampedPos);
    }
    else if (resizeHandleRef.current) {
      const updatedObject = updateResize(rawPos);
      if (updatedObject) {
        drawSingleObjectOnActive(updatedObject, drawColor, true);
      }
    } else if (draggedObjectRef.current) {
      const updatedObject = updateDragPosition(rawPos, canvasSize.width, canvasSize.height);
      if (updatedObject) {
        drawSingleObjectOnActive(updatedObject, drawColor, true);
      }
    } 
    else if (drawingRef.current) {
      const pathPoints = continueDrawing(clampedPos);
      if (pathPoints && pathPoints.length >= 2) {
        const livePath = {
            id: 'live_drawing', type: 'path', points: pathPoints,
            color: drawColor, brushSize: brushSize, opacity: brushOpacity,
            brushStyle: brushStyle, lineType: lineType
        };
        drawLiveLayer(livePath, null, lineType === 'solid'); 
      }
    } 
    else if (isDrawingShapeRef.current && shapeStartRef.current) {
      const shapeType = activeTool.replace('shape_', '');
      drawLiveLayer(null, {
          type: shapeType, 
          start: shapeStartRef.current, 
          end: clampedPos,
          borderColor: shapeBorderColor, 
          borderOpacity: shapeBorderOpacity, 
          borderStyle: shapeBorderStyle, 
          borderWidth: shapeBorderWidth,
          fillColor: shapeFillColor, 
          fillOpacity: shapeFillOpacity,
          lineCapStart: shapeLineCapStart,
          lineCapEnd: shapeLineCapEnd
      }, false);
    }
  }, [
    canvasSize, draggedObjectRef, resizeHandleRef, drawingRef, isDrawingShapeRef, 
    updateDragPosition, updateResize, drawLiveLayer, drawSingleObjectOnActive, continueDrawing, 
    activeTool, drawColor, brushSize, eraserSize, shapeStartRef,
    shapeBorderColor, shapeBorderOpacity, shapeBorderStyle, shapeBorderWidth, shapeFillColor, shapeFillOpacity,
    brushOpacity, brushStyle, lineType, shapeLineCapStart, shapeLineCapEnd, handleEraserMove
  ]);

  const handleGlobalPointerUp = useCallback((e) => {
    window.removeEventListener('mousemove', handleGlobalPointerMove);
    window.removeEventListener('mouseup', handleGlobalPointerUp);
    window.removeEventListener('touchmove', handleGlobalPointerMove);
    window.removeEventListener('touchend', handleGlobalPointerUp);

    isDraggingRef.current = false;
    lastEraserPosRef.current = null;

    if (activeTool === 'eraser' && tempErasedIdsRef.current.size > 0) {
        const idsToDelete = Array.from(tempErasedIdsRef.current);
        dispatch(deleteObjects(idsToDelete));
        tempErasedIdsRef.current.clear();
    }

    const rawPos = getPointerPos(e);
    const clampedPos = clampCoordinates(rawPos);
    
    if (!selectedObjectIdRef.current && !drawingRef.current && !isDrawingShapeRef.current) {
        clearActiveLayer();
    }

    if (drawingRef.current) {
      const path = endDrawing();
      if (path) {
        dispatch(addPath({
          points: path, color: drawColor, brushSize: brushSize,
          opacity: brushOpacity, brushStyle: brushStyle, lineType: lineType
        }));
      }
      clearActiveLayer(); 
    }
    
    if (isDrawingShapeRef.current && shapeStartRef.current) {
      const shapeType = activeTool.replace('shape_', '');
      const shapeData = endShape(clampedPos, shapeType);
      if (shapeData) {
        const baseShapeData = {
          type: 'shape', shape: shapeType, ...shapeData,
          borderColor: shapeBorderColor, borderOpacity: shapeBorderOpacity, borderWidth: shapeBorderWidth,
          borderStyle: shapeBorderStyle, color: shapeBorderColor
        };
        if (shapeType === 'line' || shapeType === 'arrow') {
          baseShapeData.lineCapStart = shapeLineCapStart;
          baseShapeData.lineCapEnd = shapeLineCapEnd;
        } else {
          baseShapeData.fillColor = shapeFillColor;
          baseShapeData.fillOpacity = shapeFillOpacity;
        }
        dispatch(addObject(baseShapeData));
      }
      clearActiveLayer();
    }
    
    if (draggedObjectRef.current) {
      const draggedObject = endDrag();
      if (draggedObject) {
        if (draggedObject.type === 'path') {
          const pathIndex = parseInt(draggedObject.id.replace('path_', ''));
          dispatch(updatePath({ index: pathIndex, updates: draggedObject }));
        } else {
          dispatch(updateObject({ id: draggedObject.id, updates: draggedObject }));
        }
      }
    }
    
    if (resizeHandleRef.current) {
      const resizeData = endResize();
      if (resizeData && resizeData.id) {
        if (resizeData.type === 'path') {
          const pathIndex = parseInt(resizeData.id.replace('path_', ''));
          dispatch(updatePath({ index: pathIndex, updates: resizeData }));
        } else {
          dispatch(updateObject({ id: resizeData.id, updates: resizeData }));
        }
      }
    }
    
    setCursorStyle('default');
  }, [
    handleGlobalPointerMove, drawingRef, isDrawingShapeRef, shapeStartRef, draggedObjectRef, 
    resizeHandleRef, activeTool, endDrawing, endShape, endDrag, endResize, dispatch, 
    drawColor, brushSize, shapeBorderColor, shapeBorderOpacity, shapeBorderWidth, 
    shapeBorderStyle, shapeFillColor, shapeFillOpacity, shapeLineCapStart, 
    shapeLineCapEnd, setCursorStyle, clearActiveLayer
  ]);

  const handlePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    
    window.addEventListener('mousemove', handleGlobalPointerMove);
    window.addEventListener('mouseup', handleGlobalPointerUp);
    window.addEventListener('touchmove', handleGlobalPointerMove, { passive: false });
    window.addEventListener('touchend', handleGlobalPointerUp);

    const pos = getPointerPos(e);
    const canvas = staticCanvasRef.current;
    
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
            return;
          }
          if (checkIfPointInSelectedBounds(pos, selectedObj, canvas)) {
            startDrag(selectedObj, pos, canvas);
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
        }
      } else {
        selectedObjectIdRef.current = null;
        dispatch(deselectObject());
      }
      
    } else if (activeTool === 'drawing') {
      startDrawing(pos);
       const livePath = {
        id: 'live_drawing', type: 'path', points: [pos],
        color: drawColor, brushSize: brushSize, opacity: brushOpacity,
        brushStyle: brushStyle, lineType: lineType
      };
      drawLiveLayer(livePath, null, false);
    } else if (activeTool === 'eraser') {
      isDraggingRef.current = true;
      lastEraserPosRef.current = pos; 
      handleEraserMove(pos); 
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
    if (draggedObjectRef.current || resizeHandleRef.current || drawingRef.current || isDrawingShapeRef.current || isDraggingRef.current) return;
    if (e.touches) return;
    
    if ((activeTool === 'drawing' || activeTool === 'eraser') && cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
    }

    const pos = getPointerPos(e);
    const canvas = staticCanvasRef.current;
    if (activeTool === 'cursor') {
      updateCursor(pos, objects, paths, selectedObjectIdRef.current, brushSize, canvas);
    }
  };

  const handleMouseEnter = () => setIsCursorVisible(true);
  const handleMouseLeave = () => setIsCursorVisible(false);

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
    const staticCanvas = staticCanvasRef.current;
    const activeCanvas = activeCanvasRef.current;
    const container = containerRef.current;
    
    if (staticCanvas && activeCanvas && container) {
      staticCanvas.width = canvasSize.width;
      staticCanvas.height = canvasSize.height;
      staticCanvas.style.width = `${canvasSize.width}px`;
      staticCanvas.style.height = `${canvasSize.height}px`;

      activeCanvas.width = canvasSize.width;
      activeCanvas.height = canvasSize.height;
      activeCanvas.style.width = `${canvasSize.width}px`;
      activeCanvas.style.height = `${canvasSize.height}px`;

      container.style.width = `${canvasSize.width}px`;
      container.style.height = `${canvasSize.height}px`;
      
      if (!initializedRef.current) {
        dispatch(initializePlayers({ 
          canvasWidth: canvasSize.width, 
          canvasHeight: canvasSize.height 
        }));
        initializedRef.current = true;
      }
      redrawStatic(paths, objects, activeTool, drawColor, brushSize, selectedObjectId);
    }
  }, [canvasSize, dispatch, redrawStatic, paths, objects, selectedObjectId, activeTool, drawColor, brushSize]);

  useEffect(() => {
    if (isDraggingRef.current) return;

    const prevObjects = prevObjectsRef.current;
    const prevPaths = prevPathsRef.current;
    const prevSelectedId = prevSelectedIdRef.current;

    let isOnlySelectedChanged = false;
    let changedObject = null;

    if (selectedObjectId && selectedObjectId === prevSelectedId) {
        if (selectedObjectId.startsWith('path_')) {
             const idx = parseInt(selectedObjectId.replace('path_', ''));
             if (paths[idx] !== prevPaths[idx]) {
                 isOnlySelectedChanged = true;
                 changedObject = { ...paths[idx], type: 'path', id: selectedObjectId };
             }
        } else {
             const newObj = objects.find(o => o.id === selectedObjectId);
             const oldObj = prevObjects.find(o => o.id === selectedObjectId);
             if (newObj !== oldObj) {
                 isOnlySelectedChanged = true;
                 changedObject = newObj;
             }
        }
        
        if (objects.length !== prevObjects.length || paths.length !== prevPaths.length) {
            isOnlySelectedChanged = false;
        }
    }

    if (isOnlySelectedChanged && changedObject) {
        drawSingleObjectOnActive(changedObject, drawColor, true);
    } else {
        redrawStatic(paths, objects, activeTool, drawColor, brushSize, selectedObjectId, tempErasedIdsRef.current);
        
        if (selectedObjectId) {
            let selObj = null;
            if (selectedObjectId.startsWith('path_')) {
                const idx = parseInt(selectedObjectId.replace('path_', ''));
                if (paths[idx]) selObj = { ...paths[idx], type: 'path', id: selectedObjectId };
            } else {
                selObj = objects.find(o => o.id === selectedObjectId);
            }
            if (selObj) {
                drawSingleObjectOnActive(selObj, drawColor, true);
            } else {
                clearActiveLayer();
            }
        } else {
            clearActiveLayer();
        }
    }

    prevObjectsRef.current = objects;
    prevPathsRef.current = paths;
    prevSelectedIdRef.current = selectedObjectId;

  }, [paths, objects, selectedObjectId, redrawStatic, drawSingleObjectOnActive, clearActiveLayer, activeTool, drawColor, brushSize]);

  useEffect(() => {
    if (canvasSize.width > 0 && canvasSize.height > 0) {
        dispatch(updatePlayersPosition({ 
          canvasWidth: canvasSize.width, 
          canvasHeight: canvasSize.height 
        }));
    }
  }, [canvasSize, dispatch]);

  useEffect(() => {
    if (isTextInput && textAreaRef.current && activeCanvasRef.current) {
      const input = textAreaRef.current;
      setTimeout(() => {
        input.focus();
        input.select();
      }, 0);
      const canvas = activeCanvasRef.current;
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
    if (activeTool === 'shape_arrow') {
       dispatch(setShapeLineCapEnd('arrow'));
    }
  }, [activeTool, dispatch]);

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

  return (
    <OuterContainer>
      <CustomCursor 
        ref={cursorRef}
        size={activeTool === 'eraser' ? eraserSize : brushSize} 
        color={drawColor}
        $visible={(activeTool === 'drawing' || activeTool === 'eraser') && isCursorVisible} 
        isEraser={activeTool === 'eraser'} 
      />

      <CanvasContainer 
        ref={containerRef} 
        cursor={cursorStyle} 
        $activeTool={activeTool}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <StaticCanvas ref={staticCanvasRef} />
        
        <ActiveCanvas
          ref={activeCanvasRef}
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