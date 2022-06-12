/* eslint-disable linebreak-style */
/* eslint-disable lines-between-class-members */
class Daftar extends HTMLElement {
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
        
    .daftar{
      width:60%;
      padding:20px;
      margin:10px auto;
      box-shadow: 0 4px 8px 0 rgba(2, 56, 36, 0.2);
      text-align:center;
      border-radius:5px;
      box-sizing:border-box;
      
    }

    h2 {
      font-weight: 500;
      text-align: center;
    }

    button{
      width:100%;
      background-color:#005555;
      color:white;
      padding:10px;
      box-sizing:border-box;
      border-radius:5px;
      cursor: pointer;
      font-size: 15px;
      font-weight: 500;
      border: none;
      height: 44px;
      line-height: 10px;
      font-family: "Poppins", sans-serif;
    }

    @media screen and (min-width:600px){
    button{
      width:50%;
    }
    }
    
    </style>


         <div class ="daftar">
          <h2> Mari Bergabung Bersama kami </h2>
          <button onClick="window.location.href='#/auth';">Daftar sekarang</button>
        </div>
        `;
  }
}

customElements.define('custom-daftar', Daftar);
