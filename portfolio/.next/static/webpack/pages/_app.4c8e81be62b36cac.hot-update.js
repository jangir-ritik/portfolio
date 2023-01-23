"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _behaviour_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../behaviour/context */ \"./behaviour/context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n// import { ThemeContext } from './context';\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const themes = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_behaviour_context__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);\n    console.log(themes.light);\n    const [currentTheme, setCurrentTheme] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(themes.light);\n    function toggleTheme() {\n        setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_behaviour_context__WEBPACK_IMPORTED_MODULE_1__.ThemeContext.Provider, {\n        value: currentTheme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleTheme,\n                children: \"Toggle theme\"\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    background: currentTheme.background,\n                    color: currentTheme.text\n                },\n                children: \"This is a test div\"\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"M1Pvbk0NQHnZehpwoqa/sjVCJ0M=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9EO0FBQ3BELDRDQUE0QztBQUNDO0FBRTdDLFNBQVNHLElBQUksS0FBd0IsRUFBRTtRQUExQixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUF4Qjs7SUFDWCxNQUFNQyxTQUFTSixpREFBVUEsQ0FBQ0YsNERBQVlBO0lBQ3RDTyxRQUFRQyxHQUFHLENBQUNGLE9BQU9HLEtBQUs7SUFDeEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUNLLE9BQU9HLEtBQUs7SUFFN0QsU0FBU0csY0FBYztRQUNyQkQsZ0JBQWdCRCxpQkFBaUJKLE9BQU9HLEtBQUssR0FBR0gsT0FBT08sSUFBSSxHQUFHUCxPQUFPRyxLQUFLO0lBQzVFO0lBRUEscUJBQ0UsOERBQUNULHFFQUFxQjtRQUFDZSxPQUFPTDs7MEJBQzVCLDhEQUFDTTtnQkFBT0MsU0FBU0w7MEJBQWE7Ozs7OzswQkFDOUIsOERBQUNNO2dCQUFJQyxPQUFPO29CQUFFQyxZQUFZVixhQUFhVSxVQUFVO29CQUFFQyxPQUFPWCxhQUFhWSxJQUFJO2dCQUFDOzBCQUFHOzs7Ozs7MEJBQy9FLDhEQUFDbEI7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCO0dBaEJTRjtLQUFBQTtBQWtCVCwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnLi4vYmVoYXZpb3VyL2NvbnRleHQnO1xuLy8gaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHRoZW1lcyA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgY29uc29sZS5sb2codGhlbWVzLmxpZ2h0KTtcbiAgY29uc3QgW2N1cnJlbnRUaGVtZSwgc2V0Q3VycmVudFRoZW1lXSA9IHVzZVN0YXRlKHRoZW1lcy5saWdodCk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XG4gICAgc2V0Q3VycmVudFRoZW1lKGN1cnJlbnRUaGVtZSA9PT0gdGhlbWVzLmxpZ2h0ID8gdGhlbWVzLmRhcmsgOiB0aGVtZXMubGlnaHQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjdXJyZW50VGhlbWV9PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVUaGVtZX0+VG9nZ2xlIHRoZW1lPC9idXR0b24+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IGN1cnJlbnRUaGVtZS5iYWNrZ3JvdW5kLCBjb2xvcjogY3VycmVudFRoZW1lLnRleHQgfX0+VGhpcyBpcyBhIHRlc3QgZGl2PC9kaXY+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibmFtZXMiOlsiVGhlbWVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWVzIiwiY29uc29sZSIsImxvZyIsImxpZ2h0IiwiY3VycmVudFRoZW1lIiwic2V0Q3VycmVudFRoZW1lIiwidG9nZ2xlVGhlbWUiLCJkYXJrIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmQiLCJjb2xvciIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});