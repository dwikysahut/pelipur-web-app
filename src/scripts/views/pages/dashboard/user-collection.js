import AuthDbSource from '../../../data/authdb-source';
import DataDbSource from '../../../data/datadb-source';
import UserCollectionPresenter from './user-collection/user-collection-presenter';
import UserCollectionView from './user-collection/user-collection-view';

const view = new UserCollectionView();
const UserCollection = {
  async render() {
    return {
      footer: false,
      content: view.getTemplate(),
    };
  },

  async afterRender() {
    new UserCollectionPresenter({ view, dataDb: DataDbSource, authDb: AuthDbSource });
  },

};

export default UserCollection;
