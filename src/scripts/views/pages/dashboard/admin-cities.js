import DataDbSource from '../../../data/datadb-source';
import '../../component/aside-dashboard';
import AdminCitiesPresenter from './admin-cities/admin-cities-presenter';
import AdminCitiesView from './admin-cities/admin-cities-view';

const view = new AdminCitiesView();
const CityList = {
  async render() {
    // document.querySelector('custom-footer').style.display = 'none';
    return {
      footer: false,
      content: view.getTemplate(),
    };
  },

  async afterRender() {
    new AdminCitiesPresenter({ view, dataDb: DataDbSource });
  },
};

export default CityList;
