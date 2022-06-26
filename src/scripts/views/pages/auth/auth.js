/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-new */
// import Swal from 'sweetalert2';

import AuthDbSource from '../../../data/authdb-source';
import AuthView from './auth/auth-view';
import AuthPresenter from './auth/auth-presenter';
import '../../component/custom-loader';
import { swalError } from '../../../utils/function-helper';

const view = new AuthView();

const Auth = {

  async render() {
    return {
      footer: false,
      content: view.getTemplate(),
    };
  },

  async afterRender() {
    if (localStorage.getItem('token')) {
      window.history.replaceState('', '', '#/home');
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
    new AuthPresenter({ view, authDb: AuthDbSource });
  },
};

export default Auth;
