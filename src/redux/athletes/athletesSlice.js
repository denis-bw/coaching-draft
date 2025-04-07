import { createSlice } from '@reduxjs/toolkit';
import { createAthlete } from './athletesOperations'; 

const initialState = {
  entities: {},       // { [id]: { id, firstName, lastName, patronymic } }
  fullEntities: {},   // { [id]: fullAthleteData }
  loading: false,
  error: null,
};

const athletesSlice = createSlice({
  name: 'athletes',
  initialState,
  reducers: {},
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
      });
  },
});

export const athletesReducer = athletesSlice.reducer;
