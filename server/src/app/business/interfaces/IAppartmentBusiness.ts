/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import BaseBusiness = require("./../BaseBusiness");
import IAppartment = require("./../../model/interfaces/IAppartment");

interface IAppartmentBusiness extends BaseBusiness<IAppartment> {

}
export = IAppartmentBusiness;