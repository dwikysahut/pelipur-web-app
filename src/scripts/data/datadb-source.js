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

  static async getCityById(token, id) {
    const response = await axios.get(API_ENDPOINT.GET_CITY_BY_ID(id), {
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

  static async getAllPartners(token) {
    const response = await axios.get(API_ENDPOINT.GET_PARTNERS, {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
  }

  static async postPartner(token, body) {
    const response = await axios.post(API_ENDPOINT.POST_PARTNER, body, {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
  }

  static async putPartner(token, body, id) {
    const response = await axios.put(API_ENDPOINT.EDIT_PARTNER(id), body, {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
  }

  static async deletePartner(token, id) {
    const response = await axios.delete(API_ENDPOINT.DELETE_PARTNER(id), {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
  }

  static async getPartnerById(token, id) {
    const response = await axios.get(API_ENDPOINT.GET_PARTNER_BY_ID(id), {
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

  static async getCollectionsByUser(token, id) {
    const response = await axios.get(API_ENDPOINT.GET_COLLECTION_BY_USER(id), {
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

  static async getCollectionsByMonth() {
    const response = await axios.get(API_ENDPOINT.GET_COLLECTIONS_COUNT_BY_MONTH, {

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

  static async confirmCollection(token, body, id) {
    const response = await axios.put(API_ENDPOINT.PUT_CONFIRMATION_COLLECTION(id), body, {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
  }

  static async putCollection(token, body, id) {
    const response = await axios.put(API_ENDPOINT.PUT_COLLECTION(id), body, {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
  }

  static async postCity(token, body) {
    const response = await axios.post(API_ENDPOINT.POST_CITY, body, {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
  }

  static async putCity(token, body, id) {
    const response = await axios.put(API_ENDPOINT.EDIT_CITY(id), body, {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
  }

  static async deleteCity(token, id) {
    const response = await axios.delete(API_ENDPOINT.DELETE_CITY(id), {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
  }

  static async getAllNews() {
    const response = await axios.get(API_ENDPOINT.GET_ALL_NEWS);
    console.log(response);
    return response;
    // const response =
  }

  static async getAllNewsEnv() {
    const response = await axios.get(API_ENDPOINT.GET_NEWS_BY_ID);
    console.log(response);
    return response;
    // const response =
  }
}

export default DataDbSource;
