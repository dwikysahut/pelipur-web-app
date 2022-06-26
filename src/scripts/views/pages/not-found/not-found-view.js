/* eslint-disable class-methods-use-this */
class NotFoundView {
  getTemplate() {
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
  }
}
export default NotFoundView;
