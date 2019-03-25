using System;

namespace _001_PointsAndVectors
{
    class Program
    {
        static void Main(string[] args)
        {
            Point p = new Point(1f, 0f);
            Vector v = new Vector(2f, 3f);

            Point p2 = p.AddVector(v);
            Console.WriteLine(string.Format("Result: ({0}, {1})", p2.X, p2.Y));

            // Console Delay
            Console.ReadKey();
        }
    }
}
