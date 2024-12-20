import React, {
  createContext,
  useState,
  useEffect,
  FC,
  ReactNode,
} from 'react';
import {
  login as loginAction,
  checkAuth as checkAuthAction,
  logout as logoutAction,
} from '../API'; // Assicurati di importare le funzioni corrette
import { IUser } from '../utils/interfaces/user.interface';

interface AuthContextType {
  isLoggedIn: boolean;
  user: IUser | null;
  login: (
    email: string,
    password: string,
  ) => Promise<{ error: boolean; message?: string }>;
  logout: () => Promise<void | { error: boolean; message?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const { isLoggedIn, user } = await checkAuthAction();
        setIsLoggedIn(isLoggedIn);
        setUser(user);
      } catch (error) {
        console.error('Error during initializeAuth:', error);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      console.log('Attempting login with email:', email);
      const { isLoggedIn, user } = await loginAction(email, password);
      if (!isLoggedIn) {
        return { error: true, message: 'Login failed' };
      }
      setUser(user);
      setIsLoggedIn(isLoggedIn);
      return { error: false };
    } catch (error: any) {
      console.error('Login failed:', error);
      setIsLoggedIn(false);
      return {
        error: true,
        message: 'Login failed',
        status: error.response?.status,
      };
    }
  };

  const logout = async () => {
    const result = await logoutAction();
    if (result.isLoggedOut) {
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthContext };
