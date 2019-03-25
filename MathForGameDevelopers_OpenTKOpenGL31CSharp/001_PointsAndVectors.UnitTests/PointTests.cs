using NUnit.Framework;

namespace _001_PointsAndVectors.UnitTests
{
    [TestFixture]
    public class PointTests
    {
        [Test]
        public void AddVector_PositiveVelocityCoords_ReturnsNewPoint()
        {
            // Arrange
            Point p = new Point(1f, 2f);
            Vector v = new Vector(2f, 1f);

            // Act
            Point p2 = p.AddVector(v);

            // Assert
            Assert.That(p2.X, Is.EqualTo(3f));
            Assert.That(p2.Y, Is.EqualTo(3f));
        }

        [Test]
        public void AddVector_NegativeVelocityCoords_ReturnsNewPoint()
        {
            // Arrange
            Point p = new Point(1f, 2f);
            Vector v = new Vector(-2f, -1f);

            // Act
            Point p2 = p.AddVector(v);

            // Assert
            Assert.That(p2.X, Is.EqualTo(-1f));
            Assert.That(p2.Y, Is.EqualTo(1f));
        }
    }
}
