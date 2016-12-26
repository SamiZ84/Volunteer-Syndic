/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["./../repository/AccountRepository"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AccountRepository, AccountBusiness;
    return {
        setters: [
            function (AccountRepository_1) {
                AccountRepository = AccountRepository_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            AccountBusiness = (function () {
                function AccountBusiness() {
                    this._repository = new AccountRepository();
                }
                AccountBusiness.prototype.create = function (item, callback) {
                    this._repository.create(item, callback);
                };
                AccountBusiness.prototype.retrieve = function (callback) {
                    this._repository.retrieve(callback);
                };
                AccountBusiness.prototype.update = function (_id, item, callback) {
                    var _this = this;
                    this._repository.findById(_id, function (err, res) {
                        if (err)
                            callback(err, res);
                        else
                            _this._repository.update(res._id, item, callback);
                    });
                };
                AccountBusiness.prototype.delete = function (_id, callback) {
                    this._repository.delete(_id, callback);
                };
                AccountBusiness.prototype.findById = function (_id, callback) {
                    this._repository.findById(_id, callback);
                };
                AccountBusiness.prototype.find = function (cond, callback) {
                    this._repository.find(cond, null, null, callback);
                };
                return AccountBusiness;
            }());
            Object.seal(AccountBusiness);
        }
    };
});
//# sourceMappingURL=AccountBusiness.js.map