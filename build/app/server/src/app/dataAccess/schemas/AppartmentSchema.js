/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["../DataAccess", "./PersonSchema"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataAccess, PersonSchema, mongoose, mongooseConnection, AppartmentSchema, schema;
    return {
        setters: [
            function (DataAccess_1) {
                DataAccess = DataAccess_1;
            },
            function (PersonSchema_1) {
                PersonSchema = PersonSchema_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            mongoose = DataAccess.mongooseInstance;
            mongooseConnection = DataAccess.mongooseConnection;
            AppartmentSchema = (function () {
                function AppartmentSchema() {
                }
                Object.defineProperty(AppartmentSchema, "schema", {
                    get: function () {
                        var schema = mongoose.Schema({
                            block: {
                                type: String,
                                required: true
                            },
                            num: {
                                type: Number,
                                required: true
                            },
                            floor: {
                                type: String,
                                required: true
                            },
                            residentIsOwner: {
                                type: Boolean,
                                required: false
                            },
                            owner: PersonSchema.schema,
                            resident: PersonSchema.schema
                        });
                        return schema;
                    },
                    enumerable: true,
                    configurable: true
                });
                return AppartmentSchema;
            }());
            schema = mongooseConnection.model("Appartments", AppartmentSchema.schema);
            "";
        }
    };
});
//# sourceMappingURL=AppartmentSchema.js.map