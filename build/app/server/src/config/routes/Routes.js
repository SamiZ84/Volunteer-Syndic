System.register(["express", "../routes/HeroRoutes", "../routes/PersonRoutes", "../routes/AppartmentRoutes", "../routes/NewsRoutes", "../routes/AccountRoutes"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express, HeroRoutes, PersonRoutes, AppartmentRoutes, NewsRoutes, AccountRoutes, app, Routes;
    return {
        setters: [
            function (express_1) {
                express = express_1;
            },
            function (HeroRoutes_1) {
                HeroRoutes = HeroRoutes_1;
            },
            function (PersonRoutes_1) {
                PersonRoutes = PersonRoutes_1;
            },
            function (AppartmentRoutes_1) {
                AppartmentRoutes = AppartmentRoutes_1;
            },
            function (NewsRoutes_1) {
                NewsRoutes = NewsRoutes_1;
            },
            function (AccountRoutes_1) {
                AccountRoutes = AccountRoutes_1;
            }
        ],
        execute: function () {
            app = express();
            Routes = (function () {
                function Routes() {
                }
                Object.defineProperty(Routes.prototype, "routes", {
                    get: function () {
                        app.use("/", new HeroRoutes().routes);
                        app.use("/", new PersonRoutes().routes);
                        app.use("/", new AppartmentRoutes().routes);
                        app.use("/", new NewsRoutes().routes);
                        app.use("/", new AccountRoutes().routes);
                        return app;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Routes;
            }());
        }
    };
});
//# sourceMappingURL=Routes.js.map