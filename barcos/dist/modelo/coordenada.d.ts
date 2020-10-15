import { Sentido } from "./sentido";
export declare class Coordenada {
    private _x;
    private _y;
    constructor(_x: number, _y: number);
    mover(direction: Sentido): void;
    get x(): number;
    set x(xs: number);
    get y(): number;
    set y(ys: number);
    equals(coordnada: Coordenada): boolean;
    bajar(): void;
    avanzar(): void;
    toString(): string;
}
