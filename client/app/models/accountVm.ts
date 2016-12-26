import {AppartmentVm} from "../models/appartmentVm";

export class AccountVm {
    _id: string;
    lastName: string;
    firstName: string;
    email: string;
    password: string;
    passwordconfirm: string;
    appartment: AppartmentVm;
    isSyndic: boolean;
}