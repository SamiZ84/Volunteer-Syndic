/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IAccount = require('./interfaces/IAccount');

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

    get email (): string {
        return this._model.email;
    }
    
    get password (): string {
        return this._model.password;
    }
}

Object.seal(Account);
export =  Account;