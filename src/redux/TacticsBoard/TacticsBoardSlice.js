import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTool: 'cursor',
  drawColor: '#000000',
  brushSize: 3,
  paths: [],
  objects: [],
  selectedObjectId: null,
  team1: {
    count: 11,
    color: '#ff0000',
    players: []
  },
  team2: {
    count: 11,
    color: '#0000ff',
    players: []
  },
  history: [],
  historyIndex: -1,
  maxHistory: 50
};

const TacticsBoardSlice = createSlice({
  name: 'tacticsBoard',
  initialState,
  reducers: {
    setActiveTool: (state, action) => {
      state.activeTool = action.payload;
    },
    setDrawColor: (state, action) => {
      state.drawColor = action.payload;
    },
    setBrushSize: (state, action) => {
      state.brushSize = action.payload;
    },
    addPath: (state, action) => {
      state.paths.push(action.payload);
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    },
    updatePath: (state, action) => {
      const { index, updates } = action.payload;
      if (state.paths[index]) {
        state.paths[index] = { ...state.paths[index], ...updates };
        TacticsBoardSlice.caseReducers.saveToHistory(state);
      }
    },
    deletePath: (state, action) => {
      const index = action.payload;
      state.paths = state.paths.filter((_, i) => i !== index);
      if (state.selectedObjectId === `path_${index}`) {
        state.selectedObjectId = null;
      }
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    },
    addObject: (state, action) => {
      const newObject = {
        id: `obj_${Date.now()}_${Math.random()}`,
        ...action.payload
      };
      state.objects.push(newObject);
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    },
    updateObject: (state, action) => {
      const { id, updates } = action.payload;
      const object = state.objects.find(obj => obj.id === id);
      if (object) {
        Object.assign(object, updates);
        TacticsBoardSlice.caseReducers.saveToHistory(state);
      }
    },
    deleteObject: (state, action) => {
      state.objects = state.objects.filter(obj => obj.id !== action.payload);
      if (state.selectedObjectId === action.payload) {
        state.selectedObjectId = null;
      }
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    },
    selectObject: (state, action) => {
      state.selectedObjectId = action.payload;
    },
    deselectObject: (state) => {
      state.selectedObjectId = null;
    },
    moveObject: (state, action) => {
      const { id, x, y } = action.payload;
      const object = state.objects.find(obj => obj.id === id);
      if (object) {
        object.x = x;
        object.y = y;
      }
    },
    resizeObject: (state, action) => {
      const { id, ...updates } = action.payload;
      const object = state.objects.find(obj => obj.id === id);
      if (object) {
        Object.assign(object, updates);
      }
    },
    setTeam1Count: (state, action) => {
      state.team1.count = action.payload;
      state.objects = state.objects.filter(obj => !(obj.type === 'player' && obj.team === 1));
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    },
    setTeam1Color: (state, action) => {
      state.team1.color = action.payload;
      state.objects.forEach(obj => {
        if (obj.type === 'player' && obj.team === 1) {
          obj.color = action.payload;
        }
      });
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    },
    setTeam2Count: (state, action) => {
      state.team2.count = action.payload;
      state.objects = state.objects.filter(obj => !(obj.type === 'player' && obj.team === 2));
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    },
    setTeam2Color: (state, action) => {
      state.team2.color = action.payload;
      state.objects.forEach(obj => {
        if (obj.type === 'player' && obj.team === 2) {
          obj.color = action.payload;
        }
      });
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    },
    initializePlayers: (state, action) => {
      const { canvasWidth, canvasHeight } = action.payload;
      const existingPlayers = state.objects.filter(obj => obj.type === 'player');
      if (existingPlayers.length === 0) {
        const margin = 50;
        const verticalSpacing = canvasHeight / (Math.max(state.team1.count, state.team2.count) + 1);
        for (let i = 0; i < state.team1.count; i++) {
          state.objects.push({
            id: `player_team1_${i}`,
            type: 'player',
            team: 1,
            number: i + 1,
            x: margin,
            y: verticalSpacing * (i + 1),
            color: state.team1.color,
            radius: 20
          });
        }
        for (let i = 0; i < state.team2.count; i++) {
          state.objects.push({
            id: `player_team2_${i}`,
            type: 'player',
            team: 2,
            number: i + 1,
            x: canvasWidth - margin,
            y: verticalSpacing * (i + 1),
            color: state.team2.color,
            radius: 20
          });
        }
        TacticsBoardSlice.caseReducers.saveToHistory(state);
      }
    },
    updatePlayersPosition: (state, action) => {
      const { canvasWidth, canvasHeight } = action.payload;
      state.objects = state.objects.filter(obj => obj.type !== 'player');
      const margin = 50;
      const verticalSpacing = canvasHeight / (Math.max(state.team1.count, state.team2.count) + 1);
      for (let i = 0; i < state.team1.count; i++) {
        state.objects.push({
          id: `player_team1_${i}`,
          type: 'player',
          team: 1,
          number: i + 1,
          x: margin,
          y: verticalSpacing * (i + 1),
          color: state.team1.color,
          radius: 20
        });
      }
      for (let i = 0; i < state.team2.count; i++) {
        state.objects.push({
          id: `player_team2_${i}`,
          type: 'player',
          team: 2,
          number: i + 1,
          x: canvasWidth - margin,
          y: verticalSpacing * (i + 1),
          color: state.team2.color,
          radius: 20
        });
      }
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    },
    addText: (state, action) => {
      const { id, x, y, text, fontSize, color } = action.payload;
      const newText = {
        id: id || `text_${Date.now()}_${Math.random()}`,
        type: 'text',
        x,
        y,
        text: text || '',
        fontSize: fontSize || 16,
        color: color || state.drawColor
      };
      state.objects.push(newText);
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    },
    saveToHistory: (state) => {
      const snapshot = {
        paths: JSON.parse(JSON.stringify(state.paths)),
        objects: JSON.parse(JSON.stringify(state.objects)),
        team1: JSON.parse(JSON.stringify(state.team1)),
        team2: JSON.parse(JSON.stringify(state.team2)),
        activeTool: state.activeTool
      };
      state.history = state.history.slice(0, state.historyIndex + 1);
      state.history.push(snapshot);
      if (state.history.length > state.maxHistory) {
        state.history.shift();
      } else {
        state.historyIndex++;
      }
    },
    undo: (state) => {
      if (state.historyIndex > 0) {
        state.historyIndex--;
        const snapshot = state.history[state.historyIndex];
        state.paths = JSON.parse(JSON.stringify(snapshot.paths));
        state.objects = JSON.parse(JSON.stringify(snapshot.objects));
        state.team1 = JSON.parse(JSON.stringify(snapshot.team1));
        state.team2 = JSON.parse(JSON.stringify(snapshot.team2));
        state.activeTool = snapshot.activeTool || 'cursor';
        state.selectedObjectId = null;
      }
    },
    redo: (state) => {
      if (state.historyIndex < state.history.length - 1) {
        state.historyIndex++;
        const snapshot = state.history[state.historyIndex];
        state.paths = JSON.parse(JSON.stringify(snapshot.paths));
        state.objects = JSON.parse(JSON.stringify(snapshot.objects));
        state.team1 = JSON.parse(JSON.stringify(snapshot.team1));
        state.team2 = JSON.parse(JSON.stringify(snapshot.team2));
        state.activeTool = snapshot.activeTool || 'cursor';
        state.selectedObjectId = null;
      }
    },
    clearAll: (state) => {
      const players = state.objects.filter(obj => obj.type === 'player');
      state.paths = [];
      state.objects = players;
      state.selectedObjectId = null;
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    },
    resetBoard: (state) => {
      return {
        ...initialState,
        team1: state.team1,
        team2: state.team2
      };
    },
    importState: (state, action) => {
      const importedState = action.payload;
      return {
        ...state,
        ...importedState,
        history: [],
        historyIndex: -1
      };
    },
    exportState: (state) => {
      return {
        paths: state.paths,
        objects: state.objects,
        team1: state.team1,
        team2: state.team2,
        drawColor: state.drawColor,
        brushSize: state.brushSize
      };
    },
    setFormation: (state, action) => {
      const { canvasWidth, canvasHeight, formation } = action.payload;
      state.objects = state.objects.filter(obj => obj.type !== 'player');
      const margin = 100;
      const fieldWidth = canvasWidth - margin * 2;
      const fieldHeight = canvasHeight - margin * 2;
      if (formation.team1) {
        formation.team1.forEach((playerPos, index) => {
          if (index < state.team1.count) {
            state.objects.push({
              id: `player_team1_${index}`,
              type: 'player',
              team: 1,
              number: index + 1,
              x: margin + (playerPos.x * fieldWidth),
              y: margin + (playerPos.y * fieldHeight),
              color: state.team1.color,
              radius: 20
            });
          }
        });
      }
      if (formation.team2) {
        formation.team2.forEach((playerPos, index) => {
          if (index < state.team2.count) {
            state.objects.push({
              id: `player_team2_${index}`,
              type: 'player',
              team: 2,
              number: index + 1,
              x: margin + (playerPos.x * fieldWidth),
              y: margin + (playerPos.y * fieldHeight),
              color: state.team2.color,
              radius: 20
            });
          }
        });
      }
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    }
  }
});

export const {
  setActiveTool,
  setDrawColor,
  setBrushSize,
  addPath,
  addObject,
  updateObject,
  deleteObject,
  selectObject,
  deselectObject,
  moveObject,
  resizeObject,
  setTeam1Count,
  setTeam1Color,
  setTeam2Count,
  setTeam2Color,
  initializePlayers,
  updatePlayersPosition,
  addText,
  saveToHistory,
  undo,
  redo,
  clearAll,
  updatePath,
  deletePath,
  resetBoard,
  importState,
  exportState,
  setFormation
} = TacticsBoardSlice.actions;

export default TacticsBoardSlice.reducer;
