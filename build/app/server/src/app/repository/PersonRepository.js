/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["./../dataAccess/schemas/PersonSchema", "./BaseRepository"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var PersonSchema, RepositoryBase, PersonRepository;
    return {
        setters: [
            function (PersonSchema_1) {
                PersonSchema = PersonSchema_1;
            },
            function (RepositoryBase_1) {
                RepositoryBase = RepositoryBase_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            PersonRepository = (function (_super) {
                __extends(PersonRepository, _super);
                function PersonRepository() {
                    return _super.call(this, PersonSchema) || this;
                }
                return PersonRepository;
            }(RepositoryBase));
            Object.seal(PersonRepository);
        }
    };
});
//# sourceMappingURL=PersonRepository.js.map