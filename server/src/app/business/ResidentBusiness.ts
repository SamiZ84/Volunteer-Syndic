/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import ResidentRepository = require("./../repository/ResidentRepository");
import IResidentBusiness = require("./interfaces/IResidentBusiness");
import IResident = require("./../model/interfaces/IResident");
//import HeroModel = require("./../model/HeroModel");


class ResidentBusiness implements IResidentBusiness {
    private _repository: ResidentRepository;

    constructor () {
        this._repository = new ResidentRepository();
    }

    create (item: IResident, callback: (error: any, result: any) => void) {
        this._repository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._repository.retrieve(callback);
    }

    update (_id: string, item: IResident, callback: (error: any, result: any) => void) {
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

    findById (_id: string, callback: (error: any, result: IResident) => void) {
        this._repository.findById(_id, callback);
    }
}

Object.seal(ResidentBusiness);
export = ResidentBusiness;