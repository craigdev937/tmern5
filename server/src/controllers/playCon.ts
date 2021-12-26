import express from "express";

export const HomeIndex: express.RequestHandler =
(req, res) => {
    res.json({ API: "TMERN Project!" });
};




