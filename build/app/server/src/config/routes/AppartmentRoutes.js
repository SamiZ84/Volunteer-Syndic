/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["express", "./../../controllers/AppartmentController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express, AppartmentController, router, AppartmentRoutes;
    return {
        setters: [
            function (express_1) {
                express = express_1;
            },
            function (AppartmentController_1) {
                AppartmentController = AppartmentController_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            router = express.Router();
            AppartmentRoutes = (function () {
                function AppartmentRoutes() {
                    this._controller = new AppartmentController();
                }
                Object.defineProperty(AppartmentRoutes.prototype, "routes", {
                    get: function () {
                        var controller = this._controller;
                        router.get("/appartments", controller.retrieve);
                        router.post("/appartments", controller.create);
                        router.put("/appartments/:_id", controller.update);
                        router.get("/appartments/:_id", controller.findById);
                        router.delete("/appartments/:_id", controller.delete);
                        return router;
                    },
                    enumerable: true,
                    configurable: true
                });
                return AppartmentRoutes;
            }());
            Object.seal(AppartmentRoutes);
        }
    };
});
//# sourceMappingURL=AppartmentRoutes.js.map