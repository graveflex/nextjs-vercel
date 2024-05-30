"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vercelBlobAdapter = void 0;
var generateURL_1 = __importDefault(require("./generateURL"));
var handleDelete_1 = __importDefault(require("./handleDelete"));
var handleUpload_1 = __importDefault(require("./handleUpload"));
var staticHandler_1 = __importDefault(require("./staticHandler"));
var defaultOptions = {
    access: 'public',
    optionalUrlPrefix: undefined,
    addRandomSuffix: false,
    cacheControlMaxAge: 31536000
};
var vercelBlobAdapter = function (_a) {
    var token = _a.token, endpointUrl = _a.endpointUrl, storeId = _a.storeId, _b = _a.options, options = _b === void 0 ? {} : _b;
    var _c = __assign(__assign({}, defaultOptions), options), access = _c.access, optionalUrlPrefix = _c.optionalUrlPrefix, addRandomSuffix = _c.addRandomSuffix, cacheControlMaxAge = _c.cacheControlMaxAge;
    var baseUrl = "https://".concat(storeId, ".").concat(access, ".").concat(endpointUrl).concat(optionalUrlPrefix ? "/".concat(optionalUrlPrefix) : '');
    return function (_a) {
        var collection = _a.collection, prefix = _a.prefix;
        return {
            handleUpload: (0, handleUpload_1.default)({
                token: token,
                prefix: prefix,
                access: access,
                addRandomSuffix: addRandomSuffix,
                cacheControlMaxAge: cacheControlMaxAge,
                optionalUrlPrefix: optionalUrlPrefix
            }),
            handleDelete: (0, handleDelete_1.default)({ token: token, baseUrl: baseUrl, prefix: prefix }),
            generateURL: (0, generateURL_1.default)({ baseUrl: baseUrl, prefix: prefix }),
            staticHandler: (0, staticHandler_1.default)({ baseUrl: baseUrl }, collection)
        };
    };
};
exports.vercelBlobAdapter = vercelBlobAdapter;
//# sourceMappingURL=index.js.map