/* eslint-disable no-param-reassign */
import FormEventChangeHandler from '../../../../utils/form-event-change-handler';
import {
  emptyFormHandler, formEmailValidation, swalConfirm, swalError,
} from '../../../../utils/function-helper';

class ForgotPasswordPresenter {
  constructor({ view, authDb }) {
    this._view = view;
    this._authDb = authDb;

    this._formForgotEventChangeHandler();
    this._forgotFormHandler();
  }

  // handler change login form input
  _formForgotEventChangeHandler() {
    this._view.getForgotFormInputListener(({ inputEmailForgot }) => {
      FormEventChangeHandler.init({ inputEmailForgot });
    });
  }

  _forgotFormHandler() {
    this._view.forgotFormInputListener(async ({ inputEmailForgot }) => {
      if (inputEmailForgot.value !== '') {
        if (formEmailValidation(inputEmailForgot, '#alertEmailForgot')) {
          await this._forgotPasswordHandler({ email: inputEmailForgot.value });
          inputEmailForgot.value = '';
        }
      } else {
        emptyFormHandler(inputEmailForgot);
      }
    });
  }

  async _forgotPasswordHandler({ email }) {
    try {
      const response = await this._authDb.postForgotPassword(
        { email },
      );
      if (response.status === 200) {
        await swalConfirm(`${response.data.message}`, '#/auth');
      }
    } catch (error) {
      swalError(`${error.response.data.message}`);
    }
  }
}
export default ForgotPasswordPresenter;
