import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';

const SportsBoard = () => {
  // Стани компонента
  const [team1Count, setTeam1Count] = useState(11);
  const [team2Count, setTeam2Count] = useState(11);
  const [players, setPlayers] = useState([]);
  const [fieldImage, setFieldImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedPlayer, setDraggedPlayer] = useState(null);
  const [team1Color, setTeam1Color] = useState('#FF0000');
  const [team2Color, setTeam2Color] = useState('#0000FF');
  const [originalBoardSize, setOriginalBoardSize] = useState({ width: 800, height: 600 });
  
  const boardRef = useRef(null);
  const containerRef = useRef(null);
  const fieldImgRef = useRef(null);

  // Генерація гравців
  const generatePlayers = useCallback(() => {
    const newPlayers = [];
    
    // Гравці першої команди
    for (let i = 0; i < team1Count; i++) {
      newPlayers.push({
        id: `team1-${i}`,
        team: 1,
        number: i + 1,
        color: team1Color,
        x: 20 + (i % 5) * 30,
        y: 20 + Math.floor(i / 5) * 30,
      });
    }
    
    // Гравці другої команди
    for (let i = 0; i < team2Count; i++) {
      newPlayers.push({
        id: `team2-${i}`,
        team: 2,
        number: i + 1,
        color: team2Color,
        x: 70 + (i % 5) * 30,
        y: 20 + Math.floor(i / 5) * 30,
      });
    }
    
    setPlayers(newPlayers);
  }, [team1Count, team2Count, team1Color, team2Color]);

  useEffect(() => {
    generatePlayers();
  }, [team1Count, team2Count, generatePlayers]);

  useEffect(() => {
    setPlayers(prevPlayers => 
      prevPlayers.map(player => ({
        ...player,
        color: player.team === 1 ? team1Color : team2Color
      }))
    );
  }, [team1Color, team2Color]);

  // Масштабування до розміру контейнера
  const fitBoardToScreen = useCallback(() => {
    if (!containerRef.current || !originalBoardSize.width || !originalBoardSize.height) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    const boardRatio = originalBoardSize.width / originalBoardSize.height;
    const containerRatio = containerWidth / containerHeight;
    
    let newScale;
    if (boardRatio > containerRatio) {
      newScale = containerWidth / originalBoardSize.width;
    } else {
      newScale = containerHeight / originalBoardSize.height;
    }
    
    setScale(newScale);
  }, [originalBoardSize]);

  useEffect(() => {
    fitBoardToScreen();
    window.addEventListener('resize', fitBoardToScreen);
    return () => window.removeEventListener('resize', fitBoardToScreen);
  }, [fitBoardToScreen]);

  // Обробник завантаження зображення поля
  const handleImageLoad = () => {
    const img = fieldImgRef.current;
    if (img) {
      setOriginalBoardSize({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    }
  };

  // Обробники переміщення гравців
  const handlePlayerMouseDown = (playerId, e) => {
    e.stopPropagation();
    setIsDragging(true);
    setDraggedPlayer(playerId);
  };

  const handleBoardMouseMove = (e) => {
    if (!isDragging || !draggedPlayer || !boardRef.current) return;
    
    const board = boardRef.current;
    const rect = board.getBoundingClientRect();
    
    let x = (e.clientX - rect.left) / scale;
    let y = (e.clientY - rect.top) / scale;
    
    // Обмеження руху в межах дошки
    x = Math.max(15, Math.min(x, originalBoardSize.width - 15));
    y = Math.max(15, Math.min(y, originalBoardSize.height - 15));
    
    setPlayers(prevPlayers => 
      prevPlayers.map(player => 
        player.id === draggedPlayer ? { ...player, x, y } : player
      )
    );
  };

  const handleBoardMouseUp = () => {
    setIsDragging(false);
    setDraggedPlayer(null);
  };

  // Завантаження зображення поля
  const handleBackgroundUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setFieldImage(event.target.result);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  // Скидання до початкового стану
  const handleReset = () => {
    setFieldImage(null);
    setOriginalBoardSize({ width: 800, height: 600 });
    setTeam1Count(11);
    setTeam2Count(11);
    setTeam1Color('#FF0000');
    setTeam2Color('#0000FF');
    generatePlayers();
  };

  // Збереження схеми
  const handleSaveScheme = async () => {
    if (!boardRef.current) return;
    
    try {
      const canvas = await html2canvas(boardRef.current, {
        scale: 2,
        backgroundColor: null,
        useCORS: true,
        windowWidth: originalBoardSize.width,
        windowHeight: originalBoardSize.height,
      });
      
      canvas.toBlob((blob) => {
        saveAs(blob, 'sports-scheme.png');
      });
    } catch (error) {
      console.error('Помилка збереження:', error);
    }
  };

  return (
    <BoardContainer>
      <Controls>
        <ControlGroup>
          <label>Команда 1:</label>
          <input 
            type="number" 
            min="0" 
            max="50" 
            value={team1Count} 
            onChange={(e) => setTeam1Count(parseInt(e.target.value) || 0)} 
          />
          <ColorInput 
            type="color" 
            value={team1Color} 
            onChange={(e) => setTeam1Color(e.target.value)} 
          />
        </ControlGroup>
        
        <ControlGroup>
          <label>Команда 2:</label>
          <input 
            type="number" 
            min="0" 
            max="50" 
            value={team2Count} 
            onChange={(e) => setTeam2Count(parseInt(e.target.value) || 0)} 
          />
          <ColorInput 
            type="color" 
            value={team2Color} 
            onChange={(e) => setTeam2Color(e.target.value)} 
          />
        </ControlGroup>
        
        <Button onClick={handleReset}>Скинути</Button>
        <Button onClick={handleSaveScheme}>Зберегти</Button>
        
        <ControlGroup>
          <label>Фон поля:</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleBackgroundUpload} 
          />
        </ControlGroup>
      </Controls>
      
      <BoardOuterContainer ref={containerRef}>
        <BoardInner 
          ref={boardRef}
          style={{ 
            width: `${originalBoardSize.width}px`,
            height: `${originalBoardSize.height}px`,
            transform: `scale(${scale})`,
            background: !fieldImage ? '#4CAF50' : 'none'
          }}
          onMouseMove={handleBoardMouseMove}
          onMouseUp={handleBoardMouseUp}
          onMouseLeave={handleBoardMouseUp}
        >
          {fieldImage && (
            <FieldBackground 
              ref={fieldImgRef}
              src={fieldImage} 
              alt="Field" 
              onLoad={handleImageLoad}
              crossOrigin="anonymous"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          )}
          
          {players.map(player => (
            <Player
              key={player.id}
              style={{
                left: `${player.x}px`,
                top: `${player.y}px`,
                backgroundColor: player.color,
                transform: `translate(-50%, -50%) scale(${1/scale})`
              }}
              onMouseDown={(e) => handlePlayerMouseDown(player.id, e)}
            >
              {player.number}
            </Player>
          ))}
        </BoardInner>
      </BoardOuterContainer>
    </BoardContainer>
  );
};

// Стилі
const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 8px;
`;

const ControlGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  label {
    font-weight: bold;
  }
  
  input[type="number"] {
    width: 60px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

const ColorInput = styled.input`
  width: 30px;
  height: 30px;
  padding: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 8px 15px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #45a049;
  }
`;

const BoardOuterContainer = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const BoardInner = styled.div`
  position: relative;
  transform-origin: center center;
  transition: transform 0.3s;
`;

const FieldBackground = styled.img`
  display: block;
`;

const Player = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  cursor: move;
  user-select: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  
  &:hover {
    z-index: 10;
  }
`;

export default SportsBoard;