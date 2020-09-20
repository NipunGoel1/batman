class Umbrella {
  constructor(x, y, width) {
    var options = {
      isStatic: true,
    };
    this.body = Matter.Bodies.circle(x, y, width, options);
    this.width = width;
    this.image = loadImage("images/walking_5.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    imageMode(CENTER);

    image(this.image, pos.x, pos.y + 40, this.width * 5, this.width * 5);
  }
}
