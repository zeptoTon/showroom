import { observer } from "mobx-react";
import * as React from "react";
import { CharacterForm } from "./CharacterForm";
import { ICharacterRoomProps } from "./interfaces";


@observer
export class CharacterRoom extends React.Component<ICharacterRoomProps, any> {
    constructor(props: ICharacterRoomProps) {
        super(props);
    }

    public render() {
        const { selectedCharacter } = this.props.store;
        if (selectedCharacter === null) {
            return null;
        }
        return (
            <div>
                <CharacterForm character={selectedCharacter} />
            </div>

        );
    }
}
