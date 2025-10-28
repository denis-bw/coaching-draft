import React from 'react';
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

const DimensionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.lightGreen || '#ccc'};
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.ContainerBGColor || '#fff'};
  color: ${({ theme }) => theme.textBlack || '#333'};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.greenMain || '#4CAF50'};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ShapePropertiesPanel = ({ selectedObject }) => {
  const dispatch = useDispatch();

  const handleObjectUpdate = (property, value) => {
    dispatch(updateObject({ 
      id: selectedObject.id, 
      updates: { [property]: value } 
    }));
  };

  const handleSizeChange = (dimension, value) => {
    const numValue = Number(value);
    
    if (selectedObject.shape === 'circle') {
      // Для кола змінюємо обидва розміри одночасно
      dispatch(updateObject({
        id: selectedObject.id,
        updates: {
          width: numValue,
          height: numValue
        }
      }));
    } else {
      // Для інших фігур змінюємо окремо
      handleObjectUpdate(dimension, numValue);
    }
  };

  const isLineOrArrow = selectedObject.shape === 'line' || selectedObject.shape === 'arrow';
  const isCircle = selectedObject.shape === 'circle';

  return (
    <Section>
      <SectionTitle>Властивості фігури</SectionTitle>
      
      {!isLineOrArrow && (
        <PropertyRow>
          <PropertyLabel>{isCircle ? 'Діаметр' : 'Розміри'}</PropertyLabel>
          {isCircle ? (
            <Input 
              type="number"
              min="10"
              value={Math.abs(selectedObject.width || 50)}
              onChange={(e) => handleSizeChange('width', e.target.value)}
            />
          ) : (
            <DimensionsGrid>
              <div>
                <PropertyLabel style={{ fontSize: '10px', marginBottom: '4px' }}>Ширина</PropertyLabel>
                <Input 
                  type="number"
                  min="10"
                  value={Math.abs(selectedObject.width || 50)}
                  onChange={(e) => handleSizeChange('width', e.target.value)}
                />
              </div>
              <div>
                <PropertyLabel style={{ fontSize: '10px', marginBottom: '4px' }}>Висота</PropertyLabel>
                <Input 
                  type="number"
                  min="10"
                  value={Math.abs(selectedObject.height || 30)}
                  onChange={(e) => handleSizeChange('height', e.target.value)}
                />
              </div>
            </DimensionsGrid>
          )}
        </PropertyRow>
      )}

      <PropertyRow>
        <PropertyLabel>
          Кут повороту
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

      <PropertyRow>
        <ColorOpacityControl
          color={selectedObject.borderColor || selectedObject.color || '#000000'}
          opacity={selectedObject.borderOpacity !== undefined ? selectedObject.borderOpacity : 100}
          onColorChange={(color) => handleObjectUpdate('borderColor', color)}
          onOpacityChange={(opacity) => handleObjectUpdate('borderOpacity', opacity)}
          label={isLineOrArrow ? "Колір лінії і прозорість" : "Колір обводки і прозорість"}
        />
      </PropertyRow>

      <PropertyRow>
        <PropertyLabel>
          {isLineOrArrow ? "Товщина лінії" : "Товщина обводки"}
          <SliderValue>{selectedObject.borderWidth || 2}px</SliderValue>
        </PropertyLabel>
        <Slider
          type="range"
          min="1"
          max="20"
          value={selectedObject.borderWidth || 2}
          onChange={(e) => handleObjectUpdate('borderWidth', Number(e.target.value))}
        />
      </PropertyRow>

      <PropertyRow>
        <PropertyLabel>Тип обводки</PropertyLabel>
        <CustomSelect
          value={selectedObject.borderStyle || 'solid'}
          onChange={(value) => handleObjectUpdate('borderStyle', value)}
          options={[
            { value: 'solid', label: 'Суцільна' },
            { value: 'dashed', label: 'Пунктирна' },
            { value: 'dotted', label: 'Точкова' }
          ]}
          placeholder="Оберіть тип"
        />
      </PropertyRow>

      {isLineOrArrow && (
        <>
          <PropertyRow>
            <PropertyLabel>Початок лінії</PropertyLabel>
            <CustomSelect
              value={selectedObject.lineCapStart || 'butt'}
              onChange={(value) => handleObjectUpdate('lineCapStart', value)}
              options={[
                { value: 'butt', label: 'Без закінчення' },
                { value: 'round', label: 'Заокруглений' },
                { value: 'arrow', label: 'Стрілка' },
                { value: 'circle', label: 'Коло' },
                { value: 'bar', label: 'Тупік' }
              ]}
              placeholder="Оберіть тип"
            />
          </PropertyRow>
          
<PropertyRow>
  <PropertyLabel>Кінець лінії</PropertyLabel>
    <CustomSelect
      value={selectedObject.lineCapEnd || (selectedObject.shape === 'arrow' ? 'arrow' : 'butt')}
      onChange={(value) => handleObjectUpdate('lineCapEnd', value)}
       options={[
        { value: 'butt', label: 'Без закінчення' },
         { value: 'round', label: 'Заокруглений' },
         { value: 'arrow', label: 'Стрілка' },
         { value: 'circle', label: 'Коло' },
         { value: 'bar', label: 'Тупік' }
       ]}
      placeholder="Оберіть тип"
      />
    </PropertyRow>
        </>
      )}

      {!isLineOrArrow && (
        <PropertyRow>
          <ColorOpacityControl
            color={selectedObject.fillColor || '#ffffff'}
            opacity={selectedObject.fillOpacity !== undefined ? selectedObject.fillOpacity : 0}
            onColorChange={(color) => handleObjectUpdate('fillColor', color)}
            onOpacityChange={(opacity) => handleObjectUpdate('fillOpacity', opacity)}
            label="Колір заливки і прозорість"
          />
        </PropertyRow>
      )}
    </Section>
  );
};

export default ShapePropertiesPanel;