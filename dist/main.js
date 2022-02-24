/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100vh;\\n  color: #555;\\n  font-family: sans-serif;\\n  background-color: #fff;\\n}\\n\\n#wrapper {\\n  background-color: #fff;\\n  box-shadow: 0 0.1rem 0.2rem #333;\\n  border-radius: 0.7rem;\\n  width: 100%;\\n  max-width: 30%;\\n  margin: 2%;\\n  overflow: hidden;\\n}\\n\\n.list-head {\\n  display: flex;\\n  padding: 1rem 1rem 0.5rem;\\n  justify-content: space-between;\\n  align-items: center;\\n  border-bottom: 1px solid #eee;\\n}\\n\\n.list-head a {\\n  color: rgb(143, 143, 143);\\n}\\n\\n.input {\\n  display: flex;\\n  justify-content: space-between;\\n  gap: 1rem;\\n  padding: 1rem;\\n}\\n\\n.input input {\\n  outline: none;\\n  width: 100%;\\n  height: 2rem;\\n  border: none;\\n\\n}\\n\\n.input button {\\n  border: none;\\n  background: none;\\n  color: aqua;\\n}\\n\\nbutton i {\\n  width: 1rem;\\n  height: 1rem;\\n}\\n\\n#clear {\\n  width: 100%;\\n  border: 0;\\n  padding: 1rem;\\n}\\n\\n#ulList img {\\n  height: 16px;\\n  width: 16px;\\n  color: #eee;\\n}\\n\\n#ulList li {\\n  display: flex;\\n  padding: 1rem;\\n  align-items: center;\\n}\\n\\n.list-content {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 1rem;\\n  flex-basis: 95%;\\n}\\n\\n.todo-description {\\n  flex-basis: 95%;\\n  height: 2rem;\\n  border: none;\\n  outline: none;\\n  font-size: 1rem;\\n  background: none;\\n}\\n\\nsvg {\\n  fill: #eee;\\n}\\n\\n.strike {\\n  text-decoration: line-through;\\n}\\n\\n.disabled {\\n  opacity: 0.5;\\n}\\n\\n.disabled .todo-description {\\n  pointer-events: none;\\n}\\n\\n.disabled .todo-menu {\\n  pointer-events: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/asset/modules/statusCheckBox.js":
/*!*********************************************!*\
  !*** ./src/asset/modules/statusCheckBox.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"statusCheckBox\": () => (/* binding */ statusCheckBox),\n/* harmony export */   \"ListContent\": () => (/* binding */ ListContent)\n/* harmony export */ });\nlet ListContent = [];\nconst statusCheckBox = (e) => {\n  const list = e.target.parentNode.parentNode;\n  list.children[0].children[1].classList.toggle(\"strike\");\n  let completed = !list.classList.contains(\"disabled\");\n  list.classList.toggle(\"disabled\");\n  const getLists = document.querySelector(\"#ulList\").children;\n  const index = Array.from(getLists).indexOf(list);\n  ListContent[index].completed = completed;\n  localStorage.setItem(\"tasks\", JSON.stringify(ListContent));\n};\n\n\n\n//# sourceURL=webpack://webpack-template/./src/asset/modules/statusCheckBox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/modules/statusCheckBox.js */ \"./src/asset/modules/statusCheckBox.js\");\n/* harmony import */ var _asset_images_add_grey_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/images/add-grey.svg */ \"./src/asset/images/add-grey.svg\");\n/* harmony import */ var _asset_images_3dots_grey_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset/images/3dots-grey.svg */ \"./src/asset/images/3dots-grey.svg\");\n/* harmony import */ var _asset_images_trash_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset/images/trash.svg */ \"./src/asset/images/trash.svg\");\n\n\n// input section\n\n\n\nconst render = `<a href=\"#\"><img src=\"${_asset_images_add_grey_svg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"img\"></a>`;\nconst addButton = document.getElementById(\"add-button\");\naddButton.innerHTML = render;\n\n// list section\n\n//functions\n//status checkbox\n\n// const statusCheckBox = (e) => {\n//   const list = e.target.parentNode.parentNode;\n//   list.children[0].children[1].classList.toggle(\"strike\");\n//   let completed = !list.classList.contains(\"disabled\");\n//   list.classList.toggle(\"disabled\");\n//   const getLists = document.querySelector(\"#ulList\").children;\n//   const index = Array.from(getLists).indexOf(list);\n//   ListContent[index].completed = completed;\n//   localStorage.setItem(\"tasks\", JSON.stringify(ListContent));\n// };\n\n//sorting index values\nconst sortIndex = () => {\n  _asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.ListContent = _asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.ListContent.map((item, index) => {\n    return {\n      index: index + 1,\n      description: item.description,\n      completed: item.completed,\n    };\n  });\n  localStorage.setItem(\"tasks\", JSON.stringify(_asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.ListContent));\n};\n\n//update local storage\nconst updateLocalStorage = (arr, item) => {\n  const index = Array.from(arr).indexOf(item.parentNode.parentNode);\n  _asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.ListContent[index].description = item.value;\n  localStorage.setItem(\"tasks\", JSON.stringify(_asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.ListContent));\n};\n\n// input validation\nconst isValid = (value) => {\n  if (!value) {\n    return false;\n  } else {\n    return true;\n  }\n};\n\n//after editing todo list - hit enter to save\nconst saveValue = (event) => {\n  if (\n    event.target.classList.contains(\"todo-description\") &&\n    event.keyCode === 13\n  ) {\n    event.target.disabled = true;\n    event.target.parentNode.parentNode.children[1].src = _asset_images_3dots_grey_svg__WEBPACK_IMPORTED_MODULE_3__;\n    const todoContent = document.querySelector(\"#ulList\").children;\n    updateLocalStorage(todoContent, event.target);\n    sortIndex();\n  }\n};\n\n// enable editing and removing todolist\nconst todoEdit = (event) => {\n  if (event.target.src === _asset_images_3dots_grey_svg__WEBPACK_IMPORTED_MODULE_3__) {\n    event.target.src = _asset_images_trash_svg__WEBPACK_IMPORTED_MODULE_4__;\n    event.target.parentNode.children[0].children[1].removeAttribute(\"disabled\");\n    // document.querySelector(\".todo-description\").removeAttribute(\"disabled\");\n  } else {\n    const lists = document.querySelector(\"#ulList\").children;\n    const indexList = Array.from(lists).indexOf(event.target.parentNode);\n    _asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.ListContent.splice(indexList, 1);\n    localStorage.setItem(\"tasks\", JSON.stringify(_asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.ListContent));\n    event.target.parentNode.remove();\n    sortIndex();\n  }\n};\n\n// to check key press enter\ndocument.addEventListener(\"keypress\", saveValue);\n\n//add function\nconst addtodo = (event) => {\n  const todoInput = document.querySelector(\".todo-input\").value;\n  const valid = isValid(todoInput); // checking input validation\n\n  if (!valid) return;\n  event.preventDefault();\n  const index = _asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.ListContent.length;\n  _asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.ListContent.push({\n    index: index + 1,\n    description: todoInput,\n    completed: false,\n  });\n  const ListElement = document.createElement(\"li\");\n  ListElement.id = _asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.ListContent[index].index;\n  const menuIcon = document.createElement(\"img\");\n  menuIcon.src = _asset_images_3dots_grey_svg__WEBPACK_IMPORTED_MODULE_3__;\n  menuIcon.alt = \"menu\";\n  menuIcon.className = \"todo-menu\";\n  const ListTemplate = `<div class=\"list-content\">\n    <input type=\"checkbox\" class=\"checkbox\">\n    <input type=\"text\" value=\"${_asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.ListContent[index].description}\" class=\"todo-description\" disabled>\n    </div>`;\n\n  menuIcon.addEventListener(\"click\", todoEdit);\n  ListElement.innerHTML = ListTemplate;\n  ListElement.appendChild(menuIcon);\n  const ListSection = document.getElementById(\"ulList\");\n  ListSection.appendChild(ListElement);\n  const getCheckBoxes = document.querySelectorAll(\".checkbox\");\n  const checkBoxIndex = getCheckBoxes.length - 1;\n  getCheckBoxes[checkBoxIndex].addEventListener(\"change\", _asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.statusCheckBox);\n  localStorage.setItem(\"tasks\", JSON.stringify(_asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.ListContent));\n  document.querySelector(\".todo-input\").value = null;\n};\n\n// adds the task from input\naddButton.addEventListener(\"click\", addtodo);\n\n//create list for reloading\nconst addingTodos = (task) => {\n  const index = task.index;\n  _asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.ListContent.push({\n    index: index,\n    description: task.description,\n    completed: task.completed,\n  });\n  const ListElement = document.createElement(\"li\");\n  ListElement.id = task.index;\n  const menuIcon = document.createElement(\"img\");\n  menuIcon.src = _asset_images_3dots_grey_svg__WEBPACK_IMPORTED_MODULE_3__;\n  menuIcon.alt = \"menu\";\n  menuIcon.className = \"todo-menu\";\n  const ListTemplate = `<div class=\"list-content\">\n    <input type=\"checkbox\" class=\"checkbox\" >\n    <input type=\"text\" value=\"${task.description}\" class=\"todo-description\" disabled>\n    </div>`;\n\n  menuIcon.addEventListener(\"click\", todoEdit);\n  ListElement.innerHTML = ListTemplate;\n  ListElement.appendChild(menuIcon);\n  const ListSection = document.getElementById(\"ulList\");\n  ListSection.appendChild(ListElement);\n  const getCheckBoxes = document.querySelectorAll(\".checkbox\");\n  const checkBoxIndex = getCheckBoxes.length - 1;\n  getCheckBoxes[checkBoxIndex].addEventListener(\"change\", _asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.statusCheckBox);\n  if (task.completed === true) {\n    getCheckBoxes[checkBoxIndex].click();\n  }\n};\n\n//show todolist\nconst showTodoList = () => {\n  const grabList = JSON.parse(localStorage.getItem(\"tasks\"));\n  if (grabList === null) return;\n  grabList.forEach((item) => addingTodos(item));\n  localStorage.setItem(\"tasks\", JSON.stringify(_asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.ListContent));\n};\n\nconst clearAll = () => {\n  const disabled = document.querySelectorAll(\".disabled\");\n  Array.from(disabled).forEach((item, i) => item.remove());\n  _asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.ListContent = _asset_modules_statusCheckBox_js__WEBPACK_IMPORTED_MODULE_1__.ListContent.filter((item) => item.completed === false);\n  sortIndex();\n};\n\ndocument.querySelector(\"#clear\").addEventListener(\"click\", clearAll);\n\nshowTodoList();\n\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/asset/images/3dots-grey.svg":
/*!*****************************************!*\
  !*** ./src/asset/images/3dots-grey.svg ***!
  \*****************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNTEyIgogICBoZWlnaHQ9IjUxMiIKICAgdmlld0JveD0iMCAwIDUxMiA1MTIiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzUiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMS4yICgwYTAwY2Y1MzM5LCAyMDIyLTAyLTA0KSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iM2RvdHMtZ3JleS5zdmciCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc3IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzk5OTk5OSIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjAuNzY3NTc4MTIiCiAgICAgaW5rc2NhcGU6Y3g9IjI1NiIKICAgICBpbmtzY2FwZTpjeT0iMjU2IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM2NiIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI2OTkiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjMyIgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIiAvPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZSI+CiAgICA8Y2lyY2xlCiAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzgwODA4MDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1saW5lY2FwOnJvdW5kIgogICAgICAgaWQ9InBhdGg4NDYiCiAgICAgICBjeD0iMjU2IgogICAgICAgY3k9IjUwIgogICAgICAgcj0iNTAiIC8+CiAgICA8Y2lyY2xlCiAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzgwODA4MDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIKICAgICAgIGlkPSJjaXJjbGUxODI5IgogICAgICAgY3g9IjI1NiIKICAgICAgIGN5PSIyNTYiCiAgICAgICByPSI1MCIgLz4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojODA4MDgwO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIgogICAgICAgaWQ9ImNpcmNsZTE4MzEiCiAgICAgICBjeD0iMjU2IgogICAgICAgY3k9IjQ2MiIKICAgICAgIHI9IjUwIiAvPgogIDwvZz4KPC9zdmc+Cg==\";\n\n//# sourceURL=webpack://webpack-template/./src/asset/images/3dots-grey.svg?");

/***/ }),

/***/ "./src/asset/images/add-grey.svg":
/*!***************************************!*\
  !*** ./src/asset/images/add-grey.svg ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iMTYiCiAgIGhlaWdodD0iMTYiCiAgIHZpZXdCb3g9IjAgMCAxNiAxNiIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iYWRkLWdyZXkuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjEuMiAoMGEwMGNmNTMzOSwgMjAyMi0wMi0wNCkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXcxMTAiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjOTk5OTk5IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIyNC41NjI1IgogICAgIGlua3NjYXBlOmN4PSI4IgogICAgIGlua3NjYXBlOmN5PSI4IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM2NiIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI2OTkiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjMyIgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNSIgLz4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiIgLz4KICA8ZwogICAgIGlkPSJsYXllcjEiCiAgICAgc3R5bGU9ImZpbGw6IzgwODA4MCI+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGg5NzAiCiAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtmaWxsOiM4MDgwODA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kOy1pbmtzY2FwZS1zdHJva2U6bm9uZSIKICAgICAgIGQ9Ik0gMTMuODY4MTY1LDAuMjAyMjc5NzMgQSAwLjk1MDk2OTk5LDAuOTUwOTY5OTkgMCAwIDAgMTIuOTE2OTkzLDEuMTUzNDUxNiBWIDEwLjY0NzU5MiBIIDQuNDMwNjY1IEwgNi4wNTM3MTE5LDkuMDI0NTQ1NCBhIDAuOTUwOTY5OTksMC45NTA5Njk5OSAwIDAgMCAwLC0xLjM0Mzc1IEEgMC45NTA5Njk5OSwwLjk1MDk2OTk5IDAgMCAwIDUuMzc5ODgzOCw3LjQwMTQ5ODUgMC45NTA5Njk5OSwwLjk1MDk2OTk5IDAgMCAwIDQuNzA4MDA4OCw3LjY4MDc5NTQgTCAxLjQ2MTkxNSwxMC45MjY4ODkgYSAwLjk1MTA2NTA5LDAuOTUxMDY1MDkgMCAwIDAgLTAuMTc5Njg3NCwwLjI2OTUzMSAwLjk1MDk2OTk5LDAuOTUwOTY5OTkgMCAwIDAgLTAuMDM3MTA5LDAuMDgzOTggMC45NTEwNjUwOSwwLjk1MTA2NTA5IDAgMCAwIC0wLjA2MjUsMC4zMTQ0NTMgMC45NTA5Njk5OSwwLjk1MDk2OTk5IDAgMCAwIDAsMC4wMDM5IDAuOTUxMDY1MDksMC45NTEwNjUwOSAwIDAgMCAwLDAuMDAyIDAuOTUxMDY1MDksMC45NTEwNjUwOSAwIDAgMCAwLjA2NDQ1MywwLjMyMDMxMiAwLjk1MDk2OTk5LDAuOTUwOTY5OTkgMCAwIDAgMC4wMzMyMDMsMC4wNzgxMyAwLjk1MTA2NTA5LDAuOTUxMDY1MDkgMCAwIDAgMC4xODE2NDA2LDAuMjcxNDg1IDAuOTUxMDY1MDksMC45NTEwNjUwOSAwIDAgMCAwLDAuMDAyIGwgMy4yNDYwOTM4LDMuMjQ2MDkzIGEgMC45NTA5Njk5OSwwLjk1MDk2OTk5IDAgMCAwIDEuMzQ1NzAzMSwwIDAuOTUwOTY5OTksMC45NTA5Njk5OSAwIDAgMCAwLC0xLjM0NTcwMyBMIDQuNDMwNjY1LDEyLjU0OTkzNSBoIDkuNDM3NSBhIDAuOTUxMDY1MDksMC45NTEwNjUwOSAwIDAgMCAwLjk0OTIxOSwtMC45NTExNzEgViAxLjE1MzQ1MTYgQSAwLjk1MDk2OTk5LDAuOTUwOTY5OTkgMCAwIDAgMTMuODY4MTY1LDAuMjAyMjc5NzMgWiIgLz4KICA8L2c+Cjwvc3ZnPgo=\";\n\n//# sourceURL=webpack://webpack-template/./src/asset/images/add-grey.svg?");

/***/ }),

/***/ "./src/asset/images/trash.svg":
/*!************************************!*\
  !*** ./src/asset/images/trash.svg ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNTEyIgogICBoZWlnaHQ9IjUxMiIKICAgdmlld0JveD0iMCAwIDUxMiA1MTIiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzUiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMS4yICgwYTAwY2Y1MzM5LCAyMDIyLTAyLTA0KSIKICAgc29kaXBvZGk6ZG9jbmFtZT0idHJhc2guc3ZnIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0ibmFtZWR2aWV3NyIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM5OTk5OTkiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIwLjc2NzU3ODEyIgogICAgIGlua3NjYXBlOmN4PSIyNTYiCiAgICAgaW5rc2NhcGU6Y3k9IjI1NiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEzNjYiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNjk5IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIzMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMiIgLz4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiIgLz4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICBzdHlsZT0iZGlzcGxheTpub25lIj4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojODA4MDgwO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQiCiAgICAgICBpZD0icGF0aDg0NiIKICAgICAgIGN4PSIyNTYiCiAgICAgICBjeT0iNTAiCiAgICAgICByPSI1MCIgLz4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojODA4MDgwO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIgogICAgICAgaWQ9ImNpcmNsZTE4MjkiCiAgICAgICBjeD0iMjU2IgogICAgICAgY3k9IjI1NiIKICAgICAgIHI9IjUwIiAvPgogICAgPGNpcmNsZQogICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiM4MDgwODA7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiCiAgICAgICBpZD0iY2lyY2xlMTgzMSIKICAgICAgIGN4PSIyNTYiCiAgICAgICBjeT0iNDYyIgogICAgICAgcj0iNTAiIC8+CiAgPC9nPgogIDxnCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIyIgogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAyIj4KICAgIDxwYXRoCiAgICAgICBpZD0icmVjdDEwNDYiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowLjY2MjI2NztzdHJva2Utd2lkdGg6NC4xO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjQ7ZmlsbDojODA4MDgwIgogICAgICAgZD0iTSAyNy4wNDAzNTksMzQuMzk3MjY1IEggNDg0Ljk1OTY0IEwgNDI3LjcxOTczLDQ3Ny42MDI3MyBIIDM3MC40Nzk4MiAzMTMuMjM5OTEgMjU2IDE5OC43NjAwOSAxNDEuNTIwMTggODQuMjgwMjcgWiIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjYyIgLz4KICA8L2c+Cjwvc3ZnPgo=\";\n\n//# sourceURL=webpack://webpack-template/./src/asset/images/trash.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;