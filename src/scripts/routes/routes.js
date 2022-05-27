import Beranda from '../views/pages/beranda';
import AboutUs from '../views/pages/aboutUs';
import Bisnis from '../views/pages/bisnis';
import Detail from '../views/pages/detail';
import Auth from '../views/pages/auth';

const routes = {
  '/': Beranda,
  '/beranda': Beranda,
  '/aboutus': AboutUs,
  '/bisnis': Bisnis,
  '/detail/id': Detail,
  '/auth': Auth,
};

export default routes;
