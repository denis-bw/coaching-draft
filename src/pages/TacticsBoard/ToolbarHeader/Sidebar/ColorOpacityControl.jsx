import React, { useState, useRef, useEffect, useMemo } from 'react';
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

// Хелпери
const percentToAlpha = (percent) => Math.max(0, Math.min(1, percent / 100));
const alphaToPercent = (alpha) => Math.round(Math.max(0, Math.min(100, alpha * 100)));

const hexToRgba = (hex, alpha = 1) => {
  if (!hex) return '0, 0, 0, 1';
  let cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex[0] + cleanHex[0] + cleanHex[1] + cleanHex[1] + cleanHex[2] + cleanHex[2];
  }
  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);
  return `${r}, ${g}, ${b}, ${alpha}`;
};

const ColorOpacityControl = ({ color, opacity, onColorChange, onOpacityChange, label }) => {
  const [localColor, setLocalColor] = useState(color || '#000000');
  const [localOpacity, setLocalOpacity] = useState(opacity !== undefined ? opacity : 100);
  
  const colorInputRef = useRef(null);
  const debounceTimerRef = useRef(null);
  
  // Додаємо ref для текстового інпута RGBA
  const textInputRef = useRef(null);

  // Обчислюємо значення рядка
  const rgbaValue = useMemo(() => {
    const alpha = percentToAlpha(localOpacity);
    return hexToRgba(localColor, alpha);
  }, [localColor, localOpacity]);

  // Локальний стан для тексту в інпуті
  const [inputValue, setInputValue] = useState(rgbaValue);

  const previewStyle = useMemo(() => {
    const alpha = percentToAlpha(localOpacity);
    const rgba = hexToRgba(localColor, alpha);
    return { backgroundColor: `rgba(${rgba})` };
  }, [localColor, localOpacity]);

  // Скидаємо локальний стан, якщо пропси змінилися ззовні
  useEffect(() => {
    if (!debounceTimerRef.current) {
      setLocalColor(color || '#000000');
      setLocalOpacity(opacity !== undefined ? opacity : 100);
    }
  }, [color, opacity]);

  // Синхронізуємо текст в інпуті з кольором, АЛЕ ТІЛЬКИ якщо інпут не у фокусі.
  // Це дозволяє змінювати колір піпеткою і бачити зміни в тексті,
  // але не заважає користувачу друкувати (курсор не стрибатиме).
  useEffect(() => {
    if (document.activeElement !== textInputRef.current) {
      setInputValue(rgbaValue);
    }
  }, [rgbaValue]);

  const handleNativeColorPickerChange = (e) => {
    const newHexColor = e.target.value;
    setLocalColor(newHexColor);
    
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    debounceTimerRef.current = setTimeout(() => {
      if (onColorChange) {
        onColorChange(newHexColor);
      }
      debounceTimerRef.current = null;
    }, 150);
  };

  // Змінено на onChange для миттєвої реакції
  const handleRgbaChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue); // Даємо користувачу друкувати що завгодно

    // Спробуємо розпарсити
    const values = newValue.split(',').map(val => parseFloat(val.trim()));
    
    // Якщо введено валідні дані (3 числа + опціонально альфа), оновлюємо стан
    if (values.length >= 3 && !values.some(isNaN)) {
       const r = Math.max(0, Math.min(255, values[0] || 0));
       const g = Math.max(0, Math.min(255, values[1] || 0));
       const b = Math.max(0, Math.min(255, values[2] || 0));
       const alpha = values[3] !== undefined ? Math.max(0, Math.min(1, values[3])) : 1;
       
       // Конвертуємо в HEX
       const newHex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
       const newPercent = alphaToPercent(alpha);

       setLocalColor(newHex);
       setLocalOpacity(newPercent);
       
       if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
       
       // Миттєве оновлення батьківського компонента
       if (onColorChange) onColorChange(newHex);
       if (onOpacityChange) onOpacityChange(newPercent);
    }
  };

  const handleOpacityChange = (e) => {
    let inputValue = e.target.value;
    let newOpacity = parseInt(inputValue);
    
    if (isNaN(newOpacity)) newOpacity = 0;
    if (newOpacity > 100) newOpacity = 100;
    if (newOpacity < 0) newOpacity = 0;
    
    setLocalOpacity(newOpacity);
    if (onOpacityChange) onOpacityChange(newOpacity);
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
            style={previewStyle}
            onClick={handleColorPreviewClick}
          />
          <ColorInput 
            ref={colorInputRef}
            type="color" 
            value={localColor}
            onChange={handleNativeColorPickerChange} 
          />
        </ColorPreviewWrapper>
        <RGBInputWrapper>
          <RGBInput 
            ref={textInputRef}
            type="text"
            // Важливо: прибрано key={rgbaValue} та defaultValue
            value={inputValue}
            onChange={handleRgbaChange}
            placeholder="0, 0, 0, 1"
          />
          <RGBLabel>RGBA</RGBLabel>
        </RGBInputWrapper>
        <OpacityInputWrapper>
          <OpacityInput 
            type="number"
            min="0"
            max="100"
            value={localOpacity}
            onChange={handleOpacityChange}
          />
          <OpacityLabel>Прозорість %</OpacityLabel>
        </OpacityInputWrapper>
      </ColorOpacityWrapper>
    </div>
  );
};

export default ColorOpacityControl;