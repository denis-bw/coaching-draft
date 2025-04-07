import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { themeReducer } from './theme/themeSlice.js';
import { authReducer } from './auth/authSlice.js';
import { athletesReducer } from './athletes/athletesSlice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createTransform } from 'redux-persist';

const authTransform = createTransform(
  
  (inboundState) => {
    const { successMessage, isLoading, isLoggedIn, error, isErrorAuthorized, user, ...persistedState } = inboundState;
    return persistedState;
  },
  (outboundState) => {
    return {
      ...outboundState, successMessage: null, isLoading: false, isLoggedIn: false, error: null, isErrorAuthorized: false,
      user: {
            ...outboundState.user,
            email: null,
            username: null,
            location: null,
            dateOfBirth: null,
            avatar: null,
          },
     };
  },
  { whitelist: ['auth'] }
);

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  athletes: athletesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  transforms: [authTransform],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
