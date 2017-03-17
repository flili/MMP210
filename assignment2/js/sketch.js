function setup() {
    //use code to create and draw on browser
    //createCanvas(width, height)
   createCanvas(700, 500);
    background("lightblue");
    
    //teapot
    //sides,up-down
    triangle (150,200,225,225,225,275);
    //
    ellipse (490,250,70,80);
    fill("lightblue");
    ellipse(490,250,40,50);
    //
    fill(255);
    ellipse(350,250,275,175);
    arc(350, 180, 200, 100, -PI, 0);
    ellipse(350,125,20,20);
    
    
    
    //cupcake
    
    triangle(390,300,410,350,450,300);
    triangle(510,300,490,350,450,300);
    rect(410,300,80,50);
    //
    arc(450, 300, 100, 80, -PI, 0);
    fill(255);
    //
    line(450,260,460,240);
    ellipse(450,260,20,20);
    
    
    
    //TEXT
    //fill(0);
    //textSize(16);
    //text("FLY", 300, 250);
}