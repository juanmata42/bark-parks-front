/* eslint-disable no-param-reassign */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loading from './loading';
import i18n from './i18n';

const combinedReducer = combineReducers({
  loading,
  i18n,
});

const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
