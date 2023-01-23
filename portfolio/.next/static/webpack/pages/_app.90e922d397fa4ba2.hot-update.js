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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _behaviour_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../behaviour/context */ \"./behaviour/context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n// import { ThemeContext } from './context';\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const theme = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_behaviour_context__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);\n    const [currentTheme, setCurrentTheme] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(theme.dark);\n    console.log(currentTheme);\n    function toggleTheme() {\n        setCurrentTheme(currentTheme === theme.dark ? themes.dark : themes.light);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_behaviour_context__WEBPACK_IMPORTED_MODULE_1__.ThemeContext.Provider, {\n        value: currentTheme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleTheme,\n                children: \"Toggle theme\"\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    background: currentTheme.background,\n                    color: currentTheme.text\n                },\n                children: \"This is a test div\"\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"Ih7va8V3beihSJHeFIOoL0uJOZk=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9EO0FBQ3BELDRDQUE0QztBQUNDO0FBRTdDLFNBQVNHLElBQUksS0FBd0IsRUFBRTtRQUExQixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUF4Qjs7SUFDWCxNQUFNQyxRQUFRSixpREFBVUEsQ0FBQ0YsNERBQVlBO0lBQ3JDLE1BQU0sQ0FBQ08sY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDSyxNQUFNRyxJQUFJO0lBQzNEQyxRQUFRQyxHQUFHLENBQUNKO0lBR1osU0FBU0ssY0FBYztRQUNyQkosZ0JBQWdCRCxpQkFBaUJELE1BQU1HLElBQUksR0FBR0ksT0FBT0osSUFBSSxHQUFHSSxPQUFPQyxLQUFLO0lBQzFFO0lBRUEscUJBQ0UsOERBQUNkLHFFQUFxQjtRQUFDZ0IsT0FBT1Q7OzBCQUM1Qiw4REFBQ1U7Z0JBQU9DLFNBQVNOOzBCQUFhOzs7Ozs7MEJBQzlCLDhEQUFDTztnQkFBSUMsT0FBTztvQkFBRUMsWUFBWWQsYUFBYWMsVUFBVTtvQkFBRUMsT0FBT2YsYUFBYWdCLElBQUk7Z0JBQUM7MEJBQUc7Ozs7OzswQkFDL0UsOERBQUNuQjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHOUI7R0FqQlNGO0tBQUFBO0FBbUJULCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tICcuLi9iZWhhdmlvdXIvY29udGV4dCc7XG4vLyBpbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgdGhlbWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gIGNvbnN0IFtjdXJyZW50VGhlbWUsIHNldEN1cnJlbnRUaGVtZV0gPSB1c2VTdGF0ZSh0aGVtZS5kYXJrKTtcbiAgY29uc29sZS5sb2coY3VycmVudFRoZW1lKTtcblxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVRoZW1lKCkge1xuICAgIHNldEN1cnJlbnRUaGVtZShjdXJyZW50VGhlbWUgPT09IHRoZW1lLmRhcmsgPyB0aGVtZXMuZGFyayA6IHRoZW1lcy5saWdodCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2N1cnJlbnRUaGVtZX0+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVRoZW1lfT5Ub2dnbGUgdGhlbWU8L2J1dHRvbj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogY3VycmVudFRoZW1lLmJhY2tncm91bmQsIGNvbG9yOiBjdXJyZW50VGhlbWUudGV4dCB9fT5UaGlzIGlzIGEgdGVzdCBkaXY8L2Rpdj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJuYW1lcyI6WyJUaGVtZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsImN1cnJlbnRUaGVtZSIsInNldEN1cnJlbnRUaGVtZSIsImRhcmsiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlVGhlbWUiLCJ0aGVtZXMiLCJsaWdodCIsIlByb3ZpZGVyIiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});