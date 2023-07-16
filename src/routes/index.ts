import Main from './Main/Main';
import Error from './Error/Error';
import About from './About/About';
import Auth from './Auth/Auth';
import Profile from './Profile/Profile';
import Kennel from './Kennel/Kennel';
import PawPost from './PawPost/PawPost';
import Shelters from './Shelters/Shelters';

export const ROUTE_TYPE_REDIRECT = 'redirect';
export const ROUTE_BASE_PATH = '/';

export const ROUTE_PATH = Object.freeze({
  BASE: ROUTE_BASE_PATH,
  MAIN: '/home',
  ABOUT: '/about',
  AUTH: '/auth',
  PROFILE: '/profile',
  KENNEL: '/kennel',
  PAWPOST: '/pawpost',
  SHELTERS: '/shelters',
  ERROR: '/error',
});

export const routes = [
  {
    type: ROUTE_TYPE_REDIRECT,
    from: ROUTE_BASE_PATH,
    to: ROUTE_PATH.MAIN,
    exact: true,
  },
  {
    path: ROUTE_PATH.MAIN,
    component: Main,
    exact: false,
    ignoreSession: true,
    header: true,
    footer: true,
  },
  {
    path: ROUTE_PATH.ABOUT,
    component: About,
    exact: false,
    ignoreSession: true,
    header: true,
    footer: true,
  },
  {
    path: ROUTE_PATH.AUTH,
    component: Auth,
    exact: false,
    ignoreSession: true,
    header: true,
    footer: true,
  },
  {
    path: ROUTE_PATH.PROFILE,
    component: Profile,
    exact: false,
    ignoreSession: false,
    header: true,
    footer: true,
  },
  {
    path: ROUTE_PATH.KENNEL,
    component: Kennel,
    exact: false,
    ignoreSession: false,
    header: true,
    footer: true,
  },
  {
    path: ROUTE_PATH.PAWPOST,
    component: PawPost,
    exact: false,
    ignoreSession: false,
    header: true,
    footer: true,
  },
  {
    path: ROUTE_PATH.SHELTERS,
    component: Shelters,
    exact: false,
    ignoreSession: true,
    header: true,
    footer: true,
  },
  {
    path: `${ROUTE_PATH.ERROR}/:status`,
    component: Error,
    exact: false,
    ignoreSession: true,
  },
  {
    type: ROUTE_TYPE_REDIRECT,
    from: '',
    to: `${ROUTE_PATH.ERROR}/404`,
    exact: false,
  },
];
