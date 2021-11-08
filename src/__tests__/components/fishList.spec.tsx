import React from "react";
import { render } from '@testing-library/react-native';

import { FishList } from "../../components/FishList";
import { IFish } from "../../components/FishCard";
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';

const Providers: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        { children }
    </ThemeProvider>
);

const fishMock: IFish[] = [
    {
        _id: 'test',
        largeGroup: 'test',
        group: 'test',
        commonName: 'test',
        scientificName: 'test',
        family: 'test',
        food: 'test',
        habitat: 'test',
        maxSize: 1,
        maxWeight: 1,
        isEndemic: 'test',
        isThreatened: 'test',
        hasSpawningSeason: 'test',
        wasIntroduced: 'test',
        funFact: 'test',
        photo: 'test',
    }
];

describe('Default Button', () => {
    it('Should Render Default Button if props are correct', () => {
        const result = render(<FishList type="fishWiki" fishData={fishMock} handleNavigation={()=>{}} />, {
            wrapper: Providers
        });
        expect(result).toBeTruthy();
    });
});