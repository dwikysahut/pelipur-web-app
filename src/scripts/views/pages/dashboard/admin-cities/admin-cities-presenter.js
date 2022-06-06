/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
// import FormEventChangeHandler from '../../../../utils/form-event-change-handler';
import FormEventChangeHandler from '../../../../utils/form-event-change-handler';
import {
  closeLoader, emptyFormHandler, openLoader, swalConfirm, swalConfirmation, swalError,
} from '../../../../utils/function-helper';

class AdminCitiesPresenter {
  constructor({ view, dataDb }) {
    this._view = view;
    this._dataDb = dataDb;
    this._showAllData();
    this._formCollectionEventChangeHandler();
    this._submitButtonHandler();
  }

  _formCollectionEventChangeHandler() {
    this._view.getFormListener((formData) => {
      console.log(formData);
      FormEventChangeHandler.init(formData);
    });
  }

  async _showAllData() {
    try {
      const response = await this._dataDb.getCities(localStorage.getItem('token'));
      this._renderData(response.data.data);
    } catch (error) {
      swalError('Ooops Something wrong', '#/');
    }
  }

  _submitButtonHandler() {
    this._view.submitButtonListener(async ({ nameForm }) => {
      await this._postCityHandler(nameForm);
    });
  }

  async _postCityHandler(nameForm) {
    if (nameForm.value !== '') {
      try {
        //   openLoader()
        const response = await this._dataDb.postCity(localStorage.getItem('token'), { kota: nameForm.value });
        if (response.status === 200) {
          swalConfirm('Data berhasil ditambahkan', '');
          nameForm.value = '';
          this._showAllData();
          //   closeLoader();
        }
      } catch (error) {
        swalError('Oops.. Something Wrong', '');
      }
    } else {
      emptyFormHandler(nameForm);
    }
  }

  _renderData(data) {
    this._view.showAllData(data);
    this._deleteActionHandler();
  }

  _deleteActionHandler() {
    this._view.deleteCityListener((deleteButtons) => {
      deleteButtons.forEach((btn) => {
        console.log(btn);
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          swalConfirmation('Yakin untuk Menghapus', 'Data berhasil Dihapus', async () => {
            await this._deleteCity(e.target.dataset.id);
          });
        });
      });
    });
  }

  async _deleteCity(id) {
    try {
      const response = await this._dataDb.deleteCity(localStorage.getItem('token'), id);
      if (response.status === 200) {
        swalConfirm('Delete Berhasil');
        this._showAllData();
      }
    } catch (error) {
      swalError('Oops.. Something Wrong', '');
    }
  }
}
export default AdminCitiesPresenter;
