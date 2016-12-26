System.register(["@angular/core", "@angular/http", "rxjs/add/operator/toPromise"], function (exports_1, context_1) {
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
    var core_1, http_1, AppartmentService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            ;
            AppartmentService = (function () {
                function AppartmentService(http) {
                    this.http = http;
                    this.serviceUrl = 'api/appartments'; // URL to web api
                }
                AppartmentService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                AppartmentService.prototype.getAppartments = function () {
                    return this.http.get(this.serviceUrl)
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppartmentService.prototype.getAppartment = function (id) {
                    return this.http.get(this.serviceUrl + '/' + id)
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppartmentService.prototype.save = function (vm) {
                    if (vm._id) {
                        return this.put(vm);
                    }
                    return this.post(vm);
                };
                AppartmentService.prototype.post = function (vm) {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    return this.http
                        .post(this.serviceUrl, JSON.stringify(vm), { headers: headers })
                        .toPromise()
                        .then(function (response) { return response.json().data; })
                        .catch(this.handleError);
                };
                AppartmentService.prototype.put = function (vm) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = this.serviceUrl + "/" + vm._id;
                    return this.http
                        .put(url, JSON.stringify(vm), { headers: headers })
                        .toPromise()
                        .then(function () { return vm; })
                        .catch(this.handleError);
                };
                AppartmentService.prototype.delete = function (vm) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = this.serviceUrl + "/" + vm._id;
                    return this.http
                        .delete(url, headers)
                        .toPromise()
                        .catch(this.handleError);
                };
                AppartmentService.prototype.deleteById = function (id) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = this.serviceUrl + "/" + id;
                    return this.http
                        .delete(url, headers)
                        .toPromise()
                        .catch(this.handleError);
                };
                return AppartmentService;
            }());
            AppartmentService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], AppartmentService);
            exports_1("AppartmentService", AppartmentService);
        }
    };
});
//# sourceMappingURL=appartment.service.js.map