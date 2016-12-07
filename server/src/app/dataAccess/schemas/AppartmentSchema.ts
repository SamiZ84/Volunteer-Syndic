/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import IAppartment = require("./../../model/interfaces/IAppartment");

import PersonSchema = require("./PersonSchema");

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
                type: String,
                required: true
            },
            residentIsOwner: {
                type: Boolean,
                required: false
            },
            owner: PersonSchema.schema,
            resident: PersonSchema.schema
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IAppartment>("Appartments", AppartmentSchema.schema);
export = schema;""