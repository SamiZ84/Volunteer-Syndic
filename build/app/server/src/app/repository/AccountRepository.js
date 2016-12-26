/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["./../dataAccess/schemas/AccountSchema", "./BaseRepository"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var AccountSchema, RepositoryBase, AccountRepository;
    return {
        setters: [
            function (AccountSchema_1) {
                AccountSchema = AccountSchema_1;
            },
            function (RepositoryBase_1) {
                RepositoryBase = RepositoryBase_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 15-06-2016.
             */
            AccountRepository = (function (_super) {
                __extends(AccountRepository, _super);
                function AccountRepository() {
                    return _super.call(this, AccountSchema) || this;
                }
                return AccountRepository;
            }(RepositoryBase));
            Object.seal(AccountRepository);
        }
    };
});
//# sourceMappingURL=AccountRepository.js.map