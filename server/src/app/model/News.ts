/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import INews = require('./interfaces/INews');

class News {

    private _model: INews;

    constructor(model: INews) {
        this._model = model;
    }

    get title (): string {
        return this._model.title;
    }
    
    get description (): string {
        return this._model.description;
    }

    get publicationDate (): Date {
        return this._model.publicationDate;
    }
    
    get createdBy (): string {
        return this._model.createdBy;
    }

    get updatedDate (): Date {
        return this._model.updatedDate;
    }
    
    get updatedBy (): string {
        return this._model.updatedBy;
    }

    get urlSmallImage (): string {
        return this._model.urlSmallImage;
    }

    get urlLargeImage (): string {
        return this._model.urlLargeImage;
    }
}

Object.seal(News);
export =  News;