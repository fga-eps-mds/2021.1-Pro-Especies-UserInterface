import React from "react";
import { ThemeProvider } from 'styled-components';

import { Register } from './src/pages/Register';

import theme from "./src/global/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Register/>
    </ThemeProvider>
  );
}

