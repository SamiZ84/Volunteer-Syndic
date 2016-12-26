/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["../DataAccess"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataAccess, mongoose, mongooseConnection, AccountSchema, schema;
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
            AccountSchema = (function () {
                function AccountSchema() {
                }
                Object.defineProperty(AccountSchema, "schema", {
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
                            email: {
                                type: String,
                                required: true
                            },
                            password: {
                                type: String,
                                required: true
                            }
                        });
                        return schema;
                    },
                    enumerable: true,
                    configurable: true
                });
                return AccountSchema;
            }());
            schema = mongooseConnection.model("Accounts", AccountSchema.schema);
            "";
        }
    };
});
//# sourceMappingURL=AccountSchema.js.map