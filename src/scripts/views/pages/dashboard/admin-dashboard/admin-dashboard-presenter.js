/* eslint-disable no-new */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
// import FormEventChangeHandler from '../../../../utils/form-event-change-handler';
import {
  Chart,
  SubTitle,
  LineElement,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,

} from 'chart.js';
import {
  swalError, closeLoader, errorFetch,
} from '../../../../utils/function-helper';

Chart.register(
  SubTitle,
  LineElement,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,

);

class AdminDashboardPresenter {
  constructor({ view, dataDb }) {
    this._view = view;
    this._dataDb = dataDb;
    this._showAllData();
    this._getChartData();
  }

  async _getChartData() {
    try {
      const response = await this._dataDb.getCollectionsByMonth();
      console.log(response);
      const labelsTotal = response.data.data.map((data) => data.month.toString().split('/'));
      const dataTotal = {
        labels: labelsTotal,
        datasets: [{
          label: 'Total Form Terkumpul',
          backgroundColor: 'rgb(6, 154, 142)',
          borderColor: 'rgb(6, 154, 142)',
          data: response.data.data.map((data) => data.count),
        }],
      };

      const configTotal = {
        type: 'line',
        data: dataTotal,
        options: {},
      };

      new Chart(
        this._view.getChartListener(),
        configTotal,
      );
    } catch (error) {
      console.log(error);
    }
  }

  async _showAllData() {
    try {
      const response = await this._dataDb.getAllDataCount(localStorage.getItem('token'));
      this._renderData(response.data.data);
    } catch (error) {
      // console.log(error);
      if (error.response.data.data.message) {
        errorFetch(error.response.data.data.message, async (token) => {
          try {
            const response = await this._authDb.refreshToken({ token });
            if (response.status === 200) {
              localStorage.setItem('token', response.data.data.token);
              localStorage.setItem('refreshToken', response.data.data.refreshToken);
              this._getAllCollectionsHandler();
            }
          } catch (errorToken) {
            // console.log(errorToken);
            if (errorToken.response.status === 403) { swalError('Session Expired, Please Login First', '#/logout'); }
          }
        });
      }
      // swalError('Ooops Something wrong', '#/');
    } finally {
      setTimeout(() => {
        closeLoader(this._view.loaderListener());
      }, 500);
    }
  }

  _renderData(data) {
    this._view.showAllData(data);
  }
}
export default AdminDashboardPresenter;
