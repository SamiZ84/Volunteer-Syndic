/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import ResidentController = require("./../../controllers/ResidentController");

var router = express.Router();
class ResidentRoutes {
    private _controller: ResidentController;

    constructor () {
        this._controller = new ResidentController();
    }
    get routes () {
        var controller = this._controller;

        router.get("/residents", controller.retrieve);
        router.post("/residents", controller.create);
        router.put("/residents/:_id", controller.update);
        router.get("/residents/:_id", controller.findById);
        router.delete("/residents/:_id", controller.delete);

        return router;
    }
}

Object.seal(ResidentRoutes);
export = ResidentRoutes;