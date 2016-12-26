/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["./../app/business/NewsBusiness"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NewsBusiness, NewsController;
    return {
        setters: [
            function (NewsBusiness_1) {
                NewsBusiness = NewsBusiness_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            NewsController = (function () {
                function NewsController() {
                }
                NewsController.prototype.create = function (req, res) {
                    try {
                        var model = req.body;
                        var myBusiness = new NewsBusiness();
                        myBusiness.create(model, function (error, result) {
                            if (error)
                                res.send({ "error": "error" });
                            else
                                res.send({ "success": "success" });
                        });
                    }
                    catch (e) {
                        console.log(e);
                        res.send({ "error": "error in your request" });
                    }
                };
                NewsController.prototype.update = function (req, res) {
                    try {
                        var model = req.body;
                        var _id = req.params._id;
                        var myBusiness = new NewsBusiness();
                        myBusiness.update(_id, model, function (error, result) {
                            if (error)
                                res.send({ "error": "error" });
                            else
                                res.send({ "success": "success" });
                        });
                    }
                    catch (e) {
                        console.log(e);
                        res.send({ "error": "error in your request" });
                    }
                };
                NewsController.prototype.delete = function (req, res) {
                    try {
                        var _id = req.params._id;
                        var myBusiness = new NewsBusiness();
                        myBusiness.delete(_id, function (error, result) {
                            if (error)
                                res.send({ "error": "error" });
                            else
                                res.send({ "success": "success" });
                        });
                    }
                    catch (e) {
                        console.log(e);
                        res.send({ "error": "error in your request" });
                    }
                };
                NewsController.prototype.retrieve = function (req, res) {
                    try {
                        var myBusiness = new NewsBusiness();
                        myBusiness.retrieve(function (error, result) {
                            if (error)
                                res.send({ "error": "error" });
                            else
                                res.send(result);
                        });
                    }
                    catch (e) {
                        console.log(e);
                        res.send({ "error": "error in your request" });
                    }
                };
                NewsController.prototype.findById = function (req, res) {
                    try {
                        var _id = req.params._id;
                        var myBusiness = new NewsBusiness();
                        myBusiness.findById(_id, function (error, result) {
                            if (error)
                                res.send({ "error": "error" });
                            else
                                res.send(result);
                        });
                    }
                    catch (e) {
                        console.log(e);
                        res.send({ "error": "error in your request" });
                    }
                };
                return NewsController;
            }());
        }
    };
});
//# sourceMappingURL=NewsController.js.map