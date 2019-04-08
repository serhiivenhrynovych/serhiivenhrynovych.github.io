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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div id=\"logo\" class=\"menuUp\">\n    <div class=\"logo-display\">\n      <img class=\"header-logo-img\" src=\"assets/photo/logo.png\" style=\"width: 157px;height: 80px;\">\n    </div>\n    <div id=\"navToggle\"><a href=\"#\" (click)=\"showMenu()\">Меню</a></div>\n  </div>\n  <nav [ngClass]=\"{'display-menu': displayMenu}\" [ngClass]=\"{'none-menu': !displayMenu}\">\n    <ul>\n      <li><a href=\"#main\">Про нас</a></li>\n      <li><a href=\"#service\">Послуги</a></li>\n      <li><a href=\"#catalog\">Каталог</a>\n      <li><a href=\"#contacts\">Контакти</a></li>\n    </ul>\n  </nav>\n</header>\n\n<app-slider></app-slider>\n<app-service></app-service>\n<app-drones-catalog></app-drones-catalog>\n<app-catalog></app-catalog>\n<app-footer></app-footer>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*navbar*/\nheader {\n  background-color: white;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  z-index: 100; }\nheader > div#logo {\n  line-height: 80px;\n  position: relative; }\nheader > .menuDown {\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15); }\nheader > .menuUp {\n  box-shadow: none; }\nheader > div#logo > h1 {\n  color: white;\n  font-weight: 300;\n  text-transform: lowercase; }\nheader > div#logo > div#navToggle {\n  background-color: lightslategrey;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: 300ms all ease; }\nheader > div#logo > div#navToggle:hover {\n  opacity: 0.9; }\nheader > div#logo > div#navToggle > a {\n  color: rgba(255, 255, 255, 0.85);\n  display: block;\n  font-size: 0.85em;\n  font-weight: 600;\n  padding: 0 1.5rem;\n  text-decoration: none;\n  transition: 300ms all ease; }\nheader > div#logo > div#navToggle:hover > a {\n  color: white; }\nheader > nav {\n  background-color: white;\n  display: none;\n  flex: 1;\n  -webkit-transform: 300ms all ease;\n          transform: 300ms all ease; }\nheader nav > ul {\n  list-style-type: none; }\nheader nav > ul > li {\n  border-bottom: 1px dotted rgba(0, 0, 0, 0.1);\n  position: relative; }\nheader nav > ul > li:last-of-type {\n  border-bottom: none; }\nheader nav > ul > li > a {\n  display: block;\n  color: rgba(0, 0, 0, 0.65);\n  padding: 1.5rem 0;\n  text-decoration: none;\n  transition: 250ms all ease; }\nheader nav > ul > li > a span.toggle {\n  background-color: rgba(0, 0, 0, 0.05);\n  border-radius: 3rem;\n  color: rgba(0, 0, 0, 0.25);\n  font-size: 0.75em;\n  padding: 2px 8px;\n  text-transform: lowercase; }\nheader nav > ul > li > a span.caret {\n  display: none; }\nheader > nav > ul > li:hover > a {\n  color: #8cc1c1; }\nheader > nav > ul > li > nav {\n  background-color: #333333;\n  border-radius: 1.5em;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);\n  display: none;\n  overflow: hidden;\n  position: absolute;\n  right: 5%;\n  width: 80%;\n  z-index: 100; }\nheader > nav > ul > li > nav > ul > li > a {\n  color: rgba(255, 255, 255, 0.85);\n  transition: 300ms all ease; }\nheader > nav > ul > li > nav > ul > li:hover > a {\n  background-color: rgba(0, 0, 0, 0.6);\n  color: white; }\n.logo-display {\n  height: 80px;\n  /*width: 100%;*/ }\n/* Medium screens */\n@media all and (min-width: 815px) {\n  header > div#logo > div#navToggle {\n    display: none; }\n  header {\n    background-color: white;\n    flex-direction: row;\n    line-height: 80px;\n    padding: 0 3rem;\n    text-align: left;\n    width: 100%; }\n  header > div#logo {\n    background-color: transparent;\n    line-height: 80px; }\n  header > div#logo > h1 {\n    color: #8cc1c1; }\n  header > nav {\n    background-color: transparent;\n    display: block; }\n  header > nav > ul {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-end; }\n  header nav > ul > li {\n    border-bottom: none; }\n  header nav > ul > li > a {\n    padding: 0 1.25rem; }\n  header nav > ul > li > a span.toggle {\n    display: none; }\n  header nav > ul > li > a span.caret {\n    border-bottom: 4px solid transparent;\n    border-top: 4px solid rgba(0, 0, 0, 0.65);\n    border-right: 4px solid transparent;\n    border-left: 4px solid transparent;\n    border-radius: 1px;\n    content: \"\";\n    display: inline-block;\n    height: 0;\n    margin: 0 0 0 .25rem;\n    transition: 250ms all ease;\n    width: 0;\n    vertical-align: middle; }\n  header nav > ul > li:hover > a span.caret {\n    border-top-color: #8cc1c1;\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg); }\n  header > nav > ul > li:hover > nav {\n    background-color: #333333;\n    border-radius: .25em;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);\n    display: block;\n    line-height: 3em;\n    right: -50%;\n    width: 196px; } }\n.display-menu {\n  display: block !important; }\n/*navbar finished*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmhpaS9Eb2N1bWVudHMvUHJvamVjdHMvZHJvbml4L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQUE7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qiw0Q0FBMkM7RUFDM0MsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0FBR2Q7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSx5Q0FBd0MsRUFBQTtBQUcxQztFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5QkFBeUIsRUFBQTtBQUczQjtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07RUFDTiwwQkFBMEIsRUFBQTtBQUc1QjtFQUNFLFlBQVksRUFBQTtBQUdkO0VBQ0UsZ0NBQStCO0VBQy9CLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsMEJBQTBCLEVBQUE7QUFHNUI7RUFDRSxZQUE2QixFQUFBO0FBRy9CO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixPQUFPO0VBQ1AsaUNBQXlCO1VBQXpCLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSw0Q0FBMkM7RUFDM0Msa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLGNBQWM7RUFDZCwwQkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQiwwQkFBMEIsRUFBQTtBQUc1QjtFQUNFLHFDQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsMEJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxhQUFhLEVBQUE7QUFHZjtFQUNFLGNBQXlCLEVBQUE7QUFHM0I7RUFDRSx5QkFBaUM7RUFDakMsb0JBQW9CO0VBQ3BCLHdDQUF1QztFQUN2QyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVksRUFBQTtBQUdkO0VBQ0UsZ0NBQStCO0VBQy9CLDBCQUEwQixFQUFBO0FBRzVCO0VBQ0Usb0NBQW1DO0VBQ25DLFlBQTZCLEVBQUE7QUFHL0I7RUFDRSxZQUFZO0VBQ1osZUFBQSxFQUFnQjtBQUdsQixtQkFBQTtBQUNBO0VBQ0U7SUFDRSxhQUFhLEVBQUE7RUFPZjtJQUNFLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFFZixnQkFBZ0I7SUFDaEIsV0FBVyxFQUFBO0VBR2I7SUFDRSw2QkFBNkI7SUFDN0IsaUJBQWlCLEVBQUE7RUFHbkI7SUFDRSxjQUF5QixFQUFBO0VBRzNCO0lBQ0UsNkJBQTZCO0lBQzdCLGNBQWMsRUFBQTtFQUdoQjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCLEVBQUE7RUFHM0I7SUFDRSxtQkFBbUIsRUFBQTtFQUdyQjtJQUNFLGtCQUFrQixFQUFBO0VBR3BCO0lBQ0UsYUFBYSxFQUFBO0VBR2Y7SUFDRSxvQ0FBb0M7SUFDcEMseUNBQXdDO0lBQ3hDLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsU0FBUztJQUNULG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsUUFBUTtJQUNSLHNCQUFzQixFQUFBO0VBR3hCO0lBQ0UseUJBQW9DO0lBQ3BDLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQTtFQUczQjtJQUNFLHlCQUFpQztJQUNqQyxvQkFBb0I7SUFDcEIsd0NBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVksRUFBQSxFQUNiO0FBSUg7RUFDRSx5QkFBeUIsRUFBQTtBQUczQixrQkFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qbmF2YmFyKi9cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTAwO1xufVxuXG5oZWFkZXIgPiBkaXYjbG9nbyB7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmhlYWRlciA+IC5tZW51RG93biB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIC4xNSk7XG59XG5cbmhlYWRlciA+IC5tZW51VXAge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5oZWFkZXIgPiBkaXYjbG9nbyA+IGgxIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuXG5oZWFkZXIgPiBkaXYjbG9nbyA+IGRpdiNuYXZUb2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBhbGwgZWFzZTtcbn1cblxuaGVhZGVyID4gZGl2I2xvZ28gPiBkaXYjbmF2VG9nZ2xlOmhvdmVyIHtcbiAgb3BhY2l0eTogMC45O1xufVxuXG5oZWFkZXIgPiBkaXYjbG9nbyA+IGRpdiNuYXZUb2dnbGUgPiBhIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjg1KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBhbGwgZWFzZTtcbn1cblxuaGVhZGVyID4gZGl2I2xvZ28gPiBkaXYjbmF2VG9nZ2xlOmhvdmVyID4gYSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xufVxuXG5oZWFkZXIgPiBuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgZmxleDogMTtcbiAgdHJhbnNmb3JtOiAzMDBtcyBhbGwgZWFzZTtcbn1cblxuaGVhZGVyIG5hdiA+IHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5oZWFkZXIgbmF2ID4gdWwgPiBsaSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgcmdiYSgwLCAwLCAwLCAuMSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaGVhZGVyIG5hdiA+IHVsID4gbGk6bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuaGVhZGVyIG5hdiA+IHVsID4gbGkgPiBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42NSk7XG4gIHBhZGRpbmc6IDEuNXJlbSAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IDI1MG1zIGFsbCBlYXNlO1xufVxuXG5oZWFkZXIgbmF2ID4gdWwgPiBsaSA+IGEgc3Bhbi50b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBwYWRkaW5nOiAycHggOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuXG5oZWFkZXIgbmF2ID4gdWwgPiBsaSA+IGEgc3Bhbi5jYXJldCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmhlYWRlciA+IG5hdiA+IHVsID4gbGk6aG92ZXIgPiBhIHtcbiAgY29sb3I6IHJnYigxNDAsIDE5MywgMTkzKTtcbn1cblxuaGVhZGVyID4gbmF2ID4gdWwgPiBsaSA+IG5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcbiAgYm9yZGVyLXJhZGl1czogMS41ZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIC42KTtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNSU7XG4gIHdpZHRoOiA4MCU7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuaGVhZGVyID4gbmF2ID4gdWwgPiBsaSA+IG5hdiA+IHVsID4gbGkgPiBhIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjg1KTtcbiAgdHJhbnNpdGlvbjogMzAwbXMgYWxsIGVhc2U7XG59XG5cbmhlYWRlciA+IG5hdiA+IHVsID4gbGkgPiBuYXYgPiB1bCA+IGxpOmhvdmVyID4gYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbn1cblxuLmxvZ28tZGlzcGxheSB7XG4gIGhlaWdodDogODBweDtcbiAgLyp3aWR0aDogMTAwJTsqL1xufVxuXG4vKiBNZWRpdW0gc2NyZWVucyAqL1xuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogODE1cHgpIHtcbiAgaGVhZGVyID4gZGl2I2xvZ28gPiBkaXYjbmF2VG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmxvZ28tZGlzcGxheSB7XG5cbiAgfVxuXG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICBwYWRkaW5nOiAwIDNyZW07XG4gICAgLy9wb3NpdGlvbjogZml4ZWQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGhlYWRlciA+IGRpdiNsb2dvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBsaW5lLWhlaWdodDogODBweDtcbiAgfVxuXG4gIGhlYWRlciA+IGRpdiNsb2dvID4gaDEge1xuICAgIGNvbG9yOiByZ2IoMTQwLCAxOTMsIDE5Myk7XG4gIH1cblxuICBoZWFkZXIgPiBuYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgaGVhZGVyID4gbmF2ID4gdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5cbiAgaGVhZGVyIG5hdiA+IHVsID4gbGkge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cblxuICBoZWFkZXIgbmF2ID4gdWwgPiBsaSA+IGEge1xuICAgIHBhZGRpbmc6IDAgMS4yNXJlbTtcbiAgfVxuXG4gIGhlYWRlciBuYXYgPiB1bCA+IGxpID4gYSBzcGFuLnRvZ2dsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGhlYWRlciBuYXYgPiB1bCA+IGxpID4gYSBzcGFuLmNhcmV0IHtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjY1KTtcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDA7XG4gICAgbWFyZ2luOiAwIDAgMCAuMjVyZW07XG4gICAgdHJhbnNpdGlvbjogMjUwbXMgYWxsIGVhc2U7XG4gICAgd2lkdGg6IDA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gIGhlYWRlciBuYXYgPiB1bCA+IGxpOmhvdmVyID4gYSBzcGFuLmNhcmV0IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiByZ2IoMTQwLCAxOTMsIDE5Myk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgfVxuXG4gIGhlYWRlciA+IG5hdiA+IHVsID4gbGk6aG92ZXIgPiBuYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAuNik7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDNlbTtcbiAgICByaWdodDogLTUwJTtcbiAgICB3aWR0aDogMTk2cHg7XG4gIH1cbn1cblxuXG4uZGlzcGxheS1tZW51IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLypuYXZiYXIgZmluaXNoZWQqL1xuIl19 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'smachna-hata';
        this.displayMenu = false;
    }
    AppComponent.prototype.showMenu = function () {
        this.displayMenu = this.displayMenu === false;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-hm-carousel */ "./node_modules/ngx-hm-carousel/fesm5/ngx-hm-carousel.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./catalog/catalog.component */ "./src/app/catalog/catalog.component.ts");
/* harmony import */ var _dron_view_modal_dron_view_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dron-view-modal/dron-view-modal.component */ "./src/app/dron-view-modal/dron-view-modal.component.ts");
/* harmony import */ var _detail_view_modal_detail_view_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./detail-view-modal/detail-view-modal.component */ "./src/app/detail-view-modal/detail-view-modal.component.ts");
/* harmony import */ var _drones_catalog_drones_catalog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./drones-catalog/drones-catalog.component */ "./src/app/drones-catalog/drones-catalog.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _service_service_component__WEBPACK_IMPORTED_MODULE_13__["ServiceComponent"],
                _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_14__["CatalogComponent"],
                _dron_view_modal_dron_view_modal_component__WEBPACK_IMPORTED_MODULE_15__["DronViewModalComponent"],
                _detail_view_modal_detail_view_modal_component__WEBPACK_IMPORTED_MODULE_16__["DetailViewModalComponent"],
                _drones_catalog_drones_catalog_component__WEBPACK_IMPORTED_MODULE_17__["DronesCatalogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_6__["NgxHmCarouselModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["NoopAnimationsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDJ5WxmMRuCDFQVuCXGWvWnexnNAzyWb78'
                }),
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"],
                _dron_view_modal_dron_view_modal_component__WEBPACK_IMPORTED_MODULE_15__["DronViewModalComponent"],
                _detail_view_modal_detail_view_modal_component__WEBPACK_IMPORTED_MODULE_16__["DetailViewModalComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/catalog/catalog.component.html":
/*!************************************************!*\
  !*** ./src/app/catalog/catalog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"catalog-wrapper\" id=\"catalog\">\n  <div class=\"catalog-title\">\n    Каталог\n  </div>\n  <div class=\"catalog-buttons\">\n    <div class=\"catalog-button align-right\" [ngClass]=\"{'catalog-active' : isDronsActive}\" (click)=\"dronsActive()\">\n      Дрони\n    </div>\n    <div class=\"catalog-button align-left\" [ngClass]=\"{'catalog-active' : !isDronsActive}\" (click)=\"detailsActive()\">\n      Запчастини до дронів\n    </div>\n  </div>\n  <div class=\"filter-wrapper\">\n    <div class=\"filter-left\">\n      <div class=\"filter-name\">\n        <i style=\"vertical-align: text-bottom\" class=\"material-icons\">\n          filter_list\n        </i>\n        Фільтр\n      </div>\n      <form [formGroup]=\"dronForm\" class=\"filter-brands\" *ngIf=\"isDronsActive\">\n        <select formControlName=\"dronControl\" class=\"brand-select\">\n          <option [value]=\"brand\" *ngFor=\"let brand of brands\">{{brand}}</option>\n        </select>\n      </form>\n\n      <form [formGroup]=\"detailForm\" class=\"filter-brands\" *ngIf=\"!isDronsActive\">\n        <select formControlName=\"detailControl\" class=\"brand-select\">\n          <option [value]=\"detail\" *ngFor=\"let detail of details\">{{detail}}</option>\n        </select>\n      </form>\n    </div>\n\n    <div class=\"filter-sorting\">\n      <div class=\"sorting-title\">\n        Сортувати за\n      </div>\n      <button mat-button class=\"sorting-button sorting-button-left\" (click)=\"sortByName()\" [ngClass]=\"{'selected-item': sortedByName === true || sortedByName === false}\">\n        Назвою\n        <img src=\"assets/icons/sort-active.svg\" alt=\"\" *ngIf=\"sortedByName === true\" style=\"transform: rotate(180deg)\">\n        <img src=\"assets/icons/sort-active.svg\" alt=\"\" *ngIf=\"sortedByName === false\">\n        <img src=\"assets/icons/sort-unactive.svg\" alt=\"\" *ngIf=\"sortedByName !== true && sortedByName !== false\">\n      </button>\n      <button mat-button class=\"sorting-button sorting-button-right\" (click)=\"sortByPrice()\" [ngClass]=\"{'selected-item': sortedByPrice === true || sortedByPrice === false}\">\n        Ціною\n        <img src=\"assets/icons/sort-active.svg\" alt=\"\" *ngIf=\"sortedByPrice === true\" style=\"transform: rotate(180deg)\">\n        <img src=\"assets/icons/sort-active.svg\" alt=\"\" *ngIf=\"sortedByPrice === false\">\n        <img src=\"assets/icons/sort-unactive.svg\" alt=\"\" *ngIf=\"sortedByPrice !== true && sortedByPrice !== false\">\n      </button>\n    </div>\n  </div>\n\n  <div class=\"drons-wrapper\">\n    <div *ngFor=\"let elem of contentToShow; index as i\">\n      <div class=\"drone-info\" [ngClass]=\"{'catalog-element': i > 7 && !fullCatalog}\" (click)=\"isDronsActive ? openViewDroneModal(elem) : openViewDetailModal(elem)\">\n        <div class=\"gallery\">\n          <a rel=\"simplebox\" target=\"_blank\">\n            <img src=\"{{elem.minImg}}\">\n          </a>\n        </div>\n        <div class=\"drone-name\">\n          {{elem.name}}\n        </div>\n        <div class=\"drone-price-number\">\n          {{elem.price}} грн\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"show-more-button-wrapper\">\n    <button *ngIf=\"!fullCatalog\" (click)=\"fullCatalog = true\" mat-button class=\"show-more-button\">\n      Показати більше\n    </button>\n    <button *ngIf=\"fullCatalog && isDronsActive\" (click)=\"fullCatalog = false\" mat-button class=\"show-more-button\">\n      Приховати дрони\n    </button>\n    <button *ngIf=\"fullCatalog && !isDronsActive\" (click)=\"fullCatalog = false\" mat-button class=\"show-more-button\">\n      Приховати запчастини\n    </button>\n  </div>\n</div>\n<div></div>\n"

/***/ }),

/***/ "./src/app/catalog/catalog.component.scss":
/*!************************************************!*\
  !*** ./src/app/catalog/catalog.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".catalog-wrapper {\n  text-align: center; }\n\n.catalog-button {\n  box-sizing: border-box;\n  width: 50%;\n  display: inline-block;\n  padding: 0 26px;\n  font-size: 24px;\n  cursor: pointer; }\n\n.align-left {\n  text-align: left; }\n\n.align-right {\n  text-align: right; }\n\n.catalog-active {\n  color: #148bbc; }\n\n.catalog-title {\n  font-size: 36px;\n  margin: 20px 0; }\n\n.filter-wrapper {\n  margin: 10px auto;\n  text-align: center;\n  width: 90%;\n  background-color: #E0E0E0;\n  height: 60px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between; }\n\n.filter-left {\n  display: flex; }\n\n.filter-name {\n  float: left;\n  line-height: 60px;\n  background-color: #CECECE;\n  border-radius: 8px 0 0 8px;\n  padding-right: 5px; }\n\n.filter-brands {\n  display: inherit;\n  float: left; }\n\n.brand-select {\n  margin: 10px 30px;\n  padding: 4px 20px;\n  background-color: white;\n  border-radius: 4px; }\n\n.filter-sorting {\n  display: inherit;\n  float: right;\n  margin-right: 100px; }\n\n.sorting-title {\n  float: left;\n  display: flex;\n  align-items: center; }\n\n.sorting-buttons {\n  margin: 0 20px; }\n\n.sorting-button {\n  float: left;\n  margin: 10px 0;\n  background-color: white;\n  font-weight: inherit; }\n\n.sorting-button-left {\n  margin-left: 20px;\n  border-radius: 4px 0 0 4px;\n  border-right: 1px grey solid; }\n\n.sorting-button-right {\n  border-radius: 0 4px 4px 0; }\n\n.drons-wrapper {\n  margin: 20px 0 10px 0;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%; }\n\n.drone-info {\n  padding: 12px 10px;\n  float: left;\n  width: 25%;\n  box-sizing: border-box; }\n\n.gallery img {\n  width: 100%;\n  height: auto;\n  cursor: pointer; }\n\n.drone-name {\n  text-align: left;\n  cursor: pointer; }\n\n.drone-price-number {\n  text-align: left;\n  color: #148bbc; }\n\n.selected-item {\n  background-color: #148bbca3; }\n\n.show-more-button {\n  background-color: #148bbca3;\n  color: white;\n  font-size: 24px;\n  font-weight: normal;\n  width: 33%;\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content; }\n\n.catalog-element {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmhpaS9Eb2N1bWVudHMvUHJvamVjdHMvZHJvbml4L3NyYy9hcHAvY2F0YWxvZy9jYXRhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDhCQUFzQjtFQUF0QiwyQkFBc0I7RUFBdEIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2F0YWxvZy9jYXRhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGFsb2ctd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhdGFsb2ctYnV0dG9uIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDI2cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWxpZ24tbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hbGlnbi1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2F0YWxvZy1hY3RpdmUge1xuICBjb2xvcjogIzE0OGJiYztcbn1cblxuLmNhdGFsb2ctdGl0bGUge1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4uZmlsdGVyLXdyYXBwZXIge1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFMEUwO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZmlsdGVyLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmlsdGVyLW5hbWUge1xuICBmbG9hdDogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRUNFQ0U7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5maWx0ZXItYnJhbmRzIHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5icmFuZC1zZWxlY3Qge1xuICBtYXJnaW46IDEwcHggMzBweDtcbiAgcGFkZGluZzogNHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5maWx0ZXItc29ydGluZyB7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbn1cblxuLnNvcnRpbmctdGl0bGUge1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNvcnRpbmctYnV0dG9ucyB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuXG4uc29ydGluZy1idXR0b24ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLnNvcnRpbmctYnV0dG9uLWxlZnQge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IGdyZXkgc29saWQ7XG59XG5cbi5zb3J0aW5nLWJ1dHRvbi1yaWdodCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xufVxuXG4uZHJvbnMtd3JhcHBlciB7XG4gIG1hcmdpbjogMjBweCAwIDEwcHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRyb25lLWluZm8ge1xuICBwYWRkaW5nOiAxMnB4IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjUlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZ2FsbGVyeSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9uZS1uYW1lIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvbmUtcHJpY2UtbnVtYmVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMxNDhiYmM7XG59XG5cbi5zZWxlY3RlZC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0OGJiY2EzO1xufVxuXG4uc2hvdy1tb3JlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDhiYmNhMztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHdpZHRoOiAzMyU7XG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5jYXRhbG9nLWVsZW1lbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/catalog/catalog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/catalog/catalog.component.ts ***!
  \**********************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dron_view_modal_dron_view_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dron-view-modal/dron-view-modal.component */ "./src/app/dron-view-modal/dron-view-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _detail_view_modal_detail_view_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../detail-view-modal/detail-view-modal.component */ "./src/app/detail-view-modal/detail-view-modal.component.ts");






var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(fb, dialog) {
        this.fb = fb;
        this.dialog = dialog;
        this.isDronsActive = true;
        this.brands = ['Всі бренди', 'Xiaomi', 'Maizu'];
        this.details = ['Всі деталі', 'Корпуси', 'Шлейфи', 'Лопасти'];
        this.fullCatalog = false;
    }
    CatalogComponent.prototype.ngOnInit = function () {
        this.dronForm = this.fb.group({
            dronControl: ['Всі бренди']
        });
        this.detailForm = this.fb.group({
            detailControl: ['Всі деталі']
        });
        this.dronsArr = [
            { name: 'Dron1', price: 68000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '20', controlLength: '2',
                speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12' },
            { name: 'Dron2', price: 9000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '30', controlLength: '4',
                speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12' },
            { name: 'Dron3', price: 80000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '40', controlLength: '1',
                speed: '60', sensorLength: '30', stabilizer: '2', pixels: '12' },
            { name: 'Dron6', price: 34000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '20', controlLength: '3',
                speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12' },
            { name: 'Dron9', price: 35000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '10', controlLength: '2',
                speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12' },
            { name: 'Drona', price: 87000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '40', controlLength: '3',
                speed: '70', sensorLength: '30', stabilizer: '2', pixels: '12' },
            { name: 'Dronb', price: 45000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '20', controlLength: '5',
                speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12' },
            { name: 'Dronj', price: 56000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '50', controlLength: '2',
                speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12' },
            { name: 'Dron6', price: 43000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '20', controlLength: '7',
                speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12' },
            { name: 'Dron6', price: 23000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '60', controlLength: '2',
                speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12' },
        ];
        this.detailsArr = [
            { name: 'Detail1', price: 300, minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG' },
            { name: 'Detail2', price: 600, minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG' },
            { name: 'Detail3', price: 345, minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG' },
            { name: 'Detail4', price: 800, minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG' },
            { name: 'Detail5', price: 1200, minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG' },
            { name: 'Detail6', price: 540, minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG' },
            { name: 'Detail7', price: 330, minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG' },
        ];
        this.contentToShow = this.dronsArr;
    };
    CatalogComponent.prototype.dronsActive = function () {
        this.isDronsActive = true;
        this.contentToShow = this.dronsArr;
    };
    CatalogComponent.prototype.detailsActive = function () {
        this.isDronsActive = false;
        this.contentToShow = this.detailsArr;
        console.log(this.contentToShow);
    };
    CatalogComponent.prototype.sortByName = function () {
        if (this.sortedByName) {
            this.contentToShow.sort(function (a, b) { return b.name.localeCompare(a.name); });
            this.sortedByName = false;
        }
        else {
            this.contentToShow.sort(function (a, b) { return a.name.localeCompare(b.name); });
            this.sortedByPrice = null;
            this.sortedByName = true;
        }
    };
    CatalogComponent.prototype.sortByPrice = function () {
        if (this.sortedByPrice) {
            this.contentToShow.sort(function (a, b) { return b.price - (a.price); });
            this.sortedByPrice = false;
        }
        else {
            this.contentToShow.sort(function (a, b) { return a.price - (b.price); });
            this.sortedByName = null;
            this.sortedByPrice = true;
        }
    };
    CatalogComponent.prototype.openViewDroneModal = function (element) {
        var dialogRef = this.dialog.open(_dron_view_modal_dron_view_modal_component__WEBPACK_IMPORTED_MODULE_3__["DronViewModalComponent"], {
            data: {
                element: element
            }
        });
    };
    CatalogComponent.prototype.openViewDetailModal = function (element) {
        var dialogRef = this.dialog.open(_detail_view_modal_detail_view_modal_component__WEBPACK_IMPORTED_MODULE_5__["DetailViewModalComponent"], {
            width: '50vw',
            data: {
                element: element
            }
        });
    };
    CatalogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalog',
            template: __webpack_require__(/*! ./catalog.component.html */ "./src/app/catalog/catalog.component.html"),
            styles: [__webpack_require__(/*! ./catalog.component.scss */ "./src/app/catalog/catalog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], CatalogComponent);
    return CatalogComponent;
}());



/***/ }),

/***/ "./src/app/detail-view-modal/detail-view-modal.component.html":
/*!********************************************************************!*\
  !*** ./src/app/detail-view-modal/detail-view-modal.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-view-wrapper\">\n\n  <i class=\"material-icons modal-clear\" (click)=\"onNoClick()\">\n    clear\n  </i>\n\n  <div class=\"detail-info-content\">\n    <div class=\"detail-image\">\n      <img src=\"{{element.minImg}}\">\n    </div>\n\n    <div class=\"detail-info-right\">\n      <div class=\"detail-name\">{{element.name}}</div>\n      \n\n      <div class=\"detail-price-number\">\n        <div class=\"price\">\n          {{element.price}} грн\n        </div>\n\n        <div class=\"number-wrapper\">\n          <div class=\"title\">\n            Для замовлення дзвоніть за телефоном\n          </div>\n          <div class=\"content\">\n            <div class=\"number\">\n              +38 (099) 55 21 395\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"detail-detail-info\">\n    <div class=\"title\">\n      Інформація\n    </div>\n\n    <div class=\"content\">\n      Режим TapFly дает полную свободу творчества: вам всего лишь нужно скомпоновать кадр. Задайте направление на экране телефона, и Spark отправится туда, распознавая препятствия с помощью системы обзора. Захотелось поснимать в другом месте? Выберите нужную точку на экране и дрон плавно изменит траекторию. Легко и просто.\n      Режим TapFly дает полную свободу творчества: вам всего лишь нужно скомпоновать кадр. Задайте направление на экране телефона, и Spark отправится туда, распознавая препятствия с помощью системы обзора. Захотелось поснимать в другом месте? Выберите нужную точку на экране и дрон плавно изменит траекторию. Легко и просто.\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/detail-view-modal/detail-view-modal.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/detail-view-modal/detail-view-modal.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-view-wrapper {\n  position: relative;\n  color: #333333; }\n\n.modal-clear {\n  top: 0;\n  right: 0;\n  position: absolute;\n  font-size: 48px;\n  cursor: pointer;\n  color: #333333; }\n\n.detail-info-right {\n  padding: 0 20px; }\n\n.detail-name {\n  font-size: 36px; }\n\n.detail-image {\n  width: 40%;\n  box-sizing: border-box;\n  float: left; }\n\n.detail-image img {\n    width: 100%; }\n\n.detail-info-content {\n  display: flex; }\n\n.number-wrapper {\n  display: inherit;\n  flex-direction: column;\n  padding-right: 20px; }\n\n.number-wrapper .title {\n    font-size: 16px; }\n\n.number-wrapper .content {\n    background-color: #148bbca3;\n    border-radius: 4px;\n    text-align: center; }\n\n.number-wrapper .content .number {\n      font-size: 24px;\n      color: white; }\n\n.price {\n  font-size: 48px;\n  color: #148bbc; }\n\n.detail-detail-info {\n  width: 100%;\n  margin: 20px 0;\n  padding: 0 24px; }\n\n.detail-detail-info .title {\n    font-size: 24px; }\n\n.detail-detail-info .content {\n    margin-top: 16px;\n    font-size: 16px;\n    max-width: 70%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmhpaS9Eb2N1bWVudHMvUHJvamVjdHMvZHJvbml4L3NyYy9hcHAvZGV0YWlsLXZpZXctbW9kYWwvZGV0YWlsLXZpZXctbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLE1BQU07RUFDTixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixXQUFXLEVBQUE7O0FBSGI7SUFNSSxXQUFXLEVBQUE7O0FBSWY7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBOztBQUhyQjtJQU1JLGVBQWUsRUFBQTs7QUFObkI7SUFVSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFBOztBQVp0QjtNQWVNLGVBQWU7TUFDZixZQUFZLEVBQUE7O0FBS2xCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFIakI7SUFNSSxlQUFlLEVBQUE7O0FBTm5CO0lBVUksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWwtdmlldy1tb2RhbC9kZXRhaWwtdmlldy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwtdmlldy13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLm1vZGFsLWNsZWFyIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5kZXRhaWwtaW5mby1yaWdodCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLmRldGFpbC1uYW1lIHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG4uZGV0YWlsLWltYWdlIHtcbiAgd2lkdGg6IDQwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxvYXQ6IGxlZnQ7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uZGV0YWlsLWluZm8tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5udW1iZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0OGJiY2EzO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAubnVtYmVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuLnByaWNlIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBjb2xvcjogIzE0OGJiYztcbn1cblxuLmRldGFpbC1kZXRhaWwtaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDIwcHggMDtcbiAgcGFkZGluZzogMCAyNHB4O1xuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1heC13aWR0aDogNzAlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/detail-view-modal/detail-view-modal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/detail-view-modal/detail-view-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: DetailViewModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailViewModalComponent", function() { return DetailViewModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DetailViewModalComponent = /** @class */ (function () {
    function DetailViewModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DetailViewModalComponent.prototype.ngOnInit = function () {
        this.element = this.data.element;
    };
    DetailViewModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DetailViewModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-view-modal',
            template: __webpack_require__(/*! ./detail-view-modal.component.html */ "./src/app/detail-view-modal/detail-view-modal.component.html"),
            styles: [__webpack_require__(/*! ./detail-view-modal.component.scss */ "./src/app/detail-view-modal/detail-view-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DetailViewModalComponent);
    return DetailViewModalComponent;
}());



/***/ }),

/***/ "./src/app/dron-view-modal/dron-view-modal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dron-view-modal/dron-view-modal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"drone-view-wrapper\">\n\n  <i class=\"material-icons modal-clear\" (click)=\"onNoClick()\">\n    clear\n  </i>\n\n  <div class=\"drone-info-content\">\n    <div class=\"drone-image\">\n      <img src=\"{{element.minImg}}\">\n    </div>\n\n    <div class=\"drone-info-right\">\n      <div class=\"drone-name\">{{element.name}}</div>\n\n      <div class=\"drone-characteristics\">\n        <div class=\"characteristic\">\n          <div class=\"icon\">\n            <i class=\"material-icons\">\n              battery_charging_full\n            </i>\n          </div>\n          <div class=\"content\">\n            <div class=\"title\">\n              Тривалість польоту\n            </div>\n            <div class=\"content-info\">\n              {{element.charge}}хв\n            </div>\n          </div>\n        </div>\n\n        <div class=\"characteristic\">\n          <div class=\"icon\">\n            <i class=\"material-icons\">\n              speaker_phone\n            </i>\n          </div>\n          <div class=\"content\">\n            <div class=\"title\">\n              Дальність управління\n            </div>\n            <div class=\"content-info\">\n              {{element.controlLength}} КМ\n            </div>\n          </div>\n        </div>\n\n        <div class=\"characteristic\">\n          <div class=\"icon\">\n            <i class=\"material-icons\">\n              network_check\n            </i>\n          </div>\n          <div class=\"content\">\n            <div class=\"title\">\n              Максимальна швидкість\n            </div>\n            <div class=\"content-info\">\n              {{element.speed}} КМ/ХВ\n            </div>\n          </div>\n        </div>\n\n        <div class=\"characteristic\">\n          <div class=\"icon\">\n            <i class=\"material-icons\">\n              wifi_tethering\n            </i>\n          </div>\n          <div class=\"content\">\n            <div class=\"title\">\n              Дальність сенсорів\n            </div>\n            <div class=\"content-info\">\n              {{element.sensorLength}} М\n            </div>\n          </div>\n        </div>\n\n        <div class=\"characteristic\">\n          <div class=\"icon\">\n            <i class=\"material-icons\">\n              donut_small\n            </i>\n          </div>\n          <div class=\"content\">\n            <div class=\"title\">\n              Стабілізатор\n            </div>\n            <div class=\"content-info\">\n              {{element.stabilizer}}Х осьовий\n            </div>\n          </div>\n        </div>\n\n        <div class=\"characteristic\">\n          <div class=\"icon\">\n            <i class=\"material-icons\">\n              camera_alt\n            </i>\n          </div>\n          <div class=\"content\">\n            <div class=\"title\">\n              Кіль-ть пікселів\n            </div>\n            <div class=\"content-info\">\n              {{element.pixels}} МП\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"drone-price-number\">\n        <div class=\"price\">\n          {{element.price}} грн\n        </div>\n\n        <div class=\"number-wrapper\">\n          <div class=\"title\">\n            Для замовлення дзвоніть за телефоном\n          </div>\n          <div class=\"content\">\n            <div class=\"number\">\n              +38 (099) 55 21 395\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"drone-detail-info\">\n    <div class=\"title\">\n      Детальна інформація\n    </div>\n\n    <div class=\"content\">\n      Режим TapFly дает полную свободу творчества: вам всего лишь нужно скомпоновать кадр. Задайте направление на экране телефона, и Spark отправится туда, распознавая препятствия с помощью системы обзора. Захотелось поснимать в другом месте? Выберите нужную точку на экране и дрон плавно изменит траекторию. Легко и просто.\n      Режим TapFly дает полную свободу творчества: вам всего лишь нужно скомпоновать кадр. Задайте направление на экране телефона, и Spark отправится туда, распознавая препятствия с помощью системы обзора. Захотелось поснимать в другом месте? Выберите нужную точку на экране и дрон плавно изменит траекторию. Легко и просто.\n      Режим TapFly дает полную свободу творчества: вам всего лишь нужно скомпоновать кадр. Задайте направление на экране телефона, и Spark отправится туда, распознавая препятствия с помощью системы обзора. Захотелось поснимать в другом месте? Выберите нужную точку на экране и дрон плавно изменит траекторию. Легко и просто.\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/dron-view-modal/dron-view-modal.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dron-view-modal/dron-view-modal.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drone-view-wrapper {\n  position: relative;\n  color: #333333; }\n\n.drone-name {\n  font-size: 36px; }\n\n.drone-image {\n  width: 40%;\n  box-sizing: border-box;\n  float: left; }\n\n.drone-image img {\n    width: 100%; }\n\n.drone-info-content {\n  display: flex; }\n\n.drone-info-right {\n  width: 60%;\n  box-sizing: border-box;\n  float: left;\n  padding: 0 20px; }\n\n.drone-characteristics {\n  display: inline-block; }\n\n.drone-characteristics .characteristic {\n    width: 33%;\n    float: left;\n    margin: 5px 0;\n    display: flex; }\n\n.drone-characteristics .characteristic .icon {\n      color: #DADADA; }\n\n.drone-characteristics .characteristic .icon i {\n        font-size: 56px; }\n\n.drone-characteristics .characteristic .title {\n      font-size: 16px; }\n\n.drone-characteristics .characteristic .content-info {\n      font-size: 24px;\n      font-weight: bold; }\n\n.drone-price-number {\n  font-size: 48px;\n  margin-top: 16px;\n  display: flex;\n  justify-content: space-between; }\n\n.drone-price-number .price {\n    color: #148bbc; }\n\n.drone-price-number .number-wrapper {\n    display: inherit;\n    flex-direction: column;\n    padding-right: 20px; }\n\n.drone-price-number .number-wrapper .title {\n      font-size: 16px; }\n\n.drone-price-number .number-wrapper .content {\n      background-color: #148bbca3;\n      border-radius: 4px;\n      text-align: center; }\n\n.drone-price-number .number-wrapper .content .number {\n        font-size: 24px;\n        color: white; }\n\n.drone-detail-info {\n  width: 100%;\n  margin: 20px 0;\n  padding: 0 24px; }\n\n.drone-detail-info .title {\n    font-size: 24px; }\n\n.drone-detail-info .content {\n    margin-top: 16px;\n    font-size: 16px;\n    max-width: 70%; }\n\n.modal-clear {\n  top: 0;\n  right: 0;\n  position: absolute;\n  font-size: 48px;\n  cursor: pointer;\n  color: #333333; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmhpaS9Eb2N1bWVudHMvUHJvamVjdHMvZHJvbml4L3NyYy9hcHAvZHJvbi12aWV3LW1vZGFsL2Ryb24tdmlldy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsV0FBVyxFQUFBOztBQUhiO0lBTUksV0FBVyxFQUFBOztBQUlmO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHFCQUFxQixFQUFBOztBQUR2QjtJQUlJLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWEsRUFBQTs7QUFQakI7TUFVTSxjQUFjLEVBQUE7O0FBVnBCO1FBYVEsZUFBZSxFQUFBOztBQWJ2QjtNQWtCTSxlQUFlLEVBQUE7O0FBbEJyQjtNQXNCTSxlQUFlO01BQ2YsaUJBQWlCLEVBQUE7O0FBS3ZCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCLEVBQUE7O0FBSmhDO0lBT0ksY0FBYyxFQUFBOztBQVBsQjtJQVdJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CLEVBQUE7O0FBYnZCO01BZ0JNLGVBQWUsRUFBQTs7QUFoQnJCO01Bb0JNLDJCQUEyQjtNQUMzQixrQkFBa0I7TUFDbEIsa0JBQWtCLEVBQUE7O0FBdEJ4QjtRQXlCUSxlQUFlO1FBQ2YsWUFBWSxFQUFBOztBQU1wQjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUhqQjtJQU1JLGVBQWUsRUFBQTs7QUFObkI7SUFVSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWMsRUFBQTs7QUFJbEI7RUFDRSxNQUFNO0VBQ04sUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Ryb24tdmlldy1tb2RhbC9kcm9uLXZpZXctbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvbmUtdmlldy13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmRyb25lLW5hbWUge1xuICBmb250LXNpemU6IDM2cHg7XG59XG5cbi5kcm9uZS1pbWFnZSB7XG4gIHdpZHRoOiA0MCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsb2F0OiBsZWZ0O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmRyb25lLWluZm8tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kcm9uZS1pbmZvLXJpZ2h0IHtcbiAgd2lkdGg6IDYwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLmRyb25lLWNoYXJhY3RlcmlzdGljcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAuY2hhcmFjdGVyaXN0aWMge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmljb24ge1xuICAgICAgY29sb3I6ICNEQURBREE7XG5cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAuY29udGVudC1pbmZvIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxufVxuXG4uZHJvbmUtcHJpY2UtbnVtYmVyIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgLnByaWNlIHtcbiAgICBjb2xvcjogIzE0OGJiYztcbiAgfVxuXG4gIC5udW1iZXItd3JhcHBlciB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDhiYmNhMztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgLm51bWJlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZHJvbmUtZGV0YWlsLWluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBhZGRpbmc6IDAgMjRweDtcblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgfVxufVxuXG4ubW9kYWwtY2xlYXIge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/dron-view-modal/dron-view-modal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dron-view-modal/dron-view-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: DronViewModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DronViewModalComponent", function() { return DronViewModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DronViewModalComponent = /** @class */ (function () {
    function DronViewModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DronViewModalComponent.prototype.ngOnInit = function () {
        this.element = this.data.element;
    };
    DronViewModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DronViewModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dron-view-modal',
            template: __webpack_require__(/*! ./dron-view-modal.component.html */ "./src/app/dron-view-modal/dron-view-modal.component.html"),
            styles: [__webpack_require__(/*! ./dron-view-modal.component.scss */ "./src/app/dron-view-modal/dron-view-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DronViewModalComponent);
    return DronViewModalComponent;
}());



/***/ }),

/***/ "./src/app/drones-catalog/drones-catalog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/drones-catalog/drones-catalog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"drone-catalog-wrapper\">\n  <div class=\"drone-catalog-title\">\n    Інформація про дрони\n    <br>\n    з якими ми працюємо\n  </div>\n  <!--<div class=\"drone-info-wrapper\">-->\n    <!--<div class=\"drone-info drone-info-back1\">-->\n      <!--<div class=\"drone-content\">-->\n        <!--<div class=\"image\">-->\n          <!--<img src=\"assets/photo/drone1.jpg\" alt=\"\">-->\n        <!--</div>-->\n        <!--<div class=\"content-info\">-->\n          <!--<div class=\"title\">-->\n            <!--Mavic 2 Pro-->\n          <!--</div>-->\n          <!--<div class=\"text\">-->\n            <!--Мы всегда мечтали создать совершенный коптер. Коптер, обладающий всеми лучшими технологиями DJI, коптер, который преобразит мир аэросъемки. Эта мечта исполнилась. Мы создали Mavic 2.-->\n          <!--</div>-->\n          <!--<div class=\"price\">-->\n            <!--47 820 грн з ПДВ.-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n\n    <!--<div class=\"details-info\">-->\n\n      <!--<div class=\"details-full-info\" *ngFor=\"let elem of detailsArr; index as i\">-->\n        <!--<div class=\"details-content\">-->\n          <!--<div class=\"gallery\">-->\n            <!--<a rel=\"simplebox\" target=\"_blank\">-->\n              <!--<img src=\"{{elem.minImg}}\">-->\n            <!--</a>-->\n          <!--</div>-->\n          <!--<div class=\"drone-name\">-->\n            <!--{{elem.name}}-->\n          <!--</div>-->\n          <!--<div class=\"drone-price-number\">-->\n            <!--{{elem.price}} грн-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n\n    <!--</div>-->\n  <!--</div>-->\n\n  <div class=\"drone-info-wrapper\" *ngFor=\"let droneElem of dronesArr; index as i\">\n    <div class=\"drone-info drone-info-back2\">\n      <div class=\"drone-content\">\n        <div class=\"image\">\n          <img src=\"{{droneElem.minImg}}\" alt=\"\">\n        </div>\n        <div class=\"content-info\">\n          <div class=\"title\">\n            {{droneElem.name}}\n          </div>\n          <div class=\"text\">\n            Мы всегда мечтали создать совершенный коптер. Коптер, обладающий всеми лучшими технологиями DJI, коптер, который преобразит мир аэросъемки. Эта мечта исполнилась. Мы создали Mavic 2.\n          </div>\n          <div class=\"price\">\n            {{droneElem.price}} грн з ПДВ.\n          </div>\n        </div>\n      </div>\n      <div class=\"drone-characteristics\">\n        <div class=\"characteristic\">\n          <div class=\"icon\">\n            <i class=\"material-icons\">\n              battery_charging_full\n            </i>\n          </div>\n          <div class=\"content\">\n            <div class=\"title\">\n              Тривалість польоту\n            </div>\n            <div class=\"content-info\">\n              {{droneElem.charge}}хв\n            </div>\n          </div>\n        </div>\n\n        <div class=\"characteristic\">\n          <div class=\"icon\">\n            <i class=\"material-icons\">\n              speaker_phone\n            </i>\n          </div>\n          <div class=\"content\">\n            <div class=\"title\">\n              Дальність управління\n            </div>\n            <div class=\"content-info\">\n              {{droneElem.controlLength}} КМ\n            </div>\n          </div>\n        </div>\n\n        <div class=\"characteristic\">\n          <div class=\"icon\">\n            <i class=\"material-icons\">\n              network_check\n            </i>\n          </div>\n          <div class=\"content\">\n            <div class=\"title\">\n              Максимальна швидкість\n            </div>\n            <div class=\"content-info\">\n              {{droneElem.speed}} КМ/ХВ\n            </div>\n          </div>\n        </div>\n\n        <div class=\"characteristic\">\n          <div class=\"icon\">\n            <i class=\"material-icons\">\n              wifi_tethering\n            </i>\n          </div>\n          <div class=\"content\">\n            <div class=\"title\">\n              Дальність сенсорів\n            </div>\n            <div class=\"content-info\">\n              {{droneElem.sensorLength}} М\n            </div>\n          </div>\n        </div>\n\n        <div class=\"characteristic\">\n          <div class=\"icon\">\n            <i class=\"material-icons\">\n              donut_small\n            </i>\n          </div>\n          <div class=\"content\">\n            <div class=\"title\">\n              Стабілізатор\n            </div>\n            <div class=\"content-info\">\n              {{droneElem.stabilizer}}Х осьовий\n            </div>\n          </div>\n        </div>\n\n        <div class=\"characteristic\">\n          <div class=\"icon\">\n            <i class=\"material-icons\">\n              camera_alt\n            </i>\n          </div>\n          <div class=\"content\">\n            <div class=\"title\">\n              Кіль-ть пікселів\n            </div>\n            <div class=\"content-info\">\n              {{droneElem.pixels}} МП\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"details-info\">\n\n      <div class=\"details-full-info\" (click)=\"openViewDetailModal(elem)\" *ngFor=\"let elem of droneElem.details; index as i\">\n        <div class=\"details-content\">\n          <div class=\"gallery\">\n            <a rel=\"simplebox\" target=\"_blank\">\n              <img src=\"{{elem.minImg}}\">\n            </a>\n          </div>\n          <div class=\"detail-elem-text\">\n            <div class=\"drone-name\">\n              {{elem.name}}\n            </div>\n            <div class=\"drone-price-number\">\n              {{elem.price}} грн\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/drones-catalog/drones-catalog.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/drones-catalog/drones-catalog.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media all and (max-width: 700px) {\n  .drone-info {\n    flex-direction: column; }\n  .drone-characteristics {\n    max-width: 100%;\n    padding: 0 40px 40px 40px; }\n  .characteristic {\n    width: 100%; }\n  .drone-content {\n    flex-direction: column-reverse;\n    max-width: 100%;\n    width: 100%; } }\n\n.drone-catalog-wrapper {\n  margin: 50px 0; }\n\n.drone-catalog-title {\n  font-size: 36px;\n  margin: 20px 0;\n  text-align: center; }\n\n.drone-info-back1 {\n  background-image: url('drone-back1.jpg'); }\n\n.drone-info-back2 {\n  background-image: url('drone-back2.jpg'); }\n\n.drone-info-wrapper {\n  margin: 50px 0; }\n\n.drone-info {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  padding: 20px;\n  display: flex; }\n\n.drone-info .drone-content {\n    display: flex;\n    padding: 30px;\n    background-color: white; }\n\n.drone-info .drone-content .image {\n      width: 50%;\n      min-width: 300px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      box-sizing: border-box; }\n\n.drone-info .drone-content .image img {\n        width: 100%; }\n\n.drone-info .drone-content .content-info .title {\n      font-size: 24px;\n      font-weight: bold; }\n\n.drone-info .drone-content .content-info .text {\n      margin: 10px 0; }\n\n.drone-info .drone-content .content-info .price {\n      color: #148bbc; }\n\n.details-info {\n  margin: 20px 0;\n  display: flex;\n  justify-content: space-around; }\n\n.details-info .details-full-info {\n    margin: 10px;\n    width: 20%;\n    border: 1px solid #e0e0e0;\n    box-shadow: 3px 3px 6px grey;\n    cursor: pointer;\n    display: flex; }\n\n.details-info .details-full-info img {\n      width: 100%; }\n\n.details-info .details-full-info .drone-price-number {\n      color: #148bbc; }\n\n.details-info .details-full-info:hover {\n    box-shadow: 3px 3px 16px #148bbc; }\n\n.detail-elem-text {\n  padding: 0 0 8px 16px; }\n\n.characteristic {\n  width: 50%;\n  float: left;\n  margin: 5px 0;\n  display: flex; }\n\n.characteristic .icon {\n    color: #DADADA; }\n\n.characteristic .icon i {\n      color: #148bbc;\n      font-size: 56px; }\n\n.characteristic .title {\n    font-size: 16px; }\n\n.characteristic .content-info {\n    font-size: 20px;\n    font-weight: bold; }\n\n.drone-characteristics {\n  background-color: white;\n  padding: 40px 10px; }\n\n@media all and (max-width: 700px) {\n  .drone-info {\n    flex-direction: column; }\n  .drone-characteristics {\n    max-width: 100%;\n    padding: 0 40px 40px 40px; }\n  .characteristic {\n    width: 100%; }\n  .drone-content {\n    flex-direction: column-reverse;\n    max-width: 100%; } }\n\n@media all and (min-width: 700px) and (max-width: 1200px) {\n  .drone-info {\n    flex-direction: column; }\n  .drone-characteristics {\n    width: 50%;\n    min-width: 650px;\n    padding: 0 40px 40px 40px; } }\n\n@media all and (min-width: 700px) {\n  .drone-content {\n    width: 50%;\n    min-width: 650px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmhpaS9Eb2N1bWVudHMvUHJvamVjdHMvZHJvbml4L3NyYy9hcHAvZHJvbmVzLWNhdGFsb2cvZHJvbmVzLWNhdGFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHNCQUFzQixFQUFBO0VBRXhCO0lBQ0UsZUFBZTtJQUNmLHlCQUF5QixFQUFBO0VBRzNCO0lBQ0UsV0FBVyxFQUFBO0VBR2I7SUFDRSw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLFdBQVcsRUFBQSxFQUNaOztBQUdIO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usd0NBQTJELEVBQUE7O0FBRzdEO0VBQ0Usd0NBQTJELEVBQUE7O0FBRzdEO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixhQUFhLEVBQUE7O0FBTGY7SUFRSSxhQUFhO0lBRWIsYUFBYTtJQUdiLHVCQUF1QixFQUFBOztBQWIzQjtNQWdCTSxVQUFVO01BQ1YsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLHNCQUFzQixFQUFBOztBQXJCNUI7UUF3QlEsV0FBVyxFQUFBOztBQXhCbkI7TUErQlEsZUFBZTtNQUNmLGlCQUFpQixFQUFBOztBQWhDekI7TUFvQ1EsY0FBYyxFQUFBOztBQXBDdEI7TUF3Q1EsY0FBYyxFQUFBOztBQVF0QjtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsNkJBQTZCLEVBQUE7O0FBSC9CO0lBTUksWUFBWTtJQUNaLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixhQUFhLEVBQUE7O0FBWGpCO01BY00sV0FBVyxFQUFBOztBQWRqQjtNQWtCTSxjQUFjLEVBQUE7O0FBbEJwQjtJQXVCSSxnQ0FBZ0MsRUFBQTs7QUFLcEM7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhLEVBQUE7O0FBSmY7SUFPSSxjQUFjLEVBQUE7O0FBUGxCO01BVU0sY0FBYztNQUNkLGVBQWUsRUFBQTs7QUFYckI7SUFnQkksZUFBZSxFQUFBOztBQWhCbkI7SUFvQkksZUFBZTtJQUNmLGlCQUFpQixFQUFBOztBQUtyQjtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRTtJQUNFLHNCQUFzQixFQUFBO0VBRXhCO0lBQ0UsZUFBZTtJQUNmLHlCQUF5QixFQUFBO0VBRzNCO0lBQ0UsV0FBVyxFQUFBO0VBR2I7SUFDRSw4QkFBOEI7SUFDOUIsZUFBZSxFQUFBLEVBQ2hCOztBQUdIO0VBQ0U7SUFDRSxzQkFBc0IsRUFBQTtFQUV4QjtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIseUJBQXlCLEVBQUEsRUFDMUI7O0FBR0g7RUFDRTtJQUNFLFVBQVU7SUFDVixnQkFBZ0IsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Ryb25lcy1jYXRhbG9nL2Ryb25lcy1jYXRhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmRyb25lLWluZm8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmRyb25lLWNoYXJhY3RlcmlzdGljcyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgNDBweCA0MHB4IDQwcHg7XG4gIH1cblxuICAuY2hhcmFjdGVyaXN0aWMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmRyb25lLWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmRyb25lLWNhdGFsb2ctd3JhcHBlciB7XG4gIG1hcmdpbjogNTBweCAwO1xufVxuXG4uZHJvbmUtY2F0YWxvZy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRyb25lLWluZm8tYmFjazEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvcGhvdG8vZHJvbmUtYmFjazEuanBnXCIpO1xufVxuXG4uZHJvbmUtaW5mby1iYWNrMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9waG90by9kcm9uZS1iYWNrMi5qcGdcIik7XG59XG5cbi5kcm9uZS1pbmZvLXdyYXBwZXIge1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxuLmRyb25lLWluZm8ge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIC5kcm9uZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vbWFyZ2luOiAyMHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgLy93aWR0aDogNTAlO1xuICAgIC8vbWluLXdpZHRoOiA2NTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgIC5pbWFnZSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudC1pbmZvIHtcblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLnRleHQge1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgIH1cblxuICAgICAgLnByaWNlIHtcbiAgICAgICAgY29sb3I6ICMxNDhiYmM7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxufVxuXG4uZGV0YWlscy1pbmZvIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gIC5kZXRhaWxzLWZ1bGwtaW5mbyB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHdpZHRoOiAyMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDZweCBncmV5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5kcm9uZS1wcmljZS1udW1iZXIge1xuICAgICAgY29sb3I6ICMxNDhiYmM7XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbHMtZnVsbC1pbmZvOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDE2cHggIzE0OGJiYztcbiAgfVxuXG59XG5cbi5kZXRhaWwtZWxlbS10ZXh0IHtcbiAgcGFkZGluZzogMCAwIDhweCAxNnB4O1xufVxuXG4uY2hhcmFjdGVyaXN0aWMge1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgZGlzcGxheTogZmxleDtcblxuICAuaWNvbiB7XG4gICAgY29sb3I6ICNEQURBREE7XG5cbiAgICBpIHtcbiAgICAgIGNvbG9yOiAjMTQ4YmJjO1xuICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgIH1cbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmNvbnRlbnQtaW5mbyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cblxuLmRyb25lLWNoYXJhY3RlcmlzdGljcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0MHB4IDEwcHg7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5kcm9uZS1pbmZvIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5kcm9uZS1jaGFyYWN0ZXJpc3RpY3Mge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDQwcHggNDBweCA0MHB4O1xuICB9XG5cbiAgLmNoYXJhY3RlcmlzdGljIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5kcm9uZS1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDcwMHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5kcm9uZS1pbmZvIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5kcm9uZS1jaGFyYWN0ZXJpc3RpY3Mge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWluLXdpZHRoOiA2NTBweDtcbiAgICBwYWRkaW5nOiAwIDQwcHggNDBweCA0MHB4O1xuICB9XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIC5kcm9uZS1jb250ZW50IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1pbi13aWR0aDogNjUwcHg7XG4gIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/drones-catalog/drones-catalog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/drones-catalog/drones-catalog.component.ts ***!
  \************************************************************/
/*! exports provided: DronesCatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DronesCatalogComponent", function() { return DronesCatalogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _detail_view_modal_detail_view_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../detail-view-modal/detail-view-modal.component */ "./src/app/detail-view-modal/detail-view-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var DronesCatalogComponent = /** @class */ (function () {
    function DronesCatalogComponent(dialog) {
        this.dialog = dialog;
        this.dronesArr = [];
        this.detailsArr = [];
    }
    DronesCatalogComponent.prototype.ngOnInit = function () {
        this.detailsArr = [
            { name: 'Detail1', price: 300, minImg: 'assets/photo/detail1.jpg', fullImg: 'assets/photo/img5.JPG' },
            { name: 'Detail2', price: 600, minImg: 'assets/photo/detail2.jpg', fullImg: 'assets/photo/img5.JPG' },
            { name: 'Detail3', price: 345, minImg: 'assets/photo/detail3.jpg', fullImg: 'assets/photo/img5.JPG' },
            { name: 'Detail4', price: 800, minImg: 'assets/photo/detail4.jpg', fullImg: 'assets/photo/img5.JPG' },
        ];
        this.dronesArr = [
            { name: 'DJI Mavic PRO', price: 34000, minImg: 'assets/photo/dronMavicPro.jpg', fullImg: 'assets/photo/img5.JPG', charge: '20', controlLength: '3',
                speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12', details: this.detailsArr },
            { name: 'DJI Mavic 2 PRO/ZOOM', price: 34000, minImg: 'assets/photo/dronMavic2Pro.jpg', fullImg: 'assets/photo/img5.JPG', charge: '20', controlLength: '3',
                speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12', details: this.detailsArr },
            { name: 'DJI Mavic Air', price: 68000, minImg: 'assets/photo/dronMavicAir.jpg', fullImg: 'assets/photo/img5.JPG', charge: '20', controlLength: '2',
                speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12', details: this.detailsArr },
            { name: 'DJI Phantom 3', price: 9000, minImg: 'assets/photo/dronPhantom3.jpg', fullImg: 'assets/photo/img5.JPG', charge: '30', controlLength: '4',
                speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12', details: this.detailsArr },
            { name: 'DJI Phantom 4', price: 80000, minImg: 'assets/photo/dronPhantom4.jpg', fullImg: 'assets/photo/img5.JPG', charge: '40', controlLength: '1',
                speed: '60', sensorLength: '30', stabilizer: '2', pixels: '12', details: this.detailsArr },
            { name: 'XIAOMI MI DRONE 4K', price: 34000, minImg: 'assets/photo/dronXiaomiMi.jpg', fullImg: 'assets/photo/img5.JPG', charge: '20', controlLength: '3',
                speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12', details: this.detailsArr },
        ];
    };
    DronesCatalogComponent.prototype.openViewDetailModal = function (element) {
        var dialogRef = this.dialog.open(_detail_view_modal_detail_view_modal_component__WEBPACK_IMPORTED_MODULE_2__["DetailViewModalComponent"], {
            width: '80vw',
            data: {
                element: element
            }
        });
    };
    DronesCatalogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drones-catalog',
            template: __webpack_require__(/*! ./drones-catalog.component.html */ "./src/app/drones-catalog/drones-catalog.component.html"),
            styles: [__webpack_require__(/*! ./drones-catalog.component.scss */ "./src/app/drones-catalog/drones-catalog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], DronesCatalogComponent);
    return DronesCatalogComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-wrapper\" id=\"contacts\">\n\n  <div class=\"logo-display\" style=\"margin-top: 30px\">\n    <img class=\"header-logo-img\" src=\"assets/photo/logo.png\" style=\"width: 157px;height: 80px;\">\n  </div>\n\n  <div class=\"footer-title\">\n    Контакти\n  </div>\n  <div class=\"footer-content\">\n    Телефон\n  </div>\n  <div class=\"footer-content\">\n    (063) 148 49 24, (099) 552 13 95, (098) 644 21 35\n  </div>\n  <div class=\"footer-content\">\n    dronix@gmail.com\n  </div>\n  <div class=\"footer-content\">\n    Адреса: м. Львів, вул. Богдана Хмельницького 48\n  </div>\n  <div class=\"footer-call-us\">\n    Подзвоніть нам!\n  </div>\n\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n  </agm-map>\n</div>\n\n<!-- copyright -->\n\n<div class=\"copyright\">\n  Copyright @ 2019 Dronix. All Right Reserved\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-wrapper {\n  text-align: center; }\n\n.footer-title {\n  font-size: 36px;\n  margin-bottom: 20px; }\n\n.footer-content {\n  padding: 4px 0; }\n\n.footer-call-us {\n  font-size: 32px;\n  padding: 12px 0; }\n\nagm-map {\n  height: 300px; }\n\n.copyright {\n  background-color: black;\n  font-size: 12px;\n  color: #ffffff;\n  padding: 2px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmhpaS9Eb2N1bWVudHMvUHJvamVjdHMvZHJvbml4L3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9vdGVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9vdGVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiA0cHggMDtcbn1cblxuLmZvb3Rlci1jYWxsLXVzIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uY29weXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.lat = 49.8512859;
        this.lng = 24.0299442;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/service/service.component.html":
/*!************************************************!*\
  !*** ./src/app/service/service.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"service-wrapper\" id=\"service\">\n  <div class=\"service-title\">\n    Наші Послуги\n  </div>\n\n  <div class=\"second-title\">\n    Діагностика і ремонт квадрокоптерів\n  </div>\n  <div class=\"drone-service\">\n    <div class=\"block-4\">\n      <div class=\"icon\">\n        <i class=\"material-icons\">\n          assignment_turned_in\n        </i>\n      </div>\n      <div class=\"title\">\n        Гарантія на виконані роботи\n      </div>\n      <div class=\"content\">\n        Ми впевнені в якості наданих нами послуг тому надаємо гарантію на виконані роботи.\n      </div>\n    </div>\n\n    <div class=\"block-4\">\n      <div class=\"icon\">\n        <i class=\"material-icons\">\n          build\n        </i>\n      </div>\n      <div class=\"title\">\n        Ремонт з сертифікованих деталей\n      </div>\n      <div class=\"content\">\n        Ремонт виконують професійні майстри. <br>\n        Вся техніка після ремонту проходитить спеціальне тестування.\n      </div>\n    </div>\n\n    <div class=\"block-4\">\n      <div class=\"icon\">\n        <i class=\"material-icons\">\n          query_builder\n        </i>\n      </div>\n      <div class=\"title\">\n        Терміновий ремонт\n      </div>\n      <div class=\"content\">\n        В деяких випадках ми можемо провести терміновий ремонт, але за відповідну оплату.\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"drone-used\">\n    <div class=\"used-text\">\n      <div class=\"third-title\">\n        Викуп і продаж Б/У квадрокоптерів\n      </div>\n\n      <div class=\"used-full-content\">\n\n        <div class=\"used-content\">\n          <i class=\"material-icons icon\">\n            fiber_manual_record\n          </i>\n          Попали в аварію?\n          <br>\n          Ми готові викупити Ваш апарат на запчастини.\n        </div>\n\n        <div class=\"used-content\">\n          <i class=\"material-icons icon\">\n            fiber_manual_record\n          </i>\n          Також пропонуємо Вам б/у квадрокоптери, за вигідною ціною, які пройшли всі тестування і готові до польотів.\n        </div>\n      </div>\n\n    </div>\n    <div class=\"used-image\">\n      <img src=\"assets/photo/crash-drone.jpeg\" alt=\"\">\n    </div>\n  </div>\n\n  <div class=\"drone-used justify-reverse\">\n    <div class=\"used-image\">\n      <img src=\"assets/photo/drone-control.jpg\" alt=\"\">\n    </div>\n    <div class=\"used-text\">\n      <div class=\"third-title\">\n        Курси навчання керуванням\n      </div>\n\n      <div class=\"used-full-content\">\n\n        Допомагаємо вивчити основи управління технікою.\n        <br>\n        <br>\n        Курс складається з теоретичної частини, де пояснюємо головні правила управління,\n        <br>\n        а також практичної, де Ви зможете на практиці\n        перевірити і закріпити свої знання.\n\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/service/service.component.scss":
/*!************************************************!*\
  !*** ./src/app/service/service.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".service-wrapper {\n  text-align: center; }\n\n.service-title {\n  font-size: 36px;\n  margin: 20px 0; }\n\n.drone-service {\n  display: flex;\n  margin: 10px 52px;\n  justify-content: space-around; }\n\n.drone-service .block-4 {\n    max-width: 365px;\n    padding: 20px;\n    border: 1px solid #e0e0e0;\n    box-shadow: 3px 3px 6px grey;\n    margin: 0 10px; }\n\n.drone-service .icon i {\n    font-size: 72px;\n    color: #148bbc; }\n\n.drone-service .title {\n    font-size: 20px;\n    margin-bottom: 10px; }\n\n.drone-service .content {\n    text-align: left; }\n\n.second-title {\n  background-color: #148bbc;\n  color: white;\n  font-size: 24px;\n  margin-bottom: 36px;\n  padding: 8px; }\n\n.drone-used {\n  margin: 58px 0;\n  display: flex; }\n\n.drone-used img {\n    width: 100%; }\n\n.drone-used .used-full-content {\n    font-size: 18px;\n    text-align: left;\n    margin: 30px; }\n\n.drone-used .used-full-content .used-content {\n      margin: 10px; }\n\n.drone-used .used-full-content .icon {\n      color: #148bbc; }\n\n.third-title {\n  background-color: #148bbc;\n  color: white;\n  font-size: 24px;\n  padding: 8px; }\n\n.justify-reverse {\n  margin-bottom: 0; }\n\n@media all and (max-width: 980px) {\n  .drone-service {\n    display: flex;\n    justify-content: space-around;\n    flex-direction: column;\n    text-align: -webkit-center; }\n    .drone-service .block-4 {\n      margin: 10px 0; }\n  .drone-used {\n    flex-direction: column; }\n    .drone-used img {\n      width: 100%;\n      box-sizing: border-box;\n      padding: 30px; }\n  .justify-reverse {\n    flex-direction: column-reverse; } }\n\n@media all and (min-width: 981px) {\n  .used-image {\n    max-width: 40%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmhpaS9Eb2N1bWVudHMvUHJvamVjdHMvZHJvbml4L3NyYy9hcHAvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDZCQUE2QixFQUFBOztBQUgvQjtJQU1JLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixjQUFjLEVBQUE7O0FBVmxCO0lBZ0JNLGVBQWU7SUFDZixjQUFjLEVBQUE7O0FBakJwQjtJQXNCSSxlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7O0FBdkJ2QjtJQTJCSSxnQkFBZ0IsRUFBQTs7QUFLcEI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsY0FBYztFQUNkLGFBQWEsRUFBQTs7QUFGZjtJQUtJLFdBQVcsRUFBQTs7QUFMZjtJQVNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWSxFQUFBOztBQVhoQjtNQWVNLFlBQVksRUFBQTs7QUFmbEI7TUFtQk0sY0FBYyxFQUFBOztBQU1wQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUVFO0lBQ0UsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsMEJBQTBCLEVBQUE7SUFKNUI7TUFPSSxjQUFjLEVBQUE7RUFLbEI7SUFDRSxzQkFBc0IsRUFBQTtJQUR4QjtNQUlJLFdBQVc7TUFDWCxzQkFBc0I7TUFDdEIsYUFBYSxFQUFBO0VBSWpCO0lBQ0UsOEJBQThCLEVBQUEsRUFDL0I7O0FBSUg7RUFDRTtJQUNFLGNBQWMsRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcnZpY2Utd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlcnZpY2UtdGl0bGUge1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4uZHJvbmUtc2VydmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTBweCA1MnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAuYmxvY2stNCB7XG4gICAgbWF4LXdpZHRoOiAzNjVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA2cHggZ3JleTtcbiAgICBtYXJnaW46IDAgMTBweDtcblxuICB9XG5cbiAgLmljb24ge1xuICAgIGkge1xuICAgICAgZm9udC1zaXplOiA3MnB4O1xuICAgICAgY29sb3I6ICMxNDhiYmM7XG4gICAgfVxuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbn1cblxuLnNlY29uZC10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDhiYmM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5kcm9uZS11c2VkIHtcbiAgbWFyZ2luOiA1OHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC51c2VkLWZ1bGwtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIC8vd2lkdGg6IDcwJTtcblxuICAgIC51c2VkLWNvbnRlbnQge1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgIGNvbG9yOiAjMTQ4YmJjO1xuICAgIH1cbiAgfVxuXG59XG5cbi50aGlyZC10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDhiYmM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5qdXN0aWZ5LXJldmVyc2Uge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xuXG4gIC5kcm9uZS1zZXJ2aWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG5cbiAgICAuYmxvY2stNCB7XG4gICAgICBtYXJnaW46IDEwcHggMDtcbiAgICB9XG5cbiAgfVxuXG4gIC5kcm9uZS11c2VkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgfVxuICB9XG5cbiAgLmp1c3RpZnktcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG5cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogOTgxcHgpIHtcbiAgLnVzZWQtaW1hZ2Uge1xuICAgIG1heC13aWR0aDogNDAlO1xuICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/service/service.component.ts":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.scss */ "./src/app/service/service.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/slider/slider.component.html":
/*!**********************************************!*\
  !*** ./src/app/slider/slider.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- slider -->\n<div class=\"slider-top\" id=\"main\"></div>\n\n<ngx-hm-carousel\n  [(ngModel)]=\"index\"\n  [autoplay-speed]=\"speed\"\n  [autoplay]=\"autoplay\"\n  [autoplay-direction]=\"direction\"\n  [infinite]=\"infinite\"\n  [between-delay]=\"2000\"\n  [aniTime]=\"100\"\n  class=\"carousel c-accent\">\n\n  <section ngx-hm-carousel-container class=\"content\">\n    <article class=\"item cursor-pointer fade_animation\"\n             ngx-hm-carousel-item\n             *ngFor=\"let avatar of avatars; let i = index\"\n             [ngClass]=\"{'visible': index===i}\">\n      <div class=\"img\" [style.backgroundImage]=\"'url('+avatar.url+')'\">\n      </div>\n    </article>\n  </section>\n\n  <ng-template #carouselPrev>\n    <div class=\"click-area\">\n      <i class=\"material-icons\">\n        keyboard_arrow_left\n      </i>\n    </div>\n  </ng-template>\n  <ng-template #carouselNext>\n    <div class=\"click-area\">\n      <i class=\"material-icons\">\n        keyboard_arrow_right\n      </i>\n    </div>\n  </ng-template>\n\n  <ng-template #carouselDot let-model>\n    <div class=\"ball bg-accent\" [class.visible]=\"model.index === model.currentIndex\"></div>\n  </ng-template>\n\n</ngx-hm-carousel>\n\n<!--slider end-->\n"

/***/ }),

/***/ "./src/app/slider/slider.component.scss":
/*!**********************************************!*\
  !*** ./src/app/slider/slider.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* slider */\n/*.slider-wrapper {*/\n/*padding-top: 70px;*/\n/*}*/\n.transition {\n  transition: all 0.2s ease-in-out; }\n.carousel .content {\n  display: flex; }\n.carousel .content .item {\n    width: 100%;\n    display: block;\n    opacity: 0; }\n.carousel .content .item.fade_animation {\n      transition: opacity 0.295s linear 0.2s; }\n.carousel .content .item.visible {\n      opacity: 1; }\n.carousel .content .item .img {\n      width: 100%;\n      display: block;\n      background-size: cover;\n      background-position: center;\n      height: 0;\n      padding-bottom: 28%; }\n.carousel .content .item:last-child,\n  .carousel .content .item:first-child {\n    opacity: 0; }\n.carousel .ball {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: black;\n  border: 2px solid;\n  opacity: 0.5;\n  color: white; }\n.carousel .ball.visible {\n    opacity: 1; }\n.carousel .progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  background: #ff5252; }\n.carousel .click-area {\n  width: 50px;\n  text-align: center;\n  color: white; }\n.carousel .click-area i {\n    font-size: 3em; }\n/*slider end*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmhpaS9Eb2N1bWVudHMvUHJvamVjdHMvZHJvbml4L3NyYy9hcHAvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBRUEsb0JBQUE7QUFDQSxxQkFBQTtBQUNBLElBQUE7QUFLQTtFQUNFLGdDQUE0QyxFQUFBO0FBRzlDO0VBRUksYUFBYSxFQUFBO0FBRmpCO0lBS00sV0FBVztJQUNYLGNBQWM7SUFFZCxVQUFVLEVBQUE7QUFSaEI7TUFZUSxzQ0FuQmEsRUFBQTtBQU9yQjtNQWdCUSxVQUFVLEVBQUE7QUFoQmxCO01Bb0JRLFdBQVc7TUFDWCxjQUFjO01BQ2Qsc0JBQXNCO01BQ3RCLDJCQUEyQjtNQUMzQixTQUFTO01BQ1QsbUJBQW1CLEVBQUE7QUF6QjNCOztJQStCTSxVQUFVLEVBQUE7QUEvQmhCO0VBcUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVksRUFBQTtBQTNDaEI7SUE4Q00sVUFBVSxFQUFBO0FBOUNoQjtFQW1ESSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBO0FBeER2QjtFQTRESSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtBQTlEaEI7SUFpRU0sY0FBYyxFQUFBO0FBV3BCLGFBQUEiLCJmaWxlIjoic3JjL2FwcC9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc2xpZGVyICovXG5cbi8qLnNsaWRlci13cmFwcGVyIHsqL1xuLypwYWRkaW5nLXRvcDogNzBweDsqL1xuLyp9Ki9cblxuJHRyYW5zaXRpb25fdGltZTogLjJzO1xuXG5cbi50cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsICR0cmFuc2l0aW9uX3RpbWUgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXJvdXNlbCB7XG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLml0ZW0ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIC8vIGZhZGVcbiAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgIC8vIHVzaW5nIGRlbGF5IHRvIHByZXZlbnQgbGVmdCBjaGFuZ2Ugc2hvdyBlcnJvclxuICAgICAgJi5mYWRlX2FuaW1hdGlvbiB7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yOTVzIGxpbmVhciAkdHJhbnNpdGlvbl90aW1lO1xuICAgICAgfVxuXG4gICAgICAmLnZpc2libGUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICAuaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI4JTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbTpsYXN0LWNoaWxkLFxuICAgIC5pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gIH1cblxuICAuYmFsbCB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgJi52aXNpYmxlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cbiAgLnByb2dyZXNzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmNTI1MjtcbiAgfVxuXG4gIC5jbGljay1hcmVhIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDNlbTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogODE1cHgpIHtcbiAgLnNsaWRlci10b3Age1xuICAgIC8vcGFkZGluZy10b3A6IDU1cHg7XG4gIH1cbn1cblxuLypzbGlkZXIgZW5kKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/slider/slider.component.ts":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.index = 0;
        this.speed = 4000;
        this.infinite = true;
        this.direction = 'right';
        this.directionToggle = true;
        this.autoplay = true;
        this.avatars = '123'.split('').map(function (x, i) {
            var num = i;
            // const num = Math.floor(Math.random() * 1000);
            return {
                url: "assets/photo/photo" + num + ".jpg",
                title: "" + num
            };
        });
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/slider/slider.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
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

module.exports = __webpack_require__(/*! /home/serhii/Documents/Projects/dronix/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map