// components/TacticsBoard/HistoryControls.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { undo, redo } from '../../redux/TacticsBoard/TacticsBoardSlice';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  justify-content: center;
`;

const HistoryButton = styled.button`
  padding: 8px 16px;
  border: 2px solid #007bff;
  background: ${props => props.disabled ? '#f8f9fa' : 'white'};
  color: ${props => props.disabled ? '#6c757d' : '#007bff'};
  border-color: ${props => props.disabled ? '#dee2e6' : '#007bff'};
  border-radius: 6px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 14px;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: #007bff;
    color: white;
  }
`;

const HistoryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #666;
`;

const HistoryControls = () => {
  const dispatch = useDispatch();
  const { history, future } = useSelector((state) => state.tacticsBoard);

  const canUndo = history.length > 0;
  const canRedo = future.length > 0;

  const handleUndo = () => {
    if (canUndo) {
      dispatch(undo());
    }
  };

  const handleRedo = () => {
    if (canRedo) {
      dispatch(redo());
    }
  };

  return (
    <ControlsContainer>
      <HistoryButton
        onClick={handleUndo}
        disabled={!canUndo}
      >
        ← Отменить
      </HistoryButton>
      
      <HistoryInfo>
        Действий: {history.length}
      </HistoryInfo>
      
      <HistoryButton
        onClick={handleRedo}
        disabled={!canRedo}
      >
        Вернуть →
      </HistoryButton>
    </ControlsContainer>
  );
};

export default HistoryControls;