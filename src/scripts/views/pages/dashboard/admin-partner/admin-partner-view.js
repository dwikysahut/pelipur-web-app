import { dropdownCityCheckBoxTemplate, emptyTableTemplate, tablePartnerTemplate } from '../../../templates/template-creator';
import '../../../component/aside-dashboard';
import '../../../component/custom-loader';
/* eslint-disable class-methods-use-this */
class AdminPartnerView {
  getTemplate() {
    return `
        <custom-loader></custom-loader>
        <div class="wrapper-dashboard">
          <aside-dashboard></aside-dashboard>
          <div class="dashboard-container">
            <div class="content">
              <h2 class="content__title">Mitra</h2>
              <form class="content__form" id="content_form">
                <div class="content__form-item list">
                  <label for="name">Nama</label>
                  <input type="text" id="namePartner" name="namePartner" required  />
                </div>
                <div class="content__form-item list">
                  <label for="email">Email</label>
                  <input type="email" id="emailPartner" name="emailPartner" required />
                </div>
                <div class="content__form-item">
                  <label for="selectCityDisplay">Jangkauan Kota</label>
                  <div class="multi-select">
                  <div class="select-box">
                    <input disabled id="selectCityDisplay"  onkeydown="return false" class="form-select" aria-label="Default select example" required value="">
                  </div>
                  <div id="checkBoxes">
                    <label for="one">
                      <input class="cb" type="checkbox" id="one" value="jakarta" />First checkbox</label>
                    <label for="two">
                      <input class="cb" type="checkbox" id="two" value="bogor" />Second checkbox</label>
                    <label for="three">
                      <input class="cb" type="checkbox" id="three" value="3" />Third checkbox</label>
                  </div>
                </div>
                </div>
                <div class="content__form-item">
                  <label for="addressPartner">Alamat</label>
                  <textarea
                    name="addressPartner"
                    id="addressPartner"
                    cols="15"
                    rows="2"
                    
                  ></textarea>
                </div>
                <div class="content__form-item-img">
                  <label for="imagePartner">Pilih Gambar</label>
                  <input type="file" id="imagePartner" name="imagePartner" accept="image/*">
                </div>
                <div class="btn__form">
                  <button type="submit" id="submitPartnerButton" value="Submit" class="btn__save">
                    Tambah
                  </button>
                  <button type="submit" id="editPartnerButton" value="Submit" class="btn__update">
                    Edit
                  </button>
                </div>
              </form>
              <h2 class="content__title list">Daftar Mitra</h2>
              <div class="content__table">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nama</th>
                      <th >Alamat</th>
                      <th>Email</th>
                      <th>Foto</th>
                      <th>Kota Jangkauan</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody class="content-table-partner">
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>   
      `;
  }

  getFormListener(callback) {
    callback({
      nameForm: document.querySelector('#namePartner'),
      emailForm: document.querySelector('#emailPartner'),
      addressForm: document.querySelector('#addressPartner'),
      cityForm: document.querySelector('#selectCityDisplay'),
      imagePartner: document.querySelector('#imagePartner'),

    });
  }

  loaderListener() {
    return document.querySelector('custom-loader');
  }

  getEditButtonFormListener() {
    return document.querySelector('#editPartnerButton');
  }

  submitButtonListener(callback) {
    document.querySelector('#submitPartnerButton').addEventListener('click', (e) => {
      e.preventDefault();
      this.getFormListener(callback);
    });
  }

  showAllData(items) {
    console.log(items);
    const itemContainer = document.querySelector('.content-table-partner');
    itemContainer.innerHTML = '';
    if (items.length < 1) {
      itemContainer.innerHTML += emptyTableTemplate();
    } else {
      items.forEach((item) => {
        itemContainer.innerHTML += tablePartnerTemplate(item);
      });
    }
  }

  editPartnerListener(callback) {
    callback(document.querySelectorAll('.btn__update.partner'));
  }

  scrollToTop(callback) {
    callback(document.querySelector('.content'));
  }

  getEditFormListener() {
    return {
      nameForm: document.querySelector('#namePartner'),
      emailForm: document.querySelector('#emailPartner'),
      addressForm: document.querySelector('#addressPartner'),
      cityForm: document.querySelector('#selectCityDisplay'),
      imagePartner: document.querySelector('#imagePartner'),

    };
  }

  deletePartnerListener(callback) {
    callback(document.querySelectorAll('.btn__delete.partner'));
  }

  dropdownElementListener() {
    return {
      selectText: document.querySelector('#selectCityDisplay'),
      checkboxes: document.getElementById('checkBoxes'),
    };
  }

  selectBoxListener(callback) {
    const selectBox = document.querySelector('.select-box');
    selectBox.addEventListener('click', callback);
  }

  getCheckBoxItemListener() {
    return document.querySelectorAll('.cb');
  }

  showCities(items) {
    const container = document.querySelector('#checkBoxes');
    container.innerHTML = '';
    items.forEach((item) => {
      container.innerHTML += dropdownCityCheckBoxTemplate(item);
    });
  }

  getModalElementsListener(callback) {
    const modals = document.querySelectorAll('.modal');
    const imgs = document.querySelectorAll('.img-partner');
    const modalImg = document.querySelectorAll('.modal-content');
    const captionText = document.querySelectorAll('.partner-caption');
    const span = document.querySelectorAll('.close');
    callback({
      modals, imgs, modalImg, captionText, span,
    });
  }
}

export default AdminPartnerView;
