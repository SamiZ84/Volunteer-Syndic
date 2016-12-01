/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import mongoose = require("mongoose");

interface IAppartment extends mongoose.Document {
    num: number;
    block: string;
    floor: number;
    ownerId: string;
    residentId: string;
}

export = IAppartment;