import Swal from 'sweetalert2';
import AuthDbSource from '../../../data/authdb-source';
import FormEventChangeHandler from '../../../utils/form-event-change-handler';
import {
  emptyFormHandler, formEmailValidation, swalConfirm, swalError,
} from '../../../utils/function-helper';

const ForgotPassword = {
  async render() {
    return `
          <div class="container">
        
          <div class="container__side">
            <img src="./images/verification.png" alt="authentication">
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
  },

  async afterRender() {
    const inputEmailForgot = document.querySelector('#inputEmailForgot');

    FormEventChangeHandler.init({ inputEmailForgot });

    const verifyEmail = async ({ email }) => {
      try {
        const response = await AuthDbSource.postForgotPassword(
          { email },
        );
        if (response.status === 200) {
          await swalConfirm(`${response.data.message}`, '#/auth');
          inputEmailForgot.value = '';
        }
      } catch (error) {
        swalError(`${error.response.data.message}`);
        inputEmailForgot.value = '';
      }
    };

    document.querySelector('#submitForgotPassword').addEventListener('click', (e) => {
      e.preventDefault();

      if (inputEmailForgot.value !== '') {
        if (formEmailValidation(inputEmailForgot, '#alertEmailForgot')) {
          verifyEmail({ email: inputEmailForgot.value });
        }
      } else {
        emptyFormHandler(inputEmailForgot);
      }
    });
  },

};

export default ForgotPassword;
