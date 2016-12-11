/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import mongoose = require("mongoose");

interface INews extends mongoose.Document {
    title: string;
    description: string;
    publicationDate: Date;
    createdBy: string;
    updatedDate: Date;
    updatedBy: string;
    urlSmallImage: string; 
    urlLargeImage: string; 
}

export = INews;