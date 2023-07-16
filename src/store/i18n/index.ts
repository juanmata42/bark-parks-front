/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getBrowserLanguage } from 'utils/language';
import i18n from '../../i18n';

const USER_LANG = getBrowserLanguage();

const filteri18n = (lang: string) => {
  if (lang === 'ES') {
    return i18n.ES;
  }
  if (lang === 'BN') {
    return i18n.EN;
  }
  return i18n.EN;
};

const INITIAL_LANG_CONF = {
  language: USER_LANG,
  literals: filteri18n(USER_LANG),
};

export const i18nSlice = createSlice({
  name: 'language',
  initialState: INITIAL_LANG_CONF,
  reducers: {
    set: (state, { payload: lang }) => {
      state.language = lang;
      state.literals = i18n.EN;
    },
  },
});

export const i18nActions = i18nSlice.actions;

export default i18nSlice.reducer;