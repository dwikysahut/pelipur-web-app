import DataDbSource from '../../../data/datadb-source';
import UserCollectionPresenter from './user-collection/user-collection-presenter';
import UserCollectionView from './user-collection/user-collection-view';

const view = new UserCollectionView();
const UserCollection = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new UserCollectionPresenter({ view, dataDb: DataDbSource });
  },

};

export default UserCollection;
