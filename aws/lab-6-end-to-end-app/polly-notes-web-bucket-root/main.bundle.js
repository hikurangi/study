// Change the following 3 variable's value
var API_GATEWAY_INVOKE_URL = "https://your-api-url"
var COGNITO_POOL_ID = 'us-east-1-xxxxxxxxxxx'
var COGNITO_APP_CLIENT_ID = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

// DON'T CHANGE ANYTHING BEYOND THIS LINE
// --------------------------------------------------------------------------------------------------

webpackJsonp([1,4],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApigwService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 // debug


var ApigwService = (function () {
    function ApigwService(_http) {
        this._http = _http;
        this.endpoint = API_GATEWAY_INVOKE_URL + '/notes';
        console.log('APIGW Service Init...');
    }
    ApigwService.prototype._serverError = function (err) {
        console.log('sever error:', JSON.stringify(err)); // debug
        if (err.status === 0) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err.json().error || 'Session Expired! Click here to login again');
        }
        if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err.json().error || 'Backend Server Error');
        }
    };
    ApigwService.prototype.setUser = function (username) {
        this.username = username;
        localStorage.setItem("user", username);
    };
    ApigwService.prototype.getUser = function () {
        return this.username;
    };
    ApigwService.prototype.setToken = function (token) {
        this.token = token;
        localStorage.setItem("token", token);
    };
    ApigwService.prototype.getToken = function () {
        return this.token;
    };
    ApigwService.prototype.getNotes = function (auth) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', auth);
        return this._http.get(this.endpoint, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this._serverError);
    };
    ApigwService.prototype.postNotes = function (auth, newNote) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', auth);
        return this._http.post(this.endpoint, JSON.stringify(newNote), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this._serverError);
    };
    ApigwService.prototype.deleteNotes = function (auth, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', auth);
        return this._http.delete(this.endpoint + "/" + id, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this._serverError);
    };
    ApigwService.prototype.dictateNotes = function (auth, id, text) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', auth);
        return this._http.post(this.endpoint + "/" + id, JSON.stringify(text), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this._serverError);
    };
    ApigwService.prototype.searchNotes = function (auth, term) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', auth);
        return this._http
            .get(this.endpoint + ("/search?text=" + term), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this._serverError);
    };
    ApigwService.prototype.checkUrl = function (url) {
        return this._http.head(url)
            .map(function (res) { return res.json(); });
    };
    return ApigwService;
}());
ApigwService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ApigwService);

var _a;
//# sourceMappingURL=apigw.service.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CognitoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CognitoService = CognitoService_1 = (function () {
    function CognitoService() {
    }
    CognitoService.getUserPool = function () {
        return new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(CognitoService_1._POOL_DATA);
    };
    CognitoService.getCurrentUser = function () {
        return CognitoService_1.getUserPool().getCurrentUser();
    };
    CognitoService.getCognitoIdentity = function () {
        return AWS.config.credentials.identityId;
    };
    CognitoService.getAccessToken = function (callback) {
        if (callback == null) {
            throw ("callback in getAccessToken is null...returning");
        }
        CognitoService_1.getCurrentUser().getSession(function (err, session) {
            if (err) {
                console.log("Can't set the credentials:" + err);
                callback.callbackWithParam(null);
            }
            else {
                if (session.isValid()) {
                    callback.callbackWithParam(session.getAccessToken().getJwtToken());
                }
            }
        });
    };
    CognitoService.getIdToken = function (callback) {
        if (callback == null) {
            throw ("callback in getIdToken is null...returning");
        }
        CognitoService_1.getCurrentUser().getSession(function (err, session) {
            if (err) {
                console.log("Can't set the credentials:" + err);
                callback.callbackWithParam(null);
            }
            else {
                if (session.isValid()) {
                    callback.callbackWithParam(session.getIdToken().getJwtToken());
                }
                else {
                    console.log("Got the id token, but the session isn't valid");
                }
            }
        });
    };
    CognitoService.getRefreshToken = function (callback) {
        if (callback == null) {
            throw ("callback in getRefreshToken is null...returning");
        }
        CognitoService_1.getCurrentUser().getSession(function (err, session) {
            if (err) {
                console.log("Can't set the credentials:" + err);
                callback.callbackWithParam(null);
            }
            else {
                if (session.isValid()) {
                    callback.callbackWithParam(session.getRefreshToken());
                }
            }
        });
    };
    return CognitoService;
}());
//CognitoService._REGION = COGNITO_POOL_REGION;
CognitoService._USER_POOL_ID = COGNITO_POOL_ID;
CognitoService._CLIENT_ID = COGNITO_APP_CLIENT_ID;
CognitoService._POOL_DATA = {
    UserPoolId: CognitoService_1._USER_POOL_ID,
    ClientId: CognitoService_1._CLIENT_ID
};
CognitoService = CognitoService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CognitoService);

var UserLoginService = (function () {
    function UserLoginService() {
    }
    UserLoginService.authenticate = function (username, password, callback) {
        // Need to provide placeholder keys unless unauthorised user access is enabled for user pool
        AWSCognito.config.update({ accessKeyId: 'anything', secretAccessKey: 'anything' });
        var authenticationData = {
            Username: username,
            Password: password,
        };
        var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
        var userData = {
            Username: username,
            Pool: CognitoService.getUserPool()
        };
        console.log("Authenticating the user");
        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
        console.log(AWS.config);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                callback.cognitoCallback(null, result);
            },
            onFailure: function (err) {
                callback.cognitoCallback(err.message, null);
            },
        });
    };
    UserLoginService.logout = function () {
        console.log("Logging out");
        CognitoService.getCurrentUser().signOut();
    };
    UserLoginService.isAuthenticated = function (callback) {
        if (callback == null)
            throw ("Callback in isAuthenticated() cannot be null");
        var cognitoUser = CognitoService.getCurrentUser();
        if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
                if (err) {
                    console.log("Couldn't get the session: " + err, err.stack);
                    callback.isLoggedIn(err, false);
                }
                else {
                    console.log("Session is " + session.isValid());
                    callback.isLoggedIn(err, session.isValid());
                }
            });
        }
        else {
            callback.isLoggedIn("Can't retrieve the CurrentUser", false);
        }
    };
    return UserLoginService;
}());
UserLoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserLoginService);

var CognitoService_1;
//# sourceMappingURL=cognito.service.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(329),
        styles: [__webpack_require__(325)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cognito_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apigw_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(router, apigwService) {
        this.router = router;
        this.apigwService = apigwService;
        this.notes = [];
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.genders = [
            { value: 'male', display: 'Male' },
            { value: 'female', display: 'Female' }
        ];
        this.accents = [
            { value: 'american', display: 'American' },
            { value: 'australian', display: 'Australian' },
            { value: 'british', display: 'British' },
            { value: 'indian', display: 'Indian' },
            { value: 'welsh', display: 'Welsh' }
        ];
        this.voice = {
            gender: 'male',
            accent: 'australian'
        };
        __WEBPACK_IMPORTED_MODULE_2__cognito_service__["a" /* UserLoginService */].isAuthenticated(this);
        this.username = localStorage.getItem("user");
        this.token = localStorage.getItem("token");
        console.log("In HomeComponent Constructor");
    }
    HomeComponent.prototype.setMessage = function (msg) {
        this.modalMessage = msg;
    };
    HomeComponent.prototype.getMessage = function () {
        return this.modalMessage;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getNotes();
        if (localStorage.getItem("token") == null) {
            console.log("No ID Token, redirecting to login...");
            if (__WEBPACK_IMPORTED_MODULE_2__cognito_service__["b" /* CognitoService */].getCurrentUser().username != undefined) {
                __WEBPACK_IMPORTED_MODULE_2__cognito_service__["a" /* UserLoginService */].logout();
            }
            this.router.navigate(['/login']);
        }
        if (localStorage.getItem("user") == null) {
            console.log("Unrecognized User, redirecting to login...");
            if (__WEBPACK_IMPORTED_MODULE_2__cognito_service__["b" /* CognitoService */].getCurrentUser().username != undefined) {
                __WEBPACK_IMPORTED_MODULE_2__cognito_service__["a" /* UserLoginService */].logout();
            }
            this.router.navigate(['/login']);
        }
        this.toggleVoiceSettings = false;
    };
    HomeComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        if (!isLoggedIn) {
            this.router.navigate(['/login']);
        }
    };
    HomeComponent.prototype.onLogout = function () {
        __WEBPACK_IMPORTED_MODULE_2__cognito_service__["a" /* UserLoginService */].logout();
        this.router.navigate(['/login']);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        console.log("Logging out from Cognito User Pools");
    };
    HomeComponent.prototype.onHover = function (id, note) {
        this.noteId = id;
        this.note = note;
    };
    HomeComponent.prototype.getNotes = function () {
        var _this = this;
        this.busy = this.apigwService.getNotes(this.token)
            .subscribe(function (notes) {
            _this.notes = notes;
            console.log("Sending GET request to API Gateway");
        }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.createNote = function () {
        var _this = this;
        var nextId;
        if (typeof this.notes === 'undefined') {
            nextId = "00" + 1;
        }
        else if (this.notes.length <= 9) {
            nextId = this.notes.length;
            nextId++;
            nextId = "00" + nextId;
        }
        else if (this.notes.length >= 10) {
            nextId = this.notes.length;
            nextId++;
            nextId = "0" + nextId;
        }
        console.log(this.notes.length + " existing notes");
        console.log("New Note: " + nextId);
        var newNote = {
            noteId: nextId,
            note: this.note
        };
        this.apigwService.postNotes(this.token, newNote)
            .subscribe(function (note) {
            //_this.notes.push(note);
            _this.getNotes();
            console.log("Sending POST request to API Gateway");
        }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.updateNote = function () {
        var _this = this;
        var newNote = {
            noteId: this.noteId,
            note: this.note
        };
        this.apigwService.postNotes(this.token, newNote)
            .subscribe(function (note) {
            //_this.notes.push(note);
            _this.getNotes();
            console.log("Sending POST request to API Gateway");
        }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.dictateNote = function (id, note) {
        var _this = this;
        var polly = "";
        this.modal = true;
        this.modalMessage = null;
        this.invalid = false;
        switch (this.voice.accent) {
            case "american":
                if (this.voice.gender == "female") {
                    polly = "Joanna";
                }
                else {
                    polly = "Joey";
                }
                break;
            case "australian":
                if (this.voice.gender == "female") {
                    polly = "Nicole";
                }
                else {
                    polly = "Russell";
                }
                break;
            case "british":
                if (this.voice.gender == "female") {
                    polly = "Amy";
                }
                else {
                    polly = "Brian";
                }
                break;
            case "indian":
                if (this.voice.gender == "male") {
                    polly = "Raveena";
                    this.voice.gender = "female";
                    console.log("Indian male not available");
                    this.invalid = true;
                }
                else {
                    polly = "Raveena";
                }
                break;
            case "welsh":
                if (this.voice.gender == "female") {
                    polly = "Geraint";
                    this.voice.gender = "male";
                    console.log("Welsh female not available");
                    this.invalid = true;
                }
                else {
                    polly = "Geraint";
                }
                break;
            default:
                polly = "Russel";
        }
        var dicNote = {
            voice: polly
        };
        this.busy = this.apigwService.dictateNotes(this.token, id, dicNote)
            .subscribe(function (url) {
            console.log("Sending DICTATE request to API Gateway - Note " + id);
            console.log("Chosen Voice: " + polly);
            console.log(JSON.stringify(dicNote));
            var wavesurfer = WaveSurfer.create({
                container: '#waveform',
                waveColor: 'gray',
                hideScrollbar: true,
                progressColor: 'orange'
            });
            var checkUrl = url.toString();
            console.log(url);
            wavesurfer.unAll();
            wavesurfer.load(url);
            wavesurfer.on('ready', function () {
                wavesurfer.play();
            });
            wavesurfer.on('finish', function () {
                wavesurfer.destroy();
            });
            wavesurfer.on('error', function () {
                wavesurfer.destroy();
            });
        }, function (error) { return _this.errorMessage = error; });
        this.modalMessage = "Preparing text to speech assets... You can close this dialog once the playback is finished.";
    };
    HomeComponent.prototype.deleteNote = function (id) {
        var _this = this;
        this.apigwService.deleteNotes(this.token, id)
            .subscribe(function (note) {
            _this.notes.splice(id);
            _this.getNotes();
            console.log("Sending DELETE request to API Gateway");
        }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.searchNotes = function (term) {
        var _this = this;
        this.searchTerms.next(term);
        if (term) {
            this.apigwService.searchNotes(this.token, term)
                .subscribe(function (notes) {
                _this.notes = notes;
                if (typeof _this.notes !== 'undefined' && _this.notes.length > 0) {
                    _this.panel = false;
                }
                else {
                    _this.panel = true;
                }
                ;
                if (!term || typeof _this.notes === 'undefined') {
                    _this.getNotes();
                    _this.panel = false;
                }
                ;
                console.log("Sending SEARCH request to API Gateway");
            }, function (error) { return _this.errorMessage = error; });
        } else {
            _this.getNotes();
            _this.panel = false;
        }
    };
    HomeComponent.prototype.closeModal = function () {
        this.modal = false;
    };
    HomeComponent.prototype.voiceSettings = function () {
        if (this.toggleVoiceSettings == true) {
            this.toggleVoiceSettings = false;
        }
        else {
            this.toggleVoiceSettings = true;
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(330),
        styles: [__webpack_require__(326)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__apigw_service__["a" /* ApigwService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__apigw_service__["a" /* ApigwService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apigw_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cognito_service__ = __webpack_require__(119);
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
    function LoginComponent(configs, router, apigwService) {
        this.configs = configs;
        this.router = router;
        this.apigwService = apigwService;
        console.log("In LoginComponent constructor");
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorMessage = null;
        console.log("Checking if the user is already authenticated. If so, then redirect to home.");
        __WEBPACK_IMPORTED_MODULE_3__cognito_service__["a" /* UserLoginService */].isAuthenticated(this);
    };
    LoginComponent.prototype.onLogin = function () {
        if (this.username == null || this.password == null) {
            this.errorMessage = "All fields are required";
            return;
        }
        this.errorMessage = null;
        __WEBPACK_IMPORTED_MODULE_3__cognito_service__["a" /* UserLoginService */].authenticate(this.username, this.password, this);
        console.log("Sending authentication request to Cognito User Pools");
        this.authenticating = "Validating Credentials";
    };
    LoginComponent.prototype.cognitoCallback = function (message, result) {
        if (message != null) {
            this.authenticating = null;
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
        }
        else {
            console.log("Success! Logged in as " + __WEBPACK_IMPORTED_MODULE_3__cognito_service__["b" /* CognitoService */].getCurrentUser().username);
            this.apigwService.setUser(this.username);
            this.apigwService.setToken(result.idToken.jwtToken);
            this.router.navigate(['/home']);
        }
    };
    LoginComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        if (localStorage.getItem("token") != null && localStorage.getItem("user") != null) {
            console.log("Previous session detected from user " + localStorage.getItem("user") + ", redirecting to home...");
            isLoggedIn = true;
        }
        else {
            isLoggedIn = false;
        }
        if (isLoggedIn) {
            this.router.navigate(['/home']);
            console.log("isLoggedIn!");
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(331),
        styles: [__webpack_require__(327)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__cognito_service__["b" /* CognitoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cognito_service__["b" /* CognitoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__apigw_service__["a" /* ApigwService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__apigw_service__["a" /* ApigwService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 308;


/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(317);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(290);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],   
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routes.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_busy__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_busy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes_module__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cognito_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__apigw_service__ = __webpack_require__(118);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routes_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_busy__["BusyModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__cognito_service__["a" /* UserLoginService */],
            __WEBPACK_IMPORTED_MODULE_11__cognito_service__["b" /* CognitoService */],
            __WEBPACK_IMPORTED_MODULE_12__apigw_service__["a" /* ApigwService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(289);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(316);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.projectName = 'Polly Notes';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(332),
        styles: [__webpack_require__(328)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(72)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(72)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(72)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(72)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>  \n"

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n    <div class=\"content\">\n        <span>Hello </span>{{username}}<span>, you have successfully logged in!! Here are your notes to read or listen with different voices and accents:</span>\n        <br />\n        <br />\n  <div *ngIf=\"errorMessage!=null && !modal\" class=\"alert alert-danger\" (click)=\"onLogout($event)\">\n      {{errorMessage}}\n  </div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <form>\n            <div class=\"form-group\">\n                <input #searchBox type=\"text\" class=\"form-control\" placeholder=\"Search Notes...\" (keyup)=\"searchNotes(searchBox.value)\">    \n            </div>    \n        </form>    \n    </div>    \n</div>\n<div *ngIf=\"hide\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\" *ngFor=\"let findNote of findNotes\">\n          {{note.note}}\n      </div>\n    </div>\n</div>\n<div *ngIf=\"panel\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n          Sorry, couldn't find any note related to your search (Please be mindful the search is case sensitive). <br /><br />\n          If you can't find a note, use the form bellow to create a new one!\n      </div>\n    </div>\n</div>\n  <div class=\"panel\">\n   <table class=\"table table-sm table-inverse table-hover\" [ngBusy]=\"{busy: busy, message: 'Retrieving Notes...',backdrop: false, delay: 200, minDuration: 600}\">\n        <thead>\n          <tr class=\"active\">\n            <th class=\"col-md-1\"><h5><strong><span class=\"glyphicon glyphicon-list\" aria-hidden=\"true\"></span></strong></h5></th>\n            <th class=\"col-md-1\"><h5><strong>#</strong></h5></th>\n            <th class=\"col-md-10\"><h5><strong>Note</strong></h5></th>\n            <th class=\"col-md-1\"></th>\n            <th class=\"col-md-1\"></th>\n          </tr>\n        </thead>\n        <tbody>\n            <tr (click)=\"onHover(note.noteId,note.note)\" *ngFor=\"let note of notes\">\n                <td class=\"col-md-1\"><span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></span></td>\n                <td class=\"col-md-1\">{{note.noteId}}</td>\n                <td class=\"col-md-10\">{{note.note}}</td>\n                <td class=\"col-md-1\">\n                    <button (click)=\"dictateNote(note.noteId,note.note)\" id=\"dictateSubmit\" type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\".bs-example-modal-lg\">\n                      <span class=\"glyphicon glyphicon-volume-up\" aria-hidden=\"true\"></span>\n                    </button>\n                </td>\n                <td class=\"col-md-1\">\n                    <button (click)=\"deleteNote(note.noteId)\" id=\"signoutSubmit\" type=\"button\" class=\"btn btn-danger\">\n                      <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n                    </button>\n                </td>\n            </tr>\n            <tr>\n            <td colspan=\"5\">\n              <div class=\"td-footer\">\n              <ul (click)=\"voiceSettings()\" id=\"voiceOptions\" type=\"button\" class=\"btn btn-default dropdown-toggle\" >\n                <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span> Voice Options <span class=\"caret\"></span>\n              </ul>\n              <br />\n              <div *ngIf=\"toggleVoiceSettings\">\n                  <ul aria-labelledby=\"voiceOptions\">\n                    <label><h5><strong> Gender: </strong></h5></label>\n                    <div class=\"btn-group btn-group-xs\" *ngFor=\"let gender of genders\" >\n                        <label>\n                        <input type=\"radio\" name=\"gender\" [(ngModel)]=\"voice.gender\" \n                        [value]=\"gender.value\">\n                        {{gender.display}}\n                        </label>\n                    </div>\n                    <br />\n                    <label><h5><strong> Accent: </strong></h5></label>\n                    <div class=\"btn-group btn-group-xs\" *ngFor=\"let accent of accents\">\n                        <label>\n                        <input type=\"radio\" name=\"accent\" [(ngModel)]=\"voice.accent\" \n                        [value]=\"accent.value\">\n                        {{accent.display}}\n                        </label>\n                    </div>\n                  </ul>\n                \n                </div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n        </table>\n        <!-- Modal -->\n        <div class=\"modal fade bs-example-modal-lg\" tabindex=\"-1\" role=\"dialog\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal($event)\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\">Powered by Amazon Polly</h4>\n              </div>\n              <div class=\"modal-body\">\n                <div *ngIf=\"modalMessage!=null\">\n                  {{modalMessage}}\n                </div>\n                <br />\n                <div *ngIf=\"errorMessage!=null && modal==true\" class=\"alert alert-danger\" data-dismiss=\"modal\" (click)=\"onLogout($event)\">\n                  {{errorMessage}}\n                </div>\n                <div *ngIf=\"invalid==true\" class=\"alert alert-info\">\n                  Sorry, there is no voice available for this language with this gender. Playback was switched to the alternate gender with the same language, feel free to try another option.\n                </div>\n                <div id=\"waveform\"></div>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"closeModal($event)\">Close</button>\n              </div>\n            </div><!-- /.modal-content -->\n          </div><!-- /.modal-dialog -->\n        </div><!-- /.modal -->\n    </div>\n    <hr>\n          <div class=\"footer\">\n            <span>Powered by \n              <a href=\"https://aws.amazon.com/dynamodb/\" target=\"_blank\"><img title=\"Amazon DynamoDB\" src=\"../../assets/img/ddb.png\" width=\"30\" height=\"30\"></a>\n            </span>\n          </div>\n\n        <br />\n        <br />\n        <br />\n        <form>\n\n        <div class=\"form-group row\">\n          <label for=\"note\" class=\"col-sm-2 col-form-label\">Note: </label>\n          <div class=\"col-sm-10\">\n            <textarea class=\"form-control\" id=\"note\" placeholder=\"Enter you text here or select a note above to update...\" [(ngModel)]=\"note\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n          </div>\n        </div>\n        <br />\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-2 col-sm-10\">\n            <button (click)=\"createNote()\" id=\"addNotesSubmit\" type=\"submit\" class=\"btn btn-primary\">\n              <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>  Add  \n            </button>\n            <button (click)=\"updateNote()\" id=\"addNotesSubmit\" type=\"submit\" class=\"btn btn-primary\">\n              <span class=\"glyphicon glyphicon-check\" aria-hidden=\"true\"></span>  Update  \n            </button>\n            <button (click)=\"onLogout($event)\" id=\"signoutSubmit\" type=\"submit\" class=\"btn btn-primary\">\n              <span class=\"glyphicon glyphicon-log-out\" aria-hidden=\"true\"></span>  Logout\n            </button>\n          </div>\n        </div> \n        </form>\n          <hr>\n          <div class=\"footer\">\n            <span>Powered by \n              <a href=\"https://aws.amazon.com/api-gateway/\" target=\"_blank\"><img title=\"Amazon API Gateway\" src=\"../../assets/img/apigw.png\" width=\"30\" height=\"30\"></a>\n              <a href=\"https://aws.amazon.com/lambda/\" target=\"_blank\"><img title=\"AWS Lambda\" src=\"../../assets/img/lambda.png\" width=\"30\" height=\"30\"></a>\n            </span>\n          </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\n  <div class=\"form-group\">\n    <label class=\"control-label\" for=\"signupEmail\">User Name:</label>\n    <input id=\"username\" maxlength=\"100\" class=\"form-control\" [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone: true}\">\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"control-label\" for=\"signupPassword\">Password:</label>\n    <input id=\"signupPassword\" required type=\"password\" maxlength=\"25\" class=\"form-control\"\n           length=\"40\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\">\n  </div>\n  <div class=\"form-group\">\n    <button (click)=\"onLogin($event)\" id=\"signupSubmit\" type=\"submit\" class=\"btn btn-primary btn-block\">\n      <span class=\"glyphicon glyphicon-log-in\" aria-hidden=\"true\"></span>  Login\n    </button>\n  </div>\n  <div *ngIf=\"authenticating!=null\">\n    <div id=\"authmsg\" class=\"pulsate\" ><small>{{authenticating}}</small></div>\n    <div class=\"spinner\">\n      <div class=\"double-bounce1\"><img src=\"../../assets/img/logo.png\" width=\"40\" height=\"40\"></div>\n      <div class=\"double-bounce2\"><img src=\"../../assets/img/logo.png\" width=\"40\" height=\"40\"></div>\n    </div>\n  </div>\n  <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\">\n    {{errorMessage}}\n  </div>\n  <hr>\n  <div class=\"footer\">\n    <span>Powered by <a href=\"https://aws.amazon.com/cognito/\" target=\"_blank\"><img title=\"Amazon Cognito User Pools\" src=\"../../assets/img/cognito.png\" width=\"30\" height=\"30\"></a></span>\n  </div>\n</form>\n\n "

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default\">\n        <div class=\"navbar-header brand\">\n          <h2> \n            <span class=\"navbar-brand glyphicon glyphicon-tasks\"></span>\n            <a class=\"navbar-brand\" href=\"#\"><strong> {{projectName}} </strong></a>\n          </h2>\n        </div>\n        <p class=\"navbar-text navbar-right label label-primary\">&#10070; CUP &raquo; APIGW &raquo; Lambda &raquo; DDB with AngularJS &#10070;</p>\n</nav>\n\n"

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(309);


/***/ })

},[370]);
//# sourceMappingURL=main.bundle.js.map