import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { trim } from "./middleware/trim";
import { playRt } from "./routes/playRt";

(async () => {
    const app: express.Application = express();
    app.use(helmet());

    // CORS Setup
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods",
                "POST, GET, PUT, PATCH, DELETE");
            return res.status(200).json({ "status message": "OK" });
        }
        next();
    });

    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(logger("dev"));
    app.use(trim);
    app.use("/api", playRt);
    const port = process.env.PORT || 9000;
    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    })
})().catch((error) => console.log(error));





