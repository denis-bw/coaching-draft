import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestWrapper } from '../../utils/requestWrapper';
import { axios } from '../../utils/api';

export const createAthlete = createAsyncThunk(
  'athletes/createAthlete',
  async (athleteData, thunkApi) => {
    try {
      const response = await requestWrapper(
        () => axios.post('athletes/create', athleteData),
        thunkApi.dispatch
      );
      return response.data.athlete;
    } catch (err) {
      if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
      }
      return thunkApi.rejectWithValue(err.response.data.message || 'Помилка при створенні спортсмена');
    }
  }
);

export const fetchAthletes = createAsyncThunk(
  'athletes/fetchAthletes',
  async (params, thunkApi) => {
    const page = typeof params === 'object' ? params.page : params;
    const filter = typeof params === 'object' ? params.filter : thunkApi.getState().athletes.currentFilter;
    
    try {
      const response = await requestWrapper(
        () => axios.get(`athletes/search?page=${page}&filter=${filter}`),
        thunkApi.dispatch
      );
      return { ...response.data, page, filter };
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return { athletes: [], noMorePages: true };
      }
      if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
      }
      return thunkApi.rejectWithValue(err.response.data.message || 'Помилка при завантаженні спортсменів');
    }
  }
);

export const searchAthletes = createAsyncThunk(
  'athletes/searchAthletes',
  async ({ name = '', page = 1, filter = 'all' }, thunkApi) => {
    try {
      const response = await requestWrapper(
        () => axios.get(`athletes/search?page=${page}&query=${encodeURIComponent(name)}&filter=${filter}`),
        thunkApi.dispatch
      );
      
      return { 
        ...response.data,
        page,
        query: name,
        filter
      };
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return { athletes: [], noMorePages: true, page, query: name, filter };
      }
      if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
      }
      return thunkApi.rejectWithValue(err.response.data.message || 'Помилка при пошуку спортсменів');
    }
  }
);