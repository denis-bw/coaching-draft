import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { deselectObject, deleteObject, deletePath } from '../../../../redux/TacticsBoard/TacticsBoardSlice';
import { ReactComponent as DoubleArrowRightBase } from '../../../../assets/doubleArrowRight.svg';

import TextPropertiesPanel from './TextPropertiesPanel';
// import DrawingToolsPanel from '../DrawingToolsPanel';
import TextToolsPanel from './TextToolsPanel';
// import ShapeToolsPanel from './ShapeToolsPanel';

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
  padding-top: 48px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    margin-right: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.lightGreen};
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.ContainerBGColor};
  }
`;

const SidebarContent = styled.div`
  padding: 16px;
  height: calc(100% - 48px);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 280px;
  width: 28px;
  height: 28px;
  border: 2px solid ${({ theme }) => theme.greenMain || '#4CAF50'};
  background: ${({ theme }) => theme.lightGreen || '#E8F5E9'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;
  padding: 0;
  z-index: 100;
  
  &:hover {
    border-color: ${({ theme }) => theme.darkGreen || '#2E7D32'};
    background: ${({ theme }) => theme.darkGreen || '#2E7D32'};
    
    svg {
      color: ${({ theme }) => theme.white || '#fff'};
    }
  }
  
  svg {
    color: ${({ theme }) => theme.greenMain || '#4CAF50'};
    transition: color 0.2s;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: ${({ theme }) => theme.textGray || '#999'};
  font-size: 14px;
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


const Sidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { activeTool, selectedObjectId, objects, paths } = useSelector(state => state.tacticsBoard);

  const selectedObject = selectedObjectId 
    ? selectedObjectId.startsWith('path_')
      ? { ...paths[parseInt(selectedObjectId.replace('path_', ''))], type: 'path', id: selectedObjectId }
      : objects.find(obj => obj.id === selectedObjectId)
    : null;

  const handleDelete = () => {
    if (!selectedObjectId) return;
    
    if (selectedObjectId.startsWith('path_')) {
      const pathIndex = parseInt(selectedObjectId.replace('path_', ''));
      dispatch(deletePath(pathIndex));
    } else {
      dispatch(deleteObject(selectedObjectId));
    }
    
    dispatch(deselectObject());
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
          return (
            <>
              <PlayerPropertiesPanel selectedObject={selectedObject} />
              <DeleteButton onClick={handleDelete}>
                 Видалити гравця
              </DeleteButton>
            </>
          );
        case 'path':
          return (
            <DeleteButton onClick={handleDelete}>
              Видалити малюнок
            </DeleteButton>
          );
        case 'shape':
          return (
            <DeleteButton onClick={handleDelete}>
               Видалити фігуру
            </DeleteButton>
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
      case 'drawing':
        // return <DrawingToolsPanel />;
      case 'text':
        return <TextToolsPanel />;
      case 'shape_rectangle':
      case 'shape_circle':
      case 'shape_triangle':
      case 'shape_line':
      case 'shape_arrow':
        // return <ShapeToolsPanel />;
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
      <CloseButton title="Закрити панель інструментів" onClick={onClose}>
        <DoubleArrowRight/>
      </CloseButton>
      <SidebarContent>
        {renderContent()}
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;