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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUMyQztBQUNHO0FBQ047QUFDRDtBQUNLOztBQUVyQztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwrQ0FBUztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsbURBQVE7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBTztBQUMxQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxvQkFBb0IsOENBQUs7O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLCtDQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIGhvbWUuanNcbmltcG9ydCBzZWFyY2hQbmcgZnJvbSAnLi9pbWFnZXMvc2VhcmNoLnBuZydcbmltcG9ydCBtYW5nb0pwZyBmcm9tICcuL2ltYWdlcy9NYW5nb0JyYXZvLmpwZydcbmltcG9ydCBjYWtlSnBnIGZyb20gJy4vaW1hZ2VzL2Nha2UuanBnJztcbmltcG9ydCB5dEpwZyBmcm9tICcuL2ltYWdlcy95dGltZy5qcGcnO1xuaW1wb3J0IGNvbnRpc0pwZyBmcm9tICcuL2ltYWdlcy9jb250aXMuanBnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlYXJjaGJhcigpIHtcbiAgICBjb25zdCBzZWFyY2hiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHNlYXJjaEljb24gPSBuZXcgSW1hZ2UoKTtcblxuICAgIGJ0bi5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcbiAgICBzZWFyY2hiYXIuYXBwZW5kQ2hpbGQoc2VhcmNoKTtcbiAgICBzZWFyY2hiYXIuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIHNlYXJjaGJhci5pZCA9ICdzZWFyY2hiYXInO1xuICAgIHNlYXJjaC5pZCA9ICdzZWFyY2gnO1xuICAgIHNlYXJjaC50eXBlID0gJ3NlYXJjaCc7XG4gICAgc2VhcmNoLm5hbWUgPSAnc2VhcmNoJztcbiAgICBzZWFyY2gucGxhY2Vob2xkZXIgPSBcIlNlYXJjaCBmb3IgeW91ciBDT05USSdzIGZhdm9yaXRlcy4uLlwiO1xuICAgIHNlYXJjaEljb24uc3JjID0gc2VhcmNoUG5nO1xuICAgIFxuICAgIHJldHVybiBzZWFyY2hiYXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBpY3R1cmVzKCkge1xuICAgIGNvbnN0IHBpY3R1cmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIFxuICAgIGNvbnN0IG1hbmdvUGhvdG8gPSBuZXcgSW1hZ2UoKTtcblxuICAgIHBpY3R1cmVzLmFwcGVuZENoaWxkKG1hbmdvUGhvdG8pO1xuXG4gICAgcGljdHVyZXMuaWQgPSAncGljdHVyZXMnO1xuICAgIG1hbmdvUGhvdG8uc3JjID0gbWFuZ29KcGc7XG4gICAgXG4gICAgcmV0dXJuIHBpY3R1cmVzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9kdWN0cygpIHtcbiAgICBjb25zdCBwcm9kdWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZGl2SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBwcm9kdWN0cy5hcHBlbmQocCk7XG4gICAgcHJvZHVjdHMuYXBwZW5kKGRpdkl0ZW1zKTtcbiAgICBcbiAgICBwcm9kdWN0cy5pZCA9ICdwcm9kdWN0cyc7XG4gICAgcC5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0cy10aXRsZScpO1xuICAgIGRpdkl0ZW1zLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtaXRlbXMnKTtcbiAgICBwLmlubmVySFRNTCA9ICc8c3Bhbj5PdXIgPHNwYW4gY2xhc3M9XCJncmVlblwiPlByb2R1Y3RzPC9zcGFuPjwvc3Bhbj4nO1xuICAgIFxuICAgIGNvbnN0IG51bU9mUHJvZHVjdHMgPSA2O1xuICAgIGZvciAobGV0IGk9MDsgaTxudW1PZlByb2R1Y3RzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGl2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkaXZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgY2FrZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIGRpdkl0ZW0uYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgICAgICBkaXZJbWcuYXBwZW5kQ2hpbGQoY2FrZSk7XG4gICAgICAgIGRpdkl0ZW0uYXBwZW5kQ2hpbGQoZGl2SW1nKTtcbiAgICAgICAgZGl2SXRlbXMuYXBwZW5kQ2hpbGQoZGl2SXRlbSk7XG5cbiAgICAgICAgZGl2SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWl0ZW0nKTtcbiAgICAgICAgZGl2VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC10aXRsZScpO1xuICAgICAgICBkaXZJbWcuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1pbWcnKTtcbiAgICAgICAgZGl2VGl0bGUuaW5uZXJUZXh0ID0gXCJGQUJVTE9VUyBDQUtFU1wiO1xuICAgICAgICBjYWtlLnNyYyA9IGNha2VKcGc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2R1Y3RzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWaWRlbygpIHtcbiAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuICAgIGNvbnN0IHRodW1ibmFpbCA9IG5ldyBJbWFnZSgpO1xuXG4gICAgdmlkZW8uYXBwZW5kQ2hpbGQodGh1bWJuYWlsKTtcblxuICAgIHZpZGVvLmlkID0gJ3ZpZGVvJztcbiAgICB0aHVtYm5haWwuc3JjID0geXRKcGc7XG5cbiAgICByZXR1cm4gdmlkZW87XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3J5KCkge1xuICAgIGNvbnN0IHN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgY29uc3QgZGl2UGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250aXMgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBkaXZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXZTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRpdlBob3RvLmFwcGVuZENoaWxkKGNvbnRpcyk7XG4gICAgc3RvcnkuYXBwZW5kQ2hpbGQoZGl2UGhvdG8pO1xuICAgIGRpdlRleHQuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgIGRpdlRleHQuYXBwZW5kQ2hpbGQoZGl2U3VidGl0bGUpO1xuICAgIGRpdlRleHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgZGl2VGV4dC5hcHBlbmRDaGlsZChkaXZDb250ZW50KTtcbiAgICBzdG9yeS5hcHBlbmRDaGlsZChkaXZUZXh0KTtcblxuICAgIHN0b3J5LmlkID0gJ3N0b3J5JztcbiAgICBkaXZQaG90by5jbGFzc0xpc3QuYWRkKCdzdG9yeS1waG90bycpO1xuICAgIGRpdlRleHQuY2xhc3NMaXN0LmFkZCgnc3RvcnktdGV4dCcpO1xuICAgIGRpdlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3N0b3J5LXRpdGxlJyk7XG4gICAgZGl2U3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnc3Rvcnktc3VidGl0bGUnKTtcbiAgICBkaXZDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3N0b3J5LWNvbnRlbnQnKTtcbiAgICBjb250aXMuc3JjID0gY29udGlzSnBnO1xuICAgIGRpdlRpdGxlLmlubmVyVGV4dCA9ICdPdXIgU3RvcnknO1xuICAgIGRpdlN1YnRpdGxlLmlubmVyVGV4dCA9ICdGT1JFVkVSIFNIQVJJTkcgSk9ZIEZST00gT1VSIEhPTUUgVE8gWU9VUlMnO1xuICAgIGRpdkNvbnRlbnQuaW5uZXJIVE1MID0gYDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEEgcGFzc2lvbiB0byBjcmVhdGUgYW5kIHNlcnZlIGRlbGVjdGFibGUgZm9vZCByZW1pbmlzY2VudCBvZiB0aGUgY29udmVuaWVuY2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGNvbWZvcnRpbmcgd2FybXRoIG9mIG9uZSdzIG93biBob21lLCB0aGlzIGlzIHdoYXQgd2UgYXQgQ29udGkncyBhcmUgYWxsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3V0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD48YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luY2Ugb3BlbmluZyBpdHMgZG9vcnMgdG8gZmFtaWxpZXMgYW5kIGZyaWVuZHMgaW4gUGFyYcOxYXF1ZSBpbiAxOTk3LCBDb250aSdzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJha2VzaG9wIGFuZCBSZXN0YXVyYW50IGhhcyBjcmVhdGVkIGFuZCBzaGFyZWQgbWVtb3JpZXMgb2YgdG9nZXRoZXJuZXNzIHRvIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlb3BsZSB3aG8gaGF2ZSBjb21lIHRvIGxvdmUgb3VyIHdpZGUgc2VsZWN0aW9uIG9mIHByb2R1Y3RzLCBpbmNsdWRpbmcgb3VyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZSBkaXNoZXMgc3VjaCBhcyB0aGUgQmFrZWQgU2FsbW9uLCBDaGlja2VuIFBpZSwgYW5kIHRoZSB3ZWxsLWxvdmVkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbmdvIEJyYXZvLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD48YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2l0aCB0aGUgam95IGFuZCBzYXRpc2ZhY3Rpb24gb2YgZXZlcnkgZ3Vlc3Qgd2hvIHdhbGtzIGludG8gb3VyIHN0b3JlcyBpbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5kLCB0aGlzIGZvb2QgaGF2ZW4gd2hpY2ggYmVnYW4gYXMgYSBzaW1wbGUgZmFtaWx5IHJlc3RhdXJhbnQgbm93IGJyaW5ncyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZmFtaWxpYXIgZmVlbGluZ3Mgb2YgaG9tZSBhbmQgY2FyZWZ1bGx5IHByZXBhcmVkIHByb2R1Y3RzIHRvIHRob3VzYW5kcyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiBob21lcyBhY3Jvc3MgdGhlIGNvdW50cnkgdGhyb3VnaCBjb250aW51b3VzIHByb2R1Y3QgaW5ub3ZhdGlvbiBhbmQgc2VydmljZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbnNpb24uIENvbnRpJ3MgQmFrZXNob3AgJiBSZXN0YXVyYW50IHRvZGF5IGV4dGVuZHMgaXRzIGNvbW1pdG1lbnQgdG8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxpdHkgYW5kIGN1bGluYXJ5IGV4Y2VsbGVuY2UgaW4gMTAgY29tbXVuaXRpZXMsIHNlcnZpbmcgbW9yZSB0aGFuIDE1MCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VnaHQtYWZ0ZXIgZGlzaGVzIGJ5IGd1ZXN0cyB3aG8sIG92ZXIgdGhlIHllYXJzLCBoYXZlIGhlbHBlZCB3cml0ZSBvdXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Rvcnkgb2YgaW5zcGlyYXRpb24gYW5kIHN1Y2Nlc3MuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBhcmUgY29tbWl0dGVkIHRvIG1ha2UgZXZlcnkgZ3Vlc3QgZXhwZXJpZW5jZSBtZW1vcmFibGUgYW5kIHRvIGNvbnRpbnVlIHNoYXJpbmcgb3VyIHN0b3J5IGluIGV2ZXJ5IHByb2R1Y3Qgd2UgY3JlYXRlIGFuZCBzZXJ2ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+YDtcblxuICAgIHJldHVybiBzdG9yeTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlU2VhcmNoYmFyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlUGljdHVyZXMoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVQcm9kdWN0cygpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVZpZGVvKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlU3RvcnkoKSk7XG5cbiAgICByZXR1cm47XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9