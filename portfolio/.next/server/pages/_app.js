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

/***/ "./components/button/Button.js":
/*!*************************************!*\
  !*** ./components/button/Button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NightModeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Button = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  width: 40px;\n  height: 40px;\n  border-radius: 25px;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n`;\nconst NightIcon = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`\n  width: 25px;\n  height: 25px;\n  display: ${(props)=>props.isNight ? \"block\" : \"none\"};\n`;\nconst DayIcon = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`\n  width: 25px;\n  height: 25px;\n  display: ${(props)=>props.isNight ? \"none\" : \"block\"};\n`;\nfunction NightModeButton({ isNight , onClick  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n        onClick: onClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NightIcon, {\n                src: \"night-icon.svg\",\n                isNight: isNight\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/components/button/Button.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DayIcon, {\n                src: \"day-icon.svg\",\n                isNight: isNight\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/components/button/Button.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/components/button/Button.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2J1dHRvbi9CdXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUV2QyxNQUFNRSxTQUFTRCxpRUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7QUFZN0IsQ0FBQztBQUVELE1BQU1HLFlBQVlILDhEQUFVLENBQUM7OztXQUdsQixFQUFFSyxDQUFBQSxRQUFVQSxNQUFNQyxPQUFPLEdBQUcsVUFBVSxNQUFNLENBQUU7QUFDekQsQ0FBQztBQUVELE1BQU1DLFVBQVVQLDhEQUFVLENBQUM7OztXQUdoQixFQUFFSyxDQUFBQSxRQUFVQSxNQUFNQyxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUU7QUFDekQsQ0FBQztBQUVjLFNBQVNFLGdCQUFnQixFQUFFRixRQUFPLEVBQUVHLFFBQU8sRUFBRSxFQUFFO0lBQzVELHFCQUNFLDhEQUFDUjtRQUFPUSxTQUFTQTs7MEJBQ2YsOERBQUNOO2dCQUFVTyxLQUFJO2dCQUFpQkosU0FBU0E7Ozs7OzswQkFDekMsOERBQUNDO2dCQUFRRyxLQUFJO2dCQUFlSixTQUFTQTs7Ozs7Ozs7Ozs7O0FBRzNDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL2J1dHRvbi9CdXR0b24uanM/YTYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBOaWdodEljb24gPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBkaXNwbGF5OiAke3Byb3BzID0+IChwcm9wcy5pc05pZ2h0ID8gJ2Jsb2NrJyA6ICdub25lJyl9O1xuYDtcblxuY29uc3QgRGF5SWNvbiA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6ICR7cHJvcHMgPT4gKHByb3BzLmlzTmlnaHQgPyAnbm9uZScgOiAnYmxvY2snKX07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOaWdodE1vZGVCdXR0b24oeyBpc05pZ2h0LCBvbkNsaWNrIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPE5pZ2h0SWNvbiBzcmM9XCJuaWdodC1pY29uLnN2Z1wiIGlzTmlnaHQ9e2lzTmlnaHR9IC8+XG4gICAgICA8RGF5SWNvbiBzcmM9XCJkYXktaWNvbi5zdmdcIiBpc05pZ2h0PXtpc05pZ2h0fSAvPlxuICAgIDwvQnV0dG9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiQnV0dG9uIiwiYnV0dG9uIiwiTmlnaHRJY29uIiwiaW1nIiwicHJvcHMiLCJpc05pZ2h0IiwiRGF5SWNvbiIsIk5pZ2h0TW9kZUJ1dHRvbiIsIm9uQ2xpY2siLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/button/Button.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _behaviour_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../behaviour/context */ \"./behaviour/context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GlobalStyles */ \"./utils/GlobalStyles.js\");\n/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/button/Button */ \"./components/button/Button.js\");\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const theme = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_behaviour_context__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);\n    const [currentTheme, setCurrentTheme] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(theme);\n    function toggleTheme() {\n        setCurrentTheme(currentTheme === theme.dark ? theme.light : theme.dark);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_behaviour_context__WEBPACK_IMPORTED_MODULE_1__.ThemeContext.Provider, {\n        value: currentTheme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                theme: currentTheme\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onClick: toggleTheme\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNQO0FBQ0k7QUFDUztBQUUxRCxTQUFTSyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDckMsTUFBTUMsUUFBUU4saURBQVVBLENBQUNGLDREQUFZQTtJQUNyQyxNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBQ087SUFHakQsU0FBU0csY0FBYztRQUNyQkQsZ0JBQWdCRCxpQkFBaUJELE1BQU1JLElBQUksR0FBR0osTUFBTUssS0FBSyxHQUFHTCxNQUFNSSxJQUFJO0lBQ3hFO0lBRUEscUJBQ0UsOERBQUNaLHFFQUFxQjtRQUFDZSxPQUFPTjs7MEJBQzlCLDhEQUFDTiwyREFBWUE7Z0JBQUNLLE9BQU9DOzs7Ozs7MEJBQ25CLDhEQUFDTCxpRUFBZUE7Z0JBQUNZLFNBQVNMOzs7Ozs7MEJBQzFCLDhEQUFDTDtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tICcuLi9iZWhhdmlvdXIvY29udGV4dCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSAnLi4vdXRpbHMvR2xvYmFsU3R5bGVzJztcbmltcG9ydCBOaWdodE1vZGVCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24vQnV0dG9uJztcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgY29uc3QgW2N1cnJlbnRUaGVtZSwgc2V0Q3VycmVudFRoZW1lXSA9IHVzZVN0YXRlKHRoZW1lKTtcblxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVRoZW1lKCkge1xuICAgIHNldEN1cnJlbnRUaGVtZShjdXJyZW50VGhlbWUgPT09IHRoZW1lLmRhcmsgPyB0aGVtZS5saWdodCA6IHRoZW1lLmRhcmspO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjdXJyZW50VGhlbWV9PlxuICAgIDxHbG9iYWxTdHlsZXMgdGhlbWU9e2N1cnJlbnRUaGVtZX0vPlxuICAgICAgPE5pZ2h0TW9kZUJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVUaGVtZX0+PC9OaWdodE1vZGVCdXR0b24+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibmFtZXMiOlsiVGhlbWVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiR2xvYmFsU3R5bGVzIiwiTmlnaHRNb2RlQnV0dG9uIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJjdXJyZW50VGhlbWUiLCJzZXRDdXJyZW50VGhlbWUiLCJ0b2dnbGVUaGVtZSIsImRhcmsiLCJsaWdodCIsIlByb3ZpZGVyIiwidmFsdWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/GlobalStyles.js":
/*!*******************************!*\
  !*** ./utils/GlobalStyles.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n  body {\n    background: ${(props)=>props.theme.background};\n    color: ${(props)=>props.theme.text};\n  }\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyles);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9HbG9iYWxTdHlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBRXRELE1BQU1DLGVBQWVELGdFQUFpQixDQUFDOztnQkFFdkIsRUFBRUUsQ0FBQUEsUUFBU0EsTUFBTUMsS0FBSyxDQUFDQyxVQUFVLENBQUM7V0FDdkMsRUFBRUYsQ0FBQUEsUUFBU0EsTUFBTUMsS0FBSyxDQUFDRSxJQUFJLENBQUM7O0FBRXZDLENBQUM7QUFFRCxpRUFBZUosWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3V0aWxzL0dsb2JhbFN0eWxlcy5qcz9jNjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5iYWNrZ3JvdW5kfTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0fTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVzO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwiR2xvYmFsU3R5bGVzIiwicHJvcHMiLCJ0aGVtZSIsImJhY2tncm91bmQiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/GlobalStyles.js\n");

/***/ }),

/***/ "./utils/themes.js":
/*!*************************!*\
  !*** ./utils/themes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"themes\": () => (/* binding */ themes)\n/* harmony export */ });\nconst themes = {\n    light: {\n        background: \"#F8EFFC\",\n        text: \"#2E1045\",\n        accent: \"#FFCF44\"\n    },\n    dark: {\n        background: \"#2E1045\",\n        text: \"#F8EFFC\",\n        accent: \"#FFCF44\"\n    },\n    pink: {\n        background: \"pink\",\n        text: \"purple\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy90aGVtZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFNBQVM7SUFDcEJDLE9BQU87UUFDTEMsWUFBWTtRQUNaQyxNQUFNO1FBQ05DLFFBQVE7SUFDVjtJQUNBQyxNQUFNO1FBQ0pILFlBQVk7UUFDWkMsTUFBTTtRQUNOQyxRQUFRO0lBRVY7SUFDQUUsTUFBTTtRQUNKSixZQUFZO1FBQ1pDLE1BQU07SUFDUjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi91dGlscy90aGVtZXMuanM/ZThkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdGhlbWVzID0ge1xuICBsaWdodDoge1xuICAgIGJhY2tncm91bmQ6ICcjRjhFRkZDJyxcbiAgICB0ZXh0OiAnIzJFMTA0NScsXG4gICAgYWNjZW50OiAnI0ZGQ0Y0NCcsXG4gIH0sXG4gIGRhcms6IHtcbiAgICBiYWNrZ3JvdW5kOiAnIzJFMTA0NScsXG4gICAgdGV4dDogJyNGOEVGRkMnLFxuICAgIGFjY2VudDogJyNGRkNGNDQnLFxuXG4gIH0sXG4gIHBpbms6IHtcbiAgICBiYWNrZ3JvdW5kOiAncGluaycsXG4gICAgdGV4dDogJ3B1cnBsZSdcbiAgfVxufTsiXSwibmFtZXMiOlsidGhlbWVzIiwibGlnaHQiLCJiYWNrZ3JvdW5kIiwidGV4dCIsImFjY2VudCIsImRhcmsiLCJwaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/themes.js\n");

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