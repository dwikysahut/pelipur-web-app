/* eslint-disable import/no-named-as-default-member */
import Beranda from '../views/pages/beranda';
import AboutUs from '../views/pages/aboutUs';
import Bisnis from '../views/pages/bisnis';
import Detail from '../views/pages/news-detail';
import Auth from '../views/pages/auth/auth';
import Verify from '../views/pages/auth/verify';
import ForgotPassword from '../views/pages/auth/forgot-password';
import Dashboard from '../views/pages/dashboard/admin-dashboard';
import Profile from '../views/pages/dashboard/user-profile';
import Partner from '../views/pages/dashboard/admin-partner';
import UserCollection from '../views/pages/dashboard/user-collection';
// eslint-disable-next-line import/no-named-as-default
import UserHistory from '../views/pages/dashboard/user-history';
import Collection from '../views/pages/dashboard/admin-list';
import Logout from '../views/pages/auth/logout';
import CityList from '../views/pages/dashboard/admin-cities';
import UserNotFound from '../views/pages/dashboard/user-notfound';
import AdminNotFound from '../views/pages/dashboard/admin-notfound';
import NotFound from '../views/pages/not-found';
import Unauthorized from '../views/pages/unauthorized';

const routes = {
  '/': Beranda,
  '/home': Beranda,
  '/about-us': AboutUs,
  '/bisnis': Bisnis,
  '/detail': Detail,
  '/news': Detail,
  '/auth': Auth,
  '/verify': Verify,
  '/forgot-password': ForgotPassword,
  '/dashboard': localStorage.getItem('role') === '1' ? Dashboard : Unauthorized,
  '/profile': localStorage.getItem('role') === '2' ? Profile : Unauthorized,
  '/partners': localStorage.getItem('role') === '1' ? Partner : Unauthorized,
  '/collections': localStorage.getItem('role') === '1' ? Collection : Unauthorized,
  '/user-collection': localStorage.getItem('role') === '2' ? UserCollection : Unauthorized,
  '/user-history': localStorage.getItem('role') === '2' ? UserHistory : Unauthorized,
  '/logout': Logout,
  '/city-list': localStorage.getItem('role') === '1' ? CityList : Unauthorized,
  '/not-found': NotFound,
  '/unauthorize': Unauthorized,
  '/user-notfound': UserNotFound,
  '/admin-notfound': AdminNotFound,
};

export default routes;
