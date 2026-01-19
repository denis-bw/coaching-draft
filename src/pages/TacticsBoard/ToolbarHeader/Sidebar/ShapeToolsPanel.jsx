import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { 
  setShapeBorderColor, 
  setShapeBorderOpacity, 
  setShapeFillColor, 
  setShapeFillOpacity, 
  setShapeBorderWidth,
  setShapeBorderStyle,
  setShapeLineCapStart,
  setShapeLineCapEnd
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
  color: #888;
  font-style: italic;
  margin-top: 12px;
  line-height: 1.4;
`;

const ShapeToolsPanel = () => {
  const dispatch = useDispatch();
  const { 
    activeTool,
    shapeBorderColor, 
    shapeBorderOpacity, 
    shapeFillColor, 
    shapeFillOpacity, 
    shapeBorderWidth,
    shapeBorderStyle,
    shapeLineCapStart,
    shapeLineCapEnd
  } = useSelector(state => state.tacticsBoard);

  const isLineOrArrow = activeTool === 'shape_line' || activeTool === 'shape_arrow';

  return (
    <Section>
      <SectionTitle>Налаштування фігури</SectionTitle>
      
      <PropertyRow>
        <ColorOpacityControl
          color={shapeBorderColor}
          opacity={shapeBorderOpacity}
          onColorChange={(color) => dispatch(setShapeBorderColor(color))}
          onOpacityChange={(opacity) => dispatch(setShapeBorderOpacity(opacity))}
          label="Колір обводки та прозорість"
        />
      </PropertyRow>

      <PropertyRow>
        <PropertyLabel>
          Товщина обводки
          <SliderValue>{shapeBorderWidth}px</SliderValue>
        </PropertyLabel>
        <Slider
          type="range"
          min="1"
          max="20"
          value={shapeBorderWidth}
          onChange={(e) => dispatch(setShapeBorderWidth(Number(e.target.value)))}
        />
      </PropertyRow>

      <PropertyRow>
        <PropertyLabel>Стиль обводки</PropertyLabel>
        <CustomSelect
          value={shapeBorderStyle}
          onChange={(value) => dispatch(setShapeBorderStyle(value))}
          options={[
            { value: 'solid', label: 'Суцільна' },
            { value: 'dashed', label: 'Пунктирна' },
            { value: 'dotted', label: 'Точкова' }
          ]}
          placeholder="Оберіть стиль"
        />
      </PropertyRow>

      {isLineOrArrow && (
        <>
          <PropertyRow>
            <PropertyLabel>Початок лінії</PropertyLabel>
            <CustomSelect
              value={shapeLineCapStart}
              onChange={(value) => dispatch(setShapeLineCapStart(value))}
              options={[
                { value: 'butt', label: 'Без закінчення' },
                { value: 'round', label: 'Точка' },
                { value: 'arrow', label: 'Стрілка' },
                { value: 'bar', label: 'Тупик' }
              ]}
              placeholder="Оберіть тип"
            />
          </PropertyRow>

          <PropertyRow>
            <PropertyLabel>Кінець лінії</PropertyLabel>
            <CustomSelect
              value={shapeLineCapEnd || (activeTool === 'shape_arrow' ? 'arrow' : 'butt')}
              onChange={(value) => dispatch(setShapeLineCapEnd(value))}
              options={[
                { value: 'butt', label: 'Без закінчення' },
                { value: 'round', label: 'Точка' },
                { value: 'arrow', label: 'Стрілка' },
                { value: 'bar', label: 'Тупик' }
              ]}
              placeholder="Оберіть тип"
            />
          </PropertyRow>
        </>
      )}

      {!isLineOrArrow && (
        <PropertyRow>
          <ColorOpacityControl
            color={shapeFillColor}
            opacity={shapeFillOpacity}
            onColorChange={(color) => dispatch(setShapeFillColor(color))}
            onOpacityChange={(opacity) => dispatch(setShapeFillOpacity(opacity))}
            label="Колір заливки і прозорість"
          />
        </PropertyRow>
      )}

      <InfoText>
        {isLineOrArrow 
          ? 'Клікніть і потягніть, щоб намалювати лінію' 
          : 'Клікніть і потягніть, щоб створити фігуру'}
      </InfoText>
    </Section>
  );
};

export default ShapeToolsPanel;