/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["./../app/business/AccountBusiness"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AccountBusiness, AccountController;
    return {
        setters: [
            function (AccountBusiness_1) {
                AccountBusiness = AccountBusiness_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            AccountController = (function () {
                function AccountController() {
                }
                AccountController.prototype.create = function (req, res) {
                    try {
                        var model = req.body;
                        var myBusiness = new AccountBusiness();
                        myBusiness.create(model, function (error, result) {
                            if (error)
                                res.send({ "error in create fct": error });
                            else
                                res.send({ "success": "success" });
                        });
                    }
                    catch (e) {
                        console.log(e);
                        res.send({ "error": "error in your request" });
                    }
                };
                AccountController.prototype.update = function (req, res) {
                    try {
                        var model = req.body;
                        var _id = req.params._id;
                        var myBusiness = new AccountBusiness();
                        myBusiness.update(_id, model, function (error, result) {
                            if (error)
                                res.send({ "error in update fct": error });
                            else
                                res.send({ "success": "success" });
                        });
                    }
                    catch (e) {
                        console.log(e);
                        res.send({ "error": "error in your request" });
                    }
                };
                AccountController.prototype.delete = function (req, res) {
                    try {
                        var _id = req.params._id;
                        var myBusiness = new AccountBusiness();
                        myBusiness.delete(_id, function (error, result) {
                            if (error)
                                res.send({ "error in delete fct": error });
                            else
                                res.send({ "success": "success" });
                        });
                    }
                    catch (e) {
                        console.log(e);
                        res.send({ "error": "error in your request" });
                    }
                };
                AccountController.prototype.retrieve = function (req, res) {
                    try {
                        var myBusiness = new AccountBusiness();
                        myBusiness.retrieve(function (error, result) {
                            if (error)
                                res.send({ "error in retrieve fct": error });
                            else
                                res.send(result);
                        });
                    }
                    catch (e) {
                        console.log(e);
                        res.send({ "error": "error in your request" });
                    }
                };
                AccountController.prototype.findById = function (req, res) {
                    try {
                        var _id = req.params._id;
                        var myBusiness = new AccountBusiness();
                        myBusiness.findById(_id, function (error, result) {
                            if (error)
                                res.send({ "error in findById fct": error });
                            else
                                res.send(result);
                        });
                    }
                    catch (e) {
                        console.log(e);
                        res.send({ "error": "error in your request" });
                    }
                };
                AccountController.prototype.find = function (req, res) {
                    try {
                        var cond = { 'email': req.params.login, 'password': req.params.pwd };
                        var myBusiness = new AccountBusiness();
                        myBusiness.find(cond, function (error, result) {
                            if (error)
                                res.send({ "error": error });
                            else {
                                if (result.length == 0)
                                    res.send({ "error in find fct": "account not found" });
                                else
                                    res.send(result[0]);
                            }
                        });
                    }
                    catch (e) {
                        console.log(e);
                        res.send({ "error": "error in your request" });
                    }
                };
                return AccountController;
            }());
        }
    };
});
//# sourceMappingURL=AccountController.js.map