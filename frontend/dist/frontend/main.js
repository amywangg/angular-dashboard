(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingModule", function() { return routingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/analytics/analytics.component */ "./src/app/components/analytics/analytics.component.ts");
/* harmony import */ var _components_performance_performance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/performance/performance.component */ "./src/app/components/performance/performance.component.ts");
/* harmony import */ var _components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/alerts/alerts.component */ "./src/app/components/alerts/alerts.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_settings_files_files_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/settings/files/files.component */ "./src/app/components/settings/files/files.component.ts");









var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'analytics', component: _components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_4__["AnalyticsComponent"] },
    { path: 'performance', component: _components_performance_performance_component__WEBPACK_IMPORTED_MODULE_5__["PerformanceComponent"] },
    { path: 'alerts', component: _components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_6__["AlertsComponent"] },
    {
        path: 'settings', component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"], children: [
            { path: 'files', component: _components_settings_files_files_component__WEBPACK_IMPORTED_MODULE_8__["FilesComponent"] },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingModule = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n  }\n  \n  .sidenav {\n    width: 250px;\n  }\n  \n  .mat-toolbar.mat-primary {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n  }\n  \n  .example-sidenav {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n  \n  .full-width {\n    width: 100%;\n  }\n  \n  .menu-button {\n    transition: 300ms ease-in-out;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  \n  .menu-button.rotated {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  \n  .submenu {\n    overflow-y: hidden;\n    transition: -webkit-transform 300ms ease;\n    transition: transform 300ms ease;\n    transition: transform 300ms ease, -webkit-transform 300ms ease;\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n    -webkit-transform-origin: top;\n            transform-origin: top;\n    padding-left: 30px;\n  }\n  \n  .submenu.expanded {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  \n  .current{\n      color: accent;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtFQUNWOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sVUFBVTtFQUNaOztFQUVBO0lBQ0UseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHdDQUFnQztJQUFoQyxnQ0FBZ0M7SUFBaEMsOERBQWdDO0lBQ2hDLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0VBQ3RCOztFQUVBO01BQ0ksYUFBYTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIFxuICAuc2lkZW5hdiB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG4gIFxuICAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXNpZGVuYXYge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIFxuICAuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5tZW51LWJ1dHRvbiB7XG4gICAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgXG4gIC5tZW51LWJ1dHRvbi5yb3RhdGVkIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG4gIFxuICAuc3VibWVudSB7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIH1cbiAgXG4gIC5zdWJtZW51LmV4cGFuZGVkIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgfVxuXG4gIC5jdXJyZW50e1xuICAgICAgY29sb3I6IGFjY2VudDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"true\" #start mode=\"side\">\n    <mat-toolbar color=\"accent\" >Dashboard</mat-toolbar>\n    <mat-nav-list>\n      <mat-list-item (click)=\"showSubmenu = !showSubmenu\" class=\"parent\">\n        <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Log Dashboard</span>\n        <mat-icon mat-list-icon>home</mat-icon>\n        <mat-icon class=\"menu-button\" [ngClass]=\"{'rotated' : showSubmenu}\" *ngIf=\"isExpanded || isShowing\">expand_more\n        </mat-icon>\n      </mat-list-item>\n      <div class=\"submenu\" [ngClass]=\"{'expanded' : showSubmenu}\" *ngIf=\"isShowing || isExpanded\">\n        <a mat-list-item routerLink=\"/\" routerLinkActive=\"current\"><i class=\"fas fa-home\"></i>Home</a>\n        <a mat-list-item routerLink=\"/analytics\" routerLinkActive=\"current\"><i class=\"far fa-chart-bar\"></i>Analytics</a>\n          <a mat-list-item routerLink=\"/performance\" routerLinkActive=\"current\"><i class=\"far fa-clock\"></i>Performance</a>\n          <a mat-list-item routerLink=\"/alerts\"routerLinkActive=\"current\"><i class=\"far fa-bell\"></i>Alerts</a>\n              <a mat-list-item routerLink=\"/settings/files\" routerLinkActive=\"current\"><i class=\"fas fa-cogs\"></i>Settings</a>\n      </div>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button mat-button type=\"button\" aria-label=\"Toggle sidenav\" (click)=\"toggleSideNav(start)\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>\n        <!-- put toolbar items here -->\n      </span>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isExpanded = true;
        this.showSubmenu = true;
        this.isShowing = true;
        this.showSubSubMenu = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    AppComponent.prototype.toggleSideNav = function (start) {
        this.sidenav.toggle();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('start'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"])
    ], AppComponent.prototype, "sidenav", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/alerts/alerts.component */ "./src/app/components/alerts/alerts.component.ts");
/* harmony import */ var _components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/analytics/analytics.component */ "./src/app/components/analytics/analytics.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_performance_performance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/performance/performance.component */ "./src/app/components/performance/performance.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_settings_files_files_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/settings/files/files.component */ "./src/app/components/settings/files/files.component.ts");
/* harmony import */ var _components_settings_files_add_files_add_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/settings/files-add/files-add.component */ "./src/app/components/settings/files-add/files-add.component.ts");
/* harmony import */ var _components_settings_files_list_files_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/settings/files-list/files-list.component */ "./src/app/components/settings/files-list/files-list.component.ts");
/* harmony import */ var _components_settings_files_edit_files_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/settings/files-edit/files-edit.component */ "./src/app/components/settings/files-edit/files-edit.component.ts");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/file.service */ "./src/app/services/file.service.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__["AlertsComponent"],
                _components_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_8__["AnalyticsComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"],
                _components_performance_performance_component__WEBPACK_IMPORTED_MODULE_10__["PerformanceComponent"],
                _components_settings_files_files_component__WEBPACK_IMPORTED_MODULE_15__["FilesComponent"],
                _components_settings_files_add_files_add_component__WEBPACK_IMPORTED_MODULE_16__["FilesAddComponent"],
                _components_settings_files_list_files_list_component__WEBPACK_IMPORTED_MODULE_17__["FilesListComponent"],
                _components_settings_files_edit_files_edit_component__WEBPACK_IMPORTED_MODULE_18__["FilesEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"]
            ],
            providers: [_services_file_service__WEBPACK_IMPORTED_MODULE_19__["FileService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/alerts/alerts.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/alerts/alerts.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxlcnRzL2FsZXJ0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/alerts/alerts.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/alerts/alerts.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  alerts works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/alerts/alerts.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/alerts/alerts.component.ts ***!
  \*******************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertsComponent = /** @class */ (function () {
    function AlertsComponent() {
    }
    AlertsComponent.prototype.ngOnInit = function () {
    };
    AlertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__(/*! ./alerts.component.html */ "./src/app/components/alerts/alerts.component.html"),
            styles: [__webpack_require__(/*! ./alerts.component.css */ "./src/app/components/alerts/alerts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "./src/app/components/analytics/analytics.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/analytics/analytics.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5hbHl0aWNzL2FuYWx5dGljcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/analytics/analytics.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/analytics/analytics.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  analytics works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/analytics/analytics.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/analytics/analytics.component.ts ***!
  \*************************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent() {
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
    };
    AnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-analytics',
            template: __webpack_require__(/*! ./analytics.component.html */ "./src/app/components/analytics/analytics.component.html"),
            styles: [__webpack_require__(/*! ./analytics.component.css */ "./src/app/components/analytics/analytics.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/performance/performance.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/performance/performance.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVyZm9ybWFuY2UvcGVyZm9ybWFuY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/performance/performance.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/performance/performance.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  performance works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/performance/performance.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/performance/performance.component.ts ***!
  \*****************************************************************/
/*! exports provided: PerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceComponent", function() { return PerformanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PerformanceComponent = /** @class */ (function () {
    function PerformanceComponent() {
    }
    PerformanceComponent.prototype.ngOnInit = function () {
    };
    PerformanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-performance',
            template: __webpack_require__(/*! ./performance.component.html */ "./src/app/components/performance/performance.component.html"),
            styles: [__webpack_require__(/*! ./performance.component.css */ "./src/app/components/performance/performance.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PerformanceComponent);
    return PerformanceComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/files-add/files-add.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/settings/files-add/files-add.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3MvZmlsZXMtYWRkL2ZpbGVzLWFkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/settings/files-add/files-add.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/settings/files-add/files-add.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"file-in panel\">\n  <h4 style=\"display: inline-block\">Add a Log File</h4>\n  <!-- <a mat-raised-button color=\"primary\" [routerLink]=\"['/settings' , {outlets: {'file-aux': ['files']}}]\"\n    style=\"float:right\">\n    <mat-icon>list</mat-icon>\n  </a> -->\n\n  <form [formGroup]=\"fileForm\" (ngSubmit)=\"onFormSubmit(fileForm.value)\" accept=\".log\">\n\n    <!-- <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\"> -->\n    <span>\n      <mat-form-field class=\"example-full-width\">\n        <input id=\"name\" matInput placeholder=\"Name\" formControlName=\"nameControl\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <input id=\"file\" matInput placeholder=\"File Path\" formControlName=\"pathControl\" required>\n      </mat-form-field>\n    </span>\n\n    <span>\n      <mat-form-field class=\"example-full-width\" style=\"max-width:30vw; margin-right: 20px;\">\n        <input id=\"app\" type=\"text\" placeholder=\"Application\" aria-label=\"Number\" matInput formControlName=\"appControl\"\n          [matAutocomplete]=\"auto\" required>\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let app of applications\" [value]=\"app\">\n            {{app}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n  \n      <mat-form-field class=\"example-full-width\" style=\"max-width:30vw;\">\n        <input type=\"text\" placeholder=\"Server\" aria-label=\"Number\" matInput formControlName=\"serverControl\"\n          [matAutocomplete]=\"auto2\" required>\n        <mat-autocomplete #auto2=\"matAutocomplete\">\n          <mat-option *ngFor=\"let server of servers\" [value]=\"server\">\n            {{server}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </span>\n    \n\n    <div class=\"button-row\">\n      <button type=\"submit\" mat-raised-button color=\"primary\">\n        <mat-icon>save</mat-icon>\n      </button>\n    </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/components/settings/files-add/files-add.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/settings/files-add/files-add.component.ts ***!
  \**********************************************************************/
/*! exports provided: FilesAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesAddComponent", function() { return FilesAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/file.service */ "./src/app/services/file.service.ts");





var FilesAddComponent = /** @class */ (function () {
    function FilesAddComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.fileToUpload = null;
        this.applications = ['Fidelity.ca', 'AiWeb'];
        this.servers = ['Production', 'QA', 'Development'];
    }
    FilesAddComponent.prototype.ngOnInit = function () {
        this.fileForm = this.formBuilder.group({
            pathControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            appControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            serverControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nameControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    FilesAddComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        console.log(this.fileForm);
        if (this.fileForm.valid) {
            var data = this.fileForm.value;
            this.api.postFile(data).subscribe(function () {
                _this.router.navigate(['settings/files']);
            });
        }
    };
    FilesAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-files-add',
            template: __webpack_require__(/*! ./files-add.component.html */ "./src/app/components/settings/files-add/files-add.component.html"),
            styles: [__webpack_require__(/*! ./files-add.component.css */ "./src/app/components/settings/files-add/files-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FilesAddComponent);
    return FilesAddComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/files-edit/files-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/settings/files-edit/files-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3MvZmlsZXMtZWRpdC9maWxlcy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/settings/files-edit/files-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/settings/files-edit/files-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  files-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/settings/files-edit/files-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/settings/files-edit/files-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: FilesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesEditComponent", function() { return FilesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilesEditComponent = /** @class */ (function () {
    function FilesEditComponent() {
    }
    FilesEditComponent.prototype.ngOnInit = function () {
    };
    FilesEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-files-edit',
            template: __webpack_require__(/*! ./files-edit.component.html */ "./src/app/components/settings/files-edit/files-edit.component.html"),
            styles: [__webpack_require__(/*! ./files-edit.component.css */ "./src/app/components/settings/files-edit/files-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilesEditComponent);
    return FilesEditComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/files-list/files-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/settings/files-list/files-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3MvZmlsZXMtbGlzdC9maWxlcy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/settings/files-list/files-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/settings/files-list/files-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <h4 style=\"display:inline-block\">Log File Source</h4>\n  </div>\n  <mat-table>\n    <!-- For User ID -->\n <ng-container matColumnDef=\"name\">\n  <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n  <mat-cell *matCellDef=\"let data\">  </mat-cell>\n  </ng-container>\n  \n  <!-- For Title -->\n  <ng-container matColumnDef=\"path\">\n  <mat-header-cell *matHeaderCellDef mat-sort-header> Path </mat-header-cell>\n  <mat-cell *matCellDef=\"let data\">  </mat-cell>\n  </ng-container>\n  \n  <!-- For Completion Status -->\n  <ng-container matColumnDef=\"application\">\n  <mat-header-cell *matHeaderCellDef mat-sort-header> Application </mat-header-cell>\n  <mat-cell *matCellDef=\"let data\">  </mat-cell>\n  </ng-container>\n  <!-- For Completion Status -->\n  <ng-container matColumnDef=\"server\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Server </mat-header-cell>\n    <mat-cell *matCellDef=\"let data\">  </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"updated_date\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Last Updated </mat-header-cell>\n      <mat-cell *matCellDef=\"let data\">  </mat-cell>\n      </ng-container>\n  <!-- For Completion Status -->\n  <ng-container matColumnDef=\"action\">\n  <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n  <mat-cell *matCellDef=\"let data\">\n  <button mat-button color=\"primary\" (click)=\"editFile(data._id)\">Edit</button>\n  <button mat-button color=\"warn\" (click)=\"deleteFile(data._id)\">Delete</button>\n  </mat-cell>\n  </ng-container>\n  \n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n </mat-table>\n  \n <!-- To paginate between pages with search -->\n <mat-paginator #paginator [length]=\"fileList && fileList.length\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20]\">\n </mat-paginator>\n </div>\n <!-- </mat-card> -->\n\n<!-- \n<div id=\"rightView\" ng-show=\"$state.includes('list.edit')\">\n    <div ui-view=\"edit\" autoscroll=\"false\"></div>\n</div>  -->"

/***/ }),

/***/ "./src/app/components/settings/files-list/files-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/settings/files-list/files-list.component.ts ***!
  \************************************************************************/
/*! exports provided: FilesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesListComponent", function() { return FilesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var FilesListComponent = /** @class */ (function () {
    function FilesListComponent(api, router) {
        this.api = api;
        this.router = router;
        this.displayedColumns = ['name', 'path', 'application', 'server', 'updated_date'];
    }
    FilesListComponent.prototype.ngOnInit = function () {
        this.getFiles();
    };
    // To Get List Of Employee
    FilesListComponent.prototype.getFiles = function () {
        var _this = this;
        this.api
            .getFiles()
            .subscribe(function (data) {
            _this.MyDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
            _this.MyDataSource.data = data;
            _this.MyDataSource.paginator = _this.paginator;
            _this.MyDataSource.sort = _this.sort;
        });
    };
    // To Edit Employee
    FilesListComponent.prototype.editFile = function (id) {
        this.router.navigate(["/files/edit/" + id]);
    };
    // Search specific result
    FilesListComponent.prototype.filterFile = function (searchstring) {
        searchstring = searchstring.trim();
        searchstring = searchstring.toLowerCase();
        this.MyDataSource.filter = searchstring;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], FilesListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], FilesListComponent.prototype, "sort", void 0);
    FilesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-files-list',
            template: __webpack_require__(/*! ./files-list.component.html */ "./src/app/components/settings/files-list/files-list.component.html"),
            styles: [__webpack_require__(/*! ./files-list.component.css */ "./src/app/components/settings/files-list/files-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FilesListComponent);
    return FilesListComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/files/files.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/settings/files/files.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3MvZmlsZXMvZmlsZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/settings/files/files.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/settings/files/files.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-files-add></app-files-add>\n<app-files-list></app-files-list>\n"

/***/ }),

/***/ "./src/app/components/settings/files/files.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/settings/files/files.component.ts ***!
  \**************************************************************/
/*! exports provided: FilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesComponent", function() { return FilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilesComponent = /** @class */ (function () {
    function FilesComponent() {
    }
    FilesComponent.prototype.ngOnInit = function () {
    };
    FilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-files',
            template: __webpack_require__(/*! ./files.component.html */ "./src/app/components/settings/files/files.component.html"),
            styles: [__webpack_require__(/*! ./files.component.css */ "./src/app/components/settings/files/files.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilesComponent);
    return FilesComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/settings/settings.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"file\">\n  <app-files-add (add)=\"onAddfiles($event)\"></app-files-add>\n  <app-files-list [files]=\"files\" (toggleComplete)=\"onTogglefilesComplete($event)\" (remove)=\"onRemovefiles($event)\">\n  </app-files-list>\n</section> -->\n<app-files></app-files>"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/services/file.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/file.service.ts ***!
  \******************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = 'http://localhost:4000/files';
var FileService = /** @class */ (function () {
    function FileService(http) {
        this.http = http;
    }
    FileService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    FileService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    FileService.prototype.getFiles = function () {
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    FileService.prototype.getFile = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    FileService.prototype.postFile = function (data) {
        return this.http.post(apiUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    FileService.prototype.updateFile = function (id, data) {
        var url = apiUrl + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    FileService.prototype.deleteFile = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/amy/Desktop/Web Development/Dashboard/angular-dashboard/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map