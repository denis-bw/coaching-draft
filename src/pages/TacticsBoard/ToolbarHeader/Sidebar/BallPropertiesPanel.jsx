import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateObject } from '../../../../redux/TacticsBoard/TacticsBoardSlice';

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
  display: block;
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
    return `linear-gradient(to right, ${theme.greenMain || '#4CAF50'} 0%, ${theme.greenMain || '#4CAF50'} ${percent}%, ${theme.lightGreen || '#C8E6C9'} ${percent}%, ${theme.lightGreen || '#C8E6C9'} 100%)`;
  }};
  outline: none;
  margin: 0;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.greenMain || '#4CAF50'};
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
    border: none;
  }
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.greenMain || '#4CAF50'};
    cursor: pointer;
    border: none;
  }
`;

const SliderValue = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.greenMain || '#4CAF50'};
  margin-left: 8px;
`;

const MIN_BALL_SIZE = 10;
const MAX_BALL_SIZE = 150;

const BallPropertiesPanel = ({ selectedObject }) => {
  const dispatch = useDispatch();

  const handleObjectUpdate = (updates) => {
    dispatch(updateObject({ id: selectedObject.id, updates }));
  };

  const handleSizeChange = (value) => {
    let newSize = Number(value);
    newSize = Math.max(MIN_BALL_SIZE, Math.min(MAX_BALL_SIZE, newSize));
    
    const oldSize = selectedObject.width || 30;
    const diff = newSize - oldSize;
    
    const newX = selectedObject.x - diff / 2;
    const newY = selectedObject.y - diff / 2;

    handleObjectUpdate({ 
        width: newSize, 
        height: newSize,
        x: newX,
        y: newY
    });
  };

  const ballWidth = Math.round(selectedObject.width || 30);
  const ballRotation = Math.round(selectedObject.rotation || 0);

  return (
    <>
      <Section>
        <SectionTitle>Розмір м'яча</SectionTitle>
        <PropertyRow>
          <PropertyLabel>
            Розмір ({MIN_BALL_SIZE}-{MAX_BALL_SIZE}px)
            <SliderValue>{ballWidth}px</SliderValue>
          </PropertyLabel>
          <Slider
            min={MIN_BALL_SIZE}
            max={MAX_BALL_SIZE}
            value={ballWidth}
            onChange={(e) => handleSizeChange(e.target.value)}
          />
        </PropertyRow>
      </Section>

      <Section>
        <SectionTitle>Поворот</SectionTitle>
        <PropertyRow>
          <PropertyLabel>
            Кут повороту
            <SliderValue>{ballRotation}º</SliderValue>
          </PropertyLabel>
          <Slider
            min="-180"
            max="180"
            step="5"
            value={ballRotation}
            onChange={(e) => handleObjectUpdate({ rotation: Number(e.target.value) })}
          />
        </PropertyRow>
      </Section>
    </>
  );
};

export default BallPropertiesPanel;