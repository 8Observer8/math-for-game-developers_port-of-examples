import { Vector } from "./Vector";

export class Point
{
    public x: number;
    public y: number;

    public constructor(x = 0, y = 0)
    {
        this.x = x;
        this.y = y;
    }
    
    public AddVector(v: Vector): Point
    {
        let p2 = new Point();

        p2.x = this.x + v.x;
        p2.y = this.y + v.y;

        return p2;
    }
}