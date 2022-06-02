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

  showCollections(items, callback) {
    if (items.length > 0) {
      const container = document.querySelector('#tableContent');
      let i = 0;
      items.forEach((item) => {
        const cityElement = tableCollectionsTemplate(item);
        container.innerHTML += cityElement;
        const buttonContainer = document.querySelectorAll('.btn__action');
        if (item.id_status === 1) {
          const btn_accept = document.createElement('button');
          btn_accept.classList.add('btn__accept');
          btn_accept.setAttribute('id', item.id);
          btn_accept.addEventListener('click', (e) => {
            e.stopPropagation();

            //   e.preventDefault();
            console.log(e.target);
          }, false);
          const btn_reject = document.createElement('button');
          btn_reject.classList.add('btn__reject');
          btn_reject.innerHTML = `<img
          src="icons/close_white_18dp.svg"
            alt="Tolak"
          />`;

          console.log(btn_accept);
          btn_reject.addEventListener('click', () => {
            //   e.preventDefault();
            console.log('asdads');
          });
          buttonContainer[i].append(btn_accept, btn_reject);
        }
        //   buttonContainer[i].innerHTML = `
        //       <button class="btn__accept" id="${item.id}">
        //       <img
        //         src="icons/done_white_18dp.svg"
        //         alt="Terima"
        //       />
        //     </button>
        //     <button class="btn__reject"><img
        //       src="icons/close_white_18dp.svg"
        //       alt="Tolak"
        //     /></button>`;

        //   document.querySelector('.btn__accept').addEventListener('click', (e) => {
        //     console.log(e.target.id);
        //   });
        // } else if (item.id_status === 2) {
        //   buttonContainer[i].innerHTML = `
        //     <button class="btn btn-warning">Finish</button>`;
        // } else if (item.id_status === 3) {
        //   buttonContainer[i].innerHTML = `
        //     <button class="btn btn-outline-danger" disabled>Rejected</button>`;
        // } else {
        //   buttonContainer[i].innerHTML = `
        //     <button class="btn btn-outline-success" disabled>Completed</button>`;
        // }
        i += 1;
      });
    }
  }
}

export default AdminListView;
