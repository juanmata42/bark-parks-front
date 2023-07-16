import i18n from 'i18n';
import { State } from 'models/state';

const INITIAL_STATE: State = {
  loading: {
    count: 0,
  },
  i18n: {
    language: 'EN',
    literals: i18n.EN,
  },
};

export default INITIAL_STATE;
