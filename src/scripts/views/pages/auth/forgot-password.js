// import Swal from 'sweetalert2';
import AuthDbSource from '../../../data/authdb-source';
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
    new ForgotPasswordPresenter({ view, authDb: AuthDbSource });
  },

};

export default ForgotPassword;
