/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import PersonController = require("./../../controllers/PersonController");

var router = express.Router();
class PersonRoutes {
    private _controller: PersonController;

    constructor () {
        this._controller = new PersonController();
    }
    get routes () {
        var controller = this._controller;

        router.get("/persons", controller.retrieve);
        router.post("/persons", controller.create);
        router.put("/persons/:_id", controller.update);
        router.get("/persons/:_id", controller.findById);
        router.delete("/persons/:_id", controller.delete);

        return router;
    }
}

Object.seal(PersonRoutes);
export = PersonRoutes;