import AuthDbSource from '../../../data/authdb-source';
import DataDbSource from '../../../data/datadb-source';
/* eslint-disable no-empty-function */
import '../../component/aside-user';
import UserHistoryPresenter from './user-history/user-history-presenter';
import UserHistoryView from './user-history/user-history-view';

const view = new UserHistoryView();
const UserHistory = {
  async render() {
    return {
      footer: false,
      content: view.getTemplate(),
    };
  },

  async afterRender() {
    new UserHistoryPresenter({ view, dataDb: DataDbSource, authDb: AuthDbSource });
  },
};

export default UserHistory;
