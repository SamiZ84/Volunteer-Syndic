/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Account;
    return {
        setters: [],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            Account = (function () {
                function Account(model) {
                    this._model = model;
                }
                Object.defineProperty(Account.prototype, "lastName", {
                    get: function () {
                        return this._model.lastName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Account.prototype, "firstName", {
                    get: function () {
                        return this._model.firstName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Account.prototype, "email", {
                    get: function () {
                        return this._model.email;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Account.prototype, "password", {
                    get: function () {
                        return this._model.password;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Account;
            }());
            Object.seal(Account);
        }
    };
});
//# sourceMappingURL=Account.js.map