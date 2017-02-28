function setup() {
createCanvas(800, 800);
    line (55, 25, 70,800);
    //two points, numbers in (x1, y1 ; x2, y2)
    
    //ellipse right-left,up-down, width, height
    //head
    ellipse(300,500,400,550);
    //eyes
    
    ellipse(200, 450, 150, 55);
    ellipse(400, 450, 150, 55);
    //pupils
    ellipseMode(RADIUS);  // Set ellipseMode to RADIUS
    fill(25);
    ellipse(200, 450, 20, 20);
    ellipse(400, 450, 20, 20);
    //brows
    
}