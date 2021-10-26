class Yellow {
  constructor() {
    this.angle = 0;
    this.scalar = 120;
  }
  update() {
    this.ang = radians(this.angle);
    this.x = width / 2 + this.scalar * cos(this.ang);
    this.y = height / 2 + this.scalar * sin(this.ang);
  }
  display() {
    fill(255, 255, 0);
    ellipse(this.x, this.y, this.scalar, this.scalar);
    this.angle += 1;
  }
}