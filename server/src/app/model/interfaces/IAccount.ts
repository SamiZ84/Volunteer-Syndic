/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IAppartment = require('./IAppartment');

import mongoose = require("mongoose");

interface IAccount extends mongoose.Document {
    firstName: string;
    lastName: string;
    isSyndic: boolean;
    appartment: IAppartment;
    password: string;
    email: string;
}

export = IAccount;