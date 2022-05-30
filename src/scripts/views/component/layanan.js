class Layanan extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `

    <style>
    .judul{
        width:30%;
        margin: auto;
    }

    .judul h1{
        font-family:calibri;
        font-weight: lighter;
        text-align:center;
        color:#005555;
    }





    .layanan{
        display:flex;
        width:70%;
        box-sizing:border-box;
        margin:30px auto;
        background-color:white;
        
    }

    .gambar{
        width:60%;
        margin: auto;
        box-sizing:border-box;
        display:flex;
        justify-content:center;
    }

    .gambar img{
      width:100%;
      max-height:300px;
    }




 

     @media screen and (max-width:600px){
         .layanan{
             flex-direction:column;
         }
         .gambar img{
             width:100%;
         }
     }
    
    </style>


       <div class="judul"><h1>Layanan</h1></div>
        <div class = "layanan">
            <div class="gambar"><img src="./images/heros/jemput.jpg"></div>
            <div class="gambar"><img src="./images/heros/chat.jpg"></div>
            <div class="gambar"><img src="./images/heros/pay.jpg"></div>       
        </div>
        `;
  }
}

customElements.define('layanan-custom', Layanan);
