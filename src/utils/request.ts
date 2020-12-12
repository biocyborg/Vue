import axios from 'axios';
import store from '@/store';
import router from '@/router/index';

const request = axios.create({
  baseURL: process.env.VUE_APP_API,
  transformResponse: [(data: string) => {
    try {
      return JSON.parse(data);
    } catch (err) {
      return data;
    }
  }]
});

// 请求拦截器
request.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Access-Token'] = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 响应拦截器
request.interceptors.response.use((response) => {
  return response.data.data || response.data;
}, (error) => {
  return Promise.reject(error);
});

export default request;
