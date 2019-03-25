define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Point = /** @class */ (function () {
        function Point(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        Point.prototype.AddVector = function (v) {
            var p2 = new Point();
            p2.x = this.x + v.x;
            p2.y = this.y + v.y;
            return p2;
        };
        return Point;
    }());
    exports.Point = Point;
});
//# sourceMappingURL=Point.js.map