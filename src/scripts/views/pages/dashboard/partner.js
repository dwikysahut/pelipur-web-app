/* eslint-disable no-empty-function */
import '../../component/aside-dashboard';

const Partner = {
  async render() {
    return `
    <div class="wrapper-dashboard">
    <aside-dashboard></aside-dashboard>
    
    <div class="dashboard-container">
    <div class="content">
          <h2 class="content__title">Mitra</h2>
          <form class="content__form" id="content_form">
            <div class="content__form-item">
              <label for="name">Nama</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="content__form-item">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="content__form-item">
              <label for="number">Tanggal bergabung</label>
              <input type="date" required />
            </div>
            <div class="content__form-item">
              <label for="detail">Jangkauan Kota</label>
              <input type="text" id="detail" name="detail" required />
            </div>
            <div class="content__form-item">
              <label for="address">Alamat</label>
              <textarea
                name="address"
                id="address"
                cols="15"
                rows="2"
                required
              ></textarea>
            </div>
            <div class="btn">
              <button type="submit" value="Submit" class="btn__save">
                Simpan
              </button>
              <button type="submit" value="Submit" class="btn__update">
                Edit
              </button>
              <button type="submit" value="Submit" class="btn__delete">
                Hapus
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

export default Partner;
