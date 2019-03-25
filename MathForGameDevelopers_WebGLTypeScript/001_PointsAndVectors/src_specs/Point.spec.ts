import { Vector } from "../src_client/Vector";
import { Point } from "../src_client/Point";

describe("PointTests", () =>
{
    it("AddVector_PositiveVelocityCoords_ReturnsNewPoint", () =>
    {
        let p = new Point(1, 2);
        let v = new Vector(2, 1);

        let p2 = p.AddVector(v);

        expect(p2.x).toBe(3);
        expect(p2.y).toBe(3);
    });

    it("AddVector_NegativeVelocityCoords_ReturnsNewPoint", () =>
    {
        let p = new Point(1, 2);
        let v = new Vector(-2, -1);

        let p2 = p.AddVector(v);

        expect(p2.x).toBe(-1);
        expect(p2.y).toBe(1);
    });
});
