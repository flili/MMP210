function setup() {
    //use code to create and draw on browser
    //createCanvas(width, height)
    createCanvas(640, 600);
    
    background('lightgray');
    
    ellipse(300, 300, 400);
    
    rect(175, 175, 50, 50);
    rect(275, 175, 50, 50);
    
    line(250, 245, 200, 350);
    
    triangle(175, 400, 325, 400, 345, 380);
    
    arc (450, 280, 70, 90, PI+1, HALF_PI+1);
}