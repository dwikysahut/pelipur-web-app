import DataDbSource from '../../../data/datadb-source';
import '../../component/aside-dashboard';
import AdminDashboardPresenter from './admin-dashboard/admin-dashboard-presenter';
import AdminDashboardView from './admin-dashboard/admin-dashboard-view';

const view = new AdminDashboardView();
const Collection = {
  async render() {
    document.querySelector('custom-footer').style.display = 'none';
    return view.getTemplate();
  },

  async afterRender() {
    new AdminDashboardPresenter({ view, dataDb: DataDbSource });
  },
};

export default Collection;
