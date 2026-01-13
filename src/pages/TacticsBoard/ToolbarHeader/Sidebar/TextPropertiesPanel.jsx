import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateObject } from '../../../../redux/TacticsBoard/TacticsBoardSlice';
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

const Textarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.lightGreen || '#ccc'};
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  resize: vertical;
  font-family: ${({ $fontFamily }) => $fontFamily || 'Arial'};
  line-height: 1.5;
  background: ${({ theme }) => theme.ContainerBGColor || '#fff'};
  color: ${({ theme }) => theme.textBlack || '#333'};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.greenMain || '#4CAF50'};
  }
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

const TextPropertiesPanel = ({ selectedObject }) => {
  const dispatch = useDispatch();
  
  // Локальний стейт ЛИШЕ для textarea, щоб курсор не стрибав
  const [localText, setLocalText] = useState(selectedObject.text || '');

  useEffect(() => {
    setLocalText(selectedObject.text || '');
  }, [selectedObject.id, selectedObject.text]);

  const handleObjectUpdate = (property, value) => {
    dispatch(updateObject({ 
      id: selectedObject.id, 
      updates: { [property]: value } 
    }));
  };

  const handleTextChange = (e) => {
    setLocalText(e.target.value);
  };

  const handleTextBlur = () => {
    handleObjectUpdate('text', localText);
  };

  return (
    <Section>
      <SectionTitle>Властивості тексту</SectionTitle>
      
      <PropertyRow>
        <PropertyLabel>Текст</PropertyLabel>
        <Textarea 
          value={localText}
          onChange={handleTextChange}
          onBlur={handleTextBlur}
          placeholder="Введіть текст..."
          $fontFamily={selectedObject.fontFamily}
        />
      </PropertyRow>

      <PropertyRow>
        <ColorOpacityControl
          color={selectedObject.color || '#000000'}
          opacity={selectedObject.opacity || 100}
          onColorChange={(color) => handleObjectUpdate('color', color)}
          onOpacityChange={(opacity) => handleObjectUpdate('opacity', opacity)}
          label="Колір і прозорість"
        />
      </PropertyRow>

      <PropertyRow>
        <PropertyLabel>
          Розмір шрифту
          <SliderValue>{selectedObject.fontSize || 16}px</SliderValue>
        </PropertyLabel>
        <Slider
          type="range"
          min="8"
          max="200"
          value={selectedObject.fontSize || 16}
          onChange={(e) => handleObjectUpdate('fontSize', Number(e.target.value))}
        />
      </PropertyRow>

      <PropertyRow>
        <PropertyLabel>Тип шрифту</PropertyLabel>
        <CustomSelect
          value={selectedObject.fontFamily || 'Arial'}
          onChange={(value) => handleObjectUpdate('fontFamily', value)}
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
            $active={selectedObject.fontWeight === 'bold'}
            onClick={() => handleObjectUpdate('fontWeight', selectedObject.fontWeight === 'bold' ? 'normal' : 'bold')}
          >
            <strong>B</strong>
          </ToggleButton>
          <ToggleButton 
            $active={selectedObject.fontStyle === 'italic'}
            onClick={() => handleObjectUpdate('fontStyle', selectedObject.fontStyle === 'italic' ? 'normal' : 'italic')}
          >
            <em>I</em>
          </ToggleButton>
          <ToggleButton 
            $active={selectedObject.textDecoration === 'underline'}
            onClick={() => handleObjectUpdate('textDecoration', selectedObject.textDecoration === 'underline' ? 'none' : 'underline')}
          >
            <u>U</u>
          </ToggleButton>
        </ButtonGroup>
      </PropertyRow>

      <PropertyRow>
        <PropertyLabel>
          Міжрядковий інтервал
          <SliderValue>{(selectedObject.lineHeight || 1.5).toFixed(1)}</SliderValue>
        </PropertyLabel>
        <Slider
          type="range"
          min="0.8"
          max="3"
          step="0.1"
          value={selectedObject.lineHeight || 1.5}
          onChange={(e) => handleObjectUpdate('lineHeight', Number(e.target.value))}
        />
      </PropertyRow>

      <PropertyRow>
        <PropertyLabel>
          Міжлітерний інтервал
          <SliderValue>{selectedObject.letterSpacing || 0}px</SliderValue>
        </PropertyLabel>
        <Slider
          type="range"
          min="-2"
          max="10"
          step="0.5"
          value={selectedObject.letterSpacing || 0}
          onChange={(e) => handleObjectUpdate('letterSpacing', Number(e.target.value))}
        />
      </PropertyRow>

      <PropertyRow>
        <PropertyLabel>
          Поворот тексту
          <SliderValue>{selectedObject.rotation || 0}°</SliderValue>
        </PropertyLabel>
        <Slider
          type="range"
          min="-180"
          max="180"
          step="5"
          value={selectedObject.rotation || 0}
          onChange={(e) => handleObjectUpdate('rotation', Number(e.target.value))}
        />
      </PropertyRow>
    </Section>
  );
};

export default TextPropertiesPanel;