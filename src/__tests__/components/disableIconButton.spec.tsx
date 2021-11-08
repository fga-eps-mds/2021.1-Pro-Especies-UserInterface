import React from "react";
import { render, fireEvent } from '@testing-library/react-native';


import { DisableIconButton } from "../../components/DisableIconButton";
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';

const Providers: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        { children }
    </ThemeProvider>
);

describe('Disable Icon Button', () => {
    it('Should Render Disable Icon Button', () => {
        const result = render(<DisableIconButton 
            name="login"
            disabled={true}
            onPress={() => {}}
        />, {
            wrapper: Providers
        });
        const { getByTestId } = result;
        const button = getByTestId('button-icon');
        fireEvent.press(button);
        expect(result).toBeTruthy();
    });
});