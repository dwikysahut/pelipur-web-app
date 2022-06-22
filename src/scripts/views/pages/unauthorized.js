/* eslint-disable linebreak-style */
import { swalError } from '../../utils/function-helper';

const Unauthorized = {
  async render() {
    if (!localStorage.getItem('token')) {
      await swalError('Please Login First', '#/auth');
      return false;
    }
    return `
    <div class="wrapper-dashboard">
      <div class="dashboard-container">
        <div class="content">
          <div class="unauthorize">
            <img src="images/undraw_Cancel_re_pkdm.png" width="30%" alt="unauthorized image">
            <p>Tidak Memiliki Akses</p>
          </div>
        </div>
      </div>
    </div>

          `;
  },

  async afterRender() {},
};

export default Unauthorized;
