/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["../DataAccess"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataAccess, mongoose, mongooseConnection, PersonSchema, schema;
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
            PersonSchema = (function () {
                function PersonSchema() {
                }
                Object.defineProperty(PersonSchema, "schema", {
                    get: function () {
                        var schema = mongoose.Schema({
                            firstName: {
                                type: String,
                                required: true
                            },
                            lastName: {
                                type: String,
                                required: true
                            },
                            cin: {
                                type: Number,
                                required: true
                            },
                            phone1: {
                                type: Number,
                                required: true
                            },
                            phone2: {
                                type: Number,
                                required: false
                            }
                        });
                        return schema;
                    },
                    enumerable: true,
                    configurable: true
                });
                return PersonSchema;
            }());
            schema = mongooseConnection.model("Persons", PersonSchema.schema);
            "";
        }
    };
});
//# sourceMappingURL=PersonSchema.js.map