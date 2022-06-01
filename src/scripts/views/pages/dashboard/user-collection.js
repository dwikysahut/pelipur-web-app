/* eslint-disable no-underscore-dangle */
/* eslint-disable no-empty-function */

import CollectionDbSource from '../../../data/collectiondb-source';
import { emptyFormHandler } from '../../../utils/function-helper';
import '../../component/aside-user';

const UserCollection = {
  async render() {
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
              <input type="number" id="number" name="number" required />
              <label for="liter">/ Liter</label>
            </div>
            <div class="content__form-item">
              <label for="message">Pesan</label>
              <input type="text" id="message" name="pesan" required />
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
            <div class="btn">
              <button
                type="submit"
                form="content_form"
                id='submitCollection'
                value="Submit"
                class="btn__update"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

          `;
  },

  async afterRender() {
    const date = document.querySelector('#date');
    const time = document.querySelector('#time');
    const number = document.querySelector('#number');
    const message = document.querySelector('#message');
    const address = document.querySelector('#address');

    document.querySelector('#submitCollection').addEventListener('click', async (e) => {
      console.log('click');
      e.preventDefault();
      if (date.value.length > 0 && time.value.length > 0 && number.value.length > 0
         && message.value.length > 0 && address.value.length > 0) {
        const formData = {
          tanggal: date.value,
          waktu: time.value,
          total_minyak: number.value,
          pesan: message.value,
          id_kota: '2',
          alamat: address.value,
        };
        await this._postCollectionHandler(formData, localStorage.getItem('token'));
      } else {
        emptyFormHandler(date, time, number, message, address);
      }
    });
  },

  async _postCollectionHandler(formData, token) {
    try {
      const response = await CollectionDbSource.postColletion(formData, token);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};

export default UserCollection;
