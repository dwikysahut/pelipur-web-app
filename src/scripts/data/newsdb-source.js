import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class NewsDbSource {
  static async getAllNews() {
    const response = await axios.get(API_ENDPOINT.GET_NEWS_API);
    console.log(response);
    return response;
    // const response =
  }
}

export default NewsDbSource;
