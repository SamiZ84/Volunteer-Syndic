/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import PersonRepository = require("./../repository/PersonRepository");
import IPersonBusiness = require("./interfaces/IPersonBusiness");
import IPerson = require("./../model/interfaces/IPerson");
//import HeroModel = require("./../model/HeroModel");


class PersonBusiness implements IPersonBusiness {
    private _repository: PersonRepository;

    constructor () {
        this._repository = new PersonRepository();
    }

    create (item: IPerson, callback: (error: any, result: any) => void) {
        this._repository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._repository.retrieve(callback);
    }

    update (_id: string, item: IPerson, callback: (error: any, result: any) => void) {
        this._repository.findById(_id, (err, res) => {
            if(err)
                callback(err, res);
            else
                this._repository.update(res._id, item, callback);
        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._repository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IPerson) => void) {
        this._repository.findById(_id, callback);
    }
}

Object.seal(PersonBusiness);
export = PersonBusiness;