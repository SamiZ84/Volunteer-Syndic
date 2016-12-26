/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["../DataAccess"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataAccess, mongoose, mongooseConnection, NewsSchema, schema;
    return {
        setters: [
            function (DataAccess_1) {
                DataAccess = DataAccess_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            mongoose = DataAccess.mongooseInstance;
            mongooseConnection = DataAccess.mongooseConnection;
            NewsSchema = (function () {
                function NewsSchema() {
                }
                Object.defineProperty(NewsSchema, "schema", {
                    get: function () {
                        var schema = mongoose.Schema({
                            title: {
                                type: String,
                                required: true
                            },
                            description: {
                                type: String,
                                required: true
                            },
                            publicationDate: {
                                type: Date,
                                required: true
                            },
                            createdBy: {
                                type: String,
                                required: true
                            }
                        });
                        return schema;
                    },
                    enumerable: true,
                    configurable: true
                });
                return NewsSchema;
            }());
            schema = mongooseConnection.model("News", NewsSchema.schema);
            "";
        }
    };
});
//# sourceMappingURL=NewsSchema.js.map