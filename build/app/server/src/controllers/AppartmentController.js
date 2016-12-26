/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["./../app/business/AppartmentBusiness"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AppartmentBusiness, AppartmentController;
    return {
        setters: [
            function (AppartmentBusiness_1) {
                AppartmentBusiness = AppartmentBusiness_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            AppartmentController = (function () {
                function AppartmentController() {
                }
                AppartmentController.prototype.create = function (req, res) {
                    try {
                        var model = req.body;
                        var myBusiness = new AppartmentBusiness();
                        myBusiness.create(model, function (error, result) {
                            if (error)
                                res.send({ "errorCreate": error });
                            else
                                res.send({ "success": "success" });
                        });
                    }
                    catch (e) {
                        console.log(e);
                        res.send({ "error": "error in your request" });
                    }
                };
                AppartmentController.prototype.update = function (req, res) {
                    try {
                        var model = req.body;
                        var _id = req.params._id;
                        var myBusiness = new AppartmentBusiness();
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
                AppartmentController.prototype.delete = function (req, res) {
                    try {
                        var _id = req.params._id;
                        var myBusiness = new AppartmentBusiness();
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
                AppartmentController.prototype.retrieve = function (req, res) {
                    try {
                        var myBusiness = new AppartmentBusiness();
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
                AppartmentController.prototype.findById = function (req, res) {
                    try {
                        var _id = req.params._id;
                        var myBusiness = new AppartmentBusiness();
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
                return AppartmentController;
            }());
        }
    };
});
//# sourceMappingURL=AppartmentController.js.map