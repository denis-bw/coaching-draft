import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthorizationUser,fetchLoginUser, fetchLogout, refreshUser, fetchForgotPassword, fetchResetPassword, updateUserProfile } from './authOperations.js';

const initialState = {
  user: { email: null, username: null, location: null, dateOfBirth: null, avatar: null},
  token: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
  successMessage: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  clearError: (state) => {
      state.error = null; 
    },
  clearMessage: (state) => {
      state.successMessage = null; 
    },
  setToken: (state, action) => {
      state.token = action.payload; 
  },
  },
  extraReducers: (builder) => builder
    .addCase(fetchAuthorizationUser.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    })
    .addCase(fetchAuthorizationUser.fulfilled, (state, action) => {
      state.user.email = action.payload.email;
      state.user.username = action.payload.username;
      state.user.location = action.payload.location;
      state.user.dateOfBirth = action.payload.dateOfBirth;
      state.user.avatar = action.payload.avatar;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    })
    .addCase(fetchAuthorizationUser.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false;

    })
    .addCase(fetchLoginUser.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    })
    .addCase(fetchLoginUser.fulfilled, (state, action) => {
      state.user.email = action.payload.email;
      state.user.username = action.payload.username;
      state.user.location = action.payload.location;
      state.user.dateOfBirth = action.payload.dateOfBirth;
      state.user.avatar = action.payload.avatar;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    })
    .addCase(fetchLoginUser.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false;
    })
    .addCase(fetchLogout.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    })
    .addCase(fetchLogout.fulfilled, (state) => {
      state.user = {  email: null, username: null, location: null, dateOfBirth: null, avatar: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    })
    .addCase(fetchLogout.rejected, (state, action) => {
      state.error = action.payload || 'Сталася непередбачена помилка при виході.';
      state.isLoading = false;
      state.isLoggedIn = false;
    })
    .addCase(refreshUser.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
      state.user.email = action.payload.email;
      state.user.username = action.payload.username;
      state.user.location = action.payload.location;
      state.user.dateOfBirth = action.payload.dateOfBirth;
      state.user.avatar = action.payload.avatar;
      state.isLoggedIn = true;
      state.isLoading = false;
    })
    .addCase(refreshUser.rejected, (state, action) => {
      state.token = null;
      state.isLoggedIn = false;
      state.user = {  email: null, username: null, location: null, dateOfBirth: null, avatar: null };
      state.error = action.payload || 'Не вдалося оновити дані користувача.';
      state.isLoading = false;
    })
    .addCase(fetchForgotPassword.pending, (state) => {
      state.error = null;
      state.isLoading = true;
      state.successMessage = null; 
    })
    .addCase(fetchForgotPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.successMessage = action.payload.message;
    })
    .addCase(fetchForgotPassword.rejected, (state, action) => {
      state.error = action.payload || 'Не вдалося надіслати запит.';
      state.isLoading = false;
    })
    .addCase(fetchResetPassword.pending, (state) => {
      state.error = null;
      state.isLoading = true;
      state.successMessage = null; 
    })
    .addCase(fetchResetPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.successMessage = action.payload.message;
    })
    .addCase(fetchResetPassword.rejected, (state, action) => {
      state.error = action.payload || 'Не вдалося надіслати запит.';
      state.isLoading = false;
    })
    .addCase(updateUserProfile.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(updateUserProfile.fulfilled, (state, action) => {
      console.log(action.payload, "Ф")
      state.user = { ...state.user, ...action.payload.updatedFields };
      state.isLoading = false;
    })
    .addCase(updateUserProfile.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action)
      state.error = action.payload.message || 'Failed to update profile';
      if (action.payload.status === 401) {
         state.isLoggedIn = false
      }
    }),
});

export const authReducer = authSlice.reducer;
export const { clearError, clearMessage, setToken } = authSlice.actions;

