import { Casilla } from "./casilla";
import { Coordenada } from "./coordenada";
import { Sentido } from "./sentido";
export declare class Barco {
    private _size;
    private _position;
    constructor(_size: number, initial: Coordenada, direction: Sentido);
    private crearBarco;
    compruebaSolapamiento(casilla: Casilla[]): boolean;
    get position(): Casilla[];
    get size(): number;
}
