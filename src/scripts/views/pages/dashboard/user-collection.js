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
            <div class="btn__form">
              <button
                type="submit"
                form="content_form"
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

  async afterRender() {},
};

export default UserCollection;
