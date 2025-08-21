/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"js/main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/lrb_assets/build/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./assets/app.js","js/vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, global) {/* harmony import */ var _scripts_1_setup_Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/1_setup/Utilities */ "./assets/scripts/1_setup/Utilities.js");
/* harmony import */ var _scripts_1_setup_Utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_1_setup_Utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_1_setup_1DocumentReady__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/1_setup/1DocumentReady */ "./assets/scripts/1_setup/1DocumentReady.js");
/* harmony import */ var _scripts_1_setup_1DocumentReady__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_1_setup_1DocumentReady__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_1_setup_2PageReady__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/1_setup/2PageReady */ "./assets/scripts/1_setup/2PageReady.js");
/* harmony import */ var _scripts_1_setup_2PageReady__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_1_setup_2PageReady__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_1_setup_3SetupPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/1_setup/3SetupPage */ "./assets/scripts/1_setup/3SetupPage.js");
/* harmony import */ var _scripts_1_setup_3SetupPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_1_setup_3SetupPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_1_setup_LRBSessionData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/1_setup/LRBSessionData */ "./assets/scripts/1_setup/LRBSessionData.js");
/* harmony import */ var _scripts_1_setup_LRBSessionData__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_1_setup_LRBSessionData__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_1_setup_LRBAccessibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/1_setup/LRBAccessibility */ "./assets/scripts/1_setup/LRBAccessibility.js");
/* harmony import */ var _scripts_1_setup_LRBAccessibility__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_1_setup_LRBAccessibility__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scripts_1_setup_LRBTypography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/1_setup/LRBTypography */ "./assets/scripts/1_setup/LRBTypography.js");
/* harmony import */ var _scripts_1_setup_LRBTypography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_1_setup_LRBTypography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _scripts_2_layout_Scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/2_layout/Scrolling */ "./assets/scripts/2_layout/Scrolling.js");
/* harmony import */ var _scripts_2_layout_Scrolling__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scripts_2_layout_Scrolling__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _scripts_2_layout_Resizing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/2_layout/Resizing */ "./assets/scripts/2_layout/Resizing.js");
/* harmony import */ var _scripts_2_layout_Resizing__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scripts_2_layout_Resizing__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _scripts_3_objects_media_LRBVideo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/3_objects/media/LRBVideo */ "./assets/scripts/3_objects/media/LRBVideo.js");
/* harmony import */ var _scripts_3_objects_media_LRBVideo__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_media_LRBVideo__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _scripts_3_objects_ui_LRBAccordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scripts/3_objects/ui/LRBAccordion */ "./assets/scripts/3_objects/ui/LRBAccordion.js");
/* harmony import */ var _scripts_3_objects_ui_LRBAccordion__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_ui_LRBAccordion__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _scripts_3_objects_ui_LRBAlerts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scripts/3_objects/ui/LRBAlerts */ "./assets/scripts/3_objects/ui/LRBAlerts.js");
/* harmony import */ var _scripts_3_objects_ui_LRBAlerts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_ui_LRBAlerts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _scripts_3_objects_ui_LRBModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scripts/3_objects/ui/LRBModal */ "./assets/scripts/3_objects/ui/LRBModal.js");
/* harmony import */ var _scripts_3_objects_ui_LRBModal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_ui_LRBModal__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _scripts_3_objects_ui_LRBNavigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scripts/3_objects/ui/LRBNavigation */ "./assets/scripts/3_objects/ui/LRBNavigation.js");
/* harmony import */ var _scripts_3_objects_ui_LRBNavigation__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_ui_LRBNavigation__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _scripts_3_objects_ui_LRBPagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scripts/3_objects/ui/LRBPagination */ "./assets/scripts/3_objects/ui/LRBPagination.js");
/* harmony import */ var _scripts_3_objects_ui_LRBPagination__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_ui_LRBPagination__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _scripts_3_objects_ui_LRBReadMore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./scripts/3_objects/ui/LRBReadMore */ "./assets/scripts/3_objects/ui/LRBReadMore.js");
/* harmony import */ var _scripts_3_objects_ui_LRBReadMore__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_ui_LRBReadMore__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _scripts_3_objects_ui_LRBTooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./scripts/3_objects/ui/LRBTooltip */ "./assets/scripts/3_objects/ui/LRBTooltip.js");
/* harmony import */ var _scripts_3_objects_ui_LRBTooltip__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_ui_LRBTooltip__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _scripts_3_objects_ui_LRBUnlinkedDropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./scripts/3_objects/ui/LRBUnlinkedDropdown */ "./assets/scripts/3_objects/ui/LRBUnlinkedDropdown.js");
/* harmony import */ var _scripts_3_objects_ui_LRBUnlinkedDropdown__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_ui_LRBUnlinkedDropdown__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _scripts_3_objects_form_LRBAccountForms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./scripts/3_objects/form/LRBAccountForms */ "./assets/scripts/3_objects/form/LRBAccountForms.js");
/* harmony import */ var _scripts_3_objects_form_LRBAccountForms__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_form_LRBAccountForms__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _scripts_3_objects_form_LRBInstitutionForms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./scripts/3_objects/form/LRBInstitutionForms */ "./assets/scripts/3_objects/form/LRBInstitutionForms.js");
/* harmony import */ var _scripts_3_objects_form_LRBInstitutionForms__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_form_LRBInstitutionForms__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _scripts_3_objects_form_LRBAddressAutoComplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scripts/3_objects/form/LRBAddressAutoComplete */ "./assets/scripts/3_objects/form/LRBAddressAutoComplete.js");
/* harmony import */ var _scripts_3_objects_form_LRBAddressAutoComplete__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_form_LRBAddressAutoComplete__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _scripts_3_objects_form_LRBForms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./scripts/3_objects/form/LRBForms */ "./assets/scripts/3_objects/form/LRBForms.js");
/* harmony import */ var _scripts_3_objects_form_LRBForms__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_form_LRBForms__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _scripts_3_objects_form_LRBFormValidation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./scripts/3_objects/form/LRBFormValidation */ "./assets/scripts/3_objects/form/LRBFormValidation.js");
/* harmony import */ var _scripts_3_objects_form_LRBFormValidation__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_form_LRBFormValidation__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _scripts_3_objects_form_LRBSubscriptions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./scripts/3_objects/form/LRBSubscriptions */ "./assets/scripts/3_objects/form/LRBSubscriptions.js");
/* harmony import */ var _scripts_3_objects_form_LRBSubscriptions__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_form_LRBSubscriptions__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _scripts_3_objects_form_LRBDatePicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./scripts/3_objects/form/LRBDatePicker */ "./assets/scripts/3_objects/form/LRBDatePicker.js");
/* harmony import */ var _scripts_3_objects_form_LRBDatePicker__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_form_LRBDatePicker__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _scripts_3_objects_form_LRBDropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./scripts/3_objects/form/LRBDropdown */ "./assets/scripts/3_objects/form/LRBDropdown.js");
/* harmony import */ var _scripts_3_objects_form_LRBDropdown__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_form_LRBDropdown__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _scripts_3_objects_form_LRBCodeInput__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./scripts/3_objects/form/LRBCodeInput */ "./assets/scripts/3_objects/form/LRBCodeInput.js");
/* harmony import */ var _scripts_3_objects_form_LRBCodeInput__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_form_LRBCodeInput__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _scripts_3_objects_form_LRBRecaptcha__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./scripts/3_objects/form/LRBRecaptcha */ "./assets/scripts/3_objects/form/LRBRecaptcha.js");
/* harmony import */ var _scripts_3_objects_form_LRBRecaptcha__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_scripts_3_objects_form_LRBRecaptcha__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _scripts_4_components_LRBEventsLoader__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./scripts/4_components/LRBEventsLoader */ "./assets/scripts/4_components/LRBEventsLoader.js");
/* harmony import */ var _scripts_4_components_LRBEventsLoader__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_scripts_4_components_LRBEventsLoader__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _scripts_4_components_LRBCarousel__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./scripts/4_components/LRBCarousel */ "./assets/scripts/4_components/LRBCarousel.js");
/* harmony import */ var _scripts_4_components_LRBCarousel__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_scripts_4_components_LRBCarousel__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _scripts_4_components_LRBCharts__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./scripts/4_components/LRBCharts */ "./assets/scripts/4_components/LRBCharts.js");
/* harmony import */ var _scripts_4_components_LRBCharts__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_scripts_4_components_LRBCharts__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _scripts_4_components_LRBInstagramGrid__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./scripts/4_components/LRBInstagramGrid */ "./assets/scripts/4_components/LRBInstagramGrid.js");
/* harmony import */ var _scripts_4_components_LRBInstagramGrid__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_scripts_4_components_LRBInstagramGrid__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _scripts_4_components_LRBLightbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./scripts/4_components/LRBLightbox */ "./assets/scripts/4_components/LRBLightbox.js");
/* harmony import */ var _scripts_4_components_LRBLightbox__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_scripts_4_components_LRBLightbox__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _scripts_4_components_paywall_LRBPaywall__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./scripts/4_components/paywall/LRBPaywall */ "./assets/scripts/4_components/paywall/LRBPaywall.js");
/* harmony import */ var _scripts_4_components_paywall_LRBPaywall__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_scripts_4_components_paywall_LRBPaywall__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _scripts_4_components_paywall_DigitalEditionPaywall__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./scripts/4_components/paywall/DigitalEditionPaywall */ "./assets/scripts/4_components/paywall/DigitalEditionPaywall.js");
/* harmony import */ var _scripts_4_components_paywall_DigitalEditionPaywall__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_scripts_4_components_paywall_DigitalEditionPaywall__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _scripts_5_pages_LRBArticle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./scripts/5_pages/LRBArticle */ "./assets/scripts/5_pages/LRBArticle.js");
/* harmony import */ var _scripts_5_pages_LRBArticle__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_scripts_5_pages_LRBArticle__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _scripts_5_pages_LRBArchive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./scripts/5_pages/LRBArchive */ "./assets/scripts/5_pages/LRBArchive.js");
/* harmony import */ var _scripts_5_pages_LRBArchive__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_scripts_5_pages_LRBArchive__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _scripts_5_pages_LRBContributors__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./scripts/5_pages/LRBContributors */ "./assets/scripts/5_pages/LRBContributors.js");
/* harmony import */ var _scripts_5_pages_LRBContributors__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_scripts_5_pages_LRBContributors__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _scripts_5_pages_LRBInstitutions__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./scripts/5_pages/LRBInstitutions */ "./assets/scripts/5_pages/LRBInstitutions.js");
/* harmony import */ var _scripts_5_pages_LRBInstitutions__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_scripts_5_pages_LRBInstitutions__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _scripts_5_pages_LRBLetters__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./scripts/5_pages/LRBLetters */ "./assets/scripts/5_pages/LRBLetters.js");
/* harmony import */ var _scripts_5_pages_LRBLetters__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_scripts_5_pages_LRBLetters__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _scripts_5_pages_LRBCourses__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./scripts/5_pages/LRBCourses */ "./assets/scripts/5_pages/LRBCourses.js");
/* harmony import */ var _scripts_5_pages_LRBCourses__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_scripts_5_pages_LRBCourses__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _scripts_5_pages_LRBSearch__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./scripts/5_pages/LRBSearch */ "./assets/scripts/5_pages/LRBSearch.js");
/* harmony import */ var _scripts_5_pages_LRBSearch__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_scripts_5_pages_LRBSearch__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _scripts_5_pages_LRBToc__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./scripts/5_pages/LRBToc */ "./assets/scripts/5_pages/LRBToc.js");
/* harmony import */ var _scripts_5_pages_LRBToc__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_scripts_5_pages_LRBToc__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _scripts_5_pages_LRBBlog__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./scripts/5_pages/LRBBlog */ "./assets/scripts/5_pages/LRBBlog.js");
/* harmony import */ var _scripts_5_pages_LRBBlog__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_scripts_5_pages_LRBBlog__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _scripts_6_tracking_LRBDataLayer__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./scripts/6_tracking/LRBDataLayer */ "./assets/scripts/6_tracking/LRBDataLayer.js");
/* harmony import */ var _scripts_6_tracking_LRBDataLayer__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_scripts_6_tracking_LRBDataLayer__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _scripts_6_tracking_cmp_ConsentManager__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./scripts/6_tracking/cmp/ConsentManager */ "./assets/scripts/6_tracking/cmp/ConsentManager.js");
/* harmony import */ var _scripts_6_tracking_cmp_ConsentManager__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_scripts_6_tracking_cmp_ConsentManager__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _scripts_6_tracking_error_LRBErrorTracking__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./scripts/6_tracking/error/LRBErrorTracking */ "./assets/scripts/6_tracking/error/LRBErrorTracking.js");
/* harmony import */ var _scripts_6_tracking_error_LRBErrorTracking__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_scripts_6_tracking_error_LRBErrorTracking__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _scripts_6_tracking_error_sentry_LRBSentry__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./scripts/6_tracking/error/sentry/LRBSentry */ "./assets/scripts/6_tracking/error/sentry/LRBSentry.js");
/* harmony import */ var _scripts_6_tracking_error_sentry_LRBSentry__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_scripts_6_tracking_error_sentry_LRBSentry__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _scripts_6_tracking_LRBTracking__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./scripts/6_tracking/LRBTracking */ "./assets/scripts/6_tracking/LRBTracking.js");
/* harmony import */ var _scripts_6_tracking_LRBTracking__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_scripts_6_tracking_LRBTracking__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _scripts_6_tracking_google_GA4__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./scripts/6_tracking/google/GA4 */ "./assets/scripts/6_tracking/google/GA4.js");
/* harmony import */ var _scripts_6_tracking_google_GA4__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_scripts_6_tracking_google_GA4__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _scripts_6_tracking_dotdigital_WBT__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./scripts/6_tracking/dotdigital/WBT */ "./assets/scripts/6_tracking/dotdigital/WBT.js");
/* harmony import */ var _scripts_6_tracking_dotdigital_WBT__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(_scripts_6_tracking_dotdigital_WBT__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _scripts_6_tracking_subx_LRBSubx__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./scripts/6_tracking/subx/LRBSubx */ "./assets/scripts/6_tracking/subx/LRBSubx.js");
/* harmony import */ var _scripts_6_tracking_subx_LRBSubx__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_scripts_6_tracking_subx_LRBSubx__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _scripts_6_tracking_cabin_LRBCabin__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./scripts/6_tracking/cabin/LRBCabin */ "./assets/scripts/6_tracking/cabin/LRBCabin.js");
/* harmony import */ var _scripts_6_tracking_cabin_LRBCabin__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(_scripts_6_tracking_cabin_LRBCabin__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var _scripts_7_overrides_Shame__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./scripts/7_overrides/Shame */ "./assets/scripts/7_overrides/Shame.js");
/* harmony import */ var _scripts_7_overrides_Shame__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(_scripts_7_overrides_Shame__WEBPACK_IMPORTED_MODULE_53__);
var _document$querySelect;

try {
  window.performance.mark("js_parsed");
} catch (e) {} //Jquery Setup


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

window.$ = __webpack_provided_window_dot_jQuery = $; //Other top level requirements

__webpack_require__(/*! jquery-ui */ "./node_modules/jquery-ui/ui/widget.js");

__webpack_require__(/*! jquery.browser */ "./node_modules/jquery.browser/dist/jquery.browser.js");

__webpack_require__(/*! fitvids */ "./node_modules/fitvids/index.js");

__webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");

$("html").removeClass("no-js");
$("html").addClass("lrb-js");
/* Event Listeners */
// Images on homepage above the fold should preload, this needs to be added here prior to onload event listener

$('#home-grid-1 .landing-page__block:lt(3) .lazyload:not(.lazypreload)').addClass('lazypreload'); // Add app start listeners

window.onload = function () {
  try {
    window.performance.mark("window_loaded");
  } catch (e) {} // Start the app


  lrbAppStart();
}; // Add event listeners for both events


document.addEventListener('DOMContentLoaded', onDOMReady);
/* Utils */


/* 1_Setup - Core Document Classes, Setup, and Loading */







/* 2_Layout - Scrolling and Resizing Handlers */



/* 3_Objects - Objects */

/* Media */


/* UI */









/* Forms */











/* 4_Components */








/* 5_Pages */










/* 6_Tracking */











window.isIntranet = false;

if (window.location.hostname.indexOf("lrb-intranet") > -1) {
  window.isIntranet = true;
}
/* Utils */


global.version = "3.2.0";
global.env = "development";
global.startDate = new Date();
global.utils = new _scripts_1_setup_Utilities__WEBPACK_IMPORTED_MODULE_0__["Utilities"]();
/* Core Document Classes, Setup, and Loading */

global.documentReady = new _scripts_1_setup_1DocumentReady__WEBPACK_IMPORTED_MODULE_1__["DocumentReady"]();
global.pageReady = new _scripts_1_setup_2PageReady__WEBPACK_IMPORTED_MODULE_2__["PageReady"]();
global.setupPage = new _scripts_1_setup_3SetupPage__WEBPACK_IMPORTED_MODULE_3__["SetupPage"]();
global.LRBSessionData = new _scripts_1_setup_LRBSessionData__WEBPACK_IMPORTED_MODULE_4__["LRBSessionData"]();
global.LRBAccessibility = new _scripts_1_setup_LRBAccessibility__WEBPACK_IMPORTED_MODULE_5__["LRBAccessibility"]();
global.LRBTypography = new _scripts_1_setup_LRBTypography__WEBPACK_IMPORTED_MODULE_6__["LRBTypography"]();
/* Scrolling and Resizing Handlers */

global.scrolling = new _scripts_2_layout_Scrolling__WEBPACK_IMPORTED_MODULE_7__["Scrolling"]();
global.resizing = new _scripts_2_layout_Resizing__WEBPACK_IMPORTED_MODULE_8__["Resizing"]();
/* Components */

global.LRBAccordion = new _scripts_3_objects_ui_LRBAccordion__WEBPACK_IMPORTED_MODULE_10__["LRBAccordion"]();
global.LRBAlerts = new _scripts_3_objects_ui_LRBAlerts__WEBPACK_IMPORTED_MODULE_11__["LRBAlerts"]();
global.LRBEventsLoader = new _scripts_4_components_LRBEventsLoader__WEBPACK_IMPORTED_MODULE_28__["LRBEventsLoader"]();
global.LRBModal = new _scripts_3_objects_ui_LRBModal__WEBPACK_IMPORTED_MODULE_12__["LRBModal"]();
global.LRBNavigation = new _scripts_3_objects_ui_LRBNavigation__WEBPACK_IMPORTED_MODULE_13__["LRBNavigation"]();
global.LRBPagination = new _scripts_3_objects_ui_LRBPagination__WEBPACK_IMPORTED_MODULE_14__["LRBPagination"]();
global.LRBReadMore = new _scripts_3_objects_ui_LRBReadMore__WEBPACK_IMPORTED_MODULE_15__["LRBReadMore"]();
global.LRBTooltip = new _scripts_3_objects_ui_LRBTooltip__WEBPACK_IMPORTED_MODULE_16__["LRBTooltip"]();
global.LRBUnlinkedDropdown = new _scripts_3_objects_ui_LRBUnlinkedDropdown__WEBPACK_IMPORTED_MODULE_17__["LRBUnlinkedDropdown"]();
global.LRBAccountForms = new _scripts_3_objects_form_LRBAccountForms__WEBPACK_IMPORTED_MODULE_18__["LRBAccountForms"]();
global.LRBInstitutionForms = new _scripts_3_objects_form_LRBInstitutionForms__WEBPACK_IMPORTED_MODULE_19__["LRBInstitutionForms"]();
global.LRBAddressAutoComplete = new _scripts_3_objects_form_LRBAddressAutoComplete__WEBPACK_IMPORTED_MODULE_20__["LRBAddressAutoComplete"]();
global.LRBForms = new _scripts_3_objects_form_LRBForms__WEBPACK_IMPORTED_MODULE_21__["LRBForms"]();
global.LRBFormValidation = new _scripts_3_objects_form_LRBFormValidation__WEBPACK_IMPORTED_MODULE_22__["LRBFormValidation"]();
global.LRBSubscriptions = new _scripts_3_objects_form_LRBSubscriptions__WEBPACK_IMPORTED_MODULE_23__["LRBSubscriptions"]();
global.LRBDatePicker = new _scripts_3_objects_form_LRBDatePicker__WEBPACK_IMPORTED_MODULE_24__["LRBDatePicker"]();
global.LRBDropdown = new _scripts_3_objects_form_LRBDropdown__WEBPACK_IMPORTED_MODULE_25__["LRBDropdown"]();
global.LRBCodeInput = new _scripts_3_objects_form_LRBCodeInput__WEBPACK_IMPORTED_MODULE_26__["LRBCodeInput"]();
global.LRBRecaptcha = new _scripts_3_objects_form_LRBRecaptcha__WEBPACK_IMPORTED_MODULE_27__["LRBRecaptcha"]();
/* Paywalls */

global.LRBPaywall = new _scripts_4_components_paywall_LRBPaywall__WEBPACK_IMPORTED_MODULE_33__["LRBPaywall"]();
global.DigitalEditionPaywall = new _scripts_4_components_paywall_DigitalEditionPaywall__WEBPACK_IMPORTED_MODULE_34__["DigitalEditionPaywall"]();
/* Modules */

global.LRBCarousel = new _scripts_4_components_LRBCarousel__WEBPACK_IMPORTED_MODULE_29__["LRBCarousel"]();
global.LRBCharts = new _scripts_4_components_LRBCharts__WEBPACK_IMPORTED_MODULE_30__["LRBCharts"]();
global.LRBInstagramGrid = new _scripts_4_components_LRBInstagramGrid__WEBPACK_IMPORTED_MODULE_31__["LRBInstagramGrid"]();
global.LRBVideo = new _scripts_3_objects_media_LRBVideo__WEBPACK_IMPORTED_MODULE_9__["LRBVideo"]();
global.LRBLightbox = new _scripts_4_components_LRBLightbox__WEBPACK_IMPORTED_MODULE_32__["LRBLightbox"]();
/* Pages */

global.LRBArticle = new _scripts_5_pages_LRBArticle__WEBPACK_IMPORTED_MODULE_35__["LRBArticle"]();
global.LRBArchive = new _scripts_5_pages_LRBArchive__WEBPACK_IMPORTED_MODULE_36__["LRBArchive"]();
global.LRBContributors = new _scripts_5_pages_LRBContributors__WEBPACK_IMPORTED_MODULE_37__["LRBContributors"]();
global.LRBInstitutions = new _scripts_5_pages_LRBInstitutions__WEBPACK_IMPORTED_MODULE_38__["LRBInstitutions"]();
global.LRBLetters = new _scripts_5_pages_LRBLetters__WEBPACK_IMPORTED_MODULE_39__["LRBLetters"]();
global.LRBCourses = new _scripts_5_pages_LRBCourses__WEBPACK_IMPORTED_MODULE_40__["LRBCourses"]();
global.LRBSearch = new _scripts_5_pages_LRBSearch__WEBPACK_IMPORTED_MODULE_41__["LRBSearch"]();
global.LRBToc = new _scripts_5_pages_LRBToc__WEBPACK_IMPORTED_MODULE_42__["LRBToc"]();
/* Blog */

global.LRBBlog = new _scripts_5_pages_LRBBlog__WEBPACK_IMPORTED_MODULE_43__["LRBBlog"]();
/* Tracking */

global.LRBDataLayer = new _scripts_6_tracking_LRBDataLayer__WEBPACK_IMPORTED_MODULE_44__["LRBDataLayer"]();
global.ConsentManager = new _scripts_6_tracking_cmp_ConsentManager__WEBPACK_IMPORTED_MODULE_45__["ConsentManager"]();
global.LRBErrorTracking = new _scripts_6_tracking_error_LRBErrorTracking__WEBPACK_IMPORTED_MODULE_46__["LRBErrorTracking"]();
global.LRBSentry = new _scripts_6_tracking_error_sentry_LRBSentry__WEBPACK_IMPORTED_MODULE_47__["LRBSentry"]();
global.LRBTracking = new _scripts_6_tracking_LRBTracking__WEBPACK_IMPORTED_MODULE_48__["LRBTracking"]();
global.GA4 = new _scripts_6_tracking_google_GA4__WEBPACK_IMPORTED_MODULE_49__["GA4"]();
global.WBT = new _scripts_6_tracking_dotdigital_WBT__WEBPACK_IMPORTED_MODULE_50__["WBT"]();
global.LRBSubx = new _scripts_6_tracking_subx_LRBSubx__WEBPACK_IMPORTED_MODULE_51__["LRBSubx"]();
global.LRBCabin = new _scripts_6_tracking_cabin_LRBCabin__WEBPACK_IMPORTED_MODULE_52__["LRBCabin"]();
/* Shame */

global.shame = new _scripts_7_overrides_Shame__WEBPACK_IMPORTED_MODULE_53__["Shame"]();
/* Misc */

global.loadingIcon = '<div class="lrb-loading-icon" aria-hidden="true"></div>';
global.warnBG = "#FFFBE5";
global.infoBG = "#87b1d3";
global.successBG = "#5ab974";
global.errorBG = "#e94235";
global.LRBLoaded = false;
global.LRBallowSignIn = true;
global.csrfToken = (_document$querySelect = document.querySelector('meta[name="csrf-token"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.getAttribute('content');

if (!window.envMode) {
  if (global.env === "production") {
    window.envMode = "production";
  } else {
    window.envMode = "development";
  }
}

global.headless = global.utils.detectHeadlessBrowser(window.navigator.userAgent);
global.isBot = global.utils.detectBot(window.navigator.userAgent);
/* Track time to start App */

var endDate = new Date();
var seconds = (endDate.getTime() - global.startDate.getTime()) / 1000;
console.log("%c--App started in ".concat(seconds, " seconds--"), "background-color: ".concat(global.warnBG, ";"));
/* Entry Point */

var lrbAppStarted = false;

function lrbAppStart() {
  if (lrbAppStarted) return;
  lrbAppStarted = true;

  try {
    window.performance.mark("app_started");
  } catch (e) {} // Consent Manager Setup


  global.ConsentManager.setup(); // Load Session Data

  global.LRBSessionData.setup(); // Tracking Setup

  global.LRBTracking.setup();

  try {
    // Main Setup
    global.documentReady.setup();
    /* Trigger page ready function */

    global.pageReady.setup();
    /* Page ready completed, trigger setup page function */

    global.setupPage.setup();
    /* Track time to load App */

    endDate = new Date();
    seconds = (endDate.getTime() - global.startDate.getTime()) / 1000;
    console.log("%c--App loaded in ".concat(seconds, " seconds--"), "background-color: ".concat(global.warnBG, ";"));
  } catch (error) {
    global.LRBErrorTracking.reportErrorWithFallbackMessage('appStart Error', error);
  }
}

function onDOMReady() {
  try {
    window.performance.mark("dom_loaded");
  } catch (e) {} // Remove the DOMContentLoaded event listener


  document.removeEventListener('DOMContentLoaded', onDOMReady); // Start the app

  lrbAppStart();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/1_setup/1DocumentReady.js":
/*!**************************************************!*\
  !*** ./assets/scripts/1_setup/1DocumentReady.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {// import jQBrowser from 'jquery.browser';
// https://github.com/webpack/webpack/issues/4039#issuecomment-273804003
const jQBrowser = __webpack_require__(/*! jquery.browser */ "./node_modules/jquery.browser/dist/jquery.browser.js");

const lazySizes = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");

__webpack_require__(/*! lazysizes/plugins/parent-fit/ls.parent-fit */ "./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js");

__webpack_require__(/*! lazysizes/plugins/bgset/ls.bgset */ "./node_modules/lazysizes/plugins/bgset/ls.bgset.js");

__webpack_require__(/*! lazysizes/plugins/unveilhooks/ls.unveilhooks */ "./node_modules/lazysizes/plugins/unveilhooks/ls.unveilhooks.js");

__webpack_require__(/*! lazysizes/plugins/optimumx/ls.optimumx */ "./node_modules/lazysizes/plugins/optimumx/ls.optimumx.js");

__webpack_require__(/*! velocity-animate */ "./node_modules/velocity-animate/velocity.js"); // The offset of viewport to load images from (usually 300-500)
// Smaller results in images loading when they are more in the viewport


lazySizes.cfg.expand = 200; // Do not auto-init lazysizes, this is called later once all Dom is loaded as part of PageReady

window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.constrainPixelDensity = true;
window.lazySizesConfig.init = true;
/* Run once on site setup
* (for now we're not doing partial page loading, but best to keep things
* separated in case this needs to be added in in future) */

class DocumentReady {
  constructor() {}

  setup() {
    console.log('%c[DocumentReady]', "background-color: ".concat(global.infoBG, ";"));

    try {
      window.performance.mark('document_ready');
    } catch (e) {} //console.debug('Setting up DOM using jQuery '+window.$.fn.jquery);


    this.checkForSigninDisable();
    this.checkIfPrinting();
    this.setupLazyLoadingImages(); // Disable caching ajax requests for all content types, not just script/json

    $.ajaxSetup({
      cache: false
    });
    return Promise.all([global.setupPage.setupImageErrorReloading(), //Scrolling & Resizing Setup
    global.scrolling.setup(), global.resizing.setup(), //Main Setup
    this.removeResponsiveBackgrounds(), this.setupPageClasses()]).then(() => {
      // Run function when all promises complete
      try {
        window.performance.mark('document_ready_finished');
      } catch (e) {} // Remove loading overlay for covers listing page so can see covers as they load


      if ($('body').hasClass('section-covers')) {
        setTimeout(function () {
          global.setupPage.setupPageLoadedClasses();
        }, 5000);
      }
    }).catch(error => {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('DocReady Error', error);
    });
  } // Check if sign-in should be disabled, and do so


  checkForSigninDisable() {
    if ($('html').hasClass('noSignIn')) {
      global.LRBallowSignIn = false;
    }

    if (!global.LRBallowSignIn) {
      console.warn("Sign-in Disabled");
      $('#login_form').addClass('disabled');
      $('.js-login-link').addClass('disabled');
      $(".js-signup-link").addClass('disabled');
      $("#institutions_account_link, .institutions_account_link").addClass('disabled');
    }
  } // Check if the document load is from a print view


  checkIfPrinting() {
    let scope = this;
    global.isPrint = false;
    console.debug("Checking if the page is being printed"); //To enable triggering JS before / after printing the page

    if (window.matchMedia) {
      var mediaQueryList = window.matchMedia('print');

      if (mediaQueryList.matches) {
        scope.beforePrinting();
      }

      mediaQueryList.addListener(function (mql) {
        if (mql.matches) {
          scope.beforePrinting();
        } else {
          scope.afterPrinting();
        }
      });
    }

    window.onbeforeprint = scope.beforePrinting;
    window.onafterprint = scope.afterPrinting;
  }

  beforePrinting() {
    global.isPrint = true;
  }

  afterPrinting() {
    global.isPrint = false;
  }

  removeResponsiveBackgrounds() {
    if (!$('body').hasClass('lrb-holding-page')) {
      if (global.viewportWidth < 600) {
        $('.background-container').removeClass('lazyload').data('sizes', '');
      }
    }
  }

  setupPageClasses() {
    if ("ontouchstart" in document.documentElement) {
      document.documentElement.className += ' touch';
      global.touch = true;
    } else {
      document.documentElement.className += ' no-touch';
      global.touch = false;
    }

    $('html').addClass(jQBrowser.name);
    $('html').addClass(jQBrowser.platform); //add base site class when organisation access notification shown, or in demo mode

    if ($('.institutions-header').length > 0) {
      $('html').addClass('organisation-header-active');
    }

    if ($('.demo-strip').length > 0) {
      $('html').addClass('demo-site');
    }

    $('html').addClass('page-initial-load');
  }

  setupLazyLoadingImages() {
    if (global.isPrint) {
      $('.lazyload, .lazyloaded').addClass('lazypreload');
    }

    lazySizes.init();
    setTimeout(function () {
      global.documentReady.fixStalledLazyLoadImages();
    }, 10000);
  }

  updateLazyLoadingImages() {
    console.log("Updating Responsive Image Sizes");
    lazySizes.autoSizer.checkElems();
    setTimeout(function () {
      global.documentReady.fixStalledLazyLoadImages();
    }, 5000);
  }

  fixStalledLazyLoadImages() {
    $('.lazyloading:not(.lazyload)').removeClass('lazyloading').addClass('lazyload');
  }

  initialiseJqueryMigrate() {
    // If this is in dev mode then initialise Jquery Migrate to flag any deprecations when going to upgrade JQuery - migrate URL below to be upgraded accordingly as needed per each upgrade / migration
    if (window.envMode === "development") {
      console.log("initialiseJqueryMigrate - Checking for JQuery Deprecations");
      var JQMigrateURL = "https://code.jquery.com/jquery-migrate-3.3.1.js";
      var a = document.createElement("script");
      a.type = "text/javascript";
      a.text = "jQuery = $;";
      var b = document.getElementsByTagName("script")[0];
      b.parentNode.insertBefore(a, b);
      var migrateScript = document.createElement("script");
      migrateScript.type = "text/javascript";
      migrateScript.setAttribute("async", "true");
      migrateScript.setAttribute("src", JQMigrateURL);
      document.head.appendChild(migrateScript);
    }
  }

}

module.exports = {
  DocumentReady
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/1_setup/2PageReady.js":
/*!**********************************************!*\
  !*** ./assets/scripts/1_setup/2PageReady.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {const ScrollReveal = __webpack_require__(/*! scrollreveal */ "./node_modules/scrollreveal/dist/scrollreveal.es.js").default;

const hoverintent = __webpack_require__(/*! hoverintent */ "./node_modules/hoverintent/index.js");
/* Run upon each page load / partial load
* (for now we're not doing partial page loading, but best to keep things
* separated in case this needs to be added in in future) */


class PageReady {
  constructor() {
    this.pageReady = false;
    this.revealOptions = {
      origin: 'bottom',
      distance: '30px',
      duration: 800,
      delay: 1,
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      scale: 1,
      opacity: 0,
      mobile: true,
      reset: false,
      viewFactor: 0.18,
      beforeReveal: function (domEl) {//global.resizing.resizeHandler();
        //setTimeout(global.resizing.resizeHandler,10);
      },
      afterReveal: function (domEl) {
        if (domEl) {
          $(domEl).addClass('revealed');
          $(domEl).removeClass('revealing');
        }
      },
      afterReset: function (domEl) {
        if (domEl) {
          $(domEl).removeClass('revealed');
        }
      }
    };
  }

  setup() {
    let scope = this;
    console.log('%c[PageReady]', "background-color: ".concat(global.infoBG, ";"));

    try {
      window.performance.mark('page_ready');
    } catch (e) {}

    return Promise.all([scope.setupNavigationLinks(), scope.setupKeyboardEvents(), scope.setupTouchEvents(), scope.watchForHashChange()]).then(() => {
      $('html').removeClass('page-initial-load');
      $('html').addClass('lrb-ready');
      scope.setupScrollReveal();

      try {
        window.performance.mark('page_ready_finished');
      } catch (e) {}

      scope.pageReady = true;
    }).catch(error => {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('PageReady Error', error);
    });
  }

  setupScrollReveal() {
    if (!global.isPrint) {
      //force arrowicons to reveal
      $('.lrb-arrowlink').addClass('reveal arrow-reveal'); //force search options panel links to sequence reveal
      //$('.lrb-search--subjects a').addClass('reveal search-sequenced-reveal');

      if (!window.sr) {
        window.sr = new ScrollReveal();
      }

      if ($('.reveal').length > 0) {
        window.sr.reveal('.reveal', this.revealOptions);
      }

      if ($('.search-sequenced-reveal').length > 0) {
        window.sr.reveal('.search-sequenced-reveal', {
          interval: 70,
          opacity: 0
        });
      }

      if ($('.delayed-reveal').length > 0) {
        window.sr.reveal('.delayed-reveal', {
          delay: 200
        });
      }

      if ($('.left-reveal').length > 0) {
        window.sr.reveal('.left-reveal', {
          origin: 'left'
        });
      }

      if ($('.right-reveal').length > 0) {
        window.sr.reveal('.right-reveal', {
          origin: 'right'
        });
      }

      if ($('.static-reveal').length > 0) {
        window.sr.reveal('.static-reveal', {
          duration: 800,
          distance: '0px'
        });
      }

      if ($('.arrow-reveal').length > 0) {
        window.sr.reveal('.arrow-reveal', {
          duration: 800,
          distance: '0px',
          delay: 200
        });
      }
    } else {
      this.forceScrollReveal();
    }
  }

  forceScrollReveal() {
    $('reveal').addClass('force-reveal');
  }

  updateScrollReveal() {
    if (window.sr) {
      window.sr.sync();
    }
  }

  setupNavigationLinks() {
    let scope = this;
    global.LRBNavigation.resetSuperNav('.mainnav-link--paper');
    $('.mainnav-link--paper').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      global.LRBNavigation.resetSuperNav('.supernav-link--paper');
      global.LRBNavigation.toggleSuperNav();
      return false;
    });
    $('.mainnav-link--subjects').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      global.LRBNavigation.resetSuperNav('.supernav-link--subjects');
      global.LRBNavigation.toggleSuperNav();
      return false;
    });
    $('.mainnav-link--shop').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      global.LRBNavigation.resetSuperNav('.supernav-link--shop');
      global.LRBNavigation.toggleSuperNav();
      setTimeout(function () {
        var top = 0;

        if ($('.supernav-link--shop').length > 0) {
          top = $('.supernav-link--shop').offset().top;
        }

        $('.sidenav-scrolling').animate({
          scrollTop: top + 100
        }, 400);
      }, 200);
      return false;
    });
    $('a.burgerstack').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      global.LRBNavigation.resetSuperNav();
      global.LRBNavigation.toggleSuperNav();
      return false;
    }); // Dont reload the page we're already on for nav link clicks
    // Instead, close overlays and scroll to top of page

    $('.nav-pagelink, .logo a, .institution-navigation a, .paperArticle-letters .article-letters-inner a').on('click', function (e) {
      if ($(this).attr('href') == window.location.pathname) {
        e.preventDefault();
        e.stopPropagation();
        global.LRBNavigation.closeAllOverlays();
        global.utils.scrollToTop();
        return false;
      }
    });
    $('.fadeHoverList li a').each(function () {
      var el = $(this)[0];
      var $el = $(this);
      hoverintent(el, function () {
        $el.parent().parent().parent().addClass('hovering');
      }, function () {
        $el.parent().parent().parent().removeClass('hovering');
      });
    });
    $('.overlay-container, .sidenav-close, .searchnav-close').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      global.LRBNavigation.closeAllOverlays();
      return false;
    });
    $('.mainnav-link--search, .social-button.search-button').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (global.viewportWidth <= 850) {
        //open search overlay on mobile
        global.LRBNavigation.toggleOverlaySearchNav();
      } else {
        //open search dropdown from header on other
        global.LRBNavigation.toggleSearchNav();
      }

      return false;
    }); //Dont submit blank search forms

    $('.searchForm').on('submit', function (e) {
      if ($(this).find('.searchField').val() == "") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    });
    $('.supernav a').on('click', function (e) {
      var $parent = $(this).parent();

      if (!$parent.hasClass('has-submenu')) {
        /*setTimeout(function(){
            window.location = $(this).attr('href');
        },350);*/
        //Regular link, check to see if it is external
        if ($(this).attr('target') == "_blank") {//External, open link and leave menu open
        } else {
          //Internal, close menu and open link
          global.LRBNavigation.closeAllOverlays();
        }
      } else {
        e.preventDefault();
        e.stopPropagation(); //toggle submenu

        $parent.toggleClass('submenuOpen');

        if (!$('html').hasClass('supernavAnimating')) {
          if ($parent.hasClass('submenuOpen')) {
            //Show Submenu
            $('html').addClass('supernavAnimating');
            $('.submenuOpen').removeClass('submenuOpen');
            $parent.addClass('submenuOpen');
            $('.has-submenu ul').velocity("stop").velocity("slideUp", {
              duration: 450
            });
            $parent.find('ul').velocity("stop").velocity("slideDown", {
              duration: 450,
              complete: function () {
                $('html').removeClass('supernavAnimating');
              }
            });
          } else {
            //Hide Submenu
            $('html').addClass('supernavAnimating');
            $('.submenuOpen').removeClass('submenuOpen');
            $('.has-submenu ul').velocity("stop").velocity("slideUp", {
              duration: 450,
              complete: function () {
                $('html').removeClass('supernavAnimating');
              }
            });
          }
        }

        return false;
      }
    });
  }

  setupKeyboardEvents() {
    document.onkeydown = this.keypressHandler;
  }

  keypressHandler(e) {
    e = e || window.event; //console.log(e.keyCode);

    switch (e.keyCode) {
      case '38':
        //up arrow
        break;

      case '40':
        //down arrow
        break;

      case 37:
        //left arrow
        break;

      case 39:
        //right arrow
        break;

      case 27:
        //Escape
        global.LRBNavigation.closeAllOverlays();
        break;
    }
  }

  setupTouchEvents() {
    //Prevent body touch scroll on modals / sidenavs, whilst allowing inner scrolling on those elements
    $('body').on('touchmove', function (e) {
      if ($('html').hasClass('lrb-overlayed') || $('html').hasClass('lrb-supernavOpen') || $('html').hasClass('lrb-searchOverlayOpen') || $('html').hasClass('lrb-searchNavOpen') || $('html').hasClass('lrb-modalOpen') || $('html').hasClass('lrb-tacModalOpen')) {
        if ($(e.target).parents('.sidenav-scrolling').length > 0) {//valid scrolling target
        } else {
          //invalid scrolling target
          e.preventDefault();
          e.stopPropagation();
          console.log("setupTouchEvents > preventing scroll");
          return false;
        }
      }
    });
  }

  watchForHashChange() {
    window.onhashchange = this.handleHashChange;
    let scope = this;
    setTimeout(function () {
      scope.handleHashChange();
    }, 250);
  }

  handleHashChange() {
    try {
      if (location.hash && location.hash !== null && location.hash !== undefined && location.hash !== "" && location.hash !== "#" && !location.hash.includes(':~:text')) {
        console.log("Hashchange - " + location.hash); // Open Login modals

        if (location.hash.toLowerCase() == "#login") {
          location.hash = "";
          global.LRBModal.openLoginModal();
          return;
        } // Jump to section with id of hash


        let $target = $(location.hash);

        if ($target.length > 0) {
          var offset = 80;

          if ($('html').hasClass('lrb-article')) {
            offset = 220;
          }

          global.utils.scrollTo($target, offset, 450);
          return;
        }
      } // Open advanced Search


      if (location.hash && $('body').hasClass('section-search-results') && location.hash == "#advanced") {
        LRBSearch.showAdvancedSearch();
        global.utils.scrollToTop();
        return;
      }

      if (location.hash && $('body').hasClass('section-courses')) {
        global.LRBCourses.handleHashChange(location.hash);
      }
    } catch (e) {
      global.LRBErrorTracking.captureMessage('Could not handle hash change: ' + location.hash);
    }
  }

}

module.exports = {
  PageReady
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/1_setup/3SetupPage.js":
/*!**********************************************!*\
  !*** ./assets/scripts/1_setup/3SetupPage.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {__webpack_require__(/*! velocity-animate */ "./node_modules/velocity-animate/velocity.js");

var Mousetrap = __webpack_require__(/*! mousetrap */ "./node_modules/mousetrap/mousetrap.js");

const hoverintent = __webpack_require__(/*! hoverintent */ "./node_modules/hoverintent/index.js");
/* Run upon each page load / partial load
* (for now we're not doing partial page loading, but best to keep things
* separated in case this needs to be added in in future) */


class SetupPage {
  constructor() {
    this.pageLoaded = false;
  } //================================
  // Setup the page, if paywallLoad is set then skip some parts:
  // Re-Setup the relevant parts of the article page after content is loaded via AJAX
  //================================


  setup(ajaxLoad, paywallLoad) {
    $('html').addClass('lrb-settinguppage'); // global.LRBSentry.captureMessage('TM:SetupPage Start');

    if (paywallLoad) {
      console.log('%c[PayWall Content Loaded / Setup]', "background-color: ".concat(global.infoBG, ";"));

      try {
        window.performance.mark('setup_page_paywall');
      } catch (e) {}
    } else {
      if (ajaxLoad) {
        console.log('%c[SetupPage - AJAX]', "background-color: ".concat(global.infoBG, ";"));

        try {
          window.performance.mark('setup_page_ajax');
        } catch (e) {}
      } else {
        console.log('%c[SetupPage]', "background-color: ".concat(global.infoBG, ";"));

        try {
          window.performance.mark('setup_page');
        } catch (e) {}
      }
    }

    global.LRBTypography.setupAutoSplit();
    global.LRBTypography.cleanUpTypography();
    return Promise.all([this.setupExtPDFLinks(), this.setupAutoStyles(), this.setupFormFields(), this.setupTables(), this.setupModules(), this.setupComponents(), this.setupScrollLinks(), this.setupHomeImageHovers(), this.setupSocialShareLinks(), this.checkUrlHash()]).then(() => {
      // Only run setupComplete and other page specific code if not AJAX load
      if (!ajaxLoad) {
        // Regular page load setup
        this.setupComplete();
        global.LRBBlog.setup();
        this.delayedGeneralSetup();
      } else {
        // AJAX load setup, e.g. search results
        global.pageReady.setupScrollReveal();
      }

      $('html').removeClass('lrb-settinguppage');
      this.pageLoaded = true;
      this.checkUrlHash();
      this.setupPageLoadedClasses();
      this.delayedTooltipSetup();
      this.setupArticleClasses();
      global.LRBSessionData.updatePage();
    }).catch(error => {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('SetupPage Error', error);
    });
  }

  setupPageLoadedClasses() {
    $('html').addClass('lrb-setup');
    $('html').removeClass('lrb-loading');
    setTimeout(function () {
      global.setupPage.setupPageLoadedClasses();
    }, 5000);
  }

  setupArticleClasses() {
    if (window.articleWordcount && parseFloat(window.articleWordcount) >= 300) {
      $('html').addClass('lrb-short-article');
    }
  } //================================
  // External Links and PDFs
  //================================


  setupExtPDFLinks() {
    // global.LRBSentry.captureMessage('TM:1 setupExtPDFLinks');
    try {
      console.debug('Setting up External Link and PDF Link targets'); // Add target blank

      $('.lrb-content-container a[href^="http://"]:not(.list-filter-nav--link)').not('a[href*="lrb.co.uk"]').attr('target', '_blank');
      $('.lrb-content-container a[href^="https://"]:not(.list-filter-nav--link)').not('a[href*="lrb.co.uk"]').attr('target', '_blank');
      $('.lrb-content-container a[href$=".pdf"]').attr('target', '_blank'); // Add rel=noopener

      $('.lrb-content-container a[href^="http://"]').not('a[href*="lrb.co.uk"]').attr('rel', 'noopener');
      $('.lrb-content-container a[href^="https://"]').not('a[href*="lrb.co.uk"]').attr('rel', 'noopener');
      $('.lrb-content-container a[href$=".pdf"]').attr('rel', 'noopener');
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('setupExtPDFLinks Error', error);
    }
  } //==========================
  // Setup all Forms and Fields
  //==========================


  setupFormFields() {
    // global.LRBSentry.captureMessage('TM:5 setupFormFields');
    try {
      console.log("[Setup Form Fields]");
      global.LRBForms.setup();
      global.LRBAccountForms.setup();
      global.LRBInstitutionForms.setup();
      global.LRBSubscriptions.setup();
      global.LRBDatePicker.setup();
      global.LRBDropdown.setup();
      global.LRBCodeInput.setup();
      global.LRBFormValidation.setup();
      this.setupCustomerNumberPopupLink();
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('setupFormFields Error', error);
    }
  } //==========================
  // Setup Tables for styling
  //==========================


  setupTables() {
    // global.LRBSentry.captureMessage('TM:6 setupTables');
    try {
      console.log("[Setup Tables]");
      $('.lrb-datatable-holder table').addClass('lrb-datatable');
      $('.article-copy table').addClass('lrb-datatable');
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('setupTables Error', error);
    }
  } //==========================
  // Setup customer number help popup
  //==========================


  setupCustomerNumberPopupLink() {
    if ($('.js-customer-number').length > 0) {
      console.log("[Setup Cust.No. Popup Link]");
      $('.js-customer-number').each(function () {
        if (!$(this).data('setup')) {
          $(this).data('setup', true);
          $(this).on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            global.LRBModal.openCustomerNumberHelpModal();
            return false;
          });
        }
      });
    }
  } //==========================
  // Setup Styles on elements marked for auto styling
  //==========================


  setupAutoStyles() {
    // global.LRBSentry.captureMessage('TM:4 setupAutoStyles');
    try {
      console.log("[Setup Auto Styled Elements]");
      $('.autoIconList ul').addClass('icon-list');
      $('.autoIconList ul li').prepend('<div class="white-circle-button list-icon" aria-hidden="true"><svg version="1.1" class="circleButtonIcon-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 9.2 15.6" xml:space="preserve"><polygon fill="#494746" points="1.4,15.6 0,14.1 6.4,7.8 0,1.4 1.4,0 9.2,7.8"></polygon></svg></div>');

      if ($('.align-right.ez-embed-type-image').length > 0) {
        $('.align-right.ez-embed-type-image').parents('.article-copy').addClass('align-right-imageholder');
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('setupAutoStyles Error', error);
    }
  } //==========================
  // Setup Image Error Reloading
  //==========================
  // This attempts to reload images on 404s, a sensible number of times
  // When images are first generated it takes 10-60 seconds to sync across the cluster
  // This can result in intermittent 404s on loading these images during that time
  // In these cases the images is attempted to be reloaded
  // After a certain number of reloads the script will stop trying to load the image to prevent overflow


  setupImageErrorReloading(force = false) {
    try {
      console.log("[Setup Image Error Reloading]");
      const load_retries = 2;
      $('img').each(function () {
        var $img = $(this);
        var appsrc = $(this).data('appsrc');

        if ($img.data('autoreload-setup') != true && appsrc != "") {
          $img.on("error", function () {
            if (!$img.hasClass('lazypreload') && !$img.hasClass('load-failed')) {
              var errCnt = 1;
              var imgSrc = $img.data("src");

              if (!imgSrc || imgSrc == '') {
                imgSrc = $img.attr("src");
              }

              if (!imgSrc || imgSrc == '') {
                imgSrc = appsrc;
              }

              if ($img.data('imgErrorCount') && $img.data('imgErrorCount') != "") {
                errCnt = parseInt($img.data('imgErrorCount'));
              } else {}

              setTimeout(function () {
                if (errCnt < load_retries) {
                  console.warn("Attempting image src reload (" + errCnt + " attempts): " + imgSrc);
                  $img.data('imgErrorCount', errCnt + 1);
                  $img.removeClass('lazyload lazyautosizes lazyloaded');
                  $img.addClass('lazyload');
                } else {
                  console.warn("Image src reloading failed (" + errCnt + " attempts): " + imgSrc); //If this is an instagram block, add fail class to parents

                  if ($img.parent().hasClass('instagram-image')) {
                    $img.parents('.instagram-block').addClass('load-failed');
                  } //global.documentReady.updateLazyLoadingImages();


                  $img.removeClass('lazyautosizes lazyloaded lazyload');
                  $img.removeAttr('srcset');
                  $img.removeAttr('data-appsrc');
                  $img.removeAttr('data-srcset');
                  $img.removeAttr('data-sizes');
                  $img.removeAttr('sizes');
                  $img.addClass("load-failed");
                  $img.attr('src', imgSrc);
                }
              }, 500);
            }
          });
          $img.data('autoreload-setup', true);
        }
      });
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('setupImageErrorReloading Error', error);
    }
  } //==========================
  // Setup all Components
  //==========================


  setupComponents() {
    // global.LRBSentry.captureMessage('TM:8 setupComponents');
    try {
      console.log("[Setup Components]");
      $('.lrb-backtotop-link').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        global.utils.scrollToTop();
        return false;
      });
      global.LRBAccordion.setup();
      global.LRBModal.setup();
      global.LRBNavigation.setup();
      global.LRBPagination.setup();
      global.LRBUnlinkedDropdown.setup(); //Setup 'LRB Arrow' Links, will wrap contents in a span (for styling) if no span present

      $('.lrb-arrowlink').each(function () {
        if ($(this).find('span').length == 0) {
          $(this).wrapInner("<span></span>");
        }
      }); //Check menu classes are set correctly on Marketing / service pages

      if ($('.paperArticle-container').find('.service-subnav-holder')) {
        $('.paperArticle-container').addClass('with-submenu');
      } // Setup Paywall on Digital Edition


      global.DigitalEditionPaywall.setup();
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('setupComponents Error', error);
    }
  }

  delayedGeneralSetup() {
    if (global.utils.getCookie("LRB-KNMI") == 1) {
      $('body').addClass('konami');
    }

    setTimeout(function () {
      console.log("[Delayed General Setup]");

      try {
        global.LRBEventsLoader.setup();
        Mousetrap.bind('up up down down left right left right b a enter', function () {
          global.setupPage.toggleKNMI();
        });
        global.LRBLoaded = true;
        global.GA4.initialiseGATagTracking();
        global.LRBTracking.setupEventTracking();
        global.LRBRecaptcha.setup();
        global.LRBReadMore.setup();
        global.LRBTracking.setupDotDigital();
        setTimeout(function () {
          global.LRBAccountForms.injectSessionDataIntoHiddenFields();
        }, 200);
      } catch (error) {
        global.LRBErrorTracking.reportErrorWithFallbackMessage('delayedGeneralSetup Error', error);
      }

      try {
        window.performance.mark('app_complete');
        window.performance.measure('0_appTotalRuntime', 'js_parsed', 'app_complete');
        window.performance.measure('1_appInitTime', 'app_started', 'document_ready');
        window.performance.measure('2_DOMLoadedTime', 'app_started', 'dom_loaded');
        window.performance.measure('3_docReadyTime', 'document_ready', 'document_ready_finished');
        window.performance.measure('4_windowLoadedTime', 'app_started', 'window_loaded');
        window.performance.measure('5_pageReadyTime', 'page_ready', 'page_ready_finished');
        window.performance.measure('5a_typographyTime', 'cleanup_typography_start', 'cleanup_typography_end');
      } catch (e) {} // global.LRBSentry.captureMessage('TM: setupTracking end');

    }, 500);
  }

  toggleKNMI() {
    $('body').toggleClass('konami');

    if ($('body').hasClass('konami')) {
      global.utils.setCookie("LRB-KNMI", 1, 1);
    } else {
      global.utils.deleteCookie("LRB-KNMI");
    }
  }

  delayedTooltipSetup() {
    setTimeout(function () {
      console.log("[Setup Tooltips - Delayed]");
      global.LRBTooltip.setup(); //Anchor Link Setup

      $('.anchor-link').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const $target = $($(this).attr('href'));

        if ($target) {
          global.utils.scrollTo($target, 93, 450);
        }

        return false;
      });
    }, 1000);
  } //==========================
  // Setup auto scrolling links
  //==========================


  setupScrollLinks() {
    // global.LRBSentry.captureMessage('TM:9 setupScrollLinks');
    $('.scrollToLink').each(function () {
      var target = $(this).data('scrollto');

      if (target) {
        $(this).on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          global.utils.scrollTo($(target), 100);
          return false;
        });
      }
    });
  } //==========================
  // Setup all Modules
  //==========================


  setupModules() {
    // global.LRBSentry.captureMessage('TM:7 setupModules');
    try {
      console.log("[Setup Modules]");
      global.LRBAccessibility.setup();
      global.LRBCarousel.setup();
      global.LRBCharts.setup();
      global.LRBInstagramGrid.setup();
      global.LRBVideo.setup();
      global.LRBLightbox.setup();
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('setupModules Error', error);
    }
  } //==========================
  // Share links
  //==========================


  setupSocialShareLinks() {
    // global.LRBSentry.captureMessage('TM:12 setupSocialShareLinks');
    try {
      console.log("[Setup Social Share Links]");

      if (!global.touch) {
        // Amend social links to open in popups
        $(".blog-social-button, .social-button, .share-link").click(function (e) {
          if ($(this).hasClass('email-button') || $(this).hasClass('print-button') || $(this).hasClass('osshare-button')) {// Dont alter these links
          } else {
            e.preventDefault();
            e.stopPropagation();
            var url = $(this).attr("href");
            window.open(url, "_blank", "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=400");
          }
        });
      }

      if ($('.osshare-button').length > 0) {
        try {
          if (navigator.canShare && navigator.canShare({
            url: 'https://www.lrb.co.uk',
            text: 'lorem',
            title: 'LRB'
          }) && global.touch) {
            $('.osshare-button').show();
            $('.osshare-button').on('click', function (e) {
              e.preventDefault();
              e.stopPropagation();
              var url = document.location.href;
              const canonicalElement = document.querySelector('link[rel=canonical]');

              if (canonicalElement !== null) {
                url = canonicalElement.href;
              }

              var shareData = {
                url: url
              };
              var title = $(this).data('title');
              var text = $(this).data('text');

              if (title && title != '') {
                shareData.title = title.trim();
              }

              if (text && text != '') {
                shareData.text = text.replace(/^( - )/, "").trim();
              }

              console.log('Share URL clicked: ', shareData);
              navigator.share({
                url
              }).then(() => console.log('Share was successful.')).catch(error => global.LRBErrorTracking.error(error));
              return false;
            });
          } else {
            console.log('Your system does not support sharing files, removing share link');
            $('.osshare-button').remove();
          }
        } catch (e) {
          console.log('Your system does not support sharing files, removing share link');
          $('.osshare-button').remove();
        }
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Social Share Links', error);
    }
  }

  setupHomeImageHovers() {
    // global.LRBSentry.captureMessage('TM:10 setupHomeImageHovers');
    try {
      if (global.touch) {
        return false;
      } //hovering over image should also set hover state on the title below, done by setting class on parent
      //setup same hover for images linked in featured blocks


      $('.article-link-block--image, .grid-featured-post--imageHolder, .subjects-feature-holder .imageLink').each(function () {
        var el = $(this)[0];
        var $el = $(this);
        hoverintent(el, function () {
          $el.parent().addClass('hovering');
        }, function () {
          $el.parent().removeClass('hovering');
        });
      });
      $('.article-link-block h2 a, .grid-featured-post h2 a, .subjects-feature-holder h2 a').each(function () {
        var el = $(this)[0];
        var $el = $(this);
        hoverintent(el, function () {
          $el.parent().parent().addClass('hovering');
        }, function () {
          $el.parent().parent().removeClass('hovering');
        });
      });
      $('.block-item.other-item h2 a').each(function () {
        var el = $(this)[0];
        var $el = $(this);
        hoverintent(el, function () {
          $el.parent().parent().parent().addClass('hovering');
        }, function () {
          $el.parent().parent().parent().removeClass('hovering');
        });
      });
      $('.article-link-block .white-circle-button, .grid-featured-post .white-circle-button, .subjects-feature-holder .white-circle-button, .block-item.other-item .white-circle-button').each(function () {
        var el = $(this)[0];
        var $el = $(this);
        hoverintent(el, function () {
          $el.parent().addClass('hovering');
        }, function () {
          $el.parent().removeClass('hovering');
        });
      });
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('setupHomeImageHovers Error', error);
    }
  }

  setupComplete() {
    try {
      global.resizing.resizeHandler();
      this.setupFurtherPageSpecificCode();
      /* Track time to setup App */

      var endDate = new Date();
      var seconds = (endDate.getTime() - global.startDate.getTime()) / 1000;
      console.log("%c--App setup and ready in ".concat(seconds, " seconds--"), 'background-color: #FFFBE5;');

      if ($('body').hasClass('section-archive')) {
        setTimeout(function () {
          global.documentReady.updateLazyLoadingImages();
        }, 2000);
      } else {
        setTimeout(function () {
          global.documentReady.fixStalledLazyLoadImages();
        }, 2000);
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('setupComplete Error', error);
    }
  }

  setupFurtherPageSpecificCode() {
    try {
      console.log("[Setup Page Specific Code]");
      global.LRBArticle.setup();
      global.LRBArchive.setup();
      global.LRBContributors.setup();
      global.LRBInstitutions.setup();
      global.LRBLetters.setup();
      global.LRBCourses.setup();
      global.LRBSearch.setup();
      global.LRBToc.setup();
      global.shame.setup();
      global.setupComplete = true;
      global.resizing.resizeHandler();
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('setupFurtherPageSepcificCode Error', error);
    }

    try {
      window.performance.mark('setup_page_complete');
      window.performance.measure('6_setupPageTime', 'setup_page', 'setup_page_complete');
    } catch (e) {}
  } //If there is a hash on the URL, check if this matches an element, if so then scroll to that element


  checkUrlHash() {
    try {
      var hash = window.location.hash;

      if (hash && hash != '') {
        console.log("URL Hash found, checking for matching element: " + hash);

        if ($(hash).length) {
          global.utils.scrollTo($(hash), 150, 1);
        }
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error checking URL hash', error);
    }
  }

}

module.exports = {
  SetupPage
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/1_setup/LRBAccessibility.js":
/*!****************************************************!*\
  !*** ./assets/scripts/1_setup/LRBAccessibility.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {var Mousetrap = __webpack_require__(/*! mousetrap */ "./node_modules/mousetrap/mousetrap.js");

class LRBAccessibility {
  constructor() {}

  setup() {
    console.log('%cLRBAccessibility Setup', "background-color: ".concat(global.infoBG, ";"));
    this.setupHotkeys();
  }

  setupHotkeys() {
    // mod is equivalent to CTRL on Windows, and COMMAND on Mac
    //var accessKeys = 'mod';
    // mod conflicts with basic browser shortcuts, use alt instead
    var accessKeys = 'alt';

    if ($('html').hasClass('linux')) {
      accessKeys = 'ctrl+shift';
    } //s - Jump to article body


    Mousetrap.bind(accessKeys + '+s', function () {
      global.utils.scrollTo($('#lrb-articleCopy'), 80);
    }); //1 - Homepage

    Mousetrap.bind(accessKeys + '+1', function () {
      window.location = "/";
    }); //2 - Latest Issue

    Mousetrap.bind(accessKeys + '+2', function () {
      window.location = "/the-paper";
    }); //3 - Site Map

    Mousetrap.bind(accessKeys + '+3', function () {
      window.location = "/sitemap";
    }); //4 - Search

    Mousetrap.bind(accessKeys + '+4', function () {
      window.location = "/search-results";
    }); //5 - About

    Mousetrap.bind(accessKeys + '+5', function () {
      window.location = "/about";
    }); //8 - Terms

    Mousetrap.bind(accessKeys + '+8', function () {
      window.location = "/terms";
    }); //9 - Contact

    Mousetrap.bind(accessKeys + '+9', function () {
      window.location = "/contacts";
    }); //0 - Accessibility

    Mousetrap.bind(accessKeys + '+0', function () {
      window.location = "/accessibility";
    });
    Mousetrap.bind('mod+shift+u', function () {//global.setupPage.toggleKNMI();
    });
  }

}

module.exports = {
  LRBAccessibility
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/1_setup/LRBSessionData.js":
/*!**************************************************!*\
  !*** ./assets/scripts/1_setup/LRBSessionData.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {/*

This updates the UI of Account and Institutional login buttons in the header according to data from lrb_session cookie set in Fastly preflight
This also updates all the subscription links that are set to use a campaign code from Office admin (see updateSubscriptionCodes() for more detail)

1. setup() is triggered at the start of the app launch to load cookie immediately

2. updatePage() is triggered at the relevant point of the app loading sequence

3. updatePage() triggers updateLoginUI(), updateInstitutionalLogin() using session data loaded in setup()

4. updatePage() also triggers updateSubscriptionCodes() which uses geolocated subcodes from session data loaded in setup()

*/
const SESSION_COOKIE = 'lrb_session';
const NON_SESSION_URLS = ['/__', '/admin', '/account/check', '/login_check', '/api', '/graphql', '/lrb_assets', '/logout', '/federated', '/federated-auth', '/content/download', '/ajax', '/session']; // When session data is not available from CDN preflight, and this is a staging or dev environment, load debug preflight data

const PREFLIGHT_DEBUG_URL = '/account/preflight';

class LRBSessionData {
  constructor() {
    // Raw session cookie
    this.sessionCookie = null; // Extracted session data from session cookie

    this.sessionData = {};
    this.loggedIn = false;
    this.facebookBot = false; // Subscription codes used to update various 'Subscribe' buttons to correct locale specific campaign codes

    this.subCodes = null; // Data sent to GA4

    this.trackingData = null; // Data sent to SubX via dataLayer

    this.subXData = {
      key: 'lrb-subx',
      session_set: false,
      s_pw: true,
      referrer: {
        google: false,
        facebook: false,
        instagram: false,
        bluesky: false,
        twitter: false,
        threads: false,
        youtube: false,
        reddit: false
      }
    }; // Data sent to DotDigital via initialisation call in WBT.js

    this.ddWBTData = null;
    this.referrer = "none";
    this.userID = null;
    this.userEmail = null;
    this.userEmailChanges = []; // Temporarily force a_pw to be true

    /*this.tempForceAPWonURLs = [
        '/podcasts-and-videos/podcasts/the-belgrano-diary/*'
    ];
     // Temporarily force a_pw to be false
    this.tempUnforceAPWonURLs = [
        '/podcasts-and-videos/podcasts/the-belgrano-diary/introducing-the-belgrano-diary', // intro
        '/podcasts-and-videos/podcasts/the-belgrano-diary/half-a-million-sheep-can-t-be-wrong', // episode 1
        '/podcasts-and-videos/podcasts/the-belgrano-diary/gotcha' // episode 2
    ];*/
  }
  /* Load session cookie, set as lrb_session in Fastly preflight, values set in PreflightController */


  setup() {
    global.LRBErrorTracking.setContext('LRBSessionData Setup');
    console.log('%cLRBSessionData Setup', "background-color: ".concat(global.infoBG, ";")); // Load Session Cookie = cookie is set in preflight

    let sessionCookie = window.utils.getCookie(SESSION_COOKIE);
    let data = null;
    let scope = this; // Load Session data from cookie

    if (sessionCookie && sessionCookie != '') {
      // Parse session data from cookie
      try {
        data = JSON.parse(atob(sessionCookie));
        scope.sessionData = data;
        global.LRBSubx.sessionDataLoadComplete();

        if (data) {
          scope.handleSessionData();
        }
      } catch (e) {
        scope.handleSessionDataError('No valid session data', global.LRBErrorTracking.LEVEL.ERROR, 'production');
      }
    } else {
      if (window.envMode === "staging" || window.envMode === "development") {
        // Load preflight fallback to allow easier debugging of anything using preflight data locally and on non-CDN staging
        $.post(PREFLIGHT_DEBUG_URL).done(function (data) {
          if (data && data !== null && data !== void 0 && data.preflight_debug) {
            scope.sessionData = data;
            scope.handleSessionData();
          } else {
            console.error('Could not parse preflight debug data');
          }
        }).fail(function () {
          console.error('Could not load preflight debug data');
        }).always(function () {
          global.LRBSubx.sessionDataLoadComplete();
        });
      }
    }
  }

  handleSessionData() {
    let scope = this;

    if (this.sessionData) {
      var _this$sessionData, _this$sessionData2;

      console.log("Parsing session data", this.sessionData); // Check if logged in (used only to update UI, nothing secure / sensitive)

      try {
        this.loggedIn = this.sessionData.paywall.logged_in;
      } catch (e) {
        scope.handleSessionDataError('Cannot determine logged in state', global.LRBErrorTracking.LEVEL.ERROR, 'production', true);
      } // Check if is a Facebook bot/crawler, used to disable some tracking and error reporting


      try {
        if (this.sessionData.hasOwnProperty('facebook_bot')) {
          this.facebookBot = this.sessionData.facebook_bot;
        }
      } catch (e) {
        scope.handleSessionDataError('Cannot determine if facebook bot', global.LRBErrorTracking.LEVEL.ERROR, 'production', true);
      } // Check for subscription codes data to update UI with


      if ((_this$sessionData = this.sessionData) !== null && _this$sessionData !== void 0 && _this$sessionData.sub_codes) {
        this.subCodes = this.sessionData.sub_codes;
      } else {
        scope.handleSessionDataError('Cannot load subscription codes', global.LRBErrorTracking.LEVEL.ERROR, 'production', true);
      } // Check for tracking data for GA and other reporting endpoints


      if ((_this$sessionData2 = this.sessionData) !== null && _this$sessionData2 !== void 0 && _this$sessionData2.tracking_data) {
        this.trackingData = this.sessionData.tracking_data;
      } else {
        scope.handleSessionDataError('Cannot load tracking data', 'error', 'production', true);
      }
    }

    global.LRBErrorTracking.setPageContext();
    this.setUserData();
    this.setReferrerData();
    this.setSubXData();
    this.setDDWBTData();
    this.updatePage();

    if (this.loggedIn) {
      // Remove grid items for logged in users
      $('.grid-spot-holder').parents('.grid-item').remove();
    }
  }

  setUserData() {
    this.userEmailChanges.push('settingUserData');

    if (this.trackingData) {
      var _this$trackingData, _this$trackingData2, _this$trackingData3, _this$trackingData4;

      // Set email to Institutional Admin username, if is set and is an email (validation of an actual email will be done by matching against DD user)
      if ((_this$trackingData = this.trackingData) !== null && _this$trackingData !== void 0 && _this$trackingData.is_inst_admin) {
        var _this$trackingData$is;

        if ((_this$trackingData$is = this.trackingData.is_inst_admin) !== null && _this$trackingData$is !== void 0 && _this$trackingData$is.Username) {
          if (this.trackingData.is_inst_admin.Username.includes("@")) {
            this.userEmail = this.trackingData.is_inst_admin.Username;
            this.userEmailChanges.push('settingInstEmail');
          }
        }
      } // If a user is logged into a product account (e.g. CR+) then use that confirmed email address, takes priority over Institutional admin username


      if ((_this$trackingData2 = this.trackingData) !== null && _this$trackingData2 !== void 0 && _this$trackingData2.product_user_email) {
        this.userEmail = this.trackingData.product_user_email;
        this.userEmailChanges.push('settingProductEmail');
      } // If a user is logged into a personal subscription account then use that email address, takes priority over Institutional admin username and product user email


      if ((_this$trackingData3 = this.trackingData) !== null && _this$trackingData3 !== void 0 && _this$trackingData3.user_email) {
        this.userEmail = this.trackingData.user_email;
        this.userEmailChanges.push('settingUserEmail');
      } // If a user ID is provided then also track this, and use this as the GA4 tracking key


      if ((_this$trackingData4 = this.trackingData) !== null && _this$trackingData4 !== void 0 && _this$trackingData4.user_id) {
        this.userID = this.trackingData.user_id;
        global.GA4.setUserID(this.userID);
      }
    }
  }

  setReferrerData() {
    if (document.referrer && document.referrer != "") {
      const referrer = document.referrer.toLowerCase();
      /*
          /^              # ensure start of string
          http            # match 'http'
          s?              # 's' if it exists is okay
          :\/\/           # match '://'
          ([^\/]+\.)?     # match any non '/' chars followed by a '.' (if they exist)
          reddit\.com     # match 'reddit.com'
          (\/|$)          # match '/' or the end of the string
          /i              # match case-insenitive
      */

      const googleRegExp = new RegExp(/^https?:\/\/([^\/]+\.)?google\.c/i);
      const facebookRegExp = new RegExp(/^https?:\/\/([^\/]+\.)?facebook\.c/i);
      const instagramRegExp = new RegExp(/^https?:\/\/([^\/]+\.)?instagram\.c/i);
      const youtubeRegExp = new RegExp(/^https?:\/\/([^\/]+\.)?youtube\.c/i);
      const redditRegExp = new RegExp(/^https?:\/\/([^\/]+\.)?reddit\.c/i);
      const threadsRegExp = new RegExp(/^https?:\/\/([^\/]+\.)?threads\.c/i);
      const twitterRegExp = new RegExp(/^https?:\/\/([^\/]+\.)?t\.c/i);
      const twitterLongRegExp = new RegExp(/^https?:\/\/([^\/]+\.)?twitter\.c/i);
      const blueskyRegExp = new RegExp(/^https?:\/\/([^\/]+\.)?bsky\.app/i);

      if (googleRegExp.test(referrer)) {
        // Google
        this.subXData.referrer.google = true;
        this.referrer = "google";
      } else if (facebookRegExp.test(referrer)) {
        // Facebook
        this.subXData.referrer.facebook = true;
        this.referrer = "facebook";
      } else if (instagramRegExp.test(referrer)) {
        // Instagram
        this.subXData.referrer.instagram = true;
        this.referrer = "instagram";
      } else if (youtubeRegExp.test(referrer)) {
        // Youtube
        this.subXData.referrer.youtube = true;
        this.referrer = "youtube";
      } else if (redditRegExp.test(referrer)) {
        // Reddit
        this.subXData.referrer.reddit = true;
        this.referrer = "reddit";
      } else if (threadsRegExp.test(referrer)) {
        // Threads
        this.subXData.referrer.threads = true;
        this.referrer = "threads";
      } else if (twitterRegExp.test(referrer) || twitterLongRegExp.test(referrer)) {
        // Twitter
        this.subXData.referrer.twitter = true;
        this.referrer = "twitter";
      } else if (blueskyRegExp.test(referrer)) {
        // Bluesky
        this.subXData.referrer.bluesky = true;
        this.referrer = "bluesky";
      } // Additional check for Bluesky app based on UTM referrer


      if (window.location.search && window.location.search.includes('utm_source=bluesky')) {
        this.subXData.referrer.bluesky = true;
        this.referrer = "bluesky";
      }

      this.setDDWBTData();
    }
  }

  setSubXData() {
    let scope = this; // Check for tracking data for SubX

    try {
      if (this.trackingData) {
        // Duplicate and merge trackingData into subXData
        // subXData will change and alter values
        // but trackingData should remain the same for sending to GA
        this.subXData = { ...this.subXData,
          ...this.trackingData
        };
        this.subXData.session_set = true;
      }
    } catch (e) {
      scope.handleSessionDataError('Cannot load SubX Data', 'error', 'production', true);
    } // Merge in content data if set from metadatacontroller


    this.subXData.content = {};

    if (window.lrbContentData) {
      // Duplicate lrbContentData
      // subXData will change and alter values
      // lrbContentData may be referenced in future or checked for debug
      this.subXData.content = { ...window.lrbContentData
      }; // Check for URLs that should be forced to have APW enabled
      // If a wildcard is at the end of the URL then all child pages will have APW enabled (but not the parent)

      /*for (let i = 0; i < this.tempForceAPWonURLs.length; i++) {
          let forcedUrl = this.tempForceAPWonURLs[i];
          let wildcardUrl = false;
          if (forcedUrl.endsWith('*')) wildcardUrl = true;
          forcedUrl = forcedUrl.replace('*','');
           if(window.location.pathname.includes(forcedUrl)){
              // Check if the forcedUrl ends with a wildcard character
              if(wildcardUrl){
                  // This is a wildcard URL, so should only to URLs that are children of this folder
                  const childURL = window.location.pathname.replace(forcedUrl,'').replace('/','');
                  if(childURL.length > 0){
                      this.subXData.content.apw = true;
                  }
              }else{
                  this.subXData.content.apw = true;
              }
          }
      }
       // Make any temporary un-force of a_pw based on URLs
      for (let i = 0; i < this.tempUnforceAPWonURLs.length; i++) {
          const unforcedUrl = this.tempUnforceAPWonURLs[i];
          if(window.location.pathname.includes(unforcedUrl)){
              this.subXData.content.apw = false;
          }
      }*/
      // apw is addtional_paywall - notes that this page should be elligible for paywall
      // forces s_pw to be true to ensure SubX picks up that this should be considered for paywall in all cases
      // without forcing s_pw we see inconsistent application of Blog paywall on SubX's side
      // So setting s_pw true here for stability of paywall on non-article pages

      if (this.subXData.content.hasOwnProperty('apw')) {
        if (this.subXData.content.apw) {
          this.subXData.a_pw = true;
          this.subXData.s_pw = true;
        }

        delete this.subXData.content.apw;
      } // Check for paywall overrides
      // opw is override_and_hide_paywall - notes that the paywall should never be displayed on this page


      if (this.subXData.content.hasOwnProperty('opw')) {
        this.subXData.o_pw = this.subXData.content.opw;

        if (this.subXData.o_pw) {
          // enforce this due to inconsistent results from SubX's implementation
          this.subXData.a_pw = false;
          this.subXData.s_pw = false;
        }

        delete this.subXData.content.opw;
      } // fpw is fallback_paywall - subx should not be used at all for paywall, and our own internal fallback paywall used and enabled immediately
      // Sets subx paywall values to false


      if (this.subXData.content.hasOwnProperty('fpw')) {
        if (this.subXData.content.fpw) {
          this.subXData.a_pw = false;
          this.subXData.s_pw = false;
          this.subXData.o_pw = false;
          this.subXData.f_pw = true;
        }

        delete this.subXData.content.fpw;
      } // Cleanup subject strings


      if (this.subXData.content.hasOwnProperty('category')) {
        this.subXData.content.category = this.subXData.content.category.replace("&amp;", "&");
      }
    } // Internal paywall checks


    global.DigitalEditionPaywall.checkDigitalPaywall();
    global.LRBPaywall.checkFallbackPaywall();
    global.LRBPaywall.checkForcedPaywallDisplay(); // Set article type if present

    var articleTypeMeta = document.querySelector("meta[property='article:type']");

    if (articleTypeMeta) {
      var articleType = articleTypeMeta.getAttribute("content");

      if (articleType && articleType != '') {
        this.subXData.content.article_type = articleType;
      }
    } // Set content type for SubX to determine where to apply the paywall by default: 'Article'


    this.subXData.content.content_type = global.LRBTracking.getPageGroup(); // Check for courses pages

    if (this.subXData.content.content_type == global.LRBTracking.contentGroups.COURSES) {
      this.subXData.s_pw = false;
    } // If SubX is not enabled then do not send data to datalayer
    // SubX JS is also not loaded if this value is not true
    // SubX data in window.LRBSessionData.subXData will still be accessible for debug


    if (!window.subxenabled) {
      return false;
    }

    global.LRBDataLayer.pushData(this.subXData);
  } // Set data for DotDigital Web Behaviour Tracking / Insights


  setDDWBTData() {
    this.ddWBTData = { ...window.LRBSessionData.trackingData,
      ...window.lrbContentData,
      content_type: global.LRBTracking.getPageGroup(),
      referrer: this.referrer
    };
    global.WBT.updateTrackedData();
  }

  handleSessionDataError(error, severity = "error", env = null, avoidIntranet = false) {
    var skipError = false;
    var reason = ''; // Do not report session errors on URLs that do not get sessions set in Preflight (lrb_preflight.vcl)

    if (this.checkIfNonSessionUrl()) {
      skipError = true;
      reason = ' (no session set on this URL)';
    }

    if (!skipError) {
      global.LRBErrorTracking.captureMessage(error, severity, env, avoidIntranet);
    } else {
      console.error(error);
      console.log('Not reporting error to ErrorTracking' + reason, error);
    }
  }

  checkIfNonSessionUrl(url) {
    if (!url) {
      url = window.location.href;
    } // Check if page is a on a list of URLs that do not get sessions set in Preflight (lrb_preflight.vcl)


    var ignoreUrl = false;

    for (var i = 0; i < NON_SESSION_URLS.length; i++) {
      const nonSessionUrl = NON_SESSION_URLS[i];

      if (url.toLowerCase().includes(nonSessionUrl.toLowerCase())) {
        ignoreUrl = true;
      }
    }

    return ignoreUrl;
  }
  /* Update UI logged in states based on session cookie */


  updatePage(dataOverride = null) {
    global.LRBErrorTracking.setContext('LRBSessionData updatePage');
    let data = null;
    let scope = this; // Overwrite session data from object if present and not in production, used for debug purposes

    if (dataOverride && window.envMode != "production") {
      data = JSON.parse(dataOverride);
    } else {
      data = global.LRBSessionData.sessionData;
    }

    global.LRBErrorTracking.setPageContext();

    try {
      scope.updateInstitutionalLogin(data);
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('updateInstitutionalLogin Error', error);
    }

    try {
      scope.updateLoginUI();
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('updateLoginUI Error', error);
    }

    try {
      scope.updateSubscriptionCodes();
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('updateSubscriptionCodes Error', error);
    }
  }
  /*  Update account login UI buttons according to session state */


  updateLoginUI() {
    if (global.LRBSessionData.loggedIn === true) {
      /* Logged in */
      // My Account button
      $('#header-my-account').show().attr('aria-hidden', false);
      $('#header-sign-in').hide().attr('aria-hidden', true);
      $('.header-container').addClass('logged-in'); // Sidenav logged in button

      $('.subnavlink-loggedIn').show();
      $('.subnavlink-loggedOut').remove(); // In this issue block

      $('.in-this-issue-links #issue-read').css('display', 'block').attr('aria-hidden', false);
      $('.in-this-issue-links #issue-login').hide().attr('aria-hidden', true); // Account links

      $('#account-links .account-links-myaccount').css('display', 'block').attr('aria-hidden', false);
      $('#account-links .account-links-login').hide().attr('aria-hidden', true); // Sitemap links

      $('#sitemap-block-links #sitemap-myaccount').show().attr('aria-hidden', false);
      $('#sitemap-block-links #sitemap-logout').show().attr('aria-hidden', false);
      $('#sitemap-block-links #sitemap-login').hide().attr('aria-hidden', true);
      $('.header-container').addClass('logged-in');
      $('.lrb-content-container, html').addClass('logged-in');
      /* End Logged in */
    } else {
      /* Logged out */
      $('#header-sign-in').show().attr('aria-hidden', false);
      /* End Logged out */
    }
  }
  /*  Update institutional login UI buttons according to session state - data is lrb_session cookies passed from updatePage() */


  updateInstitutionalLogin(data) {
    if (data) {
      // Set the Institutional access banner; i.e. 'Your access is being provided by the LRB' shown at the top of the main navigation

      /* Inst Access Banner */
      if (data.Inst) {
        if (data.Inst.hasOwnProperty('Organisation')) {
          // Institution Organisation is set, so show the banner
          let message = "".concat(data.Inst.Organisation, " doesn't have a valid subscription");

          if (data.Inst.Licences) {
            // Institution has a valid licence, update message as such
            message = "Your access is being provided by ".concat(data.Inst.Organisation);
          }

          $('.access-notification').text(message);
        }
      }
      /* End Inst Access Banner */
      // Update Institutional access links according to admin login state

      /* Inst Access Links */


      if (data.hasOwnProperty('institutional_access')) {
        if (data.institutional_access.institutionAdmin) {
          // Logged in as admin
          $('#institution_admin_logged_in').show().attr('aria-hidden', false);
        } else {
          // Not logged in as admin
          $('#institution_admin_logged_out').css('display', 'inline-block').attr('aria-hidden', false);
        }
      }
      /* End Inst Access Links */

    } else {
      // Institutional data not set, clean up UI

      /* Missing Inst Data */
      $('#institution_admin_logged_out').css('display', 'inline-block').attr('aria-hidden', false);
      console.info('Cannot update InstUI - missing data');
      /* End Missing Inst Data */
    }
  }
  /* Update subscription URLs with geolocated URL, including campaign codes set in Office admin */


  updateSubscriptionCodes() {
    global.LRBErrorTracking.setContext('LRBSessionData updateSubscriptionCodes');
    let scope = this; // Load subscription codes - returns sub codes according to geo location

    console.log('Checking for subscription links...');
    var data = this.subCodes;

    if (!data) {
      console.info('Loading fallback subcodes...');
      var url = '/ajax/sub-codes';

      if (!window.location.origin.includes('lrb.co.uk') && !window.location.origin.includes('lrb-intranet')) {
        url = 'https://www.lrb.co.uk/ajax/sub-codes';
      }

      $.getJSON(url, function () {}).done(function (fallbackData) {
        console.log('FBD', fallbackData);

        if (fallbackData) {
          data = fallbackData;
        } else {
          console.error("Could not load fallback subcodes"); //global.LRBErrorTracking.captureMessage("Could not load fallback subcodes",global.LRBErrorTracking.LEVEL.ERROR,'production',true);
        }
      }).fail(function (e) {
        // Error loading '/ajax/sub-codes'
        var error = "Fallback subcodes error";
        console.log(error); //global.LRBErrorTracking.captureMessage(error,global.LRBErrorTracking.LEVEL.ERROR,'production',true);
      }).always(function () {
        // handle subs data after XHR complete
        console.log('Using dynamically loaded Subscription codes...');
        scope.handleSubscriptionCodeData(data);
      });
    } else {
      // handle preflight passed subs data
      console.log('Using preflight Subscription codes...');
      scope.handleSubscriptionCodeData(data);
    }

    global.LRBErrorTracking.setPageContext();
  }

  handleSubscriptionCodeData(data) {
    if (data) {
      var subLinks = $('a.js-subLink');

      if (subLinks && subLinks.length > 0) {
        /* Handle sub-codes data */
        console.log("Subscription Codes loaded", data); // Update subscription code link hrefs to geo located ones from loaded data
        // Looks through all a link tags with class '.js-subLink', and matches campaign codes from Office admin based on data-cid on that link tag

        subLinks.each(function () {
          var subLink = $(this);
          var campaignID = subLink.data('cid');
          var subCodeURL = ''; // If USCA is defined then this is a USCA user, so set all sub URLs to that one
          // Otherwise set to the matching campaign ID to get codes as set in Office admin

          if (campaignID && campaignID != '' && data.hasOwnProperty(campaignID)) {
            subCodeURL = data[campaignID];
          } // if subCodeURL not set from data then try to set to fallback URL from data


          if (subCodeURL == '' && data.hasOwnProperty('fallback_url')) {
            if (data['fallback_url'] && data['fallback_url'] != '') {
              subCodeURL = data['fallback_url'];
            }
          }

          console.log('Checking for subcode URL for campaign ID ' + campaignID + ' -- ' + subCodeURL); // If a new URL is set for this link (either from geo location, or a campaign code in Office admin) then update the href

          if (subCodeURL) {
            subLink.attr('href', subCodeURL);
          } else {
            console.error("Could not find subcode: " + campaignID);
            global.LRBErrorTracking.captureMessage("Could not find subcode: " + campaignID, global.LRBErrorTracking.LEVEL.ERROR, 'production', true);
          }
        });
        /* End Handle sub-codes data */
      }
    }
  }
  /* Debug methods for testing updatePage() locally without Fastly preflight cookie */

  /*dummyLogin(){
      var data = {
          "paywall":{
              "subscribed":true,
              "type":"Temporary Access (Subscription Pending)",
              "expires":null,
              "article_access":"temp",
              "sub_system":"TEMP",
              "logged_in":true
          },
          "Inst":null,
          "institutional_access":{
              "organisation":false,
              "institutionAdmin":false,
              "institutionAccess":"",
              "ga_organisation":""
          }
      };
      this.updatePage(JSON.stringify(data));
  }
   dummyInstLoginExpired(){
      var data = {
          "paywall":{
              "subscribed":true,
              "type":"Temporary Access (Subscription Pending)",
              "expires":null,
              "article_access":"temp",
              "sub_system":"TEMP",
              "logged_in":true
          },
          "Inst":{
              "Organisation":'Testing'
          },
          "institutional_access":{
              "organisation":false,
              "institutionAdmin":false,
              "institutionAccess":"",
              "ga_organisation":""
          }
      };
      this.updatePage(JSON.stringify(data));
  }
  dummyInstLogin(){
      var data = {
          "paywall":{
              "subscribed":true,
              "type":"Temporary Access (Subscription Pending)",
              "expires":null,
              "article_access":"temp",
              "sub_system":"TEMP",
              "logged_in":true
          },
          "Inst":{
              "Organisation":'Testing',
              "Licences":true
          },
          "institutional_access":{
              "organisation":false,
              "institutionAdmin":false,
              "institutionAccess":"",
              "ga_organisation":""
          }
      };
      this.updatePage(JSON.stringify(data));
  }*/


}

module.exports = {
  LRBSessionData
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/1_setup/LRBTypography.js":
/*!*************************************************!*\
  !*** ./assets/scripts/1_setup/LRBTypography.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {var typogr = __webpack_require__(/*! typogr */ "./node_modules/typogr/typogr.js");

class LRBTypography {
  constructor() {
    this.typogrified = false;
    this.autoSplitLink_1 = '<a href="#Read-More" class="lrb-readmorelink" data-readmore-target="';
    this.autoSplitLink_2 = '"></a>';
  }

  setup() {
    console.log('%cLRBTypography Setup', "background-color: ".concat(global.infoBG, ";"));
  } //==========================
  // Setup auto split text elements (splits out first paragraph and adds readmore link)
  //==========================


  setupAutoSplit() {
    // global.LRBSentry.captureMessage('TM:2 setupAutoSplit');
    let scope = this;

    if ($('.lrb-autosplit').length > 0) {
      console.log("[Setup Auto Split]");
      $('.lrb-autosplit:not(.lrb-t-sas) .ezrichtext-field').children().unwrap();
      $('.lrb-autosplit:not(.lrb-t-sas)').each(function () {
        $(this).addClass('lrb-t-sas');
        var elClassList = "." + $(this).attr('class').split(" ").join(".");

        if ($(this).children().length > 1) {
          var readMoreLink = scope.autoSplitLink_1 + elClassList + " .lrb-autosplit-hide" + scope.autoSplitLink_2;
          $(this).children().not(':first-child').wrapAll('<div class="lrb-autosplit-hide"></div>');
          $(this).after(readMoreLink);
        } else {
          console.warn("[Auto Split] Skipping: only one child element of " + elClassList);
        }
      });
    }
  } //==========================
  // Clean up typography
  //==========================


  cleanUpTypography() {
    // global.LRBSentry.captureMessage('TM:3 setupAutoSplit');
    try {
      window.performance.mark('cleanup_typography_start');
    } catch (e) {}

    this.cleanupTitles();
    this.cleanupPullquotes();
    this.cleanupSitemapHeader();
    this.cleanupTOC();
    this.cleanupForms();
    this.typogrify();
    this.cleanupTypeFurniture();
    this.cleanupArticleCopy();
    this.cleanupEllipses();
    this.cleanupEmojis();
    this.cleanupRedactedDisplay();
    this.markupDropcapParagraphs();

    try {
      window.performance.mark('cleanup_typography_end');
    } catch (e) {}

    this.typogrified = true;
  }

  typogrify() {
    //Typogrify
    $('.typogrify:not(.lrb-t-t), .smartquotes:not(.lrb-t-t), .article-reviewed-item-title:not(.lrb-t-t), .article-reviewed-item-subtitle:not(.lrb-t-t), .toc-item span.by:not(.lrb-t-t)').each(function () {
      if ($(this) && $(this).html()) {
        $(this).addClass('lrb-t-t').html(typogr($(this).html()).chain().caps().amp().initQuotes().smartypants().ord().value());
      }
    }); //Auto capitalise cases of LRB caps

    $('.caps:not(.lrb-auto-caps)').each(function () {
      if ($(this).html() == "LRB") {
        $(this).addClass('lrb-auto-caps');
      }
    });
  }

  cleanupForms() {
    //Set label required field, and add class to matching field
    $('label').each(function () {
      if ($(this).html().split('[*]').length > 1) {
        $(this).html($(this).html().replace("[*]", '<span class="required-marker">*</span>'));
        $('#' + $(this).attr('for')).addClass('forceRequired');
      }
    });
  }

  cleanupTOC() {
    // Strip out item-meta from TOC listings so that typogrify will work and wrap widows
    $('.toc-item span.by .item-meta').remove(); // Clean up trailing commas after item-meta removal

    $('.toc-item span.by:not(.lrb-t-ctoc)').each(function () {
      $(this).addClass('lrb-t-ctoc').text($(this).text().replace(/,\s*$/, ""));
    }); //Clean out unwanted br tags from 'contributor-list--item > article-reviewed-item'

    $('.contributor-list--item .article-reviewed-item br').remove(); //Set Symposium People names to not break over lines

    $('.symposium-people a:not(.lrb-t-ctoc)').each(function () {
      $(this).addClass('lrb-t-ctoc').html($(this).html().replace(" ", "&nbsp;"));
    }); //Ensure TOC items have full-stops removed

    $('.toc-item .article-reviewed-item-title:not(.lrb-t-ctocfs), .toc-item .article-reviewed-item .by:not(.lrb-t-ctocfs)').each(function () {
      $(this).addClass('lrb-t-ctocfs');
      var str = $(this).html(); //remove trailing spaces

      if (str[str.length - 1] === " ") {
        str = str.slice(0, -1);
      } //remove fullstop if it exists


      if (str[str.length - 1] === ".") {
        str = str.slice(0, -1);
      } //check last characters before i/meta tags


      if (str.split("<i").length > 1) {
        var splitString = str.split("<i"); //remove trailing spaces

        if (splitString[0][splitString[0].length - 1] === " ") {
          splitString[0] = splitString[0].slice(0, -1);
        } //remove fullstop if it exists


        if (splitString[0][splitString[0].length - 1] === ".") {
          splitString[0] = splitString[0].slice(0, -1);
        }

        str = splitString.join('<i');
      }

      $(this).html(str);
    });
  }

  cleanupSitemapHeader() {
    $('.sitemap-header:not(.lrb-t-csh)').each(function () {
      $(this).addClass('lrb-t-csh');
      $(this).html($(this).html().replace(/London Review of Books/g, "<em>London&nbsp;Review&nbsp;of&nbsp;Books</em>"));
      $(this).html($(this).html().replace(/<em><em>/g, "<em>"));
      $(this).html($(this).html().replace(/<\/em><\/em>/g, "</em>"));
    });
  }

  cleanupArticleCopy() {
    //Cleanup spaces in dropcaps
    $('#lrb-articleCopy .smallcapslede:not(.lrb-t-cac)').each(function () {
      $(this).addClass('lrb-t-cac').html($(this).html().replace("&nbsp;", "<span class='nbsp'>&nbsp;</span>"));
    }); //Cleanup author names in Article title overlay

    $('.article-title-overlay .article-title-overlay--title .authorName a:not(.lrb-t-cac)').each(function () {
      $(this).addClass('lrb-t-cac').html($(this).html().replace(' ', '&nbsp;'));
    }); // Fix unnamed videos

    $('.article-videos iframe:not(.lrb-t-cac)').each(function () {
      $(this).addClass('lrb-t-cac');

      if ($(this).attr('title') == undefined || $(this).attr('title') == "") {
        $(this).attr('title', 'Article Video');
      }
    });
  }

  cleanupRedactedDisplay() {
    //Adds a redacted placeholder with text '[redacted]' before the visually redacted element, and hides this
    //This means if a user copies and pastes text they get '[redacted]' rather than nothing
    $('#lrb-articleCopy p:not(.lrb-t-r), h1:not(.lrb-t-r), h2:not(.lrb-t-r), h3:not(.lrb-t-r), h4:not(.lrb-t-r), h5:not(.lrb-t-r), h6:not(.lrb-t-r)').each(function () {
      $(this).addClass('lrb-t-r').html($(this).html().replace(/<span class="redacted">/g, '<span class="redacted-placeholder">[redacted]</span><span class="redacted">'));
    });
  }

  cleanupTitles() {
    //Wrap ampersands, Cleanup quotes,
    //Run smartypants (Straight quotes, Backticks-style quotes, Dashes, Ellipses),
    //Wrap number suffixes
    $('h1,h2,h3,h4,h5,h6').each(function () {
      //Cleanup erroneous double single quotes in titles
      $(this).html($(this).html().replace(/‘‘/g, '‘'));
      $(this).html($(this).html().replace(/’’/g, '’'));
      $(this).html(typogr($(this).html().trim()).chain().caps().amp().initQuotes().smartypants().ord().value());
    });
    $('.lrb-arrowlink').each(function () {
      $(this).html($(this).html().replace(/LRB/g, '<em>LRB</em>'));
    }); //check for easy/safe widow fixes:
    //if second to last word is 1 - 2 chars then add non breaking space
    //checks for wrapping a tag within title

    $('.cleanTitles').find('h1:not(.lrb-t-ct),h2:not(.lrb-t-ct),h3:not(.lrb-t-ct),h4:not(.lrb-t-ct),h5:not(.lrb-t-ct),h6:not(.lrb-t-ct), h1 a:not(.lrb-t-ct), h2 a:not(.lrb-t-ct), .standfirst:not(.lrb-t-ct), .grid-item:not(.lrb-t-ct)').each(function () {
      $(this).addClass('lrb-t-ct');
      var hWords = $(this).html().trim().split(" ").filter(Boolean); //only proceed for titles longer than 3 words

      if (hWords.length > 3) {
        var end = hWords.pop();

        if (end == "</a>" || end == "</span>") {
          //last word is a link tag, grab next
          var realEnd = hWords.pop(); //if previous word is 1 - 2 chars, then de-widow

          if (hWords[hWords.length - 1].length < 3) {
            $(this).html(hWords.join(' ') + "&nbsp;" + realEnd + end);
          }
        } else {
          //if previous word is 1 - 2 chars, then de-widow
          if (hWords[hWords.length - 1].length < 3) {
            $(this).html(hWords.join(' ') + "&nbsp;" + end);
          }
        }
      }
    }); //Swap title hyphens to non-breaking hyphens

    $('h1 .ezstring-field:not(.lrb-t-cth),h2 .ezstring-field:not(.lrb-t-cth),h3 .ezstring-field:not(.lrb-t-cth),h4 .ezstring-field:not(.lrb-t-cth),h5 .ezstring-field:not(.lrb-t-cth),h6 .ezstring-field:not(.lrb-t-cth)').each(function () {
      $(this).addClass('lrb-t-cth');
      var words = $(this).html().split(" "),
          i = 0;
      var amended = false;

      for (i; i < words.length; i++) {
        if (words[i].indexOf('-') > 0 || words[i].indexOf('-') > 0) {
          words[i] = '<span class="hyphenated">' + words[i] + '</span>';
          amended = true;
        }
      }

      if (amended) {
        $(this).html(words.join(' '));
      }
    });
  }

  cleanupPullquotes() {
    $('.pullquote-block .dropcap:not(.lrb-t-cp), .subject-pullquote .dropcap:not(.lrb-t-cp), .subject-more .block-item .dropcap:not(.lrb-t-cp), .pullquote-block .dropcaps:not(.lrb-t-cp), .subject-pullquote .dropcaps:not(.lrb-t-cp), .subject-more .block-item .dropcaps:not(.lrb-t-cp), .pullquote-block .smallcapslede:not(.lrb-t-cp), .subject-pullquote .smallcapslede:not(.lrb-t-cp), .subject-more .block-item .smallcapslede:not(.lrb-t-cp)').each(function () {
      $(this).addClass('lrb-t-cp').contents().unwrap();
    });
  }

  cleanupTypeFurniture(targetEl = null) {
    if (targetEl) {
      this.cleanupEllipses(targetEl);
    }

    this.cleanupDates();
  }

  cleanupDates() {
    $('.cleanDate:not(.lrb-t-cd)').each(function () {
      $(this).addClass('lrb-t-cd'); //Remove triling :00 from times in dates

      $(this).html($(this).html().replace(":00", "")); //Remove widows on event dates

      $(this).html(typogr($(this).html()).chain().widont().value());
      $(this).html($(this).html().replace("pm", "&nbsp;p.m."));
    });
  }

  cleanupEmojis() {
    var content = $('.lrb-content-container:not(.lrb-t-e)');

    if (content.length > 0) {
      const emojiRegex = /\p{Extended_Pictographic}/ug;
      content.addClass('lrb-t-e');

      if (emojiRegex.test($('.lrb-content-container').text())) {
        // Emojis found in content container, load Emoji parsing library and convert to images
        try {
          // Load Emoji Parser library
          var a = document.createElement("script");
          a.type = "text/javascript";
          a.setAttribute("async", "true");
          a.setAttribute("data-cmp-vendor", "c73437");
          a.setAttribute("data-cmp-ab", "1");
          a.crossOrigin = 'anonymous';
          a.src = "https://cdn.jsdelivr.net/npm/@twemoji/api@latest/dist/twemoji.min.js"; // Handle errors to cope with CDN issues

          a.onerror = function () {
            console.error('Failed to load Emoji Parser');
          }; // Once loaded parse emoji characters to PNG


          a.onload = function () {
            try {
              twemoji.parse($('.lrb-content-container')[0]);
            } catch (e) {
              console.error(e);
            }
          }; // Add script to page


          var b = document.getElementsByTagName("script")[0];
          b.parentNode.insertBefore(a, b);
        } catch (e) {
          console.error(e);
        }
      }
    }
  }

  markupDropcapParagraphs() {
    $('.article-copy p:not(.lrb-t-mdp)').each(function () {
      $(this).addClass('lrb-t-mdp');

      if ($(this).find('.dropcaps, .dropcap').length > 0) {
        $(this).addClass('has-dropcap');
      }
    });
  }

  cleanupEllipses(targetEl = '.typogrify, .ellipsis, h1,h2,h3,h4,h5,h6, #lrb-blog-prevpost .pullquote, #lrb-blog-nextpost .pullquote') {
    const segments = targetEl.split(',');
    const resultSegments = segments.map(segment => ":not(.lrb-t-ce)".concat(segment.trim()));
    targetEl = resultSegments.join(',');
    global.LRBErrorTracking.setContext('LRBTypography cleanupEllipses'); //Swap ellipsis for and spaced dots for correctly LRB formatted spaced dots

    if (targetEl && $(targetEl).length > 0) {
      $(targetEl).each(function () {
        $(this).addClass('lrb-t-ce');
        var chunk = $(this).html(); // The order of these is important, be cautious when editing please
        // Replace various versions of ellipses to ...
        //concatenated version of 4 lines below

        chunk = chunk.replace(/&hellip;|\u2026|…|<span class="ellipsis">.&nbsp;.&nbsp;.<\/span>/g, "...");
        /*$(this).html($(this).html().replace(/&hellip;/g,"..."));
        $(this).html($(this).html().replace("\u2026","..."));
        $(this).html($(this).html().replace(/…/g,"..."));
        $(this).html($(this).html().replace('<span class="ellipsis">.&nbsp;.&nbsp;.</span>',"..."));*/
        // Cleanup preceeding punctuation before ...
        //concatenated version of 10 lines below

        chunk = chunk.replace(/( |&nbsp;+|,|;|\.( )?)\.\.\./g, "...");
        /*$(this).html($(this).html().replace(/ \.\.\./g,"..."));
        $(this).html($(this).html().replace(/&nbsp;\.\.\./g,"..."));
        $(this).html($(this).html().replace(/&nbsp;&nbsp;\.\.\./g,"..."));
        $(this).html($(this).html().replace(/,\.\.\./g,"..."));
        $(this).html($(this).html().replace(/;\.\.\./g,"..."));
        $(this).html($(this).html().replace(/\. \.\.\./g,"..."));
        $(this).html($(this).html().replace(/\.\.\.\./g,"..."));*/
        // Doublecheck and reformat to correct spacing

        /*$(this).html($(this).html().replace(/ \.\.\./g,"..."));
        $(this).html($(this).html().replace(/&nbsp;\.\.\./g,"..."));
        $(this).html($(this).html().replace(/&nbsp;&nbsp;\.\.\./g,"..."));*/
        // Format to LRB house style ellipsis

        chunk = chunk.replace(/\.\.\./g, "<span class='ellipsis'><nobr>&nbsp;<span class='ellipsis-dot'>.</span><span class='ellipsis-dot'>.</span><span class='ellipsis-dot'>.</span></nobr></span>");
        $(this).html(chunk);
      });
    }

    global.LRBErrorTracking.setPageContext();
  }

}

module.exports = {
  LRBTypography
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/1_setup/Utilities.js":
/*!*********************************************!*\
  !*** ./assets/scripts/1_setup/Utilities.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {class Utilities {
  constructor() {} //==========================
  // Check for emojis
  //==========================


  isEmoji(str) {
    if (str.match("(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c\ude32-\ude3a]|[\ud83c\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])")) {
      return true;
    } else {
      return false;
    }
  }

  updateURL(href) {
    if (history && history.pushState && href) {
      history.pushState(null, null, href);
    }
  }

  updateTitle(title) {
    if (title) {
      document.title = title;
    }
  }

  scrollToTop(t, el = 'html') {
    if (!$(el).hasClass('scrollingToTop')) {
      console.log('[Scroll To Top]');
      var nt = t;

      if (!nt || nt <= 0) {
        nt = 800;
      }

      $(el).addClass('scrollingToTop');
      $(el).animate({
        scrollTop: 0
      }, nt, "swing", function () {
        $(el).removeClass('scrollingToTop');
      });
    }
  }

  scrollTo(jQueryElement, offset = 0, t = 800) {
    console.log('scrolling:');
    console.log(jQueryElement && jQueryElement.length > 0);

    if (jQueryElement && jQueryElement.offset()) {
      try {
        $('html, body').animate({
          scrollTop: jQueryElement.offset().top - offset
        }, t);
      } catch (e) {
        global.LRBErrorTracking.error(e);
      }
    }
  }

  escapeHTML(unsafe) {
    let div = document.createElement('div');
    div.innerText = unsafe;
    return div.innerHTML;
  }

  unescapeHTML(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  showElement(el, display = '') {
    if (!el) return;
    el.style.display = display;
    el.setAttribute('aria-hidden', 'false');
  }

  hideElement(el, display = 'none') {
    if (!el) return;
    el.style.display = display;
    el.setAttribute('aria-hidden', 'true');
  } //trigger something at a const max rate
  //const myHandler = (event) => // do something with the event
  //const tHandler = throttled(200, myHandler);
  //domNode.addEventListener("mousemove", tHandler);


  throttled(delay, fn) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();

      if (now - lastCall < delay) {
        return;
      }

      lastCall = now;
      return fn(...args);
    };
  } //trigger something only once interaction is stopped, e.g. typing
  //const myHandler = (event) => // do something with the event
  //const dHandler = debounced(200, myHandler);
  //domNode.addEventListener("input", dHandler);


  debounced(delay, fn) {
    let timerId;
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }

      timerId = setTimeout(() => {
        fn(...args);
        timerId = null;
      }, delay);
    };
  }

  interval(func, wait, times) {
    var interv = function (w, t) {
      return function () {
        if (typeof t === "undefined" || t-- > 0) {
          setTimeout(interv, w);

          try {
            func.call(null);
          } catch (e) {
            t = 0; //throw e.toString();
          }
        }
      };
    }(wait, times);

    setTimeout(interv, wait);
  }

  setupClearFocusForms() {
    $(".clearMeFocus").focus(function () {
      if ($(this).val() == $(this).attr("title")) {
        $(this).val("");
      }
    });
    $(".clearMeFocus").blur(function () {
      if ($(this).val() == "") {
        $(this).val($(this).attr("title"));
      }
    });
  }

  getMaxHeight(el, outerHeight = false, padding = false) {
    var maxHeight = 0;

    if (outerHeight) {
      if (padding) {
        maxHeight = Math.max.apply(null, el.map(function () {
          return $(this).outerHeight(true);
        }).get());
      } else {
        maxHeight = Math.max.apply(null, el.map(function () {
          return $(this).outerHeight();
        }).get());
      }
    } else {
      maxHeight = Math.max.apply(null, el.map(function () {
        return $(this).height();
      }).get());
    }

    return maxHeight;
  }

  updateSizeRefs() {
    //Update size references
    if (typeof window.innerWidth === 'number') {
      //Non-IE
      global.viewportWidth = window.innerWidth;
      global.viewportHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
      //IE 6+ in 'standards compliant mode'
      global.viewportWidth = document.documentElement.clientWidth;
      global.viewportHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
      //IE 4 compatible
      global.viewportWidth = document.body.clientWidth;
      global.viewportHeight = document.body.clientHeight;
    }
  }

  measureScrollBarWidth() {
    var scrollDiv1 = document.createElement("div");
    var scrollDiv2 = document.createElement("div");
    scrollDiv1.className = "scrollbar-measure";
    document.body.appendChild(scrollDiv1);
    scrollDiv1.appendChild(scrollDiv2);
    scrollDiv1.style.height = "40px";
    scrollDiv2.style.height = "100px";
    global.scrollbarWidth = scrollDiv1.offsetWidth - scrollDiv2.offsetWidth;
    document.body.removeChild(scrollDiv1);
  }

  getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
  }

  setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
  }

  deleteCookie(name) {
    this.setCookie(name, '', -1);
  }

  getSanitisedURL() {
    return window.location.origin + window.location.pathname;
  }

  getURLParam(name) {
    var urlParam = new URLSearchParams(window.location.search).get(name);

    if (urlParam && urlParam != "") {
      return urlParam;
    } else {
      return "";
    }
  }

  getURLHash() {
    var urlHash = window.location.hash;

    if (urlHash && urlHash != "") {
      return urlHash;
    } else {
      return "";
    }
  }

  detectBot(userAgent) {
    const robots = new RegExp([/bot/, /spider/, /crawl/, // GENERAL TERMS
    /apis-google/, /adsbot/, /googlebot/, // GOOGLE ROBOTS
    /mediapartners/, /google favicon/, /feedfetcher/, /google-read-aloud/, /duplexweb-google/, /googleweblight/, /bing/, /yandex/, /baidu/, /duckduck/, /yahoo/, // OTHER ENGINES
    /ecosia/, /ia_archiver/, /slurp/, /facebook/, /instagram/, /pinterest/, /reddit/, // SOCIAL MEDIA
    /slack/, /twitter/, /whatsapp/, /youtube/, /semrush/, /yeti/, /gitcrawlerbot/, /phantomjs/, // OTHER
    /samsung/, /lua-resty-http/, /ngx_lua/, /dalvik/, /screaming/, /fbav/, /fb_iab/, /fiery feed/, /fiery%20feed/].map(r => r.source).join("|"), "i"); // BUILD REGEXP + "i" FLAG

    return robots.test(userAgent.toLowerCase());
  }

  detectHeadlessBrowser(userAgent) {
    const robots = new RegExp([/selenium/, /phantomjs/].map(r => r.source).join("|"), "i");
    if (robots.test(userAgent.toLowerCase())) return true;
    var documentDetectionKeys = ["__webdriver_evaluate", "__selenium_evaluate", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__driver_evaluate", "__selenium_unwrapped", "__fxdriver_unwrapped"];
    var windowDetectionKeys = ["_phantom", "__nightmare", "_selenium", "callPhantom", "callSelenium", "_Selenium_IDE_Recorder"];

    for (const windowDetectionKey in windowDetectionKeys) {
      const windowDetectionKeyValue = windowDetectionKeys[windowDetectionKey];

      if (window[windowDetectionKeyValue]) {
        return true;
      }
    }

    ;

    for (const documentDetectionKey in documentDetectionKeys) {
      const documentDetectionKeyValue = documentDetectionKeys[documentDetectionKey];

      if (window['document'][documentDetectionKeyValue]) {
        return true;
      }
    }

    ;

    for (const documentKey in window['document']) {
      if (documentKey.match(/\$[a-z]dc_/) && window['document'][documentKey]['cache_']) {
        return true;
      }
    }

    if (window['external'] && window['external'].toString() && window['external'].toString()['indexOf']('Sequentum') != -1) return true;
    if (window['document']['documentElement']['getAttribute']('selenium')) return true;
    if (window['document']['documentElement']['getAttribute']('webdriver')) return true;
    if (window['document']['documentElement']['getAttribute']('driver')) return true;
    return false;
  }

}

module.exports = {
  Utilities
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/2_layout/Resizing.js":
/*!*********************************************!*\
  !*** ./assets/scripts/2_layout/Resizing.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {class Resizing {
  constructor() {
    this.resizeTimer = null;
    this.resizeInterval = 50;
  }

  setup() {
    console.log('Resizing - Setup');
    const rHandler = global.utils.throttled(this.resizeInterval, this.resizeHandler);

    if (window.attachEvent) {
      window.attachEvent('onresize', rHandler);
    } else if (window.addEventListener) {
      window.addEventListener('resize', rHandler, true);
    } else {
      //The browser does not support Javascript event binding
      window.onresize = rHandler;
    }

    try {
      this.resizeHandler();
      global.utils.measureScrollBarWidth();
      this.setScrollbarOffset(global.scrollbarWidth);
    } catch (error) {
      console.error('Resising setup error', error);
      global.LRBErrorTracking.error(error);
    }
  }

  setScrollbarOffset(offset) {
    if (offset > 1) {
      console.log('[Scrollbar Detected] Adding Scrollbar Offset Classes');
      var css = '.lrb-overlayed body,.lrb-overlayed .header,.lrb-supernavOpen body,.lrb-supernavOpen .header,.lrb-searchNavOpen body,.lrb-searchNavOpen .header,.lrb-searchOverlayOpen body,.lrb-searchOverlayOpen .header,.lrb-modalOpen body,.lrb-modalOpen .header,.lrb-tacModalOpen body,.lrb-tacModalOpen .header{padding-right: ' + offset + 'px !important;}',
          head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style');
      head.appendChild(style);
      style.type = 'text/css';

      if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }
  }

  onResize(c, t) {
    onresize = function () {
      clearTimeout(t);
      t = setTimeout(c, 100);
    };

    return c;
  }

  resizeHandler() {
    global.utils.updateSizeRefs(); //console.log(global.viewportWidth + " x " + global.viewportHeight);

    if (global.viewportHeight <= 650) {
      $('html').addClass('vp-short');
    } else {
      $('html').removeClass('vp-short');
    }

    global.LRBNavigation.updateHeadroomOnResize(); //update header offset
    //$('.lrb-content-container').css('margin-top',$(".header-contents").outerHeight(true)+'px');
    //reposition error page copy

    var offset = Math.max(40, $('.error-page-content .error-hero-image').outerHeight(true) - $('.error-page-content .error-hero-content .ezrichtext-field').outerHeight(true));
    $('.error-page-content .error-hero-content').css('margin-top', offset / 2 + 'px'); //Resize image containers

    $('.resize').each(function (index, value) {
      var aspect = $(this).data("aspect");
      var width = $(this).width();
      var height = width * aspect;
      $(this).css("height", height + "px");
    }); //ensure article-hero-image large enough to contain contents

    $('.article-hero-image').each(function () {
      var height = Math.max(550, $(this).find('.article-hero-content').outerHeight(true) + 40);
      height += -parseInt($('.hero-image').css('marginTop'));
      $(this).css('min-height', height + 'px');
    }); //ensure video audio blocks headers remain consistent when side by side

    var maxH = 0;
    $('.home-av-feature').each(function (i) {
      $(this).find('.article-link-block').each(function () {
        maxH = Math.max(maxH, $(this).find('.copy-inner').outerHeight(true));
      });
      $(this).find('.article-link-block .copy').css('min-height', maxH + 'px');
    }); //Rearrange TOC title/authors when on mobile

    if (global.viewportWidth >= 768) {
      if ($('html').hasClass('toc-title-swapped')) {
        $('html').removeClass('toc-title-swapped');
        $('.toc-item').each(function () {
          $(this).find('h3').insertBefore($(this).find('h4'));
        });
      }
    } else {
      if (!$('html').hasClass('toc-title-swapped')) {
        $('html').addClass('toc-title-swapped');
        $('.toc-item').each(function () {
          $(this).find('h4').insertBefore($(this).find('h3'));
        });
      }
    }

    global.resizing.modalResizeHandler();
    global.resizing.homeGridOrphanCheck(); //global.LRBTooltip.closeTooltips();

    global.LRBBlog.resizeBlogImages();

    if (global.setupComplete) {
      //Enable / Disable mobile carousels according to viewport
      if (global.viewportWidth > 768) {
        //Not mobile breakpoint
        global.LRBCarousel.cleanupMobileCarousels();
      } else {
        //Mobile breakpoint
        global.LRBCarousel.setupMobileCarousels();
      } //Enable / Disable tablet carousels according to viewport


      if (global.viewportWidth > 1024) {
        //Not tablet breakpoint
        global.LRBCarousel.cleanupTabletCarousels();
      } else {
        //Tablet breakpoint
        global.LRBCarousel.setupTabletCarousels();
      }
    }

    global.LRBCarousel.updateImageCaptionOffsets();
    global.LRBCarousel.checkCaptionWidth(); //Force close header search nav on mobiles

    if (global.viewportWidth <= 850) {
      //close search header dropdown on mobile
      global.LRBNavigation.closeSearchNav();
    } else {
      //close search overlay on other
      $('html').removeClass('lrb-searchOverlayOpen');
    }
  }

  modalResizeHandler() {
    //add scrollable class to modals when needed
    $('.modal-container.scrollable').removeClass('scrollable');

    if ($('.modal-container').outerHeight(true) > global.viewportHeight - 40) {
      $('.modal-container').addClass('scrollable');
    }

    $('.tac-modal-container.scrollable').removeClass('scrollable');

    if ($('.tac-modal-container').outerHeight(true) > global.viewportHeight - 40) {
      $('.tac-modal-container').addClass('scrollable');
    }

    if (global.viewportWidth <= 768) {
      $('.modal-container .modalcontent').height(global.viewportHeight - 50);
    } else {
      $('.modal-container .modalcontent').removeAttr('style');
    }
  } // Check for orphaned articles when scaling to tablet size on home grid
  // (articles that are left on their own due to odd number in the grid, resulting in a width stretched orphan)


  homeGridOrphanCheck() {
    if ($('body').hasClass('section-home')) {
      $('.landing-page__zone').each(function () {
        var $lastBlock = $(this).find('.landing-page__block').last();
        var blockWidth = $lastBlock.outerWidth(true);

        if (blockWidth > global.viewportWidth / 2) {
          $lastBlock.addClass('orphan-block');
        } else {
          $lastBlock.removeClass('orphan-block');
        }
      });
    }
  }

}

module.exports = {
  Resizing
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/2_layout/Scrolling.js":
/*!**********************************************!*\
  !*** ./assets/scripts/2_layout/Scrolling.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {class Scrolling {
  constructor() {
    global.prevScroll = 0;
    global.scrollDirection = 0;
  }

  setup() {
    console.log('Scrolling - Setup');
    this.scrollHandler();
    const sHandler = global.utils.throttled(100, this.scrollHandler);
    window.addEventListener("scroll", sHandler);
  }

  scrollHandler(e) {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPos > global.prevScroll) {
      global.scrollDirection = 1;
    } else {
      global.scrollDirection = -1;
    }

    global.prevScroll = scrollPos;

    if (scrollPos > 0 && global.scrollDirection > 0) {
      $('html').addClass('scrollDown');
      $('html').removeClass('scrollUp');
    } else if (scrollPos > 0) {
      $('html').removeClass('scrollDown');
      $('html').addClass('scrollUp');
    } else {
      $('html').removeClass('scrollDown');
      $('html').removeClass('scrollUp');
    }

    global.LRBNavigation.closeSearchNav();
  }

}

module.exports = {
  Scrolling
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/form/LRBAccountForms.js":
/*!**********************************************************!*\
  !*** ./assets/scripts/3_objects/form/LRBAccountForms.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {const GENERAL_ERROR = 'Sorry, we encountered an error. Please contact support at <a href="mailto:support@lrb.co.uk" title="Email Support">support@lrb.co.uk</a>'; //const UNRECOGNISED_EMAIL = 'The email address you entered was not recognised. <a class="createAccountLink" href="/create-an-account">Create an account?</a>';

const UNRECOGNISED_EMAIL = 'Incorrect email address or password';
const ADD_SUB_ENDPOINT_ERROR = 'There was an error processing this subscription, please contact Customer Services for help.';
const ADD_SUB_GENERIC_ERROR = 'There was an error adding this subscription, please refresh the page and try again.';

class LRBAccountForms {
  constructor() {
    this.login_passed_validation = false;
    this.create_account_passed_validation = false;
    this.accountError = "Please complete all fields.";
  }

  setup() {
    console.log('%cLRBAccountForms Setup', "background-color: ".concat(global.infoBG, ";"));

    try {
      this.setupLoginForm();
      this.setupAccountForm();
      this.setupAddSubscriptionForm();

      if ($('.customer_number_find_link').length > 0) {
        this.setupCustomerNumberSearch();
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Account Forms', error);
    }
  }

  checkStatus(number) {
    // Catch incorrectly returned statuses of valid/error strings
    if (typeof number === 'string') {
      let statusRange = ['ok', 'error'];

      if (statusRange.includes(number.toLowerCase())) {
        return number;
      }
    } // Check status code against those passed from config/packages/account_status_codes.yaml


    if (window.lrbASC) {
      for (const status of window.lrbASC) {
        if (parseInt(number) >= parseInt(status.min) && parseInt(number) <= parseInt(status.max)) {
          return status.name;
        }
      }
    } // When no matching code is found


    return "not_found";
  }

  loadCustNoHelpContent() {
    $(".modal-container .custno-modal-content").load("/customer-number", function () {
      console.log("Customer number help copy loaded");
    });
    global.resizing.modalResizeHandler();
  }

  clearCustNoFormErrors() {
    $(".formSearchPostcodeMsg").val('');
    $(".formSearchEmailMsg").val('');
    $(".formSearchPostcodeMsg").removeClass('error');
    $(".formSearchEmailMsg").removeClass('error');
    $("#form_search_last_name").removeClass('error');
    $("#form_search_postcode").removeClass('error');
    $("#form_search_email").removeClass('error');
    $('.submitting').removeClass('submitting');
  }

  clearCustNoForm() {
    if ($("#form_last_name").val() != "") {
      $("#form_search_last_name").val($("#form_last_name").val());
    } else {
      $("#form_search_last_name").val('');
    }

    $("#form_search_postcode").val('');
    $("#form_search_email").val('');
  }

  validateCustomerForm() {
    var last_name = $("#form_search_last_name").val();
    var zipcode = $("#form_search_postcode").val();
    var email = $("#form_search_email").val();
    this.clearCustNoFormErrors();

    if (last_name == "" && zipcode == "" && email == "") {
      $("#form_search_last_name").addClass('error');
      $("#form_search_postcode").addClass('error');
      $("#form_search_email").addClass('error');
      $(".formSearchPostcodeMsg").html("Please enter your last name and postal / zipcode");
      $(".formSearchEmailMsg").html("Or please enter your email");
      $(".formSearchPostcodeMsg").addClass('error');
      $(".formSearchEmailMsg").addClass('error');
      return false;
    } else if (last_name == "" || zipcode == "" || email == "") {
      var errStr = "Please enter your";
      var errStrSet = false;

      if (email == "") {
        //If lastname and/or zipcode are blank and email is blank
        if (last_name == "") {
          var errStr = errStr + " last name";
          errStrSet = true;
          $("#form_search_last_name").addClass('error');
        }

        if (zipcode == "") {
          if (last_name == "") {
            var errStr = errStr + " and";
          }

          var errStr = errStr + " postal / zipcode";
          errStrSet = true;
          $("#form_search_postcode").addClass('error');
        }

        if (errStrSet) {
          $(".formSearchPostcodeMsg").html(errStr);
          $(".formSearchPostcodeMsg").addClass('error');
        }
      } else {
        // Email is set, check if it is valid
        if (!global.LRBFormValidation.isValidEmailAddress(email)) {
          // Email is set but invalid, show error
          $("#form_search_email").addClass('error');
          $(".formSearchEmailMsg").html("Please enter a valid email address");
          $(".formSearchEmailMsg").addClass('error');
          return false;
        }
      }

      if (errStrSet) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  } //=====================================================================
  // Setup Customer Number Search
  //=====================================================================


  setupCustomerNumberSearch($target) {
    let scope = this;
    global.setupPage.setupCustomerNumberPopupLink(); //=====================================================================
    // Toggle find customer number form
    //=====================================================================

    $(".customer_number_find_link, .customer_number_try_again, .cancel_find_customer_number").each(function () {
      if ($(this).data('cust-click-setup') != true) {
        $(this).click(function (e) {
          e.preventDefault();
          $(".customer_number_search").slideToggle({
            progress: global.resizing.modalResizeHandler
          });
          $(".customer_number_fail").velocity('stop').velocity("slideUp", {
            duration: 400
          });
          $('.customer_number_search #form_search_email, .customer_number_search #form_search_last_name, .customer_number_search #form_search_postcode').removeAttr('disabled');

          if ($(this).hasClass('cancel_find_customer_number')) {
            scope.clearCustNoFormErrors();
            scope.clearCustNoForm();
          }
        });
        $(this).data('cust-click-setup', true);
      }
    }); //=====================================================================
    // Setup Customer number input checking / disabling
    //=====================================================================

    $('.customer_number_search #form_search_last_name, .customer_number_search #form_search_postcode').on('input', function () {
      if ($(this).val() == "") {
        $('.customer_number_search #form_search_email').removeAttr('disabled');
      } else {
        $('.customer_number_search #form_search_email').attr('disabled', true);
      }
    });
    $('.customer_number_search #form_search_email').on('input', function () {
      if ($(this).val() == "") {
        $('.customer_number_search #form_search_last_name, .customer_number_search #form_search_postcode').removeAttr('disabled');
      } else {
        $('.customer_number_search #form_search_last_name, .customer_number_search #form_search_postcode').attr('disabled', true);
      }
    }); //=====================================================================
    // Submit customer number form
    //=====================================================================

    $("#find_customer_number_submit").each(function () {
      if ($(this).data('cust-submit-click-setup') == true) {
        return true;
      } else {
        $(this).data('cust-submit-click-setup') == true;
      }

      $("#find_customer_number_submit").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass('submitting');
        var last_name = $("#form_search_last_name").val();
        var zipcode = $("#form_search_postcode").val();
        var email = $("#form_search_email").val();

        if (scope.validateCustomerForm()) {
          $("#form_order_number").val("");
          $.post("/account/find-subscription", {
            last_name: last_name,
            zipcode: zipcode,
            email: email
          }, function (data) {
            if (data) {
              if (data.status > 0) {
                if ($("#form_order_number").length > 0) {
                  $("#form_order_number").val(data.data.order_number);
                }

                $(".customer_number_search").slideToggle({
                  progress: global.resizing.modalResizeHandler
                });
                $("#form_order_number").addClass("success");
              } else {
                if (data.hasOwnProperty('message') && data.message != '') {
                  $(".customer_number_fail").html(data.message);
                }

                $(".customer_number_search").slideToggle({
                  progress: global.resizing.modalResizeHandler
                });
                $(".customer_number_fail").velocity('stop').velocity("slideDown", {
                  duration: 400
                });
                $("#form_order_number").removeClass("success");
              }
            }

            $(this).removeClass('submitting');
            scope.clearCustNoFormErrors();
            scope.clearCustNoForm();
          }).fail(function () {
            $(".customer_number_fail").text('There was an error searching for your subscription number. Please refresh the page and try again.');
            $(".customer_number_search").slideToggle({
              progress: global.resizing.modalResizeHandler
            });
            $(".customer_number_fail").velocity('stop').velocity("slideDown", {
              duration: 400
            });
            $("#form_order_number").removeClass("success");
            $(this).removeClass('submitting');
          });
        } else {
          $(this).removeClass('submitting');
        }

        return false;
      });
    });
  } //=================================================================
  // Create account form
  //=================================================================


  createAccountForm(email = "", fname = "", lname = "", custno = "") {
    let scope = this;
    var url = "/account/create";
    global.LRBModal.loadContentIntoModal(url, function () {
      scope.setupAccountForm(email, fname, lname, custno);
    });
  }

  injectSessionDataIntoHiddenFields() {
    // Set GA JSON Session Data
    try {
      if ($('#ga_json').length > 0) {
        $('#ga_json').val(JSON.stringify(global.GA4.getJSONSessionData()));
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Form Session Data inject failed', error);
    }
  } //=================================================================
  // Setup account form, after it is created / loaded
  //=================================================================


  setupAccountForm(email = "", fname = "", lname = "", custno = "") {
    let scope = this;

    if ($('#create_account_form').length == 0) {
      return;
    }

    scope.loadCustNoHelpContent();
    global.LRBFormValidation.autoValidate();
    global.resizing.modalResizeHandler();
    global.LRBRecaptcha.setupGoogleRecaptchas();
    $("#form_first_name").focus();
    $(".modal-container").scrollTop(0);

    if (email != "") {
      $("#form_email").val(email);
    }

    if (fname != "") {
      $("#form_first_name").val(fname);
    }

    if (lname != "") {
      $("#form_last_name").val(lname);
    }

    if (custno != "" && custno != "[UIDDSB]") {
      $("#form_order_number").val(custno);
    }

    scope.injectSessionDataIntoHiddenFields(); //=====================================================================
    // Mirror (customer number form) fields as user types
    //=====================================================================

    $("#form_last_name").keyup(function () {
      $("#form_search_last_name").val($(this).val());
    });
    /*$("#form_email").keyup(function(){
        $("#form_search_email").val($(this).val());
    });*/
    //=====================================================================
    // Setup Customer Number Search
    //=====================================================================

    scope.setupCustomerNumberSearch(); //=================================================================
    // Create account form validation
    //=================================================================

    $("#create_account_cancel_button").on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      scope.createLoginForm();
      return false;
    });
    $("#create_account_submit_button").on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var errors = [];
      scope.injectSessionDataIntoHiddenFields();
      var validated = global.LRBFormValidation.autoValidateFieldsInForm($('#create_account_form'));

      if (!validated) {
        errors.push(global.LRBFormValidation.generalCreateAccountError);
      } //=====================================================================
      // Validate form values
      //=====================================================================


      if (!global.LRBFormValidation.googleRecaptchaCompleteCheck($('#create_account_form .g-recaptcha'))) {
        errors.push("Please confirm you are not a robot.");
        console.log(errors);
        return false;
      } //=====================================================================
      // Check email doesn't exist, customer number and recaptcha  are valid
      //=====================================================================


      var username = $("#form_email").val().trim();
      const checkAjaxRecaptcha = null;
      $.post("/account/check", {
        username: username,
        recaptcha: 1,
        order_number: 1,
        "g-recaptcha-response": $("#g-recaptcha-response").val(),
        "order_number_value": $("#form_order_number").val(),
        "check_recaptcha": checkAjaxRecaptcha
      }, function (data) {
        //=====================================================================
        // Format errors
        //=====================================================================
        if (data && errors.length == 0) {
          if (checkAjaxRecaptcha && data.recaptcha != true) {
            // /check if recaptcha is valid
            errors.push("Please confirm that you are not a robot.");
          } else {
            // if recaptcha is valid, check if account already exists
            if (scope.checkStatus(data.status) != "not_found") {
              // getRandomisedStatusCode() returning not_found, equates to account already exists
              errors.push('An account with this email may already exist. Please <a href="https://www.lrb.co.uk/login" title="Sign in">sign in</a> or try requesting a password link from <a href="https://www.lrb.co.uk/account/forgotten-password" title="Forgot Password">here</a>. If you still have problems please contact us at <a href="mailto:support@lrb.co.uk">support@lrb.co.uk</a>.');
            } else {
              // Otherwise check for order/customer number errors to display
              if (data.order_number != true) {
                if (data.hasOwnProperty('message')) {
                  errors.push(data.message);
                } else {
                  errors.push("The customer number was not found.");
                }
              }
            }
          }
        } //=====================================================================
        // If ok, submit the form
        //=====================================================================


        if (errors.length == 0) {
          $('#create_account_form').submit(); //document.forms['create_account_form'].submit(); //jQuery submit won't fire for some reason
        } //=====================================================================
        // Otherwise log errors and reset recaptcha
        //=====================================================================
        else {
            console.log(errors);
            global.LRBFormValidation.showGeneralError(errors.join(' <br/>'));
            grecaptcha.reset();
          }
      }).fail(function (error) {
        errors.push("There was an error checking this account, please refresh the page and try again.");
        console.log(errors);
        errors.push(error);
        global.LRBErrorTracking.error(error);
        global.LRBFormValidation.showGeneralError(errors.join(' <br/>'));
        grecaptcha.reset();
      });
    });
  } //=================================================================
  // Create login form
  //=================================================================


  createLoginForm(msg = "") {
    let scope = this;
    var url = "/login?referer=" + encodeURI(window.location.pathname + window.location.search) + "&msg=" + msg;
    global.LRBModal.loadContentIntoModal(url, function () {
      scope.setupLoginForm();
    });
  } //=================================================================
  // Setup login form, after it is created / loaded
  //=================================================================


  setupLoginForm() {
    if ($('#login_form').length == 0) {
      return false;
    }

    let scope = this;
    global.LRBFormValidation.autoValidate();
    global.resizing.modalResizeHandler(); //============================================
    // Set login validation as false if data dirty
    //============================================

    $(".login-email #username, .login-email #password").keydown(function (e) {
      scope.login_passed_validation = false;
    });
    $("#create_account_link").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      scope.createAccountForm();
      return false;
    });
    $("#institutions_account_link, .institutions_account_link").on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      global.LRBInstitutionForms.createInstitutionForm();
      return false;
    }); //=================================================================
    // Login Form
    //=================================================================

    scope.checkUserAccount();
  } //=================================================================
  // Create Add Subscription form
  //=================================================================


  createAddSubscriptionForm() {
    let scope = this;
    var url = "/account/subscriptions/add?referer=" + encodeURI(window.location.pathname);
    global.LRBModal.loadContentIntoModal(url, function () {
      scope.setupAddSubscriptionForm();
    });
  } //=================================================================
  // Setup Add Subscription form, after it is created / loaded
  //=================================================================


  setupAddSubscriptionForm() {
    let scope = this;
    global.LRBFormValidation.autoValidate();
    global.resizing.modalResizeHandler();
    scope.setupCustomerNumberSearch();
    scope.loadCustNoHelpContent();
    $('#add_subscription_form').each(function () {
      if ($(this).hasClass('el-setup')) return false;
      $(this).on("submit", function (event) {
        event.preventDefault();
        $('#add_subscription_form').addClass('submitting');
        $(".customer_number_fail").hide();
        $.post('/account/subscriptions/add', $(this).serialize()).done(function (data) {
          if (Object.entries(data).length == 0 || data == false || data.length == 0 || data.status == false) {
            if (data.message && data.message != '') {
              $(".customer_number_fail").html(data.message).show();
            } else {
              $(".customer_number_fail").text(ADD_SUB_GENERIC_ERROR).show();
            }

            $('.submitting').removeClass('submitting');
          } else {
            window.location = "/account/subscriptions?sub=1";
          }
        }).fail(function () {
          $(".customer_number_fail").text(ADD_SUB_ENDPOINT_ERROR).show();
          $('.submitting').removeClass('submitting');
        });
      });
      $(this).addClass('el-setup');
    });
  } //=================================================================
  // Login Form - Check whether user needs to update their password
  //=================================================================


  checkUserAccount() {
    let scope = this;
    $("#login_form").submit(function (e) {
      if (scope.login_passed_validation == true) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      global.LRBAlerts.clearModalNotifications(); //============================
      // Validate form input
      //============================

      var username = $("#username").val().trim();
      var password = $("#password").val().trim();

      if (username == "") {
        $('#login_form .login-email').addClass('error');
        $('#login_form .login-email .validation-error-message').html("Please enter your email address.");
        $("#login_form #username").addClass('error');
        return;
      } else if (password == "") {
        $('#login_form .login-password').addClass('error');
        $('#login_form .login-password .validation-error-message').html("Please enter your password.");
        $("#login_form #password").addClass('error');
        return;
      } else {
        $('#login_form .login-email').removeClass('error');
        $('#login_form .login-email .validation-error-message').html("");
        $("#login_form #username").removeClass('error');
      }

      $("#login_next").html("Checking email..."); //============================
      // Check user's account using
      // email address provided
      //============================

      $.post("/account/check", {
        username: username
      }, function (data) {
        if (scope.checkStatus(data.status) == "ok") {
          scope.login_passed_validation = true;
          $("#login_form").submit();
          return;
        } else {
          scope.login_passed_validation = false; //========================================
          // If password needs to be updated
          //========================================

          if (scope.checkStatus(data.status) == "update_password") {
            $(".login-next, .login-password, .login-submit, .login-email").hide();
            $("#resend_password_link").click(function () {
              $("#resend_password_link").text("Sending...");
              $.post("/account/resend-password-link", {
                username: username
              }, function (data) {
                if (scope.checkStatus(data.status) == "ok") {
                  $("#resend_password_link").text("Link sent");
                  setTimeout(function () {
                    $("#resend_password_link").text("Resend Link");
                  }, 3000);
                } else {
                  global.LRBAlerts.showModalError(GENERAL_ERROR);
                }
              });
            });
            $(".login-update").show();
            $("#login_first_name").text(data.first_name);
          } //========================================
          // If email is invalid
          //========================================


          if (scope.checkStatus(data.status) == "invalid_email") {
            global.LRBAlerts.showModalError('Please enter a valid email address.');
            $("#login_next").html("Next");
          } //========================================
          // If account not found
          //========================================


          if (scope.checkStatus(data.status) == "not_found") {
            global.LRBAlerts.showModalError(UNRECOGNISED_EMAIL);
            $("#login_next").html("Next");
            $('.createAccountLink').on('click', function (e) {
              e.preventDefault();
              e.stopPropagation();
              scope.createAccountForm();

              if ($('body').hasClass('section-login')) {
                $('html').addClass('lrb-modalOpen');
              }

              return false;
            });
          }

          if (scope.checkStatus(data.status) == "error") {
            global.LRBAlerts.showModalError(UNRECOGNISED_EMAIL);
            $("#login_next").html("Next");
          }

          return false;
        }
      });
    });
  }

  destroy() {}

}

module.exports = {
  LRBAccountForms
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/form/LRBAddressAutoComplete.js":
/*!*****************************************************************!*\
  !*** ./assets/scripts/3_objects/form/LRBAddressAutoComplete.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {class LRBAddressAutoComplete {
  /*
  Used for Contributor static forms, and DSB / PCD account address forms
  */
  constructor() {
    window.lrbInitAutoComplete = this.initAutocomplete;
    window.fillInAddress = this.fillInAddress;
    window.lrbGeolocate = this.geolocate;
    window.componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      neighborhood: 'short_name',
      postal_town: 'long_name',
      locality: 'long_name',
      administrative_area_level_2: 'long_name',
      administrative_area_level_1: 'long_name',
      country: 'short_name',
      postal_code_prefix: 'short_name',
      postal_code: 'short_name',
      postal_code_suffix: 'short_name'
    };
  } // Uses the Autocomplete widget to help the user select a
  // place, then it retrieves the address components associated with that
  // place, and then it populates the form fields with those details.
  // This requires the Places library, included in the head of the page


  initAutocomplete(_lrbFormMap, elID, restrictUS = false) {
    if (!_lrbFormMap) {
      return;
    }

    console.log('%cLRBAddressAutoComplete Setup', "background-color: ".concat(global.infoBG, ";"));

    if (!_lrbFormMap || !google || !google.maps || !google.maps.places || !google.maps.places.Autocomplete) {
      console.error("[LRBFormMap parameter not provided]");
    } // Create the autocomplete object, restricting the search predictions to
    // geographical location types.


    var autocomplete = new google.maps.places.Autocomplete(document.getElementById(elID), {
      types: ['geocode']
    });

    if (autocomplete) {
      if (restrictUS) {
        window.componentForm.administrative_area_level_1 = 'short_name'; // Restrict the search to the list of countries

        autocomplete.setComponentRestrictions({
          'country': ['us', 'ca', 'vi', 'gu', 'mp']
        });
      } // Avoid paying for data that you don't need by restricting the set of
      // place fields that are returned to just the address components.


      autocomplete.setFields(['address_component']);
      var compForm = window.componentForm; // When the user selects an address from the drop-down, populate the
      // address fields in the form.

      autocomplete.addListener('place_changed', function () {
        console.warn("Address Lookup changed: " + elID); // Get the place details from the autocomplete object.

        var place = autocomplete.getPlace();
        window.fillInAddress(this.autocomplete, place, _lrbFormMap, compForm);
      });
    }
  } // Pass in autocopmplete object, the "place" identified by the address lookup, the map of address attributes to the
  // form elements and the address attributes to use


  fillInAddress(autocomplete, place, lrbFormMap, componentForm) {
    for (var component in lrbFormMap) {
      // Clear out any entries in the current address form
      var docCompEl = document.getElementById(component);

      if (docCompEl) {
        docCompEl.value = '';
        docCompEl.disabled = false;
      }
    } //Check that Google Place and ComponentForm objects exist


    if (!place) {
      console.error("[Google Place not defined]");
      return false;
    } else {
      console.log("Google Place...");
      console.log(place);
    } //Check that Google Place address_components exist


    if (!place.address_components) {
      console.error("[Google Place Address Components not defined]");
      return false;
    } else {
      console.log("Google Place Address Components...");
      console.log(place.address_components);
    }

    if (!componentForm) {
      console.error("[componentForm not defined]");
      return false;
    } else {
      console.log("Component Form...");
      console.log(componentForm);
    } // Get each component of the address from the place details,
    // and then fill-in the corresponding field on the form.


    var indx = 0;

    outer: for (indx; indx < place.address_components.length; indx++) {
      var addressType = place.address_components[indx].types[0];

      if (componentForm[addressType]) {
        // If the address attribute matches
        var val = place.address_components[indx][componentForm[addressType]];

        if (val) {
          inner: for (var addressPart in lrbFormMap) {
            // Loop through each field (addresspart) in the displayed form and match with the values returned by google
            // Addresspart MIGHT be an array ie value is derived from more than 1 google attribute
            if (lrbFormMap[addressPart].length == 1 && lrbFormMap[addressPart][0] == addressType) {
              // Single value
              if (typeof document.getElementById(addressPart).options == 'undefined') {
                // Not a select element - write value into form field
                document.getElementById(addressPart).value = val;
              } else {
                // Select element - find the correct option to select
                var i = 0;
                var j = document.getElementById(addressPart).options.length;

                for (i; i < j; i++) {
                  if (document.getElementById(addressPart).options[i].value == val) {
                    document.getElementById(addressPart).selectedIndex = i;
                    $('#' + addressPart).trigger('change');
                    i = j;
                  }
                }
              } // This field has been updated, skip the rest and move on to the next value


              continue outer;
            } else {
              // Form field value is derived from a combination of google attributes
              var p = 0;
              var googleAttribCount = lrbFormMap[addressPart].length;

              for (p; p < googleAttribCount; p++) {
                if (lrbFormMap[addressPart][p] == addressType) {
                  // Add the attribute value to the form
                  if (document.getElementById(addressPart).value == '') {
                    // initial value
                    document.getElementById(addressPart).value = val;
                  } else {
                    if (document.getElementById(addressPart).value.indexOf(val) < 0) {
                      // append any new address information
                      document.getElementById(addressPart).value += isNaN(document.getElementById(addressPart).value) ? ", " + val : " " + val;
                    }
                  }

                  p = googleAttribCount; // Move to the next form field

                  continue outer;
                }
              }
            }
          }
        }
      }
    }
  } // Bias the autocomplete object to the user's geographical location,
  // as supplied by the browser's 'navigator.geolocation' object.


  geolocate() {
    try {
      if (navigator.geolocation) {
        // Browser is location aware - yay!
        navigator.geolocation.getCurrentPosition(function (position) {
          if (position) {
            // Get users location - or at least the location the browser thinks it is in
            var geolocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            if (geolocation && autocomplete) {
              var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
              });
              autocomplete.setBounds(circle.getBounds());
            }
          }
        });
      }
    } catch (e) {
      console.log('[Geolocate ERROR] ' + e);
    }
  }

  destroy() {}

}

module.exports = {
  LRBAddressAutoComplete
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/form/LRBCodeInput.js":
/*!*******************************************************!*\
  !*** ./assets/scripts/3_objects/form/LRBCodeInput.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {class LRBCodeInput {
  constructor() {
    this.intRegex = /^\d+$/;
  }

  setup() {
    if ($('form.access-code').length > 0) {
      console.log('%cLRBCodeInput Setup', "background-color: ".concat(global.infoBG, ";"));

      try {
        let scope = this;
        $('form.access-code').each(function () {
          scope.setupInputsFocussing($(this));
          scope.setupInputs($(this));
        });
        this.processURLHashCode();
      } catch (error) {
        global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Code Input', error);
      }
    }
  }

  setupInputs($form) {
    var $inputs = $form.find('input.access-code-input');
    let scope = this;

    if ($inputs) {
      // Prevents user from manually entering non-digits.
      $inputs.on("input.fromManual", function () {}); // Prevents pasting non-digits and if value is 6 characters long will parse each character into inputs

      $inputs.on("paste", function () {
        var $this = $(this);
        var originalValue = $this.val();
        $this.val("");
        $this.one("input.fromPaste", function () {
          var $currentInputBox = $(this);

          if ($currentInputBox) {
            var pastedValue = $currentInputBox.val();

            if (pastedValue.length == 6 && scope.intRegex.test(pastedValue)) {
              scope.pasteValues($form, pastedValue);
            } else {
              $this.val(originalValue);
            }
          }

          $inputs.attr("maxlength", 1);
        });
        $inputs.attr("maxlength", 6);
      });
    } else {
      console.error('Cannot setup Code Input - missing inputs');
    }
  }

  setupInputsFocussing($form) {
    var $inputs = $form.find('input.access-code-input');

    if ($inputs && $inputs.length) {
      for (let i = 0; i < $inputs.length; i++) {
        $inputs[i].addEventListener('keydown', function (e) {
          if (e.key === "Backspace") {
            $inputs[i].value = '';
            if (i !== 0) $inputs[i - 1].focus();
          } else {
            if (i === $inputs.length - 1 && $inputs[i].value !== '') {
              return true;
            } else if (e.keyCode > 47 && e.keyCode < 58) {
              $inputs[i].value = e.key;
              if (i !== $inputs.length - 1) $inputs[i + 1].focus();
              e.preventDefault();
            } else if (e.keyCode > 64 && e.keyCode < 91) {
              /*$inputs[i].value = String.fromCharCode(e.keyCode);
              if(i !== $inputs.length - 1)$inputs[i + 1].focus();*/
              //e.preventDefault();
            }
          }
        });
      }
    } else {
      console.error('Cannot setup Code Inputs Focussing - missing inputs');
    }
  }

  pasteValues($form, code) {
    var values = code.split("");
    $(values).each(function (index) {
      var $inputBox = $form.find('.access-code-input[name="access_code[' + index + ']"]');
      $inputBox.val(values[index]);
      $inputBox.focus();
    });
  }

  processURLHashCode() {
    var code = global.utils.getURLHash().replace('#', '');
    var $form = $('form.access-code').eq(0); // If code from hash is 6 chars long and int only and access code form exists

    if (code.length == 6 && this.intRegex.test(code)) {
      // paste into first access code form found
      this.pasteValues($form, code);
    }
  }

  destroy() {}

}

module.exports = {
  LRBCodeInput
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/form/LRBDatePicker.js":
/*!********************************************************!*\
  !*** ./assets/scripts/3_objects/form/LRBDatePicker.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {__webpack_require__(/*! jquery-ui/ui/widgets/datepicker */ "./node_modules/jquery-ui/ui/widgets/datepicker.js");

class LRBDatePicker {
  constructor() {
    this.elCount = 0;
    this.datePlaceholder = "dd/mm/yyyy";
  }

  setup() {
    console.log('%cLRBDatePicker Setup', "background-color: ".concat(global.infoBG, ";"));

    try {
      let scope = this; //Add datepicker markup

      $('.lrb-date').each(function () {
        if ($(this).data('date-dd-setup') == 1) {
          return true;
        } else {
          $(this).data('date-dd-setup', 1);
        }

        scope.elCount++;
        var elID = "lrbDate-" + scope.elCount;
        $(this).addClass(elID);
        $(this).data('datefield-for', 'date-picker-' + elID);
        $(this).after(scope.datepickerUIString(elID));
      }); //Format datepicker UI

      $(".lrb-datepicker .calendar").each(function () {
        if ($(this).data('date-dp-setup') == 1) {
          return true;
        } else {
          $(this).data('date-dp-setup', 1);
        }

        var $parent = $(this).parents('.date-picker');
        var $dateInput = $("." + $(this).parents('.date-picker').data('datepicker-for'));
        var minDate = null;

        if ($dateInput.data('min-date')) {
          minDate = "" + $dateInput.data('min-date');
        }

        var maxDate = null;

        if ($dateInput.data('max-date')) {
          maxDate = "" + $dateInput.data('max-date');
        }

        console.log('setting up datepicker with: minDate[' + minDate + '] maxDate[' + maxDate + ']'); // Setup calendar datepicker

        var $datepicker = $(this).datepicker({
          dateFormat: 'dd/mm/yy',
          firstDay: 1,
          minDate: minDate,
          maxDate: maxDate,
          currentText: "test"
        }); // Disable fields that are secondary to another

        if ($dateInput.data('date-offset-from') || $dateInput.data('date-shortoffset-from')) {
          $parent.addClass('disabled');
        }

        if ($(this).val() != "") {
          // Enable disabled fields if they are loaded with a value set
          $parent.removeClass('disabled'); // Update calendar from set value
          //$(this).datepicker("setDate", new Date($(this).val()));

          var dateVal = $(this).val().split('/');
          var setDate = new Date(dateVal[2], dateVal[1], dateVal[0]);
          $datepicker.datepicker('setDate', setDate);
          $datepicker.datepicker("refresh");
        }
      });
      $(".lrb-datepicker .input").blur(function (e) {
        e.stopPropagation();
      });
      $('body').click(function (e) {
        if ($(e.target).hasClass('lrb-datepicker') || $(e.target).hasClass('ui-corner-all') || $(e.target).parents('.lrb-datepicker').length > 0) {} else {
          scope.closeAllDatepickers();
        }
      });
      $(".lrb-datepicker .input").each(function () {
        if ($(this).data('date-dpi-setup') == 1) {
          return false;
        } else {
          $(this).data('date-dpi-setup', 1);
        }

        $(this).on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var $parent = $(this).parents('.date-picker');

          if ($parent.hasClass('open')) {
            $(".lrb-datepicker").removeClass('open');
          } else {
            $(".lrb-datepicker").removeClass('open');
            $parent.addClass('open');
          }

          return false;
        });
      });
      $(".lrb-datepicker .val-holder").on("change", function () {
        // Val Holders Input on generated date picker manually updated, update actual field and display
        var $selected = $(this).val(),
            $parent = $(this).parents('.date-picker');
        var date = new Date($selected.split('/').reverse().join('-'));
        $parent.find('.calendar-icon .date-svg-copy').html(date.getDate());
        var $dateInput = $("." + $(this).parents('.date-picker').data('datepicker-for'));
        scope.dateFieldChanged($parent, $dateInput);
        var reversedDate = $selected.split('/').reverse().join('-');
        $dateInput.val(reversedDate);
      });
      $(".lrb-datepicker .calendar").on("change", function () {
        // Calendar picker updated, update actual field and display
        var $selected = $(this).val(),
            $parent = $(this).parents('.date-picker');
        $parent.find('.result').children('span').html($selected);
        $parent.find('.result').children('input').val($selected);
        var date = new Date($selected.split('/').reverse().join('-'));
        $parent.find('.calendar-icon .date-svg-copy').html(date.getDate());
        var $dateInput = $("." + $(this).parents('.date-picker').data('datepicker-for'));
        scope.dateFieldChanged($parent, $dateInput);
        var reversedDate = $selected.split('/').reverse().join('-');
        $dateInput.val(reversedDate);
      });
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Date Picker', error);
    }
  }

  dateFieldChanged($parent, $dateInput) {
    if ($parent && $dateInput) {
      //When date changes check for fields that are flagged to be
      //offset from this and enable them, and update the vals
      $(".date-picker").each(function () {
        var $input = $("." + $(this).data('datepicker-for')); // Used for setting subscription suspensions

        if ($input.data('date-offset-from')) {
          if ("#" + $dateInput.attr('id') == "" + $input.data('date-offset-from')) {
            $(this).removeClass('disabled');
            $(this).addClass('open');
            $parent.removeClass('open'); //grab the date just set from first calendar...

            var dateSet = $parent.find('.calendar').val();
            var reversedDate = new Date(dateSet.split('/').reverse().join('-'));
            var $calendar = $(this).find('.calendar'); //...and update the next calendar to two weeks from this date, and 3 months to the max from this date

            $calendar.datepicker("option", "minDate", new Date(+reversedDate + 1209600000));
            var maxDate = reversedDate; //""+$input.data('max-date');
            //maxDate.setFullYear(maxDate.getFullYear() + 1);

            maxDate.setMonth(maxDate.getMonth() + 3);
            $calendar.datepicker("option", "maxDate", maxDate);
          }
        } // Used for search date range


        if ($input.data('date-shortoffset-from')) {
          if ("#" + $dateInput.attr('id') == "" + $input.data('date-shortoffset-from')) {
            $(this).removeClass('disabled');
            $(this).addClass('open');
            $parent.removeClass('open'); //grab the date just set from first calendar...

            var dateSet = $parent.find('.calendar').val();
            var reversedDate = new Date(dateSet.split('/').reverse().join('-'));
            var $calendar = $(this).find('.calendar'); //...and update the next calendar to from this date, and set max to current Date

            $calendar.datepicker("option", "minDate", reversedDate); //var maxDate = new Date();
            //$calendar.datepicker( "option", "maxDate", maxDate );
          }
        }
      });

      if ($dateInput.data('date-offset-from')) {
        $parent.removeClass('open');
      }
    } else {
      console.error('No params passed for dateFieldChanged');
    }
  }

  datepickerUIString(inputID) {
    if (inputID) {
      var valHolder = '<span>' + this.datePlaceholder + '</span>';

      if ($('body').hasClass('section-search-results')) {
        valHolder = '<input class="val-holder" type="text" placeholder="' + this.datePlaceholder + '"/>';
      }

      return '<div class="date-picker lrb-datepicker date-picker-' + inputID + '" data-datepicker-for="' + inputID + '"><div class="input"><div class="result">' + valHolder + '</div><button><span class="calendar-icon"><svg version="1.1" class="calendar-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 18" xml:space="preserve"><g class="calendar-group"><path d="M0,2v3.2V18h16V5.2V2H0z M2,16V6h12v10H2z"/><path d="M2,4V0h2v4H2z M12,4V0h2v4H12z"/></g><text class="date-svg-copy" x="50%" y="66%" dominant-baseline="middle" text-anchor="middle" style="font-family:"Ideal Sans";font-size:10px;font-weight:600;letter-spacing:-0.5px;">1</text></svg></span></button></div><div class="calendar"></div></div>';
    } else {
      console.warn('No inputID set for datepickerUIString');
    }
  }

  closeAllDatepickers() {
    $(".lrb-datepicker").removeClass('open');
  }

  destroy() {}

}

module.exports = {
  LRBDatePicker
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/form/LRBDropdown.js":
/*!******************************************************!*\
  !*** ./assets/scripts/3_objects/form/LRBDropdown.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {__webpack_require__(/*! select2/dist/js/select2.full.js */ "./node_modules/select2/dist/js/select2.full.js");

var DropdownCSS = __webpack_require__(/*! select2/src/js/select2/compat/dropdownCss.js */ "./node_modules/select2/src/js/select2/compat/dropdownCss.js");

class LRBDropdown {
  constructor() {
    window.decadeDropdown = this.triggerDecadeDropdown;
    window.animateAll = true;
  }

  setup() {
    console.log('%cLRBDropdown Setup', "background-color: ".concat(global.infoBG, ";"));

    try {
      //Decorator to wrap the dropdown markup in the same element as the selector
      $.fn.select2.amd.define("CreateAttachContainerDropdownAdapter", ["select2/utils", "select2/dropdown", "select2/dropdown/attachBody", "select2/dropdown/attachContainer", "select2/dropdown/search", "select2/dropdown/minimumResultsForSearch", "select2/dropdown/closeOnSelect"], function (Utils, Dropdown, AttachBody, AttachContainer, DropdownSearch, MinimumResultsForSearch, CloseOnSelect) {
        return function (_options) {
          var options = $.extend(true, {}, $.fn.select2.defaults.defaults, _options);
          var adapter = null;

          if (options.dropdownAdapter == null) {
            if (options.multiple) {
              adapter = Dropdown;
            } else {
              adapter = Utils.Decorate(Dropdown, DropdownSearch);
            }

            if (options.minimumResultsForSearch !== 0) {
              adapter = Utils.Decorate(adapter, MinimumResultsForSearch);
            }

            if (options.closeOnSelect) {
              adapter = Utils.Decorate(adapter, CloseOnSelect);
            }

            if (options.dropdownCssClass != null || options.dropdownCss != null || options.adaptDropdownCssClass != null) {
              adapter = Utils.Decorate(adapter, DropdownCSS);
            }

            adapter = Utils.Decorate(adapter, AttachContainer);
          }

          return adapter;
        };
      });
      this.setupSidenavMobileDropdowns();
      this.setupLRBDropdowns();
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Dropdown', error);
    }
  }

  triggerDecadeDropdown(target) {
    if (target && target != '') {
      $('.decadenav-item .lrb-dropdown').select2('close');
      var sortStr = '';
      var sort = global.utils.getURLParam('sort');

      if (sort && sort != '') {
        sortStr = '?sort=' + sort;
      }

      window.location = '/archive/' + target + sortStr;
    }
  } //====================================
  // Generate dropdown for mobile display for .lrb-listnav elements
  //====================================


  setupSidenavMobileDropdowns() {
    $('.lrb-listnav').each(function () {
      if (!$(this).hasClass('mobileListNavSetup') && $(this).find('.lrb-listnav--mobile').length) {
        var $list = $(this).find('.lrb-listnav--list');
        var $target = $(this).find('.lrb-listnav--mobile');
        var str = '<select class="lrb-dropdown lrb-dropdown--nav">';
        $list.find('.lrb-listnav--link').each(function () {
          var link = $(this).attr('href');
          var selected = $(this).hasClass('selected') ? ' selected' : '';
          var text = $(this).html();
          var option = '<option value="' + link + '"' + selected + '>' + text + '</option>';
          str = str + option;
        });
        str = str + '</select>';
        $target.html(str);
        $(this).addClass('mobileListNavSetup');
        $target.find('.lrb-dropdown').on('change', function () {
          if ($(this).val()) {
            window.location = $(this).val();
          }
        });
      }
    });
  }

  setupLRBDropdowns() {
    let scope = this;
    var selectOptions = null;
    $(".lrb-dropdown").each(function () {
      var renderDropdown = true;

      if ($('html').hasClass('touch')) {
        renderDropdown = false;
      }

      if ($('body').hasClass('section-archive') || $('body').hasClass('section-search-results') || $(this).parent().hasClass('lettersnav-item')) {
        renderDropdown = true;
      }

      if (renderDropdown) {
        if (window.animateAll) {
          $(this).addClass('animated');
        }

        let $dropdown = $(this);
        $dropdown.parent().prepend($(''));

        switch (true) {
          case $dropdown.hasClass('lrb-dropdown--mulitple'):
            selectOptions = {
              placeholder: "Select",
              dropdownCssClass: "lrb-dropdown--mulitple",
              selectOnClose: false
            };
            break;

          case $dropdown.hasClass('lrb-dropdown--nav'):
            selectOptions = {
              placeholder: "Select",
              dropdownCssClass: "lrb-dropdown--nav",
              allowClear: false,
              selectOnClose: false
            };
            break;

          default:
            selectOptions = {
              placeholder: "Select",
              allowClear: false,
              selectOnClose: false
            };
        }

        if ($dropdown.parent().hasClass('lrb-filter-dropdowns') || window.animateAll) {
          //For filter dropdowns (e.g. year selector) wrap the dropdown markup in the same element as the selector
          selectOptions.placeholder = $dropdown.data('placeholder');
          selectOptions.dropdownAdapter = $.fn.select2.amd.require('CreateAttachContainerDropdownAdapter')(selectOptions);
          $dropdown.select2(selectOptions);
        } else {
          $dropdown.select2(selectOptions);
        }

        if ($dropdown.hasClass('animated')) {
          $dropdown.on('select2:open', function () {
            $(this).parent().addClass('dd-open');
            var $dd = $(this).parent().find('.select2-dropdown');
            $dd.hide();
            setTimeout(function () {
              $dd.slideDown(500);

              if ($('.style-override-holder').length > 0) {
                var DDheight = Math.max(120, Math.min($dd.find('.select2-results__options').outerHeight(true) + 60, 248));
                $('.style-override-holder').html("<style>.search-container .search-results--header .search-results--nav .searchfilter-group .lrb-filter-dropdowns .select2-container.select2-container--open:before{height:" + DDheight + "px !important;}</style>");
              }
            }, 10);
          });
          $dropdown.on('select2:close', function () {
            $(this).parent().removeClass('dd-open');
            var $dd = $(this).parent().find('.select2-dropdown');
            $dd.show();
            setTimeout(function () {
              //$dd.slideUp();
              $dd.show();
            }, 200);
            scope.updateMissingIssueDropdown($(this));
          });
        } else {
          $dropdown.on('select2:close', function () {
            scope.updateMissingIssueDropdown($(this));
          });
        }
      }
    }); //Force disable searching on dropdown

    $(".lrb-dropdown").on('select2:opening select2:closing', function (e) {
      var $searchfield = $(this).parent().find('.select2-search__field');
      $searchfield.prop('disabled', true);
    });
  }

  updateMissingIssueDropdown($target) {
    // Check if is a missing issue dropdown
    if ($target && $target.parents('.missing-issue-form').length > 0) {
      // Change shown shown field value to count of selected items
      var uldiv = $target.siblings('span.select2').find('ul');
      var count = $target.select2('data').length;

      if (count == 0) {
        uldiv.html("");
      } else {
        uldiv.html("<li>" + count + " issues selected</li>");
      }
    }
  }

  destroy() {}

}

module.exports = {
  LRBDropdown
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/form/LRBFormValidation.js":
/*!************************************************************!*\
  !*** ./assets/scripts/3_objects/form/LRBFormValidation.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {class LRBFormValidation {
  constructor() {
    //Displayed at the top of the form when there are errors with fields below
    this.generalError = "Please complete all fields."; //Displayed at the top of the Create Account form when there are errors with fields below

    this.generalCreateAccountError = "Please check your details and try again."; //Displayed below individual fields when there are errors with them

    this.invalidEmail_fieldError = "Please enter a valid email address.";
    this.invalidNumberLimit_fieldError = "This is not a valid number, please refer to the instruction below.";
    this.required_fieldError = "This field is required.";
    this.passwordMatch_fieldError = "The passwords you entered do not match.";
    this.emailMatch_fieldError = "The email addresses entered do not match.";
    this.googleRecaptcha_fieldError = "Please complete this field."; //If true then submit buttons on auto validating forms will not submit
    //This allows for easier testing of error messages without submitting forms

    this.debugSubmit = false; //If true then will not do front-end validation on Google Recaptcha fields, overridden by ENV VAR

    this.disableGoogleRecaptchaCheck = false; //Easy disabling of error messages

    this.allowErrorMessages = true; //Used by forms with the class 'no-genvalidation-errors' to disable general errors on that form

    this.disableGeneralErrorMessages = false;
  }

  setup() {
    console.log('%cLRBFormValidation Setup', "background-color: ".concat(global.infoBG, ";"));

    try {
      this.autoValidate();
      this.checkForErrorsOnLoad(); // Overwrite default value with ENV VAR if set (in header.html.twig)

      if (typeof window.lrbRecaptcha !== 'undefined') {
        this.disableGoogleRecaptchaCheck = window.lrbRecaptcha;
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Auto Validation', error);
    }
  }
  /** General Error Messages **/
  //===============================
  // Show error message at top of form, if element available, as set in:
  // account_forms/form_notifications.html.twig
  //===============================


  showGeneralError(msg) {
    if (!this.allowErrorMessages || this.disableGeneralErrorMessages) {
      return false;
    }

    let scope = this;
    console.log("[General Form Error] " + msg);
    var $targetID = '#form-error-notification';

    if ($('html').hasClass('lrb-modalOpen')) {
      $targetID = '#modal-error-notification';
    }

    if ($($targetID).length && msg && msg != "") {
      //If form does not have class to suppress General Validation Errors then show error message
      if (!$($targetID).parent().hasClass('no-GVE-errors')) {
        $($targetID).html(msg);

        if ($($targetID + ':visible').length == 0) {
          $($targetID).slideDown();
        }

        $($targetID).removeAttr('aria-hidden');
        $($targetID).attr('role', 'alert');
        scope.hideGeneralSuccess(true);
      }
    }

    $('.modal-container .modalcontent').animate({
      scrollTop: 0
    }, 400, "swing");
    $('.submitting').removeClass('submitting');
  } //===============================
  // Hide error message at top of form
  //===============================


  hideGeneralError(animate = false) {
    if (!this.allowErrorMessages) {
      return false;
    }

    console.log("[Clear General Form Errors]");
    var $targetID = '#form-error-notification';

    if ($('html').hasClass('lrb-modalOpen')) {
      $targetID = '#modal-error-notification';
    }

    if ($($targetID).length) {
      $($targetID).html('');

      if (animate) {
        $($targetID).slideUp(200);
      } else {
        $($targetID).css('display', 'none');
      }

      $($targetID).attr('aria-hidden', true);
    }
  } //===============================
  // Show success message at top of form, if element available, as set in:
  // account_forms/form_notifications.html.twig
  //===============================


  showGeneralSuccess(msg) {
    if (!this.allowErrorMessages) {
      return false;
    }

    console.log("[General Form Success] " + msg);

    if ($('#form-success-notification').length && msg && msg != "") {
      //If form does not have class to suppress General Validation Success then show success message
      if (!$('#form-success-notification').parent().hasClass('no-GVE-success')) {
        $('#form-success-notification').html(msg);

        if ($('#form-success-notification:visible').length == 0) {
          $('#form-success-notification').slideDown();
        }

        $('#form-success-notification').removeAttr('aria-hidden');
        $('#form-success-notification').attr('role', 'alert');
      }
    }

    $('.submitting').removeClass('submitting');
  } //===============================
  // Hide error message at top of form
  //===============================


  hideGeneralSuccess(animate = false) {
    if (!this.allowErrorMessages) {
      return false;
    }

    console.log("[Clear General Form Success]");

    if ($('#form-success-notification').length) {
      $('#form-success-notification').html('');

      if (animate) {
        $('#form-success-notification').slideUp(200);
      } else {
        $('#form-success-notification').css('display', 'none');
      }

      $('#form-success-notification').attr('aria-hidden', true);
    }
  } //===============================
  // If form errors exist on page-load then jump to relevant point on page, when 'errorAutoScroll' class exists
  //===============================


  checkForErrorsOnLoad() {
    if ($('.errorAutoScroll').length) {
      var scrollTarget = null;

      if ($('.error').length) {
        scrollTarget = $('.error').eq(0);
      }

      if ($('#form-error-notification').length) {
        if ($('#form-error-notification').hasClass('status-error')) {
          scrollTarget = $('#form-error-notification');
        }
      } else if ($('.validation-error-message.error').length) {
        scrollTarget = $('.validation-error-message.error').first();
      }

      if (scrollTarget) {
        console.log("Error notification found, jumping to that part of the page");
        setTimeout(function () {
          global.utils.scrollTo(scrollTarget, 300, 1);
        }, 50);
      } else {
        console.log("No error notification found");
      }
    }
  }
  /** Per Field Error Messages **/
  //===============================
  // Show error message below field, if element available, as set in:
  // account_forms/form_validation_holder.html.twig
  //===============================


  showFieldError($field, msg) {
    if (!this.allowErrorMessages) {
      return false;
    }

    console.log("[Field Error] " + $field + " - " + msg);

    if ($field && msg) {
      $field.parent().find('.validation-error-message').html(msg).addClass('error'); //fix for repeated fields in static forms - i.e. password confirm

      if ($field.parent().parent().parent().hasClass('form-group-duo')) {
        $field.parent().parent().parent().find('.validation-error-message').html(msg).addClass('error');
      }
    }

    $('.submitting').removeClass('submitting');
  } //===============================
  // Hide error message at top of form
  //===============================


  hideFieldError($field) {
    if (!this.allowErrorMessages) {
      return false;
    }

    console.log("[Clear Field Error] " + $field);

    if ($field) {
      $field.parent().find('.validation-error-message').html('').removeClass('error');
    }
  }

  clearFieldErrors() {
    if (!this.allowErrorMessages) {
      return false;
    }

    console.log("[Clear All Field Errors]");
    $('.validation-error-message').html('').removeClass('error');
    $('form input, form select, form textarea').removeClass('error');
  }
  /** End Error Messages **/
  //===============================
  // Run through all validations automatically on forms that are set to automatically validate
  //===============================


  autoValidate() {
    let scope = this;
    $('.autoValidate').each(function () {
      var $parent = $(this); //Only setup on forms not already setup

      if (!$(this).hasClass('autoValidate-setup')) {
        console.log("LRBFormValidation -- autoValidate setup");
        $(this).find('button[type="submit"], #form_send').on('click', function (e) {
          if ($(this).hasClass('no-genvalidation-errors')) {
            //temp block general errors for this form
            scope.disableGeneralErrorMessages = true;
          }

          var errors = !scope.autoValidateFieldsInForm($parent); //reset temp error block

          scope.disableGeneralErrorMessages = false;

          if (errors) {
            e.preventDefault();
            e.stopPropagation();
            $(this).removeClass('submitting');
            return false;
          } else {
            $(this).addClass('submitting');
          }

          if (scope.debugSubmit) {
            $(this).removeClass('submitting');
            $(this).html('!!!!');
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
        });
        scope.setupSpecificDisabledFields($parent);
        $(this).addClass('autoValidate-setup');
      }
    });
  }

  autoValidateFieldsInForm($form) {
    var errors = 0;
    this.clearFieldErrors();
    /* -- Avoid refactoring this, compressing to a one-line if/ternary or anything more compact breaks this -- */

    var emailFieldErrors = !this.emailTest($form);
    var requiredErrors = !this.requiredTest($form);
    var passwordMatchErrors = false;

    if ($form.find('.passwordmatch--validate').length > 0) {
      passwordMatchErrors = !this.fieldMatchTest($form, '.passwordmatch--validate', this.passwordMatch_fieldError);
    }

    var googleCaptchaErrors = !this.googleRecaptchaCompleteCheck($form);
    var numberLimitErrors = !this.numberLimitTest($form);
    var patternErrors = !this.patternTest($form);
    var emailMatchErrors = false;

    if ($form.find('.emailmatch--validate').length > 0) {
      emailMatchErrors = !this.fieldMatchTest($form, '.emailmatch--validate', this.emailMatch_fieldError);
    } //A general error message override, for when there is only an ondividual error


    var generalErrorOverride = "";

    if (emailFieldErrors) {
      console.log('Email Field Errors');
      errors++;
    }

    if (requiredErrors) {
      console.log('Required Field Errors');
      errors++;
    }

    if (passwordMatchErrors) {
      console.log('Password Match Errors');
      errors++;
      generalErrorOverride = this.passwordMatch_fieldError;
    }

    if (emailMatchErrors) {
      console.log('Email Match Errors');
      errors++;
      generalErrorOverride = this.emailMatch_fieldError;
    }

    if (googleCaptchaErrors) {
      console.log('Google Captcha Errors');
      errors++;
    }

    if (numberLimitErrors) {
      console.log('Number Limit Errors');
      errors++;
    }

    if (patternErrors) {
      console.log('Pattern Errors');
      errors++;
    }

    if (errors > 1) {
      generalErrorOverride = "";
    }
    /* ----- */


    if (errors > 0) {
      if ($form.attr('id') == 'create_account_form') {
        this.showGeneralError(this.generalCreateAccountError);
      } else {
        if (generalErrorOverride != "") {
          this.showGeneralError(generalErrorOverride);
        } else {
          this.showGeneralError(this.generalError);
        }
      }

      if (!$form.parent().hasClass('inner') && !$('html').hasClass('lrb-modalOpen')) {
        //Scroll to first error, if not in a modal
        if ($('html').hasClass('touch')) {
          //scroll to top on touch
          global.utils.scrollToTop();
        } else {
          //scroll to first error field on non-touch
          var $firstError = $('input.error, select.error, textarea.error').eq(0);
          global.utils.scrollTo($firstError, 200);
        }
      }
    } else {
      this.hideGeneralError(true);
    }

    return !errors;
  } //===============================
  // Check confirm field matches the one it is supposed to
  //===============================


  fieldMatchTest($parent, matchClass, $errorMsg) {
    let scope = this;

    if ($parent) {
      var error = true;
      $parent.find(matchClass).each(function () {
        //setup re-test

        /*if(!$(this).hasClass('lrb-matchTesting')){
            $(this).addClass('lrb-matchTesting');
            $(this).change(function(){
                 //scope.fieldMatchTest($parent, $errorMsg);
             });
        }*/
        var $target = null;

        if ($(this).data('match-target')) {
          $target = $('.' + $(this).data('match-target'));
        }

        if ($target) {
          if ($(this).val() === $target.val()) {
            error = false;
          } else {
            $(this).addClass('error');
            $target.addClass('error');
            scope.showFieldError($(this), $errorMsg);
          }
        }
      });

      if (error) {
        return false;
      } else {
        return true;
      }
    } else {
      console.log('[Validation Issue] fieldMatchTest - no parent set');
      return false;
    }
  } //===============================
  // Check fields with pattern validation rules are valid
  //===============================


  patternTest($parent) {
    const $field = $parent.find('input[pattern]');

    if ($field.length) {
      const value = $field.val();
      const pattern = new RegExp('^' + $field.attr('pattern') + '$');
      const title = $field.attr('title') || 'Please enter a valid value';

      if (value && !pattern.test(value)) {
        this.showFieldError($field, title);
        return false;
      }

      this.hideFieldError($field);
      return true;
    }

    return true;
  } //===============================
  // Check Google Recaptcha field completed
  //===============================


  googleRecaptchaCompleteCheck($parent) {
    if (this.disableGoogleRecaptchaCheck) {
      return true;
    }

    let scope = this;

    if ($parent && $parent.find('.g-recaptcha').length > 0) {
      if ($parent.find('.g-recaptcha').find("#g-recaptcha-response").val() == "") {
        scope.showFieldError($parent.find('.g-recaptcha'), scope.googleRecaptcha_fieldError);
        return false;
      } else {
        return true;
      }
    } else {
      console.log('[Validation Issue] googleRecaptchaCompleteCheck - target not found');
      console.log($parent);
      return true;
    }
  } //===============================
  // Check fields with number limit are blank or numerical only, and not containing anything other than numbers
  //===============================


  numberLimitTest($parent) {
    let scope = this;

    if ($parent) {
      var error = false;
      $parent.find('input[data-numberlimit]').each(function () {
        var valid = true;
        var val = $(this).val(); // skip validation is field is blank

        if (val != '') {
          // check if is numerical
          if (!$.isNumeric(val)) {
            valid = false;
          } else {
            // check is within max limits
            var limit = parseInt($(this).data('numberlimit'));

            if (limit && limit > 0) {
              if (val.length > limit) {
                valid = false;
              }
            } // check is within optional min limits


            if ($(this).data('numberlimit-min') != '') {
              var min = parseInt($(this).data('numberlimit-min'));

              if (min && min > 0) {
                if (val.length < min) {
                  valid = false;
                }
              }
            }
          }
        }

        if (!valid) {
          error = true;
          $(this).addClass('error');
          var message = scope.invalidNumberLimit_fieldError;

          if ($(this).data('numberlimit-message') != '') {
            message = $(this).data('numberlimit-message');
          }

          scope.showFieldError($(this), message);
        }
      });

      if (error) {
        return false;
      } else {
        return true;
      }
    } else {
      console.log('[Validation Issue] numberLimitTest - no parent set');
      return false;
    }
  } //===============================
  // Check email fields are valid emails
  //===============================


  emailTest($parent) {
    let scope = this;

    if ($parent) {
      var error = false;
      $parent.find('input[type="email"]').each(function () {
        var valid = scope.isValidEmailAddress($(this).val());

        if (!valid) {
          error = true;
          $(this).addClass('error');
          scope.showFieldError($(this), scope.invalidEmail_fieldError);
        }
      });

      if (error) {
        return false;
      } else {
        return true;
      }
    } else {
      console.log('[Validation Issue] emailTest - no parent set');
      return false;
    }
  }

  isValidEmailAddress(emailStr) {
    if (emailStr && emailStr != "") {
      /*
      [a-z0-9$&'+/=?^_`{|}~-]+            // Local part of the email: letters, digits, and certain special characters
      (?:                                 // Non-capturing group for domain segments
          \.[a-z0-9$&'+/=?^_`{|}~-]+      // Dot followed by more local part characters
      )*                                  // Zero or more occurrences of the domain segment group
      @                                   // @ symbol separating local part from domain part
      (?:                                 // Non-capturing group for domain
          [a-z0-9]                        // First character of domain
          (?:                             // Non-capturing group for domain segments
              [a-z0-9-]*                  // Optional additional characters in domain
              [a-z0-9]                    // Last character of domain
          )?                              // Optional domain segment
          \.                              // Dot separating domain segments
      )+                                  // One or more occurrences of the domain segment group
      [a-z0-9]                            // First character of top-level domain (TLD)
      (?:                                 // Non-capturing group for TLD segments
          [a-z0-9-]*                      // Optional additional characters in TLD
          [a-z0-9]                        // Last character of TLD
      )?                                  // Optional TLD segment
      /i                                  // Case insensitive matching
      */
      const pattern = /[a-z0-9$&'+/=?^_`{|}~-]+(?:\.[a-z0-9$&'+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
      var valid = pattern.test(emailStr);
      return valid;
    } else {
      //blank, as we dont want to flag this as an invalid email address
      return true;
    }
  }

  //===============================
  // Check required fields are filled in
  //===============================
  requiredTest($parent) {
    let scope = this;

    if ($parent) {
      var error = false;
      $parent.find('input, textarea, select').each(function () {
        var validateThis = false;

        if ($(this).attr('required')) {
          //A required field, flag for validation
          validateThis = true;
        }

        if ($(this).hasClass('forceRequired')) {
          //A field with fake validation (i.e. on account subscription DSB form)
          //Check if this is a visible / active field, and if so then flag for validation
          console.log();

          if ($(this).is(":visible")) {
            validateThis = true;
          } else {}
        }

        if (validateThis) {
          var isUncheckedCheckbox = false;
          var isOnlySpaces = false;
          var emptyArray = false;

          if ($(this).attr('type') == "checkbox") {
            // Check for unchecked checkboxes
            if ($(this).prop('checked') == false) {
              isUncheckedCheckbox = true;
            }
          } else {
            if ($(this).val()) {
              if (Array.isArray($(this).val())) {
                if ($(this).val().length == 0) {
                  emptyArray = true;
                }
              } else {
                // Check for space only values
                var amendedVal = $(this).val().replace(/ /g, '');

                if (amendedVal == "") {
                  isOnlySpaces = true;
                }
              }
            }
          }

          if (!$(this).val() || isUncheckedCheckbox || isOnlySpaces || emptyArray) {
            $(this).addClass('error');
            error = true;
            var errorMsg = scope.required_fieldError;

            try {
              if ($(this).data('required-error')) {
                errorMsg = "" + $(this).data('required-error');
              }
            } catch (e) {
              console.warn("Invalid 'required-error' set on required field");
            }

            scope.showFieldError($(this), errorMsg);
          }
        }
      });

      if (error) {
        return false;
      } else {
        return true;
      }
    } else {
      console.log('[Validation Issue] requiredTest - no parent set');
      return false;
    }
  } //===============================
  // This allows for fields to control disabled states of other fields according to selected values
  // set according to data values on a field; the disabler:
  // e.g.
  // 'data-spec-disabled' => '#appSupport_softwareVersionApple, #appSupport_softwareVersionAndroid', 'data-spec-enabledvals' => '[["3","6"],["4","7"]]'
  // would disable #appSupport_softwareVersionApple unless an option with value 3 or 6 is selected on the disabler, and
  // would disable #appSupport_softwareVersionAndroid unless an option with value 4 or 7 is selected on the disabler
  //===============================


  setupSpecificDisabledFields($parent) {
    let scope = this;
    console.log("Setting up Specific Disabler Fields");
    $parent.find('.lrb-specific-disabler').each(function () {
      var $disabler = $(this);

      if ($disabler) {
        //Each disabler can control multiple fields, grab them all and setup
        var $disabledFields = $($disabler.data('spec-disabled'));
        var enabledVals = $disabler.data('spec-enabledvals');

        if ($disabledFields && enabledVals) {
          $disabledFields.each(function (i) {
            var $disabled = $(this);
            var enVals = enabledVals[i];
            scope.checkDisablerVal($disabler, $disabled, enVals);
          });
          $disabler.on('change', function () {
            $disabledFields.each(function (i) {
              var $disabled = $(this);
              var enVals = enabledVals[i];
              scope.checkDisablerVal($disabler, $disabled, enVals);
            });
          });
        } else {
          console.error('Disabler Field missing required data');
          global.LRBErrorTracking.captureMessage('Disabler Field missing required data');
        }
      }
    });
  }

  checkDisablerVal($disabler, $disabled, enabledVals) {
    if ($disabler && $disabled && enabledVals) {
      var $disParent = $disabled.parent();

      if ($.inArray($disabler.val(), enabledVals) > -1) {
        //value matched, enable other field
        $disParent.removeClass('disabled');
        $disParent.slideDown();
      } else {
        //value not matched, disable other field
        $disParent.addClass('disabled');
        $disParent.slideUp();
        $disabled.val(null).trigger("change");
      }
    } else {
      console.error('Disabler Field missing required data');
      global.LRBErrorTracking.captureMessage('Disabler Field missing required data');
    }
  }

  destroy() {}

}

module.exports = {
  LRBFormValidation
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/form/LRBForms.js":
/*!***************************************************!*\
  !*** ./assets/scripts/3_objects/form/LRBForms.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {class LRBForms {
  constructor() {}

  setup() {
    console.log('%cLRBForms Setup', "background-color: ".concat(global.infoBG, ";"));

    try {
      this.checkDisabledCheckboxes();
      this.setupYesNoCheckboxToggle();
      this.setupBackOfficeForms();
      this.setupTACLinks();
      this.setupNewsletterSelectAllButton();
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Forms', error);
    }
  }

  setupNewsletterSelectAllButton() {
    let scope = this;
    var allSelected = true;
    $('.newsletter-sub-list').each(function () {
      if ($(this).find('input[type="checkbox"]').prop("checked") == false) {
        allSelected = false;
      }
    });

    if (allSelected) {
      $('.js-select-all').addClass('all-selected');
    }

    scope.updateNewsletterSelectAllButton();
    $('.js-select-all').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      if ($(this).hasClass('all-selected')) {
        $(this).parents('form').find('input[type="checkbox"]').prop("checked", false);
      } else {
        $(this).parents('form').find('input[type="checkbox"]').prop("checked", true);
      }

      $(this).toggleClass('all-selected');
      scope.updateNewsletterSelectAllButton();
      return false;
    });
  }

  updateNewsletterSelectAllButton() {
    if ($('.js-select-all').hasClass('all-selected')) {
      $('.js-select-all').text('Unselect all newsletters');
    } else {
      $('.js-select-all').text('Select all newsletters');
    }
  }
  /* For diabled checkboxes set their parent labels to also disabled, if present */


  checkDisabledCheckboxes() {
    $(':checkbox').each(function () {
      if ($(this).prop('disabled')) {
        if ($(this).parent().is('label')) {
          $(this).parent().addClass('disabled');
        }

        $(this).on('change', function () {
          if (!$(this).prop('disabled')) {
            $(this).parent().removeClass('disabled');
          }
        });
      }
    });
  } //========================================
  // Account page forms - Clear all sub-toggles in 'Yes' option for '.js-checkToggle's
  //========================================


  setupYesNoCheckboxToggle() {
    $('.js-checkToggle').each(function () {
      var $chkTggle = $(this); //On clicking no, deselect all yes checkboxes

      $chkTggle.find('.noCheckbox input:radio').on('change', function () {
        console.log("No Clicked");
        $chkTggle.find('.yesCheckbox .sub-toggle-list input').prop("checked", false);
      }); //On clicking any yes checkbox, deselect no, and select yes

      $chkTggle.find('.yesCheckbox input:checkbox').on('change', function () {
        console.log("Yes Checkbox Clicked");
        $chkTggle.find('.noCheckbox input:radio').prop("checked", false);
        $chkTggle.find('.yesCheckbox input:radio').prop("checked", true); //check if others in same section are selected
        //if none remain selected then deselect yes, and select no

        if ($chkTggle.find('.yesCheckbox input:checkbox:checked').length == 0) {
          $chkTggle.find('.noCheckbox input:radio').prop("checked", true);
          $chkTggle.find('.yesCheckbox input:radio').prop("checked", false);
        }
      }); //On clicking yes, deselect no, and select all checkboxes

      $chkTggle.find('.yesCheckbox input:radio').on('change', function () {
        console.log("Yes Clicked");
        $chkTggle.find('.noCheckbox input:radio').prop("checked", false);
        /*if($chkTggle.find('.yesCheckbox input:checkbox').length < 2){
            $chkTggle.find('.yesCheckbox input').prop("checked", true);
        }*/

        $chkTggle.find('.yesCheckbox .sub-toggle-list input').prop("checked", true);
      });
    });
  } //========================================
  // Reformat terms and conditions copy to replace '[terms and conditions]' with link to TAC modal
  //========================================


  setupBackOfficeForms() {
    if ($('#js-lrbTAC-linkCheck label').length > 0) {
      var tacSplit = $('#js-lrbTAC-linkCheck label').html().split("[terms and conditions]");
      var tacStr = tacSplit[0] + '<a href="#Terms-and-Conditions" class="js-lrbtac-link">terms and conditions</a>' + tacSplit[1] + '';
      $('#js-lrbTAC-linkCheck label').html(tacStr);
    }
  } //========================================
  // Add click trigger to open T&Cs modal from TACLinks
  //========================================


  setupTACLinks() {
    $('#contributorDetail_agreeTerms').on('change', function () {
      if (this.checked) {
        global.LRBModal.openTACModal();
      }
    });
    $('.js-lrbtac-link').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      global.LRBModal.openTACModal();
      return false;
    });
    $('#js-tacModalAccept').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $('#js-lrbTAC-linkCheck').find('input:checkbox').prop("checked", true);
      global.LRBModal.closeModal();
      return false;
    });
  } //========================================
  // Form Validation Setup - jQuery Form Validator
  //========================================


  setupFormValidation() {}

  destroy() {}

}

module.exports = {
  LRBForms
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/form/LRBInstitutionForms.js":
/*!**************************************************************!*\
  !*** ./assets/scripts/3_objects/form/LRBInstitutionForms.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {const INST_LOGIN = "/librarian/login";

class LRBInstitutionForms {
  constructor() {}

  setup() {
    console.log('%cLRBInstitutionForms Setup', "background-color: ".concat(global.infoBG, ";"));

    if ($('body').hasClass('section-librarian')) {
      this.setupInstitutionForm();
      this.setupInstitutionAdminForm();

      try {
        //scroll to the form on institution pages with notifications
        if ($('#form-success-notification:visible').length == 0 || $('#form-error-notification:visible').length == 0) {
          setTimeout(function () {
            global.utils.scrollTo($('#form-success-notification'), 120);
          }, 1000);
        }
      } catch (error) {
        global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Institutional Forms', error);
      }
    }
  } //=================================================================
  // Create Institution form
  //=================================================================


  createInstitutionForm() {
    let scope = this;
    global.LRBModal.loadContentIntoModal(INST_LOGIN, function () {
      scope.setupInstitutionForm();
    });
  }

  setupInstitutionForm() {
    global.LRBFormValidation.autoValidate();
    global.resizing.modalResizeHandler();
    $('#inst-login').on('submit', function (e) {
      global.LRBFormValidation.hideGeneralError();
    });
  } //=================================================================
  // Create Institution Admin form
  //=================================================================


  createInstitutionAdminForm() {
    let scope = this;
    global.LRBModal.loadContentIntoModal(INST_LOGIN, function () {
      scope.setupInstitutionAdminForm();
    });
  }

  setupInstitutionAdminForm() {
    global.LRBFormValidation.autoValidate();
    global.resizing.modalResizeHandler();
    $('#inst-login').on('submit', function (e) {
      global.LRBFormValidation.hideGeneralError();
    });
  }

  destroy() {}

}

module.exports = {
  LRBInstitutionForms
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/form/LRBRecaptcha.js":
/*!*******************************************************!*\
  !*** ./assets/scripts/3_objects/form/LRBRecaptcha.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {const SITE_KEY = "6LczS7oSAAAAAAsRvla1WKdNqLQdw95-8QSnBSYT";

class LRBRecaptcha {
  constructor() {
    this.recaptchaSetup = false;
  }

  setup() {
    try {
      if ($('.g-recaptcha').length > 0) {
        console.log('%cLRBRecaptcha Setup', "background-color: ".concat(global.infoBG, ";"));
        this.setupGoogleRecaptchas();
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Recaptcha', error);
    }
  }

  setupGoogleRecaptchas() {
    console.log('Initialising Recaptchas');
    $('.g-recaptcha').each(function (i, el) {
      if ($(this).hasClass('grsetup') || this.recaptchaSetup) {
        return false;
      }

      if (window.grecaptcha && window.grecaptcha.render) {
        window.grecaptcha.render(el, {
          'sitekey': SITE_KEY,
          'theme': $(el).attr('data-theme'),
          'size': $(el).attr('data-size'),
          'tabindex': $(el).attr('data-tabindex'),
          'callback': $(el).attr('data-callback'),
          'expired-callback': $(el).attr('data-expired-callback'),
          'error-callback': $(el).attr('data-error-callback')
        });
        $(this).addClass('grsetup');
        this.recaptchaSetup = true;
      } else {
        console.error('Error rendering recaptcha');
      }
    });
  }

  destroy() {}

}

module.exports = {
  LRBRecaptcha
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/form/LRBSubscriptions.js":
/*!***********************************************************!*\
  !*** ./assets/scripts/3_objects/form/LRBSubscriptions.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {__webpack_require__(/*! velocity-animate */ "./node_modules/velocity-animate/velocity.js"); // Active only, no IZ


const ACTIVE_SUBSCRIPTION_STATUSES = ["A", "active"]; // Inactive, expired, and cancelled

const INACTIVE_SUBSCRIPTION_STATUSES = ["I", "expired", "cancelled (refund)", "cancelled (duplicate)", "cancelled"];

class LRBSubscriptions {
  constructor() {
    window._orders = [];
    window.lrbLoadSubOrder = this.loadOrder;
    window.setupEditAddressPage = this.setupEditAddressPage;
    window.slideShow = this.slideShow;
    window.slideHide = this.slideHide;
    window.activeSubscription = null;
  }

  setup() {
    console.log('%cLRBSubscriptions Setup', "background-color: ".concat(global.infoBG, ";"));
    this.setupSubscriptionCancellationForm();
    this.trackCancelRequest();

    try {
      let scope = this; // Load order/subscription on change

      if ($('.subcriptions-content ').length > 0) {
        $(".subcriptions-content #form_order_number").change(function () {
          scope.loadOrder($(this).val());
        });
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Subscriptions', error);
    }

    document.addEventListener('DOMContentLoaded', function () {
      const showAddressButton = document.getElementById('show-delivery-address');
      const addressDescription = document.querySelector('.delivery-address-description');
      const addressSection = document.querySelector('.delivery-address-section');
      const subscriptionNumberField = document.getElementById('form_subscription_number');

      if (showAddressButton) {
        showAddressButton.addEventListener('click', function (e) {
          e.preventDefault();
          global.utils.hideElement(addressDescription);
          global.utils.showElement(addressSection, 'block'); // Make subscription number not required

          if (subscriptionNumberField) {
            subscriptionNumberField.removeAttribute('required'); // Also remove any validation classes if they exist

            subscriptionNumberField.classList.remove('is-invalid'); // Clear any validation messages

            const validationHolder = subscriptionNumberField.closest('.form-group').querySelector('.form-validation-holder');

            if (validationHolder) {
              validationHolder.innerHTML = '';
            }
          }
        });
      }
    });
  } // Load initial order/subscription


  loadOrder(order_number, orders_obj = null, hasExpiredSub = false, hasValidSub = false) {
    if (orders_obj) {
      window._orders = orders_obj;
    }

    var subscription = window._orders[order_number];

    if (!subscription) {
      location.href = "/account/subscriptions";
      return false;
    }

    window.activeSubscription = subscription; // Show/hide cancel link based on subscription status

    var cancelBlock = document.getElementById('cancel_subscription');

    if (cancelBlock) {
      // Show/hide cancel link based on subscription status
      if (subscription && ACTIVE_SUBSCRIPTION_STATUSES.includes(subscription.order_status)) {
        global.utils.showElement(cancelBlock, 'block');
      } else {
        global.utils.hideElement(cancelBlock);
      } // Modal trigger for cancel link


      var cancelLink = cancelBlock.querySelector('.js-cancel-subscription');

      if (cancelLink && !cancelLink._cancelHandlerSetup) {
        cancelLink.addEventListener('click', function (e) {
          e.preventDefault();
          window.LRBModal.openCancellationModal(window.activeSubscription.first_name, window.activeSubscription.last_name, window.activeSubscription.email, window.activeSubscription.order_number);
        });
        cancelLink._cancelHandlerSetup = true;
      }
    } // Format name


    var fullname = [];
    var address = [];

    if (subscription.title != "") {
      fullname.push(subscription.title);
    }

    if (subscription.first_name != "") {
      fullname.push(subscription.first_name);
    }

    if (subscription.last_name != "") {
      fullname.push(subscription.last_name);
    } // Format address


    if (fullname.length) {
      address.push(fullname.join(" "));
    }

    if (subscription.job_title != "") {
      address.push(subscription.job_title);
    }

    if (subscription.company1 != "") {
      address.push(subscription.company1);
    }

    if (subscription.company2 != "") {
      address.push(subscription.company2);
    }

    if (subscription.company3 != "") {
      address.push(subscription.company3);
    }

    if (subscription.po_box != "") {
      address.push(subscription.po_box);
    }

    if (subscription.po_box_city != "") {
      address.push(subscription.po_box_city);
    }

    if (subscription.po_box_zipcode != "") {
      address.push(subscription.po_box_zipcode);
    }

    if (subscription.address_1 != "") {
      address.push(subscription.address_1);
    }

    if (subscription.address_2 != "") {
      address.push(subscription.address_2);
    }

    if (subscription.address_3 != "") {
      address.push(subscription.address_3);
    }

    if (subscription.street != "") {
      address.push(subscription.street);
    }

    if (subscription.town != "") {
      address.push(subscription.town);
    }

    if (subscription.county != "") {
      address.push(subscription.county);
    }

    if (subscription.postcode != "") {
      address.push(subscription.postcode);
    }

    if (subscription.country != "") {
      address.push(subscription.country);
    }

    var delivery_address = address.join("<br>");
    delivery_address += '<a class="editIconLink" href="/account/subscription/' + subscription.house + '/' + order_number + '/delivery-address/">Edit</a>'; // Create links

    var credit_card_payment = '<a class="lrb-sidenav--link lrb-arrowlink lrb-arrowlink-dark" href="http://www.lrb.me/update" target="_blank"><span>Update credit card details</span></a>';
    var suspend_subscription = '<a class="lrb-sidenav--link lrb-arrowlink lrb-arrowlink-dark" href="/account/subscription/' + subscription.house + '/' + order_number + '/suspend/"><span>Suspend your subscription</span></a>';
    var claim_missing_issue = '<a class="lrb-sidenav--link lrb-arrowlink lrb-arrowlink-dark"href="/account/subscription/' + subscription.house + '/' + order_number + '/claim-a-missing-issue/"><span>Claim a missing issue</span></a>'; // Update UI

    var last_issue = "";
    var email = global.utils.escapeHTML(subscription.email);

    if (email == "") {
      email = "<em>No email address provided</em>";
    }

    $(".subcriptions-content #last_issue_title").show();

    if (subscription.payment_method == "CCC") {
      last_issue = "Your subscription will auto-renew each year";
      $(".subcriptions-content #last_issue_title").hide();
    } else {
      // If last_issue_expiry_string then use this for displaying last issue
      // Otherwise construct from the last_issue_text and last_issue_date as previously
      if (subscription.last_issue_expiry_string != "") {
        last_issue += subscription.last_issue_expiry_string;
      } else {
        last_issue += subscription.last_issue_text;

        if (subscription.last_issue_date != "") {
          last_issue += " (" + subscription.last_issue_date + ")";
        }
      }
    } // If subscription contains warning text then display this


    if (subscription.warning_message && subscription.warning_message !== "") {
      global.LRBAlerts.showFormWarning(subscription.warning_message);
    } else {
      global.LRBAlerts.clearFormWarnings();
    }

    $(".subcriptions-content #last_issue .accountdetails-block--content").html(last_issue);
    $(".subcriptions-content #customer_number .accountdetails-block--content").text(subscription.order_number);
    $(".subcriptions-content #delivery_address .accountdetails-block--content").html(delivery_address);
    $(".subcriptions-content #email .accountdetails-block--content").html(email + '<a class="editIconLink" href="/account/subscription/' + subscription.house + '/' + order_number + '/edit-email-address/">Edit</a>');
    $(".subcriptions-content #credit_card_payment").parent().hide();
    $(".subcriptions-content #suspend_subscription").parent().show();
    $(".subcriptions-content #claim_missing_issue").parent().show();
    $(".subcriptions-content .editIconLink").show();

    if (INACTIVE_SUBSCRIPTION_STATUSES.includes(subscription.order_status)) {
      $(".subcriptions-content #credit_card_payment").parent().hide();
      $(".subcriptions-content #suspend_subscription").parent().hide();
      $(".subcriptions-content #claim_missing_issue").parent().hide();
      $(".subcriptions-content #last_issue_title").show().text('Your final issue was');
      $(".subcriptions-content .editIconLink").hide();
      var contact_email = "";

      if (subscription.house == "DSB") {
        contact_email = "help@mylrb.co.uk";
      } else if (subscription.house == "PCD") {
        contact_email = "nasubs@mylrb.co.uk";
      }
    }

    $(".subcriptions-content #suspend_subscription").html(suspend_subscription);
    $(".subcriptions-content #claim_missing_issue").html(claim_missing_issue);
    global.utils.updateURL("/account/subscriptions/" + order_number);
  }

  slideShow($target) {
    $target.velocity('stop').velocity("slideDown", {
      duration: 400
    }).velocity("fadeIn", {
      duration: 800,
      queue: false
    });
    $('html').addClass('formAnimating');
    setTimeout(function () {
      $('html').removeClass('formAnimating');
    }, 500);
  }

  slideHide($target) {
    $target.velocity('stop').velocity("slideUp", {
      duration: 400
    }).velocity("fadeOut", {
      duration: 400,
      queue: false
    });
    $('html').addClass('formAnimating');
    setTimeout(function () {
      $('html').removeClass('formAnimating');
    }, 500);
  }

  setupEditAddressPage(company, po_box, country) {
    console.log("Setup Edit Address Form: company - " + company + ", po_box - " + po_box + ", country - " + country); //init

    toggleCompanyFields(company);
    togglePoBoxFields(po_box);
    toggleAddressFields(country); //company switch

    $('input[name=company_switch]').change(function () {
      toggleCompanyFields($('input[name=company_switch]:checked').val());
    });

    function toggleCompanyFields(toggle) {
      if (toggle != "") {
        window.slideShow($("#company_fields"));
      } else {
        window.slideHide($("#company_fields"));
      }
    } //PO box switch


    $('input[name=po_box_switch]').change(function () {
      togglePoBoxFields($('input[name=po_box_switch]:checked').val());
    });
    var poBoxFieldsOpen = false;

    function togglePoBoxFields(toggle) {
      if (toggle != "") {
        poBoxFieldsOpen = true;
        window.slideShow($("#po_box_fields"));
        window.slideHide($("#uk_fields"));
        window.slideHide($("#row_fields"));
        window.slideHide($("#shared_fields"));
        window.slideHide($("#addressSearch"));
      } else {
        poBoxFieldsOpen = false;
        window.slideHide($("#po_box_fields"));
        toggleAddressFields($('#form_country').val());
        window.slideShow($("#shared_fields"));
        window.slideShow($("#addressSearch"));
      }
    } //address switch


    $('#form_country').change(function () {
      toggleAddressFields($(this).val());
    });

    function toggleAddressFields(toggle) {
      if (poBoxFieldsOpen) {
        window.slideHide($("#uk_fields"));
        window.slideHide($("#row_fields"));
        return;
      }

      if (toggle == "GB") {
        window.slideShow($("#uk_fields"));
        window.slideHide($("#row_fields"));
      } else {
        window.slideHide($("#uk_fields"));
        window.slideShow($("#row_fields"));
      }
    }
  }

  setupSubscriptionCancellationForm() {
    // Only run if the cancellation form is present
    const cancellationForm = document.querySelector('#subscription-cancellation-form');
    if (!cancellationForm) return; // Check if loaded in modal from account page

    const isModal = !cancellationForm.closest('.inline-modal-container');
    console.log('%cSetupSubscriptionCancellationForm', "background-color: ".concat(global.infoBG, ";")); // Handle show address button

    const showAddressButton = document.getElementById('show-delivery-address');
    const addressSection = document.querySelector('.delivery-address-section');
    const addressDescription = document.querySelector('.delivery-address-description');
    const subscriptionNumberField = document.getElementById('form_subscription_number');

    if (showAddressButton) {
      // Set initial ARIA states
      if (addressSection) {
        addressSection.setAttribute('aria-hidden', 'true');
      }

      if (addressDescription) {
        addressDescription.setAttribute('aria-hidden', 'false');
      }

      showAddressButton.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (showAddressButton) global.utils.hideElement(showAddressButton);
        if (addressDescription) global.utils.hideElement(addressDescription);
        if (addressSection) global.utils.showElement(addressSection, 'block'); // Make subscription number not required

        if (subscriptionNumberField) {
          var _subscriptionNumberFi, _subscriptionNumberFi2;

          subscriptionNumberField.removeAttribute('required');
          subscriptionNumberField.classList.remove('is-invalid', 'forceRequired'); // Remove validation messages

          const validationHolder = (_subscriptionNumberFi = subscriptionNumberField.closest('.form-group')) === null || _subscriptionNumberFi === void 0 ? void 0 : _subscriptionNumberFi.querySelector('.validation-error-message');

          if (validationHolder) {
            validationHolder.innerHTML = '';
            validationHolder.classList.remove('error');
          } // Remove required marker from label


          const label = (_subscriptionNumberFi2 = subscriptionNumberField.closest('.form-group')) === null || _subscriptionNumberFi2 === void 0 ? void 0 : _subscriptionNumberFi2.querySelector('label');

          if (label) {
            label.classList.remove('required');
            const requiredMarker = label.querySelector('.required-marker');

            if (requiredMarker) {
              requiredMarker.remove();
            }
          }
        }

        return false;
      });
    } // If the cancellation form is being displayed in a modal, handle submission via AJAX


    if (isModal) {
      cancellationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $.ajax({
          url: '/account/cancel',
          type: 'POST',
          data: $('#subscription-cancellation-form').serialize(),
          success: function (response) {
            console.log('LRBSubscriptions: cancel form success:', response);

            if (response.status === 'success') {
              // If the server responds with success, redirect to the success page
              console.log('LRBSubscriptions: redirecting to success page');
              window.location.href = '/cancel/success?referrer=' + response.referrer + '&email=' + response.email + '&subscription_number=' + response.subscription_number + '&cancellation_reason=' + response.cancellation_reason;
            } else if (response.status === 'error') {
              // If there are errors, display them in the modal
              console.log('LRBSubscriptions: displaying modal error');
              let errorMessage = 'There was an error submitting your cancellation request. Please try again.';

              if (response.errors && response.errors.length > 0) {
                errorMessage = response.errors.join(' <br/>');
              }

              global.LRBAlerts.showModalError(errorMessage);
              global.utils.scrollToTop(800, '.modalcontent');
            }
          },
          error: function (xhr, status, error) {
            console.error('LRBSubscriptions: cancel form error:', error);
          }
        });
      });
    }
  }

  trackCancelRequest() {
    var _window, _window2, _window3, _window4;

    if (!window.cancelRequest) {
      return;
    }

    const subscriptionNumber = ((_window = window) === null || _window === void 0 ? void 0 : _window.cancelRequest.subscription_number) || null;
    const cancellationReason = ((_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.cancelRequest.cancellation_reason) || null;
    const email = ((_window3 = window) === null || _window3 === void 0 ? void 0 : _window3.cancelRequest.email) || null;
    const referrer = ((_window4 = window) === null || _window4 === void 0 ? void 0 : _window4.cancelRequest.referrer) || null;
    let storageKey = null;

    if (subscriptionNumber == null) {
      if (email && email != "") {
        storageKey = "lrb-cancel-".concat(email);
      }
    } else {
      storageKey = "lrb-cancel-".concat(subscriptionNumber);
    }

    console.log('LRBSubscriptions: cancellation request storageKey - ' + storageKey);

    if (storageKey == null) {
      console.log('LRBSubscriptions: No storage key found, skipping');
      return;
    } // Check if data already exists and clean up expired data


    const existingData = this.getStoredCancellationData(storageKey);

    if (existingData) {
      console.log('LRBSubscriptions: Existing cancellation data found, skipping');
      return;
    }

    console.log('LRBSubscriptions: Cancellation data stored and tracked');
    global.LRBTracking.trackCancellation(referrer, cancellationReason); // Store new data with expiration

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1); // Expire after 1 day

    localStorage.setItem(storageKey, JSON.stringify({
      reason: cancellationReason,
      timestamp: new Date().toISOString(),
      expiresAt: expirationDate.toISOString()
    }));
  }

  getStoredCancellationData(storageKey) {
    try {
      const storedData = localStorage.getItem(storageKey);

      if (!storedData) {
        return null;
      }

      const data = JSON.parse(storedData); // Check if data has expired

      if (data.expiresAt) {
        const expirationDate = new Date(data.expiresAt);
        const now = new Date();

        if (now > expirationDate) {
          console.log('LRBSubscriptions: Removing expired data');
          localStorage.removeItem(storageKey);
          return null;
        }
      }

      return data;
    } catch (error) {
      console.error('LRBSubscriptions: Error parsing stored data:', error);
      localStorage.removeItem(storageKey);
      return null;
    }
  }

  destroy() {}

}

module.exports = {
  LRBSubscriptions
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/media/LRBVideo.js":
/*!****************************************************!*\
  !*** ./assets/scripts/3_objects/media/LRBVideo.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const fitvids = __webpack_require__(/*! fitvids */ "./node_modules/fitvids/index.js");

class LRBVideo {
  constructor() {}

  setup() {
    console.log('%cLRBVideo Setup', "background-color: ".concat(global.infoBG, ";"));

    try {
      this.scaleHTMLVideos();
      this.scaleVideoHolders();
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Video', error);
    }
  }

  scaleHTMLVideos() {
    fitvids('.ezmedia-field');
  }

  scaleVideoHolders() {
    fitvids('.ezrichtext-field iframe');
    fitvids('.video-holder');
  }

}

module.exports = {
  LRBVideo
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/ui/LRBAccordion.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/3_objects/ui/LRBAccordion.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {__webpack_require__(/*! velocity-animate */ "./node_modules/velocity-animate/velocity.js");

class LRBAccordion {
  constructor() {
    this.accordionCnt = 0;
  }

  setup() {
    console.log('%cLRBAccordion Setup', "background-color: ".concat(global.infoBG, ";"));

    try {
      this.setupAutoAccordions();
      let scope = this;
      $('.lrb-accordion').each(function () {
        scope.accordionCnt++;
        $(this).addClass('lrb-accordion-' + scope.accordionCnt);
        $(this).find('.lrb-accordion__header').on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();

          if (!$('html').hasClass('lrb-accordion-animating')) {
            if ($(this).parent().hasClass('show')) {
              $('.lrb-accordion .show').removeClass('show');
            } else {
              $('.lrb-accordion .show').removeClass('show');
              $(this).parent().addClass('show');
            }

            scope.animateShow();
          }

          return false;
        });

        if ($(this).addClass('show')) {
          scope.animateShow();
        }
      });
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Accordions', error);
    }
  }

  setupAutoAccordions() {
    const scope = this;
    const $containers = $('.services-page-content, .textonly-container .textonly-col');
    $containers.addClass('lrb-accordion-auto'); // Process each container

    $containers.each(function () {
      try {
        const $container = $(this);
        const $questions = $container.find('.question');

        if (!$questions.length) {
          console.warn('No questions found in container:', $container);
          return;
        } // Process each question


        $questions.each(function (index) {
          const $question = $(this);
          const $nextQuestion = $questions.eq(index + 1);
          let $answerContent = $(); // Get all elements between current question and next question

          let $current = $question.next();
          let foundAnswer = false;

          while ($current.length && (!$nextQuestion.length || $current[0] !== $nextQuestion[0])) {
            if ($current.hasClass('answer')) {
              // If we find an answer, start/continue collecting
              foundAnswer = true;
              $answerContent = $answerContent.add($current);
            } else if (foundAnswer && $current.is('h1, h2, h3, h4, h5, h6')) {
              // If we've found an answer and this is another heading, stop
              break;
            } else if (foundAnswer) {
              // If we've found an answer, include this content
              $answerContent = $answerContent.add($current);
            }

            $current = $current.next();
          } // Only create accordion if we found an answer


          if (foundAnswer) {
            // Create the accordion HTML
            const html = scope.createAccordionHTML($question.html(), $answerContent.map(function () {
              return $(this).prop('outerHTML');
            }).get().join(''), index); // Replace the question's content with the accordion

            $question.html(html); // Remove the original content

            $answerContent.remove();
          }
        });
      } catch (e) {
        console.error('Error in setupAutoAccordions:', e);
        global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Accordions', e);
      }
    });
  }

  createAccordionHTML(question, answer, index) {
    const html = "<div class=\"lrb-accordion autoAccordion clearfix lrb-accordion-".concat(index + 1, " show\">\n                <div class=\"lrb-accordion__item clearfix\">\n                    <a href=\"#open\" class=\"lrb-accordion__header\">\n                        <h3>").concat(question, "</h3>\n                        <div class=\"plus-icon\" aria-hidden=\"true\">\n                            <svg version=\"1.1\" class=\"expandArrow-svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 18 11\" xml:space=\"preserve\">\n                                <polygon style=\"fill-rule:evenodd;clip-rule:evenodd;fill:#494746;\" points=\"9,10.5 0.5,2.1 2.1,0.5 9,7.3 15.9,0.5 17.5,2.1\"></polygon>\n                            </svg>\n                        </div>\n                    </a>\n                    <div class=\"lrb-accordion__content\">\n                        ").concat(answer, "\n                    </div>\n                </div>\n            </div>\n        ");
    return html;
  }

  animateShow() {
    $('html').addClass('lrb-accordion-animating');
    $('.lrb-accordion .lrb-accordion__content').velocity("stop").velocity("slideUp", {
      duration: 450,
      complete: function () {}
    });
    $('.lrb-accordion .show .lrb-accordion__content').velocity("stop").velocity("slideDown", {
      duration: 450,
      complete: function () {}
    });
    setTimeout(function () {
      $('html').removeClass('lrb-accordion-animating');
    }, 450);
  }

  handleInteractionEvent(e) {}

  destroy() {
    this.accordionCnt = 0;
  }

}

module.exports = {
  LRBAccordion
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/ui/LRBAlerts.js":
/*!**************************************************!*\
  !*** ./assets/scripts/3_objects/ui/LRBAlerts.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {class LRBAlerts {
  constructor() {}

  setup() {
    console.log('%cLRBAlerts Setup', "background-color: ".concat(global.infoBG, ";"));
  } //============================
  // Show Error
  //============================


  showError(id, msg) {
    $(".alert-success").slideUp();
    $("#" + id).html("&nbsp;");
    global.utils.scrollToTop();
    $("#" + id).slideUp().slideDown(300, function () {
      $("#" + id).html(msg);
    });
    $('.submitting').removeClass('submitting');
  } //============================
  // Show Notification
  //============================


  showNotification(id, msg) {
    $(".alert-danger").slideUp();
    $("#" + id).html("&nbsp;");
    global.utils.scrollToTop();
    $("#" + id).slideUp().slideDown(300, function () {
      $("#" + id).html(msg);
    });
  } //============================
  // Show Form Error
  //============================


  showFormError(msg) {
    $("#form-error-notification").html(global.utils.unescapeHTML(msg)).slideDown();
    $("#form-error-notification").attr('role', 'alert');
    $("#form-error-notification").attr('aria-hidden', 'false');
    global.utils.scrollTo($("#form-error-notification"));
    $('.submitting').removeClass('submitting');
  } //============================
  // Show Form Warning
  //============================


  showFormWarning(msg) {
    $("#form-error-notification.status-warn").html(global.utils.unescapeHTML(msg)).slideDown();
    $("#form-error-notification.status-warn").attr('role', 'alert');
    $("#form-error-notification.status-warn").attr('aria-hidden', 'false');
    global.utils.scrollTo($("#form-error-notification.status-warn"));
  }

  clearFormWarnings() {
    $("#form-error-notification.status-warn").html('').slideUp();
    $("#form-error-notification.status-warn").attr('aria-hidden', 'true');
  } //============================
  // Show Form Success
  //============================


  showFormSuccess(msg) {
    $("#form-success-notification").html(global.utils.unescapeHTML(msg)).slideDown();
    $("#form-success-notification").attr('role', 'alert');
    $("#form-success-notification").attr('aria-hidden', 'false');
    global.utils.scrollTo($("#form-success-notification"));
  }

  clearFormNotifications() {
    $("#form-success-notification").slideUp();
  } //============================
  // Show Modal Error
  //============================


  showModalError(msg) {
    if ($('body').hasClass('section-login')) {
      //Use inline messaging
      global.LRBFormValidation.showGeneralError(msg);
    } else {
      //Use modal messaging
      $("#modal-error-notification").html(msg).slideDown();
      $("#modal-error-notification").attr('role', 'alert');
      $("#modal-error-notification").attr('aria-hidden', 'false');
    }

    $('.submitting').removeClass('submitting');
  } //============================
  // Show Modal Success
  //============================


  showModalSuccess(msg) {
    $("#modal-success-notification").html(msg).slideDown();
    $("#modal-success-notification").attr('role', 'alert');
    $("#modal-success-notification").attr('aria-hidden', 'false');
  }

  clearModalNotifications() {
    $("#modal-error-notification").slideUp();
    $("#modal-success-notification").slideUp();
  }

  destroy() {}

}

module.exports = {
  LRBAlerts
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/ui/LRBModal.js":
/*!*************************************************!*\
  !*** ./assets/scripts/3_objects/ui/LRBModal.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {class LRBModal {
  constructor() {
    window.loginModal = this.openLoginModal;
    window.signupModal = this.openSignupModal;
    window.subModal = this.openAddSubscriptionModal;
    window.instModal = this.openInstitutionModal;
    window.instAdminModal = this.openInstitutionAdminModal;
    window.custModal = this.openCustomerNumberHelpModal;
    window.tacModal = this.openTACModal;
    window.closeModal = this.closeModal;
    window.cancelSubModal = this.openCancellationModal; // Modal types configuration with selectors

    this.modalTypes = {
      tac: {
        value: "tac",
        selector: ".tac-modal-container .tac-modal-content"
      },
      main: {
        value: "main",
        selector: ".modal-container .inner"
      }
    };
  }

  setup() {
    console.log('%cLRBModal Setup', "background-color: ".concat(global.infoBG, ";"));

    try {
      let scope = this; //====================================
      // Open login modal on redirect
      //====================================

      $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);

        if (results == null) {
          return null;
        } else {
          return decodeURI(results[1]) || 0;
        }
      };

      if ($.urlParam('login')) {
        scope.openLoginModal();
      }

      if ($.urlParam('login-failure')) {
        var msg = [];
        msg[1] = "Incorrect email address or password";

        if (msg[$.urlParam('login-failure')]) {
          var m = encodeURI(msg[$.urlParam('login-failure')]);
        } else {
          var m = "";
        }

        scope.openLoginModal(m);
      }

      if ($.urlParam('signup')) {
        var email,
            fname,
            lname,
            custno = "";

        if ($.urlParam('email')) {
          email = decodeURIComponent($.urlParam('email'));
        }

        if ($.urlParam('fname')) {
          fname = decodeURIComponent($.urlParam('fname'));
        }

        if ($.urlParam('lname')) {
          lname = decodeURIComponent($.urlParam('lname'));
        }

        if ($.urlParam('custno')) {
          custno = decodeURIComponent($.urlParam('custno'));
        }

        scope.openSignupModal(email, fname, lname, custno);
      }

      scope.setupAccountLinks();
      scope.setupModalLinkListeners();
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Modals', error);
    }
  }

  setupAccountLinks() {
    console.log("LRBModal - setupModalLinkListeners");
    let scope = this; //===============================
    // Open login modal from link
    //===============================

    $(".js-login-link").each(function () {
      if ($(this).data('accountlinksetup') == 1) {
        return false;
      } else {
        $(this).data('accountlinksetup', 1);
      }

      $(this).on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        scope.openLoginModal();
        return false;
      });
    }); //===============================
    // Open singup modal from link
    //===============================

    $(".js-signup-link").each(function () {
      if ($(this).data('accountlinksetup') == 1) {
        return false;
      } else {
        $(this).data('accountlinksetup', 1);
      }

      $(this).on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        scope.openSignupModal();
        return false;
      });
    });
  }

  endOfTaCs() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          // remove 'disabled' class if observation target is inside viewport
          global.LRBModal.handleIntersect();
        }
      });
    }); // Declares what to observe, and observes its properties.

    const container = document.querySelector('#tac_end');
    io.observe(container);
  }

  handleIntersect() {
    $('.tac-modal-links .btn-primary').removeClass('disabled');
  }

  setupModalLinkListeners() {
    console.log("LRBModal - setupModalLinkListeners");
    let scope = this; //===============================
    // Open Institution modal from link
    //===============================

    $("#institutions_account_link, .institutions_account_link").on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      scope.openInstitutionModal();
      return false;
    }); //===============================
    // Open Institution Admin modal from link
    //===============================

    $("#institutions_admin_link, .institutions_admin_link").on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      scope.openInstitutionAdminModal();
      return false;
    }); //===============================
    // Open Add Subscription modal from link
    //===============================

    $(".js-addSubscription").on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      scope.openAddSubscriptionModal();
      return false;
    }); //===============================
    // Close modal from link
    //===============================

    $(".close-modal").on('click', function (e) {
      ///reset for TaCs
      if (this.parentElement.className === 'tac-modal-links') {
        scope.disableTacsBtn(this);
      }

      e.preventDefault();
      e.stopPropagation();
      scope.closeModal();
      return false;
    });
  } //=============================================================================================
  // Reset TaCs accept button and checkbox if user closes modal instead of accepting
  // Scroll modal content back to top
  //=============================================================================================


  disableTacsBtn(elem) {
    elem.previousElementSibling.classList.add("disabled");
    $('#contributorDetail_agreeTerms').prop('checked', false);
    $('.tac-modal-container .modalcontent').scrollTop(0);
  } //===============================
  // Open Login Modal
  //===============================


  openLoginModal(msg = "") {
    if (!global.LRBallowSignIn) {
      return;
    }

    global.LRBAlerts.clearModalNotifications();
    global.LRBAccountForms.createLoginForm(msg);
    global.LRBModal.openMainModal();
  } //===============================
  // Open Signup Modal
  //===============================


  openSignupModal(email = "", fname = "", lname = "", custno = "") {
    if (!global.LRBallowSignIn) {
      return;
    }

    global.LRBAlerts.clearModalNotifications();
    global.LRBAccountForms.createAccountForm(email, fname, lname, custno);
    global.LRBModal.openMainModal();
  } //===============================
  // Open Add Subscription Modal
  //===============================


  openAddSubscriptionModal() {
    global.LRBAlerts.clearModalNotifications();
    global.LRBAccountForms.createAddSubscriptionForm();
    global.LRBModal.openMainModal();
  } //===============================
  // Open Institution Modal
  //===============================


  openInstitutionModal() {
    if (!global.LRBallowSignIn) {
      return;
    }

    global.LRBAlerts.clearModalNotifications();
    global.LRBInstitutionForms.createInstitutionForm();
    global.LRBModal.openMainModal();
  } //===============================
  // Open Institution Modal
  //===============================


  openInstitutionAdminModal() {
    if (!global.LRBallowSignIn) {
      return;
    }

    global.LRBAlerts.clearModalNotifications();
    global.LRBInstitutionForms.createInstitutionAdminForm();
    global.LRBModal.openMainModal();
  } //===============================
  // Customer Number Help Modal - Activate Form - link to open modal for this
  //===============================


  openCustomerNumberHelpModal() {
    console.log("LRBModal - openCustomerNumberHelpModal");
    $(".modal-container").addClass("showCustno");
    global.resizing.resizeHandler();
    $(".modal-container").scrollTop(0);

    if ($('html').hasClass('lrb-modalOpen')) {
      $('html').addClass('lrb-modalPreOpened');
      $(".modal-container").attr("aria-hidden", "false");
    } else {
      global.LRBModal.openMainModal();
    }

    $('#showCustClose').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      global.LRBModal.closeModal();
      return false;
    });
    setTimeout(function () {
      global.resizing.resizeHandler();
      $(".modal-container").scrollTop(0);
    }, 100);
    setTimeout(function () {
      global.resizing.resizeHandler();
    }, 300);
  } //===============================
  // Open modals
  //===============================


  openMainModal() {
    $('html').addClass('lrb-modalOpen');
    $(".modal-container").attr("aria-hidden", "false");
    global.resizing.resizeHandler();
    setTimeout(function () {
      global.resizing.resizeHandler();
      global.LRBRecaptcha.setupGoogleRecaptchas();
      global.LRBFormValidation.autoValidate();
    }, 100);
  }

  openTACModal() {
    $('html').addClass('lrb-tacModalOpen');
    $(".tac-modal-container").attr("aria-hidden", "false");
    global.LRBModal.loadContentIntoModal("/terms-and-conditions-copy", function () {
      setTimeout(global.LRBModal.endOfTaCs, 100);
    }, global.LRBModal.modalTypes.tac.value);
  }

  loadContentIntoModal(urlToLoad, callback = null, modalType = "main") {
    if (!urlToLoad || !modalType) {
      console.error('Missing required parameters for loadContentIntoModal:', {
        urlToLoad,
        modalType,
        callback
      });
      return;
    }

    const modalConfig = modalType === global.LRBModal.modalTypes.tac.value ? global.LRBModal.modalTypes.tac : global.LRBModal.modalTypes.main;
    const modalContainer = $(modalConfig.selector);

    if (modalContainer.length === 0) {
      console.error('Modal container not found for type:', modalType);
      return;
    }

    modalContainer.html(global.loadingIcon);
    modalContainer.load(urlToLoad, function () {
      global.resizing.resizeHandler();
      global.LRBModal.updateModalTitle();

      if (callback && typeof callback === 'function') {
        try {
          callback();
        } catch (callbackError) {
          console.error('Error in callback after content load:', callbackError);
        }
      }
    });
  }

  updateModalTitle() {
    let title = $(".modal-container h1, .modal-container h2").eq(0).text() || null;

    if (!title || title === "") {
      title = "Modal";
    }

    $(".modal-container").attr("aria-label", title);
  }

  growModal() {
    $(".modal-container").addClass("modal-container--wide");
  }

  shrinkModal() {
    $(".modal-container").removeClass("modal-container--wide");
  } //===============================
  // Close modal
  //===============================


  closeModal(force = false) {
    var previouslyOpen = false;

    if ($('html').hasClass('lrb-modalPreOpened')) {
      previouslyOpen = true;
    }

    if (previouslyOpen) {
      $('html').removeClass('lrb-modalPreOpened');
      $(".modal-container").removeClass("showCustno");
      $(".modal-container").scrollTop(0);
    } else {
      $('html').removeClass('lrb-modalOpen');
      $(".modal-container").attr("aria-hidden", "true");
    }

    if (force) {
      $('html').removeClass('lrb-modalPreOpened');
      $('html').removeClass('lrb-modalOpen');
      $(".modal-container").attr("aria-hidden", "true");
    }

    $('html').removeClass('lrb-tacModalOpen');
    $(".tac-modal-container").attr("aria-hidden", "true");

    if (!previouslyOpen) {
      setTimeout(function () {
        if (force) {
          $(".modal-container .inner").html("");
        }

        $(".modal-container").removeClass("showCustno");
      }, 500);
    }

    global.LRBModal.shrinkModal();
  } //===============================
  // Open Cancellation Modal
  //===============================


  openCancellationModal(fname = null, lname = null, email = null, sub_number = null) {
    global.LRBAlerts.clearModalNotifications();
    global.LRBModal.createModalCancellationForm(fname, lname, email, sub_number);
    global.LRBModal.growModal();
    global.LRBModal.openMainModal();
  }

  createModalCancellationForm(fname = null, lname = null, email = null, sub_number = null) {
    $(".modal-container .inner").html(global.loadingIcon);
    $.ajax({
      url: '/cancel',
      data: {
        fname,
        lname,
        email,
        sub_number,
        modal: true
      },
      type: 'GET',
      success: function (response) {
        $(".modal-container .inner").html(response);
        global.resizing.modalResizeHandler();
        global.LRBSubscriptions.setupSubscriptionCancellationForm();
        global.LRBTypography.cleanupForms();
        global.LRBFormValidation.autoValidate();
      },
      error: function (xhr, status, error) {
        global.LRBAlerts.showModalError("There was an error loading the cancellation form. Please try again later.");
      }
    });
  }

  destroy() {}

}

module.exports = {
  LRBModal
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/ui/LRBNavigation.js":
/*!******************************************************!*\
  !*** ./assets/scripts/3_objects/ui/LRBNavigation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_Headroom, global, $, Headroom) {__webpack_provided_window_dot_Headroom = __webpack_require__(/*! headroom.js/dist/headroom.js */ "./node_modules/headroom.js/dist/headroom.js"); //require("headroom.js/dist/jQuery.headroom.js");

const Flickity = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");

const inView = __webpack_require__(/*! in-view */ "./node_modules/in-view/dist/in-view.min.js");

class LRBNavigation {
  constructor() {
    this.headroom = null;
    global.headerPinned = true;
    this.navPinningDelay = 500;
    this.fakePaginateLimit = 15;
    this.currentlyShownFilteredItems = null;
  }

  setup() {
    console.log('%cLRBNavigation Setup', "background-color: ".concat(global.infoBG, ";"));

    try {
      this.setupSearchOptionsNav();
      this.setupHeadroom();
      this.setupNavLetterNavigations();
      this.setupDropdownNavigations();
      this.setupArticleSubnav();
      this.setupArticleTitleOverlay();
      this.setupListFilterNav();
      this.setupTOCNavigation();
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Navigation', error);
    }
  }

  setupSearchOptionsNav() {
    let scope = this;
    $('.search-options a').on('click', function () {
      scope.closeAllOverlays();
    });
  }

  setupHeadroom() {
    if ($('html').hasClass('ezmode')) {
      //if we're in EZ admin then dont setup
      return false;
    }

    let scope = this;
    var scrollOffset = Math.max(205, global.viewportHeight * 0.05);

    if ($(".header-container").length > 0) {
      this.headroom = new Headroom(document.querySelector(".header-container"), {
        //this.headroom = $(".header-container").headroom({
        // scroll tolerance in px before state changes
        tolerance: 15,
        // vertical offset in px before element is first unpinned
        offset: scrollOffset,
        // css classes to apply
        classes: {
          // when element is initialised
          initial: "lrbhead",
          // when scrolling up
          pinned: "lrbhead--pinned",
          // when scrolling down
          unpinned: "lrbhead--unpinned",
          // when above offset
          top: "lrbhead--top",
          // when below offset
          notTop: "lrbhead--not-top",
          // when at bottom of scoll area
          bottom: "lrbhead--bottom",
          // when not at bottom of scroll area
          notBottom: "lrbhead--not-bottom"
        },
        // callback when pinned, `this` is headroom object
        onPin: function () {
          scope.setHeaderPinned();
        },
        // callback when unpinned, `this` is headroom object
        onUnpin: function () {
          scope.setHeaderUnpinned();
        },
        // callback when above offset, `this` is headroom object
        onTop: function () {
          $('html').removeClass('lrb-nt');
        },
        // callback when below offset, `this` is headroom object
        onNotTop: function () {
          $('html').addClass('lrb-nt');
        },
        // callback at bottom of page, `this` is headroom object
        onBottom: function () {},
        // callback when moving away from bottom of page, `this` is headroom object
        onNotBottom: function () {}
      });
      this.headroom.init();
      setInterval(scope.updateHeaderPinState, scope.navPinningDelay);
    }
  }

  setHeaderPinned() {
    global.headerPinned = true;
  }

  setHeaderUnpinned() {
    global.headerPinned = false;
  }

  updateHeaderPinState() {
    if (global.headerPinned) {
      $('html').removeClass('lrbhead--unpin');
      $('html').addClass('lrbhead--pin');
    } else {
      $('html').addClass('lrbhead--unpin');
      $('html').removeClass('lrbhead--pin');
    }
  }

  updateHeadroomOnResize() {
    if (this.headroom) {
      this.headroom.offset = Math.max(205, global.viewportHeight * 0.05);
    }
  }

  setupNavLetterNavigations() {
    $('.lrb-alphabet-nav').each(function () {
      var $el = $(this).find('.lrb-alphabet-nav__list');
      var flkty = new Flickity($el[0], {
        cellAlign: 'center',
        contain: true,
        draggable: true,
        freeScroll: true,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false
      });
      $(this).find('.prev-link').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        flkty.previous();
        flkty.previous();
        flkty.previous();
        flkty.previous();
        flkty.previous();
        return false;
      });
      $(this).find('.next-link').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        flkty.next();
        flkty.next();
        flkty.next();
        flkty.next();
        flkty.next();
        return false;
      });
      $el.find('li').each(function (i) {
        if ($(this).find('.active, .selected').length > 0) {
          flkty.selectCell(i, false, true);
        }
      });
    });
  }

  setupDropdownNavigations() {
    let scope = this;
    $('.drop-menu').each(function (index, value) {
      scope.selectDropMenuItem($(this));
    });
    $('body').click(function () {
      scope.hideDropMenus();
    });
    $(".drop-menu .menu").on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
    $('.drop-menu').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $('.menu').not($('.menu', $(this))).hide();
      $('.drop-menu').not($(this)).removeClass("active");
      $('.menu', $(this)).slideToggle();
      $(this).toggleClass("active");
      return false;
    });
    $('.drop-menu .menu a').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation(); //console.warn("menuclick");

      $(".menu li a").removeClass("selected");
      $(this).addClass("selected");
      scope.selectDropMenuItem($(this).parent().parent().parent());
      return false;
    });
  }

  selectDropMenuItem(menu) {
    //console.log(menu);
    var found = 0;
    $('.menu li', menu).each(function (index, value) {
      if ($('a', $(this)).hasClass("selected")) {
        found = 1;
        $('.display', menu).text($('a', $(this)).text());
        $('.value', menu).text($('a', $(this)).data("value"));
      }
    });

    if (!found) {
      $('.display', menu).text(menu.data("default"));
    }

    this.hideDropMenus();
  }

  hideDropMenus() {
    $('.menu').hide();
    $('.drop-menu').removeClass("active");
  }

  toggleSuperNav() {
    /*if(!$('html').hasClass('lrb-supernavOpen')){
        $('body').css('top', -(document.documentElement.scrollTop) + 'px').addClass('noscroll');
    }else{
        $('body').css('top', '0px').addClass('no-scroll');
    }*/
    this.closeSearchNav();
    $('html').toggleClass('lrb-supernavOpen');
  }

  toggleOverlaySearchNav() {
    $('.searchField').val('');
    this.closeSearchNav();
    $('html').toggleClass('lrb-searchOverlayOpen');

    if ($('html').hasClass('lrb-searchOverlayOpen')) {
      $('.searchoverlay-container .searchField').focus();
    }
  }

  resetSuperNav(linkClass) {
    $('.has-submenu ul').hide();
    $('.submenuOpen').removeClass('submenuOpen');

    if (linkClass) {
      $(linkClass).parent().addClass('submenuOpen'); //$(linkClass).parent().find('ul').show();

      $(linkClass).parent().find('ul').velocity("stop").velocity("slideDown", {
        delay: 200,
        duration: 450
      });
    }
  }

  resetOverlaySearchNav(linkClass) {
    $('.has-submenu ul').hide();
    $('.submenuOpen').removeClass('submenuOpen');

    if (linkClass) {
      $(linkClass).parent().addClass('submenuOpen');
      $(linkClass).parent().find('ul').show();
    }
  }

  toggleSearchNav() {
    let scope = this;

    if (!$('html').hasClass('lrb-searchNavOpen')) {
      scope.openSearchNav();
    } else {
      scope.closeSearchNav();
    }
  }

  openSearchNav() {
    if (!$('html').hasClass('lrb-searchNavOpen')) {
      if (!$('html').hasClass('searchNavAnimating')) {
        $('html').addClass('searchNavAnimating');
        /*$('.lrb-search').velocity("stop").velocity("slideDown", { duration: 450, complete: function(){
            $('html').removeClass('searchNavAnimating');
             // update reveal setup for search options if havent already
            if($('.lrb-search').find('.revealed').length == 0){
                global.pageReady.updateScrollReveal();
            }
        }});*/

        var hHeight = $('.lrb-search').outerHeight(true);
        $('.header-container .header').velocity('stop').velocity({
          duration: 450,
          height: hHeight
        }); //$('.header-container .header').css('min-height',hHeight+'px');

        $('html').addClass('lrb-searchNavOpen');
        setTimeout(function () {
          $('html').removeClass('searchNavAnimating');
          $('.searchField').focus();
        }, 800);
      }
    }
  }

  closeSearchNav() {
    if ($('html').hasClass('lrb-searchNavOpen')) {
      if (!$('html').hasClass('searchNavAnimating')) {
        $('html').addClass('searchNavAnimating');
        /*$('.lrb-search').velocity("stop").velocity("slideUp", { duration: 450, complete: function(){
            $('html').removeClass('searchNavAnimating');
        }});*/

        $('.header-container .header').velocity("reverse", {
          duration: 200,
          complete: function () {
            $('.header-container .header').removeAttr('style');
          }
        }); //$('.header').removeAttr('style');

        setTimeout(function () {
          $('html').removeClass('searchNavAnimating');
          $('.searchField').val('');
        }, 350);
        $('html').removeClass('lrb-searchNavOpen');
      }
    }
  }

  closeAllOverlays() {
    $('html').removeClass('lrb-supernavOpen lrb-overlayed lrb-searchOverlayOpen');
    this.closeSearchNav();
    global.LRBModal.closeModal();
    global.LRBLightbox.closeLightbox();
    setTimeout(this.resetSuperNav, 400);
    setTimeout(this.resetOverlaySearchNav, 400);
  }

  setupTOCNavigation() {
    $('.tocCoverTopLink').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation(); //global.utils.scrollToTop();

      return false;
    });
  }

  setupArticleSubnav() {
    if ($('html').hasClass('ezmode')) {
      //if we're in EZ admin then return false
      return false;
    }

    if (this.checkIfArticlePage()) {
      var $el = $('.article-subnav-slider');

      if ($el.length > 0 && !$el.hasClass('subnavSetup')) {
        console.log('Setting up article-subnav');
        var flkty = new Flickity($el[0], {
          cellAlign: 'left',
          setGallerySize: false,
          adaptiveHeight: false,
          contain: true,
          draggable: true,
          freeScroll: false,
          prevNextButtons: true,
          pageDots: false,
          wrapAround: false
        });
        flkty.on('dragStart', function (event, pointer) {
          document.ontouchmove = function (e) {
            e.preventDefault();
          };
        });
        flkty.on('dragEnd', function (event, pointer) {
          document.ontouchmove = function (e) {
            return true;
          };
        });
        $el.find('.previous').on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();

          if (global.viewportWidth > 850) {
            flkty.previous();
          }

          if (global.viewportWidth > 1024) {//flkty.previous();
          }

          return false;
        });
        $el.find('.next').on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();

          if (global.viewportWidth > 850) {
            flkty.next();
          }

          if (global.viewportWidth > 1024) {//flkty.next();
          }

          return false;
        });
        $($el).addClass('subnavSetup');
      } else {
        console.log('Skipping Article Subnav, already setup');
      }
    } else {
      if ($('.article-subnav-slider').length > 0) {
        console.warn('Not an article page, force destroying article subnav');
        $('.article-subnav-slider').remove();
      }
    }
  }

  checkIfArticlePage() {
    if ($('html').hasClass('ezmode')) {
      //if we're in EZ admin then return false
      return false;
    }

    var articlePage = false;

    if ($('.article-header-container').length > 0 && $('.article').length > 0 && $('.lrb-article').length > 0) {
      if (!$('.article').hasClass('type--video') && !$('.article').hasClass('type--podcast')) {
        articlePage = true;
      }
    }

    return articlePage;
  }

  setupArticleTitleOverlay() {
    if ($('html').hasClass('ezmode')) {
      //if we're in EZ admin then dont setup
      return false;
    }

    if (this.checkIfArticlePage()) {
      if (!$('.article-title-overlay').hasClass('titleOverlaySetup')) {
        console.log('Setting up article-title-overlay');
        $('html').addClass('articleHeaderNotVisible');
        inView('.article-header-container').on('enter', function () {
          $('html').removeClass('articleHeaderNotVisible');
          $('html').addClass('articleHeaderVisible');
        }).on('exit', function () {
          $('html').addClass('articleHeaderNotVisible');
          $('html').removeClass('articleHeaderVisible');
          global.LRBTracking.trackArticleReadStart('Began scrolling', 'Reading');
        });
      } else {
        console.log('Skipping Article Title Overlay, already setup');
      }
    } else {
      if ($('.article-title-overlay').length > 0) {
        console.warn('Not an article page, force destroying article title overlay');
        $('.article-title-overlay').remove();
      }
    }
  }

  setupListFilterNav() {
    if ($('body').hasClass('section-contributors')) {
      this.fakePaginateLimit = 5;
    } else {
      this.fakePaginateLimit = 15;
    }

    let scope = this;
    let $toShow = null;

    if ($('.lrb-list-filter-nav').length > 0) {
      $('.lrb-list-filter-nav').each(function () {
        var $el = $(this);
        var skipSetup = $el.data('skip-setup');

        if (skipSetup) {
          console.warn('Skipping setup of Filter Nav element');
          return false;
        }

        if (!$el.hasClass('filternavSetup')) {
          var fakePaginate = $el.data('paginate');
          var fakePageText = "";

          if (fakePaginate) {
            var fakePageText = ", with fake pagination";
          }

          console.log('Setting up lrb-list-filter-nav' + fakePageText);
          var flkty = new Flickity($el[0], {
            cellAlign: 'center',
            setGallerySize: true,
            adaptiveHeight: false,
            contain: true,
            draggable: false,
            freeScroll: false,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: false
          });
          flkty.on('dragStart', function (event, pointer) {
            document.ontouchmove = function (e) {
              e.preventDefault();
            };
          });
          flkty.on('dragEnd', function (event, pointer) {
            document.ontouchmove = function (e) {
              return true;
            };
          });
          flkty.on('resize', function (event, pointer) {
            scope.checkFilterListDragging(flkty, $el);
          });
          scope.checkFilterListDragging(flkty, $el);
          $($el).addClass('filternavSetup'); //Setup list-filter functionality, to allow quick JS filtering of elements across a page

          $('.lrb-list-filter-nav:not(.contributor-list-nav)').each(function () {
            var $parent = $(this);
            scope.checkForFilterListBlogPosts($parent); //Initial Nav/List setup

            $(this).find('.list-filter-nav--link').each(function (i) {
              $(this).data('flktyid', i); //check for list items to filter for this nav link

              $toShow = null;

              if ($(this).data('show-class')) {
                $toShow = $("." + $(this).data('show-class'));

                if ($toShow.length == 0) {
                  //nothing set for display, remove this filter
                  $(this).parent().remove();
                }

                if (fakePaginate) {
                  $toShow.addClass('fake-paginate');
                }
              }
            });
            $(this).find('.list-filter-nav--link').each(function (i) {
              //check for list items to filter for this nav link
              $toShow = null;

              if ($(this).data('show-class')) {
                $toShow = $("." + $(this).data('show-class'));
              } else {
                return;
              }

              if ($(this).hasClass('selected')) {
                scope.showFilterListItems($toShow, $parent, scope, fakePaginate);
              } //Remove Empty categories on Events


              if ($('body').hasClass('section-events') && $toShow && $toShow.length == 0) {
                $(this).parent().remove();
                flkty.resize();
              }

              if ($parent.find('li').length < 2) {
                $parent.hide();
              }
            }); //Filter nav Click setup

            $(this).find('.list-filter-nav--link').on('click', function (e) {
              if ($(this).data('show-class')) {
                e.preventDefault();
                e.stopPropagation();

                if (!$(this).hasClass('selected')) {
                  $parent.find('.list-filter-nav--link.selected').removeClass('selected');
                  $(this).addClass('selected');
                  flkty.selectCell($(this).data('flktyid'));
                  $toShow = $("." + $(this).data('show-class'));

                  if ($toShow) {
                    scope.showFilterListItems($toShow, $parent, scope, fakePaginate);
                  } else {
                    console.error('No valid target for List Filter link');
                  }
                }

                return false;
              } else {
                console.warn('No data for List Filter link');
              }
            }); // Fake Pagination Link setup

            if (fakePaginate) {
              //$parent.parent().parent().find('.see-more-link .see-more').on('click', function(e){
              $('.see-more-link .see-more').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                scope.handleFakePaginate($parent, scope);
                return false;
              });
            } else {
              //$parent.find('.see-more-link').remove();
              $('.see-more-link').remove();
            } // Change sort order of Fake Pagination (flips order back and forth)


            if ($('.jsOldestSortToggle').length > 0) {
              $('.jsOldestSortToggle').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation(); // Flip Order
                //var list = $(this).parent().parent().find('.results-list--contents');

                var list = $('.results-list--contents');
                var listItems = list.children('.list-filter--item');
                list.append(listItems.get().reverse()); // Reshow to correct inverted offset
                //$toShow = $("."+$(this).parent().parent().find('.list-filter-nav--link.selected').data('show-class'));

                $toShow = $("." + $('.list-filter-nav--link.selected').data('show-class')); //console.log($toShow);

                scope.showFilterListItems($toShow, $parent, scope, fakePaginate); // Fix classes and reveal

                $('.first-shown-item').removeClass('first-shown-item');
                $toShow.eq(0).addClass('first-shown-item');
                window.pageReady.updateScrollReveal(); // Scroll and update button copy

                global.utils.scrollTo($('.contributor-list'), 85);
                $(this).toggleClass('oldest');

                if ($(this).hasClass('oldest')) {
                  $(this).html('Show newest');
                } else {
                  $(this).html('Show oldest');
                }

                return false;
              });
            }
          });
        } else {
          console.log('Skipping List Filter Nav, already setup');
        }
      });
    } //reset pagination amount


    this.fakePaginateLimit = 15;
  }

  showFilterListItems($toShow, $parent, scope, fakePaginate = false) {
    $('.list-filter--item').hide().attr('aria-hidden', true);

    if (fakePaginate) {
      $toShow.addClass('fake-paginate');
      $toShow.slice(0, scope.fakePaginateLimit).removeClass('fake-paginate');

      if ($toShow.length <= scope.fakePaginateLimit) {
        //$parent.parent().parent().find('.see-more-link .see-more').hide();
        $('.see-more-link .see-more').hide();
      } else {
        //$parent.parent().parent().find('.see-more-link .see-more').show();
        $('.see-more-link .see-more').show();
      }
    } //console.log($toShow);


    $toShow.velocity('stop').velocity("fadeIn", {
      duration: 400
    });
    window.pageReady.updateScrollReveal();
    $toShow.removeAttr('aria-hidden');
    $('.first-shown-item').removeClass('first-shown-item');
    $toShow.eq(0).addClass('first-shown-item');
    scope.currentlyShownFilteredItems = $toShow;
    scope.checkForFilterListBlogPosts($parent);
  }

  handleFakePaginate($parent, scope) {
    if (scope.currentlyShownFilteredItems) {
      console.log("Handling Fake Paginate");
      var $remainingFakePaginateItems = scope.currentlyShownFilteredItems.filter('.fake-paginate');
      var $fakePaginateItemsToShow = $remainingFakePaginateItems.slice(0, scope.fakePaginateLimit);
      $fakePaginateItemsToShow.removeClass('fake-paginate');
      window.pageReady.updateScrollReveal();
      $fakePaginateItemsToShow.removeAttr('aria-hidden');

      if ($remainingFakePaginateItems.length <= scope.fakePaginateLimit) {
        //$parent.parent().parent().find('.see-more-link .see-more').hide();
        $('.see-more-link .see-more').hide();
      }
    } else {
      console.warn("No items for fake paginate to handle");
    }
  }

  checkForFilterListBlogPosts($filterListNav) {
    if ($filterListNav.find('.list-filter-nav--link.selected').data('show-class') == "blog_post") {
      $filterListNav.parent().parent().addClass('showingBlogPosts');
    } else {
      $filterListNav.parent().parent().removeClass('showingBlogPosts');
    }
  }

  checkFilterListDragging(flkty, $el) {
    // see if filter list needs to be draggable or not, based on it's contents
    if (flkty && $el) {
      var oldDrag = flkty.options.draggable;
      var contentsWidth = 0;
      $el.find('.flickity-slider li').each(function () {
        contentsWidth += $(this).outerWidth(true);
      });

      if (contentsWidth > $el.find('.flickity-viewport').outerWidth(true)) {
        //contents are larger than carousel viewport, add scrolling
        flkty.options.draggable = true;
      } else {
        //contents are smaller than carousel viewport, remove scrolling
        flkty.options.draggable = false;
      }

      if (flkty.options.draggable != oldDrag) {
        //draggable option changed, update Flickity
        flkty.updateDraggable();
      }
    } else {
      console.error('Missing objects on checkFilterListDragging');
    }
  }

  destroy() {
    this.scrolledArticle = false;
  }

}

module.exports = {
  LRBNavigation
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! headroom.js/dist/headroom.js */ "./node_modules/headroom.js/dist/headroom.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! headroom.js/dist/headroom.js */ "./node_modules/headroom.js/dist/headroom.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/ui/LRBPagination.js":
/*!******************************************************!*\
  !*** ./assets/scripts/3_objects/ui/LRBPagination.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {var Intercooler = __webpack_require__(/*! intercooler */ "./node_modules/intercooler/dist/intercooler.js");

class LRBPagination {
  constructor() {}

  setup() {
    console.log('%cLRBPagination Setup', "background-color: ".concat(global.infoBG, ";"));

    try {
      $('body').on('complete.ic', function () {
        setTimeout(function () {
          window.pageReady.updateScrollReveal();
          global.LRBTypography.cleanUpTypography();
          global.LRBContributors.loadCovers();
        }, 50);
      });
      $('body').on('elementAdded.ic', function () {
        setTimeout(function () {
          window.pageReady.updateScrollReveal();
          global.LRBTypography.cleanUpTypography();
        }, 50);
        global.LRBSearch.cleanupAJAXNestedSearch();
        global.LRBSearch.updateSearchCount();
      });
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up IC Pagination', error);
    }
  }

  destroy() {}

}

module.exports = {
  LRBPagination
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/ui/LRBReadMore.js":
/*!****************************************************!*\
  !*** ./assets/scripts/3_objects/ui/LRBReadMore.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {__webpack_require__(/*! velocity-animate */ "./node_modules/velocity-animate/velocity.js");

class LRBReadMore {
  constructor() {}

  setup() {
    console.log('%cLRBReadMore Setup', "background-color: ".concat(global.infoBG, ";"));
    this.setupReviewReadMore();
    this.setupReadMoreLinks();
    global.pageReady.updateScrollReveal();
  }

  setupReviewReadMore() {
    try {
      //Generate read more links on article page reviewed items, when more than 3 shown on mobile
      $('.article.defaultArticle #lrb-articleCopy .reviewed-items-holder').each(function () {
        var itemCnt = $(this).find('.article-reviewed-item').length;
        $(this).addClass('cnt-' + itemCnt);

        if (itemCnt > 3) {
          $(this).addClass('collapsing-reviews');
          $(this).find('.article-reviewed-item').each(function (i) {
            if (i > 2) {
              $(this).addClass('collapsing-review--item');
            }
          });
          $('.collapsing-reviews').each(function () {
            $(this).find('.collapsing-review--item').wrapAll('<div class="collapsing-review"></div>');
          });
        }
      });
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up ReviewReadMore', error);
    }
  }

  setupReadMoreLinks() {
    try {
      //Setup 'Read More' Links, will show/hide the element(s) according to the string in data
      $('.lrb-readmorelink').each(function () {
        if ($(this).hasClass('readmore-target-setup')) {
          return false;
        }

        const $target = $($(this).data('readmore-target'));
        var transcriptLink = false;

        if ($(this).parents('.paperArticle-transcript').length > 0) {
          transcriptLink = true;
        }

        var reviewedItemsLink = false;

        if ($(this).parent().hasClass('reviewed-items-holder')) {
          reviewedItemsLink = true;
        }

        var startCopy = 'Read More';

        if (transcriptLink) {
          startCopy = 'Show More';
        }

        if (reviewedItemsLink) {
          startCopy = 'Show All';
        }

        if ($target) {
          $target.hide();
          $target.addClass('lrb-readmore-target--item');
          $(this).addClass('readmore-target-setup');
          $('.lrb-readmorelink').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            if (!$('html').hasClass('readmoreAnimating')) {
              $(this).toggleClass('opened');

              if ($(this).hasClass('opened')) {
                var readLessCopy = 'Read Less';

                if (transcriptLink) {
                  readLessCopy = 'Show Less';
                }

                if (reviewedItemsLink) {
                  readLessCopy = 'Show Less';
                }

                $target.velocity('stop').velocity("slideDown", {
                  duration: 400
                });
                $('html').addClass('readmoreAnimating');
                $(this).html(readLessCopy);
                setTimeout(function () {
                  $('html').removeClass('readmoreAnimating');
                }, 500);
              } else {
                var readMoreCopy = 'Read More';

                if (transcriptLink) {
                  readMoreCopy = 'Show More';
                }

                if (reviewedItemsLink) {
                  readMoreCopy = 'Show All';
                }

                $target.velocity('stop').velocity("slideUp", {
                  duration: 400
                });
                $('html').addClass('readmoreAnimating');
                $(this).html(readMoreCopy);

                if (!transcriptLink) {
                  global.utils.scrollToTop(400);
                }

                setTimeout(function () {
                  $('html').removeClass('readmoreAnimating');
                }, 500);
              }
            }

            return false;
          });
          $(this).html(startCopy);
        } else {
          console.error('No valid target for Read More link');
          $(this).remove();
        }
      });
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up ReadMore', error);
    }
  }

  destroy() {}

}

module.exports = {
  LRBReadMore
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/ui/LRBTooltip.js":
/*!***************************************************!*\
  !*** ./assets/scripts/3_objects/ui/LRBTooltip.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {__webpack_require__(/*! tooltipster */ "./node_modules/tooltipster/dist/js/tooltipster.bundle.min.js");

const fitvids = __webpack_require__(/*! fitvids */ "./node_modules/fitvids/index.js");

class LRBTooltip {
  constructor() {}

  setup() {
    console.log('%cLRBTooltip Setup', "background-color: ".concat(global.infoBG, ";"));

    try {
      let scope = this; // Setup generic tooltips

      $('.lrb-tooltip').tooltipster({
        animation: 'fade',
        trigger: 'click',
        contentCloning: true,
        IEmin: 11,
        side: ['bottom', 'top'],
        viewportAware: true,
        interactive: true,
        maxWidth: 300,
        updateAnimation: null,
        contentAsHTML: true
      }); // Setup missed / troublesome footnotes
      // must be reformatted as with others, as order they are processed in is important

      $('.article-content a').each(function (i) {
        // look manually for all footnotes in artcile content
        if ($(this) && $(this).attr('href')) {
          if ($(this).attr('href').indexOf('/footnotes/') > -1) {
            // dont setup footnotes that are already done
            if (!$(this).parent().hasClass('footnote-link')) {
              $(this).wrap('<span class="footnote-link"></span>');
            }
          }
        }
      }); // Setup article footnotes

      $('.footnote-link a').each(function (i) {
        $(this).data('tooltip-content', '#footnote' + i);
        $(this).attr('href', '#');

        if ($(this).html() == "[watch]" || $(this).html() == '<span class="footnote-link">[watch]</span>') {
          $(this).html('&nbsp;<span style="display: block;position: absolute;top: -1px;left: 9px;">▶</span>');
        }
      });
      $('.print-footnotes .print-footnote .footnote-content').each(function (i) {
        $(this).attr('id', 'footnote' + i);
      });
      $('.footnote-link a').tooltipster({
        animation: 'fade',
        trigger: 'custom',
        triggerOpen: {
          click: true,
          touchstart: true,
          tap: true
        },
        triggerClose: {
          click: true,
          originClick: true,
          touchstart: true,
          tap: true,
          scroll: false
        },
        contentCloning: true,
        IEmin: 11,
        side: ['bottom', 'top'],
        viewportAware: true,
        interactive: true,
        maxWidth: 500,
        updateAnimation: null,
        contentAsHTML: true,
        content: '<div class="lrb-loading-icon" aria-hidden="true"></div>',
        functionBefore: function (instance, helper) {
          var $origin = $(helper.origin); // Set a variable so the data is only loaded once via Ajax, not every time the tooltip opens

          /*if ($origin.data('loaded') !== true) {
                   $.get($origin.attr('href'), function(data) {
                       if(data.footnote){
                      // call the 'content' method to update the content of our tooltip with the returned data.
                      // note: this content update will trigger an update animation
                      instance.content(data.footnote);
                           $origin.data('loaded', true);
                  }
                   });
          }*/

          var targetId = $origin.data('tooltip-content');

          if (targetId && targetId != "") {
            var ttContent = $($origin.data('tooltip-content'));

            if (ttContent) {
              instance.content(ttContent);
            }
          }
        },
        functionReady: function (instance) {
          scope.scaleVideosInTooltip();
          instance.reposition();
          setTimeout(function () {//instance.reposition();
          }, 10000);
        }
      });
      $('.footnote-link a').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }); //Duplication content into Footnotes Print Display

      /*$('.footnote-link a').each(function(){
               var footnoteMarker = $(this).html();
               $.get($(this).attr('href'), function(data) {
              if(data.footnote){
                  $('.print-footnotes .footnotes-wrapper').append('<div class="print-footnote"><span class="footnote-marker">'+footnoteMarker+'</span>'+data.footnote+'</div>');
              }
          });
           });*/

      if ($('.footnote-link a').length == 0) {
        $('.print-footnotes').remove();
      }

      $('.footnote-link a').addClass('setup');
      setTimeout(function () {
        $('.lrb-tooltip').addClass('setup');
      }, 1000);
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Tooltip', error);
    }
  }

  scaleVideosInTooltip() {
    fitvids('.tooltipster-content .youtube-embed');
  }

  closeTooltips() {
    if ($('.tooltipster-base').length > 0) {
      $('.tooltipstered').tooltipster('close');
    }
  }

  destroy() {
    this.closeTooltips();
    $('.tooltipstered').tooltipster('destroy');
  }

}

module.exports = {
  LRBTooltip
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/3_objects/ui/LRBUnlinkedDropdown.js":
/*!************************************************************!*\
  !*** ./assets/scripts/3_objects/ui/LRBUnlinkedDropdown.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {class LRBUnlinkedDropdown {
  constructor() {}

  setup() {
    console.log('%cLRBUnlinkedDropdown Setup', "background-color: ".concat(global.infoBG, ";"));

    try {
      $('.lrb-unlinked-dropdown-btn').each(function () {
        $(this).on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();

          if ($(this).hasClass('force-hover')) {
            $('.lrb-unlinked-dropdown-content').velocity('stop').velocity("slideUp", {
              duration: 300
            }).velocity("fadeOut", {
              duration: 301,
              queue: false
            });
            $('.lrb-unlinked-dropdown-btn').removeClass('force-hover');
          } else {
            if ($(this).data('unlinked-dropdown') && $(this).data('unlinked-dropdown') != "") {
              $('.lrb-unlinked-dropdown-content').velocity('stop').velocity("slideDown", {
                duration: 400
              }).velocity("fadeIn", {
                duration: 800,
                queue: false
              });
              $(this).addClass('force-hover');
            }
          }

          return false;
        });
      });
      $('.lrb-unlinked-dropdown-close').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.lrb-unlinked-dropdown-content').velocity('stop').velocity("slideUp", {
          duration: 300
        }).velocity("fadeOut", {
          duration: 301,
          queue: false
        });
        $('.lrb-unlinked-dropdown-btn').removeClass('force-hover');
        return false;
      });
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Unlinked Dropdown', error);
    }
  }

  destroy() {}

}

module.exports = {
  LRBUnlinkedDropdown
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/4_components/LRBCarousel.js":
/*!****************************************************!*\
  !*** ./assets/scripts/4_components/LRBCarousel.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {const Flickity = __webpack_require__(/*! flickity/dist/flickity.pkgd.js */ "./node_modules/flickity/dist/flickity.pkgd.js");

const FlickityFullscreen = __webpack_require__(/*! flickity-fullscreen/fullscreen.js */ "./node_modules/flickity-fullscreen/fullscreen.js");

class LRBCarousel {
  constructor() {
    this.setupComplete = false;
    this.universalCarousels = [];
    this.tabletCarousels = [];
    this.mobileCarousels = [];
    this.galleryCarousels = [];
    this.arrowSVG = "M70,0l9,9.6L37.9,50l41,41l-9,9L20,50L70,0z";
    this.zoomSVG = "M3.7,23.8l7.3-7.3L9.5,15l-7.3,7.3v-7.1c0,0-0.4,0-1.1,0s-1.1,0-1.1,0v9.7C0,25.2,0,26,0,26s0.9,0,1.1,0h9.7c0,0,0-0.4,0-1.1c0-0.5,0-1.1,0-1.1H3.7z M15.2,0c0,0,0,0.4,0,1.1s0,1.1,0,1.1h7.1L15,9.5l1.5,1.5l7.3-7.3v7.1c0,0,0.4,0,1.1,0s1.1,0,1.1,0V1.1C26,0.8,26,0,26,0s-0.8,0-1.1,0H15.2z";
    this.closeZoomSVG = "M18.7,8.9L26,1.6l-1.5-1.5l-7.3,7.3V0.3c0,0-0.4,0-1.1,0c-0.7,0-1.1,0-1.1,0V10c0,0.3,0,1.1,0,1.1s0.9,0,1.1,0h9.7c0,0,0-0.4,0-1.1c0-0.5,0-1.1,0-1.1H18.7z M0.3,14.9c0,0,0,0.4,0,1.1c0,0.7,0,1.1,0,1.1h7.1l-7.3,7.3l1.5,1.5l7.3-7.3v7.1c0,0,0.4,0,1.1,0s1.1,0,1.1,0V16c0-0.3,0-1.1,0-1.1s-0.8,0-1.1,0H0.3z";
    this.zoomViewbox = "0 0 26 26";
    this.closeSVG = "M26,2.3 23.7,0 13,10.7 2.3,0 0,2.3 10.7,13 0,23.7 2.3,26 13,15.3 23.7,26 26,23.7 15.3,13";
    this.prevSVG = "M18.3,26l2.3-2.5L10,13L20.7,2.3L18.3,0l-13,13L18.3,26z";
    this.nextSVG = "M7.7,26l-2.3-2.5L16,13L5.3,2.3L7.7,0l13,13L7.7,26z";
  }

  setup() {
    console.log('%cLRBCarousel Setup', "background-color: ".concat(global.infoBG, ";"));

    try {
      // Remove 'archive' class from any carousel items
      $('.lrb-carousel-item .from-the-archive').removeClass('from-the-archive');
      this.setupComplete = true;
      this.addFullsreenIcon();
      this.setupUniversalCarousels();
      this.cleanupTabletCarousels();
      this.setupTabletCarousels();
      this.cleanupMobileCarousels();
      this.setupMobileCarousels();
      this.setupGalleryCarousels();
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Carousels', error);
    }
  } // Not currently supported in core, so have to add this way to customise
  // https://github.com/metafizzy/flickity-fullscreen/issues/17


  addFullsreenIcon() {
    let scope = this;
    var pathDirections = {
      view: scope.zoomSVG,
      exit: scope.closeSVG
    };
    var svgURI = 'http://www.w3.org/2000/svg';

    FlickityFullscreen.FullscreenButton.prototype.createIcon = function () {
      var svg = document.createElementNS(svgURI, 'svg');
      svg.setAttribute('class', 'flickity-button-icon');
      svg.setAttribute('viewBox', scope.zoomViewbox); // path & direction

      var path = document.createElementNS(svgURI, 'path');
      var direction = pathDirections[this.name];
      path.setAttribute('d', direction); // put it together

      svg.appendChild(path);
      this.element.appendChild(svg);
    };
  } //Checks for cases where a gallery displays and goes under the sidenav on an article page
  //Where this occurs a class is added to that gallery element to allow for style changes


  checkArticleSideNavClashes() {
    if (!global.isPrint) {
      if ($('.section-the-paper .article-sidebar-contents').length > 0) {
        var sidebarHeight = $('.article-sidebar-contents').outerHeight(true);
        $('.article-content .gallery-wrapper').each(function () {
          var galleryYPos = $(this).position().top; //console.log("checkArticleSideNavClashes: ypos:"+galleryYPos+"  sidebarHeight: "+sidebarHeight);

          if (galleryYPos <= sidebarHeight + 40) {
            $(this).addClass('sidebarAdjacent');
          } else {
            $(this).removeClass('sidebarAdjacent');
          }

          var flkty = Flickity.data($(this).find('.gallery-block')[0]);

          if (flkty) {
            flkty.resize();
          }
        }); //Add a class to denote when an article ends with a gallery, used for layout fixes

        $('#lrb-articleCopy .article-copy>*').each(function (i) {
          if (i == $('#lrb-articleCopy .article-copy>*').length - 1) {
            if ($(this).find('.gallery-wrapper').length > 0) {
              $(this).addClass('articleEndGallery');
              $(this).parent().parent().parent().addClass('endsWithGallery');
            }
          }
        });
      }
    }
  } //Ensure captions on gallery are not too wide, overlaying UI


  checkCaptionWidth() {
    if ($('.gallery-block').length > 0) {
      $('.gallery-block .image-caption').css('max-width', $('.gallery-block').outerWidth(true) - 146 + "px");
    }
  } //Check if carousels are allowed to be rendered - blocked when in EZ


  checkIfCarouselAllowed() {
    if ($('body').hasClass('ez-page-builder-edit') || global.isPrint || !this.setupComplete) {
      return false;
    } else {
      return true;
    }
  }

  setupUniversalCarousels() {
    if (!this.checkIfCarouselAllowed()) {
      return false;
    }

    let scope = this;
    $('.lrb-carousel--all').each(function () {
      var $el = $(this);

      if (!$el.hasClass('carouselSetup')) {
        console.debug('Setting up carousel--all');
        var cAl = 'left';

        if ($el.hasClass('lrb-carousel--centred')) {
          cAl = 'center';
        }

        var wrap = false;

        if ($el.hasClass('lrb-carousel--looped')) {//wrap = true;
        }

        var flkty = new Flickity($el[0], {
          cellAlign: cAl,
          contain: true,
          draggable: true,
          freeScroll: false,
          prevNextButtons: true,
          pageDots: false,
          wrapAround: wrap,
          arrowShape: scope.arrowSVG
        });
        scope.universalCarousels.push(flkty);
        scope.setupCarouselListeners($el, flkty);
        scope.setupCarouselOuterNav($el, flkty); //scope.checkArticleSideNavClashes();

        $($el).addClass('carouselSetup');
        scope.resizeCarousel(flkty, 100);
      } else {
        console.debug('Skipping carousel--all, already setup');
      }
    });
  }

  cleanupUniversalCarousels() {
    if (this.universalCarousels.length > 0) {
      console.debug('Destroy carousel--all');
      var i = 0;

      for (i; i < this.universalCarousels.length; i++) {
        this.universalCarousels[i].destroy();
      }

      this.universalCarousels = [];
      $('.lrb-carousel--all').removeClass('carouselSetup');
      $('.lrb-carousel--all').parent().find('.carousel-outernav-holder').remove();
      $('.lrb-carousel--all').parents('.carousel-outernav-wrapper').find('.carousel-outernav-holder').remove();
    }

    this.forceDestoryCarousel($('.lrb-carousel--all'));
  }

  setupTabletCarousels() {
    if (!this.checkIfCarouselAllowed()) {
      return false;
    }

    let scope = this;
    $('.lrb-carousel--tablet').each(function () {
      var $el = $(this);

      if (!$el.hasClass('carouselSetup')) {
        console.debug('Setting up carousel--tablet');
        var flkty = new Flickity($el[0], {
          cellAlign: 'left',
          contain: true,
          draggable: true,
          freeScroll: false,
          prevNextButtons: true,
          pageDots: false,
          wrapAround: false,
          arrowShape: scope.arrowSVG
        });
        scope.tabletCarousels.push(flkty);
        scope.setupCarouselListeners($el, flkty);
        scope.setupCarouselOuterNav($el, flkty); //scope.checkArticleSideNavClashes();

        $($el).addClass('carouselSetup');
        scope.resizeCarousel(flkty, 100);
      } else {
        console.debug('Skipping carousel--tablet, already setup');
      }
    });
  }

  cleanupTabletCarousels() {
    if (this.tabletCarousels.length > 0) {
      console.debug('Destroy carousel--tablet');
      var i = 0;

      for (i; i < this.tabletCarousels.length; i++) {
        this.tabletCarousels[i].destroy();
      }

      this.tabletCarousels = [];
      $('.lrb-carousel--tablet').removeClass('carouselSetup');
      $('.lrb-carousel--tablet').parent().find('.carousel-outernav-holder').remove();
      $('.lrb-carousel--tablet').parents('.carousel-outernav-wrapper').find('.carousel-outernav-holder').remove();
    }

    this.forceDestoryCarousel($('.lrb-carousel--tablet'));
  }

  setupMobileCarousels() {
    if (!this.checkIfCarouselAllowed()) {
      return false;
    }

    let scope = this;
    $('.lrb-carousel--mobile').each(function () {
      var $el = $(this);

      if (!$el.hasClass('carouselSetup')) {
        console.log('Setting up carousel--mobile');
        var flkty = new Flickity($el[0], {
          cellAlign: 'left',
          contain: true,
          draggable: true,
          freeScroll: false,
          prevNextButtons: true,
          pageDots: false,
          wrapAround: false,
          arrowShape: scope.arrowSVG
        });
        scope.mobileCarousels.push(flkty);
        scope.setupCarouselListeners($el, flkty);
        scope.setupCarouselOuterNav($el, flkty); //scope.checkArticleSideNavClashes();

        $($el).addClass('carouselSetup');
        scope.resizeCarousel(flkty, 100);
      } else {
        console.debug('Skipping carousel--mobile, already setup');
      }
    });
  }

  cleanupMobileCarousels() {
    if (this.mobileCarousels.length > 0) {
      console.debug('Destroy carousel--mobile');
      var i = 0;

      for (i; i < this.mobileCarousels.length; i++) {
        this.mobileCarousels[i].destroy();
      }

      this.mobileCarousels = [];
      $('.lrb-carousel--mobile').removeClass('carouselSetup');
      $('.lrb-carousel--mobile').parent().find('.carousel-outernav-holder').remove();
      $('.lrb-carousel--mobile').parents('.carousel-outernav-wrapper').find('.carousel-outernav-holder').remove();
    }

    this.forceDestoryCarousel($('.lrb-carousel--mobile'));
  }

  setupCarouselOuterNav($carousel, flkty) {
    if (!$carousel.hasClass('no-progress')) {
      let scope = this;
      let $progressMarkup = $('<div class="carousel-outernav-holder clearfix"><div class="carousel-outernav clearfix"><div class="carousel-outernav--progressIndicator"><div class="progressMarker"></div></div>');
      let $parent = $carousel.parents('.carousel-outernav-wrapper');

      if ($parent.length == 0) {
        $parent = $carousel.parent();
      }

      $parent.append($progressMarkup);
      let $el = $parent.find('.carousel-outernav-holder');

      if ($el.length > 0) {
        //Setup Progress Indicator
        var $progressInd = $el.find('.carousel-outernav--progressIndicator');
        var slideCnt = $carousel.find('.lrb-carousel-item').length;

        if ($progressInd.length > 0 && slideCnt > 1) {
          var markerW = 100 / slideCnt;
          $progressInd.find('.progressMarker').css('width', markerW + "%");
        }
      }

      flkty.on('change', function () {
        scope.updateCarouselOuterNav($carousel, flkty);
      });
      scope.updateCarouselOuterNav($carousel, flkty);
    }
  }

  updateCarouselOuterNav($carousel, flkty) {
    let $el = $carousel.parent().find('.carousel-outernav-holder');

    if ($el.length > 0) {
      //Update Progress Indicator
      var $progressInd = $el.find('.carousel-outernav--progressIndicator');

      if ($progressInd.length > 0) {
        var markerX = flkty.selectedIndex * Math.floor(100 / $carousel.find('.lrb-carousel-item').length);

        if (flkty.selectedIndex == $carousel.find('.lrb-carousel-item').length - 1) {
          markerX = 100 - 100 / $carousel.find('.lrb-carousel-item').length;
        }

        $progressInd.find('.progressMarker').css('left', markerX + "%");
      }
    }
  }

  resizeCarousel(flkty, delay = 0) {
    if (flkty) {
      setTimeout(function () {
        flkty.resize();
      }, 1 + delay);
    }
  }

  setupGalleryCarousels() {
    if (!global.isPrint) {
      let scope = this;
      var freeScroll = false;

      if (global.touch) {
        freeScroll = true;
      }

      $('.lrb-carousel--gallery').each(function () {
        var $el = $(this);

        if (!$el.hasClass('carouselSetup')) {
          console.debug('Setting up carousel--gallery');
          var flkty = new FlickityFullscreen($el[0], {
            cellAlign: 'left',
            setGallerySize: true,
            adaptiveHeight: true,
            contain: true,
            draggable: true,
            freeScroll: freeScroll,
            prevNextButtons: true,
            pageDots: false,
            wrapAround: false,
            arrowShape: scope.arrowSVG,
            fullscreen: true
          });
          scope.galleryCarousels.push(flkty);
          flkty.on('dragStart', function (event, pointer) {
            document.ontouchmove = function (e) {
              e.preventDefault();
            };
          });
          flkty.on('dragEnd', function (event, pointer) {
            document.ontouchmove = function (e) {
              return true;
            };
          });
          flkty.on('change', function () {
            scope.updateGalleryOuterNav($el, flkty);
          });
          flkty.on('staticClick', function (event, pointer, cellElem, cellIndex) {
            if (cellIndex !== undefined && global.viewportWidth > 768) {
              flkty.select(cellIndex);
            }
          });
          flkty.on('fullscreenChange', function (isFullscreen) {
            global.DocumentReady.updateLazyLoadingImages();
          });
          $el[0].addEventListener('load', function () {
            //Gallery Image Lazy-Loaded, check gallery layout
            flkty.resize();
          }, true);
          scope.checkArticleSideNavClashes();
          scope.setupGalleryCarouselNav($el);
          scope.setupGalleryOuterNav($el, flkty);
          scope.updateGalleryOuterNav($el, flkty);
          $($el).addClass('carouselSetup');
        } else {
          console.debug('Skipping carousel--gallery, already setup');
        }
      });
    }
  }

  setupGalleryCarouselNav($gallery) {
    let $el = $gallery.parents('.gallery-wrapper').find('.gallery-carouselnav');

    if ($el.length > 0) {
      //use centre aligning image on old blog
      var imageAlign = 'left';

      if ($('html').hasClass('oLrbBlog')) {
        imageAlign = 'center';
      }

      var flkty = new Flickity($el[0], {
        cellAlign: 'left',
        setGallerySize: false,
        adaptiveHeight: false,
        contain: true,
        draggable: true,
        freeScroll: false,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        asNavFor: $gallery[0],
        cellAlign: imageAlign
      });
      flkty.on('dragStart', function (event, pointer) {
        document.ontouchmove = function (e) {
          e.preventDefault();
        };
      });
      flkty.on('dragEnd', function (event, pointer) {
        document.ontouchmove = function (e) {
          return true;
        };
      });
    }
  }

  setupGalleryOuterNav($gallery, flkty) {
    let $el = $gallery.parents('.gallery-wrapper').find('.gallery-outernav-holder');

    if ($el.length > 0) {
      //Setup Progress Indicator
      var $progressInd = $el.find('.gallery-outernav--progressIndicator');

      if ($progressInd.length > 0) {
        var markerW = 100 / $gallery.find('.lrb-carousel-item').length;
        $progressInd.find('.progressMarker').css('width', markerW + "%");
      } //Setup Buttons


      $el.find('.gallery-outernav--nav .prev').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        flkty.previous();
        return false;
      });
      $el.find('.gallery-outernav--nav .next').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        flkty.next();
        return false;
      });
    }
  }

  updateGalleryOuterNav($gallery, flkty) {
    let $el = $gallery.parents('.gallery-wrapper').find('.gallery-outernav-holder');

    if ($el.length > 0) {
      //Update Progress Indicator
      var $progressInd = $el.find('.gallery-outernav--progressIndicator');

      if ($progressInd.length > 0) {
        var markerX = flkty.selectedIndex * Math.floor(100 / $gallery.find('.lrb-carousel-item').length);

        if (flkty.selectedIndex == $gallery.find('.lrb-carousel-item').length - 1) {
          markerX = 100 - 100 / $gallery.find('.lrb-carousel-item').length;
        }

        $progressInd.find('.progressMarker').css('left', markerX + "%");
      }

      if (flkty.selectedIndex == 0) {
        $el.find('.gallery-outernav--nav .prev').addClass("disabled");
      } else {
        $el.find('.gallery-outernav--nav .prev').removeClass("disabled");
      }

      if (flkty.selectedIndex == $gallery.find('.lrb-carousel-item').length - 1) {
        $el.find('.gallery-outernav--nav .next').addClass("disabled");
      } else {
        $el.find('.gallery-outernav--nav .next').removeClass("disabled");
      } //Update Caption


      var caption = "&nbsp;";

      if ($gallery.find('.lrb-carousel-item.is-selected').find('.image-caption').length) {
        caption = $gallery.find('.lrb-carousel-item.is-selected').find('.image-caption').html();
      }

      $el.find('.image-caption').css('opacity', 0);
      $el.find('.image-caption').html(caption);
      $el.find('.image-caption').velocity('stop').velocity("fadeIn", {
        duration: 500
      });
    }
  }

  cleanupGalleryCarousels() {
    if (this.galleryCarousels.length > 0) {
      console.debug('Destroy carousel--gallery');
      var i = 0;

      for (i; i < this.galleryCarousels.length; i++) {
        this.galleryCarousels[i].destroy();
      }

      this.galleryCarousels = [];
      $('.lrb-carousel--gallery').removeClass('carouselSetup');
    }

    this.forceDestoryCarousel($('.lrb-carousel--gallery'));
  }

  updateImageCaptionOffsets() {
    if ($('html').hasClass('oLrbBlog')) {
      $('.lrb-carousel--gallery').each(function () {
        var offset = 0;
        $(this).find('.image-caption').each(function () {
          offset = Math.max(offset, $(this).outerHeight(true));
        });
        offset += 25;
        $(this).css('margin-bottom', offset + 'px');
        $(this).parent().parent().css('margin-bottom', offset + 0 + 'px');
      });
    }
  }

  forceDestoryCarousel($carousel) {
    // Carousels sometimes not properly destroyed, this is to ensure they are
    // Especially when loaded in mobile view, and expanding viewport
    $carousel.each(function () {
      if ($(this).hasClass('flickity-enabled')) {
        //has not been destroyed, force destroy
        $(this).removeClass('flickity-enabled is-draggable');
        console.warn("[" + $(this)[0].className + " not destroyed] Force Destroying");
        $(this).html($(this).find('.flickity-slider').html());
        $(this).find('.lrb-carousel-item').removeClass('is-selected').removeAttr('style');
        $carousel.parent().find('.carousel-outernav-holder').remove();
        $carousel.parents('.carousel-outernav-wrapper').find('.carousel-outernav-holder').remove();
      }
    });
  }

  setupCarouselListeners($el, flkty) {
    let scope = this; // Prevent page scrolling on touch devices when dragging the carousel

    flkty.on('dragStart', function (event, pointer) {
      document.ontouchmove = function (e) {
        e.preventDefault();
      };
    });
    flkty.on('dragEnd', function (event, pointer) {
      document.ontouchmove = function (e) {
        return true;
      };
    });
    scope.updateSlideTabIndexing($el, flkty, '.lrb-carousel-item');
    flkty.on('change', function () {
      scope.updateSlideTabIndexing($el, flkty, '.lrb-carousel-item');
    });
    flkty.on('fullscreenChange', function (isFullscreen) {
      global.DocumentReady.updateLazyLoadingImages();
    }); // Set correct resizing so all slides have equal height, set by largest slide

    /*flkty.on( 'resize', function() {
        var heights = [];
        $el.find('.lrb-carousel-item').each(function(){
            $(this).removeAttr('height');
            var h = 0;
            $(this).find('>*').each(function(){
                h+=$(this).height();
            });
            heights.push(h);
        });
         var max = Math.max.apply(Math, heights);
         $el.find('.lrb-carousel-item').each(function(){
            $(this).height(max);
        });
    });*/
  }

  updateSlideTabIndexing($carousel, flkty, slideClass) {
    console.log("Updating carousel tab indexing"); //Set tab index for focusable elements in slides to -1, unless is the active slide, aids with accessibility, and avoids focusing on elements not in view / visible

    var focuseableElemsSelector = 'a, button, input, textarea, [tabindex=0], select';

    if ($carousel && slideClass) {
      $carousel.find(slideClass).each(function () {
        $(this).find(focuseableElemsSelector).attr('tabindex', '-1');
      });
    }

    if (flkty && flkty.selectedCells) {
      flkty.selectedCells.forEach(function (elem) {
        $(elem.element).find(focuseableElemsSelector).attr('tabindex', '0');
      });
    }
  }

  destroy() {
    this.cleanupUniversalCarousels();
    this.cleanupTabletCarousels();
    this.cleanupMobileCarousels();
    this.cleanupGalleryCarousels();
    $('.sidebarAdjacent').removeClass('sidebarAdjacent');
  }

}

module.exports = {
  LRBCarousel
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/4_components/LRBCharts.js":
/*!**************************************************!*\
  !*** ./assets/scripts/4_components/LRBCharts.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {__webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");

__webpack_require__(/*! chartjs-plugin-deferred */ "./node_modules/chartjs-plugin-deferred/dist/chartjs-plugin-deferred.js");

const hoverintent = __webpack_require__(/*! hoverintent */ "./node_modules/hoverintent/index.js");

class LRBCharts {
  constructor() {
    window.renderUsageChart = this.renderUsageChart;
    window.renderBarChart = this.renderBarChart;
    window.getRandomColour = this.getRandomColour;
    window.keyItemMatchCheck = this.keyItemMatchCheck;
    window.clearKeyMatches = this.clearKeyMatches;
    window.chartCnt = 0;
  }

  setup() {
    console.log('%cLRBCharts Setup', "background-color: ".concat(global.infoBG, ";"));
  }
  /* Expects graphData as Object formatted:
  {
      dataGroups:[{title:"Jan 2019", data:[20,50,66,30,10,35]},
                  {title:"Feb 2019", data:[100,70,90,30,35,70]},
                  {title:"Mar 2019", data:[30,10,44,90,2,75]}],
      keyTitle: "Key",
      key:[{title:"Contents", colour:"#09355B"},
          {title:"Article", colour:"#1394C4"},
          {title:"Letter", colour:"#1EBC6B"},
          {title:"Biography", colour:"#FFD600"},
          {title:"Test", colour:"#F77062"},
          {title:"Turnaway", colour:"#C28AFE"}],
      xTitle: "Months",
      yTitle: "Usage",
      minVal: "0",
      maxVal: "100"
  }
  */


  renderUsageChart(graphData, target, bgImage) {
    if (graphData && target) {
      window.chartCnt += 1; //Base Rendering

      $(target).addClass('usageGraph-holder clearfix');
      var baseMarkup = $('<div class="usageGraph clearfix"><div class="graph-chunk-holder"><div class="graph-chunks clearfix"></div><div class="graph-y-vals"><div class="axis-max"></div><div class="axis-min"></div></div><div class="graph-y"><div class="axis-title"></div></div></div><div class="graph-x"><div class="col-titles clearfix"></div><div class="axis-title"></div></div><div class="graph-key"><div class="graph-key--title"></div><div class="graph-key--items"></div></div></div>');
      $(target).append(baseMarkup);
      target = target + ' .usageGraph'; //Render Chart BG

      $(target).find('.graph-chunks').css("background-image", "url('" + bgImage + "')"); //Render Data Groups as Bar Charts

      var i = 0;
      var k = 0;
      var delay = 500;
      var cW = Math.floor(100 / graphData.dataGroups.length);
      var min = graphData.minVal;
      var max = graphData.maxVal;

      if (!max || max == 0 || max === undefined) {
        //if max is not set in graphData then calculate from values
        max = 0;

        for (i = 0; i < graphData.dataGroups.length; i++) {
          for (k = 0; k < graphData.dataGroups[i].data.length; k++) {
            max = Math.max(max, graphData.dataGroups[i].data[k]);
          }
        }

        if (max > 100) {
          //round up to nearest 100
          max += 100 - max % 100;
        } else {//round up to 100
        }
      }

      for (i = 0; i < graphData.dataGroups.length; i++) {
        var groupData = graphData.dataGroups[i].data;
        var groupTitle = graphData.dataGroups[i].title;
        var canvasEl = $('<div class="canvas-holder" style="width:' + cW + '%;"><canvas></canvas></div>');
        var canvas = canvasEl.find('canvas').get(0).getContext("2d");
        $(target).find('.graph-chunks').append(canvasEl);
        var barChart = window.renderBarChart(groupData, groupTitle, graphData.key, canvas, min, max, delay); //on hovering over canvas check to see if there are matches between bars and key items

        var $key = $(target).find('.graph-key');
        $(target).find('canvas').mousemove(function (e) {
          var el = barChart.getElementsAtEvent(e);

          if (el[0]) {
            window.keyItemMatchCheck($key, el[0]._model.label);
          } else {
            window.clearKeyMatches($key);
          }
        });
        $(target).find('canvas').each(function () {
          var el = $(this)[0];
          hoverintent(el, function () {// Nothing
          }, function () {
            window.clearKeyMatches($key);
          });
        });
        delay += 200;
      }

      for (i = 0; i < graphData.key.length; i++) {
        //Render Key
        var keyItem = $('<div class="graph-key--item"><div class="graph-key--itemCol" style="background-color:' + graphData.key[i].colour + ';"></div><div class="graph-key--itemCopy">' + graphData.key[i].title + '</div></div>');
        $(target).find('.graph-key .graph-key--items').append(keyItem);
        $(target).find('.graph-key .graph-key--title').html(graphData.keyTitle);
      } //Render X-Axis Title


      var $colTitles = $(target).find('.graph-x .col-titles');

      for (i = 0; i < graphData.dataGroups.length; i++) {
        var colTitle = $('<div class="col-title" style="width:' + cW + '%;"><span>' + graphData.dataGroups[i].title + '</span></div>');
        $colTitles.append(colTitle);
      }

      $(target).find('.graph-x .axis-title').html(graphData.xTitle); //Render Y-Axis Title

      $(target).find('.graph-y .axis-title').html(graphData.yTitle); //Render min / max Y-Axis vals

      $(target).find('.graph-y-vals .axis-max').html(max);
      $(target).find('.graph-y-vals .axis-min').html(min);
    } else {
      console.warn("No Data for Usage Chart");
      global.LRBErrorTracking.captureMessage('No Data for Usage Chart', global.LRBErrorTracking.LEVEL.WARNINGS);
    }
  } //checks for matching hovered canvas items agains key


  keyItemMatchCheck($key, title = "") {
    if ($key) {
      if (title != "") {
        var matchFound = false;
        $key.find('.graph-key--item').each(function () {
          var itemTitle = $(this).find('.graph-key--itemCopy').html();

          if (itemTitle.toLowerCase() == title.toLowerCase()) {
            //Matched
            $key.addClass('matched');
            $(this).addClass('matched');
            matchFound = true;
          }
        });

        if (!matchFound) {
          window.clearKeyMatches($key);
        }
      } else {
        window.clearKeyMatches($key);
      }
    }
  }

  clearKeyMatches($key) {
    if ($key) {
      //Unmatched
      $key.removeClass('matched');
      $key.find('.graph-key--item').removeClass('matched');
    }
  }

  renderBarChart(chartData, chartTitle, chartKey, canvas, min = 0, max = 100, delay = 0) {
    if (chartData && chartTitle && chartKey && canvas) {
      var colours = [];
      var labelset = [];
      var i = 0;

      for (i; i < chartKey.length; i++) {
        colours.push(chartKey[i].colour);
        labelset.push(chartKey[i].title);
      } //Add additional random colours in case needed


      for (var i = 0, len = labelset.length - colours.length; i < len; i++) {
        colours.push(window.getRandomColour());
      }

      var enableTooltips = true;
      Chart.defaults.global.legend.display = false;
      Chart.defaults.global.defaultFontFamily = "Ideal Sans";
      var barChart = new Chart(canvas, {
        type: 'bar',
        data: {
          labels: labelset,
          datasets: [{
            backgroundColor: colours,
            data: chartData,
            borderWidth: 0,
            borderSkipped: 'bottom',
            label: ''
          }]
        },
        options: {
          plugins: {
            deferred: {
              yOffset: '50%',
              // defer until 50% of the canvas height are inside the viewport
              delay: delay
            }
          },
          scales: {
            xAxes: [{
              display: false,
              barPercentage: 1,
              gridLines: {
                display: false,
                drawOnChartArea: false,
                drawTicks: false,
                drawBorder: false
              },
              ticks: {
                display: false
              }
            }],
            yAxes: [{
              display: false,
              gridLines: {
                display: false,
                drawOnChartArea: false,
                drawTicks: false,
                drawBorder: false
              },
              ticks: {
                display: false,
                suggestedMin: min,
                max: max
              }
            }]
          },
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 0.75,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          legend: {
            display: false
          },
          title: {
            display: false
          },
          tooltips: {
            enabled: enableTooltips,
            xPadding: 10,
            yPadding: 10,
            backgroundColor: '#494746',
            displayColors: false,
            bodyFontColor: '#fff',
            cornerRadius: 0
          }
        }
      });
      return barChart;
    } else {
      console.warn("No Data for Bar Chart");
      global.LRBErrorTracking.captureMessage("No Data for Bar Chart", global.LRBErrorTracking.LEVEL.WARNING);
    }
  }

  getRandomColour() {
    //Get a random colour
    var letters = '0123456789ABCDEF'.split('');
    var colour = '#';

    for (var i = 0; i < 6; i++) {
      colour += letters[Math.floor(Math.random() * 16)];
    }

    return colour;
  }

  destroy() {}

}

module.exports = {
  LRBCharts
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/4_components/LRBEventsLoader.js":
/*!********************************************************!*\
  !*** ./assets/scripts/4_components/LRBEventsLoader.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {class LRBEventsLoader {
  constructor() {}

  setup() {
    console.log('%cLRBEventsLoader Setup', "background-color: ".concat(global.infoBG, ";"));

    try {
      //this.loadHomeEvents();
      this.loadSidebarEvents();
      this.eventsLoaded($(".sidebar-events"));
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Events Loader', error);
    }
  }

  loadHomeEvents() {
    let scope = this;

    if ($("#home_events_content").length > 0) {
      console.log('Loading Home Events');
      $("#home_events_content").load("/ajax/events/3/events", function (response, status, xhr) {
        var statusCol = global.successBG;

        if (status == "error") {
          statusCol = global.errorBG;
        }

        console.log('Home Events Loading: %c' + status, "background-color: ".concat(statusCol, ";"));

        if (status == "error") {
          var msg = "Home Events Loading Error: ";
          console.error(msg + xhr.status + " " + xhr.statusText);
          global.LRBErrorTracking.error(response);
        } else {
          //$("#home_events_content").html(response);
          scope.eventsLoaded($("#home_events_content"));
        }
      });
    }
  }

  loadSidebarEvents() {
    let scope = this;

    if ($(".sidebar-events").length > 0) {
      console.log('Loading Sidebar Events');
      $(".sidebar-events").load("/ajax/events/3/events_sidebar", function (response, status, xhr) {
        var statusCol = global.successBG;

        if (status == "error") {
          statusCol = global.errorBG;
        }

        console.log('Sidebar Events Loading: %c' + status, "background-color: ".concat(statusCol, ";"));

        if (status == "error") {
          var msg = "Sidebar Events Loading Error: ";
          console.error(msg + xhr.status + " " + xhr.statusText);
          global.LRBErrorTracking.error(response);
        } else {
          $(".sidebar-events").html(response);
          scope.eventsLoaded($(".sidebar-events"));
          global.LRBCarousel.checkArticleSideNavClashes();
        }
      });
    }
  }

  eventsLoaded($events) {
    global.LRBTypography.cleanupTypeFurniture('.events-panel');
    global.LRBCarousel.setup();
    setTimeout(function () {
      $events.addClass('events-loaded');
    }, 100);
    global.resizing.resizeHandler();
  }

  destroy() {}

}

module.exports = {
  LRBEventsLoader
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/4_components/LRBInstagramGrid.js":
/*!*********************************************************!*\
  !*** ./assets/scripts/4_components/LRBInstagramGrid.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {/*

Run on a fully loaded instagram search page to spit out JSON for display in a static instagram grid
Then click each row as you scroll down, which will export JSON to the console for that row.
Has to be done this way as Instagram reloads and changes layout of the entire page as you scroll up/down

if(!window.str){
    window.str = "";
}
jQuery('a').each(function(){
  var $row = $(this).parent().parent();
  $row.on('click',function(e){
    e.preventDefault();
    e.stopPropagation();

    var newStr = "";
    $row.find('img').each(function(){
      var image = $(this).parent().html();
      var link = "https://instagram.com" + $(this).parents('a').attr('href');

      newStr += "{"
      newStr += "image: '"+ image +"', ";
      newStr += "link: '"+ link +"'";
      newStr += "}, "
    });
    console.log(newStr);
    window.str += newStr;

    return false;
  });
});

*/
class LRBInstagramGrid {
  constructor() {}

  setup() {
    if ($('.instagram-grid').length > 0) {
      try {
        let scope = this;
        console.log('%cLRBInstagramGrid Setup', "background-color: ".concat(global.infoBG, ";"));
        $('.zoom-image-overlay, .zoom-image-overlay .closebtn').on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          scope.closeZoom();
          return false;
        });
        this.randomiseGrid(scope);
        $('.instagram-block').addClass('reveal static-reveal');
        global.pageReady.updateScrollReveal();
        $('.js-lrblookout-shuffle').on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          $(".instagram-block").removeAttr('style').removeClass('revealed');
          scope.randomiseGrid(scope);
          global.pageReady.updateScrollReveal();
          return false;
        });
        global.setupPage.setupImageErrorReloading(true);
      } catch (error) {
        global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Instagram Grid', error);
      }
    }
  }

  randomiseGrid(scope) {
    scope.closeZoom();
    $(".instagram-grid").html($(".instagram-grid .instagram-block").sort(function () {
      return Math.random() - 0.5;
    }));
    scope.setupClickHandlers();
  }

  setupClickHandlers() {
    $('.zoom-image').each(function () {
      if ($(this).data('clicksetup') == true) {//Skip setup, already done
      } else {
        $(this).data('clicksetup', true);
        $(this).on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var imageUrl = $(this).data('large');
          var imageAlt = $(this).find('img').attr('alt');

          if (imageUrl && imageUrl != "") {
            $('html').addClass('zoom-image-open');
            $('.zoom-image-overlay img').attr('src', '');
            $('.zoom-image-overlay img').attr('src', imageUrl).attr('alt', imageAlt);
            $('.zoom-image-overlay').fadeIn(600);
          }

          return false;
        });
      }
    });
  }

  closeZoom() {
    $('html').removeClass('zoom-image-open');
    $('.zoom-image-overlay').fadeOut(300);
  }

}

module.exports = {
  LRBInstagramGrid
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/4_components/LRBLightbox.js":
/*!****************************************************!*\
  !*** ./assets/scripts/4_components/LRBLightbox.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {const Flickity = __webpack_require__(/*! flickity/dist/flickity.pkgd.js */ "./node_modules/flickity/dist/flickity.pkgd.js");

const FlickityFullscreen = __webpack_require__(/*! flickity-fullscreen/fullscreen.js */ "./node_modules/flickity-fullscreen/fullscreen.js");

class LRBLightbox {
  constructor() {
    this.lightbox = null;
  }

  setup() {
    console.log('%cLRBLightbox Setup', "background-color: ".concat(global.infoBG, ";"));

    try {
      let scope = this;
      this.setupLightboxImages();
      $(".close-lightbox").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        scope.closeLightbox();
        return false;
      });
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Lightbox', error);
    }
  }

  setupLightboxImages() {
    let scope = this;
    var lightBoxImages = []; // Setup lightbox on articles images

    $('article .embedded_image_wrapper').each(function () {
      // Do not add right aligned poem images on article pages
      var isPoemImage = false;

      if ($(this).parent().hasClass('align-right') && $('.paperArticle-container').length > 0) {
        isPoemImage = true;
      }

      var isBlog = false;

      if ($('html').hasClass('lrb-blog')) {
        isBlog = true;
      } // Do not add gallery images, the gallery has it's own zoom


      if ($(this).find('.galleryblock,.lrb-carousel').length == 0 && !isPoemImage) {
        $(this).find('.lrb-imageHolder').each(function () {
          // Only add those that have the zoom data attribute
          // TODO: do not add those in a href
          if ($(this).find('img').data('zoom') == true || $(this).find('img').data('zoom') == 'true' || isBlog) {
            var caption = $(this).parents('.embedded_image_wrapper--captioned').find('.embedded-image-caption').html();
            lightBoxImages.push({
              image: $(this),
              appsrc: $(this).find('img').data('appsrc'),
              caption: caption
            });
          }
        });
      }
    }); // Setup lightbox on TOC cover image

    $('.toc-cover-holder .lightbox').each(function () {
      $(this).find('.lrb-imageHolder').each(function () {
        lightBoxImages.push({
          image: $(this),
          appsrc: $(this).find('img').data('appsrc'),
          noIcon: true
        });
      });
    }); // Blog header images

    $('.post-content .post-page-image').each(function () {
      if ($(this).find('img').data('zoom') == true || $(this).find('img').data('zoom') == 'true') {
        var caption = $(this).data('caption');
        lightBoxImages.push({
          image: $(this),
          appsrc: $(this).data('appsrc'),
          caption: caption
        });
      }
    });

    if (lightBoxImages.length > 0) {
      for (var i = 0; i < lightBoxImages.length; i++) {
        var $image = lightBoxImages[i].image;
        var appsrc = lightBoxImages[i].appsrc;
        $image.wrap('<a href="' + appsrc + '" class="lightbox" aria-controls="lightbox-overlay" aria-expanded="false" data-id="' + i + '"></a>'); // Do not add the zoom icon for those that do not require it, i.e. TOC cover image

        if (!lightBoxImages[i].noIcon) {
          $image.append('<span class="zoom-icon"></span>');
        }
      }
      /*// If the image inside a lightbox link is missing then disable lightbox
      $('a.lightbox').each(function(){
          var missingImg = $(this).find('img.missing-image, img.load-failed');
          if(missingImg.length > 0){
              $(this).removeClass('lightbox');
              $(this).find('zoom-icon').remove();
          }
      });*/


      this.setupLightbox(lightBoxImages);
    } else {
      console.debug('Not setting up lightbox images, no images to load');
    }
  }

  setupLightbox(lightBoxImages = []) {
    if (lightBoxImages.length > 0) {
      let scope = this;
      var $el = $('#lightbox-overlay .lightbox-images');

      if (!$el.hasClass('lightboxSetup')) {
        console.debug('Setting up lightbox');
        var draggable = true;
        var useArrows = true;

        if (lightBoxImages.length < 2) {
          draggable = false;
          useArrows = false;
        } // Setup carousel


        scope.lightbox = new Flickity($el[0], {
          cellAlign: 'center',
          contain: true,
          draggable: draggable,
          freeScroll: false,
          prevNextButtons: useArrows,
          pageDots: false,
          wrapAround: false,
          arrowShape: global.LRBCarousel.arrowSVG,
          setGallerySize: false
        }); // Add images to carousel, with captions

        for (var i = 0; i < lightBoxImages.length; i++) {
          var imageClass = 'lightbox-image';
          var captionHTML = '';

          if (lightBoxImages[i].caption) {
            imageClass += ' lightbox-image--captioned';
            captionHTML = '<div class="lightbox-caption">' + lightBoxImages[i].caption + '</div>';
          }

          var $img = $('<div class="lightbox-image--holder"><div class="' + imageClass + '">' + lightBoxImages[i].image.html() + '</div>' + captionHTML + '</div>');
          $img.find('.zoom-icon').remove();
          scope.lightbox.append($img);
        }

        $($el).addClass('lightboxSetup');
        global.LRBCarousel.setupCarouselListeners($el, scope.lightbox);
        global.LRBCarousel.resizeCarousel(scope.lightbox, 100);
      } else {
        console.debug('Skipping lightbox, already setup');
      }

      $('a.lightbox').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).attr('aria-expanded', true);
        scope.openLightbox($(this).data('id'));
        return false;
      });
    } else {
      console.debug('Not setting up lightbox, no images to load');
    }
  }

  openLightbox(index = 0) {
    console.log('Open Lightbox: slide ' + index);
    $('html').addClass('lrb-lightboxOpen');
    $('#lightbox-overlay').attr('aria-hidden', false);
    this.lightbox.select(index, false, true);
  }

  closeLightbox() {
    $('html').removeClass('lrb-lightboxOpen');
    $('a.lightbox').attr('aria-expanded', false);
    $('#lightbox-overlay').attr('aria-hidden', true);
  }

}

module.exports = {
  LRBLightbox
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/4_components/paywall/DigitalEditionPaywall.js":
/*!**********************************************************************!*\
  !*** ./assets/scripts/4_components/paywall/DigitalEditionPaywall.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {/*
* Paywall for the Digital Edition page located at http://www.lrb.co.uk/4d422a2b-60d3-457f-8754-e8a09ebe3fb1
*/
class DigitalEditionPaywall {
  constructor() {
    window.lrbDEPW = this.showDigitalEditionPaywall;
    window.lrbDE = this.showDownloadLinks;
  }

  setup() {
    if ($('.section-4d422a2b-60d3-457f-8754-e8a09ebe3fb1 .print-issue-holder').length > 0) {
      console.log('%cDigital Edition Paywall Setup', "background-color: ".concat(global.warnBG, ";"));
    }
  }

  checkDigitalPaywall() {
    // Setup Digital Paywall if needed
    // Should trigger whenever someone does not have article access
    // i.e. s_pw (show paywall) is true
    if (global.LRBSessionData.subXData.s_pw) {
      global.DigitalEditionPaywall.showDigitalEditionPaywall();
    } else {
      global.DigitalEditionPaywall.showDownloadLinks();
    }
  }

  showDownloadLinks() {
    $('.section-4d422a2b-60d3-457f-8754-e8a09ebe3fb1 .print-download-link, .archive-container .downloadLink').fadeIn(600);
    $('.section-4d422a2b-60d3-457f-8754-e8a09ebe3fb1 .print-archive-container').removeAttr('style');
    $('.section-4d422a2b-60d3-457f-8754-e8a09ebe3fb1 .print-issue-holder .print-download-link').fadeIn(600);
    $('.section-4d422a2b-60d3-457f-8754-e8a09ebe3fb1 .print-issue-holder .print-login-link').remove();
  }

  showDigitalEditionPaywall() {
    $('.section-4d422a2b-60d3-457f-8754-e8a09ebe3fb1 .print-archive-container .js-downloadLink .article-issue-wrapper').unwrap();
    $('.section-4d422a2b-60d3-457f-8754-e8a09ebe3fb1 .print-archive-container .downloadLink').remove();
    $('.section-4d422a2b-60d3-457f-8754-e8a09ebe3fb1 .print-issue-holder .print-download-link').remove();
    $('.section-4d422a2b-60d3-457f-8754-e8a09ebe3fb1 .print-issue-holder .print-login-link').fadeIn(600);
  }

}

module.exports = {
  DigitalEditionPaywall
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/4_components/paywall/LRBPaywall.js":
/*!***********************************************************!*\
  !*** ./assets/scripts/4_components/paywall/LRBPaywall.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {const FB_STORAGE_KEY = 'lrb_fb_metered_articles';

class LRBPaywall {
  constructor() {
    window.lrbPWMarkup1 = '<div id="lrb-pw-block" class="lrb-pw-block"><div class="inner"><h1>';
    window.lrbPWDefaultHeader1 = "You need to sign in or subscribe to read more articles";
    window.lrbPWMarkup2 = '</h1><h2>';
    window.lrbPWDefaultHeader2 = "Subscribe to get unlimited access to our new issue and complete archive.";
    window.lrbPWMarkup3 = '</h2><p> <a href="';
    window.lrbPWDefaultHeader3 = 'http://www.mylrb.co.uk/lrboffers';
    window.lrbPWMarkup4 = '" class="btn btn-primary paywall-sub-link" title="Subscribe">Subscribe</a></p><p class="pwSigninLink lrbtp-login-link">Already registered? <a href="#Login" class="paywall-login-link js-login-link" title="Sign in">Sign in</a></p></div></div>';
    window.lrbPW = this.showPaywall;
    window.lrbHA = this.hideArticle;
    window.lrbTA = this.truncateArticle;
    window.lrbCFP = this.checkFallbackPaywall;
    window.lrbCMP = this.checkMeteredPaywall;
  }

  setup() {
    console.log('%cLRBPaywall Setup', "background-color: ".concat(global.infoBG, ";"));
    global.LRBPaywall.checkForcedPaywallDisplay();
  }

  checkForcedPaywallDisplay() {
    let showPW = false;

    if (global.LRBSessionData.subXData.hasOwnProperty('f_pw')) {
      if (global.LRBSessionData.subXData.f_pw) {
        const pageGroup = global.LRBTracking.getPageGroup();
        let header = "";

        if (pageGroup == global.LRBTracking.contentGroups.PODCASTS) {
          header = "You need to sign in or subscribe to listen to this podcast";
          showPW = true;
        }

        if (pageGroup == global.LRBTracking.contentGroups.VIDEO) {
          header = "You need to sign in or subscribe to watch this video";
          showPW = true;
        }

        if (pageGroup == global.LRBTracking.contentGroups.ARTICLE) {
          showPW = true;
        }

        if (showPW) {
          global.LRBPaywall.showPaywall(header);
        }
      }
    }

    return showPW;
  }

  checkFallbackPaywall() {
    if (global.LRBSessionData.subXData.s_pw) {
      // If fallback paywall variable is set and true then show the paywall
      // This variable is set from the envvar ENABLE_FALLBACK_PAYWALL
      // This cannot check if the SubX paywall is active and functional
      // so there are potentially cases where a double paywall is displayed.
      // If this occurs then ENABLE_FALLBACK_PAYWALL should be set to false
      if (typeof window.lrbPWFB !== 'undefined' && window.lrbPWFB) {
        const pageGroup = global.LRBTracking.getPageGroup();

        if (pageGroup == global.LRBTracking.contentGroups.ARTICLE) {
          console.info('Showing FB fallback paywall');
          global.LRBTracking.trackFallbackPaywall();
          global.LRBPaywall.showPaywall();
        }
      }
    }
  }

  checkMeteredPaywall() {
    if (window.isIntranet) {
      return false;
    } // Check for forced paywall overrides


    if (this.checkForcedPaywallDisplay()) {
      return false;
    } // If paywall is not active, or is set to be overridden, do not check


    if (!global.LRBSessionData.subXData.s_pw || global.LRBSessionData.subXData.o_pw) {
      return false;
    }

    const pageGroup = global.LRBTracking.getPageGroup();

    if (pageGroup != global.LRBTracking.contentGroups.ARTICLE) {
      return false; // Not an article page, do not check
    }

    const MAX_FREE_ARTICLES = 3;
    const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;
    const now = Date.now();
    const currentUrl = window.location.pathname; // Get stored articles, or empty array

    let articles = [];

    try {
      articles = JSON.parse(localStorage.getItem(FB_STORAGE_KEY)) || [];
    } catch (e) {
      articles = [];
    } // Remove articles older than 1 month


    articles = articles.filter(a => now - a.timestamp < ONE_MONTH_MS); // Check if current article is already in the list

    const alreadyFree = articles.some(a => a.url === currentUrl);

    if (alreadyFree) {
      console.info('Article already free, skipping FB paywall');
      return; // Allow access
    }

    if (articles.length < MAX_FREE_ARTICLES) {
      console.info('Adding article to FB metered paywall list');
      articles.push({
        url: currentUrl,
        timestamp: now
      });

      try {
        localStorage.setItem(FB_STORAGE_KEY, JSON.stringify(articles));
      } catch (e) {
        console.warn('Could not update localStorage for FB metered paywall:', e);
      }

      console.log('FB metered paywall list', articles);
      return; // Allow access
    } // Otherwise, show the paywall


    console.info('Showing FB metered paywall');
    global.LRBTracking.trackMeteredFallbackPaywall();
    window.lrbPWFB = true;
    global.LRBPaywall.showPaywall();
  }

  clearMeteredPaywallQueue() {
    try {
      localStorage.removeItem(FB_STORAGE_KEY);
    } catch (e) {
      console.warn('Could not access localStorage:', e);
    }
  }

  showPaywall(header1 = "", header2 = "", ctaUrl = "", ctaCopy = "", silent = false) {
    if (window.isIntranet) {
      return false;
    }

    if ($('#lrb-articleCopy').length > 0 && global.LRBLoaded) {
      if (!silent) {
        console.warn('Showing Paywall:: ' + header1 + " :: " + header2 + " :: " + ctaUrl);
      }

      if (header1 != "") {
        window.lrbPWDefaultHeader1 = header1;
      }

      if (header2 != "") {
        window.lrbPWDefaultHeader2 = header2;
      }

      if (ctaUrl != "") {
        window.lrbPWDefaultHeader3 = ctaUrl;
      }

      if (ctaCopy != "") {
        window.lrbPWMarkup4 = window.lrbPWMarkup4.replace(/Subscribe/g, ctaCopy);
      } //This triggers hideArticle()


      window.lrbHA(); // Add the paywall block

      if ($('.lrb-pw-block').length == 0) {
        if ($('#lrb-articleCopy .article-content').length) {
          // Add paywall block to intended area
          $('#lrb-articleCopy .article-content').prepend($('' + window.lrbPWMarkup1 + window.lrbPWDefaultHeader1 + window.lrbPWMarkup2 + window.lrbPWDefaultHeader2 + window.lrbPWMarkup3 + window.lrbPWDefaultHeader3 + window.lrbPWMarkup4));
          global.utils.scrollTo($('#lrb-articleCopy'), 100, 800);
          global.LRBTracking.trackPaywall();
        } else {
          // Markup has been edited by user to remove paywall, add paywall to top of body over all content
          $('body').prepend($('' + window.lrbPWMarkup1 + window.lrbPWDefaultHeader1 + window.lrbPWMarkup2 + window.lrbPWDefaultHeader2 + window.lrbPWMarkup3 + window.lrbPWDefaultHeader3 + window.lrbPWMarkup4));
          $('html').addClass('lrb-fpw');
          global.utils.scrollToTop();
          global.LRBTracking.trackPaywallForceReload();
        }

        $('.lrb-pw-block').show();
        setTimeout(function () {
          global.LRBModal.setupAccountLinks();
        }, 10); //Add conversion tracking to links in paywall box

        $('.paywall-sub-link').on('click', function () {//window.lrbPLogMC("Paywall Subscribe Clicked", {"Paywall Action":"Subscribe"});
        });
        $('.paywall-login-link').on('click', function () {//window.lrbPLogMC("Paywall Login Clicked", {"Paywall Action":"Login"});
        });
        global.LRBTracking.trackPaywall();
      } else {
        $('.lrb-pw-block').show().css('opacity', 1);
      }
    } // Recheck the paywall exists every 0.5 seconds


    setTimeout(function () {
      window.lrbPW(header1, header2, ctaUrl, ctaCopy, true);
    }, 500);
  }

  hideArticle() {
    // Fade out copy, add paywall class (only used for minor aesthetics)
    $('html').addClass('lrb-paywall');
    $('#lrb-articleCopy .article-content main').css('overflow-y', 'hidden').css('pointer-events', 'none !important');
    $('#lrb-articleCopy *, #lrb-articleCopy .article-content *').css('pointer-events', 'none !important').css('user-select', 'none');
    $('#lrb-articleCopy .article-content main').velocity({
      height: 400
    }, {
      duration: 800
    }); // Remove some article content after article is hidden

    setTimeout(function () {
      //This triggers truncateArticle()
      window.lrbTA();
    }, 800);
  }

  truncateArticle() {
    var $articleEls = $('#lrb-articleCopy .article-content .article-copy>*');
    var articleTruncated = false;

    if ($articleEls.length > 3) {
      $articleEls.each(function (i) {
        if (i > 3) {
          $(this).remove();
          articleTruncated = true;
        }
      });
    }

    if (articleTruncated && $('.lrb-truncated-article-copy').length == 0) {
      $('#lrb-articleCopy .article-content .article-copy').append($('<div class="lrb-truncated-article-copy"><p>Please sign in or <a href="/subscribe" title="Subscribe">subscribe</a> to read the full article.</p><p><a href="/login" title="Sign in" class="btn btn-primary">Sign in</a></p></div>'));
    }
  }

}

module.exports = {
  LRBPaywall
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/5_pages/LRBArchive.js":
/*!**********************************************!*\
  !*** ./assets/scripts/5_pages/LRBArchive.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {class LRBArchive {
  constructor() {}

  setup() {
    try {
      if ($('.section-archive').length > 0) {
        console.log('%cLRBArchive Setup', "background-color: ".concat(global.infoBG, ";"));
        $('.newest-sort, .oldest-sort').on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();

          if (!$(this).hasClass('selected')) {
            $('.newest-sort, .oldest-sort').removeClass('selected');
            $(this).addClass('selected'); // Flip Order

            var list = $('.archive-results--grid');
            var listItems = list.children('.archive-results--grid-item');
            list.append(listItems.get().reverse());
            window.pageReady.updateScrollReveal();
            global.utils.updateURL($(this).attr('href'));
          }

          return false;
        });

        if ($('.archive-results--cover-image').length < 2) {
          $('.archive-nav--sort').css('opacity', 0).css('pointer-events', 'none');
        }

        $('.archive-nav--prevnext a').on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var sortStr = '';
          var sort = global.utils.getURLParam('sort');

          if (sort && sort != '') {
            sortStr = '?sort=' + sort;
          }

          window.location = $(this).attr('href') + sortStr;
          return false;
        });
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Archive', error);
    }
  }

  destroy() {}

}

module.exports = {
  LRBArchive
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/5_pages/LRBArticle.js":
/*!**********************************************!*\
  !*** ./assets/scripts/5_pages/LRBArticle.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {class LRBArticle {
  constructor() {
    this.articleId = 'not-set';
  }

  setup() {
    if ($('.section-the-paper').length > 0 && $('.lrb-article').length > 0) {
      console.log('%cLRBArticle Setup', "background-color: ".concat(global.infoBG, ";"));

      if (document.querySelector('meta[name="articleid"]')) {
        this.articleId = document.querySelector('meta[name="articleid"]').content;
      }

      this.setupArticleSubnav();
    }
  }

  setupArticleSubnav() {
    if ($('.section-the-paper').length > 0 && $('.lrb-article').length > 0) {
      console.log('Loading Article Subnav: /ajax/article/subnav/' + this.articleId);
      $(".article-subnav-container").load("/ajax/article/subnav/" + this.articleId, function (response, status, xhr) {
        var statusCol = global.successBG;

        if (status == "error") {
          statusCol = global.errorBG;
        }

        console.log('Article Subnav Loading: %c' + status, "background-color: ".concat(statusCol, ";"));

        if (status == "error") {
          var msg = "Article Subnav Loading Error: ";
          console.error(msg + xhr.status + " " + xhr.statusText); //global.Bugsnag.notify(response);
        } else {
          $(".article-subnav-container").html(response);
          global.LRBNavigation.setupArticleSubnav();
        }
      });
    }
  }

  destroy() {}

}

module.exports = {
  LRBArticle
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/5_pages/LRBBlog.js":
/*!*******************************************!*\
  !*** ./assets/scripts/5_pages/LRBBlog.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {__webpack_require__(/*! LRB/magnify/jquery.magnify.js */ "./lrb_modules/magnify/jquery.magnify.js");

const Autolinker = __webpack_require__(/*! autolinker/dist/Autolinker */ "./node_modules/autolinker/dist/Autolinker.js");

class LRBBlog {
  constructor() {}

  setup() {
    try {
      if ($('html').hasClass('lrb-blog')) {
        console.log('%cLRBBlog Setup', "background-color: ".concat(global.infoBG, ";"));
        this.setupBlogHomepage();
        this.setupBlogSearch();
        this.setupArchive();
        this.setupCommentsReplies();
        this.resizeBlogImages();
        this.setupMagnifyImages();
        this.autoLinkComments();
      } else {
        $('.magnify-mobile').remove();
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Blog', error);
    }
  } //================================
  // Magnify / Zoom image functionality
  //================================


  setupMagnifyImages() {
    console.log('Setup Magnify images');

    if ($('.lrb-zoom').length > 0) {
      $('.lrb-zoom').magnify();
    } else {
      $('.magnify-mobile').remove();
    }
  } //================================
  // Blog homepage functionality
  //================================


  setupBlogHomepage() {
    console.log('Setup Blog Homepage');
    let scope = this; //================================
    // Homepage: paged posts
    //================================

    var page = 2;
    var previous_page;

    if (typeof n_posts !== 'undefined') {
      var page = 2;
      var previous_page;
      var pages = Math.ceil(n_posts / pp);

      if (page > pages) {
        $(".lrb-blog .load-more-blog").hide();
      }
    } //================================
    // Homepage: handle back button
    //================================


    if (location.hash && typeof load_posts !== 'undefined') {
      previous_page = parseInt(location.hash.replace("#", " "));
      scope.loadPreviousContent(page, pages, previous_page);
    }

    if (location.hash == '#comments') {
      global.utils.scrollTo($('#comments'), 120);
    } //================================
    // Homepage: Load more button
    //================================


    $(".lrb-blog .load-more-blog").not(".disabled").click(function (e) {
      e.preventDefault();
      scope.loadContent(page, pages, previous_page, $(this));
    });
  }

  loadPreviousContent(page, pages, previous_page) {
    console.log('Blog - Load Previous Content');
    $(".lrb-blog  .home-overlay").show();

    if (page > previous_page) {
      this.scrollToAnchor(page - 1);
      $(".lrb-blog  .home-overlay").hide();
      return false;
    } else {
      this.loadContent(page, pages, previous_page, $(".lrb-blog  .load-more-blog"), true);
    }
  } //================================
  // Scroll to anchor
  //================================


  scrollToAnchor(aid) {
    var aTag = $("[data-id='" + aid + "']");
    $('html,body').animate({
      scrollTop: aTag.offset().top - 90
    }, 'slow', function () {//location.href="#"+aid;
    });
  } //================================
  // Load posts via ajax
  //================================


  loadContent(page, pages, previous_page, ob, bb) {
    console.log('Blog - Load Content');
    let scope = this;

    if (typeof bb !== 'undefined') {//do nothing
    } else {
      var bb = false;
    }

    var url = "?page=" + page; // UI

    ob.text("Loading...");
    ob.addClass("disabled"); // Ajax request

    $.get(url, function (data) {
      // Load new posts
      var time = 1000;

      if (bb) {
        time = 0;
      } else {
        time = 1000;
      }

      $('<div data-id="' + page + '" style="display:none">' + data + '</div>').appendTo("#posts").slideDown(time, function () {
        // UI
        ob.text("Read More");
        ob.removeClass("disabled"); // use anchor so that content loads when hitting the page from back button

        location.href = "#" + page; // ready next page

        page++; //hide more button if end of results

        if (page > pages) {
          ob.hide();
        } //if coming from back button, recursive function until all content is loaded as required


        if (bb) {
          scope.loadPreviousContent(page, pages, previous_page);
        }

        $(".lrb-blog  .load-more-blog").unbind("click");
        $(".lrb-blog  .load-more-blog").not(".disabled").click(function (e) {
          e.preventDefault();
          scope.loadContent(page, pages, previous_page, $(this));
        });
        $(".lrb-blog  .share-link").click(function (e) {
          e.preventDefault();
          var url = $(this).attr("href");
          window.open(url, "_blank", "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=400");
        });
      });
    });
  } //================================
  // Search
  //================================


  setupBlogSearch() {
    console.log('Setup Blog Search');
    $(".lrb-blog #blog_search, .lrb-blog .search-close").click(function (e) {
      e.preventDefault();
      $(".lrb-blog #blog_search_bar").slideToggle();
      $(".lrb-blog .search-input").focus();
      global.utils.scrollToTop();
    });
  } //================================
  // Archive
  //================================


  setupArchive() {
    console.log('Setup Bog Archive');
    let scope = this;
    $(".lrb-blog #year .menu li a, .lrb-blog #month .menu li a").click(function () {
      scope.runArchiveSearch();
    });
  }

  runArchiveSearch() {
    setTimeout(function () {
      var year = $(".lrb-blog #year .value").text();
      var month = $(".lrb-blog #month .display").text().trim().toLowerCase();
      location.href = "/blog/archive/" + year + "/" + month;
    }, 111);
  } //================================
  // Comments and replies
  //================================


  setupCommentsReplies() {
    console.log('Setup Blog Comments and Replies');
    let scope = this;
    var reply_to_id;
    var reply_to_user_id;
    $(".lrb-blog .comments-link").click(function (e) {
      e.preventDefault();
      global.utils.scrollTo($('#comments'), 120);
    });
    $(".lrb-blog .reply").click(function (e) {
      e.preventDefault();
      var parent_id = $(this).data("parentid");
      reply_to_id = $(this).data("replyto");
      reply_to_user_id = $(this).data("replytouser");
      var replytoname = $(this).data("replytoname");
      $("#reply_" + parent_id + "_input").attr("placeholder", "Replying to @" + replytoname + "...");
      $(".reply-input").slideUp(100);
      $("#reply_" + parent_id).slideDown(100, function () {
        global.utils.scrollTo($("#reply_" + parent_id), 120);
      });
    }); //================================
    // Comments: add comment
    //================================

    $(".lrb-blog #post_comment").not("disabled").click(function (e) {
      e.preventDefault();

      if ($("#comment_input").val() == "") {
        return false;
      }

      if (global.utils.isEmoji($("#comment_input").val())) {
        $("#post_comment").text("No 'Emjois' allowed");
        setTimeout(function () {
          $("#post_comment").text("Post Comment");
        }, 3000);
        return false;
      }

      var params = {
        type: 'comment',
        parent_id: null,
        reply_to_id: null,
        reply_to_user_id: null,
        user_id: $(this).data("userid"),
        content_id: $(this).data("contentid"),
        comment: $("#comment_input").val(),
        input: $("#comment_input"),
        button: $(this),
        button_text: "Post Comment"
      };
      addComment(params);
    }); //================================
    // Comments: add reply
    //================================

    $(".lrb-blog .post-reply").not("disabled").click(function (e) {
      e.preventDefault();
      var this_comment = "#reply_" + $(this).data("parentid") + "_input";

      if ($(this_comment).val() == "") {
        return false;
      }

      if (global.utils.isEmoji($(this_comment).val())) {
        return false;
      }

      if (global.utils.isEmoji($(this_comment).val())) {
        $(this).text("No 'Emjois' allowed");
        setTimeout(function () {
          $(".post-reply").text("Post Comment");
        }, 3000);
        return false;
      }

      var params = {
        type: 'reply',
        parent_id: $(this).data("parentid"),
        reply_to_id: reply_to_id,
        reply_to_user_id: reply_to_user_id,
        user_id: $(this).data("userid"),
        content_id: $(this).data("contentid"),
        comment: $(this_comment).val(),
        input: $(this_comment),
        button: $(this),
        button_text: "Post Reply"
      };
      addComment(params);
    }); //================================
    // Comments: save
    //================================

    function addComment(params) {
      params.button.text("Posting...");
      params.button.addClass("disabled");
      var url = "/blog/ajax/add-comment";
      $.post(url, {
        parent_id: params.parent_id,
        reply_to_id: params.reply_to_id,
        reply_to_user_id: params.reply_to_user_id,
        user_id: params.user_id,
        content_id: params.content_id,
        comment: params.comment
      }, function (data) {
        params.button.text(params.button_text);
        params.button.removeClass("disabled");
        params.input.val("");

        if (params.type == "comment") {
          var html = data + $("#comments>ul").html();
          $("#comments>ul").html(html);
        }

        if (params.type == "reply") {
          $("#replies_" + params.parent_id).append(data);
          $(".reply-input").slideUp();
        }
      });
    } //================================
    // Comments: page
    //================================


    var comment_start = 0;
    var comment_page = 5;
    var comment_finish = comment_start + comment_page - 1;
    pageComments(0);

    function pageComments(slide) {
      var show_load_more = 0;
      $('.lrb-blog li.comment-node').each(function (index, value) {
        if (index >= comment_start && index <= comment_finish) {
          if (slide) {
            $(this).slideDown();
          } else {
            $(this).show();
          }
        }

        if (!$(this).is(":visible")) {
          show_load_more = 1;
        }
      });
      comment_start = comment_finish + 1;
      comment_finish = comment_start + comment_page - 1;

      if (show_load_more == 0) {
        $(".load-more-comments").hide();
      }
    }

    $(".lrb-blog .load-more-comments").click(function (e) {
      e.preventDefault();
      pageComments(1);
    });
  } //==========================
  // Resize Blog Images
  //==========================


  resizeBlogImages() {
    $('.lrb-blog .resize').each(function () {
      var aspect = $(this).data("aspect");
      var width = $(this).width();
      var height = width * aspect;
      $(this).css("height", height + "px");
      console.log('Resize Blog Image: ' + aspect);
    });
  } //==========================
  // Autolinks URLs, whether or not they start with the protocol, and not breaking any already formatted/linked in EZ
  //==========================


  autoLinkComments() {
    var autolinker = new Autolinker({
      newWindow: true,
      urls: true,
      email: true,
      phone: false,
      mention: false,
      hashtag: false,
      stripPrefix: true,
      stripTrailingSlash: true,
      truncate: 50,
      className: "commentLink"
    });
    $('.lrb-blog #comments .comment').each(function () {
      $(this).html(autolinker.link($(this).html()));
    });
  }

  destroy() {}

}

module.exports = {
  LRBBlog
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/5_pages/LRBContributors.js":
/*!***************************************************!*\
  !*** ./assets/scripts/5_pages/LRBContributors.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {__webpack_require__(/*! velocity-animate */ "./node_modules/velocity-animate/velocity.js"); //var AutoComplete = require('autocomplete-js');


class LRBContributors {
  constructor() {
    this.autoCompleteDataUrl = "/contributors/search/";
    this.autoCompleteTimer = null;
    this.singleCharSearchTimer = null;
    this.maxResults = 0; // set to 0 for no limit

    this.searchInterval = 600;
    this.minCharCount = 2;
  }

  setup() {
    try {
      if ($('body').hasClass('section-contributors')) {
        console.log('%cLRBContributors Setup', "background-color: ".concat(global.infoBG, ";"));
        this.setupAutoComplete();
        this.setupFeaturedFilter();
        $('.contrib-cover-image').addClass('lazyload');
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Contributors', error);
    }
  }

  loadCovers() {
    $('.contrib-cover-image:not(.lazyloaded):not(.load-failed)').addClass('lazyload');
  }

  setupAutoComplete() {
    let scope = this;

    if (!$('#contributorSearchField').hasClass('autocompleteSetup')) {
      $('#contributorSearchField').addClass('autocompleteSetup');
      $('#contributorSearchField').after('<div class="contributorAutocompleteResults"></div>');
      $('#contributorSearchField').on('input update', function (e) {
        e.preventDefault();
        e.stopPropagation();
        scope.autoCompleteTriggered($(this).val(), scope);
        return false;
      });
      $("#contributorSearchField").blur(function () {
        $('.contributorAutocompleteResults').velocity('stop', true).velocity("slideUp", {
          duration: 300,
          delay: 100
        });
      });
      $("#contributorSearchField").focus(function () {
        if ($(this).hasClass('hasResults')) {
          $('.contributorAutocompleteResults').velocity('stop', true).velocity("slideDown", {
            duration: 400
          });
        }
      });
      setInterval(function () {
        if ($("#contributorSearchField").val() == "") {
          scope.clearAutoComplete(true);
        }
      }, 1000);
    } else {
      console.warn("Contributor Autocomplete already setup - skipping");
    }
  }

  autoCompleteTriggered(val, scope) {
    //console.log("autoCompleteTriggered: "+val);
    if (val != "") {
      if (scope.autoCompleteTimer) {
        clearTimeout(scope.autoCompleteTimer);
      }

      scope.autoCompleteTimer = setTimeout(function () {
        scope.searchForVal(val);
      }, scope.searchInterval);
    } else {
      this.clearAutoComplete();
    }
  }

  clearAutoComplete(silent = false) {
    if (!silent) {
      console.warn("Contributor Autocomplete Clearing");
    } else {//$('.contributorAutocompleteResults').velocity('stop').velocity("slideUp", {duration: 300});
    }

    $('.contributors-search .form-footer-linkholder p').html("&nbsp;");
    $(".contributorAutocompleteResults").html("");
    $("#contributorSearchField").removeClass('loading error success hasResults');
  }

  searchForVal(val) {
    let scope = this;

    if (scope.singleCharSearchTimer) {
      clearTimeout(scope.singleCharSearchTimer);
    }

    if (val) {
      if (val == "" || val.length < scope.minCharCount) {
        scope.clearAutoComplete(); //If single character then after a longer delay with no input load that page

        /*if(val.length == 1){
            scope.singleCharSearchTimer = setTimeout(function(){
                window.location = "/contributors/filter/"+val;
                $("#contributorSearchField").addClass('loading').prop('disabled', true);
            }, 1500);
        }*/
      } else {
        var url = scope.autoCompleteDataUrl + "" + val;
        console.warn("Searching for Contributor Matches : " + url);
        scope.clearAutoComplete();
        $('#contributorSearchField').addClass("loading");
        $.getJSON(url, function (response, status, xhr) {
          $('#contributorSearchField').removeClass("loading");

          if (status == "error") {
            scope.showContributorSearchError(xhr.status + " " + xhr.statusText);
          } else {
            console.log("Contributor Search Success");

            if (response.length > 0) {
              var i = 0;
              $('.contributors-search .form-footer-linkholder p').html("&nbsp;");
              $(".contributorAutocompleteResults").append('<ul></ul>');
              $("#contributorSearchField").addClass('hasResults success');

              for (i = 0; i < response.length; i++) {
                if (scope.maxResults == 0 || i < scope.maxResults) {
                  var result = response[i];

                  if (result) {
                    var name = result.full_name;
                    var slug = result.slug;

                    if (name != "" && slug != "") {
                      $(".contributorAutocompleteResults ul").append('<li><a href="/contributors/' + slug + '">' + name + '</a></li>');
                    } else {
                      console.error("Contributor Match Error: Missing details {name:'" + name + "', slug:'" + slug + "'}");
                    }
                  }
                }
              }

              $('.contributorAutocompleteResults').velocity('stop', true).velocity("slideDown", {
                duration: 400
              });
              $('.contributorAutocompleteResults a').on('click', function () {
                setTimeout(function () {
                  scope.clearAutoComplete();
                }, 300);
              });
            } else {
              scope.noResults();
            }
          }
        }).fail(function (e) {
          scope.showContributorSearchError(e);
        });
      }
    } else {
      console.error("Invalid value sent for contributor search");
    }
  }

  noResults() {
    console.warn("No Matches");
    this.clearAutoComplete();
    $("#contributorSearchField").addClass('error');
    $('.contributors-search .form-footer-linkholder p').html("No contributors found for this name.");
  }

  showContributorSearchError(error = "") {
    console.error("Contributor Search Error: " + error);
    global.LRBErrorTracking.captureMessage("Contributor Search Error: " + error);
    $("#contributorSearchField").addClass('error');
    $('.contributors-search .form-footer-linkholder p').html("An error occured when performing this search, please try again.");
  }

  setupFeaturedFilter() {
    if ($('.contributors-list .featured').length == 0) {
      console.log("No Featured Contributors set, showing all"); //No Featured Contributors are set, show all and remove button

      $('.contributors-list').addClass('allShown');
      $('.contributors-showall-link').remove();
      $('.contributors-list .list-title').html($('.contributors-list .list-title').data('txt'));
    } else {
      console.log("Featured Contributors set, creating filter"); //Featured Contributors are set, provide button to toggle this

      $('.contributors-list .list-title').html($('.contributors-list .list-title').data('txt-featured'));
      $('.contributors-showall-link a').html($('.contributors-showall-link a').data('btntxt')); // Should only be one list with a featured link, setup per instance just in case

      $('.contributors-showall-link a').each(function () {
        // Only setup once per instance
        const $link = $(this);

        if ($link.data('clicksetup')) {
          return;
        }

        $link.data('clicksetup', true); // Setup click handler

        $link.on('click', function (e) {
          e.preventDefault();
          e.stopPropagation(); // Should only be one list, setup per instance just in case

          $('.contributors-list').each(function () {
            const $list = $(this);

            if ($list.hasClass('allshown')) {
              //show just featured
              $list.css('opacity', 0).removeClass('allshown');
              $link.html($link.data('btntxt'));
              $('.contributors-list .list-title').html($('.contributors-list .list-title').data('txt-featured'));
            } else {
              //show all
              $list.css('opacity', 0).addClass('allshown');
              $link.html($link.data('btntxt-featured'));
              $('.contributors-list .list-title').html($('.contributors-list .list-title').data('txt'));
            }

            $list.velocity('stop').velocity("fadeIn", {
              duration: 800
            });
            global.utils.scrollTo($list, 80);
          });
          return false;
        });
      });
    }
  }

  destroy() {
    $("#contributorSearchField").remove();
    this.autoComplete = null;
  }

}

module.exports = {
  LRBContributors
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/5_pages/LRBCourses.js":
/*!**********************************************!*\
  !*** ./assets/scripts/5_pages/LRBCourses.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {class LRBCourses {
  constructor() {}

  setup() {
    try {
      if ($('.product-page').length > 0) {
        console.log('%cLRBCourses Setup', "background-color: ".concat(global.infoBG, ";"));
        let scope = this;
        $('.js-courseDownloads').on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          scope.openCourseDownloadsModal();
          return false;
        });
      }

      if ($('.spc-inner').length > 0) {
        this.setupResourceTabs();
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Courses', error);
    }
  }

  handleHashChange(hash) {
    console.log('handleHashChange', hash);
    let scope = this;
    $('.lrb-listnav--list-item a').each(function () {
      console.log($(this).text().toLowerCase().replace(' ', '-'));

      if ($(this).text().toLowerCase().replace(' ', '-') == hash.replace('#', '').toLowerCase()) {
        var id = $(this).data('id');
        scope.openResourceTab(id);
      }
    });
  }

  setupResourceTabs() {
    let scope = this;
    $('.lrb-listnav--link').on('click', function () {
      var id = $(this).data('id'); //scope.openResourceTab(id);
    });
  }

  openResourceTab(id) {
    console.log('openResourceTab', id);

    if (id != null) {
      $('.lrb-listnav--link').removeClass('selected');
      $(".lrb-listnav--link[data-id='" + id + "']").addClass('selected');
      $('.spc-inner').removeClass('shown');
      $('.spc-' + id).addClass('shown');
      global.pageReady.updateScrollReveal();
      global.documentReady.updateLazyLoadingImages();
    }
  }

  openCourseDownloadsModal() {
    let scope = this;
    var downloadsHTML = $('.course-downloads-content').html();
    global.LRBAlerts.clearModalNotifications();
    $(".modal-container .inner").html(downloadsHTML);
    global.resizing.modalResizeHandler();
    global.LRBModal.openMainModal();
  }

  destroy() {}

}

module.exports = {
  LRBCourses
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/5_pages/LRBInstitutions.js":
/*!***************************************************!*\
  !*** ./assets/scripts/5_pages/LRBInstitutions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {class LRBInstitutions {
  constructor() {}

  setup() {
    try {
      let scope = this;

      if ($('.section-librarian').length > 0) {
        console.log('%cLRBInstitutions Setup', "background-color: ".concat(global.infoBG, ";"));
        scope.setupChecklists();
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Institutions', error);
    }
  }

  setupChecklists() {
    $('.lrb-content-container .inline-modal .ezrichtext-field ul').each(function () {
      $(this).wrap("<div class='lrb-checklist lrb-checklist-singlecol'></div>");
    });
  }

  destroy() {}

}

module.exports = {
  LRBInstitutions
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/5_pages/LRBLetters.js":
/*!**********************************************!*\
  !*** ./assets/scripts/5_pages/LRBLetters.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {class LRBLetters {
  constructor() {
    window.filters = null;
    window.currentIssue = null;
    window.currentYear = null;
    window.setupLettersNav = this.setupLettersNav;
    window.loadIssues = this.loadIssues;
  }

  setup() {}

  setupLettersNav(filters, currentYear, currentIssue) {
    try {
      if ($('.lettersnav').length > 0) {
        console.log('%cLRBLetters Setup', "background-color: ".concat(global.infoBG, ";"));
        window.filters = filters;
        window.currentIssue = currentIssue;
        window.currentYear = currentYear;
        window.loadIssues(currentYear);
        $("#yearMenu").on('change', function () {
          window.loadIssues($(this).val());
        });
        $("#issuesMenu").on('change', function () {
          location.href = $(this).val();
        });
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up LettersNav', error);
    }
  }

  loadIssues(year) {
    var html = '<option value="" disabled>Issue</option>';
    $.each(window.filters[year], function (index, value) {
      var selected = '';

      if (value.number == window.currentIssue) {
        selected = ' selected';
      }

      html += '<option value="' + value.url + '/letters"' + selected + '>' + value.label + '</option>';
    });
    $("#issuesMenu").html(html).removeAttr('disabled');
  }

  destroy() {}

}

module.exports = {
  LRBLetters
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/5_pages/LRBSearch.js":
/*!*********************************************!*\
  !*** ./assets/scripts/5_pages/LRBSearch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {__webpack_require__(/*! velocity-animate */ "./node_modules/velocity-animate/velocity.js");

var Intercooler = __webpack_require__(/*! intercooler */ "./node_modules/intercooler/dist/intercooler.js");

const BASE_SEARCH_URL = "/search-results";

class LRBSearch {
  constructor() {
    this.disableSearchNav = false;
    this.disableAdvancedSearch = false;
    this.ajaxSearch = true;
  }

  setup() {
    try {
      if ($('body').hasClass('section-search-results')) {
        if ($('#lrb-search-form').length > 0) {
          console.log('%cLRBSearch Setup', "background-color: ".concat(global.infoBG, ";")); //Remove flag to include blog posts when not in the blog_post

          if (window.location.href.indexOf('/blog/') == -1) {
            $('.search-blogContentId').remove();
          }

          if (this.disableSearchNav) {
            $('.advanced-search-navlink, .lrb-search--input input').addClass('disabled');
            $('.lrb-search--input input').attr('disabled', true);
            console.warn("Search Nav Disabled");
          }

          if (this.disableAdvancedSearch) {
            $('.advanced-search-navlink, .search-results--form .advanced-link').addClass('disabled');
            console.warn("Advanced Search Disabled");
          }

          if ($('.section-search-results').length > 0) {
            console.log('%cLRBSearch Setup', "background-color: ".concat(global.infoBG, ";"));
            this.setupLinks(); // Show Advanced search form if any of the fields have values, or the URL hash is present

            var showAdvancedForm = false;

            if ($('#searchResults-and').val() != "" || $('#searchResults-or').val() != "" || $('#searchResults-not').val() != "" || $('#searchResults-phrase').val() != "" || $('#date-from').val() != "" || $('#date-to').val() != "") {
              showAdvancedForm = true;
            }

            if (location.hash && location.hash == "#advanced") {
              showAdvancedForm = true;
            }

            if (showAdvancedForm) {
              $('.search-results--advanced-form').addClass('shown');
            }

            this.updateAdvancedPaneDisplay(true);

            if ($('.search-results--list .results-list--item').length > 0) {
              global.utils.scrollTo($('.search-results--count'), 100);
            }
          }

          if ($('.search-results--list').length) {
            setInterval(this.cleanupAJAXNestedSearch, 500);
          }
        }
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up Search', error);
    }
  }

  setupLinks() {
    let scope = this;
    $('.advanced-link').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      scope.toggleAdvancedSearch();
      return false;
    });
    $('.advanced-search-close').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      scope.hideAdvancedSearch();
      return false;
    });
    $('#lrb-search-form').on('submit', function (e) {
      e.preventDefault();
      e.stopPropagation();
      scope.triggerSearch(BASE_SEARCH_URL, $("#lrb-search-form"));
      global.utils.scrollTo($('.search-results--count'), 100);
      return false;
    });
    $('#lrb-search-filter-form').on('submit', function (e) {
      e.preventDefault();
      e.stopPropagation();
      scope.triggerSearch(BASE_SEARCH_URL, $("#lrb-search-filter-form"));
      return false;
    });
    this.setupAutoSubmitLinks();
  }

  setupAutoSubmitLinks() {
    let scope = this; // Auto submits the form when clicked

    $('.js-autoSubmit').each(function () {
      if ($(this).data('auto-submit-setup') == 1) {
        return true;
      } else {
        $(this).data('auto-submit-setup', 1);
      }

      $(this).on('change', function (e) {
        scope.triggerSearch(BASE_SEARCH_URL, $("#lrb-search-form"));
      });
    }); // Auto submits the filter form when clicked

    $('.js-autoSubmitFilter').each(function () {
      if ($(this).data('auto-submit-setup') == 1) {
        return true;
      } else {
        $(this).data('auto-submit-setup', 1);
      }

      $(this).on('change', function (e) {
        scope.triggerSearch(BASE_SEARCH_URL, $("#lrb-search-filter-form"));
      });
    }); // Auto submits the URL from value when clicked

    /*$('.js-autoLoadValue').each(function(){
        if($(this).data('auto-loadvalue-setup') == 1){
            return false;
        }else{
            $(this).data('auto-loadvalue-setup', 1);
        }
         $(this).on('change', function(e){
            $("#lrb-search-filter-form").submit();
        });
    });*/
    // Auto submits the URL from value when clicked

    $('.js-autoLoadURL').each(function () {
      if ($(this).data('auto-loadurl-setup') == 1) {
        return true;
      } else {
        $(this).data('auto-loadurl-setup', 1);
      }

      $(this).on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        scope.triggerSearch($(this).attr('href'));
        return false;
      });
    });
    scope.filterTagCleanup();
  } //TODO remove this when Joe has completed changes to articletypes in filters


  filterTagCleanup() {
    $('.filter-tag').each(function () {
      $(this).html($(this).html().replace(/Content Type: 76/g, 'Letters'));
      $(this).html($(this).html().replace(/Content Type: 75/g, 'Blog Posts'));
    });
  }

  toggleAdvancedSearch(instant = false) {
    $('.search-results--advanced-form').toggleClass('shown');
    this.updateAdvancedPaneDisplay(instant);
  }

  showAdvancedSearch(instant = false) {
    $('.search-results--advanced-form').addClass('shown');
    this.updateAdvancedPaneDisplay(instant);
  }

  hideAdvancedSearch(instant = false) {
    $('.search-results--advanced-form').removeClass('shown');
    this.updateAdvancedPaneDisplay(instant);
  }

  updateAdvancedPaneDisplay(instant = false) {
    var t1 = 300,
        t2 = 400;

    if ($('.search-results--advanced-form').hasClass('shown')) {
      // Show Advanced Search
      if (instant) {
        $('.search-results--form').hide();
        $('.search-results--advanced-form').show();
      } else {
        $('.search-results--form').hide(); //$('.search-results--form').velocity('stop').velocity("slideUp", {duration: t1}).velocity("fadeOut", {duration: t1+1, queue: false});

        $('.search-results--advanced-form').velocity('stop').velocity("slideDown", {
          duration: t2
        }).velocity("fadeIn", {
          duration: t2 * 2,
          queue: false
        });
        $('.search-results--advanced-form .lrb-datepicker').removeClass('open');
      }

      setTimeout(function () {
        $('#searchResults-searchTerm').val("");
        $('#searchResults-and').eq(0).focus();
      }, 100);
    } else {
      // Hide Advanced Search
      location.hash = "";

      if (instant) {
        $('.search-results--form').show();
        $('.search-results--advanced-form').hide();
      } else {
        $('.search-results--form').show(); //$('.search-results--form').velocity('stop').velocity("slideDown", {duration: t2}).velocity("fadeIn", {duration: t2*2, queue: false});

        $('.search-results--advanced-form').velocity('stop').velocity("slideUp", {
          duration: t1
        }).velocity("fadeOut", {
          duration: t1 + 1,
          queue: false
        });
      }

      $('.search-results--advanced-form input').each(function () {
        $(this).val(null).trigger('change');
      });
      $('.search-results--advanced-form .lrb-datepicker .result span').html(global.LRBDatePicker.datePlaceholder);
      setTimeout(function () {
        $('#searchResults-searchTerm').eq(0).focus();
      }, 100);
    }
  }

  triggerSearch(url = BASE_SEARCH_URL, formToSend = "") {
    global.LRBTracking.trackSearch();
    let scope = this; // Work out search URL, if no formData is passed then just load URL directly (used to remove filters)

    var searchURL = url;
    var formData = "";

    if (formToSend != "") {
      formData = scope.sanitiseFormData(formToSend.serialize());
      searchURL += "?" + formData;
      searchURL = searchURL.replace("&sort", "&oldsort");
      searchURL = searchURL.replace("?sort", "?oldsort");
      formData = formData.replace("&sort", "&oldsort");
      formData = formData.replace("?sort", "?oldsort");
      var newSort = '&sort=' + $('.search-sort select').val();
      formData += newSort;
      searchURL += newSort;
    }

    console.log("Search - Form Data: ", formData);
    console.log("Search - Search URL: ", searchURL);

    if (!this.ajaxSearch) {
      window.location.href = searchURL;
      return false;
    }

    scope.showSearchLoading();
    $.get({
      url: url,
      cache: false
    }, formData).done(function (data) {
      var statusCol = global.errorBG;

      if (data) {
        statusCol = global.successBG;
      }

      ;
      global.utils.updateURL(searchURL);
      console.log("Search Loading:: " + searchURL); // slight render delay to allow for DOM to catchup on ajax change

      var searchRenderDelay = 50;

      if (data) {
        $(".search-results-holder").hide();
        $(".js-searchDynamicLoadHolder").html(data);
        $(".search-results-holder").hide();
        $(".search-results-holder").velocity('stop').velocity("fadeIn", {
          duration: 800,
          delay: searchRenderDelay
        });
        console.log("%cSearch Success", "background-color: ".concat(statusCol, ";"));
        scope.updateSearchCount();
      } else {
        scope.showSearchError(data);
      }

      scope.cleanupAJAXNestedSearch();
      scope.filterTagCleanup();
      scope.hideSearchLoading();
      scope.updateSearchCount();
      setTimeout(function () {
        global.setupPage.setup(true);
        global.LRBTypography.cleanupEllipses();
        global.LRBTypography.cleanUpTypography();
        scope.setupAutoSubmitLinks();
        Intercooler.processNodes($(".js-searchDynamicLoadHolder")[0]);
        scope.updateSearchCount();
      }, searchRenderDelay + 10);
    }).fail(function (e) {
      scope.showSearchError(e);
    });
  }

  sanitiseFormData(data) {
    // Replace quotes with URLencoded versions, this is required for iOS Safari as the text field auto formats quotes to curly quotes, and then includes those unformatted in the URL params
    return data.replace(/[\u2018\u2019]/g, "%27").replace(/[\u201C\u201D]/g, '%22').replace('%E2%80%9C', '%22').replace('%E2%80%9D', '%22');
  }

  cleanupAJAXNestedSearch() {
    $(".search-results-holder .search-results--count, .search-results-holder .search-results--sort, .search-results-holder .search-results--aside, .search-results--list-wrapper .search-results--list-wrapper .active-filters").remove();
  }

  showSearchError(error = "") {
    let scope = this;
    console.error("Error on Search:", error);
    global.LRBErrorTracking.error(error);
    var errorMsg = '<div class="noresults-spacer"><p>There was an error with your search, please try again.</p></div>';
    $('.active-filters').html("");
    $('.search-results-holder, .noresults-spacer').html(errorMsg);
    $('.search-results--count').html("&nbsp;");
    scope.hideSearchLoading();
    $(".search-results-holder").velocity('stop').velocity("fadeIn", {
      duration: 800,
      delay: 50
    });
  }

  showSearchLoading() {
    $('html').addClass('lrb-searching');
    $(".search-results-holder").velocity('stop').velocity("fadeOut", {
      duration: 200
    });
    $('.lrb-accordion .lrb-accordion__content').velocity("stop").velocity("slideUp", {
      duration: 450,
      complete: function () {}
    });
    $('.lrb-accordion .show').removeClass('show');
  }

  hideSearchLoading() {
    $('html').removeClass('lrb-searching');
  }

  updateSearchCount() {
    $('.search-results--count').html($('.js-searchCount').html());
    $('.search-results--count .visibleResultsEnd').html($('.search-results--list .results-list--item').length);
  }

  destroy() {}

}

module.exports = {
  LRBSearch
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/5_pages/LRBToc.js":
/*!******************************************!*\
  !*** ./assets/scripts/5_pages/LRBToc.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {__webpack_require__(/*! jquery-touchswipe/jquery.touchSwipe */ "./node_modules/jquery-touchswipe/jquery.touchSwipe.js");

class LRBToc {
  constructor() {}

  setup() {
    try {
      let scope = this;

      if ($('.toc-cover-holder').length > 0) {
        console.log('%cLRBToc Setup', "background-color: ".concat(global.infoBG, ";"));
        $('.toc-cover-holder .inner').swipe({
          swipeLeft: function () {
            //Next / Swiped left
            console.log("Cover Swipe: Next");

            if (!$('.toc-cover-holder .prev-next-buttons .next').hasClass('disabled')) {
              console.log("Cover Swipe: Trigger Next");
              $('.toc-cover-holder .prev-next-buttons .next')[0].click();
              $('html').addClass('lrb-processing');
            }
          },
          swipeRight: function () {
            //Previous / Swiped right
            console.log("Cover Swipe: Previous");

            if (!$('.toc-cover-holder .prev-next-buttons .prev').hasClass('disabled')) {
              console.log("Cover Swipe: Trigger Previous");
              $('.toc-cover-holder .prev-next-buttons .prev')[0].click();
              $('html').addClass('lrb-processing');
            }
          },
          threshold: 25
        });
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Error setting up TOC', error);
    }
  }

  destroy() {}

}

module.exports = {
  LRBToc
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/6_tracking/LRBDataLayer.js":
/*!***************************************************!*\
  !*** ./assets/scripts/6_tracking/LRBDataLayer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class LRBDataLayer {
  constructor() {}

  pushData(dataObject) {
    if (dataObject) {
      window.dataLayer = window.dataLayer || [];
      console.log('Pushing to datalayer', dataObject);
      window.dataLayer.push(dataObject);
    }
  }

  getObjectByKey(dataArray, key, value) {
    for (let i = 0; i < dataArray.length; i++) {
      const obj = dataArray[i];

      if (obj[key] === value) {
        return obj;
      }
    } // Return null if no matching object is found


    return null;
  }

}

module.exports = {
  LRBDataLayer
};

/***/ }),

/***/ "./assets/scripts/6_tracking/LRBTracking.js":
/*!**************************************************!*\
  !*** ./assets/scripts/6_tracking/LRBTracking.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {const inView = __webpack_require__(/*! in-view */ "./node_modules/in-view/dist/in-view.min.js");

const jQBrowser = __webpack_require__(/*! jquery.browser */ "./node_modules/jquery.browser/dist/jquery.browser.js");

class LRBTracking {
  constructor() {
    window.lrbSessionData = this.getJSONSessionData;
    this.scrolledArticleToStart = false;
    this.scrolledArticleToEnd = false;
    this.newsLetterInView = false;
    this.contentGroups = {
      HOMEPAGE: "Homepage",
      ONLINE_ARTICLE: "Online Only Article",
      ARTICLE: "Article",
      LETTERS: "Letters",
      PODCASTS: "Podcasts",
      VIDEO: "Video",
      PODCASTS_AND_VIDEO: "Podcasts & Video",
      SEARCH: "Search",
      TOC: "TOC",
      ARCHIVE: "Archive",
      COLLECTIONS: "Collections",
      BLOG_POST: "Blog Post",
      BLOG_CONTRIBUTOR: "Blog Contributor",
      BLOG_HOMEPAGE: "Blog Homepage",
      BLOG_OTHER: "Blog Other",
      CONTRIBUTOR: "Contributor",
      SUBJECTS: "Subjects",
      EVENTS: "Events",
      MARKETING: "Marketing",
      SERVICE: "Service",
      INSTITUTIONS: "Institutions",
      COURSES: "Courses",
      SUBSCRIPTIONS: "Subscriptions",
      OTHER: "Other"
    };
    this.accountEventsSent = [];
  }

  setup() {
    console.log('%cLRBTracking Setup', "background-color: ".concat(global.warnBG, ";")); // Check if this is a bot, we do not want to run Error tracking or Hotjar if this request is from a bot / crawler
    // Check if is a facebook crawler (set in PreflightController) - checking IPV6 for "::face:b00c"
    // Also check not another Bot, also check is not IE

    if (!global.isBot && !global.LRBSessionData.facebookBot && !$('html').hasClass('ie')) {
      global.LRBErrorTracking.setup(); //this.setupHotjar();
    } // Facebook Pixel and AAM tracking added in page markup


    this.setupCabin();
    this.setupGoogle();
    this.setupDotDigital();
  }

  setupCabin() {
    global.LRBCabin.setup();
  }

  setupGoogle() {
    global.GA4.setup();
  }

  setupDotDigital() {
    global.WBT.setup();
  }

  setupEventTracking() {
    console.log("LRBTracking SetupEventTracking...");
    global.LRBTracking.setupElementTracking();
    global.LRBTracking.setupHomeCampaignAdvertTracking();
    global.LRBTracking.setupModuleTracking();
    global.LRBTracking.setupGridAdvertTracking();
    global.LRBTracking.setupArticleSocialShares();
    global.LRBTracking.setupRelatedArticlesTracking();
    global.LRBTracking.trackSignups();
    global.LRBTracking.trackMGMSignups();
    global.LRBTracking.trackLogins();
    global.LRBTracking.trackLogouts();
    global.LRBTracking.trackLinkSubscriptions();

    if (window.TEC) {
      global.LRBTracking.trackEmailChange();
    }

    if (window.TPC) {
      global.LRBTracking.trackPasswordChange();
    }
  }

  setupDelayedEventTracking() {
    global.LRBTracking.trackNominationFormStart();
    global.LRBTracking.trackNominationFormSubmissions();
    global.LRBTracking.setupNewsletterTracking();
  }

  setupHotjar() {//global.Hotjar.setup();
  }

  getJSONSessionData() {
    //global.GA4.trackEvent('Test','GA4Test','GA4Test','GA4Test',false,true);
    global.LRBErrorTracking.setContext('LRBTracking getJSONSessionData');
    var data = {
      'version': global.version,
      'ga4': global.GA4.getJSONSessionData(),
      'ddwbt': global.WBT.getJSONSessionData(),
      'browser': {
        'name': jQBrowser.name,
        'version': jQBrowser.versionNumber,
        'platform': jQBrowser.platform,
        'desktop': jQBrowser.desktop,
        'mobile': jQBrowser.mobile,
        'tablet': jQBrowser.tablet,
        'touchscreen': global.touch
      }
    };
    global.LRBErrorTracking.setPageContext();
    return JSON.stringify(data);
  }

  logSessionData() {
    setTimeout(function () {
      console.info("Session Data::");
      console.log(global.LRBTracking.getJSONSessionData());
    }, 2000);
  } // Returns a group for the current page as a string
  // Used for GA4 tracking, error reporting, and subX categorisation


  getPageGroup() {
    var contentGroup = this.contentGroups.OTHER;

    switch (true) {
      case $('body').hasClass('section-home'):
        console.log('Homepage detected');
        contentGroup = this.contentGroups.HOMEPAGE;
        break;

      case $('.paperArticle-container.onlineOnly').length > 0:
        console.log('Online Only Article detected');
      //contentGroup = this.contentGroups.ONLINE_ARTICLE;
      //break;

      case $('.paperArticle-container.podcastArticle').length > 0:
      case $('body').hasClass('subsection-podcasts'):
        console.log('Podcasts detected');
        contentGroup = this.contentGroups.PODCASTS;
        break;

      case $('.paperArticle-container.videoArticle').length > 0:
      case $('body').hasClass('subsection-videos'):
        console.log('Video detected');
        contentGroup = this.contentGroups.VIDEO;
        break;

      case $('body').hasClass('section-podcasts-and-videos'):
        console.log('PV detected');
        contentGroup = this.contentGroups.PODCASTS_AND_VIDEO;
        break;

      case $('body').hasClass('section-search-results'):
        console.log('Search detected');
        contentGroup = this.contentGroups.SEARCH;
        break;

      case $('.toc-grid').length > 0:
        console.log('TOC detected');
        contentGroup = this.contentGroups.TOC;
        break;

      case $('body').hasClass('section-archive'):
        console.log('Archive detected');
        contentGroup = this.contentGroups.ARCHIVE;
        break;

      case $('body').hasClass('section-collections'):
        console.log('Collections detected');
        contentGroup = this.contentGroups.COLLECTIONS;
        break;

      case $('.lrb-blog-wrapper .post').length > 0:
        console.log('Blog post detected');
        contentGroup = this.contentGroups.BLOG_POST;
        break;

      case $('body').hasClass('subsection-author') && $('body').hasClass('section-blog'):
      case $('body').hasClass('subsection-contributors') && $('body').hasClass('section-blog'):
        console.log('Blog contributor detected');
        contentGroup = this.contentGroups.BLOG_CONTRIBUTOR;
        break;

      case $('body').hasClass('section-blog') && $('.home-overlay').length > 0:
        console.log('Blog Homepage detected');
        contentGroup = this.contentGroups.BLOG_HOMEPAGE;
        break;

      case $('body').hasClass('subsection-archive') && $('body').hasClass('section-blog'):
      case $('body').hasClass('section-blog'):
        console.log('Blog other detected');
        contentGroup = this.contentGroups.BLOG_OTHER;
        break;

      case $('.section-contributors .contributors-header').length > 0:
      case $('.section-contributors .contributor-header').length > 0:
        console.log('Contributor detected');
        contentGroup = this.contentGroups.CONTRIBUTOR;
        break;

      case $('body').hasClass('section-subjects'):
        console.log('Subjects detected');
        contentGroup = this.contentGroups.SUBJECTS;
        break;

      case $('body').hasClass('section-events'):
        console.log('Events detected');
        contentGroup = this.contentGroups.EVENTS;
        break;

      case $('.marketing-page-container').length > 0:
        console.log('Marketing detected');
        contentGroup = this.contentGroups.MARKETING;
        break;

      case $('.service-page-container').length > 0:
        console.log('Service detected');
        contentGroup = this.contentGroups.SERVICE;
        break;

      case $('body').hasClass('section-librarian'):
        console.log('Institutions detected');
        contentGroup = this.contentGroups.INSTITUTIONS;
        break;

      case $('body').hasClass('section-courses'):
        console.log('Courses detected');
        contentGroup = this.contentGroups.COURSES;
        break;

      case $('.paperArticle-container.defaultArticle').length > 0:
        console.log('Article detected');
        contentGroup = this.contentGroups.ARTICLE;
        break;

      case $('.paperArticle-container.letters').length > 0:
        console.log('Letters detected');
        contentGroup = this.contentGroups.LETTERS;
        break;

      case $('body').hasClass('section-accept12'):
      case $('body').hasClass('section-accept24'):
      case $('body').hasClass('section-nominate'):
        console.log('MGM detected');
        contentGroup = this.contentGroups.SUBSCRIPTIONS;
        break;
    }

    return contentGroup;
  } // Add event triggers, after GA is initialised


  setupElementTracking() {
    console.log("LRBTracking SetupElementTracking...");
    let scope = this; // Main nav event tracking

    $('.track-navbar').each(function () {
      if ($(this).data('ga-tracking-setup') == 1) {
        return false;
      } else {
        $(this).data('ga-tracking-setup', 1);
      }

      $(this).on('click', function (e) {
        var text = $(this).attr('title');
        var gaTitle = $(this).data('gatitle');

        if (gaTitle && gaTitle != "") {
          text = gaTitle;
        }

        if (!text || text == "") {
          text = $(this).text().trim();
        }

        global.GA4.trackEvent('Click', 'NavBar', text);
      });
    }); // Side nav event tracking

    $('.supernav-submenu a').each(function () {
      if ($(this).data('ga-tracking-setup') == 1) {
        return false;
      } else {
        $(this).data('ga-tracking-setup', 1);
      }

      $(this).on('click', function (e) {
        var text = $(this).attr('title');
        var gaTitle = $(this).data('gatitle');

        if (gaTitle && gaTitle != "") {
          text = gaTitle;
        }

        if (!text || text == "") {
          text = $(this).text().trim();
        }

        global.GA4.trackEvent('Click', 'SideNavBar', text);
      });
    }); // Footer event tracking

    $('.footer-list-holder .footer-col a').each(function () {
      if ($(this).data('ga-tracking-setup') == 1) {
        return false;
      } else {
        $(this).data('ga-tracking-setup', 1);
      }

      $(this).on('click', function () {
        var text = $(this).attr('title');
        var gaTitle = $(this).data('gatitle');

        if (gaTitle && gaTitle != "") {
          text = gaTitle;
        }

        if (!text || text == "") {
          text = $(this).text().trim();
        }

        global.GA4.trackEvent('Click', 'Footer', text);
      });
    }); // Article event tracking
    // Track when reached end of article, tracking beginning of reading from LRBNavigation.js > setupArticleTitleOverlay()

    if ($('#js-articleEnd').data('ga-tracking-setup') == 1) {// already setup, skip
    } else {
      $('#js-articleEnd').data('ga-tracking-setup', 1);
      inView('#js-articleEnd').on('enter', function () {
        global.LRBTracking.trackArticleReadEnd();
      });
    } //Digital Print Download tracking


    $('.print-download-link .js-downloadLink').each(function () {
      if ($(this).data('ga-tracking-setup') == 1) {
        return false;
      } else {
        $(this).data('ga-tracking-setup', 1);
      }

      $(this).on('click', function () {
        var text = $(this).attr('title');
        var gaTitle = $(this).data('gatitle');

        if (gaTitle && gaTitle != "") {
          text = gaTitle;
        }

        if (!text || text == "") {
          text = $(this).text().trim();
        }

        global.GA4.trackEvent('Issue Download', 'Print at Home', text);
      });
    }); // Additional Button event tracking

    $('.track-button').each(function () {
      if ($(this).data('ga-tracking-setup') == 1) {
        return false;
      } else {
        $(this).data('ga-tracking-setup', 1);
      }

      $(this).on('click', function () {
        var text = $(this).attr('title');
        var gaTitle = $(this).data('gatitle');

        if (gaTitle && gaTitle != "") {
          text = gaTitle;
        }

        if (!text || text == "") {
          text = $(this).text().trim();
        }

        global.GA4.trackEvent('Click', 'Button', text);
      });
    });
  } // Add form triggers, after GA is initialised


  setupFormTracking() {
    /*
    $('form').each(function(){
        $(this).on('submit', function(){
            var text = $(this).attr('title');
            var gaTitle = $(this).data('gatitle');
            if(gaTitle && gaTitle != ""){
                text = gaTitle;
            }
            if(!text || text == ""){
                text = $(this).text().trim();
            }
            //global.GA4.trackEvent('Click','Form',text);
        });
    });
    */
  }

  setupRelatedArticlesTracking() {
    // Add view tracking for this module
    console.log("LRBTracking setupRelatedArticlesTracking: Adding view tracking");
    inView('#related-articles').on('enter', function () {
      global.GA4.trackEvent('view', 'Related Articles', '', '', true);
    }); // Add click tracking for #more-by-author

    $("#related-articles #more-by-author a").each(function () {
      $(this).on('click', function () {
        var linkText = $(this).text().trim();
        var linkUrl = $(this).attr('href');
        var section = 'More by author';
        const eventVals = {
          event_category: 'Related Articles',
          event_label: linkText,
          link_url: linkUrl,
          link_section: section
        };
        global.GA4.trackBasicEvent('Click', eventVals);
      });
    }); // Add click tracking for #more-by-topic

    $("#related-articles #more-by-topic a").each(function () {
      $(this).on('click', function () {
        var linkText = $(this).text().trim();
        var linkUrl = $(this).attr('href');
        var section = 'More by topic';
        const eventVals = {
          event_category: 'Related Articles',
          event_label: linkText,
          link_url: linkUrl,
          link_section: section
        };
        global.GA4.trackBasicEvent('Click', eventVals);
      });
    }); // Add click tracking for #related-pv

    $("#related-articles #recent-pv a").each(function () {
      $(this).on('click', function () {
        var linkText = $(this).text().trim();
        var linkUrl = $(this).attr('href');
        var section = 'Recent Podcasts and Videos';
        const eventVals = {
          event_category: 'Related Articles',
          event_label: linkText,
          link_url: linkUrl,
          link_section: section
        };
        global.GA4.trackBasicEvent('Click', eventVals);
      });
    });
  } // Track newsletter events from templats, after GA is initialised


  setupNewsletterTracking() {
    if (window.trackNewsletterEvent && window.trackNewsletterEvent != "") {
      global.GA4.trackEvent(window.trackNewsletterEvent, 'Newsletter');
      window.trackNewsletterEvent = null;
    }
  } // Add view and click tracking for home adverts with campaign codes


  setupHomeCampaignAdvertTracking() {
    // Auto module tracking based on classnames
    console.log("LRBTracking setupHomeCampaignAdvertTracking..."); // Send GA scroll into view events for tracked modules

    $('.js-campaignAd').each(function (i) {
      var uniqueClassName = 'trackedAdvert-' + i;
      $(this).addClass(uniqueClassName);
      var campaignCode = $(this).data('campaigncode');

      if (campaignCode && campaignCode != "") {
        console.warn("GAsetupCampaignAdvertTracking: " + uniqueClassName + " - " + campaignCode);
        inView('.' + uniqueClassName).on('enter', function () {
          global.GA4.trackEvent('view', 'Home Advert', '', campaignCode, true);
        });
      }
    }); // Send GA click through events for tracked home adverts

    $(".js-campaignAd").each(function () {
      var campaignCode = $(this).data('campaigncode');

      if (campaignCode && campaignCode != "") {
        console.warn("LRBTracking setupHomeCampaignAdvertClickTracking: " + campaignCode);
        $(this).find('a').on('click', function () {
          global.GA4.trackEvent('Click', 'Home Advert', '', campaignCode);
        });
      }
    });
  } // Add click tracking for page modules (homepage / article / subjects)


  setupModuleTracking() {
    // Auto module tracking based on classnames
    console.log("LRBTracking SetupModuleTracking..."); // Send GA scroll into view events for tracked modules

    $('.js-trackedModule').each(function (i) {
      var uniqueClassName = 'trackedModule-' + i;
      $(this).addClass(uniqueClassName);
      var moduleID = $(this).data('moduleid');
      var moduleTitle = $(this).find('.js-trackedModule-title').text().trim();

      if (moduleTitle && moduleTitle != "" && moduleID && moduleID != "") {
        console.warn("GAsetupModuleViewTracking: " + moduleTitle + " - " + moduleID);
        inView('.' + uniqueClassName).on('enter', function () {
          global.GA4.trackEvent('view', moduleTitle, '', '', true);
        });
      }
    }); // Send GA click through events for tracked module sub-elements

    $(".js-trackedModule").each(function () {
      var moduleID = $(this).data('moduleid');
      var moduleTitle = $(this).find('.js-trackedModule-title').text().trim();

      if (moduleTitle && moduleTitle != "" && moduleID && moduleID != "") {
        $(this).find('.js-trackedModule--item').each(function (i) {
          var moduleItemTitle = $(this).find('.js-trackedModule--item-title').text().trim();

          if (moduleItemTitle && moduleItemTitle != "") {
            var moduleItemID = i + 1;
            console.warn("LRBTracking setupModuleClickTracking: " + moduleTitle + " - " + moduleItemTitle);
            $(this).find('a').on('click', function () {
              global.GA4.trackEvent('Click', moduleTitle, moduleItemTitle, moduleItemID);
            });
          } else {
            console.error("Cannot setup auto tracking module item, values missing: " + moduleID + " :: " + moduleTitle);
          }
        });
      } else {
        console.warn("Cannot setup auto tracking module, values missing: " + moduleID + " - " + moduleTitle);
      }
    });
  }

  setupGridAdvertTracking() {
    console.log("LRBTracking setupGridAdvertTracking...");
    document.querySelectorAll('.grid-spot-holder').forEach(advert => {
      let trackingCode = advert.dataset.trackingCode;
      let advertId = advert.id;
      console.log(trackingCode, advertId);

      if (trackingCode) {
        console.warn("LRBTracking setupGridAdvert Click Tracking: " + trackingCode);
        advert.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            global.GA4.trackEvent('Click', 'Grid Advert', trackingCode);
          });
        });
      }

      if (advertId) {
        console.warn("LRBTracking setupGridAdvert View Tracking: " + trackingCode);
        inView('#' + advertId).on('enter', () => {
          global.GA4.trackEvent('View', 'Grid Advert', trackingCode);
        });
      }
    });
  } // Add click tracking for social sharing buttons on articles


  setupArticleSocialShares() {
    var article_id = $("meta[name=articleid]").attr("content");
    console.log("LRBTracking setupArticleSocialShares...");
    $('.article-share .bluesky-button').on('click', function () {
      global.GA4.trackBasicEvent('share', {
        method: "Bluesky",
        content_type: "article",
        item_id: article_id
      });
    });
    $('.article-share .facebook-button').on('click', function () {
      global.GA4.trackBasicEvent('share', {
        method: "Facebook",
        content_type: "article",
        item_id: article_id
      });
    });
    $('.article-share .osshare-button').on('click', function () {
      global.GA4.trackBasicEvent('share', {
        method: "OSShare",
        content_type: "article",
        item_id: article_id
      });
    });
    $('.article-share .email-button').on('click', function () {
      global.GA4.trackBasicEvent('share', {
        method: "Email",
        content_type: "article",
        item_id: article_id
      });
    });
    $('.article-share .print-button').on('click', function () {
      global.LRBCabin.trackEvent('Article Print');
      global.GA4.trackBasicEvent('share', {
        method: "Print",
        content_type: "article",
        item_id: article_id
      });
    });
  }

  trackSearch() {
    // Fire a manual search when performing XHR search request.
    // Searches that include a pageload are tracked automatically by GA4 enhanced tracking.
    var searchTerm = $("#searchResults-searchTerm").val();
    global.GA4.trackBasicEvent('view_search_results', {
      search_term: searchTerm
    });
  }

  trackSignups() {
    var signupCookie = window.utils.getCookie('lrb_temp_signup');

    if (signupCookie && signupCookie == true) {
      this.sendSingleAccountChangeEvent('sign_up', 'Account');
      global.LRBCabin.trackEvent('Signup');
      window.utils.deleteCookie('lrb_temp_signup');
    }
  }

  trackMGMSignups() {
    var signupMGMCookie = window.utils.getCookie('lrb_temp_mgm_signup');

    if (signupMGMCookie && signupMGMCookie == true) {
      this.sendSingleAccountChangeEvent('sign_up', 'MGM');
      global.LRBCabin.trackEvent('MGM Signup');
      window.utils.deleteCookie('lrb_temp_mgm_signup');
    }
  }

  trackLogins() {
    var loginCookie = window.utils.getCookie('lrb_temp_loggedin');

    if (loginCookie && loginCookie == true) {
      this.sendSingleAccountChangeEvent('login');
      global.LRBCabin.trackEvent('Login');
      window.utils.deleteCookie('lrb_temp_loggedin');
    }
  }

  trackLogouts() {
    var logoutCookie = window.utils.getCookie('lrb_temp_loggedout');

    if (logoutCookie && logoutCookie == true) {
      this.sendSingleAccountChangeEvent('logout');
      global.LRBCabin.trackEvent('Logout');
      window.utils.deleteCookie('lrb_temp_loggedout');
    }
  }

  trackLinkSubscriptions() {
    var signupCookie = window.utils.getCookie('lrb_temp_sublink');

    if (signupCookie && signupCookie == true) {
      global.GA4.trackEvent('Link Sub', 'Subscriptions');
      global.LRBCabin.trackEvent('Link Sub');
      window.utils.deleteCookie('lrb_temp_sublink');
    }
  }

  sendSingleAccountChangeEvent(eventName, eventVal) {
    var changeID = eventName + "_" + eventVal;

    if (eventName && !this.accountEventsSent.includes(changeID)) {
      var eventVals = {
        method: "LRB"
      };

      if (eventVal) {
        eventVals.value = eventVal;
      }

      global.GA4.trackBasicEvent(eventName, eventVals);
      this.accountEventsSent.push(changeID);
    }
  }

  trackPasswordChange() {
    global.GA4.trackEvent('Change Password', 'Account');
  }

  trackEmailChange() {
    global.GA4.trackEvent('Change Email', 'Account');
  }

  trackCancellation(referrer = "standalone", reason = "Unknown") {
    console.log('LRBTracking: trackCancellation - ' + referrer + ' - ' + reason);
    global.LRBCabin.trackEvent('cancellation_request_' + referrer);
    global.GA4.trackEvent('cancellation_request_' + referrer, reason);
  }

  trackPaywall() {
    global.LRBTracking.trackArticleReadStart();
    global.GA4.trackEvent('Reading', 'Paywall');
  }

  trackFallbackPaywall() {
    global.LRBCabin.trackEvent('Fallback Paywall');
    global.GA4.trackEvent('Fallback Paywall', 'Paywall');
  }

  trackMeteredFallbackPaywall() {
    global.LRBCabin.trackEvent('Metered Fallback Paywall');
    global.GA4.trackEvent('Metered Fallback Paywall', 'Paywall');
  }

  trackPaywallLoadFail() {
    global.GA4.trackEvent('Failed to load', 'Paywall');
  }

  trackPaywallForceReload() {
    global.GA4.trackEvent('Forcefully shown', 'Paywall');
  }

  trackArticleReadStart() {
    if (!global.LRBTracking.scrolledArticleToStart) {
      global.LRBTracking.scrolledArticleToStart = true;
      global.GA4.trackEvent('Began scrolling', 'Reading');
    }
  }

  trackArticleReadEnd() {
    global.LRBTracking.trackArticleReadStart();

    if (!global.LRBTracking.scrolledArticleToEnd) {
      global.LRBTracking.scrolledArticleToEnd = true;
      global.GA4.trackEvent('Scrolled to end', 'Reading');
    }
  }

  trackNewsletterBlockViewed() {
    if ($('.newsletter-block').length > 0) {
      inView('.newsletter-block').on('enter', function () {
        if (!global.LRBTracking.newsLetterInView) {
          global.LRBTracking.newsLetterInView = true;
          global.GA4.trackEvent('Homepage block in view', 'Newsletter');
        }
      });
    }
  }

  trackNominationFormStart() {
    if ($('.lrb-track--acceptstart').length > 0) {
      var number = $('.lrb-track--acceptstart').data('accept');
      global.GA4.trackBasicEvent("begin_checkout", {
        currency: 'GBP',
        value: 0,
        items: [{
          item_id: 'MGM accept' + number,
          item_name: 'MGM accept' + number
        }]
      });
    }
  }

  trackNominationFormSubmissions() {
    if ($('.section-accept-confirmation').length > 0) {
      setTimeout(function () {
        var number = global.utils.getURLParam("n").toString();
        var acceptId = global.utils.getURLParam("a").toString();

        if (!acceptId) {
          acceptId = 'MGM-transaction';
        }

        global.GA4.trackBasicEvent("purchase", {
          send_to: 'GA4',
          transaction_id: acceptId,
          value: 0,
          tax: 0,
          shipping: 0,
          currency: 'GBP',
          items: [{
            item_id: 'MGM accept' + number,
            item_name: 'MGM accept' + number
          }]
        });
      }, 1000);
    }
  } // Track a form submission, after GA is initialised


  formSubmitted(formName) {
    //TODO check this further for GA4
    if (!window.ga_setup) {
      console.error('GTag not setup, event not tracked: ' + formName);
    } else {
      if (formName) {
        console.log("GTagForm: formSubmitted - " + formName);

        try {
          window.dataLayer({
            'event': 'formSubmitted',
            'formName': formName
          });
        } catch (e) {
          console.error(e);
        }
      } else {
        console.error('GTag formSubmitted: no Form Name specified');
      }
    }
  }

}

module.exports = {
  LRBTracking
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/6_tracking/cabin/LRBCabin.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/6_tracking/cabin/LRBCabin.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Cookie Consent Manager
class LRBCabin {
  constructor() {
    this.eventQueue = [];
    this.isProcessing = false;
  }

  setup() {
    console.log('%cLRBCabin Setup', "background-color: ".concat(global.infoBG, ";"));
    setInterval(() => {
      this.processQueue();
    }, 1000);
  }

  trackEvent(eventName = null) {
    if (eventName) {
      eventName = eventName.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
      this.eventQueue.push(eventName);
      this.processQueue();
    }
  }

  processQueue() {
    if (this.isProcessing || this.eventQueue.length === 0) {
      return;
    }

    this.isProcessing = true;
    console.log('LRBCabin: processing queue with ' + this.eventQueue.length + ' events');

    while (this.eventQueue.length > 0) {
      const eventName = this.eventQueue[0];

      if (window.cabin && typeof window.cabin.event === 'function') {
        console.log('LRBCabin: processing event - ' + eventName);
        window.cabin.event(eventName);
        this.eventQueue.shift();
      } else {
        console.log('LRBCabin: Cabin not available, skipping event - ' + eventName);
        break;
      }
    }

    this.isProcessing = false;
  }

}

module.exports = {
  LRBCabin
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/6_tracking/cmp/ConsentManager.js":
/*!*********************************************************!*\
  !*** ./assets/scripts/6_tracking/cmp/ConsentManager.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Cookie Consent Manager
class ConsentManager {
  constructor() {
    // CMP does actual disabling of code
    // so safe to have these default to true to avoid side effects and race conditions
    // they will be updated when consent is fetched
    this.consent = {
      functional: true,
      marketing: true,
      measurement: true
    };
    this.timeout = null;
    this.maxRetries = 500;
    this.retries = 1;
  }

  setup() {
    console.log('%cConsent Manager Setup', "background-color: ".concat(global.infoBG, ";"));
    this.fetchConsent();
  }

  retryFetchConsent() {
    this.retries++;

    if (this.retries > this.maxRetries) {
      console.error('Consent Manager not found');
      this.consentSyncComplete();
      return;
    }

    console.log('Retrying consent fetch...');
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.fetchConsent();
    }, 100);
  }

  fetchConsent() {
    console.info('Attempting to fetch consent...(' + this.retries + '/' + this.maxRetries + ')');

    if (window.__cmp) {
      try {
        var _window$__cmp$purpose, _window$__cmp$purpose2, _window$__cmp$purpose3;

        this.consent.functional = (_window$__cmp$purpose = window.__cmp('getCMPData').purposeConsents) === null || _window$__cmp$purpose === void 0 ? void 0 : _window$__cmp$purpose.c51;
        console.log('Consent functional:', this.consent.functional);
        this.consent.marketing = (_window$__cmp$purpose2 = window.__cmp('getCMPData').purposeConsents) === null || _window$__cmp$purpose2 === void 0 ? void 0 : _window$__cmp$purpose2.c52;
        console.log('Consent marketing:', this.consent.marketing);
        this.consent.measurement = (_window$__cmp$purpose3 = window.__cmp('getCMPData').purposeConsents) === null || _window$__cmp$purpose3 === void 0 ? void 0 : _window$__cmp$purpose3.c54;
        console.log('Consent measurement:', this.consent.measurement);

        if (this.consent.functional === undefined & this.consent.marketing === undefined & this.consent.measurement === undefined) {
          this.retryFetchConsent();
        } else {
          this.consentSyncComplete();
        }
      } catch (e) {
        this.retryFetchConsent();
      }
    } else {
      this.retryFetchConsent();
    }
  }

  consentSyncComplete() {
    console.info('Consent sync complete');
    global.LRBSubx.consentSyncComplete();
  }

}

module.exports = {
  ConsentManager
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/6_tracking/dotdigital/WBT.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/6_tracking/dotdigital/WBT.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {// Web Behaviour Tracking for DotDigital
class WBT {
  constructor() {
    window.wbtSetup = false;
    window.wbtTracked = false;
    window.wbtTrackedData = null; // Data properties we do not want to send to DD as they are irrelevant for this tracking

    window.wbtTrackedDataPropsToDelete = ['user_email', 'title', 'description'];
  }

  setup() {
    // Check if WBT already setup
    if (!window.wbtSetup) {
      console.log('%cWBT Setup', "background-color: ".concat(global.infoBG, ";"));
      window.wbtSetup = true;
      this.triggerWBT();
      this.setupIdentifyButtons();
    }
  }

  setupIdentifyButtons() {
    let scope = this;
    $('.sa-newsletterSignup .form-submit-holder .btn').on('click', function () {
      var newsletterEmail = $('.sa-newsletterSignup #email').val();

      if (newsletterEmail) {
        scope.ddIdentify(newsletterEmail);
      }
    });
  }

  triggerWBT() {
    // Send WBT initial tracking event
    if (!window.wbtTracked) {
      this.updateTrackedData();
      this.ddTrack(window.wbtTrackedData);
    } else {
      console.info('%cWBT already tracked, cannot be re-initialised', "background-color: ".concat(global.warnBG, ";"));
    }
  }

  updateTrackedData() {
    var _global$LRBSessionDat;

    if ((_global$LRBSessionDat = global.LRBSessionData) !== null && _global$LRBSessionDat !== void 0 && _global$LRBSessionDat.ddWBTData) {
      // Remove irrelevant data we do not want to send to DotDigital
      for (const propToDelete of window.wbtTrackedDataPropsToDelete) {
        if (global.LRBSessionData.ddWBTData.hasOwnProperty(propToDelete)) {
          delete global.LRBSessionData.ddWBTData[propToDelete];
        }
      } // Remove empty tags


      if (global.LRBSessionData.ddWBTData.hasOwnProperty('tags') && global.LRBSessionData.ddWBTData.tags.length == 0) {
        delete global.LRBSessionData.ddWBTData.tags;
      } // Remove LRB author


      if (global.LRBSessionData.ddWBTData.hasOwnProperty('author') && global.LRBSessionData.ddWBTData.author == 'LRB') {
        delete global.LRBSessionData.ddWBTData.author;
      } // Remove page description


      if (global.LRBSessionData.ddWBTData.hasOwnProperty('description')) {
        delete global.LRBSessionData.ddWBTData.description;
      } // Remove page title


      if (global.LRBSessionData.ddWBTData.hasOwnProperty('title')) {
        delete global.LRBSessionData.ddWBTData.title;
      }

      window.wbtTrackedData = this.formatObjectValuesToStrings({ ...global.LRBSessionData.ddWBTData
      });
    } else {
      window.wbtTrackedData = {};
    }
  }

  formatObjectValuesToStrings(obj) {
    // Convert data object to string only key:value pairs
    const formattedObj = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        //Skip properties with null values
        if (obj[key] === null) {
          continue;
        }

        if (Array.isArray(obj[key])) {
          // Convert array to comma separated string
          formattedObj[key] = obj[key].map(item => String(item)).join(", ");
        } else {
          // Convert value to string
          formattedObj[key] = String(obj[key]);
        }
      }
    }

    return formattedObj;
  } // Attempt DD tracking event


  ddTrack(customData) {
    if (window.dmPt) {
      try {
        if (customData && Object.keys(customData).length !== 0) {
          console.info('%cWBT tracking with custom data', "background-color: ".concat(global.warnBG, ";"));
          console.log(customData);
          window.dmPt('track', customData);
        } else {
          console.info('%cWBT tracking with no custom data', "background-color: ".concat(global.warnBG, ";"));
          window.dmPt('track');
        }

        console.log('%cWBT Tracked', "background-color: ".concat(global.infoBG, ";"));
        window.wbtTracked = true;
        this.ddIdentify();
      } catch (error) {
        global.LRBErrorTracking.reportErrorWithFallbackMessage('WBT could not track', error);
      }
    } else {
      console.warn('WBT not available, not tracked');
    }
  }

  ddIdentify(email = null) {
    let identifiedEmail = email;

    if (!identifiedEmail) {
      identifiedEmail = global.LRBSessionData.userEmail;
    }

    try {
      if (identifiedEmail && identifiedEmail != "") {
        console.info('%cWBT identifying with email', "background-color: ".concat(global.warnBG, ";"));
        window.dmPt("identify", {
          email: identifiedEmail
        });
      } else {
        console.info('%cWBT not identifying', "background-color: ".concat(global.warnBG, ";"));
      }
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('WBT could not identify', error);
    }
  } // Exports required tracked session data and returns JSON object


  getJSONSessionData() {
    return {
      'setup': window.wbtSetup,
      'tracked': window.wbtTracked,
      'wbtTrackedData': window.wbtTrackedData
    };
  }

}

module.exports = {
  WBT
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/6_tracking/error/LRBErrorTracking.js":
/*!*************************************************************!*\
  !*** ./assets/scripts/6_tracking/error/LRBErrorTracking.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $) {const IGNORE_URLS = ['safari-web-extension', 'webkit-masked-url', 'file://', '/session', '12ft.io', '//www-lrb-co-uk', 'openathens.net', '/translated.turbopages.org', 'kproxy.com', 'cdn.tinypass.com', 'user-script:'];

class LRBErrorTracking {
  constructor() {
    window.LRBErrorTrackingSetup = false;
    window.appDetails = {};
    this.LEVEL = {
      FATAL: "fatal",
      CRITICAL: "critical",
      ERROR: "error",
      WARNING: "warning",
      LOG: "log",
      INFO: "info",
      DEBUG: "debug"
    };
  }

  setup() {
    console.log('%cLRBErrorTracking Setup', "background-color: ".concat(global.infoBG, ";"));
    window.appDetails = this.getAppDetails();
    this.intialiseErrorTracking();
  }

  getAppDetails() {
    return {
      app: global.appname,
      version: global.version,
      browserName: window.navigator.userAgent
    };
  }

  intialiseErrorTracking() {
    let scope = this;

    if (!window.LRBErrorTrackingSetup) {
      // Only init if we're not skipping errors based on bot/crawler/UA etc
      if (!this.skipErrorSending()) {
        console.info('%cLRBErrorTracking Initialised', "background-color: ".concat(global.warnBG, ";"));
        window.LRBErrorTrackingSetup = true;
        global.LRBSentry.setup(); // Process queued errors

        setTimeout(this.processErrorQueue, 1000);
        setInterval(this.processErrorQueue, 10000);
      } else {
        console.warn('Skipping LRBErrorTracking setup');
      }
    }
  }

  checkErrorTrackingEnabled() {
    // Ensure that error tracking is setup
    if (!window.LRBErrorTrackingSetup) {
      this.intialiseErrorTracking();
    }
  } // Errors can be queued up from within template rendering for reporting to the frontend error reporting
  // used when not possible to report directly in symfony


  processErrorQueue() {
    console.info('%cProcessing LRBError Queue', "background-color: ".concat(global.warnBG, ";"));

    if (window.lrbErrorQueue && Array.isArray(window.lrbErrorQueue)) {
      for (let i = 0; i < window.lrbErrorQueue.length; i++) {
        global.LRBErrorTracking.captureMessage(window.lrbErrorQueue[i]);
      }

      window.lrbErrorQueue = [];
    }
  }
  /*
      To facilitate setting context to errors and grouping them together
      By default this is set for each event to window.location.pathname
      Here we override this with our own values to keep the number of
      individual bug reports tidier / more useful
  */
  // Set context automatically based on the page we are on


  setPageContext() {
    var context = window.location.pathname;

    switch (true) {
      case $('body').hasClass('home'):
        context = 'Homepage';
        break;

      case $('body').hasClass('category'):
        context = 'Category';
        break;

      case $('body').hasClass('collection'):
        context = 'Booklist';
        break;

      case $('body').hasClass('events'):
        context = 'Events';
        break;

      case $('body').hasClass('blog-post'):
        context = 'Blog Post';
        break;

      case $('body').hasClass('blog'):
        context = 'Blog';
        break;

      case $('body').hasClass('book'):
        context = 'Book';
        break;

      case $('body').hasClass('basket'):
        context = 'Basket';
        break;

      case $('body').hasClass('profile'):
        context = 'Profile';
        break;

      case $('body').hasClass('about-us'):
        context = 'About Us';
        break;

      case $('body').hasClass('podcasts-video'):
        context = 'Podcasts & Video';
        break;

      case $('.podcasts-video-header .podcast-play').length > 0:
        context = 'Podcast';
        break;

      case $('.podcasts-video-header .video-play').length > 0:
        context = 'Video';
        break;
    }

    this.setContext(context);
  } // Set context manually when performing specific functionality
  // Should be reset to the page after functionality complete as this context persists once set


  setContext(context) {// TODO set context here and pass to sentry
  }

  reportErrorWithFallbackMessage(message, error = null) {
    if (!message) {
      console.error('Cannot report error without message');
      return;
    }

    var err = null;

    if (error) {
      err = error;
    } else {
      err = message;
    }

    console.error(message, err);
    global.LRBErrorTracking.error(err);
  }
  /*
      Send regardless of what ENV we are on by default, unless 'env' string is provided, in which case it will send only on that ENV
  */


  captureMessage(error, level = 'error', env = null, avoidIntranet = false) {
    if (!error) {
      console.error('Cannot track non-existant error');
      return false;
    }

    if (this.skipErrorSending(env)) {
      return false;
    }

    if (typeof error === 'object' && error !== null && error.hasOwnProperty('statusText')) {
      error = error.statusText;
    } // Determine whether to send based on ENV


    var send = false;

    if (env) {
      if (env == window.envMode.toLowerCase()) {
        send = true;
      }
    } else {
      send = true;
    } // Check whether to skip sending this error on intranet URLs


    if (avoidIntranet && window.isIntranet) {
      send = false;
    }

    if (send) {
      if (error && error != null && !Array.isArray(error)) {
        this.checkErrorTrackingEnabled();
        global.LRBSentry.captureMessage(error, level);
      } else {
        console.error('Could not report error', error);
      }
    }
  }

  error(error, env = null) {
    if (this.skipErrorSending(env)) {
      return false;
    }

    this.checkErrorTrackingEnabled();
    global.LRBSentry.error(error);
  } // Check if can send the message / error based on env and other data
  // Also make sure reporting endpoints are setup before using them


  skipErrorSending(env) {
    var skipError = false; // Do not report errors from a list of URLs to ignore

    if (IGNORE_URLS.indexOf(window.location.href) > -1) {
      skipError = true;
    } // Skip bot reporting
    // Skip headless browser / scraper reporting


    if (global.isBot || global.headless) {
      skipError = true;
    } // Check if is a facebook crawler - checking IPV6 for "::face:b00c"


    if (global.LRBSessionData.facebookBot) {
      skipError = true;
    } // Determine whether to send based on ENV


    var send = false;

    if (env) {
      // if env is set then only send if it matches current active environment
      if (env == window.envMode.toLowerCase()) {
        send = true;
      }
    } else {
      // always send if env is not set
      send = true;
    }

    if (!send) {
      skipError = true;
    }

    return skipError;
  } // Called in the event of late Facebook bot detection


  destroy() {// TODO destroy sentry after initialised here
  }

}

module.exports = {
  LRBErrorTracking
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/6_tracking/error/sentry/LRBSentry.js":
/*!*************************************************************!*\
  !*** ./assets/scripts/6_tracking/error/sentry/LRBSentry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ENABLE_SENTRY = true; // Set sample rate to 1.0 to capture 100% of errors for Staging

const STAGING_ERROR_SAMPLE_RATE = 1.0;
const DEBUG_STAGING = true; // Set sample rate to 0.25 to capture 25% of errors for Production

const PRODUCTION_ERROR_SAMPLE_RATE = 0.25;
const DEBUG_PRODUCTION = false;
const IGNORE_ERRORS = [// Random plugins/extensions
/top\.GLOBALS/, /\'scroller\'/, /ResizeObserver/, /this.media.webkitEnterFullscreen/, /e\[t\].call/, /Illegal\sinvocation/, /webkit-masked-url/, /WKWebView\sAPI/, /ReadwiseElement/, /__adblocker/, /AddFingerprintAction/, /msDiscoverChatAvailable/, /gtm\/js/, /src\/helpers/, /get-frame-manager-configuration/, /cancellation\sof\sshare/, /Share\scanceled/, /Stylesheet\sappend\stimeout/, /No\sreCAPTCHA\sclients\sexist/, /\#\:\~\:/, /jquery\.magnify/, /IndexSizeError/, /\<anonymous\>/, /\<unknown\>/, /closeFullScreen/, // Cabin errors
/The\soperation\sis\sinsecure/, /hello\.js/, /v\(hello\)/, // Sentry errors
/sentry\/scripts/, /sentry-cdn/, /ReplayContainer/, /replay\/build\/npm/, /HTMLIFrameElement/, /iframeLoadTimeout/, // OneTrust errors
/zo\.bannerGroup\.html/, /Window\.getComputedStyle/, /otBannerSdk/, /otSDKStub/, /src\/sdk/, /scripttemplates/, /insertAlertHtml/, /this\.shiftBannerFocus/, /OneTrustStub/, // See: http://blog.errorception.com/2012/03/tale-of-unfindable-js-error.html
/originalCreateNotification/, /canvas\.contentDocument/, /MyApp\_RemoveAllHighlights/, /tt.epicplay.com/, /ZiteReader/, /jigsaw\sis\snot\sdefined/, /ComboSearch\sis\snot\sdefined/, /loading\.retry\.widdit.com/, /atomicFindClose/, // Facebook borked
/fb\_xd\_fragment/, // ISP /optimizing/ proxy - `Cache-Control: no-transform` seems to
// reduce this. (thanks @acdha)
// See http://stackoverflow.com/questions/4113268
/bmi\_SafeAddOnload/, /EBCallBackMessageReceived/, // See http://toolbar.conduit.com/Developer/HtmlAndGadget/Methods/JSInjection.aspx
/conduitPage/, /Extension\scontext\sinvalidated/, /Permission\sdenied\sto\saccess\sproperty/];
const DENY_URLS = [// Facebook flakiness
/graph\.facebook\.com/i, // Facebook blocked
/connect\.facebook\.net/i, // Woopra flakiness
/eatdifferent\.com\.woopra-ns\.com/i, /static\.woopra\.com\/js\/woopra\.js/i, // Chrome extensions
/extensions\//i, /-extension/i, /^chrome:\/\//i, // Other plugins
/kaspersky-labs\.com/i, /127\.0\.0\.1:4001\/isrunning/i, // Cacaoweb
/webappstoolbarba\.texthelp\.com\//i, /metrics\.itunes\.apple\.com\.edgesuite\.net\//i, /webkit-masked-url/i, /safari-web-extension/i, /safari-extension/i, /^file:\/\//i, /user-script:/i, // Cabin
/withcabin\.com/i, // Hotjar
/hotjar\.com/i, /jar\.com/i, // Facebook
/facebook\.com/i, /facebook\.net/i, // Google
/google\.com/i, /google\-analytics\.com/i, /googletagmanager\.com/i, /gstatic\.com/i, // New Relic
/newrelic\.com/i, /nr-data\.com/i, // Eventbrite
/evbuc\.com/i, // Cloudflare
/cloudflare\.com/i, // OneTrust
/cookielaw\.org/i, /onetrust\.com/i, // Proxies
/www-lrb-co-uk/i, /openathens\.net/i, /turbopages\.org/i, /kproxy\.com/i, // Sentry
/sentry-cdn\.com/i, /browser\.sentry-cdn\.com/i, // 12ft paywall bypass
/12ft\.io/i, // LibProxy (added to filter out errors with 'libproxy' in the URL)
/libproxy\.co/i, // Google Translate
/translate\.goog/i];

class LRBSentry {
  constructor() {
    window.sentrySetup = false;
    window.sentryOnLoad = this.intialiseSentry();
  }

  setup() {
    console.log('%cSentry Setup', "background-color: ".concat(global.infoBG, ";"));
    this.intialiseSentry();
    this.updateSentryContext();
  }

  intialiseSentry() {
    if (ENABLE_SENTRY && !window.sentrySetup && !window.LRBErrorTracking.skipErrorSending && !window.isBot) {
      console.info('%cSentry Initialising...', "background-color: ".concat(global.warnBG, ";"));
      window.sentrySetup = true;
      var sampleRate = PRODUCTION_ERROR_SAMPLE_RATE;
      var debug = DEBUG_PRODUCTION;
      var attachStacktrace = DEBUG_PRODUCTION;

      if (window.envMode === "staging" || window.envMode === "development") {
        sampleRate = STAGING_ERROR_SAMPLE_RATE;
        debug = DEBUG_STAGING;
        attachStacktrace = DEBUG_STAGING;
      } // Ignore URLs set above as regex, and in main error tracking to double check those are skipped


      var denyUrls = DENY_URLS.concat(global.LRBErrorTracking.IGNORE_URLS); // Initialise Sentry

      window.Sentry.init({
        maxBreadcrumbs: 50,
        debug: debug,
        environment: window.envMode,
        autoSessionTracking: true,
        attachStacktrace: attachStacktrace,
        tracesSampleRate: sampleRate,
        ignoreErrors: IGNORE_ERRORS,
        denyUrls: denyUrls,
        release: 'LRB@' + global.version,

        beforeSend(event, hint) {
          const error = hint.originalException;

          if (error && error.message && error.message.match(/database unavailable/i)) {
            event.fingerprint = ["database-unavailable"];
          }

          return event;
        }

      });
    }

    if (!ENABLE_SENTRY) {
      console.warn('Sentry Disabled');
    }

    this.updateSentryContext();
  }

  checkSentryEnabled() {
    if (!global.LRBErrorTracking.skipErrorSending()) {
      this.intialiseSentry();
    }
  }

  captureMessage(message, severity) {
    this.checkSentryEnabled();

    if (window.sentrySetup) {
      try {
        this.updateSentryContext();
        window.Sentry.captureMessage(message, severity);
      } catch (e) {
        console.error("Cannot access Sentry:");
        console.warn(message, severity);
      }
    } else {
      console.error("Sentry not setup:");
      console.warn(message, severity);
    }
  }

  error(error) {
    this.checkSentryEnabled();

    if (window.sentrySetup) {
      try {
        this.updateSentryContext();
        window.Sentry.captureException(error);
      } catch (e) {
        console.error("Cannot access Sentry:");
        console.error(error);
      }
    } else {
      console.error("Sentry not setup:");
      console.error(error);
    }
  }

  updateSentryContext() {
    if (window.Sentry) {
      try {
        // Update login state
        if (window.Sentry.setTag) window.Sentry.setTag("signed_in", global.LRBSessionData.loggedIn); // Update User ID

        if (window.Sentry.setUser) {
          if (global.LRBSessionData.userID) {
            window.Sentry.setUser({
              id: global.LRBSessionData.userID
            });
          } else {
            window.Sentry.setUser(null);
          }
        } // Update session details


        if (global.LRBSessionData.sessionData) {
          if (window.Sentry.setContext) window.Sentry.setContext("sessionData", global.LRBSessionData.sessionData);
        } // Update app details


        if (window.Sentry.setContext) window.Sentry.setContext("frontend", window.appDetails);
      } catch (error) {
        console.error("Cannot set Sentry context");
      }
    }
  }

}

module.exports = {
  LRBSentry
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/6_tracking/google/GA4.js":
/*!*************************************************!*\
  !*** ./assets/scripts/6_tracking/google/GA4.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const GA4_ENABLED = true;
const SEND_GA4_TRACKING = true; // Google Tag Manager ID

const GA4_TRACKING_ID_TEST = "G-7LCPFB8KQ6";
const GA4_TRACKING_ID_LIVE = "G-JE69ELWJLM";

class GA4 {
  constructor() {
    // Stored dimensions to pass to GA when it's initialised
    window.ga4_dimensions = {
      'anonymize_ip': true,
      'cookie_prefix': 'lrb',
      'cookie_flags': 'max-age=7200;secure;samesite=none',
      'groups': 'GA4'
    };
    window.addGA4Dimension = this.addDimension;
    window.GA4SCG = this.setContentGroup;
    window.GA4SCGFP = this.setContentGroupForPage;
    window.GA4SCGFM = this.setContentGroupFromMeta;
    window.setGA4UserID = this.setUserID;
    window.ga4trackingID = GA4_TRACKING_ID_TEST;
    window.gaJson = this.getJSONSessionData;
    window.gCID = this.getClientID;
    window.ga4_setup = false;
    window.ga4_failed = false;
    window.gtag = this.gtag;
    window.contentGroupCount = 1;
    window.ga4_debug_mode = false;
  }

  setup() {
    global.LRBErrorTracking.setContext('GA4 setup'); // Set default consent states for GA4 Consent Mode v2
    // as per https://help.consentmanager.net/books/cmp/page/working-with-google-consent-mode-v2-manualsemiautomatic-blocking-code

    window.gtag('consent', 'default', {
      'ad_storage': 'denied',
      'analytics_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'wait_for_update': 500
    });
    window.dataLayer.push({
      'event': 'default_consent'
    });

    if (!GA4_ENABLED) {
      return false;
    }

    console.log('%cGoogleGTag Setup', "background-color: ".concat(global.infoBG, ";"));

    if (global.env === "production" || global.env === "prod") {
      window.ga4trackingID = GA4_TRACKING_ID_LIVE;
    } // Check for ID overrides from ENV Vars - CommonComponentsController > googleIDsAction


    if (window.GA4ID && window.GA4ID != "") {
      window.ga4trackingID = window.GA4ID;
    } // Check for debug mode from ENV var


    if (window.ga4DebugMode && window.ga4DebugMode != "") {
      window.ga4_debug_mode = window.ga4DebugMode;
      window.ga4_dimensions.debug_mode = window.ga4_debug_mode;
    }

    var gtagScript = document.createElement("script");
    gtagScript.type = "text/javascript";
    gtagScript.setAttribute("async", "true");
    gtagScript.setAttribute("data-cmp-vendor", "s26");
    gtagScript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=" + window.ga4trackingID);

    gtagScript.onerror = function () {
      window.ga4_failed = true;
      console.error('Failed to load GA4 Scripts');
    };

    document.head.appendChild(gtagScript);
    global.LRBErrorTracking.setPageContext(); // Set page content groupings

    window.GA4SCGFP();
  } // Set a USER-ID to associate multiple sessions with the same logged in user, before GA is initialised


  setUserID(userID) {
    if (userID && userID != null && userID != '') {
      if (window.ga4_setup) {
        console.error('GA4 setUserID: Cannot set UserID, GTag already initialised');
        return false;
      }

      window.ga4_dimensions.user_id = userID;
    } else {
      console.warn('GA4 setUserID: No ID set');
    }
  } // Add a dimension to the store, before GA is initialised


  addDimension(dimension, value) {
    if (window.ga4_dimensions.length == 20) {
      console.error('GA4 addDimension: Cannot add dimension, limit reached: ' + window.ga4_dimensions);
      return false;
    }

    if (dimension && value) {
      if (window.ga4_dimensions[dimension]) {
        console.warn('GA4 addDimension: Overwriting Dimension - ' + dimension);
      }

      console.warn('GA4 Adding Dimension: ' + dimension + " : " + value);
      window.ga4_dimensions[dimension] = value;
    } else {
      console.warn('GA4 addDimension: No Dimension set');
    }
  } // Track an event, after GA is initialised


  trackEvent(action, category, label, value, nonInteraction = false) {
    if (action) {
      var eventVals = {
        'send_to': 'GA4'
      };

      if (category) {
        eventVals.event_category = category;
      }

      if (label) {
        eventVals.event_label = label;
      }

      if (value) {
        eventVals.value = value;
      }

      if (nonInteraction) {
        eventVals.non_interaction = true;
      }

      console.warn("GA4Event: " + action + " - " + category + ", " + label + ", " + value);

      try {
        window.gtag('event', action, eventVals);
      } catch (e) {
        console.error(e);
      }
    } else {
      console.error('GA4 trackEvent: no action specified');
    }
  } // Track an event, after GA is initialised


  trackBasicEvent(action, eventVals = {}) {
    console.info('trackBasicEvent: ' + action, eventVals);

    if (action && eventVals) {
      eventVals.send_to = 'GA4';
      console.warn("GA4Event: " + action + " - " + eventVals);

      try {
        window.gtag('event', action, eventVals);
      } catch (e) {
        console.error(e);
      }
    } else {
      console.error('GA4 trackBasicEvent: no action/vals specified');
    }
  } // Set a page content group, can be used to add mutliple content groups to the same page
  // GA4SCG


  setContentGroup(contentGroup) {
    console.log('setContentGroup... ' + contentGroup);

    if (contentGroup && contentGroup !== '') {
      var contentGroupName = 'content_group'; // if multiple content groups are to be added then name them as 'content_group', 'content_group2', 'content_group3' etc

      if (window.contentGroupCount > 1) {
        contentGroupName = contentGroupName + window.contentGroupCount;
      }

      console.log('setContentGroup ' + contentGroupName + ' - ' + contentGroup); // Add primary content group to dimensions in addition to setting in dataLyayer

      window.ga4_dimensions[contentGroupName] = contentGroup;
      gtag('set', contentGroupName, contentGroup);
      window.contentGroupCount++;
    }
  } // Set Content Group automatically based on the page we are on
  // GA4SCGFP


  setContentGroupForPage() {
    var pageGroup = global.LRBTracking.getPageGroup();
    console.log('setContentGroupForPage... ' + pageGroup);

    if (pageGroup) {
      // set page group as content_group
      window.GA4SCG(pageGroup); // Send additional Article content groups
      // Set article subject dimension from meta

      var subjectMeta = document.querySelector("meta[property='article:section']");

      if (subjectMeta) {
        var subject = subjectMeta.getAttribute("content");

        if (subject && subject != '') {
          window.addGA4Dimension('article_subject', subject);
        }
      } // Set article type content group from meta


      window.GA4SCGFM("meta[property='article:type']");
      var articleTypeMeta = document.querySelector("meta[property='article:type']");

      if (articleTypeMeta) {
        var articleType = articleTypeMeta.getAttribute("content");

        if (articleType && articleType != '') {
          window.addGA4Dimension('article_type', articleType);
        }
      }

      return pageGroup;
    }

    console.log('setContentGroupForPage failed');
    return false;
  } // GA4SCGFP
  // e.g. window.GA4SCGFM("meta[property='article:type']");


  setContentGroupFromMeta(metaQueryString) {
    if (metaQueryString) {
      var meta = document.querySelector(metaQueryString);

      if (meta) {
        var metaContent = meta.getAttribute("content");

        if (metaContent && metaContent != '') {
          return window.GA4SCG(metaContent);
        }
      }
    }

    console.log('setContentGroupFromMeta failed');
    return false;
  } // Check if current page contains PII or other private content that should not be tracked
  // Returns true if pageview event has been redacted / blocked


  checkForPrivatePage() {
    // To avoid sending PII from URL params etc
    // This checks based on the URL structure and URL params
    // Based on those it will perform a combination of:
    // - Blocking standard page view event in GA, non page view event is sent instead
    // - Cleanup the page title to not contain PII
    // - Clean the URL path to not contain PII
    var blockPageView,
        cleanPageTitle,
        cleanPath,
        pageViewRedacted = false; // Full path is now required in GA4 for virtual pageviews

    var cleanURL = window.location.protocol + '//' + window.location.host + window.location.pathname; // Check if URL matches specific pages we want to sanitise

    if (window.location.pathname.includes("password-sent") || window.location.pathname.includes("password-changed") || window.location.pathname.includes("forgotten-password") || window.location.pathname.includes("reset-password") || window.location.pathname.includes("password")) {
      pageViewRedacted = true;
      cleanPageTitle = true;
      cleanPath = true;
    } // Check if URL contains PII in URL params


    if (window.location.search.indexOf('@') > -1 || global.utils.getURLParam("fname") != "" || global.utils.getURLParam("lname") != "" || global.utils.getURLParam("email") != "") {
      pageViewRedacted = true;
    } // If specific URL params are present then clean the URL, but otherwise do not alter the pageview


    if (global.utils.getURLParam("t") != "" || global.utils.getURLParam("a") != "" || global.utils.getURLParam("n") != "" || global.utils.getURLParam("_ptid") != "" || global.utils.getURLParam("user_id") != "" || global.utils.getURLParam("fbclid") != "" || global.utils.getURLParam("gtm_debug") != "") {
      pageViewRedacted = true;
      cleanPath = true;
    } // If URL has DSB subscription ID then redact this


    if (window.location.pathname.includes("account/subscription/DSB")) {
      pageViewRedacted = true;
      cleanURL = this.redactDSBIDs(cleanURL);
      cleanPath = true;
    } // If URL has subscription ID then redact this


    if (window.location.pathname.includes("account/subscriptions")) {
      pageViewRedacted = true;
      cleanURL = this.redactSubscriptionIDs(cleanURL);
      cleanPath = true;
    } // If URL has mailing list preferences then redact this


    if (window.location.pathname.includes("/mailing-list-preferences")) {
      pageViewRedacted = true;
      cleanURL = this.redactMailingListIDs(cleanURL);
      cleanPath = true;
    } // Send a virtual pageview event rather than the standard one


    if (blockPageView) window.addGA4Dimension('send_page_view', false); // Cleanup the page title

    if (cleanPageTitle) window.addGA4Dimension('page_title', document.title); // Cleanup the URL sent to GA to not include params etc

    if (cleanPath) window.addGA4Dimension('page_location', cleanURL); //Cleanup referrer

    if (document.referrer) {
      let cleanReferrer = document.referrer; // Apply the same redaction functions we use for the current URL

      cleanReferrer = this.redactDSBIDs(cleanReferrer);
      cleanReferrer = this.redactSubscriptionIDs(cleanReferrer);
      cleanReferrer = this.redactMailingListIDs(cleanReferrer); // Only set the dimension if we actually modified the referrer

      if (cleanReferrer !== document.referrer) {
        window.addGA4Dimension('page_referrer', cleanReferrer);
      }
    }

    if (pageViewRedacted) console.warn("GTag Not Tracking Standard Pageview due to PII content on this page");
    return pageViewRedacted;
  }

  redactDSBIDs(url) {
    return url.replace(/account\/subscription\/DSB\/\d+/g, 'account/subscription/DSB/REDACTED_ID');
  }

  redactSubscriptionIDs(url) {
    return url.replace(/account\/subscriptions\/\d+/g, 'account/subscriptions/REDACTED_ID');
  }

  redactMailingListIDs(url) {
    return url.replace(/mailing-list-preferences\/\d+/g, 'mailing-list-preferences/REDACTED_ID');
  } // Initialise GA Tracking, using stored dimensions etc


  initialiseGATagTracking() {
    global.LRBErrorTracking.setContext('GA4 initialiseGATagTracking');
    var sendRedactedPageview = this.checkForPrivatePage();

    if (SEND_GA4_TRACKING && !window.ga4_failed) {
      if (window.ga4_setup) {
        console.error('GA4 already setup, skipping');
        return false;
      }

      console.warn('GA4 Initialising Tracking'); // Add cross domain tracking

      var domains = {
        'domains': ['mylrb.com', 'mylrb.co.uk']
      };
      window.addGA4Dimension('linker', domains); // Default GA Pageview Event etc

      window.gtag('js', new Date()); // Update referrer from URL passed through session redirect

      if (window.lrb_referrer && window.lrb_referrer != undefined && window.lrb_referrer != "") {
        window.gtag('set', {
          'referrer': window.lrb_referrer
        });

        try {
          Object.defineProperty(document, "referrer", {
            get: function () {
              return window.lrb_referrer;
            }
          });
        } catch (e) {
          console.error("Session Referral Passthrough Fail: " + e);
        }
      }

      global.LRBErrorTracking.setContext('GA4 initialiseGATagTracking'); // Add user tracking data

      var sessionTrackingData = global.LRBSessionData.trackingData;

      if (sessionTrackingData) {
        console.log('Setting user properties', sessionTrackingData);
        window.ga4_dimensions.user_properties = sessionTrackingData;
      } // Trigger GA


      window.gtag('config', window.ga4trackingID, window.ga4_dimensions);
      window.ga4_setup = true; //global.LRBTracking.logSessionData();

      global.LRBTracking.setupDelayedEventTracking(); // This was a session referral redirect, cleanup the URL after tracking is done

      if (window.lrb_referrer && window.lrb_referrer != undefined && window.lrb_referrer != "") {
        global.utils.updateURL(window.location.pathname);
      }
    } else {
      if (window.ga4_failed) {
        global.LRBErrorTracking.setContext('GA Tracking');
        console.error('Cannot load Tracking, likely due to script blockers'); //global.LRBErrorTracking.captureMessage('Cannot load Tracking, likely due to script blockers',global.LRBErrorTracking.LEVEL.INFO,'production',true);

        global.LRBErrorTracking.setPageContext();
      }

      console.warn('GA4 Not Initialising Tracking:: No events/tracking will be sent to GA');
    }

    global.LRBErrorTracking.setPageContext();
  }

  gtag() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  }

  getClientID() {
    global.LRBErrorTracking.setContext('GA4 getClientID');
    var cID = false;

    try {
      var gaCookie = window.utils.getCookie('lrb_ga');

      if (gaCookie) {
        cID = gaCookie.slice(6);
      } else {
        console.warn("GAgetJSONSessionData: Could not access GA");
      }
    } catch (e) {
      console.warn("GAgetJSONSessionData: Could not get GA clientID"); //global.LRBErrorTracking.captureMessage('Could not get GA clientID', global.LRBErrorTracking.LEVEL.ERROR, 'production');
    }

    global.LRBErrorTracking.setPageContext();
    return cID;
  } // Exports required tracked session data and returns JSON object
  // to be passed along with a form in hidden field for reporting


  getJSONSessionData() {
    if (!GA4_ENABLED) {
      return false;
    } else {
      var data = {
        'setup': window.ga4_setup,
        'sendTracking': SEND_GA4_TRACKING,
        'dataLayer': window.dataLayer,
        'blocked': false
      };
      var clientID = window.gCID();

      if (clientID) {
        data.clientId = clientID;
      }

      return data;
    }
  }

  destroy() {}

}

module.exports = {
  GA4
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/6_tracking/subx/LRBSubx.js":
/*!***************************************************!*\
  !*** ./assets/scripts/6_tracking/subx/LRBSubx.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const subXJSSrc = "//d2ip7iv1l4ergv.cloudfront.net/embed/widget/subxGDLV3.min.js";
const subXDoNotTrackJSSrcStaging = "//produk.zeddit.com/staging.lrb.co.uk/SiteScriptDNT.js";
const subXDoNotTrackJSSrc = "//produk.zeddit.com/www.lrb.co.uk/SiteScriptDNT.js";

class LRBSubx {
  constructor() {
    this.setupComplete = false;
    this.sessionDataLoaded = false;
    this.consentLoaded = false;
  }

  sessionDataLoadComplete() {
    this.sessionDataLoaded = true;
    this.checkSetup();
  }

  consentSyncComplete() {
    this.consentLoaded = true;
    this.checkSetup();
  }

  checkSetup() {
    if (this.sessionDataLoaded && this.consentLoaded) {
      this.setup();
    }
  }

  setup() {
    if (this.setupComplete) {
      return;
    }

    this.setupComplete = true;

    if (window.subxenabled) {
      console.log('%cSubx Setup', "background-color: ".concat(global.infoBG, ";"));
      let sbxSrc = subXJSSrc;

      if (!global.ConsentManager.consent.measurement) {
        if (window.envMode === "staging" || window.envMode === "development") {
          sbxSrc = subXDoNotTrackJSSrcStaging;
        } else {
          sbxSrc = subXDoNotTrackJSSrc;
        }

        console.warn('Subx DNT enabled');
      } else {
        console.warn('Subx DNT disabled');
      }

      var sbx = document.createElement("script");
      sbx.type = "text/javascript";
      sbx.async = true; // Consent Manager attribute to prevent blocking this script, and any scripts it loads

      sbx.setAttribute("data-cmp-ab", "2");
      sbx.setAttribute("async", "true");
      sbx.setAttribute("data-cmp-vendor", "c73437"); // Switch to DNT script when user consent prevents tracking

      sbx.src = sbxSrc;

      sbx.onerror = function () {
        window.subxfailed = true;
        global.LRBPaywall.checkMeteredPaywall();
        console.error('Failed to load SubX Scripts');
        global.LRBErrorTracking.captureMessage('Failed to load SubX Scripts');
      };

      sbx.onload = function () {
        global.LRBSubx.subxLoaded();
      };

      var b = document.getElementsByTagName("script")[0];
      b.parentNode.insertBefore(sbx, b);
    } else {
      console.log('%cSubx Not Setup', "background-color: ".concat(global.warnBG, ";"));
    }
  }

  subxLoaded() {
    console.log('SubX Scripts loaded');
    setTimeout(() => {
      let subClientData = window.SubxClientEvents;

      if (global.LRBSessionData.subXData.s_pw != (subClientData === null || subClientData === void 0 ? void 0 : subClientData.sxpw)) {
        console.log('SubX data mismatch');

        if (window.envMode != "development") {
          global.LRBPaywall.checkMeteredPaywall();
        }
      } else {
        global.LRBPaywall.clearMeteredPaywallQueue();
        console.log('SubX data match');
      }
    }, 3000);
  }

}

module.exports = {
  LRBSubx
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/scripts/7_overrides/Shame.js":
/*!*********************************************!*\
  !*** ./assets/scripts/7_overrides/Shame.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {class Shame {
  constructor() {}

  setup() {
    console.log('%cShame Setup', "background-color: ".concat(global.warnBG, ";"));

    try {
      this.loadShameJS();
    } catch (error) {
      global.LRBErrorTracking.reportErrorWithFallbackMessage('Failed running Shame.js', error);
    }
  }

  loadShameJS() {
    /* ==========================================================================
     Shame JS Styles
     To avoid the growing codebase becoming littered throughout with quick-fixes, JS can be added to this file as required in the function loadShameJS(), including detailed notes on what the fix was for, with a note and name of who made this fix (in order to quickly follow up in future if required).
     e.g:
     ========================================================================== */

    /**
     * Add a button tracking click
     *
     * Needed to quickly add tracking to a button click
     *
     * author: Bill Murray (bill@whoyougannacall.ghost)
     */
    // $('.slimer').on('click',function(){
    //      global.GA4.trackEvent('Click','Slimer',"slime time");
    // });

    /* ==========================================================================
     Periodically these should be replaced and moved to the correct module, and refactored where necessary.
     Ideally, the loadShameJS() function is empty other than this comment.
     ========================================================================== */
  }

}

module.exports = {
  Shame
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./lrb_modules/magnify/jquery.magnify.js":
/*!***********************************************!*\
  !*** ./lrb_modules/magnify/jquery.magnify.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * jQuery Magnify Plugin v2.3.2 by T. H. Doan (https://thdoan.github.io/magnify/)
 * Based on http://thecodeplayer.com/walkthrough/magnifying-glass-for-images-using-jquery-and-css3
 *
 * jQuery Magnify by T. H. Doan is licensed under the MIT License.
 * Read a copy of the license in the LICENSE file or at https://choosealicense.com/licenses/mit/
 */
(function ($) {
  $.fn.magnify = function (oOptions) {
    // Default options
    oOptions = $.extend({
      'src': '',
      'speed': 100,
      'timeout': -1,
      'touchBottomOffset': 0,
      'finalWidth': null,
      'finalHeight': null,
      'magnifiedWidth': null,
      'magnifiedHeight': null,
      'limitBounds': false,
      'mobileCloseEvent': 'touchstart',
      'afterLoad': function () {}
    }, oOptions);

    var $that = this,
        // Preserve scope
    $html = $('html'),
        // Initiate
    init = function (el) {
      var $image = $(el),
          $anchor = $image.closest('a'),
          oDataAttr = {}; // Get data attributes

      for (var i in oOptions) {
        oDataAttr[i] = $image.attr('data-magnify-' + i.toLowerCase());
      } // Disable zooming if no valid large image source


      var sZoomSrc = oDataAttr['src'] || oOptions['src'] || $anchor.attr('href') || '';
      if (!sZoomSrc) return;

      var $container,
          $lens,
          nImageWidth,
          nImageHeight,
          nMagnifiedWidth,
          nMagnifiedHeight,
          nLensWidth,
          nLensHeight,
          nBoundX = 0,
          nBoundY = 0,
          oContainerOffset,
          // Relative to document
      oImageOffset,
          // Relative to container
      // Get true offsets
      getOffset = function () {
        var o = $container.offset(); // Store offsets from container border to image inside
        // NOTE: .offset() does NOT take into consideration image border and padding.

        oImageOffset = {
          'top': $image.offset().top - o.top + parseInt($image.css('border-top-width')) + parseInt($image.css('padding-top')),
          'left': $image.offset().left - o.left + parseInt($image.css('border-left-width')) + parseInt($image.css('padding-left'))
        };
        o.top += oImageOffset['top'];
        o.left += oImageOffset['left'];
        return o;
      },
          // Hide the lens
      hideLens = function () {
        if ($lens.is(':visible')) $lens.fadeOut(oOptions['speed'], function () {
          $html.removeClass('magnifying').trigger('magnifyend'); // Reset overflow-x
        });
      },
          moveLens = function (e) {
        // Reinitialize if image initially hidden
        if (!nImageHeight) {
          refresh();
          return;
        }

        if (e) {
          e.preventDefault(); // Save last coordinates in case we need to call this function directly (required when
          // updating magnifiedWidth/magnifiedHeight while the lens is visible).

          nPosX = e.pageX || e.originalEvent.touches[0].pageX;
          nPosY = e.pageY || e.originalEvent.touches[0].pageY;
          $image.data('lastPos', {
            'x': nPosX,
            'y': nPosY
          });
        } else {
          nPosX = $image.data('lastPos').x;
          nPosY = $image.data('lastPos').y;
        } // x/y coordinates of the mouse pointer or touch point. This is the position of
        // .magnify relative to the document.
        //
        // We deduct the positions of .magnify from the mouse or touch positions relative to
        // the document to get the mouse or touch positions relative to the container.


        nX = nPosX - oContainerOffset['left'], nY = nPosY - oContainerOffset['top'] - oOptions['touchBottomOffset']; // Toggle magnifying lens

        if (!$lens.is(':animated')) {
          if (nX > nBoundX && nX < nImageWidth - nBoundX && nY > nBoundY && nY < nImageHeight - nBoundY) {
            if ($lens.is(':hidden')) {
              $html.addClass('magnifying').trigger('magnifystart'); // Hide overflow-x while zooming

              $lens.fadeIn(oOptions['speed']);
            }
          } else {
            hideLens();
          }
        }

        if ($lens.is(':visible')) {
          // Move the magnifying lens with the mouse
          var sBgPos = '';

          if (nMagnifiedWidth && nMagnifiedHeight) {
            // Change the background position of .magnify-lens according to the position of
            // the mouse over the .magnify-image image. This allows us to get the ratio of
            // the pixel under the mouse pointer with respect to the image and use that to
            // position the large image inside the magnifying lens.
            var nRatioX = -Math.round(nX / nImageWidth * nMagnifiedWidth - nLensWidth / 2),
                nRatioY = -Math.round(nY / nImageHeight * nMagnifiedHeight - nLensHeight / 2);

            if (oOptions['limitBounds']) {
              // Enforce bounds to ensure only image is visible in lens
              var nBoundRight = -Math.round((nImageWidth - nBoundX) / nImageWidth * nMagnifiedWidth - nLensWidth / 2),
                  nBoundBottom = -Math.round((nImageHeight - nBoundY) / nImageHeight * nMagnifiedHeight - nLensHeight / 2); // Left and right edges

              if (nRatioX > 0) nRatioX = 0;else if (nRatioX < nBoundRight) nRatioX = nBoundRight; // Top and bottom edges

              if (nRatioY > 0) nRatioY = 0;else if (nRatioY < nBoundBottom) nRatioY = nBoundBottom;
            }

            sBgPos = nRatioX + 'px ' + nRatioY + 'px';
          } // Now the lens moves with the mouse. The logic is to deduct half of the lens's
          // width and height from the mouse coordinates to place it with its center at the
          // mouse coordinates. If you hover on the image now, you should see the magnifying
          // lens in action.


          $lens.css({
            'top': Math.round(nY - nLensHeight / 2) + oImageOffset['top'] + 'px',
            'left': Math.round(nX - nLensWidth / 2) + oImageOffset['left'] + 'px',
            'background-position': sBgPos
          });
        }
      }; // Data attributes have precedence over options object


      if (!isNaN(+oDataAttr['speed'])) oOptions['speed'] = +oDataAttr['speed'];
      if (!isNaN(+oDataAttr['timeout'])) oOptions['timeout'] = +oDataAttr['timeout'];
      if (!isNaN(+oDataAttr['finalWidth'])) oOptions['finalWidth'] = +oDataAttr['finalWidth'];
      if (!isNaN(+oDataAttr['finalHeight'])) oOptions['finalHeight'] = +oDataAttr['finalHeight'];
      if (!isNaN(+oDataAttr['magnifiedWidth'])) oOptions['magnifiedWidth'] = +oDataAttr['magnifiedWidth'];
      if (!isNaN(+oDataAttr['magnifiedHeight'])) oOptions['magnifiedHeight'] = +oDataAttr['magnifiedHeight'];
      if (oDataAttr['limitBounds'] === 'true') oOptions['limitBounds'] = true;
      if (typeof window[oDataAttr['afterLoad']] === 'function') oOptions.afterLoad = window[oDataAttr['afterLoad']]; // Implement touch point bottom offset only on mobile devices

      if (/\b(Android|BlackBerry|IEMobile|iPad|iPhone|Mobile|Opera Mini)\b/.test(navigator.userAgent)) {
        if (!isNaN(+oDataAttr['touchBottomOffset'])) oOptions['touchBottomOffset'] = +oDataAttr['touchBottomOffset'];
      } else {
        oOptions['touchBottomOffset'] = 0;
      } // Save any inline styles for resetting


      $image.data('originalStyle', $image.attr('style')); // Activate magnification:
      // 1. Try to get large image dimensions
      // 2. Proceed only if able to get large image dimensions OK
      // [1] Calculate the native (magnified) image dimensions. The zoomed version is only shown
      // after the native dimensions are available. To get the actual dimensions we have to create
      // this image object.

      var elZoomImage = new Image();
      $(elZoomImage).on({
        'load': function () {
          // [2] Got image dimensions OK.
          var nPosX, nPosY, nX, nY; // Fix overlap bug at the edges during magnification

          $image.css('display', 'block'); // Create container div if necessary

          if (!$image.parent('.magnify').length) {
            $image.wrap('<div class="magnify"></div>');
          }

          $container = $image.parent('.magnify'); // Create the magnifying lens div if necessary

          if ($image.prev('.magnify-lens').length) {
            $container.children('.magnify-lens').css('background-image', 'url(\'' + sZoomSrc + '\')');
          } else {
            $image.before('<div class="magnify-lens loading" style="background:url(\'' + sZoomSrc + '\') 0 0 no-repeat"></div>');
          }

          $lens = $container.children('.magnify-lens'); // Remove the "Loading..." text

          $lens.removeClass('loading'); // Cache dimensions and offsets for improved performance
          // NOTE: This code is inside the load() function, which is important. The width and
          // height of the object would return 0 if accessed before the image is fully loaded.

          nImageWidth = oOptions['finalWidth'] || $image.width();
          nImageHeight = oOptions['finalHeight'] || $image.height();
          nMagnifiedWidth = oOptions['magnifiedWidth'] || elZoomImage.width;
          nMagnifiedHeight = oOptions['magnifiedHeight'] || elZoomImage.height;
          nLensWidth = $lens.width();
          nLensHeight = $lens.height();
          oContainerOffset = getOffset(); // Required by refresh()
          // Set zoom boundaries

          if (oOptions['limitBounds']) {
            nBoundX = nLensWidth / 2 / (nMagnifiedWidth / nImageWidth);
            nBoundY = nLensHeight / 2 / (nMagnifiedHeight / nImageHeight);
          } // Enforce non-native large image size?


          if (nMagnifiedWidth !== elZoomImage.width || nMagnifiedHeight !== elZoomImage.height) {
            $lens.css('background-size', nMagnifiedWidth + 'px ' + nMagnifiedHeight + 'px');
          } // Store zoom dimensions for mobile plugin


          $image.data('zoomSize', {
            'width': nMagnifiedWidth,
            'height': nMagnifiedHeight
          }); // Store mobile close event for mobile plugin

          $container.data('mobileCloseEvent', oDataAttr['mobileCloseEvent'] || oOptions['mobileCloseEvent']); // Clean up

          elZoomImage = null; // Execute callback

          oOptions.afterLoad(); // Simulate a lens move to update positioning if magnifiedWidth/magnifiedHeight is
          // updated while the lens is visible

          if ($lens.is(':visible')) moveLens(); // Handle mouse movements

          $container.off().on({
            'mousemove touchmove': moveLens,
            'mouseenter': function () {
              // Need to update offsets here to support accordions
              oContainerOffset = getOffset();
            },
            'mouseleave': hideLens
          }); // Prevent magnifying lens from getting "stuck"

          if (oOptions['timeout'] >= 0) {
            $container.on('touchend', function () {
              setTimeout(hideLens, oOptions['timeout']);
            });
          } // Ensure lens is closed when tapping outside of it


          $('body').not($container).on('touchstart', hideLens); // Support image map click-throughs while zooming

          var sUsemap = $image.attr('usemap');

          if (sUsemap) {
            var $map = $('map[name=' + sUsemap.slice(1) + ']'); // Image map needs to be on the same DOM level as image source

            $image.after($map);
            $container.click(function (e) {
              // Trigger click on image below lens at current cursor position
              if (e.clientX || e.clientY) {
                $lens.hide();
                var elPoint = document.elementFromPoint(e.clientX || e.originalEvent.touches[0].clientX, e.clientY || e.originalEvent.touches[0].clientY);

                if (elPoint.nodeName === 'AREA') {
                  elPoint.click();
                } else {
                  // Workaround for buggy implementation of elementFromPoint()
                  // See https://bugzilla.mozilla.org/show_bug.cgi?id=1227469
                  $('area', $map).each(function () {
                    var a = $(this).attr('coords').split(',');

                    if (nX >= a[0] && nX <= a[2] && nY >= a[1] && nY <= a[3]) {
                      this.click();
                      return false;
                    }
                  });
                }
              }
            });
          }

          if ($anchor.length) {
            // Make parent anchor inline-block to have correct dimensions
            $anchor.css('display', 'inline-block'); // Disable parent anchor if it's sourcing the large image

            if ($anchor.attr('href') && !(oDataAttr['src'] || oOptions['src'])) {
              $anchor.click(function (e) {
                e.preventDefault();
              });
            }
          }
        },
        'error': function () {
          // Clean up
          elZoomImage = null;
        }
      });
      elZoomImage.src = sZoomSrc;
    },
        // END init()
    // Simple debounce
    nTimer = 0,
        refresh = function () {
      clearTimeout(nTimer);
      nTimer = setTimeout(function () {
        $that.destroy();
        $that.magnify(oOptions);
      }, 100);
    };
    /**
     * Public Methods
     */
    // Turn off zoom and reset to original state


    this.destroy = function () {
      this.each(function () {
        var $this = $(this),
            $lens = $this.prev('div.magnify-lens'),
            sStyle = $this.data('originalStyle');

        if ($this.parent('div.magnify').length && $lens.length) {
          if (sStyle) $this.attr('style', sStyle);else $this.removeAttr('style');
          $this.unwrap();
          $lens.remove();
        }
      }); // Unregister event handler

      $(window).off('resize', refresh);
      return $that;
    }; // Handle window resizing


    $(window).resize(refresh);
    return this.each(function () {
      // Initiate magnification powers
      init(this);
    });
  };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

/******/ });
//# sourceMappingURL=main.js.map