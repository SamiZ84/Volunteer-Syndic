/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
System.register(["@angular/core", "@angular/forms", "@angular/router", "../../services/account.service", "../../services/appartment.service", "../../models/accountVm"], function (exports_1, context_1) {
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
    var core_1, forms_1, router_1, account_service_1, appartment_service_1, accountVm_1, LoginComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (appartment_service_1_1) {
                appartment_service_1 = appartment_service_1_1;
            },
            function (accountVm_1_1) {
                accountVm_1 = accountVm_1_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 02-06-2016.
             */
            LoginComponent = (function () {
                function LoginComponent(router, fb, service, appService) {
                    var _this = this;
                    this.router = router;
                    this.fb = fb;
                    this.service = service;
                    this.appService = appService;
                    this.appService.getAppartments().then(function (app) {
                        _this.appartments = app;
                    });
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.initAccountFormValidator(this.fb);
                };
                LoginComponent.prototype.initAccountFormValidator = function (fb) {
                    this.accountDtl = new accountVm_1.AccountVm();
                    this.accountForm = fb.group({
                        accountDtl: fb.group({
                            lastName: [
                                "",
                                forms_1.Validators.compose([forms_1.Validators.minLength(2), forms_1.Validators.required, forms_1.Validators.maxLength(50)])
                            ],
                            firstName: [
                                "",
                                forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(50)])
                            ],
                            appartment: [
                                "",
                                forms_1.Validators.compose([forms_1.Validators.required])
                            ],
                            isSyndic: [
                                "",
                                forms_1.Validators.compose([forms_1.Validators.required])
                            ],
                            email: [
                                "",
                                forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])
                            ],
                            password: [
                                "",
                                forms_1.Validators.required
                            ],
                            passwordconfirm: [
                                "",
                                forms_1.Validators.required
                            ]
                        })
                    });
                    this.loginForm = fb.group({
                        login: [
                            "",
                            forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])
                        ],
                        password: [
                            "",
                            forms_1.Validators.required
                        ],
                    });
                };
                LoginComponent.prototype.saveCreatingAccount = function (model) {
                    this.service.save(model);
                    var account = this.service.Login(model.email, model.password);
                    if (account)
                        this.router.navigate(['/news']);
                };
                LoginComponent.prototype.login = function (form) {
                    console.log('should register:', form.value);
                    if (this.service.Login(form.value.login, form.value.password)) {
                        this.router.navigate(['/news']);
                    }
                    form.reset();
                };
                return LoginComponent;
            }());
            LoginComponent = __decorate([
                core_1.Component({
                    selector: 'my-login',
                    templateUrl: './app/components/login/login.component.html',
                    styleUrls: ['./app/components/login/login.component.css']
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    forms_1.FormBuilder,
                    account_service_1.AccountService,
                    appartment_service_1.AppartmentService])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    };
});
//# sourceMappingURL=login.component.js.map