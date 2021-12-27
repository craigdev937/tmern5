import React from "react";
import { PlayerAPI } from "../global/PlayerAPI";
import { Info } from "./Info";

export const List = (): JSX.Element => {
    const { data } = PlayerAPI.useFetchAllQuery();

    return (
        <React.Fragment>
            {data?.map((player) => (
                <Info 
                    key={player._id}
                    player={player}
                />
            ))}
        </React.Fragment>
    );
};




