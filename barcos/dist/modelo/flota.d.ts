import { Barco } from "./barco";
export declare class Flota {
    private _barcosArray;
    get barcosArray(): Barco[];
    addBarco(barco: Barco): void;
}
