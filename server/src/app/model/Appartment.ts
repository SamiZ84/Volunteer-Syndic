/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IAppartment = require('./interfaces/IAppartment');

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
    
    get residentId (): string {
        return this._model.residentId;
    }

    get ownerId (): string {
        return this._model.ownerId;
    }
}

Object.seal(Appartment);
export =  Appartment;