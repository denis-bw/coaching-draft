import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import RotateIconSrc from '../../assets/RotateIcon.svg';

import rugbySrc from '../../assets/balls/RugbyBallMarker.svg';
import rugby1Src from '../../assets/balls/RugbyBallMarker1.svg';
import amFootballSrc from '../../assets/balls/AmericanFootballBallMarker.svg';
import volleyballSrc from '../../assets/balls/VolleyballBallMarker.svg';
import basketSrc from '../../assets/balls/BasketballBallMarker.svg';
import basket1Src from '../../assets/balls/BasketballBallMarker1.svg';
import footballSrc from '../../assets/balls/FootballBallMarker.svg';
import football1Src from '../../assets/balls/FootballBallMarker1.svg';
import tennisSrc from '../../assets/balls/TennisBallMarker.svg';
import tennis1Src from '../../assets/balls/TennisBallMarker1.svg';
import puckSrc from '../../assets/balls/PuckBallMarker.svg';
import baseballSrc from '../../assets/balls/BaseballBallMarker.svg';
import simpleSrc from '../../assets/balls/SimpleBallMarker.svg';
import football2Src from '../../assets/balls/FootballBallMarker2.svg';
import volleyball1Src from '../../assets/balls/VolleyballBallMarker1.svg';

import { FIGURE_CONFIG } from './ToolbarHeader/SportsFiguresTool';

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
  deleteObjects,
  undo,
  redo
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
  overflow: hidden; /* Повертаємо, щоб відрізати візуальне сміття за межами */
  display: inline-block;
  max-width: 100%;
  position: relative;
  
  cursor: ${props => {
    if (props.$isTextInput) return 'default';
    if (props.$activeTool === 'drawing' || props.$activeTool === 'eraser' || props.$activeTool === 'text') return 'none';
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
  min-width: 20px; 
  min-height: auto;
  outline: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  font-family: Arial, sans-serif;
  resize: none;
  overflow: hidden;
  line-height: 1.5;
  white-space: pre; 
`;

const CustomCursor = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  
  border-radius: ${props => props.isText ? '0' : '50%'};
  border: ${props => props.isText ? 'none' : `2px solid ${props.isEraser ? '#000' : props.color}`};
  background-color: ${props => props.isEraser ? 'rgba(255, 255, 255, 0.8)' : 'transparent'}; 
  
  width: ${props => props.isText ? 'auto' : `${props.size}px`};
  height: ${props => props.isText ? 'auto' : `${props.size}px`};
  
  transform: translate(-50%, -50%);
  
  box-shadow: ${props => props.isText ? 'none' : '0 0 0 1px rgba(255, 255, 255, 0.5), 0 0 4px rgba(0,0,0,0.2)'};
  
  display: ${props => props.$visible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  transition: width 0.1s, height 0.1s;

  font-family: 'Times New Roman', serif;
  font-weight: bold;
  font-size: 24px;
  color: ${props => props.color || 'black'};
  text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
  white-space: nowrap;
`;

const Canvas = ({ fieldSize, fieldType, isFullscreen }) => {
  const staticCanvasRef = useRef(null);
  const activeCanvasRef = useRef(null);
  const containerRef = useRef(null);
  const textAreaRef = useRef(null);
  const initializedRef = useRef(false);
  const textIdRef = useRef(null);
  const selectedObjectIdRef = useRef(null);
  const cursorRef = useRef(null);
  const rotationIconRef = useRef(null);
  const ballImagesRef = useRef({});
  
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
    layerOrder,
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
    const img = new Image();
    img.src = RotateIconSrc;
    img.onload = () => {
        rotationIconRef.current = img;
    };
  }, []);

  useEffect(() => {
    const balls = {
      'football': footballSrc,
      'football1': football1Src,
      'basketball': basketSrc,
      'basketball1': basket1Src,
      'volleyball': volleyballSrc,
      'rugby': rugbySrc,
      'rugby1': rugby1Src,
      'am_football': amFootballSrc,
      'tennis': tennisSrc,
      'tennis1': tennis1Src,
      'baseball': baseballSrc,
      'puck': puckSrc,
      'simple': simpleSrc,
      'volleyball1': volleyball1Src,
      'football2': football2Src
    };

    Object.entries(balls).forEach(([key, src]) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        ballImagesRef.current[key] = img;
      };
    });
  }, []);

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
  } = useCanvasDrawing(staticCanvasRef, activeCanvasRef, ballImagesRef.current);

  const {
    cursorStyle,
    setCursorStyle,
    startDrag,
    updateDragPosition,
    endDrag,
    startRotate,
    updateRotate,
    endRotate,
    rotationRef,
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
            x, y, objects, paths, effectiveRadius, staticCanvasRef.current, layerOrder
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
                paths, objects, activeTool, drawColor, brushSize, null, tempErasedIdsRef.current, layerOrder
            );
        });
    }
    
    lastEraserPosRef.current = currentPos;
  }, [objects, paths, layerOrder, eraserSize, activeTool, drawColor, brushSize, redrawStatic]);

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (isTextInput) return;

      const isCmdOrCtrl = e.ctrlKey || e.metaKey;
      
      if (isCmdOrCtrl && !e.shiftKey && e.code === 'KeyZ') {
         e.preventDefault();
         dispatch(undo());
         return;
      }
      
      if ((isCmdOrCtrl && e.code === 'KeyY') || (isCmdOrCtrl && e.shiftKey && e.code === 'KeyZ')) {
         e.preventDefault();
         dispatch(redo());
         return;
      }

      if (e.key === 'Delete') {
          if (selectedObjectId) {
              const isPath = paths.some(p => p.id === selectedObjectId);
              if (isPath) {
                  dispatch(deletePath(selectedObjectId));
              } else {
                  dispatch(deleteObject(selectedObjectId));
              }
              dispatch(deselectObject());
          }
          return;
      }

      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
          if (selectedObjectId) {
             e.preventDefault();
             const step = e.shiftKey ? 10 : 1; 
             let dx = 0;
             let dy = 0;
             if (e.key === 'ArrowUp') dy = -step;
             if (e.key === 'ArrowDown') dy = step;
             if (e.key === 'ArrowLeft') dx = -step;
             if (e.key === 'ArrowRight') dx = step;

             const foundPath = paths.find(p => p.id === selectedObjectId);
             const objToMove = foundPath ? { ...foundPath, type: 'path' } : objects.find(o => o.id === selectedObjectId);

             if (objToMove) {
                 const bounds = getObjectBounds(objToMove, staticCanvasRef.current);
                 if (bounds) {
                     const canvasW = canvasSize.width;
                     const canvasH = canvasSize.height;
                     
                     const halfW = bounds.width / 2;
                     const halfH = bounds.height / 2;
                     
                     const minX = -halfW;
                     const maxX = canvasW - halfW;
                     const minY = -halfH;
                     const maxY = canvasH - halfH;

                     const nextX = bounds.x + dx;
                     const nextY = bounds.y + dy;
                     
                     if (nextX < minX) dx = minX - bounds.x;
                     if (nextX > maxX) dx = maxX - bounds.x;
                     if (nextY < minY) dy = minY - bounds.y;
                     if (nextY > maxY) dy = maxY - bounds.y;
                 }

                 if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
                     const isPath = paths.some(p => p.id === selectedObjectId);
                     if (isPath) {
                        const newPoints = objToMove.points.map(p => ({ x: p.x + dx, y: p.y + dy }));
                        dispatch(updatePath({ id: selectedObjectId, updates: { points: newPoints } }));
                     } else {
                        if (objToMove.type === 'shape' && (objToMove.shape === 'line' || objToMove.shape === 'arrow')) {
                           dispatch(updateObject({ id: selectedObjectId, updates: { 
                              startX: objToMove.startX + dx, 
                              startY: objToMove.startY + dy,
                              endX: objToMove.endX + dx,
                              endY: objToMove.endY + dy
                           }}));
                        } else {
                           dispatch(updateObject({ id: selectedObjectId, updates: { x: objToMove.x + dx, y: objToMove.y + dy } }));
                        }
                     }
                 }
             }
          }
      }
    };
    
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [selectedObjectId, isTextInput, dispatch, objects, paths, canvasSize]);

  const handleGlobalPointerMove = useCallback((e) => {

    if ((activeTool === 'drawing' || activeTool === 'eraser' || activeTool === 'text') && cursorRef.current && !isTextInput) {
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

    if (!draggedObjectRef.current && !resizeHandleRef.current && !rotationRef.current && !drawingRef.current && !isDrawingShapeRef.current && !(activeTool === 'eraser' && isDraggingRef.current)) {
        return; 
    }
    if(e.cancelable) e.preventDefault(); 
    const rawPos = getPointerPos(e);
    const clampedPos = clampCoordinates(rawPos);
    
    if ((draggedObjectRef.current || resizeHandleRef.current || rotationRef.current || activeTool === 'eraser') && !isDraggingRef.current) {
        isDraggingRef.current = true;

        const hiddenIds = new Set(tempErasedIdsRef.current);
        
        if (draggedObjectRef.current) {
            hiddenIds.add(draggedObjectRef.current.id);
        } else if (resizeHandleRef.current && selectedObjectId) {
            hiddenIds.add(selectedObjectId);
        } else if (rotationRef.current) {
            hiddenIds.add(rotationRef.current.object.id);
        }

        if (hiddenIds.size > 0) {
             const currentSelectedId = draggedObjectRef.current ? draggedObjectRef.current.id : selectedObjectIdRef.current;
             redrawStatic(paths, objects, activeTool, drawColor, brushSize, currentSelectedId, hiddenIds, layerOrder);
        }
    }

    if (activeTool === 'eraser' && isDraggingRef.current) {
        handleEraserMove(clampedPos);
    }
    else if (rotationRef.current) {
         const updatedObject = updateRotate(clampedPos, e.shiftKey);
         if (updatedObject) {
             drawSingleObjectOnActive(updatedObject, drawColor, true, rotationIconRef.current);
         }
    } 
    else if (resizeHandleRef.current) {
      const updatedObject = updateResize(rawPos, e.shiftKey, e.altKey);
      if (updatedObject) {
        drawSingleObjectOnActive(updatedObject, drawColor, true, rotationIconRef.current);
      }
    } else if (draggedObjectRef.current) {
      const updatedObject = updateDragPosition(rawPos, canvasSize.width, canvasSize.height);
      if (updatedObject) {
        drawSingleObjectOnActive(updatedObject, drawColor, true, rotationIconRef.current);
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
      let endPos = clampedPos;

      if (e.shiftKey) {
         if (shapeType === 'line' || shapeType === 'arrow') {
             const dx = endPos.x - shapeStartRef.current.x;
             const dy = endPos.y - shapeStartRef.current.y;
             const angle = Math.atan2(dy, dx);
             const dist = Math.sqrt(dx*dx + dy*dy);
             const snapAngle = Math.round(angle / (Math.PI / 4)) * (Math.PI / 4);
             endPos = {
                 x: shapeStartRef.current.x + Math.cos(snapAngle) * dist,
                 y: shapeStartRef.current.y + Math.sin(snapAngle) * dist
             };
         } else {
             const dx = endPos.x - shapeStartRef.current.x;
             const dy = endPos.y - shapeStartRef.current.y;
             const maxDim = Math.max(Math.abs(dx), Math.abs(dy));
             endPos = {
                 x: shapeStartRef.current.x + (dx >= 0 ? maxDim : -maxDim),
                 y: shapeStartRef.current.y + (dy >= 0 ? maxDim : -maxDim)
             };
         }
      }

      drawLiveLayer(null, {
          type: shapeType, 
          start: shapeStartRef.current, 
          end: endPos,
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
    activeTool, drawColor, brushSize, eraserSize, shapeStartRef, layerOrder,
    shapeBorderColor, shapeBorderOpacity, shapeBorderStyle, shapeBorderWidth, shapeFillColor, shapeFillOpacity,
    brushOpacity, brushStyle, lineType, shapeLineCapStart, shapeLineCapEnd, handleEraserMove, isTextInput,
    updateRotate, rotationRef, selectedObjectId, objects, paths, redrawStatic
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
    let clampedPos = clampCoordinates(rawPos);
    
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

      if (e.shiftKey) {
         if (shapeType === 'line' || shapeType === 'arrow') {
             const dx = clampedPos.x - shapeStartRef.current.x;
             const dy = clampedPos.y - shapeStartRef.current.y;
             const angle = Math.atan2(dy, dx);
             const dist = Math.sqrt(dx*dx + dy*dy);
             const snapAngle = Math.round(angle / (Math.PI / 4)) * (Math.PI / 4);
             clampedPos = {
                 x: shapeStartRef.current.x + Math.cos(snapAngle) * dist,
                 y: shapeStartRef.current.y + Math.sin(snapAngle) * dist
             };
         } else {
             const dx = clampedPos.x - shapeStartRef.current.x;
             const dy = clampedPos.y - shapeStartRef.current.y;
             const maxDim = Math.max(Math.abs(dx), Math.abs(dy));
             clampedPos = {
                 x: shapeStartRef.current.x + (dx >= 0 ? maxDim : -maxDim),
                 y: shapeStartRef.current.y + (dy >= 0 ? maxDim : -maxDim)
             };
         }
      }

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
    
    if (rotationRef.current) {
        const rotatedObj = endRotate();
        if (rotatedObj) {
            dispatch(updateObject({ id: rotatedObj.id, updates: { rotation: rotatedObj.rotation } }));
        }
    } else if (draggedObjectRef.current) {
      const draggedObject = endDrag();
      if (draggedObject) {
        if (draggedObject.type === 'path') {
          dispatch(updatePath({ id: draggedObject.id, updates: draggedObject }));
        } else {
          dispatch(updateObject({ id: draggedObject.id, updates: draggedObject }));
        }
      }
    } else if (resizeHandleRef.current) {
      const resizeData = endResize();
      if (resizeData && resizeData.id) {
        if (resizeData.type === 'path') {
          dispatch(updatePath({ id: resizeData.id, updates: resizeData }));
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
    shapeLineCapEnd, setCursorStyle, clearActiveLayer, endRotate, rotationRef
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
      let selectedObj = null;
      if (selectedObjectId) {
          const foundPath = paths.find(path => path.id === selectedObjectId);
          selectedObj = foundPath ? { ...foundPath, type: 'path' } : objects.find(o => o.id === selectedObjectId);
      }

      if (selectedObj) {
        const bounds = getObjectBounds(selectedObj, canvas);
        if (bounds) {
          const handle = checkForHandle(pos, selectedObj, canvas);
          if (handle) {
            if (handle.name === 'rotate') {
                startRotate(selectedObj, pos, bounds);
            } else {
                startResize(handle, selectedObj, pos, bounds);
            }
            redrawStatic(paths, objects, activeTool, drawColor, brushSize, selectedObj.id, new Set([selectedObj.id]), layerOrder);
            return;
          }
          if (checkIfPointInSelectedBounds(pos, selectedObj, canvas)) {
            startDrag(selectedObj, pos, canvas);
            redrawStatic(paths, objects, activeTool, drawColor, brushSize, selectedObj.id, new Set([selectedObj.id]), layerOrder);
            drawSingleObjectOnActive(selectedObj, drawColor, true, rotationIconRef.current);
            return;
          }
        }
      }
      
      const clickedObject = getObjectAtPosition(pos.x, pos.y, objects, paths, brushSize, canvas, layerOrder);
      if (clickedObject) {
        selectedObjectIdRef.current = clickedObject.id;
        dispatch(selectObject(clickedObject.id));
        const bounds = getObjectBounds(clickedObject, canvas);
        if (bounds) {
          startDrag(clickedObject, pos, canvas);
          redrawStatic(paths, objects, activeTool, drawColor, brushSize, clickedObject.id, new Set([clickedObject.id]), layerOrder);
          drawSingleObjectOnActive(clickedObject, drawColor, true, rotationIconRef.current);
        }
      } else {
        selectedObjectIdRef.current = null;
        dispatch(deselectObject());
        clearActiveLayer();
        redrawStatic(paths, objects, activeTool, drawColor, brushSize, null, new Set(), layerOrder);
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
       const figureId = activeTool.replace('figure_', '');
       const config = FIGURE_CONFIG[figureId] || { width: 40, height: 40 };
       
       dispatch(addObject({ 
          type: 'figure', 
          figureId: figureId, 
          x: pos.x - config.width / 2, 
          y: pos.y - config.height / 2, 
          width: config.width, 
          height: config.height, 
          color: '#000000', 
          opacity: 100, 
          rotation: 0 
       }));
    } else if (activeTool.startsWith('ball_')) {
      const ballType = activeTool.replace('ball_', '');
      dispatch(addObject({ 
        type: 'ball', 
        ballType: ballType, 
        x: pos.x - 15, 
        y: pos.y - 15, 
        width: 30, 
        height: 30,
        rotation: 0
      }));
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
    if (draggedObjectRef.current || resizeHandleRef.current || rotationRef.current || drawingRef.current || isDrawingShapeRef.current || isDraggingRef.current) return;
    if (e.touches) return;
    
    if ((activeTool === 'drawing' || activeTool === 'eraser' || activeTool === 'text') && cursorRef.current && !isTextInput) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
    }

    const pos = getPointerPos(e);
    const canvas = staticCanvasRef.current;
    if (activeTool === 'cursor') {
      updateCursor(pos, objects, paths, selectedObjectIdRef.current, brushSize, canvas, layerOrder);
    }
  };

  const handleMouseEnter = () => setIsCursorVisible(true);
  const handleMouseLeave = () => setIsCursorVisible(false);

  // 🔥 ГОЛОВНИЙ ФІКС: Блокуємо спроби браузера скролити контейнер за текстом
  const handleContainerScroll = (e) => {
    if (e.target) {
      e.target.scrollLeft = 0;
      e.target.scrollTop = 0;
    }
  };

  useEffect(() => {
    const updateCanvasSize = () => {
      const newSize = calculateCanvasSize();
      setCanvasSize(newSize);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const timer = setTimeout(updateCanvasSize, 100);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      clearTimeout(timer);
    };
  }, [calculateCanvasSize, isFullscreen]);

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
      redrawStatic(paths, objects, activeTool, drawColor, brushSize, selectedObjectId, new Set(), layerOrder);
    }
  }, [canvasSize, dispatch, redrawStatic, paths, objects, selectedObjectId, activeTool, drawColor, brushSize, layerOrder]);

  useEffect(() => {
    if (isDraggingRef.current) return;

    const prevObjects = prevObjectsRef.current;
    const prevPaths = prevPathsRef.current;
    const prevSelectedId = prevSelectedIdRef.current;

    let isOnlySelectedChanged = false;
    let changedObject = null;

    if (selectedObjectId && selectedObjectId === prevSelectedId) {
        const pathObj = paths.find(p => p.id === selectedObjectId);
        const prevPathObj = prevPaths.find(p => p.id === selectedObjectId);
        
        if (pathObj && pathObj !== prevPathObj) {
             isOnlySelectedChanged = true;
             changedObject = { ...pathObj, type: 'path' }; 
        } else {
             const newObj = objects.find(o => o.id === selectedObjectId);
             const oldObj = prevObjects.find(o => o.id === selectedObjectId);
             if (newObj && newObj !== oldObj) {
                 isOnlySelectedChanged = true;
                 changedObject = newObj;
             }
        }
        
        if (objects.length !== prevObjects.length || paths.length !== prevPaths.length) {
            isOnlySelectedChanged = false;
        }
    }

    if (isOnlySelectedChanged && changedObject) {
        drawSingleObjectOnActive(changedObject, drawColor, true, rotationIconRef.current);
    } else {
        redrawStatic(paths, objects, activeTool, drawColor, brushSize, selectedObjectId, tempErasedIdsRef.current, layerOrder);
        
        if (selectedObjectId) {
            const foundPath = paths.find(p => p.id === selectedObjectId);
            const selObj = foundPath ? { ...foundPath, type: 'path' } : objects.find(o => o.id === selectedObjectId);
            if (selObj) {
                drawSingleObjectOnActive(selObj, drawColor, true, rotationIconRef.current);
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

  }, [paths, objects, layerOrder, selectedObjectId, redrawStatic, drawSingleObjectOnActive, clearActiveLayer, activeTool, drawColor, brushSize]);

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
      
      requestAnimationFrame(() => {
        if (input) {
          input.style.width = (input.scrollWidth + 4) + 'px';
          input.style.height = input.scrollHeight + 'px';
        }
      });
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
    if (activeTool !== 'cursor') {
      dispatch(deselectObject());
      selectedObjectIdRef.current = null;
    }
    
    if (activeTool === 'shape_arrow') {
       dispatch(setShapeLineCapEnd('arrow'));
    }
  }, [activeTool, dispatch]);

  const handleTextInputChange = (e) => {
    setTextInputValue(e.target.value);
    if (textAreaRef.current) {
      const input = textAreaRef.current;
      
      input.style.height = 'auto';
      input.style.width = 'auto';
      
      input.style.height = input.scrollHeight + 'px';
      input.style.width = (input.scrollWidth + 4) + 'px';
      
      // Додатковий захист від зсуву під час друкування
      if (containerRef.current) {
        containerRef.current.scrollLeft = 0;
      }
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
        color={activeTool === 'text' ? textColor : drawColor} 
        $visible={
          (activeTool === 'drawing' || activeTool === 'eraser' || (activeTool === 'text' && !isTextInput)) 
          && isCursorVisible
        } 
        isEraser={activeTool === 'eraser'}
        isText={activeTool === 'text'}
      >
        {activeTool === 'text' && 'T'}
      </CustomCursor>

      <CanvasContainer 
        ref={containerRef} 
        cursor={cursorStyle} 
        $activeTool={activeTool}
        $isTextInput={isTextInput} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onScroll={handleContainerScroll} /* 🔥 ОСЬ ВІН, СПЯСИТЕЛЬ ВІД ЗСУВУ! */
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