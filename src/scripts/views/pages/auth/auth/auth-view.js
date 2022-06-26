// import { createMovieItemTemplate } from '../../templates/template-creator';
import '../../../component/custom-loader';
/* eslint-disable class-methods-use-this */
class AuthView {
  getTemplate() {
    return `
    <img src="./images/wave2.svg" class="wave" alt="">
    <custom-loader></custom-loader>
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
      <img src="./images/undraw_on_the_way.svg" alt="Authentication">
    </div>

    <div class="container__wrapper">
      <div class="container__wrapper-form">
        <div class="slide-controls">
          <input type="radio" name="slide" id="login" checked>
          <input type="radio" name="slide" id="signup">
          <label for="login" class="slide login">Login</label>
          <label for="signup" class="slide signup">Register</label>
          <div class="slider-tab"></div>
        </div>

        <div class="form-inner">
          <form class="login">
            <h2>Login</h2>
            <p>Belum punya akun? <a href="" id="linkSignUp" class="link-daftar">Daftar Sekarang</a></p>

            <div class="field">
              <input type="email" id="inputEmailLogin" name="inputEmailLogin" placeholder="Masukan Email" required>
              <span id="alertEmailLogin" class="hint danger">error please enter a valid email</span>
            </div>
            <div class="field">
              <input type="password" id="inputPasswordLogin" name="inputPasswordLogin" placeholder="Masukan Password"
                required>
            </div> <br>
            <div class="remember">
              
              <a href="#/forgot-password" class="pass-link">Lupa password?</a>
            </div>

            <div class="field btn">
              <div class="btn-layer"></div>
              <input type="submit" id="submitLogin" value="Login">
            </div>
          </form>

          <form action="#" class="signup">
            <h2>Register</h2>
            <div class="field">
              <input type="text" id="inputNameReg" name="inputNameReg" placeholder="Masukkan Nama" required>
            </div>
            <div class="field">
              <input type="email" id="inputEmailReg" name="inputEmailReg" placeholder="Masukkan Email" required>
              <span id="alertEmailReg" class="hint danger">error please enter a valid email</span>
            </div>
            <div class="field">
              <input type="tel" id="inputPhoneReg" name="inputPhoneReg" placeholder="Masukkan Nomor Telepon" required>
              <span id="alertPhoneReg" class="hint danger">Input Number Only</span>
            </div>
            <div class="field">
              <input type="textarea" id="inputAddressReg" name="inputAddressReg" placeholder="Masukkan Alamat" required>
            </div>
            <div class="field">
              <input type="password" id="inputPasswordReg" name="inputPasswordReg" placeholder="Masukan Password"
                required>
              <span id="alertPassReg" class="hint danger">password must be 8-12 characters in length</span>
            </div>
            <div class="field">
              <input type="password" id="inputRePasswordReg" name="inputRePasswordReg" placeholder="Konfirmasi password"
                required>
            </div>
            <div class="field btn">
              <div class="btn-layer"></div>
              <input type="submit" id="submitRegister" value="Register">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
          `;
  }

  elementButtonInit(callback) {
    const loginForm = document.querySelector('form.login');
    const loginBtn = document.querySelector('label.login');
    const signupBtn = document.querySelector('label.signup');
    const signupLink = document.querySelector('form .signup-link a');
    const linkSignUp = document.querySelector('#linkSignUp');

    callback({
      loginForm, loginBtn, signupBtn, signupLink, linkSignUp,
    });
  }

  loaderListener() {
    return document.querySelector('custom-loader');
  }

  loginFormListener(callback) {
    document.querySelector('#submitLogin').addEventListener('click', async (e) => {
      e.preventDefault();
      this.getLoginFormListener(callback);
    });
  }

  alertEmailRegListener() {
    return document.querySelector('#alertEmailReg');
  }

  alertPhoneRegListener() {
    return document.querySelector('#alertPhoneReg');
  }

  alertPassRegListener() {
    return document.querySelector('#alertPassReg');
  }

  getLoginFormListener(callback) {
    const inputEmailLogin = document.querySelector('#inputEmailLogin');
    const inputPasswordLogin = document.querySelector('#inputPasswordLogin');
    callback({ inputEmailLogin, inputPasswordLogin });
  }

  getRegisterFormListener(callback) {
    const formRegister = {
      nama: document.querySelector('#inputNameReg'),
      email: document.querySelector('#inputEmailReg'),
      no_telp: document.querySelector('#inputPhoneReg'),
      alamat: document.querySelector('#inputAddressReg'),
      password: document.querySelector('#inputPasswordReg'),
      confirmPassword: document.querySelector('#inputRePasswordReg'),
    };
    callback(formRegister);
  }

  registerFormListener(callback) {
    document.querySelector('#submitRegister').addEventListener('click', async (e) => {
      e.preventDefault();
      this.getRegisterFormListener(callback);
    });
  }
}

export default AuthView;
