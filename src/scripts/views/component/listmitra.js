import { skeletonMitraListTemplate } from '../templates/template-creator';

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
            width:80%;
            text-align:center;
            margin: 0 auto;
            padding: 20px 20px 50px;
            
          }

        .list-mitra h2 {
          font-size: 23px;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .list-mitra ul{
          margin: 0 auto;
          display: flex;
          padding: 0;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .list-mitra ul li{
          list-style: none;
          width: 200px;
          min-height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #fff;
          box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px;
        }
        .image-partner {
          max-height: 100%;
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
        <h2 tabindex="0">Mitra Kami</h2>
        <ul 
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          id='mitraList'>
          ${skeletonMitraListTemplate(3)}
        </ul>
        
      </div>
    `;
  }
}
customElements.define('list-mitra', ListMitra);
