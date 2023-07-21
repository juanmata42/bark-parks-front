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
      state.checked = false;
    },
    error: (state, action) => {
      state.user = initialState.session.user;
      state.error = action.payload || '';
      state.checked = false;
    },
    clearError: (state) => {
      state.error = '';
    },
    success: (state, action) => {
      state.user = action.payload;
      state.error = '';
      state.checked = true;
    },
    clear: (state) => {
      state.user = initialState.session.user;
      state.error = '';
      state.checked = false;
    },
  },
});

export const sessionActions = sessionSlice.actions;

export default sessionSlice.reducer;
