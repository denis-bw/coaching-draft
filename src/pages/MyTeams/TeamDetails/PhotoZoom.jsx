import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as PlusIcon } from "../../../assets/plus.svg";
import { ReactComponent as MinusIcon } from "../../../assets/minus.svg";
import { ReactComponent as HouseIcon } from "../../../assets/House.svg";

const ZoomContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  cursor: ${props => props.$isDragging ? 'grabbing' : props.$isZoomed ? 'grab' : 'zoom-in'};
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
`;

const ZoomImage = styled.img`
  display: block;
  transition: ${props => props.$isTransitioning ? 'transform 0.2s ease-out' : 'none'};
  transform: translate(${props => props.$translateX}px, ${props => props.$translateY}px) scale(${props => props.$scale});
  transform-origin: center center;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ZoomControls = styled.div`
  position: absolute;
  top: 20px;
  right: 80px;
  display: flex;
  gap: 10px;
  z-index: 100;

    @media (max-width: 768px) {
    top: 12px;
  }
`;

const ZoomButton = styled.button`
  width: 32px;
  height: 32px;
    border-radius: 50%;
    border: 1.4px solid ${({ theme }) => theme.white};
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;  

  svg {
    width: 18px;
    height: 18px;
    stroke: white;
    stroke-width: 2px;
    pointer-events: none;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    border: 1.4px solid ${({ theme }) => theme.greenMain};
    svg {
        stroke: ${({ theme }) => theme.greenMain}
    ;}
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;

    svg {
      stroke: #aaa;
      transform: none;
    }
  }
`;


const PhotoZoom = ({ src, alt, onError, ...props }) => {
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageRect, setImageRect] = useState({ width: 0, height: 0, left: 0, top: 0 });
  const [containerRect, setContainerRect] = useState({ width: 0, height: 0 });

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const dragStart = useRef({ x: 0, y: 0, translateX: 0, translateY: 0 });
  const lastTouchDistance = useRef(0);

  const MIN_SCALE = 0.5;
  const MAX_SCALE = 5;
  const ZOOM_STEP = 0.8; 

  const updateRects = useCallback(() => {
    if (containerRef.current && imageRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const imageRect = imageRef.current.getBoundingClientRect();
      
      setContainerRect({
        width: containerRect.width,
        height: containerRect.height
      });
      
      setImageRect({
        width: imageRect.width,
        height: imageRect.height,
        left: imageRect.left - containerRect.left,
        top: imageRect.top - containerRect.top
      });
    }
  }, []);

 const constrainTranslation = useCallback((newTranslateX, newTranslateY, newScale) => {
  if (!imageRect.width || !imageRect.height || !containerRect.width || !containerRect.height) {
    return { x: newTranslateX, y: newTranslateY };
  }

  const scaledWidth = imageRect.width * newScale;
  const scaledHeight = imageRect.height * newScale;

  if (scaledWidth <= containerRect.width) {
    newTranslateX = 0;
  } else {
    const maxTranslateX = (scaledWidth - containerRect.width) / 2;
    newTranslateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, newTranslateX));
  }

  if (scaledHeight <= containerRect.height) {
    newTranslateY = 0;
  } else {
    const maxTranslateY = (scaledHeight - containerRect.height) / 2;
    newTranslateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, newTranslateY));
  }

  return { x: newTranslateX, y: newTranslateY };
}, [imageRect, containerRect]);


  const handleZoom = useCallback((direction, clientX, clientY) => {
    const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale + direction * ZOOM_STEP));
    
    if (newScale === scale) return;

    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 200); 

    if (clientX !== undefined && clientY !== undefined && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      
      const containerX = clientX - containerRect.left;
      const containerY = clientY - containerRect.top;
      
      const currentPointX = containerX - translateX - containerRect.width / 2;
      const currentPointY = containerY - translateY - containerRect.height / 2;
      
      const scaleFactor = newScale / scale;
      const newPointX = currentPointX * scaleFactor;
      const newPointY = currentPointY * scaleFactor;
      
      const newTranslateX = translateX - (newPointX - currentPointX);
      const newTranslateY = translateY - (newPointY - currentPointY);

      const constrained = constrainTranslation(newTranslateX, newTranslateY, newScale);
      setTranslateX(constrained.x);
      setTranslateY(constrained.y);
    } else {

      const constrained = constrainTranslation(0, 0, newScale);
      setTranslateX(constrained.x);
      setTranslateY(constrained.y);
    }

    setScale(newScale);
  }, [scale, translateX, translateY, constrainTranslation]);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const delta = Math.abs(e.deltaY) > 50 ? e.deltaY * 2 : e.deltaY;
    const direction = delta > 0 ? -1 : 1;
    handleZoom(direction, e.clientX, e.clientY);
  }, [handleZoom]);

  const handleMouseDown = useCallback((e) => {
  if (scale <= 1) return;

  setIsDragging(true);
  dragStart.current = {
    x: e.clientX,
    y: e.clientY,
    translateX,
    translateY,
  };

  e.preventDefault();
}, [scale, translateX, translateY]);

  const handleMouseMove = useCallback((e) => {
  if (!isDragging || scale <= 1) return;

  const deltaX = e.clientX - dragStart.current.x;
  const deltaY = e.clientY - dragStart.current.y;

  if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1) return;

  const newTranslateX = dragStart.current.translateX + deltaX;
  const newTranslateY = dragStart.current.translateY + deltaY;

  const constrained = constrainTranslation(newTranslateX, newTranslateY, scale);
  setTranslateX(constrained.x);
  setTranslateY(constrained.y);
}, [isDragging, scale, constrainTranslation]);

const handleMouseUp = useCallback(() => {
  if (isDragging) {
    setIsDragging(false);
  }
}, [isDragging]);

  const handleTouchStart = useCallback((e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragStart.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        translateX,
        translateY
      };
    } else if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) + 
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      
      lastTouchDistance.current = distance;
    }
  }, [translateX, translateY]);

  const handleTouchMove = useCallback((e) => {
    e.preventDefault();
    
    if (e.touches.length === 1 && isDragging && scale > 1) {
      const deltaX = e.touches[0].clientX - dragStart.current.x;
      const deltaY = e.touches[0].clientY - dragStart.current.y;

      const newTranslateX = dragStart.current.translateX + deltaX;
      const newTranslateY = dragStart.current.translateY + deltaY;

      const constrained = constrainTranslation(newTranslateX, newTranslateY, scale);
      setTranslateX(constrained.x);
      setTranslateY(constrained.y);
    } else if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) + 
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      
      if (lastTouchDistance.current > 0) {
        const scaleChange = distance / lastTouchDistance.current;
        const centerX = (touch1.clientX + touch2.clientX) / 2;
        const centerY = (touch1.clientY + touch2.clientY) / 2;
        
        const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale * scaleChange));
        if (newScale !== scale) {
          handleZoom(newScale > scale ? 1 : -1, centerX, centerY);
        }
      }
      
      lastTouchDistance.current = distance;
    }
  }, [isDragging, scale, handleZoom, constrainTranslation]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    lastTouchDistance.current = 0;
  }, []);

  const handleDoubleClick = useCallback((e) => {
    const newScale = scale > 1 ? 1 : 3; 
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 200);
    
    if (newScale === 1) {
    
      setScale(1);
      setTranslateX(0);
      setTranslateY(0);
    } else {

      handleZoom(2, e.clientX, e.clientY);
    }
  }, [scale, handleZoom]);

  const handleZoomIn = useCallback(() => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      handleZoom(1, containerRect.left + containerRect.width / 2, containerRect.top + containerRect.height / 2);
    }
  }, [handleZoom]);

  const handleZoomOut = useCallback(() => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      handleZoom(-1, containerRect.left + containerRect.width / 2, containerRect.top + containerRect.height / 2);
    }
  }, [handleZoom]);
  
  const handleReset = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 200);
    setScale(1);
    setTranslateX(0);
    setTranslateY(0);
  }, []);

  const handleImageLoad = useCallback(() => {
    setTimeout(() => {
      updateRects();
    }, 100);
  }, [updateRects]);

  useEffect(() => {
    const handleResize = () => {
      updateRects();

      const constrained = constrainTranslation(translateX, translateY, scale);
      setTranslateX(constrained.x);
      setTranslateY(constrained.y);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateRects, constrainTranslation, translateX, translateY, scale]);

  useEffect(() => {
    updateRects();
  }, [scale, translateX, translateY, updateRects]);

  useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  container.addEventListener('wheel', handleWheel, { passive: false });
  container.addEventListener('mousemove', handleMouseMove);
  container.addEventListener('touchmove', handleTouchMove, { passive: false });

  window.addEventListener('mouseup', handleMouseUp);
  window.addEventListener('touchend', handleTouchEnd);

  return () => {
    container.removeEventListener('wheel', handleWheel);
    container.removeEventListener('mousemove', handleMouseMove);
    container.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('mouseup', handleMouseUp);
    window.removeEventListener('touchend', handleTouchEnd);
  };
}, [handleWheel, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);


  return (
    <ZoomContainer
      ref={containerRef}
      $isDragging={isDragging}
      $isZoomed={scale > 1}
      onMouseDown={handleMouseDown}
      onDoubleClick={handleDoubleClick}
      onTouchStart={handleTouchStart}
      {...props}
    >
     <ZoomControls>
  <ZoomButton 
    onClick={handleZoomOut}
    disabled={scale <= MIN_SCALE}
    title="Зменшити"
  >
    <MinusIcon />
  </ZoomButton>

  <ZoomButton 
    onClick={handleReset}
    disabled={scale === 1 && translateX === 0 && translateY === 0}
    title="Скинути масштаб"
  >
    <HouseIcon />
  </ZoomButton>

  <ZoomButton 
    onClick={handleZoomIn}
    disabled={scale >= MAX_SCALE}
    title="Збільшити"
  >
    <PlusIcon />
  </ZoomButton>
</ZoomControls>

      
      <ZoomImage
        ref={imageRef}
        src={src}
        alt={alt}
        $scale={scale}
        $translateX={translateX}
        $translateY={translateY}
        $isTransitioning={isTransitioning}
        onLoad={handleImageLoad}
        onError={onError}
        draggable={false}
      />
    </ZoomContainer>
  );
};

export default PhotoZoom;