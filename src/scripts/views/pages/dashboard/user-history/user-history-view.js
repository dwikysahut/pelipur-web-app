import { cityItemTemplate, emptyTableTemplate, tableHistoryTemplate } from '../../../templates/template-creator';
import '../../../component/aside-user';
import '../../../component/custom-loader';
/* eslint-disable class-methods-use-this */
class UserHistoryView {
  getTemplate() {
    return `
    <custom-loader></custom-loader>
    <div class="wrapper-dashboard">
    <aside-user></aside-user>
  
    <div class="dashboard-container">
      <div class="content">
        <h2 class="content__title">Riwayat</h2>
        <div class="content__table">
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th>Tanggal</th>
                <th>Kode Transaksi</th>
                <th>Estimasi Waktu</th>
                <th>Total Minyak</th>
                <th class="th__space">Pesan</th>
                <th>Kota</th>
                <th class="th__space">Alamat Tujuan</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="contentUserCollection">
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
              `;
  }

  showCollectionsByUser(items) {
    // console.log(items);
    const container = document.querySelector('#contentUserCollection');
    let i = 0;
    if (items.length < 1) {
      container.innerHTML += emptyTableTemplate();
    } else {
      items.forEach((item) => {
        const collectionElement = tableHistoryTemplate(item);
        container.innerHTML += collectionElement;
        const dataContainer = document.querySelectorAll('.data');

        if (item.id_status === 1) {
          dataContainer[i].innerHTML += ` <td><span class="status btn-dark">${item.status}</span></td>`;
        } else if (item.id_status === 2) {
          dataContainer[i].innerHTML += ` <td><span class="status btn__update">${item.status}</span></td>`;
        } else if (item.id_status === 3) {
          dataContainer[i].innerHTML += ` <td><span class="status btn__delete">${item.status}</span></td>`;
        } else {
          dataContainer[i].innerHTML += ` <td><span class="status success">${item.status}</span></td>`;
        }
        i += 1;
      });
    }
  }

  loaderListener() {
    return document.querySelector('custom-loader');
  }
}

export default UserHistoryView;
