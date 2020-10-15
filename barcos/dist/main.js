"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generadorFlota_1 = require("./modelo/generadorFlota");
var flota_1 = require("./modelo/flota");
var limite_1 = require("./modelo/limite");
alert("hola");
var limite = new limite_1.Limite(0, 10);
var generador = new generadorFlota_1.GeneradorFlota();
var flota = new flota_1.Flota();
generador.generar(flota.barcosArray, 3, limite);
for (var index = 0; index < flota.barcosArray.length; index++) {
    for (var jindex = 0; jindex < flota.barcosArray[index].position.length; jindex++) {
        console.log(flota.barcosArray[index].position[jindex].coordenada.toString());
    }
}
//# sourceMappingURL=main.js.map