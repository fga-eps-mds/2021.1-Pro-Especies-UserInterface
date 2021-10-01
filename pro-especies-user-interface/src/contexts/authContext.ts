import React, { createContext, useState, useEffect, useContext } from "react";
import { userService } from "../services/userServices/userService";
import { useHistory } from "react-router-dom";
import { UserLogin } from "../services/userServices/login";
import AsyncStorage from "@react-native-community/async-storage";

interface IAuthProvider {
  children: React.ReactNode;
}

interface IAuthContext {
  userId: string;
  authenticated: boolean | undefined;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<IAuthProvider> = ({children}) => {
  // const history = useHistory();
  const [authenticated, setAuthenticated] = useState<boolean | undefined>();
  const [userId, setUserId] = useState<string | undefined>();

  useEffect(() => {
    const token = AsyncStorage.getItem("@eupescador/token");
    const _userId = AsyncStorage.getItem("@eupescador/userId");

    if (token && _userId) {
      userService.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      setUserId(_userId);
    } else {
      setAuthenticated(false);
    }
  }, []);

  async function signIn(email: string, password: string) {
    const result = await UserLogin(email, password);
    if (typeof result == "string") {
      return result;
    }

    await AsyncStorage.setItem("@eupescador/token", result.token);
    await AsyncStorage.setItem("@eupescador/userId", result.user.id);
    userService.defaults.headers.Authorization = `Bearer ${result.token}`;
    setAuthenticated(true);
    setUserId(result.user.id);
    // navigation.push("Wiki");
  }

  async function signOut() {
    setAuthenticated(false);
    setUserId('');
    AsyncStorage.clear();
    userService.defaults.headers.Authorization = undefined;
    // navigation.push("Wiki");
    // setTimeout(function () {
      // window.location.reload();
    // });
  }

  return (
    <AuthContext.Provider value={{ 
        userId,
        signIn,
        signOut,
        authenticated 
    }}>
        {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => useContext(AuthContext);
