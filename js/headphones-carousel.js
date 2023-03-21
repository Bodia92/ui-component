"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["headphones-carousel"],{

/***/ "./src/js/utils/constants.js":
/*!***********************************!*\
  !*** ./src/js/utils/constants.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BREAKPOINTS": () => (/* binding */ BREAKPOINTS),
/* harmony export */   "BUILD_PATHS": () => (/* binding */ BUILD_PATHS),
/* harmony export */   "DEFAULT_GSAP_EASE": () => (/* binding */ DEFAULT_GSAP_EASE),
/* harmony export */   "ENV_STATUS": () => (/* binding */ ENV_STATUS),
/* harmony export */   "RADIAN": () => (/* binding */ RADIAN)
/* harmony export */ });
var ENV_STATUS = {
  projectDevStatus: "development" === 'development',
  projectWpBuildStatus: "development" === 'wp'
};
var BUILD_PATHS = {
  // eslint-disable-next-line no-undef
  spritePath:  false ? 0 : 'images/sprite/sprite.svg'
};
var RADIAN = Math.PI / 180;
var DEFAULT_GSAP_EASE = 'expo';
// similar css ease — cubic-bezier(.19, 1, .22, 1)

var BREAKPOINTS = {
  mediaPoint1: 1024,
  mediaPoint2: 768,
  mediaPoint3: 480,
  mediaPoint4: 320
};

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcMobileRemValue": () => (/* binding */ calcMobileRemValue),
/* harmony export */   "calcRemValue": () => (/* binding */ calcRemValue),
/* harmony export */   "calcViewportHeight": () => (/* binding */ calcViewportHeight),
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "debounceImmediate": () => (/* binding */ debounceImmediate),
/* harmony export */   "detectUsersOS": () => (/* binding */ detectUsersOS),
/* harmony export */   "documentReady": () => (/* binding */ documentReady),
/* harmony export */   "exist": () => (/* binding */ exist),
/* harmony export */   "getRandom": () => (/* binding */ getRandom),
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt),
/* harmony export */   "getWindowSize": () => (/* binding */ getWindowSize),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isTouchDevice": () => (/* binding */ isTouchDevice),
/* harmony export */   "onWindowChangeOrientation": () => (/* binding */ onWindowChangeOrientation),
/* harmony export */   "onWindowResize": () => (/* binding */ onWindowResize),
/* harmony export */   "onWindowScroll": () => (/* binding */ onWindowScroll),
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var ismobilejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ismobilejs */ "./node_modules/ismobilejs/esm/index.js");

var exist = function exist(elementOrArray) {
  if (!elementOrArray && elementOrArray !== 0) return false;
  if (elementOrArray.length === 0) {
    return false;
  }
  return true;
};
function debounce(delay, fn) {
  var timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(function () {
      fn.apply(void 0, args);
      timerId = null;
    }, delay);
  };
}
function debounceImmediate(delay, fn) {
  var fired = false;
  return function () {
    if (!fired) {
      fn.apply(void 0, arguments);
      fired = true;
      setTimeout(function () {
        fired = false;
      }, delay);
    }
  };
}
var isTouchDevice = function isTouchDevice() {
  return 'ontouchstart' in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
};
var calcViewportHeight = function calcViewportHeight() {
  var isMobileData = (0,ismobilejs__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var isApple = isMobileData.apple.phone;
  var isAndroid = isMobileData.android.phone;
  var isSeven = isMobileData.seven_inch;
  if (isApple || isAndroid || isSeven || isTouchDevice()) {
    var vh = window.innerHeight * 0.01;
    // console.log(vh);
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  }
};
var calcRemValue = function calcRemValue(_ref) {
  var windowWidth = _ref.windowWidth,
    windowHeight = _ref.windowHeight;
  var remValue = windowWidth * 0.5625 > windowHeight ? windowHeight / 800 * 10 : windowWidth / 1440 * 10;
  document.documentElement.style.setProperty('--rem', "".concat(remValue, "px"));
};
var calcMobileRemValue = function calcMobileRemValue(_ref2) {
  var windowHeight = _ref2.windowHeight;
  var mobileRemValue = windowHeight / 800 * 10;
  document.documentElement.style.setProperty('--mobile-rem', "".concat(mobileRemValue, "px"));
};
var getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
var getRandom = function getRandom(min, max) {
  return Math.random() * (max - min) + min;
};
function isFunction(func) {
  return func instanceof Function;
}
function getWindowSize() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  return {
    windowWidth: windowWidth,
    windowHeight: windowHeight
  };
}
var onWindowResize = function onWindowResize(cb) {
  if (!cb && !isFunction(cb)) return;
  var handleResize = function handleResize() {
    cb();
  };
  window.addEventListener('resize', debounce(15, handleResize));
  handleResize();
};
var detectUsersOS = function detectUsersOS() {
  if (window.navigator.userAgent.indexOf('Win') !== -1) return 'Windows OS';
  if (window.navigator.userAgent.indexOf('Mac') !== -1) return 'Macintosh';
  if (window.navigator.userAgent.indexOf('Linux') !== -1) return 'Linux OS';
  if (window.navigator.userAgent.indexOf('Android') !== -1) return 'Android OS';
  if (window.navigator.userAgent.indexOf('like Mac') !== -1) return 'iOS';
  return null;
};
var onWindowChangeOrientation = function onWindowChangeOrientation(cb) {
  if (!cb && !isFunction(cb) || !isTouchDevice()) return;
  var _getWindowSize = getWindowSize(),
    windowWidth = _getWindowSize.windowWidth;
  var handleResize = function handleResize() {
    var _getWindowSize2 = getWindowSize(),
      newWindowWidth = _getWindowSize2.windowWidth;
    if (windowWidth !== newWindowWidth) cb();
    windowWidth = newWindowWidth;
  };
  window.addEventListener('resize', debounce(100, handleResize));
};
var onWindowScroll = function onWindowScroll(cb) {
  if (!cb && !isFunction(cb)) return;
  var handleScroll = function handleScroll() {
    cb(window.pageYOffset);
  };
  window.addEventListener('scroll', debounce(15, handleScroll));
  handleScroll();
};
var documentReady = function documentReady(cb) {
  if (!cb && !isFunction(cb)) return;
  document.addEventListener('DOMContentLoaded', cb);
};
var pageLoad = function pageLoad(cb) {
  if (!cb && !isFunction(cb)) return;
  window.addEventListener('load', cb);
};

/***/ }),

/***/ "./src/pages/headphones-carousel/headphones-carousel.js":
/*!**************************************************************!*\
  !*** ./src/pages/headphones-carousel/headphones-carousel.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _headphones_carousel_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headphones-carousel.scss */ "./src/pages/headphones-carousel/headphones-carousel.scss");
/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/utils */ "./src/js/utils/index.js");
/* harmony import */ var _js_utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/utils/constants */ "./src/js/utils/constants.js");



function loadFunc() {
  console.log('load page');
}

// const headphones = () => {
// 	var mySlider = {
// 		config : {
// 			slider : '.slider-content',
// 			activeSlide : '.slide.active',
// 			button: '.next-button',
// 			transition: 500,
// 			delay: function() {return this.transition;},
// 			navigation : '.control-nav'
// 		},

// 		init : function(config) {
// 					//$.extend(mySlider.config, config);
// 					this.createNav();
// 					$(mySlider.config.button).
// 							click(function() {
// 									mySlider.animateSlide($(this));
// 							});
// 			},
// 		getActiveSlide : function() {
// 			return $(mySlider.config.activeSlide);
// 		},
// 		getNextSlide : function() {
// 			var nextSlide = mySlider.getActiveSlide().next();
// 			if ( nextSlide.length === 0 ){
// 				nextSlide = $(mySlider.config.slider).find('.slide').eq(0);
// 			}
// 			return nextSlide;
// 		},
// 		getNextSlideColorAndName : function() {
// 			var colorAndName = {};
// 			var nextSlidenext = mySlider.getNextSlide().next();
// 			var nextSlideColor = nextSlidenext.data('color');
// 			var nextSlideName = nextSlidenext.data('name');

//			colorAndName.color = nextSlideColor;
//			colorAndName.name = nextSlideName;

// 			if ( nextSlidenext.length === 0 ) {
// 				nextSlidenext = $(mySlider.config.slider).find('.slide').eq(0);
// 				nextSlideColor = nextSlidenext.data('color');
// 				nextSlideName = nextSlidenext.data('name');

// 				colorAndName.color = nextSlideColor;
// 				colorAndName.name = nextSlideName;
// 			}

// 			return colorAndName;
// 		},

// 		createNav : function() {

// 			var totalSlides = $(mySlider.config.slider).find('.slide').length;
// 			var controlNav = $(mySlider.config.navigation).find('ul');
// 			var nav;

// 			for( var i=0; i < totalSlides; i++ ){

// 					var active = "";
// 					if(i === 0){
// 						active = 'active';
// 					}

// 					controlNav.append('<li class="slider-nav nav-'+i+' '+active+' "></li>')

// 			}

// 		},

// 		animateNav : function() {

// 			var activeNav  = $('li.active');
// 			var nextNav = activeNav.next();

// 			if(nextNav.length === 0){
// 				nextNav = $('.control-nav li').eq(0);
// 			}

// 			activeNav.removeClass('active');
// 			nextNav.addClass('active');
// 		},

// 		animateSlide : function(button) {

// 			var activeSlide  = mySlider.getActiveSlide();
// 			var nextSlide = mySlider.getNextSlide();
// 			var delay = mySlider.config.delay();
// 			var clipPath = $('.clip-svg');

// 			clipPath.css('transition-duration', mySlider.config.transition+'ms');
// 			button.css('pointer-events', 'none');
// 			nextSlide.css('z-index',10);
// 			button.css('background', mySlider.getNextSlideColorAndName().color);
// 			button.prev().find('.color').html(mySlider.getNextSlideColorAndName().name);
// 			nextSlide.addClass('active').css('opacity', 1);

// 			setTimeout(function() {
// 				activeSlide.removeClass('active').css('opacity', 0);
// 			}, delay);

// 			setTimeout(function() {
// 				nextSlide.css('z-index','');
// 				button.css('pointer-events', 'auto');
// 			}, delay + 300);

// 			mySlider.animateNav();

// 		}

// 	}

// 	$(document).ready(function() { mySlider.init(); });

// };

(0,_js_utils__WEBPACK_IMPORTED_MODULE_1__.pageLoad)(function () {
  loadFunc();
});

/***/ }),

/***/ "./node_modules/ismobilejs/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/ismobilejs/esm/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _isMobile__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isMobile */ "./node_modules/ismobilejs/esm/isMobile.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ismobilejs/esm/isMobile.js":
/*!*************************************************!*\
  !*** ./node_modules/ismobilejs/esm/isMobile.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isMobile)
/* harmony export */ });
var appleIphone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var appleUniversal = /\biOS-universal(?:.+)Mac\b/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i;
var androidTablet = /Android/i;
var amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
var amazonTablet = /Silk/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i;
var otherBlackBerry = /BlackBerry/i;
var otherBlackBerry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i;
var isAppleTabletOnIos13 = function (navigator) {
    return (typeof navigator !== 'undefined' &&
        navigator.platform === 'MacIntel' &&
        typeof navigator.maxTouchPoints === 'number' &&
        navigator.maxTouchPoints > 1 &&
        typeof MSStream === 'undefined');
};
function createMatch(userAgent) {
    return function (regex) { return regex.test(userAgent); };
}
function isMobile(param) {
    var nav = {
        userAgent: '',
        platform: '',
        maxTouchPoints: 0
    };
    if (!param && typeof navigator !== 'undefined') {
        nav = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0
        };
    }
    else if (typeof param === 'string') {
        nav.userAgent = param;
    }
    else if (param && param.userAgent) {
        nav = {
            userAgent: param.userAgent,
            platform: param.platform,
            maxTouchPoints: param.maxTouchPoints || 0
        };
    }
    var userAgent = nav.userAgent;
    var tmp = userAgent.split('[FBAN');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    tmp = userAgent.split('Twitter');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    var match = createMatch(userAgent);
    var result = {
        apple: {
            phone: match(appleIphone) && !match(windowsPhone),
            ipod: match(appleIpod),
            tablet: !match(appleIphone) &&
                (match(appleTablet) || isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone),
            universal: match(appleUniversal),
            device: (match(appleIphone) ||
                match(appleIpod) ||
                match(appleTablet) ||
                match(appleUniversal) ||
                isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone)
        },
        amazon: {
            phone: match(amazonPhone),
            tablet: !match(amazonPhone) && match(amazonTablet),
            device: match(amazonPhone) || match(amazonTablet)
        },
        android: {
            phone: (!match(windowsPhone) && match(amazonPhone)) ||
                (!match(windowsPhone) && match(androidPhone)),
            tablet: !match(windowsPhone) &&
                !match(amazonPhone) &&
                !match(androidPhone) &&
                (match(amazonTablet) || match(androidTablet)),
            device: (!match(windowsPhone) &&
                (match(amazonPhone) ||
                    match(amazonTablet) ||
                    match(androidPhone) ||
                    match(androidTablet))) ||
                match(/\bokhttp\b/i)
        },
        windows: {
            phone: match(windowsPhone),
            tablet: match(windowsTablet),
            device: match(windowsPhone) || match(windowsTablet)
        },
        other: {
            blackberry: match(otherBlackBerry),
            blackberry10: match(otherBlackBerry10),
            opera: match(otherOpera),
            firefox: match(otherFirefox),
            chrome: match(otherChrome),
            device: match(otherBlackBerry) ||
                match(otherBlackBerry10) ||
                match(otherOpera) ||
                match(otherFirefox) ||
                match(otherChrome)
        },
        any: false,
        phone: false,
        tablet: false
    };
    result.any =
        result.apple.device ||
            result.android.device ||
            result.windows.device ||
            result.other.device;
    result.phone =
        result.apple.phone || result.android.phone || result.windows.phone;
    result.tablet =
        result.apple.tablet || result.android.tablet || result.windows.tablet;
    return result;
}
//# sourceMappingURL=isMobile.js.map

/***/ }),

/***/ "./src/pages/headphones-carousel/headphones-carousel.scss":
/*!****************************************************************!*\
  !*** ./src/pages/headphones-carousel/headphones-carousel.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pages/headphones-carousel/headphones-carousel.js"));
/******/ }
]);
//# sourceMappingURL=headphones-carousel.js.map