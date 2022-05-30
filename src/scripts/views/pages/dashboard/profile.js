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
      <div class="content__form-item">
        <label for="name">Nama</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div class="content__form-item">
        <label for="number">No. Telepon</label>
        <input type="number" id="number" name="number" required />
      </div>
      <div class="content__form-item">
        <label for="detail">Keterangan</label>
        <input type="text" id="detail" name="detail" required />
      </div>
      <div class="content__form-item">
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
      <div class="content__form-item">
        <label for="password">Ubah Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div class="btn">
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
