import { observer } from "mobx-react";
import * as React from "react";
import { CharacterStore } from "../stores/CharacterStore";
import { CharacterForm } from "./CharacterForm";
import { CharacterList } from "./CharacterList";
import { CharacterRoom } from "./CharacterRoom";


@observer
export class App extends React.Component<any, any> {
    public store: CharacterStore;
    constructor() {
        super();
        this.store = new CharacterStore();
    }

    public createCharacter = () => {
        const Character = {
            birth_year: "",
            eye_color: "",
            hair_color: "",
            height: 0,
            is_male: false,
            mass: 0,
            name: "",
            skin_color: "",
            _id: null,
        };
        this.store.newCharacter = Character;
        this.store.selectedChatacterID = "";
        this.store.isCreate = true;
    }

    public render() {
        const { isCreate } = this.store;
        return (
            <div>
                <CharacterList store={this.store} />
                <CharacterRoom store={this.store} />
                <button onClick={this.createCharacter}>Create</button>
                {isCreate && <CharacterForm character={this.store.newCharacter} />
                }
            </div>
        );
    }

}
