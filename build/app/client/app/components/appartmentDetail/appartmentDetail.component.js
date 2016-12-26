/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
System.register(["@angular/core", "../../models/appartmentVm", "@angular/router", "../../services/appartment.service"], function (exports_1, context_1) {
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
    var core_1, appartmentVm_1, router_1, appartment_service_1, AppartmentDetailComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (appartmentVm_1_1) {
                appartmentVm_1 = appartmentVm_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (appartment_service_1_1) {
                appartment_service_1 = appartment_service_1_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 02-06-2016.
             */
            AppartmentDetailComponent = (function () {
                function AppartmentDetailComponent(myService, route) {
                    this.myService = myService;
                    this.route = route;
                    this.isNew = false;
                    this.residentIsSameTheOwner = 'hidden';
                }
                AppartmentDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        var id = params['id'];
                        if (id === 'new') {
                            _this.isNew = true;
                            _this.model = new appartmentVm_1.AppartmentVm();
                        }
                        else {
                            _this.isNew = false;
                            _this.myService.getAppartment(id)
                                .then(function (model) { return _this.model = model; });
                        }
                    });
                };
                AppartmentDetailComponent.prototype.save = function () {
                    var _this = this;
                    this.myService
                        .save(this.model)
                        .then(function (model) {
                        _this.model = model; // saved hero, w/ id if new
                        _this.goBack();
                    })
                        .catch(function (error) { return _this.error = error; }); // TODO: Display error message
                };
                AppartmentDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                AppartmentDetailComponent.prototype.toggleResident = function () {
                    this.model.residentIsOwner = !this.model.residentIsOwner;
                };
                return AppartmentDetailComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", appartmentVm_1.AppartmentVm)
            ], AppartmentDetailComponent.prototype, "model", void 0);
            AppartmentDetailComponent = __decorate([
                core_1.Component({
                    selector: 'my-appartmentDetail',
                    templateUrl: './app/components/appartmentDetail/appartmentDetail.component.html',
                    styleUrls: ['./app/components/appartmentDetail/appartmentDetail.component.css']
                }),
                __metadata("design:paramtypes", [appartment_service_1.AppartmentService,
                    router_1.ActivatedRoute])
            ], AppartmentDetailComponent);
            exports_1("AppartmentDetailComponent", AppartmentDetailComponent);
        }
    };
});
//# sourceMappingURL=appartmentDetail.component.js.map