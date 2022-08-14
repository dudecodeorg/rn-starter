import axios from 'axios';

export const appApi = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 1000,
});
