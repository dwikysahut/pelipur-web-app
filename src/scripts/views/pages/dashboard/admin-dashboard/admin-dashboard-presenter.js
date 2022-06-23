/* eslint-disable no-new */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
// import FormEventChangeHandler from '../../../../utils/form-event-change-handler';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from 'chart.js';
import { swalError } from '../../../../utils/function-helper';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
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
          label: 'Total Minyak',
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
      console.log(error);
      // swalError('Ooops Something wrong', '#/');
    }
  }

  _renderData(data) {
    this._view.showAllData(data);
  }
}
export default AdminDashboardPresenter;
