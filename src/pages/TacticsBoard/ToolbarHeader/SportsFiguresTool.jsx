import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ToolContainer = styled.div`
  position: relative;
  display: inline-block;
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
`;

const FiguresDropdown = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.ContainerBGColor};
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 4px;
  z-index: 10000;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  gap: 2px;
  width: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const FigureOption = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;
  color: ${({ theme }) => theme.textBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${({ theme }) => theme.lightGreen};
  }
`;

const figures = [
  { id: 'player', name: 'Гравець', icon: '👤' },
  { id: 'goalkeeper', name: 'Воротар', icon: '🧤' },
  { id: 'coach', name: 'Тренер', icon: '🧠' },
  { id: 'referee', name: 'Суддя', icon: '⚖️' },
  { id: 'goal', name: 'Ворота', icon: '🥅' },
  { id: 'cone', name: 'Стійка', icon: '🟨' }
];

const SportsFiguresTool = ({ activeTool, onSelectFigure }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  // Визначаємо, чи обрана якась фігура з цієї групи
  const isFigureActive = activeTool.startsWith('figure_');
  const selectedFigureId = isFigureActive ? activeTool.replace('figure_', '') : null;
  const selectedFigure = figures.find(figure => figure.id === selectedFigureId);

  const handleToggle = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX
      });
    }
    setIsOpen(!isOpen);
  };

  const handleSelectFigure = (figure) => {
    onSelectFigure(figure);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getDisplayIcon = () => {
    return selectedFigure ? selectedFigure.icon : '👤';
  };

  return (
    <ToolContainer ref={containerRef}>
      <ToolButton 
        ref={buttonRef}
        title="Спортивні фігури"
        onClick={handleToggle}
        active={isFigureActive}
      >
        {getDisplayIcon()}
      </ToolButton>
      
      <FiguresDropdown 
        isOpen={isOpen}
        style={{
          top: dropdownPosition.top,
          left: dropdownPosition.left
        }}
      >
        {figures.map(figure => (
          <FigureOption 
            key={figure.id}
            onClick={() => handleSelectFigure(figure)}
            title={figure.name}
          >
            {figure.icon}
          </FigureOption>
        ))}
      </FiguresDropdown>
    </ToolContainer>
  );
};

export default SportsFiguresTool;