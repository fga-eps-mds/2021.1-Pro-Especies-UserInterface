import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userService } from '../services/userServices/userService';
import { UserLogin } from '../services/userServices/login';

interface IAuthProvider {
  children: React.ReactNode;
}

interface IAuthContext {
  userId: string;
  authenticated: boolean | undefined;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean | undefined>();
  const [userId, setUserId] = useState('');

  async function getValues() {
    const token = await AsyncStorage.getItem('@eupescador/token');
    const _userId = await AsyncStorage.getItem('@eupescador/userId');
    const userAdmin = await AsyncStorage.getItem('@eupescador/userAdmin');

    return { token, _userId, userAdmin };
  }
  const handleAutenticate = async () => {
    const values = await getValues();
    if (values.token && values._userId) {
      userService.defaults.headers.Authorization = `Bearer ${values.token}`;
      setAuthenticated(true);
      setUserId(JSON.stringify(values._userId));
    } else {
      setAuthenticated(false);
    }
  };
  useEffect(() => {
    handleAutenticate();
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const result = await UserLogin(email, password);
      console.log(result);

      await AsyncStorage.setItem('@eupescador/token', result.data.token);
      await AsyncStorage.setItem('@eupescador/userId', result.data.id);
      await AsyncStorage.setItem(
        '@eupescador/userAdmin',
        JSON.stringify(result.data.admin),
      );
        console.log('sadfasdf');
      userService.defaults.headers.Authorization = `Bearer ${result.data.token}`;
      setAuthenticated(true);
      setUserId(result.data.id);
      console.log('finaal');
      return result;
    } catch (error) {
      console.log(`${error.error} +++++++`);
      return error;
    }
  }

  async function signOut() {
    setAuthenticated(false);
    setUserId('');
    AsyncStorage.clear();
    userService.defaults.headers.Authorization = undefined;
  }

  return (
    <AuthContext.Provider
      value={{
        userId,
        signIn,
        signOut,
        authenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
