import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as FootballIcon } from '../../../assets/football.svg';
import { ReactComponent as BasketballIcon } from '../../../assets/basketball.svg';
import { ReactComponent as VolleyballIcon } from '../../../assets/volleyball.svg';
import { ReactComponent as TennisIcon } from '../../../assets/tennis.svg';
import { ReactComponent as RugbyIcon } from '../../../assets/rugby.svg';
import { ReactComponent as SheetIcon } from '../../../assets/sheet.svg';
import { ReactComponent as CloseIcon } from '../../../assets/CloseIcon.svg';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.2s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.ContainerBGColor};
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  height: 90vh;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease-out;
  
  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ModalHeader = styled.div`
  padding: 20px 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 2px solid ${({ theme }) => theme.mainBGColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.ContainerBGColor};
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  color: ${({ theme }) => theme.textBlack};
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: ${({ theme }) => theme.textGray};
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.textBlack};
  }

  &:hover {
    background: ${({ theme }) => theme.red};
    svg {
      fill: ${({ theme }) => theme.white};
   }
    color: ${({ theme }) => theme.textBlack};
  }
`;

const ModalBody = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const SportsCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  @media (max-width: 768px) {
    gap: 6px;
  }
`;

const CategoryButton = styled.button`
  padding: 10px 16px;
  border: 2px solid
    ${({ active, theme }) => (active ? theme.greenMain : theme.textGray)};
  background: ${({ active, theme }) =>
    active ? theme.greenMain : theme.ContainerBGColor};
  color: ${({ active, theme }) =>
    active ? theme.white : theme.textBlack};
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;

  &:hover {
    border-color: ${({ active, theme }) =>
      active ? theme.darkGreen : theme.lightGreen};
    background: ${({ active, theme }) =>
      active
        ? theme.darkGreen
        : theme.ContainerBGColor === "#ffffff"
        ? theme.lightGreen
        : "#343434"};
    color: ${({ active, theme }) =>
      active ? theme.white : theme.ContainerBGColor === "#ffffff" ? "#ffffff" : theme.textBlack};
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
    gap: 6px;
  }
`;

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
  
  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

const FieldsScrollContainer = styled.div`
  overflow-y: auto;
  padding-right: 8px;
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.mainBGColor};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.textBlack};
  }
`;

const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
`;

const FieldCard = styled.div`
  border: 2px solid ${props => props.selected ? props.theme.greenMain : props.theme.mainBGColor};
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: border-color 0.2s;
  background: ${props => props.selected ? props.theme.BgActiveLink : props.theme.ContainerBGColor};
  
  &:hover {
    border-color: ${({ theme }) => theme.greenMain};
  }
  
  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const FieldName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.textBlack};
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const FieldDimensions = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.textGray};
  line-height: 1.5;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const FieldPreview = styled.div`
  width: 100%;
  height: 140px;
  background: ${({ theme }) => theme.mainBGColor};
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.textGray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FieldVisualization = styled.div`
  position: relative;
  width: ${props => {
    // Фіксовані максимальні розміри для всіх екранів
    const maxWidth = 100;
    const maxHeight = 80;
    const width = props.fieldWidth;
    const height = props.fieldHeight;
    
    // Розраховуємо масштаб для збереження пропорцій
    const scaleByWidth = maxWidth / width;
    const scaleByHeight = maxHeight / height;
    const scale = Math.min(scaleByWidth, scaleByHeight);
    
    return `${width * scale}px`;
  }};
  height: ${props => {
    // Фіксовані максимальні розміри для всіх екранів
    const maxWidth = 100;
    const maxHeight = 80;
    const width = props.fieldWidth;
    const height = props.fieldHeight;
    
    // Розраховуємо масштаб для збереження пропорцій
    const scaleByWidth = maxWidth / width;
    const scaleByHeight = maxHeight / height;
    const scale = Math.min(scaleByWidth, scaleByHeight);
    
    return `${height * scale}px`;
  }};
  background: ${({ theme }) => theme.greenMain};
  border: 2px solid ${({ theme }) => theme.darkGreen};
  border-radius: 2px;
  
  /* Гарантуємо мінімальний розмір для дуже малих полів */
  min-width: 20px;
  min-height: 20px;
`;

const DimensionLabel = styled.div`
  position: absolute;
  font-size: 10px;
  color: ${({ theme }) => theme.textGray};
  font-weight: 600;
  background: ${({ theme }) => theme.ContainerBGColor};
  padding: 1px 4px;
  border-radius: 2px;
  white-space: nowrap;
  border: 1px solid ${({ theme }) => theme.textGray};
  
  &.width {
    bottom: -18px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &.height {
    right: -20px;
    top: 50%;
    transform: translateY(-50%) rotate(90deg);
    transform-origin: center;
  }
`;

export const FIELDS_DATA = {
  FOOTBALL: [
    { id: 'football_standard', name: 'Стандартне поле', width: 105, height: 68 },
    { id: 'football_small', name: 'Мале поле', width: 90, height: 45 },
    { id: 'football_futsal', name: 'Футзал', width: 40, height: 20 },
  ],
  BASKETBALL: [
    { id: 'basketball_nba', name: 'NBA', width: 28.65, height: 15.24 },
    { id: 'basketball_fiba', name: 'FIBA', width: 28, height: 15 },
  ],
  VOLLEYBALL: [
    { id: 'volleyball_indoor', name: 'Закритий майданчик', width: 18, height: 9 },
    { id: 'volleyball_beach', name: 'Пляжний майданчик', width: 16, height: 8 },
  ],
  TENNIS: [
    { id: 'tennis_singles', name: 'Одиночний розряд', width: 23.77, height: 8.23 },
    { id: 'tennis_doubles', name: 'Парний розряд', width: 23.77, height: 10.97 },
  ],
  RUGBY: [
    { id: 'rugby_standard', name: 'Регбі (15 гравців)', width: 100, height: 70 },
    { id: 'rugby_sevens', name: 'Регбі-7', width: 94, height: 68 },
  ],
  HANDBALL: [
    { id: 'handball_standard', name: 'Гандбол', width: 40, height: 20 },
  ],
  SHEET: [
    { id: 'a4_portrait', name: 'A4 Портрет', width: 21, height: 29.7 },
    { id: 'a4_landscape', name: 'A4 Ландшафт', width: 29.7, height: 21 },
    { id: 'a3_portrait', name: 'A3 Портрет', width: 29.7, height: 42 },
    { id: 'a3_landscape', name: 'A3 Ландшафт', width: 42, height: 29.7 },
    { id: 'a3_landscape1', name: 'A3 Ландшафт', width: 600, height: 29.7 },
      { id: 'a3_landscape2', name: 'A3 Ландшафт', width: 2, height: 529.7 },
  ]
};

export const CATEGORIES = [
  { id: 'FOOTBALL', name: 'Футбол', icon: FootballIcon },
  { id: 'RUGBY', name: 'Регбі', icon: RugbyIcon },
  { id: 'BASKETBALL', name: 'Баскетбол', icon: BasketballIcon },
  { id: 'VOLLEYBALL', name: 'Волейбол', icon: VolleyballIcon },
  { id: 'TENNIS', name: 'Теніс', icon: TennisIcon },
  { id: 'HANDBALL', name: 'Гандбол', icon: FootballIcon },
  { id: 'SHEET', name: 'Аркуш', icon: SheetIcon },
];

const FieldSelectorModal = ({ isOpen, onClose, onSelectField, currentFieldId }) => {
  const [activeCategory, setActiveCategory] = useState('FOOTBALL');
  const [selectedField, setSelectedField] = useState(currentFieldId);

  if (!isOpen) return null;

  const handleFieldClick = (field) => {
    setSelectedField(field.id);
    onSelectField(field);
    setTimeout(() => onClose(), 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Функція для форматування розмірів
  const formatDimensions = (field, category) => {
    if (category === 'SHEET') {
      return `${field.width}см × ${field.height}см`;
    }
    return `${field.width}м × ${field.height}м`;
  };

  // Функція для форматування міток на превью
  const formatDimensionLabel = (value, category) => {
    if (category === 'SHEET') {
      return `${value}см`;
    }
    return `${value}м`;
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Обрати спортивне поле</ModalTitle>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </ModalHeader>
        
        <ModalBody>
          <SportsCategories>
            {CATEGORIES.map(category => {
              const IconComponent = category.icon;
              return (
                <CategoryButton
                  key={category.id}
                  active={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <IconWrapper>
                    <IconComponent />
                  </IconWrapper>
                  {category.name}
                </CategoryButton>
              );
            })}
          </SportsCategories>
          
          <FieldsScrollContainer>
            <FieldsGrid>
              {FIELDS_DATA[activeCategory]?.map(field => {
                return (
                  <FieldCard
                    key={field.id}
                    selected={selectedField === field.id}
                    onClick={() => handleFieldClick(field)}
                  >
                    <FieldName>{field.name}</FieldName>
                    <FieldDimensions>
                      {formatDimensions(field, activeCategory)}
                    </FieldDimensions>
                    <FieldPreview>
                      <FieldVisualization 
                        fieldWidth={field.width} 
                        fieldHeight={field.height}
                      >
                        <DimensionLabel className="width">
                          {formatDimensionLabel(field.width, activeCategory)}
                        </DimensionLabel>
                        <DimensionLabel className="height">
                          {formatDimensionLabel(field.height, activeCategory)}
                        </DimensionLabel>
                      </FieldVisualization>
                    </FieldPreview>
                  </FieldCard>
                );
              })}
            </FieldsGrid>
          </FieldsScrollContainer>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default FieldSelectorModal;