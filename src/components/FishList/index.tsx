import React from "react";
import { FishCard, IFish, IFishLog } from "../FishCard";
import { FishCardList } from "./styles";

interface FishListProps {
    fishData: IFishLog[] | IFish[];
    type: "fishWiki" | "fishLog";
    handleNavigation: (id: string) => void;
}

export const FishList = ({ fishData, type, handleNavigation }: FishListProps) => {

    return (
        <FishCardList
            data={fishData}
            renderItem={({ item }) => (
                <>
                    {type === "fishLog" ?
                        (<FishCard
                            fishLog={item as IFishLog}
                            cardFunction={() => { handleNavigation(item._id) }}
                        />) :
                        (<FishCard
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