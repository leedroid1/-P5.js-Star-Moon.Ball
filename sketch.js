let balls = [];
let stars = [];
let angle1 = 0;
let scalar = 120;
let moon;
let tree;
let slider;

function setup() {
  createCanvas(600, 600);
  for(let i = 0; i < 15; i++) {
  stars[i] = new Particle();
}
  moon = new Yellow();
  tree = new Green();
  slider = createSlider(0, 70, 0, 0);
  slider.position(20, 80);
}


function draw() {
  background(slider.value());
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
  
  tree.display();
  
  
}

function mousePressed() {
  balls.push(new Mover());
}

