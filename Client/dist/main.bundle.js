webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n    <div class=\"row header-row\">\n        <div class=\"col-4 text-right\">\n            <img class=\"dorg-face\" src=\"./assets/images/nibbler.png\" />\n        </div>\n        <div class=\"col-4 text-center\">\n            <span class=\"align-middle\">FEED THE DORGS</span>\n        </div>\n        <div class=\"col-4 text-left\">\n            <img class=\"dorg-face\" src=\"./assets/images/bee.png\" />\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12 text-center\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-row {\n  background: #8b1159;\n  height: auto;\n  font-size: 36px;\n  font-weight: bold;\n  color: #ffffff;\n  padding: 10px; }\n\n.dorg-face {\n  height: 80px;\n  width: 80px;\n  border: 5px solid #ffffff;\n  border-radius: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dispenser_dispenser_component__ = __webpack_require__("../../../../../src/app/components/dispenser/dispenser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_dispenser_service__ = __webpack_require__("../../../../../src/app/services/dispenser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_default_request_options_service__ = __webpack_require__("../../../../../src/app/services/default-request-options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("../../../../angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_fontawesome_angular2_fontawesome__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_dispenser_dispenser_component__["a" /* DispenserComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__routing_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_dispenser_service__["a" /* DispenserService */],
                __WEBPACK_IMPORTED_MODULE_9__services_default_request_options_service__["a" /* DefaultRequestOptions */],
                __WEBPACK_IMPORTED_MODULE_9__services_default_request_options_service__["b" /* requestOptionsProvider */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dispenser/dispenser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row text-center p-20 d-none d-lg-flex\">\n      <div class=\"col col-md-2 text-right\">\n        <button class=\"btn btn-primary p-30 m-30\" type=\"button\" (click)=\"dispenseLeft()\">Left</button>\n      </div>\n      <div class=\"col col-md-8 text-center\">\n          <img src=\"http://192.168.1.135:8080/image.jpg\" width=\"100%\" />\n        </div>\n      <div class=\"col col-md-2 text-left\">\n          <button class=\"btn btn-primary p-30 m-30\" type=\"button\" (click)=\"dispenseRight()\">Right</button>\n      </div>\n  \n    </div>\n  <div class=\"row text-center p-20 d-xs-flex d-sm-flex d-md-flex d-lg-none\">\n    <div class=\"col text-center\">\n      <button class=\"btn btn-primary p-30 m-30\" type=\"button\" (click)=\"dispenseLeft()\">Left</button>\n      <button class=\"btn btn-primary p-30 m-30\" type=\"button\" (click)=\"dispenseRight()\">Right</button>\n    </div>\n  </div>\n  <div class=\"row p-10 d-xs-flex d-sm-flex d-md-flex d-lg-none\">\n    <div class=\"col text-center\">\n      <img src=\"http://192.168.1.135:8080/image.jpg\" width=\"100%\" />\n    </div>\n  </div>\n\n  <div class=\"form-group row p-10 message-row\">\n    <div class=\"col-12 message\" *ngIf=\"message !== null\">\n      {{message}}\n    </div>\n  </div>\n  <div class=\"form-group row p-10\">\n    <div class=\"col-5 col-form-label text-right\">\n      <label for=\"move-to-value\">Move: </label>\n    </div>\n    <div class=\"col-3 input-group\">\n      <input type=\"text\" id=\"move-to-value\" class=\"form-control\" [(ngModel)]=\"moveValue\" style=\"width:60px\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"moveToTarget()\">Yas</button>\n      </span>\n    </div>\n  </div>\n</div>\n<div class=\"progress-overlay\" *ngIf=\"processing\">\n  <i class=\"fa fa-circle-o-notch fa-spin\"></i>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dispenser/dispenser.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".p-10 {\n  padding: 10px; }\n\n.p-20 {\n  padding: 20px; }\n\n.p-30 {\n  padding: 30px; }\n\n.m-30 {\n  margin: 30px; }\n\n.message-row {\n  min-height: 60px; }\n\n@-webkit-keyframes fade-in-out {\n  0% {\n    opacity: 0; }\n  30% {\n    opacity: 1; }\n  70% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fade-in-out {\n  0% {\n    opacity: 0; }\n  30% {\n    opacity: 1; }\n  70% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.message {\n  -webkit-animation-name: fade-in-out;\n          animation-name: fade-in-out;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  font-size: 36px;\n  font-weight: bold;\n  color: #8b1159; }\n\n.progress-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 40px;\n  font-size: 66px;\n  text-align: center;\n  color: #8b1159;\n  height: 100%;\n  width: 100%;\n  background: rgba(100, 50, 100, 0.5);\n  z-index: 5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dispenser/dispenser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DispenserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dispenser_service__ = __webpack_require__("../../../../../src/app/services/dispenser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/finally.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DispenserComponent = (function () {
    function DispenserComponent(dispenserService) {
        this.dispenserService = dispenserService;
        this.moveValue = 0;
        this.message = null;
        this.processing = false;
    }
    DispenserComponent.prototype.ngOnInit = function () {
    };
    DispenserComponent.prototype.dispenseLeft = function () {
        var _this = this;
        this.processing = true;
        this.dispenserService.dispenseLeft()
            .finally(function () { return _this.processing = false; })
            .subscribe(function (res) {
            _this.flashMessage('Dispensed left! Delicious');
        }, function (error) {
            _this.flashMessage('Error dispensing left!');
        });
    };
    DispenserComponent.prototype.dispenseRight = function () {
        var _this = this;
        this.processing = true;
        this.dispenserService.dispenseRight()
            .finally(function () { return _this.processing = false; })
            .subscribe(function (res) {
            _this.flashMessage('Dispensed right! Yum!');
        }, function (error) {
            _this.flashMessage('Error dispensing right!');
        });
    };
    DispenserComponent.prototype.moveToTarget = function () {
        var _this = this;
        this.processing = true;
        this.dispenserService.moveTo(this.moveValue)
            .finally(function () {
            _this.processing = false;
            _this.moveValue = 0;
        })
            .subscribe(function (res) {
            _this.flashMessage('Moved ' + _this.moveValue);
        }, function (error) {
            _this.flashMessage('Error moving!');
        });
    };
    DispenserComponent.prototype.flashMessage = function (newMessage) {
        var _this = this;
        this.message = newMessage;
        setTimeout(function () {
            _this.message = null;
        }, 2000);
    };
    DispenserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dispenser',
            template: __webpack_require__("../../../../../src/app/components/dispenser/dispenser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dispenser/dispenser.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_dispenser_service__["a" /* DispenserService */]])
    ], DispenserComponent);
    return DispenserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dispenser_dispenser_component__ = __webpack_require__("../../../../../src/app/components/dispenser/dispenser.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_dispenser_dispenser_component__["a" /* DispenserComponent */],
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/default-request-options.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultRequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return requestOptionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * This class provides a set of default request options for use with an Http request.
 * Includes environment configurations (e.g. base url). The Http service will use
 * this by default per the provider configuration in the app module.
 * Per the angular docs: https://angular.io/guide/http
 */
var DefaultRequestOptions = (function (_super) {
    __extends(DefaultRequestOptions, _super);
    function DefaultRequestOptions() {
        var _this = _super.call(this) || this;
        // Set the default 'Content-Type' header
        _this.headers.set('Content-Type', 'application/json');
        return _this;
    }
    // These options will be merged with those specified in the http call
    /**
     * TODO: for some very few instances, we'll need to _not_ override the options.url
     * because we'll be hitting external apis. for now my condition on that will be if the
     * url explicitly contains 'http' in the beginning of its call
     */
    DefaultRequestOptions.prototype.merge = function (options) {
        if (options.url && options.url.indexOf('http') !== 0) {
            options.url = __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + options.url;
        }
        var result = _super.prototype.merge.call(this, options);
        result.merge = this.merge;
        return result;
    };
    DefaultRequestOptions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DefaultRequestOptions);
    return DefaultRequestOptions;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* BaseRequestOptions */]));

var requestOptionsProvider = { provide: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */], useClass: DefaultRequestOptions };


/***/ }),

/***/ "../../../../../src/app/services/dispenser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DispenserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DispenserService = (function () {
    function DispenserService(http) {
        this.http = http;
    }
    DispenserService.prototype.dispenseLeft = function () {
        var url = '/dispenser/left';
        return this.http.post(url, {}).map(function (res) {
            return true;
        });
    };
    DispenserService.prototype.dispenseRight = function () {
        var url = '/dispenser/right';
        return this.http.post(url, {}).map(function (res) {
            return true;
        });
    };
    DispenserService.prototype.moveTo = function (targetPosition) {
        var url = '/dispenser/moveTo';
        var payload = { position: targetPosition };
        var jsonPayload = JSON.stringify(payload);
        return this.http.post(url, jsonPayload).map(function (res) {
            return true;
        });
    };
    DispenserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DispenserService);
    return DispenserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://192.168.1.150:3000',
    streamUrl: 'http://192.168.1.102:9090/stream/video.mjpeg'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map