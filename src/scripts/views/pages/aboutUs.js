/* eslint-disable no-empty-function */
/* eslint-disable import/extensions */
import '../component/aboutus/founder-aboutus.js';
import '../component/aboutus/visi-misi.js';
import '../component/aboutus/kritik-saran.js';

const AboutUs = {
  async render() {
    return `
        <founder-aboutus></founder-aboutus>
        <visi-misi></visi-misi>
        <kritik-saran></kritik-saran>
        `;
  },

  async afterRender() {},
};

export default AboutUs;
