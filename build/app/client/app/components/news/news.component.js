/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
System.register(["@angular/core"], function (exports_1, context_1) {
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
    var core_1, NewsComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {/**
             * Created by Moiz.Kachwala on 02-06-2016.
             */
            NewsComponent = (function () {
                function NewsComponent() {
                }
                NewsComponent.prototype.ngOnInit = function () {
                };
                return NewsComponent;
            }());
            NewsComponent = __decorate([
                core_1.Component({
                    selector: 'my-news',
                    templateUrl: './app/components/news/news.component.html',
                    styleUrls: ['./app/components/news/news.component.css']
                }),
                __metadata("design:paramtypes", [])
            ], NewsComponent);
            exports_1("NewsComponent", NewsComponent);
        }
    };
});
//# sourceMappingURL=news.component.js.map