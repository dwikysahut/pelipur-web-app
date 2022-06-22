/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */
/* eslint-disable camelcase */
import { emptyTableTemplate, partnerByCityEmptyTemplate, partnerByCityItemTemplate, tableCollectionsTemplate } from '../../../templates/template-creator';

import '../../../component/aside-dashboard';
import '../../../component/loader-content';
import '../../../component/custom-loader';

/* eslint-disable class-methods-use-this */
class AdminListView {
  getTemplate() {
    return `
    <custom-loader></custom-loader>
    <div class="wrapper-dashboard">
      <aside-dashboard></aside-dashboard>
      <div class="dashboard-container">
        <div class="content">
          <h2 class="content__title">Daftar</h2>
          <div class="content__table">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Tanggal Penjemputan</th>
                  <th>Kode Transaksi</th>
                  <th>Email</th>
                  <th>Nama</th>
                  <th>No Telepon</th>
                  <th>Total Minyak</th>
                  <th class="th__space">Pesan</th>
                  <th class="th__space">Alamat</th>
                  <th>Kota</th>
                  <th>Mitra</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody id="tableContent">
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>     
              `;
  }

  loaderElementListener() {
    return document.querySelector('loader-content');
  }

  loaderListener() {
    return document.querySelector('custom-loader');
  }

  getVerifyFormInputListener(callback) {
    const inputEmailVerif = document.querySelector('#inputEmailVerif');
    const inputCodeVerif = document.querySelector('#inputCodeVerif');
    callback({ inputEmailVerif, inputCodeVerif });
  }

  collectionFormListener(callback) {
    document.querySelector('#submitCollection').addEventListener('click', async (e) => {
      e.preventDefault();
      this.getCollectionFormListener(callback);
    });
  }

  buttonGeneratePartnerListener(callback) {
    console.log(document.querySelectorAll('.btn.btn-outline-dark.generate'));
    callback(document.querySelectorAll('.btn.btn-outline-dark.generate'));
  }

  // partnerDropDownListener(callback) {
  //   const container = document.querySelectorAll('.partnersDropdown.none');
  //   callback(container);
  // }
  renderAllDropdownContainer(callback) {
    const containers = document.querySelectorAll('.partnersDropdown.none');
    containers.forEach((container) => {
      callback(container);
    });
  }

  showPartners(items, btnId, callback) {
    if (items.length > 0) {
      this.renderAllDropdownContainer((container) => {
        if (container.dataset.id === btnId) {
          container.classList.remove('none');
          container.innerHTML = '';
          items.forEach((item) => {
            container.innerHTML += partnerByCityItemTemplate(item);
          });
          callback(container);
        }
      });
    } else {
      this.renderAllDropdownContainer((container) => {
        if (container.dataset.id === btnId) {
          container.classList.remove('none');
          container.innerHTML = '';
          container.innerHTML += partnerByCityEmptyTemplate();
          callback(container);
        }
      });
    }
  }

  async showCollections(items, callback) {
    if (items.length > 0) {
      const container = document.querySelector('#tableContent');
      container.innerHTML = '';
      let i = 0;
      console.log(items);
      if (items.length < 1) {
        container.innerHTML += emptyTableTemplate();
      } else {
        items.forEach(async (item) => {
          const collectionElement = tableCollectionsTemplate(item);
          container.innerHTML += collectionElement;
          const buttonContainer = document.querySelectorAll('.btn__action');

          if (item.id_status === 1) {
            buttonContainer[i].innerHTML = `
              <button class="btn__accept" data-id="${item.id}" disabled>
              <i class="fa fa-check" aria-hidden="true"></i>
            </button>
            <button class="btn__reject" data-id="${item.id}"><i class="fa fa-times" aria-hidden="true"></i></button>`;
          } else if (item.id_status === 2) {
            buttonContainer[i].innerHTML = `
            <button class="btn btn-warning btn-finish" data-id="${item.id}">Finish</button>`;
          } else if (item.id_status === 3) {
            buttonContainer[i].innerHTML = `
            <button class="btn btn-outline-danger"  disabled>Rejected</button>`;
          } else {
            buttonContainer[i].innerHTML = `
            <button class="btn btn-outline-success" disabled>Completed</button>`;
          }
          i += 1;
        });
        callback();
      }
    }
  }

  acceptCollectionListener(callback) {
    callback(document.querySelectorAll('.btn__accept'));
  }

  rejectCollectionListener(callback) {
    callback(document.querySelectorAll('.btn__reject'));
  }

  finishCollectionListener(callback) {
    callback(document.querySelectorAll('.btn.btn-warning.btn-finish'));
  }
}

export default AdminListView;
