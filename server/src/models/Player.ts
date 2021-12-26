import mongoose from "mongoose";

export interface IPlayer extends mongoose.Document {
    title: string,
    firstname: string,
    lastname: string,
    age: number,
    info: string
};

const PlayerSchema: mongoose.Schema = new mongoose.Schema({
    title: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    age: { type: String },
    info: { type: String },
});

export const Player = mongoose.model<IPlayer>("Player", PlayerSchema);



