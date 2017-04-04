// windows
function setup() { 
    createCanvas (640,640);
    background(255);
    
    stroke ("white");
    
    var numberOfRectangles = 200;
    var columns = Math.sqrt(numberOfRectangles);
    var rows = Math.sqrt(numberOfRectangles);

//
//
    var w = width / columns;
    var h = height / rows;
    
    for (var x = 0; x <= width; x += w) {
        for ( var y = 0; y <= height; y += h) {
            
            
            var b;
        //rain
            if (y < height/4){
                b = random (200, 255);
                x = random (-25, 25);
                w = random (10,20);
            } else {
                b = random (0, 100);
            }
            
        //green leaves
            fill(
            random (0 , 50),
            random (150, 255),
            b
            );
            
        //Flowers
            if(y > height * 3/4) {
                ellipse (x,y,w,h);
            } else{
                rect(x, y, w, h);
            }
            
        }
    }
}
