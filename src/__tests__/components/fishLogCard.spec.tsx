import React from "react";
import { render, fireEvent } from '@testing-library/react-native';

import { FishLogCard, IFishLog } from "../../components/FishLogCard";
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';

const Providers: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        { children }
    </ThemeProvider>
);

const fishLogMock: IFishLog = {
    _id: 'test',
    userId: 1,
    name: 'test',
    largeGroup: 'test',
    group: 'test',
    species: 'test',
    coordenates: [[1, 1]],
    photo: 'test',
    length: 1,
    weight: 1,
    reviewed: true,
    reviewedBy: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    updatedBy: 1,
    deletedAt: new Date(),
    deletedBy: 1,
}

describe('FishLogCard', () => {
    it('Should Render FishCard if props are correct', () => {
        const result = render(<FishLogCard 
            fishLog={fishLogMock} 
            isHidden={false} 
            selectAll={true} 
            cardFunction={()=>{}} 
            selectFunction={()=>{}} 
            deselectFunction={()=>{}}
            />, {
            wrapper: Providers
        });
        const { getByTestId } = result;
        const button = getByTestId('checkbox-button');
        fireEvent.press(button);
        expect(result).toBeTruthy();
    });
});