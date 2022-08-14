import * as SecureStore from 'expo-secure-store';
import { StorageKeys } from '../../config/constants';

export const saveToken = async (token: string): Promise<void> => {
  return SecureStore.setItemAsync(StorageKeys.JwtToken, token);
};
