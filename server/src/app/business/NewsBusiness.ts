/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import NewsRepository = require("./../repository/NewsRepository");
import INewsBusiness = require("./interfaces/INewsBusiness");
import INews = require("./../model/interfaces/INews");


class NewsBusiness implements INewsBusiness {
    private _repository: NewsRepository;

    constructor () {
        this._repository = new NewsRepository();
    }

    create (item: INews, callback: (error: any, result: any) => void) {
        this._repository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._repository.retrieve(callback);
    }

    update (_id: string, item: INews, callback: (error: any, result: any) => void) {
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

    findById (_id: string, callback: (error: any, result: INews) => void) {
        this._repository.findById(_id, callback);
    }
}

Object.seal(NewsBusiness);
export = NewsBusiness;