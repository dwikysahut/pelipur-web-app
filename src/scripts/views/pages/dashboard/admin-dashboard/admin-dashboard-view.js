import { dataDashboardTemplate } from '../../../templates/template-creator';
import '../../../component/aside-user';
import '../../../component/custom-loader';
/* eslint-disable class-methods-use-this */
class AdminDashboardView {
  getTemplate() {
    return `
    <custom-loader></custom-loader>
    <div class="wrapper-dashboard">
      <aside-dashboard></aside-dashboard>
      <div class="dashboard-container">
        <div class="content">
          <h2 class="content__title">Dashboard</h2>
        </div>
      </div>
    </div>
              `;
  }

  showAllData(data) {
    console.log(data);
    document.querySelector('.content').innerHTML += dataDashboardTemplate(data);
  }

  loaderListener() {
    return document.querySelector('custom-loader');
  }
}

export default AdminDashboardView;
