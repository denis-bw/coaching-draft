import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectObject, reorderLayers, toggleLock, renameLayer, setActiveTool } from '../../../../redux/TacticsBoard/TacticsBoardSlice';

import { ReactComponent as LockIconSrc } from '../../../../assets/lockAlt.svg';
import { ReactComponent as UnlockIconSrc } from '../../../../assets/lockSlash.svg';

const StyledLockIcon = styled(LockIconSrc)`
  width: 18px;
  height: 18px;
  stroke: ${({ theme }) => theme.iconColor};
  fill: none; 
`;

const StyledUnlockIcon = styled(UnlockIconSrc)`
  width: 18px;
  height: 18px;
  stroke: ${({ theme }) => theme.iconColor};
  fill: none; 
`;

const ArrowUpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 15l-6-6-6 6"/>
  </svg>
);

const ArrowDownIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

// --- Стилі ---
const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 20px;
  position: relative;
`;

const LayerItem = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background: ${({ theme, $selected }) => $selected ? (theme.lightGreen || '#E8F5E9') : (theme.ContainerBGColor || '#fff')};
  border-bottom: 1px solid ${({ theme }) => theme.mainBGColor || '#eee'};
  cursor: pointer;
  transition: background 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
  min-width: 0; 
  
  opacity: ${({ $locked, $isDragging }) => $isDragging ? 0.3 : ($locked ? 0.6 : 1)};
  transform: ${({ $isDragging }) => $isDragging ? 'scale(0.98)' : 'none'};
  box-shadow: ${({ $dragOver, $direction, theme }) => 
    $dragOver && $direction === 'up' ? `inset 0 3px 0 0 ${theme.greenMain || '#4CAF50'}` : 
    $dragOver && $direction === 'down' ? `inset 0 -3px 0 0 ${theme.greenMain || '#4CAF50'}` : 
    'none'};

  &:hover {
    background: ${({ theme, $selected }) => $selected ? (theme.lightGreen || '#E8F5E9') : (theme.mainBGColor || '#f9f9f9')};
  }
`;

const ArrowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  cursor: grab;
  padding: 2px 0;
  
  /* ВАЖЛИВО ДЛЯ МОБІЛОК: Забороняє скрол сторінки, коли тягнемо за цю зону */
  touch-action: none; 
  
  &:active {
    cursor: grabbing;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  padding: 1px 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.textGray || '#999'};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.greenMain || '#4CAF50'};
  }

  &:disabled {
    opacity: 0.2;
    cursor: default;
  }
`;

const LayerNameInput = styled.input`
  flex: 1;
  min-width: 0; 
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.textBlack};
  font-size: 14px;
  outline: none;
  pointer-events: ${({ $isEditing }) => $isEditing ? 'auto' : 'none'};
  border-bottom: ${({ $isEditing, theme }) => $isEditing ? `1px solid ${theme.greenMain}` : 'none'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  margin-left: 4px;
  flex-shrink: 0;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background: rgba(0,0,0,0.05);
  }
`;

const getDisplayName = (item) => {
  if (item.layerName) return item.layerName;

  switch (item.type) {
    case 'player': return `Гравець (Ком.${item.team}, №${item.number})`;
    case 'text': return `Текст "${item.text || 'Порожній'}"`;
    case 'shape':
      const shapeNames = { rectangle: 'Прямокутник', circle: 'Коло / Овал', triangle: 'Трикутник', line: 'Лінія', arrow: 'Стрілка' };
      return shapeNames[item.shape] || 'Геометрична фігура';
    case 'ball':
      const ballType = item.ballType || '';
      if (ballType.includes('football')) return "Футбольний м'яч";
      if (ballType.includes('basket')) return "Баскетбольний м'яч";
      if (ballType.includes('volley')) return "Волейбольний м'яч";
      if (ballType.includes('tennis')) return "Тенісний м'яч";
      if (ballType.includes('rugby') || ballType.includes('am_football')) return "М'яч для регбі";
      if (ballType.includes('puck')) return "Шайба";
      return "М'яч";
    case 'figure':
      const figId = item.figureId || '';
      if (figId.includes('cone')) return 'Конус';
      if (figId.includes('ladder')) return 'Драбинка координаційна';
      if (figId.includes('dummy')) return 'Манекен (Стінка)';
      if (figId.includes('ring') || figId.includes('circle')) return 'Тренувальне кільце';
      if (figId.includes('goal')) return 'Ворота';
      if (figId.includes('stick')) return 'Палиця (Слалом)';
      if (figId.includes('barrier') || figId.includes('hurdle')) return "Бар'єр";
      return 'Спорт. інвентар';
    case 'path':
      let brushName = 'Олівець';
      if (item.brushStyle === 'marker') brushName = 'Маркер';
      if (item.brushStyle === 'oil') brushName = 'Пензель';
      if (item.brushStyle === 'spray') brushName = 'Спрей';
      return `Малюнок (${brushName})`;
    default: return 'Об\'єкт';
  }
};

const LayersPanel = () => {
  const dispatch = useDispatch();
  const { layerOrder, objects, paths, selectedObjectId } = useSelector(state => state.tacticsBoard);
  
  const [editingId, setEditingId] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  
  const panelRef = useRef(null);
  const selectedItemRef = useRef(null);

  const allItems = {};
  objects.forEach(o => allItems[o.id] = o);
  paths.forEach(p => allItems[p.id] = p);
  const validLayers = layerOrder.filter(id => allItems[id]);

  useEffect(() => {
    if (selectedObjectId && selectedItemRef.current && panelRef.current) {
      const container = panelRef.current;
      const item = selectedItemRef.current;
      const itemTop = item.offsetTop;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      
      if (itemTop < containerScrollTop || itemTop > containerScrollTop + containerHeight - item.clientHeight) {
        container.scrollTo({
          top: itemTop - (containerHeight / 2) + (item.clientHeight / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [selectedObjectId]);

  // --- ДЕСКТОП: Drag and Drop Handlers ---
  const handleDragStart = (e, index) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('layerIndex', index);
    setTimeout(() => setDraggedIndex(index), 0);
  };

  const handleDragEnter = (e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = Number(e.dataTransfer.getData('layerIndex'));
    if (dragIndex !== dropIndex && !isNaN(dragIndex)) {
      dispatch(reorderLayers({ sourceIndex: dragIndex, destinationIndex: dropIndex }));
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  // --- МОБІЛЬНІ: Touch Handlers ---
  const handleTouchStart = (e, index) => {
    setDraggedIndex(index);
    // Легка вібрація на Android для відчуття захоплення
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
  };

  const handleTouchMove = (e) => {
    if (draggedIndex === null) return;
    
    // Отримуємо координати пальця
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    
    // Шукаємо найближчий елемент шару під пальцем
    const layerItem = target?.closest('[data-index]');
    if (layerItem) {
      const overIndex = Number(layerItem.getAttribute('data-index'));
      if (!isNaN(overIndex) && overIndex !== dragOverIndex) {
        setDragOverIndex(overIndex);
      }
    }
  };

  const handleTouchEnd = () => {
    if (draggedIndex !== null && dragOverIndex !== null && draggedIndex !== dragOverIndex) {
      dispatch(reorderLayers({ sourceIndex: draggedIndex, destinationIndex: dragOverIndex }));
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  // --- Click Handlers ---
  const handleMoveUp = (e, index) => {
    e.stopPropagation();
    if (index > 0) dispatch(reorderLayers({ sourceIndex: index, destinationIndex: index - 1 }));
  };

  const handleMoveDown = (e, index) => {
    e.stopPropagation();
    if (index < validLayers.length - 1) dispatch(reorderLayers({ sourceIndex: index, destinationIndex: index + 1 }));
  };

  const handleRename = (id, newName) => dispatch(renameLayer({ id, name: newName }));

  return (
    <PanelContainer ref={panelRef}>
      {validLayers.length === 0 && (
        <div style={{ padding: '20px', textAlign: 'center', color: '#888', fontSize: '14px' }}>
          Дошка порожня. Додайте елементи!
        </div>
      )}

      {validLayers.map((id, index) => {
        const item = allItems[id];
        const isSelected = selectedObjectId === id;
        const isLocked = item.isLocked;
        const displayName = getDisplayName(item);
        
        const direction = draggedIndex !== null ? (draggedIndex > index ? 'up' : 'down') : null;

        return (
          <LayerItem 
            key={id} 
            data-index={index} // <--- ВАЖЛИВО ДЛЯ МОБІЛОК: Додає індекс у HTML
            ref={isSelected ? selectedItemRef : null} 
            $selected={isSelected} 
            $locked={isLocked}
            $isDragging={draggedIndex === index}
            $dragOver={dragOverIndex === index}
            $direction={direction}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={handleDragEnd}
            onClick={() => {
              if (!isLocked) {
                dispatch(selectObject(id));
                dispatch(setActiveTool('cursor'));
              }
            }}
            onDoubleClick={() => setEditingId(id)}
            title="Двічі клікніть, щоб перейменувати"
          >
            <ArrowsContainer 
              title="Потягніть для переміщення або натисніть стрілки"
              onTouchStart={(e) => handleTouchStart(e, index)}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <ArrowButton onClick={(e) => handleMoveUp(e, index)} disabled={index === 0}>
                <ArrowUpIcon />
              </ArrowButton>
              <ArrowButton onClick={(e) => handleMoveDown(e, index)} disabled={index === validLayers.length - 1}>
                <ArrowDownIcon />
              </ArrowButton>
            </ArrowsContainer>
            
            <LayerNameInput 
              $isEditing={editingId === id}
              value={editingId === id ? (item.layerName || displayName) : displayName}
              onChange={(e) => handleRename(id, e.target.value)}
              onBlur={() => setEditingId(null)}
              onKeyDown={(e) => e.key === 'Enter' && setEditingId(null)}
              readOnly={editingId !== id}
            />

            <IconButton 
              onClick={(e) => {
                e.stopPropagation();
                dispatch(toggleLock(id));
              }}
              title={isLocked ? "Розблокувати шар" : "Заблокувати шар"}
            >
              {isLocked ? <StyledUnlockIcon /> : <StyledLockIcon />}
            </IconButton>
          </LayerItem>
        );
      })}
    </PanelContainer>
  );
};

export default LayersPanel;