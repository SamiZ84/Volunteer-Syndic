/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["express", "./../../controllers/PersonController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express, PersonController, router, PersonRoutes;
    return {
        setters: [
            function (express_1) {
                express = express_1;
            },
            function (PersonController_1) {
                PersonController = PersonController_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            router = express.Router();
            PersonRoutes = (function () {
                function PersonRoutes() {
                    this._controller = new PersonController();
                }
                Object.defineProperty(PersonRoutes.prototype, "routes", {
                    get: function () {
                        var controller = this._controller;
                        router.get("/persons", controller.retrieve);
                        router.post("/persons", controller.create);
                        router.put("/persons/:_id", controller.update);
                        router.get("/persons/:_id", controller.findById);
                        router.delete("/persons/:_id", controller.delete);
                        return router;
                    },
                    enumerable: true,
                    configurable: true
                });
                return PersonRoutes;
            }());
            Object.seal(PersonRoutes);
        }
    };
});
//# sourceMappingURL=PersonRoutes.js.map