import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateObject, setTeam1Color, setTeam2Color } from '../../../../redux/TacticsBoard/TacticsBoardSlice';
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

const PlayerPropertiesPanel = ({ selectedObject }) => {
  const dispatch = useDispatch();

  const handleObjectUpdate = (property, value) => {
    dispatch(updateObject({ 
      id: selectedObject.id, 
      updates: { [property]: value } 
    }));
  };

  const handleTeamColorChange = (color) => {
    if (selectedObject.team === 1) {
      dispatch(setTeam1Color(color));
    } else {
      dispatch(setTeam2Color(color));
    }
  };

  return (
    <Section>
      <SectionTitle>Властивості гравця</SectionTitle>
      
      <PropertyRow>
        <PropertyLabel>Номер</PropertyLabel>
        <Input 
          type="number"
          min="1"
          max="99"
          value={selectedObject.number || 1}
          onChange={(e) => handleObjectUpdate('number', Number(e.target.value))}
        />
      </PropertyRow>

      <PropertyRow>
        <PropertyLabel>Колір команди</PropertyLabel>
        <ColorOpacityControl
          color={selectedObject.color || '#ff0000'}
          opacity={100}
          onColorChange={handleTeamColorChange}
          label=""
        />
      </PropertyRow>

      <PropertyRow>
        <PropertyLabel>
          Розмір
          <SliderValue>{selectedObject.radius || 20}px</SliderValue>
        </PropertyLabel>
        <Slider
          type="range"
          min="10"
          max="50"
          value={selectedObject.radius || 20}
          onChange={(e) => handleObjectUpdate('radius', Number(e.target.value))}
        />
      </PropertyRow>
    </Section>
  );
};

export default PlayerPropertiesPanel;