"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flota = void 0;
//Es la clase que contiene todos los barcos...
var Flota = /** @class */ (function () {
    function Flota() {
        this._barcosArray = [];
    }
    Object.defineProperty(Flota.prototype, "barcosArray", {
        get: function () {
            return this._barcosArray;
        },
        enumerable: false,
        configurable: true
    });
    Flota.prototype.addBarco = function (barco) {
        this.barcosArray.push(barco);
    };
    return Flota;
}());
exports.Flota = Flota;
//# sourceMappingURL=flota.js.map