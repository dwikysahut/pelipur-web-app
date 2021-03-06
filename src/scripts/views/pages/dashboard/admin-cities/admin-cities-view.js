import { emptyTableTemplate, tableCityTemplate } from '../../../templates/template-creator';
import '../../../component/aside-dashboard';
import '../../../component/custom-loader';
/* eslint-disable class-methods-use-this */
class AdminCitiesView {
  getTemplate() {
    return `
    <custom-loader></custom-loader>
    <div class="wrapper-dashboard">
    <aside-dashboard></aside-dashboard>
    <div class="dashboard-container">
      <div class="content">
        <h2 class="content__title">Kota</h2>
        <form class="content__form" id="content_form">
          <div class="content__form-item list">
            <label for="name">Nama Kota</label>
            <input type="text" id="cityNameForm" name="cityNameForm" required />
          </div>
          <div class="btn__form">
            <button type="submit" value="Submit" id="submitCityButton" class="btn__save">
              Tambah
            </button>
            <button type="submit" value="Submit" id="editCityButton" class="btn__update">
            Edit
            </button>
          </div>
        </form>
        <h2 class="content__title list">Daftar Kota</h2>
        <div class="content__table-cities">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID Kota</th>
                <th>Nama Kota</th>
                <th class="action-column">Aksi</th>
              </tr>
            </thead>
            <tbody class="content-table">
           
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>      
              `;
  }

  getFormListener(callback) {
    callback({ nameForm: document.querySelector('#cityNameForm') });
  }

  getEditButtonFormListener() {
    return document.querySelector('#editCityButton');
  }

  loaderListener() {
    return document.querySelector('custom-loader');
  }

  submitButtonListener(callback) {
    document.querySelector('#submitCityButton').addEventListener('click', (e) => {
      e.preventDefault();
      this.getFormListener(callback);
    });
  }

  scrollToTop(callback) {
    callback(document.querySelector('.content'));
  }

  showAllData(items) {
    const itemContainer = document.querySelector('.content-table');
    itemContainer.innerHTML = '';
    if (items.length < 1) {
      itemContainer.innerHTML += emptyTableTemplate();
    } else {
      items.forEach((item) => {
        itemContainer.innerHTML += tableCityTemplate(item);
      });
    }
  }

  editCityListener(callback) {
    callback(document.querySelectorAll('.btn__update.city'));
  }

  getEditFormListener() {
    return document.querySelector('#cityNameForm');
  }

  deleteCityListener(callback) {
    callback(document.querySelectorAll('.btn__delete.city'));
  }
}

export default AdminCitiesView;
