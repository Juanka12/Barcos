import {GeneradorFlota} from "./modelo/generadorFlota";
import {Flota} from "./modelo/flota";
import {Limite} from "./modelo/limite";

alert("hola");
let limite:Limite = new Limite(0,10);
let generador:GeneradorFlota = new GeneradorFlota();
let flota:Flota = new Flota();
generador.generar(flota.barcosArray,3,limite);
for (let index = 0; index < flota.barcosArray.length; index++){
    for (let jindex = 0; jindex< flota.barcosArray[index].position.length; jindex++){
        console.log(flota.barcosArray[index].position[jindex].coordenada.toString());
    }
}