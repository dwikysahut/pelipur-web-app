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

        .artikels p {
            font-family:calibri;
        }

        .artikel img{
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
        <div class = "artikel">
        <img src="${this.src}" alt="${this.alt}">
        </div>
       <p> Limbah adalah buangan yang kehadirannya pada suatu saat dan tempat tertentu tidak dikehendaki lingkungannya karena tidak mempunyai nilai ekonomi. Limbah tersebut dapat berupa limbah padat, limbah cair, maupun limbah gas
       Limbah adalah buangan yang kehadirannya pada suatu saat dan tempat tertentu tidak dikehendaki lingkungannya karena tidak mempunyai nilai ekonomi. Limbah tersebut dapat berupa limbah padat, limbah cair, maupun limbah gas
       Limbah adalah buangan yang kehadirannya pada suatu saat dan tempat tertentu tidak dikehendaki lingkungannya karena tidak mempunyai nilai ekonomi. Limbah tersebut dapat berupa limbah padat, limbah cair, maupun limbah gas
       </p>
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
