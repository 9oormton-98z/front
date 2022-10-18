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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/api/client.ts":
/*!***************************!*\
  !*** ./src/api/client.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst client = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create();\nclient.defaults.baseURL = \"https://jejuvelue.link\";\n//'http://velm:8080'\n//'http://10.10.123.84:8080'\n//'http://43.200.215.234'\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2NsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxNQUFNLEdBQUdELG9EQUFZLEVBQUU7QUFDN0JDLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDQyxPQUFPLEdBQUcsd0JBQXdCLENBQUM7QUFDbkQsb0JBQW9CO0FBQ3BCLDRCQUE0QjtBQUM1Qix5QkFBeUI7QUFFekIsaUVBQWVILE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhcmstdG91cmlzbS8uL3NyYy9hcGkvY2xpZW50LnRzPzU5NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgY2xpZW50ID0gYXhpb3MuY3JlYXRlKCk7XG5jbGllbnQuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwczovL2planV2ZWx1ZS5saW5rJztcbi8vJ2h0dHA6Ly92ZWxtOjgwODAnXG4vLydodHRwOi8vMTAuMTAuMTIzLjg0OjgwODAnXG4vLydodHRwOi8vNDMuMjAwLjIxNS4yMzQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImNsaWVudCIsImNyZWF0ZSIsImRlZmF1bHRzIiwiYmFzZVVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/client.ts\n");

/***/ }),

/***/ "./src/api/postLoginApi.ts":
/*!*********************************!*\
  !*** ./src/api/postLoginApi.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ \"./src/api/client.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_0__]);\n_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst postLoginApi = ({ nickname  })=>_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/api/v1/auth/login\", {\n        nickname: nickname\n    });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLoginApi);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL3Bvc3RMb2dpbkFwaS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QjtBQUU5QixNQUFNQyxZQUFZLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQXdCLEdBQ3RERixvREFBVyxDQUFDLG9CQUFvQixFQUFFO1FBQ2hDRSxRQUFRLEVBQUVBLFFBQVE7S0FDbkIsQ0FBQztBQUVKLGlFQUFlRCxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXJrLXRvdXJpc20vLi9zcmMvYXBpL3Bvc3RMb2dpbkFwaS50cz85ZmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnQgZnJvbSAnLi9jbGllbnQnO1xuXG5jb25zdCBwb3N0TG9naW5BcGkgPSAoeyBuaWNrbmFtZSB9OiB7IG5pY2tuYW1lOiBzdHJpbmcgfSkgPT5cbiAgY2xpZW50LnBvc3QoJy9hcGkvdjEvYXV0aC9sb2dpbicsIHtcbiAgICBuaWNrbmFtZTogbmlja25hbWUsXG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0TG9naW5BcGk7XG4iXSwibmFtZXMiOlsiY2xpZW50IiwicG9zdExvZ2luQXBpIiwibmlja25hbWUiLCJwb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/postLoginApi.ts\n");

/***/ }),

/***/ "./src/components/Index/IntroPage.tsx":
/*!********************************************!*\
  !*** ./src/components/Index/IntroPage.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IntroPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_postLoginApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/postLoginApi */ \"./src/api/postLoginApi.ts\");\n/* harmony import */ var _utils_cls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/cls */ \"./src/utils/cls.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_postLoginApi__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, framer_motion__WEBPACK_IMPORTED_MODULE_6__]);\n([_api_postLoginApi__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, framer_motion__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nfunction IntroPage() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { 0: intro , 1: setIntro  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        let timer = setTimeout(()=>{\n            setIntro(false);\n            console.log(intro);\n        }, 900);\n        return ()=>{\n            clearTimeout(timer);\n        };\n    }, []);\n    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const onSubmit = async (data)=>{\n        const myData = await (0,_api_postLoginApi__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n        console.log(myData);\n        localStorage.setItem(\"nickname\", data.nickname);\n        router.push(\"/main\");\n    };\n    const onError = (error)=>console.log(error);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-full flex-col bg-white pt-72 text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    initial: {\n                        opacity: 0.2,\n                        y: 50\n                    },\n                    animate: {\n                        opacity: 1,\n                        y: 0\n                    },\n                    transition: {\n                        duration: 0.5\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/MainLogo.png\",\n                        className: \"h-32 w-40\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cuzz/Documents/project-github/dark-tourism/src/components/Index/IntroPage.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/cuzz/Documents/project-github/dark-tourism/src/components/Index/IntroPage.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/cuzz/Documents/project-github/dark-tourism/src/components/Index/IntroPage.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            !intro && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                initial: {\n                    opacity: 0.2\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 0.5\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"relative m-auto mt-6 flex h-fit w-72 items-stretch justify-center\",\n                    onSubmit: handleSubmit(onSubmit, onError),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (0,_utils_cls__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"w-full rounded-md border border-gray-300 py-2.5 pl-4 shadow-sm outline-none\", \"text-base text-[#525463]\", \"placeholder:text placeholder:text-gray-400\", \"focus:border-[#AE1E27] focus:ring-0\"),\n                            placeholder: \"닉네임을 입력하세요\",\n                            autoComplete: \"off\",\n                            ...register(\"nickname\")\n                        }, void 0, false, {\n                            fileName: \"/Users/cuzz/Documents/project-github/dark-tourism/src/components/Index/IntroPage.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"absolute top-0 right-0 h-full rounded-r-md bg-[#D91C29] bg-opacity-[51%] px-5 text-white\",\n                            children: \"GO!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cuzz/Documents/project-github/dark-tourism/src/components/Index/IntroPage.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cuzz/Documents/project-github/dark-tourism/src/components/Index/IntroPage.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/cuzz/Documents/project-github/dark-tourism/src/components/Index/IntroPage.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cuzz/Documents/project-github/dark-tourism/src/components/Index/IntroPage.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbmRleC9JbnRyb1BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEM7QUFDaEI7QUFDVTtBQUNJO0FBQ0Y7QUFDSDtBQUV4QixTQUFTTyxTQUFTLEdBQUc7SUFDbEMsTUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBQzFCLE1BQU0sS0FBQ08sS0FBSyxNQUFFQyxRQUFRLE1BQUlOLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3hDRCxnREFBUyxDQUFDLElBQU07UUFDZCxJQUFJUSxLQUFLLEdBQUdDLFVBQVUsQ0FBQyxJQUFNO1lBQzNCRixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUUsR0FBRyxDQUFDO1FBRVAsT0FBTyxJQUFNO1lBQ1hNLFlBQVksQ0FBQ0osS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsTUFBTSxFQUFFSyxRQUFRLEdBQUVDLFlBQVksR0FBRSxHQUFHWix3REFBTyxFQUF3QjtJQUVsRSxNQUFNYSxRQUFRLEdBQUcsT0FBT0MsSUFBMEIsR0FBSztRQUNyRCxNQUFNQyxNQUFNLEdBQUcsTUFBTXBCLDZEQUFZLENBQUNtQixJQUFJLENBQUM7UUFDdkNOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxNQUFNLENBQUMsQ0FBQztRQUNwQkMsWUFBWSxDQUFDQyxPQUFPLENBQUMsVUFBVSxFQUFFSCxJQUFJLENBQUNJLFFBQVEsQ0FBQyxDQUFDO1FBQ2hEZixNQUFNLENBQUNnQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNELE1BQU1DLE9BQU8sR0FBRyxDQUFDQyxLQUFVLEdBQUtiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWSxLQUFLLENBQUM7SUFFbEQscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG9EQUFvRDs7MEJBQ2pFLDhEQUFDQyxTQUFPO2dCQUFDRCxTQUFTLEVBQUMsa0NBQWtDOzBCQUNuRCw0RUFBQ3RCLHFEQUFVO29CQUFDd0IsT0FBTyxFQUFFO3dCQUFFQyxPQUFPLEVBQUUsR0FBRzt3QkFBRUMsQ0FBQyxFQUFFLEVBQUU7cUJBQUU7b0JBQUVDLE9BQU8sRUFBRTt3QkFBRUYsT0FBTyxFQUFFLENBQUM7d0JBQUVDLENBQUMsRUFBRSxDQUFDO3FCQUFFO29CQUFFRSxVQUFVLEVBQUU7d0JBQUVDLFFBQVEsRUFBRSxHQUFHO3FCQUFFOzhCQUN4Ryw0RUFBQ0MsS0FBRzt3QkFBQ0MsR0FBRyxFQUFDLGVBQWU7d0JBQUNULFNBQVMsRUFBQyxXQUFXOzs7Ozs0QkFBTzs7Ozs7d0JBQzFDOzs7OztvQkFDTDtZQUNULENBQUNuQixLQUFLLGtCQUNMLDhEQUFDSCxxREFBVTtnQkFBQ3dCLE9BQU8sRUFBRTtvQkFBRUMsT0FBTyxFQUFFLEdBQUc7aUJBQUU7Z0JBQUVFLE9BQU8sRUFBRTtvQkFBRUYsT0FBTyxFQUFFLENBQUM7aUJBQUU7Z0JBQUVHLFVBQVUsRUFBRTtvQkFBRUMsUUFBUSxFQUFFLEdBQUc7aUJBQUU7MEJBQzNGLDRFQUFDRyxNQUFJO29CQUFDVixTQUFTLEVBQUMsbUVBQW1FO29CQUFDVixRQUFRLEVBQUVELFlBQVksQ0FBQ0MsUUFBUSxFQUFFTyxPQUFPLENBQUM7O3NDQUMzSCw4REFBQ2MsT0FBSzs0QkFDSlgsU0FBUyxFQUFFM0Isc0RBQUcsQ0FDWiw2RUFBNkUsRUFDN0UsMEJBQTBCLEVBQzFCLDRDQUE0QyxFQUM1QyxxQ0FBcUMsQ0FDdEM7NEJBQ0R1QyxXQUFXLEVBQUMsWUFBWTs0QkFDeEJDLFlBQVksRUFBQyxLQUFLOzRCQUNqQixHQUFHekIsUUFBUSxDQUFDLFVBQVUsQ0FBQzs7Ozs7Z0NBQ2pCO3NDQUNULDhEQUFDMEIsUUFBTTs0QkFBQ0MsSUFBSSxFQUFDLFFBQVE7NEJBQUNmLFNBQVMsRUFBQywwRkFBMkY7c0NBQUMsS0FFNUg7Ozs7O2dDQUFTOzs7Ozs7d0JBQ0o7Ozs7O29CQUNJOzs7Ozs7WUFFWCxDQUNOO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhcmstdG91cmlzbS8uL3NyYy9jb21wb25lbnRzL0luZGV4L0ludHJvUGFnZS50c3g/M2UyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9zdExvZ2luQXBpIGZyb20gJ0AvYXBpL3Bvc3RMb2dpbkFwaSc7XG5pbXBvcnQgY2xzIGZyb20gJ0AvdXRpbHMvY2xzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb1BhZ2UoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbaW50cm8sIHNldEludHJvXSA9IHVzZVN0YXRlKHRydWUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SW50cm8oZmFsc2UpO1xuICAgICAgY29uc29sZS5sb2coaW50cm8pO1xuICAgIH0sIDkwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtPHsgbmlja25hbWU6IHN0cmluZyB9PigpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGE6IHsgbmlja25hbWU6IHN0cmluZyB9KSA9PiB7XG4gICAgY29uc3QgbXlEYXRhID0gYXdhaXQgcG9zdExvZ2luQXBpKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKG15RGF0YSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25pY2tuYW1lJywgZGF0YS5uaWNrbmFtZSk7XG4gICAgcm91dGVyLnB1c2goJy9tYWluJyk7XG4gIH07XG4gIGNvbnN0IG9uRXJyb3IgPSAoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LWZ1bGwgZmxleC1jb2wgYmctd2hpdGUgcHQtNzIgdGV4dC1ibGFja1wiPlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD17eyBvcGFjaXR5OiAwLjIsIHk6IDUwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fSB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX0+XG4gICAgICAgICAgPGltZyBzcmM9XCIvTWFpbkxvZ28ucG5nXCIgY2xhc3NOYW1lPVwiaC0zMiB3LTQwXCI+PC9pbWc+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIHshaW50cm8gJiYgKFxuICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPXt7IG9wYWNpdHk6IDAuMiB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX0gdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19PlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInJlbGF0aXZlIG0tYXV0byBtdC02IGZsZXggaC1maXQgdy03MiBpdGVtcy1zdHJldGNoIGp1c3RpZnktY2VudGVyXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCwgb25FcnJvcil9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzKFxuICAgICAgICAgICAgICAgICd3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB5LTIuNSBwbC00IHNoYWRvdy1zbSBvdXRsaW5lLW5vbmUnLFxuICAgICAgICAgICAgICAgICd0ZXh0LWJhc2UgdGV4dC1bIzUyNTQ2M10nLFxuICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcjp0ZXh0IHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAnLFxuICAgICAgICAgICAgICAgICdmb2N1czpib3JkZXItWyNBRTFFMjddIGZvY3VzOnJpbmctMCdcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLri4nrhKTsnoTsnYQg7J6F66Cl7ZWY7IS47JqUXCJcbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCduaWNrbmFtZScpfVxuICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIGgtZnVsbCByb3VuZGVkLXItbWQgIGJnLVsjRDkxQzI5XSBiZy1vcGFjaXR5LVs1MSVdIHB4LTUgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICBHTyFcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJwb3N0TG9naW5BcGkiLCJjbHMiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJtb3Rpb24iLCJJbnRyb1BhZ2UiLCJyb3V0ZXIiLCJpbnRybyIsInNldEludHJvIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImNsZWFyVGltZW91dCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwib25TdWJtaXQiLCJkYXRhIiwibXlEYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIm5pY2tuYW1lIiwicHVzaCIsIm9uRXJyb3IiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImFydGljbGUiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiaW1nIiwic3JjIiwiZm9ybSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJhdXRvQ29tcGxldGUiLCJidXR0b24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Index/IntroPage.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Index_IntroPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Index/IntroPage */ \"./src/components/Index/IntroPage.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Index_IntroPage__WEBPACK_IMPORTED_MODULE_1__]);\n_components_Index_IntroPage__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Index_IntroPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/cuzz/Documents/project-github/dark-tourism/src/pages/index.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/cuzz/Documents/project-github/dark-tourism/src/pages/index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFxRDtBQUdyRCxNQUFNQyxJQUFJLEdBQWEsSUFBTTtJQUMzQixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsVUFBVTtrQkFDdkIsNEVBQUNILG1FQUFTOzs7O3FCQUFhOzs7OztpQkFDbkIsQ0FDTjtBQUNKLENBQUM7QUFFRCxpRUFBZUMsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFyay10b3VyaXNtLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnRyb1BhZ2UgZnJvbSAnQC9jb21wb25lbnRzL0luZGV4L0ludHJvUGFnZSc7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxJbnRyb1BhZ2U+PC9JbnRyb1BhZ2U+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkludHJvUGFnZSIsIkhvbWUiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/utils/cls.ts":
/*!**************************!*\
  !*** ./src/utils/cls.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cls)\n/* harmony export */ });\nfunction cls(...args) {\n    return args.filter((arg)=>arg).join(\" \");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY2xzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxHQUFHLENBQUMsR0FBR0MsSUFBSSxFQUF3QjtJQUN6RCxPQUFPQSxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhcmstdG91cmlzbS8uL3NyYy91dGlscy9jbHMudHM/MGI4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbHMoLi4uYXJnczogKHN0cmluZyB8IGJvb2xlYW4pW10pIHtcbiAgcmV0dXJuIGFyZ3MuZmlsdGVyKChhcmcpID0+IGFyZykuam9pbignICcpO1xufVxuIl0sIm5hbWVzIjpbImNscyIsImFyZ3MiLCJmaWx0ZXIiLCJhcmciLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/cls.ts\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();