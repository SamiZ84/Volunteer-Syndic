/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import AppartmentRepository = require("./../repository/AppartmentRepository");
import IAppartmentBusiness = require("./interfaces/IAppartmentBusiness");
import IAppartment = require("./../model/interfaces/IAppartment");
//import HeroModel = require("./../model/HeroModel");


class AppartmentBusiness implements IAppartmentBusiness {
    private _repository: AppartmentRepository;

    constructor () {
        this._repository = new AppartmentRepository();
    }

    create (item: IAppartment, callback: (error: any, result: any) => void) {
        this._repository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._repository.retrieve(callback);
    }

    update (_id: string, item: IAppartment, callback: (error: any, result: any) => void) {
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

    findById (_id: string, callback: (error: any, result: IAppartment) => void) {
        this._repository.findById(_id, callback);
    }
}

Object.seal(AppartmentBusiness);
export = AppartmentBusiness;