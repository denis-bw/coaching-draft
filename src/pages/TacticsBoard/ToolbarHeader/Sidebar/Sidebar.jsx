import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { deselectObject, deleteObject, deletePath } from '../../../../redux/TacticsBoard/TacticsBoardSlice';
import { ReactComponent as DoubleArrowRightBase } from '../../../../assets/doubleArrowRight.svg';

import LayersPanel from './LayersPanel';
import DrawingToolsPanel from './DrawingToolsPanel';
import TextPropertiesPanel from './TextPropertiesPanel';
import TextToolsPanel from './TextToolsPanel';
import ShapePropertiesPanel from './ShapePropertiesPanel';
import ShapeToolsPanel from './ShapeToolsPanel';
import PlayerPropertiesPanel from './PlayerPropertiesPanel';
import EraserToolsPanel from './EraserToolsPanel';
import BallPropertiesPanel from './BallPropertiesPanel';
import FigurePropertiesPanel from './FigurePropertiesPanel';

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightGreen};
  flex-shrink: 0; 
`;

const Tab = styled.button`
  flex: 1;
  padding: 12px;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme, $active }) => $active ? theme.greenMain : 'transparent'};
  color: ${({ theme, $active }) => $active ? theme.greenMain : theme.textGray};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.greenMain};
  }
`;

const DoubleArrowRight = styled(DoubleArrowRightBase)`
  width: 100%;
  height: 100%;
  fill: ${({ theme }) => theme.iconColor};
  rotate: 180deg;
`;

const SidebarContainer = styled.div`
  position: absolute; 
  top: 0;
  right: ${props => props.$isOpen ? '0' : '-320px'};
  width: 320px;
  height: 100%;
  z-index: 1000; 

  background: ${({ theme }) => theme.ContainerBGColor || '#fff'};
  border-left: 1px solid ${({ theme }) => theme.lightGreen || '#ccc'};
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGreen || '#E0E0E0'};
  flex-shrink: 0; 
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.textBlack || '#333'};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`;

const Content = styled.div`
  /* Зменшили відступ справа (8px замість 20px), щоб контент був ближче до скролбару */
  padding: 20px 8px 20px 16px; 
  flex: 1; 
  display: flex;
  flex-direction: column;
  min-height: 0; 
  overflow-y: auto; 

  /* Налаштування сірого скролбару */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    margin: 4px 0; /* Щоб скрол не прилипав до самого верху і низу */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #b0b0b0; /* Приємний сірий колір */
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #888888; /* Трохи темніший при наведенні */
  }
`;

const DeleteButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 16px;
  background: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0; 

  &:hover {
    background: ${({ theme }) => theme.redDark};
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(251, 69, 102, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: ${({ theme }) => theme.disabledBG};
    color: ${({ theme }) => theme.textGray};
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #ccc;
  text-align: center;
`;

const Sidebar = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('properties');
  const dispatch = useDispatch();
  const { activeTool, selectedObjectId, objects, paths } = useSelector((state) => state.tacticsBoard);

  const selectedObject = selectedObjectId ? (
    selectedObjectId.startsWith('path_') 
      ? { ...paths.find(p => p.id === selectedObjectId), type: 'path', id: selectedObjectId }
      : objects.find(obj => obj.id === selectedObjectId)
  ) : null;

  const handleDelete = () => {
    if (selectedObjectId) {
      if (selectedObjectId.startsWith('path_')) {
        dispatch(deletePath(selectedObjectId)); 
      } else {
        dispatch(deleteObject(selectedObjectId));
      }
      dispatch(deselectObject());
    }
  };

  const renderContent = () => {
    if (selectedObject) {
      switch (selectedObject.type) {
        case 'text':
          return (
            <>
              <TextPropertiesPanel selectedObject={selectedObject} />
              <DeleteButton onClick={handleDelete}>Видалити текст</DeleteButton>
            </>
          );
        case 'figure':
          return (
            <>
              <FigurePropertiesPanel selectedObject={selectedObject} />
              <DeleteButton onClick={handleDelete}>Видалити фігуру</DeleteButton>
            </>
          );
        case 'player':
          return (
            <>
              <PlayerPropertiesPanel selectedObject={selectedObject} />
              <DeleteButton onClick={handleDelete}>Видалити гравця</DeleteButton>
            </>
          );
        case 'shape':
          return (
            <>
              <ShapePropertiesPanel selectedObject={selectedObject} />  
              <DeleteButton onClick={handleDelete}>Видалити фігуру</DeleteButton>
            </>
          );
        case 'ball':
          return (
            <>
              <BallPropertiesPanel selectedObject={selectedObject} />
              <DeleteButton onClick={handleDelete}>Видалити м'яч</DeleteButton>
            </>
          );
        case 'path':
          return (
            <>
              <DrawingToolsPanel /> 
              <DeleteButton onClick={handleDelete}>Видалити лінію</DeleteButton>
            </>
          );
        default:
          return (
            <DeleteButton onClick={handleDelete}>Видалити об'єкт</DeleteButton>
          );
      }
    }

    switch (activeTool) {
      case 'text': return <TextToolsPanel />;
      case 'drawing': return <DrawingToolsPanel />;
      case 'eraser': return <EraserToolsPanel />;
      case 'shape_rectangle':
      case 'shape_circle':
      case 'shape_triangle':
      case 'shape_line':
      case 'shape_arrow':
        return <ShapeToolsPanel />;
      default:
        return (
          <EmptyState>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎯</div>
            <p>Виберіть інструмент або об'єкт</p>
            <p style={{ fontSize: '12px', color: '#999', marginTop: '8px', fontStyle: 'italic' }}>
              Налаштування з'являться тут
            </p>
          </EmptyState>
        );
    }
  };

  return (
    <SidebarContainer $isOpen={isOpen}>
      <Header>
        <Title>{selectedObject ? 'Властивості' : 'Інструменти'}</Title>
        <CloseButton onClick={onClose}>
          <DoubleArrowRight />
        </CloseButton>
      </Header>
      
      <TabsContainer>
        <Tab 
          $active={activeTab === 'properties'} 
          onClick={() => setActiveTab('properties')}
        >
          Властивості
        </Tab>
        <Tab 
          $active={activeTab === 'layers'} 
          onClick={() => setActiveTab('layers')}
        >
          Шари
        </Tab>
      </TabsContainer>

      <Content>
        {activeTab === 'layers' ? <LayersPanel /> : renderContent()}
      </Content>
    </SidebarContainer>
  );
};

export default Sidebar;