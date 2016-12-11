/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import BaseBusiness = require("./../BaseBusiness");
import INews = require("./../../model/interfaces/INews");

interface INewsBusiness extends BaseBusiness<INews> {

}
export = INewsBusiness;