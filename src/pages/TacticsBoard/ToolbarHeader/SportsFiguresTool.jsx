import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { figureIconsPaths } from './utils/drawingUtils';

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
  border-radius: 4px;
  
  padding: 3px; 
  
  overflow: hidden; 

  &:hover {
    background: ${props => props.active ? props.theme.darkGreen : props.theme.lightGreen};
  }

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const FiguresDropdown = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.ContainerBGColor};
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 4px;
  z-index: 10000;
  display: ${props => props.isOpen ? 'grid' : 'none'};
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  padding: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
`;

const FigureOption = styled.button`
  width: 36px;
  height: 36px;
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  overflow: hidden;
  
  &:hover {
    background: ${({ theme }) => theme.lightGreen};
    border-color: ${({ theme }) => theme.greenMain};
  }
  
  svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.textBlack};
  }
`;

export const FIGURE_CONFIG = {
  cone3d: { name: 'Конус', width: 36, height: 36 },
  cone: { name: 'Конус', width: 30, height: 30 },
  ladder: { name: 'Драбина', width: 74, height: 74 },
  ladder5: { name: 'Драбина', width: 74, height: 74 },
  pole: { name: 'Стійка', width: 40, height: 40 },
  pole3d: { name: 'Стійка', width: 40, height: 40 },
  marker: { name: 'Фішка', width: 26, height: 26 },
  marker3d: { name: 'Фішка', width: 30, height: 30 },
  marker3d1: {  name: 'Фішка Купол',  width: 26, height: 26, viewBox: "0 0 196 123" },
  dummy: { name: 'Манекен', width: 50, height: 50 },
  dummy1: { name: 'Манекен', width: 50, height: 50 },
    dummy2: { name: 'Манекен', width: 50, height: 50 },
  baton: { name: 'Естафетна паличка', width: 20, height: 20},
  kettlebell: {name: 'Гиря',   width: 24, height: 24  },
  hammer: {  name: 'Молот',  width: 24,  height: 24  },
  dumbbell: { name: 'Гантеля', width: 30, height: 30 },
  
};

const figuresList = Object.keys(FIGURE_CONFIG).map(id => ({
  id,
  ...FIGURE_CONFIG[id]
}));

const FigureIcon = ({ paths, customViewBox }) => {
  const pathArray = Array.isArray(paths) ? paths : [paths];
  const viewBox = customViewBox || "0 0 100 100";
  
  const isSpecialMarker = viewBox === "0 0 188 117";

  return (
    <svg 
      viewBox={viewBox} 
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {pathArray.map((d, index) => {
        let fill = "currentColor";
        let stroke = "none";
        let strokeWidth = "0";

        if (isSpecialMarker) {
          if (index <= 4) {
             fill = "currentColor";
             stroke = "none";
          } else if (index >= 5 && index <= 8) {
             fill = "none";
             stroke = "currentColor";
             strokeWidth = "8";
          } else {
             fill = "currentColor";
             stroke = "currentColor";
             strokeWidth = "2";
          }
        } 
        
        return (
          <path 
            key={index} 
            d={d} 
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      })}
    </svg>
  );
};

const SportsFiguresTool = ({ activeTool, onSelectFigure }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  const isFigureActive = activeTool.startsWith('figure_');
  const activeFigureId = isFigureActive ? activeTool.replace('figure_', '') : 'cone3d';
  const activePaths = figureIconsPaths[activeFigureId] || figureIconsPaths.marker;

  const handleToggle = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 5,
        left: rect.left + window.scrollX
      });
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <ToolContainer ref={containerRef}>
      <ToolButton 
        ref={buttonRef} 
        title="Спортивні фігури" 
        onClick={handleToggle} 
        active={isFigureActive}
      >
        <FigureIcon 
          paths={activePaths} 
          customViewBox={FIGURE_CONFIG[activeFigureId]?.viewBox}
        />
      </ToolButton>
      
      <FiguresDropdown isOpen={isOpen} style={{ top: dropdownPosition.top, left: dropdownPosition.left }}>
        {figuresList.map(f => (
          <FigureOption 
            key={f.id} 
            onClick={() => { onSelectFigure(f); setIsOpen(false); }} 
            title={f.name}
          >
            <FigureIcon 
              paths={figureIconsPaths[f.id]} 
              customViewBox={f.viewBox}
            />
          </FigureOption>
        ))}
      </FiguresDropdown>
    </ToolContainer>
  );
};

export default SportsFiguresTool;