/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
// import FormEventChangeHandler from '../../../../utils/form-event-change-handler';
import CONFIG from '../../../../globals/config';
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
    // console.log(id);
    this._view.submitButtonListener(async ({ nameForm }) => {
      const editBtn = this._view.getEditButtonFormListener();
      editBtn.style.display = 'none';
      await this._postCityHandler({ nameForm });
    });
  }

  async _postCityHandler({ nameForm }) {
    // console.log(id);

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
    this._editActionHandler();
  }

  _deleteActionHandler() {
    this._view.deleteCityListener((deleteButtons) => {
      deleteButtons.forEach((btn) => {
        // console.log(btn);
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          swalConfirmation('Yakin untuk Menghapus', '', async () => {
            await this._deleteCity(e.target.dataset.id);
          });
        });
      });
    });
  }

  _editActionHandler() {
    const form = this._view.getEditFormListener();
    this._view.editCityListener((editButtons) => {
      editButtons.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          try {
            // open loader
            const response = await this._dataDb.getCityById(localStorage.getItem('token'), e.target.dataset.id);
            form.value = response.data.data.kota;
            // closeLoader
            this._editFormButtonHandler(
              form,
              e.target.dataset.id,
            );
          } catch (error) {
            console.log(error);
          }
        });
      });
    });
  }

  _editFormButtonHandler(form, id) {
    // show edit submit button
    const editBtn = this._view.getEditButtonFormListener();
    editBtn.style.display = 'block';

    editBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      // openLoader
      swalConfirmation('Data Sudah Benar ?', '', async () => {
        await this._editCity(form, id);
        editBtn.style.display = 'none';
      });
    });
  }

  async _editCity(form, id) {
    try {
      const response = await this._dataDb.putCity(localStorage.getItem('token'), { kota: form.value }, id);
      if (response.status === 200) {
        // closeLoader
        swalConfirm('Data Berhasil Diupdate');
        await this._showAllData();
      }
    } catch (error) {
      console.log(error.message);
      swalConfirm('Oops.. Something Wrong');
    }
  }

  async _deleteCity(id) {
    try {
      const response = await this._dataDb.deleteCity(localStorage.getItem('token'), id);
      if (response.status === 200) {
        swalConfirm('Data Terhapus');
        await this._showAllData();
      }
    } catch (error) {
      swalError('Oops.. Something Wrong', '');
    }
  }
}
export default AdminCitiesPresenter;