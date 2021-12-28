import React from "react";
import { Link } from "react-router-dom";
import { PlayerAPI } from "../global/PlayerAPI";
import { Info } from "./Info";

export const List = (): JSX.Element => {
    const { data } = PlayerAPI.useFetchAllQuery();
    return (
        <React.Fragment>
            <button>
                <Link to="/players/add">New Player</Link>
            </button>
            {data?.map((player) => (
                <Info 
                    key={player._id}
                    player={player}
                />
            ))}
        </React.Fragment>
    );
};




