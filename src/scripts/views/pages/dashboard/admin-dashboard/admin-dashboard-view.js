import { cityItemTemplate, dataDashboardTemplate } from '../../../templates/template-creator';
import '../../../component/aside-user';
/* eslint-disable class-methods-use-this */
class AdminDashboardView {
  getTemplate() {
    return `
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
}

export default AdminDashboardView;
