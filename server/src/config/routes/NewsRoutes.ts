/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import NewsController = require("./../../controllers/NewsController");

var router = express.Router();
class NewsRoutes {
    private _controller: NewsController;

    constructor () {
        this._controller = new NewsController();
    }
    get routes () {
        var controller = this._controller;

        router.get("/news", controller.retrieve);
        router.post("/news", controller.create);
        router.put("/news/:_id", controller.update);
        router.get("/news/:_id", controller.findById);
        router.delete("/news/:_id", controller.delete);

        return router;
    }
}

Object.seal(NewsRoutes);
export = NewsRoutes;