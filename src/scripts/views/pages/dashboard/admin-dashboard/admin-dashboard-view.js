import { dataDashboardTemplate } from '../../../templates/template-creator';
import '../../../component/aside-user';
import '../../../component/collection-chart';
/* eslint-disable class-methods-use-this */
class AdminDashboardView {
  getTemplate() {
    return `
    <div class="wrapper-dashboard">
    <aside-dashboard></aside-dashboard>
    <div class="dashboard-container">
      <div class="content">
        <h2 class="content__title">Dashboard</h2>
        <div class="content__card">

        </div>
        <collection-chart></collection-chart>
     
  
      
      </div>
      
    </div>
  </div>
              `;
  }

  showAllData(data) {
    console.log(data);
    document.querySelector('.content__card').innerHTML += dataDashboardTemplate(data);
  }

  getChartListener() {
    return document.getElementById('myChartTotal');
  }
}

export default AdminDashboardView;
