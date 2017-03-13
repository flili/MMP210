function setup() {
    //use code to create and draw on browser
    //createCanvas(width, height)
    createCanvas(700, 500);
    background(255);
    
    
    var lines = color(100,149,237);
    
    noStroke();
    rect(275,150,220,150);
    triangle(275,150,240,300,400,300);
    triangle(495,300,440,150,535,150);
    stroke(lines);
    strokeWeight(8);
    line(275,150,240,300);
    line(240,300,495,300);
    line(495,300,535,150);
    triangle(280,150,528,150,380,250);
    line(80,150,260,150);
    line(110,200,250,200);
    line(140,250,240,250);
    line(110,300,220,300);
    //TEXT
    fill("white");
    strokeWeight(10);
    stroke(lines);
    textSize(70);
    textFont("Arial");
    textStyle(ITALIC);
    text("MAIL", 350, 400);
    
    
}
    

