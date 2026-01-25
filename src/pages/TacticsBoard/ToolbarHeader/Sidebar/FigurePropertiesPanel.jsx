import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateObject } from '../../../../redux/TacticsBoard/TacticsBoardSlice';
import ColorOpacityControl from './ColorOpacityControl';

const Section = styled.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGreen || '#E0E0E0'};
  &:last-child { border-bottom: none; }
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
`;

const PropertyLabel = styled.label`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.textBlack || '#555'};
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
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px; height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.greenMain};
    cursor: pointer;
    border: none;
  }
`;

const SliderValue = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.greenMain};
`;

const FigurePropertiesPanel = ({ selectedObject }) => {
  const dispatch = useDispatch();

  const handleUpdate = (updates) => {
    dispatch(updateObject({ id: selectedObject.id, updates }));
  };

  const handleSizeChange = (val) => {
    const newSize = Number(val);
    const oldSize = selectedObject.width || 40;
    const diff = newSize - oldSize;
    handleUpdate({ 
      width: newSize, height: newSize,
      x: selectedObject.x - diff / 2,
      y: selectedObject.y - diff / 2
    });
  };

  return (
    <>
      <Section>
        <SectionTitle>Зовнішній вигляд</SectionTitle>
        <PropertyRow>
          <ColorOpacityControl
            color={selectedObject.color || '#000000'}
            opacity={selectedObject.opacity !== undefined ? selectedObject.opacity : 100}
            onColorChange={(color) => handleUpdate({ color })}
            onOpacityChange={(opacity) => handleUpdate({ opacity })}
            label="Колір та прозорість"
          />
        </PropertyRow>
      </Section>

      <Section>
        <SectionTitle>Трансформація</SectionTitle>
        <PropertyRow>
          <PropertyLabel>Розмір <SliderValue>{Math.round(selectedObject.width)}px</SliderValue></PropertyLabel>
          <Slider min="10" max="300" value={selectedObject.width} onChange={(e) => handleSizeChange(e.target.value)} />
        </PropertyRow>
        <PropertyRow>
          <PropertyLabel>Поворот <SliderValue>{Math.round(selectedObject.rotation)}°</SliderValue></PropertyLabel>
          <Slider min="-180" max="180" value={selectedObject.rotation} onChange={(e) => handleUpdate({ rotation: Number(e.target.value) })} />
        </PropertyRow>
      </Section>
    </>
  );
};

export default FigurePropertiesPanel;