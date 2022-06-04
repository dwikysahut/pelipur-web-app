/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import Swal from 'sweetalert2';
import FormEventChangeHandler from '../../../../utils/form-event-change-handler';
import {
  closeLoader,
  emptyFormHandler, formEmailValidation, openLoader, passwordValidation, resetFormValue, swalConfirm, swalError, validateEmail,
} from '../../../../utils/function-helper';
import SwiperButtonLoginPresenter from '../../../../utils/slider-button-login-presenter';

class LogoutPresenter {
  constructor({ view, authDb }) {
    this._view = view;
    this._authDb = authDb;
    this._logoutHandler();
  }

  async _loginHandler({ email, password }) {
    try {
      const response = await this._authDb.postLogin({ email, password });

      if (response.status === 200) {
        // console.log(result);
        localStorage.setItem('email', response.data.data.email);
        localStorage.setItem('image', response.data.data.image);
        localStorage.setItem('role', response.data.data.id_role);
        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('id', response.data.data.id);
        localStorage.setItem('refreshToken', response.data.data.refreshToken);

        // await swalConfirm(`${response.data.message}`, '#/home', 'login');
        Swal.fire({
          icon: 'success',
          title: 'Success',
          timer: 1000,
          text: `${response.data.message}`,
        });
        openLoader(this._view.loaderListener());
        setTimeout(() => {
          window.history.replaceState({ page: 'login' }, null, '#/home');
          window.dispatchEvent(new HashChangeEvent('hashchange'));
          closeLoader(this._view.loaderListener());
        }, 2);

        // window.location.href = '#/home';
        // window.history.replaceState('', '', '#/home');
        // window.dispatchEvent(new HashChangeEvent('hashchange'));
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        if (error.response.status === 401) {
          if (error.response.data.message === 'Email does not verify, Please verify your account first') {
            await swalError(`${error.response.data.message}`, '#/verify');
            return;
          }

          await swalError(`${error.response.data.message}`);
        } else {
          await swalError('Something Wrong');
        }
      }
    }
  }
}
export default LogoutPresenter;
