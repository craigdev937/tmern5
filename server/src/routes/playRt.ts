import express from "express";
import { CreatePlayer, FetchAllPlayers, GetOnePlayer, UpdatePlayer, 
    DeletePlayer } from "../controllers/playCon";

export const playRt: express.Router = express.Router();
    playRt.post("/", CreatePlayer);
    playRt.get("/", FetchAllPlayers);
    playRt.get("/:id", GetOnePlayer);
    playRt.put("/:id", UpdatePlayer);
    playRt.delete("/:id", DeletePlayer);


