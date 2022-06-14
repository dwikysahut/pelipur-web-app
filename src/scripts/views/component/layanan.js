class Layanan extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `

    <style>
    .judul{
        width:100%;
        text-align: center;
    }

    .judul h2{
        text-align:center;
    }

    .layanan {
        display:flex;
        flex-direction:column;
        width:80%;
        box-sizing:border-box;
        margin: 0 auto 30px;
    }

    .gambar{
        width: 0%;
        margin: auto;
        box-sizing:border-box;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
    }

    .gambar img{
      height:140px;
    }

    .gambar span {
        font-size: 20px;
        font-weight: 400;
        display: block;
        margin-bottom: 30px;
        width: 300px;
        text-align: center;
    }

    @media screen and (min-width:690px){
        .layanan{
           flex-direction: row;
        }

        .gambar span {
            
        }
    }

     @media screen and (min-width:950px){
         .layanan{
            flex-direction: row;
         }
         
         .gambar img{
            height:180px;
         }

         .gambar span {
             
         }
     }
    </style>


       <div class="judul"><h2>Layanan</h2></div>
        <div data-aos="zoom-in" 
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        class = "layanan">
            <div class="gambar">
                <img src="./images/undraw_On_the_way_re_swjt.png">
                <span>Jemput Gratis</span>
            </div>
            <div class="gambar">
                <img src="./images/undraw_Chatting_re_j55r.png">
                <span>Live Chat</span>
            </div>
            <div class="gambar">
                <img src="./images/undraw_printing_invoices_5r4r.png">
                <span>Menghasilkan Uang</span>
            </div>       
        </div>
        `;
  }
}

customElements.define('layanan-custom', Layanan);
