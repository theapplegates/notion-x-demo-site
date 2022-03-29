exports.id = 272;
exports.ids = [272];
exports.modules = {

/***/ 5892:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "styles_container__unOV2",
	"loadingIcon": "styles_loadingIcon__cjsDo",
	"spinner": "styles_spinner__YFmQJ"
};


/***/ }),

/***/ 4055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* binding */ Loading)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/styles.module.css
var styles_module = __webpack_require__(5892);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./components/LoadingIcon.tsx




const LoadingIcon = (props)=>{
    const { className , ...rest } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: external_classnames_default()((styles_module_default()).loadingIcon, className),
        ...rest,
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                    x1: "28.1542969%",
                    y1: "63.7402344%",
                    x2: "74.6289062%",
                    y2: "17.7832031%",
                    id: "linearGradient-1",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            stopColor: "rgba(164, 164, 164, 1)",
                            offset: "0%"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            stopColor: "rgba(164, 164, 164, 0)",
                            stopOpacity: "0",
                            offset: "100%"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                id: "Page-1",
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    transform: "translate(-236.000000, -286.000000)",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        transform: "translate(238.000000, 286.000000)",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                id: "Oval-2",
                                stroke: "url(#linearGradient-1)",
                                strokeWidth: "4",
                                cx: "10",
                                cy: "12",
                                r: "10"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M10,2 C4.4771525,2 0,6.4771525 0,12",
                                id: "Oval-2",
                                stroke: "rgba(164, 164, 164, 1)",
                                strokeWidth: "4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                id: "Rectangle-1",
                                fill: "rgba(164, 164, 164, 1)",
                                x: "8",
                                y: "0",
                                width: "4",
                                height: "4",
                                rx: "8"
                            })
                        ]
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Loading.tsx




const Loading = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (styles_module_default()).container,
        children: /*#__PURE__*/ jsx_runtime_.jsx(LoadingIcon, {})
    })
;


/***/ }),

/***/ 8718:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ NotionPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_notion_x__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8639);
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8751);
/* harmony import */ var react_static_tweets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5242);
/* harmony import */ var react_static_tweets__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_static_tweets__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4055);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_utils__WEBPACK_IMPORTED_MODULE_7__, react_notion_x__WEBPACK_IMPORTED_MODULE_10__]);
([notion_utils__WEBPACK_IMPORTED_MODULE_7__, react_notion_x__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











// -----------------------------------------------------------------------------
// dynamic imports for optional components
// -----------------------------------------------------------------------------
const Code = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(()=>__webpack_require__.e(/* import() */ 794).then(__webpack_require__.bind(__webpack_require__, 1794)).then((m)=>m.Code
    )
, {
    loadableGenerated: {
        modules: [
            "../components/NotionPage.tsx -> " + "react-notion-x/build/third-party/code"
        ]
    }
});
const Collection = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(()=>__webpack_require__.e(/* import() */ 635).then(__webpack_require__.bind(__webpack_require__, 635)).then((m)=>m.Collection
    )
, {
    loadableGenerated: {
        modules: [
            "../components/NotionPage.tsx -> " + "react-notion-x/build/third-party/collection"
        ]
    }
});
const Equation = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(()=>__webpack_require__.e(/* import() */ 233).then(__webpack_require__.bind(__webpack_require__, 233)).then((m)=>m.Equation
    )
, {
    loadableGenerated: {
        modules: [
            "../components/NotionPage.tsx -> " + "react-notion-x/build/third-party/equation"
        ]
    }
});
const Pdf = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/NotionPage.tsx -> " + "react-notion-x/build/third-party/pdf"
        ]
    },
    ssr: false
});
const Modal = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/NotionPage.tsx -> " + "react-notion-x/build/third-party/modal"
        ]
    },
    ssr: false
});
const NotionPage = ({ recordMap , previewImagesEnabled , rootPageId , rootDomain  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    if (router.isFallback) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_9__/* .Loading */ .g, {});
    }
    if (!recordMap) {
        return null;
    }
    const title = (0,notion_utils__WEBPACK_IMPORTED_MODULE_7__.getPageTitle)(recordMap);
    console.log(title, recordMap);
    // useful for debugging from the dev console
    if (false) { var ref, ref1; }
    const socialDescription = 'React Notion X Demo';
    const socialImage = 'https://react-notion-x-demo.transitivebullsh.it/social.jpg';
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_static_tweets__WEBPACK_IMPORTED_MODULE_8__.TwitterContextProvider, {
        value: {
            tweetAstMap: recordMap.tweetAstMap || {},
            swrOptions: {
                fetcher: (id)=>fetch(`/api/get-tweet-ast/${id}`).then((r)=>r.json()
                    )
            }
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    socialDescription && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "description",
                                content: socialDescription
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:description",
                                content: socialDescription
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "twitter:description",
                                content: socialDescription
                            })
                        ]
                    }),
                    socialImage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "twitter:card",
                                content: "summary_large_image"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "twitter:image",
                                content: socialImage
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:image",
                                content: socialImage
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:creator",
                        content: "@transitive_bs"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_notion_x__WEBPACK_IMPORTED_MODULE_10__/* .NotionRenderer */ .cp, {
                recordMap: recordMap,
                fullPage: true,
                darkMode: false,
                rootDomain: rootDomain,
                rootPageId: rootPageId,
                previewImages: previewImagesEnabled,
                components: {
                    nextImage: next_image__WEBPACK_IMPORTED_MODULE_4__["default"],
                    nextLink: next_link__WEBPACK_IMPORTED_MODULE_3__["default"],
                    Code,
                    Collection,
                    Equation,
                    Pdf,
                    Modal,
                    Tweet: react_static_tweets__WEBPACK_IMPORTED_MODULE_8__.Tweet
                }
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AM": () => (/* binding */ rootNotionPageId),
/* harmony export */   "bY": () => (/* binding */ rootNotionSpaceId),
/* harmony export */   "SK": () => (/* binding */ previewImagesEnabled),
/* harmony export */   "C5": () => (/* binding */ tweetEmbedsEnabled),
/* harmony export */   "r8": () => (/* binding */ isDev),
/* harmony export */   "MB": () => (/* binding */ rootDomain)
/* harmony export */ });
/* unused harmony export port */
// TODO: change these to your own values
// NOTE: rootNotionSpaceId is optional; set it to undefined if you don't want to
// use it.
const rootNotionPageId = '067dd719a912471ea9a3ac10710e7fdf';
const rootNotionSpaceId = 'undefined';
// NOTE: having this enabled can be pretty expensive as it re-generates preview
// images each time a page is built. In a production setting, we recommend that
// you cache the preview image results in a key-value database.
const previewImagesEnabled = false;
// whether we should enable static tweet embeds (requires fetching extra info at
// build time)
const tweetEmbedsEnabled = true;
const isDev =  false || !"production";
const port = process.env.PORT || 3000;
const rootDomain = isDev ? `localhost:${port}` : null;


/***/ }),

/***/ 4740:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notion": () => (/* binding */ notion),
/* harmony export */   "getPage": () => (/* binding */ getPage),
/* harmony export */   "search": () => (/* binding */ search)
/* harmony export */ });
/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5228);
/* harmony import */ var _preview_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6845);
/* harmony import */ var _tweet_embeds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3138);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8082);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_preview_images__WEBPACK_IMPORTED_MODULE_0__, _tweet_embeds__WEBPACK_IMPORTED_MODULE_1__, notion_client__WEBPACK_IMPORTED_MODULE_3__]);
([_preview_images__WEBPACK_IMPORTED_MODULE_0__, _tweet_embeds__WEBPACK_IMPORTED_MODULE_1__, notion_client__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const notion = new notion_client__WEBPACK_IMPORTED_MODULE_3__/* .NotionAPI */ .M();
async function getPage(pageId) {
    const recordMap = await notion.getPage(pageId);
    if (_config__WEBPACK_IMPORTED_MODULE_2__/* .previewImagesEnabled */ .SK) {
        const previewImageMap = await (0,_preview_images__WEBPACK_IMPORTED_MODULE_0__/* .getPreviewImageMap */ .R)(recordMap);
        recordMap.preview_images = previewImageMap;
    }
    if (_config__WEBPACK_IMPORTED_MODULE_2__/* .tweetEmbedsEnabled */ .C5) {
        const tweetAstMap = await (0,_tweet_embeds__WEBPACK_IMPORTED_MODULE_1__/* .getTweetAstMap */ .J)(recordMap);
        recordMap.tweetAstMap = tweetAstMap;
    }
    return recordMap;
}
async function search(params) {
    return notion.search(params);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6845:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ getPreviewImageMap)
/* harmony export */ });
/* unused harmony export getPreviewImage */
/* harmony import */ var got__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(868);
/* harmony import */ var lqip_modern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1253);
/* harmony import */ var lqip_modern__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lqip_modern__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var p_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8098);
/* harmony import */ var p_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9726);
/* harmony import */ var react_notion_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8639);
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8751);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([got__WEBPACK_IMPORTED_MODULE_0__, p_map__WEBPACK_IMPORTED_MODULE_2__, p_memoize__WEBPACK_IMPORTED_MODULE_3__, notion_utils__WEBPACK_IMPORTED_MODULE_4__, react_notion_x__WEBPACK_IMPORTED_MODULE_5__]);
([got__WEBPACK_IMPORTED_MODULE_0__, p_map__WEBPACK_IMPORTED_MODULE_2__, p_memoize__WEBPACK_IMPORTED_MODULE_3__, notion_utils__WEBPACK_IMPORTED_MODULE_4__, react_notion_x__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// NOTE: this is just an example of how to pre-compute preview images.
// Depending on how many images you're working with, this can potentially be
// very expensive to recompute, so in production we recommend that you cache
// the preview image results in a key-value database of your choosing.
// If you're not sure where to start, check out https://github.com/jaredwray/keyv
async function getPreviewImageMap(recordMap) {
    const urls = (0,notion_utils__WEBPACK_IMPORTED_MODULE_4__.getPageImageUrls)(recordMap, {
        mapImageUrl: react_notion_x__WEBPACK_IMPORTED_MODULE_5__/* .defaultMapImageUrl */ .zM
    });
    const previewImagesMap = Object.fromEntries(await (0,p_map__WEBPACK_IMPORTED_MODULE_2__["default"])(urls, async (url)=>[
            url,
            await getPreviewImage(url)
        ]
    , {
        concurrency: 8
    }));
    return previewImagesMap;
}
async function createPreviewImage(url) {
    try {
        const { body  } = await (0,got__WEBPACK_IMPORTED_MODULE_0__["default"])(url, {
            responseType: 'buffer'
        });
        const result = await lqip_modern__WEBPACK_IMPORTED_MODULE_1___default()(body);
        console.log('lqip', result.metadata);
        return {
            originalWidth: result.metadata.originalWidth,
            originalHeight: result.metadata.originalHeight,
            dataURIBase64: result.metadata.dataURIBase64
        };
    } catch (err) {
        console.warn('error creating preview image', url, err);
        return null;
    }
}
const getPreviewImage = (0,p_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(createPreviewImage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3138:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ getTweetAstMap)
/* harmony export */ });
/* harmony import */ var static_tweets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9884);
/* harmony import */ var static_tweets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(static_tweets__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var p_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8098);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([p_map__WEBPACK_IMPORTED_MODULE_1__]);
p_map__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function getTweetAstMap(recordMap) {
    const blockIds = Object.keys(recordMap.block);
    const tweetIds = blockIds.map((blockId)=>{
        var ref;
        const block = (ref = recordMap.block[blockId]) === null || ref === void 0 ? void 0 : ref.value;
        if (block) {
            if (block.type === 'tweet') {
                var ref1, ref2, ref3;
                const src = (ref1 = block.properties) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.source) === null || ref2 === void 0 ? void 0 : (ref3 = ref2[0]) === null || ref3 === void 0 ? void 0 : ref3[0];
                if (src) {
                    const id = src.split('?')[0].split('/').pop();
                    if (id) return id;
                }
            }
        }
        return null;
    }).filter(Boolean);
    const tweetAsts = await (0,p_map__WEBPACK_IMPORTED_MODULE_1__["default"])(tweetIds, async (tweetId)=>{
        try {
            return {
                tweetId,
                tweetAst: await (0,static_tweets__WEBPACK_IMPORTED_MODULE_0__.fetchTweetAst)(tweetId)
            };
        } catch (err) {
            console.error('error fetching tweet info', tweetId, err);
        }
    }, {
        concurrency: 4
    });
    const tweetAstMap = tweetAsts.reduce((acc, { tweetId , tweetAst  })=>{
        if (tweetAst) {
            return {
                ...acc,
                [tweetId]: tweetAst
            };
        } else {
            return acc;
        }
    }, {});
    return tweetAstMap;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;