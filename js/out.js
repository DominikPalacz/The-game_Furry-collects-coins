/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Furry = __webpack_require__(/*! ./furry.js */ \"./js/furry.js\");\nvar Coin = __webpack_require__(/*! ./coin.js */ \"./js/coin.js\");\nvar Game = __webpack_require__(/*! ./game.js */ \"./js/game.js\");\nvar game = __webpack_require__(/*! ./game */ \"./js/game.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/NzQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRnVycnkgPSByZXF1aXJlKCcuL2Z1cnJ5LmpzJyk7XG52YXIgQ29pbiA9IHJlcXVpcmUoJy4vY29pbi5qcycpO1xudmFyIEdhbWUgPSByZXF1aXJlKCcuL2dhbWUuanMnKTtcbnZhciBnYW1lID0gcmVxdWlyZSgnLi9nYW1lJyk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/app.js\n");

/***/ }),

/***/ "./js/coin.js":
/*!********************!*\
  !*** ./js/coin.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Coin () {\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n};\n\nmodule.exports = Coin;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9jb2luLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvY29pbi5qcz8yOTAyIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIENvaW4gKCkge1xuICAgIHRoaXMueCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB0aGlzLnkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvaW47Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/coin.js\n");

/***/ }),

/***/ "./js/furry.js":
/*!*********************!*\
  !*** ./js/furry.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Furry = function () {\n    this.x = 0;\n    this.y = 0;\n    this.direction = \"right\";\n};\n\nmodule.exports = Furry;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9mdXJyeS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2Z1cnJ5LmpzPzZiMmMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEZ1cnJ5ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRnVycnk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/furry.js\n");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Furry = __webpack_require__(/*! ./furry */ \"./js/furry.js\");\nvar Coin = __webpack_require__(/*! ./coin */ \"./js/coin.js\");\n//var game = require('./app');\n\nfunction Game () {\n\n    var board = document.getElementById('board');\n    var counter = 0;\n    var self = this;\n    var idSetInterval;\n\n    this.board = board.getElementsByTagName('div');\n    this.furry = new Furry();\n    this.coin = new Coin();\n    this.score = 0;\n\n    this.index = function (x, y) {\n\n        return x + (y * 10);\n\n    };\n\n    this.showFurry = function () {\n\n        self.hideVisibleFurry();\n        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');\n\n    };\n\n    this.hideVisibleFurry = function () {\n\n        var elDivFurry = document.querySelector('.furry');\n        elDivFurry !== null ? elDivFurry.removeAttribute('class') : null;\n\n    };\n\n    this.showCoin = function () {\n\n        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin')\n\n    };\n\n    this.moveFurry = function () {\n\n        this.gameOver();\n\n        if (this.furry.direction === \"right\") {\n            this.furry.x = this.furry.x + 1;\n            this.showFurry()\n        } else if (this.furry.direction === \"left\") {\n            this.furry.x = this.furry.x - 1;\n            this.showFurry()\n        } else if (this.furry.direction === \"up\") {\n            this.furry.y = this.furry.y - 1;\n            this.showFurry()\n        } else if (this.furry.direction === \"down\") {\n            this.furry.y = this.furry.y + 1;\n            this.showFurry()\n        }\n\n        this.checkCoinCollision();\n\n    };\n\n    this.turnFurry = document.addEventListener('keydown', function (event) {\n\n        switch (event.which) {\n            case 37:\n                self.furry.direction = 'left';\n                break;\n            case 38:\n                self.furry.direction = 'up';\n                break;\n            case 39:\n                self.furry.direction = 'right';\n                break;\n            case 40:\n                self.furry.direction = 'down';\n                break;\n            default:\n                console.log('Inny klawisz: ' + event.which)\n        }\n\n    });\n\n    this.checkCoinCollision = function () {\n\n        // console.warn('coin.x : ' + this.coin.x);\n        // console.log('furry.x :' + this.furry.x);\n        // console.warn('coin.y : ' + this.coin.y);\n        // console.log('furry.y :' + this.furry.y);\n\n        if ((this.coin.x == this.furry.x) && (this.coin.y == this.furry.y)) {\n\n            //console.error('TADAMMMMMMMMMM')\n            var coin = document.querySelector('.coin');\n            coin.removeAttribute('class');\n            counter++; //console.log(counter);\n            var score = document.getElementById('score');\n            console.log(score);\n            var divNr = score.querySelector('div');\n            console.warn(divNr);\n            var nr = divNr.querySelector('strong');\n            console.error(nr);\n            nr.innerHTML = counter;\n            var newCoin = new Coin();\n            this.coin = newCoin;\n            game.showCoin();\n\n        }\n    };\n\n    this.gameOver = function () {\n\n        if ((this.furry.x < 0) || (this.furry.x > 9) || (this.furry.y < 0) || (this.furry.y > 9)) {\n\n            console.log('kolizja z ścianą');\n            self.hideVisibleFurry(); // console.log(self.hideVisibleFurry)\n            clearInterval(idSetInterval);\n            hideVisibleFurry(); // console.log(hideVisibleFurry)\n\n        }\n    };\n\n    this.startGame = function () {\n\n        idSetInterval = setInterval(function () {\n\n            self.moveFurry();\n\n        }, 250)\n\n    };\n\n};\n\nvar game = new Game();\ngame.showFurry();\ngame.showCoin();\ngame.startGame();\n\nmodule.exports = game;\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9nYW1lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvZ2FtZS5qcz9lNjU3Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBGdXJyeSA9IHJlcXVpcmUoJy4vZnVycnknKTtcbnZhciBDb2luID0gcmVxdWlyZSgnLi9jb2luJyk7XG4vL3ZhciBnYW1lID0gcmVxdWlyZSgnLi9hcHAnKTtcblxuZnVuY3Rpb24gR2FtZSAoKSB7XG5cbiAgICB2YXIgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKTtcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBpZFNldEludGVydmFsO1xuXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkaXYnKTtcbiAgICB0aGlzLmZ1cnJ5ID0gbmV3IEZ1cnJ5KCk7XG4gICAgdGhpcy5jb2luID0gbmV3IENvaW4oKTtcbiAgICB0aGlzLnNjb3JlID0gMDtcblxuICAgIHRoaXMuaW5kZXggPSBmdW5jdGlvbiAoeCwgeSkge1xuXG4gICAgICAgIHJldHVybiB4ICsgKHkgKiAxMCk7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5zaG93RnVycnkgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgc2VsZi5oaWRlVmlzaWJsZUZ1cnJ5KCk7XG4gICAgICAgIHRoaXMuYm9hcmRbdGhpcy5pbmRleCh0aGlzLmZ1cnJ5LngsIHRoaXMuZnVycnkueSldLmNsYXNzTGlzdC5hZGQoJ2Z1cnJ5Jyk7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5oaWRlVmlzaWJsZUZ1cnJ5ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBlbERpdkZ1cnJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZ1cnJ5Jyk7XG4gICAgICAgIGVsRGl2RnVycnkgIT09IG51bGwgPyBlbERpdkZ1cnJ5LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKSA6IG51bGw7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5zaG93Q29pbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLmJvYXJkW3RoaXMuaW5kZXgodGhpcy5jb2luLngsIHRoaXMuY29pbi55KV0uY2xhc3NMaXN0LmFkZCgnY29pbicpXG5cbiAgICB9O1xuXG4gICAgdGhpcy5tb3ZlRnVycnkgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuXG4gICAgICAgIGlmICh0aGlzLmZ1cnJ5LmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICB0aGlzLmZ1cnJ5LnggPSB0aGlzLmZ1cnJ5LnggKyAxO1xuICAgICAgICAgICAgdGhpcy5zaG93RnVycnkoKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZnVycnkuZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICAgICAgdGhpcy5mdXJyeS54ID0gdGhpcy5mdXJyeS54IC0gMTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Z1cnJ5KClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZ1cnJ5LmRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgICAgICAgICB0aGlzLmZ1cnJ5LnkgPSB0aGlzLmZ1cnJ5LnkgLSAxO1xuICAgICAgICAgICAgdGhpcy5zaG93RnVycnkoKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZnVycnkuZGlyZWN0aW9uID09PSBcImRvd25cIikge1xuICAgICAgICAgICAgdGhpcy5mdXJyeS55ID0gdGhpcy5mdXJyeS55ICsgMTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Z1cnJ5KClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tDb2luQ29sbGlzaW9uKCk7XG5cbiAgICB9O1xuXG4gICAgdGhpcy50dXJuRnVycnkgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgc3dpdGNoIChldmVudC53aGljaCkge1xuICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICBzZWxmLmZ1cnJ5LmRpcmVjdGlvbiA9ICdsZWZ0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgc2VsZi5mdXJyeS5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICBzZWxmLmZ1cnJ5LmRpcmVjdGlvbiA9ICdyaWdodCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgIHNlbGYuZnVycnkuZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW5ueSBrbGF3aXN6OiAnICsgZXZlbnQud2hpY2gpXG4gICAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgdGhpcy5jaGVja0NvaW5Db2xsaXNpb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gY29uc29sZS53YXJuKCdjb2luLnggOiAnICsgdGhpcy5jb2luLngpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZnVycnkueCA6JyArIHRoaXMuZnVycnkueCk7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybignY29pbi55IDogJyArIHRoaXMuY29pbi55KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Z1cnJ5LnkgOicgKyB0aGlzLmZ1cnJ5LnkpO1xuXG4gICAgICAgIGlmICgodGhpcy5jb2luLnggPT0gdGhpcy5mdXJyeS54KSAmJiAodGhpcy5jb2luLnkgPT0gdGhpcy5mdXJyeS55KSkge1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoJ1RBREFNTU1NTU1NTU1NJylcbiAgICAgICAgICAgIHZhciBjb2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvaW4nKTtcbiAgICAgICAgICAgIGNvaW4ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICAgICAgY291bnRlcisrOyAvL2NvbnNvbGUubG9nKGNvdW50ZXIpO1xuICAgICAgICAgICAgdmFyIHNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzY29yZSk7XG4gICAgICAgICAgICB2YXIgZGl2TnIgPSBzY29yZS5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihkaXZOcik7XG4gICAgICAgICAgICB2YXIgbnIgPSBkaXZOci5xdWVyeVNlbGVjdG9yKCdzdHJvbmcnKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobnIpO1xuICAgICAgICAgICAgbnIuaW5uZXJIVE1MID0gY291bnRlcjtcbiAgICAgICAgICAgIHZhciBuZXdDb2luID0gbmV3IENvaW4oKTtcbiAgICAgICAgICAgIHRoaXMuY29pbiA9IG5ld0NvaW47XG4gICAgICAgICAgICBnYW1lLnNob3dDb2luKCk7XG5cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmdhbWVPdmVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgodGhpcy5mdXJyeS54IDwgMCkgfHwgKHRoaXMuZnVycnkueCA+IDkpIHx8ICh0aGlzLmZ1cnJ5LnkgPCAwKSB8fCAodGhpcy5mdXJyeS55ID4gOSkpIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2tvbGl6amEgeiDFm2NpYW7EhScpO1xuICAgICAgICAgICAgc2VsZi5oaWRlVmlzaWJsZUZ1cnJ5KCk7IC8vIGNvbnNvbGUubG9nKHNlbGYuaGlkZVZpc2libGVGdXJyeSlcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWRTZXRJbnRlcnZhbCk7XG4gICAgICAgICAgICBoaWRlVmlzaWJsZUZ1cnJ5KCk7IC8vIGNvbnNvbGUubG9nKGhpZGVWaXNpYmxlRnVycnkpXG5cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZFNldEludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBzZWxmLm1vdmVGdXJyeSgpO1xuXG4gICAgICAgIH0sIDI1MClcblxuICAgIH07XG5cbn07XG5cbnZhciBnYW1lID0gbmV3IEdhbWUoKTtcbmdhbWUuc2hvd0Z1cnJ5KCk7XG5nYW1lLnNob3dDb2luKCk7XG5nYW1lLnN0YXJ0R2FtZSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWU7XG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/game.js\n");

/***/ })

/******/ });