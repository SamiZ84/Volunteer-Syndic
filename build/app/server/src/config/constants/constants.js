/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Constants;
    return {
        setters: [],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            Constants = (function () {
                function Constants() {
                }
                return Constants;
            }());
            Constants.DB_CONNECTION_STRING = process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://localhost:27017/volunteerSyndic";
            Object.seal(Constants);
        }
    };
});
//# sourceMappingURL=constants.js.map