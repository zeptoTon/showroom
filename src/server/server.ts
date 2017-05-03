import * as bluebird from "bluebird";
import * as bodyParser from "body-parser";
import * as express from "express";
import CharacterService from "./services/CharacterService";
import mongoose = require("mongoose");
mongoose.Promise = bluebird;
const MONGODB_CONNECTION: string = "mongodb://localhost:27017/showroom";
const connection = mongoose.createConnection(MONGODB_CONNECTION);
const app = express();

const characterService = new CharacterService(connection);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/characters", characterService.getAllHandler);
app.post("/characters", characterService.createCharacterHandler);
app.get("/characters/:id", characterService.getSingleHandler);
app.patch("/characters/:id", characterService.patchSingleHandler);
app.delete("/characters/:id", characterService.removeSingleHandler);

/**
 * TODO:
 * batch remove, batch update(for fav in future)
 */

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
