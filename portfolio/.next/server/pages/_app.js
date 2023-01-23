"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./behaviour/context.js":
/*!******************************!*\
  !*** ./behaviour/context.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ThemeContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/themes */ \"./utils/themes.js\");\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(_utils_themes__WEBPACK_IMPORTED_MODULE_1__.themes);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9iZWhhdmlvdXIvY29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNDO0FBQ0c7QUFFbEMsTUFBTUUsNkJBQWVGLG9EQUFhQSxDQUFDQyxpREFBTUEsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL2JlaGF2aW91ci9jb250ZXh0LmpzPzM0MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRoZW1lcyB9IGZyb20gJy4uL3V0aWxzL3RoZW1lcyc7XG5cbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHRoZW1lcyk7Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ0aGVtZXMiLCJUaGVtZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./behaviour/context.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _behaviour_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../behaviour/context */ \"./behaviour/context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GlobalStyles */ \"./utils/GlobalStyles.js\");\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const theme = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_behaviour_context__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);\n    const [currentTheme, setCurrentTheme] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(theme);\n    function toggleTheme() {\n        setCurrentTheme(currentTheme === theme.dark ? theme.light : theme.dark);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_behaviour_context__WEBPACK_IMPORTED_MODULE_1__.ThemeContext.Provider, {\n        value: currentTheme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                theme: theme\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleTheme,\n                children: \"Toggle theme\"\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ1A7QUFDSTtBQUVqRCxTQUFTSSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDckMsTUFBTUMsUUFBUUwsaURBQVVBLENBQUNGLDREQUFZQTtJQUNyQyxNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBQ007SUFHakQsU0FBU0csY0FBYztRQUNyQkQsZ0JBQWdCRCxpQkFBaUJELE1BQU1JLElBQUksR0FBR0osTUFBTUssS0FBSyxHQUFHTCxNQUFNSSxJQUFJO0lBQ3hFO0lBRUEscUJBQ0UsOERBQUNYLHFFQUFxQjtRQUFDYyxPQUFPTjs7MEJBQzlCLDhEQUFDTCwyREFBWUE7Z0JBQUNJLE9BQU9BOzs7Ozs7MEJBQ25CLDhEQUFDUTtnQkFBT0MsU0FBU047MEJBQWE7Ozs7OzswQkFDOUIsOERBQUNMO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gJy4uL2JlaGF2aW91ci9jb250ZXh0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdsb2JhbFN0eWxlcyBmcm9tICcuLi91dGlscy9HbG9iYWxTdHlsZXMnO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICBjb25zdCBbY3VycmVudFRoZW1lLCBzZXRDdXJyZW50VGhlbWVdID0gdXNlU3RhdGUodGhlbWUpO1xuXG5cbiAgZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XG4gICAgc2V0Q3VycmVudFRoZW1lKGN1cnJlbnRUaGVtZSA9PT0gdGhlbWUuZGFyayA/IHRoZW1lLmxpZ2h0IDogdGhlbWUuZGFyayk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2N1cnJlbnRUaGVtZX0+XG4gICAgPEdsb2JhbFN0eWxlcyB0aGVtZT17dGhlbWV9Lz5cbiAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlVGhlbWV9PlRvZ2dsZSB0aGVtZTwvYnV0dG9uPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbIlRoZW1lQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIkdsb2JhbFN0eWxlcyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwiY3VycmVudFRoZW1lIiwic2V0Q3VycmVudFRoZW1lIiwidG9nZ2xlVGhlbWUiLCJkYXJrIiwibGlnaHQiLCJQcm92aWRlciIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/GlobalStyles.js":
/*!*******************************!*\
  !*** ./utils/GlobalStyles.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _behaviour_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../behaviour/context */ \"./behaviour/context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle`\n  body {\n    background: ${(props)=>props.theme.background};\n    color: ${(props)=>props.theme.text};\n  }\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const theme = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_behaviour_context__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {\n        theme: theme\n    }, void 0, false, {\n        fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/utils/GlobalStyles.js\",\n        lineNumber: 14,\n        columnNumber: 10\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9HbG9iYWxTdHlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ0Y7QUFDUDtBQUU3QyxNQUFNSSxlQUFlSixnRUFBaUIsQ0FBQzs7Z0JBRXZCLEVBQUVLLENBQUFBLFFBQVNBLE1BQU1DLEtBQUssQ0FBQ0MsVUFBVSxDQUFDO1dBQ3ZDLEVBQUVGLENBQUFBLFFBQVNBLE1BQU1DLEtBQUssQ0FBQ0UsSUFBSSxDQUFDOztBQUV2QyxDQUFDO0FBRUQsaUVBQWUsSUFBTTtJQUNuQixNQUFNRixRQUFRSCxpREFBVUEsQ0FBQ0YsNERBQVlBO0lBQ3JDLHFCQUFPLDhEQUFDRztRQUFhRSxPQUFPQTs7Ozs7O0FBQzlCLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi91dGlscy9HbG9iYWxTdHlsZXMuanM/YzY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gJy4uL2JlaGF2aW91ci9jb250ZXh0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5iYWNrZ3JvdW5kfTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0fTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgcmV0dXJuIDxHbG9iYWxTdHlsZXMgdGhlbWU9e3RoZW1lfSAvPjtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJUaGVtZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJHbG9iYWxTdHlsZXMiLCJwcm9wcyIsInRoZW1lIiwiYmFja2dyb3VuZCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/GlobalStyles.js\n");

/***/ }),

/***/ "./utils/themes.js":
/*!*************************!*\
  !*** ./utils/themes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"themes\": () => (/* binding */ themes)\n/* harmony export */ });\nconst themes = {\n    light: {\n        background: \"white\",\n        text: \"black\"\n    },\n    dark: {\n        background: \"black\",\n        text: \"white\"\n    },\n    pink: {\n        background: \"pink\",\n        text: \"purple\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy90aGVtZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFNBQVM7SUFDcEJDLE9BQU87UUFDTEMsWUFBWTtRQUNaQyxNQUFNO0lBQ1I7SUFDQUMsTUFBTTtRQUNKRixZQUFZO1FBQ1pDLE1BQU07SUFDUjtJQUNBRSxNQUFNO1FBQ0pILFlBQVk7UUFDWkMsTUFBTTtJQUNSO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3V0aWxzL3RoZW1lcy5qcz9lOGQ2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0aGVtZXMgPSB7XG4gIGxpZ2h0OiB7XG4gICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICB0ZXh0OiAnYmxhY2snXG4gIH0sXG4gIGRhcms6IHtcbiAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgIHRleHQ6ICd3aGl0ZSdcbiAgfSxcbiAgcGluazoge1xuICAgIGJhY2tncm91bmQ6ICdwaW5rJyxcbiAgICB0ZXh0OiAncHVycGxlJ1xuICB9XG59OyJdLCJuYW1lcyI6WyJ0aGVtZXMiLCJsaWdodCIsImJhY2tncm91bmQiLCJ0ZXh0IiwiZGFyayIsInBpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/themes.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();