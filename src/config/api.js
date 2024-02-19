import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const baseURL = process.env.API_URL;
const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  async function (config) {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers = {
          Authorization: `Bearer ${token}`,
        };
      }
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default api;
