// windows
function setup() { 
   createCanvas(740,2500);
    noStroke();
}

function draw() {
//Building background color 
    background(51, 63, 55);
// 6 windows inline
    var windowWidth = width/3; // window width
// 4 windows down
    var windowHeight = height/4; // window height
    
    for ( var x = windowWidth/4; x < width; x+=windowWidth) {
    for (var y = windowHeight/4; y < height; y+=windowHeight) {
           
           fill(20, 31, 25);
           rect(x, y, windowWidth/2, windowHeight/2);
//shadow top curtain window
           fill(131,67,73);
           
           rect(x, y, windowWidth/2, windowHeight/8);
//curtain widow
           fill(186,82,76);
           rect(x, y + windowHeight/8, windowWidth/2, windowHeight/4);
           rect(x + windowWidth/4, y + windowHeight/8, windowWidth/4, windowHeight/8);
           rect(x + windowWidth/4, y + windowHeight/8 * 2, windowWidth/4, windowHeight/8);
//top window
           
           
           
        }
    }
        
}