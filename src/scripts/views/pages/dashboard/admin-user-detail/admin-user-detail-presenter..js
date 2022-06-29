/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */

import UrlParser from '../../../../routes/url-routes';
import {
  closeLoader, errorFetch, swalConfirm, swalError,
} from '../../../../utils/function-helper';

class UserDetailPresenter {
  constructor({ view, dataDb }) {
    this._view = view;
    this._dataDb = dataDb;
    this._getUserById();
  }

  // handler change collection form input
  async _getUserById() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const response = await this._dataDb.getUserById(localStorage.getItem('token'), url.id);
      if (response.status === 200) {
        this._renderUserDetail(response.data.data);
      }
    } catch (error) {
      // console.log(error);
      if (error.response.data.data.message) {
        errorFetch(error.response.data.data.message, async (token) => {
          try {
            const response = await this._authDb.refreshToken({ token });
            if (response.status === 200) {
              localStorage.setItem('token', response.data.data.token);
              localStorage.setItem('refreshToken', response.data.data.refreshToken);
              await this._getUserById();
            }
          } catch (errorToken) {
            // console.log(errorToken);
            if (errorToken.response.status === 403) { swalError('Session Expired, Please Login First', '#/logout'); }
          }
        });
      }
      // swalError('Oops... Something Error');
    } finally {
      setTimeout(() => {
        closeLoader(this._view.loaderListener());
      }, 500);
    }
  }

  _renderUserDetail(items) {
    this._view.showUserDetail(items, async (id, suspend) => {
      await this._buttonSuspendHandler(id, suspend);
    });
  }

  async _buttonSuspendHandler(id, suspend) {
    const suspend_code = !suspend;
    // console.log(suspend_code);
    try {
      const response = await this._dataDb.putUserById(localStorage.getItem('token'), { suspend: suspend_code }, id);
      if (response.status === 200) {
        swalConfirm('Suspend Account Successfully');
        this._getUserById(id);
      }
    } catch (error) {
      swalError('Oops... Something Wrong');
    }
  }
}
export default UserDetailPresenter;
