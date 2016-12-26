System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/http", "ng-lightning/ng-lightning", "./app.component", "./app.routing", "./components/acceuil/acceuil.component", "./components/home/home.component", "./components/menu/menu.component", "./components/heroes/heroes.component", "./components/dashboard/dashboard.component", "./components/heroDetail/hero-detail.component", "./components/login/login.component", "./components/createaccount/createaccount.component", "./components/news/news.component", "./components/newsDetail/newsDetail.component", "./components/suggessions/suggessions.component", "./components/suggessionDetail/suggessionDetail.component", "./components/appartments/appartments.component", "./components/appartmentDetail/appartmentDetail.component", "./components/funds/funds.component", "./guards/authGuard", "./services/hero.service", "./services/person.service", "./services/appartment.service", "./services/account.service", "@progress/kendo-angular-buttons", "@progress/kendo-angular-grid", "@progress/kendo-angular-inputs", "@progress/kendo-angular-dropdowns", "./components/shared/kendoGrid/grid.component"], function (exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, http_1, ng_lightning_1, app_component_1, app_routing_1, acceuil_component_1, home_component_1, menu_component_1, heroes_component_1, dashboard_component_1, hero_detail_component_1, login_component_1, createaccount_component_1, news_component_1, newsDetail_component_1, suggessions_component_1, suggessionDetail_component_1, appartments_component_1, appartmentDetail_component_1, funds_component_1, authGuard_1, hero_service_1, person_service_1, appartment_service_1, account_service_1, kendo_angular_buttons_1, kendo_angular_grid_1, kendo_angular_inputs_1, kendo_angular_dropdowns_1, grid_component_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ng_lightning_1_1) {
                ng_lightning_1 = ng_lightning_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (acceuil_component_1_1) {
                acceuil_component_1 = acceuil_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (createaccount_component_1_1) {
                createaccount_component_1 = createaccount_component_1_1;
            },
            function (news_component_1_1) {
                news_component_1 = news_component_1_1;
            },
            function (newsDetail_component_1_1) {
                newsDetail_component_1 = newsDetail_component_1_1;
            },
            function (suggessions_component_1_1) {
                suggessions_component_1 = suggessions_component_1_1;
            },
            function (suggessionDetail_component_1_1) {
                suggessionDetail_component_1 = suggessionDetail_component_1_1;
            },
            function (appartments_component_1_1) {
                appartments_component_1 = appartments_component_1_1;
            },
            function (appartmentDetail_component_1_1) {
                appartmentDetail_component_1 = appartmentDetail_component_1_1;
            },
            function (funds_component_1_1) {
                funds_component_1 = funds_component_1_1;
            },
            function (authGuard_1_1) {
                authGuard_1 = authGuard_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            },
            function (appartment_service_1_1) {
                appartment_service_1 = appartment_service_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (kendo_angular_buttons_1_1) {
                kendo_angular_buttons_1 = kendo_angular_buttons_1_1;
            },
            function (kendo_angular_grid_1_1) {
                kendo_angular_grid_1 = kendo_angular_grid_1_1;
            },
            function (kendo_angular_inputs_1_1) {
                kendo_angular_inputs_1 = kendo_angular_inputs_1_1;
            },
            function (kendo_angular_dropdowns_1_1) {
                kendo_angular_dropdowns_1 = kendo_angular_dropdowns_1_1;
            },
            function (grid_component_1_1) {
                grid_component_1 = grid_component_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        http_1.HttpModule,
                        forms_1.FormsModule,
                        forms_1.ReactiveFormsModule,
                        app_routing_1.routing,
                        ng_lightning_1.NglModule.forRoot(),
                        kendo_angular_buttons_1.ButtonsModule,
                        kendo_angular_grid_1.GridModule,
                        kendo_angular_inputs_1.InputsModule,
                        kendo_angular_dropdowns_1.DropDownsModule
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        acceuil_component_1.AcceuilComponent,
                        home_component_1.HomeComponent,
                        menu_component_1.MenuComponent,
                        heroes_component_1.HeroesComponent,
                        dashboard_component_1.DashboardComponent,
                        hero_detail_component_1.HeroDetailComponent,
                        login_component_1.LoginComponent,
                        createaccount_component_1.CreateAccountComponent,
                        news_component_1.NewsComponent,
                        newsDetail_component_1.NewsDetailComponent,
                        suggessions_component_1.SuggessionsComponent,
                        suggessionDetail_component_1.SuggessionDetailComponent,
                        appartments_component_1.AppartmentsComponent,
                        appartmentDetail_component_1.AppartmentDetailComponent,
                        funds_component_1.FundsComponent,
                        // custom components
                        grid_component_1.KendoGridComponent
                    ],
                    providers: [
                        authGuard_1.AuthGuard,
                        hero_service_1.HeroService,
                        person_service_1.PersonService,
                        appartment_service_1.AppartmentService,
                        account_service_1.AccountService
                    ],
                    bootstrap: [app_component_1.AppComponent]
                }),
                __metadata("design:paramtypes", [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map