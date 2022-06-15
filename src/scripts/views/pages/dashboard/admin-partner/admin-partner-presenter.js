/* eslint-disable class-methods-use-this */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
// import FormEventChangeHandler from '../../../../utils/form-event-change-handler';
import CONFIG from '../../../../globals/config';
import FormEventChangeHandler from '../../../../utils/form-event-change-handler';
import {
  closeLoader, emptyFileHandler, emptyFormHandler, openLoader, swalConfirm, swalConfirmation, swalError,
} from '../../../../utils/function-helper';

class AdminPartnerPresenter {
  constructor({ view, dataDb }) {
    this._view = view;
    this._dataDb = dataDb;
    this._showAllData();
    this._formCollectionEventChangeHandler();
    this._submitButtonHandler();
    this._generateCitiesDropdown();
  }

  async _generateCitiesDropdown() {
    try {
      const response = await this._dataDb.getCities(localStorage.getItem('token'));
      if (response.status === 200) {
        this._renderCities(response.data.data);
      }
    } catch (error) {

    }

    const {
      selectText, checkboxes,
    } = this._view.dropdownElementListener();
    let expanded = false;
    this._view.selectBoxListener(() => {
      if (!expanded) {
        checkboxes.style.display = 'block';
        checkboxes.style.opacity = '1';
        expanded = true;
      } else {
        checkboxes.style.display = 'none';
        checkboxes.style.opacity = '0';
        expanded = false;
      }
    });
    const cbs = this._view.getCheckBoxItemListener();
    cbs.forEach((cb) => {
      cb.addEventListener('change', (e) => {
        if (e.target.checked) {
          console.log('sss');
          if (selectText.value.length < 1) {
            selectText.value += e.target.value;
          } else {
            selectText.value += `,${e.target.value}`;
          }
          selectText.classList.remove('danger');
        } else {
          selectText.value = selectText.value
            .replace(`${e.target.value}`, '');
          selectText.value = selectText.value
            .replace(/^,|,$/g, '');
          selectText.value = selectText.value
            .replace(/,+/g, ',');
        }
        console.log(JSON.stringify(selectText.value.toString().split(',')));
      });
    });
    // selectBox.addEventListener('click', this._showCheckboxes(expanded, checkboxes));
  }

  _renderCities(data) {
    this._view.showCities(data);
  }

  _formCollectionEventChangeHandler() {
    this._view.getFormListener((formData) => {
      console.log(formData);
      FormEventChangeHandler.init(formData);
    });
  }

  async _showAllData() {
    try {
      const response = await this._dataDb.getAllPartners(localStorage.getItem('token'));
      //   response.data.data.kota_jangkauan = await JSON.parse(response.data.data.kota_jangkauan);
      console.log(response);
      if (response.status === 200) {
        this._renderData(response.data.data);
      }
    } catch (error) {
      console.log(error.message);
      // swalError('Ooops Something wrong', '#/');
    }
  }

  _submitButtonHandler() {
    // console.log(id);
    this._view.submitButtonListener(async ({
      nameForm, emailForm, addressForm, cityForm, imagePartner,
    }) => {
      const editBtn = this._view.getEditButtonFormListener();
      editBtn.style.display = 'none';
      await this._postPartnerHandler({
        nameForm, emailForm, addressForm, cityForm, imagePartner,
      });
    });
  }

  async _postPartnerHandler({
    nameForm, emailForm, addressForm, cityForm, imagePartner,
  }) {
    if (nameForm.value !== '' && emailForm.value !== '' && addressForm.value !== '' && cityForm.value !== '' && imagePartner.value !== '') {
      const formData = new FormData();

      formData.append('nama', nameForm.value);
      formData.append('alamat', addressForm.value);
      await formData.append('image', imagePartner.files[0]);
      formData.append('email', emailForm.value);
      formData.append('kota_jangkauan', JSON.stringify(cityForm.value.split(',')));

      try {
        //   openLoader()
        const response = await this._dataDb.postPartner(localStorage.getItem('token'), formData);
        if (response.status === 200) {
          swalConfirm('Data berhasil ditambahkan', '');
          nameForm.value = '';
          emailForm.value = '';
          addressForm.value = '';
          cityForm.value = '';
          imagePartner.value = '';
          this._showAllData();
          //   closeLoader();
        }
      } catch (error) {
        swalError('Oops.. Something Wrong', '');
      }
    } else {
      emptyFormHandler(nameForm, emailForm, addressForm, cityForm);
      emptyFileHandler(imagePartner);
    }
  }

  _renderData(data) {
    this._view.showAllData(data);
    this._deleteActionHandler();
    this._editActionHandler();
    this._modalImageHandler();
  }

  _deleteActionHandler() {
    this._view.deletePartnerListener((deleteButtons) => {
      deleteButtons.forEach((btn) => {
        // console.log(btn);
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          swalConfirmation('Yakin untuk Menghapus', '', async () => {
            await this._deletePartner(e.target.dataset.id);
          });
        });
      });
    });
  }

  _editActionHandler() {
    const form = this._view.getEditFormListener();

    this._view.editPartnerListener((editButtons) => {
      editButtons.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          try {
            // open loader
            const response = await this._dataDb.getPartnerById(localStorage.getItem('token'), e.target.dataset.id);
            form.nameForm.value = response.data.data.nama;
            form.emailForm.value = response.data.data.email;
            form.addressForm.value = response.data.data.alamat;
            form.cityForm.value = JSON.parse(response.data.data.kota_jangkauan).toString();
            form.nameForm.value = response.data.data.nama;
            console.log(JSON.parse(response.data.data.kota_jangkauan));

            const cbs = this._view.getCheckBoxItemListener();
            cbs.forEach(async (_, i) => {
              const contains = await JSON.parse(response.data.data.kota_jangkauan)
                .some((element) => {
                  if (cbs[i].value.indexOf(element) !== -1) {
                    return true;
                  }

                  return false;
                });
              if (contains) {
                console.log(`true${cbs[i].value}`);
                cbs[i].checked = true;
              } else {
                console.log('false');
                cbs[i].checked = false;
              }
            });

            // closeLoader
            this._editFormButtonHandler(
              form,
              e.target.dataset.id,
            );
            this._view.scrollToTop((container) => {
              container.scrollTo(0, 0);

              window.scrollTo(0, 0);
            });
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
      if (form.nameForm.value !== '' && form.emailForm.value !== '' && form.addressForm.value !== '' && form.cityForm.value !== '') {
        swalConfirmation('Data Sudah Benar ?', '', async () => {
          await this._editPartner(form, id);
          editBtn.style.display = 'none';
        });
      } else {
        emptyFormHandler(form.nameForm, form.emailForm, form.addressForm, form.cityForm);
        emptyFileHandler(form.imagePartner);
      }
    });
  }

  async _editPartner(form, id) {
    const formData = new FormData();

    formData.append('nama', form.nameForm.value);
    formData.append('alamat', form.addressForm.value);
    if (form.imagePartner.value !== '') {
      await formData.append('image', form.imagePartner.files[0]);
    }
    formData.append('email', form.emailForm.value);
    formData.append('kota_jangkauan', JSON.stringify(form.cityForm.value.split(',')));

    try {
      const response = await this._dataDb.putPartner(localStorage.getItem('token'), formData, id);
      if (response.status === 200) {
        // closeLoader
        swalConfirm('Data Berhasil Diupdate');
        form.nameForm.value = '';
        form.emailForm.value = '';
        form.addressForm.value = '';
        form.cityForm.value = '';
        form.imagePartner.value = '';
        await this._showAllData();
      }
    } catch (error) {
      console.log(error.message);
      swalConfirm('Oops.. Something Wrong');
    }
  }

  async _deletePartner(id) {
    try {
      const response = await this._dataDb.deletePartner(localStorage.getItem('token'), id);
      if (response.status === 200) {
        swalConfirm('Data Terhapus');
        await this._showAllData();
      }
    } catch (error) {
      swalError('Oops.. Something Wrong', '');
    }
  }

  _modalImageHandler() {
    // Get the image and insert it inside the modal - use its "alt" text as a caption

    this._view.getModalElementsListener(({
      modals, imgs, modalImg, captionText, span,
    }) => {
      imgs.forEach((img, i) => {
        img.addEventListener('click', () => {
          modals[i].style.display = 'block';
          modalImg[i].src = img.dataset.src;
          captionText[i].innerHTML = img.dataset.alt;
        });

        // Get the <span> element that closes the modal

        // When the user clicks on <span> (x), close the modal
        span[i].addEventListener('click', () => {
          modals[i].style.display = 'none';
        });
      });
    });
  }
}
export default AdminPartnerPresenter;
