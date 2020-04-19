/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!************************************!*\
  !*** multi ./src/renderers/dom.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/renderers/dom.js */"4qhl");


/***/ }),

/***/ "4qhl":
/*!******************************!*\
  !*** ./src/renderers/dom.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"i8i4\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/App */ \"r8ck\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.scss */ \"sg+I\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_App__WEBPACK_IMPORTED_MODULE_2__[\"App\"], {\n  initialData: window.__R_DATA.initialData\n}), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNHFobC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvZG9tLmpzP2UyYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgeyBBcHAgfSBmcm9tICdjb21wb25lbnRzL0FwcCc7XG5cbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5SZWFjdERPTS5oeWRyYXRlKFxuICA8QXBwIGluaXRpYWxEYXRhPXt3aW5kb3cuX19SX0RBVEEuaW5pdGlhbERhdGF9IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4qhl\n");

/***/ }),

/***/ "Xwlx":
/*!****************************************!*\
  !*** ./src/components/StarsDisplay.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math-utils */ \"e+oM\");\n\n\n\nvar StarsDisplay = function StarsDisplay(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _math_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].range(1, props.count).map(function (starId) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: starId,\n      className: \"star\"\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StarsDisplay);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWHdseC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0YXJzRGlzcGxheS5qcz81ZjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vbWF0aC11dGlsc1wiXG5cbmNvbnN0IFN0YXJzRGlzcGxheSA9IHByb3BzID0+IChcblx0PD5cbiAgICB7dXRpbHMucmFuZ2UoMSwgcHJvcHMuY291bnQpLm1hcChzdGFySWQgPT5cbiAgICAgIDxkaXYga2V5PXtzdGFySWR9IGNsYXNzTmFtZT1cInN0YXJcIiAvPlxuICAgICl9XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhcnNEaXNwbGF5OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUZBO0FBQ0E7QUFPQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///Xwlx\n");

/***/ }),

/***/ "e+oM":
/*!***************************!*\
  !*** ./src/math-utils.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Math science\nvar utils = {\n  // Sum an array\n  sum: function sum(arr) {\n    return arr.reduce(function (acc, curr) {\n      return acc + curr;\n    }, 0);\n  },\n  // create an array of numbers between min and max (edges included)\n  range: function range(min, max) {\n    return Array.from({\n      length: max - min + 1\n    }, function (_, i) {\n      return min + i;\n    });\n  },\n  // pick a random number between min and max (edges included)\n  random: function random(min, max) {\n    return min + Math.floor(Math.random() * (max - min + 1));\n  },\n  // Given an array of numbers and a max...\n  // Pick a random sum (< max) from the set of all available sums in arr\n  randomSumIn: function randomSumIn(arr, max) {\n    var sets = [[]];\n    var sums = [];\n\n    for (var i = 0; i < arr.length; i++) {\n      for (var j = 0, len = sets.length; j < len; j++) {\n        var candidateSet = sets[j].concat(arr[i]);\n        var candidateSum = utils.sum(candidateSet);\n\n        if (candidateSum <= max) {\n          sets.push(candidateSet);\n          sums.push(candidateSum);\n        }\n      }\n    }\n\n    return sums[utils.random(0, sums.length - 1)];\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZStvTS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYXRoLXV0aWxzLmpzPzdiZWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTWF0aCBzY2llbmNlXG5jb25zdCB1dGlscyA9IHtcbiAgICAvLyBTdW0gYW4gYXJyYXlcbiAgICBzdW06IGFyciA9PiBhcnIucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIGN1cnIsIDApLFxuICBcbiAgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgbnVtYmVycyBiZXR3ZWVuIG1pbiBhbmQgbWF4IChlZGdlcyBpbmNsdWRlZClcbiAgICByYW5nZTogKG1pbiwgbWF4KSA9PiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBtYXggLSBtaW4gKyAxIH0sIChfLCBpKSA9PiBtaW4gKyBpKSxcbiAgXG4gICAgLy8gcGljayBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heCAoZWRnZXMgaW5jbHVkZWQpXG4gICAgcmFuZG9tOiAobWluLCBtYXgpID0+IG1pbiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSksXG4gIFxuICAgIC8vIEdpdmVuIGFuIGFycmF5IG9mIG51bWJlcnMgYW5kIGEgbWF4Li4uXG4gICAgLy8gUGljayBhIHJhbmRvbSBzdW0gKDwgbWF4KSBmcm9tIHRoZSBzZXQgb2YgYWxsIGF2YWlsYWJsZSBzdW1zIGluIGFyclxuICAgIHJhbmRvbVN1bUluOiAoYXJyLCBtYXgpID0+IHtcbiAgICAgIGNvbnN0IHNldHMgPSBbW11dO1xuICAgICAgY29uc3Qgc3VtcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDAsIGxlbiA9IHNldHMubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBjYW5kaWRhdGVTZXQgPSBzZXRzW2pdLmNvbmNhdChhcnJbaV0pO1xuICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZVN1bSA9IHV0aWxzLnN1bShjYW5kaWRhdGVTZXQpO1xuICAgICAgICAgIGlmIChjYW5kaWRhdGVTdW0gPD0gbWF4KSB7XG4gICAgICAgICAgICBzZXRzLnB1c2goY2FuZGlkYXRlU2V0KTtcbiAgICAgICAgICAgIHN1bXMucHVzaChjYW5kaWRhdGVTdW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN1bXNbdXRpbHMucmFuZG9tKDAsIHN1bXMubGVuZ3RoIC0gMSldO1xuICAgIH0sXG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTFCQTtBQTZCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///e+oM\n");

/***/ }),

/***/ "r8ck":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math-utils */ \"e+oM\");\n/* harmony import */ var _StarsDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StarsDisplay */ \"Xwlx\");\n\n\n\n\n\nvar PlayNumber = function PlayNumber(props) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    className: \"number\",\n    style: {\n      backgroundColor: colors[props.status]\n    },\n    onClick: function onClick() {\n      return props.onClick(props.number, props.status);\n    }\n  }, props.number);\n};\n\nvar PlayAgain = function PlayAgain(props) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"game-done\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"message\",\n    style: {\n      color: props.gameStatus === 'lost' ? 'red' : 'green'\n    }\n  }, props.gameStatus === 'lost' ? 'Game over, jerk' : 'Cool win'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    onClick: props.onClick\n  }, \"Play Again\"));\n}; // Custom hook\n\n\nvar useGameState = function useGameState() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].random(1, 9)),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      stars = _useState2[0],\n      setStars = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].range(1, 9)),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      availableNums = _useState4[0],\n      setAvailableNums = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      candidateNums = _useState6[0],\n      setCandidateNums = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(15),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      secondsLeft = _useState8[0],\n      setSecondsLeft = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (secondsLeft > 0 && availableNums.length > 0) {\n      var timerId = setTimeout(function () {\n        setSecondsLeft(secondsLeft - 1);\n      }, 1000);\n      return function () {\n        return clearTimeout(timerId);\n      };\n    }\n  });\n\n  var setGameState = function setGameState(newCandidateNums) {\n    if (_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sum(newCandidateNums) !== stars) {\n      setCandidateNums(newCandidateNums);\n    } else {\n      var newAvailableNums = availableNums.filter(function (n) {\n        return !newCandidateNums.includes(n);\n      });\n      setStars(_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].randomSumIn(newAvailableNums, 9));\n      setAvailableNums(newAvailableNums);\n      setCandidateNums([]);\n    }\n  };\n\n  return {\n    stars: stars,\n    availableNums: availableNums,\n    candidateNums: candidateNums,\n    secondsLeft: secondsLeft,\n    setGameState: setGameState\n  };\n};\n\nvar Game = function Game(props) {\n  var _useGameState = useGameState(),\n      stars = _useGameState.stars,\n      availableNums = _useGameState.availableNums,\n      candidateNums = _useGameState.candidateNums,\n      secondsLeft = _useGameState.secondsLeft,\n      setGameState = _useGameState.setGameState;\n\n  var candidatesAreWrong = _math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sum(candidateNums) > stars;\n  var gameStatus = availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';\n\n  var resetGame = function resetGame() {\n    setStars(_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].random(1, 9));\n    setAvailableNums(_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].range(1, 9));\n    setCandidateNums([]);\n  };\n\n  var numberStatus = function numberStatus(number) {\n    if (!availableNums.includes(number)) {\n      return 'used';\n    }\n\n    if (candidateNums.includes(number)) {\n      return candidatesAreWrong ? 'wrong' : 'candidate';\n    }\n\n    return 'available';\n  };\n\n  var onNumberClick = function onNumberClick(number, currentStatus) {\n    if (gameStatus !== 'active' || currentStatus == 'used') {\n      return;\n    }\n\n    var newCandidateNums = currentStatus === 'available' ? candidateNums.concat(number) : candidateNums.filter(function (cn) {\n      return cn !== number;\n    });\n    setGameState(newCandidateNums);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"game\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"help\"\n  }, \"Pick 1 or more numbers that sum to the number of stars\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"body\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"left\"\n  }, gameStatus !== 'active' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayAgain, {\n    onClick: props.startNewGame,\n    gameStatus: gameStatus\n  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StarsDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    count: stars\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"right\"\n  }, _math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].range(1, 9).map(function (number) {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayNumber, {\n      key: number,\n      status: numberStatus(number),\n      number: number,\n      onClick: onNumberClick\n    });\n  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"timer\"\n  }, \"Time Remaining: \", secondsLeft));\n};\n\nvar StarMatch = function StarMatch() {\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),\n      gameId = _useState10[0],\n      setGameId = _useState10[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Game, {\n    key: gameId,\n    startNewGame: function startNewGame() {\n      return setGameId(gameId + 1);\n    }\n  });\n}; // Color Theme\n\n\nvar colors = {\n  available: 'lightgray',\n  used: 'lightgreen',\n  wrong: 'lightcoral',\n  candidate: 'deepskyblue'\n};\nfunction App() {\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState11, 2),\n      count = _useState12[0],\n      setCount = _useState12[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StarMatch, null);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjhjay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC5qcz9hZmM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi9tYXRoLXV0aWxzXCJcbmltcG9ydCBTdGFyc0Rpc3BsYXkgZnJvbSAnLi9TdGFyc0Rpc3BsYXknO1xuXG5jb25zdCBQbGF5TnVtYmVyID0gcHJvcHMgPT4gKFxuXHQ8YnV0dG9uXG4gICAgY2xhc3NOYW1lPVwibnVtYmVyXCJcbiAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogY29sb3JzW3Byb3BzLnN0YXR1c119fVxuICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2socHJvcHMubnVtYmVyLCBwcm9wcy5zdGF0dXMpfVxuICA+XG4gICAge3Byb3BzLm51bWJlcn1cbiAgPC9idXR0b24+XG4pO1xuXG5jb25zdCBQbGF5QWdhaW4gPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1kb25lXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPSdtZXNzYWdlJ1xuICAgICAgc3R5bGU9e3tjb2xvcjogcHJvcHMuZ2FtZVN0YXR1cyA9PT0gJ2xvc3QnID8gJ3JlZCcgOiAnZ3JlZW4nfX1cbiAgICA+XG4gICAgICB7cHJvcHMuZ2FtZVN0YXR1cyA9PT0gJ2xvc3QnID8gJ0dhbWUgb3ZlciwgamVyaycgOiAnQ29vbCB3aW4nfVxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gb25DbGljaz17cHJvcHMub25DbGlja30+UGxheSBBZ2FpbjwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5cbi8vIEN1c3RvbSBob29rXG5jb25zdCB1c2VHYW1lU3RhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGFycywgc2V0U3RhcnNdID0gdXNlU3RhdGUodXRpbHMucmFuZG9tKDEsIDkpKTtcbiAgY29uc3QgW2F2YWlsYWJsZU51bXMsIHNldEF2YWlsYWJsZU51bXNdID0gdXNlU3RhdGUodXRpbHMucmFuZ2UoMSwgOSkpO1xuICBjb25zdCBbY2FuZGlkYXRlTnVtcywgc2V0Q2FuZGlkYXRlTnVtc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWNvbmRzTGVmdCwgc2V0U2Vjb25kc0xlZnRdID0gdXNlU3RhdGUoMTUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlY29uZHNMZWZ0ID4gMCAmJiBhdmFpbGFibGVOdW1zLmxlbmd0aCA+IDApIHtcbiAgICAgY29uc3QgdGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTZWNvbmRzTGVmdChzZWNvbmRzTGVmdCAtIDEpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICB9XG4gIH0pO1xuICBcbiAgY29uc3Qgc2V0R2FtZVN0YXRlID0gKG5ld0NhbmRpZGF0ZU51bXMpID0+IHtcbiAgICBpZiAodXRpbHMuc3VtKG5ld0NhbmRpZGF0ZU51bXMpICE9PSBzdGFycykge1xuICAgICAgICBzZXRDYW5kaWRhdGVOdW1zKG5ld0NhbmRpZGF0ZU51bXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld0F2YWlsYWJsZU51bXMgPSBhdmFpbGFibGVOdW1zLmZpbHRlcihcbiAgICAgICAgICBuID0+ICFuZXdDYW5kaWRhdGVOdW1zLmluY2x1ZGVzKG4pXG4gICAgICAgICk7XG4gICAgICAgIHNldFN0YXJzKHV0aWxzLnJhbmRvbVN1bUluKG5ld0F2YWlsYWJsZU51bXMsIDkpKTtcbiAgICAgICAgc2V0QXZhaWxhYmxlTnVtcyhuZXdBdmFpbGFibGVOdW1zKTtcbiAgICAgICAgc2V0Q2FuZGlkYXRlTnVtcyhbXSk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4geyBzdGFycywgYXZhaWxhYmxlTnVtcywgY2FuZGlkYXRlTnVtcywgc2Vjb25kc0xlZnQsIHNldEdhbWVTdGF0ZX1cbn07XG5cblxuY29uc3QgR2FtZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgc3RhcnMsXG4gICAgYXZhaWxhYmxlTnVtcyxcbiAgICBjYW5kaWRhdGVOdW1zLFxuICAgIHNlY29uZHNMZWZ0LFxuICAgIHNldEdhbWVTdGF0ZSxcbiAgfSA9IHVzZUdhbWVTdGF0ZSgpO1xuICBcbiAgY29uc3QgY2FuZGlkYXRlc0FyZVdyb25nID0gdXRpbHMuc3VtKGNhbmRpZGF0ZU51bXMpID4gc3RhcnM7XG4gIGNvbnN0IGdhbWVTdGF0dXMgPSBhdmFpbGFibGVOdW1zLmxlbmd0aCA9PT0gMFxuICAgID8gJ3dvbidcbiAgICA6IHNlY29uZHNMZWZ0ID09PSAwID8gJ2xvc3QnIDogJ2FjdGl2ZSdcbiAgXG4gIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICBzZXRTdGFycyh1dGlscy5yYW5kb20oMSwgOSkpO1xuICAgIHNldEF2YWlsYWJsZU51bXModXRpbHMucmFuZ2UoMSw5KSk7XG4gICAgc2V0Q2FuZGlkYXRlTnVtcyhbXSk7XG4gIH07XG4gIFxuICBcbiAgY29uc3QgbnVtYmVyU3RhdHVzID0gKG51bWJlcikgPT4ge1xuICAgIGlmICghYXZhaWxhYmxlTnVtcy5pbmNsdWRlcyhudW1iZXIpKSB7XG4gICAgICByZXR1cm4gJ3VzZWQnO1xuICAgIH1cbiAgICBpZiAoY2FuZGlkYXRlTnVtcy5pbmNsdWRlcyhudW1iZXIpKSB7XG4gICAgICByZXR1cm4gY2FuZGlkYXRlc0FyZVdyb25nID8gJ3dyb25nJzogJ2NhbmRpZGF0ZSc7IFxuICAgIH1cbiAgICByZXR1cm4gJ2F2YWlsYWJsZSc7XG4gIH07XG4gIFxuICBjb25zdCBvbk51bWJlckNsaWNrID0gKG51bWJlciwgY3VycmVudFN0YXR1cykgPT4ge1xuICAgIGlmIChnYW1lU3RhdHVzICE9PSAnYWN0aXZlJyB8fCBjdXJyZW50U3RhdHVzID09ICd1c2VkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdDYW5kaWRhdGVOdW1zID1cbiAgICAgIGN1cnJlbnRTdGF0dXMgPT09ICdhdmFpbGFibGUnXG4gICAgICAgID8gY2FuZGlkYXRlTnVtcy5jb25jYXQobnVtYmVyKVxuICAgICAgICA6IGNhbmRpZGF0ZU51bXMuZmlsdGVyKGNuID0+IGNuICE9PSBudW1iZXIpO1xuICAgIFxuICAgIHNldEdhbWVTdGF0ZShuZXdDYW5kaWRhdGVOdW1zKTtcbiAgfTtcbiAgICBcbiAgICBcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHBcIj5cbiAgICAgICAgUGljayAxIG9yIG1vcmUgbnVtYmVycyB0aGF0IHN1bSB0byB0aGUgbnVtYmVyIG9mIHN0YXJzXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgICB7Z2FtZVN0YXR1cyAhPT0gJ2FjdGl2ZScgPyAoXG4gICAgICAgICAgICA8UGxheUFnYWluIG9uQ2xpY2s9e3Byb3BzLnN0YXJ0TmV3R2FtZX0gZ2FtZVN0YXR1cz17Z2FtZVN0YXR1c30gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFN0YXJzRGlzcGxheSBjb3VudD17c3RhcnN9Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxuICAgICAgICBcdHt1dGlscy5yYW5nZSgxLCA5KS5tYXAobnVtYmVyID0+XG4gICAgICAgICAgXHQ8UGxheU51bWJlclxuICAgICAgICAgICAgICBrZXk9e251bWJlcn1cbiAgICAgICAgICAgICAgc3RhdHVzPXtudW1iZXJTdGF0dXMobnVtYmVyKX1cbiAgICAgICAgICAgICAgbnVtYmVyPXtudW1iZXJ9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uTnVtYmVyQ2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyXCI+VGltZSBSZW1haW5pbmc6IHtzZWNvbmRzTGVmdH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuY29uc3QgU3Rhck1hdGNoID0gKCkgPT4ge1xuICBjb25zdCBbZ2FtZUlkLCBzZXRHYW1lSWRdID0gdXNlU3RhdGUoMSk7XG4gIHJldHVybiA8R2FtZSBrZXk9e2dhbWVJZH0gc3RhcnROZXdHYW1lPXsoKSA9PiBzZXRHYW1lSWQoZ2FtZUlkICsgMSl9Lz47XG59XG5cbi8vIENvbG9yIFRoZW1lXG5jb25zdCBjb2xvcnMgPSB7XG4gIGF2YWlsYWJsZTogJ2xpZ2h0Z3JheScsXG4gIHVzZWQ6ICdsaWdodGdyZWVuJyxcbiAgd3Jvbmc6ICdsaWdodGNvcmFsJyxcbiAgY2FuZGlkYXRlOiAnZGVlcHNreWJsdWUnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgcmV0dXJuIChcbiAgICA8U3Rhck1hdGNoIC8+XG4gICk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUNBO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBTUE7QUFBQTtBQVJBO0FBQ0E7QUFDQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVVBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///r8ck\n");

/***/ }),

/***/ "sg+I":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2crSS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz8zOGE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///sg+I\n");

/***/ })

/******/ });