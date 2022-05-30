class KeteranganSlide extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `



    <style>
    
    .ket-slider{
        width:100%;
        padding:20px;
        margin-bottom:20px;
        background-color:#d8efef;
        box-sizing:border-box;
    }

    .keterangan1{
        width:100%;
        padding:10px;
        margin:3px;
        background-color:white;
        box-sizing:border-box;
        border-radius:5px;
    }

    .keterangan1 h2{
        font-family:calibri;
        font-weight:normal;
        color:#25bea5;
    }

    .keterangan1 p{
        font-family: calibri;
    }



    @media screen and (min-width:700px){
        .ket-slider{
            display:flex;
        }
    }
    @media screen and (min-width:1200px){
        .ket-slider{
        width:80%;
        padding:20px;
        margin: auto;
        margin-bottom:20px;
        background-color:#d8efef;
        box-sizing:border-box;
    }
    }
    </style>
        

        <div class = "ket-slider">
            <div class = "keterangan1">
                <h2>Biodisel</h2>
                    <p>Saat ini masih banyak orang yang belum memiliki kesadaran akan bahaya membuang minyak jelantah sembarangan. 
                    Umumnya, minyak jelantah dibuang ke saluran dekat rumah, tempat sampah, atau ke tanah.
                    Selain berbahaya bagi kesehatan, minyak jelantah memiliki peran besar dalam pencemaran lingkungan jika dibuang sembarang. 
                    </p>
            </div>

            <div class = "keterangan1">
                <h2>Bernilai Ekonomis</h2>
                    <p>Saat ini masih banyak orang yang belum memiliki kesadaran akan bahaya membuang minyak jelantah sembarangan. 
                    Umumnya, minyak jelantah dibuang ke saluran dekat rumah, tempat sampah, atau ke tanah.
                    Selain berbahaya bagi kesehatan, minyak jelantah memiliki peran besar dalam pencemaran lingkungan jika dibuang sembarang. 
                    </p>
            </div>

              <div class = "keterangan1">
                <h2>Mengurangi Pencemaran</h2>
                    <p>Saat ini masih banyak orang yang belum memiliki kesadaran akan bahaya membuang minyak jelantah sembarangan. 
                    Umumnya, minyak jelantah dibuang ke saluran dekat rumah, tempat sampah, atau ke tanah.
                    Selain berbahaya bagi kesehatan, minyak jelantah memiliki peran besar dalam pencemaran lingkungan jika dibuang sembarang. 
                    </p>
            </div>


        </div>
        
        `;
  }
}

customElements.define('keterangan-slider', KeteranganSlide);
