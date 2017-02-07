function setup() {
    //use code to create and draw on browser
    //createCanvas(width, height)
    createCanvas(640, 480);
    
    background('green');
    
    
    fill('blue');
    ellipse(50, 50, 50);
    
    fill('#f4d85d');
    arc(150, 50, 50, 75, 5, PI + 1 );
    
    strokeWeight(10);
    stroke(200, 0, 100);
    line(50, 50, 150, 50);
    
    strokeWeight(2);
    quad(75, 75, 150, 150, 80, 180, 50, 65);
    
    
    noStroke();
    rect(0, 240, 640,480);
    
    stroke(200, 0,100);
    noFill();
    triangle(40, 90, 33, 66, 480, 275);
}