// windows
function setup() { 
   createCanvas(740,2500);
    noStroke();
}

function draw() {
//Building background color 
    background(51, 63, 55);
// 3 windows inline width/3 = 246.6
    var windowWidth = width/3; // window width
// 4 windows down height/4 = 625
    var windowHeight = height/4; // window height
    
    
//colors
    //green
    var g = color (51, 63, 55);
    //light Green
    var lg = color (143, 151, 123);
    //dark Green
    var dg = color (20, 31, 25);
    //Dark Orange
    var dn = color (131,67,73);
    //light Orange
    var lo = color (186,82,76);

    
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
        stroke(255);
        strokeWeight(8);
        rect(x-4, y+10, windowWidth/2+10, windowHeight/2-85);
//actual marco inside
        
        
        
        
        stroke(g);
        strokeWeight(4);
        rect(x+12, y+11, windowWidth/2-22, windowHeight/2-87);
//marco back
    //orange shadow outside
        stroke(dn);
        strokeWeight(8);
        noFill();
        rect(x + windowWidth/y-4, y + windowHeight/16, windowWidth/2+13, windowHeight/2.3);
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
        rect(x-2.1 + windowWidth/y, y + windowHeight/12-7, windowWidth/2-5, windowHeight/2.5);

//shadow marco front window
        stroke(255);
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
        
        
        
         
        }
    }
        
}