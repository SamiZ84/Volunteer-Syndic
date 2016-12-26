/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
System.register(["@angular/core", "@progress/kendo-data-query"], function (exports_1, context_1) {
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
    var core_1, kendo_data_query_1, KendoGridComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (kendo_data_query_1_1) {
                kendo_data_query_1 = kendo_data_query_1_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 02-06-2016.
             */
            KendoGridComponent = (function () {
                function KendoGridComponent() {
                    this.rowClicked = new core_1.EventEmitter();
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
                }
                KendoGridComponent.prototype.ngOnInit = function () {
                    this.refreshData();
                };
                KendoGridComponent.prototype.ngOnChange = function () {
                    this.refreshData();
                };
                KendoGridComponent.prototype.onPageChange = function (_a) {
                    var skip = _a.skip, take = _a.take;
                    this.skip = skip;
                    this.pageSize = take;
                    this.refreshData();
                };
                KendoGridComponent.prototype.onSortChange = function (sort) {
                    this.sort = sort;
                    this.refreshData();
                };
                KendoGridComponent.prototype.refreshData = function () {
                    this.gridView = {
                        data: (this.data != undefined) ? (kendo_data_query_1.orderBy(this.data, this.sort).slice(this.skip, this.skip + this.pageSize)) : [],
                        total: (this.data != undefined) ? this.data.length : 0
                    };
                };
                KendoGridComponent.prototype.onRowClicked = function () {
                    this.rowClicked.emit(this.gridView.data);
                };
                return KendoGridComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Array)
            ], KendoGridComponent.prototype, "data", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Array)
            ], KendoGridComponent.prototype, "columns", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", core_1.EventEmitter)
            ], KendoGridComponent.prototype, "rowClicked", void 0);
            KendoGridComponent = __decorate([
                core_1.Component({
                    selector: 'ai-grid',
                    templateUrl: './app/components/shared/kendoGrid/grid.component.html',
                    styleUrls: ['./app/components/shared/kendoGrid/grid.component.css']
                }),
                __metadata("design:paramtypes", [])
            ], KendoGridComponent);
            exports_1("KendoGridComponent", KendoGridComponent);
        }
    };
});
//# sourceMappingURL=grid.component.js.map