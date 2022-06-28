import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class AuthDbSource {
  static async postLogin(body) {
    const response = await axios.post(API_ENDPOINT.LOGIN, body);
    return response;
    // const response =
  }

  static async postRegister(body) {
    const response = await axios.post(API_ENDPOINT.REGISTER, body);
    return response;
  }

  static async postVerifyEmail(body) {
    const response = await axios.post(API_ENDPOINT.VERIFY_EMAIL, body);
    return response;
  }

  static async postForgotPassword(body) {
    const response = await axios.post(API_ENDPOINT.FORGOT_PASSWORD, body);
    return response;
  }

  static async postLogout(body) {
    const response = await axios.post(API_ENDPOINT.LOGOUT, body);
    return response;
  }

  static async refreshToken(body) {
    const response = await axios.post(API_ENDPOINT.REFRESH_TOKEN, body);
    return response;
  }
}

export default AuthDbSource;
