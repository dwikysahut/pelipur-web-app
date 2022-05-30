import Beranda from '../views/pages/beranda';
import AboutUs from '../views/pages/aboutUs';
import Bisnis from '../views/pages/bisnis';
import Detail from '../views/pages/detail';
import Auth from '../views/pages/auth/auth';
import Verify from '../views/pages/auth/verify';
import ForgotPassword from '../views/pages/auth/forgot-password';
import Collection from '../views/pages/dashboard/collection';
import Profile from '../views/pages/dashboard/profile';
import Partner from '../views/pages/dashboard/partner';

const routes = {
  '/': Beranda,
  '/beranda': Beranda,
  '/aboutus': AboutUs,
  '/bisnis': Detail,
  '/news/detail': Detail,
  '/auth': Auth,
  '/verify': Verify,
  '/forgot-password': ForgotPassword,
  '/collections': Collection,
  '/profile': Profile,
  '/partner': Partner,
};

export default routes;
