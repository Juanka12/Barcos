export class Limite {

    constructor(private _min: number, private _max: number) {
    }
    get max(): number {
        return this._max;
    }
    get min(): number {
        return this._min;
    }
}