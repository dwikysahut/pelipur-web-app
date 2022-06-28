/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import FormEventChangeHandler from '../../../../utils/form-event-change-handler';
import {
  emptyFormHandler, formPhoneValidation, swalConfirm, swalError,
  closeLoader, errorFetch,
} from '../../../../utils/function-helper';

class UserProfilePresenter {
  constructor({ view, dataDb }) {
    this._view = view;
    this._dataDb = dataDb;
    this._generateUserDataHandler();
    this._putUserHandler();
    this._formProfileEventChangeHandler();
  }

  // handler change collection form input
  _formProfileEventChangeHandler() {
    this._view.getProfileFormInputListener((formData) => {
      // console.log(formData);
      FormEventChangeHandler.init(formData);
    });
  }

  async _generateCategoryDropdownHandler(recentId) {
    try {
      // openLoader(this._view.loaderListener());
      const responseDesc = await this._dataDb.getAllDesc(localStorage.getItem('token'));
      // console.log(responseDesc);
      this._renderCategories(responseDesc.data.data, recentId);
    } catch (error) {
      // console.log(error);
    }
  }

  async _generateUserDataHandler() {
    try {
      // openLoader(this._view.loaderListener());
      const responseUser = await this._dataDb.getUserById(localStorage.getItem('token'), localStorage.getItem('id'));
      this._renderUserForm(responseUser.data.data);
    } catch (error) {
      if (error.response.data.data.message) {
        errorFetch(error.response.data.data.message, async (token) => {
          try {
            const response = await this._authDb.refreshToken({ token });
            if (response.status === 200) {
              localStorage.setItem('token', response.data.data.token);
              localStorage.setItem('refreshToken', response.data.data.refreshToken);
              this._getAllCollectionsHandler();
            }
          } catch (errorToken) {
            // console.log(errorToken);
            if (errorToken.response.status === 403) { swalError('Session Expired, Please Login First', '#/logout'); }
          } finally {
            setTimeout(() => {
              closeLoader(this._view.loaderListener());
            }, 500);
          }
        });
      }
      // swalError('Oops something wrong');
    } finally {
      setTimeout(() => {
        closeLoader(this._view.loaderListener());
      }, 500);
    }
  }

  _renderCategories(items, recentId) {
    this._view.showCategories(items, recentId);
  }

  _renderUserForm(data) {
    this._view.getProfileFormInputListener((formData) => {
      formData.name.value = data.nama;
      formData.email.value = data.email;
      formData.number.value = data.no_telp;
      formData.address.value = data.alamat;
      // formData.detail.value = data.id_keterangan;
      // console.log(formData.desc.value);

      this._generateCategoryDropdownHandler(data.id_keterangan);
    });
  }

  _putUserHandler() {
    this._view.profileFormInputListener(async (formData) => {
      if (formData.name.value.length > 0 && formData.email.value.length > 0
        && formData.number.value.length > 0 && formData.address.value.length > 0
      ) {
        if (!formPhoneValidation(formData.number, this._view.alertPhoneProfileListener())) return;
        if (formData.password.value.length < 1) {
          delete formData.password;
        } else if (formData.password.value.length < 8 || formData.password.value.length > 12) {
          emptyFormHandler(
            formData.password,
          );
          return;
        }
        // console.log(formData);
        await this.putUserProfile(localStorage.getItem('token'), formData, localStorage.getItem('id'));
      } else {
        emptyFormHandler(
          formData.name,
          formData.email,
          formData.number,
          formData.address,
        );
      }
    });
  }

  async putUserProfile(token, formData, id) {
    const newForm = {
      nama: formData.name.value,
      email: formData.email.value,
      no_telp: formData.number.value,
      alamat: formData.address.value,
      id_keterangan: formData.desc.value,

    };
    if (formData.password) {
      newForm.password = formData.password.value;
    }
    try {
      // openLoader(this._view.loaderListener());
      const response = await this._dataDb.putUserById(token, newForm, id);
      if (response.status === 200) {
        await swalConfirm(`${response.data.message}`, '');
        await this._generateUserDataHandler();
        // resetFormValue(formData);
      }
    } catch (error) {
      await swalError(`${error.response.data.message}`);
    }
    //  finally {
    //   closeLoader(this._view.loaderListener());
    // }
  }
}
export default UserProfilePresenter;
