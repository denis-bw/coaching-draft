
import { createAsyncThunk } from '@reduxjs/toolkit';
import {requestWrapper} from '../../utils/requestWrapper'
import { axios, token } from '../../utils/api';

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
