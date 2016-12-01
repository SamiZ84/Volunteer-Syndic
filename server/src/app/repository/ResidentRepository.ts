/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

//import Owner = require("./../model/Owner");
import IResident = require("./../model/interfaces/IResident");
import ResidentSchema = require("./../dataAccess/schemas/ResidentSchema");
import RepositoryBase = require("./BaseRepository");

class ResidentRepository  extends RepositoryBase<IResident> {
    constructor () {
        super(ResidentSchema);
    }
}

Object.seal(ResidentRepository);
export = ResidentRepository;