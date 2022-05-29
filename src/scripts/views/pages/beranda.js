import data from '../../../DATA.json';

const Beranda = {
  async render() {
    return `
    <style>
    h2{
      color:red;
      padding:20px;
    }
    </style>

        <h2>beranda</h2>
        <h3>Berita</h3>
        `;
  },

  async afterRender() {},
};

export default Beranda;
