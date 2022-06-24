import {
  buttonSuspendTemplate, buttonUnSuspendTemplate, userDetailItemTemplate,
} from '../../../templates/template-creator';
import '../../../component/aside-dashboard';
import '../../../component/custom-loader';
/* eslint-disable class-methods-use-this */
class UserDetailViee {
  getTemplate() {
    return `
    <custom-loader></custom-loader>
    <div class="wrapper-dashboard">
    <aside-dashboard></aside-dashboard>
  
    <div class="dashboard-container">
      <div class="content">
      <div class="wrapper-detail">
        <h2 class="content__title">User Detail</h2>
        <div class="content__detail">
          
        </div>
        </div>
      </div>
    </div>
  </div>
              `;
  }

  loaderListener() {
    return document.querySelector('custom-loader');
  }

  showUserDetail(item, callback) {
    if (item) {
      const container = document.querySelector('.content__detail');
      container.innerHTML = '';
      container.innerHTML += userDetailItemTemplate(item);
      item.suspend === 0
        ? container.innerHTML += buttonSuspendTemplate(item.id)
        : container.innerHTML += buttonUnSuspendTemplate(item.id);

      document.querySelector('#suspendBtn').addEventListener('click', (e) => {
        callback(e.currentTarget.dataset.id, item.suspend);
      });
    }
  }
}

export default UserDetailViee;
