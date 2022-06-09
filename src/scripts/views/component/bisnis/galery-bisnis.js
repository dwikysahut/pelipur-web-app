/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
class GaleryBisnis extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        

        <div class="galery">
        
        <h2>Galery Bisnis</h2>
        
        </div>
        
        `;
  }
}
