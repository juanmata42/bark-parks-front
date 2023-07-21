import Main from './Main/Main';
import Error from './Error/Error';
import About from './About/About';
import Auth from './Auth/Auth';
import Profile from './Profile/Profile';
import Kennel from './Kennel/Kennel';
import PawPost from './PawPost/PawPost';
import Shelters from './Shelters/Shelters';
import Settings from './Settings/Settings';
import Friends from './Friends/Friends';
import Groups from './Groups/Groups';

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
    path: `${ROUTE_PATH.AUTH}/login`,
    component: Auth,
    exact: false,
    ignoreSession: true,
    header: true,
    footer: true,
  },
  {
    path: ROUTE_PATH.PROFILE,
    component: Profile,
    exact: true,
    ignoreSession: false,
    header: true,
    footer: true,
  },
  {
    path: `${ROUTE_PATH.PROFILE}/settings`,
    component: Settings,
    exact: true,
    ignoreSession: false,
    header: true,
    footer: true,
  },
  {
    path: `${ROUTE_PATH.PROFILE}/about`,
    component: About,
    exact: true,
    ignoreSession: false,
    header: true,
    footer: true,
  },
  {
    path: ROUTE_PATH.KENNEL,
    component: Kennel,
    exact: true,
    ignoreSession: false,
    header: true,
    footer: true,
  },
  {
    path: `${ROUTE_PATH.KENNEL}/friends`,
    component: Friends,
    exact: true,
    ignoreSession: false,
    header: true,
    footer: true,
  },
  {
    path: `${ROUTE_PATH.KENNEL}/groups`,
    component: Groups,
    exact: true,
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
