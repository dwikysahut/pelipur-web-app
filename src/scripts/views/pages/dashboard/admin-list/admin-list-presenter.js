/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import FormEventChangeHandler from '../../../../utils/form-event-change-handler';
import {
  emptyFormHandler, resetFormValue, swalConfirm, swalError, zeroValueHandler,
} from '../../../../utils/function-helper';

class AdminListPresenter {
  constructor({ view, dataDb }) {
    this._view = view;
    this._dataDb = dataDb;
    this._getAllCollectionsHandler();
    // this._generateCityDropdownHandler();
    // this._addCollectionHandler();
    // this._formCollectionEventChangeHandler();
  }

  // handler change collection form input
  _formCollectionEventChangeHandler() {
    this._view.getCollectionFormListener((formData) => {
      FormEventChangeHandler.init(formData);
    });
  }

  async _getAllCollectionsHandler() {
    const response = await this._dataDb.getAllCollections(localStorage.getItem('token'));
    this._renderCollections(response);
  }

  _renderCollections(response) {
    this._view.showCollections(response.data.data);
  }

  async _generateCityDropdownHandler() {
    try {
      const responseCity = await this._dataDb.getCities(localStorage.token);
      console.log(responseCity);
      this._renderCities(responseCity.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  _buttonActionHandler(type, data) {
    console.log(type);
  }

  _renderCities(items) {
    this._view.showCities(items, (type, data) => {
      this._buttonActionHandler(type, data);
    });
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
export default AdminListPresenter;
