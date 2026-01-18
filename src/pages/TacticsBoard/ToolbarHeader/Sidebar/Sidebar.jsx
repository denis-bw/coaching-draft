import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { deselectObject, deleteObject, deletePath } from '../../../../redux/TacticsBoard/TacticsBoardSlice';
import { ReactComponent as DoubleArrowRightBase } from '../../../../assets/doubleArrowRight.svg';

import DrawingToolsPanel from './DrawingToolsPanel';
import TextPropertiesPanel from './TextPropertiesPanel';
import TextToolsPanel from './TextToolsPanel';
import ShapePropertiesPanel from './ShapePropertiesPanel';
import ShapeToolsPanel from './ShapeToolsPanel';
import PlayerPropertiesPanel from './PlayerPropertiesPanel';

const DoubleArrowRight = styled(DoubleArrowRightBase)`
  width: 100%;
  height: 100%;
  fill: ${({ theme }) => theme.black};
`;

const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  right: ${props => props.$isOpen ? '0' : '-320px'};
  width: 320px;
  height: 100%;
  background: ${({ theme }) => theme.ContainerBGColor || '#fff'};
  border-left: 1px solid ${({ theme }) => theme.lightGreen || '#ccc'};
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 99;
  overflow-y: auto;
  
  /* Стилізація скролбару */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGreen || '#E0E0E0'};
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
  padding: 20px;
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
  const dispatch = useDispatch();
  const { activeTool, selectedObjectId, objects, paths } = useSelector((state) => state.tacticsBoard);

  const selectedObject = selectedObjectId ? (
    selectedObjectId.startsWith('path_') 
      ? { ...paths[parseInt(selectedObjectId.replace('path_', ''))], type: 'path', id: selectedObjectId }
      : objects.find(obj => obj.id === selectedObjectId)
  ) : null;

  const handleDelete = () => {
    if (selectedObjectId) {
      if (selectedObjectId.startsWith('path_')) {
        const index = parseInt(selectedObjectId.replace('path_', ''));
        dispatch(deletePath(index));
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
              <DeleteButton onClick={handleDelete}>
                Видалити текст
              </DeleteButton>
            </>
          );
        case 'player':
          return <PlayerPropertiesPanel selectedObject={selectedObject} />;
        case 'shape':
          return (
            <>
              <ShapePropertiesPanel selectedObject={selectedObject} />  
              <DeleteButton onClick={handleDelete}>
                Видалити фігуру
              </DeleteButton>
            </>
          );
   
        case 'path':
          return (
            <>
              {/* Відображаємо ту саму панель, що й при малюванні, але вона буде в режимі редагування */}
              <DrawingToolsPanel /> 
              <DeleteButton onClick={handleDelete}>
                Видалити лінію
              </DeleteButton>
            </>
          );
        default:
          return (
            <DeleteButton onClick={handleDelete}>
              Видалити об'єкт
            </DeleteButton>
          );
      }
    }

    switch (activeTool) {
      case 'text':
        return <TextToolsPanel />;
      case 'drawing':
        return <DrawingToolsPanel />;
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
        <Title>
          {selectedObject ? 'Властивості' : 'Інструменти'}
        </Title>
        <CloseButton title="Закрити панель інструментів" onClick={onClose}>
          <DoubleArrowRight />
        </CloseButton>
      </Header>
      <Content>
        {renderContent()}
      </Content>
    </SidebarContainer>
  );
};

export default Sidebar;