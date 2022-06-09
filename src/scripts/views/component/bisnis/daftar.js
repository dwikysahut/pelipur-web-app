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

    button{
      width:100%;
      background-color:#005555;
      color:white;
      padding:10px;
      box-sizing:border-box;
      border-radius:5px;
       cursor: pointer;
    }

    @media screen and (min-width:600px){
    button{
      width:50%;
    }
    }
    
    </style>


        
         <div class ="daftar">
          <h2> Mari Bergabung Bersama kami </h2>
          <button onClick="window.location.href='#/auth';">DAFTAR</button>
        </div>
        `;
  }
}

customElements.define('custom-daftar', Daftar);
