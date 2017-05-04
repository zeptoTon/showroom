import { CharacterStore } from "../stores/CharacterStore"
export interface ICharacterListProps {
    store: CharacterStore;
}

export interface ICharacterRoomProps {
    store: CharacterStore;
}

export interface ICharacterFormProps {
    character: ICharacter;
}

export interface ICharacterThumbnail {
    store: CharacterStore;
    character: ICharacter;
}

export interface ICharacter {
    birth_year: string;
    eye_color: string;
    hair_color: string;
    height: number;
    is_male: boolean;
    mass: number;
    name: string;
    skin_color: string;
    _id?: string;
    __v?: number;
}
