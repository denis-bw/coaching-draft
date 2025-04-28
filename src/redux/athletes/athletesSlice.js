  import { createSlice} from '@reduxjs/toolkit';

  import { createAthlete, searchAthletes, fetchAthletes } from './athletesOperations';


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
          };
          state.fullEntities[newAthlete.id] = newAthlete;
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
          console.log(athletes)
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
        .addMatcher(
        action => action.type === 'app/resetAllData',
        (state) => {
          return initialState;
        }
      );
    },
  });

  export const { resetAthletes, setSearchQuery, setFilterType, filterLocalAthletes } = athletesSlice.actions;
  export const athletesReducer = athletesSlice.reducer;