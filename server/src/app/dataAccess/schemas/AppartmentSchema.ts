/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import IAppartment = require("./../../model/interfaces/IAppartment");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class AppartmentSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            block : {
                type: String,
                required: true
            },
            num: {
                type: Number,
                required: true
            },
            floor: {
                type: Number,
                required: true
            },
            ownerId: {
                type: String,
                required: true
            },
            residentId: {
                type: String,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IAppartment>("Appartment", AppartmentSchema.schema);
export = schema;""