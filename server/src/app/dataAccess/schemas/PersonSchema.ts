/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import IPerson = require("./../../model/interfaces/IPerson");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class PersonSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            firstName : {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            },
            cin: {
                type: Number,
                required: true
            },
            phone1: {
                type: Number,
                required: true
            },
            phone2: {
                type: Number,
                required: false
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IPerson>("Persons", PersonSchema.schema);
export = schema;""