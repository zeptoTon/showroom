import * as React from "react";
import { ICharacter, ICharacterThumbnail } from "./interfaces";

export class CharacterThumbnail extends React.Component<ICharacterThumbnail, any> {

    public onClickHandler: React.EventHandler<React.MouseEvent<HTMLLIElement>> = (e) => {
        this.props.store.selectedChatacterID = this.props.character._id;
        this.props.store.isCreate = false;
    }

    public render() {
        const { name, skin_color, hair_color, eye_color } = this.props.character;
        return <li onClick={this.onClickHandler}>
            <h3>{name}</h3>
            <div>
                <div>{hair_color}</div>
                <div>{eye_color}</div>
                <div>{skin_color}</div>
            </div>
        </li>;
    }
}

