import { Coordenada } from "./coordenada";
import { Estado } from "./estado";
export declare class Casilla {
    private _coordenada;
    private _estado;
    constructor(_coordenada: Coordenada, _estado: Estado);
    get coordenada(): Coordenada;
    get estado(): Estado;
}
