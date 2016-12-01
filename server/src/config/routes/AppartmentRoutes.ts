/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import AppartmentController = require("./../../controllers/AppartmentController");

var router = express.Router();
class AppartmentRoutes {
    private _controller: AppartmentController;

    constructor () {
        this._controller = new AppartmentController();
    }
    get routes () {
        var controller = this._controller;

        router.get("/appartments", controller.retrieve);
        router.post("/appartments", controller.create);
        router.put("/appartments/:_id", controller.update);
        router.get("/appartments/:_id", controller.findById);
        router.delete("/appartments/:_id", controller.delete);

        return router;
    }
}

Object.seal(AppartmentRoutes);
export = AppartmentRoutes;