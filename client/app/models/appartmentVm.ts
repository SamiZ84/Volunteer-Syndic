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

    public toString():string {
        var title = "New appartment";
        if (this.block) {
            title = this.block;
        }
        if (this.num) {
            title += this.num;
        }
        return title;
    }

    public ownerFullName():string {
        return (this.owner) ? this.owner.lastName + " " + this.owner.firstName : "";
    }

    public residentFullName():string {
        return (this.residentIsOwner) ? this.ownerFullName() : ((this.resident) ? this.resident.lastName + " " + this.resident.firstName : "");
    }
}