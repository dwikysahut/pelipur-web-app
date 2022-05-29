import CONFIG from './config';

const API_ENDPOINT = {
  // auth
  LOGIN: `${CONFIG.BASE_URL}auth/login`,
  REGISTER: `${CONFIG.BASE_URL}auth/register`,
  REFRESH_TOKEN: `${CONFIG.BASE_URL}auth/refresh-token`,
  FORGOT_PASSWORD: `${CONFIG.BASE_URL}auth/forgot-password`,
  VERIFY_EMAIL: `${CONFIG.BASE_URL}auth/verify`,
  LOGOUT: `${CONFIG.BASE_URL}auth/logout`,
  // user
  UPDATE_PASSWORD: (id) => `${CONFIG.BASE_URL}users/${id}/password`,
  EDIT_PROFILE: (id) => `${CONFIG.BASE_URL}users/${id}`,
  GET_USER_BY_ID: (id) => `${CONFIG.BASE_URL}users/${id}`,
  // partner
  GET_PARTNER_BY_ID: (id) => `${CONFIG.BASE_URL}partners/${id}`,
  GET_PARTNERS: `${CONFIG.BASE_URL}partners`,
  POST_PARTNER: `${CONFIG.BASE_URL}partners`,
  EDIT_PARTNER: (id) => `${CONFIG.BASE_URL}partners/${id}`,
  DELETE_PARTNER: (id) => `${CONFIG.BASE_URL}partners/${id}`,
  GET_PARTNER_BY_CITIES: (id) => `${CONFIG.BASE_URL}partners/${id}/cities`,
  // city
  GET_CITIES: `${CONFIG.BASE_URL}cities`,
  GET_CITY_BY_ID: (id) => `${CONFIG.BASE_URL}cities/${id}`,
  POST_CITY: `${CONFIG.BASE_URL}cities`,
  EDIT_CITY: (id) => `${CONFIG.BASE_URL}cities/${id}`,
  DELETE_CITY: (id) => `${CONFIG.BASE_URL}cities/${id}`,
  // collection
  GET_COLLECTIONS: `${CONFIG.BASE_URL}collections`,
  GET_COLLECTION_BY_ID: (id) => `${CONFIG.BASE_URL}collections/${id}`,
  POST_COLLECTION: `${CONFIG.BASE_URL}collections`,
  PUT_CONFIRMATION_COLLECTION: (id) => `${CONFIG.BASE_URL}collections/confirmation/${id}`,
  PUT_FINISH_COLLECTION: (id) => `${CONFIG.BASE_URL}collections/${id}`,
  GET_COLLECTION_BY_USER: (id) => `${CONFIG.BASE_URL}collections/users/${id}`,

  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  POST_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
