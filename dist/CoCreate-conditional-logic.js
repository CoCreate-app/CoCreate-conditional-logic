(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["conditionalLogic"] = factory();
	else
		root["CoCreate"] = root["CoCreate"] || {}, root["CoCreate"]["conditionalLogic"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-conditional-logic/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-conditional-logic/src/index.js":
/*!**********************************************************************!*\
  !*** ../CoCreate-components/CoCreate-conditional-logic/src/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\n/*!\n * https://cocreate.app\n * https://github.com/CoCreate-app/Conditional_Logic\n * Released under the MIT license\n * https://github.com/CoCreate-app/Conditional_Logic/blob/master/LICENSE\n */\ninitShowHideEles();\ndocument.addEventListener('fetchedTemplate', () => {\n  initShowHideEles();\n}); //. cocreate init section\n\nfunction initShowHideEles(container) {\n  let mainContainer = container || document;\n\n  if (!mainContainer.querySelectorAll) {\n    return;\n  }\n\n  let elements = mainContainer.querySelectorAll(`[data-show],[data-hide]`);\n\n  if (elements.length === 0 && mainContainer != document && (mainContainer.hasAttribute(`[data-show]`) || mainContainer.hasAttributes(\"[data-hide\"))) {\n    elements = [mainContainer];\n  }\n\n  for (let el of elements) {\n    if (CoCreate.observer.getInitialized(el, \"conditional-logic\")) {\n      return;\n    }\n\n    CoCreate.observer.setInitialized(el, \"conditional-logic\");\n    if (el.tagName.toLowerCase() == \"option\") el = el.closest('select');\n    el.removeEventListener('change', selectShowHideEle);\n    el.removeEventListener(\"click\", clickShowHideEle);\n    el.addEventListener(\"change\", selectShowHideEle);\n    el.addEventListener(\"click\", clickShowHideEle);\n  }\n} // CoCreateInit.register('CoCreateConditionalLogic', window, window.initShowHideEles);\n\n\nCoCreate.observer.init({\n  name: 'CoCreateConditionalLogic',\n  observe: ['subtree', 'childList'],\n  include: '[data-show],[data-hide]',\n  callback: function (mutation) {\n    initShowHideEles(mutation.target);\n  }\n}); //. upgrade by jin (using document event)\n// function initShowHideEles() {\n// \tconst selector = \"[data-show],[data-hide]\";\n// \tdocument.removeEventListener(\"change\", function(event) {\n// \t\tconst target = event.target.closest(selector);\n// \t\tif (target) {\n// \t\t\tselectShowHideEle(event)\n// \t\t}\n// \t});\n// \tdocument.removeEventListener(\"click\", function(event) {\n// \t\tconst target = event.target.closest(selector);\n// \t\tif (target) {\n// \t\t\tclickShowHideEle(event)\n// \t\t}\n// \t});\n// \tdocument.addEventListener(\"change\", function(event) {\n// \t\tconst target = event.target.closest(selector);\n// \t\tif (target) {\n// \t\t\tselectShowHideEle(event)\n// \t\t}\n// \t});\n// \t\tdocument.addEventListener(\"click\", function(event) {\n// \t\tconst target = event.target.closest(selector);\n// \t\tif (target) {\n// \t\t\tclickShowHideEle(event)\n// \t\t}\n// \t});\n// }\n\nfunction selectShowHideEle(e) {\n  console.log(this, 'select');\n  e.preventDefault();\n  var select = this;\n  if (typeof select.options != 'undefined') for (var i = 0, len = select.options.length; i < len; i++) {\n    var opt = select.options[i];\n    var value = opt.value;\n\n    if (value != '') {\n      var show = opt.dataset.show; // var show_class = opt.dataset.showClass\n\n      if (typeof show != 'undefined') {\n        for (let el of document.querySelectorAll(show)) el.classList.add('hidden');\n\n        if (opt.selected === true) {\n          for (let el of document.querySelectorAll(show)) el.classList.remove('hidden');\n        }\n      }\n    } //end value is not empty\n\n  } //end for\n}\n\nfunction clickShowHideEle(e) {\n  console.log(this, 'click');\n  var show = this.dataset.show;\n  var hide = this.dataset.hide;\n  let tagName = this.tagName.toLowerCase();\n\n  if (tagName == 'input' && this.getAttribute(\"type\").toLowerCase() == 'radio') {\n    let name = this.getAttribute(\"name\");\n    let radios = document.querySelectorAll(tagName + '[name=\"' + name + '\"]');\n\n    for (let radio of radios) {\n      show = radio.dataset.show;\n\n      for (let el of document.querySelectorAll(show)) {\n        el.classList.add('hidden');\n      }\n\n      if (radio.checked) {\n        for (let el of document.querySelectorAll(show)) el.classList.remove('hidden');\n      }\n    }\n  } else {\n    let updated_els = [];\n\n    for (let el of document.querySelectorAll(show)) {\n      if (el.classList.contains('hidden')) {\n        el.classList.remove('hidden');\n        updated_els.push(el);\n      }\n    }\n\n    for (let el of document.querySelectorAll(hide)) {\n      let existEqual = false;\n\n      for (let uel of updated_els) {\n        if (el.isEqualNode(uel)) {\n          existEqual = true;\n          break;\n        }\n      }\n\n      if (!existEqual) el.classList.add('hidden');\n    }\n  }\n}\n\nconst CoCreateConditionalLogic = {\n  initShowHideEles,\n  selectShowHideEle,\n  clickShowHideEle\n};\nvar _default = CoCreateConditionalLogic;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5jb25kaXRpb25hbExvZ2ljLy4uL0NvQ3JlYXRlLWNvbXBvbmVudHMvQ29DcmVhdGUtY29uZGl0aW9uYWwtbG9naWMvc3JjL2luZGV4LmpzPzZiMzYiXSwibmFtZXMiOlsiaW5pdFNob3dIaWRlRWxlcyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5lciIsIm1haW5Db250YWluZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudHMiLCJsZW5ndGgiLCJoYXNBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGVzIiwiZWwiLCJDb0NyZWF0ZSIsIm9ic2VydmVyIiwiZ2V0SW5pdGlhbGl6ZWQiLCJzZXRJbml0aWFsaXplZCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImNsb3Nlc3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VsZWN0U2hvd0hpZGVFbGUiLCJjbGlja1Nob3dIaWRlRWxlIiwiaW5pdCIsIm5hbWUiLCJvYnNlcnZlIiwiaW5jbHVkZSIsImNhbGxiYWNrIiwibXV0YXRpb24iLCJ0YXJnZXQiLCJlIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0Iiwib3B0aW9ucyIsImkiLCJsZW4iLCJvcHQiLCJ2YWx1ZSIsInNob3ciLCJkYXRhc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwic2VsZWN0ZWQiLCJyZW1vdmUiLCJoaWRlIiwiZ2V0QXR0cmlidXRlIiwicmFkaW9zIiwicmFkaW8iLCJjaGVja2VkIiwidXBkYXRlZF9lbHMiLCJjb250YWlucyIsInB1c2giLCJleGlzdEVxdWFsIiwidWVsIiwiaXNFcXVhbE5vZGUiLCJDb0NyZWF0ZUNvbmRpdGlvbmFsTG9naWMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsZ0JBQWdCO0FBRWhCQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGlCQUExQixFQUE2QyxNQUFNO0FBQ2xE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ZUFDZW1DLHdCIiwiZmlsZSI6Ii4uL0NvQ3JlYXRlLWNvbXBvbmVudHMvQ29DcmVhdGUtY29uZGl0aW9uYWwtbG9naWMvc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBodHRwczovL2NvY3JlYXRlLmFwcFxuICogaHR0cHM6Ly9naXRodWIuY29tL0NvQ3JlYXRlLWFwcC9Db25kaXRpb25hbF9Mb2dpY1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vQ29DcmVhdGUtYXBwL0NvbmRpdGlvbmFsX0xvZ2ljL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbml0U2hvd0hpZGVFbGVzKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoZWRUZW1wbGF0ZScsICgpID0+IHtcblx0aW5pdFNob3dIaWRlRWxlcygpO1xufSlcblxuLy8uIGNvY3JlYXRlIGluaXQgc2VjdGlvblxuZnVuY3Rpb24gaW5pdFNob3dIaWRlRWxlcyhjb250YWluZXIpIHtcblx0bGV0IG1haW5Db250YWluZXIgPSBjb250YWluZXIgfHwgZG9jdW1lbnQ7XG5cdGlmICghbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGxldCBlbGVtZW50cyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtc2hvd10sW2RhdGEtaGlkZV1gKTtcblx0aWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCAmJiBtYWluQ29udGFpbmVyICE9IGRvY3VtZW50ICYmIFxuXHRcdChtYWluQ29udGFpbmVyLmhhc0F0dHJpYnV0ZShgW2RhdGEtc2hvd11gKSB8fCBtYWluQ29udGFpbmVyLmhhc0F0dHJpYnV0ZXMoXCJbZGF0YS1oaWRlXCIpKSkge1xuXHRcdGVsZW1lbnRzID0gW21haW5Db250YWluZXJdO1xuXHR9XG5cdGZvciAobGV0IGVsIG9mIGVsZW1lbnRzKSB7XG5cdFx0aWYgKENvQ3JlYXRlLm9ic2VydmVyLmdldEluaXRpYWxpemVkKGVsLCBcImNvbmRpdGlvbmFsLWxvZ2ljXCIpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdENvQ3JlYXRlLm9ic2VydmVyLnNldEluaXRpYWxpemVkKGVsLCBcImNvbmRpdGlvbmFsLWxvZ2ljXCIpXG5cdFx0XG5cdFx0aWYoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09IFwib3B0aW9uXCIpXG5cdFx0XHRlbCA9IGVsLmNsb3Nlc3QoJ3NlbGVjdCcpO1xuXHRcdFxuXHRcdGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNlbGVjdFNob3dIaWRlRWxlKTtcblx0XHRlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tTaG93SGlkZUVsZSk7XG5cdFx0XG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBzZWxlY3RTaG93SGlkZUVsZSk7XG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrU2hvd0hpZGVFbGUpO1x0XG5cdH1cdFxufVxuLy8gQ29DcmVhdGVJbml0LnJlZ2lzdGVyKCdDb0NyZWF0ZUNvbmRpdGlvbmFsTG9naWMnLCB3aW5kb3csIHdpbmRvdy5pbml0U2hvd0hpZGVFbGVzKTtcblxuQ29DcmVhdGUub2JzZXJ2ZXIuaW5pdCh7IFxuXHRuYW1lOiAnQ29DcmVhdGVDb25kaXRpb25hbExvZ2ljJywgXG5cdG9ic2VydmU6IFsnc3VidHJlZScsICdjaGlsZExpc3QnXSxcblx0aW5jbHVkZTogJ1tkYXRhLXNob3ddLFtkYXRhLWhpZGVdJyxcblx0Y2FsbGJhY2s6IGZ1bmN0aW9uKG11dGF0aW9uKSB7XG5cdFx0aW5pdFNob3dIaWRlRWxlcyhtdXRhdGlvbi50YXJnZXQpXG5cdH1cbn0pXG5cbi8vLiB1cGdyYWRlIGJ5IGppbiAodXNpbmcgZG9jdW1lbnQgZXZlbnQpXG4vLyBmdW5jdGlvbiBpbml0U2hvd0hpZGVFbGVzKCkge1xuXHRcbi8vIFx0Y29uc3Qgc2VsZWN0b3IgPSBcIltkYXRhLXNob3ddLFtkYXRhLWhpZGVdXCI7XG4vLyBcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbi8vIFx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdChzZWxlY3Rvcik7XG4vLyBcdFx0aWYgKHRhcmdldCkge1xuLy8gXHRcdFx0c2VsZWN0U2hvd0hpZGVFbGUoZXZlbnQpXG4vLyBcdFx0fVxuLy8gXHR9KTtcblx0XG4vLyBcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xuLy8gXHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KHNlbGVjdG9yKTtcbi8vIFx0XHRpZiAodGFyZ2V0KSB7XG4vLyBcdFx0XHRjbGlja1Nob3dIaWRlRWxlKGV2ZW50KVxuLy8gXHRcdH1cbi8vIFx0fSk7XG5cdFxuLy8gXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4vLyBcdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuLy8gXHRcdGlmICh0YXJnZXQpIHtcbi8vIFx0XHRcdHNlbGVjdFNob3dIaWRlRWxlKGV2ZW50KVxuLy8gXHRcdH1cbi8vIFx0fSk7XG5cdFxuLy8gXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xuLy8gXHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KHNlbGVjdG9yKTtcbi8vIFx0XHRpZiAodGFyZ2V0KSB7XG4vLyBcdFx0XHRjbGlja1Nob3dIaWRlRWxlKGV2ZW50KVxuLy8gXHRcdH1cbi8vIFx0fSk7XG4vLyB9XG5cbmZ1bmN0aW9uIHNlbGVjdFNob3dIaWRlRWxlKGUpIHtcblx0Y29uc29sZS5sb2codGhpcywgJ3NlbGVjdCcpO1xuXHRlLnByZXZlbnREZWZhdWx0KClcblx0dmFyIHNlbGVjdCA9IHRoaXM7XG5cdGlmICh0eXBlb2Ygc2VsZWN0Lm9wdGlvbnMgIT0gJ3VuZGVmaW5lZCcpXG4gIFx0Zm9yICggdmFyIGkgPSAwLCBsZW4gPSBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgXHRcdHZhciBvcHQgPSBzZWxlY3Qub3B0aW9uc1tpXTtcbiAgICAgIHZhciB2YWx1ZSA9IG9wdC52YWx1ZVxuICAgICAgaWYgKHZhbHVlICE9ICcnKXtcbiAgICAgICAgdmFyIHNob3cgPSBvcHQuZGF0YXNldC5zaG93XG4gICAgICAgLy8gdmFyIHNob3dfY2xhc3MgPSBvcHQuZGF0YXNldC5zaG93Q2xhc3NcbiAgICAgICAgaWYodHlwZW9mIHNob3chPSd1bmRlZmluZWQnKXtcbiAgICAgICAgXHRmb3IgKGxldCBlbCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNob3cpKSBcbiAgICAgICAgXHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBcdGlmICggb3B0LnNlbGVjdGVkID09PSB0cnVlICkge1xuXHQgICAgICAgIFx0Zm9yIChsZXQgZWwgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzaG93KSlcbiAgICAgICAgXHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdCAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9Ly9lbmQgdmFsdWUgaXMgbm90IGVtcHR5XG4gIH0vL2VuZCBmb3Jcbn1cblxuZnVuY3Rpb24gY2xpY2tTaG93SGlkZUVsZShlKSB7XG5cdGNvbnNvbGUubG9nKHRoaXMsICdjbGljaycpO1xuXHR2YXIgc2hvdyA9IHRoaXMuZGF0YXNldC5zaG93O1xuXHR2YXIgaGlkZSA9IHRoaXMuZGF0YXNldC5oaWRlO1xuXHRsZXQgdGFnTmFtZSA9IHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcblx0aWYodGFnTmFtZSA9PSdpbnB1dCcgJiYgdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpLnRvTG93ZXJDYXNlKCk9PSdyYWRpbycpIHtcblx0XHRsZXQgbmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwibmFtZVwiKVxuXHRcdGxldCByYWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhZ05hbWUrJ1tuYW1lPVwiJytuYW1lKydcIl0nKTtcblx0XHRmb3IgKGxldCByYWRpbyBvZiByYWRpb3MpIHtcblx0XHRcdFxuXHRcdFx0c2hvdyA9IHJhZGlvLmRhdGFzZXQuc2hvdztcblx0XHRcdFxuXHRcdFx0Zm9yIChsZXQgZWwgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzaG93KSkge1xuXHRcdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRpZihyYWRpby5jaGVja2VkKXtcblx0XHRcdFx0Zm9yIChsZXQgZWwgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzaG93KSkgXG5cdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHR9IGVsc2Uge1xuXHRcdFxuXHRcdGxldCB1cGRhdGVkX2VscyA9IFtdO1xuXHRcdFxuXHRcdGZvciAobGV0IGVsIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2hvdykpIHtcblx0XHRcdGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpe1xuXHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0XHRcdFx0dXBkYXRlZF9lbHMucHVzaChlbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGZvciAobGV0IGVsIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaGlkZSkpIHtcblx0XHRcdGxldCBleGlzdEVxdWFsID0gZmFsc2U7XG5cdFx0XHRmb3IobGV0IHVlbCBvZiB1cGRhdGVkX2Vscyl7XG5cdFx0XHRcdGlmKGVsLmlzRXF1YWxOb2RlKHVlbCkpe1xuXHRcdFx0XHRcdGV4aXN0RXF1YWwgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XHRcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoIWV4aXN0RXF1YWwpIGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdH1cblx0fVxufVxuXG5jb25zdCBDb0NyZWF0ZUNvbmRpdGlvbmFsTG9naWMgPSB7IGluaXRTaG93SGlkZUVsZXMsIHNlbGVjdFNob3dIaWRlRWxlLCBjbGlja1Nob3dIaWRlRWxlIH07XG5leHBvcnQgZGVmYXVsdCBDb0NyZWF0ZUNvbmRpdGlvbmFsTG9naWM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-conditional-logic/src/index.js\n");

/***/ })

/******/ })["default"];
});