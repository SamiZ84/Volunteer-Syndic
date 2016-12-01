/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import BaseBusiness = require("./../BaseBusiness");
import IResident = require("./../../model/interfaces/IResident");

interface IResidentBusiness extends BaseBusiness<IResident> {

}
export = IResidentBusiness;