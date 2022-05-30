const Auth = {
  async render() {
    return `
      <div class="container">
      <div class="container__side">
        <img src="./images/auth.png" alt="authentication">
      </div>

      <div class="container__wrapper">    
        <div class="container__wrapper-form">
          <div class="slide-controls">
            <input type="radio" name="slide" id="login" checked>
            <input type="radio" name="slide" id="signup">
            <label for="login" class="slide login">Masuk</label>
            <label for="signup" class="slide signup">Daftar</label>
            <div class="slider-tab"></div>
          </div>
          
          <div class="form-inner">
            <form action="#" class="login">
              <h2>Masuk</h2>
              <p>Belum punya akun? <a href="" id="linkSignUp" class="link-daftar">Daftar Sekarang</a></p>
              <div class="field">
                <input type="email" placeholder="Masukan Email" required>
              </div>
              <div class="field">
                <input type="password" placeholder="Masukan Password" required>
              </div> <br>
              <div class="remember">
                <input type="checkbox" name="rememberme" id="rememberme"> Ingatkan Saya 
                <a href="#/forgot-password" class="pass-link">Lupa password?</a>
              </div>
              
              <div class="field btn">
                <div class="btn-layer"></div>
                  <input type="submit" value="Login">
              </div>
            </form>
    
            <form action="#" class="signup">
              <h2>Daftar</h2>
              <div class="field">
                <input type="email" placeholder="Masukan Email" required>
              </div>
              <div class="field">
                <input type="tel" placeholder="Masukkan Nomor Telepon" required>
              </div>
              <div class="field">
                <input type="password" placeholder="Masukan Password" required>
              </div>
              <div class="field">
                <input type="password" placeholder="Konfirmasi password" required>
              </div>
              <div class="field btn">
                <div class="btn-layer"></div>
                <input type="submit" value="Daftar">
              </div>
    
            </form>
          </div>
        </div>
     </div>
    </div>
     <script>
       
     </script>
          `;
  },

  async afterRender() {
    const loginText = document.querySelector('.title-text .login');
    const loginForm = document.querySelector('form.login');
    const loginBtn = document.querySelector('label.login');
    const signupBtn = document.querySelector('label.signup');
    const signupLink = document.querySelector('form .signup-link a');
    const linkSignUp = document.querySelector('#linkSignUp');
    linkSignUp.onclick = ((e) => {
      e.preventDefault();
      signupBtn.click();
    });
    signupBtn.onclick = (() => {
      loginForm.style.marginLeft = '-50%';
      loginText.style.marginLeft = '-50%';
    });
    loginBtn.onclick = (() => {
      loginForm.style.marginLeft = '0%';
      loginText.style.marginLeft = '0%';
    });
    signupLink.onclick = (() => {
      signupBtn.click();
      return false;
    });
  },
};

export default Auth;
