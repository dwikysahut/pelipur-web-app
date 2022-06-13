/* eslint-disable no-empty-function */
import DataDbSource from '../../../data/datadb-source';
import '../../component/aside-dashboard';
import AdminPartnerPresenter from './admin-partner/admin-partner-presenter';
import AdminPartnerView from './admin-partner/admin-partner-view';

const view = new AdminPartnerView();
const Partner = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new AdminPartnerPresenter({ view, dataDb: DataDbSource });
    // let expanded = false;

    // const showCheckboxes = () => {
    //   const checkboxes = document.getElementById('checkBoxes');
    //   if (!expanded) {
    //     checkboxes.style.display = 'block';
    //     checkboxes.style.opacity = '1';
    //     expanded = true;
    //   } else {
    //     checkboxes.style.display = 'none';
    //     checkboxes.style.opacity = '0';
    //     expanded = false;
    //   }
    // };

    // const selectBox = document.querySelector('.select-box');
    // const cbs = document.querySelectorAll('.cb');
    // const selectText = document.querySelector('#selectCityDisplay');

    // selectBox.addEventListener('click', showCheckboxes);
    // cbs.forEach((cb) => {
    //   cb.addEventListener('change', (e) => {
    //     if (e.target.checked) {
    //       console.log('sss');
    //       if (selectText.value.length < 1) {
    //         selectText.value += e.target.value;
    //       } else {
    //         selectText.value += `,${e.target.value}`;
    //       }
    //     } else {
    //       console.log('non koma');
    //       selectText.value = selectText.value
    //         .replace(`${e.target.value}`, '');
    //       selectText.value = selectText.value
    //         .replace(/^,|,$/g, '');
    //       selectText.value = selectText.value
    //         .replace(/,+/g, ',');
    //     }
    //     console.log(JSON.stringify(selectText.value.toString().split(',')));
    //   });
    // });
  },
};

export default Partner;
