/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
System.register(["@angular/core", "../../services/appartment.service", "@angular/router", "@progress/kendo-data-query"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, appartment_service_1, router_1, kendo_data_query_1, AppartmentsComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (appartment_service_1_1) {
                appartment_service_1 = appartment_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (kendo_data_query_1_1) {
                kendo_data_query_1 = kendo_data_query_1_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 02-06-2016.
             */
            AppartmentsComponent = (function () {
                function AppartmentsComponent(router, myService) {
                    this.router = router;
                    this.myService = myService;
                    this.pageSize = 5;
                    this.skip = 0;
                    this.sort = [];
                    this.pagerSetting = {
                        "buttonCount": 5,
                        "info": true,
                        "type": 'numeric',
                        "pageSizes": true,
                        "previousNext": true
                    };
                    this.getAppartments();
                }
                AppartmentsComponent.prototype.getAppartments = function () {
                    var _this = this;
                    this.myService.getAppartments().then(function (app) {
                        _this.appartments = app;
                        _this.refreshData(_this.appartments);
                    });
                };
                AppartmentsComponent.prototype.onPageChange = function (_a) {
                    var skip = _a.skip, take = _a.take;
                    this.skip = skip;
                    this.pageSize = take;
                    var data = this.filterData();
                    this.refreshData(data);
                };
                AppartmentsComponent.prototype.refreshData = function (data) {
                    this.gridView = {
                        data: (data != undefined) ? (kendo_data_query_1.orderBy(data, this.sort).slice(this.skip, this.skip + this.pageSize)) : [],
                        total: (data != undefined) ? data.length : 0
                    };
                };
                AppartmentsComponent.prototype.filterData = function () {
                    var _this = this;
                    var filtred = this.appartments.filter(function (app) { return ((app.block.toLowerCase() + app.num).indexOf(_this.filter.toLowerCase()) != -1)
                        || (app.owner.firstName.toLowerCase().indexOf(_this.filter.toLowerCase()) != -1) || (app.owner.lastName.toLowerCase().indexOf(_this.filter.toLowerCase()) != -1)
                        || (app.resident.firstName.toLowerCase().indexOf(_this.filter.toLowerCase()) != -1) || (app.resident.lastName.toLowerCase().indexOf(_this.filter.toLowerCase()) != -1); });
                    return filtred;
                };
                AppartmentsComponent.prototype.change = function () {
                    var data = this.filterData();
                    this.skip = 0;
                    this.refreshData(data);
                };
                AppartmentsComponent.prototype.addAppartment = function () {
                    this.router.navigate(['/appartment', 'new']);
                };
                AppartmentsComponent.prototype.deleteAppartmentById = function (appartmentId, event) {
                    var _this = this;
                    event.stopPropagation();
                    this.myService
                        .deleteById(appartmentId)
                        .then(function (res) {
                        _this.appartments = _this.appartments.filter(function (h) { return h._id != appartmentId; });
                    })
                        .catch(function (error) { return _this.error = error; });
                };
                AppartmentsComponent.prototype.displayDetail = function (appartmentId) {
                    this.router.navigate(['/appartment', appartmentId]);
                };
                return AppartmentsComponent;
            }());
            AppartmentsComponent = __decorate([
                core_1.Component({
                    selector: 'my-appartments',
                    templateUrl: './app/components/appartments/appartments.component.html',
                    styleUrls: ['./app/components/appartments/appartments.component.css']
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    appartment_service_1.AppartmentService])
            ], AppartmentsComponent);
            exports_1("AppartmentsComponent", AppartmentsComponent);
        }
    };
});
//# sourceMappingURL=appartments.component.js.map