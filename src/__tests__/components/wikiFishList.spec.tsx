import React from "react";
import { render } from '@testing-library/react-native';

import { WikiFishList } from "../../components/WikiFishList";
import { IFish } from "../../components/WikiFishCard";
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

describe('Wiki Fish List', () => {
    it('Should Render Wiki Fish List if props are correct', () => {
        const result = render(<WikiFishList type="fishWiki" fishData={fishMock} handleNavigation={()=>{}} />, {
            wrapper: Providers
        });
        expect(result).toBeTruthy();
    });
});