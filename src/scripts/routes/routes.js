import Beranda from '../views/pages/beranda';
import AboutUs from '../views/pages/aboutUs';
import Bisnis from '../views/pages/bisnis';
import Detail from '../views/pages/detail';
import Auth from '../views/pages/auth/auth';
import Verify from '../views/pages/auth/verify';
import ForgotPassword from '../views/pages/auth/forgot-password';
import Dashboard from '../views/pages/dashboard/admin-dashboard';
import Profile from '../views/pages/dashboard/user-profile';
import Partner from '../views/pages/dashboard/admin-partner';
import UserCollection from '../views/pages/dashboard/user-collection';
import UserHistory from '../views/pages/dashboard/user-history';
import Collection from '../views/pages/dashboard/admin-list';
import Logout from '../views/pages/auth/logout';
import CityList from '../views/pages/dashboard/admin-cities';

const routes = {
  '/': Beranda,
  '/home': Beranda,
  '/about-us': AboutUs,
  '/bisnis': Bisnis,
  '/news': Detail,
  '/auth': Auth,
  '/verify': Verify,
  '/forgot-password': ForgotPassword,
  '/dashboard': Dashboard,
  '/profile': Profile,
  '/partners': Partner,
  '/collections': Collection,
  '/user-collection': UserCollection,
  '/user-history': UserHistory,
  '/logout': Logout,
  '/city-list': CityList,
};

export default routes;
