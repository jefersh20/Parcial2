/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../Parcial_\u0000#2/Modules/unitConvert.js":
/*!*********************************************!*\
  !*** ../Parcial_ #2/Modules/unitConvert.js ***!
  \*********************************************/
/***/ (() => {

eval("let celsius = document.getElementById('celsius');\r\nlet fahrenheit = document.getElementById('fahrenheit');\r\n\r\ncelsius.oninput = ()  => {\r\n  let output = (parseFloat(celsius.value) *9) / 5 + 32;\r\n  fahrenheit.value = parseFloat(output.toFixed(2));\r\n};\r\n\r\nfahrenheit.oninput = ()  => {\r\n  let output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9 ;\r\n  celsius.value = parseFloat(output.toFixed(2));\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///../Parcial_%00#2/Modules/unitConvert.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../Parcial_\u0000#2/Modules/unitConvert.js"]();
/******/ 	
/******/ })()
;