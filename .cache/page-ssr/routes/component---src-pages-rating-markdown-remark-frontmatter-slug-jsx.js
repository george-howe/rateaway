"use strict";
exports.id = "component---src-pages-rating-markdown-remark-frontmatter-slug-jsx";
exports.ids = ["component---src-pages-rating-markdown-remark-frontmatter-slug-jsx"];
exports.modules = {

/***/ "./src/pages/rating/{markdownRemark.frontmatter__slug}.jsx?export=default":
/*!********************************************************************************!*\
  !*** ./src/pages/rating/{markdownRemark.frontmatter__slug}.jsx?export=default ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RatingPostTemplate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function RatingPostTemplate({
  data // this prop will be injected by the GraphQL query below.
}) {
  const {
    markdownRemark
  } = data; // data.markdownRemark holds your post data
  const {
    frontmatter,
    html
  } = markdownRemark;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, frontmatter.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, frontmatter.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  })));
}
const pageQuery = "1284216297";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-rating-markdown-remark-frontmatter-slug-jsx.js.map