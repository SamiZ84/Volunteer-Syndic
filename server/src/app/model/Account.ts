/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IAccount = require('./interfaces/IAccount');
import IAppartment = require('./interfaces/IAppartment');

class Account {

    private _model: IAccount;

    constructor(model: IAccount) {
        this._model = model;
    }

    get lastName (): string {
        return this._model.lastName;
    }
    
    get firstName (): string {
        return this._model.firstName;
    }

    get isSyndic (): boolean {
        return this._model.isSyndic;
    }

    get appartment (): IAppartment {
        return this._model.appartment;
    }

    get email (): string {
        return this._model.email;
    }   
    
    get password (): string {
        return this._model.password;
    }
}

Object.seal(Account);
export =  Account;