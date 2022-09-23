/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/SunValley.ttf */ "./src/fonts/SunValley.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* style.css */\n@font-face {\n    font-family: 'SunValley';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    font-weight: 600;\n    font-style: normal;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    background-color: #ffffff;\n    color: #ffffff;\n    font-size: 16px;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.red {\n    background-color: red;\n}\n\nheader {\n    position: sticky;\n    top: 0;\n    padding: 5px 50px;\n    height: 80px;\n    background-color: rgba(255, 255, 255, 0.8);\n    color: #2c8845;\n    gap: 20px;\n}\n\n.header {\n    margin: 0 auto;\n    width: min(1100px,90vw);\n    height: inherit;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\nheader img, header a {\n    height: inherit;\n    cursor: pointer;\n}\n\nheader ul {\n    gap: 30px;\n    display: flex;\n    list-style: none;\n    margin-left: auto;\n    margin-right: 30px;\n}\n\nheader li {\n    cursor: pointer;\n}\n\nheader li:hover {\n    color: #de8c39;\n}\n\nheader button {\n    border-radius: 20px;\n    height: 2.5rem;\n    padding: 10px 25px;\n    color: #fffaf3;\n    background-color: #ffb8a1;\n    border: none;\n    letter-spacing: 1px;\n    cursor: pointer;\n}\n\n#order:hover {\n    background-color: #ffac91;\n}\n\n#payment {\n    background-color: #95d2e5;\n}\n\n#payment:hover {\n    background-color: #8ec8d9;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    background-color: #fffaf3;\n}\n\n#searchbar {\n    height: 3rem;\n    background-color: #2c8845;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#searchbar input[type=search] {\n    padding-left: 10px;\n    height: 1.75rem;\n    width: min(400px,90%);\n    border-style: none;\n    border-radius: 3px;\n}\n\n#searchbar input[type=search]:focus {\n    outline: none;\n}\n\n#searchbar button {\n    margin-left: -3px;\n    padding: 3px;\n    height: 1.75rem;\n    aspect-ratio: 1 / 1;\n    background-color: #28a745;\n    border: none;\n    cursor: pointer;\n}\n\n#searchbar button:hover {\n    background-color: #2c8845;\n}\n\n#searchbar button img {\n    width: 100%;\n    aspect-ratio: 1 / 1;\n}\n\n#pictures {\n    width: 100%;\n    height: max-content;\n}\n\n#pictures img {\n    width: inherit;\n    object-fit: contain;\n}\n\n#products {\n    margin: 0 0 50px;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.products-title {\n    margin: 20px 0;\n    font-family: 'SunValley', sans-serif;\n    font-size: 2rem;\n    color: #444444;\n}\n\n.green {\n    color: #2c8845;\n}\n\n.product-items {\n    min-height: min-content;\n    width: min(80%,1100px);\n    display: grid;\n    grid-template-rows: min-content;\n    grid-auto-rows: min-content;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 30px;\n}\n\n.product-item {\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n}\n\n.product-title {\n    background-color: #de8c39;\n    text-align: center;\n    padding: 20px;\n}\n\n.product-img img {\n    object-fit: cover;\n    width: 100%;\n}\n\n#video {\n    cursor: pointer;\n    margin: 30px auto;\n    height: 400px;\n    width: 800px;\n    overflow: hidden;\n}\n\n#video img {\n    max-height: 100%;\n    width: 100%;\n    object-fit: cover;\n}\n\n#story {\n    padding: 0 10vw 50px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 50px 0;\n}\n\n.story-title {\n    font-family: 'SunValley';\n    font-size: 2rem;\n    color: #2c8845;\n}\n\n.story-subtitle {\n    font-weight: bolder;\n    color: #2c8845;\n}\n\n.story-text {\n    display: flex;\n    font-size: 0.8rem;\n    flex-direction: column;\n    width: 30vw;\n    text-align: center;\n    color: #444444;\n}\n\n#story p {\n    line-height: 1.2rem;\n}\n\n.story-content {\n    text-align: justify;\n}\n\n.story-photo {\n    width: 30vw;\n}\n\n.story-photo img {\n    max-width: 100%;\n}\n\nfooter {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    height: 300px;\n    background-color: #f2f2f2;\n}\n\n.ftr-title {\n    font-family: 'SunValley';\n    font-size: 2.2rem;\n    color: #2c8845;\n}\n\n.ftr-title span {\n    font-family: sans-serif;\n}\n\n.ftr-buttons {\n    display: flex;\n    gap: 5px;\n}\n\n.ftr-buttons button {\n    background-color: #46423b;\n    color: #f2f2f2;\n    padding: 10px 20px;\n    border-radius: 5px;\n    border: none;\n    cursor: pointer;\n}\n\n.ftr-buttons button:hover {\n    background-color: #ffb03b;\n}\n\n.ftr-socmed {\n    display: flex;\n    gap: 3px;\n}\n\n.ftr-socmed * {\n    width: 2.75vw;\n    cursor: pointer;\n}\n\n.ftr-copyright {\n    color: #ffb03b;\n    font-size: 14px;\n}\n\n.ftr-copyright span {\n    font-weight: bolder;\n}\n\nli {\n    text-decoration: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["/* style.css */\n@font-face {\n    font-family: 'SunValley';\n    src: url('../fonts/SunValley.ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    background-color: #ffffff;\n    color: #ffffff;\n    font-size: 16px;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.red {\n    background-color: red;\n}\n\nheader {\n    position: sticky;\n    top: 0;\n    padding: 5px 50px;\n    height: 80px;\n    background-color: rgba(255, 255, 255, 0.8);\n    color: #2c8845;\n    gap: 20px;\n}\n\n.header {\n    margin: 0 auto;\n    width: min(1100px,90vw);\n    height: inherit;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\nheader img, header a {\n    height: inherit;\n    cursor: pointer;\n}\n\nheader ul {\n    gap: 30px;\n    display: flex;\n    list-style: none;\n    margin-left: auto;\n    margin-right: 30px;\n}\n\nheader li {\n    cursor: pointer;\n}\n\nheader li:hover {\n    color: #de8c39;\n}\n\nheader button {\n    border-radius: 20px;\n    height: 2.5rem;\n    padding: 10px 25px;\n    color: #fffaf3;\n    background-color: #ffb8a1;\n    border: none;\n    letter-spacing: 1px;\n    cursor: pointer;\n}\n\n#order:hover {\n    background-color: #ffac91;\n}\n\n#payment {\n    background-color: #95d2e5;\n}\n\n#payment:hover {\n    background-color: #8ec8d9;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    background-color: #fffaf3;\n}\n\n#searchbar {\n    height: 3rem;\n    background-color: #2c8845;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#searchbar input[type=search] {\n    padding-left: 10px;\n    height: 1.75rem;\n    width: min(400px,90%);\n    border-style: none;\n    border-radius: 3px;\n}\n\n#searchbar input[type=search]:focus {\n    outline: none;\n}\n\n#searchbar button {\n    margin-left: -3px;\n    padding: 3px;\n    height: 1.75rem;\n    aspect-ratio: 1 / 1;\n    background-color: #28a745;\n    border: none;\n    cursor: pointer;\n}\n\n#searchbar button:hover {\n    background-color: #2c8845;\n}\n\n#searchbar button img {\n    width: 100%;\n    aspect-ratio: 1 / 1;\n}\n\n#pictures {\n    width: 100%;\n    height: max-content;\n}\n\n#pictures img {\n    width: inherit;\n    object-fit: contain;\n}\n\n#products {\n    margin: 0 0 50px;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.products-title {\n    margin: 20px 0;\n    font-family: 'SunValley', sans-serif;\n    font-size: 2rem;\n    color: #444444;\n}\n\n.green {\n    color: #2c8845;\n}\n\n.product-items {\n    min-height: min-content;\n    width: min(80%,1100px);\n    display: grid;\n    grid-template-rows: min-content;\n    grid-auto-rows: min-content;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 30px;\n}\n\n.product-item {\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n}\n\n.product-title {\n    background-color: #de8c39;\n    text-align: center;\n    padding: 20px;\n}\n\n.product-img img {\n    object-fit: cover;\n    width: 100%;\n}\n\n#video {\n    cursor: pointer;\n    margin: 30px auto;\n    height: 400px;\n    width: 800px;\n    overflow: hidden;\n}\n\n#video img {\n    max-height: 100%;\n    width: 100%;\n    object-fit: cover;\n}\n\n#story {\n    padding: 0 10vw 50px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 50px 0;\n}\n\n.story-title {\n    font-family: 'SunValley';\n    font-size: 2rem;\n    color: #2c8845;\n}\n\n.story-subtitle {\n    font-weight: bolder;\n    color: #2c8845;\n}\n\n.story-text {\n    display: flex;\n    font-size: 0.8rem;\n    flex-direction: column;\n    width: 30vw;\n    text-align: center;\n    color: #444444;\n}\n\n#story p {\n    line-height: 1.2rem;\n}\n\n.story-content {\n    text-align: justify;\n}\n\n.story-photo {\n    width: 30vw;\n}\n\n.story-photo img {\n    max-width: 100%;\n}\n\nfooter {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    height: 300px;\n    background-color: #f2f2f2;\n}\n\n.ftr-title {\n    font-family: 'SunValley';\n    font-size: 2.2rem;\n    color: #2c8845;\n}\n\n.ftr-title span {\n    font-family: sans-serif;\n}\n\n.ftr-buttons {\n    display: flex;\n    gap: 5px;\n}\n\n.ftr-buttons button {\n    background-color: #46423b;\n    color: #f2f2f2;\n    padding: 10px 20px;\n    border-radius: 5px;\n    border: none;\n    cursor: pointer;\n}\n\n.ftr-buttons button:hover {\n    background-color: #ffb03b;\n}\n\n.ftr-socmed {\n    display: flex;\n    gap: 3px;\n}\n\n.ftr-socmed * {\n    width: 2.75vw;\n    cursor: pointer;\n}\n\n.ftr-copyright {\n    color: #ffb03b;\n    font-size: 14px;\n}\n\n.ftr-copyright span {\n    font-weight: bolder;\n}\n\nli {\n    text-decoration: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/search.png */ "./src/images/search.png");
/* harmony import */ var _images_MangoBravo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/MangoBravo.jpg */ "./src/images/MangoBravo.jpg");
/* harmony import */ var _images_cake_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cake.jpg */ "./src/images/cake.jpg");
/* harmony import */ var _images_ytimg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/ytimg.jpg */ "./src/images/ytimg.jpg");
/* harmony import */ var _images_contis_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/contis.jpg */ "./src/images/contis.jpg");
// home.js






function createSearchbar() {
    const searchbar = document.createElement('section');

    searchbar.id = 'searchbar';
    const search = document.createElement('input');
    search.type = 'search';
    search.name = 'search';
    search.id = 'search';
    search.placeholder = "Search for your CONTI's favorites...";
    const btn = document.createElement('button');
    const searchIcon = new Image();
    searchIcon.src = _images_search_png__WEBPACK_IMPORTED_MODULE_0__;
    btn.appendChild(searchIcon);
    searchbar.appendChild(search);
    searchbar.appendChild(btn);

    return searchbar;
}

function createPictures() {
    const pictures = document.createElement('section');
    
    pictures.id = 'pictures';
    const mangoPhoto = new Image();
    mangoPhoto.src = _images_MangoBravo_jpg__WEBPACK_IMPORTED_MODULE_1__;
    pictures.appendChild(mangoPhoto);

    return pictures;
}

function createProducts() {
    const products = document.createElement('section');

    products.id = 'products';
    const p = document.createElement('p');
    p.classList.add('products-title');
    p.innerHTML = '<span>Our <span class="green">Products</span></span>';
    products.append(p);
    const divItems = document.createElement('div');
    divItems.classList.add('product-items');
    const numOfProducts = 6;
    for (let i=0; i<numOfProducts; i++) {
        const divItem = document.createElement('div');
        divItem.classList.add('product-item');
        const divTitle = document.createElement('div');
        divTitle.classList.add('product-title');
        divTitle.innerText = "FABULOUS CAKES";
        divItem.appendChild(divTitle);
        const divImg = document.createElement('div');
        divImg.classList.add('product-img');
        const cake = new Image();
        cake.src = _images_cake_jpg__WEBPACK_IMPORTED_MODULE_2__;
        divImg.appendChild(cake);
        divItem.appendChild(divImg);
        divItems.appendChild(divItem);
    }
    products.append(divItems);

    return products;
}

function createVideo() {
    const video = document.createElement('section');

    video.id = 'video';
    const thumbnail = new Image();
    thumbnail.src = _images_ytimg_jpg__WEBPACK_IMPORTED_MODULE_3__;
    video.appendChild(thumbnail);

    return video;
}

function createStory() {
    const story = document.createElement('section');

    story.id = 'story';
    const divPhoto = document.createElement('div');
    divPhoto.classList.add('story-photo');
    const contis = new Image();
    contis.src = _images_contis_jpg__WEBPACK_IMPORTED_MODULE_4__;
    divPhoto.appendChild(contis);
    story.appendChild(divPhoto);
    const divText = document.createElement('div');
    divText.classList.add('story-text');
    const divTitle = document.createElement('div');
    divTitle.classList.add('story-title');
    divTitle.innerText = 'Our Story';
    divText.appendChild(divTitle);
    const divSubtitle = document.createElement('div');
    divSubtitle.classList.add('story-subtitle');
    divSubtitle.innerText = 'FOREVER SHARING JOY FROM OUR HOME TO YOURS';
    divText.appendChild(divSubtitle);
    divText.appendChild(document.createElement('br'));
    const divContent = document.createElement('div');
    divContent.classList.add('story-content');
    divContent.innerHTML = `<p>
                            A passion to create and serve delectable food reminiscent of the convenience 
                            and comforting warmth of one's own home, this is what we at Conti's are all 
                            about.
                            </p><br>
                            <p>
                            Since opening its doors to families and friends in Parañaque in 1997, Conti's 
                            Bakeshop and Restaurant has created and shared memories of togetherness to 
                            people who have come to love our wide selection of products, including our 
                            signature dishes such as the Baked Salmon, Chicken Pie, and the well-loved 
                            Mango Bravo.
                            </p><br>
                            <p>
                            With the joy and satisfaction of every guest who walks into our stores in 
                            mind, this food haven which began as a simple family restaurant now brings 
                            the familiar feelings of home and carefully prepared products to thousands 
                            of homes across the country through continuous product innovation and service 
                            expansion. Conti's Bakeshop & Restaurant today extends its commitment to 
                            hospitality and culinary excellence in 10 communities, serving more than 150 
                            sought-after dishes by guests who, over the years, have helped write our 
                            story of inspiration and success.
                            </p><br>
                            <p>
                            We are committed to make every guest experience memorable and to continue sharing our story in every product we create and serve.
                            </p>`;
    divText.appendChild(divContent);
    story.appendChild(divText);

    return story;
}

function loadHome() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    console.log('home');
    content.appendChild(createSearchbar());
    content.appendChild(createPictures());
    content.appendChild(createProducts());
    content.appendChild(createVideo());
    content.appendChild(createStory());

    return;
}

/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_fb_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/fb-logo.png */ "./src/images/fb-logo.png");
/* harmony import */ var _images_ig_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/ig-logo.png */ "./src/images/ig-logo.png");
/* harmony import */ var _images_favicon_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/favicon.jpg */ "./src/images/favicon.jpg");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stores */ "./src/stores.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
// initialize.js








function createHeader() {
    const header = document.createElement('header');

    const divHeader = document.createElement('div');
    divHeader.classList.add('header');
    const a = document.createElement('a');
    a.href = ".";
    const logo = new Image();
    logo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    a.appendChild(logo);
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    li1.innerText = 'HOME';
    li1.addEventListener('click', function() {
        (0,_home__WEBPACK_IMPORTED_MODULE_4__["default"])();
    });
    li2.innerText = 'OUR STORES';
    li2.addEventListener('click', function() {
        (0,_stores__WEBPACK_IMPORTED_MODULE_5__["default"])();
    });
    li3.innerText = 'MENU';
    li3.addEventListener('click', function() {
        (0,_menu__WEBPACK_IMPORTED_MODULE_6__["default"])();
    });
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    const order = document.createElement('button');
    const payment = document.createElement('button');
    order.id = 'order';
    payment.id = 'payment';
    order.innerText = 'ORDER NOW';
    payment.innerText = 'DIRECT ONLINE PAYMENT';

    divHeader.appendChild(a);
    divHeader.appendChild(ul);
    divHeader.appendChild(order);
    divHeader.appendChild(payment);
    header.appendChild(divHeader);
    return header;
}

function createFooter() {
    const footer = document.createElement('footer');

    const divTitle = document.createElement('div');
    divTitle.classList.add('ftr-title');
    divTitle.innerHTML = "Conti<span>'</span>s Bakeshop and Restaurant";
    const divButtons = document.createElement('div');
    divButtons.classList.add('ftr-buttons');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button');
    btn1.innerText = 'Our Services';
    btn2.innerText = 'Our Careers';
    btn3.innerText = 'Contact us';
    divButtons.appendChild(btn1);
    divButtons.appendChild(btn2);
    divButtons.appendChild(btn3);
    const divSocmed = document.createElement('div');
    divSocmed.classList.add('ftr-socmed');
    const divFb = document.createElement('div');
    const divIg = document.createElement('div');
    const fbLogo = new Image();
    const igLogo = new Image();
    fbLogo.src = _images_fb_logo_png__WEBPACK_IMPORTED_MODULE_1__;
    igLogo.src = _images_ig_logo_png__WEBPACK_IMPORTED_MODULE_2__;
    divFb.appendChild(fbLogo);
    divIg.appendChild(igLogo);
    divSocmed.appendChild(divFb);
    divSocmed.appendChild(divIg);
    const divCopyright = document.createElement('div');
    divCopyright.classList.add('ftr-copyright');
    divCopyright.innerHTML = "© Copyright <span>Conti's Bakeshop and Restaurant.</span> All Rights Reserved";
    footer.appendChild(divTitle);
    footer.appendChild(divButtons);
    footer.appendChild(divSocmed);
    footer.appendChild(divCopyright);

    return footer;
}

function initFavicon() {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = _images_favicon_jpg__WEBPACK_IMPORTED_MODULE_3__;
    document.head.appendChild(link);
    return;
}

function initialize() {
    const content = document.createElement('div');
    content.id = 'content';

    initFavicon();
    document.body.appendChild(createHeader());
    document.body.appendChild(content);
    document.body.appendChild(createFooter());
    return;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
// menu.js

function loadMenu() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    console.log('menu');
    return;
}

/***/ }),

/***/ "./src/stores.js":
/*!***********************!*\
  !*** ./src/stores.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadStores)
/* harmony export */ });
// stores.js

function loadStores() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    console.log('stores');
    return;
}

/***/ }),

/***/ "./src/fonts/SunValley.ttf":
/*!*********************************!*\
  !*** ./src/fonts/SunValley.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88dff9107e7328a71d2c.ttf";

/***/ }),

/***/ "./src/images/MangoBravo.jpg":
/*!***********************************!*\
  !*** ./src/images/MangoBravo.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6f8a6190d95bc1f5dea.jpg";

/***/ }),

/***/ "./src/images/cake.jpg":
/*!*****************************!*\
  !*** ./src/images/cake.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cec15e90d929dfd688bd.jpg";

/***/ }),

/***/ "./src/images/contis.jpg":
/*!*******************************!*\
  !*** ./src/images/contis.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e36810c1c0b67c9412df.jpg";

/***/ }),

/***/ "./src/images/favicon.jpg":
/*!********************************!*\
  !*** ./src/images/favicon.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc95c2a2095eb83b17ba.jpg";

/***/ }),

/***/ "./src/images/fb-logo.png":
/*!********************************!*\
  !*** ./src/images/fb-logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "378c607f949de6f5008d.png";

/***/ }),

/***/ "./src/images/ig-logo.png":
/*!********************************!*\
  !*** ./src/images/ig-logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b96bdc57c3976e763c38.png";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53559980abb32bbca358.png";

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eada16f87b12fa6ebeae.png";

/***/ }),

/***/ "./src/images/ytimg.jpg":
/*!******************************!*\
  !*** ./src/images/ytimg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e434edf2d99a6e4ee96b.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialize */ "./src/initialize.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
// index.js




console.log('hello 世界。');
(0,_initialize__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsNEJBQTRCLEdBQUcsT0FBTyw0RkFBNEYsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVks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QyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUM2QjtBQUNTO0FBQ1g7O0FBRTNCO0FBQ0EsdURBQVU7QUFDVixpREFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsaXplLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3RvcmVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1N1blZhbGxleS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZS5jc3MgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTdW5WYWxsZXknO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnJlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBwYWRkaW5nOiA1cHggNTBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIGNvbG9yOiAjMmM4ODQ1O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IG1pbigxMTAwcHgsOTB2dyk7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5oZWFkZXIgaW1nLCBoZWFkZXIgYSB7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIgdWwge1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcblxcbmhlYWRlciBsaSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyIGxpOmhvdmVyIHtcXG4gICAgY29sb3I6ICNkZThjMzk7XFxufVxcblxcbmhlYWRlciBidXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xcbiAgICBjb2xvcjogI2ZmZmFmMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjhhMTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNvcmRlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmFjOTE7XFxufVxcblxcbiNwYXltZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk1ZDJlNTtcXG59XFxuXFxuI3BheW1lbnQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGVjOGQ5O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhZjM7XFxufVxcblxcbiNzZWFyY2hiYXIge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzg4NDU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2VhcmNoYmFyIGlucHV0W3R5cGU9c2VhcmNoXSB7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgaGVpZ2h0OiAxLjc1cmVtO1xcbiAgICB3aWR0aDogbWluKDQwMHB4LDkwJSk7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4jc2VhcmNoYmFyIGlucHV0W3R5cGU9c2VhcmNoXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNzZWFyY2hiYXIgYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgaGVpZ2h0OiAxLjc1cmVtO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NlYXJjaGJhciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM4ODQ1O1xcbn1cXG5cXG4jc2VhcmNoYmFyIGJ1dHRvbiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuI3BpY3R1cmVzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbiNwaWN0dXJlcyBpbWcge1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuI3Byb2R1Y3RzIHtcXG4gICAgbWFyZ2luOiAwIDAgNTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9kdWN0cy10aXRsZSB7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICBmb250LWZhbWlseTogJ1N1blZhbGxleScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6ICM0NDQ0NDQ7XFxufVxcblxcbi5ncmVlbiB7XFxuICAgIGNvbG9yOiAjMmM4ODQ1O1xcbn1cXG5cXG4ucHJvZHVjdC1pdGVtcyB7XFxuICAgIG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogbWluKDgwJSwxMTAwcHgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi5wcm9kdWN0LWl0ZW0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9kdWN0LXRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlOGMzOTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ucHJvZHVjdC1pbWcgaW1nIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jdmlkZW8ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMzBweCBhdXRvO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiN2aWRlbyBpbWcge1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbiNzdG9yeSB7XFxuICAgIHBhZGRpbmc6IDAgMTB2dyA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogNTBweCAwO1xcbn1cXG5cXG4uc3RvcnktdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ1N1blZhbGxleSc7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6ICMyYzg4NDU7XFxufVxcblxcbi5zdG9yeS1zdWJ0aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGNvbG9yOiAjMmM4ODQ1O1xcbn1cXG5cXG4uc3RvcnktdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogIzQ0NDQ0NDtcXG59XFxuXFxuI3N0b3J5IHAge1xcbiAgICBsaW5lLWhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG4uc3RvcnktY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi5zdG9yeS1waG90byB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbn1cXG5cXG4uc3RvcnktcGhvdG8gaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuLmZ0ci10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU3VuVmFsbGV5JztcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgIGNvbG9yOiAjMmM4ODQ1O1xcbn1cXG5cXG4uZnRyLXRpdGxlIHNwYW4ge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZ0ci1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5mdHItYnV0dG9ucyBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0MjNiO1xcbiAgICBjb2xvcjogI2YyZjJmMjtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZnRyLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjAzYjtcXG59XFxuXFxuLmZ0ci1zb2NtZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxuLmZ0ci1zb2NtZWQgKiB7XFxuICAgIHdpZHRoOiAyLjc1dnc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZ0ci1jb3B5cmlnaHQge1xcbiAgICBjb2xvcjogI2ZmYjAzYjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uZnRyLWNvcHlyaWdodCBzcGFuIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxubGkge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7QUFDZDtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZiwyREFBMkQ7QUFDL0Q7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osMENBQTBDO0lBQzFDLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDJCQUEyQjtJQUMzQiwyREFBMkQ7SUFDM0QsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsZS5jc3MgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTdW5WYWxsZXknO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvU3VuVmFsbGV5LnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5yZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgcGFkZGluZzogNXB4IDUwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBjb2xvcjogIzJjODg0NTtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiBtaW4oMTEwMHB4LDkwdncpO1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuaGVhZGVyIGltZywgaGVhZGVyIGEge1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyIHVsIHtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG5oZWFkZXIgbGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlciBsaTpob3ZlciB7XFxuICAgIGNvbG9yOiAjZGU4YzM5O1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gICAgY29sb3I6ICNmZmZhZjM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmI4YTE7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jb3JkZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYzkxO1xcbn1cXG5cXG4jcGF5bWVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NWQyZTU7XFxufVxcblxcbiNwYXltZW50OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhlYzhkOTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWYzO1xcbn1cXG5cXG4jc2VhcmNoYmFyIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM4ODQ1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NlYXJjaGJhciBpbnB1dFt0eXBlPXNlYXJjaF0ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGhlaWdodDogMS43NXJlbTtcXG4gICAgd2lkdGg6IG1pbig0MDBweCw5MCUpO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuI3NlYXJjaGJhciBpbnB1dFt0eXBlPXNlYXJjaF06Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jc2VhcmNoYmFyIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGhlaWdodDogMS43NXJlbTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzZWFyY2hiYXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjODg0NTtcXG59XFxuXFxuI3NlYXJjaGJhciBidXR0b24gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbiNwaWN0dXJlcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbn1cXG5cXG4jcGljdHVyZXMgaW1nIHtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbiNwcm9kdWN0cyB7XFxuICAgIG1hcmdpbjogMCAwIDUwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvZHVjdHMtdGl0bGUge1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgZm9udC1mYW1pbHk6ICdTdW5WYWxsZXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiAjNDQ0NDQ0O1xcbn1cXG5cXG4uZ3JlZW4ge1xcbiAgICBjb2xvcjogIzJjODg0NTtcXG59XFxuXFxuLnByb2R1Y3QtaXRlbXMge1xcbiAgICBtaW4taGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IG1pbig4MCUsMTEwMHB4KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ucHJvZHVjdC1pdGVtIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvZHVjdC10aXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZThjMzk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnByb2R1Y3QtaW1nIGltZyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3ZpZGVvIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDMwcHggYXV0bztcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jdmlkZW8gaW1nIHtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4jc3Rvcnkge1xcbiAgICBwYWRkaW5nOiAwIDEwdncgNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDUwcHggMDtcXG59XFxuXFxuLnN0b3J5LXRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTdW5WYWxsZXknO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiAjMmM4ODQ1O1xcbn1cXG5cXG4uc3Rvcnktc3VidGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjb2xvcjogIzJjODg0NTtcXG59XFxuXFxuLnN0b3J5LXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICM0NDQ0NDQ7XFxufVxcblxcbiNzdG9yeSBwIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuLnN0b3J5LWNvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4uc3RvcnktcGhvdG8ge1xcbiAgICB3aWR0aDogMzB2dztcXG59XFxuXFxuLnN0b3J5LXBob3RvIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxufVxcblxcbi5mdHItdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ1N1blZhbGxleSc7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgICBjb2xvcjogIzJjODg0NTtcXG59XFxuXFxuLmZ0ci10aXRsZSBzcGFuIHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5mdHItYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uZnRyLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDIzYjtcXG4gICAgY29sb3I6ICNmMmYyZjI7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZ0ci1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmIwM2I7XFxufVxcblxcbi5mdHItc29jbWVkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbi5mdHItc29jbWVkICoge1xcbiAgICB3aWR0aDogMi43NXZ3O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mdHItY29weXJpZ2h0IHtcXG4gICAgY29sb3I6ICNmZmIwM2I7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmZ0ci1jb3B5cmlnaHQgc3BhbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbmxpIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaG9tZS5qc1xuaW1wb3J0IHNlYXJjaFBuZyBmcm9tICcuL2ltYWdlcy9zZWFyY2gucG5nJ1xuaW1wb3J0IG1hbmdvSnBnIGZyb20gJy4vaW1hZ2VzL01hbmdvQnJhdm8uanBnJ1xuaW1wb3J0IGNha2VKcGcgZnJvbSAnLi9pbWFnZXMvY2FrZS5qcGcnO1xuaW1wb3J0IHl0SnBnIGZyb20gJy4vaW1hZ2VzL3l0aW1nLmpwZyc7XG5pbXBvcnQgY29udGlzSnBnIGZyb20gJy4vaW1hZ2VzL2NvbnRpcy5qcGcnO1xuXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hiYXIoKSB7XG4gICAgY29uc3Qgc2VhcmNoYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgc2VhcmNoYmFyLmlkID0gJ3NlYXJjaGJhcic7XG4gICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzZWFyY2gudHlwZSA9ICdzZWFyY2gnO1xuICAgIHNlYXJjaC5uYW1lID0gJ3NlYXJjaCc7XG4gICAgc2VhcmNoLmlkID0gJ3NlYXJjaCc7XG4gICAgc2VhcmNoLnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggZm9yIHlvdXIgQ09OVEkncyBmYXZvcml0ZXMuLi5cIjtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBzZWFyY2hJY29uID0gbmV3IEltYWdlKCk7XG4gICAgc2VhcmNoSWNvbi5zcmMgPSBzZWFyY2hQbmc7XG4gICAgYnRuLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xuICAgIHNlYXJjaGJhci5hcHBlbmRDaGlsZChzZWFyY2gpO1xuICAgIHNlYXJjaGJhci5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgcmV0dXJuIHNlYXJjaGJhcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGljdHVyZXMoKSB7XG4gICAgY29uc3QgcGljdHVyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgXG4gICAgcGljdHVyZXMuaWQgPSAncGljdHVyZXMnO1xuICAgIGNvbnN0IG1hbmdvUGhvdG8gPSBuZXcgSW1hZ2UoKTtcbiAgICBtYW5nb1Bob3RvLnNyYyA9IG1hbmdvSnBnO1xuICAgIHBpY3R1cmVzLmFwcGVuZENoaWxkKG1hbmdvUGhvdG8pO1xuXG4gICAgcmV0dXJuIHBpY3R1cmVzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9kdWN0cygpIHtcbiAgICBjb25zdCBwcm9kdWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuICAgIHByb2R1Y3RzLmlkID0gJ3Byb2R1Y3RzJztcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuY2xhc3NMaXN0LmFkZCgncHJvZHVjdHMtdGl0bGUnKTtcbiAgICBwLmlubmVySFRNTCA9ICc8c3Bhbj5PdXIgPHNwYW4gY2xhc3M9XCJncmVlblwiPlByb2R1Y3RzPC9zcGFuPjwvc3Bhbj4nO1xuICAgIHByb2R1Y3RzLmFwcGVuZChwKTtcbiAgICBjb25zdCBkaXZJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkl0ZW1zLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtaXRlbXMnKTtcbiAgICBjb25zdCBudW1PZlByb2R1Y3RzID0gNjtcbiAgICBmb3IgKGxldCBpPTA7IGk8bnVtT2ZQcm9kdWN0czsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgZGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC10aXRsZScpO1xuICAgICAgICBkaXZUaXRsZS5pbm5lclRleHQgPSBcIkZBQlVMT1VTIENBS0VTXCI7XG4gICAgICAgIGRpdkl0ZW0uYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgICAgICBjb25zdCBkaXZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2SW1nLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtaW1nJyk7XG4gICAgICAgIGNvbnN0IGNha2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgY2FrZS5zcmMgPSBjYWtlSnBnO1xuICAgICAgICBkaXZJbWcuYXBwZW5kQ2hpbGQoY2FrZSk7XG4gICAgICAgIGRpdkl0ZW0uYXBwZW5kQ2hpbGQoZGl2SW1nKTtcbiAgICAgICAgZGl2SXRlbXMuYXBwZW5kQ2hpbGQoZGl2SXRlbSk7XG4gICAgfVxuICAgIHByb2R1Y3RzLmFwcGVuZChkaXZJdGVtcyk7XG5cbiAgICByZXR1cm4gcHJvZHVjdHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZGVvKCkge1xuICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgdmlkZW8uaWQgPSAndmlkZW8nO1xuICAgIGNvbnN0IHRodW1ibmFpbCA9IG5ldyBJbWFnZSgpO1xuICAgIHRodW1ibmFpbC5zcmMgPSB5dEpwZztcbiAgICB2aWRlby5hcHBlbmRDaGlsZCh0aHVtYm5haWwpO1xuXG4gICAgcmV0dXJuIHZpZGVvO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdG9yeSgpIHtcbiAgICBjb25zdCBzdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuICAgIHN0b3J5LmlkID0gJ3N0b3J5JztcbiAgICBjb25zdCBkaXZQaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdlBob3RvLmNsYXNzTGlzdC5hZGQoJ3N0b3J5LXBob3RvJyk7XG4gICAgY29uc3QgY29udGlzID0gbmV3IEltYWdlKCk7XG4gICAgY29udGlzLnNyYyA9IGNvbnRpc0pwZztcbiAgICBkaXZQaG90by5hcHBlbmRDaGlsZChjb250aXMpO1xuICAgIHN0b3J5LmFwcGVuZENoaWxkKGRpdlBob3RvKTtcbiAgICBjb25zdCBkaXZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2VGV4dC5jbGFzc0xpc3QuYWRkKCdzdG9yeS10ZXh0Jyk7XG4gICAgY29uc3QgZGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdzdG9yeS10aXRsZScpO1xuICAgIGRpdlRpdGxlLmlubmVyVGV4dCA9ICdPdXIgU3RvcnknO1xuICAgIGRpdlRleHQuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgIGNvbnN0IGRpdlN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2U3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnc3Rvcnktc3VidGl0bGUnKTtcbiAgICBkaXZTdWJ0aXRsZS5pbm5lclRleHQgPSAnRk9SRVZFUiBTSEFSSU5HIEpPWSBGUk9NIE9VUiBIT01FIFRPIFlPVVJTJztcbiAgICBkaXZUZXh0LmFwcGVuZENoaWxkKGRpdlN1YnRpdGxlKTtcbiAgICBkaXZUZXh0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3N0b3J5LWNvbnRlbnQnKTtcbiAgICBkaXZDb250ZW50LmlubmVySFRNTCA9IGA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBIHBhc3Npb24gdG8gY3JlYXRlIGFuZCBzZXJ2ZSBkZWxlY3RhYmxlIGZvb2QgcmVtaW5pc2NlbnQgb2YgdGhlIGNvbnZlbmllbmNlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBjb21mb3J0aW5nIHdhcm10aCBvZiBvbmUncyBvd24gaG9tZSwgdGhpcyBpcyB3aGF0IHdlIGF0IENvbnRpJ3MgYXJlIGFsbCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm91dC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+PGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbmNlIG9wZW5pbmcgaXRzIGRvb3JzIHRvIGZhbWlsaWVzIGFuZCBmcmllbmRzIGluIFBhcmHDsWFxdWUgaW4gMTk5NywgQ29udGkncyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYWtlc2hvcCBhbmQgUmVzdGF1cmFudCBoYXMgY3JlYXRlZCBhbmQgc2hhcmVkIG1lbW9yaWVzIG9mIHRvZ2V0aGVybmVzcyB0byBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW9wbGUgd2hvIGhhdmUgY29tZSB0byBsb3ZlIG91ciB3aWRlIHNlbGVjdGlvbiBvZiBwcm9kdWN0cywgaW5jbHVkaW5nIG91ciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUgZGlzaGVzIHN1Y2ggYXMgdGhlIEJha2VkIFNhbG1vbiwgQ2hpY2tlbiBQaWUsIGFuZCB0aGUgd2VsbC1sb3ZlZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYW5nbyBCcmF2by5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+PGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpdGggdGhlIGpveSBhbmQgc2F0aXNmYWN0aW9uIG9mIGV2ZXJ5IGd1ZXN0IHdobyB3YWxrcyBpbnRvIG91ciBzdG9yZXMgaW4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluZCwgdGhpcyBmb29kIGhhdmVuIHdoaWNoIGJlZ2FuIGFzIGEgc2ltcGxlIGZhbWlseSByZXN0YXVyYW50IG5vdyBicmluZ3MgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGZhbWlsaWFyIGZlZWxpbmdzIG9mIGhvbWUgYW5kIGNhcmVmdWxseSBwcmVwYXJlZCBwcm9kdWN0cyB0byB0aG91c2FuZHMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgaG9tZXMgYWNyb3NzIHRoZSBjb3VudHJ5IHRocm91Z2ggY29udGludW91cyBwcm9kdWN0IGlubm92YXRpb24gYW5kIHNlcnZpY2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5zaW9uLiBDb250aSdzIEJha2VzaG9wICYgUmVzdGF1cmFudCB0b2RheSBleHRlbmRzIGl0cyBjb21taXRtZW50IHRvIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsaXR5IGFuZCBjdWxpbmFyeSBleGNlbGxlbmNlIGluIDEwIGNvbW11bml0aWVzLCBzZXJ2aW5nIG1vcmUgdGhhbiAxNTAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291Z2h0LWFmdGVyIGRpc2hlcyBieSBndWVzdHMgd2hvLCBvdmVyIHRoZSB5ZWFycywgaGF2ZSBoZWxwZWQgd3JpdGUgb3VyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3J5IG9mIGluc3BpcmF0aW9uIGFuZCBzdWNjZXNzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD48YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgYXJlIGNvbW1pdHRlZCB0byBtYWtlIGV2ZXJ5IGd1ZXN0IGV4cGVyaWVuY2UgbWVtb3JhYmxlIGFuZCB0byBjb250aW51ZSBzaGFyaW5nIG91ciBzdG9yeSBpbiBldmVyeSBwcm9kdWN0IHdlIGNyZWF0ZSBhbmQgc2VydmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPmA7XG4gICAgZGl2VGV4dC5hcHBlbmRDaGlsZChkaXZDb250ZW50KTtcbiAgICBzdG9yeS5hcHBlbmRDaGlsZChkaXZUZXh0KTtcblxuICAgIHJldHVybiBzdG9yeTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnNvbGUubG9nKCdob21lJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVTZWFyY2hiYXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVQaWN0dXJlcygpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVByb2R1Y3RzKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVmlkZW8oKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVTdG9yeSgpKTtcblxuICAgIHJldHVybjtcbn0iLCIvLyBpbml0aWFsaXplLmpzXG5pbXBvcnQgTG9nbyBmcm9tICcuL2ltYWdlcy9sb2dvLnBuZyc7XG5pbXBvcnQgRkIgZnJvbSAnLi9pbWFnZXMvZmItbG9nby5wbmcnO1xuaW1wb3J0IElHIGZyb20gJy4vaW1hZ2VzL2lnLWxvZ28ucG5nJztcbmltcG9ydCBGYXZpY29uIGZyb20gJy4vaW1hZ2VzL2Zhdmljb24uanBnJztcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGxvYWRTdG9yZXMgZnJvbSAnLi9zdG9yZXMnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICAgIGNvbnN0IGRpdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuaHJlZiA9IFwiLlwiO1xuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvLnNyYyA9IExvZ287XG4gICAgYS5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkxLmlubmVyVGV4dCA9ICdIT01FJztcbiAgICBsaTEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZEhvbWUoKTtcbiAgICB9KTtcbiAgICBsaTIuaW5uZXJUZXh0ID0gJ09VUiBTVE9SRVMnO1xuICAgIGxpMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2FkU3RvcmVzKCk7XG4gICAgfSk7XG4gICAgbGkzLmlubmVyVGV4dCA9ICdNRU5VJztcbiAgICBsaTMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZE1lbnUoKTtcbiAgICB9KTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTEpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkzKTtcbiAgICBjb25zdCBvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHBheW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBvcmRlci5pZCA9ICdvcmRlcic7XG4gICAgcGF5bWVudC5pZCA9ICdwYXltZW50JztcbiAgICBvcmRlci5pbm5lclRleHQgPSAnT1JERVIgTk9XJztcbiAgICBwYXltZW50LmlubmVyVGV4dCA9ICdESVJFQ1QgT05MSU5FIFBBWU1FTlQnO1xuXG4gICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGEpO1xuICAgIGRpdkhlYWRlci5hcHBlbmRDaGlsZCh1bCk7XG4gICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKG9yZGVyKTtcbiAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQocGF5bWVudCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdkhlYWRlcik7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgZGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdmdHItdGl0bGUnKTtcbiAgICBkaXZUaXRsZS5pbm5lckhUTUwgPSBcIkNvbnRpPHNwYW4+Jzwvc3Bhbj5zIEJha2VzaG9wIGFuZCBSZXN0YXVyYW50XCI7XG4gICAgY29uc3QgZGl2QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnZnRyLWJ1dHRvbnMnKTtcbiAgICBjb25zdCBidG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYnRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJ0bjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4xLmlubmVyVGV4dCA9ICdPdXIgU2VydmljZXMnO1xuICAgIGJ0bjIuaW5uZXJUZXh0ID0gJ091ciBDYXJlZXJzJztcbiAgICBidG4zLmlubmVyVGV4dCA9ICdDb250YWN0IHVzJztcbiAgICBkaXZCdXR0b25zLmFwcGVuZENoaWxkKGJ0bjEpO1xuICAgIGRpdkJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnRuMik7XG4gICAgZGl2QnV0dG9ucy5hcHBlbmRDaGlsZChidG4zKTtcbiAgICBjb25zdCBkaXZTb2NtZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZTb2NtZWQuY2xhc3NMaXN0LmFkZCgnZnRyLXNvY21lZCcpO1xuICAgIGNvbnN0IGRpdkZiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2SWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmYkxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBpZ0xvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBmYkxvZ28uc3JjID0gRkI7XG4gICAgaWdMb2dvLnNyYyA9IElHO1xuICAgIGRpdkZiLmFwcGVuZENoaWxkKGZiTG9nbyk7XG4gICAgZGl2SWcuYXBwZW5kQ2hpbGQoaWdMb2dvKTtcbiAgICBkaXZTb2NtZWQuYXBwZW5kQ2hpbGQoZGl2RmIpO1xuICAgIGRpdlNvY21lZC5hcHBlbmRDaGlsZChkaXZJZyk7XG4gICAgY29uc3QgZGl2Q29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Q29weXJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Z0ci1jb3B5cmlnaHQnKTtcbiAgICBkaXZDb3B5cmlnaHQuaW5uZXJIVE1MID0gXCLCqSBDb3B5cmlnaHQgPHNwYW4+Q29udGkncyBCYWtlc2hvcCBhbmQgUmVzdGF1cmFudC48L3NwYW4+IEFsbCBSaWdodHMgUmVzZXJ2ZWRcIjtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChkaXZCdXR0b25zKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2U29jbWVkKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2Q29weXJpZ2h0KTtcblxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGluaXRGYXZpY29uKCkge1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluay5yZWwgPSAnaWNvbic7XG4gICAgbGluay50eXBlID0gJ2ltYWdlL3gtaWNvbic7XG4gICAgbGluay5ocmVmID0gRmF2aWNvbjtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIHJldHVybjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5pZCA9ICdjb250ZW50JztcblxuICAgIGluaXRGYXZpY29uKCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgICByZXR1cm47XG59IiwiLy8gbWVudS5qc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnNvbGUubG9nKCdtZW51Jyk7XG4gICAgcmV0dXJuO1xufSIsIi8vIHN0b3Jlcy5qc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkU3RvcmVzKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc29sZS5sb2coJ3N0b3JlcycpO1xuICAgIHJldHVybjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGluZGV4LmpzXG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lJ1xuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi9pbml0aWFsaXplJztcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJ1xuXG5jb25zb2xlLmxvZygnaGVsbG8g5LiW55WM44CCJyk7XG5pbml0aWFsaXplKCk7XG5sb2FkSG9tZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==