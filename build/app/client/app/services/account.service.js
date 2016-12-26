System.register(["@angular/core", "@angular/http", "rxjs/add/operator/toPromise", "rxjs/Rx"], function (exports_1, context_1) {
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
    var core_1, http_1, Rx_1, AccountService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }
        ],
        execute: function () {
            AccountService = (function () {
                function AccountService(http) {
                    this.http = http;
                    this.loggedIn = new Rx_1.BehaviorSubject(false);
                    this.account = new Rx_1.BehaviorSubject(null);
                    this.serviceUrl = 'api/accounts'; // URL to web api
                }
                AccountService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                // getAccountByLogin(login: string, pwd: string) {
                //     return this.http.get(this.serviceUrl + '/' + login + '/' + pwd)
                //         .toPromise()
                //         .then(response => response.json())
                //         .catch(this.handleError);
                // }
                AccountService.prototype.save = function (vm) {
                    if (vm._id) {
                        return this.put(vm);
                    }
                    return this.post(vm);
                };
                AccountService.prototype.post = function (vm) {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    return this.http
                        .post(this.serviceUrl, JSON.stringify(vm), { headers: headers })
                        .toPromise()
                        .then(function (response) { return response.json().data; })
                        .catch(this.handleError);
                };
                AccountService.prototype.put = function (vm) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = this.serviceUrl + "/" + vm._id;
                    return this.http
                        .put(url, JSON.stringify(vm), { headers: headers })
                        .toPromise()
                        .then(function () { return vm; })
                        .catch(this.handleError);
                };
                AccountService.prototype.Login = function (login, pwd) {
                    var url = this.serviceUrl + '/login' + "/" + login + "/" + pwd;
                    // let url = this.serviceUrl+'/login';
                    // let params: URLSearchParams = new URLSearchParams();
                    // params.set('login', login);
                    // params.set('pwd', pwd);
                    // return this.http.get(url, {
                    //     search: params
                    // })
                    return this.http.get(url)
                        .toPromise()
                        .then(function (response) {
                        var res = response.json();
                        if (res) {
                            // store user details and jwt token in local storage to keep user logged in between page refreshes
                            sessionStorage.setItem('currentUser', JSON.stringify(res));
                        }
                        return res;
                    })
                        .catch(this.handleError);
                };
                return AccountService;
            }());
            AccountService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], AccountService);
            exports_1("AccountService", AccountService);
        }
    };
});
//# sourceMappingURL=account.service.js.map