System.register(["../models/personVm"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var personVm_1, AppartmentVm;
    return {
        setters: [
            function (personVm_1_1) {
                personVm_1 = personVm_1_1;
            }
        ],
        execute: function () {
            AppartmentVm = (function () {
                function AppartmentVm() {
                    this.owner = new personVm_1.PersonVm();
                    this.resident = new personVm_1.PersonVm();
                    this.residentIsOwner = true;
                }
                AppartmentVm.prototype.toString = function () {
                    var title = "New appartment";
                    if (this.block) {
                        title = this.block;
                    }
                    if (this.num) {
                        title += this.num;
                    }
                    return title;
                };
                AppartmentVm.prototype.ownerFullName = function () {
                    return (this.owner) ? this.owner.lastName + " " + this.owner.firstName : "";
                };
                AppartmentVm.prototype.residentFullName = function () {
                    return (this.residentIsOwner) ? this.ownerFullName() : ((this.resident) ? this.resident.lastName + " " + this.resident.firstName : "");
                };
                return AppartmentVm;
            }());
            exports_1("AppartmentVm", AppartmentVm);
        }
    };
});
//# sourceMappingURL=appartmentVm.js.map