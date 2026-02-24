import React, { useState, useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Canvas from './Canvas';
import Toolbar from './ToolbarHeader/Toolbar';
import BottomToolbar from './ToolbarHeader/BottomToolbar'; 
import Sidebar from './ToolbarHeader/Sidebar/Sidebar';
import styled from 'styled-components';
import { useOutletContext } from "react-router-dom";

const TacticsBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  /* 🔥 МАГІЯ ТУТ: min-height дозволяє контейнеру рости, якщо канвас великий! */
  min-height: calc(100vh - 70px); 
  width: 100%;
  font-family: Arial, sans-serif;
  background: ${({ theme }) => theme.mainBGColor};
  
  /* ЖОДНИХ overflow: hidden тут у звичайному режимі! */

  ${({ $isFullscreen }) => $isFullscreen && `
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    height: 100vh; /* У фулскріні жорстко 100% екрану */
    z-index: 9999;
    overflow: hidden; /* І тільки у фулскріні блокуємо скролл */
  `}
`;

const TacticsBoardApp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1; /* Розтягується на всю мінімальну висоту */
  background: ${({ theme }) => theme.ContainerBGColor};
  position: relative;
  
  /* Ховаємо тільки сайдбар по горизонталі, вертикальний скролл НЕ чіпаємо */
  overflow-x: hidden; 
`;

const MainContent = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto; 
  overflow-x: hidden;
  
  /* ПРИБРАЛИ padding: 10px 0; */
  
  /* 🔥 НАДІЙНІ ВІДСТУПИ: Ці невидимі блоки гарантують відступ від тулбарів */
  &::before,
  &::after {
    content: '';
    min-height: 10px; /* Ті самі 10px відступу */
    width: 100%;
    flex-shrink: 0; /* Не даємо браузеру їх стиснути */
  }
`;

const TacticsBoard = ({ theme }) => {
  const { setTitle } = useOutletContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const boardRef = useRef(null);
  
  const [currentField, setCurrentField] = useState({
    id: 'football_standard',
    name: 'Стандартне футбольне поле',
    width: 105,
    height: 68
  });

  const handleSelectField = (field) => setCurrentField(field);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (boardRef.current?.requestFullscreen) boardRef.current.requestFullscreen();
      else if (boardRef.current?.webkitRequestFullscreen) boardRef.current.webkitRequestFullscreen();
      else if (boardRef.current?.msRequestFullscreen) boardRef.current.msRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
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
        <TacticsBoardApp>
          <Toolbar 
            currentField={currentField}
            onSelectField={handleSelectField}
            isSidebarOpen={isSidebarOpen}
            onToggleSidebar={toggleSidebar}
            isFullscreen={isFullscreen}
            onToggleFullscreen={toggleFullscreen}
          />
          
          <MainContent>
            <Canvas 
              fieldSize={{ width: currentField.width, height: currentField.height }} 
              fieldType={currentField.id} 
              isFullscreen={isFullscreen} 
            />
          </MainContent>

          <BottomToolbar />

          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </TacticsBoardApp>
      </TacticsBoardContainer>
    </Provider>
  );
};

export default TacticsBoard;