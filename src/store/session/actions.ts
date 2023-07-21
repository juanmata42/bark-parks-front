import { AnyAction, Dispatch } from 'redux';
import * as api from 'utils/fakeApiCalls';
import { loadingActions } from '../loading';
import { sessionActions } from '.';

export function validateSession() {
  //* RCT* --> Revise this Dispatch type
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(loadingActions.show());
    dispatch(sessionActions.init());
    try {
      dispatch(loadingActions.hide());
      return true;
    } catch {
      dispatch(sessionActions.error(''));
      dispatch(loadingActions.hide());
      return false;
    }
  };
}
export function getCurrentUserAction() {
  return async (dispatch: Dispatch) => {
    dispatch(sessionActions.clearError());
    dispatch(loadingActions.show());
    try {
      const userData = await api.getCurrentUser();
      localStorage.setItem('logged', 'true');
      dispatch(sessionActions.success(userData));
      dispatch(loadingActions.hide());
    } catch (err) {
      console.error(err);
      dispatch(sessionActions.error('Error getting user'));
      dispatch(loadingActions.hide());
    }
  };
}
// eslint-disable-next-line no-unused-vars
export function loginAction(
  email: string,
  password: string,
  callback: CallableFunction,
) {
  return async (dispatch: Dispatch) => {
    dispatch(sessionActions.clearError());
    dispatch(loadingActions.show());
    // eslint-disable-next-line no-unused-vars
    const loginresult: any = await api.login({ email, password });
    if (loginresult.response) {
      console.error(loginresult);
      dispatch(sessionActions.error(loginresult.response.status));
      dispatch(loadingActions.hide());
      if (callback && typeof callback === 'function') {
        callback(false);
      }
      return false;
    }
    const userData = await api.getCurrentUser();
    localStorage.setItem('logged', 'true');
    dispatch(sessionActions.success(userData));
    dispatch(loadingActions.hide());
    if (callback && typeof callback === 'function') {
      callback(true);
    }
    return true;
  };
}

/* export function updateCurrentUserAction(
  user: CreateUser | EditUser | User,
  callback: CallableFunction,
) {
  return async (dispatch: Dispatch) => {
    dispatch(sessionActions.clearError());
    dispatch(loadingActions.show());
    try {
      await api.updateCurrentUser(user);
      dispatch(sessionActions.successUpdateCurrent());
      dispatch(loadingActions.hide());
      if (callback && typeof callback === 'function') {
        callback();
      }
    } catch (err) {
      console.error(err);
      dispatch(sessionActions.error('Error updating user'));
      dispatch(loadingActions.hide());
    }
  };
} */
export function logoutAction(callback: CallableFunction) {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(loadingActions.show());
    localStorage.clear();
    // *RCT* --> error when logging out, maybe check backend
    await api.logout();

    dispatch(sessionActions.clear());
    dispatch(loadingActions.hide());
    if (callback && typeof callback === 'function') {
      callback();
    }
  };
}
