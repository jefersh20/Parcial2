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

/***/ "../Parcial_\u0000#2/Modules/passwordGen.js":
/*!*********************************************!*\
  !*** ../Parcial_ #2/Modules/passwordGen.js ***!
  \*********************************************/
/***/ (() => {

eval("const generatePassword = (base, length) => {\r\n  let password = \"\";\r\n  for (let x = 0; x < length; x++) {\r\n      let random = Math.floor(Math.random() * base.length);\r\n      password += base.charAt(random);\r\n  }\r\n  return password;\r\n};\r\n\r\nconst generate = () => {\r\n  let length = parseInt(inputLength.value);\r\n\r\n  let base = \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\";\r\n  const numbers = \"0123456789\";\r\n  const symbols = \".?,;-_¡!¿*%&$/()[]{}|@><\";\r\n\r\n  if (checkbox1.checked) base += numbers;\r\n\r\n  if (checkbox2.checked) base += symbols;\r\n\r\n  generatedPassword.innerText = generatePassword(base, length);\r\n};\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n  btnGenerate.addEventListener(\"click\", () => {\r\n      generate();\r\n  });\r\n});\n\n//# sourceURL=webpack:///../Parcial_%00#2/Modules/passwordGen.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../Parcial_\u0000#2/Modules/passwordGen.js"]();
/******/ 	
/******/ })()
;