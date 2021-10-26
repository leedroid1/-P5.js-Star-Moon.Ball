let balls = [];
let stars = [];
let angle1 = 0;
let scalar = 120;
let moon;

function setup() {
  createCanvas(600, 600);
  for(let i = 0; i < 15; i++) {
  stars[i] = new Particle();
}
  moon = new Yellow();
}


function draw() {
  background(0, 20);
  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].edge();
    balls[i].show();
  }
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
    stars[i].edge();
  }
  moon.update();
  moon.display();
  
  
}

function mousePressed() {
  balls.push(new Mover());
}
