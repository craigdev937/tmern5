import React from "react";
import { Link } from "react-router-dom";
import { IPlayer } from "../models/IPlayer";

type Props = {
    player: IPlayer,
};

export const Info = ({ player }: Props): JSX.Element => {
    return (
        <React.Fragment>
            <h2><Link 
                to={`/players/edit/${player._id}`}
                    >{player.title}
                </Link>
            </h2>
            <main key={player._id}>
                <p>{player.firstname} {player.lastname}</p>
                <p>Age: {player.age}</p>
                <p>Info: {player.info}</p>
            </main>
        </React.Fragment>
    );
};




