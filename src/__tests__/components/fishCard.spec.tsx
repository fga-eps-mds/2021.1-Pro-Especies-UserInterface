import React from "react";
import { render } from '@testing-library/react-native';

import { FishCard } from "../../components/FishCard";
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';

const Providers: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        { children }
    </ThemeProvider>
);

describe('FishCard', () => {
    it('Should Render FishCard if props are correct', () => {
        const result = render(<FishCard cardFunction={()=>{}} />, {
            wrapper: Providers
        });
        expect(result).toBeTruthy();
    });
});