/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["./../repository/PersonRepository"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PersonRepository, PersonBusiness;
    return {
        setters: [
            function (PersonRepository_1) {
                PersonRepository = PersonRepository_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            PersonBusiness = (function () {
                function PersonBusiness() {
                    this._repository = new PersonRepository();
                }
                PersonBusiness.prototype.create = function (item, callback) {
                    this._repository.create(item, callback);
                };
                PersonBusiness.prototype.retrieve = function (callback) {
                    this._repository.retrieve(callback);
                };
                PersonBusiness.prototype.update = function (_id, item, callback) {
                    var _this = this;
                    this._repository.findById(_id, function (err, res) {
                        if (err)
                            callback(err, res);
                        else
                            _this._repository.update(res._id, item, callback);
                    });
                };
                PersonBusiness.prototype.delete = function (_id, callback) {
                    this._repository.delete(_id, callback);
                };
                PersonBusiness.prototype.findById = function (_id, callback) {
                    this._repository.findById(_id, callback);
                };
                return PersonBusiness;
            }());
            Object.seal(PersonBusiness);
        }
    };
});
//# sourceMappingURL=PersonBusiness.js.map