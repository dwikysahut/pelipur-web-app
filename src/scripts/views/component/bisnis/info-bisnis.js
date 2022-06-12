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
      margin: 70px auto;
      display:grid;
      grid-template-columns:1fr;
      gap: 10px;
      grid-template-areas: "title"
                       "image"
                       "desc"
                       ;
      align-items: center;
      padding:10px;
      box-sizing:boreder-box;
      box-shadow: 0 4px 8px 0 rgba(2, 56, 36, 0.2);
    }

    .ket-gambar{
      width:60%;
    }

    h2 {
      font-weight: 500;
      text-align: center;
    }

    .keterangan-bisnis .ket-bisnis{
      width:100%;
      padding:5px;
      box-sizing:border-box;
    }

    .keterangan-bisnis .ket-gambar{
      width:100%;
      padding:5px;
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
      width:96%;
      max-height:400px;

    }

    @media screen and (min-width:1000px){
     .keterangan-bisnis{
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-template-areas: "title title"
                            "desc image";
        gap: 10px;
        padding:20px;
        box-sizing:border-box;
     }

     .keterangan-bisnis .ket-bisnis p{
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 13; /* number of lines to show */
        -webkit-box-orient: vertical;
     }
    }
    </style>


        <div class= "keterangan-bisnis">
        <div class="judul-bisnis"><h2>Bisnis</h2></div>
          <div 
          data-aos="zoom-in-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
           class ="ket-bisnis">
            <p>Pelipur hadir untuk memberikan solusi dalam hal Pengelolaan Limbah Ramah Lingkungan. Untuk saat ini kami fokus pada pengolahan limbah minyak, yang mana nantinya limbah minyak jelantah tersebut bisa dijual kepada kami. Tentunya ini merupakan peluang untuk menambah penghasilan bagi para pelaku usaha seperti restoran, rumah makan, tukang gorengan, warung pecel, umkm, mau pun bagi ibu rumah tangga yang rutin memasak untuk keperluan sehari-hari. Limbah Minyak Jelantah yang dijual kepada kami akan diproses menjadi biodiesel. Dalam hal pengelolaan minyak jelantah menjadi biodiesel kami bekerjasama dengan beberapa perusahaan yang sudah sangat berpengalaman. Kami pun membuka program kerjasama dengan pihak manapun terkait pengumpulan dan pengolahan limbah minyak jelantah ini. Kami berharap dengan program kerjasama tersebut maka akan memberikan dampak yang besar terhadap pencegahan pencemaran lingkungan yang dihasilkan limbah minyak.
            </p>
          </div>
          <div 
          data-aos="zoom-in-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false" 
          class = "ket-gambar">
            <img src ="./images/heros/bisnis.jpg">
          </div>
        </div>
        
        `;
  }
}

customElements.define('info-bisnis', InfoBisnis);
