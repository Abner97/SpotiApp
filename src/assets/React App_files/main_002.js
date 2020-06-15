webpackHotUpdate("main",{

/***/ "./src/components/SearchResults/SearchResults.js":
/*!*******************************************************!*\
  !*** ./src/components/SearchResults/SearchResults.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Card */ "./src/components/Card/index.js");
/* harmony import */ var _services_pokemon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pokemon */ "./src/services/pokemon.js");
var _jsxFileName = "/home/abraham/Dev/WebDev/Pokemon/src/components/SearchResults/SearchResults.js";




function SearchResults(props) {
  const [pokemonData, setPokemonData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const initialUrl = `https://pokeapi.co/api/v2/pokemon/${props.type}`;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchData() {
      let response = await Object(_services_pokemon__WEBPACK_IMPORTED_MODULE_2__["getAllPokemon"])(initialUrl);
      console.log(response);
      await loadingPokemon(response);
      setLoading(false);
    }

    fetchData();
  }, []);

  const loadingPokemon = async data => {
    setPokemonData(data);
  };

  console.log(pokemonData);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Loading ...")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gridContainer m-5",
    onClick: e => console.log("Clicked"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "return ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pokemon: pokemonData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 22
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchResults);

/***/ })

})
//# sourceMappingURL=main.9ca0465786aaebf17fa1.hot-update.js.map