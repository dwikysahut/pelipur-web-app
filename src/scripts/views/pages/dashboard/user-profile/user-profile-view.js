import { categoryItemTemplate } from '../../../templates/template-creator';
import '../../../component/custom-loader';

/* eslint-disable class-methods-use-this */
class UserProfileView {
  getTemplate() {
    return `
    <custom-loader></custom-loader>
    <div class="wrapper-dashboard">
    <aside-user></aside-user>
    <div class="dashboard-container">
      <div class="content">
        <h2 class="content__title">Profil</h2>
        <form class="content__form">
          <div class="content__form-item list">
            <label for="name">Nama</label>
            <input type="text" id="nameProfile" name="nameProfile" required />
          </div>
          <div class="content__form-item list__small">
            <label for="number">No. Telepon</label>
            <input type="tel" id="numberProfile" name="numberProfile" required />
            <div></div>
            <span id="alertPhoneProfile" class="hint danger">Input Number Only</span>
          </div>
          <div class="content__form-item list__small">
            <label for="detail">Keterangan</label>
            <td>
              <select id="descProfile" name="descProfile">
               
              </select>
            </td>
          </div>
          <div class="content__form-item list">
            <label for="email">Email</label>
            <input type="email" id="emailProfile" name="emailProfile" disabled required />
          </div>
          <div class="content__form-item">
            <label for="address">Alamat</label>
            <textarea
              name="addressProfile"
              id="addressProfile"
              cols="12"
              rows="2"
              required
            ></textarea>
          </div>
          <div class="content__form-item list">
            <label for="password">Ubah Password</label>
            <input type="password" id="passwordProfile" name="passwordProfile" required />
          </div>
          <div class="btn__form">
            <button
              type="submit"
              form="content_form"
              value="Submit"
              class="btn__update"
              id="submitProfile"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
              `;
  }

  profileFormInputListener(callback) {
    document.querySelector('#submitProfile').addEventListener('click', (e) => {
      e.preventDefault();
      this.getProfileFormInputListener(callback);
    });
  }

  loaderListener() {
    return document.querySelector('custom-loader');
  }

  getProfileFormInputListener(callback) {
    const inputNameProfile = document.querySelector('#nameProfile');
    console.log(inputNameProfile);
    const inputNumberProfile = document.querySelector('#numberProfile');
    const inputDescProfile = document.querySelector('#descProfile');
    const inputEmailProfile = document.querySelector('#emailProfile');
    const inputAddressProfile = document.querySelector('#addressProfile');
    const inputPasswordProfile = document.querySelector('#passwordProfile');
    const formData = {
      name: inputNameProfile,
      number: inputNumberProfile,
      desc: inputDescProfile,
      email: inputEmailProfile,
      address: inputAddressProfile,
      password: inputPasswordProfile,
    };
    // inputAddressProfile.addEventListener('keyup',()=>{
    //   console.log('s')
    // })
    callback(formData);
  }

  generateCategoriesDropdownListener(callback) {
    callback(document.querySelector('#descProfile'));
  }

  alertPhoneProfileListener() {
    return document.querySelector('#alertPhoneProfile');
  }

  showCategories(items, recentId) {
    const container = document.querySelector('#descProfile');
    items.forEach((item) => {
      const categoryElement = categoryItemTemplate(item, recentId);
      console.log(categoryElement);
      container.innerHTML += categoryElement;
    });
  }
}

export default UserProfileView;
