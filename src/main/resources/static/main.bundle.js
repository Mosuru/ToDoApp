webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet> "

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_todo_component__ = __webpack_require__("./src/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todo_detail_todo_detail_component__ = __webpack_require__("./src/app/todo-detail/todo-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__todo_create_todo_create_component__ = __webpack_require__("./src/app/todo-create/todo-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__todo_edit_todo_edit_component__ = __webpack_require__("./src/app/todo-edit/todo-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    {
        path: 'todo',
        component: __WEBPACK_IMPORTED_MODULE_6__todo_todo_component__["a" /* TodoComponent */],
        data: { title: 'ToDo List' }
    },
    {
        path: 'todo-detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__todo_detail_todo_detail_component__["a" /* TodoDetailComponent */],
        data: { title: 'ToDo Details' }
    },
    {
        path: 'todo-create',
        component: __WEBPACK_IMPORTED_MODULE_8__todo_create_todo_create_component__["a" /* TodoCreateComponent */],
        data: { title: 'Create ToDo' }
    },
    {
        path: 'todo-edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__todo_edit_todo_edit_component__["a" /* TodoEditComponent */],
        data: { title: 'Edit ToDo' }
    },
    { path: '',
        redirectTo: '/todo',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__todo_todo_component__["a" /* TodoComponent */],
                __WEBPACK_IMPORTED_MODULE_7__todo_detail_todo_detail_component__["a" /* TodoDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__todo_create_todo_create_component__["a" /* TodoCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__todo_edit_todo_edit_component__["a" /* TodoEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/todo-create/todo-create.component.css":
/***/ (function(module, exports) {

module.exports = "   "

/***/ }),

/***/ "./src/app/todo-create/todo-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add ToDo</h1>\n  <a [routerLink]=\"['/todo']\">List</a>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form  #todoForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Task</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"todo.task\" name=\"task\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Details</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"todo.taskDetails\" name=\"taskDetails\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">priority</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"todo.priority\" name=\"priority\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">status</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"todo.status\" name=\"status\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\"  (click)=\"saveToDo(todo)\">Save</button>\n          <button mat-button (click)=\"cancel()\" class=\"btn\">Cancel</button>\n          <button mat-button (click)=\"cancel()\" class=\"btn\">List</button>\n        </div> \n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/todo-create/todo-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo__ = __webpack_require__("./src/app/todo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodoCreateComponent = /** @class */ (function () {
    function TodoCreateComponent(http, router, location) {
        this.http = http;
        this.router = router;
        this.location = location;
        this.todo = new __WEBPACK_IMPORTED_MODULE_4__todo__["a" /* Todo */]();
    }
    TodoCreateComponent.prototype.ngOnInit = function () {
    };
    TodoCreateComponent.prototype.saveToDo = function (todo) {
        var _this = this;
        console.log(JSON.stringify(todo.taskDetails));
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        this.http.post('/todos', JSON.stringify(todo), { headers: httpHeaders })
            .subscribe(function (res) {
            _this.router.navigate(['/todo']);
        }, function (err) {
            console.log(err);
        });
    };
    TodoCreateComponent.prototype.cancel = function () {
        this.location.back();
    };
    TodoCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-create',
            template: __webpack_require__("./src/app/todo-create/todo-create.component.html"),
            styles: [__webpack_require__("./src/app/todo-create/todo-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], TodoCreateComponent);
    return TodoCreateComponent;
}());



/***/ }),

/***/ "./src/app/todo-detail/todo-detail.component.css":
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/todo-detail/todo-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>TODO</h1>\n  <a [routerLink]=\"['/todo']\">List</a>\n  <dl class=\"list\">\n    <dt>Task</dt>\n    <dd>{{ todo.task }}</dd>\n    <dt>Details</dt>\n    <dd>{{ todo.taskDetails }}</dd>\n    <dt>priority</dt>\n    <dd>{{ todo.priority }}</dd>\n    <dt>Status</dt>\n    <dd>{{ todo.status }}</dd>\n  </dl>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <a [routerLink]=\"['/todo-edit', todo.id]\" class=\"btn btn-primary\">EDIT</a>\n      <button mat-button (click)=\"cancel()\" class=\"btn\">Back</button>\n      <button mat-button (click)=\"deleteToDo(todo.id)\" class=\"btn btn-warning\">Delete</button>\n    </div>\n  </div>\n</div> \n"

/***/ }),

/***/ "./src/app/todo-detail/todo-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoDetailComponent = /** @class */ (function () {
    function TodoDetailComponent(router, route, http, location) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.location = location;
    }
    TodoDetailComponent.prototype.ngOnInit = function () {
        this.getToDoDetail(this.route.snapshot.params['id']);
    };
    TodoDetailComponent.prototype.getToDoDetail = function (id) {
        var _this = this;
        this.http.get('/todos/' + id).subscribe(function (data) {
            _this.todo = data;
        });
    };
    TodoDetailComponent.prototype.deleteToDo = function (id) {
        var _this = this;
        this.http.delete('/todos/' + id)
            .subscribe(function (res) {
            _this.router.navigate(['/todo']);
        }, function (err) {
            console.log(err);
        });
    };
    TodoDetailComponent.prototype.cancel = function () {
        this.location.back();
    };
    TodoDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-detail',
            template: __webpack_require__("./src/app/todo-detail/todo-detail.component.html"),
            styles: [__webpack_require__("./src/app/todo-detail/todo-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], TodoDetailComponent);
    return TodoDetailComponent;
}());



/***/ }),

/***/ "./src/app/todo-edit/todo-edit.component.css":
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/todo-edit/todo-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit ToDo</h1>\n  <a [routerLink]=\"['/todo']\">List</a>\n  <div class=\"row\">\n    <div class=\"col-md-6\"> \n      <form (ngSubmit)=\"updateToDo(todo.id,todo)\" #todoForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Task</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"todo.task\" name=\"task\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Task Details</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"todo.taskDetails\" name=\"taskDetails\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">priority</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"todo.priority\" name=\"priority\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">status</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"todo.status\" name=\"status\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!todoForm.form.valid\">Update</button>\n          <button mat-button (click)=\"cancel()\" class=\"btn\">Cancel</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/todo-edit/todo-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoEditComponent = /** @class */ (function () {
    function TodoEditComponent(http, router, route, location) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.location = location;
    }
    TodoEditComponent.prototype.ngOnInit = function () {
        this.getToDo(this.route.snapshot.params['id']);
    };
    TodoEditComponent.prototype.getToDo = function (id) {
        var _this = this;
        this.http.get('/todos/' + id).subscribe(function (data) {
            _this.todo = data;
        });
    };
    TodoEditComponent.prototype.updateToDo = function (id, data) {
        var _this = this;
        console.log(data);
        this.http.put('/todos/' + id, data)
            .subscribe(function (res) {
            var id = res['id'];
            _this.router.navigate(['/todo-detail', id]);
        }, function (err) {
            console.log(err);
        });
    };
    TodoEditComponent.prototype.cancel = function () {
        this.location.back();
    };
    TodoEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-edit',
            template: __webpack_require__("./src/app/todo-edit/todo-edit.component.html"),
            styles: [__webpack_require__("./src/app/todo-edit/todo-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], TodoEditComponent);
    return TodoEditComponent;
}());



/***/ }),

/***/ "./src/app/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo() {
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/***/ (function(module, exports) {

module.exports = ".share-wallet-table {\r\n    width: 100%;\r\n    padding-right: 20px;\r\n    padding-left: 20px;\r\n    margin-bottom: 38px;\r\n     \r\n  }\r\n  .contact-heading > span\r\n  {\t \r\n              font-size: 20px;\r\n          }\r\n  .user-table >table th {\r\n     font-size:18px;\r\n      background-color:#fff;\r\n     }\r\n  /*******only to add alternate row color*************/\r\n  .user-table >table tbody tr:nth-child(odd)   \r\n             { \r\n             background-color:#eee; }\r\n  .user-table >table tbody tr:nth-child(even)  \r\n    { background-color:#fff; }\r\n  /*****************table style properties*****************************/\r\n  .user-table >table tbody tr\r\n             { \r\n             padding:5px 5px 5px 5px }\r\n    "

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <h1>ToDos\n    <a [routerLink]=\"['/todo-create']\" class=\"btn btn-primary\">\n      Add\n    </a>\n  </h1>\n  <br>\n  <table class=\"table table-bordered user-table\">\n    <thead>\n      <tr>\n        <th class=\"thead-light\">Task</th>\n        <th>Details</th>\n        <th>Priority<select (change)=\"changeHandler($event)\" class=\"form-control\">\n          <option value=\"All\">All</option>\n          <option value=\"High\">High</option>\n          <option value=\"Medium\">Medium</option>\n          <option value=\"Low\">Low</option>\n        </select></th>\n        <th>Status<select (change)=\"selectChangeHandler($event)\" class=\"form-control\">\n          <option value=\"All\">All</option>\n          <option value=\"Open\">Open</option>\n          <option value=\"In Progress\">In Progress</option>\n          <option value=\"Closed\">Closed</option>\n        </select></th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let todo of todos\">\n        <td>{{ todo.task }}</td>\n        <td>{{ todo.taskDetails }}</td>\n        <td>{{ todo.priority }} </td>\n        <td>{{ todo.status }} </td>\n        <td>\n          <a [routerLink]=\"['/todo-detail', todo.id]\" class=\"btn btn-primary\">View</a>\n          <a [routerLink]=\"['/todo-edit', todo.id]\" class=\"btn btn-primary\">Edit</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoComponent = /** @class */ (function () {
    function TodoComponent(http, router) {
        this.http = http;
        this.router = router;
        this.selectedStatus = '';
        this.selectedPriority = '';
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/todos').subscribe(function (data) {
            _this.todos = data;
        });
    };
    //event handler for the select element's change event
    TodoComponent.prototype.selectChangeHandler = function (event) {
        var _this = this;
        //update the ui
        this.selectedStatus = event.target.value;
        this.http.get('/todos/status/' + this.selectedStatus).subscribe(function (data) {
            _this.todos = data;
        });
    };
    //event handler for the select element's change event
    TodoComponent.prototype.changeHandler = function (event) {
        var _this = this;
        //update the ui
        this.selectedPriority = event.target.value;
        this.http.get('/todos/priority/' + this.selectedPriority).subscribe(function (data) {
            _this.todos = data;
        });
    };
    TodoComponent.prototype.deleteToDo = function (id) {
        var _this = this;
        this.http.delete('/todos/' + id)
            .subscribe(function (res) {
            _this.router.navigate(['/todo']);
        }, function (err) {
            console.log(err);
        });
    };
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo',
            template: __webpack_require__("./src/app/todo/todo.component.html"),
            styles: [__webpack_require__("./src/app/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map