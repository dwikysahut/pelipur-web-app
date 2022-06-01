/* eslint-disable no-empty-function */
import '../../component/aside-user';

const Profile = {
  async render() {
    return `
    <div class="wrapper-dashboard">
      <aside-user></aside-user>
      <div class="dashboard-container">
        <div class="content">
          <h2 class="content__title">Profil</h2>
          <form class="content__form">
            <div class="content__form-item list">
              <label for="name">Nama</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="content__form-item list__small">
              <label for="number">No. Telepon</label>
              <input type="number" id="number" name="number" required />
            </div>
            <div class="content__form-item list__small">
              <label for="detail">Keterangan</label>
              <td>
                <select id="detail" name="detail">
                  <option value="mitra1">Ibu Rumah Tangga</option>
                  <option value="mitra2">Pabrik</option>
                  <option value="mitra2">Rumah Makan</option>
                </select>
              </td>
            </div>
            <div class="content__form-item list">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" disabled required />
            </div>
            <div class="content__form-item">
              <label for="address">Alamat</label>
              <textarea
                name="address"
                id="address"
                cols="12"
                rows="2"
                required
              ></textarea>
            </div>
            <div class="content__form-item list">
              <label for="password">Ubah Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div class="btn__form">
              <button
                type="submit"
                form="content_form"
                value="Submit"
                class="btn__update"
              >
                Edit
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

export default Profile;
