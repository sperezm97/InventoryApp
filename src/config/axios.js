import axios from 'axios';
import getStore from '../store';
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {

  }
});


// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const store = getStore();

    config.headers
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
