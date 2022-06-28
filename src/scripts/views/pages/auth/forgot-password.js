// import Swal from 'sweetalert2';
import AuthDbSource from '../../../data/authdb-source';
import { swalError } from '../../../utils/function-helper';
import ForgotPasswordPresenter from './forgot-password/forgot-password-presenter';
import ForgotPasswordView from './forgot-password/forgot-password-view';

const view = new ForgotPasswordView();
const ForgotPassword = {
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
    new ForgotPasswordPresenter({ view, authDb: AuthDbSource });
  },

};

export default ForgotPassword;
