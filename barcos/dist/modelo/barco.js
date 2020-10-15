"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Barco = void 0;
var casilla_1 = require("./casilla");
var coordenada_1 = require("./coordenada");
var estado_1 = require("./estado");
var Barco = /** @class */ (function () {
    function Barco(_size, initial, direction) {
        this._size = _size;
        this._position = [];
        this.crearBarco(initial, direction);
    }
    Barco.prototype.crearBarco = function (initial, direction) {
        for (var index = 0; index < this.size; index++) {
            this.position.push(new casilla_1.Casilla(new coordenada_1.Coordenada(initial.x, initial.y), estado_1.Estado.indemne));
            //Es la coordenada la que tiene que comprobar la direccion del barco
            initial.mover(direction);
        }
    };
    Barco.prototype.compruebaSolapamiento = function (casilla) {
        for (var index = 0; index < casilla.length; index++) {
            for (var indexj = 0; indexj < this.position.length; indexj++) {
                if (this.position[indexj].coordenada.equals(casilla[index].coordenada)) {
                    return true;
                }
            }
        }
        return false;
    };
    Object.defineProperty(Barco.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barco.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    return Barco;
}());
exports.Barco = Barco;
//# sourceMappingURL=barco.js.map