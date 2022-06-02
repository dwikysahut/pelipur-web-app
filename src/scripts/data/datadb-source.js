import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class DataDbSource {
  static async postColletion(body, token) {
    const response = await axios.post(API_ENDPOINT.POST_COLLECTION, body, {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
    // const response =
  }

  static async getCities(token) {
    const response = await axios.get(API_ENDPOINT.GET_CITIES, {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
  }
}

export default DataDbSource;
