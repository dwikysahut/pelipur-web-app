/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import Swal from 'sweetalert2';
import {
  closeLoader, openLoader, swalError,
} from '../../../../utils/function-helper';

class LogoutPresenter {
  constructor({ view, authDb }) {
    this._view = view;
    this._authDb = authDb;
    this._logoutHandler();
  }

  async _logoutHandler() {
    try {
      const response = await this._authDb.postLogout({ token: localStorage.getItem('token') });

      if (response.status === 200) {
        // console.log(result);
        localStorage.removeItem('email', response.data.data.email);
        localStorage.removeItem('image', response.data.data.image);
        localStorage.removeItem('role', response.data.data.id_role);
        localStorage.removeItem('token', response.data.data.token);
        localStorage.removeItem('id', response.data.data.id);
        localStorage.removeItem('refreshToken', response.data.data.refreshToken);

        openLoader(this._view.loaderListener());
        setTimeout(() => {
          window.history.replaceState({ page: 'logout' }, null, '#/home');
          window.dispatchEvent(new HashChangeEvent('hashchange'));
          closeLoader(this._view.loaderListener());
        }, 2);
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
