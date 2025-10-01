import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as RectangleIcon } from '../../../assets/rectangle.svg';
import { ReactComponent as CircleIcon } from '../../../assets/circle.svg';
import { ReactComponent as TriangleIcon } from '../../../assets/triangle.svg';
import { ReactComponent as LineIcon } from '../../../assets/line.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/arrow.svg';

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

const ShapesDropdown = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.ContainerBGColor};
  border: 1px solid ${({ theme }) => theme.textBlack};
  border-radius: 4px;
  z-index: 10000;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  gap: 2px;
  width: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const ShapeOption = styled.button`
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

const StyledIcon = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const shapes = [
  { 
    id: 'rectangle', 
    name: 'Прямокутник', 
    icon: <RectangleIcon />,
    style: { stroke: 'currentColor', fill: 'none' }
  },
  { 
    id: 'circle', 
    name: 'Коло', 
    icon: <CircleIcon />,
    style: { stroke: 'currentColor', fill: 'none' }
  },
  { 
    id: 'triangle', 
    name: 'Трикутник', 
    icon: <TriangleIcon />,
    style: { fill: 'currentColor', stroke: 'none' }
  },
  { 
    id: 'line', 
    name: 'Лінія', 
    icon: <LineIcon />,
    style: { fill: 'currentColor', stroke: 'none' }
  },
  { 
    id: 'arrow', 
    name: 'Стрілка', 
    icon: <ArrowIcon />,
    style: { stroke: 'currentColor', fill: 'none' }
  }
];

const GeometricShapesTool = ({ activeTool, onSelectShape }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  // Визначаємо, чи обрана якась фігура з цієї групи
  const isShapeActive = activeTool.startsWith('shape_');
  const selectedShapeId = isShapeActive ? activeTool.replace('shape_', '') : null;
  const selectedShape = shapes.find(shape => shape.id === selectedShapeId);

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

  const handleSelectShape = (shape) => {
    onSelectShape(shape);
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
    const shape = selectedShape || shapes[0]; // Якщо нічого не обрано, показуємо прямокутник
    return (
      <StyledIcon>
        {React.cloneElement(shape.icon, shape.style)}
      </StyledIcon>
    );
  };

  const renderShapeIcon = (shape) => {
    return React.cloneElement(shape.icon, shape.style);
  };

  return (
    <ToolContainer ref={containerRef}>
      <ToolButton 
        ref={buttonRef}
        title="Геометричні фігури"
        onClick={handleToggle}
        active={isShapeActive}
      >
        {getDisplayIcon()}
      </ToolButton>
      
      <ShapesDropdown 
        isOpen={isOpen}
        style={{
          top: dropdownPosition.top,
          left: dropdownPosition.left
        }}
      >
        {shapes.map(shape => (
          <ShapeOption 
            key={shape.id}
            onClick={() => handleSelectShape(shape)}
            title={shape.name}
          >
            <StyledIcon>
              {renderShapeIcon(shape)}
            </StyledIcon>
          </ShapeOption>
        ))}
      </ShapesDropdown>
    </ToolContainer>
  );
};

export default GeometricShapesTool;