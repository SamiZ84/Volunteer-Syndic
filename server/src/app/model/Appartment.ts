/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IAppartment = require('./interfaces/IAppartment');
import IPerson = require('./interfaces/IPerson');

class Appartment {

    private _model: IAppartment;

    constructor(model: IAppartment) {
        this._model = model;
    }

    get block (): string {
        return this._model.block;
    }
    
    get num (): number {
        return this._model.num;
    }

    get floor (): number {
        return this._model.floor;
    }
    
    get resident (): IPerson {
        return this._model.resident;
    }

    get owner (): IPerson {
        return this._model.owner;
    }

    get residentIsOwner (): boolean {
        return this._model.residentIsOwner;
    }
}

Object.seal(Appartment);
export =  Appartment;