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
    
    for ( var x = windowWidth/4; x < width; x+=windowWidth) {
    for (var y = windowHeight/4; y < height; y+=windowHeight) {
        noStroke();
        fill(20, 31, 25);
        rect(x, y, windowWidth/2, windowHeight/2);
//shadow top curtain window
        fill(131,67,73);
        rect(x, y, windowWidth/2, windowHeight/8);
//curtain widow
        fill(186,82,76);
        rect(x, y + windowHeight/8, windowWidth/2, windowHeight/4);
//curtain shadow down
        fill(131,67,73);
        noStroke();
        rect(x, y+windowHeight/3.5, windowWidth/2, windowHeight/10);
//marco
        stroke(0);
        noFill();
        noFill();
        strokeWeight(4)
           rect(x + windowWidth/500, y + windowHeight/16 * 2, windowWidth/2, windowHeight/4);
//top window
        fill(175,181,146);
        line(x, windowWidth/2, windowHeight/2);
        noStroke();
        fill(20, 31, 25);
        rect(x-20, y-20, windowWidth/1.5, windowHeight/10,x);
           
           
        }
    }
        
}