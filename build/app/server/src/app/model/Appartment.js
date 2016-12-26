/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Appartment;
    return {
        setters: [],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            Appartment = (function () {
                function Appartment(model) {
                    this._model = model;
                }
                Object.defineProperty(Appartment.prototype, "block", {
                    get: function () {
                        return this._model.block;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Appartment.prototype, "num", {
                    get: function () {
                        return this._model.num;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Appartment.prototype, "floor", {
                    get: function () {
                        return this._model.floor;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Appartment.prototype, "resident", {
                    get: function () {
                        return this._model.resident;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Appartment.prototype, "owner", {
                    get: function () {
                        return this._model.owner;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Appartment.prototype, "residentIsOwner", {
                    get: function () {
                        return this._model.residentIsOwner;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Appartment;
            }());
            Object.seal(Appartment);
        }
    };
});
//# sourceMappingURL=Appartment.js.map