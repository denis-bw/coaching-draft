import React from 'react';
import styled from 'styled-components';

const BottomToolbarContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.ContainerBGColor || '#ffffff'};
  border-top: 2px solid ${({ theme }) => theme.gray || '#e0e0e0'}; 
  padding: 12px 16px;
  box-sizing: border-box;
  z-index: 10;
  
  /* Не даємо тулбару сплющуватись */
  flex-shrink: 0; 
  
  /* Горизонтальний скролл, якщо інструментів стане багато */
  overflow-x: auto; 
  overflow-y: hidden;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.gray || '#ccc'};
    border-radius: 4px;
  }
`;

const ToolbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 16px;
  min-width: max-content; /* Щоб контент міг скролитися, а не зжимався */
`;

const PlaceholderButton = styled.button`
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  border: 1px dashed ${({ theme }) => theme.textGray || '#999'};
  background: ${({ theme }) => theme.ContainerBGColor || '#fff'};
  color: ${({ theme }) => theme.textBlack || '#000'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 4px;
  transition: all 0.2s;
  
  &:hover {
    background: ${({ theme }) => theme.lightGreen || '#E8F5E9'};
    border-style: solid;
    border-color: ${({ theme }) => theme.greenMain || '#4CAF50'};
  }
`;

const BottomToolbar = () => {
  return (
    <BottomToolbarContainer>
      <ToolbarContent>
        <PlaceholderButton title="Заглушка 1">1</PlaceholderButton>
        <PlaceholderButton title="Заглушка 2">2</PlaceholderButton>
        <PlaceholderButton title="Заглушка 3">3</PlaceholderButton>
        <PlaceholderButton title="Заглушка 4">4</PlaceholderButton>
      </ToolbarContent>
    </BottomToolbarContainer>
  );
};

export default BottomToolbar;