"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[id]/page",{

/***/ "(app-pages-browser)/./src/Components/CarDetails/CarDetails.tsx":
/*!**************************************************!*\
  !*** ./src/Components/CarDetails/CarDetails.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CarDetails: function() { return /* binding */ CarDetails; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ CarDetails auto */ \n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar CarDetails = function() {\n    _s();\n    var params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n    var carId = params.id;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), car = _useState[0], setCar = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), 2), loading = _useState1[0], setLoading = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchCarDetails = function fetchCarDetails() {\n            return _fetchCarDetails.apply(this, arguments);\n        };\n        function _fetchCarDetails() {\n            _fetchCarDetails = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__._)(function() {\n                var response, data, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                3,\n                                4,\n                                5\n                            ]);\n                            return [\n                                4,\n                                fetch(\"/api/\".concat(carId))\n                            ];\n                        case 1:\n                            response = _state.sent();\n                            if (!response.ok) {\n                                throw new Error(\"Car not found\");\n                            }\n                            return [\n                                4,\n                                response.json()\n                            ];\n                        case 2:\n                            data = _state.sent();\n                            setCar(data);\n                            return [\n                                3,\n                                5\n                            ];\n                        case 3:\n                            error = _state.sent();\n                            console.error(\"Failed to fetch car details:\", error);\n                            return [\n                                3,\n                                5\n                            ];\n                        case 4:\n                            setLoading(false);\n                            return [\n                                7\n                            ];\n                        case 5:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _fetchCarDetails.apply(this, arguments);\n        }\n        if (carId) {\n            fetchCarDetails();\n        }\n    }, [\n        carId\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n            lineNumber: 35,\n            columnNumber: 12\n        }, _this);\n    }\n    if (!car) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Car not found.\"\n        }, void 0, false, {\n            fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n            lineNumber: 39,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Car Details\"\n            }, void 0, false, {\n                fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Make: \",\n                    car.make\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Model: \",\n                    car.model\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Year: \",\n                    car.year\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Color: \",\n                    car.color\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Price: $\",\n                    car.price\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Additional Details\"\n            }, void 0, false, {\n                fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            car.details ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Description: \",\n                            car.details.description || \"N/A\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Mileage:\",\n                            \" \",\n                            car.details.mileage ? \"\".concat(car.details.mileage, \" miles\") : \"N/A\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Fuel Type: \",\n                            car.details.fuelType || \"N/A\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Transmission: \",\n                            car.details.transmission || \"N/A\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Engine: \",\n                            car.details.engine || \"N/A\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Horsepower:\",\n                            \" \",\n                            car.details.horsepower ? \"\".concat(car.details.horsepower, \" HP\") : \"N/A\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No additional details available.\"\n            }, void 0, false, {\n                fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/evan/Workspaces/evanmcdowell31/cars/src/Components/CarDetails/CarDetails.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this);\n};\n_s(CarDetails, \"j8+uv+nzAsavHNZ+dyIokQqCLmg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams\n    ];\n});\n_c = CarDetails;\nvar _c;\n$RefreshReg$(_c, \"CarDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL0NhckRldGFpbHMvQ2FyRGV0YWlscy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ0E7QUFFckMsSUFBTUcsYUFBYTs7SUFDeEIsSUFBTUMsU0FBU0osMERBQVNBO0lBQ3hCLElBQVFLLFFBQWNELE9BQWRDO0lBRVIsSUFBc0JKLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxXQUF4Qk0sTUFBZU4sY0FBVk8sU0FBVVA7SUFDdEIsSUFBOEJBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxXQUFoQ1EsVUFBdUJSLGVBQWRTLGFBQWNUO0lBRTlCQyxnREFBU0EsQ0FBQztZQUNPUywyQkFBQUE7bUJBQUFBOztpQkFBQUE7WUFBQUEsbUJBQWY7b0JBRVVDLFVBSUFDLE1BRUNDOzs7Ozs7Ozs7OzRCQU5VOztnQ0FBTUMsTUFBTSxRQUFjLE9BQU5UOzs7NEJBQS9CTSxXQUFXOzRCQUNqQixJQUFJLENBQUNBLFNBQVNJLEVBQUUsRUFBRTtnQ0FDaEIsTUFBTSxJQUFJQyxNQUFNOzRCQUNsQjs0QkFDYTs7Z0NBQU1MLFNBQVNNLElBQUk7Ozs0QkFBMUJMLE9BQU87NEJBQ2JMLE9BQU9LOzs7Ozs7NEJBQ0FDOzRCQUNQSyxRQUFRTCxLQUFLLENBQUMsZ0NBQWdDQTs7Ozs7OzRCQUU5Q0osV0FBVzs7Ozs7Ozs7OztZQUVmO21CQWJlQzs7UUFlZixJQUFJTCxPQUFPO1lBQ1RLO1FBQ0Y7SUFDRixHQUFHO1FBQUNMO0tBQU07SUFFVixJQUFJRyxTQUFTO1FBQ1gscUJBQU8sOERBQUNXO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLElBQUksQ0FBQ2IsS0FBSztRQUNSLHFCQUFPLDhEQUFDYTtzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0E7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzs7b0JBQUU7b0JBQU9mLElBQUlnQixJQUFJOzs7Ozs7OzBCQUNsQiw4REFBQ0Q7O29CQUFFO29CQUFRZixJQUFJaUIsS0FBSzs7Ozs7OzswQkFDcEIsOERBQUNGOztvQkFBRTtvQkFBT2YsSUFBSWtCLElBQUk7Ozs7Ozs7MEJBQ2xCLDhEQUFDSDs7b0JBQUU7b0JBQVFmLElBQUltQixLQUFLOzs7Ozs7OzBCQUNwQiw4REFBQ0o7O29CQUFFO29CQUFTZixJQUFJb0IsS0FBSzs7Ozs7OzswQkFDckIsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSHJCLElBQUlzQixPQUFPLGlCQUNWLDhEQUFDVDs7a0NBQ0MsOERBQUNFOzs0QkFBRTs0QkFBY2YsSUFBSXNCLE9BQU8sQ0FBQ0MsV0FBVyxJQUFJOzs7Ozs7O2tDQUM1Qyw4REFBQ1I7OzRCQUFFOzRCQUNROzRCQUNSZixJQUFJc0IsT0FBTyxDQUFDRSxPQUFPLEdBQUcsR0FBdUIsT0FBcEJ4QixJQUFJc0IsT0FBTyxDQUFDRSxPQUFPLEVBQUMsWUFBVTs7Ozs7OztrQ0FFMUQsOERBQUNUOzs0QkFBRTs0QkFBWWYsSUFBSXNCLE9BQU8sQ0FBQ0csUUFBUSxJQUFJOzs7Ozs7O2tDQUN2Qyw4REFBQ1Y7OzRCQUFFOzRCQUFlZixJQUFJc0IsT0FBTyxDQUFDSSxZQUFZLElBQUk7Ozs7Ozs7a0NBQzlDLDhEQUFDWDs7NEJBQUU7NEJBQVNmLElBQUlzQixPQUFPLENBQUNLLE1BQU0sSUFBSTs7Ozs7OztrQ0FDbEMsOERBQUNaOzs0QkFBRTs0QkFDVzs0QkFDWGYsSUFBSXNCLE9BQU8sQ0FBQ00sVUFBVSxHQUFHLEdBQTBCLE9BQXZCNUIsSUFBSXNCLE9BQU8sQ0FBQ00sVUFBVSxFQUFDLFNBQU87Ozs7Ozs7Ozs7OztzQ0FJL0QsOERBQUNiOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFJWCxFQUFFO0dBakVXbkI7O1FBQ0lILHNEQUFTQTs7O0tBRGJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0NhckRldGFpbHMvQ2FyRGV0YWlscy50c3g/MGNmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgQ2FyRGV0YWlscyA9ICgpID0+IHtcbiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XG4gIGNvbnN0IHsgaWQ6IGNhcklkIH0gPSBwYXJhbXM7XG5cbiAgY29uc3QgW2Nhciwgc2V0Q2FyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ2FyRGV0YWlscygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvJHtjYXJJZH1gKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhciBub3QgZm91bmRcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0Q2FyKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBjYXIgZGV0YWlsczpcIiwgZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNhcklkKSB7XG4gICAgICBmZXRjaENhckRldGFpbHMoKTtcbiAgICB9XG4gIH0sIFtjYXJJZF0pO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIGlmICghY2FyKSB7XG4gICAgcmV0dXJuIDxkaXY+Q2FyIG5vdCBmb3VuZC48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Q2FyIERldGFpbHM8L2gxPlxuICAgICAgPHA+TWFrZToge2Nhci5tYWtlfTwvcD5cbiAgICAgIDxwPk1vZGVsOiB7Y2FyLm1vZGVsfTwvcD5cbiAgICAgIDxwPlllYXI6IHtjYXIueWVhcn08L3A+XG4gICAgICA8cD5Db2xvcjoge2Nhci5jb2xvcn08L3A+XG4gICAgICA8cD5QcmljZTogJHtjYXIucHJpY2V9PC9wPlxuICAgICAgPGgyPkFkZGl0aW9uYWwgRGV0YWlsczwvaDI+XG4gICAgICB7Y2FyLmRldGFpbHMgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+RGVzY3JpcHRpb246IHtjYXIuZGV0YWlscy5kZXNjcmlwdGlvbiB8fCBcIk4vQVwifTwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIE1pbGVhZ2U6e1wiIFwifVxuICAgICAgICAgICAge2Nhci5kZXRhaWxzLm1pbGVhZ2UgPyBgJHtjYXIuZGV0YWlscy5taWxlYWdlfSBtaWxlc2AgOiBcIk4vQVwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5GdWVsIFR5cGU6IHtjYXIuZGV0YWlscy5mdWVsVHlwZSB8fCBcIk4vQVwifTwvcD5cbiAgICAgICAgICA8cD5UcmFuc21pc3Npb246IHtjYXIuZGV0YWlscy50cmFuc21pc3Npb24gfHwgXCJOL0FcIn08L3A+XG4gICAgICAgICAgPHA+RW5naW5lOiB7Y2FyLmRldGFpbHMuZW5naW5lIHx8IFwiTi9BXCJ9PC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSG9yc2Vwb3dlcjp7XCIgXCJ9XG4gICAgICAgICAgICB7Y2FyLmRldGFpbHMuaG9yc2Vwb3dlciA/IGAke2Nhci5kZXRhaWxzLmhvcnNlcG93ZXJ9IEhQYCA6IFwiTi9BXCJ9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwPk5vIGFkZGl0aW9uYWwgZGV0YWlscyBhdmFpbGFibGUuPC9wPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlUGFyYW1zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDYXJEZXRhaWxzIiwicGFyYW1zIiwiaWQiLCJjYXJJZCIsImNhciIsInNldENhciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hDYXJEZXRhaWxzIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJqc29uIiwiY29uc29sZSIsImRpdiIsImgxIiwicCIsIm1ha2UiLCJtb2RlbCIsInllYXIiLCJjb2xvciIsInByaWNlIiwiaDIiLCJkZXRhaWxzIiwiZGVzY3JpcHRpb24iLCJtaWxlYWdlIiwiZnVlbFR5cGUiLCJ0cmFuc21pc3Npb24iLCJlbmdpbmUiLCJob3JzZXBvd2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/CarDetails/CarDetails.tsx\n"));

/***/ })

});