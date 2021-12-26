import express from "express";
import { HomeIndex } from "../controllers/playCon";

export const playRt: express.Router = express.Router();
    playRt.get("/", HomeIndex);



