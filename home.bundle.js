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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQzJDO0FBQ0c7QUFDTjtBQUNEO0FBQ0s7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwrQ0FBUztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFRO0FBQzdCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBSztBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsK0NBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBob21lLmpzXG5pbXBvcnQgc2VhcmNoUG5nIGZyb20gJy4vaW1hZ2VzL3NlYXJjaC5wbmcnXG5pbXBvcnQgbWFuZ29KcGcgZnJvbSAnLi9pbWFnZXMvTWFuZ29CcmF2by5qcGcnXG5pbXBvcnQgY2FrZUpwZyBmcm9tICcuL2ltYWdlcy9jYWtlLmpwZyc7XG5pbXBvcnQgeXRKcGcgZnJvbSAnLi9pbWFnZXMveXRpbWcuanBnJztcbmltcG9ydCBjb250aXNKcGcgZnJvbSAnLi9pbWFnZXMvY29udGlzLmpwZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlYXJjaGJhcigpIHtcbiAgICBjb25zdCBzZWFyY2hiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICBzZWFyY2hiYXIuaWQgPSAnc2VhcmNoYmFyJztcbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHNlYXJjaC50eXBlID0gJ3NlYXJjaCc7XG4gICAgc2VhcmNoLm5hbWUgPSAnc2VhcmNoJztcbiAgICBzZWFyY2guaWQgPSAnc2VhcmNoJztcbiAgICBzZWFyY2gucGxhY2Vob2xkZXIgPSBcIlNlYXJjaCBmb3IgeW91ciBDT05USSdzIGZhdm9yaXRlcy4uLlwiO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHNlYXJjaEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBzZWFyY2hJY29uLnNyYyA9IHNlYXJjaFBuZztcbiAgICBidG4uYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XG4gICAgc2VhcmNoYmFyLmFwcGVuZENoaWxkKHNlYXJjaCk7XG4gICAgc2VhcmNoYmFyLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICByZXR1cm4gc2VhcmNoYmFyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQaWN0dXJlcygpIHtcbiAgICBjb25zdCBwaWN0dXJlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBcbiAgICBwaWN0dXJlcy5pZCA9ICdwaWN0dXJlcyc7XG4gICAgY29uc3QgbWFuZ29QaG90byA9IG5ldyBJbWFnZSgpO1xuICAgIG1hbmdvUGhvdG8uc3JjID0gbWFuZ29KcGc7XG4gICAgcGljdHVyZXMuYXBwZW5kQ2hpbGQobWFuZ29QaG90byk7XG5cbiAgICByZXR1cm4gcGljdHVyZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RzKCkge1xuICAgIGNvbnN0IHByb2R1Y3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgcHJvZHVjdHMuaWQgPSAncHJvZHVjdHMnO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0cy10aXRsZScpO1xuICAgIHAuaW5uZXJIVE1MID0gJzxzcGFuPk91ciA8c3BhbiBjbGFzcz1cImdyZWVuXCI+UHJvZHVjdHM8L3NwYW4+PC9zcGFuPic7XG4gICAgcHJvZHVjdHMuYXBwZW5kKHApO1xuICAgIGNvbnN0IGRpdkl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2SXRlbXMuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1pdGVtcycpO1xuICAgIGNvbnN0IG51bU9mUHJvZHVjdHMgPSA2O1xuICAgIGZvciAobGV0IGk9MDsgaTxudW1PZlByb2R1Y3RzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGl2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtaXRlbScpO1xuICAgICAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LXRpdGxlJyk7XG4gICAgICAgIGRpdlRpdGxlLmlubmVyVGV4dCA9IFwiRkFCVUxPVVMgQ0FLRVNcIjtcbiAgICAgICAgZGl2SXRlbS5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG4gICAgICAgIGNvbnN0IGRpdkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZJbWcuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1pbWcnKTtcbiAgICAgICAgY29uc3QgY2FrZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjYWtlLnNyYyA9IGNha2VKcGc7XG4gICAgICAgIGRpdkltZy5hcHBlbmRDaGlsZChjYWtlKTtcbiAgICAgICAgZGl2SXRlbS5hcHBlbmRDaGlsZChkaXZJbWcpO1xuICAgICAgICBkaXZJdGVtcy5hcHBlbmRDaGlsZChkaXZJdGVtKTtcbiAgICB9XG4gICAgcHJvZHVjdHMuYXBwZW5kKGRpdkl0ZW1zKTtcblxuICAgIHJldHVybiBwcm9kdWN0cztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVmlkZW8oKSB7XG4gICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICB2aWRlby5pZCA9ICd2aWRlbyc7XG4gICAgY29uc3QgdGh1bWJuYWlsID0gbmV3IEltYWdlKCk7XG4gICAgdGh1bWJuYWlsLnNyYyA9IHl0SnBnO1xuICAgIHZpZGVvLmFwcGVuZENoaWxkKHRodW1ibmFpbCk7XG5cbiAgICByZXR1cm4gdmlkZW87XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3J5KCkge1xuICAgIGNvbnN0IHN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgc3RvcnkuaWQgPSAnc3RvcnknO1xuICAgIGNvbnN0IGRpdlBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2UGhvdG8uY2xhc3NMaXN0LmFkZCgnc3RvcnktcGhvdG8nKTtcbiAgICBjb25zdCBjb250aXMgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb250aXMuc3JjID0gY29udGlzSnBnO1xuICAgIGRpdlBob3RvLmFwcGVuZENoaWxkKGNvbnRpcyk7XG4gICAgc3RvcnkuYXBwZW5kQ2hpbGQoZGl2UGhvdG8pO1xuICAgIGNvbnN0IGRpdlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZUZXh0LmNsYXNzTGlzdC5hZGQoJ3N0b3J5LXRleHQnKTtcbiAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3N0b3J5LXRpdGxlJyk7XG4gICAgZGl2VGl0bGUuaW5uZXJUZXh0ID0gJ091ciBTdG9yeSc7XG4gICAgZGl2VGV4dC5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG4gICAgY29uc3QgZGl2U3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZTdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdzdG9yeS1zdWJ0aXRsZScpO1xuICAgIGRpdlN1YnRpdGxlLmlubmVyVGV4dCA9ICdGT1JFVkVSIFNIQVJJTkcgSk9ZIEZST00gT1VSIEhPTUUgVE8gWU9VUlMnO1xuICAgIGRpdlRleHQuYXBwZW5kQ2hpbGQoZGl2U3VidGl0bGUpO1xuICAgIGRpdlRleHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc3RvcnktY29udGVudCcpO1xuICAgIGRpdkNvbnRlbnQuaW5uZXJIVE1MID0gYDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEEgcGFzc2lvbiB0byBjcmVhdGUgYW5kIHNlcnZlIGRlbGVjdGFibGUgZm9vZCByZW1pbmlzY2VudCBvZiB0aGUgY29udmVuaWVuY2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGNvbWZvcnRpbmcgd2FybXRoIG9mIG9uZSdzIG93biBob21lLCB0aGlzIGlzIHdoYXQgd2UgYXQgQ29udGkncyBhcmUgYWxsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3V0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD48YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luY2Ugb3BlbmluZyBpdHMgZG9vcnMgdG8gZmFtaWxpZXMgYW5kIGZyaWVuZHMgaW4gUGFyYcOxYXF1ZSBpbiAxOTk3LCBDb250aSdzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJha2VzaG9wIGFuZCBSZXN0YXVyYW50IGhhcyBjcmVhdGVkIGFuZCBzaGFyZWQgbWVtb3JpZXMgb2YgdG9nZXRoZXJuZXNzIHRvIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlb3BsZSB3aG8gaGF2ZSBjb21lIHRvIGxvdmUgb3VyIHdpZGUgc2VsZWN0aW9uIG9mIHByb2R1Y3RzLCBpbmNsdWRpbmcgb3VyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZSBkaXNoZXMgc3VjaCBhcyB0aGUgQmFrZWQgU2FsbW9uLCBDaGlja2VuIFBpZSwgYW5kIHRoZSB3ZWxsLWxvdmVkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbmdvIEJyYXZvLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD48YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2l0aCB0aGUgam95IGFuZCBzYXRpc2ZhY3Rpb24gb2YgZXZlcnkgZ3Vlc3Qgd2hvIHdhbGtzIGludG8gb3VyIHN0b3JlcyBpbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5kLCB0aGlzIGZvb2QgaGF2ZW4gd2hpY2ggYmVnYW4gYXMgYSBzaW1wbGUgZmFtaWx5IHJlc3RhdXJhbnQgbm93IGJyaW5ncyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZmFtaWxpYXIgZmVlbGluZ3Mgb2YgaG9tZSBhbmQgY2FyZWZ1bGx5IHByZXBhcmVkIHByb2R1Y3RzIHRvIHRob3VzYW5kcyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiBob21lcyBhY3Jvc3MgdGhlIGNvdW50cnkgdGhyb3VnaCBjb250aW51b3VzIHByb2R1Y3QgaW5ub3ZhdGlvbiBhbmQgc2VydmljZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbnNpb24uIENvbnRpJ3MgQmFrZXNob3AgJiBSZXN0YXVyYW50IHRvZGF5IGV4dGVuZHMgaXRzIGNvbW1pdG1lbnQgdG8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxpdHkgYW5kIGN1bGluYXJ5IGV4Y2VsbGVuY2UgaW4gMTAgY29tbXVuaXRpZXMsIHNlcnZpbmcgbW9yZSB0aGFuIDE1MCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VnaHQtYWZ0ZXIgZGlzaGVzIGJ5IGd1ZXN0cyB3aG8sIG92ZXIgdGhlIHllYXJzLCBoYXZlIGhlbHBlZCB3cml0ZSBvdXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Rvcnkgb2YgaW5zcGlyYXRpb24gYW5kIHN1Y2Nlc3MuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBhcmUgY29tbWl0dGVkIHRvIG1ha2UgZXZlcnkgZ3Vlc3QgZXhwZXJpZW5jZSBtZW1vcmFibGUgYW5kIHRvIGNvbnRpbnVlIHNoYXJpbmcgb3VyIHN0b3J5IGluIGV2ZXJ5IHByb2R1Y3Qgd2UgY3JlYXRlIGFuZCBzZXJ2ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+YDtcbiAgICBkaXZUZXh0LmFwcGVuZENoaWxkKGRpdkNvbnRlbnQpO1xuICAgIHN0b3J5LmFwcGVuZENoaWxkKGRpdlRleHQpO1xuXG4gICAgcmV0dXJuIHN0b3J5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc29sZS5sb2coJ2hvbWUnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVNlYXJjaGJhcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVBpY3R1cmVzKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvZHVjdHMoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVWaWRlbygpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVN0b3J5KCkpO1xuXG4gICAgcmV0dXJuO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==