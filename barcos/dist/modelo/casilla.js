"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casilla = void 0;
var Casilla = /** @class */ (function () {
    function Casilla(_coordenada, _estado) {
        this._coordenada = _coordenada;
        this._estado = _estado;
    }
    Object.defineProperty(Casilla.prototype, "coordenada", {
        get: function () {
            return this._coordenada;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Casilla.prototype, "estado", {
        get: function () {
            return this._estado;
        },
        enumerable: false,
        configurable: true
    });
    return Casilla;
}());
exports.Casilla = Casilla;
//# sourceMappingURL=casilla.js.map