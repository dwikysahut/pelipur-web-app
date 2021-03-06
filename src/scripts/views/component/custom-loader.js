/* eslint-disable linebreak-style */
class Loader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="dots"></div>
          `;
  }
}

customElements.define('custom-loader', Loader);

// /* eslint-disable linebreak-style */
// class Loader extends HTMLElement {
//   connectedCallback() {
//     this.render();
//   }

//   render() {
//     this.innerHTML = `
//         <div class="loader"></div>
//           `;
//   }
// }

// customElements.define('custom-loader', Loader);
