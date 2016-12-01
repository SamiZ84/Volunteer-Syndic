/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

//import Owner = require("./../model/Owner");
import IAppartment = require("./../model/interfaces/IAppartment");
import AppartmentSchema = require("./../dataAccess/schemas/AppartmentSchema");
import RepositoryBase = require("./BaseRepository");

class AppartmentRepository  extends RepositoryBase<IAppartment> {
    constructor () {
        super(AppartmentSchema);
    }
}

Object.seal(AppartmentRepository);
export = AppartmentRepository;