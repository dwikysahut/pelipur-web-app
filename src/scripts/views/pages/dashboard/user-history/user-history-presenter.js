/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import FormEventChangeHandler from '../../../../utils/form-event-change-handler';
import {
  emptyFormHandler, resetFormValue, swalConfirm, swalError, zeroValueHandler, openLoader, closeLoader, errorFetch,
} from '../../../../utils/function-helper';

class UserHistoryPresenter {
  constructor({ view, dataDb }) {
    this._view = view;
    this._dataDb = dataDb;
    this._getAllCollectionsHandler();
  }

  // handler change collection form input
  async _getAllCollectionsHandler() {
    try {
      openLoader(this._view.loaderListener());
      const response = await this._dataDb.getCollectionsByUser(localStorage.getItem('token'), localStorage.getItem('id'));
      if (response.status === 200) {
        this._renderCollectionsByUser(response.data.data);
      }
    } catch (error) {
      if (error.response.data.data.message) {
        errorFetch(error.response.data.data.message, async (token) => {
          try {
            const response = await this._authDb.refreshToken({ token });
            if (response.status === 200) {
              localStorage.setItem('token', response.data.data.token);
              localStorage.setItem('refreshToken', response.data.data.refreshToken);
              await this._getAllCollectionsHandler();
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
      // swalError('Oops... Something Error');
    } finally {
      setTimeout(() => {
        closeLoader(this._view.loaderListener());
      }, 500);
    }
  }

  async _generateCityDropdownHandler() {
    try {
      const responseCity = await this._dataDb.getCities(localStorage.getItem('token'));
      console.log(responseCity);
      this._renderCities(responseCity.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  _renderCollectionsByUser(items) {
    this._view.showCollectionsByUser(items);
  }

  _addCollectionHandler() {
    this._view.collectionFormListener(async (formData) => {
      if (formData.tanggal.value.length > 0 && formData.waktu.value.length > 0
        && formData.total_minyak.value.length > 0
        && formData.pesan.value.length > 0 && formData.id_kota.value.length > 0
        && formData.alamat.value.length > 0) {
        if (formData.total_minyak.value < 1) {
          zeroValueHandler(formData.total_minyak);
          return;
        }
        await this._postCollectionHandler(formData, localStorage.getItem('token'));
      } else {
        emptyFormHandler(
          formData.tanggal,
          formData.waktu,
          formData.total_minyak,
          formData.id_kota,
          formData.pesan,
          formData.alamat,
        );
      }
    });
  }

  async _postCollectionHandler(formData, token) {
    try {
      const response = await this._dataDb.postColletion({
        tanggal: formData.tanggal.value,
        waktu: formData.waktu.value,
        total_minyak: formData.total_minyak.value,
        pesan: formData.pesan.value,
        id_kota: formData.id_kota.value,
        alamat: formData.alamat.value,

      }, token);
      if (response.status === 200) {
        await swalConfirm(`${response.data.message}`, '');
        resetFormValue(formData);
      }
    } catch (error) {
      await swalError(`${error.response.data.message}`);
    }
  }
}
export default UserHistoryPresenter;
