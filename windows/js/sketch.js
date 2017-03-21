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
        fill(20, 31, 25);
        rect(x, y, windowWidth/2, windowHeight/2);
//shadow top curtain window
        fill(dn);
        rect(x, y, windowWidth/2, windowHeight/8);
//curtain widow
        fill(lo);
        rect(x, y + windowHeight/8, windowWidth/2, windowHeight/4);
//curtain shadow down
        fill(dn);
        noStroke();
        rect(x, y+windowHeight/3.5, windowWidth/2, windowHeight/10);
//marco
        stroke(dg);
        strokeWeight(8);
        noFill();
//marco back
           rect(x + windowWidth/y, y + windowHeight/13, windowWidth/2, windowHeight/2.5);

//marco half
        stroke(dg);
        noFill();
        rect(x + windowWidth/y, y + windowHeight/13, windowWidth/2, windowHeight/4.7);
        
//top window
        noStroke();
        fill(dg);
        rect(x-20, y+5, windowWidth/1.5, windowHeight/15,x);
        
        rect(x-33, y, windowWidth/1.3, windowHeight/25);
        
//Bottom Window
        
        fill(dg);
        noStroke();
        rect(x-20, y+300, windowWidth/1.5, windowHeight/50);
        rect(x-20, y+300, windowWidth/1.5, windowHeight/30,x);
        
        
        rect(x-10, y+300, windowWidth/1.7, windowHeight/18,x);
        
        rect(x-2, y+330, windowWidth/1.9, windowHeight/50);
//shadows
        stroke(lg);
        line 
         
        }
    }
        
}