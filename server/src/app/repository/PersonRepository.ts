/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IPerson = require("./../model/interfaces/IPerson");
import PersonSchema = require("./../dataAccess/schemas/PersonSchema");
import RepositoryBase = require("./BaseRepository");

class PersonRepository  extends RepositoryBase<IPerson> {
    constructor () {
        super(PersonSchema);
    }
}

Object.seal(PersonRepository);
export = PersonRepository;