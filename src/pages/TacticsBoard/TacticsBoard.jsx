import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Canvas from './Canvas';
import Toolbar from './ToolbarHeader/Toolbar';
import styled from 'styled-components';

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
`;

const TacticsBoard = ({ theme }) => {
  const [currentField, setCurrentField] = useState({
    id: 'football_standard',
    name: 'Стандартне футбольне поле',
    width: 105,
    height: 68
  });

  const handleSelectField = (field) => {
    setCurrentField(field);
  };

  return (
      <Provider store={store}>
        <TacticsBoardContainer>
          <TacticsBoardApp>
            <Toolbar 
              currentField={currentField}
              onSelectField={handleSelectField}
            />
            <Canvas 
              fieldSize={{ width: currentField.width, height: currentField.height }} 
              fieldType={currentField.id} 
            />
          </TacticsBoardApp>
        </TacticsBoardContainer>
      </Provider>
  );
};

export default TacticsBoard;