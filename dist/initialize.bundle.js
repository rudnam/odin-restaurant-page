/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_fb_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/fb-logo.png */ "./src/images/fb-logo.png");
/* harmony import */ var _images_ig_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/ig-logo.png */ "./src/images/ig-logo.png");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stores */ "./src/stores.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
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
        (0,_home__WEBPACK_IMPORTED_MODULE_3__["default"])();
    });
    li2.innerText = 'OUR STORES';
    li2.addEventListener('click', function() {
        (0,_stores__WEBPACK_IMPORTED_MODULE_4__["default"])();
    });
    li3.innerText = 'MENU';
    li3.addEventListener('click', function() {
        (0,_menu__WEBPACK_IMPORTED_MODULE_5__["default"])();
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

function initialize() {
    const content = document.createElement('div');
    content.id = 'content';

    document.body.appendChild(createHeader());
    document.body.appendChild(content);
    document.body.appendChild(createFooter());
    return;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnREFBRTtBQUNuQixpQkFBaUIsZ0RBQUU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3RvcmVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGhvbWUuanNcbmltcG9ydCBzZWFyY2hQbmcgZnJvbSAnLi9pbWFnZXMvc2VhcmNoLnBuZydcbmltcG9ydCBtYW5nb0pwZyBmcm9tICcuL2ltYWdlcy9NYW5nb0JyYXZvLmpwZydcbmltcG9ydCBjYWtlSnBnIGZyb20gJy4vaW1hZ2VzL2Nha2UuanBnJztcbmltcG9ydCB5dEpwZyBmcm9tICcuL2ltYWdlcy95dGltZy5qcGcnO1xuaW1wb3J0IGNvbnRpc0pwZyBmcm9tICcuL2ltYWdlcy9jb250aXMuanBnJztcblxuZnVuY3Rpb24gY3JlYXRlU2VhcmNoYmFyKCkge1xuICAgIGNvbnN0IHNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuICAgIHNlYXJjaGJhci5pZCA9ICdzZWFyY2hiYXInO1xuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc2VhcmNoLnR5cGUgPSAnc2VhcmNoJztcbiAgICBzZWFyY2gubmFtZSA9ICdzZWFyY2gnO1xuICAgIHNlYXJjaC5pZCA9ICdzZWFyY2gnO1xuICAgIHNlYXJjaC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIGZvciB5b3VyIENPTlRJJ3MgZmF2b3JpdGVzLi4uXCI7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3Qgc2VhcmNoSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHNlYXJjaEljb24uc3JjID0gc2VhcmNoUG5nO1xuICAgIGJ0bi5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcbiAgICBzZWFyY2hiYXIuYXBwZW5kQ2hpbGQoc2VhcmNoKTtcbiAgICBzZWFyY2hiYXIuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIHJldHVybiBzZWFyY2hiYXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBpY3R1cmVzKCkge1xuICAgIGNvbnN0IHBpY3R1cmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIFxuICAgIHBpY3R1cmVzLmlkID0gJ3BpY3R1cmVzJztcbiAgICBjb25zdCBtYW5nb1Bob3RvID0gbmV3IEltYWdlKCk7XG4gICAgbWFuZ29QaG90by5zcmMgPSBtYW5nb0pwZztcbiAgICBwaWN0dXJlcy5hcHBlbmRDaGlsZChtYW5nb1Bob3RvKTtcblxuICAgIHJldHVybiBwaWN0dXJlcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZHVjdHMoKSB7XG4gICAgY29uc3QgcHJvZHVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICBwcm9kdWN0cy5pZCA9ICdwcm9kdWN0cyc7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3RzLXRpdGxlJyk7XG4gICAgcC5pbm5lckhUTUwgPSAnPHNwYW4+T3VyIDxzcGFuIGNsYXNzPVwiZ3JlZW5cIj5Qcm9kdWN0czwvc3Bhbj48L3NwYW4+JztcbiAgICBwcm9kdWN0cy5hcHBlbmQocCk7XG4gICAgY29uc3QgZGl2SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZJdGVtcy5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWl0ZW1zJyk7XG4gICAgY29uc3QgbnVtT2ZQcm9kdWN0cyA9IDY7XG4gICAgZm9yIChsZXQgaT0wOyBpPG51bU9mUHJvZHVjdHM7IGkrKykge1xuICAgICAgICBjb25zdCBkaXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1pdGVtJyk7XG4gICAgICAgIGNvbnN0IGRpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtdGl0bGUnKTtcbiAgICAgICAgZGl2VGl0bGUuaW5uZXJUZXh0ID0gXCJGQUJVTE9VUyBDQUtFU1wiO1xuICAgICAgICBkaXZJdGVtLmFwcGVuZENoaWxkKGRpdlRpdGxlKTtcbiAgICAgICAgY29uc3QgZGl2SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdkltZy5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWltZycpO1xuICAgICAgICBjb25zdCBjYWtlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGNha2Uuc3JjID0gY2FrZUpwZztcbiAgICAgICAgZGl2SW1nLmFwcGVuZENoaWxkKGNha2UpO1xuICAgICAgICBkaXZJdGVtLmFwcGVuZENoaWxkKGRpdkltZyk7XG4gICAgICAgIGRpdkl0ZW1zLmFwcGVuZENoaWxkKGRpdkl0ZW0pO1xuICAgIH1cbiAgICBwcm9kdWN0cy5hcHBlbmQoZGl2SXRlbXMpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3RzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWaWRlbygpIHtcbiAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuICAgIHZpZGVvLmlkID0gJ3ZpZGVvJztcbiAgICBjb25zdCB0aHVtYm5haWwgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aHVtYm5haWwuc3JjID0geXRKcGc7XG4gICAgdmlkZW8uYXBwZW5kQ2hpbGQodGh1bWJuYWlsKTtcblxuICAgIHJldHVybiB2aWRlbztcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RvcnkoKSB7XG4gICAgY29uc3Qgc3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICBzdG9yeS5pZCA9ICdzdG9yeSc7XG4gICAgY29uc3QgZGl2UGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZQaG90by5jbGFzc0xpc3QuYWRkKCdzdG9yeS1waG90bycpO1xuICAgIGNvbnN0IGNvbnRpcyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnRpcy5zcmMgPSBjb250aXNKcGc7XG4gICAgZGl2UGhvdG8uYXBwZW5kQ2hpbGQoY29udGlzKTtcbiAgICBzdG9yeS5hcHBlbmRDaGlsZChkaXZQaG90byk7XG4gICAgY29uc3QgZGl2VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdlRleHQuY2xhc3NMaXN0LmFkZCgnc3RvcnktdGV4dCcpO1xuICAgIGNvbnN0IGRpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2VGl0bGUuY2xhc3NMaXN0LmFkZCgnc3RvcnktdGl0bGUnKTtcbiAgICBkaXZUaXRsZS5pbm5lclRleHQgPSAnT3VyIFN0b3J5JztcbiAgICBkaXZUZXh0LmFwcGVuZENoaWxkKGRpdlRpdGxlKTtcbiAgICBjb25zdCBkaXZTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdlN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoJ3N0b3J5LXN1YnRpdGxlJyk7XG4gICAgZGl2U3VidGl0bGUuaW5uZXJUZXh0ID0gJ0ZPUkVWRVIgU0hBUklORyBKT1kgRlJPTSBPVVIgSE9NRSBUTyBZT1VSUyc7XG4gICAgZGl2VGV4dC5hcHBlbmRDaGlsZChkaXZTdWJ0aXRsZSk7XG4gICAgZGl2VGV4dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Q29udGVudC5jbGFzc0xpc3QuYWRkKCdzdG9yeS1jb250ZW50Jyk7XG4gICAgZGl2Q29udGVudC5pbm5lckhUTUwgPSBgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBwYXNzaW9uIHRvIGNyZWF0ZSBhbmQgc2VydmUgZGVsZWN0YWJsZSBmb29kIHJlbWluaXNjZW50IG9mIHRoZSBjb252ZW5pZW5jZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgY29tZm9ydGluZyB3YXJtdGggb2Ygb25lJ3Mgb3duIGhvbWUsIHRoaXMgaXMgd2hhdCB3ZSBhdCBDb250aSdzIGFyZSBhbGwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW5jZSBvcGVuaW5nIGl0cyBkb29ycyB0byBmYW1pbGllcyBhbmQgZnJpZW5kcyBpbiBQYXJhw7FhcXVlIGluIDE5OTcsIENvbnRpJ3MgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFrZXNob3AgYW5kIFJlc3RhdXJhbnQgaGFzIGNyZWF0ZWQgYW5kIHNoYXJlZCBtZW1vcmllcyBvZiB0b2dldGhlcm5lc3MgdG8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVvcGxlIHdobyBoYXZlIGNvbWUgdG8gbG92ZSBvdXIgd2lkZSBzZWxlY3Rpb24gb2YgcHJvZHVjdHMsIGluY2x1ZGluZyBvdXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlIGRpc2hlcyBzdWNoIGFzIHRoZSBCYWtlZCBTYWxtb24sIENoaWNrZW4gUGllLCBhbmQgdGhlIHdlbGwtbG92ZWQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFuZ28gQnJhdm8uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaXRoIHRoZSBqb3kgYW5kIHNhdGlzZmFjdGlvbiBvZiBldmVyeSBndWVzdCB3aG8gd2Fsa3MgaW50byBvdXIgc3RvcmVzIGluIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmQsIHRoaXMgZm9vZCBoYXZlbiB3aGljaCBiZWdhbiBhcyBhIHNpbXBsZSBmYW1pbHkgcmVzdGF1cmFudCBub3cgYnJpbmdzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBmYW1pbGlhciBmZWVsaW5ncyBvZiBob21lIGFuZCBjYXJlZnVsbHkgcHJlcGFyZWQgcHJvZHVjdHMgdG8gdGhvdXNhbmRzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIGhvbWVzIGFjcm9zcyB0aGUgY291bnRyeSB0aHJvdWdoIGNvbnRpbnVvdXMgcHJvZHVjdCBpbm5vdmF0aW9uIGFuZCBzZXJ2aWNlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuc2lvbi4gQ29udGkncyBCYWtlc2hvcCAmIFJlc3RhdXJhbnQgdG9kYXkgZXh0ZW5kcyBpdHMgY29tbWl0bWVudCB0byBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbGl0eSBhbmQgY3VsaW5hcnkgZXhjZWxsZW5jZSBpbiAxMCBjb21tdW5pdGllcywgc2VydmluZyBtb3JlIHRoYW4gMTUwIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdWdodC1hZnRlciBkaXNoZXMgYnkgZ3Vlc3RzIHdobywgb3ZlciB0aGUgeWVhcnMsIGhhdmUgaGVscGVkIHdyaXRlIG91ciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yeSBvZiBpbnNwaXJhdGlvbiBhbmQgc3VjY2Vzcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+PGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGFyZSBjb21taXR0ZWQgdG8gbWFrZSBldmVyeSBndWVzdCBleHBlcmllbmNlIG1lbW9yYWJsZSBhbmQgdG8gY29udGludWUgc2hhcmluZyBvdXIgc3RvcnkgaW4gZXZlcnkgcHJvZHVjdCB3ZSBjcmVhdGUgYW5kIHNlcnZlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5gO1xuICAgIGRpdlRleHQuYXBwZW5kQ2hpbGQoZGl2Q29udGVudCk7XG4gICAgc3RvcnkuYXBwZW5kQ2hpbGQoZGl2VGV4dCk7XG5cbiAgICByZXR1cm4gc3Rvcnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zb2xlLmxvZygnaG9tZScpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlU2VhcmNoYmFyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlUGljdHVyZXMoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVQcm9kdWN0cygpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVZpZGVvKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlU3RvcnkoKSk7XG5cbiAgICByZXR1cm47XG59IiwiLy8gbWVudS5qc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnNvbGUubG9nKCdtZW51Jyk7XG4gICAgcmV0dXJuO1xufSIsIi8vIHN0b3Jlcy5qc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkU3RvcmVzKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc29sZS5sb2coJ3N0b3JlcycpO1xuICAgIHJldHVybjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBpbml0aWFsaXplLmpzXG5pbXBvcnQgTG9nbyBmcm9tICcuL2ltYWdlcy9sb2dvLnBuZydcbmltcG9ydCBGQiBmcm9tICcuL2ltYWdlcy9mYi1sb2dvLnBuZydcbmltcG9ydCBJRyBmcm9tICcuL2ltYWdlcy9pZy1sb2dvLnBuZydcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGxvYWRTdG9yZXMgZnJvbSAnLi9zdG9yZXMnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICAgIGNvbnN0IGRpdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuaHJlZiA9IFwiLlwiO1xuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvLnNyYyA9IExvZ287XG4gICAgYS5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkxLmlubmVyVGV4dCA9ICdIT01FJztcbiAgICBsaTEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZEhvbWUoKTtcbiAgICB9KTtcbiAgICBsaTIuaW5uZXJUZXh0ID0gJ09VUiBTVE9SRVMnO1xuICAgIGxpMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2FkU3RvcmVzKCk7XG4gICAgfSk7XG4gICAgbGkzLmlubmVyVGV4dCA9ICdNRU5VJztcbiAgICBsaTMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZE1lbnUoKTtcbiAgICB9KTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTEpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkzKTtcbiAgICBjb25zdCBvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHBheW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBvcmRlci5pZCA9ICdvcmRlcic7XG4gICAgcGF5bWVudC5pZCA9ICdwYXltZW50JztcbiAgICBvcmRlci5pbm5lclRleHQgPSAnT1JERVIgTk9XJztcbiAgICBwYXltZW50LmlubmVyVGV4dCA9ICdESVJFQ1QgT05MSU5FIFBBWU1FTlQnO1xuXG4gICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGEpO1xuICAgIGRpdkhlYWRlci5hcHBlbmRDaGlsZCh1bCk7XG4gICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKG9yZGVyKTtcbiAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQocGF5bWVudCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdkhlYWRlcik7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgZGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdmdHItdGl0bGUnKTtcbiAgICBkaXZUaXRsZS5pbm5lckhUTUwgPSBcIkNvbnRpPHNwYW4+Jzwvc3Bhbj5zIEJha2VzaG9wIGFuZCBSZXN0YXVyYW50XCI7XG4gICAgY29uc3QgZGl2QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnZnRyLWJ1dHRvbnMnKTtcbiAgICBjb25zdCBidG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYnRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJ0bjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4xLmlubmVyVGV4dCA9ICdPdXIgU2VydmljZXMnO1xuICAgIGJ0bjIuaW5uZXJUZXh0ID0gJ091ciBDYXJlZXJzJztcbiAgICBidG4zLmlubmVyVGV4dCA9ICdDb250YWN0IHVzJztcbiAgICBkaXZCdXR0b25zLmFwcGVuZENoaWxkKGJ0bjEpO1xuICAgIGRpdkJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnRuMik7XG4gICAgZGl2QnV0dG9ucy5hcHBlbmRDaGlsZChidG4zKTtcbiAgICBjb25zdCBkaXZTb2NtZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZTb2NtZWQuY2xhc3NMaXN0LmFkZCgnZnRyLXNvY21lZCcpO1xuICAgIGNvbnN0IGRpdkZiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2SWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmYkxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBpZ0xvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBmYkxvZ28uc3JjID0gRkI7XG4gICAgaWdMb2dvLnNyYyA9IElHO1xuICAgIGRpdkZiLmFwcGVuZENoaWxkKGZiTG9nbyk7XG4gICAgZGl2SWcuYXBwZW5kQ2hpbGQoaWdMb2dvKTtcbiAgICBkaXZTb2NtZWQuYXBwZW5kQ2hpbGQoZGl2RmIpO1xuICAgIGRpdlNvY21lZC5hcHBlbmRDaGlsZChkaXZJZyk7XG4gICAgY29uc3QgZGl2Q29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Q29weXJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Z0ci1jb3B5cmlnaHQnKTtcbiAgICBkaXZDb3B5cmlnaHQuaW5uZXJIVE1MID0gXCLCqSBDb3B5cmlnaHQgPHNwYW4+Q29udGkncyBCYWtlc2hvcCBhbmQgUmVzdGF1cmFudC48L3NwYW4+IEFsbCBSaWdodHMgUmVzZXJ2ZWRcIjtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChkaXZCdXR0b25zKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2U29jbWVkKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2Q29weXJpZ2h0KTtcblxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuaWQgPSAnY29udGVudCc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuICAgIHJldHVybjtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=