class Carousel extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h2 class="d-block w-100" tabindex="0">Biodiesel</h2>
            <p tabindex="0">Penggunaan minyak jelantah sebagai alternatif bahan baku biodiesel di dunia. Penggunaan minyak jelantah untuk biodiesel dapat menghemat biaya subsidi biodiesel yang mencapai Rp 3,6 triliun.</p>
          </div>
          <div class="carousel-item">
            <h2 class="d-block w-100" tabindex="0">Bernilai Ekonomis</h2>
            <p tabindex="0">Dengan mengumpulkan minyak jelantah, Anda akan memperoleh pendapatan tambahan dari hasil penukaran minyak jelantah kepada kami.</p>
          </div>
          <div class="carousel-item">
            <h2 class="d-block w-100" tabindex="0">Go Green dan Go Health</h2>
            <p tabindex="0">Minyak jelantah sangat berbahaya bila dikonsumsi atau dibuang secara sembarangan. Karenanya, kami mendukung program penghijauan pemerintah dan pola hidup sehat.</p>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `;
  }
}

customElements.define('custom-carousel', Carousel);
