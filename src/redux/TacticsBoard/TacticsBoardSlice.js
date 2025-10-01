// TacticsBoard/TacticsBoardSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tool: 'brush',
  color: '#000000',
  brushSize: 5,
  history: [],
  future: [],
  isDrawing: false,
};

const TacticsBoardSlice = createSlice({
  name: 'tacticsBoard',
  initialState,
  reducers: {
    setTool: (state, action) => {
      state.tool = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setBrushSize: (state, action) => {
      state.brushSize = action.payload;
    },
    startDrawing: (state) => {
      state.isDrawing = true;
    },
    stopDrawing: (state) => {
      state.isDrawing = false;
    },
    addToHistory: (state, action) => {
      // Обмежуємо розмір історії для продуктивності
      if (state.history.length > 50) {
        state.history.shift();
      }
      state.history.push(action.payload);
      state.future = []; 
    },
    undo: (state) => {
      if (state.history.length > 0) {
        const lastAction = state.history.pop();
        state.future.push(lastAction);
      }
    },
    redo: (state) => {
      if (state.future.length > 0) {
        const nextAction = state.future.pop();
        state.history.push(nextAction);
      }
    },
    clearCanvas: (state) => {
      state.history = [];
      state.future = [];
    },
  },
});

export const {
  setTool,
  setColor,
  setBrushSize,
  startDrawing,
  stopDrawing,
  addToHistory,
  undo,
  redo,
  clearCanvas,
} = TacticsBoardSlice.actions;

export default TacticsBoardSlice.reducer;