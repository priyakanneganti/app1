"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var AddUser_1 = require("./User/AddUser");
var HomePage_1 = require("./Home/HomePage");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var routeMap = [
    { path: "Home", component: HomePage_1.HomePage },
    { path: "addUser", component: AddUser_1.AddUser },
    { path: "**", component: HomePage_1.HomePage }
];
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule, platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routeMap), forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, HomePage_1.HomePage, AddUser_1.AddUser],
        bootstrap: [app_component_1.AppComponent]
    })
], MainModule);
exports.MainModule = MainModule;
/**
 * template
 */
//# sourceMappingURL=app.mainmodule.js.map