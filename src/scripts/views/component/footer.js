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

      <div class = "jadwal">
      <h3>Jadwal Operasional</h3>
      <ul>
        <li><p>Senin - Jum'at : 08.00 WIB - 17.00 WIB</p></li>
        <li><p>Sabtu - Minggu + tanggal Merah : Libur</p></li>
      </ul>
      </div>

      <div tabindex="0" class="medsos">
           <p>ikuti media sosial kami</p>
        <ul>
         <li tabindex="0"><i class="fa fa-instagram" aria-hidden="true"></i></li>
          <li tabindex="0"><i class="fa fa-facebook-official" aria-hidden="true"></i></li>
          <li tabindex="0"><i class="fa fa-envelope" aria-hidden="true"></i></li>
          <li tabindex="0"><i class="fa fa-whatsapp" aria-hidden="true"></i></li>         
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
