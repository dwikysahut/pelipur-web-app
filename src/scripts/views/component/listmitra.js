/* eslint-disable class-methods-use-this */
class ListMitra extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get mitraContainer() {
    return document.querySelector('#mitraList');
  }

  render() {
    this.innerHTML = `
        <style>
          .list-mitra{
            width:90%;
            text-align:center;
            margin: 0 auto;
            padding: 0 0 60px 0;
          }

        .list-mitra h2 {
          font-size: 23px;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .list-mitra ul{
          margin:auto;
          display:flex;
          padding: 0;
          justify-content: center;
          gap: 10%;
        }

        .list-mitra ul li{
          list-style:none;
        }

        .list-mitra img{
          width:80px;
          border-radius: 50%;
        }

        @media screen and (min-width: 700px) {
          .list-mitra img{
            width:120px;
          }
        }
      </style>
        
      <div class="list-mitra">
        <h2>Mitra</h2>
        <ul 
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          id='mitraList'>
        </ul>
      </div>
    `;
  }
}
customElements.define('list-mitra', ListMitra);
