import '../../component/aside-dashboard';

const AdminNotFound = {
  async render() {
    return `
    <div class="wrapper-dashboard">
      <aside-dashboard></aside-dashboard>
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

export default AdminNotFound;
