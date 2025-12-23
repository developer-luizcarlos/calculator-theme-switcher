/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/dom/body.ts"
/*!*********************************!*\
  !*** ./src/scripts/dom/body.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setThemeClassName: () => (/* binding */ setThemeClassName)
/* harmony export */ });
/* harmony import */ var _elements_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.ts */ "./src/scripts/dom/elements.ts");

function setThemeClassName(theme) {
  _elements_ts__WEBPACK_IMPORTED_MODULE_0__.$body.className = "".concat(theme, "-theme");
}

/***/ },

/***/ "./src/scripts/dom/elements.ts"
/*!*************************************!*\
  !*** ./src/scripts/dom/elements.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $body: () => (/* binding */ $body),
/* harmony export */   $deleteKey: () => (/* binding */ $deleteKey),
/* harmony export */   $labels: () => (/* binding */ $labels),
/* harmony export */   $operatorKeys: () => (/* binding */ $operatorKeys),
/* harmony export */   $regularKeys: () => (/* binding */ $regularKeys),
/* harmony export */   $resetKey: () => (/* binding */ $resetKey),
/* harmony export */   $resultKey: () => (/* binding */ $resultKey),
/* harmony export */   $screen: () => (/* binding */ $screen),
/* harmony export */   $thumb: () => (/* binding */ $thumb),
/* harmony export */   $toggle: () => (/* binding */ $toggle)
/* harmony export */ });
var $body = document.body;
var $deleteKey = document.querySelector(".key--delete");
var $labels = document.querySelectorAll(".label");
var $operatorKeys = document.querySelectorAll(".key--operator");
var $regularKeys = document.querySelectorAll(".key--regular");
var $resetKey = document.querySelector(".key--reset");
var $resultKey = document.querySelector(".key--result");
var $screen = document.querySelector(".screen");
var $thumb = document.querySelector(".thumb");
var $toggle = document.querySelector(".toggle");

/***/ },

/***/ "./src/scripts/dom/events.ts"
/*!***********************************!*\
  !*** ./src/scripts/dom/events.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initEvents: () => (/* binding */ initEvents)
/* harmony export */ });
/* harmony import */ var _elements_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.ts */ "./src/scripts/dom/elements.ts");
/* harmony import */ var _handlers_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers.ts */ "./src/scripts/dom/handlers.ts");


function initEvents() {
  document.addEventListener("DOMContentLoaded", function () {
    _handlers_ts__WEBPACK_IMPORTED_MODULE_1__.loadThemeHandler();
  });
  document.addEventListener("keydown", function (e) {
    _handlers_ts__WEBPACK_IMPORTED_MODULE_1__.keyboardHandler(e);
  });
  _elements_ts__WEBPACK_IMPORTED_MODULE_0__.$deleteKey.addEventListener("click", function () {
    _handlers_ts__WEBPACK_IMPORTED_MODULE_1__.deleteKeyHandler();
  });
  _elements_ts__WEBPACK_IMPORTED_MODULE_0__.$labels.forEach(function (label) {
    label.addEventListener("click", function () {
      _handlers_ts__WEBPACK_IMPORTED_MODULE_1__.labelHandler(label);
    });
  });
  _elements_ts__WEBPACK_IMPORTED_MODULE_0__.$operatorKeys.forEach(function (key) {
    key.addEventListener("click", function () {
      _handlers_ts__WEBPACK_IMPORTED_MODULE_1__.operatorKeyHandler(key);
    });
  });
  _elements_ts__WEBPACK_IMPORTED_MODULE_0__.$regularKeys.forEach(function (key) {
    key.addEventListener("click", function () {
      _handlers_ts__WEBPACK_IMPORTED_MODULE_1__.regularKeyHandler(key);
    });
  });
  _elements_ts__WEBPACK_IMPORTED_MODULE_0__.$resetKey.addEventListener("click", function () {
    _handlers_ts__WEBPACK_IMPORTED_MODULE_1__.resetKeyHandler();
  });
  _elements_ts__WEBPACK_IMPORTED_MODULE_0__.$resultKey.addEventListener("click", function () {
    _handlers_ts__WEBPACK_IMPORTED_MODULE_1__.resultKeyHandler();
  });
  _elements_ts__WEBPACK_IMPORTED_MODULE_0__.$toggle.addEventListener("click", function (e) {
    _handlers_ts__WEBPACK_IMPORTED_MODULE_1__.toggleHandler(e);
  });
}

/***/ },

/***/ "./src/scripts/dom/handlers.ts"
/*!*************************************!*\
  !*** ./src/scripts/dom/handlers.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteKeyHandler: () => (/* binding */ deleteKeyHandler),
/* harmony export */   keyboardHandler: () => (/* binding */ keyboardHandler),
/* harmony export */   labelHandler: () => (/* binding */ labelHandler),
/* harmony export */   loadThemeHandler: () => (/* binding */ loadThemeHandler),
/* harmony export */   operatorKeyHandler: () => (/* binding */ operatorKeyHandler),
/* harmony export */   regularKeyHandler: () => (/* binding */ regularKeyHandler),
/* harmony export */   resetKeyHandler: () => (/* binding */ resetKeyHandler),
/* harmony export */   resultKeyHandler: () => (/* binding */ resultKeyHandler),
/* harmony export */   toggleHandler: () => (/* binding */ toggleHandler)
/* harmony export */ });
/* harmony import */ var _helpers_helpers_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers.ts */ "./src/scripts/helpers/helpers.ts");
/* harmony import */ var _storage_theme_storage_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/theme.storage.ts */ "./src/scripts/storage/theme.storage.ts");
/* harmony import */ var _body_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body.ts */ "./src/scripts/dom/body.ts");
/* harmony import */ var _keyboard_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyboard.ts */ "./src/scripts/dom/keyboard.ts");
/* harmony import */ var _keys_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keys.ts */ "./src/scripts/dom/keys.ts");
/* harmony import */ var _screen_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screen.ts */ "./src/scripts/dom/screen.ts");
/* harmony import */ var _toggle_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggle.ts */ "./src/scripts/dom/toggle.ts");







function deleteKeyHandler() {
  _screen_ts__WEBPACK_IMPORTED_MODULE_5__.deleteLastDigit();
}
function labelHandler(label) {
  var _className$match;
  var className = label.className;
  var themeRegex = /light|dark|purple/;
  var currentTheme = _storage_theme_storage_ts__WEBPACK_IMPORTED_MODULE_1__.getTheme();
  var theme = (_className$match = className.match(themeRegex)) === null || _className$match === void 0 ? void 0 : _className$match[0];
  if (currentTheme === theme) {
    return;
  }
  _storage_theme_storage_ts__WEBPACK_IMPORTED_MODULE_1__.saveTheme(theme);
  _body_ts__WEBPACK_IMPORTED_MODULE_2__.setThemeClassName(theme);
}
function operatorKeyHandler(operatorKey) {
  var keyValue = _keys_ts__WEBPACK_IMPORTED_MODULE_4__.getKeyValue(operatorKey);
  _screen_ts__WEBPACK_IMPORTED_MODULE_5__.insertOperatorDigit(keyValue);
}
function regularKeyHandler(regularKey) {
  var keyValue = _keys_ts__WEBPACK_IMPORTED_MODULE_4__.getKeyValue(regularKey);
  _screen_ts__WEBPACK_IMPORTED_MODULE_5__.insertNumericDigit(keyValue);
}
function resetKeyHandler() {
  _screen_ts__WEBPACK_IMPORTED_MODULE_5__.reset();
}
function resultKeyHandler() {
  _screen_ts__WEBPACK_IMPORTED_MODULE_5__.displayResult();
}
function keyboardHandler(e) {
  var key = e.key;
  var isNumericKey = _keyboard_ts__WEBPACK_IMPORTED_MODULE_3__.isNumericKey(key);
  var isOperatorKey = _keyboard_ts__WEBPACK_IMPORTED_MODULE_3__.isOperatorKey(key);
  var isDeleteKey = _keyboard_ts__WEBPACK_IMPORTED_MODULE_3__.isDeleteKey(key);
  var isResultKey = _keyboard_ts__WEBPACK_IMPORTED_MODULE_3__.isResultKey(key);
  var isResetKey = _keyboard_ts__WEBPACK_IMPORTED_MODULE_3__.isResetKey(key);
  var isInvalidKey = !isNumericKey && !isOperatorKey && !isDeleteKey && !isResultKey && !isResetKey;
  if (isInvalidKey) {
    return;
  }

  // triggers quick find on firefox.
  if (key === "/") {
    e.preventDefault();
  }
  if (isNumericKey) {
    _screen_ts__WEBPACK_IMPORTED_MODULE_5__.insertNumericDigit(key);
  } else if (isOperatorKey) {
    _screen_ts__WEBPACK_IMPORTED_MODULE_5__.insertOperatorDigit(key);
  } else if (isDeleteKey) {
    _screen_ts__WEBPACK_IMPORTED_MODULE_5__.deleteLastDigit();
  } else if (isResultKey) {
    /* 
        stop the addition of a key
        which may be focused when
        the enter button is pressed,
        a behavior that is the same as
        clicking on the button.
      */
    e.preventDefault();
    _screen_ts__WEBPACK_IMPORTED_MODULE_5__.displayResult();
  } else if (isResetKey) {
    _screen_ts__WEBPACK_IMPORTED_MODULE_5__.reset();
  }
}
function loadThemeHandler() {
  var theme = _storage_theme_storage_ts__WEBPACK_IMPORTED_MODULE_1__.getTheme();
  if (!theme) {
    _storage_theme_storage_ts__WEBPACK_IMPORTED_MODULE_1__.saveTheme("dark");
  }
  _body_ts__WEBPACK_IMPORTED_MODULE_2__.setThemeClassName(theme);
}
function toggleHandler(e) {
  var clickedArea = _toggle_ts__WEBPACK_IMPORTED_MODULE_6__.getClickedArea(e);
  var currentTheme = _storage_theme_storage_ts__WEBPACK_IMPORTED_MODULE_1__.getTheme();
  var theme = _helpers_helpers_ts__WEBPACK_IMPORTED_MODULE_0__.getThemeBasedOnClickedArea(clickedArea);
  if (currentTheme === theme) {
    return;
  }
  _storage_theme_storage_ts__WEBPACK_IMPORTED_MODULE_1__.saveTheme(theme);
  _body_ts__WEBPACK_IMPORTED_MODULE_2__.setThemeClassName(theme);
}

/***/ },

/***/ "./src/scripts/dom/keyboard.ts"
/*!*************************************!*\
  !*** ./src/scripts/dom/keyboard.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDeleteKey: () => (/* binding */ isDeleteKey),
/* harmony export */   isNumericKey: () => (/* binding */ isNumericKey),
/* harmony export */   isOperatorKey: () => (/* binding */ isOperatorKey),
/* harmony export */   isResetKey: () => (/* binding */ isResetKey),
/* harmony export */   isResultKey: () => (/* binding */ isResultKey)
/* harmony export */ });
function isDeleteKey(key) {
  return key.toLowerCase() === "backspace" || key.toLowerCase() === "delete";
}
function isNumericKey(key) {
  return /^[0-9]$/.test(key);
}
function isOperatorKey(key) {
  return /[\+\-\*\/\.]/.test(key);
}
function isResetKey(key) {
  return key.toLowerCase() === "escape";
}
function isResultKey(key) {
  return key === "=" || key.toLowerCase() === "enter";
}

/***/ },

/***/ "./src/scripts/dom/keys.ts"
/*!*********************************!*\
  !*** ./src/scripts/dom/keys.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getKeyValue: () => (/* binding */ getKeyValue)
/* harmony export */ });
function getKeyValue(key) {
  return key.getAttribute("data-value");
}

/***/ },

/***/ "./src/scripts/dom/screen.ts"
/*!***********************************!*\
  !*** ./src/scripts/dom/screen.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SCREEN_VALUE_LENGTH_LIMIT: () => (/* binding */ SCREEN_VALUE_LENGTH_LIMIT),
/* harmony export */   deleteLastDigit: () => (/* binding */ deleteLastDigit),
/* harmony export */   displayResult: () => (/* binding */ displayResult),
/* harmony export */   getScreenValue: () => (/* binding */ getScreenValue),
/* harmony export */   insertNumericDigit: () => (/* binding */ insertNumericDigit),
/* harmony export */   insertOperatorDigit: () => (/* binding */ insertOperatorDigit),
/* harmony export */   reset: () => (/* binding */ reset),
/* harmony export */   setScreenValue: () => (/* binding */ setScreenValue)
/* harmony export */ });
/* harmony import */ var _modules_parser_parser_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/parser/parser.ts */ "./src/scripts/modules/parser/parser.ts");
/* harmony import */ var _modules_regex_patterns_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/regex/patterns.ts */ "./src/scripts/modules/regex/patterns.ts");
/* harmony import */ var _elements_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements.ts */ "./src/scripts/dom/elements.ts");



var SCREEN_VALUE_LENGTH_LIMIT = 10;
function deleteLastDigit() {
  var screenValue = getScreenValue();
  if (screenValue === "0") {
    return;
  }
  if (screenValue.length === 1) {
    setScreenValue("0");
  } else {
    var slicedScreenValue = screenValue.slice(0, -1);
    setScreenValue(slicedScreenValue);
  }
}
function displayResult() {
  var expression = getScreenValue();
  var evaluatedExpression = (0,_modules_parser_parser_ts__WEBPACK_IMPORTED_MODULE_0__.parser)(expression).toString();
  if (evaluatedExpression === expression) {
    return;
  }
  if (evaluatedExpression.length > SCREEN_VALUE_LENGTH_LIMIT) {
    evaluatedExpression = evaluatedExpression.slice(0, SCREEN_VALUE_LENGTH_LIMIT);
  }
  setScreenValue(evaluatedExpression);
}
function getScreenValue() {
  return _elements_ts__WEBPACK_IMPORTED_MODULE_2__.$screen.textContent;
}
function insertOperatorDigit(digit) {
  var screenValue = getScreenValue();
  var screenValueLength = screenValue.length;
  var isLastCharAnOperator = _modules_regex_patterns_ts__WEBPACK_IMPORTED_MODULE_1__.EXPRESSION_LAST_CHAR_IS_OPERATOR_REGEX.test(screenValue);
  if (isLastCharAnOperator) {
    return;
  }
  if (screenValueLength < SCREEN_VALUE_LENGTH_LIMIT) {
    if (screenValue === "0") {
      if (digit === "+" || digit === "-") {
        setScreenValue(digit);
      } else {
        setScreenValue(screenValue + digit);
      }
    } else {
      setScreenValue(screenValue + digit);
    }
  }
}
function insertNumericDigit(digit) {
  var screenValue = getScreenValue();
  var screenValueLength = screenValue.length;
  if (screenValueLength < SCREEN_VALUE_LENGTH_LIMIT) {
    if (screenValue === "0") {
      setScreenValue(digit);
    } else {
      setScreenValue(screenValue + digit);
    }
  }
}
function reset() {
  var screenValue = getScreenValue();
  if (screenValue === "0") {
    return;
  }
  setScreenValue("0");
}
function setScreenValue(value) {
  _elements_ts__WEBPACK_IMPORTED_MODULE_2__.$screen.textContent = value;
}

/***/ },

/***/ "./src/scripts/dom/toggle.ts"
/*!***********************************!*\
  !*** ./src/scripts/dom/toggle.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClickedArea: () => (/* binding */ getClickedArea)
/* harmony export */ });
/* harmony import */ var _helpers_helpers_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers.ts */ "./src/scripts/helpers/helpers.ts");
/* harmony import */ var _elements_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.ts */ "./src/scripts/dom/elements.ts");


function getClickedArea(e) {
  var xMouseClick = e.pageX;
  var toggleBoundingClient = _elements_ts__WEBPACK_IMPORTED_MODULE_1__.$toggle.getBoundingClientRect();
  var toggleLeft = Math.trunc(toggleBoundingClient.left);
  var toggleWidth = toggleBoundingClient.width;
  var toggleClickedArea = xMouseClick - toggleLeft;
  var relativePercentage = _helpers_helpers_ts__WEBPACK_IMPORTED_MODULE_0__.getRelativePercentage(toggleClickedArea, toggleWidth);
  var startAreaRange = relativePercentage >= 0 && relativePercentage < 40;
  var middleAreaRange = relativePercentage >= 40 && relativePercentage < 65;
  if (startAreaRange) {
    return "start";
  } else if (middleAreaRange) {
    return "middle";
  } else {
    return "end";
  }
}

/***/ },

/***/ "./src/scripts/helpers/helpers.ts"
/*!****************************************!*\
  !*** ./src/scripts/helpers/helpers.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRelativePercentage: () => (/* binding */ getRelativePercentage),
/* harmony export */   getThemeBasedOnClickedArea: () => (/* binding */ getThemeBasedOnClickedArea)
/* harmony export */ });
function getRelativePercentage(part, total) {
  if (total <= 0) {
    throw new Error("Total cannot be zero");
  }
  return Math.trunc(part / total * 100);
}
function getThemeBasedOnClickedArea(clickedArea) {
  switch (clickedArea) {
    case "start":
      return "dark";
    case "middle":
      return "light";
    case "end":
      return "purple";
  }
}

/***/ },

/***/ "./src/scripts/modules/parser/helpers/isValidExpression.ts"
/*!*****************************************************************!*\
  !*** ./src/scripts/modules/parser/helpers/isValidExpression.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidExpression: () => (/* binding */ isValidExpression)
/* harmony export */ });
/* harmony import */ var _regex_patterns_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../regex/patterns.ts */ "./src/scripts/modules/regex/patterns.ts");


/**
 * Check if a mathematical expression is valid.
 *
 * Valid expression examples:
 *
 * 12+5-1.420
 *
 * 0.5*100
 *
 * 4/2*8
 *
 * 0.125/12-33*4.2
 * @param expression A mathematical expression.
 * @returns Returns true if the mathematical expression is a valid one.
 */
function isValidExpression(expression) {
  return _regex_patterns_ts__WEBPACK_IMPORTED_MODULE_0__.VALID_EXPRESSION_REGEX.test(expression);
}

/***/ },

/***/ "./src/scripts/modules/parser/parser.ts"
/*!**********************************************!*\
  !*** ./src/scripts/modules/parser/parser.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parser: () => (/* binding */ parser)
/* harmony export */ });
/* harmony import */ var _helpers_isValidExpression_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/isValidExpression.ts */ "./src/scripts/modules/parser/helpers/isValidExpression.ts");


/**
 * Receives a mathematical expression
 * and resolves it.
 * @param expression A mathematical expression.
 * @returns Returns the result of a given mathematical expression.
 */
function parser(expression) {
  var isValid = (0,_helpers_isValidExpression_ts__WEBPACK_IMPORTED_MODULE_0__.isValidExpression)(expression);
  if (!isValid) {
    return expression;
  }
  return eval(expression);
}

/***/ },

/***/ "./src/scripts/modules/regex/patterns.ts"
/*!***********************************************!*\
  !*** ./src/scripts/modules/regex/patterns.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPRESSION_LAST_CHAR_IS_OPERATOR_REGEX: () => (/* binding */ EXPRESSION_LAST_CHAR_IS_OPERATOR_REGEX),
/* harmony export */   VALID_EXPRESSION_REGEX: () => (/* binding */ VALID_EXPRESSION_REGEX)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(e, r) { return new BabelRegExp(e, void 0, r); }; var e = RegExp.prototype, r = new WeakMap(); function BabelRegExp(e, t, p) { var o = RegExp(e, t); return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype); } function buildGroups(e, t) { var p = r.get(t); return Object.keys(p).reduce(function (r, t) { var o = p[t]; if ("number" == typeof o) r[t] = e[o];else { for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++; r[t] = e[o[i]]; } return r; }, Object.create(null)); } return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) { var t = e.exec.call(this, r); if (t) { t.groups = buildGroups(t, this); var p = t.indices; p && (p.groups = buildGroups(p, this)); } return t; }, BabelRegExp.prototype[Symbol.replace] = function (t, p) { if ("string" == typeof p) { var o = r.get(this); return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)(>|$)/g, function (e, r, t) { if ("" === t) return e; var p = o[r]; return Array.isArray(p) ? "$" + p.join("$") : "number" == typeof p ? "$" + p : ""; })); } if ("function" == typeof p) { var i = this; return e[Symbol.replace].call(this, t, function () { var e = arguments; return "object" != _typeof(e[e.length - 1]) && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e); }); } return e[Symbol.replace].call(this, t, p); }, _wrapRegExp.apply(this, arguments); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Valid expression examples:
 *
 * 12+5-1.420
 *
 * 0.5*100
 *
 * 4/2*8
 *
 * 0.125/12-33*4.2
 */
var VALID_EXPRESSION_REGEX = /*#__PURE__*/_wrapRegExp(/^[\+\-]?([0-9]+(?:\.[0-9]+)?)(?:([\+\-\*\/])([0-9]+(?:\.[0-9]+)?))+$/, {
  firstOperand: 1,
  operator: 2,
  secondOperand: 3
});
var EXPRESSION_LAST_CHAR_IS_OPERATOR_REGEX = /[\+\-\*\/\.]$/;

/***/ },

/***/ "./src/scripts/storage/theme.storage.ts"
/*!**********************************************!*\
  !*** ./src/scripts/storage/theme.storage.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTheme: () => (/* binding */ getTheme),
/* harmony export */   saveTheme: () => (/* binding */ saveTheme)
/* harmony export */ });
function getTheme() {
  return localStorage.getItem("theme");
}
function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_events_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/events.ts */ "./src/scripts/dom/events.ts");

function init() {
  (0,_dom_events_ts__WEBPACK_IMPORTED_MODULE_0__.initEvents)();
}
init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNyQztBQUNPLFNBQVNsRSxTQUFTQSxDQUFDN0MsS0FBWSxFQUFRO0VBQzdDOEcsWUFBWSxDQUFDRSxPQUFPLENBQUMsT0FBTyxFQUFFaEgsS0FBSyxDQUFDO0FBQ3JDLEM7Ozs7OztVQ1BBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTjJDO0FBRTNDLFNBQVNpSCxJQUFJQSxDQUFBLEVBQUc7RUFDZi9GLDBEQUFVLENBQUMsQ0FBQztBQUNiO0FBRUErRixJQUFJLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FsY3VsYXRvci1hcHAvLi9zcmMvc2NyaXB0cy9kb20vYm9keS50cyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLWFwcC8uL3NyYy9zY3JpcHRzL2RvbS9lbGVtZW50cy50cyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLWFwcC8uL3NyYy9zY3JpcHRzL2RvbS9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci1hcHAvLi9zcmMvc2NyaXB0cy9kb20vaGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci1hcHAvLi9zcmMvc2NyaXB0cy9kb20va2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci1hcHAvLi9zcmMvc2NyaXB0cy9kb20va2V5cy50cyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLWFwcC8uL3NyYy9zY3JpcHRzL2RvbS9zY3JlZW4udHMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci1hcHAvLi9zcmMvc2NyaXB0cy9kb20vdG9nZ2xlLnRzIiwid2VicGFjazovL2NhbGN1bGF0b3ItYXBwLy4vc3JjL3NjcmlwdHMvaGVscGVycy9oZWxwZXJzLnRzIiwid2VicGFjazovL2NhbGN1bGF0b3ItYXBwLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9wYXJzZXIvaGVscGVycy9pc1ZhbGlkRXhwcmVzc2lvbi50cyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLWFwcC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvcGFyc2VyL3BhcnNlci50cyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLWFwcC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvcmVnZXgvcGF0dGVybnMudHMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci1hcHAvLi9zcmMvc2NyaXB0cy9zdG9yYWdlL3RoZW1lLnN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhbGN1bGF0b3ItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLWFwcC8uL3NyYy9zY3JpcHRzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtUaGVtZX0gZnJvbSBcIi4uL3R5cGVzL3RoZW1lLnR5cGVzLnRzXCI7XG5pbXBvcnQgeyRib2R5fSBmcm9tIFwiLi9lbGVtZW50cy50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGhlbWVDbGFzc05hbWUodGhlbWU6IFRoZW1lKTogdm9pZCB7XG5cdCRib2R5LmNsYXNzTmFtZSA9IGAke3RoZW1lfS10aGVtZWA7XG59XG4iLCJleHBvcnQgY29uc3QgJGJvZHkgPSBkb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudDtcblxuZXhwb3J0IGNvbnN0ICRkZWxldGVLZXkgPVxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIi5rZXktLWRlbGV0ZVwiKTtcblxuZXhwb3J0IGNvbnN0ICRsYWJlbHMgPVxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxMYWJlbEVsZW1lbnQ+KFwiLmxhYmVsXCIpO1xuXG5leHBvcnQgY29uc3QgJG9wZXJhdG9yS2V5cyA9XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiLmtleS0tb3BlcmF0b3JcIik7XG5cbmV4cG9ydCBjb25zdCAkcmVndWxhcktleXMgPVxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxCdXR0b25FbGVtZW50PihcIi5rZXktLXJlZ3VsYXJcIik7XG5cbmV4cG9ydCBjb25zdCAkcmVzZXRLZXkgPVxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIi5rZXktLXJlc2V0XCIpO1xuXG5leHBvcnQgY29uc3QgJHJlc3VsdEtleSA9XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiLmtleS0tcmVzdWx0XCIpO1xuXG5leHBvcnQgY29uc3QgJHNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NyZWVuXCIpO1xuXG5leHBvcnQgY29uc3QgJHRodW1iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIudGh1bWJcIik7XG5leHBvcnQgY29uc3QgJHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiLnRvZ2dsZVwiKTtcbiIsImltcG9ydCAqIGFzIGVsZW1lbnRzIGZyb20gXCIuL2VsZW1lbnRzLnRzXCI7XG5pbXBvcnQgKiBhcyBoYW5kbGVycyBmcm9tIFwiLi9oYW5kbGVycy50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEV2ZW50cygpIHtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXHRcdGhhbmRsZXJzLmxvYWRUaGVtZUhhbmRsZXIoKTtcblx0fSk7XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG5cdFx0aGFuZGxlcnMua2V5Ym9hcmRIYW5kbGVyKGUpO1xuXHR9KTtcblxuXHRlbGVtZW50cy4kZGVsZXRlS2V5IS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGhhbmRsZXJzLmRlbGV0ZUtleUhhbmRsZXIoKTtcblx0fSk7XG5cblx0ZWxlbWVudHMuJGxhYmVscy5mb3JFYWNoKGxhYmVsID0+IHtcblx0XHRsYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0aGFuZGxlcnMubGFiZWxIYW5kbGVyKGxhYmVsKTtcblx0XHR9KTtcblx0fSk7XG5cblx0ZWxlbWVudHMuJG9wZXJhdG9yS2V5cy5mb3JFYWNoKGtleSA9PiB7XG5cdFx0a2V5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRoYW5kbGVycy5vcGVyYXRvcktleUhhbmRsZXIoa2V5KTtcblx0XHR9KTtcblx0fSk7XG5cblx0ZWxlbWVudHMuJHJlZ3VsYXJLZXlzLmZvckVhY2goa2V5ID0+IHtcblx0XHRrZXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGhhbmRsZXJzLnJlZ3VsYXJLZXlIYW5kbGVyKGtleSk7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGVsZW1lbnRzLiRyZXNldEtleSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRoYW5kbGVycy5yZXNldEtleUhhbmRsZXIoKTtcblx0fSk7XG5cblx0ZWxlbWVudHMuJHJlc3VsdEtleSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRoYW5kbGVycy5yZXN1bHRLZXlIYW5kbGVyKCk7XG5cdH0pO1xuXG5cdGVsZW1lbnRzLiR0b2dnbGUhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogTW91c2VFdmVudCkgPT4ge1xuXHRcdGhhbmRsZXJzLnRvZ2dsZUhhbmRsZXIoZSk7XG5cdH0pO1xufVxuIiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzLnRzXCI7XG5pbXBvcnQgKiBhcyB0aGVtZVN0b3JhZ2UgZnJvbSBcIi4uL3N0b3JhZ2UvdGhlbWUuc3RvcmFnZS50c1wiO1xuaW1wb3J0IHR5cGUge1RoZW1lfSBmcm9tIFwiLi4vdHlwZXMvdGhlbWUudHlwZXMudHNcIjtcbmltcG9ydCAqIGFzIGJvZHkgZnJvbSBcIi4vYm9keS50c1wiO1xuaW1wb3J0ICogYXMga2V5Ym9hcmQgZnJvbSBcIi4va2V5Ym9hcmQudHNcIjtcbmltcG9ydCAqIGFzIGtleXMgZnJvbSBcIi4va2V5cy50c1wiO1xuaW1wb3J0ICogYXMgc2NyZWVuIGZyb20gXCIuL3NjcmVlbi50c1wiO1xuaW1wb3J0ICogYXMgdG9nZ2xlIGZyb20gXCIuL3RvZ2dsZS50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlS2V5SGFuZGxlcigpOiB2b2lkIHtcblx0c2NyZWVuLmRlbGV0ZUxhc3REaWdpdCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxIYW5kbGVyKGxhYmVsOiBIVE1MTGFiZWxFbGVtZW50KSB7XG5cdGNvbnN0IGNsYXNzTmFtZSA9IGxhYmVsLmNsYXNzTmFtZTtcblxuXHRjb25zdCB0aGVtZVJlZ2V4ID0gL2xpZ2h0fGRhcmt8cHVycGxlLztcblxuXHRjb25zdCBjdXJyZW50VGhlbWUgPSB0aGVtZVN0b3JhZ2UuZ2V0VGhlbWUoKTtcblx0Y29uc3QgdGhlbWUgPSBjbGFzc05hbWUubWF0Y2godGhlbWVSZWdleCk/LlswXSBhcyBUaGVtZTtcblxuXHRpZiAoY3VycmVudFRoZW1lID09PSB0aGVtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoZW1lU3RvcmFnZS5zYXZlVGhlbWUodGhlbWUpO1xuXG5cdGJvZHkuc2V0VGhlbWVDbGFzc05hbWUodGhlbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlcmF0b3JLZXlIYW5kbGVyKG9wZXJhdG9yS2V5OiBIVE1MQnV0dG9uRWxlbWVudCk6IHZvaWQge1xuXHRjb25zdCBrZXlWYWx1ZSA9IGtleXMuZ2V0S2V5VmFsdWUob3BlcmF0b3JLZXkpO1xuXG5cdHNjcmVlbi5pbnNlcnRPcGVyYXRvckRpZ2l0KGtleVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ3VsYXJLZXlIYW5kbGVyKHJlZ3VsYXJLZXk6IEhUTUxCdXR0b25FbGVtZW50KTogdm9pZCB7XG5cdGNvbnN0IGtleVZhbHVlID0ga2V5cy5nZXRLZXlWYWx1ZShyZWd1bGFyS2V5KTtcblxuXHRzY3JlZW4uaW5zZXJ0TnVtZXJpY0RpZ2l0KGtleVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0S2V5SGFuZGxlcigpOiB2b2lkIHtcblx0c2NyZWVuLnJlc2V0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXN1bHRLZXlIYW5kbGVyKCkge1xuXHRzY3JlZW4uZGlzcGxheVJlc3VsdCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2V5Ym9hcmRIYW5kbGVyKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcblx0Y29uc3Qga2V5ID0gZS5rZXk7XG5cblx0Y29uc3QgaXNOdW1lcmljS2V5ID0ga2V5Ym9hcmQuaXNOdW1lcmljS2V5KGtleSk7XG5cdGNvbnN0IGlzT3BlcmF0b3JLZXkgPSBrZXlib2FyZC5pc09wZXJhdG9yS2V5KGtleSk7XG5cdGNvbnN0IGlzRGVsZXRlS2V5ID0ga2V5Ym9hcmQuaXNEZWxldGVLZXkoa2V5KTtcblx0Y29uc3QgaXNSZXN1bHRLZXkgPSBrZXlib2FyZC5pc1Jlc3VsdEtleShrZXkpO1xuXHRjb25zdCBpc1Jlc2V0S2V5ID0ga2V5Ym9hcmQuaXNSZXNldEtleShrZXkpO1xuXG5cdGNvbnN0IGlzSW52YWxpZEtleSA9XG5cdFx0IWlzTnVtZXJpY0tleSAmJlxuXHRcdCFpc09wZXJhdG9yS2V5ICYmXG5cdFx0IWlzRGVsZXRlS2V5ICYmXG5cdFx0IWlzUmVzdWx0S2V5ICYmXG5cdFx0IWlzUmVzZXRLZXk7XG5cblx0aWYgKGlzSW52YWxpZEtleSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIHRyaWdnZXJzIHF1aWNrIGZpbmQgb24gZmlyZWZveC5cblx0aWYgKGtleSA9PT0gXCIvXCIpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHRpZiAoaXNOdW1lcmljS2V5KSB7XG5cdFx0c2NyZWVuLmluc2VydE51bWVyaWNEaWdpdChrZXkpO1xuXHR9IGVsc2UgaWYgKGlzT3BlcmF0b3JLZXkpIHtcblx0XHRzY3JlZW4uaW5zZXJ0T3BlcmF0b3JEaWdpdChrZXkpO1xuXHR9IGVsc2UgaWYgKGlzRGVsZXRlS2V5KSB7XG5cdFx0c2NyZWVuLmRlbGV0ZUxhc3REaWdpdCgpO1xuXHR9IGVsc2UgaWYgKGlzUmVzdWx0S2V5KSB7XG5cdFx0LyogXG4gICAgICBzdG9wIHRoZSBhZGRpdGlvbiBvZiBhIGtleVxuICAgICAgd2hpY2ggbWF5IGJlIGZvY3VzZWQgd2hlblxuICAgICAgdGhlIGVudGVyIGJ1dHRvbiBpcyBwcmVzc2VkLFxuICAgICAgYSBiZWhhdmlvciB0aGF0IGlzIHRoZSBzYW1lIGFzXG4gICAgICBjbGlja2luZyBvbiB0aGUgYnV0dG9uLlxuICAgICovXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0c2NyZWVuLmRpc3BsYXlSZXN1bHQoKTtcblx0fSBlbHNlIGlmIChpc1Jlc2V0S2V5KSB7XG5cdFx0c2NyZWVuLnJlc2V0KCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUaGVtZUhhbmRsZXIoKSB7XG5cdGNvbnN0IHRoZW1lID0gdGhlbWVTdG9yYWdlLmdldFRoZW1lKCk7XG5cblx0aWYgKCF0aGVtZSkge1xuXHRcdHRoZW1lU3RvcmFnZS5zYXZlVGhlbWUoXCJkYXJrXCIpO1xuXHR9XG5cblx0Ym9keS5zZXRUaGVtZUNsYXNzTmFtZSh0aGVtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVIYW5kbGVyKGU6IE1vdXNlRXZlbnQpIHtcblx0Y29uc3QgY2xpY2tlZEFyZWEgPSB0b2dnbGUuZ2V0Q2xpY2tlZEFyZWEoZSk7XG5cblx0Y29uc3QgY3VycmVudFRoZW1lID0gdGhlbWVTdG9yYWdlLmdldFRoZW1lKCk7XG5cdGNvbnN0IHRoZW1lID0gaGVscGVycy5nZXRUaGVtZUJhc2VkT25DbGlja2VkQXJlYShjbGlja2VkQXJlYSk7XG5cblx0aWYgKGN1cnJlbnRUaGVtZSA9PT0gdGhlbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGVtZVN0b3JhZ2Uuc2F2ZVRoZW1lKHRoZW1lKTtcblxuXHRib2R5LnNldFRoZW1lQ2xhc3NOYW1lKHRoZW1lKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0RlbGV0ZUtleShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gKFxuXHRcdGtleS50b0xvd2VyQ2FzZSgpID09PSBcImJhY2tzcGFjZVwiIHx8IGtleS50b0xvd2VyQ2FzZSgpID09PSBcImRlbGV0ZVwiXG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWVyaWNLZXkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcblx0cmV0dXJuIC9eWzAtOV0kLy50ZXN0KGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09wZXJhdG9yS2V5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdHJldHVybiAvW1xcK1xcLVxcKlxcL1xcLl0vLnRlc3Qoa2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzZXRLZXkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcblx0cmV0dXJuIGtleS50b0xvd2VyQ2FzZSgpID09PSBcImVzY2FwZVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXN1bHRLZXkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcblx0cmV0dXJuIGtleSA9PT0gXCI9XCIgfHwga2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiZW50ZXJcIjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRLZXlWYWx1ZShrZXk6IEhUTUxCdXR0b25FbGVtZW50KTogc3RyaW5nIHtcblx0cmV0dXJuIGtleS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpITtcbn1cbiIsImltcG9ydCB7cGFyc2VyfSBmcm9tIFwiLi4vbW9kdWxlcy9wYXJzZXIvcGFyc2VyLnRzXCI7XG5pbXBvcnQge0VYUFJFU1NJT05fTEFTVF9DSEFSX0lTX09QRVJBVE9SX1JFR0VYfSBmcm9tIFwiLi4vbW9kdWxlcy9yZWdleC9wYXR0ZXJucy50c1wiO1xuaW1wb3J0IHskc2NyZWVufSBmcm9tIFwiLi9lbGVtZW50cy50c1wiO1xuXG5leHBvcnQgY29uc3QgU0NSRUVOX1ZBTFVFX0xFTkdUSF9MSU1JVCA9IDEwO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTGFzdERpZ2l0KCkge1xuXHRjb25zdCBzY3JlZW5WYWx1ZSA9IGdldFNjcmVlblZhbHVlKCk7XG5cblx0aWYgKHNjcmVlblZhbHVlID09PSBcIjBcIikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChzY3JlZW5WYWx1ZS5sZW5ndGggPT09IDEpIHtcblx0XHRzZXRTY3JlZW5WYWx1ZShcIjBcIik7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3Qgc2xpY2VkU2NyZWVuVmFsdWUgPSBzY3JlZW5WYWx1ZS5zbGljZSgwLCAtMSk7XG5cblx0XHRzZXRTY3JlZW5WYWx1ZShzbGljZWRTY3JlZW5WYWx1ZSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlSZXN1bHQoKSB7XG5cdGNvbnN0IGV4cHJlc3Npb24gPSBnZXRTY3JlZW5WYWx1ZSgpO1xuXG5cdGxldCBldmFsdWF0ZWRFeHByZXNzaW9uID0gcGFyc2VyKGV4cHJlc3Npb24pLnRvU3RyaW5nKCk7XG5cblx0aWYgKGV2YWx1YXRlZEV4cHJlc3Npb24gPT09IGV4cHJlc3Npb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoZXZhbHVhdGVkRXhwcmVzc2lvbi5sZW5ndGggPiBTQ1JFRU5fVkFMVUVfTEVOR1RIX0xJTUlUKSB7XG5cdFx0ZXZhbHVhdGVkRXhwcmVzc2lvbiA9IGV2YWx1YXRlZEV4cHJlc3Npb24uc2xpY2UoXG5cdFx0XHQwLFxuXHRcdFx0U0NSRUVOX1ZBTFVFX0xFTkdUSF9MSU1JVCxcblx0XHQpO1xuXHR9XG5cblx0c2V0U2NyZWVuVmFsdWUoZXZhbHVhdGVkRXhwcmVzc2lvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JlZW5WYWx1ZSgpOiBzdHJpbmcge1xuXHRyZXR1cm4gJHNjcmVlbiEudGV4dENvbnRlbnQhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0T3BlcmF0b3JEaWdpdChkaWdpdDogc3RyaW5nKTogdm9pZCB7XG5cdGNvbnN0IHNjcmVlblZhbHVlID0gZ2V0U2NyZWVuVmFsdWUoKTtcblxuXHRjb25zdCBzY3JlZW5WYWx1ZUxlbmd0aCA9IHNjcmVlblZhbHVlLmxlbmd0aDtcblxuXHRjb25zdCBpc0xhc3RDaGFyQW5PcGVyYXRvciA9XG5cdFx0RVhQUkVTU0lPTl9MQVNUX0NIQVJfSVNfT1BFUkFUT1JfUkVHRVgudGVzdChzY3JlZW5WYWx1ZSk7XG5cblx0aWYgKGlzTGFzdENoYXJBbk9wZXJhdG9yKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHNjcmVlblZhbHVlTGVuZ3RoIDwgU0NSRUVOX1ZBTFVFX0xFTkdUSF9MSU1JVCkge1xuXHRcdGlmIChzY3JlZW5WYWx1ZSA9PT0gXCIwXCIpIHtcblx0XHRcdGlmIChkaWdpdCA9PT0gXCIrXCIgfHwgZGlnaXQgPT09IFwiLVwiKSB7XG5cdFx0XHRcdHNldFNjcmVlblZhbHVlKGRpZ2l0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldFNjcmVlblZhbHVlKHNjcmVlblZhbHVlICsgZGlnaXQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRTY3JlZW5WYWx1ZShzY3JlZW5WYWx1ZSArIGRpZ2l0KTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydE51bWVyaWNEaWdpdChkaWdpdDogc3RyaW5nKTogdm9pZCB7XG5cdGNvbnN0IHNjcmVlblZhbHVlID0gZ2V0U2NyZWVuVmFsdWUoKTtcblxuXHRjb25zdCBzY3JlZW5WYWx1ZUxlbmd0aCA9IHNjcmVlblZhbHVlLmxlbmd0aDtcblxuXHRpZiAoc2NyZWVuVmFsdWVMZW5ndGggPCBTQ1JFRU5fVkFMVUVfTEVOR1RIX0xJTUlUKSB7XG5cdFx0aWYgKHNjcmVlblZhbHVlID09PSBcIjBcIikge1xuXHRcdFx0c2V0U2NyZWVuVmFsdWUoZGlnaXQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRTY3JlZW5WYWx1ZShzY3JlZW5WYWx1ZSArIGRpZ2l0KTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0KCk6IHZvaWQge1xuXHRjb25zdCBzY3JlZW5WYWx1ZSA9IGdldFNjcmVlblZhbHVlKCk7XG5cblx0aWYgKHNjcmVlblZhbHVlID09PSBcIjBcIikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHNldFNjcmVlblZhbHVlKFwiMFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNjcmVlblZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0JHNjcmVlbiEudGV4dENvbnRlbnQgPSB2YWx1ZTtcbn1cbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVycy50c1wiO1xuaW1wb3J0ICogYXMgZWxlbWVudHMgZnJvbSBcIi4vZWxlbWVudHMudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWNrZWRBcmVhKGU6IE1vdXNlRXZlbnQpOiBcInN0YXJ0XCIgfCBcIm1pZGRsZVwiIHwgXCJlbmRcIiB7XG5cdGNvbnN0IHhNb3VzZUNsaWNrID0gZS5wYWdlWDtcblxuXHRjb25zdCB0b2dnbGVCb3VuZGluZ0NsaWVudCA9IGVsZW1lbnRzLiR0b2dnbGUhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRjb25zdCB0b2dnbGVMZWZ0ID0gTWF0aC50cnVuYyh0b2dnbGVCb3VuZGluZ0NsaWVudC5sZWZ0KTtcblx0Y29uc3QgdG9nZ2xlV2lkdGggPSB0b2dnbGVCb3VuZGluZ0NsaWVudC53aWR0aDtcblxuXHRjb25zdCB0b2dnbGVDbGlja2VkQXJlYSA9IHhNb3VzZUNsaWNrIC0gdG9nZ2xlTGVmdDtcblxuXHRjb25zdCByZWxhdGl2ZVBlcmNlbnRhZ2UgPSBoZWxwZXJzLmdldFJlbGF0aXZlUGVyY2VudGFnZShcblx0XHR0b2dnbGVDbGlja2VkQXJlYSxcblx0XHR0b2dnbGVXaWR0aCxcblx0KTtcblxuXHRjb25zdCBzdGFydEFyZWFSYW5nZSA9XG5cdFx0cmVsYXRpdmVQZXJjZW50YWdlID49IDAgJiYgcmVsYXRpdmVQZXJjZW50YWdlIDwgNDA7XG5cdGNvbnN0IG1pZGRsZUFyZWFSYW5nZSA9XG5cdFx0cmVsYXRpdmVQZXJjZW50YWdlID49IDQwICYmIHJlbGF0aXZlUGVyY2VudGFnZSA8IDY1O1xuXG5cdGlmIChzdGFydEFyZWFSYW5nZSkge1xuXHRcdHJldHVybiBcInN0YXJ0XCI7XG5cdH0gZWxzZSBpZiAobWlkZGxlQXJlYVJhbmdlKSB7XG5cdFx0cmV0dXJuIFwibWlkZGxlXCI7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIFwiZW5kXCI7XG5cdH1cbn1cbiIsImltcG9ydCB0eXBlIHtUaGVtZX0gZnJvbSBcIi4uL3R5cGVzL3RoZW1lLnR5cGVzLnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWxhdGl2ZVBlcmNlbnRhZ2UoXG5cdHBhcnQ6IG51bWJlcixcblx0dG90YWw6IG51bWJlcixcbik6IG51bWJlciB7XG5cdGlmICh0b3RhbCA8PSAwKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVG90YWwgY2Fubm90IGJlIHplcm9cIik7XG5cdH1cblxuXHRyZXR1cm4gTWF0aC50cnVuYygocGFydCAvIHRvdGFsKSAqIDEwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaGVtZUJhc2VkT25DbGlja2VkQXJlYShcblx0Y2xpY2tlZEFyZWE6IFwic3RhcnRcIiB8IFwibWlkZGxlXCIgfCBcImVuZFwiLFxuKTogVGhlbWUge1xuXHRzd2l0Y2ggKGNsaWNrZWRBcmVhKSB7XG5cdFx0Y2FzZSBcInN0YXJ0XCI6XG5cdFx0XHRyZXR1cm4gXCJkYXJrXCI7XG5cdFx0Y2FzZSBcIm1pZGRsZVwiOlxuXHRcdFx0cmV0dXJuIFwibGlnaHRcIjtcblx0XHRjYXNlIFwiZW5kXCI6XG5cdFx0XHRyZXR1cm4gXCJwdXJwbGVcIjtcblx0fVxufVxuIiwiaW1wb3J0IHtWQUxJRF9FWFBSRVNTSU9OX1JFR0VYfSBmcm9tIFwiLi4vLi4vcmVnZXgvcGF0dGVybnMudHNcIjtcblxuLyoqXG4gKiBDaGVjayBpZiBhIG1hdGhlbWF0aWNhbCBleHByZXNzaW9uIGlzIHZhbGlkLlxuICpcbiAqIFZhbGlkIGV4cHJlc3Npb24gZXhhbXBsZXM6XG4gKlxuICogMTIrNS0xLjQyMFxuICpcbiAqIDAuNSoxMDBcbiAqXG4gKiA0LzIqOFxuICpcbiAqIDAuMTI1LzEyLTMzKjQuMlxuICogQHBhcmFtIGV4cHJlc3Npb24gQSBtYXRoZW1hdGljYWwgZXhwcmVzc2lvbi5cbiAqIEByZXR1cm5zIFJldHVybnMgdHJ1ZSBpZiB0aGUgbWF0aGVtYXRpY2FsIGV4cHJlc3Npb24gaXMgYSB2YWxpZCBvbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRXhwcmVzc2lvbihleHByZXNzaW9uOiBzdHJpbmcpOiBib29sZWFuIHtcblx0cmV0dXJuIFZBTElEX0VYUFJFU1NJT05fUkVHRVgudGVzdChleHByZXNzaW9uKTtcbn1cbiIsImltcG9ydCB7aXNWYWxpZEV4cHJlc3Npb259IGZyb20gXCIuL2hlbHBlcnMvaXNWYWxpZEV4cHJlc3Npb24udHNcIjtcblxuLyoqXG4gKiBSZWNlaXZlcyBhIG1hdGhlbWF0aWNhbCBleHByZXNzaW9uXG4gKiBhbmQgcmVzb2x2ZXMgaXQuXG4gKiBAcGFyYW0gZXhwcmVzc2lvbiBBIG1hdGhlbWF0aWNhbCBleHByZXNzaW9uLlxuICogQHJldHVybnMgUmV0dXJucyB0aGUgcmVzdWx0IG9mIGEgZ2l2ZW4gbWF0aGVtYXRpY2FsIGV4cHJlc3Npb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZXIoZXhwcmVzc2lvbjogc3RyaW5nKTogc3RyaW5nIHtcblx0Y29uc3QgaXNWYWxpZCA9IGlzVmFsaWRFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuXG5cdGlmICghaXNWYWxpZCkge1xuXHRcdHJldHVybiBleHByZXNzaW9uO1xuXHR9XG5cblx0cmV0dXJuIGV2YWwoZXhwcmVzc2lvbik7XG59XG4iLCIvKipcbiAqIFZhbGlkIGV4cHJlc3Npb24gZXhhbXBsZXM6XG4gKlxuICogMTIrNS0xLjQyMFxuICpcbiAqIDAuNSoxMDBcbiAqXG4gKiA0LzIqOFxuICpcbiAqIDAuMTI1LzEyLTMzKjQuMlxuICovXG5leHBvcnQgY29uc3QgVkFMSURfRVhQUkVTU0lPTl9SRUdFWCA9XG5cdC9eW1xcK1xcLV0/KD88Zmlyc3RPcGVyYW5kPlswLTldKyg/OlxcLlswLTldKyk/KSg/Oig/PG9wZXJhdG9yPltcXCtcXC1cXCpcXC9dKSg/PHNlY29uZE9wZXJhbmQ+WzAtOV0rKD86XFwuWzAtOV0rKT8pKSskLztcblxuZXhwb3J0IGNvbnN0IEVYUFJFU1NJT05fTEFTVF9DSEFSX0lTX09QRVJBVE9SX1JFR0VYID0gL1tcXCtcXC1cXCpcXC9cXC5dJC87XG4iLCJpbXBvcnQgdHlwZSB7VGhlbWV9IGZyb20gXCIuLi90eXBlcy90aGVtZS50eXBlcy50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGhlbWUoKTogVGhlbWUge1xuXHRyZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSBhcyBUaGVtZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVGhlbWUodGhlbWU6IFRoZW1lKTogdm9pZCB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgdGhlbWUpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7aW5pdEV2ZW50c30gZnJvbSBcIi4vZG9tL2V2ZW50cy50c1wiO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuXHRpbml0RXZlbnRzKCk7XG59XG5cbmluaXQoKTtcbiJdLCJuYW1lcyI6WyIkYm9keSIsInNldFRoZW1lQ2xhc3NOYW1lIiwidGhlbWUiLCJjbGFzc05hbWUiLCJjb25jYXQiLCJkb2N1bWVudCIsImJvZHkiLCIkZGVsZXRlS2V5IiwicXVlcnlTZWxlY3RvciIsIiRsYWJlbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJG9wZXJhdG9yS2V5cyIsIiRyZWd1bGFyS2V5cyIsIiRyZXNldEtleSIsIiRyZXN1bHRLZXkiLCIkc2NyZWVuIiwiJHRodW1iIiwiJHRvZ2dsZSIsImVsZW1lbnRzIiwiaGFuZGxlcnMiLCJpbml0RXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRUaGVtZUhhbmRsZXIiLCJlIiwia2V5Ym9hcmRIYW5kbGVyIiwiZGVsZXRlS2V5SGFuZGxlciIsImZvckVhY2giLCJsYWJlbCIsImxhYmVsSGFuZGxlciIsImtleSIsIm9wZXJhdG9yS2V5SGFuZGxlciIsInJlZ3VsYXJLZXlIYW5kbGVyIiwicmVzZXRLZXlIYW5kbGVyIiwicmVzdWx0S2V5SGFuZGxlciIsInRvZ2dsZUhhbmRsZXIiLCJoZWxwZXJzIiwidGhlbWVTdG9yYWdlIiwia2V5Ym9hcmQiLCJrZXlzIiwic2NyZWVuIiwidG9nZ2xlIiwiZGVsZXRlTGFzdERpZ2l0IiwiX2NsYXNzTmFtZSRtYXRjaCIsInRoZW1lUmVnZXgiLCJjdXJyZW50VGhlbWUiLCJnZXRUaGVtZSIsIm1hdGNoIiwic2F2ZVRoZW1lIiwib3BlcmF0b3JLZXkiLCJrZXlWYWx1ZSIsImdldEtleVZhbHVlIiwiaW5zZXJ0T3BlcmF0b3JEaWdpdCIsInJlZ3VsYXJLZXkiLCJpbnNlcnROdW1lcmljRGlnaXQiLCJyZXNldCIsImRpc3BsYXlSZXN1bHQiLCJpc051bWVyaWNLZXkiLCJpc09wZXJhdG9yS2V5IiwiaXNEZWxldGVLZXkiLCJpc1Jlc3VsdEtleSIsImlzUmVzZXRLZXkiLCJpc0ludmFsaWRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWNrZWRBcmVhIiwiZ2V0Q2xpY2tlZEFyZWEiLCJnZXRUaGVtZUJhc2VkT25DbGlja2VkQXJlYSIsInRvTG93ZXJDYXNlIiwidGVzdCIsImdldEF0dHJpYnV0ZSIsInBhcnNlciIsIkVYUFJFU1NJT05fTEFTVF9DSEFSX0lTX09QRVJBVE9SX1JFR0VYIiwiU0NSRUVOX1ZBTFVFX0xFTkdUSF9MSU1JVCIsInNjcmVlblZhbHVlIiwiZ2V0U2NyZWVuVmFsdWUiLCJsZW5ndGgiLCJzZXRTY3JlZW5WYWx1ZSIsInNsaWNlZFNjcmVlblZhbHVlIiwic2xpY2UiLCJleHByZXNzaW9uIiwiZXZhbHVhdGVkRXhwcmVzc2lvbiIsInRvU3RyaW5nIiwidGV4dENvbnRlbnQiLCJkaWdpdCIsInNjcmVlblZhbHVlTGVuZ3RoIiwiaXNMYXN0Q2hhckFuT3BlcmF0b3IiLCJ2YWx1ZSIsInhNb3VzZUNsaWNrIiwicGFnZVgiLCJ0b2dnbGVCb3VuZGluZ0NsaWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvZ2dsZUxlZnQiLCJNYXRoIiwidHJ1bmMiLCJsZWZ0IiwidG9nZ2xlV2lkdGgiLCJ3aWR0aCIsInRvZ2dsZUNsaWNrZWRBcmVhIiwicmVsYXRpdmVQZXJjZW50YWdlIiwiZ2V0UmVsYXRpdmVQZXJjZW50YWdlIiwic3RhcnRBcmVhUmFuZ2UiLCJtaWRkbGVBcmVhUmFuZ2UiLCJwYXJ0IiwidG90YWwiLCJFcnJvciIsIlZBTElEX0VYUFJFU1NJT05fUkVHRVgiLCJpc1ZhbGlkRXhwcmVzc2lvbiIsImlzVmFsaWQiLCJldmFsIiwiX3dyYXBSZWdFeHAiLCJmaXJzdE9wZXJhbmQiLCJvcGVyYXRvciIsInNlY29uZE9wZXJhbmQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImluaXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==