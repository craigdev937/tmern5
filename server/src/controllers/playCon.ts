import express from "express";
import { Player, IPlayer } from "../models/Player";

export const CreatePlayer: express.RequestHandler =
async (req, res, next) => {
    try {
        const player: IPlayer = new Player({
            title: req.body.title,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            info: req.body.info
        })
        await player.save()
        .then((player) => res.status(200).json(player));
    } catch (error) {
        res.status(500).json("Error: " + error);
        next(error);
    }
};

export const FetchAllPlayers: express.RequestHandler =
async (req, res, next) => {
    try {
        await Player.find()
        .then((player) => res.json(player));
    } catch (error) {
        res.status(500).json("Error: " + error);
        next(error);
    }
};

export const GetOnePlayer: express.RequestHandler =
async (req, res, next) => {
    try {
        await Player.findById(req.params.id)
        .then((player) => res.status(200)
        .json(player));
    } catch (error) {
        res.status(500).json("Error: " + error);
        next(error);
    }
};

export const UpdatePlayer: express.RequestHandler =
async (req, res, next) => {
    try {
        await Player.findById(req.params.id)
        .then((player) => {
            if (player !== null) {
                player.title = req.body.title;
                player.firstname = req.body.firstname;
                player.lastname = req.body.lastname;
                player.age = req.body.age;
                player.info = req.body.info;
                player.save()
                .then(() => res.status(200).json(player))
            };
        })
    } catch (error) {
        res.status(500).json("Error: " + error);
        next(error);
    }
};

export const DeletePlayer: express.RequestHandler =
async (req, res, next) => {
    try {
        await Player.findByIdAndDelete(req.params.id)
        .then(() => res.status(200)
        .json("The Post was Deleted!"));
    } catch (error) {
        res.status(500).json("Error: " + error);
        next(error);
    }
};





