import { createSlice } from '@reduxjs/toolkit';
import { fetchTeams, searchTeams } from './teamsOperations';

const initialState = {
  teams: [],
  allTeams: {}, 
  pagesFetched: [], 
  currentPage: 1,
  isLoading: false,
  hasMore: true,
  error: null,
  searchQuery: '',
  isSearchMode: false,
  searchPage: 1,
  isAllDataLoaded: false 
};

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    resetTeams: (state) => {
      state.teams = [];
      state.currentPage = 1;
      state.hasMore = true;
      state.error = null;
      state.searchQuery = '';
      state.isSearchMode = false;
      state.searchPage = 1;
    },
    setSearchQuery: (state, action) => {
      const query = action.payload;
      

      if (state.searchQuery !== query) {
        state.searchQuery = query;
        state.searchPage = 1;
        state.teams = [];
     
        state.isSearchMode = query !== '';
        
  
        if (query === '') {
     
          const allTeamsArray = Object.values(state.allTeams);
          state.teams = allTeamsArray.slice(0, state.currentPage * 5);
          state.hasMore = !state.isAllDataLoaded;
        } 
     
        else {
          state.hasMore = true;
        }
      }
    },

    filterLocalTeams: (state, action) => {
      const query = action.payload.toLowerCase();
      
     
      if (state.isAllDataLoaded) {
        const allTeamsArray = Object.values(state.allTeams);
        const filteredTeams = allTeamsArray.filter(team => 
          team.name.toLowerCase().includes(query)
        );
        
        state.teams = filteredTeams;
        state.isSearchMode = true;
        state.searchQuery = query;
        state.hasMore = false;
      }
    }
  },
  extraReducers: (builder) => {
    builder
    
      .addCase(fetchTeams.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.isLoading = false;
        
        if (action.payload.noMorePages) {
          state.hasMore = false;
          state.isAllDataLoaded = true;
          return;
        }
        
        const { teams, page } = action.payload;
        

        teams.forEach(team => {
          if (!state.allTeams[team.id]) {
            state.allTeams[team.id] = team;
          }
        });
        
     
        if (!state.pagesFetched.includes(page)) {
          state.pagesFetched.push(page);
        }
        

        const newTeams = teams.filter(team => 
          !state.teams.some(existingTeam => existingTeam.id === team.id)
        );
        
        state.teams = [...state.teams, ...newTeams];
        state.currentPage = page + 1;
        

        if (!teams || teams.length < 5) {  
          state.hasMore = false;
          state.isAllDataLoaded = true;
        }
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Помилка при завантаженні команд';
      })
      
      .addCase(searchTeams.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchTeams.fulfilled, (state, action) => {
        state.isLoading = false;
        
        const { teams, page } = action.payload;
        
        if (action.payload.noMorePages) {
          state.hasMore = false;
          return;
        }
        
 
        teams.forEach(team => {
          if (!state.allTeams[team.id]) {
            state.allTeams[team.id] = team;
          }
        });
        
     
        const newTeams = teams.filter(team => 
          !state.teams.some(existingTeam => existingTeam.id === team.id)
        );
        
        state.teams = [...state.teams, ...newTeams];
        state.searchPage = page + 1;
        

        if (!teams || teams.length < 5) {  
          state.hasMore = false;
        }
      })
      .addCase(searchTeams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Помилка при пошуку команд';
      });
  },
});

export const { resetTeams, setSearchQuery, filterLocalTeams } = teamsSlice.actions;
export default teamsSlice.reducer;