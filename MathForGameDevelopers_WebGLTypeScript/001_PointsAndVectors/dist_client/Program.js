define(["require", "exports", "./Point", "./Vector"], function (require, exports, Point_1, Vector_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            var p = new Point_1.Point(1, 0);
            var v = new Vector_1.Vector(2, 3);
            var p2 = p.AddVector(v);
            this.PrintText("Result: (" + p2.x + ", " + p2.y + ")");
        };
        Program.PrintText = function (text) {
            var output = document.createElement("div");
            output.innerHTML = text;
            document.body.appendChild(output);
        };
        return Program;
    }());
    Program.Main();
});
//# sourceMappingURL=Program.js.map