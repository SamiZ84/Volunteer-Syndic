/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["./../dataAccess/schemas/AppartmentSchema", "./BaseRepository"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var AppartmentSchema, RepositoryBase, AppartmentRepository;
    return {
        setters: [
            function (AppartmentSchema_1) {
                AppartmentSchema = AppartmentSchema_1;
            },
            function (RepositoryBase_1) {
                RepositoryBase = RepositoryBase_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            AppartmentRepository = (function (_super) {
                __extends(AppartmentRepository, _super);
                function AppartmentRepository() {
                    return _super.call(this, AppartmentSchema) || this;
                }
                return AppartmentRepository;
            }(RepositoryBase));
            Object.seal(AppartmentRepository);
        }
    };
});
//# sourceMappingURL=AppartmentRepository.js.map