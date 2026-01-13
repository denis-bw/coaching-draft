import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateObject } from '../../../../redux/TacticsBoard/TacticsBoardSlice';
import ColorOpacityControl from './ColorOpacityControl';
import CustomSelect from './CustomSelect';
import { ReactComponent as DeleteIcon } from '../../../../assets/DeleteIcon.svg';

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

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
  margin-top: 10px;
`;

const CardRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 10px;
  background: ${({ theme }) => theme.ContainerBGColor || '#f5f5f5'}; 
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); 
  border-radius: 8px; 
  border: 1px solid ${({ theme }) => theme.lightGreen || '#e0e0e0'}; 
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

const CardPreview = styled.div`
  width: 30px; 
  height: 45px;
  background: ${({ $color }) => $color};
  border: 2px solid ${({ $borderColor }) => $borderColor}; 
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); 
`;

const CardControls = styled.div`
  display: flex;
  flex-direction: row; 
  gap: 15px; 
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

const CardColorRow = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const CardColorInput = styled.input.attrs({ type: 'color' })`
  width: 25px; 
  height: 25px;
  padding: 0;
  border: none; 
  border-radius: 4px; 
  cursor: pointer;
  background: transparent; 
  flex-shrink: 0;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  &::-webkit-color-swatch {
    border: 1px solid ${({ theme }) => theme.lightGreen || '#ccc'}; 
    border-radius: 4px;
  }
  &::-moz-color-swatch {
    border: 1px solid ${({ theme }) => theme.lightGreen || '#ccc'};
    border-radius: 4px;
  }
`;

const ColorLabel = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.textGray || '#666'};
  min-width: 45px; 
`;

const RemoveCardButton = styled.button`
  width: 35px; 
  height: 35px;
  background: #ff5252; 
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 50%; 
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  &:hover {
    background: #e04b4b; 
    transform: scale(1.02);
  }

  svg {
    width: 18px; 
    height: 18px;
    fill: none; 
    stroke: currentColor;
    display: block;
  }
`;

const AddCardButton = styled.button`
  width: 100%;
  padding: 10px;
  background: ${({ theme }) => theme.greenMain};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: ${({ theme }) => theme.darkGreen};
  }
  &:disabled {
    background: ${({ theme }) => theme.lightGreen};
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const CharCounter = styled.span`
  font-size: 10px;
  color: ${({ theme, $over }) => $over ? theme.red : theme.textGray};
  margin-top: 4px;
  display: block;
`;

const MIN_PLAYER_SIZE = 8;
const MAX_PLAYER_SIZE = 50;
const MAX_TEXT_LENGTH = 100;
const MAX_CARDS = 3;

const PlayerPropertiesPanel = ({ selectedObject }) => {
  const dispatch = useDispatch();

  const handleObjectUpdate = (property, value) => {
    dispatch(updateObject({ id: selectedObject.id, updates: { [property]: value } }));
  };

  const handleSizeChange = (value) => {
    let numValue = Number(value);
    numValue = Math.max(MIN_PLAYER_SIZE, Math.min(MAX_PLAYER_SIZE, numValue));
    handleObjectUpdate('radius', numValue);
  };

  const handleNumberChange = (value) => {
    const numValue = Math.max(0, Math.min(99, Number(value) || 0));
    handleObjectUpdate('number', numValue);
  };

  const handleTopTextChange = (value) => {
    if (value.length <= MAX_TEXT_LENGTH) handleObjectUpdate('topText', value);
  };

  const addCard = () => {
    const currentCards = selectedObject.cards || [];
    if (currentCards.length < MAX_CARDS) {
      const newCards = [...currentCards, { color: '#FFD700', cardBorderColor: '#000000' }]; 
      handleObjectUpdate('cards', newCards);
    }
  };

  const removeCard = (index) => {
    const currentCards = selectedObject.cards || [];
    const newCards = currentCards.filter((_, i) => i !== index);
    handleObjectUpdate('cards', newCards);
  };

  const updateCardColor = (index, color) => {
    const currentCards = selectedObject.cards || [];
    const newCards = [...currentCards];
    newCards[index] = { ...newCards[index], color };
    handleObjectUpdate('cards', newCards);
  };

  const updateCardBorderColor = (index, borderColor) => {
    const currentCards = selectedObject.cards || [];
    const newCards = [...currentCards];
    newCards[index] = { ...newCards[index], cardBorderColor: borderColor };
    handleObjectUpdate('cards', newCards);
  };

  const playerRadius = selectedObject.radius || 20;
  const playerNumber = selectedObject.number !== undefined ? selectedObject.number : 1; 
  const playerTopText = selectedObject.topText || '';
  const playerRotation = selectedObject.rotation || 0;
  const playerColor = selectedObject.color || '#ff0000';
  const playerColorOpacity = selectedObject.colorOpacity !== undefined ? selectedObject.colorOpacity : 100;
  const playerNumberColor = selectedObject.numberColor || '#ffffff';
  const playerNumberOpacity = selectedObject.numberOpacity !== undefined ? selectedObject.numberOpacity : 100;
  const playerTextColor = selectedObject.textColor || '#000000';
  const playerTextOpacity = selectedObject.textOpacity !== undefined ? selectedObject.textOpacity : 100;
  const playerTextSize = selectedObject.textSize || Math.max(10, playerRadius * 0.5);
  const playerBorderWidth = selectedObject.borderWidth || 2;
  const playerBorderColor = selectedObject.borderColor || '#000000';
  const playerBorderOpacity = selectedObject.borderOpacity !== undefined ? selectedObject.borderOpacity : 100;
  const playerBorderStyle = selectedObject.borderStyle || 'solid';
  const playerCards = selectedObject.cards || [];

  return (
    <>
      <Section>
        <SectionTitle>Розмір та позиція</SectionTitle>
        <PropertyRow>
          <PropertyLabel>
            Розмір гравця (8-50px)
            <SliderValue>{playerRadius}px</SliderValue>
          </PropertyLabel>
          <Slider
            min={MIN_PLAYER_SIZE}
            max={MAX_PLAYER_SIZE}
            value={playerRadius}
            onChange={(e) => handleSizeChange(e.target.value)}
          />
        </PropertyRow>
        <PropertyRow>
          <PropertyLabel>
            Кут повороту
            <SliderValue>{playerRotation}º</SliderValue>
          </PropertyLabel>
          <Slider
            min="-180"
            max="180"
            step="5"
            value={playerRotation}
            onChange={(e) => handleObjectUpdate('rotation', Number(e.target.value))}
          />
        </PropertyRow>
        <PropertyRow>
          <ColorOpacityControl
            color={playerColor}
            opacity={playerColorOpacity}
            onColorChange={(color) => handleObjectUpdate('color', color)}
            onOpacityChange={(opacity) => handleObjectUpdate('colorOpacity', opacity)}
            label="Колір гравця"
          />
        </PropertyRow>
      </Section>
      
      <Section>
        <SectionTitle>Номер гравця</SectionTitle>
        <PropertyRow>
          <PropertyLabel>Номер гравця (0-99)</PropertyLabel>
          <Input 
            type="number"
            min="0"
            max="99"
            value={playerNumber}
            onChange={(e) => handleNumberChange(e.target.value)}
          />
        </PropertyRow>
        <PropertyRow>
          <ColorOpacityControl
            color={playerNumberColor}
            opacity={playerNumberOpacity}
            onColorChange={(color) => handleObjectUpdate('numberColor', color)}
            onOpacityChange={(opacity) => handleObjectUpdate('numberOpacity', opacity)}
            label="Колір номера"
          />
        </PropertyRow>
      </Section>

      <Section>
        <SectionTitle>Текст над гравцем</SectionTitle>
        <PropertyRow>
          <PropertyLabel>Текст</PropertyLabel>
          <Input 
            type="text"
            maxLength={MAX_TEXT_LENGTH}
            placeholder="Введіть текст"
            value={playerTopText}
            onChange={(e) => handleTopTextChange(e.target.value)}
          />
          <CharCounter $over={playerTopText.length > MAX_TEXT_LENGTH}>
            {playerTopText.length}/{MAX_TEXT_LENGTH} символів
          </CharCounter>
        </PropertyRow>
        {playerTopText && (
          <>
            <PropertyRow>
              <PropertyLabel>
                Розмір тексту
                <SliderValue>{playerTextSize}px</SliderValue>
              </PropertyLabel>
              <Slider
                min="8"
                max="40"
                value={playerTextSize}
                onChange={(e) => handleObjectUpdate('textSize', Number(e.target.value))}
              />
            </PropertyRow>
            <PropertyRow>
              <ColorOpacityControl
                color={playerTextColor}
                opacity={playerTextOpacity}
                onColorChange={(color) => handleObjectUpdate('textColor', color)}
                onOpacityChange={(opacity) => handleObjectUpdate('textOpacity', opacity)}
                label="Колір тексту"
              />
            </PropertyRow>
          </>
        )}
      </Section>

      <Section>
        <SectionTitle>Обводка</SectionTitle>
        <PropertyRow>
          <ColorOpacityControl
            color={playerBorderColor}
            opacity={playerBorderOpacity}
            onColorChange={(color) => handleObjectUpdate('borderColor', color)}
            onOpacityChange={(opacity) => handleObjectUpdate('borderOpacity', opacity)}
            label="Колір обводки"
          />
        </PropertyRow>
        <PropertyRow>
          <PropertyLabel>
            Товщина обводки
            <SliderValue>{playerBorderWidth}px</SliderValue>
          </PropertyLabel>
          <Slider
            min="1"
            max="10"
            value={playerBorderWidth}
            onChange={(e) => handleObjectUpdate('borderWidth', Number(e.target.value))}
          />
        </PropertyRow>
        <PropertyRow>
          <PropertyLabel>Тип обводки</PropertyLabel>
          <CustomSelect
            value={playerBorderStyle}
            onChange={(value) => handleObjectUpdate('borderStyle', value)}
            options={[
              { value: 'solid', label: 'Суцільна' },
              { value: 'dashed', label: 'Пунктирна' },
              { value: 'dotted', label: 'Точкова' }
            ]}
            placeholder="Оберіть тип"
          />
        </PropertyRow>
      </Section>

      <Section>
        <SectionTitle>Картки ({playerCards.length}/{MAX_CARDS})</SectionTitle>
        {playerCards.length > 0 && (
          <CardsContainer>
            {playerCards.map((card, index) => (
              <CardRow key={index}>
                <CardPreview 
                  $color={card.color} 
                  $borderColor={card.cardBorderColor || '#000000'}
                />
                <CardControls>
                  <CardColorRow title="Колір заливки картки">
                    <ColorLabel>Заливка:</ColorLabel>
                    <CardColorInput
                      value={card.color}
                      onChange={(e) => updateCardColor(index, e.target.value)}
                    />
                  </CardColorRow>
                  
                  <CardColorRow title="Колір обводки картки">
                    <ColorLabel>Обводка:</ColorLabel>
                    <CardColorInput
                      value={card.cardBorderColor || '#000000'}
                      onChange={(e) => updateCardBorderColor(index, e.target.value)}
                    />
                  </CardColorRow>
                </CardControls>
                
                <RemoveCardButton 
                  onClick={() => removeCard(index)}
                  title="Видалити картку"
                >
                 <DeleteIcon />
                </RemoveCardButton>
              </CardRow>
            ))}
          </CardsContainer>
        )}
        <PropertyRow style={{ marginTop: playerCards.length > 0 ? '15px' : '0' }}>
          <AddCardButton 
            onClick={addCard}
            disabled={playerCards.length >= MAX_CARDS}
          >
            {playerCards.length >= MAX_CARDS 
              ? `Максимум ${MAX_CARDS} картки`
              : 'Додати картку'}
          </AddCardButton>
        </PropertyRow>
      </Section>
    </>
  );
};

export default PlayerPropertiesPanel;