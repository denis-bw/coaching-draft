import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { themeReducer } from './theme/themeSlice.js';
import { authReducer } from './auth/authSlice.js';
import { athletesReducer } from './athletes/athletesSlice.js';
import teamsReducer from './teams/teamsSlice.js';
import { RESET_ALL_DATA } from './resetActions';

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

const appReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  athletes: athletesReducer,
  teams: teamsReducer,
});

const rootReducer = (state, action) => {
 
  if (
    action.type === 'auth/logout/fulfilled' || 
    action.type === RESET_ALL_DATA
  ) {

    return {
      theme: state.theme,
      auth: authReducer(undefined, action),
      athletes: athletesReducer(undefined, action),
      teams: teamsReducer(undefined, action)
    };
  }
  
  return appReducer(state, action);
};

const persistConfig = {
  key: 'root',
  storage,
  transforms: [authTransform],
  whitelist: ['theme', 'auth'], 
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