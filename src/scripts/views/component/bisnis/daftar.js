/* eslint-disable linebreak-style */
/* eslint-disable lines-between-class-members */
class Daftar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <style>
        .daftar {
          padding-bottom: 70px;
        }

        .daftar__inner{
          width:60%;
          padding: 40px;
          margin: auto;
          box-shadow: 0 4px 8px 0 rgba(2, 56, 36, 0.2);
          text-align:center;
          border-radius:5px;
          box-sizing:border-box;
        }

        h2 {
          font-size: 23px;
          font-weight: 500;
          text-align: center;
          margin-bottom: 10px;
        }

        button {
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
    
      <div 
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        class="daftar">
        <div class ="daftar__inner">
          <h2 tabindex="0"> Mari bergabung bersama kami </h2>
          <button tabindex="0" onClick="window.location.href='#/auth';">Daftar sekarang</button>
        </div>
      </div>
    `;
  }
}

customElements.define('custom-daftar', Daftar);
