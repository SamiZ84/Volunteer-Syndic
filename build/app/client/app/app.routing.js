System.register(["@angular/router", "./guards/authGuard", "./components/acceuil/acceuil.component", "./components/home/home.component", "./components/dashboard/dashboard.component", "./components/heroes/heroes.component", "./components/heroDetail/hero-detail.component", "./components/login/login.component", "./components/createaccount/createaccount.component", "./components/news/news.component", "./components/newsDetail/newsDetail.component", "./components/suggessions/suggessions.component", "./components/suggessionDetail/suggessionDetail.component", "./components/appartments/appartments.component", "./components/appartmentDetail/appartmentDetail.component", "./components/funds/funds.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, authGuard_1, acceuil_component_1, home_component_1, dashboard_component_1, heroes_component_1, hero_detail_component_1, login_component_1, createaccount_component_1, news_component_1, newsDetail_component_1, suggessions_component_1, suggessionDetail_component_1, appartments_component_1, appartmentDetail_component_1, funds_component_1, appRoutes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authGuard_1_1) {
                authGuard_1 = authGuard_1_1;
            },
            function (acceuil_component_1_1) {
                acceuil_component_1 = acceuil_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
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
            }
        ],
        execute: function () {
            appRoutes = [
                { path: '', component: acceuil_component_1.AcceuilComponent },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'news', component: news_component_1.NewsComponent },
                { path: 'news/:id', component: newsDetail_component_1.NewsDetailComponent, canActivate: [authGuard_1.AuthGuard] },
                { path: 'suggessions', component: suggessions_component_1.SuggessionsComponent },
                { path: 'suggession/:id', component: suggessionDetail_component_1.SuggessionDetailComponent, canActivate: [authGuard_1.AuthGuard] },
                { path: 'appartments', component: appartments_component_1.AppartmentsComponent, canActivate: [authGuard_1.AuthGuard] },
                { path: 'appartment/:id', component: appartmentDetail_component_1.AppartmentDetailComponent, canActivate: [authGuard_1.AuthGuard] },
                { path: 'funds', component: funds_component_1.FundsComponent, canActivate: [authGuard_1.AuthGuard] },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'createaccount', component: createaccount_component_1.CreateAccountComponent },
                { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent },
                { path: 'heroes', component: heroes_component_1.HeroesComponent }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true }));
        }
    };
});
//# sourceMappingURL=app.routing.js.map