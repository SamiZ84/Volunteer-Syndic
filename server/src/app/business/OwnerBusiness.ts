/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import OwnerRepository = require("./../repository/OwnerRepository");
import IOwnerBusiness = require("./interfaces/IOwnerBusiness");
import IOwner = require("./../model/interfaces/IOwner");
//import HeroModel = require("./../model/HeroModel");


class OwnerBusiness implements IOwnerBusiness {
    private _repository: OwnerRepository;

    constructor () {
        this._repository = new OwnerRepository();
    }

    create (item: IOwner, callback: (error: any, result: any) => void) {
        this._repository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._repository.retrieve(callback);
    }

    update (_id: string, item: IOwner, callback: (error: any, result: any) => void) {
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

    findById (_id: string, callback: (error: any, result: IOwner) => void) {
        this._repository.findById(_id, callback);
    }
}

Object.seal(OwnerBusiness);
export = OwnerBusiness;