import Axios, { AxiosInstance } from 'axios';

const baseAxios = (): AxiosInstance => {
  return Axios.create({
    timeout: 1500
  });
};

const ApiWithoutToken = (): AxiosInstance => {
  const axios = baseAxios();
  axios.interceptors.request.use();
  axios.interceptors.response.use();
  return axios;
};

export { ApiWithoutToken };
