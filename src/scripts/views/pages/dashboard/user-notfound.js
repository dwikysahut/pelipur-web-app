import '../../component/aside-user';

const UserNotFound = {
  async render() {
    return `
    <div class="wrapper-dashboard">
      <aside-user></aside-user>
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

export default UserNotFound;
