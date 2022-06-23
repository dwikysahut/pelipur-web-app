import AdminListPresenter from './admin-list/admin-list-presenter';
import AdminListView from './admin-list/admin-list-view';
import DataDbSource from '../../../data/datadb-source';

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
    new AdminListPresenter({ view, dataDb: DataDbSource });
  },
};

export default Collection;
