/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["./../dataAccess/schemas/HeroSchema", "./BaseRepository"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var HeroSchema, RepositoryBase, HeroRepository;
    return {
        setters: [
            function (HeroSchema_1) {
                HeroSchema = HeroSchema_1;
            },
            function (RepositoryBase_1) {
                RepositoryBase = RepositoryBase_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            HeroRepository = (function (_super) {
                __extends(HeroRepository, _super);
                function HeroRepository() {
                    return _super.call(this, HeroSchema) || this;
                }
                return HeroRepository;
            }(RepositoryBase));
            Object.seal(HeroRepository);
        }
    };
});
//# sourceMappingURL=HeroRepository.js.map