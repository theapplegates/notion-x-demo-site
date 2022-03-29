exports.id = 202;
exports.ids = [202];
exports.modules = {

/***/ 9749:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports["default"] = Image;
var _react = _interopRequireWildcard(__webpack_require__(6689));
var _head = _interopRequireDefault(__webpack_require__(4957));
var _imageConfig = __webpack_require__(5843);
var _useIntersection = __webpack_require__(9246);
var _imageConfigContext = __webpack_require__(744);
var _utils = __webpack_require__(9232);
var _normalizeTrailingSlash = __webpack_require__(2700);
function Image(_param) {
    var { src , sizes , unoptimized =false , priority =false , loading , lazyRoot =null , lazyBoundary ='200px' , className , quality , width , height , style , objectFit , objectPosition , onLoadingComplete , loader =defaultImageLoader , placeholder ='empty' , blurDataURL  } = _param, all = _objectWithoutProperties(_param, [
        "src",
        "sizes",
        "unoptimized",
        "priority",
        "loading",
        "lazyRoot",
        "lazyBoundary",
        "className",
        "quality",
        "width",
        "height",
        "style",
        "objectFit",
        "objectPosition",
        "onLoadingComplete",
        "loader",
        "placeholder",
        "blurDataURL"
    ]);
    const configContext = (0, _react).useContext(_imageConfigContext.ImageConfigContext);
    const config = (0, _react).useMemo(()=>{
        const c = configEnv || configContext || _imageConfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b
        );
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b
        );
        return _objectSpread({}, c, {
            allSizes,
            deviceSizes
        });
    }, [
        configContext
    ]);
    let rest = all;
    let layout = sizes ? 'responsive' : 'intrinsic';
    if ('layout' in rest) {
        // Override default layout if the user specified one:
        if (rest.layout) layout = rest.layout;
        // Remove property so it's not spread into image:
        delete rest['layout'];
    }
    let staticSrc = '';
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
        }
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!layout || layout !== 'fill') {
            height = height || staticImageData.height;
            width = width || staticImageData.width;
            if (!staticImageData.height || !staticImageData.width) {
                throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
            }
        }
    }
    src = typeof src === 'string' ? src : staticSrc;
    const widthInt = getInt(width);
    const heightInt = getInt(height);
    const qualityInt = getInt(quality);
    let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');
    if (src.startsWith('data:') || src.startsWith('blob:')) {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (false) {}
    const [setIntersection, isIntersected] = (0, _useIntersection).useIntersection({
        rootRef: lazyRoot,
        rootMargin: lazyBoundary,
        disabled: !isLazy
    });
    const isVisible = !isLazy || isIntersected;
    const wrapperStyle = {
        boxSizing: 'border-box',
        display: 'block',
        overflow: 'hidden',
        width: 'initial',
        height: 'initial',
        background: 'none',
        opacity: 1,
        border: 0,
        margin: 0,
        padding: 0
    };
    const sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        width: 'initial',
        height: 'initial',
        background: 'none',
        opacity: 1,
        border: 0,
        margin: 0,
        padding: 0
    };
    let hasSizer = false;
    let sizerSvgUrl;
    const layoutStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        boxSizing: 'border-box',
        padding: 0,
        border: 'none',
        margin: 'auto',
        display: 'block',
        width: 0,
        height: 0,
        minWidth: '100%',
        maxWidth: '100%',
        minHeight: '100%',
        maxHeight: '100%',
        objectFit,
        objectPosition
    };
    if (false) {}
    if (false) {}
    const imgStyle = Object.assign({}, style, layout === 'raw' ? {
        aspectRatio: `${widthInt} / ${heightInt}`
    } : layoutStyle);
    const blurStyle = placeholder === 'blur' ? {
        filter: 'blur(20px)',
        backgroundSize: objectFit || 'cover',
        backgroundImage: `url("${blurDataURL}")`,
        backgroundPosition: objectPosition || '0% 0%'
    } : {};
    if (layout === 'fill') {
        // <Image src="i.png" layout="fill" />
        wrapperStyle.display = 'block';
        wrapperStyle.position = 'absolute';
        wrapperStyle.top = 0;
        wrapperStyle.left = 0;
        wrapperStyle.bottom = 0;
        wrapperStyle.right = 0;
    } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
        // <Image src="i.png" width="100" height="100" />
        const quotient = heightInt / widthInt;
        const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;
        if (layout === 'responsive') {
            // <Image src="i.png" width="100" height="100" layout="responsive" />
            wrapperStyle.display = 'block';
            wrapperStyle.position = 'relative';
            hasSizer = true;
            sizerStyle.paddingTop = paddingTop;
        } else if (layout === 'intrinsic') {
            // <Image src="i.png" width="100" height="100" layout="intrinsic" />
            wrapperStyle.display = 'inline-block';
            wrapperStyle.position = 'relative';
            wrapperStyle.maxWidth = '100%';
            hasSizer = true;
            sizerStyle.maxWidth = '100%';
            sizerSvgUrl = `data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27${widthInt}%27%20height=%27${heightInt}%27/%3e`;
        } else if (layout === 'fixed') {
            // <Image src="i.png" width="100" height="100" layout="fixed" />
            wrapperStyle.display = 'inline-block';
            wrapperStyle.position = 'relative';
            wrapperStyle.width = widthInt;
            wrapperStyle.height = heightInt;
        }
    } else {
        // <Image src="i.png" />
        if (false) {}
    }
    let imgAttributes = {
        src: emptyDataURL,
        srcSet: undefined,
        sizes: undefined
    };
    if (isVisible) {
        imgAttributes = generateImgAttrs({
            config,
            src,
            unoptimized,
            layout,
            width: widthInt,
            quality: qualityInt,
            sizes,
            loader
        });
    }
    let srcString = src;
    if (false) {}
    let imageSrcSetPropName = 'imagesrcset';
    let imageSizesPropName = 'imagesizes';
    if (false) {}
    const linkProps = {
        // Note: imagesrcset and imagesizes are not in the link element type with react 17.
        [imageSrcSetPropName]: imgAttributes.srcSet,
        [imageSizesPropName]: imgAttributes.sizes
    };
    const useLayoutEffect =  true ? _react.default.useEffect : 0;
    const onLoadingCompleteRef = (0, _react).useRef(onLoadingComplete);
    const imgRef = (0, _react).useRef(null);
    (0, _react).useEffect(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    useLayoutEffect(()=>{
        setIntersection(imgRef.current);
    }, [
        setIntersection
    ]);
    (0, _react).useEffect(()=>{
        handleLoading(imgRef, srcString, layout, placeholder, onLoadingCompleteRef);
    }, [
        srcString,
        layout,
        placeholder,
        isVisible
    ]);
    const imgElementArgs = _objectSpread({
        isLazy,
        imgAttributes,
        heightInt,
        widthInt,
        qualityInt,
        layout,
        className,
        imgStyle,
        blurStyle,
        imgRef,
        loading,
        config,
        unoptimized,
        placeholder,
        loader,
        srcString
    }, rest);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, layout === 'raw' ? /*#__PURE__*/ _react.default.createElement(ImageElement, Object.assign({}, imgElementArgs)) : /*#__PURE__*/ _react.default.createElement("span", {
        style: wrapperStyle
    }, hasSizer ? /*#__PURE__*/ _react.default.createElement("span", {
        style: sizerStyle
    }, sizerSvgUrl ? /*#__PURE__*/ _react.default.createElement("img", {
        style: {
            display: 'block',
            maxWidth: '100%',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0
        },
        alt: "",
        "aria-hidden": true,
        src: sizerSvgUrl
    }) : null) : null, /*#__PURE__*/ _react.default.createElement(ImageElement, Object.assign({}, imgElementArgs))), priority ? // for browsers that do not support `imagesrcset`, and in those cases
    // it would likely cause the incorrect image to be preloaded.
    //
    // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
    /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", Object.assign({
        key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        as: "image",
        href: imgAttributes.srcSet ? undefined : imgAttributes.src
    }, linkProps))) : null);
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var ref;
const experimentalLayoutRaw = (ref = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","experimentalLayoutRaw":false}) === null || ref === void 0 ? void 0 : ref.experimentalLayoutRaw;
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","experimentalLayoutRaw":false};
const loadedImageURLs = new Set();
const allImgs = new Map();
let perfObserver;
const emptyDataURL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
if (true) {
    global.__NEXT_IMAGE_IMPORTED = true;
}
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    'lazy',
    'eager',
    undefined
]));
const loaders = new Map([
    [
        'default',
        defaultLoader
    ],
    [
        'imgix',
        imgixLoader
    ],
    [
        'cloudinary',
        cloudinaryLoader
    ],
    [
        'akamai',
        akamaiLoader
    ],
    [
        'custom',
        customLoader
    ], 
]);
const VALID_LAYOUT_VALUES = (/* unused pure expression or super */ null && ([
    'fill',
    'fixed',
    'intrinsic',
    'responsive',
    'raw',
    undefined, 
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}
function getWidths({ deviceSizes , allSizes  }, width, layout, sizes) {
    if (sizes && (layout === 'fill' || layout === 'responsive' || layout === 'raw')) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio
                ),
                kind: 'w'
            };
        }
        return {
            widths: allSizes,
            kind: 'w'
        };
    }
    if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
        return {
            widths: deviceSizes,
            kind: 'w'
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w
            ) || allSizes[allSizes.length - 1]
        )), 
    ];
    return {
        widths,
        kind: 'x'
    };
}
function generateImgAttrs({ config , src , unoptimized , layout , width , quality , sizes , loader  }) {
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths , kind  } = getWidths(config, width, layout, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === 'w' ? '100vw' : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === 'w' ? w : i + 1}${kind}`
        ).join(', '),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getInt(x) {
    if (typeof x === 'number') {
        return x;
    }
    if (typeof x === 'string') {
        return parseInt(x, 10);
    }
    return undefined;
}
function defaultImageLoader(loaderProps) {
    var ref2;
    const loaderKey = ((ref2 = loaderProps.config) === null || ref2 === void 0 ? void 0 : ref2.loader) || 'default';
    const load = loaders.get(loaderKey);
    if (load) {
        return load(loaderProps);
    }
    throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${loaderKey}`);
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(imgRef, src, layout, placeholder, onLoadingCompleteRef) {
    const handleLoad = ()=>{
        const img = imgRef.current;
        if (!img) {
            return;
        }
        if (img.src !== emptyDataURL) {
            const p = 'decode' in img ? img.decode() : Promise.resolve();
            p.catch(()=>{}).then(()=>{
                if (!imgRef.current) {
                    return;
                }
                loadedImageURLs.add(src);
                if (placeholder === 'blur') {
                    img.style.filter = '';
                    img.style.backgroundSize = '';
                    img.style.backgroundImage = '';
                    img.style.backgroundPosition = '';
                }
                if (onLoadingCompleteRef.current) {
                    const { naturalWidth , naturalHeight  } = img;
                    // Pass back read-only primitive values but not the
                    // underlying DOM element because it could be misused.
                    onLoadingCompleteRef.current({
                        naturalWidth,
                        naturalHeight
                    });
                }
                if (false) { var ref3; }
            });
        }
    };
    if (imgRef.current) {
        if (imgRef.current.complete) {
            // If the real image fails to load, this will still remove the placeholder.
            // This is the desired behavior for now, and will be revisited when error
            // handling is worked on for the image component itself.
            handleLoad();
        } else {
            imgRef.current.onload = handleLoad;
        }
    }
}
const ImageElement = (_param)=>{
    var { imgAttributes , heightInt , widthInt , qualityInt , layout , className , imgStyle , blurStyle , isLazy , imgRef , placeholder , loading , sizes , srcString , config , unoptimized , loader  } = _param, rest = _objectWithoutProperties(_param, [
        "imgAttributes",
        "heightInt",
        "widthInt",
        "qualityInt",
        "layout",
        "className",
        "imgStyle",
        "blurStyle",
        "isLazy",
        "imgRef",
        "placeholder",
        "loading",
        "sizes",
        "srcString",
        "config",
        "unoptimized",
        "loader"
    ]);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("img", Object.assign({}, rest, imgAttributes, layout === 'raw' && !sizes ? {
        height: heightInt,
        width: widthInt
    } : {}, {
        decoding: "async",
        "data-nimg": layout,
        className: className,
        ref: imgRef,
        style: _objectSpread({}, imgStyle, blurStyle)
    })), (isLazy || placeholder === 'blur') && /*#__PURE__*/ _react.default.createElement("noscript", null, /*#__PURE__*/ _react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
        config,
        src: srcString,
        unoptimized,
        layout,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    }), layout === 'raw' && !sizes ? {
        height: heightInt,
        width: widthInt
    } : {}, {
        decoding: "async",
        "data-nimg": layout,
        style: imgStyle,
        className: className,
        // @ts-ignore - TODO: upgrade to `@types/react@17`
        loading: loading || 'lazy'
    }))));
};
function normalizeSrc(src) {
    return src[0] === '/' ? src.slice(1) : src;
}
function imgixLoader({ config , src , width , quality  }) {
    // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
    const url = new URL(`${config.path}${normalizeSrc(src)}`);
    const params = url.searchParams;
    params.set('auto', params.get('auto') || 'format');
    params.set('fit', params.get('fit') || 'max');
    params.set('w', params.get('w') || width.toString());
    if (quality) {
        params.set('q', quality.toString());
    }
    return url.href;
}
function akamaiLoader({ config , src , width  }) {
    return `${config.path}${normalizeSrc(src)}?imwidth=${width}`;
}
function cloudinaryLoader({ config , src , width , quality  }) {
    // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
    const params = [
        'f_auto',
        'c_limit',
        'w_' + width,
        'q_' + (quality || 'auto')
    ];
    const paramsString = params.join(',') + '/';
    return `${config.path}${paramsString}${normalizeSrc(src)}`;
}
function customLoader({ src  }) {
    throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}
function defaultLoader({ config , src , width , quality  }) {
    if (false) {}
    if (src.endsWith('.svg') && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        return src;
    }
    return `${(0, _normalizeTrailingSlash).normalizePathTrailingSlash(config.path)}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
} //# sourceMappingURL=image.js.map


/***/ }),

/***/ 1551:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(6689));
var _router = __webpack_require__(1003);
var _router1 = __webpack_require__(880);
var _useIntersection = __webpack_require__(9246);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const prefetched = {};
function prefetch(router, href, as, options) {
    if (true) return;
    if (!(0, _router).isLocalURL(href)) return;
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    router.prefetch(href, as, options).catch((err)=>{
        if (false) {}
    });
    const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale;
    // Join on an invalid URI character
    prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}
function isModifiedEvent(event) {
    const { target  } = event.currentTarget;
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
    const { nodeName  } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    // replace state instead of push if prop is present
    router[replace ? 'replace' : 'push'](href, as, {
        shallow,
        locale,
        scroll
    });
}
function Link(props) {
    if (false) {}
    const p = props.prefetch !== false;
    const router = (0, _router1).useRouter();
    const { href , as  } = _react.default.useMemo(()=>{
        const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
        return {
            href: resolvedHref,
            as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
        };
    }, [
        router,
        props.href,
        props.as
    ]);
    let { children , replace , shallow , scroll , locale  } = props;
    if (typeof children === 'string') {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (false) {} else {
        child = _react.default.Children.only(children);
    }
    const childRef = child && typeof child === 'object' && child.ref;
    const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
        rootMargin: '200px'
    });
    const setRef = _react.default.useCallback((el)=>{
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === 'function') childRef(el);
            else if (typeof childRef === 'object') {
                childRef.current = el;
            }
        }
    }, [
        childRef,
        setIntersectionRef
    ]);
    _react.default.useEffect(()=>{
        const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
        const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
        const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];
        if (shouldPrefetch && !isPrefetched) {
            prefetch(router, href, as, {
                locale: curLocale
            });
        }
    }, [
        as,
        href,
        isVisible,
        locale,
        p,
        router
    ]);
    const childProps = {
        ref: setRef,
        onClick: (e)=>{
            if (false) {}
            if (child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!e.defaultPrevented) {
                linkClicked(e, router, href, as, replace, shallow, scroll, locale);
            }
        }
    };
    childProps.onMouseEnter = (e)=>{
        if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
        }
        if ((0, _router).isLocalURL(href)) {
            prefetch(router, href, as, {
                priority: true
            });
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user
    if (props.passHref || child.type === 'a' && !('href' in child.props)) {
        const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
        childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
    }
    return /*#__PURE__*/ _react.default.cloneElement(child, childProps);
}
var _default = Link;
exports["default"] = _default; //# sourceMappingURL=link.js.map


/***/ }),

/***/ 2700:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
function removePathTrailingSlash(path) {
    return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash; //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 2497:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.getMiddlewareManifest = getMiddlewareManifest;
exports.createRouteLoader = createRouteLoader;
var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(9565));
var _requestIdleCallback = __webpack_require__(4686);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.
const MS_MAX_IDLE_DELAY = 3800;
function withFuture(key, map, generator) {
    let entry = map.get(key);
    if (entry) {
        if ('future' in entry) {
            return entry.future;
        }
        return Promise.resolve(entry);
    }
    let resolver;
    const prom = new Promise((resolve)=>{
        resolver = resolve;
    });
    map.set(key, entry = {
        resolve: resolver,
        future: prom
    });
    return generator ? generator() // eslint-disable-next-line no-sequences
    .then((value)=>(resolver(value), value)
    ).catch((err)=>{
        map.delete(key);
        throw err;
    }) : prom;
}
function hasPrefetch(link) {
    try {
        link = document.createElement('link');
        return(// with relList.support
        (!!window.MSInputMethodContext && !!document.documentMode) || link.relList.supports('prefetch'));
    } catch (e) {
        return false;
    }
}
const canPrefetch = hasPrefetch();
function prefetchViaDom(href, as, link) {
    return new Promise((res, rej)=>{
        const selector = `
      link[rel="prefetch"][href^="${href}"],
      link[rel="preload"][href^="${href}"],
      script[src^="${href}"]`;
        if (document.querySelector(selector)) {
            return res();
        }
        link = document.createElement('link');
        // The order of property assignment here is intentional:
        if (as) link.as = as;
        link.rel = `prefetch`;
        link.crossOrigin = undefined;
        link.onload = res;
        link.onerror = rej;
        // `href` should always be last:
        link.href = href;
        document.head.appendChild(link);
    });
}
const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');
function markAssetError(err) {
    return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}
function isAssetError(err) {
    return err && ASSET_LOAD_ERROR in err;
}
function appendScript(src, script) {
    return new Promise((resolve, reject)=>{
        script = document.createElement('script');
        // The order of property assignment here is intentional.
        // 1. Setup success/failure hooks in case the browser synchronously
        //    executes when `src` is set.
        script.onload = resolve;
        script.onerror = ()=>reject(markAssetError(new Error(`Failed to load script: ${src}`)))
        ;
        // 2. Configure the cross-origin attribute before setting `src` in case the
        //    browser begins to fetch.
        script.crossOrigin = undefined;
        // 3. Finally, set the source and inject into the DOM in case the child
        //    must be appended for fetching to start.
        script.src = src;
        document.body.appendChild(script);
    });
}
// We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.
let devBuildPromise;
// Resolve a promise that times out after given amount of milliseconds.
function resolvePromiseWithTimeout(p, ms, err) {
    return new Promise((resolve, reject)=>{
        let cancelled = false;
        p.then((r)=>{
            // Resolved, cancel the timeout
            cancelled = true;
            resolve(r);
        }).catch(reject);
        // We wrap these checks separately for better dead-code elimination in
        // production bundles.
        if (false) {}
        if (true) {
            (0, _requestIdleCallback).requestIdleCallback(()=>setTimeout(()=>{
                    if (!cancelled) {
                        reject(err);
                    }
                }, ms)
            );
        }
    });
}
function getClientBuildManifest() {
    if (self.__BUILD_MANIFEST) {
        return Promise.resolve(self.__BUILD_MANIFEST);
    }
    const onBuildManifest = new Promise((resolve)=>{
        // Mandatory because this is not concurrent safe:
        const cb = self.__BUILD_MANIFEST_CB;
        self.__BUILD_MANIFEST_CB = ()=>{
            resolve(self.__BUILD_MANIFEST);
            cb && cb();
        };
    });
    return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}
function getMiddlewareManifest() {
    if (self.__MIDDLEWARE_MANIFEST) {
        return Promise.resolve(self.__MIDDLEWARE_MANIFEST);
    }
    const onMiddlewareManifest = new Promise((resolve)=>{
        const cb = self.__MIDDLEWARE_MANIFEST_CB;
        self.__MIDDLEWARE_MANIFEST_CB = ()=>{
            resolve(self.__MIDDLEWARE_MANIFEST);
            cb && cb();
        };
    });
    return resolvePromiseWithTimeout(onMiddlewareManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client middleware manifest')));
}
function getFilesForRoute(assetPrefix, route) {
    if (false) {}
    return getClientBuildManifest().then((manifest)=>{
        if (!(route in manifest)) {
            throw markAssetError(new Error(`Failed to lookup route: ${route}`));
        }
        const allFiles = manifest[route].map((entry)=>assetPrefix + '/_next/' + encodeURI(entry)
        );
        return {
            scripts: allFiles.filter((v)=>v.endsWith('.js')
            ),
            css: allFiles.filter((v)=>v.endsWith('.css')
            )
        };
    });
}
function createRouteLoader(assetPrefix) {
    const entrypoints = new Map();
    const loadedScripts = new Map();
    const styleSheets = new Map();
    const routes = new Map();
    function maybeExecuteScript(src) {
        // With HMR we might need to "reload" scripts when they are
        // disposed and readded. Executing scripts twice has no functional
        // differences
        if (true) {
            let prom = loadedScripts.get(src);
            if (prom) {
                return prom;
            }
            // Skip executing script if it's already in the DOM:
            if (document.querySelector(`script[src^="${src}"]`)) {
                return Promise.resolve();
            }
            loadedScripts.set(src, prom = appendScript(src));
            return prom;
        } else {}
    }
    function fetchStyleSheet(href) {
        let prom = styleSheets.get(href);
        if (prom) {
            return prom;
        }
        styleSheets.set(href, prom = fetch(href).then((res)=>{
            if (!res.ok) {
                throw new Error(`Failed to load stylesheet: ${href}`);
            }
            return res.text().then((text)=>({
                    href: href,
                    content: text
                })
            );
        }).catch((err)=>{
            throw markAssetError(err);
        }));
        return prom;
    }
    return {
        whenEntrypoint (route) {
            return withFuture(route, entrypoints);
        },
        onEntrypoint (route, execute) {
            (execute ? Promise.resolve().then(()=>execute()
            ).then((exports)=>({
                    component: exports && exports.default || exports,
                    exports: exports
                })
            , (err)=>({
                    error: err
                })
            ) : Promise.resolve(undefined)).then((input)=>{
                const old = entrypoints.get(route);
                if (old && 'resolve' in old) {
                    if (input) {
                        entrypoints.set(route, input);
                        old.resolve(input);
                    }
                } else {
                    if (input) {
                        entrypoints.set(route, input);
                    } else {
                        entrypoints.delete(route);
                    }
                    // when this entrypoint has been resolved before
                    // the route is outdated and we want to invalidate
                    // this cache entry
                    routes.delete(route);
                }
            });
        },
        loadRoute (route, prefetch) {
            return withFuture(route, routes, ()=>{
                let devBuildPromiseResolve;
                if (false) {}
                return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({ scripts , css  })=>{
                    return Promise.all([
                        entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)),
                        Promise.all(css.map(fetchStyleSheet)), 
                    ]);
                }).then((res)=>{
                    return this.whenEntrypoint(route).then((entrypoint)=>({
                            entrypoint,
                            styles: res[1]
                        })
                    );
                }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({ entrypoint , styles  })=>{
                    const res = Object.assign({
                        styles: styles
                    }, entrypoint);
                    return 'error' in entrypoint ? entrypoint : res;
                }).catch((err)=>{
                    if (prefetch) {
                        // we don't want to cache errors during prefetch
                        throw err;
                    }
                    return {
                        error: err
                    };
                }).finally(()=>{
                    return devBuildPromiseResolve === null || devBuildPromiseResolve === void 0 ? void 0 : devBuildPromiseResolve();
                });
            });
        },
        prefetch (route) {
            // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
            // License: Apache 2.0
            let cn;
            if (cn = navigator.connection) {
                // Don't prefetch if using 2G or if Save-Data is enabled.
                if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
            }
            return getFilesForRoute(assetPrefix, route).then((output)=>Promise.all(canPrefetch ? output.scripts.map((script)=>prefetchViaDom(script, 'script')
                ) : [])
            ).then(()=>{
                (0, _requestIdleCallback).requestIdleCallback(()=>this.loadRoute(route, true).catch(()=>{})
                );
            }).catch(()=>{});
        }
    };
} //# sourceMappingURL=route-loader.js.map


/***/ }),

/***/ 880:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "Router", ({
    enumerable: true,
    get: function() {
        return _router.default;
    }
}));
Object.defineProperty(exports, "withRouter", ({
    enumerable: true,
    get: function() {
        return _withRouter.default;
    }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(6689));
var _router = _interopRequireDefault(__webpack_require__(1003));
var _routerContext = __webpack_require__(4964);
var _isError = _interopRequireDefault(__webpack_require__(676));
var _withRouter = _interopRequireDefault(__webpack_require__(9977));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const singletonRouter = {
    router: null,
    readyCallbacks: [],
    ready (cb) {
        if (this.router) return cb();
        if (false) {}
    }
};
// Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = [
    'pathname',
    'route',
    'query',
    'asPath',
    'components',
    'isFallback',
    'basePath',
    'locale',
    'locales',
    'defaultLocale',
    'isReady',
    'isPreview',
    'isLocaleDomain',
    'domainLocales', 
];
const routerEvents = [
    'routeChangeStart',
    'beforeHistoryChange',
    'routeChangeComplete',
    'routeChangeError',
    'hashChangeStart',
    'hashChangeComplete', 
];
const coreMethodFields = [
    'push',
    'replace',
    'reload',
    'back',
    'prefetch',
    'beforePopState', 
];
// Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
    get () {
        return _router.default.events;
    }
});
urlPropertyFields.forEach((field)=>{
    // Here we need to use Object.defineProperty because we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    Object.defineProperty(singletonRouter, field, {
        get () {
            const router = getRouter();
            return router[field];
        }
    });
});
coreMethodFields.forEach((field)=>{
    singletonRouter[field] = (...args)=>{
        const router = getRouter();
        return router[field](...args);
    };
});
routerEvents.forEach((event)=>{
    singletonRouter.ready(()=>{
        _router.default.events.on(event, (...args)=>{
            const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
            const _singletonRouter = singletonRouter;
            if (_singletonRouter[eventField]) {
                try {
                    _singletonRouter[eventField](...args);
                } catch (err) {
                    console.error(`Error when running the Router event: ${eventField}`);
                    console.error((0, _isError).default(err) ? `${err.message}\n${err.stack}` : err + '');
                }
            }
        });
    });
});
function getRouter() {
    if (!singletonRouter.router) {
        const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
        throw new Error(message);
    }
    return singletonRouter.router;
}
var _default = singletonRouter;
exports["default"] = _default;
function useRouter() {
    return _react.default.useContext(_routerContext.RouterContext);
}
function createRouter(...args) {
    singletonRouter.router = new _router.default(...args);
    singletonRouter.readyCallbacks.forEach((cb)=>cb()
    );
    singletonRouter.readyCallbacks = [];
    return singletonRouter.router;
}
function makePublicRouterInstance(router) {
    const scopedRouter = router;
    const instance = {};
    for (const property of urlPropertyFields){
        if (typeof scopedRouter[property] === 'object') {
            instance[property] = Object.assign(Array.isArray(scopedRouter[property]) ? [] : {}, scopedRouter[property]) // makes sure query is not stateful
            ;
            continue;
        }
        instance[property] = scopedRouter[property];
    }
    // Events is a static property on the router, the router doesn't have to be initialized to use it
    instance.events = _router.default.events;
    coreMethodFields.forEach((field)=>{
        instance[field] = (...args)=>{
            return scopedRouter[field](...args);
        };
    });
    return instance;
} //# sourceMappingURL=router.js.map


/***/ }),

/***/ 9246:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useIntersection = useIntersection;
var _react = __webpack_require__(6689);
var _requestIdleCallback = __webpack_require__(4686);
const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';
function useIntersection({ rootRef , rootMargin , disabled  }) {
    const isDisabled = disabled || !hasIntersectionObserver;
    const unobserve = (0, _react).useRef();
    const [visible, setVisible] = (0, _react).useState(false);
    const [root, setRoot] = (0, _react).useState(rootRef ? rootRef.current : null);
    const setRef = (0, _react).useCallback((el)=>{
        if (unobserve.current) {
            unobserve.current();
            unobserve.current = undefined;
        }
        if (isDisabled || visible) return;
        if (el && el.tagName) {
            unobserve.current = observe(el, (isVisible)=>isVisible && setVisible(isVisible)
            , {
                root,
                rootMargin
            });
        }
    }, [
        isDisabled,
        root,
        rootMargin,
        visible
    ]);
    (0, _react).useEffect(()=>{
        if (!hasIntersectionObserver) {
            if (!visible) {
                const idleCallback = (0, _requestIdleCallback).requestIdleCallback(()=>setVisible(true)
                );
                return ()=>(0, _requestIdleCallback).cancelIdleCallback(idleCallback)
                ;
            }
        }
    }, [
        visible
    ]);
    (0, _react).useEffect(()=>{
        if (rootRef) setRoot(rootRef.current);
    }, [
        rootRef
    ]);
    return [
        setRef,
        visible
    ];
}
function observe(element, callback, options) {
    const { id , observer , elements  } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            let index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin
            );
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ''
    };
    let existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin
    );
    let instance;
    if (existing) {
        instance = observers.get(existing);
    } else {
        instance = observers.get(id);
        idList.push(id);
    }
    if (instance) {
        return instance;
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    observers.set(id, instance = {
        id,
        observer,
        elements
    });
    return instance;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 9977:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = withRouter;
var _react = _interopRequireDefault(__webpack_require__(6689));
var _router = __webpack_require__(880);
function withRouter(ComposedComponent) {
    function WithRouterWrapper(props) {
        return /*#__PURE__*/ _react.default.createElement(ComposedComponent, Object.assign({
            router: (0, _router).useRouter()
        }, props));
    }
    WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
    WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
    if (false) {}
    return WithRouterWrapper;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
} //# sourceMappingURL=with-router.js.map


/***/ }),

/***/ 7645:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports["default"] = dynamic;
__webpack_unused_export__ = noSSR;
var _react = _interopRequireDefault(__webpack_require__(6689));
var _loadable = _interopRequireDefault(__webpack_require__(5832));
function dynamic(dynamicOptions, options) {
    let loadableFn = _loadable.default;
    let loadableOptions = {
        // A loading component is not required, so we default it
        loading: ({ error , isLoading , pastDelay  })=>{
            if (!pastDelay) return null;
            if (false) {}
            return null;
        }
    };
    // Support for direct import(), eg: dynamic(import('../hello-world'))
    // Note that this is only kept for the edge case where someone is passing in a promise as first argument
    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
    // To make sure we don't execute the import without rendering first
    if (dynamicOptions instanceof Promise) {
        loadableOptions.loader = ()=>dynamicOptions
        ;
    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))
    } else if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
    } else if (typeof dynamicOptions === 'object') {
        loadableOptions = {
            ...loadableOptions,
            ...dynamicOptions
        };
    }
    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})
    loadableOptions = {
        ...loadableOptions,
        ...options
    };
    const suspenseOptions = loadableOptions;
    // Error if Fizz rendering is not enabled and `suspense` option is set to true
    if ( true && suspenseOptions.suspense) {
        throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);
    }
    if (suspenseOptions.suspense) {
        return loadableFn(suspenseOptions);
    }
    // coming from build/babel/plugins/react-loadable-plugin.js
    if (loadableOptions.loadableGenerated) {
        loadableOptions = {
            ...loadableOptions,
            ...loadableOptions.loadableGenerated
        };
        delete loadableOptions.loadableGenerated;
    }
    // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})
    if (typeof loadableOptions.ssr === 'boolean') {
        if (!loadableOptions.ssr) {
            delete loadableOptions.ssr;
            return noSSR(loadableFn, loadableOptions);
        }
        delete loadableOptions.ssr;
    }
    return loadableFn(loadableOptions);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const isServerSide = "undefined" === 'undefined';
function noSSR(LoadableInitializer, loadableOptions) {
    // Removing webpack and modules means react-loadable won't try preloading
    delete loadableOptions.webpack;
    delete loadableOptions.modules;
    // This check is necessary to prevent react-loadable from initializing on the server
    if (!isServerSide) {
        return LoadableInitializer(loadableOptions);
    }
    const Loading = loadableOptions.loading;
    // This will only be rendered on the server side
    return ()=>/*#__PURE__*/ _react.default.createElement(Loading, {
            error: null,
            isLoading: true,
            pastDelay: false,
            timedOut: false
        })
    ;
} //# sourceMappingURL=dynamic.js.map


/***/ }),

/***/ 1003:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports["default"] = void 0;
var _normalizeTrailingSlash = __webpack_require__(2700);
var _routeLoader = __webpack_require__(2497);
var _isError = _interopRequireWildcard(__webpack_require__(676));
var _denormalizePagePath = __webpack_require__(562);
var _normalizeLocalePath = __webpack_require__(4014);
var _mitt = _interopRequireDefault(__webpack_require__(8020));
var _utils = __webpack_require__(9232);
var _isDynamic = __webpack_require__(1428);
var _parseRelativeUrl = __webpack_require__(1292);
var _querystring = __webpack_require__(979);
var _resolveRewrites = _interopRequireDefault(__webpack_require__(6052));
var _routeMatcher = __webpack_require__(4226);
var _routeRegex = __webpack_require__(5052);
var _getMiddlewareRegex = __webpack_require__(4365);
var _formatUrl = __webpack_require__(3938);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
let detectDomainLocale;
if (false) {}
const basePath =  false || '';
function buildCancellationError() {
    return Object.assign(new Error('Route Cancelled'), {
        cancelled: true
    });
}
function addPathPrefix(path, prefix) {
    if (!path.startsWith('/') || !prefix) {
        return path;
    }
    const pathname = pathNoQueryHash(path);
    return (0, _normalizeTrailingSlash).normalizePathTrailingSlash(`${prefix}${pathname}`) + path.slice(pathname.length);
}
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
function addLocale(path, locale, defaultLocale) {
    if (false) {}
    return path;
}
function delLocale(path, locale) {
    if (false) {}
    return path;
}
function pathNoQueryHash(path) {
    const queryIndex = path.indexOf('?');
    const hashIndex = path.indexOf('#');
    if (queryIndex > -1 || hashIndex > -1) {
        path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
    }
    return path;
}
function hasBasePath(path) {
    path = pathNoQueryHash(path);
    return path === basePath || path.startsWith(basePath + '/');
}
function addBasePath(path) {
    // we only add the basepath on relative urls
    return addPathPrefix(path, basePath);
}
function delBasePath(path) {
    path = path.slice(basePath.length);
    if (!path.startsWith('/')) path = `/${path}`;
    return path;
}
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils).getLocationOrigin();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
    } catch (_) {
        return false;
    }
}
function interpolateAs(route, asPathname, query) {
    let interpolatedRoute = '';
    const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
    const dynamicGroups = dynamicRegex.groups;
    const dynamicMatches = (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // TODO: should this take priority; also need to change in the router.
    query;
    interpolatedRoute = route;
    const params = Object.keys(dynamicGroups);
    if (!params.every((param)=>{
        let value = dynamicMatches[param] || '';
        const { repeat , optional  } = dynamicGroups[param];
        // support single-level catch-all
        // TODO: more robust handling for user-error (passing `/`)
        let replaced = `[${repeat ? '...' : ''}${param}]`;
        if (optional) {
            replaced = `${!value ? '/' : ''}[${replaced}]`;
        }
        if (repeat && !Array.isArray(value)) value = [
            value
        ];
        return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// path delimiter escaped since they are being inserted
        // into the URL and we expect URL encoded segments
        // when parsing dynamic route params
        (segment)=>encodeURIComponent(segment)
        ).join('/') : encodeURIComponent(value)) || '/');
    })) {
        interpolatedRoute = '' // did not satisfy all requirements
        ;
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
    }
    return {
        params,
        result: interpolatedRoute
    };
}
function omitParmsFromQuery(query, params) {
    const filteredQuery = {};
    Object.keys(query).forEach((key)=>{
        if (!params.includes(key)) {
            filteredQuery[key] = query[key];
        }
    });
    return filteredQuery;
}
function resolveHref(router, href, resolveAs) {
    // we use a dummy base url for relative urls
    let base;
    let urlAsString = typeof href === 'string' ? href : (0, _formatUrl).formatWithValidation(href);
    // repeated slashes and backslashes in the URL are considered
    // invalid and will never match a Next.js page/file
    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
    const urlParts = urlAsStringNoProto.split('?');
    if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
        console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
        const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
    }
    // Return because it cannot be routed by the Next.js router
    if (!isLocalURL(urlAsString)) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
    try {
        base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
    } catch (_) {
        // fallback to / for invalid asPath values e.g. //
        base = new URL('/', 'http://n');
    }
    try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
        let interpolatedAs = '';
        if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
            const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
            const { result , params  } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
            if (result) {
                interpolatedAs = (0, _formatUrl).formatWithValidation({
                    pathname: result,
                    hash: finalUrl.hash,
                    query: omitParmsFromQuery(query, params)
                });
            }
        }
        // if the origin didn't change, it means we received a relative href
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
            resolvedHref,
            interpolatedAs || resolvedHref
        ] : resolvedHref;
    } catch (_1) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
}
function stripOrigin(url) {
    const origin = (0, _utils).getLocationOrigin();
    return url.startsWith(origin) ? url.substring(origin.length) : url;
}
function prepareUrlAs(router, url, as) {
    // If url and as provided as an object representation,
    // we'll format them into the string version here.
    let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
    const origin = (0, _utils).getLocationOrigin();
    const hrefHadOrigin = resolvedHref.startsWith(origin);
    const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
    resolvedHref = stripOrigin(resolvedHref);
    resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
    const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
    const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
    return {
        url: preparedUrl,
        as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
    };
}
function resolveDynamicRoute(pathname, pages) {
    const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));
    if (cleanPathname === '/404' || cleanPathname === '/_error') {
        return pathname;
    }
    // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
        // eslint-disable-next-line array-callback-return
        pages.some((page)=>{
            if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
                pathname = page;
                return true;
            }
        });
    }
    return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}
const manualScrollRestoration = (/* unused pure expression or super */ null && ( false && 0));
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');
function fetchRetry(url, attempts, opts) {
    return fetch(url, {
        // Cookies are required to be present for Next.js' SSG "Preview Mode".
        // Cookies may also be required for `getServerSideProps`.
        //
        // > `fetch` won’t send cookies, unless you set the credentials init
        // > option.
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        //
        // > For maximum browser compatibility when it comes to sending &
        // > receiving cookies, always supply the `credentials: 'same-origin'`
        // > option instead of relying on the default.
        // https://github.com/github/fetch#caveats
        credentials: 'same-origin'
    }).then((res)=>{
        if (!res.ok) {
            if (attempts > 1 && res.status >= 500) {
                return fetchRetry(url, attempts - 1, opts);
            }
            if (res.status === 404) {
                return res.json().then((data)=>{
                    if (data.notFound) {
                        return {
                            notFound: SSG_DATA_NOT_FOUND
                        };
                    }
                    throw new Error(`Failed to load static props`);
                });
            }
            throw new Error(`Failed to load static props`);
        }
        return opts.text ? res.text() : res.json();
    });
}
function fetchNextData(dataHref, isServerRender, text, inflightCache, persistCache) {
    const { href: cacheKey  } = new URL(dataHref, window.location.href);
    if (inflightCache[cacheKey] !== undefined) {
        return inflightCache[cacheKey];
    }
    return inflightCache[cacheKey] = fetchRetry(dataHref, isServerRender ? 3 : 1, {
        text
    }).catch((err)=>{
        // We should only trigger a server-side transition if this was caused
        // on a client-side transition. Otherwise, we'd get into an infinite
        // loop.
        if (!isServerRender) {
            (0, _routeLoader).markAssetError(err);
        }
        throw err;
    }).then((data)=>{
        if (!persistCache || "production" !== 'production') {
            delete inflightCache[cacheKey];
        }
        return data;
    }).catch((err)=>{
        delete inflightCache[cacheKey];
        throw err;
    });
}
class Router {
    constructor(pathname1, query1, as1, { initialProps , pageLoader , App , wrapApp , Component , err , subscription , isFallback , locale , locales , defaultLocale , domainLocales , isPreview , isRsc  }){
        // Static Data Cache
        this.sdc = {};
        // In-flight Server Data Requests, for deduping
        this.sdr = {};
        // In-flight middleware preflight requests
        this.sde = {};
        this._idx = 0;
        this.onPopState = (e)=>{
            const state = e.state;
            if (!state) {
                // We get state as undefined for two reasons.
                //  1. With older safari (< 8) and older chrome (< 34)
                //  2. When the URL changed with #
                //
                // In the both cases, we don't need to proceed and change the route.
                // (as it's already changed)
                // But we can simply replace the state with the new changes.
                // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
                // So, doing the following for (1) does no harm.
                const { pathname , query  } = this;
                this.changeState('replaceState', (0, _formatUrl).formatWithValidation({
                    pathname: addBasePath(pathname),
                    query
                }), (0, _utils).getURL());
                return;
            }
            if (!state.__N) {
                return;
            }
            let forcedScroll;
            const { url , as , options , idx  } = state;
            if (false) {}
            this._idx = idx;
            const { pathname  } = (0, _parseRelativeUrl).parseRelativeUrl(url);
            // Make sure we don't re-render on initial load,
            // can be caused by navigating back from an external site
            if (this.isSsr && as === addBasePath(this.asPath) && pathname === addBasePath(this.pathname)) {
                return;
            }
            // If the downstream application returns falsy, return.
            // They will then be responsible for handling the event.
            if (this._bps && !this._bps(state)) {
                return;
            }
            this.change('replaceState', url, as, Object.assign({}, options, {
                shallow: options.shallow && this._shallow,
                locale: options.locale || this.defaultLocale
            }), forcedScroll);
        };
        // represents the current component key
        const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);
        // set up the component cache (by route keys)
        this.components = {};
        // We should not keep the cache, if there's an error
        // Otherwise, this cause issues when when going back and
        // come again to the errored page.
        if (pathname1 !== '/_error') {
            this.components[route] = {
                Component,
                initial: true,
                props: initialProps,
                err,
                __N_SSG: initialProps && initialProps.__N_SSG,
                __N_SSP: initialProps && initialProps.__N_SSP,
                __N_RSC: !!isRsc
            };
        }
        this.components['/_app'] = {
            Component: App,
            styleSheets: []
        };
        // Backwards compat for Router.router.events
        // TODO: Should be remove the following major version as it was never documented
        this.events = Router.events;
        this.pageLoader = pageLoader;
        // if auto prerendered and dynamic route wait to update asPath
        // until after mount to prevent hydration mismatch
        const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;
        this.basePath = basePath;
        this.sub = subscription;
        this.clc = null;
        this._wrapApp = wrapApp;
        // make sure to ignore extra popState in safari on navigating
        // back from external site
        this.isSsr = true;
        this.isLocaleDomain = false;
        this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
        if (false) {}
        this.state = {
            route,
            pathname: pathname1,
            query: query1,
            asPath: autoExportDynamic ? pathname1 : as1,
            isPreview: !!isPreview,
            locale:  false ? 0 : undefined,
            isFallback
        };
        if (false) {}
    }
    reload() {
        window.location.reload();
    }
    /**
   * Go back in history
   */ back() {
        window.history.back();
    }
    /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */ push(url, as, options = {}) {
        if (false) {}
        ({ url , as  } = prepareUrlAs(this, url, as));
        return this.change('pushState', url, as, options);
    }
    /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */ replace(url, as, options = {}) {
        ({ url , as  } = prepareUrlAs(this, url, as));
        return this.change('replaceState', url, as, options);
    }
    async change(method, url, as, options, forcedScroll) {
        if (!isLocalURL(url)) {
            window.location.href = url;
            return false;
        }
        const shouldResolveHref = options._h || options._shouldResolveHref || pathNoQueryHash(url) === pathNoQueryHash(as);
        const nextState = {
            ...this.state
        };
        // for static pages with query params in the URL we delay
        // marking the router ready until after the query is updated
        if (options._h) {
            this.isReady = true;
        }
        const prevLocale = nextState.locale;
        if (false) { var ref; }
        if (!options._h) {
            this.isSsr = false;
        }
        // marking route changes as a navigation start entry
        if (_utils.ST) {
            performance.mark('routeChange');
        }
        const { shallow =false , scroll =true  } = options;
        const routeProps = {
            shallow
        };
        if (this._inFlightRoute) {
            this.abortComponentLoad(this._inFlightRoute, routeProps);
        }
        as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
        const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, nextState.locale);
        this._inFlightRoute = as;
        let localeChange = prevLocale !== nextState.locale;
        // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.
        if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
            nextState.asPath = cleanedAs;
            Router.events.emit('hashChangeStart', as, routeProps);
            // TODO: do we need the resolved href when only a hash change?
            this.changeState(method, url, as, {
                ...options,
                scroll: false
            });
            if (scroll) {
                this.scrollToHash(cleanedAs);
            }
            this.set(nextState, this.components[nextState.route], null);
            Router.events.emit('hashChangeComplete', as, routeProps);
            return true;
        }
        let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
        let { pathname , query  } = parsed;
        // The build manifest needs to be loaded before auto-static dynamic pages
        // get their query parameters to allow ensuring they can be parsed properly
        // when rewritten to
        let pages, rewrites;
        try {
            [pages, { __rewrites: rewrites  }] = await Promise.all([
                this.pageLoader.getPageList(),
                (0, _routeLoader).getClientBuildManifest(),
                this.pageLoader.getMiddlewareList(), 
            ]);
        } catch (err) {
            // If we fail to resolve the page list or client-build manifest, we must
            // do a server-side transition:
            window.location.href = as;
            return false;
        }
        // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url
        if (!this.urlIsNew(cleanedAs) && !localeChange) {
            method = 'replaceState';
        }
        // we need to resolve the as value using rewrites for dynamic SSG
        // pages to allow building the data URL correctly
        let resolvedAs = as;
        // url and as should always be prefixed with basePath by this
        // point by either next/link or router.push/replace so strip the
        // basePath from the pathname to match the pages dir 1-to-1
        pathname = pathname ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname)) : pathname;
        if (shouldResolveHref && pathname !== '/_error') {
            options._shouldResolveHref = true;
            if (false) {} else {
                parsed.pathname = resolveDynamicRoute(pathname, pages);
                if (parsed.pathname !== pathname) {
                    pathname = parsed.pathname;
                    parsed.pathname = addBasePath(pathname);
                    url = (0, _formatUrl).formatWithValidation(parsed);
                }
            }
        }
        if (!isLocalURL(as)) {
            if (false) {}
            window.location.href = as;
            return false;
        }
        resolvedAs = delLocale(delBasePath(resolvedAs), nextState.locale);
        /**
     * If the route update was triggered for client-side hydration and
     * the rendered route is not dynamic do not check the preflight
     * request as it is not necessary.
     */ if ((!options.shallow || options._h === 1) && (options._h !== 1 || (0, _isDynamic).isDynamicRoute((0, _normalizeTrailingSlash).removePathTrailingSlash(pathname)))) {
            const effect = await this._preflightRequest({
                as,
                cache: "production" === 'production',
                pages,
                pathname,
                query,
                locale: nextState.locale,
                isPreview: nextState.isPreview
            });
            if (effect.type === 'rewrite') {
                query = {
                    ...query,
                    ...effect.parsedAs.query
                };
                resolvedAs = effect.asPath;
                pathname = effect.resolvedHref;
                parsed.pathname = effect.resolvedHref;
                url = (0, _formatUrl).formatWithValidation(parsed);
            } else if (effect.type === 'redirect' && effect.newAs) {
                return this.change(method, effect.newUrl, effect.newAs, options);
            } else if (effect.type === 'redirect' && effect.destination) {
                window.location.href = effect.destination;
                return new Promise(()=>{});
            } else if (effect.type === 'refresh' && as !== window.location.pathname) {
                window.location.href = as;
                return new Promise(()=>{});
            }
        }
        const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
        if ((0, _isDynamic).isDynamicRoute(route)) {
            const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
            const asPathname = parsedAs.pathname;
            const routeRegex = (0, _routeRegex).getRouteRegex(route);
            const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
            const shouldInterpolate = route === asPathname;
            const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
            if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
                const missingParams = Object.keys(routeRegex.groups).filter((param)=>!query[param]
                );
                if (missingParams.length > 0) {
                    if (false) {}
                    throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
                }
            } else if (shouldInterpolate) {
                as = (0, _formatUrl).formatWithValidation(Object.assign({}, parsedAs, {
                    pathname: interpolatedAs.result,
                    query: omitParmsFromQuery(query, interpolatedAs.params)
                }));
            } else {
                // Merge params into `query`, overwriting any specified in search
                Object.assign(query, routeMatch);
            }
        }
        Router.events.emit('routeChangeStart', as, routeProps);
        try {
            var ref1, ref2;
            let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps, nextState.locale, nextState.isPreview);
            let { error , props , __N_SSG , __N_SSP  } = routeInfo;
            // handle redirect on client-transition
            if ((__N_SSG || __N_SSP) && props) {
                if (props.pageProps && props.pageProps.__N_REDIRECT) {
                    const destination = props.pageProps.__N_REDIRECT;
                    // check if destination is internal (resolves to a page) and attempt
                    // client-navigation if it is falling back to hard navigation if
                    // it's not
                    if (destination.startsWith('/') && props.pageProps.__N_REDIRECT_BASE_PATH !== false) {
                        const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
                        parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
                        const { url: newUrl , as: newAs  } = prepareUrlAs(this, destination, destination);
                        return this.change(method, newUrl, newAs, options);
                    }
                    window.location.href = destination;
                    return new Promise(()=>{});
                }
                nextState.isPreview = !!props.__N_PREVIEW;
                // handle SSG data 404
                if (props.notFound === SSG_DATA_NOT_FOUND) {
                    let notFoundRoute;
                    try {
                        await this.fetchComponent('/404');
                        notFoundRoute = '/404';
                    } catch (_) {
                        notFoundRoute = '/_error';
                    }
                    routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
                        shallow: false
                    }, nextState.locale, nextState.isPreview);
                }
            }
            Router.events.emit('beforeHistoryChange', as, routeProps);
            this.changeState(method, url, as, options);
            if (options._h && pathname === '/_error' && ((ref1 = self.__NEXT_DATA__.props) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.pageProps) === null || ref2 === void 0 ? void 0 : ref2.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
                // ensure statusCode is still correct for static 500 page
                // when updating query information
                props.pageProps.statusCode = 500;
            }
            // shallow routing is only allowed for same page URL changes.
            const isValidShallowRoute = options.shallow && nextState.route === route;
            var _scroll;
            const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
            const resetScroll = shouldScroll ? {
                x: 0,
                y: 0
            } : null;
            await this.set({
                ...nextState,
                route,
                pathname,
                query,
                asPath: cleanedAs,
                isFallback: false
            }, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch((e)=>{
                if (e.cancelled) error = error || e;
                else throw e;
            });
            if (error) {
                Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
                throw error;
            }
            if (false) {}
            Router.events.emit('routeChangeComplete', as, routeProps);
            return true;
        } catch (err1) {
            if ((0, _isError).default(err1) && err1.cancelled) {
                return false;
            }
            throw err1;
        }
    }
    changeState(method, url, as, options = {}) {
        if (false) {}
        if (method !== 'pushState' || (0, _utils).getURL() !== as) {
            this._shallow = options.shallow;
            window.history[method]({
                url,
                as,
                options,
                __N: true,
                idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
            }, // Passing the empty string here should be safe against future changes to the method.
            // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
            '', as);
        }
    }
    async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
        if (err.cancelled) {
            // bubble up cancellation errors
            throw err;
        }
        if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
            Router.events.emit('routeChangeError', err, as, routeProps);
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as;
            // Changing the URL doesn't block executing the current code path.
            // So let's throw a cancellation error stop the routing logic.
            throw buildCancellationError();
        }
        try {
            let Component;
            let styleSheets;
            let props;
            if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
                ({ page: Component , styleSheets  } = await this.fetchComponent('/_error'));
            }
            const routeInfo = {
                props,
                Component,
                styleSheets,
                err,
                error: err
            };
            if (!routeInfo.props) {
                try {
                    routeInfo.props = await this.getInitialProps(Component, {
                        err,
                        pathname,
                        query
                    });
                } catch (gipErr) {
                    console.error('Error in error page `getInitialProps`: ', gipErr);
                    routeInfo.props = {};
                }
            }
            return routeInfo;
        } catch (routeInfoErr) {
            return this.handleRouteInfoError((0, _isError).default(routeInfoErr) ? routeInfoErr : new Error(routeInfoErr + ''), pathname, query, as, routeProps, true);
        }
    }
    async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps, locale, isPreview) {
        try {
            const existingRouteInfo = this.components[route];
            if (routeProps.shallow && existingRouteInfo && this.route === route) {
                return existingRouteInfo;
            }
            let cachedRouteInfo = undefined;
            // can only use non-initial route info
            // cannot reuse route info in development since it can change after HMR
            if ( true && existingRouteInfo && !('initial' in existingRouteInfo)) {
                cachedRouteInfo = existingRouteInfo;
            }
            const routeInfo = cachedRouteInfo || await this.fetchComponent(route).then((res)=>({
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP,
                    __N_RSC: !!res.mod.__next_rsc__
                })
            );
            const { Component , __N_SSG , __N_SSP , __N_RSC  } = routeInfo;
            if (false) {}
            let dataHref;
            if (__N_SSG || __N_SSP || __N_RSC) {
                dataHref = this.pageLoader.getDataHref({
                    href: (0, _formatUrl).formatWithValidation({
                        pathname,
                        query
                    }),
                    asPath: resolvedAs,
                    ssg: __N_SSG,
                    rsc: __N_RSC,
                    locale
                });
            }
            const props = await this._getData(()=>__N_SSG || __N_SSP ? fetchNextData(dataHref, this.isSsr, false, __N_SSG ? this.sdc : this.sdr, !!__N_SSG && !isPreview) : this.getInitialProps(Component, {
                    pathname,
                    query,
                    asPath: as,
                    locale,
                    locales: this.locales,
                    defaultLocale: this.defaultLocale
                })
            );
            if (__N_RSC) {
                const { fresh , data  } = await this._getData(()=>this._getFlightData(dataHref)
                );
                props.pageProps = Object.assign(props.pageProps, {
                    __flight_serialized__: data,
                    __flight_fresh__: fresh
                });
            }
            routeInfo.props = props;
            this.components[route] = routeInfo;
            return routeInfo;
        } catch (err) {
            return this.handleRouteInfoError((0, _isError).getProperError(err), pathname, query, as, routeProps);
        }
    }
    set(state, data, resetScroll) {
        this.state = state;
        return this.sub(data, this.components['/_app'].Component, resetScroll);
    }
    /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */ beforePopState(cb) {
        this._bps = cb;
    }
    onlyAHashChange(as) {
        if (!this.asPath) return false;
        const [oldUrlNoHash, oldHash] = this.asPath.split('#');
        const [newUrlNoHash, newHash] = as.split('#');
        // Makes sure we scroll to the provided hash if the url/hash are the same
        if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
            return true;
        }
        // If the urls are change, there's more than a hash change
        if (oldUrlNoHash !== newUrlNoHash) {
            return false;
        }
        // If the hash has changed, then it's a hash only change.
        // This check is necessary to handle both the enter and
        // leave hash === '' cases. The identity case falls through
        // and is treated as a next reload.
        return oldHash !== newHash;
    }
    scrollToHash(as) {
        const [, hash = ''] = as.split('#');
        // Scroll to top if the hash is just `#` with no value or `#top`
        // To mirror browsers
        if (hash === '' || hash === 'top') {
            window.scrollTo(0, 0);
            return;
        }
        // First we check if the element by id is found
        const idEl = document.getElementById(hash);
        if (idEl) {
            idEl.scrollIntoView();
            return;
        }
        // If there's no element with the id, we check the `name` property
        // To mirror browsers
        const nameEl = document.getElementsByName(hash)[0];
        if (nameEl) {
            nameEl.scrollIntoView();
        }
    }
    urlIsNew(asPath) {
        return this.asPath !== asPath;
    }
    /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */ async prefetch(url, asPath = url, options = {}) {
        let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
        let { pathname , query  } = parsed;
        if (false) {}
        const pages = await this.pageLoader.getPageList();
        let resolvedAs = asPath;
        if (false) {} else {
            parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);
            if (parsed.pathname !== pathname) {
                pathname = parsed.pathname;
                parsed.pathname = pathname;
                url = (0, _formatUrl).formatWithValidation(parsed);
            }
        }
        // Prefetch is not supported in development mode because it would trigger on-demand-entries
        if (false) {}
        const effects = await this._preflightRequest({
            as: addBasePath(asPath),
            cache: true,
            pages,
            pathname,
            query,
            locale: this.locale,
            isPreview: this.isPreview
        });
        if (effects.type === 'rewrite') {
            parsed.pathname = effects.resolvedHref;
            pathname = effects.resolvedHref;
            query = {
                ...query,
                ...effects.parsedAs.query
            };
            resolvedAs = effects.asPath;
            url = (0, _formatUrl).formatWithValidation(parsed);
        }
        const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
        await Promise.all([
            this.pageLoader._isSsg(route).then((isSsg)=>{
                return isSsg ? fetchNextData(this.pageLoader.getDataHref({
                    href: url,
                    asPath: resolvedAs,
                    ssg: true,
                    locale: typeof options.locale !== 'undefined' ? options.locale : this.locale
                }), false, false, this.sdc, true) : false;
            }),
            this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route), 
        ]);
    }
    async fetchComponent(route) {
        let cancelled = false;
        const cancel = this.clc = ()=>{
            cancelled = true;
        };
        const handleCancelled = ()=>{
            if (cancelled) {
                const error = new Error(`Abort fetching component for route: "${route}"`);
                error.cancelled = true;
                throw error;
            }
            if (cancel === this.clc) {
                this.clc = null;
            }
        };
        try {
            const componentResult = await this.pageLoader.loadPage(route);
            handleCancelled();
            return componentResult;
        } catch (err) {
            handleCancelled();
            throw err;
        }
    }
    _getData(fn) {
        let cancelled = false;
        const cancel = ()=>{
            cancelled = true;
        };
        this.clc = cancel;
        return fn().then((data)=>{
            if (cancel === this.clc) {
                this.clc = null;
            }
            if (cancelled) {
                const err = new Error('Loading initial props cancelled');
                err.cancelled = true;
                throw err;
            }
            return data;
        });
    }
    _getFlightData(dataHref) {
        // Do not cache RSC flight response since it's not a static resource
        return fetchNextData(dataHref, true, true, this.sdc, false).then((serialized)=>{
            return {
                fresh: true,
                data: serialized
            };
        });
    }
    async _preflightRequest(options) {
        const asPathname = pathNoQueryHash(options.as);
        const cleanedAs = delLocale(hasBasePath(asPathname) ? delBasePath(asPathname) : asPathname, options.locale);
        const fns = await this.pageLoader.getMiddlewareList();
        const requiresPreflight = fns.some(([middleware, isSSR])=>{
            return (0, _routeMatcher).getRouteMatcher((0, _getMiddlewareRegex).getMiddlewareRegex(middleware, !isSSR))(cleanedAs);
        });
        if (!requiresPreflight) {
            return {
                type: 'next'
            };
        }
        let preflight;
        try {
            preflight = await this._getPreflightData({
                preflightHref: options.as,
                shouldCache: options.cache,
                isPreview: options.isPreview
            });
        } catch (err) {
            // If preflight request fails, we need to do a hard-navigation.
            return {
                type: 'redirect',
                destination: options.as
            };
        }
        if (preflight.rewrite) {
            // for external rewrites we need to do a hard navigation
            // to the resource
            if (!preflight.rewrite.startsWith('/')) {
                return {
                    type: 'redirect',
                    destination: options.as
                };
            }
            const parsed = (0, _parseRelativeUrl).parseRelativeUrl((0, _normalizeLocalePath).normalizeLocalePath(hasBasePath(preflight.rewrite) ? delBasePath(preflight.rewrite) : preflight.rewrite, this.locales).pathname);
            const fsPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash(parsed.pathname);
            let matchedPage;
            let resolvedHref;
            if (options.pages.includes(fsPathname)) {
                matchedPage = true;
                resolvedHref = fsPathname;
            } else {
                resolvedHref = resolveDynamicRoute(fsPathname, options.pages);
                if (resolvedHref !== parsed.pathname && options.pages.includes(resolvedHref)) {
                    matchedPage = true;
                }
            }
            return {
                type: 'rewrite',
                asPath: parsed.pathname,
                parsedAs: parsed,
                matchedPage,
                resolvedHref
            };
        }
        if (preflight.redirect) {
            if (preflight.redirect.startsWith('/')) {
                const cleanRedirect = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _normalizeLocalePath).normalizeLocalePath(hasBasePath(preflight.redirect) ? delBasePath(preflight.redirect) : preflight.redirect, this.locales).pathname);
                const { url: newUrl , as: newAs  } = prepareUrlAs(this, cleanRedirect, cleanRedirect);
                return {
                    type: 'redirect',
                    newUrl,
                    newAs
                };
            }
            return {
                type: 'redirect',
                destination: preflight.redirect
            };
        }
        // For SSR requests, they will be handled like normal pages.
        if (preflight.refresh && !preflight.ssr) {
            return {
                type: 'refresh'
            };
        }
        return {
            type: 'next'
        };
    }
    _getPreflightData(params) {
        const { preflightHref , shouldCache =false , isPreview  } = params;
        const { href: cacheKey  } = new URL(preflightHref, window.location.href);
        if ( true && !isPreview && shouldCache && this.sde[cacheKey]) {
            return Promise.resolve(this.sde[cacheKey]);
        }
        return fetch(preflightHref, {
            method: 'HEAD',
            credentials: 'same-origin',
            headers: {
                'x-middleware-preflight': '1'
            }
        }).then((res)=>{
            if (!res.ok) {
                throw new Error(`Failed to preflight request`);
            }
            return {
                cache: res.headers.get('x-middleware-cache'),
                redirect: res.headers.get('Location'),
                refresh: res.headers.has('x-middleware-refresh'),
                rewrite: res.headers.get('x-middleware-rewrite'),
                ssr: !!res.headers.get('x-middleware-ssr')
            };
        }).then((data)=>{
            if (shouldCache && data.cache !== 'no-cache') {
                this.sde[cacheKey] = data;
            }
            return data;
        }).catch((err)=>{
            delete this.sde[cacheKey];
            throw err;
        });
    }
    getInitialProps(Component, ctx) {
        const { Component: App  } = this.components['/_app'];
        const AppTree = this._wrapApp(App);
        ctx.AppTree = AppTree;
        return (0, _utils).loadGetInitialProps(App, {
            AppTree,
            Component,
            router: this,
            ctx
        });
    }
    abortComponentLoad(as, routeProps) {
        if (this.clc) {
            Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
            this.clc();
            this.clc = null;
        }
    }
    get route() {
        return this.state.route;
    }
    get pathname() {
        return this.state.pathname;
    }
    get query() {
        return this.state.query;
    }
    get asPath() {
        return this.state.asPath;
    }
    get locale() {
        return this.state.locale;
    }
    get isFallback() {
        return this.state.isFallback;
    }
    get isPreview() {
        return this.state.isPreview;
    }
}
exports["default"] = Router;
Router.events = (0, _mitt).default(); //# sourceMappingURL=router.js.map


/***/ }),

/***/ 5152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(7645)


/***/ }),

/***/ 5675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(9749)


/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1551)


/***/ }),

/***/ 7141:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const defer_to_connect_1 = __webpack_require__(6325);
const util_1 = __webpack_require__(6464);
const nodejsMajorVersion = Number(process.versions.node.split('.')[0]);
const timer = (request) => {
    if (request.timings) {
        return request.timings;
    }
    const timings = {
        start: Date.now(),
        socket: undefined,
        lookup: undefined,
        connect: undefined,
        secureConnect: undefined,
        upload: undefined,
        response: undefined,
        end: undefined,
        error: undefined,
        abort: undefined,
        phases: {
            wait: undefined,
            dns: undefined,
            tcp: undefined,
            tls: undefined,
            request: undefined,
            firstByte: undefined,
            download: undefined,
            total: undefined
        }
    };
    request.timings = timings;
    const handleError = (origin) => {
        const emit = origin.emit.bind(origin);
        origin.emit = (event, ...args) => {
            // Catches the `error` event
            if (event === 'error') {
                timings.error = Date.now();
                timings.phases.total = timings.error - timings.start;
                origin.emit = emit;
            }
            // Saves the original behavior
            return emit(event, ...args);
        };
    };
    handleError(request);
    const onAbort = () => {
        timings.abort = Date.now();
        // Let the `end` response event be responsible for setting the total phase,
        // unless the Node.js major version is >= 13.
        if (!timings.response || nodejsMajorVersion >= 13) {
            timings.phases.total = Date.now() - timings.start;
        }
    };
    request.prependOnceListener('abort', onAbort);
    const onSocket = (socket) => {
        timings.socket = Date.now();
        timings.phases.wait = timings.socket - timings.start;
        if (util_1.types.isProxy(socket)) {
            return;
        }
        const lookupListener = () => {
            timings.lookup = Date.now();
            timings.phases.dns = timings.lookup - timings.socket;
        };
        socket.prependOnceListener('lookup', lookupListener);
        defer_to_connect_1.default(socket, {
            connect: () => {
                timings.connect = Date.now();
                if (timings.lookup === undefined) {
                    socket.removeListener('lookup', lookupListener);
                    timings.lookup = timings.connect;
                    timings.phases.dns = timings.lookup - timings.socket;
                }
                timings.phases.tcp = timings.connect - timings.lookup;
                // This callback is called before flushing any data,
                // so we don't need to set `timings.phases.request` here.
            },
            secureConnect: () => {
                timings.secureConnect = Date.now();
                timings.phases.tls = timings.secureConnect - timings.connect;
            }
        });
    };
    if (request.socket) {
        onSocket(request.socket);
    }
    else {
        request.prependOnceListener('socket', onSocket);
    }
    const onUpload = () => {
        var _a;
        timings.upload = Date.now();
        timings.phases.request = timings.upload - ((_a = timings.secureConnect) !== null && _a !== void 0 ? _a : timings.connect);
    };
    const writableFinished = () => {
        if (typeof request.writableFinished === 'boolean') {
            return request.writableFinished;
        }
        // Node.js doesn't have `request.writableFinished` property
        return request.finished && request.outputSize === 0 && (!request.socket || request.socket.writableLength === 0);
    };
    if (writableFinished()) {
        onUpload();
    }
    else {
        request.prependOnceListener('finish', onUpload);
    }
    request.prependOnceListener('response', (response) => {
        timings.response = Date.now();
        timings.phases.firstByte = timings.response - timings.upload;
        response.timings = timings;
        handleError(response);
        response.prependOnceListener('end', () => {
            timings.end = Date.now();
            timings.phases.download = timings.end - timings.response;
            timings.phases.total = timings.end - timings.start;
        });
        response.prependOnceListener('aborted', onAbort);
    });
    return timings;
};
exports["default"] = timer;
// For CommonJS default export support
module.exports = timer;
module.exports["default"] = timer;


/***/ }),

/***/ 1599:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const {
	V4MAPPED,
	ADDRCONFIG,
	ALL,
	promises: {
		Resolver: AsyncResolver
	},
	lookup: dnsLookup
} = __webpack_require__(9523);
const {promisify} = __webpack_require__(6464);
const os = __webpack_require__(2037);

const kCacheableLookupCreateConnection = Symbol('cacheableLookupCreateConnection');
const kCacheableLookupInstance = Symbol('cacheableLookupInstance');
const kExpires = Symbol('expires');

const supportsALL = typeof ALL === 'number';

const verifyAgent = agent => {
	if (!(agent && typeof agent.createConnection === 'function')) {
		throw new Error('Expected an Agent instance as the first argument');
	}
};

const map4to6 = entries => {
	for (const entry of entries) {
		if (entry.family === 6) {
			continue;
		}

		entry.address = `::ffff:${entry.address}`;
		entry.family = 6;
	}
};

const getIfaceInfo = () => {
	let has4 = false;
	let has6 = false;

	for (const device of Object.values(os.networkInterfaces())) {
		for (const iface of device) {
			if (iface.internal) {
				continue;
			}

			if (iface.family === 'IPv6') {
				has6 = true;
			} else {
				has4 = true;
			}

			if (has4 && has6) {
				return {has4, has6};
			}
		}
	}

	return {has4, has6};
};

const isIterable = map => {
	return Symbol.iterator in map;
};

const ttl = {ttl: true};
const all = {all: true};

class CacheableLookup {
	constructor({
		cache = new Map(),
		maxTtl = Infinity,
		fallbackDuration = 3600,
		errorTtl = 0.15,
		resolver = new AsyncResolver(),
		lookup = dnsLookup
	} = {}) {
		this.maxTtl = maxTtl;
		this.errorTtl = errorTtl;

		this._cache = cache;
		this._resolver = resolver;
		this._dnsLookup = promisify(lookup);

		if (this._resolver instanceof AsyncResolver) {
			this._resolve4 = this._resolver.resolve4.bind(this._resolver);
			this._resolve6 = this._resolver.resolve6.bind(this._resolver);
		} else {
			this._resolve4 = promisify(this._resolver.resolve4.bind(this._resolver));
			this._resolve6 = promisify(this._resolver.resolve6.bind(this._resolver));
		}

		this._iface = getIfaceInfo();

		this._pending = {};
		this._nextRemovalTime = false;
		this._hostnamesToFallback = new Set();

		if (fallbackDuration < 1) {
			this._fallback = false;
		} else {
			this._fallback = true;

			const interval = setInterval(() => {
				this._hostnamesToFallback.clear();
			}, fallbackDuration * 1000);

			/* istanbul ignore next: There is no `interval.unref()` when running inside an Electron renderer */
			if (interval.unref) {
				interval.unref();
			}
		}

		this.lookup = this.lookup.bind(this);
		this.lookupAsync = this.lookupAsync.bind(this);
	}

	set servers(servers) {
		this.clear();

		this._resolver.setServers(servers);
	}

	get servers() {
		return this._resolver.getServers();
	}

	lookup(hostname, options, callback) {
		if (typeof options === 'function') {
			callback = options;
			options = {};
		} else if (typeof options === 'number') {
			options = {
				family: options
			};
		}

		if (!callback) {
			throw new Error('Callback must be a function.');
		}

		// eslint-disable-next-line promise/prefer-await-to-then
		this.lookupAsync(hostname, options).then(result => {
			if (options.all) {
				callback(null, result);
			} else {
				callback(null, result.address, result.family, result.expires, result.ttl);
			}
		}, callback);
	}

	async lookupAsync(hostname, options = {}) {
		if (typeof options === 'number') {
			options = {
				family: options
			};
		}

		let cached = await this.query(hostname);

		if (options.family === 6) {
			const filtered = cached.filter(entry => entry.family === 6);

			if (options.hints & V4MAPPED) {
				if ((supportsALL && options.hints & ALL) || filtered.length === 0) {
					map4to6(cached);
				} else {
					cached = filtered;
				}
			} else {
				cached = filtered;
			}
		} else if (options.family === 4) {
			cached = cached.filter(entry => entry.family === 4);
		}

		if (options.hints & ADDRCONFIG) {
			const {_iface} = this;
			cached = cached.filter(entry => entry.family === 6 ? _iface.has6 : _iface.has4);
		}

		if (cached.length === 0) {
			const error = new Error(`cacheableLookup ENOTFOUND ${hostname}`);
			error.code = 'ENOTFOUND';
			error.hostname = hostname;

			throw error;
		}

		if (options.all) {
			return cached;
		}

		return cached[0];
	}

	async query(hostname) {
		let cached = await this._cache.get(hostname);

		if (!cached) {
			const pending = this._pending[hostname];

			if (pending) {
				cached = await pending;
			} else {
				const newPromise = this.queryAndCache(hostname);
				this._pending[hostname] = newPromise;

				try {
					cached = await newPromise;
				} finally {
					delete this._pending[hostname];
				}
			}
		}

		cached = cached.map(entry => {
			return {...entry};
		});

		return cached;
	}

	async _resolve(hostname) {
		const wrap = async promise => {
			try {
				return await promise;
			} catch (error) {
				if (error.code === 'ENODATA' || error.code === 'ENOTFOUND') {
					return [];
				}

				throw error;
			}
		};

		// ANY is unsafe as it doesn't trigger new queries in the underlying server.
		const [A, AAAA] = await Promise.all([
			this._resolve4(hostname, ttl),
			this._resolve6(hostname, ttl)
		].map(promise => wrap(promise)));

		let aTtl = 0;
		let aaaaTtl = 0;
		let cacheTtl = 0;

		const now = Date.now();

		for (const entry of A) {
			entry.family = 4;
			entry.expires = now + (entry.ttl * 1000);

			aTtl = Math.max(aTtl, entry.ttl);
		}

		for (const entry of AAAA) {
			entry.family = 6;
			entry.expires = now + (entry.ttl * 1000);

			aaaaTtl = Math.max(aaaaTtl, entry.ttl);
		}

		if (A.length > 0) {
			if (AAAA.length > 0) {
				cacheTtl = Math.min(aTtl, aaaaTtl);
			} else {
				cacheTtl = aTtl;
			}
		} else {
			cacheTtl = aaaaTtl;
		}

		return {
			entries: [
				...A,
				...AAAA
			],
			cacheTtl
		};
	}

	async _lookup(hostname) {
		try {
			const entries = await this._dnsLookup(hostname, {
				all: true
			});

			return {
				entries,
				cacheTtl: 0
			};
		} catch (_) {
			return {
				entries: [],
				cacheTtl: 0
			};
		}
	}

	async _set(hostname, data, cacheTtl) {
		if (this.maxTtl > 0 && cacheTtl > 0) {
			cacheTtl = Math.min(cacheTtl, this.maxTtl) * 1000;
			data[kExpires] = Date.now() + cacheTtl;

			try {
				await this._cache.set(hostname, data, cacheTtl);
			} catch (error) {
				this.lookupAsync = async () => {
					const cacheError = new Error('Cache Error. Please recreate the CacheableLookup instance.');
					cacheError.cause = error;

					throw cacheError;
				};
			}

			if (isIterable(this._cache)) {
				this._tick(cacheTtl);
			}
		}
	}

	async queryAndCache(hostname) {
		if (this._hostnamesToFallback.has(hostname)) {
			return this._dnsLookup(hostname, all);
		}

		let query = await this._resolve(hostname);

		if (query.entries.length === 0 && this._fallback) {
			query = await this._lookup(hostname);

			if (query.entries.length !== 0) {
				// Use `dns.lookup(...)` for that particular hostname
				this._hostnamesToFallback.add(hostname);
			}
		}

		const cacheTtl = query.entries.length === 0 ? this.errorTtl : query.cacheTtl;
		await this._set(hostname, query.entries, cacheTtl);

		return query.entries;
	}

	_tick(ms) {
		const nextRemovalTime = this._nextRemovalTime;

		if (!nextRemovalTime || ms < nextRemovalTime) {
			clearTimeout(this._removalTimeout);

			this._nextRemovalTime = ms;

			this._removalTimeout = setTimeout(() => {
				this._nextRemovalTime = false;

				let nextExpiry = Infinity;

				const now = Date.now();

				for (const [hostname, entries] of this._cache) {
					const expires = entries[kExpires];

					if (now >= expires) {
						this._cache.delete(hostname);
					} else if (expires < nextExpiry) {
						nextExpiry = expires;
					}
				}

				if (nextExpiry !== Infinity) {
					this._tick(nextExpiry - now);
				}
			}, ms);

			/* istanbul ignore next: There is no `timeout.unref()` when running inside an Electron renderer */
			if (this._removalTimeout.unref) {
				this._removalTimeout.unref();
			}
		}
	}

	install(agent) {
		verifyAgent(agent);

		if (kCacheableLookupCreateConnection in agent) {
			throw new Error('CacheableLookup has been already installed');
		}

		agent[kCacheableLookupCreateConnection] = agent.createConnection;
		agent[kCacheableLookupInstance] = this;

		agent.createConnection = (options, callback) => {
			if (!('lookup' in options)) {
				options.lookup = this.lookup;
			}

			return agent[kCacheableLookupCreateConnection](options, callback);
		};
	}

	uninstall(agent) {
		verifyAgent(agent);

		if (agent[kCacheableLookupCreateConnection]) {
			if (agent[kCacheableLookupInstance] !== this) {
				throw new Error('The agent is not owned by this CacheableLookup instance');
			}

			agent.createConnection = agent[kCacheableLookupCreateConnection];

			delete agent[kCacheableLookupCreateConnection];
			delete agent[kCacheableLookupInstance];
		}
	}

	updateInterfaceInfo() {
		const {_iface} = this;

		this._iface = getIfaceInfo();

		if ((_iface.has4 && !this._iface.has4) || (_iface.has6 && !this._iface.has6)) {
			this._cache.clear();
		}
	}

	clear(hostname) {
		if (hostname) {
			this._cache.delete(hostname);
			return;
		}

		this._cache.clear();
	}
}

module.exports = CacheableLookup;
module.exports["default"] = CacheableLookup;


/***/ }),

/***/ 5608:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const types_1 = __webpack_require__(5507);
function createRejection(error, ...beforeErrorGroups) {
    const promise = (async () => {
        if (error instanceof types_1.RequestError) {
            try {
                for (const hooks of beforeErrorGroups) {
                    if (hooks) {
                        for (const hook of hooks) {
                            // eslint-disable-next-line no-await-in-loop
                            error = await hook(error);
                        }
                    }
                }
            }
            catch (error_) {
                error = error_;
            }
        }
        throw error;
    })();
    const returnPromise = () => promise;
    promise.json = returnPromise;
    promise.text = returnPromise;
    promise.buffer = returnPromise;
    promise.on = returnPromise;
    return promise;
}
exports["default"] = createRejection;


/***/ }),

/***/ 6249:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const events_1 = __webpack_require__(1239);
const is_1 = __webpack_require__(5011);
const PCancelable = __webpack_require__(4997);
const types_1 = __webpack_require__(5507);
const parse_body_1 = __webpack_require__(5666);
const core_1 = __webpack_require__(9826);
const proxy_events_1 = __webpack_require__(271);
const get_buffer_1 = __webpack_require__(2347);
const is_response_ok_1 = __webpack_require__(9581);
const proxiedRequestEvents = [
    'request',
    'response',
    'redirect',
    'uploadProgress',
    'downloadProgress'
];
function asPromise(normalizedOptions) {
    let globalRequest;
    let globalResponse;
    const emitter = new events_1.EventEmitter();
    const promise = new PCancelable((resolve, reject, onCancel) => {
        const makeRequest = (retryCount) => {
            const request = new core_1.default(undefined, normalizedOptions);
            request.retryCount = retryCount;
            request._noPipe = true;
            onCancel(() => request.destroy());
            onCancel.shouldReject = false;
            onCancel(() => reject(new types_1.CancelError(request)));
            globalRequest = request;
            request.once('response', async (response) => {
                var _a;
                response.retryCount = retryCount;
                if (response.request.aborted) {
                    // Canceled while downloading - will throw a `CancelError` or `TimeoutError` error
                    return;
                }
                // Download body
                let rawBody;
                try {
                    rawBody = await get_buffer_1.default(request);
                    response.rawBody = rawBody;
                }
                catch (_b) {
                    // The same error is caught below.
                    // See request.once('error')
                    return;
                }
                if (request._isAboutToError) {
                    return;
                }
                // Parse body
                const contentEncoding = ((_a = response.headers['content-encoding']) !== null && _a !== void 0 ? _a : '').toLowerCase();
                const isCompressed = ['gzip', 'deflate', 'br'].includes(contentEncoding);
                const { options } = request;
                if (isCompressed && !options.decompress) {
                    response.body = rawBody;
                }
                else {
                    try {
                        response.body = parse_body_1.default(response, options.responseType, options.parseJson, options.encoding);
                    }
                    catch (error) {
                        // Fallback to `utf8`
                        response.body = rawBody.toString();
                        if (is_response_ok_1.isResponseOk(response)) {
                            request._beforeError(error);
                            return;
                        }
                    }
                }
                try {
                    for (const [index, hook] of options.hooks.afterResponse.entries()) {
                        // @ts-expect-error TS doesn't notice that CancelableRequest is a Promise
                        // eslint-disable-next-line no-await-in-loop
                        response = await hook(response, async (updatedOptions) => {
                            const typedOptions = core_1.default.normalizeArguments(undefined, {
                                ...updatedOptions,
                                retry: {
                                    calculateDelay: () => 0
                                },
                                throwHttpErrors: false,
                                resolveBodyOnly: false
                            }, options);
                            // Remove any further hooks for that request, because we'll call them anyway.
                            // The loop continues. We don't want duplicates (asPromise recursion).
                            typedOptions.hooks.afterResponse = typedOptions.hooks.afterResponse.slice(0, index);
                            for (const hook of typedOptions.hooks.beforeRetry) {
                                // eslint-disable-next-line no-await-in-loop
                                await hook(typedOptions);
                            }
                            const promise = asPromise(typedOptions);
                            onCancel(() => {
                                promise.catch(() => { });
                                promise.cancel();
                            });
                            return promise;
                        });
                    }
                }
                catch (error) {
                    request._beforeError(new types_1.RequestError(error.message, error, request));
                    return;
                }
                if (!is_response_ok_1.isResponseOk(response)) {
                    request._beforeError(new types_1.HTTPError(response));
                    return;
                }
                globalResponse = response;
                resolve(request.options.resolveBodyOnly ? response.body : response);
            });
            const onError = (error) => {
                if (promise.isCanceled) {
                    return;
                }
                const { options } = request;
                if (error instanceof types_1.HTTPError && !options.throwHttpErrors) {
                    const { response } = error;
                    resolve(request.options.resolveBodyOnly ? response.body : response);
                    return;
                }
                reject(error);
            };
            request.once('error', onError);
            const previousBody = request.options.body;
            request.once('retry', (newRetryCount, error) => {
                var _a, _b;
                if (previousBody === ((_a = error.request) === null || _a === void 0 ? void 0 : _a.options.body) && is_1.default.nodeStream((_b = error.request) === null || _b === void 0 ? void 0 : _b.options.body)) {
                    onError(error);
                    return;
                }
                makeRequest(newRetryCount);
            });
            proxy_events_1.default(request, emitter, proxiedRequestEvents);
        };
        makeRequest(0);
    });
    promise.on = (event, fn) => {
        emitter.on(event, fn);
        return promise;
    };
    const shortcut = (responseType) => {
        const newPromise = (async () => {
            // Wait until downloading has ended
            await promise;
            const { options } = globalResponse.request;
            return parse_body_1.default(globalResponse, responseType, options.parseJson, options.encoding);
        })();
        Object.defineProperties(newPromise, Object.getOwnPropertyDescriptors(promise));
        return newPromise;
    };
    promise.json = () => {
        const { headers } = globalRequest.options;
        if (!globalRequest.writableFinished && headers.accept === undefined) {
            headers.accept = 'application/json';
        }
        return shortcut('json');
    };
    promise.buffer = () => shortcut('buffer');
    promise.text = () => shortcut('text');
    return promise;
}
exports["default"] = asPromise;
__exportStar(__webpack_require__(5507), exports);


/***/ }),

/***/ 6276:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const is_1 = __webpack_require__(5011);
const normalizeArguments = (options, defaults) => {
    if (is_1.default.null_(options.encoding)) {
        throw new TypeError('To get a Buffer, set `options.responseType` to `buffer` instead');
    }
    is_1.assert.any([is_1.default.string, is_1.default.undefined], options.encoding);
    is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.resolveBodyOnly);
    is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.methodRewriting);
    is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.isStream);
    is_1.assert.any([is_1.default.string, is_1.default.undefined], options.responseType);
    // `options.responseType`
    if (options.responseType === undefined) {
        options.responseType = 'text';
    }
    // `options.retry`
    const { retry } = options;
    if (defaults) {
        options.retry = { ...defaults.retry };
    }
    else {
        options.retry = {
            calculateDelay: retryObject => retryObject.computedValue,
            limit: 0,
            methods: [],
            statusCodes: [],
            errorCodes: [],
            maxRetryAfter: undefined
        };
    }
    if (is_1.default.object(retry)) {
        options.retry = {
            ...options.retry,
            ...retry
        };
        options.retry.methods = [...new Set(options.retry.methods.map(method => method.toUpperCase()))];
        options.retry.statusCodes = [...new Set(options.retry.statusCodes)];
        options.retry.errorCodes = [...new Set(options.retry.errorCodes)];
    }
    else if (is_1.default.number(retry)) {
        options.retry.limit = retry;
    }
    if (is_1.default.undefined(options.retry.maxRetryAfter)) {
        options.retry.maxRetryAfter = Math.min(
        // TypeScript is not smart enough to handle `.filter(x => is.number(x))`.
        // eslint-disable-next-line unicorn/no-fn-reference-in-iterator
        ...[options.timeout.request, options.timeout.connect].filter(is_1.default.number));
    }
    // `options.pagination`
    if (is_1.default.object(options.pagination)) {
        if (defaults) {
            options.pagination = {
                ...defaults.pagination,
                ...options.pagination
            };
        }
        const { pagination } = options;
        if (!is_1.default.function_(pagination.transform)) {
            throw new Error('`options.pagination.transform` must be implemented');
        }
        if (!is_1.default.function_(pagination.shouldContinue)) {
            throw new Error('`options.pagination.shouldContinue` must be implemented');
        }
        if (!is_1.default.function_(pagination.filter)) {
            throw new TypeError('`options.pagination.filter` must be implemented');
        }
        if (!is_1.default.function_(pagination.paginate)) {
            throw new Error('`options.pagination.paginate` must be implemented');
        }
    }
    // JSON mode
    if (options.responseType === 'json' && options.headers.accept === undefined) {
        options.headers.accept = 'application/json';
    }
    return options;
};
exports["default"] = normalizeArguments;


/***/ }),

/***/ 5666:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const types_1 = __webpack_require__(5507);
const parseBody = (response, responseType, parseJson, encoding) => {
    const { rawBody } = response;
    try {
        if (responseType === 'text') {
            return rawBody.toString(encoding);
        }
        if (responseType === 'json') {
            return rawBody.length === 0 ? '' : parseJson(rawBody.toString());
        }
        if (responseType === 'buffer') {
            return rawBody;
        }
        throw new types_1.ParseError({
            message: `Unknown body type '${responseType}'`,
            name: 'Error'
        }, response);
    }
    catch (error) {
        throw new types_1.ParseError(error, response);
    }
};
exports["default"] = parseBody;


/***/ }),

/***/ 5507:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CancelError = exports.ParseError = void 0;
const core_1 = __webpack_require__(9826);
/**
An error to be thrown when server response code is 2xx, and parsing body fails.
Includes a `response` property.
*/
class ParseError extends core_1.RequestError {
    constructor(error, response) {
        const { options } = response.request;
        super(`${error.message} in "${options.url.toString()}"`, error, response.request);
        this.name = 'ParseError';
        this.code = this.code === 'ERR_GOT_REQUEST_ERROR' ? 'ERR_BODY_PARSE_FAILURE' : this.code;
    }
}
exports.ParseError = ParseError;
/**
An error to be thrown when the request is aborted with `.cancel()`.
*/
class CancelError extends core_1.RequestError {
    constructor(request) {
        super('Promise was canceled', {}, request);
        this.name = 'CancelError';
        this.code = 'ERR_CANCELED';
    }
    get isCanceled() {
        return true;
    }
}
exports.CancelError = CancelError;
__exportStar(__webpack_require__(9826), exports);


/***/ }),

/***/ 5525:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.retryAfterStatusCodes = void 0;
exports.retryAfterStatusCodes = new Set([413, 429, 503]);
const calculateRetryDelay = ({ attemptCount, retryOptions, error, retryAfter }) => {
    if (attemptCount > retryOptions.limit) {
        return 0;
    }
    const hasMethod = retryOptions.methods.includes(error.options.method);
    const hasErrorCode = retryOptions.errorCodes.includes(error.code);
    const hasStatusCode = error.response && retryOptions.statusCodes.includes(error.response.statusCode);
    if (!hasMethod || (!hasErrorCode && !hasStatusCode)) {
        return 0;
    }
    if (error.response) {
        if (retryAfter) {
            if (retryOptions.maxRetryAfter === undefined || retryAfter > retryOptions.maxRetryAfter) {
                return 0;
            }
            return retryAfter;
        }
        if (error.response.statusCode === 413) {
            return 0;
        }
    }
    const noise = Math.random() * 100;
    return ((2 ** (attemptCount - 1)) * 1000) + noise;
};
exports["default"] = calculateRetryDelay;


/***/ }),

/***/ 9826:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnsupportedProtocolError = exports.ReadError = exports.TimeoutError = exports.UploadError = exports.CacheError = exports.HTTPError = exports.MaxRedirectsError = exports.RequestError = exports.setNonEnumerableProperties = exports.knownHookEvents = exports.withoutBody = exports.kIsNormalizedAlready = void 0;
const util_1 = __webpack_require__(6464);
const stream_1 = __webpack_require__(2781);
const fs_1 = __webpack_require__(7147);
const url_1 = __webpack_require__(7310);
const http = __webpack_require__(3685);
const http_1 = __webpack_require__(3685);
const https = __webpack_require__(5687);
const http_timer_1 = __webpack_require__(7141);
const cacheable_lookup_1 = __webpack_require__(1599);
const CacheableRequest = __webpack_require__(3711);
const decompressResponse = __webpack_require__(4009);
// @ts-expect-error Missing types
const http2wrapper = __webpack_require__(9451);
const lowercaseKeys = __webpack_require__(2033);
const is_1 = __webpack_require__(5011);
const get_body_size_1 = __webpack_require__(6398);
const is_form_data_1 = __webpack_require__(9090);
const proxy_events_1 = __webpack_require__(271);
const timed_out_1 = __webpack_require__(7890);
const url_to_options_1 = __webpack_require__(5284);
const options_to_url_1 = __webpack_require__(6982);
const weakable_map_1 = __webpack_require__(633);
const get_buffer_1 = __webpack_require__(2347);
const dns_ip_version_1 = __webpack_require__(690);
const is_response_ok_1 = __webpack_require__(9581);
const deprecation_warning_1 = __webpack_require__(7931);
const normalize_arguments_1 = __webpack_require__(6276);
const calculate_retry_delay_1 = __webpack_require__(5525);
let globalDnsCache;
const kRequest = Symbol('request');
const kResponse = Symbol('response');
const kResponseSize = Symbol('responseSize');
const kDownloadedSize = Symbol('downloadedSize');
const kBodySize = Symbol('bodySize');
const kUploadedSize = Symbol('uploadedSize');
const kServerResponsesPiped = Symbol('serverResponsesPiped');
const kUnproxyEvents = Symbol('unproxyEvents');
const kIsFromCache = Symbol('isFromCache');
const kCancelTimeouts = Symbol('cancelTimeouts');
const kStartedReading = Symbol('startedReading');
const kStopReading = Symbol('stopReading');
const kTriggerRead = Symbol('triggerRead');
const kBody = Symbol('body');
const kJobs = Symbol('jobs');
const kOriginalResponse = Symbol('originalResponse');
const kRetryTimeout = Symbol('retryTimeout');
exports.kIsNormalizedAlready = Symbol('isNormalizedAlready');
const supportsBrotli = is_1.default.string(process.versions.brotli);
exports.withoutBody = new Set(['GET', 'HEAD']);
exports.knownHookEvents = [
    'init',
    'beforeRequest',
    'beforeRedirect',
    'beforeError',
    'beforeRetry',
    // Promise-Only
    'afterResponse'
];
function validateSearchParameters(searchParameters) {
    // eslint-disable-next-line guard-for-in
    for (const key in searchParameters) {
        const value = searchParameters[key];
        if (!is_1.default.string(value) && !is_1.default.number(value) && !is_1.default.boolean(value) && !is_1.default.null_(value) && !is_1.default.undefined(value)) {
            throw new TypeError(`The \`searchParams\` value '${String(value)}' must be a string, number, boolean or null`);
        }
    }
}
function isClientRequest(clientRequest) {
    return is_1.default.object(clientRequest) && !('statusCode' in clientRequest);
}
const cacheableStore = new weakable_map_1.default();
const waitForOpenFile = async (file) => new Promise((resolve, reject) => {
    const onError = (error) => {
        reject(error);
    };
    // Node.js 12 has incomplete types
    if (!file.pending) {
        resolve();
    }
    file.once('error', onError);
    file.once('ready', () => {
        file.off('error', onError);
        resolve();
    });
});
const redirectCodes = new Set([300, 301, 302, 303, 304, 307, 308]);
const nonEnumerableProperties = [
    'context',
    'body',
    'json',
    'form'
];
exports.setNonEnumerableProperties = (sources, to) => {
    // Non enumerable properties shall not be merged
    const properties = {};
    for (const source of sources) {
        if (!source) {
            continue;
        }
        for (const name of nonEnumerableProperties) {
            if (!(name in source)) {
                continue;
            }
            properties[name] = {
                writable: true,
                configurable: true,
                enumerable: false,
                // @ts-expect-error TS doesn't see the check above
                value: source[name]
            };
        }
    }
    Object.defineProperties(to, properties);
};
/**
An error to be thrown when a request fails.
Contains a `code` property with error class code, like `ECONNREFUSED`.
*/
class RequestError extends Error {
    constructor(message, error, self) {
        var _a, _b;
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = 'RequestError';
        this.code = (_a = error.code) !== null && _a !== void 0 ? _a : 'ERR_GOT_REQUEST_ERROR';
        if (self instanceof Request) {
            Object.defineProperty(this, 'request', {
                enumerable: false,
                value: self
            });
            Object.defineProperty(this, 'response', {
                enumerable: false,
                value: self[kResponse]
            });
            Object.defineProperty(this, 'options', {
                // This fails because of TS 3.7.2 useDefineForClassFields
                // Ref: https://github.com/microsoft/TypeScript/issues/34972
                enumerable: false,
                value: self.options
            });
        }
        else {
            Object.defineProperty(this, 'options', {
                // This fails because of TS 3.7.2 useDefineForClassFields
                // Ref: https://github.com/microsoft/TypeScript/issues/34972
                enumerable: false,
                value: self
            });
        }
        this.timings = (_b = this.request) === null || _b === void 0 ? void 0 : _b.timings;
        // Recover the original stacktrace
        if (is_1.default.string(error.stack) && is_1.default.string(this.stack)) {
            const indexOfMessage = this.stack.indexOf(this.message) + this.message.length;
            const thisStackTrace = this.stack.slice(indexOfMessage).split('\n').reverse();
            const errorStackTrace = error.stack.slice(error.stack.indexOf(error.message) + error.message.length).split('\n').reverse();
            // Remove duplicated traces
            while (errorStackTrace.length !== 0 && errorStackTrace[0] === thisStackTrace[0]) {
                thisStackTrace.shift();
            }
            this.stack = `${this.stack.slice(0, indexOfMessage)}${thisStackTrace.reverse().join('\n')}${errorStackTrace.reverse().join('\n')}`;
        }
    }
}
exports.RequestError = RequestError;
/**
An error to be thrown when the server redirects you more than ten times.
Includes a `response` property.
*/
class MaxRedirectsError extends RequestError {
    constructor(request) {
        super(`Redirected ${request.options.maxRedirects} times. Aborting.`, {}, request);
        this.name = 'MaxRedirectsError';
        this.code = 'ERR_TOO_MANY_REDIRECTS';
    }
}
exports.MaxRedirectsError = MaxRedirectsError;
/**
An error to be thrown when the server response code is not 2xx nor 3xx if `options.followRedirect` is `true`, but always except for 304.
Includes a `response` property.
*/
class HTTPError extends RequestError {
    constructor(response) {
        super(`Response code ${response.statusCode} (${response.statusMessage})`, {}, response.request);
        this.name = 'HTTPError';
        this.code = 'ERR_NON_2XX_3XX_RESPONSE';
    }
}
exports.HTTPError = HTTPError;
/**
An error to be thrown when a cache method fails.
For example, if the database goes down or there's a filesystem error.
*/
class CacheError extends RequestError {
    constructor(error, request) {
        super(error.message, error, request);
        this.name = 'CacheError';
        this.code = this.code === 'ERR_GOT_REQUEST_ERROR' ? 'ERR_CACHE_ACCESS' : this.code;
    }
}
exports.CacheError = CacheError;
/**
An error to be thrown when the request body is a stream and an error occurs while reading from that stream.
*/
class UploadError extends RequestError {
    constructor(error, request) {
        super(error.message, error, request);
        this.name = 'UploadError';
        this.code = this.code === 'ERR_GOT_REQUEST_ERROR' ? 'ERR_UPLOAD' : this.code;
    }
}
exports.UploadError = UploadError;
/**
An error to be thrown when the request is aborted due to a timeout.
Includes an `event` and `timings` property.
*/
class TimeoutError extends RequestError {
    constructor(error, timings, request) {
        super(error.message, error, request);
        this.name = 'TimeoutError';
        this.event = error.event;
        this.timings = timings;
    }
}
exports.TimeoutError = TimeoutError;
/**
An error to be thrown when reading from response stream fails.
*/
class ReadError extends RequestError {
    constructor(error, request) {
        super(error.message, error, request);
        this.name = 'ReadError';
        this.code = this.code === 'ERR_GOT_REQUEST_ERROR' ? 'ERR_READING_RESPONSE_STREAM' : this.code;
    }
}
exports.ReadError = ReadError;
/**
An error to be thrown when given an unsupported protocol.
*/
class UnsupportedProtocolError extends RequestError {
    constructor(options) {
        super(`Unsupported protocol "${options.url.protocol}"`, {}, options);
        this.name = 'UnsupportedProtocolError';
        this.code = 'ERR_UNSUPPORTED_PROTOCOL';
    }
}
exports.UnsupportedProtocolError = UnsupportedProtocolError;
const proxiedRequestEvents = [
    'socket',
    'connect',
    'continue',
    'information',
    'upgrade',
    'timeout'
];
class Request extends stream_1.Duplex {
    constructor(url, options = {}, defaults) {
        super({
            // This must be false, to enable throwing after destroy
            // It is used for retry logic in Promise API
            autoDestroy: false,
            // It needs to be zero because we're just proxying the data to another stream
            highWaterMark: 0
        });
        this[kDownloadedSize] = 0;
        this[kUploadedSize] = 0;
        this.requestInitialized = false;
        this[kServerResponsesPiped] = new Set();
        this.redirects = [];
        this[kStopReading] = false;
        this[kTriggerRead] = false;
        this[kJobs] = [];
        this.retryCount = 0;
        // TODO: Remove this when targeting Node.js >= 12
        this._progressCallbacks = [];
        const unlockWrite = () => this._unlockWrite();
        const lockWrite = () => this._lockWrite();
        this.on('pipe', (source) => {
            source.prependListener('data', unlockWrite);
            source.on('data', lockWrite);
            source.prependListener('end', unlockWrite);
            source.on('end', lockWrite);
        });
        this.on('unpipe', (source) => {
            source.off('data', unlockWrite);
            source.off('data', lockWrite);
            source.off('end', unlockWrite);
            source.off('end', lockWrite);
        });
        this.on('pipe', source => {
            if (source instanceof http_1.IncomingMessage) {
                this.options.headers = {
                    ...source.headers,
                    ...this.options.headers
                };
            }
        });
        const { json, body, form } = options;
        if (json || body || form) {
            this._lockWrite();
        }
        if (exports.kIsNormalizedAlready in options) {
            this.options = options;
        }
        else {
            try {
                // @ts-expect-error Common TypeScript bug saying that `this.constructor` is not accessible
                this.options = this.constructor.normalizeArguments(url, options, defaults);
            }
            catch (error) {
                // TODO: Move this to `_destroy()`
                if (is_1.default.nodeStream(options.body)) {
                    options.body.destroy();
                }
                this.destroy(error);
                return;
            }
        }
        (async () => {
            var _a;
            try {
                if (this.options.body instanceof fs_1.ReadStream) {
                    await waitForOpenFile(this.options.body);
                }
                const { url: normalizedURL } = this.options;
                if (!normalizedURL) {
                    throw new TypeError('Missing `url` property');
                }
                this.requestUrl = normalizedURL.toString();
                decodeURI(this.requestUrl);
                await this._finalizeBody();
                await this._makeRequest();
                if (this.destroyed) {
                    (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.destroy();
                    return;
                }
                // Queued writes etc.
                for (const job of this[kJobs]) {
                    job();
                }
                // Prevent memory leak
                this[kJobs].length = 0;
                this.requestInitialized = true;
            }
            catch (error) {
                if (error instanceof RequestError) {
                    this._beforeError(error);
                    return;
                }
                // This is a workaround for https://github.com/nodejs/node/issues/33335
                if (!this.destroyed) {
                    this.destroy(error);
                }
            }
        })();
    }
    static normalizeArguments(url, options, defaults) {
        var _a, _b, _c, _d, _e;
        const rawOptions = options;
        if (is_1.default.object(url) && !is_1.default.urlInstance(url)) {
            options = { ...defaults, ...url, ...options };
        }
        else {
            if (url && options && options.url !== undefined) {
                throw new TypeError('The `url` option is mutually exclusive with the `input` argument');
            }
            options = { ...defaults, ...options };
            if (url !== undefined) {
                options.url = url;
            }
            if (is_1.default.urlInstance(options.url)) {
                options.url = new url_1.URL(options.url.toString());
            }
        }
        // TODO: Deprecate URL options in Got 12.
        // Support extend-specific options
        if (options.cache === false) {
            options.cache = undefined;
        }
        if (options.dnsCache === false) {
            options.dnsCache = undefined;
        }
        // Nice type assertions
        is_1.assert.any([is_1.default.string, is_1.default.undefined], options.method);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.headers);
        is_1.assert.any([is_1.default.string, is_1.default.urlInstance, is_1.default.undefined], options.prefixUrl);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.cookieJar);
        is_1.assert.any([is_1.default.object, is_1.default.string, is_1.default.undefined], options.searchParams);
        is_1.assert.any([is_1.default.object, is_1.default.string, is_1.default.undefined], options.cache);
        is_1.assert.any([is_1.default.object, is_1.default.number, is_1.default.undefined], options.timeout);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.context);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.hooks);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.decompress);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.ignoreInvalidCookies);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.followRedirect);
        is_1.assert.any([is_1.default.number, is_1.default.undefined], options.maxRedirects);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.throwHttpErrors);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.http2);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.allowGetBody);
        is_1.assert.any([is_1.default.string, is_1.default.undefined], options.localAddress);
        is_1.assert.any([dns_ip_version_1.isDnsLookupIpVersion, is_1.default.undefined], options.dnsLookupIpVersion);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.https);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.rejectUnauthorized);
        if (options.https) {
            is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.https.rejectUnauthorized);
            is_1.assert.any([is_1.default.function_, is_1.default.undefined], options.https.checkServerIdentity);
            is_1.assert.any([is_1.default.string, is_1.default.object, is_1.default.array, is_1.default.undefined], options.https.certificateAuthority);
            is_1.assert.any([is_1.default.string, is_1.default.object, is_1.default.array, is_1.default.undefined], options.https.key);
            is_1.assert.any([is_1.default.string, is_1.default.object, is_1.default.array, is_1.default.undefined], options.https.certificate);
            is_1.assert.any([is_1.default.string, is_1.default.undefined], options.https.passphrase);
            is_1.assert.any([is_1.default.string, is_1.default.buffer, is_1.default.array, is_1.default.undefined], options.https.pfx);
        }
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.cacheOptions);
        // `options.method`
        if (is_1.default.string(options.method)) {
            options.method = options.method.toUpperCase();
        }
        else {
            options.method = 'GET';
        }
        // `options.headers`
        if (options.headers === (defaults === null || defaults === void 0 ? void 0 : defaults.headers)) {
            options.headers = { ...options.headers };
        }
        else {
            options.headers = lowercaseKeys({ ...(defaults === null || defaults === void 0 ? void 0 : defaults.headers), ...options.headers });
        }
        // Disallow legacy `url.Url`
        if ('slashes' in options) {
            throw new TypeError('The legacy `url.Url` has been deprecated. Use `URL` instead.');
        }
        // `options.auth`
        if ('auth' in options) {
            throw new TypeError('Parameter `auth` is deprecated. Use `username` / `password` instead.');
        }
        // `options.searchParams`
        if ('searchParams' in options) {
            if (options.searchParams && options.searchParams !== (defaults === null || defaults === void 0 ? void 0 : defaults.searchParams)) {
                let searchParameters;
                if (is_1.default.string(options.searchParams) || (options.searchParams instanceof url_1.URLSearchParams)) {
                    searchParameters = new url_1.URLSearchParams(options.searchParams);
                }
                else {
                    validateSearchParameters(options.searchParams);
                    searchParameters = new url_1.URLSearchParams();
                    // eslint-disable-next-line guard-for-in
                    for (const key in options.searchParams) {
                        const value = options.searchParams[key];
                        if (value === null) {
                            searchParameters.append(key, '');
                        }
                        else if (value !== undefined) {
                            searchParameters.append(key, value);
                        }
                    }
                }
                // `normalizeArguments()` is also used to merge options
                (_a = defaults === null || defaults === void 0 ? void 0 : defaults.searchParams) === null || _a === void 0 ? void 0 : _a.forEach((value, key) => {
                    // Only use default if one isn't already defined
                    if (!searchParameters.has(key)) {
                        searchParameters.append(key, value);
                    }
                });
                options.searchParams = searchParameters;
            }
        }
        // `options.username` & `options.password`
        options.username = (_b = options.username) !== null && _b !== void 0 ? _b : '';
        options.password = (_c = options.password) !== null && _c !== void 0 ? _c : '';
        // `options.prefixUrl` & `options.url`
        if (is_1.default.undefined(options.prefixUrl)) {
            options.prefixUrl = (_d = defaults === null || defaults === void 0 ? void 0 : defaults.prefixUrl) !== null && _d !== void 0 ? _d : '';
        }
        else {
            options.prefixUrl = options.prefixUrl.toString();
            if (options.prefixUrl !== '' && !options.prefixUrl.endsWith('/')) {
                options.prefixUrl += '/';
            }
        }
        if (is_1.default.string(options.url)) {
            if (options.url.startsWith('/')) {
                throw new Error('`input` must not start with a slash when using `prefixUrl`');
            }
            options.url = options_to_url_1.default(options.prefixUrl + options.url, options);
        }
        else if ((is_1.default.undefined(options.url) && options.prefixUrl !== '') || options.protocol) {
            options.url = options_to_url_1.default(options.prefixUrl, options);
        }
        if (options.url) {
            if ('port' in options) {
                delete options.port;
            }
            // Make it possible to change `options.prefixUrl`
            let { prefixUrl } = options;
            Object.defineProperty(options, 'prefixUrl', {
                set: (value) => {
                    const url = options.url;
                    if (!url.href.startsWith(value)) {
                        throw new Error(`Cannot change \`prefixUrl\` from ${prefixUrl} to ${value}: ${url.href}`);
                    }
                    options.url = new url_1.URL(value + url.href.slice(prefixUrl.length));
                    prefixUrl = value;
                },
                get: () => prefixUrl
            });
            // Support UNIX sockets
            let { protocol } = options.url;
            if (protocol === 'unix:') {
                protocol = 'http:';
                options.url = new url_1.URL(`http://unix${options.url.pathname}${options.url.search}`);
            }
            // Set search params
            if (options.searchParams) {
                // eslint-disable-next-line @typescript-eslint/no-base-to-string
                options.url.search = options.searchParams.toString();
            }
            // Protocol check
            if (protocol !== 'http:' && protocol !== 'https:') {
                throw new UnsupportedProtocolError(options);
            }
            // Update `username`
            if (options.username === '') {
                options.username = options.url.username;
            }
            else {
                options.url.username = options.username;
            }
            // Update `password`
            if (options.password === '') {
                options.password = options.url.password;
            }
            else {
                options.url.password = options.password;
            }
        }
        // `options.cookieJar`
        const { cookieJar } = options;
        if (cookieJar) {
            let { setCookie, getCookieString } = cookieJar;
            is_1.assert.function_(setCookie);
            is_1.assert.function_(getCookieString);
            /* istanbul ignore next: Horrible `tough-cookie` v3 check */
            if (setCookie.length === 4 && getCookieString.length === 0) {
                setCookie = util_1.promisify(setCookie.bind(options.cookieJar));
                getCookieString = util_1.promisify(getCookieString.bind(options.cookieJar));
                options.cookieJar = {
                    setCookie,
                    getCookieString: getCookieString
                };
            }
        }
        // `options.cache`
        const { cache } = options;
        if (cache) {
            if (!cacheableStore.has(cache)) {
                cacheableStore.set(cache, new CacheableRequest(((requestOptions, handler) => {
                    const result = requestOptions[kRequest](requestOptions, handler);
                    // TODO: remove this when `cacheable-request` supports async request functions.
                    if (is_1.default.promise(result)) {
                        // @ts-expect-error
                        // We only need to implement the error handler in order to support HTTP2 caching.
                        // The result will be a promise anyway.
                        result.once = (event, handler) => {
                            if (event === 'error') {
                                result.catch(handler);
                            }
                            else if (event === 'abort') {
                                // The empty catch is needed here in case when
                                // it rejects before it's `await`ed in `_makeRequest`.
                                (async () => {
                                    try {
                                        const request = (await result);
                                        request.once('abort', handler);
                                    }
                                    catch (_a) { }
                                })();
                            }
                            else {
                                /* istanbul ignore next: safety check */
                                throw new Error(`Unknown HTTP2 promise event: ${event}`);
                            }
                            return result;
                        };
                    }
                    return result;
                }), cache));
            }
        }
        // `options.cacheOptions`
        options.cacheOptions = { ...options.cacheOptions };
        // `options.dnsCache`
        if (options.dnsCache === true) {
            if (!globalDnsCache) {
                globalDnsCache = new cacheable_lookup_1.default();
            }
            options.dnsCache = globalDnsCache;
        }
        else if (!is_1.default.undefined(options.dnsCache) && !options.dnsCache.lookup) {
            throw new TypeError(`Parameter \`dnsCache\` must be a CacheableLookup instance or a boolean, got ${is_1.default(options.dnsCache)}`);
        }
        // `options.timeout`
        if (is_1.default.number(options.timeout)) {
            options.timeout = { request: options.timeout };
        }
        else if (defaults && options.timeout !== defaults.timeout) {
            options.timeout = {
                ...defaults.timeout,
                ...options.timeout
            };
        }
        else {
            options.timeout = { ...options.timeout };
        }
        // `options.context`
        if (!options.context) {
            options.context = {};
        }
        // `options.hooks`
        const areHooksDefault = options.hooks === (defaults === null || defaults === void 0 ? void 0 : defaults.hooks);
        options.hooks = { ...options.hooks };
        for (const event of exports.knownHookEvents) {
            if (event in options.hooks) {
                if (is_1.default.array(options.hooks[event])) {
                    // See https://github.com/microsoft/TypeScript/issues/31445#issuecomment-576929044
                    options.hooks[event] = [...options.hooks[event]];
                }
                else {
                    throw new TypeError(`Parameter \`${event}\` must be an Array, got ${is_1.default(options.hooks[event])}`);
                }
            }
            else {
                options.hooks[event] = [];
            }
        }
        if (defaults && !areHooksDefault) {
            for (const event of exports.knownHookEvents) {
                const defaultHooks = defaults.hooks[event];
                if (defaultHooks.length > 0) {
                    // See https://github.com/microsoft/TypeScript/issues/31445#issuecomment-576929044
                    options.hooks[event] = [
                        ...defaults.hooks[event],
                        ...options.hooks[event]
                    ];
                }
            }
        }
        // DNS options
        if ('family' in options) {
            deprecation_warning_1.default('"options.family" was never documented, please use "options.dnsLookupIpVersion"');
        }
        // HTTPS options
        if (defaults === null || defaults === void 0 ? void 0 : defaults.https) {
            options.https = { ...defaults.https, ...options.https };
        }
        if ('rejectUnauthorized' in options) {
            deprecation_warning_1.default('"options.rejectUnauthorized" is now deprecated, please use "options.https.rejectUnauthorized"');
        }
        if ('checkServerIdentity' in options) {
            deprecation_warning_1.default('"options.checkServerIdentity" was never documented, please use "options.https.checkServerIdentity"');
        }
        if ('ca' in options) {
            deprecation_warning_1.default('"options.ca" was never documented, please use "options.https.certificateAuthority"');
        }
        if ('key' in options) {
            deprecation_warning_1.default('"options.key" was never documented, please use "options.https.key"');
        }
        if ('cert' in options) {
            deprecation_warning_1.default('"options.cert" was never documented, please use "options.https.certificate"');
        }
        if ('passphrase' in options) {
            deprecation_warning_1.default('"options.passphrase" was never documented, please use "options.https.passphrase"');
        }
        if ('pfx' in options) {
            deprecation_warning_1.default('"options.pfx" was never documented, please use "options.https.pfx"');
        }
        // Other options
        if ('followRedirects' in options) {
            throw new TypeError('The `followRedirects` option does not exist. Use `followRedirect` instead.');
        }
        if (options.agent) {
            for (const key in options.agent) {
                if (key !== 'http' && key !== 'https' && key !== 'http2') {
                    throw new TypeError(`Expected the \`options.agent\` properties to be \`http\`, \`https\` or \`http2\`, got \`${key}\``);
                }
            }
        }
        options.maxRedirects = (_e = options.maxRedirects) !== null && _e !== void 0 ? _e : 0;
        // Set non-enumerable properties
        exports.setNonEnumerableProperties([defaults, rawOptions], options);
        return normalize_arguments_1.default(options, defaults);
    }
    _lockWrite() {
        const onLockedWrite = () => {
            throw new TypeError('The payload has been already provided');
        };
        this.write = onLockedWrite;
        this.end = onLockedWrite;
    }
    _unlockWrite() {
        this.write = super.write;
        this.end = super.end;
    }
    async _finalizeBody() {
        const { options } = this;
        const { headers } = options;
        const isForm = !is_1.default.undefined(options.form);
        const isJSON = !is_1.default.undefined(options.json);
        const isBody = !is_1.default.undefined(options.body);
        const hasPayload = isForm || isJSON || isBody;
        const cannotHaveBody = exports.withoutBody.has(options.method) && !(options.method === 'GET' && options.allowGetBody);
        this._cannotHaveBody = cannotHaveBody;
        if (hasPayload) {
            if (cannotHaveBody) {
                throw new TypeError(`The \`${options.method}\` method cannot be used with a body`);
            }
            if ([isBody, isForm, isJSON].filter(isTrue => isTrue).length > 1) {
                throw new TypeError('The `body`, `json` and `form` options are mutually exclusive');
            }
            if (isBody &&
                !(options.body instanceof stream_1.Readable) &&
                !is_1.default.string(options.body) &&
                !is_1.default.buffer(options.body) &&
                !is_form_data_1.default(options.body)) {
                throw new TypeError('The `body` option must be a stream.Readable, string or Buffer');
            }
            if (isForm && !is_1.default.object(options.form)) {
                throw new TypeError('The `form` option must be an Object');
            }
            {
                // Serialize body
                const noContentType = !is_1.default.string(headers['content-type']);
                if (isBody) {
                    // Special case for https://github.com/form-data/form-data
                    if (is_form_data_1.default(options.body) && noContentType) {
                        headers['content-type'] = `multipart/form-data; boundary=${options.body.getBoundary()}`;
                    }
                    this[kBody] = options.body;
                }
                else if (isForm) {
                    if (noContentType) {
                        headers['content-type'] = 'application/x-www-form-urlencoded';
                    }
                    this[kBody] = (new url_1.URLSearchParams(options.form)).toString();
                }
                else {
                    if (noContentType) {
                        headers['content-type'] = 'application/json';
                    }
                    this[kBody] = options.stringifyJson(options.json);
                }
                const uploadBodySize = await get_body_size_1.default(this[kBody], options.headers);
                // See https://tools.ietf.org/html/rfc7230#section-3.3.2
                // A user agent SHOULD send a Content-Length in a request message when
                // no Transfer-Encoding is sent and the request method defines a meaning
                // for an enclosed payload body.  For example, a Content-Length header
                // field is normally sent in a POST request even when the value is 0
                // (indicating an empty payload body).  A user agent SHOULD NOT send a
                // Content-Length header field when the request message does not contain
                // a payload body and the method semantics do not anticipate such a
                // body.
                if (is_1.default.undefined(headers['content-length']) && is_1.default.undefined(headers['transfer-encoding'])) {
                    if (!cannotHaveBody && !is_1.default.undefined(uploadBodySize)) {
                        headers['content-length'] = String(uploadBodySize);
                    }
                }
            }
        }
        else if (cannotHaveBody) {
            this._lockWrite();
        }
        else {
            this._unlockWrite();
        }
        this[kBodySize] = Number(headers['content-length']) || undefined;
    }
    async _onResponseBase(response) {
        const { options } = this;
        const { url } = options;
        this[kOriginalResponse] = response;
        if (options.decompress) {
            response = decompressResponse(response);
        }
        const statusCode = response.statusCode;
        const typedResponse = response;
        typedResponse.statusMessage = typedResponse.statusMessage ? typedResponse.statusMessage : http.STATUS_CODES[statusCode];
        typedResponse.url = options.url.toString();
        typedResponse.requestUrl = this.requestUrl;
        typedResponse.redirectUrls = this.redirects;
        typedResponse.request = this;
        typedResponse.isFromCache = response.fromCache || false;
        typedResponse.ip = this.ip;
        typedResponse.retryCount = this.retryCount;
        this[kIsFromCache] = typedResponse.isFromCache;
        this[kResponseSize] = Number(response.headers['content-length']) || undefined;
        this[kResponse] = response;
        response.once('end', () => {
            this[kResponseSize] = this[kDownloadedSize];
            this.emit('downloadProgress', this.downloadProgress);
        });
        response.once('error', (error) => {
            // Force clean-up, because some packages don't do this.
            // TODO: Fix decompress-response
            response.destroy();
            this._beforeError(new ReadError(error, this));
        });
        response.once('aborted', () => {
            this._beforeError(new ReadError({
                name: 'Error',
                message: 'The server aborted pending request',
                code: 'ECONNRESET'
            }, this));
        });
        this.emit('downloadProgress', this.downloadProgress);
        const rawCookies = response.headers['set-cookie'];
        if (is_1.default.object(options.cookieJar) && rawCookies) {
            let promises = rawCookies.map(async (rawCookie) => options.cookieJar.setCookie(rawCookie, url.toString()));
            if (options.ignoreInvalidCookies) {
                promises = promises.map(async (p) => p.catch(() => { }));
            }
            try {
                await Promise.all(promises);
            }
            catch (error) {
                this._beforeError(error);
                return;
            }
        }
        if (options.followRedirect && response.headers.location && redirectCodes.has(statusCode)) {
            // We're being redirected, we don't care about the response.
            // It'd be best to abort the request, but we can't because
            // we would have to sacrifice the TCP connection. We don't want that.
            response.resume();
            if (this[kRequest]) {
                this[kCancelTimeouts]();
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                delete this[kRequest];
                this[kUnproxyEvents]();
            }
            const shouldBeGet = statusCode === 303 && options.method !== 'GET' && options.method !== 'HEAD';
            if (shouldBeGet || !options.methodRewriting) {
                // Server responded with "see other", indicating that the resource exists at another location,
                // and the client should request it from that location via GET or HEAD.
                options.method = 'GET';
                if ('body' in options) {
                    delete options.body;
                }
                if ('json' in options) {
                    delete options.json;
                }
                if ('form' in options) {
                    delete options.form;
                }
                this[kBody] = undefined;
                delete options.headers['content-length'];
            }
            if (this.redirects.length >= options.maxRedirects) {
                this._beforeError(new MaxRedirectsError(this));
                return;
            }
            try {
                // Do not remove. See https://github.com/sindresorhus/got/pull/214
                const redirectBuffer = Buffer.from(response.headers.location, 'binary').toString();
                // Handles invalid URLs. See https://github.com/sindresorhus/got/issues/604
                const redirectUrl = new url_1.URL(redirectBuffer, url);
                const redirectString = redirectUrl.toString();
                decodeURI(redirectString);
                // Redirecting to a different site, clear sensitive data.
                if (redirectUrl.hostname !== url.hostname || redirectUrl.port !== url.port) {
                    if ('host' in options.headers) {
                        delete options.headers.host;
                    }
                    if ('cookie' in options.headers) {
                        delete options.headers.cookie;
                    }
                    if ('authorization' in options.headers) {
                        delete options.headers.authorization;
                    }
                    if (options.username || options.password) {
                        options.username = '';
                        options.password = '';
                    }
                }
                else {
                    redirectUrl.username = options.username;
                    redirectUrl.password = options.password;
                }
                this.redirects.push(redirectString);
                options.url = redirectUrl;
                for (const hook of options.hooks.beforeRedirect) {
                    // eslint-disable-next-line no-await-in-loop
                    await hook(options, typedResponse);
                }
                this.emit('redirect', typedResponse, options);
                await this._makeRequest();
            }
            catch (error) {
                this._beforeError(error);
                return;
            }
            return;
        }
        if (options.isStream && options.throwHttpErrors && !is_response_ok_1.isResponseOk(typedResponse)) {
            this._beforeError(new HTTPError(typedResponse));
            return;
        }
        response.on('readable', () => {
            if (this[kTriggerRead]) {
                this._read();
            }
        });
        this.on('resume', () => {
            response.resume();
        });
        this.on('pause', () => {
            response.pause();
        });
        response.once('end', () => {
            this.push(null);
        });
        this.emit('response', response);
        for (const destination of this[kServerResponsesPiped]) {
            if (destination.headersSent) {
                continue;
            }
            // eslint-disable-next-line guard-for-in
            for (const key in response.headers) {
                const isAllowed = options.decompress ? key !== 'content-encoding' : true;
                const value = response.headers[key];
                if (isAllowed) {
                    destination.setHeader(key, value);
                }
            }
            destination.statusCode = statusCode;
        }
    }
    async _onResponse(response) {
        try {
            await this._onResponseBase(response);
        }
        catch (error) {
            /* istanbul ignore next: better safe than sorry */
            this._beforeError(error);
        }
    }
    _onRequest(request) {
        const { options } = this;
        const { timeout, url } = options;
        http_timer_1.default(request);
        this[kCancelTimeouts] = timed_out_1.default(request, timeout, url);
        const responseEventName = options.cache ? 'cacheableResponse' : 'response';
        request.once(responseEventName, (response) => {
            void this._onResponse(response);
        });
        request.once('error', (error) => {
            var _a;
            // Force clean-up, because some packages (e.g. nock) don't do this.
            request.destroy();
            // Node.js <= 12.18.2 mistakenly emits the response `end` first.
            (_a = request.res) === null || _a === void 0 ? void 0 : _a.removeAllListeners('end');
            error = error instanceof timed_out_1.TimeoutError ? new TimeoutError(error, this.timings, this) : new RequestError(error.message, error, this);
            this._beforeError(error);
        });
        this[kUnproxyEvents] = proxy_events_1.default(request, this, proxiedRequestEvents);
        this[kRequest] = request;
        this.emit('uploadProgress', this.uploadProgress);
        // Send body
        const body = this[kBody];
        const currentRequest = this.redirects.length === 0 ? this : request;
        if (is_1.default.nodeStream(body)) {
            body.pipe(currentRequest);
            body.once('error', (error) => {
                this._beforeError(new UploadError(error, this));
            });
        }
        else {
            this._unlockWrite();
            if (!is_1.default.undefined(body)) {
                this._writeRequest(body, undefined, () => { });
                currentRequest.end();
                this._lockWrite();
            }
            else if (this._cannotHaveBody || this._noPipe) {
                currentRequest.end();
                this._lockWrite();
            }
        }
        this.emit('request', request);
    }
    async _createCacheableRequest(url, options) {
        return new Promise((resolve, reject) => {
            // TODO: Remove `utils/url-to-options.ts` when `cacheable-request` is fixed
            Object.assign(options, url_to_options_1.default(url));
            // `http-cache-semantics` checks this
            // TODO: Fix this ignore.
            // @ts-expect-error
            delete options.url;
            let request;
            // This is ugly
            const cacheRequest = cacheableStore.get(options.cache)(options, async (response) => {
                // TODO: Fix `cacheable-response`
                response._readableState.autoDestroy = false;
                if (request) {
                    (await request).emit('cacheableResponse', response);
                }
                resolve(response);
            });
            // Restore options
            options.url = url;
            cacheRequest.once('error', reject);
            cacheRequest.once('request', async (requestOrPromise) => {
                request = requestOrPromise;
                resolve(request);
            });
        });
    }
    async _makeRequest() {
        var _a, _b, _c, _d, _e;
        const { options } = this;
        const { headers } = options;
        for (const key in headers) {
            if (is_1.default.undefined(headers[key])) {
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                delete headers[key];
            }
            else if (is_1.default.null_(headers[key])) {
                throw new TypeError(`Use \`undefined\` instead of \`null\` to delete the \`${key}\` header`);
            }
        }
        if (options.decompress && is_1.default.undefined(headers['accept-encoding'])) {
            headers['accept-encoding'] = supportsBrotli ? 'gzip, deflate, br' : 'gzip, deflate';
        }
        // Set cookies
        if (options.cookieJar) {
            const cookieString = await options.cookieJar.getCookieString(options.url.toString());
            if (is_1.default.nonEmptyString(cookieString)) {
                options.headers.cookie = cookieString;
            }
        }
        for (const hook of options.hooks.beforeRequest) {
            // eslint-disable-next-line no-await-in-loop
            const result = await hook(options);
            if (!is_1.default.undefined(result)) {
                // @ts-expect-error Skip the type mismatch to support abstract responses
                options.request = () => result;
                break;
            }
        }
        if (options.body && this[kBody] !== options.body) {
            this[kBody] = options.body;
        }
        const { agent, request, timeout, url } = options;
        if (options.dnsCache && !('lookup' in options)) {
            options.lookup = options.dnsCache.lookup;
        }
        // UNIX sockets
        if (url.hostname === 'unix') {
            const matches = /(?<socketPath>.+?):(?<path>.+)/.exec(`${url.pathname}${url.search}`);
            if (matches === null || matches === void 0 ? void 0 : matches.groups) {
                const { socketPath, path } = matches.groups;
                Object.assign(options, {
                    socketPath,
                    path,
                    host: ''
                });
            }
        }
        const isHttps = url.protocol === 'https:';
        // Fallback function
        let fallbackFn;
        if (options.http2) {
            fallbackFn = http2wrapper.auto;
        }
        else {
            fallbackFn = isHttps ? https.request : http.request;
        }
        const realFn = (_a = options.request) !== null && _a !== void 0 ? _a : fallbackFn;
        // Cache support
        const fn = options.cache ? this._createCacheableRequest : realFn;
        // Pass an agent directly when HTTP2 is disabled
        if (agent && !options.http2) {
            options.agent = agent[isHttps ? 'https' : 'http'];
        }
        // Prepare plain HTTP request options
        options[kRequest] = realFn;
        delete options.request;
        // TODO: Fix this ignore.
        // @ts-expect-error
        delete options.timeout;
        const requestOptions = options;
        requestOptions.shared = (_b = options.cacheOptions) === null || _b === void 0 ? void 0 : _b.shared;
        requestOptions.cacheHeuristic = (_c = options.cacheOptions) === null || _c === void 0 ? void 0 : _c.cacheHeuristic;
        requestOptions.immutableMinTimeToLive = (_d = options.cacheOptions) === null || _d === void 0 ? void 0 : _d.immutableMinTimeToLive;
        requestOptions.ignoreCargoCult = (_e = options.cacheOptions) === null || _e === void 0 ? void 0 : _e.ignoreCargoCult;
        // If `dnsLookupIpVersion` is not present do not override `family`
        if (options.dnsLookupIpVersion !== undefined) {
            try {
                requestOptions.family = dns_ip_version_1.dnsLookupIpVersionToFamily(options.dnsLookupIpVersion);
            }
            catch (_f) {
                throw new Error('Invalid `dnsLookupIpVersion` option value');
            }
        }
        // HTTPS options remapping
        if (options.https) {
            if ('rejectUnauthorized' in options.https) {
                requestOptions.rejectUnauthorized = options.https.rejectUnauthorized;
            }
            if (options.https.checkServerIdentity) {
                requestOptions.checkServerIdentity = options.https.checkServerIdentity;
            }
            if (options.https.certificateAuthority) {
                requestOptions.ca = options.https.certificateAuthority;
            }
            if (options.https.certificate) {
                requestOptions.cert = options.https.certificate;
            }
            if (options.https.key) {
                requestOptions.key = options.https.key;
            }
            if (options.https.passphrase) {
                requestOptions.passphrase = options.https.passphrase;
            }
            if (options.https.pfx) {
                requestOptions.pfx = options.https.pfx;
            }
        }
        try {
            let requestOrResponse = await fn(url, requestOptions);
            if (is_1.default.undefined(requestOrResponse)) {
                requestOrResponse = fallbackFn(url, requestOptions);
            }
            // Restore options
            options.request = request;
            options.timeout = timeout;
            options.agent = agent;
            // HTTPS options restore
            if (options.https) {
                if ('rejectUnauthorized' in options.https) {
                    delete requestOptions.rejectUnauthorized;
                }
                if (options.https.checkServerIdentity) {
                    // @ts-expect-error - This one will be removed when we remove the alias.
                    delete requestOptions.checkServerIdentity;
                }
                if (options.https.certificateAuthority) {
                    delete requestOptions.ca;
                }
                if (options.https.certificate) {
                    delete requestOptions.cert;
                }
                if (options.https.key) {
                    delete requestOptions.key;
                }
                if (options.https.passphrase) {
                    delete requestOptions.passphrase;
                }
                if (options.https.pfx) {
                    delete requestOptions.pfx;
                }
            }
            if (isClientRequest(requestOrResponse)) {
                this._onRequest(requestOrResponse);
                // Emit the response after the stream has been ended
            }
            else if (this.writable) {
                this.once('finish', () => {
                    void this._onResponse(requestOrResponse);
                });
                this._unlockWrite();
                this.end();
                this._lockWrite();
            }
            else {
                void this._onResponse(requestOrResponse);
            }
        }
        catch (error) {
            if (error instanceof CacheableRequest.CacheError) {
                throw new CacheError(error, this);
            }
            throw new RequestError(error.message, error, this);
        }
    }
    async _error(error) {
        try {
            for (const hook of this.options.hooks.beforeError) {
                // eslint-disable-next-line no-await-in-loop
                error = await hook(error);
            }
        }
        catch (error_) {
            error = new RequestError(error_.message, error_, this);
        }
        this.destroy(error);
    }
    _beforeError(error) {
        if (this[kStopReading]) {
            return;
        }
        const { options } = this;
        const retryCount = this.retryCount + 1;
        this[kStopReading] = true;
        if (!(error instanceof RequestError)) {
            error = new RequestError(error.message, error, this);
        }
        const typedError = error;
        const { response } = typedError;
        void (async () => {
            if (response && !response.body) {
                response.setEncoding(this._readableState.encoding);
                try {
                    response.rawBody = await get_buffer_1.default(response);
                    response.body = response.rawBody.toString();
                }
                catch (_a) { }
            }
            if (this.listenerCount('retry') !== 0) {
                let backoff;
                try {
                    let retryAfter;
                    if (response && 'retry-after' in response.headers) {
                        retryAfter = Number(response.headers['retry-after']);
                        if (Number.isNaN(retryAfter)) {
                            retryAfter = Date.parse(response.headers['retry-after']) - Date.now();
                            if (retryAfter <= 0) {
                                retryAfter = 1;
                            }
                        }
                        else {
                            retryAfter *= 1000;
                        }
                    }
                    backoff = await options.retry.calculateDelay({
                        attemptCount: retryCount,
                        retryOptions: options.retry,
                        error: typedError,
                        retryAfter,
                        computedValue: calculate_retry_delay_1.default({
                            attemptCount: retryCount,
                            retryOptions: options.retry,
                            error: typedError,
                            retryAfter,
                            computedValue: 0
                        })
                    });
                }
                catch (error_) {
                    void this._error(new RequestError(error_.message, error_, this));
                    return;
                }
                if (backoff) {
                    const retry = async () => {
                        try {
                            for (const hook of this.options.hooks.beforeRetry) {
                                // eslint-disable-next-line no-await-in-loop
                                await hook(this.options, typedError, retryCount);
                            }
                        }
                        catch (error_) {
                            void this._error(new RequestError(error_.message, error, this));
                            return;
                        }
                        // Something forced us to abort the retry
                        if (this.destroyed) {
                            return;
                        }
                        this.destroy();
                        this.emit('retry', retryCount, error);
                    };
                    this[kRetryTimeout] = setTimeout(retry, backoff);
                    return;
                }
            }
            void this._error(typedError);
        })();
    }
    _read() {
        this[kTriggerRead] = true;
        const response = this[kResponse];
        if (response && !this[kStopReading]) {
            // We cannot put this in the `if` above
            // because `.read()` also triggers the `end` event
            if (response.readableLength) {
                this[kTriggerRead] = false;
            }
            let data;
            while ((data = response.read()) !== null) {
                this[kDownloadedSize] += data.length;
                this[kStartedReading] = true;
                const progress = this.downloadProgress;
                if (progress.percent < 1) {
                    this.emit('downloadProgress', progress);
                }
                this.push(data);
            }
        }
    }
    // Node.js 12 has incorrect types, so the encoding must be a string
    _write(chunk, encoding, callback) {
        const write = () => {
            this._writeRequest(chunk, encoding, callback);
        };
        if (this.requestInitialized) {
            write();
        }
        else {
            this[kJobs].push(write);
        }
    }
    _writeRequest(chunk, encoding, callback) {
        if (this[kRequest].destroyed) {
            // Probably the `ClientRequest` instance will throw
            return;
        }
        this._progressCallbacks.push(() => {
            this[kUploadedSize] += Buffer.byteLength(chunk, encoding);
            const progress = this.uploadProgress;
            if (progress.percent < 1) {
                this.emit('uploadProgress', progress);
            }
        });
        // TODO: What happens if it's from cache? Then this[kRequest] won't be defined.
        this[kRequest].write(chunk, encoding, (error) => {
            if (!error && this._progressCallbacks.length > 0) {
                this._progressCallbacks.shift()();
            }
            callback(error);
        });
    }
    _final(callback) {
        const endRequest = () => {
            // FIX: Node.js 10 calls the write callback AFTER the end callback!
            while (this._progressCallbacks.length !== 0) {
                this._progressCallbacks.shift()();
            }
            // We need to check if `this[kRequest]` is present,
            // because it isn't when we use cache.
            if (!(kRequest in this)) {
                callback();
                return;
            }
            if (this[kRequest].destroyed) {
                callback();
                return;
            }
            this[kRequest].end((error) => {
                if (!error) {
                    this[kBodySize] = this[kUploadedSize];
                    this.emit('uploadProgress', this.uploadProgress);
                    this[kRequest].emit('upload-complete');
                }
                callback(error);
            });
        };
        if (this.requestInitialized) {
            endRequest();
        }
        else {
            this[kJobs].push(endRequest);
        }
    }
    _destroy(error, callback) {
        var _a;
        this[kStopReading] = true;
        // Prevent further retries
        clearTimeout(this[kRetryTimeout]);
        if (kRequest in this) {
            this[kCancelTimeouts]();
            // TODO: Remove the next `if` when these get fixed:
            // - https://github.com/nodejs/node/issues/32851
            if (!((_a = this[kResponse]) === null || _a === void 0 ? void 0 : _a.complete)) {
                this[kRequest].destroy();
            }
        }
        if (error !== null && !is_1.default.undefined(error) && !(error instanceof RequestError)) {
            error = new RequestError(error.message, error, this);
        }
        callback(error);
    }
    get _isAboutToError() {
        return this[kStopReading];
    }
    /**
    The remote IP address.
    */
    get ip() {
        var _a;
        return (_a = this.socket) === null || _a === void 0 ? void 0 : _a.remoteAddress;
    }
    /**
    Indicates whether the request has been aborted or not.
    */
    get aborted() {
        var _a, _b, _c;
        return ((_b = (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.destroyed) !== null && _b !== void 0 ? _b : this.destroyed) && !((_c = this[kOriginalResponse]) === null || _c === void 0 ? void 0 : _c.complete);
    }
    get socket() {
        var _a, _b;
        return (_b = (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.socket) !== null && _b !== void 0 ? _b : undefined;
    }
    /**
    Progress event for downloading (receiving a response).
    */
    get downloadProgress() {
        let percent;
        if (this[kResponseSize]) {
            percent = this[kDownloadedSize] / this[kResponseSize];
        }
        else if (this[kResponseSize] === this[kDownloadedSize]) {
            percent = 1;
        }
        else {
            percent = 0;
        }
        return {
            percent,
            transferred: this[kDownloadedSize],
            total: this[kResponseSize]
        };
    }
    /**
    Progress event for uploading (sending a request).
    */
    get uploadProgress() {
        let percent;
        if (this[kBodySize]) {
            percent = this[kUploadedSize] / this[kBodySize];
        }
        else if (this[kBodySize] === this[kUploadedSize]) {
            percent = 1;
        }
        else {
            percent = 0;
        }
        return {
            percent,
            transferred: this[kUploadedSize],
            total: this[kBodySize]
        };
    }
    /**
    The object contains the following properties:

    - `start` - Time when the request started.
    - `socket` - Time when a socket was assigned to the request.
    - `lookup` - Time when the DNS lookup finished.
    - `connect` - Time when the socket successfully connected.
    - `secureConnect` - Time when the socket securely connected.
    - `upload` - Time when the request finished uploading.
    - `response` - Time when the request fired `response` event.
    - `end` - Time when the response fired `end` event.
    - `error` - Time when the request fired `error` event.
    - `abort` - Time when the request fired `abort` event.
    - `phases`
        - `wait` - `timings.socket - timings.start`
        - `dns` - `timings.lookup - timings.socket`
        - `tcp` - `timings.connect - timings.lookup`
        - `tls` - `timings.secureConnect - timings.connect`
        - `request` - `timings.upload - (timings.secureConnect || timings.connect)`
        - `firstByte` - `timings.response - timings.upload`
        - `download` - `timings.end - timings.response`
        - `total` - `(timings.end || timings.error || timings.abort) - timings.start`

    If something has not been measured yet, it will be `undefined`.

    __Note__: The time is a `number` representing the milliseconds elapsed since the UNIX epoch.
    */
    get timings() {
        var _a;
        return (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.timings;
    }
    /**
    Whether the response was retrieved from the cache.
    */
    get isFromCache() {
        return this[kIsFromCache];
    }
    pipe(destination, options) {
        if (this[kStartedReading]) {
            throw new Error('Failed to pipe. The response has been emitted already.');
        }
        if (destination instanceof http_1.ServerResponse) {
            this[kServerResponsesPiped].add(destination);
        }
        return super.pipe(destination, options);
    }
    unpipe(destination) {
        if (destination instanceof http_1.ServerResponse) {
            this[kServerResponsesPiped].delete(destination);
        }
        super.unpipe(destination);
        return this;
    }
}
exports["default"] = Request;


/***/ }),

/***/ 690:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dnsLookupIpVersionToFamily = exports.isDnsLookupIpVersion = void 0;
const conversionTable = {
    auto: 0,
    ipv4: 4,
    ipv6: 6
};
exports.isDnsLookupIpVersion = (value) => {
    return value in conversionTable;
};
exports.dnsLookupIpVersionToFamily = (dnsLookupIpVersion) => {
    if (exports.isDnsLookupIpVersion(dnsLookupIpVersion)) {
        return conversionTable[dnsLookupIpVersion];
    }
    throw new Error('Invalid DNS lookup IP version');
};


/***/ }),

/***/ 6398:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const fs_1 = __webpack_require__(7147);
const util_1 = __webpack_require__(6464);
const is_1 = __webpack_require__(5011);
const is_form_data_1 = __webpack_require__(9090);
const statAsync = util_1.promisify(fs_1.stat);
exports["default"] = async (body, headers) => {
    if (headers && 'content-length' in headers) {
        return Number(headers['content-length']);
    }
    if (!body) {
        return 0;
    }
    if (is_1.default.string(body)) {
        return Buffer.byteLength(body);
    }
    if (is_1.default.buffer(body)) {
        return body.length;
    }
    if (is_form_data_1.default(body)) {
        return util_1.promisify(body.getLength.bind(body))();
    }
    if (body instanceof fs_1.ReadStream) {
        const { size } = await statAsync(body.path);
        if (size === 0) {
            return undefined;
        }
        return size;
    }
    return undefined;
};


/***/ }),

/***/ 2347:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// TODO: Update https://github.com/sindresorhus/get-stream
const getBuffer = async (stream) => {
    const chunks = [];
    let length = 0;
    for await (const chunk of stream) {
        chunks.push(chunk);
        length += Buffer.byteLength(chunk);
    }
    if (Buffer.isBuffer(chunks[0])) {
        return Buffer.concat(chunks, length);
    }
    return Buffer.from(chunks.join(''));
};
exports["default"] = getBuffer;


/***/ }),

/***/ 9090:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const is_1 = __webpack_require__(5011);
exports["default"] = (body) => is_1.default.nodeStream(body) && is_1.default.function_(body.getBoundary);


/***/ }),

/***/ 9581:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isResponseOk = void 0;
exports.isResponseOk = (response) => {
    const { statusCode } = response;
    const limitStatusCode = response.request.options.followRedirect ? 299 : 399;
    return (statusCode >= 200 && statusCode <= limitStatusCode) || statusCode === 304;
};


/***/ }),

/***/ 6982:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/* istanbul ignore file: deprecated */
const url_1 = __webpack_require__(7310);
const keys = [
    'protocol',
    'host',
    'hostname',
    'port',
    'pathname',
    'search'
];
exports["default"] = (origin, options) => {
    var _a, _b;
    if (options.path) {
        if (options.pathname) {
            throw new TypeError('Parameters `path` and `pathname` are mutually exclusive.');
        }
        if (options.search) {
            throw new TypeError('Parameters `path` and `search` are mutually exclusive.');
        }
        if (options.searchParams) {
            throw new TypeError('Parameters `path` and `searchParams` are mutually exclusive.');
        }
    }
    if (options.search && options.searchParams) {
        throw new TypeError('Parameters `search` and `searchParams` are mutually exclusive.');
    }
    if (!origin) {
        if (!options.protocol) {
            throw new TypeError('No URL protocol specified');
        }
        origin = `${options.protocol}//${(_b = (_a = options.hostname) !== null && _a !== void 0 ? _a : options.host) !== null && _b !== void 0 ? _b : ''}`;
    }
    const url = new url_1.URL(origin);
    if (options.path) {
        const searchIndex = options.path.indexOf('?');
        if (searchIndex === -1) {
            options.pathname = options.path;
        }
        else {
            options.pathname = options.path.slice(0, searchIndex);
            options.search = options.path.slice(searchIndex + 1);
        }
        delete options.path;
    }
    for (const key of keys) {
        if (options[key]) {
            url[key] = options[key].toString();
        }
    }
    return url;
};


/***/ }),

/***/ 271:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function default_1(from, to, events) {
    const fns = {};
    for (const event of events) {
        fns[event] = (...args) => {
            to.emit(event, ...args);
        };
        from.on(event, fns[event]);
    }
    return () => {
        for (const event of events) {
            from.off(event, fns[event]);
        }
    };
}
exports["default"] = default_1;


/***/ }),

/***/ 7890:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimeoutError = void 0;
const net = __webpack_require__(1808);
const unhandle_1 = __webpack_require__(3411);
const reentry = Symbol('reentry');
const noop = () => { };
class TimeoutError extends Error {
    constructor(threshold, event) {
        super(`Timeout awaiting '${event}' for ${threshold}ms`);
        this.event = event;
        this.name = 'TimeoutError';
        this.code = 'ETIMEDOUT';
    }
}
exports.TimeoutError = TimeoutError;
exports["default"] = (request, delays, options) => {
    if (reentry in request) {
        return noop;
    }
    request[reentry] = true;
    const cancelers = [];
    const { once, unhandleAll } = unhandle_1.default();
    const addTimeout = (delay, callback, event) => {
        var _a;
        const timeout = setTimeout(callback, delay, delay, event);
        (_a = timeout.unref) === null || _a === void 0 ? void 0 : _a.call(timeout);
        const cancel = () => {
            clearTimeout(timeout);
        };
        cancelers.push(cancel);
        return cancel;
    };
    const { host, hostname } = options;
    const timeoutHandler = (delay, event) => {
        request.destroy(new TimeoutError(delay, event));
    };
    const cancelTimeouts = () => {
        for (const cancel of cancelers) {
            cancel();
        }
        unhandleAll();
    };
    request.once('error', error => {
        cancelTimeouts();
        // Save original behavior
        /* istanbul ignore next */
        if (request.listenerCount('error') === 0) {
            throw error;
        }
    });
    request.once('close', cancelTimeouts);
    once(request, 'response', (response) => {
        once(response, 'end', cancelTimeouts);
    });
    if (typeof delays.request !== 'undefined') {
        addTimeout(delays.request, timeoutHandler, 'request');
    }
    if (typeof delays.socket !== 'undefined') {
        const socketTimeoutHandler = () => {
            timeoutHandler(delays.socket, 'socket');
        };
        request.setTimeout(delays.socket, socketTimeoutHandler);
        // `request.setTimeout(0)` causes a memory leak.
        // We can just remove the listener and forget about the timer - it's unreffed.
        // See https://github.com/sindresorhus/got/issues/690
        cancelers.push(() => {
            request.removeListener('timeout', socketTimeoutHandler);
        });
    }
    once(request, 'socket', (socket) => {
        var _a;
        const { socketPath } = request;
        /* istanbul ignore next: hard to test */
        if (socket.connecting) {
            const hasPath = Boolean(socketPath !== null && socketPath !== void 0 ? socketPath : net.isIP((_a = hostname !== null && hostname !== void 0 ? hostname : host) !== null && _a !== void 0 ? _a : '') !== 0);
            if (typeof delays.lookup !== 'undefined' && !hasPath && typeof socket.address().address === 'undefined') {
                const cancelTimeout = addTimeout(delays.lookup, timeoutHandler, 'lookup');
                once(socket, 'lookup', cancelTimeout);
            }
            if (typeof delays.connect !== 'undefined') {
                const timeConnect = () => addTimeout(delays.connect, timeoutHandler, 'connect');
                if (hasPath) {
                    once(socket, 'connect', timeConnect());
                }
                else {
                    once(socket, 'lookup', (error) => {
                        if (error === null) {
                            once(socket, 'connect', timeConnect());
                        }
                    });
                }
            }
            if (typeof delays.secureConnect !== 'undefined' && options.protocol === 'https:') {
                once(socket, 'connect', () => {
                    const cancelTimeout = addTimeout(delays.secureConnect, timeoutHandler, 'secureConnect');
                    once(socket, 'secureConnect', cancelTimeout);
                });
            }
        }
        if (typeof delays.send !== 'undefined') {
            const timeRequest = () => addTimeout(delays.send, timeoutHandler, 'send');
            /* istanbul ignore next: hard to test */
            if (socket.connecting) {
                once(socket, 'connect', () => {
                    once(request, 'upload-complete', timeRequest());
                });
            }
            else {
                once(request, 'upload-complete', timeRequest());
            }
        }
    });
    if (typeof delays.response !== 'undefined') {
        once(request, 'upload-complete', () => {
            const cancelTimeout = addTimeout(delays.response, timeoutHandler, 'response');
            once(request, 'response', cancelTimeout);
        });
    }
    return cancelTimeouts;
};


/***/ }),

/***/ 3411:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// When attaching listeners, it's very easy to forget about them.
// Especially if you do error handling and set timeouts.
// So instead of checking if it's proper to throw an error on every timeout ever,
// use this simple tool which will remove all listeners you have attached.
exports["default"] = () => {
    const handlers = [];
    return {
        once(origin, event, fn) {
            origin.once(event, fn);
            handlers.push({ origin, event, fn });
        },
        unhandleAll() {
            for (const handler of handlers) {
                const { origin, event, fn } = handler;
                origin.removeListener(event, fn);
            }
            handlers.length = 0;
        }
    };
};


/***/ }),

/***/ 5284:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const is_1 = __webpack_require__(5011);
exports["default"] = (url) => {
    // Cast to URL
    url = url;
    const options = {
        protocol: url.protocol,
        hostname: is_1.default.string(url.hostname) && url.hostname.startsWith('[') ? url.hostname.slice(1, -1) : url.hostname,
        host: url.host,
        hash: url.hash,
        search: url.search,
        pathname: url.pathname,
        href: url.href,
        path: `${url.pathname || ''}${url.search || ''}`
    };
    if (is_1.default.string(url.port) && url.port.length > 0) {
        options.port = Number(url.port);
    }
    if (url.username || url.password) {
        options.auth = `${url.username || ''}:${url.password || ''}`;
    }
    return options;
};


/***/ }),

/***/ 633:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class WeakableMap {
    constructor() {
        this.weakMap = new WeakMap();
        this.map = new Map();
    }
    set(key, value) {
        if (typeof key === 'object') {
            this.weakMap.set(key, value);
        }
        else {
            this.map.set(key, value);
        }
    }
    get(key) {
        if (typeof key === 'object') {
            return this.weakMap.get(key);
        }
        return this.map.get(key);
    }
    has(key) {
        if (typeof key === 'object') {
            return this.weakMap.has(key);
        }
        return this.map.has(key);
    }
}
exports["default"] = WeakableMap;


/***/ }),

/***/ 4573:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultHandler = void 0;
const is_1 = __webpack_require__(5011);
const as_promise_1 = __webpack_require__(6249);
const create_rejection_1 = __webpack_require__(5608);
const core_1 = __webpack_require__(9826);
const deep_freeze_1 = __webpack_require__(6097);
const errors = {
    RequestError: as_promise_1.RequestError,
    CacheError: as_promise_1.CacheError,
    ReadError: as_promise_1.ReadError,
    HTTPError: as_promise_1.HTTPError,
    MaxRedirectsError: as_promise_1.MaxRedirectsError,
    TimeoutError: as_promise_1.TimeoutError,
    ParseError: as_promise_1.ParseError,
    CancelError: as_promise_1.CancelError,
    UnsupportedProtocolError: as_promise_1.UnsupportedProtocolError,
    UploadError: as_promise_1.UploadError
};
// The `delay` package weighs 10KB (!)
const delay = async (ms) => new Promise(resolve => {
    setTimeout(resolve, ms);
});
const { normalizeArguments } = core_1.default;
const mergeOptions = (...sources) => {
    let mergedOptions;
    for (const source of sources) {
        mergedOptions = normalizeArguments(undefined, source, mergedOptions);
    }
    return mergedOptions;
};
const getPromiseOrStream = (options) => options.isStream ? new core_1.default(undefined, options) : as_promise_1.default(options);
const isGotInstance = (value) => ('defaults' in value && 'options' in value.defaults);
const aliases = [
    'get',
    'post',
    'put',
    'patch',
    'head',
    'delete'
];
exports.defaultHandler = (options, next) => next(options);
const callInitHooks = (hooks, options) => {
    if (hooks) {
        for (const hook of hooks) {
            hook(options);
        }
    }
};
const create = (defaults) => {
    // Proxy properties from next handlers
    defaults._rawHandlers = defaults.handlers;
    defaults.handlers = defaults.handlers.map(fn => ((options, next) => {
        // This will be assigned by assigning result
        let root;
        const result = fn(options, newOptions => {
            root = next(newOptions);
            return root;
        });
        if (result !== root && !options.isStream && root) {
            const typedResult = result;
            const { then: promiseThen, catch: promiseCatch, finally: promiseFianlly } = typedResult;
            Object.setPrototypeOf(typedResult, Object.getPrototypeOf(root));
            Object.defineProperties(typedResult, Object.getOwnPropertyDescriptors(root));
            // These should point to the new promise
            // eslint-disable-next-line promise/prefer-await-to-then
            typedResult.then = promiseThen;
            typedResult.catch = promiseCatch;
            typedResult.finally = promiseFianlly;
        }
        return result;
    }));
    // Got interface
    const got = ((url, options = {}, _defaults) => {
        var _a, _b;
        let iteration = 0;
        const iterateHandlers = (newOptions) => {
            return defaults.handlers[iteration++](newOptions, iteration === defaults.handlers.length ? getPromiseOrStream : iterateHandlers);
        };
        // TODO: Remove this in Got 12.
        if (is_1.default.plainObject(url)) {
            const mergedOptions = {
                ...url,
                ...options
            };
            core_1.setNonEnumerableProperties([url, options], mergedOptions);
            options = mergedOptions;
            url = undefined;
        }
        try {
            // Call `init` hooks
            let initHookError;
            try {
                callInitHooks(defaults.options.hooks.init, options);
                callInitHooks((_a = options.hooks) === null || _a === void 0 ? void 0 : _a.init, options);
            }
            catch (error) {
                initHookError = error;
            }
            // Normalize options & call handlers
            const normalizedOptions = normalizeArguments(url, options, _defaults !== null && _defaults !== void 0 ? _defaults : defaults.options);
            normalizedOptions[core_1.kIsNormalizedAlready] = true;
            if (initHookError) {
                throw new as_promise_1.RequestError(initHookError.message, initHookError, normalizedOptions);
            }
            return iterateHandlers(normalizedOptions);
        }
        catch (error) {
            if (options.isStream) {
                throw error;
            }
            else {
                return create_rejection_1.default(error, defaults.options.hooks.beforeError, (_b = options.hooks) === null || _b === void 0 ? void 0 : _b.beforeError);
            }
        }
    });
    got.extend = (...instancesOrOptions) => {
        const optionsArray = [defaults.options];
        let handlers = [...defaults._rawHandlers];
        let isMutableDefaults;
        for (const value of instancesOrOptions) {
            if (isGotInstance(value)) {
                optionsArray.push(value.defaults.options);
                handlers.push(...value.defaults._rawHandlers);
                isMutableDefaults = value.defaults.mutableDefaults;
            }
            else {
                optionsArray.push(value);
                if ('handlers' in value) {
                    handlers.push(...value.handlers);
                }
                isMutableDefaults = value.mutableDefaults;
            }
        }
        handlers = handlers.filter(handler => handler !== exports.defaultHandler);
        if (handlers.length === 0) {
            handlers.push(exports.defaultHandler);
        }
        return create({
            options: mergeOptions(...optionsArray),
            handlers,
            mutableDefaults: Boolean(isMutableDefaults)
        });
    };
    // Pagination
    const paginateEach = (async function* (url, options) {
        // TODO: Remove this `@ts-expect-error` when upgrading to TypeScript 4.
        // Error: Argument of type 'Merge<Options, PaginationOptions<T, R>> | undefined' is not assignable to parameter of type 'Options | undefined'.
        // @ts-expect-error
        let normalizedOptions = normalizeArguments(url, options, defaults.options);
        normalizedOptions.resolveBodyOnly = false;
        const pagination = normalizedOptions.pagination;
        if (!is_1.default.object(pagination)) {
            throw new TypeError('`options.pagination` must be implemented');
        }
        const all = [];
        let { countLimit } = pagination;
        let numberOfRequests = 0;
        while (numberOfRequests < pagination.requestLimit) {
            if (numberOfRequests !== 0) {
                // eslint-disable-next-line no-await-in-loop
                await delay(pagination.backoff);
            }
            // @ts-expect-error FIXME!
            // TODO: Throw when result is not an instance of Response
            // eslint-disable-next-line no-await-in-loop
            const result = (await got(undefined, undefined, normalizedOptions));
            // eslint-disable-next-line no-await-in-loop
            const parsed = await pagination.transform(result);
            const current = [];
            for (const item of parsed) {
                if (pagination.filter(item, all, current)) {
                    if (!pagination.shouldContinue(item, all, current)) {
                        return;
                    }
                    yield item;
                    if (pagination.stackAllItems) {
                        all.push(item);
                    }
                    current.push(item);
                    if (--countLimit <= 0) {
                        return;
                    }
                }
            }
            const optionsToMerge = pagination.paginate(result, all, current);
            if (optionsToMerge === false) {
                return;
            }
            if (optionsToMerge === result.request.options) {
                normalizedOptions = result.request.options;
            }
            else if (optionsToMerge !== undefined) {
                normalizedOptions = normalizeArguments(undefined, optionsToMerge, normalizedOptions);
            }
            numberOfRequests++;
        }
    });
    got.paginate = paginateEach;
    got.paginate.all = (async (url, options) => {
        const results = [];
        for await (const item of paginateEach(url, options)) {
            results.push(item);
        }
        return results;
    });
    // For those who like very descriptive names
    got.paginate.each = paginateEach;
    // Stream API
    got.stream = ((url, options) => got(url, { ...options, isStream: true }));
    // Shortcuts
    for (const method of aliases) {
        got[method] = ((url, options) => got(url, { ...options, method }));
        got.stream[method] = ((url, options) => {
            return got(url, { ...options, method, isStream: true });
        });
    }
    Object.assign(got, errors);
    Object.defineProperty(got, 'defaults', {
        value: defaults.mutableDefaults ? defaults : deep_freeze_1.default(defaults),
        writable: defaults.mutableDefaults,
        configurable: defaults.mutableDefaults,
        enumerable: true
    });
    got.mergeOptions = mergeOptions;
    return got;
};
exports["default"] = create;
__exportStar(__webpack_require__(1873), exports);


/***/ }),

/***/ 8501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const url_1 = __webpack_require__(7310);
const create_1 = __webpack_require__(4573);
const defaults = {
    options: {
        method: 'GET',
        retry: {
            limit: 2,
            methods: [
                'GET',
                'PUT',
                'HEAD',
                'DELETE',
                'OPTIONS',
                'TRACE'
            ],
            statusCodes: [
                408,
                413,
                429,
                500,
                502,
                503,
                504,
                521,
                522,
                524
            ],
            errorCodes: [
                'ETIMEDOUT',
                'ECONNRESET',
                'EADDRINUSE',
                'ECONNREFUSED',
                'EPIPE',
                'ENOTFOUND',
                'ENETUNREACH',
                'EAI_AGAIN'
            ],
            maxRetryAfter: undefined,
            calculateDelay: ({ computedValue }) => computedValue
        },
        timeout: {},
        headers: {
            'user-agent': 'got (https://github.com/sindresorhus/got)'
        },
        hooks: {
            init: [],
            beforeRequest: [],
            beforeRedirect: [],
            beforeRetry: [],
            beforeError: [],
            afterResponse: []
        },
        cache: undefined,
        dnsCache: undefined,
        decompress: true,
        throwHttpErrors: true,
        followRedirect: true,
        isStream: false,
        responseType: 'text',
        resolveBodyOnly: false,
        maxRedirects: 10,
        prefixUrl: '',
        methodRewriting: true,
        ignoreInvalidCookies: false,
        context: {},
        // TODO: Set this to `true` when Got 12 gets released
        http2: false,
        allowGetBody: false,
        https: undefined,
        pagination: {
            transform: (response) => {
                if (response.request.options.responseType === 'json') {
                    return response.body;
                }
                return JSON.parse(response.body);
            },
            paginate: response => {
                if (!Reflect.has(response.headers, 'link')) {
                    return false;
                }
                const items = response.headers.link.split(',');
                let next;
                for (const item of items) {
                    const parsed = item.split(';');
                    if (parsed[1].includes('next')) {
                        next = parsed[0].trimStart().trim();
                        next = next.slice(1, -1);
                        break;
                    }
                }
                if (next) {
                    const options = {
                        url: new url_1.URL(next)
                    };
                    return options;
                }
                return false;
            },
            filter: () => true,
            shouldContinue: () => true,
            countLimit: Infinity,
            backoff: 0,
            requestLimit: 10000,
            stackAllItems: true
        },
        parseJson: (text) => JSON.parse(text),
        stringifyJson: (object) => JSON.stringify(object),
        cacheOptions: {}
    },
    handlers: [create_1.defaultHandler],
    mutableDefaults: false
};
const got = create_1.default(defaults);
exports["default"] = got;
// For CommonJS default export support
module.exports = got;
module.exports["default"] = got;
module.exports.__esModule = true; // Workaround for TS issue: https://github.com/sindresorhus/got/pull/1267
__exportStar(__webpack_require__(4573), exports);
__exportStar(__webpack_require__(6249), exports);


/***/ }),

/***/ 1873:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6097:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const is_1 = __webpack_require__(5011);
function deepFreeze(object) {
    for (const value of Object.values(object)) {
        if (is_1.default.plainObject(value) || is_1.default.array(value)) {
            deepFreeze(value);
        }
    }
    return Object.freeze(object);
}
exports["default"] = deepFreeze;


/***/ }),

/***/ 7931:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const alreadyWarned = new Set();
exports["default"] = (message) => {
    if (alreadyWarned.has(message)) {
        return;
    }
    alreadyWarned.add(message);
    // @ts-expect-error Missing types.
    process.emitWarning(`Got: ${message}`, {
        type: 'DeprecationWarning'
    });
};


/***/ }),

/***/ 6356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const EventEmitter = __webpack_require__(1239);
const tls = __webpack_require__(4404);
const http2 = __webpack_require__(5158);
const QuickLRU = __webpack_require__(6273);

const kCurrentStreamsCount = Symbol('currentStreamsCount');
const kRequest = Symbol('request');
const kOriginSet = Symbol('cachedOriginSet');
const kGracefullyClosing = Symbol('gracefullyClosing');

const nameKeys = [
	// `http2.connect()` options
	'maxDeflateDynamicTableSize',
	'maxSessionMemory',
	'maxHeaderListPairs',
	'maxOutstandingPings',
	'maxReservedRemoteStreams',
	'maxSendHeaderBlockLength',
	'paddingStrategy',

	// `tls.connect()` options
	'localAddress',
	'path',
	'rejectUnauthorized',
	'minDHSize',

	// `tls.createSecureContext()` options
	'ca',
	'cert',
	'clientCertEngine',
	'ciphers',
	'key',
	'pfx',
	'servername',
	'minVersion',
	'maxVersion',
	'secureProtocol',
	'crl',
	'honorCipherOrder',
	'ecdhCurve',
	'dhparam',
	'secureOptions',
	'sessionIdContext'
];

const getSortedIndex = (array, value, compare) => {
	let low = 0;
	let high = array.length;

	while (low < high) {
		const mid = (low + high) >>> 1;

		/* istanbul ignore next */
		if (compare(array[mid], value)) {
			// This never gets called because we use descending sort. Better to have this anyway.
			low = mid + 1;
		} else {
			high = mid;
		}
	}

	return low;
};

const compareSessions = (a, b) => {
	return a.remoteSettings.maxConcurrentStreams > b.remoteSettings.maxConcurrentStreams;
};

// See https://tools.ietf.org/html/rfc8336
const closeCoveredSessions = (where, session) => {
	// Clients SHOULD NOT emit new requests on any connection whose Origin
	// Set is a proper subset of another connection's Origin Set, and they
	// SHOULD close it once all outstanding requests are satisfied.
	for (const coveredSession of where) {
		if (
			// The set is a proper subset when its length is less than the other set.
			coveredSession[kOriginSet].length < session[kOriginSet].length &&

			// And the other set includes all elements of the subset.
			coveredSession[kOriginSet].every(origin => session[kOriginSet].includes(origin)) &&

			// Makes sure that the session can handle all requests from the covered session.
			coveredSession[kCurrentStreamsCount] + session[kCurrentStreamsCount] <= session.remoteSettings.maxConcurrentStreams
		) {
			// This allows pending requests to finish and prevents making new requests.
			gracefullyClose(coveredSession);
		}
	}
};

// This is basically inverted `closeCoveredSessions(...)`.
const closeSessionIfCovered = (where, coveredSession) => {
	for (const session of where) {
		if (
			coveredSession[kOriginSet].length < session[kOriginSet].length &&
			coveredSession[kOriginSet].every(origin => session[kOriginSet].includes(origin)) &&
			coveredSession[kCurrentStreamsCount] + session[kCurrentStreamsCount] <= session.remoteSettings.maxConcurrentStreams
		) {
			gracefullyClose(coveredSession);
		}
	}
};

const getSessions = ({agent, isFree}) => {
	const result = {};

	// eslint-disable-next-line guard-for-in
	for (const normalizedOptions in agent.sessions) {
		const sessions = agent.sessions[normalizedOptions];

		const filtered = sessions.filter(session => {
			const result = session[Agent.kCurrentStreamsCount] < session.remoteSettings.maxConcurrentStreams;

			return isFree ? result : !result;
		});

		if (filtered.length !== 0) {
			result[normalizedOptions] = filtered;
		}
	}

	return result;
};

const gracefullyClose = session => {
	session[kGracefullyClosing] = true;

	if (session[kCurrentStreamsCount] === 0) {
		session.close();
	}
};

class Agent extends EventEmitter {
	constructor({timeout = 60000, maxSessions = Infinity, maxFreeSessions = 10, maxCachedTlsSessions = 100} = {}) {
		super();

		// A session is considered busy when its current streams count
		// is equal to or greater than the `maxConcurrentStreams` value.

		// A session is considered free when its current streams count
		// is less than the `maxConcurrentStreams` value.

		// SESSIONS[NORMALIZED_OPTIONS] = [];
		this.sessions = {};

		// The queue for creating new sessions. It looks like this:
		// QUEUE[NORMALIZED_OPTIONS][NORMALIZED_ORIGIN] = ENTRY_FUNCTION
		//
		// The entry function has `listeners`, `completed` and `destroyed` properties.
		// `listeners` is an array of objects containing `resolve` and `reject` functions.
		// `completed` is a boolean. It's set to true after ENTRY_FUNCTION is executed.
		// `destroyed` is a boolean. If it's set to true, the session will be destroyed if hasn't connected yet.
		this.queue = {};

		// Each session will use this timeout value.
		this.timeout = timeout;

		// Max sessions in total
		this.maxSessions = maxSessions;

		// Max free sessions in total
		// TODO: decreasing `maxFreeSessions` should close some sessions
		this.maxFreeSessions = maxFreeSessions;

		this._freeSessionsCount = 0;
		this._sessionsCount = 0;

		// We don't support push streams by default.
		this.settings = {
			enablePush: false
		};

		// Reusing TLS sessions increases performance.
		this.tlsSessionCache = new QuickLRU({maxSize: maxCachedTlsSessions});
	}

	static normalizeOrigin(url, servername) {
		if (typeof url === 'string') {
			url = new URL(url);
		}

		if (servername && url.hostname !== servername) {
			url.hostname = servername;
		}

		return url.origin;
	}

	normalizeOptions(options) {
		let normalized = '';

		if (options) {
			for (const key of nameKeys) {
				if (options[key]) {
					normalized += `:${options[key]}`;
				}
			}
		}

		return normalized;
	}

	_tryToCreateNewSession(normalizedOptions, normalizedOrigin) {
		if (!(normalizedOptions in this.queue) || !(normalizedOrigin in this.queue[normalizedOptions])) {
			return;
		}

		const item = this.queue[normalizedOptions][normalizedOrigin];

		// The entry function can be run only once.
		// BUG: The session may be never created when:
		// - the first condition is false AND
		// - this function is never called with the same arguments in the future.
		if (this._sessionsCount < this.maxSessions && !item.completed) {
			item.completed = true;

			item();
		}
	}

	getSession(origin, options, listeners) {
		return new Promise((resolve, reject) => {
			if (Array.isArray(listeners)) {
				listeners = [...listeners];

				// Resolve the current promise ASAP, we're just moving the listeners.
				// They will be executed at a different time.
				resolve();
			} else {
				listeners = [{resolve, reject}];
			}

			const normalizedOptions = this.normalizeOptions(options);
			const normalizedOrigin = Agent.normalizeOrigin(origin, options && options.servername);

			if (normalizedOrigin === undefined) {
				for (const {reject} of listeners) {
					reject(new TypeError('The `origin` argument needs to be a string or an URL object'));
				}

				return;
			}

			if (normalizedOptions in this.sessions) {
				const sessions = this.sessions[normalizedOptions];

				let maxConcurrentStreams = -1;
				let currentStreamsCount = -1;
				let optimalSession;

				// We could just do this.sessions[normalizedOptions].find(...) but that isn't optimal.
				// Additionally, we are looking for session which has biggest current pending streams count.
				for (const session of sessions) {
					const sessionMaxConcurrentStreams = session.remoteSettings.maxConcurrentStreams;

					if (sessionMaxConcurrentStreams < maxConcurrentStreams) {
						break;
					}

					if (session[kOriginSet].includes(normalizedOrigin)) {
						const sessionCurrentStreamsCount = session[kCurrentStreamsCount];

						if (
							sessionCurrentStreamsCount >= sessionMaxConcurrentStreams ||
							session[kGracefullyClosing] ||
							// Unfortunately the `close` event isn't called immediately,
							// so `session.destroyed` is `true`, but `session.closed` is `false`.
							session.destroyed
						) {
							continue;
						}

						// We only need set this once.
						if (!optimalSession) {
							maxConcurrentStreams = sessionMaxConcurrentStreams;
						}

						// We're looking for the session which has biggest current pending stream count,
						// in order to minimalize the amount of active sessions.
						if (sessionCurrentStreamsCount > currentStreamsCount) {
							optimalSession = session;
							currentStreamsCount = sessionCurrentStreamsCount;
						}
					}
				}

				if (optimalSession) {
					/* istanbul ignore next: safety check */
					if (listeners.length !== 1) {
						for (const {reject} of listeners) {
							const error = new Error(
								`Expected the length of listeners to be 1, got ${listeners.length}.\n` +
								'Please report this to https://github.com/szmarczak/http2-wrapper/'
							);

							reject(error);
						}

						return;
					}

					listeners[0].resolve(optimalSession);
					return;
				}
			}

			if (normalizedOptions in this.queue) {
				if (normalizedOrigin in this.queue[normalizedOptions]) {
					// There's already an item in the queue, just attach ourselves to it.
					this.queue[normalizedOptions][normalizedOrigin].listeners.push(...listeners);

					// This shouldn't be executed here.
					// See the comment inside _tryToCreateNewSession.
					this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
					return;
				}
			} else {
				this.queue[normalizedOptions] = {};
			}

			// The entry must be removed from the queue IMMEDIATELY when:
			// 1. the session connects successfully,
			// 2. an error occurs.
			const removeFromQueue = () => {
				// Our entry can be replaced. We cannot remove the new one.
				if (normalizedOptions in this.queue && this.queue[normalizedOptions][normalizedOrigin] === entry) {
					delete this.queue[normalizedOptions][normalizedOrigin];

					if (Object.keys(this.queue[normalizedOptions]).length === 0) {
						delete this.queue[normalizedOptions];
					}
				}
			};

			// The main logic is here
			const entry = () => {
				const name = `${normalizedOrigin}:${normalizedOptions}`;
				let receivedSettings = false;

				try {
					const session = http2.connect(origin, {
						createConnection: this.createConnection,
						settings: this.settings,
						session: this.tlsSessionCache.get(name),
						...options
					});
					session[kCurrentStreamsCount] = 0;
					session[kGracefullyClosing] = false;

					const isFree = () => session[kCurrentStreamsCount] < session.remoteSettings.maxConcurrentStreams;
					let wasFree = true;

					session.socket.once('session', tlsSession => {
						this.tlsSessionCache.set(name, tlsSession);
					});

					session.once('error', error => {
						// Listeners are empty when the session successfully connected.
						for (const {reject} of listeners) {
							reject(error);
						}

						// The connection got broken, purge the cache.
						this.tlsSessionCache.delete(name);
					});

					session.setTimeout(this.timeout, () => {
						// Terminates all streams owned by this session.
						// TODO: Maybe the streams should have a "Session timed out" error?
						session.destroy();
					});

					session.once('close', () => {
						if (receivedSettings) {
							// 1. If it wasn't free then no need to decrease because
							//    it has been decreased already in session.request().
							// 2. `stream.once('close')` won't increment the count
							//    because the session is already closed.
							if (wasFree) {
								this._freeSessionsCount--;
							}

							this._sessionsCount--;

							// This cannot be moved to the stream logic,
							// because there may be a session that hadn't made a single request.
							const where = this.sessions[normalizedOptions];
							where.splice(where.indexOf(session), 1);

							if (where.length === 0) {
								delete this.sessions[normalizedOptions];
							}
						} else {
							// Broken connection
							const error = new Error('Session closed without receiving a SETTINGS frame');
							error.code = 'HTTP2WRAPPER_NOSETTINGS';

							for (const {reject} of listeners) {
								reject(error);
							}

							removeFromQueue();
						}

						// There may be another session awaiting.
						this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
					});

					// Iterates over the queue and processes listeners.
					const processListeners = () => {
						if (!(normalizedOptions in this.queue) || !isFree()) {
							return;
						}

						for (const origin of session[kOriginSet]) {
							if (origin in this.queue[normalizedOptions]) {
								const {listeners} = this.queue[normalizedOptions][origin];

								// Prevents session overloading.
								while (listeners.length !== 0 && isFree()) {
									// We assume `resolve(...)` calls `request(...)` *directly*,
									// otherwise the session will get overloaded.
									listeners.shift().resolve(session);
								}

								const where = this.queue[normalizedOptions];
								if (where[origin].listeners.length === 0) {
									delete where[origin];

									if (Object.keys(where).length === 0) {
										delete this.queue[normalizedOptions];
										break;
									}
								}

								// We're no longer free, no point in continuing.
								if (!isFree()) {
									break;
								}
							}
						}
					};

					// The Origin Set cannot shrink. No need to check if it suddenly became covered by another one.
					session.on('origin', () => {
						session[kOriginSet] = session.originSet;

						if (!isFree()) {
							// The session is full.
							return;
						}

						processListeners();

						// Close covered sessions (if possible).
						closeCoveredSessions(this.sessions[normalizedOptions], session);
					});

					session.once('remoteSettings', () => {
						// Fix Node.js bug preventing the process from exiting
						session.ref();
						session.unref();

						this._sessionsCount++;

						// The Agent could have been destroyed already.
						if (entry.destroyed) {
							const error = new Error('Agent has been destroyed');

							for (const listener of listeners) {
								listener.reject(error);
							}

							session.destroy();
							return;
						}

						session[kOriginSet] = session.originSet;

						{
							const where = this.sessions;

							if (normalizedOptions in where) {
								const sessions = where[normalizedOptions];
								sessions.splice(getSortedIndex(sessions, session, compareSessions), 0, session);
							} else {
								where[normalizedOptions] = [session];
							}
						}

						this._freeSessionsCount += 1;
						receivedSettings = true;

						this.emit('session', session);

						processListeners();
						removeFromQueue();

						// TODO: Close last recently used (or least used?) session
						if (session[kCurrentStreamsCount] === 0 && this._freeSessionsCount > this.maxFreeSessions) {
							session.close();
						}

						// Check if we haven't managed to execute all listeners.
						if (listeners.length !== 0) {
							// Request for a new session with predefined listeners.
							this.getSession(normalizedOrigin, options, listeners);
							listeners.length = 0;
						}

						// `session.remoteSettings.maxConcurrentStreams` might get increased
						session.on('remoteSettings', () => {
							processListeners();

							// In case the Origin Set changes
							closeCoveredSessions(this.sessions[normalizedOptions], session);
						});
					});

					// Shim `session.request()` in order to catch all streams
					session[kRequest] = session.request;
					session.request = (headers, streamOptions) => {
						if (session[kGracefullyClosing]) {
							throw new Error('The session is gracefully closing. No new streams are allowed.');
						}

						const stream = session[kRequest](headers, streamOptions);

						// The process won't exit until the session is closed or all requests are gone.
						session.ref();

						++session[kCurrentStreamsCount];

						if (session[kCurrentStreamsCount] === session.remoteSettings.maxConcurrentStreams) {
							this._freeSessionsCount--;
						}

						stream.once('close', () => {
							wasFree = isFree();

							--session[kCurrentStreamsCount];

							if (!session.destroyed && !session.closed) {
								closeSessionIfCovered(this.sessions[normalizedOptions], session);

								if (isFree() && !session.closed) {
									if (!wasFree) {
										this._freeSessionsCount++;

										wasFree = true;
									}

									const isEmpty = session[kCurrentStreamsCount] === 0;

									if (isEmpty) {
										session.unref();
									}

									if (
										isEmpty &&
										(
											this._freeSessionsCount > this.maxFreeSessions ||
											session[kGracefullyClosing]
										)
									) {
										session.close();
									} else {
										closeCoveredSessions(this.sessions[normalizedOptions], session);
										processListeners();
									}
								}
							}
						});

						return stream;
					};
				} catch (error) {
					for (const listener of listeners) {
						listener.reject(error);
					}

					removeFromQueue();
				}
			};

			entry.listeners = listeners;
			entry.completed = false;
			entry.destroyed = false;

			this.queue[normalizedOptions][normalizedOrigin] = entry;
			this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
		});
	}

	request(origin, options, headers, streamOptions) {
		return new Promise((resolve, reject) => {
			this.getSession(origin, options, [{
				reject,
				resolve: session => {
					try {
						resolve(session.request(headers, streamOptions));
					} catch (error) {
						reject(error);
					}
				}
			}]);
		});
	}

	createConnection(origin, options) {
		return Agent.connect(origin, options);
	}

	static connect(origin, options) {
		options.ALPNProtocols = ['h2'];

		const port = origin.port || 443;
		const host = origin.hostname || origin.host;

		if (typeof options.servername === 'undefined') {
			options.servername = host;
		}

		return tls.connect(port, host, options);
	}

	closeFreeSessions() {
		for (const sessions of Object.values(this.sessions)) {
			for (const session of sessions) {
				if (session[kCurrentStreamsCount] === 0) {
					session.close();
				}
			}
		}
	}

	destroy(reason) {
		for (const sessions of Object.values(this.sessions)) {
			for (const session of sessions) {
				session.destroy(reason);
			}
		}

		for (const entriesOfAuthority of Object.values(this.queue)) {
			for (const entry of Object.values(entriesOfAuthority)) {
				entry.destroyed = true;
			}
		}

		// New requests should NOT attach to destroyed sessions
		this.queue = {};
	}

	get freeSessions() {
		return getSessions({agent: this, isFree: true});
	}

	get busySessions() {
		return getSessions({agent: this, isFree: false});
	}
}

Agent.kCurrentStreamsCount = kCurrentStreamsCount;
Agent.kGracefullyClosing = kGracefullyClosing;

module.exports = {
	Agent,
	globalAgent: new Agent()
};


/***/ }),

/***/ 8014:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const http = __webpack_require__(3685);
const https = __webpack_require__(5687);
const resolveALPN = __webpack_require__(6673);
const QuickLRU = __webpack_require__(6273);
const Http2ClientRequest = __webpack_require__(6566);
const calculateServerName = __webpack_require__(751);
const urlToOptions = __webpack_require__(391);

const cache = new QuickLRU({maxSize: 100});
const queue = new Map();

const installSocket = (agent, socket, options) => {
	socket._httpMessage = {shouldKeepAlive: true};

	const onFree = () => {
		agent.emit('free', socket, options);
	};

	socket.on('free', onFree);

	const onClose = () => {
		agent.removeSocket(socket, options);
	};

	socket.on('close', onClose);

	const onRemove = () => {
		agent.removeSocket(socket, options);
		socket.off('close', onClose);
		socket.off('free', onFree);
		socket.off('agentRemove', onRemove);
	};

	socket.on('agentRemove', onRemove);

	agent.emit('free', socket, options);
};

const resolveProtocol = async options => {
	const name = `${options.host}:${options.port}:${options.ALPNProtocols.sort()}`;

	if (!cache.has(name)) {
		if (queue.has(name)) {
			const result = await queue.get(name);
			return result.alpnProtocol;
		}

		const {path, agent} = options;
		options.path = options.socketPath;

		const resultPromise = resolveALPN(options);
		queue.set(name, resultPromise);

		try {
			const {socket, alpnProtocol} = await resultPromise;
			cache.set(name, alpnProtocol);

			options.path = path;

			if (alpnProtocol === 'h2') {
				// https://github.com/nodejs/node/issues/33343
				socket.destroy();
			} else {
				const {globalAgent} = https;
				const defaultCreateConnection = https.Agent.prototype.createConnection;

				if (agent) {
					if (agent.createConnection === defaultCreateConnection) {
						installSocket(agent, socket, options);
					} else {
						socket.destroy();
					}
				} else if (globalAgent.createConnection === defaultCreateConnection) {
					installSocket(globalAgent, socket, options);
				} else {
					socket.destroy();
				}
			}

			queue.delete(name);

			return alpnProtocol;
		} catch (error) {
			queue.delete(name);

			throw error;
		}
	}

	return cache.get(name);
};

module.exports = async (input, options, callback) => {
	if (typeof input === 'string' || input instanceof URL) {
		input = urlToOptions(new URL(input));
	}

	if (typeof options === 'function') {
		callback = options;
		options = undefined;
	}

	options = {
		ALPNProtocols: ['h2', 'http/1.1'],
		...input,
		...options,
		resolveSocket: true
	};

	if (!Array.isArray(options.ALPNProtocols) || options.ALPNProtocols.length === 0) {
		throw new Error('The `ALPNProtocols` option must be an Array with at least one entry');
	}

	options.protocol = options.protocol || 'https:';
	const isHttps = options.protocol === 'https:';

	options.host = options.hostname || options.host || 'localhost';
	options.session = options.tlsSession;
	options.servername = options.servername || calculateServerName(options);
	options.port = options.port || (isHttps ? 443 : 80);
	options._defaultAgent = isHttps ? https.globalAgent : http.globalAgent;

	const agents = options.agent;

	if (agents) {
		if (agents.addRequest) {
			throw new Error('The `options.agent` object can contain only `http`, `https` or `http2` properties');
		}

		options.agent = agents[isHttps ? 'https' : 'http'];
	}

	if (isHttps) {
		const protocol = await resolveProtocol(options);

		if (protocol === 'h2') {
			if (agents) {
				options.agent = agents.http2;
			}

			return new Http2ClientRequest(options, callback);
		}
	}

	return http.request(options, callback);
};

module.exports.protocolCache = cache;


/***/ }),

/***/ 6566:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const http2 = __webpack_require__(5158);
const {Writable} = __webpack_require__(2781);
const {Agent, globalAgent} = __webpack_require__(6356);
const IncomingMessage = __webpack_require__(2841);
const urlToOptions = __webpack_require__(391);
const proxyEvents = __webpack_require__(9051);
const isRequestPseudoHeader = __webpack_require__(2379);
const {
	ERR_INVALID_ARG_TYPE,
	ERR_INVALID_PROTOCOL,
	ERR_HTTP_HEADERS_SENT,
	ERR_INVALID_HTTP_TOKEN,
	ERR_HTTP_INVALID_HEADER_VALUE,
	ERR_INVALID_CHAR
} = __webpack_require__(563);

const {
	HTTP2_HEADER_STATUS,
	HTTP2_HEADER_METHOD,
	HTTP2_HEADER_PATH,
	HTTP2_METHOD_CONNECT
} = http2.constants;

const kHeaders = Symbol('headers');
const kOrigin = Symbol('origin');
const kSession = Symbol('session');
const kOptions = Symbol('options');
const kFlushedHeaders = Symbol('flushedHeaders');
const kJobs = Symbol('jobs');

const isValidHttpToken = /^[\^`\-\w!#$%&*+.|~]+$/;
const isInvalidHeaderValue = /[^\t\u0020-\u007E\u0080-\u00FF]/;

class ClientRequest extends Writable {
	constructor(input, options, callback) {
		super({
			autoDestroy: false
		});

		const hasInput = typeof input === 'string' || input instanceof URL;
		if (hasInput) {
			input = urlToOptions(input instanceof URL ? input : new URL(input));
		}

		if (typeof options === 'function' || options === undefined) {
			// (options, callback)
			callback = options;
			options = hasInput ? input : {...input};
		} else {
			// (input, options, callback)
			options = {...input, ...options};
		}

		if (options.h2session) {
			this[kSession] = options.h2session;
		} else if (options.agent === false) {
			this.agent = new Agent({maxFreeSessions: 0});
		} else if (typeof options.agent === 'undefined' || options.agent === null) {
			if (typeof options.createConnection === 'function') {
				// This is a workaround - we don't have to create the session on our own.
				this.agent = new Agent({maxFreeSessions: 0});
				this.agent.createConnection = options.createConnection;
			} else {
				this.agent = globalAgent;
			}
		} else if (typeof options.agent.request === 'function') {
			this.agent = options.agent;
		} else {
			throw new ERR_INVALID_ARG_TYPE('options.agent', ['Agent-like Object', 'undefined', 'false'], options.agent);
		}

		if (options.protocol && options.protocol !== 'https:') {
			throw new ERR_INVALID_PROTOCOL(options.protocol, 'https:');
		}

		const port = options.port || options.defaultPort || (this.agent && this.agent.defaultPort) || 443;
		const host = options.hostname || options.host || 'localhost';

		// Don't enforce the origin via options. It may be changed in an Agent.
		delete options.hostname;
		delete options.host;
		delete options.port;

		const {timeout} = options;
		options.timeout = undefined;

		this[kHeaders] = Object.create(null);
		this[kJobs] = [];

		this.socket = null;
		this.connection = null;

		this.method = options.method || 'GET';
		this.path = options.path;

		this.res = null;
		this.aborted = false;
		this.reusedSocket = false;

		if (options.headers) {
			for (const [header, value] of Object.entries(options.headers)) {
				this.setHeader(header, value);
			}
		}

		if (options.auth && !('authorization' in this[kHeaders])) {
			this[kHeaders].authorization = 'Basic ' + Buffer.from(options.auth).toString('base64');
		}

		options.session = options.tlsSession;
		options.path = options.socketPath;

		this[kOptions] = options;

		// Clients that generate HTTP/2 requests directly SHOULD use the :authority pseudo-header field instead of the Host header field.
		if (port === 443) {
			this[kOrigin] = `https://${host}`;

			if (!(':authority' in this[kHeaders])) {
				this[kHeaders][':authority'] = host;
			}
		} else {
			this[kOrigin] = `https://${host}:${port}`;

			if (!(':authority' in this[kHeaders])) {
				this[kHeaders][':authority'] = `${host}:${port}`;
			}
		}

		if (timeout) {
			this.setTimeout(timeout);
		}

		if (callback) {
			this.once('response', callback);
		}

		this[kFlushedHeaders] = false;
	}

	get method() {
		return this[kHeaders][HTTP2_HEADER_METHOD];
	}

	set method(value) {
		if (value) {
			this[kHeaders][HTTP2_HEADER_METHOD] = value.toUpperCase();
		}
	}

	get path() {
		return this[kHeaders][HTTP2_HEADER_PATH];
	}

	set path(value) {
		if (value) {
			this[kHeaders][HTTP2_HEADER_PATH] = value;
		}
	}

	get _mustNotHaveABody() {
		return this.method === 'GET' || this.method === 'HEAD' || this.method === 'DELETE';
	}

	_write(chunk, encoding, callback) {
		// https://github.com/nodejs/node/blob/654df09ae0c5e17d1b52a900a545f0664d8c7627/lib/internal/http2/util.js#L148-L156
		if (this._mustNotHaveABody) {
			callback(new Error('The GET, HEAD and DELETE methods must NOT have a body'));
			/* istanbul ignore next: Node.js 12 throws directly */
			return;
		}

		this.flushHeaders();

		const callWrite = () => this._request.write(chunk, encoding, callback);
		if (this._request) {
			callWrite();
		} else {
			this[kJobs].push(callWrite);
		}
	}

	_final(callback) {
		if (this.destroyed) {
			return;
		}

		this.flushHeaders();

		const callEnd = () => {
			// For GET, HEAD and DELETE
			if (this._mustNotHaveABody) {
				callback();
				return;
			}

			this._request.end(callback);
		};

		if (this._request) {
			callEnd();
		} else {
			this[kJobs].push(callEnd);
		}
	}

	abort() {
		if (this.res && this.res.complete) {
			return;
		}

		if (!this.aborted) {
			process.nextTick(() => this.emit('abort'));
		}

		this.aborted = true;

		this.destroy();
	}

	_destroy(error, callback) {
		if (this.res) {
			this.res._dump();
		}

		if (this._request) {
			this._request.destroy();
		}

		callback(error);
	}

	async flushHeaders() {
		if (this[kFlushedHeaders] || this.destroyed) {
			return;
		}

		this[kFlushedHeaders] = true;

		const isConnectMethod = this.method === HTTP2_METHOD_CONNECT;

		// The real magic is here
		const onStream = stream => {
			this._request = stream;

			if (this.destroyed) {
				stream.destroy();
				return;
			}

			// Forwards `timeout`, `continue`, `close` and `error` events to this instance.
			if (!isConnectMethod) {
				proxyEvents(stream, this, ['timeout', 'continue', 'close', 'error']);
			}

			// Wait for the `finish` event. We don't want to emit the `response` event
			// before `request.end()` is called.
			const waitForEnd = fn => {
				return (...args) => {
					if (!this.writable && !this.destroyed) {
						fn(...args);
					} else {
						this.once('finish', () => {
							fn(...args);
						});
					}
				};
			};

			// This event tells we are ready to listen for the data.
			stream.once('response', waitForEnd((headers, flags, rawHeaders) => {
				// If we were to emit raw request stream, it would be as fast as the native approach.
				// Note that wrapping the raw stream in a Proxy instance won't improve the performance (already tested it).
				const response = new IncomingMessage(this.socket, stream.readableHighWaterMark);
				this.res = response;

				response.req = this;
				response.statusCode = headers[HTTP2_HEADER_STATUS];
				response.headers = headers;
				response.rawHeaders = rawHeaders;

				response.once('end', () => {
					if (this.aborted) {
						response.aborted = true;
						response.emit('aborted');
					} else {
						response.complete = true;

						// Has no effect, just be consistent with the Node.js behavior
						response.socket = null;
						response.connection = null;
					}
				});

				if (isConnectMethod) {
					response.upgrade = true;

					// The HTTP1 API says the socket is detached here,
					// but we can't do that so we pass the original HTTP2 request.
					if (this.emit('connect', response, stream, Buffer.alloc(0))) {
						this.emit('close');
					} else {
						// No listeners attached, destroy the original request.
						stream.destroy();
					}
				} else {
					// Forwards data
					stream.on('data', chunk => {
						if (!response._dumped && !response.push(chunk)) {
							stream.pause();
						}
					});

					stream.once('end', () => {
						response.push(null);
					});

					if (!this.emit('response', response)) {
						// No listeners attached, dump the response.
						response._dump();
					}
				}
			}));

			// Emits `information` event
			stream.once('headers', waitForEnd(
				headers => this.emit('information', {statusCode: headers[HTTP2_HEADER_STATUS]})
			));

			stream.once('trailers', waitForEnd((trailers, flags, rawTrailers) => {
				const {res} = this;

				// Assigns trailers to the response object.
				res.trailers = trailers;
				res.rawTrailers = rawTrailers;
			}));

			const {socket} = stream.session;
			this.socket = socket;
			this.connection = socket;

			for (const job of this[kJobs]) {
				job();
			}

			this.emit('socket', this.socket);
		};

		// Makes a HTTP2 request
		if (this[kSession]) {
			try {
				onStream(this[kSession].request(this[kHeaders]));
			} catch (error) {
				this.emit('error', error);
			}
		} else {
			this.reusedSocket = true;

			try {
				onStream(await this.agent.request(this[kOrigin], this[kOptions], this[kHeaders]));
			} catch (error) {
				this.emit('error', error);
			}
		}
	}

	getHeader(name) {
		if (typeof name !== 'string') {
			throw new ERR_INVALID_ARG_TYPE('name', 'string', name);
		}

		return this[kHeaders][name.toLowerCase()];
	}

	get headersSent() {
		return this[kFlushedHeaders];
	}

	removeHeader(name) {
		if (typeof name !== 'string') {
			throw new ERR_INVALID_ARG_TYPE('name', 'string', name);
		}

		if (this.headersSent) {
			throw new ERR_HTTP_HEADERS_SENT('remove');
		}

		delete this[kHeaders][name.toLowerCase()];
	}

	setHeader(name, value) {
		if (this.headersSent) {
			throw new ERR_HTTP_HEADERS_SENT('set');
		}

		if (typeof name !== 'string' || (!isValidHttpToken.test(name) && !isRequestPseudoHeader(name))) {
			throw new ERR_INVALID_HTTP_TOKEN('Header name', name);
		}

		if (typeof value === 'undefined') {
			throw new ERR_HTTP_INVALID_HEADER_VALUE(value, name);
		}

		if (isInvalidHeaderValue.test(value)) {
			throw new ERR_INVALID_CHAR('header content', name);
		}

		this[kHeaders][name.toLowerCase()] = value;
	}

	setNoDelay() {
		// HTTP2 sockets cannot be malformed, do nothing.
	}

	setSocketKeepAlive() {
		// HTTP2 sockets cannot be malformed, do nothing.
	}

	setTimeout(ms, callback) {
		const applyTimeout = () => this._request.setTimeout(ms, callback);

		if (this._request) {
			applyTimeout();
		} else {
			this[kJobs].push(applyTimeout);
		}

		return this;
	}

	get maxHeadersCount() {
		if (!this.destroyed && this._request) {
			return this._request.session.localSettings.maxHeaderListSize;
		}

		return undefined;
	}

	set maxHeadersCount(_value) {
		// Updating HTTP2 settings would affect all requests, do nothing.
	}
}

module.exports = ClientRequest;


/***/ }),

/***/ 2841:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const {Readable} = __webpack_require__(2781);

class IncomingMessage extends Readable {
	constructor(socket, highWaterMark) {
		super({
			highWaterMark,
			autoDestroy: false
		});

		this.statusCode = null;
		this.statusMessage = '';
		this.httpVersion = '2.0';
		this.httpVersionMajor = 2;
		this.httpVersionMinor = 0;
		this.headers = {};
		this.trailers = {};
		this.req = null;

		this.aborted = false;
		this.complete = false;
		this.upgrade = null;

		this.rawHeaders = [];
		this.rawTrailers = [];

		this.socket = socket;
		this.connection = socket;

		this._dumped = false;
	}

	_destroy(error) {
		this.req._request.destroy(error);
	}

	setTimeout(ms, callback) {
		this.req.setTimeout(ms, callback);
		return this;
	}

	_dump() {
		if (!this._dumped) {
			this._dumped = true;

			this.removeAllListeners('data');
			this.resume();
		}
	}

	_read() {
		if (this.req) {
			this.req._request.resume();
		}
	}
}

module.exports = IncomingMessage;


/***/ }),

/***/ 9451:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const http2 = __webpack_require__(5158);
const agent = __webpack_require__(6356);
const ClientRequest = __webpack_require__(6566);
const IncomingMessage = __webpack_require__(2841);
const auto = __webpack_require__(8014);

const request = (url, options, callback) => {
	return new ClientRequest(url, options, callback);
};

const get = (url, options, callback) => {
	// eslint-disable-next-line unicorn/prevent-abbreviations
	const req = new ClientRequest(url, options, callback);
	req.end();

	return req;
};

module.exports = {
	...http2,
	ClientRequest,
	IncomingMessage,
	...agent,
	request,
	get,
	auto
};


/***/ }),

/***/ 751:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const net = __webpack_require__(1808);
/* istanbul ignore file: https://github.com/nodejs/node/blob/v13.0.1/lib/_http_agent.js */

module.exports = options => {
	let servername = options.host;
	const hostHeader = options.headers && options.headers.host;

	if (hostHeader) {
		if (hostHeader.startsWith('[')) {
			const index = hostHeader.indexOf(']');
			if (index === -1) {
				servername = hostHeader;
			} else {
				servername = hostHeader.slice(1, -1);
			}
		} else {
			servername = hostHeader.split(':', 1)[0];
		}
	}

	if (net.isIP(servername)) {
		return '';
	}

	return servername;
};


/***/ }),

/***/ 563:
/***/ ((module) => {

"use strict";

/* istanbul ignore file: https://github.com/nodejs/node/blob/master/lib/internal/errors.js */

const makeError = (Base, key, getMessage) => {
	module.exports[key] = class NodeError extends Base {
		constructor(...args) {
			super(typeof getMessage === 'string' ? getMessage : getMessage(args));
			this.name = `${super.name} [${key}]`;
			this.code = key;
		}
	};
};

makeError(TypeError, 'ERR_INVALID_ARG_TYPE', args => {
	const type = args[0].includes('.') ? 'property' : 'argument';

	let valid = args[1];
	const isManyTypes = Array.isArray(valid);

	if (isManyTypes) {
		valid = `${valid.slice(0, -1).join(', ')} or ${valid.slice(-1)}`;
	}

	return `The "${args[0]}" ${type} must be ${isManyTypes ? 'one of' : 'of'} type ${valid}. Received ${typeof args[2]}`;
});

makeError(TypeError, 'ERR_INVALID_PROTOCOL', args => {
	return `Protocol "${args[0]}" not supported. Expected "${args[1]}"`;
});

makeError(Error, 'ERR_HTTP_HEADERS_SENT', args => {
	return `Cannot ${args[0]} headers after they are sent to the client`;
});

makeError(TypeError, 'ERR_INVALID_HTTP_TOKEN', args => {
	return `${args[0]} must be a valid HTTP token [${args[1]}]`;
});

makeError(TypeError, 'ERR_HTTP_INVALID_HEADER_VALUE', args => {
	return `Invalid value "${args[0]} for header "${args[1]}"`;
});

makeError(TypeError, 'ERR_INVALID_CHAR', args => {
	return `Invalid character in ${args[0]} [${args[1]}]`;
});


/***/ }),

/***/ 2379:
/***/ ((module) => {

"use strict";


module.exports = header => {
	switch (header) {
		case ':method':
		case ':scheme':
		case ':authority':
		case ':path':
			return true;
		default:
			return false;
	}
};


/***/ }),

/***/ 9051:
/***/ ((module) => {

"use strict";


module.exports = (from, to, events) => {
	for (const event of events) {
		from.on(event, (...args) => to.emit(event, ...args));
	}
};


/***/ }),

/***/ 391:
/***/ ((module) => {

"use strict";

/* istanbul ignore file: https://github.com/nodejs/node/blob/a91293d4d9ab403046ab5eb022332e4e3d249bd3/lib/internal/url.js#L1257 */

module.exports = url => {
	const options = {
		protocol: url.protocol,
		hostname: typeof url.hostname === 'string' && url.hostname.startsWith('[') ? url.hostname.slice(1, -1) : url.hostname,
		host: url.host,
		hash: url.hash,
		search: url.search,
		pathname: url.pathname,
		href: url.href,
		path: `${url.pathname || ''}${url.search || ''}`
	};

	if (typeof url.port === 'string' && url.port.length !== 0) {
		options.port = Number(url.port);
	}

	if (url.username || url.password) {
		options.auth = `${url.username || ''}:${url.password || ''}`;
	}

	return options;
};


/***/ }),

/***/ 2033:
/***/ ((module) => {

"use strict";

module.exports = object => {
	const result = {};

	for (const [key, value] of Object.entries(object)) {
		result[key.toLowerCase()] = value;
	}

	return result;
};


/***/ }),

/***/ 4997:
/***/ ((module) => {

"use strict";


class CancelError extends Error {
	constructor(reason) {
		super(reason || 'Promise was canceled');
		this.name = 'CancelError';
	}

	get isCanceled() {
		return true;
	}
}

class PCancelable {
	static fn(userFn) {
		return (...arguments_) => {
			return new PCancelable((resolve, reject, onCancel) => {
				arguments_.push(onCancel);
				// eslint-disable-next-line promise/prefer-await-to-then
				userFn(...arguments_).then(resolve, reject);
			});
		};
	}

	constructor(executor) {
		this._cancelHandlers = [];
		this._isPending = true;
		this._isCanceled = false;
		this._rejectOnCancel = true;

		this._promise = new Promise((resolve, reject) => {
			this._reject = reject;

			const onResolve = value => {
				if (!this._isCanceled || !onCancel.shouldReject) {
					this._isPending = false;
					resolve(value);
				}
			};

			const onReject = error => {
				this._isPending = false;
				reject(error);
			};

			const onCancel = handler => {
				if (!this._isPending) {
					throw new Error('The `onCancel` handler was attached after the promise settled.');
				}

				this._cancelHandlers.push(handler);
			};

			Object.defineProperties(onCancel, {
				shouldReject: {
					get: () => this._rejectOnCancel,
					set: boolean => {
						this._rejectOnCancel = boolean;
					}
				}
			});

			return executor(onResolve, onReject, onCancel);
		});
	}

	then(onFulfilled, onRejected) {
		// eslint-disable-next-line promise/prefer-await-to-then
		return this._promise.then(onFulfilled, onRejected);
	}

	catch(onRejected) {
		return this._promise.catch(onRejected);
	}

	finally(onFinally) {
		return this._promise.finally(onFinally);
	}

	cancel(reason) {
		if (!this._isPending || this._isCanceled) {
			return;
		}

		this._isCanceled = true;

		if (this._cancelHandlers.length > 0) {
			try {
				for (const handler of this._cancelHandlers) {
					handler();
				}
			} catch (error) {
				this._reject(error);
				return;
			}
		}

		if (this._rejectOnCancel) {
			this._reject(new CancelError(reason));
		}
	}

	get isCanceled() {
		return this._isCanceled;
	}
}

Object.setPrototypeOf(PCancelable.prototype, Promise.prototype);

module.exports = PCancelable;
module.exports.CancelError = CancelError;


/***/ }),

/***/ 7480:
/***/ ((module) => {

"use strict";


module.exports = string => {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	try {
		new URL(string); // eslint-disable-line no-new
		return true;
	} catch {
		return false;
	}
};


/***/ }),

/***/ 5830:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(__webpack_require__(6689)),n=e(__webpack_require__(9785)),r=__webpack_require__(3470),o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var a,i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function c(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n}(a=exports.zl||(exports.zl={})).NotAsked="NotAsked",a.Loading="Loading",a.LoadSuccess="LoadSuccess",a.LoadError="LoadError";var u=r.unionize({NotAsked:{},Buffering:{},Loading:{},LoadSuccess:{},LoadError:r.ofType()}),s=r.unionize({ViewChanged:r.ofType(),BufferingEnded:{},LoadSuccess:{},LoadError:r.ofType()}),d=function(e,t){return function(n){var r=m(g(e,t));r.promise.then(function(e){return n.update(s.LoadSuccess({}))}).catch(function(e){e.isCanceled||n.update(s.LoadError({msg:"Failed to load"}))}),n.promiseCache.loading=r}},f=function(e){e.promiseCache.buffering.cancel()},p=function(e){function r(t){var n=e.call(this,t)||this;return n.promiseCache={},n.initialState=u.NotAsked(),n.state=n.initialState,n.update=n.update.bind(n),n}return function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(r,e),r.reducer=function(e,t,n){return s.match(e,{ViewChanged:function(e){return!0===e.inView?n.src?u.match(t,{NotAsked:function(){return n.debounceDurationMs?{nextState:u.Buffering(),cmd:(e=n.debounceDurationMs,function(t){var n=m(l(e));n.promise.then(function(){return t.update(s.BufferingEnded())}).catch(function(e){}),t.promiseCache.buffering=n})}:{nextState:u.Loading(),cmd:d(n,n.experimentalDecode)};var e},default:function(){return{nextState:t}}}):{nextState:u.LoadSuccess()}:u.match(t,{Buffering:function(){return{nextState:u.NotAsked(),cmd:f}},default:function(){return{nextState:t}}})},BufferingEnded:function(){return{nextState:u.Loading(),cmd:d(n,n.experimentalDecode)}},LoadSuccess:function(){return{nextState:u.LoadSuccess()}},LoadError:function(e){return{nextState:u.LoadError(e)}}})},r.prototype.update=function(e){var t=this,n=r.reducer(e,this.state,this.props),o=n.nextState,a=n.cmd;this.props.debugActions&&( true&&console.warn('You are running LazyImage with debugActions="true" in production. This might have performance implications.'),console.log({action:e,prevState:this.state,nextState:o})),this.setState(o,function(){return a&&a(t)})},r.prototype.componentWillUnmount=function(){this.promiseCache.loading&&this.promiseCache.loading.cancel(),this.promiseCache.buffering&&this.promiseCache.buffering.cancel(),this.promiseCache={}},r.prototype.render=function(){var e=this,r=this.props,o=r.children,a=r.loadEagerly,d=r.observerProps,f=c(r,["children","loadEagerly","observerProps","experimentalDecode","debounceDurationMs","debugActions"]);return a?o({imageState:u.LoadSuccess().tag,imageProps:f}):t.createElement(n,i({rootMargin:"50px 0px",threshold:.01},d,{onChange:function(t){return e.update(s.ViewChanged({inView:t}))}}),function(t){return o({imageState:"Buffering"===e.state.tag?exports.zl.Loading:e.state.tag,imageProps:f,ref:t.ref})})},r.displayName="LazyImageFull",r}(t.Component),g=function(e,t){var n=e.src,r=e.srcSet,o=e.alt,a=e.sizes;return void 0===t&&(t=!1),new Promise(function(e,i){var c=new Image;if(r&&(c.srcset=r),o&&(c.alt=o),a&&(c.sizes=a),c.src=n,t&&"decode"in c)return c.decode().then(function(t){return e(t)}).catch(function(e){return i(e)});c.onload=e,c.onerror=i})},l=function(e){return new Promise(function(t){return setTimeout(t,e)})},m=function(e){var t=!1;return{promise:new Promise(function(n,r){e.then(function(e){return t?r({isCanceled:!0}):n(e)}),e.catch(function(e){return r(t?{isCanceled:!0}:e)})}),cancel:function(){t=!0}}},h=function(e){var n=e.actual,r=e.placeholder,o=e.loading,a=e.error,u=c(e,["actual","placeholder","loading","error"]);return t.createElement(p,i({},u),function(e){var t=e.imageProps,i=e.ref;switch(e.imageState){case exports.zl.NotAsked:return!!r&&r({imageProps:t,ref:i});case exports.zl.Loading:return o?o():!!r&&r({imageProps:t,ref:i});case exports.zl.LoadSuccess:return n({imageProps:t});case exports.zl.LoadError:return a?a():n({imageProps:t})}})};h.displayName="LazyImage",__webpack_unused_export__=h,exports.AZ=p;
//# sourceMappingURL=react-lazy-images.js.map


/***/ }),

/***/ 5228:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ W)
/* harmony export */ });
/* harmony import */ var got__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8501);
/* harmony import */ var p_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8098);
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8751);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([p_map__WEBPACK_IMPORTED_MODULE_0__, notion_utils__WEBPACK_IMPORTED_MODULE_1__]);
([p_map__WEBPACK_IMPORTED_MODULE_0__, notion_utils__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
var L=Object.defineProperty,Z=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var x=(p,t,s)=>t in p?L(p,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):p[t]=s,n=(p,t)=>{for(var s in t||(t={}))Q.call(t,s)&&x(p,s,t[s]);if(I)for(var s of I(t))Y.call(t,s)&&x(p,s,t[s]);return p},m=(p,t)=>Z(p,z(t));var W=class{constructor({apiBaseUrl:t="https://www.notion.so/api/v3",authToken:s,activeUser:e,userTimeZone:a="America/New_York"}={}){this._apiBaseUrl=t,this._authToken=s,this._activeUser=e,this._userTimeZone=a}async getPage(t,{concurrency:s=3,fetchCollections:e=!0,signFileUrls:a=!0,gotOptions:i}={}){var g,f,_;let o=await this.getPageRaw(t,i),r=o==null?void 0:o.recordMap;if(!(r!=null&&r.block))throw new Error(`Notion page not found "${(0,notion_utils__WEBPACK_IMPORTED_MODULE_1__.uuidToId)(t)}"`);for(r.collection=(g=r.collection)!=null?g:{},r.collection_view=(f=r.collection_view)!=null?f:{},r.notion_user=(_=r.notion_user)!=null?_:{},r.collection_query={},r.signed_urls={};;){let u=(0,notion_utils__WEBPACK_IMPORTED_MODULE_1__.getPageContentBlockIds)(r).filter(c=>!r.block[c]);if(!u.length)break;let h=await this.getBlocks(u,i).then(c=>c.recordMap.block);r.block=n(n({},r.block),h)}let y=(0,notion_utils__WEBPACK_IMPORTED_MODULE_1__.getPageContentBlockIds)(r);if(e){let u=y.flatMap(h=>{let c=r.block[h].value;return c&&(c.type==="collection_view"||c.type==="collection_view_page")&&c.collection_id?c.view_ids.map(b=>({collectionId:c.collection_id,collectionViewId:b})):[]});await (0,p_map__WEBPACK_IMPORTED_MODULE_0__["default"])(u,async h=>{var k,v;let{collectionId:c,collectionViewId:b}=h,R=(k=r.collection_view[b])==null?void 0:k.value;try{let l=await this.getCollectionData(c,b,R,{gotOptions:i});r.block=n(n({},r.block),l.recordMap.block),r.collection=n(n({},r.collection),l.recordMap.collection),r.collection_view=n(n({},r.collection_view),l.recordMap.collection_view),r.notion_user=n(n({},r.notion_user),l.recordMap.notion_user),r.collection_query[c]=m(n({},r.collection_query[c]),{[b]:(v=l.result)==null?void 0:v.reducerResults})}catch(l){console.warn("NotionAPI collectionQuery error",t,l.message),console.error(l)}},{concurrency:s})}return a&&await this.addSignedUrls({recordMap:r,contentBlockIds:y,gotOptions:i}),r}async addSignedUrls({recordMap:t,contentBlockIds:s,gotOptions:e={}}){t.signed_urls={},s||(s=(0,notion_utils__WEBPACK_IMPORTED_MODULE_1__.getPageContentBlockIds)(t));let a=s.flatMap(i=>{var r,y,g,f,_;let o=t.block[i].value;if(o&&(o.type==="pdf"||o.type==="audio"||o.type==="image"&&((r=o.file_ids)==null?void 0:r.length)||o.type==="video"||o.type==="file"||o.type==="page")){let u=o.type==="page"?(y=o.format)==null?void 0:y.page_cover:(_=(f=(g=o.properties)==null?void 0:g.source)==null?void 0:f[0])==null?void 0:_[0];if(u)return u.indexOf("youtube")>=0||u.indexOf("vimeo")>=0?[]:{permissionRecord:{table:"block",id:o.id},url:u}}return[]});if(a.length>0)try{let{signedUrls:i}=await this.getSignedFileUrls(a,e);if(i.length===a.length)for(let o=0;o<a.length;++o){let r=a[o],y=i[o];t.signed_urls[r.permissionRecord.id]=y}}catch(i){console.warn("NotionAPI getSignedfileUrls error",i)}}async getPageRaw(t,s){let e=(0,notion_utils__WEBPACK_IMPORTED_MODULE_1__.parsePageId)(t);if(!e)throw new Error(`invalid notion pageId "${t}"`);let a={pageId:e,limit:100,cursor:{stack:[]},chunkNumber:0,verticalColumns:!1};return this.fetch({endpoint:"loadPageChunk",body:a,gotOptions:s})}async getCollectionData(t,s,e,{limit:a=9999,searchQuery:i="",userTimeZone:o=this._userTimeZone,loadContentCover:r=!0,gotOptions:y}={}){var h,c,b,R,k,v,l,T;let g=e==null?void 0:e.type,f=g==="board",_=((h=e==null?void 0:e.format)==null?void 0:h.board_columns_by)||((c=e==null?void 0:e.format)==null?void 0:c.collection_group_by),u=m(n({type:"reducer",reducers:{collection_group_results:{type:"results",limit:a,loadContentCover:r}},sort:[]},e==null?void 0:e.query2),{searchQuery:i,userTimeZone:o});if(_){let q=((b=e==null?void 0:e.format)==null?void 0:b.board_columns)||((R=e==null?void 0:e.format)==null?void 0:R.collection_groups)||[],M=[f?"board":"group_aggregation","results"],$={checkbox:"checkbox_is",url:"string_starts_with",text:"string_starts_with",select:"enum_is",multi_select:"enum_contains",created_time:"date_is_within",undefined:"is_empty"},P={};for(let O of q){let{property:D,value:{value:d,type:N}}=O;for(let U of M){let F=U==="results"?{type:U,limit:a}:{type:"aggregation",aggregation:{aggregator:"count"}},B=typeof d>"u",C=d==null?void 0:d.range,j=B?"uncategorized":C?((k=d.range)==null?void 0:k.start_date)||((v=d.range)==null?void 0:v.end_date):(d==null?void 0:d.value)||d,A=!B&&(C||(d==null?void 0:d.value)||d);P[`${U}:${N}:${j}`]=m(n({},F),{filter:{operator:"and",filters:[{property:D,filter:n({operator:B?"is_empty":$[N]},!B&&{value:{type:"exact",value:A}})}]}})}}let E=f?"board_columns":`${g}_groups`;u=m(n({type:"reducer",reducers:n({[E]:m(n({type:"groups",groupBy:_},((l=e==null?void 0:e.query2)==null?void 0:l.filter)&&{filter:(T=e==null?void 0:e.query2)==null?void 0:T.filter}),{groupSortPreference:q.map(O=>O==null?void 0:O.value),limit:a})},P)},e==null?void 0:e.query2),{searchQuery:i,userTimeZone:o})}return this.fetch({endpoint:"queryCollection",body:{collection:{id:t},collectionView:{id:s},loader:u},gotOptions:y})}async getUsers(t,s){return this.fetch({endpoint:"getRecordValues",body:{requests:t.map(e=>({id:e,table:"notion_user"}))},gotOptions:s})}async getBlocks(t,s){return this.fetch({endpoint:"syncRecordValues",body:{requests:t.map(e=>({table:"block",id:e,version:-1}))},gotOptions:s})}async getSignedFileUrls(t,s){return this.fetch({endpoint:"getSignedFileUrls",body:{urls:t},gotOptions:s})}async search(t,s){let e={type:"BlocksInAncestor",source:"quick_find_public",ancestorId:(0,notion_utils__WEBPACK_IMPORTED_MODULE_1__.parsePageId)(t.ancestorId),sort:"Relevance",limit:t.limit||20,query:t.query,filters:n({isDeletedOnly:!1,isNavigableOnly:!1,excludeTemplates:!0,requireEditPermissions:!1,ancestors:[],createdBy:[],editedBy:[],lastEditedTime:{},createdTime:{}},t.filters)};return this.fetch({endpoint:"search",body:e,gotOptions:s})}async fetch({endpoint:t,body:s,gotOptions:e,headers:a}){let i=m(n(n({},a),e==null?void 0:e.headers),{"Content-Type":"application/json"});this._authToken&&(i.cookie=`token_v2=${this._authToken}`),this._activeUser&&(i["x-notion-active-user-header"]=this._activeUser);let o=`${this._apiBaseUrl}/${t}`;return got__WEBPACK_IMPORTED_MODULE_2__.post(o,m(n({},e),{json:s,headers:i})).json()}};
//# sourceMappingURL=index.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8639:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cp": () => (/* binding */ Xt),
/* harmony export */   "zM": () => (/* binding */ Ie),
/* harmony export */   "Hp": () => (/* binding */ Pe)
/* harmony export */ });
/* unused harmony exports NotionContextConsumer, NotionContextProvider, cs, dummyLink, formatDate, getHashFragmentValue, getListNumber, getYoutubeId, isBrowser, useNotionContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1985);
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8751);
/* harmony import */ var is_url_superb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7480);
/* harmony import */ var react_lazy_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5830);
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9358);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8622);
/* harmony import */ var react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2784);
/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2067);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_utils__WEBPACK_IMPORTED_MODULE_2__]);
notion_utils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var gt=Object.defineProperty,ht=Object.defineProperties;var vt=Object.getOwnPropertyDescriptors;var fe=Object.getOwnPropertySymbols;var Io=Object.prototype.hasOwnProperty,Po=Object.prototype.propertyIsEnumerable;var _o=(e,n,t)=>n in e?gt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))Io.call(n,t)&&_o(e,t,n[t]);if(fe)for(var t of fe(n))Po.call(n,t)&&_o(e,t,n[t]);return e},O=(e,n)=>ht(e,vt(n));var P=(e,n)=>{var t={};for(var s in e)Io.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&fe)for(var s of fe(e))n.indexOf(s)<0&&Po.call(e,s)&&(t[s]=e[s]);return t};var Lo=(e,n,t)=>new Promise((s,a)=>{var r=c=>{try{m(t.next(c))}catch(p){a(p)}},l=c=>{try{m(t.throw(c))}catch(p){a(p)}},m=c=>c.done?s(c.value):Promise.resolve(c.value).then(r,l);m((t=t.apply(e,n)).next())});var Ie=(e,n)=>{if(!e)return null;if(e.startsWith("data:")||e.startsWith("https://images.unsplash.com"))return e;e.startsWith("/images")&&(e=`https://www.notion.so${e}`),e=`https://www.notion.so${e.startsWith("/image")?e:`/image/${encodeURIComponent(e)}`}`;let t=new URL(e),s=n.parent_table==="space"?"block":n.parent_table;return s==="collection"&&(s="block"),t.searchParams.set("table",s),t.searchParams.set("id",n.id),t.searchParams.set("cache","v2"),e=t.toString(),e},Pe=e=>n=>(n=(n||"").replace(/-/g,""),e&&n===e?"/":`/${n}`),d=(...e)=>e.filter(n=>!!n).join(" "),bt=e=>{let n=[],t,s=-1;return Object.keys(e).forEach(a=>{var l,m;let r=(l=e[a])==null?void 0:l.value;r&&((m=r.content)==null||m.forEach(c=>{var u,N;let p=(N=(u=e[c])==null?void 0:u.value)==null?void 0:N.type;p&&p!==t&&(s++,t=p,n[s]=[]),s>-1&&n[s].push(c)})),t=void 0}),n},Bo=(e,n)=>{let s=bt(n).find(a=>a.includes(e));if(!!s)return s.indexOf(e)+1},So=e=>e.includes("#")?e.replace(/^.+(#.+)$/,"$1"):"",kt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],he=e=>{let n=new Date(e),t=n.getMonth();return`${kt[t]} ${n.getUTCDate()}, ${n.getUTCFullYear()}`},Mo=typeof window!="undefined";var Nt=new Set(["youtu.be","youtube.com","www.youtube.com","youtube-nocookie.com","www.youtube-nocookie.com"]),Uo=e=>{try{let{hostname:n}=new URL(e);if(!Nt.has(n))return null;let t=/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/i,s=e.match(t);if(s&&s[2].length==11)return s[2]}catch(n){}return null};var To=e=>{let s=e,{className:n}=s,t=P(s,["className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",O(f({className:n},t),{viewBox:"0 0 30 30",width:"16"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"}))};var Fo=e=>function(u){var N=u,{src:t,alt:s,width:a,height:r,className:l,style:m,layout:c}=N,p=P(N,["src","alt","width","height","className","style","layout"]);return c||(c=a&&r?"intrinsic":"fill"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(e,f({className:l,src:t,alt:s,width:c==="intrinsic"&&a,height:c==="intrinsic"&&r,objectFit:m==null?void 0:m.objectFit,objectPosition:m==null?void 0:m.objectPosition,layout:c},p))},Eo=e=>function(N){var w=N,{href:t,as:s,passHref:a,prefetch:r,replace:l,scroll:m,shallow:c,locale:p}=w,u=P(w,["href","as","passHref","prefetch","replace","scroll","shallow","locale"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(e,{href:t,as:s,passHref:a,prefetch:r,replace:l,scroll:m,shallow:c,locale:p},react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",f({},u)))};var Q=c=>{var p=c,{src:e,alt:n,className:t,style:s,zoomable:a=!1,priority:r=!1,height:l}=p,m=P(p,["src","alt","className","style","zoomable","priority","height"]);var z,V,A;let{recordMap:u,zoom:N,previewImages:w,forceCustomImages:C,components:h}=I(),o=react__WEBPACK_IMPORTED_MODULE_0__.useRef(N?N.clone():null),v=w?(A=(z=u==null?void 0:u.preview_images)==null?void 0:z[e])!=null?A:(V=u==null?void 0:u.preview_images)==null?void 0:V[(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.normalizeUrl)(e)]:null,b=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(y=>{a&&(y.target.src||y.target.srcset)&&o.current&&o.current.attach(y.target)},[o,a]),g=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(y=>{o.current&&y&&o.current.attach(y)},[o]),U=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>a?g:void 0,[a,g]);if(v){let y=v.originalHeight/v.originalWidth;return h.Image?react__WEBPACK_IMPORTED_MODULE_0__.createElement(h.Image,{src:e,alt:n,style:s,className:t,width:v.originalWidth,height:v.originalHeight,blurDataURL:v.dataURIBase64,placeholder:"blur",priority:r,onLoad:b}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_lazy_images__WEBPACK_IMPORTED_MODULE_4__/* .LazyImageFull */ .AZ,O(f({src:e},m),{experimentalDecode:!0}),({imageState:_,ref:T})=>{let J=_===react_lazy_images__WEBPACK_IMPORTED_MODULE_4__/* .ImageState.LoadSuccess */ .zl.LoadSuccess,le={width:"100%"},x={};return l?le.height=l:(x.position="absolute",le.paddingBottom=`${y*100}%`),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:d("lazy-image-wrapper",J&&"lazy-image-loaded",t),style:le},react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:"lazy-image-preview",src:v.dataURIBase64,alt:n,ref:T,style:s,decoding:"async"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:"lazy-image-real",src:e,alt:n,ref:U,style:f(f({},s),x),width:v.originalWidth,height:v.originalHeight,decoding:"async",loading:"lazy"}))})}else return h.Image&&C?react__WEBPACK_IMPORTED_MODULE_0__.createElement(h.Image,{src:e,alt:n,className:t,style:s,width:null,height:l||null,priority:r,onLoad:b}):react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",f({className:t,style:s,src:e,alt:n,ref:U,loading:"lazy",decoding:"async"},m))};var wt=e=>Object.keys(e).map(n=>`${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`).join("&"),$o=({id:e,defaultPlay:n=!1,mute:t=!1,lazyImage:s=!1,iframeTitle:a="YouTube video",alt:r="Video preview",params:l={},adLinksPreconnect:m=!0,style:c,className:p})=>{let u=t||n?"1":"0",N=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>wt(f({autoplay:"1",mute:u},l)),[u,l]),C=`https://i.ytimg.com/vi/${e}/hqdefault.jpg`,h="https://www.youtube-nocookie.com",o=`${h}/embed/${e}?${N}`,[v,b]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[g,U]=react__WEBPACK_IMPORTED_MODULE_0__.useState(n),[z,V]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),A=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{v||b(!0)},[v]),y=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{g||U(!0)},[g]),_=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{V(!0)},[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preload",href:C,as:"image"}),v&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:h}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://www.google.com"})),v&&m&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{onClick:y,onPointerOver:A,className:d("notion-yt-lite",z&&"notion-yt-loaded",g&&"notion-yt-initialized",p),style:c},react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:C,className:"notion-yt-thumbnail",loading:s?"lazy":void 0,alt:r}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-yt-playbtn"}),g&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe",{width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:a,src:o,onLoad:_})))};var It=typeof window=="undefined",Pt=["video","image","embed","figma","typeform","excalidraw","maps","tweet","pdf","gist","codepen","drive"],Do=({block:e,children:n})=>{var p,u,N,w,C,h,o,v;let{recordMap:t,mapImageUrl:s,components:a}=I();if(!e||!Pt.includes(e.type))return null;let r={position:"relative",display:"flex",justifyContent:"center",alignSelf:"center",width:"100%",maxWidth:"100%",flexDirection:"column"},l={};if(e.format){let{block_aspect_ratio:b,block_height:g,block_width:U,block_full_width:z,block_page_width:V,block_preserve_scale:A}=e.format;z||V?(z?r.width="100vw":r.width="100%",e.type==="video"?g?r.height=g:b?r.paddingBottom=`${b*100}%`:A&&(r.objectFit="contain"):b&&e.type!=="image"?r.paddingBottom=`${b*100}%`:g?r.height=g:A&&(e.type==="image"?r.height="100%":(r.paddingBottom="75%",r.minHeight=100))):(U&&(r.width=U),A&&e.type!=="image"?(r.paddingBottom="50%",r.minHeight=100):g&&e.type!=="image"&&(r.height=g)),e.type==="image"?l.objectFit="cover":A&&(l.objectFit="contain")}let m=(N=(u=(p=e.properties)==null?void 0:p.source)==null?void 0:u[0])==null?void 0:N[0],c=null;if(e.type==="tweet"){let b=m;if(!b)return null;let g=b.split("?")[0].split("/").pop();if(!g)return null;c=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:O(f({},l),{maxWidth:420,width:"100%",marginLeft:"auto",marginRight:"auto"})},react__WEBPACK_IMPORTED_MODULE_0__.createElement(a.Tweet,{id:g}))}else if(e.type==="pdf"){if(r.overflow="auto",r.padding="8px 16px",r.background="rgb(226, 226, 226)",!It){let b=(w=t.signed_urls)==null?void 0:w[e.id];if(!b)return null;c=react__WEBPACK_IMPORTED_MODULE_0__.createElement(a.Pdf,{file:b})}}else if(e.type==="embed"||e.type==="video"||e.type==="figma"||e.type==="typeform"||e.type==="gist"||e.type==="maps"||e.type==="excalidraw"||e.type==="codepen"||e.type==="drive"){let b=t.signed_urls[e.id];if(e.type==="video"&&b&&b.indexOf("youtube")<0&&b.indexOf("youtu.be")<0&&b.indexOf("vimeo")<0&&b.indexOf("wistia")<0&&b.indexOf("loom")<0&&b.indexOf("videoask")<0&&b.indexOf("getcloudapp")<0)c=react__WEBPACK_IMPORTED_MODULE_0__.createElement("video",{playsInline:!0,controls:!0,preload:"metadata",style:l,src:b,title:e.type});else{let g=(h=(C=e.format)==null?void 0:C.display_source)!=null?h:m;if(g){let U=e.type==="video"?Uo(g):null;console.log({youtubeVideoId:U,src:g,format:e.format,style:r}),U?c=react__WEBPACK_IMPORTED_MODULE_0__.createElement($o,{id:U,style:l,className:"notion-asset-object-fit"}):e.type==="gist"?(g.endsWith(".pibb")||(g=`${g}.pibb`),l.width="100%",r.paddingBottom="50%",c=react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe",{style:l,className:"notion-asset-object-fit",src:g,title:"GitHub Gist",frameBorder:"0",loading:"lazy",scrolling:"auto"})):c=react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe",{className:"notion-asset-object-fit",style:l,src:g,title:`iframe ${e.type}`,frameBorder:"0",allowFullScreen:!0,loading:"lazy"})}}}else if(e.type==="image"){let b=(o=t.signed_urls)==null?void 0:o[e.id],g=s(b||m,e),z=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getTextContent)((v=e.properties)==null?void 0:v.caption)||"notion image";c=react__WEBPACK_IMPORTED_MODULE_0__.createElement(Q,{src:g,alt:z,zoomable:!0,height:r.height,style:l})}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:r},c,e.type==="image"&&n),e.type!=="image"&&n)};var X=a=>{var r=a,{block:e,className:n,defaultIcon:t}=r,s=P(r,["block","className","defaultIcon"]);var m,c,p;let{recordMap:l}=I();if(!e)return null;if(e.type==="collection_view_page"||e.type==="collection_view"){let u=(m=l.collection[e.collection_id])==null?void 0:m.value;u&&(e.properties=O(f({},e.properties),{title:u.name}),e.format=O(f({},e.format),{page_icon:u.icon}))}return(c=e.properties)!=null&&c.title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",f({className:d("notion-page-title",n)},s),react__WEBPACK_IMPORTED_MODULE_0__.createElement(oe,{block:e,defaultIcon:t,className:"notion-page-title-icon"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"notion-page-title-text"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{value:(p=e.properties)==null?void 0:p.title,block:e}))):null};var me=e=>Mo?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_image__WEBPACK_IMPORTED_MODULE_5__.Img,f({},e)):react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",f({},e));function Bt(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",f({viewBox:"0 0 260 260"},e),react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z",fill:"#161614"})))}var Ho=Bt;var be=({original_url:e,block:n,className:t})=>{let{components:s}=I(),a=new URL(e),[r,l]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(a.pathname.substring(1)),[m,c]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{fetch(`https://api.github.com/repos/${r}`).then(p=>{if(!p.ok)throw Error(p.statusText);return p.json()}).then(p=>{c(p),l(p.name)}).catch(p=>console.error(p))},[r]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(s.Link,{target:"_blank",rel:"noopener noreferrer",href:e,className:d("notion-external",n?"notion-external-block notion-row":"notion-external-mention",t)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-external-image"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ho,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-external-description"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-external-title"},r),m&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-external-subtitle"},`${m.owner.login} \u2022 Updated on ${m.updated_at.substring(0,10)}`)))};var E=({value:e,block:n,linkProps:t,linkProtocol:s})=>{let{components:a,recordMap:r,mapPageUrl:l,mapImageUrl:m,rootDomain:c}=I();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,e==null?void 0:e.map(([p,u],N)=>{if(!u)return p===","?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{key:N,style:{padding:"0.5em"}}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:N},p);let w=u.reduce((C,h)=>{var o,v,b,g,U,z,V,A;switch(h[0]){case"p":{let y=h[1],_=(o=r.block[y])==null?void 0:o.value;return _?react__WEBPACK_IMPORTED_MODULE_0__.createElement(a.PageLink,{className:"notion-link",href:l(y)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(X,{block:_})):(console.log('"p" missing block',y),null)}case"\u2023":{let y=h[1][0],_=h[1][1];switch(y){case"u":{let T=(v=r.notion_user[_])==null?void 0:v.value;if(!T)return console.log('"\u2023" missing user',_),null;let J=[T.given_name,T.family_name].filter(Boolean).join(" ");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(me,{className:"notion-user",src:m(T.profile_photo,n),alt:J})}default:{let T=(b=r.block[_])==null?void 0:b.value;return T?react__WEBPACK_IMPORTED_MODULE_0__.createElement(a.PageLink,O(f({className:"notion-link",href:l(_)},t),{target:"_blank",rel:"noopener noreferrer"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(X,{block:T})):(console.log('"\u2023" missing block',y,_),null)}}}case"h":return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:`notion-${h[1]}`},C);case"c":return react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",{className:"notion-inline-code"},C);case"b":return react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,C);case"i":return react__WEBPACK_IMPORTED_MODULE_0__.createElement("em",null,C);case"s":return react__WEBPACK_IMPORTED_MODULE_0__.createElement("s",null,C);case"_":return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"notion-inline-underscore"},C);case"e":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(a.Equation,{math:h[1],inline:!0});case"m":return C;case"a":{let y=h[1],_=y.substr(1),T=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.parsePageId)(_,{uuid:!0});if((y[0]==="/"||y.includes(c))&&T){let J=y.includes(c)?y:`${l(T)}${So(y)}`;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(a.PageLink,f({className:"notion-link",href:J},t),C)}else return react__WEBPACK_IMPORTED_MODULE_0__.createElement(a.Link,f({className:"notion-link",href:s?`${s}:${h[1]}`:h[1]},t),C)}case"d":{let y=h[1],_=y==null?void 0:y.type;if(_==="date"){let T=y.start_date;return he(T)}else if(_==="daterange"){let T=y.start_date,J=y.end_date;return`${he(T)} \u2192 ${he(J)}`}else return C}case"u":{let y=h[1],_=(g=r.notion_user[y])==null?void 0:g.value;if(!_)return console.log("missing user",y),null;let T=[_.given_name,_.family_name].filter(Boolean).join(" ");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(me,{className:"notion-user",src:m(_.profile_photo,n),alt:T})}case"eoi":{let y=h[1],_=(U=r.block[y])==null?void 0:U.value;switch((z=_==null?void 0:_.format)==null?void 0:z.domain){case"github.com":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(be,{original_url:(V=_.format)==null?void 0:V.original_url,className:y});default:return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null)}}default:return C}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,p));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:N},w)}))};var pe=({blockId:e,block:n})=>{var c,p,u,N,w,C;let t=n,{components:s,mapPageUrl:a,rootDomain:r}=I(),l=!1;if(((p=(c=t==null?void 0:t.properties)==null?void 0:c.caption)==null?void 0:p.length)>0){let h=(u=t==null?void 0:t.properties)==null?void 0:u.caption[0][0],o=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.parsePageId)(h,{uuid:!0}),v=h.charAt(0)==="/"&&o;(n.type=="image"&&Ut(h)||v)&&(l=!0)}let m=react__WEBPACK_IMPORTED_MODULE_0__.createElement("figure",{className:d("notion-asset-wrapper",`notion-asset-wrapper-${n.type}`,((N=t.format)==null?void 0:N.block_full_width)&&"notion-asset-wrapper-full",e)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Do,{block:t},((w=t==null?void 0:t.properties)==null?void 0:w.caption)&&!l&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("figcaption",{className:"notion-asset-caption"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{value:t.properties.caption,block:n}))));if(l){let h=(C=t==null?void 0:t.properties)==null?void 0:C.caption[0][0],o=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.parsePageId)(h,{uuid:!0}),v=h.charAt(0)==="/"&&o,b=Ot(h);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(s.PageLink,{style:{width:"100%"},href:v?a(o):h,target:b&&b!==r&&!h.startsWith("/")?"blank_":null},m)}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,m)};function Ut(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}function Ot(e){try{return new URL(e).hostname}catch(n){return""}}function Tt(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",f({viewBox:"0 0 14 14"},e),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M5.5 12L14 3.5 12.5 2l-7 7-4-4.003L0 6.499z"}))}var Go=Tt;var qo=({isChecked:e})=>{let n=null;return e?n=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-property-checkbox-checked"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Go,null)):n=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-property-checkbox-unchecked"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"notion-property notion-property-checkbox"},n)};var Ft=e=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",f({target:"_blank",rel:"noopener noreferrer"},e)),Et=e=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",f({},e)),$t=pe,ui=r=>{var l=r,{href:e,rel:n,target:t,title:s}=l,a=P(l,["href","rel","target","title"]);return ae.createElement("span",f({},a))},se=e=>()=>(console.warn(`Warning: using empty component "${e}" (you should override this in NotionRenderer.components)`),null),Wo={Image:null,Link:Ft,PageLink:Et,Checkbox:qo,Code:se("Code"),Equation:se("Equation"),Collection:se("Collection"),Pdf:se("Pdf"),Tweet:se("Tweet"),Modal:se("Modal"),Embed:$t},Zo={recordMap:{block:{},collection:{},collection_view:{},collection_query:{},notion_user:{},signed_urls:{}},components:Wo,mapPageUrl:Pe(),mapImageUrl:Ie,searchNotion:null,fullPage:!1,darkMode:!1,previewImages:!1,forceCustomImages:!1,showCollectionViewDropdown:!0,showTableOfContents:!1,minTableOfContentsItems:3,defaultPageIcon:null,defaultPageCover:null,defaultPageCoverPosition:.5,zoom:null},Se=react__WEBPACK_IMPORTED_MODULE_0__.createContext(Zo),Ne=l=>{var m=l,{components:e={},children:n,mapPageUrl:t,mapImageUrl:s,rootPageId:a}=m,r=P(m,["components","children","mapPageUrl","mapImageUrl","rootPageId"]);for(let p of Object.keys(r))r[p]===void 0&&delete r[p];let c=f({},e);c.nextImage&&(c.Image=Fo(e.nextImage)),c.nextLink&&(c.nextLink=Eo(e.nextLink));for(let p of Object.keys(c))c[p]||delete c[p];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Se.Provider,{value:O(f(f({},Zo),r),{rootPageId:a,mapPageUrl:t!=null?t:Pe(a),mapImageUrl:s!=null?s:Ie,components:f(f({},Wo),c)})},n)},Jo=Se.Consumer,I=()=>react__WEBPACK_IMPORTED_MODULE_0__.useContext(Se);var Ht=e=>e.type==="page"||e.type==="callout"||e.type==="collection_view"||e.type==="collection_view_page",oe=({block:e,className:n,inline:t=!0,hideDefaultIcon:s=!1,defaultIcon:a})=>{var p;let{mapImageUrl:r,recordMap:l}=I(),m=!1,c=null;if(Ht(e)){let u=((p=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getBlockIcon)(e,l))==null?void 0:p.trim())||a,N=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getBlockTitle)(e,l);if(u&&is_url_superb__WEBPACK_IMPORTED_MODULE_3__(u)){let w=r(u,e);m=!0,c=react__WEBPACK_IMPORTED_MODULE_0__.createElement(Q,{src:w,alt:N||"page icon",className:d(n,"notion-page-icon")})}else u?(m=!1,c=react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:d(n,"notion-page-icon"),role:"img","aria-label":u},u)):s||(m=!0,c=react__WEBPACK_IMPORTED_MODULE_0__.createElement(To,{className:d(n,"notion-page-icon"),alt:N||"page icon"}))}return c?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:d(t?"notion-page-icon-inline":"notion-page-icon-hero",m?"notion-page-icon-image":"notion-page-icon-span")},c):null};var Yo=({toc:e,activeSection:n,setActiveSection:t,pageAside:s,hasToc:a,hasAside:r,className:l})=>{let{darkMode:m}=I(),c=100,p=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>lodash_throttle__WEBPACK_IMPORTED_MODULE_6__(()=>{let u=document.getElementsByClassName("notion-h"),N=null,w=n;for(let C=0;C<u.length;++C){let h=u[C];if(!h||!(h instanceof Element))continue;w||(w=h.getAttribute("data-id"));let o=h.getBoundingClientRect(),v=N?o.top-N.bottom:0,b=Math.max(150,v/4);if(o.top-b<0){w=h.getAttribute("data-id"),N=o;continue}break}t(w)},c),[t]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{if(!!a)return window.addEventListener("scroll",p),p(),()=>{window.removeEventListener("scroll",p)}},[a,p]),r?react__WEBPACK_IMPORTED_MODULE_0__.createElement("aside",{className:d("notion-aside",l)},a&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-aside-table-of-contents"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-aside-table-of-contents-header"},"Table of Contents"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav",{className:d("notion-table-of-contents",!m&&"notion-gray")},e.map(u=>{let N=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.uuidToId)(u.id);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{key:N,href:`#${N}`,className:d("notion-table-of-contents-item",`notion-table-of-contents-item-indent-level-${u.indentLevel}`,n===N&&"notion-table-of-contents-active-item")},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"notion-table-of-contents-item-body",style:{display:"inline-block",marginLeft:u.indentLevel*16}},u.text))}))),s):null};var Xo=e=>{let s=e,{className:n}=s,t=P(s,["className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",O(f({className:n},t),{viewBox:"0 0 16 16",width:"16",height:"16"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"}))};var Ce=e=>{let s=e,{className:n}=s,t=P(s,["className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",f({className:d("notion-icon",n),viewBox:"0 0 17 17"},t),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M6.78027 13.6729C8.24805 13.6729 9.60156 13.1982 10.709 12.4072L14.875 16.5732C15.0684 16.7666 15.3232 16.8633 15.5957 16.8633C16.167 16.8633 16.5713 16.4238 16.5713 15.8613C16.5713 15.5977 16.4834 15.3516 16.29 15.1582L12.1504 11.0098C13.0205 9.86719 13.5391 8.45215 13.5391 6.91406C13.5391 3.19629 10.498 0.155273 6.78027 0.155273C3.0625 0.155273 0.0214844 3.19629 0.0214844 6.91406C0.0214844 10.6318 3.0625 13.6729 6.78027 13.6729ZM6.78027 12.2139C3.87988 12.2139 1.48047 9.81445 1.48047 6.91406C1.48047 4.01367 3.87988 1.61426 6.78027 1.61426C9.68066 1.61426 12.0801 4.01367 12.0801 6.91406C12.0801 9.81445 9.68066 12.2139 6.78027 12.2139Z"}))};var et=e=>{let s=e,{className:n}=s,t=P(s,["className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",O(f({className:d("notion-icon",n)},t),{viewBox:"0 0 30 30"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15,0C6.716,0,0,6.716,0,15s6.716,15,15,15s15-6.716,15-15S23.284,0,15,0z M22,20.6L20.6,22L15,16.4L9.4,22L8,20.6l5.6-5.6 L8,9.4L9.4,8l5.6,5.6L20.6,8L22,9.4L16.4,15L22,20.6z"}))};var ot=e=>{let s=e,{className:n}=s,t=P(s,["className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",O(f({className:d("notion-icon",n)},t),{viewBox:"0 0 24 24"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient",{x1:"28.1542969%",y1:"63.7402344%",x2:"74.6289062%",y2:"17.7832031%",id:"linearGradient-1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{stopColor:"rgba(164, 164, 164, 1)",offset:"0%"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{stopColor:"rgba(164, 164, 164, 0)",stopOpacity:"0",offset:"100%"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{transform:"translate(-236.000000, -286.000000)"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{transform:"translate(238.000000, 286.000000)"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{id:"Oval-2",stroke:"url(#linearGradient-1)",strokeWidth:"4",cx:"10",cy:"12",r:"10"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M10,2 C4.4771525,2 0,6.4771525 0,12",id:"Oval-2",stroke:"rgba(164, 164, 164, 1)",strokeWidth:"4"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{id:"Rectangle-1",fill:"rgba(164, 164, 164, 1)",x:"8",y:"0",width:"4",height:"4",rx:"8"})))))};var Me=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(n){super(n);this.state={isLoading:!1,query:"",searchResult:null,searchError:null};this._onAfterOpen=()=>{this._inputRef.current&&this._inputRef.current.focus()};this._onChangeQuery=n=>{let t=n.target.value;if(this.setState({query:t}),t.trim())this._search();else{this.setState({isLoading:!1,searchResult:null,searchError:null});return}};this._onClearQuery=()=>{this._onChangeQuery({target:{value:""}})};this._searchImpl=()=>Lo(this,null,function*(){let{searchNotion:n}=this.props,{query:t}=this.state;if(!t.trim()){this.setState({isLoading:!1,searchResult:null,searchError:null});return}this.setState({isLoading:!0});let s=yield n({query:t,ancestorId:this.props.rootBlockId});console.log("search",t,s);let a=null,r=null;s.error||s.errorId?r=s:(a=f({},s),a.results=a.results.map(l=>{var p,u;let m=(p=a.recordMap.block[l.id])==null?void 0:p.value;if(!m)return;let c=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getBlockTitle)(m,a.recordMap);if(!!c)return l.title=c,l.block=m,l.page=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getBlockParentPage)(m,a.recordMap,{inclusive:!0})||m,l.recordMap=a.recordMap,(u=l.highlight)!=null&&u.text&&(l.highlight.html=l.highlight.text.replace(/<gzkNfoUU>/gi,"<b>").replace(/<\/gzkNfoUU>/gi,"</b>")),l}).filter(Boolean)),this.state.query===t&&this.setState({isLoading:!1,searchResult:a,searchError:r})});this._inputRef=react__WEBPACK_IMPORTED_MODULE_0__.createRef()}componentDidMount(){this._search=lodash_throttle__WEBPACK_IMPORTED_MODULE_6__(this._searchImpl.bind(this),1e3)}render(){let{isOpen:n,onClose:t}=this.props,{isLoading:s,query:a,searchResult:r,searchError:l}=this.state,m=!!a.trim();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Jo,null,c=>{let{components:p,defaultPageIcon:u,mapPageUrl:N}=c;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(p.Modal,{isOpen:n,contentLabel:"Search",className:"notion-search",overlayClassName:"notion-search-overlay",onRequestClose:t,onAfterOpen:this._onAfterOpen},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"quickFindMenu"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"searchBar"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"inlineIcon"},s?react__WEBPACK_IMPORTED_MODULE_0__.createElement(ot,{className:"loadingIcon"}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ce,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{className:"searchInput",placeholder:"Search",value:a,ref:this._inputRef,onChange:this._onChangeQuery}),a&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{role:"button",className:"clearButton",onClick:this._onClearQuery},react__WEBPACK_IMPORTED_MODULE_0__.createElement(et,{className:"clearIcon"}))),m&&r&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,r.results.length?react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ne,O(f({},c),{recordMap:r.recordMap}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"resultsPane"},r.results.map(w=>{var C;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(p.PageLink,{key:w.id,className:d("result","notion-page-link"),href:N(w.page.id,r.recordMap)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(X,{block:w.page,defaultIcon:u}),((C=w.highlight)==null?void 0:C.html)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-search-result-highlight",dangerouslySetInnerHTML:{__html:w.highlight.html}}))})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer",{className:"resultsFooter"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"resultsCount"},r.total),r.total===1?" result":" results"))):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"noResultsPane"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"noResults"},"No results"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"noResultsDetail"},"Try different search terms"))),m&&!r&&l&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"noResultsPane"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"noResults"},"Search error"))))})}};var nt=({header:e})=>{let b=I(),{components:n,recordMap:t,rootPageId:s,mapPageUrl:a,searchNotion:r}=b,l=P(b,["components","recordMap","rootPageId","mapPageUrl","searchNotion"]),m=t.block,c=Object.keys(m),p=c[0],u=!!r,N=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getPageBreadcrumbs)(t,p),[w,C]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),h=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{C(!0)},[]),o=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{C(!1)},[]);if((0,react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_7__.useHotkeys)("cmd+p",g=>{h(),g.preventDefault(),g.stopPropagation()}),(0,react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_7__.useHotkeys)("cmd+k",g=>{h(),g.preventDefault(),g.stopPropagation()}),!p)return null;let v=[react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"breadcrumbs",key:"breadcrumbs"},N.map((g,U)=>{let z={},V={pageLink:n.PageLink};return g.active?V.pageLink=A=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",f({},A)):z.href=a(g.pageId),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:g.pageId},react__WEBPACK_IMPORTED_MODULE_0__.createElement(V.pageLink,f({className:d("breadcrumb",g.active&&"active")},z),g.icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(oe,{className:"icon",block:g.block}),g.title&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"title"},g.title)),U<N.length-1&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"spacer"},"/"))})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"rhs",key:"rhs"},u&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{role:"button",className:d("breadcrumb","button","notion-search-button"),onClick:h},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ce,{className:"searchIcon"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"title"},"Search"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:"search"},w&&u&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(Me,{isOpen:w,rootBlockId:s||p,onClose:o,searchNotion:r}))];return e?react__WEBPACK_IMPORTED_MODULE_0__.createElement(e,f({activePageId:p,blockIds:c,blockMap:m,breadcrumbs:N,className:"notion-header",components:n,hasSearch:u,headerComponents:v,isSearchOpen:w,mapPageUrl:a,onCloseSearch:o,onOpenSearch:h,recordMap:t,rootPageId:s,searchNotion:r,setIsSearchOpen:C},l)):react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",{className:"notion-header"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"nav-header"},v[0],v[1]),v[2])};var it=({block:e,className:n})=>{var l;let{components:t,mapImageUrl:s}=I(),a=(l=e.format)==null?void 0:l.drive_properties;if(!a)return null;let r;try{r=new URL(a.url).hostname}catch(m){}return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:d("notion-google-drive",n)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(t.Link,{className:"notion-google-drive-link",href:a.url,target:"_blank",rel:"noopener noreferrer"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-google-drive-preview"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(me,{src:s(a.thumbnail,e),alt:a.title||"Google Drive Document",loading:"lazy"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-google-drive-body"},a.title&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-google-drive-body-title"},a.title),a.modified_time&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-google-drive-body-modified-time"},"Last modified"," ",a.user_name?`by ${a.user_name} `:"",(0,timeago_js__WEBPACK_IMPORTED_MODULE_8__.format)(a.modified_time)),a.icon&&r&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-google-drive-body-source"},a.icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-google-drive-body-source-icon",style:{backgroundImage:`url(${a.icon})`}}),r&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-google-drive-body-source-domain"},r)))))};var st=({block:e,className:n})=>{let{recordMap:t}=I(),s=t.signed_urls[e.id];return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:d("notion-audio",n)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("audio",{controls:!0,preload:"none",src:s}))};var lt=e=>{let s=e,{className:n}=s,t=P(s,["className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",O(f({className:n},t),{viewBox:"0 0 30 30"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M22,8v12c0,3.866-3.134,7-7,7s-7-3.134-7-7V8c0-2.762,2.238-5,5-5s5,2.238,5,5v12c0,1.657-1.343,3-3,3s-3-1.343-3-3V8h-2v12c0,2.762,2.238,5,5,5s5-2.238,5-5V8c0-3.866-3.134-7-7-7S6,4.134,6,8v12c0,4.971,4.029,9,9,9s9-4.029,9-9V8H22z"}))};var ct=({block:e,className:n})=>{var r,l;let{components:t,recordMap:s}=I(),a=s.signed_urls[e.id];return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:d("notion-file",n)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(t.Link,{className:"notion-file-link",href:a,target:"_blank",rel:"noopener noreferrer"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(lt,{className:"notion-file-icon"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-file-info"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-file-title"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{value:((r=e.properties)==null?void 0:r.title)||[["File"]],block:e})),((l=e.properties)==null?void 0:l.size)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-file-size"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{value:e.properties.size,block:e})))))};var mt=({block:e,level:n})=>{var a,r;if(!e)return null;let t=e,s=(r=(a=t==null?void 0:t.format)==null?void 0:a.transclusion_reference_pointer)==null?void 0:r.id;return s?react__WEBPACK_IMPORTED_MODULE_0__.createElement(xe,{key:s,level:n,blockId:s}):null};var dt={},ut=e=>{var Te,Fe,Ee,$e,De,ze,He,Ae,Ve,je,Ge,qe,We,Ze,Je,Ye,Qe,Xe,Ke,Re,eo,oo,to,no,io,ro,so,ao,lo,co,mo,po,uo,fo,go,ho,vo,bo,ko,No,yo,Co,xo,Rt;let n=I(),{components:t,fullPage:s,darkMode:a,recordMap:r,mapPageUrl:l,mapImageUrl:m,showTableOfContents:c,minTableOfContentsItems:p,defaultPageIcon:u,defaultPageCover:N,defaultPageCoverPosition:w}=n,[C,h]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),{block:o,children:v,level:b,className:g,bodyClassName:U,header:z,footer:V,pageHeader:A,pageFooter:y,pageAside:_,pageCover:T,hideBlockId:J,disableHeader:le}=e;if(!o)return null;b===0&&o.type==="collection_view"&&(o.type="collection_view_page");let x=J?"notion-block":`notion-block-${(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.uuidToId)(o.id)}`;switch(o.type){case"collection_view_page":case"page":if(b===0){let{page_icon:k=u,page_cover:B=N,page_cover_position:D=w,page_full_width:M,page_small_text:j}=o.format||{};if(s){let H=o.type==="page"?o.properties:{title:(Fe=(Te=r.collection[o.collection_id])==null?void 0:Te.value)==null?void 0:Fe.name},ee=(1-(D||.5))*100,ue=(Ee=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getBlockIcon)(o,r))!=null?Ee:u,ce=ue&&is_url_superb__WEBPACK_IMPORTED_MODULE_3__(ue),ne=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getPageTableOfContents)(o,r),Y=c&&ne.length>=p,ie=(Y||_)&&!M,_e=T||B;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:d("notion","notion-app",a?"dark-mode":"light-mode",x,g)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-viewport"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-frame"},!le&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(nt,{header:z}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-page-scroller"},_e&&(T||react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-page-cover-wrapper"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Q,{src:m(B,o),alt:(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getTextContent)(H==null?void 0:H.title),priority:!0,className:"notion-page-cover",style:{objectPosition:`center ${ee}%`}}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{className:d("notion-page",_e?"notion-page-has-cover":"notion-page-no-cover",k?"notion-page-has-icon":"notion-page-no-icon",ce?"notion-page-has-image-icon":"notion-page-has-text-icon","notion-full-page",M&&"notion-full-width",j&&"notion-small-text",U)},k&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(oe,{block:o,defaultIcon:u,inline:!1}),A,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"notion-title"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{value:H==null?void 0:H.title,block:o})),(o.type==="collection_view_page"||o.type==="page"&&o.parent_table==="collection")&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(t.Collection,{block:o,ctx:n}),o.type!=="collection_view_page"&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:d("notion-page-content",ie&&"notion-page-content-has-aside",Y&&"notion-page-content-has-toc")},react__WEBPACK_IMPORTED_MODULE_0__.createElement("article",{className:"notion-page-content-inner"},v),ie&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(Yo,{toc:ne,activeSection:C,setActiveSection:h,hasToc:Y,hasAside:ie,pageAside:_})),y),V)))}else return react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{className:d("notion",a?"dark-mode":"light-mode","notion-page",M&&"notion-full-width",j&&"notion-small-text",x,g,U)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-viewport"}),A,(o.type==="collection_view_page"||o.type==="page"&&o.parent_table==="collection")&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(t.Collection,{block:o,ctx:n}),o.type!=="collection_view_page"&&v,y)}else{let k=($e=o.format)==null?void 0:$e.block_color;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(t.PageLink,{className:d("notion-page-link",k&&`notion-${k}`,x),href:l(o.id)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(X,{block:o}))}case"header":case"sub_header":case"sub_sub_header":{if(!o.properties)return null;let k=(De=o.format)==null?void 0:De.block_color,B=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.uuidToId)(o.id),D=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getTextContent)(o.properties.title)||`Notion Header ${B}`,M=dt[o.id],j;if(M===void 0){let ie=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getBlockParentPage)(o,r);if(ie){let wo=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getPageTableOfContents)(ie,r).find(ft=>ft.id===o.id);wo&&(M=wo.indentLevel,dt[o.id]=M)}}M!==void 0&&(j=`notion-h-indent-${M}`);let H=o.type==="header",ee=o.type==="sub_header",ue=o.type==="sub_sub_header",ce=d(H&&"notion-h notion-h1",ee&&"notion-h notion-h2",ue&&"notion-h notion-h3",k&&`notion-${k}`,j,x),ne=react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:B,className:"notion-header-anchor"}),!((ze=o.format)!=null&&ze.toggleable)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"notion-hash-link",href:`#${B}`,title:D},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Xo,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"notion-h-title"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{value:o.properties.title,block:o}))),Y=react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4",{className:ce,"data-id":B},ne);return H?Y=react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{className:ce,"data-id":B},ne):ee&&(Y=react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{className:ce,"data-id":B},ne)),(He=o.format)!=null&&He.toggleable?react__WEBPACK_IMPORTED_MODULE_0__.createElement("details",{className:d("notion-toggle",x)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("summary",null,Y),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,v)):Y}case"divider":return react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr",{className:d("notion-hr",x)});case"text":{if(!o.properties&&!((Ae=o.content)!=null&&Ae.length))return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:d("notion-blank",x)},"\xA0");let k=(Ve=o.format)==null?void 0:Ve.block_color;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:d("notion-text",k&&`notion-${k}`,x)},((je=o.properties)==null?void 0:je.title)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{value:o.properties.title,block:o}),v&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-text-children"},v))}case"bulleted_list":case"numbered_list":{let k=(j,H)=>o.type==="bulleted_list"?react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:d("notion-list","notion-list-disc",x)},j):react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol",{start:H,className:d("notion-list","notion-list-numbered",x)},j),B=null;o.content?B=react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,o.properties&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{value:o.properties.title,block:o})),k(v)):B=o.properties?react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{value:o.properties.title,block:o})):null;let D=o.type!==((qe=(Ge=r.block[o.parent_id])==null?void 0:Ge.value)==null?void 0:qe.type),M=Bo(o.id,r.block);return D?k(B,M):B}case"embed":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(t.Embed,{blockId:x,block:o});case"tweet":case"maps":case"pdf":case"figma":case"typeform":case"codepen":case"excalidraw":case"image":case"gist":case"video":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(pe,{blockId:x,block:o});case"drive":return!((We=o.format)==null?void 0:We.drive_properties)&&(Ze=o.format)!=null&&Ze.display_source?react__WEBPACK_IMPORTED_MODULE_0__.createElement(pe,{blockId:x,block:o}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(it,{block:o,className:x});case"audio":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(st,{block:o,className:x});case"file":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ct,{block:o,className:x});case"equation":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(t.Equation,{block:o,inline:!1,className:x});case"code":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(t.Code,{block:o});case"column_list":return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:d("notion-row",x)},v);case"column":{let k="min(32px, 4vw)",B=((Je=o.format)==null?void 0:Je.column_ratio)||.5,D=(Ye=r.block[o.parent_id])==null?void 0:Ye.value,H={width:`calc((100% - (${(((Qe=D==null?void 0:D.content)==null?void 0:Qe.length)||Math.max(2,Math.ceil(1/B)))-1} * ${k})) * ${B})`};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:d("notion-column",x),style:H},v),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-spacer"}))}case"quote":{if(!o.properties)return null;let k=(Xe=o.format)==null?void 0:Xe.block_color;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("blockquote",{className:d("notion-quote",k&&`notion-${k}`,x)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{value:o.properties.title,block:o}))}case"collection_view":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(t.Collection,{block:o,className:x,ctx:n});case"callout":return t.Callout?react__WEBPACK_IMPORTED_MODULE_0__.createElement(t.Callout,{block:o,className:x}):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:d("notion-callout",((Ke=o.format)==null?void 0:Ke.block_color)&&`notion-${(Re=o.format)==null?void 0:Re.block_color}_co`,x)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(oe,{block:o}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-callout-text"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{value:(eo=o.properties)==null?void 0:eo.title,block:o}),v));case"bookmark":{if(!o.properties)return null;let k=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getTextContent)((oo=o.properties)==null?void 0:oo.title);if(k||(k=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getTextContent)((to=o.properties)==null?void 0:to.link)),k&&k.startsWith("http"))try{k=new URL(k).hostname}catch(B){}return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-row"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(t.Link,{target:"_blank",rel:"noopener noreferrer",className:d("notion-bookmark",((no=o.format)==null?void 0:no.block_color)&&`notion-${o.format.block_color}`,x),href:o.properties.link[0][0]},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,k&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-bookmark-title"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{value:[[k]],block:o})),((io=o.properties)==null?void 0:io.description)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-bookmark-description"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{value:(ro=o.properties)==null?void 0:ro.description,block:o})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-bookmark-link"},((so=o.format)==null?void 0:so.bookmark_icon)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-bookmark-link-icon"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Q,{src:m((ao=o.format)==null?void 0:ao.bookmark_icon,o),alt:k})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-bookmark-link-text"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{value:(lo=o.properties)==null?void 0:lo.link,block:o})))),((co=o.format)==null?void 0:co.bookmark_cover)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-bookmark-image"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Q,{src:m((mo=o.format)==null?void 0:mo.bookmark_cover,o),alt:(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getTextContent)((po=o.properties)==null?void 0:po.title),style:{objectFit:"cover"}}))))}case"toggle":return react__WEBPACK_IMPORTED_MODULE_0__.createElement("details",{className:d("notion-toggle",x)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("summary",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{value:(uo=o.properties)==null?void 0:uo.title,block:o})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,v));case"table_of_contents":{let k=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getBlockParentPage)(o,r);if(!k)return null;let B=(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getPageTableOfContents)(k,r),D=(fo=o.format)==null?void 0:fo.block_color;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:d("notion-table-of-contents",D&&`notion-${D}`,x)},B.map(M=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{key:M.id,href:`#${(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.uuidToId)(M.id)}`,className:"notion-table-of-contents-item"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"notion-table-of-contents-item-body",style:{display:"inline-block",marginLeft:M.indentLevel*24}},M.text))))}case"to_do":{let k=((vo=(ho=(go=o.properties)==null?void 0:go.checked)==null?void 0:ho[0])==null?void 0:vo[0])==="Yes";return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:d("notion-to-do",x)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-to-do-item"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(t.Checkbox,{blockId:x,isChecked:k}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:d("notion-to-do-body",k&&"notion-to-do-checked")},react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{value:(bo=o.properties)==null?void 0:bo.title,block:o}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-to-do-children"},v))}case"transclusion_container":return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:d("notion-sync-block",x)},v);case"transclusion_reference":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(mt,f({block:o,level:b+1},e));case"alias":{let k=(No=(ko=o==null?void 0:o.format)==null?void 0:ko.alias_pointer)==null?void 0:No.id,B=(yo=r.block[k])==null?void 0:yo.value;return B?react__WEBPACK_IMPORTED_MODULE_0__.createElement(t.PageLink,{className:d("notion-page-link",k),href:l(k)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(X,{block:B})):(console.log('"alias" missing block',k),null)}case"table":return react__WEBPACK_IMPORTED_MODULE_0__.createElement("table",{className:d("notion-simple-table",x)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody",null,v));case"table_row":{let k=r.block[o.parent_id].value,B=k.format.table_block_column_order,D=k.format.table_block_column_format;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",{className:d("notion-simple-table-row",x)},B.map(M=>{var H,ee;let j=D&&D[M]?(H=D[M])==null?void 0:H.color:null;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",{key:M,className:j?`notion-${j}`:"",style:{width:D&&D[M]&&((ee=D[M])==null?void 0:ee.width)?D[M].width:120}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"notion-simple-table-cell"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(E,{value:o.properties?o.properties[M]:[["\u3164"]],block:o})))}))}case"external_object_instance":switch((Co=o.format)==null?void 0:Co.domain){case"github.com":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(be,{original_url:(xo=o.format)==null?void 0:xo.original_url,block:!0,className:x});default:return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null)}default:return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null)}return null};var Xt=g=>{var U=g,{components:e,recordMap:n,mapPageUrl:t,mapImageUrl:s,searchNotion:a,fullPage:r,rootPageId:l,rootDomain:m,darkMode:c,previewImages:p,forceCustomImages:u,showCollectionViewDropdown:N,showTableOfContents:w,minTableOfContentsItems:C,defaultPageIcon:h,defaultPageCover:o,defaultPageCoverPosition:v}=U,b=P(U,["components","recordMap","mapPageUrl","mapImageUrl","searchNotion","fullPage","rootPageId","rootDomain","darkMode","previewImages","forceCustomImages","showCollectionViewDropdown","showTableOfContents","minTableOfContentsItems","defaultPageIcon","defaultPageCover","defaultPageCoverPosition"]);let z=typeof window!="undefined"&&medium_zoom__WEBPACK_IMPORTED_MODULE_1__({background:"rgba(0, 0, 0, 0.8)",margin:Kt()});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ne,{components:e,recordMap:n,mapPageUrl:t,mapImageUrl:s,searchNotion:a,fullPage:r,rootPageId:l,rootDomain:m,darkMode:c,previewImages:p,forceCustomImages:u,showCollectionViewDropdown:N,showTableOfContents:w,minTableOfContentsItems:C,defaultPageIcon:h,defaultPageCover:o,defaultPageCoverPosition:v,zoom:z},react__WEBPACK_IMPORTED_MODULE_0__.createElement(xe,f({},b)))},xe=s=>{var a=s,{level:e=0,blockId:n}=a,t=P(a,["level","blockId"]);var c,p;let{recordMap:r}=I(),l=n||Object.keys(r.block)[0],m=(c=r.block[l])==null?void 0:c.value;return m?react__WEBPACK_IMPORTED_MODULE_0__.createElement(ut,f({key:l,level:e,block:m},t),(p=m==null?void 0:m.content)==null?void 0:p.map(u=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(xe,f({key:u,blockId:u,level:e+1},t)))):null};function Kt(){let e=window.innerWidth;return e<500?8:e<800?20:e<1280?30:e<1600?40:e<1920?48:72}
//# sourceMappingURL=index.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;