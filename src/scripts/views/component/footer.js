/* eslint-disable linebreak-style */
class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
      <div tabindex="0" class="alamat">
        <h3>Alamat :</h3>
        <p>jl. Green Sedayu Bizpark Blok DM Boulevard No.2 Jl.Daan Mogot KM.18 Kali Deres - Jakarta Barat</p>
        <p>Tlp/Wa : 0857 XXX XXX</p>
      </div>

      <div tabindex="0" class="medsos">
      <h3>Kunjungi Medsos kami</h3>
        <ul>
         <li tabindex="0"><img src = "./images/heros/fb.png" ></li>
          <li tabindex="0"><img src = "./images/heros/ig3.png" ></li>
          <li tabindex="0"><img src = "./images/heros/mail.png" ></li>
          <li tabindex="0"><img src = "./images/heros/twitter.png" ></li>
         
        </ul>
      </div>

      <div tabindex="0" class="copyrig">
        <p>&copy; Copyright 2022 | Pengelolaan Limbah Untuk Ramah lingkungan (Pelipur)</p>
      </div>
    </footer>
        `;
  }
}

customElements.define('custom-footer', Footer);
