"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Limite = void 0;
var Limite = /** @class */ (function () {
    function Limite(_min, _max) {
        this._min = _min;
        this._max = _max;
    }
    Object.defineProperty(Limite.prototype, "max", {
        get: function () {
            return this._max;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Limite.prototype, "min", {
        get: function () {
            return this._min;
        },
        enumerable: false,
        configurable: true
    });
    return Limite;
}());
exports.Limite = Limite;
//# sourceMappingURL=limite.js.map