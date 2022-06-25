/* eslint-disable linebreak-style */
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
<<<<<<< HEAD
                <picture>
                    <source media ="(max-width:600px)" data-src="./images/undraw_On_the_way_re_swjt-small.png" class="lazyload">
                    <img data-src="./images/undraw_On_the_way_re_swjt-large.png"
                    alt="layanan image" class="lazyload"></img>
                </picture>
=======
                <img src="./images/undraw_on_the_way.svg" alt="Jemput Gratis">
>>>>>>> 1ab05fb296653ac8325b425807901fbc73b73e78
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
                 <picture>
                    <source media ="(max-width:600px)" data-srx="./images/undraw_Chatting_re_j55r-small.png" class="lazyload">
                    <img data-src="./images/undraw_Chatting_re_j55r-large.png" class="lazyload" alt="layanan image"></img>
                </picture>
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
                <img class="lazyload" src="./images/undraw_printing_invoices.svg" alt="Menghasilkan Uang">
                <span>Menghasilkan Uang</span>
            </div>       
        </div>
    `;
  }
}

customElements.define('layanan-custom', Layanan);
