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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0RBQUU7QUFDbkIsaUJBQWlCLGdEQUFFOztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0RBQU87O0FBRXZCO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLGlEQUFROztBQUVaO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdG9yZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWxpemUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9tZS5qc1xuaW1wb3J0IHNlYXJjaFBuZyBmcm9tICcuL2ltYWdlcy9zZWFyY2gucG5nJ1xuaW1wb3J0IG1hbmdvSnBnIGZyb20gJy4vaW1hZ2VzL01hbmdvQnJhdm8uanBnJ1xuaW1wb3J0IGNha2VKcGcgZnJvbSAnLi9pbWFnZXMvY2FrZS5qcGcnO1xuaW1wb3J0IHl0SnBnIGZyb20gJy4vaW1hZ2VzL3l0aW1nLmpwZyc7XG5pbXBvcnQgY29udGlzSnBnIGZyb20gJy4vaW1hZ2VzL2NvbnRpcy5qcGcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VhcmNoYmFyKCkge1xuICAgIGNvbnN0IHNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3Qgc2VhcmNoSWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgYnRuLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xuICAgIHNlYXJjaGJhci5hcHBlbmRDaGlsZChzZWFyY2gpO1xuICAgIHNlYXJjaGJhci5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgc2VhcmNoYmFyLmlkID0gJ3NlYXJjaGJhcic7XG4gICAgc2VhcmNoLmlkID0gJ3NlYXJjaCc7XG4gICAgc2VhcmNoLnR5cGUgPSAnc2VhcmNoJztcbiAgICBzZWFyY2gubmFtZSA9ICdzZWFyY2gnO1xuICAgIHNlYXJjaC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIGZvciB5b3VyIENPTlRJJ3MgZmF2b3JpdGVzLi4uXCI7XG4gICAgc2VhcmNoSWNvbi5zcmMgPSBzZWFyY2hQbmc7XG4gICAgXG4gICAgcmV0dXJuIHNlYXJjaGJhcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGljdHVyZXMoKSB7XG4gICAgY29uc3QgcGljdHVyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgXG4gICAgY29uc3QgbWFuZ29QaG90byA9IG5ldyBJbWFnZSgpO1xuXG4gICAgcGljdHVyZXMuYXBwZW5kQ2hpbGQobWFuZ29QaG90byk7XG5cbiAgICBwaWN0dXJlcy5pZCA9ICdwaWN0dXJlcyc7XG4gICAgbWFuZ29QaG90by5zcmMgPSBtYW5nb0pwZztcbiAgICBcbiAgICByZXR1cm4gcGljdHVyZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RzKCkge1xuICAgIGNvbnN0IHByb2R1Y3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkaXZJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIHByb2R1Y3RzLmFwcGVuZChwKTtcbiAgICBwcm9kdWN0cy5hcHBlbmQoZGl2SXRlbXMpO1xuICAgIFxuICAgIHByb2R1Y3RzLmlkID0gJ3Byb2R1Y3RzJztcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3RzLXRpdGxlJyk7XG4gICAgZGl2SXRlbXMuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1pdGVtcycpO1xuICAgIHAuaW5uZXJIVE1MID0gJzxzcGFuPk91ciA8c3BhbiBjbGFzcz1cImdyZWVuXCI+UHJvZHVjdHM8L3NwYW4+PC9zcGFuPic7XG4gICAgXG4gICAgY29uc3QgbnVtT2ZQcm9kdWN0cyA9IDY7XG4gICAgZm9yIChsZXQgaT0wOyBpPG51bU9mUHJvZHVjdHM7IGkrKykge1xuICAgICAgICBjb25zdCBkaXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjYWtlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgZGl2SXRlbS5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG4gICAgICAgIGRpdkltZy5hcHBlbmRDaGlsZChjYWtlKTtcbiAgICAgICAgZGl2SXRlbS5hcHBlbmRDaGlsZChkaXZJbWcpO1xuICAgICAgICBkaXZJdGVtcy5hcHBlbmRDaGlsZChkaXZJdGVtKTtcblxuICAgICAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtaXRlbScpO1xuICAgICAgICBkaXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LXRpdGxlJyk7XG4gICAgICAgIGRpdkltZy5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWltZycpO1xuICAgICAgICBkaXZUaXRsZS5pbm5lclRleHQgPSBcIkZBQlVMT1VTIENBS0VTXCI7XG4gICAgICAgIGNha2Uuc3JjID0gY2FrZUpwZztcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvZHVjdHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZGVvKCkge1xuICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgY29uc3QgdGh1bWJuYWlsID0gbmV3IEltYWdlKCk7XG5cbiAgICB2aWRlby5hcHBlbmRDaGlsZCh0aHVtYm5haWwpO1xuXG4gICAgdmlkZW8uaWQgPSAndmlkZW8nO1xuICAgIHRodW1ibmFpbC5zcmMgPSB5dEpwZztcblxuICAgIHJldHVybiB2aWRlbztcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RvcnkoKSB7XG4gICAgY29uc3Qgc3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICBjb25zdCBkaXZQaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbnRpcyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGRpdlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpdlN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZGl2UGhvdG8uYXBwZW5kQ2hpbGQoY29udGlzKTtcbiAgICBzdG9yeS5hcHBlbmRDaGlsZChkaXZQaG90byk7XG4gICAgZGl2VGV4dC5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG4gICAgZGl2VGV4dC5hcHBlbmRDaGlsZChkaXZTdWJ0aXRsZSk7XG4gICAgZGl2VGV4dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgICBkaXZUZXh0LmFwcGVuZENoaWxkKGRpdkNvbnRlbnQpO1xuICAgIHN0b3J5LmFwcGVuZENoaWxkKGRpdlRleHQpO1xuXG4gICAgc3RvcnkuaWQgPSAnc3RvcnknO1xuICAgIGRpdlBob3RvLmNsYXNzTGlzdC5hZGQoJ3N0b3J5LXBob3RvJyk7XG4gICAgZGl2VGV4dC5jbGFzc0xpc3QuYWRkKCdzdG9yeS10ZXh0Jyk7XG4gICAgZGl2VGl0bGUuY2xhc3NMaXN0LmFkZCgnc3RvcnktdGl0bGUnKTtcbiAgICBkaXZTdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdzdG9yeS1zdWJ0aXRsZScpO1xuICAgIGRpdkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc3RvcnktY29udGVudCcpO1xuICAgIGNvbnRpcy5zcmMgPSBjb250aXNKcGc7XG4gICAgZGl2VGl0bGUuaW5uZXJUZXh0ID0gJ091ciBTdG9yeSc7XG4gICAgZGl2U3VidGl0bGUuaW5uZXJUZXh0ID0gJ0ZPUkVWRVIgU0hBUklORyBKT1kgRlJPTSBPVVIgSE9NRSBUTyBZT1VSUyc7XG4gICAgZGl2Q29udGVudC5pbm5lckhUTUwgPSBgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBwYXNzaW9uIHRvIGNyZWF0ZSBhbmQgc2VydmUgZGVsZWN0YWJsZSBmb29kIHJlbWluaXNjZW50IG9mIHRoZSBjb252ZW5pZW5jZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgY29tZm9ydGluZyB3YXJtdGggb2Ygb25lJ3Mgb3duIGhvbWUsIHRoaXMgaXMgd2hhdCB3ZSBhdCBDb250aSdzIGFyZSBhbGwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW5jZSBvcGVuaW5nIGl0cyBkb29ycyB0byBmYW1pbGllcyBhbmQgZnJpZW5kcyBpbiBQYXJhw7FhcXVlIGluIDE5OTcsIENvbnRpJ3MgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFrZXNob3AgYW5kIFJlc3RhdXJhbnQgaGFzIGNyZWF0ZWQgYW5kIHNoYXJlZCBtZW1vcmllcyBvZiB0b2dldGhlcm5lc3MgdG8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVvcGxlIHdobyBoYXZlIGNvbWUgdG8gbG92ZSBvdXIgd2lkZSBzZWxlY3Rpb24gb2YgcHJvZHVjdHMsIGluY2x1ZGluZyBvdXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlIGRpc2hlcyBzdWNoIGFzIHRoZSBCYWtlZCBTYWxtb24sIENoaWNrZW4gUGllLCBhbmQgdGhlIHdlbGwtbG92ZWQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFuZ28gQnJhdm8uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaXRoIHRoZSBqb3kgYW5kIHNhdGlzZmFjdGlvbiBvZiBldmVyeSBndWVzdCB3aG8gd2Fsa3MgaW50byBvdXIgc3RvcmVzIGluIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmQsIHRoaXMgZm9vZCBoYXZlbiB3aGljaCBiZWdhbiBhcyBhIHNpbXBsZSBmYW1pbHkgcmVzdGF1cmFudCBub3cgYnJpbmdzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBmYW1pbGlhciBmZWVsaW5ncyBvZiBob21lIGFuZCBjYXJlZnVsbHkgcHJlcGFyZWQgcHJvZHVjdHMgdG8gdGhvdXNhbmRzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIGhvbWVzIGFjcm9zcyB0aGUgY291bnRyeSB0aHJvdWdoIGNvbnRpbnVvdXMgcHJvZHVjdCBpbm5vdmF0aW9uIGFuZCBzZXJ2aWNlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuc2lvbi4gQ29udGkncyBCYWtlc2hvcCAmIFJlc3RhdXJhbnQgdG9kYXkgZXh0ZW5kcyBpdHMgY29tbWl0bWVudCB0byBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbGl0eSBhbmQgY3VsaW5hcnkgZXhjZWxsZW5jZSBpbiAxMCBjb21tdW5pdGllcywgc2VydmluZyBtb3JlIHRoYW4gMTUwIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdWdodC1hZnRlciBkaXNoZXMgYnkgZ3Vlc3RzIHdobywgb3ZlciB0aGUgeWVhcnMsIGhhdmUgaGVscGVkIHdyaXRlIG91ciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yeSBvZiBpbnNwaXJhdGlvbiBhbmQgc3VjY2Vzcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+PGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGFyZSBjb21taXR0ZWQgdG8gbWFrZSBldmVyeSBndWVzdCBleHBlcmllbmNlIG1lbW9yYWJsZSBhbmQgdG8gY29udGludWUgc2hhcmluZyBvdXIgc3RvcnkgaW4gZXZlcnkgcHJvZHVjdCB3ZSBjcmVhdGUgYW5kIHNlcnZlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5gO1xuXG4gICAgcmV0dXJuIHN0b3J5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVTZWFyY2hiYXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVQaWN0dXJlcygpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVByb2R1Y3RzKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVmlkZW8oKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVTdG9yeSgpKTtcblxuICAgIHJldHVybjtcbn0iLCIvLyBtZW51LmpzXG5pbXBvcnQgY2FrZUpwZyBmcm9tICcuL2ltYWdlcy9jYWtlLmpwZyc7XG5pbXBvcnQgeyBjcmVhdGVTZWFyY2hiYXIgfSBmcm9tICcuL2hvbWUnO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW1zKTtcblxuICAgIG1lbnUuaWQgPSAnbWVudSc7XG4gICAgbWVudVRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGl0bGUnKTtcbiAgICBtZW51SXRlbXMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuICAgIG1lbnVUaXRsZS5pbm5lckhUTUwgPSBcIldoYXQ8c3Bhbj4nPC9zcGFuPnMgTmV3PHNwYW4+Pzwvc3Bhbj5cIjtcbiAgICBcbiAgICBjb25zdCBudW1PZk1lbnVJdGVtcyA9IDEyO1xuICAgIFxuICAgIGZvciAobGV0IGk9MDsgaTxudW1PZk1lbnVJdGVtczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgY2FrZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIGl0ZW1JbWcuYXBwZW5kQ2hpbGQoY2FrZSk7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1JbWcpO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtVGV4dCk7XG4gICAgICAgIGl0ZW1UZXh0LmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gICAgICAgIGl0ZW1UZXh0LmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgICAgIGl0ZW1UZXh0LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG4gICAgICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG5cbiAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgICAgIGl0ZW1UZXh0LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGV4dCcpO1xuICAgICAgICBpdGVtSW1nLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW1nJyk7XG4gICAgICAgIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXRpdGxlJyk7XG4gICAgICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXByaWNlJyk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNha2Uuc3JjID0gY2FrZUpwZztcbiAgICAgICAgaXRlbVRpdGxlLmlubmVyVGV4dCA9ICdCaXNjb2ZmIFNpbHZhbmFzJztcbiAgICAgICAgaXRlbVByaWNlLmlubmVyVGV4dCA9ICdQSFAgMzY1JztcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICdCaXNjb2ZmIGZsYXZvciBhbmQgcmljaCBidXR0ZXJjcmVhbSBpbiBiZXR3ZWVuIGxheWVycyBvZiBjYXNoZXctbWVyaW5ndWUgd2FmZXJzJztcbiAgICB9XG4gICAgcmV0dXJuIG1lbnU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVNlYXJjaGJhcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG4gICAgcmV0dXJuO1xufSIsIi8vIHN0b3Jlcy5qc1xuaW1wb3J0IHNlYXJjaFBuZyBmcm9tICcuL2ltYWdlcy9zZWFyY2gucG5nJ1xuXG5mdW5jdGlvbiBjcmVhdGVUb3BiYXIoKSB7XG4gICAgY29uc3QgdG9wYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBzZWFyY2hiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHNlYXJjaEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBzZWxlY3RiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgdG9wYmFyLmFwcGVuZENoaWxkKHApO1xuICAgIHRvcGJhci5hcHBlbmRDaGlsZChzZWFyY2hiYXIpO1xuICAgIHRvcGJhci5hcHBlbmRDaGlsZChzZWxlY3RiYXIpO1xuICAgIGJ0bi5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcbiAgICBzZWFyY2hiYXIuYXBwZW5kQ2hpbGQoc2VhcmNoKTtcbiAgICBzZWFyY2hiYXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuICAgIHNlbGVjdGJhci5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIFxuICAgIHRvcGJhci5pZCA9ICd0b3BiYXInO1xuICAgIHNlYXJjaGJhci5pZCA9ICdzZWFyY2hiYXInXG4gICAgc2VsZWN0YmFyLmlkID0gJ3NlbGVjdGJhcic7XG4gICAgc2VhcmNoLmlkID0gJ3NlYXJjaCc7XG4gICAgcC5jbGFzc0xpc3QuYWRkKCd0b3BiYXItdGl0bGUnKTtcbiAgICBwLmlubmVyVGV4dCA9ICdTdG9yZSBTZWFyY2gnO1xuICAgIHNlYXJjaC50eXBlID0gJ3NlYXJjaCc7XG4gICAgc2VhcmNoLm5hbWUgPSAnc2VhcmNoJztcbiAgICBzZWFyY2gucGxhY2Vob2xkZXIgPSBcIkNpdHlcIjtcbiAgICBzZWFyY2hJY29uLnNyYyA9IHNlYXJjaFBuZztcbiAgICBwbGFjZWhvbGRlci5pbm5lclRleHQgPSAnU2VsZWN0IFN0YXRlJztcbiAgICBwbGFjZWhvbGRlci5kaXNhYmxlZCA9IHRydWU7XG4gICAgcGxhY2Vob2xkZXIuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIFxuICAgIGNvbnN0IG51bU9mQ2l0aWVzID0gNTtcbiAgICBmb3IgKGxldCBpPTA7IGk8bnVtT2ZDaXRpZXM7IGkrKykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gYENpdHkgJHtpfWA7XG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBgQ2l0eSAke2l9YDtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0b3BiYXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlcygpIHtcbiAgICBjb25zdCBzdG9yZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgXG4gICAgY29uc3Qgc3RvcmVDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgc3RvcmVzLmFwcGVuZENoaWxkKHN0b3JlQ2FyZHMpXG5cbiAgICBzdG9yZXMuaWQgPSAnc3RvcmVzJztcbiAgICBzdG9yZUNhcmRzLmNsYXNzTGlzdC5hZGQoJ3N0b3JlLWNhcmRzJyk7XG5cbiAgICBjb25zdCBudW1PZlN0b3JlcyA9IDE1O1xuICAgIGZvciAobGV0IGk9MDsgaTxudW1PZlN0b3JlczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGNhcmRBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBjYXJkU2NoZWR1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGNhcmRDb250YWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjYXJkTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgICAgIGNvbnN0IGNhcmREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IG51bTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGNvbnN0IG51bTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgICAgc3RvcmVDYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgICAgIHN0b3JlQ2FyZC5hcHBlbmRDaGlsZChjYXJkQWRkcmVzcyk7XG4gICAgICAgIHN0b3JlQ2FyZC5hcHBlbmRDaGlsZChjYXJkU2NoZWR1bGUpO1xuICAgICAgICBzdG9yZUNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRhY3RzKTtcbiAgICAgICAgc3RvcmVDYXJkLmFwcGVuZENoaWxkKGNhcmRMaW5lKTtcbiAgICAgICAgc3RvcmVDYXJkLmFwcGVuZENoaWxkKGNhcmREZXRhaWxzKTtcbiAgICAgICAgY2FyZENvbnRhY3RzLmFwcGVuZENoaWxkKG51bTEpO1xuICAgICAgICBjYXJkQ29udGFjdHMuYXBwZW5kQ2hpbGQobnVtMik7XG4gICAgICAgIHN0b3JlQ2FyZHMuYXBwZW5kQ2hpbGQoc3RvcmVDYXJkKTtcblxuICAgICAgICBzdG9yZUNhcmQuY2xhc3NMaXN0LmFkZCgnc3RvcmUtY2FyZCcpO1xuICAgICAgICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZScpO1xuICAgICAgICBjYXJkQWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdjYXJkLWFkZHJlc3MnKTtcbiAgICAgICAgY2FyZFNjaGVkdWxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtc2NoZWR1bGUnKTtcbiAgICAgICAgY2FyZENvbnRhY3RzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGFjdHMnKTtcbiAgICAgICAgY2FyZERldGFpbHMuY2xhc3NMaXN0LmFkZCgnY2FyZC1kZXRhaWxzJyk7XG4gICAgICAgIGNhcmRUaXRsZS5pbm5lclRleHQgPSAnQWxhYmFuZyBUb3duIENlbnRlciwgTXVudGlubHVwYSBDaXR5JztcbiAgICAgICAgY2FyZEFkZHJlc3MuaW5uZXJUZXh0ID0gJzExMDcgRy9GIENvcnRlIGRlIGxhcyBQYWxtYXMsIEFsYWJhbmcgVG93biBDZW50ZXIsIEF5YWxhIEFsYWJhbmcsIENpdHkgb2YgTXVudGlubHVwYSc7XG4gICAgICAgIGNhcmRTY2hlZHVsZS5pbm5lclRleHQgPSAnMTE6MDAgQU0gLSAwODowMCBQTSc7XG4gICAgICAgIG51bTEuaW5uZXJUZXh0ID0gJygwOTE3KTU1NC0yOTk2JztcbiAgICAgICAgbnVtMi5pbm5lclRleHQgPSAnKDAyKTg1NTYtNzcyMCc7XG4gICAgICAgIGNhcmREZXRhaWxzLmlubmVyVGV4dCA9ICdTZWUgRGV0YWlscyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0b3JlcztcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkU3RvcmVzKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRvcGJhcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVN0b3JlcygpKTtcbiAgICBcbiAgICByZXR1cm47XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIGluaXRpYWxpemUuanNcbmltcG9ydCBMb2dvIGZyb20gJy4vaW1hZ2VzL2xvZ28ucG5nJztcbmltcG9ydCBGQiBmcm9tICcuL2ltYWdlcy9mYi1sb2dvLnBuZyc7XG5pbXBvcnQgSUcgZnJvbSAnLi9pbWFnZXMvaWctbG9nby5wbmcnO1xuaW1wb3J0IEZhdmljb24gZnJvbSAnLi9pbWFnZXMvZmF2aWNvbi5qcGcnO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgbG9hZFN0b3JlcyBmcm9tICcuL3N0b3Jlcyc7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51JztcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgZGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgcGF5bWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgYS5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTEpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkzKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGl2SGVhZGVyKTtcbiAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoYSk7XG4gICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKHVsKTtcbiAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQob3JkZXIpO1xuICAgIGRpdkhlYWRlci5hcHBlbmRDaGlsZChwYXltZW50KTtcblxuICAgIG9yZGVyLmlkID0gJ29yZGVyJztcbiAgICBwYXltZW50LmlkID0gJ3BheW1lbnQnO1xuICAgIGRpdkhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBsb2dvLnNyYyA9IExvZ287XG4gICAgYS5ocmVmID0gXCIuXCI7XG4gICAgb3JkZXIuaW5uZXJUZXh0ID0gJ09SREVSIE5PVyc7XG4gICAgcGF5bWVudC5pbm5lclRleHQgPSAnRElSRUNUIE9OTElORSBQQVlNRU5UJztcbiAgICBsaTEuaW5uZXJUZXh0ID0gJ0hPTUUnO1xuICAgIGxpMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2FkSG9tZSgpO1xuICAgIH0pO1xuICAgIGxpMi5pbm5lclRleHQgPSAnT1VSIFNUT1JFUyc7XG4gICAgbGkyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxvYWRTdG9yZXMoKTtcbiAgICB9KTtcbiAgICBsaTMuaW5uZXJUZXh0ID0gJ01FTlUnO1xuICAgIGxpMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgZGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXZCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnRuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBidG4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZGl2U29jbWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2RmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXZJZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZiTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGlnTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGRpdkNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZGl2QnV0dG9ucy5hcHBlbmRDaGlsZChidG4xKTtcbiAgICBkaXZCdXR0b25zLmFwcGVuZENoaWxkKGJ0bjIpO1xuICAgIGRpdkJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnRuMyk7XG4gICAgZGl2RmIuYXBwZW5kQ2hpbGQoZmJMb2dvKTtcbiAgICBkaXZJZy5hcHBlbmRDaGlsZChpZ0xvZ28pO1xuICAgIGRpdlNvY21lZC5hcHBlbmRDaGlsZChkaXZGYik7XG4gICAgZGl2U29jbWVkLmFwcGVuZENoaWxkKGRpdklnKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChkaXZCdXR0b25zKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2U29jbWVkKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2Q29weXJpZ2h0KTtcblxuICAgIGRpdlRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Z0ci10aXRsZScpO1xuICAgIGRpdkJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnZnRyLWJ1dHRvbnMnKTtcbiAgICBkaXZTb2NtZWQuY2xhc3NMaXN0LmFkZCgnZnRyLXNvY21lZCcpO1xuICAgIGRpdkNvcHlyaWdodC5jbGFzc0xpc3QuYWRkKCdmdHItY29weXJpZ2h0Jyk7XG4gICAgZGl2VGl0bGUuaW5uZXJIVE1MID0gXCJDb250aTxzcGFuPic8L3NwYW4+cyBCYWtlc2hvcCBhbmQgUmVzdGF1cmFudFwiO1xuICAgIGRpdkNvcHlyaWdodC5pbm5lckhUTUwgPSBcIsKpIENvcHlyaWdodCA8c3Bhbj5Db250aSdzIEJha2VzaG9wIGFuZCBSZXN0YXVyYW50Ljwvc3Bhbj4gQWxsIFJpZ2h0cyBSZXNlcnZlZFwiO1xuICAgIGJ0bjEuaW5uZXJUZXh0ID0gJ091ciBTZXJ2aWNlcyc7XG4gICAgYnRuMi5pbm5lclRleHQgPSAnT3VyIENhcmVlcnMnO1xuICAgIGJ0bjMuaW5uZXJUZXh0ID0gJ0NvbnRhY3QgdXMnO1xuICAgIGZiTG9nby5zcmMgPSBGQjtcbiAgICBpZ0xvZ28uc3JjID0gSUc7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBpbml0RmF2aWNvbigpIHtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIFxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgICBsaW5rLnJlbCA9ICdpY29uJztcbiAgICBsaW5rLnR5cGUgPSAnaW1hZ2UveC1pY29uJztcbiAgICBsaW5rLmhyZWYgPSBGYXZpY29uO1xuXG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgICBjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuXG4gICAgaW5pdEZhdmljb24oKTtcbiAgICBsb2FkSG9tZSgpO1xuXG4gICAgcmV0dXJuO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==