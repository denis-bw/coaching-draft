import React, { useState, useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Canvas from './Canvas';
import Toolbar from './ToolbarHeader/Toolbar';
import Sidebar from './ToolbarHeader/Sidebar/Sidebar';
import styled from 'styled-components';
import { useOutletContext } from "react-router-dom";

// У звичайному режимі - твої оригінальні стилі.
// У режимі $isFullscreen - додаються стилі для блокування скролу і розтягування на весь монітор.
const TacticsBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: ${({ theme }) => theme.mainBGColor};
  
  ${({ $isFullscreen }) => $isFullscreen && `
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  `}
`;

const TacticsBoardApp = styled.div`
  background: ${({ theme }) => theme.ContainerBGColor};
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  ${({ $isFullscreen }) => $isFullscreen && `
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  `}
`;

const MainContent = styled.div`
  width: 100%;
  
  ${({ $isFullscreen }) => $isFullscreen && `
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  `}
`;

const TacticsBoard = ({ theme }) => {
  const { setTitle } = useOutletContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // --- Стани для Fullscreen ---
  const [isFullscreen, setIsFullscreen] = useState(false);
  const boardRef = useRef(null);
  
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

  // --- Логіка Fullscreen ---
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (boardRef.current?.requestFullscreen) {
        boardRef.current.requestFullscreen();
      } else if (boardRef.current?.webkitRequestFullscreen) { /* Safari */
        boardRef.current.webkitRequestFullscreen();
      } else if (boardRef.current?.msRequestFullscreen) { /* IE11 */
        boardRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    setTitle("Тактична дошка");
  }, [setTitle]);
  
  return (
    <Provider store={store}>
      <TacticsBoardContainer ref={boardRef} $isFullscreen={isFullscreen}>
        <TacticsBoardApp $isFullscreen={isFullscreen}>
          <Toolbar 
            currentField={currentField}
            onSelectField={handleSelectField}
            isSidebarOpen={isSidebarOpen}
            onToggleSidebar={toggleSidebar}
            isFullscreen={isFullscreen}
            onToggleFullscreen={toggleFullscreen}
          />
          <MainContent $isFullscreen={isFullscreen}>
            <Canvas 
              fieldSize={{ width: currentField.width, height: currentField.height }} 
              fieldType={currentField.id} 
              isFullscreen={isFullscreen} 
            />
          </MainContent>
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </TacticsBoardApp>
      </TacticsBoardContainer>
    </Provider>
  );
};

export default TacticsBoard;