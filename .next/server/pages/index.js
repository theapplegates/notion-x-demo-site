"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_notion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4740);
/* harmony import */ var _components_NotionPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8718);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8082);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_notion__WEBPACK_IMPORTED_MODULE_2__, _components_NotionPage__WEBPACK_IMPORTED_MODULE_3__]);
([_lib_notion__WEBPACK_IMPORTED_MODULE_2__, _components_NotionPage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const getStaticProps = async ()=>{
    const pageId = _lib_config__WEBPACK_IMPORTED_MODULE_4__/* .rootNotionPageId */ .AM;
    const recordMap = await _lib_notion__WEBPACK_IMPORTED_MODULE_2__.getPage(pageId);
    return {
        props: {
            recordMap
        },
        revalidate: 10
    };
};
function Page({ recordMap  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NotionPage__WEBPACK_IMPORTED_MODULE_3__/* .NotionPage */ .m, {
        recordMap: recordMap,
        rootDomain: _lib_config__WEBPACK_IMPORTED_MODULE_4__/* .rootDomain */ .MB,
        rootPageId: _lib_config__WEBPACK_IMPORTED_MODULE_4__/* .rootNotionPageId */ .AM,
        previewImagesEnabled: _lib_config__WEBPACK_IMPORTED_MODULE_4__/* .previewImagesEnabled */ .SK
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1618:
/***/ ((module) => {

module.exports = require("@matejmazur/react-katex");

/***/ }),

/***/ 5011:
/***/ ((module) => {

module.exports = require("@sindresorhus/is");

/***/ }),

/***/ 3711:
/***/ ((module) => {

module.exports = require("cacheable-request");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4741:
/***/ ((module) => {

module.exports = require("clipboard-copy");

/***/ }),

/***/ 7956:
/***/ ((module) => {

module.exports = require("date-fns/add");

/***/ }),

/***/ 4384:
/***/ ((module) => {

module.exports = require("date-fns/format");

/***/ }),

/***/ 8711:
/***/ ((module) => {

module.exports = require("date-fns/getDate");

/***/ }),

/***/ 3770:
/***/ ((module) => {

module.exports = require("date-fns/getDay");

/***/ }),

/***/ 742:
/***/ ((module) => {

module.exports = require("date-fns/getHours");

/***/ }),

/***/ 2741:
/***/ ((module) => {

module.exports = require("date-fns/getMinutes");

/***/ }),

/***/ 4885:
/***/ ((module) => {

module.exports = require("date-fns/getMonth");

/***/ }),

/***/ 2652:
/***/ ((module) => {

module.exports = require("date-fns/getYear");

/***/ }),

/***/ 5796:
/***/ ((module) => {

module.exports = require("date-fns/intervalToDuration");

/***/ }),

/***/ 1277:
/***/ ((module) => {

module.exports = require("date-fns/sub");

/***/ }),

/***/ 4009:
/***/ ((module) => {

module.exports = require("decompress-response");

/***/ }),

/***/ 6325:
/***/ ((module) => {

module.exports = require("defer-to-connect");

/***/ }),

/***/ 1239:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7320:
/***/ ((module) => {

module.exports = require("format-number");

/***/ }),

/***/ 8622:
/***/ ((module) => {

module.exports = require("lodash.throttle");

/***/ }),

/***/ 1253:
/***/ ((module) => {

module.exports = require("lqip-modern");

/***/ }),

/***/ 1985:
/***/ ((module) => {

module.exports = require("medium-zoom");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 8871:
/***/ ((module) => {

module.exports = require("prismjs");

/***/ }),

/***/ 6502:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-bash");

/***/ }),

/***/ 8186:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-c");

/***/ }),

/***/ 7418:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-clike");

/***/ }),

/***/ 5758:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-coffeescript");

/***/ }),

/***/ 5180:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-cpp");

/***/ }),

/***/ 6414:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-csharp");

/***/ }),

/***/ 7737:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-css");

/***/ }),

/***/ 5361:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-css-extras");

/***/ }),

/***/ 2929:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-diff");

/***/ }),

/***/ 3260:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-docker");

/***/ }),

/***/ 3482:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-git");

/***/ }),

/***/ 7158:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-go");

/***/ }),

/***/ 5338:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-graphql");

/***/ }),

/***/ 2717:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-handlebars");

/***/ }),

/***/ 1785:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-java");

/***/ }),

/***/ 3662:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-javascript");

/***/ }),

/***/ 7821:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-js-extras");

/***/ }),

/***/ 495:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-js-templates");

/***/ }),

/***/ 1300:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-json");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-jsx");

/***/ }),

/***/ 6010:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-less");

/***/ }),

/***/ 6831:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-makefile");

/***/ }),

/***/ 5330:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-markdown");

/***/ }),

/***/ 8427:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-markup");

/***/ }),

/***/ 2795:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-markup-templating");

/***/ }),

/***/ 2828:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-objectivec");

/***/ }),

/***/ 8089:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-ocaml");

/***/ }),

/***/ 4946:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-python");

/***/ }),

/***/ 435:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-reason");

/***/ }),

/***/ 5840:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-rust");

/***/ }),

/***/ 7230:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-sass");

/***/ }),

/***/ 1553:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-scss");

/***/ }),

/***/ 939:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-solidity");

/***/ }),

/***/ 9149:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-sql");

/***/ }),

/***/ 6733:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-stylus");

/***/ }),

/***/ 7433:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-swift");

/***/ }),

/***/ 112:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-tsx");

/***/ }),

/***/ 2996:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-typescript");

/***/ }),

/***/ 7698:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-wasm");

/***/ }),

/***/ 8528:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-yaml");

/***/ }),

/***/ 6273:
/***/ ((module) => {

module.exports = require("quick-lru");

/***/ }),

/***/ 9291:
/***/ ((module) => {

module.exports = require("rc-dropdown");

/***/ }),

/***/ 9934:
/***/ ((module) => {

module.exports = require("rc-menu");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2784:
/***/ ((module) => {

module.exports = require("react-hotkeys-hook");

/***/ }),

/***/ 9358:
/***/ ((module) => {

module.exports = require("react-image");

/***/ }),

/***/ 9785:
/***/ ((module) => {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ 5242:
/***/ ((module) => {

module.exports = require("react-static-tweets");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("react-use");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6673:
/***/ ((module) => {

module.exports = require("resolve-alpn");

/***/ }),

/***/ 9884:
/***/ ((module) => {

module.exports = require("static-tweets");

/***/ }),

/***/ 2067:
/***/ ((module) => {

module.exports = require("timeago.js");

/***/ }),

/***/ 3470:
/***/ ((module) => {

module.exports = require("unionize");

/***/ }),

/***/ 6464:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 868:
/***/ ((module) => {

module.exports = import("got");;

/***/ }),

/***/ 8751:
/***/ ((module) => {

module.exports = import("notion-utils");;

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = import("p-map");;

/***/ }),

/***/ 9726:
/***/ ((module) => {

module.exports = import("p-memoize");;

/***/ }),

/***/ 9523:
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5158:
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 1808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 4404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,202,272], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();