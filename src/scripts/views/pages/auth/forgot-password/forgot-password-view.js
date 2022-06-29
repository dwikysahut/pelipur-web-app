// import { createMovieItemTemplate } from '../../templates/template-creator';

/* eslint-disable class-methods-use-this */
class ForgotPasswordView {
  getTemplate() {
    return `
    <img src="./images/wave3.svg" class="wave" alt="">
    <div class="container">
        
    <div 
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      class="container__side">
      <img src="./images/undraw_forgot_password_re_hxwm.svg" alt="Authentication">
    </div>
    <div class="container__wrapper">    
        <div class="form-inner">
          <form action="#" class="login">
            <h2>Lupa Password</h2>
            <p>Masukkan <b>Email</b> anda, password baru akan dikirim ke <b>Email</b> Anda</p>
            <div class="field">
              <input type="email" id="inputEmailForgot" name="inputEmailForgot" placeholder="Masukkan Email Terdaftar" required>
              <span id="alertEmailForgot" class="hint danger">error please enter a valid email</span> 
            </div>
            
            <div class="field btn">
              <div class="btn-layer"></div>
                <input type="submit" id="submitForgotPassword"  value="Kirim">
            </div>
          </form>
  
        </div>
      </div>
   </div>
  
  </div>
              `;
  }

  forgotFormInputListener(callback) {
    document.querySelector('#submitForgotPassword').addEventListener('click', (e) => {
      e.preventDefault();
      this.getForgotFormInputListener(callback);
    });
  }

  getForgotFormInputListener(callback) {
    const inputEmailForgot = document.querySelector('#inputEmailForgot');
    callback({ inputEmailForgot });
  }

  alertEmailForgot() {
    return document.querySelector('#alertEmailForgot');
  }
}

export default ForgotPasswordView;
