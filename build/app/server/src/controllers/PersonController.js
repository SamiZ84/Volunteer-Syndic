/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["./../app/business/PersonBusiness"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PersonBusiness, PersonController;
    return {
        setters: [
            function (PersonBusiness_1) {
                PersonBusiness = PersonBusiness_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            PersonController = (function () {
                function PersonController() {
                }
                PersonController.prototype.create = function (req, res) {
                    try {
                        var model = req.body;
                        var myBusiness = new PersonBusiness();
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
                PersonController.prototype.update = function (req, res) {
                    try {
                        var model = req.body;
                        var _id = req.params._id;
                        var myBusiness = new PersonBusiness();
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
                PersonController.prototype.delete = function (req, res) {
                    try {
                        var _id = req.params._id;
                        var myBusiness = new PersonBusiness();
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
                PersonController.prototype.retrieve = function (req, res) {
                    try {
                        var myBusiness = new PersonBusiness();
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
                PersonController.prototype.findById = function (req, res) {
                    try {
                        var _id = req.params._id;
                        var myBusiness = new PersonBusiness();
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
                return PersonController;
            }());
        }
    };
});
//# sourceMappingURL=PersonController.js.map