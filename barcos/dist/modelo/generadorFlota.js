"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneradorFlota = void 0;
//Generar una serie de barcos sin solaparse y que sortean la posicion inicial de cada barco
//y el sentido en que crecen, ademas el array de barcos creado asegura que ninguno se ha solapado.
//Necesita conocer la posicion maxima a la que puede desplegar un barco(max fila o columna)
var coordenada_1 = require("./coordenada");
var sentido_1 = require("./sentido");
var barco_1 = require("./barco");
var GeneradorFlota = /** @class */ (function () {
    function GeneradorFlota() {
    }
    GeneradorFlota.prototype.generar = function (barcosArray, numero, limite) {
        do {
            var posicionX = Math.floor(Math.random() * (limite.max - limite.min + 1) + limite.min);
            var posicionY = Math.floor(Math.random() * (limite.max - limite.min + 1) + limite.min);
            var s = Math.round(Math.random());
            var sentido = void 0;
            if (s) {
                sentido = sentido_1.Sentido.abajo;
            }
            else {
                sentido = sentido_1.Sentido.derecha;
            }
            var coord = new coordenada_1.Coordenada(posicionX, posicionY);
            var barco = new barco_1.Barco(1, coord, sentido);
            if (barcosArray.length == 0) {
                barcosArray.push(barco);
            }
            var b = false;
            for (var index = 0; index < barcosArray.length; index++) {
                if (barcosArray[index].compruebaSolapamiento(barco.position)) {
                    index = barcosArray.length;
                    b = true;
                }
            }
            if (!b) {
                barcosArray.push(barco);
            }
        } while (barcosArray.length != numero);
    };
    return GeneradorFlota;
}());
exports.GeneradorFlota = GeneradorFlota;
//# sourceMappingURL=generadorFlota.js.map