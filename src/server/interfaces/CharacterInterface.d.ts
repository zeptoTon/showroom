import { Document } from "mongoose";

export interface ICharacter {
    birth_year?: string;
    eye_color?: string;
    hair_color?: string;
    height?: number;
    is_male?: boolean;
    mass?: number;
    name?: string;
    skin_color?: string;
}

export interface ICharacterModel extends ICharacter, Document {

}

