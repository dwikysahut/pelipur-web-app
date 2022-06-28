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
            margin-bottom: 25px;
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
            gap: 40px;
          }
    
          .gambar {
            width: 100%;
            margin: auto;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
          }
    
          .gambar img {
            height: 90px;
          }
    
          .gambar span {
            font-size: 17px;
            font-weight: 400;
            display: block;
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
              height: 100px;
            }
          }
        </style>


        <div class="judul"><h2 tabindex="0">Layanan</h2></div>
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
                <img src="./images/undraw_on_the_way.svg" alt="Jemput Gratis">
                <span tabindex="0">Jemput Gratis</span>
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
                <img src="./images/undraw_chatting.svg" alt="Live Chat">
                <span tabindex="0">Live Chat</span>
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
                <img src="./images/undraw_printing_invoices.svg" alt="Menghasilkan Uang">
                <span tabindex="0">Menghasilkan Uang</span>
            </div>       
        </div>
    `;
  }
}

customElements.define('layanan-custom', Layanan);
