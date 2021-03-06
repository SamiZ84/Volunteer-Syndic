/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["./../dataAccess/schemas/NewsSchema", "./BaseRepository"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var NewsSchema, RepositoryBase, NewsRepository;
    return {
        setters: [
            function (NewsSchema_1) {
                NewsSchema = NewsSchema_1;
            },
            function (RepositoryBase_1) {
                RepositoryBase = RepositoryBase_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            NewsRepository = (function (_super) {
                __extends(NewsRepository, _super);
                function NewsRepository() {
                    return _super.call(this, NewsSchema) || this;
                }
                return NewsRepository;
            }(RepositoryBase));
            Object.seal(NewsRepository);
        }
    };
});
//# sourceMappingURL=NewsRepository.js.map