import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as FieldIcon } from '../../../assets/field.svg';
import { ReactComponent as CursorIconBase } from '../../../assets/cursor.svg';
import { ReactComponent as PencilIconBase } from '../../../assets/pencil.svg';
import { ReactComponent as EraserIconBase } from '../../../assets/EraserIcon.svg';
import { ReactComponent as СancelIconBase } from '../../../assets/cancel.svg';
import { ReactComponent as ForwardIconBase } from '../../../assets/forward.svg';
import { ReactComponent as TextIconBase } from '../../../assets/text.svg';
import { ReactComponent as DoubleArrowRightBase } from '../../../assets/doubleArrowRight.svg';

import GeometricShapesTool from './GeometricShapesTool';
import SportsFiguresTool from './SportsFiguresTool';
import FieldSelectorModal from './FieldSelectorModal';
import BallTools from './BallTools';

import HelpTooltip from '../../MyTeams/Athlete/AthleteCreate/HelpTooltip';

import {
  setActiveTool,
  setTeam1Count,
  setTeam1Color,
  setTeam2Count,
  setTeam2Color,
  undo,
  redo,
  clearAll,
  initializePlayers
} from '../../../redux/TacticsBoard/TacticsBoardSlice';

const TextIcon = styled(TextIconBase)`
  width: 80%;
  height: 80%;
  stroke: ${({ theme }) => theme.textBlack};
   fill: ${({ theme }) => theme.textBlack};
`;

const DoubleArrowRight = styled(DoubleArrowRightBase)`
  width: 100%;
  height: 100%;
   fill: ${({ theme }) => theme.black};
   rotate: 180deg;
`;

const СancelIcon = styled(СancelIconBase)`
  width: 100%;
  height: 100%;
  stroke: ${({ theme }) => theme.textBlack};
`;

const ForwardIcon = styled(ForwardIconBase)`
  width: 100%;
  height: 100%;
  fill: ${({ theme }) => theme.textBlack};
`;

const BackIcon = styled(ForwardIconBase)`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  fill: ${({ theme }) => theme.textBlack};
`;

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

const EraserIcon = styled(EraserIconBase)`
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
  overflow: hidden;
  position: relative;
`;

const ToolbarContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`;

const ToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
`;

const SidebarToggleContainer = styled.div`
  flex-shrink: 0;
  position: relative;
  z-index: 10;
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
  font-weight: bold;
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
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SidebarToggleButton = styled.button`
  width: 28px;
  height: 28px;
  min-width: 28px;
  min-height: 28px;
  border: 2px solid ${({ theme }) => theme.greenMain};
  background: ${({ theme }) => theme.lightGreen};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  transition: all 0.2s;
  padding: 0;
  
  &:hover {
    background: ${({ theme }) => theme.darkGreen};
    border-color: ${({ theme }) => theme.darkGreen};
    svg {
      fill: ${({ theme }) => theme.white};
    }
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

const ColorPickerStyled = styled.input`
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

const HelpWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px; 
  height: 28px;
  margin-left: 16px;

  svg {
    stroke: ${({ theme }) => theme.textBlack} !important; 
    width: 28px; 
    height: 28px;
    transition: all 0.2s ease;
  }
  
  &:hover svg {
    stroke: ${({ theme }) => theme.darkGreen} !important;
    opacity: 0.8;
  }
`;

const TooltipList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
  font-size: 13px;
  color: ${({ theme }) => theme.textBlack};
  text-align: left;
  line-height: 1.5;
  min-width: 240px;
`;

const TooltipItem = styled.div`
  word-wrap: break-word; 
`;

const BoldKey = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.textBlack};
`;

const HelpContent = () => (
  <TooltipList>
    <TooltipItem>
      <BoldKey>Ctrl/Cmd + Z</BoldKey> — Скасувати останню дію
    </TooltipItem>
    
    <TooltipItem>
      <BoldKey>Ctrl/Cmd + Y або Ctrl/Cmd + Shift + Z</BoldKey> — Повернути скасовану дію
    </TooltipItem>
    
    <TooltipItem>
      <BoldKey>Delete</BoldKey> — Видалити виділений об'єкт
    </TooltipItem>
    
    <TooltipItem>
      <BoldKey>Esc</BoldKey> — Зняти виділення / Зберегти текст
    </TooltipItem>
    
    <TooltipItem>
      <BoldKey>Shift (при створенні)</BoldKey> — Створення правильної фігури
    </TooltipItem>
    
    <TooltipItem>
      <BoldKey>Shift (при обертанні)</BoldKey> — Обертання з кроком 15°
    </TooltipItem>
    
    <TooltipItem>
      <BoldKey>(←, ↑, ↓, →)</BoldKey> — Посунути об'єкт на 1 піксель
    </TooltipItem>
    
    <TooltipItem>
      <BoldKey>Shift + (←, ↑, ↓, →)</BoldKey> — Посунути об'єкт на 10 пікселів
    </TooltipItem>
  </TooltipList>
);

const DebouncedColorPicker = ({ value, onChange, ...props }) => {
  const [localValue, setLocalValue] = useState(value);
  const debounceTimerRef = useRef(null);

  useEffect(() => {
    if (!debounceTimerRef.current) {
      setLocalValue(value);
    }
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      onChange(newValue);
      debounceTimerRef.current = null;
    }, 200);
  };

  return (
    <ColorPickerStyled 
      type="color" 
      value={localValue} 
      onChange={handleChange} 
      {...props} 
    />
  );
};

const Toolbar = ({ currentField, onSelectField, isSidebarOpen, onToggleSidebar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  
  const { activeTool, team1, team2, historyIndex, history } = useSelector(
    (state) => state.tacticsBoard
  );

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
    dispatch(setActiveTool(toolName));
  };

  const handleShapeSelect = (shape) => {
    dispatch(setActiveTool(`shape_${shape.id}`));
  };

  const handleFigureSelect = (figure) => {
    dispatch(setActiveTool(`figure_${figure.id}`));
  };

  const handleTeam1CountChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch(setTeam1Count(Math.max(0, Math.min(30, value))));
  };

  const handleTeam1ColorChange = (colorValue) => {
    dispatch(setTeam1Color(colorValue));
  };

  const handleTeam2CountChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch(setTeam2Count(Math.max(0, Math.min(30, value))));
  };

  const handleTeam2ColorChange = (colorValue) => {
    dispatch(setTeam2Color(colorValue));
  };

  const handleUndo = () => {
    dispatch(undo());
  };

  const handleRedo = () => {
    dispatch(redo());
  };

  const handleClearAll = () => {
    if (window.confirm('Ви впевнені, що хочете очистити всю дошку?')) {
      dispatch(clearAll());
    }
  };

  const handleBallSelect = (ball) => {
    dispatch(setActiveTool(`ball_${ball.id}`));
  };

  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;

  return (
    <>
      <ToolbarContainer>
        <ToolbarContent>
          <ToolbarWrapper>

            <ToolButton 
              title="Обрати поле"
              onClick={handleOpenModal}
            >
              <StyledFieldIcon />
            </ToolButton>
            
            <Separator />
          
            <ToolButton 
              title="Курсор (виділення та переміщення)"
              active={activeTool === 'cursor'}
              onClick={() => handleToolClick('cursor')}
            >
              <CursorIcon/>
            </ToolButton>

            <ToolButton 
              title="Додати текст"
              active={activeTool === 'text'}
              onClick={() => handleToolClick('text')}
            >
              <TextIcon/>
            </ToolButton>

            <ToolButton 
              title="Малювання"
              active={activeTool === 'drawing'}
              onClick={() => handleToolClick('drawing')}
            >
              <PencilIcon/>
            </ToolButton>
          
            <ToolButton 
              title="Ластик"
              active={activeTool === 'eraser'}
              onClick={() => handleToolClick('eraser')}
            >
              <EraserIcon />
            </ToolButton>
          
            <GeometricShapesTool 
              activeTool={activeTool}
              onSelectShape={handleShapeSelect}
            />
            
            <SportsFiguresTool 
              activeTool={activeTool}
              onSelectFigure={handleFigureSelect}
            />
          
            <Separator />
          
            <TeamGroup>
              <TeamLabel>К1:</TeamLabel>
              <NumberInput 
                type="number" 
                min="0" 
                max="30" 
                value={team1.count}
                onChange={handleTeam1CountChange}
                title="Кількість гравців команди 1"
              />
              <DebouncedColorPicker 
                value={team1.color}
                onChange={handleTeam1ColorChange}
                title="Колір команди 1"
              />
            </TeamGroup>
          
            <TeamGroup>
              <TeamLabel>К2:</TeamLabel>
              <NumberInput 
                type="number" 
                min="0" 
                max="30" 
                value={team2.count}
                onChange={handleTeam2CountChange}
                title="Кількість гравців команди 2"
              />
              <DebouncedColorPicker 
                value={team2.color}
                onChange={handleTeam2ColorChange}
                title="Колір команди 2"
              />
            </TeamGroup>
          
            <Separator />
          
            <BallTools 
              activeTool={activeTool}
              onSelectBall={handleBallSelect}
            />
          
            <Separator />
          
            <ToolButton 
              title="Назад (Undo)"
              onClick={handleUndo}
              disabled={!canUndo}
            >
              <BackIcon/>
            </ToolButton>
          
            <ToolButton 
              title="Вперед (Redo)"
              onClick={handleRedo}
              disabled={!canRedo}
            >
              <ForwardIcon />
            </ToolButton>
            
            <ToolButton 
              title="Скасувати все"
              onClick={handleClearAll}
            >
              <СancelIcon />
            </ToolButton>

            <HelpWrapper>
                <HelpTooltip title="Гарячі клавіші" text={<HelpContent />} />
            </HelpWrapper>

          </ToolbarWrapper>

          <SidebarToggleContainer>
            <SidebarToggleButton 
              title={"Відкрити панель інструментів"}
              active={isSidebarOpen}
              onClick={onToggleSidebar}
            >
             <DoubleArrowRight/>
            </SidebarToggleButton>
          </SidebarToggleContainer>
        </ToolbarContent>
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