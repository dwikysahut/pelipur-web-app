// import { createMovieItemTemplate } from '../../templates/template-creator';

/* eslint-disable class-methods-use-this */
class VerifyView {
  getTemplate() {
    return `
    <div class="container">
    <div 
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      class="container__side">
      <img src="./images/undraw_two_factor_authentication_namy.svg" alt="Authentication">
    </div>

    <div class="container__wrapper">    
     
        <div class="form-inner">
          <form action="#" class="login">
            <h2>Verifikasi email</h2>
            <p>Silahkan buka <b>email</b> anda dan masukkan <b>kode verifikasi</b></p>
            <div class="field">
            <input type="email" id="inputEmailVerif" name="inputEmailVerif" placeholder="Masukan Email Terdaftar" required>
            <span id="alertEmailVerify" class="hint danger">error please enter a valid email</span> 
          </div>
            <div class="field">
              <input type="number" id="inputCodeVerif" name="inputCodeVerif" placeholder="Masukan Kode" required>
            </div>
            
            <div class="field btn">
              <div class="btn-layer"></div>
                <input type="submit" id="submitVerify"  value="Verfikasi">
            </div>
          </form>
  
        </div>
      </div>
   </div>
  
  </div>
            `;
  }

  verifyFormInputListener(callback) {
    document.querySelector('#submitVerify').addEventListener('click', (e) => {
      e.preventDefault();
      this.getVerifyFormInputListener(callback);
    });
  }

  alertEmailVerif() {
    return document.querySelector('#alertEmailVerify');
  }

  getVerifyFormInputListener(callback) {
    const inputEmailVerif = document.querySelector('#inputEmailVerif');
    const inputCodeVerif = document.querySelector('#inputCodeVerif');
    callback({ inputEmailVerif, inputCodeVerif });
  }
}

export default VerifyView;
