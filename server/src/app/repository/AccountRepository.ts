/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IAccount = require("./../model/interfaces/IAccount");
import AccountSchema = require("./../dataAccess/schemas/AccountSchema");
import RepositoryBase = require("./BaseRepository");

class AccountRepository  extends RepositoryBase<IAccount> {
    constructor () {
        super(AccountSchema);
    }
}

Object.seal(AccountRepository);
export = AccountRepository;