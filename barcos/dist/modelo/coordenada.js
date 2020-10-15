"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordenada = void 0;
var sentido_1 = require("./sentido");
var Coordenada = /** @class */ (function () {
    function Coordenada(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Coordenada.prototype.mover = function (direction) {
        if (direction == sentido_1.Sentido.abajo) {
            this.bajar();
        }
        else {
            this.avanzar();
        }
    };
    Object.defineProperty(Coordenada.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (xs) {
            this._x = xs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coordenada.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (ys) {
            this._y = ys;
        },
        enumerable: false,
        configurable: true
    });
    Coordenada.prototype.equals = function (coordnada) {
        return this.x == coordnada.x || this.y == coordnada.y;
    };
    Coordenada.prototype.bajar = function () {
        this.y++;
    };
    Coordenada.prototype.avanzar = function () {
        this.x++;
    };
    Coordenada.prototype.toString = function () {
        return this.x.toString() + " - " + this.y.toString();
    };
    return Coordenada;
}());
exports.Coordenada = Coordenada;
//# sourceMappingURL=coordenada.js.map