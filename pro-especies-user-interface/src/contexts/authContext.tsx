import React, { createContext, useState, useEffect, useContext } from "react";
import { userService } from "../services/userServices/userService";
import { UserLogin } from "../services/userServices/login";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  function getValues() {
    const token = AsyncStorage.getItem("@eupescador/token");
    const _userId = AsyncStorage.getItem("@eupescador/userId");
    const userAdmin = AsyncStorage.getItem("@eupescador/userAdmin");

    return { token, _userId, userAdmin };
  }

  useEffect(() => {
    const values = getValues();

    if (values.token && values._userId) {
      userService.defaults.headers.Authorization = `Bearer ${values.token}`;
      setAuthenticated(true);
      setUserId(JSON.stringify(values._userId));
    } else {
      setAuthenticated(false);
    }
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const result = await UserLogin(email, password);
      // console.log(result);
      
      await AsyncStorage.setItem("@eupescador/token", result.data.token);
      await AsyncStorage.setItem("@eupescador/userId", result.data.id);
      await AsyncStorage.setItem("@eupescador/userAdmin", JSON.stringify(result.data.admin));

      userService.defaults.headers.Authorization = `Bearer ${result.data.token}`;
      setAuthenticated(true);
      setUserId(result.data.id);

      return result;
    } catch (error) {
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
    <AuthContext.Provider value={{
      userId,
      signIn,
      signOut,
      authenticated
    }}
    >
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => useContext(AuthContext);
