import { observer } from "mobx-react";
import * as React from "react";
import { CharacterForm } from "./CharacterForm";
import { ICharacterRoomProps } from "./interfaces";


@observer
export class CharacterRoom extends React.Component<ICharacterRoomProps, any> {
    constructor(props: ICharacterRoomProps) {
        super(props);
    }

    public deleteCharacterHandler = (event) => {
        const { selectedCharacter } = this.props.store;
        if (selectedCharacter._id !== null) {
            fetch(`/characters/${selectedCharacter._id}`, {
                method: "DELETE",
            }).then((response) => response.json())
                .then(({ isRemoved }) => {
                    if (isRemoved) {
                        this.props.store.characters.remove(selectedCharacter);
                    }
                });
        }
    }

    public render() {
        const { selectedCharacter } = this.props.store;
        if (selectedCharacter === null) {
            return null;
        }
        return (
            <div>
                <CharacterForm character={selectedCharacter} />
                <input type="button" value="Delete" onClick={this.deleteCharacterHandler} />
            </div>

        );
    }
}
