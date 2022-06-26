import '../../component/bisnis/info-bisnis';
import '../../component/bisnis/daftar';
/* eslint-disable class-methods-use-this */
class BisnisView {
  getTemplate() {
    return `
    <info-bisnis></info-bisnis>
    ${localStorage.getItem('token') ? '' : '<custom-daftar></custom-daftar>'}
    `;
  }
}
export default BisnisView;
