//self portrait
function setup() {
    //use code to create and draw on browser
    //createCanvas(width, height)
    createCanvas(700, 700);
    
    background(170, 206, 226);
    
    //two points, numbers in (x1, y1 ; x2, y2)
    
    //ellipse right-left,up-down, width, height
    //head
    fill(256, 220, 177)
    ellipse(300,400,400,550);
    
    //eyes
     fill('white')
    ellipse(200, 350, 150, 50);
    ellipse(400, 350, 150, 50);
   
    //pupils
     ellipseMode(RADIUS);  // Set ellipseMode to RADIUS
    fill('black');
    ellipse(200, 350, 20, 20);
    ellipse(400, 350, 20, 20);
    //brow
    triangle(120, 300, 275, 270, 280, 300);
    triangle(320, 300, 325, 270, 480, 300);
    
    //nose
    fill('orange')
    triangle(275, 450, 300, 480, 300, 380);
    
    // mouth
    fill('red')
    arc(300, 520, 80, 60, 0, PI);
    
    
    
    //hair
   fill('black')
    rect (50, 250, 85, 550);
    rect (465, 250, 85, 550);
     arc(300, 250, 250, 150, -PI, 0);
}
    

