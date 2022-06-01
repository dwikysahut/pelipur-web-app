import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class CollectionDbSource {
  static async postColletion(body, token) {
    const response = await axios.post(API_ENDPOINT.POST_COLLECTION, body, {
      headers: {
        Authorization: `${token}`,

      },
    });
    return response;
    // const response =
  }
}

export default CollectionDbSource;
