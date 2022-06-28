import '../../component/bisnis/info-bisnis';
import '../../component/bisnis/daftar';
import { dataDashboardTemplate } from '../../templates/template-creator';
/* eslint-disable class-methods-use-this */
class BisnisView {
  getTemplate() {
    return `
    <div class="business-wrapper">
        <info-bisnis></info-bisnis>
        <div class="content__card business-item">
        </div>
    </div>
    ${localStorage.getItem('token') ? '' : '<custom-daftar></custom-daftar>'}
    `;
  }

  showAllData(data) {
    console.log(data);
    document.querySelector('.content__card').innerHTML += dataDashboardTemplate(data);
  }
}
export default BisnisView;
