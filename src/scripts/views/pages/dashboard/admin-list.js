import AdminListPresenter from './admin-list/admin-list-presenter';
import AdminListView from './admin-list/admin-list-view';
import DataDbSource from '../../../data/datadb-source';
import AuthDbSource from '../../../data/authdb-source';

const view = new AdminListView();
const Collection = {
  async render() {
    // document.querySelector('custom-footer').style.display = 'none';
    // return view.getTemplate();
    return {
      footer: false,
      content: view.getTemplate(),
    };
  },

  async afterRender() {
    new AdminListPresenter({ view, dataDb: DataDbSource, authDb: AuthDbSource });
  },
};

export default Collection;
