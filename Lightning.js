class Lightning {
  constructor(x, y, width, height) {
    this.body = Matter.Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.image = loadImage("images/light1.png");
    this.image2 = loadImage("images/light2.png");
    this.image3 = loadImage("images/light3.png");
    this.image4 = loadImage("images/light4.png");
  }
  display() {
    var pos = this.body.position;
    imageMode(CENTER);
    if (frameCount % 60 === 0) {
      var rand = Math.round(random(1, 4));
      switch (rand) {
        case 1:
          image(this.image, pos.x, pos.y, this.width);
          break;
        case 2:
          image(this.image2, pos.x, pos.y, this.width);
          break;
        case 3:
          image(this.image3, pos.x, pos.y, this.width);
          break;
        case 4:
          image(this.image4, pos.x, pos.y, this.width);
          break;
      }
    }
  }
}
