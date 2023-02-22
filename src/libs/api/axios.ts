import axios from 'axios';

import { API_BASE_URL, IS_CLIENT } from '~/config';

export const api = createAxiosInstance(API_BASE_URL);

function createAxiosInstance(baseURL: string) {
  const instance = axios.create({
    baseURL,
    timeout: 5_000,
    withCredentials: false,
  });

  if (IS_CLIENT && process.env.NODE_ENV === 'development') {
    instance.interceptors.request.use(
      (config) => {
        const method = config.method ?? '';
        // console.groupCollapsed('Request Logging...');
        console.log(`%c📌 API Request  Logging.. [${method.toUpperCase()}] ${config.url}`, 'color: #37b24d;');
        const isBody = ['post', 'put', 'patch'].includes(method);
        if ((isBody && config.data) || (!isBody && config.params)) {
          console.log(
            `[ ${['post', 'put', 'patch'].includes(method) ? 'body' : 'params'} ]`,
            config.params ?? config.data,
          );
        }
        return config;
      },
      (err) => Promise.reject(err),
    );
    instance.interceptors.response.use(
      (res) => {
        console.log(
          `%c📫 API Response Logging.. [${res.config.method?.toUpperCase()}] ${res.config.url}`,
          'color: #31B4D9;',
          res.data,
        );
        return res;
      },
      (err) => {
        if (err.response?.data?.message) {
          console.log(
            `%c[ URL ] ${err.response.config.url} [ MESSAGE ] ${JSON.stringify(err.response.data.message)}`,
            'color: #f03e3e;',
          );
        }
        return Promise.reject(err);
      },
    );
  }

  return instance;
}
