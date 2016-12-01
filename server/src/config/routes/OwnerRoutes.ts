/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import OwnerController = require("./../../controllers/OwnerController");

var router = express.Router();
class OwnerRoutes {
    private _controller: OwnerController;

    constructor () {
        this._controller = new OwnerController();
    }
    get routes () {
        var controller = this._controller;

        router.get("/owners", controller.retrieve);
        router.post("/owners", controller.create);
        router.put("/owners/:_id", controller.update);
        router.get("/owners/:_id", controller.findById);
        router.delete("/owners/:_id", controller.delete);

        return router;
    }
}

Object.seal(OwnerRoutes);
export = OwnerRoutes;