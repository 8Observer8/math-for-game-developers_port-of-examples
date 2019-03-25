define(["require", "exports", "../src_client/Vector", "../src_client/Point"], function (require, exports, Vector_1, Point_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("PointTests", function () {
        it("AddVector_PositiveVelocityCoords_ReturnsNewPoint", function () {
            var p = new Point_1.Point(1, 2);
            var v = new Vector_1.Vector(2, 1);
            var p2 = p.AddVector(v);
            expect(p2.x).toBe(3);
            expect(p2.y).toBe(3);
        });
        it("AddVector_NegativeVelocityCoords_ReturnsNewPoint", function () {
            var p = new Point_1.Point(1, 2);
            var v = new Vector_1.Vector(-2, -1);
            var p2 = p.AddVector(v);
            expect(p2.x).toBe(-1);
            expect(p2.y).toBe(1);
        });
    });
});
//# sourceMappingURL=Point.spec.js.map