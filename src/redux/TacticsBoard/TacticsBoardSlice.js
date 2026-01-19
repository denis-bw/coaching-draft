import { createSlice } from '@reduxjs/toolkit';

const REF_WIDTH = 800;
const REF_HEIGHT = 500;
const GRID_ROWS = 8;
const ITEM_SIZE = 40;
const GAP = 15;
const STEP = ITEM_SIZE + GAP;
const TOTAL_GRID_HEIGHT = (GRID_ROWS * STEP) - GAP;
const START_Y_OFFSET = (REF_HEIGHT - TOTAL_GRID_HEIGHT) / 2;
const REF_MARGIN_X = 60;

const getTemplatePlayer = (objects, teamId, defaultColor) => {
  const existingPlayer = [...objects].reverse().find(o => o.type === 'player' && o.team === teamId);
  if (existingPlayer) {
    const { id, x, y, number, ...styles } = existingPlayer;
    return styles;
  }
  return {
    color: defaultColor,
    radius: 20,
    rotation: 0,
    topText: '',
    textSize: 10,
    numberColor: '#ffffff',
    numberOpacity: 100,
    textColor: '#000000',
    textOpacity: 100,
    colorOpacity: 100,
    borderColor: '#000000',
    borderOpacity: 100,
    borderWidth: 2,
    borderStyle: 'solid',
    cards: []
  };
};

const calculateGridPosition = (index, teamId, currentCanvasWidth, currentCanvasHeight) => {
  const col = Math.floor(index / GRID_ROWS);
  const row = index % GRID_ROWS;
  let baseX;
  if (teamId === 1) baseX = REF_MARGIN_X + (col * STEP);
  else baseX = REF_WIDTH - REF_MARGIN_X - (col * STEP);
  const baseY = START_Y_OFFSET + (row * STEP) + (ITEM_SIZE / 2);
  const scaleX = currentCanvasWidth / REF_WIDTH;
  const scaleY = currentCanvasHeight / REF_HEIGHT;
  return { x: baseX * scaleX, y: baseY * scaleY };
};

const defaultShapeConfig = {
    borderColor: '#000000',
    borderOpacity: 100,
    borderWidth: 2,
    borderStyle: 'solid',
    fillColor: '#ffffff',
    fillOpacity: 0,
    lineCapStart: 'butt',
    lineCapEnd: 'butt'
};

const initialState = {
  activeTool: 'cursor',
  drawColor: '#000000',
  brushSize: 4,
  eraserSize: 30, 
  brushOpacity: 100,
  brushStyle: 'hard',
  lineType: 'solid',
  brushSettings: {
    hard: { size: 4, opacity: 100 },
    pencil: { size: 9, opacity: 100 }, 
    calligraphy: { size: 10, opacity: 100 },
    oil: { size: 20, opacity: 80 },
    watercolor: { size: 12, opacity: 60 },
    splatter: { size: 6, opacity: 100 }
  },
  
  textFontSize: 16,
  textColor: '#000000',
  textOpacity: 100,
  textFontFamily: 'Arial',
  textFontWeight: 'normal',
  textFontStyle: 'normal',
  textDecoration: 'none',
  textLineHeight: 1.1,
  textLetterSpacing: 0,

  shapeBorderWidth: 2,
  shapeColor: '#000000', 
  shapeBorderColor: '#000000',
  shapeBorderOpacity: 100,
  shapeFillColor: '#ffffff',
  shapeFillOpacity: 0, 
  shapeBorderStyle: 'solid',
  shapeLineCapStart: 'butt',
  shapeLineCapEnd: 'butt',

  toolSettings: {
      shape_rectangle: { ...defaultShapeConfig, fillOpacity: 50 },
      shape_circle: { ...defaultShapeConfig, fillOpacity: 50 },
      shape_triangle: { ...defaultShapeConfig, fillOpacity: 50 },
      shape_line: { ...defaultShapeConfig },
      shape_arrow: { ...defaultShapeConfig, lineCapEnd: 'arrow' }
  },

  paths: [],
  objects: [],
  selectedObjectId: null,
  boardDimensions: { width: 800, height: 500 }, 
  team1: { count: 11, color: '#ff0000' },
  team2: { count: 11, color: '#0000ff' },
  history: [],
  historyIndex: -1,
  maxHistory: 50
};

const TacticsBoardSlice = createSlice({
  name: 'tacticsBoard',
  initialState,
  reducers: {
    setActiveTool: (state, action) => { 
        const newTool = action.payload;
        const oldTool = state.activeTool;

        if (oldTool.startsWith('shape_') && state.toolSettings[oldTool]) {
            state.toolSettings[oldTool] = {
                borderColor: state.shapeBorderColor,
                borderOpacity: state.shapeBorderOpacity,
                borderWidth: state.shapeBorderWidth,
                borderStyle: state.shapeBorderStyle,
                fillColor: state.shapeFillColor,
                fillOpacity: state.shapeFillOpacity,
                lineCapStart: state.shapeLineCapStart,
                lineCapEnd: state.shapeLineCapEnd
            };
        }

        state.activeTool = newTool; 

        if (newTool.startsWith('shape_') && state.toolSettings[newTool]) {
            const settings = state.toolSettings[newTool];
            state.shapeBorderColor = settings.borderColor;
            state.shapeBorderOpacity = settings.borderOpacity;
            state.shapeBorderWidth = settings.borderWidth;
            state.shapeBorderStyle = settings.borderStyle;
            state.shapeFillColor = settings.fillColor;
            state.shapeFillOpacity = settings.fillOpacity;
            state.shapeLineCapStart = settings.lineCapStart;
            state.shapeLineCapEnd = settings.lineCapEnd;
        }
    },
    setDrawColor: (state, action) => { state.drawColor = action.payload; },
    
    setBrushStyle: (state, action) => { 
        const newStyle = action.payload;
        state.brushStyle = newStyle;
        if (state.brushSettings[newStyle]) {
            state.brushSize = state.brushSettings[newStyle].size;
            state.brushOpacity = state.brushSettings[newStyle].opacity;
        }
    },

    setBrushSize: (state, action) => { 
        const newSize = action.payload;
        state.brushSize = newSize;
        if (state.brushSettings[state.brushStyle]) {
            state.brushSettings[state.brushStyle].size = newSize;
        }
    },

    setEraserSize: (state, action) => {
        state.eraserSize = action.payload;
    },

    setBrushOpacity: (state, action) => { 
        const newOpacity = action.payload;
        state.brushOpacity = newOpacity;
        if (state.brushSettings[state.brushStyle]) {
            state.brushSettings[state.brushStyle].opacity = newOpacity;
        }
    },

    setLineType: (state, action) => { state.lineType = action.payload; },

    setTextFontSize: (state, action) => { state.textFontSize = action.payload; },
    setTextColor: (state, action) => { state.textColor = action.payload; },
    setTextOpacity: (state, action) => { state.textOpacity = action.payload; },
    setTextFontFamily: (state, action) => { state.textFontFamily = action.payload; },
    setTextFontWeight: (state, action) => { state.textFontWeight = action.payload; },
    setTextFontStyle: (state, action) => { state.textFontStyle = action.payload; },
    setTextDecoration: (state, action) => { state.textDecoration = action.payload; },
    setTextLineHeight: (state, action) => { state.textLineHeight = action.payload; },
    setTextLetterSpacing: (state, action) => { state.textLetterSpacing = action.payload; },

    setShapeBorderWidth: (state, action) => { 
        state.shapeBorderWidth = action.payload; 
        if (state.activeTool.startsWith('shape_') && state.toolSettings[state.activeTool]) {
            state.toolSettings[state.activeTool].borderWidth = action.payload;
        }
    },
    setShapeColor: (state, action) => { state.shapeColor = action.payload; }, 
    
    setShapeBorderColor: (state, action) => { 
        state.shapeBorderColor = action.payload; 
        if (state.activeTool.startsWith('shape_') && state.toolSettings[state.activeTool]) {
            state.toolSettings[state.activeTool].borderColor = action.payload;
        }
    },
    setShapeBorderOpacity: (state, action) => { 
        state.shapeBorderOpacity = action.payload; 
        if (state.activeTool.startsWith('shape_') && state.toolSettings[state.activeTool]) {
            state.toolSettings[state.activeTool].borderOpacity = action.payload;
        }
    },
    setShapeFillColor: (state, action) => { 
        state.shapeFillColor = action.payload; 
        if (state.activeTool.startsWith('shape_') && state.toolSettings[state.activeTool]) {
            state.toolSettings[state.activeTool].fillColor = action.payload;
        }
    },
    setShapeFillOpacity: (state, action) => { 
        state.shapeFillOpacity = action.payload; 
        if (state.activeTool.startsWith('shape_') && state.toolSettings[state.activeTool]) {
            state.toolSettings[state.activeTool].fillOpacity = action.payload;
        }
    },
    setShapeBorderStyle: (state, action) => { 
        state.shapeBorderStyle = action.payload; 
        if (state.activeTool.startsWith('shape_') && state.toolSettings[state.activeTool]) {
            state.toolSettings[state.activeTool].borderStyle = action.payload;
        }
    },
    setShapeLineCapStart: (state, action) => { 
        state.shapeLineCapStart = action.payload; 
        if (state.activeTool.startsWith('shape_') && state.toolSettings[state.activeTool]) {
            state.toolSettings[state.activeTool].lineCapStart = action.payload;
        }
    },
    setShapeLineCapEnd: (state, action) => { 
        state.shapeLineCapEnd = action.payload; 
        if (state.activeTool.startsWith('shape_') && state.toolSettings[state.activeTool]) {
            state.toolSettings[state.activeTool].lineCapEnd = action.payload;
        }
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
        if (state.selectedObjectId === `path_${index}`) state.selectedObjectId = null;
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
      const idToDelete = action.payload;
      const objectToDelete = state.objects.find(obj => obj.id === idToDelete);
      
      if (objectToDelete && objectToDelete.type === 'player') {
          if (objectToDelete.team === 1) state.team1.count = Math.max(0, state.team1.count - 1);
          else if (objectToDelete.team === 2) state.team2.count = Math.max(0, state.team2.count - 1);
      }

      state.objects = state.objects.filter(obj => obj.id !== idToDelete);
      if (state.selectedObjectId === idToDelete) state.selectedObjectId = null;
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    },

    deleteObjects: (state, action) => {
        const idsToDelete = new Set(action.payload);
        
        if (idsToDelete.size === 0) return;

        const objectsToDelete = state.objects.filter(obj => idsToDelete.has(obj.id));
        objectsToDelete.forEach(obj => {
             if (obj.type === 'player') {
                if (obj.team === 1) state.team1.count = Math.max(0, state.team1.count - 1);
                else if (obj.team === 2) state.team2.count = Math.max(0, state.team2.count - 1);
             }
        });
        state.objects = state.objects.filter(obj => !idsToDelete.has(obj.id));

        const pathIndicesToDelete = new Set();
        idsToDelete.forEach(id => {
            if (id.startsWith('path_')) {
                pathIndicesToDelete.add(parseInt(id.replace('path_', '')));
            }
        });

        if (pathIndicesToDelete.size > 0) {
             state.paths = state.paths.filter((_, index) => !pathIndicesToDelete.has(index));
        }

        if (state.selectedObjectId && idsToDelete.has(state.selectedObjectId)) {
            state.selectedObjectId = null;
        }

        TacticsBoardSlice.caseReducers.saveToHistory(state);
    },

    selectObject: (state, action) => { state.selectedObjectId = action.payload; },
    deselectObject: (state) => { state.selectedObjectId = null; },
    moveObject: (state, action) => {
      const { id, x, y } = action.payload;
      const object = state.objects.find(obj => obj.id === id);
      if (object) { object.x = x; object.y = y; }
    },
    resizeObject: (state, action) => {
      const { id, ...updates } = action.payload;
      const object = state.objects.find(obj => obj.id === id);
      if (object) { Object.assign(object, updates); }
    },
    setTeam1Count: (state, action) => {
      const newCount = action.payload;
      const currentTeamObjects = state.objects.filter(obj => obj.type === 'player' && obj.team === 1);
      const currentCount = currentTeamObjects.length;
      state.team1.count = newCount;

      const w = state.boardDimensions.width || REF_WIDTH;
      const h = state.boardDimensions.height || REF_HEIGHT;

      if (newCount > currentCount) {
        const needed = newCount - currentCount;
        const existingNumbers = new Set(currentTeamObjects.map(o => o.number));
        const template = getTemplatePlayer(state.objects, 1, state.team1.color);

        let added = 0;
        let numToCheck = 1;
        
        while (added < needed) {
            if (!existingNumbers.has(numToCheck)) {
                const pos = calculateGridPosition(numToCheck - 1, 1, w, h);
                state.objects.push({
                    id: `player_team1_${Date.now()}_${added}`,
                    type: 'player',
                    team: 1,
                    number: numToCheck,
                    x: pos.x,
                    y: pos.y,
                    ...template
                });
                added++;
            }
            numToCheck++;
        }

      } else if (newCount < currentCount) {
        const toRemove = currentCount - newCount;
        const sortedTeamObjects = [...currentTeamObjects].sort((a, b) => b.number - a.number);
        const objectsToRemove = sortedTeamObjects.slice(0, toRemove);
        const idsToRemove = objectsToRemove.map(o => o.id);
        
        state.objects = state.objects.filter(obj => !idsToRemove.includes(obj.id));
      }
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    },
    setTeam1Color: (state, action) => {
      state.team1.color = action.payload;
      state.objects.forEach(obj => {
        if (obj.type === 'player' && obj.team === 1) obj.color = action.payload;
      });
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    },
    setTeam2Count: (state, action) => {
      const newCount = action.payload;
      const currentTeamObjects = state.objects.filter(obj => obj.type === 'player' && obj.team === 2);
      const currentCount = currentTeamObjects.length;
      state.team2.count = newCount;

      const w = state.boardDimensions.width || REF_WIDTH;
      const h = state.boardDimensions.height || REF_HEIGHT;

      if (newCount > currentCount) {
        const needed = newCount - currentCount;
        const existingNumbers = new Set(currentTeamObjects.map(o => o.number));
        const template = getTemplatePlayer(state.objects, 2, state.team2.color);

        let added = 0;
        let numToCheck = 1;

        while (added < needed) {
             if (!existingNumbers.has(numToCheck)) {
                const pos = calculateGridPosition(numToCheck - 1, 2, w, h);
                state.objects.push({
                    id: `player_team2_${Date.now()}_${added}`,
                    type: 'player',
                    team: 2,
                    number: numToCheck,
                    x: pos.x,
                    y: pos.y,
                    ...template
                });
                added++;
             }
             numToCheck++;
        }

      } else if (newCount < currentCount) {
        const toRemove = currentCount - newCount;
        const sortedTeamObjects = [...currentTeamObjects].sort((a, b) => b.number - a.number);
        const objectsToRemove = sortedTeamObjects.slice(0, toRemove);
        const idsToRemove = objectsToRemove.map(o => o.id);
        
        state.objects = state.objects.filter(obj => !idsToRemove.includes(obj.id));
      }
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    },
    setTeam2Color: (state, action) => {
      state.team2.color = action.payload;
      state.objects.forEach(obj => {
        if (obj.type === 'player' && obj.team === 2) obj.color = action.payload;
      });
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    },
    initializePlayers: (state, action) => {
      const { canvasWidth, canvasHeight } = action.payload;
      state.boardDimensions = { width: canvasWidth, height: canvasHeight };

      const existingPlayers = state.objects.filter(obj => obj.type === 'player');
      
      if (existingPlayers.length === 0) {
        for (let i = 0; i < state.team1.count; i++) {
          const pos = calculateGridPosition(i, 1, canvasWidth, canvasHeight);
          
          state.objects.push({
            id: `player_team1_${i}`, type: 'player', team: 1, number: i + 1,
            x: pos.x, y: pos.y, 
            color: state.team1.color, radius: 20, rotation: 0,
            topText: '', textSize: 10, numberColor: '#ffffff', numberOpacity: 100,
            textColor: '#000000', textOpacity: 100, colorOpacity: 100,
            borderColor: '#000000', borderOpacity: 100, borderWidth: 2, borderStyle: 'solid', cards: []
          });
        }

        for (let i = 0; i < state.team2.count; i++) {
          const pos = calculateGridPosition(i, 2, canvasWidth, canvasHeight);
          
          state.objects.push({
            id: `player_team2_${i}`, type: 'player', team: 2, number: i + 1,
            x: pos.x, y: pos.y, 
            color: state.team2.color, radius: 20, rotation: 0,
            topText: '', textSize: 10, numberColor: '#ffffff', numberOpacity: 100,
            textColor: '#000000', textOpacity: 100, colorOpacity: 100,
            borderColor: '#000000', borderOpacity: 100, borderWidth: 2, borderStyle: 'solid', cards: []
          });
        }
        TacticsBoardSlice.caseReducers.saveToHistory(state);
      }
    },
    updatePlayersPosition: (state, action) => {
      const { canvasWidth, canvasHeight } = action.payload;
      
      if (!state.boardDimensions || state.boardDimensions.width === 0 || 
         (state.boardDimensions.width === canvasWidth && state.boardDimensions.height === canvasHeight)) {
          state.boardDimensions = { width: canvasWidth, height: canvasHeight };
          return;
      }
      
      const oldW = state.boardDimensions.width;
      const oldH = state.boardDimensions.height;
      
      state.objects.forEach(obj => {
        const relX = obj.x / oldW;
        const relY = obj.y / oldH;
        
        obj.x = relX * canvasWidth;
        obj.y = relY * canvasHeight;

        if (obj.type === 'shape' && (obj.shape === 'line' || obj.shape === 'arrow')) {
            obj.startX = (obj.startX / oldW) * canvasWidth;
            obj.startY = (obj.startY / oldH) * canvasHeight;
            obj.endX = (obj.endX / oldW) * canvasWidth;
            obj.endY = (obj.endY / oldH) * canvasHeight;
        }
      });

      state.paths.forEach(path => {
         if (path.points) {
             path.points.forEach(p => {
                 p.x = (p.x / oldW) * canvasWidth;
                 p.y = (p.y / oldH) * canvasHeight;
             });
         }
      });

      state.boardDimensions = { width: canvasWidth, height: canvasHeight };
    },
    addText: (state, action) => {
      const { id, x, y, text, fontSize, color, opacity, fontFamily, fontWeight, fontStyle, textDecoration, lineHeight, letterSpacing, rotation } = action.payload;
      const newText = {
        id: id || `text_${Date.now()}_${Math.random()}`,
        type: 'text', 
        x, 
        y, 
        text: text || '',
        fontSize: fontSize || state.textFontSize, 
        color: color || state.textColor,
        opacity: opacity !== undefined ? opacity : state.textOpacity,
        fontFamily: fontFamily || state.textFontFamily, 
        fontWeight: fontWeight || state.textFontWeight,
        fontStyle: fontStyle || state.textFontStyle, 
        textDecoration: textDecoration || state.textDecoration,
        lineHeight: lineHeight || state.textLineHeight, 
        letterSpacing: letterSpacing || state.textLetterSpacing, 
        rotation: rotation || 0
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
        boardDimensions: state.boardDimensions,
        activeTool: state.activeTool,
        textColor: state.textColor,
        textOpacity: state.textOpacity,
        textFontSize: state.textFontSize,
        textFontFamily: state.textFontFamily,
        textFontWeight: state.textFontWeight,
        textFontStyle: state.textFontStyle,
        textDecoration: state.textDecoration,
        textLineHeight: state.textLineHeight,
        textLetterSpacing: state.textLetterSpacing,
        eraserSize: state.eraserSize
      };
      state.history = state.history.slice(0, state.historyIndex + 1);
      state.history.push(snapshot);
      if (state.history.length > state.maxHistory) state.history.shift();
      else state.historyIndex++;
    },
    undo: (state) => {
      if (state.historyIndex > 0) {
        state.historyIndex--;
        const snapshot = state.history[state.historyIndex];
        state.paths = JSON.parse(JSON.stringify(snapshot.paths));
        state.objects = JSON.parse(JSON.stringify(snapshot.objects));
        state.team1 = JSON.parse(JSON.stringify(snapshot.team1));
        state.team2 = JSON.parse(JSON.stringify(snapshot.team2));
        if (snapshot.boardDimensions) state.boardDimensions = snapshot.boardDimensions;
        state.activeTool = snapshot.activeTool || 'cursor';
        state.textColor = snapshot.textColor || '#000000';
        state.textOpacity = snapshot.textOpacity !== undefined ? snapshot.textOpacity : 100;
        state.textFontSize = snapshot.textFontSize || 16;
        state.textFontFamily = snapshot.textFontFamily || 'Arial';
        state.textFontWeight = snapshot.textFontWeight || 'normal';
        state.textFontStyle = snapshot.textFontStyle || 'normal';
        state.textDecoration = snapshot.textDecoration || 'none';
        state.textLineHeight = snapshot.textLineHeight || 1.1;
        state.textLetterSpacing = snapshot.textLetterSpacing || 0;
        state.eraserSize = snapshot.eraserSize || 30;
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
        if (snapshot.boardDimensions) state.boardDimensions = snapshot.boardDimensions;
        state.activeTool = snapshot.activeTool || 'cursor';
        state.textColor = snapshot.textColor || '#000000';
        state.textOpacity = snapshot.textOpacity !== undefined ? snapshot.textOpacity : 100;
        state.textFontSize = snapshot.textFontSize || 16;
        state.textFontFamily = snapshot.textFontFamily || 'Arial';
        state.textFontWeight = snapshot.textFontWeight || 'normal';
        state.textFontStyle = snapshot.textFontStyle || 'normal';
        state.textDecoration = snapshot.textDecoration || 'none';
        state.textLineHeight = snapshot.textLineHeight || 1.1;
        state.textLetterSpacing = snapshot.textLetterSpacing || 0;
        state.eraserSize = snapshot.eraserSize || 30;
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
    resetBoard: (state) => ({ ...initialState, team1: state.team1, team2: state.team2 }),
    importState: (state, action) => ({ ...state, ...action.payload, history: [], historyIndex: -1 }),
    exportState: (state) => ({
      paths: state.paths, objects: state.objects,
      team1: state.team1, team2: state.team2,
      drawColor: state.drawColor, brushSize: state.brushSize,
      textColor: state.textColor, 
      textOpacity: state.textOpacity, 
      textFontSize: state.textFontSize,
      textFontFamily: state.textFontFamily,
      boardDimensions: state.boardDimensions
    }),
    setFormation: (state, action) => {
      const { canvasWidth, canvasHeight, formation } = action.payload;
      state.objects = state.objects.filter(obj => obj.type !== 'player');
      const margin = 100;
      const fieldWidth = canvasWidth - margin * 2;
      const fieldHeight = canvasHeight - margin * 2;
      const template1 = getTemplatePlayer([], 1, state.team1.color);
      const template2 = getTemplatePlayer([], 2, state.team2.color);

      if (formation.team1) {
        formation.team1.forEach((playerPos, index) => {
          if (index < state.team1.count) {
            state.objects.push({
              id: `player_team1_${index}`, type: 'player', team: 1, number: index + 1,
              x: margin + (playerPos.x * fieldWidth), y: margin + (playerPos.y * fieldHeight),
              ...template1
            });
          }
        });
      }
      if (formation.team2) {
        formation.team2.forEach((playerPos, index) => {
          if (index < state.team2.count) {
            state.objects.push({
              id: `player_team2_${index}`, type: 'player', team: 2, number: index + 1,
              x: margin + (playerPos.x * fieldWidth), y: margin + (playerPos.y * fieldHeight),
              ...template2
            });
          }
        });
      }
      TacticsBoardSlice.caseReducers.saveToHistory(state);
    },
    updateTextProperties: (state, action) => {
      const { id, properties } = action.payload;
      const object = state.objects.find(obj => obj.id === id && obj.type === 'text');
      if (object) {
        Object.assign(object, properties);
        TacticsBoardSlice.caseReducers.saveToHistory(state);
      }
    },
    updateColorWithOpacity: (state, action) => {
      const { id, color, opacity } = action.payload;
      const object = state.objects.find(obj => obj.id === id);
      if (object) {
        if (color !== undefined) object.color = color;
        if (opacity !== undefined) object.opacity = opacity;
        TacticsBoardSlice.caseReducers.saveToHistory(state);
      }
    }
  }
});

export const {
  setActiveTool, setDrawColor, setBrushSize,
  setEraserSize, deleteObjects, setTextFontSize, setTextColor, setTextOpacity, 
  setTextFontFamily, setTextFontWeight, setTextFontStyle, 
  setTextDecoration, setTextLineHeight, setTextLetterSpacing,
  setShapeBorderWidth, setShapeColor, setShapeBorderColor, setShapeBorderOpacity,
  setShapeFillColor, setShapeFillOpacity, setShapeBorderStyle, setShapeLineCapStart, setShapeLineCapEnd,
  addPath, addObject, updateObject, deleteObject, selectObject, deselectObject, moveObject, resizeObject,
  setTeam1Count, setTeam1Color, setTeam2Count, setTeam2Color, initializePlayers, updatePlayersPosition,
  addText, saveToHistory, undo, redo, clearAll, updatePath, deletePath, resetBoard, importState, exportState,
  setFormation, updateTextProperties, updateColorWithOpacity,
  setBrushStyle, setLineType, setBrushOpacity
} = TacticsBoardSlice.actions;

export default TacticsBoardSlice.reducer;