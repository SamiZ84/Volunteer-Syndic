/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import mongoose = require("mongoose");
import IPerson = require('./IPerson');

interface IAppartment extends mongoose.Document {
    num: number;
    block: string;
    floor: number;
    owner: IPerson;
    resident: IPerson;
    residentIsOwner: boolean;
}

export = IAppartment;