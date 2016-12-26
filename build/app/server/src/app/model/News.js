/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var News;
    return {
        setters: [],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            News = (function () {
                function News(model) {
                    this._model = model;
                }
                Object.defineProperty(News.prototype, "title", {
                    get: function () {
                        return this._model.title;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(News.prototype, "description", {
                    get: function () {
                        return this._model.description;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(News.prototype, "publicationDate", {
                    get: function () {
                        return this._model.publicationDate;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(News.prototype, "createdBy", {
                    get: function () {
                        return this._model.createdBy;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(News.prototype, "updatedDate", {
                    get: function () {
                        return this._model.updatedDate;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(News.prototype, "updatedBy", {
                    get: function () {
                        return this._model.updatedBy;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(News.prototype, "urlSmallImage", {
                    get: function () {
                        return this._model.urlSmallImage;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(News.prototype, "urlLargeImage", {
                    get: function () {
                        return this._model.urlLargeImage;
                    },
                    enumerable: true,
                    configurable: true
                });
                return News;
            }());
            Object.seal(News);
        }
    };
});
//# sourceMappingURL=News.js.map