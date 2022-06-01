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
                    <p>Penggunaan used cooking oil (UCO) atau minyak jelantah sebagai alternatif bahan baku dapat mendukung program biodiesel di Indonesia. Penggunaan minyak jelantah untuk biodiesel juga dapat menghemat biaya subsidi biodiesel yang mencapai Rp 3,6 triliun.
. 
                    </p>
            </div>

            <div class = "keterangan1">
                <h2>Bernilai Ekonomis</h2>
                    <p>Dengan mengumpulkan minimal 10 jerigen minyak jelantah, Anda akan memperoleh pendapatan tambahan sebesar Rp 4.000 setiap 10 jerigen minyak jelantah yang Anda tukarkan kepada kami.
. 
                    </p>
            </div>

              <div class = "keterangan1">
                <h2>Go Green dan Go Health</h2>
                    <p>Minyak jelantah akan sangat berbahaya bila dikonsumsi atau dibuang secara sembarangan. Oleh karena itu,  kami ingin mendukung program penghijauan (Go Green) dan program hidup sehat (Go Health) yang diadakan oleh pemerintah.
. 
                    </p>
            </div>


        </div>
        
        `;
  }
}

customElements.define('keterangan-slider', KeteranganSlide);
