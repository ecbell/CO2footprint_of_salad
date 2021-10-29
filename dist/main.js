/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n// Your entry file is src / index.js.I'd recommend adding \n// a DOMContentLoaded event listener, and in that callback doing \n// some basic DOM manipulation. \n// Test that it works in the browser; \n// this way, you know your webpack is working and everything is hooked up correctly.\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"Hello World\");\n  var main = document.getElementById(\"main\");\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBNkMsWUFBTTtBQUNuREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBLE1BQU1DLElBQUksR0FBR0osUUFBUSxDQUFDSyxjQUFULENBQXdCLE1BQXhCLENBQWI7QUFDQSxNQUFJTix3REFBSixDQUFZSyxJQUFaO0FBQ0MsQ0FKRCIsInNvdXJjZXMiOlsid2VicGFjazovL0NPMmZvb3RwcmludF9vZl9zYWxhZC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFlvdXIgZW50cnkgZmlsZSBpcyBzcmMgLyBpbmRleC5qcy5JJ2QgcmVjb21tZW5kIGFkZGluZyBcbi8vIGEgRE9NQ29udGVudExvYWRlZCBldmVudCBsaXN0ZW5lciwgYW5kIGluIHRoYXQgY2FsbGJhY2sgZG9pbmcgXG4vLyBzb21lIGJhc2ljIERPTSBtYW5pcHVsYXRpb24uIFxuLy8gVGVzdCB0aGF0IGl0IHdvcmtzIGluIHRoZSBicm93c2VyOyBcbi8vIHRoaXMgd2F5LCB5b3Uga25vdyB5b3VyIHdlYnBhY2sgaXMgd29ya2luZyBhbmQgZXZlcnl0aGluZyBpcyBob29rZWQgdXAgY29ycmVjdGx5LlxuaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCkgPT4ge1xuY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZFwiKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5uZXcgRXhhbXBsZShtYWluKTtcbn0pXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiRXhhbXBsZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Example = /*#__PURE__*/function () {\n  function Example(ele) {\n    _classCallCheck(this, Example);\n\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>I'm Alive! </h1>\";\n    this.handleclick = this.handleclick.bind(this);\n    this.ele.addEventListener(\"click\", this.handleclick);\n  }\n\n  _createClass(Example, [{\n    key: \"handleclick\",\n    value: function handleclick() {\n      this.ele.children[0].innerText = \"Ouch!\";\n    }\n  }]);\n\n  return Example;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBTUE7QUFDSixtQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtBLEdBQUwsQ0FBU0MsU0FBVCxHQUFxQixzQkFBckI7QUFFQSxTQUFLQyxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsU0FBS0gsR0FBTCxDQUFTSSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxLQUFLRixXQUF4QztBQUNEOzs7O1dBRUQsdUJBQWM7QUFDWixXQUFLRixHQUFMLENBQVNLLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUJDLFNBQXJCLEdBQWlDLE9BQWpDO0FBQ0Q7Ozs7OztBQUdILCtEQUFlUCxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ08yZm9vdHByaW50X29mX3NhbGFkLy4vc3JjL3NjcmlwdHMvZXhhbXBsZS5qcz9mY2VlIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV4YW1wbGV7XG4gIGNvbnN0cnVjdG9yKGVsZSkge1xuICAgIHRoaXMuZWxlID0gZWxlOyBcbiAgICB0aGlzLmVsZS5pbm5lckhUTUwgPSBcIjxoMT5JJ20gQWxpdmUhIDwvaDE+XCI7XG4gICAgXG4gICAgdGhpcy5oYW5kbGVjbGljayA9IHRoaXMuaGFuZGxlY2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVjbGljayk7XG4gIH1cblxuICBoYW5kbGVjbGljaygpIHtcbiAgICB0aGlzLmVsZS5jaGlsZHJlblswXS5pbm5lclRleHQgPSBcIk91Y2ghXCJcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlO1xuXG5cbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiZWxlIiwiaW5uZXJIVE1MIiwiaGFuZGxlY2xpY2siLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Expected string.\n  ╷\n2 │ @import\n  │        ^\n  ╵\n  src/index.scss 2:8  root stylesheet\n    at tryRunOrWebpackError (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/webpack/lib/HookWebpackError.js:88:9)\n    at __webpack_require_module__ (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/webpack/lib/Compilation.js:4963:12)\n    at __webpack_require__ (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/webpack/lib/Compilation.js:4920:18)\n    at asyncLib.eachLimit.err (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/webpack/lib/Compilation.js:4991:20)\n    at symbolIterator (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/tapable/lib/Hook.js:18:14)\n    at asyncLib.eachLimit (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/webpack/lib/Compilation.js:4898:43)\n    at symbolIterator (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/neo-async/async.js:3482:9)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Expected string.\n  ╷\n2 │ @import\n  │        ^\n  ╵\n  src/index.scss 2:8  root stylesheet\n    at Object.<anonymous> (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/sass-loader/dist/cjs.js!/Users/Emily_1/Desktop/CO2footprint_of_salad/src/index.scss:1:7)\n    at compilation.hooks.executeModule.tap (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:432:11)\n    at Hook.eval [as call] (eval at create (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/tapable/lib/Hook.js:14:14)\n    at tryRunOrWebpackError (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/webpack/lib/Compilation.js:4965:39)\n    at tryRunOrWebpackError (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/webpack/lib/HookWebpackError.js:83:7)\n    at __webpack_require_module__ (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/webpack/lib/Compilation.js:4963:12)\n    at __webpack_require__ (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/webpack/lib/Compilation.js:4920:18)\n    at asyncLib.eachLimit.err (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/webpack/lib/Compilation.js:4991:20)\n    at symbolIterator (/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/neo-async/async.js:3485:9)\n\nGenerated code for /Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!/Users/Emily_1/Desktop/CO2footprint_of_salad/node_modules/sass-loader/dist/cjs.js!/Users/Emily_1/Desktop/CO2footprint_of_salad/src/index.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: Expected string.\\n  ╷\\n2 │ @import\\n  │        ^\\n  ╵\\n  src/index.scss 2:8  root stylesheet\");");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;