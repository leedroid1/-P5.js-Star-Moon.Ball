class Mover {
  constructor() {
    this.pos = createVector(mouseX, mouseY);
    this.vel = createVector(random(-10, 10), random(-10, 10));
    this.acc = createVector(0, 0.2);
    this.w = 10;
  }
  
  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
  }
  
  edge() {
    if (this.pos.x > width || this.pos.x < 0) {
      this.vel.x = this.vel.x * -1;
    }
    if (this.pos.y > height) {
      this.vel.y = this.vel.y * -0.6;
      this.pos.y = height;
    }
    

  }
  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.w);
  }
}