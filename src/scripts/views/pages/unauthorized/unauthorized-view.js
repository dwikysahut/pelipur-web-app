/* eslint-disable class-methods-use-this */
class UnauthorizedView {
  getTemplate() {
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
  }
}
export default UnauthorizedView;
