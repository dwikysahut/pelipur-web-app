class Layanan extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
          .judul {
            width: 100%;
            text-align: center;
          }
    
          .judul h2 {
            font-size: 23px;
            font-weight: 500;
          }
    
          .layanan {
            display: flex;
            flex-direction: column;
            width: 80%;
            box-sizing: border-box;
            margin: 0 auto 70px;
          }
    
          .gambar {
            width: 0%;
            margin: auto;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
    
          .gambar img {
            height: 140px;
          }
    
          .gambar span {
            font-size: 17px;
            font-weight: 400;
            display: block;
            width: 300px;
            text-align: center;
          }
    
          @media screen and (min-width: 700px) {
            .layanan {
              flex-direction: row;
            }
          }
    
          @media screen and (min-width: 950px) {
            .layanan {
              width: 60%;
            }
    
            .gambar img {
              height: 150px;
            }
          }
        </style>


        <div class="judul"><h2>Layanan</h2></div>
        <div class="layanan">
            <div 
                data-aos="flip-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                class="gambar">
                <img src="./images/undraw_On_the_way_re_swjt.png" alt="Jemput Gratis">
                <span>Jemput Gratis</span>
            </div>
            <div 
                data-aos="flip-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"   
                class="gambar">
                <img src="./images/undraw_Chatting_re_j55r.png" alt="Live Chat">
                <span>Live Chat</span>
            </div>
            <div 
                data-aos="flip-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                class="gambar">
                <img src="./images/undraw_printing_invoices_5r4r.png" alt="Menghasilkan Uang">
                <span>Menghasilkan Uang</span>
            </div>       
        </div>
    `;
  }
}

customElements.define('layanan-custom', Layanan);
