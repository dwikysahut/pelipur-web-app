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
          width:80%;
          margin: 0 auto 70px;
          display:grid;
          grid-template-columns:1fr;
          grid-template-areas:  "title"
                                "image"
                                "desc";
          padding:10px;
          box-sizing:boreder-box;
          box-shadow: 0 4px 8px 0 rgba(2, 56, 36, 0.2);
        }

        .ket-gambar{
          width:60%;
        }

        h2 {
          margin: 20px 0 30px;
          font-size: 23px;
          font-weight: 500;
          text-align: center;
        }
    
        .keterangan-bisnis .ket-bisnis p{
          font-size: 15px;
          text-align: justify;
          line-height: 1.8;
        }

        .keterangan-bisnis .ket-bisnis{
          width:100%;
          box-sizing:border-box;
        }

        .keterangan-bisnis .ket-gambar{
          width:100%;
          box-sizing:border-box;
        }

        .judul-bisnis {
          grid-area: title;
        }

        .ket-bisnis {
          grid-area: desc;
        }

        .ket-gambar {
          grid-area: image;
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
              column-gap: 30px;
              padding:20px;
              box-sizing:border-box;
          }

          .keterangan-bisnis .ket-bisnis p{
            margin-top: 0;
          }
        }
      </style>

      <div class= "keterangan-bisnis">
        <div class="judul-bisnis"><h2>Bisnis</h2></div>
        <div 
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          class ="ket-bisnis">
          <p>Saat ini Pelipur fokus pada pengolahan limbah minyak jelantah yang nantinya limbah tersebut bisa dijual kepada kami. Tentunya ini merupakan peluang untuk menambah penghasilan terutama untuk ibu rumah tangga, rumah makan mau pun pedagang. Kami bekerjasama dengan perusahaan yang berpengalaman untuk mengelola limbah tersebut menjadi Biodiesel. Kami pun membuka program kerjasama dengan pihak mana pun terkait pengumpulan dan pengolahan limbah minyak. Kami berharap dengan program kerjasama tersebut akan memberikan dampak yang besar terhadap pencegahan pencemaran lingkungan yang dihasilkan limbah minyak.
          </p>
        </div>
        <div class = "ket-gambar">
          <img src ="./images/heros/bisnis.jpg">
        </div>
      </div>
    `;
  }
}

customElements.define('info-bisnis', InfoBisnis);
