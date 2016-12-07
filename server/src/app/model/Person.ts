/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IPerson = require('./interfaces/IPerson');

class Person {

    private _model: IPerson;

    constructor(model: IPerson) {
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

Object.seal(Person);
export =  Person;