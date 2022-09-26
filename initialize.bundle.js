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
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/search.png */ "./src/images/search.png");
// stores.js



function createTopbar() {
    const topbar = document.createElement('section');

    topbar.id = 'topbar';
    const p = document.createElement('p');
    p.classList.add('topbar-title');
    p.innerText = 'Store Search';
    topbar.appendChild(p);

    const searchbar = document.createElement('div');
    searchbar.id = 'searchbar'
    const search = document.createElement('input');
    search.type = 'search';
    search.name = 'search';
    search.id = 'search';
    search.placeholder = "City";
    const btn = document.createElement('button');
    const searchIcon = new Image();
    searchIcon.src = _images_search_png__WEBPACK_IMPORTED_MODULE_0__;
    btn.appendChild(searchIcon);
    searchbar.appendChild(search);
    searchbar.appendChild(btn);
    topbar.append(searchbar);

    const selectbar = document.createElement('div');
    selectbar.id = 'selectbar';
    const select = document.createElement('select');
    const placeholder = document.createElement('option');
    placeholder.innerText = 'Select State';
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);
    const numOfCities = 5;
    for (let i=0; i<numOfCities; i++) {
        const option = document.createElement('option');
        option.value = `City ${i}`;
        option.innerText = `City ${i}`;
        select.appendChild(option);
    }
    selectbar.append(select);
    topbar.append(selectbar);


    return topbar;
}

function createStores() {
    const stores = document.createElement('section');
    
    stores.id = 'stores';
    const storeCards = document.createElement('div');
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

        storeCard.appendChild(cardTitle);
        storeCard.appendChild(cardAddress);
        storeCard.appendChild(cardSchedule);
        storeCard.appendChild(cardContacts);
        storeCard.appendChild(cardLine);
        storeCard.appendChild(cardDetails);

        storeCard.classList.add('store-card');
        cardTitle.innerText = 'Alabang Town Center, Muntinlupa City';
        cardTitle.classList.add('card-title');
        cardAddress.innerText = '1107 G/F Corte de las Palmas, Alabang Town Center, Ayala Alabang, City of Muntinlupa';
        cardAddress.classList.add('card-address');
        cardSchedule.innerText = '11:00 AM - 08:00 PM';
        cardSchedule.classList.add('card-schedule');
        const num1 = document.createElement('a');
        const num2 = document.createElement('a');
        num1.innerText = '(0917)554-2996';
        num2.innerText = '(02)8556-7720';
        cardContacts.appendChild(num1);
        cardContacts.appendChild(num2);
        cardContacts.classList.add('card-contacts');
        cardDetails.innerText = 'See Details';
        cardDetails.classList.add('card-details');
        storeCards.appendChild(storeCard);
    }

    stores.appendChild(storeCards)
    
    return stores;

}

function loadStores() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    console.log('stores');

    content.appendChild(createTopbar());
    content.appendChild(createStores());
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
    (0,_home__WEBPACK_IMPORTED_MODULE_4__["default"])();
    return;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNxQztBQUNDO0FBQ0E7QUFDSztBQUNiO0FBQ0k7QUFDSjs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2Q0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVE7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRLG1EQUFVO0FBQ2xCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSxpREFBUTtBQUNoQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnREFBRTtBQUNuQixpQkFBaUIsZ0RBQUU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGdEQUFPO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFRO0FBQ1o7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0b3Jlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbGl6ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob21lLmpzXG5pbXBvcnQgc2VhcmNoUG5nIGZyb20gJy4vaW1hZ2VzL3NlYXJjaC5wbmcnXG5pbXBvcnQgbWFuZ29KcGcgZnJvbSAnLi9pbWFnZXMvTWFuZ29CcmF2by5qcGcnXG5pbXBvcnQgY2FrZUpwZyBmcm9tICcuL2ltYWdlcy9jYWtlLmpwZyc7XG5pbXBvcnQgeXRKcGcgZnJvbSAnLi9pbWFnZXMveXRpbWcuanBnJztcbmltcG9ydCBjb250aXNKcGcgZnJvbSAnLi9pbWFnZXMvY29udGlzLmpwZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlYXJjaGJhcigpIHtcbiAgICBjb25zdCBzZWFyY2hiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICBzZWFyY2hiYXIuaWQgPSAnc2VhcmNoYmFyJztcbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHNlYXJjaC50eXBlID0gJ3NlYXJjaCc7XG4gICAgc2VhcmNoLm5hbWUgPSAnc2VhcmNoJztcbiAgICBzZWFyY2guaWQgPSAnc2VhcmNoJztcbiAgICBzZWFyY2gucGxhY2Vob2xkZXIgPSBcIlNlYXJjaCBmb3IgeW91ciBDT05USSdzIGZhdm9yaXRlcy4uLlwiO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHNlYXJjaEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBzZWFyY2hJY29uLnNyYyA9IHNlYXJjaFBuZztcbiAgICBidG4uYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XG4gICAgc2VhcmNoYmFyLmFwcGVuZENoaWxkKHNlYXJjaCk7XG4gICAgc2VhcmNoYmFyLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICByZXR1cm4gc2VhcmNoYmFyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQaWN0dXJlcygpIHtcbiAgICBjb25zdCBwaWN0dXJlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBcbiAgICBwaWN0dXJlcy5pZCA9ICdwaWN0dXJlcyc7XG4gICAgY29uc3QgbWFuZ29QaG90byA9IG5ldyBJbWFnZSgpO1xuICAgIG1hbmdvUGhvdG8uc3JjID0gbWFuZ29KcGc7XG4gICAgcGljdHVyZXMuYXBwZW5kQ2hpbGQobWFuZ29QaG90byk7XG5cbiAgICByZXR1cm4gcGljdHVyZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RzKCkge1xuICAgIGNvbnN0IHByb2R1Y3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgcHJvZHVjdHMuaWQgPSAncHJvZHVjdHMnO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0cy10aXRsZScpO1xuICAgIHAuaW5uZXJIVE1MID0gJzxzcGFuPk91ciA8c3BhbiBjbGFzcz1cImdyZWVuXCI+UHJvZHVjdHM8L3NwYW4+PC9zcGFuPic7XG4gICAgcHJvZHVjdHMuYXBwZW5kKHApO1xuICAgIGNvbnN0IGRpdkl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2SXRlbXMuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1pdGVtcycpO1xuICAgIGNvbnN0IG51bU9mUHJvZHVjdHMgPSA2O1xuICAgIGZvciAobGV0IGk9MDsgaTxudW1PZlByb2R1Y3RzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGl2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtaXRlbScpO1xuICAgICAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LXRpdGxlJyk7XG4gICAgICAgIGRpdlRpdGxlLmlubmVyVGV4dCA9IFwiRkFCVUxPVVMgQ0FLRVNcIjtcbiAgICAgICAgZGl2SXRlbS5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG4gICAgICAgIGNvbnN0IGRpdkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZJbWcuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1pbWcnKTtcbiAgICAgICAgY29uc3QgY2FrZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjYWtlLnNyYyA9IGNha2VKcGc7XG4gICAgICAgIGRpdkltZy5hcHBlbmRDaGlsZChjYWtlKTtcbiAgICAgICAgZGl2SXRlbS5hcHBlbmRDaGlsZChkaXZJbWcpO1xuICAgICAgICBkaXZJdGVtcy5hcHBlbmRDaGlsZChkaXZJdGVtKTtcbiAgICB9XG4gICAgcHJvZHVjdHMuYXBwZW5kKGRpdkl0ZW1zKTtcblxuICAgIHJldHVybiBwcm9kdWN0cztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVmlkZW8oKSB7XG4gICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICB2aWRlby5pZCA9ICd2aWRlbyc7XG4gICAgY29uc3QgdGh1bWJuYWlsID0gbmV3IEltYWdlKCk7XG4gICAgdGh1bWJuYWlsLnNyYyA9IHl0SnBnO1xuICAgIHZpZGVvLmFwcGVuZENoaWxkKHRodW1ibmFpbCk7XG5cbiAgICByZXR1cm4gdmlkZW87XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3J5KCkge1xuICAgIGNvbnN0IHN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgc3RvcnkuaWQgPSAnc3RvcnknO1xuICAgIGNvbnN0IGRpdlBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2UGhvdG8uY2xhc3NMaXN0LmFkZCgnc3RvcnktcGhvdG8nKTtcbiAgICBjb25zdCBjb250aXMgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb250aXMuc3JjID0gY29udGlzSnBnO1xuICAgIGRpdlBob3RvLmFwcGVuZENoaWxkKGNvbnRpcyk7XG4gICAgc3RvcnkuYXBwZW5kQ2hpbGQoZGl2UGhvdG8pO1xuICAgIGNvbnN0IGRpdlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZUZXh0LmNsYXNzTGlzdC5hZGQoJ3N0b3J5LXRleHQnKTtcbiAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3N0b3J5LXRpdGxlJyk7XG4gICAgZGl2VGl0bGUuaW5uZXJUZXh0ID0gJ091ciBTdG9yeSc7XG4gICAgZGl2VGV4dC5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG4gICAgY29uc3QgZGl2U3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZTdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdzdG9yeS1zdWJ0aXRsZScpO1xuICAgIGRpdlN1YnRpdGxlLmlubmVyVGV4dCA9ICdGT1JFVkVSIFNIQVJJTkcgSk9ZIEZST00gT1VSIEhPTUUgVE8gWU9VUlMnO1xuICAgIGRpdlRleHQuYXBwZW5kQ2hpbGQoZGl2U3VidGl0bGUpO1xuICAgIGRpdlRleHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc3RvcnktY29udGVudCcpO1xuICAgIGRpdkNvbnRlbnQuaW5uZXJIVE1MID0gYDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEEgcGFzc2lvbiB0byBjcmVhdGUgYW5kIHNlcnZlIGRlbGVjdGFibGUgZm9vZCByZW1pbmlzY2VudCBvZiB0aGUgY29udmVuaWVuY2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGNvbWZvcnRpbmcgd2FybXRoIG9mIG9uZSdzIG93biBob21lLCB0aGlzIGlzIHdoYXQgd2UgYXQgQ29udGkncyBhcmUgYWxsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3V0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD48YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luY2Ugb3BlbmluZyBpdHMgZG9vcnMgdG8gZmFtaWxpZXMgYW5kIGZyaWVuZHMgaW4gUGFyYcOxYXF1ZSBpbiAxOTk3LCBDb250aSdzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJha2VzaG9wIGFuZCBSZXN0YXVyYW50IGhhcyBjcmVhdGVkIGFuZCBzaGFyZWQgbWVtb3JpZXMgb2YgdG9nZXRoZXJuZXNzIHRvIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlb3BsZSB3aG8gaGF2ZSBjb21lIHRvIGxvdmUgb3VyIHdpZGUgc2VsZWN0aW9uIG9mIHByb2R1Y3RzLCBpbmNsdWRpbmcgb3VyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZSBkaXNoZXMgc3VjaCBhcyB0aGUgQmFrZWQgU2FsbW9uLCBDaGlja2VuIFBpZSwgYW5kIHRoZSB3ZWxsLWxvdmVkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbmdvIEJyYXZvLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD48YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2l0aCB0aGUgam95IGFuZCBzYXRpc2ZhY3Rpb24gb2YgZXZlcnkgZ3Vlc3Qgd2hvIHdhbGtzIGludG8gb3VyIHN0b3JlcyBpbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5kLCB0aGlzIGZvb2QgaGF2ZW4gd2hpY2ggYmVnYW4gYXMgYSBzaW1wbGUgZmFtaWx5IHJlc3RhdXJhbnQgbm93IGJyaW5ncyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZmFtaWxpYXIgZmVlbGluZ3Mgb2YgaG9tZSBhbmQgY2FyZWZ1bGx5IHByZXBhcmVkIHByb2R1Y3RzIHRvIHRob3VzYW5kcyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiBob21lcyBhY3Jvc3MgdGhlIGNvdW50cnkgdGhyb3VnaCBjb250aW51b3VzIHByb2R1Y3QgaW5ub3ZhdGlvbiBhbmQgc2VydmljZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbnNpb24uIENvbnRpJ3MgQmFrZXNob3AgJiBSZXN0YXVyYW50IHRvZGF5IGV4dGVuZHMgaXRzIGNvbW1pdG1lbnQgdG8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxpdHkgYW5kIGN1bGluYXJ5IGV4Y2VsbGVuY2UgaW4gMTAgY29tbXVuaXRpZXMsIHNlcnZpbmcgbW9yZSB0aGFuIDE1MCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VnaHQtYWZ0ZXIgZGlzaGVzIGJ5IGd1ZXN0cyB3aG8sIG92ZXIgdGhlIHllYXJzLCBoYXZlIGhlbHBlZCB3cml0ZSBvdXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Rvcnkgb2YgaW5zcGlyYXRpb24gYW5kIHN1Y2Nlc3MuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBhcmUgY29tbWl0dGVkIHRvIG1ha2UgZXZlcnkgZ3Vlc3QgZXhwZXJpZW5jZSBtZW1vcmFibGUgYW5kIHRvIGNvbnRpbnVlIHNoYXJpbmcgb3VyIHN0b3J5IGluIGV2ZXJ5IHByb2R1Y3Qgd2UgY3JlYXRlIGFuZCBzZXJ2ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+YDtcbiAgICBkaXZUZXh0LmFwcGVuZENoaWxkKGRpdkNvbnRlbnQpO1xuICAgIHN0b3J5LmFwcGVuZENoaWxkKGRpdlRleHQpO1xuXG4gICAgcmV0dXJuIHN0b3J5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc29sZS5sb2coJ2hvbWUnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVNlYXJjaGJhcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVBpY3R1cmVzKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvZHVjdHMoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVWaWRlbygpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVN0b3J5KCkpO1xuXG4gICAgcmV0dXJuO1xufSIsIi8vIG1lbnUuanNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zb2xlLmxvZygnbWVudScpO1xuICAgIHJldHVybjtcbn0iLCIvLyBzdG9yZXMuanNcbmltcG9ydCBzZWFyY2hQbmcgZnJvbSAnLi9pbWFnZXMvc2VhcmNoLnBuZydcblxuXG5mdW5jdGlvbiBjcmVhdGVUb3BiYXIoKSB7XG4gICAgY29uc3QgdG9wYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgdG9wYmFyLmlkID0gJ3RvcGJhcic7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ3RvcGJhci10aXRsZScpO1xuICAgIHAuaW5uZXJUZXh0ID0gJ1N0b3JlIFNlYXJjaCc7XG4gICAgdG9wYmFyLmFwcGVuZENoaWxkKHApO1xuXG4gICAgY29uc3Qgc2VhcmNoYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VhcmNoYmFyLmlkID0gJ3NlYXJjaGJhcidcbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHNlYXJjaC50eXBlID0gJ3NlYXJjaCc7XG4gICAgc2VhcmNoLm5hbWUgPSAnc2VhcmNoJztcbiAgICBzZWFyY2guaWQgPSAnc2VhcmNoJztcbiAgICBzZWFyY2gucGxhY2Vob2xkZXIgPSBcIkNpdHlcIjtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBzZWFyY2hJY29uID0gbmV3IEltYWdlKCk7XG4gICAgc2VhcmNoSWNvbi5zcmMgPSBzZWFyY2hQbmc7XG4gICAgYnRuLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xuICAgIHNlYXJjaGJhci5hcHBlbmRDaGlsZChzZWFyY2gpO1xuICAgIHNlYXJjaGJhci5hcHBlbmRDaGlsZChidG4pO1xuICAgIHRvcGJhci5hcHBlbmQoc2VhcmNoYmFyKTtcblxuICAgIGNvbnN0IHNlbGVjdGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlbGVjdGJhci5pZCA9ICdzZWxlY3RiYXInO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJUZXh0ID0gJ1NlbGVjdCBTdGF0ZSc7XG4gICAgcGxhY2Vob2xkZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHBsYWNlaG9sZGVyLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuICAgIGNvbnN0IG51bU9mQ2l0aWVzID0gNTtcbiAgICBmb3IgKGxldCBpPTA7IGk8bnVtT2ZDaXRpZXM7IGkrKykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gYENpdHkgJHtpfWA7XG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBgQ2l0eSAke2l9YDtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuICAgIHNlbGVjdGJhci5hcHBlbmQoc2VsZWN0KTtcbiAgICB0b3BiYXIuYXBwZW5kKHNlbGVjdGJhcik7XG5cblxuICAgIHJldHVybiB0b3BiYXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlcygpIHtcbiAgICBjb25zdCBzdG9yZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgXG4gICAgc3RvcmVzLmlkID0gJ3N0b3Jlcyc7XG4gICAgY29uc3Qgc3RvcmVDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0b3JlQ2FyZHMuY2xhc3NMaXN0LmFkZCgnc3RvcmUtY2FyZHMnKTtcbiAgICBjb25zdCBudW1PZlN0b3JlcyA9IDE1O1xuICAgIGZvciAobGV0IGk9MDsgaTxudW1PZlN0b3JlczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGNhcmRBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBjYXJkU2NoZWR1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGNhcmRDb250YWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjYXJkTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgICAgIGNvbnN0IGNhcmREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgc3RvcmVDYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgICAgIHN0b3JlQ2FyZC5hcHBlbmRDaGlsZChjYXJkQWRkcmVzcyk7XG4gICAgICAgIHN0b3JlQ2FyZC5hcHBlbmRDaGlsZChjYXJkU2NoZWR1bGUpO1xuICAgICAgICBzdG9yZUNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRhY3RzKTtcbiAgICAgICAgc3RvcmVDYXJkLmFwcGVuZENoaWxkKGNhcmRMaW5lKTtcbiAgICAgICAgc3RvcmVDYXJkLmFwcGVuZENoaWxkKGNhcmREZXRhaWxzKTtcblxuICAgICAgICBzdG9yZUNhcmQuY2xhc3NMaXN0LmFkZCgnc3RvcmUtY2FyZCcpO1xuICAgICAgICBjYXJkVGl0bGUuaW5uZXJUZXh0ID0gJ0FsYWJhbmcgVG93biBDZW50ZXIsIE11bnRpbmx1cGEgQ2l0eSc7XG4gICAgICAgIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJyk7XG4gICAgICAgIGNhcmRBZGRyZXNzLmlubmVyVGV4dCA9ICcxMTA3IEcvRiBDb3J0ZSBkZSBsYXMgUGFsbWFzLCBBbGFiYW5nIFRvd24gQ2VudGVyLCBBeWFsYSBBbGFiYW5nLCBDaXR5IG9mIE11bnRpbmx1cGEnO1xuICAgICAgICBjYXJkQWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdjYXJkLWFkZHJlc3MnKTtcbiAgICAgICAgY2FyZFNjaGVkdWxlLmlubmVyVGV4dCA9ICcxMTowMCBBTSAtIDA4OjAwIFBNJztcbiAgICAgICAgY2FyZFNjaGVkdWxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtc2NoZWR1bGUnKTtcbiAgICAgICAgY29uc3QgbnVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgY29uc3QgbnVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbnVtMS5pbm5lclRleHQgPSAnKDA5MTcpNTU0LTI5OTYnO1xuICAgICAgICBudW0yLmlubmVyVGV4dCA9ICcoMDIpODU1Ni03NzIwJztcbiAgICAgICAgY2FyZENvbnRhY3RzLmFwcGVuZENoaWxkKG51bTEpO1xuICAgICAgICBjYXJkQ29udGFjdHMuYXBwZW5kQ2hpbGQobnVtMik7XG4gICAgICAgIGNhcmRDb250YWN0cy5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhY3RzJyk7XG4gICAgICAgIGNhcmREZXRhaWxzLmlubmVyVGV4dCA9ICdTZWUgRGV0YWlscyc7XG4gICAgICAgIGNhcmREZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGV0YWlscycpO1xuICAgICAgICBzdG9yZUNhcmRzLmFwcGVuZENoaWxkKHN0b3JlQ2FyZCk7XG4gICAgfVxuXG4gICAgc3RvcmVzLmFwcGVuZENoaWxkKHN0b3JlQ2FyZHMpXG4gICAgXG4gICAgcmV0dXJuIHN0b3JlcztcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkU3RvcmVzKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc29sZS5sb2coJ3N0b3JlcycpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVUb3BiYXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVTdG9yZXMoKSk7XG4gICAgcmV0dXJuO1xufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBpbml0aWFsaXplLmpzXG5pbXBvcnQgTG9nbyBmcm9tICcuL2ltYWdlcy9sb2dvLnBuZyc7XG5pbXBvcnQgRkIgZnJvbSAnLi9pbWFnZXMvZmItbG9nby5wbmcnO1xuaW1wb3J0IElHIGZyb20gJy4vaW1hZ2VzL2lnLWxvZ28ucG5nJztcbmltcG9ydCBGYXZpY29uIGZyb20gJy4vaW1hZ2VzL2Zhdmljb24uanBnJztcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGxvYWRTdG9yZXMgZnJvbSAnLi9zdG9yZXMnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICAgIGNvbnN0IGRpdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuaHJlZiA9IFwiLlwiO1xuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvLnNyYyA9IExvZ287XG4gICAgYS5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkxLmlubmVyVGV4dCA9ICdIT01FJztcbiAgICBsaTEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZEhvbWUoKTtcbiAgICB9KTtcbiAgICBsaTIuaW5uZXJUZXh0ID0gJ09VUiBTVE9SRVMnO1xuICAgIGxpMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2FkU3RvcmVzKCk7XG4gICAgfSk7XG4gICAgbGkzLmlubmVyVGV4dCA9ICdNRU5VJztcbiAgICBsaTMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZE1lbnUoKTtcbiAgICB9KTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTEpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkzKTtcbiAgICBjb25zdCBvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHBheW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBvcmRlci5pZCA9ICdvcmRlcic7XG4gICAgcGF5bWVudC5pZCA9ICdwYXltZW50JztcbiAgICBvcmRlci5pbm5lclRleHQgPSAnT1JERVIgTk9XJztcbiAgICBwYXltZW50LmlubmVyVGV4dCA9ICdESVJFQ1QgT05MSU5FIFBBWU1FTlQnO1xuXG4gICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGEpO1xuICAgIGRpdkhlYWRlci5hcHBlbmRDaGlsZCh1bCk7XG4gICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKG9yZGVyKTtcbiAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQocGF5bWVudCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdkhlYWRlcik7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgZGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdmdHItdGl0bGUnKTtcbiAgICBkaXZUaXRsZS5pbm5lckhUTUwgPSBcIkNvbnRpPHNwYW4+Jzwvc3Bhbj5zIEJha2VzaG9wIGFuZCBSZXN0YXVyYW50XCI7XG4gICAgY29uc3QgZGl2QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnZnRyLWJ1dHRvbnMnKTtcbiAgICBjb25zdCBidG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYnRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJ0bjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4xLmlubmVyVGV4dCA9ICdPdXIgU2VydmljZXMnO1xuICAgIGJ0bjIuaW5uZXJUZXh0ID0gJ091ciBDYXJlZXJzJztcbiAgICBidG4zLmlubmVyVGV4dCA9ICdDb250YWN0IHVzJztcbiAgICBkaXZCdXR0b25zLmFwcGVuZENoaWxkKGJ0bjEpO1xuICAgIGRpdkJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnRuMik7XG4gICAgZGl2QnV0dG9ucy5hcHBlbmRDaGlsZChidG4zKTtcbiAgICBjb25zdCBkaXZTb2NtZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZTb2NtZWQuY2xhc3NMaXN0LmFkZCgnZnRyLXNvY21lZCcpO1xuICAgIGNvbnN0IGRpdkZiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2SWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmYkxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBpZ0xvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBmYkxvZ28uc3JjID0gRkI7XG4gICAgaWdMb2dvLnNyYyA9IElHO1xuICAgIGRpdkZiLmFwcGVuZENoaWxkKGZiTG9nbyk7XG4gICAgZGl2SWcuYXBwZW5kQ2hpbGQoaWdMb2dvKTtcbiAgICBkaXZTb2NtZWQuYXBwZW5kQ2hpbGQoZGl2RmIpO1xuICAgIGRpdlNvY21lZC5hcHBlbmRDaGlsZChkaXZJZyk7XG4gICAgY29uc3QgZGl2Q29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Q29weXJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Z0ci1jb3B5cmlnaHQnKTtcbiAgICBkaXZDb3B5cmlnaHQuaW5uZXJIVE1MID0gXCLCqSBDb3B5cmlnaHQgPHNwYW4+Q29udGkncyBCYWtlc2hvcCBhbmQgUmVzdGF1cmFudC48L3NwYW4+IEFsbCBSaWdodHMgUmVzZXJ2ZWRcIjtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChkaXZCdXR0b25zKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2U29jbWVkKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2Q29weXJpZ2h0KTtcblxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGluaXRGYXZpY29uKCkge1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluay5yZWwgPSAnaWNvbic7XG4gICAgbGluay50eXBlID0gJ2ltYWdlL3gtaWNvbic7XG4gICAgbGluay5ocmVmID0gRmF2aWNvbjtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIHJldHVybjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5pZCA9ICdjb250ZW50JztcblxuICAgIGluaXRGYXZpY29uKCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgICBsb2FkSG9tZSgpO1xuICAgIHJldHVybjtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=