/* eslint-disable no-loop-func */
/* eslint-disable camelcase */
import { tableCollectionsTemplate } from '../../../templates/template-creator';

import '../../../component/aside-dashboard';

/* eslint-disable class-methods-use-this */
class AdminListView {
  getTemplate() {
    return `
    <div class="wrapper-dashboard">
      <aside-dashboard></aside-dashboard>
      <div class="dashboard-container">
        <div class="content">
          <h2 class="content__title">Daftar</h2>
          <div class="content__table">
            <table>
              <thead>
                <tr>
                  <th>Tanggal Penjemputan</th>
                  <th>Nama User</th>
                  <th>Total Minyak</th>
                  <th class="th__space">Pesan</th>
                  <th class="th__space">Alamat</th>
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

  verifyFormInputListener(callback) {
    document.querySelector('#submitVerify').addEventListener('click', (e) => {
      e.preventDefault();
      this.getVerifyFormInputListener(callback);
    });
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

  generateCityDropdownListener(callback) {
    callback(document.querySelector('#city'));
  }

  async showCollections(items, callback) {
    // items = [
    //   {
    //     tanggal: '2',
    //     nama_user: 'dwi',
    //     total_minyak: '2',
    //     pesan: 'sss',
    //     waktu: '20.00',
    //     alamat: 'malang',
    //     id_status: 1,
    //   },
    // ];

    if (items.length > 0) {
      const container = document.querySelector('#tableContent');
      container.innerHTML = '';
      let i = 0;
      console.log(items);

      items.forEach(async (item) => {
        const cityElement = tableCollectionsTemplate(item);
        container.innerHTML += cityElement;
        const buttonContainer = document.querySelectorAll('.btn__action');

        if (item.id_status === 1) {
          buttonContainer[i].innerHTML = `
              <button class="btn__accept" data-id="${item.id}">
              <img
                src="icons/done_white_18dp.svg"
                alt="Terima"
              />
            </button>
            <button class="btn__reject" data-id="${item.id}"><img
              src="icons/close_white_18dp.svg"
              alt="Tolak"
            /></button>`;
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
