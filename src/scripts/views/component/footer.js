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
        <p>Jln. Rasuna Said RT/RW 002/002 Kunciran Jaya Pinang Kota Tangerang Banten, 15144</p>
      </div>

      <div class = "jadwal">
      <h3>Jadwal Operasional</h3>
      <ul>
        <li><p>Senin - Jumat : 08.00 WIB - 17.00 WIB</p></li>
        <li><p>Sabtu - Minggu dan tanggal Merah : Libur</p></li>
      </ul>
      </div>

      <div tabindex="0" class="medsos">
      <h3>Hubungi Kami</h3>
          
        <ul>
         <li tabindex="0"><a href="https://www.facebook.com/profile.php?id=100081708250334"><i class="fa fa-instagram" aria-hidden="true"></a></i></li>
          <li tabindex="0"><a href="https://www.facebook.com/profile.php?id=100081708250334" target="_blank"><i class="fa fa-facebook-official" aria-hidden="true"></a></i></li>
          <li tabindex="0"><a href="mailto:pelipurapps@gmail.com" target="_blank"><i class="fa fa-envelope " aria-hidden="true"></i></a></li>
          <li tabindex="0"><a href="https://wa.me/082234632343" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>         
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
