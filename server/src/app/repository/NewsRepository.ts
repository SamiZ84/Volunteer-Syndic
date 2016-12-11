/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import INews = require("./../model/interfaces/INews");
import NewsSchema = require("./../dataAccess/schemas/NewsSchema");
import RepositoryBase = require("./BaseRepository");

class NewsRepository  extends RepositoryBase<INews> {
    constructor () {
        super(NewsSchema);
    }
}

Object.seal(NewsRepository);
export = NewsRepository;