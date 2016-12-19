/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import AccountController = require("./../../controllers/AccountController");

var router = express.Router();
class AccountRoutes {
    private _controller: AccountController;

    constructor () {
        this._controller = new AccountController();
    }
    get routes () {
        var controller = this._controller;

        router.get("/accounts", controller.retrieve);
        router.post("/accounts", controller.create);
        router.put("/accounts/:_id", controller.update);
        router.get("/accounts/:_id", controller.findById);
        router.get("/accounts/login", controller.find);
        router.delete("/accounts/:_id", controller.delete);

        return router;
    }
}

Object.seal(AccountRoutes);
export = AccountRoutes;