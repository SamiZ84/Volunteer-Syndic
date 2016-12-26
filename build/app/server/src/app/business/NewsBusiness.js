/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["./../repository/NewsRepository"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NewsRepository, NewsBusiness;
    return {
        setters: [
            function (NewsRepository_1) {
                NewsRepository = NewsRepository_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            NewsBusiness = (function () {
                function NewsBusiness() {
                    this._repository = new NewsRepository();
                }
                NewsBusiness.prototype.create = function (item, callback) {
                    this._repository.create(item, callback);
                };
                NewsBusiness.prototype.retrieve = function (callback) {
                    this._repository.retrieve(callback);
                };
                NewsBusiness.prototype.update = function (_id, item, callback) {
                    var _this = this;
                    this._repository.findById(_id, function (err, res) {
                        if (err)
                            callback(err, res);
                        else
                            _this._repository.update(res._id, item, callback);
                    });
                };
                NewsBusiness.prototype.delete = function (_id, callback) {
                    this._repository.delete(_id, callback);
                };
                NewsBusiness.prototype.findById = function (_id, callback) {
                    this._repository.findById(_id, callback);
                };
                return NewsBusiness;
            }());
            Object.seal(NewsBusiness);
        }
    };
});
//# sourceMappingURL=NewsBusiness.js.map