import { Casilla } from "./casilla";
import { Coordenada } from "./coordenada";
import { Estado } from "./estado";
import { Sentido } from "./sentido";

export class Barco {
    private _position:Casilla[]=[];

    constructor(private _size:number, initial:Coordenada,direction:Sentido){
        this.crearBarco(initial,direction);
    }
    private crearBarco(initial:Coordenada,direction:Sentido){
        for (let index = 0; index < this.size; index++) {
            this.position.push(new Casilla(new Coordenada(initial.x,initial.y),Estado.indemne));
            //Es la coordenada la que tiene que comprobar la direccion del barco
            initial.mover(direction);
        }
    }

    public compruebaSolapamiento(casilla:Casilla[]):boolean{
        for (let index = 0; index < casilla.length; index++) {
            for (let indexj = 0; indexj < this.position.length; indexj++) {
                if(this.position[indexj].coordenada.equals(casilla[index].coordenada)){
                    return true;
                }
            }
        }
        return false;
    }
    get position(){
        return this._position;
    }
    get size(){
        return this._size;
    }
}