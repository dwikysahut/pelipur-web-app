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

  static async getPartnersByCity(id, token) {
    const response = await axios.get(API_ENDPOINT.GET_PARTNER_BY_CITIES(id), {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
  }

  static async getAllCollections(token) {
    const response = await axios.get(API_ENDPOINT.GET_COLLECTIONS, {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
  }

  static async getAllDataCount(token) {
    const response = await axios.get(API_ENDPOINT.GET_DATAS_COUNT, {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
  }

  static async getAllDesc(token) {
    const response = await axios.get(API_ENDPOINT.GET_DESC, {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
  }

  static async getUserById(token, id) {
    const response = await axios.get(API_ENDPOINT.GET_USER_BY_ID(id), {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
  }

  static async putUserById(token, body, id) {
    const response = await axios.put(API_ENDPOINT.EDIT_PROFILE(id), body, {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
  }
}

export default DataDbSource;
