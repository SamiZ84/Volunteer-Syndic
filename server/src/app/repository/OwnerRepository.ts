/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

//import Owner = require("./../model/Owner");
import IOwner = require("./../model/interfaces/IOwner");
import OwnerSchema = require("./../dataAccess/schemas/OwnerSchema");
import RepositoryBase = require("./BaseRepository");

class OwnerRepository  extends RepositoryBase<IOwner> {
    constructor () {
        super(OwnerSchema);
    }
}

Object.seal(OwnerRepository);
export = OwnerRepository;