//variable for Microphone
var mic;
var eyel,eyer;
var r, g, b;
noStroke();

function setup() {
    createCanvas(440, 400);
    eyel = new eyes(130, 150, 70);
    eyer = new eyes(290, 150, 70);

  //Audio input
  mic = new p5.AudioIn();

    mic.start();
}

function draw() {
    background (0);
    var vol = mic.getLevel();
    
    ellipse (width/2, 300, 250, vol*300);
    console.log (vol);
//eyes
    eyel.update(mouseX, mouseY);
    eyer.update(mouseX, mouseY);
    eyel.display();
    eyer.display();
}


function eyes(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;

  this.update = function (mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };

  this.display = function () {
    push();
    translate(this.x, this.y);
    fill(255);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill(r,g,b)
    fill(
        random(16,255),
        random(30,223),
        random(17,252)
    );
    ellipse(this.size / 4, 0, this.size / 2, this.size /2);
    pop();
  };
}



