var balloons = []; // array of Jitter objects

function setup() {
  createCanvas(300, 400);
//colors
    r = random(255); 
    g = random(255);
    b = random(255);
    
  // Create objects
  for (var i=0; i<30; i++) {
    balloons.push(new Jitter());
  }
}

function draw() {
  background("#ccf");
  for (var i=0; i<balloons.length; i++) {
    balloons[i].move();
    balloons[i].display();
  }
}

// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 80);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };
fill(r,g,b);
    push();
  this.display = function() {
    line(this.x, this.y, 150
         +this.diameter, 390+this.diameter);
    ellipse(this.x, this.y, this.diameter, this.diameter);
   
      pop();
  };
    translate();
    pop();
      
}
