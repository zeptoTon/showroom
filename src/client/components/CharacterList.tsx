import { observer } from "mobx-react";
import * as React from "react";
import { CharacterThumbnail } from "./CharacterThumbnail";
import { ICharacter, ICharacterListProps } from "./interfaces";

@observer
export class CharacterList extends React.Component<ICharacterListProps, any> {
    constructor(props: ICharacterListProps) {
        super(props);
    }

    /**
     * get characters from server
     */
    public fetchCharacters() {
        const endpoint = "/characters";
        fetch(endpoint)
            .then((res) => {
                if (res.status === 404) {
                    throw new Error();
                }
                return res;
            })
            .then((res) => res.json())
            .then((characters: ICharacter[]): void => {
                this.props.store.characters = characters;
                console.log(characters);
            });
    }

    public componentDidMount() {
        this.fetchCharacters();
    }

    public render() {
        const { characters } = this.props.store;
        return (
            <ul>
                {characters.map((character: ICharacter) =>
                    <CharacterThumbnail character={character} key={character._id} store={this.props.store} />)
                }
            </ul>
        );
    }
}
