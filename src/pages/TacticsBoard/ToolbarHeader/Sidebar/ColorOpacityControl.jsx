import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const PropertyLabel = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.textBlack || '#555'};
`;

const ColorOpacityWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 80px;
  gap: 8px;
  align-items: center;
`;

const ColorPreviewWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  
  background-image: 
    linear-gradient(45deg, #ccc 25%, transparent 25%),
    linear-gradient(-45deg, #ccc 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #ccc 75%),
    linear-gradient(-45deg, transparent 75%, #ccc 75%);
  background-size: 12px 12px;
  background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
`;

const ColorPreview = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  border: 2px solid ${({ theme }) => theme.lightGreen || '#ccc'};
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    border-radius: 50%;
    z-index: 1;
    background: ${props => `rgba(${props.$rgbaColor}, ${props.$opacity})`};
  }
`;

const ColorInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const RGBInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const RGBInput = styled.input`
  width: 100%;
  padding: 6px 8px;
  border: 1px solid ${({ theme }) => theme.lightGreen || '#ccc'};
  border-radius: 4px;
  font-size: 12px;
  font-family: monospace;
  background: ${({ theme }) => theme.ContainerBGColor || '#fff'};
  color: ${({ theme }) => theme.textBlack || '#333'};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.greenMain || '#4CAF50'};
  }
`;

const RGBLabel = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.textGray || '#777'};
`;

const OpacityInputWrapper = styled.div`
  position: relative;
`;

const OpacityInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.lightGreen || '#ccc'};
  border-radius: 4px;
  font-size: 12px;
  text-align: center;
  background: ${({ theme }) => theme.ContainerBGColor || '#fff'};
  color: ${({ theme }) => theme.textBlack || '#333'};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.greenMain || '#4CAF50'};
  }
`;

const OpacityLabel = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.textGray || '#777'};
  display: block;
  text-align: center;
  margin-top: 2px;
`;

const ColorOpacityControl = ({ color, opacity, onColorChange, onOpacityChange, label }) => {
  const [currentColor, setCurrentColor] = useState(color || '#000000');
  const [currentOpacity, setCurrentOpacity] = useState(opacity || 100);
  const [rgbaValue, setRgbaValue] = useState('0, 0, 0, 1');
  const colorInputRef = useRef(null);
  const debounceTimerRef = useRef(null);

  const hexToRgba = (hex, alpha = 1) => {
    if (!hex) return '0, 0, 0, 1';
    hex = hex.replace('#', '');
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `${r}, ${g}, ${b}, ${alpha}`;
  };

  const isValidRgbaFormat = (input) => {
    const rgbaFormat = /^[\d\s,\.]*$/;
    return rgbaFormat.test(input);
  };

  const parseRgbaString = (rgbaString) => {
    const values = rgbaString.split(',').map(val => parseFloat(val.trim()));
    if (values.length < 3 || values.some(isNaN)) return null;
    const r = Math.max(0, Math.min(255, values[0] || 0));
    const g = Math.max(0, Math.min(255, values[1] || 0));
    const b = Math.max(0, Math.min(255, values[2] || 0));
    const alpha = values[3] !== undefined ? Math.max(0, Math.min(1, values[3])) : 1;
    return { r, g, b, alpha };
  };

  const percentToAlpha = (percent) => {
    return Math.max(0, Math.min(1, percent / 100));
  };

  const alphaToPercent = (alpha) => {
    return Math.round(Math.max(0, Math.min(100, alpha * 100)));
  };

  const getRgbValues = () => {
    const hex = currentColor.replace('#', '');
    let r, g, b;
    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else {
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
    }
    return `${r}, ${g}, ${b}`;
  };

  useEffect(() => {
    setCurrentColor(color || '#000000');
    setCurrentOpacity(opacity || 100);
    const newAlpha = percentToAlpha(opacity || 100);
    setRgbaValue(hexToRgba(color || '#000000', newAlpha));
  }, [color, opacity]);

  const handleColorInputChange = (e) => {
    const newHexColor = e.target.value;
    const newAlpha = percentToAlpha(currentOpacity);
    
    setCurrentColor(newHexColor);
    setRgbaValue(hexToRgba(newHexColor, newAlpha));
    
    // Дебаунс для зміни кольору
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    debounceTimerRef.current = setTimeout(() => {
      if (onColorChange) onColorChange(newHexColor);
    }, 100);
  };

  const handleRgbaChange = (e) => {
    const input = e.target.value;
    if (!isValidRgbaFormat(input)) return;
    setRgbaValue(input);
  };

  const handleRgbaBlur = (e) => {
    const input = e.target.value;
    const parsed = parseRgbaString(input);
    
    if (parsed) {
      const { r, g, b, alpha } = parsed;
      const formattedRgba = `${r}, ${g}, ${b}, ${alpha}`;
      const newHex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
      const newPercent = alphaToPercent(alpha);
      
      setRgbaValue(formattedRgba);
      setCurrentColor(newHex);
      setCurrentOpacity(newPercent);
      
      if (onColorChange) onColorChange(newHex);
      if (onOpacityChange) onOpacityChange(newPercent);
    } else {
      const newAlpha = percentToAlpha(currentOpacity);
      setRgbaValue(hexToRgba(currentColor, newAlpha));
    }
  };

  const handleOpacityChange = (e) => {
    let newOpacity = parseInt(e.target.value);
    if (isNaN(newOpacity)) newOpacity = 0;
    newOpacity = Math.max(0, Math.min(100, newOpacity));
    
    const newAlpha = percentToAlpha(newOpacity);
    setCurrentOpacity(newOpacity);
    setRgbaValue(hexToRgba(currentColor, newAlpha));
  };

  const handleOpacityBlur = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    value = Math.max(0, Math.min(100, value));
    
    const newAlpha = percentToAlpha(value);
    setCurrentOpacity(value);
    setRgbaValue(hexToRgba(currentColor, newAlpha));
    
    if (onOpacityChange) onOpacityChange(value);
  };

  const handleColorPreviewClick = () => {
    if (colorInputRef.current) {
      colorInputRef.current.click();
    }
  };

  return (
    <div>
      {label && <PropertyLabel>{label}</PropertyLabel>}
      <ColorOpacityWrapper>
        <ColorPreviewWrapper>
          <ColorPreview 
            $rgbaColor={getRgbValues()}
            $opacity={currentOpacity / 100}
            onClick={handleColorPreviewClick}
          />
          <ColorInput 
            ref={colorInputRef}
            type="color" 
            value={currentColor}
            onChange={handleColorInputChange}
          />
        </ColorPreviewWrapper>
        <RGBInputWrapper>
          <RGBInput 
            type="text"
            value={rgbaValue}
            onChange={handleRgbaChange}
            onBlur={handleRgbaBlur}
            placeholder="0, 0, 0, 1"
          />
          <RGBLabel>RGBA</RGBLabel>
        </RGBInputWrapper>
        <OpacityInputWrapper>
          <OpacityInput 
            type="number"
            min="0"
            max="100"
            value={currentOpacity}
            onChange={handleOpacityChange}
            onBlur={handleOpacityBlur}
          />
          <OpacityLabel>Прозорість %</OpacityLabel>
        </OpacityInputWrapper>
      </ColorOpacityWrapper>
    </div>
  );
};

export default ColorOpacityControl;