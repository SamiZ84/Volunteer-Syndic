/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import INews = require("./../../model/interfaces/INews");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class NewsSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            title : {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            publicationDate: {
                type: Date,
                required: true
            },
            createdBy: {
                type: String,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<INews>("News", NewsSchema.schema);
export = schema;""