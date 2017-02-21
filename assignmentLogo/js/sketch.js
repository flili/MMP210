function setup() {
    //use code to create and draw on browser
    //createCanvas(width, height)
    createCanvas(700, 700);
    background("lightblue");
    
    
    
    noStroke();
    arc(180, 250, 50, 50, -PI, 0);
    arc(230, 250, 80, 80, -PI, 0);
    arc(300, 250, 100, 100, -PI, 0);
    arc(350, 250, 50, 50, -PI, 0);
    
    //plane
    noFill();
    stroke(0);
    triangle(250, 150, 500, 300, 400, 170);
    
    
    //TEXT
    fill(0);
    textSize(16);
    text("FLY", 300, 250);
    
    
}
    

