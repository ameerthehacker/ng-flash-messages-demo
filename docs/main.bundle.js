webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" style=\"margin-top: 30px;\">\n    <div class=\"col sm-12\">\n      <ng-flash-message></ng-flash-message>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-offset-3 col-md-6\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h4 class=\"text-center\">\n            Flash Messages\n          </h4>\n        </div>\n        <div class=\"panel-body\">\n          <form (submit)=\"onFlashFormSubmit()\" [formGroup]=\"flashForm\">\n            <div class=\"form-group\">\n                <label class=\"control-label\" for=\"message\">Message</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"message\" id=\"message\" placeholder=\"Enter some message to be displayed...\">\n                <div *ngIf=\"message.invalid\" class=\"error-field\">\n                  message field is required\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label\" for=\"timeout\">Timeout</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"timeout\" id=\"timeout\" placeholder=\"Enter time in ms, leave it blank to make it infinite\">\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label\" for=\"type\">Type</label>\n                <select class=\"form-control\" formControlName=\"type\" id=\"type\">\n                  <option value=\"info\">Info</option>\n                  <option value=\"success\">Success</option>\n                  <option value=\"warning\">Warning</option>\n                  <option value=\"danger\">Danger</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"inline-radio\">\n                  <label>\n                      <input type=\"radio\" formControlName=\"dismissible\" name=\"dismissible\" value=\"yes\"> Dismissible\n                  </label>\n                  <label>\n                      <input type=\"radio\" formControlName=\"dismissible\" name=\"dismissible\" value=\"no\"> Not dismissible\n                  </label>\n                </div>\n            </div>\n            <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"flashForm.invalid\">Show Flash</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n  margin-top: 100px; }\n\n.btn {\n  border-radius: 2em !important; }\n\n.ng-invalid[type=text] {\n  border: 1px solid #f00; }\n\n.error-field {\n  color: red;\n  font-size: small; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("../../../../ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(ngFlashMessageService) {
        this.ngFlashMessageService = ngFlashMessageService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.flashForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            message: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("Hey there i'm a flash message", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            timeout: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('2000'),
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('info'),
            dismissible: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('no')
        });
    };
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            return this.flashForm.get('message');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "timeout", {
        get: function () {
            return this.flashForm.get('timeout');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "type", {
        get: function () {
            return this.flashForm.get('type');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "dismissible", {
        get: function () {
            return this.flashForm.get('dismissible');
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onFlashFormSubmit = function () {
        var flashMessage = {
            messages: [this.message.value],
            timeout: this.timeout.value,
            type: this.type.value,
            dismissible: this.dismissible.value == 'yes' ? true : false
        };
        this.ngFlashMessageService.showFlashMessage(flashMessage);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("../../../../ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessagesModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



if (true) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map