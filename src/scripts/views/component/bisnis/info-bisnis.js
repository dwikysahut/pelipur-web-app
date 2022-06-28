/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable lines-between-class-members */
/* eslint-disable linebreak-style */
class InfoBisnis extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <style>
        .keterangan-bisnis{
          width: 100%;
          margin: 0 auto 20px;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas:
              "title"
              "image"
              "desc";
          padding: 15px 0;
          gap: 20px;
          box-sizing: boreder-box;
          
        }
        info-bisnis{
          display: flex;
          justify-content: center;
          align-items: center;
          
        }

        .judul-bisnis h2 {
          font-size: 23px;
          font-weight: 500;
          text-align: center;
          margin-bottom: 0;
        }
    
        .keterangan-bisnis .ket-bisnis p{
          font-size: 15px;
          text-align: justify;
          line-height: 1.7;
        }

        .judul-bisnis {
          grid-area: title;
        }

        .ket-bisnis {
          grid-area: desc;
          width: 80%;
          margin: 0 auto;
        }

        .ket-gambar {
          grid-area: image;
          width: 80%;
          margin: 0 auto;
        }

        .ket-gambar img{
          width: 100%;
          max-height: 300px;
        }

      @media screen and (min-width:1000px){
        .keterangan-bisnis{
            display:grid;
            grid-template-columns:1fr 1fr;
            grid-template-areas: "title title"
                                "desc image";
            column-gap: 0;
            padding: 50px 70px 50px 130px;
            box-sizing:border-box;
        }

        .ket-bisnis {
          width: 100%;
        }
        }
      </style>

      <div class= "keterangan-bisnis">
        <div class="judul-bisnis"><h2 tabindex="0">Bisnis</h2></div>
        <div 
          data-aos="zoom-in-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          class ="ket-bisnis">
          <p tabindex="0">Saat ini Pelipur fokus pada pengolahan limbah minyak jelantah yang nantinya limbah tersebut bisa dijual kepada kami. Tentunya ini merupakan peluang untuk menambah penghasilan terutama untuk ibu rumah tangga, rumah makan mau pun pedagang.
          </p>
          <p tabindex="0">Kami bekerjasama dengan perusahaan yang berpengalaman untuk mengelola limbah tersebut menjadi Biodiesel. Kami pun membuka program kerjasama dengan pihak mana pun terkait pengumpulan dan pengolahan limbah minyak. Kami berharap dengan program kerjasama tersebut akan memberikan dampak yang besar terhadap pencegahan pencemaran lingkungan yang dihasilkan limbah minyak.</p>
        </div>
        <div 
          data-aos="zoom-in-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          class ="ket-gambar">
          <img class="lazyload"  tabindex="0" src ="./images/bisnis.jpg">
        </div>
      </div>
    `;
  }
}

customElements.define('info-bisnis', InfoBisnis);
