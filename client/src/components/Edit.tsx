import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PlayerAPI } from "../global/PlayerAPI";
import { IPlayer } from "../models/IPlayer";

export const Edit = (): JSX.Element => {
    const navigate = useNavigate();
    let match = useParams();
    const playerID = match.id;
    const [player, setPlayer] = React.useState<IPlayer>({
        _id: playerID!, title: "", firstname: "",
        lastname: "", age: 0, info: ""
    });

    const { data: playerData,
        isSuccess: playerDataReady } = 
    PlayerAPI.useGetOneQuery(playerID!);

    const [deletePlayer, {
        isLoading: isDeleting, isSuccess: isDeleted
    }] = PlayerAPI.useDeleteMutation();

    const [editPlayer, {
        isLoading: isUpdating, isSuccess: isSaved
    }] = PlayerAPI.useUpdateMutation();

    React.useEffect(() => {
        if (playerDataReady) {
            setPlayer(playerData!);
        }
    }, [playerData, playerDataReady]);

    function goBack(time: number) {
        setTimeout(() => {
            navigate("/");
        }, time);
    };

    function removePlayer() {
        deletePlayer(playerID!);
        goBack(700);
    };

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayer({...player, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = 
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await editPlayer(player);
        setPlayer({
            _id: playerID!, title: "", firstname: "",
            lastname: "", age: 0, info: ""
        });
        goBack(700);
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <aside>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        name="title"
                        placeholder="Title"
                        value={player.title}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="first">First</label>
                    <input 
                        type="text" 
                        name="firstname"
                        placeholder="First Name"
                        value={player.firstname}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="last">Last</label>
                    <input 
                        type="text" 
                        name="lastname"
                        placeholder="Last Name"
                        value={player.lastname}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="age">Age</label>
                    <input 
                        type="text" 
                        name="age"
                        placeholder="Age"
                        value={player.age}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="info">Info</label>
                    <input 
                        type="text" 
                        name="info"
                        placeholder="Info"
                        value={player.info}
                        onChange={handleChange}
                    />
                </aside>
                <footer>
                    <button><Link to="/">Cancel</Link></button>
                    <button
                        onClick={removePlayer}
                        >{isDeleting ? "Deleting..." : "Delete"}
                    </button>
                    <button
                        type="submit"
                        >{isUpdating ? "Updating..." : "Update"}
                    </button>
                </footer>
                {isDeleted && (
                    <aside>Player was Deleted, redirecting...</aside>
                )}
                {isSaved && (
                    <aside>Player saved, redirecting...</aside>
                )}
            </form>
        </React.Fragment>
    );
};




