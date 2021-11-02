import React from "react";
import { render } from '@testing-library/react-native';

import { DefaultButton } from "../../components/Button";
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';

const Providers: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        { children }
    </ThemeProvider>
);

describe('HomeScreen', () => {
    it('Should Render HomeScreen', () => {
        render(<DefaultButton text="oi" buttonFunction={()=>{}} />, {
            wrapper: Providers
        });
    
    });
});