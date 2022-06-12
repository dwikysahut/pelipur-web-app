/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import '../component/bisnis/info-bisnis.js';
import '../component/bisnis/daftar.js';

const Bisnis = {
  async render() {
    return `
    
    <info-bisnis></info-bisnis>
    ${localStorage.getItem('token') ? '' : '<custom-daftar></custom-daftar>'}
    
    
    
    `;
  },

  async afterRender() {},
};

export default Bisnis;
