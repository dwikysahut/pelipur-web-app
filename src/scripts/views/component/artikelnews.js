/* eslint-disable linebreak-style */
/* eslint-disable lines-between-class-members */
/* eslint-disable linebreak-style */
class Artikel extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.src = this.getAttribute('src') || null;
    this.alt = this.getAttribute('alt') || null;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        .artikels{
            width:70%;
            margin: 20px auto;
            display:grid;
            grid-template-columns: 1.5fr 1fr;
            gap: 10px;
            padding:10px;
        }

        .artikel p {
            font-family:calibri;
            font-weight: lighter;
        }

        .artikel h2{
          font-family:calibri;
          font-weight: lighter;
          margin-bottom:10px;
          color:#005555;
        }

        .gambar-artikel img{
            width:100%;
            max-height:450px;
        }

        @media screen and (max-width:800px){
            .artikels{
            grid-template-columns:1fr;
            gap: 10px;
            padding:10px;
        }
        }
        </style>

      <div class = "artikels">
        <div class = "gambar-artikel">
          <img src="${this.src}" alt="${this.alt}">
        </div>

       <div class="artikel">
          <h2>Limbah Minyak Jelantah</h2>
          <p> Minyak jelantah (waste cooking oil) adalah minyak limbah yang bisa berasal dari jenis-jenis minyak goreng seperti halnya minyak jagung, minyak sayur, minyak samin dan sebagainya. Minyak ini merupakan minyak bekas pemakaian kebutuhan rumah tangga umumnya, dapat digunakan kembali untuk keperluan kuliner, akan tetapi bila ditinjau dari komposisi kimianya, minyak jelantah mengandung senyawa-senyawa yang bersifat karsinogenik (zat atau senyawa yang dapat menyebabkan kanker), yang terjadi selama proses penggorengan.
          Jadi jelas bahwa, pemakaian minyak jelantah yang berkelanjutan dapat merusak kesehatan manusia, menimbulkan penyakit kanker, dan akibat selanjutnya dapat mengurangi kecerdasan generasi berikutnya. Untuk itu, perlu penanganan yang tepat agar limbah minyak jelantah ini dapat bermanfaat dan tidak menimbulkan kerugian dari aspek kesehatan manusia dan lingkungan, kegunaan lain dari minyak jelantah adalah bahan bakar biodiesel.
          .<br><br> <a href="https://id.wikipedia.org/wiki/Minyak_jelantah"> Read More...<a/>  
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
