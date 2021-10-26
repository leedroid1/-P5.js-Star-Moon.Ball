class Particle {
  constructor() {
    this.pos = createVector(random(0, width), random(0, height));
    this.vel = createVector(random(-0.5,0.5), random(-0.5, 0.5));
  }
  update() {
    this.pos.add(this.vel);
  }
  show() {
    noFill();
    stroke(255, 255, 0);
    triangle((this.pos.x - 10), (this.pos.y +5), this.pos.x, (this.pos.y - 10), (this.pos.x + 10), (this.pos.y + 5));
    triangle((this.pos.x + 10), (this.pos.y -5), this.pos.x, (this.pos.y + 10), (this.pos.x - 10), (this.pos.y - 5));
  }
  edge() {
    if ((this.pos.y > height) || (this.pos.y < 0)) {
      this.vel.y *= -1;
    }
    if ((this.pos.x > width) || (this.pos.x < 0)) {
      this.vel.x *= -1;
  }
}
}