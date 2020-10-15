import { Barco } from "./barco";

//Es la clase que contiene todos los barcos...
export class Flota {
    private _barcosArray:Barco[] = [];

    get barcosArray(){
        return this._barcosArray;
    }
    addBarco(barco:Barco){
        this.barcosArray.push(barco);
    }
}