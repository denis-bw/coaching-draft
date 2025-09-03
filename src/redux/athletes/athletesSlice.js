import { createSlice } from '@reduxjs/toolkit';
import { createAthlete, searchAthletes, fetchAthletes, searchTeamAthletes, updateTeamAthletes } from './athletesOperations';

const initialState = {
  entities: {},     
  fullEntities: {},  
  
  list: [],      
  currentPage: 1,
  searchPage: 1,
  hasMore: true,
  pagesFetched: [],
  isAllDataLoaded: false,
  searchQuery: '',
  isSearchMode: false,
  currentFilter: 'all', 
  
  teamAthletes: {
    entities: {},
    list: [],
    currentPage: 1,
    searchPage: 1,
    hasMore: true,
    isAllDataLoaded: false,
    searchQuery: '',
    isSearchMode: false,
    loading: false,
    error: null,
    teamId: null,
  },
  
  updateTeamAthletesStatus: 'idle',
  updateTeamAthletesError: null,
  
  loading: false,
  error: null,
};

const athletesSlice = createSlice({
  name: 'athletes',
  initialState,
  reducers: {
    resetAthletes: (state) => {
      state.list = [];
      state.currentPage = 1;
      state.hasMore = true;
      state.error = null;
      state.searchQuery = '';
      state.isSearchMode = false;
      state.searchPage = 1;
    },
    
    resetTeamAthletes: (state) => {
      state.teamAthletes = {
        entities: {},
        list: [],
        currentPage: 1,
        searchPage: 1,
        hasMore: true,
        isAllDataLoaded: false,
        searchQuery: '',
        isSearchMode: false,
        loading: false,
        error: null,
        teamId: null,
      };
    },
    
    resetUpdateTeamAthletesStatus: (state) => {
      state.updateTeamAthletesStatus = 'idle';
      state.updateTeamAthletesError = null;
    },
    
    setTeamAthletesSearchQuery: (state, action) => {
      const query = action.payload;
      
      if (state.teamAthletes.searchQuery !== query) {
        state.teamAthletes.searchQuery = query;
        state.teamAthletes.searchPage = 1;
        state.teamAthletes.list = [];
        state.teamAthletes.isSearchMode = query !== '';
        state.teamAthletes.hasMore = true;
      }
    },
    
    setSearchQuery: (state, action) => {
      const query = action.payload;
      
      if (state.searchQuery !== query) {
        state.searchQuery = query;
        state.searchPage = 1;
        state.list = [];
        
        state.isSearchMode = query !== '';
        
        if (query === '') {
          const athleteIds = Object.keys(state.entities);
          state.list = athleteIds.slice(0, state.currentPage * 5);
          state.hasMore = !state.isAllDataLoaded;
        } else {
          state.hasMore = true;
        }
      }
    },
    
    setFilterType: (state, action) => {
      const filter = action.payload;
      
      if (state.currentFilter !== filter) {
        state.currentFilter = filter;
        state.list = [];
        state.searchPage = 1;
        state.hasMore = true;
        
        if (state.searchQuery) {
          state.isSearchMode = true;
        } else {
          state.currentPage = 1;
        }
      }
    },
    
    filterLocalAthletes: (state, action) => {
      const query = action.payload.toLowerCase();
      const filter = state.currentFilter;
      
      if (state.isAllDataLoaded) {
        const athleteIds = Object.keys(state.entities);
        const filteredIds = athleteIds.filter(id => {
          const athlete = state.entities[id];
          const fullAthlete = state.fullEntities[id];
          
          const matchesFilter = 
            filter === 'all' ? true :
            filter === 'withTeam' ? fullAthlete.team && fullAthlete.team !== '-' :
            filter === 'withoutTeam' ? !fullAthlete.team || fullAthlete.team === '-' :
            true;
          
          const fullName = `${athlete.lastName} ${athlete.firstName} ${athlete.patronymic || ''}`.toLowerCase();
          const matchesSearch = !query || fullName.includes(query);
          
          return matchesFilter && matchesSearch;
        });
        
        state.list = filteredIds;
        state.isSearchMode = true;
        state.searchQuery = query;
        state.hasMore = false; 
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAthlete.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAthlete.fulfilled, (state, action) => {
        state.loading = false;
        const newAthlete = action.payload;
        
        state.entities[newAthlete.id] = {
          id: newAthlete.id,
          firstName: newAthlete.firstName,
          lastName: newAthlete.lastName,
          patronymic: newAthlete.patronymic,
          photo: newAthlete.photo,
          teamId: newAthlete.teamId,
          teamName: newAthlete.teamName || '-'
        };
        
        state.fullEntities[newAthlete.id] = newAthlete;
        
        if (!state.list.includes(newAthlete.id)) {
          state.list = [newAthlete.id, ...state.list];
        }
      })
      .addCase(createAthlete.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Помилка при створенні спортсмена';
      })
      
      .addCase(fetchAthletes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAthletes.fulfilled, (state, action) => {
        state.loading = false;
        
        if (action.payload.noMorePages) {
          state.hasMore = false;
          state.isAllDataLoaded = true;
          return;
        }
        
        const { athletes, page } = action.payload;
        
        athletes.forEach(athlete => {
          state.entities[athlete.id] = {
            id: athlete.id,
            firstName: athlete.firstName,
            lastName: athlete.lastName,
            patronymic: athlete.patronymic || athlete.middleName || '',
            photo: athlete.photo,
            teamId: athlete.teamId, 
            teamName: athlete.teamName 
          };
        });
        
        if (!state.pagesFetched.includes(page)) {
          state.pagesFetched.push(page);
        }
        
        const athleteIds = athletes.map(athlete => athlete.id);
        const newAthleteIds = athleteIds.filter(id => !state.list.includes(id));
        state.list = [...state.list, ...newAthleteIds];
        state.currentPage = page + 1;
        
        if (!athletes || athletes.length < 5) {  
          state.hasMore = false;
          state.isAllDataLoaded = true;
        }
      })
      .addCase(fetchAthletes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Помилка при завантаженні спортсменів';
      })
      
      .addCase(searchAthletes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchAthletes.fulfilled, (state, action) => {
        state.loading = false;
        
        const { athletes, page } = action.payload;
        
        if (action.payload.noMorePages) {
          state.hasMore = false;
          return;
        }
        
        athletes.forEach(athlete => {
          state.entities[athlete.id] = {
            id: athlete.id,
            firstName: athlete.firstName,
            lastName: athlete.lastName,
            patronymic: athlete.patronymic || athlete.middleName || '',
            photo: athlete.photo,
            teamId: athlete.teamId, 
            teamName: athlete.teamName 
          };
        });
        
        const athleteIds = athletes.map(athlete => athlete.id);
        const newAthleteIds = athleteIds.filter(id => !state.list.includes(id));
        state.list = [...state.list, ...newAthleteIds];
        state.searchPage = page + 1;
        
        if (!athletes || athletes.length < 5) {  
          state.hasMore = false;
        }
      })
      .addCase(searchAthletes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Помилка при пошуку спортсменів';
      })
      
      .addCase(searchTeamAthletes.pending, (state) => {
        state.teamAthletes.loading = true;
        state.teamAthletes.error = null;
      })
      .addCase(searchTeamAthletes.fulfilled, (state, action) => {
        state.teamAthletes.loading = false;
        
        const { athletes, page, teamId, query } = action.payload;
        
        if (action.payload.noMorePages) {
          state.teamAthletes.hasMore = false;
          return;
        }
        
        state.teamAthletes.teamId = teamId;
        
        athletes.forEach(athlete => {
          state.teamAthletes.entities[athlete.id] = {
            id: athlete.id,
            firstName: athlete.firstName,
            lastName: athlete.lastName,
            patronymic: athlete.patronymic || athlete.middleName || '',
            photo: athlete.photo,
            teamId: athlete.teamId,
            teamName: athlete.teamName
          };
        });
        
        const athleteIds = athletes.map(athlete => athlete.id);
        
        if (page === 1 || state.teamAthletes.searchQuery !== query) {
          state.teamAthletes.list = athleteIds;
          state.teamAthletes.currentPage = 2;
          state.teamAthletes.searchPage = 2;
        } else {
          const newAthleteIds = athleteIds.filter(id => !state.teamAthletes.list.includes(id));
          state.teamAthletes.list = [...state.teamAthletes.list, ...newAthleteIds];
          
          if (state.teamAthletes.isSearchMode) {
            state.teamAthletes.searchPage = page + 1;
          } else {
            state.teamAthletes.currentPage = page + 1;
          }
        }
        
        if (!athletes || athletes.length < 10) {  
          state.teamAthletes.hasMore = false;
          state.teamAthletes.isAllDataLoaded = true;
        }
      })
      .addCase(searchTeamAthletes.rejected, (state, action) => {
        state.teamAthletes.loading = false;
        state.teamAthletes.error = action.payload || 'Помилка при пошуку спортсменів команди';
      })
      
      .addCase(updateTeamAthletes.pending, (state) => {
        state.updateTeamAthletesStatus = 'loading';
        state.updateTeamAthletesError = null;
      })
      .addCase(updateTeamAthletes.fulfilled, (state, action) => {
        state.updateTeamAthletesStatus = 'succeeded';
        state.updateTeamAthletesError = null;
        
        const { operation, athleteIds, teamId } = action.payload;
        
        if (operation === 'remove') {
          athleteIds.forEach(athleteId => {
            state.teamAthletes.list = state.teamAthletes.list.filter(id => id !== athleteId);
            if (state.teamAthletes.entities[athleteId]) {
              delete state.teamAthletes.entities[athleteId];
            }
          });
        }
        
      })
      .addCase(updateTeamAthletes.rejected, (state, action) => {
        state.updateTeamAthletesStatus = 'failed';
        state.updateTeamAthletesError = action.payload || 'Помилка при оновленні спортсменів команди';
      })
      
      .addMatcher(
        action => action.type === 'app/resetAllData',
        (state) => {
          return initialState;
        }
      );
  },
});

export const { 
  resetAthletes, 
  setSearchQuery, 
  setFilterType, 
  filterLocalAthletes,
  resetTeamAthletes,
  setTeamAthletesSearchQuery,
  resetUpdateTeamAthletesStatus
} = athletesSlice.actions;

export const athletesReducer = athletesSlice.reducer;