/* eslint-disable linebreak-style */
/* eslint-disable lines-between-class-members */
/* eslint-disable linebreak-style */
class Artikel extends HTMLElement {
  connectedCallback() {
    this.src = this.getAttribute('src') || null;
    this.alt = this.getAttribute('alt') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .artikels{
          width: 80%;
          margin: 0 auto 70px;
          display: grid;
          grid-template-columns:1fr;
          padding:10px;
        }

        .artikel {
          margin: auto;
        }

        .artikel p {
          text-align: justify;
          font-weight: 400;
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 0;
        }

        .artikel h2{
          margin: 35px auto 20px;
          font-weight: 500;
          font-size: 23px;
        }

        .gambar-artikel {
          display: flex;
          justify-content: center;
        }

        .gambar-artikel img{
          display: block;
          width: 100%;
          max-height: 300px;
          width: 100%;
          border-radius: 5px;
        }

        .oil-details {
          color: black;
          font-weight: 600;
          text-decoration: none;
        }
        
        .oil-details:hover {
          color: #069a8e;
        }

        @media screen and (min-width: 700px) {
          .gambar-artikel img {
            width: 70%;
            max-height: 330px;
          }
        }

        @media screen and (min-width: 1300px) {
          .artikels{
            grid-template-columns: repeat(2, 1fr);
            padding: 0 50px;
          }

          .gambar-artikel {
            display: flex;
            width: 90%;
            margin: 0 auto;
            justify-content: flex-start;
          }

          .gambar-artikel img {
            width: 100%;
            max-height: 300px;
          }

          .artikel {
            display: block;
          }

          .artikel h2{
            margin-top: 0;
          }
        }
      </style>

      <div class = "artikels">
        <div 
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true" 
        class = "gambar-artikel">
             <img class="lazyload" src="./images/minyak-jelantah.jpg" alt="Minyak">
        </div>

       <div class="artikel">
          <h2 tabindex="0">Minyak Jelantah</h2>
          <p tabindex="0">Minyak jelantah <i>(waste cooking oil)</i> adalah minyak limbah yang bisa berasal dari jenis-jenis minyak goreng seperti halnya minyak jagung, minyak sayur, minyak samin dan sebagainya. Minyak ini merupakan minyak bekas pemakaian kebutuhan rumah tangga umumnya, dapat digunakan kembali untuk keperluaran kuliner akan tetapi bila ditinjau dari komposisi kimianya, minyak jelantah mengandung senyawa-senyawa yang bersifat karsinogenik, yang terjadi selama proses penggorengan.
          <a href="https://id.wikipedia.org/wiki/Minyak_jelantah" target="_blank" rel="noreferrer" class="oil-details">Read more...<a/>  
          </p>
       </div>
      </div>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ['alt', 'p'];
  }
}

customElements.define('artikel-custom', Artikel);
