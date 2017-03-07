function setup() {
    //use code to create and draw on browser
    //createCanvas(width, height)
    createCanvas(1740, 1740);
    noStroke();
}
function draw () {
    //background(145, 86, 87);
    //example class
    
    var windowWidth = width/6; // window width
    var windowHeight = height/2; // window height
    
    for ( var x = windowWidth/4; x < width; x+=windowWidth) {
       for (var y = windowHeight/4; y < height; y+=windowHeight) {
           
           fill(167, 82, 54);
           rect(x, y, windowWidth/2, windowHeight/2);
           
           fill("black");
           stroke(167, 82, 54);
           
           rect(x, y, windowWidth/4, windowHeight/8);
           rect(x, y + windowHeight/8, windowWidth/4, windowHeight/8);
           rect(x + windowWidth/4, y + windowHeight/8, windowWidth/4, windowHeight/8);
           rect(x + windowWidth/4, y + windowHeight/8 * 2, windowWidth/4, windowHeight/8);
           
           
        }
    }
        
}
    
    
    
    
    //myWidow 
    //two points, numbers in (x1, y1 ; x2, y2)
    //fill(60, 59, 60)
    //ellipse right-left,up-down, width, height
    //triangle(280,60,200,95,375,95)
    //rect(185,95,200,370)
}
   