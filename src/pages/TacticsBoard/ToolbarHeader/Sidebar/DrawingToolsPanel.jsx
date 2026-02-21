import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { 
  setDrawColor, 
  setBrushSize, 
  setBrushOpacity, 
  setBrushStyle,
  setLineType,
  updatePath
} from '../../../../redux/TacticsBoard/TacticsBoardSlice';
import ColorOpacityControl from './ColorOpacityControl';
import CustomSelect from './CustomSelect';

import markerImg from '../../../../assets/brushes/brush_marker.png';
import pencilImg from '../../../../assets/brushes/brush_pencil.png';
import penImg from '../../../../assets/brushes/brush_pen.png';
import oilImg from '../../../../assets/brushes/brush_oil.png';
import watercolorImg from '../../../../assets/brushes/brush_watercolor.png';
import sprayImg from '../../../../assets/brushes/brush_spray.png';

const Section = styled.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGreen || '#E0E0E0'};
  &:last-child {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({ theme }) => theme.textBlack || '#333'};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const PropertyRow = styled.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const PropertyLabel = styled.label`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.textBlack || '#555'};
`;

const SliderValue = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.greenMain || '#4CAF50'};
  margin-left: 8px;
`;

const Slider = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({ value, min, max, theme }) => {
    const percent = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, ${theme.greenMain} 0%, ${theme.greenMain} ${percent}%, ${theme.lightGreen} ${percent}%, ${theme.lightGreen} 100%)`;
  }};
  outline: none;
  margin: 0;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.greenMain};
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
    border: none;
  }
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.greenMain};
    cursor: pointer;
    border: none;
  }
`;

const BrushGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 10px;
`;

const BrushButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px; 
  width: 100%;
  
  border: 2px solid ${({ active, theme }) => active ? (theme.darkGreen || '#388E3C') : (theme.lightGreen || '#ccc')};
  background: ${({ active, theme }) => active ? (theme.lightGreen || '#E8F5E9') : (theme.ContainerBGColor || '#fff')};
  
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  padding: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; 
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.greenMain || '#4CAF50'};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const DrawingToolsPanel = () => {
  const dispatch = useDispatch();
  
  const { 
    drawColor, 
    brushSize, 
    brushOpacity, 
    brushStyle,
    lineType,
    selectedObjectId,
    paths 
  } = useSelector((state) => state.tacticsBoard);

  // НОВА ЛОГІКА: Шукаємо шлях за його унікальним ID, а не по індексу
  const selectedPath = selectedObjectId ? paths.find(p => p.id === selectedObjectId) : null;

  const currentStyle = selectedPath ? selectedPath.brushStyle : brushStyle;
  const currentColor = selectedPath ? selectedPath.color : drawColor;
  const currentOpacity = selectedPath ? (selectedPath.opacity !== undefined ? selectedPath.opacity : 100) : brushOpacity;
  const currentSize = selectedPath ? selectedPath.brushSize : brushSize;
  const currentLineType = selectedPath ? selectedPath.lineType : lineType;

  const [localSize, setLocalSize] = useState(currentSize);
  const [maxBrushSize, setMaxBrushSize] = useState(50);
  const [showLineTypeSelector, setShowLineTypeSelector] = useState(true);

  useEffect(() => {
    setLocalSize(currentSize);
    
    const styleToCheck = selectedPath ? selectedPath.brushStyle : brushStyle;
    switch (styleToCheck) {
        case 'hard': setMaxBrushSize(50); setShowLineTypeSelector(true); break;
        case 'pencil': setMaxBrushSize(20); setShowLineTypeSelector(true); break;
        case 'calligraphy': setMaxBrushSize(30); setShowLineTypeSelector(false); break;
        case 'oil': setMaxBrushSize(60); setShowLineTypeSelector(false); break;
        case 'watercolor': setMaxBrushSize(80); setShowLineTypeSelector(false); break;
        case 'splatter': setMaxBrushSize(100); setShowLineTypeSelector(false); break;
        default: setMaxBrushSize(50); setShowLineTypeSelector(true);
    }
  }, [selectedObjectId, currentSize, selectedPath, brushStyle]);

  const handleBrushSelect = (style) => {
    if (selectedPath) {
      dispatch(updatePath({
        id: selectedObjectId, // Використовуємо id замість index
        updates: { 
          brushStyle: style,
          lineType: ['oil', 'watercolor', 'splatter', 'calligraphy'].includes(style) ? 'solid' : currentLineType
        }
      }));
    } else {
      dispatch(setBrushStyle(style));
      if (['oil', 'watercolor', 'splatter', 'calligraphy'].includes(style)) {
         dispatch(setLineType('solid'));
      }
    }
  };

  const handleColorChange = (color) => {
    if (selectedPath) {
      dispatch(updatePath({ id: selectedObjectId, updates: { color } })); // Використовуємо id
    } else {
      dispatch(setDrawColor(color));
    }
  };

  const handleOpacityChange = (opacity) => {
    if (selectedPath) {
      dispatch(updatePath({ id: selectedObjectId, updates: { opacity } })); // Використовуємо id
    } else {
      dispatch(setBrushOpacity(opacity));
    }
  };

  const handleSizeChange = (e) => {
    setLocalSize(parseInt(e.target.value));
  };

  const handleSizeCommit = () => {
    if (selectedPath) {
      dispatch(updatePath({ id: selectedObjectId, updates: { brushSize: localSize } })); // Використовуємо id
    } else {
      dispatch(setBrushSize(localSize));
    }
  };

  const handleLineTypeChange = (value) => {
    if (selectedPath) {
      dispatch(updatePath({ id: selectedObjectId, updates: { lineType: value } })); // Використовуємо id
    } else {
      dispatch(setLineType(value));
    }
  };

  return (
    <>
      <Section>
        <SectionTitle>
          {selectedPath ? 'Пензель (обрана лінія)' : 'Тип пензля'}
        </SectionTitle>
        <BrushGrid>
          <BrushButton active={currentStyle === 'hard'} onClick={() => handleBrushSelect('hard')} title="Маркер">
            <img src={markerImg} alt="Маркер" />
          </BrushButton>

          <BrushButton active={currentStyle === 'pencil'} onClick={() => handleBrushSelect('pencil')} title="Олівець">
            <img src={pencilImg} alt="Олівець" />
          </BrushButton>

          <BrushButton active={currentStyle === 'calligraphy'} onClick={() => handleBrushSelect('calligraphy')} title="Перо">
            <img src={penImg} alt="Перо" />
          </BrushButton>

          <BrushButton active={currentStyle === 'oil'} onClick={() => handleBrushSelect('oil')} title="Олія">
            <img src={oilImg} alt="Олія" />
          </BrushButton>

          <BrushButton active={currentStyle === 'watercolor'} onClick={() => handleBrushSelect('watercolor')} title="Акварель">
            <img src={watercolorImg} alt="Акварель" />
          </BrushButton>

          <BrushButton active={currentStyle === 'splatter'} onClick={() => handleBrushSelect('splatter')} title="Спрей">
            <img src={sprayImg} alt="Спрей" />
          </BrushButton>
        </BrushGrid>
      </Section>

      <Section>

        <PropertyRow>
          <ColorOpacityControl
            color={currentColor}
            opacity={currentOpacity}
            onColorChange={handleColorChange}
            onOpacityChange={handleOpacityChange}
            label="Колір та прозорість"
          />
        </PropertyRow>

        <PropertyRow>
          <PropertyLabel>
            Товщина лінії
            <SliderValue>{localSize}px</SliderValue>
          </PropertyLabel>
          <Slider
            min="1"
            max={maxBrushSize}
            value={localSize}
            onChange={handleSizeChange}
            onMouseUp={handleSizeCommit}
            onTouchEnd={handleSizeCommit}
          />
        </PropertyRow>

        {showLineTypeSelector && (
          <PropertyRow>
            <PropertyLabel>Тип лінії</PropertyLabel>
            <CustomSelect
              value={currentLineType || 'solid'}
              onChange={handleLineTypeChange}
              options={[
                { value: 'solid', label: 'Суцільна' },
                { value: 'dashed', label: 'Пунктирна' },
                { value: 'dotted', label: 'Точкова' }
              ]}
              placeholder="Оберіть тип"
            />
          </PropertyRow>
        )}
      </Section>
    </>
  );
};

export default DrawingToolsPanel;