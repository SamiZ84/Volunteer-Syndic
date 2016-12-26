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
    var core_1, kendo_data_query_1, HomeComponent;
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
            HomeComponent = (function () {
                function HomeComponent() {
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
                    this.products = Array(100).fill({}).map(function (x, idx) { return ({
                        "ProductID": idx,
                        "ProductName": "Product" + idx,
                        "Discontinued": idx % 2 === 0
                    }); });
                    this.loadProducts();
                }
                HomeComponent.prototype.pageChange = function (_a) {
                    var skip = _a.skip, take = _a.take;
                    this.skip = skip;
                    this.pageSize = take;
                    this.loadProducts();
                };
                HomeComponent.prototype.sortChange = function (sort) {
                    this.sort = sort;
                    this.loadProducts();
                };
                HomeComponent.prototype.loadProducts = function () {
                    this.gridView = {
                        data: kendo_data_query_1.orderBy(this.products, this.sort).slice(this.skip, this.skip + this.pageSize),
                        total: this.products.length
                    };
                };
                return HomeComponent;
            }());
            HomeComponent = __decorate([
                core_1.Component({
                    selector: 'my-home',
                    templateUrl: './app/components/home/home.component.html',
                    styleUrls: ['./app/components/home/home.component.css']
                }),
                __metadata("design:paramtypes", [])
            ], HomeComponent);
            exports_1("HomeComponent", HomeComponent);
        }
    };
});
//# sourceMappingURL=home.component.js.map