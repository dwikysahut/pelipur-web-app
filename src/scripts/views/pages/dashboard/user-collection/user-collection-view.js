import { cityItemTemplate } from '../../../templates/template-creator';
import '../../../component/aside-user';
/* eslint-disable class-methods-use-this */
class UserCollectionView {
  getTemplate() {
    return `
      <div class="wrapper-dashboard">
      <aside-user></aside-user>
    
      <div class="dashboard-container">
        <div class="content">
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
                class="btn__save"
                >
                  Simpan sebagai template
                </button>
                <button
                type="submit"
                form="content_form"
                id='useTemplateCollection'
                value="Submit"
                class="btn__last"
                >
                  Gunakan data terakhir
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
      </div>
    </div>
              `;
  }

  collectionFormListener(callback) {
    document.querySelector('#submitCollection').addEventListener('click', async (e) => {
      e.preventDefault();
      this.getCollectionFormListener(callback);
    });
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
