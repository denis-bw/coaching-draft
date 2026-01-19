import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { 
  setTextColor, 
  setTextOpacity, 
  setTextFontSize,
  setTextFontFamily,
  setTextFontWeight,
  setTextFontStyle,
  setTextDecoration,
  setTextLineHeight,
  setTextLetterSpacing
} from '../../../../redux/TacticsBoard/TacticsBoardSlice';
import ColorOpacityControl from './ColorOpacityControl';
import CustomSelect from './CustomSelect';

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

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

const ToggleButton = styled.button`
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.lightGreen || '#ccc'};
  background: ${props => props.$active ? props.theme.greenMain || '#4CAF50' : props.theme.ContainerBGColor || 'white'};
  color: ${props => props.$active ? 'white' : props.theme.textBlack || '#333'};
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: ${props => props.$active ? '600' : '500'};
  transition: all 0.2s;
  
  &:hover {
    border-color: ${({ theme }) => theme.greenMain || '#4CAF50'};
    background: ${props => props.$active ? props.theme.greenMain || '#4CAF50' : props.theme.lightGreen || '#E8F5E9'};
  }
`;

const TextToolsPanel = () => {
  const dispatch = useDispatch();
  const { 
    textColor, 
    textOpacity, 
    textFontSize,
    textFontFamily,
    textFontWeight,
    textFontStyle,
    textDecoration,
    textLineHeight,
    textLetterSpacing
  } = useSelector(state => state.tacticsBoard);

  return (
    <Section>
      <SectionTitle>Налаштування тексту</SectionTitle>
      
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

      <PropertyRow>
        <PropertyLabel>Тип шрифту</PropertyLabel>
        <CustomSelect
          value={textFontFamily}
          onChange={(value) => dispatch(setTextFontFamily(value))}
          options={[
            { value: 'Arial', label: 'Arial' },
            { value: 'Times New Roman', label: 'Times New Roman' },
            { value: 'Courier New', label: 'Courier New' },
            { value: 'Georgia', label: 'Georgia' },
            { value: 'Verdana', label: 'Verdana' },
            { value: 'Comic Sans MS', label: 'Comic Sans MS' }
          ]}
          placeholder="Оберіть шрифт"
        />
      </PropertyRow>

      <PropertyRow>
        <PropertyLabel>Стиль тексту</PropertyLabel>
        <ButtonGroup>
          <ToggleButton 
            $active={textFontWeight === 'bold'}
            onClick={() => dispatch(setTextFontWeight(textFontWeight === 'bold' ? 'normal' : 'bold'))}
          >
            <strong>B</strong>
          </ToggleButton>
          <ToggleButton 
            $active={textFontStyle === 'italic'}
            onClick={() => dispatch(setTextFontStyle(textFontStyle === 'italic' ? 'normal' : 'italic'))}
          >
            <em>I</em>
          </ToggleButton>
          <ToggleButton 
            $active={textDecoration === 'underline'}
            onClick={() => dispatch(setTextDecoration(textDecoration === 'underline' ? 'none' : 'underline'))}
          >
            <u>U</u>
          </ToggleButton>
        </ButtonGroup>
      </PropertyRow>

      <PropertyRow>
        <PropertyLabel>
          Міжрядковий інтервал
          <SliderValue>{textLineHeight}</SliderValue>
        </PropertyLabel>
        <Slider
          type="range"
          min="0.5"
          max="3"
          step="0.1"
          value={textLineHeight}
          onChange={(e) => dispatch(setTextLineHeight(Number(e.target.value)))}
        />
      </PropertyRow>

      <PropertyRow>
        <PropertyLabel>
          Міжлітерний інтервал
          <SliderValue>{textLetterSpacing}px</SliderValue>
        </PropertyLabel>
        <Slider
          type="range"
          min="-2"
          max="10"
          step="0.5"
          value={textLetterSpacing}
          onChange={(e) => dispatch(setTextLetterSpacing(Number(e.target.value)))}
        />
      </PropertyRow>
    </Section>
  );
};

export default TextToolsPanel;