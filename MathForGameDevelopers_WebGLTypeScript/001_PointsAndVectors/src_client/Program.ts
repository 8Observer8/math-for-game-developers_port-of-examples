import { Point } from "./Point";
import { Vector } from "./Vector";

class Program
{
    public static Main(): void
    {
        let p = new Point(1, 0);
        let v = new Vector(2, 3);

        let p2 = p.AddVector(v);
        this.PrintText(`Result: (${p2.x}, ${p2.y})`);
    }

    private static PrintText(text: string)
    {
        let output = document.createElement("div");
        output.innerHTML = text;
        document.body.appendChild(output);
    }
}
Program.Main();