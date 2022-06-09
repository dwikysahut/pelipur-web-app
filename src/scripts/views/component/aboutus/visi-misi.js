class VisiMisi extends HTMLElement {
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

        .visimisi{
          width:100%;
          background-color: #f4f4f5;
          padding:20px;
          box-sizing:border-box;
          margin:10px auto;
        }

        .visimisi .visi{
          width:100%;
          background-color:white;
          padding:10px;
          box-sizing:border-box;
          border-radius:5px;
          margin-bottom:10px;
        }

        .visimisi .visi:hover{
          box-shadow: 0 4px 8px 0 rgba(2, 56, 36, 0.896);
        }

        .visimisi .visi p{
          font-size: 1rem;
        }

        .visimisi .misi{
          width:100%;
          background-color:white;
          padding:10px;
          box-sizing:border-box;
          border-radius:5px;
          margin-bottom:10px;
          
        }

        .visimisi .misi:hover{
          box-shadow: 0 4px 8px 0 rgba(2, 56, 36, 0.896);
        }

        .visimisi .misi li{
          font-size: 1rem;
        }

        h2{
          text-align:center;
          font-weight: 500;
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

       @media screen and (min-width:1000px){
         .visimisi{
          padding:20px;
          box-sizing:border-box;
         }
         .visimisi .misi{
           background-color:white;
           width:30%;
           margin:auto
         }
         .visimisi .visi{
            background-color:white;
           width:30%;
           margin:auto
         }
       }
        
        </style>



     
        <div class="visimisi">
        <h2>Visi dan Misi Kami</h2>
        <div class="inner__visimisi">
          
          <div class = "visi">
            <h2>Visi</h2>
            <p>Pada Tahun 2030 Menjadi Platform Terbaik Tingkat Nasional Dalam Hal Pengelolaan Limbah Ramah Lingkungan Yang Menjangkau Seluruh Wilayah Indonesia dari Sabang Sampai merauke, dari Mianggas Hingga Pulau Rote. </p>
          </div>

          <div class = "misi">
          <h2>Misi</h2>
            <ol>
              <li>Meningkatkan Litersi Masyarakat terhadap isu Lingkungan </li>
              <li>Menjalin Kolaborasi dengan Setiap Elemen Masyarakat, organisasi dan Pemerintah  </li>
              <li>Memberikan Pelayanan yang Baik</li>
            </ol>
          </div>
          </div>
        </div>
        
        `;
  }
}

customElements.define('visi-misi', VisiMisi);
