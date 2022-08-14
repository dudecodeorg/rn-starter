import * as SecureStore from 'expo-secure-store';
import { StorageKeys } from '../../config/constants';

export const saveToken = async (token: string): Promise<void> => {
  return SecureStore.setItemAsync(StorageKeys.JwtToken, token);
};

export const cleanTokens = async (): Promise<void[]> => {
  return Promise.all([SecureStore.deleteItemAsync(StorageKeys.JwtToken)]);
};
