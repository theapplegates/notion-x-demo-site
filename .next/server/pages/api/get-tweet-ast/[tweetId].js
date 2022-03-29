"use strict";
(() => {
var exports = {};
exports.id = 158;
exports.ids = [158];
exports.modules = {

/***/ 2188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _tweetId_)
});

;// CONCATENATED MODULE: external "static-tweets"
const external_static_tweets_namespaceObject = require("static-tweets");
;// CONCATENATED MODULE: ./pages/api/get-tweet-ast/[tweetId].ts

// NOTE: Tweets are expected to be pre-loaded at build-time. This API function is
// provided as a fallback just in case some tweets are dynamically included on the
// page.
/* harmony default export */ const _tweetId_ = (async (req, res)=>{
    if (req.method !== 'GET') {
        return res.status(405).send({
            error: 'method not allowed'
        });
    }
    const tweetId = req.query.tweetId;
    if (!tweetId) {
        return res.status(400).send({
            error: 'missing required parameter "tweetId"'
        });
    }
    console.log('getTweetAst', tweetId);
    const tweetAst = await (0,external_static_tweets_namespaceObject.fetchTweetAst)(tweetId);
    console.log('tweetAst', tweetId, tweetAst);
    res.status(200).json(tweetAst);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2188));
module.exports = __webpack_exports__;

})();