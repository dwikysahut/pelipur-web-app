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
            width:60%;
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
          <p> Makanan yang digoreng tentu memiliki 
                kenikmatan tersendiri bagi penggemarnya dan 
                hampir sebagian masyarakat Indonesia merupakan 
                penikmat gorengan. Namun ternyata jelantah atau 
                minyak bekas menggoreng mempunyai dampak 
                serius. Selain berbahaya bagi kesehatan, 
                minyak jelantah memiliki peran besar dalam 
                pencemaran lingkungan jika dibuang sembarang. <br><br>

                Saat ini masih banyak orang yang belum memiliki 
                kesadaran akan bahaya membuang minyak jelantah 
                sembarangan. Umumnya, minyak jelantah 
                dibuang ke saluran dekat rumah, tempat sampah, 
                atau ke tanah.<br><br> <a href="#"> Read More...<a/>  
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
