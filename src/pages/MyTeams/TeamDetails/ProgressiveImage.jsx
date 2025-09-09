import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProgressiveImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: ${props => props.$borderRadius || '8px'};
  background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
              linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
              linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;

  @media (max-width: 768px) {
    border-radius: ${props => props.$borderRadius === '8px' ? '6px' : props.$borderRadius || '6px'};
  }
`;

const BlurredImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: blur(5px);
  transform: scale(1.02); 
  opacity: ${props => props.$loaded ? 0 : 1};
  transition: opacity 0.3s ease;
  z-index: 1;
`;

const FullImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: ${props => props.$objectFit || 'cover'};
  object-position: center;
  opacity: ${props => props.$loaded ? 1 : 0};
  transition: opacity 0.5s ease;
  z-index: 2;
  cursor: ${props => props.$cursor || 'pointer'};
  
  ${props => props.$isFullscreen && `
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
    position: relative;
  `}
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* Нижчий z-index ніж кнопки */
  opacity: ${props => props.$loaded ? 0 : 1};
  transition: opacity 0.3s ease;
  pointer-events: none;
`;

const LoadingSpinner = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const createLowQualityUrl = (originalUrl) => {
  if (!originalUrl) return '';
  
  try {
    const url = new URL(originalUrl);
    url.searchParams.set('w', '50'); 
    url.searchParams.set('q', '30'); 
    return url.toString();
  } catch (error) {
    return originalUrl;
  }
};

const createPlaceholderDataUrl = (width = 10, height = 10) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f0f0f0');
  gradient.addColorStop(1, '#e0e0e0');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL();
};

const ProgressiveImage = ({ 
  src, 
  alt, 
  onClick, 
  onError,
  className,
  $borderRadius,
  $objectFit = 'cover',
  $cursor = 'pointer',
  $isFullscreen = false,
  style,
  loading = 'lazy'
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [lowQualityUrl, setLowQualityUrl] = useState('');

  useEffect(() => {
    if (src) {
      const lowUrl = createLowQualityUrl(src);
      if (lowUrl !== src) {
        setLowQualityUrl(lowUrl);
      } else {
        setLowQualityUrl(createPlaceholderDataUrl());
      }
      
      setImageLoaded(false);
      setImageError(false);
    }
  }, [src]);

  const handleFullImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = (e) => {
    setImageError(true);
    if (onError) {
      onError(e);
    }
  };

  if ($isFullscreen) {
    return (
      <FullImage
        src={src}
        alt={alt}
        onClick={onClick}
        onLoad={handleFullImageLoad}
        onError={handleImageError}
        $loaded={imageLoaded}
        $objectFit={$objectFit}
        $cursor={$cursor}
        $isFullscreen={$isFullscreen}
        className={className}
        style={style}
      />
    );
  }

  return (
    <ProgressiveImageContainer 
      $borderRadius={$borderRadius}
      className={className}
      style={style}
    >
      {lowQualityUrl && !imageError && (
        <BlurredImage
          src={lowQualityUrl}
          alt=""
          $loaded={imageLoaded}
          loading="eager" 
        />
      )}

      {src && (
        <FullImage
          src={src}
          alt={alt}
          onClick={onClick}
          onLoad={handleFullImageLoad}
          onError={handleImageError}
          $loaded={imageLoaded}
          $objectFit={$objectFit}
          $cursor={$cursor}
          loading={loading}
        />
      )}

      {/* Індикатор завантаження */}
      {!imageLoaded && !imageError && (
        <LoadingOverlay $loaded={imageLoaded}>
          <LoadingSpinner />
        </LoadingOverlay>
      )}
    </ProgressiveImageContainer>
  );
};

export default ProgressiveImage;