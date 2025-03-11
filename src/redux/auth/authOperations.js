import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {requestWrapper} from '../../utils/requestWrapper'

// const BASE_URL = import.meta.env.VITE_BASE_URL_AUTH;
const BASE_URL = "https://coaching-draft-backend.onrender.com/api/auth/"
axios.defaults.baseURL = BASE_URL

const token = {
    setToken(token) {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
    },
    unsetToken() {
        axios.defaults.headers.Authorization = '';
    }
}

export const fetchAuthorizationUser = createAsyncThunk(
  'userDetails/fetchAuthorizationUser',
  async (dataUser, thunkApi) => {
      try {
      const { data } = await axios.post('users/register', dataUser);
      token.setToken(data.token); 
      return data;
    } catch (err) {
    
    if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
    }

    const status = err.response.status;
    if (status === 409) {
        return thunkApi.rejectWithValue('Користувач з таким email вже існує.');
    }
    if (status === 400) {
        return thunkApi.rejectWithValue('Некоректно введені дані.');
    }
      return thunkApi.rejectWithValue('Щось пішло не так. Спробуйте ще раз.');
    }
  }
);

export const fetchLoginUser = createAsyncThunk(
  'userDetails/fetchLoginUser',
  async (dataUser, thunkApi) => {
    try {   
      const { data } = await axios.post('users/login', dataUser);
      token.setToken(data.token);
      return data;
    } catch (err) { 

      if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
      }
     
      const status = err.response.status;
      switch (status) {
        case ( 400 || 401):
          return thunkApi.rejectWithValue('Невірний email або пароль. Перевірте дані та спробуйте ще раз.');
        case 403:
          return thunkApi.rejectWithValue('Доступ заборонено. Можливо, ваш акаунт заблоковано.');
        case 500:
          return thunkApi.rejectWithValue('Помилка сервера. Будь ласка, спробуйте пізніше.');
        case 429:
          return thunkApi.rejectWithValue(err.response.data.message);
        default:
          return thunkApi.rejectWithValue('Щось пішло не так. Спробуйте ще раз.');
      }
    }
  }
);

export const fetchLogout = createAsyncThunk('userDetails/fetchLogIn',
    async (_, thunkApi) => {
        try {   
            await axios.post('users/logout');
            token.unsetToken();
        } catch (err) {  
                if (err.response) {
                    if (err.response.status === 401) {
                    token.unsetToken();
                    return thunkApi.rejectWithValue('Ви вже вийшли з акаунту.'); 
                }
                if (err.response.status === 404) {
                    return thunkApi.rejectWithValue('Сервер не знайдено.');  
                }
            }
 
            return thunkApi.rejectWithValue('Помилка при виході з акаунту. Спробуйте ще раз.');
        }
});

export const refreshUser = createAsyncThunk(
  'userDetails/refreshUser',
  async (_, thunkApi) => {
    const { auth } = thunkApi.getState(); 
    
    if (!auth.token) {
      return thunkApi.rejectWithValue('No token found');
    }

    try {
      token.setToken(auth.token);
      const res = await axios.get('users/current', {
      headers: {
        'Cache-Control': 'no-cache', 
      },});
      return res.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        return thunkApi.rejectWithValue('Час сеансу закінчився. Будь ласка, увійдіть ще раз.');
      }
      return thunkApi.rejectWithValue(error.message);  
    }
  }
);


export const fetchForgotPassword = createAsyncThunk(
  'userDetails/fetchForgotPassword',
  async (email, thunkApi) => {
    try {
      const { data } = await axios.post('users/forgot-password', { email });
      return {
        message: data.message || 'Інструкції для відновлення пароля відправлені на вашу пошту'
      };
    } catch (err) {
      if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
      }

      const status = err.response.status;
      if (status === 404) {
        return thunkApi.rejectWithValue('Користувача з таким email не знайдено.');
      }
      if (status === 400) {
        return thunkApi.rejectWithValue(err.response.data.error || 'Некоректний email.');
      }
      
      return thunkApi.rejectWithValue('Щось пішло не так. Спробуйте ще раз.');
    }
  }
);





export const fetchResetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ email, token, newPassword }, thunkApi) => {
    try {
      const { data } = await axios.post("users/reset-password" , 
        { email, token, newPassword }
      );
      return {
        message: data.message || 'Пароль успішно змінено.'
      };
    } catch (err) {
      if (!err.response) {
        return thunkApi.rejectWithValue('Сервер не відповідає. Спробуйте пізніше.');
      }
      console.log(err.response)
      const status = err.response.status;
      if (status === 404) {
        return thunkApi.rejectWithValue('Користувача з таким email не знайдено.');
      }
      if (status === 400) {
        return thunkApi.rejectWithValue(err.response.data.message || 'Некоректний email чи токен.');
      }
      if (status === 410) {
        return thunkApi.rejectWithValue('Час посилання відновлення пароля закінчився.');
      }
      return thunkApi.rejectWithValue('Щось пішло не так. Спробуйте ще раз.');
    }
  }
);


export const updateUserProfile = createAsyncThunk(
  'auth/updateUserProfile',
  async (updatedData, thunkAPI) => {
    try {
      const response = await requestWrapper(
        () => axios.put('users/updateprofile', updatedData),
        thunkAPI.dispatch 
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Failed to update profile');
    }
  }
);
