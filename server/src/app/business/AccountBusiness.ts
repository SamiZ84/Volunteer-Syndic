/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import AccountRepository = require("./../repository/AccountRepository");
import IAccountBusiness = require("./interfaces/IAccountBusiness");
import IAccount = require("./../model/interfaces/IAccount");


class AccountBusiness implements IAccountBusiness {
    private _repository: AccountRepository;

    constructor () {
        this._repository = new AccountRepository();
    }

    create (item: IAccount, callback: (error: any, result: any) => void) {
        this._repository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._repository.retrieve(callback);
    }

    update (_id: string, item: IAccount, callback: (error: any, result: any) => void) {
        this._repository.findById(_id, (err, res) => {
            if(err)
                callback(err, res);
            else
                this._repository.update(res._id, item, callback);
        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._repository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IAccount) => void) {
        this._repository.findById(_id, callback);
    }

    find (cond: Object, callback: (error: any, result: IAccount[]) => void) {
        this._repository.find(cond, null, null, callback);
    }
}

Object.seal(AccountBusiness);
export = AccountBusiness;