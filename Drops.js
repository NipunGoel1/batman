class Drops {
  constructor(x, y, width) {
    var options = {
      isStatic: false,
      friction: 0.1,
    };

    this.body = Matter.Bodies.circle(x, y, width);
    this.width = width;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, this.width, this.width);
  }
  update() {
    if (this.body.position.y > 600) {
      Matter.Body.setPosition(this.body, {
        x: random(0, 500),
        y: random(0, 300),
      });
    }
  }
}
