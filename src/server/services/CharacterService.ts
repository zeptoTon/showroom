import * as express from "express";
import { Connection } from "mongoose";
import { ICharacter } from "../interfaces/CharacterInterface";
import { CharacterModel } from "../models/CharacterModel";

export default class CharacterService {

    private model: CharacterModel;

    constructor(connection: Connection) {
        this.model = new CharacterModel(connection);
    }

    public getAllHandler = (req: express.Request, res: express.Response): void => {

        this.model.fetchAllCharacters()
            .then((results) => {
                res.json(results);
            });
    }

    public createCharacterHandler = (req: express.Request, res: express.Response): void => {
        const c: ICharacter = {
            birth_year: req.body.birth_year || "",
            eye_color: req.body.eye_color || "",
            hair_color: req.body.hair_color || "",
            height: req.body.height || 0,
            is_male: req.body.is_male || false,
            mass: req.body.mass || 0,
            name: req.body.name || "",
            skin_color: req.body.skin_color || "",
        };
        this.model.createCharacter(c)
            .then((id) => {
                res.json({ id });
            });
    }

    public getSingleHandler = (req: express.Request, res: express.Response): void => {
        this.model.getCharacter(req.param("id", ""))
            .then((result) => {
                if (result === null) {
                    throw (new Error("item is not existed anymore"));
                }
                res.json(result);
            }).catch((err) => {
                res.sendStatus(404);
            });
    }

    public removeSingleHandler = (req: express.Request, res: express.Response): void => {
        this.model.removeCharacter(req.param("id", ""))
            .then((isRemoved) => {
                res.json({ isRemoved });
            });
    }

    public patchSingleHandler = (req: express.Request, res: express.Response): void => {
        this.model.updateCharacter(req.param("id", ""), req.body)
            .then((isModified) => {
                res.json({ isModified });
            });
    }

}
