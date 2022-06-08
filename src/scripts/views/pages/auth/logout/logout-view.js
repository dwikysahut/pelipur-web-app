// import { createMovieItemTemplate } from '../../templates/template-creator';
import '../../../component/custom-loader';
/* eslint-disable class-methods-use-this */
class LogoutView {
  getTemplate() {
    return `
    <custom-loader></custom-loader>
              `;
  }

  loaderListener() {
    return document.querySelector('custom-loader');
  }
}

export default LogoutView;
