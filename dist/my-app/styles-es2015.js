(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* Global Styles */\n\n* {\n    font-family: 'Roboto', Arial, sans-serif;\n    color: #616161;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\nbody {\n    margin: 0;\n  }\n\n.container {\n    display: flex;\n    flex-direction: row;\n  }\n\nrouter-outlet + *  {\n    padding: 0 16px;\n  }\n\n/* Text */\n\nh1 {\n    font-size: 32px;\n  }\n\nh2 {\n    font-size: 20px;\n  }\n\nh1, h2 {\n    font-weight: lighter;\n  }\n\np {\n    font-size: 14px;\n  }\n\n/* Hyperlink */\n\na {\n    cursor: pointer;\n    color: #1976d2;\n    text-decoration: none;\n  }\n\na:hover {\n    opacity: 0.8;\n  }\n\n/* Input */\n\ninput {\n    font-size: 14px;\n    border-radius: 2px;\n    padding: 8px;\n    margin-bottom: 16px;\n    border: 1px solid #BDBDBD;\n  }\n\nlabel {\n    font-size: 12px;\n    font-weight: bold;\n    margin-bottom: 4px;\n    display: block;\n    text-transform: uppercase;\n  }\n\n/* Button */\n\n.button, button {\n    display: inline-flex;\n    align-items: center;\n    padding: 8px 16px;\n    border-radius: 2px;\n    font-size: 14px;\n    cursor: pointer;\n    background-color: #1976d2;\n    color: white;\n    border: none;\n  }\n\n.button:hover, button:hover {\n    opacity: 0.8;\n    font-weight: normal;\n  }\n\n.button:disabled, button:disabled {\n    opacity: 0.5;\n    cursor: auto;\n  }\n\n/* Fancy Button */\n\n.fancy-button {\n    background-color: white;\n    color: #1976d2;\n  }\n\n.fancy-button i.material-icons {\n    color: #1976d2;\n    padding-right: 4px;\n  }\n\n/* Top Bar */\n\napp-top-bar {\n    width: 100%;\n    height: 68px;\n    background-color: #1976d2;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\napp-top-bar h1 {\n    color: white;\n    margin: 0;\n  }\n\n/* Checkout Cart, Shipping Prices */\n\n.cart-item, .shipping-item {\n    width: 100%;\n    min-width: 400px;\n    max-width: 450px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 16px 32px;\n    margin-bottom: 8px;\n    border-radius: 2px;\n    background-color: #EEEEEE;\n  }\n\n/*\n  Copyright Google LLC. All Rights Reserved.\n  Use of this source code is governed by an MIT-style license that\n  can be found in the LICENSE file at http://angular.io/license\n  */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjs7QUFFbEI7SUFDSSx3Q0FBd0M7SUFDeEMsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsa0NBQWtDO0VBQ3BDOztBQUVBO0lBQ0UsU0FBUztFQUNYOztBQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGVBQWU7RUFDakI7O0FBRUEsU0FBUzs7QUFFVDtJQUNFLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFQSxjQUFjOztBQUVkO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUEsVUFBVTs7QUFFVjtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QseUJBQXlCO0VBQzNCOztBQUVBLFdBQVc7O0FBQ1g7SUFDRSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7RUFDZDs7QUFFQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDRSx1QkFBdUI7SUFDdkIsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7O0FBRUEsWUFBWTs7QUFFWjtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osU0FBUztFQUNYOztBQUVBLG1DQUFtQzs7QUFFbkM7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7RUFDM0I7O0FBR0E7Ozs7R0FJQyIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCBTdHlsZXMgKi9cblxuKiB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzYxNjE2MTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIH1cbiAgXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIFxuICByb3V0ZXItb3V0bGV0ICsgKiAge1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgfVxuICBcbiAgLyogVGV4dCAqL1xuICBcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuICBcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICBcbiAgaDEsIGgyIHtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgfVxuICBcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIFxuICAvKiBIeXBlcmxpbmsgKi9cbiAgXG4gIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzE5NzZkMjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIGE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICBcbiAgLyogSW5wdXQgKi9cbiAgXG4gIGlucHV0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCREJEQkQ7XG4gIH1cbiAgXG4gIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgXG4gIC8qIEJ1dHRvbiAqL1xuICAuYnV0dG9uLCBidXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIFxuICAuYnV0dG9uOmhvdmVyLCBidXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG4gIFxuICAuYnV0dG9uOmRpc2FibGVkLCBidXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjdXJzb3I6IGF1dG87XG4gIH1cbiAgXG4gIC8qIEZhbmN5IEJ1dHRvbiAqL1xuICBcbiAgLmZhbmN5LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICMxOTc2ZDI7XG4gIH1cbiAgXG4gIC5mYW5jeS1idXR0b24gaS5tYXRlcmlhbC1pY29ucyB7XG4gICAgY29sb3I6ICMxOTc2ZDI7XG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xuICB9XG4gIFxuICAvKiBUb3AgQmFyICovXG4gIFxuICBhcHAtdG9wLWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2OHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIGFwcC10b3AtYmFyIGgxIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAvKiBDaGVja291dCBDYXJ0LCBTaGlwcGluZyBQcmljZXMgKi9cbiAgXG4gIC5jYXJ0LWl0ZW0sIC5zaGlwcGluZy1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuICB9XG4gIFxuICBcbiAgLypcbiAgQ29weXJpZ2h0IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcbiAgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAqLyJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\fjoboy\Documents\Repositories\ang-test\my-app\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map