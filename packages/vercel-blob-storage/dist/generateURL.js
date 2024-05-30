"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var getGenerateURL = function (_a) {
    var baseUrl = _a.baseUrl;
    return function (_a) {
        var filename = _a.filename, _b = _a.prefix, prefix = _b === void 0 ? '' : _b;
        return "".concat(baseUrl, "/").concat(path_1.default.posix.join(prefix, filename));
    };
};
exports.default = getGenerateURL;
//# sourceMappingURL=generateURL.js.map