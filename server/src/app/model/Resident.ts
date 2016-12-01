/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IResident = require('./interfaces/IResident');

class Resident {

    private _model: IResident;

    constructor(model: IResident) {
        this._model = model;
    }

    get lastName (): string {
        return this._model.lastName;
    }
    
    get firstName (): string {
        return this._model.firstName;
    }

    get cin (): number {
        return this._model.cin;
    }
    
    get phone1 (): number {
        return this._model.phone1;
    }

    get phone2 (): number {
        return this._model.phone2;
    }
}

Object.seal(Resident);
export =  Resident;