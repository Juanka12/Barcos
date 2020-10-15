//Generar una serie de barcos sin solaparse y que sortean la posicion inicial de cada barco
//y el sentido en que crecen, ademas el array de barcos creado asegura que ninguno se ha solapado.
//Necesita conocer la posicion maxima a la que puede desplegar un barco(max fila o columna)
import {Coordenada} from "./coordenada";
import {Sentido} from "./sentido";
import {Barco} from "./barco";
import {Limite} from "./limite";

export class GeneradorFlota {

    generar(barcosArray:Barco[], numero:number, limite:Limite){
        do {
            let posicionX: number = Math.floor(Math.random() * (limite.max - limite.min + 1) + limite.min);
            let posicionY: number = Math.floor(Math.random() * (limite.max - limite.min + 1) + limite.min);
            let s: number = Math.round(Math.random());
            let sentido: Sentido;
            if (s) {
                sentido = Sentido.abajo;
            } else {
                sentido = Sentido.derecha;
            }
            let coord: Coordenada = new Coordenada(posicionX, posicionY);
            let barco: Barco = new Barco(1, coord, sentido);
            if (barcosArray.length==0){
                barcosArray.push(barco);
            }
            let b: boolean = false;
            for (let index = 0; index < barcosArray.length; index++) {
                if (barcosArray[index].compruebaSolapamiento(barco.position)) {
                    index = barcosArray.length;
                    b = true;
                }
            }
            if (!b){
                barcosArray.push(barco);
            }
        }while (barcosArray.length!=numero);
    }
}