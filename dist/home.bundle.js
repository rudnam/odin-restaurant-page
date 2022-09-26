/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUMyQztBQUNHO0FBQ047QUFDRDtBQUNLOztBQUVyQztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsK0NBQVM7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBUTtBQUM3Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsOENBQUs7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLCtDQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gaG9tZS5qc1xuaW1wb3J0IHNlYXJjaFBuZyBmcm9tICcuL2ltYWdlcy9zZWFyY2gucG5nJ1xuaW1wb3J0IG1hbmdvSnBnIGZyb20gJy4vaW1hZ2VzL01hbmdvQnJhdm8uanBnJ1xuaW1wb3J0IGNha2VKcGcgZnJvbSAnLi9pbWFnZXMvY2FrZS5qcGcnO1xuaW1wb3J0IHl0SnBnIGZyb20gJy4vaW1hZ2VzL3l0aW1nLmpwZyc7XG5pbXBvcnQgY29udGlzSnBnIGZyb20gJy4vaW1hZ2VzL2NvbnRpcy5qcGcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VhcmNoYmFyKCkge1xuICAgIGNvbnN0IHNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuICAgIHNlYXJjaGJhci5pZCA9ICdzZWFyY2hiYXInO1xuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc2VhcmNoLnR5cGUgPSAnc2VhcmNoJztcbiAgICBzZWFyY2gubmFtZSA9ICdzZWFyY2gnO1xuICAgIHNlYXJjaC5pZCA9ICdzZWFyY2gnO1xuICAgIHNlYXJjaC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIGZvciB5b3VyIENPTlRJJ3MgZmF2b3JpdGVzLi4uXCI7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3Qgc2VhcmNoSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHNlYXJjaEljb24uc3JjID0gc2VhcmNoUG5nO1xuICAgIGJ0bi5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcbiAgICBzZWFyY2hiYXIuYXBwZW5kQ2hpbGQoc2VhcmNoKTtcbiAgICBzZWFyY2hiYXIuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIHJldHVybiBzZWFyY2hiYXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBpY3R1cmVzKCkge1xuICAgIGNvbnN0IHBpY3R1cmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIFxuICAgIHBpY3R1cmVzLmlkID0gJ3BpY3R1cmVzJztcbiAgICBjb25zdCBtYW5nb1Bob3RvID0gbmV3IEltYWdlKCk7XG4gICAgbWFuZ29QaG90by5zcmMgPSBtYW5nb0pwZztcbiAgICBwaWN0dXJlcy5hcHBlbmRDaGlsZChtYW5nb1Bob3RvKTtcblxuICAgIHJldHVybiBwaWN0dXJlcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZHVjdHMoKSB7XG4gICAgY29uc3QgcHJvZHVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICBwcm9kdWN0cy5pZCA9ICdwcm9kdWN0cyc7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3RzLXRpdGxlJyk7XG4gICAgcC5pbm5lckhUTUwgPSAnPHNwYW4+T3VyIDxzcGFuIGNsYXNzPVwiZ3JlZW5cIj5Qcm9kdWN0czwvc3Bhbj48L3NwYW4+JztcbiAgICBwcm9kdWN0cy5hcHBlbmQocCk7XG4gICAgY29uc3QgZGl2SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZJdGVtcy5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWl0ZW1zJyk7XG4gICAgY29uc3QgbnVtT2ZQcm9kdWN0cyA9IDY7XG4gICAgZm9yIChsZXQgaT0wOyBpPG51bU9mUHJvZHVjdHM7IGkrKykge1xuICAgICAgICBjb25zdCBkaXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1pdGVtJyk7XG4gICAgICAgIGNvbnN0IGRpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtdGl0bGUnKTtcbiAgICAgICAgZGl2VGl0bGUuaW5uZXJUZXh0ID0gXCJGQUJVTE9VUyBDQUtFU1wiO1xuICAgICAgICBkaXZJdGVtLmFwcGVuZENoaWxkKGRpdlRpdGxlKTtcbiAgICAgICAgY29uc3QgZGl2SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdkltZy5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWltZycpO1xuICAgICAgICBjb25zdCBjYWtlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGNha2Uuc3JjID0gY2FrZUpwZztcbiAgICAgICAgZGl2SW1nLmFwcGVuZENoaWxkKGNha2UpO1xuICAgICAgICBkaXZJdGVtLmFwcGVuZENoaWxkKGRpdkltZyk7XG4gICAgICAgIGRpdkl0ZW1zLmFwcGVuZENoaWxkKGRpdkl0ZW0pO1xuICAgIH1cbiAgICBwcm9kdWN0cy5hcHBlbmQoZGl2SXRlbXMpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3RzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWaWRlbygpIHtcbiAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuICAgIHZpZGVvLmlkID0gJ3ZpZGVvJztcbiAgICBjb25zdCB0aHVtYm5haWwgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aHVtYm5haWwuc3JjID0geXRKcGc7XG4gICAgdmlkZW8uYXBwZW5kQ2hpbGQodGh1bWJuYWlsKTtcblxuICAgIHJldHVybiB2aWRlbztcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RvcnkoKSB7XG4gICAgY29uc3Qgc3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICBzdG9yeS5pZCA9ICdzdG9yeSc7XG4gICAgY29uc3QgZGl2UGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZQaG90by5jbGFzc0xpc3QuYWRkKCdzdG9yeS1waG90bycpO1xuICAgIGNvbnN0IGNvbnRpcyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnRpcy5zcmMgPSBjb250aXNKcGc7XG4gICAgZGl2UGhvdG8uYXBwZW5kQ2hpbGQoY29udGlzKTtcbiAgICBzdG9yeS5hcHBlbmRDaGlsZChkaXZQaG90byk7XG4gICAgY29uc3QgZGl2VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdlRleHQuY2xhc3NMaXN0LmFkZCgnc3RvcnktdGV4dCcpO1xuICAgIGNvbnN0IGRpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2VGl0bGUuY2xhc3NMaXN0LmFkZCgnc3RvcnktdGl0bGUnKTtcbiAgICBkaXZUaXRsZS5pbm5lclRleHQgPSAnT3VyIFN0b3J5JztcbiAgICBkaXZUZXh0LmFwcGVuZENoaWxkKGRpdlRpdGxlKTtcbiAgICBjb25zdCBkaXZTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdlN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoJ3N0b3J5LXN1YnRpdGxlJyk7XG4gICAgZGl2U3VidGl0bGUuaW5uZXJUZXh0ID0gJ0ZPUkVWRVIgU0hBUklORyBKT1kgRlJPTSBPVVIgSE9NRSBUTyBZT1VSUyc7XG4gICAgZGl2VGV4dC5hcHBlbmRDaGlsZChkaXZTdWJ0aXRsZSk7XG4gICAgZGl2VGV4dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Q29udGVudC5jbGFzc0xpc3QuYWRkKCdzdG9yeS1jb250ZW50Jyk7XG4gICAgZGl2Q29udGVudC5pbm5lckhUTUwgPSBgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBwYXNzaW9uIHRvIGNyZWF0ZSBhbmQgc2VydmUgZGVsZWN0YWJsZSBmb29kIHJlbWluaXNjZW50IG9mIHRoZSBjb252ZW5pZW5jZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgY29tZm9ydGluZyB3YXJtdGggb2Ygb25lJ3Mgb3duIGhvbWUsIHRoaXMgaXMgd2hhdCB3ZSBhdCBDb250aSdzIGFyZSBhbGwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW5jZSBvcGVuaW5nIGl0cyBkb29ycyB0byBmYW1pbGllcyBhbmQgZnJpZW5kcyBpbiBQYXJhw7FhcXVlIGluIDE5OTcsIENvbnRpJ3MgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFrZXNob3AgYW5kIFJlc3RhdXJhbnQgaGFzIGNyZWF0ZWQgYW5kIHNoYXJlZCBtZW1vcmllcyBvZiB0b2dldGhlcm5lc3MgdG8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVvcGxlIHdobyBoYXZlIGNvbWUgdG8gbG92ZSBvdXIgd2lkZSBzZWxlY3Rpb24gb2YgcHJvZHVjdHMsIGluY2x1ZGluZyBvdXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlIGRpc2hlcyBzdWNoIGFzIHRoZSBCYWtlZCBTYWxtb24sIENoaWNrZW4gUGllLCBhbmQgdGhlIHdlbGwtbG92ZWQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFuZ28gQnJhdm8uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaXRoIHRoZSBqb3kgYW5kIHNhdGlzZmFjdGlvbiBvZiBldmVyeSBndWVzdCB3aG8gd2Fsa3MgaW50byBvdXIgc3RvcmVzIGluIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmQsIHRoaXMgZm9vZCBoYXZlbiB3aGljaCBiZWdhbiBhcyBhIHNpbXBsZSBmYW1pbHkgcmVzdGF1cmFudCBub3cgYnJpbmdzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBmYW1pbGlhciBmZWVsaW5ncyBvZiBob21lIGFuZCBjYXJlZnVsbHkgcHJlcGFyZWQgcHJvZHVjdHMgdG8gdGhvdXNhbmRzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIGhvbWVzIGFjcm9zcyB0aGUgY291bnRyeSB0aHJvdWdoIGNvbnRpbnVvdXMgcHJvZHVjdCBpbm5vdmF0aW9uIGFuZCBzZXJ2aWNlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuc2lvbi4gQ29udGkncyBCYWtlc2hvcCAmIFJlc3RhdXJhbnQgdG9kYXkgZXh0ZW5kcyBpdHMgY29tbWl0bWVudCB0byBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbGl0eSBhbmQgY3VsaW5hcnkgZXhjZWxsZW5jZSBpbiAxMCBjb21tdW5pdGllcywgc2VydmluZyBtb3JlIHRoYW4gMTUwIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdWdodC1hZnRlciBkaXNoZXMgYnkgZ3Vlc3RzIHdobywgb3ZlciB0aGUgeWVhcnMsIGhhdmUgaGVscGVkIHdyaXRlIG91ciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yeSBvZiBpbnNwaXJhdGlvbiBhbmQgc3VjY2Vzcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+PGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGFyZSBjb21taXR0ZWQgdG8gbWFrZSBldmVyeSBndWVzdCBleHBlcmllbmNlIG1lbW9yYWJsZSBhbmQgdG8gY29udGludWUgc2hhcmluZyBvdXIgc3RvcnkgaW4gZXZlcnkgcHJvZHVjdCB3ZSBjcmVhdGUgYW5kIHNlcnZlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5gO1xuICAgIGRpdlRleHQuYXBwZW5kQ2hpbGQoZGl2Q29udGVudCk7XG4gICAgc3RvcnkuYXBwZW5kQ2hpbGQoZGl2VGV4dCk7XG5cbiAgICByZXR1cm4gc3Rvcnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zb2xlLmxvZygnaG9tZScpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlU2VhcmNoYmFyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlUGljdHVyZXMoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVQcm9kdWN0cygpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVZpZGVvKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlU3RvcnkoKSk7XG5cbiAgICByZXR1cm47XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9