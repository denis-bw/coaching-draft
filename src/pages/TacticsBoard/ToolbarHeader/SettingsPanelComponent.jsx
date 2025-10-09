import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SettingsIcon } from '../../../assets/SettingsIcon.svg';
import { ReactComponent as CloseIcon } from '../../../assets/CloseIcon.svg';

const SettingsContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const SettingsButton = styled.button`
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme, $isOpen }) => $isOpen ? theme.greenMain : theme.textBlack};
  background: ${({ theme, $isOpen }) => $isOpen ? theme.greenMain : theme.ContainerBGColor};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 0;
  
  &:hover {
    background: ${({ theme, $isOpen }) => $isOpen ? theme.darkGreen : theme.lightGreen};
    border-color: ${({ theme }) => theme.greenMain};
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  width: 24px;
  height: 24px;
  fill: ${({ theme, $isOpen }) => $isOpen ? theme.white : theme.textBlack};
  transition: fill 0.3s ease;
  
  ${SettingsButton}:hover & {
    fill: ${({ theme, $isOpen }) => $isOpen ? theme.white : theme.greenMain};
  }
`;

const SettingsPanel = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.$isOpen ? '0' : '-100%'};
  width: 350px;
  height: 100vh;
  background: ${({ theme }) => theme.ContainerBGColor};
  border-left: 2px solid ${({ theme }) => theme.gray};
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  @media (max-width: 480px) {
    width: 100%;
    right: ${props => props.$isOpen ? '0' : '-100%'};
  }
`;

const PanelHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 2px solid ${({ theme }) => theme.mainBGColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.ContainerBGColor};
`;

const PanelTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.textBlack};
  font-weight: 600;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${({ theme }) => theme.red};
    
    svg {
      fill: ${({ theme }) => theme.white};
    }
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.textBlack};
  transition: fill 0.2s;
`;

const PanelContent = styled.div`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.mainBGColor};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.gray};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.textGray};
  }
`;

const SettingsGroup = styled.div`
  margin-bottom: 32px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const GroupTitle = styled.h4`
  margin: 0 0 16px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.textBlack};
  font-weight: 600;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
`;

const SettingsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 8px 0;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.textBlack};
  font-weight: 500;
  flex: 1;
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 4px;
  font-size: 14px;
  background: ${({ theme }) => theme.ContainerBGColor};
  color: ${({ theme }) => theme.textBlack};
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.greenMain};
  }
  
  &[type="number"] {
    width: 80px;
    text-align: center;
  }
  
  &[type="color"] {
    width: 40px;
    height: 40px;
    padding: 2px;
    cursor: pointer;
    
    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    
    &::-webkit-color-swatch {
      border: none;
      border-radius: 3px;
    }
  }
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 4px;
  font-size: 14px;
  background: ${({ theme }) => theme.ContainerBGColor};
  color: ${({ theme }) => theme.textBlack};
  cursor: pointer;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.greenMain};
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.greenMain};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

const ActionButton = styled.button`
  padding: 10px 16px;
  border: 2px solid ${({ theme, $variant }) => 
    $variant === 'primary' ? theme.greenMain : theme.gray};
  background: ${({ theme, $variant }) => 
    $variant === 'primary' ? theme.greenMain : 'transparent'};
  color: ${({ theme, $variant }) => 
    $variant === 'primary' ? theme.white : theme.textBlack};
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  flex: 1;
  
  &:hover {
    background: ${({ theme, $variant }) => 
      $variant === 'primary' ? theme.darkGreen : theme.lightGreen};
    border-color: ${({ theme, $variant }) => 
      $variant === 'primary' ? theme.darkGreen : theme.greenMain};
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 999;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

const SettingsPanelComponent = ({ 
  brushSize = 3,
  brushColor = '#000000',
  tool = 'pencil',
  onSettingsChange,
  theme
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    brushSize,
    brushColor,
    tool,
    snapToGrid: true,
    gridSize: 10,
    opacity: 100,
    lineStyle: 'solid'
  });

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSettingChange = (key, value) => {
    const newSettings = {
      ...settings,
      [key]: value
    };
    setSettings(newSettings);
    
    if (onSettingsChange) {
      onSettingsChange(newSettings);
    }
  };

  const handleReset = () => {
    const defaultSettings = {
      brushSize: 3,
      brushColor: '#000000',
      tool: 'pencil',
      snapToGrid: true,
      gridSize: 10,
      opacity: 100,
      lineStyle: 'solid'
    };
    
    setSettings(defaultSettings);
    
    if (onSettingsChange) {
      onSettingsChange(defaultSettings);
    }
  };

  const handleApply = () => {
    if (onSettingsChange) {
      onSettingsChange(settings);
    }
    handleClose();
  };

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      <SettingsContainer>
        <SettingsButton 
          onClick={handleToggle}
          $isOpen={isOpen}
          title="Налаштування"
        >
          <StyledSettingsIcon $isOpen={isOpen} />
        </SettingsButton>
      </SettingsContainer>

      <Overlay 
        $isOpen={isOpen} 
        onClick={handleClose}
      />

      <SettingsPanel $isOpen={isOpen}>
        <PanelHeader>
          <PanelTitle>Налаштування інструменту</PanelTitle>
          <CloseButton onClick={handleClose} title="Закрити">
            <StyledCloseIcon />
          </CloseButton>
        </PanelHeader>

        <PanelContent>
          <SettingsGroup>
            <GroupTitle>Основний інструмент</GroupTitle>
            
            <SettingsRow>
              <Label htmlFor="tool-select">Інструмент:</Label>
              <Select 
                id="tool-select"
                value={settings.tool}
                onChange={(e) => handleSettingChange('tool', e.target.value)}
              >
                <option value="pencil">Олівець</option>
                <option value="brush">Пензель</option>
                <option value="eraser">Гумка</option>
                <option value="line">Лінія</option>
                <option value="rectangle">Прямокутник</option>
                <option value="circle">Коло</option>
              </Select>
            </SettingsRow>

            <SettingsRow>
              <Label htmlFor="brush-size">Розмір пензля:</Label>
              <Input
                id="brush-size"
                type="number"
                min="1"
                max="50"
                value={settings.brushSize}
                onChange={(e) => handleSettingChange('brushSize', parseInt(e.target.value))}
              />
            </SettingsRow>

            <SettingsRow>
              <Label htmlFor="brush-color">Колір:</Label>
              <Input
                id="brush-color"
                type="color"
                value={settings.brushColor}
                onChange={(e) => handleSettingChange('brushColor', e.target.value)}
              />
            </SettingsRow>

            <SettingsRow>
              <Label htmlFor="opacity">Непрозорість:</Label>
              <Input
                id="opacity"
                type="range"
                min="1"
                max="100"
                value={settings.opacity}
                onChange={(e) => handleSettingChange('opacity', parseInt(e.target.value))}
              />
              <span style={{ marginLeft: '8px', minWidth: '30px' }}>
                {settings.opacity}%
              </span>
            </SettingsRow>
          </SettingsGroup>

          <SettingsGroup>
            <GroupTitle>Додаткові налаштування</GroupTitle>
            
            <SettingsRow>
              <Label htmlFor="snap-to-grid">Притягувати до сітки:</Label>
              <Checkbox
                id="snap-to-grid"
                checked={settings.snapToGrid}
                onChange={(e) => handleSettingChange('snapToGrid', e.target.checked)}
              />
            </SettingsRow>

            <SettingsRow>
              <Label htmlFor="grid-size">Розмір сітки:</Label>
              <Input
                id="grid-size"
                type="number"
                min="1"
                max="50"
                value={settings.gridSize}
                onChange={(e) => handleSettingChange('gridSize', parseInt(e.target.value))}
              />
            </SettingsRow>

            <SettingsRow>
              <Label htmlFor="line-style">Стиль лінії:</Label>
              <Select 
                id="line-style"
                value={settings.lineStyle}
                onChange={(e) => handleSettingChange('lineStyle', e.target.value)}
              >
                <option value="solid">Суцільна</option>
                <option value="dashed">Пунктирна</option>
                <option value="dotted">Крапкова</option>
              </Select>
            </SettingsRow>
          </SettingsGroup>

          <ButtonGroup>
            <ActionButton 
              $variant="secondary" 
              onClick={handleReset}
            >
              Скинути
            </ActionButton>
            <ActionButton 
              $variant="primary" 
              onClick={handleApply}
            >
              Застосувати
            </ActionButton>
          </ButtonGroup>
        </PanelContent>
      </SettingsPanel>
    </>
  );
};

export default SettingsPanelComponent;