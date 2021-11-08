import React from "react";
import { render, fireEvent } from '@testing-library/react-native';


import { DraftButton } from "../../components/DraftButton";
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';

const Providers: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        { children }
    </ThemeProvider>
);

describe('Draft Button', () => {
    it('Should Render Draft Button', () => {
        const result = render(<DraftButton />, {
            wrapper: Providers
        });
        const { getByTestId } = result;
        const button = getByTestId('button-draft');
        fireEvent.press(button);
        expect(result).toBeTruthy();
    });
});