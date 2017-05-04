import { computed, observable } from "mobx";
import { ICharacter, ICharacterThumbnail } from "../components/interfaces";


export class CharacterStore {

    @observable
    public characters: ICharacter[] = [];

    @observable
    public newCharacter: ICharacter = null;

    @observable
    public selectedChatacterID: string = "";

    @observable
    public isCreate: boolean = false;

    @computed
    get selectedCharacter(): ICharacter {
        const clist = this.characters.filter((c) => {
            return (c._id === this.selectedChatacterID);
        });
        if (clist.length > 0) {
            return clist[0];
        } else {
            return null;
        }
    }
}
