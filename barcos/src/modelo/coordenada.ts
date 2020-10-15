import { Sentido } from "./sentido";

export class Coordenada {
    constructor(private _x:number,private _y:number){
    }

    public mover(direction:Sentido){
        if(direction==Sentido.abajo){
            this.bajar();
        }else{
            this.avanzar();
        }
    }
    
    get x(){
        return this._x;
    }
    set x(xs:number){
        this._x = xs;
    }
    get y(){
        return this._y;
    }
    set y(ys:number){
        this._y = ys;
    }
    public equals(coordnada:Coordenada):boolean{
    return this.x==coordnada.x||this.y==coordnada.y;
    }

    public bajar(){
        this.y++;
    }
    public avanzar(){
        this.x++;
    }
    public toString():string{
        return this.x.toString()+" - "+this.y.toString();
    }
}