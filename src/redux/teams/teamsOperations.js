import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { requestWrapper } from '../../utils/requestWrapper';

export const createTeam = createAsyncThunk(
  'teams/createTeam',
  async (teamData, thunkApi) => {
    try {
      const { name, ageCategory, photo, athleteIds } = teamData;
      
      const formData = new FormData();
      
      if (photo) {
        formData.append('team-logo', photo);
      }
      
      formData.append('name', name);
      formData.append('ageCategory', ageCategory);
      
      if (athleteIds && athleteIds.length > 0) {
        athleteIds.forEach((id, index) => {
          formData.append(`athleteIds[${index}]`, id);
        });
      }
      
      const response = await requestWrapper(
        () => axios.post('teams/create', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }),
        thunkApi.dispatch
      );
      
      return response.data;
    } catch (err) {
      if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
      }
      return thunkApi.rejectWithValue(err.response.data.message || 'Помилка при створенні команди');
    }
  }
);

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

export const fetchTeamDetails = createAsyncThunk(
  'teams/fetchTeamDetails',
  async (teamId, thunkApi) => {
    try {
      const response = await requestWrapper(
        () => axios.get(`teams/${teamId}`),
        thunkApi.dispatch
      );
      return response.data.team;
    } catch (err) {
      if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
      }
      return thunkApi.rejectWithValue(err.response.data.message || 'Помилка при завантаженні деталей команди');
    }
  }
);

export const updateTeam = createAsyncThunk(
  'teams/updateTeam',
  async ({ teamId, teamData }, thunkApi) => {
    try {
      const { name, ageCategory, photo, athleteIds } = teamData;
      
      const formData = new FormData();
      
      if (photo) {
        formData.append('team-logo', photo);
      }
      
      formData.append('name', name);
      formData.append('ageCategory', ageCategory);
      
      if (athleteIds && athleteIds.length > 0) {
        athleteIds.forEach((id, index) => {
          formData.append(`athleteIds[${index}]`, id);
        });
      }
      
      const response = await requestWrapper(
        () => axios.put(`teams/${teamId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }),
        thunkApi.dispatch
      );
      
      return response.data.team;
    } catch (err) {
      if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
      }
      return thunkApi.rejectWithValue(err.response.data.message || 'Помилка при оновленні команди');
    }
  }
);

export const deleteTeam = createAsyncThunk(
  'teams/deleteTeam',
  async (teamId, thunkApi) => {
    try {
      const response = await requestWrapper(
        () => axios.delete(`teams/${teamId}`),
        thunkApi.dispatch
      );
      return { deletedTeamId: teamId, ...response.data };
    } catch (err) {
      if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
      }
      return thunkApi.rejectWithValue(err.response.data.message || 'Помилка при видаленні команди');
    }
  }
);

export const resetCreateTeamStatus = () => ({
  type: 'teams/resetCreateTeamStatus'
});

export const resetUpdateTeamStatus = () => ({
  type: 'teams/resetUpdateTeamStatus'
});

export const resetDeleteTeamStatus = () => ({
  type: 'teams/resetDeleteTeamStatus'
});

export const resetFetchTeamDetailsStatus = () => ({
  type: 'teams/resetFetchTeamDetailsStatus'
});