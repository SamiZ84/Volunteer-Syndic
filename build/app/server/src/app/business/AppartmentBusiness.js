/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["./../repository/AppartmentRepository"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AppartmentRepository, AppartmentBusiness;
    return {
        setters: [
            function (AppartmentRepository_1) {
                AppartmentRepository = AppartmentRepository_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            AppartmentBusiness = (function () {
                function AppartmentBusiness() {
                    this._repository = new AppartmentRepository();
                }
                AppartmentBusiness.prototype.create = function (item, callback) {
                    if (item.residentIsOwner) {
                        item.resident = item.owner;
                    }
                    this._repository.create(item, callback);
                };
                AppartmentBusiness.prototype.retrieve = function (callback) {
                    this._repository.retrieve(callback);
                };
                AppartmentBusiness.prototype.update = function (_id, item, callback) {
                    var _this = this;
                    this._repository.findById(_id, function (err, res) {
                        if (err)
                            callback(err, res);
                        else
                            _this._repository.update(res._id, item, callback);
                    });
                };
                AppartmentBusiness.prototype.delete = function (_id, callback) {
                    this._repository.delete(_id, callback);
                };
                AppartmentBusiness.prototype.findById = function (_id, callback) {
                    this._repository.findById(_id, callback);
                };
                return AppartmentBusiness;
            }());
            Object.seal(AppartmentBusiness);
        }
    };
});
//# sourceMappingURL=AppartmentBusiness.js.map