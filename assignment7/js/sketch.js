// windows
function setup() { 
   createCanvas(640, 480);
    noStroke();
}

function draw() {
    background(220);
    
    var windowWidth = width/6; // window width
    var windowHeight = height/2; // window height
    var x = 10, y = 10;
    for (var i = 0; i < 4; i++) {
        for (var h = 0; h < 2; h++) {
            drawWindow(x + 150 * i, y + 150 * h, windowWidth, windowHeight);
        }
    }
    
}

function drawWindow(x, y, windowWidth, windowHeight) {
    fill(167, 82, 54);
    rect(x, y, windowWidth/2, windowHeight/2);
           
    fill("black");
    stroke(167, 82, 54);
           
    rect(x, y, windowWidth/4, windowHeight/8);
    rect(x, y + windowHeight/8, windowWidth/4, windowHeight/8);
    rect(x + windowWidth/4, y + windowHeight/8, windowWidth/4, windowHeight/8);
    rect(x + windowWidth/4, y + windowHeight/8 * 2, windowWidth/4, windowHeight/8);
    
<<<<<<< HEAD
    for ( var x = windowWidth/4; x < width; x+=windowWidth) {
    for (var y = windowHeight/4; y < height; y+=windowHeight) {
        
        
        noStroke();
        fill(dg);
        rect(x-10, y, windowWidth/2+15, windowHeight/2);

//shadow top curtain window
        fill(dn);
        rect(x, y, windowWidth/2, windowHeight/8);
        
//curtain widow
        fill(lo);
        rect(x, y + windowHeight/9, windowWidth/2, windowHeight/4);
        
//curtain shadow down
        fill(dn);
        noStroke();
        rect(x, y+windowHeight/3.5, windowWidth/2, windowHeight/10);
        
//marco
//marco inside window
        noFill();
        stroke(dg);
        strokeWeight(8);
        rect(x-4, y+10, windowWidth/2+10, windowHeight/2-85);
//actual marco inside
        
        stroke(g);
        strokeWeight(6);
        rect(x-2, y+12, windowWidth/2+8, windowHeight/2-87);
//marco back
    //orange shadow outside
        stroke(dn);
        strokeWeight(8);
        noFill();
        rect(x + windowWidth/y-5, y + windowHeight/16, windowWidth/2+13, windowHeight/2.3);
//marco half
        strokeWeight(8);
        stroke(dg);
        noFill();
        rect(x + windowWidth/y, y + windowHeight/13-6, windowWidth/2, windowHeight/4.5);
//actual marco half 
        strokeWeight(6);
        stroke(g);
        noFill();
        rect(x + windowWidth/y, y + windowHeight/13-6, windowWidth/2, windowHeight/4.5);

//light green shadow inside
        noFill();
        stroke(lg);
        strokeWeight(4);
        rect(x-5 + windowWidth/y, y + windowHeight/12-10, windowWidth/2+6, windowHeight/2.3);

//shadow marco front window
        stroke(dg);
        strokeWeight(10);
        rect(x-5 + windowWidth/y, y + windowHeight/15-10, windowWidth/2+10, windowHeight/2.35);
        
//actual marco font window
        stroke(g);
        strokeWeight(8);
        rect(x-5 + windowWidth/y, y + windowHeight/15-10, windowWidth/2+10, windowHeight/2.35);

//top window
        noStroke();
        
    //light green shadow up outside
        fill(lg);
        rect(x-33, y-2, windowWidth/1.3, windowHeight/25);
    //dark
        fill(dg);
        
        rect(x-20, y+5, windowWidth/1.5, windowHeight/15,x);
        
        rect(x-34, y, windowWidth/1.28, windowHeight/25);
        
    //actual window
        
        fill(g);
        rect(x-15, y+10, windowWidth/1.6, windowHeight/20,x);
        
        rect(x-30, y, windowWidth/1.35, windowHeight/30);
        
        
//Bottom Window
    //light green shadow window down
        fill(lg);
        rect(x-20, y+298, windowWidth/1.5, windowHeight/50);
        
    //dark shadow
        fill(dg);
        noStroke();
        
        rect(x-21, y+300, windowWidth/1.48, windowHeight/50);
        
        rect(x-21, y+300, windowWidth/1.48, windowHeight/25,x);
        
        
        rect(x-10, y+300, windowWidth/1.7, windowHeight/15,x);
        
        rect(x-2, y+330, windowWidth/1.9, windowHeight/50);
        
    //actual window
        fill(g);
        rect(x-22, y+299.9, windowWidth/1.46, windowHeight/60);
        
        rect(x-15, y+315, windowWidth/1.60, windowHeight/100,x);
        
        rect(x-2, y+325, windowWidth/1.9, windowHeight/65);
        
        0
        
         
        }
    }
        
=======
    fill(50);
    noStroke();
    rect(x - windowWidth/16, y + windowHeight/2, windowWidth/2 + windowWidth/8, windowHeight/16);
>>>>>>> origin/master
}