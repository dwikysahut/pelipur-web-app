/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */

import {
  closeLoader,
  emptyFormHandler,
  openLoader,
  resetFormValue,
  swalConfirm,
  swalConfirmation,
  swalError,
  zeroValueHandler,
} from '../../../../utils/function-helper';

class AdminListPresenter {
  constructor({ view, dataDb }) {
    this._view = view;
    this._dataDb = dataDb;
    this._getAllCollectionsHandler();
  }

  _buttonGeneratePartnerHandler() {
    this._view.buttonGeneratePartnerListener((btnElements) => {
      console.log(btnElements);
      btnElements.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          console.log(e.target.dataset.id);
          console.log(e.target.dataset.kota);

          try {
            btn.classList.add('none');
            openLoader(this._view.loaderElementListener());
            const response = await this._dataDb.getPartnersByCity(e.target.dataset.id, localStorage.getItem('token'));
            if (response.status === 200) {
              closeLoader(this._view.loaderElementListener());
              this._renderPartnersDropdown(response.data.data, e.target.dataset.id);
            }
          } catch (error) {
            btn.classList.remove('none');
          }
        });
      });
    });
  }

  async _getAllCollectionsHandler() {
    try {
      openLoader(this._view.loaderListener());
      const response = await this._dataDb.getAllCollections(localStorage.getItem('token'));
      console.log(response);
      if (response.status === 200) {
        this._renderCollections(response.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      closeLoader(this._view.loaderListener());
    }
  }

  _renderCollections(response) {
    this._view.showCollections(response, async () => {});
    this._buttonGeneratePartnerHandler();

    this._rejectActionHandler();
    this._finishActionHandler();
  }

  _renderPartnersDropdown(data, datasetId) {
    this._view.showPartners(data, datasetId, (element) => {
      this._acceptActionHandler(element, datasetId);
    });
  }

  _acceptActionHandler(selectElement, datasetId) {
    if (selectElement.value !== '') {
      this._view.acceptCollectionListener((accElements) => {
        accElements.forEach((element) => {
          if (element.dataset.id === datasetId) {
            element.removeAttribute('disabled');
          }
          console.log(element);
          element.addEventListener('click', async (e) => {
            e.preventDefault();
            swalConfirmation('Yakin untuk Melanjutkan', 'Data sudah disetujui', async () => {
              try {
                await this._acceptCollectionHandler(selectElement, e.target.dataset.id);
              } catch (error) {
                console.log(error);
              }
            });
          });
        });
      });
    }
  }

  _rejectActionHandler() {
    this._view.rejectCollectionListener((rejectElements) => {
      rejectElements.forEach((element) => {
        console.log(element);
        element.addEventListener('click', async (e) => {
          e.preventDefault();
          swalConfirmation('Yakin untuk Menolak', 'Data berhasil Ditolak', async () => {
            try {
              await this._rejectCollectionHandler(e.target.dataset.id);
            } catch (error) {
              console.log(error);
            }
          });
        });
      });
    });
  }

  _finishActionHandler() {
    this._view.finishCollectionListener((accElements) => {
      accElements.forEach((element) => {
        console.log(element);
        element.addEventListener('click', async (e) => {
          e.preventDefault();
          swalConfirmation('Yakin untuk Melanjutkan', 'Pengumpulan selesai', async () => {
            try {
              await this._finishCollectionHandler(e.target.dataset.id);
            } catch (error) {
              console.log(error);
            }
          });
        });
      });
    });
  }

  async _acceptCollectionHandler(selectElement, dataId) {
    try {
      console.log(dataId);
      const response = await this._dataDb.confirmCollection(localStorage.getItem('token'), { id_mitra: selectElement.value, id_status: 2 }, dataId);
      if (response.status === 200) {
        swalConfirm('Pengajuan Berhasil Disetujui');
        this._getAllCollectionsHandler();
      }
    } catch (error) {
      swalError('Oops... Something Wrong');
    }
  }

  async _rejectCollectionHandler(dataId) {
    try {
      console.log(dataId);
      const response = await this._dataDb.putCollection(localStorage.getItem('token'), { id_status: 3 }, dataId);
      if (response.status === 200) {
        swalConfirm('Pengajuan Telah Ditolak');
        this._getAllCollectionsHandler();
      }
    } catch (error) {
      swalError('Oops... Something Wrong');
    }
  }

  async _finishCollectionHandler(dataId) {
    try {
      console.log(dataId);
      const response = await this._dataDb.putCollection(localStorage.getItem('token'), { id_status: 4 }, dataId);
      if (response.status === 200) {
        swalConfirm('Pengumpulan minyak Selesai');
        this._getAllCollectionsHandler();
      }
    } catch (error) {
      swalError('Oops... Something Wrong');
    }
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
