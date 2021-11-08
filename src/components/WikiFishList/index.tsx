import React from "react";
import { WikiFishCard, IFish, IFishLog } from "../WikiFishCard";
import { FishCardList } from "./styles";

interface FishListProps {
    fishData: IFishLog[] | IFish[];
    type: "fishWiki" | "fishLog";
    handleNavigation: (id: string) => void;
}

export const WikiFishList = ({ fishData, type, handleNavigation }: FishListProps) => {

    return (
        <FishCardList
            data={fishData}
            renderItem={({ item, index }) => (
                <>
                    {type === "fishLog" ?
                        (<WikiFishCard
                            fishLog={item as IFishLog}
                            cardFunction={() => { item._id ? handleNavigation(item._id) : handleNavigation(index.toString()) }}
                        />) :
                        (<WikiFishCard
                            fishWiki={item as IFish}
                            cardFunction={() => { handleNavigation(item._id) }}
                        />)
                    }
                </>
            )}
            keyExtractor={item => item._id}
        />
    );
}