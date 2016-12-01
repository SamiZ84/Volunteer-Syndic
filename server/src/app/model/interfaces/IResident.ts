/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import mongoose = require("mongoose");

interface IResident extends mongoose.Document {
    firstName: string;
    lastName: string;
    cin: number;
    phone1: number;
    phone2: number;
}

export = IResident;