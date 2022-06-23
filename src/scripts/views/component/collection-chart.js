class CollectionChart extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set items(items) {
    this._items = items;
  }

  render() {
    this.innerHTML = `
    <div class="card__total">
    <div>
      <canvas id="myChartTotal"></canvas>
    </div>

  </div>
          `;
  }
}
customElements.define('collection-chart', CollectionChart);
