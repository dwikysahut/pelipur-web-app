import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class AuthDbSource {
  static async postLogin(body) {
    console.log(API_ENDPOINT.LOGIN);
    const response = await axios.post('http://localhost:5000/auth/login', body);
    return response;
    // const response =
  }
}

export default AuthDbSource;
