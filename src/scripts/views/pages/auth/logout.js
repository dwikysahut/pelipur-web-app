/* eslint-disable no-unused-expressions */
import AuthDbSource from '../../../data/authdb-source';
import '../../component/custom-loader';
import LogoutPresenter from './logout/logout-presenter';
import LogoutView from './logout/logout-view';

const view = new LogoutView();
const Logout = {
  async render() {
    return {
      footer: false,
      content: view.getTemplate(),
    };
  },

  async afterRender() {
    new LogoutPresenter({ view, authDb: AuthDbSource });
  },
};

export default Logout;
