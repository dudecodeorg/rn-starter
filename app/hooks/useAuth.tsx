import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { cleanTokens, saveToken } from '../services/storage/secureStorageService';

type AuthContextType = {
  isAuthorized: boolean;
  login: () => Promise<boolean>;
  checkLoginStatus: () => Promise<boolean>;
  logOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthorized, setAuthorized] = useState(false);

  const checkLoginStatus = async (): Promise<boolean> => {
    return false;
  };

  const logOut = async (): Promise<void> => {
    try {
      await cleanTokens();
      setAuthorized(false);
    } catch (e) {
      console.error(e);
    }
  };

  const login = async (): Promise<boolean> => {
    try {
      await saveToken('rand-token');
      setAuthorized(true);
      return true;
    } catch (e) {
      setAuthorized(false);
      return false;
    }
  };

  const memorizedValue = useMemo(
    () => ({
      isAuthorized,
      checkLoginStatus,
      login,
      logOut,
    }),
    [isAuthorized]
  );

  return <AuthContext.Provider value={memorizedValue}>{children}</AuthContext.Provider>;
}

export default function useAuth() {
  return useContext(AuthContext);
}
