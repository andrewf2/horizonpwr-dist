webpackJsonp([1,4],{

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 146;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(165);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_employee_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmployeeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddEmployeeComponent = (function () {
    function AddEmployeeComponent(employeeService) {
        this.employeeService = employeeService;
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
    };
    AddEmployeeComponent.prototype.onSubmit = function (f) {
        console.log(f.value);
        this.employeeService.createEmployee(f.value);
        this.employeeService.createUser(f.value);
        //this.router.navigate(['/add',"employee"]);
    };
    return AddEmployeeComponent;
}());
AddEmployeeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'add-employee',
        template: __webpack_require__(220)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_employee_service__["a" /* EmployeesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_employee_service__["a" /* EmployeesService */]) === "function" && _a || Object])
], AddEmployeeComponent);

var _a;
//# sourceMappingURL=add-employee.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_sales_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSaleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddSaleComponent = (function () {
    function AddSaleComponent(salesService) {
        this.salesService = salesService;
    }
    AddSaleComponent.prototype.ngOnInit = function () {
    };
    AddSaleComponent.prototype.onSubmit = function (f) {
        console.log(f.value);
        this.salesService.createSale(f.value);
        //this.router.navigate(['/add',"employee"]);
    };
    return AddSaleComponent;
}());
AddSaleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'add-sale',
        template: __webpack_require__(222)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_sales_service__["a" /* SalesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_sales_service__["a" /* SalesService */]) === "function" && _a || Object])
], AddSaleComponent);

var _a;
//# sourceMappingURL=add-sale.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(223)
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_employee_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_sales_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__landing_landing_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__employee_summary_employee_summary_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__add_employee_add_employee_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__add_sale_add_sale_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__edit_sale_edit_sale_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__edit_employee_edit_employee_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__edit_form_edit_form_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__add_form_add_form_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__commissions_commissions_component__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__employee_summary_employee_summary_component__["a" /* EmployeeSummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_14__add_employee_add_employee_component__["a" /* AddEmployeeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__add_sale_add_sale_component__["a" /* AddSaleComponent */],
            __WEBPACK_IMPORTED_MODULE_16__edit_sale_edit_sale_component__["a" /* EditSaleComponent */],
            __WEBPACK_IMPORTED_MODULE_17__edit_employee_edit_employee_component__["a" /* EditEmployeeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__edit_form_edit_form_component__["a" /* EditFormComponent */],
            __WEBPACK_IMPORTED_MODULE_19__add_form_add_form_component__["a" /* AddFormComponent */],
            __WEBPACK_IMPORTED_MODULE_20__commissions_commissions_component__["a" /* CommissionsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HTTPService */], __WEBPACK_IMPORTED_MODULE_6__models_sales_service__["a" /* SalesService */], __WEBPACK_IMPORTED_MODULE_5__models_employee_service__["a" /* EmployeesService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__employee_summary_employee_summary_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_form_edit_form_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_form_add_form_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'commissions/:id', component: __WEBPACK_IMPORTED_MODULE_0__employee_summary_employee_summary_component__["a" /* EmployeeSummaryComponent */] },
    {
        path: 'edit/:resource',
        component: __WEBPACK_IMPORTED_MODULE_1__edit_form_edit_form_component__["a" /* EditFormComponent */],
    },
    { path: 'add/:resource',
        component: __WEBPACK_IMPORTED_MODULE_2__add_form_add_form_component__["a" /* AddFormComponent */],
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commissionService; });
var CommissionService = (function () {
    function CommissionService() {
    }
    CommissionService.prototype.formatSales = function (sales) {
        var formatted = [];
        var iterable = Object.keys(sales);
        iterable.forEach(function (key) { return formatted.push(sales[key]); });
        return formatted;
    };
    return CommissionService;
}());
var commissionService = new CommissionService();
//# sourceMappingURL=commission.service.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_sales_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommissionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommissionsComponent = (function () {
    function CommissionsComponent(salesService) {
        this.salesService = salesService;
    }
    CommissionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.salesService.getSales(this.employee['id'])
            .then(function (sales) { return _this.sales = sales; });
    };
    CommissionsComponent.prototype.getTotalExpenses = function (sale) {
        return parseFloat(sale.jobExpense) + parseFloat(sale.fieldMarketerPayAmount);
    };
    CommissionsComponent.prototype.getTotalCommission = function (sale) {
        var beforeExpenses = parseFloat(this.employee['earnedRate']) * parseFloat(sale.kwTotal);
        var afterExpenses = beforeExpenses - this.getTotalExpenses(sale);
        return afterExpenses;
    };
    return CommissionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], CommissionsComponent.prototype, "employee", void 0);
CommissionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'commissions',
        template: __webpack_require__(224),
        styles: [__webpack_require__(219)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_sales_service__["a" /* SalesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_sales_service__["a" /* SalesService */]) === "function" && _a || Object])
], CommissionsComponent);

var _a;
//# sourceMappingURL=commissions.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEmployeeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditEmployeeComponent = (function () {
    function EditEmployeeComponent() {
    }
    EditEmployeeComponent.prototype.ngOnInit = function () {
    };
    return EditEmployeeComponent;
}());
EditEmployeeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'edit-employee',
        template: __webpack_require__(225)
    }),
    __metadata("design:paramtypes", [])
], EditEmployeeComponent);

//# sourceMappingURL=edit-employee.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSaleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditSaleComponent = (function () {
    function EditSaleComponent() {
    }
    EditSaleComponent.prototype.ngOnInit = function () {
    };
    return EditSaleComponent;
}());
EditSaleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'edit-sale',
        template: __webpack_require__(227)
    }),
    __metadata("design:paramtypes", [])
], EditSaleComponent);

//# sourceMappingURL=edit-sale.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'header',
        template: __webpack_require__(229)
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-landing',
        template: __webpack_require__(230)
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, password) {
        this.username = '';
        this.password = '';
        this.username = username;
        this.password = password;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Trigger the modal with a button -->\n  <!-- Modal -->\n  <div class=\"col-xs-4\">\n    \n  <h2>Add Rep</h2>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"usr\">First Name:</label>\n      <input name=\"fName\" ngModel required #fName=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"usr\">Last Name:</label>\n      <input name=\"lName\" ngModel required #lName=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"usr\">Title:</label>\n      <input name=\"lName\" ngModel required #lName=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"usr\">YTD earnings:</label>\n      <input name=\"startingYTD\" ngModel required #startingYTD=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"usr\">Employee ID:</label>\n      <input name=\"id\" ngModel required #id=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"usr\">Override Rate:</label>\n      <input name=\"overrideRate\" ngModel required #overrideRate=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"usr\">Advance Rate:</label>\n      <input name=\"advancedRate\" ngModel required #overrideRate=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"usr\">Earned Rate:</label>\n      <input name=\"earnedRate\" ngModel required #earnedRate=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"usr\">Default Password</label>\n      <input name=\"password\" ngModel required #password=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"usr\">Role</label>\n      <input name=\"role\" ngModel required #role=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n  </form>\n\n  </div>\n  \n</div>\n"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"resource == 'employee'\">\n  <add-employee></add-employee>\n</p>\n\n<p *ngIf=\"resource == 'sale'\">\n  <add-sale></add-sale>\n</p>\n"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Trigger the modal with a button -->\n  <!-- Modal -->\n  <div class=\"col-xs-4\">\n    \n  <h2>Add Rep</h2>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"usr\">Customer:</label>\n      <input name=\"customer\" ngModel required #customer=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"usr\">kw Total:</label>\n      <input name=\"kwTotal\" ngModel required #kwTotal=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"usr\">Date Sold:</label>\n      <input name=\"saleDate\" ngModel required #saleDate=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"usr\">Date To Be Paid</label>\n      <input name=\"payDate\" ngModel required #payDate=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"usr\">Field Marketer Pay</label>\n      <input name=\"fieldMarketerPayAmount\" ngModel required #fieldMarketerPayAmount=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"usr\">Job Expense Amount:</label>\n      <input name=\"jobExpense\" ngModel required #jobExpense=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"usr\">Employee Id:</label>\n      <input name=\"employeeId\" ngModel required #employeeId=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-default\">Login</button>\n  </form>\n\n  </div>\n  \n</div>\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let sale of sales\">\n    <div class=\"card col-xs-4\" style= \"background-color: #42c5f4;\" style=\"box-shadow: 10px 10px 5px #888888;\"\n    >\n        <div class=\"card-block\">\n            <h3 class=\"card-title\">{{sale.customer}}</h3>\n            <p class=\"card-text\">Job Expenses: -{{getTotalExpenses(sale)}}</p>\n            <p class=\"card-text\">Total kw: {{ sale.kwTotal }}</p>\n            <p class=\"card-text\">Paid out on: {{sale.payDate}}</p>\n            <p class=\"card-text\">Date sold: {{sale.saleDate}}</p>\n            <p class=\"card-text\">Total Commssion: {{getTotalCommission(sale)}}</p>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-employee works!\n</p>\n"

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-form works!\n</p>\n"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-sale works!\n</p>\n"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"sales\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <h1 class=\"page-header\">{{employee.fName}} {{employee.lName}}</h1> \n        </div>\n    </div>\n    <div class=\"row\"><p class=\"col-lg-12\">{{employee.title}}</p></div>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <img class=\"img-responsive\" src=\"../../../assets/{{employee.id}}.jpg\" alt=\"\">\n        </div>\n        <div class=\"col-md-4\">\n            <h3>\n                <b>Paid YTD:</b> ${{employee.startingYTD}}\n                \n            </h3>\n            <h3>\n                <b>Pipeline (not paid):</b> ${{getPendingCommissionTotal()}}\n            </h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <commissions [employee]=\"employee\"></commissions>\n    </div>\n</div>\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<p>\n  landing works!\n</p>\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-xs-5\">\n<div class=\"card\">\n    <h3 class=\"card-header\">Horizon Power</h3>\n    <div class=\"card-block\">\n        <h4 class=\"card-title\">Rep Login</h4>\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n            <div class=\"form-group\">\n                <label for=\"usr\">Name:</label>\n                <input name=\"username\" ngModel required #username=\"ngModel\" type=\"text\" class=\"form-control\" id=\"usr\" required>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"pwd\">Password:</label>\n                <input name=\"password\" ngModel required #password=\"ngModel\" type=\"password\" class=\"form-control\" id=\"pwd\" required>\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Login</button>\n        </form>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeesService = (function () {
    function EmployeesService(http) {
        this.http = http;
        this.employeeEndpoint = 'employee';
    }
    EmployeesService.prototype.getEmployees = function () {
        return this.http.get(this.employeeEndpoint)
            .then(this.onSuccess)
            .catch(this.onError);
    };
    EmployeesService.prototype.getEmployee = function (id) {
        return this.http.get(this.employeeEndpoint + "/" + id)
            .then(this.onSuccess)
            .catch(this.onError);
    };
    EmployeesService.prototype.onSuccess = function (res) {
        console.log(res);
        return res;
    };
    EmployeesService.prototype.onError = function (err) {
        return err;
    };
    EmployeesService.prototype.createEmployee = function (data) {
        return this.http.put('employee/' + data.id + '.json', data);
    };
    EmployeesService.prototype.createUser = function (data) {
        var user = {};
        user['username'] = data.id;
        user['password'] = data.password;
        return this.http.put('user/' + data.id + '.json', user);
    };
    EmployeesService.prototype.login = function (user) {
        return this.http.get('user/' + user.username)
            .then(function (fetchedUser) {
            if (fetchedUser['username'] != undefined) {
                if (user.password !== fetchedUser['password']) {
                    throw "bad password";
                }
                else {
                    return fetchedUser;
                }
            }
            else {
                throw "no User";
            }
        })
            .catch(function (e) { return e; });
    };
    return EmployeesService;
}());
EmployeesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HTTPService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HTTPService */]) === "function" && _a || Object])
], EmployeesService);

var _a;
//# sourceMappingURL=employee.service.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commissions_commission_service__ = __webpack_require__(158);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SalesService = (function () {
    function SalesService(http) {
        this.http = http;
        this.salesEndpoint = 'sales';
    }
    SalesService.prototype.getSales = function (id) {
        return this.http.get(this.salesEndpoint + '/' + id)
            .then(this.onSuccess)
            .catch(this.onError);
    };
    SalesService.prototype.createSale = function (sale) {
        var url = this.salesEndpoint.concat("/" + sale.employeeId);
        this.http.post(url, sale)
            .then(this.onSuccess)
            .catch(this.onError);
    };
    SalesService.prototype.onSuccess = function (res) {
        return __WEBPACK_IMPORTED_MODULE_2__commissions_commission_service__["a" /* commissionService */].formatSales(res);
    };
    SalesService.prototype.onError = function (err) {
        console.log(err);
    };
    return SalesService;
}());
SalesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HTTPService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HTTPService */]) === "function" && _a || Object])
], SalesService);

var _a;
//# sourceMappingURL=sales.service.js.map

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTPService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HTTPService = (function () {
    function HTTPService(http) {
        this.http = http;
        this.baseURL = "https://horizonpwr.firebaseio.com/";
    }
    HTTPService.prototype.get = function (url) {
        return this.http.get(this.baseURL.concat(url).concat('.json'))
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    HTTPService.prototype.post = function (url, data) {
        return this.http.post(this.baseURL.concat(url), data)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    HTTPService.prototype.put = function (url, data) {
        return this.http.put(this.baseURL.concat(url), data)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    HTTPService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HTTPService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return HTTPService;
}());
HTTPService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _a || Object])
], HTTPService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddFormComponent = (function () {
    function AddFormComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    AddFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this.route.params
            .map(function (params) {
            return params['resource'];
        }).subscribe(function (resource) { return _this.resource = resource; });
    };
    return AddFormComponent;
}());
AddFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-add-form',
        template: __webpack_require__(221)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AddFormComponent);

var _a, _b;
//# sourceMappingURL=add-form.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditFormComponent = (function () {
    function EditFormComponent() {
    }
    EditFormComponent.prototype.ngOnInit = function () {
    };
    return EditFormComponent;
}());
EditFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'edit-form',
        template: __webpack_require__(226)
    }),
    __metadata("design:paramtypes", [])
], EditFormComponent);

//# sourceMappingURL=edit-form.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_employee_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_sales_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeSummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeeSummaryComponent = (function () {
    function EmployeeSummaryComponent(employeesService, router, route, salesService) {
        this.employeesService = employeesService;
        this.router = router;
        this.route = route;
        this.salesService = salesService;
    }
    EmployeeSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this.route.params
            .map(function (params) {
            return params['id'];
        }).subscribe(function (id) {
            _this.getEmployee(id).then(function (res) {
                _this.employee = res;
                _this.salesService.getSales(_this.employee['id'])
                    .then(function (sales) { return _this.sales = sales; });
            });
        });
    };
    EmployeeSummaryComponent.prototype.getEmployee = function (id) {
        console.log(id);
        return this.employeesService.getEmployee(id);
    };
    EmployeeSummaryComponent.prototype.getPendingCommissionTotal = function () {
        var total = 0;
        var kwTotal = 0;
        var pendingSales = this.sales.filter(function (sale) {
            var now = new Date();
            var isPending = (new Date(sale.payDate) > now);
            return isPending;
        });
        pendingSales.forEach(function (sale) {
            kwTotal += sale.kwTotal;
        });
        return this.employee.earnedRate * kwTotal;
    };
    return EmployeeSummaryComponent;
}());
EmployeeSummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'employee-summary',
        template: __webpack_require__(228)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_employee_service__["a" /* EmployeesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_employee_service__["a" /* EmployeesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__models_sales_service__["a" /* SalesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_sales_service__["a" /* SalesService */]) === "function" && _d || Object])
], EmployeeSummaryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=employee-summary.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_employee_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */](f.value.username, f.value.password);
        this.service.login(user)
            .then(function (user) {
            if (user['role'] == 'admin') {
                _this.router.navigate(['/add', "employee"]);
            }
            else {
                _this.router.navigate(['/commissions', user.username]);
            }
        })
            .catch(function (e) { return console.log('err', e); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(231)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__models_employee_service__["a" /* EmployeesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_employee_service__["a" /* EmployeesService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ })

},[496]);
//# sourceMappingURL=main.bundle.js.map