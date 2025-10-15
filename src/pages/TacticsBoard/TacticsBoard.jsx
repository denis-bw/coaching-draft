import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Canvas from './Canvas';
import Toolbar from './ToolbarHeader/Toolbar';
import Sidebar from './ToolbarHeader/Sidebar/Sidebar';
import styled from 'styled-components';
import { useOutletContext } from "react-router-dom";

const TacticsBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: ${({ theme }) => theme.mainBGColor};
`;

const TacticsBoardApp = styled.div`
  background: ${({ theme }) => theme.ContainerBGColor};
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const MainContent = styled.div`
  width: 100%;
`;

const TacticsBoard = ({ theme }) => {
  const { setTitle } = useOutletContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [currentField, setCurrentField] = useState({
    id: 'football_standard',
    name: 'Стандартне футбольне поле',
    width: 105,
    height: 68
  });

  const handleSelectField = (field) => {
    setCurrentField(field);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    setTitle("Тактична дошка");
  }, [setTitle]);
  
  return (
    <Provider store={store}>
      <TacticsBoardContainer>
        <TacticsBoardApp>
          <Toolbar 
            currentField={currentField}
            onSelectField={handleSelectField}
            isSidebarOpen={isSidebarOpen}
            onToggleSidebar={toggleSidebar}
          />
          <MainContent>
            <Canvas 
              fieldSize={{ width: currentField.width, height: currentField.height }} 
              fieldType={currentField.id} 
            />
          </MainContent>
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
            <div>Тут будуть інструменти</div>
          </Sidebar>
        </TacticsBoardApp>
      </TacticsBoardContainer>
    </Provider>
  );
};

export default TacticsBoard;