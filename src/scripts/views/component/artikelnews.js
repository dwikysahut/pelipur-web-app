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
          margin: 20px auto 50px;
          display: grid;
          gap: 10px;
          grid-template-columns:1fr;
          padding:10px;
        }

        .artikel {
          margin: auto;
        }

        .artikel p {
            font-weight: 400;
            font-size: 1.1rem;
        }

        .artikel h2{
          margin-bottom: 10px;
          font-weight: 500;
          font-size: 1.7rem;
        }

        .gambar-artikel {
          
          display: flex;

          justify-content: center;
        }

        .gambar-artikel img{
          display: block;
          max-height: 300px;
        }

        .oil-details {
          color: black;
          font-weight: 600;
          text-decoration: none;
        }
        
        .oil-details:hover {
          color: #069a8e;
        }

        @media screen and (min-width:900px){
          .artikels{
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            column-gap: 70px;
            
          }

          .gambar-artikel {
            align-items: self-end;
            display: flex;
            justify-content: flex-end;
            
          }

          .artikel {
            display: block;
            
            margin-right: 70px;
        }
      }
        </style>

      <div
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      class = "artikels">
        <div class = "gambar-artikel">
          <img src="${this.src}" alt="${this.alt}">
        </div>

       <div class="artikel" 
      
       >
          <h2>Limbah Minyak Jelantah</h2>
          <p>Minyak jelantah (waste cooking oil) adalah minyak limbah yang bisa berasal dari jenis-jenis minyak goreng seperti halnya minyak jagung, minyak sayur, minyak samin dan sebagainya. Minyak ini merupakan minyak bekas pemakaian kebutuhan rumah tangga umumnya, dapat digunakan kembali untuk keperluaran kuliner akan tetapi bila ditinjau dari komposisi kimianya, minyak jelantah mengandung senyawa-senyawa yang bersifat karsinogenik, yang terjadi selama proses penggorengan.
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
