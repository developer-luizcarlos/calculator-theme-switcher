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
  var checkSpecialKeyWasPressed = _keyboard_ts__WEBPACK_IMPORTED_MODULE_3__.checkSpecialKeyWasPressed(e);
  var isNumericKey = _keyboard_ts__WEBPACK_IMPORTED_MODULE_3__.isNumericKey(key);
  var isOperatorKey = _keyboard_ts__WEBPACK_IMPORTED_MODULE_3__.isOperatorKey(key);
  var isDeleteKey = _keyboard_ts__WEBPACK_IMPORTED_MODULE_3__.isDeleteKey(key);
  var isResultKey = _keyboard_ts__WEBPACK_IMPORTED_MODULE_3__.isResultKey(key);
  var isResetKey = _keyboard_ts__WEBPACK_IMPORTED_MODULE_3__.isResetKey(key);

  /**
   * Stops, by example, inserting
   * a numeric digit on the calculator screen
   * while pressing the alt key and a
   * numeric key on the user keyboard when
   * the user is swapping between pages by
   * the usage of browser's shortcuts.
   */
  if (checkSpecialKeyWasPressed) {
    return;
  }
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
/* harmony export */   checkSpecialKeyWasPressed: () => (/* binding */ checkSpecialKeyWasPressed),
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

/**
 * Returns true if alt or ctrl keys
 * were pressed while hiting another key.
 * @param e a KeyboardEvent object.
 */
function checkSpecialKeyWasPressed(e) {
  var isSpecialKey = e.ctrlKey || e.altKey;
  return isSpecialKey;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTTBCLHNCQUFzQixnQkFBQUksV0FBQSxDQUNsQyxzRUFBZ0g7RUFBQUMsWUFBQTtFQUFBQyxRQUFBO0VBQUFDLGFBQUE7QUFBQTtBQUUxRyxJQUFNekMsc0NBQXNDLEdBQUcsZUFBZSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNaOUQsU0FBUzdCLFFBQVFBLENBQUEsRUFBVTtFQUNqQyxPQUFPdUUsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQ3JDO0FBQ08sU0FBU3RFLFNBQVNBLENBQUM3QyxLQUFZLEVBQVE7RUFDN0NrSCxZQUFZLENBQUNFLE9BQU8sQ0FBQyxPQUFPLEVBQUVwSCxLQUFLLENBQUM7QUFDckMsQzs7Ozs7O1VDUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOMkM7QUFFM0MsU0FBU3FILElBQUlBLENBQUEsRUFBRztFQUNmbkcsMERBQVUsQ0FBQyxDQUFDO0FBQ2I7QUFFQW1HLElBQUksQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxjdWxhdG9yLWFwcC8uL3NyYy9zY3JpcHRzL2RvbS9ib2R5LnRzIiwid2VicGFjazovL2NhbGN1bGF0b3ItYXBwLy4vc3JjL3NjcmlwdHMvZG9tL2VsZW1lbnRzLnRzIiwid2VicGFjazovL2NhbGN1bGF0b3ItYXBwLy4vc3JjL3NjcmlwdHMvZG9tL2V2ZW50cy50cyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLWFwcC8uL3NyYy9zY3JpcHRzL2RvbS9oYW5kbGVycy50cyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLWFwcC8uL3NyYy9zY3JpcHRzL2RvbS9rZXlib2FyZC50cyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLWFwcC8uL3NyYy9zY3JpcHRzL2RvbS9rZXlzLnRzIiwid2VicGFjazovL2NhbGN1bGF0b3ItYXBwLy4vc3JjL3NjcmlwdHMvZG9tL3NjcmVlbi50cyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLWFwcC8uL3NyYy9zY3JpcHRzL2RvbS90b2dnbGUudHMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci1hcHAvLi9zcmMvc2NyaXB0cy9oZWxwZXJzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci1hcHAvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3BhcnNlci9oZWxwZXJzL2lzVmFsaWRFeHByZXNzaW9uLnRzIiwid2VicGFjazovL2NhbGN1bGF0b3ItYXBwLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9wYXJzZXIvcGFyc2VyLnRzIiwid2VicGFjazovL2NhbGN1bGF0b3ItYXBwLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9yZWdleC9wYXR0ZXJucy50cyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLWFwcC8uL3NyYy9zY3JpcHRzL3N0b3JhZ2UvdGhlbWUuc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhbGN1bGF0b3ItYXBwLy4vc3JjL3NjcmlwdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1RoZW1lfSBmcm9tIFwiLi4vdHlwZXMvdGhlbWUudHlwZXMudHNcIjtcbmltcG9ydCB7JGJvZHl9IGZyb20gXCIuL2VsZW1lbnRzLnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUaGVtZUNsYXNzTmFtZSh0aGVtZTogVGhlbWUpOiB2b2lkIHtcblx0JGJvZHkuY2xhc3NOYW1lID0gYCR7dGhlbWV9LXRoZW1lYDtcbn1cbiIsImV4cG9ydCBjb25zdCAkYm9keSA9IGRvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50O1xuXG5leHBvcnQgY29uc3QgJGRlbGV0ZUtleSA9XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiLmtleS0tZGVsZXRlXCIpO1xuXG5leHBvcnQgY29uc3QgJGxhYmVscyA9XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTExhYmVsRWxlbWVudD4oXCIubGFiZWxcIik7XG5cbmV4cG9ydCBjb25zdCAkb3BlcmF0b3JLZXlzID1cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQnV0dG9uRWxlbWVudD4oXCIua2V5LS1vcGVyYXRvclwiKTtcblxuZXhwb3J0IGNvbnN0ICRyZWd1bGFyS2V5cyA9XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiLmtleS0tcmVndWxhclwiKTtcblxuZXhwb3J0IGNvbnN0ICRyZXNldEtleSA9XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiLmtleS0tcmVzZXRcIik7XG5cbmV4cG9ydCBjb25zdCAkcmVzdWx0S2V5ID1cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIua2V5LS1yZXN1bHRcIik7XG5cbmV4cG9ydCBjb25zdCAkc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY3JlZW5cIik7XG5cbmV4cG9ydCBjb25zdCAkdGh1bWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIi50aHVtYlwiKTtcbmV4cG9ydCBjb25zdCAkdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIudG9nZ2xlXCIpO1xuIiwiaW1wb3J0ICogYXMgZWxlbWVudHMgZnJvbSBcIi4vZWxlbWVudHMudHNcIjtcbmltcG9ydCAqIGFzIGhhbmRsZXJzIGZyb20gXCIuL2hhbmRsZXJzLnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RXZlbnRzKCkge1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cdFx0aGFuZGxlcnMubG9hZFRoZW1lSGFuZGxlcigpO1xuXHR9KTtcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcblx0XHRoYW5kbGVycy5rZXlib2FyZEhhbmRsZXIoZSk7XG5cdH0pO1xuXG5cdGVsZW1lbnRzLiRkZWxldGVLZXkhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0aGFuZGxlcnMuZGVsZXRlS2V5SGFuZGxlcigpO1xuXHR9KTtcblxuXHRlbGVtZW50cy4kbGFiZWxzLmZvckVhY2gobGFiZWwgPT4ge1xuXHRcdGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRoYW5kbGVycy5sYWJlbEhhbmRsZXIobGFiZWwpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHRlbGVtZW50cy4kb3BlcmF0b3JLZXlzLmZvckVhY2goa2V5ID0+IHtcblx0XHRrZXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGhhbmRsZXJzLm9wZXJhdG9yS2V5SGFuZGxlcihrZXkpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHRlbGVtZW50cy4kcmVndWxhcktleXMuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGtleS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0aGFuZGxlcnMucmVndWxhcktleUhhbmRsZXIoa2V5KTtcblx0XHR9KTtcblx0fSk7XG5cblx0ZWxlbWVudHMuJHJlc2V0S2V5IS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGhhbmRsZXJzLnJlc2V0S2V5SGFuZGxlcigpO1xuXHR9KTtcblxuXHRlbGVtZW50cy4kcmVzdWx0S2V5IS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGhhbmRsZXJzLnJlc3VsdEtleUhhbmRsZXIoKTtcblx0fSk7XG5cblx0ZWxlbWVudHMuJHRvZ2dsZSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG5cdFx0aGFuZGxlcnMudG9nZ2xlSGFuZGxlcihlKTtcblx0fSk7XG59XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnMudHNcIjtcbmltcG9ydCAqIGFzIHRoZW1lU3RvcmFnZSBmcm9tIFwiLi4vc3RvcmFnZS90aGVtZS5zdG9yYWdlLnRzXCI7XG5pbXBvcnQgdHlwZSB7VGhlbWV9IGZyb20gXCIuLi90eXBlcy90aGVtZS50eXBlcy50c1wiO1xuaW1wb3J0ICogYXMgYm9keSBmcm9tIFwiLi9ib2R5LnRzXCI7XG5pbXBvcnQgKiBhcyBrZXlib2FyZCBmcm9tIFwiLi9rZXlib2FyZC50c1wiO1xuaW1wb3J0ICogYXMga2V5cyBmcm9tIFwiLi9rZXlzLnRzXCI7XG5pbXBvcnQgKiBhcyBzY3JlZW4gZnJvbSBcIi4vc2NyZWVuLnRzXCI7XG5pbXBvcnQgKiBhcyB0b2dnbGUgZnJvbSBcIi4vdG9nZ2xlLnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVLZXlIYW5kbGVyKCk6IHZvaWQge1xuXHRzY3JlZW4uZGVsZXRlTGFzdERpZ2l0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEhhbmRsZXIobGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQpIHtcblx0Y29uc3QgY2xhc3NOYW1lID0gbGFiZWwuY2xhc3NOYW1lO1xuXG5cdGNvbnN0IHRoZW1lUmVnZXggPSAvbGlnaHR8ZGFya3xwdXJwbGUvO1xuXG5cdGNvbnN0IGN1cnJlbnRUaGVtZSA9IHRoZW1lU3RvcmFnZS5nZXRUaGVtZSgpO1xuXHRjb25zdCB0aGVtZSA9IGNsYXNzTmFtZS5tYXRjaCh0aGVtZVJlZ2V4KT8uWzBdIGFzIFRoZW1lO1xuXG5cdGlmIChjdXJyZW50VGhlbWUgPT09IHRoZW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhlbWVTdG9yYWdlLnNhdmVUaGVtZSh0aGVtZSk7XG5cblx0Ym9keS5zZXRUaGVtZUNsYXNzTmFtZSh0aGVtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVyYXRvcktleUhhbmRsZXIob3BlcmF0b3JLZXk6IEhUTUxCdXR0b25FbGVtZW50KTogdm9pZCB7XG5cdGNvbnN0IGtleVZhbHVlID0ga2V5cy5nZXRLZXlWYWx1ZShvcGVyYXRvcktleSk7XG5cblx0c2NyZWVuLmluc2VydE9wZXJhdG9yRGlnaXQoa2V5VmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVndWxhcktleUhhbmRsZXIocmVndWxhcktleTogSFRNTEJ1dHRvbkVsZW1lbnQpOiB2b2lkIHtcblx0Y29uc3Qga2V5VmFsdWUgPSBrZXlzLmdldEtleVZhbHVlKHJlZ3VsYXJLZXkpO1xuXG5cdHNjcmVlbi5pbnNlcnROdW1lcmljRGlnaXQoa2V5VmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRLZXlIYW5kbGVyKCk6IHZvaWQge1xuXHRzY3JlZW4ucmVzZXQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3VsdEtleUhhbmRsZXIoKSB7XG5cdHNjcmVlbi5kaXNwbGF5UmVzdWx0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBrZXlib2FyZEhhbmRsZXIoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuXHRjb25zdCBrZXkgPSBlLmtleTtcblxuXHRjb25zdCBjaGVja1NwZWNpYWxLZXlXYXNQcmVzc2VkID0ga2V5Ym9hcmQuY2hlY2tTcGVjaWFsS2V5V2FzUHJlc3NlZChlKTtcblxuXHRjb25zdCBpc051bWVyaWNLZXkgPSBrZXlib2FyZC5pc051bWVyaWNLZXkoa2V5KTtcblx0Y29uc3QgaXNPcGVyYXRvcktleSA9IGtleWJvYXJkLmlzT3BlcmF0b3JLZXkoa2V5KTtcblx0Y29uc3QgaXNEZWxldGVLZXkgPSBrZXlib2FyZC5pc0RlbGV0ZUtleShrZXkpO1xuXHRjb25zdCBpc1Jlc3VsdEtleSA9IGtleWJvYXJkLmlzUmVzdWx0S2V5KGtleSk7XG5cdGNvbnN0IGlzUmVzZXRLZXkgPSBrZXlib2FyZC5pc1Jlc2V0S2V5KGtleSk7XG5cblx0LyoqXG5cdCAqIFN0b3BzLCBieSBleGFtcGxlLCBpbnNlcnRpbmdcblx0ICogYSBudW1lcmljIGRpZ2l0IG9uIHRoZSBjYWxjdWxhdG9yIHNjcmVlblxuXHQgKiB3aGlsZSBwcmVzc2luZyB0aGUgYWx0IGtleSBhbmQgYVxuXHQgKiBudW1lcmljIGtleSBvbiB0aGUgdXNlciBrZXlib2FyZCB3aGVuXG5cdCAqIHRoZSB1c2VyIGlzIHN3YXBwaW5nIGJldHdlZW4gcGFnZXMgYnlcblx0ICogdGhlIHVzYWdlIG9mIGJyb3dzZXIncyBzaG9ydGN1dHMuXG5cdCAqL1xuXHRpZiAoY2hlY2tTcGVjaWFsS2V5V2FzUHJlc3NlZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGlzSW52YWxpZEtleSA9XG5cdFx0IWlzTnVtZXJpY0tleSAmJlxuXHRcdCFpc09wZXJhdG9yS2V5ICYmXG5cdFx0IWlzRGVsZXRlS2V5ICYmXG5cdFx0IWlzUmVzdWx0S2V5ICYmXG5cdFx0IWlzUmVzZXRLZXk7XG5cblx0aWYgKGlzSW52YWxpZEtleSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIHRyaWdnZXJzIHF1aWNrIGZpbmQgb24gZmlyZWZveC5cblx0aWYgKGtleSA9PT0gXCIvXCIpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHRpZiAoaXNOdW1lcmljS2V5KSB7XG5cdFx0c2NyZWVuLmluc2VydE51bWVyaWNEaWdpdChrZXkpO1xuXHR9IGVsc2UgaWYgKGlzT3BlcmF0b3JLZXkpIHtcblx0XHRzY3JlZW4uaW5zZXJ0T3BlcmF0b3JEaWdpdChrZXkpO1xuXHR9IGVsc2UgaWYgKGlzRGVsZXRlS2V5KSB7XG5cdFx0c2NyZWVuLmRlbGV0ZUxhc3REaWdpdCgpO1xuXHR9IGVsc2UgaWYgKGlzUmVzdWx0S2V5KSB7XG5cdFx0LyogXG4gICAgICBzdG9wIHRoZSBhZGRpdGlvbiBvZiBhIGtleVxuICAgICAgd2hpY2ggbWF5IGJlIGZvY3VzZWQgd2hlblxuICAgICAgdGhlIGVudGVyIGJ1dHRvbiBpcyBwcmVzc2VkLFxuICAgICAgYSBiZWhhdmlvciB0aGF0IGlzIHRoZSBzYW1lIGFzXG4gICAgICBjbGlja2luZyBvbiB0aGUgYnV0dG9uLlxuICAgICovXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0c2NyZWVuLmRpc3BsYXlSZXN1bHQoKTtcblx0fSBlbHNlIGlmIChpc1Jlc2V0S2V5KSB7XG5cdFx0c2NyZWVuLnJlc2V0KCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUaGVtZUhhbmRsZXIoKSB7XG5cdGNvbnN0IHRoZW1lID0gdGhlbWVTdG9yYWdlLmdldFRoZW1lKCk7XG5cblx0aWYgKCF0aGVtZSkge1xuXHRcdHRoZW1lU3RvcmFnZS5zYXZlVGhlbWUoXCJkYXJrXCIpO1xuXHR9XG5cblx0Ym9keS5zZXRUaGVtZUNsYXNzTmFtZSh0aGVtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVIYW5kbGVyKGU6IE1vdXNlRXZlbnQpIHtcblx0Y29uc3QgY2xpY2tlZEFyZWEgPSB0b2dnbGUuZ2V0Q2xpY2tlZEFyZWEoZSk7XG5cblx0Y29uc3QgY3VycmVudFRoZW1lID0gdGhlbWVTdG9yYWdlLmdldFRoZW1lKCk7XG5cdGNvbnN0IHRoZW1lID0gaGVscGVycy5nZXRUaGVtZUJhc2VkT25DbGlja2VkQXJlYShjbGlja2VkQXJlYSk7XG5cblx0aWYgKGN1cnJlbnRUaGVtZSA9PT0gdGhlbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGVtZVN0b3JhZ2Uuc2F2ZVRoZW1lKHRoZW1lKTtcblxuXHRib2R5LnNldFRoZW1lQ2xhc3NOYW1lKHRoZW1lKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0RlbGV0ZUtleShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gKFxuXHRcdGtleS50b0xvd2VyQ2FzZSgpID09PSBcImJhY2tzcGFjZVwiIHx8IGtleS50b0xvd2VyQ2FzZSgpID09PSBcImRlbGV0ZVwiXG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWVyaWNLZXkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcblx0cmV0dXJuIC9eWzAtOV0kLy50ZXN0KGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09wZXJhdG9yS2V5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdHJldHVybiAvW1xcK1xcLVxcKlxcL1xcLl0vLnRlc3Qoa2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzZXRLZXkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcblx0cmV0dXJuIGtleS50b0xvd2VyQ2FzZSgpID09PSBcImVzY2FwZVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXN1bHRLZXkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcblx0cmV0dXJuIGtleSA9PT0gXCI9XCIgfHwga2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiZW50ZXJcIjtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYWx0IG9yIGN0cmwga2V5c1xuICogd2VyZSBwcmVzc2VkIHdoaWxlIGhpdGluZyBhbm90aGVyIGtleS5cbiAqIEBwYXJhbSBlIGEgS2V5Ym9hcmRFdmVudCBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1NwZWNpYWxLZXlXYXNQcmVzc2VkKGU6IEtleWJvYXJkRXZlbnQpOiBib29sZWFuIHtcblx0Y29uc3QgaXNTcGVjaWFsS2V5ID0gZS5jdHJsS2V5IHx8IGUuYWx0S2V5O1xuXG5cdHJldHVybiBpc1NwZWNpYWxLZXk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0S2V5VmFsdWUoa2V5OiBIVE1MQnV0dG9uRWxlbWVudCk6IHN0cmluZyB7XG5cdHJldHVybiBrZXkuZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKSE7XG59XG4iLCJpbXBvcnQge3BhcnNlcn0gZnJvbSBcIi4uL21vZHVsZXMvcGFyc2VyL3BhcnNlci50c1wiO1xuaW1wb3J0IHtFWFBSRVNTSU9OX0xBU1RfQ0hBUl9JU19PUEVSQVRPUl9SRUdFWH0gZnJvbSBcIi4uL21vZHVsZXMvcmVnZXgvcGF0dGVybnMudHNcIjtcbmltcG9ydCB7JHNjcmVlbn0gZnJvbSBcIi4vZWxlbWVudHMudHNcIjtcblxuZXhwb3J0IGNvbnN0IFNDUkVFTl9WQUxVRV9MRU5HVEhfTElNSVQgPSAxMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUxhc3REaWdpdCgpIHtcblx0Y29uc3Qgc2NyZWVuVmFsdWUgPSBnZXRTY3JlZW5WYWx1ZSgpO1xuXG5cdGlmIChzY3JlZW5WYWx1ZSA9PT0gXCIwXCIpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoc2NyZWVuVmFsdWUubGVuZ3RoID09PSAxKSB7XG5cdFx0c2V0U2NyZWVuVmFsdWUoXCIwXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IHNsaWNlZFNjcmVlblZhbHVlID0gc2NyZWVuVmFsdWUuc2xpY2UoMCwgLTEpO1xuXG5cdFx0c2V0U2NyZWVuVmFsdWUoc2xpY2VkU2NyZWVuVmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UmVzdWx0KCkge1xuXHRjb25zdCBleHByZXNzaW9uID0gZ2V0U2NyZWVuVmFsdWUoKTtcblxuXHRsZXQgZXZhbHVhdGVkRXhwcmVzc2lvbiA9IHBhcnNlcihleHByZXNzaW9uKS50b1N0cmluZygpO1xuXG5cdGlmIChldmFsdWF0ZWRFeHByZXNzaW9uID09PSBleHByZXNzaW9uKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGV2YWx1YXRlZEV4cHJlc3Npb24ubGVuZ3RoID4gU0NSRUVOX1ZBTFVFX0xFTkdUSF9MSU1JVCkge1xuXHRcdGV2YWx1YXRlZEV4cHJlc3Npb24gPSBldmFsdWF0ZWRFeHByZXNzaW9uLnNsaWNlKFxuXHRcdFx0MCxcblx0XHRcdFNDUkVFTl9WQUxVRV9MRU5HVEhfTElNSVQsXG5cdFx0KTtcblx0fVxuXG5cdHNldFNjcmVlblZhbHVlKGV2YWx1YXRlZEV4cHJlc3Npb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NyZWVuVmFsdWUoKTogc3RyaW5nIHtcblx0cmV0dXJuICRzY3JlZW4hLnRleHRDb250ZW50ITtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydE9wZXJhdG9yRGlnaXQoZGlnaXQ6IHN0cmluZyk6IHZvaWQge1xuXHRjb25zdCBzY3JlZW5WYWx1ZSA9IGdldFNjcmVlblZhbHVlKCk7XG5cblx0Y29uc3Qgc2NyZWVuVmFsdWVMZW5ndGggPSBzY3JlZW5WYWx1ZS5sZW5ndGg7XG5cblx0Y29uc3QgaXNMYXN0Q2hhckFuT3BlcmF0b3IgPVxuXHRcdEVYUFJFU1NJT05fTEFTVF9DSEFSX0lTX09QRVJBVE9SX1JFR0VYLnRlc3Qoc2NyZWVuVmFsdWUpO1xuXG5cdGlmIChpc0xhc3RDaGFyQW5PcGVyYXRvcikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChzY3JlZW5WYWx1ZUxlbmd0aCA8IFNDUkVFTl9WQUxVRV9MRU5HVEhfTElNSVQpIHtcblx0XHRpZiAoc2NyZWVuVmFsdWUgPT09IFwiMFwiKSB7XG5cdFx0XHRpZiAoZGlnaXQgPT09IFwiK1wiIHx8IGRpZ2l0ID09PSBcIi1cIikge1xuXHRcdFx0XHRzZXRTY3JlZW5WYWx1ZShkaWdpdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRTY3JlZW5WYWx1ZShzY3JlZW5WYWx1ZSArIGRpZ2l0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0U2NyZWVuVmFsdWUoc2NyZWVuVmFsdWUgKyBkaWdpdCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnROdW1lcmljRGlnaXQoZGlnaXQ6IHN0cmluZyk6IHZvaWQge1xuXHRjb25zdCBzY3JlZW5WYWx1ZSA9IGdldFNjcmVlblZhbHVlKCk7XG5cblx0Y29uc3Qgc2NyZWVuVmFsdWVMZW5ndGggPSBzY3JlZW5WYWx1ZS5sZW5ndGg7XG5cblx0aWYgKHNjcmVlblZhbHVlTGVuZ3RoIDwgU0NSRUVOX1ZBTFVFX0xFTkdUSF9MSU1JVCkge1xuXHRcdGlmIChzY3JlZW5WYWx1ZSA9PT0gXCIwXCIpIHtcblx0XHRcdHNldFNjcmVlblZhbHVlKGRpZ2l0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0U2NyZWVuVmFsdWUoc2NyZWVuVmFsdWUgKyBkaWdpdCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldCgpOiB2b2lkIHtcblx0Y29uc3Qgc2NyZWVuVmFsdWUgPSBnZXRTY3JlZW5WYWx1ZSgpO1xuXG5cdGlmIChzY3JlZW5WYWx1ZSA9PT0gXCIwXCIpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRzZXRTY3JlZW5WYWx1ZShcIjBcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTY3JlZW5WYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdCRzY3JlZW4hLnRleHRDb250ZW50ID0gdmFsdWU7XG59XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnMudHNcIjtcbmltcG9ydCAqIGFzIGVsZW1lbnRzIGZyb20gXCIuL2VsZW1lbnRzLnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGlja2VkQXJlYShlOiBNb3VzZUV2ZW50KTogXCJzdGFydFwiIHwgXCJtaWRkbGVcIiB8IFwiZW5kXCIge1xuXHRjb25zdCB4TW91c2VDbGljayA9IGUucGFnZVg7XG5cblx0Y29uc3QgdG9nZ2xlQm91bmRpbmdDbGllbnQgPSBlbGVtZW50cy4kdG9nZ2xlIS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0Y29uc3QgdG9nZ2xlTGVmdCA9IE1hdGgudHJ1bmModG9nZ2xlQm91bmRpbmdDbGllbnQubGVmdCk7XG5cdGNvbnN0IHRvZ2dsZVdpZHRoID0gdG9nZ2xlQm91bmRpbmdDbGllbnQud2lkdGg7XG5cblx0Y29uc3QgdG9nZ2xlQ2xpY2tlZEFyZWEgPSB4TW91c2VDbGljayAtIHRvZ2dsZUxlZnQ7XG5cblx0Y29uc3QgcmVsYXRpdmVQZXJjZW50YWdlID0gaGVscGVycy5nZXRSZWxhdGl2ZVBlcmNlbnRhZ2UoXG5cdFx0dG9nZ2xlQ2xpY2tlZEFyZWEsXG5cdFx0dG9nZ2xlV2lkdGgsXG5cdCk7XG5cblx0Y29uc3Qgc3RhcnRBcmVhUmFuZ2UgPVxuXHRcdHJlbGF0aXZlUGVyY2VudGFnZSA+PSAwICYmIHJlbGF0aXZlUGVyY2VudGFnZSA8IDQwO1xuXHRjb25zdCBtaWRkbGVBcmVhUmFuZ2UgPVxuXHRcdHJlbGF0aXZlUGVyY2VudGFnZSA+PSA0MCAmJiByZWxhdGl2ZVBlcmNlbnRhZ2UgPCA2NTtcblxuXHRpZiAoc3RhcnRBcmVhUmFuZ2UpIHtcblx0XHRyZXR1cm4gXCJzdGFydFwiO1xuXHR9IGVsc2UgaWYgKG1pZGRsZUFyZWFSYW5nZSkge1xuXHRcdHJldHVybiBcIm1pZGRsZVwiO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBcImVuZFwiO1xuXHR9XG59XG4iLCJpbXBvcnQgdHlwZSB7VGhlbWV9IGZyb20gXCIuLi90eXBlcy90aGVtZS50eXBlcy50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVsYXRpdmVQZXJjZW50YWdlKFxuXHRwYXJ0OiBudW1iZXIsXG5cdHRvdGFsOiBudW1iZXIsXG4pOiBudW1iZXIge1xuXHRpZiAodG90YWwgPD0gMCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlRvdGFsIGNhbm5vdCBiZSB6ZXJvXCIpO1xuXHR9XG5cblx0cmV0dXJuIE1hdGgudHJ1bmMoKHBhcnQgLyB0b3RhbCkgKiAxMDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGhlbWVCYXNlZE9uQ2xpY2tlZEFyZWEoXG5cdGNsaWNrZWRBcmVhOiBcInN0YXJ0XCIgfCBcIm1pZGRsZVwiIHwgXCJlbmRcIixcbik6IFRoZW1lIHtcblx0c3dpdGNoIChjbGlja2VkQXJlYSkge1xuXHRcdGNhc2UgXCJzdGFydFwiOlxuXHRcdFx0cmV0dXJuIFwiZGFya1wiO1xuXHRcdGNhc2UgXCJtaWRkbGVcIjpcblx0XHRcdHJldHVybiBcImxpZ2h0XCI7XG5cdFx0Y2FzZSBcImVuZFwiOlxuXHRcdFx0cmV0dXJuIFwicHVycGxlXCI7XG5cdH1cbn1cbiIsImltcG9ydCB7VkFMSURfRVhQUkVTU0lPTl9SRUdFWH0gZnJvbSBcIi4uLy4uL3JlZ2V4L3BhdHRlcm5zLnRzXCI7XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBtYXRoZW1hdGljYWwgZXhwcmVzc2lvbiBpcyB2YWxpZC5cbiAqXG4gKiBWYWxpZCBleHByZXNzaW9uIGV4YW1wbGVzOlxuICpcbiAqIDEyKzUtMS40MjBcbiAqXG4gKiAwLjUqMTAwXG4gKlxuICogNC8yKjhcbiAqXG4gKiAwLjEyNS8xMi0zMyo0LjJcbiAqIEBwYXJhbSBleHByZXNzaW9uIEEgbWF0aGVtYXRpY2FsIGV4cHJlc3Npb24uXG4gKiBAcmV0dXJucyBSZXR1cm5zIHRydWUgaWYgdGhlIG1hdGhlbWF0aWNhbCBleHByZXNzaW9uIGlzIGEgdmFsaWQgb25lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZEV4cHJlc3Npb24oZXhwcmVzc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdHJldHVybiBWQUxJRF9FWFBSRVNTSU9OX1JFR0VYLnRlc3QoZXhwcmVzc2lvbik7XG59XG4iLCJpbXBvcnQge2lzVmFsaWRFeHByZXNzaW9ufSBmcm9tIFwiLi9oZWxwZXJzL2lzVmFsaWRFeHByZXNzaW9uLnRzXCI7XG5cbi8qKlxuICogUmVjZWl2ZXMgYSBtYXRoZW1hdGljYWwgZXhwcmVzc2lvblxuICogYW5kIHJlc29sdmVzIGl0LlxuICogQHBhcmFtIGV4cHJlc3Npb24gQSBtYXRoZW1hdGljYWwgZXhwcmVzc2lvbi5cbiAqIEByZXR1cm5zIFJldHVybnMgdGhlIHJlc3VsdCBvZiBhIGdpdmVuIG1hdGhlbWF0aWNhbCBleHByZXNzaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VyKGV4cHJlc3Npb246IHN0cmluZyk6IHN0cmluZyB7XG5cdGNvbnN0IGlzVmFsaWQgPSBpc1ZhbGlkRXhwcmVzc2lvbihleHByZXNzaW9uKTtcblxuXHRpZiAoIWlzVmFsaWQpIHtcblx0XHRyZXR1cm4gZXhwcmVzc2lvbjtcblx0fVxuXG5cdHJldHVybiBldmFsKGV4cHJlc3Npb24pO1xufVxuIiwiLyoqXG4gKiBWYWxpZCBleHByZXNzaW9uIGV4YW1wbGVzOlxuICpcbiAqIDEyKzUtMS40MjBcbiAqXG4gKiAwLjUqMTAwXG4gKlxuICogNC8yKjhcbiAqXG4gKiAwLjEyNS8xMi0zMyo0LjJcbiAqL1xuZXhwb3J0IGNvbnN0IFZBTElEX0VYUFJFU1NJT05fUkVHRVggPVxuXHQvXltcXCtcXC1dPyg/PGZpcnN0T3BlcmFuZD5bMC05XSsoPzpcXC5bMC05XSspPykoPzooPzxvcGVyYXRvcj5bXFwrXFwtXFwqXFwvXSkoPzxzZWNvbmRPcGVyYW5kPlswLTldKyg/OlxcLlswLTldKyk/KSkrJC87XG5cbmV4cG9ydCBjb25zdCBFWFBSRVNTSU9OX0xBU1RfQ0hBUl9JU19PUEVSQVRPUl9SRUdFWCA9IC9bXFwrXFwtXFwqXFwvXFwuXSQvO1xuIiwiaW1wb3J0IHR5cGUge1RoZW1lfSBmcm9tIFwiLi4vdHlwZXMvdGhlbWUudHlwZXMudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRoZW1lKCk6IFRoZW1lIHtcblx0cmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgYXMgVGhlbWU7XG59XG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRoZW1lKHRoZW1lOiBUaGVtZSk6IHZvaWQge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHRoZW1lKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2luaXRFdmVudHN9IGZyb20gXCIuL2RvbS9ldmVudHMudHNcIjtcblxuZnVuY3Rpb24gaW5pdCgpIHtcblx0aW5pdEV2ZW50cygpO1xufVxuXG5pbml0KCk7XG4iXSwibmFtZXMiOlsiJGJvZHkiLCJzZXRUaGVtZUNsYXNzTmFtZSIsInRoZW1lIiwiY2xhc3NOYW1lIiwiY29uY2F0IiwiZG9jdW1lbnQiLCJib2R5IiwiJGRlbGV0ZUtleSIsInF1ZXJ5U2VsZWN0b3IiLCIkbGFiZWxzIiwicXVlcnlTZWxlY3RvckFsbCIsIiRvcGVyYXRvcktleXMiLCIkcmVndWxhcktleXMiLCIkcmVzZXRLZXkiLCIkcmVzdWx0S2V5IiwiJHNjcmVlbiIsIiR0aHVtYiIsIiR0b2dnbGUiLCJlbGVtZW50cyIsImhhbmRsZXJzIiwiaW5pdEV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2FkVGhlbWVIYW5kbGVyIiwiZSIsImtleWJvYXJkSGFuZGxlciIsImRlbGV0ZUtleUhhbmRsZXIiLCJmb3JFYWNoIiwibGFiZWwiLCJsYWJlbEhhbmRsZXIiLCJrZXkiLCJvcGVyYXRvcktleUhhbmRsZXIiLCJyZWd1bGFyS2V5SGFuZGxlciIsInJlc2V0S2V5SGFuZGxlciIsInJlc3VsdEtleUhhbmRsZXIiLCJ0b2dnbGVIYW5kbGVyIiwiaGVscGVycyIsInRoZW1lU3RvcmFnZSIsImtleWJvYXJkIiwia2V5cyIsInNjcmVlbiIsInRvZ2dsZSIsImRlbGV0ZUxhc3REaWdpdCIsIl9jbGFzc05hbWUkbWF0Y2giLCJ0aGVtZVJlZ2V4IiwiY3VycmVudFRoZW1lIiwiZ2V0VGhlbWUiLCJtYXRjaCIsInNhdmVUaGVtZSIsIm9wZXJhdG9yS2V5Iiwia2V5VmFsdWUiLCJnZXRLZXlWYWx1ZSIsImluc2VydE9wZXJhdG9yRGlnaXQiLCJyZWd1bGFyS2V5IiwiaW5zZXJ0TnVtZXJpY0RpZ2l0IiwicmVzZXQiLCJkaXNwbGF5UmVzdWx0IiwiY2hlY2tTcGVjaWFsS2V5V2FzUHJlc3NlZCIsImlzTnVtZXJpY0tleSIsImlzT3BlcmF0b3JLZXkiLCJpc0RlbGV0ZUtleSIsImlzUmVzdWx0S2V5IiwiaXNSZXNldEtleSIsImlzSW52YWxpZEtleSIsInByZXZlbnREZWZhdWx0IiwiY2xpY2tlZEFyZWEiLCJnZXRDbGlja2VkQXJlYSIsImdldFRoZW1lQmFzZWRPbkNsaWNrZWRBcmVhIiwidG9Mb3dlckNhc2UiLCJ0ZXN0IiwiaXNTcGVjaWFsS2V5IiwiY3RybEtleSIsImFsdEtleSIsImdldEF0dHJpYnV0ZSIsInBhcnNlciIsIkVYUFJFU1NJT05fTEFTVF9DSEFSX0lTX09QRVJBVE9SX1JFR0VYIiwiU0NSRUVOX1ZBTFVFX0xFTkdUSF9MSU1JVCIsInNjcmVlblZhbHVlIiwiZ2V0U2NyZWVuVmFsdWUiLCJsZW5ndGgiLCJzZXRTY3JlZW5WYWx1ZSIsInNsaWNlZFNjcmVlblZhbHVlIiwic2xpY2UiLCJleHByZXNzaW9uIiwiZXZhbHVhdGVkRXhwcmVzc2lvbiIsInRvU3RyaW5nIiwidGV4dENvbnRlbnQiLCJkaWdpdCIsInNjcmVlblZhbHVlTGVuZ3RoIiwiaXNMYXN0Q2hhckFuT3BlcmF0b3IiLCJ2YWx1ZSIsInhNb3VzZUNsaWNrIiwicGFnZVgiLCJ0b2dnbGVCb3VuZGluZ0NsaWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvZ2dsZUxlZnQiLCJNYXRoIiwidHJ1bmMiLCJsZWZ0IiwidG9nZ2xlV2lkdGgiLCJ3aWR0aCIsInRvZ2dsZUNsaWNrZWRBcmVhIiwicmVsYXRpdmVQZXJjZW50YWdlIiwiZ2V0UmVsYXRpdmVQZXJjZW50YWdlIiwic3RhcnRBcmVhUmFuZ2UiLCJtaWRkbGVBcmVhUmFuZ2UiLCJwYXJ0IiwidG90YWwiLCJFcnJvciIsIlZBTElEX0VYUFJFU1NJT05fUkVHRVgiLCJpc1ZhbGlkRXhwcmVzc2lvbiIsImlzVmFsaWQiLCJldmFsIiwiX3dyYXBSZWdFeHAiLCJmaXJzdE9wZXJhbmQiLCJvcGVyYXRvciIsInNlY29uZE9wZXJhbmQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImluaXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==