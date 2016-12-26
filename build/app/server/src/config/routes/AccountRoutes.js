/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["express", "./../../controllers/AccountController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express, AccountController, router, AccountRoutes;
    return {
        setters: [
            function (express_1) {
                express = express_1;
            },
            function (AccountController_1) {
                AccountController = AccountController_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            router = express.Router();
            AccountRoutes = (function () {
                function AccountRoutes() {
                    this._controller = new AccountController();
                }
                Object.defineProperty(AccountRoutes.prototype, "routes", {
                    get: function () {
                        var controller = this._controller;
                        router.get("/accounts", controller.retrieve);
                        router.post("/accounts", controller.create);
                        router.get("/accounts/login/:login/:pwd", controller.find);
                        router.get("/accounts/:_id", controller.findById);
                        router.put("/accounts/:_id", controller.update);
                        router.delete("/accounts/:_id", controller.delete);
                        return router;
                    },
                    enumerable: true,
                    configurable: true
                });
                return AccountRoutes;
            }());
            Object.seal(AccountRoutes);
        }
    };
});
//# sourceMappingURL=AccountRoutes.js.map