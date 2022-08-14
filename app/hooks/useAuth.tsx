import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { saveToken } from '../services/storage/secureStorageService';

type AuthContextType = {
  isAuthorized: boolean;
  login: () => Promise<boolean>;
  checkLoginStatus: () => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthorized, setAuthorized] = useState(false);

  const checkLoginStatus = async (): Promise<boolean> => {
    return false;
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
    }),
    [isAuthorized]
  );

  return <AuthContext.Provider value={memorizedValue}>{children}</AuthContext.Provider>;
}

export default function useAuth() {
  return useContext(AuthContext);
}
