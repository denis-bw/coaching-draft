import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setTextColor, setTextOpacity, setTextFontSize } from '../../../../redux/TacticsBoard/TacticsBoardSlice';
import ColorOpacityControl from './ColorOpacityControl';

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

const SliderValue = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.greenMain || '#4CAF50'};
  margin-left: 8px;
`;

const InfoText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.textGray || '#777'};
  margin: 8px 0 0 0;
  font-style: italic;
`;

const TextToolsPanel = () => {
  const dispatch = useDispatch();
  const { textColor, textOpacity, textFontSize } = useSelector(state => state.tacticsBoard);

  return (
    <Section>
      <SectionTitle>Текст</SectionTitle>
      <PropertyRow>
        <ColorOpacityControl
          color={textColor}
          opacity={textOpacity}
          onColorChange={(color) => dispatch(setTextColor(color))}
          onOpacityChange={(opacity) => dispatch(setTextOpacity(opacity))}
          label="Колір і прозорість"
        />
      </PropertyRow>
      <PropertyRow>
        <PropertyLabel>
          Розмір шрифту
          <SliderValue>{textFontSize}px</SliderValue>
        </PropertyLabel>
        <Slider
          type="range"
          min="8"
          max="200"
          value={textFontSize}
          onChange={(e) => dispatch(setTextFontSize(Number(e.target.value)))}
        />
      </PropertyRow>
      <InfoText>Клікніть на полі, щоб додати текст.</InfoText>
    </Section>
  );
};

export default TextToolsPanel;