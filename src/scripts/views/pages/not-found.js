import { swalError } from '../../utils/function-helper';

const NotFound = {
  async render() {
    // if (!localStorage.getItem('token')) {
    //   await swalError('Please Login First', '#/auth');
    //   return false;
    // }
    return `
    <div class="wrapper-dashboard">
      <div class="dashboard-container">
        <div class="content">
          <div class="notfound">
            <img src="images/not-found.png" alt="not-found">
            <p>halaman tidak ditemukan</p>
          </div>
        </div>
      </div>
    </div>

          `;
  },

  async afterRender() {},
};

export default NotFound;
