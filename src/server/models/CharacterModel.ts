import { Connection, createConnection, Document, Model, Schema } from "mongoose";
import { ICharacter, ICharacterModel } from "../interfaces/CharacterInterface";

export const character: Schema = new Schema({
    birth_year: String,
    eye_color: String,
    hair_color: String,
    height: Number,
    is_male: Boolean,
    mass: Number,
    name: String,
    skin_color: String,
});

export class CharacterModel {

    private model: Model<ICharacterModel>;

    constructor(connection: Connection) {
        this.model = connection.model<ICharacterModel>("Character", character);
    }

    public getCharacter(id: string): Promise<ICharacterModel> {
        return this.model.findById(id).exec();
    }

    public removeCharacter(id: string): Promise<boolean> {
        if (id === "") {
            return Promise.resolve(false);
        }
        return this.model.findByIdAndRemove(id).exec()
            .then(() => true)
            .catch((err) => false);
    }

    public updateCharacter(id: string, changes: ICharacter): Promise<boolean> {
        return this.model.findByIdAndUpdate(id, changes).exec()
            .then(() => true)
            .catch(() => false);
    }

    /**
     * Insert Character to DB
     * @param c character to insert
     * @return _id
     */
    public createCharacter(c: ICharacter): Promise<string> {
        return new this.model(c).save()
            .then((result) => result._id)
            .catch((err) => undefined);
    }

    public fetchAllCharacters(): Promise<ICharacterModel[]> {
        return this.model.find().exec().then((docs) => {
            return docs;
        });
    }
}
