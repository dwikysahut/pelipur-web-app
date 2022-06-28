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
      box-shadow: 0 4px 8px 0 rgba(2, 1, 36, 0.2);
    }

    .kritik-saran input,textarea{
      width:100%;
      font-family: inherit;
    }
    .kritik-saran input[type="submit"]{
      display:absolute;
      width:50%;
      margin-left:50%;
      padding:5px;
      box-sizing:border-box;
      border-radius:5px;
      cursor: pointer;

      background-color: rgba(2, 61, 30, 0.938);
      color:white;
      font-family: inherit;
    }

     .kritik-saran h2{
        margin:auto;
        text-align:center;
        font-family: inherit;
        color:#005555;
      }

    @media screen and (min-width:600px){
      form{
        width:80%;
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

      .kritik-saran input,textarea{
      width:100%;
      font-family: inherit;
    }
    }
    </style>

    

    <div class = "kritik-saran">


        <form action="" method="POST">
         <h2>Kritik dan Saran</h2>
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
