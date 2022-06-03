class KritikSaran extends HTMLElement {
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
    .kritik-saran{
      width:100%;
      margin:auto;
      padding:10px;
      box-sizing:border-box;
    }

    form{
      width:100%;
      border:radius:5px;
      padding:10px;
      box-sizing:border-box;
    }

    .kritik-saran input,textarea{
      width:100%;
      font-family: inherit;
    }
    .kritik-saran input[type="submit"]{
      width:50%;
      padding:5px;
      box-sizing:border-box;
      border-radius:5px;
       cursor: pointer;

      background-color: rgba(2, 61, 30, 0.938);
      color:white;
      font-family: inherit;
    }

    @media screen and (min-width:600px){
      form{
        width:70%;
        margin:auto;
      }
      table{
        margin:auto;
      }
      .kritik-saran h2{
        margin:auto;
        text-align:center;
        font-family: inherit;
        color:#005555;
      }
    }
    </style>

    

    <div class = "kritik-saran">
        <h2>Kritik dan Saran</h2>

        <form action="" method="POST">
            <table>
                <tr>
                    <td>Nama</td>
                    <td><input tabindex="0" type = "text" ></td>
                </tr>

                 <tr>
                    <td>Email</td>
                    <td><input tabindex="0" type = "email" ></td>
                </tr>

                 <tr>
                    <td>Kritik</td>
                    <td><textarea></textarea></td>
                </tr>

                 <tr>
                    <td>Saran</td>
                    <td><textarea></textarea></td>
                </tr>

                 <tr>
                    <td></td>
                    <td><input tabindex="0" type="submit" value="kirim"</td>
                </tr>
            </table>
    
    </div>
    `;
  }
}

customElements.define('kritik-saran', KritikSaran);
