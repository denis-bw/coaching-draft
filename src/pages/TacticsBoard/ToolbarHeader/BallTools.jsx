import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { ReactComponent as RugbyIcon } from '../../../assets/balls/RugbyBallMarker.svg';
import { ReactComponent as RugbyIcon1 } from '../../../assets/balls/RugbyBallMarker1.svg';
import { ReactComponent as AmFootballIcon } from '../../../assets/balls/AmericanFootballBallMarker.svg';
import { ReactComponent as VolleyballIcon } from '../../../assets/balls/VolleyballBallMarker.svg';
import { ReactComponent as BasketIcon } from '../../../assets/balls/BasketballBallMarker.svg';
import { ReactComponent as BasketIcon1 } from '../../../assets/balls/BasketballBallMarker1.svg';
import { ReactComponent as FootballIcon } from '../../../assets/balls/FootballBallMarker.svg';
import { ReactComponent as FootballIcon1 } from '../../../assets/balls/FootballBallMarker1.svg';
import { ReactComponent as TennisIcon } from '../../../assets/balls/TennisBallMarker.svg';
import { ReactComponent as TennisIcon1 } from '../../../assets/balls/TennisBallMarker1.svg';
import { ReactComponent as PuckIcon } from '../../../assets/balls/PuckBallMarker.svg';
import { ReactComponent as BaseballIcon } from '../../../assets/balls/BaseballBallMarker.svg';
import { ReactComponent as SimpleBallIcon } from '../../../assets/balls/SimpleBallMarker.svg';
import { ReactComponent as VolleyballIcon1 } from '../../../assets/balls/VolleyballBallMarker1.svg';
import { ReactComponent as FootballIcon2 } from '../../../assets/balls/FootballBallMarker2.svg'; 

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

  svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }
`;

const Dropdown = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.ContainerBGColor};
  border: 1px solid ${({ theme }) => theme.textBlack};
  border-radius: 4px;
  z-index: 1000;
  display: ${props => props.isOpen ? 'grid' : 'none'};
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  padding: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
`;

const Option = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid transparent;
  
  &:hover {
    background-color: ${({ theme }) => theme.lightGreen};
    border-color: ${({ theme }) => theme.greenMain};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ballsList = [
  { id: 'football2', icon: <FootballIcon2 />, label: 'Футбол 3' },
  { id: 'football', icon: <FootballIcon />, label: 'Футбол 1' },
  { id: 'football1', icon: <FootballIcon1 />, label: 'Футбол 2' },
  { id: 'basketball', icon: <BasketIcon />, label: 'Баскетбол 1' },
  { id: 'basketball1', icon: <BasketIcon1 />, label: 'Баскетбол 2' },
  { id: 'volleyball', icon: <VolleyballIcon />, label: 'Волейбол1' },
  { id: 'volleyball1', icon: <VolleyballIcon1 />, label: 'Волейбол 2' },
  { id: 'rugby', icon: <RugbyIcon />, label: 'Регбі 1' },
  { id: 'rugby1', icon: <RugbyIcon1 />, label: 'Регбі 2' },
  { id: 'am_football', icon: <AmFootballIcon />, label: 'Амер. футбол' },
  { id: 'tennis', icon: <TennisIcon />, label: 'Теніс 1' },
  { id: 'tennis1', icon: <TennisIcon1 />, label: 'Теніс 2' },
  { id: 'baseball', icon: <BaseballIcon />, label: 'Бейсбол' },
  { id: 'puck', icon: <PuckIcon />, label: 'Шайба' },
  { id: 'simple', icon: <SimpleBallIcon />, label: 'Простий' },
];

const BallTools = ({ activeTool, onSelectBall }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBall, setSelectedBall] = useState(ballsList[0]);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  const isBallActive = activeTool && activeTool.startsWith('ball_');

  const handleToggle = () => {
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const estimatedDropdownWidth = 180; 

      let leftPos = rect.left + window.scrollX;

      if (rect.left + estimatedDropdownWidth > viewportWidth) {
        leftPos = (rect.left + rect.width) - estimatedDropdownWidth + window.scrollX;
      }

      if (leftPos < 0) leftPos = 5;

      setDropdownPosition({
        top: rect.bottom + window.scrollY + 5,
        left: leftPos
      });
    }
    setIsOpen(!isOpen);
  };

  const handleSelect = (ball) => {
    setSelectedBall(ball);
    onSelectBall(ball);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
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
        title="М'ячі"
        onClick={handleToggle}
        active={isBallActive}
      >
        {selectedBall.icon}
      </ToolButton>
      
      <Dropdown 
        isOpen={isOpen}
        style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
      >
        {ballsList.map(ball => (
          <Option 
            key={ball.id}
            onClick={() => handleSelect(ball)}
            title={ball.label}
          >
            {ball.icon}
          </Option>
        ))}
      </Dropdown>
    </ToolContainer>
  );
};

export default BallTools;