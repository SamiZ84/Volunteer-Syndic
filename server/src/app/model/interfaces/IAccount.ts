/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import mongoose = require("mongoose");

interface IAccount extends mongoose.Document {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

export = IAccount;