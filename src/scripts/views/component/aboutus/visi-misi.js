/* eslint-disable linebreak-style */
class VisiMisi extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .visimisi{
          width:100%;
          background-color: #f4f4f5;
          padding: 20px 20px 60px;
          box-sizing:border-box;
         
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: center; 
          background-size: cover;
          margin:0 auto;
          background-image: url('./images/bg-visi-misi-small.jpg');
        }

        @media screen and (min-width:650px){
          .visimisi{
            background-image: url('./images/bg-visi-misi-large.jpg');
          }
         
        }

        .visimisi .visi{
          width:100%;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          padding:10px;
          box-sizing:border-box;
          border-radius:5px;
          margin-bottom:10px;
        }

        .visimisi .visi:hover{
          box-shadow: 0 4px 8px 0 rgba(2, 56, 36, 0.896);
        }

        .visimisi .visi p{
          font-size: 15px;
          text-align: justify;
          padding: 0 20px;
          line-height: 1.7;
        }

        .visimisi .misi{
          width:100%;
          background: rgba(0, 0, 0, 0.5);
          color:white;
          padding:10px;
          box-sizing:border-box;
          border-radius:5px;
          margin-bottom:10px;
        }

        .visimisi .misi:hover{
          box-shadow: 0 4px 8px 0 rgba(2, 56, 36, 0.896);
        }

        .visimisi .misi li{
          font-size: 15px;
          line-height: 1.7;
        }

        .visimisi > h2{
          color:white;
        }

        .visimisi h2{
          text-align:center;
          font-weight: 500;
          font-size: 23px;
          margin: 15px auto;
        }

        .visi h3, .misi h3 {
          text-align:center;
          font-size: 20px;
          font-weight: 500;
          margin: 15px 0 8px;
        }

        @media screen and (min-width:600px){
          .visimisi{
            display:flex;
            flex-direction:column;
          }

          .inner__visimisi{
            display:flex;
            flex-direction:row;
          }

          .visi{
            margin:4px;
          }

          .misi{
            margin:4px;
          }
        }

        @media screen and (min-width: 900px){
          .visimisi{
            box-sizing:border-box;
          }

          .visimisi .misi{
            background: rgba(0, 0, 0, 0.5);
            color: white;
            width:30%;
            margin: 0 auto;
          }

          .visimisi .visi{
            background: rgba(0, 0, 0, 0.5);
            color: white;
            width:30%;
            margin: auto;
          }
        }
      </style>

      <div class="visimisi">
      <h2 tabindex="0">Visi dan Misi Kami</h2>
        <div class="inner__visimisi">
          <div class="visi">
            <h3 tabindex="0">Visi</h3>
              <p  data-aos="flip-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
               tabindex="0">Pada Tahun 2030 menjadi platform terbaik tingkat Nasional dalam hal Pengelolaan Limbah Ramah Lingkungan yang menjangkau seluruh wilayah Indonesia dari Sabang sampai Merauke dari Miangas hingga pulau Rote.</p>
          </div>
          <div class="misi">
            <h3 tabindex="0">Misi</h3>
            <ol  data-aos="flip-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true" tabindex="0">
              <li>Meningkatkan Litersi Masyarakat terhadap isu Lingkungan</li>
              <li>Menjalin Kolaborasi dengan Setiap Elemen Masyarakat, organisasi dan Pemerintah</li>
              <li>Memberikan Pelayanan yang Baik</li>
            </ol>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('visi-misi', VisiMisi);
