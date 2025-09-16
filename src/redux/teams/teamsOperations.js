import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { requestWrapper } from '../../utils/requestWrapper';

// Існуючі операції залишаються без змін...
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
      const { name, ageCategory, photo, athleteIds, deleteLogo } = teamData;
      
      const formData = new FormData();
      
      if (deleteLogo) {
        console.log('Відправляємо запит на видалення логотипу');
        formData.append('deleteLogo', 'true');
      } else if (photo) {
        console.log('Відправляємо нове фото');
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
      
      console.log('Відповідь від сервера:', response.data);
      return response.data.team;
      
    } catch (err) {
      console.error('Помилка при оновленні команди:', err);
      if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
      }
      
      const errorMessage = err.response.data?.message || 'Помилка при оновленні команди';
      console.error('Деталі помилки:', err.response.data);
      return thunkApi.rejectWithValue(errorMessage);
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

// ОНОВЛЕНІ функції галереї з пагінацією та інформацією про сховище
export const fetchTeamGallery = createAsyncThunk(
  'teams/fetchTeamGallery',
  async ({ teamId, page = 1, loadMore = false }, thunkApi) => {
    try {
      const response = await requestWrapper(
        () => axios.get(`teams/${teamId}/gallery?page=${page}`),
        thunkApi.dispatch
      );
      return { 
        ...response.data, 
        page,
        isFirstPage: page === 1 && !loadMore,
        loadMore
      };
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return { 
          photos: [], 
          pagination: { 
            currentPage: page, 
            hasMore: false, 
            totalPages: 0, 
            totalPhotos: 0 
          },
          storageInfo: null,
          isFirstPage: page === 1 && !loadMore,
          loadMore
        };
      }
      if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
      }
      return thunkApi.rejectWithValue(err.response.data.message || 'Помилка при завантаженні галереї команди');
    }
  }
);

export const uploadTeamPhoto = createAsyncThunk(
  'teams/uploadTeamPhoto',
  async ({ teamId, photo }, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append('team-photo', photo);
      
      const response = await requestWrapper(
        () => axios.post(`teams/${teamId}/gallery/upload`, formData, {
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
      return thunkApi.rejectWithValue(err.response.data.message || 'Помилка при завантаженні фото');
    }
  }
);

export const deleteTeamPhoto = createAsyncThunk(
  'teams/deleteTeamPhoto',
  async ({ teamId, photoId }, thunkApi) => {
    try {
      const response = await requestWrapper(
        () => axios.delete(`teams/${teamId}/gallery/${photoId}`),
        thunkApi.dispatch
      );
      return { photoId, deletedPhotoId: photoId, ...response.data };
    } catch (err) {
      if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
      }
      return thunkApi.rejectWithValue(err.response.data.message || 'Помилка при видаленні фото');
    }
  }
);

// НОВА: Множинне завантаження фото з прогресом
export const uploadMultipleTeamPhotos = createAsyncThunk(
  'teams/uploadMultipleTeamPhotos',
  async ({ teamId, photos }, thunkApi) => {
    try {
      const results = [];
      const errors = [];
      let currentStorageInfo = null;

      // Отримуємо поточну інформацію про сховище
      try {
        const storageResponse = await requestWrapper(
          () => axios.get('teams/storage-info'),
          thunkApi.dispatch
        );
        currentStorageInfo = storageResponse.data.storageInfo;
      } catch (storageErr) {
        console.warn('Не вдалося отримати інформацію про сховище:', storageErr);
      }

      for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];
        
        // Оновлюємо прогрес
        thunkApi.dispatch({
          type: 'teams/setUploadProgress',
          payload: { current: i, total: photos.length }
        });

        try {
          const formData = new FormData();
          formData.append('team-photo', photo);
          
          const response = await requestWrapper(
            () => axios.post(`teams/${teamId}/gallery/upload`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }),
            thunkApi.dispatch
          );
          
          results.push(response.data.photo);
          
          // Оновлюємо інформацію про сховище після кожного завантаження
          if (response.data.storageInfo) {
            currentStorageInfo = response.data.storageInfo;
          }
        } catch (photoError) {
          errors.push({
            fileName: photo.name,
            error: photoError.response?.data?.message || 'Помилка при завантаженні фото'
          });
        }
      }

      // Завершальний прогрес
      thunkApi.dispatch({
        type: 'teams/setUploadProgress',
        payload: { current: photos.length, total: photos.length }
      });

      return {
        uploadedPhotos: results,
        errors: errors,
        successCount: results.length,
        errorCount: errors.length,
        storageInfo: currentStorageInfo
      };
    } catch (err) {
      return thunkApi.rejectWithValue('Загальна помилка при завантаженні фото');
    }
  }
);

export const fetchUserStorageInfo = createAsyncThunk(
  'teams/fetchUserStorageInfo',
  async (_, thunkApi) => {
    try {
      const response = await requestWrapper(
        () => axios.get('teams/storage-info'),
        thunkApi.dispatch
      );
      return response.data.storageInfo;
    } catch (err) {
      if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
      }
      return thunkApi.rejectWithValue(err.response.data.message || 'Помилка при отриманні інформації про сховище');
    }
  }
);

// Reset actions
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

export const resetTeamGalleryStatus = () => ({
  type: 'teams/resetTeamGalleryStatus'
});