/* eslint-disable no-empty-function */
import DataDbSource from '../../../data/datadb-source';
import '../../component/aside-user';
import UserProfilePresenter from './user-profile/user-profile-presenter';
import UserProfileView from './user-profile/user-profile-view';

const view = new UserProfileView();
const Profile = {
  async render() {
    document.querySelector('custom-footer').style.display = 'none';
    return view.getTemplate();
  },

  async afterRender() {
    new UserProfilePresenter({ view, dataDb: DataDbSource });
  },
};

export default Profile;
