/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-new */
// import Swal from 'sweetalert2';

import AuthDbSource from '../../../data/authdb-source';
import AuthView from './auth/auth-view';
import AuthPresenter from './auth/auth-presenter';
import '../../component/custom-loader';

const view = new AuthView();

const Auth = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new AuthPresenter({ view, authDb: AuthDbSource });
  },
};

export default Auth;
