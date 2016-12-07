import {PersonVm} from "../models/personVm";

export class AppartmentVm {
    _id: string;
    num: number;
    block: string;
    floor: string;
    ownerId: string;
    residentId: string;
    owner: PersonVm = new PersonVm();
    resident: PersonVm = new PersonVm();
    residentIsOwner: boolean = true;

    toString() {
        var title = "New appartment";
        if (this.block) {
            title = this.block;
        }
        if (this.num) {
            title += this.num;
        }
        return title;
    }
}