import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as FieldIcon } from '../../../assets/field.svg';
import { ReactComponent as CursorIconBase } from '../../../assets/cursor.svg';
import { ReactComponent as PencilIconBase } from '../../../assets/pencil.svg';
import GeometricShapesTool from './GeometricShapesTool';
import SportsFiguresTool from './SportsFiguresTool';
import FieldSelectorModal from './FieldSelectorModal';

const CursorIcon = styled(CursorIconBase)`
  width: 70%;  
  height: 70%;
  stroke: ${({ theme }) => theme.textBlack};
`;

const PencilIcon = styled(PencilIconBase)`
  width: 70%;  
  height: 70%;
  fill: ${({ theme }) => theme.textBlack};
`;

const ToolbarContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.ContainerBGColor};
  border-bottom: 2px solid ${({ theme }) => theme.gray};
  padding: 12px 16px;
  box-sizing: border-box;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 4px;
  }
`;

const ToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: fit-content;
`;

const ToolButton = styled.button`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  border: 1px solid ${({ theme }) => theme.textBlack};
  background: ${props => props.active ? props.theme.greenMain : props.theme.ContainerBGColor};
  color: ${props => props.active ? props.theme.white : props.theme.textBlack};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 4px;
  transition: all 0.2s;
  padding: 0;
  
  &:hover {
    background: ${props => props.active ? props.theme.darkGreen : props.theme.lightGreen};
    border-color: ${({ theme }) => theme.textGray};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    font-size: 12px;
  }
  
  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    min-width: 18px;
    min-height: 18px;
    font-size: 10px;
  }
`;

const StyledFieldIcon = styled(FieldIcon)`
  width: 60%;
  height: 60%;
  fill: none;
  stroke: ${({ theme }) => theme.textBlack};
`;

const Separator = styled.div`
  width: 1px;
  height: 20px;
  background: ${({ theme }) => theme.gray};
  margin: 0 4px;
  
  @media (max-width: 768px) {
    height: 16px;
  }
`;

const TeamGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  background: ${({ theme }) => theme.disabledBG};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.gray};
  
  @media (max-width: 768px) {
    padding: 2px 6px;
  }
`;

const TeamLabel = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.textGray};
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

const NumberInput = styled.input`
  width: 32px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 3px;
  text-align: center;
  font-size: 12px;
  padding: 0 2px;
  background: ${({ theme }) => theme.ContainerBGColor};
  color: ${({ theme }) => theme.textBlack};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.greenMain};
  }
  
  @media (max-width: 768px) {
    width: 28px;
    height: 18px;
    font-size: 11px;
  }
  
  @media (max-width: 480px) {
    width: 24px;
    height: 16px;
    font-size: 10px;
  }
`;

const ColorPicker = styled.input`
  width: 24px;
  height: 24px;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 3px;
  cursor: pointer;
  padding: 0;
  
  &::-webkit-color-swatch-wrapper {
    padding: 2px;
  }
  
  &::-webkit-color-swatch {
    border: none;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;
const Toolbar = ({ currentField, onSelectField }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTool, setActiveTool] = useState('drawing');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectField = (field) => {
    onSelectField(field);
    handleCloseModal();
  };

  const handleToolClick = (toolName) => {
    setActiveTool(toolName);
    console.log('Активний інструмент:', toolName);
  };

  const handleShapeSelect = (shape) => {
    setActiveTool(`shape_${shape.id}`);
  };

  const handleFigureSelect = (figure) => {
    setActiveTool(`figure_${figure.id}`);
  };

  return (
    <>
      <ToolbarContainer>
        <ToolbarWrapper>
          {/* Обрати поле */}
          <ToolButton 
            title="Обрати поле"
            onClick={handleOpenModal}
          >
            <StyledFieldIcon />
          </ToolButton>
          
          <Separator />
        
          {/* Курсор */}
          <ToolButton 
            title="Курсор"
            active={activeTool === 'cursor'}
            onClick={() => handleToolClick('cursor')}
          >
            <CursorIcon/>
          </ToolButton>
        
          {/* Малювання */}
          <ToolButton 
            title="Малювання"
            active={activeTool === 'drawing'}
            onClick={() => handleToolClick('drawing')}
          >
            <PencilIcon/>
          </ToolButton>
        
          <Separator />
        
          {/* Геометричні фігури */}
          <GeometricShapesTool 
            activeTool={activeTool}
            onSelectShape={handleShapeSelect}
          />
          
          {/* Спортивні фігури */}
          <SportsFiguresTool 
            activeTool={activeTool}
            onSelectFigure={handleFigureSelect}
          />
        
          <Separator />
        
          {/* Команда 1 */}
          <TeamGroup>
            <TeamLabel>К1:</TeamLabel>
            <NumberInput 
              type="number" 
              min="0" 
              max="30" 
              defaultValue="11"
              title="Кількість гравців команди 1"
            />
            <ColorPicker 
              type="color" 
              defaultValue="#ff0000"
              title="Колір команди 1"
            />
          </TeamGroup>
        
          {/* Команда 2 */}
          <TeamGroup>
            <TeamLabel>К2:</TeamLabel>
            <NumberInput 
              type="number" 
              min="0" 
              max="30" 
              defaultValue="11"
              title="Кількість гравців команди 2"
            />
            <ColorPicker 
              type="color" 
              defaultValue="#0000ff"
              title="Колір команди 2"
            />
          </TeamGroup>
        
          <Separator />
        
          {/* М'яч */}
          <ToolButton 
            title="М'яч"
            active={activeTool === 'ball'}
            onClick={() => handleToolClick('ball')}
          >
            ⚽
          </ToolButton>
        
          {/* Картки */}
          <ToolButton 
            title="Картки"
            active={activeTool === 'cards'}
            onClick={() => handleToolClick('cards')}
          >
            🟨
          </ToolButton>
        
          <Separator />
        
          {/* Назад */}
          <ToolButton title="Назад">↶</ToolButton>
        
          {/* Вперед */}
          <ToolButton title="Вперед">↷</ToolButton>
        </ToolbarWrapper>
      </ToolbarContainer>

      <FieldSelectorModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelectField={handleSelectField}
        currentFieldId={currentField.id}
      />
    </>
  );
};

export default Toolbar;