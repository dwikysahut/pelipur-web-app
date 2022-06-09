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
            margin: 0 auto 50px;
            text-align:center;
          }

          .list-mitra ul{
            margin:auto;
            display:flex;
            padding: 0;
          }

          .list-mitra ul li{
            list-style:none;
          }

          .list-mitra img{
              width:50%;
          }

          @media screen and (min-width: 700px) {
            .list-mitra{
              width:40% !important;
            }  
            .list-mitra img{
              width:65%;
          }
          }
        </style>
        
        <div class="list-mitra">
          <h2> Mitra </h2>
          <ul id='mitraList'>
          </ul>
        </div>
        
        `;
  }
}
customElements.define('list-mitra', ListMitra);
