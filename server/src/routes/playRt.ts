import express from "express";
import { PLAYER } from "../controllers/playCon";

export const playRt: express.Router = express.Router();
    playRt.post("/", PLAYER.CreatePlayer);
    playRt.get("/", PLAYER.FetchAllPlayers);
    playRt.get("/:id", PLAYER.GetOnePlayer);
    playRt.put("/:id", PLAYER.UpdatePlayer);
    playRt.delete("/:id", PLAYER.DeletePlayer);


