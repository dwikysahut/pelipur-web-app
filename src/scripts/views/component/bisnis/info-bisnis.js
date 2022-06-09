/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable lines-between-class-members */
/* eslint-disable linebreak-style */
class InfoBisnis extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `

    <style>
    .keterangan-bisnis{
      width:80%;
      margin: 70px auto;
      display:grid;
      grid-template-columns:1fr;
      gap: 10px;
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

    .keterangan-bisnis .ket-bisnis p{
      font-family:'Poppins', sans-serif;
    }

    .keterangan-bisnis .ket-gambar{
      width:100%;
      padding:5px;
      box-sizing:border-box;
    }

    .ket-gambar img{
      width:96%;
      max-height:400px;
    }

    .daftar{
      width:60%;
      padding:20px;
      margin:10px auto;
      box-shadow: 0 4px 8px 0 rgba(2, 56, 36, 0.2);
      text-align:center;
      border-radius:5px;
      box-sizing:border-box;
    }

    button{
      width:100%;
      background-color:#005555;
      color:white;
      padding:10px;
      box-sizing:border-box;
      border-radius:5px;
      cursor: pointer;
      font-size: 15px;
      font-weight: 500;
      border: none;
      height: 44px;
      line-height: 10px;
    }

    @media screen and (min-width:600px){
     .keterangan-bisnis{
        display:grid;
        grid-template-columns:1fr 1fr;
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

       button{
      width:50%;
    }
    }
    </style>


        <div class= "keterangan-bisnis">
          <div class ="ket-bisnis">
            <h2>Bisnis</h2>
            <p>Pelipur hadir untuk memberikan solusi dalam hal Pengelolaan Limbah Ramah Lingkungan. Untuk saat ini kami fokus pada pengolahan limbah minyak, yang mana nantinya limbah minyak jelantah tersebut bisa dijual kepada kami. Tentunya ini merupakan peluang untuk menambah penghasilan bagi para pelaku usaha seperti restoran, rumah makan, tukang gorengan, warung pecel, umkm, mau pun bagi ibu rumah tangga yang rutin memasak untuk keperluan sehari-hari. Limbah Minyak Jelantah yang dijual kepada kami akan diproses menjadi biodiesel. Dalam hal pengelolaan minyak jelantah menjadi biodiesel kami bekerjasama dengan beberapa perusahaan yang sudah sangat berpengalaman. Kami pun membuka program kerjasama dengan pihak manapun terkait pengumpulan dan pengolahan limbah minyak jelantah ini. Kami berharap dengan program kerjasama tersebut maka akan memberikan dampak yang besar terhadap pencegahan pencemaran lingkungan yang dihasilkan limbah minyak.
            </p>
          </div>
          <div class = "ket-gambar">
            <img src ="./images/heros/bisnis.jpg">
          </div>
        </div>
      ${localStorage.getItem('token') ? '' : `<div class ="daftar">
      <h2> Mari Bergabung Bersama kami </h2>
      <button onClick="window.location.href='#/auth';">DAFTAR</button>
    </div>`

}
        
        `;
  }
}

customElements.define('info-bisnis', InfoBisnis);
