import { observer } from "mobx-react";
import * as React from "react";
import { ICharacterFormProps, ICharacterRoomProps } from "./interfaces";

@observer
export class CharacterForm extends React.Component<ICharacterFormProps, any> {


    public submitForm: React.EventHandler<React.FormEvent<HTMLFormElement>> = (e) => {
        e.preventDefault();
        const { _id } = this.props.character;
        if (_id === null) {
            fetch("/characters", {
                body: JSON.stringify(this.props.character),
                headers: {
                    "Content-type": "application/json",
                },
                method: "POST",
            })
                .then((response) => response.json())
                .then((result) => {
                    console.log(result);
                });
        } else {
            fetch(`/characters/${_id}`, {
                body: JSON.stringify(this.props.character),
                headers: {
                    "Content-type": "application/json",
                },
                method: "PATCH",
            }).then((response) => response.json())
                .then((result) => {
                    console.log(result);
                });
        }
    }
    public handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.props.character[name] = value;
    }

    public render() {
        const { _id, birth_year, eye_color, hair_color, height,
            is_male, mass, name, skin_color } = this.props.character;
        return (
            <form onSubmit={this.submitForm}>
                <label htmlFor="c-name">Name:</label>
                <input name="name" id="c-name" type="text" value={name} onChange={this.handleInputChange} />
                <label htmlFor="c-height">Height:</label>
                <input name="height" id="c-height" type="number"
                    value={height.toString(10)} onChange={this.handleInputChange} />
                <label htmlFor="c-mass">Mass:</label>
                <input name="mass" id="c-mass" type="number"
                    value={mass.toString(10)} onChange={this.handleInputChange} />
                <label htmlFor="c-birth-year">birth year:</label>
                <input name="birth_year" id="c-birth-year"
                    type="text" value={birth_year} onChange={this.handleInputChange} />
                <label htmlFor="c-eye-color">Eye Color:</label>
                <input name="eye_color" id="c-eye-color"
                    type="text" value={eye_color} onChange={this.handleInputChange} />
                <label htmlFor="c-hair-color">Hair Color:</label>
                <input name="hair_color" id="c-hair-color"
                    type="text" value={hair_color} onChange={this.handleInputChange} />
                <label htmlFor="c-skin-color">Skin Color:</label>
                <input name="skin_color" id="c-skin-color"
                    type="text" value={skin_color} onChange={this.handleInputChange} />
                <input type="submit" value="Save" />
            </form>
        );
    }
}

