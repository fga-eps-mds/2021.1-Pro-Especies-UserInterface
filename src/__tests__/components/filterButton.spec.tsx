import React from "react";
import { render, fireEvent } from '@testing-library/react-native';


import { FilterButton } from "../../components/FilterButton";
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';

const Providers: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        { children }
    </ThemeProvider>
);

const createTestProps = (props: Object) => ({
    navigation: {
      navigate: jest.fn()
    },
    ...props
});

describe('Filter Button', () => {
    let props: any;
    beforeEach(() => {
        props = createTestProps({});
    });
    it('Should Render Filter Button with url prop', () => {
        const result = render(<FilterButton 
            url="test"
            navigation={props.navigation}
        />, {
            wrapper: Providers
        });
        const { getByTestId } = result;
        const button = getByTestId('button-filter');
        fireEvent.press(button);
        expect(result).toBeTruthy();
    });
});