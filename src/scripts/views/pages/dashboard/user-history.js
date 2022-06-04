import DataDbSource from '../../../data/datadb-source';
import '../../component/aside-user';
import UserHistoryPresenter from './user-history/user-history-presenter';
import UserHistoryView from './user-history/user-history-view';

const view = new UserHistoryView();
const UserHistory = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new UserHistoryPresenter({ view, dataDb: DataDbSource });
  },
};

export default UserHistory;
