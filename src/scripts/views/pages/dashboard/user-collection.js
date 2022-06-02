import DataDbSource from '../../../data/datadb-source';
import { emptyFormHandler } from '../../../utils/function-helper';
import UserCollectioPresenter from './user-collection/user-collection-presenter';
import UserCollectionView from './user-collection/user-collection-view';

const view = new UserCollectionView();
const UserCollection = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    const date = document.querySelector('#date');
    const time = document.querySelector('#time');
    const number = document.querySelector('#number');
    const message = document.querySelector('#message');
    const address = document.querySelector('#address');
    new UserCollectioPresenter({ view, dataDb: DataDbSource });
  },

};

export default UserCollection;
