import mongoose = require("mongoose");

import { character, CharacterModel } from "../models/CharacterModel";

import { ICharacter, ICharacterModel } from "../interfaces/CharacterInterface";

import * as bluebird from "bluebird";

const MONGODB_CONNECTION: string = "mongodb://localhost:27017/showroom-test";

describe("Character Model test suite", () => {

    let connection: mongoose.Connection;
    let model: CharacterModel;
    let Characters: mongoose.Model<ICharacterModel>;
    const dummyCharacter = {
        birth_year: "2017",
        eye_color: "blue",
        hair_color: "green",
        height: 170,
        is_male: true,
        mass: 50,
        name: "Tony",
        skin_color: "red",
    };

    /**
     * Connect to DB
     */
    beforeAll(async () => {
        mongoose.Promise = bluebird;
        connection = mongoose.createConnection(MONGODB_CONNECTION);
        Characters = connection.model<ICharacterModel>("Character", character);
        await Characters.remove({});

        model = new CharacterModel(connection);
    });

    /**
     * Clear DB & remove connection
     */
    afterAll(async () => {
        await Characters.remove({});
        await connection.db.dropDatabase();
        await connection.close();
    });

    it("can create a new Character", async () => {
        const result = await model.createCharacter(dummyCharacter);
        expect(result).not.toBeUndefined();
    });

    it("can fetch Characters", async () => {
        let result = await model.fetchAllCharacters();
        expect(result).toHaveLength(1);
        await model.createCharacter(dummyCharacter);
        result = await model.fetchAllCharacters();
        expect(result).toHaveLength(2);
    });

    it("can delete a Character", async () => {
        const result = await model.fetchAllCharacters();
        let isRemoved = await model.removeCharacter(result[0]._id);
        expect(isRemoved).toBe(true);
        isRemoved = await model.removeCharacter("");
        expect(isRemoved).toBe(false);
    });

    it("can not delete non existed Character", async () => {
        const isRemoved = await model.removeCharacter("abcd");
        expect(isRemoved).toBe(false);
    });

    it("can get a Character By ID", async () => {
        const result = await model.fetchAllCharacters();
        const resultByGet = await model.getCharacter(result[0]._id);
        expect(result[0]._id).toEqual(resultByGet._id);
    });

    it("can update a Character", async () => {
        const result = await model.fetchAllCharacters();
        await model.updateCharacter(result[0]._id, {
            skin_color: "TESTING_COLOR",
        });
        const resultByGet = await model.getCharacter(result[0]._id);
        expect(resultByGet.skin_color).toEqual("TESTING_COLOR");
    });

});


