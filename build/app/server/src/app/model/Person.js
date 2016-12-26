/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters: [],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            Person = (function () {
                function Person(model) {
                    this._model = model;
                }
                Object.defineProperty(Person.prototype, "lastName", {
                    get: function () {
                        return this._model.lastName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Person.prototype, "firstName", {
                    get: function () {
                        return this._model.firstName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Person.prototype, "cin", {
                    get: function () {
                        return this._model.cin;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Person.prototype, "phone1", {
                    get: function () {
                        return this._model.phone1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Person.prototype, "phone2", {
                    get: function () {
                        return this._model.phone2;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Person;
            }());
            Object.seal(Person);
        }
    };
});
//# sourceMappingURL=Person.js.map