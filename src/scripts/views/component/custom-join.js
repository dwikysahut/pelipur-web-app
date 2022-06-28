/* eslint-disable linebreak-style */
/* eslint-disable lines-between-class-members */
class Join extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `

    <style>
        
    .join{
      width:60%;
      padding: 40px;
      margin: 0 auto 70px;
      box-shadow: 0 4px 8px 0 rgba(2, 56, 36, 0.2);
      text-align:center;
      border-radius:5px;
      box-sizing:border-box;
    }

    .join h2 {
      font-size: 23px;
      font-weight: 500;
      text-align: center;
      margin-bottom: 10px;
      line-height: 1.4;
    }

    .join button {
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
      .join button{
        width:50%;
      }
    }
    
    </style>
    
    <div 
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    class ="join">
      <h2> Silahkan masuk terlebih dahulu untuk melanjutkan </h2>
      <button onClick="window.location.href='#/auth';">Masuk</button>
    </div>
    `;
  }
}

customElements.define('custom-join', Join);
