import React from "react";
import { ThemeProvider } from 'styled-components';

import Navigation from "./src/navigation/navigation";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contexts/authContext";


export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  if (!fontLoaded)
    return <AppLoading />
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
            <AuthProvider>
              <Navigation />
            </AuthProvider>
        </NavigationContainer>
    </ThemeProvider>
  );
}

