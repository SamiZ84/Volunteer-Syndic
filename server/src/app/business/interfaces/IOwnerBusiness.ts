/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import BaseBusiness = require("./../BaseBusiness");
import IOwner = require("./../../model/interfaces/IOwner");

interface IOwnerBusiness extends BaseBusiness<IOwner> {

}
export = IOwnerBusiness;