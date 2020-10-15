import { Coordenada } from "./coordenada";
import { Estado } from "./estado";

export class Casilla {
    constructor(private _coordenada:Coordenada, private _estado:Estado){
    }
    
    get coordenada(){
        return this._coordenada;
    }
    get estado(){
        return this._estado;
    }
}