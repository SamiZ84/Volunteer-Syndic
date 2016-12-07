/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import BaseBusiness = require("./../BaseBusiness");
import IPerson = require("./../../model/interfaces/IPerson");

interface IPersonBusiness extends BaseBusiness<IPerson> {

}
export = IPersonBusiness;