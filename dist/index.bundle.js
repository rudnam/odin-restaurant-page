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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family:SunValley;\n    font-style:normal;\n    font-weight:600;\n    src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n    margin:0;\n    padding:0;\n}\n\n:root {\n    background-color:#fff;\n    color:#fff;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size:16px;\n    min-width:100vw;\n}\n\n.red {\n    background-color:red;\n}\n\nheader {\n    background-color:rgba(255,255,255,0.8);\n    color:#2c8845;\n    gap:20px;\n    height:80px;\n    padding:5px 5vw;\n    position:sticky;\n    top:0;\n}\n\n.header {\n    align-items:center;\n    display:flex;\n    gap:20px;\n    height:inherit;\n    margin:0 auto;\n    max-width:90vw;\n    overflow-x:clip;\n    width:min(1100px,90vw);\n}\n\nheader img,header a {\n    cursor:pointer;\n    height:inherit;\n}\n\nheader ul {\n    display:flex;\n    gap:30px;\n    list-style:none;\n    margin-left:auto;\n    margin-right:30px;\n}\n\nheader li {\n    cursor:pointer;\n}\n\nheader li:hover {\n    color:#de8c39;\n}\n\nheader button {\n    background-color:#ffb8a1;\n    border:none;\n    border-radius:20px;\n    color:#fffaf3;\n    cursor:pointer;\n    height:2.5rem;\n    letter-spacing:1px;\n    padding:10px 25px;\n}\n\n#order:hover {\n    background-color:#ffac91;\n    }\n\n#payment {\n    background-color:#95d2e5;\n}\n\n#payment:hover {\n    background-color:#8ec8d9;\n}\n\n#content {\n    background-color:#fffaf3;\n    display:flex;\n    flex-direction:column;\n}\n\n#searchbar {\n    align-items:center;\n    background-color:#2c8845;\n    display:flex;\n    height:3rem;\n    justify-content:center;\n}\n\n#searchbar input[type=search] {\n    border-radius:3px;\n    border-style:none;\n    height:1.75rem;\n    padding-left:10px;\n    width:min(400px,90%);\n}\n\n#searchbar input[type=search]:focus {\n    outline:none;\n}\n\n#searchbar button {\n    aspect-ratio:1 / 1;\n    background-color:#28a745;\n    border:none;\n    cursor:pointer;\n    height:1.75rem;\n    margin-left:-3px;\n    padding:3px;\n}\n\n#searchbar button:hover {\n    background-color:#2c8845;\n}\n\n#searchbar button img {\n    aspect-ratio:1 / 1;\n    width:100%;\n}\n\n#pictures {\n    height:max-content;\n    width:100%;\n}\n\n#pictures img {\n    object-fit:contain;\n    width:inherit;\n}\n\n#products {\n    align-items:center;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    margin:0 0 50px;\n    overflow:hidden;\n}\n\n.products-title {\n    color:#444;\n    font-family:SunValley, sans-serif;\n    font-size:2rem;\n    margin:20px 0;\n}\n\n.green {\n    color:#2c8845;\n}\n\n.product-items {\n    display:grid;\n    gap:30px;\n    grid-auto-rows:min-content;\n    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));\n    grid-template-rows:min-content;\n    min-height:min-content;\n    width:min(80%,1100px);\n}\n\n.product-item {\n    cursor:pointer;\n    display:flex;\n    flex-direction:column;\n}\n\n.product-title {\n    background-color:#de8c39;\n    padding:20px;\n    text-align:center;\n}\n\n.product-img img {\n    object-fit:cover;\n    width:100%;\n}\n\n#video {\n    cursor:pointer;\n    height:400px;\n    margin:30px auto;\n    width:min(800px,80%);\n}\n\n#video img {\n    max-height:100%;\n    max-width:100%;\n    object-fit:cover;\n}\n\n#story {\n    align-items:stretch;\n    display:grid;\n    gap:50px;\n    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));\n    grid-template-rows:min-content;\n    justify-content:space-between;\n    justify-items:center;\n    overflow-x:hidden;\n    padding:0 0 50px;\n}\n\n.story-title {\n    color:#2c8845;\n    font-family:SunValley;\n    font-size:2rem;\n}\n\n.story-subtitle {\n    color:#2c8845;\n    font-weight:bolder;\n}\n\n.story-text {\n    color:#444;\n    display:flex;\n    flex-direction:column;\n    font-size:.8rem;\n    text-align:center;\n    width:min(80vw,480px);\n}\n\n#story p {\n    line-height:1.2rem;\n}\n\n.story-content {\n    text-align:justify;\n}\n\n.story-photo {\n    width:min(80vw,480px);\n}\n\n.story-photo img {\n    max-width:100%;\n}\n\nfooter {\n    align-items:center;\n    background-color:#f2f2f2;\n    display:flex;\n    flex-direction:column;\n    height:300px;\n    justify-content:space-evenly;\n}\n\n.ftr-title {\n    color:#2c8845;\n    font-family:SunValley;\n    font-size:2.2rem;\n}\n\n.ftr-buttons {\n    display:flex;\n    gap:5px;\n}\n\n.ftr-buttons button {\n    background-color:#46423b;\n    border:none;\n    border-radius:5px;\n    color:#f2f2f2;\n    cursor:pointer;\n    padding:10px 20px;\n}\n\n.ftr-buttons button:hover {\n    background-color:#ffb03b;\n}\n\n.ftr-socmed {\n    display:flex;\n    gap:3px;\n    }\n\n.ftr-socmed * {\n    cursor:pointer;\n    width:2.75vw;\n}\n\n.ftr-copyright {\n    color:#ffb03b;\n    font-size:14px;\n}\n\nli {\n    text-decoration:none;\n}\n\n#topbar {\n    display:flex;\n    flex-direction:column;\n    padding:30px 0 0;\n}\n\n.topbar-title {\n    color:#444;\n    font-family:SunValley;\n    font-size:2rem;\n    margin-left:5vw;\n}\n\n#topbar #searchbar input[type=search] {\n    border:1px solid #ced4da;\n    border-radius:3px;\n    height:1.75rem;\n    padding-left:10px;\n    width:400px;\n}\n\n#topbar #selectbar select {\n    border:1px solid #ced4da;\n    border-radius:3px;\n    height:1.75rem;\n    padding-left:5px;\n    width:425px;\n}\n\n.store-cards {\n    display:grid;\n    gap:30px;\n    grid-auto-rows:min-content;\n    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));\n    grid-template-rows:min-content;\n    margin:auto;\n    min-height:min-content;\n    overflow:hidden;\n    padding:15px 0 30px;\n    width:95%;\n}\n\n.store-card {\n    align-items:center;\n    background-color:#fff;\n    border:1px solid #28a745;\n    border-radius:3px;\n    color:#444;\n    display:flex;\n    flex-direction:column;\n    font-size:.8rem;\n    gap:20px;\n    padding:30px 20px;\n}\n\n.card-title {\n    color:#2c8845;\n    font-size:1rem;\n    text-align:center;\n}\n\n.card-address {\n    line-height:2;\n    text-align:center;\n}\n\n.store-card hr {\n    min-width:100%;\n}\n\n.card-details {\n    background-color:inherit;\n    border:1px solid #28a745;\n    border-radius:3px;\n    color:#28a745;\n    cursor:pointer;\n    padding:8px 0;\n    width:90%;\n}\n\n.card-details:hover {\n    background-color:#28a745;\n    color:#fff;\n}\n\n#menu {\n    color:#444;\n    display:flex;\n    flex-direction:column;\n    font-size:.8rem;\n    gap:10px;\n    margin:50px 10vw;\n}\n\n.menu-items {\n    color:#2c8845;\n    display:grid;\n    gap:30px;\n    grid-auto-rows:min-content;\n    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));\n    grid-template-rows:min-content;\n    min-height:min-content;\n}\n\n.menu-item {\n    background-color:#fff;\n    border-radius:5px;\n    box-shadow:rgba(149,157,165,0.5) 0 8px 24px;\n    cursor:pointer;\n    overflow:hidden;\n}\n\n.item-text {\n    display:flex;\n    flex-direction:column;\n    gap:20px;\n    padding:20px;\n}\n\n.item-description {\n    overflow:hidden;\n    text-overflow:ellipsis;\n    white-space:nowrap;\n}\n\n.menu-title {\n    font-family:SunValley;\n    font-size:1.5rem;\n}\n\n.item-img img {\n    aspect-ratio:1 / 1;\n    max-width:100%;\n}\n\n.ftr-title span,.menu-title span {\n    font-family:sans-serif;\n}\n\n.ftr-copyright span,.item-title {\n    font-weight:bolder;\n}\n\n#topbar #searchbar,#topbar #selectbar {\n    align-items:center;\n    background-color:inherit;\n    display:flex;\n    height:3rem;\n    justify-content:center;\n}\n\n.card-schedule,.card-contacts {\n    margin-right:auto;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family:SunValley;\n    font-style:normal;\n    font-weight:600;\n    src:url(../fonts/SunValley.ttf);\n}\n\n* {\n    margin:0;\n    padding:0;\n}\n\n:root {\n    background-color:#fff;\n    color:#fff;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size:16px;\n    min-width:100vw;\n}\n\n.red {\n    background-color:red;\n}\n\nheader {\n    background-color:rgba(255,255,255,0.8);\n    color:#2c8845;\n    gap:20px;\n    height:80px;\n    padding:5px 5vw;\n    position:sticky;\n    top:0;\n}\n\n.header {\n    align-items:center;\n    display:flex;\n    gap:20px;\n    height:inherit;\n    margin:0 auto;\n    max-width:90vw;\n    overflow-x:clip;\n    width:min(1100px,90vw);\n}\n\nheader img,header a {\n    cursor:pointer;\n    height:inherit;\n}\n\nheader ul {\n    display:flex;\n    gap:30px;\n    list-style:none;\n    margin-left:auto;\n    margin-right:30px;\n}\n\nheader li {\n    cursor:pointer;\n}\n\nheader li:hover {\n    color:#de8c39;\n}\n\nheader button {\n    background-color:#ffb8a1;\n    border:none;\n    border-radius:20px;\n    color:#fffaf3;\n    cursor:pointer;\n    height:2.5rem;\n    letter-spacing:1px;\n    padding:10px 25px;\n}\n\n#order:hover {\n    background-color:#ffac91;\n    }\n\n#payment {\n    background-color:#95d2e5;\n}\n\n#payment:hover {\n    background-color:#8ec8d9;\n}\n\n#content {\n    background-color:#fffaf3;\n    display:flex;\n    flex-direction:column;\n}\n\n#searchbar {\n    align-items:center;\n    background-color:#2c8845;\n    display:flex;\n    height:3rem;\n    justify-content:center;\n}\n\n#searchbar input[type=search] {\n    border-radius:3px;\n    border-style:none;\n    height:1.75rem;\n    padding-left:10px;\n    width:min(400px,90%);\n}\n\n#searchbar input[type=search]:focus {\n    outline:none;\n}\n\n#searchbar button {\n    aspect-ratio:1 / 1;\n    background-color:#28a745;\n    border:none;\n    cursor:pointer;\n    height:1.75rem;\n    margin-left:-3px;\n    padding:3px;\n}\n\n#searchbar button:hover {\n    background-color:#2c8845;\n}\n\n#searchbar button img {\n    aspect-ratio:1 / 1;\n    width:100%;\n}\n\n#pictures {\n    height:max-content;\n    width:100%;\n}\n\n#pictures img {\n    object-fit:contain;\n    width:inherit;\n}\n\n#products {\n    align-items:center;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    margin:0 0 50px;\n    overflow:hidden;\n}\n\n.products-title {\n    color:#444;\n    font-family:SunValley, sans-serif;\n    font-size:2rem;\n    margin:20px 0;\n}\n\n.green {\n    color:#2c8845;\n}\n\n.product-items {\n    display:grid;\n    gap:30px;\n    grid-auto-rows:min-content;\n    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));\n    grid-template-rows:min-content;\n    min-height:min-content;\n    width:min(80%,1100px);\n}\n\n.product-item {\n    cursor:pointer;\n    display:flex;\n    flex-direction:column;\n}\n\n.product-title {\n    background-color:#de8c39;\n    padding:20px;\n    text-align:center;\n}\n\n.product-img img {\n    object-fit:cover;\n    width:100%;\n}\n\n#video {\n    cursor:pointer;\n    height:400px;\n    margin:30px auto;\n    width:min(800px,80%);\n}\n\n#video img {\n    max-height:100%;\n    max-width:100%;\n    object-fit:cover;\n}\n\n#story {\n    align-items:stretch;\n    display:grid;\n    gap:50px;\n    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));\n    grid-template-rows:min-content;\n    justify-content:space-between;\n    justify-items:center;\n    overflow-x:hidden;\n    padding:0 0 50px;\n}\n\n.story-title {\n    color:#2c8845;\n    font-family:SunValley;\n    font-size:2rem;\n}\n\n.story-subtitle {\n    color:#2c8845;\n    font-weight:bolder;\n}\n\n.story-text {\n    color:#444;\n    display:flex;\n    flex-direction:column;\n    font-size:.8rem;\n    text-align:center;\n    width:min(80vw,480px);\n}\n\n#story p {\n    line-height:1.2rem;\n}\n\n.story-content {\n    text-align:justify;\n}\n\n.story-photo {\n    width:min(80vw,480px);\n}\n\n.story-photo img {\n    max-width:100%;\n}\n\nfooter {\n    align-items:center;\n    background-color:#f2f2f2;\n    display:flex;\n    flex-direction:column;\n    height:300px;\n    justify-content:space-evenly;\n}\n\n.ftr-title {\n    color:#2c8845;\n    font-family:SunValley;\n    font-size:2.2rem;\n}\n\n.ftr-buttons {\n    display:flex;\n    gap:5px;\n}\n\n.ftr-buttons button {\n    background-color:#46423b;\n    border:none;\n    border-radius:5px;\n    color:#f2f2f2;\n    cursor:pointer;\n    padding:10px 20px;\n}\n\n.ftr-buttons button:hover {\n    background-color:#ffb03b;\n}\n\n.ftr-socmed {\n    display:flex;\n    gap:3px;\n    }\n\n.ftr-socmed * {\n    cursor:pointer;\n    width:2.75vw;\n}\n\n.ftr-copyright {\n    color:#ffb03b;\n    font-size:14px;\n}\n\nli {\n    text-decoration:none;\n}\n\n#topbar {\n    display:flex;\n    flex-direction:column;\n    padding:30px 0 0;\n}\n\n.topbar-title {\n    color:#444;\n    font-family:SunValley;\n    font-size:2rem;\n    margin-left:5vw;\n}\n\n#topbar #searchbar input[type=search] {\n    border:1px solid #ced4da;\n    border-radius:3px;\n    height:1.75rem;\n    padding-left:10px;\n    width:400px;\n}\n\n#topbar #selectbar select {\n    border:1px solid #ced4da;\n    border-radius:3px;\n    height:1.75rem;\n    padding-left:5px;\n    width:425px;\n}\n\n.store-cards {\n    display:grid;\n    gap:30px;\n    grid-auto-rows:min-content;\n    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));\n    grid-template-rows:min-content;\n    margin:auto;\n    min-height:min-content;\n    overflow:hidden;\n    padding:15px 0 30px;\n    width:95%;\n}\n\n.store-card {\n    align-items:center;\n    background-color:#fff;\n    border:1px solid #28a745;\n    border-radius:3px;\n    color:#444;\n    display:flex;\n    flex-direction:column;\n    font-size:.8rem;\n    gap:20px;\n    padding:30px 20px;\n}\n\n.card-title {\n    color:#2c8845;\n    font-size:1rem;\n    text-align:center;\n}\n\n.card-address {\n    line-height:2;\n    text-align:center;\n}\n\n.store-card hr {\n    min-width:100%;\n}\n\n.card-details {\n    background-color:inherit;\n    border:1px solid #28a745;\n    border-radius:3px;\n    color:#28a745;\n    cursor:pointer;\n    padding:8px 0;\n    width:90%;\n}\n\n.card-details:hover {\n    background-color:#28a745;\n    color:#fff;\n}\n\n#menu {\n    color:#444;\n    display:flex;\n    flex-direction:column;\n    font-size:.8rem;\n    gap:10px;\n    margin:50px 10vw;\n}\n\n.menu-items {\n    color:#2c8845;\n    display:grid;\n    gap:30px;\n    grid-auto-rows:min-content;\n    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));\n    grid-template-rows:min-content;\n    min-height:min-content;\n}\n\n.menu-item {\n    background-color:#fff;\n    border-radius:5px;\n    box-shadow:rgba(149,157,165,0.5) 0 8px 24px;\n    cursor:pointer;\n    overflow:hidden;\n}\n\n.item-text {\n    display:flex;\n    flex-direction:column;\n    gap:20px;\n    padding:20px;\n}\n\n.item-description {\n    overflow:hidden;\n    text-overflow:ellipsis;\n    white-space:nowrap;\n}\n\n.menu-title {\n    font-family:SunValley;\n    font-size:1.5rem;\n}\n\n.item-img img {\n    aspect-ratio:1 / 1;\n    max-width:100%;\n}\n\n.ftr-title span,.menu-title span {\n    font-family:sans-serif;\n}\n\n.ftr-copyright span,.item-title {\n    font-weight:bolder;\n}\n\n#topbar #searchbar,#topbar #selectbar {\n    align-items:center;\n    background-color:inherit;\n    display:flex;\n    height:3rem;\n    justify-content:center;\n}\n\n.card-schedule,.card-contacts {\n    margin-right:auto;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "createSearchbar": () => (/* binding */ createSearchbar),
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

    const search = document.createElement('input');
    const btn = document.createElement('button');
    const searchIcon = new Image();

    btn.appendChild(searchIcon);
    searchbar.appendChild(search);
    searchbar.appendChild(btn);

    searchbar.id = 'searchbar';
    search.id = 'search';
    search.type = 'search';
    search.name = 'search';
    search.placeholder = "Search for your CONTI's favorites...";
    searchIcon.src = _images_search_png__WEBPACK_IMPORTED_MODULE_0__;
    
    return searchbar;
}

function createPictures() {
    const pictures = document.createElement('section');
    
    const mangoPhoto = new Image();

    pictures.appendChild(mangoPhoto);

    pictures.id = 'pictures';
    mangoPhoto.src = _images_MangoBravo_jpg__WEBPACK_IMPORTED_MODULE_1__;
    
    return pictures;
}

function createProducts() {
    const products = document.createElement('section');

    const p = document.createElement('p');
    const divItems = document.createElement('div');
    
    products.append(p);
    products.append(divItems);
    
    products.id = 'products';
    p.classList.add('products-title');
    divItems.classList.add('product-items');
    p.innerHTML = '<span>Our <span class="green">Products</span></span>';
    
    const numOfProducts = 6;
    for (let i=0; i<numOfProducts; i++) {
        const divItem = document.createElement('div');
        const divTitle = document.createElement('div');
        const divImg = document.createElement('div');
        const cake = new Image();

        divItem.appendChild(divTitle);
        divImg.appendChild(cake);
        divItem.appendChild(divImg);
        divItems.appendChild(divItem);

        divItem.classList.add('product-item');
        divTitle.classList.add('product-title');
        divImg.classList.add('product-img');
        divTitle.innerText = "FABULOUS CAKES";
        cake.src = _images_cake_jpg__WEBPACK_IMPORTED_MODULE_2__;
    }

    return products;
}

function createVideo() {
    const video = document.createElement('section');

    const thumbnail = new Image();

    video.appendChild(thumbnail);

    video.id = 'video';
    thumbnail.src = _images_ytimg_jpg__WEBPACK_IMPORTED_MODULE_3__;

    return video;
}

function createStory() {
    const story = document.createElement('section');

    const divPhoto = document.createElement('div');
    const contis = new Image();
    const divText = document.createElement('div');
    const divTitle = document.createElement('div');
    const divSubtitle = document.createElement('div');
    const divContent = document.createElement('div');

    divPhoto.appendChild(contis);
    story.appendChild(divPhoto);
    divText.appendChild(divTitle);
    divText.appendChild(divSubtitle);
    divText.appendChild(document.createElement('br'));
    divText.appendChild(divContent);
    story.appendChild(divText);

    story.id = 'story';
    divPhoto.classList.add('story-photo');
    divText.classList.add('story-text');
    divTitle.classList.add('story-title');
    divSubtitle.classList.add('story-subtitle');
    divContent.classList.add('story-content');
    contis.src = _images_contis_jpg__WEBPACK_IMPORTED_MODULE_4__;
    divTitle.innerText = 'Our Story';
    divSubtitle.innerText = 'FOREVER SHARING JOY FROM OUR HOME TO YOURS';
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

    return story;
}

function loadHome() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

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
    const a = document.createElement('a');
    const logo = new Image();
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const order = document.createElement('button');
    const payment = document.createElement('button');

    a.appendChild(logo);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    header.appendChild(divHeader);
    divHeader.appendChild(a);
    divHeader.appendChild(ul);
    divHeader.appendChild(order);
    divHeader.appendChild(payment);

    order.id = 'order';
    payment.id = 'payment';
    divHeader.classList.add('header');
    logo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    a.href = ".";
    order.innerText = 'ORDER NOW';
    payment.innerText = 'DIRECT ONLINE PAYMENT';
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

    return header;
}

function createFooter() {
    const footer = document.createElement('footer');

    const divTitle = document.createElement('div');
    const divButtons = document.createElement('div');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button');
    const divSocmed = document.createElement('div');
    const divFb = document.createElement('div');
    const divIg = document.createElement('div');
    const fbLogo = new Image();
    const igLogo = new Image();
    const divCopyright = document.createElement('div');

    divButtons.appendChild(btn1);
    divButtons.appendChild(btn2);
    divButtons.appendChild(btn3);
    divFb.appendChild(fbLogo);
    divIg.appendChild(igLogo);
    divSocmed.appendChild(divFb);
    divSocmed.appendChild(divIg);
    footer.appendChild(divTitle);
    footer.appendChild(divButtons);
    footer.appendChild(divSocmed);
    footer.appendChild(divCopyright);

    divTitle.classList.add('ftr-title');
    divButtons.classList.add('ftr-buttons');
    divSocmed.classList.add('ftr-socmed');
    divCopyright.classList.add('ftr-copyright');
    divTitle.innerHTML = "Conti<span>'</span>s Bakeshop and Restaurant";
    divCopyright.innerHTML = "© Copyright <span>Conti's Bakeshop and Restaurant.</span> All Rights Reserved";
    btn1.innerText = 'Our Services';
    btn2.innerText = 'Our Careers';
    btn3.innerText = 'Contact us';
    fbLogo.src = _images_fb_logo_png__WEBPACK_IMPORTED_MODULE_1__;
    igLogo.src = _images_ig_logo_png__WEBPACK_IMPORTED_MODULE_2__;

    return footer;
}

function initFavicon() {
    const link = document.createElement('link');
    
    document.head.appendChild(link);

    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = _images_favicon_jpg__WEBPACK_IMPORTED_MODULE_3__;

    return;
}

function initialize() {
    const content = document.createElement('div');

    document.body.appendChild(createHeader());
    document.body.appendChild(content);
    document.body.appendChild(createFooter());

    content.id = 'content';

    initFavicon();
    (0,_home__WEBPACK_IMPORTED_MODULE_4__["default"])();

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
/* harmony import */ var _images_cake_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/cake.jpg */ "./src/images/cake.jpg");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
// menu.js



function createMenu() {
    const menu = document.createElement('section');

    const menuTitle = document.createElement('p');
    const menuItems = document.createElement('div');
    
    menu.appendChild(menuTitle);
    menu.appendChild(menuItems);

    menu.id = 'menu';
    menuTitle.classList.add('menu-title');
    menuItems.classList.add('menu-items');
    menuTitle.innerHTML = "What<span>'</span>s New<span>?</span>";
    
    const numOfMenuItems = 12;
    
    for (let i=0; i<numOfMenuItems; i++) {
        const menuItem = document.createElement('div');
        const itemImg = document.createElement('div');
        const itemText = document.createElement('div');
        const itemTitle = document.createElement('p');
        const itemPrice = document.createElement('p');
        const itemDescription = document.createElement('p');
        const cake = new Image();

        itemImg.appendChild(cake);
        menuItem.appendChild(itemImg);
        menuItem.appendChild(itemText);
        itemText.appendChild(itemTitle);
        itemText.appendChild(itemPrice);
        itemText.appendChild(itemDescription);
        menuItems.appendChild(menuItem);

        menuItem.classList.add('menu-item');
        itemText.classList.add('item-text');
        itemImg.classList.add('item-img');
        itemTitle.classList.add('item-title');
        itemPrice.classList.add('item-price');
        itemDescription.classList.add('item-description');
        cake.src = _images_cake_jpg__WEBPACK_IMPORTED_MODULE_0__;
        itemTitle.innerText = 'Biscoff Silvanas';
        itemPrice.innerText = 'PHP 365';
        itemDescription.innerText = 'Biscoff flavor and rich buttercream in between layers of cashew-meringue wafers';
    }
    return menu;
}


function loadMenu() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.createSearchbar)());
    content.appendChild(createMenu());
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
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/search.png */ "./src/images/search.png");
// stores.js


function createTopbar() {
    const topbar = document.createElement('section');

    const p = document.createElement('p');
    const searchbar = document.createElement('div');
    const search = document.createElement('input');
    const btn = document.createElement('button');
    const searchIcon = new Image();
    const selectbar = document.createElement('div');
    const select = document.createElement('select');
    const placeholder = document.createElement('option');

    topbar.appendChild(p);
    topbar.appendChild(searchbar);
    topbar.appendChild(selectbar);
    btn.appendChild(searchIcon);
    searchbar.appendChild(search);
    searchbar.appendChild(btn);
    select.appendChild(placeholder);
    selectbar.appendChild(select);
    
    topbar.id = 'topbar';
    searchbar.id = 'searchbar'
    selectbar.id = 'selectbar';
    search.id = 'search';
    p.classList.add('topbar-title');
    p.innerText = 'Store Search';
    search.type = 'search';
    search.name = 'search';
    search.placeholder = "City";
    searchIcon.src = _images_search_png__WEBPACK_IMPORTED_MODULE_0__;
    placeholder.innerText = 'Select State';
    placeholder.disabled = true;
    placeholder.selected = true;
    
    const numOfCities = 5;
    for (let i=0; i<numOfCities; i++) {
        const option = document.createElement('option');
        option.value = `City ${i}`;
        option.innerText = `City ${i}`;
        select.appendChild(option);
    }
    
    return topbar;
}

function createStores() {
    const stores = document.createElement('section');
    
    const storeCards = document.createElement('div');

    stores.appendChild(storeCards)

    stores.id = 'stores';
    storeCards.classList.add('store-cards');

    const numOfStores = 15;
    for (let i=0; i<numOfStores; i++) {
        const storeCard = document.createElement('div');
        const cardTitle = document.createElement('p');
        const cardAddress = document.createElement('p');
        const cardSchedule = document.createElement('p');
        const cardContacts = document.createElement('div');
        const cardLine = document.createElement('hr');
        const cardDetails = document.createElement('button');
        const num1 = document.createElement('a');
        const num2 = document.createElement('a');

        storeCard.appendChild(cardTitle);
        storeCard.appendChild(cardAddress);
        storeCard.appendChild(cardSchedule);
        storeCard.appendChild(cardContacts);
        storeCard.appendChild(cardLine);
        storeCard.appendChild(cardDetails);
        cardContacts.appendChild(num1);
        cardContacts.appendChild(num2);
        storeCards.appendChild(storeCard);

        storeCard.classList.add('store-card');
        cardTitle.classList.add('card-title');
        cardAddress.classList.add('card-address');
        cardSchedule.classList.add('card-schedule');
        cardContacts.classList.add('card-contacts');
        cardDetails.classList.add('card-details');
        cardTitle.innerText = 'Alabang Town Center, Muntinlupa City';
        cardAddress.innerText = '1107 G/F Corte de las Palmas, Alabang Town Center, Ayala Alabang, City of Muntinlupa';
        cardSchedule.innerText = '11:00 AM - 08:00 PM';
        num1.innerText = '(0917)554-2996';
        num2.innerText = '(02)8556-7720';
        cardDetails.innerText = 'See Details';
    }

    return stores;

}

function loadStores() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    content.appendChild(createTopbar());
    content.appendChild(createStores());
    
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
/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize */ "./src/initialize.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
// index.js



(0,_initialize__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVks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QTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNzQztBQUNYOztBQUUzQix1REFBVSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsaXplLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3RvcmVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1N1blZhbGxleS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6U3VuVmFsbGV5O1xcbiAgICBmb250LXN0eWxlOm5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xcbiAgICBzcmM6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcblxcbjpyb290IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xcbiAgICBjb2xvcjojZmZmO1xcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOjE2cHg7XFxuICAgIG1pbi13aWR0aDoxMDB2dztcXG59XFxuXFxuLnJlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC44KTtcXG4gICAgY29sb3I6IzJjODg0NTtcXG4gICAgZ2FwOjIwcHg7XFxuICAgIGhlaWdodDo4MHB4O1xcbiAgICBwYWRkaW5nOjVweCA1dnc7XFxuICAgIHBvc2l0aW9uOnN0aWNreTtcXG4gICAgdG9wOjA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZ2FwOjIwcHg7XFxuICAgIGhlaWdodDppbmhlcml0O1xcbiAgICBtYXJnaW46MCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6OTB2dztcXG4gICAgb3ZlcmZsb3cteDpjbGlwO1xcbiAgICB3aWR0aDptaW4oMTEwMHB4LDkwdncpO1xcbn1cXG5cXG5oZWFkZXIgaW1nLGhlYWRlciBhIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIGhlaWdodDppbmhlcml0O1xcbn1cXG5cXG5oZWFkZXIgdWwge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDozMHB4O1xcbiAgICBsaXN0LXN0eWxlOm5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XFxuICAgIG1hcmdpbi1yaWdodDozMHB4O1xcbn1cXG5cXG5oZWFkZXIgbGkge1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyIGxpOmhvdmVyIHtcXG4gICAgY29sb3I6I2RlOGMzOTtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmYjhhMTtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcXG4gICAgY29sb3I6I2ZmZmFmMztcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIGhlaWdodDoyLjVyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOjFweDtcXG4gICAgcGFkZGluZzoxMHB4IDI1cHg7XFxufVxcblxcbiNvcmRlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmYWM5MTtcXG4gICAgfVxcblxcbiNwYXltZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojOTVkMmU1O1xcbn1cXG5cXG4jcGF5bWVudDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzhlYzhkOTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZhZjM7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbn1cXG5cXG4jc2VhcmNoYmFyIHtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyYzg4NDU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgaGVpZ2h0OjNyZW07XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxufVxcblxcbiNzZWFyY2hiYXIgaW5wdXRbdHlwZT1zZWFyY2hdIHtcXG4gICAgYm9yZGVyLXJhZGl1czozcHg7XFxuICAgIGJvcmRlci1zdHlsZTpub25lO1xcbiAgICBoZWlnaHQ6MS43NXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XFxuICAgIHdpZHRoOm1pbig0MDBweCw5MCUpO1xcbn1cXG5cXG4jc2VhcmNoYmFyIGlucHV0W3R5cGU9c2VhcmNoXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6bm9uZTtcXG59XFxuXFxuI3NlYXJjaGJhciBidXR0b24ge1xcbiAgICBhc3BlY3QtcmF0aW86MSAvIDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzI4YTc0NTtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBoZWlnaHQ6MS43NXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6LTNweDtcXG4gICAgcGFkZGluZzozcHg7XFxufVxcblxcbiNzZWFyY2hiYXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMmM4ODQ1O1xcbn1cXG5cXG4jc2VhcmNoYmFyIGJ1dHRvbiBpbWcge1xcbiAgICBhc3BlY3QtcmF0aW86MSAvIDE7XFxuICAgIHdpZHRoOjEwMCU7XFxufVxcblxcbiNwaWN0dXJlcyB7XFxuICAgIGhlaWdodDptYXgtY29udGVudDtcXG4gICAgd2lkdGg6MTAwJTtcXG59XFxuXFxuI3BpY3R1cmVzIGltZyB7XFxuICAgIG9iamVjdC1maXQ6Y29udGFpbjtcXG4gICAgd2lkdGg6aW5oZXJpdDtcXG59XFxuXFxuI3Byb2R1Y3RzIHtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgbWFyZ2luOjAgMCA1MHB4O1xcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxufVxcblxcbi5wcm9kdWN0cy10aXRsZSB7XFxuICAgIGNvbG9yOiM0NDQ7XFxuICAgIGZvbnQtZmFtaWx5OlN1blZhbGxleSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOjJyZW07XFxuICAgIG1hcmdpbjoyMHB4IDA7XFxufVxcblxcbi5ncmVlbiB7XFxuICAgIGNvbG9yOiMyYzg4NDU7XFxufVxcblxcbi5wcm9kdWN0LWl0ZW1zIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBnYXA6MzBweDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6bWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maXQsbWlubWF4KDMwMHB4LDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6bWluLWNvbnRlbnQ7XFxuICAgIG1pbi1oZWlnaHQ6bWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOm1pbig4MCUsMTEwMHB4KTtcXG59XFxuXFxuLnByb2R1Y3QtaXRlbSB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG59XFxuXFxuLnByb2R1Y3QtdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZThjMzk7XFxuICAgIHBhZGRpbmc6MjBweDtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcblxcbi5wcm9kdWN0LWltZyBpbWcge1xcbiAgICBvYmplY3QtZml0OmNvdmVyO1xcbiAgICB3aWR0aDoxMDAlO1xcbn1cXG5cXG4jdmlkZW8ge1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgaGVpZ2h0OjQwMHB4O1xcbiAgICBtYXJnaW46MzBweCBhdXRvO1xcbiAgICB3aWR0aDptaW4oODAwcHgsODAlKTtcXG59XFxuXFxuI3ZpZGVvIGltZyB7XFxuICAgIG1heC1oZWlnaHQ6MTAwJTtcXG4gICAgbWF4LXdpZHRoOjEwMCU7XFxuICAgIG9iamVjdC1maXQ6Y292ZXI7XFxufVxcblxcbiNzdG9yeSB7XFxuICAgIGFsaWduLWl0ZW1zOnN0cmV0Y2g7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ2FwOjUwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maXQsbWlubWF4KDMwMHB4LDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6bWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XFxuICAgIHBhZGRpbmc6MCAwIDUwcHg7XFxufVxcblxcbi5zdG9yeS10aXRsZSB7XFxuICAgIGNvbG9yOiMyYzg4NDU7XFxuICAgIGZvbnQtZmFtaWx5OlN1blZhbGxleTtcXG4gICAgZm9udC1zaXplOjJyZW07XFxufVxcblxcbi5zdG9yeS1zdWJ0aXRsZSB7XFxuICAgIGNvbG9yOiMyYzg4NDU7XFxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcXG59XFxuXFxuLnN0b3J5LXRleHQge1xcbiAgICBjb2xvcjojNDQ0O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgZm9udC1zaXplOi44cmVtO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgd2lkdGg6bWluKDgwdncsNDgwcHgpO1xcbn1cXG5cXG4jc3RvcnkgcCB7XFxuICAgIGxpbmUtaGVpZ2h0OjEuMnJlbTtcXG59XFxuXFxuLnN0b3J5LWNvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOmp1c3RpZnk7XFxufVxcblxcbi5zdG9yeS1waG90byB7XFxuICAgIHdpZHRoOm1pbig4MHZ3LDQ4MHB4KTtcXG59XFxuXFxuLnN0b3J5LXBob3RvIGltZyB7XFxuICAgIG1heC13aWR0aDoxMDAlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2YyZjJmMjtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGhlaWdodDozMDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmZ0ci10aXRsZSB7XFxuICAgIGNvbG9yOiMyYzg4NDU7XFxuICAgIGZvbnQtZmFtaWx5OlN1blZhbGxleTtcXG4gICAgZm9udC1zaXplOjIuMnJlbTtcXG59XFxuXFxuLmZ0ci1idXR0b25zIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6NXB4O1xcbn1cXG5cXG4uZnRyLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDY0MjNiO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XFxuICAgIGNvbG9yOiNmMmYyZjI7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBwYWRkaW5nOjEwcHggMjBweDtcXG59XFxuXFxuLmZ0ci1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmYjAzYjtcXG59XFxuXFxuLmZ0ci1zb2NtZWQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDozcHg7XFxuICAgIH1cXG5cXG4uZnRyLXNvY21lZCAqIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIHdpZHRoOjIuNzV2dztcXG59XFxuXFxuLmZ0ci1jb3B5cmlnaHQge1xcbiAgICBjb2xvcjojZmZiMDNiO1xcbiAgICBmb250LXNpemU6MTRweDtcXG59XFxuXFxubGkge1xcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXG59XFxuXFxuI3RvcGJhciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBwYWRkaW5nOjMwcHggMCAwO1xcbn1cXG5cXG4udG9wYmFyLXRpdGxlIHtcXG4gICAgY29sb3I6IzQ0NDtcXG4gICAgZm9udC1mYW1pbHk6U3VuVmFsbGV5O1xcbiAgICBmb250LXNpemU6MnJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6NXZ3O1xcbn1cXG5cXG4jdG9wYmFyICNzZWFyY2hiYXIgaW5wdXRbdHlwZT1zZWFyY2hdIHtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2VkNGRhO1xcbiAgICBib3JkZXItcmFkaXVzOjNweDtcXG4gICAgaGVpZ2h0OjEuNzVyZW07XFxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xcbiAgICB3aWR0aDo0MDBweDtcXG59XFxuXFxuI3RvcGJhciAjc2VsZWN0YmFyIHNlbGVjdCB7XFxuICAgIGJvcmRlcjoxcHggc29saWQgI2NlZDRkYTtcXG4gICAgYm9yZGVyLXJhZGl1czozcHg7XFxuICAgIGhlaWdodDoxLjc1cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xcbiAgICB3aWR0aDo0MjVweDtcXG59XFxuXFxuLnN0b3JlLWNhcmRzIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBnYXA6MzBweDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6bWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maXQsbWlubWF4KDMwMHB4LDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6bWluLWNvbnRlbnQ7XFxuICAgIG1hcmdpbjphdXRvO1xcbiAgICBtaW4taGVpZ2h0Om1pbi1jb250ZW50O1xcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxuICAgIHBhZGRpbmc6MTVweCAwIDMwcHg7XFxuICAgIHdpZHRoOjk1JTtcXG59XFxuXFxuLnN0b3JlLWNhcmQge1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMjhhNzQ1O1xcbiAgICBib3JkZXItcmFkaXVzOjNweDtcXG4gICAgY29sb3I6IzQ0NDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTouOHJlbTtcXG4gICAgZ2FwOjIwcHg7XFxuICAgIHBhZGRpbmc6MzBweCAyMHB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICAgIGNvbG9yOiMyYzg4NDU7XFxuICAgIGZvbnQtc2l6ZToxcmVtO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuLmNhcmQtYWRkcmVzcyB7XFxuICAgIGxpbmUtaGVpZ2h0OjI7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4uc3RvcmUtY2FyZCBociB7XFxuICAgIG1pbi13aWR0aDoxMDAlO1xcbn1cXG5cXG4uY2FyZC1kZXRhaWxzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjppbmhlcml0O1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICMyOGE3NDU7XFxuICAgIGJvcmRlci1yYWRpdXM6M3B4O1xcbiAgICBjb2xvcjojMjhhNzQ1O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgcGFkZGluZzo4cHggMDtcXG4gICAgd2lkdGg6OTAlO1xcbn1cXG5cXG4uY2FyZC1kZXRhaWxzOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMjhhNzQ1O1xcbiAgICBjb2xvcjojZmZmO1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIGNvbG9yOiM0NDQ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBmb250LXNpemU6LjhyZW07XFxuICAgIGdhcDoxMHB4O1xcbiAgICBtYXJnaW46NTBweCAxMHZ3O1xcbn1cXG5cXG4ubWVudS1pdGVtcyB7XFxuICAgIGNvbG9yOiMyYzg4NDU7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ2FwOjMwcHg7XFxuICAgIGdyaWQtYXV0by1yb3dzOm1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZml0LG1pbm1heCgzMDBweCwxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOm1pbi1jb250ZW50O1xcbiAgICBtaW4taGVpZ2h0Om1pbi1jb250ZW50O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOjVweDtcXG4gICAgYm94LXNoYWRvdzpyZ2JhKDE0OSwxNTcsMTY1LDAuNSkgMCA4cHggMjRweDtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG59XFxuXFxuLml0ZW0tdGV4dCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBnYXA6MjBweDtcXG4gICAgcGFkZGluZzoyMHB4O1xcbn1cXG5cXG4uaXRlbS1kZXNjcmlwdGlvbiB7XFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OlN1blZhbGxleTtcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXG59XFxuXFxuLml0ZW0taW1nIGltZyB7XFxuICAgIGFzcGVjdC1yYXRpbzoxIC8gMTtcXG4gICAgbWF4LXdpZHRoOjEwMCU7XFxufVxcblxcbi5mdHItdGl0bGUgc3BhbiwubWVudS10aXRsZSBzcGFuIHtcXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcXG59XFxuXFxuLmZ0ci1jb3B5cmlnaHQgc3BhbiwuaXRlbS10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcXG59XFxuXFxuI3RvcGJhciAjc2VhcmNoYmFyLCN0b3BiYXIgI3NlbGVjdGJhciB7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjppbmhlcml0O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGhlaWdodDozcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbn1cXG5cXG4uY2FyZC1zY2hlZHVsZSwuY2FyZC1jb250YWN0cyB7XFxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDJDQUErQjtBQUNu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ZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OlN1blZhbGxleTtcXG4gICAgZm9udC1zdHlsZTpub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcXG4gICAgc3JjOnVybCguLi9mb250cy9TdW5WYWxsZXkudHRmKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcblxcbjpyb290IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xcbiAgICBjb2xvcjojZmZmO1xcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOjE2cHg7XFxuICAgIG1pbi13aWR0aDoxMDB2dztcXG59XFxuXFxuLnJlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC44KTtcXG4gICAgY29sb3I6IzJjODg0NTtcXG4gICAgZ2FwOjIwcHg7XFxuICAgIGhlaWdodDo4MHB4O1xcbiAgICBwYWRkaW5nOjVweCA1dnc7XFxuICAgIHBvc2l0aW9uOnN0aWNreTtcXG4gICAgdG9wOjA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZ2FwOjIwcHg7XFxuICAgIGhlaWdodDppbmhlcml0O1xcbiAgICBtYXJnaW46MCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6OTB2dztcXG4gICAgb3ZlcmZsb3cteDpjbGlwO1xcbiAgICB3aWR0aDptaW4oMTEwMHB4LDkwdncpO1xcbn1cXG5cXG5oZWFkZXIgaW1nLGhlYWRlciBhIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIGhlaWdodDppbmhlcml0O1xcbn1cXG5cXG5oZWFkZXIgdWwge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDozMHB4O1xcbiAgICBsaXN0LXN0eWxlOm5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XFxuICAgIG1hcmdpbi1yaWdodDozMHB4O1xcbn1cXG5cXG5oZWFkZXIgbGkge1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyIGxpOmhvdmVyIHtcXG4gICAgY29sb3I6I2RlOGMzOTtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmYjhhMTtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcXG4gICAgY29sb3I6I2ZmZmFmMztcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIGhlaWdodDoyLjVyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOjFweDtcXG4gICAgcGFkZGluZzoxMHB4IDI1cHg7XFxufVxcblxcbiNvcmRlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmYWM5MTtcXG4gICAgfVxcblxcbiNwYXltZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojOTVkMmU1O1xcbn1cXG5cXG4jcGF5bWVudDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzhlYzhkOTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZhZjM7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbn1cXG5cXG4jc2VhcmNoYmFyIHtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyYzg4NDU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgaGVpZ2h0OjNyZW07XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxufVxcblxcbiNzZWFyY2hiYXIgaW5wdXRbdHlwZT1zZWFyY2hdIHtcXG4gICAgYm9yZGVyLXJhZGl1czozcHg7XFxuICAgIGJvcmRlci1zdHlsZTpub25lO1xcbiAgICBoZWlnaHQ6MS43NXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XFxuICAgIHdpZHRoOm1pbig0MDBweCw5MCUpO1xcbn1cXG5cXG4jc2VhcmNoYmFyIGlucHV0W3R5cGU9c2VhcmNoXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6bm9uZTtcXG59XFxuXFxuI3NlYXJjaGJhciBidXR0b24ge1xcbiAgICBhc3BlY3QtcmF0aW86MSAvIDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzI4YTc0NTtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBoZWlnaHQ6MS43NXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6LTNweDtcXG4gICAgcGFkZGluZzozcHg7XFxufVxcblxcbiNzZWFyY2hiYXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMmM4ODQ1O1xcbn1cXG5cXG4jc2VhcmNoYmFyIGJ1dHRvbiBpbWcge1xcbiAgICBhc3BlY3QtcmF0aW86MSAvIDE7XFxuICAgIHdpZHRoOjEwMCU7XFxufVxcblxcbiNwaWN0dXJlcyB7XFxuICAgIGhlaWdodDptYXgtY29udGVudDtcXG4gICAgd2lkdGg6MTAwJTtcXG59XFxuXFxuI3BpY3R1cmVzIGltZyB7XFxuICAgIG9iamVjdC1maXQ6Y29udGFpbjtcXG4gICAgd2lkdGg6aW5oZXJpdDtcXG59XFxuXFxuI3Byb2R1Y3RzIHtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgbWFyZ2luOjAgMCA1MHB4O1xcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxufVxcblxcbi5wcm9kdWN0cy10aXRsZSB7XFxuICAgIGNvbG9yOiM0NDQ7XFxuICAgIGZvbnQtZmFtaWx5OlN1blZhbGxleSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOjJyZW07XFxuICAgIG1hcmdpbjoyMHB4IDA7XFxufVxcblxcbi5ncmVlbiB7XFxuICAgIGNvbG9yOiMyYzg4NDU7XFxufVxcblxcbi5wcm9kdWN0LWl0ZW1zIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBnYXA6MzBweDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6bWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maXQsbWlubWF4KDMwMHB4LDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6bWluLWNvbnRlbnQ7XFxuICAgIG1pbi1oZWlnaHQ6bWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOm1pbig4MCUsMTEwMHB4KTtcXG59XFxuXFxuLnByb2R1Y3QtaXRlbSB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG59XFxuXFxuLnByb2R1Y3QtdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZThjMzk7XFxuICAgIHBhZGRpbmc6MjBweDtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcblxcbi5wcm9kdWN0LWltZyBpbWcge1xcbiAgICBvYmplY3QtZml0OmNvdmVyO1xcbiAgICB3aWR0aDoxMDAlO1xcbn1cXG5cXG4jdmlkZW8ge1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgaGVpZ2h0OjQwMHB4O1xcbiAgICBtYXJnaW46MzBweCBhdXRvO1xcbiAgICB3aWR0aDptaW4oODAwcHgsODAlKTtcXG59XFxuXFxuI3ZpZGVvIGltZyB7XFxuICAgIG1heC1oZWlnaHQ6MTAwJTtcXG4gICAgbWF4LXdpZHRoOjEwMCU7XFxuICAgIG9iamVjdC1maXQ6Y292ZXI7XFxufVxcblxcbiNzdG9yeSB7XFxuICAgIGFsaWduLWl0ZW1zOnN0cmV0Y2g7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ2FwOjUwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maXQsbWlubWF4KDMwMHB4LDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6bWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XFxuICAgIHBhZGRpbmc6MCAwIDUwcHg7XFxufVxcblxcbi5zdG9yeS10aXRsZSB7XFxuICAgIGNvbG9yOiMyYzg4NDU7XFxuICAgIGZvbnQtZmFtaWx5OlN1blZhbGxleTtcXG4gICAgZm9udC1zaXplOjJyZW07XFxufVxcblxcbi5zdG9yeS1zdWJ0aXRsZSB7XFxuICAgIGNvbG9yOiMyYzg4NDU7XFxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcXG59XFxuXFxuLnN0b3J5LXRleHQge1xcbiAgICBjb2xvcjojNDQ0O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgZm9udC1zaXplOi44cmVtO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgd2lkdGg6bWluKDgwdncsNDgwcHgpO1xcbn1cXG5cXG4jc3RvcnkgcCB7XFxuICAgIGxpbmUtaGVpZ2h0OjEuMnJlbTtcXG59XFxuXFxuLnN0b3J5LWNvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOmp1c3RpZnk7XFxufVxcblxcbi5zdG9yeS1waG90byB7XFxuICAgIHdpZHRoOm1pbig4MHZ3LDQ4MHB4KTtcXG59XFxuXFxuLnN0b3J5LXBob3RvIGltZyB7XFxuICAgIG1heC13aWR0aDoxMDAlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2YyZjJmMjtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGhlaWdodDozMDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmZ0ci10aXRsZSB7XFxuICAgIGNvbG9yOiMyYzg4NDU7XFxuICAgIGZvbnQtZmFtaWx5OlN1blZhbGxleTtcXG4gICAgZm9udC1zaXplOjIuMnJlbTtcXG59XFxuXFxuLmZ0ci1idXR0b25zIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6NXB4O1xcbn1cXG5cXG4uZnRyLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDY0MjNiO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XFxuICAgIGNvbG9yOiNmMmYyZjI7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBwYWRkaW5nOjEwcHggMjBweDtcXG59XFxuXFxuLmZ0ci1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmYjAzYjtcXG59XFxuXFxuLmZ0ci1zb2NtZWQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDozcHg7XFxuICAgIH1cXG5cXG4uZnRyLXNvY21lZCAqIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIHdpZHRoOjIuNzV2dztcXG59XFxuXFxuLmZ0ci1jb3B5cmlnaHQge1xcbiAgICBjb2xvcjojZmZiMDNiO1xcbiAgICBmb250LXNpemU6MTRweDtcXG59XFxuXFxubGkge1xcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXG59XFxuXFxuI3RvcGJhciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBwYWRkaW5nOjMwcHggMCAwO1xcbn1cXG5cXG4udG9wYmFyLXRpdGxlIHtcXG4gICAgY29sb3I6IzQ0NDtcXG4gICAgZm9udC1mYW1pbHk6U3VuVmFsbGV5O1xcbiAgICBmb250LXNpemU6MnJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6NXZ3O1xcbn1cXG5cXG4jdG9wYmFyICNzZWFyY2hiYXIgaW5wdXRbdHlwZT1zZWFyY2hdIHtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2VkNGRhO1xcbiAgICBib3JkZXItcmFkaXVzOjNweDtcXG4gICAgaGVpZ2h0OjEuNzVyZW07XFxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xcbiAgICB3aWR0aDo0MDBweDtcXG59XFxuXFxuI3RvcGJhciAjc2VsZWN0YmFyIHNlbGVjdCB7XFxuICAgIGJvcmRlcjoxcHggc29saWQgI2NlZDRkYTtcXG4gICAgYm9yZGVyLXJhZGl1czozcHg7XFxuICAgIGhlaWdodDoxLjc1cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xcbiAgICB3aWR0aDo0MjVweDtcXG59XFxuXFxuLnN0b3JlLWNhcmRzIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBnYXA6MzBweDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6bWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maXQsbWlubWF4KDMwMHB4LDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6bWluLWNvbnRlbnQ7XFxuICAgIG1hcmdpbjphdXRvO1xcbiAgICBtaW4taGVpZ2h0Om1pbi1jb250ZW50O1xcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxuICAgIHBhZGRpbmc6MTVweCAwIDMwcHg7XFxuICAgIHdpZHRoOjk1JTtcXG59XFxuXFxuLnN0b3JlLWNhcmQge1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMjhhNzQ1O1xcbiAgICBib3JkZXItcmFkaXVzOjNweDtcXG4gICAgY29sb3I6IzQ0NDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTouOHJlbTtcXG4gICAgZ2FwOjIwcHg7XFxuICAgIHBhZGRpbmc6MzBweCAyMHB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICAgIGNvbG9yOiMyYzg4NDU7XFxuICAgIGZvbnQtc2l6ZToxcmVtO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuLmNhcmQtYWRkcmVzcyB7XFxuICAgIGxpbmUtaGVpZ2h0OjI7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4uc3RvcmUtY2FyZCBociB7XFxuICAgIG1pbi13aWR0aDoxMDAlO1xcbn1cXG5cXG4uY2FyZC1kZXRhaWxzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjppbmhlcml0O1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICMyOGE3NDU7XFxuICAgIGJvcmRlci1yYWRpdXM6M3B4O1xcbiAgICBjb2xvcjojMjhhNzQ1O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgcGFkZGluZzo4cHggMDtcXG4gICAgd2lkdGg6OTAlO1xcbn1cXG5cXG4uY2FyZC1kZXRhaWxzOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMjhhNzQ1O1xcbiAgICBjb2xvcjojZmZmO1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIGNvbG9yOiM0NDQ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBmb250LXNpemU6LjhyZW07XFxuICAgIGdhcDoxMHB4O1xcbiAgICBtYXJnaW46NTBweCAxMHZ3O1xcbn1cXG5cXG4ubWVudS1pdGVtcyB7XFxuICAgIGNvbG9yOiMyYzg4NDU7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ2FwOjMwcHg7XFxuICAgIGdyaWQtYXV0by1yb3dzOm1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZml0LG1pbm1heCgzMDBweCwxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOm1pbi1jb250ZW50O1xcbiAgICBtaW4taGVpZ2h0Om1pbi1jb250ZW50O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOjVweDtcXG4gICAgYm94LXNoYWRvdzpyZ2JhKDE0OSwxNTcsMTY1LDAuNSkgMCA4cHggMjRweDtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG59XFxuXFxuLml0ZW0tdGV4dCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBnYXA6MjBweDtcXG4gICAgcGFkZGluZzoyMHB4O1xcbn1cXG5cXG4uaXRlbS1kZXNjcmlwdGlvbiB7XFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OlN1blZhbGxleTtcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXG59XFxuXFxuLml0ZW0taW1nIGltZyB7XFxuICAgIGFzcGVjdC1yYXRpbzoxIC8gMTtcXG4gICAgbWF4LXdpZHRoOjEwMCU7XFxufVxcblxcbi5mdHItdGl0bGUgc3BhbiwubWVudS10aXRsZSBzcGFuIHtcXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcXG59XFxuXFxuLmZ0ci1jb3B5cmlnaHQgc3BhbiwuaXRlbS10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcXG59XFxuXFxuI3RvcGJhciAjc2VhcmNoYmFyLCN0b3BiYXIgI3NlbGVjdGJhciB7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjppbmhlcml0O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGhlaWdodDozcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbn1cXG5cXG4uY2FyZC1zY2hlZHVsZSwuY2FyZC1jb250YWN0cyB7XFxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaG9tZS5qc1xuaW1wb3J0IHNlYXJjaFBuZyBmcm9tICcuL2ltYWdlcy9zZWFyY2gucG5nJ1xuaW1wb3J0IG1hbmdvSnBnIGZyb20gJy4vaW1hZ2VzL01hbmdvQnJhdm8uanBnJ1xuaW1wb3J0IGNha2VKcGcgZnJvbSAnLi9pbWFnZXMvY2FrZS5qcGcnO1xuaW1wb3J0IHl0SnBnIGZyb20gJy4vaW1hZ2VzL3l0aW1nLmpwZyc7XG5pbXBvcnQgY29udGlzSnBnIGZyb20gJy4vaW1hZ2VzL2NvbnRpcy5qcGcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VhcmNoYmFyKCkge1xuICAgIGNvbnN0IHNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3Qgc2VhcmNoSWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgYnRuLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xuICAgIHNlYXJjaGJhci5hcHBlbmRDaGlsZChzZWFyY2gpO1xuICAgIHNlYXJjaGJhci5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgc2VhcmNoYmFyLmlkID0gJ3NlYXJjaGJhcic7XG4gICAgc2VhcmNoLmlkID0gJ3NlYXJjaCc7XG4gICAgc2VhcmNoLnR5cGUgPSAnc2VhcmNoJztcbiAgICBzZWFyY2gubmFtZSA9ICdzZWFyY2gnO1xuICAgIHNlYXJjaC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIGZvciB5b3VyIENPTlRJJ3MgZmF2b3JpdGVzLi4uXCI7XG4gICAgc2VhcmNoSWNvbi5zcmMgPSBzZWFyY2hQbmc7XG4gICAgXG4gICAgcmV0dXJuIHNlYXJjaGJhcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGljdHVyZXMoKSB7XG4gICAgY29uc3QgcGljdHVyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgXG4gICAgY29uc3QgbWFuZ29QaG90byA9IG5ldyBJbWFnZSgpO1xuXG4gICAgcGljdHVyZXMuYXBwZW5kQ2hpbGQobWFuZ29QaG90byk7XG5cbiAgICBwaWN0dXJlcy5pZCA9ICdwaWN0dXJlcyc7XG4gICAgbWFuZ29QaG90by5zcmMgPSBtYW5nb0pwZztcbiAgICBcbiAgICByZXR1cm4gcGljdHVyZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RzKCkge1xuICAgIGNvbnN0IHByb2R1Y3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkaXZJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIHByb2R1Y3RzLmFwcGVuZChwKTtcbiAgICBwcm9kdWN0cy5hcHBlbmQoZGl2SXRlbXMpO1xuICAgIFxuICAgIHByb2R1Y3RzLmlkID0gJ3Byb2R1Y3RzJztcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3RzLXRpdGxlJyk7XG4gICAgZGl2SXRlbXMuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1pdGVtcycpO1xuICAgIHAuaW5uZXJIVE1MID0gJzxzcGFuPk91ciA8c3BhbiBjbGFzcz1cImdyZWVuXCI+UHJvZHVjdHM8L3NwYW4+PC9zcGFuPic7XG4gICAgXG4gICAgY29uc3QgbnVtT2ZQcm9kdWN0cyA9IDY7XG4gICAgZm9yIChsZXQgaT0wOyBpPG51bU9mUHJvZHVjdHM7IGkrKykge1xuICAgICAgICBjb25zdCBkaXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjYWtlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgZGl2SXRlbS5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG4gICAgICAgIGRpdkltZy5hcHBlbmRDaGlsZChjYWtlKTtcbiAgICAgICAgZGl2SXRlbS5hcHBlbmRDaGlsZChkaXZJbWcpO1xuICAgICAgICBkaXZJdGVtcy5hcHBlbmRDaGlsZChkaXZJdGVtKTtcblxuICAgICAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtaXRlbScpO1xuICAgICAgICBkaXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LXRpdGxlJyk7XG4gICAgICAgIGRpdkltZy5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWltZycpO1xuICAgICAgICBkaXZUaXRsZS5pbm5lclRleHQgPSBcIkZBQlVMT1VTIENBS0VTXCI7XG4gICAgICAgIGNha2Uuc3JjID0gY2FrZUpwZztcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvZHVjdHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZGVvKCkge1xuICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgY29uc3QgdGh1bWJuYWlsID0gbmV3IEltYWdlKCk7XG5cbiAgICB2aWRlby5hcHBlbmRDaGlsZCh0aHVtYm5haWwpO1xuXG4gICAgdmlkZW8uaWQgPSAndmlkZW8nO1xuICAgIHRodW1ibmFpbC5zcmMgPSB5dEpwZztcblxuICAgIHJldHVybiB2aWRlbztcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RvcnkoKSB7XG4gICAgY29uc3Qgc3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICBjb25zdCBkaXZQaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbnRpcyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGRpdlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpdlN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZGl2UGhvdG8uYXBwZW5kQ2hpbGQoY29udGlzKTtcbiAgICBzdG9yeS5hcHBlbmRDaGlsZChkaXZQaG90byk7XG4gICAgZGl2VGV4dC5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG4gICAgZGl2VGV4dC5hcHBlbmRDaGlsZChkaXZTdWJ0aXRsZSk7XG4gICAgZGl2VGV4dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgICBkaXZUZXh0LmFwcGVuZENoaWxkKGRpdkNvbnRlbnQpO1xuICAgIHN0b3J5LmFwcGVuZENoaWxkKGRpdlRleHQpO1xuXG4gICAgc3RvcnkuaWQgPSAnc3RvcnknO1xuICAgIGRpdlBob3RvLmNsYXNzTGlzdC5hZGQoJ3N0b3J5LXBob3RvJyk7XG4gICAgZGl2VGV4dC5jbGFzc0xpc3QuYWRkKCdzdG9yeS10ZXh0Jyk7XG4gICAgZGl2VGl0bGUuY2xhc3NMaXN0LmFkZCgnc3RvcnktdGl0bGUnKTtcbiAgICBkaXZTdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdzdG9yeS1zdWJ0aXRsZScpO1xuICAgIGRpdkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc3RvcnktY29udGVudCcpO1xuICAgIGNvbnRpcy5zcmMgPSBjb250aXNKcGc7XG4gICAgZGl2VGl0bGUuaW5uZXJUZXh0ID0gJ091ciBTdG9yeSc7XG4gICAgZGl2U3VidGl0bGUuaW5uZXJUZXh0ID0gJ0ZPUkVWRVIgU0hBUklORyBKT1kgRlJPTSBPVVIgSE9NRSBUTyBZT1VSUyc7XG4gICAgZGl2Q29udGVudC5pbm5lckhUTUwgPSBgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBwYXNzaW9uIHRvIGNyZWF0ZSBhbmQgc2VydmUgZGVsZWN0YWJsZSBmb29kIHJlbWluaXNjZW50IG9mIHRoZSBjb252ZW5pZW5jZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgY29tZm9ydGluZyB3YXJtdGggb2Ygb25lJ3Mgb3duIGhvbWUsIHRoaXMgaXMgd2hhdCB3ZSBhdCBDb250aSdzIGFyZSBhbGwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW5jZSBvcGVuaW5nIGl0cyBkb29ycyB0byBmYW1pbGllcyBhbmQgZnJpZW5kcyBpbiBQYXJhw7FhcXVlIGluIDE5OTcsIENvbnRpJ3MgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFrZXNob3AgYW5kIFJlc3RhdXJhbnQgaGFzIGNyZWF0ZWQgYW5kIHNoYXJlZCBtZW1vcmllcyBvZiB0b2dldGhlcm5lc3MgdG8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVvcGxlIHdobyBoYXZlIGNvbWUgdG8gbG92ZSBvdXIgd2lkZSBzZWxlY3Rpb24gb2YgcHJvZHVjdHMsIGluY2x1ZGluZyBvdXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlIGRpc2hlcyBzdWNoIGFzIHRoZSBCYWtlZCBTYWxtb24sIENoaWNrZW4gUGllLCBhbmQgdGhlIHdlbGwtbG92ZWQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFuZ28gQnJhdm8uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaXRoIHRoZSBqb3kgYW5kIHNhdGlzZmFjdGlvbiBvZiBldmVyeSBndWVzdCB3aG8gd2Fsa3MgaW50byBvdXIgc3RvcmVzIGluIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmQsIHRoaXMgZm9vZCBoYXZlbiB3aGljaCBiZWdhbiBhcyBhIHNpbXBsZSBmYW1pbHkgcmVzdGF1cmFudCBub3cgYnJpbmdzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBmYW1pbGlhciBmZWVsaW5ncyBvZiBob21lIGFuZCBjYXJlZnVsbHkgcHJlcGFyZWQgcHJvZHVjdHMgdG8gdGhvdXNhbmRzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIGhvbWVzIGFjcm9zcyB0aGUgY291bnRyeSB0aHJvdWdoIGNvbnRpbnVvdXMgcHJvZHVjdCBpbm5vdmF0aW9uIGFuZCBzZXJ2aWNlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuc2lvbi4gQ29udGkncyBCYWtlc2hvcCAmIFJlc3RhdXJhbnQgdG9kYXkgZXh0ZW5kcyBpdHMgY29tbWl0bWVudCB0byBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbGl0eSBhbmQgY3VsaW5hcnkgZXhjZWxsZW5jZSBpbiAxMCBjb21tdW5pdGllcywgc2VydmluZyBtb3JlIHRoYW4gMTUwIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdWdodC1hZnRlciBkaXNoZXMgYnkgZ3Vlc3RzIHdobywgb3ZlciB0aGUgeWVhcnMsIGhhdmUgaGVscGVkIHdyaXRlIG91ciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yeSBvZiBpbnNwaXJhdGlvbiBhbmQgc3VjY2Vzcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+PGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGFyZSBjb21taXR0ZWQgdG8gbWFrZSBldmVyeSBndWVzdCBleHBlcmllbmNlIG1lbW9yYWJsZSBhbmQgdG8gY29udGludWUgc2hhcmluZyBvdXIgc3RvcnkgaW4gZXZlcnkgcHJvZHVjdCB3ZSBjcmVhdGUgYW5kIHNlcnZlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5gO1xuXG4gICAgcmV0dXJuIHN0b3J5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVTZWFyY2hiYXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVQaWN0dXJlcygpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVByb2R1Y3RzKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVmlkZW8oKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVTdG9yeSgpKTtcblxuICAgIHJldHVybjtcbn0iLCIvLyBpbml0aWFsaXplLmpzXG5pbXBvcnQgTG9nbyBmcm9tICcuL2ltYWdlcy9sb2dvLnBuZyc7XG5pbXBvcnQgRkIgZnJvbSAnLi9pbWFnZXMvZmItbG9nby5wbmcnO1xuaW1wb3J0IElHIGZyb20gJy4vaW1hZ2VzL2lnLWxvZ28ucG5nJztcbmltcG9ydCBGYXZpY29uIGZyb20gJy4vaW1hZ2VzL2Zhdmljb24uanBnJztcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGxvYWRTdG9yZXMgZnJvbSAnLi9zdG9yZXMnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICAgIGNvbnN0IGRpdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHBheW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGEuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkxKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTIpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdkhlYWRlcik7XG4gICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGEpO1xuICAgIGRpdkhlYWRlci5hcHBlbmRDaGlsZCh1bCk7XG4gICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKG9yZGVyKTtcbiAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQocGF5bWVudCk7XG5cbiAgICBvcmRlci5pZCA9ICdvcmRlcic7XG4gICAgcGF5bWVudC5pZCA9ICdwYXltZW50JztcbiAgICBkaXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgbG9nby5zcmMgPSBMb2dvO1xuICAgIGEuaHJlZiA9IFwiLlwiO1xuICAgIG9yZGVyLmlubmVyVGV4dCA9ICdPUkRFUiBOT1cnO1xuICAgIHBheW1lbnQuaW5uZXJUZXh0ID0gJ0RJUkVDVCBPTkxJTkUgUEFZTUVOVCc7XG4gICAgbGkxLmlubmVyVGV4dCA9ICdIT01FJztcbiAgICBsaTEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZEhvbWUoKTtcbiAgICB9KTtcbiAgICBsaTIuaW5uZXJUZXh0ID0gJ09VUiBTVE9SRVMnO1xuICAgIGxpMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2FkU3RvcmVzKCk7XG4gICAgfSk7XG4gICAgbGkzLmlubmVyVGV4dCA9ICdNRU5VJztcbiAgICBsaTMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZE1lbnUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICAgIGNvbnN0IGRpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBidG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYnRuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRpdlNvY21lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpdkZiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2SWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmYkxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBpZ0xvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBkaXZDb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRpdkJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnRuMSk7XG4gICAgZGl2QnV0dG9ucy5hcHBlbmRDaGlsZChidG4yKTtcbiAgICBkaXZCdXR0b25zLmFwcGVuZENoaWxkKGJ0bjMpO1xuICAgIGRpdkZiLmFwcGVuZENoaWxkKGZiTG9nbyk7XG4gICAgZGl2SWcuYXBwZW5kQ2hpbGQoaWdMb2dvKTtcbiAgICBkaXZTb2NtZWQuYXBwZW5kQ2hpbGQoZGl2RmIpO1xuICAgIGRpdlNvY21lZC5hcHBlbmRDaGlsZChkaXZJZyk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGRpdlRpdGxlKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2QnV0dG9ucyk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGRpdlNvY21lZCk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGRpdkNvcHlyaWdodCk7XG5cbiAgICBkaXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdmdHItdGl0bGUnKTtcbiAgICBkaXZCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2Z0ci1idXR0b25zJyk7XG4gICAgZGl2U29jbWVkLmNsYXNzTGlzdC5hZGQoJ2Z0ci1zb2NtZWQnKTtcbiAgICBkaXZDb3B5cmlnaHQuY2xhc3NMaXN0LmFkZCgnZnRyLWNvcHlyaWdodCcpO1xuICAgIGRpdlRpdGxlLmlubmVySFRNTCA9IFwiQ29udGk8c3Bhbj4nPC9zcGFuPnMgQmFrZXNob3AgYW5kIFJlc3RhdXJhbnRcIjtcbiAgICBkaXZDb3B5cmlnaHQuaW5uZXJIVE1MID0gXCLCqSBDb3B5cmlnaHQgPHNwYW4+Q29udGkncyBCYWtlc2hvcCBhbmQgUmVzdGF1cmFudC48L3NwYW4+IEFsbCBSaWdodHMgUmVzZXJ2ZWRcIjtcbiAgICBidG4xLmlubmVyVGV4dCA9ICdPdXIgU2VydmljZXMnO1xuICAgIGJ0bjIuaW5uZXJUZXh0ID0gJ091ciBDYXJlZXJzJztcbiAgICBidG4zLmlubmVyVGV4dCA9ICdDb250YWN0IHVzJztcbiAgICBmYkxvZ28uc3JjID0gRkI7XG4gICAgaWdMb2dvLnNyYyA9IElHO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gaW5pdEZhdmljb24oKSB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuXG4gICAgbGluay5yZWwgPSAnaWNvbic7XG4gICAgbGluay50eXBlID0gJ2ltYWdlL3gtaWNvbic7XG4gICAgbGluay5ocmVmID0gRmF2aWNvbjtcblxuICAgIHJldHVybjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gICAgY29udGVudC5pZCA9ICdjb250ZW50JztcblxuICAgIGluaXRGYXZpY29uKCk7XG4gICAgbG9hZEhvbWUoKTtcblxuICAgIHJldHVybjtcbn0iLCIvLyBtZW51LmpzXG5pbXBvcnQgY2FrZUpwZyBmcm9tICcuL2ltYWdlcy9jYWtlLmpwZyc7XG5pbXBvcnQgeyBjcmVhdGVTZWFyY2hiYXIgfSBmcm9tICcuL2hvbWUnO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW1zKTtcblxuICAgIG1lbnUuaWQgPSAnbWVudSc7XG4gICAgbWVudVRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGl0bGUnKTtcbiAgICBtZW51SXRlbXMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuICAgIG1lbnVUaXRsZS5pbm5lckhUTUwgPSBcIldoYXQ8c3Bhbj4nPC9zcGFuPnMgTmV3PHNwYW4+Pzwvc3Bhbj5cIjtcbiAgICBcbiAgICBjb25zdCBudW1PZk1lbnVJdGVtcyA9IDEyO1xuICAgIFxuICAgIGZvciAobGV0IGk9MDsgaTxudW1PZk1lbnVJdGVtczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgY2FrZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIGl0ZW1JbWcuYXBwZW5kQ2hpbGQoY2FrZSk7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1JbWcpO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtVGV4dCk7XG4gICAgICAgIGl0ZW1UZXh0LmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gICAgICAgIGl0ZW1UZXh0LmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgICAgIGl0ZW1UZXh0LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG4gICAgICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG5cbiAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgICAgIGl0ZW1UZXh0LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGV4dCcpO1xuICAgICAgICBpdGVtSW1nLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW1nJyk7XG4gICAgICAgIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXRpdGxlJyk7XG4gICAgICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXByaWNlJyk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNha2Uuc3JjID0gY2FrZUpwZztcbiAgICAgICAgaXRlbVRpdGxlLmlubmVyVGV4dCA9ICdCaXNjb2ZmIFNpbHZhbmFzJztcbiAgICAgICAgaXRlbVByaWNlLmlubmVyVGV4dCA9ICdQSFAgMzY1JztcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICdCaXNjb2ZmIGZsYXZvciBhbmQgcmljaCBidXR0ZXJjcmVhbSBpbiBiZXR3ZWVuIGxheWVycyBvZiBjYXNoZXctbWVyaW5ndWUgd2FmZXJzJztcbiAgICB9XG4gICAgcmV0dXJuIG1lbnU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVNlYXJjaGJhcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG4gICAgcmV0dXJuO1xufSIsIi8vIHN0b3Jlcy5qc1xuaW1wb3J0IHNlYXJjaFBuZyBmcm9tICcuL2ltYWdlcy9zZWFyY2gucG5nJ1xuXG5mdW5jdGlvbiBjcmVhdGVUb3BiYXIoKSB7XG4gICAgY29uc3QgdG9wYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBzZWFyY2hiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHNlYXJjaEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBzZWxlY3RiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgdG9wYmFyLmFwcGVuZENoaWxkKHApO1xuICAgIHRvcGJhci5hcHBlbmRDaGlsZChzZWFyY2hiYXIpO1xuICAgIHRvcGJhci5hcHBlbmRDaGlsZChzZWxlY3RiYXIpO1xuICAgIGJ0bi5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcbiAgICBzZWFyY2hiYXIuYXBwZW5kQ2hpbGQoc2VhcmNoKTtcbiAgICBzZWFyY2hiYXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuICAgIHNlbGVjdGJhci5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIFxuICAgIHRvcGJhci5pZCA9ICd0b3BiYXInO1xuICAgIHNlYXJjaGJhci5pZCA9ICdzZWFyY2hiYXInXG4gICAgc2VsZWN0YmFyLmlkID0gJ3NlbGVjdGJhcic7XG4gICAgc2VhcmNoLmlkID0gJ3NlYXJjaCc7XG4gICAgcC5jbGFzc0xpc3QuYWRkKCd0b3BiYXItdGl0bGUnKTtcbiAgICBwLmlubmVyVGV4dCA9ICdTdG9yZSBTZWFyY2gnO1xuICAgIHNlYXJjaC50eXBlID0gJ3NlYXJjaCc7XG4gICAgc2VhcmNoLm5hbWUgPSAnc2VhcmNoJztcbiAgICBzZWFyY2gucGxhY2Vob2xkZXIgPSBcIkNpdHlcIjtcbiAgICBzZWFyY2hJY29uLnNyYyA9IHNlYXJjaFBuZztcbiAgICBwbGFjZWhvbGRlci5pbm5lclRleHQgPSAnU2VsZWN0IFN0YXRlJztcbiAgICBwbGFjZWhvbGRlci5kaXNhYmxlZCA9IHRydWU7XG4gICAgcGxhY2Vob2xkZXIuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIFxuICAgIGNvbnN0IG51bU9mQ2l0aWVzID0gNTtcbiAgICBmb3IgKGxldCBpPTA7IGk8bnVtT2ZDaXRpZXM7IGkrKykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gYENpdHkgJHtpfWA7XG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBgQ2l0eSAke2l9YDtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0b3BiYXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlcygpIHtcbiAgICBjb25zdCBzdG9yZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgXG4gICAgY29uc3Qgc3RvcmVDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgc3RvcmVzLmFwcGVuZENoaWxkKHN0b3JlQ2FyZHMpXG5cbiAgICBzdG9yZXMuaWQgPSAnc3RvcmVzJztcbiAgICBzdG9yZUNhcmRzLmNsYXNzTGlzdC5hZGQoJ3N0b3JlLWNhcmRzJyk7XG5cbiAgICBjb25zdCBudW1PZlN0b3JlcyA9IDE1O1xuICAgIGZvciAobGV0IGk9MDsgaTxudW1PZlN0b3JlczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGNhcmRBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBjYXJkU2NoZWR1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGNhcmRDb250YWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjYXJkTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgICAgIGNvbnN0IGNhcmREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IG51bTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGNvbnN0IG51bTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgICAgc3RvcmVDYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgICAgIHN0b3JlQ2FyZC5hcHBlbmRDaGlsZChjYXJkQWRkcmVzcyk7XG4gICAgICAgIHN0b3JlQ2FyZC5hcHBlbmRDaGlsZChjYXJkU2NoZWR1bGUpO1xuICAgICAgICBzdG9yZUNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRhY3RzKTtcbiAgICAgICAgc3RvcmVDYXJkLmFwcGVuZENoaWxkKGNhcmRMaW5lKTtcbiAgICAgICAgc3RvcmVDYXJkLmFwcGVuZENoaWxkKGNhcmREZXRhaWxzKTtcbiAgICAgICAgY2FyZENvbnRhY3RzLmFwcGVuZENoaWxkKG51bTEpO1xuICAgICAgICBjYXJkQ29udGFjdHMuYXBwZW5kQ2hpbGQobnVtMik7XG4gICAgICAgIHN0b3JlQ2FyZHMuYXBwZW5kQ2hpbGQoc3RvcmVDYXJkKTtcblxuICAgICAgICBzdG9yZUNhcmQuY2xhc3NMaXN0LmFkZCgnc3RvcmUtY2FyZCcpO1xuICAgICAgICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZScpO1xuICAgICAgICBjYXJkQWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdjYXJkLWFkZHJlc3MnKTtcbiAgICAgICAgY2FyZFNjaGVkdWxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtc2NoZWR1bGUnKTtcbiAgICAgICAgY2FyZENvbnRhY3RzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGFjdHMnKTtcbiAgICAgICAgY2FyZERldGFpbHMuY2xhc3NMaXN0LmFkZCgnY2FyZC1kZXRhaWxzJyk7XG4gICAgICAgIGNhcmRUaXRsZS5pbm5lclRleHQgPSAnQWxhYmFuZyBUb3duIENlbnRlciwgTXVudGlubHVwYSBDaXR5JztcbiAgICAgICAgY2FyZEFkZHJlc3MuaW5uZXJUZXh0ID0gJzExMDcgRy9GIENvcnRlIGRlIGxhcyBQYWxtYXMsIEFsYWJhbmcgVG93biBDZW50ZXIsIEF5YWxhIEFsYWJhbmcsIENpdHkgb2YgTXVudGlubHVwYSc7XG4gICAgICAgIGNhcmRTY2hlZHVsZS5pbm5lclRleHQgPSAnMTE6MDAgQU0gLSAwODowMCBQTSc7XG4gICAgICAgIG51bTEuaW5uZXJUZXh0ID0gJygwOTE3KTU1NC0yOTk2JztcbiAgICAgICAgbnVtMi5pbm5lclRleHQgPSAnKDAyKTg1NTYtNzcyMCc7XG4gICAgICAgIGNhcmREZXRhaWxzLmlubmVyVGV4dCA9ICdTZWUgRGV0YWlscyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0b3JlcztcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkU3RvcmVzKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRvcGJhcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVN0b3JlcygpKTtcbiAgICBcbiAgICByZXR1cm47XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW5kZXguanNcbmltcG9ydCBpbml0aWFsaXplIGZyb20gJy4vaW5pdGlhbGl6ZSc7XG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcydcblxuaW5pdGlhbGl6ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==