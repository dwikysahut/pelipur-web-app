import '../../component/aboutus/founder-aboutus';
import '../../component/aboutus/visi-misi';
import '../../component/aboutus/kritik-saran';
/* eslint-disable class-methods-use-this */
class AboutUsView {
  getTemplate() {
    return `   
    <founder-aboutus></founder-aboutus>
    <visi-misi></visi-misi>
                `;
  }
}
export default AboutUsView;
