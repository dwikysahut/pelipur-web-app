/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import FormEventChangeHandler from '../../../../utils/form-event-change-handler';
import {
  emptyFormHandler, resetFormValue,
  swalConfirm, swalError, zeroValueHandler, openLoader, closeLoader, errorFetch,
} from '../../../../utils/function-helper';

class UserCollectionPresenter {
  constructor({ view, dataDb, formTemplateDb }) {
    this._view = view;
    this._dataDb = dataDb;
    this._formTemplateDb = formTemplateDb;
    this._generateCityDropdownHandler();
    this._addCollectionHandler();
    this._saveTemplateCollectionHandler();
    this._useTemplateCollectionHandler();
    this._formCollectionEventChangeHandler();
  }

  // handler change collection form input
  _formCollectionEventChangeHandler() {
    this._view.getCollectionFormListener((formData) => {
      FormEventChangeHandler.init(formData);
    });
  }

  _saveTemplateCollectionHandler() {
    this._view.saveTemplateListener(async (formData) => {
      const newData = {
        id: localStorage.getItem('id'),
        tanggal: formData.tanggal.value,
        total_minyak: formData.total_minyak.value,
        pesan: formData.pesan.value,
        alamat: formData.alamat.value,
        id_kota: formData.id_kota.value,
        waktu: formData.waktu.value,
      };
      try {
        await this._formTemplateDb.putTemplate(newData);
        swalConfirm('Save Template Successfully');
      } catch (error) {
        swalError('Failed to Save Template');
      }
    });
  }

  _useTemplateCollectionHandler() {
    this._view.useTemplateListener(async (formData) => {
      try {
        const response = await this._formTemplateDb.getTemplate(localStorage.getItem('id'));
        if (response !== null) {
          formData.tanggal.value = response.tanggal;
          formData.total_minyak.value = response.total_minyak;
          formData.pesan.value = response.pesan;
          formData.alamat.value = response.alamat;
          formData.id_kota.value = response.id_kota;
          formData.waktu.value = response.waktu;
        }
        swalConfirm('Use Recently Template Successfully');
      } catch (error) {
        swalError('No Template Found');
      }
    });
  }

  async _generateCityDropdownHandler() {
    try {
      openLoader(this._view.loaderListener());
      const responseCity = await this._dataDb.getCities(localStorage.getItem('token'));
      console.log(responseCity);
      this._renderCities(responseCity.data.data);
    } catch (error) {
      // console.log(error);
      if (error.response.data.data.message) {
        // errorFetch(error.response.data.data.message, async (token) => {
        //   try {
        //     const response = await this._authDb.refreshToken({ token });
        //     if (response.status === 200) {
        //       localStorage.setItem('token', response.data.data.token);
        //       localStorage.setItem('refreshToken', response.data.data.refreshToken);
        //       await this._generateCityDropdownHandler();
        //     }
        //   } catch (errorToken) {
        //     // console.log(errorToken);
        //     if (errorToken.response.status === 403) { swalError('Session Expired, Please Login First', '#/logout'); }
        //   }
        // });
      }
    } finally {
      setTimeout(() => {
        closeLoader(this._view.loaderListener());
      }, 500);
    }
  }

  _renderCities(items) {
    this._view.showCities(items);
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
        await swalConfirm('Form has been sent', '');
        resetFormValue(formData);
      } else if (response.status === 401) {
        await swalConfirm(response.data.message, '');
      }
    } catch (error) {
      console.log(error);
      await swalError(`${error.response.data.message}`);
    }
  }
}
export default UserCollectionPresenter;
