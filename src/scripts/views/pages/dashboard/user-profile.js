/* eslint-disable no-empty-function */
import AuthDbSource from '../../../data/authdb-source';
import DataDbSource from '../../../data/datadb-source';
import '../../component/aside-user';
import UserProfilePresenter from './user-profile/user-profile-presenter';
import UserProfileView from './user-profile/user-profile-view';

const view = new UserProfileView();
const Profile = {
  async render() {
    return {
      footer: false,
      content: view.getTemplate(),
    };
  },

  async afterRender() {
    new UserProfilePresenter({ view, dataDb: DataDbSource, authDb: AuthDbSource });
  },
};

export default Profile;
