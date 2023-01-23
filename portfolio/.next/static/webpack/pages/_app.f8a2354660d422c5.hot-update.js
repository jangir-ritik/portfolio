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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _behaviour_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../behaviour/context */ \"./behaviour/context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GlobalStyles */ \"./utils/GlobalStyles.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const theme = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_behaviour_context__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);\n    const [currentTheme, setCurrentTheme] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(theme.light);\n    //   console.log(currentTheme);\n    function toggleTheme() {\n        setCurrentTheme(currentTheme === theme.dark ? theme.light : theme.dark);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_behaviour_context__WEBPACK_IMPORTED_MODULE_1__.ThemeContext.Provider, {\n        value: currentTheme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                theme: theme\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleTheme,\n                children: \"Toggle theme\"\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    background: currentTheme.text,\n                    color: currentTheme.background\n                },\n                children: \"This is a test div\"\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ritikjangir/Documents/GitHub/portfolio/portfolio/pages/_app.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"1tpetnnu0wjCCZ9tqup2tVTy7Dg=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFvRDtBQUNQO0FBQ0k7QUFFakQsU0FBU0ksSUFBSSxLQUF3QixFQUFFO1FBQTFCLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQXhCOztJQUNYLE1BQU1DLFFBQVFMLGlEQUFVQSxDQUFDRiw0REFBWUE7SUFDckMsTUFBTSxDQUFDUSxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUNNLE1BQU1HLEtBQUs7SUFDOUQsK0JBQStCO0lBRzdCLFNBQVNDLGNBQWM7UUFDckJGLGdCQUFnQkQsaUJBQWlCRCxNQUFNSyxJQUFJLEdBQUdMLE1BQU1HLEtBQUssR0FBR0gsTUFBTUssSUFBSTtJQUN4RTtJQUVBLHFCQUNFLDhEQUFDWixxRUFBcUI7UUFBQ2MsT0FBT047OzBCQUM5Qiw4REFBQ0wsMkRBQVlBO2dCQUFDSSxPQUFPQTs7Ozs7OzBCQUNuQiw4REFBQ1E7Z0JBQU9DLFNBQVNMOzBCQUFhOzs7Ozs7MEJBQzlCLDhEQUFDTTtnQkFBSUMsT0FBTztvQkFBRUMsWUFBWVgsYUFBYVksSUFBSTtvQkFBRUMsT0FBT2IsYUFBYVcsVUFBVTtnQkFBQzswQkFBRzs7Ozs7OzBCQUMvRSw4REFBQ2Q7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCO0dBbEJTRjtLQUFBQTtBQW9CVCwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnLi4vYmVoYXZpb3VyL2NvbnRleHQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJy4uL3V0aWxzL0dsb2JhbFN0eWxlcyc7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgdGhlbWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gIGNvbnN0IFtjdXJyZW50VGhlbWUsIHNldEN1cnJlbnRUaGVtZV0gPSB1c2VTdGF0ZSh0aGVtZS5saWdodCk7XG4vLyAgIGNvbnNvbGUubG9nKGN1cnJlbnRUaGVtZSk7XG5cblxuICBmdW5jdGlvbiB0b2dnbGVUaGVtZSgpIHtcbiAgICBzZXRDdXJyZW50VGhlbWUoY3VycmVudFRoZW1lID09PSB0aGVtZS5kYXJrID8gdGhlbWUubGlnaHQgOiB0aGVtZS5kYXJrKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y3VycmVudFRoZW1lfT5cbiAgICA8R2xvYmFsU3R5bGVzIHRoZW1lPXt0aGVtZX0vPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVUaGVtZX0+VG9nZ2xlIHRoZW1lPC9idXR0b24+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IGN1cnJlbnRUaGVtZS50ZXh0LCBjb2xvcjogY3VycmVudFRoZW1lLmJhY2tncm91bmQgfX0+VGhpcyBpcyBhIHRlc3QgZGl2PC9kaXY+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibmFtZXMiOlsiVGhlbWVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiR2xvYmFsU3R5bGVzIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJjdXJyZW50VGhlbWUiLCJzZXRDdXJyZW50VGhlbWUiLCJsaWdodCIsInRvZ2dsZVRoZW1lIiwiZGFyayIsIlByb3ZpZGVyIiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwidGV4dCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});