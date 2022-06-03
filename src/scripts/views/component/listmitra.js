class ListMitra extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `

        <style>
        
        .list-mitra{
          width:30%;
          margin:auto;
          text-align:center;
            
        }

        .list-mitra h2{
        font-family:calibri;
        font-weight:normal;
        color:#25bea5;

        }

      .list-mitra ul{
        margin:auto;
        display:flex;
      }

      .list-mitra ul li{
        list-style:none;
      }

        .list-mitra img{
            width:100%;
            
        }
        </style>
        
        <div class="list-mitra">
        <h2> Mitra </h2>
        <ul>
            <li><img src="./images/heros/mitra1.jpg" alt=""></li>
            <li><img src="./images/heros/mitra2.jpg" alt=""></li>
        </ul>
        
        </div>

        
        `;
  }
}
customElements.define('list-mitra', ListMitra);
