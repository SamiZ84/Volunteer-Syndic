/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import IAccount = require("./../../model/interfaces/IAccount");

import AppartmentSchema = require("./AppartmentSchema");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class AccountSchema {

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
            isSyndic:{
                type: Boolean,
                required: true
            },
            appartment:{
                type: AppartmentSchema.schema,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IAccount>("Accounts", AccountSchema.schema);
export = schema;""