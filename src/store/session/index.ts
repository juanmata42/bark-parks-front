/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';

export const SESSION_LOGOUT = 'session/clear';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState.session,
  reducers: {
    init: (state) => {
      state.user = initialState.session.user;
      state.error = '';
    },
    error: (state, action) => {
      state.user = initialState.session.user;
      state.error = action.payload || '';
    },
    clearError: (state) => {
      state.error = '';
    },
    success: (state, action) => {
      state.user = action.payload;
      state.error = '';
    },
    clear: (state) => {
      state.user = initialState.session.user;
      state.error = '';
    },
  },
});

export const sessionActions = sessionSlice.actions;

export default sessionSlice.reducer;
