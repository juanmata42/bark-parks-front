export type State = {
  loading: {
    count: number
  },
  i18n: {
    language: string;
    literals: lang;
  },
  session: {
    user: User;
    error: string;
    checked: boolean;
  },
};
