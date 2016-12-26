/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["express", "./../../controllers/NewsController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express, NewsController, router, NewsRoutes;
    return {
        setters: [
            function (express_1) {
                express = express_1;
            },
            function (NewsController_1) {
                NewsController = NewsController_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            router = express.Router();
            NewsRoutes = (function () {
                function NewsRoutes() {
                    this._controller = new NewsController();
                }
                Object.defineProperty(NewsRoutes.prototype, "routes", {
                    get: function () {
                        var controller = this._controller;
                        router.get("/news", controller.retrieve);
                        router.post("/news", controller.create);
                        router.put("/news/:_id", controller.update);
                        router.get("/news/:_id", controller.findById);
                        router.delete("/news/:_id", controller.delete);
                        return router;
                    },
                    enumerable: true,
                    configurable: true
                });
                return NewsRoutes;
            }());
            Object.seal(NewsRoutes);
        }
    };
});
//# sourceMappingURL=NewsRoutes.js.map