import DataDbSource from '../../../data/datadb-source';
/* eslint-disable no-empty-function */
import '../../component/aside-user';
import UserDetailPresenter from './admin-user-detail/admin-user-detail-presenter.';
import UserDetailViee from './admin-user-detail/admin-user-detail-view';

const view = new UserDetailViee();
const UserHistory = {
  async render() {
    return {
      footer: false,
      content: view.getTemplate(),
    };
  },

  async afterRender() {
    new UserDetailPresenter({ view, dataDb: DataDbSource });
  },
};

export default UserHistory;
