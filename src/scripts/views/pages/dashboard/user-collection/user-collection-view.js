import { cityItemTemplate } from '../../../templates/template-creator';
import '../../../component/aside-user';
import '../../../component/custom-loader';
import '../../../component/custom-join';

/* eslint-disable class-methods-use-this */
class UserCollectionView {
  getTemplate() {
    return `
      
      <div class="wrapper-dashboard">
      
    
      <div class="dashboard-container">
      <h2>Alur Pengumpulan Minyak Jelantah</h2>
      <div class="flow-container">
          <div class="flow-item">
              <img src="./images/flow/flow1.png" alt="gambar langkah daftar akun dan verifikasi" srcset="">
              <h4>Daftar Akun dan Verifikasi Akun</h4>
          </div>
          <div class="flow-item">
              <img src="./images/flow/flow2.png" alt="gambar langkah masuk ke halaman menu" srcset="">
              <h4>Masuk ke Halaman Menu</h4>
          </div>
          <div class="flow-item">
              <img src="./images/flow/flow3.png" alt="gambar langkah melakukan pengisian form" srcset="">
              <h4>Melakukan Pengisian Form</h4>
          </div>
          <div class="flow-item">
              <img src="./images/flow/flow4.png" alt="gambar langkah menunggu persetujuan admin" srcset="">
              <h4>Menunggu Persetujuan Admin</h4>
          </div>
          <div class="flow-item">
              <img src="./images/flow/flow5.png" alt="gambar langkah admin melakukan verifikasi" srcset="">
              <h4>Admin Melakukan Verifikasi untuk Keterjangkauan Lokasi</h4>
          </div>
          <div class="flow-item">
              <img src="./images/flow/flow6.png" alt="gambar langkah user menunggu petugas menuju lokasi mengambil minyak" srcset="">
              <h4>Menunggu Petugas Mengambil Minyak yang Sudah Disiapkan</h4>
          </div>  

      </div>
      ${!localStorage.getItem('token') ? '<custom-join></custom-join>' : `
      <custom-loader></custom-loader>
      <div class="content-collection ">
      
      <h2 class="content__title">Pengumpulan</h2>
      <form class="content__form">
        <div class="content__form-item-date">
          <label for="date">Tanggal</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div class="content__form-item-time">
          <label for="time">Estimasi Waktu</label>
          <input type="time" id="time" name="time" required />
        </div>
        <div class="content__form-item-total">
          <label for="total">Total Minyak</label>
          <div class="content__form-item-total-list">
            <input type="number" id="number" name="number" required />
            <label for="liter">/Liter</label>
          </div>
        </div>
        <div class="content__form-item">
          <label for="message">Pesan</label>
          <input type="text" id="message" name="pesan" required />
        </div>
        <div class="content__form-item-city">
          <label for="city">Kota</label>
          <select id="city" name="city">
            
          </select>
        </div>
        <div class="content__form-item">
          <label for="address">Alamat Tujuan</label>
          <textarea
            name="address"
            id="address"
            cols="12"
            rows="2"
            required
          ></textarea>
        </div>
        <div class="btn__collection">
          <div class="btn-item">
            <button
            type="submit"
            form="content_form"
            id='saveTemplateCollection'
            value="Submit"
            class="btn__save outline"
            >
              Simpan Template
            </button>
            <button
            type="submit"
            form="content_form"
            id='useTemplateCollection'
            value="Submit"
            class="btn__last"
            >
              Gunakan Template
            </button>
          </div>
          <div class="btn__form">
            <button
              type="submit"
              form="content_form"
              id='submitCollection'
              value="Submit"
              class="btn__save"
            >
              Kirim
            </button>
          </div>
        </div>
      </form>
    </div>
      `}
       
      </div>
    </div>
              `;
  }

  contentFormListener() {
    return document.querySelector('.content__form');
  }

  collectionFormListener(callback) {
    document.querySelector('#submitCollection').addEventListener('click', async (e) => {
      e.preventDefault();
      this.getCollectionFormListener(callback);
    });
  }

  saveTemplateListener(callback) {
    document.querySelector('#saveTemplateCollection').addEventListener('click', (e) => {
      e.preventDefault();
      this.getCollectionFormListener(callback);
    });
  }

  useTemplateListener(callback) {
    document.querySelector('#useTemplateCollection').addEventListener('click', (e) => {
      e.preventDefault();
      this.getCollectionFormListener(callback);
    });
  }

  loaderListener() {
    return document.querySelector('custom-loader');
  }

  getCollectionFormListener(callback) {
    const date = document.querySelector('#date');
    const time = document.querySelector('#time');
    const number = document.querySelector('#number');
    const message = document.querySelector('#message');
    const city = document.querySelector('#city');
    const address = document.querySelector('#address');
    const formData = {
      tanggal: date,
      waktu: time,
      total_minyak: number,
      pesan: message,
      id_kota: city,
      alamat: address,
    };
    callback(formData);
  }

  generateCityDropdownListener(callback) {
    callback(document.querySelector('#city'));
  }

  showCities(items) {
    const container = document.querySelector('#city');
    items.forEach((item) => {
      const cityElement = cityItemTemplate(item);
      console.log(cityElement);
      container.innerHTML += cityElement;
    });
  }
}

export default UserCollectionView;
