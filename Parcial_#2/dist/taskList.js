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

/***/ "../Parcial_\u0000#2/Modules/taskList.js":
/*!******************************************!*\
  !*** ../Parcial_ #2/Modules/taskList.js ***!
  \******************************************/
/***/ (() => {

eval("// Info date\r\nconst dateNumber = document.getElementById('dateNumber');\r\nconst dateText = document.getElementById('dateText');\r\nconst dateMonth = document.getElementById('dateMonth');\r\nconst dateYear = document.getElementById('dateYear');\r\n\r\n// Tasks Container\r\nconst tasksContainer = document.getElementById('tasksContainer');\r\n\r\nconst setDate = () => {\r\n    const date = new Date();\r\n    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });\r\n    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });\r\n    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });\r\n    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });\r\n};\r\n\r\nconst addNewTask = event => {\r\n    event.preventDefault();\r\n    const { value } = event.target.taskText;\r\n    if(!value) return;\r\n    const task = document.createElement('div');\r\n    task.classList.add('task', 'roundBorder');\r\n    task.addEventListener('click', changeTaskState)\r\n    task.textContent = value;\r\n    tasksContainer.prepend(task);\r\n    event.target.reset();\r\n};\r\n\r\nconst changeTaskState = event => {\r\n    event.target.classList.toggle('done');\r\n};\r\n\r\nconst order = () => {\r\n    const done = [];\r\n    const toDo = [];\r\n    tasksContainer.childNodes.forEach( el => {\r\n        el.classList.contains('done') ? done.push(el) : toDo.push(el)\r\n    })\r\n    return [...toDo, ...done];\r\n}\r\n\r\nconst renderOrderedTasks = () => {\r\n    order().forEach(el => tasksContainer.appendChild(el))\r\n}\r\n\r\nsetDate();\n\n//# sourceURL=webpack:///../Parcial_%00#2/Modules/taskList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../Parcial_\u0000#2/Modules/taskList.js"]();
/******/ 	
/******/ })()
;