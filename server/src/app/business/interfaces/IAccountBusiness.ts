/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import BaseBusiness = require("./../BaseBusiness");
import IAccount = require("./../../model/interfaces/IAccount");

interface IAccountBusiness extends BaseBusiness<IAccount> {

}
export = IAccountBusiness;