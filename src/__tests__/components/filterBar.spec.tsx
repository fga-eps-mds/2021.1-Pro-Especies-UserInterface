import React from "react";
import { render, fireEvent } from '@testing-library/react-native';

import { FilterBar } from "../../components/FilterBar";
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';

const Providers: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        { children }
    </ThemeProvider>
);

const createTestProps = (props: Object) => ({
    navigation: {
      goBack: jest.fn()
    },
    ...props
});

describe('Filter Bar', () => {
    let props: any;
    beforeEach(() => {
        props = createTestProps({});
    });
    it('Should Render Filter Bar if props are correct', () => {
        const result = render(
            <FilterBar
            navigation={props.navigation}
            title="Filter Bar" 
            icon="filter" 
            iconText="icon" 
            buttonFunction={()=>{}} 
            />, {
            wrapper: Providers
        });
        const { getByTestId } = result;
        const backButton = getByTestId('button-back');
        fireEvent.press(backButton);
        expect(result).toBeTruthy();
    });
});