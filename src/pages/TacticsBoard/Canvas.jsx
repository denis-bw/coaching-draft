import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  startDrawing,
  stopDrawing,
  addToHistory,
} from '../../redux/TacticsBoard/TacticsBoardSlice';
import styled from 'styled-components';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CanvasContainer = styled.div`
  border: 2px solid #ddd;
  margin-top: 10px;
  cursor: crosshair;
  background: white;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
`;

const StyledCanvas = styled.canvas`
  display: block;
  background: white;
`;

const Canvas = ({ fieldSize, fieldType }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isDrawingRef = useRef(false);
  const dispatch = useDispatch();
  const { tool, color, brushSize, history } = useSelector(
    (state) => state.tacticsBoard
  );

  // Базові налаштування для екрану 1500px
  const BASE_SCREEN_WIDTH = 1500;
  const BASE_CANVAS_HEIGHT = 640;
  const MAX_CANVAS_WIDTH = 1400; // Максимальна ширина canvas для екрану 1500px
  
  // Розрахунок пропорцій
  const fieldAspectRatio = fieldSize.width / fieldSize.height;

  // Функція для розрахунку розмірів canvas
 // Функція для розрахунку розмірів canvas
  const calculateCanvasSize = useCallback(() => {
    const container = containerRef.current;
    if (!container) return { width: 800, height: 500 };

    const containerWidth = container.parentElement?.clientWidth || window.innerWidth;
    
    // Масштаб відносно базового екрану
    const scale = containerWidth / BASE_SCREEN_WIDTH;
    
    // Максимальні доступні розміри з урахуванням масштабу
    const maxAvailableWidth = MAX_CANVAS_WIDTH * scale;
    const maxAvailableHeight = BASE_CANVAS_HEIGHT * scale;
    
    // Обчислюємо розміри на основі двох сценаріїв:
    // 1. Обмеження по ширині
    const widthBasedWidth = maxAvailableWidth;
    const widthBasedHeight = widthBasedWidth / fieldAspectRatio;
    
    // 2. Обмеження по висоті
    const heightBasedHeight = maxAvailableHeight;
    const heightBasedWidth = heightBasedHeight * fieldAspectRatio;
    
    // Вибираємо сценарій, який дає найбільший canvas, але вміщується в обидва обмеження
    let finalWidth, finalHeight;
    
    if (widthBasedHeight <= maxAvailableHeight) {
      // Використовуємо всю доступну ширину
      finalWidth = widthBasedWidth;
      finalHeight = widthBasedHeight;
    } else {
      // Використовуємо всю доступну висоту
      finalWidth = heightBasedWidth;
      finalHeight = heightBasedHeight;
    }
    
    // Додаткове обмеження: не більше 95% ширини контейнера
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
  }, [fieldAspectRatio, fieldSize]);

  const saveToHistory = useCallback(() => {
    const canvas = canvasRef.current;
    const imageData = canvas.toDataURL();
    dispatch(addToHistory(imageData));
  }, [dispatch]);

  const restoreFromHistory = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (history.length > 0) {
      const lastImage = new Image();
      lastImage.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(lastImage, 0, 0, canvas.width, canvas.height);
      };
      lastImage.src = history[history.length - 1];
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, [history]);

  
  useEffect(() => {
    const updateCanvasSize = () => {
      const { width, height } = calculateCanvasSize();
      const canvas = canvasRef.current;
      const container = containerRef.current;
      
      if (canvas && container) {
     
        canvas.width = width;
        canvas.height = height;
        
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        
        container.style.width = `${width}px`;
        container.style.height = `${height}px`;
        
        if (history.length > 0) {
          restoreFromHistory();
        } else {
          const ctx = canvas.getContext('2d');
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, width, height);
        }
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, [calculateCanvasSize, restoreFromHistory, history, fieldType, fieldAspectRatio]);

  useEffect(() => {
    if (canvasRef.current) {
      restoreFromHistory();
    }
  }, [history, restoreFromHistory]);

  const getMousePos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const startDraw = (e) => {
    if (e.button !== 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pos = getMousePos(e);

    isDrawingRef.current = true;
    dispatch(startDrawing());
    
    ctx.strokeStyle = tool === 'eraser' ? 'rgba(0,0,0,0)' : color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalCompositeOperation = tool === 'eraser' ? 'destination-out' : 'source-over';

    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);

    e.preventDefault();
  };

  const draw = (e) => {
    if (!isDrawingRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pos = getMousePos(e);

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    e.preventDefault();
  };

  const endDraw = (e) => {
    if (!isDrawingRef.current) return;

    isDrawingRef.current = false;
    dispatch(stopDrawing());
    saveToHistory();
    e.preventDefault();
  };

  return (
    <OuterContainer>
      <CanvasContainer ref={containerRef}>
        <StyledCanvas
          ref={canvasRef}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
        />
      </CanvasContainer>
    </OuterContainer>
  );
};

export default Canvas;