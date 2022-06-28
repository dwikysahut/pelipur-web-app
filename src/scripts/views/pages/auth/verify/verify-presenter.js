/* eslint-disable no-param-reassign */
import FormEventChangeHandler from '../../../../utils/form-event-change-handler';
import {
  emptyFormHandler, formEmailValidation, swalConfirm, swalError, openLoader, closeLoader,
} from '../../../../utils/function-helper';

class VerifyPresenter {
  constructor({ view, authDb }) {
    this._view = view;
    this._authDb = authDb;

    this._formVerifyEventChangeHandler();
    this._verifyFormHandler();
  }

  // handler change login form input
  _formVerifyEventChangeHandler() {
    this._view.getVerifyFormInputListener(({ inputEmailVerif, inputCodeVerif }) => {
      FormEventChangeHandler.init({ inputEmailVerif, inputCodeVerif });
    });
  }

  _verifyFormHandler() {
    this._view.verifyFormInputListener(async ({ inputEmailVerif, inputCodeVerif }) => {
      if (inputEmailVerif.value !== '' && inputCodeVerif.value !== '') {
        if (formEmailValidation(inputEmailVerif, this._view.alertEmailVerif())) {
          await this._verifyEmail({ email: inputEmailVerif.value, kode: inputCodeVerif.value });
          inputEmailVerif.value = '';
          inputCodeVerif.value = '';
        }
      } else {
        emptyFormHandler(inputEmailVerif, inputCodeVerif);
      }
    });
  }

  async _verifyEmail({ email, kode }) {
    try {
      openLoader(this._view.loaderListener());
      const response = await this._authDb.postVerifyEmail(
        { email, kode },
      );
      if (response.status === 200) {
        await swalConfirm(`${response.data.message}`, '#/auth');
      }
    } catch (error) {
      await swalError(`${error.response.data.message}`);
    } finally {
      closeLoader(this._view.loaderListener());
    }
  }
}
export default VerifyPresenter;
