import React from "react";
import { ThemeProvider } from 'styled-components';

import { Welcome } from "./src/components/Welcome";

import theme from "./src/global/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Welcome title="Olá Pró-Espécies Peixes" />
    </ThemeProvider>
  );
}

