//animation
//universal variables in the program
var x = 10;
var y = 10;


function setup() { 
   createCanvas(640,480);
}

function draw() {
    background(200);
//ellipse
    ellipse (x, 100, 50);
//movement timing
    x += 1;
//stops the movement at the end of the width
    if (x > width) {
        x = 0;
    }
    if( y>)

}