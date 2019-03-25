
namespace _001_PointsAndVectors
{
    public class Point
    {
        public float X { get; set; }
        public float Y { get; set; }

        public Point(float x = 0f, float y = 0f)
        {
            X = x;
            Y = y;
        }

        public Point AddVector(Vector v)
        {
            Point p2 = new Point();
            p2.X = X + v.X;
            p2.Y = Y + v.Y;
            return p2;
        }
    }
}
