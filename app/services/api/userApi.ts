import { appApi } from './baseApi';

export const getUserApi = () => {
  return appApi.get(`/users/2`);
};
