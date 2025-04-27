import {  createAsyncThunk } from '@reduxjs/toolkit';
import { axios } from '../../utils/api';
import { requestWrapper } from '../../utils/requestWrapper'

export const fetchTeams = createAsyncThunk(
  'teams/fetchTeams',
  async (page, thunkApi) => {
    try {
      const response = await requestWrapper(
        () => axios.get(`teams/all?page=${page}`),
        thunkApi.dispatch
      );
      return { ...response.data, page };
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return { teams: [], noMorePages: true };
      }
      if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
      }
      return thunkApi.rejectWithValue(err.response.data.message || 'Помилка при завантаженні команд');
    }
  }
);

export const searchTeams = createAsyncThunk(
  'teams/searchTeams',
  async ({ name, page = 1 }, thunkApi) => {
    try {
      const response = await requestWrapper(
        () => axios.get(`teams/all?page=${page}&name=${encodeURIComponent(name)}`),
        thunkApi.dispatch
      );
      return { ...response.data, page, query: name };
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return { teams: [], noMorePages: true, page, query: name };
      }
      if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
      }
      return thunkApi.rejectWithValue(err.response.data.message || 'Помилка при пошуку команд');
    }
  }
);